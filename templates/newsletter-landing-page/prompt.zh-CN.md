> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 新闻通讯落地页（Newsletter Landing Page）

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简要说明
为 [BRAND] 制作一个单页的新闻通讯订阅页。该通讯是一封每周发送的信件，主题为 [TOPIC]，由 [AUTHOR] 撰写，发送频率为 [CADENCE]，面向 [SUBS] 位读者（示例数字）。页面必须推销这些文字本身，而不是描述它们：三则往期内容预览、读者引语、一个存档区，以及一个始终触手可及的订阅表单——内联验证、客户端欢迎卡片，以及当主视觉区滚出视口后出现的粘性栏。单页：index.html，包含若干区块（#issues、#quotes、#archive、#about）。一切都在浏览器中运行；不会向任何地方提交数据。

- 受众：已经订阅了太多信件、正在决定这一封是否值得占用收件箱的读者：默认面向 25–45 岁的开发者和团队负责人，好奇，且对增长黑客式的腔调过敏。他们会先读一则预览再做决定。
- 目标：赢得订阅。访客应在十秒内知道这封信讲什么、谁在写、多久发一次；在两分钟内，他们应该已经读过一则预览，并再次遇到订阅表单。
- 语气：信件自身的声音：温暖、精确、略带揶揄。每一行都是具体胜过抽象；不要“加入我们的社区”，不要感叹号。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/newsreader（OFL-1.1）、@fontsource/space-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 npm create vite@latest 以 react-ts 模板搭建脚手架。项目根目录下有一个 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4（tailwindcss + postcss + autoprefixer），content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的每种颜色以 kebab-case 键添加到 theme.extend.colors（paper、wash、card、ink、umber、rule、redlink、redlink-deep、olive-tick），并设置 fontFamily serif ['Newsreader Variable', 'Georgia', 'serif']、mono ['Space Mono', 'ui-monospace', 'monospace']。将 borderRadius DEFAULT 设为 6px，并添加 maxWidth { container: '1000px' } —— 一封信的宽度是窄的。
  - 在 src/fonts.ts 中导入 '@fontsource-variable/newsreader'（及其斜体轴）以及 '@fontsource/space-mono/400.css'、'@fontsource/space-mono/700.css'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（每个字符串、数字、期号、引语、存档条目、承诺语句和节奏，均带类型），src/lib/brand.ts（brandSlug = [BRAND] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 brandSlug + '.com'），src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键前缀为 brandSlug + ':'）。
  - 状态：src/store/subscribe.ts 是一个小型外部存储（useSyncExternalStore），持有 { email, subscribed }，持久化到 localStorage 键 brandSlug + ':reader'。订阅后显示欢迎卡片；'Not you?' 将其清除回表单。
  - 组件位于 src/components/：Header.tsx、SubscribeForm.tsx（验证、WelcomeCard.tsx）、StickyBar.tsx（在首屏表单滚出视口后出现，订阅后隐藏）、EnvelopeCard.tsx（最新一期，样式为带有手绘邮票的信封）、Reveal.tsx、Eyebrow.tsx、Footer.tsx；Hero.tsx、Issues.tsx（IssueCard.tsx 带首字下沉）、ProofStrip.tsx、Quotes.tsx、Archive.tsx、Inbox.tsx。src/pages/Home.tsx 组合它们。
  - public/favicon.svg 如资源（Assets）部分所述。index.html：lang en，<meta name='theme-color' content='#F8F4EC'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[BRAND] — A weekly letter about [TOPIC]</title>。
  - 在项目根目录编写 ASSETS.md，如资源（Assets）部分所述。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体和 favicon.svg。保持在 5 MB 以下 —— 不要图片。

## 变量
- [BRAND] — 通讯名称（默认："The Margin Note"）。虚构的通讯名称。用于报头、标题、页脚、电子邮件（hello@ + 不含连字符的 brandSlug + .com）以及 localStorage 键。绝不是真实存在的通讯。
- [AUTHOR] — 作者（默认："June Okafor"）。虚构作者的名字。用于署名行、关于部分、签名（'— June'）以及引语的上下文。绝不是真实存在的作者。
- [TOPIC] — 主题内容（默认："the craft of small software teams"）。一个小写短语。驱动标题、一句话承诺、各期标题、引语以及收件箱部分。让它成为一个有真实利害关系的领域，而不是一个类别堆砌。
- [CADENCE] — 发送频率（默认："Tuesdays, 6am"）。信件送达的时间（'Tuesdays, 6am'、'Sundays, 8pm'）。用于承诺行、证明条以及收件箱部分中一行 FAQ 式文字。日期和时间，绝不是带日期的截止期限。
- [SUBS] — 订阅者数字（默认："11,204"）。以逗号分隔的示例读者数量，显示在证明条和粘性栏中。首次出现时始终标注"(sample)"。保持在 1,000–50,000 之间。
- [CREDIT] — 在页脚保留一个小型"Template by VibeFather"链接，指向 https://vibefather.ai/t/newsletter-landing-page（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- Paper `#F8F4EC` — 全页背景。
- Wash `#F0EADD` — 交替区块背景（Quotes、Archive）、悬停填充、标签块。
- Card `#FFFEF9` — 期号卡片、信封卡片、表单面板、欢迎卡片。
- Ink `#26211B` — 标题、正文、报头、图标颜色。
- Umber `#6B6155` — 次要文本、说明文字、眉题、归档元数据。
- Rule `#E0D8C8` — 1px 细线、卡片边框、输入框边框、归档分隔线。
- Redlink `#A33B2E` — 唯一强调色：链接、订阅按钮、印章、选中颜色、焦点环、首字下沉。
- Redlink Deep `#862E23` — 按钮悬停、按下状态。
- Olive Tick `#5C6B4C` — 安静的第二色：收件箱列表中的对勾、'free' 对勾、阅读时长圆点。

### 排版（Typography）
- 展示与正文：报头、H1–H3、期号预览、引语 — Newsreader 及其光学尺寸轴同时承担两项职责：Newsreader（OFL），字重 400/500/600
- 眉题与元数据：节奏行、期号、分类、表单标签（大写）：Space Mono（OFL），字重 400/700

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。容器最大宽度 1000px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px。单列流式布局，首屏为双列。区块垂直内边距桌面端 96px、1024px 以下 72px、640px 以下 56px。字号比例：报头（H1）clamp(48px, 7vw, 92px) Newsreader 500，行高 1.0，字距 -0.01em；H2 clamp(30px, 4vw, 48px) Newsreader 500；H3 22px Newsreader 600；导语 Newsreader 400 19px / 1.65 Ink 90%；正文 Newsreader 400 17px / 1.75（最大宽度 62ch）；期号预览正文 Newsreader 400 16px / 1.8，带 Redlink 首字下沉；眉题 Space Mono 700 11px 大写 字距 0.22em Umber；说明文字 Space Mono 400 12px Umber。按钮：高度 52px，内边距 0 26px，Space Mono 700 13px 大写 字距 0.1em。订阅按钮：Redlink 填充，Paper 文字。次要按钮：1px Ink/30% 边框，Ink 文字。输入框：高度 52px，1px Rule 边框，Card 填充，16px Newsreader，聚焦边框 Redlink。全局焦点环：2px Redlink 轮廓，偏移 3px。链接：Redlink，带 .link-draw 下划线。
- 圆角：卡片、信封、表单面板和按钮为 6px。仅分类标签块和阅读时长圆点使用 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现和欢迎卡片切换；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于吸底栏和归档悬停。纸质般、不慌不忙。
- 动效：显现：包裹在 <Reveal> 中的区块从 opacity 0、translateY(14px) 开始，在 15% 可见时（Motion whileInView，viewport once）以 800ms --ease-out 动画到静止状态。同级元素错开 90ms。
- 动效：报头：名称的三个词以 120ms 错开上升；名称后的 Redlink 句点以 200ms 缩放沉降盖印进入。
- 动效：EnvelopeCard：加载时封盖的阴影线绘制，印章从 -6deg 倾斜到静止的 -3deg，邮戳圆圈描边一次（600ms，在减少动效下禁用）。
- 动效：订阅表单：无效邮箱抖动 3px 一次，并显示内联提示（'Almost — that address is missing a piece'）；提交时按钮显示 'Subscribing…' 500ms，然后表单区域以 280ms --ease-io 滑动切换为 WelcomeCard — 'Welcome aboard.' 为 Newsreader 500 26px，'Issue No. 48 lands [CADENCE]. Until then, the archive is right below.' 以及 'Not you? Use a different address' 返回表单。
- 动效：StickyBar：在首屏表单完全滚出后 200ms 出现，固定在底部（感知安全区域），以 260ms 向上滑入 16px；订阅后或页脚进入视图时立即隐藏；包含一个镜像首屏表单的紧凑表单。
- 动效：期号卡片：悬停上浮 3px，首字下沉从 Redlink→Redlink Deep 变化；点击时内联展开预览至完整第一节（340ms 高度动画），带一条 'fold' 线 — 期号像信件一样打开，而非模态框。
- 动效：归档行：悬停填充 Wash，期号滑入 6px 变成 Redlink 对勾；行以 40ms 错开显现。
- 动效：引语：卡片以 4px 上升显现；开引号保持静止（克制才是重点）。
- 动效：链接：.link-draw 在悬停和 focus-visible 时以 300ms 生长出 1px Redlink 下划线；::selection 为 Redlink 配 Paper 文字。
- 动效：prefers-reduced-motion: reduce — 禁用印章/邮戳绘制、错开、滑动（即时切换）、吸底栏的滑动（就地出现）；保留颜色和边框悬停变化。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：无摄影、无图库、无外部图片 — 页面是排版加绘制的邮政细节。EnvelopeCard 的印章、邮戳和封盖阴影为内联 SVG；首字下沉为 CSS ::first-letter；归档的阅读时长圆点和收件箱对勾为绘制。一层淡淡的纸张纹理（2% Ink 的重复径向渐变）覆盖在页面上。图标：仅 lucide-react，描边宽度 1.5。

## 页面与区块
### 新闻通讯（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[BRAND] = The Margin Note，[AUTHOR] = June Okafor，[TOPIC] = 小型软件团队的技艺，[CADENCE] = 每周二上午 6 点，[SUBS] = 11,204）。将每个字符串和数字放入 src/content.ts 并从中渲染。若任何变量值不同，请重写承诺语、期号标题与预览、引语、存档条目和收件箱文案，使其对新通讯具体且可信，同时保持相同结构和数量（3 期预览、4 条引语、10 行存档、3 条收件箱要点）。所有读者、期号和数字均为虚构；订阅者数量在首次出现时标注为“(sample)”。事实：永久免费；每周一封邮件，偶尔双期；期号连续编号（当前已发布第 47 期，下一期为第 48 期）；阅读时间 4–9 分钟；退订一键完成且即时生效。肖像：portrait-june.webp 是 AI 生成的虚构人物，与默认 [AUTHOR] 匹配（虚构作者，不似任何真实个人）；alt 保持为“[AUTHOR], writing the next issue”。
   布局：不适用
   动效：不适用
2. **页眉** — 左侧：报头“[BRAND].”（Newsreader 500 20px，带 Redlink 句点）链接至 ./index.html。右侧（Space Mono 12px 大写）：“Issues” → #issues，“Archive” → #archive，“About” → #about，以及一个小型订阅标签“Subscribe” → 主视觉表单（聚焦邮箱输入框）。640px 以下：仅报头 + 标签。
   布局：顶部粘性，Paper/92% 带模糊和 1px Rule 底边框，高度 64px，容器对齐。
3. **带订阅的主视觉** — 两栏。左侧：眉题“A WEEKLY LETTER — [CADENCE]”；H1“Small teams,” / “*sharpened.*”；承诺语（19px，最大宽度 520px）：“[BRAND] is a letter about [TOPIC] — what holds, what breaks, and what to steal from teams smaller than yours. Written by [AUTHOR], one honest page a week.” SubscribeForm（邮箱输入框 + Redlink“Subscribe”按钮，560px 以下堆叠全宽），内联承诺行（Space Mono 11px Umber）：“FREE · ONE EMAIL A WEEK · UNSUBSCRIBE IN ONE CLICK”。下方三个等宽字体对勾证明点：“No. 48 next, [CADENCE]”；“[SUBS] readers (sample)”；“4–9 minutes, worth both”。右侧：EnvelopeCard——最新一期（第 47 期，“The Meeting Is a Message”）设计为打开的信封：一枚邮票（绘制，Redlink，倾斜）、一个邮戳圆圈、“No. 47”等宽字体、期号标题 Newsreader 500 24px、预览正文前两行，以及“Read time 6 min”——点击在 Issues 区块中打开该期完整预览（锚点滚动）。
   布局：Paper 背景，页眉下方顶部垂直内边距 112px。左侧 6 列，右侧 5 列偏移 1。信封为 Card，带 1px Rule 边框、2px 虚线封口线和柔和 4px 纸张阴影——页面上唯一的阴影。
4. **期号预览** — 区块 id='issues'。眉题“RECENT ISSUES”和 H2“Read one before you decide.”三张 IssueCard：第 47 期“The Meeting Is a Message”——分类“Teams”——6 分钟——“What your calendar says about your roadmap, read by the newest hire on their first day. This issue follows one engineering team''s week through the meetings they kept, cut, and quietly weaponized…”；第 46 期“Two-Pizza Teams Eat Cold Pizza”——“Craft”——8 分钟——“The famous rule works until it doesn''t. A field guide to what actually breaks at nine people, drawn from three teams that lived through it and one that didn''t…”；第 45 期“The Oncall Journal”——“Practice”——5 分钟——“What one team learned from a year of writing down every page: which alerts were fiction, which were debts, and the one that was a colleague…”。每张卡片内联展开至其完整第一节（每期另有三段，写在 content.ts 中），带折叠线和“fold”控件。
   布局：Wash 背景。三列 24px 间距（860px 以下堆叠）。卡片：“No. 47”等宽 Redlink、分类标签、标题 Newsreader 600 22px、带首字下沉的预览、带点的阅读时间行。展开状态使卡片向下增长。
5. **证明条** — Paper 上一条细线边界带：左侧，“[SUBS] readers”（Newsreader 500 28px）后跟等宽 11px Umber 的“(sample)”；中间，“One email a week. The double issue, twice a quarter.”；右侧，“Sent [CADENCE] — no streaks, no guilt.”（等宽）。
   布局：全宽带，1px Rule 上下边框，垂直内边距 32px，移动端三部分行换行。
6. **读者引语** — 区块 id='quotes'。眉题“WHAT READERS SAY”和 H2“Four reasons from the inbox.”引语：“"The only newsletter I read the week it arrives. June writes about teams the way a good mechanic talks about engines — no mystique, all parts."”——“Priya N. · Staff engineer”；“"I forwarded No. 46 to my co-founder with the subject line ''read this before the offsite''. It changed the offsite."”——“Dan & Mireille · two-person startup”；“"Unsubscribed from four newsletters the week I found this one. It earns the space."”——“Anonymous, via the feedback form”；“"My team''s retro now has a standing agenda item stolen from issue No. 41. We call it what it is: stolen."”——“Tomas R. · Tech lead”。
   布局：Paper 背景。2x2 网格 24px 间距（760px 以下堆叠）；卡片在 Card 上，带 1px Rule 边框，引语 Newsreader 400 斜体 18px / 1.7，署名等宽 12px Umber。
7. **存档** — 区块 id='archive'。眉题“THE BACK CATALOGUE”和 H2“Forty-seven issues, all free.”十行（第 47 期回溯至第 38 期）：第 47 期“The Meeting Is a Message” · Teams · 6 分钟；第 46 期“Two-Pizza Teams Eat Cold Pizza” · Craft · 8；第 45 期“The Oncall Journal” · Practice · 5；第 44 期“Hiring Your First, Carefully” · Teams · 9；第 43 期“The README Holds the Culture” · Craft · 7；第 42 期“Estimates Are Fiction With Deadlines” · Practice · 6；第 41 期“The Retrospective That Worked” · Practice · 8；第 40 期“One Repo, One Team, No Exceptions” · Craft · 5；第 39 期“The Intern Saved the Quarter” · Teams · 7；第 38 期“Delete the Wiki” · Craft · 4。行链接“#”（占位 href——由这对夫妇填写的存档），结尾行：“No. 1–37 live wherever old newsletters retire; ask nicely and we''ll dust them off.”
   布局：Wash 背景。行带 1px Rule 分隔线：编号等宽 Redlink（固定宽度）、标题 Newsreader 500 18px、分类标签、阅读时间点右对齐。悬停填充 Paper。容器最大宽度 760px。
8. **收件箱里有什么** — 区块 id='about'。眉题“ABOUT THE LETTER”和 H2“One page, three parts.”带 Olive Tick 对勾的要点：“One idea about [TOPIC], taken from a real team and stripped of names but not consequences”；“One practice you can run this week — a meeting format, a script, a checklist — with the failure modes noted”；“One recommendation worth your time: a book chapter, a tool, an essay, never an ad”。一张小作者肖像 portrait-june.webp（4:5，1px Rule 边框，说明文字“[AUTHOR], writing the next issue”）位于关于段落上方：“[AUTHOR] has worked on teams of two and teams of two hundred and writes about the small ones, where the craft is loudest. The letter is written by hand the night before, and it shows, in the good way.”等宽字体的退订承诺：“UNSUBSCRIBE: ONE CLICK, INSTANT, NO SURVEY — THE BUTTON WORKS THE FIRST TIME”。
   布局：Paper 背景。两栏：要点 7 列，关于 4 列偏移 1，肖像位于其顶部（最大宽度 220px）。承诺行在细线下方全宽。
9. **页脚** — 一条 Wash 带：左侧，“[BRAND].”小报头和“Written by [AUTHOR] · hello@ + emailDomain”；右侧，锚点 Issues / Archive / About 和“Subscribe” → 表单。Rule 下方底线：“© [BRAND]. Sample figures, real opinions.”
   布局：垂直内边距 48px，两部分行，底线在细线下方 24px；640px 以下堆叠。

## 资产
- 图片：为此设计制作的模板人像（可随模板免费再分发）：https://media.vibefather.ai/assets/9677dbf6-86a5-42da-b79d-e9cb76f8f7fc/portrait-june.webp → public/images/portrait-june.webp（关于栏人像；alt 为 '[AUTHOR], writing the next issue'）。
- 图标：仅使用 lucide-react：Mail、Check、X、ArrowDown、Clock、ChevronDown、Quote。描边宽度 1.5，16–24px，颜色继承。public/favicon.svg 手写：viewBox 0 0 32 32，一个 32x32 的 rect，rx 为 6，填充 #F8F4EC，带 1px Ink 边框，一个 Redlink（#A33B2E）印章式方块（旋转 4deg），内部有一个纸色星号。不使用其他 logo：简报名称始终以文字排版呈现。
- 图片：仅在代码中绘制——无照片、无图库素材、无外部图片。信封卡片的邮票、邮戳和封盖阴影；首字下沉（CSS ::first-letter）；阅读时长圆点；收件箱勾选标记；纸张颗粒叠加层；全部使用 SVG/CSS。编写 ASSETS.md，列出 lucide-react（ISC）、@fontsource-variable/newsreader 和 @fontsource/space-mono（OFL-1.1），并注明 'No image assets; all visuals drawn in code.'
- 字体：安装 @fontsource-variable/newsreader 和 @fontsource/space-mono，并按 Setup 中列出的方式在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包进 dist/。

## 禁止事项
- 无后端、无表单提交、不向任何 API 发起 fetch 请求：订阅状态仅存在于浏览器中（localStorage）；表单的确认信息说明演示仅在本地保存，且不提及也不展示任何邮件服务。
- 此单页上的所有链接均为锚点（./index.html#issues、#archive、#about），但归档行除外，归档行是 '#' 占位符，由作者自行填写。
- 一切资源自托管：字体通过 Fontsource，图标以 npm 包或内联 SVG 形式引入。不使用 CDN 的 <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具。
- 生产构建：压缩、无 source map、不将 src/ 复制到 dist/、使用单一命令 npm run build、输出位于 dist/ 且小于 5 MB。
- 不使用真实的新闻通讯、作者、读者或平台；订阅者数字为示例数据，并在首次出现时予以标注；不使用真实的邮件服务徽章。
- 任何地方都不出现日期或年份；期号以编号而非日期标识；发布节奏仅以工作日和时间表示；网站从不显示当天日期。
- 除可选的页脚署名链接外，网站内绝不提及 VibeFather 或任何其他品牌；所有文案均为虚构的美式英语。
- 在所有位置遵循 prefers-reduced-motion：禁用印章和邮戳绘制、交错显现、粘性栏滑动（改为原地出现）以及期号展开动画；保留颜色/边框悬停效果。
- 页面必须在 1440x900 桌面端和 390x844 移动端正常工作，且控制台零错误；表单和展开的期号仅用键盘即可操作，每个交互元素都有可见的焦点环。
- 保持文案具体：不使用 lorem，不使用“join our community”；每个期号标题、阅读时长和数字都存放在 src/content.ts 中。

---
— Prompt by VibeFather · https://vibefather.ai/t/newsletter-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
