> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 极简开发者作品集

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [NAME] 制作一个单页作品集，[NAME] 是一位专注于 [FOCUS] 的 [ROLE]，常驻 [LOCATION]。必须真正做到极简：一段自我介绍、四个精选项目（带技术栈标签）、三条写作条目、三张开源仓库卡片（示例星标数、绘制的语言圆点）、一个带 'now' 行的联系区块，以及一个会持久保存并在首次访问时遵循系统偏好的浅色/深色主题切换。单页：index.html，包含各区块（#projects、#writing、#oss、#contact）。一切都在浏览器中运行；不向任何地方提交内容；所有站外链接均为 '#' 占位符。

- 受众：通过链接前来的工程师和招聘经理，他们在九十秒内做出判断。他们会读个人简介、两个项目和 now 行；任何装饰性的内容都会被理解为补偿。
- 目标：赢得邮件或关注。访客在十秒内知道是谁、做什么、在哪里；在两分钟内看到最佳作品和 now 行。
- 语气：直率的工程师：短句，动词先行，每个区块最多一次冷幽默。不要“passionate crafter of delightful experiences”。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（MIT）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/ibm-plex-mono（OFL-1.1）、@fontsource/schibsted-grotesk（OFL-1.1）
- 构建（Build）：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置（Setup）：
  - 使用 react-ts 模板通过 npm create vite@latest 搭建脚手架。项目根目录下有一个 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist'，sourcemap false，assetsInlineLimit 0 }。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4，darkMode: 'class'。content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的每种颜色以 kebab-case 键（paper-light、surface-dark、ink、ink-soft、rule、accent、accent-deep、faint）添加到 theme.extend.colors，并将 fontFamily 的 mono 设为 ['IBM Plex Mono', 'ui-monospace', 'monospace']、sans 设为 ['Schibsted Grotesk', 'system-ui', 'sans-serif']。将 borderRadius 的 DEFAULT 设为 6px，并添加 maxWidth { column: '640px' } —— 作品集是一种窄幅阅读。
  - 在 src/fonts.ts 中导入 '@fontsource/ibm-plex-mono/400.css'、'@fontsource/ibm-plex-mono/600.css' 以及 '@fontsource/schibsted-grotesk/400.css'、'@fontsource/schibsted-grotesk/500.css'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（每个字符串、项目、文章、仓库、技术栈标签、now 行和链接，均带类型），src/lib/brand.ts（personSlug = [NAME] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 personSlug + '.dev'），src/lib/theme.ts（getTheme()：已存储的 'light'|'dark' 或 matchMedia 回退；applyTheme 切换 document.documentElement.classList 的 'dark' 并更新 meta theme-color）。
  - 状态（State）：src/store/theme.ts 是一个基于 src/lib/theme.ts 的小型外部 store（useSyncExternalStore）；切换开关会翻转它并持久化到 localStorage 键 'theme'。
  - src/components/ 中的组件：ThemeToggle.tsx（Sun/Moon，带 300ms 旋转交叉淡入淡出）、Header.tsx、Reveal.tsx（Motion whileInView 包装器）、Intro.tsx、Projects.tsx（含 TagList.tsx 的 ProjectRow.tsx）、Writing.tsx（PostRow.tsx）、OpenSource.tsx（RepoCard.tsx、LangDot.tsx）、Now.tsx、Footer.tsx。src/pages/Home.tsx 组合它们。
  - public/favicon.svg 如资源（Assets）下所述。index.html：lang en，<meta name='theme-color' content='#FBFAF7' id='theme-meta'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[NAME] — [ROLE]</title>。在 index.html 的 head 中用一小段内联脚本在首次绘制前应用已存储的主题（读取 localStorage 'theme' || matchMedia，在 <html> 上切换 'dark' 类）以避免闪烁。
  - 如资源（Assets）下所述，在项目根目录写入 ASSETS.md。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和两张照片。保持在 5 MB 以下。

## 变量
- [NAME] — 姓名（默认：“Noor Alami”）。开发者的名字。用于介绍、标题、页脚、电子邮件（hi@ + personSlug + .dev）和刊头。始终是虚构的人物。
- [ROLE] — 角色（默认：“Backend Engineer”）。标题中的专业领域。用于标题、介绍行和一个项目的上下文。保持为一个真实的职位名称，不要使用复合流行词。
- [FOCUS] — 专注领域（默认：“Databases and developer tooling”）。标题大小写短语，命名专业领域。驱动个人简介的第二句话、四个项目中的两个以及所有三个仓库。保持为一个真实的领域。
- [LOCATION] — 位置（默认：“Toronto, Canada”）。城市和国家。用于介绍中的可用性行和页脚。真实地点可以；雇主保持虚构。
- [CREDIT] — 在页脚保留一个小的“Template by VibeFather”链接到 https://vibefather.ai/t/minimal-developer-portfolio（默认：是；删除此行以移除它）

页面与部分下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图像——保持相同的长度、语气和结构。布局、颜色、字体和动效保持如所述。
将所有文案、图像路径和链接放在一个内容文件中（例如 `src/content.ts`），按部分键控，以便以后可以在不触及组件的情况下交换内容。

## 设计
### 颜色（Colors）
- 纸白（Paper Light）`#FBFAF7` — 浅色模式页面背景。
- 表面深色（Surface Dark）`#121212` — 深色模式页面背景（主要设计）。
- 墨色（Ink）`#17181A` — 浅色模式文本；深色模式表面改用提亮的 #1A1A1C 卡片，而非边框。
- 柔和墨色（Ink Soft）`#55575C` — 浅色模式下的次要文本；深色模式下为 #A8A9AD — 一个 token，两个值。
- 分隔线（Rule）`#E8E6E0` — 浅色模式的细线和标签边框；深色模式下为 #2A2A2D。
- 强调色（Accent）`#E8590C` — 两种主题下唯一的强调色：链接、切换按钮、技术栈标签圆点、仓库语言圆点、焦点环、引言中的光标。
- 深强调色（Accent Deep）`#C74A08` — 两种主题下的链接悬停和按下状态。
- 浅淡色（Faint）`#F1EFEA` — 浅色模式的悬停填充；深色模式下为 #1E1E20。

### 排版（Typography）
- 等宽字体（Mono）：姓名、区块标签（大写）、技术栈标签、仓库统计、可用状态行、提示光标、页脚：IBM Plex Mono（OFL），字重 400/600
- 无衬线字体（Sans）：个人简介、项目行、文章描述、仓库简介、now 行：Schibsted Grotesk（OFL），字重 400/500

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。栏最大宽度 640px，居中，桌面端侧边内边距 32px，640px 以下为 20px — 单一窄栏，无网格。区块间距桌面端 88px，640px 以下为 64px。字号比例：姓名 clamp(40px, 7vw, 64px) IBM Plex Mono 600，行高 1.05；区块标签等宽字体 600 12px 大写，字距 0.18em，后接一条强调色分隔线；项目标题无衬线字体 500 20px；个人简介无衬线字体 400 17px / 1.75（最大宽度 58ch）；正文 15.5px / 1.7；标签等宽字体 400 12px，带 6px 圆点；说明文字等宽字体 12px 柔和墨色。唯一的按钮是切换按钮（36px 方形）；联系方式条目为文本链接。全局焦点环：2px 强调色轮廓，偏移 3px。
- 圆角：仓库卡片、标签芯片和切换按钮为 6px。其余均为直角 — 由细线承担视觉分隔。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1)。在两种意义上都保持极简：200–400ms，小距离，除光标闪烁外无循环动画。
- 动效：主题切换：图标旋转 180deg，太阳/月亮在 300ms 内交叉淡入淡出；颜色通过 CSS 自定义属性在 220ms 内过渡（无布局动画）；meta theme-color 即时更新。
- 动效：引言：姓名上浮 12px 一次；可用状态行后的等宽光标以 1.2s 步进循环闪烁（在减少动态效果下禁用）。
- 动效：显现：包裹在 <Reveal> 中的行初始为 opacity 0、translateY(8px)，当 20% 可见时在 400ms 内以 --ease-out 稳定下来（Motion whileInView，viewport once）。同级元素错开 40ms — 几乎不可察觉，符合此类风格。
- 动效：项目行：悬停时标题缩进 4px，ArrowUpRight 轻移 2px；技术栈圆点变亮。
- 动效：仓库卡片：悬停时上浮 2px，星标数以强调色跳动一次；语言圆点柔和脉动（scale 1→1.15→1，800ms，一次）。
- 动效：链接：.link-draw 在悬停和 focus-visible 时于 220ms 内生长出 1px 强调色下划线。
- 动效：prefers-reduced-motion: reduce — 无光标闪烁，无过渡（主题即时切换），显现内容以静止状态渲染。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：两张模板照片，无其他：(1) portrait-noor.webp — 一位虚构开发者的低调专业头像（柔和窗光、深色中性背景、沉静自信），在引言中以 88px 圆形展示，且绝不出现在仅打印路径上（此页面没有）；它是占位图，用户可替换为自己的照片。(2) night-desk.webp — 一张宽幅、有氛围的夜间家庭办公桌照片：两台显示器发出终端绿色光芒、机械键盘、支架上的耳机、一盏台灯 — 作为开发者氛围锚点，放置在 Projects 和 Writing 之间。两者均为 0px 圆角，并带有微妙的 rule-dark 边框；夜间照片在深色主题下自动调暗至 85%。其余一切仍由代码绘制（paw→none；终端字形、语言圆点、主题图标、仓库卡片）。图标：仅使用 lucide-react，描边宽度 1.75。

## 页面与区块
### 作品集（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[NAME] = Noor Alami，[ROLE] = Backend Engineer，[FOCUS] = Databases and developer tooling，[LOCATION] = Toronto, Canada）。将每个字符串、标签和列表都放入 src/content.ts 并从中渲染。若任何变量值不同，请重写个人简介、所有项目行、文章标题/描述、仓库简介和 now 行，使其对新开发者而言具体且可信，同时保持相同的结构和数量（4 个项目，每个 2–4 个标签，3 篇文章，3 个仓库，1 行 now）。所有项目、文章、仓库和数字均为虚构；星标在区块说明中带有“(sample)”。联系方式：hi@ + emailDomain；handle 为 '@' + personSlug（不含连字符）；所有站外链接均为 '#' 占位符。
   布局：不适用
   动效：不适用
2. **页眉** — 简介上方的一行：左侧为 'noor.dev'，等宽字体 600 14px（即 emailDomain），链接到 ./index.html；右侧为 ThemeToggle。无导航——页面足够短，锚点只会是装饰（区块标签本身带有 id，可用于深度链接）。
   布局：顶部粘性，滚动 24px 前透明，之后背景 80% + 模糊 + 1px Rule 底边框。高度 56px。
3. **简介** — 将 portrait-noor.webp 作为 88px 圆形头像（rule-dark 圆环，alt 为 'Developer portrait placeholder'），然后正下方是姓名（H1）。等宽字体角色行：'[ROLE] — [FOCUS]'，后跟一个闪烁光标。个人简介（两句话）：'I build the parts of systems nobody sees until they break: storage engines, migration tooling, the query linter that keeps your 3am deploys boring. Previously at two startups you haven''t heard of and one database vendor you have.' 可用性行使用等宽字体 13px：'[LOCATION] · remote-friendly · open to interesting problems'（以带样式的下划线光标结尾）。
   布局：浅色 Paper/深色 Surface 背景，垂直内边距顶部 120px，底部 64px。简介最大宽度 58ch。
4. **夜间书桌** — 一张全栏宽照片 night-desk.webp（16:9，alt 为 'A developer desk at night with two monitors in terminal green'），下方配等宽字体说明：'where the bad commits happen'。这是页面在 Projects 和 Writing 之间唯一的宽幅视觉呼吸点。
   布局：全栏宽，0px 圆角，1px rule-dark 边框；说明文字等宽字体 12px ink-soft，位于下方 24px；图片位于 Projects 列表之后 64px、Writing 之前 64px。
5. **精选项目** — 区块 id='projects'。标签 'SELECTED WORK'。四行：1) 'quartermoon' — 'A query planner visualizer that explains plans like a patient senior engineer — drop in an EXPLAIN, get the story.' — 标签：Rust · PostgreSQL · WASM — '#'。2) 'ledgermist' — 'Double-entry storage engine with time-travel reads; the demo database is a fictional bakery, because ledgers deserve joy.' — 标签：Go · LSM-tree · gRPC — '#'。3) 'sqlscratch' — 'Zero-setup SQL scratchpad with shareable snapshots — the link people paste into code review instead of screenshots.' — 标签：TypeScript · SQLite · CRDTs — '#'。4) 'pgtender' — 'A Postgres babysitter: notices bloat before your dashboard does, writes the VACUUM schedule you keep postponing.' — 标签：Python · psycopg — '#'。
   布局：行之间用 1px Rule 细线分隔（无卡片）：标题无衬线字体 500 20px，悬停时显示 ArrowUpRight，一句话描述 15.5px Ink Soft，标签等宽字体 12px，带 Accent 圆点。行内边距 40px。
6. **写作** — 区块 id='writing'。标签 'WRITING'。三行（无日期）：1) 'What I learned rewriting a WAL' — 'A write-ahead log is a promise you make to your future self. 4,200 words on keeping it.' — 14 分钟。2) 'The migration tool is the product' — 'Nobody upgrades databases for fun; make the boring path the fast path.' — 8 分钟。3) 'In defense of small queries' — 'Your ORM is innocent; your WHERE clause is not.' — 6 分钟。行链接为 '#'。
   布局：行带细线：标题无衬线字体 500 17px，描述 14.5px Ink Soft，阅读时间等宽字体 12px 右对齐。
7. **开源** — 区块 id='oss'。标签 'OPEN SOURCE'，说明为 'stars are sample data, commits are real effort'。三张仓库卡片：1) 'btree-garten' — LangDot Rust — 'Serialization-friendly B-trees for teaching and for prod.' — '★ 1.2k (sample)'。2) 'explain-it' — LangDot TypeScript — 'EXPLAIN output, translated to English with footnotes.' — '★ 640 (sample)'。3) 'vacaysched' — LangDot Python — 'Vacuum scheduling that respects your I/O budget.' — '★ 210 (sample)'。每张卡片：仓库名等宽字体 600 15px，简介 14.5px，统计行。链接为 '#'。
   布局：三张卡片一行（16px 间距），位于 Faint 表面上，带 1px Rule 边框，20px 内边距；760px 以下堆叠。
8. **Now 与联系方式** — 区块 id='contact'。标签 'NOW'。now 行（无衬线字体 17px）：'Currently: making quartermoon explain parallel plans without hand-waving, and writing the WAL post''s sequel nobody asked for.' 联系方式行使用等宽字体 14px：Mail 'hi@' + emailDomain（mailto）；AtSign '@' + personSlug（不含连字符）（'#'）；Rss 'blog feed'（'#'）。结尾行：'The inbox is open; the calendar is negotiable.'
   布局：顶部细线区块；行作为 32px 行，图标与文字间距 20px。
9. **页脚** — 一行等宽字体 12px Ink Soft：'© [NAME]. No trackers, no cookies, no dark patterns — well, one dark mode.'
   布局：垂直内边距 48px，上方细线，居中。

## 资产（Assets）
- 图片（image）：为本设计制作的模板照片（可随模板自由再分发）：https://media.vibefather.ai/assets/dbe3f0a9-91ae-47f3-a42d-16ad896cffb0/portrait-noor.webp → public/images/portrait-noor.webp（介绍区头像，88px 圆形；alt 'Developer portrait placeholder'）；https://media.vibefather.ai/assets/dbe3f0a9-91ae-47f3-a42d-16ad896cffb0/night-desk.webp → public/images/night-desk.webp（位于 Projects 与 Writing 之间的 night-desk 横幅；alt 'A developer desk at night with two monitors in terminal green'）。
- 图标（icon）：仅使用 lucide-react：Sun、Moon、ArrowUpRight、Mail、AtSign、Rss、Star。描边宽度 1.75，16–24px，颜色继承。星标和语言圆点均为绘制的字形，绝不使用任何平台的标志。public/favicon.svg 为手写：viewBox 0 0 32 32，一个 32x32 的 rect，rx 6，填充 #121212（深色优先），带 1px #E8590C 边框，一个 Accent 终端光标字形（'>' + 下划线）。不使用其他标志：开发者姓名始终以文字排版呈现。
- 图片（image）：仅在代码中绘制——无照片、无头像、无截图、无外部图片。光标、语言圆点、星标字形、主题图标和 favicon 均为 SVG/CSS。编写 ASSETS.md，列出 lucide-react（ISC）、@fontsource/ibm-plex-mono 和 @fontsource/schibsted-grotesk（OFL-1.1），并注明 'No image assets; all visuals drawn in code.'
- 字体（font）：安装 @fontsource/ibm-plex-mono 和 @fontsource/schibsted-grotesk，并按 Setup 中所列在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包进 dist/。

## 禁止事项
- 无后端、无表单提交、不向任何 API 发起 fetch 请求：主题存储使用 localStorage + classList；所有站外链接均为 '#' 占位符或 mailto。
- 此单页上的所有链接均为锚点（./index.html#projects、#writing、#oss、#contact）或联系占位符。
- 一切资源自托管：字体通过 Fontsource 加载，图标以 npm 包或内联 SVG 形式提供。不使用 CDN 的 <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具——页脚需对此作出说明。
- 生产构建：压缩，无 source map，不将 src/ 复制到 dist/，使用单条命令 npm run build，输出位于 dist/ 且小于 5 MB。
- 不出现真实开发者、代码仓库、雇主或平台；不出现头像或任何人物照片；不出现平台品牌图标（仅使用通用手绘字形）；星标需标注为示例。
- 任何位置均不出现日期或年份：写作条目使用阅读时长而非日期；网站永不显示当天日期。
- 除页脚可选的署名链接外，网站内绝不提及 VibeFather 或任何其他品牌；所有文案均为虚构的美式英语。
- 遵循 prefers-reduced-motion 和 prefers-color-scheme：在 reduce 模式下无光标闪烁或过渡动画；首次访问跟随系统主题；主题选择持久保存。
- 页面必须在 1440x900 桌面端和 390x844 移动端、在两种主题下均正常工作且控制台零报错；每个交互元素均可仅用键盘操作并有可见的焦点环；加载时无主题闪烁（内联预绘制脚本）。
- 文案保持具体：不使用 lorem，不使用 'passionate'；每个标签、星标和阅读时长均存放于 src/content.ts。

---
— Prompt by VibeFather · https://vibefather.ai/t/minimal-developer-portfolio · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
