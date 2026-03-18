---
title: "pos端没库存但后台有库存如何检查?"
product: "金蝶云·星辰"
category: "门店管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/720805716868561408"
author: "happy忆霖"
views: 98
created_at: "2025-06-11 14:15:55"
updated_at: "2025-08-20 01:41:26"
crawl_date: "2026-03-18"
---

# pos端没库存但后台有库存如何检查?

> 产品：金蝶云·星辰 | 分类：门店管理 | 类型：常见问题
> 作者：happy忆霖 | 阅读：98 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/720805716868561408)

【问题描述】

POS端没库存但后台有库存如何检查?

【业务场景】

POS端显示的商品库存信息和星辰后台库存查询表中的库存不一致,是什么原因?

若希望了解如何在pos端查询商品库存,请点击:[pos端如何查询商品库存?](https://vip.kingdee.com/knowledge/566065274177445120?productLineId=35&isKnowledge=2&lang=zh-CN)

若希望了解如何查询库存查询表,请点击:[如何使用库存查询表?](https://vip.kingdee.com/knowledge/561354046267755264?productLineId=35&isKnowledge=2&lang=zh-CN)

【解释说明】

**情况一:pos端未进行同步**

**情况二:pos端门店对应的仓库和在库存查询表中查询的仓库不一致**

**情况二:查询字段错误,需要将库存查询表的可用库存和pos端的可用库存比对**

【解决方案】

**情况一:pos端未进行同步**

**若需要了解如何同步pos端数据,请点击:**[pos端如何同步后台数据?](https://vip.kingdee.com/knowledge/713921366336271104?productLineId=35&isKnowledge=2&lang=zh-CN)

**情况二:pos端门店对应的仓库和在库存查询表中查询的仓库不一致**

**点击**【**零售资料**】>【**基础资料**】>【**门店资料**】**,进入到门店资料列表中**

![](https://vip.kingdee.com/download/01092786e26a9059425d86110385b58ef30f.png)
在门店列表中,在左上角搜索对应的门店名称,在门店列表中查询对应门店名称下的“对应仓库”信息,结合对应仓库的数据,将库存查询表的可用库存和pos端的可用库存进行比对

![](https://vip.kingdee.com/download/0109a08da3e2c1c04de1aee7ce8efc94a84c.png)
**情况三:查询字段错误,需要将库存查询表的可用库存和pos端的可用库存比对**

在库存查询表中,查询“可用库存(基本)”字段,将该字段下的数据和pos端的可用库存数据进行比对

若希望了解即时库存和可用库存不一致是什么原因,请点击:**[怎么查库存占用情况?](https://vip.kingdee.com/knowledge/550119965844548352?productLineId=35&isKnowledge=2&lang=zh-CN)**

![](https://vip.kingdee.com/download/010951ee421685d340c5a7ea474c53a1f23e.png)
