---
title: "bom单中子件信息栏下的“单位用量”是如何计算的呢?"
product: "金蝶云·星辰"
category: "生产管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/711384086757075200"
author: "happy忆霖"
views: 119
created_at: "2025-05-16 09:11:22"
updated_at: "2025-12-31 01:23:01"
crawl_date: "2026-03-18"
---

# bom单中子件信息栏下的“单位用量”是如何计算的呢?

> 产品：金蝶云·星辰 | 分类：生产管理 | 类型：常见问题
> 作者：happy忆霖 | 阅读：119 | 有用：1
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/711384086757075200)

【问题描述】

BOM单中子件信息栏下的“单位用量”是如何计算的呢?

【业务场景】

BOM单中子件信息栏下,有显示单位用量,也无法进行编辑修改,这个值的数据是如何进行计算的呢?

![](https://vip.kingdee.com/download/0109ca413360ca3142108dec028d548e6055.png)

若希望了解bom单如何新增,请点击:**[bom单的应用场景是什么?如何创建新增?](https://vip.kingdee.com/knowledge/458798225894273024?productLineId=35&isKnowledge=2&lang=zh-CN)**

【解释说明】

**BOM单中子件信息栏下的单位用量=材料用量/产品用量,即生产一个单位的产成品,需要用到的材料用量信息。**

**单位用量根据系统计算,无法进行手动修改;**

**产品产量数量默认为1,若需要调整,可点击“产品产量”进行修改。**
![](https://vip.kingdee.com/download/01095890342d07e448d38073b8fa1fea8d7a.png)
若BOM单中子件信息栏下未看到“产品产量”等字段,请点击:[如何设置单据/报表字段的显示或隐藏?](https://vip.kingdee.com/knowledge/547945651133299200?productLineId=35&isKnowledge=2&lang=zh-CN)

【温馨提示】

“单位用量”显示为空时,一般跟录入的**材料用量**与**产品用量**以及**子料的单位精度**有关,例如下方BOM单子料的计量单位“L”数量小数位设置为0,****单位用量=材料用量/产品用量的值小于0,所以单位用量不显示。

![](https://vip.kingdee.com/download/01095a4f5b1bed7b403b8eb9952c171876b4.png)

![](https://vip.kingdee.com/download/01092eb14c581fdf4ed7b3b4b23743cdbf81.png)

**当BOM单子料“单位用量”为空时:**

新增生产任务单或委外加工单时,下面以生产任务单为例,主产品的数量录入1时会导致子料的**计划投料数**为0,单据无法保存。

若想了解计划投料数如何计算,请参考:[生产任务单的计划投料数是如何计算的?](https://vip.kingdee.com/knowledge/642896050256225792?productLineId=35&isKnowledge=2&lang=zh-CN)

若想了解标准用量如何计算,请参考:[生产任务单中的标准用量是怎么计算的?](https://vip.kingdee.com/knowledge/538807443514375424?productLineId=35&isKnowledge=2&lang=zh-CN)

![](https://vip.kingdee.com/download/01097b4b9ede8c0f4fdb983243378890a592.png)

此时可以勾选子料【商品信息】>【生产信息】中的参数“投料自动取整”处理。

若想了解商品信息投料自动取整如何使用,请参考:[商品信息里面的投料自动取整如何使用?](https://vip.kingdee.com/knowledge/616075339537827328?productLineId=35&isKnowledge=2&lang=zh-CN)

![](https://vip.kingdee.com/download/010991bfde825fe24c8dbde6a27f151f6ec5.png)

子料勾选该参数后生产任务单重新录入主产品的数量,“计划投料数”将自动向上取值为1,单据可正常保存。

![](https://vip.kingdee.com/download/01092db4f66eba2b4efd820e3b20d0581ecf.png)

也可以通过将子料数量精度改大的方式变通处理,但计量单位的小数位精度改大后无法改小,需谨慎操作。详细说明可查看:[小数位可以改小吗](https://vip.kingdee.com/knowledge/576574320634370304?productLineId=35&isKnowledge=2&lang=zh-CN)。
