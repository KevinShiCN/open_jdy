---
title: "替代方案保存失败:主料xx含有下级子件?"
product: "金蝶云·星辰"
category: "生产管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/715370712730759424"
author: "shaoling"
views: 83
created_at: "2025-05-27 15:07:50"
updated_at: "2026-01-07 01:53:47"
crawl_date: "2026-03-18"
---

# 替代方案保存失败:主料xx含有下级子件?

> 产品：金蝶云·星辰 | 分类：生产管理 | 类型：常见问题
> 作者：shaoling | 阅读：83 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/715370712730759424)

【问题描述】

替代方案保存失败:主料xx含有下级子件?

【业务场景】

在做替代方案时,保存不了,提示“保存失败:主料[SP00034]含有下级子件!”

![](https://vip.kingdee.com/download/01097f1451030ec44ebcac03e04315ac8cea.png)

【解释说明】

替代方案保存失败,提示“主料 XX 含有下级子件”,是因为该主料已被录入 BOM(生产物料清单)。由于替代方案仅允许为最末级物料建立,而设置 BOM 即表明该物料存在下级子件,因此不支持为其创建替代方案

若需为该物料设置替代方案,建议先禁用关联 BOM,再配置替代方案。后续若需启用 BOM,需先禁用替代方案,再重新启用 BOM

若您想要了解替代方案应用问题,请点击:[替代方案如何应用?](https://vip.kingdee.com/knowledge/713921314863359488?productLineId=35&isKnowledge=2&lang=zh-CN)

若您想要了解bom禁用或启用问题,请点击:[bom如何禁用/启用?](https://vip.kingdee.com/knowledge/617164209998278656?channel_level=%E9%87%91%E8%9D%B6%E4%BA%91%E7%A4%BE%E5%8C%BA%7C%E6%90%9C%E7%B4%A2%7C%E5%AE%98%E6%96%B9%E7%9F%A5%E8%AF%86&productLineId=35&isKnowledge=2&lang=zh-CN)

若您想要了解替代方案禁用问题,请点击:[替代方案如何禁用?](https://vip.kingdee.com/knowledge/713563180424668672?channel_level=%E9%87%91%E8%9D%B6%E4%BA%91%E7%A4%BE%E5%8C%BA%7C%E6%90%9C%E7%B4%A2%7C%E5%AE%98%E6%96%B9%E7%9F%A5%E8%AF%86&productLineId=35&isKnowledge=2&lang=zh-CN)

若您想要了解半成品设置替代料问题,请点击:[半成品支持成为替代料吗?](https://vip.kingdee.com/knowledge/715006976698224128?channel_level=%E9%87%91%E8%9D%B6%E4%BA%91%E7%A4%BE%E5%8C%BA%7C%E6%90%9C%E7%B4%A2%7C%E5%AE%98%E6%96%B9%E7%9F%A5%E8%AF%86&productLineId=35&isKnowledge=2&lang=zh-CN)

【注意事项】

**同一个物料不支持 BOM 与替代方案同时启用,二者状态互斥,无法并行生效。**
