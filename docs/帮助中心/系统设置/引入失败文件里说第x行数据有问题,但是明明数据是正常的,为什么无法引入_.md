---
title: "引入失败文件里说第x行数据有问题,但是明明数据是正常的,为什么无法引入?"
product: "金蝶云·星辰"
category: "系统设置"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/568964252783053056"
author: "进销存赵嘉丽"
views: 325
created_at: "2023-05-08 19:30:02"
updated_at: "2025-11-05 01:21:07"
crawl_date: "2026-03-18"
---

# 引入失败文件里说第x行数据有问题,但是明明数据是正常的,为什么无法引入?

> 产品：金蝶云·星辰 | 分类：系统设置 | 类型：常见问题
> 作者：进销存赵嘉丽 | 阅读：325 | 有用：1
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/568964252783053056)

【故障现象】

为什么引入失败了,下载错误文件里的错误原因提示说第X行数据有问题,但是实际第X行明明是正常的呀?例如下图,明明单位就是瓶,为什么引入就是失败?

![](https://vip.kingdee.com/download/010998c3f1982528405294cbd81c3edb3286.png)

![](https://vip.kingdee.com/download/0109ff5390ddd94948dd93bc66e2b2b64e9c.png)

【原因及解决方案】

引入错误文件里的“错误原因”,具体的报错都是定位到具体的行的,但是要注意,由于引入模板的前3行都是有内置的信息的,引出实际的错误原因的第一行是从第四行开始,不能直接去对比文件左侧的序号,报错实际行号=3+N(N就是报错信息里的行数),详见下图说明:

![](https://vip.kingdee.com/download/01097a3535efa91641cdaefb46397d0a7aa9.png)

![](https://vip.kingdee.com/download/010994f992b889204a77b6211ef7cb57e445.png)

找到正确的报错行数后,修改后重新引入即可成功。
