---
title: "导入生产领料单提示xx行商品和生产任务单物料不一致怎么处理?"
product: "金蝶云·星辰"
category: "生产管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/650144316320628736"
author: "Schatz"
views: 175
created_at: "2024-11-28 16:59:17"
updated_at: "2025-02-18 16:02:36"
crawl_date: "2026-03-18"
---

# 导入生产领料单提示xx行商品和生产任务单物料不一致怎么处理?

> 产品：金蝶云·星辰 | 分类：生产管理 | 类型：常见问题
> 作者：Schatz | 阅读：175 | 有用：3
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/650144316320628736)

【问题描述】

导入生产领料单提示XX行商品和生产任务单物料不一致怎么处理?

![](https://vip.kingdee.com/download/01093e62969088144f90b4a6e70973323eef.png)

【操作步骤】

当引入生产领料单时,这一行信息中,填写的源单物料行号和物料信息与源生产任务单上相同行号上维护的物料信息不一致,引入就会报错:“第**行商品与生产任务单(编号:***)第**行物料不一致。”

如下图所示,该生产领料单需关联到编号为SCRW-20241105-00001的生产任务单,且需关联该任务单的第一行商品及其对应的第一行物料。

![](https://vip.kingdee.com/download/0109b2d25ee443a542b8a4592c4bfa6fe58d.png)

经查询,该生产任务单第一行商品对应的第一行物料为SP00022材料2,而非模板中填写的-036吹风机。

![](https://vip.kingdee.com/download/01092b10ea39475645ed8a30b70a0a3893b3.png)

因此,在模板中,需要将物料修改为SP00022材料2,以确保顺利引入。

![](https://vip.kingdee.com/download/01096ab61c9c86a54bffaedbaf1dcdad43f2.png)

如果模板中填写的物料在生产任务单是有的,只是行号不一致,也可以直接修改源单物料行号来导入。

【温馨提示】

在查询生产任务单时,请勿对物料信息进行排序,因为排序后无法准确确认行号与物料的匹配关系。

![](https://vip.kingdee.com/download/01099a452f94ccb5484fb215a129429fd73c.png)
