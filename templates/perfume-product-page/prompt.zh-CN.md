> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 香水产品页面

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个为某款虚构香水打造的单页网站：腮红与琥珀的柔软感官气质，腮红丝绸上玻璃瓶的特写主视觉，一条杂志风格的氛围横条，一个随滚动展开前调-中调-后调的动画 SVG 香调金字塔，一段穿戴说明，一个带实时价格和探索套装追加销售（upsell）的规格选择器，以及安静的用户小样评价。

- 受众：独立香水品牌、美妆与身体护理单品品牌、香薰蜡烛与气味工作室，以及为它们搭建发布页的设计师。
- 目标：先卖氛围，再谈分子：让图像和徐徐展开的金字塔带着访客一路向下浏览，再通过规格选择器和探索套装优惠温和转化——演示按钮不作任何承诺。
- 基调：柔软、感性、略带文学气息——用简短诗意的句子描述感受，而非化学成分；坦诚说明这是示例文案。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/cormorant-garamond（OFL）、@fontsource/josefin-sans（OFL）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化配置：
  - 使用 npm create vite@latest perfume-product-page -- --template react-ts 脚手架创建项目；将 tailwindcss@3.4、postcss 和 autoprefixer 添加为开发依赖；将 motion、lucide-react、@fontsource/cormorant-garamond 和 @fontsource/josefin-sans 添加为依赖。
  - vite.config.ts：base 设为 './'，build.sourcemap 设为 false，构建输出目录为 dist/。
  - tailwind.config.js：扩展颜色 blush #F7E4E0、blushdeep #EFCFC9、silk #FDF8F5、amber #C9863B、amberlight #E0B273、iris #9C7F96、cocoa #4A3833、rosesmoke #A98F88；fontFamily 中 display 设为 'Cormorant Garamond'，sans 设为 'Josefin Sans'；radius 中 pill 设为 999px，panel 设为 18px。
  - postcss.config.js：tailwindcss + autoprefixer。
  - src/components/ScentPyramid.tsx：香调金字塔以 SVG 绘制，viewBox 为 0 0 600 420 —— 顶点位于 (300,30)，底边从 (120,390) 到 (480,390)，在 y=150 和 y=270 处用细线分割为三个色带：TOP 填充 blush #F7E4E0，HEART 填充 blushdeep #EFCFC9，BASE 填充线性渐变 amberlight #E0B273 → amber #C9863B；每个色带均以 40% 不透明度的 amber 细线描边；每个色带旁悬浮两个成分标签（pill 形状、silk 底色、cocoa 文字），通过 1px amber 引导线连接。
  - src/lib/motion.ts：共享变体 —— reveal（opacity 0→1，y 22→0，800ms cubic-bezier(0.16,1,0.3,1)，100ms 交错，whileInView 仅触发一次）、unfold（scaleX 0→1，原点居中，900ms ease-out）—— 配合 useReducedMotion 时，金字塔完全展开并保持静态，其他位置使用普通的 200ms 淡入。
  - src/index.css 中的丝绸渐变工具类：.bg-silk —— 一个柔和的 linear-gradient(150deg, #FDF8F5 0%, #F7E4E0 55%, #EFCFC9 100%)，用作页面各区块背后的底色铺陈。
  - 将所有面向用户的字符串（品牌、香水名、标语、情绪文案、香调层次、规格与价格、套装文案、评价、使用说明）保留在 src/content.ts 中；各区块从中读取，以便在一处替换所有值。
  - index.html：<title>[BRAND] — [PERFUME], Eau de Parfum</title> 以及一个用代码绘制的 favicon.svg（blush 底色上的一滴 amber 水滴）；不做其他 meta 处理。

## 变量
- [BRAND] — 品牌名称（默认：“Maison Verane”）。为字标、页面标题和标签行虚构的香水品牌。
- [PERFUME] — 香水名称（默认：“Aurelle”）。此页面销售的单一香水——主视觉标题、购买区域和标题。
- [PRICE_MID] — 中号价格（默认：“$145”）。尺寸选择器中默认 50 毫升尺寸的价格；小号和大号尺寸的价格来自其周围的 content.ts。
- [SET_PRICE] — 探索套装价格（默认：“$32”）。追加销售卡片中三瓶装探索套装的样品价格，可抵扣正装瓶。
- [CREDIT] — 在页脚保留一个小的“Template by VibeFather”链接至 https://vibefather.ai/t/perfume-product-page（默认：是；删除此行以移除）

页面与区块下的文案是为默认值编写的。如果您的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块键控，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 腮红粉（Blush）`#F7E4E0` — 页面底色 — 柔和的粉色瓷感，整个网站的基调。
- 深腮红粉（Blush deep）`#EFCFC9` — 交替表面、香调金字塔的核心带、标签悬停态。
- 丝白（Silk）`#FDF8F5` — 面板、卡片、香调标签、默认状态的容量标签 — 温暖的近白色。
- 琥珀色（Amber）`#C9863B` — 主强调色：CTA、激活的容量标签、细金线、金字塔底座、引导线。
- 浅琥珀色（Amber light）`#E0B273` — 悬停态和渐变终点；链接的下划线强调。
- 鸢尾紫灰（Iris mauve）`#9C7F96` — 次强调色：低调链接、心调标签、说明文字的悬停态。
- 可可棕（Cocoa）`#4A3833` — 主文本色 — 温暖的深棕色，绝不用黑色。
- 玫瑰烟灰（Rose smoke）`#A98F88` — 次文本色：引言、说明文字、小样注释。

### 字体排印
- 展示字体 — 香水名称、标题、价格（轻盈的衬线体，常为斜体）：Cormorant Garamond（OFL），字重 500/600
- 文本字体 — 正文、标签、标签片（轻盈的几何无衬线体，标签用大写并加字距）：Josefin Sans（OFL），字重 300/400

### 布局与动效
- 间距：柔和而宽裕：桌面端区块 py-32（128px）/ 移动端 py-20；内容 max-w-5xl — 一个狭窄、亲密的栏宽；主视觉区在瓶身周围保留 120px 的留白；正文每行限制在 48ch；细线为琥珀色，35% 不透明度。
- 圆角：圆润而柔和：按钮、标签片和容量选择器使用 999px 胶囊形；面板、图片和追加销售卡片使用 18px；没有任何直角。
- 动效：主视觉区：瓶身照片以 0.06 的滚动视差移动，并在加载时于 2.5s 内从 1.03 缓慢缩放至 1；香水名称在其后方以 300ms 淡入上移。
- 动效：香调金字塔：每条色带在穿过视口 40% 时从中心以 scaleX 0→1 展开（900ms ease-out），先顶部，再核心，最后底部；每条色带的香调标签在 150ms 后滑入其旁，由引导线连接并绘制出现（500ms）。
- 动效：情绪条：三张照片以 120ms 错开淡入上移，并以 0.04 的视差漂移；说明文字最后淡入。
- 动效：容量选择器：切换标签时价格行交叉淡入淡出（300ms），激活的标签填充琥珀色并配丝白文字（250ms）；演示购物袋按钮以 300ms 淡入显示其内联注释。
- 动效：显现：区块、引语和卡片淡入上移（y 22→0，800ms cubic-bezier(0.16,1,0.3,1)），通过 Motion 的 whileInView 以 100ms 错开，仅触发一次。
- 动效：prefers-reduced-motion：金字塔完全展开并静态渲染，所有标签可见，视差和加载缩放关闭，每个显现变为简单的 200ms 不透明度淡入。
- 图像：一次温暖的影棚拍摄：柔和的编辑风格静物摄影 — 玻璃瓶身配严格空白的标签，置于垂坠的腮红粉丝绸上，腮红粉缎面的褶皱，粗糙的琥珀树脂，一朵鸢尾花，琥珀色瓶塞的微距特写，三个小样瓶 — 全部采用相同的腮红粉与琥珀色调，单一温暖漫射光，柔和的玫瑰色阴影，通透的高调温暖感，柔和的胶片质感，浅景深。无人物，任何地方无可读文字，无标识。六张照片由 VibeFather 生成并下载至 public/images。

## 页面与区块
### [BRAND] — [PERFUME]，淡香精（`index.html`）
1. **页头（Header）** — 固定顶栏，64px，在首屏上方透明。左侧：[BRAND] 字标，使用 Cormorant Garamond 600 18px 可可色（cocoa），大写，字距 0.22em。右侧（桌面端）：锚点链接 'The scent'、'Notes'、'How to wear'、'Worn by'，使用 Josefin Sans 300 13px 大写，字距 0.14em，玫瑰烟色（rose smoke）→ 悬停时变为可可色；随后是一个低调的胶囊按钮 'Shop the bottle'（琥珀色底，丝色文字）→ #buy。移动端：字标 + 胶囊按钮 + lucide 菜单/x 切换按钮，打开一个丝色面板，四个链接纵向堆叠。
   布局：position fixed，z-40；滚动 80px 后，顶栏获得 85% 不透明度的丝色底、柔和模糊和 1px 腮红深色（blush-deep）底部细线（300ms）。
   动效：底色和细线在阈值处淡入；移动端面板下滑 250ms；链接悬停变色 200ms。
2. **首屏 — 香水瓶** — 分栏首屏。左侧：标签使用 Josefin 300 12px 大写，字距 0.2em，鸢尾色（iris）：'EAU DE PARFUM · [BRAND]'；香名使用 Cormorant Garamond 500 斜体，clamp(4.5rem, 10vw, 8rem)，可可色：'[PERFUME]'；描述行，Cormorant 500 24px 玫瑰烟色：'an amber that whispers before it warms.'；正文 Josefin 300 16px 玫瑰烟色，max-w 44ch：'Orris and cashmere wood folded into amber — worn close, noticed late. Batch-made in small numbers; every note and price on this page is sample copy for the demo.' 行动按钮：'Choose your size'（琥珀色胶囊，丝色文字）→ #buy；'Read the notes'（鸢尾色链接，带琥珀浅色下划线）→ #notes。右侧：public/images/bottle-hero.webp，一只厚重的玻璃瓶置于垂坠的腮红丝色丝绸上，带琥珀色折射，置于 24px 圆角边框内，向右出血至视口边缘。
   布局：12 列网格，min-h 92vh：文字列 1–6（垂直居中），照片列 7–12 全高（object-cover，3:4 裁切）。移动端：照片在前（420px），文字在下。
   动效：香水瓶照片从 1.03→1 缩放，历时 2.5s，并以 0.06 视差移动；标签、香名、描述、正文和行动按钮依次淡入上移（从 300ms 开始，间隔 100ms）；减少动态效果：静态照片，单次淡入。
3. **氛围条带** — 标签 'THE MOOD'，琥珀色；一行文字，Cormorant 斜体 24px 可可色：'Lamplight on silk, an hour after the door closes.' 三张照片排成一行，每张下方有极小的 Josefin 说明文字：mood-silk.webp — 'silk'；mood-amber.webp — 'amber resin'；mood-iris.webp — 'iris'。细线琥珀色分隔线收束条带。
   布局：3 列网格（移动端堆叠），24px 间距；图片 4:3，18px 圆角；说明文字 12px 大写，字距玫瑰烟色，居中。
   动效：照片以 120ms 间隔淡入上移，带 0.04 视差；说明文字最后淡入；减少动态效果：普通淡入。
4. **香调 — 香氛金字塔** — id=notes。标签 'THE NOTES'；标题 Cormorant 26px 可可色：'Three hours, three accords.' ScentPyramid 居中，每个层级的成分和一行诗意文字在旁揭示：TOP — 'the first ten minutes' — 'Pink pepper · bergamot chiffon · pear skin — bright, a little cheeky.' HEART — 'the hours that follow' — 'Orris butter · warm rose · saffron thread — soft skin, lamplight.' BASE — 'what stays on the scarf' — 'Amber resin · cashmere wood · vanilla husk — quiet, sweet, gone too soon.' 脚注 Josefin 12px 玫瑰烟色：'Eau de parfum, sample concentration; notes are invented sample copy.'
   布局：金字塔宽 600px 居中；三行诗意文字位于左侧列，随其滚动（每层标签 + 文字，与各层级的激活对齐）；移动端金字塔堆叠在三行文字上方。
   动效：各层级在穿过视口 40% 时按 top→heart→base 展开（每层 900ms）；成分标签在 150ms 后滑入，带绘制引导线；对应的诗意文字在其层级激活时从玫瑰烟色变亮为可可色；减少动态效果：金字塔完全展开，所有文字为可可色，静态。
5. **如何使用** — 标签 'HOW TO WEAR'；两条低调的规则置于细线上，Cormorant 22px 可可色，下方 Josefin 14px 玫瑰烟色：'One spray on the wrist, one behind the ear — never rub.' — 'warmth carries amber; friction flattens it.' / 'Give it twenty minutes on skin before you judge it.' — 'the pear leaves, the orris arrives, the amber stays.' 结尾细线注释，Josefin 12px 玫瑰烟色：'Sample guidance for the demo.'
   布局：两个 6 列半区，由 35% 处的 1px 琥珀色细线分隔；移动端堆叠。
   动效：规则以 150ms 间隔淡入上移；其余不动。
6. **香水瓶 — 容量选择器和套装** — id=buy。标签 'THE BOTTLE'；标题 Cormorant：'Choose your size.' 左侧：三个容量胶囊（丝色胶囊，激活 = 琥珀色底配丝色文字）：'10 ML — $48' / '50 ML — [PRICE_MID]'（默认）/ '100 ML — $215'；下方是 Cormorant 600 32px 可可色的价格行，随选择更新，以及一个胶囊按钮 'Add to bag — demo'（琥珀色），带 lucide 购物袋图标；点击后显示内联注释（300ms 淡入，Josefin 13px 玫瑰烟色）：'Demo button — this template has no checkout. Nothing is for sale.' 胶囊旁是 bottle-detail.webp，作为琥珀色瓶塞的 1:1 微距图（18px 圆角）。右侧是丝色底上的追加销售卡片，18px 圆角：'The discovery set'，Cormorant 24px，set-trio.webp（1:1）三支小瓶，文案 Josefin 300 15px 玫瑰烟色：'Three 2 ml sprays, [SET_PRICE] — fully credited toward your first full bottle.' 以及一个低调链接 'Add the set — demo'，显示相同的内联注释。
   布局：12 列网格：选择器 + 细节照片列 1–7（照片 4 列），追加销售卡片列 8–12。移动端堆叠选择器、照片，然后是卡片。
   动效：胶囊交叉淡入价格（300ms）并填充琥珀色（250ms）；内联注释淡入并保持；卡片淡入上移；减少动态效果：仅颜色过渡。
7. **使用者 — 评价** — 标签 'WORN BY'；三行低调的引语，Cormorant 斜体 22px 可可色，每行附 Josefin 13px 玫瑰烟色署名：'It smells like the inside of a jewelry box.' — Rowan M. / 'Warm without being loud — my winter signature.' — Amara T. / 'The pear opening is joy; then it goes soft and amber.' — Dee P. 脚注：'Invented reviews — sample copy.'
   布局：三条引语单列排列，之间以 1px 琥珀色细线分隔，max-w-3xl 居中；始终堆叠。
   动效：引语以 160ms 间隔淡入上移。
8. **页脚（Footer）** — 1px 腮红深色顶部细线。左侧：[BRAND] 字标和一行 Josefin 300 13px 玫瑰烟色：'An invented house — every note, price and review on this page is sample copy.' 右侧：锚点链接 'The scent · Notes · How to wear · The bottle'，可可色；可选 [CREDIT] 链接。无日期，无社交行。
   布局：py-12，max-w-5xl，flex 行，移动端换行为列。
   动效：无。

## 资源
- 图片：将 https://media.vibefather.ai/assets/e7e77a1e-73d7-4e50-b9fb-043f3dbc5115/bottle-hero.webp 下载到 public/images/bottle-hero.webp。Alt：'A heavy glass perfume bottle with a blank label standing on draped blush silk, amber light refracting through the glass.' 用作主视觉锚点（3:4 裁剪）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/e7e77a1e-73d7-4e50-b9fb-043f3dbc5115/mood-silk.webp 下载到 public/images/mood-silk.webp。Alt：'Folds of blush silk satin spilling across the frame in warm light.' 氛围条（4:3）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/e7e77a1e-73d7-4e50-b9fb-043f3dbc5115/mood-amber.webp 下载到 public/images/mood-amber.webp。Alt：'Rough golden amber resin pieces glowing honey-warm on an ivory surface.' 氛围条（4:3）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/e7e77a1e-73d7-4e50-b9fb-043f3dbc5115/mood-iris.webp 下载到 public/images/mood-iris.webp。Alt：'A single iris blossom resting on blush silk in mauve and amber tones.' 氛围条（4:3）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/e7e77a1e-73d7-4e50-b9fb-043f3dbc5115/bottle-detail.webp 下载到 public/images/bottle-detail.webp。Alt：'Macro of the amber glass stopper and bottle shoulder with a blank label edge.' 用于规格选择器旁（1:1）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/e7e77a1e-73d7-4e50-b9fb-043f3dbc5115/set-trio.webp 下载到 public/images/set-trio.webp。Alt：'Three small glass sample vials with blank labels in a row on blush silk.' 用于探索套装卡片（1:1）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图标：lucide-react（ISC）通过 npm 引入——演示购物袋按钮上的 shopping-bag，主视觉次要 CTA 中的 arrow-down，链接中的 arrow-right，移动端页眉的 menu 和 x。不使用其他图标：无 emoji、无星级评分、无香水瓶标志。
- 字体：@fontsource/cormorant-garamond（OFL，字重 500 和 600，外加 500 斜体）和 @fontsource/josefin-sans（OFL，字重 300 和 400），在 src/main.tsx 中导入；绝不从 fonts.googleapis.com 或任何 CDN 加载。在项目根目录的 ASSETS.md 中列出这两个字体家族和六张照片：路径、来源、生成器或作者、许可证。

## 禁止事项
- 无后端、无网络请求、无分析统计、无结账或支付：购买按钮是演示用锚点，点击后显示内联的“nothing is for sale”提示，所有价格均为虚构的示例文案。
- 不使用任何 CDN：字体通过 Fontsource 包提供，图标来自 lucide-react，照片来自 public/images；绝不外链，绝不使用 Unsplash/Pexels/Pixabay 或占位图服务。
- 生产构建：单条命令、压缩、无 source map、输出中不含 src/、使用相对路径（Vite base './'）；每张照片压缩为 ≤ 350 KB 的 WebP，使 dist/ 保持在 20 MB 以内。
- 仅单页加锚点导航；必须在 1440×900 和 390×844 下干净渲染、控制台零报错，并遵循 prefers-reduced-motion（金字塔完全展开且静止，视差和加载缩放关闭，仅用普通淡入）。
- 不使用真实香水品牌、香氛、调香师或原料商标：品牌、香氛名、香调、价格和评论均为虚构，所有出现名称的地方统一使用 [BRAND]/[PERFUME]。
- 不做成分、皮肤学或功效宣称：文案保持诗意和示例诚实——不出现“long-lasting”、“hypoallergenic”、“clean”或临床化措辞，浓度行始终标注为 sample。
- 照片仅展示瓶身、丝绸和植物——不出现人物；每个标签严格留白（任何瓶身或小瓶上无可读文字），任何地方不出现 logo；若生成的图片出现人脸或文字，必须替换。
- 不出现真实日期或年份：评论不带日期，任何地方不出现发布或上市日期。
- 锁定柔美感官方向：腮红底色配丝绸般柔和的渐变，一个琥珀色点缀，鸢尾紫为辅助色，可可色文字，Cormorant 搭配 Josefin，胶囊形元素和 18px 圆角；无深色模式、无霓虹、无硬阴影，界面过渡不得快于 300ms。
- 所有文案、标签、示例数据和 alt 文本均为美式英语，存放于 src/content.ts；当 [BRAND]、[PERFUME]、[PRICE_MID] 或 [SET_PRICE] 变更时，重写香调、氛围说明和评论以匹配新产品，而不是在蜡烛产品下保留琥珀香水文案。
- 在项目根目录的 ASSETS.md 中列出每个第三方文件（两个 Fontsource 字体家族、lucide 图标、六张照片）：路径、来源、许可证。

---
— Prompt by VibeFather · https://vibefather.ai/t/perfume-product-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
