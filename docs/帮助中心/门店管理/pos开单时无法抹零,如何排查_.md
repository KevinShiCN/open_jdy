---
title: "pos开单时无法抹零,如何排查?"
product: "金蝶云·星辰"
category: "门店管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/651852388725964800"
author: "lykk"
views: 75
created_at: "2024-11-29 10:18:50"
updated_at: "2025-02-18 13:45:40"
crawl_date: "2026-03-18"
---

# pos开单时无法抹零,如何排查?

> 产品：金蝶云·星辰 | 分类：门店管理 | 类型：常见问题
> 作者：lykk | 阅读：75 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/651852388725964800)

【问题描述】

pos开单时无法抹零,如何排查?

【解决方案】

1、检查【零售资料】-【抹零方案】中是否设置了抹零方案,若未设置抹零方案的前提下,检查【零售资料】-【参数设置】中是否设置了抹零方案;

注:抹零方案的优先级大于系统参数中的优先级,若对应门店设置了抹零方案。则需要检查抹零方案中的设置,若没有设置则需要检查系统参数中的设置;

![](https://vip.kingdee.com/download/0109967aafa9cce14046a550817556dd6aed.png)

系统参数中的抹零设置

![](https://vip.kingdee.com/download/010986c367d0a47243daa84d9f8621f09b80.png)

![](https://vip.kingdee.com/download/0109b61ee815e4314195bbf7be1cdb3b8f2a.png)

2、若门店有抹零方案的情况下,先检查方案中的抹零方式,开单的金额跟抹零方式是否匹配; 如开单120.4元,勾选了抹零到角,这种情况无法进行抹零;

![](https://vip.kingdee.com/download/01097a7ed4b79db04399a4b50c192ed19a44.png)

若勾选了只有现金参与抹零,则需要检查门店收款方式中的支付类型是否为现金,若其他收款方式也要抹零,可以取消该参数;

![](https://vip.kingdee.com/download/01090744b24c99fa46c39322faea4606eb27.png)

![](https://vip.kingdee.com/download/0109b601ae491910418a9e5164f5810e093f.png)

若门店没有抹零方案,则需要检查系统参数中的抹零设置;检查的内容与抹零方案一致;先进行检查抹零设置,

![](https://vip.kingdee.com/download/0109d972ea7af44c4f73b477e657f809495f.png)

若抹零设置没有问题,再检查是否勾选了只有现金参与抹零

![](https://vip.kingdee.com/download/0109ab828c671a0747498cd6d9c05aa3e5ab.png)

3、检查收银员是否有抹零权限;

路径:【零售资料】-【收银员管理】

![](https://vip.kingdee.com/download/0109a6ac30a4cf3b42b8952b70a5e01b2d3b.png)

4、若系统参数未启用抹零,设置了抹零方案,收银员也有权限,且抹零方案的内容也检查没有问题,可以检查下抹零方案是否审核;

![](https://vip.kingdee.com/download/0109b7767c9d3e6a44d49d38a8ff36fdeb7b.png)
