> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# SaaS 定价页面

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的单页定价页面，[BRAND] 是一款按席位计价的 [PRODUCT] 工具。它必须在一个页面上回答买家关于定价的全部问题：月付/年付切换（年付节省 20%）、席位滑块（1–100，默认 [SEAT_DEFAULT]）实时更新每个档位的总价、三张基于 $[BASE_PRICE] 基准价推导出的档位卡片（Starter ×1、Team ×2 为主推、Business ×4）、一条信任背书条、一张十六行且表头吸顶的功能对比表、一个朴素的企业联系区块，以及六问 FAQ。单页：index.html，包含各区块（#calculator 隐含在 hero 中、#compare、#enterprise、#faq）。一切都在浏览器中运行；不向任何地方提交数据。

- 受众：运营负责人和团队管理者，年龄 28–50，各自在一个标签页里对比三款工具。他们想在几秒内算出自己团队人数对应的真实按席位价格，讨厌中间档位被“联系销售”墙挡住，会读 FAQ 答案来找出取消条款里的坑。
- 目标：让访客选定一个档位并进入免费试用。十秒内他们应看到切换开关和主推档位；三十秒内看到自己席位数量对应的总价。
- 语气：直接、略带冷幽默，像一个尊重读者的定价页面。具体数字，不要“适合各种团队的灵活方案”这类废话，最多一个得体的玩笑。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/space-grotesk（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 react-ts 模板通过 npm create vite@latest 脚手架创建。项目根目录下一个 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4（tailwindcss + postcss + autoprefixer），content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将 Design 下的每种颜色以 kebab-case 键添加到 theme.extend.colors（white、mist、fog、ink、slate-ink、hairline、indigo、indigo-deep、indigo-mist、good），fontFamily display ['Space Grotesk Variable', 'system-ui', 'sans-serif']，sans ['Inter Variable', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 12px，并添加 maxWidth { container: '1120px' }。
  - 在 src/fonts.ts 中导入 '@fontsource-variable/space-grotesk' 和 '@fontsource-variable/inter'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（每个字符串、数字、层级、功能行、FAQ 答案和企业术语，均带类型），src/lib/brand.ts（brandSlug = [BRAND] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 brandSlug + '.com'，salesMail = 'sales@' + emailDomain），src/lib/pricing.ts（纯定价逻辑：perSeat(tier, cycle) = BASE × tier.multiplier × (cycle annual ? 0.8 : 1)，tierTotal = perSeat × seats；money(n) 格式化为美元，仅在需要时显示美分）。
  - 状态：src/store/pricing.ts 是一个小型外部 store（useSyncExternalStore），持有 { cycle: 'monthly' | 'annual', seats: number }，并提供 setCycle 和 setSeats；不做持久化——定价页面不会记住你。
  - 组件位于 src/components/：Header.tsx、Footer.tsx、Eyebrow.tsx、Reveal.tsx（Motion whileInView 包装器）、CycleToggle.tsx（带 save-20% 标签）、SeatSlider.tsx、TierCard.tsx（PriceLine.tsx 带计数数字）、TrustStrip.tsx、CompareTable.tsx（StickyHead 行；Cell.tsx 渲染 check/dash/number）、Enterprise.tsx、Faq.tsx、CtaBand.tsx、AppPanel.tsx（SVG 产品模拟图）。src/pages/Home.tsx 组合它们。
  - public/favicon.svg 如 Assets 下所述。index.html：lang en，<meta name='theme-color' content='#FFFFFF'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>Pricing — [BRAND]</title>。
  - 在项目根目录编写 ASSETS.md，如 Assets 下所述。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体和 favicon.svg。保持在 5 MB 以下——基本没有图片。

## 变量
- [BRAND] — 产品名称（默认："Slateline"）。虚构的 SaaS 产品名称。用于字标、标题、页脚、电子邮件（hello@ 和 sales@ + 不含连字符的 brandSlug + .com）以及 SVG 应用面板。绝不是真实产品。
- [PRODUCT] — 它的功能（默认："team scheduling and time tracking"）。用一个全小写短语表述的产品类别。驱动主视觉标题、各档功能行、对比行名称和 FAQ 答案。保持足够通用，以便全部十六个表格行仍然说得通。
- [BASE_PRICE] — 基础月价（默认："12"）。Starter 每席位月价，以数字表示。Team 为 ×2，Business 为 ×4；年付所有档位打 8 折。页面上的每个价格都由此数字推导而来。
- [SEAT_DEFAULT] — 默认席位数（默认："10"）。席位滑块起始位置，以数字表示（1–100）。一个对该产品买家而言典型的数字；计算器从此处实时更新。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接指向 https://vibefather.ai/t/saas-pricing-page（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 白色（White）`#FFFFFF` — 页面背景、套餐卡片、表头。
- 薄雾色（Mist）`#F5F6F8` — 交替区块背景（表格、FAQ）、输入框填充、标签片。
- 雾色（Fog）`#EBEDF1` — 滑块轨道、表格行底纹、禁用状态。
- 墨色（Ink）`#101319` — 标题、正文、表格功能名称、图标颜色。
- 石板墨色（Slate Ink）`#565E6C` — 次要文本、说明文字、眉题、按席位计费行。
- 发丝线色（Hairline）`#E1E4EA` — 1px 发丝线、卡片边框、表格网格线。
- 靛蓝色（Indigo）`#4F46E5` — 唯一强调色：主按钮、推荐套餐描边、开关激活态、滑块填充、勾选标记、焦点环。
- 深靛蓝色（Indigo Deep）`#4338CA` — 主按钮悬停与按下态、开关激活深色。
- 靛蓝薄雾色（Indigo Mist）`#EEF2FF` — 推荐套餐底色、选中单元格、save-20% 标签片填充。
- 良好色（Good）`#0E9F6E` — 信任条勾选标记与企业版可用性圆点。

### 字体排印
- 展示字体：H1、H2、H3、套餐名称、大号价格、字标：Space Grotesk（OFL），字重 500/700
- 文本与 UI：正文、眉题、按钮、导航、表格单元格、FAQ、所有金额（font-variant-numeric tabular-nums）：Inter（OFL），字重 400/500/600

### 布局与动效
- 间距：8px 基准单位。容器最大宽度 1120px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面端 96px、1024px 以下 72px、640px 以下 56px — 工具型页面比宣传册页面呼吸感更少。字号阶梯：H1 clamp(40px, 5.6vw, 72px) Space Grotesk 700，行高 1.02，字距 -0.02em；H2 clamp(28px, 3.6vw, 44px) Space Grotesk 700 字距 -0.01em；H3 20px Space Grotesk 700；价格数字 Space Grotesk 700 44px 配合 tabular-nums；导语 Inter 400 17px / 1.65 Ink 85%；正文 Inter 400 15.5px / 1.7（最大宽度 66ch）；眉题 Inter 600 12px 大写 字距 0.14em Slate Ink；说明文字 Inter 400 13px Slate Ink。按钮：高度 46px，内边距 0 22px，Inter 600 14px。主按钮：Indigo 填充，White 文字。次按钮：1px Ink/20% 边框，Ink 文字。小按钮 34px。输入框：不需要（除 mailto 外无表单）。全局焦点环：2px Indigo 轮廓，偏移 3px。
- 圆角：卡片、开关、滑块滑块头、标签片和 FAQ 行使用 12px。仅胶囊形元素（徽章、save 标签片）和开关轨道使用 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现和数字变化；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于开关和手风琴。精准、产品级 — 小距离、快速稳定。
- 动效：显现：包裹在 <Reveal> 中的区块从 opacity 0、translateY(12px) 开始，在 15% 可见时（Motion whileInView，viewport once）以 500ms --ease-out 动画到静止状态。同级元素错开 60ms。
- 动效：周期切换：滑动滑块头以 200ms --ease-io 移动，带轻微 scaleX 挤压；页面上每个价格以 400ms --ease-io 计数到新值（tabular-nums 保持宽度）；save-20% 标签片仅在年付时淡入。
- 动效：席位滑块：滑块头在抓取时 1.0→1.1→1.0 弹跳；填充即时跟随；总计在释放或步进时计数（200ms）。推荐套餐的总计以略大的数字呈现，变化时跳动一次。
- 动效：套餐卡片：悬停上浮 3px 并带发丝线阴影；推荐卡片永久上浮 6px，带 2px Indigo 描边和 Indigo Mist 底色。
- 动效：对比表格：表头行吸附在页面头部下方（top 76px），White/95% 加模糊；在其下方滚动时，当前套餐列带有淡淡的 Indigo Mist 色带；勾选单元格在滚动进入视图时绘制一次勾选笔画（错开 60ms，减少动效下禁用）。
- 动效：FAQ 手风琴：高度 0 到 auto，opacity 0 到 1，260ms --ease-io；加号旋转 45 度变成 X。
- 动效：头部：从顶部吸附，White/90% 加模糊和始终存在的 Hairline 边框（无首屏透明 — 这是工具型页面）。
- 动效：链接：.link-draw 在悬停和 focus-visible 时以 250ms 生长出 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 禁用计数（即时切换）、挤压、绘制和错开；保留颜色/边框/阴影的悬停变化。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：完全无摄影 — 一切用代码绘制。首屏的 AppPanel 是一个小型 SVG 产品模型（带班次区块的一周条、总计侧栏和光标点），使用 Hairline 描边、Indigo 和 Mist 填充，严格抽象的 UI 几何。勾选标记、破折号、滑块、开关、徽章和 favicon 均为 SVG/CSS。图标：仅 lucide-react，描边宽度 2。

## 页面与区块
### 定价（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[BRAND] = Slateline，[PRODUCT] = 团队排班与工时追踪，[BASE_PRICE] = 12，[SEAT_DEFAULT] = 10）。将每个字符串、数字和列表放入 src/content.ts 并从中渲染。若任何变量值不同，请重写每个标题、档位行、表格行名称、FAQ 答案和 AppPanel 标签，使其对新产品的描述具体且可信，同时保持相同的结构和数量（3 个档位、16 个表格行、4 个企业条款、6 个 FAQ）。档位由 [BASE_PRICE] 推导：Starter $12/席位/月，Team $24/席位/月（推荐），Business $48/席位/月；年付 = 各减 20%（$9.60、$19.20、$38.40，显示到分）。试用 14 天，无需信用卡；退款 30 天；随时自助取消。所有数字均为虚构。
   布局：不适用
   动效：不适用
2. **页头** — 左侧：文字标识 '[BRAND]'（Space Grotesk 700 19px），后跟一个 8px 靛蓝色圆点，链接到 ./index.html。中间导航（Inter 500 14px）：'Plans' → #plans，'Compare' → #compare，'Enterprise' → #enterprise，'FAQ' → #faq。右侧：次要 'Sign in'（href '#'，样式为低调链接）和主要 'Start free'（href '#'，小号）。低于 820px：仅显示文字标识 + Start free。
   布局：顶部吸顶，高度 76px，White/90% 模糊，1px 细线底边框，容器对齐。
3. **带计算器的刊头** — 眉题 'Pricing'。H1：'Pay for the crew you have.' 导语（最大宽度 560px）：'Per-seat pricing for [PRODUCT]. Move the slider, flip the toggle — every number on this page is the number you''d pay.' CycleToggle：'Monthly | Annual'，年付时显示标签 'Save 20%'。下方是 SeatSlider：标签 'How many seats?'，实时数量以 Space Grotesk 700 22px 数字显示，滑块 1–100 步长 1，两端标签 '1' 和 '100+'，以及一行文字 'at 100+ seats, Enterprise is usually cheaper — see below.' 右侧（桌面端）：AppPanel SVG，配文 'The [BRAND] week view — pictured mid-price-argument.'
   布局：白色背景，顶部垂直内边距 96px。桌面端两栏：计算器 6 栏，AppPanel 5 栏偏移 1。切换器和滑块放在一个 Mist 面板内（16px 圆角，28px 内边距），使计算器读起来像一个整体。低于 1024px：单栏，面板全宽。
4. **档位卡片** — 区块 id='plans'。三张卡片：'Starter' — $[BASE_PRICE]/席位/月（年付 $9.60）— 'For small crews getting off spreadsheets.' 行项：'Up to 5 seats'（等等——档位是按席位的；改用）：'Unlimited schedules'；'Time tracking'；'30-day history'；'Email support'。CTA 次要 'Start free'。'Team'（推荐，标签 'Most popular'）— $24/席位/月（年付 $19.20）— 'For teams that live in the schedule.' 行项：'Everything in Starter'；'Roles & permissions'；'Time-off tracking'；'Integrations (calendar, payroll)'；'Priority support'。CTA 主要 'Start free'。'Business' — $48/席位/月（年付 $38.40）— 'For operations with audits in their future.' 行项：'Everything in Team'；'Approvals & audit log'；'Custom fields & exports'；'SSO (SAML)'；'Dedicated success manager'。CTA 次要 'Start free'。每张卡片 CTA 下方的总计行：'= $240/mo for 10 seats'（实时，Inter 500 13px Slate Ink）。每个价格都随切换器和滑块变化。
   布局：白色背景延续。三栏 24px 间距；推荐卡片上浮 6px，2px 靛蓝色描边，Indigo Mist 淡色填充，'Most popular' 标签固定在其上边缘。卡片结构：名称 Space Grotesk 700 18px，一句话描述 14px，价格数字 44px + '/seat' + 周期行，5 个勾选行 14px，CTA 全宽，总计说明。低于 900px：堆叠。
5. **信任条** — 一条 Mist 色带，三项带 Good 勾选：'14-day free trial — no card'；'Cancel any time, self-serve, no call'；'30-day money-back, no questions worth asking'。居中，Inter 500 14px。
   布局：全宽带，垂直内边距 28px，三个等宽项，图标与文字间距 16px，移动端换行。
6. **对比表格** — 区块 id='compare'。眉题 'Compare plans' 和 H2 'All sixteen rows, no asterisks.' 表格：吸顶表头行（第一个单元格为空，Starter、Team、Business——表头单元格实时显示各档位的价格/席位）；16 行按细微分组标题分组（'Scheduling'、'Time & attendance'、'Controls'、'Support'）：1 'Unlimited schedules' ✓✓✓；2 'Shift swaps' — ✓ ✓；3 'Open shifts marketplace' — — ✓；4 'Time tracking' ✓ ✓ ✓；5 'Time-off & leave policies' — ✓ ✓；6 'GPS check-in' — — ✓；7 'Roles & permissions' — ✓ ✓；8 'Approval chains' — — ✓；9 'Audit log (1 year)' — — ✓；10 'Custom fields' — — ✓；11 'Exports (CSV, XLSX)' — ✓ ✓；12 'Calendar & payroll integrations' — ✓ ✓；13 'API access' — — ✓；14 'SSO (SAML)' — — ✓；15 'Email support' ✓ ✓ ✓；16 'Priority & success manager' — priority ✓ / manager：Team 为 'Priority'，Business 为 'Dedicated'（文本单元格）。勾选为靛蓝色；短横线为真正的长破折号，Fog 色。
   布局：Mist 背景区块，表格在 White 12px 圆角 1px 细线边框上；表头行吸顶 top 76px；移动端第一列吸顶左侧，带 White/95% 阴影边缘；行高 44px，细线分隔，分组标题 36px，Inter 600 11px 大写 Slate Ink；Team 列带淡淡的 Indigo Mist/50% 色带。低于 640px：表格整体水平滚动（第一列吸顶）。
7. **企业版** — 区块 id='enterprise'。一个 Ink 面板（白色文字，16px 圆角）：左侧，眉题 'Enterprise' 为 Indigo Mist 色调，H2 'Over 100 seats, or paperwork to satisfy.' 以及四条带 Good 圆点的条款行：'Volume pricing from seat 101'；'SSO, SCIM and a signed DPA'；'99.9% uptime SLA with credits'；'Named human on support, not a queue'。右侧：深色背景上的主要按钮 'Talk to sales'，为 mailto 到 sales@ + emailDomain（白色按钮，Ink 文字），配文 'We reply within one business day — usually faster than the demo you''ll book.'
   布局：白色背景，面板容器对齐，内部垂直内边距 56px，两栏 7/4 偏移 1，项目垂直居中。
8. **FAQ** — 区块 id='faq'。眉题 'Pricing FAQ' 和 H2 'The questions everyone asks.' 六个手风琴：1）'What counts as a seat?' — 'Anyone who logs in. Managers who only view schedules are free; we''d rather you invite the whole office than bill lurkers.' 2）'Can I change tiers mid-cycle?' — 'Yes, up or down. We prorate to the day and the difference lands on the next invoice.' 3）'What happens if I add seats?' — 'The slider above already told you: new seats are prorated from the day they join, not the first of the month.' 4）'Is there a free plan?' — 'A 14-day trial with everything, then Starter. We don''t do a crippled forever-free tier; support costs more than small accounts pay.' 5）'How does the annual discount work?' — 'Pay yearly, save 20%. It''s the same product — the discount is for the paperwork we skip.' 6）'What if we cancel?' — 'Self-serve, effective immediately, data exportable for 90 days. No retention scripts, no 'call to discuss'.'
   布局：Mist 背景，手风琴行在 White 1px 细线边框上，问题 Space Grotesk 500 17px，答案 Inter 15.5px / 1.7 最大宽度 66ch，右侧 Plus 图标。容器最大宽度 760px。
9. **CTA 带与页脚** — CTA：一个 White 色带，顶部 1px 细线边框：H2 'Fourteen days, no card, all features.' 以及主要 'Start free'（href '#'）旁边次要 'Talk to sales'（mailto sales@ + emailDomain）。页脚：Ink/95% 背景，三栏：文字标识 + '[PRODUCT] — priced to be understood.'；'Plans' 锚点（Plans、Compare、Enterprise、FAQ）；'Write' hello@ + emailDomain 和 sales@ + emailDomain。底部行：'© [BRAND]. Prices in USD.'
   布局：CTA 带垂直内边距 72px 居中；页脚垂直内边距 56px，3 栏，底部行在 White/10% 细线下方。

## 资产
- icon：仅使用 lucide-react：Check、Minus、Plus、ArrowRight、Building2、ShieldCheck、Timer、RefreshCw、Users、CalendarDays、Lock。描边宽度 2，16–24px，颜色继承。public/favicon.svg 手写：viewBox 0 0 32 32，一个 32x32 的 rect，rx 8，填充 #4F46E5，一个白色日历条字形（一个带两个顶部缺口和三个白色圆点的圆角矩形）。没有其他 logo：产品名称始终以文字形式呈现。
- image：仅在代码中绘制——无照片、无图库素材、无外部图片。AppPanel 主视觉模型（周条、班次块、总计侧边栏、光标点）为内联 SVG，使用 Hairline 描边和 Indigo/Mist 填充；表格勾选、短横线、切换开关、滑块、标签和 favicon 均为 SVG/CSS。仍然编写 ASSETS.md，列出 lucide-react（ISC）、@fontsource-variable/space-grotesk 和 @fontsource-variable/inter（OFL-1.1），并注明“No image assets; all visuals drawn in SVG/CSS.”
- font：安装 @fontsource-variable/space-grotesk 和 @fontsource-variable/inter，并按 Setup 中所述在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包进 dist/。

## 不要做
- 无后端、无表单提交、不向任何 API 发起 fetch 请求：切换开关、滑块和合计金额都是 src/lib/pricing.ts 中的纯客户端计算；CTA 是 href 链接（试用为 '#'，销售为 mailto）。
- 一切资源自托管：字体通过 Fontsource，图标使用 npm 包或内联 SVG。不使用 CDN 的 <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具。
- 生产构建：压缩、无 source map、不将 src/ 复制进 dist/、单条命令 npm run build、输出在 dist/ 下且小于 5 MB。
- 不使用真实产品、定价页面或支付标识（不使用真实卡组织标志，不使用 Stripe/PayPal 徽章）；每个档位名称、数字和功能行均为虚构。
- 任何地方都不出现日期或年份；网站永不显示当天日期。
- 除可选的页脚署名链接外，网站内绝不提及 VibeFather 或任何其他品牌；所有文案均为虚构的美式英语。
- 在所有地方尊重 prefers-reduced-motion：禁用计数、挤压、交错勾选绘制和滑动；保留颜色/边框/阴影的悬停效果。
- 页面必须在 1440x900 桌面端和 390x844 移动端正常工作且控制台零错误；滑块、切换开关和手风琴仅用键盘即可操作（方向键移动滑块），粘性表头绝不与粘性页头重叠，每个交互元素都有可见的焦点环。
- 文案保持具体：不用 lorem，不用 'flexible plans for every team'；每个数字都源自 src/content.ts 中的 [BASE_PRICE]。

---
— Prompt by VibeFather · https://vibefather.ai/t/saas-pricing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
