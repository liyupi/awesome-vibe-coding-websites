> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 非营利组织捐赠页面

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的单页筹款活动网站，[BRAND] 是 [PLACE] 的一个小型志愿者团体，致力于 [CAUSE]。整体读起来像一篇纪实报纸特写：大号衬线标题、极细的分隔线、编号章节、超大号数字，以及暖色纸张背景上的线描 SVG 插画。真正承担说服工作的是交互组件：一个朝 [GOAL] 目标推进的动画捐款进度条、一个基于 [IMPACT_RATE] 的滑块式影响力计算器、一条与滚动联动的往季时间线、一个带客户端验证和票券式成功状态的志愿者报名表单，以及一个手风琴式 FAQ。一切都在浏览器中运行；不会向任何地方发送数据。

- 受众：本地居民、曾经参与过的志愿者和小额捐赠者，他们通过新闻邮件或分享链接找到这个页面，大多在手机上浏览，希望快速了解资金去向以及如何亲自参与帮助。
- 目标：让访客承诺捐款（影响力计算器中的 Donate 按钮）或报名参加清洁日（志愿者表单）。次要目标：分享页面。
- 语气：平实、温暖、基于事实，像一位优秀的本地记者。短句、具体数字，不用感叹号，不制造愧疚感，不用流行术语。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react (MIT)、react-dom (MIT)、motion (MIT)、lucide-react (ISC)、@fontsource-variable/fraunces (OFL-1.1)、@fontsource-variable/public-sans (OFL-1.1)、@fontsource/ibm-plex-mono (OFL-1.1)、tailwindcss (MIT)、postcss (MIT)、autoprefixer (MIT)、vite (MIT)、@vitejs/plugin-react (MIT)、typescript (Apache-2.0)
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置：
  - 使用 Vite react-ts 模板搭建脚手架；package.json 脚本：dev = vite，build = tsc -b && vite build，preview = vite preview。
  - vite.config.ts：plugins [react()]，base './'，build.outDir 'dist'，build.sourcemap false，build.assetsInlineLimit 0。
  - tailwind.config.js：content ['./index.html', './src/**/*.{ts,tsx}']；扩展颜色：paper #F4EFE6、paper-deep #EAE2D3、ink #1B2422、river #1F4E4A、river-light #6E9A93、silt #8A6E4B、rule #CFC4B1、signal #E2582B、error #A8321E；fontFamily：display ['Fraunces Variable', 'Georgia', 'serif']、sans ['Public Sans Variable', 'system-ui', 'sans-serif']、mono ['IBM Plex Mono', 'ui-monospace', 'monospace']；maxWidth：page 1200px。
  - src/main.tsx 在渲染 App 之前导入 '@fontsource-variable/fraunces'、'@fontsource-variable/public-sans'、'@fontsource/ibm-plex-mono/400.css'、'@fontsource/ibm-plex-mono/500.css' 和 './index.css'。
  - src/index.css 包含三个 Tailwind 层、body 默认值（bg paper、text ink、font sans、17px/1.6、antialiased）、html { scroll-behavior: smooth }、用于收尾横幅的 @keyframes water-drift、范围滑块样式，以及一个 @media (prefers-reduced-motion: reduce) 块，将 scroll-behavior 设为 auto 并禁用所有 CSS 动画。
  - src/content.ts 包含所有文案和所有数字：品牌、导航标签、首屏文案、已筹集金额（31620）、目标（48000）、捐赠者（214）、里程碑、账目数字、影响换算率（rateAmount 12，outputA { per: 1, unit: 'bag of litter', unitPlural: 'bags of litter', verb: 'removed' }，outputB { per: 2, unit: 'metre of riverbank', unitPlural: 'metres of riverbank', verb: 'cleared' }）、滑块设置、时间线条目、表单选项、FAQ 条目和页脚文本。组件只从中读取。
  - 组件位于 src/components/：SiteHeader、Hero、CampaignMeter、Ledger、ImpactCalculator、Dispatches、VolunteerForm、Faq、DonateBand、SiteFooter，以及共享的 SectionLabel、CountUp 和 Reveal。线稿位于 src/art/，为 React SVG 组件：RiverMap、WaveMark、BagGlyph、Vignette（variant prop）、CheckStamp、WaterLines。
  - App.tsx 持有一份共享状态 raisedTotal（初始值为 content.raised），传递给 CampaignMeter 和 ImpactCalculator，以便计算器中的承诺捐款会推动进度条。
  - 在每个动画组件中使用来自 'motion/react' 的 useReducedMotion()；当返回 true 时，直接渲染最终值和最终状态，不播放动画。
  - CountUp：使用 Motion 的 animate() 在 1.4s 内从 0 动画到目标值，缓动为 [0.22, 1, 0.36, 1]，由 useInView（amount 0.4）触发一次。它将最终格式化值以不可见方式堆叠在动画值下方（CSS grid，两者位于同一单元格），因此宽度永不抖动，并使用 font-variant-numeric: lining-nums tabular-nums。
  - index.html：<title>[BRAND] — Help us finish the clean-up</title>，<link rel='icon' href='./favicon.svg'>，lang='en'。public/favicon.svg 为 WaveMark：在 #F4EFE6 圆角方块上，三条堆叠的正弦线条，颜色为 #1F4E4A。
  - 在项目根目录添加 ASSETS.md，列出三个 Fontsource 包和 lucide-react，包含源 URL、作者和许可证，并声明所有插图均为代码中绘制的原创 SVG。

## 变量
- [BRAND] — 组织名称（默认：“Fernmouth River Crew”）。一个虚构的团体名称。用于页眉字标、主视觉文案、表单和页脚。
- [CAUSE] — 活动内容（默认：“clearing litter from the banks of the River Fern”）。一个简短短语，用于补全“a volunteer group …”。驱动主视觉、地图图形和时间线插图。
- [PLACE] — 城镇或地区（默认：“Ashby Vale”）。虚构地点，绝不将真实城镇作为活动的所在地呈现。
- [GOAL] — 筹款目标（默认：“$48,000”）。设定进度条目标和里程碑（25/50/75/100%）。
- [IMPACT_RATE] — 一单位金额所达成的效果（默认：“Every $12 removes 1 bag of litter and clears 2 metres of riverbank”）。一个价格和两项成果；计算器根据滑块金额计算两者。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接至 https://vibefather.ai/t/nonprofit-donation-page（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- Paper `#F4EFE6` — 页面背景、深色区块上的文字
- Paper Deep `#EAE2D3` — 进度条区块和志愿者区块背景、插画面板
- Ink `#1B2422` — 正文文字、标题、结尾区块和页脚背景
- River `#1F4E4A` — 影响力计算器区块背景、首字下沉、河流线条、表单提交按钮、链接
- River Light `#6E9A93` — 等高线、暗角线条、未达成的时间线圆点
- Silt `#8A6E4B` — 图注、区块编号、时间线数字、未达成的里程碑标签
- Rule `#CFC4B1` — 1px 细线、进度条轨道、输入框边框
- Signal `#E2582B` — 仅用于捐赠按钮、进度条填充、滑块填充和地图站点圆点
- Error `#A8321E` — 表单错误文字和无效字段边框

### 字体排印（Typography）
- Display（标题、大数字、FAQ 问题）：Fraunces Variable（OFL），字重 400/600/800
- Text（正文、表单字段、按钮）：Public Sans Variable（OFL），字重 400/500/600
- Mono（图注、区块编号、导航、标签）：IBM Plex Mono（OFL），字重 400/500

### 布局与动效（Layout & motion）
- 间距：1200px 最大宽度容器内的 12 列网格，24px 列间距；侧边内边距桌面端 40px、移动端 20px。区块之间在桌面端以 128px 垂直内边距分隔，移动端为 80px。每个区块以 SectionLabel 开头：mono 12px 大写，letter-spacing 0.14em，Silt 色，例如 “01 — The record so far”，随后是一条全宽 1px Rule 细线，标题前留 32px 间距。区块标题为 Fraunces 600，clamp(32px, 4vw, 52px)，line-height 1.05，letter-spacing -0.015em。正文栏宽不超过 62ch。
- 圆角：方形编辑风格边缘：面板、卡片、进度条轨道和图片为 0；按钮、输入框和标签为 2px；仅滑块拇指、时间线圆点和地图圆点使用完整圆形。
- 动效：默认缓动为 [0.22, 1, 0.36, 1]。显现：元素在进入视口 30% 时从 opacity 0 和 y 16px 过渡到 0，持续 0.6s，仅触发一次；同级元素错开 0.08s。
- 动效：大数字使用 CountUp 计数一次（1.4s）；进度条填充在进入视口 40% 时从 0 增长到其百分比，持续 1.8s，并在 raisedTotal 变化时平滑重新动画（0.6s）。
- 动效：SVG 线条绘制通过 Motion pathLength 从 0 到 1 自行绘制（河流地图 1.6s，暗角 1.2s，对勾印章 0.5s）。
- 动效：时间线的垂直进度线随滚动联动：对 Dispatches 区块使用 useScroll（offset ['start 60%', 'end 60%']），驱动一条 River 色线条的 scaleY 从 0 到 1，transform-origin 为 top。
- 动效：悬停：按钮在 150ms 内变暗 8% 并上移 1px；文本链接在 200ms 内将下划线从 0 动画到 100% 宽度。
- 动效：在 prefers-reduced-motion 下：无显现、计数、路径绘制、滚动联动线条或水波漂移；所有内容以最终状态渲染，平滑滚动关闭。
- 图像：不使用照片。所有图像均为 SVG 组件绘制的原创线条艺术：一段河流的等高线地图、时间线的六个小暗角、计算器的袋子图标、一个对勾印章，以及漂移的水线。描边为 1.5px，圆头端点，River Light 或 River 色，置于 Paper Deep 面板上，每幅图配 mono 图注（“Fig. 1 — …”）。不出现人物、面孔、有性格的动物或真实地点。

## 页面与区块
### 活动页（`index.html`）
1. **站点页眉** — 字标：WaveMark SVG（三条堆叠的 2px 正弦描边，宽 22px，River 色），后接 Fraunces 600 斜体 20px 的“Fernmouth River Crew”。导航链接：“The river”（#top）、“Impact”（#impact）、“Dispatches”（#dispatches）、“Volunteer”（#volunteer）、“FAQ”（#faq）。右侧按钮：“Donate”，链接至 #impact。
   布局：粘性顶栏，高 64px，Paper 背景 92% 不透明度，backdrop-blur 8px，底部 1px Rule 边框。字标居左；导航链接居中，等宽字体 12px 大写，letter-spacing 0.12em，Ink 70%，当前视口内区块的链接变为 Ink 100% 并带 1px 下划线（IntersectionObserver）；Donate 按钮居右：Signal 背景，Paper 文字，Public Sans 600 14px，padding 10px 18px，radius 2px。低于 1024px 时导航链接隐藏，Donate 左侧出现一个 Lucide Menu 图标按钮（44px 点击区域）；它切换页眉下方的全宽面板（Paper，底部 Rule 边框），以 Fraunces 28px 列出五个链接，之间用 1px 细线分隔，点击链接或按 Escape 关闭；图标切换为 X。
   动效：移动端面板以高度 0 到 auto 及不透明度展开，历时 0.3s。页内链接平滑滚动，每个区块设 72px scroll-margin-top。
2. **首屏** — 标题上方说明文字：“Spring campaign · Year 7 · Ashby Vale”。标题（三行）：“Give the River Fern / its banks / back.” 导语：“Fernmouth River Crew is a group of 312 neighbours clearing litter from 4.2 kilometres of the River Fern. Six springs in, 2.6 km is clear. This year we need $48,000 to finish the last 1.6 km.” 主按钮：“Donate to the clean-up”（至 #impact）。次级链接：“Join a clean-up day”，带 Lucide ArrowRight 16px（至 #volunteer）。地图下方图注：“Fig. 1 — The 4.2 km stretch through Ashby Vale. Orange marks the six clean-up sites so far; the dashed line is still to do.”
   布局：id='top'。从页眉下方 56px 处开始。一条 1px Ink 线横跨容器顶部，然后是等宽说明行（12px 大写，Silt），下方 1px Rule，间距 48px。桌面 12 列网格：第 1–7 列放标题（Fraunces 800，clamp(52px, 7.4vw, 116px)，line-height 0.94，letter-spacing -0.025em，Ink；“back.”一词为 Fraunces 400 斜体），然后是导语（Public Sans 400，20px/1.55，Ink 85%，最大 46ch，标题下方 32px）和操作行，位于下方 40px（主按钮高 52px，Signal，Paper 文字，600 16px，padding 0 24px，radius 2px；次级为带下划线的 River 文字链接，间距 24px）。第 9–12 列放 RiverMap 图：一个 Paper Deep 面板，4:5 宽高比，1px Rule 边框，内含 9 条 River Light 波浪等高线路径（1px），一条 6px 粗 River 路径自上而下蜿蜒代表河流，一条 2px 虚线 Ink 路径沿下三分之一标记未完成河段，六个 10px Signal 圆点旁配等宽 10px 数字 1–6，一个小指北针和 1 km 比例尺，均为等宽 10px；图注位于面板下方，等宽 12px Silt。移动端：单列，标题 clamp 为 52px，地图面板全宽 4:3，位于操作行下方。
   动效：标题各行从 y 28px 上升并淡入，错开 0.08s，每行 0.7s。导语和操作行随后以 Reveal 出现。地图中，等高线淡入（0.6s），河流路径通过 pathLength 绘制，历时 1.6s，然后六个圆点从 0 缩放到 1，错开 0.1s，最后虚线路径淡入。
3. **活动进度条** — 标签：“Raised so far”。大数字：“$31,620”（raisedTotal）。其下：“of $48,000 goal · 66%”。右侧事实：“214 donors”和“3 clean-up days to go”。轨道上的里程碑：25% “$12k · Gloves and grabbers”，50% “$24k · Skip hire for the season”，75% “$36k · Willow and sedge for the bank”，100% “$48k · The final 1.6 km”。
   布局：id='meter'。全出血条带，Paper Deep 背景，上下 1px Rule 边框，padding 桌面 64px / 移动 48px，内容在容器内。顶行，桌面：左侧等宽标签（12px 大写 Silt）、大数字（Fraunces 800，clamp(56px, 7vw, 96px)，Ink，通过 CountUp 使用等宽数字）和目标行（Public Sans 500 18px，Ink 75%；百分比取 Math.round(raisedTotal / goal * 100)）；右侧底部对齐，两个堆叠事实以细线分隔，每个含 Fraunces 600 32px 数字和等宽 12px 标签。然后 40px 间距和进度条：一条 14px 高的 Rule 轨道横跨容器，Signal 填充从左侧开始，方形端点，上限 100%。四个里程碑刻度位于 25/50/75/100%：一条 1px Ink 线高出轨道 10px，上方等宽 11px 标签（第 1 行为数值，第 2 行为描述），raisedTotal 已超过时为 Ink，否则为 Silt 70%；100% 刻度带一个小 8px Signal 三角旗。低于 768px 时，里程碑描述从轨道隐藏（仅保留数值），并在下方以 2×2 列表出现，每项带一个 10px 方形标记，已达成为 Signal 填充，未达成为 Rule 描边。
   动效：进入视口时，填充从 0 增长到 66%，历时 1.8s，同时大数字同步计数；之后 raisedTotal 增加时，填充和数字在 0.6s 内动画到新值，任何新达成的里程碑其标签闪烁为 Signal，持续 0.8s。
4. **账本（大数字）** — SectionLabel：“01 — The record so far”。标题：“Six springs on the Fern, counted.” 段落（带首字下沉）：“We started with nine people, borrowed gloves and a length of rope. Every clean-up since has been weighed on the bank and written down. These are the totals, and they are the reason we think the last stretch is within reach.” 数字：“11,480 kg” — “of litter lifted from the water and the banks”；“1,904” — “bags hauled to recycling or landfill”；“312” — “neighbours on the volunteer register”；“2.6 km” — “of riverbank cleared out of 4.2 km”。
   布局：id='record'。SectionLabel 和标题，然后 12 列网格，顶部间距 48px：第 1–4 列放段落（Public Sans 400 18px/1.65），首字母为 Fraunces 800 首字下沉，River 色，跨 3 行（左浮动，字号 4.2em，line-height 0.8，右边距 8px）。第 6–12 列放 2×2 数字网格，以 1px Rule 细线分隔（一竖一横，无外边框）；每格 padding 32px，数字为 Fraunces 800 clamp(44px, 5vw, 72px) Ink，单位（“kg”、“km”）为 Fraunces 400，45% 大小，标签为等宽 12px 大写 Silt，最大 24ch。移动端：段落在前，然后全宽 2×2 网格，数字大小 40px。
   动效：段落使用 Reveal。每个数字用 CountUp 计数（2.6 km 保留小数）；单元格错开 0.1s。
5. **影响计算器** — SectionLabel：“02 — What your gift does”。标题：“Slide to see what your money moves.” 说明：“Based on last spring’s costs: every $12 removes 1 bag of litter and clears 2 metres of riverbank.” 金额显示：“$60”（当前值）。预设选项：“$25”、“$60”、“$120”、“$250”。输出（默认 $60）：“5” “bags of litter removed”和“10” “metres of riverbank cleared”。捐赠按钮：“Donate $60”（金额实时更新）。承诺后，内联确认：“Thank you. $60 has been added to the meter. This is a demo page, so no payment was taken.”，带“Back to the meter”链接至 #meter。
   布局：id='impact'。全出血条带，River 背景，Paper 文字；SectionLabel、细线和说明使用 Paper 65%，细线为 Paper 20%。桌面 12 列网格：第 1–5 列放标签、标题（Paper）和说明（Public Sans 17px，最大 36ch）。第 7–12 列放计算器面板：1px 边框 Paper 25%，padding 40px，无填充。内部自上而下：等宽标签“Your gift”；金额为 Fraunces 800 96px Paper，等宽数字；一个范围输入（min 5，max 500，step 5，默认 60，aria-label “Donation amount in dollars”），样式为 4px 轨道 Paper 25%，滑块左侧填充部分为 Signal（CSS background linear-gradient 由 --fill 自定义属性驱动），24px 圆形 Paper 滑块带 3px Signal 环和 3px Paper focus-visible 轮廓偏移 3px；轨道下方等宽 11px “$5”居左和“$500”居右。然后一行四个预设选项（等宽 13px，高 36px，1px Paper 35% 边框，radius 2px；等于当前金额的选项获得 Signal 边框和 Signal 文字）。然后两个输出块并排，以垂直 Paper 20% 细线分隔：A 显示袋子数 = Math.floor(amount / 12)，Fraunces 600 56px 加标签，下方一行可换行的 BagGlyph 图标（16px 线绘袋子，Paper 色），每袋一个，最多 24 个，更多时后跟等宽“+N”；B 显示米数 = Math.floor(amount / 12) * 2 及其标签，下方一条 100% 宽的水平标尺（1px Paper 40% 线，每 10% 一个刻度），其 Signal 条宽度为 min(metres / 100, 1)，以及等宽说明“of a 100 m stretch”。最后一行：捐赠按钮全宽，56px，Signal 背景，Paper 文字，600 17px。点击后向 App 状态中的 raisedTotal 添加金额，并将按钮行替换为确认文字（Public Sans 16px Paper）带 Lucide Check 图标；之后更改金额会恢复按钮。移动端：单列，面板 padding 24px，金额 72px，输出块堆叠，之间以水平细线分隔。
   动效：金额数字弹跳到每个新值（Motion animate，0.35s）。增加时添加的袋子图标从 scale 0.6 和不透明度 0 弹出，错开 0.02s；移除的图标在 0.15s 内淡出。标尺条宽度过渡 0.4s。确认文字淡入并上升 8px，历时 0.3s。
6. **快讯（时间线）** — SectionLabel：“03 — Dispatches from the bank”。标题：“Six springs, one stretch at a time.” 六个条目，每个含标记、序号、标题、正文、统计行和图注：
Year 1 · 01 · “One trolley and a length of rope” — “Nine of us met at the Mill Lane footbridge with borrowed gloves. By noon we had pulled a shopping trolley, four tyres and thirty bags out of the shallows.” 统计：“620 kg · 9 volunteers · 300 m”。小图：手推车。图注：“Fig. 2 — The first find.”
Year 2 · 02 · “Under the footbridge” — “Litter collects in the slack water below the bridge. The council agreed to collect large finds if we stacked them by the lane, so we did.” 统计：“1,140 kg · 68 volunteers · 350 m”。小图：人行桥。图注：“Fig. 3 — Mill Lane footbridge.”
Year 3 · 03 · “Sorting on the bank” — “We began sorting everything on site into metal, plastics and the rest. Almost half of what we lifted went to recycling instead of landfill.” 统计：“1,860 kg · 104 volunteers · 400 m”。小图：板条箱。图注：“Fig. 4 — Three crates, three streams.”
Year 4 · 04 · “The weir pool” — “The weir traps whatever the river carries down. Two trained crew in waders worked the pool while sixty people sorted on the bank.” 统计：“2,210 kg · 156 volunteers · 450 m”。小图：堰。图注：“Fig. 5 — The weir at low water.”
Year 5 · 05 · “The reeds came back” — “On the first stretches we cleared, sedge and reed beds returned without any planting. We counted herons on four of our six visits.” 统计：“2,450 kg · 221 volunteers · 500 m”。小图：芦苇。图注：“Fig. 6 — New reed beds, east bank.”
Year 6 · 06 · “Planting the bank” — “We planted 400 native willow whips to hold the bank where litter used to pile up. Most of them have taken.” 统计：“3,200 kg · 312 volunteers · 600 m”。小图：柳树。图注：“Fig. 7 — Willow whips, first summer.”
   布局：id='dispatches'。SectionLabel 和标题，然后列表，条目间距 64px。桌面：一条垂直 1px Rule 线贯穿列表全高，位于网格第 3 和第 4 列交界处，其上叠加滚动联动的 River 进度线。每个条目为 12 列行：第 1–2 列右对齐，标记“Year 1”（等宽 12px 大写 Silt）在序号“01”（Fraunces 400 64px Silt，等宽数字）上方。线上有一个 13px 圆点：条目进入视口前为 Paper 填充带 1px River Light 边框，之后为 River 填充。第 4–8 列放标题（Fraunces 600 28px/1.15 Ink）、正文（Public Sans 17px/1.6，Ink 85%，下方 16px）和统计行（等宽 12px，Silt，下方 16px，数值以中点分隔）。第 9–12 列放 Vignette：一个 Paper Deep 面板，4:3，1px Rule 边框，内含变体线描（1.5px River Light 描边，River 点缀，每个约 12–20 条路径：手推车 = 波浪水线中倾斜的带轮铁丝篮；人行桥 = 水线上方带栏杆的浅拱；板条箱 = 三个不同高度的敞口箱；堰 = 阶梯状水平带与落水描边；芦苇 = 成簇的高大弯曲茎秆，一侧有站立苍鹭轮廓；柳树 = 斜坡上一排五棵细树苗，带绑带和支柱），及其下方等宽 11px 图注。移动端：线移至距左边缘 7px，条目左 padding 32px，标记和序号内联（“Year 1 · 01”）在标题上方，小图全宽位于统计下方。
   动效：滚动联动进度线如设计所述。每个条目在 30% 进入视口时使用 Reveal；其圆点在 0.3s 内填充 River；其小图路径通过 pathLength 绘制，历时 1.2s，每条路径错开 0.03s。
7. **志愿者报名** — SectionLabel：“04 — Volunteer”。标题：“Bring boots. We’ll bring the rest.” 段落：“Three Saturday mornings this spring, each on a different part of the last 1.6 km. Gloves, grabbers, bags and tea are provided. You don’t need any experience; a crew lead will show you what to do.” 事实列表带 Lucide 图标（18px，River）：Clock “Saturdays, 9:00 to 12:30”；MapPin “Meet at the Mill Lane Boathouse”；Footprints “Wear boots you don’t mind getting muddy”；Users “Crews of eight, each with a trained lead”。表单标题：“Put me on the register”。字段：“Full name”（必填）；“Email”（必填）；“Phone (optional)”；“Which day?” 单选卡片（必填）：“Day 1 — Mill Lane to the weir”、“Day 2 — The weir to Carter’s Meadow”、“Day 3 — Carter’s Meadow to the river mouth”；“I can help with” 复选框（可选）：“Hauling bags”、“Sorting on the bank”、“Tea and first aid”、“Taking photos”；“Anything we should know?” 文本域（可选，最多 300 字符，计数器“0 / 300”）；同意复选框（必填）：“I’m 16 or over, or I’ll come with a parent or guardian.” 提交：“Put me on the register”。错误消息：“Please enter your name.”、“Please enter a valid email address.”、“Please enter a phone number with at least 7 digits, or leave it blank.”、“Please choose a day.”、“Please confirm this to sign up.” 成功票券：印章标题“You’re on the register, {first name}.”，行“Volunteer No. 313”、“Day: {chosen day}”、“Meet: Mill Lane Boathouse, 9:00”、“Bring: boots, water, a warm layer”；脚注“Demo form: your details stay in this browser tab and are not sent anywhere.”；按钮“Sign up someone else”。
   布局：id='volunteer'。全出血 Paper Deep 条带。桌面 12 列网格：第 1–5 列放 SectionLabel、标题、段落和事实列表（每行图标 + Public Sans 16px，行间距 14px，行间 1px Rule 细线）。第 7–12 列放表单卡片：Paper 背景，1px Rule 边框，padding 40px，radius 0，等宽 12px 大写表单标题，下方细线。字段堆叠，间距 22px；标签 Public Sans 600 14px Ink，“(optional)”为 Silt 400；输入框高 48px，Paper 背景，1px Rule 边框，radius 2px，16px 文字，padding 0 14px；聚焦状态 2px River 边框，无光晕。三个日期选项为全宽单选卡片（1px Rule 边框，14px padding，自定义 18px 圆形指示器；选中卡片获得 2px River 边框和 Paper Deep 填充）。复选框位于 2×2 网格，18px 方形自定义框（选中：River 填充带 Paper Lucide Check 14px）。文本域 4 行，计数器右对齐，等宽 11px 在下方（达到 300 时变为 Error）。提交按钮全宽 52px，River 背景，Paper 文字，Public Sans 600 16px，radius 2px。仅在浏览器内验证，表单使用 noValidate：每个字段在失焦时验证，提交时再次验证；email 匹配 /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/；phone 若填写，去除非数字后需至少 7 位；name 需 2 个以上修剪后字符。无效字段获得 1px Error 边框、aria-invalid='true' 和 aria-describedby 指向字段下方错误行（等宽 12px Error 带 Lucide CircleAlert 14px）。提交有错误时，焦点移至第一个无效字段。有效提交时，按钮显示旋转的 Lucide LoaderCircle 和“Adding you…”，持续 900ms（setTimeout，无网络），然后卡片内容替换为成功票券：Paper 卡片，距顶部 72px 处 2px 虚线 Rule 穿孔线，标题上方 64px CheckStamp（River 圆带 Paper 对勾）（Fraunces 600 32px），票券行作为两列等宽 13px 表格带细线，脚注 Public Sans 13px Silt，“Sign up someone else”为描边 River 按钮，重置表单并将焦点返回姓名字段。移动端：单列，表单卡片 padding 24px，复选框单列。
   动效：错误行从高度 0 滑下，历时 0.2s。表单到票券的切换使用 AnimatePresence：表单淡出（0.2s），票券淡入并上升 12px（0.4s），同时 CheckStamp 圆和对勾通过 pathLength 绘制（0.5s）。
8. **FAQ** — SectionLabel：“05 — Questions”。标题：“Questions, answered plainly.” 侧注：“Still unsure? Write to crew@fernmouth.example and a person will reply within two days.” 条目：
“Where does my money go?” — “Skip hire and landfill fees take 41%, bank replanting with native willow and sedge 27%, safety kit and grabbers 22%, and insurance and first-aid training 10%. We post the receipts after every clean-up day.”
“Is it safe to volunteer near the water?” — “Volunteers stay on the bank. Only trained crew in waders go into the shallows, never above knee depth, and every site has a life ring, a first-aid kit and a lead who has done the training.”
“Can I bring children?” — “Yes, from age 8 with an adult. Under-16s work on the bank and help with sorting.”
“What happens to the litter we collect?” — “We sort it on the bank. Metal and hard plastics go to recycling, the rest goes to licensed landfill, and large finds like trolleys and tyres are collected separately.”
“Do I have to come to every clean-up?” — “No. Most people come once or twice a season. Sign up for one day and see how it feels.”
“Can a local business sponsor a stretch?” — “Yes. Adopting 100 metres costs $600 and puts your name on the marker post for that stretch. Write to us and we’ll send the details.”
   布局：id='faq'。桌面 12 列网格：第 1–4 列放 SectionLabel、标题和侧注（Public Sans 16px，Ink 75%，邮箱为带下划线的 River 链接，mailto: href）。第 6–12 列放手风琴：顶部 1px Ink 线，然后每个条目为全宽按钮行（最小 72px，垂直 padding 20px），问题在左，Fraunces 400 22px/1.3 Ink，右侧 Lucide Plus 20px 图标；行间以 1px Rule 细线分隔。答案面板位于问题下方，Public Sans 17px/1.65，Ink 85%，最大 60ch，padding-bottom 24px。一次仅打开一项；加载时第一项打开。按钮带 aria-expanded 和 aria-controls；面板有 role='region' 和 aria-labelledby。移动端：单列，问题 20px。
   动效：打开时面板从高度 0 到 auto 及不透明度动画，历时 0.3s（AnimatePresence），Plus 图标旋转 45° 变为叉号，历时 0.2s；关闭时反向。
9. **结尾捐赠条带** — 等宽说明：“The last stretch”。标题：“The last 1.6 km is the hardest. Help us finish it.” 行：“$16,380 to go. Every gift is weighed against the same costs as the calculator above.”（待筹金额为目标减去 raisedTotal，不低于 $0）。主按钮：“Donate to the clean-up”（至 #impact）。次级按钮：“Share this page”带 Lucide Copy 图标；点击时在 try/catch 内用 navigator.clipboard.writeText 复制 window.location.href，并将标签改为“Link copied”带 Lucide Check，持续 2s（失败时：“Copy failed — use your browser’s share menu”）。
   布局：全出血 Ink 条带，Paper 文字，padding 桌面 120px / 移动 80px，overflow hidden。内容后方，WaterLines SVG 横跨下半部分全宽：三条水平正弦路径（River 45%，1.5px 描边，1200px 波长，不同振幅）绘制为视口宽度的两倍，以便漂移。内容居中，最大 820px：等宽说明（12px 大写 Paper 60%），标题 Fraunces 800 clamp(40px, 6vw, 84px)/1.0 Paper，“Help us finish it.”为 Fraunces 400 斜体单独一行，行文字 Public Sans 18px Paper 75%，然后按钮居中，下方 40px，间距 16px：主按钮 Signal 背景，Paper 文字，高 52px；次级 52px，透明带 1px Paper 40% 边框和 Paper 文字。移动端：按钮堆叠全宽。
   动效：每条水线使用 CSS water-drift 关键帧（translateX 0 到 -50%）水平无缝循环，时长 28s、36s 和 44s，linear，infinite；减少动效下禁用。标题使用 Reveal。
10. **页脚** — 字标和行：“A volunteer crew looking after 4.2 km of the River Fern.” 列“Visit”：“Mill Lane Boathouse”、“Ashby Vale”。列“Contact”：“crew@fernmouth.example”。列“Read”：“Spring newsletter”、“Field notes”、“Receipts and accounts”（文字链接至 #top）。底行：“© Fernmouth River Crew · An unincorporated community group”，若保留 [CREDIT]，右侧为“Template by VibeFather”链接。
   布局：延续 Ink 背景，容器内顶部 1px Paper 15% 线，padding 顶部 64px / 底部 40px。桌面 12 列网格：第 1–5 列字标（WaveMark 为 Paper 加名称 Fraunces 600 斜体 22px Paper）和行文字 Public Sans 15px Paper 65%；第 7–8、9–10、11–12 列各放列标题等宽 11px 大写 Paper 50% 和条目 Public Sans 15px Paper 80%，间距 10px。底行位于下方 48px，顶部 1px Paper 15% 线，等宽 11px Paper 50% 文字，左右对齐。无社交媒体图标或徽标。移动端：字标块，然后三列在 2 列网格中，然后底行堆叠。
   动效：除链接下划线悬停外无。

## 资产
- 图片：所有插图均为 src/art/ 目录下用代码绘制的原创内联 SVG React 组件：RiverMap（带河流路径的等高线地图、虚线未完成河段、六个编号圆点、指北针、比例尺）、Vignette（六种变体：手推车、人行桥、木箱、拦河堰、带苍鹭轮廓的芦苇、柳树）、BagGlyph、CheckStamp、WaveMark 和 WaterLines。无位图图像、无照片、无图库或占位符服务。
- 图片：public/favicon.svg：WaveMark（三条堆叠的正弦笔画，#1F4E4A）置于 #F4EFE6 圆角方块上，用 SVG 手工绘制。
- 图标：lucide-react（ISC），按图标逐个导入：Menu、X、ArrowRight、Check、Plus、Clock、MapPin、Footprints、Users、CircleAlert、LoaderCircle、Copy。1.75px 描边，尺寸按各区块所述设置。
- 字体：通过 Fontsource npm 包自托管，在 src/main.tsx 中导入：@fontsource-variable/fraunces、@fontsource-variable/public-sans、@fontsource/ibm-plex-mono（400 和 500）。均为 OFL-1.1。在 ASSETS.md 中列出它们，附来源 URL、作者和许可证。

## 禁止事项
- 无后端：无服务器代码、API 路由、数据库、认证、支付 SDK 或第三方 API。志愿者表单和 Donate 按钮从不向任何地方发送数据；它们只改变页面内的状态。
- 不使用真实支付服务商的按钮、标识或文案（不得出现 PayPal、Stripe、Apple Pay 或银行卡标记）。Donate 按钮是普通样式的按钮。
- 不使用真实河流、水源或清洁慈善组织的名称、标识或口号，也不得将真实河流、城镇或地标呈现为活动的所在地。所有名称、地点、人物和数字均为虚构。
- 任何地方不得出现人物照片和面孔；不得使用图库照片、占位图服务、外链热链文件。
- 不得将虚构的总额、统计数据或引语呈现为关于任何真实组织的现实事实。
- 字体仅通过 Fontsource 自托管。绝不从 fonts.googleapis.com、fonts.gstatic.com 或任何 CDN 加载字体，也不得使用商业字体或报纸报头字体。
- 不使用 CDN 的 <script> 或 <link> 标签，不使用分析工具、跟踪像素、外部嵌入（地图、视频、社交组件）。
- Signal 橙色仅用于捐赠操作、进度条填充、滑块填充和地图圆点。不得添加其他强调色、渐变、玻璃拟态或投影。
- 保持方形编辑风格：不使用圆角卡片、胶囊按钮或 emoji。
- 生产构建必须压缩且无 source map，仅输出到 dist/，使用相对资源路径（Vite base './'），且不得将 src/ 文件复制到 dist/。保持 dist/ 在 20 MB 以下。
- 这是单页：内部链接为页内锚点（#impact、#volunteer……）或指向 ./index.html，绝不指向裸目录。
- 不得更改技术栈或添加所列之外的库。
- 无 SEO 附加项：无 meta 描述、Open Graph 标签、JSON-LD 或站点地图。仅保留普通的 <title> 和 favicon。
- 必须在 1440×900 和 390×844 下正常工作，控制台零错误，控件可通过键盘访问且焦点可见，并完全尊重 prefers-reduced-motion。
- 除可选的 [CREDIT] 页脚链接外，网站中任何地方不得提及 VibeFather。

---
— Prompt by VibeFather · https://vibefather.ai/t/nonprofit-donation-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
