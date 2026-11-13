> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 攀岩馆网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个单页攀岩馆网站，采用粉笔白（chalk-white）视觉识别：一个色彩缤纷的墙面主视觉区，搭配厚重的窄体字型；一个可按难度等级筛选的 SVG 墙面与路线总览；以安静克制的方式对比单日票与会员方案；一个客户端入門课程预约表单；一条示例活动横条；以及一个营业时间区块，内含七日繁忙时段热力图。

- 受众：攀岩与抱石馆，以及为其建站的工作室；也适用于任何按难度、等级或赛道售卖场次的场馆。
- 目标：让访客从沙发上起身、走进粉笔灰里：展示墙面，让他们找到自己难度等级的路线，五秒内看清一次到访的价格，并预约入门课程——所有内容在属于示例数据之处都如实标注。
- 语气：直接、干练、带点兴奋——攀岩馆内部情报（gym-beta）的能量：短句、具体数字、零健身陈词滥调的填充。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/anton（OFL）、@fontsource/public-sans（OFL）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化配置：
  - 用 npm create vite@latest climbing-gym-website -- --template react-ts 搭建脚手架；将 tailwindcss@3.4、postcss 和 autoprefixer 添加为开发依赖；将 motion、lucide-react、@fontsource/anton 和 @fontsource/public-sans 添加为依赖。
  - vite.config.ts：base 设为 './'，build.sourcemap 设为 false，构建输出到 dist/。
  - tailwind.config.js：扩展颜色 chalk #F2F1EC、concrete #E4E2DB、chalkline #D6D3C9、ink #23252A、slate #6B6E76、neon #E61C7D、neondeep #C41366；fontFamily 中 display 为 'Anton'、sans 为 'Public Sans'；圆角：仅 chip 为 4px。
  - postcss.config.js：tailwindcss + autoprefixer。
  - src/components/WallMap.tsx：用 SVG 绘制的风格化攀岩馆立面图，viewBox 为 0 0 1000 360 —— 四个墙面轮廓以混凝土灰色多边形呈现（一块向左倾斜的板、一个垂直面、一个 30° 仰角、一个屋顶段），每面墙的线路以五到七个 7px 岩点圆圈的簇呈现，圆圈使用该线路胶带颜色的颜色，沿弧线排列，簇的起点处带一个小难度标签（'V1'、'V4'、'V7'）；墙面和线路来自 content.ts 中的固定数组；一个难度区间筛选 prop（all | v0-2 | v3-5 | v6+）会将不匹配的簇降至 15% 不透明度并加灰度（200ms），同时禁用其指针事件。
  - src/components/BusyChart.tsx：SVG 中的七日热力条 —— 7 列（周一至周日）× 6 个时段（07、10、14、17、20、22），单元格为 44px，其填充色根据 content.ts 中固定的样本强度数组（0–1）从 chalk 的 0% 到 neon 的 85% alpha；悬停单元格时在一个小提示框中显示 'FRI 17:00 — PACKED (SAMPLE)'。
  - 难度标签和场次标签共用一个组件：4px 圆角，13px Public Sans 700 大写，激活态 = neon 底色配 chalk 文字（150ms）。
  - src/lib/motion.ts：利落的动效变体 —— reveal（opacity 0→1，y 16→0，400ms ease-out，60ms 交错，whileInView 仅一次）、pop（scale 0.92→1，150ms）—— 配合 useReducedMotion 回退为 150ms 的透明度淡入且无缩放。
  - 将所有面向用户的字符串和数据集（场馆、区域、价格、营业时间、walls 数组 {name, profile, routes[{grade, tape, points}]}、busy 数组、活动、表单文案）保留在 src/content.ts 中；各区块从中读取，以便在一处替换数值。
  - index.html：<title>[BRAND] — Climbing in [DISTRICT]</title> 外加一个代码绘制的 favicon.svg（chalk 底色上的单个 neon 岩点）；不做其他 meta 工作。

## 变量
- [BRAND] — 健身房名称（默认：“The Chalk Room”）。为字标、主视觉标题、页面标题和联系邮箱（来自 content.ts）虚构的健身房名称。
- [DISTRICT] — 区域（默认：“the Old Glassworks”）。健身房所在位置——主视觉数据行、地址行和页脚（'climbing in [DISTRICT]'）。
- [DAY_PASS] — 单日通行证价格（默认：“$18”）。通行证对比中的单次入场价格以及主视觉 CTA 行。
- [WALL_SIZE] — 岩壁面积（默认：“13,000 sq ft”）。主视觉数据行中的规模声明（'[WALL_SIZE] of wall, reset weekly'）。
- [CREDIT] — 在页脚保留一个小的“Template by VibeFather”链接，指向 https://vibefather.ai/t/climbing-gym-website（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- Chalk `#F2F1EC` — 所有页面的底色 — 浅暖灰的粉笔白。
- Concrete `#E4E2DB` — 抬升表面：对比面板、表单面板、墙面地图底色。
- Chalk line `#D6D3C9` — 细线、表格线、边框、图表单元格描边。
- Ink `#23252A` — 主文本 — 石板近黑色，用于 Anton 标题和正文。
- Slate `#6B6E76` — 次要文本：描述、元信息、样本注释。
- Neon magenta `#E61C7D` — 唯一强调色：难度等级标签、繁忙热力、CTA、激活筛选、活动标签 — 绝不用于装饰。
- Neon deep `#C41366` — 霓虹色的按下和悬停状态。

### 字体排印（Typography）
- Display — 健身房名称、标题、墙面名称、大数字（粗重窄体、大写、紧凑行距）：Anton（OFL），字重 400
- Text — 正文、标签、表格、表单标签（标签大写，字距 0.1em）：Public Sans（OFL），字重 400/500/700

### 布局与动效
- 间距：运动感与高效：桌面端区块 py-24（96px）/ 移动端 py-16；内容 max-w-6xl px-6/px-10；用细线代替盒子；墙面地图占满内容宽度，四周留 80px 空白。
- 圆角：硬朗边角以匹配字体：图片和面板 0px，标签和输入框 4px，仅两个 CTA 使用胶囊形。
- 动效：利落的显现：区块、卡片和行向上淡入（y 16→0，400ms ease-out），通过 Motion whileInView 以 60ms 错峰，仅一次 — 运动的节奏，而非水疗的。
- 动效：难度筛选：不匹配的路线群组变暗至 15% 不透明度并灰度化，其标签变为空心（200ms）；匹配的群组保持完整胶带颜色并带霓虹难度标签。
- 动效：繁忙图表：单元格在首次显现时从粉笔色填充到霓虹透明度，每格 30ms 错峰（快速波浪，总计约 1.3s）；悬停显示样本工具提示。
- 动效：Hero：墙面照片在 1.5s 内从 1.04 缩放到 1；Anton 标题在 120ms 后弹入；统计行从左侧滑入。
- 动效：标签切换 150ms；介绍表单的已保存提示弹出（150ms）；通行证行在其列悬停时高亮霓虹。
- 动效：prefers-reduced-motion：无缩放，无图表波浪（单元格立即渲染最终状态），所有显现变为 150ms 不透明度淡入。
- 图像：一个健身房，一种光线：室内攀岩摄影，明亮均匀的健身房光线和高窗透入的冷日光，细粉笔灰在空气中飘浮，浅灰色墙面上有彩色岩点，高对比度充满活力的构图。攀岩者仅从背后出现或作为剪影，面部不可识别 — 在墙上显得很小，背对镜头。画面中任何地方无可读文字（无横幅、看板或带文字的路线标签），无标志，无品牌可识别的装备标记。六张照片由 VibeFather 生成并下载到 public/images。

## 页面与区块
### [BRAND] — [DISTRICT] 攀岩馆（`index.html`）
1. **页眉（Header）** — 固定顶栏，60px，粉笔底色（chalk ground）92% 不透明度，底部 1px 粉笔线（chalkline）细线。左侧：[BRAND] 字标，Anton 20px 墨色（ink），大写。右侧（桌面端）：锚点链接 'Walls'、'Passes'、'Learn'、'Hours'，Public Sans 700 13px 大写，字距 0.1em，石板灰（slate）→ 悬停时变为墨色；然后是霓虹胶囊按钮 'Book intro course'（粉笔色文字）→ #learn。移动端：字标 + 胶囊按钮 + lucide menu/x 切换按钮，打开一个粉笔色面板，四个链接纵向堆叠。
   布局：position fixed，z-40。
   动效：移动端面板 200ms 快速下拉；链接悬停 150ms；胶囊按钮按下变为 neondeep。
2. **首屏（Hero）— 岩壁** — 全出血宽幅照片，一面色彩缤纷的抱石墙（public/images/wall-wide.webp），上面有两个小小的攀岩者，从背后拍摄。标签，Public Sans 700 12px 大写，字距 0.16em，霓虹色：'BOULDERING · TOP ROPE · TRAINING ROOM — [DISTRICT]'。标题，Anton，clamp(3.5rem, 9vw, 7rem)，墨色，两行：'STRONG HANDS. / SOFT LANDING.' 副标题，Public Sans 400 17px 石板灰，max-w 46ch：'Every wall reset weekly, every grade from first-timer to project. Come chalk up — day pass [DAY_PASS], gear rental included.' 行动按钮（CTA）：'Get a day pass'（霓虹胶囊）→ #passes；'See the walls'（墨色描边）→ #walls。下方统计行位于粉笔线顶部横线上，Public Sans 700 13px 大写：'[WALL_SIZE] OF WALL · 120 ROUTES (SAMPLE) · RESETS EVERY WEEK'。
   布局：min-h 92vh；照片 absolute inset-0 object-cover object-center；浅色遮罩 linear-gradient(180deg, rgba(242,241,236,0.20) 0%, rgba(242,241,236,0.05) 40%, rgba(242,241,236,0.96) 100%)；文字块位于左下，列 1–9，padding-bottom 88px。
   动效：照片在 1.5s 内从 1.04 缩放到 1；标签、标题、副标题和行动按钮从 200ms 起以 80ms 间隔错峰上移；统计行滑入；减少动效：静态，单次淡入。
3. **岩壁与线路 — 难度地图** — id=walls。标签 'THE WALLS' 霓虹色；标题 Anton clamp(2rem, 4.5vw, 3.25rem) 墨色：'FOUR WALLS. PICK YOUR GRADE.' 筛选行：难度标签 'ALL'、'V0–2'、'V3–5'、'V6+'（激活 = 霓虹色）。WallMap SVG 全宽置于混凝土底色面板上（1px 粉笔线边框）：下方以 Anton 16px 墨色标注四个岩壁剖面 — 'THE SLAB'、'THE FACE'、'THE PROW'、'THE ROOF' — 每个都带有以胶带颜色标示的线路簇和难度标签。右对齐的示例说明，Public Sans 12px 石板灰：'SAMPLE SET — 120 ROUTES ACROSS 4 WALLS, REFRESHED WEEKLY IN DEMO ONLY.' 地图旁（桌面端），holds-macro.webp 作为 1:1 强调裁切图，配说明文字 'FRESH SET, FRIDAY MORNING'。
   布局：12 列网格：地图列 1–9，微距照片 + 说明列 10–12；移动端先堆叠地图再堆叠照片。
   动效：筛选时将不匹配的线路簇调暗至 15% + 灰度（200ms）；难度标签弹出 150ms；地图以 400ms 上升显现；减少动效：即时切换筛选状态。
4. **次卡与会员** — id=passes。标签 'PASSES' 霓虹色；标题：'PAY HOW YOU CLIMB.' 混凝土面板上的低调对比：三列 — 'DAY PASS' '[DAY_PASS]'（每次入场）、'MONTHLY' '$69'（每月）、'ANNUAL' '$590'（每年，'two months free' 标签为霓虹色）— 配四行细线行：'All walls & training room'（三列均勾选）、'Gear rental'（勾选 / 勾选 / 勾选）、'Guest passes'（— / 每月 1 次 / 每月 2 次）、'Intro course discount'（— / 20% / 20%）。面板下方，Public Sans 12px 石板灰：'Sample pricing for the demo — nothing is for sale here.' 面板旁，climber-silhouette.webp（3:4），配说明文字 'THE PROW AT 19:00'。
   布局：12 列网格：照片列 1–4，对比表列 5–12；表格为 4 列 CSS 网格（行标签 + 三个方案），位于细线上；移动端将照片堆叠在上方。
   动效：表格淡入上移；悬停方案列时其表头染上霓虹色（150ms）；行以 60ms 间隔错峰显现。
5. **学习 — 入门课程** — id=learn。标签 'LEARN' 霓虹色；标题：'NEVER TIED IN? NINETY MINUTES.' 文案，Public Sans 16px 石板灰 max-w 42ch：'Harness, knots, top-rope belay and how to fall without apology. Small groups, one coach, chalk included — you leave climbing on your own rope.' 表单位于混凝土面板上（标签 Public Sans 700 13px 墨色；输入框粉笔底色，粉笔线边框，4px 圆角）：姓名；邮箱；场次标签（'Tuesday evening'、'Saturday morning'、'Sunday afternoon' — 单选）；人数步进器 1–4。按钮 'Save my spot'（霓虹色）。提交时：保存到 localStorage 键 'introCourse' 并显示内联提示（150ms 弹出，石板灰 13px）：'Saved on this device only — this demo form sends nothing. Call the front desk to confirm.' 表单旁，gym-training.webp（4:3），配说明文字 'THE TRAINING ROOM, QUIET AT NOON'。
   布局：12 列网格：照片列 1–5，表单列 6–12；移动端将照片堆叠在表单上方。
   动效：标签和步进器切换 150ms；保存提示弹出；减少动效：仅淡入。
6. **活动条** — 标签 'EVENTS' 霓虹色；标题：'THE ROOM AFTER DARK.' 细线上的三行，每行带一个霓虹图案标签、一个 Anton 20px 墨色标题和一行 Public Sans 14px 石板灰文字：'WEEKLY — Set Night' — 'Watch the routes go up; old problems come down at 21:00.' / 'MONTHLY — Send Social' — 'Fresh set, loud playlist, first-timers welcome.' / 'QUARTERLY — Comp Night' — 'Flash format, all grades, one very loud room (sample).' 侧图 climber-behind.webp（3:4），配说明文字 'CHALKING UP, 19:40'。脚注：'Sample events — patterns, not dates.'
   布局：12 列网格：行内容列 1–8，照片列 9–12；移动端堆叠。
   动效：行以 60ms 间隔错峰上移；标签在显现时弹出一次。
7. **营业时间与繁忙时段** — id=hours。一条宽幅带：lanes-wide.webp（16:9，34vh，object-cover），配说明文字 'TOP-ROPE LANES, MORNING'。下方两列：左侧，营业时间块 — Anton 24px 'HOURS'，细线上的行 'MON–FRI 07:00–23:00 · SAT 09:00–21:00 · SUN 09:00–21:00' 以及地址行 '7 Foundry Street, [DISTRICT] · hello@thechalkroom.com'；右侧，BusyChart 热力条（周一至周日 × 六个时段），图例 'QUIET → PACKED (SAMPLE)' — 一条从粉笔线到霓虹色的渐变条，两端为石板灰标签。
   布局：宽幅带全宽；营业时间和图表并排各占 6 列；图表在窄屏上水平滚动。
   动效：单元格在显现时波浪式进入（30ms 错峰）；悬停提示；减少动效：单元格立即渲染最终状态。
8. **页脚（Footer）** — 1px 粉笔线顶部横线。左侧：[BRAND] 字标，Anton 16px，以及一行 Public Sans 13px 石板灰：'An invented gym — routes, prices, busy-times and events on this page are sample copy.' 右侧：锚点链接 'Walls · Passes · Learn · Hours'，石板灰色；可选 [CREDIT] 链接。无日期，无社交媒体行。
   布局：py-12，max-w-6xl，flex 行，移动端换行为列。
   动效：无。

## 资源

- 图片：将 https://media.vibefather.ai/assets/0fed5c51-7978-4787-bc63-7093b13e9459/wall-wide.webp 下载到 public/images/wall-wide.webp。替代文本：'A wide colorful bouldering wall with two small climbers seen from behind.' 用作全出血的 hero 锚点（16:9）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/0fed5c51-7978-4787-bc63-7093b13e9459/holds-macro.webp 下载到 public/images/holds-macro.webp。替代文本：'Macro of colorful climbing holds on a light gray wall with chalk dust in the air.' 位于墙面地图旁的强调图（1:1）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/0fed5c51-7978-4787-bc63-7093b13e9459/climber-silhouette.webp 下载到 public/images/climber-silhouette.webp。替代文本：'A climber in silhouette on an overhanging wall against bright gym light.' 通行证区块（3:4）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/0fed5c51-7978-4787-bc63-7093b13e9459/gym-training.webp 下载到 public/images/gym-training.webp。替代文本：'A training corner with hangboards and rings under bright gym light, no people.' 入门课程区块（4:3）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/0fed5c51-7978-4787-bc63-7093b13e9459/climber-behind.webp 下载到 public/images/climber-behind.webp。替代文本：'A climber seen from behind chalking up at the wall base, face not visible.' 活动条带（3:4）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/0fed5c51-7978-4787-bc63-7093b13e9459/lanes-wide.webp 下载到 public/images/lanes-wide.webp。替代文本：'Top-rope lanes with a single small climber high on the wall.' 营业时间条带（16:9）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图标：通过 npm 使用 lucide-react（ISC）——对比表格中的 check 和 minus，步进器上的 plus 和 minus，CTA 中的 arrow-right，营业时间区块中的 clock 和 map-pin，活动标签中的 calendar，移动端页眉的 menu 和 x。不使用其他图标：不使用 emoji，不使用健身房连锁 logo，不使用岩点制造商标记。
- 字体：@fontsource/anton（OFL，字重 400）和 @fontsource/public-sans（OFL，字重 400、500、700），在 src/main.tsx 中导入；绝不从 fonts.googleapis.com 或任何 CDN 加载。在项目根目录的 ASSETS.md 中列出这两个字体家族和六张照片：路径、来源、生成器或作者、许可证。

## 禁止事项
- 无后端、无预订后端、无支付、无网络请求：入门课程表单仅保存到 localStorage，并附上诚实的行内说明，任何地方都不进行结账。
- 不出现真实攀岩馆、连锁品牌、岩点或装备品牌或赛事：攀岩馆、岩壁、路线、活动和价格均为虚构，任何照片中不得出现可识别品牌的装备或标志。
- 难度等级、路线设置、路线数量、繁忙时段和活动模式均为示例数据，并始终标注为示例数据；不得有与真实时钟绑定的日期——营业时间为静态模式，活动为每周/每月/每季度模式，无发布日期或年份。
- 照片仅从背面拍摄攀岩者或呈现为剪影，无可识别的面部，画面中任何位置不得有可读文字、横幅或标志；若生成的图像出现面部或文字，须替换。
- 不使用任何 CDN：字体通过 Fontsource 包提供，图标来自 lucide-react，照片来自 public/images；绝不热链接，绝不使用 Unsplash/Pexels/Pixabay 或占位图服务。
- 生产构建：单一命令，压缩，无 source map，输出中无 src/，相对路径（Vite base './'）；每张照片压缩为 ≤ 400 KB WebP，使 dist/ 保持在 20 MB 以下。
- 单页面带锚点导航；必须在 1440×900 和 390×844 下干净渲染，零控制台错误；难度筛选器和繁忙图表必须可通过键盘操作（标签为按钮），所有动画必须遵循 prefers-reduced-motion（无缩放或热浪效果；150ms 淡入淡出）。
- 保持粉笔与霓虹方向锁定：粉笔/混凝土浅色地面、墨色文字、仅一种电光洋红（electric magenta）强调色仅用于传达含义（难度等级、繁忙热力、CTA、标签），Anton 搭配 Public Sans，硬角；无深色模式，无第二种霓虹色，无玻璃拟态，图表强度填充之外无渐变。
- 所有文案、标签、示例数据和替代文本均为美式英语，存放于 src/content.ts；当 [BRAND]、[DISTRICT]、[DAY_PASS] 或 [WALL_SIZE] 变更时，重写岩壁名称、活动和价格行以适配新攀岩馆，而不是在仅抱石品牌下保留绳索攀岩馆的文案。
- 在项目根目录的 ASSETS.md 中列出每个第三方文件（两个 Fontsource 字族、lucide 图标、六张照片）：路径、来源、许可证。

---
— Prompt by VibeFather · https://vibefather.ai/t/climbing-gym-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
