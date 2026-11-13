> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 时尚在线商店（Fashion Online Store）

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的四页式店铺，这是一个小型时装品牌，在 [CITY] 用 [MATERIAL] 制作服装，满 $[SHIP_FREE] 免运费。它必须像一家真实的店铺那样运作：一个活动首页、一个带筛选和排序的系列网格、带款式选项的产品页、尺码指南和数量选择、一个关于页面、一个带免运费进度条的购物车抽屉，以及一个模拟结账（配送表单 → 复核 → 下单完成），该结账明确为演示性质且完全在客户端运行。页面：index.html、shop.html、product.html?p=<slug>（无查询参数打开时显示第一个产品）、about.html。购物车通过 localStorage 持久保存。任何地方都不会提交或扣款。

- 受众：安静时尚新闻信的读者，28–50 岁，购买更少但更好的衣物。他们先看面料，再看价格，并且会放弃那些让他们费力寻找尺码信息或运费信息的店铺。
- 目标：销售服装并建立邮件列表。访客应在十秒内感受到品牌的美学并看到新品；在两分钟内他们应已选好款式并看到免运费进度条移动。
- 语气：平静而具体，像一张好的服装标签。短句，具体的面料和护理事实，不用炒作性形容词，不用感叹号。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/playfair-display（OFL-1.1）、@fontsource-variable/figtree（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化设置（Setup）：
  - 使用 react-ts 模板通过 npm create vite@latest 搭建脚手架。项目根目录下放置四个真实的 HTML 页面：index.html（入口 src/main-home.tsx）、shop.html（src/main-shop.tsx）、product.html（src/main-product.tsx）和 about.html（src/main-about.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist'，sourcemap false，assetsInlineLimit 0，rollupOptions { input { index: resolve(__dirname, 'index.html')，shop: resolve(__dirname, 'shop.html')，product: resolve(__dirname, 'product.html')，about: resolve(__dirname, 'about.html') } } }。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4（tailwindcss + postcss + autoprefixer），content ['./index.html', './shop.html', './product.html', './about.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的每种颜色以 kebab-case 键名添加到 theme.extend.colors 中（bone、warm-white、linen、card、ink、ink-soft、taupe、rule、ochre、ochre-deep、olive-gray），并设置 fontFamily display ['Playfair Display Variable', 'Georgia', 'serif']、sans ['Figtree Variable', 'system-ui', 'sans-serif']。将 borderRadius 的 DEFAULT 设为 2px——接近方形——并添加 maxWidth { container: '1280px' }。
  - 在 src/fonts.ts 中导入 '@fontsource-variable/playfair-display' 和 '@fontsource-variable/figtree'；从全部四个入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（所有字符串、数字、产品、款式、颜色、尺码、筛选条件、政策、材质说明行和图片路径，均带类型），src/lib/brand.ts（brandSlug = [BRAND] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 brandSlug + '.com'），src/lib/storage.ts（用 try/catch 包裹的安全 localStorage 读写，键名以 brandSlug + ':' 为前缀），src/lib/product.ts（读取查询参数 'product.html?p=<slug>'，返回匹配的产品或第一个产品——绝不返回未找到），src/lib/filters.ts（applyFilters + sortProducts，使用 content.ts 中的区间）。
  - 状态（State）：src/store/cart.ts 是一个小型外部 store（useSyncExternalStore），保存行项 { key: '<slug>|<color>|<size>', slug, color, size, qty } 以及抽屉打开状态和结账步骤，持久化到 localStorage 键 brandSlug + ':cart'。addToCart、setQty、removeLine、openCart、closeCart；每个页面都可以从页头打开抽屉。
  - src/components/ 中的组件：AnnouncementBar.tsx、Header.tsx、MobileMenu.tsx、CartButton.tsx（带数量徽标）、CartDrawer.tsx（LineRow.tsx、FreeShipBar.tsx）、Checkout.tsx（ShippingForm.tsx、Review.tsx、Placed.tsx）、ProductCard.tsx（悬停切换图片、颜色圆点）、Reveal.tsx、Eyebrow.tsx、Newsletter.tsx、Footer.tsx；首页（home）：Hero.tsx、NewArrivals.tsx、MaterialsStrip.tsx、EditorialBand.tsx；商店页（shop）：ShopMasthead.tsx、FilterBar.tsx（chips + SortSelect）、Grid.tsx；产品页（product）：Gallery.tsx、VariantPicker.tsx（ColorSwatches、SizePicker）、QtyStepper.tsx、SizeGuide.tsx（带绘制表格的手风琴）、AddToCart.tsx、CareFacts.tsx、Related.tsx；关于页（about）：Story.tsx、Process.tsx、ContactBlock.tsx。src/pages/Home.tsx、Shop.tsx、Product.tsx、About.tsx 组合它们；每个页面都渲染 AnnouncementBar、Header、CartDrawer 和 Footer。
  - 在首次构建之前，使用 curl -L -o 并按照给定的确切文件名，将资源（Assets）下列出的每张图片下载到 public/images/ 中。构建本身从不获取任何内容。
  - public/favicon.svg 如资源（Assets）中所述。全部四个 HTML 文件：lang en，<meta name='theme-color' content='#FAF7F1'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>。标题：index.html '<title>[BRAND] — [MATERIAL] made in [CITY]</title>'，shop.html '<title>Shop all — [BRAND]</title>'，product.html '<title>Shop — [BRAND]</title>'（产品页在加载时将 document.title 设置为产品名称），about.html '<title>About — [BRAND]</title>'。
  - 如资源（Assets）中所述，在项目根目录写入 ASSETS.md。
  - dist/ 包含四个 HTML 文件、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张图片。保持在 12 MB 以下。

## 变量
- [BRAND] — 标签名称（默认：“Fold and Grain”）。虚构的时尚品牌名称。用于字标、标题、公告栏、页脚、电子邮件（hello@ + 不含连字符的 brandSlug + .com）以及 localStorage 键。绝不是真实品牌或零售商。
- [CITY] — 工作室所在城市（默认：“Lisbon, Portugal”）。品牌工作的地方。用于关于故事、制造地信息和页脚。真实城市可以；工作室街道保持虚构。
- [MATERIAL] — 材料（默认：“Linen and merino”）。品牌所依托的两种面料，标题大小写（'Linen and merino'、'Organic cotton and denim'）。驱动首页材料条、产品面料行、关于故事和护理文案。保持恰好两种材料。
- [SHIP_FREE] — 免运费门槛（默认：“200”）。免运费阈值的数字形式。驱动公告栏、购物车抽屉的进度条计算和结账审核行。保持在 100–300。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接到 https://vibefather.ai/t/fashion-online-store（默认：是；删除此行以移除它）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图像——保持相同的长度、语气和结构。布局、颜色、字体和动效保持如所述。
将所有文案、图像路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块键控，以便以后可以在不触及组件的情况下替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/fashion-online-store?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
