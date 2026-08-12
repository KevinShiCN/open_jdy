// nav-diff 分析：进销存云相关的新增/删除页面清单
import { readFileSync } from 'fs';
const ROOT = '/home/dev/Projects/Online_APIs/open_jdy';
const d = JSON.parse(readFileSync(ROOT + '/_meta/金蝶云星辰/nav-diff.json', 'utf-8'));
const inJxc = arr => (arr || []).filter(p => (p.path?.[0] || p.category) === '进销存云');
console.log(JSON.stringify({
  date: d.date,
  previousTotal: d.previousTotal,
  currentTotal: d.currentTotal,
  addedJxc: inJxc(d.added).map(p => ({ path: p.path.join(' > '), url: p.url })),
  removedJxc: inJxc(d.removed).map(p => ({ path: p.path.join(' > '), url: p.url })),
  removedNonJxc: inJxc(d.removed).length === 0 ? (d.removed || []).map(p => p.path?.[0] || p.category) : [],
}, null, 2));
