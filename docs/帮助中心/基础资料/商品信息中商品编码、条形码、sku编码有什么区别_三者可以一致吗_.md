---
title: "商品信息中商品编码、条形码、sku编码有什么区别?三者可以一致吗?"
product: "金蝶云·星辰"
category: "基础资料"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/778802426705960704"
author: "杨桂平"
views: 1188
created_at: "2025-11-17 14:25:05"
updated_at: "2025-11-19 02:02:48"
crawl_date: "2026-03-18"
---

# 商品信息中商品编码、条形码、sku编码有什么区别?三者可以一致吗?

> 产品：金蝶云·星辰 | 分类：基础资料 | 类型：常见问题
> 作者：杨桂平 | 阅读：1188 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/778802426705960704)

【问题描述】

商品信息中商品编码、条形码、SKU编码有什么区别?三者可以一致吗?

![](https://vip.kingdee.com/download/0109e4c7096d74974cceac4f3fb44d95889c.png)

【解释说明】

**1、商品编码、条形码、SKU编码的区别**

商品编码在新增商品时必须录入,条形码可以不录入,而sku编码依附于商品编码存在,即商品需要启用了辅助属性后,在对应商品的辅助属性下维护sku编码信息,用以区分同一个商品不同辅助属性。****

**①商品编码:**商品编码是系统中唯一识别商品的字段,每个商品的商品编码是唯一的不可重复,如何录入商品编码可参考:[商品编码是什么意思?允许多个商品对应一个编码吗?](https://vip.kingdee.com/knowledge/579473434296530176?productLineId=35&isKnowledge=2&lang=zh-CN)

**②条形码:**是由一组规则排列的条、空及其对应字符组成的标识,通过光电扫描设备读取。主要用于商品的快速识别和数据采集,如在超市收银、仓储物流管理中,通过扫描条形码快速获取商品信息。通常遵循统一的国际或行业标准可与外部实现数据互通。在系统中录入商品信息的条形码,后续在开单时可以用扫码枪扫条码快速录单,具体操作使用可参考:[如何设置商品条码?](https://vip.kingdee.com/knowledge/129339770097650206?productLineId=35&isKnowledge=2&lang=zh-CN)

**③SKU编码:**sku编码的全称为Stock Keeping Unit,用于区分和识别同一商品中不同的属性,以便进行库存管理、销售统计、退货追踪等操作,其主要用于实现内部管理的灵活性,例如在服装行业中,颜色和尺码的不同组合可构成不同的 SKU(如红色 S 码、蓝色 M 码分别对应独立 SKU),具体使用可参考:[sku编码有什么用途?](https://vip.kingdee.com/knowledge/570413825116351744?productLineId=35&isKnowledge=2&lang=zh-CN)

**2、同一个商品中商品编码、条形码、SKU编码是否可以一样**

①同一个商品中商品编码、条形码、SKU编码这个三个编码可以一致。

![](https://vip.kingdee.com/download/0109cffc1effa2544bcca6bc4676b4f00bca.png)

②同一个商品中的不同属性的SKU编码不能重复,若存在重复的SKU编码系统会提示““SKU编码” 值 “SP00019” 已存在,请输入其他值。”

![](https://vip.kingdee.com/download/0109a56c2cfbcbca4cc7bd7856596998a248.png)

③不同的商品SKU编码可以重复录入。

![](https://vip.kingdee.com/download/01094091c1185d25492b8feb675f3381a513.png)

④若系统参数中勾选了“启用一码多品”则不同的商品可以使用同一个条码。

![](https://vip.kingdee.com/download/010946142efb0b864c04ba2e9aa2862a6ed3.png)
【温馨提示】

新增单据时,商品编码/条形码/辅助属性都可以作为商品的搜索字段,若开单时,输入商品编码/条形码/辅助属性无法选到具体的商品,请点击:[开单模糊搜索功能,如何使用?](https://vip.kingdee.com/knowledge/680580586947135488?productLineId=35&isKnowledge=2&lang=zh-CN)

【相关知识】

[sku编码是系统自动生成还是手动录入?](https://vip.kingdee.com/knowledge/568601877181433088?productLineId=35&isKnowledge=2&lang=zh-CN)

[商品的sku编码能否重复?](https://vip.kingdee.com/knowledge/577299109166586112?productLineId=35&isKnowledge=2&lang=zh-CN)
