---
title: "如何将a科目的数据转移到b科目?"
product: "金蝶云·星辰"
category: "账务处理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/734215129960387072"
author: "ylim"
views: 114
created_at: "2025-07-18 15:23:01"
updated_at: "2026-02-11 02:55:33"
crawl_date: "2026-03-18"
---

# 如何将a科目的数据转移到b科目?

> 产品：金蝶云·星辰 | 分类：账务处理 | 类型：常见问题
> 作者：ylim | 阅读：114 | 有用：1
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/734215129960387072)

【问题描述】

如何将A科目的数据转移到B科目?

【业务场景】

A科目的科目信息录入有误,但是已经有很多凭证信息了无法修改,新建了一个B科目,需把A科目的数据都转到B科目上,保证数据的连贯性。

【操作步骤】

可以通过查询凭证后导出,批量替换科目后再覆盖导入,若是涉及已结账期间的数据,需先**[反结账](https://vip.kingdee.com/link/s/ZJPjd)**,建议先**[备份](https://vip.kingdee.com/link/s/ZJPXh)**再操作;若修改的是损益科目,覆盖引入后需删除原有损益科目重新结转,之后再结账到最新期间。

点击【账务处理】>【查凭证】

![](https://vip.kingdee.com/download/010941ba6460381c43d383e65cf454c98466.png)

可通过科目编码查询出相关凭证,点击引出按钮下的<按引入模板引出>
![](https://vip.kingdee.com/download/01093be2942eb59a4be687eabe7a76bb81d3.png)
选择要用的模板,点击<确定>

![](https://vip.kingdee.com/download/0109fc9a96fb2aeb466ba16ea29beed8405b.png)
打开下载的凭证文件,使用查找替换功能(替换快捷键:ctrl+H),录入好要查询和替换的内容后,点击<全部替换>,分别操作替换科目编码和科目名称后保存文件

![](https://vip.kingdee.com/download/01099c72f76831944cf9915dd28f5569e09e.png)
到系统中点击查凭证右上角的<引入>,选择“覆盖新增”,上传文件后点击<开始引入> (注意:若原凭证已审核,需先反审核)

![](https://vip.kingdee.com/download/0109f645a168ce1f4e1cba9fb18efc5f8e1a.png)
若想要在不变动历史凭证数据的情况下转移余额,可考虑直接手工新增凭证结转余额,如下图显示

![](https://vip.kingdee.com/download/01095511fb9275554b44989aabe4f0c93e16.png)

![](https://vip.kingdee.com/download/0109fe70b3b081c34ec4b03d7bdf1938d7b2.png)
调整后的余额数据则显示在新科目上。

![](https://vip.kingdee.com/download/010901249f2464824e98bdd0fea3beb93f6f.png)【温馨提示】

**1.已冲销的凭证不允许覆盖引入;**

**2.若是涉及财务初始余额,可到财务初始余额中删除原有科目的金额并在新科目中录入数据:[如何录入/修改财务初始余额?](https://vip.kingdee.com/link/s/ZvGIb)**
