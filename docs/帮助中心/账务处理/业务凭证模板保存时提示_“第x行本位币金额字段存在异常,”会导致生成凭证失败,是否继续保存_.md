---
title: "业务凭证模板保存时提示:“第x行本位币金额字段存在异常,”会导致生成凭证失败,是否继续保存?"
product: "金蝶云·星辰"
category: "账务处理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/744363811816981248"
author: "lykk"
views: 37
created_at: "2025-08-12 15:24:53"
updated_at: "2025-08-16 01:16:02"
crawl_date: "2026-03-18"
---

# 业务凭证模板保存时提示:“第x行本位币金额字段存在异常,”会导致生成凭证失败,是否继续保存?

> 产品：金蝶云·星辰 | 分类：账务处理 | 类型：常见问题
> 作者：lykk | 阅读：37 | 有用：1
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/744363811816981248)

【问题描述】

业务凭证模板保存时提示:“第x行本位币金额字段存在异常,”会导致生成凭证失败,是否继续保存?

![](https://vip.kingdee.com/download/0109b352ff07229f4174aa1019697719ac28.png)

【解决方案】

1、按照报错弹窗提示,找到对应的“凭证分录行”和“字段”

![](https://vip.kingdee.com/download/010976d697fcb8314638bcc9edd1e7f38ad2.png)
2、点击字段旁的符号,查看对应字段的详情

![](https://vip.kingdee.com/download/01098a605386b499453ca0b055ef024c3e8d.png)
3、检查取值中的“表达式”是否变成中文字样,一般情况下该字段都是显示英文,若显示为中文,则无法正常取值;

![](https://vip.kingdee.com/download/01097276df29207645e2b9b58f2e4aa96d4d.png)
4、若表达式异常,需要点击“移除”将该字段删除

![](https://vip.kingdee.com/download/01092679a2f91b194aefa56bc9d27961d791.png)

移除后,左侧选中需要取值的字段,点击“添加”,添加完成后“表达式”变成正常的英文样式;

![](https://vip.kingdee.com/download/0109987786fe1169411780ec5780aaef1e79.png)
5、修改完成后,业务凭证模板点击“保存”,则不会出现“字段存在异常”的报错提示;

![](https://vip.kingdee.com/download/0109edd27695aebf46dca9150583f2bc9867.png)
