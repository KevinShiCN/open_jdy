---
title: "如何把a账套的客户应收余额导入b账套?"
product: "金蝶云·星辰"
category: "基础资料"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/725889533694007296"
author: "happy忆霖"
views: 88
created_at: "2025-06-24 17:25:48"
updated_at: "2025-06-26 01:45:51"
crawl_date: "2026-03-18"
---

# 如何把a账套的客户应收余额导入b账套?

> 产品：金蝶云·星辰 | 分类：基础资料 | 类型：常见问题
> 作者：happy忆霖 | 阅读：88 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/725889533694007296)

【问题描述】

如何把a账套的客户应收余额导入b账套?

【业务场景】

A账套不想使用了,如何将A账套中的客户余额转移到B账套中?

【解释说明】

**下面针对进销存和财务模块分开进行介绍。**

**针对进销存模块,一般区分以下两种情况:**

**情况一:期初建账**

**可以通过导入/新增客户期初的方式将A账套的客户期末数据转移到B账套的客户期初数据中**

**若希望了解如何导入客户期初,请点击:[如何导入客户初始数据?](https://vip.kingdee.com/knowledge/129339770114427468?productLineId=35&isKnowledge=2&lang=zh-CN)**

**若希望了解如何新增客户期初,请点击:[如何录入客户初始数据?](https://vip.kingdee.com/knowledge/129339770114427466?productLineId=35&isKnowledge=2&lang=zh-CN)**

**情况二:已经建账完成,且使用了一段时间**

**在不反结账到启用期间的情况下,可以建立服务商品,通过新增/导入销售出库单的方式(销售出库单单据内不用填写收款信息),增加客户的应收账款余额**

**tips:使用服务商品的优点在于服务商品不考虑库存,可以不影响系统中的库存数据。**

**若需要了解如何建立服务商品,请点击:[支持服务商品吗?如何销售出库?](https://vip.kingdee.com/knowledge/534899722918793216?productLineId=35&isKnowledge=2&lang=zh-CN)**

**若需要了解如何导入销售出库单,请点击:[如何引入销售出库单?](https://vip.kingdee.com/knowledge/539973290090275584?productLineId=35&isKnowledge=2&lang=zh-CN)**

**若需要了解如何新增销售出库单,请点击:[](https://vip.kingdee.com/knowledge/609914333757423616?productLineId=35&isKnowledge=2&lang=zh-CN)[销售出库单如何新增?](https://vip.kingdee.com/knowledge/609914333757423616?productLineId=35&isKnowledge=2&lang=zh-CN)**

![](https://vip.kingdee.com/download/0109199217ec26dc4838b6e8c84c603d5c53.png)

**或者可以通过新增其他收入单的方式(其他收入单中不用填写收款信息),增加客户的其他应收金额**

**若需要了解如何新增其他收入单,请点击:[其他收入单和其他支出单如何应用?](https://vip.kingdee.com/knowledge/568601871074560256?productLineId=35&isKnowledge=2&lang=zh-CN)**

![](https://vip.kingdee.com/download/0109288f23bb3e2a477f8b00d2b2ff91d888.png)
**针对财务模块,一般区分以下两种情况:**

**情况一:期初建账******

**可以通过导入/新增财务初始余额的方式将A账套的科目下的客户期末数据转移到B账套的对应科目中**

**若希望了解如何新增财务初始余额,请点击:[如何录入/修改财务初始余额?](https://vip.kingdee.com/knowledge/421834830972488704?productLineId=35&isKnowledge=2&lang=zh-CN)**

**若希望了解如何导入财务初始余额,请点击:[财务初始余额如何引入?](https://vip.kingdee.com/knowledge/564616676986256128?productLineId=35&isKnowledge=2&lang=zh-CN)**

**情况二:已经建账完成,且使用了一段时间******

**可以通过录入/导入凭证的方式增加对应科目的客户余额,例如借:应收账款-客户 贷:需要设置的科目**

**若希望了解如何新增凭证,请点击:[如何手工录入凭证?](https://vip.kingdee.com/knowledge/564616694115488512?productLineId=35&isKnowledge=2&lang=zh-CN)**

**若希望了解如何导入凭证,请点击:[导入凭证如何操作?](https://vip.kingdee.com/knowledge/670433132361070080?productLineId=35&isKnowledge=2&lang=zh-CN)**

【温馨提示】

若是同时有购买财务和进销存模块,对于通过单据调整应收余额的,可通过单据生成凭证来调整财务上的余额
