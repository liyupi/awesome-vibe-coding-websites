> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 家具店产品目录

完全按照以下描述构建此网站。将 [VARIABLES] 替换为您自己的值；其余内容保持不变。

## 简介
为 [STORE] 制作一个两页的目录，[STORE] 是位于 [CITY] 的一家家具店兼工坊——[CRAFT_NOTE]、[DELIVERY_NOTE]。它必须让人感觉像一间展厅：房间导航、材质筛选、带有绘制尺寸图和色板的产品页面、购物袋抽屉、工艺条带和门店定位器。页面：index.html、product.html?p=<slug>（第一个产品不带参数）。一切都在浏览器中运行；不会向任何地方提交内容。

- 受众：28–45 岁的首次购房者，以及会把自家走廊量上两遍的升级换房者。他们想要可信的尺寸、明确标注的材质，以及不带星号附加条件的配送条款。
- 目标：让访客装满购物袋，并把他们带到展厅。访客要在十秒内看到一个布置好的房间和房间导航；在两分钟内打开一个产品页面，并用卷尺核对尺寸图。
- 语气：工坊式的朴实：精确到毫米、诚实的材质、温和的自豪感。关于说明书可以有一个玩笑。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（MIT）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/zilla-slab（OFL-1.1）、@fontsource-variable/archivo（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 react-ts 模板通过 npm create vite@latest 搭建脚手架。项目根目录下有两个真实的 HTML 页面：index.html（入口 src/main-index.tsx）和 product.html（入口 src/main-product.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist'，sourcemap false，assetsInlineLimit 0，rollupOptions { input { index: resolve(__dirname, 'index.html')，product: resolve(__dirname, 'product.html') } } }。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './product.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将 Design 下的每种颜色添加到 theme.extend.colors 中，使用 kebab-case 键名（gallerywhite、linen、card、walnut、walnut-deep、walnut-mist、ink、slategray、slate-blue、rule、good），并设置 fontFamily display ['Zilla Slab', 'Georgia', 'serif']、sans ['Archivo Variable', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 6px，并添加 maxWidth { container: '1240px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/zilla-slab/400.css'、'@fontsource/zilla-slab/600.css' 和 '@fontsource-variable/archivo'；从两个入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（所有字符串、产品、尺寸、饰面、展厅、营业时间和图片路径，带类型），src/lib/brand.ts（storeSlug = [STORE] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 storeSlug + '.com'，phoneDigits 用于 tel:），src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键前缀为 storeSlug + ':'），src/lib/product.ts（读取 ?p=<slug>，返回该产品或第一个产品——绝不返回未找到），src/lib/filters.ts（applyFilters(products, { room, material })）。
  - 状态：src/store/bag.ts 是一个小型外部 store（useSyncExternalStore），保存条目 { slug, finish, qty } 以及抽屉打开状态，持久化到 localStorage 键 storeSlug + ':bag'。
  - src/components/ 中的组件：Header.tsx（含 BagButton）、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、Footer.tsx、BagDrawer.tsx（LineRow.tsx）；index：Hero.tsx、RoomNav.tsx、FilterBar.tsx（RoomChips.tsx、MaterialChips.tsx）、ProductGrid.tsx（ProductCard.tsx）、CraftStrip.tsx、Locator.tsx（ShowroomCard.tsx）；product：ProductHero.tsx（Gallery.tsx、SwatchPicker.tsx）、DimensionsDiagram.tsx（内联 SVG，带尺寸标注）、Details.tsx（Materials.tsx、Care.tsx、Delivery.tsx）、Related.tsx。src/pages/Home.tsx 和 Product.tsx 组合它们。
  - DimensionsDiagram 是手工编写的内联 SVG：按比例绘制的该家具的正立面和侧立面（绘制的几何图形，而非照片），带箭头和毫米标签的尺寸标注线（无 Fraunces：Archivo 表格数字），一个小比例尺。饰面色板会交叉淡化立面的木材填充。
  - 在首次构建之前，使用 curl -L -o 并按照给定的确切文件名，将 Assets 下列出的每张图片下载到 public/images/ 中。构建本身从不获取任何内容。
  - public/favicon.svg 如 Assets 所述。两个 HTML 文件：lang en，<meta name='theme-color' content='#FAF8F4'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>。标题：index.html '<title>[STORE] — Furniture made in [CITY]</title>'，product.html '<title>Catalog — [STORE]</title>'（产品页面在加载时设置 document.title）。
  - 在项目根目录编写 ASSETS.md，如 Assets 所述。
  - dist/ 包含两个 HTML 文件、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张图片。保持在 10 MB 以下。

## 变量
- [STORE] — 店铺名称（默认："Oakline & Co"）。虚构的店铺名称。用于字标、标题、页脚、电子邮件（hello@ + 不含连字符的 storeSlug + '.com'）以及 localStorage 键。绝不使用真实零售商。
- [CITY] — 城市（默认："Denver, Colorado"）。店铺和工坊所在地。用于标题、主视觉区、门店定位器和页脚。可以使用真实城市；展厅街道为虚构。
- [CRAFT_NOTE] — 工艺说明（默认："mortise-and-tenon, no shortcuts"）。一个描述榫卯结构或工艺理念的小写短语。驱动主视觉区文案和工艺展示条。保持工坊真实感。
- [DELIVERY_NOTE] — 配送说明（默认："two-person delivery included"）。一个关于配送条款的小写短语。用于产品页面和门店定位器。保持简洁且听起来大方。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/furniture-store-catalog（默认：是；删除此行即可移除）

页面与区块下的文案按默认值撰写。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 画廊白（Gallery White）`#FAF8F4` — 两个页面的页面背景。
- 亚麻色（Linen）`#F0EBE0` — 交替区块背景（Craft、Locator）、标签片、悬停填充。
- 卡片白（Card）`#FFFFFF` — 产品卡片、购物袋抽屉、色板面板。
- 胡桃木色（Walnut）`#5B4231` — 主色：标题强调、主按钮、选中标签片、焦点环。
- 深胡桃木色（Walnut Deep）`#402E21` — 悬停与按下状态、页脚背景。
- 胡桃木雾色（Walnut Mist）`#EAE1D5` — 选中标签片填充、图标底槽、示意图木纹填充基底。
- 墨色（Ink）`#2C2925` — 标题与正文墨色、图标颜色。
- 石板灰（Slate Gray）`#6B655B` — 次要文本、说明文字、眉题、尺寸标注。
- 石板蓝（Slate Blue）`#4A6B7C` — 唯一的冷色点缀：尺寸箭头与标注、色板选中环、购物袋徽标、focus-visible 附加样式。
- 分隔线（Rule）`#E2DBCC` — 1px 细线、卡片边框、输入框边框、网格线。
- 良好绿（Good）`#5E7D4E` — 有货勾选标记、购物袋对勾、展厅营业圆点。

### 字体排印（Typography）
- 展示字体：H1、H2、H3、产品名称、价格、字标 — Zilla Slab，工坊衬线体：Zilla Slab（OFL），字重 400/600
- 文本与界面：正文、眉题、按钮、表单、说明文字、尺寸标注；尺寸与价格使用等宽数字：Archivo（OFL），字重 400/500/600

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。容器最大宽度 1240px，居中，侧边内边距桌面端 48px，平板端 32px，640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面端 100px，1024px 以下 76%，640px 以下 60px。字号阶梯：H1 clamp(42px, 6.2vw, 78px) Zilla 600，行高 1.05；H2 clamp(28px, 3.8vw, 44px) Zilla 600；产品名称 Zilla 600 22px；价格 Zilla 600 24px Walnut 等宽数字；导语 Archivo 400 17.5px / 1.65 Ink 88%；正文 15.5px / 1.7（最大宽度 62ch）；眉题 Archivo 600 12px 大写 字距 0.16em Slate Gray；说明文字 13px Slate Gray。按钮：高度 50px，Archivo 600 14px。主按钮：Walnut 填充，Card 文字。次按钮：1px Ink 边框。输入框：高度 50px，1px Rule 边框，Card 填充，聚焦时 Walnut 边框。全局焦点环：2px Walnut 轮廓，偏移 3px。
- 圆角：卡片、按钮、输入框、标签片和照片均为 6px。仅胶囊、标签片和购物袋徽标使用 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现和画廊交叉淡入淡出；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于抽屉和色板切换。工坊般沉稳。
- 动效：显现：包裹在 <Reveal> 中的区块从 opacity 0、translateY(12px) 开始，在 15% 可见时（Motion whileInView，viewport once）以 750ms --ease-out 稳定下来。同级元素错开 70ms。
- 动效：首屏：房间照片从 1.03→1.0 缩放，历时 2200ms；H1 上升；眉题下方的一条尺寸线细节绘制一次。
- 动效：网格筛选：卡片使用 Motion layout popLayout（200ms 退出 / 380ms 滑行）；实时计数交叉淡入淡出；空状态：'Nothing in that combination — the catalogue grows quarterly.'
- 动效：产品卡片：悬停上浮 3px，材质标签片填充 Walnut。
- 动效：产品画廊：缩略图以 240ms 交叉淡入淡出切换主图。
- 动效：DimensionsDiagram：立面图在进入视图时绘制（stroke-dashoffset）；尺寸箭头和标注最后淡入；色板切换时木纹填充交叉淡入淡出（Slate Blue 环标记所选饰面）。
- 动效：购物袋：添加时徽标弹跳 1→1.3→1；抽屉从右侧滑入 420ms --ease-out；数量变化时小计在 300ms 内计数；结账存根以绘制的 Slate Blue 'ORDER LIST' 印章确认；持久化。
- 动效：链接：.link-draw 在悬停和 focus-visible 时以 280ms 生长出 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 无缩放、绘制、计数或滑行；一切静止；颜色/边框悬停保留。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：真实风格房间摄影，全部六张为本模板以统一风格制作：画廊白墙面、胡桃木与橡木家具、石板蓝点缀、柔和日光 — 家具是主角。绝不出现人物，绝不出现可辨认的设计师剪影。无可读文字或标志。每张照片使用 object-fit cover，object-position 见 Assets 下说明，6px 圆角，无阴影；Gallery White 上的照片加 1px Rule 轮廓。说明文字使用 Archivo 13px Slate Gray。代码绘制：favicon、房间导航图标、尺寸示意图立面图、色板标签片和印章。图标：仅使用 lucide-react，描边宽度 1.75。

## 页面与区块
### 目录页（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[STORE] = Oakline & Co，[CITY] = Denver, Colorado，[CRAFT_NOTE] = mortise-and-tenon, no shortcuts，[DELIVERY_NOTE] = two-person delivery included'）。将每个字符串和数字放入 src/content.ts 并从中渲染；两个页面共用一个内容文件。如果任何变量值不同，请重写主视觉区、全部八件产品及其尺寸/饰面、工艺条和门店定位器，使其对新商店具体且可信，同时保持相同的结构和数量（8 件产品、每件 3 种饰面、3 个展厅）。所有单品、尺寸和展厅均为虚构。产品（slug · 名称 · 房间 · 价格 · 尺寸 宽×深×高 mm · 饰面）：'harlow-sofa' Harlow Three-Seat Sofa living $2,190 2140×920×820 'oak/linen, oak/walnut leather, walnut/linen'；'mercer-dining-table' Mercer Dining Table dining $1,480 2000×950×750 'oak, walnut, smoked oak'；'June-bed' Juniper Bed Frame bedroom $1,690 queen 1640×2100×1050 'oak, walnut, ash'；'atlas-desk' Atlas Writing Desk office $980 1400×700×750 'oak, walnut, oak+steel'；'rook-bookshelf' Rook Open Bookshelf living $760 900×340×1800 'oak, walnut, ash'；'fell-bench' Fell Entry Bench living $420 1200×380×450 'oak, walnut, smoked oak'；'wren-chair' Wren Spindle Chair dining $540 520×560×820 'oak, walnut, ash'；'lowry-sideboard' Lowry Sideboard dining $1,240 1600×450×800 'oak, walnut, smoked oak'。饰面在相关处带有价格增量（walnut +10%，smoked oak +8%，leather +15% — 示例）。展厅：'Foundry Row' '1420 Foundry Row, [CITY]' 'Mon–Sat 10–6' ；'Highland Yard' '88 Highland Yard' 'Tue–Sun 11–5'；'Workshop' 'By appointment, Sawyer Street' 'Thu–Fri 9–3'。工艺条：'Mortise & tenon joinery' '[CRAFT_NOTE], checked by hand'；'Solid wood only' 'oak, walnut and ash from managed forests (sample)'；'Delivered assembled' '[DELIVERY_NOTE], packaging taken away'；'30-day returns' 'unworn, no questions worth asking'。
   布局：不适用
   动效：不适用
2. **页头** — 左侧：字标 '[STORE]'（Zilla 600 20px），其下为 'Furniture made in [CITY]'（10px 大写 Slate Gray），链接至 ./index.html。右侧导航（Archivo 500 14px）：'Living' → #catalog，'Catalog' → #catalog，'Showrooms' → #showrooms；BagButton（lucide ShoppingBag + Slate Blue 徽标）。760px 以下：字标 + 购物袋。
   布局：吸顶，高度 70px，Gallery White/95% 模糊，Rule 边框。
3. **主视觉区** — 两栏。左侧：眉题 'WORKSHOP · SHOWROOM · [CITY]'；H1 'Built for the second decade.' / '*Not the first flat-pack.*' 导语（最大宽度 480px）：'[STORE] makes solid-wood furniture with [CRAFT_NOTE]. [DELIVERY_NOTE], dimensions you can trust, and finishes you can feel before you buy.' 主按钮 'Browse the catalog' → #catalog，次按钮 'Visit a showroom' → #showrooms；信任行：'Solid wood'；'30-day returns'；'Assembled delivery'。右侧：room-living.webp（4:3），配文 'The Harlow, in oak and linen'。
   布局：Gallery White 背景，顶部垂直内边距 104px；左侧 6 列，右侧 5 列偏移 1。
4. **目录** — 区块 id='catalog'。眉题 'THE CATALOG'，H2 'EIGHT PIECES, FOUR ROOMS.' FilterBar：RoomChips（All / Living / Dining / Bedroom / Office）和 MaterialChips（All / Oak / Walnut / Linen / Leather），带实时计数；ProductGrid 含八张卡片（照片 4:3、房间标签、名称、材质行、价格），链接至 ./product.html?p=<slug>。
   布局：Gallery White 背景。4x2 网格，20px 间距（1000px 以下为 2 列）；滚动时筛选标签吸顶于页头下方。
5. **工艺条与门店定位器** — CraftStrip 位于 Linen 上：来自名册的四张勾选卡片。区块 id='showrooms'。眉题 'SHOWROOMS'，H2 'THREE PLACES TO SIT DOWN.' ShowroomCards（名称、地址、营业时间、根据营业时间计算出的展厅一开放圆点）：名册。页脚（Walnut Deep，骨白文字）：字标、'Furniture made in [CITY]'、'hello@ + emailDomain'；底行 '© [STORE]. Dimensions are millimetres; the opinions are ours.'
   布局：工艺条四列带勾选标记；定位器三列，24px 间距；页脚三部分。

### 产品页（`product.html`）
1. **产品主视觉区** — 读取 ?p=<slug>；无查询参数时完整渲染第一件产品（harlow-sofa）（标题在加载时设置）。两栏：左侧为图库（主图按饰面从图集中选取，缩略图：房间照片 + detail-joinery.webp + detail-swatch.webp）；右侧：房间标签、名称（Zilla 26px）、价格（随饰面更新，等宽数字）、SwatchPicker（三种饰面，带木材/皮革圆点；walnut +10%，leather +15% — 示例）、'Add to bag' 主按钮、库存勾选 'In stock — 2–3 weeks, [DELIVERY_NOTE]'。
   布局：Gallery White 背景；图库 7 列，面板 4 列偏移 1 吸顶；900px 以下堆叠。
2. **尺寸与详情** — DimensionsDiagram：正面 + 侧面立面 SVG，比例 1:20，尺寸箭头（宽/深/高）配等宽毫米标签和比例尺；配文 'Drawn to scale; bring your tape measure, we''ll wait.' Details 区块：Materials（实木、饰面说明）、Care（每年上油两次，鼓励使用杯垫）、Delivery（'[DELIVERY_NOTE]; packaging taken away; stairs discussed honestly'）。相关推荐：'Pairs well with' — 三张同房间的 ProductCard。
   布局：图示 6 列，详情 5 列偏移 1；相关推荐全宽，顶部细线分隔，位于下方。

## 资源

- 图片：为本设计制作的模板照片（可随模板自由再分发）。用 curl -L -o 将每个文件下载到 public/images/：https://media.vibefather.ai/assets/04e26008-475c-4685-a1f4-983162a57c7e/room-living.webp → public/images/room-living.webp（Hero、Harlow 卡片 + 画廊；object-position 50% 55%；alt 'A linen sofa and oak shelf in a gallery-white living room'）；https://media.vibefather.ai/assets/04e26008-475c-4685-a1f4-983162a57c7e/room-dining.webp → public/images/room-dining.webp（Dining 卡片 + 画廊；alt 'An oak dining table with spindle chairs'）；https://media.vibefather.ai/assets/04e26008-475c-4685-a1f4-983162a57c7e/room-bedroom.webp → public/images/room-bedroom.webp（Juniper Bed 卡片 + 画廊；alt 'A walnut bed frame in soft morning light'）；https://media.vibefather.ai/assets/04e26008-475c-4685-a1f4-983162a57c7e/detail-joinery.webp → public/images/detail-joinery.webp（所有画廊；alt 'Close-up of mortise-and-tenon joinery in oak'）；https://media.vibefather.ai/assets/04e26008-475c-4685-a1f4-983162a57c7e/detail-swatch.webp → public/images/detail-swatch.webp（所有画廊；alt 'Oak, walnut and ash wood samples fanned on linen'）；https://media.vibefather.ai/assets/04e26008-475c-4685-a1f4-983162a57c7e/room-office.webp → public/images/room-office.webp（Atlas desk 卡片 + 画廊；alt 'An oak writing desk against a slate-blue wall'）。共六个文件。Office/bench/bookshelf/sideboard/chair 卡片复用房间照片，采用不同的裁剪和 object-position。

- 图片：在项目根目录写入 ASSETS.md，包含一个表格：path、source URL、author、license —— 每张照片一行（source 'media.vibefather.ai, made for this template'，author 'VibeFather'，license 'Distributed with the template'），另加 @fontsource/zilla-slab 和 @fontsource-variable/archivo（OFL-1.1）以及 lucide-react（ISC）的行。任何照片中都没有人物；所有家具设计均为原创，没有可辨认的设计师轮廓。

- 图标：仅使用 lucide-react：ShoppingBag、Ruler、Truck、Leaf、Check、ArrowRight、MapPin、Clock。描边宽度 1.75，16–24px，颜色继承。房间图标、尺寸箭头、色板圆点、ORDER LIST 印章和 favicon 均为绘制的 SVG。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的正方形填充 #5B4231，一个 Card（#FFFFFF）榫卯字形（两个互锁的带缺口矩形）。没有其他标志：店名始终以文字排版呈现。

- 字体：安装 @fontsource/zilla-slab 和 @fontsource-variable/archivo，并在 src/fonts.ts 中按 Setup 所列导入它们。Vite 会将 woff2 文件打包到 dist/ 中。

- 图片：在代码中绘制：尺寸图（1:20 的正立面和侧立面、带表格标签的尺寸箭头、比例尺）、房间图标、色板芯片和 favicon。除六张照片外没有其他位图；没有插图；没有地图瓦片。

## 禁止事项
- 无后端、无表单提交、无 API 请求、无支付：购物袋及其结账占位仅在浏览器中保存（localStorage）并明确说明这一点；tel: 链接由电话号码数字构建。
- 每个内部链接都指向文件名（./index.html、./index.html#catalog、./product.html?p=mercer-dining-table）——绝不指向裸目录；不带查询参数的 product.html 显示第一个产品，绝不报错。
- 不使用真实家具品牌或零售商；不使用可识别的设计师座椅轮廓或标志性造型；所有产品均为原创几何造型，名称虚构；尺寸为虚构的示例规格。
- 一切自托管：字体通过 Fontsource，图标以 npm 包或内联 SVG 形式引入，图片下载到 public/images/。不使用 CDN 的 <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具。
- 生产构建：压缩、无 source map、不将 src/ 复制到 dist/、单条命令 npm run build、输出在 dist/ 下且小于 10 MB。
- 任何照片中不出现人物或面孔；展厅和街道均为虚构；不使用真实地图瓦片。
- 任何地方不出现日期或年份；网站从不显示今天的日期。
- 除可选的页脚署名链接外，网站内绝不提及 VibeFather 或任何其他品牌；所有文案均为虚构的美式英语。
- 尊重 prefers-reduced-motion：无缩放、绘制、计数或滑动动画；一切处于静止状态；颜色/边框悬停效果保留。
- 网站必须在 1440x900 桌面端和 390x844 移动端正常工作，控制台零错误；筛选标签、色块和购物袋仅用键盘即可操作，并有可见的焦点环。
- 文案保持工坊式平实：不使用 lorem，不使用“heritage collection”；每个尺寸、饰面和工时都存放在 src/content.ts 中。

---
— Prompt by VibeFather · https://vibefather.ai/t/furniture-store-catalog · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
