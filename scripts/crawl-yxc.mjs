#!/usr/bin/env node
/**
 * crawl-yxc.mjs - 爬取金蝶云星辰开放平台全部 API 文档
 *
 * 策略：SPA hash 路由，单浏览器并发 tab，等待 div#center 内容更新后提取为 Markdown。
 * 用法: node scripts/crawl-yxc.mjs [--concurrency N] [--force] [--category 购货] [--start N] [--end N]
 */
import { chromium } from 'playwright';
import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';

const DOCS_DIR = join(import.meta.dirname, '..', 'docs', '金蝶云星辰');
const META_DIR = join(import.meta.dirname, '..', '_meta', '金蝶云星辰');
const CONCURRENCY = parseInt(process.argv.find((_, i, a) => a[i-1] === '--concurrency') || '3');
const CATEGORY_FILTER = process.argv.find((_, i, a) => a[i-1] === '--category') || '';
const START_INDEX = parseInt(process.argv.find((_, i, a) => a[i-1] === '--start') || '0');
const END_INDEX = parseInt(process.argv.find((_, i, a) => a[i-1] === '--end') || '999999');
const SKIP_EXISTING = !process.argv.includes('--force');
const MAX_RETRIES = 2;
const DELAY_MS = 800;

/** 浏览器端：DOM → Markdown */
function extractPageContent() {
  const center = document.querySelector('#center');
  if (!center) return { title: '', content: '', lastUpdate: '' };

  // 标题和更新时间
  const titleEl = center.querySelector('h1, h2, .title, [class*="title"]');
  const title = titleEl ? titleEl.textContent.trim() : '';
  const dateMatch = center.textContent.match(/更新于\s*([\d-]+\s*[\d:]*)/);
  const lastUpdate = dateMatch ? dateMatch[1].trim() : '';

  function toMd(node) {
    if (node.nodeType === 3) return node.textContent;
    if (node.nodeType !== 1) return '';
    const tag = node.tagName.toLowerCase();
    const ch = () => Array.from(node.childNodes).map(c => toMd(c)).join('');
    switch (tag) {
      case 'h1': return '\n# ' + ch().trim() + '\n';
      case 'h2': return '\n## ' + ch().trim() + '\n';
      case 'h3': return '\n### ' + ch().trim() + '\n';
      case 'h4': return '\n#### ' + ch().trim() + '\n';
      case 'h5': return '\n##### ' + ch().trim() + '\n';
      case 'h6': return '\n###### ' + ch().trim() + '\n';
      case 'p': return '\n' + ch() + '\n';
      case 'br': return '\n';
      case 'strong': case 'b': return '**' + ch() + '**';
      case 'em': case 'i': return '*' + ch() + '*';
      case 'code': {
        if (node.parentElement?.tagName === 'PRE') return node.textContent;
        return '`' + ch() + '`';
      }
      case 'pre': {
        const c = node.querySelector('code');
        const lang = c?.className?.match(/language-(\w+)/)?.[1] || '';
        const t = c ? c.textContent : node.textContent;
        return '\n```' + lang + '\n' + t.trim() + '\n```\n';
      }
      case 'a': {
        const href = node.getAttribute('href') || '';
        if (href.startsWith('#') || href.startsWith('javascript:')) return ch();
        return '[' + ch() + '](' + href + ')';
      }
      case 'img': return '![' + (node.getAttribute('alt')||'') + '](' + (node.getAttribute('src')||'') + ')';
      case 'ul': case 'ol': return '\n' + ch() + '\n';
      case 'li': return '- ' + ch().trim() + '\n';
      case 'table': return '\n' + tableMd(node) + '\n';
      case 'blockquote': return '\n> ' + ch().trim() + '\n';
      case 'script': case 'style': case 'svg': return '';
      default: return ch();
    }
  }

  function tableMd(table) {
    const rows = Array.from(table.querySelectorAll('tr'));
    if (!rows.length) return '';
    const r = [];
    rows.forEach((row, i) => {
      const cells = Array.from(row.querySelectorAll('th, td'));
      const line = '| ' + cells.map(c =>
        c.textContent.trim().replace(/\n/g, ' ').replace(/\|/g, '\\|')
      ).join(' | ') + ' |';
      r.push(line);
      if (i === 0) r.push('| ' + cells.map(() => '---').join(' | ') + ' |');
    });
    return r.join('\n');
  }

  return { title, lastUpdate, content: toMd(center) };
}

/** 加载导航数据 */
function loadNavData() {
  const raw = JSON.parse(readFileSync(join(META_DIR, 'nav-tree.json'), 'utf-8'));
  return raw.pages.map(p => {
    const safeName = p.title.replace(/[<>:"/\\|?*]/g, '_').replace(/\s+/g, ' ').trim();
    const category = p.path[0] || '未分类';
    const subDir = p.path.length > 2 ? p.path.slice(1, -1).join('/') : '';
    return {
      category,
      subDir,
      file: safeName,
      title: p.title,
      url: p.url,
      pathLabel: p.path.join(' > '),
    };
  });
}

/** 构建输出路径 */
function buildPath(task) {
  const parts = [DOCS_DIR, task.category];
  if (task.subDir) parts.push(...task.subDir.split('/'));
  return join(...parts, task.file + '.md');
}

/** 爬取单个页面（带重试） */
async function crawlPage(page, task) {
  const url = task.url;
  const outPath = buildPath(task);

  if (SKIP_EXISTING && existsSync(outPath)) {
    return { ok: true, title: task.file, path: outPath, skipped: true };
  }

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      if (attempt > 0) await new Promise(r => setTimeout(r, 2000 * attempt));
      await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
      await page.waitForSelector('#center', { timeout: 15000 });
      await page.waitForTimeout(1500);

      const result = await page.evaluate(extractPageContent);
      if (!result.content || result.content.trim().length < 20) {
        throw new Error('内容为空或过短');
      }

      const now = new Date().toISOString().split('T')[0];
      let md = `---\ntitle: "${result.title || task.title}"\n`;
      md += `product: "金蝶云星辰"\n`;
      md += `category: "${task.pathLabel}"\n`;
      md += `source: "${url}"\n`;
      md += `last_update: "${result.lastUpdate}"\n`;
      md += `crawl_date: "${now}"\n---\n\n`;
      md += `# ${result.title || task.title}\n\n`;
      md += `> 产品：金蝶云星辰 | 分类：${task.pathLabel}\n\n`;
      md += result.content.replace(/\n{3,}/g, '\n\n').trim() + '\n';

      mkdirSync(dirname(outPath), { recursive: true });
      writeFileSync(outPath, md, 'utf-8');
      return { ok: true, title: result.title || task.title, path: outPath };
    } catch (err) {
      if (attempt === MAX_RETRIES) {
        return { ok: false, url, error: err.message, path: outPath };
      }
    }
  }
}

/** 并发控制 */
async function runPool(tasks, browser, concurrency) {
  let idx = 0;
  const results = [];
  const pages = [];
  for (let i = 0; i < concurrency; i++) {
    pages.push(await browser.newPage());
  }
  async function worker(page) {
    while (idx < tasks.length) {
      const task = tasks[idx++];
      const n = idx;
      const r = await crawlPage(page, task);
      if (r.skipped) console.log(`[${n}/${tasks.length}] SKIP: ${task.file}`);
      else if (r.ok) console.log(`[${n}/${tasks.length}] OK: ${task.file}`);
      else console.log(`[${n}/${tasks.length}] FAIL: ${task.file} - ${r.error}`);
      results.push({ ...task, ...r });
      await new Promise(r => setTimeout(r, DELAY_MS));
    }
  }
  await Promise.all(pages.map(p => worker(p)));
  for (const p of pages) await p.close();
  return results;
}

/** 主函数 */
async function main() {
  let tasks = loadNavData();
  if (CATEGORY_FILTER) {
    tasks = tasks.filter(t => t.category === CATEGORY_FILTER);
  }
  // 支持分片：--start 0 --end 50
  tasks = tasks.slice(START_INDEX, END_INDEX);

  console.log(`Total: ${tasks.length}, Concurrency: ${CONCURRENCY}, SkipExisting: ${SKIP_EXISTING}`);
  if (START_INDEX > 0 || END_INDEX < 999999) {
    console.log(`Batch: [${START_INDEX}, ${END_INDEX})`);
  }

  const browser = await chromium.launch({ headless: false });
  const results = await runPool(tasks, browser, CONCURRENCY);
  await browser.close();

  const ok = results.filter(r => r.ok).length;
  const skipped = results.filter(r => r.skipped).length;
  const fail = results.filter(r => !r.ok);
  console.log(`\nDone: ${ok} success (${skipped} skipped), ${fail.length} failed`);

  if (fail.length > 0) {
    const failFile = join(META_DIR, `crawl-failures-${START_INDEX}-${END_INDEX}.json`);
    writeFileSync(failFile, JSON.stringify(fail, null, 2));
    console.log(`Failures saved to ${failFile}`);
  }

  const report = {
    date: new Date().toISOString(),
    batch: { start: START_INDEX, end: END_INDEX },
    total: tasks.length, success: ok, skipped, failed: fail.length,
    categories: {},
  };
  for (const r of results) {
    if (!report.categories[r.category]) report.categories[r.category] = { total: 0, ok: 0, fail: 0 };
    report.categories[r.category].total++;
    if (r.ok) report.categories[r.category].ok++;
    else report.categories[r.category].fail++;
  }
  const reportFile = join(META_DIR, `crawl-report-${START_INDEX}-${END_INDEX}.json`);
  writeFileSync(reportFile, JSON.stringify(report, null, 2));
}

main().catch(console.error);
