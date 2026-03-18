---
title: "KIS迁移到星辰时，提示解压失败请重新压缩？"
product: "金蝶云·星辰"
category: "公共类知识"
type: "快速入门, 精华汇总, 常见问题"
source: "https://vip.kingdee.com/knowledge/785825530754584064"
author: "sejiong"
views: 22
created_at: "2025-12-08 11:10:06"
updated_at: "2025-12-08 16:03:44"
crawl_date: "2026-03-18"
---

# KIS迁移到星辰时，提示解压失败请重新压缩？

> 产品：金蝶云·星辰 | 分类：公共类知识 | 类型：快速入门, 精华汇总, 常见问题
> 作者：sejiong | 阅读：22 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/785825530754584064)

### **【问题描述】**

已经将bak文件压缩成zip文件了，但上传文件后提示：“解压失败：请重新压缩BAK文件，再进行导入”。

![上传图片](https://vip.kingdee.com/download/01000e8d81701fe4401c82d9f8a0bcfc7603.png)

### **【原因解析】**

解压失败有多种原因，可能是压缩过程有损坏，也可能是该压缩包只是后缀被改成了zip，但实际上并非是压缩而成的zip。

![上传图片](https://vip.kingdee.com/download/010061cb346462c3441cb11db320750b8e72.png)



错误压缩包示例

### **【解决方案】**

建议使用压缩工具针对账套备份的bak文件重新压缩成zip文件，再重新上传。
