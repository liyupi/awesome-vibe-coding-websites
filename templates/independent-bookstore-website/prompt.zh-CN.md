> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 独立书店网站

完全按照下面的描述构建这个网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [SHOP] 打造的单页网站，这是一家位于 [CITY]、专营 [GENRE] 的独立书店。它必须闻起来有纸的味道：店员推荐（含虚构书名）、以星期几命名的活动、一个读书俱乐部、三张照片里的书店、一张书商肖像（AI 生成的虚构人物）、带“现在营业”状态的营业时间，以及一个在客户端确认的到店取货订购表单。单页：index.html，包含各区块（#picks、#events、#club、#shop、#order）。一切都在浏览器中运行；不会提交到任何地方。

- 受众：宁愿逛书架也不愿刷信息流的邻里读者和送礼者：25–75 岁，一旦赢得忠诚度便很忠诚。他们想知道今晚的活动、本月的俱乐部选书，以及一种无需账号就能求购某本书的方式。
- 目标：填满取货名单和活动座位。访客在十秒内感受到书架并看到订购 CTA；在两分钟内读完一条推荐和一场活动。
- 语气：书商式的闲聊：温暖、有主见，一辈子只用一个感叹号。虚构书名配诚实的一句话书评。关于电子阅读器的冷幽默恰好一次。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（MIT）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/bitter（OFL-1.1）、@fontsource-variable/nunito-sans（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 react-ts 模板通过 npm create vite@latest 脚手架创建。项目根目录下有一个 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist'，sourcemap false，assetsInlineLimit 0 }。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将 Design 下的每个颜色以 kebab-case 键添加到 theme.extend.colors（papercream、kraft、card、inkbrown、mocha、mustard、mustard-deep、forestrule、rule），并设置 fontFamily display ['Bitter', 'Georgia', 'serif']、sans ['Nunito Sans Variable', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 8px，并添加 maxWidth { container: '1120px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/bitter/500.css'、'@fontsource/bitter/700.css'、'@fontsource/bitter/500-italic.css' 和 '@fontsource-variable/nunito-sans'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（每个字符串、精选、活动、读书会文案、营业时间和图片路径，带类型），src/lib/brand.ts（shopSlug = [SHOP] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 shopSlug + '.com'），src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键前缀为 shopSlug + ':'），src/lib/useOpenNow.ts（根据营业时间表和客户端时钟判断 open-now）。
  - 状态：src/store/order.ts 是一个小型外部 store（useSyncExternalStore），持有 { title, author, day, name, phone, sent }，持久化到 localStorage 键 shopSlug + ':order'。
  - src/components/ 中的组件：Header.tsx、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、Footer.tsx、TicketStub.tsx（用代码绘制的事件卡片边缘图案）；Hero.tsx、Picks.tsx（PickCard.tsx 位于带上一页/下一页按钮的 scroll-snap 轮播中）、Events.tsx（EventCard.tsx）、BookClub.tsp → BookClub.tsx、ShopStrip.tsx（ShopPhoto.tsx）、BooksellerNote.tsx、OrderForm.tsx（DayChips.tsx、Confirmed.tsx）、HoursBlock.tsx（OpenNowPill.tsx）。src/pages/Home.tsx 组合它们。
  - 在首次构建之前，使用 curl -L -o 将 Assets 下列出的每张图片下载到 public/images/ 中，并使用给定的确切文件名。构建本身从不获取任何内容。
  - public/favicon.svg 如 Assets 下所述。index.html：lang en，<meta name='theme-color' content='#F8F3E6'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[SHOP] — An independent bookstore in [CITY]</title>。
  - 在项目根目录下按 Assets 下所述编写 ASSETS.md。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张图片。保持在 10 MB 以下。

## 变量
- [SHOP] — 店铺名称（默认：“Dog-Eared & Sons”）。虚构的店铺名称。用于字标、标题、页脚、电子邮件（hello@ + 不含连字符的 shopSlug + .com）以及 localStorage 键。绝不使用真实店铺。
- [CITY] — 城市（默认：“Portland, Maine”）。店铺所在地。用于标题、主视觉区、营业时间区块和页脚。可以使用真实城市；街道为虚构。
- [GENRE] — 专营品类（默认：“fiction, poetry and the odd map”）。店铺库存最深的品类，小写。决定主视觉标语、精选书目的风格和读书会的语调。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/independent-bookstore-website（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 纸奶油色（Papercream）`#F8F3E6` — 全站页面背景。
- 牛皮纸色（Kraft）`#EFE7D2` — 交替区块背景（活动、俱乐部）、标签、悬停填充。
- 卡片色（Card）`#FFFEF8` — 精选卡片、活动票根、订单面板、确认页。
- 墨棕色（Inkbrown）`#3A2E22` — 标题和正文文字、图标颜色。
- 摩卡色（Mocha）`#7C6A55` — 次要文字、说明文字、眉题、关闭状态。
- 芥末黄（Mustard）`#D9A420` — 唯一强调色：主按钮、活动日期、俱乐部丝带、焦点环、价格圆点。
- 深芥末黄（Mustard Deep）`#B8871A` — 悬停和按下状态。
- 森林线色（Forestrule）`#5F7155` — 安静的第二色：营业圆点、俱乐部藤蔓、店员推荐丝带。
- 分隔线色（Rule）`#E1D8C2` — 1px 细线、卡片边框、输入框边框、票根打孔线。

### 字体排印（Typography）
- 展示字体：H1、H2、书名、活动名称、字标 — Bitter 粗衬线体，纸质感和温暖感：Bitter（OFL），字重 500/700
- 文本与界面：正文、眉题、按钮、表单、说明文字；营业时间使用等宽数字：Nunito Sans（OFL），字重 400/600/700

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。容器最大宽度 1120px，居中，桌面端侧边内边距 48px，平板端 32px，640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面端 96px，1024px 以下 72px，640px 以下 56px。字号比例：H1 clamp(42px, 6.2vw, 76px) Bitter 700，行高 1.05；H2 clamp(28px, 3.8vw, 44px) Bitter 700；书名 19px Bitter 700；导语 Nunito 400 17.5px / 1.65 Inkbrown 90% 不透明度；正文 15.5px / 1.7（最大宽度 62ch）；眉题 Nunito 700 12px 大写 字间距 0.16em Mocha；说明文字 13px Mocha。按钮：高度 50px，Nunito 700 14px。主按钮：Mustard 填充，Card 文字。次按钮：1px Inkbrown 边框。输入框：高度 50px，1px Rule 边框，Card 填充，聚焦时 Mustard 边框。全局焦点环：2px Mustard 轮廓，偏移 3px。
- 圆角：卡片、按钮、输入框和照片为 8px。仅胶囊、营业圆点和精选丝带使用 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现和轮播；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于表单切换。纸质感和不慌不忙。
- 动效：显现：包裹在 <Reveal> 中的区块初始 opacity 0、translateY(12px)，当 15% 可见时在 750ms 内以 --ease-out 落定（Motion whileInView，viewport once）。相邻元素错开 75ms。
- 动效：首屏：书堆照片从 1.04→1.0 缩放，历时 2200ms；H1 上升；一个小手绘书签在眉题旁滑入一次。
- 动效：精选轮播：水平滚动吸附，带前后箭头按钮；卡片悬停上浮 3px，封面倾斜 2deg；丝带（店员名字）淡入。
- 动效：活动票根：卡片进入视口时打孔线虚线绘入；悬停上浮 3px，芥末黄日期方块变亮。
- 动效：俱乐部：丝带绘制其尾部一次；加入提示交叉淡入淡出。
- 动效：订单表单：日期标签选中时填充 Mustard（150ms）；无效提交抖动 4px 并显示友好的内联标签；发送时切换为 Confirmed（320ms --ease-io）——一个手绘书签印章滑入，'On the list!' 'We''ll email when [TITLE] hits the counter, [NAME].' 以及预填的 'Change the order'。持久化在 localStorage 中。
- 动效：链接：.link-draw 在悬停和 focus-visible 时以 280ms 生长出 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 无轮播吸附动画（仍可滚动），无倾斜、绘制或错开；一切静止；颜色/边框悬停保留。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：温暖的真实摄影，全部六张为本模板以统一风格制作：琥珀色店铺灯光、木质书架、纸张和可选的猫。书籍封面仅以抽象艺术呈现——生成空白书脊和带纹理的封面，无可读标题（无文字排版）；店铺的"招牌"从不显示可读文字。书商肖像为 AI 生成的虚构人物（围裙、书架中段、温暖微笑）——占位员工照片。无顾客面孔、无可读招牌、无标志。每张照片使用 object-fit cover，object-position 见 Assets 部分，8px 圆角，无阴影。说明文字为 Nunito 13px Mocha。代码绘制：favicon、书签字形、票根打孔线、丝带和印章。图标：仅 lucide-react，描边宽度 1.75。

## 页面与区块
### 商店（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[SHOP] = Dog-Eared & Sons，[CITY] = Portland, Maine，[GENRE] = fiction, poetry and the odd map）。将每个字符串和列表放入 src/content.ts 并从中渲染。若任何变量值不同，请重写主视觉、全部六个精选（虚构的书名/作者/一句话书评）、四个活动、读书会文案、商店图片说明和订购文案，使其对新商店具体且可信，保持相同的结构和数量。所有书籍、作者和活动均为虚构；封面保持抽象/空白。营业时间：周一至周五 10:00–19:00，周六 10:00–20:00，周日 11:00–16:00。事实：地址 '142 Wharf Street, [CITY]' 为虚构；电话 (207) 555-0178；自取订单在下一个营业日备好；读书会为每月最后一个周四（以星期几命名，从不写日期）。精选（书名 · 作者 · 书评 · 封面照片）：'The Lighthouse Keeper''s Ledger' 'Ida Bellweather (invented)' 'a quiet storm of a book; the ledger does what the lighthouse cannot' picks-1.webp；'Nine Ways to Fold a Map' 'Tomás Reyes (invented)' 'funnier than a book about cartography has any right to be' picks-2.webp；'The Orchard Underwater' 'Gwen Ha (invented)' 'generational, damp, unforgettable' picks-3.webp；'Small Gods of the Interchange' 'Alfie Osei (invented)' 'rush-hour mythology; read it on the bus for full effect' picks-4.webp；'A Field Guide to Leaving' 'Marguerite Vale (invented)' 'poetry that checks your ticket and lets you board anyway' picks-5.webp；'The Tuesday Detectives' 'J. W. Strong (invented)' 'cozy crime; the solution is a scone' picks-6.webp。活动：'Thursday · Reading: Ida Bellweather' 'from the ledger itself, 7pm, chairs early'；'Saturday · Story Hour (ages 3–8)' 'dragons, snacks, gentle chaos, 10:30am'；'Thursday (last) · Book Club' 'this month''s pick below; new faces get the good chair'；'Saturday (late) · Poetry & Vinyl Night' 'bring a record, bring a poem, 8pm'。读书会：本月 'The Orchard Underwater' — 'fourteen chapters, one long-held breath; we''ll talk about the ending, the water, and whether Gwen Ha is being merciful.'
   布局：不适用
   动效：不适用
2. **页眉** — 左侧：字标 '[SHOP]'（Bitter 700 19px），下方为 'Independent bookstore · [CITY]'（10px 大写 Mocha），链接至 ./index.html。右侧导航（Nunito 600 14px）：'Picks' → #picks，'Events' → #events，'Book club' → #club，'The shop' → #shop；一个小号 Mustard 色 'Order a book' → #order。800px 以下：字标 + 订购按钮。
   布局：顶部吸附，高度 72px，Papercream/95% 模糊，Rule 边框。
3. **主视觉** — 两栏。左侧：眉题 'FICTION · POETRY · [CITY]'；H1 'The shelves' / '*remember you.*' 导语（最大宽度 500px）：'[SHOP] stocks [GENRE] — recommended by people who have actually read them, wrapped in brown paper if you ask nicely.' 主按钮 'Order for pickup' → #order 和次按钮 'This week''s events' → #events；信任行：'Order ready next open day'；'Wrapped free'；'The cat is friendly (sample)'。右侧：shop-stacks.webp（4:3），配文 'The fiction wall, mid-restock'。
   布局：Papercream 背景，顶部垂直内边距 104px；左侧 6 列，右侧 5 列偏移 1。
4. **员工精选** — 区块 id='picks'。眉题 'STAFF PICKS' 和 H2 'Six books we keep re-shelving.' 一个滚动吸附轮播的 PickCards：封面（3:4，抽象艺术，无可读标题）、书名、虚构作者、一句话书评（斜体 Bitter）、一条 Forestrule 色带配员工姓名（'Ida''s pick' 风格姓名：Ida、Sam、Priya、Owen、Rosa、Jun）。说明：'All titles invented for this template — bring us yours and we''ll argue politely about them.'
   布局：Papercream 背景。轮播：卡片宽 260px，间距 16px，吸附；箭头位于右上角；640px 以下原生滑动。
5. **活动** — 区块 id='events'。眉题 'ON THE CALENDAR' 和 H2 'FOUR RECURRING NIGHTS.' EventCards 作为票根样式（Mustard 日期方块配星期首字母、撕边、名称、一行文字）：活动名册。说明：'Recurring weekly or monthly — sign up for the email at the counter; it arrives like a good chapter, rarely.'
   布局：Kraft 背景。2x2 票根网格，间距 20px；票根置于 Card 上，右边缘绘制撕线；悬停上浮 3px。
6. **读书会** — 区块 id='club'。眉题 'BOOK CLUB · LAST THURSDAYS' 和一张顶部带色带的卡片：本月精选封面（复用 picks-3.webp）、书名、作者和读书会文案；一条注释 'New members: show up, no homework beyond the book; the good chair is genuinely a good chair.'
   布局：Papercream 背景；一张宽 Card，封面在左（3:4，200px），文字在右；Forestrule 色带绘制在左上角。
7. **商店** — 区块 id='shop'。眉题 'THE SHOP' 和 H2 'THREE CORNERS.' ShopStrip 照片配说明：shop-counter.webp 'The counter — where recommendations happen'；shop-nook.webp 'The reading nook — one chair, strong opinions'；shop-window.webp 'The window — new arrivals face the street'。旁边是 BooksellerNote：bookseller-pru.webp 肖像（3:4），配文 'Pru, holding the fort — a fictional bookseller' 和注释：'Ask Pru for [GENRE] and she''ll walk you to the shelf; ask her for 'something like that one book'' and she''ll narrow her eyes, then find it.'
   布局：Kraft 背景。照片三列，间距 16px（4:3）；注释在桌面端占 4 列（肖像 + 文字），900px 以下堆叠。
8. **订购表单与页脚** — 区块 id='order'。眉题 'ORDER FOR PICKUP' 和 H2 'Tell us the book; we''ll do the hunting.' OrderForm 置于 Card 上：书名输入框（占位符 'Title — invented or classic, we''ll try'）、作者输入框（可选）、DayChips（接下来 3 个营业日，以星期几命名）、姓名 + 电话；主按钮 'Add to the pickup list'，配说明 'Saved in this browser — the real page emails the shop. Nothing is sent here.' 确认后：书签印章、'On the list!' 'We''ll email when [TITLE] hits the counter, [NAME].' 自取日回显、'Change the order' 预填；持久化于 localStorage。HoursBlock 配 OpenNowPill 置于表单旁。页脚（Inkbrown，奶油色文字）：字标、'Independent bookstore · [CITY]'、'142 Wharf Street'、(207) 555-0178 tel:、hello@ + emailDomain；底行 '© [SHOP]. All titles invented; the cat is real (sample).'
   布局：Papercream 背景；表单 7 列，营业时间 4 列偏移 1；页脚三部分行配底行。

## 资产（Assets）
- 图片（image）：最终资产清单（6 个文件）：https://media.vibefather.ai/assets/28a1cac7-db84-41c5-aa4a-f2aad6035253/shop-stacks.webp → public/images/shop-stacks.webp（Hero；alt 'Wooden shelves of books in warm shop light'）；.../covers-sheet.webp → public/images/covers-sheet.webp（一个 3x2 网格，包含六幅抽象书籍封面艺术作品——每个单元格都有独特的纹理/配色，绝对没有可读文本；轮播通过 object-position 裁剪每个单元格）；.../shop-counter.webp（alt 'A wooden shop counter with brown-paper-wrapped books'）；.../shop-nook.webp（alt 'A reading nook with one armchair and a lamp'）；.../shop-window.webp（alt 'A shop window with new books facing the street, no readable spines'）；.../bookseller-pru.webp（alt 'Pru holding a book, a fictional bookseller'）。编写 ASSETS.md，列出全部六个文件，以及字体和图标行。
- 图标（icon）：仅使用 lucide-react：BookOpen、CalendarDays、ArrowLeft、ArrowRight、Check、Clock、Phone、Mail。描边宽度 1.75，16–24px，颜色继承。书签字形/印章、存根穿孔、丝带和 favicon 为绘制的 SVG。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的 rect，rx 7，填充 #3A2E22，一个 Mustard（#D9A420）书签字形。没有其他 logo：店铺名称始终以文字形式设置。
- 字体（font）：安装 @fontsource/bitter 和 @fontsource-variable/nunito-sans，并在 src/fonts.ts 中按 Setup 中列出的方式导入它们。Vite 将 woff2 文件打包到 dist/ 中。

## 禁止事项
- 无后端、无表单提交、不向任何 API 发起 fetch 请求：自取订单仅保存在浏览器中（localStorage），并在页面上说明这一点；tel: 链接由电话号码数字构建。
- 此单页上的所有链接均为锚点（./index.html#picks、#events、#club、#shop、#order）外加页脚的 mailto。
- 不使用真实书籍、作者、出版社或封面图：所有书名均为虚构，封面为抽象设计、不含排版文字；不使用出版社标志或出版印记。
- 一切资源自托管：字体通过 Fontsource 加载，图标以 npm 包或内联 SVG 形式引入，图片下载至 public/images/。不使用 CDN 的 <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具。
- 生产构建：压缩、无 source map、不将 src/ 复制到 dist/、单条命令 npm run build、输出至 dist/ 且小于 10 MB。
- 书商肖像为 AI 生成的虚构人物，非任何真实个人；不出现顾客面部；任何照片中无可读的标牌或书脊文字。
- 任何地方不出现日期或年份；活动以星期几命名并循环重复；日期标签显示星期名称；网站从不显示当天日期。
- 除页脚可选的署名链接外，网站内绝不提及 VibeFather 或任何其他品牌；所有文案均为虚构的美式英语。
- 尊重 prefers-reduced-motion：轮播仍可滚动，无倾斜/绘制/交错动画；一切处于静止状态；颜色/边框悬停效果保留。
- 页面必须在 1440x900 桌面端和 390x844 移动端正常工作，控制台零报错；轮播、标签和表单仅用键盘即可操作，且焦点环可见。
- 保持书商温暖语气：无 lorem，无连锁店腔调；每条推荐、活动和营业时间均存放于 src/content.ts。

---
— Prompt by VibeFather · https://vibefather.ai/t/independent-bookstore-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
