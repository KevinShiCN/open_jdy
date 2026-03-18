---
title: "bom打印如何设置取到单位字段?"
product: "金蝶云·星辰"
category: "生产管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/632747593868790784"
author: "Schatz"
views: 132
created_at: "2024-10-11 11:59:47"
updated_at: "2025-02-18 16:40:12"
crawl_date: "2026-03-18"
---

# bom打印如何设置取到单位字段?

> 产品：金蝶云·星辰 | 分类：生产管理 | 类型：常见问题
> 作者：Schatz | 阅读：132 | 有用：1
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/632747593868790784)

【问题描述】

BOM打印如何设置取到单位字段?

【操作步骤】

BOM单上产品信息、子件信息都是有单位字段的。打印模板设置取值的时候要选择正确。

![](https://vip.kingdee.com/download/01099336d3bc22ca4801b9952dfcb4540343.png)

产品的单位是在BOM表头的字段,设置打印模板的时候,表头加一个文本框,设置取值:=$BOM单.单位.单位名称:

![](https://vip.kingdee.com/download/01096cf83e1cd4974f6c841e4a8aa18dd1a9.png)

子件的单位是在BOM的子件分录的字段,设置打印模板的时候,是在数据表里面双击单元格,然后设置取值:=$BOM单.子件分录.单位.单位名称:

![](https://vip.kingdee.com/download/01099fde66428edb4ec0a32fda9cade58aea.png)

设置好之后,打印BOM单,就可以正常带出产品和子件的单位信息。

如下图BOM单:

![](https://vip.kingdee.com/download/01099c5028685474409e9f119be3e8d6cc09.png)

打印对应带出了所有子件和产品的单位信息。

![](https://vip.kingdee.com/download/0109513b2031c5a74b20a2e5b633af9cd9e6.png)

【温馨提示】

更多关于星辰日常业务处理流程,推荐参考链接:星辰日常业务处理
[https://vip.kingdee.com/knowledge/specialDetail/172035498049835264?productLineId=35](https://vip.kingdee.com/knowledge/specialDetail/172035498049835264?productLineId=35)
