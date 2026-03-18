---
title: "做生产/委外/受托等单据时选不到bom或带出的bom不对如何处理?"
product: "金蝶云·星辰"
category: "生产管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/690733767983549184"
author: "云社区用户u1tk1853"
views: 76
created_at: "2025-03-19 20:24:56"
updated_at: "2026-02-11 02:39:44"
crawl_date: "2026-03-18"
---

# 做生产/委外/受托等单据时选不到bom或带出的bom不对如何处理?

> 产品：金蝶云·星辰 | 分类：生产管理 | 类型：常见问题
> 作者：云社区用户u1tk1853 | 阅读：76 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/690733767983549184)

【问题描述】

做生产/委外/受托等单据时选不到BOM或带出的BOM不对如何处理?

【解决方案】

若BOM单未审核、已禁用时,录入生产任务单、物料需求建议、委外加工单、受托加工订单就无法选择到;同一个商品可以维护多个BOM,若觉得带出的BOM编号不对建议检查最新的BOM版本是哪个。

1、**检查是否创建BOM**

在【生产管理】-【BOM维护】打开BOM列表,可以用商品编码/商品名称等条件筛选,查看是否有创建BOM。
![](https://vip.kingdee.com/download/0109580b431810fd4bf6b42d6264fb4cf1a3.png)
2、**检查创建的BOM是否审核**

在BOM维护列表界面,找到对应的BOM单,检查其审核状态。未审核的BOM做生产任务单无法选择到。
![](https://vip.kingdee.com/download/0109a1dcfabfec90425d9cd6d659e9c6dc0e.png)
在BOM维护列表勾选BOM点击“审核”,审核通过后的BOM做生产任务单(及其他单据)时才可以选择到。
![](https://vip.kingdee.com/download/01094104df7e89da4646b3d3c8cce72cd6b6.png)
3、**检查创建BOM是否禁用**

在BOM维护列表界面过滤条件中“是否禁用”条件选择全部,检查BOM单的“是否禁用”状态,已禁用的BOM单录入单据时选择不到。

![](https://vip.kingdee.com/download/0109f39ca10a1ea746bbbd5b207da657d9f9.png)

选择已禁用的BOM单点击“启用”,启用成功后再录入单据时即可选择已启用的BOM 单。

![](https://vip.kingdee.com/download/01095f93eed2837b4aaabcd04d5f6ea3fa93.png)

**4、检查最新BOM版本号**

同一个商品可以维护多个已审核已启用的BOM单,录入单据时系统默认带出的是最新版本的BOM单号,若觉得带出的BOM不对,在BOM维护列表中检查这个商品是不是有多个bom,最新版本的BOM是哪个,具体操作可参考:[如何查询商品最新的bom版本号?](https://vip.kingdee.com/knowledge/645066492702402048?productLineId=35&isKnowledge=2&lang=zh-CN)

![](https://vip.kingdee.com/download/0109d21df9cf5dbb4493ab2526fc9d6b8bf9.png)

【相关知识】

[物料需求建议界面中的“bom编号”为什么不显示?](https://vip.kingdee.com/knowledge/662099600538194176?productLineId=35&isKnowledge=2&lang=zh-CN)
