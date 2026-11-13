> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 金融科技应用落地页

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个单页网站，用于发布 [APP]——一个移动端消费与储蓄账户，配有 [CARD_NAME] 卡和 [RATE] 储蓄利率（示例数字）。主视觉是一个 CSS 手机模型，循环播放屏幕动画；滚动时切换屏幕；卡片、目标和安全区块全部用代码绘制。单页，index.html；一切都在浏览器中运行，不向任何地方提交数据。

- 受众：上一次因为一项烦人的费用而换银行的人：他们希望在第一次滚动时，就能以通俗英语看到利率、卡片条款和安全说明。
- 目标：等待名单注册和商店打开。访客在十秒内看到手机、利率和按钮；在两分钟内看到目标圆环和卡片展示。
- 语气：Plain-money（朴实理财）：精确数字、短句、零浮夸炒作。一个关于电子表格的冷幽默。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/space-grotesk（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化（Setup）：
  - 使用 npm create vite@latest 并选择 react-ts 模板进行脚手架搭建，然后保留一个真实的 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的每种颜色以 kebab-case 键添加到 theme.extend.colors 中（ink、panel、glass、line、bone、mist、mint、mint-deep、mint-mist、gold、slateink、good），并设置 fontFamily display ['Space Grotesk Variable', 'system-ui', 'sans-serif']、sans ['Inter Variable', 'system-ui', 'sans-serif']。将 borderRadius 的 DEFAULT 设为 14px，并添加 maxWidth { container: '1200px' }。
  - 在 src/fonts.ts 中导入 '@fontsource-variable/space-grotesk' 和 '@fontsource-variable/inter'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（所有字符串、功能、目标、faq 行、费率和条款，带类型），src/lib/brand.ts（appSlug = [APP] 转为小写并将每一段非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 appSlug + '.com'，cardLabel 来自 [CARD_NAME]），src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键为 appSlug + ':waitlist'），src/lib/format.ts（money(n) 使用 en-US 分组且不带小数）。
  - 状态（State）：src/store/waitlist.ts 是一个小型外部 store（useSyncExternalStore），持有 { email, saved } 并持久化到 localStorage。
  - 组件位于 src/components/：Header.tsx、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、Footer.tsx；Hero.tsx（PhoneMock.tsx 含 ScreenBalance.tsx、ScreenGoals.tsx、ScreenCard.tsx）、FeatureRail.tsx（FeatureCard.tsx）、CardShowcase.tsx（BankCard.tsx、NumberMask.tsx）、GoalsSection.tsx（GoalRing.tsx）、RoundUp.tsx、Security.tsx（LayerStack.tsx）、Waitlist.tsx、Faq.tsx（FaqRow.tsx）、StoreButtons.tsx。src/pages/Home.tsx 将它们组合起来。
  - PhoneMock：一个 300x612px 的 div，border-radius 44px，1px Line 边框，ink 表面带有微妙的从上到下的玻璃光泽（linear-gradient），内部有一个刘海胶囊和一个 home 指示条。屏幕填满它并循环切换：Balance → Goals → Card，每个 3.2s，交叉淡入淡出 400ms。桌面端 transform: rotateX(6deg) rotateY(-14deg)（包装器上 perspective 1200px），移动端为平面。循环在悬停/聚焦时暂停，并在 prefers-reduced-motion 下完全停止（显示 Balance）。
  - ScreenBalance：Bone 余额数字在首次进入视图时递增计数（$2,418.60，Inter 700 等宽数字），一个 mint 增量标签 '+$62.40 this week'，三行交易记录（图标点、名称、金额），一个小的本周支出条。
  - ScreenGoals：两个 GoalRing（SVG 圆环，进入视图时动画 stroke-dashoffset）：'Trip to Lisbon 68%' 和 'Emergency fund 41%'，外加一行 round-up 文案 'Round-ups added $14.20 this week'。
  - ScreenCard：BankCard 正面缩小后放在手机内，带有 last-four 标签和一对暂停/已花费的迷你条。
  - BankCard：一个 340x214px 的 SVG/CSS 卡片：深 ink 表面带有 mint 到透明的对角渐变，一个抽象的 EMV 风格芯片（圆角矩形，无真实网络标记），[CARD_NAME] 使用 Space Grotesk 600，以及 NumberMask '•••• •••• •••• 4127'，在悬停/聚焦时展开为完整的虚构数字（aria-label 携带掩码形式）。
  - FeatureRail：随着区块滚动，四个功能中的每一个变为激活状态（IntersectionObserver），并将 PhoneMock 屏幕设置为匹配（Balance → Card → Goals → Round-up）。在移动端，功能以普通卡片堆叠，手机显示普通循环。
  - 首次构建前无需下载任何图片——每个视觉元素都是代码绘制的。public/favicon.svg 如 Assets 下所述。
  - index.html：lang en，<meta name='theme-color' content='#0A1120'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[APP] — banking that behaves</title>。
  - 在项目根目录编写 ASSETS.md，如 Assets 下所述。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体和 favicon.svg。保持在 5 MB 以下。

## 变量
- [APP] — 应用名称（默认：“Fernbank”）。虚构应用的名称，一个单词。用于字标、标题标签、页脚、电子邮件（hello@ + 不含连字符的 appSlug + '.com'）以及卡片上。绝不使用真实银行或金融科技公司。
- [RATE] — 储蓄利率（默认：“4.6%”）。头条储蓄 APY，示例数字。出现在主视觉区、目标区块和 FAQ 小字中，在演示文案中始终附近带有“(sample rate)”。
- [CARD_NAME] — 卡片名称（默认：“Fern Card”）。虚构借记卡的名称。出现在卡面和卡片区块中。任何地方都不出现真实卡组织。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接指向 https://vibefather.ai/t/fintech-app-landing-page（默认：是；删除此行以移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后可以在不触及组件的情况下替换内容。

## 设计
### 颜色（Colors）
- Ink `#0A1120` — 整页背景、卡片正面。
- Panel `#101A2E` — 卡片、区块面板、手机机身。
- Glass `#16233C` — 凸起面板、悬停填充、选择填充、玻璃光泽基底。
- Line `#23324E` — 1px 细线、卡片边框、输入框边框、手机边缘。
- Bone `#EEF3F8` — 主文本、余额数字、标题。
- Mist `#8FA0B8` — 次要文本、说明文字、眉题、交易名称。
- Mint `#3DDC97` — 唯一的活跃强调色：利率标签、主按钮、环形进度、聚焦环、变化标签。
- Mint Deep `#22B37A` — 主按钮的悬停与按下态。
- Mint Mist `#12332E` — 标签填充、选中态、浅色面板。
- Gold `#E5B54B` — 仅用于卡片芯片和卡片正面上的一处暖色细节。
- Slate Ink `#08121C` — 薄荷色或骨色填充上的文本。
- Good `#3DDC97` — 成功状态、候补名单勾选、已验证圆点。

### 排版（Typography）
- 展示字体：H1、H2、利率数字、卡片名称、字标 — Space Grotesk，科技感但温暖：Space Grotesk (OFL)，字重 500/700
- 文本与 UI：正文、交易、表单、说明文字；所有金额使用等宽数字：Inter (OFL)，字重 400/500/600

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。容器最大宽度 1200px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面端 104px、1024px 以下 76px、640px 以下 60px。字号比例：H1 clamp(40px, 5.4vw, 66px) Space Grotesk 700，行高 1.05；H2 clamp(26px, 3.5vw, 42px) Space Grotesk 700；利率数字 Space Grotesk 700 56px，% 为 0.5em；导语 Inter 400 17px / 1.65 Bone 90%；正文 15.5px / 1.7；眉题 Inter 600 12px 大写 letter-spacing 0.16em Mist；说明文字 13px Mist。按钮：高度 50px，Inter 600 14px；主按钮 Mint 填充配 Slate Ink 文本，次按钮 1px Line 边框配 Bone 文本。输入框：高度 50px，Glass 填充，1px Line 边框，聚焦时 Mint 边框 + 2px 偏移环。
- 圆角：卡片和面板 14px，按钮和输入框 10px，胶囊和标签 999px，手机 44px。
- 动效：缓动：--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于屏幕切换和环形进度；--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于入场显现。产品演示平滑。
- 动效：显现：包裹在 <Reveal> 中的区块初始 opacity 0、translateY(16px)，在视口 15% 处用 700ms --ease-out 落定（Motion whileInView，once），同级元素错开 70ms。
- 动效：首屏：手机以平面进入并在 900ms 内旋转到其 3D 姿态；H1 各行上升；利率标签弹跳一次（scale 0.96→1）。
- 动效：手机循环：屏幕每 3.2s 交叉淡入淡出，如 Setup 所述；该循环也是减少动效时的回退（冻结在 Balance）。
- 动效：FeatureRail：每个功能激活时，手机屏幕交叉淡入淡出以匹配（400ms），激活卡片上浮 2px 并带 Mint 1px 左侧轨道。
- 动效：余额计数：金额数字在首次进入视图时于 900ms 内计数到其数值（等宽，无卡顿）。
- 动效：GoalRings：stroke-dashoffset 在进入视图时动画到各百分比（900ms --ease-io）；百分比同步计数。
- 动效：NumberMask：悬停/聚焦时圆点以 240ms 宽度缓动展开为数字；数字前态带模糊（1px）以营造显现感。
- 动效：候补名单提交：表单交叉淡入淡出为 Good 勾选行 'Saved — this demo keeps your email in this browser only.'
- 动效：链接：.link-draw 在悬停和 focus-visible 时于 260ms 内生长出 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 手机冻结在 Balance，无计数（显示最终值），环形以静止状态绘制，无标签弹跳；颜色/边框悬停保留。在 index.css 中使用 CSS @media 以及 Motion 的 useReducedMotion。
- 图像：任何地方都没有照片 — 一切皆以代码绘制：手机模型及其三个屏幕、带抽象芯片的 SVG 卡片、目标环、凑整可视化、安全层堆叠和 favicon。无真实网络标识（无 Visa/Mastercard/Amex 形状），无平台商店徽章（商店按钮用 lucide 图标绘制为通用样式），无人物。图标：仅 lucide-react，描边宽度 1.75。

## 页面与区块
### 金融科技应用落地页（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均针对默认值编写（[APP] = Fernbank，[RATE] = 4.6%，[CARD_NAME] = Fern Card）。将每个字符串、功能、目标、交易、FAQ 行和条款都放入 src/content.ts 并从中渲染。如果任何变量不同，请重写 H1、功能行、目标、交易和 FAQ，使其对该应用具体且可信，同时保持相同的结构和数量（4 个功能、2 个目标环、3 行交易、4 行 FAQ）。功能：'No monthly fee, actually' 'the fee is zero; the fine print agrees'；'Save at [RATE] (sample rate)' 'goals you can name, rings you can watch fill'；'Round-ups, quietly' 'every purchase rounds up into a goal you pick'；'The [CARD_NAME] works everywhere' 'and freezes from the app in one tap'。目标：'Trip to Lisbon' 68% $1,360/$2,000；'Emergency fund' 41% $2,050/$5,000。交易：'Grocer Row Market' −$42.18；'Transit pass' −$2.75；'Paycheck' +$1,940.00。FAQ：'Is my money insured?' 'This is a demo — in a real app this line would name the partner bank and insurance limits.'；'What does the card cost?' 'The demo answer: nothing to get, nothing monthly, nothing to freeze.'；'When do savings pay out?' 'Monthly, on the first — [RATE] is a sample rate for the demo.'；'Can I close the account?' 'From the app, two taps, no retention maze (this demo stores nothing at all).' 所有利率和费用数字均为虚构的示例值，文案在出现这些数字的地方标注了 'sample'。
   布局：不适用
   动效：不适用
2. **页头（Header）** — 左侧：字标 '[APP]'（Space Grotesk 700 19px，Bone 色）带一个薄荷色圆点；上方为 'SPENDING + SAVING'（10px 大写，Mist 色）。右侧导航（Inter 500 14px）：'Features' → #features，'Card' → #card，'Security' → #security，以及一个紧凑的主按钮 'Join waitlist' → #waitlist。720px 以下：字标 + 按钮。
   布局：顶部粘性定位，高度 68px，Ink 色 92% 不透明度带背景模糊，Line 色底边框。
3. **首屏（Hero）** — 两栏。左侧（6 列）：眉标 'A BANK THAT BEHAVES'；H1 'Money, minus the drama.'；导语 '[APP] is one account for spending and saving: no monthly fee, goals that fill themselves, and a [RATE] savings rate (sample) that isn't a teaser.'；CTA 行：主按钮 'Join the waitlist' → #waitlist，旁边是 StoreButtons；信任行（薄荷色对勾）：'No monthly fee'、'Freeze in a tap'、'Works abroad (sample terms)'。右侧（5 列，偏移 1）：PhoneMock 在柔和的薄荷色径向光晕上播放其循环动画。
   布局：Ink 色背景，顶部内边距 128px；手机在其列中居中。
4. **功能栏（Feature rail）** — 区块 id='features'。眉标 'FOUR THINGS IT DOES WELL'；H2 'One screen per promise.' 左侧：四个 FeatureCards（来自名册）堆叠；激活的那张带有 Mint 色左侧轨道和 Glass 填充。右侧：PhoneMock（桌面端粘性定位），其屏幕跟随激活的功能。900px 以下手机隐藏，卡片独立展示并带有小的内联屏幕提示。
   布局：Panel 色调背景；两栏：6 列卡片，5 列手机（粘性定位，顶部 96px）。
5. **卡片展示（Card showcase）** — 区块 id='card'。左侧（5 列）：BankCard 以柔和的 3D 倾斜展示并带有地面阴影；说明文字 'Hover the number — it's a demo card, the digits are invented.' 右侧（6 列，偏移 1）：眉标 'THE [CARD_NAME]'；H2 'One card, zero theater.'；三行条款配 lucide 图标：'No monthly fee' 'and no minimum balance'；'Freeze and unfreeze' 'from the app, one tap, instant'；'Works abroad' 'no foreign-transaction fee (sample terms)'。
   布局：Ink 色背景；卡片列居中；条款为细线分隔的行。
6. **目标与凑整（Goals and round-ups）** — 区块 id='goals'，Panel 背景。眉标 'SAVING, ON AUTOPILOT'；H2 'Rings you'll actually watch fill.' 左侧：两个 GoalRings 并排（68% / 41%），下方带名称和金额。右侧：RoundUp 面板——一张收据风格的卡片（Glass，Line 边框），显示三笔凑整的消费（$4.20 → $5.00 · $12.75 → $13.00 · $8.10 → $9.00），凑整差额用 Mint 色显示，底部一行 '$1.95 into Lisbon this week'。
   布局：两栏 24px 间距（900px 以下堆叠）；环直径 180px。
7. **安全（Security）** — 区块 id='security'。眉标 'LOCKED, PLAINLY'；H2 'Security in sentences, not footnotes.' LayerStack（绘制）：三个堆叠的玻璃面板，分别标注 'Device check'、'Instant freeze'、'Real alerts'，在滚动时展开（每个再偏移 12px，60ms 交错）。旁边是四行朴素文字：'Money sits at a partner bank (this demo names none).' / 'Card numbers live in the app, not on the card.' / 'Every login pings your device first.' / 'Freeze beats fraud: one tap, instant.' 说明文字：'Sample security copy for a fictional product.'
   布局：Ink 色背景；堆叠在左（5 列），文字在右（6 列，偏移 1）。
8. **等候名单（Waitlist）** — 区块 id='waitlist'。一张宽大的 Glass 卡片，带 Mint 色 1px 顶部轨道：眉标 'JOIN THE WAITLIST'；H2 'Be first when it opens.'；单行输入框 + 主按钮 'Save my spot'；小字 'Demo: nothing is sent; your email stays in this browser.' 提交时，交叉淡入到 Good 对勾行。卡片下方是 StoreButtons 行，配说明文字 'Also pretending to be on the stores.'
   布局：Panel 背景；卡片最大宽度 640px 居中，内边距 40px。
9. **FAQ 与页脚（FAQ and footer）** — 四个 FaqRows（加号旋转为叉号）位于 Glass 行上。页脚：左侧字标 + 'hello@' + emailDomain；右侧 '© [APP]. Sample product; sample rates; sample everything.' 以及 'Built with a VibeFather template' 链接到 https://vibefather.ai。
   布局：FAQ 单栏最大宽度 760px；页脚 76px，Line 色顶边框。

## 资产
- 图片：不使用照片或下载的图片：所有视觉元素均以代码绘制（手机模型、屏幕、SVG 卡片、圆环、收据、图层堆叠、favicon）。不要获取或热链任何内容。
- 图片：在项目根目录编写 ASSETS.md，列出代码绘制的资产（手机模型、卡片、圆环、收据、图层堆叠、favicon —— 'drawn in code, original'）以及 npm 包：@fontsource-variable/space-grotesk 和 @fontsource-variable/inter（OFL-1.1）、lucide-react（ISC）。
- 图标：仅使用 lucide-react：ArrowRight、Check、Eye、EyeOff、Globe2、Lock、Smartphone、Snowflake、Zap。描边宽度 1.75，16–24px，颜色继承。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的圆角方块填充 #0A1120，一个薄荷色（#3DDC97）的圆角 'F' 形标记，由两个圆角矩形构成（抽象，字母形状可选）。无品牌标志。
- 字体：安装 @fontsource-variable/space-grotesk 和 @fontsource-variable/inter，并在 src/fonts.ts 中按 Setup 所列进行导入。Vite 会将 woff2 文件打包到 dist/ 中。

## 禁止事项
- 无后端、无表单提交、无对 API 的 fetch：等候名单仅保存在浏览器中（localStorage）并明确说明这一点；商店按钮是惰性锚点，配有诚实的说明文字。
- 每个内部链接都指向文件名或锚点（./index.html、#card）——绝不指向裸目录；只有一个页面。
- 不使用真实银行、卡组织、金融科技品牌或其标识（不得出现 Visa/Mastercard/Amex 的图形，不得出现 Apple/Google 商店徽章——按钮为通用绘制）；卡片属于虚构品牌自有。
- 不得将任何真实利率、费用或保险数字作为事实呈现：每个数字都是虚构的示例，并在出现处标注“sample”；不得出现真实监管机构名称（FDIC、FCA）——演示中说明真实应用会注明其合作银行。
- 无照片、无人物；所有视觉元素均由代码绘制。
- 一切自托管：字体通过 Fontsource，图标以 npm 包或内联 SVG 形式引入。不得使用 CDN 的 <script> 或 <link> 标签，不得使用 Google Fonts，不得使用分析工具。
- 生产构建：压缩、无 source map、不将 src/ 复制到 dist/、单条命令 npm run build、输出位于 dist/ 且小于 5 MB。
- 任何地方都不得出现日期或年份；网站永不显示当天日期。
- 除页脚署名链接外，网站内绝不提及 VibeFather；所有文案均为虚构的美式英语。
- 尊重 prefers-reduced-motion：手机冻结在首屏、无数字递增动画、圆环静止、无扇形展开；颜色/边框悬停效果保留。
- 网站必须在 1440x900 桌面端和 390x844 移动端正常工作，控制台零错误；卡片揭示、等候名单、FAQ 和按钮仅用键盘即可操作，并有可见的焦点环。
- 文案保持朴素理财风格：不出现“revolutionary”，不谈加密货币；每个字符串都存放在 src/content.ts 中。

---
— Prompt by VibeFather · https://vibefather.ai/t/fintech-app-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
