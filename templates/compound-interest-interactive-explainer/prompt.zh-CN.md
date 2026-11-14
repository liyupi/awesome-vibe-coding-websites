> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 复利互动讲解器

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
由 [BRAND] 发布的单页交互式讲解页面，向 [AUDIENCE] 教授复利。首屏是一个可用的计算器：月度存款、年利率和年数的滑块驱动一幅大型手绘风格的 SVG 堆叠面积图（存款 vs. 利息）和一个动画最终余额计数器。其下方是滚动叙事章节，配有粘性图表，逐步解释复利；一个“从 [START_AGES] 开始”的场景比较两位储蓄者；一个通胀开关用今天的货币重新表述每一个数字；还有一个公式角落展示数学计算及实时数值。每个数字都是有标注的假设；页面从不提供建议。

- 受众：[AUDIENCE]：好奇的初学者，他们听说过“尽早开始”但从未见过原因；以及教师和写作者，他们想链接到一个清晰、可玩的解释。
- 目标：读者在落地后五秒内拖动一个滑块，理解利息产生的利息使曲线向上弯曲，并在离开时能够用一句话解释为什么早开始十年比多存一点更重要。无需注册，无需线索收集。
- 语气：平静、温暖且精确，像一篇精心编辑的杂志讲解。短句、具体数字，第二人称仅用于描述图表显示的内容（“你的存款”、“你的余额”），绝不告诉读者该做什么。不炒作、不制造紧迫感、不出现“保证”、不出现“你应该”。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react、react-dom 18（MIT）、vite 5、@vitejs/plugin-react（MIT）、typescript 5（Apache-2.0）、tailwindcss 3.4、postcss、autoprefixer（MIT）、motion（motion.dev，从 motion/react 导入）（MIT）、d3-shape（area、line、curveMonotoneX）（ISC）、d3-scale（scaleLinear）（ISC）、lucide-react（ISC）、@fontsource-variable/fraunces（OFL-1.1 字体，MIT 包）、@fontsource-variable/public-sans（OFL-1.1 字体，MIT 包）、@fontsource/ibm-plex-mono（OFL-1.1 字体，MIT 包）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 用 Vite 的 react-ts 模板搭建脚手架；单页为项目根目录的 index.html，挂载 src/main.tsx。
  - vite.config.ts：base './'，build.sourcemap false，build.outDir 'dist'。不要将 src/ 复制到 dist/。
  - package.json 脚本：dev = vite，build = tsc -b && vite build，preview = vite preview。
  - 在 src/main.tsx 中一次性导入字体：'@fontsource-variable/fraunces'、'@fontsource-variable/public-sans'、'@fontsource/ibm-plex-mono/400.css'、'@fontsource/ibm-plex-mono/500.css'。
  - tailwind.config.ts：用设计中的十六进制色值扩展颜色 paper、paper2、card、ink、muted、rule、slate、green、greenDeep、coral、coralTint、amber；fontFamily display = ['Fraunces Variable', 'Georgia', 'serif']，sans = ['Public Sans Variable', 'system-ui', 'sans-serif']，mono = ['IBM Plex Mono', 'ui-monospace', 'monospace']；maxWidth page = '1240px'。
  - src/index.css：Tailwind 分层，body 背景为 paper、文字为 ink，所有带 .num 类的元素设置 font-feature-settings 'tnum' 1，自定义 range-input 样式（轨道 4px、rule 颜色，填充部分通过内联设置的 CSS 变量 --fill 显示为 green，22px 圆形滑块为 card 颜色、带 2px ink 边框和柔和阴影，滑块在激活时缩放至 1.1，可见的 2px green 聚焦环）。
  - 所有文案、变量值、滑块范围、假设默认值和 FAQ 文本都放在一个文件中：src/content.ts。当变量值与默认值不同时，重写该文件中的文案以适配它们；组件只从该文件读取。
  - src/lib/finance.ts 存放纯函数：simulate({ monthly, ratePct, years, perYear }) 返回每年一行 { year, deposits, interest, balance }，使用逐月模拟，存款在每月末存入，周期月利率 i = (1 + r/n)^(n/12) - 1，其中 n 是每年复利期数（1、4、12 或 365）；toReal(value, inflationPct, year) = value / (1 + inflationPct/100)^year；crossoverYear(rows) = 第一个 interest > deposits 的年份，否则为 null。
  - src/lib/format.ts：一个 LOCALE 常量 'en-US' 和来自 content.ts 的 CURRENCY 供给单个 Intl.NumberFormat 用于货币（maximumFractionDigits 0）、一个用于轴标签的紧凑格式化器（$100K 风格，notation 'compact'），以及一个保留一位小数的百分比格式化器。页面上的每个数字都经过这些格式化器。
  - src/state.tsx：一个 React context，持有 monthly、ratePct、years、perYear（默认 12）、inflationOn（默认 false）、inflationPct（默认 2.5）。页面上的每个图表和句子都从这一个 store 读取，因此移动 hero 滑块会更新每个区块。
  - src/hooks/useTweenedNumber.ts：封装 motion 的 animate()，在 0.6s 内以 ease [0.22, 1, 0.36, 1] 将显示的数字补间到新目标；当 useReducedMotion() 为 true 时立即返回目标值。
  - src/hooks/useActiveStep.ts：IntersectionObserver，rootMargin '-45% 0px -45% 0px'，返回当前位于视口中部的滚动叙事步骤的索引。
  - 图表是 src/charts/ 中手写的 SVG 组件，使用 d3-scale 做比例尺，使用 d3-shape 的 area/line 配合 curveMonotoneX 生成路径。每个图表通过其包装器上的 ResizeObserver 实现响应式，viewBox 与测量宽度匹配。
  - 将下载的插图放在 public/images/ 中，并使用相对路径（./images/...）引用它们。在项目根目录添加 ASSETS.md，列出每张图片和字体及其路径、来源 URL、作者和许可证。
  - Favicon：public/favicon.svg，一个 32px 圆角方块，颜色为 green #2F8F5B，带白色向上弯曲的曲线描边。页面 <title>：'[BRAND] · How compound interest works'。

## 变量
- [BRAND] — 发布者名称（默认："Tallypine"）。发布这份解释器的新闻通讯、学校或博客。显示在页眉、页脚和页面标题中。
- [AUDIENCE] — 目标读者（默认："people in their twenties opening their first savings account"）。决定引言文案、示例和 FAQ 的措辞。
- [CURRENCY] — 货币（ISO 4217 代码）（默认："USD"）。以 en-US 区域设置传给 Intl.NumberFormat；页面上的每个数字都使用它。
- [MONTHLY_DEPOSIT] — 默认每月存款额（默认："200"）。以所选货币表示的整数。存款滑块的起始值，以及对比场景中使用的存款额。
- [START_AGES] — 要对比的两个起始年龄（默认："25 and 35"）。较早的年龄在前，相差十岁效果最佳。两位储蓄者都在 65 岁停止。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/compound-interest-interactive-explainer（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- paper `#F6F1E7` — 页面背景，温暖的米白色
- paper2 `#EEE6D6` — 交替区块背景，以及图表后方的内嵌凹槽
- card `#FFFDF8` — 控制面板、图表卡片、FAQ 条目、滑块滑块头
- ink `#1E2226` — 标题、正文、坐标轴标签、十字准线
- muted `#5B6168` — 次要文本、说明文字、刻度标签
- rule `#D9CFBD` — 细线、网格线、滑块轨道、卡片边框
- slate `#6E7F91` — 每张图表中的本金/存款层，晚起步线
- green `#2F8F5B` — 利息层、早起步线、滑块填充、链接、主按钮
- greenDeep `#1F6B42` — green 的悬停状态，浅绿色调上的文本
- coral `#E2684A` — 仅用于通胀：今日货币模式徽章、通胀滑块填充、缩水购物篮强调
- coralTint `#F7DCD2` — 免责声明带背景（文本为 ink）
- amber `#D9A43B` — 交叉标记点及其引导线，仅此而已

### 排版（Typography）
- 展示标题（H1 桌面端 64/68px，移动端 40/44px；H2 桌面端 44/50px，移动端 32/36px），字重 400，opsz 自动，轻微负字距（-0.01em）；斜体 400 用于每个标题中一个强调短语：Fraunces Variable（OFL），字重 400/600
- UI 与正文：正文 18/30px，标签 14px 字重 600 大写字母间距 0.08em，按钮 15px 字重 600：Public Sans Variable（OFL），字重 400/500/600
- 所有数字：计数器、滑块读数、工具提示、坐标轴刻度、公式、表格。始终使用等宽数字：IBM Plex Mono（OFL），字重 400/500

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。页面容器最大宽度 1240px，两侧内边距 24px（640px 以下为 16px）。桌面端区块之间以 128px 垂直内边距分隔，移动端为 80px。文本列上限 62ch。卡片内边距 28px（移动端 20px）。桌面端 12 列网格，列间距 32px。
- 圆角：卡片和图表凹槽 18px；滑块轨道完全圆角；按钮和分段控件 999px 胶囊形；工具提示 10px；插图 14px，带 1px rule 色边框。
- 动效：图表重绘：当任何输入变化时，区域和线条路径在 0.5s 内以 ease [0.22, 1, 0.36, 1] 变形为新形状（通过 motion 的 motion.path 以新的 d 值对路径 'd' 做动画，两条路径始终由相同数量的点构建，以便干净地插值）；在滑块拖动过程中，即时更新而不做补间，以保持响应性。
- 动效：数字从不跳变：每个货币数字都使用 useTweenedNumber（0.6s）。
- 动效：滚动显现：区块标题和段落在 25% 可见时于 0.6s 内上浮 16px 淡入，仅一次，同级之间错开 0.08s。
- 动效：滚动叙事：当活动步骤变化时，粘性图表在 0.45s 内交叉淡化图层并高亮；非活动步骤段落降至 35% 不透明度。
- 动效：对比场景：一个 'Play the decades' 按钮在 6s 内（线性）将年龄擦洗器从较早的起始年龄动画到 65，通过 pathLength 逐步绘制两条线；65 处的差距括号在线条完成后生长进入（0.6s 弹簧，刚度 160，阻尼 20）。
- 动效：微交互：滑块滑块头在拖动时缩放至 1.1；分段控件通过 motion layoutId 在选项之间滑动胶囊高亮；通胀切换以 0.25s 垂直滑动交换模式徽章文本。
- 动效：prefers-reduced-motion：禁用路径变形、补间、显现和播放动画（显示完成状态，擦洗器位于 65），仅保留即时状态变化和颜色过渡。
- 图像：首屏的视觉锚点是精致的实时图表卡片本身，而非照片。辅助图像是一组四幅水粉与彩色铅笔编辑插图，绘制在页面调色板（石板蓝、叶绿、柔珊瑚、墨色）的温暖奶油色纸张上，为本模板生成，每章一幅，以 4:3 显示在 14px 圆角框架内，下方配以 muted 14px 文本的说明。图标为 Lucide，18px，1.75 描边宽度。其他一切（图表、购物篮、括号、标记）均以 SVG 绘制。无库存照片，无人物面孔，无带有真实货币标记的硬币。

## 页面与区块
### [BRAND] · 复利如何运作（`index.html`）
1. **页眉（共享，吸顶）** — 左侧：Lucide Sprout 图标，绿色，置于 32px 卡片色圆形内，带细线边框，然后是文字标识 '[BRAND]'，使用 Fraunces 22px 字重 600。中间（仅桌面端）：锚点链接 'The tool'、'Why time wins'、'[START_AGES]'、'Inflation'、'The formula'（每个标签都改写以适应空间；对比链接在默认值下显示为 'Start at 25 vs 35'），15px 字重 500，弱化色，悬停时变为墨色并带一条从左侧生长的 2px 绿色下划线。右侧：紧凑的分段控件 'Nominal | Today's money'，绑定到 inflationOn（与主视觉切换相同的状态）；当 Today's money 激活时，其胶囊为珊瑚色配白色文字。移动端：文字标识在左，分段控件在右，一个 Lucide Menu 按钮打开全宽面板，内含锚点链接。
   布局：全宽栏，高 68px，背景为纸色 85% 不透明度，backdrop-blur 8px，1px 细线底边框仅在滚动 8px 后出现。内容位于 1240px 容器内。
   动效：边框和阴影在滚动时淡入。移动端面板下滑 0.3s。
2. **免责声明带** — Lucide Info 图标，然后：'Illustrative only. Every rate on this page is a hypothetical example, not a forecast. This is not financial advice, and returns are not guaranteed.' 文字 14px 墨色，前两个词字重 600。
   布局：紧接页眉下方，全宽，coralTint 背景，桌面端高 44px（移动端换行为两行），文字在容器内居中。
   动效：无。
3. **主视觉：工具** — 左列：眉题 'An interactive explainer from [BRAND]'（14px 大写标签，绿色）。H1 由实时值构建：'Watch $200 a month quietly become *$398,298*.' 其中存款和最终余额来自状态和补间（余额使用 Fraunces 斜体，绿色）。副标题（18px 弱化色，2 行）：'Drag the sliders. The slate layer is money you put in; the green layer is interest, and interest on that interest. Every number on this page updates with you.' 其下是控制卡片，含三个滑块，每个为一行：标签（14px 大写）、等宽 20px 右对齐的实时读数、以及范围输入：'Monthly deposit' 0 到 2,000 步长 25，默认 [MONTHLY_DEPOSIT]；'Annual rate (hypothetical)' 0 到 12% 步长 0.1，默认 6.0%；'Years' 1 到 50 步长 1，默认 40。滑块下方一行含通胀开关：一个切换开关，标签 'Show in today's money'，开启时另有一个内联 'Inflation' 迷你滑块 0 到 6% 步长 0.1（默认 2.5%），珊瑚色填充。右列：图表卡片。卡片顶部：标签 'Balance after 40 years'（年数实时）和等宽 56px 字重 500 墨色的大计数器，补间；其下三个统计芯片排成一行：'Deposited $96,000'（石板色圆点）、'Interest earned $302,298'（绿色圆点）、'Interest share 76%'（等宽）。当通胀开启时，计数器上方出现珊瑚色徽章 'In today's money at 2.5% inflation'，所有值切换为实际值（默认余额读作 $148,338）。图表：堆叠面积图，存款在底部（石板色填充 0.9 不透明度），利息在上方（绿色填充 0.9），x 轴为年（根据范围每 5 或 10 一个刻度），y 轴为紧凑货币刻度，虚线网格线，无图表边框。悬停或触摸拖动显示垂直墨色十字准线、两层顶部的圆点、以及提示卡片：'Year 22'、'Deposited $52,800'、'Interest $56,445'、'Balance $109,245'。一个琥珀色圆点带细引导线标记交叉年份，注释为 'Year 22: interest passes your deposits'（当 crossoverYear 为 null 时隐藏，并显示弱化注释 'Interest does not overtake deposits in this range'）。图表下方：图例（石板色方块 'Your deposits'，绿色方块 'Interest'）和一个链接 'See how it works ↓' 指向下一节。
   布局：容器网格，12 列：文本和控制卡片跨 5 列，图表卡片跨 7 列，顶部对齐，间距 48px。图表卡片为卡片色，1px 细线边框，18px 圆角，柔和阴影 0 20px 40px -24px rgba(30,34,38,0.25)；桌面端图表高度 420px。主视觉区块顶部内边距 72px。低于 1024px 时列堆叠：标题和副标题在前，然后是图表卡片，然后是控制卡片，图表高度降至 300px。整个主视觉（含图表）在 1440 桌面端的 900px 视口高度内适配。
   动效：加载时 H1 单词依次淡入上移（0.05s 交错），然后区域从左到右以 clip-path 揭示绘制，历时 1.2s，计数器从 0 计数上升。滑块变化时，路径变形，数字按设计动效中所述补间。交叉标记沿 x 轴以 0.4s 弹簧滑动到新年份。
4. **第 1 章：什么是复利（滚动叙事）** — 区块眉题 'Chapter 1' 和 H2 'Interest that earns *its own* interest.' 一段简短导语和步骤上方的插图 compounding-seedling.webp。四个步骤，每个为一张卡片，含等宽步骤编号和 2 到 3 句话，数字来自实时状态：步骤 1 'Year one'：'You deposit $2,400 over twelve months. At 6.0%, they earn about $67 in interest. Small, and almost all of the bar is slate.' 步骤 2 'Interest on interest'：'In year two, that $67 starts earning too. The green layer now grows from two sources: your new deposits and the interest already sitting there.' 步骤 3 'The bend'：'By year 22 the green layer is taller than the slate one. From here, interest adds more each year than you do.' 步骤 4 'The snowball'：'In the last ten years alone the balance grows by about $197,000, more than double everything you deposited in forty years.'（从状态计算最后十年的增长和比率）。吸顶图表显示年度柱（每年一根柱，石板色底部，绿色顶部）并随步骤变化：步骤 1 仅第 1 年可见并放大；步骤 2 前五年，绿色顶部高亮，每根柱的其余部分淡化；步骤 3 所有年份，交叉年份之后的柱为全色，之前的为 40% 不透明度，并显示琥珀色交叉标记；步骤 4 所有年份，最后十年高亮，并有一个括号标注其合计增长。
   布局：paper2 区块背景。桌面端两列：左 5 列放置插图（4:3，14px 圆角）然后四个步骤卡片间距 60vh；右 7 列放置吸顶图表卡片（top: 120px，高度 70vh 最大 560px）。移动端图表在顶部吸顶（高度 44vh），步骤卡片在卡片背景 90% 不透明度上滚过。
   动效：useActiveStep 选择活动步骤；步骤变化时柱的高度和透明度在 0.45s 内动画；非活动步骤 35% 不透明度。
5. **第 2 章：为什么时间胜过金额** — 眉题 'Chapter 2'，H2 'Double the time, not *the deposit*.' 导语：'Two ways to put away the same $96,000. One saves twice as much for half as long. The other saves the regular amount for twice as long.'（总额从状态计算）。两张并排情景卡片，各含一个水平堆叠条（石板色存款，绿色利息），以相同比例绘制：卡片 A 'Double the deposit'：'$400 a month for 20 years' → '$184,816'；卡片 B 'Double the years'：'$200 a month for 40 years' → '$398,298'。其下是一行 Fraunces 斜体 24px 的结论：'Same money in. More than twice the money out, because the green layer had twenty more years to grow.' 卡片 A 使用 2 × 存款和滑块年数的一半（向下取整）；卡片 B 使用滑块的存款和年数。桌面端卡片右侧是插图 time-hourglass.webp，配文 'Time does the heavy lifting.'
   布局：纸色背景。桌面端：卡片在 2 列网格中跨 8 列，插图在剩余 4 列，垂直居中。移动端：插图在前，然后卡片堆叠。
   动效：卡片滚动进入视图时，条从宽度 0 增长到其值，历时 0.9s，卡片 B 在卡片 A 之后 0.3s 开始；数值补间。
6. **第 3 章：25 岁开始 vs 35 岁开始** — 眉题 'Chapter 3'，H2 'Same deposit. *Ten years* apart.' 导语介绍两位虚构的储蓄者：'Maya starts putting $200 a month away at 25. Theo starts the same $200 a month at 35. Both stop at 65, both at the same hypothetical 6.0%.' 图表：x 轴为年龄，从较早的开始年龄到 65 岁，y 轴为余额；两条线下方带柔和面积填充，Maya（较早）为绿色，Theo（较晚）为石板色；65 岁处有终点标签，含姓名和余额：'Maya $398,298'、'Theo $200,903'。65 岁处两个终点之间有一个垂直括号，标注 'Gap $197,395'。一个 'Play the decades' 按钮（绿色胶囊形，Lucide Play 图标）驱动年龄滑块动画和实时读数 'Age 47: Maya $… · Theo $…'。图表下方有三张统计卡片：'Maya deposited $96,000'、'Theo deposited $72,000'、'Maya put in $24,000 more and ends with $197,395 more.' 然后是插图 two-paths.webp，旁边是收尾段落：'The ten years Theo missed were not just ten years of deposits. They were the first ten years of compounding, the ones every later dollar would have been built on.' 年龄来自 [START_AGES]；存款和利率来自共享状态；除非重写文案，储蓄者姓名保持 Maya 和 Theo。
   布局：paper2 背景。图表卡片横跨整个容器宽度，桌面端高 460px（移动端 320px），控件（播放按钮和读数）在图表上方一行。统计卡片为 3 列网格（移动端堆叠）。收尾行：插图 5 列，段落 7 列。
   动效：线条首次进入视图时绘制（pathLength 从 0 到 1，历时 1.4s，Theo 的线在 x 轴到达其开始年龄时开始）。播放按钮行为同 Design motion；再次按下重新开始。括号在线条完成后生长出现。
7. **第 4 章：通货膨胀** — 眉题 'Chapter 4'，H2 'A big number is not *the same* as big buying power.' 导语：'Prices tend to rise over time, so a balance forty years from now buys less than the same figure would today. Switch to today's money to see every number on this page adjusted by a hypothetical inflation rate.' 一张大切换卡片重复全局开关（'Nominal' / 'Today's money'），带通胀滑块（0 到 6%，默认 2.5%，珊瑚色填充）。旁边是一个 SVG 'basket' 视觉：一个简单绘制的购物篮，装满 10 个圆角物品形状，颜色为绿色、石板色和珊瑚色；填充物品的数量缩减到与所选年数后 100 单位货币的购买力相匹配（按 2.5% 计 40 年：'$100 today buys what $37 buys in year 40'，因此 10 个物品中约剩 4 个，其余变为虚线轮廓）。两个数字并排，等宽字体 40px：'Nominal balance $398,298' 和 'In today's money $148,338'，两者之间有一个珊瑚色箭头。插图 inflation-basket.webp，配文 'The same basket, a different price.'
   布局：paper 背景。桌面端：切换卡片和购物篮视觉在 2 列行中（6 + 6），然后两个大数字居中位于下方，插图在右侧（数字 7 列，插图 5 列）。移动端：按该顺序堆叠。
   动效：值变化时，购物篮物品逐个弹出（scale 从 1 到 0.6，淡出为轮廓），错开 0.05s；大数字补间。打开切换时，整页图表的绿色图层向珊瑚色偏移 10%，持续 0.3s 作为视觉提示，然后稳定。
8. **公式角落** — 眉题 'Under the hood'，H2 'The math, *with your numbers*.' 用三行简短平实的语言解释：'Each month your balance grows by a small rate, then your deposit is added. Repeat for every month. The formula below does all of those months at once.' 一张等宽字体的公式卡片：第 1 行 'i = (1 + r / n)^(n / 12) − 1'，第 2 行 'Balance = PMT × ((1 + i)^(12 × t) − 1) / i'，每行下方有一行代入实时值的绿色行，例如 'i = (1 + 0.06 / 12)^(12 / 12) − 1 = 0.005000'、'Balance = 200 × ((1.005000)^480 − 1) / 0.005000 = $398,298'。一个关键术语列表解释 PMT（每月存款）、r（年利率的小数形式）、n（每年复利期数）、t（年数）。一个分段控件 'Compounding: Yearly | Quarterly | Monthly | Daily'（n = 1、4、12、365；默认 Monthly）更新公式和整个页面。一张小对比表 'How much frequency matters' 列出所有四种频率及当前输入：Yearly $381,536、Quarterly $395,098、Monthly $398,298、Daily $399,872，选中行高亮，并附注：'Frequency moves the result a little. Time moves it a lot.' 下方有一个展开按钮 'Show the year-by-year table'（Lucide ChevronDown），展开一个可滚动表格（max-height 420px，粘性表头），列为 Year、Deposited、Interest、Balance（当通胀开启时还有 Balance in today's money），等宽表格数字，paper2 斑马纹行。
   布局：paper2 背景。桌面端：解释和关键术语列表在 5 列，公式卡片加频率控件和对比表在 7 列。年度表格横跨下方全宽。移动端：堆叠；公式行在运算符处换行，表格在卡片内水平滚动。
   动效：代入值变化时交叉淡入淡出（0.25s）。表格以高度动画展开 0.35s。
9. **问题** — H2 'Fair questions'。五个手风琴项（Lucide Plus 旋转为 X）：1 'Is 6% a realistic rate?' 'It is a round, hypothetical number chosen to make the shape of the curve easy to see. Real returns vary year to year, can be negative, and are never guaranteed. Try 3% or 9% with the slider to see how much the rate changes the outcome.' 2 'Why does the chart assume the same deposit every month?' 'To isolate one idea: what time and compounding do on their own. Real life has raises, gaps and withdrawals, which this explainer leaves out on purpose.' 3 'What about taxes and fees?' 'They are not included. Any yearly fee or tax works like a lower rate, so you can approximate it by moving the rate slider down.' 4 'Does this page tell me what to invest in?' 'No. [BRAND] explains how the math works. It does not recommend any account, product or strategy, and it does not know your situation.' 5 'Why switch to today's money?' 'Because a balance decades away is measured in future prices. Adjusting for a hypothetical inflation rate makes it easier to compare with what money buys now.'
   布局：paper 背景。窄居中列，max-width 760px，项为卡片色行，1px 规则边框，18px 圆角，24px 内边距，12px 间距。
   动效：手风琴高度动画 0.3s，一次只打开一项。
10. **页脚（共享）** — 顶部：免责声明重复在 coralTint 面板中：'All figures are illustrative and based on hypothetical rates. Nothing on this page is financial advice, and past or projected returns are not guaranteed.' 然后是三列行：左侧，Sprout 标记和 '[BRAND]'，配一行 'A free weekly letter about money basics for [AUDIENCE].'；中间，'About the numbers'：'Deposits are added at the end of each month. Interest compounds at the frequency you choose. Inflation adjusts each year's balance back to today's prices.'；右侧，锚点链接回到各章。底部行：左侧 '© [BRAND]'，右侧可选 [CREDIT] 链接，13px 弱化。
   布局：ink 背景（#1E2226），paper 色文字和 70% 不透明度的弱化链接；coralTint 免责声明面板位于容器内顶部，ink 文字。顶部内边距 80px，底部 40px。移动端列堆叠。
   动效：无。

## 资产
- image: https://media.vibefather.ai/assets/a3fd809f-38a4-47be-91b5-cabdd47e6177/compounding-seedling.webp → public/images/compounding-seedling.webp。Alt：'A small green seedling growing out of a glass jar half filled with plain coins, painted in gouache on cream paper.' 用于第 1 章顶部。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- image: https://media.vibefather.ai/assets/a3fd809f-38a4-47be-91b5-cabdd47e6177/time-hourglass.webp → public/images/time-hourglass.webp。Alt：'An hourglass whose falling sand turns into green leaves gathering in the lower bulb.' 用于第 2 章场景卡片旁。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- image: https://media.vibefather.ai/assets/a3fd809f-38a4-47be-91b5-cabdd47e6177/two-paths.webp → public/images/two-paths.webp。Alt：'Two winding paths of different lengths climbing a gentle hill toward the same large tree at the top.' 用于第 3 章结尾一行。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- image: https://media.vibefather.ai/assets/a3fd809f-38a4-47be-91b5-cabdd47e6177/inflation-basket.webp → public/images/inflation-basket.webp。Alt：'A woven market basket holding a loaf of bread and a few apples beside a short stack of plain coins.' 用于第 4 章。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- image: 其余全部用代码绘制：所有图表（堆叠面积图、年度柱状图、情景柱状图、对比折线）、交叉点标记、差距括号、杂货篮视觉和 favicon 均为手写 SVG。不使用图表库，不使用占位图服务。
- icon: lucide-react (ISC)：Sprout、Info、Menu、X、Play、RotateCcw、ChevronDown、Plus、ArrowRight、ArrowDown。18px，strokeWidth 1.75，currentColor。
- font: 通过 Fontsource npm 包自托管：@fontsource-variable/fraunces、@fontsource-variable/public-sans、@fontsource/ibm-plex-mono（字重 400 和 500）。均为 OFL-1.1。在 ASSETS.md 中列出它们。

## 禁止事项
- 不得有任何形式的后端：不得有服务器代码、API 路由、数据库、认证、分析或第三方 API。不得有会提交到任何地方的表单，不得有电子邮件收集、注册、“咨询顾问”或线索流程。
- 不得有 CDN 脚本或链接标签。字体仅通过 Fontsource 自托管；绝不从 CDN 加载 fonts.googleapis.com、fonts.gstatic.com、Adobe Fonts 或图表脚本。不得使用商业字体。
- 不得使用图表库（不得使用 Recharts、Chart.js、ECharts、Nivo、Highcharts）。图表仅使用 d3-shape 和 d3-scale 手写 SVG。
- 不得从现有计算器网站或受限 UI 库（Aceternity UI、Tailwind Plus / Tailwind UI）复制代码或视觉元素；每个效果都从头重新创建。
- 任何地方都不得出现真实的银行、券商、基金、金融科技或应用名称、徽标、产品、指数基金或股票代码，包括示例数据和 FAQ。
- 不得将关于真实历史市场回报或现实世界利率的说法作为事实呈现。所有利率都标注为假设性，免责声明同时出现在页眉下方和页脚中。
- 不得使用建议性语言：绝不使用“you should invest”、“guaranteed”、“best investment”、“risk-free”或类似表述。
- 不得出现真实人物的姓名、肖像或引语，包括著名投资者以及常被误归于爱因斯坦的复利名言。两位储蓄者是虚构的。
- 生产构建中不得有 source map，不得将 src/ 复制到 dist/。通过 npm run build 在 dist/ 中生成静态输出，base 设为 './'，使所有资源路径均为相对路径。
- 内部链接为页内锚点（#tool、#time、#compare、#inflation、#formula）或指向 ./index.html，绝不指向裸目录。
- 绝不热链图片：将列出的每个文件下载到 public/images/，并在 ASSETS.md 中列出每张图片和字体，包含路径、来源 URL、作者和许可证。
- 保持 dist/ 在 20 MB 以下。在 1440×900 和 390×844 下控制台零错误；移动端无水平滚动。
- 遵循 Design motion 中所述的 prefers-reduced-motion。
- 不得在文案中硬编码数字：标题、步骤、说明文字和公式中的每个数字都由共享状态计算得出，以便在滑块或变量变化时保持正确。
- 除页脚中可选的 [CREDIT] 链接外，网站内不得提及 VibeFather。所有文案、标签、示例数据和替代文本均使用美式英语。

---
— Prompt by VibeFather · https://vibefather.ai/t/compound-interest-interactive-explainer · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
