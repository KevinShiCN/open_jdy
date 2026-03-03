#!/usr/bin/env node
/**
 * gen-index-all.mjs - 生成覆盖精斗云 + 金蝶云星辰双产品的 docs/INDEX.md
 *
 * 读取 _meta/精斗云/nav-tree.json 和 _meta/金蝶云星辰/nav-tree.json，
 * 按产品 → 分类 → API 页面组织索引。
 */
import { readFileSync, readdirSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const DOCS_DIR = join(import.meta.dirname, '..', 'docs');
const META_DIR = join(import.meta.dirname, '..', '_meta');

const PRODUCTS = [
  { name: '金蝶云星辰', dir: '金蝶云星辰', prefix: '金蝶云星辰' },
  { name: '精斗云', dir: '精斗云', prefix: '精斗云' },
];

const lines = [];

/** 统计产品页面数 */
function countPages(navData) {
  return navData?.total || navData?.pages?.length || 0;
}

/** 渲染导航树为 Markdown 链接列表 */
function renderTree(items, navData, productDir, depth = 0) {
  for (const item of items) {
    if (item.isLeaf) {
      const page = navData.pages.find(p => p.title === item.text);
      if (page) {
        const safeName = item.text.replace(/[<>:"/\\|?*]/g, '_').replace(/\s+/g, ' ').trim();
        const category = page.path[0] || '未分类';
        const subDir = page.path.length > 2 ? page.path.slice(1, -1).join('/') : '';
        const relPath = subDir
          ? `${productDir}/${category}/${subDir}/${safeName}.md`
          : `${productDir}/${category}/${safeName}.md`;
        const indent = '  '.repeat(depth);
        lines.push(`${indent}- [${item.text}](${relPath.replace(/ /g, '%20')})`);
      }
    } else {
      const indent = '  '.repeat(depth);
      lines.push('');
      if (depth === 0) {
        lines.push(`${indent}### ${item.text}`);
      } else {
        lines.push(`${indent}#### ${item.text}`);
      }
      lines.push('');
      if (item.children) {
        renderTree(item.children, navData, productDir, depth + 1);
      }
    }
  }
}

// 收集统计信息
let totalPages = 0;
const productStats = [];

for (const product of PRODUCTS) {
  const navFile = join(META_DIR, product.dir, 'nav-tree.json');
  if (existsSync(navFile)) {
    const data = JSON.parse(readFileSync(navFile, 'utf-8'));
    const count = countPages(data);
    totalPages += count;
    productStats.push({ ...product, count, data });
  } else {
    productStats.push({ ...product, count: 0, data: null });
  }
}

// 生成头部
lines.push('# 金蝶开放平台 API 文档索引');
lines.push('');
lines.push(`> 自动生成于 ${new Date().toISOString().split('T')[0]}，共 ${totalPages} 个 API 页面`);
lines.push('');
lines.push('## 产品概览');
lines.push('');
lines.push('| 产品 | 页面数 | 状态 |');
lines.push('|------|--------|------|');
for (const p of productStats) {
  const status = p.data ? (p.data.partial ? '部分' : '完整') : '未爬取';
  lines.push(`| ${p.name} | ${p.count} | ${status} |`);
}
lines.push('');
lines.push('## 使用说明');
lines.push('');
lines.push('- AI/LLM 开发时，先读此文件定位所需 API，再读具体文档');
lines.push('- 搜索：`rg "关键词" docs/ -l`');
lines.push('- 按产品搜索：`rg "关键词" docs/金蝶云星辰/ -l` 或 `rg "关键词" docs/精斗云/ -l`');
lines.push('');

// 按产品渲染
for (const p of productStats) {
  if (!p.data) {
    lines.push(`## ${p.name}`);
    lines.push('');
    lines.push('> 文档尚未爬取');
    lines.push('');
    continue;
  }

  lines.push(`## ${p.name}（${p.count} 页）`);
  lines.push('');
  renderTree(p.data.tree, p.data, p.dir);
  lines.push('');
}

// 追加已迁移文档
const migratedDir = join(DOCS_DIR, '精斗云', '已迁移');
if (existsSync(migratedDir)) {
  lines.push('## 已迁移文档（原 kingdee_cloud）');
  lines.push('');
  try {
    const migrated = readdirSync(migratedDir).filter(f => f.endsWith('.md'));
    for (const f of migrated) {
      lines.push(`- [${f.replace('.md', '')}](精斗云/已迁移/${f.replace(/ /g, '%20')})`);
    }
  } catch { /* 目录不存在则跳过 */ }
  lines.push('');
}

const content = lines.join('\n') + '\n';
writeFileSync(join(DOCS_DIR, 'INDEX.md'), content, 'utf-8');
console.log(`INDEX.md 已生成，共 ${lines.length} 行，${totalPages} 个页面`);
