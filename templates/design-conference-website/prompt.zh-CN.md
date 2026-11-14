> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 设计大会网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的两页网站（主页和日程页）。[BRAND] 是一个小型独立的两日会议，主题为 [EVENT_TOPIC]，于 [EVENT_DATES] 在 [CITY] 举办。主页采用瑞士活动海报风格设计：纸白底色、近黑墨色、一抹朱红点缀、硬朗分隔线、编号区块，以及一个巨大的可变字体活动名称标题——当指针靠近时，字母会变得更粗更宽。页面涵盖关于、讲者（抽象代码生成肖像，悬停显示简介）、场地（手绘 SVG 地图）、含售罄档位的票务档位，以及 FAQ。日程页列出每一场会议，提供日期标签和轨道筛选，完全在浏览器端运行。所有内容均为虚构。

- 受众：[AUDIENCE]，正在决定是否购票的人，以及活动期间用手机查看日程的参会者。
- 目标：让活动在五秒内显得值得参加，然后让访客无摩擦地到达票务档位或日程页。
- 语调：自信、冷峻、略带主见，像设计师写给设计师的海报。短句、具体数字、不吹嘘、不用感叹号。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react (MIT)、react-dom (MIT)、motion (MIT)、lucide-react (ISC)、@fontsource-variable/anybody (OFL-1.1)、@fontsource-variable/inter (OFL-1.1)、@fontsource/jetbrains-mono (OFL-1.1)、vite (MIT)、@vitejs/plugin-react (MIT)、typescript (Apache-2.0)、tailwindcss (MIT)、postcss (MIT)、autoprefixer (MIT)
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化设置：
  - 使用 Vite 的 react-ts 模板搭建脚手架；package.json 脚本："dev": "vite"，"build": "tsc -b && vite build"，"preview": "vite preview"。
  - 项目根目录下有两个真实的 HTML 入口文件：index.html（挂载 src/home.tsx）和 schedule.html（挂载 src/schedule.tsx）。每个文件都包含 <title>[BRAND] — [EVENT_TOPIC] conference</title>（schedule 页面为：<title>Schedule — [BRAND]</title>）以及 <link rel="icon" href="./favicon.svg">。
  - vite.config.ts：base: './'，plugins: [react()]，build: { sourcemap: false, rollupOptions: { input: { main: 'index.html', schedule: 'schedule.html' } } }。
  - public/favicon.svg：一个 32×32 的朱红色 #FF4A1C 正方形，中心有一个半径为 9 的黑色 #141414 圆形，除此之外没有其他内容。
  - 字体在 src/styles.css 中通过 src/fonts.ts 里的 JS 导入语句一次性引入：import '@fontsource-variable/anybody/wdth.css'（字体族 'Anybody Variable'，wght 100–900，wdth 50–150），import '@fontsource-variable/inter'（字体族 'Inter Variable'），import '@fontsource/jetbrains-mono/400.css' 和 '@fontsource/jetbrains-mono/700.css'（字体族 'JetBrains Mono'）。两个入口文件都导入 src/fonts.ts 和 src/styles.css。
  - tailwind.config.ts：content ['./index.html','./schedule.html','./src/**/*.{ts,tsx}']；theme.extend.colors { paper: '#F3EFE6', shade: '#E7E1D4', ink: '#141414', mute: '#6E6A62', signal: '#FF4A1C', signaldeep: '#D93A12' }；fontFamily { display: ['"Anybody Variable"','sans-serif'], sans: ['"Inter Variable"','sans-serif'], mono: ['"JetBrains Mono"','monospace'] }；keyframes marquee（from translateX(0) to translateX(-50%)）和 pinpulse（0%: scale(1) opacity 0.6; 100%: scale(2.4) opacity 0），对应动画 marquee: 'marquee 40s linear infinite' 和 pinpulse: 'pinpulse 2s ease-out infinite'。
  - src/styles.css：@tailwind base/components/utilities；body bg-paper text-ink font-sans antialiased；添加一个 .tabular 类，设置 font-variant-numeric: tabular-nums；添加一个全局 @media (prefers-reduced-motion: reduce) 块，对所有元素设置 animation: none 和 transition-duration: 0.01ms。
  - 所有文案、演讲嘉宾、议程场次、票档、FAQ 条目、导航链接以及跑马灯条目都以带类型的导出形式存放在 src/content.ts 中（site、nav、hero、marquee、about、speakers、venue、tiers、faq、cta、footer、schedule）。组件只从中读取数据。
  - 共享组件位于 src/components/：Header.tsx、PosterHeadline.tsx、Marquee.tsx、SectionHead.tsx、Portrait.tsx、VenueMap.tsx、TicketDialog.tsx、CtaBand.tsx、Footer.tsx。页面位于 src/pages/Home.tsx 和 src/pages/Schedule.tsx。
  - src/lib/useReducedMotion.ts：封装 Motion 的 useReducedMotion；每个由 JS 驱动的动画（标题、地图绘制入场、议程列表、手风琴）都会检查它，当返回 true 时渲染最终的静态状态。

## 变量
- [BRAND] — 活动名称（用作巨型海报标题）（默认："Kernfolk"）。5–10 个字母的单个单词最适合逐字母标题效果。
- [EVENT_TOPIC] — 会议主题（默认："independent web design"）
- [CITY] — 主办城市（虚构或真实均可，不使用真实场馆名称）（默认："Port Ellery"）
- [EVENT_DATES] — 活动的两天（默认："June 11–12"）。日期标签显示为 'Day 1 — Thu 11 June' 和 'Day 2 — Fri 12 June'；请根据你的日期调整星期几。
- [AUDIENCE] — 参会人群（默认："designers and front-end developers who still hand-build the web"）
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/design-conference-website（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- Paper `#F3EFE6` — 页面背景，除 Ink 色带外处处使用
- Shade `#E7E1D4` — 肖像背景、日程中的分隔行、地图陆地、卡片悬停填充
- Ink `#141414` — 所有文本、2px 线条和边框、跑马灯和页脚背景、活动标签填充
- Mute `#6E6A62` — 次要文本：角色、元标签、时长、地图街道标签
- Signal `#FF4A1C` — 唯一强调色：主按钮、主视觉圆盘（multiply）、区块编号、售罄印章、地图图钉、CTA 色带背景、焦点环
- Signal Deep `#D93A12` — 仅 Signal 按钮的悬停状态

### 排版
- Display（海报标题、区块标题、演讲者姓名、价格、大号时间）：Anybody Variable（OFL），字重 300/600/800/900
- Body（段落、简介、FAQ 回答、按钮）：Inter Variable（OFL），字重 400/500/600
- Mono（元信息行、标签、曲目名称、跑马灯、地图标签、移动端场次时间）：JetBrains Mono（OFL），字重 400/700

### 布局与动效
- 间距：12 列网格，最大宽度 1440px，桌面端侧边内边距 40px / 移动端 20px，列间距 24px。区块之间由全出血的 2px Ink 线条分隔，桌面端垂直内边距 120px / 移动端 72px。卡片内部使用 24px 内边距。每个区块以 SectionHead 开场：一行，编号为 Signal 色（Anybody 900，20px，例如 '02'），后接标题，使用 Anybody 800、font-stretch 85%、大写、clamp(40px, 6vw, 88px)、line-height 0.9，下方为 2px Ink 线条，间距 32px。
- 圆角：处处为 0：按钮、卡片、标签、对话框和输入框均为直角。唯一圆形的元素是图形中的圆（主视觉圆盘、肖像、地图图钉）。
- 动效：海报标题：每个字母为独立的 span；在 pointermove（桌面端）时，requestAnimationFrame 循环计算指针到每个字母中心的距离 d，并根据 t = 1 − smoothstep(0, 360px, d) 设置 font-variation-settings 的 'wght' 和 'wdth'：wght = 300 + 600·t，wdth = 60 + 80·t。当前值以每帧 0.14 的 lerp 系数缓动趋近目标值。当指针离开主视觉区域时，目标值回归静止状态（wght 300，wdth 60）。
- 动效：在 (pointer: coarse) 或无指针移动达 4s 的设备上，一个位于标题垂直中心的虚拟指针从左到右再返回扫过该词，每 7s 完成一个完整周期（x = centre + sin(time) · half width）。
- 动效：标题适配：在加载时和调整大小时，设置 font-size 使该词在每字母 wght 900 / wdth 140 下适配容器，上限为 300px。该词在任何指针位置下都不会换行或溢出。
- 动效：区块显现：SectionHead 和每个区块的第一个块在 20% 可见时（Motion whileInView，once: true），以 600ms ease [0.2, 0.7, 0.2, 1] 淡入并上移 24px。
- 动效：跑马灯：Ink 色带，内容在一个轨道中重复两次，translateX 0 → −50% 以 40s 线性无限循环；悬停时暂停。
- 动效：按钮：悬停时背景变为 Signal Deep（或 Ink 按钮变为 Signal），标签的箭头右移 4px，150ms。Focus-visible：3px Signal 轮廓，偏移 3px。
- 动效：减少动态效果：标题以 wght 800 / wdth 100 静态渲染，无指针跟踪，跑马灯静态并换行，无显现效果，地图完整绘制，日程和手风琴即时切换。
- 图像：无照片、无位图。所有图形均以代码绘制：主视觉圆盘（CSS）、抽象演讲者肖像（SVG，由演讲者姓名的种子随机函数生成）、场地街道地图（内联 SVG）、favicon（SVG）。图标仅来自 lucide-react。叠印理念：Signal 形状位于 Ink 之上或之后，使用 mix-blend-mode: multiply，使重叠部分呈现更深的红黑色，如同两种油墨相互叠印。

## 页面与区块
### 首页（`index.html`）
1. **页眉** — 左侧字标：一个 14px 的 Signal 方块，后接 'KERNFOLK'，使用 Anybody 900 字体，font-stretch 120%，22px，letter-spacing 0.02em。中间链接：Speakers（./index.html#speakers）、Venue（./index.html#venue）、Tickets（./index.html#tickets）、FAQ（./index.html#faq）、Schedule（./schedule.html）。右侧：Signal 按钮 'Get tickets'，链接到 ./index.html#tickets。在日程页面上，Schedule 链接显示 3px 的 Signal 下划线。
   布局：顶部粘性定位，高度 64px，Paper 背景，2px Ink 底部边框，链接使用 Inter 500 15px，间距 32px。低于 900px 时，中间链接和按钮折叠为一个 44px 的方形 Ink 按钮，内含 lucide Menu 图标；点击后打开全屏 Ink 覆盖层，五个链接以 Anybody 800 48px Paper 文字堆叠排列，底部有一个 Signal 'Get tickets' 按钮，以及一个 X 图标用于关闭。Escape 键可关闭；打开时焦点被限制在内部。
   动效：覆盖层从顶部滑下，历时 300ms；链接以 40ms 间隔交错进入。
2. **主视觉海报** — 元信息行使用 JetBrains Mono 400 13px 大写，三项之间以 2px Ink 竖线分隔：'N°01 — A conference on independent web design'、'June 11–12'、'Port Ellery'。标题：'KERNFOLK'（即 [BRAND] 值，大写）。其下为两列行：左侧为 Inter 500 22px 段落，最大 30ch：'Two days of talks, workshops and crits for designers and front-end developers who still hand-build the web.' 右侧：两个按钮，Signal 'Get tickets →'（./index.html#tickets）和 2px Ink 描边的 'See the schedule →'（./schedule.html）。底部统计行，四个单元格以 2px Ink 线分隔：'2' 天、'10' 场演讲、'4' 场工作坊、'3' 个分会场——数字使用 Anybody 900 64px 等宽数字，标签使用 Mono 13px 大写 Mute 色。
   布局：高度 min(100vh − 64px, 900px)，内容按列布局，元信息行在顶部，标题在垂直居中位置横跨全部 12 列，段落/按钮行在其下方，统计行固定在底部并带 2px Ink 顶部边框。一个直径 42vw（最大 620px）的 Signal 圆形位于标题右半部分后方，其圆心在首屏的 72% x / 46% y 处，标题文字使用 mix-blend-mode: multiply，使重叠的墨色显得更深。标题使用 Anybody Variable，大写，line-height 0.82，居中，white-space nowrap。在移动端（390px）圆盘为 70vw，居中于最后三个字母后方，段落和按钮堆叠，按钮占满宽度，统计变为 2×2 网格。
   动效：逐字母的指针响应式字重和字宽，如设计 → 动效中所述，触摸时自动扫过。加载时字母从 wght 100 / wdth 50 动画到静止状态，历时 900ms，每字母间隔 50ms，圆盘从 0.6 缩放到 1，历时 900ms。
3. **事实跑马灯** — 项目使用 JetBrains Mono 700 18px 大写 Paper 色：'June 11–12'、'Port Ellery'、'10 talks'、'4 workshops'、'3 tracks'、'Poster night'、'No sponsors on stage'、'Coffee all day'。项目之间为 lucide Asterisk 图标 18px，Signal 色。
   布局：全出血 Ink 色带，高度 56px，项目垂直居中，间距 32px，单行重复两次以实现无缝循环。
   动效：持续向左滚动，每循环 40s，悬停时暂停；减少动效模式下为静态。
4. **01 关于** — SectionHead '01' / 'About'。陈述：'Kernfolk is a small, independent conference for people who still hand-build the web. No sponsors on stage, no product demos — ten talks, four workshops and a lot of opinions about type.' 然后三列，每列有一个 Mono 13px 大写标签和一个 Inter 17px 段落：'Talks' — 'Forty-five minutes, one stage, no parallel keynotes. Every talk ends with ten minutes of real questions.'；'Workshops' — 'Twenty seats each, laptops open. You leave with code you wrote, not slides you photographed.'；'Crits' — 'Bring a homepage, get honest feedback from people who ship for a living. Kind, specific, fast.'
   布局：陈述横跨第 3–12 列，使用 Anybody 600，font-stretch 100%，clamp(28px, 3.4vw, 48px)，line-height 1.1；第 1–2 列放置一个垂直 Mono 标签 'WHY COME'，旋转 −90°。三列位于下方，为 3 列网格，带 2px Ink 顶部边框，间距 48px。移动端：陈述占满宽度，垂直标签隐藏，列堆叠。
   动效：陈述逐行显现（按句子拆分），每行向上淡入 16px，间隔 80ms。
5. **02 演讲者** — SectionHead '02' / 'Speakers'。八张卡片（姓名 — 角色，工作室 — 演讲 — 简介）：1) Mara Okonkwo-Felt — Type designer, Halfmoon Type — 'Variable fonts as interface' — 'Draws typefaces for screens first and print second. Has opinions about optical sizes that she will share at length.' 2) Jun Arakawa-Penn — Front-end lead, Fernway — 'CSS that survives five redesigns' — 'Has maintained the same stylesheet through three rebrands and one acquisition. Writes about cascade layers.' 3) Sølvi Brandt — Creative director, Studio Lintel — 'Opening: Why the web still needs posters' — 'Runs a six-person studio that makes identities for cultural venues. Prints her own gig posters on weekends.' 4) Ravi Castellanos — Accessibility lead, Northgrid — 'Contrast is a layout decision' — 'Audits public-sector sites and teaches designers to read a screen reader transcript like a storyboard.' 5) Edda Quist — Illustrator and creative coder — 'Generative art without the gimmick' — 'Makes plotter drawings from code and code from plotter drawings. Teaches SVG to people who think they hate maths.' 6) Nnamdi Hale — Performance engineer, Lowtide — 'The 14 KB homepage' — 'Gets landing pages under one round trip for a living. Will audit your site in the hallway if you ask.' 7) Clio Marchetti-Sun — Design systems, independent — 'Tokens for small teams' — 'Builds design systems for teams of three to thirty. Believes most components should be deleted.' 8) Tove Lindqvist-Reyes — Motion designer, Paper Engine — 'Motion that respects the reader' — 'Animates interfaces for news sites and insists every transition must earn its 200 milliseconds.' 网格下方有一个链接 'Full schedule →' 指向 ./schedule.html。
   布局：桌面端为 4 列网格，平板和移动端为 2 列，零间距，使用合并的 2px Ink 边框（每张卡片有右边框和下边框；网格有上边框和左边框）。每张卡片是一个 button 元素，带 aria-expanded：顶部为 4:5 宽高比的肖像 SVG，然后 20px 内边距，姓名使用 Anybody 800，font-stretch 90% 24px，角色和工作室使用 Inter 400 14px Mute 色，演讲标题使用 Mono 400 13px，带一个 10px Signal 方形项目符号。简介面板：绝对定位在肖像底部 55% 之上，Ink 背景，Paper Inter 15px 文字，20px 内边距。
   动效：悬停或聚焦（桌面端）或轻触（触摸端，切换 aria-expanded）时，简介面板从 translateY(100%) 滑到 0，历时 240ms ease-out，每个肖像形状按各自预设角度（±8–20°）旋转，历时 400ms。悬停时卡片背景从 Paper 变为 Shade。
6. **肖像生成器（演讲者使用的组件）** — Portrait.tsx 根据演讲者姓名渲染一个 240×300 的 SVG。种子 = 姓名的 FNV-1a 32 位哈希；随机 = mulberry32(seed)。背景矩形填充 Shade。绘制恰好三个形状，从 [完整圆形、半圆、四分之一圆、方形、三角形、3 条纹带] 中选取，每个形状在框架内随机位置（可能溢出边缘），大小 90–200px，旋转为 45° 的倍数。形状 1 为 Ink，形状 2 为 Signal 并带 mix-blend-mode multiply，形状 3 为 Paper。添加一条 2px Ink 框架线，内缩 12px。相同姓名始终生成相同肖像。
   布局：填充每张演讲者卡片的肖像区域，preserveAspectRatio xMidYMid slice，aria-hidden，演讲者姓名由卡片文字提供。
   动效：形状带有 CSS transition transform 400ms，以便卡片悬停时可以旋转它们。
7. **03 场地** — SectionHead '03' / 'Venue'。左列：场地名称 'The Print Hall'，使用 Anybody 800 40px，地址 '14 Ropewalk Lane, Port Ellery' 使用 Mono 15px，一段文字 'A former print works by the river, now one big room, two workshop studios and a courtyard for poster night.' 然后三行，带 lucide 图标（24px，stroke 2）和 Inter 16px 文字：TrainFront — '8 minutes on foot from Harbour Station'；Bike — 'Covered bike racks at the north gate'；Accessibility — 'Step-free entrance, hearing loop in every room'。
   布局：第 1–5 列文本，第 6–12 列地图。地图是内联 SVG viewBox 0 0 700 520，位于 2px Ink 边框中：Shade 陆地；一条河为 56px 宽的 Paper 色带，两侧各有一条 2px Ink 边缘，从 (0,430) 经 (350,380) 弯曲至 (700,450)；五条街道为 Ink 描边——Ropewalk Lane 水平位于 y=210（6px），Tanner Street 水平位于 y=110（3px），Quay Road 沿河在其上方 40px 处（6px），Mill Row 垂直位于 x=240（3px），Bell Street 垂直位于 x=470（3px）；一条铁路为 4px Ink 线，带 10px 白色虚线，从 (0,60) 到 (700,160)，以及一个 24×12 Ink 矩形，标注为 'HARBOUR STATION'，位于 (90,70)；街道之间的街区填充 45° Ink 斜线，不透明度 8%。街道标签使用 JetBrains Mono 400 11px 大写 Mute，沿街道排列。场地图钉位于 (470,210)：一个 Signal 圆 r=14，带 3px Ink 圆环，其后有一个脉冲环，右侧一个 Ink 标签上使用 Mono 700 12px 标签 'THE PRINT HALL'。一个小型指北针和 100 m 比例尺位于左下角。移动端：地图全宽位于文本上方。
   动效：当地图进入视口 30% 时，每条街道和铁路使用 stroke-dashoffset 从全长到 0 绘制，持续 1200ms，错开 120ms；然后图钉从上方 20px 处落下，不透明度 0→1，持续 300ms；图钉的脉冲环持续运行 pinpulse 关键帧。
8. **04 Tickets** — SectionHead '04' / 'Tickets'。三张档位卡片：1) 'Early Bird' — '€190' — 'Both days, all talks, poster night' — 状态 SOLD OUT。2) 'Regular' — '€290' — 标签 'Most picked' — 'Both days, all talks, one workshop seat, poster night, lunch both days' — 按钮 'Get Regular →'。3) 'Studio Pack' — '€1,240' — 'Five Regular tickets for one team. Swap names any time before the event.' — 按钮 'Get Studio Pack →'。卡片下方一行 Mono 13px：'Twenty free community tickets are held for students and people between jobs — see the FAQ.' 档位按钮打开 TicketDialog：一个原生 <dialog>，标题为 'Tickets open through our ticketing partner'，正文为 'This page is a static site and does not take payments. Link this button to your ticket provider.'，以及一个 'Close' 按钮。
   布局：3 列网格，24px 间距，每张卡片 2px Ink 边框，32px 内边距：档位名称使用 Mono 700 14px 大写，价格使用 Anybody 900，font-stretch 110% 72px 等宽数字，一条 2px 分隔线，功能文本使用 Inter 16px，按钮固定在底部（全宽，56px 高）。Regular 卡片为反色：Ink 背景，Paper 文本，Signal 按钮，以及一个 Signal 'Most picked' 标签悬挂在顶部边框右侧上方。Early Bird 卡片显示售罄状态：价格被一条 4px Signal 线划掉，文本为 Mute，一个 'SOLD OUT' 印章使用 Anybody 900 32px Signal，带 3px Signal 边框，旋转 −12° 覆盖在卡片中心上方，以及一个禁用按钮 'Sold out'（aria-disabled，Shade 背景，不可点击）。移动端：卡片堆叠，Regular 在前。
   动效：卡片在显现时淡入上移 24px，错开 100ms；印章在卡片之后以从 1.4 到 1 的缩放和不透明度 0→1 落下，持续 260ms。对话框淡入并从 0.96 缩放到 1，持续 180ms。
9. **05 FAQ** — SectionHead '05' / 'FAQ'。六个问题和答案：'Is there a code of conduct?' — 'Yes. It applies to talks, workshops, poster night and every chat channel. Three named volunteers handle reports on site.'；'Are the talks recorded?' — 'Main stage talks are recorded and published a month later. Workshops and crits are not recorded.'；'Is the venue accessible?' — 'Step-free from the street, a hearing loop in every room, quiet room on the first floor, and reserved seats at the front.'；'Can I get a refund?' — 'Full refund up to 30 days before the event. After that you can transfer your ticket to someone else for free.'；'How do the community tickets work?' — 'Twenty free places for students and people between jobs. Write two sentences about what you build; we pick by lottery.'；'Is food included?' — 'Lunch and coffee both days on Regular and Studio Pack tickets. Vegetarian by default, vegan and gluten-free on request.'
   布局：第 1–4 列：一条 Mono 13px 注释 'Still stuck? hello@kernfolk.example' 作为 mailto 链接。第 5–12 列：手风琴列表，每一项是一个按钮行，带 2px Ink 顶部分隔线（最后一项还有底部线），问题使用 Anybody 600，font-stretch 95% 28px（移动端 22px），右侧一个 lucide Plus 图标 28px；答案为 Inter 17px Mute，最大 60ch，24px 底部内边距。一次只打开一项；第一项默认打开。按钮具有 aria-expanded 和 aria-controls。
   动效：答案高度从 0 → auto 动画，持续 240ms（Motion AnimatePresence 配合 height），Plus 旋转 45° 形成 X，打开的问题文本变为 Signal。
10. **CTA 横幅** — 大字行：'Two days. One room full of people who care about type.' 按钮 'Get tickets →'（./index.html#tickets）和一个文本链接 'Read the schedule'（./schedule.html）。
   布局：全出血 Signal 背景，120px 垂直内边距，行使用 Anybody 900，font-stretch 80% 大写，clamp(44px, 7vw, 120px)，行高 0.9，Ink 文本，最大 14ch；按钮为 Ink 配 Paper 文本，位于下方，链接在旁边。一个 30vw 的大 Ink 圆从右边缘半裁剪，使用 mix-blend-mode multiply。
   动效：行逐词显现，每个词上升 30px，不透明度 0→1，间隔 60ms。
11. **页脚** — 字标，然后是 'June 11–12 · The Print Hall · Port Ellery'。链接列：'Event'（Schedule、Speakers、Venue、Tickets、FAQ——文件名链接），'Contact'（hello@kernfolk.example，Code of conduct → ./index.html#faq）。底部行：'© Kernfolk. All names and content are fictional.'，右侧为保留时的署名链接。
   布局：Ink 背景，Paper 文本，80px 顶部内边距。字标巨大：'KERNFOLK' 使用 Anybody 900，font-stretch 140%，宽度填满容器（使用与 hero 相同的 fit 函数适配），Paper，位于页脚最底部，基线处裁剪 12%。链接列在其上方，12 列网格（每列 3 列），Mono 13px 大写标题，Inter 15px 链接，Signal 悬停。底部行 Mono 12px Mute，带 1px Paper/20% 顶部分隔线。

### 日程（`schedule.html`）
1. **页头（Header）** — 与首页相同的 Header 组件，Schedule 链接标记为激活状态。
   布局：与首页页头完全一致。
2. **日程海报标题（Schedule poster title）** — Mono 13px 大写的元信息行：'Kernfolk'、'June 11–12'、'All times local'。标题 'SCHEDULE' 使用相同的 PosterHeadline 组件。一行 Inter 500 20px 的引言：'Ten talks, four workshops, two crits and one poster night across three tracks.'
   布局：高度 60vh（最小 420px），标题按宽度适配，适配规则与 hero 相同但上限为 220px，无圆盘；取而代之的是一个 Signal 80px 的正方形位于标题框右上角，使用 mix-blend-mode multiply。底部有 2px Ink 分隔线。
   动效：与首页 hero 相同的指针响应字母和自动扫过效果，相同的 reduced-motion 回退方案。
3. **控制栏（Controls bar）** — 日期标签页：'Day 1 — Thu 11 June' 和 'Day 2 — Fri 12 June'。轨道标签（chips）：'All tracks'、'● Main Stage'、'■ Workshop Room'、'▲ Studio Talks'（符号以 10px SVG 形状绘制为 Ink 色，位于标签之前）。右侧计数：'Showing 11 of 11 sessions'（实时更新；休息行不计入）。
   布局：吸附在页头下方（top 64px），Paper 背景，2px Ink 底边框，16px 垂直内边距。左侧：标签页作为分段控件（role=tablist，两个 role=tab 按钮，48px 高，Anybody 800，font-stretch 90% 18px；激活标签页为 Ink 背景 Paper 文字，未激活为透明加 2px Ink 边框）。中间：标签 36px 高，2px Ink 边框，Mono 400 13px 大写；激活标签为 Ink 背景 Paper 文字。未选择任何轨道时 'All tracks' 为激活状态；点击轨道可切换（多选），点击 'All tracks' 清除选择。右侧：计数为 Mono 13px Mute 色。移动端：标签页在第一行占满宽度，标签在第二行水平滚动，计数隐藏。激活的日期存储在 URL hash 中（#day-1 / #day-2）并在加载时恢复；方向键在标签页之间移动。
   动效：激活标签页和标签的填充在 150ms 内交叉淡入淡出。
4. **会话列表（Session list）** — 每个会话：时间范围、轨道、标题、演讲者。休息行（轨道为 'All'）无论筛选条件如何始终显示。Day 1：08:30–09:30 Doors and coffee（All）；09:30–10:15 Opening: Why the web still needs posters — Sølvi Brandt（Main Stage）；10:30–11:15 Variable fonts as interface — Mara Okonkwo-Felt（Main Stage）；10:30–12:30 Workshop: A type scale in CSS clamp() — Clio Marchetti-Sun（Workshop Room）；11:30–12:15 Contrast is a layout decision — Ravi Castellanos（Studio Talks）；12:30–14:00 Lunch in the courtyard（All）；14:00–14:45 CSS that survives five redesigns — Jun Arakawa-Penn（Main Stage）；14:00–16:00 Workshop: SVG maps by hand — Edda Quist（Workshop Room）；15:30–16:30 Open crits: bring a homepage — Kernfolk crew（Studio Talks）；17:00–17:45 Lightning talks, six × five minutes — Community（Main Stage）；19:00–22:00 Poster night at the Print Hall（All）。Day 2：09:00–09:30 Coffee（All）；09:30–10:15 The 14 KB homepage — Nnamdi Hale（Main Stage）；10:30–11:15 Tokens for small teams — Clio Marchetti-Sun（Studio Talks）；10:30–12:30 Workshop: Motion, reduced-motion first — Tove Lindqvist-Reyes（Workshop Room）；11:30–12:15 Generative art without the gimmick — Edda Quist（Main Stage）；12:30–14:00 Lunch in the courtyard（All）；14:00–14:45 Motion that respects the reader — Tove Lindqvist-Reyes（Main Stage）；14:00–16:00 Workshop: Variable font playground — Mara Okonkwo-Felt（Workshop Room）；15:30–16:30 Portfolio reviews — Sølvi Brandt and Ravi Castellanos（Studio Talks）；16:45–17:30 Closing panel: Small studios, long careers — Jun Arakawa-Penn and Nnamdi Hale（Main Stage）；17:30–19:00 Farewell drinks（All）。当筛选条件隐藏当天所有会话时的空状态：'Nothing on this track today.' 配一个描边按钮 'Show all tracks' 清除筛选。
   布局：行列表，每行有 2px Ink 顶边框，24px 垂直内边距，基于 12 列网格：第 1–2 列为开始时间，Anybody 800，font-stretch 80% 40px 等宽数字，结束时间在下方以 Mono 13px Mute 色显示；第 3–4 列为轨道符号和名称，Mono 13px 大写；第 5–10 列为标题，Anybody 600，font-stretch 95% 26px，演讲者为 Inter 15px Mute 色；第 11–12 列为时长（'45 min'、'2 h'）右对齐，Mono 13px。工作坊标题上方有 Mono 11px 的 'WORKSHOP · 20 SEATS' 标签。休息行为 Shade 背景，单行：时间 Mono 15px，标签 Inter 500 16px，14px 垂直内边距。行悬停：左边缘出现 6px Signal 色条。移动端：时间和轨道在第一行（时间 Mono 700 15px），标题和演讲者在下方，时长隐藏。
   动效：当日期或筛选条件变化时，行使用 Motion AnimatePresence 和 layout 动画：离开的行在 160ms 内淡出并上移 8px，进入的行在 200ms 内从下方 8px 处淡入，错开 25ms，剩余的行通过 layout 动画滑动到位。切换日期时整个列表淡出再淡入（180ms）。reduced motion 下为即时。
5. **CTA 区块和页脚（CTA band and footer）** — 与首页相同的 CTA 区块和 Footer。
   布局：与首页组件完全一致。

## 资产
- 字体：Anybody Variable（wdth + wght 轴）通过 @fontsource-variable/anybody/wdth.css 引入，Inter Variable 通过 @fontsource-variable/inter 引入，JetBrains Mono 400 和 700 通过 @fontsource/jetbrains-mono 引入。全部从 npm 安装并由 Vite 打包；不从字体 CDN 加载任何内容。
- 图标：仅使用 lucide-react：Menu、X、Asterisk、ArrowRight、Plus、TrainFront、Bike、Accessibility。轨道符号（圆形、方形、三角形）是微小的内联 SVG 形状，不是图标。
- 图像：不使用位图图像。主视觉圆盘由 CSS 实现，演讲者肖像为生成的 SVG（Portrait.tsx），场地地图为手写的内联 SVG（VenueMap.tsx），public/favicon.svg 为手绘。在项目根目录创建 ASSETS.md，列出三个字体包和 lucide-react 及其 npm URL、作者和许可证（OFL-1.1 / ISC），并注明所有图形均以代码绘制。

## 不要做
- 无后端：没有服务器代码、API 路由、数据库、认证、分析或第三方 API。票务按钮打开本地对话框；任何表单都不提交到任何地方。
- 无结账、支付组件或嵌入式票务脚本。
- 无 CDN <script> 或 <link> 标签。字体通过 Fontsource 包自托管；绝不加载 fonts.googleapis.com、fonts.gstatic.com 或任何其他字体 CDN。
- 生产构建中无 source map，且不将 src/ 文件复制到 dist/。保持 dist/ 在 20 MB 以下。
- 每个内部链接都指向文件名（./index.html、./index.html#tickets、./schedule.html），绝不指向裸目录或 /。使用相对资源路径（Vite base './'）。
- 无人物照片，无真实肖像：演讲者头像仅为生成的抽象形状。
- 无真实会议名称、标志、字标或口号；无真实演讲者姓名、场地、地址或赞助商。内容中的所有名称均为虚构。
- 无任何地图提供商的地图瓦片或嵌入；场地地图仅为内联 SVG。
- 无商业或自定义字体；仅使用列出的三个 OFL 字体家族。
- 无赞助商标志条，无任何形式的品牌标志。
- 无圆角、渐变、投影或玻璃拟态；仅平面纸张、墨色和一个强调色。不要添加第二个强调色。
- 不要让海报标题在任何指针位置或视口宽度下换行或溢出。
- 必须在 1440×900 和 390×844 下正常工作，零控制台错误，完整键盘访问（标签页、芯片、手风琴、演讲者卡片、对话框、移动菜单）和可见焦点环。
- 遵守 Design → Motion 中描述的 prefers-reduced-motion。
- 无 SEO 附加项：无 meta 描述、Open Graph 标签、JSON-LD 或站点地图。仅一个普通 <title> 和 SVG favicon。

---
— Prompt by VibeFather · https://vibefather.ai/t/design-conference-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
