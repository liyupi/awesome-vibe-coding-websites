> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 抵押贷款经纪人网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一个精致的单页网站。[BRAND] 是一家虚构的抵押贷款经纪公司，由虚构的 [BROKER] 领导，位于 [LOCATION]，服务于 [AUDIENCE]。首屏包含一个可用的固定利率还款计算器，其初始值来自 [HOME_PRICE]，而非静态模型。共享的计算器状态驱动一个示例利率比较、一张年度本金与利息摊销图，以及一份完整且无障碍的还款计划表。四张贷款类型卡片、四个预审批步骤、一个以肖像为主的经纪人简介、一个三步申请启动表单，以及五个常见问题解答，共同构成整个页面。所有利率和财务数字均为示例性内容，绝不构成要约；申请草稿保留在浏览器中，绝不传输。

- 受众：[AUDIENCE]，他们希望在分享文件之前了解月供并准备与经纪人沟通。他们可能正在比较首付、试图解读贷款术语，或想了解预审批涉及哪些内容。次要访客是独立经纪人，他们需要一个可信的教育型网站，而非通用的线索收集页面。
- 目标：让访客无需信用查询即可探索一个真实的还款场景，理解本金和利息如何随时间变化，并留下一个本地保存的申请启动草稿。信任必须来自可见的假设和有用的解释，而非保证获批或最低利率的声称。
- 语气：温暖、精确、从容。使用平实的美国英语、短句和具体示例。解释必要术语时不居高临下。绝不使用紧迫感、施压、术语堆砌的销售文案，或关于梦想成真的房主陈词滥调。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/newsreader（OFL-1.1）、@fontsource-variable/manrope（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 npm create vite@latest 以 react-ts 模板搭建脚手架。在项目根目录交付一个独立的 index.html，入口为 src/main.tsx；使用区块锚点，不使用路由器。
  - 在 vite.config.ts 中设置 base './'、plugins [react()]、build.outDir 'dist'、build.sourcemap false、build.assetsInlineLimit 0。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4，content 为 ['./index.html', './src/**/*.{ts,tsx}']。将设计颜色添加为 parchment、paper、ink、muted、pine、pinelight、sand、rule 和 footer；添加 fontFamily display ['Newsreader Variable', 'Georgia', 'serif'] 和 sans ['Manrope Variable', 'system-ui', 'sans-serif']；添加 maxWidth container 1180px。
  - 在 src/fonts.ts 中导入 '@fontsource-variable/newsreader' 和 '@fontsource-variable/manrope'；从 src/main.tsx 导入 src/fonts.ts 和 src/index.css。在每个金额、利率、表格和计算器结果上启用 font-variant-numeric: tabular-nums。
  - 将每个标题、段落、标签、示例利率、贷款类型、流程步骤、FAQ、图片路径和披露声明放入带类型的 src/content.ts，按区块键控。在 src/lib/brand.ts 中，通过将 [BRAND] 转为小写并将每段非字母数字字符替换为 '-' 来派生 brandSlug；brandSlug 仅用于 localStorage 键前缀，绝不作为外部服务名称。
  - 将 src/lib/mortgage.ts 实现为纯函数（通过检查测试），不依赖金融库：loanAmount = price * (1 - downPercent / 100)；r = annualRate / 100 / 12；n = years * 12；monthlyPayment = loanAmount === 0 ? 0 : r === 0 ? loanAmount / n : loanAmount * r * (1 + r)^n / ((1 + r)^n - 1)。生成每月行，其中 interest = balance * r，principal = min(monthlyPayment - interest, balance)，将最终余额钳制为零，然后按年聚合行。内部保持完整精度，仅在显示时使用 Intl.NumberFormat('en-US', currency USD) 进行舍入。处理零利率，并拒绝负数或非有限输入。
  - 在 src/state/CalculatorContext.tsx 中使用 CalculatorProvider 管理 { price, downPercent, annualRate, years }。默认值为 [HOME_PRICE]（数字）、20、6.25 和 30。价格允许 25000–2000000，步长 5000；首付 0–90，步长 1；利率 0–15，步长 0.05；期限 30/20/15。将每个范围输入与带标签的数字输入同步。Hero 结果、示例还款、图表、还款计划和申请场景都必须从这一个状态派生。
  - src/components/ 中的组件：Header.tsx、Reveal.tsx、Hero.tsx、PaymentCalculator.tsx、MoneyInput.tsx、RateTable.tsx、AmortizationChart.tsx（手写响应式 SVG）、YearlySchedule.tsx、LoanTypes.tsx、Process.tsx、BrokerProfile.tsx、ApplicationStarter.tsx、Faq.tsx、Footer.tsx 和 Disclaimer.tsx。src/pages/Home.tsx 组合它们。src/lib/storage.ts 将 localStorage 读写包装在 try/catch 中。
  - 在首次构建之前，使用 curl -L -o 将 Assets 下列出的三张生成图片下载到 public/images/，并使用完全相同的文件名。构建和运行中的站点绝不能获取这些源 URL。
  - 从 Assets 下的代码绘制几何图形创建 public/favicon.svg。index.html 具有 lang='en'、meta theme-color '#F4F0E6'、本地 favicon 链接和 <title>[BRAND] — Mortgage guidance in [LOCATION]</title>。不要添加 SEO 元数据、分析或第三方标签。
  - 在项目根目录编写 ASSETS.md，包含 Assets 下指定的每个照片、字体和图标依赖。保持 dist/ 低于 8 MB，仅包含 index.html、favicon.svg、带哈希的本地 JS/CSS、woff2 字体和三张本地图片。

## 变量
- [BRAND] — 经纪品牌（默认：“Cedar & Slate Mortgage”）。一个虚构的经纪名称，用于字标、标题、主视觉、个人资料、表单、页脚和 localStorage 前缀。切勿使用真实贷款机构或 VibeFather。
- [BROKER] — 经纪人姓名（默认：“Maya Chen”）。虚构经纪人的姓名。用于个人资料、肖像替代文本、表单介绍和页脚；生成的肖像是可替换的占位符，绝非真实个人。
- [LOCATION] — 服务地点（默认：“Bend, Oregon”）。用于眉题、标题、个人资料和页脚的城市及州或地区。当其变化时，调整周边文案。
- [AUDIENCE] — 主要受众（默认：“first-time home buyers”）。一个小写受众短语，驱动主视觉、流程示例、经纪人简介和常见问题。更改时保持相同的长度和教育性语气。
- [HOME_PRICE] — 示例房屋价格（默认：“420000”）。仅数字，无货币符号。初始化计算器和示例申请场景；推导默认 20% 首付和每个显示付款，而非硬编码结果。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接至 https://vibefather.ai/t/mortgage-broker-website（默认：是；删除此行以移除）

页面与区块下的文案为默认值编写。若您的值不同，请为它们重写每个标题、段落、标签和图像——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图像路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块键控，以便日后无需触碰组件即可替换内容。

## 设计
### 颜色
- Parchment（羊皮纸色）`#F4F0E6` — 主页面背景和大量留白。
- Paper（纸白色）`#FCFAF5` — 计算器、表单、表格和个人资料卡片的表面。
- Ink（墨色）`#1E2924` — 标题、主要正文文本和深色图标。
- Muted（柔和灰）`#667169` — 次要文案、标签、说明文字和假设条件；切勿用于 13px 以下的文本。
- Pine（松绿色）`#285844` — 主按钮、链接、选中控件、图表主区域和焦点环。
- Pine Light（浅松绿）`#DDE8DE` — 选中的标签片、计算结果底色和柔和的分区色带。
- Sand（沙色）`#D7B98A` — 仅用于摊销图表中的利息系列和小型数据高亮。
- Rule（分隔线色）`#D9D4C8` — 一像素边框、表格线、输入框轮廓和图表网格线。
- Footer（页脚色）`#1D332B` — 页脚背景，配 Paper 色文本和 Pine Light 色次要文本。

### 字体排印
- H1、H2、H3、文字标识和大型月供金额使用展示字体：Newsreader Variable (OFL)，字重 400/500/600
- 导航、标签、按钮、表格、披露说明和表单控件使用界面与正文字体：Manrope Variable (OFL)，字重 400/500/600/700

### 布局与动效
- 间距：以 8px 为基本单位。居中容器最大宽度 1180px，桌面端左右内边距 40px，平板端 28px，640px 以下 20px；12 列网格，列间距 24px。页头高 72px。Hero 区顶部内边距 48px、底部 80px；其他区块桌面端 96px、平板端 72px、移动端 56px。H1 使用 Newsreader 500，clamp(46px, 5.2vw, 68px)，行高 1.02，字距 -0.035em；H2 为 clamp(34px, 3.6vw, 48px)，行高 1.08，字距 -0.025em；H3 为 24px / 1.2；导语 18px / 1.65；正文 16px / 1.7，最大 65ch；标签 13px / 1.4，字重 700；眉题 11px 大写，字距 0.17em。计算器月供金额使用 Newsreader 500，52px，Pine 色。按钮和输入框最小高度 48px；主按钮为 Pine 色配 Paper 色文本，次按钮为透明背景配 Ink 色 1px 边框。所有交互元素获得 2px Pine 色焦点轮廓，偏移 3px。
- 圆角：主要卡片和照片为 18px，输入框和小面板为 12px，999px 仅用于标签片、分段控件和胶囊形元素。使用 1px Rule 色边框，几乎不使用阴影；仅 Hero 区计算器使用 0 18px 50px rgba(30,41,36,0.08)。
- 动效：入场使用 --ease-out cubic-bezier(0.22, 0.61, 0.36, 1)，界面变化使用 --ease-io cubic-bezier(0.65, 0, 0.35, 1)。运动服务于功能且克制。
- 动效：主要区块标题和卡片在 15% 可见时，从 opacity 0 和 translateY(16px) 过渡到静止状态，历时 600ms，仅触发一次，同级元素使用 Motion 的 whileInView 以 70ms 错开。
- 动效：Hero 区文案和照片依次淡入上升；计算器在 120ms 后从 translateY(12px) 进入。不使用视差、光标跟随、自动播放轮播或循环环境动画。
- 动效：计算器结果数字通过 Motion animate 在 250ms 内补间到更新后的值，新输入时取消上一个补间。SVG 图表路径立即更新，并在 180ms 内从 65% 到 100% 不透明度交叉淡入；除这些短暂过渡外，切勿在每次按键时播放动画。
- 动效：利率行在悬停时以 150ms 过渡高亮为 Pine Light 背景；贷款卡片图标位移不超过 2px。仅在未请求减少动效时，锚点滚动使用平滑行为。
- 动效：申请步骤在 220ms 内交叉淡入并 translateX(10px)；验证错误出现时不抖动。FAQ 箭头在 180ms 内旋转 180 度。
- 动效：对于 prefers-reduced-motion: reduce，禁用入场显示、平滑滚动、数字补间、图表淡入和步骤变换；立即显示最终值，同时保留颜色和边框状态变化。
- 图像：恰好使用三张温暖的编辑风格生成照片，带有柔和晨光，色调为奶油色、雪松色、松绿色和沙色。hero-home.webp 是一张宽敞的通用住宅外观，绝非地标；broker-maya.webp 是一张虚构人物的中等工作肖像，不似任何真实个人，作为 [BROKER] 的可替换占位图提供；planning-desk.webp 是一张无人静物，带有空白纸张。应用 18px 圆角、object-fit cover，以及 Assets 下指定的 object-position。不要在面部上方放置文字或标志。摊销图表、favicon、小型步骤数字和 UI 装饰用 SVG/CSS 绘制。使用 lucide-react 图标，描边 1.6px，切勿使用品牌或政府图标。

## 页面与区块
### 经纪服务、计算器与申请入口（`index.html`）
1. **内容、默认值与财务行为** — 从 src/content.ts 渲染所有文案，其中 [BRAND] = Cedar & Slate Mortgage，[BROKER] = Maya Chen，[LOCATION] = Bend, Oregon，[AUDIENCE] = first-time home buyers，[HOME_PRICE] = 420000。若任一变量发生变化，需针对新值重写所有依赖的标题、示例、简介、FAQ 和替代文本，同时保留区块顺序、数量、布局与设计。默认计算器：房价 $420,000，首付 20%（$84,000），贷款额 $336,000，示例票面利率 6.25%，期限 30 年；正确计算得出的本金加利息月供为每月 $2,069，全期利息约为 $408,772。切勿将这些结果作为静态文案写死：应从状态中计算，以便其他数值也能正常工作。示例利率清单（均使用当前贷款额）：30 年固定 6.25% / 30 年 / 默认月供 $2,069 / 'Same note rate for the full term'；15 年固定 5.70% / 15 年 / 默认月供 $2,781 / 'Higher payment, less total interest'；7/6 ARM 初始 5.80% / 30 年摊还 / 默认初始月供 $1,971 / 'Fixed for seven years, then adjusts every six months'；FHA 30 年 6.00% / 30 年 / 默认本金加利息 $2,014 / 'Mortgage insurance is not included'。贷款清单：Conventional、FHA、VA、USDA。流程清单：Share the outline；Verify the numbers；Compare written scenarios；Request the letter。FAQ 数量为五条。申请流程为三个步骤。联系展示使用预留的虚构号码 (555) 014-7286，不包含真实贷款机构邮箱或链接。
   布局：不适用
   动效：不适用
2. **页头** — 左侧：[BRAND] 旁配一个原创的代码绘制账本与钥匙标志，链接至 ./index.html。桌面导航：'Sample rates' → ./index.html#rates，'Amortization' → ./index.html#amortization，'Loan options' → ./index.html#loans，'Pre-approval' → ./index.html#process，'Your broker' → ./index.html#broker。右侧主按钮 'Start an application' → ./index.html#apply。低于 820px 时仅显示文字标识和更短的 'Start' 按钮；其余所有目标保留在页脚中。
   布局：粘性顶部，z-index 30，高 72px，Parchment（羊皮纸色）94% 不透明度并带背景模糊和 Rule（分隔线色）底边框。文字标识保持单行；导航使用 Manrope 600 13px，间距 20px。
   动效：滚动时不隐藏。当前锚点链接获得一个小号 Pine（松绿色）下划线；悬停下划线在 180ms 内绘制。
3. **带可用月供计算器的首屏** — 左侧眉题：'MORTGAGE GUIDANCE · [LOCATION]'。H1：'The numbers behind your next front door.' 导语：'[BRAND] helps [AUDIENCE] compare payments, understand loan options, and prepare for pre-approval—before committing to a lender.' 主 CTA 'Start an application' → #apply；次级文字链接 'Explore loan options' → #loans。CTA 下方放置三条紧凑的安心提示，配通用对勾图标：'Example figures, clearly labeled'、'No credit check to calculate'、'Inputs stay in this browser'。在这些行下方放置 hero-home.webp，配说明文字 'A place to begin, not a property listing.' 右侧：PaymentCalculator，标题为 'Payment sketch'，带常驻的 Pine Light（浅松绿色）'EXAMPLE · NOT A LOAN OFFER' 徽章。输入项：Home price、Down payment (%)、Sample note rate (%)、Loan term 分段选择 30/20/15 年。输出标签 'Estimated monthly principal & interest'；默认 $2,069。辅助行：默认 'Loan amount' $336,000 和 'Down payment' $84,000。说明文字：'Principal and interest only. Taxes, homeowners insurance, HOA dues, and mortgage insurance are not included.' 若首付低于 20%，追加 'Mortgage insurance may apply and is not included in this example.' 链接 'See the yearly amortization' → #amortization。
   布局：Parchment 背景。桌面网格：左侧 5 列，右侧 6 列并留一列空白间隔；顶部对齐。左侧 H1 最大宽度 560px，CTA 排成一行，安心提示以紧凑的两列换行排列，房屋照片宽度 100%，16:9，最小高度 170px。右侧 Paper（纸白色）计算器卡片，内边距 28px；两列字段网格，结果面板除外（占满整行）。移动端依次堆叠文案、CTA、安心提示、照片，然后是计算器；字段保持单列，月供完整显示不被裁切。
   动效：首屏按 Design 中所述进入。每个控件即时更新所有依赖数值；结果补间 250ms，选中期限 chip 填充 150ms。
4. **示例利率表** — 区块 id='rates'。眉题 'SAMPLE RATE TABLE'；H2 'Compare the structure, not just the rate.' 引言：'Four illustrative scenarios use the same loan amount so the trade-offs are easier to see. These are not live rates, offers, or commitments to lend.' 表格列：'Loan type'、'Example note rate'、'Example monthly P&I'、'What changes'。严格填入内容规则中的四行清单。正下方重复：'Examples use your current calculator loan amount. Payments exclude taxes, insurance, HOA dues, mortgage insurance, points, and fees. The ARM payment is initial only and can change after the fixed period. Eligibility and actual terms depend on a lender.'
   布局：Paper 区块，带边框表格，无外层浮动卡片。表头行 Pine Light，Manrope 700 12px 大写；行最小高度 64px，带 Rule 分隔线和右对齐的等宽数字金额。移动端将每行转换为两列带标签的网格，避免页面水平溢出。披露文字最大宽度 80ch。
   动效：区块一次性显现。行悬停仅使用背景色；贷款额变化时月供补间。
5. **摊还图表与年度计划** — 区块 id='amortization'。眉题 'THE LONG VIEW'；H2 'Watch the balance shift, year by year.' 说明：'Early payments send more toward interest. Over time, more of the same fixed principal-and-interest payment goes toward principal.' 摘要 chip：'Principal' 当前贷款额，'Interest if held to term' 计算得出的计划总额，'Term' 所选年数。默认 chip 显示 $336,000、约 $408,772 和 30 年。AmortizationChart 为手工编写的 SVG 堆叠面积图，展示年度还款构成：底部为 Sand（沙色）利息，上方为 Pine（松绿色）本金；x 轴为第 1 年至所选期限，y 轴为年度本金加利息金额。提供可见图例和网格标签。指针悬停或键盘聚焦某一年时，更新一个小详情卡，显示该年的本金、利息和期末余额。相同数据出现在 YearlySchedule 的列 'Year'、'Principal'、'Interest'、'Ending balance' 中；包含每一年，而不仅是前五年。将表格包裹在默认展开的 <details> 中，标题为 'Yearly payment schedule'。说明：'Rounded for display. Assumes on-time payments, no extra payments, no rate changes, and no fees. Fixed-rate examples only; the separate ARM table row does not change this fixed-rate chart.'
   布局：Parchment 背景。图表和年度详情卡分别占 8 列和 4 列；图表 viewBox 0 0 760 360，宽度响应式，高度约 16:9，绝不使用纯 canvas。详情卡为 Paper，内边距 20px。计划表在下方占满全宽，Paper 表面，最大高度 380px 并内部垂直滚动、表头粘性；移动端仅允许表格容器内部水平滚动。
   动效：输入变化时图表交叉淡入淡出 180ms。悬停详情即时切换；无滚动擦除。减少动效时立即显示最终图表。
6. **贷款类型说明** — 区块 id='loans'。眉题 'LOAN OPTIONS'；H2 'Four routes, explained without the alphabet soup.' 四张卡片：Conventional — 'A common fixed- or adjustable-rate option. Some eligible buyers can put less than 20% down; mortgage insurance may apply.' 可询问：'How long would mortgage insurance remain?' FHA — 'A government-insured loan program with flexible qualification rules for eligible borrowers, plus upfront and ongoing mortgage insurance.' 可询问：'What does mortgage insurance add to this scenario?' VA — 'A program for eligible service members, veterans, and some surviving spouses. Funding-fee and occupancy rules can apply.' 可询问：'Am I exempt from the funding fee?' USDA — 'A program for eligible rural properties and qualifying households, with location and income limits.' 可询问：'Does both the property and my household qualify?' 页脚注：'Program names describe general categories, not eligibility decisions. A lender verifies current requirements.' 使用通用的 House、FileText、ShieldCheck 和 MapPin 线性图标，绝不使用官方印章。
   布局：Paper 背景。四张卡片呈两行两列网格，间距 24px，内边距 24px，图标位于左上角，'Ask about' 行以 Rule 边框分隔。桌面端卡片高度一致；移动端单列。
   动效：卡片进入时错开 70ms。无手风琴，无自动轮播内容。
7. **预审批步骤** — 区块 id='process'。眉题 'FROM QUESTIONS TO A LETTER'；H2 'Pre-approval, one understandable step at a time.' 四个编号步骤：01 'Share the outline' — 'Discuss your goal, approximate price range, down payment, and timing. A first conversation is not an approval.' 02 'Verify the numbers' — 'With your consent, a real intake process reviews income, assets, debts, identity, and credit. Common documents include pay stubs or business records, bank statements, and tax returns.' 03 'Compare written scenarios' — 'Review payment, cash to close, mortgage insurance, and rate-adjustment trade-offs before choosing a direction.' 04 'Request the letter' — 'After documentation and lender review, ask for a pre-approval letter with its amount and conditions. It is still not a final loan commitment.' 添加一条 Pine Light 侧注：'For [AUDIENCE], [BROKER] starts with a document list tailored to the scenario—not a generic demand for every file at once.'
   布局：Parchment 背景，配一条垂直四行时间线。编号列宽 72px，中央一条竖线，说明文字最大 62ch；侧注在桌面端跨第 8–12 列、位于前两步旁边，在移动端移到下方。
   动效：步骤按顺序以 70ms 交错显现；时间线竖线在 600ms 内绘制一次，在减少动态效果下禁用。
8. **经纪人简介** — 区块 id='broker'。左侧：broker-maya.webp，配图注 '[BROKER] · fictional broker portrait · replace with your own photo'。右侧眉题 'YOUR BROKER'；H2 'A person to ask, not a pipeline to enter.' 简介：'[BROKER] is the invented broker behind [BRAND] in [LOCATION]. Her approach is simple: translate lender jargon, show the trade-offs, and leave enough room to think. With 12 years across mortgage operations and brokerage, she has learned that a useful first call starts with listening.' 三项承诺：'A payment range before a sales pitch'、'A written document list and closing-cost outline'、'A clear answer when a scenario is not a good fit'。个人细节：'Outside the office, she keeps a shelf of trail guides and a very patient sourdough starter.' 联系方式行：'A fictional practice for demonstration · (555) 014-7286'。当变量变化时，将她的简介和示例调整为面向 [AUDIENCE]；绝不可将虚构的经历变成真实的资质或执照声明。
   布局：Paper 背景。图片跨 5 列、比例 3:4，文字跨 6 列、间隔一列。承诺为三行 border-top 行，配小号 Pine 对勾图标。移动端图片位于标题之后、简介之前，最大高度 560px。
   动效：肖像和文案只显现一次；无图片缩放或面部跟随效果。
9. **申请开始表单** — 区块 id='apply'。眉题 'A LOW-PRESSURE START'；H2 'Start with the shape of your plan.' 引言：'Three short steps create a private draft in this browser. No Social Security number, bank details, document upload, credit pull, or lender submission.' 在左侧表单引言上方放置 planning-desk.webp。右侧 ApplicationStarter 有可见的 'Step 1 of 3' 指示器和三步进度条。第 1 步 'Your goal'：单选卡片 'Buy a home'、'Refinance'、'Buy an investment property'；时间线选项 'Just exploring'、'Within 3–6 months'、'Ready to talk now'。第 2 步 'Your scenario'：房产用途选择 'Primary home'、'Second home'、'Investment'；价格和首付从计算器状态初始化，值可编辑且同步；首选贷款类型选择 'Not sure yet'、'Conventional'、'FHA'、'VA'、'USDA'、'Fixed or ARM guidance'。第 3 步 'Your contact preferences'：姓名、邮箱、首选联系方式 'Email'、'Phone'、'Either'，以及仅在相关时显示的可选电话；一个必填确认复选框 'I understand this preview stores my draft only on this device and does not send it.' 逐步内联校验，并聚焦第一个无效字段。最终按钮文字为 'Save my draft'，绝不用 Submit。确认信息：'Your draft is saved on this device. Nothing has been sent to [BRAND] or a lender.' 显示非敏感选择的简要回顾、一个 'Edit my draft' 按钮，以及带确认的 'Clear this draft'。将非敏感字段持久化到 localStorage 的 brandSlug + ':application-draft' 下；不持久化电话字段。无成功动画暗示申请已传输。
   布局：Pine Light 背景。左侧 5 列包含引言和 4:3 规划照片；右侧 6 列包含一个 Paper 表单卡片，内边距 28px，留一列间隔。进度条有三等分段。单选卡片桌面端两列、移动端一列。按钮为 Back 次要按钮和 Continue 主要按钮，对齐在卡片底部。
   动效：步骤内容在 220ms 内交叉淡入并位移 10px。确认仅使用静态 Check 图标和 180ms 淡入。减少动态效果时移除所有变换。
10. **FAQ 和页脚** — 五个 FAQ 使用原生按钮，配键盘可访问的手风琴面板：'Does using the calculator affect my credit?' → 'No. It is arithmetic in your browser. There is no credit pull, lender connection, or data transmission.' 'Are the rates available right now?' → 'No. Every rate is an invented example for comparing structures. Ask a lender for a current written quote and its assumptions.' 'How much down payment do I need?' → 'It depends on the program, property, and your eligibility. Less than 20% can be possible for some buyers, but mortgage insurance and other costs may change the comparison.' 'How does a mortgage broker get paid?' → 'Compensation can come from the borrower, the lender, or a combination depending on the arrangement. Ask for it in writing before proceeding.' 'What happens after I save this draft?' → 'Nothing leaves your device in this preview. A production brokerage would need a secure, compliant intake system before requesting real documents or sensitive information.' 页脚使用 Footer 颜色：[BRAND]、'Mortgage guidance for [AUDIENCE] in [LOCATION]'、指向 Calculator、Rates、Loan options、Pre-approval、Broker 和 Start 的锚点链接，以及虚构电话 (555) 014-7286。底部披露：'All brands, people, rates, and figures shown are illustrative examples, not offers, approvals, or commitments to lend. Calculations exclude taxes, insurance, fees, and mortgage insurance unless explicitly stated. © [BRAND].' 在该披露之后仅包含可选的 [CREDIT] 链接；不包含当前年份。
   布局：FAQ 区块为 Paper，内容最大宽度 820px，配 Rule 行分隔线和 20px 垂直内边距。页脚紧随其后，桌面端三列，内边距 64px，以及一条由半透明 Paper 分隔线隔开的全宽披露。移动端堆叠链接，并保持最小 16px 文字。
   动效：同一时间只需打开一个 FAQ；第一项默认打开。Chevron 旋转 180ms，答案淡入 160ms，在减少动态效果下均为即时。

## 资产
- 图片：三张生成的图片，每张均标注“Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template”。构建前用 curl -L -o 下载：https://media.vibefather.ai/assets/a4ca6feb-c9a2-4a50-a5a1-12ad817574bb/hero-home.webp → public/images/hero-home.webp，用于 Hero 区块，object-position 50% 58%，alt 为 'Sunlit cedar-sided home with a deep green front door'；https://media.vibefather.ai/assets/a4ca6feb-c9a2-4a50-a5a1-12ad817574bb/broker-maya.webp → public/images/broker-maya.webp，用于 Broker 资料区，object-position 50% 35%，alt 为 '[BROKER], a fictional mortgage broker, seated at a sunlit desk'；https://media.vibefather.ai/assets/a4ca6feb-c9a2-4a50-a5a1-12ad817574bb/planning-desk.webp → public/images/planning-desk.webp，用于 Application start 旁，object-position 50% 50%，alt 为 'Blank planning papers, a pencil and keys on a light oak desk'。将路径和改写后的 alt 文本存入 src/content.ts；切勿在运行中的站点里热链媒体 URL。
- 图片：在项目根目录写入 ASSETS.md，包含 path、source URL、author、license 列。每张照片一行，附其确切的 media.vibefather.ai 源 URL 及作者/许可文本 'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template'。将 @fontsource-variable/newsreader 和 @fontsource-variable/manrope 列为 OFL-1.1，将 lucide-react 列为 ISC。说明该经纪人为虚构的 AI 生成人物，与任何真实个人无关，该照片为占位图，用户可自行替换。
- 图标：仅对 ArrowRight、ArrowLeft、Check、Calculator、House、FileText、ShieldCheck、MapPin、KeyRound、ChevronDown 和 Trash2 使用 lucide-react。描边宽度 1.6，18–22px，颜色继承。不得使用贷款机构、卡组织、政府、社交媒体或其他品牌图标。创建 public/favicon.svg 为原创几何图形：32x32 圆角方块填充 Pine #285844，一个 Paper 三线账本形状和一个小 Sand 钥匙圆；不得复制任何现有 logo。
- 字体：安装并自托管 @fontsource-variable/newsreader 和 @fontsource-variable/manrope，在 src/fonts.ts 中导入。Vite 必须将 woff2 文件本地输出到 dist/。不得使用 Google Fonts 或其他字体 CDN。
- 图片：用 SVG/CSS 绘制摊销面积图、坐标轴、图例标记、进度条、账本与钥匙 favicon 以及步骤编号。不得使用图表图片、地图瓦片、占位图服务、额外位图、库存照片、签名插画或可识别地标。

## 不要做
- 不要后端、服务器代码、API 路由、数据库、身份验证、外部 API 调用、表单传输、文档上传或第三方服务。计算在本地运行，申请草稿保留在设备上，并明确说明不会发送任何内容。
- 在这个静态演示中，绝不要索取社会安全号码、完整银行详情、信用卡数据、身份证件、账户密码或精确的信用报告。不要声称申请已提交、已收到、已批准或已审核。
- 每个利率、还款额、利息总额和财务场景都必须明确标注为示例。绝不要将数字呈现为实时利率、个性化报价、优惠、保证节省、资格决定、预批准或贷款承诺。
- 使用 Setup 中精确的摊销公式和零利率分支，在显示前保持完整精度，并处理无效或极端输入，不出现 NaN、Infinity、负余额或控制台错误。税费、保险、费用和抵押贷款保险绝不能悄悄包含在内。
- 不要使用真实贷款机构名称、贷款产品品牌、贷款机构徽标、政府印章、官方样式的徽章、认证标志或暗示机构背书。FHA、VA 和 USDA 等项目名称只能作为纯解释性文本出现。
- 经纪人、经纪公司、类似推荐语的陈述、历史和电话号码都是虚构的。绝不要使用真实人物的身份或肖像；肖像必须保持为虚构生成的占位符，不 resemblance 任何真实个人。
- 不要复制任何参考网站的代码、文案、提示词文本、图像、徽标、自定义字体、标志性插图、独特图标或精确调色板。保持所有网站文案为原创美国英语。
- 自行托管每个字体、图像、图标和脚本。不要 CDN 脚本或链接标签、Google Fonts、热链接媒体、分析、跟踪像素、占位图服务、Unsplash、Pexels、Pixabay、CC BY-NC 资产或受限 UI 源。
- 生产环境必须使用 npm run build 构建到压缩的 dist/ 下，小于 8 MB，没有源映射，也不复制 src/。使用 Vite base './' 和相对本地资产路径；将所有三张下载的图像保留在 public/images/ 中。
- 这是一个 index.html 页面。内部导航仅使用 ./index.html#section 或本地 #section 锚点；不要裸目录链接、路由器依赖、死按钮、虚假外部贷款机构链接或当前年份/日期显示。
- 除了可选的 [CREDIT] 页脚链接外，绝不要在网站内提及 VibeFather。不要添加 SEO 元数据、Open Graph 标签、JSON-LD、关键词堆砌的标题，或关于模板许可证、定价或受众数量的内容。
- 尊重 prefers-reduced-motion。确保 1440x900 桌面和 390x844 移动布局没有裁剪或水平页面溢出，所有控件可通过键盘操作且焦点可见，图表同时具有可访问的 SVG 标签和完整的等效年度表格。
- 不要添加戏剧性动效、玻璃拟态、渐变、发光的金融陈词滥调、股市行情条、倒计时、紧迫性横幅、虚假实时活动或装饰性卡片网格，以免稀释计算器和指导内容。

---
— Prompt by VibeFather · https://vibefather.ai/t/mortgage-broker-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
