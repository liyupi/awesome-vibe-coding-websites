> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 3D 产品配置器页面

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个面向 [BRAND] 的 [PRODUCT_NAME] [PRODUCT_TYPE] 的单页 3D 产品配置器。一个大型程序化 3D 模型置于固定的工作室舞台上：拖动旋转，选择双色饰面、坐垫材质，以及实时绘制在耳罩板上的雕刻；价格随里程表式数字滚动重新计算。滚动时舞台保持固定，并将耳机拆解为八个带标签的部件，然后再重新组装，随后依次呈现功能特性、分组规格表、评价、FAQ 和实时配置摘要。加入购物车会打开一个抽屉，内含精确配置的快照。

- 受众：[AUDIENCE]，他们希望确切看到自己购买的产品，并在支付 [BASE_PRICE] 或更高价格之前将其个性化。
- 目标：让访客配置一副耳机并将其加入购物车，同时通过爆炸视图和规格表证明做工品质与可维修性。
- 语调：平静、精确、务实，如同一个标注清晰的工坊。短句、真实数字、不用最高级形容词；技术标签使用等宽字体，评价中流露温度。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react@18 + react-dom@18（MIT）、three@0.169.0（MIT）、@react-three/fiber@8.17（v8 系列，React 18）（MIT）、@react-three/drei@9.121（Environment、Lightformer、ContactShadows、Html、Line、RoundedBox）（MIT）、gsap@3.12+ 搭配 ScrollTrigger（GSAP Standard License（免费，允许商业使用））、zustand@4.5（MIT）、lucide-react（ISC）、tailwindcss@3.4 + postcss + autoprefixer（MIT）、vite@5 + @vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/bricolage-grotesque（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）、@fontsource/instrument-serif（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化设置（Setup）：
  - 使用 npm create vite@latest 并选择 react-ts 模板来搭建脚手架。单页面：项目根目录的 index.html，入口为 src/main.tsx。<title> 为 '[PRODUCT_NAME] by [BRAND] — Configure yours'。Favicon：public/favicon.svg，一个 32×32 的 SVG，内容为 #17181B 填充圆，内嵌一个 3px 的 #F3F1EC 圆环，内缩 7px（无字母、无 logo）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0, chunkSizeWarningLimit 1600 }。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中扩展 colors，将每个 Design 颜色以 kebab-case 形式加入（paper、stage、stage-edge、surface、surface-2、ink、muted、line、line-strong、footer、footer-text），外加 accent: 'rgb(var(--accent) / <alpha-value>)'。fontFamily display ['Bricolage Grotesque Variable', 'system-ui', 'sans-serif']，sans ['Inter Variable', 'system-ui', 'sans-serif']，mono ['JetBrains Mono', 'ui-monospace', 'monospace']，serif ['Instrument Serif', 'Georgia', 'serif']。maxWidth container '1200px'。
  - src/index.css：@tailwind base/components/utilities；:root { --accent: 53 87 212; }（Graphite 强调色，以空格分隔的 RGB 表示）；body bg #F3F1EC，color #17181B，font Inter，-webkit-font-smoothing antialiased；.tabular { font-variant-numeric: tabular-nums } ；drag-hint 和 scroll-cue 关键帧放在这里；一个 @media (prefers-reduced-motion: reduce) 块会禁用它们。
  - src/fonts.ts 导入 '@fontsource-variable/bricolage-grotesque'、'@fontsource-variable/inter'、'@fontsource/jetbrains-mono/400.css'、'@fontsource/jetbrains-mono/500.css'、'@fontsource/instrument-serif/400.css' 和 '@fontsource/instrument-serif/400-italic.css'；在 src/main.tsx 中最先导入它。
  - 文件布局（File layout）：src/content.ts（所有字符串、选项、价格增量、规格行、部件标签、评价、FAQ 条目和页脚信息，均带类型），src/lib/brand.ts（brandSlug = [BRAND] 转为小写，非字母数字字符替换为 '-'；email = 'care@' + 去掉连字符的 brandSlug + '.com'；basePrice = 将 [BASE_PRICE] 的数字解析为数字），src/lib/price.ts（根据配置计算总价和行项目），src/lib/useReducedMotion.ts（matchMedia hook），src/store/config.ts，src/store/cart.ts，src/store/scene.ts，src/three/（Headphones.tsx、parts/*.tsx、materials.ts、engravingTexture.ts、knitTexture.ts、StageCanvas.tsx、Labels.tsx、useDragRotate.ts），src/components/（Header、Stage、ConfiguratorPanel、PriceOdometer、FeatureStrip、Specs、Reviews、Faq、BuildBand、Footer、CartDrawer、MobileBuyBar）。
  - 使用 zustand 管理状态：config store { colorId: 'graphite', cushionId: 'leather', engraving: 'For long nights', engraveStyle: 'serif', setters }；cart store { items: CartItem[], open: boolean, add(config, thumbnail), setQty(id, n), remove(id), openDrawer(), closeDrawer() }，其中添加相同配置（相同颜色、坐垫、雕刻文本和样式）时增加数量而不是新增一行；scene store { phase: 'configure' | 'inside' | 'after', setPhase }，仅在 phase 变化时写入。滚动进度 p 和爆炸值 e 不是 React 状态：将它们保存在 src/store/scene.ts 中的可变模块对象 sceneRef = { p: 0, e: 0 } 中，由 ScrollTrigger 写入、useFrame 读取。
  - 在 src/main.tsx 中注册一次 ScrollTrigger（gsap.registerPlugin(ScrollTrigger)）。在字体加载完成后（document.fonts.ready）和窗口尺寸变化时调用 ScrollTrigger.refresh()；在卸载时终止所有触发器。
  - Canvas：<Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }} camera={{ fov: 32, position: [0, 0.15, 6.2], near: 0.1, far: 50 }} onCreated 设置 gl.toneMapping = ACESFilmicToneMapping，toneMappingExposure 1.0，outputColorSpace SRGBColorSpace>。画布透明；背景由 CSS 实现。通过一个小型 ref 模块（src/three/glRef.ts）将 gl、scene 和 camera 暴露给 Add to cart 处理函数，以便在 Canvas 树之外拍摄快照。
  - 绝不使用 drei 的 Environment 预设或文件（它们会从 CDN 下载）。光照仅使用 Lightformer 灯光组和 Design imagery 下描述的两盏灯。
  - package.json scripts：dev 'vite'，build 'tsc -b && vite build'，preview 'vite preview'。

## 变量
- [BRAND] — 品牌名称（默认："Orvane"）。虚构的音频品牌。用于页眉字标、<title>、页脚、支持邮箱（care@ + 不含连字符的 brandSlug + .com）以及购物车行。绝不是真实存在的耳机或电子品牌。
- [PRODUCT_NAME] — 产品名称（默认："Tern"）。简短的虚构型号名，一到两个词。它是舞台区巨大的 H1，并出现在价格摘要、购物车行、部件示意图标题和构建带中。不得使用真实型号名。
- [PRODUCT_TYPE] — 产品类型（默认："wireless over-ear headphones"）。小写名词短语。驱动舞台区眉题、画布 aria-label 和规格强调。3D 模型始终是头戴式耳机，因此请保持其为某种头戴式耳机（studio、gaming、kids、travel、DJ）。
- [BASE_PRICE] — 基础价格（默认："$329"）。美元，带 $ 符号，整数。作为基础价格解析；选项加价（+$20 饰面、+$15 / +$25 耳垫、+$15 刻字）在此基础上叠加。仅当加价看起来比例失调时才重写。
- [AUDIENCE] — 目标受众（默认："people who wear headphones for hours: editors, night-shift workers and remote developers"）。塑造舞台区副标题、功能强调、三位评测者和 FAQ 答案。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接指向 https://vibefather.ai/t/3d-product-configurator-page（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/3d-product-configurator-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
