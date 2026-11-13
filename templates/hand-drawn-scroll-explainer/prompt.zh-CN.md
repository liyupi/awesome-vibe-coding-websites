> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 手绘滚动讲解（Hand-Drawn Scroll Explainer）

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个面向 [BRAND] 的单页、滚动驱动的讲解页，用六个手绘场景加一个回顾，讲清 [TOPIC] 是如何运作的。一个原创的火柴人讲解员，名叫 [NARRATOR_NAME]，站在一张贴在横线纸上的索引卡旁边。滚动进度会绘制出每一笔 SVG 描边（stroke-dashoffset 由 GSAP ScrollTrigger 随滚动擦除）。它会画出该场景的涂鸦、荧光笔涂抹填充、带弯曲箭头的标签，以及一个逐字母自我书写的对话气泡。六个场景按顺序对应六个 [KEY_PARTS]。结尾的回顾把全部六个涂鸦汇成一张流程图，并配一个手绘 CTA。一切皆由代码绘制。没有位图。

- 受众：[AUDIENCE]。访客带着好奇而来，想在约三分钟内理解一个流程，而不必读教科书。
- 目标：让访客一步步理解 [TOPIC]，每个场景一个概念，并带着回顾图离开。CTA 邀请他们重播页面或打印回顾。
- 语气：温暖、俏皮、平实，像一位友好的哥哥姐姐在笔记本上涂鸦。句子简短，每个场景一个温和的笑点，除非标签有解释，否则不用术语。以下所有文案均按默认值撰写。若任何变量与默认值不同，请重写每个标题、注释、气泡、标签和回顾行以适配新值，保持相同的长度和结构。将所有文案保留在 src/content.ts 中。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + TypeScript（vanilla）
- 样式（Styling）：Vanilla CSS
- 库（Libraries）：gsap（core + ScrollTrigger）（GSAP Standard License（免费，允许商业使用））、@fontsource/caveat-brush（OFL-1.1）、@fontsource/patrick-hand（OFL-1.1）、@fontsource/atkinson-hyperlegible（OFL-1.1）、vite（MIT）、typescript（Apache-2.0）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化设置（Setup）：
  - 使用以下命令搭建脚手架：npm create vite@5 . -- --template vanilla-ts，然后删除初始的 counter.ts、初始 CSS 和初始 SVG。
  - 安装：npm i gsap@3 @fontsource/caveat-brush @fontsource/patrick-hand @fontsource/atkinson-hyperlegible。
  - vite.config.ts：export defineConfig({ base: './', build: { outDir: 'dist', sourcemap: false, minify: true, assetsInlineLimit: 0 } })。
  - 文件结构（File layout）：src/content.ts（变量 + 每一段文案 + scenes 数组）、src/glyphs.ts（12 个涂鸦字形库）、src/narrator.ts（火柴人 SVG + 姿势路径数据）、src/draw.ts（描边绘制辅助函数）、src/scenes.ts（构建场景 DOM 和时间线）、src/progress.ts（进度轨迹）、src/recap.ts、src/main.ts、src/styles.css。
  - src/content.ts 导出 VARS = { BRAND, TOPIC, AUDIENCE, KEY_PARTS, NARRATOR_NAME } 以及一个带类型的 scenes 数组：{ id: 1-6, part: string, glyph: GlyphKey, glyphText?: string[], accent: string, title: string, note: string, bubble: string, labels: [{ text, corner: 'tl'|'tr'|'bl'|'br' }, { text, corner }], pose: PoseKey }，另外还有 intro、recap、cheatSheet 和 footer 文案对象。DOM 在启动时根据此文件构建。index.html 中不硬编码任何文案。
  - 在 src/main.ts 中依次导入 '@fontsource/caveat-brush/400.css'、'@fontsource/patrick-hand/400.css'、'@fontsource/atkinson-hyperlegible/400.css' 和 '@fontsource/atkinson-hyperlegible/700.css'，然后导入 './styles.css'。
  - gsap.registerPlugin(ScrollTrigger)。使用 gsap.matchMedia() 并设置三个条件：桌面端 '(min-width: 900px) and (prefers-reduced-motion: no-preference)'、移动端 '(max-width: 899px) and (prefers-reduced-motion: no-preference)'、减弱动效 '(prefers-reduced-motion: reduce)'。
  - draw.ts：prepStroke(path) 读取 path.getTotalLength()，设置 style.strokeDasharray = length 和 style.strokeDashoffset = length。drawTo(tl, paths, start, dur) 添加一个将 strokeDashoffset 补间到 0 的动画，缓动为 'none'，在各路径之间均匀错开。绝不使用 DrawSVG 插件。
  - 在 document.fonts.ready 解析后调用 ScrollTrigger.refresh()，并在防抖（200 ms）的 resize 时再次调用。
  - 所有 CSS 自定义属性（颜色、字体、间距）都放在 src/styles.css 的 :root 中。所有 CSS @keyframes（滚动提示摆动、挥手、闪烁回退）也都放在 src/styles.css 的底部。
  - index.html：<title>[BRAND] — How [TOPIC] works</title>，<link rel='icon' href='./favicon.svg'>。public/favicon.svg 是一个 32×32 的墨色圆圈涂鸦，内部有一个黄色 #FFD84D 圆点。
  - 添加一个打印样式表（@media print），隐藏顶部栏、进度轨迹、intro 和场景 1–6，只在白色背景上打印 recap 和 cheat sheet。
  - 在项目根目录编写 ASSETS.md，列出三个 Fontsource 字体包（OFL-1.1，来源 npm），并说明每一幅插图都是代码绘制的原创内联 SVG。

## 变量
- [BRAND] — 品牌 / 发布方名称（默认：“Scrawlhouse”）。虚构的、发布该讲解内容的工作室或产品
- [TOPIC] — 被解释的过程（默认：“Photosynthesis”）。任何能清晰拆分为六个步骤的过程
- [AUDIENCE] — 目标受众（默认：“curious kids aged 9–13 and the grown-ups who get asked “but how?””）
- [KEY_PARTS] — 六个关键部分，按场景顺序排列（默认：“Sunlight, Leaf, Water, Carbon dioxide, Glucose, Oxygen”）。必须恰好六个，以逗号分隔。每个部分对应一个场景。为每个部分从字形库中选取一个字形。
- [NARRATOR_NAME] — 旁白名称（默认：“Pip”）
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/hand-drawn-scroll-explainer（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值编写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/hand-drawn-scroll-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
