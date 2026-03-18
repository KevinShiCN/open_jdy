---
title: "生产领料单选择按bom生成,为什么有的物料带不出来?"
product: "金蝶云·星辰"
category: "生产管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/787127172065945600"
author: "Schatz"
views: 25
created_at: "2025-11-21 19:11:29"
updated_at: "2025-12-12 01:22:22"
crawl_date: "2026-03-18"
---

# 生产领料单选择按bom生成,为什么有的物料带不出来?

> 产品：金蝶云·星辰 | 分类：生产管理 | 类型：常见问题
> 作者：Schatz | 阅读：25 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/787127172065945600)

【问题描述】

生产领料单选择按BOM生成,为什么有的物料带不出来?

【解释说明】

生产领料单选择按BOM生成,有些物料没有带出的原因与参数“跳过该层级直接领用下级物料”相关。

如下图所示,“成品”的生产配置为需要 1 个“半成品”和 1 个“材料 1”。

![](https://vip.kingdee.com/download/0109d7b246ee4b614c4f84c82df21dbdf925.png)

但是当在生产领料单界面通过“按 BOM 生成”操作,选择成品对应的 BOM 单(编号为 BOM00001)进行生成时,带出的材料仅有“材料 1”和“材料 2”,并未出现“半成品”。

![](https://vip.kingdee.com/download/01092037987fcc3f466aa7182362ee23b0d7.png)

经检查发现,“半成品”的 BOM 单已开启“跳过该层级直接领用下级物料”参数。因此,在进行领料操作时,系统会跳过“半成品”这一层级,直接领用其下级材料,故而领料单中不显示“半成品”。

![](https://vip.kingdee.com/download/01091cc0dc61e80a43a9a5bc8f14af8c39a5.png)

【温馨提示】

更多BOM相关常见问题可查看:[BOM常见问题](https://vip.kingdee.com/knowledge/698186961869304064?productLineId=35&isKnowledge=2&lang=zh-CN)
