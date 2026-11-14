> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 复古桌面操作系统作品集

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [OWNER_NAME] 打造的单页作品集，[OWNER_NAME] 是一位常驻 [CITY] 的 [DISCIPLINE]，作品集以一个虚构的 90 年代末桌面操作系统“[BRAND] Shell”的形式呈现。一段简短的打字机式启动日志之后，进入青灰色的桌面，上面有像素图标、带实时时钟的底部任务栏和开始菜单。内容放在带斜面的窗口中（About、Work、Showreel、Contact、Scraps）。你可以拖动、聚焦、最小化、最大化和关闭这些窗口。Work 文件浏览器中的每个项目都会打开自己的窗口，里面是用 CSS、SVG 或 canvas 绘制的循环预览。在移动端，桌面会变成固定任务栏上方的一列堆叠的手风琴式窗口。外观是原创的：温暖的斜面、奶油色的窗口主体、柔和的青灰色壁纸，以及一抹橘色点缀。它不使用任何真实操作系统的品牌、配色、图标或文案。

- 受众：正在招聘自由职业 [DISCIPLINE] 的工作室、代理机构和艺术总监。他们只有一分钟的空闲时间，喜欢在阅读之前先探索网站。
- 目标：让访客至少打开一个项目窗口并看到循环播放，然后让他们能方便地从 Contact 窗口或开始菜单联系到 [CONTACT_EMAIL]。
- 语气：俏皮、极客且温暖。短句，以冷面幽默谈论帧、曲线和渲染时间。文案绝不模仿真实操作系统的消息。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react (MIT)、react-dom (MIT)、motion (MIT)、@fontsource/pixelify-sans (OFL-1.1)、@fontsource/ibm-plex-mono (OFL-1.1)、@fontsource/silkscreen (OFL-1.1)、tailwindcss (MIT)、postcss (MIT)、autoprefixer (MIT)、vite (MIT)、@vitejs/plugin-react (MIT)、typescript (Apache-2.0)
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 安装配置：
  - 使用 npm create vite@latest（模板 react-ts）搭建脚手架，然后安装 motion、三个 @fontsource 包，以及 tailwindcss@3.4 postcss autoprefixer 作为开发依赖；运行 npx tailwindcss init -p。
  - vite.config.ts：base 设为 './'，build.outDir 设为 'dist'，build.sourcemap 设为 false。默认配置会压缩构建产物，并将 src/ 排除在 dist/ 之外。
  - main.tsx 导入 @fontsource/pixelify-sans/400.css、500.css 和 700.css，@fontsource/ibm-plex-mono/400.css、500.css 和 600.css，以及 @fontsource/silkscreen/400.css。
  - tailwind.config.js 的 theme.extend.colors：desk #4F7E7A、deskDot #46716D、chrome #CBC5B7、hi #FFFCF3、lo #6E695F、edge #24211C、cream #F3ECDD、creamDim #E4DBC8、ink #1F1D1A、slate #24323A、stage #1A2228、idle #8F8A80、accent #FF6A2B、accentDeep #C94A16、plum #6E5F78、olive #6F7656。
  - tailwind.config.js 的 theme.extend.fontFamily：display ['Pixelify Sans', 'monospace']、pixel ['Silkscreen', 'monospace']、mono ['IBM Plex Mono', 'monospace']。
  - 在 src/index.css 的 @layer components 中，定义 .bevel-out（box-shadow: inset 1px 1px 0 #FFFCF3, inset -1px -1px 0 #24211C, inset 2px 2px 0 #E9E2D2, inset -2px -2px 0 #6E695F）、.bevel-in（同样的四个阴影，明暗互换）和 .win-shadow（box-shadow 4px 4px 0 rgba(20,24,22,.35)）。
  - 将所有关键帧（blink、caret、preview loops、scraps-out）放入 src/index.css。遵循 @media (prefers-reduced-motion: reduce)，为所有关键帧设置 animation: none。
  - 将所有文案、六个项目、启动日志行、碎片和对话框文本保留在 src/content.ts 中。如果变量值与默认值不同，则为新的人物和学科重写所有文案，保持相同的长度和结构。
  - 将窗口管理器放在 src/os/useWindowManager.ts 中：useReducer 持有一个窗口映射 {id, kind, open, minimized, maximized, x, y, w, h, z, prevRect} 以及一个 zCounter。动作包括 OPEN、CLOSE、FOCUS、MINIMIZE、TOGGLE_MAX、MOVE。FOCUS 设置 z = ++zCounter，聚焦窗口是打开的、未最小化的窗口中 z 最高的那个。
  - 在 src/os/Window.tsx 中自行实现拖拽，使用标题栏上的指针事件：pointerdown 调用 setPointerCapture 并存储偏移量，pointermove 在 requestAnimationFrame 内派发 MOVE，pointerup 释放。进行钳制，确保标题栏至少有 80px 留在桌面内，且标题栏永远不会高于 y=0。在最大化状态和低于 768px 时禁用拖拽。
  - 每个项目预览都是 src/previews/ 中的独立组件，props 为 {playing: boolean}。Canvas 预览使用 requestAnimationFrame，根据 devicePixelRatio 缩放，并在 playing 为 false 或组件卸载时取消帧循环。
  - 在 src/os/icons.tsx 中将像素图标绘制为 16x16 字符串网格（每个像素一个字符映射到调色板），渲染为带有 shape-rendering='crispEdges' 的 SVG <rect>，显示尺寸为 48x48。
  - public/favicon.svg 是一个 16x16 像素循环标记：一个橘色圆环，带一个奶油色播放三角形。文档 <title> 为 '[BRAND] Shell — [OWNER_NAME], [DISCIPLINE]'。
  - 在项目根目录编写 ASSETS.md。其中说明所有图标、预览和壁纸均为代码绘制，并列出三个 Fontsource 字体及其 OFL-1.1 授权。

## 变量
- [BRAND] — 工作室 / 操作系统名称（默认："Loopwork"）。在启动日志、开始菜单横幅和桌面水印中显示为 '[BRAND] Shell'
- [OWNER_NAME] — 你的名字（默认："Juno Halvorsen"）
- [DISCIPLINE] — 专业领域（默认："Motion designer"）。驱动 About 文案和项目类型
- [CITY] — 城市（默认："Rotterdam"）
- [CONTACT_EMAIL] — 联系邮箱（默认："hello@loopwork.example"）
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/retro-desktop-os-portfolio（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/retro-desktop-os-portfolio?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
