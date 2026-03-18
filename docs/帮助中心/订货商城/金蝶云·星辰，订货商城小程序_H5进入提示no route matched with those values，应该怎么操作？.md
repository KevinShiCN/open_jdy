---
title: "金蝶云·星辰，订货商城小程序/H5进入提示no route matched with those values，应该怎么操作？"
product: "金蝶云·星辰"
category: "订货商城"
type: "常见问题, 进阶技巧"
source: "https://vip.kingdee.com/knowledge/294038245225273600"
author: "Lizzy"
views: 3775
created_at: "2022-03-22 09:23:01"
updated_at: "2024-12-23 15:52:20"
crawl_date: "2026-03-18"
---

# 金蝶云·星辰，订货商城小程序/H5进入提示no route matched with those values，应该怎么操作？

> 产品：金蝶云·星辰 | 分类：订货商城 | 类型：常见问题, 进阶技巧
> 作者：Lizzy | 阅读：3775 | 有用：3
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/294038245225273600)

问题描述：

解决方案：

产生该报错的原因：

您历史发布小程序的星辰账号，或者获取H5商城链接的星辰账号操作了离职或禁用，导致没有权限调用商城接口报错“no route matched with those values”。

1）首先判断您是小程序还是H5商城出现异常

![](https://vip.kingdee.com/download/0109ada057f0ef69412681e50136bb73ab8d.png)

2）小程序进入提示no route matched with those values

小程序商城需要绑定一个星辰账号作为权限管理，若该发生用户离职情况，请点击【变更用户】切换成有订货商城账套的，防止进入小程序异常。建议切换为管理员的权限。

![](https://vip.kingdee.com/download/0100a6f80a95dc004965a54e897683757c30.png)

若切换后还是出现异常报错，是由于小程序存在缓存，建议您进行小程序解绑重新发布。

打开微信公众平台网址[https://mp.weixin.qq.com/](https://vip.kingdee.com/tolink?target=https%3A%2F%2Fmp.weixin.qq.com%2F)，设置-第三方设置，对精斗云腾飞订货开发平台停止授权。再重新星辰-订货商城-小程序发布，重新扫码授权操作，待小程序微信审核发布成功即可正常。

![](https://vip.kingdee.com/download/01094afdabb931e94b8fa4424e9ab61703b3.png)

3）H5商城进入提示no route matched with those values
登录星辰的管理员账号，登录星辰，在订货商城-商城预览，获取商城链接。若有配置到公众号菜单，记得更新哦~
