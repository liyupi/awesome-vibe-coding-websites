> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 护肤品牌商店

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的单页商店，这是一个小型护肤品牌，专注于 [SKIN_FOCUS]，以 [HERO_NOTE] 著称。它必须给人一种药剂师柜台的感觉：一个护肤流程构建测验（四个问题 → 一套 3 步流程）、六款含活性成分的产品、一个包含成分与使用方法的商品详情、两个套装、一份成分术语表，以及一个在客户端确认的购物车抽屉。单页：index.html，包含各区块（#quiz、#products、#bundles、#ingredients）。商品详情以查询参数打开（?p=<slug>，无参数时显示第一款产品）。一切都在浏览器中运行；不会向任何地方提交或收费。

- 受众：22–45 岁、懂成分的买家，他们看标签、不信任营销话术：他们要的是活性成分、浓度和理由，而且他们会买整套流程，而不是奇迹单品。
- 目标：卖出整套流程。访客在十秒内看到质地和测验 CTA；在两分钟内回答四个问题，并将三款产品加入购物车。
- 语气：药剂师式的平静：简短、陈述事实的句子，标明浓度和活性成分名称，外加一个关于 12 步流程的冷面笑话。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（MIT）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/cormorant-garamond（OFL-1.1）、@fontsource-variable/work-sans（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 npm create vite@latest 以 react-ts 模板搭建脚手架。项目根目录下有一个 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将 Design 下的每种颜色以 kebab-case 键添加到 theme.extend.colors（bone、clay、card、olive-ink、olive-deep、olive-mist、ink、umber、blush、blush-deep、rule、good），并设置 fontFamily display ['Cormorant Garamond', 'Georgia', 'serif']、sans ['Work Sans Variable', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 2px，并添加 maxWidth { container: '1120px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/cormorant-garamond/500.css'、'@fontsource/cormorant-garamond/600.css'、'@fontsource/cormorant-garamond/500-italic.css' 和 '@fontsource-variable/work-sans'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（每个字符串、产品、成分、测验问题、套装、营业时间和图片路径，均带类型），src/lib/brand.ts（brandSlug = [BRAND] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 brandSlug + '.com'），src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键前缀为 brandSlug + ':'），src/lib/quiz.ts（recommend({skin, concern, time, scent}) → 根据名册规则返回三个产品 slug），src/lib/product.ts（读取 ?p=<slug>，返回该产品或第一个产品——绝不返回未找到）。
  - 状态：src/store/cart.ts 是一个小型外部 store（useSyncExternalStore），保存行项 { slug, qty } 以及抽屉打开状态，持久化到 localStorage 键 brandSlug + ':cart'。
  - src/components/ 中的组件：Header.tsx（含 CartButton）、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、Footer.tsx、CartDrawer.tsx（LineRow.tsx）；Hero.tsx、Quiz.tsx（QuestionStepper.tsx、ResultPanel.tsx）、Products.tsx（ProductCard.tsx）、ProductDetail.tsx（IngredientList.tsx、HowToUse.tsx、TextureFigure.tsx）、Bundles.tsx（BundleCard.tsx）、Glossary.tsx（ActiveCard.tsx）、Promise.tsx。src/pages/Home.tsx 将它们组合起来。
  - 在首次构建之前，使用 curl -L -o 和给定的确切文件名，将 Assets 下列出的每张图片下载到 public/images/。构建本身从不获取任何内容。
  - public/favicon.svg 如 Assets 下所述。index.html：lang en，<meta name='theme-color' content='#F6F1E7'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[BRAND] — [SKIN_FOCUS], made simply</title>。
  - 在项目根目录下按 Assets 下所述编写 ASSETS.md。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张图片。保持在 10 MB 以下。

## 变量
- [BRAND] — 品牌名称（默认："Meridian Botanics"）。虚构的品牌名称。用于字标、标题、页脚、电子邮件（hello@ + 不含连字符的 brandSlug + '.com'）以及 localStorage 键。绝不使用真实品牌。
- [CITY] — 城市（默认："Portland, Oregon"）。品牌进行调配和发货的地点。用于主视觉文案、关于条带和页脚。可以使用真实城市。
- [SKIN_FOCUS] — 护肤重点（默认："barrier-first skincare"）。一个全小写短语，命名品牌的理念。驱动主视觉文案、测验语气和术语表引言。保持用词平实。
- [HERO_NOTE] — 主视觉备注（默认："six ingredients, all pronounceable"）。一句简短的可信度文案（[HERO_NOTE]）。用于主视觉 H1 下方，并在关于条带中出现一次。保持具体。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/skincare-brand-shop（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值撰写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 骨白（Bone）`#F6F1E7` — 全站页面背景。
- 陶土（Clay）`#EDE5D6` — 交替区块背景（产品、术语表）、标签、悬停填充。
- 卡片（Card）`#FFFEFA` — 产品卡片、测验面板、购物车抽屉。
- 橄榄墨（Olive Ink）`#3B4231` — 标题与正文墨色、主按钮、焦点环。
- 深橄榄（Olive Deep）`#2B3125` — 悬停与按下状态、页脚背景。
- 橄榄雾（Olive Mist）`#E5E9DD` — 选中标签填充、图标槽、激活的测验步骤。
- 墨色（Ink）`#2C2A24` — 次级标题墨色、图标颜色。
- 赭石（Umber）`#6E6656` — 次级文本、说明文字、眉题、成分尾注。
- 腮红（Blush）`#D9A795` — 唯一的暖色点缀：价格、测验高亮、激活的成分圆点、focus-visible 附加样式。
- 深腮红（Blush Deep）`#C08A75` — 悬停与按下状态。
- 分隔线（Rule）`#DFD7C5` — 1px 细线、卡片边框、输入框边框、抽屉分隔线。
- 良好（Good）`#5F7D5A` — 购物车勾选、纯素徽章、库存提示。

### 字体排印
- 展示字体：H1、H2、产品名称、价格、字标 — Cormorant Garamond，药剂师衬线体：Cormorant Garamond（OFL），字重 500/600
- 文本与界面：正文、眉题、按钮、测验选项、表单、说明文字；价格使用等宽数字：Work Sans（OFL），字重 400/500/600

### 布局与动效
- 间距：8px 基准单位。容器最大宽度 1120px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面端 100px、1024px 以下 76px、640px 以下 60px — 药剂师般的从容。字号比例：H1 clamp(42px, 6.2vw, 78px) Cormorant 500，行高 1.05；H2 clamp(28px, 3.8vw, 44px) Cormorant 500；产品名称 Cormorant 600 24px；价格 Cormorant 600 26px Blush 等宽数字；导语 Work Sans 400 17.5px / 1.65 Olive Ink 88% 不透明度；正文 15.5px / 1.7（最大宽度 62ch）；眉题 Work Sans 600 12px 大写 字距 0.18em Umber；说明文字 13px Umber。按钮：高度 50px，Work Sans 600 14px。主按钮：Olive Ink 填充，Card 文字。测验 CTA：Blush Deep 填充，Card 文字。次级按钮：1px Olive Ink 边框。输入框：高度 50px，1px Rule 边框，Card 填充，聚焦时 Olive Ink 边框。全局焦点环：2px Olive Ink 轮廓，偏移 3px。
- 圆角：卡片、按钮、输入框、标签和照片均为 2px — 瓶标边角。仅药丸、标签和购物车徽章使用 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现和测验步骤；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于抽屉和详情切换。缓慢而笃定 — 如同良好的乳化。
- 动效：显现：包裹在 <Reveal> 中的区块从 opacity 0、translateY(12px) 开始，在 15% 可见时以 750ms --ease-out 稳定下来（Motion whileInView，viewport once）。同级元素错开 75ms。
- 动效：首屏：纹理照片从 1.04→1.0 缩放，历时 2400ms；H1 上升；眉题旁的手绘枝条绘制一次。
- 动效：测验：步骤水平滑动 16px，280ms --ease-io（AnimatePresence mode 'wait'）；选项标签选中时从 Olive Mist→Olive Ink 填充（150ms）；ResultPanel 的三个产品以 90ms 错开进入，价格递增计数。
- 动效：产品卡片：悬停上浮 3px，激活圆点变亮；点击在原位交叉淡入打开详情视图。
- 动效：产品详情：成分列表行错开 40ms；色板/纹理图交叉淡入。
- 动效：购物车：添加时徽章弹跳 1→1.3→1；抽屉从右侧滑入 420ms --ease-out；数量变化时小计在 300ms 内计数；结账存根以手绘 Blush 'ORDER NOTES' 印章确认（此演示本地存储）。
- 动效：链接：.link-draw 在悬停和 focus-visible 时以 280ms 生长出 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 无缩放、错开显现或计数；一切静止；颜色/边框悬停保留。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：真实摄影，全部六张为本模板以统一风格制作：骨白浅色药剂师风格，玻璃与陶土，石板上的纹理特写。绝不出现面部或皮肤特写 — 仅瓶子、滴管、滴液和色板。无可读文字或标志。每张照片使用 object-fit cover，object-position 见资源部分，2px 圆角，无阴影；Bone 上的照片获得 1px Rule 轮廓。说明文字 Work Sans 13px Umber。代码绘制：favicon、枝条点缀、激活圆点、测验步骤标记、印章和标签。图标：仅 lucide-react，描边宽度 1.75。

## 页面与区块
### 商店（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[BRAND] = Meridian Botanics，[CITY] = Portland, Oregon，[SKIN_FOCUS] = barrier-first skincare，[HERO_NOTE] = six ingredients, all pronounceable）。将每个字符串和数字放入 src/content.ts 并从中渲染。若任一变量值不同，请重写主视觉、全部六款产品及其成分、测验问题与推荐、套装、术语表和购物车文案，使其对新品牌具体且可信，同时保持相同结构和数量（4 个问题、6 款产品、3 步流程、2 个套装、5 种活性成分）。所有产品、活性成分和价格均为虚构；仅使用化妆品语言——不得有医疗或治疗宣称。产品（slug · 名称 · 价格 · 活性成分 · 说明）：'gentle-milk' Gentle Milk Cleanser $24 'oat lipids 3%' 'a cream-gel that removes the day without stripping the night'；'barrier-serum' Barrier Repair Serum $38 'niacinamide 5%' 'the quiet hero; calms visible redness, supports the barrier'；'petal-mist' Petal Mist Toner $22 'rose distillate' 'eight petals deep; a breath before serum'；'day-veil' Day Veil SPF Moisturizer $34 'zinc oxide 12%' 'mineral, sheer on every tone, sits under makeup'；'night-balm' Night Balm $36 'squalane 8%' 'richer than it looks; the morning mirror explains it'；'eye-cream' Sunday Eye Cream $28 'caffeine 2%' 'for mornings that start before they should'。套装：'The Core Three' $84 'cleanser, serum, SPF — save $12' 'the routine in one number'；'The Full Shelf' $158 'all six, save $24' 'for the committed and the curious'。活性成分术语表：'Niacinamide' 'calms and clarifies; the 5% here is the sweet spot'；'Squalane' 'olive-derived, skin-identical softness'；'Zinc Oxide' 'mineral sun without the ghost; 12%, sheer'；'Oat Lipids' 'soothing fats that rebuild the barrier'；'Caffeine' 'depuffs; science, not miracles'。测验问题：肤质（'Dry'、'Oily'、'Sensitive'、'Normal'）、关注点（'Redness'、'Texture'、'Dullness'、'Breakouts'）、流程（'3 minutes'、'10 minutes'、'As long as it takes'）、香味（'Unscented'、'Light botanical'、'Warm and herbal'）。
   布局：不适用
   动效：不适用
2. **页眉** — 左侧：字标 '[BRAND]'（Cormorant 600 19px），下方为 'Skincare blended in [CITY]'（10px 大写 Umber），链接至 ./index.html。右侧导航（Work Sans 500 14px）：'Build a routine' → #quiz，'Shop' → #products，'Bundles' → #bundles，'Ingredients' → #ingredients；CartButton（lucide ShoppingBag + Blush 徽标）。760px 以下：字标 + 购物车。
   布局：吸顶，高度 70px，Bone/95% 模糊，Rule 边框。
3. **主视觉** — 两栏。左侧：眉题 'BARRIER-FIRST · SMALL BATCH · [CITY]'；H1 'Skin keeps score.' / '*Feed it plainly.*' 导语（最大宽度 480px）：'[BRAND] makes [SKIN_FOCUS] — [HERO_NOTE]. No twelve-step evenings, no unpronounceable chemistry, no promises your dermatologist would raise an eyebrow at.' Blush CTA 'Build your routine' → #quiz 以及次级 'Shop products' → #products；信任行：'Fragrance optional'；'Vegan & cruelty-free'；'Recyclable glass'。右侧：texture-drop.webp（4:3），配文 'Squalane, dropping slow'。
   布局：Bone 背景，顶部垂直内边距 104px；左侧 6 列，右侧 5 列偏移 1。
4. **流程测验** — 区块 id='quiz'。眉题 'THE ROUTINE BUILDER' 和 H2 'Four questions, three products.' Quiz 卡片置于 Card 上：四个步骤带选项标签；最后一步之后为 ResultPanel：三步流程（Cleanse → Treat → Protect），含推荐产品、价格和总计（三款可一次性全部加入购物车）；配文 'Answer honestly — sensitive skin is a personality, not a flaw.' 重新测验将从头开始。
   布局：Clay 背景。面板最大宽度 720px；标签两列换行；步骤滑动；结果错落出现。
5. **产品与详情** — 区块 id='products'。眉题 'THE SHELF' 和 H2 'SIX PRODUCTS, NOTHING TO HIDE.' ProductCards（图片 3:4，名称，Blush 中的活性成分胶囊标签，价格）打开 ProductDetail（?p=<slug>，默认第一款产品）：详情 = 大图、名称、价格、完整成分列表（INCI 风格，通俗名称）、HowToUse 三步、质地图（texture-cream.webp 或 texture-serum.webp 按类型复用）以及 'Add to cart'。
   布局：Bone 背景。网格 3x2（900px 以下为 2 列）；详情在网格下方以全宽 Card 面板打开（滚动进入视野），关闭后返回网格。
6. **套装、术语表、页脚** — 区块 id='bundles'。眉题 'SETS' 和 H2 'The routine, priced kindly.' 两个 BundleCards（列出内容、单项节省、'Add bundle to cart'）。区块 id='ingredients'。眉题 'ACTIVES, PLAINLY' 和 H2 'WHAT'S IN AND WHY.' 五个 ActiveCards（圆点、名称、一行作用），配文 'INCI lists are on each product page — pronounce them with us.' 页脚（Olive Deep，bone 文字）：字标、'Blended in [CITY]'、hello@ + emailDomain；底行 '© [BRAND]. Cosmetic claims only; your skin is your own expert.'
   布局：Clay（套装）然后 Bone（术语表）；套装两列 24px；术语表为 5 个胶囊标签一行换行；页脚三部分。

## 资源
- 图片：为本设计制作的模板照片（可随模板自由再分发）。用 curl -L -o 将每张图片下载到 public/images/：https://media.vibefather.ai/assets/9f750afb-4612-4b76-9e55-06a55b28cd69/texture-drop.webp → public/images/texture-drop.webp（Hero；object-position 50% 50%；alt 'A serum drop falling from a glass dropper onto slate'）；https://media.vibefather.ai/assets/9f750afb-4612-4b76-9e55-06a55b28cd69/product-cleanser.webp → public/images/product-cleanser.webp（Gentle Milk 卡片；alt 'A plain cream bottle labeled with blank paper'）；https://media.vibefather.ai/assets/9f750afb-4612-4b76-9e55-06a55b28cd69/product-serum.webp → public/images/product-serum.webp（Barrier Repair 卡片；alt 'A glass serum bottle with a dropper on clay'）；https://media.vibefather.ai/assets/9f750afb-4612-4b76-9e55-06a55b28cd69/product-spf.webp → public/images/product-spf.webp（Day Veil 卡片；alt 'A small mineral SPF tube on bone stone'）；https://media.vibefather.ai/assets/9f750afb-4612-4b76-9e55-06a55b28cd69/texture-cream.webp → public/images/texture-cream.webp（细节纹理，cleanser/balm/eye；alt 'A cream texture swatch on slate'）；https://media.vibefather.ai/assets/9f750afb-4612-4b76-9e55-06a55b28cd69/texture-serum.webp → public/images/texture-serum.webp（细节纹理，serum/mist；alt 'A clear gel serum swatch on slate'）。共六个文件。Petal Mist、Night Balm 和 Sunday Eye Cream 的卡片复用最接近的瓶身照片，并使用不同的 object-position 和裁剪。
- 图片：在项目根目录写入 ASSETS.md，包含一个表格：路径、来源 URL、作者、许可证——每张照片一行（来源 'media.vibefather.ai, made for this template'，作者 'VibeFather'，许可证 'Distributed with the template'），另加字体和图标行。照片中的瓶身标签必须保持空白纸张，无可读文字；绝不可替换为图库摄影或含人脸或皮肤的图像。
- 图标：仅使用 lucide-react：Droplets、Leaf、Sun、FlaskConical、ShoppingBag、Plus、Minus、Check、X、ArrowRight。描边宽度 1.75，16–24px，颜色继承。小枝装饰、活动圆点、测验步骤标记、ORDER NOTES 印章和 favicon 均为绘制的 SVG。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的 rect rx 6 填充 #3B4231，一个 Card（#FFFEFA）水滴字形。无其他标志：品牌名称始终以文字排版呈现。
- 字体：安装 @fontsource/cormorant-garamond 和 @fontsource-variable/work-sans，并在 src/fonts.ts 中按 Setup 所列导入它们。Vite 将 woff2 文件打包进 dist/。
- 图片：在代码中绘制：小枝、活动圆点、测验步骤标记、标签、印章和 favicon。除六张照片外无其他位图；无插画；无地图瓦片。

## 不要做
- 无后端、无表单提交、不向任何 API 发起 fetch、无支付：测验、购物车和结账存根仅保存在浏览器中（localStorage），且存根会说明这一点。
- 产品详情通过查询参数 ?p=<slug> 打开（无参数时显示第一个产品），在同一页面内完成，且绝不显示错误状态。
- 此单页上的所有链接均为锚点（./index.html#quiz、#products、#bundles、#ingredients）加上页脚的 mailto。
- 不做医疗、治疗或治愈宣称——仅使用化妆品外观语言（'calms visible redness'，绝不用 'treats eczema'）；百分比作为配方事实呈现。
- 全部自托管：字体通过 Fontsource，图标作为 npm 包或内联 SVG，图片下载到 public/images/。不使用 CDN <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具。
- 生产构建：压缩、无 source map、不将 src/ 复制到 dist/、单条命令 npm run build、输出在 dist/ 下且小于 10 MB。
- 不使用真实护肤品牌及其包装或瓶身设计；任何照片中不出现人脸或皮肤特写；照片中的标签保持空白。
- 任何地方不出现日期或年份；网站绝不显示今天的日期。
- 除可选的页脚署名链接外，网站内绝不提及 VibeFather 或任何其他品牌；所有文案均为虚构的美式英语。
- 尊重 prefers-reduced-motion：无缩放、计数、交错或绘制动画；一切处于静止状态；颜色/边框悬停效果保留。
- 页面必须在 1440x900 桌面端和 390x844 移动端正常工作，控制台零错误；测验、标签、详情和购物车仅用键盘即可操作，并有可见的焦点环。
- 保持药剂师般沉静的文案：不用 lorem，不用 'miracle'；每种成分、价格和百分比都存放在 src/content.ts 中。

---
— Prompt by VibeFather · https://vibefather.ai/t/skincare-brand-shop · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
