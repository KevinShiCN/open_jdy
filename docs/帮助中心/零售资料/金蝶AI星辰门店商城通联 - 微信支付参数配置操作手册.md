---
title: "金蝶AI星辰门店商城通联 - 微信支付参数配置操作手册"
product: "金蝶云·星辰"
category: "零售资料"
type: "功能介绍, 新特性, 快速入门"
source: "https://vip.kingdee.com/knowledge/359013099812429312"
author: "商贸韩佩奇"
views: 10981
created_at: "2022-09-17 16:29:53"
updated_at: "2026-02-11 14:50:35"
crawl_date: "2026-03-18"
---

# 金蝶AI星辰门店商城通联 - 微信支付参数配置操作手册

> 产品：金蝶云·星辰 | 分类：零售资料 | 类型：功能介绍, 新特性, 快速入门
> 作者：商贸韩佩奇 | 阅读：10981 | 有用：18
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/359013099812429312)

**一、说明**

本手册主要介绍开通通联商户号后，如何配置微信支付的流程。目标阅读人群：产品、运营、客服、客户。

开通通联支付请联系具体渠道商，如需要总部开通，联系金蝶妙想同事即可。

**星辰仅提供支付接口，具体配置操作流程建议优先联系支付服务商解决**

**二、操作流程**

**第 1 步：获取微信支付参数（支付Appid）**

***小程序支付***

登录[公众号后台](https://vip.kingdee.com/tolink?target=https%3A%2F%2Fmp.weixin.qq.com%2F)，前往《广告与服务 - 微信支付》，找到「待关联商户号」，这里的「Appid」即通联收银宝后台微信支付参数配置界面需要填写的支付Appid，复制后回到配置界面填写即可。

![](https://vip.kingdee.com/download/0100d55ec1fc2e2544b9874dd4e3b81b3419.png)

**第 2 步：登录通联收银宝后台**

![](https://vip.kingdee.com/download/01002aa18b9808b8455091c23147bee87439.png)

进入[通联收银宝后台](https://vip.kingdee.com/tolink?target=https%3A%2F%2Fvsp.allinpay.com%2Fservice%2Fprod)，点击【产品中心】，找到【微信支付参数设置】。

**第 4 步：配置微信支付参数**

![](https://vip.kingdee.com/download/01000836af8eba3d4bc2890b20ad533e91f6.png)

点击【微信支付参数设置】进入配置界面，填写「支付Appid」和「默认上送支付Appid」。

1. **默认上送支付Appid是什么意思，应该填写什么内容？**

一般与支付Appid是同一个，填写上述支付Appid即可。建议小程序与公众号一 一对应。

2. **填写支付Appid/默认上送支付Appid时需要填写交易密码，在哪里获取交易密码？**

登录通联收银宝后台，前往《设置 - 安全设置》，找到「交易密码」，记住后回到配置界面填写即可。

![](https://vip.kingdee.com/download/01002bc1db75c4f94244beaa6bd1ed73aab3.png)

![](https://vip.kingdee.com/download/010065863a33eac841d5915d8120fa91bc6e.png)

3. **支付授权目录是什么，应该填写什么内容？**

仅在需要开通公众号支付时才需要配置此信息，目前涉及到公众号支付的业务有扫码点单、微信会员卡在线积分兑券、微信会员卡在线充值。要配置此信息需要先在微信公众平台配置支付授权目录进行备案。**具体要求如下：**

• 所有使用公众号支付方式发起支付请求的链接地址，都必须在支付授权目录之下。

• 最多设置5个支付授权目录，且域名必须通过ICP备案。

• 头部要包含http或https，须细化到二级或三级目录，以左斜杠“/”结尾。

![](https://vip.kingdee.com/download/0100324f7944497d41a8b235e26d522daca0.png)

![](https://vip.kingdee.com/download/0100749c45d0e0ef41f58d57fd5438c79a6c.png)

**附录**

1. 关于配置支付授权目录，开发可参考：

• [https://baijiahao.baidu.com/s?id=1703984840716932850&wfr=spider&for=pc](https://vip.kingdee.com/tolink?target=https%3A%2F%2Fbaijiahao.baidu.com%2Fs%3Fid%3D1703984840716932850%26wfr%3Dspider%26for%3Dpc)

2. 关于配置支付授权目录，基于 vue 的 SPA 的具体规则如下：

• 比如：调用 JSSDK 的页面地址为[http://a.b.com/pay/weixin](https://vip.kingdee.com/tolink?target=http%3A%2F%2Fa.b.com%2Fpay%2Fweixin)，则授权目录配置为： http://a.b.com/pay/

• 比如：调用 JSSDK 的页面地址为[http://a.b.com/](https://vip.kingdee.com/tolink?target=http%3A%2F%2Fa.b.com%2F)

• 如果有 QueryString，自动忽略。比如：调用 JSSDK 的页面地址为 [http://a.b.com/pay/weixin/](https://vip.kingdee.com/tolink?target=http%3A%2F%2Fa.b.com%2Fpay%2Fweixin%2F)

根据实践，将支付授权目录配置为域名即可。

比如：调用 JSSDK 的页面地址为  [http://a.b.com/](https://vip.kingdee.com/tolink?target=http%3A%2F%2Fa.b.com%2F)

以上，正文完。
