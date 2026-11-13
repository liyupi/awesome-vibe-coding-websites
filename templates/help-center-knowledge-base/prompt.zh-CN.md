> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 帮助中心知识库

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简要说明
为 [BRAND]、[PRODUCT] 打造一个帮助中心：以搜索为先的首页、六个分类页面和十六个文章页面，文章页面配有目录侧栏、有用性投票、相关文章和联系面板。页面包括：index.html、category.html?c=<slug>、article.html?a=<slug>（未指定时默认打开第一个分类／第一篇文章）。一切都在浏览器中运行；不会向任何地方提交数据。

- 受众：一位有点烦躁的手机端客户，正处在任务进行中：他们希望第一个结果里就有答案，或者两次点击内就能联系到真人。每篇文章都靠便于快速浏览来体现自身价值。
- 目标：自助式解答。五秒内搜索框获得焦点，六个分类清晰可见；三十秒内访客已打开一篇文章并找到所需步骤。
- 语气：服务台式的温暖：用词平实、步骤编号、零企业式含糊其辞。每个分类最多一个温和的玩笑。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/figtree（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化（Setup）：
  - 使用 npm create vite@latest 并选择 react-ts 模板进行脚手架搭建（如果最新模板面向更新的主版本，则固定版本号）。项目根目录下有三个真实的 HTML 页面：index.html（入口 src/main-index.tsx）、category.html（入口 src/main-category.tsx）、article.html（入口 src/main-article.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0, rollupOptions { input { index: resolve(__dirname, 'index.html'), category: resolve(__dirname, 'category.html'), article: resolve(__dirname, 'article.html') } } }。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './category.html', './article.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的每种颜色以 kebab-case 键名添加到 theme.extend.colors 中（warmwhite、panel、line、ink、softink、blue、blue-deep、blue-mist、good、warn），并设置 fontFamily sans ['Figtree Variable', 'system-ui', 'sans-serif']、mono ['IBM Plex Mono', 'ui-monospace', 'monospace']。将 borderRadius DEFAULT 设为 8px，并添加 maxWidth { container: '1160px', read: '720px' }。
  - 在 src/fonts.ts 中导入 '@fontsource-variable/figtree' 和 '@fontsource/ibm-plex-mono/400.css' 以及 '500.css'；从所有三个入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局（File layout）：src/content.ts（每个字符串、分类、文章、章节、步骤和相关链接，均带类型 —— categories: { slug, name, blurb, icon }，articles: { slug, category, title, summary, sections: { heading, body: string[] }[], related: string[] }；全部十六篇文章完整写出）、src/lib/brand.ts（brandSlug = [BRAND] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 brandSlug + '.com'，supportMail = 'support@' + emailDomain）、src/lib/route.ts（读取 ?c= / ?a=，解析分类或文章，回退到第一个 —— 绝不出现未找到）、src/lib/search.ts（对标题、摘要和章节标题进行 score(query) 评分；返回排序后的文章 slug 及匹配到的标题名称）、src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键前缀为 brandSlug + ':'）。
  - 状态（State）：src/store/helpfulness.ts 是一个小型外部 store（useSyncExternalStore），持有 { articleSlug, vote: 'up' | 'down' | null }，按文章持久化在 brandSlug + ':vote' 下；src/store/contact.ts 持有 { name, email, message, sent }，持久化在 brandSlug + ':contact' 下。
  - 组件位于 src/components/：Header.tsx、SearchCard.tsx（InstantResults.tsx）、Footer.tsx、Breadcrumbs.tsx、CategoryCard.tsx、ArticleRow.tsx、ContactPanel.tsx（共享表单）；仅文章页使用：TocRail.tsx、VoteWidget.tsx、RelatedList.tsx。页面：src/pages/Home.tsx、Category.tsx、Article.tsx。
  - SearchCard：一个大型输入框（高度 56px，搜索图标），仅在首页自动聚焦；当访客输入时，InstantResults 在输入框下方以 Panel 卡片形式显示最多七行排序结果（标题 + 匹配标题 + 分类标签），带 Line 边框和柔和阴影；方向键移动活动行，Enter 打开它（./article.html?a=<slug>），Escape 清空。输入框下方有三个建议标签（'booking'、'calendar sync'、'refunds' —— 由 content.ts 中的真实文章主题构建）。零结果：'Nothing matched — try fewer words, or write to us below.' 全部在客户端完成。
  - 文章正文以结构化字符串形式存在于 content.ts 中，并渲染为语义化 HTML（h2/p/ol/li）—— 不使用 markdown 解析器；文章内的键盘快捷键渲染为等宽 kbd 标签。
  - VoteWidget：'Was this helpful?' 带两个按钮（ThumbsUp / ThumbsDown，lucide）—— 投票在本地持久化，并切换为 'Thanks — noted in this browser (the demo sends nothing).'，所选图标填充为 Good。
  - ContactPanel：姓名、邮箱、消息、提交；内联验证（字段下方红色 Warn 文本）；成功后表单交叉淡入为 Good 勾选行 'Message saved — this demo stores it locally; a real center would email ' + supportMail。
  - public/favicon.svg 如资源（Assets）部分所述。所有三个 HTML 文件：lang en，<meta name='theme-color' content='#FBFAF7'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>。标题：index '<title>[BRAND] Help Center</title>'，category '<title>Category — [BRAND] Help</title>'（加载时设置），article '<title>Article — [BRAND] Help</title>'（加载时根据文章标题设置）。
  - 在项目根目录编写 ASSETS.md，如资源（Assets）部分所述。
  - dist/ 包含三个 HTML 文件、带哈希的 JS/CSS、woff2 字体和 favicon.svg。保持在 5 MB 以下。

## 变量
- [BRAND] — 产品名称（默认："Plainpost"）。虚构产品的名称，一个单词。用于字标、标题、页脚、支持邮箱（support@ + 不含连字符的 brandSlug + '.com'）以及 localStorage 键。绝不使用真实产品。
- [PRODUCT] — 产品是什么（默认："appointment scheduling for small clinics"）。一个描述产品的小写短语。重写首页介绍、分类简介和文章示例，使其符合该产品。保持具体。
- [CREDIT] — 在页脚保留一个小的 "Template by VibeFather" 链接指向 https://vibefather.ai/t/help-center-knowledge-base（默认：是；删除此行即可移除）

Pages & Sections 下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 暖白（Warm White）`#FBFAF7` — 全站页面背景。
- 面板（Panel）`#FFFFFF` — 结果卡片、分类卡片、表单、投票。
- 线条（Line）`#E7E4DC` — 全站 1px 细线；边框、表格行、分隔线。
- 墨色（Ink）`#1E2126` — 标题、正文、图标。
- 柔墨（Soft Ink）`#5D6167` — 摘要、说明文字、面包屑、眉题。
- 信任蓝（Trust Blue）`#2C55E0` — 唯一强调色：链接、聚焦输入框光环、激活的标签、主按钮、分类图标。
- 深蓝（Blue Deep）`#1F40B4` — 悬停和按下状态。
- 蓝雾（Blue Mist）`#EDF1FD` — 激活的标签、悬停的结果行、投票选中填充。
- 良好（Good）`#3E8E5A` — 成功提示线、“有帮助”投票、联系确认。
- 警告（Warn）`#C24141` — 仅用于校验错误。

### 字体排印（Typography）
- 文本与展示：H1、H2、正文、UI — Figtree，友好的 grotesque 字体：Figtree (OFL)，字重 400/500/600
- 等宽：kbd 快捷键标签、面包屑中的 slug：IBM Plex Mono (OFL)，字重 400

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。容器最大宽度 1160px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px；阅读栏最大 720px。区块垂直内边距桌面端 88px、1024px 以下 64px、640px 以下 48px。字号比例：H1（首页搜索标题）34px Figtree 600；文章 H1 30px 600；文章内 H2 20px 600，上边距 28px；正文 16px / 1.7 Ink；摘要 15px / 1.65 Soft Ink；眉题 12px 600 大写 字距 0.14em Soft Ink；面包屑 13px Soft Ink。按钮：高度 46px，Figtree 600 14px；主按钮 Trust Blue 填充配白色文字，次按钮 Panel 上 1px Line 边框。输入框：高度 46px（搜索框 56px），Panel 填充，1px Line 边框，聚焦时 Trust Blue 边框 + 2px 偏移光环。全站聚焦：2px Trust Blue 轮廓，3px 偏移。
- 圆角：卡片、输入框、按钮、投票为 8px；标签为 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1)。帮助中心应像纸质抽屉：安静。
- 动效：首页：搜索卡片加载时上浮 12px（500ms）；分类卡片进入时以 60ms 错峰显现。
- 动效：InstantResults：结果面板淡入并下落 4px 就位（160ms）；方向键激活的行以 120ms 缓动填充 Blue Mist；建议标签悬停时上浮 1px。
- 动效：分类页：文章行以 40ms 错峰显现；行悬停时标题变为 Trust Blue，并从左侧滑入一个 16px Line 箭头（160ms）。
- 动效：文章页：正文栏加载时沉降 8px；TocRail 的激活圆点随滚动在标题间滑动（200ms）；区块锚点偏移以适配吸顶页头。
- 动效：VoteWidget：按钮图标按下时弹跳 1→1.15→1（140ms）；感谢语交叉淡入淡出 200ms。
- 动效：联系表单：提交时面板交叉淡入淡出至确认（240ms）；错误文字在字段下方淡入（160ms）。
- 动效：链接：.link-draw 在悬停和 focus-visible 时以 240ms 生长出 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 无显现、无滑动圆点、无箭头滑动；一切静止且可用。在 index.css 中使用 CSS @media 加上 Motion 的 useReducedMotion。
- 图像：无照片、无插画、无人物、无头像（文章署名不具名 — “the [BRAND] team”）：设计由字体排印、细线和 Blue Mist 底槽上的 lucide 分类图标构成。图标：仅 lucide-react，描边宽度 1.75。favicon 为绘制的 SVG。

## 页面与区块
### 帮助首页（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均针对默认值编写（[BRAND] = Plainpost，[PRODUCT] = 面向小型诊所的预约排程）。将每个字符串、分类、文章和步骤都放入 src/content.ts 并从中渲染。若任何变量不同，请重写介绍、分类简介和全部十六篇文章，使其针对该产品具体且可信，同时保持相同的结构和数量（6 个分类、16 篇文章、每篇文章 3–5 个章节且包含真实步骤）。分类（slug · 名称 · 简介 · 图标 · 文章数）：'getting-started' '入门' '从接受邀请到完成首次预约，一气呵成' Rocket 3；'bookings' '预约与日历' '编辑、改期，以及双时钟问题' CalendarDays 4；'payments' '付款与退款' '定金、打款与退款窗口' CreditCard 3；'notifications' '通知' '在重要时刻之前送达的提醒' Bell 2；'team' '团队与权限' '前台、诊室，以及谁能看到什么' Users 2；'account' '账户与账单' '套餐、发票与关闭账户' Settings 2。文章（slug · 分类 · 标题）：'gs-invite' getting-started '接受你的邀请'；'gs-first-booking' getting-started '你的首次预约'；'gs-setup-checklist' getting-started '一页纸设置清单'；'bk-edit' bookings '编辑预约'；'bk-reschedule' bookings '无需电话来回的改期'；'bk-no-show' bookings '爽约与延迟取消'；'bk-sync' bookings '与你的日历同步'；'pay-deposits' payments '收取定金'；'pay-payouts' payments '打款何时到账'；'pay-refunds' payments '一屏完成退款'；'nt-reminders' notifications '有效的提醒时机'；'nt-custom' notifications '自定义提醒消息'；'tm-roles' team '角色：前台与提供者'；'tm-rooms' team '诊室与资源'；'ac-plans' account '套餐与发票'；'ac-close' account '（妥善地）关闭账户'。每篇文章正文：3–5 个章节，有步骤处使用编号步骤，可选的温和玩笑一则（例如 pay-payouts 中：'打款在下午 4 点整发出；它们不会等待迟到者。'）。
   布局：不适用
   动效：不适用
2. **页头** — 左侧：字标 '[BRAND]'（Figtree 600 18px）配一个小号 Trust Blue 帮助图标；其上方为 'HELP CENTER'（10px 大写 Soft Ink）。右侧（Figtree 500 14px）：'Categories' → ./index.html#categories，'Contact' → ./index.html#contact。720px 以下：仅显示字标。
   布局：吸顶，高度 64px，Warm White 95% 配背景模糊，Line 底边框。
3. **搜索主视觉** — 居中堆叠（最大宽度 680px，顶部内边距 96px）：眉标 '[BRAND] SUPPORT'；H1 'How can we help?'；带 InstantResults 和三个建议标签的 SearchCard；其下方为单行介绍 'Answers for [PRODUCT] — written by the team, read in about a minute each.'
   布局：Warm White 背景；结果面板绝对定位覆盖下方内容（z-10），带柔和阴影。
4. **分类网格** — 区块 id='categories'。眉标 'BROWSE BY TOPIC'；H2 'Six drawers, clearly labeled.' 3x2 网格的 CategoryCard 链接至 ./category.html?c=<slug>：Blue Mist 底槽上的 lucide 图标、名称（Figtree 600 17px）、简介（14px Soft Ink），以及计数行 '3 articles'（12px Soft Ink，等宽数字）。
   布局：3 列 24px 间距（960px 以下 2 列，620px 以下 1 列）；卡片为 Panel，1px Line 边框，悬停上浮 2px 并显示 Trust Blue 边框。
5. **热门条** — 眉标 'READ OFTEN'；H2 'The five we link most.' 五个 ArticleRow（标题 15.5px Figtree 500、分类标签、单行摘要 14px Soft Ink）链接至文章页，细线分隔。
   布局：单列最大宽度 720px，行内边距 20px。
6. **联系面板与页脚** — 区块 id='contact'。宽幅 Panel 卡片，顶部 Trust Blue 1px 导轨：左侧 — 眉标 'STILL STUCK?'；H2 'Write to a human.'；正文 'The form saves locally in this demo; a real center would email ' + supportMail + ' and answer within a day.'；右侧 — ContactPanel 表单。页脚：左侧字标 + supportMail；右侧 '© [BRAND]. Sample help center; sample answers.' 和 'Built with a VibeFather template' 链接至 https://vibefather.ai。
   布局：联系卡片最大宽度 1040px，两列 40px 内边距（900px 以下堆叠）；页脚 72px，Line 顶边框。

### 分类列表（`category.html`）
1. **分类视图** — 读取 ?c=<slug>；无查询参数时渲染第一个分类（getting-started）。面包屑：'Home' → ./index.html · 分类名称。头部区块：眉标 'CATEGORY'；H1 分类名称；简介；计数行。此处重复 SearchCard（更小，48px），InstantResults 优先限定在此分类（跨分类结果位于 'From other drawers' 分隔线下方）。下方：该分类中每篇文章的 ArticleRow（标题、摘要、章节数），细线分隔，交错显现。
   布局：Warm White 背景；阅读栏最大宽度 720px 居中；面包屑顶部内边距 88px。

### 文章（`article.html`）
1. **文章视图** — 读取 ?a=<slug>；无查询参数时渲染第一篇文章（gs-invite）。面包屑：'Home' → ./index.html · 分类名称链接至 ./category.html?c=<slug> · 文章标题（截断）。两列：正文栏（最大 620px）— 带分类名称的眉标；H1 标题；Soft Ink 的摘要段落；3–5 个章节作为 h2 标题及正文，编号列表渲染为带样式的 ol；底部的 VoteWidget；RelatedList（'Related articles'，三个 ArticleRow）。TocRail（吸顶，顶部 88px）：'On this page' + 各章节标题作为锚点行，带滑动活动圆点。移动端 TocRail 变为正文上方的可折叠 'On this page' 摘要。加载时由文章标题设置 document.title。
   布局：Warm White 背景；网格：正文 7 列，导轨 3 列偏移 2（1024px 以下隐藏导轨，改为显示摘要）。

## 资产（Assets）
- 图片（image）：不使用照片或下载的图片：设计由排版、细线和 lucide 图标构成；favicon 用 SVG 绘制。不要获取或热链任何内容。
- 图片（image）：在项目根目录写入 ASSETS.md，列出代码绘制的资产（图标槽、chip、favicon——“代码绘制，原创”）以及 npm 包：@fontsource-variable/figtree 和 @fontsource/ibm-plex-mono（OFL-1.1）以及 lucide-react（ISC）。
- 图标（icon）：仅使用 lucide-react：ArrowRight、Bell、CalendarDays、Check、ChevronDown、CreditCard、Rocket、Search、Settings、ThumbsDown、ThumbsUp、Users。描边宽度 1.75，16–24px，颜色继承。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的圆角方块填充 #2C55E0，一个白色绘制的对话气泡带一个小问号点。不使用品牌 logo。
- 字体（font）：安装 @fontsource-variable/figtree 和 @fontsource/ibm-plex-mono，并按 Setup 中所列在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包进 dist/。

## 禁止事项（Don'ts）
- 不涉及后端、不提交表单、不向 API 发起 fetch 请求：搜索、投票和联系表单仅在客户端运行，数据持久化在 localStorage 中，文案也如实说明这一点。
- 每个内部链接都指向具体文件名（./index.html、./category.html?c=bookings、./article.html?a=pay-refunds）——绝不指向裸目录；不带查询参数的 category.html 显示第一个分类，article.html 显示第一篇文章，绝不出现错误页。
- 不使用真实的帮助中心、SaaS 产品、聊天组件供应商或其文案；产品、文章和支持地址均为虚构，且由变量派生。
- 任何地方都不出现日期：不写“updated 2 weeks ago”，不写版本日期；计数和评分（如有）为虚构的示例数据，且不进入正文。
- 不使用照片、人物、头像；文章署名写作“the [BRAND] team”，不带首字母圆圈。
- 任何地方都不使用 lorem：全部十六篇文章完整、可信，且针对产品短语具体撰写。
- 一切资源自托管：字体通过 Fontsource 引入，图标以 npm 包或内联 SVG 形式使用。不使用 CDN 的 <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具。
- 生产构建：压缩，不生成 source map，不将 src/ 复制进 dist/，使用单条命令 npm run build，输出位于 dist/ 且小于 5 MB。
- 除页脚署名链接外，绝不在站内提及 VibeFather；所有文案均为虚构的美式英语。
- 尊重 prefers-reduced-motion：不做入场动画、不做滑动圆点、不做 chip 上浮；一切保持静止且功能正常。
- 网站必须在 1440x900 桌面端和 390x844 移动端正常工作，控制台零错误；搜索、投票、表单、面包屑和 TOC 锚点仅用键盘即可操作，且焦点环可见。
- 无障碍：搜索结果带有 aria-activedescendant；投票按钮自带标签；文章内标题层级为 h1 后接 h2。

---
— Prompt by VibeFather · https://vibefather.ai/t/help-center-knowledge-base · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
