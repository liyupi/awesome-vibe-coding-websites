> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 火箭发射倒计时页面

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的单页夜间发布页。首屏是一座用代码构建的火箭与发射塔，立于被照亮的发射台上，配有到 [LAUNCH_AT] 的实时倒计时和拖拽入轨交互。一个共享的飞行时钟在同一模型上重放点火升空、上升、级间分离、整流罩打开和入轨，并驱动遥测条和任务时间线。观礼派对表单在页面上完成确认，并可将邮箱存入 localStorage。

- 受众：关注 [MISSION]（[BRAND] 在 [RANGE] 进行的 [VEHICLE] 飞行）的人群，以及将通过更改变量把该页面复用于另一场首映的团队。
- 目标：让访客观看倒计时、环绕飞行器、重放上升过程，并在本页面保存观礼派对邮箱。不会向服务器发送任何内容。
- 语气：平静而具体，像一台小型靶场控制台。短句、具名人物、真实数字。不要口号，不要炒作，不要网络直播套话。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react@18.3.1 + react-dom@18.3.1 (MIT)、three@0.169.0 (MIT)、@react-three/fiber@8.17.14（v8 系列，React 18）(MIT)、@react-three/drei@9.121.3（仅 OrbitControls）(MIT)、lucide-react (ISC)、tailwindcss@3.4 + postcss + autoprefixer (MIT)、vite@5 + @vitejs/plugin-react (MIT)、typescript (Apache-2.0)、@fontsource/big-shoulders-display (OFL-1.1)、@fontsource/outfit (OFL-1.1)、@fontsource/ibm-plex-mono (OFL-1.1)
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化：
  - 使用 npm create vite@latest 以 react-ts 模板搭建脚手架。仅一个页面：项目根目录的 index.html，入口 src/main.tsx。文档标题为 '[MISSION] — [BRAND]'（默认：Wick Line 4 — Quillharbor Launch）。用相对路径 href ./favicon.svg 链接 favicon。仅包含 charset 和 viewport meta：不要 description、Open Graph、Twitter 或 JSON-LD 标签。
  - 精确安装 react@18.3.1、react-dom@18.3.1、three@0.169.0、@react-three/fiber@8.17.14 和 @react-three/drei@9.121.3。保留脚手架中的 Vite 5、TypeScript 和 Tailwind CSS 3.4。不要将 React 升级到 19、Tailwind 升级到 4、fiber 升级到 9 或 drei 升级到 10。不要安装 GSAP、Motion、Lenis、zustand、postprocessing 或任何 UI 套件。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, chunkSizeWarningLimit 1600 }。不要将 src/ 复制到 dist/。package.json scripts：dev 为 vite，build 为 tsc -b && vite build，preview 为 vite preview。如果脚手架的 tsconfig 没有 solution references，改用 tsc --noEmit && vite build，但用户运行的命令仍为 npm run build。
  - Tailwind 3.4 通过 PostCSS 配置，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中扩展 colors：sky #07080C、ink #E7E4DC、muted #9A9488、panel #12141A、line #2A2E36、sodium #E7A04A、cyan #7EE0E6、copper #C4895A。fontFamily display ['Big Shoulders Display', 'Arial Narrow', 'sans-serif']、sans ['Outfit', 'system-ui', 'sans-serif']、mono ['IBM Plex Mono', 'ui-monospace', 'monospace']。
  - src/index.css：Tailwind 层，color-scheme dark，body margin 0，background #07080C，color #E7E4DC，font-family Outfit，-webkit-font-smoothing antialiased。html scroll-behavior smooth。一个 prefers-reduced-motion 块将 scroll-behavior 设为 auto，并禁用 status-dot 脉冲和 drag-chip 淡出。输入框在自动填充时使用 1000px 的 #12141A 内阴影，以免字段闪白。Focus-visible 轮廓为 2px solid #7EE0E6，偏移 2px。Selection 背景 #7EE0E6，颜色 #07080C。
  - src/fonts.ts 导入 @fontsource/big-shoulders-display/500.css、700.css 和 800.css；@fontsource/outfit/400.css、500.css 和 600.css；@fontsource/ibm-plex-mono/400.css 和 500.css。在 src/main.tsx 中最先导入 fonts.ts。不要添加 fonts.googleapis.com 或 fonts.gstatic.com 链接。
  - 文件布局：src/content.ts（所有字符串、阶段、统计数据、人物和问题）、src/flight.ts（关于 t 的纯姿态、相机和遥测函数）、src/hooks/useReducedMotion.ts、src/hooks/useCountdown.ts、src/scene/LaunchCanvas.tsx、src/scene/Vehicle.tsx、src/scene/Pad.tsx、src/scene/Stars.tsx、src/components/Header.tsx、Countdown.tsx、Telemetry.tsx、FlightControls.tsx、Timeline.tsx、Facts.tsx、Team.tsx、WatchParty.tsx、Questions.tsx、Footer.tsx 和 src/App.tsx。飞行时钟 t 和 playing 位于 App.tsx 的 React state 中并向下传递。不要在 canvas 内保留第二个时钟。
  - public/favicon.svg 是一个 32 viewBox：一个 rx 6 的圆角矩形填充 #07080C，以及一个 cx 16 cy 16 r 4 的圆填充 #7EE0E6。无字母、无火箭剪影、无徽章。
  - 在项目根目录编写 ASSETS.md，列出三个 Fontsource 包（OFL-1.1，作者按包发布信息）和 lucide-react (ISC)。说明火箭、发射台、塔架、尾焰、星星和 favicon 均为原创代码，且网站不附带任何第三方图像或 3D 文件。

## 变量
- [BRAND] — 发布公司（默认：“Quillharbor Launch”）。虚构公司。页眉字标、页脚、观赛派对存储键以及页面标题。绝不是真实的发射服务提供商。
- [VEHICLE] — 飞行器名称（默认：“Lodestone”）。虚构的火箭名称。用于主视觉文案、事实信息和状态行。网格不随此名称变化。
- [MISSION] — 任务名称（默认：“Wick Line 4”）。虚构的飞行名称。它是 H1 和文档标题。保持简短，两到三个词加一个数字。
- [RANGE] — 靶场名称（默认：“Gannet Spit”）。虚构的沿海靶场。用于眉题、地址和主视觉文案。不是真实的发射场名称。
- [PAYLOAD] — 载荷名称（默认：“Harbor Glass”）。虚构的仪器名称，专有名词。用于主视觉文案、事实信息和两行状态。如果语法需要，请改写这些句子。
- [LAUNCH_AT] — 窗口开启时间（默认：“2027-08-21T04:12:00Z”）。ISO-8601 UTC 时刻。字符串保持原样。如果访客在此之后到达，页面以回放为主，而不是更改日期。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/rocket-launch-countdown-page（默认：是；删除此行以移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/rocket-launch-countdown-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
