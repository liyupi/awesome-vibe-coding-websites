> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 公司全员大会演示文稿

完全按照以下描述构建此网站。将 [VARIABLES] 替换为您自己的值；其余所有内容保持不变。

## 简介
一份生动的 11 页 16:9 交互式月度公司全员大会网页演示文稿，面向 [BRAND]（“[DECK_THEME]”），由 [HOST_NAME] 主持，面向 [TEAM_SIZE]。包含 KPI 迷你走势图、已交付成果聚焦、客户评价、同事表彰、即将到来的里程碑，以及幻灯片内的交互式问答点赞板，另有完整键盘/滑动导航、G 概览网格、N 演讲者备注 + 实时计时器、F 全屏，以及打印 CSS。

- 受众：分布式产品、工程和运营团队，正在举办富有吸引力的基于浏览器的全员大会。
- 目标：庆祝已交付的工作，就公司指标和里程碑达成一致，并让实时问答真正具有互动性。
- 语气：温暖、充满活力、透明且干脆利落。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：lucide-react（ISC）、@fontsource/plus-jakarta-sans（OFL）、@fontsource/jetbrains-mono（OFL）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中本地导入 @fontsource/plus-jakarta-sans（400、500、600、700、800）和 @fontsource/jetbrains-mono（400、500、600）。
  - 支持 ArrowLeft/ArrowRight/Space/Home/End 导航、触摸滑动、G 概览网格弹窗、N 演讲者备注抽屉（带实时会话计时器）、F 全屏切换，以及干净的 @media print 横向每页一张幻灯片的 CSS。
  - 在 <768px 移动端隐藏键盘快捷键页脚提示，改为显示细进度条 + 'Swipe to navigate' 辅助提示。

## 变量
- [BRAND] — 公司名称（默认："RelayGrid"）。虚构的分布式软件公司
- [HOST_NAME] — 全员大会主持人（默认："Claire Morales, CEO"）。封面上的演讲者姓名
- [DECK_THEME] — 会议主标题（默认："Building Together Across Six Timezones"）。封面幻灯片主标题
- [TEAM_SIZE] — 团队徽章（默认："118 Teammates · 6 Timezones"）。封面元数据徽章
- [MANTRA] — 收尾箴言（默认："Clarity over noise. Craft over rush."）。收尾幻灯片团队箴言
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/company-all-hands-presentation-deck（默认：是；删除此行即可移除）

页面与区块（Pages & Sections）下的文案是按默认值编写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 柔和瓷白（Soft Porcelain）`#F7F8FC` — 主清爽浅色幻灯片表面
- 午夜藏青（Midnight Navy）`#131B2E` — 高对比度深色封面锚点卡片、排版和聚光灯边框
- 亮紫（Bright Violet）`#7C3AED` — 主强调胶囊标签、迷你折线描边和问答点赞按钮
- 清新薄荷（Fresh Mint）`#14B8A6` — 正向 KPI 变化值、已交付徽章和里程碑勾选标记
- 石板灰（Slate Muted）`#64748B` — 副标题、元数据和次级标签

### 排版
- 幻灯片展示标题和正文：Plus Jakarta Sans（OFL），字重 400/500/600/700/800
- KPI 数字、幻灯片计数器和计时器：JetBrains Mono（OFL），字重 400/500/600

### 布局与动效
- 间距：全出血 16:9 演示画布居中，留极少的无效边距；醒目的 52-56px 桌面封面标题，由一张 50% 宽度的午夜藏青遥测锚点卡片平衡。
- 圆角：16:9 幻灯片舞台为 20px，KPI 与聚光灯卡片为 14px，胶囊标签和进度段为 999px。
- 动效：清爽的幻灯片切换、动画 KPI 迷你折线，以及有触感的问答点赞弹出效果。
- 动效：遵循 prefers-reduced-motion；所有内容立即可见。
- 图像：纯代码绘制的演示图形：内联 SVG KPI 趋势迷你折线、已交付 UI 线框徽章、里程碑时间线条和 Lucide 图标。

## 页面与区块
### [BRAND] — 公司全员大会演示文稿（`index.html`）
1. **11 页交互式全员大会演示文稿** — 第 01 页 封面（'[DECK_THEME]'、[HOST_NAME]、[TEAM_SIZE]、午夜海军蓝视觉锚点卡片，含实时全员大会脉搏指标）。第 02 页 议程与亮点。第 03 页 公司核心指标（4 张 KPI 卡片，配可点击的 SVG 趋势迷你折线图：$14.8M ARR +34%、99.98% Uptime、124% NRR、72 NPS）。第 04 页 我们交付了什么（3 张产品聚焦卡片，配交互式影响切换）。第 05 页 工程与平台成果（延迟下降条形可视化）。第 06 页 客户好评语录墙（3 个虚构客户故事）。第 07 页 新队友与工作周年纪念表彰网格。第 08 页 未来 90 天里程碑时间线。第 09 页 团队优先事项与开放职位。第 10 页 交互式实时问答点赞板（点击为问题点赞 + 内联输入框，可直接在幻灯片内发布新问题）。第 11 页 闭幕团队信条（'[MANTRA]'）与下次同步 CTA。
   布局：16:9 宽屏幻灯片画布，含顶栏、底部导航坞（分段进度、G 网格、N 备注+计时器、F 全屏、Print PDF）。

## 资源
- 图标：安装 lucide-react（ISC）用于箭头、网格、笔记、全屏、打印、点赞和里程碑图标。
- 字体：通过 @fontsource 包（OFL）自托管 Plus Jakarta Sans 和 JetBrains Mono。
- 图像：所有 KPI 迷你走势图、延迟条形图和时间线可视化均以内联 SVG 渲染。零外部图片。

## 不要做
- 不要使用真实公司名称、日历日期或真实员工照片。
- 不要使用 CDN 链接、Google Fonts 或 source maps；始终设置 base: './'。
- 在 <768px 移动端不要显示键盘快捷键文字提示；改为显示 'Swipe to navigate'。
- 在 1440x900 桌面端或 390x844 移动端不要出现水平溢出。
- 除可选的 [CREDIT] 外，不要提及 VibeFather 或竞争对手。

---
— Prompt by VibeFather · https://vibefather.ai/t/company-all-hands-presentation-deck · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
