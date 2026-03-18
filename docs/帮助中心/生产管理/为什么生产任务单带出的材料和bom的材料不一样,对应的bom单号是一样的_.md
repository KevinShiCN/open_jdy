---
title: "为什么生产任务单带出的材料和bom的材料不一样,对应的bom单号是一样的?"
product: "金蝶云·星辰"
category: "生产管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/651852413824744960"
author: "云社区用户u1tk1853"
views: 204
created_at: "2024-11-29 11:12:10"
updated_at: "2025-12-04 01:45:06"
crawl_date: "2026-03-18"
---

# 为什么生产任务单带出的材料和bom的材料不一样,对应的bom单号是一样的?

> 产品：金蝶云·星辰 | 分类：生产管理 | 类型：常见问题
> 作者：云社区用户u1tk1853 | 阅读：204 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/651852413824744960)

【问题描述】

为什么生产任务单带出的材料和BOM的材料不一致,对应的BOM单号是一样的?

【解决方案】

检查BOM是否有多级且开启了跳层。

举例说明:如BOM00034,有三个材料:#8888800106,#8888800110,#8888800111

![](https://vip.kingdee.com/download/010981344dc06ed34428924f2e0823c15b79.png)
新增生产任务单带出的BOM编号是一样的,但是材料不同。

![](https://vip.kingdee.com/download/0109f0c740d9c76446f5adc688672258a5e1.png)
【生产管理】-【BOM维护】筛选出对应的BOM点击右上角的“多级维护”

![](https://vip.kingdee.com/download/0109fb319cb7903a42018873d90915291526.png)
跳转到BOM多级维护的界面,可以查看到有下级二级BOM同时开启了跳层。

![](https://vip.kingdee.com/download/01093b6193c959df42e78d0c634ed50ab491.png)
反审核二级BOM关闭跳层,重新审核即可。

![](https://vip.kingdee.com/download/0109e1098057cc0f4eabbe06925bc02e963c.png)

再重新录生产任务单带出的物料就可以和BOM的物料一致。

![](https://vip.kingdee.com/download/0109e8dc781eab0349a9832ea19134c678c9.png)
【温馨提示】

更多关于星辰生产业务处理流程,推荐参考链接:[金蝶云·星辰生产管理](https://vip.kingdee.com/article/342786243807693312?get_from=article-id&productLineId=35&isKnowledge=2&lang=zh-CN)
