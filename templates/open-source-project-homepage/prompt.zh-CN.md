> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 开源项目主页

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的单页主页，[BRAND] 是一个开源库——[WHAT]——以 npm 包“[PKG]”的形式发布。它必须在一屏之内说服开发者：一条可复制的安装命令、一个带标签页的代码示例（JavaScript / TypeScript）并带静态高亮、六条单行特性、示例计数器（[STARS] 星标及同类数据）、以姓名首字母头像呈现的贡献者、一张文档卡片、一张带绘制层级（tiers）的赞助商卡片，以及一个三条目的更新日志预告。单页：index.html，包含各区块（#sample、#features、#humans、#docs、#sponsors、#changelog）。一切都在浏览器中运行；不向任何地方提交数据；每个站外链接都是“#”占位符，由维护者自行填写。

- 受众：从 README 中的链接、搜索结果或讨论帖而来的开发者，22–45 岁，在一分钟内完成评估。他们想要安装命令行、一个能展示 API 形态的代码示例、许可证，以及有人类在维护它的证据。
- 目标：让安装命令被复制。访客在十秒内看到宣传语和命令；在一分钟内看到 API、许可证和维护者。
- 语气：README 式的自信，略带干涩：简短的陈述句，平实地说明真实的取舍，不用营销形容词，关于 semver 开一个玩笑。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/jetbrains-mono（OFL-1.1）、@fontsource/overpass（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化设置（Setup）：
  - 使用 react-ts 模板通过 npm create vite@latest 脚手架创建。项目根目录只有一个 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要将 src/ 复制到 dist/。
  - Tailwind 3.4 通过 PostCSS（tailwindcss + postcss + autoprefixer），content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的每个颜色添加到 theme.extend.colors，使用 kebab-case 键名（paper、wash、card、ink、slate-green、rule、term-green、term-green-deep、amber-dot），并设置 fontFamily mono ['JetBrains Mono', 'ui-monospace', 'monospace']、sans ['Overpass', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 8px，并添加 maxWidth { container: '1080px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/jetbrains-mono/400.css'、'@fontsource/jetbrains-mono/700.css' 以及 '@fontsource/overpass/400.css'、'@fontsource/overpass/600.css'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局（File layout）：src/content.ts（每个字符串、功能、带 token 类的代码示例行、贡献者、计数器、文档模拟条目、赞助层级和更新日志条目，均带类型），src/lib/brand.ts（brandSlug = [BRAND] 转为小写并将每段非字母数字字符替换为 '-'，pkg = [PKG]，emailDomain = 'vibefather.invalid' 永不使用——联系方式保留为仓库占位符）。
  - 代码高亮为手写实现：content.ts 将每个示例存储为行数组，每行是一个 { text, t } 数组，其中 t 为 'kw'（关键字）、'str'（字符串）、'fn'（函数）、'num'、'com'（注释）、'pln'（纯文本）之一；<CodeLine> 将 t 映射到设计（Design）下的 token 颜色。不使用外部高亮包。
  - 状态（State）：src/store/codeTab.ts 是一个小型外部存储（useSyncExternalStore），持有 { lang: 'js' | 'ts' }（不持久化）。复制按钮使用 navigator.clipboard，并回退到选中的 textarea。
  - 组件位于 src/components/：Header.tsx、Footer.tsx、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、InstallStrip.tsx（含 CopyButton.tsx）、CodePanel.tsx（TabSwitch.tsx、CodeLine.tsx、WindowChrome.tsx）、Features.tsx（FeatureCard.tsx）、Counters.tsx、Humans.tsx（Avatar.tsx 首字母圆圈）、DocsCard.tsx（TocMock.tsx）、Sponsors.tsx（TierCard.tsx）、Changelog.tsx（LogEntry.tsx）、CommunityGlyphs.tsx（绘制的通用聊天/仓库/议题图标——绝不使用真实平台标识）。src/pages/Home.tsx 组合它们。
  - public/favicon.svg 如资源（Assets）部分所述。index.html：lang en，<meta name='theme-color' content='#FAF8F2'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[BRAND] — [WHAT]</title>。
  - 在项目根目录编写 ASSETS.md，如资源（Assets）部分所述。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体和 favicon.svg。保持在 5 MB 以下——无图片。

## 变量
- [BRAND] — 项目名称（默认："Figleaf"）。虚构的库名。用于刊头、标题、页脚和功能文案（'Figleaf never…'）。绝不是真实的包或项目。
- [PKG] — 包名（默认："figleaf"）。小写 npm 风格的包名，用于安装命令（npm i [PKG]）和代码示例的 import 行。保持为一个单词，与 [BRAND] 匹配。
- [WHAT] — 它是什么（默认："zero-dependency schema validation for configs and forms"）。一个描述该库类别的小写短语。决定标题、主视觉宣传语、两个代码示例的主题以及六个功能中的三个。要足够具体，以便编写真实的示例代码。
- [STARS] — 星标数（默认："8.4k"）。示例星标数，格式如 '8.4k'。显示在计数器行和粘性头部标签中，始终附近带有示例说明。保持在 1k–30k 之间。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接指向 https://vibefather.ai/t/open-source-project-homepage（默认：是；删除此行以移除它）

Pages & Sections 下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块键控，以便以后无需触碰组件即可替换内容。

## 设计
### 颜色（Colors）
- Paper `#FAF8F2` — 全站页面背景。
- Wash `#F1EEE4` — 交替区块背景（Features、Changelog）、标签块（chips）、悬停填充。
- Card `#FFFFFF` — 代码面板、文档卡片、赞助商卡片、安装条。
- Ink `#1F2421` — 标题、正文、表格文字、图标颜色、代码普通 token。
- Slate Green `#5D6B60` — 次要文字、说明文字、眉题（eyebrows）、文档模拟元数据。
- Rule `#E2DDD0` — 1px 细线、卡片边框、代码面板外框线、分隔线。
- Term Green `#2F9E44` — 唯一强调色：提示符字形、已复制状态、关键字 token、计数器、焦点环、悬停时的头像圆环。
- Term Green Deep `#237A34` — Card 上的关键字 token、链接悬停、'v2' 更新日志圆点。
- Amber Dot `#D9822B` — 低调的第二色：字符串 token、更新日志的次版本圆点、赞助商层级徽章。

### 字体排印（Typography）
- 代码、名称、计数器、安装行、眉题（大写、加字距）、字标：JetBrains Mono（OFL），字重 400/700
- 正文：宣传语、功能行、赞助商文案、更新日志正文：Overpass（OFL），字重 400/600

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。容器最大宽度 1080px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面端 88px、1024px 以下 68px、640px 以下 52px — 文档密度，而非营销留白。字号阶梯：H1 clamp(40px, 6vw, 72px) JetBrains Mono 700，行高 1.05，字距 -0.02em；H2 clamp(26px, 3.4vw, 40px) JetBrains Mono 700；H3 18px JetBrains Mono 700；宣传语 Overpass 400 18px / 1.65 Ink 90%；正文 Overpass 400 15.5px / 1.7（最大宽度 62ch）；眉题 JetBrains Mono 400 11px 大写 字距 0.2em Slate Green；说明文字 JetBrains Mono 400 12px Slate Green；代码 13.5px / 1.7 JetBrains Mono。按钮：高度 44px，内边距 0 20px，JetBrains Mono 700 13px。主要按钮：Ink 填充，Paper 文字。次要按钮：1px Ink/25% 边框，Ink 文字。全局焦点环：2px Term Green 轮廓，偏移 3px。
- 圆角：卡片、代码面板、按钮、标签块和安装条为 8px。仅标签切换器、计数器标签块和头像圆圈使用 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现和标签切换；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于更新日志手风琴。终端式干脆：快速落定，无漂移。
- 动效：显现：包裹在 <Reveal> 中的区块从 opacity 0、translateY(10px) 开始，在 15% 可见时（Motion whileInView，viewport once）以 450ms --ease-out 动画到静止状态。同级元素错开 50ms。
- 动效：安装条：加载时提示符字形（'$'）逐字打出，随后命令在 200ms 内淡入；复制按钮的标签切换为 Term Green 的 'copied ✓'，持续 1400ms。
- 动效：代码面板标签：JS/TS 切换滑动一条 Term Green 下划线（Motion layoutId）；面板内容水平 8px 交叉淡入淡出，220ms --ease-io；输出注释行（// → FigleafResult）每次切换时逐字符打出一次（500ms，在减少动效下禁用）。
- 动效：功能卡片：悬停上浮 2px，图标的描边重绘（stroke-dashoffset，每次悬停一次）。
- 动效：计数器：每个数字在显现时计数一次（600ms），使用 tabular-nums；'(sample)' 说明文字从不动画。
- 动效：头像：首字母圆圈在悬停时获得 2px Term Green 圆环并缩放 1.06，名称工具提示淡入；头像条以每个头像 40ms 错开进入。
- 动效：更新日志手风琴：高度 0 到 auto，opacity 0 到 1，240ms --ease-io；Plus 旋转 45 度变成 X；打开时版本圆点填充 Term Green。
- 动效：文档卡片：TOC 模拟的激活行带有一条 Term Green 左侧竖线，以缓慢的 6s 间隔循环在行间滑动（悬停时和减少动效下暂停）— 让页面感觉有人在维护。
- 动效：链接：.link-draw 在悬停和 focus-visible 时以 220ms 生长出 1px Term Green 下划线。
- 动效：prefers-reduced-motion: reduce — 禁用打字、计数器（直接显示最终值）、TOC 循环、错开显现；保留颜色/边框的悬停变化。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：无摄影、无图库、无外部图片 — 代码面板就是主视觉图。窗口外框（三个点、标题栏）、安装提示符、头像（首字母圆圈）、徽章、赞助商层级、TOC 模拟和社区字形全部用 SVG/CSS 绘制。社区链接使用绘制的通用字形（一个仓库盒子、一个聊天气泡、一个议题圆环）— 绝不使用真实平台标志。图标：仅 lucide-react，描边宽度 2。

## 页面与区块
### 首页（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[BRAND] = Figleaf，[PKG] = figleaf，[WHAT] = 面向配置与表单的零依赖 schema 校验，[STARS] = 8.4k）。将每个字符串、数字、代码行和列表都放入 src/content.ts 并从中渲染。若任一变量值不同，则重写宣传语、两个代码示例（js 和 ts）、全部六个功能、文档模拟标题、赞助层级和更新日志条目，使其对新库而言具体可信，同时保持相同的结构和数量（6 个功能、4 个计数器、8 位贡献者、5 行目录、3 个层级、3 条更新日志条目）。库、API、贡献者和数据均为虚构；计数器带有“(sample)”说明。示例的 API 事实：figleaf 导出 `schema`、`field`、`check`；schema 编译为普通函数；错误是 { path, message, got } 的数组。
   布局：不适用
   动效：不适用
2. **页头** — 左侧：字形（一个内联 SVG 括号中的叶子标记，Term Green）和字标 '[BRAND]'（JetBrains Mono 700 17px），链接到 ./index.html。中间导航（JetBrains Mono 400 13px）：'Sample' → #sample，'Features' → #features，'Humans' → #humans，'Docs' → #docs，'Sponsors' → #sponsors，'Changelog' → #changelog。右侧：一个标签 '★ [STARS]'（绘制的星形字形，非平台标记；示例）和一个小的主按钮 'Get started' → #sample。低于 820px：仅字形 + 字标 + Get started。低于平板断点处，一个紧凑菜单按钮（lucide Menu，44px 触控目标）打开六个锚点的堆叠列表，使每个区块在移动端均可到达。
   布局：顶部粘性，Paper/92% 带模糊和 1px Rule 边框，高度 64px，容器对齐。
3. **带安装条的 Hero** — 眉题 'OPEN SOURCE · MIT · ZERO DEPENDENCIES'。H1：'[BRAND].' 然后是标题块内的宣传语行（Overpass 20px）：'[WHAT] — small enough to read on a coffee break, strict enough to trust in production.' 卡片上的 InstallStrip：Term Green 的 '$' 提示符，JetBrains Mono 700 16px 的 'npm i [PKG]'，以及复制按钮；旁边两个 CTA：主按钮 'Read the docs' → #docs 和次按钮 '60-second tour' → #sample。安装条下方一行说明：'4.1 kB min+gzip · ESM & CJS · Node 18+, browsers, workers'。
   布局：Paper 背景，页头下方顶部垂直内边距 120px，底部 72px。居中列最大宽度 760px；InstallStrip 为该列全宽，高度 56px。
4. **代码示例** — 区块 id='sample'。CodePanel：窗口镶边（三个 Ink 圆点，标题 '[PKG] · 60-second tour'），JS/TS 标签页，然后是示例 — JS：import { schema, field, check } from '[PKG]' / const env = schema({ /   port: field.number.int().default(8080), /   keys: field.string.min(24), /   retries: field.number.max(5).when(check.isNaN, 0), / }) / const cfg = env.parse(process.env) // → { port: 8080, keys: '…', retries: 0 } / cfg.errors // → [] — TS：相同内容加上类型化泛型：const env = schema<{ port: number; keys: string }>({ … }) 以及一行 // cfg: { port: number; keys: string } — inferred, not asserted。面板下方，三行带对勾字形的快速说明：'Schemas are plain functions — no classes, no DSL to learn'；'Errors come back as data, ready to hand to a form'；'Zero dependencies; the bundle chart is a bar and a rumor.' 代码 pre 获得 overflow-x:auto 并带右侧渐隐边缘；输出注释在移动端换行到独立行；对勾列表与面板左边缘对齐。
   布局：Wash 背景区块。面板最大宽度 820px，位于带 1px Rule 边框和 8px 圆角的卡片上，镶边栏 40px；代码区域 Ink-on-Card 13.5px，带 token 颜色（kw Term Green Deep，str Amber Dot，fn Ink 700，num Amber Dot，com Slate Green，pln Ink）。面板下方快速说明为 Overpass 15px，带绘制的对勾。
5. **功能** — 区块 id='features'。眉题 'WHY [BRAND].toUpperCase()' 和 H2 'Six features, no asterisks.' 卡片：1）Zap — 'Fast by not being clever' — 'A compiled schema is one function; 1M parses of a 12-field config run in under 90ms on a laptop from 2019.' 2）ShieldCheck — 'Strict by default' — 'Unknown keys fail. Opt into sloppiness explicitly with .loose() — the door is labeled.' 3）Braces — 'Typed at the edges' — 'The TS side infers the output type from the schema; your config object arrives already knowing itself.' 4）FileJson — 'Errors as data' — 'Every failure is { path, message, got } — serialize it, log it, or render it next to the input it belongs to.' 5）Leaf — 'Tree-shakeable' — 'Import field.string and that is what ships; the whole library visits your bundle as 4.1 kB.' 6）GitBranch — 'Stable core, semver kept' — 'Two majors in four years, both announced with migration notes and a codemod, not a blog post.'
   布局：Paper 背景。3x2 网格，20px 间距；卡片位于 Wash 上，1px Rule 边框，20px 内边距；图标 22px Term Green；标题 JetBrains Mono 700 15px；正文 Overpass 14.5px / 1.6。低于 860px：2 列；低于 640px：1 列。
6. **计数器** — 一条细线边界的横带：'★ [STARS]' / 'stars (sample)'；'210k' / 'weekly downloads (sample)'；'38' / 'contributors'；'4.1 kB' / 'minified + gzip'。数字为 JetBrains Mono 700 28px Ink，带 Term Green 对勾点；说明为 mono 11px Slate Green。
   布局：全宽横带，顶部/底部 1px Rule，垂直内边距 28px，四个等宽单元格带垂直细线分隔；移动端换行为 2x2。
7. **人类** — 区块 id='humans'。眉题 'MAINTAINED BY HUMANS' 和 H2 'The people behind the leaf.' 八个 Avatar 首字母圆圈：'AN' Anya Nilsson — 'creator, breaks it'；'JT' Jordan Tapp — 'types, fixes them'；'MC' Mei Chen — 'docs maven'；'RS' Ravi Shah — 'perf; owns the 90ms'；'LB' Lina Bakken — 'forms integration'；'DO' Daniel Osei — 'release automation'；'PV' Petra Voss — 'codemods'；'KM' Kaito Mori — 'benchmarks'。悬停或聚焦显示姓名和一句话简介。横带下方：一张绘制的 good-first-issue 卡片：'Good first issues: 6 open — the docs one is genuinely fun.' 链接到 '#'（占位符）。
   布局：Wash 背景。头像位于居中的换行行中，56px 圆圈（Wash 填充，Ink 首字母，Rule 边框；悬停环 Term Green）；姓名为 JetBrains Mono 12px，位于工具提示中；问题卡片最大宽度 560px 居中。
8. **文档与赞助** — 两张卡片并排。DocsCard（id='docs'）：H3 'Docs'，一行 'Everything fits in one read at the dentist'，TocMock — 五行带活动滑动规则线：'Getting started'、'Field types'、'Errors as data'、'Forms integration'、'Recipes: env, CLI flags, fetch bodies'；一个次按钮 'Open the docs' → '#' 占位符。Sponsors（id='sponsors'）：H3 'Sponsors'，一行 'Server bills and coffee, in that order.' 三个绘制的 TierCards：'Leaf' $2/mo — 'name in the README'；'Branch' $10/mo — 'name + early betas'；'Canopy' $50/mo — 'logo here, priority issues'。每个带一个通用绘制的心形字形和 '#' 链接。低于 1024px 时，两列网格折叠为单列，使用 minmax(0,1fr) 且卡片上 min-width:0；box-sizing:border-box；无裁剪；目录分钟数永不截断。
   布局：Paper 背景。DocsCard 6 列，Sponsors 6 列，均为卡片 1px Rule 边框 28px 内边距；层级在内部堆叠，带细线分隔。低于 860px：堆叠。
9. **更新日志** — 区块 id='changelog'。眉题 'CHANGELOG' 和 H2 'Recent versions.' 三个手风琴项：'v2.4.0'（Amber 点）— 'Minor: .when() guards on fields; errors now carry `got` so forms can explain themselves. Migration: none — that''s the point.'；'v2.3.1'（Term Green 点）— 'Patch: TS 5.6 inference fix; the type now survives an intermediate variable. Benchmarks unchanged, bragging unchanged.'；'v2.3.0'（Amber 点）— 'Minor: .loose() for legacy configs; documented the one footgun we could not remove.' 结尾一行：'Older entries live in CHANGELOG.md — semver, dates optional, drama absent.' 最新条目默认展开；每个版本行旁边带一行摘要（无日期——像 'latest' 这样的相对词可以）；最新点为实心绿色，次版本为琥珀色，使 Terminal 绿色得以体现。
   布局：Wash 背景。行位于卡片上，1px Rule 边框；版本 JetBrains Mono 700 14px 带其圆点；正文 Overpass 15px / 1.7 最大宽度 66ch；右侧 Plus 图标。容器最大宽度 720px。
10. **页脚** — 一条 Paper 横带，顶部 1px Rule 边框：左侧，字形 + '[BRAND] — MIT license. Copy it, break it, ship it.'；中间，CommunityGlyphs 带标签：'Repository' → '#'，'Issues' → '#'，'Chat' → '#'（绘制的通用字形，绝不用平台标记）；右侧，'★ [STARS] (sample) · Made by humans, maintained between releases.' 底部行 mono 11px：'© The [BRAND] contributors. Sample figures throughout.'
    布局：垂直内边距 48px，三部分行；底部行在细线下方 24px；低于 640px 堆叠。

## 资产（Assets）
- 图标（icon）：仅使用 lucide-react：Zap、ShieldCheck、Braces、FileJson、Leaf、GitBranch、Copy、Check、Plus、X、ArrowRight、Heart。描边宽度 2，16–24px，颜色继承。public/favicon.svg 手写：viewBox 0 0 32 32，一个 32x32 的 rect，rx 7，填充 #FAF8F2，带 1px #1F2421 边框，方括号内是一个 Term Green（#2F9E44）叶子字形。没有其他 logo：项目名称始终以文字形式呈现。
- 图片（image）：仅在代码中绘制——不用照片、不用图库、不用外部图片。代码面板的窗口边框、安装提示、手写的 token 高亮（在 content.ts 中按 token 存储为类名）、以首字母圆圈表示的 avatar、赞助等级徽章、目录（TOC）模拟、社区图标（仓库方块、聊天气泡、issue 圆环——绝不使用真实平台标识）以及 favicon 均为 SVG/CSS。编写 ASSETS.md，列出 lucide-react（ISC）、@fontsource/jetbrains-mono 和 @fontsource/overpass（OFL-1.1），并注明 'No image assets; all visuals drawn in code.'
- 字体（font）：安装 @fontsource/jetbrains-mono 和 @fontsource/overpass，并按 Setup 中所述在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包进 dist/。

## 禁止事项
- 无后端、无表单提交、不向任何 API 发起 fetch 请求：标签页切换、复制按钮和手风琴均为纯客户端状态；所有站外链接均为 '#' 占位符。
- 此单页上的所有链接均为锚点（./index.html#sample、#features、#humans、#docs、#sponsors、#changelog）外加 '#' 占位符。
- 一切资源自托管：字体通过 Fontsource 加载，图标以 npm 包或内联 SVG 形式提供。不使用 CDN 的 <script> 或 <link> 标签，不使用 Google Fonts，不接入分析工具，不使用外部代码高亮器。
- 生产构建：压缩、不生成 source map、不将 src/ 复制进 dist/，使用单条命令 npm run build，输出至 dist/ 且小于 5 MB。
- 不使用真实存在的库、包、平台及其商标（不出现代码托管平台 logo、npm 标志、聊天平台图标）；社区图标为通用几何图形绘制；计数器为示例数字并附说明文字。
- 任何位置均不出现日期或年份：变更日志仅使用 semver，发布说明写 'migration: none'，站点永不显示当天日期。
- 除可选的页脚署名链接外，站点内绝不提及 VibeFather 或任何其他品牌；所有文案均为虚构的美式英语。
- 全局遵循 prefers-reduced-motion：禁用打字效果、计数器、目录循环和错落动画；保留颜色/边框的悬停变化。
- 页面必须在 1440x900 桌面端和 390x844 移动端正常工作且控制台零报错；标签页、复制按钮、手风琴和头像仅用键盘即可操作，且每个交互元素都有可见的焦点环。
- 文案保持具体：不使用 lorem，不使用营销形容词；每个数字、版本动词和 API 名称均存放于 src/content.ts。

---
— Prompt by VibeFather · https://vibefather.ai/t/open-source-project-homepage · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
