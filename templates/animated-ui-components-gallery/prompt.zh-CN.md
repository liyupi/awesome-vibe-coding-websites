> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 动画 UI 组件画廊

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建一个精致的深色 Pro 画廊，包含 30 个原创动画 UI 组件，标题为 [BRAND]，副标题为 [TAGLINE]，访客可实时更改强调色，默认值为 [DEFAULT_ACCENT]（#7C5CFF），画布为近黑色（#0A0A0B）与中性灰工作室背景。包含全部 30 个从零编写的可运行交互演示：Magnetic Button、Spotlight Card、Text Scramble、Split-Letter Reveal、Animated Icon Beams、Infinite Logo Marquee、Conic Gradient Border、Magnifying Dock、Number Ticker、3D Tilt Card、Cursor Trail Pad、Ripple & Confetti Button、Scroll-Stacking Cards、Animated Sliding Tabs、Aurora Mesh Background、Glowing Interactive Grid、Morphing Pill Toast、Typewriter Terminal、Image Comparison Slider、Shimmer Skeleton Loader、Hold-to-Confirm Button、Floating Badge Orbit、Elastic Toggle Switch、Flip-Clock Countdown、Pulse Radar Ping、Accordion Smooth Reveal、Radial Command Wheel、Live Audio Bars Meter、Kinetic Pricing Toggle 和 Holographic Foil Chip。提供一个精选的实时 Workbench，包含 Speed（0.5×–2.5×）、Intensity（20%–100%）和 Accent 滑块、Light/Dark 预览表面切换、可复制的 React + Tailwind 代码片段标签页、一键“Copy as Prompt”按钮、搜索栏、6 个分类筛选器，以及支持键盘访问的 ⌘K 命令面板。

- 受众：寻找精致、可直接嵌入落地页的微交互的前端开发者、设计工程师和独立开发者。
- 目标：让访客在第一帧就能体验实时触感动画，随时自定义速度/颜色/强度，并一键复制可用于生产环境的 React + Tailwind 代码或 AI 提示词。
- 基调：锐利的开发者工作室——克制的近黑色界面外壳，让每个发光的交互组件成为焦点。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 4
- 库：lucide-react（ISC）、@fontsource/space-grotesk（OFL-1.1）、@fontsource/inter（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中导入 @fontsource/space-grotesk（500、600、700）、@fontsource/inter（400、500、600）和 @fontsource/jetbrains-mono（400、500、600）。
  - 在 src/data/componentsCatalog.ts 中为全部 30 个组件编写作者元数据、分类、简洁的 React + Tailwind 可复制片段，以及 'Copy as Prompt' 规范。
  - 在 src/components/LiveDemos.tsx 中实现全部 30 个真正的交互式组件预览，由 accentColor、speed、intensity 和 surfaceTheme（'dark' | 'light'）属性动态驱动。
  - 在 src/App.tsx 中构建带有实时强调色色板 + 自定义取色器的粘性页头、精选交互式 Workbench、30 卡片实时画廊网格，以及 ⌘K 键盘命令面板模态框。

## 变量
- [BRAND] — 画廊名称（默认："KineticKit"）。动画 UI 组件库品牌名
- [TAGLINE] — 主视觉标语（默认："30 original animated React & Tailwind components built for instant drop-in."）。简洁的画廊副标题
- [DEFAULT_ACCENT] — 默认强调色十六进制值（默认："#7C5CFF"）。访客可实时更改的初始强调色色板
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/animated-ui-components-gallery（默认：是；删除此行即可移除）

"页面与区块"下的文案是按默认值编写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/animated-ui-components-gallery?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
