> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 咖啡店网站

完全按照下面的描述构建这个网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的三页网站，这是一家位于 [CITY] 的 [STREET] 上的独立咖啡店，自 [FOUNDED] 年起烘焙来自 [BEAN_ORIGIN] 的咖啡豆。网站必须让人感觉像一家真实的社区咖啡馆：满版出血的摄影图像展示店内空间、吧台和饮品，三款招牌饮品附品鉴笔记，烘焙故事配具体数字，菜单含分类标签、饮食筛选和 8/12/16 oz 定价，营业时间配实时“现在营业”指示器，交通说明，一幅 SVG 绘制的街区地图，以及一个提前下单自取构建器，最终生成客户端确认小票。页面：index.html（首页）、menu.html（菜单）、visit.html（到店与下单）。一切都在浏览器中运行；不会向任何地方发送数据。

- 受众：住在或工作在 [STREET] 步行范围内、正在决定去哪里买早晨咖啡的人，寻找座位和插座的远程工作者，以及寻找好吃糕点的周末访客。大多为 22–55 岁，手机优先，对花哨的咖啡术语不耐烦，但欣赏好咖啡豆。
- 目标：让本地人走进店门，并让常客通过提前下单自取跳过排队。访客应在十秒内知道这家店闻起来是什么味道、一小杯拿铁多少钱、现在是否营业，以及如何提前下单。
- 语气：温暖、平实、带一点俏皮，就像吧台后面记得你点单的人。短句，具体数字（杯型、价格、营业时间、克数），没有不加白话解释的咖啡行家词汇，不用感叹号。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/fraunces（OFL-1.1）、@fontsource/nunito-sans（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 npm create vite@latest 以 react-ts 模板搭建脚手架。项目根目录下有三个真实 HTML 页面：index.html（入口 src/main-home.tsx）、menu.html（入口 src/main-menu.tsx）和 visit.html（入口 src/main-visit.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0, rollupOptions { input { index: resolve(__dirname, 'index.html'), menu: resolve(__dirname, 'menu.html'), visit: resolve(__dirname, 'visit.html') } } }。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4（tailwindcss + postcss + autoprefixer），content ['./index.html', './menu.html', './visit.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将 Design 下的每种颜色以 kebab-case 键添加到 theme.extend.colors（cream、latte、foam、espresso、crema、rule、terracotta、terracotta-deep、terracotta-light、grounds、olive、caramel），并设置 fontFamily display ['Fraunces Variable', 'Georgia', 'serif']、sans ['Nunito Sans', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 14px，并添加 maxWidth { container: '1200px' }。
  - 在 src/fonts.ts 中导入 '@fontsource-variable/fraunces' 以及 '@fontsource/nunito-sans/400.css'、'@fontsource/nunito-sans/600.css'、'@fontsource/nunito-sans/700.css'；从三个入口文件都导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（三个页面的所有字符串、数字、饮品、糕点、咖啡豆袋、营业时间、时段规则、评价、地图标签和 FAQ 答案，带类型），src/lib/brand.ts（brandSlug = [BRAND] 转为小写并将每一段非字母数字字符替换为 '-'，brandInitials = [BRAND] 每个单词的首字母大写，emailDomain = 去掉连字符的 brandSlug + '.com'），src/lib/storage.ts（用 try/catch 包裹的安全 localStorage get/set，键以 brandSlug + ':' 为前缀），src/lib/useOpenNow.ts（根据营业时间表、客户端时钟判断当前是否营业），src/lib/useReducedMotion.ts（重新导出 Motion 的 useReducedMotion）。
  - 状态：src/store/order.ts 是一个小型外部 store（useSyncExternalStore），保存自取草稿 { drinkId, size, milk, extras[], decaf, slot, name, note } 和已确认的票据，持久化到 localStorage 键 brandSlug + ':pickup'。菜单页面和到店页面构建器共享它，因此在 menu.html 上添加的饮品（行上的 'Order this'）会在 visit.html 的构建器中预选。
  - src/components/ 中的组件：Header.tsx、MobileMenu.tsx、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、Badge.tsx（饮食标签）、Footer.tsx、CtaBand.tsx、PriceCols.tsx（8/12/16 oz 列）；home：Hero.tsx、SignatureDrinks.tsx、BeanStory.tsx、PhotoStrip.tsx、Reviews.tsx；menu：MenuMasthead.tsx、FilterBar.tsx（标签页 + 筛选片）、MenuList.tsx、MenuRow.tsx、BeansRetail.tsx；visit：HoursCard.tsx（含 OpenNowPill.tsx）、GettingHere.tsx、BlockMap.tsx（内联 SVG）、OrderBuilder/（OrderBuilder.tsx、DrinkPicker.tsx、MilkChips.tsx、ExtraChips.tsx、SizeToggle.tsx、SlotPicker.tsx、NameStep.tsx、Ticket.tsx）、Faq.tsx。src/pages/Home.tsx、Menu.tsx 和 Visit.tsx 组合它们；每个页面都渲染 Header 和 Footer。
  - 首次构建前，使用 curl -L -o 将 Assets 下列出的每张图片以给定的确切文件名下载到 public/images/。构建本身从不获取任何内容。
  - public/favicon.svg 如 Assets 所述。所有三个 HTML 文件：lang en，<meta name='theme-color' content='#FAF5EC'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>。标题：index.html '<title>[BRAND] — Coffee on [STREET], [CITY]</title>'，menu.html '<title>Menu — [BRAND]</title>'，visit.html '<title>Visit & order ahead — [BRAND]</title>'。
  - 在项目根目录编写 ASSETS.md，如 Assets 所述。
  - dist/ 包含三个 HTML 文件、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张图片。保持在 10 MB 以下。

## 变量
- [BRAND] — 咖啡馆名称（默认："Marigold Coffee House"）。虚构的咖啡馆名称。用于字标、标题、页脚、电子邮件（hello@ + 不含连字符的 brandSlug + .com）、localStorage 键和取餐订单号（首字母缩写，例如 MCH-1042）。绝不使用真实咖啡馆或连锁品牌。
- [CITY] — 城市（默认："Portland, Oregon"）。店铺所在的城市。用于主视觉眉题、到店指引文案和页脚。街道和每一处地标都保持虚构感；只有城市可以是真实的。
- [STREET] — 街道（默认："Alder Row"）。店铺所在的虚构街道（'14 Alder Row'）。驱动地址、SVG 街区地图（街道名称）、交通与停车文案以及招牌拼配的名称 '[STREET] Blend'。保持为两个常见英文单词，不要使用真实地址。
- [BEAN_ORIGIN] — 咖啡豆产地（默认："Huila, Colombia"）。店铺当前烘焙的单一产地咖啡豆。驱动咖啡豆故事、菜单的单一产地部分、零售包装袋和常见问题。真实种植产区可以使用；农场和进口商保持虚构。
- [FOUNDED] — 开业年份（默认："2016"）。四位数字年份。驱动主视觉眉题、字标行 'Est. [FOUNDED]' 和咖啡豆故事的第一行；烘焙师和拼配时间线随之调整。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接指向 https://vibefather.ai/t/coffee-shop-website（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 奶油色（Cream）`#FAF5EC` — 全部三个页面的页面背景，滚动后的页头背景。
- 拿铁色（Latte）`#F1E7D6` — 交替区块背景（招牌饮品、咖啡豆故事、FAQ）、图片槽位、行与标签的悬停填充。
- 泡沫色（Foam）`#FFFDF8` — 卡片表面（饮品卡片、营业时间卡片、小票）、输入框填充、移动端菜单背景。
- 浓缩咖啡色（Espresso）`#2B211B` — 浅色背景上的标题与正文、主描边按钮、图标颜色。
- 咖啡渣色（Grounds）`#241A14` — 点单预告条带、页脚、小票头部、照片叠加层（以 rgba(36,26,20,x) 形式）。
- 咖啡油脂色（Crema）`#7A6A5C` — 次要文本、说明文字、眉题、禁用时段标签（45% 不透明度）。
- 分隔线色（Rule）`#E3D5BE` — 1px 细线、卡片边框、输入框边框、地图街道线。
- 陶土色（Terracotta）`#C05A2E` — 唯一强调色：主按钮、价格、徽章、选中的标签页与标签状态、地图图钉、焦点环、时间线圆点。
- 深陶土色（Terracotta Deep）`#A2481F` — 主按钮的悬停与按下状态。
- 浅陶土色（Terracotta Light）`#E9A275` — 在 Grounds 背景上替代陶土色用于文本和线条（价格、激活标签边框）。
- 橄榄色（Olive）`#67784B` — 安静的第二色：营业中圆点与“open”文本、纯素与无乳制品徽章、地图上的公园区块、低因徽章。
- 焦糖色（Caramel）`#B98A4E` — 小号数字、咖啡豆故事中的年份、烘焙日标记、地图上的窗边座位高亮。绝不用于正文。

### 字体排印（Typography）
- 展示字体：H1、H2、H3、饮品与糕点名称、大号价格、字标、小票总计：Fraunces（OFL），字重 500/600
- 文本与 UI：正文、眉题、按钮、导航、表单字段、菜单描述、说明文字、数字（价格、营业时间和总计使用 font-variant-numeric tabular-nums）：Nunito Sans（OFL），字重 400/600/700

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。容器最大宽度 1200px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面端 112px、1024px 以下 80px、640px 以下 64px。字号比例：H1 clamp(44px, 6.4vw, 96px) Fraunces 500，行高 1.0，字距 -0.01em；H2 clamp(34px, 4.2vw, 60px) Fraunces 500，行高 1.06；H3 26px Fraunces 600，行高 1.2；标题中的斜体短语使用 Fraunces 500 italic（在 content.ts 中以 *星号* 标记，并渲染为 <em>）；导语段落 Nunito 400 18px / 1.65 Espresso 85% 不透明度；正文 Nunito 400 16px / 1.7（最大宽度 62ch）；眉题 Nunito 700 12px 大写 字距 0.16em Crema，前置一条 24px x 1px 的 Terracotta 线，间隔 12px；说明文字 Nunito 400 13px Crema。按钮：高度 50px，内边距 0 26px，Nunito 700 14px 大写 字距 0.1em。主按钮：Terracotta 填充，Foam 文本。次按钮：1px Espresso 边框，Espresso 文本，透明（照片上：1px Foam 边框，Foam 文本）。小按钮高 38px，内边距 0 16px，12px 文本。输入框：高度 50px，1px Rule 边框，Foam 填充，16px Nunito，聚焦边框 Terracotta。全局焦点环：2px Terracotta 轮廓，偏移 3px。
- 圆角：卡片、按钮、输入框、标签、照片和小票为 14px。仅徽章、营业中圆点、饮食徽章胶囊、尺寸切换圆点和地图图钉使用 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现和抽屉；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于标签页、手风琴和构建器步骤。没有任何弹跳。
- 动效：显现：包裹在 <Reveal> 中的区块从 opacity 0、translateY(18px) 开始，在 15% 可见时（Motion whileInView，viewport once）以 700ms --ease-out 动画到静止状态。列表中的同级元素以 80ms 错开（index prop）。
- 动效：主视觉照片：加载时图片在 2200ms 内从 1.07 缩放到 1.0 --ease-out；滚动时，随着主视觉滚出，图片从 0 平移到其高度的 10%（Motion useScroll 作用于主视觉，offset ['start start', 'end start']），同时标题区块在同一范围内淡出至 opacity 0.25 并移动 -32px。H1 各行从 translateY(26px) 和 opacity 0 升起，以 120ms 错开，在加载后 150ms 开始。
- 动效：招牌饮品卡片：悬停时照片在 700ms 内缩放到 1.04 --ease-out，卡片边框变为 Espresso；价格上跳 4px 后回落。“Order this”点击：按钮交叉淡入为 Check 图标和“Added”，持续 1400ms。
- 动效：菜单筛选：行使用 Motion layout 配合 AnimatePresence mode 'popLayout'；离场行在 200ms 内淡出并向左滑动 8px，剩余行在 380ms --ease-io 内滑到位置。标签页切换时，2px Terracotta 下划线通过 Motion layoutId 在标签之间滑动。
- 动效：点单构建器：步骤切换以 16px 水平滑动交叉淡入，280ms --ease-io（AnimatePresence mode 'wait'）。选择尺寸、奶或加料时，标签在 150ms 内填充；累计总计在 400ms 内计数到新值；小票以淡入和虚线边框绘制替换表单，订单号在 800ms 内逐字符打出。
- 动效：营业时间：营业中圆点仅在营业时脉动（scale 1 到 1.25，1600ms 循环）；“Opens at 6:30am”各行在午夜日期变化时交叉淡入。
- 动效：街区地图：进入视图时街道绘制（stroke-dashoffset 到 0）历时 900ms，然后公园区块填充，接着商店图钉从 scale 0.6 以柔和过冲落下，交通、自行车和停车标记以 120ms 错开弹出。
- 动效：页头：在照片主视觉上方透明，使用 Foam 文本；滚动 40px 后变为 94% 不透明度的 Cream、backdrop-filter blur(10px)、Espresso 文本和 1px Rule 底边框，250ms 过渡。在 menu.html 和 visit.html 上从一开始就是实色。
- 动效：FAQ 手风琴：高度 0 到 auto，opacity 0 到 1，历时 300ms --ease-io；Plus 图标旋转 45 度变为 X。
- 动效：链接：.link-draw 在悬停和 focus-visible 时，以 300ms --ease-out 从 0% 到 100% 宽度生长出 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 禁用主视觉缩放和视差、H1 升起、街道绘制、图钉落下、计数、脉动和布局动画（以静止状态渲染；标签页和手风琴即时切换）。颜色和边框悬停变化保留。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：仅使用真实摄影，温暖自然，全部六张均为本模板以统一风格制作：晨光窗光、橡木与陶土色调、纪实编辑风格、细腻颗粒。无人物、无面孔、无手、无可读文字、标志、杯子品牌或带文字的菜单板。每张照片使用 object-fit cover，object-position 见 Assets 下说明，14px 圆角，无阴影；Cream 上的照片加 1px Rule 轮廓。照片下方说明文字为 Nunito 13px Crema。代码绘制：favicon、字标（仅字体）、插画街区地图、尺寸圆点、饮食徽章图标、小票和分隔线。图标：仅 lucide-react，描边宽度 1.5。

## 页面与区块
### 首页（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[BRAND] = Marigold Coffee House，[CITY] = Portland, Oregon，[STREET] = Alder Row，[BEAN_ORIGIN] = Huila, Colombia，[FOUNDED] = 2016）。将每个字符串、数字和列表放入 src/content.ts 并从中渲染；三个页面共享一个内容文件。如果任何变量值不同，请重写每个标题、饮品、品鉴笔记、价格、评价、营业时间、路线指引、地图标签和 FAQ 答案，使其对新咖啡馆具体且可信，同时保持相同的结构、数量和长度。所有人物、饮品、街道和数字均为虚构。全站使用的店铺信息：地址 14 [STREET]，[CITY]；电话 (503) 555-0148；邮箱 hello@ + emailDomain（hello@marigoldcoffeehouse.com）；26 个座位；6 个窗边吧凳；1 台烘焙机（5 kg 滚筒式，安装于 [FOUNDED] + 2）；烘焙日为周二；咖啡豆静置 9 天；招牌拼配名为 '[STREET] Blend'。营业时间（客户时钟）：周一至周五 6:30–18:00，周六 7:00–18:00，周日 7:00–16:00。价格：浓缩咖啡饮品起价 $3.00，滴滤咖啡 $3.50，糕点 $4.00–7.00，零售袋装 $17–19。
   布局：不适用
   动效：不适用
2. **页眉（所有页面）** — 左侧：字标 '[BRAND]'（Fraunces 600，20px，大写，字间距 0.16em），第二行为 'Est. [FOUNDED] · Roasted in-house'（Nunito 600，10px 大写，字间距 0.22em），链接到 ./index.html。中间导航（Nunito 600 14px）：'Menu' → ./menu.html，'Visit & order' → ./visit.html，'Our story' → ./index.html#story。当前页面链接有 1px 下划线。右侧：小型主按钮 'Order pickup' → ./visit.html#order（在 1024px 以下隐藏）和汉堡菜单（Lucide Menu 22px，在 820px 以下显示），打开 MobileMenu：全屏 Latte 面板，链接为 Fraunces 500 32px，订单按钮在底部，关闭图标在右上角。
   布局：固定顶部，高度 76px，与容器对齐。仅在首页主视觉上方时初始为透明，文字为 Foam 色（见动效）。移动菜单覆盖视口，从右侧滑入，时长 300ms。
3. **主视觉** — 背景照片 hero-interior.webp。眉题（Foam 色，Foam 色线条 60% 不透明度）：'[STREET] · [CITY] · Est. [FOUNDED]'。H1 分两行：'Slow mornings,' / '*strong coffee.*' 导语（Foam 色 88% 不透明度，最大宽度 560px）：'[BRAND] opened on [STREET] in [FOUNDED] with one grinder, six stools and a promise: proper espresso, real milk, nothing rushed. We roast single origins from [BEAN_ORIGIN] in the back room every Tuesday and pour them seven days a week.' 按钮：主按钮 'See the menu' → ./menu.html（Lucide ArrowRight 16px），照片上的次按钮 'Order pickup' → ./visit.html#order。底部四项账目栏，每项为大数值（Fraunces 500 30px Foam 色）在上方标签（Nunito 700 12px 大写 字间距 0.12em Foam 色 70% 不透明度）之上：'Est. [FOUNDED]' / 'Roasted in-house'；'7 days' / '6:30am – 6pm'；'[BEAN_ORIGIN]' / 'This month''s single origin'；'26 seats' / 'Outlets at every window stool'。在移动端，段落位于更强的 Grounds 渐变叠加层上并被缩短；统计数据以 2x2 网格堆叠，留有呼吸空间。
   布局：高度 92svh，最小高度 640px，最大高度 980px。图片 object-fit cover，object-position 50% 60%。叠加层 linear-gradient(180deg, rgba(36,26,20,0.46) 0%, rgba(36,26,20,0.10) 35%, rgba(36,26,20,0.24) 60%, rgba(36,26,20,0.80) 100%)。内容块锚定在容器内左下角，位于账目栏上方 120px，最大宽度 780px。账目栏：绝对定位底部 0，全容器宽度，1px Foam/25% 顶部边框，4 个等宽列，列间 1px Foam/25% 垂直分隔线，内边距 24px 0 32px。768px 以下：H1 为 44px，账目栏变为 2x2 网格，按钮全宽堆叠。
4. **招牌饮品** — 区块眉题 'The signatures' 和 H2 'Three cups we''d walk across town for.' 三张大卡片，图片/文字侧交替：1）latte-signature.webp，alt 'Honey lavender latte with latte art in a ceramic cup on an oak table' — 名称 'Honey Lavender Latte'，文案 'House lavender syrup made from the flower shop next door''s cuttings, a spoon of local honey, your choice of milk. The cup that pays our rent.' — 价格 '8oz $4.75 · 12oz $5.25 · 16oz $5.75' — 徽章 'Dairy-free with oat'。2）espresso-pour.webp，alt 'Espresso pouring from an unbranded machine into a small cup below the counter' — 名称 'Maple Cortado'，文案 'A double ristretto cut with steamed whole milk and a half-measure of dark maple. Four ounces, no lid, no hurry.' — 价格 'One size $4.50'。3）beans-scoop.webp，alt 'Freshly roasted coffee beans scooped from a plain hessian sack' — 名称 '[STREET] Batch Brew'，文案 'Our house blend, roasted Tuesdays and rested nine days. Chocolate, toasted almond, and a finish that forgives you for drinking it in a car.' — 价格 '8oz $3.50 · 12oz $4.00 · 16oz $4.50'。每张卡片有一个小型次按钮 'Order this' → ./visit.html#order，将饮品保存到自取草稿。
   布局：Latte 背景。标题块左对齐，最大宽度 640px。卡片：12 列行，图片（5 列，宽高比 4:3，14px 圆角）和文字（6 列，偏移 1）交替；文字侧有徽章、名称（H3 32px Fraunces）、文案、价格（Fraunces 600 22px Terracotta 色）、按钮。卡片间距 96px。860px 以下卡片堆叠（图片在上），间距 72px。
5. **咖啡豆故事** — 区块 id='story'。眉题 'Since [FOUNDED]' 和 H2 'One roaster, one row of shelves, one long Tuesday.' 两列：左侧，故事分三段短文：'The roaster came second-hand from a cafe in the hills — a 5 kg drum that had already seen ten years of mornings. We stripped it, re-wired it, and installed it where the storage room used to be, close enough to the bar that the first crack of [BEAN_ORIGIN] smells better than any candle we could buy.' / 'We roast every Tuesday, rest the beans nine days, and bag them on Monday nights. What we don''t sell as bags goes into the hopper, which is why the batch brew on a Wednesday tastes like a holiday and the batch brew on a Monday tastes like a promise.' / 'The blend changes with the seasons; the promise doesn''t: if a cup isn''t right, we remake it, no questions, no receipt needed.' 右侧，四项事实的编号账目栏（Fraunces 600 28px 数值在上方 Nunito 13px Crema 色标签之上，1px Rule 分隔线）：'5 kg / drum roaster, second-hand'；'Tuesday / roast day, every week'；'9 days / rest before we pour'；'$17 / 250g bag of [STREET] Blend'。两者下方，横跨区块的引用语（Fraunces 500 斜体 28px）：*"A cafe is just a living room with better coffee."* — Renata, who has opened every morning since [FOUNDED]。
   布局：Cream 背景。故事列 6 列（最大宽度 56ch），账目栏 4 列偏移 1，左内边距 32px，1px Rule 左边框。引用语居中，最大宽度 820px，上下各 1px Terracotta 色线条，内缩 24px。860px 以下：故事后堆叠账目栏，引用语 22px。
6. **照片条** — 四张方形照片排成一行，每张有说明文字：latte-signature.webp 再次使用 'The signature, before the first sip'；espresso-pour.webp 再次使用 'First pour of the day, 6:31am'；pastry-case.webp 'The case at 7am, if you''re lucky'；corner-tables.webp 'The window bench, permanent sun'。每张下方说明文字为 Nunito 13px Crema 色。
   布局：Latte 背景。4 个等宽列，间距 16px，宽高比 1:1，14px 圆角。移动端水平滚动吸附（每张照片 78vw）。点击照片打开灯箱（固定叠加层，Grounds 色 80% 不透明度，照片最大 80vh 居中，说明文字在下方 Foam 色，X 关闭，Escape 关闭）。
7. **评价** — 眉题 'Word of mouth' 和 H2 'What the regulars say.' 三张 Foam 色引用卡片：1）'"The cardamom bun alone is worth the walk across town."' — Priya N.，自 2019 年起常客。2）'"They remember your order by the second visit. And your dog''s name by the third."' — Tom & June A.，周六长椅常客。3）'"Best cortado in the city, and the only cafe where the window seat is free at 7am. I''ve tested both claims extensively."' — Marcus L.，在角落桌子工作。每张卡片：大号开引号（Fraunces 600 48px Terracotta 色），引用语 Fraunces 500 21px / 1.4，署名 Nunito 600 13px Crema 色。
   布局：Cream 背景。三个等宽列，间距 24px，卡片 14px 圆角，1px Rule 边框，内边距 32px，顶部对齐，桌面端中间卡片下移 24px 错落。860px 以下：堆叠，无偏移。
8. **订单预告带** — Grounds 背景。左侧：眉题 Terracotta Light 色 'Skip the line'，H2 Foam 色 'Order ahead. Walk in. Walk out.' 和一行文字（Foam 色 75% 不透明度）：'Pick a drink, pick a time, and it''s waiting at the end of the bar with your name on the cup — the good kind of name tag.' 右侧：主按钮 'Start an order' → ./visit.html#order，下方说明文字 Foam 色 55% 不透明度 'Pickup from 6:45am · No app, no account, no card'。
   布局：全宽带，内部与容器对齐，两列（7 文字 / 4 按钮，偏移 1），垂直内边距 96px。1px Terracotta Light 色顶部边框，宽度 40%，左对齐。
9. **页脚（所有页面）** — Grounds 背景。四列：1) 字标 '[BRAND]'（Fraunces 600 22px Foam），下方为 'Est. [FOUNDED] · [STREET], [CITY]' 以及社交行 'On the internet, we''re mostly closed.' 2) 'Find us'：地址 '14 [STREET]'、'[CITY]'、电话 (503) 555-0148、hello@ + emailDomain。3) 'Hours'：周一至周五 6:30–18:00，周六 7:00–18:00，周日 7:00–16:00，说明文字 'Holiday hours on the door, and here too, when they exist.' 4) 'Around the block'：'Menu' → ./menu.html，'Visit & order' → ./visit.html，'Our story' → ./index.html#story。底线位于 1px Foam/15% 分隔线下方：'© [BRAND]. Made with too much coffee on [STREET].' 文字为 Foam 80%，链接为 Foam 并带 .link-draw。
   布局：垂直内边距 72px，4 个等宽列，底线位于分隔线下方 40px。低于 768px：两列，然后堆叠。

### 菜单（`menu.html`）
1. **刊头** — 从一开始就是实色页头（无照片）。眉题 'The menu'，H1 'Everything on the counter.' 导语（最大宽度 620px）：'Sizes are 8, 12 and 16 ounces. Oat and almond milk are +50 cents, a decaf swap is free, and the pastry case is restocked at 6am and usually empty by noon — we take that as a compliment.' 导语右侧为尺寸图例：三个圆点（8、12、16）分别填充 Crema、Terracotta、Espresso 并带标签，另加注释 'Prices include tax. Card and cash at the counter.'
   布局：Cream 背景，容器对齐，垂直内边距顶部 136px（页头高度）+ 48px。H1 最大宽度 720px。刊头底部边框 1px Rule，位于文字下方 64px。低于 860px 时图例换行到导语下方。
2. **筛选栏** — 吸附在页头下方（top 76px），背景为 Foam 96% 带模糊，底部边框 1px Rule。分类标签页（Nunito 700 14px）：'Espresso'、'Brewed & cold'、'Pastries & bites'、'Beans to go'。筛选芯片各带一个 12px 圆点：'Dairy-free'（Olive 圆点）、'Gluten-free'（Caramel 圆点）、'Decaf'（Espresso 圆点）；芯片为开关，多个激活芯片以 AND 方式筛选。右端：计数 '18 items' 实时更新，以及说明文字 'Tap a chip to narrow things down.'
   布局：标签页居左，芯片居中偏右，计数居右。2px Terracotta 下划线在标签页之间滑动（Motion layoutId）。低于 768px：标签页水平滚动，芯片换行到第二行。
3. **菜单列表（Espresso）** — 行包含名称（Fraunces 600 22px）、一行描述（Nunito 15px Crema）、饮食徽章胶囊，以及 PriceCols：1) 'Honey Lavender Latte' — 'Lavender syrup from the flower shop next door, local honey, any milk' — dairy-free 徽章 — $4.75 / $5.25 / $5.75。2) 'Vanilla Bean Latte' — 'Real vanilla bean paste, none of the perfume stuff' — $4.50 / $5.00 / $5.50。3) 'Flat White' — 'Double ristretto, velvet milk, no foam architecture' — $4.50 / $5.00 / $5.50。4) 'Cappuccino' — 'Traditional: 6oz of it is the cup''s business, not ours' — $4.25 / $4.75 / $5.25。5) 'Maple Cortado' — 'Ristretto cut with whole milk and dark maple' — 单一尺寸 $4.50。6) 'Mocha' — '70% dark chocolate melted to order, no whip' — $5.00 / $5.50 / $6.00。7) 'Espresso' — '[STREET] Blend or the current single origin, your call' — 2oz $3.00 / 4oz $3.50。8) 'Espresso Tonic' — 'Double shot, artisan tonic, orange peel, summer in a glass' — 仅 16oz $5.75，dairy-free 徽章。任何 espresso 饮品均可免费换 decaf：列表中在人们实际会换 decaf 的两款饮品上带有 decaf 徽章：'Vanilla Bean Latte' 和 'Mocha'。
   布局：行：名称 + 描述居左（8 列），PriceCols 居右（3 列，偏移 1），带 8oz / 12oz / 16oz 列标题（Nunito 700 11px 大写 Crema）和 Fraunces 600 20px Terracotta 价格；单一尺寸项跨全部三列，带 'one size' 或盎司标签。行间 1px Rule 分隔线，行内边距 20px，行悬停填充 Latte 60%，右边缘出现 'Order this' 操作（将饮品保存到自取草稿并链接到 ./visit.html#order）。低于 640px 时价格移到描述下方，呈 3 列行。
4. **菜单列表（Brewed & cold）** — 1) 'Batch Brew' — '[STREET] Blend, roasted Tuesday, ground 90 seconds before it hits the water' — $3.50 / $4.00 / $4.50，decaf 徽章（'Swiss water, always on'）。2) 'Pour-over' — '[BEAN_ORIGIN], made one cup at a time; give it four minutes' — 仅 12oz $5.50。3) 'Cold Brew' — 'Steeped 18 hours, poured over one enormous ice cube' — $4.75 / $5.25，dairy-free 徽章。4) 'Cardamom Cold Brew' — 'Cold brew, cardamom syrup, a float of oat cream' — 仅 16oz $5.25，dairy-free 徽章。5) 'Hibiscus Iced Tea' — 'Tart, ruby, unsweetened unless you ask' — 仅 16oz $4.00，dairy-free + gluten-free 徽章。6) 'Hot Chocolate' — 'The same 70% chocolate as the mocha, whole milk, no coffee' — $4.25 / $4.75，gluten-free 徽章。
   布局：与 Espresso 相同的行系统。
5. **菜单列表（Pastries & bites）** — 1) 'Butter Croissant' — 'Laminated over three days by Renata''s old sous-chef' — $4.25，gluten-free 徽章通过 Caramel 圆点变体显示为 'GF on request'。2) 'Cardamom Bun' — 'The one people photograph before eating; we understand' — $4.75。3) 'Sourdough Toast & Jam' — 'Two thick slices, house butter, seasonal jam' — $6.50，dairy-free 徽章 'vegan on request'。4) 'Sausage Roll' — 'Puff pastry, breakfast sausage, fennel seed' — $5.50。5) 'Banana Bread' — 'Toasted, salted butter optional but recommended' — $4.00。6) 'Granola & Yogurt' — 'House granola, yogurt, honey from the same hive as the latte' — $7.00，gluten-free 徽章。
   布局：相同的行系统，单一 'each' 价格列而非三个尺寸（列标题 'each'）。
6. **菜单列表（Beans to go）** — 1) '[STREET] Blend' — 'Chocolate, toasted almond, forgiving. Our daily driver.' — 250g 袋装 $17。2) '[BEAN_ORIGIN] Single Origin' — 'The pour-over and the espresso guest slot; roasted Tuesdays' — 250g 袋装 $19。3) 'Half & Half Set' — 'One of each bag, plus brewing notes on a postcard' — 2 x 250g $33。每行带一个小型次要按钮 'Add to pickup note'，将袋装追加到自取草稿的备注字段（本站无购物车抽屉；自取以饮品优先）。
   布局：相同的行系统，'per bag' 价格列。行保留 Latte 悬停填充；小按钮在悬停或聚焦时出现。
7. **自取 CTA 横幅** — Grounds 横幅，居中：Foam 色 H3 'Decided? Skip the line.' 主按钮 'Order ahead for pickup' → ./visit.html#order，下方 Foam 55% 说明文字 'Ready in about 10 minutes · Pay at the counter'。
   布局：全宽，垂直内边距 72px，居中堆叠，16px 间距。位于页脚上方。

### 到店与点单（`visit.html`）
1. **页头** — 实心页头。眉题 'Visit & order'，H1 'Find the door. Or don''t — we''ll bring it out.' 导语：'We''re on the sunny corner of [STREET], between the flower shop and the record store. Inside: 26 seats, six window stools with outlets, water that''s actually cold, and a restroom with a working lock. Outside: a bench that catches the 4pm sun.'
   布局：奶油色（Cream）背景，与 menu.html 相同的页头节奏，底部边框 1px Rule。
2. **营业时间与到达方式** — 左侧卡片（Foam，14px 圆角）：标题 'This week'，配 OpenNowPill（Olive 圆点 + 'Open now · closes 6pm' 或 Terracotta 圆点 + 'Closed · opens 6:30am'，根据客户端时钟和营业时间表计算）。营业时间表：Mon–Fri 6:30–18:00 / Sat 7:00–18:00 / Sun 7:00–16:00，当前日期行加粗并带 2px Terracotta 左边框；说明文字 'The clock above the door is two minutes fast. We side with the door.' 右侧三小行配 Lucide 图标：TrainFront 'Transit' — 'Mallow Street station is two blocks north; the 14 and 61 buses stop at the flower shop.'；Bike 'Bike' — 'Two racks on [STREET] and a pump by the door — the pump is free, the air is too.'；Car 'Car' — 'Metered on Mallow Street until 5pm, free after; the alley behind us is loading only, sorry.'
   布局：12 列：营业时间卡片 5 列，交通行 6 列偏移 1 列堆叠，间距 24px，每行图标放在 44px Latte 圆角方块中。低于 860px 时堆叠。
3. **插画街区地图** — Latte 背景上的内联 SVG 街区地图，代码绘制：[STREET] 从左下到右上斜向延伸；Mallow Street 在其三分之一高度处横穿；顶部边缘沿第二条街区标注 'Foundry Lane'。店铺图钉位于 [STREET]/Mallow 转角：Terracotta 水滴形，内含 Foam 咖啡杯图标、脉冲圆环，标签 '[BRAND] · 14 [STREET]'。其他绘制标签：'Flower shop'（小 Espresso 方块，[STREET] 左上）、'Record store'（小方块，店铺右侧）、'Alder Green' 公园（Olive 圆角块，右下，带两棵绘制树木）、'Mallow St station'（Espresso 方块带铁路刻度线，右上）、'P' 停车场（Espresso 描边方块，Mallow 街上）。左下角小指北针，说明行：'Not to scale. Neither is our eggnog season.' 地图下方图例行：图钉 = 我们，方块 = 邻居，橄榄绿 = 草地。SVG 地图填满其列，标签 12px 或更大；图例位于地图下方；标签永不重叠；无拥挤角落。
   布局：SVG viewBox 0 0 960 540，宽度 100%，街道 3px Espresso 80% 不透明度，街道名沿线条以 Nunito 600 13px Espresso 显示。地图容器 7 列；图例和说明堆叠在右侧（4 列），标题 'The block, honestly drawn'。
4. **提前点单自取构建器** — 区块 id='order'。Latte 背景。眉题 'Order ahead'，H2 'Three taps and it''s on the bar.' 步骤：1) 'Your drink' — 可滚动的 10 款可预订饮品列表（8 款浓缩咖啡饮品加 Cold Brew 和 Cardamom Cold Brew），紧凑行（名称 + 起价）；下方 SizeToggle（8oz / 12oz / 16oz 胶囊按钮；cortado 锁定为 'one size'）、MilkChips（Whole · 2% · Oat +$0.50 · Almond +$0.50）、ExtraChips（Extra shot +$0.80 · Decaf swap, free · Half syrup, free），如果已在 menu.html 或 index.html 预选饮品，则显示注释 'Kept your pick from the menu page.' 2) 'Pick a time' — 仅限今天客户端生成的时间段胶囊按钮：'ASAP (~10 min)' 优先，然后从当前时间 30 分钟后起每 15 分钟一个，直到打烊前 15 分钟；打烊后的时段不显示；说明文字 'Orders after the last slot: come by tomorrow, we open at 6:30am.' 3) 'Your name' — 一个输入框（占位符 'Name for the cup'）和一个可选备注输入框（占位符 'Anything we should know? No lactose? Dog outside?'），然后是摘要面板。摘要（始终可见，右列，Foam 卡片）：饮品行、杯型、奶、加料、时段、Fraunces 32px 总计（杯型价格 + 奶 + 加料，tabular-nums）、主按钮 'Place pickup order' 和说明 'Nothing is charged or sent — show this at the counter and pay there.' 确认后渲染票据（Ticket）：Grounds 页头条带，Foam 色 '[BRAND]' 和订单号（brandInitials + '-' + 四位数字，例如 'MCH-1042'）逐字符打出；下方 Foam 背景上，虚线边框票据主体：自取时间、饮品摘要行、总计、名字 'for [NAME]' 以 Fraunces 26px 显示、代码绘制的条形码（基于订单号种子哈希的随机高度 Espresso 条），以及行 'Show this at the counter · Good for 30 minutes'。按钮：'Start another order'（重置草稿）和 'Back to the menu' → ./menu.html。票据持久化在 localStorage 中。区块内边距保持规范节奏；步骤指示器、表单和摘要共享紧凑的 12 列网格，摘要粘性固定在表单旁——无空白区域。
   布局：两列：当前步骤（7 列）和粘性摘要（4 列，偏移 1 列，粘性顶部 100px）。上方步骤指示器：三个编号圆点带标签，由 1px Rule 线连接，已完成步骤填充 Olive，当前步骤 Terracotta。票据替换整个两列区域，居中最大宽度 560px。低于 900px：单列，摘要位于步骤上方。
5. **FAQ** — 眉题 'Quick answers'，H2 'Asked at the counter, answered here.' 五个手风琴：1) 'Do you have WiFi?' — 'Yes, password is on the chalkboard, and the chalkboard is honest: ''stay as long as you bought a coffee for.'' Outlets at all six window stools.' 2) 'Can I work from the cafe?' — 'Weekdays before 11am and after 2pm, absolutely. Weekend mornings belong to the paper readers and the pram fleet.' 3) 'Are you dog-friendly?' — 'On the bench out front, always; inside, yes if the dog is smaller than the roaster. Water bowls by the door.' 4) 'What about gluten-free or dairy-free?' — 'Oat and almond milk at cost +50 cents, decaf free. The granola and the hibiscus tea are gluten-free; the croissant, regrettably, is a croissant.' 5) 'Where do the beans come from?' — 'This month, [BEAN_ORIGIN], roasted by us on [STREET] every Tuesday. We name the farm on the bag when the importer lets us; the postcard in the Half & Half set tells the longer story.'
   布局：奶油色（Cream）背景，手风琴行带 1px Rule 分隔线，问题以 Fraunces 600 20px 显示，答案 Nunito 16px / 1.7 最大宽度 62ch，右侧 Plus 图标。容器最大宽度 760px。

## 资源

- 图片：为本设计制作的模板照片（可随模板自由再分发）。用 curl -L -o 将每张图片下载到 public/images/：https://media.vibefather.ai/assets/307a73bc-a563-4763-8881-9e58eeadeaf7/hero-interior.webp → public/images/hero-interior.webp（首页主视觉；object-position 50% 60%；alt 'Sunlit corner cafe interior with an oak counter, an espresso machine and empty stools'）；https://media.vibefather.ai/assets/307a73bc-a563-4763-8881-9e58eeadeaf7/latte-signature.webp → public/images/latte-signature.webp（首页招牌饮品卡片 1 和照片条；alt 'Honey lavender latte with latte art in a ceramic cup on an oak table'）；https://media.vibefather.ai/assets/307a73bc-a563-4763-8881-9e58eeadeaf7/espresso-pour.webp → public/images/espresso-pour.webp（招牌卡片 2 和照片条；alt 'Espresso pouring from an unbranded machine into a small cup below the counter'）；https://media.vibefather.ai/assets/307a73bc-a563-4763-8881-9e58eeadeaf7/beans-scoop.webp → public/images/beans-scoop.webp（招牌卡片 3；alt 'Freshly roasted coffee beans scooped from a plain hessian sack'）；https://media.vibefather.ai/assets/307a73bc-a563-4763-8881-9e58eeadeaf7/pastry-case.webp → public/images/pastry-case.webp（照片条；alt 'Glass pastry case with croissants and cardamom buns at opening time'）；https://media.vibefather.ai/assets/307a73bc-a563-4763-8881-9e58eeadeaf7/corner-tables.webp → public/images/corner-tables.webp（照片条；alt 'Window bench and corner table in afternoon sun'）。
- 图片：在项目根目录写入 ASSETS.md，包含一张表：路径、来源 URL、作者、许可证——六张照片各一行（来源 'media.vibefather.ai, made for this template'，作者 'VibeFather'，许可证 'Distributed with the template'），另加 @fontsource-variable/fraunces 和 @fontsource/nunito-sans（OFL-1.1）以及 lucide-react（ISC）的行。如果你更改 [BEAN_ORIGIN] 或 [CITY]，请保留这些照片，或仅替换为其他 CC0 / 公有领域文件，或你自己以相同温暖风格拍摄的照片——绝不要使用 Unsplash、Pexels 或 Pixabay，也绝不要使用含人脸、手部或可读品牌标识的图片。
- 图标：仅使用 lucide-react：Coffee、Menu、X、Plus、Check、ArrowRight、ArrowUpRight、MapPin、Phone、Mail、Clock、TrainFront、Bike、Car、Wifi、Leaf、Wheat、MoonStar、CupSoda、Croissant、Dog、Plug、ShoppingBag。描边宽度 1.5，16–24px，颜色继承。public/favicon.svg 手写：viewBox 0 0 32 32，一个 32x32 的 rect rx 8 填充 #C05A2E，一个 Foam（#FFFDF8）咖啡杯图形（一个 12x10 的圆角矩形杯身在 y 13 处，右侧带 2.5px 手柄弧线）以及上方两条 2px 的 Foam 蒸汽曲线。没有其他标志：咖啡馆名称始终以文字排版呈现。
- 字体：安装 @fontsource-variable/fraunces 和 @fontsource/nunito-sans，并在 src/fonts.ts 中按“设置”部分所列导入它们。Vite 会将 woff2 文件打包进 dist/。
- 图片：在代码中绘制：插画风格街区地图（带街道名称标签的内联 SVG）、营业中胶囊圆点、饮食徽章圆点、尺寸图例圆点、票券条形码、对勾圆圈、分隔线和 favicon。没有其他位图，没有插画，没有地图瓦片，没有外部地图嵌入。

## 不要做
- 不要后端、不要表单提交、不要向任何 API 发起 fetch：取货订单、其确认信息以及每一个选择都只存在于浏览器中（localStorage），订单构建器从不收取任何费用。
- 每个内部链接都指向文件名（./index.html、./menu.html、./visit.html、./visit.html#order）——绝不指向裸目录。
- 一切自托管：字体通过 Fontsource，图标以 npm 包或内联 SVG 形式提供，图片下载到 public/images/。不要 CDN 的 <script> 或 <link> 标签，不要 Google Fonts，不要分析工具。
- 生产构建：压缩、无 source map、不把 src/ 复制进 dist/、单条命令 npm run build、输出在 dist/ 下且小于 10 MB。
- 不要真实咖啡馆或连锁店名称，不要真实地址，不要真实地图瓦片或嵌入（街区地图用 SVG 绘制），不要含人脸、手或可辨识标志、杯子或招牌的照片。
- 除 'Est. [FOUNDED]' 和故事文案外，任何地方都不要出现日期或年份；网站从不显示今天的日期。
- 除可选的页脚署名链接外，网站内绝不提及 VibeFather 或任何其他品牌；所有文案均为虚构的美式英语。
- 处处尊重 prefers-reduced-motion：禁用视差、数字递增、图钉落下和布局动画；保留颜色/边框悬停效果。
- 网站必须在 1440x900 桌面端和 390x844 移动端正常工作且控制台零错误；订单构建器仅用键盘即可操作，每个交互元素都有可见的焦点环。
- 文案保持具体：不要 lorem，不要填充内容，不要没有证据的夸张之词；价格、营业时间和尺寸始终来自 src/content.ts。

---
— Prompt by VibeFather · https://vibefather.ai/t/coffee-shop-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
