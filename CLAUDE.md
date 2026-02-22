# CLAUDE.md

> 金蝶云·精斗云进销存开放平台 API 文档本地镜像

## 文档入口

- 完整索引：`docs/INDEX.md`
- 手工迁移文档：`docs/已迁移/`（从 kingdee_cloud 迁移）
- 爬取文档：`docs/` 下按官方分类组织

## 快速查找

```bash
# 按关键词搜索 API
rg "商品" docs/ --files-with-matches
rg "access_token" docs/ -l

# 查看目录索引
cat docs/INDEX.md
```

## 文档来源

- 官方地址：https://open.jdy.com/
- 爬取脚本：`scripts/`（Playwright + SPA hash 路由适配）

## 与 kingdee_cloud 的关系

原 `W:\Projects\kingdee_cloud\docs\api_references\金蝶API\` 下的文档已迁移至此。
kingdee_cloud 原位保留了重定向说明，指向本目录。

开发 kingdee_cloud 项目时如需查阅金蝶 API 文档，请到本目录查找。

## 更新文档

```bash
npm run update
```
