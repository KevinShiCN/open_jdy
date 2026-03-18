---
title: "后台在操作备份时零售pos开单会有影响吗?"
product: "金蝶云·星辰"
category: "门店管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/703773449654889728"
author: "happy忆霖"
views: 46
created_at: "2025-04-25 10:52:22"
updated_at: "2025-04-26 01:04:26"
crawl_date: "2026-03-18"
---

# 后台在操作备份时零售pos开单会有影响吗?

> 产品：金蝶云·星辰 | 分类：门店管理 | 类型：常见问题
> 作者：happy忆霖 | 阅读：46 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/703773449654889728)

【问题描述】

后台在操作备份时零售pos开单会有影响吗?

![](https://vip.kingdee.com/download/0109efddd99e594d4635a6af3593befd0973.png)

【解释说明】

**有影响。一般有两种情况:1.登录pos前,后台在进行备份;2.登录pos后,后台在进行备份,分别对应不同的影响。**

1.登录pos前,后台在进行备份

系统会提示“账套正在初始化或恢复备份,请稍后登录”,将无法登录pos进行开单,必须等到系统备份完成后再重新进行登录

![](https://vip.kingdee.com/download/0109f5b98e8b65bf49e2a1a1e4db510ef9a1.png)

2.登录pos后,后台在进行备份

pos端支持正常开单,但是无法进行结存。点击<零售开单>-<开单记录> ,进入到“开单记录”列表中

![](https://vip.kingdee.com/download/010982815a8055ce4de995eb10a1497d997f.png)

单据状态会显示“单据异常”,且在备注中会显示异常原因,“正在进行账套初始化,账套备份或者恢复备份任务,请稍后再试”

![](https://vip.kingdee.com/download/010971339b5aa1934037b5e4e871ae4b025b.png)
待备份结束后,零售单的单据状态会变成“未结存”或“已结存”,备注栏中提示备份的信息会自动消失

![](https://vip.kingdee.com/download/0109e21a1129bc454e7dbae3b90313488f0d.png)

【温馨提示】

若备份完成后,单据状态仍然显示“单据异常”(一般是没有刷新开单记录界面或者网络延迟等原因),可以点击<点击重新同步此单据>,单据状态即可显示正常。

![](https://vip.kingdee.com/download/01093638cb14e8b24974a5584c98bd236336.png)
