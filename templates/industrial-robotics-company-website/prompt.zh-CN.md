> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 工业机器人公司网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为您自己的值；其余内容保持不变。

## 简介
为 [BRAND] Robotics 打造的单页钢灰色 B2B 网站，该公司是面向 [PRIMARY_USE] 的原创工业机械臂制造商。首屏是一张全出血的工厂车间照片，以机械臂为视觉锚点，并配有等宽字体的规格标签。接着是：四组数据统计带；三款机械臂（TL-120、TL-190、TL-260）的标签式规格表，每款均配有一幅原创代码绘制的 SVG 侧视轮廓机械臂图；四张行业卡片，附佐证文案；一张全宽安装现场照片带；一个 ROI 计算器（操作员与班次滑块，基于所选机械臂的本地计算，逐项精确列出）；三个带照片的案例研究；以及一个客户端演示申请表单。规格、价格和 ROI 输出均为虚构样本，并已标注为样本。

- 受众：[AUDIENCE]，正在评估资本设备，以及硬件创始人和自动化集成商，他们将该模板适配于任何规格驱动的机器。
- 目标：将硬性数字放在首位——规格、佐证、投资回收——并通过 #demo 表单将工厂团队转化为演示申请。
- 语调：工业感且精确。简短的陈述句、工程单位、等宽标签数据。自信而不喊口号；每项声明都是标注过的样本数字。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、motion（motion.dev，从 motion/react 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/saira（OFL-1.1）、@fontsource-variable/barlow（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化（Setup）：
  - 使用 npm create vite@latest 并选择 react-ts 模板来搭建项目。单页面：项目根目录下的 index.html，入口为 src/main.tsx。package.json 脚本：dev 'vite'、build 'tsc -b && vite build'、preview 'vite preview'。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist'，sourcemap false，assetsInlineLimit 0 }。图片放在 public/images/ 下，以 './images/<file>' 引用。保持 dist/ 在 6 MB 以内。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中扩展 colors（steel、panel、panel-2、line、chip、ink、slate、faint、orange、orange-deep、orange-tint），fontFamily display ['Saira Variable', 'system-ui', 'sans-serif']、sans ['Barlow Variable', 'system-ui', 'sans-serif']、mono ['IBM Plex Mono', 'ui-monospace', 'monospace']，maxWidth { container: '1180px' }，borderRadius { card: '6px', chip: '3px', btn: '4px', photo: '6px' }。
  - src/fonts.ts 导入 @fontsource-variable/saira（600,700）、@fontsource-variable/barlow（400,500,600）和 @fontsource/ibm-plex-mono（400.css、500.css、600.css）；src/main.tsx 导入 src/fonts.ts 和 src/index.css。index.css 包含 Tailwind 各层、body 背景 #ECEEF0 与文字颜色 #1D2126，以及一个 @media (prefers-reduced-motion: reduce) 块，将 CSS 动画和过渡缩短至 0.01ms。
  - 文件布局：src/content.ts（所有文案、机械臂规格、行业、案例，不含 FAQ——带类型），src/lib/brand.ts（brandSlug、emailDomain、companyName、address），src/lib/roi.ts（ROI 模型，以纯函数实现），src/components/（Header.tsx、MobileMenu.tsx、Hero.tsx、StatBand.tsx、Arms.tsx、ArmProfile.tsx、Industries.tsx、InstallBand.tsx、RoiCalculator.tsx、Cases.tsx、DemoForm.tsx、Footer.tsx、Button.tsx、Reveal.tsx），src/App.tsx 按页面顺序组合它们。
  - src/lib/roi.ts 导出 computeRoi({operators, shifts, hourlyRate, armPrice})，严格实现 ROI 部分中的数学计算；组件绝不重新推导数字。小时费率通过剥离非数字字符来解析 [LABOR_RATE]。
  - Reveal.tsx 用 Motion 的 whileInView 淡入上移动画包裹各区块（opacity 0 -> 1，y 20 -> 0，duration 0.6，ease [0.22, 1, 0.36, 1]，viewport once 且 amount 0.2），当开启减少动态效果时不播放动画。用 MotionConfig reducedMotion='user' 包裹整个应用。
  - index.html：lang en，<meta name='theme-color' content='#ECEEF0'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[BRAND] Robotics — Arms for [PRIMARY_USE]</title>。public/favicon.svg 为标志图形（橙色方块配白色胶囊机械臂字形）。
  - 构建前，使用 Assets 下的 curl 命令将六张图片下载到 public/images/，并按 Assets 下的说明在项目根目录写入 ASSETS.md。

## 变量
- [BRAND] — 品牌名称（默认：“Torvan”）。虚构的公司名称；网站以“[BRAND] Robotics”作为品牌标识。绝不是真实存在的机器人公司，也绝不是会让人联想到某家真实公司的名称或标志。
- [AUDIENCE] — 购买者（默认：“plant managers at mid-size US factories”）。复数名词短语。用于首屏副标题、行业介绍和演示表单文案。
- [PRIMARY_USE] — 主要用例（默认：“palletizing and machine tending”）。小写短语，描述机械臂全天的工作内容；决定首屏、行业、案例和页脚文案。可替换为焊接、点胶、实验室搬运，并相应改写佐证文案。
- [LABOR_RATE] — 示例人工费率（默认：“$38”）。完全成本小时费率，用作 ROI 计算器的默认值（货币符号后的数字）。计算器将其标注为可编辑的示例数字。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/industrial-robotics-company-website（默认：是；删除此行即可移除）

页面与区块（Pages & Sections）下的文案按默认值撰写。如果你的取值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- steel（钢灰）`#ECEEF0` — 页面背景，浅钢灰色
- panel（面板）`#FFFFFF` — 卡片、规格表、计算器、表单
- panel-2（面板-2）`#F6F7F8` — 内嵌区域、标签、页脚基底
- line（线条）`#D8DCE0` — 细线边框和表格线
- chip（标签）`#F1F3F5` — 等宽标签背景
- ink（墨色）`#1D2126` — 标题、正文文本、绘制的机械臂线条
- slate（石板灰）`#4E565E` — 正文文案
- faint（浅灰）`#8A939C` — 说明文字、等宽标签、脚注
- orange（橙色）`#E8590C` — 安全强调色：CTA、活动标签栏、关节环、证明数字、滑块填充
- orange-deep（深橙）`#C44908` — 悬停和按下状态
- orange-tint（浅橙）`#FCE9DF` — 高亮表格行、指标标签、焦点色调

### 排版
- 展示字体：H1 clamp(40px, 5vw, 64px) 行高 1.05 字距 -0.01em 字重 700；H2 clamp(28px, 3.4vw, 42px) 字重 700；卡片和机械臂标题 20-22px 字重 600：Saira Variable (OFL)，字重 600/700
- 文本：正文 16px/1.6，副标题 17px，导航 14px，按钮 15px 字重 600：Barlow Variable (OFL)，字重 400/500/600
- 等宽字体：规格标签、表格键、计算器数值、区块标签（11-12px，字距 0.12em，大写）、说明文字：IBM Plex Mono (OFL)，字重 400/500/600

### 布局与动效
- 间距：8px 基准。容器最大宽度 1180px，两侧内边距 24px（640px 以下为 20px）。桌面端区块垂直内边距 104px，移动端 76px。区块标题下方间距 48px。卡片内边距 24-28px；规格表行高 14px 单元格。
- 圆角：锐利工业风：卡片和照片 6px；标签 3px；按钮和输入框 4px；滑块轨道为直角。任何地方都不使用胶囊形。
- 动效：机械臂标签页：轮廓 SVG 和规格表交叉淡入淡出（不透明度 0 -> 1，240ms），表格行以 30ms 间隔错开进入；活动标签的橙色左侧条滑动 200ms。
- 动效：ROI 计算器：滑块移动时，输出值在数值之间补间（Motion 在 motion value 上动画，300ms，显示取整）；滑块轨道填充橙色至旋钮。
- 动效：安装横幅：背景照片在横幅滚动过程中平移 0 -> 6%（视差，仅 transform）。
- 动效：滚动显现：向上淡入 20px，0.6s，缓动 [0.22, 1, 0.36, 1]，仅一次，错开 0.06-0.08s。
- 动效：prefers-reduced-motion：无交叉淡入淡出（即时切换），无补间（即时数值），无视差；滑块仍可作为直接操作使用。
- 图像：六张生成的摄影图，读起来像同一个设施：干净现代的工厂车间，天窗透入柔和均匀的日光，抛光混凝土地面，冷灰色和白色机械配以小面积安全橙色点缀；画面中无人、无可读文字、无任何标志。照片中的机械臂为通用无品牌设计。在页面上，机械臂本身绘制为原创 SVG 侧剖面——胶囊连杆、球形关节、奶油色外壳、橙色关节环——几何形状为本模板虚构，刻意不 resemblance 任何真实制造商的机械臂。

## 页面与区块
### 首页（`index.html`）
1. **内容文件与文案规则** — 本提示词中的所有文案均按默认值编写（[BRAND] = Torvan，[AUDIENCE] = 美国中型工厂的工厂经理，[PRIMARY_USE] = 码垛与机床上下料，[LABOR_RATE] = $38）。将每个字符串、机械臂规格、行业、案例、标签、表单标签和页脚链接都放入 src/content.ts 并从中渲染；组件中不包含任何文案。如果任何变量值不同，请重写每个标题、副标题、行业证明行、案例研究和表单介绍，使其对新品牌、受众和用例具体且可信，同时保持相同的结构和条目数量（3 个机械臂、4 个行业、3 个案例、3 个计算器输出）。src/lib/brand.ts 中的派生值：brandSlug = [BRAND] 转为小写，非字母数字连续段替换为 '-'；emailDomain = brandSlug 去掉连字符 + '.com'（torvan.com）；companyName = [BRAND] + ' Robotics, Inc.'；address = '700 Foundry Row, Building C, Dayton, OH 45404'（为新品牌重写）。机械臂名称保持 TL-120 / TL-190 / TL-260 及绘制的几何形状，除非构建者发明新产品线。每个数字（规格、价格、投资回收期、证明指标）都是为虚构品牌编造的样本，并在各区块注明处保持标注为样本数据；没有客户标志，除指定的虚构案例客户外没有推荐语。
   布局：无视觉输出。content.ts 导出类型化对象：brand、nav、hero、stats、arms（3 个，含规格和价格）、industries（4 个）、cases（3 个）、roiCopy、demo、footer。区块顺序：页眉、主视觉、数据带、机械臂、行业、安装带、ROI 计算器、案例、演示表单、页脚。
2. **页眉（共享，粘性）** — 左侧：标志图形 + 文字标识 '[BRAND] ROBOTICS'（Saira 700，16px，大写，字母间距 0.04em）。标志图形：28px 内联 SVG — 一个安全橙色（#E8590C）方形（圆角 3），内含白色胶囊臂图形：两个成角度的圆角矩形链接，带两个白色关节圆点，2px 描边。导航链接（Barlow 500，14px，#4E565E，悬停 #1D2126）：Arms（#arms）、Industries（#industries）、ROI（#roi）、Cases（#cases）。右侧：橙色方角按钮 'Request a demo'（href #demo）。
   布局：固定顶部，高度 66px，全宽；内部容器 1180px，水平内边距 24px，flex justify-between items-center。背景 #FFFFFF，始终有 1px 底部 #D8DCE0 边框（无透明状态）。低于 900px：导航隐藏；显示按钮（小号）和一个 40px 图标按钮，带 Lucide Menu，从页眉下方打开全宽面板（背景 #FFFFFF，底部边框 #D8DCE0），四个链接为 18px、56px 行高，外加一个全宽 'Request a demo' 按钮；X 关闭，Escape 关闭，点击链接关闭。锚点平滑滚动，偏移 74px。
   动效：面板：Motion 高度/不透明度 220ms ease-out。其他无移动。
3. **主视觉：洁净工厂车间中的机械臂** — 引导语（等宽 12px，大写，字母间距 0.14em，白色/80）：'TORVAN ROBOTICS · [PRIMARY_USE]'。H1，两行，白色：'The extra shift' / 'that never calls in.' 副标题（18px，rgba(255,255,255,0.85)，最大宽度 560px）：'Torvan arms handle palletizing and machine tending through all three shifts — installed over a weekend and paying for themselves in months, not years.' 按钮：橙色 'Request a demo'（href #demo）和幽灵按钮 'Run the ROI math'（白色 1.5px 边框，href #roi）。规格标签（等宽 12px 大写，白色文字，背景 rgba(255,255,255,0.14) 带模糊）：'REACH 1.9 M'、'PAYLOAD 12 KG'、'REPEAT ±0.02 MM'。右下角说明文字（等宽 11px，白色/70）：'TL-190 IN CELL 3 — SAMPLE PHOTOGRAPH'。
   布局：全视口主视觉（最小高度 90vh）。背景：img hero-arm.webp 绝对定位 inset-0，object-fit cover，object-position center 40%；叠加 linear-gradient(90deg, rgba(18,22,26,0.78) 0%, rgba(18,22,26,0.35) 45%, rgba(18,22,26,0.15) 100%)。内容容器 1180px，左对齐，垂直居中（上内边距 120px，下内边距 96px）：引导语、H1、副标题、按钮在左列（最大宽度 620px），规格标签在按钮下方一行（移动端换行）。移动端：H1 40px，标签 3 个一行换行，说明文字隐藏。
   动效：入场：引导语、H1、副标题、按钮、标签在 80ms 后淡入上移（y 20 -> 0，交错 0.07s）。照片加载时从 1.04 缩放到 1，持续 1.2s（一次）。减少动效：所有内容原地渲染。
4. **数据带** — 四个虚构事实，等宽数值带标签：'3' / 'ARMS, ONE CONTROL STACK'；'40,000 H' / 'MEAN TIME BETWEEN FAILURES'；'±0.02 MM' / 'REPEATABILITY, TL-190'；'48 H' / 'TYPICAL INSTALL WEEKEND'。所有值均为样本值。
   布局：主视觉下方全宽带，背景 #1D2126，内边距 36px 0。容器 1180px；四个等宽单元格，由 1px rgba(255,255,255,0.14) 垂直线分隔。数值：IBM Plex Mono 600，30px，#FFFFFF，单位更小（18px，#8A939C）。标签：等宽 11px 大写，#8A939C，上边距 6px。移动端：2x2 网格带水平分隔线。
   动效：单元格在 30% 进入视口时淡入上移，交错 0.07s（一次）。数字不递增。
5. **机械臂：标签式规格表（#arms）** — 区块标签（等宽 12px，大写，字母间距 0.14em，#8A939C）：'PRODUCT LINE'。H2：'Three arms. No mystery in the numbers.' 副标题（17px，#4E565E）：'Pick a model — the drawing and the sheet change together. Sample specs for the demo line; every number invented.' 标签（垂直列表）：TL-120 COMPACT — 'tight cells between machines'；TL-190 GENERAL — 'palletizing and tending one line'（默认激活）；TL-260 HEAVY — 'full-pallet work and press tending'。规格表行（等宽键左，值右）：TL-120 — REACH 1.2 M · PAYLOAD 6 KG · REPEATABILITY ±0.03 MM · FOOTPRINT 180×180 MM · CYCLE TIME 0.9 S · BEST FOR: TIGHT CELLS · PRICE $28,400（样本）；TL-190 — REACH 1.9 M · PAYLOAD 12 KG · REPEATABILITY ±0.02 MM · FOOTPRINT 220×220 MM · CYCLE TIME 1.1 S · BEST FOR: ONE LINE · PRICE $41,900（样本）；TL-260 — REACH 2.6 M · PAYLOAD 24 KG · REPEATABILITY ±0.05 MM · FOOTPRINT 300×300 MM · CYCLE TIME 1.6 S · BEST FOR: FULL PALLETS · PRICE $63,500（样本）。PRICE 行位于橙色浅底背景上。表格下方：幽灵按钮 'Get a quote on the TL-190'（文本跟随激活标签）链接到 #demo，以及等宽脚注 'SAMPLE SPECS — SWAP IN YOUR OWN BEFORE PUBLISHING'。
   布局：区块内边距 104px 0（移动端 76px），背景 #ECEEF0。页眉左对齐最大宽度 640px，下边距 48px。三列网格（间距 28px；低于 900px 堆叠）：标签列（跨 3），机械臂绘图（跨 5），规格表（跨 4）。标签：垂直列表；每行内边距 14px 16px，行间 1px #D8DCE0 边框，型号名称（Saira 600，18px）+ 一行角色（14px，#4E565E）；激活行有 3px 橙色左边条和 #FCE9DF 背景。机械臂绘图（ArmProfile.tsx）：白色面板，1px #D8DCE0 边框，圆角 6px，内边距 24px，侧剖面 SVG 居中，下方等宽说明文字 'TL-190 · SIDE PROFILE · ORIGINAL GEOMETRY'（型号跟随标签）。规格表：白色面板，1px #D8DCE0，圆角 6px；行垂直内边距 14px，带 1px #D8DCE0 分隔线；键等宽 11px 大写 #8A939C，值 IBM Plex Mono 500 15px #1D2126 右对齐；PRICE 行背景 #FCE9DF，值颜色 #C44908。机械臂剖面 SVG（viewBox 0 0 360 300）— 原创几何形状，刻意不同于任何真实制造商的机械臂：地面阴影椭圆 (180,268) rx120 ry14 填充 rgba(29,34,38,0.10)；底板矩形 (120,252,120,12) rx3 填充 #D8DCE0 描边 #1D2126 1.5；基座圆角矩形 (162,182,36,72) rx10 填充 #F3EFE7 描边 #1D2126 1.5；肩部球体圆形 (180,170) r26 填充 #F3EFE7 描边 #1D2126 1.5，带 #E8590C 圆环描边 3 内缩 4；上臂胶囊：圆角矩形 w150 h34 rx17（从肩部，旋转 -40°）填充 #F3EFE7 描边 #1D2126 1.5，远端有 3px 橙色圆环；肘部球体 r18 填充 #F3EFE7 描边 #1D2126 1.5，带橙色圆环；前臂胶囊 w120 h26 rx13 旋转 +25°，相同处理；腕部球体 r12 带橙色圆环；夹爪：掌块矩形 w36 h22 rx4 和两个平行手指矩形 w8 h34，间距 6px，填充 #1D2126。连杆长度按型号缩放：TL-120 ×0.75，TL-190 ×1.0，TL-260 ×1.3（基座和圆环保持不变；绘图自动重新居中）。
   动效：标签切换：剖面图和表格交叉淡入淡出（不透明度 0 -> 1，240ms）；表格行交错 30ms 进入；激活标签的橙色条滑动 200ms；幽灵按钮标签以 150ms 淡入淡出切换。标签行悬停：背景 #F6F7F8。减少动效：即时切换。
6. **行业（#industries）** — 区块标签：'WHERE THEY WORK'。H2：'Four floors, four proof lines.' 副标题：'Sample outcomes from the demo line's story — invented, believable, labeled.' 卡片：1）食品与饮料包装（图标 Package，标签 'END OF LINE'）— 'Three cells took over end-of-line palletizing at a juice bottler; changeovers down 23%.' 2）汽车零部件（图标 Car，标签 'PRESS TENDING'）— 'A TL-260 feeds two press lines through the night shift at a stamping plant; scrap down 0.4 points.' 3）电子装配（图标 Cpu，标签 'BOARD HANDLING'）— 'TL-120 arms move boards between SMT lines — 11,000 cycles a day at ±0.03 mm.' 4）金属加工（图标 Hammer，标签 'SAW TENDING'）— 'Saw-tending cells run through lunch unattended; one operator now runs four saws.' 每个证明数字（23%、0.4、11,000、four）以橙色渲染。
   布局：区块内边距 104px 0，背景 #FFFFFF。页眉左对齐最大宽度 620px，下边距 48px。卡片：2x2 网格（间距 20px；低于 900px 单列）。卡片：背景 #F6F7F8，1px #D8DCE0，圆角 6px，内边距 24px；顶行：40px 图标方块（墨色图标在 #FCE9DF 上，圆角 3）+ 右侧标签（等宽 10px 在 #F1F3F5 上）；标题（Saira 600，20px，上边距 14px）；证明行（15px，#4E565E）。
   动效：卡片淡入上移，交错 0.07s（一次）。悬停：卡片边框变深至 #8A939C。其他无。
7. **安装带（视差照片）** — 宽幅工厂照片上居中一行：H2 白色 'A cell lands on a Friday and runs Monday.' 副标题行（等宽 12px 大写，白色/80）：'48 HOURS · TWO TECHS · YOUR FIRST PART PROVES IT'。无按钮。
   布局：全出血带，最小高度 420px，position relative，overflow hidden。背景：img bay-wide.webp 绝对覆盖，translateY 由滚动驱动（视差）；叠加 linear-gradient(180deg, rgba(18,22,26,0.55), rgba(18,22,26,0.75))。内容居中，最大宽度 720px，内边距 96px 24px：H2（Saira 700，clamp(28px,3.4vw,44px)，白色），下方等宽副标题。
   动效：视差：当带穿过视口时，照片平移 0 -> 其高度的 6%（rAF，仅 transform）。内容淡入上移一次。减少动效：照片固定，内容原地。
8. **ROI 计算器（#roi）** — 区块标签：'THE ROI MATH'。H2：'Two sliders. One payback number.' 副标题：'All math runs in your browser from sample rates — swap in your own before quoting anyone.' 左列，输入：滑块 'OPERATORS PER SHIFT' 1-8（默认 2），滑块 'SHIFTS PER DAY' 1-3（默认 2）；下方等宽行：'LABOR RATE [LABOR_RATE]/H — SAMPLE DEFAULT, CHANGE IT IN ONE PLACE' 和激活机械臂标签：'ARM: TL-190 · $41,900 SAMPLE'（跟随机械臂标签；默认 TL-190）。右列，输出带等宽标签：'ANNUAL LABOR REPLACED'（大号美元数字）、'PAYBACK'（月，1 位小数）、'3-YEAR NET'（大号美元数字）。输出下方假设标签（等宽 11px，#4E565E 在 #F1F3F5 上）：'2080 H/YR'、'70% UTILIZATION'、'4%/YR UPKEEP'、'INTEGRATION $18,500/CELL + $2,400 TRAINING'。脚注（13px，#8A939C）：'Sample math with invented rates. Default setup — 2 operators, 2 shifts, $38/h on the TL-190 — lands at roughly $221K replaced, 6.8-month payback and $531K three-year net.'
   布局：区块内边距 104px 0，背景 #ECEEF0。页眉左对齐最大宽度 640px，下边距 48px。计算器：一个白色面板，1px #D8DCE0，圆角 6px，两列（间距 40px；低于 900px 堆叠），内边距 32px。滑块：自定义范围输入 — 轨道 4px #D8DCE0，橙色填充至旋钮（背景 linear-gradient 按值调整大小），22px 方形旋钮（#1D2126 带 3px 橙色边框），每个标签右侧等宽值标签。输出：三个块堆叠；值 IBM Plex Mono 600，40px，#1D2126（'PAYBACK' 单位 ' MO' 为 20px #8A939C）；每个上方等宽 11px 大写 #8A939C 标签。标签在输出下方换行。
   动效：滑块：填充实时更新；每当输入或激活机械臂变化时，输出在旧值和新值之间补间（300ms，值按格式四舍五入）。减少动效：即时更新。数学（精确，在 src/lib/roi.ts 中，纯函数）：rate = [LABOR_RATE] 的数字；hours = operators * shifts * 2080；saved = hours * rate * 0.7；cells = operators；hardware = cells * armPrice；integration = cells * 18500 + 2400；total = hardware + integration；upkeep = 0.04 * hardware；netYear = saved - upkeep；paybackMonths = total / netYear * 12（四舍五入 1 位小数）；threeYearNet = 3 * netYear - total。美元格式带千位分隔符，无小数；三年净额以完整美元显示。
9. **案例研究（#cases）** — 区块标签：'FROM THE FLOOR'。H2：'Three deployments, three numbers.' 卡片 1 — 照片 pallet-cells.webp，标签 'FOOD'，'Lakeline Foods' — '3 × TL-190, end-of-line palletizing. Changeovers down 23%; six open roles reassigned instead of hired.' 指标标签：'23% FASTER CHANGEOVERS'。卡片 2 — 照片 conveyor-line.webp，标签 'STAMPING'，'Vantage Stamping' — '2 × TL-260 tending two press lines. Lights-out shifts within two months of install.' 指标标签：'0.4 PTS LESS SCRAP'。卡片 3 — 照片 detail-gripper.webp，标签 'ELECTRONICS'，'Orin Circuits' — '4 × TL-120 moving boards between SMT lines, 11,000 cycles a day at ±0.03 mm.' 指标标签：'11,000 CYCLES/DAY'。网格下方脚注（13px，#8A939C）：'Customers and outcomes are invented samples for the demo site.'
   布局：区块内边距 104px 0，背景 #FFFFFF。页眉左对齐，下边距 48px。卡片：3 列网格（间距 24px；低于 900px 单列）。卡片：背景 #F6F7F8，1px #D8DCE0，圆角 6px，overflow hidden；照片顶部宽高比 4:3（cover；detail-gripper.webp 为方形，居中裁剪）；主体内边距 20px：标签（等宽 10px 在 #F1F3F5 上），客户名称（Saira 600，20px），两行摘要（15px，#4E565E），指标标签（等宽 11px，#C44908 在 #FCE9DF 上）。
   动效：卡片淡入上移，交错 0.07s（一次）。悬停：照片在框架内从 1 缩放到 1.03。减少动效：静态。
10. **演示请求（#demo）** — 左列：照片 bay-detail.webp（4:3，下方橙色 3px 线）带等宽说明文字 'CELL 3, DAYTON SHOWROOM — SAMPLE PHOTO'。右列：区块标签 'SEE ONE RUN'。H2：'Request a demo.' 正文（16px，#4E565E）：'Thirty minutes on our floor or yours — [PRIMARY_USE], your parts, your cycle time. We will email within one business day to set it up.' 表单字段（标签等宽 11px 大写）：Name（文本，必填），Company（文本，必填），Work email（邮箱，必填），Process（选择：Palletizing / Machine tending / Part inspection / Not sure yet），Notes（文本域，占位符 'Part weight, cycle target, floor space — anything useful.'）。提交：橙色按钮 'Request a demo'。成功面板：一个 40px 橙色浅底方块带橙色 Check，标题 'Request noted'，文本 'Thanks — a note is on its way from hello@' + emailDomain + ' within one business day.' 和一个文本按钮 'Send another request'。错误：字段下方内联 'Required' / 'Enter a valid email address'，颜色 #C44908，设置 aria-invalid。
    布局：区块内边距 104px 0，背景 #ECEEF0。两列：照片列跨 5（桌面端粘性顶部 96px），表单列跨 7 在白色面板中（1px #D8DCE0，圆角 6px，内边距 32px）。字段 2 列网格（Name+Company，Email+Process，Notes 全宽）；输入背景 #FFFFFF，1px #D8DCE0，圆角 4px，内边距 12px 14px，聚焦环 2px 橙色。移动端：照片在表单上方，非粘性。
    动效：面板淡入上移（一次）。成功淡入并从 0.98 缩放到 1（220ms）。表单调用 preventDefault，仅更改本地状态；不发送任何内容。
11. **页脚** — 左侧：标志图形 + '[BRAND] ROBOTICS'，一行 'Industrial arms for [PRIMARY_USE].' 和地址 '700 Foundry Row, Building C, Dayton, OH 45404' 以及 hello@ + emailDomain。三个链接列：Product（Arms #arms，Industries #industries，ROI #roi），Proof（Cases #cases，Demo #demo），Company（About，Service plans，Careers -> #top）。底行：左侧 '© ' + companyName（无年份，无日期）；右侧：文本链接 Terms、Privacy（#top）和一个 36px 图标按钮带 Lucide Mail（mailto）。然后是可选的 [CREDIT] 链接（如果提供）。
    布局：内边距 64px 0 36px，背景 #F6F7F8，顶部边框 1px #D8DCE0。容器 1180px；12 列网格：品牌块跨 5，链接列各跨 2（标题 Barlow 600 13px 大写 字母间距 0.08em；链接 14px #4E565E 悬停 #1D2126）。底行上边距 48px，上内边距 20px，顶部边框 1px #D8DCE0，13px #8A939C，flex justify-between。移动端：品牌块全宽，链接列 2 列网格，底行堆叠。
    动效：除链接颜色过渡外无。

## 资源

- 图片：为本设计生成的六张模板图片（由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发），风格统一：干净的天窗厂房与无品牌机械的工业摄影，带少量安全橙点缀，无人物、无可读文字、无标识。用 curl -L -o 将每张图片下载到 public/images/ 并以 './images/<file>' 引用：https://media.vibefather.ai/assets/bb307245-6bbe-4ce1-95ab-6491c2ac1c4a/hero-arm.webp -> public/images/hero-arm.webp（首屏背景；alt 'A generic unbranded robot arm with cream housing and orange joint rings standing in a clean factory bay'）；https://media.vibefather.ai/assets/bb307245-6bbe-4ce1-95ab-6491c2ac1c4a/bay-wide.webp -> public/images/bay-wide.webp（安装展示带背景；alt 'A wide empty factory bay with skylights and a line of machines'）；https://media.vibefather.ai/assets/bb307245-6bbe-4ce1-95ab-6491c2ac1c4a/pallet-cells.webp -> public/images/pallet-cells.webp（案例研究 1；alt 'A robot arm placing plain boxes on a pallet inside a safety fence'）；https://media.vibefather.ai/assets/bb307245-6bbe-4ce1-95ab-6491c2ac1c4a/conveyor-line.webp -> public/images/conveyor-line.webp（案例研究 2；alt 'A robot arm tending machines along a conveyor'）；https://media.vibefather.ai/assets/bb307245-6bbe-4ce1-95ab-6491c2ac1c4a/detail-gripper.webp -> public/images/detail-gripper.webp（案例研究 3；alt 'Close view of a two-finger robotic gripper'）；https://media.vibefather.ai/assets/bb307245-6bbe-4ce1-95ab-6491c2ac1c4a/bay-detail.webp -> public/images/bay-detail.webp（演示申请照片；alt 'A control cabinet and safety fence in a factory bay corner'）。共六个文件；不得替换为其他图片。
- 图片：以代码绘制，不使用位图：标识图形与 public/favicon.svg（橙色方块、白色胶囊机械臂字形），以及 ArmProfile.tsx——原创侧视机械臂 SVG（胶囊连杆、球形关节、奶油色填充、橙色圆环、按型号缩放），其几何结构在 Arms 章节中规定。所绘几何图形为本模板虚构；不得描摹或近似任何真实机械臂设计。
- 图标：lucide-react（ISC），按图标逐个导入：Package、Car、Cpu、Hammer、Check、Menu、X、Mail、ArrowRight、Settings、Wrench、Factory。不使用品牌标识，不使用 Simple Icons。
- 字体：安装 @fontsource-variable/saira、@fontsource-variable/barlow 和 @fontsource/ibm-plex-mono（均为 OFL-1.1），并在 src/fonts.ts 中导入。Vite 会将 woff2 文件打包进 dist/。
- 图片：在项目根目录编写 ASSETS.md，包含一个表格（路径、来源 URL、作者、许可证）：public/images/ 中每张图片一行，附其 media.vibefather.ai URL，作者为 'VibeFather'，许可证为 'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template'；为三个 Fontsource 包（OFL-1.1，https://fontsource.org）和 lucide-react（Lucide contributors，ISC，https://lucide.dev）各设一行；并加一行说明标识、favicon 和机械臂侧视图为本项目原创代码绘制艺术。

## 禁止事项
- 不得包含任何形式的后端：不得有服务器代码、API 路由、数据库、认证、邮件服务、分析工具或第三方 API。演示表单调用 preventDefault，仅改变本地 UI 状态；ROI 计算器为纯本地计算；不提交或发送任何内容。
- 不得出现任何真实机器人公司、产品名称、标识或机械臂设计——绝不可提及或暗示真实机器人制造商，也绝不可绘制模仿可识别工业机械臂轮廓的机械臂（笨重的橙色机柜、方形铸件、红色或黄色涂装）。绘制的机械臂须保持 Arms 部分指定的原始胶囊体与球体几何形状。
- 规格、价格、证明指标和 ROI 输出均为虚构样本；须保留 Arms、ROI 和 Cases 部分指定的样本标签与脚注，绝不可将其呈现为经认证或实测的数据。
- 不得声称任何安全或质量认证：任何位置均不得出现 CE、UL、ISO 或标准徽章、标记或编号。
- 照片仅展示工厂车间和机械设备——画面中不得出现人物、面部、可读文字或标识；仅使用列出的六个文件，不得使用库存照片或占位图服务。
- 不得从 fonts.googleapis.com、fonts.gstatic.com、Adobe Fonts 或任何 CDN 加载字体。仅通过三个 Fontsource 包自托管。不得使用商业字体。
- 不得使用 CDN 脚本或链接标签；每个脚本、样式、字体、图标和图像均须安装或下载到项目中，并打包进 dist/。运行时绝不可热链 media.vibefather.ai 的 URL；须先下载。
- 生产构建中不得包含 source map（build.sourcemap false），且 src/ 不得复制到 dist/。
- 资源路径使用相对路径（Vite base './'，图像为 ./images/<file>）。内部链接为哈希锚点（#arms、#industries、#roi、#cases、#demo、#top）或 ./index.html，绝不可使用裸目录或前导斜杠。
- 网站任何位置不得出现日期或年份：不得有版权年份、成立年份、安装或活动日期。页脚版权行仅包含 companyName。
- 标签页、滑块、视差或计算器不得使用 Aceternity UI、Tailwind Plus / Tailwind UI 或任何购买模板的代码或组件。须按本文所述全部重新实现。
- 须遵循 prefers-reduced-motion：不得使用交叉淡入淡出、补间或视差；滑块和表单保持直接交互功能。
- HTML 元素仅对 transform 和 opacity 做动画；绝不可直接对 width、height、top 或 left 做动画（滑块填充使用背景渐变，而非动画宽度）。
- 须在 1440x900 和 390x844 下正常工作，控制台零错误且无水平滚动；ROI 面板须适配单屏移动端，其芯片不得出现水平滚动。
- 除可选的 [CREDIT] 页脚链接外，网站任何位置不得提及 VibeFather。

---
— Prompt by VibeFather · https://vibefather.ai/t/industrial-robotics-company-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
