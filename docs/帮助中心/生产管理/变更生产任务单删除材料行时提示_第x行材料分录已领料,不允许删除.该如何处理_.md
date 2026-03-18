---
title: "变更生产任务单删除材料行时提示:第x行材料分录已领料,不允许删除.该如何处理?"
product: "金蝶云·星辰"
category: "生产管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/749434408716585728"
author: "一见茹顾"
views: 23
created_at: "2025-08-28 18:45:22"
updated_at: "2025-10-14 02:16:50"
crawl_date: "2026-03-18"
---

# 变更生产任务单删除材料行时提示:第x行材料分录已领料,不允许删除.该如何处理?

> 产品：金蝶云·星辰 | 分类：生产管理 | 类型：常见问题
> 作者：一见茹顾 | 阅读：23 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/749434408716585728)

【问题描述】

  变更生产任务单删除材料行时提示:第[x]行材料分录已领料,不允许删除.该如何处理?![](https://vip.kingdee.com/download/0109fcb2a9d946f44e47ae1efb72fe2d4154.png)

【业务场景】

  生产任务单领料后发现材料错了,需要更换材料。

【解释说明】

  对应材料已经下推领料了,即使做了退料也不支持删除,因为已经和领料单有关联关系。![](https://vip.kingdee.com/download/0109ed1abf4450684f3f860ed164ab3df855.png)

【解决方案】

  1、领料后未退料,需要反审核并删除下游单据 ![](https://vip.kingdee.com/download/010991873c94fda74f97ba2340ee04e511d2.png)

  2、若已退料,①可将对应材料的发料方式修改为不领料,并新增行增加正确的材料;![](https://vip.kingdee.com/download/01097fe1e30ba4054244937c2510288a8fad.png)

   ②或是需要先反审核删除退料单再反审核删除领料单,然后再反审核生产任务单修改材料。![](https://vip.kingdee.com/download/0109ee154dd6c7024c998bec4c7df7177a66.png)
