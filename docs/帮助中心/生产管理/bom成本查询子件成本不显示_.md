---
title: "bom成本查询子件成本不显示?"
product: "金蝶云·星辰"
category: "生产管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/625134614364982784"
author: "云社区用户8x80607"
views: 238
created_at: "2024-09-20 10:43:10"
updated_at: "2026-03-06 01:50:36"
crawl_date: "2026-03-18"
---

# bom成本查询子件成本不显示?

> 产品：金蝶云·星辰 | 分类：生产管理 | 类型：常见问题
> 作者：云社区用户8x80607 | 阅读：238 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/625134614364982784)

【问题描述】

BOM成本查询子件成本不显示?

【解释说明】

如下图所示,BOM00001子件SP00002不显示参考材料成本,是因为**SP00002为半成品**,**半成品参考成本是根据其下级原材料的参考材料成本,累加得到半成品的参考材料成本。**

![](https://vip.kingdee.com/download/010941b332acc29d43d4bff96c40dd55f464.png)【解决方法】

半成品参考成本是根据其下级原材料的参考材料成本,**累加**得到半成品的参考材料成本。所以需要其原材料,SP00004商品,SP00005商品有参考材料成本,半成品SP00002才会有成本。

1、比如SP00004商品,SP00005商品做采购入库单,采购单价均为10![](https://vip.kingdee.com/download/0109317bcb1c30804b4cb7e6779cec882d17.png)

2、查看半成品SP00002的参考材料成本,半成品材料参考材料成本=其材料参考成本之和=**240+480=720**,参考材料单价=参考材料成本/标准用量=720/8=90

![](https://vip.kingdee.com/download/01096cf7497a6b6942b8bfbec1382996c623.png)
温馨提示:

1)原材料:按照成本来源取数,获得参考材料单价,乘以标准用量得到参考材料成本

2)半成品:根据其下级原材料的参考材料成本,累加得到半成品的参考材料成本产

3)成品:根据其下级的半成品的参考材料成本,累加得到产成品的参考材料成本

更多BOM成本查询知识可参考:[https://vip.kingdee.com/article/568601846613276928?smartSearchResId=624911156494351360&productLineId=35&isKnowledge=2&lang=zh-CN](https://vip.kingdee.com/article/568601846613276928?smartSearchResId=624911156494351360&productLineId=35&isKnowledge=2&lang=zh-CN)
