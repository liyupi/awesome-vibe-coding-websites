> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 会议演讲幻灯片

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个为 [TALK] 制作的幻灯片网站，这是 [SPEAKER] 的 20 分钟演讲：七种类型共九张幻灯片，键盘驱动，带有概览网格、演讲者备注、深层链接和打印讲义。单页 index.html；一切都在浏览器中运行。

- 受众：在办公桌前排练的演讲者，以及之后通过链接阅读演示文稿的观众。两者都需要大字号、明显的进度和零点击。
- 目标：流畅地演示。五秒内，演示文稿通过按键前进；一分钟内，访客已打开概览并跳转到某张幻灯片。
- 语气：舞台自信：短句，大胆主张由下一张幻灯片兑现。每三张幻灯片一个笑话。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/bricolage-grotesque（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化（Setup）：
  - 使用 npm create vite@latest 以 react-ts 模板搭建脚手架（如果最新模板面向更新的主版本，则固定版本），然后保留一个真实的 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的每种颜色以 kebab-case 键添加到 theme.extend.colors（stage、stage-2、line、bone、mist、spotlight、spotlight-deep、spotlight-mist、good），并设置 fontFamily display ['Bricolage Grotesque Variable', 'system-ui', 'sans-serif']、sans ['Inter Variable', 'system-ui', 'sans-serif']、mono ['JetBrains Mono', 'ui-monospace', 'monospace']。将 borderRadius DEFAULT 设为 8px，并添加 maxWidth { deck: '1180px' }。
  - 在 src/fonts.ts 中导入 '@fontsource-variable/bricolage-grotesque'、'@fontsource-variable/inter' 以及 '@fontsource/jetbrains-mono/400.css' 和 '500.css'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（演讲内容：演讲者、标题、场地行、幻灯片——七种类型的可辨识联合，每个字符串都有类型；每张幻灯片携带自己的演讲者备注）、src/lib/brand.ts（speakerSlug = [SPEAKER] 转为小写，并将每一段非字母数字字符替换为 '-'，talkSlug 来自 [TALK]）、src/lib/highlight.ts（用于代码幻灯片的微型分词器：针对字符串、数字、注释、关键字、函数的正则跨度——返回 React 安全的 token 数组，不使用 dangerouslySetInnerHTML）。
  - 状态（State）：src/store/deck.ts 是一个小型外部存储（useSyncExternalStore），持有 { index, overviewOpen, notesOpen }，并双向同步 hash（#/3）（hashchange 监听器 + 导航时 replaceState）。
  - 键盘（Keyboard）：单个 window keydown 处理器——ArrowRight/ArrowLeft/Space/Backspace 导航（Space 和 Backspace 永不滚动：当 deck 具有焦点上下文时 preventDefault），Home/End 跳转，数字 1–9 跳转到该幻灯片，G 切换概览，S 切换备注，Escape 关闭覆盖层。所有镜像按键的按钮都在 mono 芯片中携带按键提示。
  - src/components/ 中的组件：Deck.tsx（SlideFrame.tsx 搭配 ProgressBar.tsx、Counter.tsx、KeyHints.tsx）、slides/TitleSlide.tsx、AgendaSlide.tsx、StatementSlide.tsx、BulletsSlide.tsx（BulletRow.tsx）、CodeSlide.tsx（CodeBlock.tsx、FocusHint.tsx）、TwoColSlide.tsx、ClosingSlide.tsx；OverviewGrid.tsx（MiniSlide.tsx）、NotesDrawer.tsx。src/pages/DeckPage.tsx 组合它们。
  - CodeSlide：示例占据左侧 7 列，使用 JetBrains Mono 400 20px / 1.7，位于 Stage 2 上；分词器按调色板为 token 着色；右侧 4 列承载幻灯片的要点和一个 FocusHint（'← → step lines'）：按下 ArrowUp/ArrowDown（当代码幻灯片处于活动状态且没有覆盖层打开时）会在编号行之间移动一个 Spotlight 2px 下划线，将其他行变暗至 40%。步进是可选的装饰——完整代码始终可见。
  - OverviewGrid：按 G——在 deck 上方出现一个遮罩，带有 3 列 MiniSlides 网格（缩小的实时渲染，aria-labels 带有幻灯片标题）；方向键移动 Spotlight 选择环，Enter 跳转，Escape/G 关闭。
  - NotesDrawer：按 S——一个底部抽屉（240px），以 Inter 15px Mist 显示当前幻灯片的演讲者备注，一个 'Notes are yours, not the audience's' 说明文字，以及 next/prev 镜像。
  - 幻灯片过渡（Slide transitions）：进入的幻灯片原地淡入（opacity + 8px scale 0.995→1，320ms --ease-out）；退出的幻灯片立即退出。在 prefers-reduced-motion 下：即时切换，任何地方都没有过渡。
  - 打印样式表（index.css 中的 @media print）：每页一张幻灯片（每个 SlideFrame 分页到新页面，背景通过 print-color-adjust: exact 保留），进度条和覆盖层隐藏；@page margin 12mm。计数器旁边有一个安静的 'Print handout' 按钮（Printer 图标）。
  - public/favicon.svg 如资源（Assets）下所述。index.html：lang en，<meta name='theme-color' content='#0C0D10'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[TALK] — slides</title>。
  - 在项目根目录编写 ASSETS.md，如资源（Assets）下所述。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体和 favicon.svg。保持在 3 MB 以下。

## 变量
- [SPEAKER] — 演讲者姓名（默认：“Elena Marsh”）。虚构演讲者的名字。用于标题幻灯片、结束幻灯片和页脚行。绝不使用真实演讲者。
- [TALK] — 演讲标题（默认：“Ship Small, Sleep Well”）。演讲的标题，采用标题大小写。驱动标题幻灯片、document.title 和演示文稿的语气。虚构内容，并非真实演讲。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/conference-talk-slide-deck（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 舞台（Stage）`#0C0D10` — 演示文稿各处的底色。
- 舞台 2（Stage 2）`#131519` — 代码面板、概览磁贴、备注抽屉。
- 线条（Line）`#23262D` — 1px 细线：进度条轨道、代码面板边框、抽屉边框。
- 骨白（Bone）`#F2EFE9` — 幻灯片文字 — 标题、要点、陈述。
- 薄雾（Mist）`#8E939D` — 元信息文字：计数器、按键提示、说明文字、备注。
- 聚光（Spotlight）`#E8B44A` — 唯一的暖色强调：进度条填充、激活环、按键提示标签、代码焦点下划线、链接。
- 深聚光（Spotlight Deep）`#C99633` — 按下状态。
- 聚光薄雾（Spotlight Mist）`#2E2712` — 选中的概览磁贴、代码关键字着色。
- 良好（Good）`#7FB069` — 代码字符串和结束幻灯片上的感谢圆点。

### 字体排印（Typography）
- 展示字体：标题、陈述、要点引导句 — Bricolage Grotesque，大而温暖：Bricolage Grotesque (OFL)，字重 400/600
- 文本与 UI：议程、双栏文案、备注、计数器：Inter (OFL)，字重 400/500/600
- 等宽字体：代码、按键提示、幻灯片编号：JetBrains Mono (OFL)，字重 400/500

### 布局与动效（Layout & motion）
- 间距：演示文稿填满视口（100dvh），桌面端两侧内边距 72px，640px 以下为 24px；幻灯片内容垂直居中。字号比例 — 舞台规则：如果后排看不清，就是太小了。标题幻灯片标题 clamp(56px, 9vw, 120px) Bricolage 600；陈述幻灯片 clamp(44px, 7vw, 96px)；要点引导句 34px；议程项 26px；双栏文案 20px / 1.65；代码 20px / 1.7；元信息与按键提示 13px 等宽/Inter。按钮：高度 40px，Inter 600 13px；幽灵按钮 1px 线条边框。全局焦点：2px 聚光描边，3px 偏移。
- 圆角：代码面板和磁贴为 8px；按键提示标签和计数器胶囊为 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1)。投影仪般平静：每个动作只做一次移动。
- 动效：幻灯片过渡按规范：原地淡入 320ms；要点和议程行在进入时于其幻灯片内以 60ms 错开；陈述幻灯片的单词下划线绘制一次（400ms）。
- 动效：代码焦点：聚光下划线在行间以 160ms 缓动移动；非焦点行以 180ms 变暗。
- 动效：概览：遮罩淡入 160ms；磁贴上升 8px，错开 30ms；选中环以 160ms 缓动移动。
- 动效：备注抽屉：上滑 200ms；Escape 反向。
- 动效：进度条：填充宽度随幻灯片索引以 260ms 缓动变化；计数器在变化时交叉淡入淡出。
- 动效：prefers-reduced-motion: reduce — 即时幻灯片切换，无错开，无环缓动（直接跳变），无下划线绘制；一切可读且完全可用。在 index.css 中使用 CSS @media，外加 Motion 的 useReducedMotion。
- 图像：零图片：演示文稿是黑底文字加聚光强调；代码颜色来自调色板（字符串为 Good，关键字为 Spotlight Mist 着色，数字为 Mist 提亮，注释为 Mist 变暗）。图标：仅 lucide-react，描边宽度 1.75。favicon 为绘制的 SVG。无照片、无徽标、无赞助商栏。

## 页面与区块
### 幻灯片组（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[SPEAKER] = Elena Marsh，[TALK] = Ship Small, Sleep Well）。将每个字符串和注释放入 src/content.ts 并从中渲染。若任何变量不同，请重写全部九张幻灯片，使其可信地呈现该演讲，保持相同的结构和幻灯片类型顺序。幻灯片：1 标题 — 演讲标题巨大，'[SPEAKER]' 和场地行 'SampleConf · Main stage (sample)' 以 Mist 呈现；2 议程 — 'Three honest failures' 含三个条目（'A launch that hurt'、'The rewrite that didn't'、'What I ship now'）；3 陈述 — 'Small ships sleep well.'；4 要点 — 'What small actually means' 含四个引导项（'One screen'、'One dependency less'、'One honest promise'、'One rollback plan'），每项配一行副文；5 代码 — 'The whole check, honestly' 含一段 12 行 TypeScript 代码片段（一个包含字符串、数字、注释的微型 deployCheck 函数）以及要点 'If it fits on a slide, it fits in your head'；6 双栏 — 'The launch that hurt'（左侧：3 个短段落；右侧：一个等宽字体的 'postmortem, abridged' 列表，共 4 行）；7 陈述 — 'Boring is a feature you ship.'；8 要点 — 'Monday, at your desk' 含三个行动项（'Delete one thing'、'Write the rollback first'、'Tell one user the truth'）；9 结尾 — 'Thank you.' + '[SPEAKER]' + 'Slides stay at this link (sample)' + 感谢圆点。每张幻灯片均附有 1–2 句演讲者备注（示例：幻灯片 3 的备注 'Pause here. Let it sit for three seconds.'）。所有会议名称和结果均为虚构的示例内容；笑点落在幻灯片 2、6 和 9 上。
   布局：不适用
   动效：不适用
2. **幻灯片组框架** — SlideFrame 包裹每张幻灯片：顶部固定一条 2px 进度条（Line 轨道，Spotlight 填充）；左下角为计数器胶囊（'3 / 9' 等宽字体）；右下角为 KeyHints（'← → move · G grid · S notes'，配等宽字体小标签）和 Print handout 幽灵按钮。打印时框架隐藏。
   布局：固定框架；幻灯片内容区域在其中居中。
3. **覆盖层** — OverviewGrid（G）：一个 3 列网格，由缩放后的 MiniSlides 组成，带标题和编号；Spotlight 圆环通过方向键选择；Enter 跳转；Escape 关闭。NotesDrawer（S）：当前幻灯片的备注、上一张/下一张镜像，以及说明文字 'Notes are yours, not the audience's.'
   布局：概览：全视口遮罩（Stage 为 88%）；备注：底部抽屉 240px，顶部边框为 Line。

## 资产（Assets）
- 图片（image）：完全不使用图片：整个演示文稿由文字、代码和用代码绘制的强调色构成。不要获取或热链任何资源。
- 图片（image）：在项目根目录写入 ASSETS.md，列出用代码绘制的资产（进度条、按键提示标签、代码高亮、favicon——“用代码绘制，原创”）以及 npm 包：@fontsource-variable/bricolage-grotesque、@fontsource-variable/inter、@fontsource/jetbrains-mono（OFL-1.1）和 lucide-react（ISC）。
- 图标（icon）：仅使用 lucide-react：ArrowLeft、ArrowRight、Grid3x3、NotebookPen、Printer、X。描边宽度 1.75，14–18px，颜色继承。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的圆角方块，填充 #0C0D10，带 1.5px 的 #E8B44A 边框，中央是一个 #E8B44A 的右向尖角符号。不使用品牌标志。
- 字体（font）：安装 @fontsource-variable/bricolage-grotesque、@fontsource-variable/inter 和 @fontsource/jetbrains-mono，并按“安装（Setup）”中的说明在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包进 dist/。

## 禁止事项
- 无后端、无表单提交、无对 API 的 fetch、无键盘快捷键库：一个 window keydown 处理器完成所有工作；hash 是唯一的持久化方式。
- 每个内部链接都是演示文稿本身（./index.html#/4）——绝不是裸目录；不带 hash 打开时显示第 1 张幻灯片。
- 不使用真实的会议、演讲、演讲者或其幻灯片；演讲、场地行和成果均为虚构的示例内容。
- 不使用 reveal.js、Spectacle 或任何幻灯片库；不使用高亮库——高亮是手写的分词器，不使用 dangerouslySetInnerHTML。
- 不使用图片、照片、徽标或赞助商栏；一切均为代码绘制的字体和颜色。
- 不使用日期或年份；场地行为静态示例文本。
- 一切自托管：字体通过 Fontsource，图标作为 npm 包或内联 SVG。不使用 CDN <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具。
- 生产构建：压缩、无 source map、不将 src/ 复制到 dist/、单条命令 npm run build、输出在 dist/ 下且小于 3 MB。
- 除结尾幻灯片角落中一个链接到 https://vibefather.ai 的微小界面说明“Built with a VibeFather template”外，绝不在站点内提及 VibeFather。
- 尊重 prefers-reduced-motion：即时切换、无错落动画；演示文稿仍完全由键盘驱动。
- 演示文稿必须在 1440x900 桌面端和 390x844 移动端（触摸：屏幕左/右半区点击前进；按键提示同时提及两者）下正常工作，且控制台零错误；每条键盘路径均可用，所有界面按钮上的焦点环均可见，且 Space 绝不滚动页面。
- 无障碍：幻灯片是带有 aria-labels 的真实区域；计数器和进度以 aria-live 礼貌更新；概览磁贴是带有幻灯片标题的按钮。

---
— Prompt by VibeFather · https://vibefather.ai/t/conference-talk-slide-deck · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
