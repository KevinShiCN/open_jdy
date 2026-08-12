export const meta = {
  name: 'verify-yxc-full-update',
  description: '验收金蝶云星辰全部 394 页文档更新（227 页新爬段）：完整性、diff 语义、内容质量、索引',
  phases: [
    { title: 'Check', detail: '四维独立检查并行' },
    { title: 'CrossVerify', detail: '完整性双实现交叉核对' },
  ],
}

const ROOT = '/home/dev/Projects/Online_APIs/open_jdy'
const DOCS = ROOT + '/docs/金蝶云星辰'
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
背景：今天用 headless 爬虫把金蝶云星辰全部 394 页 API 文档更新到最新（open.jdy.com 官方文档站）。进销存云 167 页已在前一轮验收过（已知结论：真实更新仅销售订单详情，其余 SAME 或已还原）。本轮爬取的是其余 227 页（指导文档/审批流/自定义云/财税云/零售云/生产云/基础资料/系统设置）。你的任务是独立复核一个维度，输出结构化 JSON。
规则：
- 必须用 Bash 实际执行命令验证，禁止凭空推断
- 导航树在 ${NAV}（全部 394 页，page.path[0] 为顶层分类名）
- 本地文档在 ${DOCS}（文件名 = title 清洗 /[<>:"/\\\\|?*]/g→'_' 后 trim，子目录 = path.slice(1,-1)）
- 爬取日志 ${LOG} 的 [4/4] crawl 段（Total: 227）记录本轮每页状态
- 已知历史遗留（非本轮引入，勿报为新问题）：每份文档正文后附整页原始 HTML 重复块`

const A = {
  label: 'completeness-all-nav-to-file',
  prompt: common + `
【维度 A：导航 → 文件完整性（全 394 页）】
对 nav 全部 394 页计算期望文件路径，用 node 和 bash 两种独立实现各验证一遍存在性。
重点：本轮 [4/4] 段爬的 227 页 + 导航本轮新增/删除页面（nav-diff.json：+3/-3，均在基础资料附近）。
输出：navTotal、missing 清单（应为空）、两遍实现一致性、nav-diff 新增页文件是否已生成。`,
  schema: SCHEMA,
}

const B = {
  label: 'completeness-all-file-to-nav',
  prompt: common + `
【维度 B：文件 → 导航完整性（全 394 页）】
walk ${DOCS} 下所有 .md，反推每个文件是否在 nav 394 页中有对应条目。
用 bash find + node 两种方式交叉验证。
特别关注：nav-diff 删除的 3 个页面（基础资料）对应的本地文件是否构成孤儿（若标题与新增页相同则不算孤儿，说明是 URL 变更）。
输出：fileTotal、orphan 清单、两遍结果一致性。`,
  schema: SCHEMA,
}

const C = {
  label: 'diff-semantics-227',
  prompt: common + `
【维度 C：git diff 语义审查（本轮 227 页段）】
执行: git -C ${ROOT} diff -- "docs/金蝶云星辰/" 获取全部变化文件。
对每个变化文件核对：
1. 是否为「金蝶线上真实更新」（last_update 变化 + 正文相应变化）——可用 CDP 单例（http://127.0.0.1:18932，playwright connectOverCDP 可用）抽查线上页面验证
2. 有没有正文意外丢失（表格缺失、API 地址截断、示例代码损坏）
3. 有没有「模板瞬态渲染」假更新（如 TOC 锚点文字与正文小节标题不一致）——已知上一轮进销存云出现过 params参数→body参数 假更新，本轮 227 页若出现同类问题必须列出
已知历史遗留：每份文档正文后附整页原始 HTML 重复块（非本轮引入，勿报）。
输出：变化文件清单、每个文件的 diff 性质判断、发现的任何内容损坏或假更新。`,
  schema: SCHEMA,
}

const D = {
  label: 'content-quality-227-sample',
  prompt: common + `
【维度 D：内容质量抽查（227 页段）】
抽查至少 8 份本轮爬取的文档（覆盖基础资料/财税云/零售云/生产云/系统设置/指导文档/审批流/自定义云各至少 1 份），每份检查：
1. frontmatter 完整（title/product/category/source/last_update/crawl_date）
2. 正文非空且 >2000 字符
3. 含 API 地址或有效文档内容
4. 表格渲染正常
5. 无 HTML 残留（注意：文末 HTML 重复块是历史遗留，不算 FAIL；若正文中段混入 HTML 标签则算）
输出：每份文档检查结果 + 总 PASS/FAIL。`,
  schema: SCHEMA,
}

const E = {
  label: 'index-full-consistency',
  prompt: common + `
【维度 E：索引一致性（全量）】
1. ${ROOT}/docs/INDEX.md 中金蝶云星辰区域链接总数应为 394（URL-encoded 路径）
2. 逐个 URL-decode 验证目标文件存在
3. INDEX.md 统计行「共 N 个 API 页面」应 = 394 + 168 = 562
输出：链接数、断链清单、统计行数字。`,
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
A（导航→文件）: ${JSON.stringify(results[0])}
B（文件→导航）: ${JSON.stringify(results[1])}
核对两者结论是否一致（A 的 missing 与 B 的 orphan 双向互证），判定完整性验收是否成立。
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
