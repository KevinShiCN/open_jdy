---
title: "单据/凭证/报表如何按打印模板格式导出excel表?"
product: "金蝶云·星辰"
category: "系统设置"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/512070781279177984"
author: "_Leo"
views: 2299
created_at: "2023-08-24 11:26:43"
updated_at: "2026-03-06 01:32:00"
crawl_date: "2026-03-18"
---

# 单据/凭证/报表如何按打印模板格式导出excel表?

> 产品：金蝶云·星辰 | 分类：系统设置 | 类型：常见问题
> 作者：_Leo | 阅读：2299 | 有用：4
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/512070781279177984)

【问题描述】

单据/凭证/报表如何按打印模板格式导出excel表?

【解释说明】

凭证和应收应付报表支持按打印模板导出为excel,单据同时还支持不同单据按打印模板合并导出为excel(如需设置导出的内容样式,需调整对应打印模板:[如何设置自定义打印模板?](https://vip.kingdee.com/link/s/ZBKhB))

【操作流程】

财务报表暂不支持按打印模板格式导出excel,进销存仅**应收应付报表支持**按打印模板导出excel

**若是使用的是升级3.1之前的旧模板,请把模版升级后按升级后的模版导出**可参考:**[星辰3.1新旧模板使用说明](https://vip.kingdee.com/link/s/lNMzt)**

在现有单据详情、单据列表、凭证详情、凭证列表、应收应付报表打印按钮下增加按钮“导出为EXCEL"。

例如:在销售出库单打印的界面,展开【打印】按钮后面的下拉键,点击【导出为Excel】即可,如图:

![](https://vip.kingdee.com/download/010935d00382b0a14ae1b957d41401173f96.png)
应收应付模块下,支持打印的报表在打印按钮下可点击【导出为excel】或【打印导出excel】

![](https://vip.kingdee.com/download/0109f9ab21c69f234b7ba963dc880f870866.png)![](https://vip.kingdee.com/download/010960da7180ad6f40c6a5b615430065f474.png)

在单据列表也可以操作“导出为excel”,同时还支持勾选不同单据操作“合并导出为excel”(凭证及应收应付报表不支持合并导出为excel)

![](https://vip.kingdee.com/download/0109a44a24b1ddeb4e23ab08e7161a30e693.png)导出效果如下:![](https://vip.kingdee.com/download/0109fd86482c953c4be7ab3a370d491e1a30.png)![](https://vip.kingdee.com/download/010941eaa17cad5e4204b956928ea3b00343.png)
按打印模板合并导出为excel支持的单据如下:

![](https://vip.kingdee.com/download/010945f5600fb99a4acfae13102157084b7f.png)

【注意事项】

**1、导出为excel**

①、点击后按打印设置中的打印模板、打印参数(包括二维打印、汇总打印、序列号拆分打印等勾选项)直接导出EXCEL格式文件,EXCEL的文件名与打印设置中的模板名称保持一致

②、列表支持选择多张单或一张单是多页的情况导出excel,效果与下载的PDF文件一致
③、导出成EXCEL不计入打印次数,不受打印控制

④、导出后会有操作日志,内容描述需要为“单据编号****打印导出为EXCEL成功”

**2、合并导出为excel**

①合并打印仅支持3.1新模板,2.0旧模板不支持合并打印,如需使用,请先升级为新模板,升级方法请点击 [星辰3.1新旧模板使用说明](https://vip.kingdee.com/link/s/l6Dz4);

②若多张单据为不同客户,但打印模板中又设计了**单据头字段**(如客户、单据编号、成交金额、客户承担费用等等),合并打印时只打印第一张选取单据的单据头信息进行打印;

③如果数据表格中的合计行绑定了**单据头字段**(如客户、单据编号、成交金额、客户承担费用等等),那么多单打印时,不管所选单据的客户/供应商是否一致,同样只能打印第一张单的单据头信息;

④单据上的物流信息、同单收款信息、费用信息属于分录表体,若需要合并打印请在打印模板中设计数据表格取数;否则只打印所有分录合并后的第一行分录。

****

【更多推荐】

[打印导出Excel功能](https://vip.kingdee.com/article/443852856630634752?get_from=article-id&productLineId=35&isKnowledge=2)

[升级3.1后,打印模板无法编辑/无法打印?](javascript:void(0);)
