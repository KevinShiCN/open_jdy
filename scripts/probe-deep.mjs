#!/usr/bin/env node
/**
 * 深度探测金蝶开放平台导航树结构
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

  // 先展开所有折叠的菜单
  console.log('展开所有菜单...');
  await page.evaluate(() => {
    // 点击所有可展开的节点
    const expandables = document.querySelectorAll('.menutree .tree-handler, .menutree [class*="expand"], .menutree [class*="arrow"]');
    expandables.forEach(el => el.click());
  });
  await page.waitForTimeout(2000);

  // 提取完整导航树
  const navTree = await page.evaluate(() => {
    function extractTree(container) {
      const items = [];
      const sections = container.querySelectorAll(':scope > ul > li, :scope > section');

      for (const section of sections) {
        const link = section.querySelector(':scope > a, :scope > div > a, :scope > span > a');
        const title = section.querySelector(':scope > a, :scope > div, :scope > span, :scope > .tree-content');
        const subMenu = section.querySelector(':scope > section.menutree, :scope > ul');

        const item = {
          text: (link || title)?.textContent?.trim().slice(0, 80) || '',
          href: link?.getAttribute('href') || null,
          children: subMenu ? extractTree(subMenu) : [],
        };
        if (item.text) items.push(item);
      }
      return items;
    }

    // 获取侧边栏 HTML 结构
    const sidebar = document.querySelector('.sidebar');
    const sidebarHTML = sidebar?.innerHTML?.slice(0, 5000) || 'NOT FOUND';

    // 获取所有 menutree 下的链接
    const allLinks = [];
    const links = document.querySelectorAll('.sidebar a[href]');
    for (const a of links) {
      allLinks.push({
        text: a.textContent?.trim(),
        href: a.getAttribute('href'),
        parentText: a.closest('section.menutree')?.querySelector(':scope > div, :scope > span')?.textContent?.trim().slice(0, 30) || '',
      });
    }

    // 获取 menutree 的直接结构
    const menutrees = document.querySelectorAll('.sidebar > section.menutree');
    const topLevel = [];
    for (const mt of menutrees) {
      const firstChild = mt.firstElementChild;
      topLevel.push({
        tag: firstChild?.tagName,
        class: firstChild?.className,
        text: firstChild?.textContent?.trim().slice(0, 100),
        childCount: firstChild?.children?.length || 0,
      });
    }

    return { sidebarHTML, allLinks, topLevel };
  });

  writeFileSync(
    'W:/Projects/Online_APIs/open_jdy/_meta/nav-deep-probe.json',
    JSON.stringify(navTree, null, 2),
    'utf-8'
  );

  console.log(`找到 ${navTree.allLinks.length} 个链接`);
  console.log(`顶层菜单: ${navTree.topLevel.length} 个`);

  await browser.close();
}

main().catch(e => { console.error(e); process.exit(1); });
