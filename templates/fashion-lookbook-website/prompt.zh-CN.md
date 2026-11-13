> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 时尚造型手册网站（Fashion Lookbook Website）

请完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个单页高级时装造型册：超大压缩字体下的全出血剪影封面，垂直滚动驱动固定横向章节的编辑造型画框，章节标题漂移更慢，代码绘制的造型细节叠加层附服装鸣谢，一个诚实的广告片占位符，一段字体排印的系列笔记插曲，以及虚构的零售商。

- 受众：独立时装品牌、编辑与广告工作室，以及以章节形式呈现作品的 portfolio 摄影师。
- 目标：读起来像一期刊物，而不是一个网站：用滚动带访客横向穿过整个系列，让他们打开任何造型查看其鸣谢，并让品牌名称留在他们的记忆中。
- 语调：严峻、宣言式、杂志般平实——说明文字如鸣谢，笔记如宣言；没有感叹号，文字中没有柔软。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/oswald（OFL）、@fontsource/manrope（OFL）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置：
  - 使用 npm create vite@latest fashion-lookbook-website -- --template react-ts 脚手架创建项目；将 tailwindcss@3.4、postcss 和 autoprefixer 添加为开发依赖；将 motion、lucide-react、@fontsource/oswald 和 @fontsource/manrope 添加为依赖。
  - vite.config.ts：base 设为 './'，build.sourcemap 设为 false，构建输出到 dist/。
  - tailwind.config.js：扩展颜色 ink #111214、graphite #1B1D21、fogline #2E3136、bone #EDEDEA、ash #6E7176，以及 accent var(--accent)（在 :root 中从 content.ts 绑定 --accent）；fontFamily 中 display 为 'Oswald'，sans 为 'Manrope'；所有地方的默认圆角为 0。
  - postcss.config.js：tailwindcss + autoprefixer。
  - src/hooks/useHorizontalChapters.ts：核心编排逻辑——外层包裹容器的高度在挂载和调整窗口大小时根据 refs 测量，设置为 calc(100vh + (trackWidth - viewportWidth) px)；一个 sticky 的 100vh 子元素固定轨道；Motion 的 useScroll 作用于包裹容器，驱动 useTransform(scrollYProgress, [0,1], [0, -(trackWidth - viewportWidth) px])，并作为轨道的 translateX 应用（线性，无弹簧）；章节标题块以该速度的 0.6 倍获得第二个变换；每一帧的内部图片在章节自身的进度范围内获得 -6%→6% 的 translateX。
  - src/components/LookOverlay.tsx：全屏固定覆盖层（graphite 96% 不透明度，z-50）——左侧为 3:4 比例的照片（max-h 78vh），右侧为规格卡片（graphite 背景上的 bone 文字，fogline 细线分隔），accent 色的 look 编号，关闭 X；点击帧时打开，点击 X、按 Escape 和点击背景时关闭。
  - 广告影片占位符用代码绘制：一个 graphite 边框，内含 64px 的 accent 色播放三角形（SVG），标题为 'CAMPAIGN FILM — PLACEHOLDER'，副标题为 'The film slot is a drawn placeholder; no video ships with this demo.' 点击时除了将图形微移 2px 外不做任何事。
  - src/lib/motion.ts：reveal 变体（opacity 0→1，y 30→0，900ms cubic-bezier(0.16,1,0.3,1)，120ms 交错，whileInView 仅一次），配合 useReducedMotion 回退为普通淡入，并且——对于章节——回退为垂直堆叠布局，无固定、无变换。
  - 将所有面向用户的字符串和数据集（label、collection、season、accent hex、chapters 数组 {number, title, frames[{image, look, caption, credits[]}]}、notes、stockists、footer 文案）保留在 src/content.ts 中；各区块从中读取，以便在一处替换值。
  - index.html：<title>[BRAND] — [COLLECTION]</title> 加上一个用代码绘制的 favicon.svg（ink 底色上的一个小 accent 色方块）；不做其他 meta 工作。

## 变量
- [BRAND] — 标签名称（默认：“Stille”）。为字标、页面标题和页脚虚构的时尚品牌名。
- [COLLECTION] — 系列名称（默认：“Monolith”）。以超大字号设置在封面上的系列标题，并在各章节和注释中呼应。
- [SEASON] — 季节标签（默认：“Autumn–Winter”）。位于标签名称旁边的静态季节标签（无年份、无真实日期）。
- [ACCENT] — 系列强调色（默认：“#D8461F”）。唯一的强调色，作为 CSS 变量应用：章节编号、进度线、播放符号、链接、造型标签。更改它，整期内容便会重新着色。
- [CREDIT] — 在页脚保留一个小的“Template by VibeFather”链接，指向 https://vibefather.ai/t/fashion-lookbook-website（默认：是；删除此行即可移除）

“页面与区块”下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/fashion-lookbook-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
