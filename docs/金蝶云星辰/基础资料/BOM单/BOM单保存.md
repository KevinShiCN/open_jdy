---
title: "BOM单保存 更新于2025-07-10 21:12 复制链接"
product: "金蝶云星辰"
category: "基础资料 > BOM单 > BOM单保存"
source: "https://open.jdy.com/#/files/api/detail?index=3&categrayId=3cc8ee9a663e11eda5c84b5d383a2b93&id=9c2b5ef7712511eda0b383902424790b"
last_update: "2025-07-10 21:12"
crawl_date: "2026-03-03"
---

# BOM单保存 更新于2025-07-10 21:12 复制链接

> 产品：金蝶云星辰 | 分类：基础资料 > BOM单 > BOM单保存

BOM单保存 更新于2025-07-10 21:12 复制链接    一级标题 二级标题 三级标题 四级标题 五级标题 六级标题                添加图片链接 上传图片
                                         
```
### 基本信息
- 用途说明：BOM单列表新增及修改。审核、删除等详见[通用操作接口](https://open.jdy.com/#/files/api/detail?index=2&categrayId=3cc8ee9a663e11eda5c84b5d383a2b93&id=9e804b8c712511eda0b39f724d124b07)
- 请求方式：POST
- 请求地址：https://api.kingdee.com/jdy/v2/bd/bom
### 请求参数
#### headers参数
| 参数名称               | 参数示例                        | 是否必填 | 参数说明                                                                                                                                                             |
| --- | --- | --- | --- |
| Content-Type       | application/json            | true | 固定传：application/json                                                                                                                                             |
| X-Api-ClientID     | 205022                      | true | 应用id，[创建指引](https://open.jdy.com/#/files/api/detail?index=3&categrayId=316e1f5bd9d711ed8e36c17691e84ff5&id=a540e3dcd9d811ed8e3677dc79b66e86&noside=true)         |
| X-Api-Auth-Version | 2.0                         | true | 固定传:2.0                                                                                                                                                          |
| X-Api-TimeStamp    | 1655775240000               | true | 当前时间毫秒时间戳，有效期为5min                                                                                                                                               |
| X-Api-SignHeaders  | X-Api-TimeStamp,X-Api-Nonce | true | 固定传：X-Api-TimeStamp,X-Api-Nonce                                                                                                                                  |
| X-Api-Nonce        | 1655775240000               | true | 随机正整数                                                                                                                                                            |
| X-Api-Signature    | xxx                         | true | [参考加密规则](https://open.jdy.com/#/files/api/detail?index=3&categrayId=5403e0fd6a5811eda819b759130d6d33&id=b5c26557da9d11ed8e36f9799578d2e1&noside=true)            |
| app-token          | xxx                         | true | 产品账套级别的token，[获取指引](https://open.jdy.com/#/files/api/detail?index=3&categrayId=5403e0fd6a5811eda819b759130d6d33&id=9076d1a6da9d11ed8e36874bed64e0be&noside=true) |
| X-GW-Router-Addr   | https://tf.jdy.com          | true | IDC域名，获取appKey返回消息体内的domain字段                                                                                                                                    |

#### body参数
| 参数名称                | 参数类型                  | 是否必填  | 参数说明                                                                                                 |
| --- | --- | --- | --- |
| material_entity     | List <MaterialEntity> | true  | 子料分录                                                                                                 
| number              | string                | true  | BOM单编号,不传递则由后台生成（不设置有编码规则和更新时必传）                                                                     
| product_id          | string                | true  | 产品ID                                                                                                 
| product_unit_id     | string                | true  | 产品单位ID                                                                                               
| version             | string                | true  | 版本号                                                                                                  
| version_value       | string                | true  | 版本值                                                                                                  
| bom_remark          | string                | false | BOM备注                                                                                                
| custom_field        | Map <string>          | false | 自定义字段[使用指南](https://open.jdy.com/#/files/api/detail?id=76567ff2a06311edaa4b3d71bf0fce53&noside=true) 
| enable              | string                | false | 是否禁用1：启用0：禁用                                                                                         
| id                  | string                | false | 新增不填，更新时必填（id为空时代表新增单据）                                                                              
| isskip              | string                | false | 跳过该层级直接领用下级物料1：是0：否                                                                                  
| product_aux1_id     | string                | false | 产品属性组1ID                                                                                             
| product_aux2_id     | string                | false | 产品属性组2ID                                                                                             
| product_aux3_id     | string                | false | 产品属性组3ID                                                                                             
| product_aux4_id     | string                | false | 产品属性组4ID                                                                                             
| product_aux5_id     | string                | false | 产品属性组5ID                                                                                             
| product_auxprop_id  | string                | false | 辅助属性ID                                                                                               
| product_baseunit_id | string                | false | 产品基本单位ID                                                                                             
| status              | string                | false | 审核状态Z:未审核C:已审核                                                                                       
| yield               | number                | false | 成品率                                                                                                  

**MaterialEntity**
| 参数名称                 | 参数类型         | 是否必填  | 参数说明                                                                                                 |
| --- | --- | --- | --- |
| issue_pattern        | string       | ture  | 发料方式D：直接领料 A：倒冲领料 B：不领料                                                                              
| dosage_numerator     | string       | true  | 材料用量                                                                                                 
| material_id          | string       | true  | 子料ID                                                                                                 
| material_unit_id     | string       | true  | 单位ID                                                                                                 
| aux1_id              | string       | false | 属性组1ID                                                                                               
| aux2_id              | string       | false | 属性组2ID                                                                                               
| aux3_id              | string       | false | 属性组3ID                                                                                               
| aux4_id              | string       | false | 属性组4ID                                                                                               
| aux5_id              | string       | false | 属性组5ID                                                                                               
| custom_entity_field  | Map <string> | false | 自定义字段[使用指南](https://open.jdy.com/#/files/api/detail?id=76567ff2a06311edaa4b3d71bf0fce53&noside=true) 
| custom_txt1          | string       | false | 物料备注1                                                                                                
| custom_txt2          | string       | false | 物料备注2                                                                                                
| custom_txt3          | string       | false | 物料备注3                                                                                                
| dosage_denominator   | string       | false | 产品产量                                                                                                 
| fixed_loss           | number       | false | 固定损耗                                                                                                 
| id                   | string       | false | 分录ID                                                                                                 
| iskeypieces          | string       | false | 关键件1：是0：否                                                                                            
| isrepitem            | string       | false | 替代件1：是0：否                                                                                            
| machinepos           | string       | false | 工位                                                                                                   
| material_auxprop_id  | string       | false | 辅助属性ID                                                                                               
| material_baseunit_id | string       | false | 基本单位ID                                                                                               
| material_name        | string       | false | 子料名称                                                                                                 
| material_number      | string       | false | 子料编码                                                                                                 
| material_remark      | string       | false | 物料备注                                                                                                 
| scrap                | number       | false | 损耗率%                                                                                                 
| seq                  | number       | false | 分录行号                                                                                                 
| sp_id                | string       | false | 发料仓位id                                                                                               
| sp_name              | string       | false | 发料仓位名称                                                                                               
| sp_number            | string       | false | 发料仓位编码                                                                                               
| stock_id             | string       | false | 发料仓库id                                                                                               
| stock_name           | string       | false | 发料仓库名称                                                                                               
| stock_number         | string       | false | 发料仓库编码                                                                                               
| unitqty              | number       | false | 单位用量                                                                                                 

#### 请求示例
```txt
curl --location --request  post 'https://api.kingdee.com/jdy/v2/bd/bom' \
--header 'Content-Type: application/json' \
--header 'X-Api-ClientID: 205022' \
--header 'X-Api-Auth-Version: 2.0' \
--header 'X-Api-TimeStamp: 1655775240000' \
--header 'X-Api-Nonce: 1655775240000' \
--header 'X-Api-SignHeaders: X-Api-TimeStamp,X-Api-Nonce' \
--header 'X-Api-Signature: xxx' \
--header 'app-token: xxx' \
--header 'X-GW-Router-Addr: https://tf.jdy.com' \
--data-row '
{
	"bom_remark":"备注",
	"custom_field":{},
	"enable":"1",
	"id":"14201690",
	"isskip":"1",
	"material_entity":[
		{
			"aux1_id":"1420169116878110000",
			"aux2_id":"1420169116878110000",
			"aux3_id":"1420169116878110000",
			"aux4_id":"1420169116878110000",
			"aux5_id":"1420169116878110000",
			"custom_entity_field":{},
			"custom_txt1":"备注1",
			"custom_txt2":"备注2",
			"custom_txt3":"备注3",
			"dosage_denominator":"1",
			"dosage_numerator":"1",
			"fixed_loss":1,
			"id":"1420169116878110000",
			"iskeypieces":"1",
			"isrepitem":"1",
			"issue_pattern":"D",
			"machinepos":"LOCx1",
			"material_auxprop_id":"1420169116878110000",
			"material_baseunit_id":"1420169116878110000",
			"material_id":"1420169116878110000",
			"material_name":"10",
			"material_number":"142",
			"material_remark":"备注",
			"material_unit_id":"1420169116878110000",
			"scrap":10,
			"seq":1,
			"sp_id":"1",
			"sp_name":"仓位A",
			"sp_number":"001",
			"stock_id":"1",
			"stock_name":"仓库A",
			"stock_number":"001",
			"unitqty":1
		}
	],
	"number":"ABC",
	"product_aux1_id":"1420169116878110000",
	"product_aux2_id":"1420169116878110000",
	"product_aux3_id":"1420169116878110000",
	"product_aux4_id":"1420169116878110000",
	"product_aux5_id":"1420169116878110000",
	"product_auxprop_id":"1420169116878110000",
	"product_baseunit_id":"1420169116878110000",
	"product_id":"1420169116878110000",
	"product_unit_id":"1420169116878110000",
	"status":"Z",
	"version":"V1.0",
	"version_value":"1",
	"yield":100
}'
```
### 响应参数
| 参数名称        | 参数类型    | 参数说明                      |
| --- | --- | --- |
| errcode     | integer | 返回码，成功时为0                 |
| description | string  | 返回信息，成功时为success，失败时为具体信息 |
| data        | Data    | 业务返回具体对象                  |

**Data**
| 参数名称          | 参数类型          | 参数说明     |
| --- | --- | --- |
| id_number_map | Map <string>  | id与编码map 
| ids           | List <string> | 单据id数组对象 

#### 响应示例
```json
{
	"data":{
		"id_number_map":{},
		"ids":[
			"1"
		]
	},
	"description":"success",
	"errcode":0
}
```
#### 返回码
| 返回码                                                                                                                                      | 描述               | 解决方案                                                        |
| --- | --- | --- |
| [公告返回码](https://open.jdy.com/#/files/api/detail?index=2&categrayId=1f51c576013945e2af68ef15d4245a48&id=525e704824d24b178ab466530456c037) | 公告返回码            |                                                             |
| 2000002000                                                                                                                               | 系统错误,请到开发者社区提单反馈 | [开发者社区](https://vip.kingdee.com/developer?productLineId=29) |
```
  
### []()基本信息

- 用途说明：BOM单列表新增及修改。审核、删除等详见[通用操作接口](https://open.jdy.com/#/files/api/detail?index=2&categrayId=3cc8ee9a663e11eda5c84b5d383a2b93&id=9e804b8c712511eda0b39f724d124b07)

- 请求方式：POST

- 请求地址：https://api.kingdee.com/jdy/v2/bd/bom

### []()请求参数

#### []()headers参数

| 参数名称 | 参数示例 | 是否必填 | 参数说明 |
| --- | --- | --- | --- |
| Content-Type | application/json | true | 固定传：application/json |
| X-Api-ClientID | 205022 | true | 应用id，创建指引 |
| X-Api-Auth-Version | 2.0 | true | 固定传:2.0 |
| X-Api-TimeStamp | 1655775240000 | true | 当前时间毫秒时间戳，有效期为5min |
| X-Api-SignHeaders | X-Api-TimeStamp,X-Api-Nonce | true | 固定传：X-Api-TimeStamp,X-Api-Nonce |
| X-Api-Nonce | 1655775240000 | true | 随机正整数 |
| X-Api-Signature | xxx | true | 参考加密规则 |
| app-token | xxx | true | 产品账套级别的token，获取指引 |
| X-GW-Router-Addr | https://tf.jdy.com | true | IDC域名，获取appKey返回消息体内的domain字段 |

#### []()body参数

| 参数名称 | 参数类型 | 是否必填 | 参数说明 |
| --- | --- | --- | --- |
| material_entity | List <MaterialEntity> | true | 子料分录 |
| number | string | true | BOM单编号,不传递则由后台生成（不设置有编码规则和更新时必传） |
| product_id | string | true | 产品ID |
| product_unit_id | string | true | 产品单位ID |
| version | string | true | 版本号 |
| version_value | string | true | 版本值 |
| bom_remark | string | false | BOM备注 |
| custom_field | Map <string> | false | 自定义字段使用指南 |
| enable | string | false | 是否禁用1：启用0：禁用 |
| id | string | false | 新增不填，更新时必填（id为空时代表新增单据） |
| isskip | string | false | 跳过该层级直接领用下级物料1：是0：否 |
| product_aux1_id | string | false | 产品属性组1ID |
| product_aux2_id | string | false | 产品属性组2ID |
| product_aux3_id | string | false | 产品属性组3ID |
| product_aux4_id | string | false | 产品属性组4ID |
| product_aux5_id | string | false | 产品属性组5ID |
| product_auxprop_id | string | false | 辅助属性ID |
| product_baseunit_id | string | false | 产品基本单位ID |
| status | string | false | 审核状态Z:未审核C:已审核 |
| yield | number | false | 成品率 |

**MaterialEntity**

| 参数名称 | 参数类型 | 是否必填 | 参数说明 |
| --- | --- | --- | --- |
| issue_pattern | string | ture | 发料方式D：直接领料 A：倒冲领料 B：不领料 |
| dosage_numerator | string | true | 材料用量 |
| material_id | string | true | 子料ID |
| material_unit_id | string | true | 单位ID |
| aux1_id | string | false | 属性组1ID |
| aux2_id | string | false | 属性组2ID |
| aux3_id | string | false | 属性组3ID |
| aux4_id | string | false | 属性组4ID |
| aux5_id | string | false | 属性组5ID |
| custom_entity_field | Map <string> | false | 自定义字段使用指南 |
| custom_txt1 | string | false | 物料备注1 |
| custom_txt2 | string | false | 物料备注2 |
| custom_txt3 | string | false | 物料备注3 |
| dosage_denominator | string | false | 产品产量 |
| fixed_loss | number | false | 固定损耗 |
| id | string | false | 分录ID |
| iskeypieces | string | false | 关键件1：是0：否 |
| isrepitem | string | false | 替代件1：是0：否 |
| machinepos | string | false | 工位 |
| material_auxprop_id | string | false | 辅助属性ID |
| material_baseunit_id | string | false | 基本单位ID |
| material_name | string | false | 子料名称 |
| material_number | string | false | 子料编码 |
| material_remark | string | false | 物料备注 |
| scrap | number | false | 损耗率% |
| seq | number | false | 分录行号 |
| sp_id | string | false | 发料仓位id |
| sp_name | string | false | 发料仓位名称 |
| sp_number | string | false | 发料仓位编码 |
| stock_id | string | false | 发料仓库id |
| stock_name | string | false | 发料仓库名称 |
| stock_number | string | false | 发料仓库编码 |
| unitqty | number | false | 单位用量 |

#### []()请求示例

```
curl --location --request  post 'https://api.kingdee.com/jdy/v2/bd/bom' \
--header 'Content-Type: application/json' \
--header 'X-Api-ClientID: 205022' \
--header 'X-Api-Auth-Version: 2.0' \
--header 'X-Api-TimeStamp: 1655775240000' \
--header 'X-Api-Nonce: 1655775240000' \
--header 'X-Api-SignHeaders: X-Api-TimeStamp,X-Api-Nonce' \
--header 'X-Api-Signature: xxx' \
--header 'app-token: xxx' \
--header 'X-GW-Router-Addr: https://tf.jdy.com' \
--data-row '
{
	"bom_remark":"备注",
	"custom_field":{},
	"enable":"1",
	"id":"14201690",
	"isskip":"1",
	"material_entity":[
		{
			"aux1_id":"1420169116878110000",
			"aux2_id":"1420169116878110000",
			"aux3_id":"1420169116878110000",
			"aux4_id":"1420169116878110000",
			"aux5_id":"1420169116878110000",
			"custom_entity_field":{},
			"custom_txt1":"备注1",
			"custom_txt2":"备注2",
			"custom_txt3":"备注3",
			"dosage_denominator":"1",
			"dosage_numerator":"1",
			"fixed_loss":1,
			"id":"1420169116878110000",
			"iskeypieces":"1",
			"isrepitem":"1",
			"issue_pattern":"D",
			"machinepos":"LOCx1",
			"material_auxprop_id":"1420169116878110000",
			"material_baseunit_id":"1420169116878110000",
			"material_id":"1420169116878110000",
			"material_name":"10",
			"material_number":"142",
			"material_remark":"备注",
			"material_unit_id":"1420169116878110000",
			"scrap":10,
			"seq":1,
			"sp_id":"1",
			"sp_name":"仓位A",
			"sp_number":"001",
			"stock_id":"1",
			"stock_name":"仓库A",
			"stock_number":"001",
			"unitqty":1
		}
	],
	"number":"ABC",
	"product_aux1_id":"1420169116878110000",
	"product_aux2_id":"1420169116878110000",
	"product_aux3_id":"1420169116878110000",
	"product_aux4_id":"1420169116878110000",
	"product_aux5_id":"1420169116878110000",
	"product_auxprop_id":"1420169116878110000",
	"product_baseunit_id":"1420169116878110000",
	"product_id":"1420169116878110000",
	"product_unit_id":"1420169116878110000",
	"status":"Z",
	"version":"V1.0",
	"version_value":"1",
	"yield":100
}'
```

### []()响应参数

| 参数名称 | 参数类型 | 参数说明 |
| --- | --- | --- |
| errcode | integer | 返回码，成功时为0 |
| description | string | 返回信息，成功时为success，失败时为具体信息 |
| data | Data | 业务返回具体对象 |

**Data**

| 参数名称 | 参数类型 | 参数说明 |
| --- | --- | --- |
| id_number_map | Map <string> | id与编码map |
| ids | List <string> | 单据id数组对象 |

#### []()响应示例

```
{
	"data":{
		"id_number_map":{},
		"ids":[
			"1"
		]
	},
	"description":"success",
	"errcode":0
}
```

#### []()返回码

| 返回码 | 描述 | 解决方案 |
| --- | --- | --- |
| 公告返回码 | 公告返回码 |  |
| 2000002000 | 系统错误,请到开发者社区提单反馈 | 开发者社区 |

 
                <h3><a id="_0"></a>基本信息</h3>
<ul>
<li>用途说明：BOM单列表新增及修改。审核、删除等详见<a href="https://open.jdy.com/#/files/api/detail?index=2&amp;categrayId=3cc8ee9a663e11eda5c84b5d383a2b93&amp;id=9e804b8c712511eda0b39f724d124b07" target="_blank">通用操作接口</a></li>
<li>请求方式：POST</li>
<li>请求地址：https://api.kingdee.com/jdy/v2/bd/bom</li>
</ul>
<h3><a id="_4"></a>请求参数</h3>
<h4><a id="headers_5"></a>headers参数</h4>
<table>
<thead>
<tr>
<th>参数名称</th>
<th>参数示例</th>
<th>是否必填</th>
<th>参数说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>Content-Type</td>
<td>application/json</td>
<td>true</td>
<td>固定传：application/json</td>
</tr>
<tr>
<td>X-Api-ClientID</td>
<td>205022</td>
<td>true</td>
<td>应用id，<a href="https://open.jdy.com/#/files/api/detail?index=3&amp;categrayId=316e1f5bd9d711ed8e36c17691e84ff5&amp;id=a540e3dcd9d811ed8e3677dc79b66e86&amp;noside=true" target="_blank">创建指引</a></td>
</tr>
<tr>
<td>X-Api-Auth-Version</td>
<td>2.0</td>
<td>true</td>
<td>固定传:2.0</td>
</tr>
<tr>
<td>X-Api-TimeStamp</td>
<td>1655775240000</td>
<td>true</td>
<td>当前时间毫秒时间戳，有效期为5min</td>
</tr>
<tr>
<td>X-Api-SignHeaders</td>
<td>X-Api-TimeStamp,X-Api-Nonce</td>
<td>true</td>
<td>固定传：X-Api-TimeStamp,X-Api-Nonce</td>
</tr>
<tr>
<td>X-Api-Nonce</td>
<td>1655775240000</td>
<td>true</td>
<td>随机正整数</td>
</tr>
<tr>
<td>X-Api-Signature</td>
<td>xxx</td>
<td>true</td>
<td><a href="https://open.jdy.com/#/files/api/detail?index=3&amp;categrayId=5403e0fd6a5811eda819b759130d6d33&amp;id=b5c26557da9d11ed8e36f9799578d2e1&amp;noside=true" target="_blank">参考加密规则</a></td>
</tr>
<tr>
<td>app-token</td>
<td>xxx</td>
<td>true</td>
<td>产品账套级别的token，<a href="https://open.jdy.com/#/files/api/detail?index=3&amp;categrayId=5403e0fd6a5811eda819b759130d6d33&amp;id=9076d1a6da9d11ed8e36874bed64e0be&amp;noside=true" target="_blank">获取指引</a></td>
</tr>
<tr>
<td>X-GW-Router-Addr</td>
<td>https://tf.jdy.com</td>
<td>true</td>
<td>IDC域名，获取appKey返回消息体内的domain字段</td>
</tr>
</tbody>
</table>
<h4><a id="body_18"></a>body参数</h4>
<table>
<thead>
<tr>
<th>参数名称</th>
<th>参数类型</th>
<th>是否必填</th>
<th>参数说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>material_entity</td>
<td>List &lt;MaterialEntity&gt;</td>
<td>true</td>
<td>子料分录</td>
</tr>
<tr>
<td>number</td>
<td>string</td>
<td>true</td>
<td>BOM单编号,不传递则由后台生成（不设置有编码规则和更新时必传）</td>
</tr>
<tr>
<td>product_id</td>
<td>string</td>
<td>true</td>
<td>产品ID</td>
</tr>
<tr>
<td>product_unit_id</td>
<td>string</td>
<td>true</td>
<td>产品单位ID</td>
</tr>
<tr>
<td>version</td>
<td>string</td>
<td>true</td>
<td>版本号</td>
</tr>
<tr>
<td>version_value</td>
<td>string</td>
<td>true</td>
<td>版本值</td>
</tr>
<tr>
<td>bom_remark</td>
<td>string</td>
<td>false</td>
<td>BOM备注</td>
</tr>
<tr>
<td>custom_field</td>
<td>Map &lt;string&gt;</td>
<td>false</td>
<td>自定义字段<a href="https://open.jdy.com/#/files/api/detail?id=76567ff2a06311edaa4b3d71bf0fce53&amp;noside=true" target="_blank">使用指南</a></td>
</tr>
<tr>
<td>enable</td>
<td>string</td>
<td>false</td>
<td>是否禁用1：启用0：禁用</td>
</tr>
<tr>
<td>id</td>
<td>string</td>
<td>false</td>
<td>新增不填，更新时必填（id为空时代表新增单据）</td>
</tr>
<tr>
<td>isskip</td>
<td>string</td>
<td>false</td>
<td>跳过该层级直接领用下级物料1：是0：否</td>
</tr>
<tr>
<td>product_aux1_id</td>
<td>string</td>
<td>false</td>
<td>产品属性组1ID</td>
</tr>
<tr>
<td>product_aux2_id</td>
<td>string</td>
<td>false</td>
<td>产品属性组2ID</td>
</tr>
<tr>
<td>product_aux3_id</td>
<td>string</td>
<td>false</td>
<td>产品属性组3ID</td>
</tr>
<tr>
<td>product_aux4_id</td>
<td>string</td>
<td>false</td>
<td>产品属性组4ID</td>
</tr>
<tr>
<td>product_aux5_id</td>
<td>string</td>
<td>false</td>
<td>产品属性组5ID</td>
</tr>
<tr>
<td>product_auxprop_id</td>
<td>string</td>
<td>false</td>
<td>辅助属性ID</td>
</tr>
<tr>
<td>product_baseunit_id</td>
<td>string</td>
<td>false</td>
<td>产品基本单位ID</td>
</tr>
<tr>
<td>status</td>
<td>string</td>
<td>false</td>
<td>审核状态Z:未审核C:已审核</td>
</tr>
<tr>
<td>yield</td>
<td>number</td>
<td>false</td>
<td>成品率</td>
</tr>
</tbody>
</table>
<p><strong>MaterialEntity</strong></p>
<table>
<thead>
<tr>
<th>参数名称</th>
<th>参数类型</th>
<th>是否必填</th>
<th>参数说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>issue_pattern</td>
<td>string</td>
<td>ture</td>
<td>发料方式D：直接领料 A：倒冲领料 B：不领料</td>
</tr>
<tr>
<td>dosage_numerator</td>
<td>string</td>
<td>true</td>
<td>材料用量</td>
</tr>
<tr>
<td>material_id</td>
<td>string</td>
<td>true</td>
<td>子料ID</td>
</tr>
<tr>
<td>material_unit_id</td>
<td>string</td>
<td>true</td>
<td>单位ID</td>
</tr>
<tr>
<td>aux1_id</td>
<td>string</td>
<td>false</td>
<td>属性组1ID</td>
</tr>
<tr>
<td>aux2_id</td>
<td>string</td>
<td>false</td>
<td>属性组2ID</td>
</tr>
<tr>
<td>aux3_id</td>
<td>string</td>
<td>false</td>
<td>属性组3ID</td>
</tr>
<tr>
<td>aux4_id</td>
<td>string</td>
<td>false</td>
<td>属性组4ID</td>
</tr>
<tr>
<td>aux5_id</td>
<td>string</td>
<td>false</td>
<td>属性组5ID</td>
</tr>
<tr>
<td>custom_entity_field</td>
<td>Map &lt;string&gt;</td>
<td>false</td>
<td>自定义字段<a href="https://open.jdy.com/#/files/api/detail?id=76567ff2a06311edaa4b3d71bf0fce53&amp;noside=true" target="_blank">使用指南</a></td>
</tr>
<tr>
<td>custom_txt1</td>
<td>string</td>
<td>false</td>
<td>物料备注1</td>
</tr>
<tr>
<td>custom_txt2</td>
<td>string</td>
<td>false</td>
<td>物料备注2</td>
</tr>
<tr>
<td>custom_txt3</td>
<td>string</td>
<td>false</td>
<td>物料备注3</td>
</tr>
<tr>
<td>dosage_denominator</td>
<td>string</td>
<td>false</td>
<td>产品产量</td>
</tr>
<tr>
<td>fixed_loss</td>
<td>number</td>
<td>false</td>
<td>固定损耗</td>
</tr>
<tr>
<td>id</td>
<td>string</td>
<td>false</td>
<td>分录ID</td>
</tr>
<tr>
<td>iskeypieces</td>
<td>string</td>
<td>false</td>
<td>关键件1：是0：否</td>
</tr>
<tr>
<td>isrepitem</td>
<td>string</td>
<td>false</td>
<td>替代件1：是0：否</td>
</tr>
<tr>
<td>machinepos</td>
<td>string</td>
<td>false</td>
<td>工位</td>
</tr>
<tr>
<td>material_auxprop_id</td>
<td>string</td>
<td>false</td>
<td>辅助属性ID</td>
</tr>
<tr>
<td>material_baseunit_id</td>
<td>string</td>
<td>false</td>
<td>基本单位ID</td>
</tr>
<tr>
<td>material_name</td>
<td>string</td>
<td>false</td>
<td>子料名称</td>
</tr>
<tr>
<td>material_number</td>
<td>string</td>
<td>false</td>
<td>子料编码</td>
</tr>
<tr>
<td>material_remark</td>
<td>string</td>
<td>false</td>
<td>物料备注</td>
</tr>
<tr>
<td>scrap</td>
<td>number</td>
<td>false</td>
<td>损耗率%</td>
</tr>
<tr>
<td>seq</td>
<td>number</td>
<td>false</td>
<td>分录行号</td>
</tr>
<tr>
<td>sp_id</td>
<td>string</td>
<td>false</td>
<td>发料仓位id</td>
</tr>
<tr>
<td>sp_name</td>
<td>string</td>
<td>false</td>
<td>发料仓位名称</td>
</tr>
<tr>
<td>sp_number</td>
<td>string</td>
<td>false</td>
<td>发料仓位编码</td>
</tr>
<tr>
<td>stock_id</td>
<td>string</td>
<td>false</td>
<td>发料仓库id</td>
</tr>
<tr>
<td>stock_name</td>
<td>string</td>
<td>false</td>
<td>发料仓库名称</td>
</tr>
<tr>
<td>stock_number</td>
<td>string</td>
<td>false</td>
<td>发料仓库编码</td>
</tr>
<tr>
<td>unitqty</td>
<td>number</td>
<td>false</td>
<td>单位用量</td>
</tr>
</tbody>
</table>
<h4><a id="_79"></a>请求示例</h4>
<pre><div class="hljs"><code class="lang-txt">curl --location --request  post &#x27;https://api.kingdee.com/jdy/v2/bd/bom&#x27; \
--header &#x27;Content-Type: application/json&#x27; \
--header &#x27;X-Api-ClientID: 205022&#x27; \
--header &#x27;X-Api-Auth-Version: 2.0&#x27; \
--header &#x27;X-Api-TimeStamp: 1655775240000&#x27; \
--header &#x27;X-Api-Nonce: 1655775240000&#x27; \
--header &#x27;X-Api-SignHeaders: X-Api-TimeStamp,X-Api-Nonce&#x27; \
--header &#x27;X-Api-Signature: xxx&#x27; \
--header &#x27;app-token: xxx&#x27; \
--header &#x27;X-GW-Router-Addr: https://tf.jdy.com&#x27; \
--data-row &#x27;
{
	&quot;bom_remark&quot;:&quot;备注&quot;,
	&quot;custom_field&quot;:{},
	&quot;enable&quot;:&quot;1&quot;,
	&quot;id&quot;:&quot;14201690&quot;,
	&quot;isskip&quot;:&quot;1&quot;,
	&quot;material_entity&quot;:[
		{
			&quot;aux1_id&quot;:&quot;1420169116878110000&quot;,
			&quot;aux2_id&quot;:&quot;1420169116878110000&quot;,
			&quot;aux3_id&quot;:&quot;1420169116878110000&quot;,
			&quot;aux4_id&quot;:&quot;1420169116878110000&quot;,
			&quot;aux5_id&quot;:&quot;1420169116878110000&quot;,
			&quot;custom_entity_field&quot;:{},
			&quot;custom_txt1&quot;:&quot;备注1&quot;,
			&quot;custom_txt2&quot;:&quot;备注2&quot;,
			&quot;custom_txt3&quot;:&quot;备注3&quot;,
			&quot;dosage_denominator&quot;:&quot;1&quot;,
			&quot;dosage_numerator&quot;:&quot;1&quot;,
			&quot;fixed_loss&quot;:1,
			&quot;id&quot;:&quot;1420169116878110000&quot;,
			&quot;iskeypieces&quot;:&quot;1&quot;,
			&quot;isrepitem&quot;:&quot;1&quot;,
			&quot;issue_pattern&quot;:&quot;D&quot;,
			&quot;machinepos&quot;:&quot;LOCx1&quot;,
			&quot;material_auxprop_id&quot;:&quot;1420169116878110000&quot;,
			&quot;material_baseunit_id&quot;:&quot;1420169116878110000&quot;,
			&quot;material_id&quot;:&quot;1420169116878110000&quot;,
			&quot;material_name&quot;:&quot;10&quot;,
			&quot;material_number&quot;:&quot;142&quot;,
			&quot;material_remark&quot;:&quot;备注&quot;,
			&quot;material_unit_id&quot;:&quot;1420169116878110000&quot;,
			&quot;scrap&quot;:10,
			&quot;seq&quot;:1,
			&quot;sp_id&quot;:&quot;1&quot;,
			&quot;sp_name&quot;:&quot;仓位A&quot;,
			&quot;sp_number&quot;:&quot;001&quot;,
			&quot;stock_id&quot;:&quot;1&quot;,
			&quot;stock_name&quot;:&quot;仓库A&quot;,
			&quot;stock_number&quot;:&quot;001&quot;,
			&quot;unitqty&quot;:1
		}
	],
	&quot;number&quot;:&quot;ABC&quot;,
	&quot;product_aux1_id&quot;:&quot;1420169116878110000&quot;,
	&quot;product_aux2_id&quot;:&quot;1420169116878110000&quot;,
	&quot;product_aux3_id&quot;:&quot;1420169116878110000&quot;,
	&quot;product_aux4_id&quot;:&quot;1420169116878110000&quot;,
	&quot;product_aux5_id&quot;:&quot;1420169116878110000&quot;,
	&quot;product_auxprop_id&quot;:&quot;1420169116878110000&quot;,
	&quot;product_baseunit_id&quot;:&quot;1420169116878110000&quot;,
	&quot;product_id&quot;:&quot;1420169116878110000&quot;,
	&quot;product_unit_id&quot;:&quot;1420169116878110000&quot;,
	&quot;status&quot;:&quot;Z&quot;,
	&quot;version&quot;:&quot;V1.0&quot;,
	&quot;version_value&quot;:&quot;1&quot;,
	&quot;yield&quot;:100
}&#x27;
</code></div></pre>
<h3><a id="_151"></a>响应参数</h3>
<table>
<thead>
<tr>
<th>参数名称</th>
<th>参数类型</th>
<th>参数说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>errcode</td>
<td>integer</td>
<td>返回码，成功时为0</td>
</tr>
<tr>
<td>description</td>
<td>string</td>
<td>返回信息，成功时为success，失败时为具体信息</td>
</tr>
<tr>
<td>data</td>
<td>Data</td>
<td>业务返回具体对象</td>
</tr>
</tbody>
</table>
<p><strong>Data</strong></p>
<table>
<thead>
<tr>
<th>参数名称</th>
<th>参数类型</th>
<th>参数说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>id_number_map</td>
<td>Map &lt;string&gt;</td>
<td>id与编码map</td>
</tr>
<tr>
<td>ids</td>
<td>List &lt;string&gt;</td>
<td>单据id数组对象</td>
</tr>
</tbody>
</table>
<h4><a id="_164"></a>响应示例</h4>
<pre><div class="hljs"><code class="lang-json"><span class="hljs-punctuation">{</span>
	<span class="hljs-attr">&quot;data&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-punctuation">{</span>
		<span class="hljs-attr">&quot;id_number_map&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-punctuation">{</span><span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
		<span class="hljs-attr">&quot;ids&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-punctuation">[</span>
			<span class="hljs-string">&quot;1&quot;</span>
		<span class="hljs-punctuation">]</span>
	<span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
	<span class="hljs-attr">&quot;description&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-string">&quot;success&quot;</span><span class="hljs-punctuation">,</span>
	<span class="hljs-attr">&quot;errcode&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-number">0</span>
<span class="hljs-punctuation">}</span>
</code></div></pre>
<h4><a id="_177"></a>返回码</h4>
<table>
<thead>
<tr>
<th>返回码</th>
<th>描述</th>
<th>解决方案</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://open.jdy.com/#/files/api/detail?index=2&amp;categrayId=1f51c576013945e2af68ef15d4245a48&amp;id=525e704824d24b178ab466530456c037" target="_blank">公告返回码</a></td>
<td>公告返回码</td>
<td></td>
</tr>
<tr>
<td>2000002000</td>
<td>系统错误,请到开发者社区提单反馈</td>
<td><a href="https://vip.kingdee.com/developer?productLineId=29" target="_blank">开发者社区</a></td>
</tr>
</tbody>
</table>

             
                    导航目录**    
### []()基本信息

- 用途说明：BOM单列表新增及修改。审核、删除等详见[通用操作接口](https://open.jdy.com/#/files/api/detail?index=2&categrayId=3cc8ee9a663e11eda5c84b5d383a2b93&id=9e804b8c712511eda0b39f724d124b07)

- 请求方式：POST

- 请求地址：https://api.kingdee.com/jdy/v2/bd/bom

### []()请求参数

#### []()headers参数

| 参数名称 | 参数示例 | 是否必填 | 参数说明 |
| --- | --- | --- | --- |
| Content-Type | application/json | true | 固定传：application/json |
| X-Api-ClientID | 205022 | true | 应用id，创建指引 |
| X-Api-Auth-Version | 2.0 | true | 固定传:2.0 |
| X-Api-TimeStamp | 1655775240000 | true | 当前时间毫秒时间戳，有效期为5min |
| X-Api-SignHeaders | X-Api-TimeStamp,X-Api-Nonce | true | 固定传：X-Api-TimeStamp,X-Api-Nonce |
| X-Api-Nonce | 1655775240000 | true | 随机正整数 |
| X-Api-Signature | xxx | true | 参考加密规则 |
| app-token | xxx | true | 产品账套级别的token，获取指引 |
| X-GW-Router-Addr | https://tf.jdy.com | true | IDC域名，获取appKey返回消息体内的domain字段 |

#### []()body参数

| 参数名称 | 参数类型 | 是否必填 | 参数说明 |
| --- | --- | --- | --- |
| material_entity | List <MaterialEntity> | true | 子料分录 |
| number | string | true | BOM单编号,不传递则由后台生成（不设置有编码规则和更新时必传） |
| product_id | string | true | 产品ID |
| product_unit_id | string | true | 产品单位ID |
| version | string | true | 版本号 |
| version_value | string | true | 版本值 |
| bom_remark | string | false | BOM备注 |
| custom_field | Map <string> | false | 自定义字段使用指南 |
| enable | string | false | 是否禁用1：启用0：禁用 |
| id | string | false | 新增不填，更新时必填（id为空时代表新增单据） |
| isskip | string | false | 跳过该层级直接领用下级物料1：是0：否 |
| product_aux1_id | string | false | 产品属性组1ID |
| product_aux2_id | string | false | 产品属性组2ID |
| product_aux3_id | string | false | 产品属性组3ID |
| product_aux4_id | string | false | 产品属性组4ID |
| product_aux5_id | string | false | 产品属性组5ID |
| product_auxprop_id | string | false | 辅助属性ID |
| product_baseunit_id | string | false | 产品基本单位ID |
| status | string | false | 审核状态Z:未审核C:已审核 |
| yield | number | false | 成品率 |

**MaterialEntity**

| 参数名称 | 参数类型 | 是否必填 | 参数说明 |
| --- | --- | --- | --- |
| issue_pattern | string | ture | 发料方式D：直接领料 A：倒冲领料 B：不领料 |
| dosage_numerator | string | true | 材料用量 |
| material_id | string | true | 子料ID |
| material_unit_id | string | true | 单位ID |
| aux1_id | string | false | 属性组1ID |
| aux2_id | string | false | 属性组2ID |
| aux3_id | string | false | 属性组3ID |
| aux4_id | string | false | 属性组4ID |
| aux5_id | string | false | 属性组5ID |
| custom_entity_field | Map <string> | false | 自定义字段使用指南 |
| custom_txt1 | string | false | 物料备注1 |
| custom_txt2 | string | false | 物料备注2 |
| custom_txt3 | string | false | 物料备注3 |
| dosage_denominator | string | false | 产品产量 |
| fixed_loss | number | false | 固定损耗 |
| id | string | false | 分录ID |
| iskeypieces | string | false | 关键件1：是0：否 |
| isrepitem | string | false | 替代件1：是0：否 |
| machinepos | string | false | 工位 |
| material_auxprop_id | string | false | 辅助属性ID |
| material_baseunit_id | string | false | 基本单位ID |
| material_name | string | false | 子料名称 |
| material_number | string | false | 子料编码 |
| material_remark | string | false | 物料备注 |
| scrap | number | false | 损耗率% |
| seq | number | false | 分录行号 |
| sp_id | string | false | 发料仓位id |
| sp_name | string | false | 发料仓位名称 |
| sp_number | string | false | 发料仓位编码 |
| stock_id | string | false | 发料仓库id |
| stock_name | string | false | 发料仓库名称 |
| stock_number | string | false | 发料仓库编码 |
| unitqty | number | false | 单位用量 |

#### []()请求示例

```
curl --location --request  post 'https://api.kingdee.com/jdy/v2/bd/bom' \
--header 'Content-Type: application/json' \
--header 'X-Api-ClientID: 205022' \
--header 'X-Api-Auth-Version: 2.0' \
--header 'X-Api-TimeStamp: 1655775240000' \
--header 'X-Api-Nonce: 1655775240000' \
--header 'X-Api-SignHeaders: X-Api-TimeStamp,X-Api-Nonce' \
--header 'X-Api-Signature: xxx' \
--header 'app-token: xxx' \
--header 'X-GW-Router-Addr: https://tf.jdy.com' \
--data-row '
{
	"bom_remark":"备注",
	"custom_field":{},
	"enable":"1",
	"id":"14201690",
	"isskip":"1",
	"material_entity":[
		{
			"aux1_id":"1420169116878110000",
			"aux2_id":"1420169116878110000",
			"aux3_id":"1420169116878110000",
			"aux4_id":"1420169116878110000",
			"aux5_id":"1420169116878110000",
			"custom_entity_field":{},
			"custom_txt1":"备注1",
			"custom_txt2":"备注2",
			"custom_txt3":"备注3",
			"dosage_denominator":"1",
			"dosage_numerator":"1",
			"fixed_loss":1,
			"id":"1420169116878110000",
			"iskeypieces":"1",
			"isrepitem":"1",
			"issue_pattern":"D",
			"machinepos":"LOCx1",
			"material_auxprop_id":"1420169116878110000",
			"material_baseunit_id":"1420169116878110000",
			"material_id":"1420169116878110000",
			"material_name":"10",
			"material_number":"142",
			"material_remark":"备注",
			"material_unit_id":"1420169116878110000",
			"scrap":10,
			"seq":1,
			"sp_id":"1",
			"sp_name":"仓位A",
			"sp_number":"001",
			"stock_id":"1",
			"stock_name":"仓库A",
			"stock_number":"001",
			"unitqty":1
		}
	],
	"number":"ABC",
	"product_aux1_id":"1420169116878110000",
	"product_aux2_id":"1420169116878110000",
	"product_aux3_id":"1420169116878110000",
	"product_aux4_id":"1420169116878110000",
	"product_aux5_id":"1420169116878110000",
	"product_auxprop_id":"1420169116878110000",
	"product_baseunit_id":"1420169116878110000",
	"product_id":"1420169116878110000",
	"product_unit_id":"1420169116878110000",
	"status":"Z",
	"version":"V1.0",
	"version_value":"1",
	"yield":100
}'
```

### []()响应参数

| 参数名称 | 参数类型 | 参数说明 |
| --- | --- | --- |
| errcode | integer | 返回码，成功时为0 |
| description | string | 返回信息，成功时为success，失败时为具体信息 |
| data | Data | 业务返回具体对象 |

**Data**

| 参数名称 | 参数类型 | 参数说明 |
| --- | --- | --- |
| id_number_map | Map <string> | id与编码map |
| ids | List <string> | 单据id数组对象 |

#### []()响应示例

```
{
	"data":{
		"id_number_map":{},
		"ids":[
			"1"
		]
	},
	"description":"success",
	"errcode":0
}
```

#### []()返回码

| 返回码 | 描述 | 解决方案 |
| --- | --- | --- |
| 公告返回码 | 公告返回码 |  |
| 2000002000 | 系统错误,请到开发者社区提单反馈 | 开发者社区 |

 
            上一篇：BOM单详情
           
            下一篇：BOM单列表
            此文档是否对您有帮助？ 
- ![](/static/img/1.6a1364d.png) 完全没帮助
- ![](/static/img/2.8ec5c89.png) 没帮助
- ![](/static/img/3.365d086.png) 一般
- ![](/static/img/4.c59b49d.png) 有帮助
- ![](/static/img/5.feb168a.png) 非常有帮助

 文章目录 
- [基本信息]()
- [请求参数]()
- [headers参数]()
- [body参数]()
- [请求示例]()
- [响应参数]()
- [响应示例]()
- [返回码]()
