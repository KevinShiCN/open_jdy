# CLAUDE.md

> 金蝶开放平台 API 文档本地镜像（精斗云 + 金蝶云星辰）+ 社区帮助中心知识库

## 文档入口

- 完整索引：`docs/INDEX.md`
- 精斗云文档：`docs/精斗云/`（168 页 API 文档）
- 金蝶云星辰文档：`docs/金蝶云星辰/`（API 文档）
- 帮助中心：`docs/帮助中心/`（社区知识文章，非 API 文档）
- 帮助中心索引：`docs/帮助中心/INDEX.md`
- 手工迁移文档：`docs/精斗云/已迁移/`（从 kingdee_cloud 迁移）

## 文档类型区分

- **API 文档**（`docs/精斗云/`、`docs/金蝶云星辰/`）：开发者接口文档，用于代码集成
- **帮助中心**（`docs/帮助中心/`）：社区知识文章，包含常见问题、操作指南、功能介绍等

## 快速查找

```bash
# 跨产品搜索
rg "access_token" docs/ -l

# 按产品搜索
rg "商品" docs/金蝶云星辰/ -l
rg "商品" docs/精斗云/ -l

# 帮助中心搜索
rg "成本" docs/帮助中心/ -l

# 查看目录索引
cat docs/INDEX.md
cat docs/帮助中心/INDEX.md
```

## 产品关系

- **精斗云** — 原产品，168 页 API 文档
- **金蝶云星辰** — 升级后新产品，API 结构类似但有扩展

## 文档来源

- 精斗云：https://open.jdy.com/（精斗云产品入口）
- 金蝶云星辰：https://open.jdy.com/（云星辰产品入口，同域不同 hash 路由）
- 帮助中心：https://vip.kingdee.com/knowledge?productLineId=35&productId=9（金蝶云社区）
- 爬取脚本：`scripts/`（Playwright + SPA hash 路由适配 / REST API）

## 元数据

- `_meta/精斗云/nav-tree.json` — 精斗云导航树
- `_meta/金蝶云星辰/nav-tree.json` — 金蝶云星辰导航树
- `_meta/帮助中心/article-list.json` — 帮助中心文章列表
- `_meta/帮助中心/scrape-report.json` — 帮助中心爬取报告

## 与 kingdee_cloud 的关系

原 `W:\Projects\kingdee_cloud\docs\api_references\金蝶API\` 下的文档已迁移至此。
kingdee_cloud 原位保留了重定向说明，指向本目录。

## 更新文档

```bash
# 更新精斗云 API
npm run update

# 更新金蝶云星辰 API
npm run update-yxc

# 更新全部 API + 生成统一索引
npm run update-all

# 爬取帮助中心知识文章
npm run scrape-kb              # 全量爬取
npm run scrape-kb:list         # 仅收集列表
npm run scrape-kb:resume       # 断点续爬
```
