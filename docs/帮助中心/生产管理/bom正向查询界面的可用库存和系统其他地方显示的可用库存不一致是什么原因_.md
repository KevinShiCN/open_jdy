---
title: "bom正向查询界面的可用库存和系统其他地方显示的可用库存不一致是什么原因?"
product: "金蝶云·星辰"
category: "生产管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/711384115345606144"
author: "Simone邓"
views: 64
created_at: "2025-05-16 11:58:30"
updated_at: "2025-05-23 01:24:24"
crawl_date: "2026-03-18"
---

# bom正向查询界面的可用库存和系统其他地方显示的可用库存不一致是什么原因?

> 产品：金蝶云·星辰 | 分类：生产管理 | 类型：常见问题
> 作者：Simone邓 | 阅读：64 | 有用：1
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/711384115345606144)

【问题描述】

bom正向查询界面的可用库存和系统其他地方显示的可用库存不一致是什么原因?

【解释说明】

#### BOM正向查询可用库存与其他模块不一致的根本原因如下:

BOM正向查询界面的可用库存数据是根据BOM表上的【发料仓库】取值的

1、**当BOM表上指定了发料仓库时,**仅显示该仓库的可用库存(不包含其他仓库库存),此时会导致与系统其他地方显示的可用库存不一致

2、**当BOM表上未指定发料仓库时,**默认显示所有仓库的可用库存,此时与其他模块同样取全部仓库库存的可用库存一致

如截图BOM单上指定了【科技园666】的仓库

![](https://vip.kingdee.com/download/0109fc2841bc7aac45a2acdbc7d7651ac8d8.png)
BOM正向查询表则只显示该仓库的可用库存

![](https://vip.kingdee.com/download/01098a3a32cb3d274c9db60b43772ae42f46.png)

而该在商品价格资料查询界面则显示的是该商品所有仓库的可用库存

![](https://vip.kingdee.com/download/010961f03788c77f458cb39cb1a5ba6aaf9e.png)

【温馨提示】
更多关于星辰日常业务处理流程,推荐参考链接:[星辰日常业务处理](https://vip.kingdee.com/knowledge/specialDetail/172035498049835264?productLineId=35)
