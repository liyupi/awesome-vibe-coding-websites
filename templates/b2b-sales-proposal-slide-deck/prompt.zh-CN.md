> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# B2B 销售提案幻灯片演示文稿

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一份交互式 12 页企业 B2B 销售提案网页演示文稿，由虚构的工作流自动化供应商 [BRAND] 为潜在客户 [PROSPECT] 制作。专为高管简报和内部推动者自行审阅而设计，包含交互式 SVG 架构检查器、实时 ROI 回本计算器、90 天推广计划、定价与 SLA 矩阵，以及完整的演示者工具。

- 受众：企业运营副总裁、采购负责人、IT 架构师，以及展示定制软件提案的 B2B 客户经理。
- 目标：让高管利益相关者在问题成本、技术契合度、财务回本期、实施时间线和商务条款上达成一致，推动交易进入签约阶段。
- 语气：自信、分析性强、简洁、适合董事会场合；使用具体的运营指标，不夸大其词，不使用含糊的流行术语。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：lucide-react（ISC）、@fontsource/plus-jakarta-sans（OFL）、@fontsource/ibm-plex-mono（OFL）、@fontsource/fraunces（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中本地导入 @fontsource/fraunces（600、700）、@fontsource/plus-jakarta-sans（400、500、600、700）和 @fontsource/ibm-plex-mono（400、500、600）。
  - 将所有幻灯片文案、指标、架构节点、定价层级和演讲者备注保留在 src/data/deck.ts 中，以便替换变量即可更新整个演示文稿。
  - 在 src/index.css 中配置 @media print，使用 @page { size: landscape; margin: 0; }，在打印每张幻灯片时隐藏导航界面和模态框，使用干净的 16:9 容器并设置 break-after: page。
  - 将当前幻灯片索引持久化到 URL hash（#/slide/1 到 #/slide/12），并支持键盘快捷键（ArrowRight、ArrowLeft、Space、Home、End、G、N、F、Escape）以及水平触摸滑动。

## 变量
- [BRAND] — 供应商品牌名称（默认："RelayWorks"）。虚构的 B2B 软件供应商名称
- [PROSPECT] — 潜在客户公司名称（默认："Meridian Freight"）。正在被推销的虚构客户公司
- [PRODUCT_CATEGORY] — 解决方案类别（默认："Enterprise Workflow Automation"）。对供应商所售产品的简短描述
- [ACV_RANGE] — 目标年度合同价值（默认："$84,000 / year"）。封面和定价幻灯片上的锚定商业数字
- [CONTACT_EMAIL] — 客户执行邮箱（默认："enterprise@relayworks.example"）。结尾幻灯片上的虚构联系地址
- [CREDIT] — 在页脚保留一个小的 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/b2b-sales-proposal-slide-deck（默认：是；删除此行即可移除）

Pages & Sections 下的文案是为默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 象牙白画布（Ivory Canvas）`#F8F7F4` — 主幻灯片背景与舞台表面
- 石板墨（Slate Ink）`#0F172A` — 主标题、正文文本及深色高管对比区块
- 皇家钴蓝（Royal Cobalt）`#2563EB` — 主强调色、激活的图表路径、交互控件及主视觉锚点
- 翡翠成果（Emerald Outcome）`#10B981` — ROI 增益、SLA 保障、正向增量及已验证徽章
- 暖石（Warm Stone）`#E6E4DD` — 细线边框、卡片分隔线及网格轨道
- 柔和石板（Muted Slate）`#475569` — 次级说明文字、坐标轴标签及元数据

### 字体排印
- 展示衬线标题：Fraunces（OFL），字重 600/700
- UI 与正文：Plus Jakarta Sans（OFL），字重 400/500/600/700
- 指标、代码及幻灯片计数器：IBM Plex Mono（OFL），字重 400/500/600

### 布局与动效
- 间距：桌面端使用居中的 16:9 舞台（最大宽度 1320px，水平内边距 48px / 垂直内边距 40px），在 56px 底部演示栏上方保持有纪律的留白。移动端（<768px）切换为全宽可滚动幻灯片卡片，内边距 20px，采用堆叠单列布局。
- 圆角：指标卡与层级卡为 12px，图表节点与按钮为 8px，状态胶囊为 999px。
- 动效：幻灯片之间采用清晰的水平交叉平移（220ms cubic-bezier(0.22, 1, 0.36, 1)），在 prefers-reduced-motion 下禁用。
- 动效：检查架构节点时，沿激活连接线呈现动画 SVG 数据流脉冲。
- 动效：滑块移动时，ROI 计算器读数上的数字平滑过渡。
- 动效：所有幻灯片内容默认渲染为可见，无滚动裁剪陷阱。
- 图像：100% 代码绘制的矢量视觉：架构流水线图、SVG 柱状图与收益图、带实时交易摘要面板的几何封面图，以及清晰的 Lucide 图标。无照片或外部图片。

## 页面与区块
### [BRAND] × [PROSPECT] — 企业提案演示文稿（`index.html`）
1. **演示外壳与演讲者工具** — 常驻极简顶栏（品牌字母组合 + [BRAND] × [PROSPECT] 面包屑、幻灯片章节胶囊标签、Print PDF 按钮）与固定底栏（Prev/Next 按钮、等宽字体的幻灯片计数器 01 / 12、可点击的 12 段进度条、网格总览切换 G、演讲者备注 + 计时器切换 N、全屏切换 F）。按 G 打开 4x3 响应式幻灯片缩略图网格，显示每张幻灯片的编号、标题和微型视觉预览；点击任意图块可直接跳转到该幻灯片。按 N 在底部或右侧打开非阻塞式演讲者备注抽屉，内含当前幻灯片的定制讲解要点，以及实时 Start/Pause/Reset 演示计时器。
   布局：桌面端为全视口舞台（100dvh，居中的 16:9 画布，四周留白干净、零溢出）；移动端（<768px）为垂直单列幻灯片流，支持滑动，触控目标 >=44px。
   动效：快速幻灯片交叉淡入 + 16px 方向性滑动过渡；备注（N）抽屉平滑滑入，总览网格（G）缩放淡入。
2. **幻灯片 01 — 标题与高管客户摘要** — 左栏：类别眉标 '[PRODUCT_CATEGORY] PROPOSAL'、加粗大标题 'Eliminate 14,200 Hours of Manual Operations Across [PROSPECT]'、为 [PROSPECT] Leadership 准备的精炼高管副标题，以及 3 个关键价值胶囊（4.2 个月回本、99.95% SLA、90 天上线）。右栏视觉锚点：深石板色（#0F172A）高管档案卡，以皇家钴蓝（#2563EB）和翡翠绿（#10B981）点缀，显示 Prepared For [PROSPECT]、Target Scope（420 seats across 4 regions）、Proposed Investment（[ACV_RANGE]）、Projected Year-1 Net Value（$312,000），以及运营周期时间缩减的实时 SVG 迷你折线图。
   布局：桌面端为非对称 7/5 分栏网格，配加粗皇家钴蓝垂直强调条和清晰的翡翠绿指标标签；移动端干净堆叠。
   动效：加载时迷你周期时间曲线呈现细微的 SVG 描边绘制动画。
3. **幻灯片 02 — 高管议程与决策成果** — 标题 'What We Will Align On Today'。四个编号叙事支柱（01 Operational Bottlenecks、02 Target Architecture & Security、03 Live Financial Payback Model、04 90-Day Rollout & Commercial Terms），配简洁负责人标签（Ops、IT Security、Finance、Procurement），底部摘要条说明目标签约里程碑和试点启动窗口。
   布局：桌面端为 4 列横向编号卡片，顶部钴蓝线条强调；移动端为单列列表。
4. **幻灯片 03 — 客户痛点拆解** — 标题 'Where Manual Handoffs Drain [PROSPECT] Margin'。左侧：需求调研中发现的 4 张结构化瓶颈卡片（Invoice Reconciliation Lag — 18.4 hrs/week；Multi-ERP Order Re-keying — 6.2% error rate；Exception Escalation Blind Spots — 41 hrs average resolution；Audit Evidence Assembly — 3 weeks per quarter）。右侧：代码绘制的横向 SVG 成本拆解条形图，合计每年 $428,000 的可避免运营拖累，每个瓶颈可点击高亮。
   布局：6/6 分栏网格，交互式瓶颈选择会高亮对应的 SVG 条形。
5. **幻灯片 04 — 战略转变：之前 vs 之后** — 标题 'From Fragmented Spreadsheets to Event-Driven Execution'。并排对比卡片：'Current State'（柔和暖石色页眉，5 个具体摩擦点，配琥珀色/石板色标记）vs 'With [BRAND]'（皇家钴蓝与翡翠绿页眉，5 个可衡量的目标状态成果，包括 <12s exception routing 和 automated audit trail），外加中央方向性差值条显示 -74% manual touchpoints。
   布局：2 列对比，中央差值标注条；移动端干净堆叠。
6. **幻灯片 05 — 交互式解决方案架构图** — 标题 'Zero-Disruption Integration With Your Existing Stack'。交互式 SVG 分布式架构图，5 个可点击节点由动画方向路径连接：（1）Source Systems（ERP、WMS、EDI）、（2）[BRAND] Ingestion Gateway、（3）Policy & AI Triage Engine、（4）Human-in-the-Loop Approval Hub、（5）Audit Ledger & Analytics Sink。点击任意节点会以钴蓝/翡翠绿高亮其上游/下游连接线，并更新下方检查器面板，显示精确协议规格、p99 延迟、故障转移行为和加密细节。
   布局：全宽交互式 SVG 画布（顶部 60%）搭配结构化 3 列检查器栏（底部 40%）；移动端为可滚动 SVG 容器或紧凑节点选择标签页。
   动效：动画虚线脉冲沿所选节点的连接路径移动。
7. **幻灯片 06 — 交互式 ROI 与节省时间计算器** — 标题 'Model [PROSPECT] Payback Under Your Own Assumptions'。左侧面板：三个交互式滑块，配实时等宽读数 — Operations Team Size（20 至 500 名员工，默认 120）、Blended Hourly Cost（$35 至 $140/hr，默认 $68/hr）、Weekly Manual Hours Automated per Person（1.5 至 10 hrs，默认 4.5 hrs），外加情景预设条（Conservative / Expected / Aggressive）。右侧面板：实时计算的 KPI 卡片（Annual Hours Reclaimed、Gross Productivity Value、扣除 [ACV_RANGE] 后的 Net Year-1 Return、以翡翠绿高亮的 Payback Period in Months）和动态 SVG 12 个月累计现金流曲线，标出盈亏平衡月份。
   布局：桌面端为 5/7 分栏网格；移动端滑块堆叠在实时图表和摘要卡片上方。
8. **幻灯片 07 — 90 天分阶段上线时间线** — 标题 'Production Value in 90 Days Without Halting Operations'。三个交互式阶段列（Days 1–30：Connect & Shadow Mode；Days 31–60：Controlled Automation Wave 1；Days 61–90：Full Scale & Governance Handover）渲染在横向 SVG 里程碑甘特条之上。点击阶段可显示精确的每周交付物、[BRAND] 解决方案团队工时和 [PROSPECT] IT 投入（每周低于 6 小时）。
   布局：横向 SVG 时间线条位于 3 张可选阶段卡片上方，底部为职责分工条。
9. **幻灯片 08 — 商业选项：3 档定价与 SLA 对比** — 标题 'Transparent Commercial Tiers Aligned to Volume'。三张并排方案卡片：Core Operations（$54,000/yr，最多 150 席位，99.9% SLA，4h 响应）、Enterprise Scale（推荐，以钴蓝边框和徽章高亮，[ACV_RANGE]，最多 450 席位，99.95% SLA，专属 TAM，1h 响应）、Global Dedicated（$132,000/yr，无限席位，99.99% SLA，单租户 VPC，15m 响应）。包含 Billing Term 切换（Annual vs 2-Year Lock -12%），实时重新计算各档价格。
   布局：3 列定价与 SLA 矩阵，上方为实时期限切换；移动端卡片堆叠。
10. **幻灯片 09 — 匿名客户成果指标** — 标题 'Proven Results Across Similar Logistics & Industrial Teams'。三张匿名企业成果案例卡（North American Cold-Chain Carrier — 68% faster invoice close；European Component Distributor — $490K annual error reduction；Pacific Maritime Broker — 3.6-month full payback），搭配分组 SVG 前后周期时间对比图。
   布局：顶部 3 列成果卡片，配加粗翡翠绿 KPI 标注；底部 SVG 前后分组条形图。
11. **幻灯片 10 — 企业安全与合规态势** — 标题 'Built for Regulated Enterprise Security Reviews'。四个结构化控制支柱，配代码绘制的简洁几何合规盾牌（SOC 2 Type II Audited、ISO 27001 Aligned、Regional Data Residency EU/US、Zero-Retention Data Processing），外加安全架构检查清单，涵盖 SAML 2.0 SSO、RBAC、AES-256 at rest、TLS 1.3 in transit 和 immutable webhook signing。
   布局：左侧 2x2 合规支柱网格（7 列）+ 右侧深石板色安全规格摘要卡（5 列）。
12. **幻灯片 11 — 共同行动计划与风险缓解** — 标题 'Clear Path From Proposal Review to Go-Live'。5 步交互式共同行动计划检查表（Security Packet Sign-Off、Sandbox ERP Connector Test、Commercial Redlines、Executive Sponsorship Approval、Kickoff Workshop），显示负责人（[BRAND] vs [PROSPECT]）、目标窗口（Week 1–5）和交互式状态切换，方便销售代表在通话中实时更新里程碑。
   布局：结构化响应式表格/卡片列表，配实时完成进度指示器。
13. **幻灯片 12 — 后续步骤与高管签核 CTA** — 标题 'Ready to Launch the 30-Day Sandbox Pilot?'。深石板色（#0F172A）收尾舞台，以钴蓝和翡翠绿几何网格线点缀。显示 3 项具体即时行动（Schedule Technical Deep-Dive、Provision Isolated Sandbox、Finalize Order Form）、客户团队联系方式（[CONTACT_EMAIL]、Solutions Architect & Enterprise AE）、一个 'Copy Executive Summary' 按钮（将纯文本交易摘要复制到剪贴板并给出确认反馈），以及一个 'Print / Export PDF' 按钮。
   布局：居中的高对比度高管收尾幻灯片，含 3 张行动卡片和页脚联系条。

## 资产
- 图标：安装 lucide-react（ISC），用于幻灯片导航、安全盾牌、图表图标和 UI 控件。
- 字体：通过 @fontsource 包（OFL）自托管 Fraunces、Plus Jakarta Sans 和 IBM Plex Mono。
- 图像：所有图表、架构图、合规盾牌和封面视觉元素均使用内联 SVG 和 CSS 清晰绘制。零外部图像或 CDN 请求。

## 不要做
- 不要后端、API 调用、外部 CDN 脚本或 Google Fonts 链接。
- 不要真实软件供应商、潜在客户品牌、合规认证机构商标或真实客户名称。
- 生产构建中不要 source maps（build.sourcemap = false），并始终使用相对资源路径（base: './'）。
- 不要拥挤的文字墙或被裁切的 16:9 舞台；移动端（<768px）必须干净地重排，零水平溢出。
- 不要使用将演示与过时日历年绑定的日期；使用相对时间范围（Day 1–90、Week 1–5、Year 1）。
- 不要不可见的滚动触发区块或 clip-path 显示陷阱；每个幻灯片在激活时立即渲染。
- 除了可选的 [CREDIT] 槽位外，不要在演示文稿的任何地方提及 VibeFather 或任何其他模板平台。

---
— Prompt by VibeFather · https://vibefather.ai/t/b2b-sales-proposal-slide-deck · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
