// 解析爬取日志 [2/3] 段：逐页状态统计 + 失败清单 + Done 行
import { readFileSync } from 'fs';
const LOG = '/home/dev/Projects/Online_APIs/open_jdy/_meta/金蝶云星辰/update-jxc-2026-08-13.log';
const log = readFileSync(LOG, 'utf-8');
const parts = log.split('=== [2/3]');
const seg = parts.length > 1 ? (parts[1].split('=== [3/3]')[0] || parts[1]) : log;
const counts = { NEW: 0, UPDATE: 0, SAME: 0, SKIP: 0, FAIL: 0 };
const fails = [];
const pages = [];
for (const line of seg.split('\n')) {
  const m = line.match(/^\[\d+\/\d+\]\s+(NEW|UPDATE|SAME|SKIP|FAIL):\s*(.*)$/);
  if (m) {
    counts[m[1]]++;
    pages.push({ tag: m[1], name: m[2] });
    if (m[1] === 'FAIL') fails.push(m[2]);
  }
}
const done = (log.match(/Done:.*/) || ['(无 Done 行)'])[0];
console.log(JSON.stringify({ counts, total: pages.length, done, fails }, null, 2));
