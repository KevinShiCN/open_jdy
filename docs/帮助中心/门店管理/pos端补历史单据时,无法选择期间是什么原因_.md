---
title: "pos端补历史单据时,无法选择期间是什么原因?"
product: "金蝶云·星辰"
category: "门店管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/722981047876578560"
author: "happy忆霖"
views: 72
created_at: "2025-06-17 15:07:34"
updated_at: "2025-08-27 01:09:35"
crawl_date: "2026-03-18"
---

# pos端补历史单据时,无法选择期间是什么原因?

> 产品：金蝶云·星辰 | 分类：门店管理 | 类型：常见问题
> 作者：happy忆霖 | 阅读：72 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/722981047876578560)

【问题描述】

pos端补历史单据时,无法选择期间是什么原因?

【业务场景】

在pos端补录历史单据的时候,日期无法选择是什么原因?

![](https://vip.kingdee.com/download/0109d136c9ac5bfe49bbb004563503eb13ac.png)

**若需要了解如何使用pos端补历史单据的功能,请点击:[3.1版本,pos开单修改单据日期怎么操作?](https://vip.kingdee.com/knowledge/525115312237075456?productLineId=35&isKnowledge=2&lang=zh-CN)**

【解释说明】

**补历史单据无法选择日期主要原因是未开启修改单据日期(补单)的权限,且未在可调整日期范围(天)中录入可以调整的天数。**

【解决方案】

点击【零售资料】>【基础设置】>【收银员管理】,进入到收银员管理列表中

![](https://vip.kingdee.com/download/010922552f0eef11462496ef3fe6406cb2d4.png)
选择需要授权的收银员,点击<授予权限>,进入到收银员权限设置的界面

![](https://vip.kingdee.com/download/0109d4f7a5fcc75a42bfa8b4ae6648e0c849.png)
在"门店收银权限"下的"功能权限"中,勾选"修改单据日期(补单)"同时在"可调整日期范围(天)"中录入需要调整的天数范围

**tips:1.若仅勾选修改单据日期(补单)权限,不填写可调整日期范围(天)的数据,则pos端仍不能在补历史单据时修改日期;**

**2.可调整日期范围(天)在【0,9999】之间,最小值为0,最大值为9999(补录单据时的日期不得早于星辰账套的启用期间和星辰后台进销存模块已经结账的期间)**
![](https://vip.kingdee.com/download/0109fea45499efb64ba287a146166506404e.png)
设置完成后,pos端在补历史单据时,支持修改开单日期,如下图所示

![](https://vip.kingdee.com/download/01095486fde13266491795f510f9628f198c.png)
