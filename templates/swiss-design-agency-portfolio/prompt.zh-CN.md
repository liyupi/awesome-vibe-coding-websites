> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 瑞士设计机构作品集

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简报
为 [BRAND] 打造的双页面作品集网站。[BRAND] 是一家位于 [CITY] 的小型设计工作室，从事 [DISCIPLINE] 领域的工作。网站严格遵循瑞士国际主义排版风格（Swiss International Typographic Style）：可见的 12 栏网格、超大号 grotesk 标题（左对齐、右不齐）、红/黑/白配色、发丝线分隔，以及一切皆编号。首页（index.html）介绍工作室，并以带分隔线的行列出六个编号案例研究。案例研究页（case-study.html?p=01 … ?p=06）从内容文件渲染任意项目。点击项目行时，其编号和标题通过跨文档 View Transitions 变形为案例研究页的主视觉，并以红色全屏擦除作为回退方案。所有图像均为代码绘制的几何 SVG。

- 受众：[BRAND] 的潜在客户（文化机构、交通管理部门、出版商、艺术节），他们希望看到严谨性的证明；以及浏览工作室作品的设计师。
- 目标：让工作室的严谨作风在第一时间可见，并促使访客打开一个案例研究，然后写信至 [CONTACT_EMAIL]。
- 语气：精确、冷静、自信、实事求是。使用简短的陈述句，用数字而非形容词，不使用感叹号，不使用营销最高级。

## 技术栈
- 框架：Vite 5 + 原生 TypeScript（MPA）
- 样式：Tailwind CSS 3.4
- 库：motion（Motion for vanilla JS，v11）（MIT）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、typescript（Apache-2.0）、vite（MIT）、@fontsource-variable/inter-tight（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 使用 vanilla-ts 模板通过 npm create vite@latest 搭建脚手架，然后 npm install motion @fontsource-variable/inter-tight @fontsource-variable/inter @fontsource/ibm-plex-mono 以及 npm install -D tailwindcss@3.4 postcss autoprefixer。
  - package.json 脚本："dev": "vite"，"build": "tsc && vite build"，"preview": "vite preview"。
  - vite.config.ts：base './'，build.sourcemap false，build.rollupOptions.input = { main: resolve(__dirname, 'index.html'), case: resolve(__dirname, 'case-study.html') }。
  - 项目文件：index.html、case-study.html、public/favicon.svg、src/content.ts、src/art.ts、src/styles.css、src/home.ts、src/case.ts、src/shared/chrome.ts（页眉 + 页脚标记）、src/shared/reveal.ts、src/shared/transitions.ts、src/shared/grid-overlay.ts、tailwind.config.js、postcss.config.js、ASSETS.md。
  - 每个 HTML 文件仅包含 <div id="app"></div>、一个 <link rel="icon" href="./favicon.svg" type="image/svg+xml">、一个在绘制前运行 document.documentElement.classList.add('js') 的内联脚本，以及一个模块脚本（./src/home.ts 或 ./src/case.ts）。所有标记均由 TypeScript 从 src/content.ts 渲染。
  - 所有文案位于 src/content.ts：工作室信息、导航、主视觉文案行、统计数据、服务、原则、页脚，以及一个包含六个对象的 projects 数组 { id: '01'…'06', title, discipline, sector, year, client, role, scope, team, intro, brief: [p1, p2], system: [{ title, text } ×4], quote, attribution, results: [{ value, label } ×3], art: 'transit' | 'staves' | 'wheels' | 'specimen' | 'arcs' | 'dots', figCaptions: [c1, c2, c3, c4] }。如果变量值与默认值不同，请重写此文件中的所有文案，以适配新的品牌、城市、学科和精选项目。保持结构、数量和大致长度不变。
  - tailwind.config.js：content ['./index.html','./case-study.html','./src/**/*.ts']；theme.extend.colors = { paper: '#FFFFFF', ink: '#111111', signal: '#E62314' }；fontFamily = { display: ['"Inter Tight Variable"','Arial','sans-serif'], sans: ['"Inter Variable"','Arial','sans-serif'], mono: ['"IBM Plex Mono"','monospace'] }；borderRadius 全部设为 0。
  - 在 src/styles.css 的入口模块顶部导入一次字体：import '@fontsource-variable/inter-tight'; import '@fontsource-variable/inter'; import '@fontsource/ibm-plex-mono/400.css'; import '@fontsource/ibm-plex-mono/500.css'。
  - src/styles.css 包含 @tailwind base/components/utilities、.grid-12 容器、.caption 和 .rule 组件、reveal 起始状态（作用域在 html.js 下）、@view-transition 规则、所有 ::view-transition-* 伪元素样式及其 @keyframes、#wipe 面板和网格叠加层样式。
  - .grid-12：display grid；grid-template-columns repeat(4, minmax(0,1fr))；column-gap 12px；padding-inline 16px。在 ≥768px 时：repeat(12, minmax(0,1fr))，column-gap 20px，padding-inline 24px。在 ≥1280px 时：column-gap 24px，padding-inline 32px。每个区块都使用 .grid-12，并仅通过 col-start/col-span 工具类放置子元素。不使用任意外边距来定位内容。
  - src/art.ts 导出 art(kind, variant: 'a' | 'b' | 'c', aspectClass)，返回一个内联 <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" role="img" aria-label=…> 字符串（构图在 Assets 中指定）。
  - 案例页面读取 new URLSearchParams(location.search).get('p')。未知或缺失的值回退到 '01'。document.title 为 '<project title> — [BRAND]'。在首页上，标题为 '[BRAND] — [DISCIPLINE], [CITY]'。
  - 所有内部链接均为文件名：./index.html、./index.html#work、./index.html#studio、./index.html#contact、./case-study.html?p=01 等。

## 变量
- [BRAND] — 工作室名称（默认：“Ostrand”）。简短的自创工作室名称；用于页眉字标、介绍文案和页脚。
- [CITY] — 工作室所在城市（默认：“Basel”）。显示在页眉说明文字、介绍段落和页脚地址中。
- [DISCIPLINE] — 工作室的业务方向（默认：“Identity, editorial and wayfinding design”）。决定服务列表和六个虚构项目。
- [FEATURED_PROJECT] — 精选项目（案例 01）（默认：“Halle Nord Transit Signage”）。项目 01 的标题，显示在精选区块中，并作为完整撰写的案例研究。
- [CONTACT_EMAIL] — 联系邮箱（默认：“studio@ostrand.example”）。在联系区块和页脚中显示为 mailto 链接。演示时请使用 .example 域名。
- [CREDIT] — 在页脚保留一个小的“Template by VibeFather”链接，指向 https://vibefather.ai/t/swiss-design-agency-portfolio（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 纸白（Paper）`#FFFFFF` — 页面背景、红色和黑色区块上的文字
- 墨黑（Ink）`#111111` — 所有文字、细线（1px）、黑色区块、联系/页脚背景
- 信号红（Signal Red）`#E62314` — 行悬停填充、案例研究数字、原则横幅、艺术点缀、擦除面板、深色背景上的焦点环
- 网格色调（Grid Tint）`rgba(230,35,20,0.08)` — 仅用于网格叠加列填充（列边缘为 1px rgba(230,35,20,0.35)）

### 字体排印
- 展示字体：主视觉、区块标题、项目标题、数字、字标：Inter Tight Variable（OFL），字重 500/700/800
- 正文字体：正文文案、导航、列表：Inter Variable（OFL），字重 400/500
- 说明文字：区块标签如 (02)、元标签、图注、页脚小字行：IBM Plex Mono（OFL），字重 400/500

### 布局与动效
- 间距：8px 基准单位。区块 padding-block 桌面端 160px / 移动端 96px。页头桌面端高 56px，移动端 48px。项目行桌面端高 112px（padding-block 32px），移动端自适应，内边距 20px。字号比例：主视觉 clamp(4rem, 14.5vw, 15rem) 字重 800，行高 0.84，字距 -0.045em。区块标题 clamp(2.5rem, 6vw, 6rem) 字重 700，行高 0.9，字距 -0.035em。行标题 clamp(1.5rem, 3vw, 2.75rem) 字重 700，字距 -0.02em。案例数字 clamp(7.5rem, 24vw, 22.5rem) 字重 800，行高 0.8，字距 -0.05em。正文 Inter 桌面端 17px/1.45，移动端 16px，最大 60ch。.caption = IBM Plex Mono 500，12px，行高 1.3，大写，字距 0.04em。所有文字左对齐、右侧不齐；数字使用 font-variant-numeric: tabular-nums。
- 圆角：所有地方均为 0。任何元素都没有圆角，包括按钮、焦点环和艺术图形。
- 动效：标题行揭示：标题以行数组存储，并渲染为 <span class="line" style="display:block;overflow:hidden"><span class="line-inner" style="display:block">…</span></span>。在 html.js 下，.line-inner 初始为 translateY(105%)。当标题进入视口时（Motion inView，amount 0.4，once），将每个内部元素在 700ms 内动画至 translateY(0)，缓动 [0.22, 1, 0.36, 1]，错开 70ms。主视觉在加载后 100ms 播放。
- 动效：线条绘制：带有 data-reveal="rule" 的元素（1px 墨黑细线）初始为 transform scaleX(0)，transform-origin 为 left，进入视口时在 600ms 内动画至 scaleX(1)，缓动 [0.65, 0, 0.35, 1]。项目行顶部线条沿列表向下错开 60ms。
- 动效：淡入上移：带有 data-reveal="fade" 的说明文字和段落从 opacity 0、translateY(16px) 到 opacity 1、0，历时 500ms，ease-out，进入视口时触发。
- 动效：图形裁剪：带有 data-reveal="clip" 的艺术区块从 clip-path inset(0 0 100% 0) 到 inset(0 0 0 0)，历时 900ms，缓动 [0.76, 0, 0.24, 1]，当 25% 可见时触发。
- 动效：行悬停（指针设备）：背景从 ink→signal 过渡 150ms linear，所有文字变为 paper，箭头 SVG 在 200ms 内从 0deg 旋转至 -45deg，数字向右平移 8px。:focus-visible 获得相同状态，外加 2px 墨黑轮廓，内缩 -2px。
- 动效：跨文档页面过渡（首页 ↔ 案例，案例 → 下一个案例）：@view-transition { navigation: auto; }。被点击链接的 [data-vt=num] 和 [data-vt=title] 元素获得 view-transition-name proj-num 和 proj-title。案例主视觉的数字和标题携带相同名称，因此它们会变形过渡。::view-transition 获得背景 #E62314，使页面之间显示红色区域。::view-transition-old(root) 在 250ms ease 内淡出。::view-transition-new(root) 在 600ms cubic-bezier(0.65,0,0.35,1) 内以 150ms 延迟将 clip-path 从 inset(100% 0 0 0) 动画至 inset(0)。::view-transition-group(proj-num) 和 (proj-title) 在 600ms cubic-bezier(0.65,0,0.35,1) 内动画。它们的新旧图像使用 height:100%; width:auto; object-position:left top，旧图像在前 40% 内淡出，新图像从 30% 到 100% 淡入。
- 动效：回退擦除（当 'onpageswap' in window 为 false 时）：一个固定的 #wipe div（inset 0，背景 #E62314，z-index 100，pointer-events none，clip-path inset(100% 0 0 0)）。在带有 data-transition 的内部链接点击时，preventDefault，设置 sessionStorage 'gridline:wipe' = '1'，用 Motion 将面板在 420ms 内动画至 clip-path inset(0 0 0 0)，缓动 [0.76, 0, 0.24, 1]，然后设置 location.href。页面加载时，如果标志已设置，面板从 inset(0) 开始，在 480ms 内以相同缓动动画至 inset(0 0 100% 0)，然后移除标志。
- 动效：网格叠加切换：叠加层在 200ms 内淡入淡出 opacity 0↔1。
- 动效：prefers-reduced-motion: reduce：跳过所有揭示（元素以最终状态渲染），在媒体查询内设置 @view-transition { navigation: none; }，永不运行擦除，并移除悬停旋转和平移（颜色变化保留）。不使用平滑滚动库，不劫持滚动；锚点使用原生 CSS scroll-behavior: smooth，在减少动效下禁用。
- 图像：无照片、无人物。每张图像都是来自 src/art.ts 的扁平几何 SVG 构图，仅由纸白、墨黑和信号红构成：在 1200×800 viewBox 内、以 100 单位为模数的 12×8 网格上，使用条、圆、环、弧、点阵和巨大字形。无细于 8 单位的描边，无渐变，无阴影，无纹理。箭头为内联 SVG 线条（stroke 2px，方形端点，currentColor）。变体 a：纸白背景，墨黑元素，一个红色元素。变体 b：红色背景，纸白和墨黑元素。变体 c：墨黑背景，纸白元素，一个红色元素。

## 页面与区块
### [BRAND] — [DISCIPLINE], [CITY] (`index.html`)
1. **网格叠加层 + 擦除面板** — 一个固定的 div#grid-overlay（inset 0，pointer-events none，z-index 90，opacity 0），内含一个 .grid-12，高度 100%，有 12 个子 div（768px 以下为 4 个）。每个子 div 填充 rgba(230,35,20,0.08)，左右各有 1px rgba(230,35,20,0.35) 的边框。它由页头的 Grid 按钮和 G 键切换（在输入框中打字时忽略）。状态持久化在 localStorage 'gridline:grid' 中。默认关闭。另有一个固定的 div#wipe 用于回退过渡，aria-hidden。
   布局：固定全视口图层，位于所有内容之上。叠加层的列与 .grid-12 完全对齐，因此内容会明显吸附到这些列上。
   动效：叠加层淡入淡出 200ms。擦除效果如设计 > 动效中所述。
2. **页头** — 字标 '[BRAND]'（Inter Tight 800，20px，letter-spacing -0.03em），后跟一个 10×10px 的信号红方块，间距 6px。说明文字 '[DISCIPLINE]'。说明文字 '[CITY] — Est. 2011'。导航：'Work'（./index.html#work）、'Studio'（./index.html#studio）、'Contact'（./index.html#contact），Inter 500 15px，悬停时文字变为信号红并添加 1px 下划线，偏移 4px。Grid 按钮：说明文字 'Grid' 加一个 10×10px 方块，带 1px 墨色边框，开启时填充信号红，aria-pressed，位于导航之后。
   布局：position sticky，top 0，z-index 50，纸色背景，1px 墨色底边线，高度 56px，项目垂直居中。桌面端 .grid-12：字标 col 1–3，学科说明 col 4–6，城市说明 col 7–9，导航 + Grid 按钮 col 10–12，右对齐，间距 20px。移动端（4 列）：字标 col 1–2，导航 col 3–4 右对齐，13px。说明文字和 Grid 按钮在移动端隐藏（G 键仍然有效）。
   动效：加载时无。导航悬停颜色 150ms。
3. **首屏（00）** — 说明文字 '(00) Index' 左上角。标题行：['Order,'、'made'、'visible.']。介绍段落（Inter 20px/1.4 桌面端，17px 移动端）：'[BRAND] is a nine-person studio in [CITY] working in identity, editorial and wayfinding design. We build systems that hold their shape under pressure: on a sign read at 60 km/h, on a page set at 9 pt, on a screen of any size.' 一个实心信号红方块，宽高比 1:1。下方统计条包含四项，每项为一个数字（Inter Tight 700，clamp(3rem, 5vw, 4.5rem)，等宽数字）位于说明标签上方：'112' / 'Projects delivered'、'14' / 'Years in practice'、'09' / 'People'、'23' / 'Active clients'。
   布局：区块 padding-top 96px 桌面端 / 64px 移动端，padding-bottom 160/96。第 1 行：说明 col 1–3。第 2 行：标题 col 1–12，margin-top 24px。第 3 行（margin-top 64px）：红方块 col 1–2（桌面端），介绍段落 col 7–11。第 4 行（margin-top 120px）：一条 1px 墨色线 col 1–12，然后四项统计分别位于 col 1–3、4–6、7–9 和 10–12，除第一项外每项带 1px 墨色左边线，padding-top 24px。移动端：标题全宽，红方块 col 1–1（宽高比 1:1），介绍 col 1–4，统计为 2×2 网格（col 1–2、col 3–4）。
   动效：标题行在加载时揭示（延迟 100ms）。红方块在标题开始后 900ms 从底部裁剪进入。介绍和统计在进入视口时淡入上移。统计线绘制。
4. **精选（01）** — 说明文字 '(01) Featured'。项目 01 的大型艺术区块（艺术 'transit'，变体 b）。下方说明栏：数字 '01'（data-vt=num，Inter Tight 700，48px），标题 '[FEATURED_PROJECT]'（data-vt=title，Inter Tight 700，clamp(1.5rem, 3vw, 2.75rem)），说明 'Wayfinding — 2025'，以及一个链接 'View case study' 带内联箭头 SVG。整个说明栏是一个 <a href="./case-study.html?p=01" data-transition data-project="01">。
   布局：说明 col 1–3，margin-bottom 24px。艺术区块 col 1–12，宽高比 21/9 桌面端，4/5 移动端。说明栏（margin-top 16px，1px 墨色顶线，padding-top 16px）：数字 col 1，标题 col 2–7，学科/年份说明 col 8–10，'View case study →' col 11–12 右对齐。移动端：数字 col 1，标题 col 2–4，说明和链接堆叠在下方 col 2–4。
   动效：艺术区块图形裁剪。线绘制。悬停说明栏时标题和链接变为信号红，箭头在 200ms 内向右平移 6px。
5. **精选作品索引（02）** — 区块 id="work"。页头行：说明 '(02) Selected work' 和说明 '06 projects'。六行，每行是一个 <a href="./case-study.html?p=NN" data-transition data-project="NN">，包含一个数字（data-vt=num）、一个标题（data-vt=title）、行业、学科、年份和一个箭头 SVG（24px，一条水平线带 V 形箭头）。默认行：01 '[FEATURED_PROJECT]' — Regional transit authority — Wayfinding — 2025。02 'Kammer Quarterly' — Chamber music society — Editorial — 2024。03 'Velo Atlas' — Bicycle cooperative — Identity — 2024。04 'Basalt Type Specimen' — Independent type foundry — Editorial — 2023。05 'Seeufer Jazz 2023' — Lakeside music festival — Poster series — 2023。06 'Flussmuseum' — River natural history museum — Exhibition graphics — 2022。
   布局：页头行 col 1–6 / col 7–12 右对齐，margin-bottom 32px。每行是一个 .grid-12，带 1px 墨色顶线（data-reveal=rule），最后一行还有底线。高度 112px，项目垂直居中。数字 col 1（Inter Tight 700，40px）。标题 col 2–7。行业 col 8–9（Inter 15px）。学科 + 年份 col 10–11（说明）。箭头 col 12，右对齐。移动端：数字 col 1（28px），标题 col 2–4（24px）。标题下方 col 2–4 是一行说明 'Wayfinding · 2025'，箭头在其右端。行业隐藏。
   动效：线以 60ms 交错绘制，标题淡入上移。悬停/聚焦时该行反转为信号红填充配纸色文字，箭头旋转 -45deg，数字向右移动 8px。点击时，transitions.ts 在该行的数字和标题上设置 view-transition-name proj-num/proj-title，并在导航前将 sessionStorage 'gridline:last' = NN 存储。
6. **工作室（03）** — 区块 id="studio"。说明文字 '(03) Studio'。陈述标题行（Inter Tight 500，clamp(2rem, 4.2vw, 4rem)，line-height 1.02，letter-spacing -0.025em）：['We start every project with a grid'、'and one question: what does the'、'reader need first? Everything'、'else is hierarchy.']。三个服务列表，每个带一个说明标题和五个 Inter 17px 项目。Identity：Visual identity systems、Logotypes、Brand guidelines、Type selection、Motion principles。Editorial：Magazines and journals、Books and catalogues、Annual reports、Type specimens、Digital publications。Wayfinding：Signage systems、Pictogram families、Maps and diagrams、Exhibition graphics、Transit information。
   布局：说明 col 1–3 与陈述 col 4–12 在同一行（桌面端）。服务列表在 margin-top 120px 处位于 col 4–6、7–9 和 10–12，每个顶部有 1px 墨色线，padding-top 16px，项目间距 8px。移动端：说明，然后陈述 col 1–4，然后列表堆叠 col 1–4，间距 48px。
   动效：陈述行揭示。列表线绘制。项目以 40ms 交错淡入上移。
7. **原则横幅** — 一个全出血信号红横幅。纸色标题行（Inter Tight 800，clamp(3rem, 9vw, 9rem)，line-height 0.86，letter-spacing -0.04em）：['Twelve columns.'、'One red.'、'No decoration.']。纸色说明文字：'Studio principles, rev. 2026'。一个纸色说明编号列表：'01 Content sets the grid'、'02 Hierarchy before style'、'03 Every line on a module'。
   布局：背景信号红，边缘到边缘，padding-block 120px 桌面端 / 80px 移动端。在 .grid-12 内：标题 col 1–12。其下（margin-top 64px）：一条 1px 纸色线 col 1–12，然后说明 col 1–3 和编号列表 col 7–12 作为三行，每行带 1px 纸色顶线（rgba 白色全不透明度）。
   动效：标题行揭示。线绘制。
8. **联系（04）+ 页脚** — 区块 id="contact"，墨色背景配纸色文字。说明文字 '(04) Contact'。标题行：['Start a'、'project.']（首屏尺度，略小：clamp(4rem, 12vw, 12rem)）。Mailto 链接 '[CONTACT_EMAIL]'，Inter Tight 700，clamp(1.5rem, 3.5vw, 3rem)，下划线 2px 偏移 8px，悬停时变为信号红，后跟一个箭头 SVG。密集页脚四列说明尺寸文字（值用 Inter 13px/1.5，说明标签）。Studio：'[BRAND]'、'Rasterweg 12'、'4000 [CITY]'。Contact：'[CONTACT_EMAIL]'、'Mon–Fri, 09–18'。Index：Work、Studio、Contact 链接。版权页：'Set in Inter Tight, Inter and IBM Plex Mono. Built on a 12-column grid. No images were photographed for this site.' 底行：'© 2026 [BRAND]'、'Back to top ↑'（链接到 ./index.html#top，箭头绘制为 SVG），以及，如果提示词的 Credit 部分提供了 credit 链接，该链接作为说明文字。
   布局：Padding-top 160/96。说明 col 1–3。标题 col 1–12。邮件链接 col 1–12，margin-top 48px。页脚在 margin-top 160px：1px 纸色线 col 1–12，然后列位于 col 1–3、4–6、7–9 和 10–12（移动端：2×2 位于 col 1–2 / 3–4）。底行在 margin-top 64px 处带 1px 纸色线：© col 1–4，credit col 5–8，返回顶部 col 9–12 右对齐。Padding-bottom 32px。
   动效：标题行揭示。纸色线绘制。邮件悬停颜色 150ms，箭头 translateX 6px。

### <项目标题> — [BRAND] (`case-study.html`)
1. **页头 + 覆盖层** — 与首页相同的页头、网格覆盖层和 #wipe。导航将 '← Index'（链接到 ./index.html#work，箭头以 SVG 绘制）作为第一个导航项加入。
   布局：与首页页头完全相同。
   动效：与首页相同。
2. **案例主视觉** — 说明行：'Case study' 和 '(NN/06)'。数字 'NN' 使用 signal red（信号红），采用 case-numeral 尺寸，view-transition-name 为 proj-num，宽度为 fit-content。项目标题（例如 '[FEATURED_PROJECT]'）使用 Inter Tight 800，clamp(3rem, 8.5vw, 9.5rem)，行高 0.88，字距 -0.04em，ink（墨色），view-transition-name 为 proj-title，宽度为 fit-content。
   布局：padding-top 64px。说明行：'Case study' 位于第 1–3 列，'(NN/06)' 位于第 10–12 列右对齐。桌面端：数字位于第 1–4 列，标题位于第 5–12 列，与同一行顶部对齐，margin-top 40px。标题自由换行。移动端：数字位于第 1–4 列上方，标题位于第 1–4 列下方，间距 16px。
   动效：通过视图过渡到达时，数字和标题从被点击的行形变而来。直接加载时（无过渡），标题获得逐行揭示（按内容文件的自然断行拆行，或单行），数字在 500ms 内淡入。
3. **元信息表格 + 引言** — 五个元信息单元格，每个都是说明标签在上、Inter 500 17px 的值在下。对于项目 01：Client 'Halle Nord Regional Transit'，Year '2025'，Role 'Wayfinding system, pictograms, typography'，Scope '41 stations, 1,800 signs'，Team '4 designers'。引言（Inter Tight 500，clamp(1.5rem, 2.4vw, 2.25rem)，行高 1.15）：'A complete passenger-information system for a regional rail network of 41 stations, designed to be read in under two seconds by someone who has never been there before.'
   布局：margin-top 120px。一条 1px ink 分隔线位于第 1–12 列，然后单元格位于第 1–2、3–5、6–8、9–10 和 11–12 列（桌面端），除第一个外每个都有 1px ink 左边线和 16px 内边距。移动端：单元格为 2 列行（标签第 1–2 列，值第 3–4 列），每个都有顶部边线。引言位于 margin-top 96px，第 4–10 列（移动端第 1–4 列）。
   动效：边线绘制。单元格以 50ms 交错淡入上移。引言不使用逐行揭示；它淡入上移。
4. **图 1 — 全出血** — 项目类型的艺术图，变体 b，说明为 'Fig. 1 — ' + figCaptions[0]（对于 01：'Platform sign family, 1:20'）。
   布局：全出血，超出网格内边距（宽度 100vw），桌面端宽高比 16/9，移动端 4/5，margin-top 120px。说明在下方 .grid-12 内第 1–4 列，margin-top 12px。
   动效：图形裁剪。
5. **(A) 简报** — 说明标题 '(A) Brief'。来自 brief[] 的两段。对于 01：'Halle Nord had inherited signage from four operators and three decades. Passengers met nine typefaces, six arrow styles and no consistent order of information.' 和 'The brief was to replace all of it in fourteen months without closing a station, and to build a system that the transit authority's own team could extend.'
   布局：margin-top 120px。说明位于第 1–3 列，段落位于第 5–10 列（Inter 17px，段落间距 24px）。移动端：说明，然后段落位于第 1–4 列。
   动效：淡入上移。
6. **图 2 — 成对** — 两个同类型的艺术图块：左侧变体 a，右侧变体 c。说明为 'Fig. 2 — ' + figCaptions[1] 和 'Fig. 3 — ' + figCaptions[2]（对于 01：'Line diagram, concourse' / 'Night service variant'）。
   布局：margin-top 120px。左图块第 1–6 列，右图块第 7–12 列，均为宽高比 4/5，说明在各自下方。移动端：堆叠于第 1–4 列，间距 32px。
   动效：图形裁剪，右图块延迟 120ms。
7. **(B) 系统** — 说明标题 '(B) System'。来自 system[] 的四个编号决策。每个都有大数字（Inter Tight 700，64px，signal red）、标题（Inter Tight 700，28px）和文本（Inter 17px）。对于 01：'01 One typeface, three sizes' — 'Every sign uses a single grotesk at 48, 96 or 192 mm cap height, chosen by reading distance alone.' '02 A fixed order' — 'Line, direction, destination, exit. Always left to right, always in that order.' '03 A 12-unit module' — 'Panel widths are multiples of one module, so any two signs can sit side by side.' '04 Arrows point, nothing else does' — 'No decorative pictograms. Only one arrow form, rotated in 45° steps.'
   布局：margin-top 120px。说明位于第 1–3 列。决策以 2×2 排列于第 4–8 列和第 9–12 列（桌面端），每个都有 1px ink 顶部边线和 24px padding-top，行间距 64px。移动端：堆叠于第 1–4 列。
   动效：边线绘制。数字和文本以 60ms 交错淡入上移。
8. **图 4 — 偏移** — 同类型的艺术图块，变体 a，说明为 'Fig. 4 — ' + figCaptions[3]（对于 01：'Module sheet, all panel sizes'）。
   布局：margin-top 120px。说明位于第 1–3 列，与图像底部对齐（align-self end）。图像位于第 4–12 列，宽高比 3/2。移动端：图像位于第 1–4 列，说明在下方。
   动效：图形裁剪。
9. **引语 + 成果** — 拉引语（Inter Tight 500，clamp(2rem, 4.5vw, 4rem)，行高 1.02，字距 -0.025em）：'For the first time, our signs answer the question before passengers ask it.' 署名说明：'— Head of Passenger Information, Halle Nord Regional Transit'。来自 results[] 的三项成果，每项一个数字（Inter Tight 800，clamp(3.5rem, 7vw, 6.5rem)）加一个说明标签：'−38%' / 'Wayfinding complaints, year one'，'41' / 'Stations converted in 14 months'，'1' / 'Typeface across the network'。
   布局：margin-top 160px。引语位于第 1–10 列，左边缘有 6px 宽的 signal-red 竖条（伪元素跨越引语高度，置于栏间距中，不在文本内部）。署名位于第 1–6 列，margin-top 24px。成果位于 margin-top 120px：一条 1px ink 分隔线位于第 1–12 列，然后三个单元格位于第 1–4、5–8 和 9–12 列，除第一个外都有左边线。移动端：引语和成果堆叠于第 1–4 列。
   动效：引语逐行揭示（将引语行存储为数组）。成果淡入上移。边线绘制。
10. **下一个项目** — 一个全宽链接块 <a href="./case-study.html?p=NEXT" data-transition data-project="NEXT">，其中 06 回绕到 01。它包含说明 'Next project'、数字（data-vt=num，Inter Tight 800，桌面端 96px / 移动端 56px）、下一个标题（data-vt=title，clamp(2.5rem, 7vw, 7.5rem)，字重 800）和一个 48px 箭头 SVG。
    布局：margin-top 160px。ink 背景，paper 文本，padding-block 80px。在 .grid-12 内：说明位于第 1–12 列，然后数字位于第 1–2 列，标题位于第 3–11 列，箭头位于第 12 列底部右对齐。移动端：数字位于第 1 列，标题位于第 2–4 列，箭头在下方。
    动效：悬停将背景变为 signal red（150ms）并将箭头旋转 -45deg。点击时，transitions.ts 清除主视觉的名称（view-transition-name: none），将 proj-num/proj-title 移到此块的数字和标题上，存储 sessionStorage 'gridline:last' = NEXT，然后导航。新页面的主视觉从此块形变而出。
11. **页脚** — 与首页相同的无联系信息页脚块（四个密集列加底部行），位于 ink 背景上，紧接在 Next project 下方，由一条 1px paper 分隔线隔开。首页的大标题 'Start a project.' 不在此处重复。
    布局：与首页页脚的网格放置完全相同。padding-top 64px。
    动效：边线绘制。

## 资产
- 字体：通过 Fontsource npm 包 @fontsource-variable/inter-tight、@fontsource-variable/inter 和 @fontsource/ibm-plex-mono（400、500）自托管，均为 OFL-1.1 许可，在 TypeScript 入口文件中导入。在 ASSETS.md 中列出这三者及其 npm URL、作者（Inter/Inter Tight 为 Rasmus Andersson，Plex Mono 为 IBM）和 OFL-1.1。
- 图像：所有图形均为来自 src/art.ts 的代码绘制内联 SVG（viewBox 0 0 1200 800，100 单位模块）。每种类型在此以变体 a（纸色背景、墨色形状、红色点缀）描述。变体 b 将背景换为红色，墨色形状保持墨色，红色点缀变为纸色。变体 c 使用墨色背景、纸色形状，红色点缀保持红色。'transit'：墨色条高度 60，位于 y=200、360 和 520，从 x=0 分别延伸到 x=1200、900 和 600，另有一个红色圆形 r=180 位于 (840,560)。'staves'：五条墨色线高度 8，位于 y=240、320、400、480 和 560，从 x=100 到 1100，一个墨色垂直条 x=300 w=40 全高，以及一个红色正方形 200×200 位于 (700,140)。'wheels'：两个墨色圆环 stroke 48，r=220，位于 (340,460) 和 (860,460)，另有一个红色条 stroke 40 从 (340,460) 到 (860,240)，平头端点。'specimen'：文本 'Aa' 使用 Inter Tight 800，font-size 760，墨色，基线位于 y=700，x=60，另有一个红色条 x=1000 w=100 全高。'arcs'：四分之一圆盘锚定于 (0,800)，从最大开始绘制：r=800 墨色，r=600 纸色，r=400 红色，r=200 墨色。'dots'：墨色圆点 r=14 位于每个模块中心（12×8），另有一个红色正方形覆盖 x 800–1000 和 y 200–400。项目 01–06 按此顺序使用 transit、staves、wheels、specimen、arcs 和 dots。每个 SVG 都有一个由图形说明生成的 aria-label。
- 图标：无图标库。箭头是在 src/shared/chrome.ts 中代码绘制的内联 SVG：一个 24×24 viewBox，一条水平线从 (3,12) 到 (21,12)，以及一个尖角 (14,5)→(21,12)→(14,19)。Stroke currentColor，宽度 2，方形端点，斜接连接。它们被旋转用于 ↑（-90deg）、←（180deg）和悬停对角线（-45deg）。
- 图像：public/favicon.svg：一个 32×32 viewBox，包含一个全信号红（#E62314）正方形和一个纸色正方形 10×10 位于 (16,6)。无字母。代码绘制，在 ASSETS.md 中列为原创。

## 不要做的事
- 不包含任何形式的后端：没有服务器代码、API 路由、数据库、认证、分析或第三方 API。联系方式是一个普通的 mailto 链接，且没有任何表单。
- 不要从 fonts.googleapis.com、fonts.gstatic.com、Adobe Fonts 或任何 CDN 加载字体。仅通过 Fontsource 自托管。
- 不要使用 CDN 的 `<script>` 或 `<link>` 标签。每个脚本、字体和资源都在本地打包。
- 生产构建中不要包含 source map（`build.sourcemap false`），并且不要把 `src/` 复制到 `dist/`。
- 使用 base `'./'` 和相对资源路径。每个内部链接都指向一个文件名（`./index.html`、`./index.html#work`、`./case-study.html?p=02`），绝不指向裸目录或 `/`。
- 保持 `dist/` 在 20 MB 以下，在 1440×900 和 390×844 下零控制台错误。
- 尊重 `prefers-reduced-motion`：不要有 reveal、不要有视图过渡、不要有 wipe、不要有 hover 变换。
- 除非用户要求，否则不要更改技术栈（Vite + vanilla TypeScript + Tailwind CSS 3.4 + Motion）。不要添加 React、Lenis、GSAP 或任何平滑滚动或滚动劫持库。
- 除 #FFFFFF、#111111 和 #E62314（加上 8% 红色网格叠加色调）外，不要使用其他颜色。不要灰色、不要透明度淡化的文字、不要渐变、不要阴影、不要模糊、不要圆角。
- 不要居中正文或标题。一切都是左对齐、右参差，并且每个元素都通过 col-start/col-span 放置在 12 列（移动端 4 列）网格上。
- 不要使用任何真实机构的名称、标志、字标或标语，也不要使用真实客户名称或真实案例研究文案。所有品牌、客户、项目、引述和数字都是虚构的。
- 任何地方都不要使用商业 grotesk 字体（Helvetica、Helvetica Neue、Neue Haas Grotesk、Akzidenz-Grotesk、Univers），包括作为命名的 CSS 回退字体。仅使用 Inter Tight、Inter 和 IBM Plex Mono，并以 Arial/sans-serif 作为通用回退字体。
- 不要复制真实的瑞士海报或 Josef Müller-Brockmann 的艺术作品或构图。仅使用 Assets 中指定的几何构图。
- 不要使用库存照片、不要使用人物或面孔的位图、不要使用占位图服务、不要使用热链接文件。
- 不要使用第三方图标集或品牌标志。仅使用此处描述的代码绘制的箭头、数字和方块。
- 不要复制任何现有机构网站的代码或精确布局，也不要从 Aceternity UI、Tailwind Plus/Tailwind UI 或购买的模板中获取。
- 不要额外的 SEO 内容：不要 meta 描述、Open Graph 标签、JSON-LD 或站点地图。仅使用一个普通的 `<title>` 和 SVG favicon。
- 除了 Credit 部分中可选的署名链接外，不要在网站的任何地方提及 VibeFather。
- 不要将文案分散到多个文件中。所有文本都位于 `src/content.ts` 中，当变量值与默认值不同时，必须重写那里的文案。

---
— Prompt by VibeFather · https://vibefather.ai/t/swiss-design-agency-portfolio · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
