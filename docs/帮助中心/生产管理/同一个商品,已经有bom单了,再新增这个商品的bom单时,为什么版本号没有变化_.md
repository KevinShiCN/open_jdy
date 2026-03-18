---
title: "同一个商品,已经有bom单了,再新增这个商品的bom单时,为什么版本号没有变化?"
product: "金蝶云·星辰"
category: "生产管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/647965186581836032"
author: "lykk"
views: 157
created_at: "2024-11-21 11:55:22"
updated_at: "2025-02-21 18:24:00"
crawl_date: "2026-03-18"
---

# 同一个商品,已经有bom单了,再新增这个商品的bom单时,为什么版本号没有变化?

> 产品：金蝶云·星辰 | 分类：生产管理 | 类型：常见问题
> 作者：lykk | 阅读：157 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/647965186581836032)

【问题描述】

同一个商品,已经有BOM单了,再新增这个商品的BOM单时,为什么版本号没有变化?

![](https://vip.kingdee.com/download/01093d1b843c744c47128e2e98f13c2544de.png)

【解释说明】

因为商品启用了辅助属性。BOM是按商品编码+辅助属性(即SKU维度)进行版本控制的。起始版本号为V1.0,同一SKU的商品每增加一张BOM单,版本号加1,如V2.0,V3.0等等

![](https://vip.kingdee.com/download/010943dea848f1e246a4bc00905703bf8dad.png)

【解决方案】

维护辅助属性,如果该商品编码+辅助属性在系统里已经有BOM单了,那再增加BOM单时,版本号就会加1

![](https://vip.kingdee.com/download/010988d5bf6b70a8416690ba0dfbbef5fc53.png)
