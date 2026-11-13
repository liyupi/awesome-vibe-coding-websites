> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 独立唱片厂牌网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一个三页的 riso 海报风格网站，[BRAND] 是一个虚构的独立唱片厂牌，位于 [CITY]，压制 [GENRE] 音乐。品牌识别采用奶油色 riso 纸张上的墨黑色，仅使用两个专色——热珊瑚色（hot coral）与深紫色（deep violet）——厚重的 Anton 海报字体带有套印不准效果，并叠加生成的纸张颗粒纹理。所有视觉元素均以代码绘制：一张超大旋转黑胶唱片锚定首屏，与字标并置；种子生成的双色唱片封套填满八张发行的目录；五位艺术家的名册链接到通过查询路由的艺术家页面；巡演信息流列出季节标签的示例行；变体黑胶商店运行在一个本地购物车抽屉上，并坦承这只是演示。

- 受众：[GENRE] 听众和黑胶收藏者，他们顺道访问厂牌页面，以及将这一布局适配到自己目录的厂牌、磁带与 zine 出版方和音乐团体。
- 目标：让厂牌在一屏之内感觉真实可触：用旋转黑胶和套印不准的字标赢得关注，用悬停时滑出唱片的封套将访客拉入目录，再滚动两屏呈现巡演信息流和商店，并始终保持诚实——演示购物车、示例日期，没有任何真实售卖。
- 语调：响亮但精心制作——一张恰好是网站的丝网印刷演出海报。简短自信的句子，等宽目录编号，零炒作词汇。对演示购物车保持俏皮，从不假装金钱易手。

## 技术栈（Stack）
- 框架（Framework）：Vite 6 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、vite（MIT）、typescript（Apache-2.0）、tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/anton（OFL-1.1）、@fontsource/space-grotesk（OFL-1.1）、@fontsource/space-mono（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置（Setup）：
  - 创建一个 Vite 6 + React 18 + TypeScript 项目，base 设为 './'，build.outDir 设为 'dist'，build.sourcemap 设为 false。不使用路由、不使用后端、不使用服务端代码。
  - 安装 Tailwind CSS 3.4，并配置 PostCSS 和 Autoprefixer。用下方精确的调色板扩展主题，并设置 fontFamily.display 为 'Anton'、fontFamily.body 为 'Space Grotesk'、fontFamily.mono 为 'Space Mono'。
  - 通过 @fontsource 包在 src/main.tsx 中自托管 Anton 400、Space Grotesk 400/500/700 和 Space Mono 400/700。绝不从 CDN 加载字体。
  - 使用来自 'motion/react' 的 Motion（AnimatePresence、useReducedMotion）实现滚动显现和购物车抽屉；每个动画都要以 useReducedMotion() 为条件进行控制。
  - 将所有文案和数据放在 src/content.ts 中：标签字符串、五位艺术家（姓名、slug、一句话简介、传记、印章形状）、八张发行作品（目录编号、标题、艺术家、格式、数字种子）、七行巡演信息、六件商店商品、压制说明。当变量值变化时，在那里重写依赖的文案，并从 [BRAND] 和 [BRAND_SLUG] 派生购物车键和 slug，确保不残留默认品牌痕迹。
  - 在 src/lib/cover.ts 中编写生成式封面引擎，作为纯函数 coverArt(seed)：一个按发行作品播种的 mulberry32 PRNG 绘制 400x400 SVG——奶油色纸张底色，六到九个形状从圆形、环形、半圆盘、条形、四分之一弧、点阵和三角形中选择，仅填充珊瑚色（coral）、紫罗兰色（violet）或墨色（ink），重叠区域使用 mix-blend-mode multiply——外加一个角落里的 Space Mono 字体目录编号。相同种子，相同封面，因此两次构建结果一致。
  - 将 src/components/Vinyl.tsx 构建为 SVG 唱片：墨色圆盘、七条细凹槽圆环、一个 12% 不透明度的纸张光泽楔形，以及一个珊瑚色中心标签，上面带有小紫罗兰色几何标记和 Anton 字体的 [BRAND] 首字母。它以 28s 线性无限 CSS 动画旋转。
  - 将 riso 颗粒作为固定全视口覆盖 div（pointer-events none）添加，使用内联 SVG feTurbulence 滤镜，baseFrequency 0.9，opacity 0.06，mix-blend-mode multiply——生成噪声，绝不使用扫描纹理。
  - 在 src/index.css 中将套印不准（misregistration）实现为工具类 .riso-shift：显示文本通过 text-shadow（-3px -2px 0 coral，3px 2px 0 violet）携带珊瑚色和紫罗兰色副本；悬停时偏移量在 200ms 内各扩大 1px。
  - 在 src/index.css 中将跑马灯滚动条实现为一条重复的内联轨道，以 30s translateX 循环；悬停时暂停；在 prefers-reduced-motion 下渲染为静态。
  - 将购物车实现为 React 状态加右侧抽屉：包含迷你生成式封套的订单项、数量加/减、移除、小计、诚实的演示说明行，以及持久化到 localStorage 的 [BRAND_SLUG] + '-cart' 键下；验证恢复的 JSON 并静默恢复。
  - 通过 URLSearchParams 读取 ?artist= 来路由 artist.html，匹配 content.ts 中的艺术家 slug，并始终回退到第一位艺术家——绝不出现未找到状态。每个内部链接都是像 ./index.html 或 ./shop.html 这样的文件名。
  - 仅使用这些 lucide-react 图标：Disc3、ShoppingBag、Plus、Minus、X、ArrowRight、ArrowUpRight。
  - 此模板不使用任何照片或下载的图像文件。在项目根目录创建 ASSETS.md，列出 Fontsource 包和 lucide-react 及其许可证。
  - 一个纯 <title> 为 '[BRAND] — independent record label' 和一个 favicon（一个带珊瑚色圆形的纸方块）就足够了；不需要 meta 描述、Open Graph 标签、JSON-LD 或站点地图。

## 变量
- [BRAND] — 厂牌名称（默认：“Static Bloom Records”）。虚构的厂牌名；主视觉字标、标志首字母、黑胶唱片标签和购物车键名均由此派生。
- [GENRE] — 声音风格（默认：“noise-pop, dubbed-out techno and tape loops”）。用一句平实的话描述厂牌压制的音乐；出现在主视觉段落、滚动条和页脚中。
- [CITY] — 城市（默认：“Milhaven”）。厂牌所在地；出现在主视觉眉题、艺人名册文案、巡演行、压制说明和页脚中。
- [PRESS_LINE] — 宣言句（默认：“Cut loud, pressed heavy, packaged by hand.”）。厂牌的一句信条，用于收束主视觉段落；厂牌变更时请重写此句。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/indie-record-label-website（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的取值不同，请为所有标题、段落、标签和图片重写——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- Riso 墨黑 `#17130E` — 墨黑色：深色条带、主视觉字体、黑胶唱片、页脚
- 纸奶油色 `#F3EDDE` — Riso 纸张：页面底色和卡片纸
- 热珊瑚色 `#FF4B33` — 专色一：CTA、标签、黑胶标签、巡演 Tickets 状态
- 深紫罗兰色 `#5B2DB3` — 专色二：墨色背景上的链接、封套几何图形、Sold out 标签
- 褪色墨色 `#CFC5AC` — 细线、分隔线、纸张上的次要文本

### 字体排印
- 展示字体：字标、标题、价格：Anton（OFL），字重 400
- 正文字体：段落、按钮、导航：Space Grotesk（OFL），字重 400/500/700
- 元信息字体：目录编号、眉题、滚动条、标签：Space Mono（OFL），字重 400/700

### 布局与动效
- 间距：8px 基础网格。外壳最大宽度 1200px，桌面端 40px、移动端 20px 侧边内边距。页头 64px，底部有 2px 墨色分隔线。桌面端区块垂直内边距 96px，移动端 64px。目录网格间距 24px。巡演行垂直内边距 20px，由 1px 分隔线分隔。段落每行最多 56 个字符。
- 圆角：所有地方均为 0px——纸张裁切为方形：卡片、按钮、标签、输入框和照片全部采用锐利直角。网站上唯一的圆形是绘制出来的图形：黑胶唱片、艺术家印章、点阵和标志圆环。
- 动效：主视觉黑胶唱片每 28s 匀速旋转一次，无限循环；在 prefers-reduced-motion 下动画完全暂停，唱片保持完全可读。
- 动效：墨色滚动条带每 30s 无缝循环滚动一次；悬停时暂停，在减少动效模式下渲染为静态。
- 动效：发行封套：悬停时封套旋转 3deg，黑胶唱片在 240ms ease-out 内从后方滑出 56px；触屏设备点击时切换相同状态；两者在离开时重置。
- 动效：展示标题叠在错位的珊瑚色和紫罗兰色副本上；偏移量在加载时从 6px 收敛到 3px，悬停时在 200ms 内各扩大 1px。
- 动效：区块在滚动时一次性显现，上移 16px 并淡入 420ms，每张卡片或每行错开 60ms；在减少动效模式下所有内容立即出现。
- 动效：购物车抽屉从右侧滑入，耗时 280ms，带有 60% 墨色背景遮罩；每次添加时购物车数量徽章弹至 1.15 倍缩放，持续 160ms。
- 图像：零照片——整个网站用代码绘制。封套是种子生成的 SVG（双色几何图形，正片叠底重叠）；黑胶唱片、艺术家印章和标志是手工构建的 SVG；Riso 纸张颗粒是生成的 feTurbulence 叠加层，以 6% 正片叠底覆盖整个页面；错位是字体上的分层颜色副本，绝不是纹理文件。没有扫描纸张，没有图库素材，没有人物照片。

## 页面与区块
### [BRAND] — 独立唱片厂牌（`index.html`）
1. **页头、主视觉与滚动条** — 页头（64px，纸奶油色，2px 墨色下边线）：一个代码绘制的标志图形——一个 36px 的墨色圆形，厂牌的两个首字母以纸色镂空呈现，其后偏移 2px 处有一个珊瑚色圆环——旁边是 Anton 字体的大写厂牌名；导航锚点 Catalog、Roster、Tour、Shop；右侧是一个 ShoppingBag 购物车按钮，带珊瑚色数量徽章。此页头和购物车抽屉是全局的，在每个页面重复出现：一个 380px 的纸色面板从右侧滑入，包含行项目（迷你生成式封套、标题、版本、价格）、数量加减、移除 X、小计、一行文字 'Demo cart — nothing is charged or shipped.'，以及一个 'Keep browsing' 关闭按钮；状态持久化在 localStorage 中。主视觉：Space Mono 眉题 'SMALL LABEL · HEAVY VINYL · CAT. SR-001 → SR-024'；H1 是字标——[BRAND] 以大写 Anton 字体呈现，字号为 clamp(56px, 9vw, 132px)，墨色，带有珊瑚色和紫罗兰色的错位副本，最多换行至两行；段落 '[BRAND] is a small label in [CITY] pressing [GENRE]. [PRESS_LINE]'；按钮：实心墨色 'Browse the catalog' 和珊瑚色描边 'Tour dates'。右侧，一张超大黑胶唱片（min(520px, 44vw)）与字标的基线重叠并溢出右边缘，缓慢旋转，其珊瑚色中心标签带有紫罗兰色几何标记和厂牌首字母。主视觉下方是一条全宽墨色滚动条带，以大写 Space Mono 滚动：'SR-024 FLOOD ROOMS — OUT NOW · SR-018 REISSUE — FEW LEFT · [GENRE], ON HEAVY VINYL · '
   布局：12 列网格：文案位于第 1–6 列，黑胶唱片绝对定位覆盖第 7–12 列并被视口边缘裁切。按钮为方角，墨色填充和珊瑚色描边，高 48px。页头内容共享 1200px 外壳。移动端：黑胶唱片以 78vw 居中渲染在文案上方，字标上限为 64px，按钮全宽堆叠，每个点击目标至少 44px。
   动效：黑胶唱片以 28s 循环旋转；字标的错位偏移在加载时于 700ms 内从 6px 收敛到 3px；眉题、H1、段落和按钮以 60ms 错峰上升 16px；滚动条以 30s 循环滚动，悬停时暂停。
2. **目录** — Space Mono 眉题 'THE CATALOG'；标题 'Fresh off the press.' 使用 Anton 字体；介绍行 'Eight sleeves, two spot colors, no two covers alike — every cover is generated from the record's catalog number.' 八张发行卡片：SR-024 Mote — 'Flood Rooms' — 12″ LP；SR-023 Diorama Kid — 'Night Bus Hymns' — 12″ LP；SR-022 Cassia Vale — 'Dub Test 04' — 12″ 单曲；SR-021 Cassia Vale — 'Echo Test 02' — 7″；SR-020 Grove Static — 'Field Notes Vol. 2' — 12″ LP；SR-019 Anaïs Ward — 'Coral Static' — 12″ LP；SR-018 Mote — 'Rearview' — 12″ LP 再版；SR-017 Diorama Kid — 'Playground Static' — 7″。每张卡片展示 1:1 的种子生成式封套，然后是 Space Grotesk 700 的标题、艺术家，以及一行 Space Mono 'SR-024 · 12″ LP'。
   布局：桌面端 4 列网格，平板 2 列，移动端 1 列，24px 间距。每个封套位于纸色卡片上，带 1px 褪色墨色边框；一个代码绘制的黑胶唱片在静止时从封套右边缘露出 8px。
   动效：悬停时封套旋转 3deg，黑胶唱片在 240ms 内滑出 56px；触摸时点击切换相同状态；卡片以 60ms 错峰配合标准上升效果显现。
3. **艺人名册** — 眉题 'THE ROSTER'；标题 'Five loud friends.' 五张海报卡片，每张以一个代码绘制的印章为锚点——Anton 字体的艺术家首字母位于一个因艺术家而异的形状内（珊瑚色圆形、紫罗兰色三角形、墨色方形、珊瑚色半圆盘、紫罗兰色圆环），带纸色镂空。Mote — 'Two brothers, one tape machine, songs about flood plains.' — 等宽字体 'SR-018–024'；Diorama Kid — 'Night-bus synth pop for the last train home.' — 'SR-017–023'；Cassia Vale — 'Dub chambers and echo tests from a basement in [CITY].' — 'SR-021–022'；Grove Static — 'Field recordings folded into ambient techno.' — 'SR-020'；Anaïs Ward — 'A voice like a paper lantern; songs that hum.' — 'SR-019'。每张整卡链接到 ./artist.html?artist=mote（其他艺术家对应匹配的 slug）。
   布局：桌面端 5 列换行为 3 加 2，平板 2 列，移动端 1 列。印章为 120px；名字使用 Space Grotesk 700，一句话简介使用正文文本，目录范围使用 Space Mono；整张卡片即为链接，悬停时出现 ArrowUpRight。
   动效：印章在悬停时于 200ms 内旋转 4deg 再回正；卡片以 60ms 错峰显现。
4. **巡演信息流** — 全宽墨色条带配纸色文字。珊瑚色 Space Mono 眉题 'LIVE'；标题 'On the road.' 使用 Anton 字体。七行，每行包含 Space Mono 的季节标签、城市和场地、状态标签，以及一个 ArrowUpRight：'Early spring — Milhaven, The Foundry — Sold out'；'Early spring — Dunmoor, Klub Nord — Tickets'；'Mid spring — Ashport, Cannery Hall — Tickets'；'Late spring — Port Ellis, The Anchor Room — TBA'；'Summer — Bell Harbor, Pier 9 — Tickets'；'Early fall — Milhaven, The Foundry — TBA'；'Fall — Greyfield, Old Market — Tickets'。状态标签：Tickets 为珊瑚色填充墨色文字，TBA 为纸色描边，Sold out 为紫罗兰色填充纸色文字。票务标签链接到 '#' 作为演示锚点。Space Mono 脚注：'Sample dates for a template demo — seasons, not calendars; ticket links go nowhere.'
   布局：单列，最大宽度 900px。行内边距为 20px 垂直，由 1px 纸色 20% 不透明度的分隔线分隔；季节列固定 140px；状态标签右对齐位于箭头之前。
   动效：行以 40ms 错峰显现；悬停时行向右移动 4px，背景提升至纸色 6%，箭头向右上平移 2px。
5. **商店预告** — 眉题 'THE SHOP'；标题 'Take one home.' 三张卡片展示最新发行的版本：'Flood Rooms — Standard black LP — $18'；'Flood Rooms — Coral vinyl, limited 300 — $24'；'Flood Rooms — Deluxe 2×LP + riso print — $42'。每张卡片展示迷你生成式封套、Space Grotesk 700 的版本名、价格，以及一个全宽墨色 'Add to cart' 按钮，点击后添加商品并打开抽屉。网格下方，一个文本链接 'Full shop →' 指向 ./shop.html。
   布局：3 列网格，平板 2 列，移动端 1 列。卡片为纸色，带 1px 褪色墨色边框和 24px 内边距；价格以 Anton 字体 32px 重复显示。
   动效：悬停时卡片上浮 2px 并投射 4px 珊瑚色偏移阴影——如同第二道墨迹；添加商品时购物车徽章在 160ms 内弹至 1.15，抽屉在 280ms 内滑入。
6. **页脚** — 墨色底。一个巨大的描边字标——[BRAND] 使用 Anton 字体，1px 纸色描边和透明填充——作为背景条带贯穿内容后方。前景：标志图形和 [BRAND]、锚点导航（Catalog、Roster、Tour、Shop）、一行 Space Mono 'Pressed in [CITY] · [GENRE]'、诚实声明行 'All labels, artists, releases, venues and prices on this site are invented for a template demo.'、'© [BRAND]' 不带年份，以及可选的 [CREDIT] 链接。
   布局：桌面端两行——品牌区块带等宽字体行居左，导航居右；诚实声明行、版权和 [CREDIT] 在第二行以褪色墨色呈现。移动端堆叠。此页脚在每个页面重复出现。
   动效：无——页脚是静态的。

### 商店 — [BRAND]（`shop.html`）
1. **商店网格** — 全局页头、购物车抽屉和页脚重复出现。标题 'The shop.' 使用 Anton 字体，介绍语 'Six things for sale, zero real transactions — this whole store lives in your browser.' 六件商品：'SR-024 Flood Rooms — Standard black LP — $18'；'SR-024 Flood Rooms — Coral vinyl, limited 300 — $24'；'SR-024 Flood Rooms — Deluxe 2×LP + riso print — $42'；'SR-023 Night Bus Hymns — Standard black LP — $18'；'SR-023 Night Bus Hymns — Violet vinyl, limited 300 — $24'；'SR-022 Dub Test 04 — Black 12″ single — $15'。每张卡片：生成式封套、Space Grotesk 700 的标题、一行 Space Mono 'SR-024 · CORAL / 300'、Anton 字体的价格，以及一个墨色 'Add to cart' 按钮。
   布局：3 列网格，平板 2 列，移动端 1 列，24px 间距，卡片匹配预告的纸色风格。
   动效：封套复用目录的悬停效果（倾斜和黑胶滑出）；添加到购物车时徽章弹出并打开抽屉，与首页相同。
2. **压制说明** — 纸色条带，三条 Space Mono 说明并排：'Pressed at a fictional plant in [CITY] — 140g unless noted.'；'Color editions are one press run — when they're gone, they're gone.'；'Flat $4 demo shipping anywhere; nothing actually ships.'
   布局：桌面端 3 列由 1px 褪色墨色分隔线分隔；移动端单列，16px 间距。
   动效：静态。

### 艺术家 — [BRAND] (`artist.html`)
1. **艺术家主视觉区（Artist hero）** — 从 URL 读取 ?artist=，并匹配 content.ts 中的 slug，当查询缺失或未知时，始终回退到第一位艺术家（mote）。页面标题变为艺术家的名字。主视觉区以 180px 展示艺术家的印章，艺术家名字使用 Anton 字体并带有套印不准效果，一行 Space Mono 目录行（Mote 为 'SR-024 · SR-018'），以及约 50 字的简介——Mote 的简介为：'Mote started as two brothers trading four-track tapes across a flood plain. A decade on they still cut to tape first and argue about it after — songs about water tables, basement shows, and the long drive home. Flood Rooms is their fourth LP for the label.' 在 content.ts 中为每位艺术家撰写一段同等长度的简介。
   布局：12 列网格：印章和名字位于第 1–7 列，简介位于第 8–12 列并垂直居中。在移动端，印章居中显示在堆叠的名字和简介上方。
   动效：印章在 400ms 内从 -4deg 旋转到 0 并稳定下来；名字和简介以标准上升效果显现。
2. **艺术家唱片** — 眉题 'ON THE LABEL'；标题 'Their records.' 目录网格筛选为该艺术家的发行作品，使用相同的卡片和悬停行为（Mote 为：SR-024 和 SR-018）。
   布局：与首页目录相同的 4/2/1 网格；项目较少时网格保持左对齐。
   动效：相同的封套倾斜和黑胶滑入；标准交错显现。
3. **返回链接和页脚** — 一个纸质轮廓的 '← Back to the roster' 链接指向 ./index.html#roster，然后是共享的全局页脚。
   布局：左对齐链接，页脚上方有 48px 顶部内边距。
   动效：仅标准链接下划线偏移过渡。

## 资源

- 图片：完全没有图片文件。所有视觉元素都用代码绘制：来自 src/lib/cover.ts 的生成式唱片套（带种子双色 SVG 几何图形，使用 multiply 混合叠加）、SVG 黑胶唱片、艺术家印章、标识图形、套印不准的展示字体，以及一个以 6% multiply 生成的 feTurbulence 丝网印刷颗粒叠加层。没有任何内容被下载、扫描或热链接；ASSETS.md 记录所有 artwork 均为原创代码。
- 图标：安装 lucide-react（ISC），仅使用 Disc3、ShoppingBag、Plus、Minus、X、ArrowRight 和 ArrowUpRight。不绘制任何品牌 logo 或真实厂牌标记；标识图形和印章均为原创代码。在 ASSETS.md 中记录包和许可证。
- 字体：通过 @fontsource/anton（OFL-1.1）自托管 Anton 400。在 ASSETS.md 中记录包和许可证；不要使用字体 CDN。
- 字体：通过 @fontsource/space-grotesk（OFL-1.1）自托管 Space Grotesk 400/500/700。在 ASSETS.md 中记录包和许可证；不要使用字体 CDN。
- 字体：通过 @fontsource/space-mono（OFL-1.1）自托管 Space Mono 400/700。在 ASSETS.md 中记录包和许可证；不要使用字体 CDN。

## 禁止事项
- 任何地方都不得出现真实的厂牌、艺人、专辑、场馆、压片厂或音乐节——每一个名称、唱片封套、城市、价格和统计数据都是虚构的，页脚会对此作出说明。
- 所有封面艺术都是代码生成的双色几何图形：网站上任何地方都不得引用真实专辑封面、不得出现人物照片、不得使用图库素材或扫描图稿。
- 巡演条目只使用季节标签或 TBA——绝不使用真实日期、年份、星期几的日历逻辑，或任何与访客时钟相关的内容，页脚也不得出现版权年份。
- 购物车是本地演示，并在界面上明确说明这一点：无支付、除抽屉之外无结账流程、无 API、无分析、无邮箱收集；持久化仅使用 localStorage，并在恢复时进行校验。
- 孔版印刷（risograph）纹理由代码生成（SVG feTurbulence 配合 multiply 混合）；绝不扫描纸张、下载纹理或热链任何文件。
- 无后端、服务器代码、数据库、认证或表单提交。通过单一构建命令输出静态文件到 dist/，使用相对路径。
- 仅通过所列的 Fontsource 包自托管字体；绝不加载 Google Fonts、Adobe Fonts 或任何 CDN 样式表或脚本。
- 生产构建经过压缩，无 source map，不将 src/ 复制到 dist/，且 dist/ 保持在 20 MB 以下。
- 不得使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务，或任何外部或热链资源——此模板不附带任何照片文件。
- 每个内部链接都是文件名（./index.html、./shop.html、./artist.html?artist=…）或页内锚点，绝不是裸目录；不带查询参数打开 artist.html 时显示第一位艺人，绝不显示未找到状态。
- 尊重 prefers-reduced-motion：暂停黑胶旋转和滚动条并跳过入场动画；所有交互在无动画时仍完全可用。
- 严格保持两种专色——珊瑚色（coral）和紫罗兰色（violet）仅用于墨色和纸色之上；无渐变，除珊瑚色印刷偏移悬停效果外无投影，无发光。
- 任何地方都不得使用圆角；锐利的纸张裁切美学是设计的一部分，圆形仅出现在绘制的图形内部。
- 所有文案保持美式英语，并从 [BRAND] 和 [BRAND_SLUG] 派生购物车存储键、slug 和 alt 文本，以便替换变量值后绝不残留默认品牌痕迹。
- 不做 SEO 工作：无 meta 描述、Open Graph 标签、JSON-LD、站点地图或关键词堆砌的标题。一个包含 [BRAND] 的普通标题和一个 favicon 就足够了。
- 网站必须在 1440×900 和 390×844 下渲染，控制台零错误，包括通过查询路由的艺人页面。

---
— Prompt by VibeFather · https://vibefather.ai/t/indie-record-label-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
