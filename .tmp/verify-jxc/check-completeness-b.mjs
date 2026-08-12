// 文件 → nav：找孤儿文档（本地 md 不在 nav 进销存云清单中的文件）
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
const ROOT = '/home/dev/Projects/Online_APIs/open_jdy';
const DOCS = join(ROOT, 'docs', '金蝶云星辰', '进销存云');
const nav = JSON.parse(readFileSync(join(ROOT, '_meta/金蝶云星辰/nav-tree.json'), 'utf-8'));
const jxc = nav.pages.filter(p => p.path[0] === '进销存云');
function expectPath(p) {
  const safe = p.title.replace(/[<>:"/\\|?*]/g, '_').replace(/\s+/g, ' ').trim();
  const sub = p.path.length > 2 ? p.path.slice(1, -1).join('/') : '';
  return join(DOCS, ...(sub ? sub.split('/') : []), safe + '.md');
}
const expected = new Set(jxc.map(expectPath));
const actual = [];
const orphan = [];
function walk(d) {
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const f = join(d, e.name);
    if (e.isDirectory()) walk(f);
    else if (e.name.endsWith('.md')) {
      actual.push(f);
      if (!expected.has(f)) orphan.push(f.replace(ROOT + '/', ''));
    }
  }
}
walk(DOCS);
console.log(JSON.stringify({ navExpectedJxc: expected.size, actualMd: actual.length, orphan }, null, 2));
