---
title: "BOM支持指定下级半成品BOM版本"
product: "金蝶云·星辰"
category: "生产管理"
type: "快速入门, 功能介绍, 新特性"
source: "https://vip.kingdee.com/knowledge/748453230232709376"
author: "嘻嘻嘻哈"
views: 515
created_at: "2025-08-27 08:05:56"
updated_at: "2025-11-25 10:22:30"
crawl_date: "2026-03-18"
---

# BOM支持指定下级半成品BOM版本

> 产品：金蝶云·星辰 | 分类：生产管理 | 类型：快速入门, 功能介绍, 新特性
> 作者：嘻嘻嘻哈 | 阅读：515 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/748453230232709376)

## **1 简介  **

### **1.1****功能介绍**

同一个半成品，由于零配件等的差异存在多个不同版本的BOM，在实际生产过程中需根据客户的需求确定应该按照哪个BOM进行生产。

功能改造前，系统中是以已审核未禁用的最大版本的BOM为准进行生产，若同一个半成品存在多个BOM时，当需要的BOM不是最大版本，则客户需要将其他BOM禁用才能实现客户需求。

功能改造后，在建立成品BOM时可以直接指定下级半成品使用的BOM版本，在后续的计划、生产过程中将按照该指定的BOM进行展开计算。

### **1.2****适用版本**

星辰3.1专业版/旗舰版

### **1.3****操作路径**

生产管理-生产数据-BOM

![上传图片](https://vip.kingdee.com/download/010023e5152c6f8942ef96319a9886a635c7.png)

## **2 操作指南**

1）BOM的子件中增加【子件BOM编号】、【子件BOM版本号】字段，可根据客户的实际需求选择子件的BOM编号

![上传图片](https://vip.kingdee.com/download/01007a46d667440b4b5a8560ef55f1fe5bc2.png)

2）BOM多级维护、BOM正向查询、BOM子件反查、BOM成本查询时若下级半成品指定了【子件BOM编号】，则查询时按照指定的【子件BOM编号】进行查询

【BOM多级维护】

![上传图片](https://vip.kingdee.com/download/0100c2a24a887c654f4eafc9cc5ef30d74a2.png)

【BOM正向查询】

![上传图片](https://vip.kingdee.com/download/0100f1a899232c2c4b6c8a09f503db17e610.png)

【BOM子件反查】

![上传图片](https://vip.kingdee.com/download/01003a5ad2ffdb3842cca8e1ef48365707c0.png)

【BOM成本查询】

![上传图片](https://vip.kingdee.com/download/01006150b4901d9d449f9f5e5923a656f7e0.png)

3）物料需求建议计算时根据BOM中指定的子件BOM编号向下展开计算

![上传图片](https://vip.kingdee.com/download/0100de06f997c2e04a83818b5a82117573cf.png)

4）生产任务单、委外加工单增加【BOM编号(M)】、【BOM版本号(M)】字段，选择该成品BOM时，会携带BOM中指定的【子件BOM编号】、【子件BOM版本号】，支持在生产任务单、委外加工单中手动修改。

![上传图片](https://vip.kingdee.com/download/01000bd94d2be12a4947be6be2e0facdf23b.png)

5）生成下级工单时也按照任务单/加工单中选择的【BOM编号(M)】展开

![上传图片](https://vip.kingdee.com/download/010022231384f43b4987b0800e1c6367febf.png)

6）齐套分析按照BOM中指定的【子件BOM编号】、【子件BOM版本号】进行展开计算

![上传图片](https://vip.kingdee.com/download/0100c487e25f8eb445f3a3151349669223a7.png)

7）模拟报价按照BOM中指定的【子件BOM编号】、【子件BOM版本号】进行展开计算

![上传图片](https://vip.kingdee.com/download/0100ace6ff09993f4974ab100ff87e27cfdd.png)

8）若BOM的子件未选择具体的BOM编号，则在进行计划和生产时仍按照之前的规则取已审核未禁用的最大版本的BOM进行展开和计算
