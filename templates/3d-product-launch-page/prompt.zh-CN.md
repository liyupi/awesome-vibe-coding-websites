> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 3D 产品发布页面

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [PRODUCT_NAME] 打造的单页、深色、电影感产品发布网站，[PRODUCT_NAME] 是 [BRAND] 旗下的一款 [PRODUCT_TYPE]。一个固定的全视口 three.js 画布渲染出一盏由基础几何体程序化构建的灯。HTML 区块在其上方滚动：首屏、四个功能章节（Focus、Warm、Night、Rhythm），文案左右交替，一份极细线条的规格表，以及一个预购行动号召。滚动进度通过一张固定的关键帧表驱动灯的底座旋转、灯臂姿态、灯头倾斜、相机推拉和灯光颜色。灯具有体积光束锥、泛光光晕、漂浮的尘埃微粒和地面上的光池。每一处 UI 强调色都跟随灯当前的光色。

- 受众：正在决定是否预购 [PRODUCT_NAME] 的访客，主要是 [AUDIENCE]。该模板本身面向硬件初创公司、众筹活动和产品设计师，他们想要一个能展示产品动态的发布页面。
- 目标：通过在屏幕上让产品动起来，展示它能做什么：每个章节都把灯置于新的姿态和颜色中。然后用一份精确的规格表加以支撑，并以一个平静、低压力的预购预留（仅静态 UI）收尾。
- 基调：安静、自信且精确。简短的陈述式标题，具体的数字，不用感叹号，不用炒作词汇。它应该感觉像电影片头字幕与工程数据表的结合。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + TypeScript + three.js
- 样式（Styling）：原生 CSS（Vanilla CSS）
- 库（Libraries）：three（含 three/examples/jsm：EffectComposer、RenderPass、UnrealBloomPass、OutputPass、RoomEnvironment）（MIT）、gsap（核心 + ScrollTrigger）（GSAP Standard License（免费，允许商业使用））、lenis（MIT）、@fontsource/space-grotesk（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）、typescript（开发依赖）（Apache-2.0）、vite（开发依赖）（MIT）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化设置（Setup）：
  - 使用 vanilla-ts 模板通过 `npm create vite@latest` 搭建脚手架，然后执行 `npm i three gsap lenis @fontsource/space-grotesk @fontsource-variable/inter @fontsource/jetbrains-mono` 和 `npm i -D @types/three`。
  - vite.config.ts：`base: './'`、`build.sourcemap: false`、`build.outDir: 'dist'`、`build.assetsInlineLimit: 0`。不要将 src/ 复制到 dist/ 中。
  - package.json 脚本：`dev: vite`、`build: tsc && vite build`、`preview: vite preview`。
  - 文件布局：index.html、src/main.ts（启动、Lenis、ScrollTrigger 接线）、src/content.ts（所有文案和变量值放在一个导出对象中）、src/styles.css（所有 CSS，令牌作为自定义属性，所有 @keyframes）、src/scene/stage.ts（渲染器、相机、合成器、灯光、地面、渲染循环）、src/scene/lamp.ts（程序化灯具）、src/scene/beam.ts（光束锥着色器、光晕精灵、尘埃点、地面光池）、src/scene/keyframes.ts（关键帧表和状态对象）、src/ui/hud.ts（实时读数与 --light CSS 变量）。
  - 在启动时从 src/content.ts 渲染所有 HTML 文案（将模板字符串注入各区块容器），这样替换变量时只需改动该文件。如果变量值与默认值不同，则重写 content.ts 中的每个标题、正文行、统计数据和规格行，以适配新产品，同时保持相同的长度和结构。
  - 在 main.ts 中一次性导入字体：`@fontsource/space-grotesk/500.css`、`/600.css`、`@fontsource-variable/inter`、`@fontsource/jetbrains-mono/400.css`、`/500.css`。
  - 注册 GSAP 插件：`gsap.registerPlugin(ScrollTrigger)`。通过 gsap.ticker 驱动 Lenis（`gsap.ticker.add(t => lenis.raf(t*1000))`、`gsap.ticker.lagSmoothing(0)`、`lenis.on('scroll', ScrollTrigger.update)`）。Lenis 选项：`duration: 1.15`，缓动函数 `t => Math.min(1, 1.001 - Math.pow(2, -10*t))`。
  - 添加 public/favicon.svg：一个 32×32 的圆角方块，颜色为 #07080B，中央有一个 #FFB547 的圆环（r=8，描边 3）和一个 3px 的圆点。`<title>` 为 `[PRODUCT_NAME] — [BRAND]`。
  - 在项目根目录写入 ASSETS.md，说明本站不使用任何第三方图片、图标、模型或纹理文件。所有内容均由代码生成，字体来自 Fontsource（OFL-1.1）。

## 变量
- [BRAND] — 品牌名称（默认：“Kelvane”）。虚构的公司名称，显示在页眉字标和页脚中
- [PRODUCT_NAME] — 产品名称（默认：“Sola One”）。即将发布的产品
- [PRODUCT_TYPE] — 产品类型（默认：“smart desk lamp”）。小写名词短语，用于正文文案
- [PRICE] — 预购价格（默认：“$249”）
- [SHIP_WINDOW] — 发货窗口（默认：“March 2027”）。显示在首屏眉题和预购区块中的月份和年份
- [AUDIENCE] — 受众（默认：“people who work, read and wind down at the same desk”）。小写短语，用于补全“built for …”
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/3d-product-launch-page（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值编写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/3d-product-launch-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
