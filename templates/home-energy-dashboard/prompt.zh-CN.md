> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 家庭能源仪表盘

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
[BRAND] 是一个深色、单屏分析仪表盘，用于 [SITE_NAME] 的 [FOCUS]，由 [OPERATOR_NAME] 运营。它是一个应用外壳，包含固定左侧边栏、粘性顶栏（内含 Day / Week / Month / Year 范围切换器）、四个带数字递增和迷你折线图的 KPI 卡片、一个在数据集之间变形的核心消耗与太阳能对比 SVG 折线/面积图、一个实时负载 SVG 仪表、一个带交错生长动画的 SVG 柱状图（按房间或按小时）、一个带真实开关且能更新实时总计的设备列表、一条分时电价条和一个活动时间线。所有数据都是假的、确定性的，并保存在一个数据文件中，单个范围状态会切换每个视图。默认文案是为一个有太阳能电池板和热泵的家庭住宅编写的。当变量值不同时，重写每一段文案（问候语、站点详情、设备名称、房间、提示、活动项），使其适合新站点，并保持相同的结构、数量和数字格式。

- 受众：拥有太阳能、热泵或大功率电器的家庭或小型站点运营者，他们希望几秒钟内看到能源去向、成本以及当前正在运行的内容。构建者将其用作 IoT、能源或建筑管理产品的起始屏幕。
- 目标：让能源使用一目了然，并感觉是实时的：更改时间范围、悬停图表、关闭设备并观察总计反应。屏幕应展示精心控制的 SVG 动画和一个响应式应用外壳，从 1440px 桌面到 390px 手机都能正常工作。
- 语气：平静、精确、安静的技术感。短标签、句子大小写、数字优先。友好但从不卖萌。不要感叹号。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react (MIT)、react-dom (MIT)、lucide-react (ISC)、@fontsource-variable/inter (OFL-1.1)、@fontsource-variable/space-grotesk (OFL-1.1)、@fontsource/jetbrains-mono (OFL-1.1)、tailwindcss (dev) (MIT)、postcss (dev) (MIT)、autoprefixer (dev) (MIT)、vite + @vitejs/plugin-react (dev) (MIT)、typescript (dev) (Apache-2.0)
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化：
  - 使用 npm create vite@latest . -- --template react-ts 脚手架，然后运行 npm i lucide-react @fontsource-variable/inter @fontsource-variable/space-grotesk @fontsource/jetbrains-mono 和 npm i -D tailwindcss@3.4 postcss autoprefixer，然后 npx tailwindcss init -p。
  - package.json 脚本：dev = vite，build = tsc -b && vite build，preview = vite preview。
  - vite.config.ts：plugins [react()]，base: './'，build: { outDir: 'dist', sourcemap: false, emptyOutDir: true }。
  - tailwind.config.js：content ['./index.html','./src/**/*.{ts,tsx}']。扩展颜色：ink #0B0F14、panel #11161D、raised #161D26、line #1F2833、line-strong #2A3542、text #E6EDF3、muted #8B98A8、faint #5A6675、lime #C6FF3D、lime-deep #8FBF1F、amber #FFB547。扩展 fontFamily：display ['Space Grotesk Variable','system-ui','sans-serif']、sans ['Inter Variable','system-ui','sans-serif']、mono ['JetBrains Mono','ui-monospace','monospace']。
  - 同样在 tailwind.config.js 中，定义 keyframes 和动画工具类：pulse-ring（box-shadow 从 0 0 0 0 rgba(198,255,61,0.55) 到 0 0 0 8px rgba(198,255,61,0) 持续 2s 无限循环）、fade-up（opacity 0 + translateY(12px) 到 opacity 1 + none，450ms cubic-bezier(0.22,1,0.36,1) both）和 toast-in（translateY(16px) + opacity 0 到 none，260ms）。
  - src/main.tsx 导入 '@fontsource-variable/inter'、'@fontsource-variable/space-grotesk'、'@fontsource/jetbrains-mono/400.css'、'@fontsource/jetbrains-mono/500.css' 和 './index.css'。
  - src/index.css：@tailwind base/components/utilities。html { background:#0B0F14; color:#E6EDF3; color-scheme: dark; scroll-behavior: smooth } body font-sans 14px antialiased。添加 .num { font-variant-numeric: tabular-nums; } 以及全局 :focus-visible 轮廓为 2px #C6FF3D，偏移 2px。在 @media (prefers-reduced-motion: reduce) 内，对所有元素设置 animation: none、transition-duration: 0ms 和 scroll-behavior: auto。
  - 文件布局：src/content.ts（所有字符串和变量值）、src/data/energy.ts（数据集、设备、电价、活动）、src/lib/chart.ts（niceTicks、Fritsch–Carlson 单调三次路径构建器、线性重采样、格式化器）、src/hooks/（useTween、useCountUp、useReducedMotion、通过 ResizeObserver 的 useElementSize、通过 IntersectionObserver 的 useInView）、src/components/（Sidebar、TopBar、RangeSwitcher、KpiTile、Sparkline、UsageChart、LiveGauge、BreakdownChart、DeviceList、Switch、TariffStrip、ActivityFeed、SettingsDrawer、MoreSheet、MobileTabBar、Toast）。
  - 状态：App.tsx 持有一个 useReducer，包含 range（'day'|'week'|'month'|'year'，默认 'week'）、devices 开关映射、breakdownMode（'rooms'|'hours'，默认 'rooms'）、settings {animate, showSolar, showCost, peakGuard} 和一个 liveTick 计数器。每个派生数字（总量、成本、覆盖率、实时负载）都来自 useMemo 选择器，绝不在组件中硬编码。
  - 所有动画都通过手写的 requestAnimationFrame 钩子（useTween 使用 easeInOutCubic 和 easeOutCubic）。当用户偏好减少动态效果或 settings.animate 关闭时，所有持续时间为 0，值直接跳变。
  - 数据（src/data/energy.ts），DAY：labels '00' 到 '23'，title 'Today, 27 Oct'。used kWh = [0.42,0.38,0.35,0.34,0.36,0.48,0.92,1.46,1.21,0.74,0.62,0.58,0.66,0.61,0.57,0.69,0.98,1.62,2.14,1.88,1.41,1.02,0.71,0.52]。solar = [0,0,0,0,0,0,0.04,0.18,0.41,0.72,0.98,1.16,1.22,1.14,0.96,0.70,0.42,0.16,0.03,0,0,0,0,0]。峰值 3.8 kW 在 '18:12'。变化量：used −6.2%，cost −9.8%，peak +4.1%，solar +3.0 pts。说明文字 'vs. yesterday'。
  - 数据，WEEK：labels Wed、Thu、Fri、Sat、Sun、Mon、Tue，工具提示日期 '21 Oct' 到 '27 Oct'，title '21 – 27 Oct'。used = [18.9,20.6,22.3,27.1,25.4,19.8,21.4]。solar = [8.4,4.1,7.7,9.0,8.6,7.9,6.2]。峰值 4.6 kW 在 'Sat 24 Oct, 19:12'。变化量：used +2.4%，cost −1.7%，peak −3.5%，solar +1.2 pts。说明文字 'vs. previous week'。
  - 数据，MONTH：30 个点，从 28 Sep 到 27 Oct，labels 'D Mon'（例如 '28 Sep'），title '28 Sep – 27 Oct'。对于 i = 0..29，used[i] = round1(19.5 + 3.2*sin(i*0.85) + (i%7===5 || i%7===6 ? 4.8 : 0)) 和 solar[i] = round1(6.8 + 2.4*sin(i*0.55 + 1.2))。峰值 5.1 kW 在 'Sun 18 Oct, 18:40'。变化量：used −4.8%，cost −7.3%，peak +2.0%，solar −0.8 pts。说明文字 'vs. previous 30 days'。
  - 数据，YEAR：labels Nov、Dec、Jan、Feb、Mar、Apr、May、Jun、Jul、Aug、Sep、Oct，title 'Nov 2025 – Oct 2026'。used = [649,731,742,668,610,521,468,431,452,447,489,562]。solar = [92,71,84,121,198,262,318,341,336,298,231,152]。峰值 6.4 kW 在 '14 Jan, 17:55'。变化量：used −11.6%，cost −14.2%，peak −5.1%，solar +6.4 pts。说明文字 'vs. previous 12 months'。
  - 派生指标：Energy used = Σused。Grid cost = Σ max(0, used−solar) × 0.28（混合费率，显示为 [CURRENCY_SYMBOL]）。Solar coverage = Σsolar / Σused × 100。峰值负载来自数据集。格式化：kWh 在 1,000 以下保留 1 位小数，否则保留 0 位小数并带千位分隔符。成本保留 2 位小数。百分比保留 1 位小数。
  - 房间占比（%）（Kitchen、Heat pump、Living room、Laundry、Office、Bedrooms）：day [31,12,21,9,15,12]，week [28,16,19,14,12,11]，month [27,19,18,13,12,11]，year [25,24,16,13,12,10]。房间 kWh = share/100 × Σused。小时视图 = DAY used 数组 × 系数（day 1，week 1.07，month 1.02，year 0.89）。
  - 设备（名称 · 房间 · ratedW · 默认开启 · 今日 kWh · Lucide 图标）：Heat pump · Utility room · 1240 · on · 6.8 · Thermometer。Fridge-freezer · Kitchen · 86 · on · 1.1 · Refrigerator。Washing machine · Laundry · 412 · on · 0.9 · WashingMachine。Office desk · Office · 148 · on · 0.8 · Monitor。Living room lights · Living room · 64 · on · 0.4 · Lamp。TV & media · Living room · 120 · off · 0.6 · Tv。Oven · Kitchen · 2100 · off · 1.2 · CookingPot。EV charger · Driveway · 7200 · off · 0.0 · PlugZap，备注 'Scheduled 00:30'。基础负载为 90 W，始终开启。
  - 实时负载 = 90 W + Σ ratedW × jitter（对于开启的设备）。每 2000 ms liveTick 递增，每个开启设备将其 ratedW 乘以循环 [1, 1.02, 0.99, 1.03, 0.98, 1.01][(tick + deviceIndex) % 6]。在 tick 0 时默认实时负载为 2.04 kW。当前太阳能固定为 0.00 kW。From grid = 实时负载。当前时间固定为 2026 年 10 月 27 日星期二 23:52。绝不读取系统时钟，绝不使用 Math.random。
  - 电价时段（小时范围，每 kWh 费率）：00–07 Off-peak 0.19，07–16 Standard 0.28，16–20 Peak 0.41，20–23 Standard 0.28，23–24 Off-peak 0.19。
  - index.html：<title>[BRAND] — [FOCUS] dashboard</title> 和 <link rel="icon" href="./favicon.svg" type="image/svg+xml">。public/favicon.svg 是 App shell 部分描述的 logo 标记。
  - 在项目根目录写入 ASSETS.md。列出 Inter、Space Grotesk 和 JetBrains Mono（Fontsource 包，OFL-1.1，附其 npm URL）以及 Lucide 图标（lucide-react，ISC），并说明所有其他图形均由代码绘制。

## 变量
- [BRAND] — 品牌名称（默认："Gridlark"）。虚构的应用名称。显示在侧边栏字标、标题和页脚条中。
- [SITE_NAME] — 被监测的站点（默认："Juniper Lane house"）。被监测的住宅、商店或建筑。显示在站点切换器和顶栏副标题中。
- [OPERATOR_NAME] — 已登录用户（默认："Noor Halloran"）。虚构的全名。其名字用于问候语，其首字母用于代码绘制的头像。
- [CURRENCY_SYMBOL] — 货币符号（默认："€"）。每个成本和费率值的前缀。
- [FOCUS] — 监测对象（默认："Home energy"）。简短名词短语，例如 'Home energy' 或 'Kitchen energy'。用于顶栏副标题和页面标题。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接指向 https://vibefather.ai/t/home-energy-dashboard（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- Ink `#0B0F14` — 应用背景、侧边栏背景、青柠色上的文字
- Panel `#11161D` — 卡片表面、分段控件轨道
- Raised `#161D26` — 激活的导航项、图标块、工具提示、悬停行、抽屉
- Line `#1F2833` — 1px 边框、分隔线、图表网格线、仪表轨道
- Line strong `#2A3542` — 悬停边框、非激活条形、开关关闭轨道、十字准线
- Text `#E6EDF3` — 主文本和数字
- Muted `#8B98A8` — 次要文本、导航标签、太阳能线
- Faint `#5A6675` — 轴标签、说明文字、区块标签、关闭状态图标
- Lime `#C6FF3D` — 唯一强调色：激活范围胶囊、用量线、开启状态开关、良好增量、焦点环、实时圆点
- Lime deep `#8FBF1F` — 仪表弧渐变的起点（至 Lime）
- Amber `#FFB547` — 峰值、峰时电价带、不良增量、峰值防护警告、通知圆点
- Lime glow `rgba(198,255,61,0.10)` — 图表背后的径向辉光、良好增量标签背景、非峰时带为 0.14
- Amber glow `rgba(255,181,71,0.12)` — 不良增量标签背景、峰值带为 0.16

### 排版
- 展示字体：问候语、品牌字标、KPI 和仪表数字、移动端卡片标题：Space Grotesk Variable (@fontsource-variable/space-grotesk) (OFL)，字重 500/600
- UI 文本：导航、标签、正文、按钮：Inter Variable (@fontsource-variable/inter) (OFL)，字重 400/500/600
- 数据：轴标签、时间戳、功率读数、工具提示值、标签：JetBrains Mono (@fontsource/jetbrains-mono) (OFL)，字重 400/500

### 布局与动效
- 间距：4px 基准单位。桌面主区域：顶部内边距 28px，两侧 32px，底部 40px，最大宽度 1320px。12 列网格，间距 20px。卡片内边距 20px，卡片头部到内容间距 16px。移动端（<768px）：内边距 16px，网格间距 12px，卡片内边距 16px，底部内边距 88px 以避开标签栏。所有数字使用等宽数字（.num）。
- 圆角：卡片 16px。按钮、输入框、图标块和导航项 10px。分段控件外圈 12px，内胶囊 9px。标签和开关完全圆角。条形顶部圆角 6px（房间）和 3px（小时）。工具提示 10px。
- 动效：UI 缓动 cubic-bezier(0.22,1,0.36,1)。数据补间使用 easeInOutCubic（变形）或 easeOutCubic（计数递增和生长进入），由 requestAnimationFrame 驱动。
- 动效：加载时，卡片在 450ms 内上浮 12px 淡入，按 DOM 顺序以 60ms 交错（KPI 块优先）。
- 动效：KPI 值在 900ms easeOutCubic 内从上一个值计数递增到新值。增量标签在 200ms 内交叉淡入淡出。
- 动效：用量图表：首次查看时，用量线以 stroke-dashoffset 从全长到 0 在 1200ms 内绘制，区域在 300ms 延迟后从不透明度 0 到 1 在 600ms 内填充。范围切换时，两个系列和 y 轴最大值在 700ms 内变形，x 轴标签在 150ms 内淡出并在 200ms 内淡入。
- 动效：条形从 scaleY(0) 生长，transform-origin 在底部，在 600ms easeOutCubic 内完成，交错 40ms，首次在卡片 30% 进入视图时触发。范围切换时其高度在 500ms 内补间。模式切换时图表在 150ms 内交叉淡入淡出，条形再次生长进入。
- 动效：范围切换器胶囊以 translateX 在 320ms 内滑动。开关旋钮在 180ms 内滑动 16px。仪表弧和中心数字在 600ms 内补间。设备功率在 400ms 内计数到新值，切换的行闪烁 rgba(198,255,61,0.06) 持续 600ms。
- 动效：实时圆点（顶栏胶囊和电价当前标记）每 2s 循环脉冲环动画。
- 动效：抽屉在 280ms 内滑入，叠加层 200ms 淡入。Toast 使用 toast-in 并在 3000ms 后自动消失。
- 动效：prefers-reduced-motion：无绘制进入、变形、交错、脉冲或滑动。值和位置立即变化，实时数字仍每 2s 更新而不补间。
- 图像：无照片或位图。所有视觉元素均为 SVG 或代码绘制的 CSS：图表、迷你图、仪表、电价条、标志标记，以及 Raised 圆形上的首字母头像。Lucide 图标以 16–18px 使用，1.75 描边。深度仅来自 1px 边框、图表卡片背后的柔和径向青柠辉光（radial-gradient(600px circle at 30% 0%, rgba(198,255,61,0.08), transparent 60%)）以及激活数据点上的投影辉光。工具提示和抽屉使用阴影 0 8px 24px rgba(0,0,0,0.4)。无浅色主题。

## 页面与区块
### 概览（`/index.html`）
1. **应用外壳与侧边栏** — Logo 标记：一个 28×28 的 SVG 圆角方块（rx 8），填充色 #C6FF3D，一条 2px #0B0F14 的脉冲折线穿过点 (5,15) (10,15) (12,9) (16,19) (18,13) (23,13)。旁边是 Space Grotesk 600 18px 的 [BRAND] 字标。其下方是一个站点切换按钮，带一个青柠色 House 图标，上方为 '[SITE_NAME]'（13px Inter 500），下方为 '3 bed · 6.2 kWp solar'（12px 弱化色），以及一个 ChevronsUpDown 图标。点击它会打开一个小型弹出层，列出 [SITE_NAME] 并带一个青柠色 Check，以及一行禁用的 'Add a site'。导航组标签 'Monitor'（11px 大写，字距 0.08em，Faint 色）包含 Overview（LayoutGrid）、Usage（LineChart）、Rooms（BarChart3）和 Devices（Plug，带一个等宽 11px 的计数徽章 '5/8'，实时更新）。组 'Account' 包含 Tariffs（Receipt）和 Settings（Settings）。底部固定一张目标卡片：'October goal'（12px 弱化色）、'512 / 600 kWh'（等宽 13px）、一条 6px 进度条（Line 轨道，Lime 填充至 85%）以及说明文字 '88 kWh left · 4 days to go'。最后是一行用户信息：一个 36px 的 Raised 圆形，带 Line-strong 边框，内含 [OPERATOR_NAME] 的首字母（'NH'），使用 Space Grotesk 600 13px Lime，姓名（13px 500）、'Household admin'（12px 弱化色）以及一个打开 Settings 的 MoreHorizontal 图标按钮。
   布局：≥1024px：CSS grid grid-cols-[248px_1fr]。侧边栏为 sticky top-0 h-screen，Ink 背景，1px 右边框 Line，内边距 20px 16px，flex 纵向布局，间距 24px，目标卡片用 mt-auto 推到底部。导航项高 40px，圆角 10，内边距 0 12px，14px Inter 500 Muted，18px 图标，间距 12px。激活项具有 Raised 背景、Text 颜色、Lime 图标以及左边缘一条 2px × 18px 的青柠色竖条。悬停时给出 Raised 背景。滚动监听（对区块 id overview、usage、rooms、devices、tariffs 使用 IntersectionObserver）设置激活项。点击会滚动到匹配的区块 id，Settings 则打开抽屉。768–1023px：一个 72px 的图标栏，仅显示 logo 标记，图标居中，标签在悬停或聚焦时以工具提示显示。站点卡片、目标卡片和用户文字隐藏，仅显示头像。<768px：侧边栏隐藏，替换为移动端标签栏（见 Overlays）。
   动效：激活条和背景在 200ms 内交叉淡入淡出。Devices 徽章数字在变化时计数。弹出层在 160ms 内从 0.97 淡入并缩放。
2. **顶栏与范围切换器** — H1 'Good evening, Noor'（[OPERATOR_NAME] 的名字）使用 Space Grotesk 600 24px，字距 −0.01em。副行 '[SITE_NAME] · [FOCUS] overview' 为 13px Muted。右侧集群依次为：(1) 分段范围切换器 'Day' 'Week' 'Month' 'Year'（默认 Week），带 title 属性 'Shortcut: D · W · M · Y'；(2) 日期胶囊，带 Calendar 图标和等宽 12px 的当前数据集标题（例如 '21 – 27 Oct'）；(3) 实时胶囊，带一个 8px 青柠色圆点（pulse-ring）和等宽 12px 的 'Live · 2.04 kW'，每 2s 更新；(4) 一个 36×36 的铃铛图标按钮，带一个 6px Amber 圆点。铃铛打开一个 300px 的弹出层，含两条提醒：'Peak load hit 3.8 kW at 18:12'（琥珀色 TriangleAlert 图标）和 'EV charger scheduled for 00:30 off-peak'（青柠色 Clock 图标）。按键 D、W、M 和 Y 切换范围，除非焦点位于文本输入框内。
   布局：桌面端：sticky top-0 z-30，高度 72px，背景 rgba(11,15,20,0.78) 带 backdrop-blur 12px，1px 下边框 Line，内边距 0 32px，flex 两端对齐且项目居中。右侧集群间距 12px。切换器：Panel 轨道，1px Line 边框，圆角 12，内边距 4px，按钮高 36px × 宽 64px，13px Inter 600 Muted。一个绝对定位的 9px 圆角 Lime 胶囊位于激活按钮下方，其文字变为 Ink。按钮使用 role=radiogroup/radio 与 aria-checked，方向键在它们之间移动。胶囊高 36px，圆角 10，1px Line 边框，Panel 背景，内边距 0 12px。移动端（<768px），三行：第 1 行（非 sticky）为 logo 标记、[BRAND] 字标、右侧实时胶囊和 32px 头像。第 2 行为 20px 的 H1，然后是副行，然后是等宽 12 Faint 的日期标题。第 3 行为切换器，sticky top-0 带模糊 Ink 背景，全宽作为 4 列等宽按钮网格。日期胶囊和铃铛在移动端隐藏。
   动效：胶囊在 320ms 内平移到激活按钮。整个仪表盘根据新范围重新推导，每个模块按各自区块所述进行动画。
3. **KPI 卡片** — id='overview'。四张卡片。每张有一个 32px Raised 图标块，带 Lime Lucide 图标、一个 13px Muted 标签、右上角一个变化徽章、一个带单位的大数值、一个 12px Faint 说明文字以及当前范围的迷你折线图。(1) 'Energy used'，Zap，值 Σused + ' kWh'，说明文字 = 数据集说明（例如 'vs. previous week'），used 的青柠色迷你折线图。(2) 'Grid cost'，Wallet，值 '[CURRENCY_SYMBOL]' + cost，说明文字 'Blended rate [CURRENCY_SYMBOL]0.28/kWh'，逐点成本的青柠色迷你折线图。(3) 'Peak load'，Activity，值 + ' kW'，说明文字 = 峰值时间字符串（例如 'Sat 24 Oct, 19:12'），used 的琥珀色迷你折线图，最大值点用 3px 琥珀色圆点标记。(4) 'Solar coverage'，Sun，值 + '%'，说明文字 = Σsolar + ' kWh generated'，solar 的青柠色迷你折线图。变化徽章：对于 used、cost 和 peak，负变化为好（Lime 文字配 Lime 辉光，ArrowDownRight 12px），正变化为坏（琥珀色文字配 Amber 辉光，ArrowUpRight）。对于 solar，正值为好。徽章文字为等宽 11px，例如 '−6.2%' 或 '+1.2 pts'。
   布局：网格：lg 4 张卡片各占 col-span-3，md 每行 2 张，移动端 2×2。卡片：card（Panel，1px Line，圆角 16，内边距 20），min-height 156px。顶行为 flex，左侧图标块和标签，右侧徽章。数值行位于下方 16px，数值使用 Space Grotesk 600 32px（移动端 24px），.num，单位 14px Muted，间距 4px。桌面端：说明文字在左下，迷你折线图（112×36 SVG）在右下。移动端：迷你折线图全宽，高 28px，位于说明文字下方。迷你折线图：单调路径，1.5px 描边，面积渐变从描边色 0.18 到 0，一个 3px 端点圆点，带描边色的 drop-shadow 0 0 6px。悬停：边框 Line-strong 并在 200ms 内 translateY(−2px)。
   动效：数值在加载时和每次范围变化时于 900ms 内计数，从之前显示的值开始。迷你折线图以与主图表相同的 700ms 补间进行形变。卡片以 60ms 交错淡入上升。
4. **用量图表（主视觉）** — id='usage'。标题 'Consumption vs. solar'（14px Inter 600）。副行取决于范围：'Hourly, today'、'Daily, last 7 days'、'Daily, last 30 days' 或 'Monthly, last 12 months'。右侧：图例，含一个青柠色 10×2 色块 'Used' 和一个虚线弱化色块 'Solar'（当 settings.showSolar 关闭时隐藏），外加一个等宽 12 的总计胶囊，例如 '155.5 kWh'。图表：usage 绘制为 2px Lime 单调三次曲线，带从 Lime 0.28 到 0 的垂直面积渐变。Solar 绘制为 1.5px Muted 虚线（dasharray 4 4），无填充。峰值点获得一个 4px Amber 圆点，带 10px 琥珀色光晕，不透明度 0.25，以及上方 10px 处等宽 10px Amber 的 'Peak' 标签。工具提示（168px，Raised，1px Line-strong，圆角 10，内边距 10px，阴影）显示等宽 11 Muted 的点标签（小时、'24 Oct'、'18 Oct' 或月份），然后是行 'Used 27.1 kWh'、'Solar 9.0 kWh' 和 'Grid cost [CURRENCY_SYMBOL]5.07'。当 settings.showCost 关闭时隐藏成本行。
   布局：卡片在 lg 占 col-span-8，低于 lg 时全宽。卡片背景：Panel 加径向青柠色辉光。SVG 用 ResizeObserver 测量并以像素坐标绘制（不拉伸 viewBox）。桌面端高度 288px，移动端 220px。内边距：左侧 40 用于 y 标签，底部 26 用于 x 标签，顶部 16，右侧 8。Y 轴：4 个 niceTicks，从 0 到（max × 1.15）向上取整到整齐步长，虚线（2 4）Line 网格线横贯，标签为左侧等宽 11 Faint。X 标签等宽 11 Faint：Day 每 3 小时，Week 全部 7 个，Month 每 5 个，Year 桌面端全部 12 个、移动端每 2 个。悬停或触摸：吸附到最近索引，显示 1px Line-strong 十字准线，usage 上 5px Lime 圆点带 drop-shadow 0 0 12px rgba(198,255,61,0.6)，solar 上 4px Muted 圆点。工具提示位于十字准线右侧 12px，溢出时翻转到左侧。SVG 具有 tabIndex 0、role='img' 和一个总结总计的 aria-label。左右方向键移动十字准线，Escape 隐藏它。
   动效：首次视图：通过 stroke-dashoffset 绘制进入（1200ms），然后面积淡入。范围变化：通过线性插值将旧序列和新序列重采样为 96 个等距样本，在 700ms easeInOutCubic 内补间样本和 y 轴最大值，从样本绘制中间帧，然后切换到新序列的精确单调路径。Y 标签跟随补间的刻度。十字准线无缓动移动。
5. **实时负载仪表** — 标题 'Live load'，副标题 'Updated every 2 s'。中央：实时负载用 Space Grotesk 600 40px 的 .num（'2.04'）显示，'kW' 用 14px Muted，其下方是 '5 of 8 devices on'（12px Muted）。仪表下方是一个 3 列迷你统计行，用 1px Line 分隔线隔开。每个统计项有一个 11px Faint 的标签和一个 mono 13 的值：'From grid' 2.04 kW、'Solar now' 0.00 kW、'Rate now' [CURRENCY_SYMBOL]0.19/kWh，其下方有一个小的 Lime 'Off-peak' 标签。当实时负载 ≥ 5.0 kW（且 settings.peakGuard 开启）时：弧线和中央单位变为 Amber，卡片边框变为 rgba(255,181,71,0.4)，并且头部出现一个琥珀色 chip 'Above 5 kW peak guard'。
   布局：卡片在 lg 下为 col-span-4（位于用量图表旁边，高度相同），在 lg 以下为全宽。SVG viewBox 0 0 220 180 居中，max-width 260px。弧线以 (110,110) 为圆心，r 为 84，从 210° 到 −30° 扫过 240°，stroke 14，圆头端点。轨道为 Line，值弧线使用从 Lime deep 到 Lime 的线性渐变。刻度为 0–10 kW，弧线外侧有 11 个 1px Line-strong 小刻度，以及 mono 10 Faint 标签 '0'、'5' 和 '10'。值弧线末端有一个 6px Ink 居中的 lime 圆点，带 lime 投影光晕。
   动效：弧线长度和中央数字在每次实时 tick 和设备切换时以 600ms 补间。琥珀色状态以 200ms 交叉淡入淡出。
6. **分解条形图** — id='rooms'。标题 'Where it went'。副标题在 Rooms 模式下为 'Share of energy by room'，在 Hours 模式下为 'Average day by hour'。头部右侧：一个小型分段切换 'Rooms | Hours'。Rooms 模式：6 个条形按值降序排列，每个上方有一个 mono 12 值标签（'43.5 kWh'），下方是 12px Inter Muted 的房间名，以及 mono 11 Faint 的占比（'28%'）。最高的条形为 Lime，带 drop-shadow 0 0 16px rgba(198,255,61,0.35)。其余为 Line-strong，悬停时变为 rgba(198,255,61,0.55)。Tooltip：'Kitchen · 28% · 43.5 kWh · [CURRENCY_SYMBOL]12.18'。Hours 模式：24 个条形，在 16–19 时（峰值）为 Amber，在 23 时和 0–6 时（非峰值）为 rgba(198,255,61,0.45)，其余为 Line-strong。X 轴每 3 小时一个标签。图表下方是一个图例行，带 8px 色块：'Off-peak'、'Standard'、'Peak'。Tooltip：'18:00 · 2.29 kWh · Peak'。
   布局：卡片在 lg 下为 col-span-7，以下为全宽。切换控件高 28px，Panel 轨道，1px Line 边框，其激活段为 Raised，带 Line-strong 边框和 Text 颜色（无 lime）。图表高度桌面 260px，移动端 220px，用 ResizeObserver 测量。Rooms：槽宽 = 内部宽度 / 6，条宽 min(56px, 槽宽的 40%)，圆顶路径，6px 圆角。Hours：条宽为槽宽的 60%，3px 圆角。虚线基线为 Line。条形可聚焦（tabIndex 0），聚焦时显示 tooltip。
   动效：卡片首次进入视口 30% 时，条形以 40ms 错峰在 600ms 内生长出现。范围变化时高度以 500ms 补间。模式切换以 150ms 交叉淡入淡出，条形再次生长出现。
7. **设备** — id='devices'。标题 'Devices'，实时副标题 '5 of 8 on · 2.04 kW'。头部右侧：一个小型筛选切换 'All | On | Off'，样式与 Rooms/Hours 切换相同。行遵循数据文件中的设备表。每行有一个 36px Raised 图标块（开启时 Lime 图标，关闭时 Faint），设备名（14px 500）位于其房间（12px Muted）上方，文本下方有一个 4px 用量条，显示今日 kWh / 6.8（开启时 Lime，关闭时 Line-strong），其右侧为 mono 11 Faint 的 '6.8 kWh today'。右侧是 mono 13 的实时功率（'1,240 W'，或 Faint 的 'Off'；EV 充电器关闭时以 Amber mono 11 显示 'Scheduled 00:30'）和一个开关。开关：一个 40×24 按钮，role='switch'，aria-checked 和 aria-label 'Turn off Heat pump' / 'Turn on Oven'。开启时，轨道为 Lime，旋钮为 Ink。关闭时，轨道为 Line-strong，旋钮为 Muted。切换会更新副标题、侧边栏徽章、仪表、实时 pill 和迷你统计。开启一个使负载达到 5 kW 或以上的设备会显示 toast：'Live load is above 5 kW. Peak guard is watching.'
   布局：卡片在 lg 下为 col-span-5，以下为全宽。行高 64px，网格列 [36px_1fr_auto_auto]，12px 间距，行间 1px Line 分隔线。悬停行时背景为 60% 的 Raised。筛选器隐藏不匹配的行。移动端功率移到设备名下方，用量条横跨整行。
   动效：旋钮以 180ms 滑动。功率以 400ms 计数到新值。行闪烁 rgba(198,255,61,0.06) 600ms。实时功率每 2s 从抖动周期更新。
8. **电价时间线** — id='tariffs'。标题 'Today's tariff'，副标题 'Time-of-use rates in [CURRENCY_SYMBOL]/kWh'。头部 chip 'Off-peak now' 为 Lime，带 Lime 光晕。条带分段遵循电价时段，3 小时或以上的分段内显示标签：'Off-peak 0.19'、'Standard 0.28'、'Peak 0.41'。下方的小时刻度显示 '00 06 12 18 24'。23:52 处的当前时刻标记上方有一个 mono 11 Lime 标签 '23:52'。条带下方是两行提示，每行有一个 Raised 28px 块上的 Lime Lightbulb 图标和 13px 文本：'EV charger is scheduled for 00:30. Charging off-peak saves about [CURRENCY_SYMBOL]3.15 compared with the standard rate.' 和 'At 18:12 the oven, hob and heat pump overlapped during peak. Pre-heating the house before 16:00 would trim about 0.9 kW.'
   布局：卡片在 lg 下为 col-span-7。条带高 40px，圆角 10，overflow hidden，分段宽度与小时数成比例。Off-peak 分段使用 rgba(198,255,61,0.14) 配 Lime 文本，Standard 使用 Raised 配 Muted 文本，Peak 使用 rgba(255,181,71,0.16) 配 Amber 文本和 2px Amber 顶部边框。标签为 mono 11，居中。当前时刻标记是一条 2px Lime 线，在条带上下各延伸 6px，顶部有一个 8px Lime 圆点。提示行之间间隔 12px。移动端隐藏条带内标签，并在刻度下方显示一个带色块和费率的图例行。
   动效：当前时刻标记圆点循环 pulse-ring。卡片首次进入视口时，分段从左到右以 50ms 错峰淡入。
9. **活动** — 标题 'Activity'，副标题 'Today'。五条记录，最新在前（时间用 mono 12 Faint · 文本）：'23:31 · Washing machine started an off-peak cycle'、'21:05 · Night schedule lowered the heat pump to 19.5 °C'、'18:12 · Peak load reached 3.8 kW while the oven, hob and heat pump overlapped'（Amber 圆点）、'18:20 · Solar production ended — 8.1 kWh generated today' 和 '07:02 · Morning routine switched on the kitchen circuit'。保持此顺序不变。
   布局：卡片在 lg 下为 col-span-5（位于电价卡片旁边）。垂直时间线，48px 时间列，然后是一条 1px Line 垂直规则线，带 8px 圆点（Lime，警报为 Amber），以及 13px Text 条目，间距 16px。
   动效：卡片首次进入视口时，条目以 50ms 错峰淡入上移。
10. **页脚条** — 左侧：'[BRAND] demo dashboard · data is simulated · Last sync 23:52'。右侧：'v2.4.0'。
   布局：位于网格之后的主列内：24px 上边距，1px Line 顶部边框，padding 16px 0，12px Faint 文本，flex 两端对齐。移动端堆叠。
   动效：无。
11. **覆盖层：设置抽屉、移动端标签栏、更多面板、toast** — 设置抽屉：标题 'Display settings'，一个关闭 X 按钮，以及四行，每行有一个标签、一个 12px Muted 描述和相同的 Switch。'Animate charts'（默认开启；prefers-reduced-motion 时默认关闭）'Draw-ins, morphs and count-ups'。'Show solar line'（开启）'Overlay generation on the usage chart'。'Show cost in tooltips'（开启）'Adds grid cost to chart tooltips'。'Peak guard alerts'（开启）'Warn when live load passes 5 kW'。底部有一个轮廓按钮 'Reset demo data'，恢复默认范围、设备和设置。移动端标签栏：五项，图标位于 11px 标签上方，Overview、Usage、Rooms、Devices 和 More（Menu 图标）。更多面板：站点卡片、Tariffs 链接、Settings 按钮、目标卡片和用户行。Toast：Raised，1px Line-strong 边框，3px Amber 左边框，TriangleAlert 图标，13px 文本。
   布局：设置抽屉：固定右侧，桌面宽 380px，全高，Raised 背景，1px Line 左边框，padding 24px。覆盖层 rgba(0,0,0,0.5)。Esc 和点击覆盖层关闭，焦点被困在内部并返回触发元素。移动端变为底部面板，max-height 85vh，顶部圆角 16。标签栏（仅 <768px）：固定底部，高 64px 加安全区内边距，rgba(11,15,20,0.92) 带 blur 12px，1px Line 顶部边框，5 等列。激活项获得 Lime 图标和 Text 标签，非激活项为 Faint。更多面板是一个底部面板，样式与移动端设置面板相同。Toast：桌面固定右下 24px，移动端位于标签栏上方，max-width 340px，role='status'。
   动效：抽屉和面板以 280ms 滑入，覆盖层以 200ms 淡入，toast 使用 toast-in 并在 3000ms 后淡出。在 reduced motion 下它们立即出现。

## 资产
- 图标：通过 lucide-react 使用 Lucide（ISC）：Zap、Wallet、Activity、Sun、LayoutGrid、LineChart、BarChart3、Plug、Receipt、Settings、House、ChevronsUpDown、Check、Calendar、Bell、TriangleAlert、Clock、Lightbulb、MoreHorizontal、Menu、X、ArrowDownRight、ArrowUpRight、Thermometer、Refrigerator、WashingMachine、Monitor、Lamp、Tv、CookingPot、PlugZap。尺寸 16–18px，strokeWidth 1.75。如果已安装版本中缺少某个图标名称，请使用最接近的 Lucide 图标。
- 字体：通过 Fontsource npm 包自托管，并在 src/main.tsx 中导入：@fontsource-variable/inter、@fontsource-variable/space-grotesk 和 @fontsource/jetbrains-mono（400 和 500）。均为 OFL-1.1。
- 图像：不使用位图图像。标志图形、favicon（public/favicon.svg）、首字母头像、图表、迷你趋势图、仪表和电价条均为内联 SVG 或代码绘制的 CSS。ASSETS.md 列出了字体和图标包及其来源 URL 和许可证。

## 不要做
- 无后端：没有服务器代码、API 路由、数据库、认证、第三方 API 或任何会提交到某处的表单。所有数据都是本地的假数据，位于 src/data/energy.ts。
- 不使用图表或可视化库（Recharts、Chart.js、D3、Nivo、ECharts、ApexCharts、Victory），也不使用动画库。每个图表和补间动画都是手写的 SVG 和 requestAnimationFrame 代码。
- 除列出的技术栈外，不要添加依赖；除非用户要求，否则不要更改技术栈。
- 不使用 Tailwind Plus / Tailwind UI、Aceternity UI、ThemeForest 或购买的模板源码。
- 不使用真实的能源公司、公用事业、太阳能、智能家居或应用名称、标志或设备品牌。使用 [BRAND] 和给定的通用设备名称。
- 不复制现有能源应用中的文案、口号或指标措辞。只使用此处编写的文案，并改写以适配变量。
- 不使用现有仪表盘的品牌调色板。只使用列出的十六进制色值，保持 Lime 作为唯一强调色，Amber 仅用于峰值和警告。无浅色主题。
- 不使用人物照片，也不使用头像图片。头像仅为代码绘制的首字母。
- 不使用商业或自定义字体，也不从 fonts.googleapis.com、fonts.gstatic.com、Adobe Fonts 或任何 CDN 加载字体。字体仅来自 Fontsource 包。
- 不使用 CDN 的 <script> 或 <link> 标签，不热链接文件，不做分析或跟踪。
- 不使用 Math.random，也不使用系统时钟日期。每个数字和日期都固定在数据文件中，因此每次加载看起来都完全相同。
- 生产构建：压缩，无 source map，src/ 中的任何内容都不复制到 dist/，相对资源路径（base './'），dist/ 小于 20 MB。
- 内部导航使用页内哈希锚点（#usage、#rooms、#devices、#tariffs）或类似 ./index.html 的文件名，绝不使用裸目录链接。无死链。
- 在 1440×900 和 390×844 下零控制台错误且无水平页面滚动。
- 尊重 prefers-reduced-motion：禁用绘制入场、变形、交错、脉冲、滑动和平滑滚动。
- 无 SEO 附加项：无 meta 描述、Open Graph 标签、JSON-LD 或站点地图。仅保留 <title> 和 favicon。
- 站点中任何地方都不得提及 VibeFather，除非提示添加了可选的署名链接。

---
— Prompt by VibeFather · https://vibefather.ai/t/home-energy-dashboard · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
