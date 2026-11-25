> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 风景摄影师作品集

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为一个虚构的风景与编辑类摄影师（非婚礼摄影）打造的作品集网站。全出血照片系列（海岸线、沙漠、高山湖泊、夜空），支持键盘与滑动导航，带拍摄详情的灯箱，每组系列拍摄地点的地图，提供纸张与尺寸选项的版画商店，授权咨询，带日期的工坊，以及一份简短的日志。照片以统一的低饱和、氛围感风格生成。近黑色画廊 #0F0F10，暖白色与一抹安静的赭石色点缀 #C9A227；精致的衬线字体。

- 受众：照片编辑、购买版画的收藏者，以及寻找野外工坊的摄影师。
- 目标：让照片撑起首屏，然后引导至某个系列、版画订购、授权咨询或工坊名额。
- 语调：安静而精确，像长途跋涉后在木屋里写下的图注：地名、天气与光线，没有宏大宣言。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：motion（MIT）、lucide-react（ISC）、@fontsource/cormorant-garamond（OFL-1.1）、@fontsource-variable/figtree（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置：
  - vite.config.ts：base 设为 './'，build.sourcemap 设为 false，src/ 中的内容不会复制到 dist/。
  - tailwind.config.js：扩展颜色 night #0F0F10、nightSoft #19191B、warm #F5F1E8、stone #A8A39A、ochre #C9A227、line #2C2C2F；fontFamily 中 display 为 'Cormorant Garamond'，sans 为 'Figtree Variable'，mono 为 'IBM Plex Mono'。
  - src/components/Viewer.tsx 是共享的全幅查看器：它接收一组照片，并处理 ArrowLeft / ArrowRight 键（仅在其获得焦点或指针悬停在其上时）、指针与触摸滑动、照片之间的交叉淡入淡出以及索引计数器。
  - 一个小型 hash 路由器读取 location.hash：#/（首页）、#/series、#/series/<slug>、#/prints、#/workshops、#/journal、#/about；路由变化时滚动到顶部。不使用路由库。
  - 地图是代码中绘制的内联 SVG（海岸线、等高线、山体与水域标记），每个系列对应一个赭色图钉；不使用地图服务或瓦片。
  - 所有文案、照片、系列、印刷选项、工作坊、日志条目和表单选项都以类型化对象的形式存放在 src/content.ts 中；组件从不硬编码文案。
  - 购物车持久化到 localStorage，键为 [BRAND_SLUG]-cart，其中 [BRAND_SLUG] 是 [BRAND] 转为小写并用连字符连接后的形式。

## 变量
- [BRAND] — 摄影师姓名（默认："Greta Lindholm"）
- [CITY] — 所在城市（默认："Bozeman"）
- [HERO_TITLE] — 精选照片的标题（默认："Sea Stack, First Light"）
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/landscape-photographer-portfolio（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- night `#0F0F10` — 页面底色
- nightSoft `#19191B` — 面板、卡片、购物车抽屉
- warm `#F5F1E8` — 文本、配 night 色文字的按钮
- stone `#A8A39A` — 次要文本、拍摄详情
- ochre `#C9A227` — 低调的点缀色：eyebrow 小标题、图钉、激活状态、实心行动号召底板
- line `#2C2C2F` — 细线

### 字体排印
- Display / 标题与引文：Cormorant Garamond（OFL），字重 300/500
- Body / UI：Figtree Variable（OFL），字重 400/500
- Mono / 拍摄详情、索引计数器、图注：IBM Plex Mono（OFL），字重 400

### 布局与动效
- 间距：区块内边距桌面端 py-24 / 移动端 py-16；容器 max-w-[1240px] px-6；画廊间隙 24px；8px 节奏。
- 圆角：四角为直角：图片、卡片和按钮均为 0px；详情面板为 4px。
- 动效：查看器：照片交叉淡入淡出 700ms；图注文字在图片稳定后 300ms 淡入。
- 动效：滚动显现：区块上移 16px 淡入，历时 500ms，仅触发一次（Motion whileInView）；内容默认可见。
- 动效：缩略图悬停：亮度从 80% 提升至 100%，底部出现 1px ochre 线条（200ms）。
- 动效：prefers-reduced-motion：照片以 150ms 淡入切换，无显现动效，无悬停动效。
- 图像：风景照片保持统一观感：柔和的自然色彩、深邃的黑色、柔和的大气光线、水面长曝光、中画幅般的清晰度与细腻颗粒。风景照片中不出现人物；一张摄影师背影的工作照。任何图像中均不得出现文字、水印、标志或可辨认的建筑或地标。

## 页面与区块
### 首页（`index.html`）
1. **站点页眉** — 左侧：字标 [BRAND]，使用 Cormorant Garamond 500 24px 暖色并带字间距。中间导航：Series（→ #/series）、Prints（→ #/prints）、Workshops（→ #/workshops）、Journal（→ #/journal）、About（→ #/about），Figtree 400 14px 石色，悬停时变为暖色。右侧：一个 lucide shoppingBag 按钮，当购物车中有商品时显示数量徽标。页眉下方有一条 1px 细线。
   布局：64px 粘性栏覆盖在首屏之上：页面滚动前透明，滚动后变为 night/90 并带背景模糊和底部细线；内部 max-w-[1240px]。移动端：在 390px 宽度下，字标、购物车按钮和菜单按钮保持在同一行；菜单打开一个全屏 night 抽屉，链接纵向堆叠。
   动效：滚动 40px 后页眉色调在 300ms 内淡入；抽屉在 200ms 内淡入。
2. **精选照片 — 全出血查看器** — 一个填满首屏（减去页眉）的查看器，循环展示 content.ts 中的五张照片：[HERO_TITLE] — Coastlines — public/images/hero-coast.webp（16:9），alt 'Sea stacks in smooth water at first light, seen from a black sand shore'；'Fog on the Headland' — Coastlines — public/images/coast-cliffs.webp（4:3），alt 'Fog clearing from grass-topped cliffs above a grey sea'；'Last Light on the Dunes' — Deserts — public/images/desert-dunes.webp（4:3），alt 'Sand dunes with long shadows under the last warm light'；'Still Water, High Snow' — Alpine lakes — public/images/alpine-lake.webp（3:4），alt 'A jagged snow peak mirrored in an alpine lake at sunrise'；'The River of Stars' — Night skies — public/images/night-sky.webp（16:9），alt 'The Milky Way over a dark mountain lake'。照片之上：底部 60% 区域有从透明到 night 的渐变；左下角是一个眉题，IBM Plex Mono 12px 大写、tracking-widest、赭色 'LANDSCAPE AND EDITORIAL PHOTOGRAPHY'，标题使用 Cormorant Garamond 300，字号 clamp(44px, 6vw, 96px) 暖色，以及一行 mono 说明文字，石色，包含系列和地点；右下角是一块实心赭色板，上面是 night 色 mono 文字 '01 / 05' 和上一张 / 下一张箭头按钮；一个 'Details' 按钮（暖色描边）打开详情面板。点击照片也会打开它：一个灯箱，包含照片和一个侧面板，列出 content.ts 中的拍摄详情，例如第一张照片为 'Medium format · 45 mm · f/8 · 1/60 s · ISO 100 · tripod'，外加地点、天气和一行注释，以及链接 'Buy as a print'（→ #/prints）和 'View the series'（→ #/series/coastlines）。
   布局：h-[calc(100vh-64px)]；当前照片是绝对定位的 img，object-cover；文本块 max-w-[720px]，内边距 48px。移动端上，色板和箭头位于说明文字下方。此处每个标题都位于渐变遮罩上，并保持 WCAG AA 对比度。
   动效：照片之间交叉淡入淡出 700ms；ArrowLeft / ArrowRight 键和滑动可后退和前进；一个 8 秒计时器推进查看器，直到访客交互。在减少动态效果模式下没有计时器。
3. **系列网格** — H2 Cormorant Garamond 300 56px 暖色 'Four series, one long walk.' 四张卡片：Coastlines — 'North Atlantic · 2 photographs'（封面 hero-coast.webp）；Deserts — 'High dune country · 1 photograph'（封面 desert-dunes.webp）；Alpine lakes — 'Northern ranges · 1 photograph'（封面 alpine-lake.webp）；Night skies — 'Dark-sky reserves · 1 photograph'（封面 night-sky.webp）。每张卡片链接到 #/series/<slug>。
   布局：grid md:grid-cols-2 lg:grid-cols-4 gap-6；封面为 4:5 object-cover；说明文字在下方，Figtree 15px 石色，标题为 Cormorant Garamond 500 28px 暖色。
   动效：悬停效果如动效部分所述；卡片以 80ms 错峰淡入上移。
4. **系列的拍摄地** — H2 'Where these were made.' 左侧：在 nightSoft 上用代码绘制的 SVG 地图，等高线使用 line 色，每个系列一个赭色图钉，标注为 'North Atlantic coast'、'High dune country'、'Northern ranges'、'Dark-sky reserve'。右侧：四个地点的列表，每项一行 mono 文字：'Coastlines — 62 days on the shore over three years.'；'Deserts — Two springs, one truck.'；'Alpine lakes — Nine mornings above the tree line.'；'Night skies — Thirty clear nights, four of them good.'
   布局：lg:grid-cols-[58%_42%] gap-12 items-center；地图为 16:10。
   动效：当地图进入视野时，图钉以 120ms 错峰淡入；悬停列表行会放大其图钉。
5. **版画与工作坊预告** — 两个区块。Prints：H2 'Prints, made to last.'；石色行：'Editions of 25 on cotton, baryta or fibre papers, from $180.'；按钮 'Browse prints'（暖色填充，night 文字 → #/prints）。Workshops：H2 'Walk out with me.'；石色行：'Small groups, long days, honest critique.'；三行 mono 文字：'April 17–20 · Coastlines field workshop · $1,450'、'July 9–12 · Alpine lakes · $1,600 · waitlist'、'October 3–6 · Night skies · $1,250'；按钮 'See dates'（赭色填充，night 文字 → #/workshops）。
   布局：grid md:grid-cols-2 gap-6；每个区块在 nightSoft 上，p-10。
   动效：区块以 90ms 错峰淡入上移。
6. **日志预告与页脚** — H2 'Field notes.' 三条日志条目以文本行呈现，每条带一个小缩略图：'Waiting for fog'（coast-cliffs.webp）、'The coldest sunrise'（alpine-lake.webp）、'What the dark sounds like'（night-sky.webp），每条各有一行文字和一个指向 #/journal 的链接。页脚：字标 [BRAND]、重复导航、13px 石色小字：'Landscape and editorial photography · [CITY]' 和 'Photographs, places, prices and workshops on this site are invented sample content.' 外加 [CREDIT]。
   布局：日志行 py-5，带 1px 分隔线；页脚 grid md:grid-cols-3 gap-8 py-12，顶部有 1px 细线。
   动效：行以 70ms 错峰淡入上移。

### 系列页面（`#/series`）
1. **系列查看器** — 显示哈希中 slug 对应的系列（#/series/coastlines、#/series/deserts、#/series/alpine-lakes、#/series/night-skies）；以 #/series 打开且无 slug 时显示第一个系列。一个全出血查看器展示该系列的照片：Coastlines 有 hero-coast.webp 和 coast-cliffs.webp；其他三个系列各有其一张照片。左上角：赭色眉题 'SERIES'；标题 Cormorant Garamond 300 clamp(48px, 6vw, 104px) 暖色，位于顶部渐变遮罩上；左下角是说明文字，包含照片标题和地点；右下角是箭头和 mono 索引。
   布局：h-[calc(100vh-64px)]；与首页相同的查看器组件和说明文字处理。
   动效：交叉淡入淡出 700ms，方向键和滑动；系列页面没有计时器。
2. **田野笔记** — H2 'Field notes.' 默认系列的三段短文：'I came for the stacks and stayed for the fog. On the north shore it arrives without warning and leaves the same way, and the best photograph is usually made in the ten minutes it takes to clear.' 'Everything here is a long exposure on a tripod, mostly around half a minute, because the sea should look like it remembers being still.' 'Both photographs were made within an hour's walk of the same parking place. That is not a secret; the tide is.' 其他系列各有三段较短的段落。
   布局：max-w-[640px] py-16，Figtree 18px 石色，第一行暖色。
   动效：淡入上移 500ms。
3. **本系列与地点** — 左侧：'In this series' 缩略图，展示该系列的照片及标题，每张点击后定位到查看器。右侧：该系列在小尺寸 SVG 地图副本上的图钉，以及一行 mono 文字显示所花天数；按钮 'License a photograph'（→ #/about#licensing）和 'Buy as a print'（→ #/prints）。
   布局：lg:grid-cols-2 gap-12 py-16。
   动效：缩略图悬停效果如动效部分所述。

### 版画商店（`#/prints`）
1. **版画页眉** — H1 'Prints.'；石色行：'Every photograph on this site, in editions of 25, signed and numbered on the back.' 一行 13px 石色 mono 注释：'Sample shop: nothing is charged and no order is placed.'
   布局：py-16。
   动效：淡入上移 400ms。
2. **版画网格、选项与购物车** — 网格中五张版画，每张包含照片、标题、系列和 'Edition of 25'。从 'Choose options' 打开一个对话框，包含两组方形切换按钮：纸张 — Cotton matte +$0、Baryta gloss +$40、Fibre satin +$60 — 和尺寸 — 40 × 60 cm $180、60 × 90 cm $320、100 × 150 cm $760 — 以及一行实时价格，Cormorant Garamond 500 32px 暖色；按钮 'Add to cart'（赭色填充，night 文字）。购物车从右侧滑入：行项目包含缩略图、标题、纸张和尺寸（mono）、减 / 加步进器、行总计和移除；小计；一行 'Free shipping on orders over $400' 带细赭色进度条；按钮 'Checkout'。结账将抽屉内容替换为确认面板：'Sample checkout. No payment was taken and no order was placed.' 和按钮 'Keep browsing'。
   布局：Grid md:grid-cols-3 gap-6；对话框居中 max-w-[520px]，在 nightSoft 上；抽屉固定右侧 w-[400px] max-w-full h-full nightSoft，覆盖在 night/70 背景上。状态持久化在 [BRAND_SLUG]-cart 下。
   动效：抽屉滑入 250ms；价格行即时更新；步进器按下缩放至 0.96。

### 工作坊（`#/workshops`）
1. **工作坊列表** — H1 'Workshops.'；stone 色行：'Four days, six people, one region. We walk, we shoot, we look at the pictures together.' 三张卡片：'April 17–20 — Coastlines field workshop — North Atlantic coast — $1,450 — 4 places left'；'July 9–12 — Alpine lakes — Northern ranges — $1,600 — Sold out, join the waitlist'；'October 3–6 — Night skies — Dark-sky reserve — $1,250 — 6 places left'。每张卡片都有其封面照片、四行等宽字体的行程（'Day 1 — Arrival, sunset shoot'、'Day 2 — Dawn shoot, edit session'、'Day 3 — Full day on location'、'Day 4 — Dawn shoot, farewell lunch'）以及一个按钮 'Request a place'（暖色描边），售罄的那张则为 'Join the waitlist'。
   布局：grid md:grid-cols-3 gap-6；封面比例 16:10。
   动效：卡片以 90ms 错峰淡入上移。
2. **名额申请** — 点击按钮打开对话框，显示工作坊名称、字段 Name、Email 和 'A few lines about you' 文本域，以及 'Send request'。Name、有效邮箱和 20+ 字符的消息为必填；错误以赭色显示在字段下方。成功后表单替换为：'Thanks, <name>. This is a sample form, so nothing was sent.'
   布局：对话框 max-w-[520px]，位于 nightSoft 上；输入框带 1px line 边框、直角、暖色文字、2px 赭色聚焦环。
   动效：对话框以 200ms 淡入。

### 日志（`#/journal`）
1. **日志条目** — H1 'Field notes.' 三条条目，每条含缩略图、Cormorant Garamond 500 36px 暖色标题、一行等宽字体地点行，以及两段在页面上完整阅读的段落：'Waiting for fog' — North Atlantic coast：'The forecast said clear, which on this coast means fog by nine. I set up on the headland anyway and waited three hours for the sea to come back.' 'When it did, it came back one rock at a time. The photograph was made in the middle of that, and it is softer than anything I have made since.'；'The coldest sunrise' — Northern ranges：'Minus fourteen at the lake, the tripod legs freezing to the jetty. I kept one glove off and paid for it.' 'The mountain came out pink for four minutes. The lake held still the whole time, which is the only reason the picture exists.'；'What the dark sounds like' — Dark-sky reserve：'It is never quiet. There is water, wind in the pines, and once, very close, an owl.' 'I made a forty-second exposure for the stars and a second one for the lake, and the sound is in there somewhere.'
   布局：条目堆叠，以 1px line 分隔；缩略图 4:3 max-w-[420px]，桌面端位于文字旁，移动端位于文字上方；py-16。
   动效：条目以 90ms 错峰淡入上移。

### 关于与授权（`#/about`）
1. **关于** — 左侧：public/images/photographer.webp（4:3），alt 'The photographer from behind, standing beside a tripod on a ridge above a foggy valley at dawn'。右侧：眉题 'ABOUT'；H1 'Greta Lindholm' 以 [BRAND] 呈现；三段文字：'I am a landscape and editorial photographer based in [CITY]. I work slowly, on foot, and mostly within an hour of a parked truck.' 'The pictures on this site come from four long projects over the last few years, on coasts, in dunes, above the tree line and after dark.' 'I do not photograph weddings. I do photograph the places people go to remember how small they are.' 一个等宽字体列表 'Selected clients'：'Northlight Travel Almanac'、'The Outdoor Quarterly'、'Harbor & Peak Outfitters'、'Stonebridge Editions'。
   布局：lg:grid-cols-2 gap-12 items-center py-16。
   动效：文字以 90ms 错峰淡入上移；照片从 scale 1.03 稳定下来。
2. **授权咨询** — id="licensing"。H2 'License a photograph.'；stone 色行：'Editorial and commercial licences, priced by use.' 一个表单：'Photograph' 下拉选择（五个标题）、'Use' 单选胶囊（Editorial / Commercial / Personal）、'Territory' 下拉选择（One country / Worldwide）、'Duration' 下拉选择（3 months / 1 year / Unlimited）、Name、Email、'Tell me about the project' 文本域，以及 'Send enquiry'（赭色填充、night 色文字）。照片、用途、姓名、有效邮箱和 20+ 字符的消息为必填；错误以赭色显示。成功后：'Thanks, <name>. This is a sample form, so nothing was sent.'
   布局：max-w-[720px] pb-24；输入框带 1px line 边框，位于 nightSoft 上，直角，2px 赭色聚焦环。
   动效：成功面板以 200ms 淡入。

## 资产
- 图片：五张风景照片和一张工作照，由 VibeFather 生成，下载到 public/images/ 并且不在其他地方使用：hero-coast.webp（16:9）、coast-cliffs.webp（4:3）、desert-dunes.webp（4:3）、alpine-lake.webp（3:4）、night-sky.webp（16:9）、photographer.webp（4:3）。每张均从 https://media.vibefather.ai/assets/6aaed27d-397d-47c7-8164-a3adcf1cc748/<file> 下载；alt 文本已在上述各节中给出。ASSETS.md 中的署名：'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.'
- 图片：地图以代码形式绘制为内联 SVG（海岸线、等高线、图钉）；不使用地图瓦片或地图服务。
- 图标：lucide-react npm 包（ISC）：menu、x、shoppingBag、plus、minus、check、chevronLeft、chevronRight、arrowRight。不使用其他图标集，任何地方都不使用品牌标志。
- 字体：Fontsource 包（OFL-1.1）：@fontsource/cormorant-garamond（300 和 500）、@fontsource-variable/figtree 和 @fontsource/ibm-plex-mono，在 main.tsx 中导入。不使用字体 CDN 链接。

## 不要做
- 无后端：没有服务器代码、API 路由、数据库、认证，也没有任何会提交到某处的表单。结账、工作坊申请和授权表单都是本地示例，会在确认信息中说明这一点。
- 照片、标题、地点、客户、出版物、价格和工作坊均为虚构的示例内容；不得提及或模仿任何真实的摄影师、画廊、杂志或品牌。
- 不做婚礼、人像或活动摄影；风景照片中不出现人物，工作照从背后拍摄摄影师，绝不出现正面特写。
- 图片不携带文字、水印、标志或可识别的地标；所有照片保持统一的低饱和、氛围感外观。
- 不使用地图服务或地图瓦片：地图是用代码绘制的内联 SVG。
- 一切自托管：字体通过 Fontsource 包引入，图片下载到项目中，不使用 CDN 脚本或链接标签，不使用 Google Fonts，不使用分析工具。
- Vite base 设为 './'，资源路径使用相对路径；内部链接是锚点（#/series、#/prints）或真实文件名，绝不使用裸目录；#/series 在没有 slug 的情况下打开时显示第一个系列。
- 生产构建压缩且不生成 source map；dist/ 小于 20 MB。
- prefers-reduced-motion：无自动切换计时器、无显现动画或悬停动效；照片以短暂淡入淡出切换。绝不在等待进入视口触发器时用 clip-path 或零不透明度隐藏整个元素。
- 照片上的每个标题都位于渐变遮罩上并保持 WCAG AA 对比度；夜色上的小号文字使用暖色或 stone，赭色仅用于 12px 等宽字体的眉题（带字间距）、图钉以及带夜色文字的实色底板。
- 方向键仅在查看器获得焦点或悬停时切换照片，这样页面其余部分仍可用键盘滚动。
- Tailwind 不透明度工具类使用默认刻度（例如 /70、/90）；自定义档位写成任意值。
- 不做 SEO 工作：一个包含 [BRAND] 的普通 <title> 和一个 favicon 就足够了；不要 meta 描述、Open Graph 标签、JSON-LD 或站点地图。
- 不从任何参考网站复制代码、文案、图像或字体；模板名称、slug、文案或 alt 文本中不出现品牌名称。

---
— Prompt by VibeFather · https://vibefather.ai/t/landscape-photographer-portfolio · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
