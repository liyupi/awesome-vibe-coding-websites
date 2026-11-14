> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 水疗与按摩网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的双页网站，[BRAND] 是一家独立日间水疗中心，位于 [CITY] 的 [STREET]，提供 [SPECIALTIES]。网站必须让人感觉像一家真实、宁静的本地商家：有氛围感的理疗室摄影、六项明码标价并注明时长的护理、三位理疗师简介、三个可预约套餐、一个保存在设备上的可定制礼品卡预览、首次到访指南、营业时间，以及四步预约流程——护理、理疗师、时间、确认——最后生成一张常驻的、仅存在于浏览器中的参考卡。页面：index.html（首页）和 booking.html（预约护理）。一切都在浏览器中运行；不会向任何地方发送数据。

- 受众：住在短途车程内、正在选择第一次按摩的成年人，寻找自己偏爱理疗师的常客，以及购买贴心礼物的人。许多人下班后在手机上访问；他们想要清晰的价格、对房间氛围的感受、实用的首次到访答案，以及一条无需打电话的预约路径。
- 目标：将安静的关注转化为有把握的预约。访客应在十秒内看到水疗氛围、了解到护理起价 $65，并找到预约操作。完整流程应在一分钟内完成，并且无需账户或在线支付也能理解。
- 语气：平静、温暖而精确，像一位体贴、从不催促客人的前台接待员。句子简短，分钟和美元具体，不使用神秘的养生语言，不做医疗承诺，不使用感叹号。全篇使用美式英语。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/cormorant-garamond（OFL-1.1）、@fontsource-variable/manrope（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务器代码、无外部 API。
- 设置：
  - 使用 npm create vite@latest 以 react-ts 模板搭建脚手架。在项目根目录创建两个真实的 HTML 页面：index.html（入口 src/main-home.tsx）和 booking.html（入口 src/main-booking.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist'，sourcemap false，assetsInlineLimit 0，rollupOptions { input { index: resolve(__dirname, 'index.html')，booking: resolve(__dirname, 'booking.html') } } }。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4（tailwindcss + postcss + autoprefixer），content ['./index.html', './booking.html', './src/**/*.{ts,tsx}']。将所有设计颜色以 kebab-case 键添加到 theme.extend.colors（porcelain、oat、paper、spruce、spruce-soft、ink、sage、clay、clay-deep、rule、white）。添加 fontFamily display ['Cormorant Garamond Variable', 'Georgia', 'serif'] 和 sans ['Manrope Variable', 'system-ui', 'sans-serif']；添加 maxWidth { container: '1200px' }。
  - 在 src/fonts.ts 中导入 '@fontsource-variable/cormorant-garamond' 和 '@fontsource-variable/manrope'；从两个入口文件导入 src/fonts.ts 和 src/index.css。对价格、时长、时段和预约参考使用 font-variant-numeric tabular-nums。
  - 文件布局：src/content.ts（两个页面的所有字符串、数字、疗程、套餐、理疗师、营业时间、评价、礼品选项和 FAQ 答案，带类型）；src/lib/brand.ts（brandSlug 来自 [BRAND]、brandInitials、emailDomain）；src/lib/storage.ts（在 try/catch 中安全地 get/set localStorage，键前缀为 brandSlug + ':'）；src/lib/slots.ts（未来 14 个可预约日、理疗师工作日、营业时间、服务时长和确定性的已占用时段）；src/lib/format.ts（货币、时长和日期标签）。
  - 状态：src/store/booking.ts 是一个使用 useSyncExternalStore 的小型外部存储。草稿结构 { treatmentId, therapistId, date, time, guestName, phone, notes, policyAccepted }；已确认的预约和礼品卡草稿分别持久化在 brandSlug + ':booking' 和 brandSlug + ':gift-card' 下。'Start another booking' 仅清除预约草稿和确认信息。
  - 可用性：生成适合所选疗程时长且在打烊前的 30 分钟起始时间。禁用周一、每位理疗师的非工作日和稳定的种子已占用时段。'No preference' 为每个时段选择第一位可用的理疗师。已确认的预约在重复访问时阻止其自身时段。无效的查询参数安全回退到未选择的第 1 步，绝不报错。
  - src/components/ 中的组件：Header.tsx、MobileMenu.tsx、Reveal.tsx、Eyebrow.tsx、Price.tsx、Footer.tsx、Faq.tsx；首页：Hero.tsx、TreatmentMenu.tsx、AppointmentRitual.tsx、Therapists.tsx、Packages.tsx、GiftCardStudio.tsx、Visit.tsx；预约：BookingMasthead.tsx、Stepper.tsx、BookingSummary.tsx、steps/（TreatmentStep.tsx、TherapistStep.tsx、TimeStep.tsx、ConfirmStep.tsx）、Confirmation.tsx。src/pages/Home.tsx 和 Booking.tsx 组合它们；两个页面都渲染 Header 和 Footer。
  - 在首次构建之前，使用 curl -L -o 和给定的确切文件名将 Assets 下列出的每张图片下载到 public/images/ 中。构建本身从不获取任何内容。
  - public/favicon.svg 如 Assets 所述。两个 HTML 文件：lang en，<meta name='theme-color' content='#F5F2EA'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>。标题：index.html '<title>[BRAND] — Day spa on [STREET], [CITY]</title>'，booking.html '<title>Book a treatment — [BRAND]</title>'。直接打开 booking.html 从疗程选择开始。
  - 在项目根目录按 Assets 所述编写 ASSETS.md。
  - dist/ 包含两个 HTML 文件、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张图片。保持在 12 MB 以下。

## 变量
- [BRAND] — 水疗中心名称（默认："Alder & Ash Spa"）。虚构的水疗中心名称。用于文字标识、文档标题、页脚、电子邮件域名、localStorage 键和预订参考号。切勿使用真实的水疗中心或连锁品牌。
- [CITY] — 城市（默认："Portland, Oregon"）。水疗中心所在的城市。用于首屏、到访区块和页脚。只有城市可以是真实的；街道地址必须保持虚构。
- [STREET] — 街道（默认："Juniper Lane"）。虚构的街道名称，用于地址 '42 [STREET]' 和位置文案。使用常见英文单词，不要使用已知的商业地址。
- [SPECIALTIES] — 护理专长（默认："Deep tissue, hot stone and aromatherapy"）。三个以逗号分隔的专长。更改时，请相应重写护理名称、理疗师专长、套餐内容、首屏文案和常见问题，同时保持相同的数量和布局。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/spa-and-massage-website（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 瓷白（Porcelain）`#F5F2EA` — 主页面背景、页眉和输入框填充。
- 燕麦色（Oat）`#E9E3D6` — 交替区块背景、筛选标签和图片槽。
- 纸白（Paper）`#FCFAF5` — 卡片、预订面板、手风琴和确认界面。
- 云杉绿（Spruce）`#24382F` — 页脚、套餐区块、主按钮和深色遮罩。
- 柔和云杉（Spruce Soft）`#354C41` — 主按钮悬停态和云杉绿上的浮起表面。
- 墨色（Ink）`#252A26` — 浅色背景上的标题和主要正文。
- 鼠尾草绿（Sage）`#6F7D6C` — 次要文本、说明文字、图标、可用状态指示和弱化边框。
- 陶土色（Clay）`#A9654B` — 用于价格、选中状态、眉题线条和焦点环的暖色强调。
- 深陶土（Clay Deep）`#85503B` — 强调色悬停态和浅色背景上的可访问强调文本。
- 分隔线（Rule）`#D8D1C2` — 细线、卡片边框、表单控件和步骤连接线。
- 白色（White）`#FFFDF8` — 云杉绿上的文字和照片遮罩上的文字。

### 字体排印
- 展示字体：H1、H2、H3、护理项目名称、理疗师姓名、套餐价格和字标：Cormorant Garamond（OFL），字重 400/500/600
- 文本与界面：正文、导航、按钮、标签、紧凑行中的价格、表单字段和说明文字：Manrope（OFL），字重 400/500/600/700

### 布局与动效
- 间距：8px 基准单位。容器最大宽度 1200px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px。十二列网格，列间距 24px。区块内边距桌面端 104px、平板端 80px、移动端 64px。H1 clamp(48px, 6.4vw, 88px)，Cormorant Garamond 500，行高 0.98，字距 -0.025em；H2 clamp(34px, 4vw, 54px)，字重 500，行高 1.04；H3 26px，字重 600，行高 1.15。导语 18px/1.7 Manrope 400；正文 16px/1.75 最大宽度 64ch；眉题 11px Manrope 700 大写，字距 0.2em，鼠尾草绿，配 28px 陶土色线条；说明文字 13px/1.6 鼠尾草绿。按钮高 50px，水平内边距 24px，Manrope 700 13px；主按钮云杉绿填充配白色文字，次按钮 1px 云杉绿边框配透明填充。输入框高 52px，纸白填充，1px 分隔线边框，16px 文字，陶土色焦点边框。所有交互元素在 focus-visible 时获得 2px 陶土色轮廓，偏移 3px。
- 圆角：卡片、照片、输入组和预订面板为 20px；输入框和小按钮为 12px；999px 仅用于标签、状态点和紧凑胶囊。仅首页主视觉图片使用 280px 280px 20px 20px 圆角，形成高拱形。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现和图片落定；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于手风琴、筛选和预订步骤。任何元素都不弹跳或旋转。
- 动效：显现：主要区块包裹在 Reveal 中，初始 opacity 0 和 translateY(18px)，当 15% 可见时通过 Motion whileInView 和 viewport once 在 800ms 内以 --ease-out 落定。同级元素错开 90ms。
- 动效：主视觉：照片在加载时从 1.045 缩放到 1，历时 1800ms；两行标题上升 24px 并以 140ms 错开淡入。小预约提示在 500ms 后淡入。无需滚动视差。
- 动效：护理项目行：悬停时标题右移 6px，边框变为陶土色，并在 250ms 内显现箭头。键盘焦点产生相同状态，且不隐藏价格或时长。
- 动效：理疗师卡片：悬停时肖像在 600ms 内缩放到 1.025，预订下划线从左向右绘制；卡片不倾斜。
- 动效：礼品卡：金额变化时价格在 200ms 内交叉淡入淡出，收件人姓名立即更新；保存时打开一个小确认抽屉，向上滑入 12px 并在 300ms 内淡入。
- 动效：预订：步骤变化使用 AnimatePresence mode 'wait'，在 280ms 内以 16px 水平滑动交叉淡入淡出。选择标签在 150ms 内填充。确认勾选笔画在 500ms 内绘制，参考号淡入；无打字机效果。
- 动效：FAQ：高度从 0 到 auto，透明度从 0 到 1，历时 320ms --ease-io；Plus 图标旋转 45 度。
- 动效：页眉：从一开始即为 96% 不透明度的实色瓷白，带 12px 背景模糊；滚动 24px 后，1px 分隔线底边框淡入。移动端菜单从右侧滑入，历时 280ms。
- 动效：prefers-reduced-motion: reduce — 所有显现和主视觉元素以静止状态渲染，禁用图片缩放、步骤滑动、勾选绘制和平滑滚动；保留即时状态变化、颜色悬停和焦点指示。使用 CSS 媒体查询和 Motion useReducedMotion。
- 图像：六张为本模板制作的协调写实编辑风格照片：温暖的窗光、瓷白和燕麦色调、浅橡木、天然亚麻、柔和桉树绿和克制的陶土色点缀、微妙的细颗粒。主视觉、护理静物和礼品静物不含人物、无可读文字、无标识。三张理疗师肖像为虚构成年人，不似任何真实个人，在同一柔光理疗室中以一致的中躯干以上构图拍摄，年龄和族裔多样，穿着素色鼠尾草绿或奶油色工作服。这些是专业员工占位图，绝非名人肖像。使用 object-fit cover，20px 圆角（拱形主视觉除外），无重阴影。图标仅使用 lucide-react，描边宽度 1.5。favicon 和所有装饰弧线、线条、勾选标记和礼品卡图形均以代码绘制。

## 页面与区块
### 首页（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按 [BRAND] = Alder & Ash Spa、[CITY] = Portland, Oregon、[STREET] = Juniper Lane、[SPECIALTIES] = Deep tissue, hot stone and aromatherapy 编写。将每个字符串、数字和列表放入 src/content.ts，并由它渲染两个页面。当变量变化时，重写所有护理、理疗师、套餐、礼品卡和 FAQ 文案以适配新的水疗中心，同时保持相同的结构和数量：6 个单项护理、3 个套餐、3 位理疗师、3 个礼品卡金额和 6 个 FAQ。所有人物和商家信息均为虚构。地址：42 [STREET], [CITY]。电话：(503) 555-0148。邮箱：hello@ + emailDomain。四间护理室，三位理疗师。营业时间：周二至周五 9:00–19:00，周六 9:00–18:00，周日 10:00–16:00，周一休息。提前 10 分钟到达；标准按摩预约不要求穿浴袍和拖鞋。预约和礼品卡保存均为本地浏览器演示，绝非真实预订或购买。
   布局：不适用
   动效：不适用
2. **页眉（所有页面）** — 左侧：纯文字字标 '[BRAND]'，使用 Cormorant Garamond 600 24px，第二行 'DAY SPA · [CITY]' 使用 Manrope 700 9px 大写、0.18em 字距，链接至 ./index.html。中间导航：'Treatments' → ./index.html#treatments，'Therapists' → ./index.html#therapists，'Packages' → ./index.html#packages，'Gift cards' → ./index.html#gift-cards，'First visit' → ./index.html#first-visit。右侧：主按钮 'Book a treatment' → ./booking.html。低于 900px 时显示字标、紧凑的 Book 按钮和 Menu 图标；全屏 Oat 菜单以 30px 显示尺寸列出链接，并带 X 关闭。
   布局：固定顶部，高 80px，与容器对齐。页眉在移动端保持单行，任何导航标签都不被裁切。正文内容从页眉下方开始；锚点目标使用 104px 滚动边距。
3. **首屏** — 眉题：'[STREET] · [CITY]'。H1 分两行：'Return to your' / '*own rhythm.*' 导语：'Thoughtful massage, warm stones and quiet rooms at [BRAND]. Come for thirty focused minutes or stay for a two-hour ritual; every appointment begins with a conversation about what feels right today.' 主按钮 'Book a treatment' → ./booking.html；次按钮 'Explore treatments' → ./index.html#treatments。下方带 Lucide Clock 的小字行：'Appointments Tue–Sun · From $65 · Pay at the spa'。右侧：hero-spa.webp，alt 为 'Sunlit spa treatment room with linen, pale oak and eucalyptus'。图片左下角在 Paper 上叠加注释：小 Sage 圆点、'A quieter kind of appointment' 和 'Four private rooms · Three therapists'。文本列下方为三项账目：'60–120 min' / 'Signature rituals'；'From $65' / 'Focused treatments'；'$75–$200' / 'Gift cards'。
   布局：Porcelain 背景，容器网格，文本跨 5 列，图片 6 列偏移 1，最小高度 calc(100svh - 80px)，顶部内边距 136px、底部 64px。文本垂直居中，H1 最大宽度 610px。图片高度 min(68vh, 680px)，最小高度 520px，顶部拱形，object-position 50% 52%。注释重叠 32px。低于 820px 时使用 display: contents 将眉题、H1 和导语排在最前，照片第二，CTA 和账目在其后，使视觉锚点进入首屏；首屏顶部内边距 120px，H1 50px，图片 52vh 且顶部圆角 180px，注释定位在图片下边缘内侧，账目为三个等宽列并带小标签。
4. **护理菜单** — 区块 id='treatments'。眉题 'The treatment menu'，H2 'Time, pressure and price — clear before you book.' 左侧介绍补充 'Every session includes a short consultation and time to settle. The listed treatment time is hands-on time.' 右侧六行列表：1) 'Still Point Swedish Massage' — 'Long, unhurried strokes with light-to-medium pressure' — 60 min — $110。2) 'Deep Tissue Reset' — 'Focused, steady pressure for areas that feel overworked' — 75 min — $145。3) 'Warm Stone Ritual' — 'Heated basalt stones and a full-body relaxation massage' — 90 min — $175。4) 'Aromatherapy Massage' — 'Your choice of three house oil blends, mixed unscented on request' — 60 min — $120。5) 'Head, Neck & Shoulder' — 'A clothes-on focused session for a short midday pause' — 30 min — $65。6) 'Foot & Lower Leg Ritual' — 'Warm compress, slow foot massage and cooling botanical balm' — 45 min — $85。每行有 'Book' 带 ArrowRight，链接至 ./booking.html?treatment=<id>。价格不是医疗声明或效果承诺。
   布局：Oat 背景。左侧介绍跨 4 列，桌面端在 top 120px 处粘性固定；右侧列表跨 7 列偏移 1。行为 Paper 背景，1px Rule 底边框，24px 垂直内边距；名称和描述在左，时长胶囊和 Cormorant 600 26px 价格在右，箭头按钮最后。低于 850px 时移除粘性定位并堆叠；移动端每行变为两行网格，价格和 Book 始终可见。
5. **预约仪式** — 眉题 'Your first hour'，H2 'Nothing to know. Nothing to rush.' 分栏特色，左侧 treatment-still.webp，alt 为 'Folded spa linens, a ceramic oil bowl and eucalyptus on pale oak'。右侧三个编号步骤：'01 · Talk' — 'We ask about pressure, areas to avoid and whether you would like conversation or quiet. You can change your mind at any point.' '02 · Settle' — 'Arrive ten minutes early for tea and a slow start. Your therapist leaves the room while you get comfortable and returns only after you are ready.' '03 · Rest' — 'Afterward, take a few minutes with water or tea in the quiet corner. There is no expectation to buy products or book again.' 小字说明：'Comfort directs the session; there is no fixed script.'
   布局：Porcelain 背景，图片跨 6 列，4:3 裁切，内容 5 列偏移 1。步骤之间以 1px Rule 分隔，24px 内边距。低于 800px 时图片在前，步骤在后。
6. **理疗师** — 区块 id='therapists'。眉题 'Choose your therapist'，H2 'Three approaches, one unhurried standard.' 三张肖像卡：1) therapist-mira.webp — Mira Chen — 'Swedish massage & aromatherapy' — 'Mira keeps sessions quiet and fluid, checking pressure once and then letting you settle. Her appointments suit first visits and anyone who prefers lighter, rhythmic work.' — 'Tue, Wed, Fri & Sat'。2) therapist-jules.webp — Julian Brooks — 'Deep tissue & warm stone' — 'Julian works slowly and specifically, with clear communication throughout. Choose him for firmer pressure and the longer Warm Stone Ritual.' — 'Wed, Thu, Fri & Sun'。3) therapist-ana.webp — Ana Souza — 'Focused massage & foot rituals' — 'Ana blends focused neck, shoulder and foot work with an easy conversational style. She is also the person to ask for a short lunchtime appointment.' — 'Tue, Thu, Sat & Sun'。所有肖像均为 AI 生成的虚构人物，与真实个人无关。每张卡片按钮 'Book with [first name]' → ./booking.html?therapist=<id>。
   布局：Oat 背景。三个等宽列，24px 间距。肖像宽高比 3:4，姓名 Cormorant 600 30px，专长 Manrope 700 11px 大写 Clay Deep，简介 15px/1.7，工作日说明，文本链接。低于 900px 时每位理疗师使用一张水平卡片，左侧 180px 肖像；低于 560px 时恢复为堆叠肖像卡。
7. **套餐** — 区块 id='packages'。眉题 White 65% 'A little more time'，H2 White 'Rituals for when one hour is not quite enough.' 三张 Paper 卡片：1) 'First Visit Unwind' — 90 min — $140 — 'A 60-minute Swedish or aromatherapy massage followed by a 30-minute foot ritual, with ten minutes for tea.' — 'For new guests'。2) 'Quiet Afternoon' — 120 min — $195 — 'A 75-minute massage of your choice, a 45-minute foot and lower-leg ritual, and unhurried time between.' — 'Most spacious'。3) 'Warm Stone Plus' — 120 min — $215 — 'The 90-minute Warm Stone Ritual with an additional 30-minute head, neck and shoulder session.' — 'Deepest pause'。每个按钮 'Choose this ritual' → ./booking.html?treatment=<package-id>。页脚注释：'Packages are for one guest and one continuous visit. No expiration countdowns, no membership pitch.'
   布局：Spruce 全宽区块。三张等宽 Paper 卡片，20px 圆角，32px 内边距，页脚对齐。中间卡片有 2px Clay 顶部边框和小 Clay 标签；无垂直偏移。价格 Cormorant 600 46px Ink。低于 900px 时堆叠卡片并移除任何固定高度。
8. **礼品卡工作室（Gift-card studio）** — 区块 id='gift-cards'。左侧：gift-still.webp，alt 'Blank cream gift card, cotton ribbon and dried botanicals on a linen surface'。右侧：眉题 'A gift of time'，H2 'Choose an amount. Add a name. Keep it simple.' 正文：'Gift cards can be used toward any treatment or package. This preview is saved only on this device; bring the reference to reception to purchase and collect the printed card.' 金额选项 $75、$125 和 $200；收件人文本输入框标签为 'Recipient name'，最多 24 个字符，占位符 'Someone dear'；可选短消息输入框最多 60 个字符。实时代码绘制的 Paper 礼品卡预览显示 '[BRAND]'、'A little time for [recipient]'、所选金额和 'Toward any treatment'。按钮 'Save gift-card preview' 将金额、收件人、消息和基于 brandInitials 的参考号存入 localStorage，然后显示 'Saved on this device · Reference [reference]' 以及按钮 'Edit preview' 和 'Clear'。绝不暗示已付款或卡片已送达。
   布局：Porcelain 背景。图片跨 5 列，4:3 裁剪；交互区域跨 6 列，偏移 1。选项芯片排成一行，表单字段在桌面端为两列，预览为宽 16:9 的 Spruce 面板，White 文字和细 Clay 内嵌边框。低于 800px 时堆叠图片、控件和预览；输入框变为一列。
9. **首次到访 FAQ（First-visit FAQ）** — 区块 id='first-visit'。眉题 'Before your first visit' 和 H2 'The things guests usually ask.' 六个手风琴项：1) 'What should I wear?' — 'Whatever is comfortable to arrive in. For a standard massage, your therapist leaves the room while you undress to your comfort level and get under the sheet. Focused head, neck and shoulder sessions can remain fully clothed.' 2) 'When should I arrive?' — 'Ten minutes early is enough for tea and a short consultation. Arriving exactly on time is fine too; we keep the welcome unhurried without shortening your treatment.' 3) 'Can I ask for more or less pressure?' — 'Yes, at the start or at any point during the session. You never need to wait for your therapist to check in, and quiet appointments are always welcome.' 4) 'What if I am pregnant or managing a health condition?' — 'Tell us when booking so we can say whether the selected service is appropriate. For pregnancy, injury or a medical condition, ask a qualified healthcare professional what is suitable for you; our massages are relaxation services, not medical treatment.' 5) 'Is the spa accessible?' — 'The entrance and one treatment room are step-free, and the restroom has grab rails. Call before booking if you would like transfer details or extra time between rooms.' 6) 'What is the cancellation policy?' — 'Change or cancel without charge up to 24 hours before your appointment. Inside 24 hours, the spa may ask for 50% of the treatment price; genuine emergencies are handled with discretion.'
   布局：Oat 背景。两栏区块标题和手风琴列表，4 / 7 列，偏移 1。手风琴行 Paper 配 1px Rule，问题 Cormorant 600 23px，答案 Manrope 16px/1.75。低于 800px 时堆叠。
10. **到访与结尾 CTA（Visit and closing CTA）** — 左侧卡片：眉题 'Visit'，H2 'A quiet room near the everyday.' 地址 '42 [STREET], [CITY]'，电话 '(503) 555-0148'，邮箱 hello@ + emailDomain。营业时间行：周二至周五 9:00–19:00，周六 9:00–18:00，周日 10:00–16:00，周一 Closed。出行提示：'Bike racks sit beside the entrance; two-hour street parking is available on [STREET]. No map embed.' 右侧 Spruce CTA 面板：Cormorant 500 44px White 'Your hour can start here.' 主按钮 Paper 配 Spruce 文字 'Book a treatment' → ./booking.html，次级链接 'Browse the menu' → ./index.html#treatments。说明文字 White 65%：'Four steps · No account · Pay at the spa'。
    布局：Porcelain 背景，两张等宽卡片，32px 内边距和 20px 圆角。营业时间使用等宽数字。CTA 垂直居中，留白充裕。低于 760px 时堆叠，按钮变为全宽。
11. **页脚（所有页面）** — Spruce 背景。四列：1) '[BRAND]' 和 'Day spa · [STREET], [CITY]'。2) 'Visit'：地址、电话和邮箱。3) 'Hours'：精简营业时间表。4) 'Explore'：Treatments → ./index.html#treatments，Packages → ./index.html#packages，Gift cards → ./index.html#gift-cards，Book → ./booking.html。底部横线和一行 '© [BRAND]. Rest is allowed.' 所有文字 White 78%，链接 White 带下划线动画。
    布局：垂直内边距 72px，四列，底部横线在 1px White/15% 横线下方 32px。低于 760px 时使用两列，窄屏手机上再变为一列。

### 预约护理（`booking.html`）
1. **预约页头（Booking masthead）** — 从一开始就是实心页头。眉题 'Book a treatment'，H1 'Four steps to a quieter hour.' 引导语：'Choose a treatment, a therapist and a time, then confirm your details. Your reference stays in this browser; nothing is charged or sent, and payment happens at the spa.' 小链接 'Questions about your first visit?' → ./index.html#first-visit。
   布局：Porcelain 背景，容器对齐，顶部内边距 136px，底部 48px。H1 最大宽度 760px。1px Rule 底边框将页头与流程分隔。
2. **四步预约流程（Four-step booking flow）** — 步骤标签严格为 'Treatment'、'Therapist'、'Time'、'Confirm'。第 1 步 Treatment：来自 src/content.ts 的六项单项护理，随后是三个套餐，每张卡片显示名称、简短描述、时长和价格；可选筛选芯片 'All'、'Massage'、'Focused'、'Packages'。选中卡片后启用 Continue。第 2 步 Therapist：'No preference' 加上 Mira、Julian 和 Ana，附小头像、专长和工作日。仅当治疗师在未来 14 天内没有兼容时段时才禁用，并说明原因。第 3 步 Time：未来 14 天的水平条带，省略休息日，随后是根据所选时长、治疗师排班和营业时间生成的 30 分钟开始时间芯片。Morning、Afternoon 和 Evening 分组让时段更易浏览。如果某天已满，显示 'No times left' 并建议下一个可用日期；绝不留空白面板。第 4 步 Confirm：必填客人姓名、可选电话和可选备注 'Pressure, areas to avoid or anything we should know'，加上必选复选框 'I understand this demo stores the booking only in this browser.' 摘要始终显示护理、时长、治疗师或分配的治疗师、日期、时间和总计。最终按钮 'Confirm booking' 在所有必填字段和之前每一步都有效之前保持禁用。返回按钮绝不擦除之前的选择。查询参数 ?treatment=<id> 和 ?therapist=<id> 预选有效值，且仅在前提条件满足时才前进。
   布局：Oat 背景。主步骤面板跨 7 列，Paper 配 32px 内边距和 20px 圆角；摘要跨 4 列，偏移 1，并在顶部 104px 处吸附。步骤条有四个编号圆圈，用 Rule 连接线，已完成 Sage，当前 Clay，标签在下方。低于 900px 时使用一列，摘要位于当前步骤之后，不覆盖内容；低于 560px 时步骤条保留编号，仅显示活动标签。护理卡片在宽屏上为两列，手机上为一列。时间芯片至少 44px 高。
3. **持久确认（Persistent confirmation）** — 确认后，用居中的 Paper 卡片替换流程。Spruce 页头显示 '[BRAND]' 和参考号 brandInitials + '-' + 四位确定性数字。正文：代码绘制的 Sage 对勾圆圈，Cormorant 600 34px 'Your quiet hour is saved.'，客人名字，以及行 Treatment · Therapist · Day · Time · Duration · Price。备注：'Saved only in this browser. This is a demo reference, not a transmitted reservation. In a real deployment, connect this step to the spa’s booking system.' 虚线面板 'Show this reference at reception'，参考号以大号等宽字体重复显示。按钮 'Start another booking'（清除当前预约）和 'Back to the spa' → ./index.html。重新加载 booking.html 时显示此确认，直到被清除；一个 Cancel local booking 文字按钮会移除它并返回第 1 步，同时显示确认消息。
   布局：Oat 背景，卡片最大宽度 600px，20px 圆角，1px Rule 边框，溢出隐藏。详情行使用两列，桌面端值右对齐，移动端堆叠。按钮并排，低于 480px 时堆叠。
4. **预约备注（Booking notes）** — 流程下方，三个紧凑的安心提示项，配 Lucide 图标：Clock 'Arrive 10 minutes early'；MessageCircle 'Pressure and conversation are your choice'；CreditCard 'No online payment — pay at the spa'。文字链接 'Read first-visit answers and cancellation policy' → ./index.html#first-visit。
   布局：容器网格，三个等宽项，用 Rule 边框分隔，垂直内边距 48px。低于 700px 时堆叠，间距 20px。

## 资源

- 图片：为本设计生成了六张模板照片。每一张都需标注为 'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template'。使用以下精确映射，通过 curl -L -o 将每张图片下载到 public/images/ 中：https://media.vibefather.ai/assets/3da169ef-2b89-466f-9d66-9e6fad9a63b4/hero-spa.webp → public/images/hero-spa.webp（首页主视觉；object-position 50% 52%；alt 'Sunlit spa treatment room with linen, pale oak and eucalyptus'）；https://media.vibefather.ai/assets/3da169ef-2b89-466f-9d66-9e6fad9a63b4/treatment-still.webp → public/images/treatment-still.webp（预约仪式；alt 'Folded spa linens, a ceramic oil bowl and eucalyptus on pale oak'）；https://media.vibefather.ai/assets/3da169ef-2b89-466f-9d66-9e6fad9a63b4/therapist-mira.webp → public/images/therapist-mira.webp（Mira 个人资料和预约缩略图；alt 'Mira Chen, a fictional massage therapist, in a sunlit treatment room'）；https://media.vibefather.ai/assets/3da169ef-2b89-466f-9d66-9e6fad9a63b4/therapist-jules.webp → public/images/therapist-jules.webp（Julian 个人资料和预约缩略图；alt 'Julian Brooks, a fictional massage therapist, in a sunlit treatment room'）；https://media.vibefather.ai/assets/3da169ef-2b89-466f-9d66-9e6fad9a63b4/therapist-ana.webp → public/images/therapist-ana.webp（Ana 个人资料和预约缩略图；alt 'Ana Souza, a fictional massage therapist, in a sunlit treatment room'）；https://media.vibefather.ai/assets/3da169ef-2b89-466f-9d66-9e6fad9a63b4/gift-still.webp → public/images/gift-still.webp（礼品卡工作室；alt 'Blank cream gift card, cotton ribbon and dried botanicals on a linen surface'）。
- 图片：在项目根目录编写 ASSETS.md，包含路径、源 URL、作者和许可证的表格。每张照片占一行，作者为 'VibeFather'，许可证为 'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template'。添加 @fontsource-variable/cormorant-garamond 和 @fontsource-variable/manrope（OFL-1.1）以及 lucide-react（ISC）。绝不使用 Unsplash、Pexels、Pixabay 或热链接图像作为替代。
- 图标：仅使用 lucide-react：CalendarDays、Clock、ArrowRight、ArrowLeft、Menu、X、Plus、Check、MapPin、Phone、Mail、Gift、MessageCircle、CreditCard、Leaf、UserRound。描边宽度 1.5，16–24px，颜色继承。public/favicon.svg 为手写：viewBox 0 0 32 32，一个 32x32 的 Spruce（云杉绿）圆角方块，带有两条简单的 White（白色）叶片弧线和一条 Clay（陶土色）圆点。没有单独的 logo 组合；品牌以文字形式呈现。
- 字体：安装 @fontsource-variable/cormorant-garamond 和 @fontsource-variable/manrope，并在 src/fonts.ts 中按 Setup 中列出的方式导入它们。Vite 将 woff2 文件打包到 dist/ 中；不使用字体 CDN。
- 图片：在代码中绘制：favicon、礼品卡预览、护理和筛选药丸、步骤条、确认勾选、装饰弧线和分隔线。不使用其他位图插图、地图瓦片或外部图形。

## 不要做的事
- 不要后端、服务器代码、API 路由、数据库、身份验证、分析或第三方 API 调用。预约和礼品卡数据保留在 localStorage 中；不会实际发送任何付款、电子邮件、短信或预订。
- 每个内部链接都指向 HTML 文件或哈希目标，例如 ./index.html#treatments 和 ./booking.html?treatment=warm-stone，绝不能是裸目录。booking.html 在直接打开时能正常工作，无效的查询值会安全回退。
- 所有资源都自托管：图片下载到 public/images/，字体通过 Fontsource 引入，图标通过 lucide-react 引入。不要 CDN 脚本或链接、Google Fonts、图库照片热链、地图嵌入或占位图服务。
- 生产输出必须是来自 npm run build 的 dist/ 中的压缩静态文件，不含 source map，也不将 src/ 复制到 dist/。保持 dist/ 在 12 MB 以下，并使用 Vite base './'。
- 只使用虚构的水疗品牌身份和原创文案。不要真实水疗品牌标志、口号、护理菜单、价格、品牌产品或可识别的地标。所有可见文案和 alt 文本均为美式英语。
- 三位治疗师的肖像必须是虚构人物，不得与任何真实个人相似。绝不能用名人、客户或可识别的真人照片替代。其他地方也不得出现真实人物肖像。
- 不要医疗、诊断或治疗效果的声明。按摩作为放松服务呈现；怀孕、受伤和健康状况应转介给合格的医疗专业人员。
- 不要暗示浏览器保存的预约或礼品卡是已发送的预订或已付款订单。确认页和礼品预览必须明确说明它们是本地演示。
- 除可选的 [CREDIT] 页脚链接外，绝不在网站内提及 VibeFather。不要为 VibeFather 添加定价、会员或授权文案。
- 在所有地方尊重 prefers-reduced-motion：移除显现偏移、图片缩放、步骤滑动和勾选绘制，同时保留可用的状态变化和焦点样式。
- 网站必须在 1440x900 和 390x844 下正常工作，且控制台零错误。每个步骤都可用键盘操作，移动菜单和手风琴正确管理焦点，所有点击目标至少 44px，粘性 UI 绝不遮挡字段或确认内容。
- 将所有文案、服务、时间表、价格和示例数据保留在 src/content.ts 中。不要 lorem ipsum、填充式推荐语、内容文件之外的硬编码内容，或缺乏实用细节的健康套话。

---
— Prompt by VibeFather · https://vibefather.ai/t/spa-and-massage-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
