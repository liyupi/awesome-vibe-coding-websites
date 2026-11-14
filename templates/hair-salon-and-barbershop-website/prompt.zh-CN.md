> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 美发沙龙与理发店网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的两页网站，[BRAND] 是一家独立沙龙兼理发店，位于 [CITY] 的 [STREET]，自 [FOUNDED] 年开业，拥有四名造型师和六把椅子。网站必须让人感觉像一家真实的街坊小店：房间和工具的全出血摄影（绝不出现人脸），带时长的价目表，含椅位和专长的造型师简介，成品作品画廊，评价，带实时“现在营业”指示的营业时间，以及四步预约流程——服务、造型师、日期和时间、姓名——最终生成一张带参考编号的客户端确认卡。页面：index.html（首页）、booking.html（预约一把椅子）。一切都在浏览器中运行；不会向任何地方发送数据。

- 受众：步行十分钟范围内的本地人，正在同一条街上的三家店之间做选择，外加久未光顾的老顾客，想确认自己的造型师是否还在周日上班。各种发质的成年人；来剪渐变和刮胡子的男士，来做染发和长发修剪的女士，为孩子预约儿童剪发的父母。手机优先，对电话预约心存戒备。
- 目标：让椅子坐满。访客应在十秒内知道招牌剪发多少钱、谁在那里剪发、店现在是否营业，并且一键即可到达已预约的时段。
- 语气：自信、温暖、不装腔作势，就像一位听过所有头发告解的造型师。短句，具体数字（分钟、美元、椅子），不用美业流行词，不用感叹号。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/bodoni-moda（OFL-1.1）、@fontsource/karla（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 react-ts 模板通过 npm create vite@latest 搭建脚手架。项目根目录下有两个真实的 HTML 页面：index.html（入口 src/main-home.tsx）和 booking.html（入口 src/main-booking.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist'，sourcemap false，assetsInlineLimit 0，rollupOptions { input { index: resolve(__dirname, 'index.html')，booking: resolve(__dirname, 'booking.html') } } }。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4（tailwindcss + postcss + autoprefixer），content ['./index.html', './booking.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将 Design 下的每种颜色以 kebab-case 键添加到 theme.extend.colors（cream、oat、card、forest、forest-soft、ink、muted、rule、brass、brass-deep、brass-light、sage），并设置 fontFamily display ['Bodoni Moda Variable', 'Georgia', 'serif']，sans ['Karla', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 10px，并添加 maxWidth { container: '1200px' }。
  - 在 src/fonts.ts 中导入 '@fontsource-variable/bodoni-moda' 以及 '@fontsource/karla/400.css'、'@fontsource/karla/500.css'、'@fontsource/karla/700.css'；从两个入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（两个页面的所有字符串、数字、服务、造型师、营业时间、评价、画廊项目和 FAQ 答案，带类型），src/lib/brand.ts（brandSlug = [BRAND] 转为小写并将每一段连续的非字母数字字符替换为 '-'，brandInitials = [BRAND] 每个单词的首字母大写，emailDomain = 去掉连字符的 brandSlug + '.com'），src/lib/storage.ts（用 try/catch 包裹的安全 localStorage get/set，键前缀为 brandSlug + ':'），src/lib/useOpenNow.ts（根据营业时间表和客户端时钟判断当前是否营业），src/lib/slots.ts（根据营业时间表和造型师的工作日构建未来 14 个可预约日期，以及服务时长在营业时间内的 30 分钟时间段）。
  - 状态：src/store/booking.ts 是一个小型外部 store（useSyncExternalStore），保存草稿 { serviceId, stylistId, date, time, name, phone } 和已确认的预约，持久化到 localStorage 键 brandSlug + ':booking'。确认卡片在刷新后仍然保留；'Make another booking' 会清除它。
  - src/components/ 中的组件：Header.tsx、MobileMenu.tsx、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、Badge.tsx（时长和价格胶囊标签）、Footer.tsx、CtaBand.tsx；首页：Hero.tsx、Services.tsx（ServiceGroup.tsx、ServiceRow.tsx）、Stylists.tsx（StylistCard.tsx）、Gallery.tsx（Lightbox.tsx）、Reviews.tsx、Marquee.tsx、HoursBlock.tsx（含 OpenNowPill.tsx）；预约：BookingMasthead.tsx、Stepper.tsx、steps/（ServiceStep.tsx、StylistStep.tsx、TimeStep.tsx、DetailsStep.tsx）、Confirmation.tsx、Policies.tsx。src/pages/Home.tsx 和 Booking.tsx 组合它们；两个页面都渲染 Header 和 Footer。
  - 在首次构建之前，使用 curl -L -o 和给定的确切文件名，将 Assets 下列出的每张图片下载到 public/images/ 中。构建本身从不获取任何内容。
  - public/favicon.svg 如 Assets 所述。两个 HTML 文件：lang en，<meta name='theme-color' content='#F7F2E7'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>。标题：index.html '<title>[BRAND] — Salon and barbershop on [STREET], [CITY]</title>'，booking.html '<title>Book a chair — [BRAND]</title>'。booking.html 在直接打开时必须渲染可用的默认状态（第 1 步激活）。
  - 如 Assets 所述，在项目根目录写入 ASSETS.md。
  - dist/ 包含两个 HTML 文件、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张图片。保持在 10 MB 以下。

## 变量
- [BRAND] — 沙龙名称（默认：“The Juniper Chair”）。虚构的沙龙名称。用于字标、标题、页脚、电子邮件（hello@ + 不含连字符的 brandSlug + .com）、localStorage 键和预约参考号（首字母缩写，例如 TJC-0247）。绝不是真实的沙龙或连锁店。
- [CITY] — 城市（默认：“Chicago, Illinois”）。店铺所在地。用于主视觉眉题、到店路线文案和页脚。街道保持虚构感；只有城市可以是真实的。
- [STREET] — 街道（默认：“Rowan Street”）。店铺所在的虚构街道（'118 Rowan Street'）。决定地址、主视觉眉题和页脚。使用常见英文单词，而非真实地址。
- [FOUNDED] — 开业年份（默认：“2019”）。四位数字年份。决定主视觉眉题、字标行 'Est. [FOUNDED]'、故事文案和第一条评价的“regular since”年份。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/hair-salon-and-barbershop-website（默认：是；删除此行即可移除）

Pages & Sections 下的文案是为默认值撰写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 奶油色（Cream）`#F7F2E7` — 两个页面的页面背景、输入框填充色。
- 燕麦色（Oat）`#EFE7D5` — 交替区块背景（Services、Gallery）、行和标签的悬停填充色、图片容器。
- 卡片色（Card）`#FFFEF9` — 卡片表面（造型师卡片、评价卡片、确认页）、浅色模态框背景。
- 森林色（Forest）`#24382B` — Hero 遮罩底色、Marquee 横幅、页脚、确认页头部、照片遮罩（以 rgba(36,56,43,x) 形式）。
- 柔和森林色（Forest Soft）`#2F4A39` — Forest 上的悬停表面、时段标签选中填充色、深色区块边框。
- 墨色（Ink）`#23201A` — 浅色背景上的标题和正文、主要描边按钮、图标颜色。
- 柔和色（Muted）`#7C7466` — 次要文本、说明文字、眉题、禁用的日期和时段（45% 不透明度）。
- 分隔线色（Rule）`#DDD2BC` — 1px 细线、卡片边框、输入框边框、分隔线。
- 黄铜色（Brass）`#A87B2F` — 唯一强调色：主要按钮、价格、时长胶囊、选中的步骤圆点、焦点环、Forest 上的 marquee 文字。
- 深黄铜色（Brass Deep）`#8C6624` — 主要按钮的悬停和按下状态。
- 浅黄铜色（Brass Light）`#D9B36A` — 在 Forest 背景上替代黄铜色用于文字和线条（价格、活动边框）。
- 鼠尾草色（Sage）`#7C8B6F` — 安静的第二色：营业中圆点和文字、'walk-ins welcome' 标签、预约成功勾选标记。

### 字体排印
- 展示字体：H1、H2、H3、服务名称、造型师名称、大号价格、字标、预约编号：Bodoni Moda（OFL），字重 500/600
- 文本和 UI：正文、眉题、按钮、导航、表单字段、评价署名、数字（价格、时长和营业时间使用 font-variant-numeric tabular-nums）：Karla（OFL），字重 400/500/700

### 布局与动效
- 间距：8px 基准单位。容器最大宽度 1200px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面端 112px、1024px 以下 80px、640px 以下 64px。字号比例：H1 clamp(44px, 6.2vw, 92px) Bodoni Moda 500，行高 1.02，字距 -0.01em；H2 clamp(32px, 4vw, 56px) Bodoni 500，行高 1.06；H3 25px Bodoni 600，行高 1.2；标题中的斜体短语使用 Bodoni 500 italic（在 content.ts 中用 *星号* 标记，渲染为 <em>）；导语段落 Karla 400 18px / 1.65 Ink 85% 不透明度；正文 Karla 400 16px / 1.7（最大宽度 62ch）；眉题 Karla 700 12px 大写 字距 0.16em Muted，前面有一条 24px x 1px 的 Brass 线，间隔 12px；说明文字 Karla 400 13px Muted。按钮：高度 50px，内边距 0 26px，Karla 700 14px 大写 字距 0.1em。主要按钮：Brass 填充，Card 文字。次要按钮：1px Ink 边框，Ink 文字，透明（在照片上：1px Card 边框，Card 文字）。小按钮高 38px，内边距 0 16px，12px 文字。输入框：高度 50px，1px Rule 边框，Card 填充，16px Karla，聚焦边框 Brass。全局焦点环：2px Brass 轮廓，偏移 3px。
- 圆角：卡片、按钮、输入框、标签、照片和确认页为 10px。仅时长和价格胶囊、营业中圆点、步骤圆点和时段标签使用 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于揭示和步骤；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于手风琴、标签页和步骤切换。没有任何弹跳。
- 动效：揭示：包裹在 <Reveal> 中的区块从 opacity 0、translateY(18px) 开始，在 15% 可见时（Motion whileInView，viewport once）以 700ms --ease-out 动画到静止状态。列表中的同级元素以 80ms 交错（index prop）。
- 动效：Hero 照片：加载时图片从 1.07 缩放到 1.0，历时 2200ms --ease-out；滚动时，随着 hero 滚出，图片平移 0 到其高度的 10%（Motion useScroll 作用于 hero，offset ['start start', 'end start']），同时标题区块在同一范围内淡出到 opacity 0.25 并移动 -32px。H1 各行从 translateY(26px) 和 opacity 0 升起，以 120ms 交错，在加载后 150ms 开始。
- 动效：Marquee：一条连续的引述条带在 Forest 上以恒定 40px/s 向左滚动，悬停时暂停，内容复制以实现无缝循环（CSS 动画；在减少动效下禁用）。
- 动效：服务行：悬停时以 60% 填充 Oat，并在 250ms 内从左侧滑入一条 24px x 2px 的 Brass 线；'Book' 提示在右边缘淡入。
- 动效：造型师卡片：悬停时照片在 700ms --ease-out 内缩放到 1.04，卡片边框变为 Ink；'next free slot' 胶囊交叉淡入为 'Book with [name]'，链接到 ./booking.html?stylist=<id>（预约页面会预选该造型师；不带查询参数打开时则从无选择开始——绝不会报错）。
- 动效：Gallery：照片在悬停时上升 12px 并失去其 Oat 边框；点击打开 Lightbox（Forest 遮罩 85%，照片最大 80vh，说明文字为 Card，X 关闭，左右箭头导航，Escape 关闭），以 240ms 淡入和 16px 缩放稳定。
- 动效：预约步骤：步骤切换以 20px 水平滑动交叉淡入，300ms --ease-io（AnimatePresence mode 'wait'）。选择服务、造型师、日期或时段时，标签在 150ms 内填充；粘性摘要价格在 400ms 内计数到新总额。确认卡片翻入（rotateX -8deg 到 0，opacity 0 到 1，420ms --ease-out），参考编号在 700ms 内逐字符打出。
- 动效：营业时间：营业中圆点仅在营业时脉冲（scale 1 到 1.25，1600ms 循环）。
- 动效：页头：在照片 hero 上透明，使用 Card 文字；滚动 40px 后变为 94% 不透明度的 Cream，backdrop-filter blur(10px)，Ink 文字和 1px Rule 底部边框，250ms 过渡。在 booking.html 上从一开始就是实色。
- 动效：链接：.link-draw 在悬停和 focus-visible 时以 300ms --ease-out 从 0% 到 100% 宽度生长出 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 禁用 hero 缩放和视差、H1 升起、marquee（显示静态居中引述）、计数动画、打字动画和布局动画（以静止状态渲染）。颜色和边框悬停变化保留。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：仅使用真实摄影，温暖自然，全部六张均为本模板以一致风格制作：深绿色墙壁、温暖奶油色光线、黄铜细节、皮革和木材、纪实编辑风格、细腻颗粒。绝不出现面部：室内、工具、椅子、后脑勺。任何地方都没有可读文字、标志或品牌工具。每张照片使用 object-fit cover，object-position 在 Assets 下给出，10px 圆角，无阴影；Cream 上的照片获得 1px Rule 轮廓。照片下方说明文字为 Karla 13px Muted。代码绘制：favicon、字标（仅文字）、时长和价格胶囊、确认卡片布局、分隔线和步骤条。图标：仅 lucide-react，描边宽度 1.5。

## 页面与区块
### 首页（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[BRAND] = The Juniper Chair，[CITY] = Chicago, Illinois，[STREET] = Rowan Street，[FOUNDED] = 2019）。将每个字符串、数字和列表放入 src/content.ts 并从中渲染；两个页面共用一个内容文件。若任何变量值不同，请重写每个标题、服务、价格、造型师简介、评价、营业时间、政策和 FAQ 答案，使其对新店铺具体且可信，同时保持相同的结构、数量和长度。所有人物、服务、街道和数字均为虚构。全站使用的店铺信息：地址 118 [STREET], [CITY]；电话 (312) 555-0166；邮箱 hello@ + emailDomain（hello@thejuniperchair.com）；6 把椅子，4 位造型师；有空椅时欢迎直接到店，预约可免排队；12 岁以下儿童在下午 4 点前欢迎。营业时间（客户时钟）：周三至周五 9:00–19:00，周六 9:00–17:00，周日 10:00–15:00，周一至周二休息。价格：剪发 $26 起，染发 $55 起，剃须 $38 起。造型师工作日：Nadia 周二至周六（注意：店铺周二休息，因此 Nadia 实际工作周三至周六——将她列出的工作日保持在营业日内），Marcus 周三至周日，June 周三至周日，Theo 周四至周日。
   布局：不适用
   动效：不适用
2. **页头（所有页面）** — 左侧：字标 '[BRAND]'（Bodoni 600，21px，letter-spacing 0.04em），第二行 'Salon & barbershop · Est. [FOUNDED]'（Karla 700 10px 大写 letter-spacing 0.22em），链接到 ./index.html。中间导航（Karla 500 14px）：'Services' → ./index.html#services，'Stylists' → ./index.html#stylists，'Gallery' → ./index.html#gallery，'Policies' → ./booking.html#policies。当前页面链接有 1px 下划线。右侧：主按钮 'Book a chair' → ./booking.html（始终可见）和汉堡菜单（Lucide Menu 22px，820px 以下）打开 MobileMenu：全屏 Oat 面板，链接为 Bodoni 500 30px，预约按钮在底部，关闭图标在右上角。
   布局：固定顶部，高度 76px，与容器对齐。仅在首页英雄区上方时初始透明并使用 Card 文字。移动菜单覆盖视口，从右侧滑入 300ms。
3. **英雄区** — 背景照片 hero-salon.webp。眉题（Card，Card 中线条 60%）：'[STREET] · [CITY] · Est. [FOUNDED]'。H1 分两行：'Good hair' / '*is a habit.*' 导语（Card 88%，最大宽度 560px）：'Four stylists, six chairs and zero attitude at [BRAND]. Fades, color, long hair and hot-towel shaves on [STREET] since [FOUNDED] — booked online in under a minute or walked into when the sign says so.' 按钮：主按钮 'Book a chair' → ./booking.html（Lucide CalendarDays 16px），照片上的次要按钮 'See services & prices' → ./index.html#services。底部账目栏四项，每项为大数值（Bodoni 500 30px Card）在上、标签（Karla 700 12px 大写 letter-spacing 0.12em Card 70%）在下：'6 chairs' / 'Walk-ins when free'；'From $26' / 'Kids'' cuts'；'45 min' / 'Signature cut'；'Wed–Sun' / 'Closed Mon & Tue'。英雄区文字位于足够深的遮罩上，使 Bone 文字在镜面场景上可读；CTA 旁有一个显示下一个空闲时段的营业中胶囊（'Open now - next chair 3:30'）；移动端英雄区向下留出页头高度的内边距，使 H1 永不与字标重叠，页头 CTA 永不换行。
   布局：高度 92svh，最小高度 640px，最大高度 980px。图片 object-fit cover，object-position 50% 58%。遮罩 linear-gradient(180deg, rgba(36,56,43,0.52) 0%, rgba(36,56,43,0.14) 35%, rgba(36,56,43,0.28) 60%, rgba(36,56,43,0.82) 100%)。内容块锚定在容器内左下角，账目栏上方 120px，最大宽度 780px。账目栏：绝对定位 bottom 0，全容器宽度，1px Card/25% 顶部边框，4 等列，1px Card/25% 垂直分隔线，内边距 24px 0 32px。768px 以下：H1 为 44px，账目栏变为 2x2 网格，按钮全宽堆叠。
4. **服务** — 区块 id='services'。眉题 'The price list' 和 H2 'Every service, timed and priced. No surprises at the till.' 四组以 2x2 网格排列，每组为一张 Card，含组标题和行（名称 Karla 700 16px，单行描述 Karla 15px Muted，时长胶囊 '45 min' 和右侧 Bodoni 600 20px Brass 价格）：组 'Cuts & fades'：'Signature Cut' — 'Consultation, cut, wash and style' — 45 min — $38；'Skin Fade' — 'Clippers to the skin, blended by hand' — 40 min — $36；'Cut & Style, long hair' — 'Long-hair cut with a proper blow-dry' — 60 min — $52；'Kids under 12' — 'First-cut photos encouraged' — 30 min — $26。组 'Color'：'Root Touch-up' — 'Regrowth matched to the existing shade' — 60 min — $68；'Full Color' — 'All-over single process' — 90 min — $110；'Balayage' — 'Hand-painted, two sessions for big changes' — 150 min — $160；'Gloss & Tone' — 'Shine and color correction between appointments' — 45 min — $55。组 'Beard & shave'：'Beard Trim & Line-up' — 'Shape, edges, oil finish' — 25 min — $22；'Hot-Towel Shave' — 'Straight razor, two lathers, one hot towel too many' — 40 min — $38；'Beard Sculpt & Oil' — 'Full reshape with a treatment' — 35 min — $30。组 'Treatments'：'Scalp Massage & Wash' — 'Fifteen minutes of quiet' — 25 min — $28；'Deep Conditioning' — 'Repair mask under gentle heat' — 30 min — $32。网格下方一行居中文字（Karla 15px Muted）：'All prices include tax. Oat milk is for the coffee place next door; we have tea and water.'
   布局：Cream 背景。标题块左对齐最大宽度 640px。2x2 组卡片网格，24px 间距，卡片 10px 圆角，1px Rule 边框，28px 内边距；行之间用 1px Rule 分隔线，垂直内边距 14px。行悬停：'Book' 胶囊在右边缘淡入，链接到 ./booking.html?service=<id>。900px 以下网格变为单列。
5. **造型师** — 区块 id='stylists'。眉题 'The chairs' 和 H2 'Pick a chair, keep a stylist.' 四张卡片，每张含该造型师的工作肖像（4:3）——AI 生成的虚构人物，剪发中，手持剪刀，温暖店铺灯光：1）stylist-nadia.webp，alt 'Nadia coloring hair, a fictional stylist' — Nadia Okafor — 'Color Lead, Chair 1' — 'Twelve years of color, the last four at [BRAND]. Balayage, color correction and the patience to talk you out of a decision you''ll regret.' — 胶囊 'Balayage · Corrections · Gloss' — 'Works Wed–Sat' — 'Next: Wed 9:00am'。2）stylist-marcus.webp，alt 'Marcus fading a haircut, a fictional stylist' — Marcus Reyes — 'Fade Specialist, Chair 2' — 'Skin fades sharp enough to schedule around. Also the shop''s fastest beard line-up and slowest talker.' — 胶囊 'Skin fades · Beard · Kids'' cuts' — 'Works Wed–Sun' — 'Next: Wed 9:00am'。3）stylist-june.webp，alt 'June braiding long hair, a fictional stylist' — June Park — 'Long Hair & Styling, Chair 3' — 'Long-hair cuts, braids and updos that survive a whole wedding day. Believes in trims before splits become stories.' — 胶囊 'Long hair · Braids · Updos' — 'Works Wed–Sun' — 'Next: Wed 10:30am'。4）stylist-theo.webp，alt 'Theo at the hot-towel station, a fictional barber' — Theo Brandt — 'Classic Barber, Chair 4' — 'Scissor cuts and hot-towel shaves, learned the trade the slow way. Keeps the kettle for the towels, not the tea.' — 胶囊 'Scissor cuts · Shaves · Grey blending' — 'Works Thu–Sun' — 'Next: Thu 9:00am'。每张卡片链接 'Book with [name]' → ./booking.html?stylist=<id>。造型师卡片使用工艺特写（无面部、无手部）：Nadia - 剪刀正在剪刚剪好的铜色波浪；Marcus - 电推剪、黄铜梳和折叠布在胡桃木上；June - 染刷、琥珀色染碗和锡纸在椅臂上；Theo - 直剃刀在磨刀皮带上，旁边是蒸汽机。一致的 3:4 构图，卡片高度匹配。
   布局：Oat 背景。桌面端四等列（24px 间距），1024px 以下 2x2，640px 以下单列。卡片：工作肖像在上（宽高比 4:3，10px 圆角，1px Rule 轮廓），姓名 Bodoni 600 24px，角色行 Karla 700 12px 大写 Brass，简介 Karla 15px / 1.6，胶囊，工作日和下一个空闲行，全宽小号次要按钮。
6. **画廊** — 区块 id='gallery'。眉题 'Recent work' 和 H2 'The backs of heads we''re proud of.' 六图马赛克带说明：gallery-fade.webp 'Skin fade, three weeks in — still holding'；stylist-june.webp（复用）'June mid-braid, wedding #14 of the season'；gallery-fade.webp（复用，通过 object-position 不同裁剪）'Low fade with a soft part'；tools-color.webp（复用）'Nadia''s Tuesday kit'；shave-tools.webp（复用）'Theo''s tools, sharpened weekly'；hero-salon.webp（复用）'The room, Saturday 9am'。每张下方说明为 Karla 13px Muted。瀑布流网格对齐齐平，间距均匀；渐变照片为后脑勺发际线特写，不露镜中脸；没有照片重复使用造型师卡片中的图片；所有画廊照片共享深绿与黄铜色调。
   布局：Cream 背景。桌面端 6 列马赛克：第 1 和第 4 项跨 2 行（宽高比 3:4），其余宽高比 1:1，12px 间距，10px 圆角。900px 以下：2 列，宽高比 1:1（无高项）。点击打开 Lightbox（与 Motion 中的条带规则共享）。
7. **Marquee（滚动横幅）** — Forest 色带，一条连续滚动的短引语条，使用 Bodoni 500 italic 22px Brass Light，引语之间用 4 角星分隔（以 SVG 绘制）：'"Best fade in three blocks."' · '"Nadia is a color genius."' · '"Booked at midnight, cut at nine."' · '"The shave is a religious experience."' · '"They remember how you take your tea."' · '"Zero small talk, if you ask nicely."'
   布局：全宽色带，垂直内边距 40px，overflow hidden，内容复制以实现无缝循环。上下各 1px Brass Light 边框，30% 不透明度。
8. **Reviews（评价）** — Eyebrow 'Word of mouth' 和 H2 'The regulars, quoted.' 三张引语卡片，置于 Card 上：1) '"Marcus spent forty minutes on a fade most shops rush in ten. Worth every dollar, and the queue agrees."' — Devon R.，2021 年起的常客。2) '"Nadia fixed a box-dye disaster over two sessions and never once made me feel bad about it. That''s the whole review."' — Priya S.，balayage 转粉。3) '"Booked online at 11pm for a Saturday slot, walked in, sat down, no phone calls, no fuss. Why doesn''t everywhere work like this?"' — Tom W.，每三周剪一次。每张卡片：大号开引号（Bodoni 600 48px Brass），引语 Bodoni 500 21px / 1.4，署名 Karla 600 13px Muted。
   布局：Oat 背景。三等宽列，24px 间距，卡片 10px 圆角、1px Rule 边框、32px 内边距，桌面端中间卡片向下偏移 24px。低于 860px：堆叠，无偏移。
9. **Hours and visit（营业时间与到店）** — 左侧：'This week' 卡片（Card），含 OpenNowPill 和营业时间表：Wed–Fri 9:00–19:00 / Sat 9:00–17:00 / Sun 10:00–15:00 / Mon–Tue Closed，当天行加粗并带 2px Brass 左边框；说明文字 'Walk-ins welcome whenever a chair is free; bookings skip the queue.' 右侧：'Getting here' 三行，配 Lucide 图标：TrainFront 'Transit' — 'Two blocks from the Mulberry stop; the Green Line drops you closer if the weather disagrees.'；Bike 'Bike' — 'Racks outside the flower shop next door.'；Car 'Car' — 'Metered on [STREET] until 6pm; the alley is for deliveries and dramatic exits.' 两者下方，Forest 上的 CtaBand：H2 用 Card 色 'The chair is warmer than the weather.'，主按钮 'Book a chair' → ./booking.html，说明文字 Card 55% 'Open Wed–Sun · From $22 · Under a minute to book'。
   布局：Cream 背景。营业时间卡片 5 列，交通行 6 列偏移 1，24px 间距，图标置于 44px Oat 圆角方块中。CtaBand 全宽位于下方，垂直内边距 96px，居中堆叠。
10. **Footer（页脚，所有页面）** — Forest 背景。四列：1) 文字标识 '[BRAND]'（Bodoni 600 22px Card），下方 'Salon & barbershop · [STREET], [CITY]'。2) 'Find us'：地址 '118 [STREET]'、'[CITY]'、电话 (312) 555-0166、hello@ + emailDomain。3) 'Hours'：精简版营业时间表，说明文字 'Holiday hours taped to the door, in brass pen.' 4) 'Around the shop'：'Services' → ./index.html#services、'Stylists' → ./index.html#stylists、'Book a chair' → ./booking.html、'Policies' → ./booking.html#policies。底部一行位于 1px Card/15% 分隔线下方：'© [BRAND]. Cut well, be kind.' 文字 Card 80%，链接 Card 带 .link-draw。
   布局：垂直内边距 72px，4 等宽列，底部行距分隔线 40px。低于 768px：两列，然后堆叠。

### Book a chair（`booking.html`）
1. **Masthead（页首）** — 从一开始就是实心页头。Eyebrow 'Book a chair'，H1 'Four questions, one chair.' Lead（max-width 620px）：'Pick a service, a stylist, a slot and a name. Nothing is sent anywhere — your booking lives in this browser, and the reference card at the end is what you show at the door.'
   布局：Cream 背景，容器对齐，垂直内边距顶部 136px（页头高度）+ 48px。H1 max-width 720px。Masthead 底部边框 1px Rule，位于文字下方 64px。
2. **Booking flow（预约流程）** — 第 1 步 'Service' — 四个分组作为可折叠卡片（桌面端全部展开，移动端为手风琴），行内容：名称、时长 pill、Brass 价格、单选选中时整行填充 Oat 并带 Brass 左边框。第 2 步 'Stylist' — 四张紧凑卡片（56px 小圆头像、姓名、角色、pill、工作日）外加最前面的 'First available' 卡片（'We pick whoever is free — usually the right call for cuts'）。第 3 步 'Day & time' — 接下来 14 个可预约日的横向条带（休息日和所选造型师的休息日以 45% 不透明度禁用，并附说明原因的文字）；其下是所选日期的 30 分钟时段，从开门到仍能容纳服务时长的最后一个时段，已占用时段（按日期生成的固定种子模式，刷新后保持稳定）显示为删除线且不可点击。第 4 步 'Your details' — 姓名输入（必填）、电话输入（可选，placeholder 'Only if you want a reminder text'）、复选框 'I''ve read the 24-hour cancellation policy'（必填）。右侧每一步都有粘性摘要卡片：服务名称、时长、造型师、日期和时间、Bodoni 32px 总价（tabular-nums）、主按钮 'Confirm booking'（第 4 步有效前禁用）、说明文字 'Nothing is charged — pay at the chair.' 移动端步骤条显示步骤编号，仅活动步骤显示标签（或横向滚动）；标签在边缘不被裁切；页头保持一行。
   布局：Oat 背景。两列：当前步骤（7 列）和粘性摘要（4 列，偏移 1，sticky top 100px）。上方步骤条：四个带编号的圆点与标签，由 1px Rule 线连接，已完成步骤填充 Sage，当前步骤 Brass。步骤切换滑动并交叉淡入淡出（Motion）。查询参数预选：?service=<id>、?stylist=<id>。低于 900px：单列，摘要作为固定底栏（service · slot · price · Confirm 按钮）。
3. **Confirmation（确认）** — 确认后替换流程。卡片居中，max-width 560px：Forest 页头条带，'[BRAND]' 用 Card（Bodoni 600 20px），参考号（brandInitials + '-' + 四位数字，例如 'TJC-0247'）以 Brass Light 逐字符打出；主体在 Card 上：'Booked' 对勾圆圈（Sage，描边绘制）、'for [NAME]' 用 Bodoni 30px、详情行（Service + duration · Stylist + chair · Day · Time · Price）、虚线边框区块 'Show this at the door'，内含代码绘制的条形码（Ink 色条，高度随机，由参考号的种子哈希生成）、一行 'Pay at the chair · Running late? Call (312) 555-0166'、按钮 'Make another booking'（清除已存储的预约）和 'Back to the shop' → ./index.html。卡片下方说明文字：'Saved in this browser — take a screenshot if you''re the careful kind.' 确认信息持久保存在 localStorage 中。
   布局：Oat 背景，居中堆叠。卡片 10px 圆角、1px Rule 边框，overflow hidden 以容纳页头条带。条形码 100% 宽 x 56px。按钮并排，低于 480px 堆叠。
4. **Policies and FAQ（政策与常见问题）** — Section id='policies'。Eyebrow 'The fine print, in large print' 和 H2 'Policies & questions.' 四个手风琴：1) 'Cancellations' — 'Free until 24 hours before. Inside 24 hours we ask for half the service price — the chair sat empty, and the chair knows.' 2) 'Walk-ins' — 'Always welcome when a chair is free; bookings skip the wait. Saturdays the wait starts at the door around 10, so book.' 3) 'Kids & first cuts' — 'Under-12s before 4pm, Wednesday to Friday. First-cut certificates are real and frankly lovely.' 4) 'Products & allergies' — 'We use two product lines, both nut-free — tell your stylist about allergies, dye sensitivities and anything else; patch tests are free and take 15 minutes.'
   布局：Cream 背景，手风琴行以 1px Rule 分隔，问题用 Bodoni 600 20px，答案 Karla 16px / 1.7 max-width 62ch，右侧 Plus 图标。容器 max-width 760px。位于 Footer 上方。

## 资源
- 图片：为本设计制作的模板照片（可随模板自由再分发）。用 curl -L -o 将每张图片下载到 public/images/：https://media.vibefather.ai/assets/56a9ef1d-16e1-4f84-b6f9-abc889e23747/hero-salon.webp → public/images/hero-salon.webp（首页主视觉、图库；object-position 50% 58%；alt 'Salon interior with deep green walls, brass-framed mirrors and leather chairs'）；https://media.vibefather.ai/assets/56a9ef1d-16e1-4f84-b6f9-abc889e23747/stylist-nadia.webp → public/images/stylist-nadia.webp（造型师卡片 Nadia、图库；alt 'Nadia coloring hair, a fictional stylist'）；https://media.vibefather.ai/assets/56a9ef1d-16e1-4f84-b6f9-abc889e23747/stylist-marcus.webp → public/images/stylist-marcus.webp（造型师卡片 Marcus、图库；alt 'Marcus fading a haircut, a fictional stylist'）；https://media.vibefather.ai/assets/56a9ef1d-16e1-4f84-b6f9-abc889e23747/stylist-june.webp → public/images/stylist-june.webp（造型师卡片 June、图库；alt 'June braiding long hair, a fictional stylist'）；https://media.vibefather.ai/assets/56a9ef1d-16e1-4f84-b6f9-abc889e23747/stylist-theo.webp → public/images/stylist-theo.webp（造型师卡片 Theo、图库；alt 'Theo at the hot-towel station, a fictional barber'）；https://media.vibefather.ai/assets/56a9ef1d-16e1-4f84-b6f9-abc889e23747/gallery-fade.webp → public/images/gallery-fade.webp（图库；alt 'Back of a head with a crisp skin fade, three weeks grown'）。共六个文件。
- 图片：在项目根目录写入 ASSETS.md，包含一张表格：路径、来源 URL、作者、许可证——每张照片一行（来源 'media.vibefather.ai, made for this template'，作者 'VibeFather'，许可证 'Distributed with the template'），另加 @fontsource-variable/bodoni-moda 和 @fontsource/karla（OFL-1.1）以及 lucide-react（ISC）的行。绝不用图库网站（Unsplash、Pexels、Pixabay）或含人脸、手部或可辨识品牌标识的图片替换照片。
- 图标：仅使用 lucide-react：Scissors、CalendarDays、Menu、X、Plus、Check、ArrowRight、ArrowLeft、MapPin、Phone、Mail、Clock、TrainFront、Bike、Car、Star、Sparkles、User、CreditCard。描边宽度 1.5，16–24px，颜色继承。public/favicon.svg 手写：viewBox 0 0 32 32，一个 32x32 的 rect，rx 8，填充 #24382B，一个 Card（#FFFEF9）剪刀字形，由两个圆和两条交叉线绘制。没有其他标志：沙龙名称始终以文字排版呈现。
- 字体：安装 @fontsource-variable/bodoni-moda 和 @fontsource/karla，并在 src/fonts.ts 中按“设置”部分所列导入。Vite 会将 woff2 文件打包进 dist/。
- 图片：在代码中绘制：时长和价格胶囊标签、营业中圆点、步骤圆点、确认条形码、对勾圆圈、跑马灯星形分隔符、分隔线和 favicon。没有其他位图，没有插画，没有地图瓦片。

## 不要做
- 不要后端，不要表单提交，不要向任何 API 发起 fetch：预约、其确认以及每一个选择都只存在于浏览器中（localStorage）；不收取任何费用，也不发送任何内容。
- 每个内部链接都指向文件名（./index.html、./booking.html、./booking.html#policies、./index.html#services）——绝不指向裸目录。
- 一切自托管：字体通过 Fontsource，图标以 npm 包或内联 SVG 形式提供，图片下载到 public/images/。不要 CDN 的 <script> 或 <link> 标签，不要 Google Fonts，不要分析统计。
- 生产构建：压缩，不要 source map，不要把 src/ 复制进 dist/，用单条命令 npm run build，输出在 dist/ 下且小于 10 MB。
- 不要真实的沙龙或连锁店名称，不要真实地址，不要地图瓦片或嵌入，造型师肖像为 AI 生成的虚构人物，用作占位；其他地方不要出现人脸、手或可读的品牌标识。
- 除 'Est. [FOUNDED]' 和评价署名外，任何地方都不要出现日期或年份；网站绝不显示今天的日期。
- 除可选的页脚署名链接外，绝不在网站内提及 VibeFather 或任何其他品牌；所有文案均为虚构的美式英语。
- 在所有地方尊重 prefers-reduced-motion：禁用视差、跑马灯、数字递增、打字机效果和布局动画；保留颜色/边框的悬停效果。
- 网站必须在 1440x900 桌面端和 390x844 移动端正常工作，控制台零错误；预约流程仅用键盘即可操作，每一步都有可见的焦点环，直接打开 booking.html 时从第 1 步开始且没有任何预选项，除非查询参数另有指定。
- 保持文案具体：不要 lorem，不要填充内容，不要没有证据的夸张之词；价格、时长和营业时间始终来自 src/content.ts。

---
— Prompt by VibeFather · https://vibefather.ai/t/hair-salon-and-barbershop-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
