> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 建筑公司网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为您自己的值；其余内容保持不变。

## 简介
为 [COMPANY] 打造的单页网站，[COMPANY] 是 [CITY] 的一家建筑与翻新公司——从事 [TRADE] 已有 [YEARS] 年。它必须看起来像一家会把自己收拾干净的的公司：四项服务并附起价、一个可筛选的六项目图库、一条朴素的安全/资质信息条、一个五步流程，以及一个在客户端确认的报价请求。单页：index.html，包含各区块（#services、#work、#safety、#process、#quote）。一切都在浏览器中运行；不会提交到任何地方。

- 受众：35–65 岁的房主，有翻新预算，并且有一段关于他们表亲的承包商的恐怖故事。他们想要完工成果的证明、直截了当的价格信号，以及一个能指名道姓负责的人。
- 目标：产生报价请求。访客在十秒内看到工艺和报价 CTA；在两分钟内，他们已将图库筛选到自己的项目类型并打开了表单。
- 语气：直截了当的建筑工式谈话：短句、精确数字、自豪但不张扬。一个关于灰尘的笑话。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（MIT）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/barlow-condensed（OFL-1.1）、@fontsource-variable/barlow（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 使用 react-ts 模板通过 npm create vite@latest 搭建脚手架。项目根目录下有一个 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist'，sourcemap false，assetsInlineLimit 0 }。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将 Design 下的每种颜色添加到 theme.extend.colors 中，使用 kebab-case 键名（scaffoldwhite、mist、card、blueprint、blueprint-deep、blueprint-mist、ink、slate、safety、safety-deep、rule、good），并设置 fontFamily display ['Barlow Condensed', 'Arial Narrow', 'sans-serif']、sans ['Barlow Variable', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 4px，并添加 maxWidth { container: '1200px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/barlow-condensed/500.css'、'@fontsource/barlow-condensed/600.css' 和 '@fontsource-variable/barlow'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（每个字符串、服务、项目、步骤、凭证、营业时间和图片路径，带类型）、src/lib/brand.ts（companySlug = [COMPANY] 转为小写，并将每一段非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 companySlug + '.com'，phoneDigits 用于 tel:）、src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键前缀为 companySlug + ':'）、src/lib/gallery.ts（applyCategory(projects, key)）。
  - 状态：src/store/quote.ts 是一个小型外部存储（useSyncExternalStore），持有 { type, budget, timeline, name, phone, email, note, sent }，持久化到 localStorage 键 companySlug + ':quote'。
  - src/components/ 中的组件：Header.tsx、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、Footer.tsx、BlueprintRule.tsx（绘制的尺寸线分隔符）；Hero.tsx、Services.tsx（ServiceCard.tsx）、Work.tsx（FilterChips.tsx、ProjectCard.tsx）、Safety.tsx（CredRow.tsx）、Process.tsx（StepRow.tsx）、CrewNote.tsx、QuoteForm.tsx（TypeChips.tsx、BudgetPills.tsx、Sent.tsx）。src/pages/Home.tsx 组合它们。
  - 在首次构建之前，使用 curl -L -o 将 Assets 下列出的每张图片下载到 public/images/ 中，并使用给定的确切文件名。构建本身从不获取任何内容。
  - public/favicon.svg 如 Assets 下所述。index.html：lang en，<meta name='theme-color' content='#F7F8F9'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[COMPANY] — [TRADE] in [CITY]</title>。
  - 在项目根目录下编写 ASSETS.md，如 Assets 下所述。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张图片。保持在 10 MB 以下。

## 变量
- [COMPANY] — 公司名称（默认：“Rourke & Sons”）。虚构的公司名称。用于字标、标题、页脚、电子邮件（build@ + 不含连字符的 companySlug + '.com'）和 localStorage 键。绝不是真实公司。
- [CITY] — 城市（默认：“Pittsburgh, Pennsylvania”）。公司开展业务的地方。用于标题、主视觉区、项目街区和页脚。真实城市可以；街道为虚构。
- [TRADE] — 行业（默认：“renovations and additions”）。一个命名核心业务的小写短语。驱动标题、第一张服务卡片和一个案例。保持简洁。
- [YEARS] — 经营年限（默认：“18”）。两位数年份。在信任条和主视觉区眉题中各使用一次。保持在 8–40。
- [CREDIT] — 在页脚保留一个指向 https://vibefather.ai/t/construction-company-website 的小型“Template by VibeFather”链接（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- Scaffold White `#F7F8F9` — 全站页面背景。
- Mist `#EDF0F2` — 交替区块背景（Services、Process）、标签、悬停填充。
- Card `#FFFFFF` — 项目卡片、报价面板、已发送状态。
- Blueprint `#1F3A5F` — 主色：标题文字、主按钮、选中标签、步骤编号、焦点环。
- Blueprint Deep `#162B47` — 悬停与按下状态、页脚背景。
- Blueprint Mist `#E4EAF2` — 选中标签填充、图标槽、尺寸刻度。
- Ink `#23272C` — 正文文字、图标颜色。
- Slate `#5B6670` — 次要文字、说明文字、眉题、不可用状态。
- Safety `#F26B21` — 唯一强调色：报价 CTA、起价、筛选激活态、尺寸数字、focus-visible 附加样式。
- Safety Deep `#D5560E` — CTA 悬停与按下。
- Rule `#D9DEE3` — 1px 细线、卡片边框、输入框边框、蓝图网格线。
- Good `#2F855A` — 资质勾选、已发送对勾、保修说明。

### 字体排印
- 展示字体：H1、H2、服务名称、项目名称、起价、字标 — Barlow Condensed，结实而务实：Barlow Condensed（OFL），字重 500/600
- 文本与 UI：正文、眉题、按钮、表单、说明文字；价格与跨度使用等宽数字：Barlow（OFL），字重 400/600/700

### 布局与动效
- 间距：8px 基准单位。容器最大宽度 1200px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面端 100px、1024px 以下 76px、640px 以下 60px。字号比例：H1 clamp(44px, 6.6vw, 84px) Barlow Condensed 600 大写，行高 0.98；H2 clamp(30px, 4vw, 50px) Condensed 600 大写；服务名称 Condensed 600 22px；起价 Condensed 600 24px Safety 等宽数字；导语 Barlow 400 17.5px / 1.65 Ink 90%；正文 15.5px / 1.7（最大宽度 64ch）；眉题 Barlow 700 12px 大写 字距 0.18em Slate；说明文字 13px Slate。按钮：高度 52px，Barlow 700 14px 大写 字距 0.06em。主按钮：Blueprint 填充，Card 文字。报价 CTA：Safety 填充，Card 文字。次按钮：1px Ink 边框。输入框：高度 50px，1px Rule 边框，Card 填充，聚焦时 Blueprint 边框。全局焦点环：2px Blueprint 轮廓，偏移 3px。
- 圆角：卡片、按钮、输入框、标签和照片均为 4px — 场地平面图式的转角。仅胶囊和筛选标签使用 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现和画廊重排；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于表单切换。平稳而确定。
- 动效：显现：包裹在 <Reveal> 中的区块初始 opacity 0、translateY(12px)，在 12% 可见时（Motion whileInView，viewport once）以 650ms --ease-out 落定。同级元素错开 65ms。
- 动效：首屏：项目照片从 1.03→1.0 缩放，历时 2000ms；H1 上升 14px；眉题下方绘制一条尺寸线，带 Safety 刻度数字，仅一次。
- 动效：服务卡片：悬停时一条 2px Blueprint 线从左侧滑入，起价上移 2px。
- 动效：画廊筛选：卡片使用 Motion layout popLayout（200ms 退出 / 380ms 滑行）；实时计数交叉淡入淡出；空状态显示 'No projects in that combination yet — the portfolio grows weekly.'
- 动效：项目卡片：悬停上浮 3px，分类标签填充 Blueprint。
- 动效：流程：连接线随区块滚动向下绘制；步骤编号依次弹出。
- 动效：报价表单：标签选中时从 Blueprint Mist→Blueprint 填充（150ms）；无效提交抖动 4px 并显示内联标签；发送时切换为 Sent（300ms --ease-io）— 一枚绘制的 Safety 'ON THE BOARD' 工单印章从 -6deg→-2deg 旋转进入，'Got it, [NAME].' 'We call within two business days to schedule the walkthrough.' 选择回显，'Edit the request' 预填。持久化到 localStorage。
- 动效：链接：.link-draw 在悬停和 focus-visible 时以 250ms 生长出 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 无缩放、绘制、重排或印章；一切静止；颜色/边框悬停保留。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：真实摄影，全部六张为本模板以统一风格制作：清透日光、完工的工艺质感和真实的工地细节 — 通用无品牌工具与材料，无标识。站点负责人肖像为 AI 生成的虚构人物（臂下夹安全帽，手持图纸）— 占位图，真实公司可替换为其负责人的照片。无可读文字或标牌。每张照片使用 object-fit cover，object-position 见 Assets 部分，4px 圆角，无阴影。说明文字为 Barlow 13px Slate。代码绘制：favicon、尺寸线分隔符、工单印章、标签和筛选圆点。图标：仅 lucide-react，描边宽度 2。

## 页面与区块
### 公司（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[COMPANY] = Rourke & Sons，[CITY] = Pittsburgh, Pennsylvania，[TRADE] = renovations and additions，[YEARS] = 18）。将每个字符串和数字放入 src/content.ts 并从中渲染。若任何变量值不同，请重写主视觉、四项服务、六个项目、安全行、五个步骤和报价文案，使其对新公司具体且可信，同时保持相同的结构和数量。所有项目、客户和数字均为虚构；前后对比说明描述的是工作内容，而非地址。事实：地址 '2210 Forge Street, [CITY]' 为虚构；电话 (412) 555-0182；办公时间周一至周五 7:00–17:00；许可证 'GC-4471 (invented)'；全额保险，$2M 一般责任险；五人团队加持证分包商；两年工艺保修。服务：'Whole-home renovations' 'kitchens, baths, floors and the walls between them' 起价 $18,000；'Additions' 'sunrooms, dormers and the permits that come with them' 起价 $45,000；'Kitchens & baths' 'the two rooms that sell a house and start a marriage debate' 起价 $12,000；'Exteriors' 'decks, porches, siding and roofs that keep the rain honest' 起价 $6,500。项目（名称 · 类别 · 备注 · 数字）：'The Squirrel Hill double-gable' Additions 'a dormer that paid for itself in bedrooms' 14 周；'A millworker''s kitchen' Renovation 'quarter-sawn oak, quiet hardware, zero trends' 9 周；'The brick row-house gut' Renovation 'down to the joists, back to better' 16 周；'Forge Street deck & pergola' Exteriors 'steel-footed, snow-rated, dinner-tested' 3 周；'The sunroom that replaced the porch' Additions 'four seasons, one skylight argument, settled' 7 周；'Bathroom, re-plumbed' Renovation 'moved the stack, kept the tile line' 5 周。安全行：'Licensed & insured' 'GC-4471 (invented), $2M liability, certificates on request' Good；'Site safety' 'OSHA-trained crew (generic), dust barriers on every interior job' Good；'Clean sites' 'broom-clean at day''s end; magnet sweep on nails' Good；'Two-year warranty' 'workmanship, in writing, on every invoice' Good。流程：1 'Walkthrough & estimate' 'we measure, listen, and price in ranges before quoting'；2 'Scope & contract' 'one page of numbers you can hold us to'；3 'Permits & scheduling' 'we pull them, we sequence them, you get a calendar'；4 'Build weeks' 'daily photos to your phone, weekly walkthroughs'；5 'Punch list & clean' 'we leave it better than the drawings, or we aren''t done'。
   布局：不适用
   动效：不适用
2. **页眉** — 左侧：字标 '[COMPANY]'（Condensed 600 20px 大写）位于 '[TRADE] · [CITY]'（10px 大写 Slate）之上，链接至 ./index.html。右侧导航（Barlow 600 13px 大写）：'Services' → #services，'Our work' → #work，'Safety' → #safety，'Process' → #process；一个小号 Safety 'Get a quote' → #quote。低于 780px：字标 + 报价按钮。
   布局：顶部粘性，高度 70px，Scaffold White/95% 模糊，Rule 边框。
3. **主视觉** — 两栏。左侧：眉题 'EST. [YEARS] YEARS · [CITY]'；H1 'BUILT RIGHT.' / '*CLEANED UP AFTER.*' 导语（最大宽度 500px）：'[COMPANY] does [TRADE] with a five-person crew, daily photos and a broom-clean site every evening — quoted flat, finished on the calendar we hand you.' 主按钮 'Get a quote' → #quote 和次按钮 'See the work' → #work；信任行：'Flat quotes, in writing'；'Two-year warranty'；'Daily photo updates'。右侧：work-kitchen.webp（4:3），配文 'A millworker''s kitchen, week nine'。
   布局：Scaffold White 背景，顶部垂直内边距 104px；左侧 6 列，右侧 5 列偏移 1。
4. **服务** — 区块 id='services'。眉题 'WHAT WE BUILD' 和 H2 'FOUR TRADES, ONE CREW.' 四个 ServiceCards（图标、名称、一行说明、起价）：即名册。配文：'Every price is a starting point we sharpen after the walkthrough — never a hook.'
   布局：Mist 背景。2x2 网格 20px 间距；卡片在 Card Rule 边框上；起价用 Safety Condensed。
5. **作品** — 区块 id='work'。眉题 'RECENT WORK' 和 H2 'SIX PROJECTS, FILTERED HONESTLY.' FilterChips（All · Renovation · Addition · Exterior）带实时计数；六个 ProjectCards（照片 4:3，名称 Condensed，备注，周数徽章）：即名册；筛选时重新排列。结尾行：'Addresses withheld, references gladly shared — ask on the walkthrough.'
   布局：Scaffold White 背景。3x2 网格 20px 间距（900px 以下为 2 列）；周数徽章为 Blueprint-mist 药丸形。
6. **安全与团队说明** — 区块 id='safety'。眉题 'LICENSED, INSURED, TIDY' 和 H2 'THE BORING STUFF, DONE RIGHT.' 四个 CredRows 带 Good 勾选：即名册。旁边是 CrewNote：lead-ray.webp 肖像（3:4，blueprint-mist 边框），配文 'Ray Rourke, site lead — a fictional builder' 和说明：'Ray runs every job you''ve seen above. Ask him about the deck that survived four winters and one graduation party (sample story).' 下方信任条：'[YEARS] years · ~300 projects (sample) · two-year workmanship warranty'。
   布局：Mist 背景。Cred 行 7 列细线分隔；说明 4 列偏移 1，肖像置于上方；信任条为细线边界行。
7. **流程与报价表单** — 区块 id='process'。眉题 'HOW IT GOES' 和 H2 'FIVE STEPS, NO MYSTERY.' 五个 StepRows 带绘图连接线。区块 id='quote'。眉题 'GET A QUOTE' 和 H2 'TELL US WHAT YOU''RE DREAMING.' QuoteForm 在 Card 上：TypeChips（四项服务）；BudgetPills（'Under $15k' / '$15–50k' / '$50–100k' / '$100k+'）；时间线选择（'ASAP' / 'This season' / 'Planning ahead'）；姓名 + 电话 + 邮箱；备注文本域（占位符 'The room, the problem, the Pinterest board — any of it helps.'）；主按钮 Safety 'Request the quote'，配文 'Saved in this browser — the real page emails the office. Nothing is sent here.' 已发送：ON THE BOARD 印章，'Got it, [NAME].' 'We call within two business days to schedule the walkthrough.' 类型/预算回显，'Edit the request' 预填。持久化在 localStorage。页脚（Blueprint Deep，bone 文字）：字标，'[TRADE] · [CITY] · [YEARS] years'，'2210 Forge Street'，(412) 555-0182 tel:，build@ + emailDomain；底行 '© [COMPANY]. Figures are sample data; the dust jokes are real.'
   布局：流程最大宽度 760px；报价面板最大宽度 640px；页脚三部分行带底行。

## 资产
- 图片：为本设计制作的模板照片（可随模板自由再分发）。用 curl -L -o 将每个文件下载到 public/images/：https://media.vibefather.ai/assets/be395f9c-fe2c-45e3-ab70-797207f645fb/work-kitchen.webp → public/images/work-kitchen.webp（Hero、厨房项目卡片；alt 'A finished craftsman kitchen with oak cabinets and stone counters'）；https://media.vibefather.ai/assets/be395f9c-fe2c-45e3-ab70-797207f645fb/work-dormer.webp → public/images/work-dormer.webp（Additions 卡片；alt 'A new dormer gable on a brick family home'）；https://media.vibefather.ai/assets/be395f9c-fe2c-45e3-ab70-797207f645fb/work-gut.webp → public/images/work-gut.webp（Renovation 卡片；alt 'A gutted row-house interior with new framing exposed'）；https://media.vibefather.ai/assets/be395f9c-fe2c-45e3-ab70-797207f645fb/work-deck.webp → public/images/work-deck.webp（Exteriors 卡片；alt 'A steel-footed cedar deck with a pergola at dusk'）；https://media.vibefather.ai/assets/be395f9c-fe2c-45e3-ab70-797207f645fb/work-bath.webp → public/images/work-bath.webp（Renovation 卡片；alt 'A re-plumbed bathroom with subway tile and brass fixtures'）；https://media.vibefather.ai/assets/be395f9c-fe2c-45e3-ab70-797207f645fb/lead-ray.webp → public/images/lead-ray.webp（Crew note；alt 'Ray Rourke, a fictional builder, hard hat under arm'）。共六个文件。
- 图片：在项目根目录写入 ASSETS.md，包含一个表格：path、source URL、author、license——每张照片一行（source 'media.vibefather.ai, made for this template'，author 'VibeFather'，license 'Distributed with the template'），另加 @fontsource/barlow-condensed 和 @fontsource-variable/barlow（OFL-1.1）以及 lucide-react（ISC）的行。site-lead 肖像是按肖像规则生成的 AI 虚构人物；工具和材料保持通用/无品牌；无可读标识。
- 图标：仅 lucide-react：Hammer、Home、ChefHat、Layers、FileCheck、ShieldCheck、Camera、Broom、Check、Plus。描边宽度 2，16–24px，颜色继承。尺寸线分隔线、ON THE BOARD 印章、chips 和 favicon 为绘制的 SVG。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的方块填充 #1F3A5F，一个 Safety（#F26B21）房屋山墙轮廓，带一个 Card（#FFFFFF）尺寸刻度。无其他 logo：公司名称始终以文字排版呈现。
- 字体：安装 @fontsource/barlow-condensed 和 @fontsource-variable/barlow，并按 Setup 中所述在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包进 dist/。
- 图片：在代码中绘制：带 Safety 刻度的尺寸线分隔线、job-ticket 印章、chips、筛选圆点和 favicon。除六张照片外无其他位图；无插图；无地图瓦片。

## 禁止事项
- 无后端、无表单提交、不向任何 API 发起 fetch 请求：报价请求仅保存在浏览器中（localStorage）并明确说明这一点；tel: 链接由电话号码数字构建。
- 此单页上的所有链接均为锚点（./index.html#services、#work、#safety、#process、#quote）加上页脚 mailto。
- 不使用真实公司、客户、地址或项目地点；许可证和保险以通用方式描述并使用虚构编号；不使用 OSHA 或认证机构标志——仅使用勾选标记和文字。
- 全部自托管：字体通过 Fontsource，图标作为 npm 包或内联 SVG，图片下载到 public/images/。不使用 CDN <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具。
- 生产构建：压缩，无 source maps，不将 src/ 复制到 dist/，单条命令 npm run build，输出在 dist/ 下且小于 10 MB。
- 站点负责人肖像为 AI 生成的虚构人物，非任何真实个人；照片中不出现其他人物；工具、材料或货车上无可读文字、标牌或品牌标记。
- 除 'EST. [YEARS] YEARS' 外，任何地方不出现日期或年份；项目以周数标注，绝不使用日期；站点永不显示当天日期。
- 除可选的页脚署名链接外，站点内绝不提及 VibeFather 或任何其他品牌；所有文案均为虚构的美式英语。
- 尊重 prefers-reduced-motion：不使用缩放、绘制、洗牌或盖章效果；一切处于静止状态；颜色/边框悬停效果保留。
- 页面必须在 1440x900 桌面端和 390x844 移动端正常工作且控制台零错误；标签、选择器和表单仅用键盘即可操作，并具有可见的焦点环。
- 保持文案简洁直白：不使用 lorem，不使用“梦想空间”之类的陈词滥调；每个价格、周数和资质都存放在 src/content.ts 中。

---
— Prompt by VibeFather · https://vibefather.ai/t/construction-company-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
