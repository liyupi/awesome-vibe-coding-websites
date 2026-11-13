> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 冥想应用落地页

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个完全用代码构建的单页应用落地页：缓慢的黎明到黄昏漂移渐变天空，背景中有一个可用的 4-7-8 呼吸圆圈供访客尝试，然后是课程库预览、带代码绘制波形的睡眠故事带、CSS 手机模型、带月付/年付切换的示例定价，以及安静的用户评价。

- 受众：冥想、呼吸练习、睡眠和健康应用开发者，以及为其构建发布页的工作室。
- 目标：让访客通过尝试呼吸圆圈在最初十秒内感到平静，然后引导他们走过一个安静的页面——课程、睡眠故事、应用屏幕、示例定价——到达一个商店风格的 CTA，无需结账。
- 语调：柔和、不慌不忙、真诚——短句如呼吸般自然；使用“settle”和“rest”等体验性词汇；不用临床语言，不用感叹号。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/quicksand（OFL）、@fontsource/figtree（OFL）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置：
  - 使用 npm create vite@latest meditation-app-landing-page -- --template react-ts 脚手架创建项目；将 tailwindcss@3.4、postcss 和 autoprefixer 添加为开发依赖；将 motion、lucide-react、@fontsource/quicksand 和 @fontsource/figtree 添加为依赖。
  - vite.config.ts：base 设为 './'，build.sourcemap 设为 false，构建输出到 dist/。
  - tailwind.config.js：扩展颜色 dawnmist #FDF7F4、cloud #FFFFFF、skyrose #F5DAD3、dawngold #F3CDA9、dusk #CDC8E8、plum #4A4159、mauve #8E8199、stillteal #7AA69C；fontFamily 中 display 设为 'Quicksand'，sans 设为 'Figtree'；圆角：card 20px、chip 14px、pill 999px。
  - postcss.config.js：tailwindcss + autoprefixer。
  - src/index.css 中的漂移天空：三个全幅绝对定位图层——.sky-dawn（linear-gradient 160deg, #FDF7F4 0%, #F5DAD3 45%, #F3CDA9 100%）、.sky-day（160deg, #FDF7F4 0%, #E9E7F2 50%, #CDC8E8 100%）、.sky-dusk（160deg, #F5DAD3 0%, #CDC8E8 55%, #6B6284 130%）——每个图层都以 180s 关键帧循环，透明度在 0→1→0 之间交叉淡入淡出，各相位间隔 60s 错开，缓动为 ease-in-out；它们后方有一个几乎不动的模糊椭圆（.sun，径向渐变黎明金色，30% 不透明度，在同样的 180s 内漂移 40px）。
  - src/components/BreathCircle.tsx：4-7-8 引擎——一个由 setTimeout 驱动的 phases 数组 [inhale 4s, hold 7s, exhale 8s]；圆形（280px，径向渐变 skyrose→dawngold，柔和模糊边缘）在吸气阶段从 1→1.35 缩放（easeInOut），保持时带一个缓慢的涟漪环，并在呼气阶段从 1→1.35→1 返回；提示词 'Breathe in' / 'Hold, softly' / 'Let it go' 在相位边界交叉淡入淡出；一个 SVG 进度弧跟踪当前相位；每次呼气后循环计数器递增；Begin 切换为 Rest。
  - src/components/Waveform.tsx：48 个圆角条（3px 宽，plum 以 35% 不透明度显示在 dusk 色带上），其高度遵循固定的正弦数组，并在 6s 错开循环中以 ±20% 轻微振荡 scaleY；一个播放/暂停 chip 在全振幅和半振幅之间切换。
  - src/lib/motion.ts：共享变体——drift（opacity 0→1，y 20→0，700ms ease-out，90ms 错开，whileInView 一次）、lift（y -2px，300ms）——当 useReducedMotion 时回退为普通的 200ms 透明度淡入淡出。
  - 将所有面向用户的字符串（品牌、课程、故事、叙述者、层级、推荐语、CTA 标签）保留在 src/content.ts 中；各区块从该文件读取，以便在一处替换值。
  - index.html：<title>[BRAND] — Quiet, daily</title> 加上一个用代码绘制的 favicon.svg（在 dawnmist 底色上的一个小 stillteal 圆环）；不做其他 meta 处理。

## 变量
- [BRAND] — 应用名称（默认：“Stillpoint”）。用于字标、页面标题、手机模型屏幕以及文案中每一处提及的虚构应用名称。
- [PRICE_MONTH] — 月付价格（默认：“$9”）。定价部分中付费档位的月付价格；年付切换显示大约为此数值的十二倍，两者均为示例文案。
- [SESSIONS] — 课程库规模（默认：“300”）。课程库预览介绍中的示例课程数量（'[SESSIONS]+ sessions in the app — six shown here'）。
- [FREE_MINUTES] — 每日免费分钟数（默认：“10”）。免费增值的钩子：页头 CTA、主视觉副标题以及免费档位行（'[FREE_MINUTES] free minutes a day, no card needed'）。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/meditation-app-landing-page（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 晨曦薄雾（Dawn mist）`#FDF7F4` — 所有页面的背景底色 — 温暖的瓷白，绝不使用纯白。
- 云白（Cloud）`#FFFFFF` — 卡片、面板、手机模型机身、页头栏。
- 天穹玫瑰（Sky rose）`#F5DAD3` — 首屏渐变停靠点、柔和浅色调、呼吸圆形的填充色。
- 晨曦金（Dawn gold）`#F3CDA9` — 渐变停靠点、时长标签、太阳椭圆。
- 暮色薰衣草（Dusk lavender）`#CDC8E8` — 渐变停靠点及睡眠故事区域的背景底色。
- 深梅紫（Deep plum）`#4A4159` — 主文本与标题 — 安静的深梅紫，绝不使用黑色。
- 淡紫灰（Mauve）`#8E8199` — 次要文本：引言、说明文字、旁白行。
- 静青（Still teal）`#7AA69C` — 唯一强调色：Begin 按钮、进度弧、激活标签、链接。

### 字体排印（Typography）
- 展示字体（Display）— 标题、品牌、价格（安静圆润）：Quicksand（OFL），字重 500/600
- 正文字体（Text）— 正文、卡片、标签、提示（宽松的 1.7 行高）：Figtree（OFL），字重 400/500/600

### 布局与动效（Layout & motion）
- 间距（Spacing）：比习惯更疏朗：桌面端区块 py-32（128px）/ 移动端 py-24（96px）；内容 max-w-5xl — 刻意比常规更窄；呼吸圆形拥有完整的清晰视口，其周围 96px 内空无一物；正文每行上限 52ch。
- 圆角（Radius）：处处柔和：卡片、面板和手机模型为 20px，输入框和标签为 14px，按钮为 999px 胶囊形；呼吸圆形是纯几何形态，边缘模糊。
- 动效（Motion）：漂移天空：三层渐变在 180s 循环中交叉淡入淡出（60s 相位偏移），太阳椭圆在其上漂移 40px — 页面的时间以分钟而非秒流动。
- 动效（Motion）：呼吸圆形：4-7-8 — 在 4s 吸气期间从 1 缩放至 1.35（easeInOut），7s 屏息期间出现柔和的涟漪环，8s 呼气期间回到 1；提示词在每个边界处交叉淡入淡出 400ms；进度弧按阶段填充；循环计数器位于右下角。
- 动效（Motion）：显现：区块和卡片向上淡入（y 20→0，700ms ease-out），通过 Motion 的 whileInView 以 90ms 错峰，仅一次 — 没有任何突兀的跳变。
- 动效（Motion）：波形：条形以 6s 错峰循环振荡 scaleY ±20%；播放标签以 600ms ease 在全幅/半幅之间切换。
- 动效（Motion）：悬停：卡片和按钮上浮 2px（300ms），阴影加深一级；定价切换标签交叉淡入淡出价格（300ms）。
- 动效（Motion）：prefers-reduced-motion：天空保持静态晨曦渐变，呼吸圆形保持静止，三个阶段以静态步骤展示并保留可用的计数器，波形冻结在半幅，所有显现变为 200ms 不透明度淡入。
- 图像（Imagery）：零摄影：宁静的 CSS 渐变天空在晨曦、正午和暮色之间漂移，一个柔和的太阳椭圆，以及呼吸圆形 — 文字之上的柔和模糊几何。没有人物、没有照片、没有星空、没有插画集；宁静来自色调、空气与节奏。

## 页面与区块
### [BRAND] — 安静，日常（`index.html`）
1. **页眉（Header）** — 固定顶栏，云白（cloud）80% 不透明度，柔和模糊，无边框。左侧：[BRAND] 字标，Quicksand 600 20px，梅紫（plum）。右侧（桌面端）：锚点链接 'Breathe'、'Sessions'、'Sleep'、'Pricing'，Figtree 15px，淡紫褐（mauve）→ 悬停时变为梅紫（plum）；随后是一个胶囊 CTA 'Try [FREE_MINUTES] free minutes'（静青（stillteal）底色，云白（cloud）文字）→ #breathe。移动端：字标 + CTA + lucide menu/x 切换按钮，打开一个云白（cloud）面板，四个链接纵向堆叠。
   布局：position fixed，z-40，h-16。
   动效：移动端面板以 300ms 缓动下落；链接悬停颜色变化 200ms；其余不动。
2. **首屏 — 呼吸圆环（Hero — the breathing circle）** — id=breathe。全视口，置于漂移天空之上。居中堆叠：标签，Figtree 600 12px 大写，字距 0.18em，淡紫褐（mauve）：'A QUIET APP FOR LOUD DAYS'；标题 Quicksand 500，clamp(2.5rem, 5.5vw, 4.25rem)，梅紫（plum）：'Ten minutes of quiet, wherever the day finds you.'；副标题 Figtree 17px 淡紫褐（mauve），max-w 46ch：'Guided sessions, sleep stories and one honest breathing timer. [FREE_MINUTES] free minutes every day — no card, no noise.' 然后是 BreathCircle：一个 280px 的圆环，下方是提示行（'Breathe in'、'Hold, softly'、'Let it go'），4-7-8 节奏以三个小标签呈现（'4 in · 7 hold · 8 out'），一个胶囊 'Begin' 按钮（静青（stillteal）），点击后变为 'Rest'，以及一个安静的循环计数器 'cycle 2'，淡紫褐（mauve）。底部居中，一个柔和的滚动提示：'The sessions ↓'，淡紫褐（mauve）。
   布局：min-h 100vh，所有内容居中于 max-w-3xl 列；圆环四周保持 96px 留白；移动端保持相同顺序，圆环为 220px。
   动效：天空以其 180s 循环漂移；点击 Begin 后，4-7-8 时间线运行至 Rest；提示词交叉淡入淡出；减少动效：静态黎明天空，圆环静止，各阶段为静态步骤，计数器仍可用。
3. **课程预览（Sessions preview）** — id=sessions。标签 'THE LIBRARY'；标题 Quicksand：'Small sessions for heavy days.' 引言淡紫褐（mauve）：'[SESSIONS]+ guided sessions in the app — six live here.' 六张云白（cloud）卡片（20px 圆角，柔和阴影），3×2 网格，每张：一个分类标签小片（专注（Focus）天玫瑰（skyrose）浅色调 / 睡眠（Sleep）暮色（dusk）浅色调 / 焦虑（Anxiety）晨金（dawngold）浅色调），标题 Quicksand 600 18px 梅紫（plum），一行 Figtree 14px 淡紫褐（mauve），时长小片胶囊 Figtree 12px。卡片：'Morning settle' — 'Before the phone wakes up.' — FOCUS · 10 MIN / 'Before the inbox' — 'Two minutes, then you open it.' — FOCUS · 2 MIN / 'Sunday sort-out' — 'For the Sunday scaries, gently.' — ANXIETY · 15 MIN / 'Landing the day' — 'A soft floor between work and evening.' — FOCUS · 8 MIN / 'Midnight rain' — 'Rain on a tin roof, nothing else.' — SLEEP · 45 MIN / 'Worry, unpacked' — 'Name it, hold it, set it down.' — ANXIETY · 12 MIN。
   布局：3 列网格（平板 2 列，移动端 1 列），24px 间距；卡片顶部对齐。
   动效：卡片随滚动上浮，90ms 交错；悬停上移 2px；减少动效：纯淡入。
4. **睡眠故事（Sleep stories）** — id=sleep。全出血色带，置于暮色（dusk）渐变之上（暮色薰衣草（dusk lavender）向底边加深至梅紫（plum））。左侧：标签 'SLEEP STORIES'，淡紫褐（mauve）；标题 Quicksand，云白（cloud）：'Stories that end before you do.' 正文 Figtree，云白（cloud）85%：'Slow chapters, read by quiet voices, mixed with rain you can turn up.' 故事列表，三行，以梅紫（plum）15% 的细线分隔：'The Lighthouse Keeper's Ledger — 42 MIN — read by Noa Ellison' / 'A Train Through the Fens — 55 MIN — read by Peter Vance' / 'The Greenhouse at Night — 38 MIN — read by Amara Devi'。右侧：Waveform，带一个胶囊小片 'Rain only' 和一个播放/暂停小片（静青（stillteal）描边），用于切换振幅。
   布局：12 列网格：文案列 1–6，波形列 8–12（垂直居中）；移动端先堆叠文案再波形。
   动效：色带渐变在滚动进入时加深一档（1s，一次）；波形条以 6s 循环振荡；播放切换振幅 600ms；减少动效：静态半振幅条。
5. **应用预览（App preview）** — id=app。左侧：一个 CSS 手机模型 — 280×580px，36px 圆角，云白（cloud）机身，梅紫（plum）柔和阴影 10%，一个简单刘海；屏幕显示一个迷你静态黎明天空，一个静止圆环，静青（stillteal）进度弧为 32%，课程标题 'Morning settle'，Quicksand，一行计时 Figtree '3:12 / 10:00'，以及一个暂停条（暮色（dusk）浅色调）。右侧：标签 'THE APP'；标题：'One tap and you're breathing.' 三行功能（Figtree 16px 梅紫（plum），lucide 图标为静青（stillteal））：'One tap, no onboarding maze'（hand）/ 'Works offline — plane, tunnel, cottage'（wifi-off）/ 'No streaks, no guilt — skip a day, nothing breaks'（feather）。CTA 胶囊 'Start with [FREE_MINUTES] free minutes' → #pricing。
   布局：12 列网格：手机列 1–5（桌面端略微旋转 -2deg，移动端平放），功能列 7–12 自居中。
   动效：手机在显现时上浮，悬停时回正至 0deg（400ms）；此处弧线为静态；减少动效：无旋转。
6. **定价（Pricing）** — id=pricing。标签 'PRICING'；标题：'Simple, like it should be.' 一个按月/按年切换（两个胶囊小片）。两张云白（cloud）卡片并排：'Free — forever' — '[FREE_MINUTES] minutes a day, the 4-7-8 timer always unlocked, no card' — 价格 '0' / 'Still — everything' — 'the whole library, sleep stories, offline, monthly' — 价格 '[PRICE_MONTH] / month' 或切换后显示 'roughly [PRICE_MONTH] × 12 a year'。小字 Figtree 13px 淡紫褐（mauve）：'Sample pricing for the demo — nothing here takes payment.' 两者下方 CTA：胶囊 'Get [BRAND]'（静青（stillteal））。
   布局：两张卡片在 2 列网格中（移动端堆叠），28px 内边距，20px 圆角；切换居中于上方。
   动效：切换使价格行交叉淡入淡出 300ms；卡片交错上浮；减少动效：价格直接切换，无淡入淡出。
7. **用户评价（Testimonials）** — 标签 'WHISPERED KINDLY'；三张引用卡片，云白（cloud）底，引用 Quicksand 500 19px 梅紫（plum），署名 Figtree 13px 淡紫褐（mauve）：'It's the only app I never mute.' — Priya S. / 'The 4-7-8 timer alone is worth keeping.' — Dan K. / 'I stopped counting streaks and started resting.' — Marisol T. 这些是仅关于体验的虚构示例引用。
   布局：3 列网格（移动端堆叠），24px 间距，引用左对齐，带一个 CSS 绘制的小静青（stillteal）引号。
   动效：卡片交错上浮 120ms；无其他动效。
8. **页脚（Footer）** — 晨雾（Dawn mist）底色，顶部一条暮色（dusk）浅色调细线。左侧：[BRAND] 字标和一行 Figtree 13px 淡紫褐（mauve）：'Made slowly. An invented demo app — every number and quote on this page is sample copy.' 右侧：锚点链接 'Breathe · Sessions · Sleep · Pricing'，淡紫褐（mauve）；可选 [CREDIT] 链接。无日期，无社交行。
   布局：py-12，max-w-5xl，flex 行，移动端换行为列。
   动效：无。

## 资产
- 图标：通过 npm 使用 lucide-react（ISC）——应用功能行使用 hand、wifi-off 和 feather；会话分类标签使用 target、moon 和 cloud；波形芯片使用 play 和 pause；hero 滚动提示使用 arrow-down；移动端页眉使用 menu 和 x。不使用其他图标：不使用 emoji、不使用莲花标志、不使用品牌标识。其他所有视觉元素——渐变天空、呼吸圆、波形、进度弧和手机模型——均由构建者按照各节规范用 CSS/SVG 绘制；任何地方都不使用图像文件。
- 字体：@fontsource/quicksand（OFL，字重 500 和 600）和 @fontsource/figtree（OFL，字重 400、500、600），在 src/main.tsx 中导入；绝不从 fonts.googleapis.com 或任何 CDN 加载。在项目根目录的 ASSETS.md 中列出这两个字体家族和 lucide 图标包：路径、来源、许可证——没有需要列出的图像资产。

## 禁止事项
- 无后端、无网络请求、无分析统计、无结账或订阅支付：定价为示例文案，Begin 按钮仅运行本地计时器，且不存在任何可提交的表单。
- 任何位置均不得使用摄影图片或位图图像：天空为 CSS 渐变，圆形/波形/弧线为 SVG/CSS——绝不使用 Unsplash/Pexels/Pixabay、生成照片或占位图服务。
- 不得出现真实冥想应用、导师、旁白者或品牌：应用、课程、故事标题、旁白者、价格与引语均为虚构，凡出现名称处一律使用 [BRAND]。
- 不得作出任何健康或医疗声明，无论暗示或明示：文案保持体验性表述（'settle'、'rest'、'quieter days'）；绝不使用 'treats'、'cures'、'clinical' 或诊断性语言，用户评价仅陈述个人体验。
- 不得出现日期、连续打卡计数器或任何真实时钟相关内容：天空的 180s 循环为固定循环，不感知一天中的时间，且不出现发布日期或年份。
- 不得使用任何 CDN：字体通过 Fontsource 包提供，图标来自 lucide-react；无第三方脚本、链接或嵌入。
- 生产构建：单条命令、压缩、无 source map、输出中无 src/、相对路径（Vite base './'）；保持 dist/ 体积很小（远低于 20 MB——因为没有任何位图）。
- 单页面，仅使用锚点导航；必须在 1440×900 和 390×844 下干净渲染且控制台零报错；prefers-reduced-motion 必须为每个动画提供平静的静态回退（静态黎明天空、带静态阶段步骤的静止圆形、冻结波形、普通淡入淡出）。
- 保持宁静方向锁定：黎明薄雾底色、天空玫瑰 / 黎明金 / 暮色薰衣草渐变、梅子色文字、一个 stillteal 强调色、Quicksand 优先于 Figtree、胶囊形与 20px 圆角、大量留白；无饱和霓虹、无深色模式、无玻璃拟态卡片，且任何动效不得快于轻柔悬停或 4 秒吸气。
- 所有文案、标签、示例数据和 alt 文本均为美式英语，存放于 src/content.ts；当 [BRAND]、[PRICE_MONTH]、[SESSIONS] 或 [FREE_MINUTES] 变化时，重写课程名称、故事标题和套餐文案以适配新应用，而不是把冥想文案留在另一个产品下。
- 在项目根目录的 ASSETS.md 中列出每个第三方文件（两个 Fontsource 字体家族、lucide 图标）：路径、来源、许可证。

---
— Prompt by VibeFather · https://vibefather.ai/t/meditation-app-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
