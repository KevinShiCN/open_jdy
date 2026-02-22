#!/usr/bin/env node
/**
 * gen-index.mjs - 根据 nav-tree.json 和实际文件生成 docs/INDEX.md
 */
import { readFileSync, readdirSync, statSync, writeFileSync } from 'fs';
import { join, relative } from 'path';

const DOCS_DIR = join(import.meta.dirname, '..', 'docs');
const META_DIR = join(import.meta.dirname, '..', '_meta');
const navData = JSON.parse(readFileSync(join(META_DIR, 'nav-tree.json'), 'utf-8'));

const lines = [
  '# 金蝶云·精斗云进销存 API 文档索引',
  '',
  `> 自动生成于 ${new Date().toISOString().split('T')[0]}，共 ${navData.total} 个 API 页面`,
  '',
  '## 使用说明',
  '',
  '- AI/LLM 开发时，先读此文件定位所需 API，再读具体文档',
  '- 搜索：`rg "关键词" docs/ -l`',
  '',
];

// 按导航树结构生成目录
function renderTree(items, depth = 0) {
  for (const item of items) {
    if (item.isLeaf) {
      // 找到对应的 page
      const page = navData.pages.find(p => p.title === item.text);
      if (page) {
        const safeName = item.text.replace(/[<>:"/\\|?*]/g, '_').replace(/\s+/g, ' ').trim();
        const category = page.path[0] || '未分类';
        const subDir = page.path.length > 2 ? page.path.slice(1, -1).join('/') : '';
        const relPath = subDir
          ? `${category}/${subDir}/${safeName}.md`
          : `${category}/${safeName}.md`;
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
      renderTree(item.children, depth + 1);
    }
  }
}

renderTree(navData.tree);

// 追加已迁移文档
lines.push('');
lines.push('## 已迁移文档（原 kingdee_cloud）');
lines.push('');
try {
  const migrated = readdirSync(join(DOCS_DIR, '已迁移')).filter(f => f.endsWith('.md'));
  for (const f of migrated) {
    lines.push(`- [${f.replace('.md', '')}](已迁移/${f.replace(/ /g, '%20')})`);
  }
} catch { /* 目录不存在则跳过 */ }

const content = lines.join('\n') + '\n';
writeFileSync(join(DOCS_DIR, 'INDEX.md'), content, 'utf-8');
console.log(`INDEX.md 已生成，共 ${lines.length} 行`);
