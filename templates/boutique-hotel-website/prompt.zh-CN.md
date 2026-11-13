> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 精品酒店网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 制作一个三页静态网站，[BRAND] 是位于 [PLACE] 之上的 [STAY]。它必须让人感觉像一家真实运营的酒店：真实的海岸照片和相匹配的室内照片，一个房型目录，包含面积、可住人数、以 [CURRENCY] 计价的每晚房价和设施，一个客户端可用性查询与预订组件（日期范围日历、住客人数、房型选择、价格摘要、带参考码的模拟确认），餐厅和酒吧及其营业时间与菜单亮点，季节性优惠，住客评价，一个常见问题解答，联系方式以及一幅用 SVG 绘制的 Sicherheit 地图，外加一个带交互式 SVG 地图的本地指南页面。页面：index.html（首页）、rooms.html（房型和房价）、guide.html（本地指南）。

- 受众：计划进行两到四晚海岸短假的情侣和小家庭，他们希望在确定之前看到房间、了解确切价格并查询日期；此外还有寻找安静落脚点的徒步者和美食旅行者。
- 目标：让访客从第一张照片出发，以尽可能少的步骤完成一次带价格、已核对日期的预订请求，同时充分展示房间、餐饮和周边环境，让这次住宿显得物有所值。
- 语调：平静、具体、温暖。使用简短的陈述句和具体事实（面积、时间、距离、价格），以克制的低调表达代替夸张赞美。绝不使用“luxury”、“unforgettable”、“nestled”或“hidden gem”。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 motion/react 导入）（MIT）、lucide-react（ISC）、@fontsource/cormorant-garamond（OFL-1.1）、@fontsource-variable/hanken-grotesk（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）、@vitejs/plugin-react（开发依赖）（MIT）、tailwindcss、postcss、autoprefixer（开发依赖）（MIT）、typescript（开发依赖）（Apache-2.0）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置：
  - 使用 Vite 的 react-ts 模板搭建脚手架。package.json 脚本：dev = vite，build = tsc -b && vite build，preview = vite preview。
  - vite.config.ts：plugins [react()]，base './'，build.sourcemap false，build.outDir 'dist'，build.rollupOptions.input = { main: 'index.html', rooms: 'rooms.html', guide: 'guide.html' }（每个都用 path.resolve(__dirname, ...) 解析）。
  - 项目根目录下有三个 HTML 入口文件（index.html、rooms.html、guide.html），每个都包含 <title>[BRAND] · Home|Rooms & rates|Local guide</title>、<link rel='icon' href='./favicon.svg' type='image/svg+xml'>、一个 <div id='root'>，以及一个指向 src/entries/home.tsx、src/entries/rooms.tsx 或 src/entries/guide.tsx 的模块脚本。
  - src/main.css：@tailwind base/components/utilities；在那里或 src/fonts.ts 中导入字体：@fontsource/cormorant-garamond/400.css、500.css、600.css、400-italic.css；@fontsource-variable/hanken-grotesk；@fontsource/ibm-plex-mono/400.css、500.css。
  - tailwind.config.ts：content ['./index.html','./rooms.html','./guide.html','./src/**/*.{ts,tsx}']；theme.extend.colors = { paper:'#F4EFE6', shell:'#EAE3D6', ink:'#1F2A30', slate:'#46565E', mist:'#8B979B', rule:'#D3CABB', rust:'#B5532E', 'rust-deep':'#8F3F21', sea:'#DCE4E3', night:'#172126', kelp:'#56634B' }；fontFamily = { display:['"Cormorant Garamond"','Georgia','serif'], sans:['"Hanken Grotesk Variable"','system-ui','sans-serif'], mono:['"IBM Plex Mono"','ui-monospace','monospace'] }；letterSpacing.label = '0.18em'。
  - 所有文案、价格、房间数据、菜单项、优惠、评价、FAQ、指南地点和地图标记坐标都放在一个文件 src/content.ts 中，以带类型的常量导出。组件只从中读取。当变量值与默认值不同时，重写 content.ts 中的所有文案，使其适配新的品牌、地点和物业，同时保持相同的结构、数量和长度。
  - 共享组件位于 src/components：Header、Footer、Reveal（motion 包装器）、PhotoBand、BookingWidget（含 Calendar、GuestStepper、RoomPicker、PriceSummary、Confirmation）、BookingDrawer、Accordion、CoastMap（SVG）、SectionLabel。
  - 预订逻辑位于 src/lib/booking.ts，以纯函数形式实现：isUnavailable(date, roomIndex)、nightsBetween、priceFor(roomId, checkIn, checkOut, adults, children)、referenceCode(input)。日期以本地 YYYY-MM-DD 字符串处理；不使用日期库。
  - 图片位于 public/images（下载的文件，见 Assets），引用方式为 ./images/<file>。public/favicon.svg 是一个 32x32 的 rust（#B5532E）圆角方块（rx 7），带有三条纸色的水平波浪线。
  - 在项目根目录编写 ASSETS.md，列出每个第三方文件：路径、来源 URL、作者、许可证。添加 README.md，包含 npm install / npm run dev / npm run build。

## 变量
- [BRAND] — 酒店名称（默认：“Skerry House”）。虚构的物业名称。用于字标、页面标题、文案和预订参考前缀。
- [PLACE] — 地点（默认：“Porthkell Head”）。虚构的海岬、村庄或山谷。用于文案、指南和地图标签。
- [STAY] — 物业（默认：“24-room hotel on a granite headland”）。该场所是什么，及其房间数量。目录中的房间数量必须加总为此数字。
- [CURRENCY] — 货币符号（默认：“€”）。用于每个价格和总计的符号。按货币的常规写法放置（€165，1 650 kr）。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接至 https://vibefather.ai/t/boutique-hotel-website（默认：是；删除此行以移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块键控，以便日后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/boutique-hotel-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
