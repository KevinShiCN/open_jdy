---
title: "订货商城提示: 微信登录失败redirect_uri域名与后台配置不一致,错误码:10003,如何处理?"
product: "金蝶云·星辰"
category: "订货商城"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/488151783651563008"
author: "_Leo"
views: 16683
created_at: "2023-09-08 10:50:30"
updated_at: "2025-12-12 01:20:17"
crawl_date: "2026-03-18"
---

# 订货商城提示: 微信登录失败redirect_uri域名与后台配置不一致,错误码:10003,如何处理?

> 产品：金蝶云·星辰 | 分类：订货商城 | 类型：常见问题
> 作者：_Leo | 阅读：16683 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/488151783651563008)

【问题描述】

订货商城提示: 微信登录失败redirect_uri域名与后台配置不一致,错误码:10003,如何处理?

![](https://vip.kingdee.com/download/01095d9160a360ec4cc9879e83a45d706996.png)
【解释说明】

出现这个提示,一般是由于配置操作流程中的第2步-第4步没有操作好,建议参考微信服务号上传支付配置操作流程的,重新配置。

【操作步骤】

1.在微信服务号后台,地址:[点击进入](https://mp.weixin.qq.com/),【菜单】-【开发者中心】,复制记录下服务号APPID和APPSercet,如果APPSercet之前没有记录下来需要点击重置;

![](https://vip.kingdee.com/download/0109778e24d3cfab4eb89396af504f217455.png)

 2.在微信服务号后台,地址:[点击进入](https://mp.weixin.qq.com/),【菜单】-【公众号设置】-【功能设置】-【网页授权域名】-【点击设置】,下载授权校验文件;

![](https://vip.kingdee.com/download/0109a908bbdc91d748c6954b3f6d6a7e2223.png)

3. 下载好的文件,上传到星辰账套,在【订货商城】-【商城支付配置】-【支付参数设置】界面,将第一步复制的APPID和APPSercet填入,同时将第二步下载的文件上传,点击保存。

![](https://vip.kingdee.com/download/0109908b25cdb8e74ea1a1704221ce7430e2.png)![](https://vip.kingdee.com/download/0109f0ab46b26ba74e2fa5d5d0a4417fa6ec.png)

4.回到微信服务号后台,地址:[点击进入](https://mp.weixin.qq.com/),【菜单】-【公众号设置】-【功能设置】-【网页授权域名】-点击【设置】,配置域名“order.jdy.com” 点击保存。

![](https://vip.kingdee.com/download/0109f563a6f60427400d819b8a81f5e8e700.png)

5.在通联后台配置APPID和域名,入口:【产品中心】-【微信支付参数配置】。

1)将第一步的公众号APPID填入支付APPID配置

![](https://vip.kingdee.com/download/0109da648fcd53494796a52218014601fbd4.png)
2)在支付授权目录配置“sc.jdy.com/”,复制获得通联商户号、通联渠道APPID、渠道密钥,位置参截图。

![](https://vip.kingdee.com/download/01093eb2c927a2da45a2a53dfcbb258430f8.png)

路径:【账户信息】-【 获取商户号】

![](https://vip.kingdee.com/download/0109543bdbc01e5e4b24ab59ab2b3b11dab4.png)

6.然后到【设置】- 【对接配置】 -【系统对接参数】,点击【重置】,配置及获取RSA密钥

![01006314f797ec6341809a84e7c2c0f31fe5.png](https://vip.kingdee.com/download/0109d73195ada3b94826885845664e696f7e.png)![](https://vip.kingdee.com/download/0109c460e1352cbd422d948cdeba8c0a433d.png)
![](https://vip.kingdee.com/download/0109586204c6798a4b64a76233cbe68d2f9e.png)
![](https://vip.kingdee.com/download/010988dd3d36cd404a4abe54aa8c07d37695.png)
复制出来RSA私钥(非JAVA适用)及RSA公钥,请注意保存在本地文档,然后点击返回填写RSA公钥输入交易密码保存。

![](https://vip.kingdee.com/download/0109856db4291bc94625a9a76f347e903b9c.png)

7.商城商户号配置,到星辰后台,【订货商城】-【商城支付配置】-【支付商户号设置】,将第六步获取的通联商户号、通联渠道APPID、RSA私钥(非JAVA适用)填入渠道秘钥,后面的结算方式和结算账户是在星辰账套的【基础资料】-【账户管理】中录入的。

![](https://vip.kingdee.com/download/01094e3aeb394e4941b79e8f6206056bab3d.png)

【温馨提示】

更多关于订货商城微信服务号支付配置操作详细流程,推荐参考:[微信公众号商城支付配置流程](https://vip.kingdee.com/questions/61822762368971008/answers/61822763258074880?productLineId=35&isKnowledge=2)
