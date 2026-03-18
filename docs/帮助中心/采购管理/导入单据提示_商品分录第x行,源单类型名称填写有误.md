---
title: "导入单据提示:商品分录第x行,源单类型名称填写有误"
product: "金蝶云·星辰"
category: "采购管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/749434432339028224"
author: "春日负暄"
views: 75
created_at: "2025-08-28 18:57:37"
updated_at: "2026-01-06 01:05:23"
crawl_date: "2026-03-18"
---

# 导入单据提示:商品分录第x行,源单类型名称填写有误

> 产品：金蝶云·星辰 | 分类：采购管理 | 类型：常见问题
> 作者：春日负暄 | 阅读：75 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/749434432339028224)

【问题描述】

导入单据提示:商品分录第x行,源单类型名称填写有误

如下图,导入【采购入库单】失败,提示:商品分录第1行,源单类型有误,请检查。

![](https://vip.kingdee.com/download/01098246e6bc823c458784d59bece470ce87.png)

【解决方案】

打开引入的【采购入库单】的引入模板,检查<源单类型>字段,填写是否正确。

如图,引入文件中的<源单类型>输入了【采购入库单】

![](https://vip.kingdee.com/download/0109f10afcbeb8c54424868472eb1fbfcf65.png)
标准版以及专业版,【采购入库单】的源单只有【采购订单】,此时填写的源单为采购入库单,所以会出现报错,修改成采购订单即可引入成功

![](https://vip.kingdee.com/download/0109ab913cccd2bb4ffbb6db1a67a50e58ad.png)

旗舰版中,支持采购发票生成采购入库单,但是不支持通过引入的方式,关联发票引入采购入库单,所以入库单的源单是采购发票时,也会提示:源单类型有误

![](https://vip.kingdee.com/download/0109b28b3af966234b11ae7d58f8efbca8ca.png)

其他单据导入失败同理,可检查<源单类型>字段填写是否正确

【温馨提示】

更多相关知识,可参考链接:

[星辰关联源单引入功能:](https://vip.kingdee.com/link/s/Za07u)
