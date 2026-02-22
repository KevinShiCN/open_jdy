# 金蝶云·精斗云进销存 API 文档（本地镜像）

> 金蝶云·精斗云进销存开放平台 API 文档的本地 Markdown 镜像，专为 AI/LLM 辅助开发优化。

## 为什么需要这个项目？

金蝶云·精斗云开放平台（https://open.jdy.com/ ）使用 SPA + hash 路由架构，所有文档内容通过 JavaScript 动态加载。这意味着：

- 普通的 HTTP 请求（fetch/curl）无法获取文档内容
- 搜索引擎和 AI 工具无法直接索引
- LLM 无法通过 URL 直接读取 API 文档
- 开发者在 AI 辅助编程时，无法让 AI 参考官方文档

本项目将全部文档爬取为结构化 Markdown 文件，按官方导航目录组织。

## 文档结构

```
docs/
├── INDEX.md              # 完整目录索引（AI 入口）
├── 已迁移/               # 从 kingdee_cloud 迁移的手工文档
│   ├── 商品查询.md
│   ├── 客户查询.md
│   ├── 单位查询.md
│   ├── 职员查询.md
│   ├── 销货单查询.md
│   └── 文档地址.md
└── ...                   # 爬取的完整 API 文档
```

## AI/LLM 使用指南

```bash
# 查找特定 API
rg "access_token" docs/ --files-with-matches

# 读取特定接口文档
cat "docs/已迁移/商品查询.md"

# 搜索错误码
rg "返回码" docs/
```

## 更新文档

```bash
npm install

# 1. 提取导航结构
npm run extract-nav

# 2. 爬取全部文档
npm run crawl

# 3. 生成目录索引
npm run gen-index

# 或一键更新
npm run update
```

## 关联项目

- 企业微信 API 文档：`W:\Projects\Online_APIs\WxWorkAPI`
- 金蝶云业务平台：`W:\Projects\kingdee_cloud`（原金蝶 API 文档已迁移至此）

## 免责声明

本项目仅做文档格式转换和本地化存储，所有内容版权归金蝶所有。
