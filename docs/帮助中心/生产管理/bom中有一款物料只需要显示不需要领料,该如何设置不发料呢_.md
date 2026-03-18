---
title: "bom中有一款物料只需要显示不需要领料,该如何设置不发料呢?"
product: "金蝶云·星辰"
category: "生产管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/780962312525658368"
author: "quanxing"
views: 36
created_at: "2025-11-21 17:58:34"
updated_at: "2025-11-25 01:05:25"
crawl_date: "2026-03-18"
---

# bom中有一款物料只需要显示不需要领料,该如何设置不发料呢?

> 产品：金蝶云·星辰 | 分类：生产管理 | 类型：常见问题
> 作者：quanxing | 阅读：36 | 有用：1
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/780962312525658368)

【问题描述】

bom中有一款物料只需要显示不需要领料,该如何设置不发料呢?

【业务场景】

针对化工行业,配方(BOM)中需要体现“水”的用量用于指导生产,但实际生产中“水”是直接取用的,不需要领料,仅需在期末归集为费用分摊

【解决方案】

bom中对应“子件信息”将“领料方式”设置为【不领料】

![](https://vip.kingdee.com/download/01090ed80e46d41f4e85b77fe43a024fe5d7.png)

生产任务单中该物料的“发料方式”默认显示为【不领料】,保存审核生产任务单

![](https://vip.kingdee.com/download/0109c075639f41ed493498e3db2a5c2eda43.png)

下推生产领料单时,不领料的物料不会带出

![](https://vip.kingdee.com/download/01095953a99cb4d34e0bb1cdab717f108d49.png)

注:生产任务单中可临时修改“发料方式”,但BOM的“领料方式”不受影响,领料单以关联的任务单的“发料方式”为准
