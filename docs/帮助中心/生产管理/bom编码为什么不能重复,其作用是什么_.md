---
title: "bom编码为什么不能重复,其作用是什么?"
product: "金蝶云·星辰"
category: "生产管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/735663533911517952"
author: "云社区用户ySCF4404"
views: 59
created_at: "2025-07-21 18:02:12"
updated_at: "2026-02-11 02:55:34"
crawl_date: "2026-03-18"
---

# bom编码为什么不能重复,其作用是什么?

> 产品：金蝶云·星辰 | 分类：生产管理 | 类型：常见问题
> 作者：云社区用户ySCF4404 | 阅读：59 | 有用：1
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/735663533911517952)

【问题描述】

BOM编码为什么不能重复,其作用是什么?

【解释说明】

1.BOM即物料清单,也叫产品结构或配方,指物料(通常是产成品或半成品、部件)的组成情况,包括该物料由哪些下级物料组成,每一下级物料的用量是多少,其对应的属性等。所以BOM编码是具有唯一性的,如果出现多个相同的BOM编码,系统将无法识别取哪个BOM。

![](https://vip.kingdee.com/download/0109274449c764254dbd9254dd2774d8002d.png)

2.BOM编号在新增BOM单时作为单号存在,可以手工录入或提前设置编码规则自动生成,自动生成的编号也可手动修改。

![](https://vip.kingdee.com/download/0109dda0bed18ec14d55967e14f2e9f7c021.png)

若想了解如何新增BOM单,请查看:[bom单的应用场景是什么?如何创建新增?](https://vip.kingdee.com/knowledge/458798225894273024?productLineId=35&isKnowledge=2&lang=zh-CN)

若想了解编码规则,请查看:[如何设置编码规则?](https://vip.kingdee.com/knowledge/129339770097650193?productLineId=35&isKnowledge=2&lang=zh-CN)

①若需要修改BOM编号可以反审核BOM单后进行修改,再重新审核。

![](https://vip.kingdee.com/download/01094793f3bebc6c4ae4a334cbcf7c53cfd3.png)

②若商品勾选“工程变更控制”,且作为父件的BOM单不允许反审核。

![](https://vip.kingdee.com/download/010980de826675c3465b937493a51f4432bd.png)

反审核BOM单时提示:“产品启用了工程变更控制,不允许反审核修改,请通过工程变更单处理。”

![](https://vip.kingdee.com/download/0109ccd6af09acca4d248143fbe18fb0da20.png)

这时只能通过新增BOM单或复制旧BOM单的方式变通实现修改BOM单编号。

![](https://vip.kingdee.com/download/01098da82ff076294e7cb4fefb10957f6bb2.png)

新增的BOM单编号可以编辑,版本号会在原先的基础上加1。
![](https://vip.kingdee.com/download/0109a1fe61dbde6f47fdbd9c0af3ef24ce16.png)
【温馨提示】

更多关于星辰的知识,请点击:**[新手攻略](https://vip.kingdee.com/link/s/lPq7d)**
