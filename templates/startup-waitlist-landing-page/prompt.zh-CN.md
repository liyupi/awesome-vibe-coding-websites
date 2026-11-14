> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 创业公司等候名单落地页

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的单页候补名单页面，该产品正在做 [WHAT]，将于 [LAUNCH] 发布，目前已有 [WAITLIST] 人在排队（示例数字）。页面必须捕获邮箱并进行内联验证，然后在客户端展示排队位置、可复制的推荐链接，以及一行分享按钮，其复制操作会明显改善排队位置——这显然是一个演示机制，数据存储在此浏览器中。下方：三张权益卡片、一条带小统计行的测试版引言、五条 FAQ 回答、一个页脚。单页：index.html。不向任何地方提交数据。

- 受众：开发者和早期采用者，他们每月看到四十个发布页面，只注册三个。他们会扫一眼标题，瞥一眼排队数字作为社会证明，并希望用一句诚实的话解释推荐机制。
- 目标：收集邮箱并促成一次分享。访客应在十秒内知道产品做什么以及队伍在前进；在一分钟内他们应该已经加入并复制了自己的链接。
- 语气：干练而自信，像一篇有个性的 README。短句，每屏一个笑话，不用感叹号，不用“revolutionary”。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/archivo（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 npm create vite@latest 以 react-ts 模板搭建脚手架。项目根目录下只有一个 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist'，sourcemap false，assetsInlineLimit 0 }。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4（tailwindcss + postcss + autoprefixer），content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将 Design 下的每种颜色以 kebab-case 键添加到 theme.extend.colors（void-black、coal、graphite、bone、ash、lime、lime-deep、hairline），并设置 fontFamily display ['Archivo Variable', 'system-ui', 'sans-serif']、mono ['IBM Plex Mono', 'ui-monospace', 'monospace']。将 borderRadius DEFAULT 设为 4px，并添加 maxWidth { container: '1040px' }。
  - 在 src/fonts.ts 中导入 '@fontsource-variable/archivo' 以及 '@fontsource/ibm-plex-mono/400.css'、'@fontsource/ibm-plex-mono/500.css'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（所有字符串、数字、权益、统计数据、FAQ 答案和推荐文案，带类型）、src/lib/brand.ts（brandSlug = [BRAND] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 brandSlug + '.com'）、src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键前缀为 brandSlug + ':'）、src/lib/queue.ts（seededPosition(email) → 根据邮箱哈希生成稳定的伪随机 4 位排位；referralUrl() → location.href + '?ref=' + 由同一哈希生成的稳定 6 字符代码；bumps(from, n) 用于模拟跳过）。
  - 状态：src/store/waitlist.ts 是一个小型外部 store（useSyncExternalStore），持有 { email, position, referrals } 和 joined 标志，持久化到 localStorage 键 brandSlug + ':spot'。location.search 中的 ?ref=<code> 会在加载时显示一个小型 'You were referred — you start 3 spots ahead' 丝带（仍是访客自己的浏览器状态）。
  - src/components/ 中的组件：Header.tsx、DotField.tsx（canvas 背景）、Hero.tsx（EmailCapture.tsx 带内联验证，TrustLine.tsx）、SpotCard.tsx（PositionFigure.tsx、ReferralBox.tsx 带复制按钮、ShareRow.tsx）、Benefits.tsx、Proof.tsx（Quote.tsx、StatsRow.tsx）、Faq.tsx、Footer.tsx、Reveal.tsx（Motion whileInView 包装器）。src/pages/Home.tsx 组合它们。
  - public/favicon.svg 如 Assets 下所述。index.html：lang en，<meta name='theme-color' content='#0B0C10'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[BRAND] — Join the waitlist</title>。
  - 在项目根目录编写 ASSETS.md，如 Assets 下所述。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体和 favicon.svg。保持在 5 MB 以下——不要图片。

## 变量
- [BRAND] — 产品名称（默认："Tandem"）。虚构的产品名称。用于字标、标题、页脚、电子邮件（hello@ + 不含连字符的 brandSlug + .com）和 localStorage 键。绝不是真实的产品或初创公司。
- [WHAT] — 它的功能（默认："pair-programming sessions for solo developers"）。一个全小写短语，说明产品类别。驱动标题的第二行、权益卡片和两个 FAQ 答案。保持具体且简短。
- [LAUNCH] — 发布窗口（默认："this winter"）。一个季节短语，绝不是带日期的截止时间（'this winter'、'this spring'）。用于主视觉副行、确认卡片和一个 FAQ 答案。
- [WAITLIST] — 队列数字（默认："2,417"）。在主视觉副行和统计行中显示的、带逗号格式的示例队列规模。显然是演示数字（FAQ 中承认这一点）；保持在 800–9,999 之间。
- [CREDIT] — 在页脚保留一个小的 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/startup-waitlist-landing-page（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 虚空黑（Void Black）`#0B0C10` — 页面背景、页脚、名额卡片。
- 煤黑（Coal）`#12141A` — 权益卡片和 FAQ 卡片、邮箱输入框填充、标签。
- 石墨灰（Graphite）`#1B1E26` — 悬停表面、输入框聚焦填充、分享行按钮。
- 骨白（Bone）`#EDEEF0` — 主文本：标题、正文、卡片标题。
- 灰烬（Ash）`#8B909C` — 次要文本、说明文字、眉标、信任行。
- 青柠（Lime）`#C6F432` — 唯一强调色：加入按钮、排队号码、推荐链接、聚焦环、画布圆点最亮时、统计数字。
- 深青柠（Lime Deep）`#A8D226` — 按钮悬停、位置刻度、选中状态。
- 细线（Hairline）`#262A33` — 1px 细线、卡片边框、输入框边框、分隔线。

### 字体排印
- 展示字体：H1、H2、权益标题、字标 — 粗重、宽字距的 Archivo：Archivo (OFL)，字重 700/800
- 数字与链接：排队位置、推荐 URL、统计行、眉标标签（大写）：IBM Plex Mono (OFL)，字重 400/500

### 布局与动效
- 间距：8px 基准单位。容器最大宽度 1040px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px。单列流（等待列表页是漏斗，不是宣传册）。区块垂直内边距桌面端 96px、1024px 以下 72px、640px 以下 56px。字号阶梯：H1 clamp(52px, 9vw, 120px) Archivo 800，行高 0.94，字距 -0.03em，大写；H2 clamp(28px, 4vw, 44px) Archivo 800 大写 字距 -0.02em；权益标题 19px Archivo 700；导语 18px / 1.6 Bone 80%；正文 16px / 1.7（最大宽度 60ch）；眉标 IBM Plex Mono 500 12px 大写 字距 0.2em Ash；说明文字 IBM Plex Mono 400 13px Ash。排队位置为 IBM Plex Mono 500 clamp(72px, 14vw, 160px) 青柠色，tabular-nums。按钮：高度 54px，Archivo 700 15px 大写 字距 0.06em。加入：青柠填充，虚空黑文字。次要/分享：1px Hairline 边框于 Coal 上，Bone 文字，悬停 Graphite。输入框：高度 54px，Coal 填充，1px Hairline 边框，16px IBM Plex Mono，聚焦边框青柠。全局聚焦环：2px 青柠轮廓，偏移 3px。
- 圆角：卡片、按钮、输入框和名额卡片均为 4px — 锐利的发布能量。除被推荐缎带外不使用胶囊形。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现和位置计数器；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于名额卡片切换和 FAQ。干脆利落但绝不卖萌。
- 动效：DotField：约 140 个圆点的画布，以缓慢的 2D 噪声漂移；靠近光标的圆点向青柠色变亮并轻柔排斥。60fps，rAF 循环在标签页隐藏时暂停；在 prefers-reduced-motion 下该场渲染一帧静态画面。圆点绝不遮挡文字（该场位于文字区域后方虚空渐变之上，最大不透明度 40%）。
- 动效：H1：单词从 translateY(28px) 和 opacity 0 升起，90ms 交错，600ms --ease-out；最后一个单词上的青柠色句点在整行落定后像光标一样闪烁一次（180ms 不透明度切换，仅一次）。
- 动效：邮箱捕获：验证错误使输入框抖动 4px 一次，并以青柠色（不是红色 — 调色板中没有红色）显示内联提示行；提交时按钮标签切换为 'Joining…' 持续 600ms，然后主视觉的表单区域以 300ms --ease-io 滑动切换为 SpotCard。
- 动效：SpotCard：位置从略高于最终数字倒数至最终数字，历时 900ms --ease-io（像老虎机落定，不是旋转）；每次推荐复制/分享都会使位置明显减少 3，伴随快速的 240ms 计数和青柠色对勾；推荐框复制时按钮标签切换为 'Copied ✓' 持续 1400ms。
- 动效：权益：卡片以 90ms 交错和 6px 上升显现；图标在首次进入视口时绘制一次（stroke-dashoffset）。
- 动效：统计行：数字在显现时计数一次（700ms），然后静止；'(sample data)' 说明文字从不做动画。
- 动效：FAQ 手风琴：高度 0 到 auto，不透明度 0 到 1，260ms --ease-io；加号旋转 45 度变为 X。
- 动效：被推荐缎带（存在 ?ref= 时）：加载时从页眉滑下一次，保持可关闭。
- 动效：链接：.link-draw 在悬停和 focus-visible 时以 250ms 生长出 1px 青柠色下划线。
- 动效：prefers-reduced-motion: reduce — 静态 DotField 帧，无计数器（最终值立即渲染），无抖动，无交错；颜色和边框悬停变化保留。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：无摄影、无图库、无外部图片 — 一切用代码绘制。DotField 画布背景是唯一的氛围艺术；权益图标为 Lucide；排队"计量表"是一条细 SVG 进度线；分享图标为通用 Lucide 图标（Link2、Mail、MessageCircle）— 绝不使用真实社交平台标志。微妙的 CSS 颗粒叠加层（重复 radial-gradient，3% 不透明度）防止黑色出现色带。图标：仅 lucide-react，描边宽度 2。

## 页面与区块
### 等候名单（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[BRAND] = Tandem，[WHAT] = 为独立开发者提供的结对编程时段，[LAUNCH] = 今年冬天，[WAITLIST] = 2,417）。将每个字符串和数字放入 src/content.ts 并从中渲染。若任何变量值不同，请重写标题、优势行、引语、统计数据和 FAQ 答案，使其对新产品的描述具体且可信，同时保持相同的结构和数量（3 条优势、3 项统计、1 条引语、5 个 FAQ）。所有数字均为示例数据，页面在统计行中会说明一次。产品事实：先进行私人测试版，[WAITLIST] 人在排队（示例）；每成功分享一次推荐可跳过 3 个位置（演示机制，本地存储）；电子邮件仅用于邀请，只发送一次通知，绝不出售；据称由一位开发者和一只狗打造。
   布局：不适用
   动效：不适用
2. **页眉** — 左侧：字标 '[BRAND]'（Archivo 800 18px 大写，字母间距 0.04em），后跟一个 6px 的 Lime 方形点，链接到 ./index.html。右侧：'Why' → #why，'FAQ' → #faq，以及 hello@ + emailDomain 作为低调的 mailto 链接。页眉下方有一个推荐横幅槽位：当 URL 带有 ?ref=<code> 时，显示 'Referred — you start 3 spots ahead.'，并带有一个 X 可关闭。
   布局：顶部固定，高度 68px，Void Black/80% 带模糊效果和 Hairline 底部边框，与容器对齐。
3. **带电子邮件捕获的英雄区** — DotField 画布填充英雄区，位于所有内容之后。居中堆叠：眉标 'WAITLIST — [WAITLIST] IN LINE (SAMPLE)' 使用等宽字体；H1 两行：'CODE ALONE.' / '*TOGETHER.*'（最后一个词为 Lime 斜体）；副行 18px Bone/80% 最大宽度 540px：'[BRAND] is [WHAT] — matching you with a partner for a focused hour, [LAUNCH]. Join the line; we''ll ping you once.' EmailCapture：一个输入框（占位符 'you@work.dev'）和 Lime 色的 'Join the line' 按钮并排（在 560px 以下堆叠为全宽）；内联验证（'That email looks unfinished — one more pass?'）；表单下方的 TrustLine 使用等宽字体 12px Ash：'NO SPAM · NO CARD · ONE EMAIL, THEN SILENCE'。加入前，表单下方有一行等宽字体说明：'Joining stores your spot in this browser — the demo''s only trick.'
   布局：Void Black，页眉下方顶部垂直内边距 160px，底部 96px，最小高度 88svh。画布绝对定位 inset 0，最大不透明度 40%；径向 Void 渐变保持中左侧可读。表单最大宽度 620px。
4. **位置卡片（加入后）** — 加入后替换表单区域。在 Coal 上带 1px Lime 边框：眉标 'YOU''RE IN — SAMPLE QUEUE'；PositionFigure '#2,418' 倒计数至稳定（来自种子哈希；若被推荐则加 3 个位置）；行 'in line for the [LAUNCH] invite'（等宽字体，Ash）；ReferralBox — 推荐 URL 使用等宽字体 14px 并带复制按钮；ShareRow — 三个通用分享按钮（Link2 'Copy link'，Mail 'Email a friend' 作为 mailto 并在正文中包含 URL，MessageCircle 'Share anywhere' 复制并显示 toast 行）；机制说明行使用等宽字体 12px Ash：'Each share skips you 3 spots — in this demo, instantly and locally. The real queue is being built right now.' 一个小型 'Not you? Leave the line' 文本按钮清除存储的位置。
   布局：与表单宽度相同；切换动画 300ms --ease-io。PositionFigure 占主导；其下方的计量条按 (WAITLIST − position)/WAITLIST 比例填充 Lime。
5. **优势** — 区块 id='why'。眉标 'WHY BOTHER' 和 H2 'Three honest reasons.' 卡片在 Coal 上带 1px Hairline 边框：1) Users 图标 — 'A partner, not an audience' — 'One matched developer, one focused hour, no stream chat, no performance.' 2) CalendarClock 图标 — 'Slots that respect deep work' — 'Sessions slot into your calendar''s real gaps; the matcher knows a 2pm slump from a 10am streak.' 3) Timer 图标 — 'Ship by the end of the hour' — 'Every session ends with a demo, a diff, or a very good reason there isn''t one.'
   布局：Void Black 延续。三列 20px 间距；卡片 24px 内边距；图标 24px Lime；标题 Archivo 700 19px；行 14.5px / 1.65 Bone/80%。860px 以下：堆叠。
6. **证明** — 单个居中引语块：'"Two sessions in the beta unblocked a side project I''d abandoned in March. The matcher paired me with someone who had made my exact mistake, twice."' — 'Rin, beta tester #114'（等宽字体）。下方 StatsRow 使用等宽字体，Lime 数字配 Ash 标签和一行说明：'1,400+ SESSIONS · 27 MIN MEDIAN MATCH · 4.9/5 SESSION RATING (SAMPLE DATA)'。
   布局：Coal 色带全宽，带 1px Hairline 顶部/底部边框；引语最大宽度 720px，22px Archivo 700 / 1.45；统计行间距 40px，移动端换行。
7. **FAQ** — 区块 id='faq'。眉标 'QUESTIONS' 和 H2 'Five answers, no hedging.' 手风琴：1) 'When does it launch?' — 'The private beta starts [LAUNCH]; the waitlist goes in order, referrals first. The public version follows once the matching feels boring — in the best way.' 2) 'How do referrals actually work?' — 'In this demo: instantly and in your browser. In the real queue: each verified share skips you three spots; we can verify links, not vibes.' 3) 'What does it cost?' — 'The beta is free. After that: a flat monthly price smaller than your coffee budget — on the page before you ever enter a card.' 4) 'Who will I be paired with?' — 'Developers who booked the same slot and share your stack''s rough neighborhood. You''ll see a profile before you accept; a bad match costs you nothing but the clicking.' 5) 'Is my email safe?' — 'It''s used once, for the invite, and never sold, shared or 'anonymized'. The unsubscribe is one click and actually works.'
   布局：Void Black，行在 Coal 上带 1px Hairline 边框，问题 Archivo 700 16px，答案 15px / 1.7 Bone/85% 最大宽度 64ch，右侧 Plus 图标。容器最大宽度 720px。
8. **页脚** — 一个 Coal 色带：左侧，'[BRAND]' 字标带 Lime 点和行 '— [WHAT].'（14px Ash）；右侧，'hello@ + emailDomain' 和 'Waitlist terms: one spot per browser, kindness per session.'（等宽字体 12px）。Hairline 下方的底线：'© [BRAND]. Sample data, real intent.'
   布局：垂直内边距 48px，两部分行，底线在 hairline 下方 24px；640px 以下堆叠。

## 资产
- 图标：仅使用 lucide-react：Users、CalendarClock、Timer、Plus、X、Copy、Check、Link2、Mail、MessageCircle、ArrowRight。描边宽度 2，16–24px，颜色继承。分享图标为通用 Lucide 图标——绝不使用真实社交平台标志。public/favicon.svg 手写：viewBox 0 0 32 32，一个 32x32 的 rect，rx 5，填充 #0B0C10，带 1px #C6F432 边框，一个 Lime 终端提示符字形（由两笔 Lime 描边构成的 '>' 形状和一个块状光标）。无其他标志：产品名称始终以文字形式呈现。
- 图像：仅在代码中绘制——无照片、无图库素材、无外部图像。DotField canvas 背景、队列计量条、颗粒叠加层（3% 的重复 radial-gradient）、所有按钮和 favicon 均为 SVG/CSS/canvas。编写 ASSETS.md，列出 lucide-react（ISC）、@fontsource-variable/archivo 和 @fontsource/ibm-plex-mono（OFL-1.1），并注明“无图像资产；所有视觉元素均在代码中绘制。”
- 字体：安装 @fontsource-variable/archivo 和 @fontsource/ibm-plex-mono，并按 Setup 中所述在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包到 dist/ 中。

## 不要做
- 无后端、无表单提交、不向任何 API 发起 fetch：邮箱、排队位置、推荐和已推荐缎带状态仅存在于浏览器中（localStorage + URL 查询参数）；名额卡片需说明该机制为演示。
- 一切资源自托管：字体通过 Fontsource，图标以 npm 包或内联 SVG 形式引入。不得使用 CDN 的 <script> 或 <link> 标签，不得使用 Google Fonts，不得使用分析工具。
- 生产构建：压缩、无 source map、不将 src/ 复制进 dist/、单条命令 npm run build、输出位于 dist/ 且小于 5 MB。
- 不得出现真实初创公司或产品；任何位置不得出现真实社交平台图标或品牌标识；示例数字在每个展示它们的区块中至少标注一次“(sample)”或“(sample data)”。
- 任何位置不得出现日期或年份；发布窗口仅使用季节短语；网站永不显示当天日期。
- 除可选的页脚署名链接外，网站内绝不提及 VibeFather 或任何其他品牌；所有文案均为虚构的美式英语。
- 在所有位置尊重 prefers-reduced-motion：DotField 渲染静态帧，计数器显示最终值，无抖动或交错动画；保留颜色/边框的悬停变化。
- 页面必须在 1440x900 桌面端和 390x844 移动端正常工作且控制台零错误；表单、复制按钮、分享行和手风琴仅用键盘即可操作，且每个交互元素都有可见的焦点环。
- 文案保持具体：不得使用 lorem，不得使用“revolutionary”；每个数字都存放在 src/content.ts 中并带有其示例标签。

---
— Prompt by VibeFather · https://vibefather.ai/t/startup-waitlist-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
