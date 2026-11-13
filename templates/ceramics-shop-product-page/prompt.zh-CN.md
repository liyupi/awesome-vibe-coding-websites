> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 陶瓷商店产品页

完全按照以下描述构建此网站。将 [VARIABLES] 替换为您自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一个平静、极简的单品电商页面。[BRAND] 是位于 [STUDIO_PLACE] 的一家虚构小型陶艺工作室，只卖一件商品：[PRODUCT_NAME]，一件由 [SET_PIECES] 组成的 [PRODUCT_KIND]，售价 $[PRICE]。页面以双栏产品主视觉为核心：左侧是五张代码绘制的 SVG 视图组成的大图库，支持缩放；右侧是粘性购买面板，带有圆形釉色色板。选择色板会平滑地为页面上产品的每一张 SVG 渲染图重新着色。购买流程完全在浏览器中运行：数量步进器、带行项目的滑入式购物车抽屉、一个加购项、免运费进度条，以及一个只弹出 toast 提示的模拟结账。主视觉下方依次为：故事条带、套装内容、护理手风琴、配送与退货、带评分条的评论、FAQ 和页脚。没有照片。所有产品图都是内联 SVG，带有 SVG 滤镜的炻器斑点效果和纸张纹理叠加层。以下所有文案均按默认变量值撰写。如果变量不同，请重写每一个标题、段落、商品名、评论、FAQ 和护理条目，使其符合新的品牌和产品，同时保持相同的长度、语气和结构。将所有文案和产品数据放在一个文件中：src/content.ts。

- 受众：陶艺师、手作者、销售一款主打产品多种饰面的小型 DTC 和手作品牌，以及想要改编一个精致静态单品商店的开发者。
- 目标：让访客选择一种釉色，立即看到产品变色，查看详情（件数、护理、配送、评论）并将套装加入购物车。一切必须像真实商店一样，同时以静态文件运行。
- 语气：安静、温暖、平实，像陶艺师在市集摊位上描述自己的作品。短句，具体数字（ml、cm、°C、天），不用炒作词，不用感叹号。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource-variable/fraunces（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、typescript（Apache-2.0）、vite（MIT）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 安装配置：
  - 使用以下命令创建脚手架：npm create vite@latest kiln -- --template react-ts
  - 安装：npm i motion lucide-react @fontsource-variable/fraunces @fontsource-variable/inter
  - 安装开发依赖：npm i -D tailwindcss@3.4 postcss autoprefixer，然后执行 npx tailwindcss init -p
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false, outDir: 'dist' }
  - 在 main.tsx 中，于 index.css 之前导入 '@fontsource-variable/fraunces' 和 '@fontsource-variable/inter'
  - 在 tailwind.config.js 中将 content 设置为 ./index.html 和 ./src/**/*.{ts,tsx}。扩展 colors，加入 bone #F4EFE6、paper #FBF8F3、sand #E3D8C6、ink #2B2420、muted #6E625A、clay #B4532F、clayDark #9A4426、foot #C8A27C。扩展 fontFamily，加入 display ['Fraunces Variable', 'Georgia', 'serif'] 和 sans ['Inter Variable', 'system-ui', 'sans-serif']。扩展 boxShadow，加入 soft: '0 1px 2px rgba(43,36,32,0.04), 0 12px 32px -12px rgba(43,36,32,0.18)' 和 lift: '0 2px 4px rgba(43,36,32,0.05), 0 20px 40px -14px rgba(43,36,32,0.24)'
  - src/content.ts 存放所有字符串、GLAZES 数组、views 数组、pieces、care、shipping、reviews、FAQ、附加商品项、FREE_SHIPPING_THRESHOLD = 150 和 FLAT_SHIPPING = 9
  - src/index.css 存放 Tailwind 指令、--glaze-hi、--glaze-base 和 --glaze-lo 的 @property 注册（syntax '<color>'，inherits: true）、蒸汽关键帧，以及一个 prefers-reduced-motion 块，用于禁用蒸汽和所有过渡
  - 釉色状态存放在 GlazeContext（src/state/GlazeContext.tsx）中。所选釉色的 hi/base/lo 十六进制值会作为 CSS 自定义属性设置在 <body> 上，并且 body 具有 transition: --glaze-hi 600ms, --glaze-base 600ms, --glaze-lo 600ms ease
  - 购物车状态存放在 CartContext（src/state/CartContext.tsx）中，使用 useReducer。持久化到 localStorage 键 'kiln-cart-v1'，并在加载时重新水合。行项目以 productId + glazeId 为键
  - SVG 产品部件是 src/render/ 中的 React 组件（Dripper.tsx、Server.tsx、Cup.tsx、SetScene.tsx、GlazeMacro.tsx、ScaleDrawing.tsx、Crate.tsx、Defs.tsx）。它们从 var(--glaze-*) 读取颜色，或者在购物车中绘制时从显式的 glaze prop 读取
  - 在 <body> 顶部渲染一次 <Defs />，作为一个隐藏的 0×0 SVG，其中存放共享的渐变和滤镜（glazeGrad、footGrad、speckle、grain、softShadow），通过 id 引用
  - index.html 的 <title> 为 '[BRAND] — [PRODUCT_NAME]'。favicon 为 public/favicon.svg：一个 32×32 的陶土色 #B4532F 圆形，内部有一个 bone #F4EFE6 的环形描边，描边宽度 2px，半径 9
  - 在项目根目录添加 ASSETS.md，列出 Fontsource 字体和 Lucide 图标及其来源 URL、作者和许可证，并声明所有产品图稿均为原创内联 SVG

## 变量
- [BRAND] — 工作室／品牌名称（默认："Ollan Ceramics"）。虚构的制作者或店铺名称；用于页眉字标、标题、页脚和文案中。
- [PRODUCT_NAME] — 产品名称（默认："The Ridgeline Pour-Over Set"）。页面所销售的单一产品。
- [PRODUCT_KIND] — 产品类型（默认："handmade stoneware pour-over coffee set"）。用于眉题、引言和故事文案的简短描述。
- [SET_PIECES] — 套装包含的件数（默认："dripper, 600 ml server, two 180 ml cups"）。逗号分隔的列表；驱动"套装包含什么"卡片以及绘制哪些 SVG 部件。
- [PRICE] — 价格（美元，仅数字）（默认："148"）。保持在 $150 免运费门槛以下，以便进度条有内容可显示。
- [STUDIO_PLACE] — 工作室所在地（默认："Fernlow Valley"）。用于公告栏、故事条和页脚的虚构地名。
- [CREDIT] — 在页脚保留一个指向 https://vibefather.ai/t/ceramics-shop-product-page 的小型"Template by VibeFather"链接（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 骨白（Bone）`#F4EFE6` — 页面背景
- 纸白（Paper）`#FBF8F3` — 卡片、画廊展示台、抽屉、手风琴面板
- 沙色（Sand）`#E3D8C6` — 细线边框（1px）、分隔线、公告栏、评分条轨道、缩略图边框
- 墨色（Ink）`#2B2420` — 主文本、页脚背景、选中色板圆环、Toast 背景
- 柔和色（Muted）`#6E625A` — 次要文本、说明文字、元数据
- 陶土色（Terracotta）`#B4532F` — 唯一强调色：主按钮、星星、进度填充、悬停链接、购物车徽标
- 深陶土色（Terracotta Dark）`#9A4426` — 主按钮悬停/激活
- 陶足色（Clay Foot）`#C8A27C` — 每个 SVG 器物上的无釉底足带（阴影侧 #A88560）
- 咖啡色（Coffee）`#3B2418` — SVG 渲染中杯子和分享壶内的液面
- 釉色燕麦（Glaze Oat）`#E6D9C2` — 釉色色板：高光 #F6EFE2，基色 #E6D9C2，暗部 #BFAE90
- 釉色余烬（Glaze Ember）`#B4573A` — 釉色色板（默认选中）：高光 #D98A68，基色 #B4573A，暗部 #7E3622
- 釉色苔藓（Glaze Moss）`#7A8260` — 釉色色板：高光 #A3AA86，基色 #7A8260，暗部 #535A40
- 釉色潮汐（Glaze Tide）`#5B7380` — 釉色色板：高光 #8DA3AE，基色 #5B7380，暗部 #3C4F59
- 釉色煤黑（Glaze Coal）`#3A3330` — 釉色色板：高光 #6A5F59，基色 #3A3330，暗部 #1F1A18

### 字体排印（Typography）
- 展示字体：产品名称、区块标题、价格、大号评分数字、故事陈述：Fraunces Variable（OFL），字重 400/500
- 文本字体：正文、UI 标签、按钮、导航、说明文字：Inter Variable（OFL），字重 400/500/600

### 布局与动效（Layout & motion）
- 间距：8px 基础网格。容器最大宽度 1240px，居中，移动端水平内边距 24px，1024px 及以上为 40px。区块垂直内边距桌面端 112px，移动端 72px。卡片内边距 28px（移动端 20px）。网格间距 24px，主视觉列间距 64px。字号比例：H1 产品名称 Fraunces 500 48px/1.05 桌面端，移动端 36px，字距 -0.02em，font-variation-settings 'opsz' 96, 'SOFT' 50。区块 H2 Fraunces 400 40px/1.1 桌面端，移动端 30px。卡片标题 Fraunces 500 22px。正文 Inter 400 16px/1.65。小标签 Inter 500 12px 大写，字距 0.12em，使用柔和色（Muted）。
- 圆角：画廊展示台 28px；卡片、手风琴面板和抽屉行缩略图 20px；缩略图 14px；按钮、步进器、色板、徽标和 Toast 完全圆角（9999px）。抽屉外边缘无圆角。
- 动效：库：Motion（motion/react）。全局缓动 [0.22, 1, 0.36, 1]。
- 动效：滚动显现：每个区块的标题块和卡片从 y 24px、不透明度 0 淡入上移至 1，持续 700ms，whileInView 配合 once: true 和 amount 0.2。网格中的卡片以 80ms 错开。
- 动效：釉色切换：--glaze-hi/base/lo 自定义属性以 600ms ease 过渡，因此每个渲染同时平滑变色。'Glaze —' 旁的釉色名称标签以 200ms 交叉淡入淡出。
- 动效：画廊视图切换：AnimatePresence 交叉淡入淡出，不透明度加缩放 0.98→1，300ms。
- 动效：蒸汽：滴滤器和分享壶上方（套装和滴滤器视图中）有三条波浪形 SVG 路径。每条上升 translateY 0→-28px，同时不透明度 0→0.55→0 持续 6s，循环，延迟分别为 0s、2s 和 4s。描边 #FFFFFF，宽度 6，linecap round，通过 feGaussianBlur stdDeviation 2 模糊。
- 动效：悬停抬升：卡片 translateY -4px，并在 200ms 内将 shadow-soft 换成 shadow-lift。色板缩放至 1.08。缩略图边框提升为墨色（Ink）40% 不透明度。
- 动效：加入购物车：按钮标签切换为 Check 图标加 'Added'，持续 1.4s（交叉淡入淡出 150ms），然后抽屉打开。
- 动效：购物车抽屉：面板以 380ms 从 x 100%→0 滑入。遮罩以 250ms 淡入至 rgba(43,36,32,0.4)，backdrop-blur 2px。新行项目以高度和不透明度动画进入，移除的项目折叠退出（布局动画 250ms）。
- 动效：免运费进度条宽度在小计变化时以 500ms 动画过渡。
- 动效：评分条在滚动进入视图时以 900ms 从 0 动画至其值，错开 60ms。
- 动效：手风琴：内容高度自动动画 280ms，Plus 图标旋转 45° 以呈现为关闭标记。
- 动效：Toast：在底部中央上滑 16px 并以 250ms 淡入，停留 3s，然后淡出。
- 动效：prefers-reduced-motion: reduce（通过 useReducedMotion 和 CSS 媒体查询检查）：无位移或缩放动画，蒸汽路径隐藏，釉色和画廊切换即时完成，抽屉以仅不透明度的 150ms 淡入出现，评分条以全宽渲染。
- 图像：完全无位图。每个产品图像都是原创内联 SVG（viewBox 0 0 800 800），以相同方式构建。每个器物是一个简单轮廓路径，填充 url(#glazeGrad)，一个水平 linearGradient，在 0% 处为 var(--glaze-hi)，45% 处为 var(--glaze-base)，100% 处为 var(--glaze-lo)。釉面在每个器物约 82% 处停止，形成手绘波浪形"浸釉线"，其下方显示一条无釉底足带，颜色为 #C8A27C，阴影侧为 #A88560。一个"斑点"滤镜叠加微小的深色铁斑：feTurbulence fractalNoise baseFrequency 0.85，numOctaves 2，然后 feColorMatrix 至稀疏 alpha 阈值，颜色 #3A2A20，35% 不透明度，裁剪至釉面区域。每个唇缘沿边有白色高光（1.5px 描边，50% 不透明度），并有一条窄的垂直高光条纹（白色，18% 不透明度，模糊）。每个器物位于柔和的接地阴影椭圆上（墨色（Ink）18%，模糊 14px）。造型为通用且原创。滴滤器是一个光滑、略凸的锥体，带卷边、扁平圆形底座法兰和右侧一个小半圆环手柄，无棱纹或签名细节。分享壶是一个圆腹卡拉夫瓶，带短拉壶嘴和收窄的瓶颈。杯子是低矮、无柄的平底杯，略有锥度。画廊展示台背景为径向渐变，中心 #FBF8F3 至边缘 #EFE7DA。一个固定的全屏纸张纹理叠加层（feTurbulence baseFrequency 0.9，numOctaves 2，mix-blend-mode multiply，不透明度 0.05，pointer-events none）覆盖整个页面。评论头像为圆圈中的首字母，以其釉色着色。没有任何面孔、人物、产品照片或任何类型的标志。

## 页面与区块
### [BRAND] — [PRODUCT_NAME] (`index.html`)
1. **公告栏** — 单行居中：'Free shipping on orders over $150 · Every set thrown by hand in Fernlow Valley'。Inter 500 13px，Ink 色。
   布局：全宽栏高 36px，Sand 背景，文字居中。移动端仅显示 'Free shipping over $150'。
2. **页头** — 左侧：logo 标记（22px SVG，Ink 色圆环，2px 描边，环内一个小 Terracotta 实心圆，半径 5），然后是字标 'Ollan Ceramics'，Fraunces 500 22px。中间：锚点链接 'The set'（#the-set）、'Care'（#care）、'Reviews'（#reviews）、'FAQ'（#faq），Inter 500 14px，Muted 色，悬停时变为 Ink 色并出现一条从左向右生长的 1px 下划线。右侧：一个 44px 圆形购物车按钮，内含 Lucide ShoppingBag 图标（20px）。一个 Terracotta 徽章（18px 圆形，白色 Inter 600 11px）显示商品总数，数量变化时以 300ms 完成 1→1.25→1 的缩放弹跳。
   布局：固定在顶部 0，高 72px，Bone 背景 85% 不透明度，backdrop-blur 8px，滚动 8px 后出现 1px Sand 下边框。低于 768px 时中间链接隐藏，仅保留 logo 和购物车。购物车按钮打开抽屉。
3. **产品主视觉** — 图库：来自 content.views 的五个视图，分别标注为 'The set'、'Dripper'、'Cup'、'Glaze close-up'、'Scale'。(1) The set：滤杯位于分享壶上方偏左，两只杯子在右侧略微重叠，带蒸汽。(2) Dripper：滤杯以 3/4 角度放大展示，内部可见为椭圆杯口和较暗的内渐变，带蒸汽。(3) Cup：一只杯子放大展示，咖啡液面为 #3B2418 椭圆，带一小段白色高光弧。(4) Glaze close-up：全画幅微距釉面渐变，密集斑点，下三分之一处有一条波浪状浸釉线，下方为素坯。(5) Scale：所有器物的线稿，1.5px Ink 描边，釉面填充 30% 不透明度，尺寸标注线标签为 Inter 500 14px：'Dripper 11 cm'、'Server 14 cm · 600 ml'、'Cup 7.5 cm · 180 ml'。购买面板，从上到下：眉标 'HAND-THROWN STONEWARE · SMALL BATCH'。H1 'The Ridgeline Pour-Over Set'。评分行：五个 16px Lucide Star 图标填充 Terracotta，然后 '4.9 · 128 reviews' 作为指向 #reviews 的链接。价格 '$148'，Fraunces 500 30px，旁边 'Free shipping over $150' 为 Muted 14px。段落：'A dripper, a server and two cups, thrown from the same clay and dipped in the same glaze bath. Made for one slow pour in the morning and a second one you share.' 一条 1px Sand 分隔线。标签 'Glaze — Ember'（名称会更新）。五个 36px 圆形色板（Oat、Ember、Moss、Tide、Coal），每个填充从 hi 色（30% 30% 位置）到 base 色的径向渐变，带 1px 内嵌 Ink 圆环（10%）。选中色板有 2px Ink 圆环，偏移 3px。色板具有 role radiogroup 和方向键支持，原生 title 属性显示釉色名称。下方 Muted 14px：'Each glaze breaks differently in the kiln. No two sets match exactly.' 然后一行：数量步进器（胶囊形，1px Sand 边框，高 52px，Lucide Minus 和 Plus 按钮，数字在 1 到 10 之间，aria-live）和 'Add to cart · $148' 按钮（占满剩余宽度，高 52px，Terracotta 背景，Bone Inter 600 15px 文字，悬停 Terracotta Dark；标签中的价格随数量相乘）。其下三行卖点，18px Lucide 图标为 Muted 色：Truck 'Ships in 3–5 business days'、RotateCcw '30-day returns, label on us'、PackageCheck 'Breakage in transit fully covered'。
   布局：1024px 及以上为 12 列网格。图库占第 1–7 列，购买面板占第 8–12 列，间距 64px。购买面板 position: sticky，top 96px。图库舞台：aspect-ratio 1/1，Paper 背景带径向渐变，圆角 28px，shadow-soft，overflow hidden。40px 圆形上一张/下一张按钮（Lucide ChevronLeft 和 ChevronRight，Paper 背景 90%）距左右边缘 16px，垂直居中。左下角视图说明胶囊：Paper 90%，Inter 500 12px，显示如 'The set · 1/5'。舞台下方一行五个 1:1 缩略图，每个宽 20% 减去间隙（12px 间隙），显示各视图的迷你版本。活动缩略图有 2px Ink 边框，其余为 1px Sand 边框。图库获得焦点时左右方向键切换视图。在 (hover: hover) 和 (pointer: fine) 的设备上缩放：悬停舞台显示 180px 圆形放大镜（2px Paper 边框，shadow-lift），跟随光标并以 2.5× 缩放显示同一 SVG，偏移使光标下区域居中，光标变为 none。触摸缩放：点击舞台将 SVG 缩放至 2×，transform-origin 在点击点，拖动平移，再次点击重置。舞台右上角有一个小型 Lucide ZoomIn 提示芯片。低于 1024px 时主视觉堆叠：图库在前全宽，然后购买面板不吸顶。移动端，当主 Add to cart 按钮滚出视野（IntersectionObserver），固定底栏滑入。高 72px，Paper 背景，1px Sand 上边框和安全区内边距，显示产品名 Fraunces 16px、价格和一个紧凑的 'Add to cart' 胶囊按钮。
   动效：购买面板加载时淡入上移（子元素错开 60ms）。图库视图间交叉淡入。釉色过渡 600ms。视图 1 和 2 中蒸汽循环。色板悬停缩放 1.08。
4. **故事条** — 眉标 'FROM THE STUDIO'。陈述句 Fraunces 400 40px/1.15：'Thrown on a kick wheel in Fernlow Valley, one set at a time.' 段落：'We use an iron-rich stoneware, mix five glazes by hand in the studio and fire every set twice. The dripper's single hole keeps the flow slow and even, so the cup tastes of the beans, not of the rush.' 三个数据，每个为大号 Fraunces 500 56px 数字配 Inter 14px Muted 说明：'38 h'，'from wet clay to packed crate'；'2'，'firings, the last at 1240 °C'；'5'，'glazes mixed in-house'。
   布局：全出血 Paper 色带，上下 1px Sand 边框。容器内 12 列网格：陈述句和段落占第 1–6 列（段落 max-width 52ch），三个数据位于第 8–12 列，垂直列表，之间以 1px Sand 分隔线隔开，每项上下内边距 24px。移动端全部堆叠，数据变为 3 列行，数字 28px。
   动效：淡入上移显现。数据数字进入视野时从 0 计数到目标值，历时 1.2s（减少动态效果下为瞬时）。
5. **套装内容** — id 'the-set'。眉标 'IN THE CRATE'。H2 'What's in the set'。四张卡片，每张含该器物在当前选中釉色下的 SVG 插图、Fraunces 标题和 Inter 14px Muted 规格行：'Dripper'，'Single-hole cone · fits #2 filters · 11 cm tall'；'Server'，'600 ml · pulled spout · 14 cm tall'；'Two cups'，'180 ml each · unhandled · 7.5 cm tall'；'The crate'，'Molded-pulp crate with 40 unbleached filters and a care card'。木箱卡片显示代码绘制的箱子，使用 #C8A27C 和 #A88560 色调带木纹，非釉面。
   布局：标题块左对齐，max-width 640px，网格上方 48px。桌面 4 列网格，640px 至 1023px 为 2 列，移动端 2 列，间距 16px。每张卡片 Paper 背景，圆角 20px，1px Sand 边框。插图区域 aspect 4/5，带径向舞台渐变，标题和规格在下方，内边距 20px。
   动效：卡片错开淡入上移 80ms，悬停上浮，插图悬停 400ms 内缩放至 1.03。
6. **保养** — id 'care'。左列：眉标 'CARE'，H2 'Care for it like you plan to keep it.'，段落 'Stoneware is tough, but it remembers sudden heat. A few habits keep the glaze bright for years.' 右列：四项手风琴。'Washing'：'Dishwasher-safe on the top rack. Washing by hand keeps the glaze glossy longer.' 'Heat'：'Warm the pieces with hot tap water before pouring boiling water. Never move a piece straight from the fridge to the stove.' 'Microwave'：'Safe for reheating. The unglazed foot can get hot, so lift by the rim.' 'Patina and crazing'：'Fine lines can appear in lighter glazes over time. They are normal for stoneware and do not affect use.' 第一项默认展开。
   布局：桌面两列：左列占 5 列，sticky 于 top 120px，右列占 7 列。手风琴项为 Paper 背景，圆角 20px，1px Sand 边框，间距 12px。标题行为全宽按钮，Inter 600 16px，右侧 20px Lucide Plus，具有 aria-expanded 和 aria-controls。面板水平内边距 28px。可同时展开多项。移动端堆叠。
   动效：高度自动动画 280ms。展开时 Plus 旋转 45°。区块淡入上移。
7. **配送与退货** — 眉标 'DELIVERY'。H2 'Shipping and returns'。三张卡片，每张含 48px Sand 圆形内的 24px Lucide 图标（Terracotta 色）、Fraunces 22px 标题和正文。Truck 'Shipping'：'Free over $150, otherwise $9 flat. Packed in molded pulp with no plastic. Ships in 3–5 business days.' RotateCcw 'Returns'：'You have 30 days to return an unused set. We email you a prepaid label.' PackageCheck 'Breakage'：'If anything arrives chipped or cracked, send us a photo and we will ship a replacement piece the same week.'
   布局：桌面 3 列网格，移动端堆叠。Paper 卡片，圆角 20px，1px Sand 边框，内边距 28px。标题块位于网格上方，间距 48px。
   动效：卡片错开淡入上移 80ms，悬停上浮。
8. **评价** — id 'reviews'。眉标 'REVIEWS'。H2 'What people pour with it'。摘要列：'4.9'，Fraunces 500 80px，五颗 Terracotta 星，然后 'Based on 128 reviews' 为 Muted 色。五条评分条对应 5 到 1 星，计数 112、12、3、1、0：标签如 '5★' 为 Inter 500 13px，8px 全圆角 Sand 轨道，Terracotta 填充按 count/128 比例，计数在右侧。评价卡片各显示 44px 首字母圆（釉色 base 色 25% 不透明度，Ink Inter 600 14px 首字母）、姓名、'Verified buyer · Glaze: <glaze>' 为 Muted 13px、星级、Fraunces 500 18px 标题和正文段落。六条评价：(1) Maren A.，Moss，5★，'The pour is slower, in a good way'，'The single hole makes me wait, and I have stopped rushing my mornings. Moss has tiny iron flecks that catch the window light.' (2) Theo R.，Oat，5★，'Heavier than it looks'，'It holds heat far better than my old glass carafe. The raw clay foot feels great in the hand.' (3) Priya K.，Tide，5★，'Used the same day it arrived'，'I bought it for my sister. She sent me a photo of her first cup an hour after opening the crate. Packed very well.' (4) Jonah L.，Coal，4★，'Lovely, one small note'，'Beautiful set. The cups are smaller than I expected at 180 ml, so check the scale view before you order.' (5) Ines V.，Ember，5★，'Even better in person'，'Ember shifts from rust to almost pink where the glaze thins at the rim.' (6) Sam O.，Oat，5★，'A second set for the office'，'The first one lives at home. Now I have the same quiet ritual at my desk.' 初始仅显示前四条。'Show more reviews' 按钮（胶囊形，1px Ink 边框，Ink 文字，高 48px）显示其余两条后隐藏自身。
   布局：桌面 12 列网格：摘要 sticky 于第 1–4 列，top 120px，评价填充第 6–12 列，为等高 Paper 卡片的两列无瀑布流网格（圆角 20px，1px Sand 边框，内边距 24px，间距 16px）。移动端摘要在上，评价单列。按钮居中于网格下方，间距 32px。
   动效：评分条进入视野时生长，错开 60ms。卡片淡入上移。新显示卡片淡入上移，错开 80ms。
9. **FAQ** — id 'faq'。眉标 'QUESTIONS'。H2 'Before you order'。五项：'Will my set look exactly like the pictures?'，'No two sets match. Glazes pool and break differently in every firing, so expect small shifts in tone and speckle.' 'What filters does the dripper take?'，'Standard #2 cone filters. We include 40 unbleached ones to start.' 'Is the glaze food-safe?'，'Yes. All five glazes are lead-free and fired to about 1240 °C.' 'Can I buy pieces separately?'，'Not yet. We sell complete sets so every piece comes out of the same firing.' 'How long until it ships?'，'Sets in stock ship in 3–5 business days. Around the holidays, allow up to 10.'
   布局：单个居中列，max-width 760px，标题居中于上方。手风琴使用与保养相同的组件，但一次只能展开一项，且全部默认关闭。项之间以 1px Sand 分隔线隔开，无卡片背景，上下内边距 24px。
   动效：与保养相同的手风琴动效，外加区块淡入上移。
10. **页脚** — 字标 'Ollan Ceramics' 配 Bone 色 logo 标记，以及一行 'Small-batch stoneware for slow mornings.'，Bone 色 70%。三个链接列，均指向本页锚点：Shop（'The set' #the-set、'Glazes' #top、'Reviews' #reviews）；Studio（'Our process' #story、'Care' #care）；Help（'Shipping' #shipping、'FAQ' #faq）。底部行以 1px Bone 15% 分隔线隔开：左侧 '© 2026 Ollan Ceramics. Thrown in Fernlow Valley.'，右侧 'This is a demo store. Nothing here is for sale.'，均为 Inter 13px，Bone 色 60%。
   布局：全出血 Ink #2B2420 背景，Bone 文字，上内边距 80px，下内边距 40px。桌面 12 列网格：品牌块占 5 列，三个链接列各占 2 列，从第 7 列开始。移动端品牌块堆叠在 2 列链接网格上方。为故事条设置 id 'story'，为配送区块设置 id 'shipping'，使链接可解析。
   动效：仅链接悬停下划线。
11. **购物车抽屉与 toast（全局覆盖层）** — 抽屉头部：'Your cart (n)'，Fraunces 500 22px，右侧关闭按钮（Lucide X）。免运费区块，行 'You're $2 away from free shipping'（计算为 150 − 小计），当小计达到 $150 或以上时变为 'Free shipping unlocked' 并带 Lucide Check 图标，上方 8px Sand 轨道，Terracotta 填充为 min(subtotal/150, 1)。行项目显示 72px Paper 缩略图，内含该行釉色的迷你 SetScene（作为显式 glaze prop 传入）、产品名 Inter 600 15px、'Glaze: Ember' 为 Muted 13px、紧凑数量步进器（高 36px，最小 1，最大 10）、右侧行价格，以及 'Remove' 文字按钮，Muted 13px，悬停下划线。再次添加相同釉色会增加该行数量，不同釉色则创建新行。项目下方为加购行，位于 1px Sand 虚线框内：小型代码绘制的折叠亚麻布 SVG，颜色 #E6DCCB，'Linen pour cloth'、'$12' 和一个 'Add' 胶囊按钮。亚麻布加入购物车后该行隐藏。页脚：'Subtotal' 配金额 Fraunces 500 22px，注释 'Shipping and taxes calculated at checkout.' 为 Muted 13px，然后全宽 'Checkout' 按钮（Terracotta，52px，全圆角，Lucide Lock 图标 16px）。点击仅显示 toast 'This is a demo store. Checkout is turned off.' 空状态：80px 轮廓 SVG 杯子，Ink 描边 40%，'Your cart is empty' 为 Fraunces 22px，以及一个 'Keep browsing' 轮廓胶囊按钮关闭抽屉。Toast：Ink 胶囊，Bone Inter 500 14px 文字，带 Lucide Info 图标，max-width 90vw。
   布局：抽屉固定于右侧，全高，桌面宽 440px，移动端 100vw，Paper 背景，1px Sand 左边框和 shadow-lift。内部为 flex 列：72px 头部带下边框；免运费区块内边距 24px；可滚动项目列表内边距 24px，项目间 1px Sand 分隔线；加购行；以及固定于底部的页脚，带上边框、24px 内边距和安全区内边距。覆盖层覆盖页面，点击关闭抽屉。抽屉具有 role dialog、aria-modal true 和焦点陷阱。打开时焦点移至关闭按钮，关闭时返回触发元素。Esc 关闭，打开时锁定 body 滚动。Toast 固定于底部居中，距底部 24px（移动端显示粘性栏时为 96px），z-index 高于抽屉。
   动效：抽屉滑入伴随覆盖层淡入，行项目使用布局动画，详见动效部分。Toast 上滑并淡入。减少动态效果下全部仅使用不透明度。

## 资产
- 字体：Fraunces Variable 和 Inter Variable，通过 @fontsource-variable/fraunces 和 @fontsource-variable/inter（OFL-1.1）自托管，在 main.tsx 中导入并由 Vite 打包。在 ASSETS.md 中列出两者，注明来源 https://fontsource.org、作者（Fraunces 为 Undercase Type，Inter 为 Rasmus Andersson）及许可证。
- 图标：仅使用 lucide-react（ISC）图标：ShoppingBag、Star、Minus、Plus、Truck、RotateCcw、PackageCheck、ChevronLeft、ChevronRight、ZoomIn、X、Check、Lock、Info。从 npm 包中 tree-shaking 引入，并在 ASSETS.md 中列出，注明来源 https://lucide.dev 及 ISC 许可证。
- 图像：无位图图像。每个产品视图、单品卡片、购物车缩略图、板条箱、亚麻布、空购物车杯子、标志图形和 favicon 均为在 src/render/ 和 public/favicon.svg 下用代码绘制的原创内联 SVG。炻器斑点与纸张纹理为 SVG 滤镜（feTurbulence）。在 ASSETS.md 中注明所有插图均为原创且由代码绘制。

## 禁止事项
- 无后端：不写服务器代码，不设 API 路由、数据库、认证、分析或第三方 API 调用。购物车仅存在于 React state 和 localStorage 中。
- 无可用结账、支付表单、卡号输入或支付组件。Checkout 按钮只显示演示 toast。
- 无任何会提交到某处的表单。没有 newsletter 订阅。
- 不使用真实支付服务商的 logo 或徽章，也不使用真实陶瓷或咖啡品牌名、logo、口号或产品名。
- 不要复制真实品牌的标志性滤杯轮廓或商标形状。绘制上文描述的通用原创造型：光滑锥体、卷边、平法兰和环形手柄，不带螺旋肋条或独特开孔。
- 不使用产品照片、图库图片或占位图服务。所有图形均为代码内联 SVG 绘制。
- 不使用真实人物面孔或肖像。评价者仅以釉色圆形中的首字母出现，姓名均为虚构。
- 不要复制现有商店的文案。仅使用 src/content.ts 中的虚构文案。
- 不要从 fonts.googleapis.com、fonts.gstatic.com 或任何 CDN 加载字体。通过 Fontsource 自托管 Fraunces 和 Inter。不使用商业或定制品牌字体。
- 不使用 CDN 的 <script> 或 <link> 标签。所有内容均在 dist/ 中本地交付。
- 不要使用 Aceternity UI、Tailwind Plus / Tailwind UI 或购买的模板源码。每个组件都从零构建。
- 不要更改技术栈（Vite 5 + React 18 + TypeScript、Tailwind CSS 3.4、Motion、lucide-react），除非用户要求。
- 生产构建中不生成 source map，不要将 src/ 复制到 dist/。
- 使用相对资源路径（Vite base './'）。页内导航仅使用 #anchors，任何其他内部链接必须指向文件名，如 ./index.html，绝不能指向裸目录。
- 保持 dist/ 在 20 MB 以下。
- 在 1440×900 或 390×844 下无控制台错误或警告，移动端无横向滚动。
- 尊重 prefers-reduced-motion：无蒸汽、无变换，釉色和画廊切换即时完成。
- 无 SEO 附加项：无 meta 描述、Open Graph 标签、JSON-LD 或 sitemap。仅保留 <title> 和 favicon。
- 除页脚可选署名链接外，网站任何位置都不要提及 VibeFather。

---
— Prompt by VibeFather · https://vibefather.ai/t/ceramics-shop-product-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
