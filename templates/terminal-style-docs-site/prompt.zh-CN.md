> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 终端风格文档站点

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的三页终端风格文档站点，[BRAND] 是一个虚构的开源命令行工具（[PURPOSE]）。以等宽字体为主的界面，近黑色背景，配一种琥珀色强调色。包含固定顶栏、文件树侧边栏、滚动监听大纲、带复制按钮的终端窗口命令块，以及基于静态客户端索引的 '/' 搜索面板。页面：入门、命令参考和配置，通过哈希路由连接。

- 受众：从终端安装并使用 [BRAND] 的开发者：他们快速浏览以找到某条命令、复制它、查看某个标志或配置键，然后离开。次要受众：评判项目是否严肃且维护良好的维护者。
- 目标：让新用户在一个页面内从零到完成首次成功运行，并让每条命令、标志和配置键都能通过两次按键（/ 然后输入）或一次侧边栏点击到达。
- 语气：平静、精确、略带干涩，就像友好的人写出的优秀 man 手册。短句、第二人称、不用感叹号、不用营销词汇。终端风味来自字形（>、$、#、//、├─）和字体，而非玩笑。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、lucide-react（ISC）、@fontsource/jetbrains-mono（OFL-1.1）、@fontsource/ibm-plex-sans（OFL-1.1）、tailwindcss（dev）（MIT）、postcss（dev）（MIT）、autoprefixer（dev）（MIT）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化：
  - 脚手架：npm create vite@latest . -- --template react-ts，然后 npm i lucide-react @fontsource/jetbrains-mono @fontsource/ibm-plex-sans 和 npm i -D tailwindcss@3.4 postcss autoprefixer，然后 npx tailwindcss init -p。
  - vite.config.ts：base: './'，build.outDir: 'dist'，build.sourcemap: false。除 @vitejs/plugin-react 外不使用其他插件。
  - 在 src/main.tsx 中导入 '@fontsource/jetbrains-mono/400.css'、'@fontsource/jetbrains-mono/500.css'、'@fontsource/jetbrains-mono/700.css'、'@fontsource/ibm-plex-sans/400.css'、'@fontsource/ibm-plex-sans/500.css'、'@fontsource/ibm-plex-sans/600.css'。
  - tailwind.config.js：content ['./index.html','./src/**/*.{ts,tsx}']；在 extend colors 中以设计令牌命名 bg、surface、surface2、line、ink、muted、dim、amber、amberSoft、sand；fontFamily.mono = ['"JetBrains Mono"','ui-monospace','monospace']，fontFamily.sans = ['"IBM Plex Sans"','system-ui','sans-serif']；keyframes blink（0%,49% opacity 1；50%,100% opacity 0）和 fadeUp（from opacity 0 translateY(4px) to opacity 1 translateY(0)）；animations blink '1.06s steps(1) infinite' 和 fadeUp '160ms ease-out'。
  - src/index.css：Tailwind 指令，html 背景 #0d0c0a，color-scheme dark，::selection 背景 rgba(245,165,36,0.28)，滚动条滑块 #2a261f 于透明背景，:focus-visible 轮廓 2px solid #f5a524 带 2px 偏移，[id] scroll-margin-top 80px，以及一个 @media (prefers-reduced-motion: reduce) 块，将每个元素的 animation 和 transition 设为 none，并将 html scroll-behavior 设为 auto。
  - 将所有文案和数据放在 src/content.ts 中：站点变量（BRAND、BINARY、PURPOSE、VERSION、CONFIG_FILE）、侧边栏分组、每个页面的区块、命令（name、synopsis、description、example lines、flags[]）、全局标志、退出码、配置区块（keys[] 含 type、default、description）、环境变量、提示框和页脚文本。组件只渲染这些数据。以下所有内容均按默认值编写。如果变量值发生变化，请重写所有文案，并发明一套连贯的替代内容，包含 6 个命令、标志、配置键、环境变量和适合 [PURPOSE] 的终端输出。保持相同的数量、结构和表格形状。
  - 从大写的 BINARY 派生环境变量名（默认前缀 BRINDLE_）。终端示例始终使用 [BINARY] 作为命令。
  - 路由：在 src/router.ts 中编写一个小的 useHashRoute hook（不使用路由库）。Hash 格式为 #/<page> 或 #/<page>/<anchorId>。页面为 getting-started、commands 和 configuration。空 hash、#/ 或未知页面渲染 getting-started。页面切换时，滚动到顶部并在主列上重放 fadeUp 动画。当存在 anchorId 时，在渲染后对该元素执行 scrollIntoView。大纲和侧边栏锚点点击调用 scrollIntoView({behavior:'smooth'}) 并通过 history.replaceState 更新为 #/<page>/<anchorId>。
  - 搜索：src/search.ts 在启动时从 content.ts 构建一个内存数组。条目为 { title, kind: 'page'|'section'|'cmd'|'flag'|'key'|'env', page, anchor, keywords }。匹配：将查询转为小写，按空白拆分，并要求每个 token 都是 title + ' ' + keywords 的子串。如果 title 以第一个 token 开头则得 3 分，如果 title 包含它则得 2 分，否则得 1 分。按分数排序，然后按 title 长度排序。最多返回 8 个结果。不使用搜索库。
  - 组件：AppShell、TopBar、Sidebar（桌面列和移动抽屉）、Outline、Terminal（带复制的命令块）、CodeFile（带行号的文件块）、Tabs、Callout、FlagTable、Heading（带悬停 # 锚点）、SearchPalette、PrevNext、Footer。在 src/highlight.ts 中为 shell 和 TOML 编写一个小的分词器。不使用高亮库。
  - index.html：<title>[BRAND] docs</title>，<link rel="icon" href="./favicon.svg">，lang en。public/favicon.svg 以代码绘制：一个 32×32 的圆角方块（rx 6），填充 #f5a524，字形 '>_' 为 #0d0c0a，粗体等宽字体，居中。
  - 添加 package.json 脚本 dev: vite、build: tsc -b && vite build、preview: vite preview。在项目根目录编写 ASSETS.md，列出两个 Fontsource 包和 lucide-react，包含源 URL、作者和许可证。

## 变量
- [BRAND] — 工具名称（默认："Brindle"）。项目的显示名称，用于标题、各级标题和页脚。
- [BINARY] — 命令 / 二进制名称（默认："brindle"）。用户在终端中输入的名称。用于每个命令示例，并作为环境变量前缀。
- [PURPOSE] — 一句话用途（默认："a local-first task runner that caches every step of your build"）。小写短语，末尾不加句号；它用于补全句子 '[BRAND] is …'。
- [VERSION] — 当前版本（默认："v2.4.0"）。显示在顶栏徽章、--version 输出和页脚中。
- [CONFIG_FILE] — 配置文件名（默认："brindle.toml"）。Configuration 页面上记录的该文件。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/terminal-style-docs-site（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值编写的。如果你的取值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- bg `#0d0c0a` — 页面背景，顶栏底色（85% 不透明度并带模糊）
- surface `#15130f` — 侧边栏悬停、卡片、调色板面板、表头行
- surface2 `#1c1a15` — 终端和代码块主体、行内代码背景、选中的调色板行
- line `#2a261f` — 所有 1px 边框、分隔线、表格线、静止状态的树形符号
- ink `#e8e3d8` — 主文本、标题、终端中的命令文本
- muted `#9a9284` — 次要文本、非活动导航项、表格描述
- dim `#6b6458` — 标签、行号、注释、终端输出耗时、分组标题
- amber `#f5a524` — 唯一强调色：链接、活动导航和 '>' 标记、光标、$ 提示符、焦点环、标志名、TOML 节标题、'copied' 状态
- amberSoft `rgba(245,165,36,0.08)` — 标注背景、活动侧边栏行底色、链接卡片悬停底色
- sand `#d9c79e` — 代码中的字符串和行内代码文本；绝不用于 UI 界面元素

### 排版（Typography）
- 展示 + UI（标题、导航、顶栏、表格、kbd、所有代码）：JetBrains Mono（OFL），字重 400/500/700
- 正文散文（段落、列表项、表格描述单元格）：IBM Plex Sans（OFL），字重 400/500/600

### 布局与动效（Layout & motion）
- 间距：4px 基准单位。顶栏高 56px。桌面网格在 ≥1280px 时：侧边栏 260px | 主栏（内容最大宽度 760px，内边距 48px 56px）| 大纲 220px。在 1024–1279px 时大纲隐藏。低于 1024px 时侧边栏变为抽屉，主区域内边距为 32px 20px。垂直节奏：H2 节之间 64px，节内块之间 24px，段落与其终端块之间 12px。字号比例：H1 40px/1.15 mono 700，字距 -0.02em（移动端 30px）；H2 24px/1.3 mono 700，前缀为 '## '，amber 色 60% 不透明度；H3 17px mono 500；正文 16px/1.7 Plex Sans 400，ink 色；小标签 11px mono 大写，字距 0.08em，dim 色；终端和表格 14px mono（移动端 13px）。
- 圆角：终端、代码文件、标注、链接卡片和表格为 6px；行内代码、kbd、徽章和按钮为 4px；搜索调色板面板为 10px。不使用胶囊形状。
- 动效：块状光标：顶栏品牌之后和 hero 终端末尾各有一个 8×16px 的 amber 块，动画 blink 1.06s steps(1) infinite。
- 动效：Hero 打字（仅 Getting started）：300ms 后，以每字符 45ms 的速度输入命令 '[BINARY] run build'。暂停 250ms，然后每 120ms 逐条显示 5 行输出（不透明度 0→1，100ms），随后显示一个带闪烁光标的新 '$ ' 提示符。每次页面访问运行一次。
- 动效：页面切换：主栏重放 fadeUp（不透明度 0→1，translateY 4px→0，160ms ease-out）。
- 动效：搜索调色板：背景在 120ms 内淡入，面板在 120ms ease-out 内从 0.98→1 缩放，不透明度 0→1。关闭时在 100ms 内反向执行。
- 动效：移动端抽屉：在 200ms cubic-bezier(.2,.8,.2,1) 内从 translateX(-100%) 滑动到 0，同时遮罩淡入到 rgba(13,12,10,0.6)。
- 动效：复制按钮：图标从 Copy→Check 切换，标签 'copied' 以 amber 色出现，120ms 不透明度淡入，然后在 1600ms 后恢复。
- 动效：悬停微交互：导航项和链接在 120ms 内改变颜色。链接卡片在 150ms 内将边框变为 amber 并将箭头向右移动 3px。文本上不使用变换。
- 动效：仅对大纲和锚点点击启用平滑滚动。在 prefers-reduced-motion 下：不打字（hero 立即显示最终状态）、静态光标、无淡入、滑动或平滑滚动。
- 图像：无照片或插图。所有视觉元素都是文字、1px 边框，以及用 HTML 和 CSS 绘制的终端和代码窗口。图标为 Lucide，14–16px，描边宽度 1.75，muted 色（活动时为 amber）。唯一的图形文件是代码绘制的 favicon.svg。

## 页面与区块
### 每个页面上的应用外壳（`(shared shell)`）
1. **顶栏** — 左侧：品牌标识 '~/' 用暗色 + '[BINARY]' 用墨色，15px 等宽字体 700 字重，后跟闪烁的琥珀色方块光标，然后是一条 1px×16px 的分隔线用线条色，再是 'docs' 用弱化色 14px。桌面端右侧：一个搜索触发按钮（lucide Search 14px，文字 'Search docs' 用弱化色，最右侧一个 kbd '/'；280px 宽，36px 高，surface 背景，1px 线条色边框，4px 圆角，悬停时边框变为琥珀色）和一个版本徽章 '[VERSION]'（12px 等宽字体，弱化色，1px 线条色边框，4px 圆角，2px 8px 内边距）。移动端右侧：一个纯图标搜索按钮和一个菜单按钮（lucide Menu，抽屉打开时变为 X）。两者均为 40×40 点击目标。
   布局：固定定位，全宽，高度 56px，z-index 40。背景 rgba(13,12,10,0.85) 配合 backdrop-filter blur(8px) 和 1px 底部边框用线条色。内边距 0 24px（移动端 0 16px）。Flex 行布局，两端对齐且项目居中。
   动效：光标闪烁。搜索触发按钮边框过渡 120ms。
2. **侧边栏** — 分组标签 '// start' 带一个页面项 'getting-started'。分组标签 '// reference' 带页面项 'commands' 和 'configuration'。分组标签为 11px 大写暗色，字距 0.08em，每组上方 28px 间距。页面项为 14px 等宽字体。非活动项为弱化色并缩进 2ch 以与活动标记对齐。活动项显示琥珀色 '> ' 前缀、琥珀色文字和 amberSoft 背景，行高 32px，4px 圆角。仅在活动页面下方，将其 H2 锚点列为树形：每行以 '├─ ' 开头（最后一行为 '└─ '）用 #4a443a，然后是锚点标签用 13px 弱化色。当前在视口中的锚点（来自滚动监听）变为琥珀色。getting-started 的锚点：install、quick-start、first-task、next-steps。commands 的锚点：每个命令一行（init、run、watch、cache、graph、doctor），然后是 global-flags 和 exit-codes。configuration 的锚点：lookup-order、example、[project]、[tasks.<name>]、[cache]、[env]、environment-variables。固定在侧边栏底部：一个 1px 线条色边框的盒子，12px 暗色文字 'press / to search'，其中 '/' 在 kbd 中。
   布局：桌面端（≥1024px）：粘性列 260px 宽，top 56px，高度 calc(100vh - 56px)，overflow-y auto，1px 右侧边框用线条色，内边距 24px 16px，flex 列布局，提示盒推到底部（mt-auto）。移动端（<1024px）：相同内容放在固定抽屉中 300px 宽，顶栏下方全高，背景 bg，z-index 50，后方有遮罩层。点击任意项或遮罩层，或按 Esc，关闭它。打开时焦点移到第一项。
   动效：抽屉滑入 200ms。项目颜色过渡 120ms。
3. **本页大纲** — 标签 'on this page'（11px 等宽字体大写，暗色）。页面 H2 标题列表用 13px 等宽字体弱化色，每项 28px 高。活动标题为琥珀色，左边缘有 2px 琥珀色条；其他有 2px 线条色条。列表下方，一个 'back to top ↑' 链接用 12px 暗色。
   布局：仅在 ≥1280px 时可见。粘性定位 top 88px，220px 宽，左内边距 24px。滚动监听使用 IntersectionObserver 监听 H2 元素，rootMargin '-80px 0px -65% 0px'。当无元素相交时，视口上方最后一个标题保持活动。
   动效：颜色和条变化过渡 120ms。
4. **上一页/下一页和页脚** — 每个页面底部，两个链接卡片。每个有一个 12px 暗色标签（'← previous' 或 'next →'）和 16px 等宽字体墨色页面标题。顺序：getting-started → commands → configuration；第一页只有 'next'，最后一页只有 'previous'。下方，页脚文字用 13px 等宽字体暗色：'[BRAND] [VERSION] · MIT licensed · docs written in plain text'。如果在 Credit 区块中定义了 [CREDIT] 链接，在页脚第二行以相同样式渲染，链接用弱化色，悬停时变为琥珀色。
   布局：卡片在 2 列网格中，间距 16px（移动端 1 列）；桌面端单独的 'next' 卡片位于右列。每个卡片有 1px 线条色边框，6px 圆角，16px 20px 内边距。页脚有 margin-top 64px，内边距 24px 0 48px，1px 顶部边框用线条色。
   动效：卡片悬停时边框变为琥珀色，背景变为 amberSoft，箭头移动 3px。
5. **搜索面板** — 按 '/' 打开（仅当焦点不在 input、textarea 或 contenteditable 中，且未按住修饰键时），按 Ctrl+K 或 Cmd+K，或点击任一搜索触发按钮。输入行以琥珀色 '/' 字形开头，占位符为 'search commands, flags, config keys…'，右侧有 'esc' kbd。结果行高 40px：固定宽度的类型标签用暗色（'[page]'、'[sec]'、'[cmd]'、'[flag]'、'[key]'、'[env]'），标题用 14px 等宽字体墨色，匹配子串为琥珀色，页面名右对齐用 12px 暗色。选中行有 surface2 背景、琥珀色 '> ' 标记和琥珀色标题。空查询在标签 'jump to' 下显示 6 个建议条目：getting-started、run、cache prune、--jobs、[tasks.<name>]、BRINDLE_CACHE_DIR。无匹配显示：no matches for "<query>" — try 'run' or 'cache'。页脚行显示 '↑↓ navigate · ↵ open · esc close' 用 12px 暗色。
   布局：固定全屏遮罩 rgba(13,12,10,0.72) 配合 blur(4px)，z-index 60。面板水平居中于 top 12vh，宽度 min(640px, 100vw - 32px)，surface 背景，1px 线条色边框，10px 圆角，阴影 0 24px 64px rgba(0,0,0,0.5)。输入行高 52px 带底部边框，结果列表最大高度 360px 带 overflow auto。ArrowUp 和 ArrowDown 移动选择（循环，并保持选中行滚动到视口内）。Enter 导航到 #/<page>/<anchor> 并关闭。Esc 或点击遮罩层关闭。焦点被困在面板内，关闭时返回到之前聚焦的元素。面板使用 role dialog 配合 aria-modal，列表使用 role listbox。
   动效：遮罩淡入，面板缩放 0.98→1 过渡 120ms。

### 入门 (`#/getting-started`)
1. **页头 + 主视觉终端** — 面包屑导航使用 12px 等宽字体、暗色：'docs / start / getting-started'。H1：'Getting started'。引导段落（18px Plex Sans，柔和色）：'[BRAND] is [PURPOSE]. This page takes you from nothing installed to a cached build in about a minute.' 然后是主视觉终端，标题为 'shell'，它会输入 '$ [BINARY] run build' 然后打印：'  ✓ install     cached   0.02s'、'  ✓ lint        cached   0.01s'、'  ● compile     ran      1.48s'、'  ● bundle      ran      0.36s'、'  done · 2 cached · 2 ran · 1.87s'，最后停在一个新的 '$ ' 提示符上，光标闪烁。在输出中，✓ 和单词 'cached' 为琥珀色，● 和 'ran' 为墨色，计时为暗色，摘要行为柔和色。
   布局：面包屑导航，然后 H1 间距 12px，然后引导段落间距 16px，然后终端间距 32px，全内容宽度。主视觉终端没有复制按钮。它的最小高度等于其最终状态，因此打字时布局不会移动。
   动效：按设计动效中描述的输入序列。减少动效时显示最终状态。
2. **安装** — H2 '## install'（id install）。段落：'One binary, no runtime. Pick whichever installer you already trust.' 一个 Tabs 组件，包含三个标签页：'script'、'npm' 和 'cargo'，每个都包含一个 Terminal。script：'$ curl -fsSL https://get.brindle.example/install.sh | sh'。npm：'$ npm install --global brindle'。cargo：'$ cargo install brindle-cli'。然后是段落 'Check that it worked:' 和一个 Terminal，内容为 '$ [BINARY] --version' 和输出 'brindle [VERSION]'。
   布局：标签页位于终端标题栏中，替代标题。标签按钮为 12px 等宽字体：非活动标签为暗色，活动标签为墨色并带有 2px 琥珀色下划线。标签列表支持 ArrowLeft 和 ArrowRight 键盘切换。选中的标签页持久化在 localStorage 中，键为 '<binary>-install-tab'。
   动效：标签内容即时切换。下划线以 150ms 的 transform 移动。
3. **快速开始** — H2 '## quick start'（id quick-start）。三个编号步骤。每个步骤都有一个琥珀色 13px 等宽字体的步骤编号（'01'、'02'、'03'）、一个 H3 标题、一句话和一个 Terminal。01 'Create a config' — 'Run init in your project root. It writes a [CONFIG_FILE] with three starter tasks.' — '$ [BINARY] init --template minimal' → 'created [CONFIG_FILE] (3 tasks)'。02 'Run the default task' — 'With no task name, [BRAND] runs the default from your config.' — '$ [BINARY] run' → '  done · 0 cached · 4 ran · 2.31s'。03 'Run it again' — 'Nothing changed, so every step comes back from cache.' — '$ [BINARY] run' → '  done · 4 cached · 0 ran · 0.06s'。
   布局：步骤为垂直列表。每个步骤是一个 2 列网格：一个 48px 列用于编号，一个 1fr 列用于内容。一条 1px 的垂直线连接步骤编号，沿编号列的中心在步骤之间向下延伸。在移动端，编号位于标题上方。
   动效：除复制按钮外无。
4. **你的第一个任务** — H2 '## your first task'（id first-task）。段落：'A task is a command plus the files it depends on. [BRAND] hashes the inputs and restores the outputs when the hash matches.' 一个标题为 '[CONFIG_FILE]' 的 CodeFile，内容为：'[tasks.test]'、'run = "npm test"'、'inputs = ["src/**", "test/**"]'、'deps = ["install"]'。然后是一个注释 Callout：标签 'NOTE'，文本 'Inputs are hashed, not timestamped. Saving a file without changing it never invalidates the cache.' 然后是一个 Terminal：'$ [BINARY] run test'。
   布局：CodeFile：一个类似终端标题栏的头部栏，带有 lucide FileText 14px 和 12px 柔和色的文件名。主体有右对齐的行号，宽 3ch，暗色，带有 16px 的装订线内边距。Callout：2px 琥珀色左边框，amberSoft 背景，右侧角 6px 圆角，16px 20px 内边距，一个标签行带有 lucide Info 14px 和琥珀色 11px 等宽大写 'NOTE'，正文为 15px Plex Sans 墨色。
   动效：无。
5. **后续步骤** — H2 '## next steps'（id next-steps）。两个链接卡片。卡片 1：lucide Terminal 图标，标题 'Commands'，文本 'Every command, flag and exit code.'，链接 #/commands。卡片 2：lucide Settings2 图标，标题 'Configuration'，文本 'Every key in [CONFIG_FILE], with defaults.'，链接 #/configuration。每个卡片末尾有一个暗色的 '→'，悬停时变为琥珀色。
   布局：2 列网格，间距 16px（移动端 1 列）。卡片有 1px 线条边框，6px 圆角，20px 内边距，图标为琥珀色，标题为 16px 等宽字体 700。
   动效：卡片悬停效果同共享的上一个/下一个。

### 命令 (`#/commands`)
1. **页头 + 用法** — 面包屑导航 'docs / reference / commands'。H1 'Commands'。引导段落：'Every [BRAND] command has the same shape. Flags can go before or after the task name.' 一个标题为 'usage' 的 Terminal，内容为 '$ [BINARY] <command> [task] [flags]'（可复制）。
   布局：与入门相同的页头结构。
   动效：无。
2. **命令索引** — 6 个命令的紧凑列表。每行显示命令名称，琥珀色 14px 等宽字体，固定 10ch 宽度，然后是一行描述，柔和色 Plex Sans 15px：init — 'Create a [CONFIG_FILE] in the current directory.'；run — 'Run a task and its dependencies, restoring cached steps.'；watch — 'Rerun a task whenever its inputs change.'；cache — 'Inspect, prune or clear the local step cache.'；graph — 'Print the task dependency graph.'；doctor — 'Check your setup and explain what is wrong.' 每行链接到 #/commands/<name>。
   布局：带边框的类表格块：1px 线条边框，6px 圆角，行高 44px，由 1px 线条分隔，内边距 0 16px。悬停行获得 surface 背景，并在名称前显示琥珀色 '>'。在移动端，描述在名称下方换行。
   动效：行悬停 120ms。
3. **每个命令的章节（×6）** — 每个命令一个章节，按顺序：init、run、watch、cache、graph、doctor。每个都有一个 H2 '## [BINARY] <name>'（id <name>）、一行内联代码的概要、1–2 句描述、一个带输出的 Terminal 示例，以及一个 FlagTable（列：Flag | Default | Description）。init：概要 '[BINARY] init [--template <name>] [--force]'；示例 '$ [BINARY] init --template monorepo' → 'created [CONFIG_FILE] (6 tasks)'；标志 --template <name> | minimal | Start from a bundled template: minimal, monorepo or static-site。--force | false | Overwrite an existing config。run：概要 '[BINARY] run [task] [flags]'；示例同主视觉输出；标志 -j, --jobs <n> | CPU count | Maximum steps run in parallel。--no-cache | false | Ignore the cache and rebuild every step。--dry-run | false | Print the plan without running anything。--filter <glob> | — | Only run tasks whose name matches。watch：示例 '$ [BINARY] watch test' → '  watching 42 files · ctrl-c to stop'；标志 --debounce <ms> | 200 | Wait this long after the last change。--clear | false | Clear the screen before each run。cache：概要 '[BINARY] cache <ls|prune|clear> [flags]'；示例 '$ [BINARY] cache prune --older-than 14d' → '  removed 318 entries · freed 1.2 GB'；标志 --older-than <duration> | 30d | Used by prune: drop entries older than this。--json | false | Print machine-readable output。graph：示例 '$ [BINARY] graph build' → 树形输出 'build'、'├─ install'、'└─ lint'、'   └─ install'；标志 --format <tree|dot> | tree | Output format。--depth <n> | unlimited | Stop after n levels。doctor：示例 '$ [BINARY] doctor' → '  ✓ config parsed'、'  ✓ cache writable'、'  ! 2 tasks have no inputs (always rerun)'；标志 --fix | false | Apply safe fixes automatically。
   布局：章节之间由 64px 和 1px 线条分隔。H2 在悬停时左侧显示一个琥珀色 '#' 链接（桌面端位于左侧装订线，移动端隐藏）；点击它设置哈希。FlagTable：全内容宽度，1px 线条边框，6px 圆角，表头行在 surface 背景上，带有 11px 大写暗色标签，表体行 14px，内边距 12px 16px，1px 线条分隔。Flag 单元格为琥珀色等宽字体且不换行，Default 为沙色等宽字体，Description 为柔和色 Plex Sans 15px。在移动端，表格包装器水平滚动（overflow-x auto），最小宽度 560px。
   动效：除复制按钮和锚点悬停外无。
4. **全局标志** — H2 '## global flags'（id global-flags）。句子：'These work with every command.' FlagTable：--config <path> | ./[CONFIG_FILE] | Use a different config file。-q, --quiet | false | Only print errors。-v, --verbose | false | Print every step, including cached ones。--color <auto|always|never> | auto | Control coloured output。--version | — | Print the version and exit。-h, --help | — | Show help for a command。
   布局：相同的 FlagTable 样式。
   动效：无。
5. **退出码** — H2 '## exit codes'（id exit-codes）。表格，列：Code | Meaning：0 — Success。1 — A task failed。2 — Invalid arguments or config。3 — Cache directory is not writable。130 — Interrupted with ctrl-c。
   布局：相同的表格样式。Code 列宽 80px，琥珀色等宽字体。
   动效：无。

### 配置（`#/configuration`）
1. **页头 + 查找顺序** — 面包屑 'docs / reference / configuration'。H1 'Configuration'。导语：'[BRAND] 从项目根目录读取一个文件，即 [CONFIG_FILE]。除任务的 run 外，每个键都是可选的。' H2 '## lookup order'（id lookup-order），配一个等宽 14px 的有序列表，每项以琥珀色数字开头：'1  the --config flag'、'2  the BRINDLE_CONFIG environment variable'、'3  ./[CONFIG_FILE]'、'4  the nearest parent directory that contains [CONFIG_FILE]'。然后：'The first file found wins. Files are never merged.'
   布局：有序列表，行间距 8px，数字位于固定的 3ch 列中。
   动效：无。
2. **完整示例** — H2 '## example'（id example）。CodeFile 标题为 '[CONFIG_FILE]'，带行号和复制按钮，内容严格为：'# [CONFIG_FILE]'、'[project]'、'name = "atlas-web"'、'default = "build"'、''、'[cache]'、'dir = ".brindle/cache"'、'max_size = "5GB"'、'compress = true'、''、'[env]'、'NODE_ENV = "production"'、''、'[tasks.install]'、'run = "npm ci"'、'inputs = ["package-lock.json"]'、''、'[tasks.lint]'、'run = "npm run lint"'、'inputs = ["src/**/*.ts"]'、'deps = ["install"]'、''、'[tasks.build]'、'run = "npm run build"'、'inputs = ["src/**", "vite.config.ts"]'、'outputs = ["dist/**"]'、'deps = ["install", "lint"]'。
   布局：CodeFile 的复制按钮位于头部栏右侧。高亮：'# …' 注释为暗色，[section] 标题为琥珀色，键为墨色，'=' 为暗色，字符串为沙色，布尔值和数字为琥珀色。
   动效：无。
3. **键参考章节** — 四个 H2 章节，每个包含一句话和一个键表（Key | Type | Default | Description）。'## [project]'（id project）：name | string | directory name | Shown in logs and graph output。default | string | — | Task to run when none is given。root | string | "." | Paths in inputs and outputs resolve from here。'## [tasks.<name>]'（id tasks）：run | string | required | Shell command to execute。inputs | string[] | [] | Globs hashed to build the cache key。outputs | string[] | [] | Globs saved to and restored from the cache。deps | string[] | [] | Tasks that must finish first。env | table | {} | Extra variables for this task only。cache | bool | true | Set false for tasks with side effects。'## [cache]'（id cache-config）：dir | string | ".brindle/cache" | Where step outputs are stored。max_size | string | "5GB" | Oldest entries are pruned past this size。compress | bool | true | Compress stored outputs。'## [env]'（id env）：any key | string | — | Exported to every task and included in the cache key。在 [env] 之后，一个警告 Callout：标签 'WARN'，配 lucide TriangleAlert，文本 'Values in [env] become part of the cache key and are written to disk. Keep secrets out of it and read them from your shell instead.'
   布局：键表使用 FlagTable 样式，共 4 列：Key 为琥珀色等宽字体，Type 为柔和等宽字体，Default 为沙色等宽字体，Description 为柔和 Plex Sans。侧边栏和大纲标签原样显示带方括号的名称（'[project]' 等）。警告 callout 与 note 样式相同，仅图标和标签不同。
   动效：无。
4. **环境变量** — H2 '## environment variables'（id environment-variables）。句子：'Environment variables override the config file. Flags override both.' 表格 Variable | Default | Description：BRINDLE_CONFIG | — | Path to the config file。BRINDLE_CACHE_DIR | .brindle/cache | Overrides [cache].dir。BRINDLE_JOBS | CPU count | Same as --jobs。BRINDLE_LOG | info | One of error, warn, info, debug。NO_COLOR | — | Any value disables colour output。
   布局：表格样式相同。变量名为琥珀色等宽字体，nowrap。
   动效：无。

## 资产
- 字体：JetBrains Mono（400、500、700），通过 @fontsource/jetbrains-mono npm 包引入，在 src/main.tsx 中导入并由 Vite 打包。OFL-1.1。在 ASSETS.md 中列出。
- 字体：IBM Plex Sans（400、500、600），通过 @fontsource/ibm-plex-sans npm 包引入，在 src/main.tsx 中导入。OFL-1.1。在 ASSETS.md 中列出。
- 图标：仅使用 lucide-react（ISC）：Search、Menu、X、Copy、Check、FileText、Info、TriangleAlert、Terminal、Settings2、ArrowUp。14–16px，strokeWidth 1.75。不使用品牌图标（不使用 GitHub 或其他 logo 字形）。在 ASSETS.md 中列出。
- 图片：不使用位图图像。唯一的图形是 public/favicon.svg，以代码绘制：一个 32×32 的琥珀色（#f5a524）圆角方块，内含 #0d0c0a 的 '>_'。终端和代码窗口、圆点、分隔线和树形字形均为 HTML、CSS 或文本。

## 禁止事项
- 不得有任何形式的后端：不得有服务器代码、API 路由、数据库、认证、分析或第三方 API。搜索完全在浏览器中基于内存索引运行。
- 不得有会提交到任何地方的表单。搜索输入框仅在本地进行过滤。
- 所有字体都通过 Fontsource 自托管。绝不从 fonts.googleapis.com、fonts.gstatic.com 或任何其他字体 CDN 加载。
- 不得有 CDN 的 <script> 或 <link> 标签。每个脚本、字体、图标和图像都在本地打包。
- 生产构建必须压缩且不含 source map（build.sourcemap false），并且不得将 src/ 复制到 dist/。
- 使用相对资源路径（Vite base './'）。仅使用哈希路由（#/getting-started、#/commands、#/configuration）。任何指向文件的链接都指向 ./index.html，绝不指向裸目录。
- 保持 dist/ 在 20 MB 以下，且站点在 1440×900 和 390×844 下必须零控制台错误。如果剪贴板 API 不可用，回退到隐藏的 textarea 并在 try/catch 内使用 execCommand('copy')，使其永不抛出异常。
- 尊重 prefers-reduced-motion：无打字动画、无光标闪烁、无淡入淡出、滑动或平滑滚动。
- 复制按钮仅复制命令行，去除开头的 '$ ' 并排除输出行，以换行符连接。
- 当用户在 input、textarea 或 contenteditable 中打字时，不要使用 '/' 快捷键。
- 不得使用文档框架（Docusaurus、VitePress、Nextra、Starlight、Mintlify 或类似框架），不得使用路由库、搜索库、语法高亮库，也不得从 Aceternity UI、Tailwind Plus/Tailwind UI 或任何文档主题复制代码或组件。
- 不得使用任何真实 CLI 工具的名称、徽标、ASCII 艺术横幅或吉祥物，也不得从真实文档站点复制命令名称、标志或文案。所有内容均为 [BRAND] 虚构。
- 不得复制任何现有终端应用或文档品牌的精确调色板或品牌标识。仅使用本规范中的颜色，以琥珀色（amber）作为唯一强调色。
- 不得使用商业或专有字体、品牌徽标以及包含品牌标记的图标集。
- 不得出现真实人物、头像、推荐语或截图。
- 不得有 SEO 附加项：无 meta 描述、Open Graph 标签、JSON-LD 或站点地图。仅有 <title>[BRAND] docs</title> 和 favicon。
- 将所有文案保留在 src/content.ts 中。当变量值变化时，重写该文件的文案以匹配。不要在组件中硬编码文本。
- 除非用户要求，否则不要更改技术栈（Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + lucide-react + Fontsource）。

---
— Prompt by VibeFather · https://vibefather.ai/t/terminal-style-docs-site · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
