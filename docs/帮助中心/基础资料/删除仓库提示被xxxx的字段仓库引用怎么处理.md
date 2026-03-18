---
title: "删除仓库提示被xxxx的字段仓库引用怎么处理"
product: "金蝶云·星辰"
category: "基础资料"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/565702843513181696"
author: "毛毛酱"
views: 107
created_at: "2024-03-05 13:39:03"
updated_at: "2026-01-07 01:19:25"
crawl_date: "2026-03-18"
---

# 删除仓库提示被xxxx的字段仓库引用怎么处理

> 产品：金蝶云·星辰 | 分类：基础资料 | 类型：常见问题
> 作者：毛毛酱 | 阅读：107 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/565702843513181696)

【解释说明】

仓库已经被使用做过单据,是无法进行删除的,需要删除所做单据后才能删除仓库。若不想删除对应单据,可禁用对应仓库

【操作步骤】

方案一:删除所做单据后删除仓库

1、仓库已经被使用,删除仓库提示“采购订单”的字段“仓库”引用了此数据,不能被删除”



![](https://vip.kingdee.com/download/0109339f11b9324a46db85d357c1c0866b0b.png)2、需要去【采购管理】-【采购订单查询】列表界面,通过仓库列头的筛选条件,找到对应仓库的单据,将对应单据反审核全部删除



    ![](https://vip.kingdee.com/download/0109c28260acbb3e40d3a7749515c8ab3789.png)![](https://vip.kingdee.com/download/0109e1f08f76c8714db4b05aafaa1739420c.png)

3、再去【基础资料】-【仓库】界面删除对应仓库即可



![](https://vip.kingdee.com/download/0109ef6af03fe7a94076a0999deae04b1ada.png)方案二:不删除单据,直接禁用仓库

在【基础资料】-【仓库】界面勾选对应仓库,点击【禁用】即可![](https://vip.kingdee.com/download/010982e2895268574f0c941b39ec7f5e0c7d.png)
【温馨提示】


[删除仓库提示仓库已被即时库存实体中的仓库编码所使用?](https://vip.kingdee.com/knowledge/391352018251738880?productLineId=35&isKnowledge=2&lang=zh-CN)

[删除仓位的时候提示已被即时库存实体中的仓位编码使用,如何操作?](https://vip.kingdee.com/knowledge/459522986073175808?productLineId=35&isKnowledge=2&lang=zh-CN)

[删除未使用过的仓库,提示: 删除失败,该数据已被“仓位”中的“对应仓库:”所使用,不允许删除,该如何处理?](https://vip.kingdee.com/knowledge/534899754358978304?productLineId=35&isKnowledge=2&lang=zh-CN)
