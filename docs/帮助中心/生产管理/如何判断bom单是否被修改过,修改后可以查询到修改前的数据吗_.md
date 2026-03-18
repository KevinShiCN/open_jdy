---
title: "如何判断bom单是否被修改过,修改后可以查询到修改前的数据吗?"
product: "金蝶云·星辰"
category: "生产管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/690733744344515840"
author: "一见茹顾"
views: 277
created_at: "2025-03-19 19:55:57"
updated_at: "2026-02-11 02:39:44"
crawl_date: "2026-03-18"
---

# 如何判断bom单是否被修改过,修改后可以查询到修改前的数据吗?

> 产品：金蝶云·星辰 | 分类：生产管理 | 类型：常见问题
> 作者：一见茹顾 | 阅读：277 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/690733744344515840)

【问题描述】

  如何判断bom单是否被修改过,修改后可以查询修改前的数据吗?

【解释说明】

  可以从bom单列表、bom单和操作日志进行判断是否被修改过,修改后不可以直接查询修改前的数据。

【操作流程】

  判断bom单是否被修改,可以对比bom单列表和bom单的“最后修改时间"和"制单时间"字段,如果修改时间晚于制单时间,表明bom单有操作过修改。![](https://vip.kingdee.com/download/01098f1cb276a3184b28bc637b958efbe21b.png)
  bom单界面,在右上角的列设置中放出“最后修改时间”和“制单时间”,进行对比查看是否有修改痕迹。![](https://vip.kingdee.com/download/0109fdb8dafd73df4cf59f3efdf47dbba943.png)
  可以在【系统设置】>【操作日志】根据bom单编号进行查询,根据“操作时间”和“操作名称”进行判断bom单是否有修改过。
![](https://vip.kingdee.com/download/01097c0b08e4715c4379aae7f8493cd74390.png)
