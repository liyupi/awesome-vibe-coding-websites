> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 清洁服务预约页面

完全按照以下描述构建此网站。将 [VARIABLES] 替换为您自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的单页预订页面，[BRAND] 是一支服务于 [CITY] 的家庭清洁团队，基础上门费为 $[BASE]，外加按房间计算的费用。页面必须在一屏滚动内完成报价和预订：卧室和浴室的数量步进器、带折扣的频率选项胶囊按钮、附加服务开关、标准清洁清单、带时间段选择的 14 天日期选择器，以及一个收集姓名和地址并在客户端确认的预订摘要。单页：index.html，包含若干区块（#calculator、#checklist、#book）。一切都在浏览器中运行；不会向任何地方提交数据。

- 受众：28–55 岁的忙碌家庭和租客，他们在手机上比较两家清洁服务。他们希望在二十秒内得到一个可信的价格、用大白话说明包含哪些服务，以及无需打电话就能选好日期。
- 目标：促成预订。访客在十秒内看到价格承诺和计算器；在一分钟内看到自己的总价和一个喜欢的日期。
- 语气：清新、直白、带点活泼——干净的窗户，清晰的话语。具体列明包含项目，不写“深度清洁杰作”之类的空话，关于踢脚线可以开一个玩笑。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（MIT）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/poppins（OFL-1.1）、@fontsource-variable/plus-jakarta-sans（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 react-ts 模板通过 npm create vite@latest 脚手架创建。项目根目录只有一个 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将 Design 下的每种颜色以 kebab-case 键添加到 theme.extend.colors（white-page、mist、card、sky-ink、sky-deep、sky-mist、slate、citrus、citrus-deep、good、rule），并设置 fontFamily display ['Poppins', 'system-ui', 'sans-serif']、sans ['Plus Jakarta Sans Variable', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 16px，并添加 maxWidth { container: '1140px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/poppins/500.css'、'@fontsource/poppins/700.css' 和 '@fontsource-variable/plus-jakarta-sans'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（每个字符串、费率、附加项、清单项、时间窗口、评价和图片路径，均带类型），src/lib/brand.ts（brandSlug = [BRAND] 转为小写，并将每一段非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 brandSlug + '.com'，phoneDigits 用于 tel:），src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键前缀为 brandSlug + ':'），src/lib/quote.ts（纯数学计算：quote({bedrooms, bathrooms, frequency, addons[]}) — 基础价 $[BASE] + 每间卧室 $28 + 每间浴室 $19，频率乘数一次 1.0 / 双周 0.85 / 每周 0.75，附加项固定价格；返回行项目和总计）。
  - 状态：src/store/booking.ts 是一个小型外部 store（useSyncExternalStore），持有整个草稿 { bedrooms, bathrooms, frequency, addons[], date, window, name, address, note } 和 booked 标志，持久化到 localStorage 键 brandSlug + ':booking'。摘要和确认从它读取。
  - 组件位于 src/components/：Header.tsx、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、Footer.tsx；Hero.tsx（绘制 SparkleBadge.tsx）、Calculator.tsx（Stepper.tsx、FrequencyPills.tsx、AddonToggle.tsx、QuoteLine.tsx）、Checklist.tsx、DatePicker.tsx（DayChips.tsx、WindowChips.tsx）、SummaryPanel.tsx（BookingForm.tsx、Confirmed.tsx）、TrustStrip.tsx、Reviews.tsx。src/pages/Home.tsx 组合它们。
  - 在首次构建之前，使用 curl -L -o 和给定的确切文件名，将 Assets 下列出的每张图片下载到 public/images/。构建本身从不获取任何内容。
  - public/favicon.svg 如 Assets 下所述。index.html：lang en，<meta name='theme-color' content='#FBFDFF'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[BRAND] — Home cleaning in [CITY], priced in 20 seconds</title>。
  - 在项目根目录编写 ASSETS.md，如 Assets 下所述。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和四张图片。保持在 8 MB 以下。

## 变量
- [BRAND] — 公司名称（默认："Suds & Sun"）。虚构的清洁公司名称。用于字标、标题、页脚、电子邮件（hello@ + 不含连字符的 brandSlug + .com）和 localStorage 键。绝不是真实公司或特许经营品牌。
- [CITY] — 城市（默认："Denver, Colorado"）。团队工作的地点。用于主视觉区、评价中的街区以及页脚。可以使用真实城市；街道为虚构。
- [BASE] — 基础上门价格（默认："89"）。以数字表示的基础价格（美元）——报价计算中每间卧室加 $28，每间浴室加 $19。页面上的每个价格都源自 src/lib/quote.ts 中的这个数字。
- [FOCUS] — 清洁对象（默认："family homes and apartments"）。一个描述客户群体的小写短语。决定主视觉文案、清单语气和评价内容。保持具体（'family homes and apartments'、'small offices and studios'）。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/cleaning-service-booking-page（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值编写的。如果你的取值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- White Page `#FBFDFF` — 全站页面背景。
- Mist `#EFF4F8` — 交替区块背景（Checklist、Reviews）、标签（chips）、悬停填充。
- Card `#FFFFFF` — 计算器卡片、摘要面板、附加项卡片、确认区。
- Sky Ink `#1F5FA8` — 主色：标题强调色、主按钮、选中的胶囊按钮、焦点环。
- Sky Deep `#174A85` — 主色悬停、页脚背景。
- Sky Mist `#E3EFFA` — 选中标签填充、步进器凹槽、摘要总计条。
- Slate `#5A6B7A` — 次要文本、说明文字、眉题（eyebrows）、未选中标签。
- Citrus `#F2A93B` — 唯一的暖色强调：实时价格数字、附加项价格、闪光装饰、'save' 徽章、确认印章。
- Citrus Deep `#D98F1F` — Citrus 悬停、折扣胶囊文字。
- Good `#2E9E6B` — Checklist 勾选、信任条图标、确认勾选。
- Rule `#DDE6EC` — 1px 细线、卡片边框、输入框边框。

### 字体排印（Typography）
- 展示字体：H1、H2、H3、区块标签、价格数字、字标：Poppins（OFL），字重 500/700
- 文本与 UI：正文、按钮、checklist、表单字段、说明文字；所有价格使用等宽数字：Plus Jakarta Sans（OFL），字重 400/600/700

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。容器最大宽度 1140px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面端 96px、1024px 以下 72px、640px 以下 56px。字号阶梯：H1 clamp(40px, 5.8vw, 72px) Poppins 700，行高 1.06；H2 clamp(28px, 3.8vw, 44px) Poppins 700；H3 20px Poppins 500；实时价格 Poppins 700 40px Citrus 等宽数字；导语 Plus Jakarta 400 17px / 1.65；正文 15.5px / 1.7（最大宽度 64ch）；眉题 Plus Jakarta 700 12px 大写 字距 0.14em Slate；说明文字 13px Slate。按钮：高度 50px，Plus Jakarta 700 14.5px。主按钮：Sky Ink 填充，Card 文字。次按钮：1px Sky Ink 边框，Sky Ink 文字。输入框：高度 50px，1px Rule 边框，Card 填充，聚焦时 Sky Ink 边框。全局焦点环：2px Sky Ink 轮廓，偏移 3px。
- 圆角：卡片、计算器、按钮、输入框、附加项卡片和摘要使用 16px。仅胶囊按钮、步进器、徽章和闪光装饰使用 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现和价格变化；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于确认区切换。清新而迅速。
- 动效：显现：包裹在 <Reveal> 中的区块初始为 opacity 0、translateY(12px)，当 15% 可见时在 600ms 内以 --ease-out 落定（Motion whileInView，viewport once）。同级元素错开 70ms。
- 动效：价格行：每次报价变化时，总计在 400ms 内以 --ease-io 计数到新值（tabular-nums 保持宽度）；变化的行项闪烁 Sky Mist 背景 300ms 一次。
- 动效：步进器：数字在每次步进时弹跳 1.0→1.15→1.0（200ms）；+/- 按钮为 40px 圆形。
- 动效：频率胶囊：选中的胶囊填充 Sky Ink，'save 15%' / 'save 25%' 徽章以 Citrus 缩放进入（240ms）。
- 动效：附加项卡片：切换时一道 Citrus 勾选扫过卡片（240ms 宽度显现），价格行项滑入。
- 动效：日期标签：选中时填充 Sky Mist 并带 Sky Ink 圆环；不可用日期以 40% 透明度显示并带删除线；整条横向滚动并带吸附。
- 动效：Checklist：Good 勾选在滚动进入视图时绘制一次（stroke-dashoffset，错开 40ms）。
- 动效：确认区：面板以 280ms --ease-io 滑动切换；绘制的印章（Citrus 'BOOKED' 圆环）以一次柔和过冲缩放进入；闪光装饰（小型绘制的四角星）在其周围弹跳一次。
- 动效：链接：.link-draw 在悬停和 focus-visible 时于 250ms 内生长出 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 无计数（即时值），无扫过、弹跳或绘制；颜色/边框悬停变化保留。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：明亮、通透的真实摄影，四张均为本模板以统一风格制作：日光房间，白色与天蓝色配柑橘色点缀，中等清洁细节（无前后对比双联图——只有清新的房间）。绝不出现人物——房间、水槽、折叠毛巾、收纳篮。无可读文字或标志。每张照片使用 object-fit cover，object-position 见 Assets 部分，16px 圆角，无阴影；White 上的照片带 1px Rule 轮廓。说明文字为 Plus Jakarta Sans 13px Slate。代码绘制：闪光装饰、印章、步进器字形、勾选和 favicon。图标：仅 lucide-react，描边宽度 1.75。

## 页面与区块
### 预约（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[BRAND] = Suds & Sun，[CITY] = Denver, Colorado，[BASE] = 89，[FOCUS] = family homes and apartments）。将每个字符串、费率和列表放入 src/content.ts 并从其中渲染。若任何变量值不同，请重写主视觉、清单、附加服务、评价和表单文案，使其对新团队而言具体可信，同时保持相同结构和数量（4 个 steppers-baked 行实际为 2 个 steppers；4 个附加服务；8 个清单项；5 个日期窗口行；3 条评价）。所有家庭、清洁工和数字均为虚构。费率计算（src/lib/quote.ts）：基础 $[BASE] + $28/卧室 + $19/浴室；频率 once ×1.0，biweekly ×0.85，weekly ×0.75；附加服务固定价：烤箱内部 $39，室内窗户 $49，冰箱内部 $29，洗衣一桶 $19。时间窗口：8–11、11–2、2–5（每日）。信任：已投保并 bonded；每次访问同两位清洁工；所有用品包含（可应要求提供低敏产品）；48 小时内不满意免费重清洁。
   布局：不适用
   动效：不适用
2. **页眉** — 左侧：字标——一个绘制的 sparkle 字形，Citrus 色 + '[BRAND]'（Poppins 700 19px），下方为 'Cleaning for [FOCUS] · [CITY]'（10px 大写 Slate）——链接至 ./index.html。右侧：导航 'Pricing' → #calculator，'What''s included' → #checklist，'Reviews' → #reviews，以及一个小型 Sky Ink 的 'Book a clean' → #book。低于 820px：字标 + 预约按钮。
   布局：粘性顶部，高度 72px，White/92% 模糊，Rule 边框。
3. **主视觉** — 两栏。左侧：眉题 'CLEANING FOR [FOCUS] IN [CITY]'；H1 'A fair price.' / '*Then a cleaner house.*'；导语（最大宽度 500px）：'Move two sliders and the number is real — base $[BASE], rooms on top, less when we come regularly. No calls, no ''someone will contact you'', just a date you pick.'；主按钮 'Price my clean' → #calculator 和次按钮 'What''s included' → #checklist；信任行（三个小型 Good 勾选）：'Insured & bonded'；'Same cleaners every visit'；'We bring everything'。右侧：kitchen-clean.webp（4:3），角落固定一个小型 Citrus sparkle 徽章 'spotless, not sterile'。
   布局：White 背景，垂直内边距顶部 112px；左侧 6 列，右侧 5 列偏移 1。
4. **计算器** — 区块 id='calculator'。眉题 'THE 20-SECOND PRICE' 和 H2 'Your clean, your math.' 一个 Card 面板分两行：第 1 行 — Steppers：'Bedrooms'（1–6，默认 2）和 'Bathrooms'（1–4，默认 1）并排，各带 −/+ 圆形按钮，计数为 Poppins 700 28px；FrequencyPills：'Once'（无徽章），'Every 2 weeks'（save 15% 徽章），'Weekly'（save 25% 徽章）。第 2 行 — AddonToggle 磁贴（图标、名称、价格）：'Inside the oven' $39（Flame）；'Interior windows' $49（AppWindow）；'Inside the fridge' $29（Refrigerator）；'Laundry, one load' $19（Shirt）。QuoteLine 固定在面板底部：'Your visit' 行项目（基础 + 房间 + 附加服务 − 频率折扣显示为 '−15% every 2 weeks'）和实时总计 '≈ $131 per visit'（Poppins 700 40px Citrus），附说明 'before discounts when regular; sample math for this template'。
   布局：Mist 背景。面板在 Card 上最大宽度 720px，24px 内边距，16px 圆角；steppers 在 Sky Mist 凹槽中；附加服务为 2x2 磁贴（16px 圆角，切换勾选在右上角）。
5. **清单** — 区块 id='checklist'。眉题 'EVERY CLEAN INCLUDES' 和 H2 'The plain-words list.' 八个项目分两列，带 Good 勾选：'Kitchen: counters, sink, stovetop, and that thing on top of the fridge'；'Bathrooms: scrubbed, polished, and the mirror you avoid'；'Floors: vacuumed then mopped, corners included'；'Dusting: shelves, sills, and baseboards (yes, the baseboards)'；'Beds made with the linens you leave out'；'Trash out, bins relined'；'Knick-knacks lifted and replaced, not dusted around'；'A note card if we noticed anything (a bulb out, a drip, a heroic spider)'。侧图（bathroom-clean.webp，4:3），说明文字 'The mirror test: no streaks, no excuses.'
   布局：White 背景。清单 7 列，图片 4 列偏移 1。低于 900px：堆叠。
6. **日期选择器与预约** — 区块 id='book'。眉题 'PICK A DAY' 和 H2 'When should we come?' DatePicker：DayChips — 未来 14 天（星期 + 日期数字；周日禁用，40% 透明度，带 'we rest' 工具提示；示例种子数据中已满订的日期划掉），然后 WindowChips '8–11am · 11–2pm · 2–5pm'。SummaryPanel（粘性右侧，移动端在下方）：来自 store 的行项目（房间、频率及其折扣、每个附加服务）、总计，然后字段——姓名、地址、门禁/停车备注（可选）、电话；主按钮 'Book it'，附说明 'This demo saves your booking in this browser — the real page would confirm by text.' 提交时（姓名 + 地址 + 日期 + 窗口必填）：Confirmed — Citrus 'BOOKED' 印章随 sparkles 缩放进入，'See you [DAY], [WINDOW].'（Poppins 26px），摘要回显，'Bring nothing. Do nothing. It''s handled.' 和 'Change my booking' 返回预填表单。持久化在 localStorage。
   布局：Mist 背景。两栏：选择器 7 列，摘要 4 列偏移 1，粘性顶部 96px。低于 1024px：堆叠，摘要不粘性。
7. **信任条与评价** — TrustStrip（White 带，三个 Good 勾选项）：'Insured, bonded, background-checked'；'The same two cleaners, every visit'；'Supplies included — hypoallergenic on request'。区块 id='reviews'。眉题 'HOUSEHOLDS, QUOTED' 和 H2 'Three kitchens, three opinions.' 卡片：1）'"They charge what the slider said. In this economy, that''s romance."' — 'Marisol T. · Wash Park · every 2 weeks'。2）'"The same two people every time — the dog has stopped filing complaints."' — 'Dan & Priya · Highlands · weekly'。3）'"I read the checklist to my teenager as a threat. It worked on both of them."' — 'Jules R. · Park Hill · once a month'。
   布局：White 背景；三张卡片 24px 间距在 Card 上，引文 16.5px / 1.7，署名 13px Slate，街区名 Citrus Deep。
8. **页脚** — Sky Deep 背景，Card 色调文字。三栏：1）sparkle 字标 + '[BRAND]'，下方 'Cleaning for [FOCUS] · [CITY]'。2）'Reach us'：hello@ + emailDomain，(720) 555-0162 tel:，'Mon–Sat, 8–5'。3）'This page'：Pricing、What''s included、Reviews、Book a clean 锚点。底部行：'© [BRAND]. Sample prices; spotless intentions.'
   布局：垂直内边距 64px，3 列，底部行在 Card/15% 分隔线上方 32px。低于 768px：堆叠。

## 资源
- 图片：为本设计制作的模板照片（可随模板自由再分发）。用 curl -L -o 将每张图片下载到 public/images/：https://media.vibefather.ai/assets/b395798e-cc8c-452c-aaf0-d0a72f0f6179/kitchen-clean.webp → public/images/kitchen-clean.webp（主视觉区（Hero）；object-position 50% 50%；alt 'A bright clean kitchen with a spotless counter and empty sink'）；https://media.vibefather.ai/assets/b395798e-cc8c-452c-aaf0-d0a72f0f6179/bathroom-clean.webp → public/images/bathroom-clean.webp（清单侧；alt 'A gleaming bathroom sink with folded white towels'）；https://media.vibefather.ai/assets/b395798e-cc8c-452c-aaf0-d0a72f0f6179/living-fresh.webp → public/images/living-fresh.webp（评价侧或信任带；alt 'A tidy living room with plumped cushions and a vacuum-free floor'）；https://media.vibefather.ai/assets/b395798e-cc8c-452c-aaf0-d0a72f0f6179/caddy-supplies.webp → public/images/caddy-supplies.webp（预订侧；alt 'A cleaning caddy with bottles and folded cloths by a window'）。共四个文件。
- 图片：在项目根目录写入 ASSETS.md，包含一张表：路径、来源 URL、作者、许可证——每张照片一行（来源 'media.vibefather.ai, made for this template'，作者 'VibeFather'，许可证 'Distributed with the template'），另加 @fontsource/poppins 和 @fontsource-variable/plus-jakarta-sans（OFL-1.1）以及 lucide-react（ISC）的行。切勿用图库网站或包含人物、面孔、手部或可辨识品牌的图片替换照片。
- 图标：仅使用 lucide-react：Flame、AppWindow、Refrigerator、Shirt、Plus、Minus、Check、Sparkles、CalendarDays、Clock、MapPin、Phone、Mail。描边宽度 1.75，16–24px，颜色继承。闪光（四角星）、'BOOKED' 印章和 favicon 为绘制的 SVG。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的 rect，rx 9，填充 #1F5FA8，一个 Card（#FFFFFF）闪光字形（四角星）。无其他标志：公司名称始终以文字排版呈现。
- 字体：安装 @fontsource/poppins 和 @fontsource-variable/plus-jakarta-sans，并按“设置”中所列在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包进 dist/。
- 图片：在代码中绘制：闪光、BOOKED 印章、步进器字形、清单勾选标记、日期标签和 favicon。除四张照片外无其他位图；无插图；无地图瓦片。

## 禁止事项
- 无后端、无表单提交、不向任何 API 发起 fetch：报价完全是在 src/lib/quote.ts 中进行的纯客户端计算；预订和确认仅在浏览器中保存（localStorage），表单中已对此作出说明。
- 这个单页上的所有链接都是锚点（./index.html#calculator、#checklist、#book、#reviews）。
- 一切资源自托管：字体通过 Fontsource 引入，图标使用 npm 包或内联 SVG，图片下载到 public/images/。不使用 CDN 的 <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具。
- 生产构建：压缩、不生成 source map、不将 src/ 复制到 dist/、使用单条命令 npm run build、输出位于 dist/ 且小于 8 MB。
- 不使用真实的清洁公司或连锁品牌；不使用含人物、面部或手部的照片；任何画面中不得出现可读文字或标识；价格明确为示例计算。
- 任何地方都不出现日期或年份；日期选择器显示未来 14 天，且不高亮今天；网站从不显示今天的日期。
- 除页脚可选的署名链接外，网站内绝不提及 VibeFather 或任何其他品牌；所有文案均为虚构的美式英语。
- 遵循 prefers-reduced-motion：不做计数、扫过、弹出或绘制动画；保留颜色/边框的悬停变化。
- 页面必须在 1440x900 桌面端和 390x844 移动端正常工作，控制台零报错；步进器、胶囊按钮、磁贴、标签和表单仅用键盘即可操作，并有可见的焦点环；摘要在移动端保持可达（位于选择器下方，不被隐藏）。
- 文案保持具体：不使用 lorem，不使用“deep-clean serenity”这类表述；每一项费率、附加项和窗口都存放在 src/content.ts 中。

---
— Prompt by VibeFather · https://vibefather.ai/t/cleaning-service-booking-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
