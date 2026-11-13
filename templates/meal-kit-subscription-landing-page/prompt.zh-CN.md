> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 餐包订阅落地页

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的单页网站，[BRAND] 是一个餐食包品牌，位于 [CITY]，提供 [MENU_FOCUS]，每份起价 $[PER_SERVING]（示例计算）。它必须通过诚实来促成转化：一个“人数 × 餐数”计划选择器，带实时每份价格计算；本周六道菜菜单；运作方式步骤；直白的价格透明说明；以及一个客户端注册流程。单页：index.html，包含各区块（#plan、#menu、#how、#join）。一切都在浏览器中运行；不会提交到任何地方。

- 受众：28–50 岁忙碌的家庭，正在按每份价格和菜单吸引力比较餐食包。他们希望看到计算过程、菜单实拍图，并且暂停按钮要显而易见。
- 目标：产生注册。访客在十秒内看到一道菜和选择器；在两分钟内完成计划构建并加入。
- 语气：农场餐桌式的温暖：短句、真实食材、诚实的数字，以及一个关于剩菜的笑话。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（MIT）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/fraunces（OFL-1.1）、@fontsource-variable/source-sans-3（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 react-ts 模板通过 npm create vite@latest 脚手架创建。项目根目录下有一个 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist'，sourcemap false，assetsInlineLimit 0 }。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的每种颜色以 kebab-case 键添加到 theme.extend.colors 中（warmwhite、linen、card、herb、herb-deep、herb-mist、ink、claygray、tomato、tomato-deep、rule、good），并设置 fontFamily display ['Fraunces', 'Georgia', 'serif']、sans ['Source Sans 3 Variable', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 12px，并添加 maxWidth { container: '1140px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/fraunces/500.css'、'@fontsource/fraunces/600.css'、'@fontsource/fraunces/500-italic.css' 和 '@fontsource-variable/source-sans-3'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（所有字符串、菜品、价格、营业时间和图片路径，带类型），src/lib/brand.ts（brandSlug = [BRAND] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 brandSlug + '.com'），src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键前缀为 brandSlug + ':'），src/lib/pricing.ts（纯函数：priceFor(people, meals) → { weekly, perServing }，基于基础费率）。
  - 状态：src/store/join.ts 是一个小型外部 store（useSyncExternalStore），持有 { people, meals, day, name, email, sent }，持久化到 localStorage 键 brandSlug + ':join'。
  - 组件位于 src/components/：Header.tsx、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、Footer.tsx；Hero.tsx、PlanSelector.tsx（PeoplePicker.tsx、MealsPicker.tsx、PriceReadout.tsx）、Menu.tsx（DishCard.tsx）、HowItWorks.tsx（StepCard.tsx）、Transparency.tsx、JoinForm.tsx（DayChips.tsx、Joined.tsx）、TrustStrip.tsx。src/pages/Home.tsx 组合它们。
  - 在首次构建之前，使用 curl -L -o 将资源（Assets）下列出的每张图片下载到 public/images/ 中，并使用给定的确切文件名。构建本身从不获取任何内容。
  - public/favicon.svg 如资源（Assets）下所述。index.html：lang en，<meta name='theme-color' content='#FBF7F0'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[BRAND] — [MENU_FOCUS], delivered weekly</title>。
  - 在项目根目录下编写 ASSETS.md，如资源（Assets）下所述。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张图片。保持在 10 MB 以下。

## 变量
- [BRAND] — 品牌名称（默认：“Hearth & Field”）。虚构的品牌名。用于字标、标题、页脚、电子邮件（hello@ + 不含连字符的 brandSlug + '.com'）以及 localStorage 键。绝不是真实服务。
- [CITY] — 城市（默认：“Nashville, Tennessee”）。品牌烹饪和配送的地点。用于主视觉区、配送文案和页脚。可以使用真实城市。
- [MENU_FOCUS] — 菜单重点（默认：“farm-table dinners”）。一个全小写短语，命名菜单风格。驱动标题、主视觉文案和菜品语气。保持开胃且平实。
- [PER_SERVING] — 基础每份价格（默认：“9.40”）。基础每份美元金额，以数字表示（更大套餐有折扣，在 pricing.ts 中计算）。显示时带（示例计算）标签。保持在 7–12。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/meal-kit-subscription-landing-page（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 暖白（Warm White）`#FBF7F0` — 全站页面背景。
- 亚麻色（Linen）`#F2EBDD` — 交替区块背景（菜单、信任区）、标签、悬停填充。
- 卡片白（Card）`#FFFFFF` — 菜品卡片、套餐面板、加入面板、已加入状态。
- 香草绿（Herb）`#4A6B3A` — 主色：标题强调、主按钮、选中标签、焦点环。
- 深香草绿（Herb Deep）`#37522C` — 悬停与按下状态、页脚背景。
- 香草薄雾（Herb Mist）`#E6EDDD` — 选中标签填充、图标底槽、份量圆点。
- 墨色（Ink）`#2E2B22` — 标题与正文文字、图标颜色。
- 陶土灰（Clay Gray）`#6E6858` — 次要文字、说明文字、眉题、难度圆点。
- 番茄红（Tomato）`#D6552F` — 唯一的暖色强调：加入 CTA、每份数值、日期标签激活态、focus-visible 附加样式。
- 深番茄红（Tomato Deep）`#B84320` — CTA 悬停与按下状态。
- 分隔线（Rule）`#E1D8C6` — 1px 细线、卡片边框、输入框边框、分隔线。
- 良好绿（Good）`#5E7D4E` — 信任勾选、已加入对勾、素食徽章。

### 字体排印（Typography）
- 展示字体：H1、H2、H3、菜品名称、价格、字标 — Fraunces，厨房餐桌衬线体：Fraunces (OFL)，字重 500/600
- 文本与界面：正文、眉题、按钮、表单、说明文字；价格使用等宽数字：Source Sans 3 (OFL)，字重 400/600/700

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。容器最大宽度 1140px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面端 96px、1024px 以下 72px、640px 以下 56px。字号阶梯：H1 clamp(42px, 6vw, 74px) Fraunces 500，行高 1.05；H2 clamp(28px, 3.8vw, 44px) Fraunces 500；菜品名称 Fraunces 600 20px；每份数值 Fraunces 600 40px Tomato 等宽数字；导语 Source Sans 400 17.5px / 1.65 Ink 88% 不透明度；正文 15.5px / 1.7（最大宽度 62ch）；眉题 Source Sans 700 12px 大写 字距 0.16em Clay Gray；说明文字 13px Clay Gray。按钮：高度 50px，Source Sans 700 14px。主按钮：Herb 填充，Card 文字。加入 CTA：Tomato 填充，Card 文字。次按钮：1px Herb 边框。输入框：高度 50px，1px Rule 边框，Card 填充，聚焦时 Herb 边框。全局焦点环：2px Herb 轮廓，偏移 3px。
- 圆角：卡片、按钮、输入框、标签和照片均为 12px。仅胶囊、份量圆点和日期标签使用 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现；--ease-io cubic-bezier(0.65, 0, 1, 0.35, 1) 用于套餐更新和加入切换。厨房节奏。
- 动效：显现：包裹在 <Reveal> 中的区块初始 opacity 0、translateY(12px)，当 15% 可见时（Motion whileInView，viewport once）以 700ms --ease-out 落定。同级元素错开 70ms。
- 动效：首屏：菜品照片从 1.04→1.0 缩放，历时 2200ms；H1 上升；碗上方一小缕蒸汽曲线绘制一次（减少动态效果下关闭）。
- 动效：套餐选择器：人数和餐数标签选中时从 Herb Mist→Herb 填充（150ms）；每周总计和每份数值在 450ms 内计数到新值；份量圆点（每人一个）依次弹出。
- 动效：菜单卡片：悬停上浮 3px，难度圆点变亮。
- 动效：如何运作：连接线随滚动绘制；步骤编号依次弹出。
- 动效：加入表单：日期标签选中时填充 Tomato；无效提交抖动 4px 并显示内联标签；发送时切换为已加入（320ms --ease-io）——一个绘制的 Tomato 'FIRST BOX' 印章缩放进入，'Welcome to the table, [NAME].' 套餐/日期回显并带每份行，'Edit' 预填充。持久化到 localStorage。
- 动效：链接：.link-draw 在悬停和 focus-visible 时以 280ms 生长出 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 无缩放、绘制、计数或弹出；一切静止；颜色/边框悬停保留。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：真实俯拍美食摄影，全部六张为本模板以统一风格制作：暖色陶瓷上的俯拍，香草绿和番茄红的点缀，柔和日光——仅摆盘菜品，无面孔、无手、无可读文字。每张照片使用 object-fit cover，object-position 见 Assets 部分，12px 圆角，无阴影；Warm White 上的照片加 1px Rule 轮廓。说明文字 Source Sans 13px Clay Gray。代码绘制：favicon、份量圆点、蒸汽曲线、印章和标签。图标：仅 lucide-react，描边宽度 1.75。

## 页面与区块
### 落地页（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均针对默认值编写（[BRAND] = Hearth & Field，[CITY] = Nashville, Tennessee，[MENU_FOCUS] = farm-table dinners，[PER_SERVING] = 9.40）。将每个字符串和数字放入 src/content.ts 并从中渲染。若任何变量值不同，请重写主视觉、全部六道菜、步骤、透明度文案和加入流程，使其对新品牌具体且可信，保持相同的结构和数量。所有菜品、农场和价格均为虚构，数字上带有（sample）标签。定价规则（在 pricing.ts 中）：每份基础价来自 [PER_SERVING]；4 餐时每份降价 6%，5 餐时降价 11%；每周 = 每份价 × 人数 × 餐数，四舍五入到分；显示为（sample math）。菜品（名称 · 时间 · 难度 · 备注 · 照片）：'Skillet lemon-chicken thighs' 30 min 2/4 'one pan, two lemons, zero regrets' dish-1；'Smoky mushroom risotto' 35 min 2/4 'the kind of stirring that counts as meditation' dish-2；'Seared pork chops, apples' 25 min 3/4 'fall on a plate' dish-3；'Charred broccoli pasta' 20 min 1/4 'the garlic does the talking' dish-4；'Butter-baked salmon' 25 min 2/4 'the weeknight flex' dish-5；'White bean & greens stew' 30 min 1/4 'a bowl with opinions' dish-6。步骤：'Choose your plan' 'two to six people, three to five dinners'；'Tuesday delivers' 'an insulated box at the door; the ice pack goes back out same day'；'Cook from the card' 'every ingredient pre-portioned; recipes are one card, one photo'；'Pause anytime' 'skipping a week or cancelling is two clicks — no phone calls, no retention maze'。信任：'Pause or cancel anytime'；'100% recyclable box (sample)'；'Farms within a day''s drive (sample)'；'Leftover-friendly portions'。
   布局：不适用
   动效：不适用
2. **页眉** — 左侧：字标 '[BRAND]'（Fraunces 600 19px），下方为 'Weekly [MENU_FOCUS] · [CITY]'（10px 大写 Clay Gray），链接至 ./index.html。右侧导航（Source Sans 600 14px）：'Plans' → #plan，'This week' → #menu，'How it works' → #how；一个小号 Tomato 色 'Join' → #join。760px 以下：字标 + 加入按钮。
   布局：吸顶，高度 70px，Warm White/95% 模糊，Rule 边框。
3. **主视觉** — 两栏。左侧：眉题 'FARM-TABLE · WEEKLY · [CITY]'；H1 'Dinner decided' / '*before you''re hungry.*' 导语（最大宽度 480px）：'[BRAND] delivers [MENU_FOCUS] as ready-to-cook kits — chopped, portioned and carded. From $[PER_SERVING] a serving (sample), pauses when you''re away.' 主按钮 'Build your plan' → #plan，次按钮 'See this week' → #menu。右侧：dish-1.webp（4:3），配文 'Tuesday''s skillet, plated'。
   布局：Warm White 背景，顶部垂直内边距 100px；左侧 6 列，右侧 5 列偏移 1。
4. **方案选择器** — 区块 id='plan'。眉题 'THE PLAN'，H2 'PICK PEOPLE × DINNERS.' PlanSelector 位于 Card 上：PeoplePicker（2 / 4 / 6 选项块，带份量点）× MealsPicker（3 / 4 / 5 选项块）；PriceReadout：每份价（Tomato 40px 等宽数字）和每周总价，两者在变更时计数动画，带（sample math）说明；一条注释 'Per-serving drops as plans grow; delivery is included'。一个 Tomato 色 'Join with this plan' → #join 携带所选方案。
   布局：Linen 背景。面板最大宽度 680px；选项块两列换行；读数区以细线分隔。
5. **本周菜单** — 区块 id='menu'。眉题 'THIS WEEK'，H2 'SIX DINNERS, ONE CARD EACH.' DishCards（照片 4:3、名称、时间 + 难度点、一行备注）；说明文字：'Menus rotate weekly; this one''s real until it isn''t (sample).'
   布局：Warm White 背景。3x2 网格，间距 20px（900px 以下 2 列，640px 以下 1 列）。
6. **运作方式、透明度、信任** — 区块 id='how'。眉题 'HOW IT GOES'，H2 'BOX TO TABLE.' 四个 StepCards，带连接线。Transparency 区块位于 Linen 上：一份简明分解（'$[PER_SERVING] per serving at the base plan; −6% at 4 dinners, −11% at 5 (sample math)'），并用一句话说明包含内容（'ice pack, recipe cards, every chop'）。TrustStrip：四项名单勾选。加入区块（#join）：JoinForm 位于 Card 上 — 方案回显（可内联编辑的选项块）、DayChips（Tue / Fri）、姓名 + 邮箱；Tomato 色 'Join this week'，配文 'Saved in this browser — the real page starts a subscription. Nothing is sent here.' 已加入状态：FIRST BOX 印章、'Welcome to the table, [NAME].' 方案 + 日期回显、'Edit' 预填。持久化于 localStorage。页脚（Herb Deep，骨白文字）：字标、'[MENU_FOCUS] weekly · [CITY]'、hello@ + emailDomain；底行 '© [BRAND]. Prices are sample math; the leftovers are real.'
   布局：运作方式最大宽度 860px；透明度两栏；信任为细线行；加入面板最大宽度 620px；页脚三部分。

## 资源

- 图片：为本设计制作的模板照片（可随模板自由再分发）。用 curl -L -o 将每张图片下载到 public/images/：https://media.vibefather.ai/assets/aaa5d987-b7ed-410b-9e03-c8318f0eae5e/dish-1.webp → public/images/dish-1.webp（Hero、菜单卡片 1；object-position 50% 50%；alt 'Overhead skillet chicken thighs with lemons on ceramic'）；https://media.vibefather.ai/assets/aaa5d987-b7ed-410b-9e03-c8318f0eae5e/dish-2.webp → public/images/dish-2.webp（alt 'Overhead mushroom risotto in a ceramic bowl'）；https://media.vibefather.ai/assets/aaa5d987-b7ed-410b-9e03-c8318f0eae5e/dish-3.webp → public/images/dish-3.webp（alt 'Overhead seared pork chops with apple slices'）；https://media.vibefather.ai/assets/aaa5d987-b7ed-410b-9e03-c8318f0eae5e/dish-4.webp → public/images/dish-4.webp（alt 'Overhead charred broccoli pasta with chili'）；https://media.vibefather.ai/assets/aaa5d987-b7ed-410b-9e03-c8318f0eae5e/dish-5.webp → public/images/dish-5.webp（alt 'Overhead butter-baked salmon with herbs'）；https://media.vibefather.ai/assets/aaa5d987-b7ed-410b-9e03-c8318f0eae5e/dish-6.webp → public/images/dish-6.webp（alt 'Overhead white bean and greens stew'）。共六个文件。
- 图片：在项目根目录写入 ASSETS.md，包含一个表格：路径、来源 URL、作者、许可证——每张照片一行（来源 'media.vibefather.ai, made for this template'，作者 'VibeFather'，许可证 'Distributed with the template'），另加 @fontsource/fraunces 和 @fontsource-variable/source-sans-3（OFL-1.1）以及 lucide-react（ISC）的行。任何照片中不得出现人脸或手；切勿替换为图库照片。
- 图标：仅使用 lucide-react：Users、UtensilsCrossed、Truck、Clock、Leaf、Check、Snowflake、Pause、ArrowRight。描边宽度 1.75，16–24px，颜色继承。份量圆点、难度圆点、蒸汽波浪线、FIRST BOX 印章和 favicon 为绘制的 SVG。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的 rect，rx 8，填充 #4A6B3A，一个 Card（#FFFFFF）碗形符号，带一条 Tomato（#D6552F）蒸汽线。无其他标志：品牌名称始终以文字排版呈现。
- 字体：安装 @fontsource/fraunces 和 @fontsource-variable/source-sans-3，并按 Setup 中所述在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包进 dist/。
- 图片：在代码中绘制：份量圆点、难度圆点、蒸汽波浪线、印章、标签和 favicon。除六张照片外无其他位图；无插图；无地图瓦片。

## 禁止事项
- 无后端、无表单提交、无 API 请求、无支付或订阅：加入流程仅在浏览器中保存（localStorage），并明确说明这一点。
- 此单页上的所有链接均为锚点（./index.html#plan、#menu、#how、#join）以及页脚的 mailto。
- 不使用真实餐包品牌或其包装；价格和每份计算均为虚构并标注（sample）；不声称真实农场或配送覆盖范围。
- 全部自托管：字体通过 Fontsource，图标使用 npm 包或内联 SVG，图片下载至 public/images/。不使用 CDN <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具。
- 生产构建：压缩，无 source map，不将 src/ 复制到 dist/，单条命令 npm run build，输出在 dist/ 下，小于 10 MB。
- 任何照片中不得出现人脸或手；仅限装盘菜品。
- 任何地方不出现日期或年份；日期标签为星期名称；菜单为“本周”且不含日期；网站从不显示今天的日期。
- 除页脚可选的署名链接外，网站内绝不提及 VibeFather 或任何其他品牌；所有文案均为虚构的美式英语。
- 尊重 prefers-reduced-motion：无缩放、绘制、计数或弹出效果；一切静止；颜色/边框悬停效果保留。
- 页面必须在 1440x900 桌面端和 390x844 移动端正常工作，控制台零错误；标签和表单仅用键盘即可操作，并有可见的焦点环。
- 保持文案厨房温暖感：无 lorem，无“chef-inspired”；每道菜、价格和步骤均位于 src/content.ts 中。

---
— Prompt by VibeFather · https://vibefather.ai/t/meal-kit-subscription-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
