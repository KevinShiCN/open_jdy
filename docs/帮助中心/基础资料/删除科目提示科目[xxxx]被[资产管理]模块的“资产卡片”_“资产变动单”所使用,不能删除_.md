---
title: "删除科目提示科目[xxxx]被[资产管理]模块的“资产卡片”/“资产变动单”所使用,不能删除?"
product: "金蝶云·星辰"
category: "基础资料"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/614262966585548288"
author: "咚咚"
views: 251
created_at: "2024-08-21 16:17:07"
updated_at: "2025-05-16 01:18:04"
crawl_date: "2026-03-18"
---

# 删除科目提示科目[xxxx]被[资产管理]模块的“资产卡片”/“资产变动单”所使用,不能删除?

> 产品：金蝶云·星辰 | 分类：基础资料 | 类型：常见问题
> 作者：咚咚 | 阅读：251 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/614262966585548288)

【问题描述】

删除科目提示科目【XXXX】被【资产管理】模块的“资产卡片”/“资产变动单”所使用,不能删除?

![](https://vip.kingdee.com/download/01093c5f307c974f41c0bb1ba04dd3b29455.png)

【原因分析】

此处没有变动单,需要检查卡片上的科目是不是用到了这个科目。

![](https://vip.kingdee.com/download/010997b889e8af8b4bc293d4aba23c9f9974.png)

【解决方案】

资产列表,查看卡片的固定资产科目。

路径:【资产管理】-【资产新增】查询

![](https://vip.kingdee.com/download/0109ef5c3a4770c8423faca8b73c85c479d4.png)
资产列表可以看到这些卡片都使用了这个科目。

![](https://vip.kingdee.com/download/01091613a78e58a44f86b24d6cc95f2780c2.png)

1、如果卡片都是当期新增的,需要删除这些卡片的所有凭证,在点卡片进去,编辑,替换换其他过渡科目,保存卡片。

![](https://vip.kingdee.com/download/01099223ad95558844e5a4f170072cd484fa.png)
![](https://vip.kingdee.com/download/0109e2d21b61f0e44ce3afdd2d02f6783ba0.png)

![](https://vip.kingdee.com/download/0109cdb824f93074484c8703f5130df04058.png)

卡片上的固定资产科目改成过渡科目以后,在删除科目

![](https://vip.kingdee.com/download/01099f77e1bdefd749f791e2889c376401ba.png)
![](https://vip.kingdee.com/download/01098058aa64e3774b2b8651c3edaa28a75d.png)
科目删除以后,卡片里面需要改回正确的固定资产科目。

![](https://vip.kingdee.com/download/01098f38e279221c4c0ba70dc5ada32086c4.png)

2、如果是以前期间录入的卡片,则不能直接修改卡片上的固定资产科目了。只能变动卡片上的固定资产科目为需要的科目,此科目16010101不能删除,只能禁用了。
