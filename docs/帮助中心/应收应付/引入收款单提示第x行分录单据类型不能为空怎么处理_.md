---
title: "引入收款单提示第x行分录单据类型不能为空怎么处理?"
product: "金蝶云·星辰"
category: "应收应付"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/645428697880867584"
author: "Siwennn"
views: 163
created_at: "2024-11-15 14:42:03"
updated_at: "2026-02-11 02:11:24"
crawl_date: "2026-03-18"
---

# 引入收款单提示第x行分录单据类型不能为空怎么处理?

> 产品：金蝶云·星辰 | 分类：应收应付 | 类型：常见问题
> 作者：Siwennn | 阅读：163 | 有用：1
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/645428697880867584)

【问题描述】

引入收款单提示第x行分录单据类型不能为空怎么处理?

![](https://vip.kingdee.com/download/01097b9de2123ad44984a365d0337e179566.png)

【解释说明】

收款单涉及到源单信息,在源单信息中**“源单类型”**字段为必录字段。

需自定义引入模版设置中**开启“源单类型”字段**的**“是否允许引入引出”参数。**

如何自定义引入模版,可参考链接:[如何自定义单据引入引出模板?](https://vip.kingdee.com/article/487064462935841792?productLineId=35&isKnowledge=2&lang=zh-CN)

![](https://vip.kingdee.com/download/0109334dcac3b8ec4e369ea3c377be39c51e.png)

开启参数后,重新下载引入模版,把数据粘贴至新版后,在**“源单类型.名称 ”**处填好对应单据的名称,重新进行引入

![](https://vip.kingdee.com/download/01094912982bc26f4ffdb995dd11719593f5.png)
