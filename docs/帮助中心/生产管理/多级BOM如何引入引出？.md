---
title: "多级BOM如何引入引出？"
product: "金蝶云·星辰"
category: "生产管理"
type: "常见问题, 快速入门, 精华汇总"
source: "https://vip.kingdee.com/knowledge/599549060239737088"
author: "移动生产白建凡"
views: 973
created_at: "2024-07-12 10:33:55"
updated_at: "2024-12-23 16:51:20"
crawl_date: "2026-03-18"
---

# 多级BOM如何引入引出？

> 产品：金蝶云·星辰 | 分类：生产管理 | 类型：常见问题, 快速入门, 精华汇总
> 作者：移动生产白建凡 | 阅读：973 | 有用：1
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/599549060239737088)

****

## 1 问题描述

- 多级BOM如何引出及打印？
- 多级BOM如何打印最明细的材料？
- 多级BOM如何引入？

## 2 解决方案

### （1）多层级BOM引出及打印

- 打开BOM正向查询

![](https://vip.kingdee.com/download/01097f43455c10b842abbc4a6d8ffec9a33e.png)

- 录入【商品】或【BOM单编号】，【展开方式】选择【多级展开】，点击【查询】，点击界面右上角【引出】按钮

![](https://vip.kingdee.com/download/0109d8c444aa6c9740a7ac0c9080db147c4c.png)

![](https://vip.kingdee.com/download/01098bb40471c2b0466b992717806c64f75f.png)

### （2）多层级BOM打印最明细级物料

- BOM正向查询页面，【展开方式】选择【综合展开】后【打印】

注：打印模板请在【系统设置】-【个性化设置】-【打印模板】中设置好，在BOM正向查询页面的【打印】-【打印设置】中，选择对应的打印模板打印

![](https://vip.kingdee.com/download/0109d3ff38f00a894d9da1cbca86a22de8f7.png)

### （3）多级BOM如何引入？
BOM导入本身就含有多级导入的能力，例如：有一个2级BOM，A---A1---A2，只要维护好的这2张BOM单，一张A的BOM单（父件A，子件A1），一张A1的BOM单（父件A1，子件A2），引出后再导入系统，它们之间自然就会有级次的关系
