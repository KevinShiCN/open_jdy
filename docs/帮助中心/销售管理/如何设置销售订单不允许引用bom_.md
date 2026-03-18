---
title: "如何设置销售订单不允许引用bom?"
product: "金蝶云·星辰"
category: "销售管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/738200048835645696"
author: "酸梅汤啦啦"
views: 59
created_at: "2025-07-28 16:47:52"
updated_at: "2025-07-30 01:03:27"
crawl_date: "2026-03-18"
---

# 如何设置销售订单不允许引用bom?

> 产品：金蝶云·星辰 | 分类：销售管理 | 类型：常见问题
> 作者：酸梅汤啦啦 | 阅读：59 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/738200048835645696)

【问题描述】

如何设置销售订单不允许引用bom?

【操作流程】

**1、 给子账号取消“BOM维护”查询权限。**“系统设置”-“用户管理”中选中子账号进行授权,在“功能授权”-“生产管理”中取消“BOM维护”的查询权限。

![](https://vip.kingdee.com/download/0109f2176fa7367344618e22ebab0114792c.png)
取消权限之后,销售订单操作“按BOM生成”会出现提示“无“BOM维护”的“查询”权限,请联系管理员。”

![](https://vip.kingdee.com/download/0109ed1f8fd078db4af58a6dd3fa03b557b9.png)
**2、通过“业务流程设置”中“销售订单”必选“销售报价单”,即销售订单只能通过销售报价单下推生成。**

![](https://vip.kingdee.com/download/01093c54ea6d158a495caf1ac7d32ad2731a.png)

设置“业务流程设置”之后,再次新增“销售订单”保存订单时会出现提示“销售订单仅由销售报价单源单生成,请选择源单,或修改业务流程设置”。

![](https://vip.kingdee.com/download/0109673b9713a6704b4d93ac1483bc280f7e.png)

【温馨提示】

更多有关销售订单知识,可参考以下链接:

[如何操作按bom生成销售订单?](https://vip.kingdee.com/knowledge/590712111911838720?productLineId=35&isKnowledge=2&lang=zh-CN)

[销售订单批量引入,如何引用系统里已有的单价信息?](https://vip.kingdee.com/knowledge/613538330927233024?productLineId=35&isKnowledge=2&lang=zh-CN)

[一个商品有多个bom,销售订单做物料需求建议的时候如何指定bom来核算?](https://vip.kingdee.com/knowledge/634919426055055872?channel_level=%E9%87%91%E8%9D%B6%E4%BA%91%E7%A4%BE%E5%8C%BA%7C%E6%90%9C%E7%B4%A2%7C%E7%BB%BC%E5%90%88&productLineId=35&isKnowledge=2&lang=zh-CN)
