---
title: "金蝶云·星辰 订货商城小程序页面path设置"
product: "金蝶云·星辰"
category: "订货商城"
type: "快速入门, 常见问题"
source: "https://vip.kingdee.com/knowledge/391152352621267456"
author: "桥七"
views: 1939
created_at: "2022-12-15 08:59:48"
updated_at: "2025-11-25 09:58:53"
crawl_date: "2026-03-18"
---

# 金蝶云·星辰 订货商城小程序页面path设置

> 产品：金蝶云·星辰 | 分类：订货商城 | 类型：快速入门, 常见问题
> 作者：桥七 | 阅读：1939 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/391152352621267456)

### **问题描述：**

**订货商城小程序收到“小程序订单中心页path设置提醒“**

![](https://vip.kingdee.com/download/0109edf296f001cf4f1f8233c29b516af13f.png)

### **解决方案**

（1）解绑授权，重新授权（可跳过）

历史已发布的小程序需要重新绑定授权，订货商城发布小程序程序才可以自动填写path路径。

微信公众平台[https://mp.weixin.qq.com](https://vip.kingdee.com/tolink?target=https%3A%2F%2Fmp.weixin.qq.com%2F)，小程序扫描登录，【账号设置】>【第三方设置】解除授权。

![](https://vip.kingdee.com/download/0109a8531fee507c4eab89ab6096dc57e51c.png)

回到星辰【订货商城】>【微信小程序设置】重新扫码授权，发布程序将自动填写path路径。

![](https://vip.kingdee.com/download/01098691b1cf9d544d9ba1707fcb0ed53c2c.png)

（2）订单信息录入path

点击【支付与交易】>【订单管理】>【订单信息录入】，进行过前面步骤由小程序发布程序自动填写。

微信微信提供了手动填写的入口可跳过前面步骤直接填写，order/list/index?orderstatus=1&billno=${商品订单号}

![](https://vip.kingdee.com/download/01097ebc179ab210452aa61a6b07c9baf2aa.png)

### 效果：

微信的小程序购物订单和服务的发货通知的前往小程序，将按单据查询订单列表并展示。

![](https://vip.kingdee.com/download/0109ce424fcd038145f68a7682b1eb7d9630.png)  ![](https://vip.kingdee.com/download/010951bbee3ad3994b38aea475b6c20834ef.png)
