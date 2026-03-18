---
title: "pos端如何实现美团点评团购券核销?"
product: "金蝶云·星辰"
category: "门店管理"
type: "常见问题"
source: "https://vip.kingdee.com/knowledge/636731291848825600"
author: "happy忆霖"
views: 9053
created_at: "2024-10-21 19:27:20"
updated_at: "2026-03-06 01:55:56"
crawl_date: "2026-03-18"
---

# pos端如何实现美团点评团购券核销?

> 产品：金蝶云·星辰 | 分类：门店管理 | 类型：常见问题
> 作者：happy忆霖 | 阅读：9053 | 有用：0
> 来源：[金蝶云社区](https://vip.kingdee.com/knowledge/636731291848825600)

【问题描述】

POS端如何实现美团点评团购券核销?

【业务场景】

在美团购买了美团券,需要在星辰pos系统中核销,方便操作

【解决方案】

一、店铺授权

需要先给星辰的门店进行授权,绑定美团开店宝的店铺(目前仅支持有线下收银能力的店铺进行绑定,即开通了支付通道的商家)

点击门店管理-外卖团购-店铺授权

![](https://vip.kingdee.com/download/010990b964347c13486a87eb4058f347dabc.png)

点击店铺授权,选择需要授权的店铺信息

![](https://vip.kingdee.com/download/0109bf216a034cd648e08d727af6983b3185.png)

![](https://vip.kingdee.com/download/0109e42dc0df229a41108ee444319f47c52e.png)

选择对应的门店后,在店铺授权列表中,点击绑定,跳转到美团的界面,输入美团的账号进行绑定

![](https://vip.kingdee.com/download/0109daea42da8cab4ad2bbc315c30a8cdea6.png)

二、店铺授权成功之后,在门店收款方式里会出现一个美团核券的结算方式,默认为开启状态

![](https://vip.kingdee.com/download/01094b6a63da944e48088ff049289b1bd855.png)

POS端也会出现团购验券的开单按钮以及美团核券的结算方式

![](https://vip.kingdee.com/download/010987a590946ee64023a06c8ca6003035e7.png)

三、给美团开店宝中创建的套餐关联星辰商品,以便在星辰POS开单核销美团团购券。

 (1)绑定星辰店铺成功之后,系统会自动同步商家在美团开店宝创建的套餐商品

![](https://vip.kingdee.com/download/01093de0c9e7854f4646a6341fe641af5027.png)

 (2)需要给这些套餐商品关联星辰商品(套餐类)

注:可以选择星辰已经有的套餐或者重新创建套餐关联美团套餐商品。即需要星辰的商品跟美团商品一一对应起来。

![](https://vip.kingdee.com/download/010933ce164224064759a5fded4f614bfa23.png)

 (3)需要给这些代金券类商品关联星辰商品(代金券类)

![](https://vip.kingdee.com/download/0109a078fa51919d474db7565e32478e1cd9.png)

 (4) 店铺授权+商品关联好了,就可以在POS端进行核销券码了。

1.在POS端的开单按钮设置这里找到团购验券的按钮,可以按需将按钮往前移动

![](https://vip.kingdee.com/download/0109e69114c357bc4b6d8715d4ee808f768e.png)

在开单页面左侧栏会显示团购验券按钮

![](https://vip.kingdee.com/download/01098ec0f29f4fef4ee58f3c3d7fadd35ad4.png)

消费者提供在美团上购买的团购套餐券码后,收银员可以通过扫码或者手动输入券码形式进行验券

![](https://vip.kingdee.com/download/0109c462d8389f6d4e30950bbd7f4976ef82.png)

收银机的扫码枪扫描二维码后即可进入核销状态

![](https://vip.kingdee.com/download/0109e376ec771b4345159829b9f16d193229.png)

2.在美团后台创建的次卡类,支持在收银POS端输入一张券码带出其余可用券数。可以选择一次性核销多张,此操作可以方便收银员一次核销多份。

![](https://vip.kingdee.com/download/010922536cb3f02a447181d18a63934c331b.png)

使用之后会显示出来套餐的购买份数,以及使用券数

![](https://vip.kingdee.com/download/0109aff5c4d437ec424884b1a49d6dfe6baf.png)

3.代金券的使用

需要先在开单页面选购优惠券适用商品,被选择的适用商品会在团购券结算的时候进行抵扣

代金券也可以支持一次性核销多张

![](https://vip.kingdee.com/download/01093ce8d9028ac54553bbae74406e51b851.png)

进入到结算的界面,选择需要核销的代金券的张数

![](https://vip.kingdee.com/download/0109ef093f7d38b7430e997d56467e45605a.png)

![](https://vip.kingdee.com/download/01099751a9593b9f421ea97a2b2248921e82.png)

5. 系统支持有效时间内团购券退券,点击源单退货即可退券成功,退券后美团系统会重新发一个新券码到消费者手机上。

四、POS端核销券码后,可以在后台查看单据记录

1.零售单列表记录结算信息

![](https://vip.kingdee.com/download/0109bea0e03f77794d86b774dc0337e439f5.png)

2.团购核销明细表记录团购券核销以及退款的信息,方便业务对账

![](https://vip.kingdee.com/download/01098149dd90acb64d1f8e94551ff0d4fac5.png)

3. POS统计报表-交班报表、收银员收银日报也会记录团购券方式下的结算信息。

![](https://vip.kingdee.com/download/0109a837f2e389a94577878093dbf424c9ab.png)

![](https://vip.kingdee.com/download/010905eb4f5477c243cb9191bed0fc1953d4.png)
【温馨提示】

更多流程设置可以点击[金蝶云·星辰轻餐管理操作手册(含扫码点餐、分区(后厨)打印、外卖对接、团购券核销等)](#/yanzhi/dialog-skill/_blank)进行查询
