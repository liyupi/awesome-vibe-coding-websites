> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 电商管理后台（E-commerce Admin Dashboard）

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个为 [SHOP] 打造的单页管理应用，[SHOP] 是一家销售 [NICHE] 的小型在线商店。侧边栏视图：概览（KPI、30 天营收图表、热销商品、最近订单）、订单（可筛选表格，带详情抽屉）、商品（列表 + 编辑表单）、库存（低库存提醒，可补货）。数据为虚构的示例内容，一次性写入 localStorage；一个 Reset demo data 按钮可将其恢复。单页，index.html；一切都在浏览器中运行。

- 受众：商店的业主兼运营者，在笔记本电脑上、打包单据之间查看数据。他们希望一眼看清当天的整体情况，并且每天要做的两个操作——修复库存、编辑商品——只需一次点击即可到达。
- 目标：让一家小商店显得运营良好。访客在十秒内看到营收、订单和唯一真正重要的提醒；在一分钟内打开一笔订单、修复库存并编辑一个商品。
- 语气：后台式的平静：精确的数字、简短的标签、没有激励性文案。空状态行里有一句冷幽默。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/instrument-sans（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化（Setup）：
  - 使用 react-ts 模板通过 npm create vite@latest 脚手架创建（如果最新模板面向更新的主版本，则固定版本），然后保留一个真实的 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist'，sourcemap false，assetsInlineLimit 0 }。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的每种颜色以 kebab-case 键添加到 theme.extend.colors（ground、panel、panel-2、line、ink、softink、indigo、indigo-deep、indigo-mist、mint、amber、ruby、slateink、good），并将 fontFamily sans 设为 ['Instrument Sans Variable', 'system-ui', 'sans-serif']，mono 设为 ['JetBrains Mono', 'ui-monospace', 'monospace']。将 borderRadius DEFAULT 设为 10px，并添加 maxWidth { shell: '1480px' }。
  - 在 src/fonts.ts 中导入 '@fontsource-variable/instrument-sans' 和 '@fontsource/jetbrains-mono/400.css' 以及 '500.css' 和 '600.css'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（存储事实、产品名册、订单名册、种子序列和每个标签，带类型），src/lib/brand.ts（shopSlug = [SHOP] 转为小写，并将每段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 shopSlug + '.com'，storageKey = shopSlug + ':admin'），src/lib/storage.ts（安全的 localStorage get/set，用 try/catch 包裹），src/lib/seed.ts（在首次运行或重置后从 content.ts 构建数据集 { products, orders, series }；products：{ id, name, sku, price, stock, status, 无 emoji 的字母组合图案 }，orders：{ id, customer, items: [{ productId, qty }], status, total, placed: 相对标签 }，series：30 个收入数据点），src/lib/money.ts（money(n) 使用 en-US，KPI 上不显示美分，订单上显示美分）。
  - 状态（State）：src/store/shop.ts 是一个小型外部 store（useSyncExternalStore），持有数据集以及 { view, orderQuery, statusFilter, editingId, toasts }；每次变更（编辑产品、补货、推进状态、重置）都会写入 storageKey 下的 localStorage 并发出通知。
  - 组件位于 src/components/：Shell.tsx（Sidebar.tsx 含 ViewButton.tsx，Topbar.tsx 含 SearchHint、ResetButton.tsx），Toasts.tsx（ToastRow.tsx），KpiCard.tsx（Delta.tsx），RevenueChart.tsx（内联 SVG：带渐变填充的面积路径，6 个 mono 日期标签的 x 轴，悬停十字准线带数值气泡），TopProducts.tsx（BarRow.tsx），RecentOrders.tsx；OrdersView.tsx（OrdersTable.tsx、StatusChip.tsx、OrderDrawer.tsx 含 LineItem.tsx 和 Timeline.tsx），ProductsView.tsx（ProductRow.tsx、ProductEditor.tsx 含 Field.tsx、MonogramTile.tsx），InventoryView.tsx（AlertRow.tsx 含 RestockStepper.tsx）。src/pages/App.tsx 组合它们。
  - RevenueChart：viewBox 640x220，路径来自 series，平滑（catmull-rom 转 bezier），indigo 渐变填充 18%；十字准线和数值气泡仅在桌面端跟随 pointermove；图表是装饰性信息，不是交互关键，因此在减少动态效果下保持静态。
  - OrderDrawer：从右侧滑入（宽度 420px，320ms --ease-io），焦点陷阱，Escape 关闭；行项目带字母组合图案；四步状态的 Timeline，当前步骤点亮；按钮推进状态（paid → packed → shipped）并发出 toast。
  - ProductEditor：内联在右侧面板（同样的抽屉模式）；字段 name、sku（mono，自动建议但可编辑）、price、stock、status 选择；内联验证（字段下方红色 Ruby 文本）；Save 发出 toast 并更新列表；New product 以空白开始并生成 sku。
  - 重置（Reset）：顶栏按钮打开一个小确认弹出框（'Reseed demo data? Your edits go away.'）——Reset 重新播种并 toast 'Demo data reseeded'。
  - public/favicon.svg 如资源（Assets）下所述。index.html：lang en，<meta name='theme-color' content='#F4F5F7'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[SHOP] — store admin</title>。
  - 在项目根目录编写 ASSETS.md，如资源（Assets）下所述。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体和 favicon.svg。保持在 4 MB 以下。

## 变量
- [SHOP] — 商店名称（默认：“Trailhead Supply”）。虚构商店的名称。用于字标、标题、页脚、电子邮件（orders@ + 不含连字符的 shopSlug + '.com'）以及 localStorage 键。绝非真实零售商。
- [NICHE] — 销售的商品（默认：“outdoor gear and trail kit”）。一个描述商品目录的小写短语。重写产品名称、SKU、概览文案和订单项，使其符合该商店。保持具体。
- [CREDIT] — 在页脚保留一个指向 https://vibefather.ai/t/e-commerce-admin-dashboard 的小型“Template by VibeFather”链接（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 底色（Ground）`#F4F5F7` — 应用背景。
- 面板（Panel）`#FFFFFF` — 卡片、表格、抽屉、侧边栏。
- 面板 2（Panel 2）`#F7F8FA` — 表头行、悬停填充、侧边栏页脚。
- 线条（Line）`#E3E5EA` — 1px 细线：边框、表格行、分隔线。
- 墨色（Ink）`#171A20` — 标题、正文、图标。
- 柔和墨色（Soft Ink）`#5F6570` — 次要文本、说明文字、坐标轴标签。
- 靛蓝（Indigo）`#4F46E5` — 唯一强调色：激活导航、链接、主按钮、图表线、焦点环、选中行。
- 深靛蓝（Indigo Deep）`#3B34B8` — 主按钮的悬停与按下状态。
- 靛蓝雾（Indigo Mist）`#EEEDFC` — 选中填充、标签背景、图表渐变基底。
- 薄荷绿（Mint）`#2F9E6E` — 正向增量、已付款/已打包/已发货标签、成功提示。
- 琥珀色（Amber）`#C77E1D` — 待处理标签、补货提示。
- 宝石红（Ruby）`#C24141` — 已退款标签、验证错误、逾期警报。
- 石板墨（Slate Ink）`#12131A` — 靛蓝填充上的文字。
- 良好（Good）`#2F9E6E` — 为成功语义保留的别名。

### 字体排印（Typography）
- 文本与展示：标题、标签、表格文本 — Instrument Sans，日常 grotesque 字体：Instrument Sans (OFL)，字重 400/500/600
- 等宽：金额、SKU、订单 ID、坐标轴标签 — 处处使用表格数字：JetBrains Mono (OFL)，字重 400/500

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。外壳：固定侧边栏 232px（可通过切换按钮折叠为 64px 图标栏，状态记忆在 localStorage 中），内容最大宽度 1480px，内边距 32px（900px 以下为 20px）。面板：内边距 20px，圆角 10px，1px 线条边框。视图标题行高 48px。表格行高 52px，单元格内边距 12px，等宽数字右对齐。字号体系：视图标题 24px 600；KPI 数字 JetBrains 600 28px 表格数字；表格与正文 14px / 1.5；说明文字 12.5px 柔和墨色；侧边栏项 14px 500，行高 36px。按钮：高度 38px，Instrument 600 13.5px；主按钮靛蓝填充配白色文字，幽灵按钮 1px 线条边框。输入框：高度 38px，面板填充，1px 线条边框，聚焦时靛蓝边框 + 2px 偏移环。全局焦点：2px 靛蓝轮廓，3px 偏移。
- 圆角：面板与抽屉 10px；按钮、输入框、标签 8px；状态标签与提示 999px。
- 动效：缓动：抽屉使用 --ease-io cubic-bezier(0.65, 0, 0.35, 1)；其余使用 --ease-out cubic-bezier(0.22, 0.61, 0.36, 1)。办公时段快速原则：任何动效不超过 320ms。
- 动效：视图切换：面板在 240ms 内淡入并上移 6px；侧边栏激活项即时切换 2px 靛蓝竖条。
- 动效：KPI 增量：箭头与 +/− 颜色立即设置；首次查看概览时数字在 500ms 内计数到目标值。
- 动效：RevenueChart：面积路径在视图出现时绘制一次（clip-path 揭示 700ms）；十字准星气泡跟随指针，无缓动延迟。
- 动效：订单表格：筛选变化时行以 140ms 淡入重排（无布局动画）；选中行保持靛蓝雾填充。
- 动效：OrderDrawer / 编辑器面板：以 320ms --ease-io 滑入，带左侧线条边框与柔和阴影；遮罩为 24% 墨色。
- 动效：提示：上移 8px 并在 180ms 内淡入，2.8s 后自动消失并带细进度条，退出淡出 160ms。
- 动效：补货步进器：数量变化时数字弹跳 1→1.15→1（120ms）；库存单元格闪烁薄荷绿一次。
- 动效：prefers-reduced-motion: reduce — 无计数、无图表揭示（直接最终状态）、无行淡入；抽屉仍滑动（属于导航，上限 150ms），或按 UA 偏好改为淡入。在 index.css 中使用 CSS @media，并结合 Motion 的 useReducedMotion。
- 图像：无照片、无徽标、无头像：产品渲染为 MonogramTiles（靛蓝雾底上的双字母方块，墨色首字母），订单带有客户首字母圆点，所有图表均为内联 SVG。图标：仅使用 lucide-react，描边宽度 1.75。favicon 为绘制的 SVG。

## 页面与区块
### 商店管理后台（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均针对默认值编写（[SHOP] = Trailhead Supply，[NICHE] = 户外装备与徒步用品）。将每个字符串、产品、订单、系列数据点和标签都放入 src/content.ts 并从中渲染。若任何变量不同，请重写商店简介、所有产品名称/SKU、订单条目和概览文案，使其针对该商店具体且可信，同时保持相同的结构和数量（8 个产品、12 个订单、4 个视图）。产品（名称 · sku · 价格 · 库存 · 状态）：'Ridgeline Daypack 28L' th-101 $138 14 active；'Storm Shell Anorak' th-205 $189 6 low；'Merino Trail Socks (3-pack)' th-310 $24 52 active；'Titanium Pour-Over Kit' th-412 $76 3 low；'Cirrus Down Layer' th-208 $249 9 active；'Trail Notebook (pocket)' th-501 $12 120 active；'Headlamp 400 (warm)' th-330 $42 0 out；'Camp Chair Lite' th-610 $58 7 low。订单：12 个虚构订单（姓名如 'M. Alvarez'、'J. Okafor' — 表格中仅显示首字母缩写），状态涵盖 paid/packed/shipped/refunded，总额由条目计算得出，下单标签为静态相对文本（'2h ago'、'1d ago' … '9d ago'）。系列：30 个营收数据点，介于 $310 和 $1,840 之间，具有可信的每周节奏。概览文案：'Revenue, last 30 days' / 'Orders' / 'Average order' / 'Units sold' 作为四个 KPI；热销产品标题为 'What moved'；最近订单标题为 'Latest'；库存视图在存在三个警报时以 'Three things need you' 问候，否则显示计数行。
   布局：不适用
   动效：不适用
2. **侧边栏** — 字标区块：'[SHOP]'（Instrument 600 17px）位于 'STORE ADMIN'（10px 大写 Soft Ink）上方。ViewButtons 带 lucide 图标：Overview（LayoutDashboard）、Orders（Receipt）、Products（Package）、Inventory（AlertTriangle）。页脚区块：'orders@' + emailDomain 以及折叠状态提示。折叠切换按钮（PanelIcon）位于底部；状态持久化。
   布局：固定左侧，全高，Panel 填充，Line 右边框；展开 232px / 收起 64px 轨道，标签隐藏。
3. **顶栏** — 左侧：当前视图名称（600 16px）和一行商店简介 'Small shop, [NICHE]'（13px Soft Ink）。右侧：一个 'Reseed demo data' 幽灵按钮（RotateCcw 图标）及其确认弹出框，以及一个 Good 状态圆点 'Synced locally'，提示为 'Demo data lives in this browser'。搜索框仅存在于 Orders 视图中。
   布局：在内容区内粘性定位，高 64px，Panel 填充，Line 底边框，两侧内边距 32px。
4. **概览视图** — 四个 KpiCards（Revenue $28,412 +12.4% / Orders 412 +6.1% / Average order $68.96 −1.8% / Units sold 638 +9.3% — 来自系列的示例数据）：标签（12.5px Soft Ink）、数值（JetBrains 600 28px）、带箭头的 Delta 芯片（Mint 上升 / Ruby 下降）。下方为 2:1 网格：RevenueChart（标题 'Revenue, last 30 days'，SVG 面积图，等宽轴标签每第 5 个数据点，说明文字 'Sample series — reseed for a different week'）和 TopProducts（五个 BarRow 条目：名称、数量、按最大值缩放的条形、价格）。RecentOrders：一个紧凑的 5 行表格（订单 id 等宽字体、客户首字母圆点、条目数、状态芯片、总额），链接到 Orders 并打开抽屉。
   布局：网格：KPI 4 列 20px 间距（低于 1100px 时 2 列，低于 640px 时 1 列）；图表:产品 2:1（低于 1100px 时堆叠）；最近订单全宽 Panel。
5. **订单视图** — 工具栏：搜索输入框（高 38px，'Search id or customer'）、状态标签页（All / Paid / Packed / Shipped / Refunded）作为带计数的胶囊芯片，以及实时结果计数（'Showing 12 of 12'）。OrdersTable：列 Order（等宽 id）、Customer（首字母圆点 + 姓名）、Items（计数 + 首个产品名称）、Status（StatusChip）、Total（等宽，右对齐）。行点击打开 OrderDrawer：头部（id、客户、下单标签）、LineItems 带 MonogramTile + 数量 + 行总额、小计/运费/总计行、Timeline（placed → paid → packed → shipped，当前项点亮），以及一个主推进按钮（'Mark as packed' 等；已退款订单显示 'Refund logged' 且无按钮）。空状态：'Nothing matches — even the spreadsheet is embarrassed.'
   布局：全宽 Panel；工具栏行位于表格上方；抽屉覆盖在遮罩层上。
6. **产品视图** — 左侧：产品列表行（MonogramTile、名称、sku 等宽、价格、库存，相关时带 low/out 芯片、状态）。行点击或 'Edit' 打开 ProductEditor 抽屉；'New product' 主按钮启动空白编辑器。编辑器：名称、sku（等宽，新建时预填 th-7xx）、价格（数字，已验证）、库存（数字）、状态（active/hidden 下拉选择）；失焦时内联验证；Save 写入，toast 'Saved — [name] updated'（或 'added'），列表即时反映。缺货行带有 Ruby 芯片且仍可编辑。
   布局：列表最大宽度 880px；编辑器为右侧抽屉（宽度 420px）。
7. **库存视图** — 标题行：'Alerts' 及计数。AlertRows 用于库存 ≤ 7：MonogramTile、名称、sku、当前库存（为 0 时 Ruby，否则 Amber）、RestockStepper（+1/+5/×2 快捷芯片和数字输入框），以及 'Restock' 应用更改：单元格闪烁 Mint，toast 确认 'Restocked [name] +N'，当库存 > 7 时该行离开列表。一行低调的页脚文字：'Restocks are demo-only — no suppliers were contacted.'
   布局：警报行位于 Panel 列表中，最大宽度 880px；标题行高 48px。

## 资产（Assets）
- 图片（image）：不使用照片或下载的图片：MonogramTiles、首字母圆点、图表和 favicon 均以代码绘制。不要获取或热链任何内容。
- 图片（image）：在项目根目录写入 ASSETS.md，列出代码绘制的资产（字母组合方块、首字母圆点、营收图表、favicon——“drawn in code, original”）以及 npm 包：@fontsource-variable/instrument-sans 和 @fontsource/jetbrains-mono（OFL-1.1）以及 lucide-react（ISC）。
- 图标（icon）：仅使用 lucide-react：AlertTriangle、ArrowDownRight、ArrowUpRight、ChevronRight、LayoutDashboard、Package、Receipt、RotateCcw、Search、X。描边宽度 1.75，16–20px，颜色继承。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的圆角方块，填充 #4F46E5，三条宽度递减的白色水平条（一个低调的条形图符号）。不使用品牌标志。
- 字体（font）：安装 @fontsource-variable/instrument-sans 和 @fontsource/jetbrains-mono，并按 Setup 中所述在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包进 dist/。

## 禁止事项（Don'ts）
- 无后端、无表单提交、无对 API 的 fetch 请求：所有变更操作都写入 localStorage 中对应 store 键下，在需要如实说明的地方标注 'demo'；重新播种（reseed）会恢复原始示例数据。
- 每个内部链接都指向文件名或应用内视图（./index.html、四个侧边栏视图）——绝不指向裸目录；整个站点只有一个页面。
- 不使用真实商店、市场平台、分析或支付品牌（Shopify、Stripe、Meta、GA）；商店、产品、订单和客户均为虚构的示例数据。
- 不使用图表或表格库：营收图表为手写 SVG，表格为语义化 <table>。
- 不根据真实时钟渲染日期：展示位置的标签为静态示例文本（'2h ago'），图表坐标轴显示示例日期标签，任何地方都不打印今天的日期或年份。
- 不使用照片、人物、头像；仅使用首字母圆点和字母组合方块。
- 一切资源自托管：字体通过 Fontsource，图标以 npm 包或内联 SVG 形式引入。不使用 CDN <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具。
- 生产构建：压缩、无 source map、不将 src/ 复制进 dist/、使用单条命令 npm run build、输出位于 dist/ 且小于 4 MB。
- 除侧边栏页脚中链接到 https://vibefather.ai 的署名行 'Built with a VibeFather template' 外，站点内绝不提及 VibeFather。
- 遵循 prefers-reduced-motion：不做数字滚动计数、不做图表揭示动画、不做行淡入；抽屉仍保持可用。
- 应用必须在 1440x900 桌面端和 390x844 移动端正常工作（900px 以下侧边栏变为底部图标栏），且控制台零报错；表格、抽屉、步进器和表单仅用键盘即可操作，并具有可见的焦点环。
- 无障碍：抽屉会捕获焦点并可通过 Escape 关闭；状态标签携带文本（绝不单靠颜色）；表格使用真实的 th scope；toast 使用 aria-live polite。

---
— Prompt by VibeFather · https://vibefather.ai/t/e-commerce-admin-dashboard · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
