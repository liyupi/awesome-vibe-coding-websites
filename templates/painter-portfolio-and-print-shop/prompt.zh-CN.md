> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 画家作品集与版画商店

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个原创的多页面网站，由虚构画家 [ARTIST_NAME] 主导，其 [ARTWORK_THEME] 实践通过系列筛选画廊、作品详情页、档案版画配置、持久购物车和委托咨询来呈现。仅使用虚构内容和六个提供的生成资源。

- 受众：网站的访客是 [AUDIENCE]。该模板本身面向独立画家、混合媒介艺术家和插画师，他们需要一个连贯的地方来展示原作、销售版画并讨论委托。
- 目标：让访客自然地从视觉发现过渡到作品详情、配置版画购买或明确的委托简报，同时保持作品在视觉上占主导地位。
- 语调：安静、善于观察、有触感且自信。像艺术家用平实的美国英语解释材料和过程那样写作；避免宏大的主张、销售压力、通用的励志文案以及对真实人物或机构的引用。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript 5
- 样式：Tailwind CSS 3.4 + 原生 CSS
- 库：react（MIT）、react-dom（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/fraunces（OFL-1.1）、@fontsource/manrope（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 创建一个 Vite React TypeScript 项目，npm 脚本 dev 设为 vite，build 设为 tsc -b && vite build；保持技术栈固定不变。
  - 将 vite.config.ts 的 base 设为 './'，build.outDir 设为 'dist'，build.sourcemap 设为 false，build.rollupOptions.input 设为六个根文件 index.html、gallery.html、artwork.html、shop.html、print.html 和 commissions.html。
  - 为每个根 HTML 文件指定相同的 /src/main.tsx 入口。从 window.location.pathname 和 URLSearchParams 进行路由；当 id 缺失或未知时，artwork.html 和 print.html 必须显示第一个目录条目。
  - 按标准 Tailwind 3.4 方式配置 Tailwind 和 PostCSS，扫描所有根 HTML 文件及 src/**/*.{ts,tsx}。将精确的颜色令牌、排版、关键帧、画框处理以及减少动态效果覆盖写入 src/index.css。
  - 在 src/index.css 中仅导入本地 Fontsource 字重文件：Fraunces 400/500/600、Manrope 400/500/600/700 和 IBM Plex Mono 400/500。
  - 将所有变量、导航、艺术家文案、系列、作品记录、版画记录、选项价格、常见问题、表单选项、图片路径和链接保留在 src/content.ts 中。为作品指定稳定 id：tidal-orchard、quiet-current、field-notes、after-rain 和 ochre-interval。
  - 使用共享的 React 购物车上下文，持久化到 localStorage，使用带版本号的购物车键，并优雅处理格式错误的存储数据。可售原作的最大数量为一；版画的最大数量为六。
  - 使用 motion 包的 React 入口点处理界面过渡和 useReducedMotion；仅使用 lucide-react 图标，每个仅图标控件都要有可访问标签。
  - 将列出的六张生成图片下载到 public/images 并使用相对图片路径。在项目根目录创建 ASSETS.md，列出每个图片路径、精确源 URL、生成署名、字体包和 OFL 许可证，以及 Lucide ISC 许可证。

## 变量
- [BRAND] — 工作室或店铺名称（默认："Mara Vale Studio"）。一个虚构的艺术家工作室名称，用于字标、页面标题、页脚和订单文案。
- [ARTIST_NAME] — 艺术家姓名（默认："Mara Vale"）。一个虚构人物，绝非真实艺术家或公众人物。
- [ARTWORK_THEME] — 艺术主题（默认："Coastal Abstractions"）。一个简短短语，用于指导系列名称、艺术家陈述和改写后的作品故事。
- [LOCATION] — 工作室所在地（默认："Portland, Maine"）。用于工作室介绍和页脚的城市及州或地区。
- [AUDIENCE] — 主要受众（默认："Collectors and design-led homeowners"）。店铺和委托文案所面向的访客。
- [CONTACT_EMAIL] — 联系邮箱（默认："hello@maravale.example"）。一个虚构的 .example 地址，用于此静态演示。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/painter-portfolio-and-print-shop（默认：是；删除此行即可移除）

页面与区块下的文案是针对默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 纸色（Paper）`#F3EFE6` — 主页面背景，叠加 2% 不透明度的细微 CSS 噪点纹理。
- 画布色（Canvas）`#FFFDF8` — 图片衬纸、表单、抽屉，以及交替的编辑式色带。
- 森林墨色（Forest Ink）`#20372E` — 主文本、深色按钮、页脚背景和强调边框。
- 炭灰色（Charcoal）`#292A27` — 正文和作品信息，用于森林绿显得过于鲜艳之处。
- 鼠尾草色（Sage）`#9AA48F` — 选中的筛选器、低调的装饰区域和次级插画点缀；切勿用作纸色背景上的正文。
- 陶土色（Terracotta）`#A94F37` — 可售状态点缀、焦点环、小下划线和激活状态，具备可访问的对比度。
- 柔和文本色（Muted Text）`#676A61` — 纸色或画布色背景上的次级文案和元数据。
- 细线色（Hairline）`#D3CCBE` — 一像素分隔线、输入框边框、图片轮廓和网格线。

### 字体排印（Typography）
- 展示文字和艺术家陈述：Fraunces（OFL），字重 400/500/600
- 正文、导航、按钮和表单：Manrope（OFL），字重 400/500/600/700
- 作品元数据、尺寸、价格和计数器：IBM Plex Mono（OFL），字重 400/500

### 布局与动效（Layout & motion）
- 间距：使用 12 列桌面网格，最大宽度 1360px，桌面端栏间距 48px，平板端栏间距 24px，移动端栏间距 20px。区块内边距桌面端为 112px，移动端为 72px。首屏文案使用 24px 内部间距；作品说明位于图片下方 14px。使用 8px 基础间距刻度，阅读栏宽保持在 62–68 个字符。
- 圆角：作品、图片衬纸、表单和按钮为方形，圆角 0–2px；仅可售状态徽章、筛选标签和小型购物车数量指示器可完全圆角。避免悬浮圆角卡片式构图和厚重阴影。
- 动效：在首页首屏，标题行通过垂直遮罩在 560ms 内显现，错开 80ms；工作室图片从不透明度 0 和缩放 1.025 过渡到 1，历时 850ms，然后在 180ms 延迟后显现较小的作品插图。
- 动效：区块标题和作品卡片以 24px 向上位移和不透明度过渡在 600ms 内显现，仅在首次进入视口时错开 70ms。如果 IntersectionObserver 不可用，切勿永久隐藏内容。
- 动效：画廊灯箱以 180ms 背景淡入和图片从 0.985 到 1 的缩放打开。上一张/下一张切换以 140ms 交叉淡入，控件不移动。
- 动效：购物车抽屉从右侧滑入，历时 260ms，遮罩淡入 180ms。数量总计以细微的 120ms 不透明度变化进行动画，而非弹跳徽章。
- 动效：印刷画框处理以 160ms 交叉淡入，同时图片尺寸保持固定。筛选后的画廊项目使用 180ms 淡入和即时、稳定的网格重排。
- 动效：在 prefers-reduced-motion 下，移除遮罩入场、缩放、平滑滚动和错开；立即渲染内容，并通过近乎即时的不透明度过渡保持状态变化可读。
- 图像：恰好使用六个本地托管的生成资源：一张宽幅编辑式工作室工作照片和五幅原创抽象丙烯与油画棒画作。画家为虚构人物，从背后拍摄，不露脸。画作共享暖象牙色、鼠尾草色、陶土色、炭灰色和柔和钴蓝色，具有分层调色刀纹理和柔和的北窗光线。在详情页上正面、不裁剪地展示画作资源；仅在卡片和首屏使用有意的 object-fit 裁剪。画框和衬纸预览是围绕同一作品的 CSS 处理，而非额外图片。切勿添加签名、水印、真实作品、真实肖像、库存照片或对具名艺术家的模仿。

## 页面与区块
### 首页（`index.html`）
1. **共享外壳、购物车抽屉和页脚** — 在所有六个页面上使用此外壳。一条 34px 的公告行显示 'Archival prints · Free US shipping over $150'。其下方，一个 74px 的页眉包含文字标识 [BRAND]，链接 Gallery 至 ./gallery.html、Prints 至 ./shop.html、Commissions 至 ./commissions.html、Studio 至 ./index.html#studio，以及一个带商品数量的购物车按钮。移动端菜单是一个可访问的全宽下拉菜单。全局购物车抽屉列出每个选中的艺术品或版画配置，包含缩略图、标题、尺寸、画框、单价、数量步进器和移除操作。它计算小计、低于 $150 时 $14 运费、$150 及以上免运费，以及总计。一个 'Mock checkout' 按钮打开内联的联系与配送表单，包含姓名、邮箱、街道、城市、ZIP 和国家；'Place demo order' 在本地验证、清空购物车，并显示 'Demo order confirmed — no payment was collected.'。页脚重复导航、[CONTACT_EMAIL]、[LOCATION] 以及可选的 [CREDIT] 链接。
   布局：公告和页眉作为一个紧凑单元粘性固定，使用 Paper（纸白）背景和 1px Hairline（细线）底边框。桌面导航为水平；移动端使用 Menu 和 X 图标。购物车是一个模态对话框，具有焦点陷阱、Escape 关闭，以及右侧最大宽度 440px 的面板，在移动端变为全宽。页脚为 Forest Ink（森林墨）配 Paper 文字，采用三列网格，折叠为一列。
   动效：使用指定的 260ms 购物车入场和 180ms 遮罩淡入；关闭时将焦点恢复到购物车触发器。
2. **首屏** — 眉题：'[ARTWORK_THEME] · [LOCATION]'。标题：'Paintings for rooms that ask you to linger.' 辅助文案：'[ARTIST_NAME] builds layered fields of color from coastal walks, weathered surfaces, and the quiet geometry of remembered places.' 主 CTA 'Explore the gallery' 链接至 ./gallery.html；次级 CTA 'Shop archival prints' 链接至 ./shop.html。在艺术品内嵌图下方添加一个小说明：'Tidal Orchard · acrylic and oil pastel on linen'。工作室照片必须是主导的视觉锚点，画家从背后呈现，不出现面部特写。
   布局：对于默认桌面视口，首屏填满公告和页眉之后的剩余首屏。使用 5/7 列分割：左对齐的展示文案使用 52–78px 的 clamp 字体大小，大型工作室首屏图像占据整个右侧高度。在工作室图像左下边缘重叠一个 34% 宽度的潮汐果园图像，带 12px Canvas（画布）衬边。在移动端，堆叠文案然后工作室图像，并保持内嵌图在图像边界内，无水平溢出。
   动效：使用设计部分描述的遮罩标题、工作室淡入缩放和延迟艺术品内嵌图；在减少动效模式下禁用所有三项。
3. **精选作品** — 标题：'Selected works'。引言：'Original paintings and small-batch prints, connected by surface, weather, and place.' 展示 Tidal Orchard、Quiet Current 和 After the Rain，包含标题、系列、尺寸和可售状态。每张图像通过 ./gallery.html?work=<id> 打开画廊灯箱；每个标题链接至 ./artwork.html?id=<id>。以 'View all five works' 链接至 ./gallery.html 结束。
   布局：使用不对称的 12 列编辑网格：Tidal Orchard 跨 7 列，Quiet Current 跨 4 列向下偏移 72px，After the Rain 跨 5 列从第 3 列开始。保持自然宽高比，并在细线行中显示元数据，而非叠加文字。移动端为一列，无偏移。
   动效：首次入场卡片以 70ms 错开显示；图像悬停使用 400ms 缩放至 1.015，无颜色叠加。
4. **工作室陈述** — 将此区块 id 设为 studio。眉题：'The studio'。标题：'A painting begins with paying attention.' 正文：'In her [LOCATION] studio, [ARTIST_NAME] works in thin washes, scraped layers, and direct oil-pastel marks. Each piece holds onto the evidence of its making. The result is an original body of [ARTWORK_THEME] work shaped by observation rather than a formula.' 包含三条简洁的材料说明：'Linen and birch panels'、'Acrylic, pigment, and oil pastel'、'Original work, carefully packed'。
   布局：Canvas 背景，采用 4/8 分割：左侧为粘性小区块标签和工作室首屏图像细节，右侧为 56px Fraunces 陈述和三条细线分隔的材料说明。在移动端，移除粘性定位，先堆叠图像再陈述。
   动效：仅简单首次入场显示；图像无视差。
5. **版画商店预览** — 标题：'Bring the surface home.' 文案：'Archival pigment prints on 310 gsm cotton rag paper, made to order with a one-inch white border.' 展示 Tidal Orchard、Quiet Current 和 After the Rain，分别显示 'From $68'、'From $84' 和 'From $96'。卡片链接至 ./print.html?id=<id>。添加一个低调的 'Paper, size, and frame guide' 链接至 ./shop.html#materials。
   布局：一个 Forest Ink 色带包含 4 列引言和 8 列三图版画行。在 Canvas 衬边中展示每件艺术品，带 1px Hairline 边框；价格使用 IBM Plex Mono。在移动端，使用水平吸附行，卡片宽度 82%，并可见下一张卡片的窥视。
   动效：卡片以短错开一起显示；移动端吸附为原生，不自动播放。
6. **委托征集** — 标题：'A painting made for your space.' 文案：'Share the wall, the light, and the colors you return to. Commissions begin at $1,800 and include two visual check-ins.' CTA 'Start a commission brief' 链接至 ./commissions.html；次级文字链接 'See available originals' 链接至 ./gallery.html。
   布局：双列收尾区块，左侧为大型 Fraunces 标题，右侧为紧凑的文案与 CTA 块，由 Terracotta（赤陶）顶部线条分隔。在移动端宽度堆叠。
   动效：除标准区块显示和按钮悬停状态外，无装饰性动画。

### 按系列浏览画廊（`gallery.html`）
1. **画廊介绍和系列筛选** — 眉题：'Original work'。标题：'Color, weather, and remembered places.' 引言：'Browse the current body of work by series. Select a painting for dimensions, availability, and the story behind its surface.' 筛选器为 All work (5)、Tidal Fields (3) 和 Ground Studies (2)。Tidal Fields 包含 tidal-orchard、quiet-current 和 after-rain；Ground Studies 包含 field-notes 和 ochre-interval。读取可选查询参数 work=<id>，并在渲染后打开该项的灯箱。
   布局：引言使用 7 列测量宽度，位于 72px 页面顶部内边距之下。筛选器在移动端位于水平可滚动行中，在桌面端为左对齐换行行。选中筛选器具有 Forest Ink 填充和 Paper 文字；未选中筛选器具有 Hairline 边框，无卡片容器。
   动效：筛选器变化使用 180ms 淡入和即时网格重排；使用 aria-live 更新结果计数。
2. **艺术品网格和可访问灯箱** — 目录默认值：Tidal Orchard，30 × 24 in，原作可售 $2,400，版画起价 $68；Quiet Current，36 × 28 in，原作已收藏，版画起价 $84；After the Rain，40 × 30 in，原作可售 $3,200，版画起价 $96；Field Notes No. 7，24 × 30 in，原作可售 $1,950，无版画版本；Ochre Interval，28 × 22 in，原作保留中，无版画版本。每张卡片显示标题、系列、尺寸和确切可售状态。点击卡片图像打开模态灯箱，包含大型未裁剪艺术品、标题、尺寸、可售状态、当前位置如 '2 / 5'、上一张/下一张控件、关闭控件，以及 'View artwork details' 链接至 ./artwork.html?id=<id>。点击标题直接进入详情页。
   布局：使用多样但确定性的 12 列网格：横向作品跨 7 列，纵向作品跨 5 列，行间距 64px，交替顶部偏移。不要将纵向画作裁剪为瀑布流瓷砖；保留每个资源的宽高比。灯箱是一个全视口 Forest Ink 96% 不透明度对话框，具有居中图像区域和固定控件栏。移动端网格为一列；灯箱控件保持在图像下方可见。
   动效：陷阱焦点，支持 Escape 和左/右箭头键，在筛选结果集内循环，防止背景滚动，并将焦点恢复到原始卡片。使用指定的灯箱过渡。

### 作品详情（`artwork.html`）
1. **作品查看器与购藏详情** — 从查询字符串读取 id，并渲染匹配的作品；缺失或未知的 id 显示 tidal-orchard。显示标题、系列、媒介“Acrylic and oil pastel on linen”、精确尺寸、可售状态，以及来自共享目录的原始价格。可售原作带有“Add original to cart”，数量固定为一。已收藏作品显示“Original collected”，并在可售时显示版画 CTA。暂留作品显示“Currently on hold”和链接到 ./commissions.html 的“Ask about this work”。有版数的作品还显示指向 ./print.html?id=<id> 的“Configure a print”。将“Insured shipping calculated for originals before payment”和“Seven-day return window for undamaged original work”作为示例商店政策包含在内。
   布局：面包屑链接回 ./gallery.html。使用 7/5 分栏，左侧为 Canvas 卡纸上的未裁剪图像，右侧为粘性购藏面板。元数据使用双栏细线表格。在移动端，堆叠图像、标题、可售状态和购买控件；移除粘性行为。
   动效：仅当客户端相关作品导航更改 id 时交叉淡入淡出；绝不以延迟阅读的方式对价格或可售状态做动画。
2. **作品故事、保养与相关作品** — 对于 Tidal Orchard，使用标题“An incoming tide, held in color”和文案“Muted blue moves across the linen in broad arcs. Terracotta marks sit like small pieces of fruit along a shoreline, while scraped charcoal keeps the softness anchored.”对于其他项目，在 src/content.ts 中提供一段独特的两句话故事，遵循相同的观察语气。手风琴涵盖 Materials、Original-work shipping 和 Print care，并给出具体答案。最后展示同一系列的两件相关作品，以及使用与画廊相同交互规则的图像/标题链接。
   布局：故事占据 5 栏阅读栏，旁边是 6 栏手风琴组。相关作品在 Hairline 分隔线下方使用双卡片网格。移动端为一栏，区块间距 48px。
   动效：手风琴在 180ms 内对高度做动画，并通过 aria-expanded 暴露展开状态；减少动态效果时立即打开。

### 档案版画商店（`shop.html`）
1. **版画系列** — 眉题：“Made to order”。标题：“Archival prints, thoughtfully framed.”简介：“Museum-weight cotton paper, color checked against the original, and simple solid-wood frames. Every print includes a one-inch border.”展示三件产品：Tidal Orchard 起价 $68，Quiet Current 起价 $84，After the Rain 起价 $96。筛选器为 All prints、Tidal Fields 和价格 Under $90；排序选项为 Featured 和 Price low to high。每张卡片链接到 ./print.html?id=<id>。
   布局：简介位于 6 栏区块中。筛选和排序控件共享一条细线工具栏，位于三栏产品网格上方，网格包含大型 Canvas 卡纸、未裁剪作品、标题、可选尺寸和起价。移动端使用一栏，采用原生 select 排序和大型筛选标签。
   动效：对筛选结果使用快速不透明度变化，不使用自动轮播。
2. **纸张与画框指南** — 将此区块 id 设为 materials。标题：“The surface matters.”详述三种版画尺寸：12 × 16 in、18 × 24 in 和 24 × 32 in。说明 310 gsm 棉浆纸、档案颜料墨水、哑光饰面和一英寸操作边框。画框选项为 Unframed +$0、Natural oak +$65、Matte black +$65 和 Chalk white +$65。包含“Frames include acrylic glazing and arrive ready to hang.”添加运输说明：版画按需制作，未装裱作品根据尺寸平铺或卷起运输，追踪信息包含在真实连接的商店中。
   布局：使用 5/7 分栏，左侧为大型材料陈述，右侧为四个带标签的 CSS 画框色板。下方，三个尺寸规格栏由 Hairlines 分隔。不要添加额外的房间照片或通用纹理图像。
   动效：在悬停或键盘聚焦时，画框色板获得 Terracotta 轮廓；无其他装饰性动效。
3. **商店问题** — FAQ 项目：“Are these open-edition prints?”回答是，没有人为稀缺；“Will the print look exactly like the screen?”解释仔细的颜色检查以及正常的屏幕差异；“Can I change a frame after ordering?”解释静态演示仅在浏览器中存储选择；“What if a print arrives damaged?”在示例政策中承诺凭照片更换。包含指向 ./commissions.html 的文本链接“Ask a print question”。
   布局：双栏区块，标题在左，右侧为四个以细线分隔的手风琴。移动端堆叠。
   动效：使用标准的无障碍手风琴行为，高度过渡 180ms。

### 配置版画（`print.html`）
1. **实时版画配置器** — 从查询字符串读取 id；缺失、未知或非版画 id 显示 tidal-orchard。渲染所选作品标题和“Archival pigment print on 310 gsm cotton rag”。Tidal Orchard 的尺寸价格为 $68 / $110 / $168；Quiet Current 为 $84 / $126 / $188；After the Rain 为 $96 / $142 / $208，对应 12 × 16、18 × 24 和 24 × 32 英寸。画框增加 $0（Unframed）或 $65（Natural oak、Matte black 或 Chalk white）。数量范围为 1 到 6。显示单价和立即更新的总价，然后是“Add configured print to cart”。将确切的 artwork id、尺寸、画框、数量、单价和总价持久化到共享购物车中。
   布局：使用 7/5 分栏。左侧 Canvas 舞台正面展示作品，带有按一英寸比例制作的卡纸和与所选选项匹配的 CSS 画框；Unframed 移除外部画框和阴影，但保留版画边框。右侧面板包含面包屑、标题、尺寸单选组、四个带 CSS 色板的画框单选按钮、数量步进器、价格明细和全宽添加按钮。在移动端，保持预览位于控件上方，并使加入购物车成为正常文档流中的按钮，而非覆盖层。
   动效：在 160ms 内交叉淡入淡出画框处理，不改变舞台尺寸。添加时，打开共享购物车抽屉，并通过 aria-live 宣布添加。
2. **版数详情与相关版画** — 包含 Paper and ink、Frame construction、Shipping 和 Returns 的手风琴。说明版数为开放版，版画没有人为编号，颜色可能因显示设备略有差异，且此静态站点不传输订单。最后以“You may also like”展示另外两件版画产品及其起价和链接。
   布局：详情使用窄阅读栏和手风琴栏，随后是双卡片相关版画网格，使用一致的 Canvas 卡纸。移动端堆叠所有内容。
   动效：仅标准手风琴过渡；相关产品在其固定卡纸内使用微妙的图像悬停缩放。

### 委托创作一幅画作（`commissions.html`）
1. **委托介绍与流程** — 眉题：'Commissions'。标题：'Your space, translated into paint.' 引言：'[ARTIST_NAME] accepts a small number of original commissions for [AUDIENCE]. Projects begin at $1,800, with final pricing based on dimensions, materials, and shipping.' 流程：01 'Share the room'，提供尺寸、光线和色调；02 'Align on direction'，提供书面范围和30%定金；03 'Review the work'，在最终交付前进行两次视觉检查。添加'Typical completion is 8–12 weeks after scope approval'，并且不显示日历日期。
   布局：首屏采用6/6分栏，文案在左，工作室首屏图片在右。下方三个流程列共享顶部细线（Hairline）和超大Fraunces数字，在移动端堆叠。图片相对于委托标题保持次要地位，但足够大以确立工作工作室的氛围。
   动效：每个流程步骤仅使用一次首次进入显现；不使用计数器或模拟排程动画。
2. **委托需求表单** — 构建一个经过验证的客户端表单，包含姓名、邮箱、地点、项目类型（Home、Workplace、Hospitality、Other）、墙面宽度和高度（以英寸为单位）、首选色调（Coastal neutrals、Earth and ochre、Deep contrast、Not sure）、预算（$1,800–$3,000、$3,001–$5,000、$5,001–$8,000、$8,000+）、时间线（Flexible、2–3 months、4–6 months）和项目备注。包含可选的房间照片选择，仅提供本地缩略图预览，并明确标注文件不会离开浏览器。提交时验证必填字段和数字尺寸，然后将按钮区域替换为'Your brief is ready. This static demo does not transmit inquiries; email [CONTACT_EMAIL] to continue.' 包含指向[CONTACT_EMAIL]的mailto链接。将非文件表单草稿保存在localStorage中，并提供'Clear draft'。
   布局：4列侧边栏汇总价格、时间线、定金和联系方式；8列表单在自然处使用两列字段，备注使用全宽。输入框具有Canvas背景、1px细线（Hairline）边框、最小高度48px、可见标签、内联错误和Terracotta聚焦环。移动端使用单列，无粘性侧边栏。
   动效：错误出现时无布局抖动动画。成功面板在160ms内淡入并获得程序化焦点。

## 资产
- 图片：将 https://media.vibefather.ai/assets/4e57d05f-b135-4ee7-a63c-a0d24ab68690/studio-hero.webp 下载到 public/images/studio-hero.webp。替代文本：A painter seen from behind working on an abstract canvas in a sunlit studio。用于首页主视觉、工作室宣言和委托介绍。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录此署名。
- 图片：将 https://media.vibefather.ai/assets/4e57d05f-b135-4ee7-a63c-a0d24ab68690/tidal-orchard.webp 下载到 public/images/tidal-orchard.webp。替代文本：Abstract horizontal painting with cobalt arcs, sage layers, and terracotta marks。用于首页嵌入区、精选作品、画廊、作品详情、版画卡片、配置器和购物车中的 Tidal Orchard。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录此署名。
- 图片：将 https://media.vibefather.ai/assets/4e57d05f-b135-4ee7-a63c-a0d24ab68690/quiet-current.webp 下载到 public/images/quiet-current.webp。替代文本：Vertical abstract painting with flowing sage and cobalt ribbons on warm ivory。用于精选作品、画廊、作品详情、版画卡片、配置器和购物车中的 Quiet Current。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录此署名。
- 图片：将 https://media.vibefather.ai/assets/4e57d05f-b135-4ee7-a63c-a0d24ab68690/field-notes.webp 下载到 public/images/field-notes.webp。替代文本：Abstract painting of scraped sage blocks, terracotta dashes, and charcoal marks。用于画廊、作品详情、相关作品和购物车中的 Field Notes No. 7。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录此署名。
- 图片：将 https://media.vibefather.ai/assets/4e57d05f-b135-4ee7-a63c-a0d24ab68690/after-rain.webp 下载到 public/images/after-rain.webp。替代文本：Vertical atmospheric painting with ivory veils, a cobalt pool, and terracotta flashes。用于精选作品、画廊、作品详情、版画卡片、配置器和购物车中的 After the Rain。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录此署名。
- 图片：将 https://media.vibefather.ai/assets/4e57d05f-b135-4ee7-a63c-a0d24ab68690/ochre-interval.webp 下载到 public/images/ochre-interval.webp。替代文本：Abstract painting with ochre vertical forms, a sage field, and a cobalt sweep。用于画廊、作品详情、相关作品和购物车中的 Ochre Interval。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录此署名。
- 图标：安装 lucide-react，并使用 Menu、X、ArrowLeft、ArrowRight、Plus、Minus、ShoppingBag、Trash2、Check、ChevronDown 和 Expand，采用 currentColor 和 1.5px 描边。不要添加品牌标志或外部图标字体。请在 ASSETS.md 中记录 Lucide 的 ISC 许可证。在本地将 favicon 绘制为 Paper 方块上以 Fraunces 字体呈现的 [BRAND] 首字母。
- 字体：通过 @fontsource/fraunces 自托管 Fraunces 400/500/600，通过 @fontsource/manrope 自托管 Manrope 400/500/600/700，并通过 @fontsource/ibm-plex-mono 自托管 IBM Plex Mono 400/500。在本地导入包中的字重文件，绝不使用字体 CDN，并在 ASSETS.md 中列出这些包和 OFL 许可证。

## 禁止事项
- 不要添加后端、服务器代码、API 路由、数据库、身份验证、外部 API、分析、支付收集或传输数据的表单。购物车、草稿、预览和明确标注的模拟结账必须保持客户端实现。
- 不要热链图片、字体、脚本、图标或样式。下载六张精确生成的图片，自托管所有 Fontsource 文件，保持每个运行时资源本地，并创建所需的 ASSETS.md。
- 不要使用现有艺术家的姓名、传记、签名、工作室身份、可识别的画作、真实艺术作品的复制品，或对真实展览、画廊、奖项、收藏家或客户的引用。
- 不要生成或插入文字、刻字、签名、徽标、水印、可识别的真实人物、名人肖像、动漫或游戏角色、品牌物品，或以具名艺术家风格呈现的图像。
- 不要使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务、CC BY-NC 或 CC BY-SA 资源、商业字体、受限组件源码，或允许许可证之外的依赖。
- 变量变化时，不要更改固定技术栈、精确颜色角色、排版、区块顺序或交互模型。重写所有默认文案、系列内容、艺术家陈述、产品详情和 alt 文本以适配新值，并将一切保留在 src/content.ts 中。
- 不要创建裸目录链接、仅客户端路由或空详情状态。每个页面都是真实的根 HTML 文件；内部链接包含 .html 文件名；artwork.html 和 print.html 始终回退到其第一个有效条目。
- 不要输出 source map、将 src 复制到 dist、使 dist 超过 20 MB、使用绝对部署资源路径，或要求生产输出超过 npm run build。
- 不要添加 SEO 元数据、Open Graph 标签、JSON-LD、站点地图、关键词块或额外营销区块。仅使用包含 [BRAND] 的纯文档标题和本地 favicon。
- 不要显示日期、虚假推荐语、人为制造版本稀缺性、未经核实的销售数字、虚假评论，或关于艺术家或材料的不实声明。
- 不要将核心内容隐藏在动效之后。支持键盘导航、可见焦点、对话框焦点陷阱、可访问名称、减少动效，并在 1440×900 和 390×844 下零控制台错误且无水平溢出。
- 除可选的 [CREDIT] 页脚链接外，不要在网站可见内容中的任何位置提及 VibeFather。

---
— Prompt by VibeFather · https://vibefather.ai/t/painter-portfolio-and-print-shop · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
