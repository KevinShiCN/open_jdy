#!/usr/bin/env node
/**
 * extract-nav-yxc.mjs - 提取金蝶云星辰开放平台完整导航树
 *
 * 策略：与精斗云相同的 SPA 结构，侧边栏使用 span.name 点击导航，
 * 递归展开所有 parent 节点，逐个点击叶子节点捕获 URL hash。
 *
 * 增量保存：每采集 SAVE_INTERVAL 页自动持久化中间结果，防止崩溃丢失。
 * 断点续跑：若 nav-tree.json 已存在且含 partial 标记，自动跳过已采集的页面。
 */
import { chromium } from 'playwright';
import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'fs';

const ENTRY_URL = 'https://open.jdy.com/#/files/api/detail?index=3&categrayId=3cc8ee9a663e11eda5c84b5d383a2b93&id=adfe4a24712711eda0b307c6992ee459';
const OUT_DIR = 'W:/Projects/Online_APIs/open_jdy/_meta/金蝶云星辰';
const OUT_FILE = `${OUT_DIR}/nav-tree.json`;
const SAVE_INTERVAL = 10; // 每 N 页保存一次

/** 持久化当前采集结果 */
function saveProgress(tree, flatList, partial = true) {
  const result = { tree, pages: flatList, total: flatList.length, partial };
  writeFileSync(OUT_FILE, JSON.stringify(result, null, 2), 'utf-8');
  if (partial) console.log(`  💾 中间保存: ${flatList.length} 页`);
}

/** 加载已有进度（断点续跑） */
function loadExistingPages() {
  if (!existsSync(OUT_FILE)) return new Set();
  try {
    const data = JSON.parse(readFileSync(OUT_FILE, 'utf-8'));
    if (data.pages && Array.isArray(data.pages)) {
      const urls = new Set(data.pages.map(p => p.url));
      console.log(`发现已有进度: ${urls.size} 页，将跳过已采集的 URL`);
      return urls;
    }
  } catch { /* ignore corrupt file */ }
  return new Set();
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });

  // 加载断点
  const existingUrls = loadExistingPages();
  let flatList = [];
  if (existingUrls.size > 0) {
    try {
      const data = JSON.parse(readFileSync(OUT_FILE, 'utf-8'));
      flatList = data.pages || [];
    } catch { /* start fresh */ }
  }

  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // 崩溃时保存已有结果
  let navTree = [];
  const emergencySave = () => {
    if (flatList.length > 0) {
      console.log(`\n⚠️ 异常退出，紧急保存 ${flatList.length} 页...`);
      saveProgress(navTree, flatList, true);
    }
  };
  process.on('SIGINT', () => { emergencySave(); process.exit(130); });
  process.on('SIGTERM', () => { emergencySave(); process.exit(143); });
  process.on('uncaughtException', (err) => {
    console.error('未捕获异常:', err.message);
    emergencySave();
    process.exit(1);
  });

  console.log('正在加载页面...');
  await page.goto(ENTRY_URL, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForSelector('.sidebar .menutree', { timeout: 15000 });
  await page.waitForTimeout(2000);

  // 第一步：展开所有折叠的 parent 节点
  console.log('展开所有折叠菜单...');
  let expandCount = 0;
  for (let round = 0; round < 20; round++) {
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
  navTree = await page.evaluate(() => {
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

  // 立即保存树结构（即使后续点击失败，至少有结构数据）
  saveProgress(navTree, flatList, true);

  // 第三步：逐个点击叶子节点，捕获 URL
  console.log('点击叶子节点捕获 URL...');
  let lastSaveCount = flatList.length;

  async function clickLeaves(items, path = []) {
    for (const item of items) {
      const currentPath = [...path, item.text];

      if (item.isLeaf) {
        try {
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

            // 断点续跑：跳过已采集的 URL
            if (existingUrls.has(url)) {
              console.log(`  [skip] ${currentPath.join(' > ')} (已采集)`);
            } else {
              flatList.push({
                path: currentPath,
                category: path.join(' > '),
                title: item.text,
                url,
              });
              console.log(`  [${flatList.length}] ${currentPath.join(' > ')} → ${url.split('#')[1] || ''}`);

              // 增量保存
              if (flatList.length - lastSaveCount >= SAVE_INTERVAL) {
                saveProgress(navTree, flatList, true);
                lastSaveCount = flatList.length;
              }
            }
          }
        } catch (err) {
          console.error(`  [error] ${currentPath.join(' > ')}: ${err.message}`);
          // 单个页面失败不中断整体流程，保存当前进度后继续
          saveProgress(navTree, flatList, true);
        }
      }

      if (item.children && item.children.length > 0) {
        await clickLeaves(item.children, currentPath);
      }
    }
  }

  await clickLeaves(navTree);

  // 最终保存（标记为完成）
  saveProgress(navTree, flatList, false);

  console.log(`\n完成！共 ${flatList.length} 个页面，已保存到 ${OUT_FILE}`);
  await browser.close();
}

main().catch(e => { console.error(e); process.exit(1); });
