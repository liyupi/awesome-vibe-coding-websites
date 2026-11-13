> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 建筑事务所作品集

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [PRACTICE] 打造的四页网站，这是一家位于 [CITY] 的建筑事务所，通过 [APPROACH] 开展工作。它必须读起来像一套优秀的图纸集：首页包含一个主推项目和一个引子，一个可按类型筛选的十二项目索引，项目详情页配有大图、事实信息区块和手绘 SVG 平面图，一个工作室页面（故事、方法、团队、奖项），以及一个客户端咨询区块。页面：index.html、projects.html、project.html?p=<slug>（第一个项目不带查询参数）、studio.html。一切都在浏览器中运行；不会向任何地方提交数据。

- 受众：潜在客户（开发商、机构、私人委托方）和同行。他们寻求严谨性：每个项目有清晰的事实、诚实的图纸、一个能用三句话解释其方法的事务所。
- 目标：产生咨询邮件。访客在十秒内看到品质标杆；在两分钟内筛选出他们所建造的类型并打开一个项目。
- 语调：精确而安静，像一套规格说明。简短的陈述句，精确的数字（平方米、年份），除非是结构性的，否则不要对光线写诗。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（MIT）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/archivo（OFL-1.1）、@fontsource/ibm-plex-sans（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化设置（Setup）：
  - 使用 npm create vite@latest 并选择 react-ts 模板来搭建脚手架。项目根目录下放置四个真实的 HTML 页面：index.html（入口 src/main-home.tsx）、projects.html（src/main-projects.tsx）、project.html（src/main-project.tsx）和 studio.html（src/main-studio.tsx）。
  - vite.config.ts：base 设为 './'，plugins 为 [react()]，build 配置为 { outDir 'dist', sourcemap false, assetsInlineLimit 0, rollupOptions { input { index: resolve(__dirname, 'index.html'), projects: resolve(__dirname, 'projects.html'), project: resolve(__dirname, 'project.html'), studio: resolve(__dirname, 'studio.html') } } }。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4，content 配置为 ['./index.html', './projects.html', './project.html', './studio.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的每种颜色以 kebab-case 键名添加到 theme.extend.colors 中（concrete、concrete-deep、paper、ink、ink-soft、rust、rust-deep、hairline、drawing），并设置 fontFamily：display 为 ['Archivo Variable', 'Arial', 'sans-serif']，sans 为 ['IBM Plex Sans', 'system-ui', 'sans-serif']。将 borderRadius 的 DEFAULT 设为 0px——该事务所的画风是方角——并添加 maxWidth { container: '1280px' }。
  - 在 src/fonts.ts 中导入 '@fontsource-variable/archivo' 以及 '@fontsource/ibm-plex-sans/300.css'、'@fontsource/ibm-plex-sans/400.css'、'@fontsource/ibm-plex-sans/500.css'；在四个入口文件中都导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（所有字符串、项目、事实、方案标签、人物、奖项和图片路径，均带类型）、src/lib/brand.ts（practiceSlug = [PRACTICE] 转为小写，并将每一段连续的非字母数字字符替换为 '-'；emailDomain = 去掉连字符的 practiceSlug + '.com'）、src/lib/storage.ts（安全的 localStorage 读写，包裹在 try/catch 中，键名以 practiceSlug + ':' 为前缀）、src/lib/project.ts（读取查询参数 'project.html?p=<slug>'，返回匹配的项目或第一个项目——绝不返回未找到）、src/lib/filters.ts（applyTypology(projects, key)）。
  - 状态管理：src/store/inquiry.ts 是一个小型外部 store（useSyncExternalStore），持有 { name, email, typologyInterest, note, sent }，并持久化到 localStorage 键 practiceSlug + ':inquiry'。
  - 组件位于 src/components/：Header.tsx、Reveal.tsx（Motion whileInView 包装器）、SectionNumber.tsx（编号标签系统）、Footer.tsx；首页（home）：Hero.tsx、Tease.tsx（ProjectCard.tsx）、ApproachStrip.tsx；项目列表（projects）：IndexMasthead.tsx、TypologyBar.tsx、ProjectRow.tsx、EmptyIndex.tsx；项目详情（project）：ProjectHero.tsx、FactsBlock.tsx、PlanDrawing.tsx（每个项目内联 SVG）、NextProject.tsx、InquiryCard.tsx（与 studio 共用）；工作室（studio）：Story.tsx、People.tsx（PersonCard.tsx 首字母）、Awards.tsx、ContactBlock.tsx。src/pages/Home.tsx、Projects.tsx、Project.tsx、Studio.tsx 负责组合它们；每个页面都渲染 Header 和 Footer。
  - 在首次构建之前，使用 curl -L -o 将资源（Assets）下列出的每张图片下载到 public/images/ 中，并使用给定的确切文件名。构建过程本身从不获取任何内容。
  - public/favicon.svg 按资源（Assets）部分的描述创建。所有四个 HTML 文件：lang 为 en，<meta name='theme-color' content='#F2F1EE'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>。标题：index.html 为 '<title>[PRACTICE] — Architecture, [CITY]</title>'，projects.html 为 '<title>Work — [PRACTICE]</title>'，project.html 为 '<title>Work — [PRACTICE]</title>'（项目页面在加载时将 document.title 设置为项目名称），studio.html 为 '<title>Studio — [PRACTICE]</title>'。
  - 按资源（Assets）部分的描述在项目根目录写入 ASSETS.md。
  - dist/ 包含四个 HTML 文件、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张图片。保持其大小在 12 MB 以下。

## 变量
- [PRACTICE] — 事务所名称（默认：“Cardinal & Grid”）。虚构的事务所名称。用于字标、标题、页脚、电子邮件（studio@ + 不含连字符的 practiceSlug + .com）以及 localStorage 键。绝不使用真实事务所名称。
- [CITY] — 城市（默认：“Montreal, Quebec”）。事务所所在地。用于标题、故事、事实区块中的位置（项目位于该城市及其周边）以及页脚。可以使用真实城市；项目街道为虚构。
- [APPROACH] — 方法（默认：“long-life buildings from short-list materials”）。一个全小写短语，命名事务所的方法。驱动首页方法条、工作室故事的第二段以及一行 FAQ 式文字。具体且可重复，不要诗意化。
- [TYPOLOGIES] — 类型（默认：“Housing, cultural, education and retrofit”）。事务所的四个项目类型，逗号分隔，标题大小写。驱动索引筛选器和每个项目的类型标签。严格保持四个。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/architecture-firm-portfolio（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/architecture-firm-portfolio?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
