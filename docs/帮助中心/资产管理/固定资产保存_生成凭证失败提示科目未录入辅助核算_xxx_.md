---
title: "固定资产保存/生成凭证失败提示科目未录入辅助核算:xxx?"
product: "金蝶云·星辰"
category: "资产管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/560991641641870336"
author: "Cat_Chow"
views: 1592
created_at: "2024-03-19 18:09:12"
updated_at: "2026-03-06 01:36:41"
crawl_date: "2026-03-18"
---

# 固定资产保存/生成凭证失败提示科目未录入辅助核算:xxx?

> 产品：金蝶云·星辰 | 分类：资产管理 | 类型：常见问题
> 作者：Cat_Chow | 阅读：1592 | 有用：14
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/560991641641870336)

【问题描述】

固定资产保存/生成凭证失败提示科目未录入辅助核算:xxx?

【业务场景】

固定资产生成凭证失败提示科目未录入辅助核算:xxx

![](https://vip.kingdee.com/download/01097fb0b5b849d6400ebf8688fc680cbce2.png)

保存卡片时,提示固定资产科目未录入辅助核算:XXX,如何处理?

![](https://vip.kingdee.com/download/0109511383df04354980b2a8485ee025aba4.png)

【解释说明】

由于该卡片对应的科目已启用辅助核算,但初始设置中辅助核算项为非必录项 —— 新增卡片时仅选择了上级科目,未指定具体的辅助核算明细;后续若将该科目的辅助核算更新为【必录】,此前未补填辅助核算明细的卡片,会因缺少必录的辅助核算信息,导致生成凭证或保存卡片失败。

【解决方案】

以上图提示的“固定资产科目”为例

在【基础资料】-【科目】-【固定资产】把固定资产科目的辅助核算项取消“必录”

![](https://vip.kingdee.com/download/01096623e9ec901940aebf140d8d4a01cc08.png)

然后再重新生成凭证,或是重新修改卡片再保存即可。

或是录入卡片时,把卡片科目的辅助核算明细选择上,并【保存】

![](https://vip.kingdee.com/download/0109e4a74217c8a843a8bf9cd2a5986348c3.png)

若卡片已有关联业务或是已结账,可以通过[资产变动](https://vip.kingdee.com/link/s/ZzVwb),修改卡片科目设置。

【更多推荐】
更多关于金蝶云·星辰日常业务处理流程,推荐参考链接:[星辰新手攻略](https://vip.kingdee.com/knowledge/specialDetail/172035498049835264?productLineId=35)
