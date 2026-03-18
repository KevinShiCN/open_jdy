---
title: " 打印实践案例——支持单据导出为EXCEL功能"
product: "金蝶云·星辰"
category: "系统设置"
type: "功能介绍, 新特性, 快速入门"
source: "https://vip.kingdee.com/knowledge/443852856647411968"
author: "进销存赵嘉丽"
views: 5252
created_at: "2023-05-09 19:12:47"
updated_at: "2025-03-04 10:47:24"
crawl_date: "2026-03-18"
---

#  打印实践案例——支持单据导出为EXCEL功能

> 产品：金蝶云·星辰 | 分类：系统设置 | 类型：功能介绍, 新特性, 快速入门
> 作者：进销存赵嘉丽 | 阅读：5252 | 有用：26
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/443852856647411968)

## 1 应用场景

支持按打印模板格式导出execl，方便做二次加工后再打印或者发送给客户，灵活满足不同的业务场景

## 2 适用版本

星辰3.1以上所有版本

## 3 功能介绍

1、适用范围：进销存所有的业务单据，报表暂不支持。在现有单据详情、单据列表打印按钮下增加按钮“导出为EXCEL，

单据详情：

![](https://vip.kingdee.com/download/01000756bd37dd30488ab7f5e078baee28a5.png)

单据列表

![](https://vip.kingdee.com/download/010097fe8ee96e4a4d239871f0ab57553c99.png)

2、点击后按打印设置中的打印模板、打印参数（包括二维打印、汇总打印、序列号拆分打印等勾选项）直接导出EXCEL格式文件，EXCEL的文件名与打印设置中的模板名称保持一致

3、列表支持选择多张单或一张单是多页的情况导出excel，效果与下载的PDF文件一致

4、导出成EXCEL不计入打印次数，不受打印控制

5、导出后会有操作日志，内容描述需要为“单据编号****打印导出为EXCEL成功”（如下图）

![](https://vip.kingdee.com/download/0100dda5fbd5fa734fd78895e0ec5436deaf.png)

6、权限控制：支持导出excel的单据的功能授权中增加“打印导出为EXCEL”，默认不勾选，勾选后才可操作导出为EXCEL。

![](https://vip.kingdee.com/download/01002721efeb353349d087bf2fa7ca4aa20b.png)

## 4 应用流程

1）在【打印-打印设置】里选择要要引出的模板，确定好打印参数（打印空白行、打印表格线等等），点击确定

![](https://vip.kingdee.com/download/0100c6e071334d874f53b99518fe9f5bda6c.png)

2）点击【打印-导出为excel】

![](https://vip.kingdee.com/download/0100570c2cffdc3546a98fa2a2ffe5aef995.png)

浏览器里会自动下载该引出文件，存储的位置取决于用户浏览器的默认下载地址设置。

![](https://vip.kingdee.com/download/01002620e695efbe4859839edd3c1f98bfad.png)

3、打开下载好的excel文件，进行查看和编辑即可

![](https://vip.kingdee.com/download/0100743427cbe34f4ffdb6523aa82cb57c5d.png)

## 常见问题及解决方案

### 1、导出excel后，字段缺失了

现象：

![上传图片](https://vip-admin.kingdee.com/download/01004d9db5824cb946eb8e63e729e901277d.png)

原因：使用导出excel功能时，需要注意，打印模板里的字段不能有重叠，否则导出会无法正常显示字段，如下图：

![上传图片](https://vip.kingdee.com/download/0100edf1355ccfd541b69f559d236320a46f.png)导出后效果：

![上传图片](https://vip.kingdee.com/download/01004d9db5824cb946eb8e63e729e901277d.png)

解决办法：正确的字段布局格式：

![上传图片](https://vip-admin.kingdee.com/download/0100edc46f9d04c34fbea545049eb57ce1d1.png)

导出后效果：

![上传图片](https://vip.kingdee.com/download/0100afca56c1f4b94dc58ba004ab09399f2f.png)

### 2、打印模板是正常的，但导出时，发现表格的内容全部挤到一起了

现象：

打印模板是正常的

![上传图片](https://vip.kingdee.com/download/01006742da3087a44093b8f18fffbca53bad.png)

导出时显示都挤到一起了

![上传图片](https://vip.kingdee.com/download/0100cb53f60e4b154d4cae65e086aae017c1.png)

原因：画布外有多余的字段

![上传图片](https://vip.kingdee.com/download/01007e058a6a2ee4421ea10451ff4ead1e67.png)

解决办法：

1）先把纸张尺寸改大一些，找到多余的字段，删除

![上传图片](https://vip.kingdee.com/download/0100fd92d53562f3445babd8fe998bd67204.png)

2）把尺寸改回原来正确的尺寸，保存模板

3）重新导出成excel即可
