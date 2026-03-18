---
title: "因为审批人a被禁用导致流程挂起,怎么处理?"
product: "金蝶云·星辰"
category: "系统设置"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/391352248217056512"
author: "winnie_wen"
views: 766
created_at: "2022-12-15 22:14:07"
updated_at: "2025-11-12 01:03:14"
crawl_date: "2026-03-18"
---

# 因为审批人a被禁用导致流程挂起,怎么处理?

> 产品：金蝶云·星辰 | 分类：系统设置 | 类型：常见问题
> 作者：winnie_wen | 阅读：766 | 有用：2
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/391352248217056512)

【问题描述】

因为审批人a被禁用导致流程挂起,怎么处理?

【解决方案】

(1)如果单据仍需要该用户A进行审批,启用该用户,审批流程后再禁用用户;

(2)如果单据需要改由用户B来审批,在流程管理中修改该流程,将审批环节中的审批人A换成B,然后在审核日志中对该挂起流程点击撤销挂起即可。

![](https://vip.kingdee.com/download/0109e5f713071f524c0caf24b4804a69d2f0.png)注意:修改的流程需是审核日志中挂起流程相同的流程编码及版本号;

![](https://vip.kingdee.com/download/0109cfa4623f52fa4a08822e81b35d79cab8.png)

(3)在流程管理中已经修改了审批人,想要挂起的流程按照新的流程重新提交,那么可以使用强制终止操作,使单据回到保存状态,重新提交单据流程即可。

![](https://vip.kingdee.com/download/0109da5f6d7c912542329855f7944624d727.png)
