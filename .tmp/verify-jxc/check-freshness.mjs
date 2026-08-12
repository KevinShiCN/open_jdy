// 新鲜度：进销存云所有 md 的 crawl_date 分布 + last_update 为空的文件清单
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
const DOCS = '/home/dev/Projects/Online_APIs/open_jdy/docs/金蝶云星辰/进销存云';
const dist = {};
const noCrawl = [];
const noUpdate = [];
let total = 0;
function walk(d) {
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const f = join(d, e.name);
    if (e.isDirectory()) walk(f);
    else if (e.name.endsWith('.md')) {
      total++;
      const head = readFileSync(f, 'utf-8').slice(0, 1500);
      const cd = head.match(/crawl_date:\s*"?([^"\n]+)"?/)?.[1]?.trim();
      const lu = head.match(/last_update:\s*"?([^"\n]*)"?/)?.[1]?.trim();
      if (!cd) noCrawl.push(f.replace(DOCS + '/', ''));
      else dist[cd] = (dist[cd] || 0) + 1;
      if (!lu) noUpdate.push(f.replace(DOCS + '/', ''));
    }
  }
}
walk(DOCS);
console.log(JSON.stringify({ total, crawlDateDist: dist, noCrawl, noUpdateCount: noUpdate.length, noUpdate: noUpdate.slice(0, 20) }, null, 2));
