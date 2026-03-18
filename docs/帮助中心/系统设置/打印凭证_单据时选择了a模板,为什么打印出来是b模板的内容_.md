---
title: "打印凭证/单据时选择了a模板,为什么打印出来是b模板的内容?"
product: "金蝶云·星辰"
category: "系统设置"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/788935132743949568"
author: "杨桂平"
views: 69
created_at: "2025-12-16 17:35:33"
updated_at: "2025-12-17 01:06:33"
crawl_date: "2026-03-18"
---

# 打印凭证/单据时选择了a模板,为什么打印出来是b模板的内容?

> 产品：金蝶云·星辰 | 分类：系统设置 | 类型：常见问题
> 作者：杨桂平 | 阅读：69 | 有用：1
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/788935132743949568)

【问题描述】

打印凭证/单据时选择了A模板,为什么打印出来是B模板的内容?

【业务场景】

打印凭证/单据时打印设置中选择模版是A模板,但是打印出来却是B模板的内容。

以打印凭证为例:在打印设置中选择的模板是“A4打印三张凭证”,点击确定后再点击打印预览,调用的却是其他的打印模板“金蝶记账凭证KP-J101_210mmⅹ140mm_新.pdf”?
![](https://vip.kingdee.com/download/010997977d6637124541879c07180cdac143.png)
【解决方案】

在打印凭证/单据的打印设置中的“基础设置”和“按条件设置”里面都可以选择打印模板,**并且“按条件设置”的规则优先于“基础设置”**,如果在基础设置中选择了打印模板不生效,请点击“按条件设置”是否启用了打印规则,若开启了请在“启用”列选择关闭“按条件设置”中所有选项,或者在按条件设置中选择正确的打印模板后再进行打印。

![](https://vip.kingdee.com/download/01094e285a2efd594de5bec11c9b3be1de56.png)

【相关知识】

[修改打印模版后为什么不生效?打印出来的内容和模版内容不一样?](https://vip.kingdee.com/knowledge/639992534588167424?productLineId=35&isKnowledge=2&lang=zh-CN)

[单据/凭证的打印模板为什么找不到了?](https://vip.kingdee.com/knowledge/718993238052219904?productLineId=35&isKnowledge=2&lang=zh-CN)

更多打印相关内容请点击:[星辰3.1打印手册](https://vip.kingdee.com/knowledge/788701063116777216?specialId=454242075429607424&productLineId=35&isKnowledge=2&lang=zh-CN)
