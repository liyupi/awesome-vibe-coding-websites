> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 太阳能安装商网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [COMPANY] 打造的单页网站，[COMPANY] 是一家住宅太阳能安装商，服务于 [CITY] 周边的 [SEGMENT]，示例电价为 $[RATE]/kWh。网站必须通过诚实来促成转化：一个实时节省计算器（账单滑块、屋顶选择 → 系统规模、年度节省、回本周期）、工作原理步骤、三种融资方案、一个六屋顶图库、一个带客户端确认的免费评估表单、一条信任展示带，以及一个真实问题 FAQ。单页：index.html，包含各区块（#calculator、#how、#financing、#projects、#assessment、#faq）。一切都在浏览器中运行；不会向任何地方提交数据。

- 受众：账单在 $150 以上、已经考虑太阳能两年、并且不信任行业广告的房主。他们希望看到计算过程、明确列出的假设，以及有人承认冬天的存在。
- 目标：预约免费评估。访客在十秒内看到计算器和屋顶；在一分钟内他们已移动滑块并看到自己的回本周期（标注为示例）。
- 语气：直截了当且阳光，像团队里最好的估算师：真实数字、明确假设、零压力。关于云朵的一个玩笑。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（MIT）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/manrope（OFL-1.1）、@fontsource-variable/public-sans（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 react-ts 模板通过 npm create vite@latest 搭建脚手架。项目根目录下只有一个 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将 Design 下的每种颜色以 kebab-case 键添加到 theme.extend.colors（sunwhite、skymist、card、navy、navy-deep、navy-mist、slate、amber-sun、amber-deep、rule、good），并设置 fontFamily display ['Manrope Variable', 'system-ui', 'sans-serif']、sans ['Public Sans Variable', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 14px，并添加 maxWidth { container: '1200px' }。
  - 在 src/fonts.ts 中导入 '@fontsource-variable/manrope' 和 '@fontsource-variable/public-sans'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（每个字符串、步骤、选项、项目、FAQ 答案、费率和假设，均带类型），src/lib/brand.ts（companySlug = [COMPANY] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 companySlug + '.com'），src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键前缀为 companySlug + ':'），src/lib/solar.ts（纯数学计算：monthlyKwh = bill/rate；systemKw = clamp(monthlyKwh×12/1450 × roofFactor, 3, 12)；cost = systemKw×2900（抵扣前）；yearlySavings = min(monthlyKwh×12×rate, production×rate)×0.92；paybackYears = netCost/yearlySavings；所有结果合理取整；假设导出以供展示）。
  - 状态：src/store/assessment.ts 是一个小型外部 store（useSyncExternalStore），持有 { bill: number（来自计算器）、roof: string、address、name、email、sent }，持久化到 localStorage 键 companySlug + ':assessment'。
  - 组件位于 src/components/：Header.tsx、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、Footer.tsx；Hero.tsx、Calculator.tsx（BillSlider.tsx、RoofSelect.tsx、SavingsPanel.tsx）、HowItWorks.tsx（StepCard.tsx）、Financing.tsx（OptionCard.tsx）、Projects.tsx（ProjectCard.tsx）、TrustStrip.tsx、AssessmentForm.tsx（Confirmed.tsx）、Faq.tsx。src/pages/Home.tsx 组合它们。
  - 在首次构建之前，使用 curl -L -o 将 Assets 下列出的每张图片下载到 public/images/，并使用给定的确切文件名。构建本身从不获取任何内容。
  - public/favicon.svg 如 Assets 所述。index.html：lang en，<meta name='theme-color' content='#FDFBF6'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[COMPANY] — Solar for [CITY] roofs</title>。
  - 在项目根目录下按 Assets 所述编写 ASSETS.md。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张图片。保持在 10 MB 以下。

## 变量
- [COMPANY] — 公司名称（默认："Sunstead Solar"）。虚构的安装商名称。用于文字标识、标题、页脚、电子邮件（hello@ + 不含连字符的 companySlug + .com）以及 localStorage 键。绝不使用真实安装商。
- [CITY] — 城市（默认："Denver, Colorado"）。团队安装作业的地点。用于主视觉区、图库中的社区和页脚。可以使用真实城市；街道为虚构。
- [RATE] — 示例电价（默认："0.14"）。计算器采用的示例 $/kWh 电价（形如 '0.14' 的字符串）。作为明示假设展示；驱动 src/lib/solar.ts 中的 monthlyKwh 和节省金额计算。保持在 0.10–0.30。
- [SEGMENT] — 客户群体（默认："homeowners"）。公司服务的对象，小写（'homeowners'、'small businesses and warehouses'）。驱动主视觉区文案、图库说明文字和 FAQ 语气。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/solar-installer-website（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 日光白（Sunwhite）`#FDFBF6` — 全站页面背景。
- 雾蓝（Skymist）`#EEF4F8` — 交替区块背景（How、Projects）、悬停填充、标签。
- 卡片白（Card）`#FFFFFF` — 计算器面板、融资卡片、表单、确认信息。
- 海军蓝（Navy）`#1B3A5C` — 主色：标题文字、主按钮、选中标签、焦点环。
- 深海军蓝（Navy Deep）`#12293F` — 悬停、页脚背景、首屏遮罩文字。
- 海军薄雾（Navy Mist）`#E3EDF5` — 选中的屋顶选项、步骤数字底槽、标签。
- 石板灰（Slate）`#5A6B78` — 次要文字、说明文字、眉题、假设说明行。
- 琥珀日光（Amber Sun）`#F0A419` — 唯一强调色：节省金额数字、太阳图标、选中的滑块填充、focus-visible 细节、图库输出数字。
- 深琥珀（Amber Deep）`#D08A0A` — 琥珀色的悬停与按下状态。
- 分隔线（Rule）`#DEE5EA` — 1px 细线、卡片边框、输入框边框、分隔线。
- 良好绿（Good）`#2E8B62` — 信任勾选标记、确认勾选、'switch-on' 强调。

### 字体排印
- 展示字体：H1、H2、H3、步骤标题、节省金额数字、字标：Manrope（OFL），字重 700/800
- 文本与 UI：正文、眉题、按钮、表单字段、说明文字；所有数学计算使用等宽数字：Public Sans（OFL），字重 400/600/700

### 布局与动效
- 间距：8px 基准单位。容器最大宽度 1200px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面端 96px、1024px 以下 72px、640px 以下 56px。字号比例：H1 clamp(42px, 6.4vw, 80px) Manrope 800，行高 1.03；H2 clamp(28px, 3.8vw, 46px) Manrope 800；H3 20px Manrope 700；节省金额数字 Manrope 800 44px 琥珀色等宽数字；导语 Public Sans 400 17.5px / 1.65 Navy 90%；正文 15.5px / 1.7（最大宽度 64ch）；眉题 Public Sans 700 12px 大写 字间距 0.16em Slate；说明文字 13px Slate。按钮：高度 50px，Public Sans 700 14px。主按钮：Navy 填充，Card 文字。次按钮：1px Navy 边框，Navy 文字。输入框：高度 50px，1px Rule 边框，Card 填充，聚焦时 Navy 边框。全局焦点环：2px Navy 轮廓，偏移 3px。
- 圆角：卡片、按钮、输入框、标签、计算器和照片为 14px。仅胶囊、标签和太阳图标使用 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现和数字变化；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于表单切换。明亮而自信。
- 动效：显现：包裹在 <Reveal> 中的区块从 opacity 0、translateY(12px) 开始，在 15% 可见时以 650ms --ease-out 稳定下来（Motion whileInView，viewport once）。同级元素错开 70ms。
- 动效：首屏：屋顶照片在 2400ms 内从 1.04 缩放到 1.0；一个小太阳图标在标题旁升起，光线绘制一次（在减少动效下关闭）。
- 动效：计算器：账单滑块的填充以琥珀色跟随滑块拇指；每个结果在 500ms --ease-io 内计数到新值（等宽数字保持宽度）；回收期数字伴随一个小下划线绘制而跳动；更改屋顶选择时系统尺寸行交叉淡入淡出。
- 动效：工作原理：步骤连接线随区块滚动从左到右绘制（scaleX）；步骤数字依次弹出一次。
- 动效：融资卡片：悬停上浮 3px；'best for' 行交叉淡入淡出到高亮示例。
- 动效：图库：照片悬停时缩放 1.02，输出数字以琥珀色跳动；卡片错开显现。
- 动效：评估：无效提交抖动 4px 并显示内联标签；发送时切换到 Confirmed（300ms --ease-io）——一个绘制的太阳+屋顶印章缩放进入，并显示 'We''ll call within two days'，账单从计算器回显。
- 动效：链接：.link-draw 在悬停和 focus-visible 时以 280ms 生长出 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 无缩放、绘制、计数或弹出（即时值）；颜色/边框悬停保留。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：阳光下的真实摄影，全部六张为本模板以一致风格制作：广阔天空、带深色面板的屋顶、温暖光线——从街道看的房屋、阵列细节、逆变器和整洁安装；绝不出现人物（无面孔、无手）。无可读文字或标牌；面板为通用款（无制造商标记）。每张照片使用 object-fit cover，object-position 在 Assets 下给出，14px 圆角，无阴影；Sunwhite 上的照片获得 1px Rule 轮廓。说明文字为 Public Sans 13px Slate。代码绘制：太阳图标、滑块、步骤连接线、印章、标签和 favicon。图标：仅 lucide-react，描边宽度 1.75。

## 页面与区块
### 太阳能（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[COMPANY] = Sunstead Solar，[CITY] = Denver, Colorado，[RATE] = 0.14，[SEGMENT] = homeowners）。将每个字符串、数字和列表放入 src/content.ts 并从中渲染。如果任何变量值不同，请重写 hero、计算器文案与假设、步骤、选项、图库和 FAQ，使其对新安装商而言具体可信，同时保持相同的结构和数量（5 个步骤、3 个融资选项、6 个项目、6 个 FAQ）。所有数字均为附带明确假设的示例计算（费率 $[RATE]/kWh、1,450 kWh/kW-年发电量、$2.90/W 总成本，假设列在计算器下方）；不将任何真实补贴作为事实引用。项目（名称 · 规模 · 首年发电量 · 备注）：'The Maple Street roof' 8.2 kW 11.9 MWh 'south-facing, half the block envies it'；'The Fern hollow bungalow' 5.6 kW 8.1 MWh 'complex roof, patient design'；'The Eastside duplex' 11.4 kW 16.3 MWh 'two meters, one happy landlord'；'The Cedar court reroof' 7.8 kW 11.2 MWh 'panels after shingles, in one week'；'The Lakeside modern' 10.2 kW 14.6 MWh 'flat roof, tilted rows'；'The Willow garage-first' 4.4 kW 6.2 MWh 'started small, added later'。
   布局：不适用
   动效：不适用
2. **页眉** — 左侧：字标 — 太阳图形 + '[COMPANY]'（Manrope 800 18px），下方为 'Residential solar · [CITY]'（10px 大写 Slate）— 链接到 ./index.html。右侧导航（Public Sans 600 14px）：'Savings' → #calculator、'How it works' → #how、'Financing' → #financing、'Projects' → #projects，以及一个 Navy 色的 'Free assessment' → #assessment。低于 820px：字标 + 评估按钮。
   布局：顶部粘性，高度 72px，Sunwhite/95% 模糊，Rule 边框。
3. **带计算器的 Hero** — 两列。左侧：眉题 'SOLAR FOR [CITY] ROOFS'；H1 'Your roof is' / '*already paying rent.*'；导语（最大宽度 520px）：'To somebody. [COMPANY] makes it pay you instead — panels, paperwork and the utility dance, handled by two crews who answer their phones.'；三条带 Good 勾选的快速事实：'25-year panel warranty'；'Permit and interconnect filed for you'；'Production guarantee, in writing'。右侧：Card 上的计算器 — BillSlider（'$120'→'$400/mo'，默认 $220）、RoofSelect（Small 'fits ~6 kW' / Medium 'fits ~9 kW' / Large 'fits ~12 kW+'），以及 SavingsPanel：'System size' '8.1 kW'；'Yearly savings' '$1,860'（Amber 800 44px）；'Payback' '≈ 11 years'，附说明 'Sample math — assumes $[RATE]/kWh, 1,450 kWh/kW-yr, net of the federal credit. Your assessment gets real numbers.' 面板下方有一个主按钮 'Get my free assessment' → #assessment。
   布局：Sunwhite 背景，顶部垂直内边距 104px；左侧 5 列，右侧 6 列偏移 1。滑块 52px 高的行；结果堆叠，带细线分隔。
4. **工作原理** — 区块 id='how'。眉题 'FROM CALL TO SWITCH-ON' 和 H2 'Five steps, no mystery.' StepCards：1）ClipboardList 'Free assessment' — '45 minutes on your roof and your bill; you get a real quote, not a brochure.' 2）PencilRuler 'Design & proposal' — 'Panel layout, production estimate, one page of numbers you can check.' 3）FileCheck 'Permits & paperwork' — 'We file with the city and the utility; you sign twice and water the lawn.' 4）Wrench 'Installation day' — 'One day, usually; two crews, no roof juggling, magnets in the gutter for nails.' 5）Zap 'Switch-on' — 'Permission to operate, app on your phone, first sunny Saturday smugness included.' 一条连续的连接线穿过步骤编号槽（位于编号后方），而不是在卡片顶部露出短截线；卡片边框变浅或去掉；低于 760px 时步骤单列堆叠，带垂直连接线。
   布局：Skymist 背景。五张卡片排成一行，带绘制连接线（低于 1024px 时堆叠为 2x3）；编号在 44px Navy Mist 圆圈中。
5. **融资** — 区块 id='financing'。眉题 'THREE WAYS TO PAY' 和 H2 'Money, plainly.' OptionCards：'Solar loan' — '$0 down' — 'Fixed rate over 20 years; the loan payment usually lands under the old bill from month one.' — 'Best for: staying 10+ years, wants the tax credit'。'Lease / PPA' — '$0 down' — 'We own the panels, you buy the power at a lower rate; simple, no credit at tax time.' — 'Best for: maximum simplicity'。'Cash' — 'Payback fastest' — 'One check, shortest payback, best lifetime savings; the roof works for you, not the bank.' — 'Best for: the patience of a saint and the cash of one'。说明：'All figures sample; the proposal shows your three options side by side.'
   布局：Sunwhite 背景。三列，24px 间距；卡片在 Card Rule 边框上；标题数字 Manrope 800 28px；'Best for' 行 Navy 600 13px。
6. **项目与信任** — 区块 id='projects'。眉题 'RECENT ROOFS' 和 H2 'Six of the last fifty.' ProjectCards（照片、名称、'8.2 kW · 11.9 MWh first year (sample)'、一句话简介）→ 名单中的六个，照片从集合中轮流使用。下方 TrustStrip：三条带 Good 勾选的条目 — 'NABCEP-certified installers (invented badge, real standards)'；'25-year equipment and 10-year workmanship warranty'；'We handle the utility interconnection, including the hold music'。
   布局：Skymist 背景。3x2 图库，20px 间距（低于 900px 时 2 列）；信任条为 Sunwhite 上细线边界的三项一行。
7. **免费评估表单** — 区块 id='assessment'。眉题 'THE FREE ASSESSMENT' 和 H2 'Forty-five minutes, then you''ll know.' 一个 Card 面板：账单从计算器预填（'$220/mo' 可编辑滑块镜像）；屋顶选择（同步）；地址输入（占位符 'Street or cross-streets is enough'）；屋顶年龄选择（'Under 10 years' / '10–20' / 'Time will tell'）；姓名 + 邮箱；主按钮 'Request my assessment'，附说明 'Saved in this browser — the real page would reach the crew. Nothing is sent here.' 已确认：太阳+屋顶印章，'Assessment requested.' 'We''ll call within two days to pick a time — morning slots go fast, like the sun.' 账单/屋顶回显，以及 'Edit my request' 返回预填。持久化在 localStorage 中。
   布局：Sunwhite 背景；面板最大宽度 640px，28px 内边距，Rule 边框；滑块镜像紧凑。
8. **FAQ 与页脚** — 区块 id='faq'。眉题 'THE HONEST QUESTIONS' 和六个手风琴：'What about winter?' — 'Panels make less, your bill math already knew that; our estimate uses a full year, not July.'' 2）'Hail?' — 'Panels are tested with 1-inch hail at 50mph; your car is more nervous than they are. Warranty covers the rest.' 3）'What if I move?' — 'Loans transfer or settle at sale, leases sign over; we''ve walked three sellers through it this year.' 4）'Is the payback really ~11 years?' — 'Sample math for a $220 bill. Higher bills shorten it; shading, roof angle and your rate move it — that''s what the assessment measures.' 5）'Do I need a new roof first?' — 'If the roof has under 10 good years, yes — we''ll say so and can coordinate the reroof (see the Cedar court project).' 6）'Batteries?' — 'Optional, quoted separately; most bills in [CITY] make sense panels-first, battery-when-prices-drop.' 页脚：Navy Deep；三列：1）太阳字标 + '[COMPANY]'，下方 'Residential solar · [CITY] · two crews, one standard'；2）'Reach us'：'118 Beacon Lane, [CITY]'、hello@ + emailDomain、'(303) 555-0178'；3）'Around'：Savings、How it works、Financing、Projects、FAQ 锚点。底部行：'© [COMPANY]. Sample math, real sunshine.'
   布局：FAQ 在 Sunwhite 上，行以 Rule 分隔，问题 Manrope 700 16.5px，答案 15.5px / 1.7 最大宽度 66ch，右侧 Plus 图标；容器 760px。页脚垂直内边距 64px，3 列，底部行在 Card/15% 规则线下方 32px。

## 资源

- 图片：为本设计制作的模板照片（可随模板自由再分发）。用 curl -L -o 将每张图片下载到 public/images/：https://media.vibefather.ai/assets/9d785d3b-cafc-47b4-9ce7-0cf30d2f85c8/hero-roof.webp → public/images/hero-roof.webp（Hero；object-position 50% 50%；alt 'A house rooftop with dark solar panels under a big blue sky'）；https://media.vibefather.ai/assets/9d785d3b-cafc-47b4-9ce7-0cf30d2f85c8/roof-modern.webp → public/images/roof-modern.webp（Gallery；alt 'A modern flat-roof home with tilted panel rows'）；https://media.vibefather.ai/assets/9d785d3b-cafc-47b4-9ce7-0cf30d2f85c8/roof-bungalow.webp → public/images/roof-bungalow.webp（Gallery；alt 'A bungalow with panels on a complex roofline'）；https://media.vibefather.ai/assets/9d785d3b-cafc-47b4-9ce7-0cf30d2f85c8/array-detail.webp → array-detail.webp → public/images/array-detail.webp（Gallery/How；alt 'A close detail of panel rows and mounting rail'）；https://media.vibefather.ai/assets/9d785d3b-cafc-47b4-9ce7-0cf30d2f85c8/inverter-wall.webp → public/images/inverter-wall.webp（How；alt 'A neat wall-mounted inverter and conduit beside a meter'）；https://media.vibefather.ai/assets/9d785d3b-cafc-47b4-9ce7-0cf30d2f85c8/golden-roof.webp → public/images/golden-roof.webp（Gallery；alt 'Rooftop panels catching golden evening light'）。共六个文件。
- 图片：在项目根目录写入 ASSETS.md，包含一个表格：路径、来源 URL、作者、许可证——每张照片一行（来源 'media.vibefather.ai, made for this template'，作者 'VibeFather'，许可证 'Distributed with the template'），另加 @fontsource-variable/manrope 和 @fontsource-variable/public-sans（OFL-1.1）以及 lucide-react（ISC）的行。绝不用图库网站或含人物、面孔、手或可辨识品牌标识的图片替换照片。
- 图标：仅使用 lucide-react：Sun、ClipboardList、PencilRuler、FileCheck、Wrench、Zap、Check、Plus、ArrowRight、MapPin、Phone。描边宽度 1.75，16–24px，颜色继承。带光芒的太阳图形、太阳+屋顶印章、滑块、步骤连接线和 favicon 均为绘制的 SVG。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的 rect，rx 8，填充 #1B3A5C，一个 Amber（#F0A419）太阳带光芒，位于 Card（#FFFFFF）屋顶线之上。无其他标志：公司名称始终以文字排版呈现；无真实认证标志——徽章保持通用几何形状。
- 字体：安装 @fontsource-variable/manrope 和 @fontsource-variable/public-sans，并按 Setup 中所述在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包进 dist/。
- 图片：在代码中绘制：太阳图形与光芒、滑块、步骤连接线、印章、标签和 favicon。除六张照片外无其他位图；无插图；无地图瓦片。

## 不要做
- 不要后端、不要表单提交、不要向任何 API 发起 fetch：计算器是 src/lib/solar.ts 中的纯客户端数学计算，并附有明确说明的假设条件；评估结果仅保存在浏览器中，并会明确告知用户。
- 这个单页上的所有链接都是锚点（./index.html#calculator、#how、#financing、#projects、#assessment、#faq）。
- 所有资源自托管：字体通过 Fontsource，图标使用 npm 包或内联 SVG，图片下载到 public/images/。不要 CDN 的 <script> 或 <link> 标签，不要 Google Fonts，不要分析工具。
- 生产构建：压缩，无 source map，不将 src/ 复制到 dist/，使用单一命令 npm run build，输出在 dist/ 下且小于 10 MB。
- 不要真实的安装商、面板制造商、公用事业公司或认证机构；节省和回本都是示例计算，并展示假设条件；不要包含人物、面部或手部的照片；不要可读的标牌。
- 任何地方都不要出现日期或年份；网站永远不显示今天的日期。
- 除了可选的页脚署名链接外，网站内绝不提及 VibeFather 或任何其他品牌；所有文案均为虚构的美式英语。
- 尊重 prefers-reduced-motion：不要缩放、绘制、计数或弹出动画；滑块和结果即时更新；颜色/边框悬停效果保留。
- 页面必须在 1440x900 桌面端和 390x844 移动端正常工作，且控制台零错误；滑块、下拉选择和表单仅用键盘即可操作（方向键移动滑块），并有可见的焦点环。
- 保持文案具体：不要 lorem，不要“驾驭太阳”；每个费率、步骤和输出数字都放在 src/content.ts 中，并带有其示例标签。

---
— Prompt by VibeFather · https://vibefather.ai/t/solar-installer-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
