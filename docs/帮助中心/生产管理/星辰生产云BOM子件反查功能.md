---
title: "星辰生产云BOM子件反查功能"
product: "金蝶云·星辰"
category: "生产管理"
type: "功能介绍, 新特性, 快速入门"
source: "https://vip.kingdee.com/knowledge/358025198362804736"
author: "Esperanza"
views: 1993
created_at: "2022-09-14 23:04:19"
updated_at: "2024-12-23 12:40:31"
crawl_date: "2026-03-18"
---

# 星辰生产云BOM子件反查功能

> 产品：金蝶云·星辰 | 分类：生产管理 | 类型：功能介绍, 新特性, 快速入门
> 作者：Esperanza | 阅读：1993 | 有用：4
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/358025198362804736)

## 1、简介

### 1.1功能介绍

BOM子件反查功能可帮助用户查询某个配件在哪些半成品或成品的BOM单中用到。

### 1.2适用版本

金蝶云·星辰旗舰版/专业版

### 1.3应用场景及价值

企业需要查询某个配件在哪些半成品或成品的BOM单中用到时，可使用BOM子件反查。

BOM子件反查会从下往上扫描所有级次的产品结构，列出配件的每一个父件以及父件的父件，直至最终成品，常用于确定一个组件的变化时，哪些物料或产品会受到影响。计划人员可以用BOM子件反查功能来识别由于组件推迟交货或损坏而受影响的装配件。

**1.4系统路径**

![](https://vip.kingdee.com/download/010986014a38a7a743fc8cd1fdbe9a3f5114.png)

## 2、BOM子件反查的主要功能说明

支持多级反查、逐级反查、末级反查三种反查方式

多级反查：

该种展开方式会先按照录入的子件信息（包含子件编码、辅助属性、工位）从下而上扫描所有BOM单，找到该子件的父件以及父件的父件。不同层次的父件通过[层级]进行区分，层级为1级，表示向上追溯了1层，层级为2级，表示向上追溯了2层。

例如：A的子件是B，B的子件是C，当输入C进行多级反查时，反查出2条结果，其中B的层级为1级，A的层级为2级。

![](https://vip.kingdee.com/download/0109a0ae34667d7246d4ad552ca3b2ae2ee8.png)

逐级反查：

该种反查方式相较于多级反查，默认仅显示层级为1级的父件，需要用户手动进行层级的展开。

![](https://vip.kingdee.com/download/0109fc48776ff58749e0a778cd9fce206882.gif)

末级反查：

该种反查方式相较于多级反查，仅会显示最末级层级的父件，即查找出的父件已无父件，无法再向上追溯。该种展开方式也不会显示层级。

例如：A的子件是B，B的子件是C，同时，D的子件也是C，当输入C进行末级反查时，反查出2条结果，分别是A和D。

当某个组件发生变化时，若计划员不关注中间级物料，只关注会影响哪些最终成品时，可使用末级反查这种查询方式。

![](https://vip.kingdee.com/download/01095edab8efbd954665a01e5e34bef3d0ac.png)

—————————————————————————————————————————————————

![](https://vipstatic.obs.cn-north-4.myhuaweicloud.com/statics/emotion/define/86.gif)更多生产云的相关知识及常见问题请查看：

生产管理帮助手册：[点我查看](https://vip.kingdee.com/article/342786243807693312?productLineId=35&isKnowledge=2)

委外管理帮助手册：[点我查看](https://vip.kingdee.com/article/342776789259149824?productLineId=35&isKnowledge=2)

生产云帮助手册PDF：[点击获取](https://vip.kingdee.com/article/337226640789432064?productLineId=35)
