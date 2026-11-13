> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 深色开发者工具发布页

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的单页发布站点，[BRAND] 是一款面向 [LANGUAGES] 的本地优先 [PRODUCT]。页面通过展示产品实际运行来证明速度与精准：一个会逐字打出逼真评审会话的 hero 终端、一个行内评论流式涌入的 diff 查看器、一场基准测试条形竞赛、一个用 '?' 打开的键盘快捷键浮层、一段更新日志预告，以及可复制到剪贴板的安装命令。一切皆由代码绘制；没有任何照片。

- 受众：[AUDIENCE]：生活在终端里的工程师和技术负责人，他们不信任营销页面，并在一分钟内决定一个工具是否值得一条安装命令。
- 目标：让访客复制安装命令并运行第一次评审。次要目标：准确展示一次评审长什么样（终端 + diff），用示意性基准测试支撑速度声明，并通过更新日志表明项目活跃。
- 语气：简洁、技术化且自信，像一份写得好的 README。短句、具体数字、真实命令名，不用炒作词（不用 'revolutionary'、'blazing'、'supercharge'、'magic'）。开发者会在终端中输入或阅读的任何内容都使用等宽字体。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/space-grotesk（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）、@fontsource-variable/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 react-ts 模板通过 npm create vite@latest 搭建脚手架。单页面：项目根目录的 index.html，入口为 src/main.tsx。所有区块都位于此页面，并通过哈希锚点（#demo、#features、#benchmarks、#integrations、#changelog、#install）访问。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4（tailwindcss + postcss + autoprefixer），content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将 Design 下的每种颜色添加到 theme.extend.colors，使用 kebab-case 键（ink、panel、panel-2、line、line-strong、text、muted、faint、signal、signal-ink、add、add-bg、del、del-bg、warn、info），并设置 fontFamily display ['Space Grotesk Variable', 'system-ui', 'sans-serif']、sans ['Inter Variable', 'system-ui', 'sans-serif']、mono ['JetBrains Mono Variable', 'ui-monospace', 'monospace']。添加 maxWidth { container: '1200px' } 和 borderRadius { DEFAULT: '6px', lg: '10px' }。
  - 在 src/fonts.ts 中导入 '@fontsource-variable/space-grotesk'、'@fontsource-variable/inter' 和 '@fontsource-variable/jetbrains-mono'；从 src/main.tsx 导入 src/fonts.ts 和 src/index.css。
  - src/index.css：Tailwind 层；html { scroll-behavior: smooth; scroll-padding-top: 72px }（在 prefers-reduced-motion 下为 auto）；body 背景为 ink，文本为 text，字体为 sans，抗锯齿；::selection { background: #C6F43233 }；一个 .bg-grid 工具类（两个 #FFFFFF08 的 1px 线性渐变线，每 48px 重复，使用 radial-gradient(ellipse at 50% 0%, black 30%, transparent 75%) 遮罩）；一个 .noise 工具类，将内联 SVG feTurbulence data URI（baseFrequency 0.9，opacity 0.035）作为固定全页覆盖层，pointer-events 为 none；关键帧 caret-blink（steps(1) 1s infinite）和 pulse-line（signal 左边框在 1.2s 内从 100% 淡出到 0%）。
  - 文件布局：src/content.ts（每个字符串、数字、终端脚本、diff 行、注释、基准行、功能、chip、变更日志条目和快捷键，均带类型），src/lib/brand.ts（导出 BRAND、BRAND_SLUG 和 installCommands { npm: 'npm i -g ' + BRAND_SLUG, brew: 'brew install ' + BRAND_SLUG, npx: 'npx ' + BRAND_SLUG + ' review' }），src/lib/clipboard.ts（navigator.clipboard.writeText，带隐藏 textarea + document.execCommand('copy') 回退，包裹在 try/catch 中），src/lib/useReducedMotion.ts（重新导出 Motion 的 useReducedMotion），src/lib/toast.ts（通过 useSyncExternalStore 的微型外部存储：showToast(text) 显示一个 toast 1.8s）。
  - src/components/ 中的组件：Header.tsx、Wordmark.tsx（内联 SVG 字形 + 名称）、InstallBox.tsx（标签页 + 命令 + 复制按钮；选中的标签页通过一个小型存储共享，以便两个安装框保持同步）、Terminal.tsx（+ terminalScript.ts：会话作为步骤数组）、DiffViewer.tsx（DiffLine.tsx、ReviewComment.tsx、FindingsPanel.tsx）、FeatureGrid.tsx、ConfigSnippet.tsx、BenchmarkRace.tsx、Integrations.tsx、Changelog.tsx、FinalCta.tsx、Footer.tsx、ShortcutOverlay.tsx、ShortcutHint.tsx、Toast.tsx、Kbd.tsx、SectionHeading.tsx、Reveal.tsx（Motion whileInView 包装器：opacity 0 到 1，y 16 到 0，0.5s，once，amount 0.2）。src/App.tsx 按 Pages & Sections 下的区块顺序组合它们，并注册全局键盘处理器（src/lib/useShortcuts.ts）。
  - diff、终端和配置片段中的语法着色通过 src/lib/highlight.ts 中的微型分词器手动完成（关键字、字符串、数字、注释、函数名）映射到 Tailwind 类。不使用高亮库。
  - public/favicon.svg 如 Assets 下所述。index.html：lang en，<meta name='theme-color' content='#0A0B0D'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[BRAND] — the [PRODUCT] that finishes before you push</title>。
  - 在项目根目录编写 ASSETS.md，列出三个 Fontsource 字体包（OFL-1.1，含上游作者）、lucide-react（ISC），并有一行说明所有其他图形（wordmark 字形、favicon、网格、噪点、终端和 diff 界面元素、条形）均在本项目的代码中绘制。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体文件和 favicon.svg。目标小于 2 MB。

## 变量
- [BRAND] — 产品名称（默认："Ferrule"）。虚构的工具名称，一到两个单词。用于字标、标题、主标题、终端横幅、评论作者行、功能文案、更新日志和页脚。绝不能是真实存在的开发者工具。
- [BRAND_SLUG] — 命令和包名（默认："ferrule"）。小写，无空格。它是每一行终端中输入的命令、安装框中 npm/brew 的包名、配置文件名（.[BRAND_SLUG].toml）以及 diff 评论中的机器人名称。不要从中推导任何其他内容。
- [PRODUCT] — 工具是什么（默认："code review CLI"）。简短名词短语，小写。驱动标题、主视觉文案、功能卡片、终端会话内容、diff 评论和基准指标。对于测试运行器，diff 评论变为失败测试注解；对于 linter，它们变为规则违规。
- [LANGUAGES] — 它覆盖的语言或文件类型（默认："TypeScript, Go and Python"）。两到四种语言或格式。终端文件路径、diff 代码示例、配置片段和第一批集成标签使用这些语言。
- [AUDIENCE] — 面向谁（默认："teams that ship several times a day"）。简短短语，小写。用于主视觉副标题、功能简介和最终行动号召。
- [CREDIT] — 在页脚保留一个小的 "Template by VibeFather" 链接指向 https://vibefather.ai/t/dark-developer-tool-launch-page（默认：是；删除此行以移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块键控，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- Ink `#0A0B0D` — 页面背景、终端主体
- Panel `#111317` — 卡片、diff 查看器主体、安装框、浮层面板
- Panel 2 `#171A1F` — 终端和 diff 标题栏、hunk 头部行、悬停行、kbd 按键
- Line `#22262D` — 所有 1px 细线边框和分隔线、非活动基准条轨道
- Line Strong `#323842` — 悬停边框、非活动基准条、kbd 底部边框
- Text `#E7E9EC` — 标题和正文文本
- Muted `#8C939D` — 次要文案、行号、终端提示符路径、标签
- Faint `#5B626C` — 脚注、禁用状态、diff 上下文装订线
- Signal `#C6F432` — 唯一强调色：主按钮、我们的基准条、活动标签下划线、焦点环、光标、提示符中的 git 分支、'Latest' 标签、字标字形
- Signal Ink `#0A0B0D` — Signal 按钮和标签上的文本
- Add `#3DDC97` — 新增行 +/- 装订线符号和文本色调、成功对勾、'perf' 和 'fix' 变更日志标签
- Add BG `rgba(61,220,151,0.09)` — 新增行行背景
- Del `#FF6B6B` — 删除行符号、'high' 严重性圆点和标签、'breaking' 标签
- Del BG `rgba(255,107,107,0.09)` — 删除行行背景
- Warn `#F5B841` — 'medium' 严重性圆点和标签
- Info `#6CB4FF` — 'low' 严重性圆点和标签、'feat' 变更日志标签、代码关键字

### 排版
- Display：hero 标题（桌面 56px / 移动端 38px，字重 600，字距 -0.03em，行高 1.02），区块标题（36px / 28px，字重 600，字距 -0.02em），统计数字：Space Grotesk（OFL），字重 500/600/700
- Text：正文 16px/1.6 字重 400，卡片标题 16px 字重 500，按钮 14px 字重 500：Inter（OFL），字重 400/500/600
- Mono：终端（13.5px/1.7），diff（13px/1.65），安装命令（15px），eyebrow 和标签（12px 大写，字距 0.08em），所有数字、kbd 按键、chip、版本标签：JetBrains Mono（OFL），字重 400/500/700

### 布局与动效
- 间距：容器最大宽度 1200px，侧边内边距 24px（640px 以下为 16px）。区块之间由 1px Line 边框全出血分隔，桌面端垂直内边距 112px，移动端 72px。网格在 Line 色背景上使用 1px 间隙，使单元格共享细线边框。卡片内部内边距 24px。基础单位 4px；节奏紧凑，没有大片空白带。
- 圆角：按钮、chip、kbd 按键、输入框和标签为 6px；终端窗口、diff 查看器、安装框、浮层面板和功能网格外框为 10px；仅严重性圆点和提示 chip 为 999px。
- 动效：区块显现：每个区块标题和块在 20% 可见时淡入上移一次（不透明度 0 到 1，y 16px 到 0，0.5s，ease [0.22, 1, 0.36, 1]）；子元素以 0.06s 错开。
- 动效：Hero 终端：命令以每字符 32ms 逐字符输入，带闪烁块状光标（Signal，1s steps）；输出行逐行出现，行间 110ms；spinner 以 80ms 循环盲文帧 ⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏，持续 900ms，然后被其结果行替换。会话 2 的最后一行之后等待 2.6s，主体在 0.3s 内淡出并重新开始会话 1。仅在终端进入视图时启动，在屏幕外或标签页隐藏时暂停。
- 动效：Diff 查看器：当查看器 35% 进入视图时，三条评论按顺序打开，间隔 1.1s。对于每条评论，锚定行获得 1.2s 的 pulse-line 高亮，然后评论卡片从高度 0 展开到 auto，不透明度 0 到 1（0.45s）；Findings 面板中的匹配项从空心圆点变为填充的严重性圆点。
- 动效：基准竞速：当图表 40% 进入视图时，条形从宽度 0 增长到其值（1.1s，ease [0.22, 1, 0.36, 1]，从上到下错开 0.12s），数字通过 Motion 的 animate() 在 motion value 上同步计数，秒数格式化为一位小数，计数为整数。切换标签会从 0 重新播放竞速。
- 动效：微交互：复制按钮将 Lucide Copy 图标替换为 Check，带 0.15s 缩放弹出，并在底部居中显示 toast 'Copied: <command>' 持续 1.8s；按钮悬停时上移 1px 并变亮；chip 和卡片悬停时边框变为 Line Strong；活动标签下划线通过共享 layoutId 在标签之间滑动。
- 动效：快捷键浮层：背景在 0.2s 内淡入到 rgba(10,11,13,0.72)，backdrop-blur 6px；面板从 0.97 缩放到 1，并在 0.2s 内淡入；Esc 或点击背景可反向。
- 动效：变更日志展开：较旧条目在 0.35s 内从高度 0 动画到 auto 并淡入。
- 动效：prefers-reduced-motion：无打字、spinner 或循环（终端渲染会话 1 完成且静态，带一个 Replay 按钮切换到会话 2），diff 评论从一开始就全部打开，条形和数字以最终值渲染，显现即时，平滑滚动关闭。浮层和 toast 仍会出现，但无缩放或移动。
- 图像：无照片和插图。视觉趣味来自代码绘制的 UI：终端窗口、diff 查看器、条形图、细线网格、hero 下方非常淡的 48px 背景网格（用径向渐变遮罩），以及全页 3.5% SVG 噪点叠加。字标字形是内联 SVG：一个 20x20 圆角方块（半径 5），Signal 色，带两条不同长度的 Ink 水平笔画，像两条 diff 行，下面一条向右偏移 4px。图标为 Lucide，18–20px，stroke-width 1.75。

## 页面与区块
### [BRAND] — 启动页（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[BRAND] = Ferrule，[BRAND_SLUG] = ferrule，[PRODUCT] = 代码审查 CLI，[LANGUAGES] = TypeScript、Go 和 Python，[AUDIENCE] = 每天多次发布的团队）。将每个字符串、数字、终端步骤、diff 行、注释、基准测试行和列表都放入 src/content.ts 并从中渲染。如果任何变量值不同，请重写每个标题、终端会话、文件路径、代码示例、审查注释、规则名称、功能、基准测试指标和行标签、标签和变更日志条目，使其对新产品的具体且可信，同时保持相同的结构、数量和大致长度。显示的每个命令都使用 [BRAND_SLUG]；示例中的每个仓库、文件路径、函数和提交都是虚构的（示例仓库名为 ledgerline）。贯穿使用的产品事实：当前版本 2.4.0；212 条规则，其中 143 条带自动修复，38 条安全规则；在 1,240 行的拉取请求上中位审查时间 1.8s；修复后重新审查 0.4s；冷启动 140 ms；完全离线运行；Apache-2.0 核心。
   布局：无视觉输出。content.ts 导出类型化对象：nav、hero、install、terminalSessions、diff（file、hunks、lines、comments、findings）、features、config、benchmarks（tabs、rows、stats、footnote）、integrations、changelog、finalCta、footer、shortcuts。
2. **页眉（粘性，共享）** — 左侧：字标（字形 + '[BRAND]'，JetBrains Mono 15px 字重 700）链接到 #top，后跟一个版本胶囊 'v2.4.0'（等宽 11px，Muted 文本，1px Line 边框，圆角 6px）链接到 #changelog。中/右导航链接（Inter 14px，Muted，悬停 Text）：Demo（#demo）、Features（#features）、Benchmarks（#benchmarks）、Changelog（#changelog）。最右侧：一个幽灵图标按钮，带 Lucide Keyboard 和工具提示/aria-label 'Keyboard shortcuts (?)'，打开覆盖层，以及一个主按钮 'Install'（Signal 背景，Signal Ink 文本，Lucide Download 16px）滚动到 #install。
   布局：高度 60px，全宽，sticky top-0，z-40，背景 rgba(10,11,13,0.78) 带 backdrop-blur 10px 和 1px Line 底部边框，仅在滚动 8px 后出现。内部行使用 1200px 容器，flex，items-center，justify-between。768px 以下隐藏四个导航链接，仅保留字标、键盘按钮和 Install；无汉堡菜单。
   动效：滚动时边框在 0.2s 内淡入。当前视图中区块的导航链接（IntersectionObserver，rootMargin -40% 0 -55% 0）变为 Text 颜色并带 1px Signal 下划线。
3. **Hero（#top）** — 左列，从上到下：（1）公告链接胶囊：一个等宽 12px 胶囊，带 Signal 圆点，文本 'v2.4.0 — suggested fixes for 41 more rules' 和 Lucide ArrowRight 14px，链接到 #changelog。（2）标题（display）：'Code review that finishes before you push.'（3）副行（Inter 18px，Muted，最大宽度 520px）：'[BRAND] is a local-first code review CLI for TypeScript, Go and Python. It reads only what changed, leaves line-level comments on real bugs and hands you a fix you can apply with one key. Built for teams that ship several times a day.'（4）InstallBox（见下文）。（5）按钮行：一个幽灵按钮 'See it review a diff'，带 Lucide ArrowDown 链接到 #demo，然后是一个文本提示 'or press ? for shortcuts'，等宽 12px Faint，其中 ? 渲染为 Kbd。（6）等宽 12px 事实行，用中点分隔，Muted：'1.8s median review · 212 rules · runs offline · Apache-2.0 core'。InstallBox：一个 10px 圆角的 Panel 框，带 1px Line 边框；顶部行三个标签 'npm'、'brew'、'npx'（等宽 12px，活动项为 Text 带 2px Signal 下划线，非活动项为 Muted）；主体行带 Signal '$' 提示符，命令为等宽 15px（'npm i -g ferrule' / 'brew install ferrule' / 'npx ferrule review'，由 [BRAND_SLUG] 构建）和一个右对齐的 32px 图标按钮（Lucide Copy，aria-label 'Copy install command'）复制可见命令。右列：终端窗口。标题栏（36px，Panel 2，1px Line 底部边框）：三个 10px 圆圈，Line Strong 色（无交通灯颜色），居中等宽 12px Muted 标题 '~/work/ledgerline — zsh'，右侧两个 28px 图标按钮 Lucide Pause/Play（切换）和 RotateCcw（重播，aria-label 'Replay session'）。主体（Ink，20px 内边距，桌面固定高度 420px / 移动端 360px，溢出隐藏，最新行通过将主体滚动到底部保持可见）。会话 1，逐行（提示符 = Muted '~/work/ledgerline' + Signal '(feat/retry-queue)' + Text '$'）：输入命令 'ferrule review --base main'；输出 '◆ ferrule 2.4.0 · 14 files changed · +312 −87'（◆ 为 Signal）；加载行 '⠋ Reading diff and call sites…'；替换为 '✓ Reviewed in 1.8s'（✓ 为 Add）；然后五个发现，每个带彩色 ● 和固定宽度严重性词，路径为 Text，行号为 Muted，消息为 Muted：'high    src/billing/retry-queue.ts:40   async callback inside forEach is never awaited'；'high    src/api/webhooks.ts:118   signature compared with === (timing leak)'；'medium  src/billing/retry-queue.ts:46   retry limit hard-coded to 3'；'medium  internal/ledger/post.go:203   error from tx.Rollback() ignored'；'low     scripts/backfill.py:31   bare except swallows KeyboardInterrupt'；摘要行 '2 high · 2 medium · 1 low · 4 fixes available'（计数按严重性着色）；输入命令 'ferrule fix 1 2 --apply'；输出 '✓ Applied 2 fixes · re-reviewed in 0.4s · 0 high remaining'。会话 2（主体先清空）：输入 'ferrule review --staged'；'✓ Reviewed 3 files in 0.6s'；'No high or medium findings. 1 low:'；'● low  src/ui/InvoiceTable.tsx:88  list key uses array index in a sortable table'；输入 'git commit -m "fix: await retries in queue"'；'◆ ferrule pre-commit hook · passed in 0.3s'；'[feat/retry-queue 4e1c9a2] fix: await retries in queue'；'2 files changed, 9 insertions(+), 6 deletions(-)'。然后循环。
   布局：全宽区块，背后有 .bg-grid 背景，内边距顶部 96px / 底部 112px（移动端 56px / 72px）。容器内 lg（≥1024px）为 12 列网格：左列跨 5 列（垂直居中），终端跨 7 列。1024px 以下列堆叠：文案在前，终端在后，全宽。终端有 1px Line 边框，10px 圆角和柔和阴影 0 30px 80px -30px rgba(198,244,50,0.12)。长终端行在移动端以 2 空格悬挂缩进换行（字体 12px）。InstallBox 最大宽度 460px，移动端全宽。
   动效：标题、副行、安装框和事实行在加载时以 0.06s 交错淡入上移。终端打字如设计动效中所述。暂停切换脚本；重播重新开始会话 1。快捷键 'r' 也可重播。
4. **Diff 审查演示（#demo）** — 区块标题块：眉题（等宽 12px 大写 Signal）'Line-level review'；标题 'Comments land on the line, not in a wall of text.'；介绍（Muted，最大 600px）：'Every finding is anchored to the exact line, tagged by severity and rule, and most come with a patch. This is the same retry-queue change from the terminal above.' Diff 查看器，文件头栏：Lucide FileCode2 16px，路径 'src/billing/retry-queue.ts' 等宽 13px Text，然后 '+9' 为 Add 和 '−6' 为 Del，右侧等宽 12px 标签 'Unified' 和幽灵按钮 'Replay comments'（Lucide RotateCcw）。Hunk 标题行（Panel 2，Info 文本）：'@@ -38,8 +38,14 @@ export async function drainQueue(queue: RetryQueue)'。行（旧行号 | 新行号 | 符号 | 代码）：' 38 | 38 |   | export async function drainQueue(queue: RetryQueue) {'；' 39 | 39 |   |   const due = await queue.takeDue(new Date());'；' 40 |    | - |   due.forEach((job) => {'；' 41 |    | - |     chargeInvoice(job.invoiceId);'；'    | 40 | + |   due.forEach(async (job) => {'；'    | 41 | + |     await chargeInvoice(job.invoiceId);'；'    | 42 | + |     metrics.increment("billing.retry.charged");'；' 42 | 43 |   |   });'；' 43 | 44 |   |'；'    | 45 | + |   for (const job of queue.failed()) {'；'    | 46 | + |     if (job.attempts < 3) {'；'    | 47 | + |       queue.schedule(job, backoff(job.attempts));'；'    | 48 | + |     }'；'    | 49 | + |   }'；' 44 |    | - |   log.info(`drained ${due.length} jobs`);'；'    | 50 | + |   log.info(`drained ${due.length} jobs, ${queue.failed().length} failed`);'；' 45 | 51 |   | }'。注释 1，在新行 40 下 — 作者行：字标字形 16px，'ferrule' 等宽 12px Text，规则 'async-foreach-await' 等宽 12px Muted，严重性标签 'high'（Del 文本在 Del BG 上，1px Del/40% 边框）；正文：'forEach ignores the promise each async callback returns, so drainQueue resolves before any invoice is charged and a failed charge is never caught.'；'Suggested fix' 标签，然后一个迷你代码块，带 Add 色调行：'for (const job of due) {' / '  await chargeInvoice(job.invoiceId);' / '  metrics.increment("billing.retry.charged");' / '}'；操作：主小按钮 'Apply fix' 带 Kbd 'a'，幽灵按钮 'Ignore' 带 Kbd 'i'。注释 2，在新行 46 下 — 规则 'magic-number'，标签 'medium'（Warn）：'The retry limit 3 is also hard-coded in src/api/webhooks.ts:77. Read it from config.billing.maxRetries so both paths stay in sync.' 建议修复：'if (job.attempts < config.billing.maxRetries) {'。注释 3，在新行 50 下 — 规则 'structured-logging'，标签 'low'（Info）：'queue.failed() walks the whole queue a second time. Reuse the count from the loop above, and pass fields as data so the log is searchable.' 建议修复：'log.info("drained", { due: due.length, failed: failedCount });'。发现面板（右）：标题 'Findings · 3'，三个发现的列表，带严重性圆点、规则名称、'line 40' 等；下方等宽 12px 行 '1.8s · 14 files · 212 rules checked'。点击发现会滚动 diff 到该行并脉冲。
   布局：容器在 lg 为 8/4 分割：diff 查看器跨 8 列，发现面板跨 4 列且粘性（顶部 84px）。1024px 以下面板作为全宽卡片移到 diff 下方。Diff 查看器：Panel 背景，1px Line 边框，10px 圆角，溢出隐藏。行为 CSS 网格列 44px | 44px | 20px | 1fr；行号右对齐 Faint，符号 Add/Del，添加行 Add BG，删除行 Del BG，上下文行透明；代码文本由手写分词器着色（关键字 Info，字符串 Add，数字 Warn，函数名 Text，标点 Muted）。注释作为全宽行插入其锚定行之后：Panel 2 卡片，16px 内边距，桌面从左侧内缩 108px（移动端 8px），1px Line 边框，6px 圆角，左侧 2px 边框为严重性颜色。移动端代码区域在查看器内水平滚动（字体 12px），注释卡片换行到查看器宽度；页面本身从不横向滚动。
   动效：注释序列如设计动效中所述。'Apply fix'（点击或当注释有焦点或是最新打开未解决时按 'a'）将注释折叠为单行已解决行 'Resolved · fix applied'，带 Lucide CheckCircle2 为 Add，将锚定行以 0.3s 交叉淡入淡出替换为建议代码，并将其发现项变为删除线 Faint 标签；'Ignore' 将其折叠为 'Ignored · reason: false positive'。'Replay comments' 恢复原始 diff 并重播序列。
5. **功能网格（#features）** — 眉题 'Why teams switch'；标题 'Built for the loop you already run.'；介绍：'Review on save, on commit and in CI with the same rules and the same output. Made for teams that ship several times a day.' 六个单元格，每个：Lucide 图标 20px 为 Signal，标题（Inter 16px 字重 500），正文（Muted 14.5px，2–3 行），页脚统计（等宽 12px Faint，顶部 1px Line 分隔线）。（1）Zap — 'Reviews only the diff' — 'Reads the changed hunks plus the call sites they touch, so a 2,000-line pull request takes seconds instead of minutes.' — '1.8s median'。（2）HardDrive — 'Runs on your machine' — 'No code leaves your laptop or CI runner. Works on a plane, in air-gapped networks and behind strict proxies.' — '0 bytes uploaded'。（3）Wand2 — 'Fixes you can apply' — 'Most findings ship a patch. Preview it inline, apply it with one key, and [BRAND] re-reviews the result.' — '143 of 212 rules auto-fix'。（4）ShieldAlert — 'Security rules on by default' — 'Timing-safe comparisons, secrets in diffs, unsafe deserialization and SQL built from strings.' — '38 security rules'。（5）Keyboard — 'Keyboard-first TUI' — 'j and k to move, a to apply, i to ignore with a reason. ferrule review -i opens the interactive view.' — 'press ? on this page'。（6）FileCog — 'One config file' — 'Rules, severities and ignores live in .ferrule.toml next to your code and get reviewed like everything else.' — '.ferrule.toml'。网格下方，ConfigSnippet：左侧文本块 'Configure once, run everywhere.'（display 22px）+ Muted 行 'The same file drives the pre-commit hook, the CI step and the editor diagnostics.'；右侧代码面板标题 '.ferrule.toml'，行：'[review]' / 'base = "main"' / 'fail_on = "high"' / 'languages = ["typescript", "go", "python"]' / '' / '[rules]' / '"async-foreach-await" = "high"' / '"magic-number" = { level = "medium", ignore = ["tests/**"] }' / '"structured-logging" = "low"'，带复制按钮。
   布局：网格框架：10px 圆角，1px Line 边框，溢出隐藏，display grid 间隙 1px 在 Line 背景上，使每个单元格共享细线边框；单元格为 Panel，24px 内边距。lg 为 3 列，md（≥768px）为 2 列，以下为 1 列。ConfigSnippet 位于下方 48px：lg 为 5/7 分割，1024px 以下堆叠；代码面板使用与 diff 查看器标题相同的框架。
   动效：单元格以 0.06s 交错显示。悬停时单元格背景变为 Panel 2，图标上移 2px（0.2s）。
6. **基准测试（#benchmarks）** — 眉题 'Benchmarks'；标题 'Fast enough to run on every save.'；标题旁一个等宽 11px 徽章：'Illustrative figures'。分段标签：'Review time' 和 'Bugs caught'。标签 'Review time' — 说明 'Seconds to review a 1,240-line pull request · lower is better'；行从上到下（标签，值）：'[BRAND]' 1.8s；'[BRAND] --deep' 4.6s；'Linter chain (5 tools)' 7.9s；'Hosted review bot' 38.0s；'Script calling a large model' 52.4s。标签 'Bugs caught' — 说明 'Seeded bugs found, out of 50 · higher is better'；行：'[BRAND] --deep' 46；'[BRAND]' 41；'Script calling a large model' 33；'Hosted review bot' 29；'Linter chain (5 tools)' 17。右列，三个统计块堆叠：'21×' + 'faster than a hosted review bot'；'0.4s' + 'to re-review after applying a fix'；'92%' + 'of seeded bugs caught in deep mode'。图表下方脚注（等宽 11.5px，Faint，最大 720px）：'Illustrative numbers for this page. Measured on an invented 1,240-line TypeScript and Go pull request with 50 seeded bugs, 10-core laptop, median of 10 runs. Other rows are generic tool categories, not specific products.'
   布局：lg 为 8/4 分割（图表 8，统计块 4），1024px 以下堆叠，统计块在 md 为 3 列行，移动端堆叠。每个条形行：标签列 220px（等宽 13px；[BRAND] 行为 Text，前面有 Signal 6px 方块，其他为 Muted）| 轨道（高度 28px，Panel 背景，1px Line 边框，6px 圆角）内含条形（[BRAND] 行为 Signal，其他为 Line Strong）| 值 64px 右对齐等宽 14px（[BRAND] 为 Text，其他为 Muted）。宽度 = 值 / 活动标签中的最大值。640px 以下标签位于轨道上方，值移到轨道右端内。统计块：Panel，1px Line 边框，10px 圆角，24px 内边距，数字为 display 40px Text，单位为 Signal，标签 Muted 14px。
   动效：条形竞赛和计数如设计动效中所述；活动标签胶囊用 layoutId 滑动。统计块数字在可见时计数一次。
7. **集成（#integrations）** — 眉题 'Integrations'；标题 'Fits where reviews already happen.' 两个带标签的胶囊行。'Works with'（标签等宽 12px Faint）：Pre-commit hook、Pre-push hook、CI pipelines、Merge request comments、Editor diagnostics (LSP)、SARIF output、JSON output、Monorepos、Self-hosted runners、Offline mode。'Languages'：TypeScript、Go、Python 在前（来自 [LANGUAGES]，每个带 Signal 6px 圆点表示 'full support'），然后 JavaScript、Rust、Java、Kotlin、Ruby、SQL（无圆点，尾部等宽 10px 'beta'）。仅纯文本胶囊，无标志。行下方一行等宽命令带复制按钮：'$ ferrule hooks install' 和 Muted 文本 'adds the pre-commit hook in one step'。
   布局：容器，行间隔 24px。胶囊：inline-flex，等宽 13px，6px 12px 内边距，1px Line 边框，6px 圆角，Panel 背景，8px 间隙换行。md 及以上标签列在左侧 140px；移动端标签位于其胶囊上方。
   动效：胶囊每行以 0.02s 交错淡入；悬停时边框变为 Line Strong，文本变为 Text。
8. **变更日志预告（#changelog）** — 眉题 'Changelog'；标题 'Shipping every week.'；Muted 行 'Four recent releases. Breaking changes are rare and always come with a migration command.' 条目（版本标签等宽 13px 字重 700，类型标签，一行变更）：v2.4.0 [Latest，Signal 标签] [feat] 'Suggested fixes for 41 more rules; ferrule fix now re-reviews automatically.'；v2.3.2 [fix] 'Go generics no longer trip the shadowed-variable rule.'；v2.3.0 [perf] 'Cold start down from 420 ms to 140 ms with a shared parse cache.'；v2.2.0 [feat] 'Interactive TUI: ferrule review -i with j/k navigation and inline apply.' 展开前隐藏：v2.1.1 [fix] 'SARIF output now includes rule help text.'；v2.1.0 [feat] 'Python support leaves beta with 64 rules.'；v2.0.0 [breaking] 'Config moved to .ferrule.toml; ferrule migrate converts the old file.'；v1.9.0 [feat] 'Hook installer: ferrule hooks install.' 列表下方按钮：'Show 4 older releases' 带 Lucide ChevronDown，切换为 'Show fewer' 带 ChevronUp。无日期。
   布局：最大宽度 760px，在容器中左对齐。垂直时间线：左侧 7px 处 1px Line 规则线；每个条目在规则线上有一个 9px 圆点（v2.4.0 为 Signal，其他为 Line Strong），然后一行：版本标签、类型标签（feat Info，fix 和 perf Add，breaking Del；等宽 11px，1px 边框为颜色 40%，6px 圆角），变更文本为 Text 15px，md 时同行，移动端在标签下换行。条目间 20px。
   动效：条目以 0.05s 交错显示；展开如设计动效中所述。快捷键 'l' 滚动到这里。
9. **最终安装 CTA（#install）** — 标题（display 44px / 移动端 32px，居中）：'Run your first review in 30 seconds.' Muted 副行：'Free for teams that ship several times a day, from side projects to monorepos. No account, no upload.' 与 hero 相同的 InstallBox（共享标签状态），居中。下方，三个编号步骤为等宽行带复制按钮：'1  npm i -g ferrule'（跟随选中的安装标签），'2  ferrule review --base main'，'3  ferrule hooks install'。然后一个幽灵按钮 'Keyboard shortcuts' 带 Kbd '?' 打开覆盖层。
   布局：居中列，最大宽度 620px，在全出血带内，带径向 Signal 辉光（radial-gradient(600px circle at 50% 0%, rgba(198,244,50,0.08), transparent 70%)）和淡网格。步骤行：Panel，1px Line 边框，6px 圆角，12px 16px 内边距，步骤号为 Signal，命令为 Text，复制图标按钮在右；行间 8px。
   动效：显示时淡入上移。复制行为和 toast 如设计动效中所述。
10. **页脚** — 左侧：字标和 Muted 行 '[BRAND] — a local-first code review CLI for TypeScript, Go and Python.' 中间：两个链接列 — 'Product'：Demo、Features、Benchmarks、Changelog（哈希锚点）；'Install'：npm、brew、npx（每个复制该命令并显示 toast；渲染为按钮样式如链接）。底部行（1px Line 顶部边框，等宽 12px Faint）：左侧 '© [BRAND] contributors · Apache-2.0 core'；右侧 [CREDIT] 链接（如果保留）。
   布局：容器，顶部 64px / 底部 40px 内边距，md 为 3 列网格（品牌列更宽：2fr 1fr 1fr），移动端堆叠。底部行 flex justify-between，移动端换行。
   动效：除链接悬停颜色外无。
11. **键盘快捷键覆盖层和提示胶囊（全局）** — 提示胶囊：固定右下角，等宽 12px，'Press ? for shortcuts' 带 Kbd '?'，Panel 背景，1px Line 边框，圆角 999px；点击打开覆盖层。覆盖层：模态标题 'Keyboard shortcuts'（display 20px），带关闭按钮（Lucide X）和两列行列表（描述左为 Text 14px，键右为 Kbd）：'?' 打开此面板；'Esc' 关闭；'c' 复制安装命令；'d' 跳转到 diff 演示；'f' 跳转到功能；'b' 跳转到基准测试；'l' 跳转到变更日志；'i' 跳转到安装；'t' 返回顶部；'r' 重播终端；'a' 应用打开的修复建议（当 diff 演示在视图中时）。页脚行等宽 12px Faint：'Shortcuts are ignored while typing in a field.' Kbd 组件：等宽 12px，最小宽度 22px，高度 22px，居中，Panel 2 背景，1px Line Strong 边框带 2px 底部边框，6px 圆角。
   布局：覆盖层面板：宽度 min(560px, 100vw - 32px)，最大高度 80vh 带内部滚动，居中，Panel 背景，1px Line 边框，10px 圆角，24px 内边距；行间 1px Line 分隔线。提示胶囊距底部和右边缘 20px（移动端 16px），覆盖层打开时隐藏；移动端仅显示 'Shortcuts' 带 Kbd。
   动效：打开/关闭动画如设计动效中所述。全局处理器忽略带 Ctrl/Meta/Alt 的键和输入到 input、textarea 或 contenteditable 中的键；'c' 复制选中安装标签的命令并 toast；区块键平滑滚动（减少动效时即时）。覆盖层为 role dialog，aria-modal true，aria-labelledby 在其标题上，打开时焦点移到关闭按钮，Tab 被困在内，关闭时焦点返回打开器。

## 资产
- image: 不使用照片、插图或位图图像。所有视觉元素都在本项目内用代码绘制：字标字形（内联 SVG，在“设计图像”下描述）、终端和差异查看器的外框、严重程度圆点、条形图、背景网格（CSS 渐变）和噪点叠加层（内联 SVG feTurbulence data URI）。在 ASSETS.md 中注明这些均为项目原创。
- image: public/favicon.svg：一个 32x32 的 SVG，包含一个圆角方块（rx 7），填充色为 #C6F432，以及两条 #0A0B0D 的水平横条（x 7, y 11, width 14, height 3 和 x 11, y 18, width 14, height 3，两者 rx 均为 1.5）——与字标字形相同的标记。手工编写，未使用生成器。
- icon: lucide-react（ISC），从 npm 安装并进行 tree-shaking：Copy、Check、Download、Keyboard、ArrowRight、ArrowDown、Pause、Play、RotateCcw、FileCode2、CheckCircle2、Zap、HardDrive、Wand2、ShieldAlert、FileCog、ChevronDown、ChevronUp、X。尺寸 16–20px，strokeWidth 1.75。不使用 octicon 风格或代码托管类字形，不使用品牌图标。
- font: 通过 Fontsource npm 包自托管，在 src/fonts.ts 中导入，以便 Vite 将 woff2 文件打包到 dist/ 中：@fontsource-variable/space-grotesk（Space Grotesk，OFL-1.1，Florian Karsten）、@fontsource-variable/inter（Inter，OFL-1.1，Rasmus Andersson）、@fontsource-variable/jetbrains-mono（JetBrains Mono，OFL-1.1，JetBrains）。在 ASSETS.md 中列出全部三项，包含包名、上游来源和许可证。

## 禁止事项
- 不得使用任何形式的后端：不得有服务器代码、API 路由、数据库、认证、分析、会向任何地方提交的表单或第三方 API。复制到剪贴板和快捷键浮层是仅有的、会触及页面之外浏览器的交互。
- 不得从 fonts.googleapis.com、fonts.gstatic.com、Adobe Fonts 或任何 CDN 加载字体。仅通过三个 Fontsource 包自托管。
- 不得使用 CDN 的 <script>、<link> 或 import maps。每个脚本、样式、字体和图标都位于项目中，并打包进 dist/。
- 生产构建中不得有 source maps（build.sourcemap false），且 src/ 不会被复制进 dist/。
- 使用相对资源路径（Vite base './'）。内部链接是 index.html 上的哈希锚点（#demo、#features、#benchmarks、#integrations、#changelog、#install、#top）或 ./index.html，绝不能是裸目录或前导斜杠。不得有链接指向不存在的页面。
- 除非用户要求，否则不得更改技术栈（Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + Motion + lucide-react + Fontsource）。不得使用路由器、UI 套件、语法高亮库、图表库、3D。
- 不得出现真实代码审查、linting、测试或 AI 编码工具的名称、徽标或字标。产品是虚构的 [BRAND]；其唯一标识是代码绘制的字形和排版名称。
- 条形竞赛图中不得出现真实基准数字和真实竞品名称。各行是通用类别（'Hosted review bot'、'Linter chain (5 tools)'、'Script calling a large model'），每个数字都是虚构的，图表保留其 'Illustrative figures' 徽章和方法学脚注。
- 集成区域或任何其他地方不得出现真实公司或开源项目徽标；集成是带有通用名称的纯文本标签，语言是纯文字。
- 不得复制真实代码托管站点的 diff 视图样式、颜色、布局外壳或 octicon 风格字形。按规范从零绘制 diff 查看器，并且仅使用 Lucide 图标。
- 终端、diff、配置或变更日志示例中不得出现真实仓库名称、用户名、人物或真实代码。使用虚构的 ledgerline 仓库和此处给出的代码。
- 不得使用商业或自定义字体：仅使用 Space Grotesk、Inter 和 JetBrains Mono（OFL），自托管。
- 仅使用 MIT、ISC、BSD、Apache-2.0、0BSD、CC0 或 Unlicense 许可下的依赖（字体为 OFL）。不得使用 Aceternity UI、Tailwind Plus / Tailwind UI 或购买的模板代码；每个效果都自行编写。
- 不得使用照片、库存图片、占位图服务、Unsplash、Pexels 或 Pixabay。所有视觉元素均以代码绘制。
- 仅使用一种强调色：Signal lime。Add、Del、Warn 和 Info 是仅用于 diff、严重级别和变更日志标签的语义色，绝不用于按钮或标题。不得使用紫色渐变、玻璃拟态卡片，除指定的两个微妙光晕（终端阴影和最终 CTA 径向光晕）外不得使用霓虹光晕。
- 站点中任何地方都不得提及 VibeFather、其定价、成员或数字，可选的 [CREDIT] 页脚链接除外。
- 严格按照 Design motion 中所述尊重 prefers-reduced-motion：打字、加载动画、评论序列和条形竞赛跳转到其结束状态。终端循环在屏幕外或标签页隐藏时暂停。
- 无障碍：每个交互元素都可通过键盘访问，并带有可见的 2px Signal 焦点环（outline-offset 2px）；浮层捕获焦点并在 Esc 时关闭；标签页使用 role tablist/tab 和 aria-selected；终端主体具有 aria-live off 和会话 1 的 sr-only 摘要；复制按钮具有 aria-labels；toast 使用 role status。
- 必须在 1440×900 和 390×844 下渲染，零控制台错误且无水平页面滚动（仅 diff 代码区域和终端行可在其自身框内滚动）。剪贴板调用包裹在 try/catch 中，并带有 textarea 回退。
- 保持 dist/ 低于 20 MB（目标低于 2 MB）。
- 不得使用 lorem ipsum、填充内容或炒作词汇。不得有元描述、Open Graph 标签、JSON-LD 或站点地图：仅保留 <title> 和 favicon。

---
— Prompt by VibeFather · https://vibefather.ai/t/dark-developer-tool-launch-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
