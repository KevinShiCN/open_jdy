---
title: "金蝶云·星辰订货商城，微信小程序配置扫二维码授权提示PreAuthCode无效，如何处理？"
product: "金蝶云·星辰"
category: "订货商城"
type: "进阶技巧, 常见问题"
source: "https://vip.kingdee.com/knowledge/55967113747720192"
author: "Lizzy"
views: 998
created_at: "2020-06-03 10:33:20"
updated_at: "2024-12-23 18:49:00"
crawl_date: "2026-03-18"
---

# 金蝶云·星辰订货商城，微信小程序配置扫二维码授权提示PreAuthCode无效，如何处理？

> 产品：金蝶云·星辰 | 分类：订货商城 | 类型：进阶技巧, 常见问题
> 作者：Lizzy | 阅读：998 | 有用：2
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/55967113747720192)

问题描述：

微信小程序配置点击授权发布小程序，弹窗二维码。微信小程序的管理员手机微信扫一扫，扫描二维码授权提示PreAuthCode无效。

![](https://vip.kingdee.com/download/01006da8ee618f604528b4c3e988fd2c35fd.png)

解决方案：

微信预授权码（即pre_auth_code）是在微信公众号给第三方平台授权时，用来安全验证的，有效时间为20分钟。出现该问题请稍等20分钟后清除浏览器缓存，再扫码操作。

清除浏览器缓存，重新打开授权二维码，用微信小程序的超级管理员扫码授权。ctrl+H可以快捷清除浏览器缓存。

![](https://vip.kingdee.com/download/0100ef39b979e5cf49fc8592a899efcf602c.png)

清除浏览器缓存
