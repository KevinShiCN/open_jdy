---
title: "单据打印导出为excel内容缺失显示不全是为什么?"
product: "金蝶云·星辰"
category: "销售管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/619343852163560448"
author: "ylim"
views: 1381
created_at: "2024-09-04 09:17:02"
updated_at: "2026-03-06 01:48:30"
crawl_date: "2026-03-18"
---

# 单据打印导出为excel内容缺失显示不全是为什么?

> 产品：金蝶云·星辰 | 分类：销售管理 | 类型：常见问题
> 作者：ylim | 阅读：1381 | 有用：2
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/619343852163560448)

【问题描述】

单据打印导出为excel内容缺失显示不全是为什么?

如下图,预览正常

![](https://vip.kingdee.com/download/0109f13e4ed1de2a4c098586e7f05c2f0ef3.png)
但是打印导出为excel后又内容不见了,和模板设置及预览的不一样

![](https://vip.kingdee.com/download/0109a6398e830221424e90084a47424883ef.png)
【解释说明】

这是因为打印模板设置时有文本框重叠导致的,导出为excel时,一个文本框至少要占用一个单元格,如果有两个或多个文本框重叠,导出为excel无法分配,就不显示了

如下图打印模板,选中文本框可以看到有重叠部分

![](https://vip.kingdee.com/download/010967404d68b9d7419ebb7b1433a6e4e406.png)
打印模板中各个文本框移动位置为不重叠,保存

![](https://vip.kingdee.com/download/010963975f2b122c495d951adf3117da75a3.png)
再操作打印导出为excel就正常了

![](https://vip.kingdee.com/download/01097629f6e9a3fa42ed82679873477478a2.png)
