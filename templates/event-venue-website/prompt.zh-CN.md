> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 活动场地网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [VENUE] 打造的单页网站，[VENUE] 是位于 [CITY] 的活动场地，以 [STYLE_NOTE] 著称，噪音宵禁时间为 [CURFEW]。网站必须能推销这个空间：三间厅房及容量表、一个互动式座位平面图（宴会/教室/鸡尾酒模式可实时重绘）、一个六张照片的画廊、三个套餐、一个客户端可用性查询、一张经理肖像（AI 生成的虚构人物），以及一条后勤信息条。单页：index.html，包含各区块（#spaces、#plan、#gallery、#packages、#enquire）。一切都在浏览器中运行；不会向任何地方提交数据。

- 受众：正在一个周日下午筛选三家场地的情侣和企业活动策划人。他们会比较容量、每小时费用，以及厅房坐满时的照片——平面图回答的是“我的 120 人坐得下吗”。
- 目标：促成查询。访客在十秒内看到主厅布置和查询 CTA；在两分钟内切换过平面图模式并核对了自己的人数。
- 语气：东道主式的自信：精确的数字、温暖的具体细节、零婚礼行业的煽情。用一句干巴巴的话交代宵禁。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（MIT）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/cormorant-garamond（OFL-1.1）、@fontsource-variable/jost（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 安装配置（Setup）：
  - 使用 react-ts 模板，通过 npm create vite@latest 搭建脚手架。项目根目录下只有一个 HTML 页面：index.html（入口为 src/main.tsx）。
  - vite.config.ts：base 设为 './'，plugins 为 [react()]，build 配置为 { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要将 src/ 复制到 dist/ 中。
  - Tailwind 3.4 通过 PostCSS 接入，content 为 ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的每种颜色以 kebab-case 键名添加到 theme.extend.colors（gallerywhite、linen、card、charcoal、charcoal-deep、ink、stonegray、champagne、champagne-deep、rule、good），并设置 fontFamily：display 为 ['Cormorant Garamond', 'Georgia', 'serif']，sans 为 ['Jost Variable', 'system-ui', 'sans-serif']。将 borderRadius 的 DEFAULT 设为 4px，并添加 maxWidth { container: '1240px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/cormorant-garamond/500.css'、'@fontsource/cormorant-garamond/600.css'、'@fontsource/cormorant-garamond/500-italic.css' 和 '@fontsource-variable/jost'；在入口文件中导入 src/fonts.ts 和 src/index.css。
  - 文件布局（File layout）：src/content.ts（所有字符串、容量、套餐、时段、规格和图片路径，带类型）、src/lib/brand.ts（venueSlug = [VENUE] 转为小写，并将每一段连续的非字母数字字符替换为 '-'；emailDomain = 去掉连字符的 venueSlug + '.com'；phoneDigits 用于 tel:）、src/lib/storage.ts（安全的 localStorage get/set，用 try/catch 包裹，键名以 venueSlug + ':' 为前缀）、src/lib/layouts.ts（layoutFor(spaceSlug, mode) → { tables, rows, capacity, dancefloor }——按模式确定的座位计算，供 SVG 平面图使用）。
  - 状态（State）：src/store/enquiry.ts 是一个小型外部 store（useSyncExternalStore），持有 { space, mode, guests, window, type, name, email, sent }，并持久化到 localStorage 键 venueSlug + ':enquiry'。
  - 组件位于 src/components/：Header.tsx、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、Footer.tsx；Hero.tsx、Spaces.tsx（含 CapacityTable.tsx 的 SpaceCard.tsx）、FloorPlan.tsx（ModeSwitch.tsx、PlanSVG.tsx、CapacityReadout.tsx）、Gallery.tsx（Lightbox.tsx）、Packages.tsx（TierCard.tsx）、ManagerNote.tsx、EnquiryForm.tsx（GuestsStepper.tsx、WindowChips.tsx、SentCard.tsx）、Logistics.tsx。src/pages/Home.tsx 负责组合它们。
  - FloorPlan 是手写的内联 SVG：每个空间按比例绘制（Main Hall 为带夹层线的仓库矩形，Gallery 为 L 形，Parlor 为较小的矩形）；模式切换会为桌块添加动画（Motion layout，400ms 滑动），CapacityReadout 会计数到新的容量；图例说明每桌 10 人的宴会圆桌、教室式排座、鸡尾酒式聚集区。
  - 在首次构建之前，使用 curl -L -o 将 Assets 下列出的每张图片下载到 public/images/ 中，并使用给定的确切文件名。构建本身从不获取任何内容。
  - public/favicon.svg 按 Assets 中所述。index.html：lang en，<meta name='theme-color' content='#FAF8F4'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[VENUE] — An event venue in [CITY]</title>。
  - 按 Assets 中所述，在项目根目录写入 ASSETS.md。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张图片。保持在 10 MB 以下。

## 变量
- [VENUE] — 场馆名称（默认："The Foundry Hall"）。虚构的场馆名称。用于字标、标题、页脚、电子邮件（events@ + 不含连字符的 venueSlug + '.com'）以及 localStorage 键。绝不使用真实场馆。
- [CITY] — 城市（默认："Providence, Rhode Island"）。场馆所在的城市。用于标题、主视觉区、后勤信息和页脚。可以使用真实城市；街道为虚构。
- [STYLE_NOTE] — 风格说明（默认："warehouse light and long dinners"）。一个全小写短语，说明该场馆因何而备受喜爱。用于驱动主视觉区文案和一条套餐文案。
- [CURFEW] — 噪音宵禁时间（默认："midnight"）。扩音音乐截止时间，以时间词表示（'midnight'、'11pm'）。用于后勤信息条和一条不带 FAQ 的简洁文案。保持简短。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/event-venue-website（默认：是；删除此行即可移除）

页面与区块（Pages & Sections）下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 画廊白（Gallery White）`#FAF8F4` — 全站页面背景。
- 亚麻色（Linen）`#F0EBE1` — 交替区块背景（空间、套餐）、标签、悬停填充。
- 卡片白（Card）`#FFFFFF` — 空间卡片、档位卡片、咨询面板、灯箱外框。
- 炭黑（Charcoal）`#2B2926` — 标题与正文文字、页脚背景、照片遮罩（以 rgba(43,41,38,x) 表示）。
- 深炭黑（Charcoal Deep）`#1E1C1A` — 悬停表面、首屏遮罩文字。
- 石灰色（Stone Gray）`#6E6A61` — 次要文字、说明文字、眉题、禁用状态。
- 香槟色（Champagne）`#C2A265` — 唯一强调色：主按钮、容量数字、选中模式、焦点环、平面表格填充。
- 深香槟色（Champagne Deep）`#A3853F` — 悬停与按下状态。
- 分隔线（Rule）`#E2DCCF` — 1px 细线、卡片边框、输入框边框、平面网格线。
- 可用绿（Good）`#3E8E6D` — 可用性对勾、发送成功对勾、物流图标。

### 字体排印（Typography）
- 展示字体：H1、H2、H3、空间名称、容量数字、字标 — Cormorant Garamond，画廊优雅风：Cormorant Garamond（OFL），字重 500/600
- 文本与界面：正文、眉题、按钮、表单、说明文字；容量与小时数使用等宽数字：Jost（OFL），字重 400/500/600

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。容器最大宽度 1240px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面端 108px、1024px 以下 80px、640px 以下 62px — 让画廊有呼吸感。字号阶梯：H1 clamp(46px, 6.8vw, 88px) Cormorant 500，行高 1.04；H2 clamp(30px, 4vw, 50px) Cormorant 500；H3 22px Cormorant 600；容量数字 Cormorant 600 34px 香槟色等宽数字；导语 Jost 400 17.5px / 1.65 炭黑 88% 不透明度；正文 15.5px / 1.7（最大宽度 62ch）；眉题 Jost 600 12px 大写 字距 0.2em 石灰色；说明文字 13px 石灰色。按钮：高度 52px，Jost 600 13.5px 大写 字距 0.08em。主按钮：香槟色填充，炭黑文字。次按钮：1px 炭黑/40% 边框。输入框：高度 50px，1px 分隔线边框，卡片白填充，聚焦时香槟色边框。全局焦点环：2px 香槟色轮廓，偏移 3px。
- 圆角：卡片、按钮、输入框、标签和照片均为 4px — 建筑感。999px 仅用于胶囊、模式标签和宾客步进器。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现和画廊；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于平面模式切换和表单切换。从容不迫。
- 动效：显现：包裹在 <Reveal> 中的区块从 opacity 0、translateY(12px) 开始，在 12% 可见时（Motion whileInView，viewport once）以 750ms --ease-out 落定。同级元素错开 70ms。
- 动效：首屏：宴会厅照片在 2400ms 内从 1.04 缩放至 1.0，同时遮罩变亮 4%；H1 上升 16px，错开 140ms；一条香槟色细线在承诺语下方绘制。
- 动效：平面图模式：桌子和行滑向新位置（Motion layout，400ms --ease-io）；舞池/舞台区块交叉淡入淡出；CapacityReadout 在 450ms 内计数到新数字；模式标签在 150ms 内填充香槟色。
- 动效：容量表格：数字从不动画；悬停时整行填充亚麻色并滑入一条 2px 香槟色线。
- 动效：画廊：照片悬停时缩放 1.03，说明文字淡入上移；点击打开灯箱（炭黑遮罩 88%，键盘方向键和 Escape，焦点返回）。
- 动效：咨询：宾客步进器在变化时弹跳；窗口标签选中时填充香槟色；无效提交抖动 4px 并显示内联标签；发送时切换到 SentCard（320ms --ease-io）— 一枚绘制的香槟色 'ON THE BOOKS' 印章轻柔缩放进入，'Thank you, [NAME].' 'We reply within a day with real availability.' 空间/模式/宾客回显，'Edit the enquiry' 预填充。持久化在 localStorage 中。
- 动效：链接：.link-draw 在悬停和 focus-visible 时以 280ms 生长出 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 平面模式即时切换，无缩放、计数或错开；一切静止；颜色/边框悬停保留。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：真实摄影，全部六张为模板以统一风格制作：高天花板仓库房间，柔和自然光，拍摄为空场或活动布置 — 餐桌布置、椅子对齐，无宾客、无面孔、无可读标牌或供应商标志。经理肖像为 AI 生成的虚构人物（一位温暖的四十五岁左右、穿亚麻西装外套的接待者）— 一个占位符，真实场地可替换为自己经理的照片。每张照片使用 object-fit cover，object-position 见 Assets 部分，4px 圆角，无阴影。说明文字 Jost 13px 石灰色。代码绘制：favicon、平面图（空间、桌子、舞池、图例）、印章、标签和容量表格。图标：仅 lucide-react，描边宽度 1.75。

## 页面与区块
### 场地（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均针对默认值编写（[VENUE] = The Foundry Hall，[CITY] = Providence, Rhode Island，[STYLE_NOTE] = warehouse light and long dinners，[CURFEW] = midnight）。将每个字符串和数字放入 src/content.ts 并从中渲染。若任何变量值不同，请重写主视觉、全部三个空间及容量、套餐、后勤和咨询文案，使其对新场地具体可信，同时保持相同结构和数量（3 个空间 × 3 种容量、3 个套餐、4 项后勤、6 个图库说明）。所有容量、套餐和事实均为虚构。事实：地址 '88 Eddy Court, [CITY]' 为虚构；电话 (401) 555-0161；活动时间为周二至周日；扩音音乐至 [CURFEW]，原声音乐不限时；通过后巷门和货运电梯进场；40 车位停车场加街边停车；无障碍入口及通往夹层的电梯。空间（名称 · 面积 · 容量 宴会/剧场/鸡尾酒 · 备注）：'The Main Hall' '4,800 sq ft, 22-ft ceilings' '180 / 240 / 320' 'the warehouse heart: steel trusses, fairy lights, the long dinner'；'The Gallery' '2,300 sq ft L-shaped' '80 / 110 / 150' 'daylight corner for ceremonies and slower mornings'；'The Parlor' '900 sq ft' '30 / 40 / 60' 'cocktails, green room, or the after-party'。套餐：'The Hall, bare' '$450/hr, 4-hour minimum' 'the room, the tables, the chairs, the freight elevator — you bring the rest'；'Half managed' '$700/hr, 5-hour minimum' 'our preferred caterer list, a day-of coordinator, load-in crew'；'Fully hosted' '$1,100/hr, 6-hour minimum' 'catering, bar staff, florist intro, coat check, and someone who fixes problems before you see them'。后勤：停车 '40-car lot behind the building, street after 6'；无障碍 'step-free entry, elevator to the mezzanine, accessible restrooms'；进场 'alley door, freight elevator, 8-hour windows'；声音 'amplified until [CURFEW], acoustic anytime — the neighbors signed off, we kept the letter'。
   布局：不适用
   动效：不适用
2. **页眉** — 左侧：字标 '[VENUE]'（Cormorant 600 21px）上方为 'An event venue · [CITY]'（10px 大写 Stone Gray），链接至 ./index.html。右侧导航（Jost 500 13px 大写 加字距）：'Spaces' → #spaces，'Floor plan' → #plan，'Gallery' → #gallery，'Packages' → #packages；一个小号 Champagne 色 'Check availability' → #enquire。低于 780px：字标 + 咨询按钮。低于 640px 时标语隐藏，CTA 保持一行（更短标签 'Enquire' 或更小内边距）；主视觉向下留出页眉高度的内边距，使眉题永不与其重叠。
   布局：顶部粘性，高度 72px，Gallery White/95% 模糊，Rule 边框。
3. **主视觉** — 全出血 hall-set.webp（88svh，最小 600px），覆盖柔和 Charcoal 渐变。眉题（Bone 75%）：'AN EVENT VENUE · [CITY]'。H1 两行：'Room for the' / '*long, slow celebration.*' 导语（Bone 85%，最大宽度 520px）：'[VENUE] is three rooms of [STYLE_NOTE] — capacities on the page, the floor plan one tap away, and availability answered within a day.' 主按钮 'Check availability' → #enquire 和照片上的次级按钮 'See the floor plan' → #plan。底部条带 Charcoal/70%：'Up to 320 guests' · 'Load-in with freight elevator' · 'Amplified until [CURFEW]'。从左到右的炭色渐变遮罩衬托文本块（或将叠加层提高至约 55%），使正文在明亮窗户上可读；段落设置最大宽度，斜体后半部分永不与照片冲突。
   布局：照片 object-position 50% 55%；渐变 Charcoal 0.5→0.15→0.85；内容锚定左下，上移 116px。
4. **空间** — 区块 id='spaces'。眉题 'THREE ROOMS' 和 H2 'CAPACITIES, PRINTED.' 三个 SpaceCard（照片 4:3，名称，平方英尺 + 层高行，CapacityTable 以 Champagne 等宽数字显示宴会/剧场/鸡尾酒数字，一行备注）：即名册。精简介绍句（去掉别扭的悬停措辞）；每个房间卡片获得一个小号 'See this room on the plan' 链接，用于选择匹配的平面图房间；移动端获得点击提示而非悬停。
   布局：Linen 背景。三列 24px 间距；容量行以细线分隔，配置标签为小型大写。
5. **交互式平面图** — 区块 id='plan'。眉题 'THE VIRTUAL FLOOR PLAN' 和 H2 'WILL YOUR 120 FIT? YES — SEE HOW.' FloorPlan：空间选择器（三个芯片），ModeSwitch（Banquet / Classroom / Cocktail），所选空间的 PlanSVG，桌子/排/簇滑入到位（宴会圆桌每桌 10 人带舞池，教室排带过道，鸡尾酒簇带吧台），以及 CapacityReadout（'Banquet: 180 seated · dancefloor 20×20'）在变化时计数；图例解释各区块。说明：'Plans are indicative; your coordinator confirms to the chair.'
   布局：Gallery White 背景。平面图面板最大宽度 980px，位于 Card 上，带 Rule 边框；空间芯片在上，模式芯片在下；图例小型大写。
6. **图库** — 区块 id='gallery'。眉题 'SET & EMPTY' 和 H2 'SIX VIEWS OF THREE ROOMS.' 六照片马赛克带说明：hall-set.webp（复用）'The Main Hall, set for 140'；hall-empty.webp 'The same hall, yours to fill'；gallery-ceremony.webp 'The Gallery, ceremony for 80'；mezzanine.webp 'The mezzanine, above it all'；parlor-bar.webp 'The Parlor, cocktail hour'；detail-trusses.webp 'Steel trusses, fairy lights, [STYLE_NOTE]'。点击打开 Lightbox。用显式 grid-template-areas（或统一 3x2）重建六照片网格：每个单元格填满，行对齐，无高照片空档，无半跨孤儿；高和宽镜头刻意平衡。
   布局：Linen 背景。3x2 马赛克 16px 间距（高项目跨行）；说明在悬停时淡入。
7. **套餐与经理备注** — 区块 id='packages'。眉题 'PACKAGES' 和 H2 'THREE WAYS TO TAKE THE ROOM.' TierCard（价格 Cormorant 32px Champagne，最低消费行，4–5 项包含内容带 Champagne 勾选）：即名册；中间档位突出，带 Champagne 边框和 'MOST BOOKED' 芯片。旁边的 ManagerNote：manager-wren.webp 肖像（3:4），说明 'Wren Okafor, venue manager — a fictional host'，备注：'Wren walks every enquiry personally — tell her the guest count and the vibe; she''ll tell you which room and whether the mezzanine is worth it.' 每个档位获得一行 'best for' 备注（或卡片高度缩小），使特色与 Enquire 按钮之间没有约 200px 的空带；卡片底部刻意对齐。
   布局：Gallery White 背景。三个档位 24px 间距，中间抬升；备注在桌面端旁边 4 列（低于 1000px 堆叠）。
8. **咨询、后勤与页脚** — 区块 id='enquire'。眉题 'CHECK AVAILABILITY' 和 H2 'THREE TAPS TO A REAL ANSWER.' EnquiryForm 在 Card 上：空间芯片（三个），GuestsStepper 20–320，WindowChips（'This month' / 'Next 1–3 months' / 'Just exploring'），活动类型选择（Wedding / Corporate / Birthday / Something else），姓名 + 邮箱；主按钮 'Send the enquiry'，说明 'Saved in this browser — the real page emails Wren. Nothing is sent here.' SentCard：ON THE BOOKS 印章，'Thank you, [NAME].' 'We reply within a day with real availability — hold dates go fast in spring.' 空间/宾客回显，'Edit the enquiry' 预填。LogisticsStrip：四行带 Good 图标。页脚（Charcoal，骨色文本）：字标，'88 Eddy Court, [CITY]'，(401) 555-0161 tel:，events@ + emailDomain；底行 '© [VENUE]. Capacities are comfortable, not theoretical.' 用自定义 lucide 箭头样式化 Wedding 选择；显示实时回显行（'Main Hall · 120 guests · banquet fits 180'）将表单与房间数据关联；表单与上方芯片保持视觉连接。
   布局：咨询部分为 Linen 区块（面板最大宽度 640px）；后勤为下方细线边界的四行；页脚三部分带底行。

## 资源

- 图片：为本设计制作的模板照片（可随模板自由再分发）。用 curl -L -o 将每张图片下载到 public/images/：https://media.vibefather.ai/assets/ea242f9a-b922-492b-a5cb-36c6905b9310/hall-set.webp → public/images/hall-set.webp（Hero、Gallery；object-position 50% 55%；alt 'The Main Hall set for dinner with long tables and fairy lights'）；https://media.vibefather.ai/assets/ea242f9a-b922-492b-a5cb-36c6905b9310/hall-empty.webp → public/images/hall-empty.webp（Gallery；alt 'The empty Main Hall with steel trusses and tall windows'）；https://media.vibefather.ai/assets/ea242f9a-b922-492b-a5cb-36c6905b9310/gallery-ceremony.webp → public/images/gallery-ceremony.webp（Gallery、Spaces 卡片；alt 'The Gallery room set with ceremony chairs in daylight'）；https://media.vibefather.ai/assets/ea242f9a-b922-492b-a5cb-36c6905b9310/mezzanine.webp → public/images/mezzanine.webp（Gallery；alt 'The mezzanine walkway above the Main Hall'）；https://media.vibefather.ai/assets/ea242f9a-b922-492b-a5cb-36c6905b9310/parlor-bar.webp → public/images/parlor-bar.webp（Spaces 卡片、Gallery；alt 'The Parlor with a small bar and lounge chairs'）；https://media.vibefather.ai/assets/ea242f9a-b922-492b-a5cb-36c6905b9310/manager-wren.webp → public/images/manager-wren.webp（Manager 备注；alt 'Wren Okafor, a fictional venue manager'）。共六个文件。

- 图片：在项目根目录写入 ASSETS.md，包含一个表格：path、source URL、author、license——每张照片一行（source 为 'media.vibefather.ai, made for this template'，author 为 'VibeFather'，license 为 'Distributed with the template'），另加 @fontsource/cormorant-garamond 和 @fontsource-variable/jost（OFL-1.1）以及 lucide-react（ISC）的行。任何照片中都没有宾客面孔——房间以空置或布置好的状态拍摄；经理肖像是根据肖像规则由 AI 生成的虚构人物；没有可辨认的标牌或供应商标志。

- 图标：仅使用 lucide-react：Users、LayoutGrid、Armchair、UtensilsCrossed、GlassWater、Car、Accessibility、Truck、Volume2、Check、Plus、Minus。描边宽度 1.75，16–24px，颜色继承。平面图（空间、桌子、舞池、图例块）、ON THE BOOKS 印章、标签和 favicon 为绘制的 SVG。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的 rect，rx 为 5，填充 #2B2926，一个 Champagne（#C2A265）桁架与桌子图形（两条线交叉在一个小圆上）。没有其他标志：场地名称始终以文字排版呈现。

- 字体：安装 @fontsource/cormorant-garamond 和 @fontsource-variable/jost，并在 src/fonts.ts 中按 Setup 所列导入它们。Vite 会将 woff2 文件打包进 dist/。

- 图片：在代码中绘制：交互式平面图（三个空间、宴会/教室/鸡尾酒布局、舞池和吧台、图例）、印章、标签、容量表和 favicon。除六张照片外没有其他位图；没有插图；没有地图瓦片。

## 禁止事项（Don'ts）
- 无后端、无表单提交、不向任何 API 发起 fetch：咨询信息仅保存在浏览器中（localStorage）并明确说明这一点；tel: 链接由电话号码数字构建。
- 此单页上的所有链接均为锚点（./index.html#spaces、#plan、#gallery、#packages、#enquire）外加页脚的 mailto。
- 任何照片中不得出现宾客面部或可识别的事件——房间以空置或艺术化布置拍摄；经理肖像为 AI 生成的虚构人物，非任何真实个人；不得出现供应商标志或可读标识。
- 一切自托管：字体通过 Fontsource，图标以 npm 包或内联 SVG 形式引入，图片下载至 public/images/。不得使用 CDN <script> 或 <link> 标签，不得使用 Google Fonts，不得使用分析工具。
- 生产构建：压缩、无 source map、不将 src/ 复制到 dist/、单一命令 npm run build、输出位于 dist/ 且小于 10 MB。
- 不得出现真实场地、餐饮供应商或租赁公司；容量与套餐为虚构，且在空间卡片、平面图和套餐之间保持一致。
- 任何地方不得出现日期或年份；窗口标签为相对月份的短语；网站永不显示当天日期。
- 除页脚可选的署名链接外，网站内绝不提及 VibeFather 或任何其他品牌；所有文案为虚构的美式英语。
- 尊重 prefers-reduced-motion：平面图模式即时切换，无缩放、计数或交错动画；一切处于静止状态；颜色/边框悬停效果保留。
- 页面必须在 1440x900 桌面端和 390x844 移动端正常工作且零控制台错误；空间/模式标签、步进器、选择器和表单仅用键盘即可操作，并有可见的焦点环。
- 文案保持宿主精确：无 lorem，无“magical day”；每个容量、小时和最低消费均存在于 src/content.ts 中。

---
— Prompt by VibeFather · https://vibefather.ai/t/event-venue-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
