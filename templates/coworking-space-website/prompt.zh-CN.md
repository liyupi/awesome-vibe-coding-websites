> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 联合办公空间网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [SPACE] 打造的单页网站，[SPACE] 是位于 [CITY] 的一家 [DESKS] 桌位联合办公空间——[VIBE]。网站必须如实呈现这个空间：一张可交互的楼层地图，标注各区域的可用情况（示例状态）、三档会员方案、配套设施、支持客户端 RSVP 的社区活动、一条如实说明噪音情况的横条，以及一个会带上地图所选区域的参观预约表单。单页：index.html，包含各区块（#map、#plans、#amenities、#events、#tour）。一切都在浏览器中运行；不会向任何地方提交数据。

- 受众：正在物色桌位的自由职业者和小型团队：逃离家里的远程工作者、两人的初创团队、兼职做副业项目的人。他们想感受空间的噪音水平、看到真实定价，并在无需经历繁琐邮件流程的情况下预约参观。
- 目标：预约参观。访客在十秒内看到空间、起价和地图；在两分钟内，他们已经悬停过地图、选好了方案并选定了参观日期。
- 语气：温暖而就事论事，像社区经理的欢迎邮件。真实的数字（桌位、营业时间、价格）、坦诚的噪音说明、一个关于打印机的玩笑。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（MIT）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/sora（OFL-1.1）、@fontsource-variable/albert-sans（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 react-ts 模板通过 npm create vite@latest 脚手架创建。项目根目录下有一个 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist'，sourcemap false，assetsInlineLimit 0 }。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的每个颜色添加到 theme.extend.colors 中，使用 kebab-case 键名（offwhite、linen、card、walnut、bark、coral、coral-deep、sage、rule），并设置 fontFamily display ['Sora Variable', 'system-ui', 'sans-serif']、sans ['Albert Sans Variable', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 12px，并添加 maxWidth { container: '1200px' }。
  - 在 src/fonts.ts 中导入 '@fontsource-variable/sora' 和 '@fontsource-variable/albert-sans'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（每个字符串、方案、设施、活动、区域、可用性种子、价格和图片路径，均带类型），src/lib/brand.ts（spaceSlug = [SPACE] 转为小写，并将每一段非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 spaceSlug + '.com'），src/lib/storage.ts（安全的 localStorage 读写，包裹在 try/catch 中，键前缀为 spaceSlug + ':'），src/lib/floorplan.ts（带几何 id 的区域列表、跨刷新稳定的种子可用性计数、takenZones(zoneId) 确定性列表）。
  - 状态：src/store/tour.ts 是一个小型外部存储（useSyncExternalStore），持有 { zoneId, name, email, day, rsvps: string[] }，持久化到 localStorage 键 spaceSlug + ':tour'。在地图上选择区域会写入 zoneId；参观表单和 RSVP 从中读取。
  - 组件位于 src/components/：Header.tsx、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、Footer.tsx；Hero.tsx、FloorMap.tsx（MapZone.tsx、ZoneTip.tsx）、Plans.tsx（PlanCard.tsx）、Amenities.tsx、Events.tsx（EventCard.tsx、RsvpButton.tsx）、NoiseStrip.tsx、TourForm.tsx（DayChips.tsx、Confirmed.tsx）。src/pages/Home.tsx 组合它们。
  - 在首次构建之前，使用 curl -L -o 将资源（Assets）下列出的每张图片下载到 public/images/ 中，使用给定的确切文件名。构建本身从不获取任何内容。
  - public/favicon.svg 如资源（Assets）下所述。index.html：lang en，<meta name='theme-color' content='#F8F6F1'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[SPACE] — Coworking in [CITY]</title>。
  - 在项目根目录下按资源（Assets）下所述编写 ASSETS.md。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张图片。保持在 10 MB 以下。

## 变量
- [SPACE] — 空间名称（默认：“The Print Works”）。虚构的联合办公空间名称。用于字标、标题、页脚、电子邮件（hello@ + 不含连字符的 spaceSlug + .com）以及 localStorage 键。绝不是真实的空间或品牌。
- [CITY] — 城市（默认：“Philadelphia, Pennsylvania”）。空间所在的城市。用于主视觉区、活动的街区行以及页脚。真实城市可以；街道是虚构的。
- [DESKS] — 工位数量（默认：“40”）。工位总数，以数字表示。驱动主视觉区的信息条、地图的区域容量以及方案的可用性行。保持在 15–80 之间。
- [VIBE] — 氛围短语（默认：“warm, plant-heavy and quietly busy”）。一个描述氛围的小写短语。驱动主视觉区的文案行、噪音信息条的坦诚表达以及参观表单的安抚语。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/coworking-space-website（默认：是；删除此行即可移除）

“页面与区块”下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 米白（Offwhite）`#F8F6F1` — 全站页面背景。
- 亚麻色（Linen）`#EFEAE0` — 交替区块背景（设施、活动）、悬停填充、标签。
- 卡片白（Card）`#FFFFFF` — 方案卡片、活动卡片、参观面板、确认信息。
- 胡桃木色（Walnut）`#3E3227` — 主文字色：标题、正文、主按钮、焦点环。
- 树皮色（Bark）`#71614F` — 次要文字、说明文字、眉题、区域标签的默认状态。
- 珊瑚色（Coral）`#E2654A` — 唯一强调色：选中区域、价格、RSVP 勾选、焦点环细节、参观按钮。
- 深珊瑚色（Coral Deep）`#C24E35` — 悬停和按下状态。
- 鼠尾草绿（Sage）`#7E9070` — 低调的第二色：可用性圆点、“已包含”勾选、方案亮点。
- 分隔线色（Rule）`#E0D9CC` — 1px 细线、卡片边框、输入框边框、平面图线条。

### 字体排印（Typography）
- 展示字体：H1、H2、H3、方案名称、活动标题、字标：Sora（OFL），字重 600/700
- 文本与界面：正文、眉题、按钮、表单字段、说明文字；价格和可用性使用等宽数字：Albert Sans（OFL），字重 400/600/700

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。容器最大宽度 1200px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面端 96px、1024px 以下 72px、640px 以下 56px。字号阶梯：H1 clamp(42px, 6.2vw, 78px) Sora 700，行高 1.04；H2 clamp(28px, 3.8vw, 46px) Sora 700；H3 21px Sora 600；导语 Albert Sans 400 17.5px / 1.65 Walnut 90% 不透明度；正文 15.5px / 1.7（最大宽度 64ch）；眉题 Albert Sans 700 12px 大写 字距 0.16em Bark；说明文字 13px Bark。按钮：高度 50px，Albert Sans 700 14px。主按钮：Walnut 填充，Card 文字。次按钮：1px Walnut 边框，Walnut 文字。输入框：高度 50px，1px Rule 边框，Card 填充，聚焦时 Walnut 边框。全局焦点环：2px Walnut 轮廓，偏移 3px。
- 圆角：卡片、按钮、输入框、标签和照片均为 12px。仅胶囊、可用性圆点和 RSVP 勾选使用 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现和区域过渡；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于地图选择和参观切换。克制——这是一个办公空间推介。
- 动效：显现：包裹在 <Reveal> 中的区块初始为 opacity 0、translateY(12px)，当 15% 可见时（Motion whileInView，viewport once）在 650ms 内以 --ease-out 落定。同级元素错开 70ms。
- 动效：首屏：休息区照片从 1.04 缩放至 1.0，历时 2400ms；标题上升；起价数字跳动一次。
- 动效：平面地图：区域默认以 Rule 描边、Bark 标签呈现；悬停时填充 Linen、上浮 1px 并显示可用性提示框（Sage 圆点“6 of 8 free”等宽数字）；区域内已占工位以暗色小方块显示；点击选中——区域以 12% Coral 填充并加 Coral 描边，图例更新；选择切换以 200ms --ease-io 交叉淡入淡出。平面图首次进入视口时绘制出现（stroke-dashoffset，1000ms）。
- 动效：方案：推荐卡片永久上浮 6px；悬停时价格跳动 2px；“已包含”勾选错开 40ms。
- 动效：活动：RSVP 将按钮切换为“Going ✓”（Sage 勾选绘制，300ms）并以等宽数字跳动递增计数；再次点击礼貌取消（悬停时显示“Maybe not”）。
- 动效：参观表单：日期标签选中时填充 Walnut；无效提交抖动 4px 并显示内联标签；发送后切换为 Confirmed（300ms --ease-io）——一个绘制的平面图片段印章“TOUR BOOKED”从 -5deg 旋转至 -2deg，并回显所选区域（“Asking about: the mezzanine, 3 dedicated desks free”）。
- 动效：链接：.link-draw 在悬停和 focus-visible 时以 280ms 生长出 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce —— 平面图直接以绘制完成状态渲染，无上浮、跳动、错开或印章；区域选择为即时颜色变化。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：温暖的工作场所摄影，全部六张为本模板以统一风格制作：大窗户、浅色木材和植物、胡桃木色调配珊瑚色点缀——工位、休息区、电话亭和厨房角落，绝不出现人物（无面孔、无手、无屏幕保护程序是人的笔记本电脑）。无可读文字或标识。每张照片使用 object-fit cover，object-position 见 Assets 部分，12px 圆角，无阴影；Offwhite 背景上的照片加 1px Rule 轮廓。说明文字为 Albert Sans 13px Bark。代码绘制：平面图（线条区域、工位为小方块、门为弧线）、提示框、可用性圆点、印章、标签和 favicon。图标：仅使用 lucide-react，描边宽度 1.75。

## 页面与区块
### 空间（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值撰写（[SPACE] = The Print Works，[CITY] = Philadelphia, Pennsylvania，[DESKS] = 40，[VIBE] = warm, plant-heavy and quietly busy）。将每个字符串、价格和列表放入 src/content.ts 并从中渲染。若任何变量值不同，请重写 hero、plans、amenities、events、zones 和 tour 文案，使其对新空间具体且可信，同时保持相同的结构和数量（3 个方案、8 项设施、4 个活动、6 个地图区域、3 条噪音描述）。所有成员、主持人和可用性数字均为虚构；可用性在地图附近标注一次为“sample state”。方案：“Hot desk” $210/月或 $28/天“any free desk, locker included”；“Dedicated desk” $395/月“your desk, your monitor arms, 24/7”；“Private room (2–4)” $980/月“a door, a whiteboard, and a doorbell you can ignore”。营业时间：周一至周五 7:00–19:00，周六 9:00–15:00，周日休息（拥有专属办公桌的成员：24/7 门禁码）。区域（id · 名称 · 容量 · 预置空闲）：'lounge-hot' the lounge hot desks 8/6 free；'window-row' the window row (dedicated) 10/3 free；'mezzanine' the mezzanine (dedicated) 12/5 free；'booths' the phone booths 4/2 free；'studios' the two studios (private) 2/1 free；'kitchen' the kitchen table (hot) 4/4 free。活动（以星期命名，无日期）：'Tuesday · Not-a-networking breakfast' '8:30, kitchen — bagels and deliberate small talk, hosts: June'；'Wednesday · Silent co-working' 'two hours, mezzanine, headphones encouraged'；'Thursday · Show-and-tell' 'one member, ten minutes, zero decks allowed'；'Friday · Fix-it Friday' 'the community toolbox opens; bring the wobbly thing'。
   布局：不适用
   动效：不适用
2. **页眉** — 左侧：字标“[SPACE]”（Sora 700 19px），下方为“Coworking · [CITY] · [DESKS] desks”（10px 大写 Bark），链接到 ./index.html。右侧导航（Albert Sans 600 14px）：“The floor” → #map，“Plans” → #plans，“Events” → #events，以及一个 Walnut 色的“Book a tour” → #tour。低于 820px：字标 + 导览按钮。
   布局：粘性顶部，高度 72px，Offwhite/94% 模糊，Rule 边框。
3. **Hero** — 两栏。左侧：眉题“COWORKING IN [CITY]”；H1“A good room” / “*to think in.*”；导语（最大宽度 520px）：“[SPACE] is [VIBE] — [DESKS] desks in a converted print works, plants that survive us, and coffee that deserves the mugs. Hot desks from $210 a month, days from $28.”；主按钮“Book a tour” → #tour 和次按钮“See the floor” → #map；三条带 Sage 勾号的快速事实：“Free trial day, no card”；“Month-to-month, leave anytime”；“Dogs: yes, distractible ones especially”。右侧：lounge-wide.webp（4:3），配文“The lounge, 9:40am — sample of an ordinary Tuesday”。在折叠线下方出现一个快速的“See the floor”提示（或迷你平面条），以便在十秒内发现平面图；照片与标题块顶部对齐；在移动端徽章整齐换行。
   布局：Offwhite 背景，顶部垂直内边距 104px；左侧 6 列，右侧 5 列偏移 1。
4. **交互式平面地图** — 区块 id='map'。眉题“THE FLOOR”和 H2“Pick where you''d sit.”。FloorMap：印刷厂的 SVG 平面图（viewBox 0 0 900 540）——六个区域为圆角线稿区域，办公桌为小方块（已占用办公桌填充 Bark 30%），门为四分之一弧开启，一个楼梯符号和一个指北针；悬停任何区域查看可用性工具提示；点击选择（填充 Coral 12%，Coral 描边，图例行更新为该区域的描述：“the mezzanine — 12 dedicated desks, 5 free (sample)”）。地图下方说明：“Availability is sample state for this template — the real space would show it live.” 侧面板（4 列）重述所选区域、其价格行和快捷方式“Tour this spot →” → #tour。低于 1024px 时地图整体水平滚动。
   布局：Linen 背景。地图 8 列在 Card 上，带 Rule 边框；侧面板 4 列粘性顶部 96px。
5. **会员方案** — 区块 id='plans'。眉题“PLANS”和 H2“Three ways to belong.”。PlanCards：1）“Hot desk”——“$210/mo”或“$28/day”——“Any free desk, morning pick of the lounge or kitchen table; locker included; Mon–Sat hours.”——“Included: wifi · coffee · lockers · printing (fair-use)”。2）“Dedicated desk”（特色，Coral 描边，标签“Most loved”）——“$395/mo”——“Your own desk in the window row or mezzanine, monitor arms welcome, 24/7 door code.”——“Everything in hot desk, plus: your desk · 24/7 · guest passes (2/mo)”。3）“Private room (2–4)”——“$980/mo”——“A door that closes, a whiteboard that fills, and a doorbell you can ignore; includes three desks.”——“Everything in dedicated, plus: the room · storage · 4 hours of meeting-room credit”。说明：“All month-to-month. Leave with a week''s notice and your plants go with you.”
   布局：Offwhite 背景。三列 24px 间距；特色卡片上浮 6px，带 2px Coral 边框；勾号用 Sage；价格 Sora 700 34px 表格数字，日票替代价 15px Bark。
6. **设施与噪音条** — 区块 id='amenities'。眉题“WHAT''S IN THE BUILDING”——八个带图标的设施瓷砖：Wifi“1 Gb up and down, tested weekly, bragged about monthly”；Phone“four phone booths, one famously quiet”；Printer“printer, scanner, and the community stapler (rarely lost)”；Coffee“locally roasted, bottomless, one decaf for the afternoons”；Lockers“lockers with keys that don''t copy themselves”；Utensils“a kitchen you''d cook in, and people who do”；Bike“bike racks inside the door and a pump”；Moon“24/7 codes for dedicated desks and rooms”。下方 NoiseStrip：“Sounds like:”三条诚实的描述——“The lounge: coffee-shop energy until 4, then quiet hour”；“The mezzanine: library rules, enforced by eyebrows”；“The booths: so quiet you can hear your own pitch”。噪音条有独立的视觉处理：逐区域的响度刻度，带 Sage 圆点，更大的文字，旁边是电话亭照片——不是单薄的附加物。
   布局：Linen 背景。4x2 网格 16px 间距瓷砖在 Card 上；NoiseStrip 为细线分隔的三列条带。
7. **社区活动** — 区块 id='events'。眉题“THIS WEEK, MOST WEEKS”和 H2“Community, scheduled gently.”。四个 EventCards：“Tuesday · Not-a-networking breakfast”——“Bagels at 8:30 in the kitchen; the name is the rule. Host: June.”——“Going: 11”；“Wednesday · Silent co-working”——“Two focused hours on the mezzanine; headphones encouraged, typing encouraged-er.”——“Going: 7”；“Thursday · Show-and-tell”——“One member, ten minutes, zero decks allowed. The ceramicist and the spreadsheet guy are both regulars.”——“Going: 9”；“Friday · Fix-it Friday”——“The community toolbox opens; bring the wobbly thing, leave with the unwobbly thing.”——“Going: 5”。每张卡的 RsvpButton 在客户端切换（计数跳动）。
   布局：Offwhite 背景。2x2 网格 20px 间距；卡片在 Card 上，Rule 边框，带星期标签；RSVP 按钮 999px。
8. **导览表单** — 区块 id='tour'。眉题“COME SEE IT”和 H2“Tours take twenty minutes and end in the lounge.”。一个 Card 面板：首先显示所选区域行（“Asking about: the mezzanine — 5 of 12 free (sample)”，可通过与地图同步的小区域选择更改）；姓名和电子邮件输入；DayChips（下周的周一/周二/周三/周四/周五 + “Saturday morning”）；一个安静的时间选择（“9–11”、“11–1”、“3–5”）；主按钮“Book the tour”，说明“Saved in this browser — the real page would email the host. Nothing is sent here.”。确认后：显示“TOUR BOOKED”印章、“See you [DAY], [WINDOW].”、区域回显、“We''ll have coffee on and the wobbly chair fixed.”以及“Change my tour”返回预填。持久化在 localStorage 中。关键：导览表单必须渲染——Reveal 包装器使用宽松的视口边距（amount 12% 或更小，once:true），任何高于视口的块以 amount 0px 或无 whileInView 显示；在发布前验证构建页面中表单、日期标签和提交按钮在桌面端可见。
   布局：Linen 背景；面板最大宽度 620px，28px 内边距，Rule 边框；标签换行。
9. **页脚** — Walnut 背景，Offwhite 色调文字。三列：1）字标 + “[SPACE]”下方为“Coworking · [CITY] · a former print works”。2）“Visit”：“2210 Cadwalader St, [CITY]”，hello@ + emailDomain，“(215) 555-0175”。3）“Hours”：周一至周五 7:00–19:00，周六 9:00–15:00，周日休息；“Dedicated members: 24/7”。底部行：“© [SPACE]. Availability shown as sample; the coffee is real.”
   布局：垂直内边距 64px，3 列，底部行在 Offwhite/15% 分隔线下方 32px。低于 768px：堆叠。

## 资源
- 图片：为本设计制作的模板照片（可随模板自由再分发）。用 curl -L -o 将每张图片下载到 public/images/：https://media.vibefather.ai/assets/0e590ff7-ff46-49c2-b368-2048828d527a/lounge-wide.webp → public/images/lounge-wide.webp（首屏；object-position 50% 55%；alt 'A warm lounge of mixed desks and plants in big-window daylight'）；https://media.vibefather.ai/assets/0e590ff7-ff46-49c2-b368-2048828d527a/window-row.webp → public/images/window-row.webp（方案区侧；alt 'A row of dedicated desks along tall windows'）；https://media.vibefather.ai/assets/0e590ff7-ff46-49c2-b368-2048828d527a/booth-quiet.webp → public/images/booth-quiet.webp（静音区侧；alt 'A plywood phone booth with a bench and a small light'）；https://media.vibefather.ai/assets/0e590ff7-ff46-49c2-b368-2048828d527a/kitchen-table.webp → public/images/kitchen-table.webp（活动区侧；alt 'A long kitchen table with coffee gear and bagels'）；https://media.vibefather.ai/assets/0e590ff7-ff46-49c2-b368-2048828d527a/mezzanine.webp → public/images/mezzanine.webp（地图区侧；alt 'A mezzanine of quiet desks with plants along the rail'）；https://media.vibefather.ai/assets/0e590ff7-ff46-49c2-b368-2048828d527a/studio-door.webp → public/images/studio-door.webp（方案区私人房间卡片；alt 'A private studio door with a glass panel and a whiteboard wall'）。共六个文件。
- 图片：在项目根目录写入 ASSETS.md，包含一张表：路径、来源 URL、作者、许可证——每张照片一行（来源 'media.vibefather.ai, made for this template'，作者 'VibeFather'，许可证 'Distributed with the template'），另加 @fontsource-variable/sora 和 @fontsource-variable/albert-sans（OFL-1.1）以及 lucide-react（ISC）的行。切勿用图库网站或包含人物、面孔、手部或可读标识的图片替换照片。
- 图标：仅使用 lucide-react：Wifi、Phone、Printer、Coffee、Lock、Utensils、Bike、Moon、Check、Plus、X、CalendarDays、ArrowRight、MapPin。描边宽度 1.75，16–24px，颜色继承。平面图、工具提示、可用性方块、TOUR BOOKED 印章和 favicon 均为绘制的 SVG。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的 rect rx 8 填充 #3E3227，一个 Offwhite 桌面网格字形（四个小方块），其中一个是 Coral 方块。无其他标志：空间名称始终以文字排版呈现。
- 字体：安装 @fontsource-variable/sora 和 @fontsource-variable/albert-sans，并在 src/fonts.ts 中按 Setup 所列导入它们。Vite 会将 woff2 文件打包进 dist/。
- 图片：以代码绘制：交互式平面图（区域、办公桌、门、楼梯、指北针）、可用性圆点和已占用方块、工具提示、印章、标签和 favicon。除六张照片外无其他位图；无插图；无地图瓦片。

## 禁止事项
- 无后端、无表单提交、不向任何 API 发起 fetch 请求：地图选择、RSVP 和参观预约仅在浏览器内保存（localStorage）；可用性标注为示例状态；表单声明不会发送任何内容。
- 此单页上的所有链接均为锚点（./index.html#map、#plans、#amenities、#events、#tour）。
- 一切资源自托管：字体通过 Fontsource 引入，图标以 npm 包或内联 SVG 形式提供，图片下载至 public/images/。不得使用 CDN 的 <script> 或 <link> 标签，不得使用 Google Fonts，不得使用分析工具。
- 生产构建：压缩、无 source map、不将 src/ 复制进 dist/、使用单条命令 npm run build、输出位于 dist/ 且小于 10 MB。
- 不得使用真实共享办公品牌、会员或东道主；不得使用含人物、面部或手部的照片；不得出现可辨识的标牌；所有价格、数量和活动均为虚构。
- 任何位置不得出现日期或年份：活动以星期几命名，参观选择器仅显示星期几标签而不含完整日期；网站绝不显示当天日期。
- 除可选的页脚署名链接外，网站内绝不提及 VibeFather 或任何其他品牌；所有文案均为虚构的美式英语。
- 遵循 prefers-reduced-motion：平面图直接渲染为绘制完成状态，无升起/打勾/盖章/交错动画；区域选择为颜色变化；悬停效果保留。
- 网站必须在 1440x900 桌面端和 390x844 移动端正常工作，控制台零错误；区域、标签、RSVP 和表单仅用键盘即可操作，且焦点环可见；地图可按区域聚焦（方向键在区域间移动）。
- 文案保持具体：不得使用 lorem，不得使用“synergy”；每个价格、数量和设施均存放于 src/content.ts 中。

---
— Prompt by VibeFather · https://vibefather.ai/t/coworking-space-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
