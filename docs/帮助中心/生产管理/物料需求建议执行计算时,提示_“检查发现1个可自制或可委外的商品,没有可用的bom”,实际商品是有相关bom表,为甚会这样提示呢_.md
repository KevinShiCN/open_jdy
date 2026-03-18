---
title: "物料需求建议执行计算时,提示:“检查发现1个可自制或可委外的商品,没有可用的bom”,实际商品是有相关bom表,为甚会这样提示呢?"
product: "金蝶云·星辰"
category: "生产管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/393930808773223424"
author: "_Leo"
views: 573
created_at: "2022-12-23 01:00:24"
updated_at: "2026-01-07 01:11:25"
crawl_date: "2026-03-18"
---

# 物料需求建议执行计算时,提示:“检查发现1个可自制或可委外的商品,没有可用的bom”,实际商品是有相关bom表,为甚会这样提示呢?

> 产品：金蝶云·星辰 | 分类：生产管理 | 类型：常见问题
> 作者：_Leo | 阅读：573 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/393930808773223424)

### 【问题描述】

物料需求建议执行计算提示:“检查发现1个可自制或可委外的商品,没有可用的BOM”,如图所示:

![](https://vip.kingdee.com/download/0109f67a40c6887540dd8e6ad85d7f3f6a34.png)【解释说明】:

因为子件商品也启用了【可委外或可自制】,执行计算时,系统是按成品BOM表计算所需物料,即BOM表中所有【可委外或可自制】商品计算总用量。如提示中的原材料A 。

【操作流程】

①子件 原材料A 确实为半成品,需先创建原材料A对应的BOM表,再【执行计算】

![](https://vip.kingdee.com/download/0109700d3ca2ade64ff99bbb64b588efa059.png)②或是在商品信息,取消【可委外、可自制】选项,再【执行计算】:
![](https://vip.kingdee.com/download/01093d7a92fe91e547f49936f66d6cd1dc35.png)

③或是忽略提示,直接以原材料A进行物料需求计算:

![](https://vip.kingdee.com/download/01097c404a79749943d087e49f7430d24704.png)

![](https://vip.kingdee.com/download/0109b3600b86fdca4a649743958f5b7b46cd.png)

【更多推荐】
您可通过查看云星辰相关教程,以获得更多帮助,地址链接:[https://vip.kingdee.com/knowledge/specialDetail/172035498049835264?productLineId=35](https://vip.kingdee.com/knowledge/specialDetail/172035498049835264?productLineId=35)
