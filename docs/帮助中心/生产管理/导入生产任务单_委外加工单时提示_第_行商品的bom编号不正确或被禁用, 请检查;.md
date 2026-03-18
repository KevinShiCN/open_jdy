---
title: "导入生产任务单/委外加工单时提示:第*行商品的bom编号不正确或被禁用, 请检查;"
product: "金蝶云·星辰"
category: "生产管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/749795823638105344"
author: "杨桂平"
views: 31
created_at: "2025-08-27 15:55:31"
updated_at: "2025-09-18 01:54:21"
crawl_date: "2026-03-18"
---

# 导入生产任务单/委外加工单时提示:第*行商品的bom编号不正确或被禁用, 请检查;

> 产品：金蝶云·星辰 | 分类：生产管理 | 类型：常见问题
> 作者：杨桂平 | 阅读：31 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/749795823638105344)

【问题描述】

导入生产任务单/委外加工单时提示:第*行商品的bom编号不正确或被禁用, 请检查;

![](https://vip.kingdee.com/download/0109ac150d1f529744b59b8d021ca6ad3e7c.png)

【解决方案】

导入生产任务单/委外加工单时导入模版中录入的BOM编号不是系统中对应商品最新的BOM版本号就会有此提示,在BOM维护列表中找到商品对应的最新BOM版本号并修改导入模版再重新引入即可。

如:导入生产任务单时对应的商品是“SP00002成品”,在【生产管理】-【BOM维护】中,按商品编码查询BOM单,找到**已审核的最新的BOM版本号。**

![](https://vip.kingdee.com/download/01093af15cc7109043cab2e721e294f9471e.png)

在导入模板中输入最新的BOM编号,再导入系统即可。

![](https://vip.kingdee.com/download/010985fc8afb38c24c19a22f3b48fa507d88.png)

【温馨提示】

可以在系统中新增一个生产任务单,选择商品后看自动带出来的BOM单编号是哪一个,这个BOM单编号就是最新的版本号,把最新的BOM单编号复制并粘贴到Excel表格里面再导入即可。

![](https://vip.kingdee.com/download/010946109b199ed34cb48c42dc62195579ff.png)
