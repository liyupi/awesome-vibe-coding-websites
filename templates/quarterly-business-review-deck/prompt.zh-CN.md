> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 季度业务回顾演示文稿

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简报
一份 12 页的高管季度业务回顾（QBR）演示文稿，面向虚构的 SaaS 运营团队 [BRAND]，涵盖 KPI 记分板、SVG ARR 收入瀑布图、可按部门筛选的 OKR、关键成果、风险缓解、人员编制与资金消耗效率，以及下一季度优先事项。

- 受众：SaaS 高管、各部门 VP、RevOps 负责人，以及审阅季度经营表现的董事会观察员。
- 目标：交付一份透明、数据密集但易于浏览的高管摘要，突出季度增长驱动因素，及早标记运营风险，并让管理层在下一季度优先事项上达成一致。
- 语气：简洁、坦诚、量化、高管风格；平实的数字搭配直接的要点结论。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：lucide-react（ISC）、@fontsource/space-grotesk（OFL）、@fontsource/inter（OFL）、@fontsource/ibm-plex-mono（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中本地导入 @fontsource/space-grotesk（500、600、700）、@fontsource/inter（400、500、600、700）和 @fontsource/ibm-plex-mono（400、500、600）。
  - 将所有幻灯片指标、瀑布图分段、OKR、风险和演讲者备注集中到 src/data/qbrData.ts 中。
  - 在 src/index.css 中配置 @media print，使用 @page { size: landscape; margin: 0; }，隐藏工具栏界面元素，并将全部 12 张幻灯片每页一张干净地打印出来。
  - 将活动幻灯片与 URL hash（#/slide/1..12）同步，并接入键盘快捷键（ArrowLeft、ArrowRight、Space、Home、End、G、N、F、Escape）以及触摸滑动。

## 变量
- [BRAND] — 公司名称（默认："StrataPulse"）。虚构的 SaaS 公司名称
- [QUARTER_LABEL] — 回顾周期徽章（默认："Q3 Business Review"）。季度标签，不含硬编码的日历年
- [HEADLINE_ARR] — 期末 ARR 数字（默认："$24.8M"）。封面和记分板上首要的顶线 ARR 指标
- [TEAM_SCOPE] — 运营范围（默认："Global SaaS Operations"）。封面幻灯片上的范围行
- [LEAD_PRESENTER] — 演讲者姓名和头衔（默认："Elena Vance, COO"）。虚构的高管演讲者
- [CREDIT] — 在页脚保留一个小的 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/quarterly-business-review-deck（默认：是；删除此行即可移除）

Pages & Sections 下的文案是为默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- Studio White `#FFFFFF` — 主幻灯片背景
- Graphite Ink `#111827` — 标题、主要数字和高管对比面板
- Indigo Signal `#4F46E5` — 主强调色、ARR 柱状条、活动筛选器和主视觉页眉
- Warm Amber `#F59E0B` — 关注指标、有风险的 OKR 和琥珀色高亮
- Soft Mist `#F3F4F6` — 细微卡片表面和图表网格带
- Emerald On-Track `#059669` — 正向变化和进度正常的交通灯
- Rose Alert `#E11D48` — 流失、收缩柱状条和高严重度风险

### 排版
- 展示标题：Space Grotesk（OFL），字重 500/600/700
- 正文和表格：Inter（OFL），字重 400/500/600/700
- 财务数字和幻灯片索引：IBM Plex Mono（OFL），字重 400/500/600

### 布局与动效
- 间距：桌面端呈现清晰的 16:9 工作室画布（最大 1320px，44px 内边距），置于微妙的冷灰色环绕背景（#EEF0F4）之上，底部带 56px 演示控制栏。移动端（<768px）干净地适配为单列卡片，控件 >=44px，且无水平溢出。
- 圆角：数据面板 10px，部门标签和按钮 6px，交通灯状态徽章 999px。
- 动效：平滑的方向性滑动过渡（200ms ease-out），并提供 prefers-reduced-motion 回退。
- 动效：当 Slide 02 激活时，4 个头条 KPI 记分板指标呈现平滑的递增计数润色效果。
- 动效：SVG 瀑布图、留存图和消耗图上的悬停工具提示和活动柱状条高亮。
- 动效：所有内容默认可见，无隐藏的滚动裁剪状态。
- 图像：纯代码绘制的瑞士风格数据可视化：SVG ARR 瀑布桥、队列迷你走势图、消耗/跑道双轴图、交通灯 OKR 仪表和 Lucide 图标。零外部照片。

## 页面与区块
### [BRAND] — [QUARTER_LABEL] (`index.html`)
1. **演示控制、概览网格（G）与演讲者备注（N）** — 简洁的顶部页眉条，包含 [BRAND] 几何标志、[QUARTER_LABEL] 胶囊标签、当前活动区块标签和 Print PDF 按钮。底部控制栏包含上一页/下一页箭头、等宽幻灯片计数器（01 / 12）、可点击的 12 段靛蓝色进度条、概览网格按钮（G）、演讲者备注 + 计时器按钮（N）和全屏按钮（F）。G 打开一个 12 格视觉概览模态框；N 打开演讲者备注面板，包含每页幻灯片的高管要点和开始/暂停/重置计时器。
   布局：桌面端为固定 16:9 视口框架；移动端（<768px）为流式垂直单列幻灯片视图，支持滑动手势。
2. **幻灯片 01 — 封面与高管快照** — 醒目的靛蓝色（#4F46E5）顶部强调条和瑞士分栏封面。左侧：暖琥珀色（#F59E0B）色调的 [QUARTER_LABEL] 胶囊标签、大标题 '[BRAND] Executive Business Review'、副标题 '[TEAM_SCOPE] · Presented by [LEAD_PRESENTER]'，以及一行简洁的季度结论（'Net new ARR beat plan by 11% while burn multiple tightened to 0.8x.'）。右侧视觉锚点：一张丰富的石墨色（#111827）高管摘要卡片，展示期末 ARR（[HEADLINE_ARR]）、NRR（118%）、毛利率（81.4%），以及一个以内联 SVG 呈现的 6 季度 ARR 增长阶梯图，以靛蓝色和暖琥珀色发光。
   布局：桌面端为 7/5 非对称瑞士网格；移动端为整洁堆叠。
3. **幻灯片 02 — 高管 KPI 记分板** — 标题 'Headline Operating Metrics vs Plan'。四张大型 KPI 卡片，带有动画计数器读数、目标达成进度条和环比变化：期末 ARR（[HEADLINE_ARR]，环比 +14.2%）、净收入留存率（118.4%，+2.1 个百分点）、毛客户流失率（4.1%，改善 -0.7 个百分点）和 CAC 回收期（13.2 个月，较计划 -1.8 个月）。底部条带展示 3 点 CFO 评论摘要。
   布局：2x2 宽敞 KPI 网格，配粗体等宽指标和内联 SVG 趋势迷你图；移动端为单列堆叠。
4. **幻灯片 03 — SVG 收入瀑布图** — 标题 'ARR Bridge: Strong Expansion Offset Mid-Market Churn'。交互式代码绘制 SVG 瀑布图，追踪期初 ARR（$21.7M）-> 新客户 ARR（+$2.9M，靛蓝色）-> 扩展 ARR（+$1.6M，翡翠绿）-> 收缩（-$0.5M，琥珀色）-> 流失（-$0.9M，玫瑰红）-> 期末 ARR（[HEADLINE_ARR]，石墨色）。点击或悬停任意条形会更新标注条带，显示交易数量、最大贡献细分和与预测的差异。
   布局：宽幅 SVG 图表画布（8 列）搭配交互式条形检查器详情面板（4 列）；移动端堆叠。
5. **幻灯片 04 — 交互式部门 OKR 进度** — 标题 'Quarterly OKR Attainment by Function'。筛选栏横跨全部 / 产品 / 销售 / 市场 / 客户成功（每项显示数量和平均达成率）。展示结构化目标卡片，包含关键结果完成百分比、进度条、负责人首字母徽章和颜色编码的红绿灯胶囊标签（正常推进 — 翡翠绿，有风险 — 琥珀色，偏离轨道 — 玫瑰红）。点击任意部门会实时筛选看板并更新顶部达成率摘要栏。
   布局：桌面端为筛选胶囊标签页眉 + 2 列 OKR 卡片网格；移动端为单列卡片。
6. **幻灯片 05 — 市场推广与管道速度** — 标题 'Enterprise Segment Drove 62% of Net-New Bookings'。左侧：SVG 水平堆叠条形图，比较细分预订量（企业、中端市场、自助服务）与季度配额。右侧：3 个转化漏斗 KPI（合格管道覆盖率 3.4x、企业赢单率 28.5%、平均销售周期 64 天），并附琥珀色标注指出中端市场周期延长。
   布局：7/5 分栏网格，配清晰坐标轴标签和悬停读数。
7. **幻灯片 06 — 产品交付与平台可靠性** — 标题 'Shipped 3 Flagship Releases With 99.97% Uptime'。顶部 3 张亮点卡片（Multi-Region Workflow Sync、Role-Scoped Audit Export、Bulk CSV Importer v2），带采用率百分比仪表。底部条带：工程健康栏，显示正常运行时间（99.97%）、P95 API 延迟（118ms）和支持工单分流率（42%）。
   布局：3 列发布展示位于深石墨色可靠性条带上方。
8. **幻灯片 07 — 关键成果画廊** — 标题 'Quarter Highlights Across Customers, Product & Team'。6 卡片视觉成果网格，展示具体里程碑（例如，Largest Multi-Year Expansion $420K ACV、EMEA Hosting Region Go-Live、NPS +11 to 58、Support First-Response Under 14m、Partner Channel 18% of Pipeline、Zero Critical Security Findings），每项按部门标签和影响值标注。
   布局：3x2 整洁卡片画廊，配靛蓝色/琥珀色顶部强调标签；移动端为单列堆叠。
9. **幻灯片 08 — 客户健康与留存队列** — 标题 'Enterprise Net Retention Reached 124%'。代码绘制 SVG 分组留存曲线，比较 SMB、中端市场和企业账户在 4 个季度的表现，带可点击细分切换，搭配 3 个续约健康标注（按时续约账户 94%、风险续约池 $1.1M、高管发起人覆盖率 82%）。
   布局：7/5 分栏，左侧为交互式 SVG 多线图，右侧为续约健康面板。
10. **幻灯片 09 — 风险与缓解矩阵** — 标题 'Top Operating Risks & Active Mitigations'。交互式 2x2 严重性/可能性视觉矩阵（SVG 象限图，带编号风险标记 R1–R5），旁边是结构化缓解表，列出风险标题、负责人、严重性胶囊标签（高/中）和具体行动 + 目标检查点。点击标记会高亮其对应行。
   布局：5/7 分栏，将 SVG 风险象限图与可操作缓解台账配对。
11. **幻灯片 10 — 人员编制、消耗与效率概览** — 标题 'Disciplined Hiring Extended Runway to 34 Months'。左侧：SVG 双条形与折线图，比较 4 个季度的季度净消耗与净新增 ARR（消耗倍数从 1.3x 改善至 0.8x）。右侧：按职能划分的人员编制明细（工程 48、GTM 39、产品与设计 16、G&A 11；总计 114 对比计划 118），带开放职位状态胶囊标签。
   布局：7/5 分栏网格，配简洁 SVG 图例和表格化人员编制读数。
12. **幻灯片 11 — 下季度战略优先事项路线图** — 标题 'Four Non-Negotiable Priorities for Next Quarter'。四条水平优先事项泳道（P1 Enterprise Self-Serve Expansion、P2 Mid-Market Churn Turnaround、P3 AI Reporting Assistant GA、P4 EMEA Commercial Hub），展示高管负责人、成功指标目标和 3 个月执行检查点（第 1 月、第 2 月、第 3 月）。
   布局：4 行堆叠结构化路线图，配靛蓝色/琥珀色里程碑胶囊标签。
13. **幻灯片 12 — 高管讨论与所需决策** — 标题 'Decisions Required From Leadership Today'。高对比度石墨色（#111827）收尾幻灯片，含 3 张编号决策卡片（Approve 6 Additional Enterprise AE Reqs、Sign Off Mid-Market Packaging Floor、Confirm EMEA Marketing Budget Shift），带交互式 'Logged' 状态复选框用于实时会议记录，另有 Print PDF 和返回幻灯片 01 操作。
   布局：居中收尾舞台，含 3 张决策卡片和页脚演讲者签退。

## 资产
- 图标：安装 lucide-react（ISC），用于箭头、状态点、筛选器和演示工具栏控件。
- 字体：通过 @fontsource 包（OFL）自托管 Space Grotesk、Inter 和 IBM Plex Mono。
- 图像：所有图表（ARR 瀑布图、留存曲线、燃烧倍数、风险矩阵、迷你走势图）均以清晰的 inline SVG 渲染。不使用外部图像。

## 禁止事项
- 不得使用后端、API 调用、CDN 脚本或外部 Google Fonts 链接。
- 不得使用真实公司名称、公开股票代码或真实高管身份。
- 生产构建中不得包含 source maps，并且始终使用 base: './'。
- 在 390x844 移动视口上不得出现水平溢出或拥挤的表格。
- 不得硬编码真实世界的日历日期；使用 Q1–Q4 和 Month 1–3 相对标记。
- 不得使用隐藏的滚动触发元素；每个幻灯片在激活时都必须立即可见。
- 除可选的 [CREDIT] 槽位外，不得在演示文稿中提及 VibeFather 或竞争对手。

---
— Prompt by VibeFather · https://vibefather.ai/t/quarterly-business-review-deck · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
