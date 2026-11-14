> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 食谱博客网站

完全按照下面的描述构建这个网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个由 [COOK] 制作的双页食谱博客，[COOK] 是一位家庭厨师，写作主题是 [ANGLE]：一个可筛选的家庭食谱网格，以及食谱页面（?r=<slug>），带有实时份量缩放器、食材清单、分步计时器、打印视图、厨师简介区块和一句诚实的订阅文案。页面：index.html、recipe.html?r=<slug>（第一个食谱不带参数）。一切都在浏览器中运行；不会向任何地方提交数据。

- 受众：今晚就要做饭的人，手机靠在面粉罐上：他们点两下就能缩放份量，购物时逐项勾选食材，不用离开页面就能设置计时器。
- 目标：做出这道菜。访客在十秒内看到一道自己愿意吃的菜；在两分钟内把食谱缩放到四人份并启动一个计时器。
- 语气：餐桌旁的温暖：每个食谱配一个小故事，精确到克，不啰嗦。关于洗碗开一个玩笑。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/fraunces（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 npm create vite@latest 并选择 react-ts 模板进行脚手架搭建（如果最新模板面向更新的主版本，请固定版本）。项目根目录下有两个真实的 HTML 页面：index.html（入口 src/main-index.tsx）、recipe.html（入口 src/main-recipe.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0, rollupOptions { input { index: resolve(__dirname, 'index.html'), recipe: resolve(__dirname, 'recipe.html') } } }。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './recipe.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的所有颜色添加到 theme.extend.colors 中，使用 kebab-case 键名（cream、panel、line、ink、softink、tomato、tomato-deep、tomato-mist、sage、slateink、good），并设置 fontFamily display ['Fraunces', 'Georgia', 'serif']、sans ['Inter Variable', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设置为 12px，并添加 maxWidth { container: '1200px', read: '760px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/fraunces/400.css'、'@fontsource/fraunces/600.css'、'@fontsource/fraunces/400-italic.css' 和 '@fontsource-variable/inter'；从两个入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（厨师档案、食谱 — { slug, title, blurb, course: 'mains'|'pasta'|'salads'|'baking', diets: string[], time: minutes, difficulty: 'easy'|'medium', serves, heroImage, heroAlt, story: string[], ingredients: { qty?: number, unit?: string, item: string }[], steps: { text, minutes?: number }[] }，每个字符串都有类型）、src/lib/brand.ts（cookSlug = [COOK] 转为小写，并将每一段非字母数字字符替换为 '-'，emailDomain = cookSlug 去掉连字符 + '.com'）、src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键为 cookSlug + ':checks:<recipe>' 和 ':sub'）、src/lib/scale.ts（scaleQty(qty, factor) 带有合理的舍入 — 克和毫升在接近 10 时取整数，勺取半，可计数取整数；绝不渲染 0.87 个鸡蛋）、src/lib/route.ts（读取 ?r=，解析或回退到第一个食谱 — 绝不出现未找到）。
  - 状态：src/store/checks.ts 是一个小型外部存储（useSyncExternalStore），保存每个食谱已勾选的食材索引，持久化到 localStorage；src/store/timers.ts 保存每步计时器状态 { remaining, running }，由一个 1 秒间隔驱动（滴答是信息性的 — 它在减少动态效果下继续，无动画）；src/store/sub.ts 保存订阅行状态。
  - 组件位于 src/components/：Header.tsx、Footer.tsx、SubscribeLine.tsx；首页：LeadCard.tsx、FiltersBar.tsx（CourseChips、DietChips）、RecipeGrid.tsx（RecipeCard.tsx 带有 TimeChip.tsx、DifficultyDots.tsx、DietTag.tsx）、AboutCook.tsx；食谱页：RecipeHero.tsx、ServingsScaler.tsx（步进器 +/-）、IngredientList.tsx（CheckRow.tsx）、MethodList.tsx（StepRow.tsx 带有 StepTimer.tsx）、PrintButton.tsx、RelatedRecipes.tsx。页面：src/pages/Home.tsx、Recipe.tsx。
  - ServingsScaler：一个步进器（− / 数量 / +，范围 1–12），带有实时标签 'Serves 4'；随着步进器移动，每个食材数量通过 scaleQty 重新计算；无法取分数的项目向上取整，数量高亮一次（140ms 弹出）。
  - StepTimer：当步骤有分钟数时，旁边的标签 '12 min' 在点击时启动计时器 — 标签变为等宽倒计时（mm:ss），带有暂停/重置；归零时翻转为 Good 的 'Done — check it' 状态，并带有一次轻柔的环形动画（在减少动态效果下跳过）。
  - 打印视图：专用的打印样式表（index.css 中的 @media print），隐藏页眉、筛选器、计时器 UI、缩放步进器和页脚，并将食谱输出为一张干净的纸：标题、元信息行、两栏食材、编号步骤；页边距 15mm。PrintButton（window.print()）位于食谱页眉中。
  - 在首次构建之前，使用 curl -L -o 将资源（Assets）下列出的每张图片下载到 public/images/ 中，使用给定的确切文件名。构建本身从不获取任何内容。
  - public/favicon.svg 如资源（Assets）下所述。index.html：lang en，<meta name='theme-color' content='#FBF6EC'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[COOK] — recipes</title>；recipe.html 在加载时设置 document.title。
  - 在项目根目录下编写 ASSETS.md，如资源（Assets）下所述。
  - dist/ 包含两个 HTML 文件、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张图片。保持在 9 MB 以下。

## 变量
- [COOK] — 厨师姓名（默认："June Halloran"）。虚构厨师的姓名。用于字标、关于区块、页脚和电子邮件（hello@ + cookSlug 去掉连字符 + '.com'）。绝不是真实厨师或美食作家。
- [ANGLE] — 博客角度（默认："weeknight cooking that survives a Tuesday"）。一个小写短语，命名博客的角度。重写主视觉文案、关于区块和每个食谱的故事，使其契合。保持具体。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接指向 https://vibefather.ai/t/recipe-blog-website（默认：是；删除此行以移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 奶油色（Cream）`#FBF6EC` — 全站页面背景 — 温暖的厨房光线。
- 面板色（Panel）`#FFFFFF` — 卡片、食材面板、份量调节器。
- 线条色（Line）`#E7DECB` — 1px 细线：卡片边框、分隔线、已勾选行。
- 墨色（Ink）`#26221A` — 标题与正文文字、图标。
- 柔墨色（Soft Ink）`#6E6656` — 简介、元信息、说明文字、眉题。
- 番茄色（Tomato）`#C8442E` — 唯一强调色：主按钮、激活的标签片、勾选标记、计时器运行中、焦点环、链接。
- 深番茄色（Tomato Deep）`#A63623` — 主按钮的悬停与按下态。
- 番茄雾色（Tomato Mist）`#F9E8E1` — 选中标签片的填充、饮食标签、计时器完成态的底色。
- 鼠尾草色（Sage）`#7C8A5A` — 饮食标签绿色（素食）、难度圆点的填充态。
- 石板墨色（Slate Ink）`#231109` — 番茄色填充上的文字。
- 成功色（Good）`#4C8A54` — 计时器完成、订阅成功、勾选标记。

### 字体排印
- 展示字体：H1、食谱标题、字标、斜体故事行 — Fraunces，温暖的厨房衬线体：Fraunces (OFL)，字重 400/600
- 文本与界面：正文、步骤、表单、计时器；数量与倒计时使用等宽数字：Inter (OFL)，字重 400/500/600

### 布局与动效
- 间距：8px 基准单位。容器最大宽度 1200px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px；阅读栏最大 760px。区块垂直内边距桌面端 88px、1024px 以下 64px、640px 以下 48px。字号阶梯：H1 clamp(34px, 4.8vw, 58px) Fraunces 600，行高 1.06；食谱标题 clamp(28px, 3.8vw, 44px) Fraunces 600；卡片标题 Fraunces 600 20px；导语 17px Inter 400 / 1.65，宽度 90%；正文 15.5px / 1.7；故事段落 Fraunces 斜体 18px / 1.7；眉题 12px 600 大写 字距 0.14em 柔墨色；元信息与说明文字 13px 柔墨色；数量 Inter 600 15px 等宽数字。按钮：高度 46px，Inter 600 14px；主按钮番茄色填充配白色文字，幽灵按钮为面板色上的 1px 线条色边框。输入框：高度 46px，面板色填充，1px 线条色边框，聚焦时番茄色边框 + 2px 偏移环。全局焦点：2px 番茄色轮廓，3px 偏移。
- 圆角：卡片与面板 12px；按钮、输入框、标签片 10px；胶囊与计时器标签片 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1)。厨房式平静：快速、小幅移动。
- 动效：显现：卡片与区块进入时在 500ms 内上浮 10px（Motion whileInView，仅一次）；网格每张卡片错开 50ms。
- 动效：LeadCard：其照片在 1200ms 内从 scale 1.02 落定，仅一次。
- 动效：筛选：标签片以 140ms 缓动填充番茄雾色；被筛掉的卡片变暗 20% 并下沉 2px（180ms）；计数行交叉淡入淡出。
- 动效：ServingsScaler：数量变化交叉淡入淡出 120ms；向上取整的条目其计数弹跳一次（140ms）。
- 动效：CheckRow：勾选标记绘制（SVG 描边，160ms），文字呈现柔和删除线；取消勾选则反向。
- 动效：StepTimer：倒计时的数字无动画切换（等宽宽度保持）；“Done”将标签片翻转为番茄雾色并伴随单次环形脉冲（在减少动态效果下跳过）。
- 动效：订阅：交叉淡入淡出至成功色行（240ms）。
- 动效：链接：.link-draw 在悬停与 focus-visible 时以 240ms 生长出 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 无显现、落定、弹跳或脉冲；勾选标记继续计数（信息性）；颜色/边框悬停保留。在 index.css 中使用 CSS @media 以及 Motion 的 useReducedMotion。
- 图像：为本模板制作的六张编辑风格食物照片，风格统一：自然日光、亚麻与陶瓷表面、完成的家庭菜肴 — 一道炖番茄黄油意面、一盘烤鸡、一碗谷物沙拉、一锅绿叶煎蛋、一片李子蛋糕。无人物（厨师的肖像除外），无可读文字，无标识，无品牌包装。厨师肖像为 AI 生成的虚构人物（一位 30 多岁的女性在厨房台面前，自然工作照，不似任何真实个人）。照片 object-fit cover，12px 圆角；卡片加 1px 线条色轮廓。图标：仅 lucide-react，描边宽度 1.75。favicon 为绘制的 SVG。

## 页面与区块
### 食谱首页（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值撰写（[COOK] = June Halloran，[ANGLE] = weeknight cooking that survives a Tuesday）。将每个字符串、食谱和步骤都放入 src/content.ts 并从中渲染。若任何变量不同，请重写主视觉文案、关于区块、全部六个食谱（标题、故事、食材、步骤），使其对该博客具体且可信，同时保持相同结构和数量（5 个食谱，每个 6–9 种食材，每个 4–6 个步骤，至少四个步骤带有计时分钟数）。食谱（slug · 标题 · 类别 · 饮食 · 时间 · 难度 · 份数 · 图片）：'tomato-butter-pasta' 'Tomato Butter Pasta for Tired People' pasta ['vegetarian'] 25 easy 4 pasta.webp；'sheet-pan-chicken' 'Sheet-Pan Chicken, Two Lemons' mains [] 50 easy 4 chicken.webp；'farro-salad' 'Farro Salad with Everything Green' salads ['vegetarian'] 35 medium 4 salad.webp；'greens-eggs' 'Greens and Eggs, One Skillet' mains ['vegetarian','gluten-free'] 20 easy 2 skillet.webp；'plum-cake' 'Brown Butter Plum Cake' baking ['vegetarian'] 65 medium 8 cake.webp。每个食谱的故事：2 段简短的 Fraunces 斜体段落，以厨师的语气撰写（示例：意面的故事以 'The title is the recipe.' 开头）。食材以克/毫升/可计数单位表示，以便份量缩放器发挥作用（例如 400 g rigatoni；60 g butter；3 cloves garlic；1 lemon）。步骤在需要计时器处标注分钟数（例如意面：'boil the pasta 11 min'，'crisp the butter 3 min'）。所有数量、时间和故事均为虚构的示例内容。AboutCook：肖像、'[COOK]'（Fraunces 600 22px）、一行 'Home cook. Writes about [ANGLE].' 以及两句话（'I cook in a small kitchen with one good knife and strong opinions about Tuesday.' / 'Everything here is tested at least twice — once for us, once for you (sample).'），外加 SubscribeLine。
   布局：不适用
   动效：不适用
2. **页头** — 左侧：字标 '[COOK]'（Fraunces 600 20px），其下为 'RECIPES · [ANGLE]'（10px 大写 Soft Ink）。右侧（Inter 500 14px）：'Recipes' → #recipes，'About' → #about。低于 720px：仅显示字标。
   布局：吸顶，64px，Cream 95% 带背景模糊，Line 底边框。
3. **主视觉与引导卡片** — 眉题 'COOKED THIS WEEK'；H1 'Dinner, without the drama.'；导语 'Five recipes that respect a weeknight — exact grams, honest times, and one pan where one pan will do.' LeadCard（tomato-butter-pasta）：左侧宽幅 16:9 照片（7 列），右侧食谱区块（5 列）——类别标签、标题（Fraunces 600 34px）、简介、元信息行（TimeChip 25 min · DifficultyDots easy · Serves 4 · DietTag vegetarian）、主按钮 'Cook this one' → ./recipe.html?r=tomato-butter-pasta，以及幽灵按钮 'Jump to all recipes' → #recipes。
   布局：Cream 背景；LeadCard 为 Panel 卡片，Line 边框，16px 圆角；顶部内边距 96px。
4. **带筛选的食谱网格** — 区块 id='recipes'。眉题 'THE RECIPE BOX'；H2 'Five keepers, filterable.' FiltersBar：CourseChips（All / Mains / Pasta / Salads / Baking）和 DietChips（Vegetarian / Gluten-free），饮食多选，类别单选；计数行 'Showing 5 of 5'。RecipeGrid：3 列 RecipeCards（5 张卡片）（照片 4:3、类别标签、标题、简介、含 TimeChip 和 DifficultyDots 及 DietTags 的元信息行），链接到食谱页面。
   布局：Cream 背景；3 列 24px 间距（低于 1000px 为 2 列，低于 640px 为 1 列）。
5. **关于与页脚** — 区块 id='about'：肖像（3:4，4 列），配文 'June, mid-tasting (fictional cook, real opinions)'；简介区块（7 列，偏移 1）按名册撰写，以 SubscribeLine 结尾（'One email when a new keeper lands' — 输入框 + 'Subscribe'，小字 'Demo: saved in this browser only'，成功 Good 行）。页脚：左侧字标 + 'hello@' + emailDomain；右侧 '© [COOK]. Recipes are invented sample content — cook them anyway.' 以及 'Built with a VibeFather template' 链接到 https://vibefather.ai。
   布局：关于为两栏；页脚 72px，Line 顶边框。

### 食谱（`recipe.html`）
1. **食谱视图** — 读取 ?r=<slug>；无查询参数时渲染第一个食谱（tomato-butter-pasta）。RecipeHero：面包屑 '← All recipes' → ./index.html#recipes；标题（H1）；元信息行（TimeChip · DifficultyDots · Serves base · DietTags）；故事段落（Fraunces 斜体）；PrintButton（幽灵按钮，'Print this recipe'）右对齐。下方为 5:7 分栏：IngredientList（桌面端吸顶）——顶部为 ServingsScaler，然后是 CheckRows（'400 g' 等宽数字 + 条目）、'Clear checks' 幽灵链接，以及脚注 'Checks save in this browser'；MethodList——StepRows（编号 01–06、文本、有分钟数时显示 StepTimer 标签），最后一行以洗碗玩笑收尾（'Done. The dishes still exist — sorry.'）。底部 RelatedRecipes：'Also good'——三张来自其余食谱的 RecipeCards。加载时根据食谱标题设置 document.title。
   布局：Cream 背景；食材 5 列（吸顶，Panel 卡片），步骤 7 列；低于 900px 时堆叠，食材在前；页脚同首页。

## 资源

- 图片：为本设计制作的模板照片（可随模板自由再分发），统一为厨房编辑风格：自然日光、亚麻与陶瓷，无可读文字、无标识、无人物。用 curl -L -o 将每张图片下载到 public/images/：https://media.vibefather.ai/assets/d17895a8-3d7c-4ccb-aa04-bff0648842dc/pasta.webp → public/images/pasta.webp（主图 + 食谱主视觉；alt 'Tomato butter pasta in a ceramic bowl'）；https://media.vibefather.ai/assets/d17895a8-3d7c-4ccb-aa04-bff0648842dc/chicken.webp → public/images/chicken.webp（烤盘鸡肉卡片 + 主视觉；alt 'Roast chicken with lemons on a sheet pan'）；https://media.vibefather.ai/assets/d17895a8-3d7c-4ccb-aa04-bff0648842dc/salad.webp → public/images/salad.webp（法罗沙拉卡片 + 主视觉；alt 'A grain salad with herbs and greens'）；https://media.vibefather.ai/assets/d17895a8-3d7c-4ccb-aa04-bff0648842dc/skillet.webp → public/images/skillet.webp（青菜鸡蛋卡片 + 主视觉；alt 'Greens and eggs in a cast-iron skillet'）；https://media.vibefather.ai/assets/d17895a8-3d7c-4ccb-aa04-bff0648842dc/cake.webp → public/images/cake.webp（李子蛋糕卡片与主视觉；alt 'A slice of plum cake on a ceramic plate'）；https://media.vibefather.ai/assets/d17895a8-3d7c-4ccb-aa04-bff0648842dc/cook-portrait.webp → public/images/cook-portrait.webp（关于区块；alt 'Portrait of the cook at her kitchen counter'）。共六个文件；该人像为 AI 生成的虚构人物，与任何真实个人无关。
- 图片：在项目根目录写入 ASSETS.md，包含一张表格：路径、来源 URL、作者、许可证——每张照片一行（来源 'media.vibefather.ai, made for this template'，作者 'VibeFather'，许可证 'Distributed with the template'），另加 @fontsource/fraunces 与 @fontsource-variable/inter（OFL-1.1）以及 lucide-react（ISC）的行。注明厨师人像为 AI 生成的虚构人物，食谱为虚构的原创内容。
- 图标：仅使用 lucide-react：ArrowLeft、Check、Clock、Minus、Pause、Play、Plus、Printer、RotateCcw、Timer。描边宽度 1.75，14–22px，颜色继承。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的圆角方块填充 #C8442E，一个白色绘制的锅形图标带锅盖把手。无品牌标识。
- 字体：安装 @fontsource/fraunces 与 @fontsource-variable/inter，并按 Setup 中所列在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包进 dist/。
- 图片：以代码绘制：对勾、难度圆点、计时器标签、favicon。除这七张照片外不使用其他位图。

## 不要做
- 不要后端、不要表单提交、不要向 API 发起 fetch 请求：勾选状态、计时器状态和订阅行仅持久化在 localStorage 中，且文案需说明这一点；打印功能通过样式表实现，而非服务。
- 每个内部链接都指向文件名或锚点（./index.html、./index.html#recipes、./recipe.html?r=plum-cake）——绝不指向裸目录；recipe.html 不带查询参数时显示第一个食谱，绝不报错。
- 不要使用真实的美食博主、厨师、出版物或其食谱；所有食谱、故事、用量和时间均为虚构原创，使用普通技法。
- 不要营养或健康声明；不要医学用语；'gluten-free' 仅作为食谱标签出现在不含麸质成分的食谱上。
- 厨师肖像为 AI 生成的虚构人物，不 resemblance 任何真实个体；其他照片不含人物、无可读文字、无标识、无品牌包装。
- 不要使用真实时钟的日期或时间戳（'Cooked this week' 为静态示例文案）；任何内容都不打印今天的日期或年份。
- 一切自托管：字体通过 Fontsource，图标作为 npm 包或内联 SVG，图片下载到 public/images/。不要 CDN 的 <script> 或 <link> 标签，不要 Google Fonts，不要分析工具。
- 生产构建：压缩、无 source map、不将 src/ 复制到 dist/、单条命令 npm run build、输出在 dist/ 下且小于 9 MB。
- 除页脚署名链接外，绝不在站内提及 VibeFather；所有文案均为虚构的美式英语。
- 尊重 prefers-reduced-motion：不要出现显现、弹出或脉冲动画；计时器继续计数并翻动数字（信息性）；颜色/边框悬停效果保留。
- 网站必须在 1440x900 桌面端和 390x844 移动端正常工作，控制台零错误；缩放器、勾选、计时器、打印和筛选器仅用键盘即可操作，且焦点环可见。
- 缩放时保持用量合理：绝不要 0.87 个鸡蛋或 13 g 藏红花——scaleQty 将可数项四舍五入为整数，小用量香料设有合理上限；每个字符串都存放在 src/content.ts 中。

---
— Prompt by VibeFather · https://vibefather.ai/t/recipe-blog-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
