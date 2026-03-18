---
title: "订货商城在线收款金蝶支付B2b商户号配置"
product: "金蝶云·星辰"
category: "订货商城"
type: "功能介绍, 新特性, 进阶技巧"
source: "https://vip.kingdee.com/knowledge/721419061955167488"
author: "Lizzy"
views: 810
created_at: "2025-06-13 17:41:48"
updated_at: "2025-12-12 10:18:41"
crawl_date: "2026-03-18"
---

# 订货商城在线收款金蝶支付B2b商户号配置

> 产品：金蝶云·星辰 | 分类：订货商城 | 类型：功能介绍, 新特性, 进阶技巧
> 作者：Lizzy | 阅读：810 | 有用：3
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/721419061955167488)

## **1 简介  **

### **1.1 功能介绍**

当您的订货商城小程序收到开通微信支付（通联支付/微信直连）无法使用，支付渠道为微信直连，微信支付报错提示“商户号该产品权限未开通，请前往商户平台>产品中心检查后重试”。 且收到小程序通知“开通小程序门店助手-B2B商户号”要求申请使用B2b商户号进行在线收款，可联系金蝶支付开通B2b类型商户号后配置。

![](https://vip.kingdee.com/download/0109805a34099ec44793afd29deac4d061d2.png)

### **1.2 适用版本**

星辰3.0以上专业版/旗舰版

### **1.3 系统路径**

基础资料-支付渠道

## **2 操作指南**

**（一）B2b商户号介绍**

B2B商户号仅支持金蝶支付对接，小程序B2b门店助手产品功能介绍（商家版本）点击连接查看。

[https://www.yuque.com/chanpinyikesaishenghuo/kingdeepay/bwofn3x3cqyvqrad?singleDoc#bzipz](https://vip.kingdee.com/tolink?target=https%3A%2F%2Fwww.yuque.com%2Fchanpinyikesaishenghuo%2Fkingdeepay%2Fbwofn3x3cqyvqrad%3FsingleDoc%23bzipz)

**（二）申请商户号**

1、准备进件资料：营业执照，法人身份证，开户许可证/银行卡（一类卡），门头照，2张环境照；

2、请微信搜索并关注公众号“金蝶聚合pay”或扫码链接。

 ![](https://vip.kingdee.com/download/0109ea0c4ec344f2408dbc983d18ce15296d.png)![](https://vip.kingdee.com/download/0109e273363b71a546f9808bd9a2924f133a.png)

3、点击公众号内-产品服务-商户进件，提交资料进行进件；

4、 关于费率及支付过程中遇到问题，可咨询金蝶支付服务电话：15899790447（林伟强）。

温馨提醒：

（1）无需配置小程序可选择菜单中的“关闭”，默认是启用状态。

（2）如对公结算无开户许可证可提供因印鉴卡/银行印章文件/结算证明函。

（3）客服电话填写公司座机或手机，提供微信随机核实。实施单位不清楚请填写本人联系方式。

5、商家侧准入与开通B2b门店助手，核心包括以下步骤：

（1）小程序申请B2b类目

登陆小程序管理后台（https://mp.weixin.qq.com/），点击左下方头像，找到「账号设置-基本设置-服务类目」，添加【商家自营-B2b(商品批发/门店管理)】类目。具体类目请参考查看链接：小程序商家适用类目

![上传图片](https://vip.kingdee.com/download/010086bd2eda84b24b69b3ce3351811f11a2.png)

![上传图片](https://vip.kingdee.com/download/010081b0d502ada54d53a2981882ea26546c.png)

（2）小程序开通门店助手（大B商家）

![上传图片](https://vip.kingdee.com/download/01007487a2266dae48b9b5d4e70f4fdced5a.png)

![上传图片](https://vip.kingdee.com/download/0100530b1ac4c52841e7b2a75e2e9dddbc02.png)![上传图片](https://vip.kingdee.com/download/0100617b05bd4f254da49baf501c81a28a12.png)

![上传图片](https://vip.kingdee.com/download/01003f85d32cf697468db5772c1c7288243e.png)![上传图片](https://vip.kingdee.com/download/010052c20ea492644dea972ed1d2270af7e1.png)

（3）申请添加插件

登录小程序后台（[mp.weixin.qq.com](https://vip.kingdee.com/tolink?target=http%3A%2F%2Fmp.weixin.qq.com)），点击左下方头像，“账号设置-第三方设置-插件管理-添加插件”，搜索“小程序门店助手”并申请添加。

![上传图片](https://vip.kingdee.com/download/0100b4abc314096f450484019eb72f24a1ea.png)

（4）订单管理路径确认填写

登录小程序后台（[mp.weixin.qq.com](https://vip.kingdee.com/tolink?target=http%3A%2F%2Fmp.weixin.qq.com)），点击左侧，“支付与交易-订单管理-订单信息录入”，小程序商品订单详情path填写：order/list/index?orderstatus=1&billno=${商品订单号}

![上传图片](https://vip.kingdee.com/download/0100b7e5f2a7ff0c4e9580317739ec1c96ba.png)

**（三）系统配置商户号**

开始配置前请检查准备工作是否完成：

①　小程序注册且微信认证通过，并获取小程序appid

②　商户号完成申请且支付appid已经绑定

③　获取商户号信息：金蝶支付商户号、商户私钥（PKCS8）、加密秘钥（BASE64格式）

准备工作完成，到星辰-基础资料-支付通道，点击右上角“新增”按钮。

①　基本信息：自定义商户名称

②　商户参数：支付渠道选择“金蝶支付”，填写商户号、商户私钥(PKCS8)、加密秘钥（BASE64格式）

③　结算账户：选项对应基础资料-账户管理，用于业务单据生成。

④　适用平台：仅勾选“自建小程序”，填写小程序APPID，开启“B2b”支付

①　支付方式：仅勾选微信支付，取消支付宝支付。

注意:B2b支付的商户号不支持支付宝支付，扫码收款、微信公众号在线收款的场景同样不支持。

![](https://vip.kingdee.com/download/0109214d62017dc8467b942455c1d12eae96.png)

**（三）重新小程序发布**

开启B2b商户号，小程序需要打包含B2b微信支付插件重新发布，支付配置保存系统会提交小程序发布一次。

点击“订货商城>微信小程序设置”可查看是否已经提交小程序发布，若已经发布上架成功，会显示最新的发布时间和“最新版本”的标签。

小程序发布成功后，您可尝试在商城中微信支付。

![上传图片](https://vip.kingdee.com/download/01001009850ab6554e51b92875f1009b9d46.png)

若小程序发布失败，请及时查看原因，处理后可解绑后重新发布，具体可参考下方相关知识：

金蝶云·星辰订货商城，小程序发布微信审核失败常见原因？:https://vip.kingdee.com/link/s/ZJMa7

订货商城小程序解绑如何操作?:https://vip.kingdee.com/link/s/ZJMyo
