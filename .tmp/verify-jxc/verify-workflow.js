export const meta = {
  name: 'verify-jxc-update',
  description: '验收金蝶云星辰进销存云文档更新：完整性双实现交叉、diff 语义、内容质量、索引一致性',
  phases: [
    { title: 'Check', detail: '四维独立检查并行' },
    { title: 'CrossVerify', detail: '完整性双实现交叉核对' },
  ],
}

const VJ = '/home/dev/Projects/Online_APIs/open_jdy/.tmp/verify-jxc'
const ROOT = '/home/dev/Projects/Online_APIs/open_jdy'
const DOCS = ROOT + '/docs/金蝶云星辰/进销存云'
const NAV = ROOT + '/_meta/金蝶云星辰/nav-tree.json'
const LOG = ROOT + '/_meta/金蝶云星辰/update-jxc-2026-08-13.log'

const SCHEMA = {
  type: 'object',
  properties: {
    verdict: { type: 'string', enum: ['PASS', 'FAIL'] },
    findings: { type: 'array', items: { type: 'string' } },
    evidence: { type: 'string', description: '关键数字与文件路径证据' },
  },
  required: ['verdict', 'findings', 'evidence'],
}

const common = `你是文档更新验收员。工作目录 ${ROOT}。
背景：今天用 headless 爬虫把「进销存云」167 页 API 文档更新到最新（金蝶 open.jdy.com），已跑过一轮基础检查。你的任务是独立复核一个维度，输出结构化 JSON。
规则：
- 必须用 Bash 实际执行命令验证，禁止凭空推断
- 路径含中文，shell 引用时注意
- 导航树在 ${NAV}（进销存云 = path[0]==='进销存云' 的 pages）
- 本地文档在 ${DOCS}（文件名 = title 清洗 /[<>:"/\\\\|?*]/g→'_' 后 trim，子目录 = path.slice(1,-1)）
- 爬取日志 ${LOG} 的 [2/3] crawl 段（Total: 167）记录了每页状态`

const A = {
  label: 'completeness-nav-to-file',
  prompt: common + `
【维度 A：导航 → 文件完整性】
从导航推文件：对 nav 里进销存云全部 167 页，计算期望文件路径，用 existsSync 验证存在。
再用不同的实现思路写第二遍（比如用 bash 循环代替 node 脚本），两次结果必须一致。
输出：navTotal、missing 清单（应为空）、两遍实现结果是否一致的说明。`,
  schema: SCHEMA,
}

const B = {
  label: 'completeness-file-to-nav',
  prompt: common + `
【维度 B：文件 → 导航完整性】
从文件推导航：walk ${DOCS} 下所有 .md（含子目录），检查每个文件是否都能在 nav 的进销存云页面里找到对应条目（按上文的路径映射规则反推）。
用 bash find + node 两种方式各做一遍交叉验证。
输出：fileTotal、orphan 清单（应为空）、两遍结果一致性。`,
  schema: SCHEMA,
}

const C = {
  label: 'diff-semantics',
  prompt: common + `
【维度 C：git diff 语义审查】
执行: git -C ${ROOT} diff -- "docs/金蝶云星辰/进销存云/" 获取本轮全部文档变化。
逐个变化文件核对：
1. 变化是否都是「金蝶线上真实更新」（last_update 变化 + 正文相应变化）或「crawl_date 更新」
2. 有没有正文意外丢失（如表格缺失、API 地址被截断、示例代码损坏）
已知：采购发票单详情的「上一篇/下一篇」链接变空已用 CDP 单例验证是金蝶线上真实变化（非爬虫缺陷）。
输出：变化文件清单、每个文件的 diff 性质判断、发现的任何内容损坏。`,
  schema: SCHEMA,
}

const D = {
  label: 'content-quality-sample',
  prompt: common + `
【维度 D：内容质量抽查】
抽查至少 6 份本地文档（必须包含 2 份本轮更新的：销售订单详情、其他收入单列表；其余 4 份从 167 页里取不同子目录），每份检查：
1. frontmatter 完整（title/product/category/source/last_update/crawl_date）
2. 正文非空且 >2000 字符
3. 含 API 地址（jdy/v2/scm 路径）
4. 表格渲染正常（| --- | 分隔行存在）
5. 无明显的 HTML 残留标签（<div <span 等）
输出：每份文档的检查结果 + 总 PASS/FAIL。`,
  schema: SCHEMA,
}

const E = {
  label: 'index-consistency',
  prompt: common + `
【维度 E：索引一致性】
1. grep ${ROOT}/docs/INDEX.md 中进销存云区域的链接（路径 URL-encoded，中文为 %E8%BF%9B%E9%94%80%E5%AD%98%E4%BA%91），计数应为 167
2. 对每个进销存云链接 URL-decode 后验证目标文件存在（node 脚本做）
3. INDEX.md 头部统计「共 N 个 API 页面」应 = 394 + 168 = 562
输出：链接数、断链清单（应为空）、统计行数字。`,
  schema: SCHEMA,
}

phase('Check')
const results = await parallel([
  () => agent(A.prompt, { label: A.label, phase: 'Check', schema: A.schema }),
  () => agent(B.prompt, { label: B.label, phase: 'Check', schema: B.schema }),
  () => agent(C.prompt, { label: C.label, phase: 'Check', schema: C.schema }),
  () => agent(D.prompt, { label: D.label, phase: 'Check', schema: D.schema }),
  () => agent(E.prompt, { label: E.label, phase: 'Check', schema: E.schema }),
])

phase('CrossVerify')
const cross = await agent(
  common + `
【交叉验证】
下面两个 agent 分别用独立实现做了完整性核对，结果如下：
A（导航→文件）: ${JSON.stringify(results[0])}
B（文件→导航）: ${JSON.stringify(results[1])}
请核对两者结论是否一致（A 的 missing 与 B 的 orphan 双向互证），判定完整性验收是否成立。
输出：crossVerdict PASS/FAIL、不一致点清单。`,
  { label: 'cross-verify', phase: 'CrossVerify', schema: SCHEMA }
)

return {
  dimensions: {
    completenessA: results[0],
    completenessB: results[1],
    diffSemantics: results[2],
    contentQuality: results[3],
    indexConsistency: results[4],
    crossVerify: cross,
  },
}
