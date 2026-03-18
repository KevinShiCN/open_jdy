---
title: "为什么删除销售退货单提示:销售退货单反写销售订单,商品分录第x行:不允许超额出库"
product: "金蝶云·星辰"
category: "销售管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/746172487808595968"
author: "lykk"
views: 116
created_at: "2025-08-19 09:48:14"
updated_at: "2025-12-04 01:56:44"
crawl_date: "2026-03-18"
---

# 为什么删除销售退货单提示:销售退货单反写销售订单,商品分录第x行:不允许超额出库

> 产品：金蝶云·星辰 | 分类：销售管理 | 类型：常见问题
> 作者：lykk | 阅读：116 | 有用：1
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/746172487808595968)

【问题描述】

为什么删除销售退货单提示:销售退货单反写销售订单,商品分录第x行:不允许超额出库

![](https://vip.kingdee.com/download/01094873f116fd9847cc87a7726d30644bcd.png)

【解释说明】

“进销存参数”中“销售参数“未勾选“允许出库数量大于订单数量”的情况下,当“销售订单”先下推生成销售出库单A,然后通过销售出库单A下推生成“销售退货单”(勾选退货重发),最后通过“销售订单”下推生成销售出库单B,此时删除销售退货单会导致出现该提示;

1、“进销存参数”中“销售参数“未勾选“允许出库数量大于订单数量”

![](https://vip.kingdee.com/download/0109df3c057509e74fe1986f09af410cab58.png)

2、当“销售订单”先下推生成销售出库单A

![](https://vip.kingdee.com/download/01091be5d9b8d2a942b0b069dbf6d9596da4.png)

然后通过销售出库单A下推生成“销售退货单”(勾选退货重发)

![](https://vip.kingdee.com/download/01097181ed7124d940f7880bdc92ab3db115.png)

最后通过“销售订单”下推生成销售出库单B

![](https://vip.kingdee.com/download/0109029714f3890c4c99b87e605714a8789c.png)

此时删除销售退货单会导致出现该提示,因为销售订单的数量为10,销售退货单的数量为10,销售出库单的数量为20,若删除销售退货单,则会导致销售出库单的数量20大于销售订单的数量10,与参数“未勾选“允许出库数量大于订单数量”相悖;

![](https://vip.kingdee.com/download/0109282d1497a4f24cfdb3d1f68e68c5d0fb.png)

【解决方案】

方案一:

在【系统设置】-【系统参数】-【进销存参数】中“销售参数”,勾选“允许出库数量大于订单数量”,勾选后点击“保存”,此时可直接删除“销售退货单”

![](https://vip.kingdee.com/download/0109e2eb860e87804df196b1b8dcacc920f5.png)
方案二:

先删除最后下推生成的销售出库单,然后删除销售退货单;

1、通过对删除“销售退货单”提示的“销售订单”进行全流程跟踪;

![](https://vip.kingdee.com/download/0109b8525b37377f47ea9c201b1725bd4941.png)

“销售订单列表”搜索该单据编号,点击“全流程跟踪”

![](https://vip.kingdee.com/download/0109b4f2cc62ca1043c9868e7f2588e219b4.png)

2、“全流程跟踪”后,点击“销售出库单”,勾选退货重发下推生成的“销售出库单”,点击“反审核”然后进行“删除”

![](https://vip.kingdee.com/download/0109e279bc847ec04460821b39fd6bbead5a.png)

此时再点击“销售退货单”,点击“反审核”然后进行“删除”

![](https://vip.kingdee.com/download/010911da2632a4cf40c28241b3c413401d82.png)
