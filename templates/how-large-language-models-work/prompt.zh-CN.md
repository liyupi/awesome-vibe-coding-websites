> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 大型语言模型如何工作

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个面向 [BRAND] 的单页长滚动交互式讲解页面，标题为“[TOPIC]”。一个未完成的示例句子 [EXAMPLE_SENTENCE] 会经过一个固定（pinned）的 SVG 舞台，分八步推进，同时简短的说明卡片从旁滚过：句子被拆分成 token 芯片，芯片被赋予数字 id，芯片飞入一张带有标注区域的二维语义地图，弯曲的注意力弧线把每个词与它所依赖的前文词连接起来，一个柱状图展示排名前八的候选下一个词，一个带种子掷骰的温度滑块采样出一个结尾，读者可以重新掷骰。页面以一条五图标回顾条、一个术语表、一段简短 FAQ 和一个页脚收尾。浏览器中不运行任何模型：每个数字都是虚构的、用于示意，并存储在一个内容文件中。

- 受众：[AUDIENCE]：使用 AI 写作工具或在工作中听说过它们的人，希望获得一幅诚实、直观的图景，了解内部发生了什么，而不涉及数学或代码。
- 目标：到页面结束时，读者能用自己的话解释五个阶段（拆分、嵌入、注意力、预测、采样），并且已经充分体验过温度滑块，从而明白为什么同一个提示词可能给出不同的答案。
- 语气：平静、精确且友好，像一本优秀的科普杂志。句子简短，每张卡片只讲一个想法，每个想法配一个日常类比，不炒作，不使用没有行内定义的术语。绝不提及真实的 AI 产品、实验室或人物；始终说“一个语言模型”。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react、react-dom 18（MIT）、vite 5、@vitejs/plugin-react（MIT）、typescript 5（Apache-2.0）、tailwindcss 3.4、postcss、autoprefixer（MIT）、gsap 3（核心 + ScrollTrigger）（GSAP 标准许可证（免费，允许商业使用））、lucide-react（ISC）、@fontsource-variable/fraunces（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）、@fontsource-variable/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 Vite react-ts 模板搭建脚手架；单一入口 index.html，包含 <title>[BRAND] · [TOPIC]</title> 和 <link rel="icon" href="./favicon.svg">。
  - vite.config.ts：base './'，build.sourcemap false，build.outDir 'dist'，默认压缩。
  - 在 src/main.tsx 中一次性导入三个 Fontsource 可变字体包；在那里用 gsap.registerPlugin(ScrollTrigger) 一次性注册 gsap ScrollTrigger。
  - 在 src/index.css 的 :root（浅色）和 [data-theme="dark"]（深色）下，将所有颜色定义为以空格分隔的 RGB CSS 变量；在 tailwind.config.ts 的 theme.extend.colors 中将它们映射为 rgb(var(--x) / <alpha-value>)。Tailwind darkMode: ['selector', '[data-theme="dark"]']。
  - tailwind.config.ts fontFamily：display ['Fraunces Variable', 'Georgia', 'serif']，sans ['Inter Variable', 'system-ui', 'sans-serif']，mono ['JetBrains Mono Variable', 'ui-monospace', 'monospace']。
  - 将所有文案和数据保存在 src/content.ts 中：hero 文本、八个步骤说明（含类比和术语表条目）、tokens 数组（text、id、category、mapX、mapY）、ghost words、regions、attention rows、candidates（word、probability、continuation）、recap 标签、glossary、FAQ 和 footer 文本。组件只从中读取。当变量值变化时，重写文案并重新生成此文件中的所有数据以适配新示例；保持相同的结构和数量。
  - 将采样器放在 src/lib/sampler.ts 中：mulberry32(seed) PRNG、applyTemperature(probs, T) 计算 softmax(ln(p_i) / T)，以及 sample(probs, r) 返回累积和首次超过 r 的索引。
  - 组件：Header、Hero、Scrolly（StepCard 列表 + Stage）、Stage 图层 TokenLayer、MapLayer、AttentionLayer、BarsLayer、TemperatureControls，然后是 Recap、Glossary、Faq、Footer。一个 useReducedMotion hook 读取 matchMedia('(prefers-reduced-motion: reduce)')。
  - Stage 动画模型：React 状态 activeStep（0-7）由每个 StepCard 的一个 ScrollTrigger 设置（start 'top 60%'，end 'bottom 60%'，onToggle 时当 isActive）。每次步骤变化运行一个 GSAP 时间线，将 SVG 属性和变换从当前状态补间到该步骤的目标状态（overwrite: 'auto'），因此向后滚动与向前滚动效果相同。
  - 主题：加载时在 try/catch 内读取 localStorage 键 'theme'，回退到 prefers-color-scheme；在 <html> 上设置 data-theme；头部切换按钮在 try/catch 内将其写回。

## 变量
- [BRAND] — 出版物或系列名称（默认：“Lantern Guides”）。这是虚构的解说内容出版方，显示在页眉字标、主视觉引导语和页脚中。
- [TOPIC] — 解说标题（默认：“How a language model picks the next word”）。这是页面要回答的问题；用作主视觉标题和 <title> 中。
- [EXAMPLE_SENTENCE] — 未完成的示例句子（默认：“After a rainy walk, the sleepy dog curled up by the”）。这是贯穿每个步骤的输入。请选择一个能拆分为 12-16 个 token、至少包含一个可拆成两部分的单词、并且下一个词明显但不确定的句子。
- [AUDIENCE] — 页面面向的读者（默认：“curious readers with no engineering background”）。决定每段说明文字的词汇和类比。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/how-large-language-models-work（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值编写的。如果你的取值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/how-large-language-models-work?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
