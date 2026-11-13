> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 独立游戏发布页（Indie Game Launch Page）

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为一个虚构独立游戏打造的单页发布网站：全出血手绘主视觉英雄区，标题嵌入画中；三段视差特性节拍；一个诚实的预告片占位符；一张手绘世界地图预告，带发光地点标签；一个仅限季节的发布窗口，配手绘通用商店按钮；以及一个客户端愿望单/新闻通讯收尾。

- 受众：发布一款氛围向游戏的独立游戏工作室和独立开发者，以及为其制作揭晓页面的代理机构。
- 目标：用一幅画传达氛围，用三段节拍证明概念，将其扎根于一个世界，并以愿望单收尾——同时诚实地说明此演示不发送任何内容，也不提供视频。
- 语调：静谧而文学化，像别在灯笼里的一张便条：简短而富有感染力的句子，温暖而略带庄重；预告片和商店行明确说明自己是占位符。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/cinzel（OFL）、@fontsource/alegreya（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 使用 npm create vite@latest indie-game-launch-page -- --template react-ts 搭建脚手架；将 tailwindcss@3.4、postcss 和 autoprefixer 添加为开发依赖；将 motion、lucide-react、@fontsource/cinzel 和 @fontsource/alegreya 添加为依赖。
  - vite.config.ts：base './'，build.sourcemap false，构建输出 dist/。
  - tailwind.config.js：扩展颜色 dusk #141019、duskraised #1E1822、ashline #3A2F33、ember #E86A33、emberdeep #B34A22、parchment #F2E6D4、ashrose #A89599；fontFamily display 'Cinzel' 和 sans 'Alegreya'；radius：panel 6px 和 pill 999px。
  - postcss.config.js：tailwindcss + autoprefixer。
  - src/components/ParallaxScene.tsx：将一幅画包裹在 overflow-hidden 的框架中（6px 圆角）；img 缩放 1.12，并向指针方向平移 ±2.5%（lerped rAF，仅通过 matchMedia('(pointer:fine)') 检查启用），以及随区块滚动进度平移 ±4%（Motion useScroll + useTransform）；两种变换在 prefers-reduced-motion 下均停止，此时画作以 scale 1.02 静态渲染。
  - src/components/EmberMotes.tsx：十二个 3px 的余烬圆点缓慢上升穿过 hero 区域——位置和持续时间来自固定常量数组（8–14s 循环，交替延迟），纯 CSS keyframes，aria-hidden，在 prefers-reduced-motion 下禁用。
  - 商店按钮在代码中绘制为通用样式：一个 duskraised 药丸形按钮、一个 lucide 图标（store、gamepad-2、tag），以及字面标签 'Store A'、'Store B'、'Store C'，并带有 ashrose 说明文字 'generic buttons for the demo — no real storefronts'；它们锚定到 #wishlist，绝不指向外部 URL。
  - 预告片区块是占位符：海报画作位于一个 72px 的 ember 圆形下方，圆形内有 lucide 播放图标，说明文字为 'TRAILER — PLACEHOLDER'，副标题为 'A painted placeholder; no video ships with this demo.'；点击会将图标轻推 2px，除此之外不做任何事；任何地方都没有 <video> 元素。
  - src/lib/motion.ts：显现变体（opacity 0→1，y 26→0，800ms cubic-bezier(0.16,1,0.3,1)，110ms 交错，whileInView once），useReducedMotion 回退为普通的 200ms 淡入。
  - 将所有面向用户的字符串（游戏、工作室、世界名称、发布窗口、hero 文案、三个节拍、地图标签、表单文案）保留在 src/content.ts 中；各区块从中读取，以便在一处替换值。
  - index.html：<title>[GAME] — a hand-painted adventure by [STUDIO]</title> 加上一个代码绘制的 favicon.svg（dusk 地面上的一个 ember 圆点）；无其他 meta 工作。

## 变量
- [GAME] — 游戏标题（默认：“Emberveil”）。虚构游戏的名称——作为报头嵌入主视觉图，同时用作页面标题和愿望单文案。
- [STUDIO] — 工作室名称（默认：“Hollowmoor Games”）。虚构的工作室，在标题下方、发行信息区和页脚中署名。
- [WORLD] — 世界名称（默认：“the Ashen Vale”）。地图预告和文案所描述的虚构世界（'the fires went out in [WORLD]'）。
- [WINDOW] — 发行窗口（默认：“the ember season”）。仅限季节风格的标签——'coming in [WINDOW]'——绝不用日期、月份数字对或年份。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/indie-game-launch-page（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/indie-game-launch-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
