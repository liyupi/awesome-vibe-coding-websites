> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 管理咨询公司网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [FIRM] 打造的单页网站。该机构是一家位于 [CITY] 的管理咨询公司，专注于 [SPECIALTY]，拥有 [ENGAGEMENTS]+ 个咨询项目（示例）。网站读起来要像合伙人在说话：五个业务领域、六篇洞察文章、三个匿名案例（含示例数据）、四张合伙人肖像（AI 生成的虚构人物）、一条信任背书栏，以及一个在客户端确认的咨询请求表单。单页结构：index.html，包含多个区块（#practices、#insights、#cases、#people、#contact）。一切都在浏览器中运行；不会向任何地方提交数据。

- 受众：营收在 $10M–$200M 之间的公司的 CEO 和 COO，他们需要资深帮助，但不信任大牌咨询公司的作秀。他们会快速浏览，寻找思考力的证据：犀利的文章、带数字的匿名案例、说话像一线操盘手的合伙人。
- 目标：开启咨询对话。访客在十秒内知道专长领域；在两分钟内读完一篇洞察和一个案例，并打开联系表单。
- 语气：合伙人口吻：简短陈述句、真实的取舍、偶尔的冷幽默。绝不使用“synergies”。每个数字都标注为示例。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（MIT）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/spectral（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 react-ts 模板通过 npm create vite@latest 搭建脚手架。项目根目录下只有一个 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将 Design 下的每种颜色以 kebab-case 键添加到 theme.extend.colors（offwhite、mistpaper、inknavy、steel、steel-mist、slate、rule、brassline），并设置 fontFamily display ['Spectral', 'Georgia', 'serif']、sans ['Inter Variable', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 2px，并添加 maxWidth { container: '1200px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/spectral/500.css'、'@fontsource/spectral/600.css' 和 '@fontsource-variable/inter'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（每个字符串、实践、文章、案例、合作伙伴、统计数据及图片路径，均带类型），src/lib/brand.ts（firmSlug = [FIRM] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 firmSlug + '.com'），src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键前缀为 firmSlug + ':'）。
  - 状态：src/store/engagement.ts 是一个小型外部 store（useSyncExternalStore），持有 { area, company, name, email, note, sent }，持久化到 localStorage 键 firmSlug + ':engagement'。
  - 组件位于 src/components/：Header.tsx、Reveal.tsx（Motion whileInView 包装器）、SectionRule.tsx（细线 + 小型大写字母标签）、Footer.tsx；Hero.tsx、Practices.tsx（PracticeCard.tsx 带编号）、Insights.tsx（PostCard.tsx）、Cases.tsx（CaseCard.tsx 带 MetricRow.tsx）、People.tsx（PartnerCard.tsx）、TrustStrip.tsx、EngagementForm.tsx（AreaSelect.tsx、Confirmed.tsx）。src/pages/Home.tsx 组合它们。
  - 在首次构建之前，使用 curl -L -o 将 Assets 下列出的每张图片下载到 public/images/，并使用给定的确切文件名。构建本身从不获取任何内容。
  - public/favicon.svg 如 Assets 所述。index.html：lang en，<meta name='theme-color' content='#FBFAF6'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[FIRM] — [SPECIALTY] consulting in [CITY]</title>。
  - 在项目根目录编写 ASSETS.md，如 Assets 所述。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和四张图片。保持在 8 MB 以下。

## 变量
- [FIRM] — 事务所名称（默认：“Cardinal Measure”）。虚构的事务所名称。用于字标、标题、页脚、电子邮件（partners@ + 不含连字符的 firmSlug + .com）以及 localStorage 键。绝不使用真实事务所。
- [CITY] — 城市（默认：“Boston, Massachusetts”）。事务所所在地。用于标题、主视觉文案和页脚。可以使用真实城市。
- [SPECIALTY] — 专长（默认：“strategy and pricing”）。两个词，命名业务核心。决定标题、第一张业务卡的权重和一个案例。小写。
- [ENGAGEMENTS] — 项目数量（默认：“140”）。示例项目数量，用数字表示。在信任条中带 (sample) 标签使用一次。保持在 60–300。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/management-consulting-firm-website（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 米白（Offwhite）`#FBFAF6` — 全站页面背景。
- 雾纸（Mistpaper）`#F1EFE8` — 交替区块背景（Insights、Trust）、悬停填充。
- 墨海军蓝（Inknavy）`#1C2B36` — 标题与正文文字、页脚背景、首屏遮罩。
- 钢蓝（Steel）`#3E6680` — 主色：强调、按钮、选中状态、指标数字、焦点环。
- 钢雾（Steel Mist）`#E4EBF0` — 选中标签、卡片浅底。
- 石板灰（Slate）`#5F6E78` — 次要文字、说明文字、区块标签。
- 分隔线（Rule）`#DDD9CF` — 1px 细线、卡片边框、输入框边框。
- 黄铜线（Brassline）`#A98A54` — 低调的第二色：业务编号、案例刻度线、小型大写装饰。

### 字体排印（Typography）
- 展示字体：H1、H2、业务标题、案例名称、合伙人姓名、字标 — Spectral 衬线体，董事会般的锐利感：Spectral（OFL），字重 500/600
- 文本与界面：正文、标签、按钮、表单、说明文字；指标使用等宽数字：Inter（OFL），字重 400/600/700

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。容器最大宽度 1200px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面端 112px、1024px 以下 84px、640px 以下 64px — 一份备忘录的留白。字号阶梯：H1 clamp(44px, 6.4vw, 84px) Spectral 500，行高 1.04；H2 clamp(30px, 4vw, 50px) Spectral 500；业务标题 22px Spectral 600；指标数字 Spectral 600 40px Steel 等宽数字；导语 Inter 400 17.5px / 1.65 Inknavy 90% 不透明度；正文 15.5px / 1.7（最大宽度 64ch）；区块标签 Inter 700 11px 大写 字距 0.22em Slate；说明文字 13px Slate。按钮：高度 50px，Inter 700 14px。主按钮：Steel 填充、Offwhite 文字。次按钮：1px Inknavy 边框。输入框：高度 50px，1px Rule 边框，Offwhite 填充，聚焦时 Steel 边框。全局焦点环：2px Steel 轮廓，偏移 3px。
- 圆角：卡片、按钮、输入框和照片均为 2px — 备忘录式边角。仅胶囊标签和区域选择标签使用 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于入场显现；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于表单切换。克制、合伙人节奏。
- 动效：显现：包裹在 <Reveal> 中的区块初始 opacity 0、translateY(12px)，当 12% 可见时（Motion whileInView，viewport once）以 700ms --ease-out 落定。同级元素错开 70ms。
- 动效：首屏：作战室照片略微变暗并落定；H1 各行上移 16px，错开 130ms；一条 1px Brassline 线在专长词下方绘制。
- 动效：业务卡片：黄铜编号按 01–05 顺序计数一次；悬停时一条 2px Steel 线从左侧滑入。
- 动效：Insights 网格：卡片以 4px 上移显现；悬停时标题下方绘制下划线，阅读时长刻度变为 Brassline。
- 动效：案例：指标数字在进入视图时计数一次（600ms）；(sample data) 说明文字从不动画。
- 动效：合伙人：悬停时肖像缩放至 1.03，一句话简介交叉淡入。
- 动效：Engagement：区域标签选中时从 Steel Mist 填充为 Steel；无效提交抖动 4px 并显示内联标签；发送时切换为 Confirmed（300ms --ease-io）— 一枚绘制的 Steel 'RECEIVED' 备忘录印章缩放进入，'Thank you, [NAME].' 和 'A partner replies within two business days — with questions, not a deck.'
- 动效：链接：.link-draw 在悬停和 focus-visible 时以 260ms 生长出 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 无计数、绘制、缩放或错开；一切静止；颜色/边框悬停保留。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：真实摄影，四张均为本模板以统一风格制作：阴天窗光的董事会会议室、墨海军蓝世界、资深沉稳感。首屏展示一场合伙人作战室会议（AI 生成的虚构人物围坐文件桌讨论中 — 无可读文字）；合伙人肖像是同一光线下的 AI 生成虚构顾问；一张细节照片展示一份批注过的文件（抽象标记，无可读文字）。任何地方都没有客户标志，没有可读文字。每张照片使用 object-fit cover，object-position 按 Assets 下所给，2px 圆角，无阴影。说明文字为 Inter 13px Slate。代码绘制：favicon、业务编号、RECEIVED 印章、标签和指标行。图标：仅 lucide-react，描边宽度 1.75。

## 页面与区块
### 公司主页（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值撰写（[FIRM] = Cardinal Measure，[CITY] = Boston, Massachusetts，[SPECIALTY] = strategy and pricing，[ENGAGEMENTS] = 140）。将每个字符串和数字放入 src/content.ts 并从中渲染。若任何变量值不同，请重写主视觉、全部五项业务、六条洞察标题+摘要、三个案例及指标、四位合伙人、信任条和联系文案，使其对新公司具体可信，保持相同结构和数量。所有客户匿名化为行业；每个指标标注“(sample data)”。业务：1 ‘Strategy’ ‘where to play, what to refuse — decided in weeks, not quarters’；2 ‘Pricing’ ‘the profit lever nobody pulls; we pull it with data’；3 ‘Operations’ ‘throughput, quality, and the meetings that block both’；4 ‘Org design’ ‘fewer layers, clearer owners, kinder exits’；5 ‘Due diligence’ ‘the operational truth behind the data room’。洞察（标题 · 摘要 · 阅读时长）：‘The Pricing Audit Nobody Runs’ ‘a 3-week self-diagnostic most $50M companies have never done’ 7 min；‘Strategy Is a Refusal List’ ‘the one-page memo we ask every client to write’ 5 min；‘Your Org Chart Is a Pricing Decision’ ‘why layer count shows up in gross margin’ 6 min；‘The Meeting Inventory’ ‘cutting 30% of standing meetings, safely’ 4 min；‘Diligence Beyond the Spreadsheet’ ‘walking the floor before signing’ 8 min；‘Renewals Are a Product’ ‘treating churn as a design brief’ 6 min。案例：‘Food & beverage, $60M revenue’ ‘pricing architecture for a premium grocery brand’ — ‘+4.2 pts gross margin in 2 quarters (sample)’；‘Industrial services, 400 field techs’ ‘dispatch and routing redesign’ — ‘−18% response time, same headcount (sample)’；‘Software, Series C’ ‘post-acquisition org integration’ — ‘6-week integration, zero attrition of leads (sample)’。合伙人：‘p-elena.webp’ ‘Elena Vasquez’ ‘Managing partner · strategy’ ‘Ex-operator; allergic to 60-slide decks.’；‘p-james.webp’ ‘James Okafor’ ‘Partner · pricing’ ‘Econometrician who explains it over coffee.’；‘p-sunna.webp’ ‘Sunna Kim’ ‘Partner · operations’ ‘Factory floors, data rooms, no theatrics.’；‘p-diego.webp’ ‘Diego Marín’ ‘Partner · diligence’ ‘Reads balance sheets like floor plans.’。信任条：‘[ENGAGEMENTS]+ engagements (sample)’；‘6 senior consultants, no pyramid staffing’；‘Sectors: food, industrial, software’；‘Avg. engagement: 8 weeks’。
   布局：不适用
   动效：不适用
2. **页眉** — 左侧：字标‘[FIRM]’（Spectral 600 19px）链接至 ./index.html。右侧导航（Inter 600 13px 大写字母加字距）：‘Practices’ → #practices，‘Insights’ → #insights，‘Cases’ → #cases，‘People’ → #people；一个小号 Steel 色‘Start an engagement’ → #contact。760px 以下：字标 + 联系按钮。
   布局：顶部粘性，高度 70px，Offwhite/95% 模糊，Rule 边框。
3. **主视觉** — 全出血 warroom.webp（88svh，最小 600px），覆盖 Inknavy 渐变。眉题（bone 70%）：‘MANAGEMENT CONSULTING · [CITY]’。H1 两行：‘Senior thinking,’ / ‘*on an 8-week clock.*’ 导语（bone 85%，最大宽度 520px）：‘[FIRM] is six partners who have run the operations we now improve — [SPECIALTY], priced flat, staffed senior, finished on time.’ 主按钮‘Start an engagement’ → #contact 和照片上次按钮‘Read the insights’ → #insights。底部条带 Inknavy/70%：‘Flat fees, agreed up front’ · ‘Partners do the work’ · ‘[ENGAGEMENTS]+ engagements (sample)’。
   布局：照片 object-position 50% 45%；渐变 Inknavy 0.55→0.2→0.9；内容锚定左下，上移 112px。
4. **业务** — 区块 id='practices'。SectionRule ‘PRACTICES’。五张编号卡片，编辑式行布局（brass 01–05）：列出各业务及标题和摘要。一行低调说明：‘Every engagement starts with a two-week diagnostic — priced flat, useful even if you stop there.’
   布局：Offwhite 背景。五张卡片错落 12 列布局（3+2 行），Mistpaper 上细线边框；编号 Brassline Spectral 28px。
5. **洞察** — 区块 id='insights'。SectionRule ‘INSIGHTS’。3x2 网格 PostCards：标题（Spectral 600 19px）、摘要（15px Slate）、阅读时长说明；悬停绘制下划线。文本链接‘All writing lives here — the archive is the pitch deck’（占位符‘#’）。
   布局：Mistpaper 背景；3 列 20px 间距（900px 以下 2 列，640px 以下 1 列）；卡片 Rule 边框，Offwhite 背景。
6. **案例** — 区块 id='cases'。SectionRule ‘CASES (ANONYMIZED)’。三张 CaseCards：行业行（小型大写 Slate）、项目标题（Spectral 22px）、一行 MetricRow，样本数字递增计数（Spectral 40px Steel 等宽数字）和‘(sample data)’说明。结尾一行：‘References available under NDA — the numbers above are illustrative composites.’
   布局：Offwhite 背景；三列 24px 间距；指标顶部细线。
7. **团队** — 区块 id='people'。SectionRule ‘PEOPLE’。四张 PartnerCards：肖像（4:3，悬停缩放 1.03）、姓名、职位小型大写、悬停交叉淡入淡出一句话。一则说明：‘The people who sell the work do the work. No pyramid, no bait-and-switch.’
   布局：Mistpaper 背景；四列 24px 间距；肖像 Rule 描边，2px 圆角。
8. **信任、联系与页脚** — TrustStrip 在 Offwhite 上：四项统计在细线行中，等宽数字，标注样本。区块 id='contact'。SectionRule ‘CONTACT’。EngagementForm 在 Card 上：AreaSelect（五项业务作为标签）、公司、姓名、邮箱、备注（占位符‘What''s the problem, in two sentences?’）；主按钮‘Request the conversation’，说明‘Saved in this browser — the real page emails the partners. Nothing is sent here.’ 确认后：RECEIVED 印章，‘Thank you, [NAME].’ ‘A partner replies within two business days — with questions, not a deck.’ 业务回显，‘Edit’ 预填；持久化到 localStorage。页脚（Inknavy，bone 文字）：字标、‘[SPECIALTY] consulting · [CITY]’、partners@ + emailDomain、锚点；底行‘© [FIRM]. Case figures are sample composites.’
   布局：信任细线行 56px；表单最大宽度 620px；页脚三部分，底行在 bone/10% 分隔线上方。

## 资源

- 图片：为本设计制作的模板照片（可随模板自由再分发）。用 curl -L -o 将每个文件下载到 public/images/：https://media.vibefather.ai/assets/2b385578-4d36-42f5-8fd5-4156a1f36ca8/warroom.webp → public/images/warroom.webp（Hero；object-position 50% 45%；alt 'Partners mid-discussion around a document table, fictional consultants'）；https://media.vibefather.ai/assets/2b385578-4d36-42f5-8fd5-4156a1f36ca8/p-elena.webp → public/images/p-elena.webp（Partner Elena；alt 'Elena Vasquez, a fictional consultant'）；https://media.vibefather.ai/assets/2b385578-4d36-42f5-8fd5-4156a1f36ca8/p-james.webp → public/images/p-james.webp（Partner James；alt 'James Okafor, a fictional consultant'）；https://media.vibefather.ai/assets/2b385578-4d36-42f5-8fd5-4156a1f36ca8/p-sunna.webp → public/images/p-sunna.webp（Partner Sunna；alt 'Sunna Kim, a fictional consultant'）；https://media.vibefather.ai/assets/2b385578-4d36-42f5-8fd5-4156a1f36ca8/p-diego.webp → public/images/p-diego.webp（Partner Diego；alt 'Diego Marín, a fictional consultant'）；https://media.vibefather.ai/assets/2b385578-4d36-42f5-8fd5-4156a1f36ca8/document-detail.webp → public/images/document-detail.webp（Cases 侧边小图；alt 'A marked-up document with abstract annotations'）。共六个文件。
- 图片：在项目根目录写入 ASSETS.md，包含一个表格：路径、来源 URL、作者、许可证——每张照片一行（来源 'media.vibefather.ai, made for this template'，作者 'VibeFather'，许可证 'Distributed with the template'），另加 @fontsource/spectral 和 @fontsource-variable/inter（OFL-1.1）以及 lucide-react（ISC）的行。根据肖像规则，照片中的所有人物均为 AI 生成的虚构顾问；任何地方都没有客户标志或可读文字。
- 图标：仅使用 lucide-react：ArrowUpRight、ArrowRight、Check、Plus。描边宽度 1.75，16–24px，颜色继承——克制使用。业务领域编号、RECEIVED 印章、标签（chips）和 favicon 均为绘制的 SVG。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的方块填充 #1C2B36，一个 Brassline（#A98A54）的测量标尺字形（一条对角线带两个刻度）。没有其他标志：事务所名称始终以文字排版呈现。
- 字体：安装 @fontsource/spectral 和 @fontsource-variable/inter，并在 src/fonts.ts 中按 Setup 所列导入它们。Vite 会将 woff2 文件打包进 dist/。
- 图片：在代码中绘制：业务领域编号、RECEIVED 印章、标签（chips）、度量标线和 favicon。除六张照片外没有其他位图；没有插图；没有地图瓦片。

## 禁止事项
- 无后端、无表单提交、不向任何 API 发起 fetch 请求：合作请求仅保存在浏览器中（localStorage），并明确说明这一点。
- 此单页上的所有链接均为锚点（./index.html#practices、#insights、#cases、#people、#contact）以及页脚的 mailto。
- 不使用真实公司、客户或可识别的合作成果：案例保持按行业匿名化，并标注为（示例数据）合成内容；不出现任何客户 logo 或字标风格的标记。
- 一切资源自托管：字体通过 Fontsource，图标以 npm 包或内联 SVG 形式引入，图片下载至 public/images/。不使用 CDN 的 <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具。
- 生产构建：压缩、无 source map、不将 src/ 复制到 dist/，单一命令 npm run build，输出在 dist/ 下且小于 8 MB。
- 合伙人肖像为 AI 生成的虚构人物，非任何真实个人；任何照片中无可读文字；文档注释保持抽象。
- 任何地方不出现日期或年份；洞察内容标注阅读时长而非日期；网站从不显示当天日期。
- 除页脚可选的署名链接外，网站内绝不提及 VibeFather 或任何其他品牌；所有文案均为虚构的美式英语。
- 尊重 prefers-reduced-motion：无计数、绘制、缩放或交错动画；一切处于静止状态；颜色/边框悬停效果保留。
- 页面必须在 1440x900 桌面端和 390x844 移动端正常工作，控制台零错误；标签和表单仅用键盘即可操作，并有可见的焦点环。
- 文案保持合伙人语气：无 lorem，无“synergies”；每个指标和统计数据都存放在 src/content.ts 中并带有其示例标签。

---
— Prompt by VibeFather · https://vibefather.ai/t/management-consulting-firm-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
