> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 室内设计工作室网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简要说明
为 [STUDIO] 打造的单页网站。[STUDIO] 是位于 [CITY] 的室内设计工作室，擅长把房间做得 [STYLE_WORDS]，业务范围涵盖 [SCOPES]。网站必须以改造效果打动人心：两个前后对比滑块（支持拖拽和键盘操作）、带交付物的服务介绍、五步流程、六个项目的作品集、材料展示条，以及一个在客户端完成确认的咨询表单。整站只有一个页面：index.html，包含多个区块（#transformations、#services、#process、#work、#consult）。一切都在浏览器中运行；不会向任何地方提交数据。

- 目标受众：35–60 岁、正在规划翻新或重新布置住宅的房主，以及小型酒店业经营者。他们在夜里端着一杯葡萄酒浏览网页，见到滑块就忍不住拖动，最终会联系那家前后对比图和流程让人感到平静有序的工作室。
- 目标：促成咨询请求。访客在十秒内看到一间完工的房间和一个让人忍不住想拖动的滑块；在两分钟内看到改造效果、流程和表单。
- 语气：温暖而精确，就像工作室自己的设计任务书：具体的材料和房间名称，不写“curated luxe sanctuary”这类套话，可以就特色墙开一个冷幽默的玩笑。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（MIT）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/fraunces（OFL-1.1）、@fontsource-variable/albert-sans（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 npm create vite@latest 以 react-ts 模板搭建脚手架。项目根目录下只有一个 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将 Design 下的每种颜色以 kebab-case 键添加到 theme.extend.colors（bone、greige、card、espresso、umber、bronze、bronze-deep、sage-gray、rule、night），并设置 fontFamily display ['Fraunces Variable', 'Georgia', 'serif']、sans ['Albert Sans Variable', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 6px，并添加 maxWidth { container: '1200px' }。
  - 在 src/fonts.ts 中导入 '@fontsource-variable/fraunces'（含 italic 轴）和 '@fontsource-variable/albert-sans'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（所有字符串、服务、步骤、项目、色板、表单标签和图片路径，均带类型），src/lib/brand.ts（studioSlug = [STUDIO] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 studioSlug + '.com'），src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键前缀为 studioSlug + ':'）。
  - BeforeAfter 组件为手写实现：一个相对定位的框架，after 图片全尺寸显示，before 图片通过 clip-path inset(0 X% 0 0) 裁剪……方向反转，使向右拖动显示更多 'after'；居中的手柄线带圆形握把（ChevronsLeftRight 图标）；pointerdown+move 拖动，带 4px 阈值，ArrowLeft/Right 键步进 5%，Home/End 吸附；role='slider'，带 aria-valuenow/min/max 和文本标签（'Reveal before: 40%'）。不使用库。
  - 状态：src/store/consult.ts 是一个小型外部 store（useSyncExternalStore），持有 { room, budget, timeline, name, email, note, sent }，持久化到 localStorage 键 studioSlug + ':consult'。
  - src/components/ 中的组件：Header.tsx、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、Footer.tsx；Hero.tsx、BeforeAfter.tsx、Transformations.tsx、Services.tsx（ServiceCard.tsx）、Process.tsx（StepRow.tsx）、Gallery.tsx（ProjectCard.tsx、Lightbox.tsx）、MaterialsStrip.tsx、ConsultForm.tsx（BudgetPills.tsx、SentCard.tsx）。src/pages/Home.tsx 组合它们。
  - 在首次构建之前，使用 curl -L -o 将 Assets 下列出的每张图片下载到 public/images/，并使用给定的确切文件名。构建本身从不获取任何内容。
  - public/favicon.svg 如 Assets 下所述。index.html：lang en，<meta name='theme-color' content='#F4F0E8'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[STUDIO] — Interior design in [CITY]</title>。
  - 在项目根目录下按 Assets 下所述编写 ASSETS.md。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张图片。保持在 10 MB 以下。

## 变量
- [STUDIO] — 工作室名称（默认："Fieldhouse & Vale"）。虚构的工作室名称。用于字标、标题、页脚、电子邮件（hello@ + 不含连字符的 studioSlug + .com）以及 localStorage 键。绝不使用真实工作室。
- [CITY] — 城市（默认："Portland, Oregon"）。工作室所在的工作地点。用于标题、主视觉文案、项目所在街区以及页脚。可以使用真实城市；街道为虚构。
- [STYLE_WORDS] — 风格词（默认："warm, quiet and collected"）。描述工作室外观的三个形容词（'warm, quiet and collected'）。驱动主视觉文案、材料条说明文字以及流程叙述语气。
- [SCOPES] — 工作范围（默认："whole homes and single rooms"）。工作室承接的项目类型（'whole homes and single rooms'、'inns, restaurants and beach houses'）。驱动服务介绍、画廊项目类型以及咨询表单的房间选项。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/interior-design-studio-website（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- Bone `#F4F0E8` — 全站页面背景。
- Greige `#EAE4D9` — 交替区块背景（Services、Gallery），悬停填充。
- Card `#FCFAF6` — 服务卡片、咨询面板、已发送卡片。
- Espresso `#2E2721` — 标题、正文、图标颜色。
- Umber `#655A4E` — 次要文本、说明文字、眉题、步骤编号。
- Bronze `#A87C4F` — 唯一强调色：滑块手柄与线条、主按钮、选中胶囊、焦点环、色板边框。
- Bronze Deep `#8C663F` — 悬停与按下状态、时间线的填充线。
- Sage Gray `#8B9084` — 安静的第二色：'before' 标签、关闭状态、照片说明文字。
- Rule `#DDD5C7` — 1px 细线、卡片边框、输入框边框、画廊分隔线。
- Night `#221D18` — 页脚、照片遮罩（以 rgba(34,29,24,x) 表示）。

### 排版（Typography）
- 展示字体：H1、H2、H3、项目名称、步骤标题、字标：Fraunces（OFL），字重 500/600
- 文本与 UI：正文、眉题、按钮、表单字段、说明文字；数字出现处使用等宽数字：Albert Sans（OFL），字重 400/600/700

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。容器最大宽度 1200px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面端 112px、1024px 以下 80px、640px 以下 64px。字号比例：H1 clamp(44px, 6.6vw, 88px) Fraunces 500，行高 1.02；H2 clamp(30px, 4vw, 52px) Fraunces 500；H3 22px Fraunces 600；标题中的斜体短语使用 Fraunces 斜体（以 *星号* 标记，渲染为 <em>）；导语 Albert Sans 400 18px / 1.7 Espresso 90%；正文 16px / 1.75（最大宽度 64ch）；眉题 Albert Sans 700 12px 大写 letter-spacing 0.18em Umber，配一条 24px x 1px Bronze 线；说明文字 13px Umber。按钮：高度 52px，Albert Sans 700 14px。主按钮：Bronze 填充，Card 文字。次按钮：1px Espresso/40% 边框，Espresso 文字。输入框：高度 50px，1px Rule 边框，Card 填充，聚焦时 Bronze 边框。全局焦点环：2px Bronze 轮廓，偏移 3px。
- 圆角：卡片、按钮、输入框、胶囊和照片均为 6px — 建筑感。仅胶囊和滑块手柄使用 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于滑块的吸附和表单切换。不慌不忙 — 室内值得耐心。
- 动效：显现：包裹在 <Reveal> 中的区块从 opacity 0、translateY(16px) 开始，在 15% 可见时（Motion whileInView，viewport once）以 800ms --ease-out 稳定下来。同级元素错开 90ms。
- 动效：首屏：房间照片在 2600ms 内从 1.04 缩放至 1.0；标题上升 20px，错开 140ms；眉题下方一条细 Bronze 线向外绘制。
- 动效：前后对比：手柄可拖动，1:1 指针跟踪（拖动时无缓动 — 诚实）；释放后精确停留在离开的位置；键盘步进以 120ms --ease-io 动画；手柄旁的小 'drag' 提示标签在首次交互后淡出。滑块线带有柔和的 Night/20% 阴影。
- 动效：流程时间线：1px Rule 基线配 Bronze 填充，随区块滚动增长（scaleY，在列表上使用 useScroll）；每个步骤的编号在达到 60% 视口时填充 Bronze；行以标准显现稳定下来。
- 动效：画廊：照片悬停时缩放 1.02，说明栏从底边升起；点击打开 Lightbox（Night 遮罩 85%，图像最大 84vh，说明文字 Bone，方向键 + Escape 导航，焦点返回触发的卡片），260ms 淡入。
- 动效：材料条：色板每个错开 60ms 进入，绘制为带 Bronze 细线边框的 CSS 块；悬停色板时上浮 3px 并显示其标签。
- 动效：咨询表单：预算胶囊选中时从 Greige→Bronze 填充（150ms）；无效提交抖动 4px 一次并显示内联提示；发送时将面板切换为 SentCard（300ms --ease-io），并绘制一个 Bronze 信封盖关闭一次。
- 动效：链接：.link-draw 在悬停和 focus-visible 时以 300ms 生长 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 无首屏缩放、无错开显现（直接出现）、无吸附动画（按键跳转）、无信封盖绘制；颜色/边框悬停变化保留。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：温暖的真实摄影，全部六张为本模板以统一风格制作：柔和自然光，greige-bone 色调配 bronze 点缀和一株鼠尾草植物，无人物（无面孔、无手）。两组前后对比照片共享完全相同的相机角度：'before' 房间陈旧空旷（旧壁纸、裸灯泡、磨损地毯），'after' 房间布置温暖 — 构图匹配，使揭示真实可信。画廊图像是从不同角度拍摄的完成房间。无可读文字或标志。每张照片使用 object-fit cover，object-position 见 Assets 下说明，6px 圆角，无阴影；Bone 上的照片获得 1px Rule 轮廓。说明文字 Albert Sans 13px Umber。代码绘制：滑块手柄和线条、色板块、步骤编号、信封邮票和 favicon。图标：仅 lucide-react，描边宽度 1.5。

## 页面与区块
### 工作室（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[STUDIO] = Fieldhouse & Vale，[CITY] = Portland, Oregon，[STYLE_WORDS] = warm, quiet and collected，[SCOPES] = whole homes and single rooms）。将每个字符串和数字放入 src/content.ts 并从中渲染。如果任何变量值不同，请重写主视觉、服务、步骤、项目、色板和表单文案，使其对新工作室具体且可信，保持相同的结构和数量（2 组前后对比、3 项服务、5 个步骤、4 个项目、6 个色板）。所有项目、客户和预算均为虚构。事实：两位主理人（Ines Vale、Margot Fieldhouse——工作室名称的顺序由她们自己争论）；工作室地址为 '12 Alder Court, [CITY]'；咨询免费，45 分钟；表单中的预算区间：1 万以下、1–3.5 万、3.5–7.5 万、7.5 万以上；时间线：'as soon as'、'this season'、'just exploring'。
   布局：不适用
   动效：不适用
2. **页眉** — 左侧：字标 '[STUDIO]'（Fraunces 600 20px，letter-spacing 0.02em）链接到 ./index.html。右侧导航（Albert Sans 600 14px）：'Transformations' → #transformations，'Services' → #services，'Process' → #process，'Work' → #work，以及一个小型 Bronze 色 'Book a consult' → #consult。低于 820px：字标 + 咨询按钮，导航隐藏。
   布局：粘性顶部，高度 72px，在主视觉上方透明，然后为 Bone/94% 模糊并带 Rule 边框。
3. **主视觉** — 全出血 hero-living.webp（92svh，最小 640px）。眉题（Bone）：'INTERIOR DESIGN · [CITY]'。H1 分两行：'Rooms that feel' / '*like they were always yours.*' 导语（Bone 88%，最大宽度 540px）：'[STUDIO] designs [STYLE_WORDS] interiors for [SCOPES] — from one stubborn room to the whole floor plan, with a process you can follow line by line.' 一个主按钮 'Start with a consult' → #consult。左下角说明文字带一个小型手绘滑块图标：'Scroll — the before/afters below are draggable.'
   布局：照片 object-position 50% 60%；叠加渐变 Night 0.35→0.05→0.75；内容锚定左下角向上 120px。
4. **改造对比** — 区块 id='transformations'。眉题 'BEFORE & AFTER' 和 H2 'Drag the line. That''s the pitch.' 两个 BeforeAfter 框架堆叠，间距 48px：1）'The Ladd''s Addition living room' — before-living.webp / hero-living.webp（相同角度）：改造前显示过时的壁纸、裸露的灯泡、通铺米色地毯；改造后显示温暖的灰米色墙面、橡木地板、亚麻沙发和一盆鼠尾草。说明行：'Scope: full room · 5 weeks' 以及文字 'The radiator stayed; everything else found better work.' 2）'The Alberta kitchen nook' — before-kitchen.webp / after-kitchen.webp：改造前显示奶油色层压板台面和厚重窗帘；改造后显示橡木台面、开放式搁架、黄铜壁灯。说明：'Scope: surfaces + lighting · 3 weeks' 和 'Same footprint, better posture.'
   布局：Bone 背景。框架 16:9，容器宽度，6px 圆角，1px Rule 边框；标签 'BEFORE'/'AFTER' 固定在顶部角落（Albert Sans 700 11px，Night/60% 芯片上）。每个框架下方的说明文字分两部分排列。
5. **服务** — 区块 id='services'。眉题 'WHAT WE TAKE ON' 和 H2 'Three ways to work together.' 卡片：1）'Full design' — 'From floor plan to final cushion: concept, drawings, sourcing, trades management, install and styling.' — 'Rooms or whole homes · typical 8–14 weeks' — '$180/hr or fixed-fee'。2）'The room refresh' — 'One room, three weeks: edit what''s there, re-source the essentials, restyle the shelves you''ve given up on.' — 'Best for living rooms, bedrooms, entries' — 'from $2,400'。3）'Color & materials consult' — 'A two-hour visit and a palette you can actually shop: paint, floors, counters, metals, with samples left behind.' — 'Best for pre-reno decisions' — '$340 flat'。网格下方一行低调文字：'Furniture at trade pricing where it exists; the discount is yours, not ours.'
   布局：Greige 背景。三列 24px 间距；卡片在 Card 上 1px Rule 边框 28px 内边距；标题 Fraunces 600 22px，交付内容 Albert Sans 15px / 1.7，元信息行 Umber 13px，价格 Bronze 600。
6. **流程** — 区块 id='work'。眉题 'SELECTED WORK' 和 H2 'Four rooms, four households.' ProjectCards（照片、名称、范围行）：1）gallery-dining.webp 'The Irvington dining room' — 'Inherited table, new everything else · refresh'。2）gallery-bedroom.webp 'The Woodlark primary suite' — 'A calm room for bad sleepers · full design'。3）hero-living.webp（复用）'The Ladd''s Addition living room' — 'See the slider above · full design'。4）after-kitchen.webp（复用）'The Alberta kitchen nook' — 'See the slider above · refresh'。点击打开 Lightbox。
   布局：Greige 背景。2x2 网格 20px 间距；卡片 16:12 照片，悬停说明栏；低于 700px：单列。
7. **作品** — 区块 id='work'。眉题 'SELECTED WORK' 和 H2 'Six rooms, six households.' ProjectCards（照片、名称、范围行）：1）gallery-dining.webp 'The Irvington dining room' — 'Inherited table, new everything else · refresh'。2）gallery-bedroom.webp 'The Woodlark primary suite' — 'A calm room for bad sleepers · full design'。3）gallery-bath.webp 'The Tibbetts bath' — 'Tile decisions, finally made · materials consult'。4）hero-living.webp（复用）'The Ladd''s Addition living room' — 'See the slider above · full design'。5）gallery-office.webp 'The spare-room-that-became-an-office' — 'Work from home, minus the sad desk · refresh'。6）gallery-entry.webp 'The mudroom that admits it' — 'A place for every wet thing · refresh'。点击打开 Lightbox。
   布局：Greige 背景。3x2 网格 20px 间距；卡片 16:12 照片，悬停说明栏；低于 900px：2 列，低于 640px：单列。
8. **材料条带** — 一个 Bone 色带：眉题 'THE PALETTE, THIS SEASON' 和六个 CSS 色板及标签：'White oak, matte'（#C9A97F）、'Greige wall, eggshell'（#D9D2C5）、'Linen, undyed'（#E8E2D6）、'Bronze, unlacquered'（#A87C4F）、'Sage, in pots'（#8B9084）、'Espresso, everywhere'（#2E2721）。说明：'[STYLE_WORDS] — the swatches go home with you at the consult.'
   布局：全宽条带，96px 内边距；色板为 120x84 块，带 1px Bronze 细线边框，标签 12.5px Umber 在下方，进入视口时交错出现。
9. **咨询表单** — 区块 id='consult'。眉题 'START HERE' 和 H2 'A consult is free and forty-five minutes.' 面板在 Card 上：房间选择（Living room / Kitchen / Primary suite / Bath / Whole home / Something else）、BudgetPills（1 万以下 / 1–3.5 万 / 3.5–7.5 万 / 7.5 万以上）、时间线胶囊（'as soon as' / 'this season' / 'just exploring'）、姓名 + 邮箱输入框、备注文本域（占位符 'The room, the problem, the deadline — any of the three helps.'）；主按钮 'Request a consult' 带说明 'Saved in this browser — the real page would reach the studio''s inbox. Nothing is charged or sent here.' SentCard：手绘信封盖合上，'Request sent'（Fraunces 26px），'Thank you, [NAME] — we''ll reply within two days with times.' 摘要回显（房间 · 预算 · 时间线），'Edit the request' 返回预填状态。持久化在 localStorage 中。
   布局：Bone 背景；面板最大宽度 620px，32px 内边距，1px Rule 边框，6px 圆角；胶囊 999px Greige，选中时 Bronze 填充。
10. **页脚** — Night 背景，Bone 色调文字。三列：1）字标 + '[STUDIO]' 在 'Interiors [STYLE_WORDS] · [CITY]' 上方。2）'Studio'：'12 Alder Court, [CITY]'、hello@ + emailDomain、'By appointment, Tue–Sat'。3）'Around'：Transformations、Services、Process、Work、Book a consult 锚点。底部行：'© [STUDIO]. Photography made for this template; rooms invented with love.'
    布局：垂直内边距 72px，3 列，底部行在 Bone/15% 分隔线上方 40px。低于 768px：堆叠。

## 资源
- 图片：为本设计制作的模板照片（可随模板自由再分发）。用 curl -L -o 将每个文件下载到 public/images/：https://media.vibefather.ai/assets/d660de51-1b1d-4106-89c3-674c16d9c7be/hero-living.webp → public/images/hero-living.webp（站点主视觉 AND 滑块 1 的 AFTER 图层 AND 作品卡片 3；object-position 50% 60%；alt 'A warm finished living room with greige walls, oak floors and a linen sofa'）；https://media.vibefather.ai/assets/d660de51-1b1d-4106-89c3-674c16d9c7be/before-living.webp → public/images/before-living.webp（滑块 1 的 before，同一角度；alt 'The same living room before: dated wallpaper, bare bulb and beige carpet'）；https://media.vibefather.ai/assets/d660de51-1b1d-4106-89c3-674c16d9c7be/before-kitchen.webp → public/images/before-kitchen.webp（滑块 2 的 before；alt 'A dated kitchen nook with cream laminate counters and heavy curtains'）；https://media.vibefather.ai/assets/d660de51-1b1d-4106-89c3-674c16d9c7be/after-kitchen.webp → public/images/after-kitchen.webp（滑块 2 的 after AND 作品卡片 4，同一角度；alt 'The same nook after: oak counters, open shelving and brass sconces'）；https://media.vibefather.ai/assets/d660de51-1b1d-4106-89c3-674c16d9c7be/gallery-dining.webp → public/images/gallery-dining.webp（作品卡片 1；alt 'A dining room with an inherited wooden table under a modern pendant'）；https://media.vibefather.ai/assets/d660de51-1b1d-4106-89c3-674c16d9c7be/gallery-bedroom.webp → public/images/gallery-bedroom.webp（作品卡片 2；alt 'A calm primary bedroom in linen and oak'）。共六个文件。
- 图片：在项目根目录写入 ASSETS.md，包含一个表格：path、source URL、author、license——每张照片一行（source 为 'media.vibefather.ai, made for this template'，author 为 'VibeFather'，license 为 'Distributed with the template'），另加 @fontsource-variable/fraunces 和 @fontsource-variable/albert-sans（OFL-1.1）以及 lucide-react（ISC）的行。绝不用图库网站或包含人物、面孔、手或可读品牌标识的图片替换照片。
- 图标：仅使用 lucide-react：ChevronsLeftRight、ArrowLeft、ArrowRight、X、Check、ArrowUpRight、Ruler、Lamp、Sofa、MapPin、Mail、Clock。描边宽度 1.5，16–24px，颜色继承。滑块握柄使用 ChevronsLeftRight；信封翻盖、色板边框和 favicon 为绘制的 SVG。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的 rect rx 5，填充 #2E2721，一个 Bone（#F4F0E8）门洞字形（拱形），带一条 Bronze（#A87C4F）门线。不使用其他标志：工作室名称始终以文字排版呈现。
- 字体：安装 @fontsource-variable/fraunces 和 @fontsource-variable/albert-sans，并按 Setup 中列出的方式在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包进 dist/。
- 图片：在代码中绘制：滑块手柄、线条和角落标签、色板块、步骤编号、信封翻盖和 favicon。不使用其他位图；不使用插画；不使用地图瓦片。

## 禁止事项
- 无后端、无表单提交、不向任何 API 发起 fetch 请求：咨询内容仅保存在浏览器中（localStorage），表单中已对此作出说明；滑块为纯客户端状态。
- 此单页上的所有链接均为锚点（./index.html#transformations、#services、#process、#work、#consult）。
- 一切资源自托管：字体通过 Fontsource 引入，图标以 npm 包或内联 SVG 形式使用，图片下载至 public/images/。不得使用 CDN 的 <script> 或 <link> 标签，不得使用 Google Fonts，不得使用分析工具。
- 生产构建：压缩、无 source map、不将 src/ 复制到 dist/、使用单一命令 npm run build、输出位于 dist/ 且小于 12 MB。
- 不得出现真实工作室、项目、客户或品牌家具；不得出现含人物、面部或手部的照片；任何画面中不得出现可读文字或标志。
- 任何位置不得出现日期或年份；网站永不显示当天日期。
- 除页脚可选的署名链接外，网站内绝不提及 VibeFather 或任何其他品牌；所有文案均为虚构的美式英语。
- 遵循 prefers-reduced-motion：无 hero 缩放、无交错显现、无 snap 动画、无翻页绘制；滑块保持完全可拖拽且可键盘操作；颜色/边框悬停效果保留。
- 网站必须在 1440x900 桌面端和 390x844 移动端正常工作，控制台零错误；滑块、胶囊按钮和表单仅用键盘即可操作（方向键步进滑块，Home/End 吸附）且每个交互元素都有可见的焦点环。
- 文案保持具体：不得使用 lorem，不得使用“curated sanctuary”；每个范围、价格和周数均存放于 src/content.ts。

---
— Prompt by VibeFather · https://vibefather.ai/t/interior-design-studio-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
