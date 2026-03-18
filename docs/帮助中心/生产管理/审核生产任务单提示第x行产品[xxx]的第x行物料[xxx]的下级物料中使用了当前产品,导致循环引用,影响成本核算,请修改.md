---
title: "审核生产任务单提示第x行产品[xxx]的第x行物料[xxx]的下级物料中使用了当前产品,导致循环引用,影响成本核算,请修改"
product: "金蝶云·星辰"
category: "生产管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/606290431327657728"
author: "云社区用户8x80607"
views: 255
created_at: "2024-07-28 22:19:28"
updated_at: "2026-01-27 01:02:18"
crawl_date: "2026-03-18"
---

# 审核生产任务单提示第x行产品[xxx]的第x行物料[xxx]的下级物料中使用了当前产品,导致循环引用,影响成本核算,请修改

> 产品：金蝶云·星辰 | 分类：生产管理 | 类型：常见问题
> 作者：云社区用户8x80607 | 阅读：255 | 有用：2
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/606290431327657728)

【问题描述】

审核生产任务单提示第x行产品[xxx]的第x行物料[xxx]的下级物料中使用了当前产品,导致循环引用,影响成本核算,请修改

如下图所示:
![](https://vip.kingdee.com/download/010902d839266d6e44189a1152e6ccd270f9.png)
【解释说明】

这是因为产品信息和物料信息在其他任务单种有用到,并且在本单中是物料的在其他单中是商品,在本单中是商品的在其他单中是物料。比如问题中的任务单,生产商品“测试体积”用到了物料“测试浮动换算”和“生产产品”;

但是在另一个生产任务单中“生产产品”是被生产的商品,“测试体积”是用到的物料,所以两个任务单循环引用了,这个系统是不允许的,否则无法正常计算成本。

![](https://vip.kingdee.com/download/0109339c6400bb404b388645e9b2e5afcbae.png)

如果任务单比较多,不好检查,可以把生产任务单按引入模板引出

![](https://vip.kingdee.com/download/0109cd6586b7adc842119115e84ec18ebe50.png)
引出后筛选被生产的商品是“生产产品”的任务单,筛选出来后检查哪个单的物料上有“测试体积”,就可以找到是哪个单和新开的单有循环引用。

![](https://vip.kingdee.com/download/0109703f23f7508f4501ac10a63d93c35beb.png)

排查出是哪个单后应检查是否单据上物料或者商品录错了,错误的单据应修改或者删除。

【温馨提示】

建议要生产的商品都录一下bom单,bom单在创建审核时会根据已有未禁用的bom检查是否有被循环引用,以便及时发现调整,生产任务单直接引用bom带出物料。

![](https://vip.kingdee.com/download/01091645da4e54ba494aa771b24d58a58174.png)
![](https://vip.kingdee.com/download/0109d6f43ce4b3284b929ee56b35d4507847.png)

更多关于星辰的知识,请点击链接查看新手攻略:[金蝶云·星辰新手攻略](https://vip.kingdee.com/knowledge/specialDetail/172035498049835264?get_from=knowledge-specialDetail-id&productLineId=35&lang=zh-CN)
