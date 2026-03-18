---
title: "系统能否根据多级bom结构及各级材料的当前库存数,自动计算可生产的成品数量?"
product: "金蝶云·星辰"
category: "生产管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/611006923374291200"
author: "Siwennn"
views: 260
created_at: "2024-08-12 16:57:44"
updated_at: "2025-08-20 01:23:06"
crawl_date: "2026-03-18"
---

# 系统能否根据多级bom结构及各级材料的当前库存数,自动计算可生产的成品数量?

> 产品：金蝶云·星辰 | 分类：生产管理 | 类型：常见问题
> 作者：Siwennn | 阅读：260 | 有用：1
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/611006923374291200)

【问题描述】

系统能否根据多级BOM结构及各级材料的当前库存数,自动计算可生产的成品数量?

【业务场景】

希望生产里面可以有一个功能,设置了商品的多级bom,材料A+材料B=半成品,半成品+材料C=产成品。 我在只知道材料A、B、C的数量的时候,能通过系统功能,和bom计算出来最后产成品的数量。

【解决方案】

可以通过系统中的**齐套分析**功能来解决,在齐套分析时,计算层级选择为【最底层】即可。如下图所示:

![](https://vip.kingdee.com/download/01090ca20e01b94f4c57b4f94bd86dae8846.png)
齐套分析的相关数据用例及说明如下:

![](https://vip.kingdee.com/download/0109816b2a77d8044eee8162977e0221a9b0.png)

![](https://vip.kingdee.com/download/0109ea8ec8cb5d824551830a67a92b4e367d.png)
