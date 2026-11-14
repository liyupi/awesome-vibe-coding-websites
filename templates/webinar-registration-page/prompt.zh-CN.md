> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 网络研讨会注册页面

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个单页网站，为一场直播活动填满座位：'[TITLE]'，一场关于 [TOPIC] 的 90 分钟网络研讨会，由 [BRAND] 团队于 [DATE] 美东时间 11:00 主办。包含实时倒计时、四项学习成果、一份带时间安排的议程、三位演讲者、一个带实时时区转换的注册表单、在浏览器内生成的添加到日历 .ics 文件，以及一个简短的常见问题解答。单页，index.html；一切都在本地运行，不会向任何地方提交数据。

- 受众：在会议间隙用手机注册的从业者和团队负责人：他们希望在两分钟内看到自己时区中的日期、议程，以及演讲者确实做过这件事的证明。
- 目标：注册。访客在十秒内看到标题、跳动的倒计时和注册按钮；在两分钟内核对好自己的时区并提交表单。
- 语气：广播式的沉稳：精确的时间、朴素的承诺、零紧迫感表演。一个关于日历的冷幽默。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/sora（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 npm create vite@latest 以 react-ts 模板搭建脚手架，然后保留一个真实 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将 Design 下的每种颜色添加到 theme.extend.colors，使用 kebab-case 键名（night、panel、panel-2、mist、bone、cyan、cyan-deep、cyan-mist、line、slateink、good），并设置 fontFamily display ['Sora', 'system-ui', 'sans-serif']、sans ['Inter Variable', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 10px，并添加 maxWidth { container: '1180px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/sora/400.css'、'@fontsource/sora/600.css'、'@fontsource/sora/700.css' 和 '@fontsource-variable/inter'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（每个字符串、成果、议程时段、演讲者、faq 行和图片路径，均带类型），src/lib/brand.ts（brandSlug = [BRAND] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 brandSlug + '.com'），src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键为 brandSlug + ':reg'），src/lib/time.ts（用 new Date 加上 11:00 America/New_York 锚点解析 [DATE]：target = new Date(`${DATE}`)；设置小时为 11、分钟为 0，并将时区标签视为仅用于显示；countdown(target) → { days, hours, minutes, seconds, done }；localTime(zone) 使用带 timeZone 的 Intl.DateTimeFormat；zonesFor(locale) 列出 8 个合理时区，包括 'America/New_York'、'Europe/London'、'Europe/Berlin'、'Asia/Singapore'、'Asia/Tokyo'、'Australia/Sydney'、'America/Los_Angeles'、'UTC'），src/lib/ics.ts（buildIcs(target, title, brand) 返回一个 DTSTART/DTEND 90 分钟的 VEVENT 字符串，UID 来自 brandSlug 和目标时间；downloadIcs 触发 Blob text/calendar 下载）。
  - 状态：src/store/reg.ts 是一个小型外部 store（useSyncExternalStore），持有 { name, email, zone, saved } 并持久化到 localStorage；src/store/clock.ts 通过 provider 级 effect 中的 setInterval 每秒 tick，为 countdown(target) 提供数据。
  - src/components/ 中的组件：Header.tsx、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、Footer.tsx、CountFlip.tsx（一个数字组，逐位翻转）；Hero.tsx（使用 CountFlip 的 Countdown.tsx）、Outcomes.tsx（OutcomeCard.tsx）、Agenda.tsx（SlotRow.tsx）、Speakers.tsx（SpeakerCard.tsx）、Register.tsx（ZoneSelect.tsx、CalendarButtons.tsx）、Faq.tsx（FaqRow.tsx）。src/pages/Home.tsx 组合它们。
  - CountFlip：每个组（天/小时/分钟/秒）是两张堆叠的数字卡片，处于透视中；变化时旧数字旋转 -90deg 退出，新数字进入（250ms --ease-io）。数字为 Sora 700 等宽数字，桌面 44px / 移动 30px。在 prefers-reduced-motion 下，数字变化时不旋转。
  - ZoneSelect 是一个原生 <select>，深色样式；转换后的行显示为 'Thursday, [DATE] · 11:00 AM for you (America/New_York)'，在变化时重新计算；第二行静态文本始终显示 '11:00 AM ET · 90 minutes · replay for everyone who registers'。
  - CalendarButtons：两个按钮（'Add to calendar' 为主，'Download .ics' 为次）。'Add to calendar' 也会下载 .ics（单个 VEVENT；演示中已说明）。完全在 src/lib/ics.ts 中构建文件；无网络。
  - 在首次构建之前，使用 curl -L -o 将 Assets 下列出的每张图片下载到 public/images/，使用给定的确切文件名。构建本身从不获取任何内容。
  - public/favicon.svg 如 Assets 下所述。index.html：lang en，<meta name='theme-color' content='#0B1526'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[TITLE] — [BRAND] live session</title>。
  - 在项目根目录编写 ASSETS.md，如 Assets 下所述。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和三张肖像。保持在 8 MB 以下。

## 变量
- [BRAND] — 主办方品牌（默认："Northfound"）。虚构的公司或团队，作为本次会议的主办方。用于字标、标题标签、页脚、电子邮件（hello@ + 不含连字符的 brandSlug + '.com'）以及 .ics 的 ORGANIZER。绝不使用真实公司。
- [TITLE] — 会议标题（默认："The Unhurried Roadmap"）。网络研讨会的标题，采用标题大小写。出现在 H1、标题标签、议程标题和 .ics 的 SUMMARY 中。虚构。
- [DATE] — 会议日期（默认："December 3, 2026"）。倒计时指向的完整未来日期，写作 'December 3, 2026'。驱动倒计时、时区行和 .ics。保持它在未来，以便演示倒计时；如果它发生变化，请重写议程措辞。
- [TOPIC] — 主题短语（默认："roadmaps that survive contact with reality"）。一个小写短语，说明本次会议教授的内容。重写 H1 副标题、成果卡片和演讲者一句话介绍。保持具体。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/webinar-registration-page（默认：是；删除此行即可移除）

Pages & Sections 下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 夜色（Night）`#0B1526` — 全站页面背景。
- 面板（Panel）`#101E33` — 卡片、议程行、表单面板。
- 面板 2（Panel 2）`#15263F` — 悬停填充、抬升面板、选择框填充。
- 线条（Line）`#24344D` — 1px 细线、卡片边框、输入框边框。
- 骨白（Bone）`#EDF2F7` — 主文本、标题。
- 薄雾（Mist）`#93A3B8` — 次要文本、说明文字、眉题、议程时间。
- 青色（Cyan）`#37C8E8` — 唯一的活跃强调色：倒计时数字、主按钮、选中状态、标签、焦点环。
- 深青（Cyan Deep）`#1E9DBE` — 主按钮的悬停与按下状态。
- 青雾（Cyan Mist）`#12384A` — 标签芯片、注册面板底色、选中环背景。
- 石板墨（Slate Ink）`#0A111D` — 青色或骨白填充上的文字。
- 良好（Good）`#4ADE9B` — 回放/注册对勾、表单成功状态。

### 字体排印
- 展示字体：H1、H2、倒计时数字、演讲者姓名、字标 — Sora，几何感与广播式冷峻：Sora（OFL），字重 400/600/700
- 文本与界面：正文、议程、表单、说明文字；倒计时与时间使用表格数字：Inter（OFL），字重 400/500/600

### 布局与动效
- 间距：8px 基准单位。容器最大宽度 1180px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面端 96px、1024px 以下 72px、640px 以下 56px。字号阶梯：H1 clamp(38px, 5.2vw, 64px) Sora 700，行高 1.06；H2 clamp(26px, 3.4vw, 40px) Sora 700；演讲者姓名 Sora 600 19px；倒计时数字 Sora 700 表格数字 44px（移动端 30px），配 11px 大写标签；导语 Inter 400 17px / 1.65 骨白 92%；正文 15.5px / 1.7；眉题 Inter 600 12px 大写 字距 0.16em 薄雾；说明文字 13px 薄雾。按钮：高度 50px，Inter 600 14px；主按钮青色填充配石板墨文字，次按钮 1px 线条边框配骨白文字。输入框/选择框：高度 50px，面板 2 填充，1px 线条边框，聚焦时青色边框 + 2px 偏移环。
- 圆角：卡片、面板、按钮、输入框 10px。仅胶囊和标签使用 999px。
- 动效：缓动：--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于数字翻转；--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现。控制室般沉稳。
- 动效：显现：包裹在 <Reveal> 中的区块初始 opacity 0、translateY(14px)，在视口 15% 处用 700ms --ease-out 落定（Motion whileInView，once），同级元素错开 70ms。
- 动效：倒计时：数字按 Setup 中所述在每次变化时翻转；秒组始终在动 — 这是信息，不是装饰，并且在减少动态效果下仍会翻转（不旋转）。
- 动效：首屏：眉题下方一条细青色线绘制一次（600ms）；H1 各行上升；倒计时面板最后淡入，秒单元格上有一次柔和的青色脉冲。
- 动效：议程行：时间列先落定，然后其余部分；悬停时该行上浮 2px，并用青雾填充时段标签。
- 动效：演讲者：卡片以 80ms 错开显现；肖像从 scale 1.04 落定。
- 动效：ZoneSelect 变化：转换后的行交叉淡入淡出 200ms；无布局偏移（固定两行高度）。
- 动效：表单提交：面板交叉淡入淡出为一行良好对勾：'You're on the list — this demo saved your seat in your browser only.'
- 动效：链接：.link-draw 在悬停和 focus-visible 时用 260ms 生长出 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 无数字旋转（数字即时切换）、无肖像缩放、无脉冲、无下划线绘制；倒计时仍会跳动。在 index.css 中使用 CSS @media 加上 Motion 的 useReducedMotion。
- 图像：三张演讲者肖像，全部是为本模板制作的 AI 生成虚构人物，风格统一：深海军蓝上的四分之三影棚光，平静自信的表情，年龄和族裔多样（一位 30 多岁的黑人女性、一位 40 多岁的东亚男性、一位 50 岁左右的南亚女性），商务休闲，不似任何真实个人。这里面部没问题 — 这些是演讲者卡片，不是首屏；首屏锚点是倒计时面板和夜色上的字体排印。无可读文字、无标志、无带徽章的挂绳。肖像 object-fit cover，10px 圆角，1px 线条描边。图标：仅 lucide-react，描边宽度 1.75。favicon 和议程导轨为绘制的 SVG/CSS。

## 页面与区块
### 网络研讨会注册（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[BRAND] = Northfound，[TITLE] = The Unhurried Roadmap，[DATE] = December 3, 2026，[TOPIC] = roadmaps that survive contact with reality）。将每个字符串、成果、议程时段、演讲者、FAQ 行和图片路径都放入 src/content.ts 并从中渲染。如果任何变量不同，请重写 H1 副标题、四项成果、议程标题、演讲者一句话介绍和 FAQ，使其针对该场次具体且可信，同时保持相同的结构和数量（4 项成果、6 个议程时段、3 位演讲者、4 行 FAQ）。成果：'Write a roadmap people can read' 'one page, three horizons, no gantt'；'Trade honestly' 'what slips, what's protected, what's negotiable'；'Run the quarterly rewrite' 'a 90-minute ritual that keeps the plan alive'；'Say no with a schedule' 'declining without burning the bridge'。议程（时间 · 标题 · 标签）：'11:00' 'Welcome and one slide of honesty' 'INTRO'；'11:08' 'Why roadmaps die' 'TALK'；'11:22' 'The three-horizon page' 'LIVE DEMO'；'11:44' 'Trades, buffers and the rewrite ritual' 'TALK'；'12:06' 'Your questions, unhurried answers' 'Q&A'；'12:26' 'The one-page kit and goodbye' 'WRAP'。演讲者（姓名 · 职位 · 一句话介绍）：'Ada Mensah' 'Head of Product, Northfound' 'has rewritten forty roadmaps and apologized for six'；'Kenji Watanabe' 'Principal Engineer' 'protects the boring work that keeps promises cheap'；'Rukmini Iyer' 'Founder, Writes The Check' 'funds teams and grades their roadmaps, kindly'。FAQ：'Will it be recorded?' 'Yes — the replay goes to everyone who registers, attender or not.'；'Is it really free?' 'Yes. The one-page kit at the end is the pitch; you can ignore it.'；'What timezone?' '11:00 AM ET; the form shows your local time before you commit.'；'Can my team join?' 'One seat per registration — send them this page, it isn't a secret.'
   布局：不适用
   动效：不适用
2. **页眉** — 左侧：字标 '[BRAND]'（Sora 700 19px，Bone），后跟一个小青色圆点；上方为 'LIVE SESSION'（10px 大写 Mist）。右侧导航（Inter 500 14px）：'Agenda' → #agenda，'Speakers' → #speakers，以及一个紧凑的主按钮 'Save my seat' → #register。720px 以下：字标 + 按钮。
   布局：顶部吸顶，高度 68px，Night 92% 不透明度加背景模糊，底部 Line 边框。
3. **首屏** — 居中堆叠：眉标 'LIVE ON [DATE] · 11:00 AM ET'；H1 '[TITLE]'，最后一个词为 Cyan；副标题 'Ninety minutes about [TOPIC] — three practitioners, one page you'll actually keep, zero slides read aloud.'；倒计时面板（Panel 卡片，Line 边框：四个 CountFlip 组 — DAYS / HOURS / MINUTES / SECONDS — 带细 Line 分隔线）；CTA 行：主按钮 'Save my seat' → #register，次按钮 'See the agenda' → #agenda；说明文字 'Free · replay included · reschedule-proof (the .ics even survives Outlook)'。
   布局：Night 背景，倒计时后方有一处柔和的径向 Cyan 光晕，20% 不透明度；垂直内边距顶部 128px，底部 104px；文本最大宽度 760px，面板最大宽度 640px。
4. **成果** — 区块 id='learn'。眉标 'WHAT YOU'LL WALK OUT WITH'；H2 'Four things, ninety minutes.' 2x2 的 OutcomeCards 网格（Panel，Line 边框，青色角标索引 01–04）：标题（Sora 600 18px）+ 一句话介绍（Inter 15px Mist）+ 一个 lucide 图标（Map、Scale、RefreshCcw、ShieldCheck）。
   布局：Night 背景；2x2 网格，24px 间距（800px 以下为 1 列）。
5. **议程** — 区块 id='agenda'。眉标 'THE RUNDOWN'；H2 'Timed like a broadcast.' 垂直轨道上的六个 SlotRows：时间（Inter 600 14px 等宽数字 Mist，固定 64px 列），标题（Sora 600 17px Bone），标签胶囊（10px 大写，Line 边框；LIVE DEMO 标签为 Cyan Mist 填充）。下方说明文字：'Times are ET; the form shows them in yours.'
   布局：Night 背景；每行为全宽 Panel 卡片，左侧青色轨道圆点对齐到 1px Line 垂直规则线；单列，最大宽度 760px。
6. **演讲者** — 区块 id='speakers'。眉标 'THE VOICES'；H2 'People who've shipped this.' 三个 SpeakerCards：肖像（4:5，顶部），姓名（Sora 600 19px），职位（Inter 500 13px Cyan），一句话介绍（Inter 15px Mist）。
   布局：Night 背景；3 列，24px 间距（860px 以下为 1 列）；卡片为 Panel 加 Line 边框，肖像内嵌 1px Line 轮廓。
7. **注册** — 区块 id='register'。一个宽 Panel 卡片（Cyan Mist 以 30% 叠加在 Panel 上，Line 边框）：左列 — 眉标 'SAVE MY SEAT'；H2 'One form, no webhook.'；正文 'Name and email; we show the session in your timezone first, so there are no 3 AM surprises.'；ZoneSelect 带转换后的两行时间读数；CalendarButtons。右列 — 表单：姓名输入框、邮箱输入框、主按钮 'Save my seat'；小字 'Demo: your details stay in this browser; nothing is sent, stored or sold.'；提交后该列交叉淡入到 Good 勾选行和一个 'Download the .ics anyway' 链接。
   布局：Night 背景；卡片最大宽度 1040px，两列，内边距 40px（900px 以下堆叠）。
8. **FAQ 与页脚** — 四个 FaqRows（加号旋转为叉号）位于 Panel 行上。页脚：左侧字标 + 'hello@' + emailDomain；右侧 '© [BRAND]. Sessions run on coffee.' 和 'Built with a VibeFather template' 链接到 https://vibefather.ai。
   布局：FAQ 单列最大宽度 760px，Night 背景；页脚 76px，顶部 Line 边框。

## 资源

- 图片：为本设计制作的模板人像（可随模板自由再分发），全部为 AI 生成的虚构人物，不 resemblance 任何真实个人。用 curl -L -o 将每个文件下载到 public/images/：https://media.vibefather.ai/assets/c236d2a3-329f-490f-b619-efcd3116172e/speaker-ada.webp → public/images/speaker-ada.webp（演讲者 1；alt 'Portrait of speaker Ada Mensah'）；https://media.vibefather.ai/assets/c236d2a3-329f-490f-b619-efcd3116172e/speaker-kenji.webp → public/images/speaker-kenji.webp（演讲者 2；alt 'Portrait of speaker Kenji Watanabe'）；https://media.vibefather.ai/assets/c236d2a3-329f-490f-b619-efcd3116172e/speaker-rukmini.webp → public/images/speaker-rukmini.webp（演讲者 3；alt 'Portrait of speaker Rukmini Iyer'）。共三个文件。如果变量发生变化，请保留这些人像作为虚构占位符，只更改 content.ts 中的姓名。

- 图片：在项目根目录写入 ASSETS.md，包含一个表格：路径、来源 URL、作者、许可证——每个人像一行（来源 'media.vibefather.ai, made for this template'，作者 'VibeFather'，许可证 'Distributed with the template'），另加 @fontsource/sora 和 @fontsource-variable/inter（OFL-1.1）以及 lucide-react（ISC）的行。说明人像是 AI 生成的虚构人物，用作模板占位符。

- 图标：仅使用 lucide-react：CalendarPlus、Clock、Globe2、Map、Play、Qrcode（未使用也可以）、RefreshCcw、Scale、ShieldCheck。描边宽度 1.75，16–24px，颜色继承。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的圆角方块填充 #0B1526，内嵌 1.5px #37C8E8 的圆环，中央是一个青色播放三角形。没有其他 logo：品牌始终以文字形式呈现。

- 字体：安装 @fontsource/sora 和 @fontsource-variable/inter，并在 src/fonts.ts 中按 Setup 所列导入它们。Vite 会将 woff2 文件打包进 dist/。

- 图片：用代码绘制：倒计时翻转卡片、议程轨道、标签胶囊、favicon 以及 .ics 文件（在 src/lib/ics.ts 中构建的纯文本）。除三张人像外没有其他位图；没有舞台或观众的插图。

## 不要做
- 无后端、无表单提交、无 API 请求：注册表单仅保存在浏览器中（localStorage）并明确说明这一点；.ics 在客户端构建并以 Blob 下载；时区转换仅使用 Intl，绝不发起网络请求。
- 每个内部链接都指向文件名或锚点（./index.html、#agenda）——绝不指向裸目录；只有一个页面。
- 不使用真实的网络研讨会平台、工具或徽标（Zoom、Teams、Meet、Webex、Livestorm、Calendly）；会议及其工具以通用方式描述。
- 演讲者、其公司和职位均为虚构；肖像为 AI 生成的虚构人物，年龄和族裔多样，不 resemblance 任何真实个人；不使用真实会议名称或认证。
- 不制造虚假紧迫感或以事实形式呈现参会人数；“席位”措辞保持玩笑性质（“reschedule-proof”），示例数字明确标注为示例。
- 页面上各处显示的日期均来自 [DATE] 变量；页面上不出现其他日期或年份，也不打印今天的日期。
- 一切自托管：字体通过 Fontsource，图标作为 npm 包或内联 SVG，肖像下载到 public/images/。不使用 CDN <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具。
- 生产构建：压缩，无 source map，不将 src/ 复制到 dist/，单条命令 npm run build，输出在 dist/ 下小于 8 MB。
- 除页脚署名链接外，绝不在站内提及 VibeFather；所有文案均为虚构的美式英语。
- 尊重 prefers-reduced-motion：无数字旋转、无肖像缩放、无脉冲；倒计时仍然跳动；颜色/边框悬停效果保留。
- 网站必须在 1440x900 桌面端和 390x844 移动端正常工作且零控制台错误；选择器、表单、FAQ 和按钮仅用键盘即可操作，并有可见的焦点环。
- 保持文案广播式平静：不出现“don't miss out”，不出现“limited spots”末日倒计时；每个字符串都存放在 src/content.ts 中。

---
— Prompt by VibeFather · https://vibefather.ai/t/webinar-registration-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
