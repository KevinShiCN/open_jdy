---
title: "星辰迁移工具说明（KIS标准版/旗舰版及其他第三方产品迁移）"
product: "金蝶云·星辰"
category: "帮助手册"
type: "功能介绍, 快速入门, 精华汇总"
source: "https://vip.kingdee.com/knowledge/462300653747077888"
author: "进销存赵嘉丽"
views: 11288
created_at: "2023-06-29 16:57:45"
updated_at: "2025-06-27 09:44:48"
crawl_date: "2026-03-18"
---

# 星辰迁移工具说明（KIS标准版/旗舰版及其他第三方产品迁移）

> 产品：金蝶云·星辰 | 分类：帮助手册 | 类型：功能介绍, 快速入门, 精华汇总
> 作者：进销存赵嘉丽 | 阅读：11288 | 有用：11
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/462300653747077888)

## **一、重要操作，请仔细阅读**

**1、支持升级的版本**

![image.png](https://vip.kingdee.com/download/0109559e96f89a9c448494459bf3d6f64fc4.png)

**2、升级前必看**

1）请先使用导出工具，先导出，再导入。导出工具在附件中

2）财务三大报表不支持升级到星辰

3）仅支持导入一个.xml 文件，如导出多年账套是多个xml 文件，这种情况需要变通处理，以某一年数据为基础，然后把后面的凭证用 excel 导入；

4）不支持升级的数据（如固定资产、出纳日记账等），请使用Excel模板来导入星辰

5）低版本的KIS标准版/迷你版，包括金蝶2000，导出如提提示版本过低，请先安装**14.0+14.0更新包，**把账套升级到KIS标准版或KIS迷你版**14.0**版本后（AIS文件\AIB备份文件直接打开或恢复），会提示升级。没有正式加密也可以打开账套进行升级，升级后，即可使用导出工具正常导出XML文件

   V14.0安装包：[https://vip.kingdee.com/article/248910331047929344](https://vip.kingdee.com/article/248910331047929344)

   V14.0更新包：[https://vip.kingdee.com/article/255748336483930624](https://vip.kingdee.com/article/255748336483930624)

**3、升级过程中**

1）提示需要调整的数据，请按照提示操作调整或者删除再重新升级

**4、升级完成后**

1）确认升级成功，并核对数据无误后再开始使用星辰。

## **二、升级具体操作流程**

以KIS标准版/迷你版为例，介绍升级操作步骤 ：

1)  首先准备金蝶 KIS 标准版/迷你版的 AIS 格式的数据备份包（sql数据库版本的账套升级，需要先在数据库中恢复账套文件再进行升级）

![image.png](https://vip.kingdee.com/download/01002ed7d52cadcd4b9191c4934500f16791.png)

2) 下载并安装导出工具

 ![image.png](https://vip.kingdee.com/download/01006ce3791494fe406db8c70f240144e92f.png)

**请点击右侧附件下载安装包**：JDY_EXP_SETUP星辰_20240805.zip

3) 打开转换工具，选择交换数据类型为金蝶 2000/KIS 迷你/标准系列，然后点击源文件，选中预先准备的 AIS 格式文件，并指定导出文件路径

 ![image.png](https://vip.kingdee.com/download/0100df8a76d86d20482e9cffe74c43ed9adf.png)

4) 选择往来单位导出时的处理方式

因为KIS标准版/迷你版的基础资料-往来单位不区分客户、供应商，但星辰的基础资料中有区分客户、供应商，所以导出标准版/迷你版账套文件时，增加了以下三个参数，来区分导出的往来单位属于客户还是供应商：

 ![image.png](https://vip.kingdee.com/download/010027eda482737a4ddc80e3509d5b9f300a.png)

往来单位同时导出为客户和供应商：默认勾选此选项，导出的往来单位在客户、供应商中同时存在，需要进一步指定使用了往来单位的科目下挂的核算项目是客户或是供应商。

 ![image.png](https://vip.kingdee.com/download/010047cdd24e91e144ee97374902fdd4993e.png)

往来单位全部导出为客户：选择此项，基础资料-往来单位导出后全部属于客户，挂辅助核算往来单位的科目全部为客户

往来单位全部导出为供应商：选择此项，基础资料-往来单位导出后全部属于供应商，挂辅助核算往来单位的科目全部为供应商

5) 点击“前进”，进行数据导出

 ![image.png](https://vip.kingdee.com/download/010055a88d1c0bef48d2b372f6155a9164d9.png)

6)  导出完成后，生成xml文件：

 ![image.png](https://vip.kingdee.com/download/010025fe112481ea4a739bd0a157e7d2db3e.png)

注意：多账套可批量导出多个XML文件：

勾选“目录”

 ![image.png](https://vip.kingdee.com/download/0100495253dfc08e456ba6f66b6f4bd3e75e.png)

在选择源文件时，可选择账套文件所在的文件夹，点击“前进”后可批量选择导出的账套文件，进行批量导出

 ![image.png](https://vip.kingdee.com/download/0100b8a4f2513dc048e3800c3d7739db2224.png)

7) 在金蝶云星辰的新建账套界面，点击“第三方导入”，点击“从第三方产品导入”的“选择方案”。选择导出的.xml 文件和会计制度

![image.png](https://vip.kingdee.com/download/0109ee18864ea15c4449aa8071e95263cad0.png)

![image.png](https://vip.kingdee.com/download/01097829a46ce80b45549dfe5246d2e2e68a.png)

8)  点击“确定”，根据选择的导入文件，进行数据检测，包括账套参数、基础数据、日常业务凭证数据等。

![image.png](https://vip.kingdee.com/download/010065f443cc2e264b07b91c7b7af1c4bc63.png)

9)  检测通过后，点击下一步，即可进行导入。

![image.png](https://vip.kingdee.com/download/010093a6754c71054788a3ac3fc081f16db5.png)

**注： **

**账无忧如何升级到金蝶云·星辰：**

[https://vip.kingdee.com/article/420936530660845568?fromAction=POST_ARTICLE&productLineId=35](https://vip.kingdee.com/article/420936530660845568?fromAction=POST_ARTICLE&productLineId=35)

**精斗云V3/V5如何升级到星辰：**

[https://vip.kingdee.com/article/182694?productLineId=35](https://vip.kingdee.com/article/182694?productLineId=35)

迁移常见问题：

[https://pan.yunzhijia.com/edit?groupId=5e5619dbe4b02f08a28fcfdf#/456929632030035968](https://pan.yunzhijia.com/edit?groupId=5e5619dbe4b02f08a28fcfdf#/456929632030035968)
