---
title: "当材料之间是固定比例时,如何创建bom?"
product: "金蝶云·星辰"
category: "生产管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/612451117854664192"
author: "Siwennn"
views: 269
created_at: "2024-08-16 09:30:06"
updated_at: "2025-02-17 23:00:53"
crawl_date: "2026-03-18"
---

# 当材料之间是固定比例时,如何创建bom?

> 产品：金蝶云·星辰 | 分类：生产管理 | 类型：常见问题
> 作者：Siwennn | 阅读：269 | 有用：1
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/612451117854664192)

【问题描述】

当材料之间是固定比例时,如何创建bom?

【业务场景】

例如塑料行业,1个A产成品塑料袋(规格是100g),对应B、C、D多个材料,BCD之间的比例关系是确认的,B占90%,C占5%,D占5%,则B的需要的分子是90g,C是5g,D是5g;如果生产A1塑料袋(规格是110g),BCD之间的比例关系不变,B占90%,C占5%,D占5%,则B的需要的分子是99g,C是5.5g,D是5.5g。

【解决方案】

目前无法直接设置固定比例的BOM,但可以按商品类别创建BOM。

1、将材料使用比例固定的塑料袋建立一个商品类别“塑料袋”,然后在其中新增明细商品:塑料袋A,启用多单位,基本单位为g,辅助单位为个,1个=100g。同样的,新增商品塑料袋A1,1个=110g。这样我们就得到了2种不同规格的塑料袋,如下图所示。

![](https://vip.kingdee.com/download/010951313ca2a3d5419493251201eb991efc.png)
![](https://vip.kingdee.com/download/01091eaec48c7ebc4822a2ac8fc23998d6de.png)
2、新增BOM单,针对[塑料袋]这个商品类别建立BOM,材料录入原料B、C、D,用量分别是0.9、0.05、0.05,如下图所示。

![](https://vip.kingdee.com/download/0109c906dffc78a940e5a106b2b4ced5c07f.png)

3、新增生产任务单,录入塑料袋A,由于属于[塑料袋]这个商品类别,因此系统会匹配[塑料袋]这个商品类别的BOM,然后录入辅助数量1个,此时会根据BOM的用量,自动计算原料B、C、D的用量分别为90g、5g、5g。同样的,我们继续录入塑料袋A1,录入辅助数量1个,自动计算出原料B、C、D的用量分别为99g、5.5g、5.5g。如下图所示。**这样就实现了同一材料比例的塑料袋,只用建立一个BOM的场景。**

![](https://vip.kingdee.com/download/010988c00a11ee0d49899596afa85c69ce19.png)
![](https://vip.kingdee.com/download/0109588a7a42c89940d098b520309995923d.png)
