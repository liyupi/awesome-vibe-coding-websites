> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 汽车修理店网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [SHOP] 打造的双页网站，[SHOP] 是位于 [CITY] 的一家独立维修店——[SPECIALTY]——联系电话 [PHONE]。网站必须快速赢得信任：列出服务项目及价格区间和时长、一份通俗易懂的保修说明、点名车型和维修项目的评价、一个噪音诊断 FAQ，以及一个能记录车辆信息和故障来龙去脉的预约表单。页面：index.html、booking.html。一切都在浏览器中运行；不会向任何地方提交数据。

- 目标受众：25–70 岁、害怕被推销加项的车主：开着老车的通勤族、给第一次买车的孩子把关的父母、录下神秘嗡嗡声的那个人。他们希望在到店前就知道价格、拿到书面保修，并感觉这家店见过更糟的。
- 目标：预约工位。访客在十秒内看到价格透明、保修和电话号码；在两分钟内从 FAQ 中认出自己的噪音并打开预约表单。
- 语气：直来直去的柜台腔：短句、精确的价格区间（'$180–320 depending on pads'）、对车开点轻玩笑，对顾客绝不开玩笑。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（MIT）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/barlow-condensed（OFL-1.1）、@fontsource/barlow（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化设置（Setup）：
  - 使用 npm create vite@latest 并选择 react-ts 模板进行脚手架搭建。项目根目录下有两个真实的 HTML 页面：index.html（入口 src/main-home.tsx）和 booking.html（入口 src/main-booking.tsx）。
  - vite.config.ts：base 设为 './'，plugins 为 [react()]，build 配置 { outDir 'dist', sourcemap false, assetsInlineLimit 0, rollupOptions { input { index: resolve(__dirname, 'index.html'), booking: resolve(__dirname, 'booking.html') } } }。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4，content 配置为 ['./index.html', './booking.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的所有颜色以 kebab-case 键名添加到 theme.extend.colors（shop-white、mist、steel、steel-deep、ink、slate、safety、safety-deep、good、rule），并设置 fontFamily：display 为 ['Barlow Condensed', 'Arial Narrow', 'sans-serif']，sans 为 ['Barlow', 'system-ui', 'sans-serif']，mono 为 ['Barlow Condensed', 'ui-monospace', 'monospace']（价格区间使用 Barlow Condensed 并启用等宽数字）。将 borderRadius 的 DEFAULT 设为 6px，并添加 maxWidth { container: '1200px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/barlow-condensed/500.css'、'@fontsource/barlow-condensed/600.css' 以及 '@fontsource/barlow/400.css'、'@fontsource/barlow/600.css'；在两个入口文件中导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（所有字符串、服务、价格区间、评价、FAQ 答案、营业时间和图片路径，均带类型），src/lib/brand.ts（shopSlug = [SHOP] 转为小写并将每一段连续的非字母数字字符替换为 '-'，phoneDigits = [PHONE] 仅保留数字用于 tel:，emailDomain = 去掉连字符的 shopSlug + '.com'），src/lib/storage.ts（安全的 localStorage 读写，包裹在 try/catch 中，键名前缀为 shopSlug + ':'）。
  - 状态管理：src/store/booking.ts 是一个小型外部 store（useSyncExternalStore），持有草稿 { name, phone, make, model, year, plate, service, day, story } 和已发送标志，持久化到 localStorage 键 shopSlug + ':booking'。确认卡片由此渲染；'Book another' 会清空。
  - 组件位于 src/components/：Header.tsx（电话号码突出显示）、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、Footer.tsx、TireRule.tsx（绘制的胎面花纹分隔线）；首页：Hero.tsx、Services.tsx（含 ServiceRow.tsx 和 RangeTag.tsx）、WarrantyStrip.tsx、Reviews.tsx、NoiseFaq.tsx；预约页：BookingForm.tsx（VehicleFields.tsx、ServiceSelect.tsx、DayChips.tsx、StoryField.tsx）、Confirmed.tsx。src/pages/Home.tsx 和 Booking.tsx 组合这些组件；两个页面都渲染 Header 和 Footer。
  - 在首次构建之前，使用 curl -L -o 将资源（Assets）下列出的每张图片下载到 public/images/ 中，并使用给定的确切文件名。构建过程本身从不获取任何内容。
  - public/favicon.svg 如资源（Assets）部分所述。两个 HTML 文件：lang 为 en，<meta name='theme-color' content='#F6F5F1'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>。标题：index.html 为 '<title>[SHOP] — Honest auto repair in [CITY]</title>'，booking.html 为 '<title>Book a bay — [SHOP]</title>'。直接打开 booking.html 显示空表单，绝不显示错误。
  - 在项目根目录编写 ASSETS.md，如资源（Assets）部分所述。
  - dist/ 包含两个 HTML 文件、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张图片。保持在 10 MB 以下。

## 变量
- [SHOP] — 店铺名称（默认：“Ferris & Son Auto”）。虚构的店铺名称。用于字标、标题、页脚、电子邮件（service@ + 不含连字符的 shopSlug + .com）以及 localStorage 键。绝不是真实店铺或连锁店。
- [CITY] — 城市（默认：“Columbus, Ohio”）。店铺所在地。用于主视觉区、评价中的街区以及页脚。可以使用真实城市；街道为虚构。
- [PHONE] — 电话（默认：“(614) 555-0189”）。店铺电话，使用 555 交换局格式。在页眉和主视觉区中以超大字号显示，并作为由数字构建的 tel: 链接。
- [SPECIALTY] — 专长描述（默认：“brakes, diagnostics and honest advice”）。一个全小写短语，说明店铺以什么闻名。驱动主视觉区文案、第一个服务组的框架以及一个 FAQ 答案。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/auto-repair-shop-website（默认：是；删除此行即可移除）

“页面与区块”下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- Shop White `#F6F5F1` — 两个页面的页面背景。
- Mist `#ECEBE4` — 交替区块背景（Services、FAQ）、悬停填充。
- Steel `#2E4A62` — 主色：标题的墨色、主按钮、选中的标签、焦点环。
- Steel Deep `#22394C` — 主色悬停、页脚背景、保修条的墨色。
- Ink `#20242A` — 正文文本、服务名称、图标颜色。
- Slate `#5B6470` — 次要文本、说明文字、眉题、范围尾部。
- Safety `#F2B705` — 唯一的强调色：价格范围、保修徽章、选中的日期、focus-visible 细节、轮胎规则花纹。
- Safety Deep `#C99A04` — Safety 的悬停和按下状态。
- Good `#2E7D4F` — 确认勾选、“open now”圆点、保修勾选。
- Rule `#D9D7CF` — 1px 细线、卡片边框、输入框边框、分隔线。

### 字体排印（Typography）
- 展示字体：H1、H2、H3、服务名称、电话号码、价格范围、字标 — Barlow Condensed，主力大写：Barlow Condensed (OFL)，字重 500/600
- 文本与 UI：正文、按钮、表单字段、FAQ 答案、说明文字：Barlow (OFL)，字重 400/600

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。容器最大宽度 1200px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面端 96px、1024px 以下 72px、640px 以下 56px。字号比例：H1 clamp(46px, 7vw, 92px) Barlow Condensed 600 大写，行高 0.98；H2 clamp(32px, 4.4vw, 54px) Barlow Condensed 600 大写；H3 22px Condensed 600；页头中的电话号码 Condensed 600 24px 等宽数字；导语 Barlow 400 18px / 1.65 Ink 90%；正文 16px / 1.7（最大宽度 64ch）；眉题 Barlow 600 12px 大写 字距 0.18em Slate；说明文字 13px Slate；价格范围 Condensed 600 20px，范围破折号为 Safety。按钮：高度 52px，Barlow 600 14px 大写 字距 0.06em。主按钮：Steel 填充，Shop White 文本。次按钮：1px Ink 边框，Ink 文本。输入框：高度 50px，1px Rule 边框，白色填充，聚焦时 Steel 边框。全局焦点环：2px Steel 轮廓，偏移 3px。
- 圆角：卡片、按钮、输入框、标签和照片为 6px。仅胶囊、徽章和 open-now 圆点使用 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于表单切换和 FAQ。车间般平稳 — 没有任何弹跳。
- 动效：显现：包裹在 <Reveal> 中的区块从 opacity 0、translateY(12px) 开始，在 15% 可见时（Motion whileInView，viewport once）以 600ms --ease-out 稳定下来。同级元素错开 70ms。
- 动效：首屏：车间照片从 1.04→1.0 缩放，历时 2400ms；标题上升 18px；电话号码最后滴入，并绘制 Safety 下划线。
- 动效：服务行：悬停填充 Mist，价格范围向右滑动 6px 并带一个 Safety 勾选；“Book”胶囊在右边缘淡入，链接到 ./booking.html?service=<slug>。
- 动效：保修条：徽章在滚动进入视图时绘制一次（stroke-dashoffset）；三个勾选错开 60ms。
- 动效：噪音 FAQ：手风琴以 300ms --ease-io 从高度 0→auto 打开；声音字形（Squeal/Knock/Hum/Grind 以 SVG 绘制的波形）每次打开时播放一次波形动画（在减少动态效果下关闭）。
- 动效：预约表单：日期标签选中时填充 Steel（150ms）；无效提交抖动 4px 并显示内联标签；发送时切换为 Confirmed（300ms --ease-io），Good 勾选绘制，Safety 的“IN THE BOOK”标签从 -6deg→-2deg 盖章进入。
- 动效：轮胎规则：花纹分隔线在区块进入视图时滑入（600ms，一次）。
- 动效：链接：.link-draw 在悬停和 focus-visible 时以 250ms 生长出 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 无缩放、绘制、错开或盖章；一切以静止状态渲染。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：车间摄影，全部六张为本模板以统一风格制作：干净独立店铺工位、温暖工作光配钢蓝色阴影、通用去标车辆（无标识、无可读车牌 — 车牌空白或遮挡）、工具、轮胎和零件。绝不出现人物（无面孔、无手）。无可读文字或标牌。每张照片使用 object-fit cover，object-position 见 Assets 下，6px 圆角，无阴影；Shop White 上的照片获得 1px Rule 轮廓。说明文字为 Barlow 13px Slate。代码绘制：轮胎花纹规则、噪音波形（四个 SVG 字形）、保修徽章、IN THE BOOK 印章、标签和 favicon。图标：仅 lucide-react，描边宽度 2。

## 页面与区块
### 首页（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[SHOP] = Ferris & Son Auto，[CITY] = Columbus, Ohio，[PHONE] = (614) 555-0189，[SPECIALTY] = brakes, diagnostics and honest advice）。将每个字符串、价格区间和列表放入 src/content.ts 并从中渲染；两个页面共用一个内容文件。若任何变量值不同，请重写主视觉区、所有服务名称/价格区间、保修条款、评价和常见问题解答，使其对新店铺具体可信，同时保持相同结构和数量（3 组共 9 项服务、3 条保修要点、3 条评价、4 条噪音解答）。所有技师、车主和数字均为虚构。营业时间：周一至周五 7:30–18:00，周六 8:00–14:00，周日休息。服务（分组 · 名称 · 价格区间 · 时长）：保养：'Oil & filter service' $65–110 '45 min'；'Brake pads & rotors' 每轴 $180–320 '90 min'；'Full inspection' $0 '40 min — free, always'。维修：'Diagnostics (check-engine)' $95 '60 min, credited toward the fix'；'Timing belt' $620–940 'full day'；'Suspension work' $240–600 'quoted before we start'。轮胎：'New tires, mounted & balanced' $95/条 +配件 '45 min each'；'Flat repair' $25–45 '30 min'；'Alignment' $89 '50 min'。
   布局：不适用
   动效：不适用
2. **页眉（所有页面）** — 左侧：字标 '[SHOP]'（Barlow Condensed 600 20px 大写）下方为 'Independent · Est. line: two generations of Ferrises'（10px 大写 Slate），链接至 ./index.html。右侧导航（Barlow 600 14px）：'Services' → ./index.html#services，'The noise FAQ' → ./index.html#noise，'Book a bay' → ./booking.html；然后是电话 '[PHONE]'，Condensed 600 24px，作为 tel: 链接，带 Safety 下划线。820px 以下：字标 + 电话 + 一个 Menu 图标，打开 Mist 全屏菜单。
   布局：顶部吸附，高度 76px，Shop White/95% 模糊，Rule 边框——电话永不隐藏。
3. **主视觉区** — 两栏。左侧：眉标 'INDEPENDENT REPAIR · [CITY]'；H1 'WE FIX CARS.' / '*AND EXPLAIN THEM.*'；导语（最大宽度 520px）：'[SPECIALTY] — printed ranges, a written warranty, and a shop where the answer to ''do I need this?'' is sometimes no.'；主按钮 'Book a bay' → ./booking.html，电话作为第二行 tel: 链接；信任行：'Free inspections, always'；'24-month warranty, in writing'；'Same-day on most repairs'。右侧：bay-clean.webp（4:3），配文 'Bay two, Tuesday, before the rush'。副导语首字母大写（'Brakes, diagnostics and honest advice.'）；H1 分两行非斜体；保修和免费检查的勾选标记为 14-16px。
   布局：Shop White 背景，顶部垂直内边距 104px；左侧 6 列，右侧 5 列偏移 1。
4. **服务** — 区块 id='services'。眉标 'SERVICES & REAL RANGES'，H2 'PRICES BEFORE YOU PARK.'。三张分组卡片（Maintenance / Repair / Tires）置于 Mist 上，九项服务为行：名称（Condensed 600 18px），价格区间用 Safety（'$180–320'，'per axle' 尾注用 Slate），时长右对齐（'90 min'）。每行悬停显示 'Book →'，链接至 ./booking.html?service=<slug>。网格下方：'Ranges are honest starting points — we call before anything leaves the estimate.' + TireRule 分隔线。每个服务行是一个网格，含固定名称列、固定右对齐价格列（tabular-nums）和时长列——价格绝不与名称重叠，也绝不每行只换一个词；价格用 Ink 20px，Safety 黄色仅保留给破折号和勾选标记。卡片顶部对齐（align-items:start），高度均匀；轮胎照片位于自己的网格单元并配说明文字；区块上方无多余空白带。
   布局：三列 24px 间距（900px 以下堆叠）；行以 1px Rule 分隔，16px 内边距；价格区间 Condensed 600 20px tabular。
5. **保修条** — Steel Deep 色带，左侧为绘制的 Safety 徽章：'24 MONTHS / 24,000 MILES' 和三个要点（Good 勾选，白色文字）：'Parts and labor, both covered — no asterisk about ''normal driving'''；'Written on every invoice, transferable if you sell the car'；'Good anywhere we are, and we are only here'。右侧说明：'The warranty is the review we write ourselves.' 三个勾选共享等宽 1fr 列，标题列较窄，脚注位于标题下方，使色带平衡。
   布局：全宽色带，垂直内边距 56px；徽章 96px，三个要点列以 1px 白色/15% 分隔线隔开。
6. **评价** — 眉标 'FROM THE COUNTER'，H2 'DRIVERS, QUOTED.'。三张卡片：'"Quoted a range on the phone, billed under the bottom of it. I asked them to check something else; they said it didn''t need checking. Who does that?"' — 'Marta G. · 2014 hatchback · brake job'；'"They showed me the worn part next to the new one and let me take a photo. My group chat voted it car of the month."' — 'Devon R. · 2018 crossover · suspension'；'"The hum was a wheel bearing. The other shop said ''probably fine.'' Ferris said ''three weeks, then expensive.'' It was three weeks."' — 'June & Art T. · 2012 sedan · wheel bearing'。
   布局：Shop White 背景；三列 24px 间距，Card 上带 Rule 边框；引文 Barlow 16px / 1.7，署名 Slate 13px，车型和工项用 Steel 600。
7. **噪音常见问题** — 区块 id='noise'。眉标 'WHAT''S THAT NOISE?'，H2 'FOUR SOUNDS, FOUR ANSWERS.'。手风琴配绘制的波形：'A squeal when braking' — 'Classic worn pads. If it just started, that''s the good week to come in — the rotors may still be fine. Two minutes on the lift, no charge to look.' 'A knock from the engine' — 'That one we don''t guess about. Could be a lifter, could be worse; knocking gets a same-day diagnostic and a phone call before any wrench moves.' 'A hum that changes with speed' — 'Usually a wheel bearing or a tire. If the hum changes when you sway the car gently at speed, lean bearing — bring it in, that''s not a drive-it-for-months sound.' 'A grind in turns or gears' — 'Grind is the sound of metal meeting metal without a plan. Stop driving it hard, book the bay, and tell us exactly when it happens — the story is half the diagnosis.' 结尾句：'Still not sure? Call [PHONE] and make the noise at us. Everyone does.'
   布局：Mist 背景；行置于 Card 上，Rule 边框；波形图标 40px 居左，问题 Condensed 600 20px，答案 Barlow 15.5px / 1.7 最大宽度 64ch，Plus 图标居右。容器最大宽度 780px。
8. **页脚** — Steel Deep 背景。三列：1）字标 + '[SHOP]' 下方 'Independent repair · [CITY] · Two Ferrises and a lift'。2）'The shop'：'2210 Kilborn Ave, [CITY]'，service@ + emailDomain，[PHONE] tel:。3）'Hours'：周一至周五 7:30–18:00，周六 8:00–14:00，周日休息；'Loaner shovels for winter, free'。底部行：'© [SHOP]. Ranges are real, so is the coffee.'
   布局：垂直内边距 64px，3 列，底部行位于白色/15% 分隔线下方 32px。768px 以下：堆叠。

### 预约工位（`booking.html`）
1. **页首** — 实心页眉。眉标 'BOOK A BAY'，H1 'TELL US ABOUT THE CAR.'，导语：'Five fields and the story in your own words. We confirm by phone before anything is ordered — usually the same afternoon.'
   布局：Shop White 背景，顶部垂直内边距 136px + 48px，底部细线。H1 最大宽度 760px。
2. **预约表单** — 一个 Card 面板：联系行（姓名、电话）；VehicleFields（品牌选择：常见通用品牌——'Compact (Civic-class)'、'Sedan'、'SUV/Crossover'、'Truck'、'Van'、'Electric'——加上型号和年份输入，以及一个车牌输入，占位符为 'Plate (or ''none yet'')'）；ServiceSelect（九项服务，通过首页行的 ?service=<slug> 预选；直接打开默认为 'Diagnostics (check-engine)'）；DayChips（接下来 7 个工作日；周六较短营业时间注明；周日禁用 'closed'）；StoryField（一个文本域，占位符为 'The noise, the leak, the light on the dash — when it happens and what it sounds like. Sound effects welcome.'）；主按钮 'Send to the shop'，配文 'Saved in this browser — the real page would ring the shop phone. Nothing is sent here.'。确认后：Good 勾选图案、Safety 'IN THE BOOK' 印章、'Thanks, [NAME].' 'We''ll call [PHONE] to confirm [DAY] for the [SERVICE].' 故事以引号回显，以及 'Book another' 清空表单。持久化在 localStorage 中。
   布局：Mist 背景；面板最大宽度 680px，28px 内边距，Rule 边框，6px 圆角；两列联系行在 560px 以下堆叠。
3. **安心条** — 表单下方：三行安静的文字配勾选——'No deposit to book'；'We call with the number before parts move'；'Ride home within ten minutes of the shop, on the house'。然后是 TireRule 分隔线和一行居中文字：'Prefer voices? [PHONE], Mon–Fri 7:30–6.'
   布局：Mist 延续；条带 72px 内边距；居中行位于下方 40px。

## 资源

- 图片：为本设计制作的模板照片（可随模板自由再分发）。用 curl -L -o 将每张图片下载到 public/images/：https://media.vibefather.ai/assets/642f4eba-5f1d-40c1-b579-c6701c5c58a4/bay-clean.webp → public/images/bay-clean.webp（首屏；object-position 50% 55%；alt 'A clean workshop bay with a generic car on a lift, warm work lights'）；https://media.vibefather.ai/assets/642f4eba-5f1d-40c1-b579-c6701c5c58a4/brakes-job.webp → public/images/brakes-job.webp（服务区侧边；alt 'New brake rotor and caliper on a workbench'）；https://media.vibefather.ai/assets/642f4eba-5f1d-40c1-b579-c6701c5c58a4/diag-screen.webp → public/images/diag-screen.webp（噪音 FAQ 侧边；alt 'A diagnostic tablet on a scanner cart, screen showing abstract gauge shapes'）；https://media.vibefather.ai/assets/642f4eba-5f1d-40c1-b579-c6701c5c58a4/tires-stack.webp → public/images/tires-stack.webp（服务区轮胎分组；alt 'A neat stack of new tires in the shop'）；https://media.vibefather.ai/assets/642f4eba-5f1d-40c1-b579-c6701c5c58a4/tools-wall.webp → public/images/tools-wall.webp（预约区侧边；alt 'A pegboard wall of organized wrenches and sockets'）；https://media.vibefather.ai/assets/642f4eba-5f1d-40c1-b579-c6701c5c58a4/coffee-counter.webp → public/images/coffee-counter.webp（评价区侧边；alt 'A small waiting counter with a coffee pot and two chairs'）。共六个文件。
- 图片：在项目根目录写入 ASSETS.md，包含一张表：路径、来源 URL、作者、许可证——每张照片一行（来源 'media.vibefather.ai, made for this template'，作者 'VibeFather'，许可证 'Distributed with the template'），另加 @fontsource/barlow-condensed 和 @fontsource/barlow（OFL-1.1）以及 lucide-react（ISC）的行。绝不用图库网站或包含人物、面孔、可辨认车牌、汽车标志或工具品牌的图片替换照片。
- 图标：仅使用 lucide-react：Wrench、Gauge、Disc（刹车）、CircleDot（轮胎）、PhoneCall、Clock、Check、Plus、X、Car、CalendarDays、ArrowRight。描边宽度 2，16–24px，颜色继承。轮胎花纹分隔线、四个噪音波形、保修徽章、IN THE BOOK 印章和 favicon 均为绘制的 SVG。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的 rect rx 6 填充 #2E4A62，一个 Shop White 扳手字形带 Safety（#F2B705）火花。无其他标志：店名始终以文字排版呈现。
- 字体：安装 @fontsource/barlow-condensed 和 @fontsource/barlow，并在 src/fonts.ts 中按 Setup 所列导入。Vite 会将 woff2 文件打包进 dist/。
- 图片：在代码中绘制：轮胎花纹分隔线、四个噪音波形字形、保修徽章、IN THE BOOK 印章、日期标签和 favicon。除六张照片外无其他位图；无插图；无地图瓦片。

## 禁止事项
- 无后端、无表单提交、不向任何 API 发起 fetch 请求：预约仅保存在浏览器中（localStorage），表单中已说明这一点；tel: 链接由 [PHONE] 构建。
- 每个内部链接都指向文件名（./index.html、./index.html#services、./index.html#noise、./booking.html、./booking.html?service=brakes）——绝不指向裸目录；直接打开 booking.html 显示空表单。
- 一切资源自托管：字体通过 Fontsource，图标以 npm 包或内联 SVG 形式引入，图片下载到 public/images/。不使用 CDN 的 <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具。
- 生产构建：压缩、无 source map、不将 src/ 复制到 dist/、单条命令 npm run build、输出位于 dist/ 且小于 10 MB。
- 不出现真实店铺、连锁店、零部件品牌或汽车品牌；照片中的车辆保持通用并去除标识、车牌留空；不出现人物、面部或手部；无可读的标牌。
- 除代际店铺标语外，任何地方都不出现日期或年份；网站从不显示当天日期。
- 除可选的页脚署名链接外，网站内绝不提及 VibeFather 或任何其他品牌；所有文案均为虚构的美式英语。
- 尊重 prefers-reduced-motion：无缩放、波形动画、印章或交错动画；一切以静止状态渲染。
- 网站必须在 1440x900 桌面端和 390x844 移动端正常工作，控制台零错误；表单、下拉选择框和标签（chips）仅用键盘即可操作，并具有可见的焦点环。
- 文案保持具体：无 lorem、无经销商套话；每个价格区间、营业时间和时长都存放在 src/content.ts 中。

---
— Prompt by VibeFather · https://vibefather.ai/t/auto-repair-shop-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
