---
title: "二维打印时,是否可以按sku维度(即商品编码相同,但是辅助属性不同)汇总打印?"
product: "金蝶云·星辰"
category: "系统设置"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/391353680991302912"
author: "winnie_wen"
views: 263
created_at: "2022-12-15 22:19:49"
updated_at: "2026-02-03 01:02:19"
crawl_date: "2026-03-18"
---

# 二维打印时,是否可以按sku维度(即商品编码相同,但是辅助属性不同)汇总打印?

> 产品：金蝶云·星辰 | 分类：系统设置 | 类型：常见问题
> 作者：winnie_wen | 阅读：263 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/391353680991302912)

【问题描述】

二维打印时,除了按SKU维度(就是最小库存单位)汇总,是否可以按SPU维度(即商品编码相同,但是辅助属性不同)汇总?

【操作流程】

在打印模板中,找到合计行,把“数量”字段单元格类型设置成 “统计”,统计类型选“求和”,统计范围选【本页合计】。

![](https://vip.kingdee.com/download/01094b846f60ad024afaaa4fd86d1e306296.png)

打印预览效果:

![](https://vip.kingdee.com/download/0109f1afcf4355bc48b2b3b678882ca363ba.png)

如果不选择“本页合计”,则打印时只会按照SKU维护汇总。

![](https://vip.kingdee.com/download/01094511157669154cc4ae4f1d8f89fcd83a.png)
