---
title: "bom批量替换子件为什么过滤出的bom不全呢?"
product: "金蝶云·星辰"
category: "生产管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/815751036035511552"
author: "quanxing"
views: 7
created_at: "2026-02-28 17:55:09"
updated_at: "2026-03-01 01:03:23"
crawl_date: "2026-03-18"
---

# bom批量替换子件为什么过滤出的bom不全呢?

> 产品：金蝶云·星辰 | 分类：生产管理 | 类型：常见问题
> 作者：quanxing | 阅读：7 | 有用：1
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/815751036035511552)

【问题描述】

按子件查询对应BOM有三个,操作批量修改替换子件,过滤只显示2个BOM

![](https://vip.kingdee.com/download/0109e5325ef2e80846a7abad15ea987cd6cf.png)![](https://vip.kingdee.com/download/0109c6504008ecfc47be9ac638381d050392.png)![](https://vip.kingdee.com/download/0109d74a71887b324a2293ed275523012551.png)
【解决方案】

未显示的bom是由于其主产品启用了工程变更控制,启用工程变更控制的产品不允许直接进行BOM修改,因此不显示在BOM批量修改的选BOM界面,需要通过[工程变更单](https://vip.kingdee.com/link/s/Zrpba)进行修改子件,或者先关闭产品的工程变更控制,批量修改子件后再重新开启

![](https://vip.kingdee.com/download/0109f9185b35852243d9bc3eef5b196c7495.png)
