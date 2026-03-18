---
title: "PDA无法进行红外扫描/扫描不出结果/扫描结果乱码？"
product: "金蝶云·星辰"
category: "移动应用"
type: "精华汇总, 进阶技巧, 常见问题"
source: "https://vip.kingdee.com/knowledge/690231549538611456"
author: "移动生产白建凡"
views: 373
created_at: "2025-03-19 16:13:45"
updated_at: "2025-03-19 17:14:08"
crawl_date: "2026-03-18"
---

# PDA无法进行红外扫描/扫描不出结果/扫描结果乱码？

> 产品：金蝶云·星辰 | 分类：移动应用 | 类型：精华汇总, 进阶技巧, 常见问题
> 作者：移动生产白建凡 | 阅读：373 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/690231549538611456)

1 问题描述

PDA无法进行红外扫描/扫描不出结果/扫描结果乱码？

## 2 原因解析

出现这种情况，是因为没有配置好PDA设备和金蝶云APP的连接关系导致，可以通过以下步骤解决这类问题。

## 3 解决方案

1）第一步，配置PDA扫描设置

- 在PDA系统相关应用或者设置中找到扫描设置
- 将“输出方式”改为“广播输出”![](https://vip.kingdee.com/download/010998a1fa0a12fb41dd84e4489bcbb59aae.png)
- 设置“广播动作”为“com.kingdee.jdy.pda”
- 设置“广播数据标签”为“scan_result”
- 设置“中文编码类型”为“UTF-8”![](https://vip.kingdee.com/download/010978347cd2f80e4779ad7d9519152f7d30.png)

2）第二步，配置金蝶云APP

打开PDA设备上的金蝶云app，进入我的>设置，找到“启用红外扫描功能”并进入。观察界面上提示，根据提示进行后续步骤。

![](https://vip.kingdee.com/download/0109b9bffb8f09af4caeae2512b4c6ba3307.png)

注：由于不同pda系统的设置位置可能不同，本帖只做大概说明。如有其他关于PDA扫描的问题，欢迎在评论区告诉我们，我们将不断补充完善，感谢您对金蝶云·星辰的支持！
