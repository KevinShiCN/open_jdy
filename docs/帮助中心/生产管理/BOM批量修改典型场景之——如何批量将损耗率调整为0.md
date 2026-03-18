---
title: "BOM批量修改典型场景之——如何批量将损耗率调整为0"
product: "金蝶云·星辰"
category: "生产管理"
type: "进阶技巧, 精华汇总, 常见问题"
source: "https://vip.kingdee.com/knowledge/469793356399420672"
author: "蒋章龙"
views: 798
created_at: "2023-07-20 09:11:05"
updated_at: "2024-12-23 17:04:14"
crawl_date: "2026-03-18"
---

# BOM批量修改典型场景之——如何批量将损耗率调整为0

> 产品：金蝶云·星辰 | 分类：生产管理 | 类型：进阶技巧, 精华汇总, 常见问题
> 作者：蒋章龙 | 阅读：798 | 有用：1
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/469793356399420672)

****

**1、场景介绍**

已经在系统中维护了BOM，但是损耗率由于种种原因不想继续使用了，想要将所有BOM单的损耗率全部调整为0

2、方案拓展

该方法还适用于固定损耗、工位、发料仓库、物料备注等字段的调整，可以批量将这些字段的值清空。

3、步骤说明

1）进入BOM批量修改，选择“修改子件信息”，在修改项中勾选“损耗率”。

![](https://vip.kingdee.com/download/0109b2595a21fba141bd84e672c756823932.png)

2）第二步，录入需要修改损耗率的子件物料，损耗率（修改前）可以不录入，不录入则代表任意修改前的损耗率，均按照损耗率（修改后）进行修改

![](https://vip.kingdee.com/download/0109a06648408fcf4b5d9dbd1ccc6e03c5f0.png)

3）第三步，进入BOM批量修改的下一步，可以看到系统自动过滤出了所有含原材料1的BOM单，修改前的损耗率也没有限制，全部过滤出来了。

![](https://vip.kingdee.com/download/010937cc2de449274f05ae0d7b81d6b53b54.png)

4）第四步，勾选需要修改的BOM，点击下一步，对修改的信息进行最终确认，就可以进行批量修改了。

![](https://vip.kingdee.com/download/01098b6abffcf4624b10b115eb9ca058287e.png)

5）修改完成后，在BOM列表查询修改后的结果。

![](https://vip.kingdee.com/download/01092e7af9c3320840fa88f59beb4a9c5b63.png)
