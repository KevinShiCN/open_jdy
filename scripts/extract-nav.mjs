#!/usr/bin/env node
/**
 * extract-nav.mjs - 提取金蝶云·精斗云开放平台完整导航树
 *
 * 策略：侧边栏使用 span.name 点击导航（非 <a> 标签），
 * 需要递归展开所有 parent 节点，逐个点击叶子节点捕获 URL hash。
 */
import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'fs';

const ENTRY_URL = 'https://open.jdy.com/#/files/api/detail?index=3&categrayId=a125933242c3454190877377b96b8b14&id=f808311a277f4a099a5d5bfa72b0656a';
const OUT_FILE = 'W:/Projects/Online_APIs/open_jdy/_meta/nav-tree.json';

async function main() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  console.log('正在加载页面...');
  await page.goto(ENTRY_URL, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForSelector('.sidebar .menutree', { timeout: 15000 });
  await page.waitForTimeout(2000);

  // 第一步：展开所有折叠的 parent 节点
  console.log('展开所有折叠菜单...');
  let expandCount = 0;
  for (let round = 0; round < 10; round++) {
    const collapsed = await page.$$('.sidebar li.item.parent:not(.drop)');
    if (collapsed.length === 0) break;
    for (const el of collapsed) {
      try {
        await el.querySelector('span.name')?.click?.() ||
          await el.click();
        expandCount++;
        await page.waitForTimeout(200);
      } catch { /* ignore */ }
    }
    await page.waitForTimeout(500);
  }
  console.log(`展开了 ${expandCount} 个折叠节点`);

  // 第二步：提取完整导航树结构
  console.log('提取导航树...');
  const navTree = await page.evaluate(() => {
    function extractNode(li) {
      const nameEl = li.querySelector(':scope > span.name');
      const text = nameEl?.textContent?.trim() || '';
      const isParent = li.classList.contains('parent');
      const subMenu = li.querySelector(':scope > section.menutree > ul');
      const children = [];

      if (subMenu) {
        const childLis = subMenu.querySelectorAll(':scope > li.item');
        for (const child of childLis) {
          children.push(extractNode(child));
        }
      }

      return { text, isParent, isLeaf: !isParent && children.length === 0, children };
    }

    const root = document.querySelector('.sidebar > section.menutree > ul');
    if (!root) return { error: 'root menutree not found' };

    const topItems = root.querySelectorAll(':scope > li.item');
    const tree = [];
    for (const li of topItems) {
      tree.push(extractNode(li));
    }
    return tree;
  });

  console.log(`顶层节点: ${navTree.length}`);

  // 第三步：逐个点击叶子节点，捕获 URL
  console.log('点击叶子节点捕获 URL...');
  const flatList = [];

  async function clickLeaves(items, path = []) {
    for (const item of items) {
      const currentPath = [...path, item.text];

      if (item.isLeaf) {
        // 找到对应的 span.name 并点击
        const clicked = await page.evaluate((targetPath) => {
          function findLeaf(ul, pathArr, depth) {
            const lis = ul.querySelectorAll(':scope > li.item');
            for (const li of lis) {
              const name = li.querySelector(':scope > span.name');
              const text = name?.textContent?.trim();
              if (text === pathArr[depth]) {
                if (depth === pathArr.length - 1) {
                  name.click();
                  return true;
                }
                const subUl = li.querySelector(':scope > section.menutree > ul');
                if (subUl) return findLeaf(subUl, pathArr, depth + 1);
              }
            }
            return false;
          }
          const root = document.querySelector('.sidebar > section.menutree > ul');
          return root ? findLeaf(root, targetPath, 0) : false;
        }, currentPath);

        if (clicked) {
          await page.waitForTimeout(1500);
          const url = page.url();
          flatList.push({
            path: currentPath,
            category: path.join(' > '),
            title: item.text,
            url,
          });
          console.log(`  [${flatList.length}] ${currentPath.join(' > ')} → ${url.split('#')[1] || ''}`);
        }
      }

      if (item.children.length > 0) {
        await clickLeaves(item.children, currentPath);
      }
    }
  }

  await clickLeaves(navTree);

  // 保存结果
  const result = { tree: navTree, pages: flatList, total: flatList.length };
  mkdirSync('W:/Projects/Online_APIs/open_jdy/_meta', { recursive: true });
  writeFileSync(OUT_FILE, JSON.stringify(result, null, 2), 'utf-8');

  console.log(`\n完成！共 ${flatList.length} 个页面，已保存到 ${OUT_FILE}`);
  await browser.close();
}

main().catch(e => { console.error(e); process.exit(1); });
