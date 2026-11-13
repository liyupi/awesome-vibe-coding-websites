> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 花店网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [SHOP] 打造的单页花店——[SHOP] 是 [CITY] 的一家街角花店，[CUTOFF] 之前下单可享当日送达，花束 $[BASE_PRICE] 起。它必须诚实地卖花：八款花束的目录，尺寸和花瓶选项实时定价；一个送达日期选择器（未来 7 天，周日休息，截止时间前可当日送达）；一条礼物留言，带实时贺卡预览；一个购物车抽屉，显示每行的规格和日期；以及一个客户端结账流程，声明不收取任何付款。单页：index.html，包含各区块（#shop、#subscriptions、#care）。一切都在浏览器中运行；不会向任何地方提交数据。

- 受众：手忙脚乱的送礼者和知道自己喜欢什么的常客：伴侣、成年子女、起草道歉的人。他们在手机上购物，最关心送达日期，希望卡片留言听起来比他们自己能写的更好。
- 目标：填满购物车并选好日期。访客在十秒内看到当日截止时间、价格区间和首批花束；在一分钟内他们就有了尺寸、日期和已开始撰写的留言。
- 语气：温暖，略带机智，懂花但不摆架子。具体的花茎和时令说明，一个关于百合的笑话，不说“用花表达你的情感”。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（MIT）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/lora（OFL-1.1）、@fontsource-variable/albert-sans（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化设置（Setup）：
  - 使用 npm create vite@latest 并选择 react-ts 模板来搭建脚手架。项目根目录下只有一个 HTML 页面：index.html（入口为 src/main.tsx）。
  - vite.config.ts：base 设为 './'，plugins 为 [react()]，build 配置为 { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要将 src/ 复制到 dist/ 中。
  - Tailwind 3.4 通过 PostCSS 接入，content 为 ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的每种颜色以 kebab-case 键名添加到 theme.extend.colors 中（cream-blush、petal、card、leaf、leaf-deep、moss、poppy、poppy-deep、ink-green、rule），并设置 fontFamily 的 display 为 ['Lora', 'Georgia', 'serif']、sans 为 ['Albert Sans Variable', 'system-ui', 'sans-serif']。将 borderRadius 的 DEFAULT 设为 14px，并添加 maxWidth { container: '1180px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/lora/500.css'、'@fontsource/lora/600.css'、'@fontsource/lora/500-italic.css' 和 '@fontsource-variable/albert-sans'；在入口文件中导入 src/fonts.ts 和 src/index.css。
  - 文件布局（File layout）：src/content.ts（所有字符串、花束、尺寸价格、备注、评价、营业时间和图片路径，均带类型）、src/lib/brand.ts（shopSlug = [SHOP] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 shopSlug + '.com'）、src/lib/storage.ts（安全的 localStorage get/set，用 try/catch 包裹，键名以 shopSlug + ':' 为前缀）、src/lib/cutoff.ts（cutoffInfo(now)：解析 [CUTOFF]；根据客户端时钟返回 { sameDay: boolean, hoursLeft, minutesLeft }）、src/lib/dates.ts（nextDays(7)，周日标记为休息；价格计算：尺寸倍率 posey ×0.75 / bouquet ×1 / abundant ×1.45，基于花束基础价）。
  - 状态（State）：src/store/cart.ts 是一个小型外部 store（useSyncExternalStore），保存行项 { key: '<slug>|<size>|<vase>', slug, size, vase, date, message, qty } 以及抽屉打开状态和已下单标志，持久化到 localStorage 键 shopSlug + ':cart'。赠言按行项存储（在加入时选择，可在抽屉中编辑）。
  - 组件位于 src/components/：Header.tsx（含 CartButton + 数量）、CutoffBanner.tsx（实时倒计时）、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、Footer.tsx；Hero.tsx、Catalogue.tsx（含 BouquetCard.tsx、SizePicker.tsx、VaseToggle.tsx、AddToCart.tsx）、DatePicker.tsx（DayChips.tsx）、MessageCard.tsx（手绘便签卡预览）、CartDrawer.tsx（LineRow.tsx、QtyStepper.tsx、Checkout.tsx、PlacedCard.tsx）、Subscriptions.tsx、Reviews.tsx、CareBlock.tsx。src/pages/Home.tsx 负责组合它们。
  - 在首次构建之前，使用 curl -L -o 将资源（Assets）下列出的每张图片下载到 public/images/ 中，并使用给定的确切文件名。构建本身从不获取任何内容。
  - public/favicon.svg 按资源（Assets）中的描述创建。index.html：lang 为 en，<meta name='theme-color' content='#FBF6F1'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[SHOP] — Flowers delivered in [CITY]</title>。
  - 按资源（Assets）中的描述在项目根目录编写 ASSETS.md。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张图片。保持在 10 MB 以下。

## 变量
- [SHOP] — 店铺名称（默认：“Petals & Post”）。虚构的花店名称。用于字标、标题、页脚、电子邮件（hello@ + 不含连字符的 shopSlug + .com）以及 localStorage 键。绝不是真实店铺。
- [CITY] — 城市（默认：“Portland, Maine”）。店铺配送所在的城市。用于主视觉区、配送文案、评价和页脚。可以使用真实城市；街道为虚构。
- [CUTOFF] — 当日截单时间（默认：“2pm”）。当日订单的截单小时，写作 '2pm' 或 '1pm'。驱动倒计时横幅、日期选择器的当日标签以及一条 FAQ 风格文案。保持在中午至下午 4 点之间。
- [BASE_PRICE] — 花束基础价格（默认：“42”）。招牌花束标准“bouquet”尺寸的价格，以数字表示。Posey 为 ×0.75，abundant 为 ×1.45；每款花束的尺寸都基于其自身的基础价格，围绕此数值浮动。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/florist-shop-website（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值撰写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- Cream Blush `#FBF6F1` — 全站页面背景。
- Petal `#F4E6DE` — 交替区块背景（Reviews、Care）、悬停填充、标签。
- Card `#FFFDFA` — 花束卡片、便签预览、抽屉、已下单卡片。
- Leaf `#33523F` — 主色：标题字重颜色、主按钮、已选尺寸、焦点环。
- Leaf Deep `#243B2D` — 主色悬停、页脚背景。
- Moss `#7E8F7C` — 次要文本、说明文字、眉题、休息日。
- Poppy `#D4574B` — 唯一的暖色点缀：价格、截单倒计时、已选日期、购物车徽标、丝带细节。
- Poppy Deep `#B23F35` — Poppy 悬停、按下、倒计时最后一小时。
- Ink Green `#2A2E26` — 正文文本、花束名称、图标颜色。
- Rule `#E7DAD1` — 1px 细线、卡片边框、输入框边框、分隔线。

### 字体排印（Typography）
- 展示字体：H1、H2、花束名称、大号价格、字标、便签手写行：Lora（OFL），字重 500/600
- 文本与 UI：正文、眉题、按钮、表单字段、说明文字；价格和倒计时使用等宽数字：Albert Sans（OFL），字重 400/600/700

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。容器最大宽度 1180px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面端 96px、1024px 以下 72px、640px 以下 56px。字号阶梯：H1 clamp(42px, 6.2vw, 78px) Lora 500，行高 1.04；H2 clamp(28px, 3.8vw, 46px) Lora 500；H3 22px Lora 600；标题中的斜体短语使用 Lora 500 italic（以 *星号* 标记，渲染为 <em>）；导语 Albert Sans 400 17.5px / 1.7 Ink Green 90%；正文 15.5px / 1.7（最大宽度 62ch）；眉题 Albert Sans 700 12px 大写 字距 0.16em Moss；说明文字 13px Moss。按钮：高度 50px，Albert Sans 700 14px。主按钮：Leaf 填充，Card 文本。次按钮：1px Leaf 边框，Leaf 文本。小号 38px。输入框：高度 48px，1px Rule 边框，Card 填充，聚焦时 Leaf 边框。全局焦点环：2px Leaf 轮廓，偏移 3px。
- 圆角：卡片、按钮、输入框、标签、便签和抽屉为 14px。仅胶囊、日期标签、购物车徽标和丝带圆点使用 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现、抽屉和价格变化；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于便签和结账切换。轻盈友好。
- 动效：显现（Reveal）：包裹在 <Reveal> 中的区块初始 opacity 0、translateY(14px)，当 15% 可见时在 700ms 内以 --ease-out 落定（Motion whileInView，viewport once）。同级元素错开 75ms。
- 动效：截单横幅（CutoffBanner）：倒计时每分钟跳动（等宽数字保持宽度）；最后一小时数字变为 Poppy Deep，横幅每分钟轻微脉动一次（减少动态效果下关闭）。
- 动效：花束卡片：悬停上浮 3px；尺寸选择器的价格交叉淡入淡出 150ms；选择尺寸时标签填充 Leaf；花瓶开关滑入一个小型手绘花瓶图形。
- 动效：加入购物车：按钮显示 'Added ✓' 1300ms；一片小手绘花瓣从按钮飘向购物车按钮并淡出（700ms，一次）；徽标弹跳 1→1.3→1。
- 动效：便签预览：手绘便签位于留言字段旁；输入的文字以 Lora 斜体实时出现在卡片上，并带有柔和的下划线绘制；当姓名字段完成时，签名行（'— with love, [name]'）打字出现一次。
- 动效：日期选择器：日期标签悬停时填充 Petal，选中时填充 Leaf（Card 文本）；当日标签带有一个 Poppy 的 'today' 圆点，截单后消失，标签本身变灰并显示说明文字 'tomorrow''s earliest now'。
- 动效：购物车抽屉：遮罩淡入 300ms，抽屉从右侧滑入 420ms --ease-out；数量步进器使该行小计数字脉动（300ms）；移除时该行折叠 240ms。
- 动效：结账切换：已下单卡片上升 16px（320ms --ease-io），带有手绘 Poppy 丝带 'ORDER TIED' 印章从 -6deg→-2deg 旋转进入；订单号（shopInitials-####）打字 700ms。
- 动效：链接：.link-draw 在悬停和 focus-visible 时以 280ms 生长出 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 无脉动、花瓣、打字或计数；抽屉和切换直接出现；颜色/边框悬停变化保留。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：温暖的真实摄影，全部六张均为本模板以一致风格制作：柔和日光、腮红与奶油色搭配深绿叶子和罂粟点缀，同一个店铺的世界——花桶、花茎、包装纸、工作台角落。绝不出现人物（无面孔、无手）；无可读招牌。每张照片使用 object-fit cover，object-position 见 Assets 下说明，14px 圆角，无阴影；Cream 背景上的照片加 1px Rule 轮廓。说明文字使用 Albert Sans 13px Moss。代码绘制：便签、花瓶图形、花瓣、丝带印章、标签和 favicon。图标：仅 lucide-react，描边宽度 1.75。

## 页面与区块
### 商店（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[SHOP] = Petals & Post，[CITY] = Portland, Maine，[CUTOFF] = 2pm，[BASE_PRICE] = 42）。将每个字符串、价格和列表放入 src/content.ts 并从中渲染。如果任何变量值不同，请重写主视觉、全部八款花束（名称、花材、季节说明）、评价、订阅文案和养护说明，使其对新店铺具体且可信，同时保持相同的结构和数量（8 款花束、每款 3 个尺寸、1 个花瓶开关、7 个日期选项、3 种订阅、3 条评价、3 条养护说明）。所有花材、价格和评价者均为虚构。花束（slug · 名称 · 基础价 · 说明 · 照片）：'meadow-post' The Meadow Post $42 'ranunculus, sweet pea, rye grass — like a letter from a field' hero-bucket；'saturday-market' Saturday Market $48 'dahlias, cosmos, whatever the grower overslept on' market-wrap；'first-blush' First Blush $45 'garden roses, lisianthus, a hesitation of astilbe' blush-rose；'hearth-side' The Hearth Side $56 'amber mums, dried grasses, eucalyptus — for tables with candles' hearth-amber；'wild-thursday' Wild Thursday $39 'whatever was left at close, made gorgeous — florist''s choice, honestly' wild-stems；'white-noise' White Noise $58 'white ranunculus, jasmine, no green in sight' white-clean；'poppy-argument' A Poppy Argument $50 'poppies, wheat, one dramatic branch — a statement, possibly an apology' poppy-argument；'tuesday-tulips' Tuesday Tulips $34 'twenty tulips, paper-wrapped, no ceremony' tulip-wrap。
   布局：不适用
   动效：不适用
2. **截单横幅与页头** — CutoffBanner（顶部，Petal 色带，Leaf Deep 文字）：'Order by [CUTOFF] for same-day delivery in [CITY]' 以及 Poppy 色（等宽数字）的实时倒计时 'You have 3h 12m' — 截单后：'Same-day has closed — tomorrow''s first deliveries are open.' 页头：左侧为字标 '[SHOP]'（Lora 600 21px），其下为 'Cut · wrapped · delivered · [CITY]'（10px 大写 Moss）；右侧导航（Albert Sans 600 14px）：'Bouquets' → #shop，'Subscriptions' → #subscriptions，'Care' → #care；CartButton（Lucide ShoppingBasket + Poppy 数量徽标）打开抽屉。
   布局：横幅固定顶部，36px；页头在其下方粘性定位（72px），Cream Blush/94% 模糊，Rule 边框。
3. **主视觉** — 两栏。左侧：眉题 'FLOWERS, CUT THIS MORNING'；H1 'Say it' / '*in season.*'；导语（最大宽度 520px）：'A corner shop in [CITY] with one rule: if it wasn''t cut this week, it isn''t going out this week. Wrapped in paper, carried by bike, at the door before dinner.'；主按钮 'Send flowers today' → #shop，附说明 'Order by [CUTOFF] — the countdown above is honest.'；三条快速事实，使用无衬线小型大写字母：'Free delivery over $60'；'Sundays we rest (the flowers too)'；'Gift note included, always'。右侧：hero-bucket.webp（4:3），附说明 'Saturday''s bucket, 7am — photo by the shop, proudly'。
   布局：Cream Blush 背景，顶部垂直内边距 104px；左侧 6 栏，右侧 5 栏偏移 1。
4. **花束目录** — 区块 id='shop'。眉题 'THE CATALOGUE' 和 H2 'Eight bouquets, three sizes, one honest vase.' 八张 BouquetCard 以 4x2 网格排列：照片、名称（Lora 600 20px）、季节说明（13.5px Moss）、SizePicker（Posey / Bouquet / Abundant，含推导价格，等宽数字）、VaseToggle（'+ Vase · glass, $12' — 在照片旁添加绘制的花瓶图标）、日期选项行（若在截单前则为今天，否则为明天 + 6 天，周日禁用 'we rest'）、留言字段占位符（'Gift note (optional) — we write it on the card'）以及 'Add — $42'（实时，Leaf 填充）。卡片在桌面端展开，在移动端堆叠滚动。五款不同的花束与五张不同的照片一一对应（主视觉照片绝不重复用作产品卡）；Tuesday Tulips 展示郁金香，White Noise 展示白色毛茛和茉莉，First Blush 展示腮红玫瑰，Saturday Market 展示市集包装，The Poppy Argument 展示罂粟 — 每张照片实际展示其命名的花卉。
   布局：Petal 背景。4 栏 20px 间距（1024px 以下 2 栏，640px 以下 1 栏）；卡片使用 Card 1px Rule 边框 18px 内边距；照片顶部 4:3 宽高比；价格按钮全宽。
5. **留言卡片** — 在目录与抽屉逻辑之间是 MessageCard 演示条：'The card, before we write it' — 一张绘制的留言卡（Card，1px Rule 边框，Poppy 丝带角），以 Lora 斜体预览当前草稿，附一行 'Handwritten, in actual ink, by whoever wraps the flowers.' 和一个小钢笔图标。这是添加流程的组件（留言字段位于每张卡片上）；该条解释其后续处理。留言卡放大显示一行手写风格示例和签名占位符，桌面端显示在字段旁，移动端显示在其上方，并带有一个微妙的眉题。
   布局：Cream Blush 色带，两栏：绘制的卡片 4 栏，说明文字 6 栏偏移 2；72px 内边距。
6. **购物车抽屉与结账** — CartDrawer：Leaf Deep 35% 遮罩；抽屉在 Card 上从右侧滑入（380px）：'Your flowers' 标题、行项目（照片缩略图、名称、尺寸 · 花瓶行、日期、留言预览截断至 28 字符、数量步进器、行价格等宽数字）、配送说明（'Riding to [CITY] addresses, Tue–Sat'）、小计、'Checkout' 主按钮，附说明 'This demo takes no payment — it ties the order with ribbon and saves it here.' PlacedCard：Poppy 色 'ORDER TIED' 印章、打字机效果订单号 'PP-####'、'Delivering [DAY] between 4pm and 7pm.'、在绘制的卡片上回显留言、'Another bouquet'（清除）和 'Back to the shop'。持久化在 localStorage 中。
   布局：抽屉全高靠右，20px 内边距，行可滚动；结账在抽屉内以 320ms --ease-io 切换。
7. **订阅、评价与养护** — 区块 id='subscriptions'。眉题 'EVERY WEEK, OR EVERY MONTH' 和三张卡片：'The Weekly Post' — 'A fresh hand-tied bouquet every Friday · from $36/week'；'The Monthly Hearth' — 'One abundant arrangement on the first of the month · from $58/month'；'Office Fridays' — 'Desk-sized poseys for the whole team · quoted per floor'。说明文字：'Pause for holidays, pollen season, or heartbreak — two taps, no calls.' 评价（id 'reviews' 隐含在区块中）：'"The card message came out better than what I sent them. I''ve stopped trying."' — 'Rosa M., monthly'；'"Ordered at 1:58pm, delivered by 5. I checked the clock twice."' — 'Dan O., same-day convert'；'"My mother now refers to Thursday as tulip day. This is their fault."' — 'Priya S., weekly'。养护（id='care'）：三行带图标 — 'Trim 2cm, cold water, every other day'；'Keep off the radiator and out of the fruit bowl (apples are gossips)'；'Swap the sugar pill for a penny — old florist''s trick, works on tulips'。
   布局：订阅使用 Petal 色带（3 张卡片，Card 表面）；评价在 Cream Blush 上（3 栏）；养护为细线分隔的三条，56px 内边距。
8. **页脚** — Leaf Deep 背景，Card 色调文字。三栏：1）字标 + '[SHOP]'，其下为 'Cut, wrapped, delivered · [CITY]'。2）'The shop'：'14 Marigold Lane, [CITY]'、hello@ + emailDomain、'(207) 555-0173'。3）'Around'：Bouquets、Subscriptions、Care，以及 'Weddings & events — write us'（mailto）。底部行：'© [SHOP]. Stems change; the ribbon doesn''t.'
   布局：垂直内边距 64px，3 栏，底部行在 Card/15% 分隔线上方 32px。768px 以下：堆叠。

## 资源
- 图片：为本设计制作的模板照片（可随模板自由再分发）。用 curl -L -o 将每张图片下载到 public/images/：https://media.vibefather.ai/assets/1187bf3d-39e4-4025-a1ee-f4a5339d9f06/hero-bucket.webp → public/images/hero-bucket.webp（Hero、meadow-post 卡片；object-position 50% 55%；alt 'A galvanized bucket of mixed stems in morning light'）；https://media.vibefather.ai/assets/1187bf3d-39e4-4025-a1ee-f4a5339d9f06/market-wrap.webp → public/images/market-wrap.webp（saturday-market、tuesday-tulips；alt 'A paper-wrapped bouquet on a market table'）；https://media.vibefather.ai/assets/1187bf3d-39e4-4025-a1ee-f4a5339d9f06/blush-rose.webp → public/images/blush-rose.webp（first-blush、white-noise；alt 'Blush garden roses with soft astilbe in a glass jar'）；https://media.vibefather.ai/assets/1187bf3d-39e4-4025-a1ee-f4a5339d9f06/hearth-amber.webp → public/images/hearth-amber.webp（hearth-side；alt 'Amber mums and dried grasses against a dark shelf'）；https://media.vibefather.ai/assets/1187bf3d-39e4-4025-a1ee-f4a5339d9f06/wild-stems.webp → public/images/wild-stems.webp（wild-thursday；alt 'A loose wild arrangement of leftovers made beautiful'）；https://media.vibefather.ai/assets/1187bf3d-39e4-4025-a1ee-f4a5339d9f06/poppy-argument.webp → public/images/poppy-argument.webp（poppy-argument；alt 'Red poppies and wheat with one dramatic branch'）。共六个文件。
- 图片：在项目根目录写入 ASSETS.md，包含一张表：path、source URL、author、license——每张照片一行（source 为 'media.vibefather.ai, made for this template'，author 为 'VibeFather'，license 为 'Distributed with the template'），另加 @fontsource/lora 和 @fontsource-variable/albert-sans（OFL-1.1）以及 lucide-react（ISC）的行。绝不要用图库网站或含人物、面孔、手或可读招牌的图片替换照片。
- 图标：仅使用 lucide-react：ShoppingBasket、Plus、Minus、Check、X、Truck、CalendarDays、PenLine、Sun、Droplets、Scissors、Leaf。描边宽度 1.75，16–24px，颜色继承。便签卡、花瓶图形、花瓣、丝带印章和 favicon 为绘制的 SVG。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的 rect，rx 为 9，填充 #33523F，一个 Card（#FFFDFA）郁金香图形（两片花瓣和一根茎），带一个 Poppy（#D4574B）丝带交叉。无其他标志：店名始终以文字排版呈现；无真实支付标识。
- 字体：安装 @fontsource/lora 和 @fontsource-variable/albert-sans，并按 Setup 中所述在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包进 dist/。
- 图片：以代码绘制：便签卡和丝带角、花瓶图形、飘动的花瓣、ORDER TIED 印章、日期标签和 favicon。无其他位图；无插画；无地图瓦片。

## 禁止事项
- 无后端、无表单提交、不向任何 API 发起 fetch 请求：购物车、留言和订单仅保存在浏览器中（localStorage）；结账页面声明不收取任何付款；截单倒计时使用客户端时钟，并对此作出说明。
- 此单页上的所有链接均为锚点（./index.html#shop、#subscriptions、#care）以及页脚的 mailto。
- 一切资源自托管：字体通过 Fontsource 引入，图标以 npm 包或内联 SVG 形式使用，图片下载至 public/images/。不得使用 CDN 的 <script> 或 <link> 标签，不得使用 Google Fonts，不得使用分析工具。
- 生产构建：压缩、无 source map、不将 src/ 复制到 dist/、使用单一命令 npm run build、输出位于 dist/ 且小于 10 MB。
- 不得出现真实花店、配送品牌或支付标识；不得使用含人物、面部或手部的照片；不得出现可辨识的招牌；所有花茎、价格和评价均为虚构。
- 任何位置不得出现日期或年份；日期选择器显示星期标签（Today/Tomorrow 然后是星期名称），不显示完整日期；网站永不显示今天的日期。
- 除页脚可选的署名链接外，网站内绝不提及 VibeFather 或任何其他品牌；所有文案均为虚构的美式英语。
- 遵循 prefers-reduced-motion：无脉冲、花瓣、打字机效果或计数动画；倒计时仍然跳动（它是信息，不是装饰）；颜色/边框的悬停效果保留。
- 页面必须在 1440x900 桌面端和 390x844 移动端正常工作，控制台零报错；尺寸/日期/留言控件、抽屉和结账仅用键盘即可操作，且焦点环可见；抽屉打开时须锁定焦点。
- 文案保持具体：不得使用 lorem，不得使用“emotions through flowers”之类表述；每个价格、花茎列表和营业时间均存放于 src/content.ts。

---
— Prompt by VibeFather · https://vibefather.ai/t/florist-shop-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
