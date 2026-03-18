---
title: "导入供应商或客户提示xxx的部门不能为部门根节点是什么意思?"
product: "金蝶云·星辰"
category: "基础资料"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/720805697641896448"
author: "Simone邓"
views: 17
created_at: "2025-06-11 13:55:03"
updated_at: "2025-07-19 01:08:20"
crawl_date: "2026-03-18"
---

# 导入供应商或客户提示xxx的部门不能为部门根节点是什么意思?

> 产品：金蝶云·星辰 | 分类：基础资料 | 类型：常见问题
> 作者：Simone邓 | 阅读：17 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/720805697641896448)

【问题描述】

导入供应商或客户提示xxx的部门不能为部门根节点是什么意思?

![](https://vip.kingdee.com/download/0109d3dc6aa25c0f4d4f929d5e4ca5104996.png)

【解释说明】

以供应商导入为例,客户同理

上述错误原因是因为引入模板上的部门字段将公司名称(根部门)直接作为供应商部门填写,公司名称作为组织架构的顶层节点,不可直接关联业务对象,需选择根部门下的二级/三级部门(如:采购部、财务部等)

![](https://vip.kingdee.com/download/0109d79516021bba4f4ab2453170ca96db40.png)
也可以直接在引入模板上下拉选择可使用的部门,避免填错

![](https://vip.kingdee.com/download/0109fbcf948d1c0b4005832c18c703552b8a.png)

【温馨提示】
更多关于星辰日常业务处理流程,推荐参考链接:[星辰日常业务处理](https://vip.kingdee.com/knowledge/specialDetail/172035498049835264?productLineId=35)
