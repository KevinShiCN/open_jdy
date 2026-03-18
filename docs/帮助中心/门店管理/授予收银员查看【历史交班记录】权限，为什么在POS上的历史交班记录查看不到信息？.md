---
title: "授予收银员查看【历史交班记录】权限，为什么在POS上的历史交班记录查看不到信息？"
product: "金蝶云·星辰"
category: "门店管理"
type: "常见问题, 快速入门, 精华汇总"
source: "https://vip.kingdee.com/knowledge/689413258712955648"
author: "Weixinxin"
views: 72
created_at: "2025-03-17 10:02:10"
updated_at: "2025-03-17 10:33:44"
crawl_date: "2026-03-18"
---

# 授予收银员查看【历史交班记录】权限，为什么在POS上的历史交班记录查看不到信息？

> 产品：金蝶云·星辰 | 分类：门店管理 | 类型：常见问题, 快速入门, 精华汇总
> 作者：Weixinxin | 阅读：72 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/689413258712955648)

## 1 问题描述

授予收银员查看【历史交班记录】权限，为什么在POS上的历史交班记录查看不到信息，显示为空白？
![](https://vip.kingdee.com/download/01093fdc8136a5f040de80b24a671bb225c1.png)

![](https://vip.kingdee.com/download/010941200cb4a7804483a30a998f12eae09e.png)

![](https://vip.kingdee.com/download/010969d892eb2da34136bc7bf62c7dd1efcc.png)

## 2 解决方案

针对上述场景，可以通过明确权限范围来实现。
目前， 当给予收银员【查看历史交班记录】时，收银员是相对于POS来讲的，在POS 的【交班历史记录】中只能查看当前门店、当前登录收银员的历史交班信息。

![](https://vip.kingdee.com/download/01097385360015434d128b07e9e23251f3ef.png)

若想要看全部门店、全部收银员的交班信息，则需在 PC 端的【收银员交班记录】表中去查看，这里的权限对象是业务员，需要在【系统设置】>【用户管理】，选择对应业务员，授予【收银员交班记录】的查看权限。

![](https://vip.kingdee.com/download/010980f3ed1baafe46c5a38290452f2cb24f.png)

![](https://vip.kingdee.com/download/01094d47f167e11c4b0c8901ea097ea32905.png)

## 3 应用流程

（1）若要查看当前登录收银员的历史交班信息，在【零售资料】>【收银员管理】授予收银员【查看历史交班记录】权限，在 POS 端可查看。

（2）若要查看全部历史交班信息，在 PC 端【用户管理】授予相应业务员【收银员交班记录】查看权限，在【门店管理】>【收银员交班记录】列表查看维护。
