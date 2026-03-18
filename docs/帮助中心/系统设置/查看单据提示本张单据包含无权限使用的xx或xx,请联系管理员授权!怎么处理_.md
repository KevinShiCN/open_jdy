---
title: "查看单据提示本张单据包含无权限使用的xx或xx,请联系管理员授权!怎么处理?"
product: "金蝶云·星辰"
category: "系统设置"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/652314222885485568"
author: "Schatz"
views: 341
created_at: "2024-12-02 10:44:20"
updated_at: "2026-02-11 02:22:58"
crawl_date: "2026-03-18"
---

# 查看单据提示本张单据包含无权限使用的xx或xx,请联系管理员授权!怎么处理?

> 产品：金蝶云·星辰 | 分类：系统设置 | 类型：常见问题
> 作者：Schatz | 阅读：341 | 有用：1
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/652314222885485568)

【问题描述】

查看单据提示本张单据包含无权限使用的XX或XX,请联系管理员授权!怎么处理?

【解释说明】

当系统弹出报错提示 “包含无权限使用的XX或XX,请联系管理员授权!” 时,需全面核查商品、仓库、部门及账户等相关资料的数据权限配置。需注意,任何一项数据权限的缺失或未正确配置,均可能导致查看单据时触发该错误提示。

【操作步骤】

如下图,子账户要点击打开单据查询报错“包含无权限使用的商品或仓库,请联系管理员授权!”,

![](https://vip.kingdee.com/download/010902283ec922674f8ea6dbac8cf16807d5.png)

用管理员账户登录系统,并依次点击系统设置-用户管理。在此界面中,选择子账户并点击授权(若存在用户组,还需检查用户组权限)。

![](https://vip.kingdee.com/download/01099a8ab59deff44d0d94a975137fd71f80.png)

经检查发现,子账户的用户和用户组权限中均未设置商品和仓库的数据权限。

![](https://vip.kingdee.com/download/01098f003d936905492a97d987b983d92714.png)

然而,部门的数据权限有设置,并且仅限于查看“11”部门,而所需查看的单据中选择的是“CS”部门。

![](https://vip.kingdee.com/download/01094895a925a62149979d8d346dde008752.png)

因此,解决方案是删除现有的部门数据权限限制,或添加“CS”部门的数据权限。

![](https://vip.kingdee.com/download/0109beb8da2e3be94b1e8f4be977aec9e518.png)

子账户即可正常访问并打开这一张单据。

![](https://vip.kingdee.com/download/010929ef4b56afae415bb6166101c95f8613.png)

【温馨提示】

更多关于星辰日常业务处理流程,推荐参考链接:[星辰日常业务处理](https://vip.kingdee.com/knowledge/specialDetail/172035498049835264?productLineId=35)
