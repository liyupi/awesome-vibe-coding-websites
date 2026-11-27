> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 营销活动策略演示文稿

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简报
一份 11 页的上市与季度营销活动策略演示文稿，针对虚构消费硬件发布 [BRAND] [PRODUCT_NAME]，围绕“[CAMPAIGN_THEME]”展开，包含可点击的人物标签页、一个 SVG 获客漏斗、一个交互式三情景渠道预算分配器，以及一条 8 周上市甘特时间线。

- 受众：CMO、增长营销负责人、创意制作人、零售买手，以及正在评审上市活动的消费硬件创始人。
- 目标：获得预算批准，并在目标受众、渠道组合、创意信息、公关节奏和上市 KPI 上达成跨职能一致。
- 语气：犀利、有活力、以指标为支撑、懂消费者，且结构清晰。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：lucide-react（ISC）、@fontsource/bricolage-grotesque（OFL）、@fontsource/inter（OFL）、@fontsource/ibm-plex-mono（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中本地导入 @fontsource/bricolage-grotesque（600、700、800）、@fontsource/inter（400、500、600、700）和 @fontsource/ibm-plex-mono（400、500、600）。
  - 将所有活动文案、人物画像、预算场景、甘特图任务、KPI 和演讲者备注保留在 src/data/campaignDeck.ts 中。
  - 在 src/index.css 中配置 @media print，使用 @page { size: landscape; margin: 0; }，隐藏工具栏控件并将全部 11 张幻灯片每页一张打印。
  - 接入键盘导航（ArrowLeft、ArrowRight、Space、Home、End、G、N、F、Escape）、触摸滑动和哈希幻灯片跟踪（#/slide/1..11）。

## 变量
- [BRAND] — 硬件品牌名称（默认："Kinetix Audio"）。虚构的消费硬件制造商
- [PRODUCT_NAME] — 旗舰产品名称（默认："Pulse Mini Studio Monitor"）。正在发布的虚构消费设备
- [CAMPAIGN_THEME] — 营销活动大创意标语（默认："Studio Sound Anywhere You Set Up"）。主视觉营销活动口号
- [BUDGET_TOTAL] — 季度营销活动预算（默认："$450,000"）。跨渠道 GTM 总支出
- [LAUNCH_TARGET] — 主要发布目标（默认："18,000 Pre-Orders"）。封面和 KPI 幻灯片上的首要转化目标
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/marketing-campaign-strategy-deck（默认：是；删除此行即可移除）

页面与区块（Pages & Sections）下的文案是按默认值撰写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 清透雪白（Crisp Snow）`#FAFAFA` — 主亮色幻灯片画布
- 深墨黑（Deep Ink）`#121214` — 展示标题、高对比卡片和主文本
- 鲜亮珊瑚红（Vivid Coral）`#FF4D4F` — 主活动能量强调色、激活场景条和主视觉锚点
- 阳光黄（Sunshine Yellow）`#FACC15` — 高亮标记、里程碑区块和次级标注标签（仅与 #121214 墨色搭配以实现高对比度）
- 浅石墨灰（Light Graphite）`#E4E4E7` — 清晰的 1px 边框和图表网格线
- 柔和锌灰（Muted Zinc）`#52525B` — 次级说明文字和元数据

### 字体排印
- 粗体展示标题：Bricolage Grotesque（OFL），字重 600/700/800
- 正文和 UI：Inter（OFL），字重 400/500/600/700
- 预算、比率和幻灯片编号：IBM Plex Mono（OFL），字重 400/500/600

### 布局与动效
- 间距：桌面端每张 16:9 幻灯片在 100dvh 内干净排布（最大 1320px，44px 内边距），位于 56px 底部演示栏上方。移动端（<768px）干净重排为单列卡片，触控控件 >=44px，零水平溢出。
- 圆角：人物卡片和指标卡片为 12px，切换开关和甘特条为 8px，渠道徽章为 999px。
- 动效：200ms 轻快幻灯片交叉平移过渡，遵循 prefers-reduced-motion。
- 动效：在 Balanced、Paid-Heavy 和 Organic 预算场景之间切换时，SVG 条形宽度平滑动画。
- 动效：交互式人物标签高亮和就绪清单完成进度动画。
- 动效：所有幻灯片内容立即渲染可见，无 clip-path 揭示陷阱。
- 图像：粗体代码绘制的活动图形：封面上的几何硬件轮廓示意图、SVG 全漏斗图、动画 SVG 预算分配条、8 周甘特图视觉和 Lucide 图标。零外部照片。

## 页面与区块
### [BRAND] — [PRODUCT_NAME] GTM 营销活动策略（`index.html`）
1. **演示外壳、概览网格（G）与演讲者备注（N）** — 紧凑的顶部页眉（`[BRAND] · GTM STRATEGY`、幻灯片章节胶囊标签、Print PDF 按钮）和固定的底部控制栏（上一页/下一页、等宽计数器 `01 / 11`、可点击的 11 段珊瑚色进度条、概览网格 `G`、演讲者备注 + 计时器 `N`、全屏 `F`）。G 打开响应式 11 格概览网格；N 打开幻灯片专属演讲者备注和已用计时器。
   布局：桌面端为居中的 16:9 舞台；移动端为垂直幻灯片视图（<768px），支持滑动导航。
2. **幻灯片 01 — 封面与营销活动大创意** — 左侧（7 列）：阳光黄色胶囊标签（`GO-TO-MARKET PLAYBOOK · 8 WEEKS`），文字色为 #121214，粗体 Bricolage 标题 '[CAMPAIGN_THEME]'，副标题 '[BRAND] [PRODUCT_NAME] Launch Strategy · Total Budget [BUDGET_TOTAL] · Goal [LAUNCH_TARGET]'，以及 3 个有力的发布支柱（Waitlist Momentum、Creator Proof、Retail Drop）。右侧视觉锚点（5 列）：粗体深墨色（#121214）硬件发布海报卡片，配有清晰的代码绘制几何声学/波形 SVG 徽标，采用鲜艳珊瑚色（#FF4D4F）和阳光黄色（#FACC15），展示发布窗口（8 Weeks）、目标 ROAS（4.2x）和预购目标（[LAUNCH_TARGET]）。
   布局：在清爽雪白背景上采用 7/5 大胆图形分割；移动端堆叠。
3. **幻灯片 02 — 营销活动大创意与市场钩子** — 标题 'Why Compact Creators Outgrew Plastic Desk Speakers'。顶部编辑式对比横幅框定消费者张力与我们的产品真相，随后是 3 张视觉证明卡片（Acoustic Precision in 1.2L Footprint、Instant USB-C Desk Calibration、Sub-$249 Direct Price Point），点缀珊瑚色和黄色徽章。
   布局：全宽论点条位于 3 列证明卡片网格上方。
4. **幻灯片 03 — 交互式受众画像卡片** — 标题 'Three High-Intent Buyer Segments'。可点击标签选择器横跨 3 个虚构画像：（1）Bedroom Beatmaker（42% 占比）、（2）Hybrid Video Editor（34% 占比）和（3）Minimalist Desk Collector（24% 占比）。选择画像会更新详细档案面板，显示 Core Pain、Buying Trigger、Top Objection & Counter-Proof、Priority Channels 和 Sample Ad Hook。
   布局：顶部 3 个画像选择标签位于结构化 2 列画像资料卡上方。
5. **幻灯片 04 — 全漏斗获客图** — 标题 'From 4.8M Qualified Impressions to [LAUNCH_TARGET]'。代码绘制的交互式 SVG 4 阶段漏斗（Awareness: 4.8M Reach -> Consideration: 210K Landing Visits -> Intent: 48K VIP Waitlist -> Conversion: [LAUNCH_TARGET] at 37.5% waitlist close）。点击任一阶段会高亮其转化杠杆、主要创意形式和负责人。
   布局：水平锥形 SVG 漏斗图（7 列）+ 活跃阶段战术面板（5 列）；移动端堆叠。
6. **幻灯片 05 — 交互式渠道预算分配器** — 标题 'Stress-Testing Our [BUDGET_TOTAL] Channel Mix'。交互式场景切换（`Balanced` / `Paid-Heavy` / `Organic-Led`），动态更新跨 5 个渠道的 SVG 水平条形图（Paid Social & Video、Creator Seeding & Sponsorships、Search & Shopping、PR & Launch Events、Lifecycle Email & Referral），并重新计算 3 个实时摘要 KPI：Projected Pre-Orders、Blended CAC 和 Expected ROAS。
   布局：场景分段切换 + 动画 SVG 预算条与实时预测卡片之间 7/5 分割。
7. **幻灯片 06 — 8 周发布日历甘特图视觉** — 标题 'Eight-Week Countdown From Teaser to Drop'。代码绘制的 SVG 甘特时间线横跨第 1–8 周，包含 5 个颜色编码工作流：Teaser & Waitlist Gate（第 1–3 周，黄色）、Review Unit Seeding（第 2–4 周，珊瑚色）、Embargo Lift & Creator Blitz（第 5–6 周，墨色）、VIP Early-Access Drop（第 6–7 周，珊瑚色）和 Public Retail & Retargeting（第 7–8 周，墨色），带有可点击里程碑标记，详述每周关键交付物。
   布局：全宽响应式 SVG 甘特板位于紧凑里程碑详情条上方。
8. **幻灯片 07 — 创意信息支柱** — 标题 'Three Stories Every Asset Must Tell'。三张高对比度支柱卡片：Pillar 01 Honest Sound（'Flat response, zero bass mud'）、Pillar 02 Desk-First Industrial Craft（'Machined aluminum that earns its footprint'）和 Pillar 03 Plug-and-Play Speed（'Calibrated in 20 seconds over single USB-C'）。每张卡片搭配 Headline Hook、Visual Direction 和 Best Format（15s vertical demo、comparison carousel、unboxing reel）。
   布局：3 列卡片网格，粗体编号标题采用珊瑚色、黄色和墨色。
9. **幻灯片 08 — 影响者、创作者与 PR 节奏** — 标题 'Orchestrating 45 Creator Drops on Embargo Day'。左侧：3 个创作者层级（5 Flagship Tech Reviewers、15 Mid-Tier Audio Producers、25 Aesthetic Desk Creators），包含数量、交付形式和预期观看量。右侧：4 步禁运波次时间线（Seed -> Check-In -> Embargo Lift 09:00 EST -> Second-Wave Shorts），展示协调的触达峰值。
   布局：6/6 分割，配分层创作者卡片和阶梯式 PR 节奏图。
10. **幻灯片 09 — 发布优惠与推荐机制** — 标题 'Turning Waitlist Sign-Ups Into Launch-Day Advocates'。解释 48 小时 VIP 早鸟窗口（$30 off + custom braided cable）、分层推荐奖励（1 friend = priority batch、3 friends = desktop isolation pads），以及内联 SVG 转化提升对比条，展示 VIP 与冷流量对比。
   布局：2 列优惠架构 + 底部 SVG 转化对比条。
11. **幻灯片 10 — KPI 目标记分卡** — 标题 'How We Measure Success Week by Week'。3x2 网格中的六张结构化 KPI 目标卡片：Pre-Order Volume（[LAUNCH_TARGET]）、Waitlist Lead Cost（<$1.90）、Landing Conversion Rate（9.4%）、Blended Launch ROAS（4.2x）、Day-1 Sell-Through（65% of Batch 1）和 Earned Media Mentions（35+ tier-1 features），每张都有绿色/琥珀色/红色护栏阈值。
   布局：3x2 清爽记分卡网格，配等宽目标值和护栏指示器。
12. **幻灯片 11 — 交互式发布就绪检查清单** — 标题 'Pre-Flight Sign-Off Before Week 1'。交互式发布就绪检查清单横跨 6 个跨职能关卡（Hardware QA Samples Locked、Waitlist Page & Tracking Verified、45 Creator Kits Packed、Paid Creative Variations Approved、Press Kit & Spec Sheet Finalized、Fulfillment Capacity Confirmed），带有负责人徽章、可点击完成复选框（持久化在 localStorage 中）、SVG 绘制的实时就绪进度环，以及 Print PDF / Reset 按钮。
   布局：8/4 分割，将交互式检查清单与深墨色发布就绪环面板配对。

## 资产
- 图标：安装 lucide-react（ISC）用于渠道图标、检查清单关卡和演示文稿控件。
- 字体：通过 @fontsource 包（OFL）自托管 Bricolage Grotesque、Inter 和 IBM Plex Mono。
- 图像：所有漏斗图形、预算图表、甘特图条、就绪环和封面硬件徽标均以内联 SVG 绘制。零外部图像。

## 不要做
- 不使用后端、API 调用、CDN 脚本或外部 Google Fonts 链接。
- 不使用真实的消费电子品牌、社交平台商标/标识，或具名的真实网红。
- 不在白色背景上使用低对比度的黄色文字；Sunshine Yellow（#FACC15）背景必须始终搭配 Deep Ink（#121214）文字。
- 生产构建中不生成 source maps，并始终使用 base: './'。
- 在 390x844 移动端不出现横向溢出，在桌面端不出现 16:9 幻灯片被裁切。
- 不硬编码真实日历日期；使用 Week 1–8 的相对排期标签。
- 除可选的 [CREDIT] 槽位外，不提及 VibeFather 或竞争对手。

---
— Prompt by VibeFather · https://vibefather.ai/t/marketing-campaign-strategy-deck · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
