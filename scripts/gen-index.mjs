#!/usr/bin/env node
/**
 * gen-index.mjs - 根据多产品 nav-tree.json 生成统一 docs/INDEX.md
 */
import { readFileSync, readdirSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const DOCS_DIR = join(import.meta.dirname, '..', 'docs');
const META_DIR = join(import.meta.dirname, '..', '_meta');

const products = ['精斗云', '金蝶云星辰'];
const lines = [
  '# 金蝶云 API 文档索引',
  '',
  `> 自动生成于 ${new Date().toISOString().split('T')[0]}`,
  '',
  '## 使用说明',
  '',
  '- AI/LLM 开发时，先读此文件定位所需 API，再读具体文档',
  '- 搜索：`rg "关键词" docs/ -l`',
  '',
];

// 按导航树结构生成目录
function renderTree(items, depth, productName) {
  for (const item of items) {
    if (item.isLeaf) {
      // 找到对应的 page
      const page = navData.pages.find(p => p.title === item.text);
      if (page) {
        const safeName = item.text.replace(/[<>:"/\\|?*]/g, '_').replace(/\s+/g, ' ').trim();
        const category = page.path[0] || '未分类';
        const subDir = page.path.length > 2 ? page.path.slice(1, -1).join('/') : '';
        const relPath = subDir
          ? `${productName}/${category}/${subDir}/${safeName}.md`
          : `${productName}/${category}/${safeName}.md`;
        const indent = '  '.repeat(depth);
        lines.push(`${indent}- [${item.text}](${relPath.replace(/ /g, '%20')})`);
      }
    } else {
      const indent = '  '.repeat(depth);
      lines.push('');
      if (depth === 0) {
        lines.push(`## ${item.text}`);
      } else {
        lines.push(`${indent}### ${item.text}`);
      }
      lines.push('');
      renderTree(item.children, depth + 1, productName);
    }
  }
}

// 处理每个产品
for (const product of products) {
  const navFile = join(META_DIR, product, 'nav-tree.json');
  if (!existsSync(navFile)) continue;

  const navData = JSON.parse(readFileSync(navFile, 'utf-8'));
  lines.push('');
  lines.push(`# ${product}`);
  lines.push('');
  lines.push(`> 共 ${navData.total} 个 API 页面`);
  lines.push('');

  // 使用全局 navData 供 renderTree 访问
  globalThis.navData = navData;
  renderTree(navData.tree, 0, product);
}

const content = lines.join('\n') + '\n';
writeFileSync(join(DOCS_DIR, 'INDEX.md'), content, 'utf-8');
console.log(`INDEX.md 已生成，共 ${lines.length} 行`);
