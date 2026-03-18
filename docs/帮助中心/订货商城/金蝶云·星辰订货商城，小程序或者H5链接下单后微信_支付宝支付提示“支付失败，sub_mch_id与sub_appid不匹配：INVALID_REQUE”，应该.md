---
title: "金蝶云·星辰订货商城，小程序或者H5链接下单后微信/支付宝支付提示“支付失败，sub_mch_id与sub_appid不匹配：INVALID_REQUE”，应该怎么检查配置？"
product: "金蝶云·星辰"
category: "订货商城"
type: "快速入门, 常见问题"
source: "https://vip.kingdee.com/knowledge/121219367622076928"
author: "Lizzy"
views: 3142
created_at: "2020-11-30 12:02:29"
updated_at: "2024-12-23 15:23:11"
crawl_date: "2026-03-18"
---

# 金蝶云·星辰订货商城，小程序或者H5链接下单后微信/支付宝支付提示“支付失败，sub_mch_id与sub_appid不匹配：INVALID_REQUE”，应该怎么检查配置？

> 产品：金蝶云·星辰 | 分类：订货商城 | 类型：快速入门, 常见问题
> 作者：Lizzy | 阅读：3142 | 有用：15
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/121219367622076928)

问题描述：

![](https://vip.kingdee.com/download/010043a50499c08942dc8f4e7f52ac9df36a.png)

解决方案：

1、若您使用的是通联支付，请进行以下检查：

检查在通联后台配置APPID和域名配置是否正确，入口：产品中心-微信支付参数配置，将公众号或者小程序的APPID填入支付APPID配置。

![010095e2c5dcc1cc4513819bc04249c16674.png](https://vip.kingdee.com/download/010095e2c5dcc1cc4513819bc04249c16674.png)

![](https://vip.kingdee.com/download/01000b94783366724ad79414900b04730fe8.png)

其他可能导致该报错的原因请检查：

（1）第三方支付开通主体和小程序的认证主体是否一致

（2）认证主体的营业执照不满1年

（3）商户号在订货商城支付配置填写错误

（4）在通联支付配置appid为公众号appid非小程序appid

2、若您使用的金蝶支付：请联系为您开通商户号的工作人员，检查以下：

（1）客户提交的公司名是否有误，导致APPID虽然在支付后台报备成功，却没有绑定成功

（2）第三方支付开通主体和小程序的认证主体是否一致

（3）认证主体的营业执照不满1年

（4）商户号在订货商城支付配置填写错误

详细支付配置见以下链接：

- 订货商城微信公众号支付配置：[https://vip.kingdee.com/questions/61822762368971008/answers/61822763258074880](https://vip.kingdee.com/questions/61822762368971008/answers/61822763258074880)
- 订货商城小程序支付配置： [https://vip.kingdee.com/questions/61823731034822400/answers/61823731873410560](https://vip.kingdee.com/questions/61823731034822400/answers/61823731873410560)
