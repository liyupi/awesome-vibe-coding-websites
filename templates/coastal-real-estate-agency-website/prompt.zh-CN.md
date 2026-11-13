> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 海滨房地产中介网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为您自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的三页静态网站。[BRAND] 是一家独立房产中介，在 [REGION] 的沿海小镇 [TOWN] 销售住宅。页面包括：首页（index.html）、带筛选和排序的全部房源页（listings.html），以及通过查询参数选择的房源详情页（listing.html?id=<listing-id>）。十套虚构住宅，配有真实的 CC0  exterior 照片、共享的 AI 生成室内照片、SVG 户型图、SVG 街区地图、按揭计算器、客户端看房请求表单、带字母组合图案的经纪人卡片、市场统计数据、近期售出房源和估值行动号召。所有文案和所有房源数据都存放在一个内容文件 src/content.ts 中。以下文案按默认变量值撰写；如果变量值不同，请重写每一段文案、房源名称、街道和街区，使其符合新的变量值，同时保持相同的结构、长度和条目数量。

- 受众：在 [TOWN] 买房或卖房的人：本地换大房或换小房的家庭、来自城市的第二住宅买家，以及希望在决定出售前先做估值的业主。
- 目标：让访客浏览和筛选房源、打开房源详情、请求看房或预约免费估值。看房请求和估值请求是两种转化。
- 语气：平静、本地化、具体，就像一家在同几条街上经营了二十年的中介。句子简短，数字具体，不用炒作词汇（不用“stunning”、“dream home”、“luxury living”）。价格和事实始终精确。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react 18（MIT）、react-dom 18（MIT）、lucide-react（ISC）、@fontsource-variable/fraunces（OFL-1.1）、@fontsource/instrument-sans（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）、vite 5 + @vitejs/plugin-react（MIT）、tailwindcss 3.4 + postcss + autoprefixer（MIT）、typescript（Apache-2.0）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 npm create vite@latest 脚手架（React + TypeScript 模板）。package.json 脚本 build = tsc -b && vite build。
  - 项目根目录下有三个 HTML 入口文件：index.html、listings.html、listing.html。每个文件加载各自的入口：src/pages/home.tsx、src/pages/listings.tsx、src/pages/listing.tsx。每个文件设置 <title>[BRAND] · Homes for sale in [TOWN]</title>（listing 页面在运行时将其替换为 '<street address> · [BRAND]'）并链接 public/favicon.svg。
  - vite.config.ts：base './'，build.sourcemap false，build.rollupOptions.input = { index: 'index.html', listings: 'listings.html', listing: 'listing.html' }。无路由库：每个页面是独立的 React 根。
  - tailwind.config.ts：content ['./*.html', './src/**/*.{ts,tsx}']；扩展颜色：sand #F6F1E9、shell #FFFDF9、ink #13262F、drift #6B6359、line #E2D9CB、teal #2F6F6A、tealdark #245652、coral #D9694A、foam #DCE8E4、sea #BFD5D8；fontFamily display ['Fraunces Variable', 'Georgia', 'serif']、sans ['Instrument Sans', 'system-ui', 'sans-serif']、mono ['IBM Plex Mono', 'ui-monospace', 'monospace']；maxWidth container 1240px。
  - src/main.css：@tailwind base/components/utilities，从 src/fonts.ts 导入 Fontsource CSS（fraunces variable；instrument-sans 400、500、600；ibm-plex-mono 400、500），body bg-sand text-ink font-sans antialiased，hero 缩放和 lightbox 淡入的关键帧，以及一个 @media (prefers-reduced-motion: reduce) 块，禁用所有动画和过渡。
  - src/content.ts 存放所有字符串、机构详情、四位经纪人、十条房源（含照片路径、图库、户型图 id、地图坐标、描述和特色）、地图的兴趣点、市场统计和客户评价。组件中绝不包含硬编码文案。
  - 共享组件位于 src/components/：Header、Footer、ListingCard、StatusBadge、FactsRow、Reveal（IntersectionObserver 包装器）、CountUp、Lightbox、FloorPlan、NeighbourhoodMap、MortgageCalculator、ViewingForm、ValuationBand、Monogram、FilterBar。
  - src/lib/format.ts：formatPrice(n) 使用 Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }) 并加上 [CURRENCY] 前缀（例如 $1,185,000）；formatCompact(n) 为图表标签生成 $1.19M 或 $705k。
  - src/lib/params.ts：使用 history.replaceState 读写 URLSearchParams，使筛选条件在刷新和分享后保留；筛选条件变化时不重新加载页面。
  - 收藏房源：每张卡片上的心形按钮在 localStorage 键 'saved-homes' 中切换房源 id；当至少收藏一套房源时，页眉在心形图标旁显示一个小计数徽章。
  - 构建前用 curl 将 Assets 中列出的每张图片下载到 public/images/，并在项目根目录创建 ASSETS.md，列出每个文件的路径、来源 URL、作者和许可证。

## 变量
- [BRAND] — 机构名称（默认：“Hartwell & Rye”）。虚构的机构名称；以衬线字体字标展示。
- [TOWN] — 城镇（默认：“Port Ellery”）。该机构所覆盖的唯一城镇。请虚构一个；不要使用真实城镇。
- [REGION] — 海岸或地区（默认：“the Calder Coast”）。用于主视觉副标题和页脚。
- [CURRENCY] — 货币符号（默认：“$”）。作为每个价格的前缀；当货币为 $ 时面积保持平方英尺，其他货币则切换为平方米。
- [CREDIT] — 在页脚保留一个小的“Template by VibeFather”链接，指向 https://vibefather.ai/t/coastal-real-estate-agency-website（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/coastal-real-estate-agency-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
