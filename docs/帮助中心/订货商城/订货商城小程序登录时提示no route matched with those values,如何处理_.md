---
title: "订货商城小程序登录时提示no route matched with those values,如何处理?"
product: "金蝶云·星辰"
category: "订货商城"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/537798995561845504"
author: "杨桂平"
views: 677
created_at: "2022-05-31 09:53:49"
updated_at: "2025-12-12 01:19:25"
crawl_date: "2026-03-18"
---

# 订货商城小程序登录时提示no route matched with those values,如何处理?

> 产品：金蝶云·星辰 | 分类：订货商城 | 类型：常见问题
> 作者：杨桂平 | 阅读：677 | 有用：1
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/537798995561845504)

【问题描述】

订货商城小程序登录时提示no route matched with those values,如何处理?

![](https://vip.kingdee.com/download/01098fda35aa5ebd43d9850a79c75a6379f9.png)

【解释说明】

这是由于历史发布小程序的星辰账号,或者获取H5商城链接的星辰账号操作了离职或禁用,导致没有权限调用商城接口报错“no route matched with those values”。

【解决方案】

①小程序商城需要绑定一个星辰账号作为管理员,若该发生用户离职情况,请点击【变更用户】切换成有订货商城账套的账号,防止进入小程序异常。建议切换为服务管理员的权限。

打开【订货商城】-【微信小程序设置】

![](https://vip.kingdee.com/download/010929d730418a104876894563b17ac018c7.png)

如图

![](https://vip.kingdee.com/download/010943307dadb5404e14aeab942446c8a37f.png)

②若切换后还是出现异常报错,是由于小程序存在缓存,建议您进行小程序解绑重新发布。
打开微信公众平台网址[https://mp.weixin.qq.com/](https://mp.weixin.qq.com/),设置-第三方设置,对精斗云腾飞订货开发平台停止授权。再重新星辰-订货商城-小程序发布,重新扫码授权操作,待小程序微信审核发布成功即可正常。

![](https://vip.kingdee.com/download/01099f9a273568e5448c8323c6aed84457a7.png)

③若H5商城进入提示no route matched with those values,请用星辰的管理员账号,登录星辰,在【订货商城】-【商城预览】,获取商城链接。若有配置到服务号菜单,记得更新

![](https://vip.kingdee.com/download/01091d40b9c5b0a1465da4c32a95cdaf4c59.png)
