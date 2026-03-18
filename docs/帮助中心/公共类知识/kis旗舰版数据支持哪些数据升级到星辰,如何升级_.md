---
title: "kis旗舰版数据支持哪些数据升级到星辰,如何升级?"
product: "金蝶云·星辰"
category: "公共类知识"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/738200128929826816"
author: "海鸥乔纳森"
views: 987
created_at: "2025-07-29 08:59:07"
updated_at: "2026-02-11 02:56:11"
crawl_date: "2026-03-18"
---

# kis旗舰版数据支持哪些数据升级到星辰,如何升级?

> 产品：金蝶云·星辰 | 分类：公共类知识 | 类型：常见问题
> 作者：海鸥乔纳森 | 阅读：987 | 有用：1
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/738200128929826816)

【问题描述】

kis旗舰版数据支持哪些数据升级到星辰,如何升级?

【解释说明】

KIS旗舰版系列支持将凭证和凭证用到的基础资料升级到云星辰,需要安装“**金蝶云星辰外部交换工具**”登录数据库获取**XML**的文件导入到星辰。

**KIS旗舰版暂时不支持将出纳模块和资产模块升级到星辰。**

**KIS旗舰版暂时不支持将业务模块的单据升级到星辰,只支持升级财务数据。****
**

【操作指引】

在kis旗舰版数据库电脑上安装金蝶云星辰外部交换工具,安装包详细见附件

![](https://vip.kingdee.com/download/010947d5264818ba413a8be9994d3efcafbf.png)

在桌面新建一个文件夹,文件夹中创建一个空白的txt文本文档

![](https://vip.kingdee.com/download/01098eaf40557a3c46a5ac8f989911610b6f.png)

打开转换工具,选择交换数据类型为“金蝶k3系列/kis商贸版/kis旗舰版”,导出的文件路径选择新建的文件夹,点击登录数据库,导出文件类型为XML的文件

![](https://vip.kingdee.com/download/0109ad2a8d7e5d5341aa8d0a98f64279b501.png)

登录金蝶云星辰,创建新的账套,选择第三方导入,选择“从第三方产品导入”

![](https://vip.kingdee.com/download/0109becfd920cc934ed9a3a7a30161681b73.png)
选择对应的会计制度,上传导出的xml格式文件导入即可

![](https://vip.kingdee.com/download/0109678fcbfef95b44d6beca2a6e31bcc62a.png)
资产模块和出纳模块暂时不支持直接升级到星辰,建议可以手工新增或者是下载导入的模板导入;

固定资产导入,详细可以点击:[资产卡片如何导入?](https://vip.kingdee.com/knowledge/581648086968067840?productLineId=35&isKnowledge=2&lang=zh-CN)

日记账录入,详细可以点击:[如何新增日记账?](https://vip.kingdee.com/link/s/ZGHJF)

【相关知识】

[金蝶云·星辰迁移工具说明(精斗云v3/v5、kis系列及其他第三方产品迁移)](https://vip.kingdee.com/link/s/ZSazi)
