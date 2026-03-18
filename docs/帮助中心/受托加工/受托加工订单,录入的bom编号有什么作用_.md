---
title: "受托加工订单,录入的bom编号有什么作用?"
product: "金蝶云·星辰"
category: "受托加工"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/624410069252987136"
author: "Cat_Chow"
views: 306
created_at: "2024-09-18 15:07:24"
updated_at: "2026-01-06 01:04:38"
crawl_date: "2026-03-18"
---

# 受托加工订单,录入的bom编号有什么作用?

> 产品：金蝶云·星辰 | 分类：受托加工 | 类型：常见问题
> 作者：Cat_Chow | 阅读：306 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/624410069252987136)

【业务场景】

受托加工订单录入的bom编号有什么作用?

![](https://vip.kingdee.com/download/0109be26414bab404ed4b9003727da1b63e5.png)

【解释说明】

受托加工订单的BOM编号是非必录字段。当受托加工时客户按该产品的BOM提供材料时,可以录入对应的BOM编号,那么下游的客供材料入库单就可以根据订单上录入的BOM编号取对应的材料中属性为“客供件”物料进行入库。

如图,受托加工订单已录入BOM编号

![](https://vip.kingdee.com/download/01097f97233ed1834ca99316a7a91c425972.png)

按受托加工订单新增客供材料入库单时,可以带出客供件及数量:

![](https://vip.kingdee.com/download/01095626a3a60f0940d28bc917506ee9dc37.png)

【注意事项】

1、 若受托加工订单中未录入BOM或者录入的BOM中没有客供件,则客供材料入库单无法关联受托加工订单做单。

2、 按受托加工订单中的BOM展开携带客供件时,不支持多级展开。如果半成品开启了“跳过该层级直接领用下级物料”参数,则会向下展开半成品BOM中的客供件,连同成品BOM中的客供件一起返回至客供材料入库单中。如果没有开启参数,则只携带成品BOM中的客供件返回至客供材料入库单中。

【更多推荐】
更多关于金蝶云·星辰日常业务处理流程,推荐参考链接:[星辰新手攻略](https://vip.kingdee.com/knowledge/specialDetail/172035498049835264?productLineId=35)
