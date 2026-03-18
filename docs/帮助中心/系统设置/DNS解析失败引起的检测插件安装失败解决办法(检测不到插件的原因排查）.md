---
title: "DNS解析失败引起的检测插件安装失败解决办法(检测不到插件的原因排查）"
product: "金蝶云·星辰"
category: "系统设置"
type: "进阶技巧, 精华汇总, 常见问题"
source: "https://vip.kingdee.com/knowledge/286194249765619968"
author: "进销存赵嘉丽"
views: 8157
created_at: "2022-02-28 17:53:46"
updated_at: "2025-11-11 14:50:41"
crawl_date: "2026-03-18"
---

# DNS解析失败引起的检测插件安装失败解决办法(检测不到插件的原因排查）

> 产品：金蝶云·星辰 | 分类：系统设置 | 类型：进阶技巧, 精华汇总, 常见问题
> 作者：进销存赵嘉丽 | 阅读：8157 | 有用：9
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/286194249765619968)

# 【问题描述】

按知识：[选择插件打印后，点击打印，页面提示“检测到未安装最新的打印插件”是什么原因？如何解决？](https://vip.kingdee.com/link/s/ZViAr)** **所有步骤排查后，还是提示无法检查到插件，这是什么原因？

![上传图片](https://vip.kingdee.com/download/0100a01b3c670e2b416482403424d5731410.png)

# 【适用版本】

星辰所有版本

# 【原因解析】

当用户的电脑没有使用代理（VPN），而计算机的“服务”也是启用的，那么这个时候还有一种比较少见的情况，那就是用户电脑的DNS（即Domain Name System（域名系统），下文统称DNS。）解析出现了异常，那么就需要对DNS重新做配置。

# 【DNS自查流程】

![上传图片](https://vip.kingdee.com/download/0100c78f02f516b344ce8579806df4b67def.png)

# 【详细操作步骤】

注明：其中①③④⑤分步骤讲解的同时，下方会有GIF演示，如有不明白的，可以查看点击放大查看演示顺序。点击右侧导航栏标题也可以快速跳转到对应的位置哦。

## **① 测试本地服务**

打开安装在本地的“金蝶云·星辰打印”，找到“打印设置”，单击“测试本地服务”

![上传图片](https://vip.kingdee.com/download/01008a658b854cc24f9fbda4da25e4412646.png)

会出现一个网页，查看最后的状态，如果是“success”，则本地电脑的DNS没有问题，

![上传图片](https://vip.kingdee.com/download/0100092b52cb766f4d90abf574d4b0947e38.png)

需要回到之前的插件检测排查帖子（[选择插件打印后，点击打印，页面提示“检测到未安装最新的打印插件”是什么原因？如何解决？](https://vip.kingdee.com/link/s/ZViAr)）中下一步检查即可。

## **② 如****果打不开网页，浏览器显示如下图，则DNS确实有问题**

![](https://vip.kingdee.com/download/0100ce7b5af44ef4415e86b42575c49d2287.png)

## **③ 在电脑host文件中添加dns解析配置**

**注：此步骤需要需要用电脑自带的程序【记事本】**![](https://vip.kingdee.com/download/010927371daece094371874e9dcb33b2e4c1.png)

步骤③一共有2个动作，

- **动作一：修改本地电脑的host文件的属性，并保存**

**具体操作：**打开电脑，复制路径**C:\Windows\System32\drivers\etc** 找到host文件，右击属性，并去掉“只读”

![](https://vip.kingdee.com/download/0100b2990f09f3df4035abe088e1d7fac681.png)

GIF演示：

![](https://vip.kingdee.com/download/0100d2f3fcfb5389460ea37ad901dffaabc1.gif)

- **动作二：****用管理员身份【记事本】打开host文件（很重要！）****，并添加DNS配置，保存**

**具体操作：先用管理员身份运行打开【记事本】：**

![](https://vip.kingdee.com/download/0109e488944628e84d59a9efd1fa127a3b8e.png)

在【记事本】文件中打开，粘贴上一步同样的路径C:\Windows\System32\drivers\etc 找到host文件并打开：

![](https://vip.kingdee.com/download/0109ec5c9bc083d44cc6bf007e740ea0423a.png)

然后在host文件中，回车换行并录入**127.0.0.1   localsrv.jdy.com** （直接复制红色字体）点击保存即可

![](https://vip.kingdee.com/download/0109c15ce81cc4464a5aaa9123b5e65d4fa1.png)GIF演示：

![](https://vip.kingdee.com/download/0109189ebee2c163429d8e10e9ed93d91246.gif)

>
**注意：有的电脑在最后一步【保存】这里会提示只有管理员身份才能操作，如出现以下提示，请务必按步骤③的动作二来操作即可。**

**![](https://vip.kingdee.com/download/010947c6202624af4b1fa70c7ae1811928ff.png)**

## **④ 清除DNS缓存**

1）先在电脑开始菜单搜索cmd（又叫命令提示符），以管理员身份打开

![](https://vip.kingdee.com/download/010080ad29d95d894eddbfa40408f20a0421.png)

2）在打开的页面“>”右侧输入ipconfig /flushdns ，敲回车，如出现“已成功刷新DNS解析缓存”即可。

![](https://vip.kingdee.com/download/01003a1a2fb082484d3f85659a89b4fc85fb.png)

GIF演示：

![](https://vip.kingdee.com/download/01004c039420639b40f98e4f919a4d074ea7.gif)

## **⑤ 重新测试本地电脑的DNS是否有效**

重复跟第一步检测方法一样，浏览器中出现success即表示已经安装成功，打印服务已经恢复正常。

![上传图片](https://vip.kingdee.com/download/01006f44f4fa2d574429b1aba1b203e0e85f.png)

## **⑥ 成功后回到星辰，刷新页面，重新使用插件打印即可**
