---
title: "KIS专业版迁移到星辰时，有些负数预收单报错提示“请录入源单”？"
product: "金蝶云·星辰"
category: "公共类知识"
type: "常见问题, 快速入门, 精华汇总"
source: "https://vip.kingdee.com/knowledge/785885324181720320"
author: "sejiong"
views: 35
created_at: "2025-12-08 15:07:42"
updated_at: "2025-12-08 16:04:36"
crawl_date: "2026-03-18"
---

# KIS专业版迁移到星辰时，有些负数预收单报错提示“请录入源单”？

> 产品：金蝶云·星辰 | 分类：公共类知识 | 类型：常见问题, 快速入门, 精华汇总
> 作者：sejiong | 阅读：35 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/785885324181720320)

### **【问题描述】**

KIS专业版迁移到星辰，导入日志预收款/付款退款单报错：请录入源单信息。

![上传图片](https://vip.kingdee.com/download/010032fc83b1ce3d469d84301f4eddb462be.png)

### **【原因解析】**

KIS专业版负数预收款单迁移到星辰对应预收退款单，由于星辰必须要有源单，而KIS负数预收单没有源单，因此目前的升级逻辑是：在所有核销单升级后，将有剩余未核销金额的预收单作为星辰预收退款单的源单。



但如果KIS中**负数的预收单以及对应正数预收单因错误的做单被引用到核销单【预收冲应收】，引发的预收款被多冲抵核销，**就会导致部分预收退款单升级时无法选择到源单，就保存不进星辰。

![上传图片](https://vip.kingdee.com/download/01004777037cae144c32b6969f70515a5f77.png)

预付退款单同理。

### **【解决方案】**

方案一：调整KIS数据。反审核对应的核销单，把负数的预收和相应的正数预收冲抵金额剔除掉重新保存。调整完成后，再重新迁移星辰。

![上传图片](https://vip.kingdee.com/download/01002a9e2954392b4597a64794082ece7b15.png)

方案二：调整星辰数据。建议通过用其他收入单和支出单确保期末余额中的最终余额正常，做的其他收入和支出切勿被后续核销单选择。

![上传图片](https://vip.kingdee.com/download/0100c25776bb05c14d949f4547c835eb0354.png)

![上传图片](https://vip.kingdee.com/download/010034e91ae2603b45bcac44408654ff4a2b.png)

![上传图片](https://vip.kingdee.com/download/0100e1221e89e3a947ea8dbc938b23b8e6ff.png)

![上传图片](https://vip.kingdee.com/download/0100bed666628f644229b16595a138073fd6.png)
