> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 新闻杂志主页

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一份为 [PAPER] 打造的两页杂志，[PAPER] 是覆盖 [CITY] 的 [BEAT] 领域的周报。首页：报头、一篇配大幅照片的头条报道、一个次级栏、三个版块首页（城市 / 文化 / 商业）以及一个新闻通讯订阅框；文章页（?a=<slug>）采用易读的排版，包含事实框和相关报道。页面：index.html、article.html?a=<slug>（第一篇文章无需参数）。一切都在浏览器中运行；不会向任何地方提交内容。

- 受众：仍然阅读的读者：端着咖啡、有二十分钟闲暇的本地人，以及想快速了解头条报道的浏览者。页面必须让人感觉像一家机构，而不是信息流。
- 目标：阅读头条报道并订阅新闻通讯。访客在十秒内看到报头、头条标题和照片；在两分钟内进入文章正文。
- 语气：周报式的冷峻：平实的陈述句、温和的机智、没有标题党。标题承载报纸的声音。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/playfair-display（OFL-1.1）、@fontsource/pt-serif（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）
- 构建（Build）：`npm run build` → 在 `dist/` 中生成静态文件。无后端、无服务端代码、无外部 API。
- 安装配置（Setup）：
  - 使用 react-ts 模板通过 npm create vite@latest 搭建脚手架（如果最新模板面向更新的主版本，则固定版本）。项目根目录下有两个真实的 HTML 页面：index.html（入口 src/main-index.tsx）、article.html（入口 src/main-article.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0, rollupOptions { input { index: resolve(__dirname, 'index.html'), article: resolve(__dirname, 'article.html') } } }。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './article.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的每种颜色以 kebab-case 键添加到 theme.extend.colors 中（paper、panel、line、line-2、ink、softink、red、red-deep、red-mist、slateink、good），并将 fontFamily 的 display 设为 ['Playfair Display', 'Georgia', 'serif']，serif 设为 ['PT Serif', 'Georgia', 'serif']，sans 设为 ['Inter Variable', 'system-ui', 'sans-serif']。将 borderRadius 的 DEFAULT 设为 2px，并添加 maxWidth { container: '1280px', read: '680px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/playfair-display/700.css'、'@fontsource/playfair-display/900.css'、'@fontsource/pt-serif/400.css'、'@fontsource/pt-serif/700.css'、'@fontsource/pt-serif/400-italic.css' 和 '@fontsource-variable/inter'；从两个入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（报纸内容：报头、引题、版次行、栏目、文章 — { slug, section, kicker, headline, standfirst, byline, photo?, photoAlt, body: string[]（段落）, pullQuote?, factBox: { title, rows: [label, value][] }?, related: string[] }，每个字符串都有类型）、src/lib/brand.ts（paperSlug = [PAPER] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 paperSlug + '.com'）、src/lib/storage.ts（安全的 localStorage get/set，用 try/catch 包裹，键为 paperSlug + ':news'）、src/lib/route.ts（读取 ?a=，解析或回退到第一篇文章 — 绝不出现未找到）。
  - 状态（State）：src/store/newsletter.ts 是一个小型外部 store（useSyncExternalStore），持有 { email, sent } 并持久化到 localStorage。
  - 组件位于 src/components/：Masthead.tsx（Nameplate.tsx、SectionBar.tsx）、SlimBar.tsx（在报头滚出视口后出现）、Footer.tsx、NewsletterBox.tsx；首页：LeadStory.tsx、SecondaryRail.tsx（RailItem.tsx）、SectionFront.tsx（FrontCard.tsx、HeadlineRow.tsx）；文章页：ArticleHeader.tsx、ArticleBody.tsx（DropCap.tsx、PullQuote.tsx、FactBox.tsx）、RelatedList.tsx。页面：src/pages/Front.tsx、Article.tsx。
  - DropCap：第一段的首字母使用 Playfair 900，约 3.4em，左浮动，右边距 8px，红色（Red）。PullQuote：PT Serif 斜体 24px，位于细线之间，顶部为 3px 红色（Red）线。FactBox：文章流中一个带 Line 边框的盒子（桌面端：右浮动，300px），标签使用近似等宽的 Inter 600。
  - SlimBar：固定顶部，48px，Paper 95% 模糊，当报头底部越过视口顶部时出现（translateY -100%→0，200ms）；包含小号报头、栏目锚点和 Subscribe。
  - 在首次构建之前，使用 curl -L -o 将资源（Assets）下列出的每张图片下载到 public/images/ 中，并使用给定的确切文件名。构建本身从不获取任何内容。
  - public/favicon.svg 如资源（Assets）中所述。index.html：lang en，<meta name='theme-color' content='#FAF8F2'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[PAPER] — [CITY]'s weekly</title>；article.html 在加载时设置 document.title。
  - 如资源（Assets）中所述，在项目根目录写入 ASSETS.md。
  - dist/ 包含两个 HTML 文件、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张图片。保持在 9 MB 以下。

## 变量
- [PAPER] — 报纸名称（默认值：“The Marlow Ledger”）。虚构报纸的名称，采用“The …”风格效果较好。用于驱动报头、标题、页脚和电子邮件（news@ + 不含连字符的 paperSlug + “.com”）。绝不使用真实出版物。
- [CITY] — 城市（默认值：“Marlow”）。该报纸报道的虚构城市。听起来像真实地名的虚构城市；用于驱动头条、署名中的发稿地和引题。虚构城市可确保演示安全。
- [BEAT] — 报道范围（默认值：“city hall, the riverfront and the people who use both”）。一个全小写短语，说明该报纸的报道范围。用于改写引题、版块简介和新闻通讯推介语。保持具体。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/news-magazine-homepage（默认值：是；删除此行即可移除）

“页面与版块”下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按版块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 纸张色（Paper）`#FAF8F2` — 全站页面背景 — 陈年新闻纸的暖调。
- 面板色（Panel）`#FFFFFF` — 新闻通讯框、事实框。
- 线条色（Line）`#D9D4C7` — 1px 细线：网格、分隔线、分栏线。
- 线条色 2（Line 2）`#1E1B16` — 报头的 2px 粗线和版面头条顶部的粗线。
- 墨色（Ink）`#1E1B16` — 标题和正文墨色。
- 柔墨色（Soft Ink）`#5D594E` — 导语、署名行、图注、眉题。
- 红色（Red）`#B3282D` — 唯一强调色：栏目标签条、首字下沉、引文线、链接、主按钮、焦点环。
- 深红（Red Deep）`#8E1F23` — 悬停和按下状态。
- 红雾（Red Mist）`#F6E7E4` — 栏目标签芯片、选中状态。
- 石板墨（Slate Ink）`#1A1210` — 红色填充上的文字。
- 成功色（Good）`#3E7A52` — 新闻通讯成功提示行。

### 字体排印（Typography）
- 展示字体：报头名称、头条标题、版面头条 — Playfair Display，厚重且具机构感：Playfair Display (OFL)，字重 700/900
- 文章衬线体：文章正文、导语、引文 — PT Serif：PT Serif (OFL)，字重 400/700
- 无衬线体：眉题、署名行、栏目条、图注、UI — Inter：Inter (OFL)，字重 400/500/600

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。容器最大宽度 1280px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px；文章阅读栏最大 680px，保持 34ch 的行宽。首页为 12 列网格，列间距 24px，由 1px 线条色分隔线划分（真实边框，而非间隙 — 报纸观感）。版面垂直节奏：各版面之间 40px。字号体系：报头名称 Playfair 900 clamp(44px, 7vw, 84px) letter-spacing -0.01em；头条标题 Playfair 900 clamp(32px, 4.6vw, 56px) line-height 1.04；版面卡片标题 Playfair 700 24px；标题行 PT Serif 700 17px；导语 PT Serif italic 17px 柔墨色；文章正文 PT Serif 18px / 1.75；眉题 Inter 600 11px 大写 letter-spacing 0.18em 红色；署名行 Inter 500 12.5px 柔墨色；图注 Inter 400 12.5px 柔墨色。按钮：高度 44px，Inter 600 13.5px；主按钮红色填充配白色文字。输入框：高度 44px，面板色填充，1px 线条色边框，聚焦时红色边框 + 2px 偏移环。全局焦点：2px 红色轮廓，3px 偏移。
- 圆角：全局 2px — 印刷品，而非应用。新闻通讯框和事实框同样 2px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1)。纸张落定；没有弹跳。
- 动效：显现：故事区块进入时上移 8px，历时 450ms（Motion whileInView，仅一次）；首页按网格行错开（60ms）。
- 动效：头条照片：从 scale 1.02 落定，历时 1400ms，仅一次，然后静止。
- 动效：标题悬停：PT Serif 标题行将其红色索引条右移 4px（140ms），标题墨色保持不动 — 仅链接通过 .link-draw 显示下划线。
- 动效：SlimBar：触发时 translateY -100%→0，历时 200ms；报头回归时再次隐藏。
- 动效：新闻通讯提交：交叉淡入到成功色提示行，历时 240ms（淡出 220ms）。
- 动效：文章页：页头区块落定 8px；首字下沉和引文随其段落一同显现；事实框滑动 6px。
- 动效：prefers-reduced-motion: reduce — 无显现、无照片落定、无条块位移；一切静止。在 index.css 中使用 CSS @media，并配合 Motion 的 useReducedMotion。
- 图像：六张纪实编辑风格照片，为本模板以统一风格制作：自然光、虚构城市的抓拍场景 — 河滨市场清晨、市政厅楼梯间、印刷厂印刷机、小型演出场地人群（面部模糊）、黄昏时分的主街、图书馆阅览室。无可读文字、无标识、无可辨认的人物（人群面部保持模糊）。照片 object-fit cover，2px 圆角，1px 线条色描边；图注使用 Inter 12.5px 柔墨色，附示例署名 'Ledger staff photo (fictional)'。图标：仅使用 lucide-react，描边宽度 1.75。favicon 为手绘 SVG。

## 页面与区块
### 首页（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值撰写（[PAPER] = The Marlow Ledger，[CITY] = Marlow，[BEAT] = 市政厅、河滨以及使用这两者的民众）。将每个字符串、文章和图片说明放入 src/content.ts 并从中渲染。若任何变量不同，请重写每个标题、导语、署名和正文，使其对该报纸和城市而言具体且可信，同时保持相同的结构和数量（1 篇头条 + 2 篇侧栏报道 + 3 个版面 ×（1 张卡片 + 3 行标题），6 篇含完整正文的文章，1 个新闻通讯框，全部六篇的文章页）。文章（slug · 版块 · 眉题 · 标题 · 导语 · 署名 · 照片）：'ferry-morning' city 'RIVERFRONT' 'The 6:10 ferry is Marlow's quietest institution' 'Two hundred commuters, one kettle, and a deckhand who knows every name' 'By Rosa Feld · Ledger staff' ferry-morning.webp；'council-vote' city 'CITY HALL' 'Council votes tonight on the riverwalk lighting plan' 'Seven years, three surveys, one final yes-or-no' 'By Tomas Ruiz · Ledger staff'（无照片）；'press-room' culture 'THE CRAFT' 'The last press in Marlow still smells like ink' 'A family shop, two Heidelbergs, and a stubborn love of paper' 'By Amara Osei · Ledger staff' press-room.webp；'venn-club' culture 'NIGHTLIFE' 'The Venn Club turned its basement into a listening room' 'No phones, no bar chatter — just the band and forty chairs' 'By Luis Park · Ledger staff' venue-crowd.webp；'main-street' business 'MAIN STREET' 'Four new storefronts, one cautious spring' 'Marlow's main street is filling up — carefully' 'By Dana Whitfield · Ledger staff' main-street.webp；'reading-room' culture 'QUIET BEAT' 'The reading room that stayed open late' 'A librarian, a chess set, and the town's unofficial office' 'By Rosa Feld · Ledger staff' reading-room.webp。每篇文章的正文：5–7 段虚构但可信的周报报道；头条和一张版面卡片配有引语和事实框（头条事实框：'The vote at a glance'，行内容为 Tonight 7 PM / Item 12-A / Seats 7；press-room 事实框：'The shop by the numbers'，行内容为 Presses 2 / Years running 41 / Staff 3）。所有姓名、引语和数字均为虚构的示例内容；无真实人物或事件。报头下方的版次行为静态示例文本：'Vol. XII · The weekly edition · Marlow' — 无日期，无时钟。
   布局：不适用
   动效：不适用
2. **报头与版块栏** — 报头：'[PAPER]' 居中（Playfair 900），上方为眉题行 'Covering [BEAT]'（Inter 500 12px Soft Ink），下方为版次行（Inter 400 12px Soft Ink），位于两条 2px Line 2 分隔线之间（相距 4px，经典双线）。下方 SectionBar：CITY / CULTURE / BUSINESS / NEWSLETTER 为 Inter 600 12px 大写链接，悬停时显示红色下划线，以 1px Line 竖线分隔。
   布局：Paper 背景；报头区块高 96px 居中；版块栏高 40px，上下边框为 Line。
3. **头条与次要侧栏** — 带分隔线的 8:4 分栏。左侧（8 列）：LeadStory — 眉题栏（红色 3px 左边线 + Inter 600 眉题），标题（Playfair 900），导语（PT Serif 斜体），宽幅照片（16:9，带说明），署名，以及两段式摘要，结尾为红色 'Continue reading →' 链接至文章页。右侧（4 列，Line 左边框）：SecondaryRail — 'TOP STORIES THIS WEEK' 小标题；两个 RailItems（标题 + 导语，细线分隔）以及位于侧栏底部的 NewsletterBox。
   布局：Paper 背景；分栏带 1px Line 垂直分隔线；上方 40px 垂直内边距。
4. **版块头版** — 三个 SectionFronts 堆叠，每个以 2px Line 2 顶部分隔线和版块标题开头（左侧 Playfair 700 20px 名称，右侧 'More from [section] →' Inter 600 12px 红色）。每个头版：5:7 分栏 — FrontCard（照片 4:3 或 3:2，眉题，Playfair 700 24px 标题，导语，署名）和三行 HeadlineRows（红色序号条 01–03，PT Serif 700 17px 标题，12px Soft Ink 署名）带细线。城市头版使用 council-vote 作为其卡片（无照片：一个 4:3 Line 色调占位面板，带版块字标和 'Photo to come — the artist is on strike (sample)' 说明）；文化头版的卡片为 press-room；商业头版的卡片为 main-street。行内容取自其余文章。
   布局：Paper 背景；头版之间 40px；各头版共享 12 列网格。
5. **新闻通讯框与页脚** — NewsletterBox（也出现在文章页）：Panel 填充，1px Line 边框，2px 圆角 — 小标题 'THE LEDGER LETTER'；一行文字 'One email a week: what the council did, what the river did, and one good thing to do Saturday'；电子邮件输入框 + 主按钮 'Subscribe'；小字 'Sample form — this demo saves nothing anywhere.'；成功状态：Good 行 'Subscribed (in this browser only) — welcome aboard.'。页脚：三列 — 小号报头 + 'news@' + emailDomain；版块栏重复为链接；以及 '© [PAPER]. Every story on this page is invented sample content.' 加上 'Built with a VibeFather template' 链接至 https://vibefather.ai。
   布局：首页上新闻通讯框全宽位于页脚上方（文章页上位于侧栏内）；页脚高 80px，Line 顶部边框。

### 文章页（`article.html`）
1. **文章视图** — 读取 ?a=<slug>；无查询参数时渲染第一篇文章（ferry-morning）。SlimBar 持久显示在顶部。ArticleHeader：眉题 + 版块链接，标题（Playfair 900 最大 44px），导语，署名行（Inter 12.5px Soft Ink：署名 · 'Ledger staff' · '6 min read (sample)'），以及文章有照片时的照片和说明。ArticleBody：段落为 PT Serif 18px/1.75，保持固定行宽；第一段有 DropCap；PullQuote 置于第三段之后（或文章自带的引语）；FactBox 在桌面端浮动于第二段之后的右侧（移动端为文档流内）；内联红色链接（.link-draw）。正文之后：RelatedList（'MORE FROM THE LEDGER' — 文章的三个相关 slug 作为 HeadlineRows）和全宽 NewsletterBox。加载时根据标题设置 document.title。
   布局：Paper 背景；阅读栏最大 680px 居中；事实框浮动于右侧 300px 宽，边距 20px；页脚同首页。

## 资源（Assets）
- 图片（image）：为本设计制作的模板照片（可随模板自由再分发），纪实风格，无可读文字、无标识、无可辨认的面孔。用 curl -L -o 将每张图片下载到 public/images/：https://media.vibefather.ai/assets/41e7e0bf-6d94-4267-9958-6e733113913d/ferry-morning.webp → public/images/ferry-morning.webp（头条报道；alt 'Commuters on a morning river ferry, city skyline behind'）；https://media.vibefather.ai/assets/41e7e0bf-6d94-4267-9958-6e733113913d/city-hall.webp → public/images/city-hall.webp（议会卡片／横栏；alt 'A city hall stairwell in morning light'）；https://media.vibefather.ai/assets/41e7e0bf-6d94-4267-9958-6e733113913d/press-room.webp → public/images/press-room.webp（文化版头图卡片；alt 'An old printing press in a small print shop'）；https://media.vibefather.ai/assets/41e7e0bf-6d94-4267-9958-6e733113913d/venue-crowd.webp → public/images/venue-crowd.webp（横栏条目；alt 'A small listening-room audience, faces indistinct in low light'）；https://media.vibefather.ai/assets/41e7e0bf-6d94-4267-9958-6e733113913d/main-street.webp → public/images/main-street.webp（商业版头图卡片；alt 'A small-town main street at dusk with lit storefronts'）；https://media.vibefather.ai/assets/41e7e0bf-6d94-4267-9958-6e733113913d/reading-room.webp → public/images/reading-room.webp（文化版横栏；alt 'A quiet library reading room with a chess set'）。共六个文件。
- 图片（image）：在项目根目录写入 ASSETS.md，包含一张表格：路径、来源 URL、作者、许可证——每张照片一行（来源 'media.vibefather.ai, made for this template'，作者 'VibeFather'，许可证 'Distributed with the template'），另加 @fontsource/playfair-display、@fontsource/pt-serif 和 @fontsource-variable/inter（OFL-1.1）以及 lucide-react（ISC）的行。注明所有出现的人物均为纪实风格中的偶然人物，面孔不可辨认，所有报道均为虚构。
- 图标（icon）：仅使用 lucide-react：ArrowRight、ArrowUpRight、Check、Mail。描边宽度 1.75，14–20px，颜色继承。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的方形填充 #1E1B16，一个 Paper（#FAF8F2）大报字形（一个带两条栏线的折叠页面）和一条小的 #B3282D 顶栏。无品牌标识。
- 字体（font）：安装 @fontsource/playfair-display、@fontsource/pt-serif 和 @fontsource-variable/inter，并按“设置”中所列在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包进 dist/。
- 图片（image）：在代码中绘制：议会卡片的占位面板、favicon、引题栏、索引栏。除六张照片外无其他位图。

## 禁止事项（Don'ts）
- 不做后端，不做表单提交，不向 API 发起 fetch 请求：订阅框只在浏览器本地保存（localStorage），其小字说明中已注明这一点；所有链接都指向文件或锚点。
- 所有内部链接都指向文件名（./index.html、./index.html#city、./article.html?a=ferry-morning）——绝不指向裸目录；不带查询参数的 article.html 显示第一篇文章，绝不报错。
- 不使用真实出版物、报头、城市真实报纸或其字体排印；报纸、城市、故事、引语、署名和人物均为虚构的示例内容。
- 不使用真实人物或事件；不做突发新闻或紧迫性宣称；照片不含可读文字、不含标识，也不含可辨认的面孔（人群面孔保持模糊）。
- 不使用来自真实时钟的日期或时间戳：版次行和署名元信息为静态示例文本；任何地方都不打印今天的日期或年份。
- 一切资源自托管：字体通过 Fontsource，图标以 npm 包或内联 SVG 形式引入，图片下载到 public/images/。不使用 CDN 的 <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具。
- 生产构建：压缩，不生成 source map，不将 src/ 复制进 dist/，使用单一命令 npm run build，输出位于 dist/ 且小于 9 MB。
- 除页脚致谢链接外，站内绝不提及 VibeFather；所有文案均为虚构的美式英语。
- 尊重 prefers-reduced-motion：不做显现或沉降动画；一切处于静止状态。
- 网站必须在 1440x900 桌面端和 390x844 移动端正常工作（网格折叠为单栏带分隔线，侧栏跟随主稿，事实框转为流内布局），且控制台零错误；订阅框、区块锚点和链接仅用键盘即可操作，并具有可见的焦点环。
- 保持行宽：文章正文每栏绝不超过 34ch；密度保持大报（broadsheet）风格，绝不呈现仪表盘（dashboard）风格。

---
— Prompt by VibeFather · https://vibefather.ai/t/news-magazine-homepage · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
