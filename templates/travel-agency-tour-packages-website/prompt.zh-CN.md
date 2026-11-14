> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 旅行社旅游套餐网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的三页网站。[BRAND] 是一家小团游运营商，成立于 [FOUNDED]，运营覆盖 [DESTINATIONS] 的旅行线路，每团最多 [GROUP_MAX] 名旅行者。网站必须像真实运营商的站点一样运作：首页展示精选行程和“为什么选择我们”条带；列表页提供组合筛选（地区、时长、价格、风格）和实时计数；每个行程有一个详情页，包含摘要条带、逐日行程手风琴、SVG 路线图、包含与不包含项目列表，以及一个预订请求表单，表单最终以客户端确认和参考编号结束。页面：index.html、tours.html、tour.html?t=<slug>（无查询参数打开时显示第一个行程）。一切都在浏览器中运行；不会提交到任何地方。

- 受众：35–65 岁的旅行者，他们已经过了住青旅、坐大巴的年纪——他们想要小团、真正的向导、诚实的行程，以及一个能自我解释的价格。他们会花一周时间比较三家运营商，然后预订那个行程读起来像真人写的。
- 目标：产生预订请求。访客应在十秒内看到运营商去哪里以及团队规模小；在两分钟内，他们应该正在阅读逐日行程并查看出发日期。
- 语气：专业而平实，像第三天晚餐时一位好向导的谈吐。具体的细节（英里数、小时数、渡轮名称），关于天气和膝盖的轻松幽默，没有“难忘之旅”的陈词滥调，没有感叹号。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/lora（OFL-1.1）、@fontsource-variable/public-sans（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 react-ts 模板通过 npm create vite@latest 搭建脚手架。项目根目录下有三个真实的 HTML 页面：index.html（入口 src/main-home.tsx）、tours.html（src/main-tours.tsx）和 tour.html（src/main-tour.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist'，sourcemap false，assetsInlineLimit 0，rollupOptions { input { index: resolve(__dirname, 'index.html')，tours: resolve(__dirname, 'tours.html')，tour: resolve(__dirname, 'tour.html') } } }。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4（tailwindcss + postcss + autoprefixer），content ['./index.html', './tours.html', './tour.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将 Design 下的每种颜色以 kebab-case 键添加到 theme.extend.colors（paper、vellum、card、navy、navy-soft、ink、slate-blue、coral、coral-deep、sand、rule），并设置 fontFamily display ['Lora', 'Georgia', 'serif']、sans ['Public Sans Variable', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 10px，并添加 maxWidth { container: '1240px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/lora/500.css'、'@fontsource/lora/600.css'、'@fontsource/lora/500-italic.css' 和 '@fontsource-variable/public-sans'；从所有三个入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（每个字符串、数字、行程、天数、出发日期、筛选条件、推荐语和图片路径，均带类型），src/lib/brand.ts（brandSlug = [BRAND] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，brandInitials，emailDomain = 去掉连字符的 brandSlug + '.com'），src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键以 brandSlug + ':' 为前缀），src/lib/tour.ts（从 location.search 读取查询 'tour.html?t=<slug>'，返回匹配的行程或第一个——绝不返回未找到），src/lib/filters.ts（applyFilters(tours, { region, length, price, style })，价格区间在 content.ts 中定义）。
  - 状态：src/store/request.ts 是一个小型外部存储（useSyncExternalStore），保存预订草稿 { tourSlug, departure, travelers, name, email, note } 以及每个行程的已提交标志，持久化到 localStorage 键 brandSlug + ':request:<tourSlug>'。
  - src/components/ 中的组件：Header.tsx、MobileMenu.tsx、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、StampBadge.tsx（绘制的圆形印章）、Footer.tsx；首页：Hero.tsx、Featured.tsx（TourCard.tsx）、WhyUs.tsx、Testimonials.tsx；行程列表：ToursMasthead.tsx、FilterRail.tsx（RegionPicker、LengthPicker、PricePicker、StylePicker）、ResultsGrid.tsx（含空状态）；行程详情：TourHero.tsx、SummaryStrip.tsx、Itinerary.tsx（DayAccordion.tsx）、RouteMap.tsx（内联 SVG）、Inclusions.tsx、BookingForm.tsx（DepartureSelect.tsx、TravelersStepper.tsx、RequestCard.tsx）、NextTour.tsx。src/pages/Home.tsx、Tours.tsx、Tour.tsx 组合它们；每个页面都渲染 Header 和 Footer。
  - 在首次构建之前，使用 curl -L -o 并按照给定的确切文件名，将 Assets 下列出的每张图片下载到 public/images/ 中。构建本身从不获取任何内容。
  - public/favicon.svg 如 Assets 下所述。所有三个 HTML 文件：lang en，<meta name='theme-color' content='#F6F2E9'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>。标题：index.html '<title>[BRAND] — Small-group tours in [DESTINATIONS]</title>'，tours.html '<title>All tours — [BRAND]</title>'，tour.html '<title>Tours — [BRAND]</title>'（行程页面在加载时将 document.title 设置为行程名称）。
  - 在项目根目录下按 Assets 下所述编写 ASSETS.md。
  - dist/ 包含三个 HTML 文件、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张图片。保持在 12 MB 以下。

## 变量
- [BRAND] — 运营方名称（默认：“Northbound Trails”）。虚构的旅行社名称。用于字标、标题、页脚、电子邮件（hello@ + 不含连字符的 brandSlug + .com）、localStorage 键和预订参考号（首字母缩写，例如 NT-8104）。绝不是真实的运营方或旅行品牌。
- [DESTINATIONS] — 目的地（默认：“Norway, Scotland and the Alps”）。该运营方经营的三个地区，以逗号分隔。驱动地区筛选器、主视觉文案、八个行程的分配以及路线地图。保持恰好三个地区；行程中的城镇、酒店和渡轮，凡是合作伙伴的保持虚构感，凡是公共地理的（城市、渡轮航线）保持真实。
- [FOUNDED] — 创立年份（默认：“2013”）。四位数字年份。驱动页脚文案、why-us 条带（'since [FOUNDED]'）以及向导的任职年限跨度。
- [GROUP_MAX] — 团队人数上限（默认：“12”）。小团人数上限，以数字表示。驱动每个行程的摘要条、旅行者步进器的最大值以及 why-us 文案。保持在 8–16。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/travel-agency-tour-packages-website（默认：是；删除此行即可移除）

Pages & Sections 下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/travel-agency-tour-packages-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
