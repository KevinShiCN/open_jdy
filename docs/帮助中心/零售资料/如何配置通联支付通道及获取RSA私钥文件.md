---
title: "如何配置通联支付通道及获取RSA私钥文件"
product: "金蝶云·星辰"
category: "零售资料"
type: "常见问题, 快速入门, 精华汇总"
source: "https://vip.kingdee.com/knowledge/723917663742891520"
author: "商贸韩佩奇"
views: 437
created_at: "2025-06-20 15:10:21"
updated_at: "2025-06-20 15:18:57"
crawl_date: "2026-03-18"
---

# 如何配置通联支付通道及获取RSA私钥文件

> 产品：金蝶云·星辰 | 分类：零售资料 | 类型：常见问题, 快速入门, 精华汇总
> 作者：商贸韩佩奇 | 阅读：437 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/723917663742891520)

### 通联收银宝登录网址（建议收藏）

[https://vsp.allinpay.com/login](https://vip.kingdee.com/tolink?target=https%3A%2F%2Fvsp.allinpay.com%2Flogin)

### 一、首次登录

点击登录界面的“首次登录”

![](https://vip.kingdee.com/download/0109c0a9f07104494f2aaf13a9e6deaf29d1.png)

图一

在此处填入商户号

![](https://vip.kingdee.com/download/0109076022a676fe45f9b5d703f98f3db6a1.png)

图二

1) 获取验证码，并填写

2) 设置用户名

3) 设置用户名称

4) 设置密码

 ![](https://vip.kingdee.com/download/0109566d7d65e17243f797540162d8adbb37.png)

图三

首次登录配置完成，正常登录即可。

### 二、设置交易密码

注意：此“交易密码”非金蝶软件内配置支付所需的“支付秘钥”

点击页面右上角“设置”

![](https://vip.kingdee.com/download/010950d6f3a7d51d41838033431e1052465d.png)

图四





点击“安全设置”内“交易密码-修改”

 ![](https://vip.kingdee.com/download/0109ede7b5793f554834a7a7bf09878670ef.png)

图五



通过手机验证码设置即可

 ![](https://vip.kingdee.com/download/01095911f4c7431b486a92730cf4bc130de7.png)

图六

### 三、设置交易秘钥

同在“设置”界面内，点击“对接设置”→系统对接参数→重置

![](https://vip.kingdee.com/download/010972d258c2274b47b185b0972fecc5b732.png)

图七



获取“RSA交易秘钥”

点击重置按钮，进去密钥设置界面，如下图配置。获取到RSA私钥后，在电脑本地创建一个txt文本文档，将RSA私钥复制进去并保存，以备在金蝶云星辰配置支付通道使用。

![](https://vip.kingdee.com/download/010973dcd29c475249c5bfe81cd5030e944f.png)

图八



点击“确定”即可获得“APPID”

![](https://vip.kingdee.com/download/010992f1ff42b53c436291b486339220eb03.png)

图九





四、金蝶云星辰零售后台支付通道配置

登录金蝶云星辰后台，打开支付通道配置页面：

![](https://vip.kingdee.com/download/01098f9402cdde47474f9ae4aff1838866e5.png)

图十

点击新增按钮，支付通道选择“通联”，输入商户号，appid，点击上传文件，上传RSA交易秘钥生成的txt文件（见图八），选择门店或全部门店，然后点击保存按钮



![](https://vip.kingdee.com/download/01090bb90dcf005f4976983909397f761213.png)

图十一
