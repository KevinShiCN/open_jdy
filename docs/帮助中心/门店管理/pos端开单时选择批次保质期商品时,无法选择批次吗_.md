---
title: "pos端开单时选择批次保质期商品时,无法选择批次吗?"
product: "金蝶云·星辰"
category: "门店管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/715370607721752576"
author: "happy忆霖"
views: 98
created_at: "2025-05-26 14:27:14"
updated_at: "2025-10-14 02:10:04"
crawl_date: "2026-03-18"
---

# pos端开单时选择批次保质期商品时,无法选择批次吗?

> 产品：金蝶云·星辰 | 分类：门店管理 | 类型：常见问题
> 作者：happy忆霖 | 阅读：98 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/715370607721752576)

【问题描述】

pos端开单时选择批次保质期商品时,无法选择批次吗?

![](https://vip.kingdee.com/download/010965e5c78d2c704de3ba633b3d871dae42.png)

【业务场景】

pos端开单时,选择批次保质期商品,无法选择具体的批次和保质期商品,如何设置才能选择到?

【解释说明】

**星辰后台零售参数设置时,若勾选了“自动匹配批次开单”,在pos端开单时,将无法选择批次保质期商品具体的批次/保质期,只能由系统自动进行匹配;**

**反之,若取消勾选“自动匹配批次开单”,pos端开单时即可显示批次保质期商品具体的批次保质期。**

【解决方案】

点击【零售资料】>【基础设置】>【参数设置】,进入到参数设置的界面

![](https://vip.kingdee.com/download/01093c8953962ec24c3aa2b772cc5ea52dce.png)
点击“门店管理参数”,在“pos开单设置”的界面,将"自动匹配批次开单"前的![](https://vip.kingdee.com/download/0109c3d9539691bb49028ee1cd3f051bfac7.png)取消勾选,点击右上角的<保存>

![](https://vip.kingdee.com/download/0109df9751ef5b77419c85a87739d2890537.png)在[pos端点击同步](https://vip.kingdee.com/knowledge/713921366336271104?productLineId=35&isKnowledge=2&lang=zh-CN)后,开单选择批次保质期商品时,系统将自动显示出具体的批次保质期进行选择
![](https://vip.kingdee.com/download/010918c6785ed9da4d83a133081c717b4c73.png)

【温馨提示】

**若不需要开单的时候选择批次保质期,则按照以上步骤,将“自动匹配批次开单”参数勾选即可。**

**若勾选了自动匹配批次开单,则系统匹配批次/保质期的逻辑为:保质期商品近效期较短先出,批次非保质期商品根据批次创建的先后顺序出库。**
