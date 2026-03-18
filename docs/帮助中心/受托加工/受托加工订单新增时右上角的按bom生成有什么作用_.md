---
title: "受托加工订单新增时右上角的按bom生成有什么作用?"
product: "金蝶云·星辰"
category: "受托加工"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/626946883650519552"
author: "Schatz"
views: 146
created_at: "2024-09-25 17:44:40"
updated_at: "2025-02-18 16:42:26"
crawl_date: "2026-03-18"
---

# 受托加工订单新增时右上角的按bom生成有什么作用?

> 产品：金蝶云·星辰 | 分类：受托加工 | 类型：常见问题
> 作者：Schatz | 阅读：146 | 有用：5
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/626946883650519552)

【问题描述】

受托加工订单新增时右上角的按BOM生成有什么作用?

【解释说明】

如果一个成品的BOM下包含需要受托加工的半成品,可以在受托加工订单界面中点击右上角的“按BOM生成”按钮。选择相应的成品后,系统将自动提取并列出所有需要加工的半成品信息至单据上,从而简化单据操作流程。

【操作步骤】

首先创建一个BOM,其中“受托加工成品”作为产品,包含材料如电子称-主体、电子称-组件以及推线包。

![](https://vip.kingdee.com/download/010905f7791fdee646edbd7c88bdeeb9d249.png)

在材料中,电子称-主体和电子称-组件是可自制或者可委外(即可生产),而推线包不可进行生产处理。

![](https://vip.kingdee.com/download/010974f391cb381a411c9f1a08f5ddad3cf9.png)

在受托加工订单的新增界面中,点击右上角的“按BOM生成”按钮,选择商品为受托加工成品并设置需求数量为5个。

![](https://vip.kingdee.com/download/0109b95df4c39fc84bfda64d5641e5aa8b14.png)

这样操作后,系统将根据BOM中维护的关系自动带出电子称-主体和电子称-组件到受托加工订单中,并依据刚刚填写的商品数量和BOM维护的数量来计算带出的数量。

![](https://vip.kingdee.com/download/01095091e8bc819843e8a1ac9925cec9b91d.png)
