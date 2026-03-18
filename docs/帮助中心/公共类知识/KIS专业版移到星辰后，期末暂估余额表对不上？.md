---
title: "KIS专业版移到星辰后，期末暂估余额表对不上？"
product: "金蝶云·星辰"
category: "公共类知识"
type: "常见问题, 快速入门, 精华汇总"
source: "https://vip.kingdee.com/knowledge/785820111629161472"
author: "sejiong"
views: 30
created_at: "2025-12-08 10:48:34"
updated_at: "2025-12-08 16:03:30"
crawl_date: "2026-03-18"
---

# KIS专业版移到星辰后，期末暂估余额表对不上？

> 产品：金蝶云·星辰 | 分类：公共类知识 | 类型：常见问题, 快速入门, 精华汇总
> 作者：sejiong | 阅读：30 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/785820111629161472)

### **【问题描述】**

KIS专业版升级到星辰后，期末暂估余额表对不上。

### **【原因解析】**

原因在于KIS专业版和星辰旗舰版暂估报表的呈现逻辑不一致。

**区别一：KIS【收入】列不等于星辰【本期暂估】。**

KIS：【收入】列反映本期发生的外购入库业务。当期到票的采购入库单，如果没有和采购发票进行勾稽，则该收入金额会结存至以后期间。

![上传图片](https://vip.kingdee.com/download/0100eb46701acb7349bd833e386ab9c6c485.png)

![上传图片](https://vip.kingdee.com/download/0100667c3c03f3c44ef9afe83f2842a1f32b.png)

![上传图片](https://vip.kingdee.com/download/0100c02a3af0fcb8470a976bf5b8c7baf83d.png)

星辰：【本期暂估】指的是当期没有到票的采购入库。

![上传图片](https://vip.kingdee.com/download/0100c835d50b3972410eaabff34096e8c3aa.png)

**区别二：KIS【本期核销】不等于星辰【本期冲回】。**

KIS专业版存货暂估明细表：【本期核销】列反映本期核销的外购入库单，对于单到冲回的暂估处理模式，不显示相关的冲回单据，只是根据核销日期，记录结余和核销数量、金额。

![上传图片](https://vip.kingdee.com/download/0100bfe7c5ae9a1b48a39c04ce0a92b969a0.png)

![上传图片](https://vip.kingdee.com/download/0100511defc2000e451abf0008916a397b56.png)

星辰期末暂估余额表：当期有冲回单据时，【本期冲回】才会显示数值。

![上传图片](https://vip.kingdee.com/download/0100ee34a0744d254de599b66518689fc5a5.png)

因此，如果在KIS专业版中只是勾稽了但没有通过外购入库核算生成冲回单，升级后暂估余额表会对不上，因为星辰暂估表是需要有冲回单才算【本期冲回】。
