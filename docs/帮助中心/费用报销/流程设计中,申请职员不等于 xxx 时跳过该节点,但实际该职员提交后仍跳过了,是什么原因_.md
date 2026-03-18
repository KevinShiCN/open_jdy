---
title: "流程设计中,申请职员不等于 xxx 时跳过该节点,但实际该职员提交后仍跳过了,是什么原因?"
product: "金蝶云·星辰"
category: "费用报销"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/675144624427356416"
author: "ylim"
views: 77
created_at: "2025-02-05 16:28:11"
updated_at: "2025-02-24 10:29:30"
crawl_date: "2026-03-18"
---

# 流程设计中,申请职员不等于 xxx 时跳过该节点,但实际该职员提交后仍跳过了,是什么原因?

> 产品：金蝶云·星辰 | 分类：费用报销 | 类型：常见问题
> 作者：ylim | 阅读：77 | 有用：1
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/675144624427356416)

【问题描述】

流程设计中,申请职员不等于 XXX 时跳过该节点,但实际该职员提交后仍跳过了,是什么原因?

如图所示,审批条件设置:报销人=A,报销人不等于B或报销人不等A。

![](https://vip.kingdee.com/download/01092c24671a9ad54bcebfbf0fc054e5aea9.png)

![](https://vip.kingdee.com/download/01099cda40f03fd040108f6b3692e25d5f88.png)
![](https://vip.kingdee.com/download/010978fd1b37200249349af521eeca578c00.png)
A申请的报销单在节点三仍然跳过了

![](https://vip.kingdee.com/download/0109ea558dd99823425bbafaa9e6a7e6594f.png)

【解释说明】

这是因为跳过节点的表达式设置有问题,设置审批条件为【不属于集合】【A、B】即可,如下图所示:

![](https://vip.kingdee.com/download/0109aca38065c3a84081ba31aba957061534.png)
