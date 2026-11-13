> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 交互式科学讲解网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。
## 简介
一篇单页滚动叙事式科学解释文章，标题为“Silence, made of sound”，由虚构杂志 [BRAND] 发布。文章分四章解释 [DEVICE] 如何抵消 [NOISE_SOURCE]。(1) 声音作为压力波：一个粘性实时画布随每个滚动步骤改变状态。(2) 反噪声相位实验室：读者拖动珊瑚色反噪声波或 0–360° 滑块，合成波在 180° 时变平，同时实时读数显示结果电平。(3) 耳罩内部：一个手绘 SVG 剖面图按部件逐步构建，并带有编号标注。(4) 局限：一个动画 SVG 条形图，展示按频率划分的主动与被动降噪效果。页面以四题测验结束，并提供即时反馈。所有内容均用 Canvas 2D 或内联 SVG 绘制。没有音频、没有麦克风、没有图像。

- 受众：[READER]：好奇的非专业读者，喜欢制作精良的杂志专题，通过触摸概念而非阅读公式来学习效果最好。
- 目标：让一个想法豁然开朗：加入一个与噪声完全反相的波，就能让噪声消失。让读者通过滑块自己证明这一点，看到它在设备内部发生的位置，并用测验检查自己的理解。
- 语气：平静、精确、温暖，像一篇优秀的科学杂志专题。短陈述句，不用感叹号，不炒作，不留下未解释的术语。图号、图注和安静的自信。
## 技术栈
- 框架：Vite 5 + 原生 TypeScript
- 样式：纯 CSS（自定义属性）
- 库：vite（MIT）、typescript（Apache-2.0）、@fontsource-variable/newsreader（OFL-1.1）、@fontsource/ibm-plex-sans（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化设置：
  - 使用 npm create vite@5 quietwave -- --template vanilla-ts 脚手架创建项目。除三个 Fontsource 包外，不添加任何框架，也不添加任何运行时库。
  - vite.config.ts：base: './'，build.outDir 'dist'，build.sourcemap false，build.minify true。不使用插件。
  - 在 src/main.ts 中导入字体：'@fontsource-variable/newsreader/wght.css'、'@fontsource-variable/newsreader/wght-italic.css'、'@fontsource/ibm-plex-sans/400.css'、'/500.css'、'/600.css'、'@fontsource/ibm-plex-mono/400.css'、'/500.css'。
  - 文件布局：src/content.ts（所有可见字符串、测验数据和变量值）、src/styles/tokens.css（颜色、字号阶梯、间距，以 CSS 自定义属性形式定义）、src/styles/base.css、src/styles/sections.css、src/lib/canvas.ts（感知 DPR 的 canvas 设置，配合 ResizeObserver）、src/lib/motion.ts（prefers-reduced-motion 标志，以及 lerp/ease 辅助函数）、src/figures/pressure.ts（图 1）、src/figures/phaseLab.ts（图 2）、src/figures/earcup.ts（构建图 3 的 SVG）、src/figures/bands.ts（图 4）、src/scrolly.ts（IntersectionObserver 步骤引擎）、src/quiz.ts、src/main.ts。
  - 在 src/content.ts 顶部将变量定义为 const VARS 对象（BRAND、DEVICE、NOISE_SOURCE、READER、ISSUE_LABEL），并用模板字面量基于它构建每一个字符串。如果这些值与默认值不同，请重写各章节文案，使其读起来自然地贴合新的设备和噪声源。保持结构、步骤数量和测验长度不变。
  - index.html 只包含语义骨架（header、main，其中包含 section id 为 hero、chapter-1、chapter-2、chapter-3、chapter-4、quiz 的区块，以及 footer）。main.ts 从 content.ts 填充文本并挂载图形。
  - 每个 canvas：将 width/height 设为 CSS 尺寸 × devicePixelRatio（DPR 上限为 2），缩放上下文，在 ResizeObserver 触发时重绘，并且仅在 canvas 位于屏幕内时运行 requestAnimationFrame（IntersectionObserver），离开屏幕时取消该帧。
  - 所有关键帧和过渡都放在 src/styles/sections.css 中。JS 仅通过 data 属性（data-step、data-active、data-state）和 CSS 自定义属性来改变状态。
  - public/favicon.svg：一个 32×32 的正方形，底色为 #F6F2EA，上面有一条青色（#1F7A7A）正弦波和一条珊瑚色（#E0654A）反相正弦波交叉，中间穿过一条扁平的墨色（#1B1E23）线。从 index.html 中链接它。文档 <title>：'[BRAND] — How [DEVICE] work'。
  - package.json 脚本：dev = vite，build = tsc --noEmit && vite build，preview = vite preview。
## Variables
- [BRAND] — 出版物名称（默认："Kestrel Review"）。发布这篇解释性文章的虚构杂志；显示在报头（masthead）和页脚中。
- [DEVICE] — 被解释的设备（复数名词短语）（默认："noise-cancelling headphones"）。用于标题、导语（dek）和章节文案中，例如 'How [DEVICE] work'。
- [NOISE_SOURCE] — 被消除的稳定噪声（默认："the low hum of a jet cabin"）。用于句子中间的小写短语；应为稳定、低沉的声响。
- [READER] — 文章的受众（默认："curious commuters"）。用于主视觉署名（hero byline）和结尾步骤的复数名词短语。
- [ISSUE_LABEL] — 期号／栏目标签（默认："Issue 14 · Acoustics"）。报头中紧邻品牌名称的短标签。
- [CREDIT] — 在页脚保留一个指向 https://vibefather.ai/t/interactive-science-explainer 的小型 "Template by VibeFather" 链接（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块（section）作为键，以便日后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/interactive-science-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
