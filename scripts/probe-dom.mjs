#!/usr/bin/env node
/**
 * 探测金蝶云·精斗云开放平台 DOM 结构
 * 用于确定导航和内容区的选择器
 */
import { chromium } from 'playwright';
import { writeFileSync } from 'fs';

const URL = 'https://open.jdy.com/#/files/api/detail?index=3&categrayId=a125933242c3454190877377b96b8b14&id=f808311a277f4a099a5d5bfa72b0656a';

async function main() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  console.log('正在加载页面...');
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3000);

  // 探测页面结构
  const structure = await page.evaluate(() => {
    const result = {
      title: document.title,
      url: location.href,
      bodyClasses: document.body.className,
      // 侧边栏探测
      sidebar: [],
      // 内容区探测
      content: [],
      // 所有有意义的选择器
      selectors: [],
    };

    // 收集所有带 id 或 class 的元素（前 3 层）
    function collect(el, depth, arr) {
      if (depth > 4 || !el) return;
      const tag = el.tagName?.toLowerCase();
      if (!tag) return;
      const id = el.id ? `#${el.id}` : '';
      const cls = el.className && typeof el.className === 'string'
        ? '.' + el.className.trim().split(/\s+/).join('.')
        : '';
      if (id || cls) {
        const text = el.textContent?.trim().slice(0, 80) || '';
        arr.push({
          depth,
          tag: `${tag}${id}${cls}`,
          childCount: el.children.length,
          text: text.length > 60 ? text.slice(0, 60) + '...' : text,
        });
      }
      for (const child of el.children) {
        collect(child, depth + 1, arr);
      }
    }

    collect(document.body, 0, result.selectors);

    // 尝试找侧边栏链接
    const links = document.querySelectorAll('a[href*="api"], a[href*="detail"], a[href*="categray"]');
    for (const a of Array.from(links).slice(0, 30)) {
      result.sidebar.push({
        text: a.textContent?.trim().slice(0, 50),
        href: a.getAttribute('href'),
        classes: a.className,
      });
    }

    // 尝试找导航菜单
    const navEls = document.querySelectorAll('[class*="nav"], [class*="menu"], [class*="side"], [class*="tree"]');
    for (const el of Array.from(navEls).slice(0, 10)) {
      result.content.push({
        tag: el.tagName.toLowerCase(),
        class: el.className,
        id: el.id,
        childCount: el.children.length,
        text: el.textContent?.trim().slice(0, 100),
      });
    }

    return result;
  });

  writeFileSync(
    'W:/Projects/Online_APIs/open_jdy/_meta/dom-probe.json',
    JSON.stringify(structure, null, 2),
    'utf-8'
  );
  console.log('DOM 结构已保存到 _meta/dom-probe.json');
  console.log(`找到 ${structure.selectors.length} 个有意义的元素`);
  console.log(`找到 ${structure.sidebar.length} 个侧边栏链接`);
  console.log(`找到 ${structure.content.length} 个导航相关元素`);

  await browser.close();
}

main().catch(e => { console.error(e); process.exit(1); });
