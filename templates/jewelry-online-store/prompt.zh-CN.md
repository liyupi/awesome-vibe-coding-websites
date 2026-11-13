> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 珠宝在线商店

完全按照以下描述构建此网站。将 [VARIABLES] 替换为您自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个完整的四页高级珠宝店面，[BRAND] 是位于 [CITY] 的一家虚构独立工作室，展示 [MATERIAL] 材质的 [COLLECTION] 系列。页面包括：index.html、shop.html、product.html?p=<slug>（无查询参数打开时显示第一个产品）以及 checkout.html。包含金属与宝石组合筛选、排序、产品图库、戒指尺寸、刻字、礼品包装与留言、常驻购物车抽屉，以及三步模拟结账。订单满 $[SHIP_FREE] 享受免费配送。一切均在浏览器中运行；不会传输任何支付、订单或电子邮件信息。

- 受众：独立珠宝工作室和以设计为主导的小型零售商，以及希望在决定购买一份用心挑选的礼物或个人纪念品之前，清楚了解材质、尺寸、个性化和配送信息的购物者。
- 目标：让一个小型系列显得真实可感且值得信赖，帮助访客在无需四处查找信息的情况下配置一件作品，并提供从发现到模拟确认的完整静态购物旅程。
- 语气：亲密、精确且自信。使用简洁的感官语言和具体的产品事实，而非最高级形容词、紧迫感或泛泛的奢华陈词滥调。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/cormorant-garamond（OFL-1.1）、@fontsource/manrope（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 npm create vite@latest 以 react-ts 模板搭建脚手架。在项目根目录创建四个真实的 HTML 入口页面：index.html（src/main-home.tsx）、shop.html（src/main-shop.tsx）、product.html（src/main-product.tsx）和 checkout.html（src/main-checkout.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist'，sourcemap false，assetsInlineLimit 0，rollupOptions { input { index: resolve(__dirname, 'index.html')，shop: resolve(__dirname, 'shop.html')，product: resolve(__dirname, 'product.html')，checkout: resolve(__dirname, 'checkout.html') } } }。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4，content 为 ['./index.html', './shop.html', './product.html', './checkout.html', './src/**/*.{ts,tsx}']。将每个 Design 颜色以 kebab-case 键添加到 theme.extend.colors 中；fontFamily display 为 ['Cormorant Garamond', 'Georgia', 'serif']，sans 为 ['Manrope', 'system-ui', 'sans-serif']；maxWidth container 为 1360px。
  - 在 src/fonts.ts 中导入 @fontsource/cormorant-garamond/400.css、/500.css 和 /600.css，以及 @fontsource/manrope/400.css、/500.css、/600.css 和 /700.css。从所有四个入口导入 src/fonts.ts 和 src/index.css。
  - 将所有字符串、价格、产品、变体、筛选器、政策、图片路径和结账标签集中到带类型的 src/content.ts 中。添加 src/lib/brand.ts，通过将 [BRAND] 转为小写并将连续的非字母数字字符替换为连字符来派生 brandSlug，并通过移除连字符并追加 '.com' 来派生 emailDomain。在 src/lib/storage.ts 中添加安全的 localStorage 辅助函数，其键以 brandSlug 为前缀。
  - src/lib/product.ts 读取 product.html?p=<slug>，并返回匹配的产品；对于缺失或未知的 slug，返回第一个产品，绝不返回未找到状态。src/lib/price.ts 集中处理基础价格、雕刻（+$25）、礼品包装（每行 +$8）、数量、商品小计、运费（低于 $[SHIP_FREE] 时为 $12，否则为 $0）以及总计计算。
  - 在 src/store/cart.ts 中使用 useSyncExternalStore 实现一个微型外部购物车存储。一行存储产品 slug、变体、尺寸、雕刻、礼品包装、礼品留言、数量和复合键。暴露 addLine、setQuantity（1–6）、removeLine、clearCart、openCart 和 closeCart；将行持久化到 brandSlug + ':cart' 下，并在每个 HTML 页面上安全地重新水合。
  - 组件：AnnouncementBar、Header、MobileMenu、Footer、CartButton、CartDrawer、ProductCard、Reveal、Newsletter、Hero、FeaturedPieces、MaterialStory、GiftPanel；shop 的 FilterBar 和 ProductGrid；product 的 Gallery、VariantPicker、RingSizeDialog、EngravingField、GiftOptions、PurchasePanel、ProductAccordions 和 RelatedPieces；checkout 的 CheckoutSteps、DetailsForm、DeliveryForm、ReviewOrder 和 MockConfirmation。每个页面都渲染共享的公告栏、页头、购物车抽屉和页脚。
  - 在首次构建之前，使用 curl -L -o 将 Assets 下列出的每张图片下载到 public/images/ 中，并使用确切的文件名。运行时代码和构建过程绝不获取远程资源。
  - 按 Assets 中所述创建 public/favicon.svg。所有 HTML 文件使用 lang='en'、<meta name='theme-color' content='#F4EFE6'> 和本地 favicon 链接。标题：首页为 '[BRAND] — [COLLECTION]'，商店页为 'The collection — [BRAND]'，产品页为 'Shop — [BRAND]'（加载时替换为产品名称），结账页为 'Checkout — [BRAND]'。
  - 在项目根目录完全按 Assets 中所述编写 ASSETS.md。保持 dist/ 在 20 MB 以下，包含带哈希的本地 JS/CSS、woff2 字体、四个 HTML 文件、favicon 和六张图片。

## 变量
- [BRAND] — 珠宝品牌（默认："Aurel & Vale"）。虚构的工作室名称，用于文字标识、标题、页脚、派生邮箱域名和 localStorage 键。切勿使用真实珠宝品牌或零售商。
- [CITY] — 工作室所在城市（默认："Portland, Oregon"）。用于工作室故事、配送文案和页脚。城市可以真实；街道地址和业务信息仍为虚构。
- [COLLECTION] — 系列名称（默认："Still Light"）。两到三个词，用于主视觉眉题、精选单品介绍和文档标题。
- [MATERIAL] — 材质故事（默认："Recycled gold and white sapphire"）。该系列的主要材质与宝石故事。驱动主视觉、材质故事、产品和保养文案，同时保持相同布局。
- [SHIP_FREE] — 免运费门槛（默认："150"）。仅数字。驱动公告、购物车运费计算、进度提示和结账复核。保持在 100 到 300 之间。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/jewelry-online-store（默认：是；删除此行即可移除）

页面与区块下的文案按默认值撰写。如果你的取值不同，请为它们重写每个标题、段落、标签和图片——保持相同长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/jewelry-online-store?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
