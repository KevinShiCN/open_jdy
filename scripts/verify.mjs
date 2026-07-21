#!/usr/bin/env node
import { existsSync, readFileSync, readdirSync } from 'fs';
import { dirname, join, relative, resolve } from 'path';

const ROOT = join(import.meta.dirname, '..');
const DOCS_DIR = join(ROOT, 'docs');
const YXC_DOCS_DIR = join(DOCS_DIR, '金蝶云星辰');
const META_DIR = join(ROOT, '_meta', '金蝶云星辰');
const NAV_FILE = join(META_DIR, 'nav-tree.json');
const DIFF_FILE = join(META_DIR, 'nav-diff.json');
const REPORT_FILE = join(META_DIR, 'crawl-report-0-999999.json');
const INDEX_FILE = join(DOCS_DIR, 'INDEX.md');
const failures = [];

function loadJson(file) {
  if (!existsSync(file)) {
    failures.push(`缺少文件: ${relative(ROOT, file)}`);
    return null;
  }
  return JSON.parse(readFileSync(file, 'utf-8'));
}

function walkMarkdown(dir) {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walkMarkdown(path));
    else if (entry.name.endsWith('.md')) files.push(path);
  }
  return files;
}

function pagePath(page) {
  const safeName = page.title.replace(/[<>:"/\\|?*]/g, '_').replace(/\s+/g, ' ').trim();
  const category = page.path[0] || '未分类';
  const subDir = page.path.length > 2 ? page.path.slice(1, -1) : [];
  return join(YXC_DOCS_DIR, category, ...subDir, `${safeName}.md`);
}

const nav = loadJson(NAV_FILE);
const report = loadJson(REPORT_FILE);
const diff = loadJson(DIFF_FILE);

if (nav) {
  const urls = nav.pages?.map(page => page.url) || [];
  if (nav.partial !== false) failures.push('导航仍是 partial 状态');
  if (nav.total !== urls.length) failures.push(`导航数量不一致: total=${nav.total}, pages=${urls.length}`);
  if (new Set(urls).size !== urls.length) failures.push('导航包含重复 URL');

  const expected = new Set(nav.pages.map(pagePath));
  const actual = new Set(walkMarkdown(YXC_DOCS_DIR));
  for (const file of expected) {
    if (!actual.has(file)) failures.push(`缺少云星辰正文: ${relative(ROOT, file)}`);
  }
  for (const file of actual) {
    if (!expected.has(file)) failures.push(`云星辰正文不在导航中: ${relative(ROOT, file)}`);
  }
}

if (report) {
  const stats = report.stats || {};
  const processed = ['new', 'updated', 'unchanged', 'skip', 'fail']
    .reduce((sum, key) => sum + (stats[key] || 0), 0);
  if (stats.fail !== 0) failures.push(`抓取存在失败: ${stats.fail}`);
  if (processed !== report.total) failures.push(`抓取数量不完整: processed=${processed}, total=${report.total}`);
  if (nav && report.total !== nav.total) failures.push(`报告与导航数量不一致: ${report.total} != ${nav.total}`);
  const ageDays = (Date.now() - new Date(report.date).getTime()) / 86400000;
  if (!Number.isFinite(ageDays) || ageDays > 7) failures.push(`抓取报告已过期: ${report.date}`);
}

if (diff && nav) {
  if (diff.currentTotal !== nav.total) failures.push(`导航差异 currentTotal 不一致: ${diff.currentTotal} != ${nav.total}`);
}

if (existsSync(INDEX_FILE)) {
  const index = readFileSync(INDEX_FILE, 'utf-8');
  for (const match of index.matchAll(/\]\(([^)]+)\)/g)) {
    const href = match[1];
    if (/^(?:https?:|#)/.test(href)) continue;
    const cleanHref = decodeURIComponent(href.split('#')[0]);
    const target = resolve(dirname(INDEX_FILE), cleanHref);
    if (!existsSync(target)) failures.push(`索引缺链: ${href}`);
  }
} else {
  failures.push('缺少 docs/INDEX.md');
}

if (failures.length > 0) {
  console.error(`验收失败 (${failures.length}):`);
  for (const failure of failures.slice(0, 50)) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`验收通过: 云星辰 ${nav.total} 页，失败 0，索引链接完整`);
