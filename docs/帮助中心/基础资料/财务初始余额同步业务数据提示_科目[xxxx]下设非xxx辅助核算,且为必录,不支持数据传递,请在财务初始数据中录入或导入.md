---
title: "财务初始余额同步业务数据提示:科目[xxxx]下设非xxx辅助核算,且为必录,不支持数据传递,请在财务初始数据中录入或导入"
product: "金蝶云·星辰"
category: "基础资料"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/727690587914342400"
author: "云社区用户3364330"
views: 71
created_at: "2025-06-27 16:53:51"
updated_at: "2025-07-01 01:02:36"
crawl_date: "2026-03-18"
---

# 财务初始余额同步业务数据提示:科目[xxxx]下设非xxx辅助核算,且为必录,不支持数据传递,请在财务初始数据中录入或导入

> 产品：金蝶云·星辰 | 分类：基础资料 | 类型：常见问题
> 作者：云社区用户3364330 | 阅读：71 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/727690587914342400)

【问题描述】

财务初始余额同步业务数据提示:科目[xxxx]下设非xxx辅助核算,且为必录,不支持数据传递,请在财务初始数据中录入或导入![](https://vip.kingdee.com/download/010951d0a98f05724935884f492c32ed7702.png)

【解释说明】

如1122应收账款科目一般是设置客户的辅助核算,同步客户的业务期初时,财务初始中的科目应有客户明细来对应,若应收或预收科目设置的辅助核算不是客户,则无法同步,应修改科目辅助核算后再操作同步或手工录入财务初始余额。

【操作流程】

一、修改科目辅助核算

若科目还未使用,可点击【基础资料】>【科目】

![](https://vip.kingdee.com/download/01090dacb71d2609451783b0ff5ee438f802.png)
点击科目编码,将辅助核算改为“客户”后保存,之后再重新同步数据

![](https://vip.kingdee.com/download/01096e35a9d9f93b4a28954efc43fb318401.png)

二、直接在财务初始余额中录入1122科目对应辅助核算的数据。

点击【基础资料】-【财务初始余额】。

![](https://vip.kingdee.com/download/01090584452979094f9591bbb560870cbd13.png)
找到1122科目,点击科目前面的【+】号。![](https://vip.kingdee.com/download/0109b2f499a7766e4e4180639316ad12aeab.png)

进入到核算明细页面,由于科目1122是携带职员的辅助核算,需要填写对应职员的数据,再点击保存即可。

![](https://vip.kingdee.com/download/0109ac7cd9648b9545d18c3cbd0b89a1985a.png)![](https://vip.kingdee.com/download/0109f85a176c876d459ebf9daa40b0112de5.png)
三、下载导入模板,导入1122科目的财务初始数据。

在财务初始余额页面点击右上角<导入>,点击<模板管理>,选择模板,点击下载。![](https://vip.kingdee.com/download/01093c25421c71294b45b571f989a489f1e5.png)

在下载的导入模板里面填写科目1122的数据,再导入到系统里面。

![](https://vip.kingdee.com/download/01090d4a9597d48f47f9ae632afb3e3fb48b.png)![](https://vip.kingdee.com/download/0109c0ceb63f5e114398876480bc61bf2381.png)导入成功后,在财务初始余额里面可看到导入的数据。![](https://vip.kingdee.com/download/01091fd9c345e20644258e327da1879a7fc8.png)

【温馨提示】

[如何录入/修改财务初始余额?](https://vip.kingdee.com/knowledge/421834830972488704?productLineId=35&isKnowledge=2&lang=zh-CN)

[财务初始余额同步业务数据的时候,提示:科目[1122]下设置了外币辅助核算,业务未启用外币时,只能传递本位币金额,请确认是否传递?](https://vip.kingdee.com/knowledge/703054791819286528?productLineId=35&isKnowledge=2&lang=zh-CN)
