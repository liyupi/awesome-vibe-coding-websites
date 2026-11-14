> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 编辑风格餐厅网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
Larder：一个三页的编辑风格网站（首页、菜单、到访），为 [BRAND] 打造，这是一家拥有 32 个座位的餐厅，在 [NEIGHBOURHOOD] 供应 [CONCEPT]。网站采用暖色纸张质感上的超大衬线字体、非对称 12 栏网格、由分层代码绘制的 SVG 插画构成的全出血视差条带、为 [SEASON] 排版的带价格字体菜单、一张高亮显示今天的营业时间表，以及一张虚构的手绘 SVG 街道地图，上面标有图钉和步行路线。预订仅通过电话（[PHONE]）或电子邮件（[EMAIL]）进行，无后端。

- 受众：正在决定本周去哪里吃饭的食客。这意味着本地人在手机上查看当前菜单和价格，以及首次到访的游客寻找营业时间、路线和预订方式。
- 目标：让食物和空间显得用心考究，一目了然地展示本季菜单及价格，并将兴趣转化为预订电话或电子邮件。
- 语调：平静、温暖且富有文化气息，如同印刷的菜单卡或美食杂志。用第一人称复数（“我们”）写简短平实的句子，包含具体的食材、地点和时间。不使用感叹号、最高级或营销陈词滥调。

## 技术栈
- 框架：Vite 5 + 原生 TypeScript
- 样式：Tailwind CSS 3.4
- 库：lenis（MIT）、lucide（ISC）、@fontsource-variable/fraunces（OFL-1.1）、@fontsource-variable/instrument-sans（OFL-1.1）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、typescript（Apache-2.0）、vite（MIT）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化设置：
  - 使用 vanilla-ts 模板通过 npm create vite@5 搭建脚手架。在项目根目录保留三个真实的 HTML 文件：index.html、menu.html 和 visit.html。
  - 安装运行时包：npm i lenis lucide @fontsource-variable/fraunces @fontsource-variable/instrument-sans。安装开发包：npm i -D tailwindcss@3.4 postcss autoprefixer。然后运行 npx tailwindcss init -p。
  - package.json 脚本：dev = 'vite'，build = 'tsc && vite build'，preview = 'vite preview'。
  - vite.config.ts：base './'，build.sourcemap false，build.rollupOptions.input = { index: resolve(__dirname,'index.html'), menu: resolve(__dirname,'menu.html'), visit: resolve(__dirname,'visit.html') }。
  - tailwind.config.js：content ['./*.html','./src/**/*.ts']。theme.extend.colors：paper #F4EEE3，paper-deep #EAE1D1，ink #1E1B17，ink-soft #5B544B，hairline #CFC4B2，terracotta #A8502F，moss #5F6B47，ochre #C8963E，beet #7B3343，cream #FBF8F2。fontFamily：display ['"Fraunces Variable"','Georgia','serif']，sans ['"Instrument Sans Variable"','system-ui','sans-serif']。maxWidth.container '1360px'。
  - 在 src/main.ts 顶部导入 '@fontsource-variable/fraunces/full.css'、'@fontsource-variable/fraunces/full-italic.css'、'@fontsource-variable/instrument-sans'、'lenis/dist/lenis.css' 和 './styles.css'。
  - src/styles.css 包含 @tailwind base/components/utilities。它还定义了组件类 .label、.display-xl、.display-l、.statement、.dish-row、.leader、.diet-tag、.link-underline 和 .grain，[data-reveal] 状态，@keyframes pulse-ring，以及一个 @media (prefers-reduced-motion: reduce) 块，用于禁用所有动画和过渡。
  - src/content.ts 保存所有可见文案。这涵盖 site 对象（brand、concept、neighbourhood、season、phone、仅含 + 和数字的 phoneHref、email、地址行）、nav、hours 数组（day、times、closed 标志）、带菜品的菜单课程（name、price、description、tags）、home/menu/visit 区块文案、说明文字、Market 条带价签标签和地图标签。页面通过模板字符串从中渲染。任何其他地方都不硬编码可见内容。
  - 当变量值与默认值不同时，重写 src/content.ts 中的所有文案以适配新的品牌、概念、地点和季节：标题、菜品名称、价格、描述、营业时间、地址、说明文字、价签和地图街道标签。保持行数和字符串长度接近原始值，以维持布局。
  - src/art/ 包含 plate.ts、stillLife.ts、strips.ts（tableStrip、fieldStrip 和 marketStrip，每个返回 { back, mid, front } SVG 字符串）和 map.ts。每个函数返回内联 SVG 标记字符串，颜色来自一个共享的调色板对象。
  - src/main.ts 导出 initSite(page: 'home' | 'menu' | 'visit')。它将页眉、预订条带和页脚渲染到 #header、#reserve 和 #footer，然后将 html.no-js 替换为 html.js。它启动 Lenis（除非请求减少动态效果）、显现观察器、视差循环、计数动画和营业时间的今日高亮，最后调用 lucide createIcons({ icons: { Phone, Mail, MapPin, Clock, ArrowRight, ArrowUpRight, Menu, X, Footprints, Bus, Accessibility } })。
  - src/pages/home.ts、menu.ts 和 visit.ts 各自从 content.ts 将其页面区块渲染到 #main，然后调用 initSite(page)。
  - 每个 HTML 文件包含 <html lang='en' class='no-js'>、一个 <title>（index 为 '[BRAND] — [CONCEPT]'，'Menu — [BRAND]'，'Visit — [BRAND]'）、指向 public/favicon.svg 的 <link rel='icon' type='image/svg+xml' href='/favicon.svg'>，以及一个 class 为 'bg-paper text-ink font-sans antialiased' 的 body，其中包含 <div id='header'></div><main id='main'></main><div id='reserve'></div><div id='footer'></div><div class='grain' aria-hidden='true'></div> 和 <script type='module' src='/src/pages/<page>.ts'></script>。
  - 在项目根目录编写 ASSETS.md，列出字体和图标集及其来源 URL、作者和许可证，并声明每幅插图均由代码绘制，不使用任何第三方图片。

## 变量
- [BRAND] — 餐厅名称（默认："Wrenfold"）。虚构名称。用于页眉字标、巨型页脚字标、标题和地图标签。
- [CONCEPT] — 你提供的内容（默认："Seasonal small plates & natural wine"）。用于主视觉标签、页脚文案和首页标题的短语。
- [NEIGHBOURHOOD] — 位置（街道或院落、区域）（默认："Cooper's Yard, Eastmere"）。虚构地点。决定地址、路线文案和地图街道标签。
- [SEASON] — 当前季节（默认："Autumn"）。显示在菜单标题和标签中。菜品和食材应与之匹配。
- [PHONE] — 预订电话（默认："+44 20 7946 0321"）。按原样显示。tel: 链接仅使用 + 和数字。请使用虚构号码。
- [EMAIL] — 预订邮箱（默认："tables@wrenfold.example"）。用于 mailto: 链接。演示时保留 .example 域名。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/editorial-restaurant-website（默认：是；删除此行即可移除）

Pages & Sections 下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 纸色（Paper）`#F4EEE3` — 页面背景、页眉和课程索引背景、深色带上的文字
- 深纸色（Paper deep）`#EAE1D1` — 交替区块带（首页菜单预览）、插画面板、地图地面
- 墨色（Ink）`#1E1B17` — 所有标题和正文、主按钮填充、预订带背景
- 柔墨色（Ink soft）`#5B544B` — 次要文字、描述、说明文字、点状引导线（50% 不透明度）
- 细线色（Hairline）`#CFC4B2` — 1px 分隔线、边框、表格线、盘子边缘
- 陶土色（Terracotta）`#A8502F` — 唯一的 UI 强调色：斜体标题词、今日圆点、活动导航圆点、课程索引下划线、地图图钉和路线、悬停状态
- 奶油色（Cream）`#FBF8F2` — 插画中的盘子、桌布和价签
- 苔藓色（Moss）`#5F6B47` — 仅用于插画：叶子、山丘、公园排线
- 赭石色（Ochre）`#C8963E` — 仅用于插画：南瓜、梨、小麦、天空色调
- 甜菜色（Beet）`#7B3343` — 仅用于插画：甜菜根、小型食物细节

### 字体排印
- 展示字体：h1、h2、陈述句、菜品名称、字标、大型联系链接。大尺寸使用直立 300 字重，强调词使用斜体 300，菜品名称和页眉字标使用 400。开启 font-optical-sizing。：Fraunces（OFL），字重 300/400
- 正文和标签：正文 17px/1.6、字重 400，价格 500 并使用 tabular-nums，标签 12px、字重 600、大写、字距 0.18em，按钮 12px、字重 600、大写、字距 0.16em：Instrument Sans（OFL），字重 400/500/600

### 布局与动效
- 间距：12 列网格，容器最大宽度 1360px，桌面端两侧内边距 48px、移动端 24px，列间距 24px。区块在桌面端有 128px 垂直内边距、移动端 80px。标签与其标题之间使用 24px，标题与正文之间使用 32px。分隔线为 1px #CFC4B2 细线。字号比例：.display-xl clamp(3.5rem, 10.5vw, 10.5rem)，字重 300，行高 0.92，字距 -0.035em；.display-l clamp(2.5rem, 6vw, 6rem)，字重 300，行高 0.98，字距 -0.03em；.statement clamp(1.75rem, 3.2vw, 3rem)，字重 300，行高 1.15，字距 -0.015em。断点：移动端低于 768px，单列；桌面网格从 1024px 开始；平板（768–1023px）使用移动端堆叠布局但更宽的内边距。
- 圆角：所有地方均为 0px：按钮、标签片、标签、图形、卡片和地图框架。只有本质上是圆形的东西才是圆的：地图图钉头部、今日圆点、导航圆点、脉冲环和盘子绘图。
- 动效：平滑滚动：new Lenis({ duration: 1.1, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })，由一个 requestAnimationFrame 循环驱动，该循环同时运行动视差。锚点链接调用 lenis.scrollTo(target, { offset: -140 })。
- 动效：加载时标题入场：每个 h1 行都包裹在一个 overflow-hidden 的块级 span 中。内部 span 在 1000ms 内从 translateY(105%) 上升到 0，使用 cubic-bezier(0.22,1,0.36,1)，90ms 错开，从 150ms 开始。标签行先以 400ms 淡入。
- 动效：滚动显现：[data-reveal] 元素从 opacity 0 和 translateY(24px) 开始（仅在 html.js 下），并在 900ms 内移动到 opacity 1 和 0，使用 cubic-bezier(0.22,1,0.36,1)。它们由 IntersectionObserver 触发一次，阈值为 0.15，rootMargin 为 '0px 0px -8% 0px'。组内项目通过 --d CSS 变量错开 80ms。
- 动效：视差条带：每个条带包含绝对定位的层（top -20%，height 140%），带有 data-speed（后层 0.08，中层 0.18，前层 0.32，叠加文字 0.45）。每帧，对于被 IntersectionObserver 标记为在视图中的条带，计算 p = clamp((innerHeight - rect.top) / (innerHeight + rect.height), 0, 1)，并将每个层设置为 transform: translate3d(0, (0.5 - p) * speed * rect.height px, 0)，并设置 will-change: transform。
- 动效：主视觉盘子：主视觉图形内的盘子组从 0deg 旋转到 10deg，与穿过主视觉区域的滚动进度关联。
- 动效：数字递增：首页统计数据在首次进入视图时，在 1200ms 内使用 easeOutCubic 从 0 计数到其值。
- 动效：链接：导航和文本链接使用 1px currentColor 下划线，通过 background-size 绘制，悬停时在 400ms 内从左到右从 0% 增长到 100%。常驻 CTA 文本链接保留下划线，悬停时变为陶土色。
- 动效：菜品行（仅限支持悬停的指针设备）：名称向右移动 4px，点状引导线在 300ms 内变为陶土色。
- 动效：预订链接：悬停时文字向右移动 8px，右上箭头图标旋转 45deg，该行的顶部边框变为陶土色，全部在 300ms 内完成。
- 动效：地图：当地图 30% 进入视图时，虚线路线通过 SVG 蒙版绘制一次，其实线路径在 1800ms 内以 ease-in-out 将 stroke-dashoffset 从其长度动画到 0。然后图钉从 translateY(-24px) 和 opacity 0 落下，在 500ms 内以 cubic-bezier(0.34,1.56,0.64,1) 静止，标签卡在 300ms 内淡入，图钉下方的脉冲环循环（r 10 到 34，opacity 0.5 到 0，2400ms ease-out，无限循环）。
- 动效：移动端导航覆盖层：clip-path 在 600ms 内从 inset(0 0 100% 0) 移动到 inset(0)，使用 cubic-bezier(0.22,1,0.36,1)。链接上升 24px 并以 70ms 错开淡入。覆盖层打开时 Lenis 停止。
- 动效：页脚巨型字标：当页脚进入视图时，字母上升 40% 并以 40ms 错开淡入。
- 动效：prefers-reduced-motion: reduce：从不创建 Lenis，不应用视差变换，所有 [data-reveal] 内容和标题行立即显示，数字递增显示最终值，主视觉盘子不旋转，地图路线静态绘制且图钉就位、无脉冲，所有 CSS 过渡和动画设置为 0.01ms。
- 图像：没有照片。所有图像都是平面、略带纹理的插画，以 inline SVG 字符串形式绘制在 src/art/ 中，仅使用调色板（cream、paper、paper-deep、ink、ink-soft、hairline、terracotta、moss、ochre、beet）。形状简单且几何化，带有来自一个共享 SVG 滤镜的手绘晃动感（feTurbulence type 'fractalNoise' baseFrequency 0.015 numOctaves 2 seed 4，然后 feDisplacementMap scale 3），应用于形状组，绝不应用于文字。全局颗粒叠加层（.grain）固定在 inset 0，pointer-events none，z-index 60，opacity 0.07，mix-blend-mode multiply；其背景是 200px 平铺的 SVG data URI，使用 feTurbulence fractalNoise，baseFrequency 0.8，2 个八度。主视觉盘子（viewBox 0 0 400 500）：paper-deep 背景；一个 cream 盘子在 (200,250)，r 160，带有 1.5px 细线边缘和 r 120 处的 1px 内环；五个 ochre 南瓜月牙形，带有更浅的 #E2B86A 内弧，以 72deg 间隔围绕中心扇形排列；六片 moss 鼠尾草叶，带有 cream 中脉；一条波浪形棕黄油淋酱（stroke #9A6A2F，3px，70% 不透明度）；十四个小 ink 种子椭圆；以及左下角一块 terracotta 亚麻餐巾的角，旋转 -8deg，带有三条 cream 条纹线。静物（viewBox 0 0 360 480）：paper-deep 背景，一块 cream 桌布作为波浪形多边形覆盖底部三分之一，两个 ochre 梨带有 ink 果柄，一个凹凸不平的 #D9B04C 榅桲，三个 ink-soft 核桃带有褶皱线，以及 8% 不透明度的柔和 ink 阴影椭圆。条带（每一层使用 viewBox 0 0 1600 900，preserveAspectRatio 'xMidYMid slice'）。餐桌：后层是 #E6DCC9 亚麻布，带有 6px 交叉排线 ink 线条，8% 不透明度，以及一条 220px 的 terracotta 桌旗横跨中部，带有三条细 cream 条纹。中层有七个 cream 盘子（r 90 到 170），带有细线边缘，每个盛放不同的简单菜肴：ochre 南瓜月牙形、带有 cream 漩涡的 beet 圆片、moss 叶簇、ink 种子点，或带有 ochre 蛋黄圆的 terracotta 鞑靼椭圆。前层有一把刀和叉，作为长圆角 ink-soft 形状，以及两个酒杯环（terracotta 4px 描边，35% 不透明度）。田野：后层是天空渐变，从顶部的 #EBCB9C 到地平线的 #F4EEE3，在 (1150,300) 处有一个 r 90 的 terracotta 太阳圆盘。中层有两个起伏的山丘带（后面 #8A9470，前面 #5F6B47），被十二条平行的弯曲犁沟笔画穿过，cream 色，25% 不透明度。前层是底部 30% 沿线的深色 #2B2A22 树篱，由重叠的凸起组成，带有几笔 ochre 麦秆笔画。市场：后层是 ink 背景，带有水平的 ink-soft 板条箱板条（40px 高，14px 间隙）。中层有三个正面看到的板条箱，装满农产品：terracotta 番茄带有 moss 星形花萼，ochre 梨带有 ink 果柄，moss 卷心菜由同心叶弧组成，以及 beet 根带有叶柄。前层有四个 cream 价签挂在 ink 绳上，用 Fraunces 斜体书写，标签来自 content.ts（'Quince 3'、'Pears 2'、'Chard 4'、'Squash 5'）。网站图标（public/favicon.svg，32x32）：一个 terracotta 圆圈，带有 cream 内环，像从上方看到的盘子。

## 页面与区块
### 首页（`index.html`）
1. **页眉（所有页面共享）** — 左侧：字标 '[BRAND]'（Fraunces 400，26px，字距 -0.02em），链接到 ./index.html。中间（桌面端，1024px 及以上）：导航链接 'Home'、'Menu' 和 'Visit'，分别指向 ./index.html、./menu.html 和 ./visit.html，样式为 12px 大写标签。当前页面在其标签前有一个 6px 的陶土色圆点。右侧：一个 40px 方形图标按钮，带 Lucide mail 图标（aria-label 'Email [BRAND]'），链接到 mailto:[EMAIL]，其后是一个 'Book a table' 按钮，带 Lucide phone 图标，链接到 tel:[PHONE]（仅 + 和数字）。移动端（低于 1024px）：字标、一个紧凑的 'Book' tel: 按钮和一个 Lucide 菜单切换按钮。切换按钮打开一个全屏纸质覆盖层，以 Fraunces 300、56px 列出 Home / Menu / Visit，底部显示 [PHONE]、[EMAIL] 和今日营业时间。一个 Lucide x 按钮将其关闭。
   布局：position sticky，top 0，z-50，高度 72px（移动端 64px），全宽，纸质背景。内部容器宽 1360px，内边距 48px（移动端 24px），flex justify-between items-center。Book 按钮高 40px，水平内边距 18px，1px 墨色边框，圆角 0，12px 大写标签，字重 600，字距 0.16em。悬停时填充墨色，文字为纸质色。scrollY > 24 后，1px 细线底边框淡入。
   动效：边框在 300ms 内淡入。覆盖层以 clip-path 揭示和交错链接打开，如设计动效中所述。
2. **首屏** — 标签行：左侧 '[CONCEPT] · [NEIGHBOURHOOD]'，右侧 'Open Wed–Sun'。h1 分三行：'Small plates,' / 'cooked to the' / 'week's harvest.' 第三行为 Fraunces 斜体 300，陶土色。简介（20px Instrument Sans，ink-soft，最大 34ch）：'Wrenfold is a thirty-two seat dining room in Cooper's Yard, Eastmere. Nine growers, one wood grill and a menu we rewrite every Tuesday. Order a few plates, share everything, stay for another glass.' CTA：主按钮 'Book a table'（墨色填充，纸质文字，电话图标，高 52px，tel:[PHONE]）和次要文本链接 'See the autumn menu'，带 arrow-right 指向 ./menu.html。营业时间行：'Wed–Fri 17:30–late · Sat 12:00–late · Sun 12:00–16:00'。图形：HERO PLATE 插图，图注为 'Fig. 1 — Delicata squash, brown butter, sage.'
   布局：容器采用 12 列网格，顶部内边距 64px（移动端 40px），底部内边距 128px（移动端 80px）。标签行横跨全部 12 列，带 1px 细线顶边框、16px 顶部内边距和 48px 底部外边距。h1（.display-xl）横跨第 1–11 列，每行一个块。其下方，图形占据第 1–5 列，宽高比 4/5，顶部外边距 64px，其图注为 12px ink-soft，顶部外边距 12px。文本列占据第 7–11 列，顶部外边距 160px，包含简介，然后是 CTA 行（间距 32px，顶部外边距 40px），然后是营业时间行（顶部外边距 32px，细线顶边框，顶部内边距 16px，13px ink-soft）。移动端顺序：标签行、h1、简介、CTA、营业时间，然后是全宽图形。
   动效：h1 行入场在加载时运行。简介、CTA 和营业时间从 500ms 开始淡入并上移，交错 80ms。图形在滚动时揭示，盘子随滚动旋转。
3. **条带 I — 餐桌** — TABLE 视差条带。左下角的图注标签为 'Plate I — The pass, Tuesday service'。
   布局：全视口宽度，高度 clamp(320px, 62vh, 640px)，overflow hidden，position relative。三个绝对定位层（后、中、前），每层横跨全宽，top -20%，高度 140%，每层容纳一个 SVG。图注标签为纸质背景，1px 细线边框，11px 大写标签，字重 600，字距 0.18em，内边距 8px 12px。它距左侧 48px，距底部 32px（移动端 24px 和 24px）。
   动效：层速度为 0.08、0.18 和 0.32（见设计动效）。
4. **01 — 厨房** — 标签：'01 — The kitchen'。陈述：'We cook what our growers bring to the back door on Tuesday morning. If the frost takes the chard, the chard comes off the menu. It is a small way of eating, and we think it is the best one.' 其中 'on Tuesday morning' 一词为斜体陶土色。有三个统计数据：'32' 配 'Seats in one room, no second sitting.'；'9' 配 'Growers and makers within 60 km.'；以及 '52' 配 'Menus a year, one every Tuesday.'
   布局：垂直内边距 128px。标签位于第 1–3 列，桌面端在 top 120px 处粘性定位。陈述（.statement，最大 26ch）位于第 5–12 列。统计数据行位于第 5–12 列，顶部外边距 96px，分为三个等宽列，每列带 1px 细线左边框和 24px 左内边距。每个数字为 Fraunces 300，字号 clamp(4rem, 7vw, 6.5rem)，行高 1，其说明为 15px ink-soft（最大 18ch，顶部外边距 12px）。移动端所有内容堆叠，每个统计数据改为细线顶边框而非左边框。
   动效：陈述揭示，然后统计数据以 80ms 交错揭示并计数递增。
5. **02 — 当前菜单** — 标签：'02 — On the menu · Autumn'。h2：'A few plates' / 'from this week.'，第二行为斜体陶土色。五道菜行列表：'Roasted delicata squash, brown butter, sage' 11；'Beetroot baked in salt, whipped goat's curd' 10；'Charred leeks, egg-yolk dressing' 10；'Hand-cut beef tartare, smoked oyster mayonnaise' 14；'Mussels, cider & lovage' 13。每行都有其描述和饮食标签，与菜单页面完全一致。列表之后是文本链接 'Read the full menu'，带 arrow-right 指向 ./menu.html。图形显示 STILL LIFE 插图，图注为 'Fig. 2 — Quince, pear, walnut.'
   布局：全宽 paper-deep 色带，垂直内边距 128px。h2（.display-l）横跨第 1–8 列，底部外边距 64px。菜品列表（菜单页面描述的共享 .dish-row 组件）占据第 1–6 列，链接在其下方 40px 处。图形占据第 8–12 列，宽高比 3/4，与菜品列表顶部对齐并向下偏移 48px，图注在其下方。移动端图形在链接之后全宽显示。
   动效：h2 行揭示，菜品行以 80ms 交错揭示，图形揭示。
6. **条带 II — 田野** — FIELD 视差条带，叠加文字 'Eat in season.'，无图注标签。
   布局：与条带 I 结构相同，高度 clamp(360px, 72vh, 720px)。第四层容纳叠加标题，Fraunces 斜体 300，字号 clamp(3rem, 9vw, 8.75rem)，纸质色，距左侧 48px（移动端 24px），距底部 18%，使其位于深色山丘和树篱之上。
   动效：层速度为 0.08、0.18 和 0.32，叠加文字以 0.45 移动。
7. **03 — 到访** — 标签：'03 — Visit'。h2：'Down the cobbles,' / 'past the old cooperage.' 段落：'We're at the far end of Cooper's Yard, six minutes on foot from Eastmere Station. The bar is kept for walk-ins every night, and the kitchen takes last orders an hour before close.' 文本链接：'Hours, map & directions'，带 arrow-right 指向 ./visit.html。紧凑营业时间：'Mon–Tue Closed'、'Wed–Thu 17:30–23:00'、'Fri 17:30–23:30'、'Sat 12:00–15:00, 17:30–23:30'、'Sun 12:00–16:00'。地址：'14 Cooper's Yard, Eastmere EM2 4QT'，带 Lucide map-pin 图标。
   布局：垂直内边距 128px。左侧占据第 1–6 列：标签、h2（.display-l）、段落（最大 42ch，顶部外边距 32px，ink-soft）和链接（顶部外边距 32px）。右侧占据第 8–12 列，顶部外边距 96px。其营业时间行为 15px，带 1px 细线底边框和 14px 垂直内边距，flex justify-between，日期字重 500，时间使用 tabular-nums。匹配今日的行（来自 new Date().getDay()）在日期前有一个 6px 陶土色圆点和一个 10px 大写陶土色 'Today' 标签。地址位于行下方 24px 处。移动端所有内容堆叠。
   动效：以 80ms 交错揭示。
8. **预订色带（所有页面共享）** — 标签：'Reservations'。h2：'Book by phone,' / 'or write to us.'，第二行为斜体。两个大链接行：'[PHONE]' 带电话图标链接到 tel:，以及 '[EMAIL]' 带邮件图标链接到 mailto:。每行末尾有一个 arrow-up-right 图标。备注：'Tables are released four weeks ahead. The bar is kept for walk-ins every night. For seven or more, please email.'
   布局：全出血墨色背景，纸质文字，垂直内边距 128px（移动端 96px）。标签位于第 1–3 列，h2（.display-l）位于第 4–12 列。链接行堆叠在第 4–12 列，顶部外边距 64px。每行全宽，带 1px 顶边框，颜色为 rgba(244,238,227,0.2)，垂直内边距 24px，flex justify-between items-center，链接文字为 Fraunces 300，字号 clamp(1.75rem, 4vw, 3.5rem)。备注位于第 4–9 列，顶部外边距 40px，15px，纸质色 70% 不透明度。
   动效：揭示。链接悬停效果在设计动效中描述。
9. **页脚（所有页面共用）** — 四列。'[BRAND]' 配 'Seasonal small plates & natural wine in Cooper's Yard, Eastmere.'；'Address' 配 '14 Cooper's Yard'、'Eastmere EM2 4QT'；'Hours' 配 'Wed–Fri 17:30–late'、'Sat 12:00–late'、'Sun 12:00–16:00'、'Mon–Tue closed'；以及 'Contact' 配 [PHONE] 的 tel: 链接、[EMAIL] 的 mailto: 链接和页面链接 Home / Menu / Visit（./index.html、./menu.html、./visit.html）。它们下方是巨大的字标 '[BRAND]'。底栏左侧是 '© 2026 [BRAND]. Illustrations drawn in code.'，右侧是可选的 [CREDIT] 链接。
   布局：纸色背景，顶部内边距 96px。各列分别跨越 1–4、5–6、7–9 和 10–12。每个列标题是 12px 大写标签，底部外边距 16px，正文为 15px，行高 1.7。巨大字标使用 Fraunces 300，字号 19vw，行高 0.8，字距 -0.05em，置于各列下方 96px 处。它位于一个 overflow-hidden 的包装器中，并向下平移 10%，使其基线在底栏处被裁切。底栏有 1px 细线顶部边框、20px 垂直内边距和 12px 的 ink-soft 文字，flex justify-between。在移动端，各列形成 2x2 网格，字标为 22vw。
   动效：字标字母在进入视口时升起。

### 菜单（`menu.html`）
1. **页头（共用）** — 与首页页头完全相同。'Menu' 为当前活动页面。
   布局：同首页。
2. **菜单主视觉** — 标签行：左侧 'Menu · Autumn 2026'，右侧 'Printed every Tuesday'。h1：'The autumn' / 'menu.'，其中 'menu.' 为斜体陶土色。说明：'Plates are made to share. Three or four per person is about right; the kitchen sends them as they're ready.' 图例：'V vegetarian · VG vegan · GF gluten-free · Prices in £'。
   布局：顶部内边距 64px，底部内边距 96px。标签行的样式与首页主视觉完全一致。h1（.display-xl）跨越 1–8 列。9–12 列与 h1 底部对齐（self-end），放置说明（17px ink-soft，最大 30ch），然后是图例（12px 大写标签，顶部外边距 24px，每个饮食代码显示为 .diet-tag）。在移动端它们堆叠。
   动效：h1 行在加载时入场，然后说明淡入并上升。
3. **课程索引** — 锚点链接：'Snacks'、'Small plates'、'Larger plates'、'Cheese'、'Sweet'、'To drink'，分别指向 #snacks、#small-plates、#larger-plates、#cheese、#sweet 和 #to-drink。
   布局：position sticky，top 72px（移动端 64px），z-40，纸色背景，1px 细线顶部和底部边框，高度 52px。容器内是一个 flex 行，间距 32px，overflow-x auto 并隐藏滚动条。链接为 12px 大写、字重 600、字距 0.16em、ink-soft 色。活动链接变为 ink 色，并带有 2px 陶土色下划线，偏移 6px。
   动效：一个 rootMargin 为 '-40% 0px -55% 0px' 的 IntersectionObserver 设置活动课程。点击时使用 lenis.scrollTo(target, { offset: -140 }) 滚动。在移动端，活动链接会水平滚动到视口内。
4. **课程** — 六个课程区块，带罗马数字、标题和说明。I. Snacks，'While you decide.' — 'Warm sourdough & cultured butter' 5，'Rye-and-spelt loaf, baked at noon.' V；'Smoked curd on rye crisp, pickled walnut' 6，'Curd from a small dairy twenty minutes north.' V；'Fried sage, brown-butter salt' 5，'A bowl to pick at.' V GF；'Cured mackerel, apple, horseradish' 8，'Cured overnight, sliced thin.' GF。II. Small plates，'Three or four between two.' — 'Roasted delicata squash, brown butter, sage' 11，'Toasted seeds, a little chilli.' V GF；'Beetroot baked in salt, whipped goat's curd' 10，'Hazelnuts and the beet leaves, wilted.' V GF；'Roasted carrots, carrot-top salsa verde' 9，'Pumpkin seeds, cider vinegar.' VG GF；'Charred leeks, egg-yolk dressing' 10，'Crisp shallots and chives.' V；'Hand-cut beef tartare, smoked oyster mayonnaise' 14，'Potato crisps on the side.' GF；'Grilled mushrooms on toast, aged cheddar' 12，'Thyme and a spoon of mushroom ketchup.' V；'Mussels, cider & lovage' 13，'Grilled bread for the broth.' III. Larger plates，'To share, or not.' — 'Slow-cooked pork shoulder, quince' 22，'Mustard greens, cooking juices.' GF；'Hake, celeriac purée, mussel butter' 24，'From the day boats.' GF；'Pumpkin dumplings, sage butter' 19，'Aged sheep's cheese, toasted pumpkin seeds.' V；'Roast partridge, bread sauce, blackberries' 28，'A whole bird; allow twenty-five minutes.' IV. Cheese，'Cut to order.' — 'Three cheeses, oatcakes, pear chutney' 14，'Chosen weekly from small makers.' V。V. Sweet，'Worth the room.' — 'Brown-butter cake, poached pear' 9，'Crème fraîche, a little honey.' V；'Baked apple custard, oat crumble' 8，'Served warm.' V；'Dark chocolate, rye, sea salt' 8，'A small, rich slice.' V；'Sorbet of the week' 6，'Ask what the growers sent.' VG GF。VI. To drink，'Ask about the wine.' — 'Pressed apple & sorrel soda' 5，'Made in house, lightly sparkling.'；'Quince & verjus spritz' 11，'Low alcohol, bitter-sweet.'；'Orange wine by the glass' 9，'One of twelve; ask for the bottle list.'；'Filter coffee' 4，'From a roaster across town.'
   布局：每个课程是一个 <section>，带有其 id、80px 垂直内边距和 1px 细线顶部边框。1–4 列放置罗马数字作为 12px 标签（例如 'I.'）、课程标题使用 Fraunces 斜体 300，字号 clamp(2.25rem, 4vw, 3.5rem)，以及说明为 15px ink-soft（最大 24ch，顶部外边距 12px）。此块在桌面端 sticky 于 top 152px。6–12 列放置菜品列表。.dish-row 是一个 <li>，带有 20px 垂直内边距和 1px 细线底部边框（最后一行无）。第 1 行是 flex 行，items-baseline，间距 12px：名称使用 Fraunces 400，字号 clamp(1.25rem, 1.8vw, 1.5rem)，行高 1.25；.leader 为 flex-1，min-width 24px，2px 点状 ink-soft/50 底部边框，translateY(-0.3em)；价格为 Instrument Sans 500，17px，tabular-nums，无货币符号。第 2 行是描述，15px ink-soft（最大 52ch，顶部外边距 6px），后跟内联的 .diet-tag 标签（10px 大写、字重 600、1px 细线边框、1px 5px 内边距、左侧外边距 8px）。在移动端，课程标题堆叠在列表上方，名称换行，leader 保持在名称的最后一行。
   动效：课程标题和菜品行以 80ms 交错显示。菜品行的悬停效果在 Design motion 中描述。
5. **条带 III — 市场** — MARKET 视差条带，放置在课程 III（Larger plates）和课程 IV（Cheese）之间。说明标签为 'Plate II — Tuesday market crates'。
   布局：与首页条带 I 结构相同，高度 clamp(320px, 62vh, 640px)。
   动效：图层速度为 0.08、0.18 和 0.32。
6. **主厨精选** — 标签：'For the table'。标题：'Let the kitchen cook for you.' 文本：'Eight plates chosen by the kitchen for the whole table, sent as they're ready. £48 per person; please book ahead.' 文本链接：'Book by phone'，带 arrow-right 指向 tel:[PHONE]。
   布局：放置在课程 VI 之后，位于 6–12 列，顶部外边距 64px。一个带有 1px ink 边框、40px 内边距（移动端 24px）和 radius 0 的盒子。标题为 Fraunces 300，字号 clamp(1.75rem, 3vw, 2.5rem)，顶部外边距 16px。文本为 17px，顶部外边距 16px，链接顶部外边距 24px。
   动效：显示。
7. **过敏原说明** — 'Please tell us about allergies when you book. A discretionary 12.5% service charge is added to the bill. The menu changes weekly and dishes may sell out.'
   布局：6–12 列，顶部外边距 40px，底部内边距 128px，13px ink-soft，最大 60ch。
   动效：显示。
8. **预订条带（共用）** — 同首页。
   布局：同首页。
9. **页脚（共用）** — 同首页。
   布局：同首页。

### Visit（`visit.html`）
1. **页头（共享）** — 与首页页头完全一致。'Visit' 为当前活动页面。
   布局：与首页相同。
2. **Visit 主视觉** — 标签行：左侧为 'Visit · [NEIGHBOURHOOD]'，右侧为 'Open Wed–Sun'。h1：'Come hungry,' / 'stay late.'，第二行使用斜体陶土色。注释：'Thirty-two seats, a six-seat counter facing the grill and a bar we keep for walk-ins.'
   布局：与菜单主视觉结构相同：h1（.display-xl）横跨第 1–8 列，注释位于第 9–12 列，底部对齐，17px ink-soft，最大 30ch。
   动效：加载时 h1 行入场。
3. **信息网格** — 地址：'[BRAND]'、'14 Cooper's Yard'、'Eastmere EM2 4QT'。营业时间，以完整表格呈现：Monday Closed；Tuesday Closed；Wednesday 17:30–23:00；Thursday 17:30–23:00；Friday 17:30–23:30；Saturday 12:00–15:00 & 17:30–23:30；Sunday 12:00–16:00。表格下方：'The kitchen closes one hour before the room.' 联系方式：[PHONE] tel: 链接和 [EMAIL] mailto: 链接，各带其 Lucide 图标，然后是 'Bookings by phone 10:00–17:00, Tuesday to Saturday. Emails answered within a day.' 和 'Private hire: the whole room seats 32 — email us.'
   布局：底部内边距 96px。桌面端三列：地址在第 1–3 列，营业时间在第 4–8 列，联系方式在第 9–12 列。每列有 1px 细线左边框（第一列除外），左内边距 24px，并以 12px 标签标题开头（带 Lucide map-pin、clock 或 phone，14px）。地址为 Fraunces 300、28px、行高 1.2。营业时间行为 15px，带细线底边框和 12px 垂直内边距，flex justify-between，使用 tabular-nums，关闭日为 ink-soft。今日行带陶土色圆点和 'Today' 标签，与首页一致。联系链接为 17px，带 .link-underline。移动端各列堆叠，每列带细线顶边框。
   动效：各列以 80ms 错峰显现。
4. **地图** — 一幅虚构的手绘 SVG 街道地图（viewBox 0 0 1200 750），置于 figure 内，图注为 'Not to scale. Drawn by us.' 地面：paper-deep。运河：一条 56px #C9CDB8 描边，曲线经过 (0,560)、(420,520)、(800,610) 和 (1200,540)，带 1px ink-soft 边缘线和标签 'Eastmere Canal'。街道为 22px paper 描边，带 1px 细线轮廓：'Tanner Row' 在 y 200 水平延伸；'Ropemaker Walk' 在 y 470 水平延伸；'Cask Lane' 在 x 520 从 y 200 到 470 垂直延伸；'Cooper's Yard' 从 Ropemaker Walk 的 x 760 向北延伸至 y 340 处的一个小广场；'Station Approach' 从 (250,640) 经 x 300 处跨越运河的人行桥向上至 (330,470)。约十四个建筑块（#DDD2BE 填充，细线描边）填补空隙。公园 'Tanner's Green' 是 x 840–1160、y 40–170 的多边形，填充 35% 不透明度的苔藓色斜线阴影。'Eastmere Station' 是 (90,640) 处 200x70 的矩形，带轨道阴影线。公交站是 Tanner Row 上 (600,200) 处的小墨色圆点，标注 '38 · 41'，拱门标记是 (760,455) 处的小半圆。路线：一条陶土色虚线路径（3px 描边，dasharray '2 10'，圆头端点）从 (250,640) 经 (300,560) 和 (330,470)，沿 y 470 向东至 (760,470)，然后向北至 (760,360)，在 (520,452) 处以 Fraunces 斜体陶土色标注 '6 min walk'。图钉：一个 28x38 的陶土色泪滴形位于 (760,350)，带奶油色中心点和脉冲环。图钉旁是标签卡（paper 填充，细线边框），'[BRAND]' 为 Fraunces 斜体 22px，'14 Cooper's Yard' 为 11px 大写。左上角有带 'N' 箭头的罗盘圆，右下角有标注 '100 m' 的比例尺。街道标签为 Instrument Sans 11px 大写，字距 0.2em，ink-soft，并沿垂直街道旋转。所有标签均来自 content.ts。
   布局：在容器内，横跨全部 12 列。figure 有 1px 细线边框和 0 圆角，桌面端宽高比 16/10，移动端 4/5（SVG 使用 preserveAspectRatio 'xMidYMid slice' 并以图钉为中心）。wobble 滤镜应用于街道、建筑块、运河和公园分组，但不应用于文字、图钉或路线。图注为 12px ink-soft，顶部外边距 12px。svg 具有 role='img' 和描述路线的 aria-label。
   动效：路线绘制、图钉落下、标签淡入和脉冲，如 Design motion 中所述。
5. **到达方式** — 三个条目，各带一个 Lucide 图标。Footprints，'On foot'：'Six minutes from Eastmere Station: up Station Approach, over the footbridge, right onto Ropemaker Walk, then left through the arch into Cooper's Yard. Bike racks in the yard.' Bus，'By bus'：'Routes 38 and 41 stop on Tanner Row, two minutes away down Cask Lane.' Accessibility，'Access'：'Step-free entrance from the yard, an accessible WC and space for two wheelchairs at the low tables. Call ahead and we will set one aside.'
   布局：顶部内边距 96px，底部内边距 128px，12 列中三等分（第 1–4、5–8、9–12 列），移动端堆叠。每个条目有一个 20px 图标，置于 40px 方块内，带 1px 细线边框，标题为 Fraunces 400、24px（顶部外边距 16px），文字为 15px ink-soft（最大 36ch，顶部外边距 8px）。
   动效：各条目以 80ms 错峰显现。
6. **横幅 IV — The room** — TABLE 视差横幅（复用），带图注标签 'Plate III — Thirty-two seats'。
   布局：与首页横幅 I 结构相同。
   动效：图层速度为 0.08、0.18 和 0.32。
7. **预订区（共享）** — 与首页一致。
   布局：与首页一致。
8. **页脚（共享）** — 与首页一致。
   布局：与首页一致。

## 资产
- 字体：Fraunces Variable，正体与斜体，来自 @fontsource-variable/fraunces npm 包（OFL-1.1）。导入 full.css 和 full-italic.css。由 Vite 自托管并打包。
- 字体：Instrument Sans Variable，来自 @fontsource-variable/instrument-sans npm 包（OFL-1.1）。由 Vite 自托管并打包。
- 图标：Lucide 图标，来自 lucide npm 包（ISC），使用 createIcons 渲染，仅限 phone、mail、map-pin、clock、arrow-right、arrow-up-right、menu、x、footprints、bus 和 accessibility。全部为 currentColor 的 1.5px 描边，尺寸 16–20px。
- 图像：每张图像都以代码形式绘制为 src/art/ 中的内联 SVG 字符串：主视觉图版、静物、TABLE、FIELD 和 MARKET 条带图层，以及街道地图。颗粒叠加层是 styles.css 中的 SVG feTurbulence data URI。不下载任何内容，也没有位图。
- 图标：Favicon：public/favicon.svg，手写为 32x32 的陶土色圆形，带奶油色内环。

## 不要做
- 任何形式的后端都不要：不要服务器代码、API 路由、数据库、认证，也不要任何会提交到某处的表单。预订只能通过 tel: 和 mailto: 链接完成。
- 不要在线预订表单、预订小部件，也不要任何形式的第三方嵌入或 API。
- 不要 Google Maps、Mapbox、OpenStreetMap 瓦片、地图库或真实地图数据。地图是虚构的手绘 SVG，只包含虚构的街道名和地标。
- 不要任何真实餐厅的名称、标志、字标或口号，也不要从任何真实餐厅复制文案、菜品名或菜单文本。所有文案都是为 [BRAND] 虚构的。
- 不要来自 Unsplash、Pexels、Pixabay 或其他图库网站的照片，不要 Google Images，也不要占位图服务。所有图像都是代码绘制的 SVG。
- 不要用人物面孔作为主视觉图像，不要品牌标志或品牌图标（不要 Simple Icons）。
- 不要商业字体或自定义字体。只用 Fontsource OFL 字体，自行托管。绝不要从 fonts.googleapis.com、fonts.gstatic.com、Adobe Fonts 或任何字体 CDN 加载任何内容。
- 不要 CDN 的 <script> 或 <link> 标签，不要热链接文件，不要分析统计。每个字体、图标和脚本都本地打包。
- 生产构建中不要 source map，不要把 src/ 复制进 dist/，输出必须压缩。保持 dist/ 在 20 MB 以下。
- 内部链接始终指向文件名（./index.html、./menu.html、./visit.html），绝不要指向 '/' 或裸目录。资源路径使用相对路径（Vite base './'）。
- 不要更改技术栈：不要 React、Vue 或其他框架，不要 UI 套件，也不要 Aceternity UI 或 Tailwind Plus/Tailwind UI 源码。
- 不要圆角（设计部分中指定的圆形元素除外），不要投影，UI 元素上不要渐变，不要 emoji。
- 只使用一种 UI 强调色（terracotta（陶土色））。Moss（苔藓绿）、ochre（赭黄）和 beet（甜菜紫）只出现在插图中。
- 在 prefers-reduced-motion 下，不得有平滑滚动、视差、显现动画、标题入场、数字递增、盘子旋转、路线绘制或图钉脉冲。所有内容以其最终状态显示。
- 在 1440x900 和 390x844 下控制台零错误，移动端无水平页面滚动（只有课程索引可横向滚动）。
- 不要 SEO 附加项：不要 meta 描述、Open Graph 标签、JSON-LD 或站点地图。只使用普通的 <title> 和 favicon。
- 不要使用真实电话号码或域名。保留虚构的默认值或用户自己的值。
- 除了可选的 [CREDIT] 页脚链接外，不要在网站任何地方提及 VibeFather。

---
— Prompt by VibeFather · https://vibefather.ai/t/editorial-restaurant-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
