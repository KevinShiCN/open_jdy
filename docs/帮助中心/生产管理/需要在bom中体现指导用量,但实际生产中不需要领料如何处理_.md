---
title: "需要在bom中体现指导用量,但实际生产中不需要领料如何处理?"
product: "金蝶云·星辰"
category: "生产管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/703411684576381440"
author: "happy忆霖"
views: 125
created_at: "2025-04-23 17:18:34"
updated_at: "2025-06-14 01:30:21"
crawl_date: "2026-03-18"
---

# 需要在bom中体现指导用量,但实际生产中不需要领料如何处理?

> 产品：金蝶云·星辰 | 分类：生产管理 | 类型：常见问题
> 作者：happy忆霖 | 阅读：125 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/703411684576381440)

【问题描述】

需要在bom中体现指导用量,但实际生产中不需要领料如何处理?

【业务场景】

针对化工行业,配方(bom)里希望能体现“水”的用量,用于指导生产,但是“水”在实际生产中是直接取用的,不需要领料,只是期末需要将“水”进行归集当做费用进行分摊。

【解决方案】

在bom中将不需要领料的物料领料方式设置为“不领料”

点击【生产管理 】>【BOM维护】,进入到bom列表中,选择需要修改的bom信息

![](https://vip.kingdee.com/download/0109c5b4bd92b75043a6b69f9a25aa241054.png)
进入到bom单修改界面,若bom单已审核,需要点击<反审核>进行修改

![](https://vip.kingdee.com/download/0109e55bc516d4ed427487c87bf4d02484d1.png)
点击“子件信息”栏下的物料信息,选择“物料编码”,填写“单位”、“产品产量”、“材料用量”等数据做参考

![](https://vip.kingdee.com/download/01096bbe69f54c7145f4847eae7f9c79ea56.png)

点击“子件信息”栏下的“领料方式”,选择不领料即可

![](https://vip.kingdee.com/download/01098f6087e4e8e449019aba834f65cfc322.png)
后期在做生产任务单时,“材料信息”栏下带出的物料信息“发料方式”默认是“不领料”状态

![](https://vip.kingdee.com/download/0109ee3e4fcd83f144209ab63a1417642f66.png)

生产任务单下推生产领料单时,默认不带出“发料方式”为“不领料”的物料

![](https://vip.kingdee.com/download/0109ea6d6681a311415480f4c17d3d324772.png)【温馨提示】

在生产任务单中,可以修改材料信息中的“发料方式”,修改生产任务单中的“发料方式”后,不影响bom单中的“领料方式”,生产任务单下推生产领料单时,以生产任务单中的“发料方式”为准。
