---
title: "pos中如何设置开单时商品编码精确搜索?"
product: "金蝶云·星辰"
category: "门店管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/655575702283832064"
author: "lykk"
views: 71
created_at: "2024-12-12 15:45:41"
updated_at: "2025-02-21 20:29:39"
crawl_date: "2026-03-18"
---

# pos中如何设置开单时商品编码精确搜索?

> 产品：金蝶云·星辰 | 分类：门店管理 | 类型：常见问题
> 作者：lykk | 阅读：71 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/655575702283832064)

【问题描述】

POS中如何设置开单时商品编码精确搜索?

【解决方案】

路径:【设置】-【开单页面设置】

![](https://vip.kingdee.com/download/0109d55d31e4b680412f8ccac19d3bbfd05d.png)

1、启用参数“启用商品编码精确搜索”

![](https://vip.kingdee.com/download/0109d3a7da03475749a295cb836062fc4b05.png)

2、开启后,将使用左匹配规则进行搜索,未搜索到商品时,进行模糊搜索;

如商品SP00185、002433,当搜索00时,不会展示出SP00185

![](https://vip.kingdee.com/download/0109e378f0e7d12d484f96ddc4405029f473.png)

若是搜索00185,此时没有任何商品编码满足左匹配搜索,则会进行模糊搜索,展示SP00185

![](https://vip.kingdee.com/download/01099298bcea097742069ff3bd080c4c4726.png)
