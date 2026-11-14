> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 智能家居产品落地页

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND]、[PRODUCT] 打造的单页暖白色落地页。首屏以一幅大型可交互剖切 SVG 房屋为核心：点击某个房间（客厅、厨房、卧室、车库），该房间会以唯一的青绿色强调色高亮，并在信息卡中显示该房间的设备及其唯一一项自动化。下方依次为：四事实条带、六设备阵容搭配简化房屋迷你地图（每个设备所在位置会脉冲闪烁）、两个 CSS 手机模型（应用仪表盘和 [SIGNATURE_SCENE] 场景逐设备播放）、三个套餐及示例定价和一条低调的入门说明、一个 FAQ，以及一个预留套件的邮件横幅。所有视觉元素均以代码绘制——SVG 房屋、设备图标、手机、标志、favicon。任何地方都没有照片。

- 受众：正在选购首套智能家居套件的 [AUDIENCE]，以及正在发布设备或传感器产品的硬件创始人或独立开发者，他们需要一个能演示而非描述的产品落地页。
- 目标：让访客在两次点击内感受系统的行为——在剖切房屋中探索房间，在手机中观看 [SIGNATURE_SCENE] 场景运行——然后引导他们前往套餐和预留邮件横幅。
- 语调：温暖、平静且具体。短句、朴实的动词、真实的数字（流明、电池月数、示例价格）。略带俏皮但绝不刻意卖萌；不用炒作词汇，不堆叠感叹号。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 motion/react 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/nunito（OFL-1.1）、@fontsource-variable/figtree（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 npm create vite@latest 以 react-ts 模板搭建脚手架。单页面：项目根目录的 index.html，入口为 src/main.tsx。package.json 脚本：dev 'vite'，build 'tsc -b && vite build'，preview 'vite preview'。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist'，sourcemap false，assetsInlineLimit 0 }。此模板不附带任何图片，因此 dist/ 仅包含 JS、CSS、woff2 和 favicon；保持其大小在 3 MB 以下。
  - 通过 PostCSS 使用 Tailwind 3.4（tailwindcss + postcss + autoprefixer），content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中扩展 colors，使用 kebab-case 键（cream、shell、panel、sand、line、line-strong、ink、muted、faint、teal、teal-deep、teal-tint），fontFamily display ['Nunito Variable', 'system-ui', 'sans-serif']，sans ['Figtree Variable', 'system-ui', 'sans-serif']，mono ['IBM Plex Mono', 'ui-monospace', 'monospace']，borderRadius { card: '24px', inner: '16px', chip: '10px', house: '28px' }，maxWidth { container: '1160px' }，boxShadow { soft: '0 24px 60px -30px rgba(44,38,32,0.28)', lift: '0 16px 36px -20px rgba(44,38,32,0.22)' }。
  - src/fonts.ts 导入 @fontsource-variable/nunito（字重 600、700、800）、@fontsource-variable/figtree（400、500、600、700）和 @fontsource/ibm-plex-mono（400、500、600，字重文件 400.css/500.css/600.css）；src/main.tsx 导入 src/fonts.ts 和 src/index.css。index.css 包含 Tailwind 层、body 背景色 #FAF6EF 和文字颜色 #2C2620，以及一个 @media (prefers-reduced-motion: reduce) 块，将 CSS 动画和过渡缩短至 0.01ms。
  - 文件布局：src/content.ts（所有文案、房间数据、设备数据、套餐、FAQ——带类型，组件中无文案），src/lib/brand.ts（brandSlug、emailDomain、companyName），src/components/houseGeometry.ts（剖切房屋和迷你地图的 SVG 坐标），src/components/（Header.tsx、MobileMenu.tsx、Hero.tsx、CutawayHouse.tsx、RoomInfo.tsx、FactsStrip.tsx、DeviceLineup.tsx、MiniMap.tsx、AppPreview.tsx、PhoneDashboard.tsx、PhoneScene.tsx、Bundles.tsx、Faq.tsx、CtaBand.tsx、Footer.tsx、Button.tsx、Reveal.tsx），src/App.tsx 按页面顺序组合它们。
  - src/components/CutawayHouse.tsx 根据 content.ts 中的 ROOMS 数组渲染 Hero 部分描述的几何图形；它从不硬编码文案。房间选择位于 Hero 状态中（默认 'living'）；选择房间（点击、Enter 或 Space）会同时更新高亮、图钉和 RoomInfo。
  - Reveal.tsx 使用 Motion 的 whileInView 淡入上移动画包裹各区块（opacity 0 -> 1，y 20 -> 0，duration 0.6，ease [0.22, 1, 0.36, 1]，viewport once 且 amount 0.2），并在开启减少动态效果时以无动画方式渲染子元素。将应用包裹在 MotionConfig reducedMotion='user' 中。
  - index.html：lang en，<meta name='theme-color' content='#FAF6EF'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[BRAND] — A home that handles itself, gently</title>。public/favicon.svg 是标志图形（青绿色圆角方块，带有白色剖切房屋字形）。
  - 在项目根目录编写 ASSETS.md：说明每个视觉元素（房屋、迷你地图、设备图标、手机模型、标志、favicon）都是为本项目用代码绘制的，并列出 Fontsource 包（OFL-1.1，https://fontsource.org）和 lucide-react（Lucide contributors，ISC，https://lucide.dev）。没有图像文件。

## 变量
- [BRAND] — 品牌名称（默认："Hearthlane"）。虚构的产品名称。用于字标、页面标题、主视觉副标题、应用界面、FAQ、CTA 和电子邮件域名。绝不是真实的智能家居品牌、生态系统或语音助手。
- [PRODUCT] — 产品是什么（默认："a starter smart home system of six small, calm devices"）。一个完成 '[BRAND] is ...' 的小写短语。驱动主视觉副标题、产品阵容介绍、应用文案和 FAQ。任何小型设备套件都适用：传感器、无摄像头安防、照明。
- [AUDIENCE] — 面向谁（默认："first-time homeowners and young families"）。复数名词短语。用于主视觉副标题、套装说明和页脚行；FAQ 答案会据此调整。
- [SIGNATURE_SCENE] — 旗舰自动化名称（默认："Leaving Home"）。标题大小写的场景名称，显示在第二部手机、主视觉幽灵按钮和应用文案中。选择一个符合新品牌的简短命名例程（Away Mode、Night Watch）。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接至 https://vibefather.ai/t/smart-home-product-landing-page（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块键控，以便日后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/smart-home-product-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
