---
title: "引入单据的时候,提示“字段”xxx“的值xxxx格式不正确,要求整数部分不能大于13位,小数部分不能大于2位。”要怎么解决"
product: "金蝶云·星辰"
category: "系统设置"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/568964267110664448"
author: "进销存赵嘉丽"
views: 769
created_at: "2024-01-19 15:10:25"
updated_at: "2025-04-01 01:07:51"
crawl_date: "2026-03-18"
---

# 引入单据的时候,提示“字段”xxx“的值xxxx格式不正确,要求整数部分不能大于13位,小数部分不能大于2位。”要怎么解决

> 产品：金蝶云·星辰 | 分类：系统设置 | 类型：常见问题
> 作者：进销存赵嘉丽 | 阅读：769 | 有用：1
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/568964267110664448)

**【问题描述】**

引入单据的时候,引入失败,失败文件提示“字段”XXX“的值XXXX格式不正确,要求整数部分不能大于13位,小数部分不能大于2位。”要怎么解决?

![](https://vip.kingdee.com/download/0109d134846ed32b4da9a630e0d7f06c49f0.png)

![](https://vip.kingdee.com/download/0109ffb1ef0c31ec4fd784bcece022743f00.png)

**【问题说明】**

一般出现这种提示是因为引入文件上的字段(通常是单位、数量、金额相关的字段)与系统的精度不一致导致的。

如上述例子中:

第一行商品行的数量录入了100.55555

![](https://vip.kingdee.com/download/010994eaad7bc86c4c93bb7f31f9abd78ee2.png)
而系统里,单位【件】的实际精度只有2位

![](https://vip.kingdee.com/download/0109f13e8c405e574f08bd4fcabc1afe7479.png)
因此当引入的数值精度大于系统设置的精度时,就会引入失败。

其他字段(单价、价税合计、辅助数量等数值型字段也是一样的道理)

**【解决办法】**

修改引入文件字段的格式,改成与系统设置的精度一致后再重新引入即可。

![](https://vip.kingdee.com/download/0109bed8ea422e2f4f978fe3e3d8c668705c.png)
