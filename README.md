# 金蝶开放平台 API 文档（本地镜像）

> 金蝶开放平台 API 文档的本地 Markdown 镜像，覆盖 **精斗云** 和 **金蝶云星辰** 双产品，专为 AI/LLM 辅助开发优化。

## 为什么需要这个项目？

金蝶开放平台（https://open.jdy.com/ ）使用 SPA + hash 路由架构，所有文档内容通过 JavaScript 动态加载。这意味着：

- 普通的 HTTP 请求（fetch/curl）无法获取文档内容
- 搜索引擎和 AI 工具无法直接索引
- LLM 无法通过 URL 直接读取 API 文档
- 开发者在 AI 辅助编程时，无法让 AI 参考官方文档

本项目将全部文档爬取为结构化 Markdown 文件，按官方导航目录组织。

## 文档结构

```
docs/
├── INDEX.md              # 完整目录索引（AI 入口）
├── 精斗云/               # 精斗云 API 文档
│   ├── 指导文档/
│   ├── 购货/
│   ├── 销货/
│   ├── 仓库/
│   ├── 客户经营/
│   ├── 资金/
│   ├── 资料/
│   ├── 设置/
│   └── 已迁移/           # 从 kingdee_cloud 迁移的手工文档
└── 金蝶云星辰/           # 金蝶云星辰 API 文档
    ├── 指导文档/
    ├── 进销存云/
    └── ...
```

## AI/LLM 使用指南

```bash
# 查找特定 API（跨产品）
rg "access_token" docs/ --files-with-matches

# 按产品搜索
rg "采购订单" docs/金蝶云星辰/ -l
rg "购货订单" docs/精斗云/ -l

# 搜索错误码
rg "返回码" docs/
```

## 更新文档

```bash
npm install

# 更新精斗云文档
npm run update

# 更新金蝶云星辰文档
npm run update-yxc

# 更新全部 + 生成统一索引
npm run update-all
```

### 脚本说明

| 脚本 | 用途 |
|------|------|
| `extract-nav.mjs` | 提取精斗云导航树 |
| `extract-nav-yxc.mjs` | 提取金蝶云星辰导航树（带增量保存） |
| `crawl.mjs` | 爬取精斗云文档 |
| `crawl-yxc.mjs` | 爬取金蝶云星辰文档（支持并发、分片） |
| `gen-index.mjs` | 生成精斗云索引 |
| `gen-index-all.mjs` | 生成双产品统一索引 |

## 关联项目

- 企业微信 API 文档：`W:\Projects\Online_APIs\WxWorkAPI`
- 金蝶云业务平台：`W:\Projects\kingdee_cloud`（原金蝶 API 文档已迁移至此）

## 免责声明

本项目仅做文档格式转换和本地化存储，所有内容版权归金蝶所有。
