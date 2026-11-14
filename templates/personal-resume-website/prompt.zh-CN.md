> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 个人简历网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [NAME] 制作的一页式简历网站，[NAME] 是一名在 [FIELD] 领域工作的 [ROLE]，常驻 [BASE]。它必须在屏幕上从上到下读起来像一份出色的一页式文档，打印出来也同样如此：摘要、经历时间线（年份区间，每段两条要点）、分级技能、三个项目、教育与认证、联系方式链接，以及一个 Download PDF 按钮，点击后在专用 A4 样式表上打开打印对话框。单页：index.html，包含各区块（#experience、#skills、#projects、#education）。一切都在浏览器中运行；不会向任何地方提交数据。

- 受众：在会议间隙用手机快速浏览的招聘人员，以及稍后认真阅读的招聘经理。六秒钟获取头条事实，六十秒阅读时间线；被转发出去的是 PDF，所以它必须看起来像是有意设计的，而不是截图。
- 目标：让 PDF 被保存、让日历链接被点击。读者要在十秒内知道角色、领域和从业年限；打印按钮在每种屏幕尺寸下都无需滚动即可见。
- 语气：第一人称，平实而具体。用数字而非形容词，用成就而非职责，不要“passionate”，不要 emoji，只在页脚放一个得体的玩笑。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（MIT）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/source-serif-4（OFL-1.1）、@fontsource-variable/sora（OFL-1.1）、@fontsource/spline-sans-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 react-ts 模板通过 npm create vite@latest 搭建脚手架。项目根目录下只有一个 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4（tailwindcss + postcss + autoprefixer），content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将 Design 下的每种颜色以 kebab-case 键添加到 theme.extend.colors（paper、mist、ink、slate-ink、rule、cobalt、cobalt-deep、cobalt-mist），并设置 fontFamily serif ['Source Serif 4 Variable', 'Georgia', 'serif']、sans ['Sora Variable', 'system-ui', 'sans-serif']、mono ['Spline Sans Mono', 'ui-monospace', 'monospace']。将 borderRadius DEFAULT 设为 8px，并添加 maxWidth { sheet: '880px' } —— 简历宽度，而非营销页面宽度。
  - 在 src/fonts.ts 中导入 '@fontsource-variable/source-serif-4'、'@fontsource-variable/sora' 以及 '@fontsource/spline-sans-mono/400.css'、'@fontsource/spline-sans-mono/500.css'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（每个字符串、年份范围、要点、带等级词的技能、项目、学校、认证和链接，均带类型），src/lib/brand.ts（personSlug = [NAME] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 personSlug + '.com'）。
  - Download PDF 按钮调用 window.print() —— 不使用 PDF 库，不使用 data URL 技巧。打印样式表是 src/index.css 中手写的 @media print 规则（外加少量屏幕/打印类切换），详见 Design motion/print。
  - 组件位于 src/components/：Masthead.tsx（NameBlock.tsx、ContactRow.tsx、PrintButton.tsx）、Summary.tsx、Experience.tsx（Rail.tsx、RoleCard.tsx）、Skills.tsx（SkillGroup.tsx、LevelDots.tsx）、Projects.tsx（ProjectCard.tsx）、Education.tsx、Availability.tsx（仅屏幕显示）、Reveal.tsx（Motion whileInView 包装器）。src/pages/Home.tsx 组合它们。
  - public/favicon.svg 如 Assets 中所述。index.html：lang en，<meta name='theme-color' content='#FFFFFF'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[NAME] — [ROLE]</title>。
  - 在项目根目录编写 ASSETS.md，如 Assets 中所述。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和肖像图。保持在 5 MB 以下。

## 变量
- [NAME] — 姓名（默认："Rowan Ademola"）。候选人的姓名。用于报头、标题、页脚、电子邮件（hello@ + name-slug + .com）以及字标首字母缩写。始终是虚构人物；绝不用真实人物。
- [ROLE] — 职位（默认："Staff Backend Engineer"）。主标题。用于 H1 行、<title>、摘要的第一句以及打印页眉。保持听起来真实的资历 + 专业方向。
- [FIELD] — 领域（默认："payments infrastructure"）。用小写短语表示的领域。驱动摘要、项目主题以及技能中最具体的分组。保持具体（'payments infrastructure'、'design systems'）。
- [BASE] — 所在城市（默认："Berlin, Germany"）。候选人居住和工作的地点（文案中注明可远程）。用于报头、可用性页脚以及一条经历要点的上下文。真实城市可以。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接指向 https://vibefather.ai/t/personal-resume-website（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- Paper `#FFFFFF` — 页面背景；印刷中唯一的背景。
- Mist `#F4F6F8` — 仅屏幕显示的区块底色（技能、教育）和标签；从不打印。
- Ink `#1A1D21` — 标题、正文、轨道线、图标颜色。
- Slate Ink `#565D66` — 次要文本、项目符号正文、说明文字、等级词。
- Rule `#E5E7EB` — 1px 细线、卡片边框、轨道刻度、分隔线。
- Cobalt `#2B4BD8` — 唯一的强调色：链接、PDF 按钮、轨道标记、等级圆点、焦点环、区块眉题。
- Cobalt Deep `#2139AE` — 链接悬停、按钮按下。
- Cobalt Mist `#EDF1FE` — 屏幕上的技能组面板（仅屏幕）；等级圆点轨道。

### 排版
- 展示字体：姓名、H2 区块标题、职位标题、学校名称：Source Serif 4（OFL），字重 600/700
- 文本与 UI：摘要、项目符号、技能、按钮、联系行：Sora（OFL），字重 400/600
- 年份跨度、区块眉题（大写）、位置行、页面提示：Spline Sans Mono（OFL），字重 400/500

### 布局与动效
- 间距：8px 基础单位。纸张最大宽度 880px，居中，侧边内边距桌面端 48px，平板端 32px，640px 以下 20px。单列布局，Experience 左侧有轨道（轨道位于 32px）。区块垂直内边距桌面端 72px，1024px 以下 56px — 简历密度，而非落地页的疏朗。字号比例：姓名 clamp(44px, 7vw, 72px) Source Serif 4 700，行高 1.0；职位行 Sora 600 20px Slate Ink；H2 区块标题 Source Serif 4 700 22px，上方带等宽眉题；正文 Sora 400 15.5px / 1.7（最大宽度 68ch）；项目符号 15px / 1.65；年份跨度 Spline Sans Mono 500 12.5px Cobalt；说明文字等宽 12px Slate Ink。按钮：高度 44px，Sora 600 13.5px。PDF 按钮：Ink 填充，Paper 文字。联系链接：Sora 400 14px Slate Ink，悬停 Cobalt。全局焦点环：2px Cobalt 轮廓，偏移 3px。
- 圆角：卡片、按钮和标签为 8px。轨道标记和等级圆点为圆形（999px）。其他一律不圆角。
- 动效：仅屏幕。打印媒体查询按定义禁用所有动效（动效规则位于屏幕作用域的 CSS 中，组件在打印时以静止状态渲染）。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1)。克制 — 简历应感觉平静。
- 动效：显现：包裹在 <Reveal> 中的区块从 opacity 0、translateY(10px) 开始，在 15% 可见时以 500ms --ease-out 稳定下来（Motion whileInView，viewport once）。同级元素错开 50ms。
- 动效：报头：姓名从 16px 升起；联系行和 PDF 按钮在 150ms 后淡入；职位行的细线从文本向外绘制。
- 动效：Experience 轨道：一条 2px Ink 轨道随区块滚动向下增长（scaleY，对列表使用 useScroll）；每个职位的标记圆点在卡片达到 60% 视图时填充 Cobalt；卡片以标准显现方式稳定下来。
- 动效：等级圆点：当技能组首次进入视图时，五个圆点逐个填充（80ms 错开）— 安静，仅一次。
- 动效：链接：联系和项目链接获得 .link-draw 下划线（220ms）；外部链接箭头在悬停时向右轻推 2px。
- 动效：打印按钮：点击时短暂显示 'Opening print dialog…'，同时 window.print() 触发；在打印样式表中它完全消失。
- 动效：prefers-reduced-motion: reduce — 所有显现以静止状态渲染，轨道显示为完全绘制，无圆点错开。在 index.css 中使用 CSS @media 加上组件中的 Motion useReducedMotion。
- 动效：@media print（手写在 src/index.css 中，非 Tailwind 生成）：@page { size: A4; margin: 14mm 16mm } — 整个页面变成一张流动的纸张：隐藏：打印按钮、可用性页脚、区块底色（Mist 面板打印为白色）、标签的填充和所有交互性提示；正文降至 10.5pt，姓名降至 26pt，H2 降至 13pt 并带 0.5pt 线；experience 轨道打印为带方形标记的细左边线；年份跨度以 Cobalt 打印（浏览器在"打印背景"时保留颜色，但布局必须在没有它的情况下存活：标记和圆点也有 0.5pt 墨色轮廓）；链接打印为文本后跟括号中的 URL，通过 ::after 使用来自 data-print-url 属性的内容（包括 mailto/账号，跳过社交链接）；分页规则：绝不在 RoleCard 或 ProjectCard 内部（break-inside: avoid），纸张目标为一页，若文案增长则优雅地流至两页；仅打印的页脚行，电子邮件通过 position: fixed 打印在页面底部。肖像在报头右栏以 22mm 方形打印。
- 图像：一张 AI 生成的职业肖像（3:4），虚构人物匹配默认候选人 — 构图沉稳的影棚头像，柔和日光，中性暖色背景，商务休闲着装 — 在屏幕上的报头和打印页眉中使用。它是模板占位符：用户替换为自己的照片。无其他照片；线条、轨道、圆点和标签仍以代码绘制。图标：仅 lucide-react，描边宽度 1.75，节制使用。

## 页面与区块
### 简历（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[NAME] = Rowan Ademola，[ROLE] = Staff Backend Engineer，[FIELD] = payments infrastructure，[BASE] = Berlin, Germany）。将每个字符串、年份区间、要点、技能、项目、学校和认证都放入 src/content.ts 并从中渲染。若任一变量值不同，请重写摘要、所有要点、技能组、项目、学校和认证，使其对新候选人具体且可信，同时保持相同的结构和数量（4 段经历，每段 2 个要点；3 个技能组，每组 4–6 项技能；3 个项目；2 行教育经历；2 项认证）。所有雇主、项目和学校均为虚构；年份区间为截至 2025 年的闭区间（不使用与时钟绑定的“present”）。联系方式：hello@ + emailDomain；handle 为 '@' + personSlug（不含连字符）；作品集和日历链接使用 '#' 占位符，并标注为占位符。肖像：portrait-rowan.webp 是一张 AI 生成的虚构人物照片，与默认 [NAME] 匹配（虚构的软件工程师，不 resemblance 任何真实个人）；它是占位符——用户可替换为自己的头像，alt 文本保持通用（'Professional portrait placeholder'）。
   布局：不适用
   动效：不适用
2. **刊头** — 两栏。左栏：姓名（H1）、角色行 '[ROLE] · [FIELD]'（后跟一条细线）以及 ContactRow（Mail、AtSign、MapPin、Link2 图标，同前）。右栏：肖像照片 portrait-rowan.webp——一张 120px 正方形（圆角 8px）的虚构软件工程师职业头像——位于 PrintButton 旁边（主按钮，'Download PDF'，带 Download 图标，说明文字 'A4 · one page · no watermark'）；该照片在打印时也会以 22mm 正方形出现在页眉中。照片位于按钮块左侧 16px 处，与姓名垂直对齐。
   布局：Paper 背景，顶部垂直内边距 96px。两栏：姓名+联系方式块（8 列）和肖像+按钮块（4 列，右对齐，行布局，间距 16px）。低于 640px：堆叠，肖像 96px 与姓名并排一行，按钮全宽位于下方。
3. **摘要** — 区块眉题 'SUMMARY'（等宽字体）。一段文字（最大宽度 62ch）：'Backend engineer with eleven years in [FIELD], the last six leading small platform teams. I like systems that fail loudly and teams that write things down: idempotent payment flows, honest on-call, and postmortems that change code. Currently looking for a staff role where the hardest problems are organizational with technical teeth.'
   布局：Paper，区块内边距 72px；仅段落——简历的克制。
4. **经历** — 区块 id='experience'。眉题 'EXPERIENCE'。左侧轨道配角色卡片：1) 'Ledgerline Payments' — 'Staff Backend Engineer' — '2022–2025' — '[BASE] · payments core' — 要点：'Led the idempotency rework across three payment rails; duplicate-charge incidents went from monthly to zero, and the design doc became the team''s onboarding chapter.' / 'Cut p99 payout latency 41% by moving reconciliation to a streaming consumer — then deleted the batch job nobody missed.' 2) 'Cartwheel Commerce' — 'Senior Backend Engineer' — '2019–2022' — 'Remote' — 'Owned checkout''s service mesh migration; shipped behind flags, rolled back twice on purpose, landed with zero downtime minutes counted.' / 'Introduced RFC-driven design reviews; six months later, the team''s pages on Fridays were about capacity, not surprises.' 3) 'Northgate Health' — 'Backend Engineer' — '2016–2019' — 'Rotterdam' — 'Built the scheduling API five clinics still run on; the version field exists because I learned humility there.' / 'Automated the release train from a Friday ritual to a button; the button has guards, because it earned them.' 4) 'Independent' — 'Backend Developer' — '2014–2016' — 'Freelance' — 'Shipped eleven small-business backends; kept the lights on and the invoices honest.' / 'Learned that most 'scaling problems' are indexing problems wearing a costume.'
   布局：轨道在左侧（2px Ink，随滚动增长），标记为 10px Cobalt 圆点；卡片为 3 列偏移文本：公司名 Source Serif 4 700 19px，角色 Sora 600 15px，时间跨度等宽 12.5px Cobalt，上下文说明等宽 11.5px Slate Ink，要点使用 0.5pt Rule 标记。卡片在打印时避免分页。
5. **技能** — 区块 id='skills'。眉题 'SKILLS' 及说明文字 'Levels in plain words — dots are a summary, not a certificate.' 三个组位于 Cobalt Mist 面板上（屏幕）：'Languages' — Go 'expert ●●●●●'，TypeScript 'strong ●●●●○'，SQL 'strong ●●●●○'，Rust 'working ●●●○○'；'Infrastructure' — Kubernetes 'strong'，PostgreSQL 'expert'，Kafka 'strong'，Terraform 'working'，Redis 'strong'；'Ways of working' — 'On-call design'、'Incident review facilitation'、'RFC culture'、'Migration-by-flag'，每项均带两点注释 'practiced daily'。等级词保留；圆点根据等级数字渲染。
   布局：屏幕上为 Mist 背景（打印时为白色并带 Rule 边框）。三列；技能为行（名称在左，等级词 + 圆点在右）。低于 860px：堆叠。
6. **项目** — 区块 id='projects'。眉题 'SELECTED PROJECTS'。三张卡片：1) 'swamprat' — 'An idempotency toolkit for payment backends' — 'What: a small library that wraps any write with an idempotency key and a store. Why: every rails'' docs hand-wave this. Result: 1.2k weekly installs and the doc''s diagrams stolen by three conference talks (credited).' — 链接 '#' 占位符。2) 'ledger-garden' — 'Local ledger sandbox with deterministic chaos' — 'What: a Postgres-backed double-entry sandbox that injects failures you can rehearse against. Why: reviewing incident responses needs a gym, not an outage. Result: used by two teams'' game-days; PRs welcome.' — '#'。3) 'papyr-trail' — 'RFC-to-changelog pipeline' — 'What: turns merged RFC documents into changelog entries and migration notes. Why: writers write; historians automate. Result: three open-source teams run it on their docs repos.' — '#'。
   布局：Paper。三列；卡片带 Rule 边框，名称等宽 700 14px Cobalt，what/why/result 为三行紧凑文本 Sora 14px / 1.6，带粗体引导词。低于 860px：堆叠。
7. **教育与认证** — 眉题 'EDUCATION'。行：'Delft University of Technology' — 'MSc Computer Science — distributed systems track' — '2012–2014'；'University of Lagos' — 'BSc Computer Science' — '2008–2012'。认证（紧凑，每行两个）：'Certified Kubernetes Administrator' — 'CKA'；'PostgreSQL Professional' — 'PGCE'。
   布局：Mist 色带（屏幕）。行：机构名 Source Serif 4 600 16px，学位 Sora 14px，时间跨度等宽右对齐。认证为两个芯片，各带一个 BadgeCheck 图标。
8. **可用性页脚（仅屏幕）** — 居中色带：'Available for staff-plus roles from spring — remote or [BASE].'，带日历链接按钮 'Book an intro call'（'#' 占位符）和等宽说明文字 'References on request · The PDF button above is not a metaphor.' 底行：'© [NAME]. Set in Source Serif 4 and Sora; printed on one page since 2025.'
   布局：Paper 带 Rule 顶部边框，垂直内边距 64px，打印时完全隐藏，仅保留打印专用页脚线（电子邮件打印在页面底部）。

## 资产
- 图片：为此设计制作的模板人像（可随模板自由再分发）：https://media.vibefather.ai/assets/98e01289-ef2c-4727-a829-34a3c0872fb8/portrait-rowan.webp → public/images/portrait-rowan.webp（屏幕上刊头为 120px，打印页眉为 22mm；alt 为 'Professional portrait placeholder'）。
- 图标：仅使用 lucide-react：Mail、AtSign、MapPin、Link2、Download、ArrowUpRight、BadgeCheck、Briefcase、GraduationCap。描边宽度 1.75，16–24px，颜色继承。public/favicon.svg 手写：viewBox 0 0 32 32，一个 32x32 的 rect，rx 为 6，填充 #FFFFFF，带 1px #1A1D21 边框，首字母 '[RA]' 以 Spline-Sans 风格绘制笔画（简化的几何字形），Cobalt 括号字形。不使用其他标志：名称始终以文字排版呈现。
- 图片：仅在代码中绘制——无照片、无头像、无标志、无徽章。轨道标记、级别圆点、标签、favicon 和打印标记均为 SVG/CSS。编写 ASSETS.md，列出 lucide-react（ISC）、@fontsource-variable/source-serif-4、@fontsource-variable/sora 和 @fontsource/spline-sans-mono（OFL-1.1），并注明 'No image assets; all visuals drawn in code.'
- 字体：安装 @fontsource-variable/source-serif-4、@fontsource-variable/sora 和 @fontsource/spline-sans-mono，并按 Setup 中所列在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包进 dist/。

## 禁止事项
- 无后端、无表单提交、不向任何 API 发起 fetch 请求：PDF 按钮是 window.print()，配合手写的打印样式表；联系方式和项目链接是 mailto 或 '#' 占位符。
- 这个单页上的所有链接都是锚点（./index.html#experience、#skills、#projects、#education）或联系方式占位符。
- 一切资源自托管：字体通过 Fontsource，图标用 npm 包或内联 SVG。不使用 CDN 的 <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具。
- 生产构建：压缩、无 source map、不把 src/ 复制进 dist/、单条命令 npm run build、输出在 dist/ 下且小于 5 MB。
- 不得把真实人物、雇主、学校或认证机构作为候选人的事实；报头肖像为 AI 生成的虚构人物，不是任何真实个人；不得出现厂商 logo 墙或认证徽章图片。
- 不使用绝对日期：只用年份区间，且为闭区间（截止 2025），不用 'present'；网站永不显示当天日期。
- 除可选的页脚署名链接外，网站内绝不提及 VibeFather 或任何其他品牌；所有文案均为虚构的美式英语。
- 在屏幕上遵循 prefers-reduced-motion，打印在构造上必须无动效：打印样式表剥离所有仅屏幕可用的装饰性元素，以文本优先方式渲染。
- 页面必须在 1440x900 桌面端和 390x844 移动端正常工作，控制台零报错；每个链接和打印按钮都能仅用键盘操作，并有可见的焦点环；打印输出必须是清晰可读的单页（可优雅溢出到两页）A4 纸，且 URL 展开显示。
- 文案保持具体：不用 lorem，不用 'results-driven professional'；每条要点、级别和年份都存放在 src/content.ts 中。

---
— Prompt by VibeFather · https://vibefather.ai/t/personal-resume-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
