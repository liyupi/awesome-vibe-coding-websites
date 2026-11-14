> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# Bento Grid SaaS 落地页

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的单页主页，[BRAND] 是一款为 [AUDIENCE] 虚构的 [PRODUCT] 产品。整体观感温暖明亮：奶油色背景、带细边框和大圆角的白色卡片、墨色文字，并且恰好只有一处焦橙色点缀。核心是一个非对称的 12 列便当网格（bento grid），其中的磁贴包含可用的微交互：递增计数的数字、悬停时重绘的 SVG 迷你折线图、范围标签页、可切换的开关、一个目标环、带提示框的柱状图，以及一个用 Cmd/Ctrl+K 打开的模拟命令面板。接着是无 logo 的社会认同（大号统计数据加上带首字母头像的引言墙）、带动态月付/年付切换的定价、手风琴式 FAQ、深色收尾 CTA 横幅和一个简洁页脚。

- 受众：正在评估 [BRAND] 的访客：[AUDIENCE] 以及为购买拍板的人。他们会快速浏览、试用交互磁贴，并希望快速看到价格和隐私方面的答案。
- 目标：通过让访客在功能磁贴内亲自操作，展示产品沉稳、可信且实用，然后引导他们前往首屏、定价和收尾横幅中的 [PRIMARY_CTA] 按钮。
- 语气：沉稳、平实、略带温度。短句、具体数字，不用炒作词汇，不用感叹号。感觉像一本做工精良的笔记本，而不是驾驶舱。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react、react-dom 18（MIT）、motion（motion.dev，从 motion/react 导入）（MIT）、lucide-react（ISC）、@fontsource-variable/fraunces（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）、@fontsource/geist-mono（OFL-1.1）、tailwindcss 3.4、postcss、autoprefixer（MIT）、vite 5、@vitejs/plugin-react、typescript（MIT / Apache-2.0）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 安装配置：
  - 使用 npm create vite@5 以 react-ts 模板搭建脚手架，然后安装 motion、lucide-react、@fontsource-variable/fraunces、@fontsource-variable/inter、@fontsource/geist-mono，以及作为开发依赖的 tailwindcss@3.4、postcss、autoprefixer。
  - vite.config.ts：plugins [react()]，base './'，build.outDir 'dist'，build.sourcemap false。保留默认压缩配置。
  - tailwind.config.js content：['./index.html','./src/**/*.{ts,tsx}']。扩展 colors：cream #F6F2EA、sand #EFE8DC、line #E4DCCD、line-strong #D8CDB9、ink #1D1B17、muted #6B6459、accent #E8590C、accent-deep #C94A08、accent-tint #FCE6D9，以及 tint-oat #EADFCB、tint-clay #F0DCCF、tint-sage #DDE3D3、tint-stone #E1DDD6。
  - tailwind.config.js fontFamily：display ['Fraunces Variable','Georgia','serif']、sans ['Inter Variable','system-ui','sans-serif']、mono ['Geist Mono','ui-monospace','monospace']。borderRadius：card 28px、inner 16px、band 36px。boxShadow：card '0 1px 0 rgba(29,27,23,0.04), 0 1px 2px rgba(29,27,23,0.05)'、lift '0 18px 40px -18px rgba(29,27,23,0.22)'、panel '0 30px 80px -20px rgba(29,27,23,0.35)'。
  - src/main.tsx 导入 '@fontsource-variable/fraunces'、'@fontsource-variable/inter'、'@fontsource/geist-mono/400.css'、'@fontsource/geist-mono/500.css' 和 './index.css'。
  - src/index.css：Tailwind 指令；html scroll-behavior smooth（在 prefers-reduced-motion 下为 auto）；body bg-cream text-ink font-sans antialiased；::selection bg accent-tint；:focus-visible outline 2px solid #E8590C，偏移 2px；.tabular {font-variant-numeric: tabular-nums}；一个 @media (prefers-reduced-motion: reduce) 块，将动画和过渡时长设为 0.01ms。
  - 所有文案、套餐、引述、FAQ 条目、色板条目和图表数据数组都放在 src/content.ts 中。本提示词中的文案是按默认变量值编写的。如果变量值不同，请重写每个标题、卡片标签、统计数据、引述、套餐功能、FAQ 回答和色板条目，以适配新的品牌和产品。每个字符串的长度保持在原文的约 20% 以内，以保证布局稳定。
  - src/components 中的组件：Nav、Hero、GlimpseRow、BentoGrid（每个卡片一个文件）、CommandPalette、CountUp、Sparkline、Toggle、SocialProof、Pricing、Faq、ClosingBand、Footer、Toast、Reveal。App.tsx 按页面顺序渲染它们。
  - 共享 hooks：usePrefersReducedMotion（封装 Motion 的 useReducedMotion）和 useCommandPalette（一个带有 open/close 状态的 context，以及一个监听 Meta+K / Ctrl+K 并调用 preventDefault 的全局 keydown 监听器）。
  - index.html：<title>[BRAND] — [PRODUCT] for [AUDIENCE]</title> 和 <link rel="icon" href="./favicon.svg" type="image/svg+xml">。public/favicon.svg 是用代码绘制的 logo 标记。

## 变量
- [BRAND] — 品牌名称（默认："Brindle"）。虚构的产品名称，一到两个词
- [PRODUCT] — 产品类别（默认："team analytics"）。产品是什么，小写，1–3 个词
- [AUDIENCE] — 目标受众（默认："product and engineering teams"）。面向谁，复数名词短语
- [HEADLINE] — 主视觉标题（默认："See how your team really works."）。短衬线标题，4–8 个词，以句号结尾
- [PRIMARY_CTA] — 主行动号召（默认："Start free for 14 days"）。按钮标签，2–5 个词
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/bento-grid-saas-landing-page（默认：是；删除此行即可移除）

页面与区块（Pages & Sections）下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 奶油色（Cream）`#F6F2EA` — 页面背景
- 白色（White）`#FFFFFF` — 卡片和磁贴表面、调色板面板
- 沙色（Sand）`#EFE8DC` — 次级表面：hero 预览框、非活动胶囊轨道、磁贴内嵌区域、kbd 标签
- 线条色（Line）`#E4DCCD` — 卡片、分隔线、图表网格线上的 1px 细边框
- 强线条色（Line strong）`#D8CDB9` — 悬停时的卡片边框、开关关闭状态轨道
- 墨色（Ink）`#1D1B17` — 主文本、高亮定价卡片、收尾带背景、toast
- 柔和色（Muted）`#6B6459` — 次级文本、说明文字、坐标轴标签
- 焦橙色（Burnt orange）`#E8590C` — 唯一强调色：主按钮、开启状态的开关、迷你折线描边、活动数据点、焦点环、一个高亮统计数据。绝不用于大面积背景。
- 深焦橙色（Burnt orange deep）`#C94A08` — 主按钮悬停和按下状态
- 强调色调（Accent tint）`#FCE6D9` — 眉标圆点光晕、高亮调色板行、精选引言卡片、迷你折线区域填充顶部
- 头像色调（Avatar tints）`#EADFCB / #F0DCCF / #DDE3D3 / #E1DDD6` — 引言墙中首字母背后的背景圆，按该顺序轮换。首字母以墨色绘制。

### 排版
- 展示字体：hero 标题、章节标题、套餐价格、收尾带标题：Fraunces Variable（OFL），字重 400/500/600
- 文本字体：正文、导航、按钮、磁贴标签、FAQ：Inter Variable（OFL），字重 400/500/600
- 数字字体：计数器、统计数据、图表数值、kbd 提示、价格的分和单位：Geist Mono（OFL），字重 400/500

### 布局与动效
- 间距：8px 基准单位。容器最大宽度 1200px，居中，水平内边距 24px（640px 以下为 20px）。章节垂直内边距桌面端 128px，平板端 96px，移动端 72px。章节标题到内容间距 56px。Bento 间距 16px。卡片内边距 28px（移动端 22px）。标题：hero 桌面端 76px/1.02，平板端 56px，移动端 42px，Fraunces 500，letter-spacing -0.02em，font-variation-settings 'opsz' 144。章节 h2 桌面端 52px/1.05，移动端 36px，Fraunces 500。正文 17px/1.6 Inter 400；磁贴标签 15px Inter 600；说明文字 13px Inter 500 柔和色。眉标 12px Inter 600 大写，0.08em 字距，柔和色。
- 圆角：卡片和磁贴统一 28px（每个磁贴、引言卡片和定价卡片使用相同值）。内部元素如图表槽、调色板行和输入框为 16px。收尾带和 hero 预览框为 36px。按钮、胶囊、开关、标签页和头像为全圆角。
- 动效：滚动显现：每个章节的直接子元素淡入上移（opacity 0→1，y 16→0），持续 0.5s，缓动 [0.22,1,0.36,1]，交错 0.06s。当 20% 进入视口时触发一次，使用 Motion 的 whileInView 和 viewport once。
- 动效：数字递增：当元素 50% 进入视口时（一次），数字在 1.4s 内以 easeOut 从 0 动画到目标值，使用 Motion 的 animate()，用 Intl.NumberFormat 和等宽数字格式化，使宽度永不抖动。
- 动效：迷你折线：进入视口时以及每次 pointerenter 时，描边通过将 stroke-dashoffset 从路径长度动画到 0 来重绘，持续 0.9s easeOut，区域填充在 0.6s 内从 0 淡入到 1。
- 动效：磁贴：悬停时 translateY(-2px)，边框从 #E4DCCD 变为 #D8CDB9，阴影从 card 变为 lift，持续 0.25s。
- 动效：按钮：主按钮悬停时变暗为 accent-deep，按下时缩放至 0.98。主按钮中的 ArrowRight 图标悬停时右移 3px。
- 动效：开关：滑块以 Motion 弹簧（stiffness 500，damping 32）滑动，轨道颜色在 0.2s 内交叉淡入淡出。
- 动效：定价切换：活动胶囊背景使用共享的 Motion layoutId 在选项之间滑动。每个价格滚动：旧值向上退出（y 0→-14，opacity →0），新值从下方进入（y 14→0），持续 0.3s，使用 AnimatePresence mode popLayout。
- 动效：手风琴：高度在 0.32s 内以缓动 [0.22,1,0.36,1] 从 0 动画到 auto，内容淡入。加号图标旋转 45° 变为 ×。
- 动效：命令面板：背景在 0.15s 内淡入，面板在 0.18s 内从 scale 0.96、y 8 变为 scale 1、y 0。关闭时反向。
- 动效：导航：滚动 8px 后，背景从透明变为 80% 不透明度的奶油色，带 backdrop-blur 12px，并获得细线底部边框，过渡 0.2s。
- 动效：prefers-reduced-motion：无显现或交错，计数器立即显示最终值，迷你折线完整绘制渲染，价格变化不滚动，手风琴和面板立即打开，集成高亮循环停止。
- 图像：无照片或位图。所有视觉元素均以代码绘制：内联 SVG 迷你折线、条形图、进度环和淡点网格图案，以及 1.75 描边宽度的 Lucide 图标。标志图形是一个 24px 墨色圆角方块（半径 7），内含三根垂直奶油色条，高度分别为 8、12 和 16px；最高的条为焦橙色。它位于 Fraunces 600、21px 的文字标志 [BRAND] 旁边。头像是色调圆圈中的首字母。收尾带在 22% 不透明度下有焦橙色的抽象同心四分之一圆弧。没有吉祥物、人物插图或标志。

## 页面与区块
### 首页（`index.html`）
1. **导航（Nav）** — 左侧：logo 标记加文字标识 '[BRAND]'，链接到 ./index.html#top。中间链接：Features（#features）、Customers（#customers）、Pricing（#pricing）、FAQ（#faq），写作 ./index.html#features 等。右侧：一个文本链接 'Sign in'（./index.html#top）和一个带 ArrowRight 图标的小型主色胶囊按钮 'Get started'，链接到 #pricing。
   布局：Sticky top-0，z-40，高度 68px，容器宽度。Flex 布局，space-between。链接为 15px Inter 500，muted 色，悬停时变为 ink 色。900px 以下时，中间链接和 Sign in 隐藏，出现一个 40px 圆形 Menu 图标按钮。点击后打开导航下方的全宽面板：白色，圆角 28px，距边缘 16px，链接以 20px 堆叠，并有一个全宽主色按钮。点击链接即关闭。
   动效：滚动状态如 Design motion 中所述。移动端面板以 0.2s 淡入并向下滑动 8px。
2. **Hero** — 眉标胶囊：一个 6px 焦橙色圆点，带 accent-tint 光晕，然后是 'New · Weekly focus reports'。标题：'[HEADLINE]'。副文案：'[BRAND] turns commits, tickets and calendars into a calm weekly read for [AUDIENCE]. No surveillance, no spreadsheets, no extra meetings.' 按钮：主色 '[PRIMARY_CTA]' 带 ArrowRight（链接到 #pricing），以及次要按钮 'Take the 2-minute tour' 带 PlayCircle 图标（链接到 #features）。下方小字：'No credit card. Connects in under five minutes.'
   布局：居中文本列，max-width 760px，padding-top 桌面端 96px / 移动端 56px。眉标为白色胶囊，带细线边框，13px，padding 6px 14px，标题上方 24px。标题居中，桌面端 max-width 13ch。副文案 19px，muted 色，max-width 560px，下方 24px。按钮高 48px，水平 padding 22px，间距 12px，副文案下方 36px。主色按钮为 accent 配白字；次要按钮为白色配细线边框和 ink 文字。480px 以下时全宽堆叠。Hero 背后是一个绝对定位的 SVG 点阵网格（点 1.2px，间距 22px，颜色 #D8CDB9），带从中心向外淡出的径向遮罩，不透明度 70%。
   动效：眉标、标题、副文案、按钮和小字在页面加载时以 0.08s 错峰淡入上移，不随滚动触发。
3. **产品预览行（Product glimpse row）** — 框架内三个迷你卡片。卡片 A 'Focus hours this week'：大计数器 '31.4 h' 和说明 '+3.2 h vs last week'，其中 '+3.2 h' 为 accent 色，下方一条 24 点 sparkline。卡片 B 'Review wait time'：数值 '6.1 h median' 和 7 根竖条，标注 M T W T F S S，其中周四的条为 accent 色，其余为 #D8CDB9。卡片 C 'Today'：三行，每行一个状态点和文本：'Sprint 42 on track'（accent 点）、'3 reviews waiting'（muted 点）、'Planning at 14:00'（muted 点）。
   布局：Hero 按钮下方 64px。一个 sand（#EFE8DC）框架，圆角 36px，padding 12px。其左上角有一条 28px 高的条带，内含三个 8px 圆点，颜色 #D8CDB9，间距 6px。内部为 12 列网格，间距 12px：A 跨 5 列，B 跨 4 列，C 跨 3 列。三者均为白色卡片，圆角 28px，padding 24px，高度 200px。平板端 A 和 B 各跨 6 列，C 隐藏。移动端 A 在上，B 在下，C 隐藏。
   动效：框架在 Hero 文案之后 0.3s 淡入上移。卡片以 0.08s 错峰进入。计数器在加载时递增，sparkline 在加载时绘制。
4. **Bento 功能（#features）** — 眉标 'What you get'。H2 'Everything your team ships, measured gently.' 副标题：'Seven small tools that answer the questions you'd otherwise ask in a meeting.' 卡片：（T1）'Live pulse' — 'Activity across repos, tickets and calendars, updated every minute.' 一个计数器 '12,480' 带标签 'events today'，范围标签页 24h / 7d / 30d（每个标签页切换各自的硬编码 24 点数组和计数器目标值：12,480 / 81,204 / 342,915），以及一条带面积填充的大 sparkline。（T2）'Command palette' — 'Jump to any metric, report or action without leaving the keyboard.' 一个假搜索框 'Search metrics, reports, actions…'，带一个 kbd 小标签，Mac 上显示 '⌘ K'，其他平台显示 'Ctrl K'（通过 navigator.userAgent 检测）。下方三个静态建议标签：'Cycle time'、'Focus hours'、'Weekly report'。（T3）'Nudges, not noise' — 三个可用的开关：'Chat digest'（开）、'Weekly email'（关）、'Anomaly alerts'（开）。底部一行显示 'You'll get 2 updates a week'，并根据开关重新计算（digest = 1，email = 1，alerts = 'as needed'）。（T4）'Quarter goal' — 一个 112px 的 SVG 圆环，8px 描边，轨道 #EFE8DC，accent 进度计数到 72%，中心数字为 Geist Mono 28px，说明文字 'Deploys reviewed within a day'。（T5）'Cycle time' — '4.8 days median, down from 7.1'。一个 7 条柱状图，周值 [7.1, 6.6, 6.2, 5.9, 5.4, 5.1, 4.8]；最后一根柱为 accent 色，其余为 #D8CDB9。悬停某根柱时显示一个小型 ink 提示框，数值用 mono 字体，并将该柱变为 accent 色。（T6）'Private by design' — 一个 40px sand 圆形内的 Lock 图标，文本 'Team-level views by default. No keystroke logging, no screenshots, ever.' 以及一个可用开关 'Anonymize individuals'（开）。（T7）'Plays well with your stack' — 一个 4×2 网格的 44px sand 方块，每个内含一个 Lucide 图标：GitBranch、Ticket、Calendar、MessageSquare、FileText、Bell、Database、Workflow。说明文字 '40+ connectors, set up in minutes'。
   布局：左对齐标题，h2 max-width 18ch，副标题为 muted 色 18px。网格：桌面端（≥1024px）12 列，grid-auto-rows 232px，间距 16px。T1 col-span-6 row-span-2；T2 col-span-6；T3 col-span-3；T4 col-span-3；T5、T6 和 T7 各 col-span-4。位置：第 1 行为 T1 和 T2；第 2 行为 T1（延续）、T3 和 T4；第 3 行为 T5、T6 和 T7。平板端（640–1023px）：6 列，自动行高 232px。T1 跨 6 列，row-span 2；T2 跨 6 列；T3 跨 3 列；T4 跨 3 列；T5 跨 6 列；T6 跨 3 列；T7 跨 3 列。移动端：1 列，自动高度，T1 min-height 420px。每张卡片均为白色卡片，圆角 28px，padding 28px，1px #E4DCCD 边框和卡片阴影，采用 flex 列布局：标签（15px Inter 600）、描述（14px muted 色，最多 2 行），然后是视觉元素，填充剩余空间并推到底部。T1 的 sparkline 填充卡片底部 55%，带 3 条水平虚线网格线，颜色 #E4DCCD。指针悬停其上时显示一条垂直细线、一个 7px accent 圆点带 2px 白色圆环，以及一个小型 ink 提示框，数值用 mono 字体，全部吸附到最近的点。T1 的标签页为 sand 胶囊轨道，带一个白色滑动激活胶囊（共享 layoutId）。点击 T2 的假输入框，或在任意位置按 Cmd/Ctrl+K，打开 Command palette。
   动效：卡片以 0.06s 错峰显现。T1 计数器在进入视口时递增，标签页切换时重新计数（从旧值到新值）。T1 路径通过在 0.5s 内动画 d 属性在数据集之间变形；悬停时的重绘如 Design motion 中所述。T4 圆环的 stroke-dashoffset 与其计数器同步动画。T5 柱状图从 scaleY 0（原点底部）生长，进入视口时以 0.05s 错峰。T7 中，accent-tint 高亮每 1.2s 循环一个图标方块（图标变为 accent 色）。在减少动效模式下停止，卡片悬停时暂停。
5. **Command palette（覆盖层）** — 输入框占位符 'Type a command or search…'。分组与条目：Metrics — Cycle time、Focus hours、Review wait time、Deploy frequency；Reports — Weekly focus report、Sprint retro summary、Quarter goals；Actions — Create a goal、Invite a teammate、Toggle anomaly alerts、Export as CSV。每个条目有一个 Lucide 图标（Timer、Clock、Hourglass、Rocket、FileText、NotebookPen、Target、Plus、UserPlus、BellRing、Download）。空状态：'No results for “{query}”.' 底部提示：'↑↓ to navigate'、'↵ to open'、'esc to close'，mono 12px。
   布局：一个固定覆盖层，ink 色 30% 不透明度，backdrop-blur 4px。面板宽 560px（移动端 calc(100% − 32px)），距顶部 18vh，白色，圆角 20px，面板阴影。一个 56px 输入行带 Search 图标，下方有细线分隔。列表 max-height 340px 可滚动，分组标签为 11px 大写 muted 色。行高 44px，圆角 12px；高亮行有 accent-tint 背景和 accent 图标。底部为 40px sand 条带。过滤为对标签进行不区分大小写的子串匹配。方向键移动高亮并循环。Enter 或点击执行条目：面板关闭，Toast 显示 'Opened “Cycle time” — demo only'。'Toggle anomaly alerts' 会真正切换 T3 的开关。Escape 或点击背景关闭。打开时输入框聚焦，关闭时焦点返回触发元素。打开时锁定 body 滚动。role=dialog 带 aria-modal。
   动效：如 Design motion 中所述。高亮在行之间移动，带共享 layoutId 背景。
6. **Toast（全局）** — 由触发它的任何内容传入的简短状态文本。
   布局：固定底部居中，距底部 24px。一个 ink 胶囊，cream 色 14px 文字，padding 10px 18px，带一个 accent 色的 Check 图标。一次一个 toast；2.4s 后自动消失。aria-live polite。
   动效：从 y 12 进入，透明度 0，持续 0.2s，退出时反向。
7. **社会证明（#customers）** — 眉题 'Customers'。H2 'Teams that stopped guessing.' 统计行：'38%' 'fewer status meetings'、'4.2 h' 'focus time regained per person, weekly'、'2,100+' 'teams on [BRAND]'、'11 min' 'median setup time'。第一个统计数字为强调色；其余为墨色。引言墙，六张卡片：1) 'We cancelled two standing meetings in the first week. The Monday report says everything they used to.' — Maren Okafor, Engineering Manager, Northfold。2) 'It's the first metrics tool my team didn't ask me to switch off.' — Ilya Brandt, Head of Product, Quaywise。3) 'Cycle time went from nine days to five once we could see where reviews were waiting.' — Priya Velasco, Staff Engineer, Tinmouth Labs。4) 'Setup took less time than writing this quote.' — Jonah Ekwueme, CTO, Saltgrass。5) 'The anonymized team view is what got our works council to say yes.' — Lotte Haugen, People Ops Lead, Fernhall。6) 'I open the command palette more often than our wiki.' — Dev Ramaswamy, Product Designer, Kestrel & Co. 所有姓名和公司均为虚构。
   布局：居中标题。统计行是一个 4 列网格（移动端 2×2），位于一张白色卡片内，圆角 28px，由 1px #E4DCCD 垂直分隔线分隔（移动端为水平和垂直分隔线）。每个单元格内边距 32px，数字使用 Geist Mono 500、56px（移动端 40px），等宽数字，标签在下方 14px 弱化色。下方 56px 处是引言墙：CSS 多列，桌面端 3 列，平板 2 列，移动端 1 列，column-gap 16px。卡片使用 break-inside avoid 和 margin-bottom 16px。每张卡片为白色，圆角 28px，内边距 28px，引言使用 Fraunces 400、21px/1.4、墨色，然后是一行：40px 首字母圆形（Inter 600 14px，色调轮换 oat、clay、sage、stone）和姓名（15px 600）及职位 · 公司（13px 弱化色）堆叠。卡片 3 为特色卡片：强调色浅底背景、1px #F5C9AE 边框和 26px 引言。
   动效：统计数字在进入视口时递增（38、4.2 保留一位小数、2100 显示为 2,100+、11）。引言卡片以 0.06s 错峰显现。
8. **定价（#pricing）** — 眉题 'Pricing'。H2 'Simple pricing that grows with the team.' 切换：'Monthly' | 'Yearly'，Yearly 旁有一个小的强调色浅底徽章 'Save 20%'。方案：Starter — 两个周期均为 $0，'per seat / month'，'For small teams getting a first read.'，功能：Up to 5 seats；30 days of history；Weekly focus report；Chat digest。CTA 'Start free'。Team（高亮，徽章 'Most popular'）— $12 月付 / $10 年付，'per seat / month'，'For teams that want goals and alerts.'，功能：Everything in Starter；Unlimited history；Goals and anomaly alerts；Command palette and saved views；Anonymized team view。CTA '[PRIMARY_CTA]'。Business — $24 月付 / $19 年付，'per seat / month'，'For larger orgs with security reviews.'，功能：Everything in Team；SSO and SCIM；Custom data retention；Dedicated success manager；99.9% uptime SLA。CTA 'Talk to us'。当 Yearly 激活时，每个付费价格下方的行显示 'billed yearly'；当 Monthly 时，显示 'billed monthly'。细则：'Prices in USD, excluding tax. Change plans any time.'
   布局：居中标题。切换控件在其下方 32px 居中：一个沙色胶囊轨道，内缩 4px，两个 40px 分段，14px Inter 600，激活分段为白色胶囊带卡片阴影，使用 role=radiogroup。方案网格为 3 列，间距 16px，移动端堆叠且 Team 在前。卡片圆角 28px，内边距 32px。Starter 和 Business 为白色带细线边框。Team 为墨色（#1D1B17）卡片，奶油色文字，桌面端上移 12px（translateY -12px），'Most popular' 徽章为强调色胶囊位于其右上角。价格为 Fraunces 500、56px，'$' 为 28px，顶部对齐，单位行为 Geist Mono 13px 弱化色（墨色卡片上为 #B8AFA2）。描述为 15px。CTA 为全宽 48px 按钮：Team 上为强调色，其他为白色带细线边框。功能列在细线下方，带 16px 对勾图标（Team 上为强调色，其他为墨色），15px，行间距 12px。
   动效：胶囊在分段间滑动，价格如设计动效中滚动。卡片以错峰显现。
9. **FAQ（#faq）** — 左侧：H2 'Questions, answered.' 和一行 'Still curious? Write to hello@[brand].example and a person will reply within a day.' 作为纯文本，不是链接。手风琴项：1) 'Does [BRAND] track individual people?' — 'No. Everything is reported at team level by default, and the anonymize switch hides names even from admins. We never record keystrokes or screens.' 2) 'Which tools does it connect to?' — 'Your code host, issue tracker, calendar and team chat, plus a CSV import for anything else. Most teams connect four sources in the first session.' 3) 'How long does setup take?' — 'The median is eleven minutes. You connect sources, pick a team and the first weekly report arrives the next Monday.' 4) 'Can we try it before paying?' — 'Yes. Starter is free for up to five seats, and Team has a 14-day trial with every feature switched on.' 5) 'How does yearly billing work?' — 'You pay for twelve months up front at the yearly rate and can add seats any time; extra seats are prorated.' 6) 'Where is our data stored?' — 'In the region you choose at signup, encrypted at rest and in transit. You can export or delete it from settings at any time.'
   布局：桌面端 12 列网格：左列跨 4 列，在 top 120px 处粘性定位；右列跨 8 列。移动端堆叠。项位于一张白色卡片内，圆角 28px，由 1px #E4DCCD 分隔线分隔。每个触发器为全宽按钮，最小高度 72px，水平内边距 24px，问题为 17px Inter 600，右侧为 32px 沙色圆形中的 Plus 图标。答案为 16px 弱化色，内边距 24px，max-width 62ch。一次只打开一项，项 1 默认打开。触发器使用 aria-expanded 和 aria-controls。
   动效：高度和图标动画如设计动效中所述。
10. **结尾 CTA 横幅** — 标题：'Give your team its afternoons back.' 副标题：'Connect your tools today and read your first weekly report on Monday.' 一个静态邮箱输入框（占位符 'you@company.com'）带主按钮 '[PRIMARY_CTA]'。点击按钮（type=button，无 form 元素）显示 Toast 'Demo only — nothing was sent.' 下方小字：'Free for up to 5 seats · Cancel any time'。
   布局：在容器内，一个全宽墨色（#1D1B17）块，圆角 36px，内边距桌面端 80px / 移动端 48px 24px，overflow hidden。文字左对齐，max-width 620px。标题为 Fraunces 500、56px（移动端 36px）、奶油色；副标题为 18px、#B8AFA2。输入行为 56px 高：#2A2722 输入框带 1px #3A362F 边框和奶油色文字，按钮在其旁（移动端堆叠），合计 max-width 480px。在右边缘，一个绝对定位的 SVG，由 5 个同心四分之一圆弧组成（半径 80–400px，步长 80，1.5px 描边，焦橙色 22% 不透明度），锚定在右下角。
   动效：横幅通过淡入上移显现。圆弧通过 stroke-dashoffset 一次性绘制，持续 1.2s，错峰 0.1s，或在减少动效下为静态。
11. **页脚** — 标志标记加 '[BRAND]' 和一行 'Calm [PRODUCT] for [AUDIENCE].' 列：Product（Features → ./index.html#features，Pricing → ./index.html#pricing，Changelog）、Company（About、Careers、Contact）、Resources（Docs、Privacy、Terms）。没有真实区块的链接指向 ./index.html#top。底行：左侧 '© 2026 [BRAND] Inc.'，右侧为 Credit 部分提供的可选署名链接（如提供）。
   布局：padding-top 96px 和 padding-bottom 40px。12 列网格：品牌块跨 6 列，每个链接列跨 2 列。移动端品牌块在顶部，各列形成 3 列行。列标题为 13px Inter 600 墨色；链接为 14px 弱化色，悬停时变为墨色。1px #E4DCCD 分隔线位于下方 64px 处，然后底行为 13px 弱化色，space-between。
   动效：除区块显现外无其他动效。

## 资产
- 字体：Fraunces Variable、Inter Variable 和 Geist Mono（400、500），均为 OFL 授权，以 Fontsource npm 包形式安装并由 Vite 打包。在 ASSETS.md 中逐一列出每个字体，注明其包名、来源（fontsource.org）、作者和 OFL-1.1 授权。
- 图标：来自 lucide-react 包（ISC）的 Lucide 图标，描边宽度 1.75：ArrowRight、PlayCircle、Menu、X、Search、Lock、Check、Plus、GitBranch、Ticket、Calendar、MessageSquare、FileText、Bell、Database、Workflow、Timer、Clock、Hourglass、Rocket、NotebookPen、Target、UserPlus、BellRing、Download。在 ASSETS.md 中注明 lucide-react（ISC）。
- 图像：不使用位图图像。标志图形、favicon（public/favicon.svg）、点阵背景、迷你趋势线、条形、进度环、收尾带弧线和首字母头像，全部为内联 SVG 或由代码绘制的 CSS。

## 不要做
- 不要任何形式的后端：不要服务器代码、API 路由、数据库、认证或第三方 API。每个图表数值、引语和调色板条目都硬编码在 src/content.ts 中。
- 不要任何会提交到某处的 <form>。邮箱字段和所有 CTA 都是静态的；收尾横幅的按钮只显示一个 'Demo only' 提示。
- 不要真实品牌 logo 或客户 logo。社会证明只使用虚构的人物、虚构的公司和绘制的首字母。
- 不要真实人物的照片或肖像。头像使用带色圆圈中的首字母。
- 不要任何真实分析工具的文案、口号、产品名称或 UI 复刻。集成磁贴使用通用 Lucide 图标，绝不使用供应商的 logo 或名称。
- 不要吉祥物或标志性插画。只使用抽象的代码绘制 SVG。
- 不要来自 Aceternity UI、Tailwind Plus / Tailwind UI 或任何付费模板套件的代码或组件。每个效果都从零构建。
- 不要商业字体，也不要字体 CDN（fonts.googleapis.com、fonts.gstatic.com、Adobe Fonts）。通过 Fontsource 自托管 Fraunces、Inter 和 Geist Mono。
- 不要 CDN <script> 或 <link> 标签，不要热链接文件，不要分析统计。所有内容都打包在 dist/ 内。
- 生产构建中不要 source map，也不要将 src/ 文件夹复制到 dist/ 中。
- 使用相对资源路径（Vite base './'）。内部链接指向文件名，例如 ./index.html#pricing，绝不指向裸目录或 '/'。
- 不要将强调色用于大面积背景区域。焦橙色（Burnt orange）仅用于关键操作、开关、数据高亮和焦点环。
- 不要混用卡片圆角或内边距。每个磁贴、引语卡片和定价卡片都使用 28px 圆角和相同的内边距。
- 不要添加深色模式、额外页面、cookie 横幅、SEO meta 标签或 JSON-LD。
- 在 1440×900 或 390×844 下不要有控制台错误，移动端不要有水平滚动。
- 不要忽略 prefers-reduced-motion。所有显现、计数递增、重绘、滚动和循环高亮在其下必须被禁用或立即完成。
- 保持 dist/ 在 20 MB 以下。除非用户要求，不要更改技术栈。

---
— Prompt by VibeFather · https://vibefather.ai/t/bento-grid-saas-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
