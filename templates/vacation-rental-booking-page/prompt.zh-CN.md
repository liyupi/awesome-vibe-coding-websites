> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 度假租赁预订页面

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的单页预订网站，[BRAND] 是位于 [REGION] 的一处私人小木屋出租房源，可入住 [SLEEPS] 人，每晚 $[NIGHTLY] 起。它必须像真实的直订页面一样运作：带灯箱的画廊、按简单分组陈列的设施、显示每晚价格（平日/周末）且已订日期区间以删除线标出的两个月可用性日历、随日期、住客人数和每周折扣实时更新的价格明细、房屋守则、带手绘迷你地图的虚构地标区域指南，以及一个在客户端确认并生成参考编号的预订请求表单。单页：index.html，包含各区块（#cabin、#calendar、#rules、#area、#book）。一切都在浏览器中运行；不会提交到任何地方。

- 受众：28–55 岁的家庭和朋友圈，计划周末或一周的出行，会对比大型平台和房东自己的页面。以手机为先，对费用敏感，对说谎的日历深恶痛绝；他们想要真实的每晚价格、诚实的规则和五分钟内完成的预订路径。
- 目标：在不产生平台费的情况下生成预订请求。访客应在十秒内看到黄昏时分的小木屋、可住人数和每晚价格；在两分钟内看到他们所选日期的准确总价。
- 语气：温暖而就事论事，就像房东在冰箱上留的一张便条。短句，精确数字（英里、分钟、美元），不用“nestled”或“retreat”这类陈词滥调，不用感叹号。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/bitter（OFL-1.1）、@fontsource-variable/work-sans（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 npm create vite@latest 以 react-ts 模板搭建脚手架。项目根目录下有一个 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist'，sourcemap false，assetsInlineLimit 0 }。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4（tailwindcss + postcss + autoprefixer），content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将 Design 下的每种颜色以 kebab-case 键（cream、bark、linen、card、timber、moss、pine、clay、rust、rule）添加到 theme.extend.colors，并将 fontFamily display 设为 ['Bitter', 'Georgia', 'serif']，sans 设为 ['Work Sans Variable', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 12px，并添加 maxWidth { container: '1200px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/bitter/500.css'、'@fontsource/bitter/600.css' 和 '@fontsource-variable/work-sans'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（所有字符串、数字、设施、规则、指南地点、费用和图片路径，均带类型），src/lib/brand.ts（brandSlug = [BRAND] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，brandInitials = 每个单词的首字母大写，emailDomain = 去掉连字符的 brandSlug + '.com'），src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键前缀为 brandSlug + ':'），src/lib/calendar.ts（monthGrid(year, month) 返回日期单元格；rate(date) = 周末（周五/周六）为 [NIGHTLY]+30，否则为 [NIGHTLY]；一个基于固定虚构区间列表的带种子的已预订区间生成器，在重新加载后保持稳定；quote(start, end, guests) → { nights, nightlySum, cleaning 95, serviceRate 0.12, weeklyDiscount 0.10（当 nights >= 7 时）, total }，所有金额计算均以整数美元进行）。
  - 状态：src/store/booking.ts 是一个小型外部 store（useSyncExternalStore），持有 { start, end, guests, name, email, note, reference } 和 submitted 标志，持久化到 localStorage 键 brandSlug + ':request'。在日历上选择日期会将 start/end 写入 store；表单和明细从中读取。
  - src/components/ 中的组件：Header.tsx、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、Footer.tsx；Hero.tsx、Gallery.tsx（Lightbox.tsx）、TheCabin.tsx（AmenityGroup.tsx）、CalendarSection.tsx（MonthView.tsx、DayCell.tsx、PriceBreakdown.tsx）、HouseRules.tsx、AreaGuide.tsx（MiniMap.tsx 内联 SVG、GuideSpot.tsx）、BookingForm.tsx（GuestsStepper.tsx、RequestCard.tsx）、FaqStrip.tsx。src/pages/Home.tsx 将它们与 Header 和 Footer 组合在一起。
  - 在首次构建之前，使用 curl -L -o 将 Assets 下列出的每张图片以给定的确切文件名下载到 public/images/。构建本身从不获取任何内容。
  - public/favicon.svg 如 Assets 下所述。index.html：lang en，<meta name='theme-color' content='#F7F3E9'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[BRAND] — [REGION] · sleeps [SLEEPS]</title>。
  - 在项目根目录下按 Assets 下所述编写 ASSETS.md。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张图片。保持在 10 MB 以下。

## 变量
- [BRAND] — 房源名称（默认：“Hemlock Hollow Cabin”）。虚构的房源名称。用于标题、主视觉区、页脚、电子邮件（hello@ + 不含连字符的 brandSlug + .com）、localStorage 键和预订参考号（首字母缩写，例如 HH-4021）。绝不使用真实的房源或租赁品牌。
- [REGION] — 地区（默认：“the Catskills”）。小屋所在的位置，采用小写冠词风格（'the Catskills'、'the Blue Ridge Mountains'）。用于主视觉区文案、区域指南和页脚。真实地区可以使用；指南中的湖泊、步道和城镇保持虚构。
- [SLEEPS] — 可入住人数（默认：“8”）。最大客人数，以数字表示。驱动主视觉区信息条、客人步进器的最大值以及睡眠安排文案（'sleeps [SLEEPS] across three bedrooms'）。保持在 2–10 之间。
- [NIGHTLY] — 工作日房价（默认：“185”）。基础工作日房价，以数字表示。周末（周五/周六）按 +30 计算；周折扣为 7 晚及以上 10%；清洁费为 95，服务费为 12%。所有金额均由此数字推导。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/vacation-rental-booking-page（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- 奶油色（Cream）`#F7F3E9` — 全站页面背景。
- 树皮色（Bark）`#EFE8D9` — 交替区块背景（小屋、区域指南），行和标签的悬停填充。
- 卡片色（Card）`#FDFBF5` — 卡片表面（日历面板、明细、规则、表单、图库说明文字），输入框填充。
- 木色（Timber）`#4A3A2C` — 标题和正文、主要描边按钮、图标颜色。
- 松绿色（Pine）`#2E3B2E` — 页脚、照片叠加层（以 rgba(46,59,46,x) 形式）、深层日历框架。
- 苔藓色（Moss）`#6E7F5E` — 次要文本、眉题、说明文字、可预订日期价格、周末价格强调。
- 陶土色（Clay）`#B5652F` — 唯一强调色：主要按钮、选中日期填充、总计数字、焦点环、地图图钉。
- 深陶土色（Clay Deep）`#97521F` — 主要按钮悬停、选中范围边缘。
- 铁锈色（Rust）`#8C4A3C` — 已预订日期的删除线颜色、规则警告图标、“起价”费率刻度。
- 分隔线色（Rule）`#DFD6C3` — 1px 细线、卡片边框、输入框边框、日历网格线。

### 字体排印
- 展示字体：H1、H2、H3、房源名称、总计、每日价格、字标：Bitter（OFL），字重 500/600
- 文本与界面：正文、眉题、按钮、导航、表单字段、说明文字、所有金额计算（font-variant-numeric tabular-nums）：Work Sans（OFL），字重 400/500/600

### 布局与动效
- 间距：8px 基准单位。容器最大宽度 1200px，居中，桌面端侧边内边距 48px，平板端 32px，640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面端 104px，1024px 以下 80px，640px 以下 64px。字号比例：H1 clamp(44px, 6.4vw, 88px) Bitter 600，行高 1.02；H2 clamp(32px, 4.2vw, 54px) Bitter 600，行高 1.08；H3 24px Bitter 600；导语 Work Sans 400 18px / 1.7 Timber 88% 不透明度；正文 Work Sans 400 16px / 1.7（最大宽度 64ch）；眉题 Work Sans 600 12px 大写 字间距 0.16em Moss，前面有一条 24px x 2px 的 Clay 线，间距 12px；说明文字 Work Sans 400 13px Moss。按钮：高度 50px，内边距 0 26px，Work Sans 600 14px 字间距 0.04em。主要按钮：Clay 填充，Card 文字。次要按钮：1px Timber 边框，Timber 文字。小按钮 38px。输入框：高度 50px，1px Rule 边框，Card 填充，16px Work Sans，聚焦时边框 Clay。全局焦点环：2px Clay 轮廓，偏移 3px。
- 圆角：卡片、输入框、标签、照片、日历面板和请求卡片为 12px。仅胶囊、住客步进按钮和地图图钉使用 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现和日历过渡；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于月份切换和表单切换。没有任何弹跳。
- 动效：显现：包裹在 <Reveal> 中的区块初始为 opacity 0、translateY(16px)，当 15% 可见时（Motion whileInView，viewport once）在 700ms 内以 --ease-out 动画到静止状态。同级元素以 80ms 错开（index prop）。
- 动效：主视觉照片：加载时在 2400ms 内以 --ease-out 从 1.06 缩放到 1.0；滚动时将其从 0 平移到 10%（Motion useScroll，offset ['start start', 'end start']），标题区块淡出到 0.3。H1 从 translateY(24px) 升起，错开 140ms。“from $[NIGHTLY]”刻度最后滑入，并带有一个小的 2px 下划线绘制。
- 动效：图库：照片悬停时上升 6px 并加深其说明栏；点击打开灯箱（Pine 叠加层 82%，照片最大 82vh，说明文字在 Card 中，X 关闭，箭头和 Escape 导航），带有 240ms 淡入和 8px 缩放稳定。
- 动效：日历：月份切换在 280ms 内以 --ease-io 水平滑动 24px（AnimatePresence mode 'wait'）。悬停某天时价格上浮 2px。选择开始日期时单元格填充 Clay；选择结束日期时在日期后方绘制 Clay/15% 的带状范围，两端圆角；已预订单元格拒绝选择并伴随 4px 抖动。明细逐项重新排列（每行淡入上移 8px，错开 60ms），总计在 500ms 内计数到新值。
- 动效：明细：当住宿晚数达到 7 时，周折扣行出现，并绘制一个 Moss 对勾。
- 动效：规则：每条规则行显现时其图标绘制一次（stroke-dashoffset），错开 80ms。
- 动效：迷你地图：进入视图时，道路线在 800ms 内绘制，然后图钉以柔和的过冲落下，指南点以 100ms 错开弹出。
- 动效：预订表单：住客步进计数在 240ms 内脉冲 1.0→1.15→1.0；提交时表单滑出，RequestCard 滑入（上移 16px，320ms --ease-io）；参考号（brandInitials + '-' + 四位数字）在 700ms 内逐字符打出。
- 动效：页头：在主视觉上方透明，使用 Card 文字；滚动 40px 后变为 Cream 94% 不透明度、backdrop-filter blur(10px)、Timber 文字、1px Rule 边框，250ms 过渡；页头中始终有一个小的 Clay “Book now” → #book 按钮。
- 动效：链接：.link-draw 在悬停和 focus-visible 时，在 300ms 内从 0% 到 100% 宽度生长出 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 禁用主视觉缩放和平移、H1 升起、地图绘制、计数、打字、抖动和滑动（以静止状态渲染）。颜色和边框悬停变化保留。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：仅使用真实摄影，温暖且富有林地气息，全部六张均为本模板以统一风格制作：黄昏灯笼光和晨雾、木材与苔藓色调、纪实编辑风格、细腻颗粒。绝不出现人物——外观、房间、门廊、码头。任何地方都没有可读文字或标志。每张照片使用 object-fit cover，object-position 在 Assets 下给出，12px 圆角，无阴影；Cream 上的照片获得 1px Rule 轮廓。照片下方的说明文字使用 Work Sans 13px Moss。代码绘制：favicon、字标（仅文字）、迷你地图、价格胶囊、对勾圆圈、分隔线。图标：仅使用 lucide-react，描边宽度 1.5。

## 页面与区块
### 租赁页（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[BRAND] = Hemlock Hollow Cabin，[REGION] = the Catskills，[SLEEPS] = 8，[NIGHTLY] = 185）。将每个字符串、数字和列表都放入 src/content.ts 并从中渲染。若任一变量值不同，请重写每个标题、设施、规则、指南地点、费用行和 FAQ 答案，使其对新房产具体且可信，同时保持相同结构和数量（4 个设施组、每组 4 项，6 条规则，5 个指南地点，5 个 FAQ）。所有地点和数字均为虚构。全篇使用的房产事实：可住 [SLEEPS] 人（三间卧室：两张 queen 床，一间可睡四人的上下铺房间）；两个浴室；木炉和踢脚线供暖；Starlink 级高速 wifi；地址为 'the end of Hollow Road, [REGION]'；入住时间下午 4 点，退房时间上午 11 点；欢迎狗狗（最多 2 只，不许上沙发——它们会无视这条）；禁止派对，室内禁止吸烟；安静时段晚 10 点至早 8 点；包含木柴；价格：工作日 $[NIGHTLY]，周末（周五/周六）$[NIGHTLY]+30，7 晚以上 9 折，清洁费 $95，服务费 12%；已预订示例区间（虚构、固定）：当月和下月的 1–4 日及 15–18 日，外加来自固定种子列表的两个周末区间。
   布局：不适用
   动效：不适用
2. **页头** — 左侧：字标 '[BRAND]'（Bitter 600 19px），第二行 'Private cabin · [REGION]'（Work Sans 600 10px 大写，字距 0.2em），链接到 ./index.html。右侧导航（Work Sans 500 14px）：'The cabin' → #cabin，'Calendar & rates' → #calendar，'House rules' → #rules，'The area' → #area，以及一个小号 Clay 色 'Book now' → #book 按钮。
   布局：固定顶部，高度 76px，容器对齐，在 hero 上方透明，滚动 40px 后变为实色。820px 以下：仅显示字标 + Book now，导航隐藏。
3. **Hero** — 全出血照片 hero-cabin.webp。眉题（Card）：'Private cabin · [REGION]'。H1 分两行：'The woods, *with wifi.*' 导语（Card 88%，最大宽度 560px）：'A timber cabin at the end of a dirt road: [SLEEPS] guests, three bedrooms, a wood stove that does most of the talking, and the town twenty minutes when it doesn''t.' Hero 内底部条（Card/90% 条，带细线）：'Sleeps [SLEEPS]' · '2–7 nights' · 'Dogs welcome' · 'From $[NIGHTLY]/night'（价格以 Clay 色勾选），各项以点分隔。移动端规格条优雅换行：'From $185/night' 独占一行且绝不被裁切；'2-7 nights' 和 'Dogs welcome' 可下移。
   布局：高度 92svh，最小 640px。照片 object-position 50% 58%。叠加层 linear-gradient(180deg, rgba(46,59,46,0.40) 0%, rgba(46,59,46,0.06) 40%, rgba(46,59,46,0.85) 100%)。内容锚定左下，距条上方 120px。条：绝对定位 bottom 24px，容器对齐，高度 56px，12px 圆角，背景模糊。
4. **画廊** — 区块眉题 'Have a look' 和 H2 'Six frames, no fisheye.' 六张照片的拼贴，带说明：hero-cabin.webp（复用）'Dusk, from the fire circle'；living-fire.webp 'The stove does most of the heating'；kitchen-pine.webp 'Pine counters, real knives'；loft-bed.webp 'The bunk room sleeps four'；porch-morning.webp 'Morning fog off the hollow'；lake-dock.webp 'Hollow Lake dock, ten minutes out'。点击任意一张打开 Lightbox，支持键盘导航。重建为刻意的 12 列网格：一个大图块（8 列）加一个 2x2 或 3 连排（各 4 列）——无空单元格、无多余细线、六张照片全部可见，每个图块在 Cream 上有 1px Rule 描边，悬停时上浮 6px。
   布局：Cream 背景。6 列拼贴：第 1 和第 4 项跨 2 行（宽高比 3:4）；其余宽高比 4:3；12px 间距，12px 圆角。900px 以下：2 列，宽高比 4:3。
5. **小屋（设施）** — 区块 id='cabin'。眉题 'The cabin' 和 H2 'What''s actually there.' 导语：'Sleeps [SLEEPS] across three bedrooms — two queens and a bunk room the kids will fight over. Two baths, a mudroom that earns its name, and 1,400 square feet of pine.' 四个设施组作为 Card 面板，带 Lucide 图标：'Comfort' — Flame 'Wood stove + firewood included'，Thermostat 'Baseboard heat in every room'，Wifi 'Fast satellite wifi — video calls fine'，Armchair 'Reading chairs that people actually fall asleep in'。'Kitchen' — UtensilsCrossed 'Gas range, real knives, cast iron'，Refrigerator 'Full fridge + chest freezer'，Coffee 'Pour-over kit and a loud grinder'，Dishwasher 'Dishwasher (the machine kind)'。'Outside' — Trees 'Eight wooded acres, one cleared hollow'，FlameKindling 'Fire circle with Adirondack chairs'，Dog 'Fenced half-acre for the dog'，CarPort 'Parking for three cars, plowed'。'Practical' — WashingMachine 'Washer and dryer'，FirstAid 'First-aid kit and a plunger, both findable'，KeyRound 'Keypad lock — no key handoffs'，Phone 'Cell service: one bar, the good kind'。
   布局：Bark 背景。2x2 组卡片网格（24px 间距），每组为 4 行图标列表（图标在 40px Cream 圆角方块中，标签 Work Sans 15px）。900px 以下：堆叠。
6. **日历与价格明细** — 区块 id='calendar'。眉题 'Calendar & rates' 和 H2 'Real prices on every day.' 左侧：双月 Calendar 面板（本月和下月，桌面并排，移动端可滑动）——每天显示每晚价格（日期下方 Work Sans 12px tabular-nums；周末用 Moss 粗体），已预订区间用 Rust 删除线并带 'held' 工具提示，过去日期变暗；点击开始日，再点击结束日（绘制区间）；月份箭头导航。面板下方图例：'Weekend rate $[NIGHTLY]+30' 圆点 Moss，'Held' 删除线 Rust，'Selected' 填充 Clay。右侧：PriceBreakdown 卡片，粘性：行 '3 nights × $185 — $555'（实时），'Cleaning — $95'，'Service (12%) — $78'，折扣行 'Weekly (7+) — −$74' 仅在满足条件时出现，细线，然后 'Total — $654'（Bitter 600 34px Clay）和 'for 6 guests' 说明；空状态显示 'Pick your dates on the calendar' 并带左指箭头。明细下方：'Rates, fees and holds shown here are the demo''s sample data' 说明。
   布局：Cream 背景。日历面板 7 列，Card 上 1px Rule 边框，24px 内边距；明细 4 列偏移 1，粘性 top 100px。月份网格：7 列，1px Rule 线，桌面日期单元格高 64px。1024px 以下：堆叠，明细不粘性。
7. **房屋规则** — 区块 id='rules'。眉题 'House rules' 和 H2 'The short list.' 六条规则行（图标、一行、一条注释）：Clock 'Check-in 4pm / check-out 11am' — 'Keypad code arrives by text that morning.'；Dog 'Dogs: yes, two, floor people' — 'The couch rule exists and is ignored; we''ve made peace with it.'；Volume2 'Quiet hours 10pm–8am' — 'The neighbors are owls. Literally.'；Cigarette 'No smoking inside' — 'Porch with a tin ashtray, outside only.'；Users 'Max [SLEEPS] guests, no parties' — 'Dinner for [SLEEPS]? Perfect. A 30th birthday for sixty? The hollow says no.'；Trash2 'Trash out to the bear box' — 'The bin has a latch; the bears have opinions.'
   布局：Bark 背景。行在 2x3 网格中（24px 间距），每条在 Card 上，1px Rule 边框，20px 内边距：规则 Work Sans 600 16px Timber，注释 14px Moss。860px 以下：堆叠。
8. **区域指南** — 区块 id='area'。眉题 'The area' 和 H2 'Twenty minutes in every direction.' 左侧：MiniMap（内联 SVG：Hollow Road 蜿蜒至小屋处的图钉，西北有湖泊块，东南有城镇网格，东有步道虚线，指北针；Rule 线，Pine 填充，Clay 图钉）。右侧：五个 GuideSpots（名称 Bitter 20px，一行 Work Sans 15px，距离胶囊）：'Hollow Lake' — 'Swim, canoe, or stare at it from the dock.' — '10 min'；'Fern Loop Trail' — 'Three flat miles; do it before the second coffee.' — '5 min'；'Marrow General Store' — 'Eggs, bait, the good bread, one moody cat.' — '12 min'；'The Slate Line Diner' — 'Breakfast all day; the hash is a decision.' — '18 min'；'Townsend Township' — 'Farm stands, a brewery, a hardware store you''ll somehow visit twice.' — '20 min'。
   布局：Cream 背景。地图 5 列在 Card 上；地点 6 列偏移 1，作为带细线分隔的列表。900px 以下：堆叠，地图在前。
9. **预订请求表单** — 区块 id='book'。眉题 'Book it' 和 H2 'Request your dates.' 一个 Card 面板：日期行显示日历中的选择（'Fri 3 – Mon 6' 或 'Pick dates on the calendar' 带链接 → #calendar）；GuestsStepper 1–[SLEEPS]；姓名输入；邮箱输入；备注 textarea（占位符 'Anything we should know — dogs, kids, ceilidh plans?'）；主按钮 'Send booking request'；说明 'Nothing is charged here — this demo saves the request in your browser, and the real page would email the owner.' 提交时（日期 + 姓名 + 有效邮箱必填）：RequestCard — 'Request sent' 对勾圆圈（Moss，描边绘制），'Reference [HH-4021]' 打字输入，摘要行（日期 · 客人 · 报价总额），'We reply within a day — usually within an hour' 和 'Change request' 返回预填表单。持久化到 localStorage。
   布局：Cream 背景，顶部 Bark 色带。面板最大宽度 640px，32px 内边距，1px Rule 边框。RequestCard 以 320ms 滑动切换。480px 以下内边距 20px。
10. **FAQ 条与页脚** — FAQ：页脚上方五个紧凑手风琴：'Is the road plowed?' — 'Yes — Hollow Road is town-plowed; the driveway is on us and done by 9am.'；'Do we need AWD?' — 'The driveway is gravel and fine for anything; a snowstorm changes the math, and we''ll say so.'；'Is the wifi good enough to work?' — 'Video calls, yes; torrenting the internet, no. It''s satellite — weather has opinions.'；'Early check-in?' — 'When the calendar allows, 1pm free; message the morning of.'；'Cancellation?' — 'Full refund 14 days out, half within 7 — the demo says this so you don''t have to guess.' 页脚（Pine 背景）：字标，'Private cabin · [REGION]'，hello@ + emailDomain，锚点 The cabin / Calendar / Rules / The area / Book，以及行 '© [BRAND]. Built by the owner, cleaned by the owner'。
   布局：FAQ 在 Cream 上，720px 容器；页脚垂直内边距 72px，4 列，底线在细线下方。

## 资源

- 图片：为本设计制作的模板照片（可随模板自由再分发）。用 curl -L -o 将每张图片下载到 public/images/：https://media.vibefather.ai/assets/eb6490c4-e224-4b05-a360-faec81890dba/hero-cabin.webp → public/images/hero-cabin.webp（Hero、Gallery 1；object-position 50% 58%；alt 'A timber cabin glowing with warm lights among dark trees at dusk'）；https://media.vibefather.ai/assets/eb6490c4-e224-4b05-a360-faec81890dba/living-fire.webp → public/images/living-fire.webp（Gallery；alt 'A living room with a lit wood stove, wool sofa and stacked firewood'）；https://media.vibefather.ai/assets/eb6490c4-e224-4b05-a360-faec81890dba/kitchen-pine.webp → public/images/kitchen-pine.webp（Gallery；alt 'A kitchen with pine counters, cast iron pans and a gas range'）；https://media.vibefather.ai/assets/eb6490c4-e224-4b05-a360-faec81890dba/loft-bed.webp → public/images/loft-bed.webp（Gallery；alt 'A wood-paneled bunk room with four beds and quilts'）；https://media.vibefather.ai/assets/eb6490c4-e224-4b05-a360-faec81890dba/porch-morning.webp → public/images/porch-morning.webp（Gallery；alt 'A covered porch with two rocking chairs in morning mist'）；https://media.vibefather.ai/assets/eb6490c4-e224-4b05-a360-faec81890dba/lake-dock.webp → public/images/lake-dock.webp（Gallery；alt 'A wooden dock reaching into a still lake at dusk'）。共六个文件。
- 图片：在项目根目录写入 ASSETS.md，包含一张表：path、source URL、author、license——每张照片一行（source 'media.vibefather.ai, made for this template'，author 'VibeFather'，license 'Distributed with the template'），另加 @fontsource/bitter 和 @fontsource-variable/work-sans（OFL-1.1）以及 lucide-react（ISC）的行。绝不用图库网站（Unsplash、Pexels、Pixabay）或含人物、可读品牌标识的图片替换照片。
- 图标：仅使用 lucide-react：Flame、FlameKindling、Thermostat、Wifi、Armchair、UtensilsCrossed、Refrigerator、Coffee、Dishwasher、Trees、Dog、CarPort、WashingMachine、FirstAid、KeyRound、Phone、Clock、Volume2、Cigarette、Users、Trash2、CalendarDays、ChevronLeft、ChevronRight、X、Check、ArrowRight、MapPin。描边宽度 1.5，16–24px，颜色继承。public/favicon.svg 手写：viewBox 0 0 32 32，一个 32x32 的 rect，rx 8，填充 #2E3B2E，一个 Card（#FDFBF5）房屋图形（屋顶三角形 + 方形），带一个 Clay（#B5652F）窗户圆点。无其他 logo：物业名称始终以文字排版呈现。
- 字体：安装 @fontsource/bitter 和 @fontsource-variable/work-sans，并在 src/fonts.ts 中按 Setup 所列导入。Vite 会将 woff2 文件打包进 dist/。
- 图片：以代码绘制：迷你地图（道路、湖泊、城镇网格、步道、图钉）、价格胶囊、图例圆点、勾选圆圈、日期单元格状态和 favicon。无其他位图、无插图、无地图瓦片。

## 不要做
- 不要后端、不要表单提交、不要向任何 API 发起 fetch 请求：日历选择、明细和预订请求只在浏览器内（localStorage）完成；不收取任何费用、不发送任何内容，表单上要写明这一点。
- 这个单页上的所有链接都是锚点（./index.html#cabin、#calendar、#rules、#area、#book）。
- 一切资源自托管：字体通过 Fontsource，图标用 npm 包或内联 SVG，图片下载到 public/images/。不要 CDN 的 <script> 或 <link> 标签，不要 Google Fonts，不要分析统计。
- 生产构建：压缩，不生成 source maps，不把 src/ 复制进 dist/，用单条命令 npm run build，输出在 dist/ 下且小于 10 MB。
- 不要真实房源、平台或其徽章；不要含人物、面孔或手的照片；任何画面中不要有可读文字或 logo；湖泊、步道、商店和城镇都保持虚构。
- 日历以清晰标注的示例数据展示每晚价格和已预订占位；不要任何真实日历的真实日期，页面绝不显示今天的日期（月视图从当前月份开始，但不高亮今天）。
- 除可选的页脚署名链接外，站内绝不提及 VibeFather 或任何其他品牌；所有文案都是虚构的美式英语。
- 在所有地方尊重 prefers-reduced-motion：禁用视差、绘制、数字递增、抖动、打字机效果和滑动；保留颜色/边框的悬停效果。
- 网站必须在 1440x900 桌面端和 390x844 移动端正常工作，控制台零报错；日历和表单仅用键盘即可操作，每个交互元素都有可见的焦点环。
- 文案要具体：不要 lorem，不要“nestled retreat”之类的陈词滥调；每个价格、费用、英里数和分钟数都来自 src/content.ts。

---
— Prompt by VibeFather · https://vibefather.ai/t/vacation-rental-booking-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
