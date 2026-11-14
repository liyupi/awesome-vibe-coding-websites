> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 滑雪度假村网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个四页静态网站，[BRAND] 是位于 [LOCATION] 的一家虚构滑雪度假村，面向 [AUDIENCE]。首屏使用 [TAGLINE] 这句话。网站包含一个明确标注为示例的山地状况报告、一张原创的交互式 SVG 雪道地图（带难度筛选和可选路线详情）、缆车票和租赁价格（带可用的纯浏览器估算器）、一个课程查找器和请求表单，以及带住宿估算的住宿页面。页面为 index.html、tickets.html、lessons.html 和 lodging.html。每个内部链接都使用真实文件名。所有状况、可用性、价格和请求均为示意性且仅限本地；没有任何内容是实时的、收费的、预订的或发送的。

- 受众：访客受众是 [AUDIENCE]：在桌面端或移动端比较地形、天气、课程选项、装备以及山地旅行总成本的人。该模板本身适合度假村运营商和酒店营销人员，他们需要的是具体的规划体验，而不是宣传册。
- 目标：让访客在十秒内了解这座山，找到合适的雪道，估算票务和装备费用，选择课程，并为住宿定价，同时不会遇到失效的控件或虚构的实时服务声明。
- 语气：清晰、干练且温和内敛，像一位优秀的山地主人。使用精确的地形、时间、包含项和价格。避免奢华陈词滥调、夸大的粉雪宣称、虚假紧迫感和感叹号。所有网站文案均为美式英语。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/bricolage-grotesque（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 react-ts 模板通过 npm create vite@latest 搭建脚手架。保留四个根 HTML 入口文件：index.html、tickets.html、lessons.html 和 lodging.html。每个文件加载 /src/main.tsx，并将 body 的 data-page 设置为 home、tickets、lessons 或 lodging；main.tsx 在不使用路由器的情况下选择匹配的页面组件。
  - vite.config.ts：base './'，plugins [react()]，build.outDir 'dist'，build.sourcemap false，assetsInlineLimit 0，以及 rollupOptions.input 包含所有四个根 HTML 文件的绝对解析路径。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4，content 覆盖所有根 HTML 文件和 src/**/*.{ts,tsx}。将每个 Design 颜色添加为 kebab-case 主题颜色，fontFamily display ['Bricolage Grotesque Variable','system-ui','sans-serif']、sans ['Inter Variable','system-ui','sans-serif']、mono ['IBM Plex Mono','monospace']，以及一个 1360px 容器。
  - 在 src/fonts.ts 中导入 '@fontsource-variable/bricolage-grotesque'、'@fontsource-variable/inter'、'@fontsource/ibm-plex-mono/400.css' 和 '@fontsource/ibm-plex-mono/500.css'。从 main.tsx 导入字体和 src/index.css。
  - 将每个可见字符串、价格、时间、雪道记录、缆车记录、状况、FAQ、图片路径和变量默认值放入带类型的 src/content.ts 中。通过将 [BRAND] 转为小写并将非字母数字连续段替换为连字符来派生 brandSlug；将虚构电子邮件派生为 hello@ 加上不含连字符的 brandSlug 加上 .example。组件中不包含硬编码的默认品牌文案。
  - 使用 src/pages/Home.tsx、Tickets.tsx、Lessons.tsx 和 Lodging.tsx。共享组件包括 Header、Footer、Reveal、SectionHeading、Accordion 和 PhotoFrame。功能组件包括 ConditionsBar、TrailMap、TicketEstimator、RentalPicker、LessonFinder、LessonRequest 和 StayEstimator。将所有计算保留在纯函数中，并进行整美元舍入。
  - 构建之前，使用指定的文件名将 Assets 下的六个精确图片 URL 下载到 public/images/ 中。从 content.ts 中以 ./images/<file> 引用它们，以便所有四个根级页面在 Vite base './' 下都能解析它们。构建过程从不获取资源。
  - 按 Assets 下所述创建 public/favicon.svg。每个 HTML 文件获得 lang='en'、一个本地 favicon 链接和一个纯标题：index 上为 '[BRAND] — [TAGLINE]'，其他文件上为 '[BRAND] — Lift Tickets & Rentals'、'[BRAND] — Ski & Snowboard Lessons' 或 '[BRAND] — Lodging'。
  - 在项目根目录编写 ASSETS.md，包含每个图片、字体和图标包，其来源、作者和许可证，与 Assets 下所述完全一致。
  - 生产 dist/ 必须包含所有四个 HTML 文件、带哈希的本地 JS/CSS、woff2 字体、favicon.svg 和六个本地图片，无 source map，总大小低于 20 MB。

## 变量
- [BRAND] — 度假村名称（默认："Alderpeak Resort"）。一个虚构的度假村名称，用于字标、标题、页脚、示例邮件和 localStorage 键前缀。切勿使用真实度假村或 VibeFather。
- [LOCATION] — 度假村位置（默认："Juniper Valley, Colorado"）。一个虚构的城镇或山谷，搭配真实的州名。用于主视觉区、住宿地址、路线指引和页脚。
- [TAGLINE] — 主视觉标语（默认："Find your line above the valley."）。一句简短的度假村专属语句，用作首页 H1，并针对不同取值进行适配。
- [AUDIENCE] — 主要访客（默认："Skiers, snowboarders, and mountain families"）。一个通俗语言的受众短语，用于介绍性文案；课程和雪道推荐应适合该受众。
- [TICKET_PRICE] — 成人日票（默认："129"）。仅数字，单位为美元。驱动所有票种和 multiday 费率：青少年为成人的 0.80，儿童为 0.55，老年人为 0.75；两日票为对应单日票价的 1.85，三日票为 2.55；将每个最终每人费率四舍五入到整数美元。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接指向 https://vibefather.ai/t/ski-resort-website（默认：是；删除此行即可移除）

页面与区块下的文案按默认值编写。如果你的取值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/ski-resort-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
