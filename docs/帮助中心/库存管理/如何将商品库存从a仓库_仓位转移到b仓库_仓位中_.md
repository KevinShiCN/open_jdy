---
title: "如何将商品库存从a仓库/仓位转移到b仓库/仓位中?"
product: "金蝶云·星辰"
category: "库存管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/502284805602587392"
author: "若有灵兮山之阿"
views: 1268
created_at: "2023-04-27 21:22:05"
updated_at: "2026-03-06 01:28:41"
crawl_date: "2026-03-18"
---

# 如何将商品库存从a仓库/仓位转移到b仓库/仓位中?

> 产品：金蝶云·星辰 | 分类：库存管理 | 类型：常见问题
> 作者：若有灵兮山之阿 | 阅读：1268 | 有用：1
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/502284805602587392)

【问题描述】

如何将商品库存从a仓库/仓位转移到b仓库/仓位中?

【解释说明】

系统中商品不绑定专属仓库。若需实现多仓库间的库存流转,可通过录入移仓单或调拨单完成商品库存转移;系统对该类商品的库存转移次数不作限制。

【操作步骤】

**方式一、无在途过程且成本不变:做移仓单**

点击【库存管理】-【移仓单】,进入到新增移仓单的界面

![](https://vip.kingdee.com/download/0109b508c2922e574889ae9f608a76c4f205.png)
选择需要转移的商品和仓库/仓位信息,输入需要转移的数量,保存审核即可
![](https://vip.kingdee.com/download/010929994744720248688daacfe362dca35a.png)

**方式二、有在途过程:调拨出库单和调拨入库单**

点击【库存管理】-【调拨出库单】,进入到调拨出库单新增的界面

![](https://vip.kingdee.com/download/01098270b13fa0a14204a3bd7dd5f4ee4304.png)
调拨出库单中业务类型选择同价调拨或者异价调拨

**[同价调拨](https://vip.kingdee.com/article/621873462004690944?productLineId=35&isKnowledge=2&lang=zh-CN):商品的调入仓库/仓位的成本根据调出仓库/仓位的成本计算得出**

**[异价调拨](https://vip.kingdee.com/article/576574330834888960?productLineId=35&isKnowledge=2&lang=zh-CN):商品的调入仓库/仓位的成本根据调拨出库单中填写的单价和调拨费用分摊的金额计算得出**

![](https://vip.kingdee.com/download/01095d8ed097a0e44a98867fbe0c584ecaa4.png)在表体界面,选择目标商品、调拨出库仓库/仓位、目标调入仓库/仓位、输入调拨数量,点击<保存>-<审核>

![](https://vip.kingdee.com/download/01090dd79312a2e14fdd960ada9230750d87.png)点击【库存管理】-【异价调拨】,进入到新增调拨入库单的界面
![](https://vip.kingdee.com/download/010909e9f53811774e5da21a21b09a6d4d29.png)
点击右上角的<选择出库单>,选择需要调拨入库的调拨出库单
![](https://vip.kingdee.com/download/0109b2a0f8dad0ed40e09dd52c5434e34baa.png)
将调出商品入库,<保存>-<审核>即可
![](https://vip.kingdee.com/download/0109f6dd93d91058404aaad7d61ffac06ddd.png)
