---
title: "公众号H5微信支付配置，如何获取公众号APPID，密钥和微信支付回调校验文件？"
product: "金蝶云·星辰"
category: "订货商城"
type: "常见问题, 快速入门"
source: "https://vip.kingdee.com/knowledge/684714662167848192"
author: "Lizzy"
views: 923
created_at: "2025-03-04 10:51:37"
updated_at: "2025-03-05 10:54:50"
crawl_date: "2026-03-18"
---

# 公众号H5微信支付配置，如何获取公众号APPID，密钥和微信支付回调校验文件？

> 产品：金蝶云·星辰 | 分类：订货商城 | 类型：常见问题, 快速入门
> 作者：Lizzy | 阅读：923 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/684714662167848192)

1 问题描述

公众号H5微信支付配置，如何获取公众号APPID，密钥和微信支付回调校验文件？

## 2 适用版本

星辰3.0以上标准版/专业版

## 3 解决方案

（1）在微信公众号后台，地址：[https://mp.weixin.qq.com](https://vip.kingdee.com/tolink?target=https%3A%2F%2Fmp.weixin.qq.com)，菜单-设置与开发-开发接口管理-基本配置，复制记录下公众号APPID和APPSercet，如果APPSercet之前没有记录下来需要点击重置；

注意：密钥重置将影响历史配置失效，重置请谨慎，并强烈建议储存本地。

![](https://vip.kingdee.com/download/0109637b80fb5ba545e3a92d6df5bfd6d868.png)

（2）在微信公众号后台，地址：[https://mp.weixin.qq.com](https://vip.kingdee.com/tolink?target=https%3A%2F%2Fmp.weixin.qq.com)，菜单-设置与开发-账号设置-功能设置-网页授权域名-点击设置，下载授权校验文件；

![](https://vip.kingdee.com/download/01098f1ec54aaf01496baa901e9bd472bf6d.png)

 （3）下载好的文件，上传到金蝶云星辰后台，路径-基础信息-支付通道-支付通道详情，将第一步复制的APPID和APPSercet填入，微信支付回调校验文件上传第二步下载的文件，点击保存支付通道配置。

![](https://vip.kingdee.com/download/01096eca12b372d54a48a3e9c91dfb759c5a.png)

（4）添加完成支付通道配置，在公众号网页授权域名添加“order.jdy.com”。

![](https://vip.kingdee.com/download/0109b5c470615d804088a194b9d13deea27b.png)

（5）回到微信商户号中

登录微信商户平台，在【产品中心-开发配置-支付配置】中点击JSAPI支付授权目录的【添加】按钮，添加域名：

订货商城H5添加：选择https://，域名“sc.jdy.com/”；

销售出库单-单据分享添加：选择https://，域名“sale.jdy.com/”。

![](https://vip.kingdee.com/download/010948fadea5e9414a79860a4d2b9e9959aa.png)
