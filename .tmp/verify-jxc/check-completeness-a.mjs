// nav → 文件：找缺失文档（nav 进销存云 167 页逐一核对本地文件存在性）
import { readFileSync, existsSync } from 'fs';
const ROOT = '/home/dev/Projects/Online_APIs/open_jdy';
const nav = JSON.parse(readFileSync(ROOT + '/_meta/金蝶云星辰/nav-tree.json', 'utf-8'));
const jxc = nav.pages.filter(p => p.path[0] === '进销存云');
const missing = [];
for (const p of jxc) {
  const safe = p.title.replace(/[<>:"/\\|?*]/g, '_').replace(/\s+/g, ' ').trim();
  const sub = p.path.length > 2 ? p.path.slice(1, -1).join('/') : '';
  const f = [ROOT, 'docs', '金蝶云星辰', '进销存云', ...(sub ? sub.split('/') : []), safe + '.md'].join('/');
  if (!existsSync(f)) missing.push({ path: p.path.join(' > '), expected: f.replace(ROOT + '/', '') });
}
console.log(JSON.stringify({ navTotalJxc: jxc.length, missing }, null, 2));
