> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 街机游戏工作室落地页（Arcade Game Studio Landing Page）

请完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的单页像素风街机落地页，[STUDIO_PITCH]。主视觉是一台用 CSS 绘制的街机柜。其屏幕运行一款可玩的 canvas 跑酷游戏，名为 [HERO_GAME]：像素角色跳跃越过或下蹲躲过障碍物，速度随时间提升，游戏带有分数计数器，以及吸引、游玩中、暂停和游戏结束状态。街机柜旁边是一个前 5 名高分榜，支持输入 3 个字母的缩写，保存在 localStorage 中且可重置。下方依次是滚动播报的游戏标题条、以街机卡带形式展示的游戏网格、工作室介绍区、仅前端的新闻订阅和页脚。屏幕上覆盖有 CRT 效果（扫描线、暗角、曲率、轻微闪烁）。任何地方都没有音频。

- 受众：玩家、媒体和发行商，他们正在发现一家位于 [HOME_BASE] 的小型独立工作室。他们应在五秒内感受到工作室的品味，最好是通过游玩。
- 目标：让访客在主视觉中游玩 [HERO_GAME]，打破高分，浏览工作室的游戏，并加入 [NEWSLETTER_NAME] 新闻订阅。
- 基调：俏皮、温暖且自信。街机柜语言（INSERT COIN、PLAYER 1、CONTINUE?）以简短的大写展示行呈现，正文则使用友好、平实的句子。绝不愤世嫉俗，绝不企业化。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + 原生 TypeScript
- 样式（Styling）：手写原生 CSS
- 库（Libraries）：vite（MIT）、typescript（Apache-2.0）、@fontsource/press-start-2p（OFL-1.1）、@fontsource/vt323（OFL-1.1）
- 构建（Build）：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置（Setup）：
  - 使用 vanilla-ts 模板通过 npm create vite@latest 搭建脚手架。不要添加任何 UI 框架、游戏引擎、动画库或图标包。
  - vite.config.ts：base './'，build.outDir 'dist'，build.sourcemap false，build.assetsInlineLimit 0。不要将 src/ 复制到 dist/ 中。
  - npm install @fontsource/press-start-2p @fontsource/vt323，然后在 src/main.ts 顶部导入 '@fontsource/press-start-2p/400.css' 和 '@fontsource/vt323/400.css'。两种字体均只有 400 字重。
  - 文件布局（File layout）：index.html、src/main.ts（启动和区块接线）、src/content.ts（每个变量和每一段文案，包括游戏列表、统计数据、滚动条项目和消息）、src/game/runner.ts（游戏循环、物理、状态）、src/game/sprites.ts（以字符串数组表示的像素网格加调色板映射）、src/game/input.ts（键盘、指针和触摸按钮输入）、src/scores.ts（localStorage 高分榜）、src/pixelart.ts（辅助函数，将字符串网格和调色板转换为由 <rect> 单元格组成的 SVG 字符串，并设置 shape-rendering='crispEdges'）、src/styles/base.css、src/styles/crt.css、src/styles/components.css。
  - 在 base.css 的 :root 中将所有颜色定义为 CSS 自定义属性（--bg、--screen、--panel、--edge、--magenta、--green、--amber、--ink、--muted）。将所有 @keyframes 保留在 crt.css（CRT 效果）或 components.css（UI 效果）中。将所有 prefers-reduced-motion 覆盖放在每个 CSS 文件末尾的单个块中。
  - 以 320×180 的固定逻辑分辨率渲染画布。使用 CSS 缩放（width:100%、aspect-ratio:16/9、image-rendering:pixelated）并设置 ctx.imageSmoothingEnabled=false。
  - 在绘制第一个画布文本之前，await document.fonts.load('8px "Press Start 2P"')，以便 HUD 永远不会显示回退字体。
  - 将每次 localStorage 访问都包裹在 try/catch 中，并回退到内存状态，以便隐私浏览永远不会抛出异常。
  - public/favicon.svg：一个 16×16 像素硬币（琥珀色 #ffb627 圆盘、#05060f 轮廓、洋红色 #ff2e88 垂直槽标记），绘制为 crispEdges 矩形。从 index.html 中使用 <title>[BRAND] — Insert Coin</title> 链接它。
  - 在项目根目录编写 ASSETS.md，列出两个 Fontsource 字体包（源 URL、作者、OFL-1.1），并说明每个精灵、图标和插图都是用代码绘制的。

## 变量
- [BRAND] — 工作室名称（默认：“Lanternbyte Games”）。用于导航、主视觉区、页脚、标题以及 localStorage 键前缀
- [HERO_GAME] — 可玩的主视觉游戏标题（默认：“Lantern Dash”）。显示在街机柜的灯箱招牌上、吸引屏幕上以及主行动号召按钮中
- [STUDIO_PITCH] — 一句话工作室简介（默认：“a three-person studio making pocket-sized pixel games you can finish on a lunch break”）。跟在品牌名之后、作为句子一部分的小写片段
- [HOME_BASE] — 城市／所在地（默认：“Tallinn, Estonia”）
- [NEWSLETTER_NAME] — 邮件通讯名称（默认：“The Save Point”）
- [CREDIT] — 在页脚保留一个小号“Template by VibeFather”链接，指向 https://vibefather.ai/t/arcade-game-studio-landing-page（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/arcade-game-studio-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
