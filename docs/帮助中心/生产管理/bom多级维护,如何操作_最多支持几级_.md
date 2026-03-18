---
title: "bom多级维护,如何操作?最多支持几级?"
product: "金蝶云·星辰"
category: "生产管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/632382899773416448"
author: "云社区用户u1tk1853"
views: 1694
created_at: "2024-10-08 09:43:03"
updated_at: "2026-03-06 01:53:29"
crawl_date: "2026-03-18"
---

# bom多级维护,如何操作?最多支持几级?

> 产品：金蝶云·星辰 | 分类：生产管理 | 类型：常见问题
> 作者：云社区用户u1tk1853 | 阅读：1694 | 有用：1
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/632382899773416448)

【问题描述】

bom多级维护,如何操作?最多支持几级?

【解释说明】

适用于按照产成品的上下多个层级去维护BOM结构的企业。特别是需要一次性建完某个产成品的全部BOM层级的时候。

同时,当某个产成品的半成品数量较多时,该功能也可以帮助用户快速找到哪些半成品还没有建立BOM单,并可直接在该功能上完成BOM单的建立,为BOM的完整性提供了便捷维护的方式。

多级bom维护后,其下层级的半成品同时也会有bom单,产生多个bom编号;

**bom多级维护级数目前没有限制,但是物料需求建议计算限制了最多10级。**

【操作指引】

方法一:菜单栏点击【生产管理/委外管理】>【BOM维护】,BOM列表勾选需要维护的BOM点击多级维护。

![](https://vip.kingdee.com/download/0109e8d7344990b74ffbb9183fce4470401e.png)
如果材料商品特性没有开启可自制/可生产维护的系统会有提示
![](https://vip.kingdee.com/download/01096a8708fe5fbb4999a7a3cd4d49256fc7.png)
按提示开启商品特性里面的可自制/可生产即可。

![](https://vip.kingdee.com/download/0109021ff53b64284cfeb691f35e5c847618.png)

如下图所示,维护好商品:雪球材料的下级物料即可。

![](https://vip.kingdee.com/download/0109975485d7689b4b249d75a838f43269bf.png)
方法二:BOM多级的实质是:A商品由B和C组成,B又由b1和b2组成,B相当于是半成品。

![](https://vip.kingdee.com/download/01099b0b79d9fd7a4e9faef3f1adefbd5dbc.png)
可以直接新增B的BOM。![](https://vip.kingdee.com/download/010922756d8f996e4a5f9728ff40e9d4f85a.png)

这样A商品的BOM会自动和B套在一起形成多级BOM。

![](https://vip.kingdee.com/download/0109a63653b68c9b42ef8b5bfeb4caf26a2f.png)
【相关知识】

[bom单的应用场景是什么?如何创建新增?](https://vip.kingdee.com/link/s/ZgLcL)
