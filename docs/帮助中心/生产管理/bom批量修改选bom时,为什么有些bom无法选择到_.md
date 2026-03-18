---
title: "bom批量修改选bom时,为什么有些bom无法选择到?"
product: "金蝶云·星辰"
category: "生产管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/701236139943621632"
author: "云社区用户55os622"
views: 94
created_at: "2025-04-09 17:40:24"
updated_at: "2026-02-11 02:41:16"
crawl_date: "2026-03-18"
---

# bom批量修改选bom时,为什么有些bom无法选择到?

> 产品：金蝶云·星辰 | 分类：生产管理 | 类型：常见问题
> 作者：云社区用户55os622 | 阅读：94 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/701236139943621632)

【问题描述】
Bom批量修改选bom时,为什么有些Bom无法选择到?

【解释说明】
BOM批量修改时,系统将根据<修改类型>来排除不满足条件的BOM单。

例如,当<修改类型>为<删除子件>时,系统将自动排除无对应物料的BOM单,仅可选择含有需要删除物料的BOM单。如下图所示:

① 需要批量删除所有BOM单种的材料A

![](https://vip.kingdee.com/download/0109588211c6e3c6497d8e21ff72a650c370.png)
② 点击下一个步,选择BOM时,系统将只会显示含有材料A的BOM单,其余无关的BOM将不会显示
![](https://vip.kingdee.com/download/0109cb67ad21ba9e49c9813d4b4b7fb9660d.png)
以上逻辑也适用于<修改类型>为:替换子件/修改子件信息/修改父件信息

反之,当<修改类型>为<新增子件>时,系统将仅显示不包含该物料的BOM

【更多知识】

[星辰生产云BOM批量修改功能](https://vip.kingdee.com/knowledge/357624576580324096?productLineId=35&isKnowledge=2&lang=zh-CN)
