> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 插画师作品集网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个虚构的编辑类与儿童绘本插画师的作品集。一个可按客户类型筛选的瀑布流画廊，配有灯箱，在最终作品旁展示过程草图；项目页面以简报、草图、色彩草图与最终稿的形式讲述；一个出售签名版画的商店，带有尺寸选择器和购物车；一个委托咨询表单，包含预算、截止日期和使用权字段；以及一个关于页面，配有一张从背后拍摄的工作室照片。所有作品均采用同一种水粉与墨水风格，绘于暖色纸张上，配色为番茄红、青绿色与墨色。

- 受众：绘本编辑、杂志艺术总监和包装设计师，以及想为自己的墙面添置一幅版画的读者。
- 目标：引导访客从第一幅画走向项目页面、购物车中的版画，或一份委托咨询。
- 语调：温暖、平实且带点俏皮，就像写在草图背面的便条：短句、关于颜料和纸张的具体细节，不说艺术圈行话。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：motion（MIT）、lucide-react（ISC）、@fontsource-variable/shantell-sans（OFL-1.1）、@fontsource-variable/work-sans（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 配置：
  - vite.config.ts：base './'，build.sourcemap false，src/ 中的任何内容都不会被复制到 dist/。
  - tailwind.config.js：扩展颜色 paper #FBF6EC、paperDeep #F1E6CC、ink #22223B、tomato #E4572E、teal #2A9D8F、mustard #E9B44C；fontFamily display 'Shantell Sans Variable'，sans 'Work Sans Variable'。
  - 路由是一个小型 hash 路由器，读取 location.hash：#/（首页）、#/work、#/work/<slug>、#/prints、#/about、#/commission。路由变化时滚动到顶部。不使用路由库。
  - 所有文案、艺术作品、项目、版画价格、委托费率和表单选项都以类型化对象的形式存放在 src/content.ts 中；组件绝不硬编码文案。
  - 在 index.html 中定义一个内联 SVG `<filter id="pencil-lines">`（用 feColorMatrix 转为灰度并提高对比度，然后用 feConvolveMatrix order 3 配合边缘卷积核），并通过 CSS filter: url(#pencil-lines) 应用它，从完成的艺术作品绘制出铅笔阶段。
  - 购物车持久化到 localStorage，键为 [BRAND_SLUG]-cart，其中 [BRAND_SLUG] 是 [BRAND] 转为小写并用连字符连接。

## 变量
- [BRAND] — 插画师姓名（默认：“Wren Kowalski”）。用作字标、简介中，以及通过 [BRAND_SLUG] 用于 localStorage 键。
- [CITY] — 工作室所在城市（默认：“Asheville”）
- [HERO_TITLE] — 主视觉作品标题（默认：“The Lighthouse Keeper's Lunch”）
- [SPECIALTY] — 一句话专长（默认：“picture books and editorial”）
- [CREDIT] — 在页脚保留一个小的“Template by VibeFather”链接，指向 https://vibefather.ai/t/illustrator-portfolio-website（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值编写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- paper `#FBF6EC` — 页面底色，以及番茄色或青绿色上的文字
- paperDeep `#F1E6CC` — 卡片、说明牌、表单面板
- ink `#22223B` — 文字、手绘线条、主按钮
- tomato `#E4572E` — 第一强调色：主视觉区块、荧光笔标记、委托按钮与色带
- teal `#2A9D8F` — 第二强调色：下划线、标签、流程色带、偏移边框
- mustard `#E9B44C` — 仅用于小面积高亮：星形、圆点、激活的尺寸胶囊

### 字体排印
- 展示字体 / 标题与字标：Shantell Sans Variable（OFL），字重 400/700
- 正文 / UI：Work Sans Variable（OFL），字重 400/500/600

### 布局与动效
- 间距：区块内边距桌面端 py-24 / 移动端 py-16；容器 max-w-[1200px] px-6；卡片 p-5；垂直节奏以 8px 的倍数计。
- 圆角：作品画框 rounded-[18px]；标签与按钮 rounded-full；印刷卡纸为直角，带 10px 纸边。
- 动效：滚动显现：区块在 450ms 内上浮 20px 淡入，仅触发一次（Motion whileInView）。内容默认可见；显现效果只是增强。
- 动效：悬停作品：画框上移 6px，其偏移色块滑动 4px（200ms ease-out）。
- 动效：画廊筛选切换：离场图块 150ms 淡出，入场图块 250ms 淡入上浮，间隔 40ms 错开。
- 动效：灯箱：背景 200ms 淡入，面板从 0.97 缩放；切换流程阶段时 250ms 交叉淡入。
- 动效：购物车抽屉从右侧滑入 250ms；数量变更与小计即时更新。
- 动效：prefers-reduced-motion：无显现、上移或滑动；灯箱与购物车即时出现。
- 图像：水粉与墨水插画，可见笔刷质感与松弛的黑色墨线，番茄色、青绿色、芥末黄、赭石色与墨色绘于暖奶油色纸上；五幅成品看起来出自同一人之手。一张从背后拍摄的抓拍工作室照片。缩略图、铅笔线与色彩草图由成品图在代码中派生（SVG 滤镜）；装饰纸形与图标以代码绘制。无图库照片，无剪贴画，图像内无可读文字。

## 页面与区块
### 首页（`index.html`）
1. **站点页眉** — 左侧：字标 [BRAND]，使用 Shantell Sans 700，22px，ink 色，后跟一个代码绘制的小番茄星号。中间导航：Work（→ #/work）、Prints（→ #/prints）、About（→ #/about）、Commission（→ #/commission），Work Sans 500 15px ink/70，悬停时变为 ink 色并带 3px 青色下划线。右侧：胶囊按钮 'Commission me'（tomato 填充，paper 文字）→ #/commission。
   布局：粘性 64px 栏，paper/90 背景，带背景模糊和 1px 底部细线 ink/15；内部 max-w-[1200px]。移动端：字标、紧凑的 'Commission' 链接和 lucide 菜单按钮在 390px 宽度下保持在同一行（字标可缩小至 18px）；菜单打开全屏 paper 抽屉，链接纵向堆叠。
   动效：链接悬停时下划线 150ms；抽屉淡入 200ms。
2. **首屏 — 一幅大画** — 左侧：眉题 Work Sans 600 12px 大写 字距最宽 teal 'ILLUSTRATION · [SPECIALTY]'。H1 使用 Shantell Sans 700，字号 clamp(44px, 6vw, 84px)，ink 色，行高 1.02：'Stories painted in gouache, drawn in ink.' — 单词 'gouache' 带有青色手绘下划线（SVG 路径），'ink' 背后有 tomato 色荧光笔笔触。段落 18px ink/75，max-w-[44ch]：'I'm [BRAND], an illustrator in [CITY]. Every piece starts as a thumbnail in a sketchbook and ends with more paint on the desk than on the page.' 按钮：'See the work'（ink 胶囊，paper 文字 → #/work）和 'Order a print'（teal 描边胶囊 → #/prints）。右侧：首屏画作 public/images/hero-lighthouse.webp（3:4），装在旋转 1.5deg 的画框中，下方和左侧偏移 20px 处有实心 tomato 色块；alt 'A child in a yellow raincoat sharing sandwiches with a red fox on a lighthouse balcony at dusk'。画框上有说明牌：'[HERO_TITLE] · Picture book'。
   布局：lg:grid-cols-[45%_55%] items-center gap-10，min-h-[calc(100vh-64px)]，py-16。画作高度 clamp(420px, 68vh, 620px)，object-cover。移动端画作以 4:5 比例在前，文字在后；两者均无水平滚动。
   动效：标题行淡入上移 500ms，错开 90ms；画作从 scale 1.03 稳定下来；teal 和 mustard 纸片形状（代码绘制的 SVG 叶子和星星）以 ±6px 幅度 8s 循环浮动，在减少动态效果模式下暂停。
3. **精选作品 — 可筛选画廊** — H2 Shantell Sans 700 44px ink 'Selected work'；介绍行 ink/70：'Five finished pieces, each with its process on show.' 筛选标签 rounded-full：All、Books、Editorial、Packaging、Murals；激活标签 ink 填充配 paper 文字。瀑布流图块，每块为一张图片，下方有 paperDeep 说明牌（标题 Shantell Sans 700 20px，一个 teal 类型标签和一个 'View process' 链接）。数据来自 content.ts：[HERO_TITLE] — Picture book · Books — public/images/hero-lighthouse.webp；'Bear Weather' — Picture book · Books — public/images/book-bear.webp，alt 'A brown bear reading under a patchwork blanket while rain falls outside a round window'；'Too Many Tomatoes' — Magazine feature · Editorial — public/images/editorial-kitchen.webp，alt 'A crowded kitchen with oversized vegetables tumbling from a crate'；'Bramble Preserve' — Label artwork · Packaging — public/images/packaging-jam.webp，alt 'Plump strawberries and leaves arranged around a small preserve jar'；'Swallows Over Lark Street' — Public mural · Murals — public/images/mural-birds.webp，alt 'A flock of swallows and one large owl flying over terracotta rooftops'。点击图块打开灯箱：左侧为最终画作；右侧为 'Process' 面板，含四个标签页 — Thumbnail（SVG 绘制的六个小铅笔框）、Pencil（画作经 #pencil-lines 滤镜在 paper 上呈现）、Colour rough（画作模糊 8px、saturate 1.25、在 paper 上 multiply）、Final — 每个标签页有一句来自 content.ts 的说明，以及链接 'Read the project' → #/work/<slug>。
   布局：标签行以 8px 间距换行；CSS 列：桌面 3 列，平板 2 列，移动 1 列，24px 间距；3:4 图块比 16:9 图块更高。灯箱：fixed inset-0 ink/80 背景，paper 面板 max-w-[1100px]，桌面 grid-cols-[60%_40%]，移动端堆叠，前后按钮、关闭按钮，Esc 和点击背景关闭，焦点移入面板并返回图块。
   动效：筛选动画如动效部分所述；灯箱面板以 250ms 缩放进入。
4. **流程带** — 实心 teal 色带，paper 文字。H2 'From thumbnail to final'。一行四步，每步有一个代码绘制的 ink-on-paper 图标：'Thumbnail — six tiny boxes until one feels right.'、'Pencil — the chosen box, drawn full size.'、'Colour rough — loose gouache, wrong on purpose.'、'Final — ink lines last, then clean-up.' 按钮 'Open a project'（paper 填充，ink 文字）→ #/work。
   布局：grid md:grid-cols-4 gap-8，py-20；步骤编号 01–04 使用 Shantell Sans 700。
   动效：步骤淡入上移，错开 80ms。
5. **版画预告** — H2 'Take one home'；行 ink/70：'Signed giclée prints in three sizes, from $45.' 三幅装框版画（hero-lighthouse、editorial-kitchen、mural-birds），带标题和 'From $45'。按钮 'Browse prints'（ink 描边胶囊）→ #/prints。
   布局：grid md:grid-cols-3 gap-8；画框有 10px paper 卡纸和 1px ink/20 边框。
   动效：画框悬停时上浮 4px。
6. **客户与委托行动号召** — 一行安静的虚构客户名称，使用 Shantell Sans 700 ink/50：'Marlow & Finch Books'、'The Saturday Table'、'Bramble Preserve Co.'、'Fairwater Borough Council'。其下为全宽 tomato 色带：H2 paper 'Have a story that needs pictures?' 和段落 paper/85：'Tell me the format, the deadline and where it will be seen. I reply within two days.' 按钮 'Commission me'（paper 填充，tomato 文字）→ #/commission。
   布局：客户行 py-10，名称换行并以小 mustard 圆点分隔；色带 py-20，桌面文字在左按钮在右，移动端堆叠。
   动效：色带文字淡入上移 450ms。
7. **页脚** — 字标 [BRAND]，导航重复（Work、Prints、About、Commission），以及 13px ink/60 小字：'Illustration studio · 14 Mulberry Lane, [CITY]' 和 'Artworks, clients and prices on this site are invented sample content.' 加上 [CREDIT]。
   布局：Grid md:grid-cols-3 gap-8 py-12，带 1px 顶部细线 ink/15。
   动效：无。

### 项目页面（`#/work`）
1. **项目页眉** — 显示哈希中 slug 对应的项目（#/work/lighthouse、#/work/bear-weather、#/work/tomatoes、#/work/bramble-preserve、#/work/swallows）；以 #/work 打开且无 slug 时显示第一个项目。眉题：type · client，teal 大写 12px。H1 使用 Shantell Sans 700 clamp(40px, 5vw, 68px) ink。一行摘要 18px ink/75。最终画作全宽位于下方，最大高度 640px，object-cover，带其 alt 文本。第一个项目：眉题 'Picture book · Marlow & Finch Books'，H1 '[HERO_TITLE]'，摘要 'A 32-page picture book about a keeper who cooks lunch for whoever sails past.'
   布局：与首页相同的页眉和容器；py-16；画作在 rounded-[18px] 画框中。
   动效：页眉淡入上移 400ms；画作从 scale 1.02 稳定下来。
2. **简报与规格** — 左栏 H2 'The brief' 和为默认项目写的两段短文：'Marlow & Finch asked for a story that makes an ordinary job feel like an adventure. The keeper had to be warm, a little forgettable to look at, and completely at home far above the sea.' 和 'I pitched a lunch shared with a stranger, because sharing food is the quickest way to make two characters care about each other. The publisher approved it on the second thumbnail.' 其他四个项目各有一段。右栏 'Specs' 列表：Client、Use、Medium 'Gouache and ink on cold-press paper'、Size、Delivery 'Layered TIFF and PDF/X-1a'。
   布局：lg:grid-cols-[65%_35%] gap-12 py-16；规格为表格，行线 1px ink/15。
   动效：淡入上移 400ms。
3. **流程 — 四个阶段** — H2 'How it was made'。一行四张阶段卡片：Thumbnail（paperDeep 卡片上 SVG 绘制的六个铅笔框）、Pencil（画作带 #pencil-lines 滤镜）、Colour rough（画作模糊 8px、saturate 1.25 在 paper 上）、Final（画作）。每张卡片有 Shantell Sans 700 的阶段标签和一句说明：'Six thumbnails, drawn in ten minutes.'、'The one the editor circled, at full spread size.'、'Three colour notes; this one kept the yellow raincoat.'、'Ink lines last, then two days of clean-up.'
   布局：grid md:grid-cols-4 gap-6；卡片在 paperDeep 上，rounded-[18px]，p-4；阶段图片 3:4。
   动效：卡片淡入上移，错开 80ms。
4. **下一个项目与索引** — 'Next project' 卡片，含下一幅画作、标题和类型（循环回第一个）。下方 'All projects'：其余四个为小图块，链接到各自页面。
   布局：Next 卡片桌面 grid-cols-[40%_60%]；索引 grid md:grid-cols-4 gap-6，py-16。
   动效：图块悬停时上浮 4px。

### 版画商店（`#/prints`）
1. **版画页头** — H1 'Signed prints'；正文 ink/70：'Giclée prints on 310 gsm cotton rag, signed and numbered in pencil. Three sizes, shipped flat.' 一行 13px ink/60 的小注：'Sample shop: nothing is charged and no order is placed.'
   布局：py-16。
   动效：淡入上移 400ms。
2. **版画网格与购物车** — 五张版画卡片：作品图、标题用 Shantell Sans 700 22px、'Giclée print · open edition'、三档尺寸药丸选择器 — A3 $45、A2 $85、A1 $140（默认选中 A3；激活药丸为芥末色）— 以及按钮 'Add to cart'（ink 填充）。添加后打开购物车抽屉：lucide shoppingBag 标题 'Your cart'，行项目含缩略图、标题、尺寸、减/加步进器、行小计和移除；小计用 Shantell Sans 700；免运费提示行，低于 $120 时显示 'Add $<amount> for free shipping'，高于时显示 'Free shipping unlocked'，配一条 teal 细进度条；按钮 'Checkout'。结账将抽屉内容替换为确认面板：'Sample checkout. No payment was taken and no order was placed. In a live shop this step would hand over to a payment provider.' 以及按钮 'Keep browsing'。
   布局：Grid md:grid-cols-3 gap-8；抽屉固定右侧，w-[400px] max-w-full，h-full paper，滑入覆盖在 ink/40 背景遮罩上；页头购物车图标在添加商品后显示数量徽标。状态持久化在 [BRAND_SLUG]-cart 下。
   动效：抽屉滑入 250ms；步进器按下缩放至 0.96。

### 关于（`#/about`）
1. **工作室与简介** — 左侧：public/images/studio-desk.webp（4:3）置于 teal 色块上偏移 20px 的画框中，alt 'The illustrator at her desk, seen from behind, painting with gouache in a sunlit studio'。右侧：眉题 'ABOUT'；H1 'Hello from the studio'；三段文字：'I'm [BRAND]. I drew my way through a biology degree, taught for ten years, and then let the sketchbook win. Now I paint for [SPECIALTY] from a drafty studio in [CITY].' 'My work starts on cold-press paper with a dip pen and ends with more gouache than I meant to use. I like ordinary rooms, bad weather and characters who are trying their best.' 'Away from the desk I walk a small opinionated dog named Pip and keep a shelf of picture books that is slowly becoming a wall.' 一个 lucide 按钮 'Commission me' → #/commission。
   布局：lg:grid-cols-2 gap-12 items-center py-16。
   动效：文字以 90ms 错峰淡入上移；照片从 scale 1.03 归位。
2. **我的工作方式** — H2 'How I work'。三项，配代码绘制的图标：'Two rounds of pencil sketches before any colour goes down.'、'Gouache from the tube, ink with a dip pen, no digital brushes.'、'Files delivered as layered TIFF and PDF/X-1a, with the sketches included.'
   布局：grid md:grid-cols-3 gap-8 py-16，背景 paperDeep。
   动效：各项以 80ms 错峰淡入上移。

### 委托（`#/commission`）
1. **委托表单** — 左侧：眉题 'COMMISSIONS'；H1 'Tell me about your project'；'What happens next' 为四个编号步骤：'Brief — you send the story, the format and the deadline; I reply with questions within two days.'、'Estimate — a fixed quote based on usage, within three days.'、'Sketches — two pencil directions to choose from, within a week.'、'Final — painted artwork and print-ready files in two to three weeks.' 一份报价参考表，行线 1px ink/15：'Picture book spread $900–1,400'、'Editorial spot $350–600'、'Editorial full page $700–1,100'、'Packaging illustration $1,200–2,500'、'Mural design $2,500–6,000'，以及一条注释 'Starting points for a conversation; the final quote depends on usage and timeline.' 右侧，paperDeep 上的表单面板 rounded-[18px] p-8：Name、Email、'Project type' 复选框（Picture book、Editorial、Packaging、Mural、Other）、'Budget' 单选药丸（Under $1,000 / $1,000–3,000 / $3,000–8,000 / Over $8,000）、'Deadline' 文本输入（placeholder 'Month and year'）、'Usage rights' 复选框（Print、Digital、Packaging、Merchandise）、'Tell me about the project' 文本域，以及提交按钮 'Send enquiry'（tomato 填充，paper 文字）。校验：姓名、有效邮箱、至少一个项目类型、预算和 20+ 字符的消息为必填；错误以 tomato 色内联显示在字段下方。成功后表单替换为确认面板：'Thanks, <name>. This is a sample form, so nothing was sent. In a live site this would reach [BRAND] by email.' 配按钮 'Send another enquiry'。
   布局：lg:grid-cols-[55%_45%] gap-12 py-16；输入框 1px ink/30 边框、rounded-[10px]、paper 背景、3px teal 聚焦环；移动端表单优先堆叠。
   动效：两栏以 90ms 错峰淡入上移；成功面板淡入并放大 250ms。

## 资产
- 图片：五幅水粉与水墨插画和一张工作室照片，由 VibeFather 生成，下载到 public/images/ 并且不在其他地方使用：hero-lighthouse.webp（3:4）、book-bear.webp（4:3）、editorial-kitchen.webp（3:4）、packaging-jam.webp（1:1）、mural-birds.webp（16:9）、studio-desk.webp（4:3）。每张均从 https://media.vibefather.ai/assets/e1de19bf-668f-4e4b-9922-4f4fc24e79ca/<file> 下载；alt 文本已在上述各节中给出。在 ASSETS.md 中署名：'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.'
- 图片：流程阶段（缩略图、铅笔线稿、色彩草图）、装饰纸形和步骤图标均用 SVG 和 CSS 滤镜在代码中绘制；它们没有图像文件。
- 图标：lucide-react npm 包（ISC）：menu、x、arrowRight、arrowUpRight、plus、minus、shoppingBag、check、chevronLeft、chevronRight。不使用其他图标集，任何地方都不使用品牌标志。
- 字体：Fontsource 可变字体包（OFL-1.1）：@fontsource-variable/shantell-sans 和 @fontsource-variable/work-sans，在 main.tsx 中导入。不使用字体 CDN 链接。

## 不要做
- 无后端：没有服务器代码、API 路由、数据库、认证，也没有任何会提交到某处的表单。委托表单和结账都是本地示例，会在其确认文本中说明这一点。
- 作品图、标题、客户、价格和费率都是虚构的示例内容；不得提及或模仿任何真实的出版商、杂志、品牌、代理机构、奖项或插画师。
- 图片不包含任何可读文字、字体设计、标志或签名；作品图保持单一的水粉加墨水风格；工作室照片从背后展示插画师，绝不使用正面特写。
- 一切自托管：字体通过 Fontsource 包引入，图片下载到项目中，不使用 CDN 脚本或链接标签，不使用 Google Fonts，不使用分析工具。
- Vite base 设为 './'，使用相对资源路径；内部链接是锚点（#/work、#/prints）或真实文件名，绝不使用裸目录；不带 slug 打开 #/work 时显示第一个项目。
- 生产构建压缩且不生成 source map；dist/ 小于 20 MB。
- prefers-reduced-motion：无滚动显现、浮动形状、上浮或抽屉滑动；内容立即可见。绝不在等待进入视口触发器时用 clip-path 或零不透明度隐藏整个元素。
- 任何置于图片之上的标题都放在实色底板或渐变遮罩上，并保持 WCAG AA 对比度；纸色或 paperDeep 上的正文使用 ink。
- Tailwind 不透明度工具类使用默认刻度（例如 /15、/90）；自定义档位写成任意值。
- 不做 SEO 工作：一个包含 [BRAND] 的普通 <title> 和一个 favicon 就足够了；不要 meta 描述、Open Graph 标签、JSON-LD 或站点地图。
- 不从任何参考网站复制代码、文案、图像或字体；模板名称、slug、文案或 alt 文本中不得出现品牌名称。

---
— Prompt by VibeFather · https://vibefather.ai/t/illustrator-portfolio-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
