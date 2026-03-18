---
title: "金蝶云·星辰 订货商城H5商城在线支付时提示：“此公众号并没有这些scope的权限，错误码：1005”，如何解决？"
product: "金蝶云·星辰"
category: "订货商城"
type: "常见问题, 快速入门, 精华汇总"
source: "https://vip.kingdee.com/knowledge/634407339922845696"
author: "商贸韩佩奇"
views: 524
created_at: "2024-10-16 15:08:17"
updated_at: "2025-12-17 09:26:39"
crawl_date: "2026-03-18"
---

# 金蝶云·星辰 订货商城H5商城在线支付时提示：“此公众号并没有这些scope的权限，错误码：1005”，如何解决？

> 产品：金蝶云·星辰 | 分类：订货商城 | 类型：常见问题, 快速入门, 精华汇总
> 作者：商贸韩佩奇 | 阅读：524 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/634407339922845696)

## **1 问题描述**

金蝶云·星辰 订货商城H5商城在线支付时提示：“此公众号并没有这些scope的权限，错误码：1005”，如何解决？

![](https://vip.kingdee.com/download/01093eb2c25a42c442d99a8432d2cd7e9039.png)

## 2 适用版本

金蝶云·星辰v3.1专业版/旗舰版

## **3 原因解析**

出现错误码：1005是因为在线支付配置缺少了公众号配置.。我们可以通过配置微信公众号支付参数来解决这类问题。

![上传图片](https://vip.kingdee.com/download/01002ed8d8b7f6b7476b8fc3c00fc897b6a2.png)

## **4 解决方案**

- 在微信公众号后台，地址：[https://mp.weixin.qq.com](https://vip.kingdee.com/tolink?target=https%3A%2F%2Fmp.weixin.qq.com)，菜单-微信开发平台，复制记录下公众号APPID和APPSercet，如果APPSercet之前没有记录下来需要点击重置

![上传图片](https://vip.kingdee.com/download/0100c27ef68c07654fc3b1729dd917761c49.png)

    2.在微信公众号后台，地址：[https://mp.weixin.qq.com](https://vip.kingdee.com/tolink?target=https%3A%2F%2Fmp.weixin.qq.com)，菜单-公众号设置-功能设置-网页授权域名-点击设置，下载授权校验文件

![](https://vip.kingdee.com/download/0100df74ab30c3624f9c86261b93c2b7db72.png)

    3.下载好的文件，上传到星辰后台，入口菜单-【基础资料】-【支付渠道】，将第一步复制的APPID和APPSercet填入，同时将第二步下载的文件上传，点击保存

 4.回到微信公众号后台，地址：[https://mp.weixin.qq.com](https://vip.kingdee.com/tolink?target=https%3A%2F%2Fmp.weixin.qq.com)，菜单-公众号设置-功能设置-网页授权域名-点击设置，配置域名“order.jdy.com” 点击保存

![](https://vip.kingdee.com/download/01008e7fe44257de433db0436a14f6a0c2b7.png)
