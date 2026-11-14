> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 宠物食品订阅页面

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的单页订阅网站，[BRAND] 是一家宠物食品制造商，在 [DELIVERY_AREA] 范围内配送 [FOOD_STYLE]。页面以一张宠物肖像主视觉图作为核心；方案构建器将物种、年龄、体重和活动量转化为一个可见的方案——份量杯数、卡路里、配送频率和价格实时更新；食材、配送步骤和以宠物命名的评价则为页面收尾。

- 受众：[DELIVERY_AREA] 内养狗和养猫的人，他们会看标签、担心份量悄悄增加，并且乐意花两分钟换取一个看起来像是为自己的动物量身定制的方案。
- 目标：让访客在测验中构建一个方案，看着数字变化，将其保存在本地，并在真正的结账功能存在之前就感受到品牌既精准又温暖。
- 语气：欢快而直截了当，像一位优秀的兽医技师：用词平实、数字真实、对宠物开些温和的玩笑。绝不回避这样一个事实：这些计算只是示例。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react + react-dom 18（MIT）、motion（motion.dev）11（MIT）、lucide-react（ISC）、@fontsource/fredoka、@fontsource/figtree（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 使用 react-ts 模板通过 npm create vite@latest 搭建脚手架。项目根目录下有一个 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。切勿将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。theme.extend.colors 映射 cream、peanut、ink、orange、orangeDeep、grass、grassDeep、rule。
  - src/fonts.ts 导入 @fontsource/fredoka/500.css、600.css、700.css 以及 @fontsource/figtree/400.css、600.css、700.css。从 src/main.tsx 导入 fonts.ts。
  - 全局 CSS 位于 src/index.css：body 背景为 cream；选中文本为 cream 上的 orange；focus-visible 轮廓为 3px orange；主按钮通过 box-shadow 0 4px 0 rgba(43,37,32,0.12) 实现厚重阴影。
  - src/content.ts 保存所有字符串：测验步骤、方案标签、食材（名称、来源、简介）、配送步骤、评价（宠物名、品种行、引语、人名）、页脚数据以及方案公式常量。当变量变化时重写此文件。
  - src/lib/brand.ts：brandSlug 来自 [BRAND]；localStorage 键 `${brandSlug}:plan` 存储完整方案对象。src/lib/plan.ts 导出确定性计算：kcal = 70 × (weightKg ^ 0.75) × activityFactor（couch 1.2、regular 1.6、athlete 2.0）× ageFactor（young 1.4、adult 1.0、senior 0.9）；cups = kcal / 400，四舍五入到最接近的四分之一；pricePerDay = baseRate × (kcal / 1000) × styleFactor（fresh 1.15、frozen 1.0），baseRate 从 [BASE_DAY_RATE] 解析，显示两位小数；deliveryPrice = pricePerDay × cadenceDays（14、28、42）。用 lb × 0.4536 将滑块磅数转换为千克。
  - src/components/ 中的组件：Header.tsx、Reveal.tsx（Motion whileInView，淡入 + 上移 18px，420ms，70ms 交错）、PlanBuilder.tsx（SpeciesStep、AgeStep、WeightSlider、ActivityStep、PlanPanel）、BowlViz.tsx（SVG 碗，填充至 cups/fullCups 比例）、Ingredients.tsx、DeliverySteps.tsx、Reviews.tsx、FaqNote.tsx、Footer.tsx。
  - 通过 Motion 实现弹簧：桌面端类型 spring 刚度 300 阻尼 20；移动端（max-width 768px matchMedia）改用 300ms 补间；prefers-reduced-motion 移除所有动画但保持每个数字正确。
  - public/favicon.svg：一个 64px 代码绘制的骨头形状，orange 在 cream 上。构建前从 Assets 下载六张照片到 public/images/；在项目根目录写入 ASSETS.md。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张 webp 图片。保持在 20 MB 以下。

## 变量
- [BRAND] — 品牌名称（默认："Tail & Tummy"）。虚构的宠物食品品牌。用于字标、标题、brandSlug（localStorage 键）以及每一处提及。绝不使用真实宠物食品制造商或兽医连锁机构。
- [FOOD_STYLE] — 食品风格（默认："fresh-frozen bowls"）。品牌所烹制的食品类型。出现在主视觉眉题、配方行和配料介绍中。保持小写，例如 fresh-frozen bowls、air-dried kibble。
- [DELIVERY_AREA] — 配送区域（默认："Denver metro"）。品牌配送的范围。用于主视觉眉题、评价署名和页脚地址行。
- [BASE_DAY_RATE] — 基础日费率（默认："$2.90"）。冷冻方案下 1,000 kcal 成年犬的每日锚定价格；实时计算会根据卡路里、年龄、活动量和风格对其进行缩放。保持美元加美分的格式。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/pet-food-subscription-page（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- 奶油色（Cream）`#FFF5E8` — 所有页面的底色 — 温暖，像午后的厨房。
- 花生色（Peanut）`#FAE7CD` — 卡片凹槽、标签、方案面板、评价卡片。
- 墨色（Ink）`#2B2520` — 主文本：标题、数字、浅色背景上的按钮。
- 取餐橙（Fetch Orange）`#F0761F` — 主强调色：CTA、滑块填充、当前步骤、碗的填充、焦点环。
- 深橙（Orange Deep）`#D25F10` — 橙色悬停与按下状态。
- 草绿色（Grass Green）`#4C9A58` — 第二强调色：宠物安全与成分标签、次要按钮、对勾、周期标签。
- 深绿（Grass Deep）`#3B7A45` — 绿色悬停与按下状态。
- 分隔线（Rule）`#EFDCC3` — 1px 细线与卡片边框、步骤条分隔线。

### 字体排印
- 展示字体 — 品牌字标、H1、H2、方案数字、步骤问题。Fredoka，粗圆体，句首大写，行高 1.15：Fredoka (OFL)，字重 500/600/700
- 正文字体 — 正文、选项标签、评价（姓名用 600）、说明文字：Figtree (OFL)，字重 400/600/700

### 布局与动效
- 间距：大而友好：桌面端区块节奏 104px（移动端 64px），容器 1160px，内边距 28px。卡片间距 24px；方案构建器为 6/6 分栏，栏间距 40px；按钮高度 52-56px。
- 圆角：粗圆角：卡片和方案面板 24px，按钮、标签和徽章 999px，图片 20px。
- 动效：弹跳但克制：测验步骤以弹簧动画滑动 28px（刚度 300，阻尼 20）；移动端改用 300ms 补间。
- 动效：方案数字（杯数、kcal、价格）在每次输入变化时弹入到位 — 旧值向上退出，新值从下方进入，240ms。
- 动效：碗的 SVG 按份量比例以同样的弹簧动画填充橙色；切换物种时，碗的图案以 240ms 交叉淡入淡出切换。
- 动效：主按钮有粗厚的 0 4px 0 阴影，按下时压平；标签按下时缩放 0.96。
- 动效：显现效果为淡入并上移 18px，持续 420ms，错开 70ms；prefers-reduced-motion 下所有动画变为即时状态切换。
- 图像：一次明亮的棚拍：每张照片都是宠物或其食物，置于温暖的奶油色无缝背景上 — 柔和均匀的光线带温暖金色调，表情欢快，地面有柔和阴影。不出现人物、不出现手、不出现可读包装、不出现标志。

## 页面与区块
### [BRAND] — 为你的宠物制定计划（`index.html`）
1. **页头（Header）** — 在 Cream（奶油色）上吸顶，滚动 12px 后出现 1px Rule（分隔线）细线。左侧：字标 [BRAND]，Fredoka 600 22px，Ink（墨色），名称前有一个橙色的小型代码绘制爪印图形。中间导航（桌面端）：The Plan、Ingredients、Delivery、Reviews — Figtree 600 14px，Ink 从 70% 到全色，150ms，滚动到锚点。右侧：CTA 'Build a plan'（橙色填充、奶油色文字、999px、厚重阴影）。移动端：字标加汉堡菜单（两条 2px Ink 线），打开全屏 Cream 覆盖层，锚点用 Fredoka 26px，CTA 在底部。
   布局：单行，1160px 容器，16px 垂直内边距。
   动效：细线在滚动时淡入；覆盖层淡入并上移 12px，200ms。
2. **首屏（Hero）** — 分栏首屏：右侧 6 列放置 hero-dog.webp（一只毛发蓬乱的梗犬混血在奶油色背景上咧嘴笑），出血到视口右边缘，左侧圆角 24px。左侧 6 列，文案垂直居中。眉题 '[BRAND] — [FOOD_STYLE] FOR DOGS AND CATS — [DELIVERY_AREA]'，Figtree 700 12px 大写 0.14em，橙色。H1 用 Fredoka 700 clamp(40px, 5.5vw, 64px)，Ink：'One bowl, built for one body.' 副标题用 Figtree 400 17px Ink 80%，最多 46ch：'Tell us about your pet — portion, calories and price appear before your coffee cools. Plans start around [BASE_DAY_RATE] a day.' CTA：'Build your plan — 60 sec'（橙色填充）和 'Read the recipe'（幽灵按钮，1.5px Ink 边框），滚动到 ingredients。信任行三个迷你徽章，图标为 grass（草绿色）：Check 'Cooked weekly'、Snowflake 'Arrives frozen'、PawPrint 'Pet-safe ingredients list'。
   布局：6/6 分栏；桌面端图片向右出血。移动端：图片在上，4:3，文案在下，24px 内边距。
   动效：文案以 420ms 每个、间隔 70ms 交错进入；照片从 1.03 缩放到 1.0，持续 600ms，仅一次；信任徽章在 CTA 之后依次弹出。
3. **计划构建器（Plan builder）** — id='plan'。整个卖点。左列，在眉题 'BUILD THE PLAN' 和 H2 'Sixty seconds, one honest plan.' 下一次一步。第 1 步 'Who eats tonight?' — 两张带照片的大选项卡片：狗（hero-dog 裁剪）和猫（cat-bowl 裁剪），标签旁有 lucide Dog / Cat 图标。第 2 步 'Which birthday era?' — 芯片 'Under a year'、'One to seven'、'Seven-plus'（幼年、成年、老年）。第 3 步 'How heavy?' — 范围滑块从 4 到 120 lb（选择猫时为 4 到 20 lb），橙色填充，Ink 滑块，实时标签 '34 lb'。第 4 步 'Couch pal, daily walker, or athlete?' — 三张卡片，图标 Sofa、Footprints、Zap。四个点的进度轨（完成时橙色）位于步骤下方；Back 是文本链接；选择后步骤自动前进（滑块在 Next 时前进）。右列：Peanut 上的实时计划面板，圆角 24px — 物种和名称行（'Your dog's plan'），然后四个动画数字用 Fredoka 600：Portion '1¾ cups a day'（最接近的四分之一）、Energy '940 kcal a day'、Cadence — 三个芯片 2 / 4 / 6 周（激活时 grass 填充）、Price '$3.20 a day — $44.80 per 4-week delivery'（来自 src/lib/plan.ts）。下方，新鲜/冷冻切换：两个胶囊按钮 Flame 'Fresh, never frozen' 和 Snowflake 'Frozen at peak' — 冷冻为默认；新鲜将价格乘以 1.15 并重写配方行。BowlViz SVG（120px）位于面板角落，橙色填充到 cups / 3 cups。按钮 'Save my plan'（橙色）将计划写入 `${brandSlug}:plan` 并显示带有 grass Check 的诚实说明：'Saved on this device — this is a sample calculation, not veterinary advice. Real plans start with your vet.'
   布局：6/6 分栏，40px 间距；步骤是左列内 3 列网格中的全宽卡片；计划面板在桌面端吸顶于顶部 96px。移动端：步骤在前，计划面板在其上方（吸顶顶部）以便数字保持可见。
   动效：步骤以弹簧滑动；每个数字变化时弹簧；碗填充弹簧；切换在 200ms 交叉淡化配方行；保存说明上滑 12px，240ms。
4. **食材（Ingredients）** — id='ingredients'。眉题 'THE RECIPE' 和 H2 'Short list, real food.' 介绍行用 Figtree 15px Ink 80%：'Our [FOOD_STYLE] start with a kitchen, not a factory — four things in the bowl, nothing sprayed on.' 左侧：ingredients-flat.webp 4:3 圆角 20px。右侧：四行食材，每行一个 grass 标签加一段简介：'Chicken thigh — from Hallow Farm, Idaho, cooked low'；'Sweet potato — roasted, never extruded'；'Carrots and peas — frozen the day they are picked'；'Salmon oil — a small drizzle for coats'。脚注用 Ink 60% 13px：'Recipes shown are invented samples for this template — portion math is a sample too.'
   布局：5/7 分栏，40px 间距，行之间用 1px Rule 细线分隔；移动端堆叠，照片在前。
   动效：行在滚动时以 420ms、70ms 交错显示；每个标签进入时弹出一次。
5. **配送如何运作（How delivery works）** — 在眉题 'DELIVERY' 和 H2 'From our freezer to yours.' 下三步骤一行 — 每个是一个带编号的橙色圆圈（Fredoka 600 20px），有标题和两行：1 'Build the plan — sixty seconds, species to slider'；2 'Boxes ride out on your cadence — sample 2, 4 or 6 weeks across the [DELIVERY_AREA]'；3 'Thaw, scoop, serve — tubs are dishwasher-safe and stack like books'。下方，一行诚实说明用 Ink 60% 13px 带 Truck 图标：'Delivery cadence here is sample copy — no real schedules are promised.'
   布局：3 列网格，24px 间距，无卡片容器 — 步骤在奶油色上，桌面端有连接的 1px Rule 虚线；移动端堆叠。
   动效：步骤在滚动时以 420ms、70ms 交错显示；连接虚线绘制一次（scaleX 0 到 1，400ms）。
6. **评价（Reviews）** — id='reviews'。眉题 'THE JURY' 和 H2 'Verdicts from the bowl.' 四张评价卡片在 Peanut 上圆角 24px，每张有五个橙色 Star 图标（12px）、一段 Figtree 400 15px 的引语，以及 Figtree 600 13px 的署名：'Biscuit, beagle, 4 — “Licks the bowl, then waits by the freezer.” — Dana R.'；'Pearl, tabby, 9 — “Ate it before the dog could investigate.” — Sam K.'；'Waffles, corgi, 6 — “The slider said one cup. Waffles disagrees.” — Priya M.'；'Miso, husky, 3 — “Coat so shiny the neighbors asked.” — Leo T.' 所有评价均为虚构；署名保持在 [DELIVERY_AREA]。
   布局：2×2 网格（移动端 1 列），24px 间距，24px 卡片内边距。
   动效：卡片在滚动时以 420ms、70ms 交错显示；每张卡片的星星依次弹出（间隔 80ms）。
7. **页脚（Footer）** — 1px Rule 细线，然后在 Cream 上三列：带爪印图形的字标；'88 Ballast Row, [DELIVERY_AREA]' 带 MapPin、'(303) 555-0187' 带 Phone；导航锚点小字重复。底部行用 Ink 60% 12px：'Every brand, formula, review and price on this page is an invented example — portion output is a sample calculation, not veterinary advice.' 加上可选的 [CREDIT] 链接。
   布局：三列，移动端堆叠，32px 间距。
   动效：无 — 页脚静止。

## 资源

- 图片：为本模板制作的六张明亮影棚照片，可随模板一起再分发。构建前用 curl -L -o 将每张图片下载到 public/images/。https://media.vibefather.ai/assets/07b10d05-0050-49cc-840b-2b0087ee831d/hero-dog.webp -> public/images/hero-dog.webp（主视觉区和狗这一物种选项；alt 'A happy scruffy terrier mix grinning on a warm cream studio backdrop'）；https://media.vibefather.ai/assets/07b10d05-0050-49cc-840b-2b0087ee831d/cat-bowl.webp -> public/images/cat-bowl.webp（猫这一物种选项；alt 'A grey tabby cat leaning toward a ceramic bowl on a cream backdrop'）；https://media.vibefather.ai/assets/07b10d05-0050-49cc-840b-2b0087ee831d/dog-bowl.webp -> public/images/dog-bowl.webp（方案面板侧栏；alt 'A stoneware bowl of fresh pet food with visible chicken and vegetables'）；https://media.vibefather.ai/assets/07b10d05-0050-49cc-840b-2b0087ee831d/ingredients-flat.webp -> public/images/ingredients-flat.webp（配料区；alt 'Raw chicken, sweet potato, carrots, peas and a dish of salmon oil laid out on cream'）；https://media.vibefather.ai/assets/07b10d05-0050-49cc-840b-2b0087ee831d/delivery-box.webp -> public/images/delivery-box.webp（配送区侧栏；alt 'A plain unbranded kraft box packed with sealed meal tubs'）；https://media.vibefather.ai/assets/07b10d05-0050-49cc-840b-2b0087ee831d/dog-play.webp -> public/images/dog-play.webp（评价区侧栏；alt 'A small brown mixed-breed dog mid-hop chasing an orange fabric toy'）。在 ASSETS.md 中为每张图片注明：'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.'
- 图标：仅使用 lucide-react：Dog、Cat、Sofa、Footprints、Zap、Flame、Snowflake、Star、Check、PawPrint、Truck、MapPin、Phone、ArrowRight。描边宽度 2，16-24px，颜色继承。爪印字标字形、骨头 favicon 和 BowlViz SVG 均为代码绘制。不使用其他图标集。
- 字体：@fontsource/fredoka（500、600、700）和 @fontsource/figtree（400、600、700），在 src/fonts.ts 中导入，以便 Vite 将 woff2 文件打包进 dist/。切勿从 CDN 加载字体。

## 不要做
- 不要后端、不要 API、不要表单提交、不要结账：方案仅保存到 localStorage，文案中要说明这一点。
- 不要兽医或健康声明：分量输出在所有出现的地方都标注为示例计算，保存提示要指向真实兽医以获取真实饮食建议。
- 不要真实的宠物食品品牌、农场、兽医或评测网站；配方、原料来源和评价均为虚构。
- 照片只展示宠物和食物——不要人物、不要手、不要可读包装、不要 logo。
- 不要真实的配送承诺：配送频率标签（cadence chips）和配送条（delivery strip）是示例文案，需明确标注。
- 不要日历日期，不要实时时钟；网站永远不显示今天的日期。
- 一切自托管：字体通过 Fontsource，图标通过 lucide-react，图片下载到 public/images/ ——不要 CDN 标签，不要分析工具。
- 静态构建：压缩，不要 source map，dist/ 中不要有 src/，一条命令 npm run build，输出在 dist/ 下，小于 20 MB。
- 内部链接是指向 ./index.html 的锚点（#plan、#ingredients、#delivery、#reviews）；绝不要使用裸目录。
- 尊重 prefers-reduced-motion：不要弹簧动画、不要碗动画、不要星星弹出——每个数字仍然即时且正确地更新。
- 在 1440×900 和 390×844 下正常工作，控制台零错误；测验、滑块、开关和保存仅用键盘即可操作，并有可见的橙色焦点环。
- 方案公式必须与 src/lib/plan.ts 完全一致——确定性，无随机性，相同输入始终产生相同方案。
- 除带有 [BRAND] 的普通标题外，不要任何 SEO 机制；网站内绝不提及 VibeFather 或任何真实品牌；所有文案均为虚构的美式英语，位于 src/content.ts。

---
— Prompt by VibeFather · https://vibefather.ai/t/pet-food-subscription-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
