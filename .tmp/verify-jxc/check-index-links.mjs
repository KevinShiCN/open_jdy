// INDEX.md 链接完整性：解析全部相对链接检查存在性 + 进销存云链接计数
import { readFileSync, existsSync } from 'fs';
import { join, resolve } from 'path';
const ROOT = '/home/dev/Projects/Online_APIs/open_jdy';
const idx = readFileSync(join(ROOT, 'docs', 'INDEX.md'), 'utf-8');
const links = [...idx.matchAll(/\]\(([^)]+)\)/g)].map(m => m[1]).filter(h => !/^(https?:|#)/.test(h));
const broken = [];
for (const h of links) {
  const p = resolve(join(ROOT, 'docs'), decodeURIComponent(h.split('#')[0]));
  if (!existsSync(p)) broken.push(h);
}
const jxcLinks = links.filter(h => h.includes('进销存云'));
console.log(JSON.stringify({ totalLinks: links.length, jxcLinks: jxcLinks.length, broken }, null, 2));
