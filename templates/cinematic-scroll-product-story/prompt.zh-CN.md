> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 电影感滚动产品故事

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简报
为 [PRODUCT] 打造的单页产品发布网站，[PRODUCT] 是虚构厂商 [BRAND] 出品的一款 [PRODUCT_TYPE]，以短片的方式讲述：六个全出血场景在滚动时固定并交叉淡入淡出，带有视差深度层、打字机式出现的信箱式字幕、递增计数的规格参数、结尾处自行车的多角度展示，以及一个固定的预购面板，可选择颜色和尺寸。

- 受众：28–50 岁的城市通勤者，他们已准备好替代第二辆车或漫长的公共交通出行，注重设计，并希望在支付定金前看到硬性数据（续航、重量、充电时间）。
- 目标：让访客先感受骑行，再用数据说服，最后完成转化：以可退还的 [DEPOSIT] 定金预订 [PRODUCT]，颜色和尺寸由他们选择。
- 基调：电影感、安静而自信。像电影字幕一样简短的陈述式字幕，具体的时间和距离，不使用感叹号，不使用流行术语。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + 原生 TypeScript（vanilla TypeScript）
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：gsap 3（core、ScrollTrigger、MotionPathPlugin）（GSAP Standard“免费”许可（免费，允许商业使用））、lenis（MIT）、lucide（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、typescript（Apache-2.0）、@fontsource/barlow-condensed（OFL-1.1）、@fontsource-variable/manrope（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化设置（Setup）：
  - 使用 vanilla-ts 模板，通过 npm create vite@latest 搭建脚手架。单页面：项目根目录下的 index.html，包含 <div id='app'>，入口为 src/main.ts。
  - vite.config.ts：base './'，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.ts']。在 tailwind.config.ts 中，将 Design 下的每种颜色以 kebab-case 键（night、charcoal、ash、bone、haze、dusk、ember、volt）添加到 theme.extend.colors，并设置 fontFamily：display ['"Barlow Condensed"', 'Arial Narrow', 'sans-serif']、sans ['"Manrope Variable"', 'system-ui', 'sans-serif']、mono ['"IBM Plex Mono"', 'ui-monospace', 'monospace']。
  - src/fonts.ts 导入 '@fontsource/barlow-condensed/600.css'、'@fontsource/barlow-condensed/800.css'、'@fontsource-variable/manrope'、'@fontsource/ibm-plex-mono/400.css'、'@fontsource/ibm-plex-mono/500.css'；main.ts 导入 src/fonts.ts 和 src/style.css（Tailwind 各层、字幕光标关键帧、滚动提示关键帧以及一个 @media (prefers-reduced-motion: reduce) 块）。
  - 文件布局：src/content.ts（所有文案、场景、字幕、统计数据、角度、色板、尺寸、FAQ、图片路径、种子艺术数据）、src/lib/brand.ts（brandSlug、email、存储键）、src/lib/storage.ts（在 try/catch 中安全地进行 localStorage 读写）、src/render.ts（根据内容构建所有标记）、src/scenes/art.ts（用于 haze、ridge、rain、contours、route、elevation profile、light streaks、grain 的内联 SVG 生成器）、src/film.ts（主时间线）、src/typing.ts、src/countup.ts、src/header.ts、src/preorder.ts、src/faq.ts、src/reduced.ts。
  - 在 src/film.ts 中一次性调用 gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)。仅在减少动态效果关闭时创建 Lenis；在 #film 中所有图片加载完成后调用 ScrollTrigger.refresh()（对 img.decode() 使用 Promise）。
  - 首次构建前，使用 curl -L -o 并按照精确的文件名，将 Assets 下列出的每张图片下载到 public/images/。构建本身从不获取任何内容。
  - index.html：lang en，<meta name='theme-color' content='#0A0B0D'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[PRODUCT] by [BRAND] — Preorder</title>。Body 背景为 #0A0B0D，以免出现白色闪烁。
  - 在项目根目录编写 ASSETS.md，内容如 Assets 下所述。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张图片。保持在 8 MB 以下。

## 变量
- [BRAND] — 品牌（默认："Corvel"）。虚构的制造商名称。用于字标、眉题、时间码栏、页脚、电子邮件（hello@ + brandSlug + .com）以及 localStorage 键。绝不使用真实的自行车或车辆品牌。
- [PRODUCT] — 产品名称（默认："Arc 7"）。虚构的型号名称，在场景 01、揭晓环节、预购面板和标题中大幅展示。保持简短（一两个词），以便适配 H1。
- [PRODUCT_TYPE] — 产品类型（默认："electric commuter bike"）。描述产品是什么的小写短语。驱动引导语、面板文案以及所有规格和说明文字的改写。保持其为自行车，以便内置的自行车图片仍然适用；若为其他产品，请用你自己的六张图片替换。
- [PRICE] — 价格（默认："$2,890"）。含货币符号的完整价格。月度分期金额由此计算（÷ 24，向上取整）。
- [DEPOSIT] — 定金（默认："$100"）。可退还的预订金额，显示在 CTA、确认信息和 FAQ 中。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/cinematic-scroll-product-story（默认：是；删除此行即可移除）

页面与区块下的文案是针对默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/cinematic-scroll-product-story?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
