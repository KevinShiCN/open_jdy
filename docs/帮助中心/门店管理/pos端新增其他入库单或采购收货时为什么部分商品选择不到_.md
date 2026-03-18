---
title: "pos端新增其他入库单或采购收货时为什么部分商品选择不到?"
product: "金蝶云·星辰"
category: "门店管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/656662841855658496"
author: "lykk"
views: 102
created_at: "2024-12-16 16:19:28"
updated_at: "2025-12-13 01:04:32"
crawl_date: "2026-03-18"
---

# pos端新增其他入库单或采购收货时为什么部分商品选择不到?

> 产品：金蝶云·星辰 | 分类：门店管理 | 类型：常见问题
> 作者：lykk | 阅读：102 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/656662841855658496)

【问题描述】

POS端新增其他入库单或采购收货时为什么部分商品选择不到?

【解释说明】

1、目前POS新增其他入库单选择商品时,默认显示已上架的商品,商品未上架则默认不显示;若某个商品类别中的所有商品都未上架,则该类别也默认不显示;

2、禁用商品不显示;

3、商品特性开启了“可受托代销”不显示;

【解决方案】

**1、选择未上架的商品**

若商品未上架,可在选择商品界面,勾选“全部商品”,此时将会展示出启用状态且未上架的商品,同时对应的商品类别也会展示出来;
![](https://vip.kingdee.com/download/01091a3a0f19bbac4c978fcfbc0d18e4c9ea.png)
**2、检查商品是否禁用**

在星辰后台点击【基础资料】-【商品信息】,过滤条件中禁用状态选择“是”,若商品被禁用,则需要点击启用,启用成功后再到POS端录入单据。
![](https://vip.kingdee.com/download/0109629e5ed0402e4db6b0ab797dcad812bf.png)
**3、检查商品属性**

若商品特性开启了“可受托代销”,则该商品入库不支持做采购和其他入库,只能做受托入库单入库。因此上架的商品在POS端可以正常做零售单出库,但不能做采购收货和其他入库。

在后台商品新增中找到这个商品并打开,检查商品特性状态。

![](https://vip.kingdee.com/download/0109b00144e0f9ab4fdbaf16dde5333e303a.png)
【相关知识】

[受托代销商品如何入库](https://vip.kingdee.com/knowledge/538807369879045888?productLineId=35&isKnowledge=2&lang=zh-CN)

[pos开单为什么选择不到商品?](https://vip.kingdee.com/knowledge/718993297913510400?productLineId=35&isKnowledge=2&lang=zh-CN)
