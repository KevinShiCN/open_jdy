#!/usr/bin/env node
/**
 * scrape-knowledge.mjs - 爬取金蝶云社区帮助中心知识文章
 *
 * 数据源：https://vip.kingdee.com/knowledge?productLineId=35&productId=9
 * 策略：Playwright 初始化 session，然后通过 page.evaluate 调用 REST API
 *
 * 用法:
 *   node scripts/scrape-knowledge.mjs                    # 全量爬取
 *   node scripts/scrape-knowledge.mjs --list-only        # 仅收集文章列表(不下载内容)
 *   node scripts/scrape-knowledge.mjs --category 采购管理 # 单分类
 *   node scripts/scrape-knowledge.mjs --resume           # 断点续爬
 *   node scripts/scrape-knowledge.mjs --concurrency 5    # 并发数(默认3)
 *   node scripts/scrape-knowledge.mjs --delay 500        # 请求间隔ms(默认300)
 *   node scripts/scrape-knowledge.mjs --force            # 强制覆盖已有文件
 */
import { writeFileSync, readFileSync, mkdirSync, existsSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { createHash } from 'crypto';
import { chromium } from 'playwright';

const ROOT = join(import.meta.dirname, '..');
const DOCS_DIR = join(ROOT, 'docs', '帮助中心');
const META_DIR = join(ROOT, '_meta', '帮助中心');
const BASE_URL = 'https://vip.kingdee.com';

// CLI args
const arg = (name) => process.argv.find((_, i, a) => a[i - 1] === `--${name}`);
const flag = (name) => process.argv.includes(`--${name}`);
const CONCURRENCY = parseInt(arg('concurrency') || '3');
const DELAY_MS = parseInt(arg('delay') || '300');
const CATEGORY_FILTER = arg('category') || '';
const LIST_ONLY = flag('list-only');
const RESUME = flag('resume');
const FORCE = flag('force');
const CONSECUTIVE_FAIL_LIMIT = 10;

// ── 分类树（从页面 Vue 组件提取） ──────────────────────────────────
const CATEGORIES = [
  { id: '16640', name: '采购管理', code: 'BQATVIQWIHO', knowledges: 965 },
  { id: '16641', name: '销售管理', code: 'BQAXLMQ5SJM', knowledges: 1461 },
  { id: '16644', name: '账务处理', code: '83bfebc8000017ac', knowledges: 1130 },
  { id: '16645', name: '财务报表', code: 'NCTOF7SUF', knowledges: 401 },
  { id: '16647', name: '资产管理', code: '0ZLKNII2SO2', knowledges: 353 },
  { id: '16648', name: '基础资料', code: '0efa1992000000ac', knowledges: 1350 },
  { id: '16649', name: '系统设置', code: '83bfebc8000037ac', knowledges: 1533 },
  { id: '16642', name: '库存管理', code: 'BQCBZBO37', knowledges: 1054 },
  { id: '301443471707922176', name: '客户经营', code: '26TT6IDQOKFT', knowledges: 170 },
  { id: '25619', name: '移动应用', code: 'JDYMOBILE', knowledges: 523 },
  { id: '116953513879476736', name: '轻分析', code: '83bfebc800003aac', knowledges: 50 },
  { id: '16643', name: '应收应付', code: 'CB730J02V91', knowledges: 759 },
  { id: '538426955834825216', name: '零售资料', code: '0MXUNMGANR5', knowledges: 173 },
  { id: '117285026248897792', name: '门店管理', code: '0M7Z2PRTWVQ', knowledges: 555 },
  { id: '116954800742275584', name: '会员管理', code: '0M7YY1GQOVL4', knowledges: 78 },
  { id: '116964739732811520', name: '门店营销', code: '0NGI3DMK3N5K', knowledges: 81 },
  { id: '353474828839550208', name: '门店商城', code: '1565264578768563200', knowledges: 68 },
  { id: '18118', name: '订货商城', code: '06TYTIGD96P', knowledges: 641 },
  { id: '229251000362897152', name: '出纳管理', code: '0R3VCCLR7WP', knowledges: 235 },
  { id: '16646', name: '税务管理', code: 'NNHFOQM6K4C', knowledges: 280 },
  { id: '332125354502629632', name: '生产管理', code: '25O2S8HIJOI', knowledges: 778 },
  { id: '466293494538200320', name: '受托加工', code: '32MJO5KL6WOS', knowledges: 152 },
  { id: '332125462212268288', name: '委外管理', code: '25O2U69Y57AZ', knowledges: 300 },
  { id: '332167819532024064', name: '工资管理', code: '29821FUIHFJH', knowledges: 92 },
  { id: '433351633322446848', name: '帮助手册', code: 'guidebook', knowledges: 27 },
  { id: '471370603094490368', name: '行业解决方案', code: '001', knowledges: 8 },
  { id: '474640287474778624', name: '公共类知识', code: 'PUBLIC', knowledges: 494 },
  { id: '538435273760154112', name: '费用报销', code: '2607IKR8LG', knowledges: 227 },
  { id: '655167322600127488', name: 'POS云', code: 'pos', knowledges: 5 },
];

// ── HTTP（通过 Playwright page 执行，自动携带 session cookie）──
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** @type {import('playwright').Page} */
let _page = null;

async function initBrowser() {
  console.log('启动浏览器并初始化 session...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  });
  _page = await context.newPage();
  // 访问页面初始化 session
  await _page.goto('https://vip.kingdee.com/knowledge?productLineId=35&productId=9', {
    waitUntil: 'networkidle',
    timeout: 60000,
  });
  console.log('Session 初始化完成\n');
  return browser;
}

async function fetchJSON(path, retries = 3) {
  const url = path.startsWith('http') ? path : `${BASE_URL}${path}`;
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      if (attempt > 0) await sleep(2000 * attempt);
      const result = await _page.evaluate(async (fetchUrl) => {
        const res = await fetch(fetchUrl, { headers: { 'Accept': 'application/json' } });
        if (res.status === 429) return { __error: '429', __retryAfter: res.headers.get('retry-after') || '30' };
        if (!res.ok) return { __error: `HTTP ${res.status}` };
        return await res.json();
      }, url);

      if (result?.__error === '429') {
        const wait = parseInt(result.__retryAfter) * 1000;
        console.warn(`  ⏳ 429 限流，等待 ${wait / 1000}s...`);
        await sleep(wait);
        continue;
      }
      if (result?.__error) throw new Error(result.__error);
      return result;
    } catch (err) {
      if (attempt === retries - 1) throw err;
    }
  }
}

// ── HTML → Markdown ──────────────────────────────────────────────
function htmlToMarkdown(html) {
  if (!html) return '';
  let md = html;

  // 移除 script/style
  md = md.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  md = md.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');

  // 表格 → Markdown（需要优先处理，因为内部含其他标签）
  md = md.replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, (_, inner) => {
    return '\n' + tableToMd(inner) + '\n';
  });

  // 代码块
  md = md.replace(/<pre[^>]*><code[^>]*(?:class="language-(\w+)")?[^>]*>([\s\S]*?)<\/code><\/pre>/gi,
    (_, lang, code) => `\n\`\`\`${lang || ''}\n${decodeEntities(code).trim()}\n\`\`\`\n`);
  md = md.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi,
    (_, code) => `\n\`\`\`\n${decodeEntities(code).trim()}\n\`\`\`\n`);

  // 标题
  md = md.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n# $1\n');
  md = md.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n## $1\n');
  md = md.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n### $1\n');
  md = md.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '\n#### $1\n');
  md = md.replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi, '\n##### $1\n');
  md = md.replace(/<h6[^>]*>([\s\S]*?)<\/h6>/gi, '\n###### $1\n');

  // 引用块
  md = md.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, content) => {
    const lines = content.trim().split('\n').map(l => '> ' + l.trim()).join('\n');
    return '\n' + lines + '\n';
  });

  // 图片（处理各种属性顺序）
  md = md.replace(/<img[^>]*src="([^"]*)"[^>]*\/?>/gi, (match, src) => {
    const altMatch = match.match(/alt="([^"]*)"/i);
    const alt = altMatch ? altMatch[1] : '';
    const fullSrc = src.startsWith('/') ? `${BASE_URL}${src}` : src;
    return `![${alt}](${fullSrc})`;
  });

  // 链接
  md = md.replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, text) => {
    const cleanText = text.replace(/<[^>]+>/g, '').trim();
    const fullHref = href.startsWith('/') ? `${BASE_URL}${href}` : href;
    return `[${cleanText}](${fullHref})`;
  });

  // 粗体/斜体/行内代码
  md = md.replace(/<(?:strong|b)>([\s\S]*?)<\/(?:strong|b)>/gi, '**$1**');
  md = md.replace(/<(?:em|i)>([\s\S]*?)<\/(?:em|i)>/gi, '*$1*');
  md = md.replace(/<code>([\s\S]*?)<\/code>/gi, '`$1`');

  // 删除线
  md = md.replace(/<(?:del|s|strike)>([\s\S]*?)<\/(?:del|s|strike)>/gi, '~~$1~~');

  // 列表
  md = md.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, content) => {
    return '- ' + content.replace(/<[^>]+>/g, '').replace(/\n+/g, ' ').trim() + '\n';
  });
  md = md.replace(/<\/?(?:ul|ol)[^>]*>/gi, '\n');

  // 段落和换行
  md = md.replace(/<br\s*\/?>/gi, '\n');
  md = md.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '\n$1\n');
  md = md.replace(/<div[^>]*>([\s\S]*?)<\/div>/gi, '\n$1\n');
  md = md.replace(/<hr\s*\/?>/gi, '\n---\n');

  // 移除剩余 HTML 标签（u, span, section, etc.）
  md = md.replace(/<[^>]+>/g, '');

  // 解码 HTML 实体
  md = decodeEntities(md);

  // 清理多余空行和空格
  md = md.replace(/\n{3,}/g, '\n\n');
  md = md.replace(/[ \t]+$/gm, '');
  md = md.trim();

  return md;
}

function decodeEntities(text) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)));
}

function tableToMd(tableHtml) {
  // 提取所有行
  const rows = [];
  const rowRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  let rowMatch;
  while ((rowMatch = rowRegex.exec(tableHtml)) !== null) {
    const cells = [];
    const cellRegex = /<(?:th|td)[^>]*>([\s\S]*?)<\/(?:th|td)>/gi;
    let cellMatch;
    while ((cellMatch = cellRegex.exec(rowMatch[1])) !== null) {
      let text = cellMatch[1].replace(/<[^>]+>/g, '').trim();
      text = text.replace(/\n/g, ' ').replace(/\|/g, '\\|');
      text = decodeEntities(text);
      cells.push(text);
    }
    if (cells.length > 0) rows.push(cells);
  }
  if (rows.length === 0) return '';

  // 对齐列数
  const maxCols = Math.max(...rows.map((r) => r.length));
  const lines = [];
  rows.forEach((row, i) => {
    while (row.length < maxCols) row.push('');
    lines.push('| ' + row.join(' | ') + ' |');
    if (i === 0) {
      lines.push('| ' + row.map(() => '---').join(' | ') + ' |');
    }
  });
  return lines.join('\n');
}

// ── 文件名处理 ──────────────────────────────────────────────────
function sanitizeFilename(title) {
  let name = title
    .replace(/[<>:"/\\|?*\x00-\x1f]/g, '_')
    .replace(/\s+/g, ' ')
    .trim();
  // 限制长度（Windows 路径限制）
  if (name.length > 80) name = name.substring(0, 80).trim();
  return name || '无标题';
}

function contentHash(text) {
  const normalized = text
    .replace(/^crawl_date:.*$/m, '')
    .replace(/^updated_at:.*$/m, '');
  return createHash('sha256').update(normalized).digest('hex');
}

// ── 进度管理 ──────────────────────────────────────────────────────
function loadProgress() {
  const file = join(META_DIR, 'scrape-progress.json');
  if (existsSync(file)) return JSON.parse(readFileSync(file, 'utf-8'));
  return { fetched: {}, listDone: {} };
}

function saveProgress(progress) {
  mkdirSync(META_DIR, { recursive: true });
  writeFileSync(join(META_DIR, 'scrape-progress.json'), JSON.stringify(progress), 'utf-8');
}

// ── Phase 1: 收集文章列表 ─────────────────────────────────────────
async function fetchArticleList(category) {
  const articles = [];
  let page = 1;
  const pageSize = 50;

  while (true) {
    const url = `/knowledgeapi/knowledge/search?page=${page}&pageSize=${pageSize}`
      + `&sortType=newest&classifyId=${category.id}&classifyType=domain`
      + `&needProductLineFilter=false`;

    const data = await fetchJSON(url);
    if (!data.content || data.content.length === 0) break;

    for (const a of data.content) {
      articles.push({
        id: a.id,
        title: a.title,
        summary: a.summary?.substring(0, 200) || '',
        labels: a.labels?.map((l) => l.name) || [],
        creator: a.knowledgeCreator?.name || '',
        createdAt: a.createdAt || '',
        updatedAt: a.updatedAt || '',
        views: a.views || 0,
        useful: a.useful || 0,
        category: category.name,
      });
    }

    const totalPages = Math.ceil(data.totalElements / pageSize);
    process.stdout.write(`\r  [${category.name}] ${page}/${totalPages} 页, ${articles.length} 篇`);

    if (page >= totalPages) break;
    page++;
    await sleep(200);
  }

  console.log(`\r  [${category.name}] 完成: ${articles.length} 篇文章`);
  return articles;
}

// ── Phase 2: 下载文章内容并保存 ──────────────────────────────────
async function fetchAndSaveArticle(article, progress) {
  const dir = join(DOCS_DIR, article.category);
  const filename = sanitizeFilename(article.title) + '.md';
  const outPath = join(dir, filename);

  // 断点续爬：已下载则跳过
  if (RESUME && !FORCE && progress.fetched[article.id]) {
    return { status: 'skip', id: article.id };
  }

  // 文件已存在且非强制模式
  if (!FORCE && existsSync(outPath)) {
    progress.fetched[article.id] = true;
    return { status: 'exists', id: article.id };
  }

  try {
    const data = await fetchJSON(`/knowledgeapi/knowledge/${article.id}`);
    if (!data || !data.content) {
      return { status: 'empty', id: article.id };
    }

    // 转换 HTML → Markdown
    const bodyMd = htmlToMarkdown(data.content);

    // 构建完整 Markdown 文件
    const now = new Date().toISOString().split('T')[0];
    const labelStr = article.labels.join(', ') || '未分类';
    let md = `---\n`;
    md += `title: "${article.title.replace(/"/g, '\\"')}"\n`;
    md += `product: "金蝶云·星辰"\n`;
    md += `category: "${article.category}"\n`;
    md += `type: "${labelStr}"\n`;
    md += `source: "${BASE_URL}/knowledge/${article.id}"\n`;
    md += `author: "${article.creator}"\n`;
    md += `views: ${article.views}\n`;
    md += `created_at: "${article.createdAt}"\n`;
    md += `updated_at: "${article.updatedAt}"\n`;
    md += `crawl_date: "${now}"\n`;
    md += `---\n\n`;
    md += `# ${article.title}\n\n`;
    md += `> 产品：金蝶云·星辰 | 分类：${article.category} | 类型：${labelStr}\n`;
    md += `> 作者：${article.creator} | 阅读：${article.views} | 有用：${article.useful}\n`;
    md += `> 来源：[金蝶云社区](${BASE_URL}/knowledge/${article.id})\n\n`;
    md += bodyMd + '\n';

    // 哈希比对（非强制模式）
    if (!FORCE && existsSync(outPath)) {
      const newHash = contentHash(md);
      const oldHash = contentHash(readFileSync(outPath, 'utf-8'));
      if (newHash === oldHash) {
        progress.fetched[article.id] = true;
        return { status: 'unchanged', id: article.id };
      }
    }

    mkdirSync(dir, { recursive: true });
    writeFileSync(outPath, md, 'utf-8');
    progress.fetched[article.id] = true;
    return { status: 'saved', id: article.id };
  } catch (err) {
    return { status: 'fail', id: article.id, error: err.message };
  }
}

// ── 并发控制 ──────────────────────────────────────────────────────
async function processArticles(articles, progress) {
  let idx = 0;
  let consecutiveFails = 0;
  let aborted = false;
  const stats = { saved: 0, exists: 0, skip: 0, unchanged: 0, empty: 0, fail: 0 };
  const failures = [];

  async function worker() {
    while (idx < articles.length && !aborted) {
      const article = articles[idx++];
      const n = idx;
      const result = await fetchAndSaveArticle(article, progress);

      stats[result.status] = (stats[result.status] || 0) + 1;

      const tag = {
        saved: 'NEW', exists: 'HAS', skip: 'SKIP',
        unchanged: 'SAME', empty: 'EMPTY', fail: 'FAIL',
      }[result.status] || '??';

      // 只打印重要状态（saved/fail），其他用进度条
      if (result.status === 'fail') {
        console.log(`  [${n}/${articles.length}] FAIL: ${article.title.substring(0, 40)} - ${result.error}`);
        failures.push({ id: article.id, title: article.title, error: result.error });
        consecutiveFails++;
        if (consecutiveFails >= CONSECUTIVE_FAIL_LIMIT) {
          console.error(`\n  ⚠️ 连续 ${consecutiveFails} 次失败，疑似风控，自动停止`);
          aborted = true;
          break;
        }
      } else {
        consecutiveFails = 0;
        if (result.status === 'saved') {
          process.stdout.write(`\r  进度: ${n}/${articles.length} | NEW:${stats.saved} HAS:${stats.exists} SKIP:${stats.skip} FAIL:${stats.fail}`);
        } else if (n % 50 === 0) {
          process.stdout.write(`\r  进度: ${n}/${articles.length} | NEW:${stats.saved} HAS:${stats.exists} SKIP:${stats.skip} FAIL:${stats.fail}`);
        }
      }

      // 定期保存进度
      if (n % 100 === 0) saveProgress(progress);

      await sleep(DELAY_MS);
    }
  }

  const workers = [];
  for (let i = 0; i < CONCURRENCY; i++) {
    workers.push(worker());
  }
  await Promise.all(workers);

  console.log(`\n  完成: ${stats.saved} 新增, ${stats.exists} 已有, ${stats.skip} 跳过, ${stats.unchanged} 未变, ${stats.fail} 失败`);
  return { stats, failures, aborted };
}

// ── 生成索引 ──────────────────────────────────────────────────────
function generateIndex(allArticles) {
  const now = new Date().toISOString().split('T')[0];
  let md = `# 金蝶云·星辰 帮助中心文档索引\n\n`;
  md += `> 自动生成于 ${now}\n`;
  md += `> 数据来源：[金蝶云社区帮助中心](${BASE_URL}/knowledge?productLineId=35&productId=9)\n\n`;
  md += `## 使用说明\n\n`;
  md += `- 这些是**社区帮助中心**文档，不是 API 文档\n`;
  md += `- API 文档请查看 \`docs/精斗云/\` 和 \`docs/金蝶云星辰/\`\n`;
  md += `- 搜索：\`rg "关键词" docs/帮助中心/ -l\`\n\n`;

  // 按分类统计
  const byCat = {};
  for (const a of allArticles) {
    if (!byCat[a.category]) byCat[a.category] = [];
    byCat[a.category].push(a);
  }

  md += `## 分类概览\n\n`;
  md += `| 分类 | 文章数 |\n| --- | --- |\n`;
  const total = allArticles.length;
  for (const [cat, articles] of Object.entries(byCat).sort((a, b) => b[1].length - a[1].length)) {
    md += `| [${cat}](#${cat.replace(/\s/g, '-')}) | ${articles.length} |\n`;
  }
  md += `| **总计** | **${total}** |\n\n`;

  // 每个分类的文章列表
  for (const [cat, articles] of Object.entries(byCat).sort((a, b) => a[0].localeCompare(b[0], 'zh-CN'))) {
    md += `## ${cat}\n\n`;
    md += `> ${articles.length} 篇文章\n\n`;

    // 按类型分组
    const byType = {};
    for (const a of articles) {
      const type = a.labels[0] || '其他';
      if (!byType[type]) byType[type] = [];
      byType[type].push(a);
    }

    for (const [type, typeArticles] of Object.entries(byType).sort()) {
      md += `### ${type}\n\n`;
      for (const a of typeArticles.sort((x, y) => (y.views || 0) - (x.views || 0)).slice(0, 50)) {
        const filename = sanitizeFilename(a.title) + '.md';
        md += `- [${a.title}](帮助中心/${cat}/${encodeURIComponent(filename)})`;
        if (a.views > 100) md += ` (${a.views}阅读)`;
        md += `\n`;
      }
      if (typeArticles.length > 50) {
        md += `- *...及其他 ${typeArticles.length - 50} 篇*\n`;
      }
      md += `\n`;
    }
  }

  const indexPath = join(DOCS_DIR, 'INDEX.md');
  mkdirSync(DOCS_DIR, { recursive: true });
  writeFileSync(indexPath, md, 'utf-8');
  console.log(`\n索引已生成: ${indexPath} (${total} 篇文章)`);
}

// ── 主函数 ────────────────────────────────────────────────────────
async function main() {
  console.log('=== 金蝶云·星辰 帮助中心知识爬取 ===\n');

  mkdirSync(META_DIR, { recursive: true });
  const progress = RESUME ? loadProgress() : { fetched: {}, listDone: {} };

  // 启动浏览器
  const browser = await initBrowser();

  // 筛选分类
  let categories = CATEGORIES.filter((c) => c.knowledges > 0);
  if (CATEGORY_FILTER) {
    categories = categories.filter((c) => c.name === CATEGORY_FILTER);
    if (categories.length === 0) {
      console.error(`找不到分类: ${CATEGORY_FILTER}`);
      console.log('可用分类:', CATEGORIES.map((c) => c.name).join(', '));
      process.exit(1);
    }
  }

  // Phase 1: 收集文章列表
  console.log(`Phase 1: 收集文章列表 (${categories.length} 个分类)\n`);
  const allArticles = [];
  const seenIds = new Set();
  const listFile = join(META_DIR, 'article-list.json');

  // 如果已有列表且 resume 模式，直接加载
  if (RESUME && existsSync(listFile) && !CATEGORY_FILTER) {
    const cached = JSON.parse(readFileSync(listFile, 'utf-8'));
    allArticles.push(...cached);
    for (const a of cached) seenIds.add(a.id);
    console.log(`  从缓存加载 ${allArticles.length} 篇文章列表\n`);
  } else {
    for (const cat of categories) {
      const articles = await fetchArticleList(cat);
      for (const a of articles) {
        if (!seenIds.has(a.id)) {
          seenIds.add(a.id);
          allArticles.push(a);
        }
      }
    }

    // 保存文章列表
    writeFileSync(listFile, JSON.stringify(allArticles, null, 2), 'utf-8');
    console.log(`\n  文章列表已保存: ${listFile} (${allArticles.length} 篇, 去重后)\n`);
  }

  if (LIST_ONLY) {
    console.log('--list-only 模式，仅收集列表，跳过内容下载');
    generateIndex(allArticles);
    await browser.close();
    return;
  }

  // Phase 2: 下载文章内容
  console.log(`Phase 2: 下载文章内容 (${allArticles.length} 篇, 并发 ${CONCURRENCY}, 间隔 ${DELAY_MS}ms)\n`);

  // 按分类分组处理
  const byCat = {};
  for (const a of allArticles) {
    if (!byCat[a.category]) byCat[a.category] = [];
    byCat[a.category].push(a);
  }

  const totalStats = { saved: 0, exists: 0, skip: 0, unchanged: 0, empty: 0, fail: 0 };
  const totalFailures = [];
  let totalAborted = false;

  for (const [cat, articles] of Object.entries(byCat)) {
    if (totalAborted) break;
    console.log(`\n📂 ${cat} (${articles.length} 篇)`);
    const { stats, failures, aborted } = await processArticles(articles, progress);

    for (const [k, v] of Object.entries(stats)) totalStats[k] = (totalStats[k] || 0) + v;
    totalFailures.push(...failures);
    if (aborted) totalAborted = true;

    saveProgress(progress);
  }

  // Phase 3: 生成索引
  console.log('\n\nPhase 3: 生成索引');
  generateIndex(allArticles);

  // 保存最终报告
  const report = {
    date: new Date().toISOString(),
    totalArticles: allArticles.length,
    stats: totalStats,
    failures: totalFailures,
    aborted: totalAborted,
    categories: Object.entries(byCat).map(([name, arts]) => ({
      name, count: arts.length,
    })),
  };
  const reportFile = join(META_DIR, 'scrape-report.json');
  writeFileSync(reportFile, JSON.stringify(report, null, 2), 'utf-8');

  console.log('\n=== 爬取完成 ===');
  console.log(`总计: ${totalStats.saved} 新增, ${totalStats.exists} 已有, ${totalStats.skip} 跳过, ${totalStats.fail} 失败`);
  if (totalFailures.length > 0) {
    console.log(`失败记录: ${reportFile}`);
  }
  if (totalAborted) {
    console.log('⚠️ 因连续失败提前停止，可使用 --resume 续爬');
  }

  // 关闭浏览器
  await browser.close();
}

main().catch((err) => {
  console.error('致命错误:', err);
  process.exit(1);
});
