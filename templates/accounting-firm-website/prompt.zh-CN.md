> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 会计事务所网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [FIRM] 打造的两页网站，[FIRM] 是位于 [CITY] 的一家会计师事务所，专注于 [FOCUS]，个人报税起价 $[BASE_FEE]。它必须成为街区里最让人安心的理财网站：服务项目附带通俗易懂的交付成果、一份截止日期台账（按月标注的周期性日期，明确为通用示例）、一个费用估算器（报税人类型 × 复杂程度 × 表格 → 含假设条件的示例区间）、四位会计师、一条信任展示带，以及一个在客户端确认的咨询预约表单。页面：index.html、booking.html。一切都在浏览器中运行；不会向任何地方提交数据。

- 受众：只有一份令人头疼的报税表的个人，以及收据堆满鞋盒的小企业主。他们害怕术语和意外账单；他们想要一个价格区间、一个截止日期提醒，以及一个会说“把鞋盒带来吧，我们见过更糟的”的真人。
- 目标：预约咨询。访客在十秒内看到通俗易懂的承诺和下一个截止日期；在两分钟内试用估算器并选定日期。
- 语气：平实、耐心、对收据带点冷幽默。具体的交付成果和价格区间，零术语——除非附带解释，关于鞋盒只开一个玩笑。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（MIT）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/libre-franklin（OFL-1.1）、@fontsource/ibm-plex-sans（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化（Setup）：
  - 使用 react-ts 模板通过 npm create vite@latest 搭建脚手架。项目根目录下有两个真实的 HTML 页面：index.html（入口 src/main-index.tsx）和 booking.html（入口 src/main-booking.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist'，sourcemap false，assetsInlineLimit 0，rollupOptions { input { index: resolve(__dirname, 'index.html')，booking: resolve(__dirname, 'booking.html') } } }。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './booking.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的每种颜色以 kebab-case 键名添加到 theme.extend.colors（paper、ledger、card、ink、slate、green-ledger、green-deep、green-mist、brass、rule），并将 fontFamily display 设为 ['Libre Franklin', 'Georgia', 'serif']，sans 设为 ['IBM Plex Sans', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 6px，并添加 maxWidth { container: '1160px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/libre-franklin/400.css'、'@fontsource/libre-franklin/600.css' 以及 '@fontsource/ibm-plex-sans/400.css'、'@fontsource/ibm-plex-sans/500.css'、'@fontsource/ibm-plex-sans/600.css'；从两个入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（所有字符串、服务、截止日期、标签（chip）、会计师、信任文案和图片路径，均带类型），src/lib/brand.ts（firmSlug = [FIRM] 转为小写并将每一段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 firmSlug + '.com'，phoneDigits 用于 tel:），src/lib/storage.ts（安全的 localStorage 读写，包裹在 try/catch 中，键前缀为 firmSlug + ':'），src/lib/estimate.ts（纯函数：range(filer, complexity, forms[]) — 个人简单申报基础价 $[BASE_FEE]，企业 ×2.2，复杂度 moderate +40% / messy +90%，每份表格 +$45；返回 { low, high }，±15% 后四舍五入到 $10）。
  - 状态（State）：src/store/booking.ts 是一个小型外部 store（useSyncExternalStore），持有 { topic, day, name, email, note, sent }，持久化到 localStorage 键 firmSlug + ':booking'。
  - 组件位于 src/components/：Header.tsx、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、Footer.tsx；首页（index）：Hero.tsx、Services.tsx（ServiceColumn.tsx）、DeadlineLedger.tsx（DeadlineRow.tsx）、Estimator.tsx（ChipGroup.tsx、RangePanel.tsx）、Team.tsx（AccountantCard.tsx）、TrustStrip.tsx；预约页（booking）：BookingForm.tsx（TopicSelect.tsx、DayChips.tsx、Confirmed.tsx）。src/pages/Home.tsx 和 Booking.tsx 组合它们；两个页面都渲染 Header 和 Footer。
  - 在首次构建之前，使用 curl -L -o 并按照给定的确切文件名，将资源（Assets）下列出的每张图片下载到 public/images/ 中。构建本身从不获取任何内容。
  - public/favicon.svg 如资源（Assets）下所述。两个 HTML 文件：lang en，<meta name='theme-color' content='#F7F4EC'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>。标题：index.html '<title>[FIRM] — Accounting in [CITY]</title>'，booking.html '<title>Book a consultation — [FIRM]</title>'。
  - 在项目根目录下按资源（Assets）下所述编写 ASSETS.md。
  - dist/ 包含两个 HTML 文件、带哈希的 JS/CSS、woff2 字体、favicon.svg 和四张图片。保持在 8 MB 以下。

## 变量
- [FIRM] — 事务所名称（默认：“Rowan & Fig”）。虚构的事务所名称。用于字标、标题、页脚、电子邮件（hello@ + 不含连字符的 firmSlug + .com）以及 localStorage 键。绝不使用真实事务所或特许经营品牌。
- [CITY] — 城市（默认：“Raleigh, North Carolina”）。事务所所在地。用于主视觉区、截止日期的上下文以及页脚。可以使用真实城市；街道为虚构。
- [BASE_FEE] — 基础费用（默认：“220”）。个人简单申报的起步费用，以数字表示。每个估算器区间都在 src/lib/estimate.ts 中由它推导得出。保持在 150–400。
- [FOCUS] — 业务重点（默认：“tax filing and small-business books”）。一个全小写短语，点明该事务所的核心业务。驱动主视觉区文案、服务栏目的平衡以及一条信任文案。
- [CREDIT] — 在页脚保留一个小的“Template by VibeFather”链接，指向 https://vibefather.ai/t/accounting-firm-website（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 纸张色（Paper）`#F7F4EC` — 两个页面的页面背景。
- 账本色（Ledger）`#EFEAD9` — 交替区块背景（服务、估算器）、标签、悬停填充。
- 卡片色（Card）`#FFFDF8` — 估算器面板、截止日期行、表单面板、确认信息。
- 墨色（Ink）`#26221A` — 标题、正文、图标颜色。
- 石板色（Slate）`#6B675C` — 次要文本、说明文字、眉题、截止日期注释。
- 绿色账本（Green Ledger）`#2E5641` — 主色：标题强调、主按钮、选中标签、账本线条、焦点环。
- 深绿（Green Deep）`#21402F` — 悬停、页脚背景。
- 绿雾（Green Mist）`#E4EBE2` — 选中标签填充、截止日期月份标记、井区填充。
- 黄铜色（Brass）`#A87C2F` — 唯一强调色：估算范围数字、黄铜回形针细节、截止日期圆点、focus-visible 额外项。
- 线条色（Rule）`#DFD8C4` — 1px 细线、卡片边框、输入框边框、账本线条。

### 字体排印（Typography）
- 展示字体：H1、H2、H3、服务标题、估算数字、字标：Libre Franklin（OFL），字重 400/600
- 文本与 UI：正文、眉题、按钮、标签、表单字段、说明文字；所有数字和日期使用表格数字：IBM Plex Sans（OFL），字重 400/500/600

### 布局与动效（Layout & motion）
- 间距：8px 基础单位。容器最大宽度 1160px，居中，侧边内边距桌面端 48px，平板端 32px，640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面端 96px，1024px 以下 72px，640px 以下 56px。字号比例：H1 clamp(40px, 6vw, 72px) Libre Franklin 600，行高 1.06；H2 clamp(28px, 3.8vw, 46px) Libre Franklin 600；H3 21px Libre Franklin 600；估算数字 Libre Franklin 600 40px Brass 表格数字；导语 IBM Plex 400 17.5px / 1.65 Ink 90%；正文 15.5px / 1.7（最大宽度 64ch）；眉题 IBM Plex 600 12px 大写 letter-spacing 0.16em Slate；说明文字 13px Slate；截止日期行 IBM Plex 15px 带表格数字日期。按钮：高度 50px，IBM Plex 600 14px。主按钮：Green Ledger 填充，Card 文本。次按钮：1px Green Ledger 边框，Green Ledger 文本。输入框：高度 50px，1px Rule 边框，Card 填充，聚焦时 Green 边框。全局焦点环：2px Green Ledger 轮廓，偏移 3px。
- 圆角：卡片、按钮、输入框、标签和照片使用 6px — 账本般利落。仅标签、圆点和胶囊使用 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现和范围变化；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于表单切换。平静 — 金钱页面不应跳舞。
- 动效：显现：包裹在 <Reveal> 中的区块从 opacity 0、translateY(12px) 开始，在 15% 可见时（Motion whileInView，viewport once）以 650ms --ease-out 稳定下来。相邻元素错开 70ms。
- 动效：首屏：桌面照片从 1.03→1.0 缩放，历时 2200ms；标题上升；眉题旁的小黄铜回形针细节旋转 6deg 一次。
- 动效：截止日期账本：行以 50ms 错开显现；账本的垂直线随区块滚动向下绘制（scaleY）；下一个即将到来的行的圆点填充 Brass 并轻柔脉冲一次（减少动效下关闭）。
- 动效：估算器：标签选中时填充 Green Mist（150ms）；每次范围变化以 450ms --ease-io 对两个数字计数（表格数字）；假设行随表单计数交叉淡入淡出。
- 动效：团队卡片：悬停上浮 2px，首字母字母组合获得 Brass 环。
- 动效：预约：日期标签选中时填充 Green；无效提交抖动 4px 并显示内联标签；发送切换为 Confirmed（300ms --ease-io）— 一个绘制的 Brass 'SCHEDULED' 印章从 -5deg→-2deg 旋转进入，'Bring what you have — even the shoebox.' 回响。
- 动效：链接：.link-draw 在悬停和 focus-visible 时以 280ms 增长 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 无缩放、脉冲、计数或印章（即时值）；颜色/边框悬停保留。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：平静的真实摄影，所有四张均以一致风格为本模板制作：温暖的纸张光线，带有账本、计算器、铅笔和咖啡的办公桌 — 会计师肖像是在办公桌前的 AI 生成虚构人物（一致的温暖窗光，账本般平静的世界）；它们是占位符，真实事务所会替换为自己的员工照片；其他照片保持无人且无可读文本。每张照片使用 object-fit cover，object-position 在 Assets 下给出，6px 圆角，无阴影；Paper 上的照片获得 1px Rule 轮廓。说明文字使用 IBM Plex 13px Slate。代码绘制：回形针、截止日期圆点、SCHEDULED 印章、字母组合和 favicon。图标：仅 lucide-react，描边宽度 1.75。

## 页面与区块
### 事务所页面（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值撰写（[FIRM] = Rowan & Fig，[CITY] = Raleigh, North Carolina，[BASE_FEE] = 220，[FOCUS] = tax filing and small-business books）。将每个字符串、费用和列表放入 src/content.ts 并从中渲染；两个页面共用一个内容文件。若任何变量值不同，请重写主视觉、服务、截止日期、标签、团队和信任文案，使其对新事务所具体且可信，同时保持相同结构和数量（2 个服务栏 × 4 项、8 个截止日期、4 个标签组、4 名会计师、4 个信任项）。所有数字均为虚构的示例计算；截止日期为重复出现的通用日期，标注为 'recurring — confirm with your tax authority'。截止日期台账（月份 · 日期标签 · 备注）：'January · Q4 estimates due' 'the holidays ate your Q4 — we get it'；'March · S-corp & partnership returns' 'the calm before'；'April · Individual returns' 'the main event; extensions filed in minutes'；'June · Q1 estimates' 'spring cleaning, for money'；'September · Q2 estimates + extended business returns' 'the forgotten deadline'；'October · extended individual returns' 'last call, no judgment'；'December · Q3 estimates' 'before the cookies'；'Year-round · Monthly bookkeeping close' 'the 10th, every month, boring by design'。团队：'RA' Ruth Abioye 'Firm principal · small business & payroll' 'Fifteen years; her spreadsheet templates have groupies.'；'MC' Marcus Chen 'Tax manager · individuals' 'Reads tax law for fun; explains it for the rest of us.'；'DP' Dee Patel 'Senior accountant · audits & cleanup' 'The shoebox whisperer.'；'JO' Jonas Okafor 'Bookkeeper · monthly clients' 'Knows your books better than your bank does.' 会计师肖像为 AI 生成的虚构人物，与默认名册匹配（不 resemblance 任何真实个人）；alt 保持 'A fictional accountant'。
   布局：不适用
   动效：不适用
2. **页眉（所有页面）** — 左侧：字标 '[FIRM]'（Libre Franklin 600 20px）位于 'Accounting · [CITY]'（10px 大写 Slate）上方，链接至 ./index.html。右侧导航（IBM Plex 600 14px）：'Services' → ./index.html#services，'Deadlines' → ./index.html#deadlines，'Fees' → ./index.html#fees，'Team' → ./index.html#team；一个 Green Ledger 的 'Book a consult' → ./booking.html。低于 820px：字标 + 咨询按钮。
   布局：粘性顶部，高度 72px，Paper/95% 模糊，Rule 边框。
3. **主视觉** — 两栏。左侧：眉题 'ACCOUNTING IN [CITY], PLAINLY'；H1 'Your numbers,' / '*in good order.*'；导语（最大宽度 520px）：'[FIRM] does [FOCUS] for humans: plain answers before invoices, ranges before retainers, and a shoebox policy of zero judgment.'；主按钮 'Book a free consult' → ./booking.html 和次按钮 'Try the fee estimator' → #fees；三条带 Green 对勾的快速事实：'Free 30-minute consult'；'Ranges quoted up front'；'Extensions filed in minutes'。右侧：desk-ledger.webp（4:3），配文 'Ruth''s desk on April 13th — calm, as always'。
   布局：Paper 背景，顶部垂直内边距 104px；左侧 6 列，右侧 5 列偏移 1。
4. **服务** — 区块 id='services'。眉题 'WHAT WE DO' 和 H2 'Two columns, no surprises.' ServiceColumns：'For individuals' — 'Individual returns' 'from $[BASE_FEE] · one meeting, done'；'Rental & investment income' 'quoted after a look — ranges in writing'；'Multi-state filings' 'yes, even that combination'；'Amended returns' 'fixing the past, gently'。'For small businesses' — 'Monthly bookkeeping' 'the 10th close, boring by design'；'Payroll' 'runs, filings, W-2s'；'Business returns' 'from $480 · clean books or the shoebox'；'Cleanup & catch-up' 'quoted per shoebox, kindly'。说明文字：'Every engagement starts with a written range — the invoice never surprises you.'
   布局：Ledger 背景。两栏 24px 间距；行以细线分隔，价格/元信息使用表格数字 IBM Plex 13px Slate，服务名称 Libre Franklin 600 17px。
5. **截止日期台账** — 区块 id='deadlines'。眉题 'THE YEAR, MARKED' 和 H2 'Deadlines we watch so you can nap.' 台账：八行（月份为 Green 600 12px 大写，日期标签 IBM Plex 600 15px，备注 13.5px Slate，Brass 圆点），下一个即将到来的行以 Green Mist 高亮，备注为 'next up — book by the week before'。说明文字：'Recurring dates, shown generically — confirm current-year dates with your tax authority.'
   布局：Paper 背景。台账为 Card 列表，左侧有绘图垂直规则线；容器最大宽度 760px；行高 56px，细线分隔。
6. **费用估算器** — 区块 id='fees'。眉题 'WHAT IT MIGHT COST' 和 H2 'A range, before we meet.' Card 上的估算器：ChipGroups — Filer（'Individual' / 'Small business'）；Complexity（'Simple' / 'Moderate' / 'The shoebox'）；Forms（多选：'Rental income' / 'Stocks & crypto' / 'Employees' / 'Sales tax' / 'Multi-state'）；RangePanel：'$[BASE_FEE] – $253'（Libre Franklin 600 40px Brass 表格数字），假设行 'Sample math: base + complexity + $45/form, ±15%. Your consult ends with a written range, not a guess.' 以及主按钮 'Book the consult' → ./booking.html。
   布局：Ledger 背景。面板最大宽度 680px，28px 内边距；标签换行；面板以一行安静的文字镜像所选标签（'Individual · Moderate · Stocks, Employees'）。
7. **团队与信任** — 区块 id='team'。眉题 'THE FOUR OF US' 和 H2 'People who return calls.' AccountantCards 配 AI 生成的专业肖像（4:3）——事务所台账般平静世界中的虚构会计师：1）acct-ruth.webp，alt 'Ruth at her desk, a fictional accountant' — 'RA' 徽章保持小尺寸 — Ruth Abioye 'Firm principal · small business & payroll' 'Fifteen years; her spreadsheet templates have groupies.'；2）acct-marcus.webp，alt 'Marcus reviewing a return, a fictional accountant' — Marcus Chen 'Tax manager · individuals' 'Reads tax law for fun; explains it for the rest of us.'；3）acct-dee.webp，alt 'Dee with a box of receipts, a fictional accountant' — Dee Patel 'Senior accountant · audits & cleanup' 'The shoebox whisperer.'；4）acct-jonas.webp，alt 'Jonas at the monthly close, a fictional accountant' — Jonas Okafor 'Bookkeeper · monthly clients' 'Knows your books better than your bank does.'。下方 TrustStrip：四个带 Green 对勾的项 — 'Licensed CPAs & EAs (invented credentials, real standards)'；'E-file and secure document portal'；'Audit support included, not upsold'；'Plain-English engagement letters'。
   布局：Warm White 背景。4 列 20px 间距；卡片在 Card Rule 边框上：肖像顶部（宽高比 4:3），字母组合作为 24px 小角落徽章，姓名 Libre Franklin 600 18px，角色 12px 大写 Slate，一句话简介 14px Slate；信任条为细线边界行。
8. **页脚** — Green Deep 背景，Paper 色调文字。三栏：1）字标 + '[FIRM]' 位于 'Accounting · [CITY] · since a very organized year' 上方。2）'Office'：'240 Cedar Street, [CITY]'，hello@ + emailDomain，'(919) 555-0164'。3）'Hours'：'Mon–Fri 9–5, tax season til it''s done'；'Evenings by appointment'。底部行：'© [FIRM]. Estimates are sample ranges; deadlines are generic recurring dates.'
   布局：垂直内边距 64px，3 列，底部行在 Paper/15% 规则线下方 32px。低于 768px 堆叠。

### 咨询页面（`booking.html`）
1. **预约表单** — 刊头：眉题 'FREE CONSULT'，H1 'Thirty minutes, bring everything.' 导语 'Coffee''s on us. Bring the shoebox, the spreadsheet, or the unsigned letter from the tax office — we''ve seen all three this week.' Card 上的 BookingForm：TopicSelect（'Individual return' / 'Business books' / 'A scary letter' / 'Just talk it through'）；DayChips（接下来 7 个工作日，包含周六上午，周日 'closed'）；姓名 + 邮箱；备注文本域（占位符 'Anything that helps us prepare — or say nothing and bring the box.'）；主按钮 'Request my consult'，配文 'Saved in this browser — the real page would email the office. Nothing is sent here.' 已确认：SCHEDULED 印章，'Thank you, [NAME].' 'We''ll confirm [DAY] by email — bring what you have, even the shoebox.' 主题回显，以及 'Change my request' 返回预填。持久化在 localStorage 中。
   布局：Paper 背景，顶部有 Ledger 色带；面板最大宽度 640px，28px 内边距，Rule 边框；姓名/邮箱两栏在低于 560px 时堆叠。
2. **安心与收尾** — 三行安静的文字配 Green 对勾：'Nothing is due at the consult — ranges first, always'；'Your documents stay on our secure portal'；'One follow-up email, then the phone stops ringing'。居中收尾行：'The shoebox has waited this long. Thirty minutes on [DAY] ends the suspense.'
   布局：Ledger 色带延续；对勾排成一行，收尾行在其下方 40px。

## 资源

- 图片：为本设计制作的模板照片（可随模板自由再分发）。用 curl -L -o 将每张图片下载到 public/images/：https://media.vibefather.ai/assets/968213ab-8b8f-462d-a95b-9669f6107855/desk-ledger.webp → public/images/desk-ledger.webp（Hero；object-position 50% 55%；alt 'A calm desk with a ledger notebook, calculator and pencil'）；https://media.vibefather.ai/assets/968213ab-8b8f-462d-a95b-9669f6107855/shoebox.webp → public/images/shoebox.webp（Services 侧边；alt 'A cardboard box of receipts on a chair, waiting kindly'）；https://media.vibefather.ai/assets/968213ab-8b8f-462d-a95b-9669f6107855/acct-ruth.webp → public/images/acct-ruth.webp（团队卡片 Ruth；alt 'Ruth at her desk, a fictional accountant'）；https://media.vibefather.ai/assets/968213ab-8b8f-462d-a95b-9669f6107855/acct-marcus.webp → public/images/acct-marcus.webp（团队卡片 Marcus；alt 'Marcus reviewing a return, a fictional accountant'）；https://media.vibefather.ai/assets/968213ab-8b8f-462d-a95b-9669f6107855/acct-dee.webp → public/images/acct-dee.webp（团队卡片 Dee；alt 'Dee with a box of receipts, a fictional accountant'）；https://media.vibefather.ai/assets/968213ab-8b8f-462d-a95b-9669f6107855/acct-jonas.webp → public/images/acct-jonas.webp（团队卡片 Jonas；alt 'Jonas at the monthly close, a fictional accountant'）。共六个文件。
- 图片：在项目根目录写入 ASSETS.md，包含一个表格：path、source URL、author、license——每张照片一行（source 'media.vibefather.ai, made for this template'，author 'VibeFather'，license 'Distributed with the template'），另加 @fontsource/libre-franklin 和 @fontsource/ibm-plex-sans（OFL-1.1）以及 lucide-react（ISC）的行。绝不用图库网站或包含人物、面孔、手或可读文本/表单的图片替换照片。
- 图标：仅使用 lucide-react：Calculator、CalendarDays、Check、FileText、Users、ClipboardCheck、Phone、Mail、ArrowRight、Coffee。描边宽度 1.75，16–24px，颜色继承。回形针、截止日期圆点、SCHEDULED 印章、字母组合和 favicon 为绘制的 SVG——绝不是真实专业机构的标志。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的 rect rx 6 填充 #2E5641，一个 Paper（#F7F4EC）账本线字形（三条水平线），底线上有一个 Brass（#A87C2F）对勾。没有其他标志：事务所名称始终以文字排版呈现。
- 字体：安装 @fontsource/libre-franklin 和 @fontsource/ibm-plex-sans，并在 src/fonts.ts 中按 Setup 所列导入它们。Vite 会将 woff2 文件打包进 dist/。
- 图片：在代码中绘制：回形针、截止日期圆点和账本线、SCHEDULED 印章、字母组合圆圈、标签和 favicon。除四张照片外没有其他位图；没有插图；没有地图瓦片。

## 禁止事项
- 无后端、无表单提交、不向任何 API 发起 fetch 请求：估算器是 src/lib/estimate.ts 中的纯客户端计算，并展示假设条件；预约仅在浏览器中保存，并明确说明这一点。
- 每个内部链接都指向文件名（./index.html、./index.html#services、./index.html#deadlines、./index.html#fees、./index.html#team、./booking.html）——绝不指向裸目录。
- 一切资源自托管：字体通过 Fontsource，图标以 npm 包或内联 SVG 形式引入，图片下载到 public/images/。不使用 CDN 的 <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具。
- 生产构建：压缩、无 source map、不将 src/ 复制到 dist/、使用单一命令 npm run build、输出位于 dist/ 且小于 8 MB。
- 不使用真实公司、资质或专业机构（使用通用的“licensed”措辞、虚构团队）；截止日期标注为 recurring/generic 并附有向主管机构确认的提示；不使用包含人物、面部、手部或可读表单的照片。
- 任何地方都不出现日期或年份；截止日期台账显示按月份标注的周期性日期，绝不显示当年的实际日历；网站绝不显示今天的日期。
- 除可选的页脚署名链接外，网站内绝不提及 VibeFather 或任何其他品牌；所有文案均为虚构的美式英语。
- 尊重 prefers-reduced-motion：无脉冲、计数或盖章动画（即时显示数值）；颜色/边框悬停效果保留。
- 网站必须在 1440x900 桌面端和 390x844 移动端正常工作，控制台零错误；标签、下拉选择器和表单仅用键盘即可操作，并具有可见的焦点环。
- 保持文案平实：不使用 lorem，不使用“synergistic financial solutions”之类的措辞；每项费用、截止日期和文案行都存放在 src/content.ts 中。

---
— Prompt by VibeFather · https://vibefather.ai/t/accounting-firm-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
