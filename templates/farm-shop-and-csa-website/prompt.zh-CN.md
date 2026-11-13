> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 农场商店与社区支持农业（CSA）网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一个精致的三页网站。[BRAND] 是位于 [LOCATION] 的一家虚构小农场，以 [FARM_FOCUS] 闻名。网站整合了时令农产品日历、交互式 [CSA_SEASON] 配置器、包含四款产品的农场商店、农场故事，以及面向 [PICKUP_AREA] 的到访活动。

- 受众：正在比较 CSA 方案的本地家庭、寻找农场农产品和食品杂货的购物者，以及计划参加实用农场活动或取货的访客。
- 目标：帮助访客了解当季农产品，配置并保存 CSA 份额计划，组建取货订单，并通过清晰的客户端交互预留活动名额。
- 语气：温暖、平实、干练，扎根于日常农活。使用具体的作物名称、数量、价格、营业时间和取货说明；避免乡村陈词滥调、健康宣称、可持续性溢美之词和仿手写标语。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：motion (Motion for React)（MIT）、lucide-react（ISC）、@fontsource-variable/fraunces（OFL-1.1）、@fontsource-variable/dm-sans（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 将 Vite base 设为 './'，build.outDir 设为 'dist'，build.sourcemap 设为 false。
  - 为 index.html、csa.html 和 shop.html 配置 Vite rollupOptions.input，每个都带有一个小型 React 入口，共享组件和 src/content.ts。
  - 在 Tailwind 配置和 src/index.css 中定义精确的颜色令牌、Fraunces 和 DM Sans 字体族、容器宽度、阴影和关键帧。
  - 本地导入 @fontsource-variable/fraunces 和 @fontsource-variable/dm-sans；绝不从远程服务请求字体样式表。
  - 将所有变量值、导航标签、作物数据、分享选项、自提点、产品、人物、活动、常见问题和界面文案保留在 src/content.ts 中，以便更改变量时触发一致的改写。
  - 对分享计划、购物车、活动预订和已保存的自提订单使用 React 状态配合 localStorage；不发起网络请求，仅显示诚实的设备端确认。
  - 将列出的六张图片下载到 public/images 并用相对路径引用；在项目根目录创建 ASSETS.md，包含每张图片、字体和图标的署名。
  - 使用 Motion for React 实现区块显现、模态框和抽屉过渡以及日历更新，并使用 CSS 实现悬停状态；当设置了 prefers-reduced-motion 时禁用非必要的动效。

## 变量
- [BRAND] — 农场名称（默认：“Hazel & Furrow Farm”）。一个虚构的农场或合作社名称，全站使用。
- [LOCATION] — 农场地址（默认：“18 Meadow Gate, North Elms, Vermont”）。一个虚构但可信的街道地址和地区。
- [FARM_FOCUS] — 农场重点（默认：“vegetables, herbs, and pasture-raised eggs”）。主要产品和种植重点；根据实际情况改写作物和产品。
- [CSA_SEASON] — CSA 季节名称（默认：“Summer Share”）。当前份额名称，用于公告、日历和构建器。
- [PICKUP_AREA] — 取货区域（默认：“the Upper Valley”）。本地服务区域；根据实际情况改写取货点名称和路线指引。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/farm-shop-and-csa-website（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- Field `#24362A` — 深绿色页眉、页脚、正文文本和深色区块背景
- Ink `#30352D` — 正文文案和可读的次要文本
- Cream `#F3EDDF` — 主页面背景
- Paper `#FFFBF2` — 产品表面、表单和日历行
- Sage `#D7DFC8` — 选中的控件、微妙的色带和可用性强调
- Terracotta `#A94328` — 主按钮、活动链接和关键价格；搭配白色文本
- Pollen `#E8B44F` — 仅用于小型季节性标记和装饰性高亮

### 排版（Typography）
- 展示和区块标题：Fraunces Variable（OFL），字重 400/500/600
- 正文、导航、控件和数据：DM Sans Variable（OFL），字重 400/500/600/700

### 布局与动效（Layout & motion）
- 间距：使用 8px 基础网格，1280px 最大内容宽度，桌面端 32px 边距和移动端 20px 边距。桌面端区块有 104–128px 垂直内边距；移动端区块有 64–76px。Hero 标题为 clamp(3.5rem, 6vw, 6.5rem)，行高 0.94，区块标题为 clamp(2.25rem, 4vw, 4rem)，正文每行保持在 62 个字符以内。
- 圆角：按钮和输入框使用克制的 2px 圆角，产品和摘要表面使用 14px，Hero 照片左上角使用一个独特的 160px 拱形。使用 18% 不透明度的 1px Field 边框和柔和、短促的阴影，而不是把每个区块都悬浮在卡片中。
- 动效：主要区块标题和内容以 24px 向上移动和透明度过渡在 500ms 内显现，以 70ms 错开，并在 15% 可见度时触发一次。
- 动效：Hero 照片在滚动时移动不超过 40px，采用克制的视差效果；标题和控件保持静止。
- 动效：季节性行和共享清单变化以 160–220ms 交叉淡入淡出，不改变容器高度。
- 动效：抽屉和模态框使用 240ms ease-out 变换和淡入淡出，捕获键盘焦点，按 Escape 关闭，并将焦点恢复到其触发元素。
- 动效：悬停产品图片最多缩放至 1.025，按钮移动不超过 2px；所有非必要动画在减少动效模式下移除。
- 图像：将提供的六张纪实风格农场照片作为一个连贯的拍摄系列使用：温暖的金色时刻光线、柔和的森林绿、奶油色和赤陶色、逼真的纹理和柔和的 35mm 颗粒。首屏必须展示大型丰收场景，而不是仅展示排版。产品卡片使用提供的静物照片，故事部分使用环境工作肖像，不露出面部。不要添加其他照片、可识别的人物、图片内文字、标志或品牌包装。使用 object-fit 裁剪，同时保留主体，并提供列出的 alt 文本。

## 页面与区块
### 农场主页、季节、故事与活动（`index.html`）
1. **共享公告、页眉与页脚** — 在每个页面上，显示一条纤细的田野绿（Field-green）公告栏：'[CSA_SEASON] requests are open · Farm pickup and [PICKUP_AREA] collection points.' 其下方放置 [BRAND] 字标，配以原创的简洁三线犁沟 SVG，导航链接 'Seasons' 指向 ./index.html#seasons，'CSA Shares' 指向 ./csa.html，'Farm Shop' 指向 ./shop.html，'Our Story' 指向 ./index.html#story，'Visit' 指向 ./index.html#visit。右侧 CTA 文案为 'Build your box'。共享页脚包含 [BRAND]、[LOCATION]、'Farm shop Wed–Fri 10 AM–6 PM · Sat–Sun 9 AM–4 PM'、相同的文件名导航链接，以及可选的署名链接。
   布局：公告栏高 34px。粘性页眉高 78px，背景为奶油色（Cream），不透明度 94%，带细底边框，内部行宽 1280px。桌面端采用左侧品牌、居中导航、右侧 CTA；移动端采用品牌、购物车数量，以及一个菜单按钮，点击后在页眉下方展开全宽面板。页脚为深绿色双栏区块，含大号品牌行与实用信息。
   动效：页眉在滚动 24px 后获得细微阴影。移动端面板淡入并下滑 12px；减少动效模式下移除下滑效果。
2. **丰收主视觉** — 眉题：'A small farm for [PICKUP_AREA]'。标题：'Good food, grown close to home.' 正文：'Seasonal [FARM_FOCUS] from [BRAND], packed for your table and your week.' 主 CTA 'Choose your CSA share' 链接至 ./csa.html；次级 CTA 'Shop this week’s harvest' 链接至 ./shop.html。在图片下方添加小字说明：'Morning harvest · [LOCATION]'。一张紧凑的纸色（Paper）便签叠压在照片左下角，内容为 'IN THE BOX THIS WEEK' 和 'Leafy greens · roots · herbs · a pantry extra'。
   布局：桌面端使用 12 栏、最小高度 680px 的主视觉：文案占五栏并垂直居中；主视觉丰收图占七栏，采用 4:3 画幅，左上角为 160px 拱形。标题最多保持四短行。移动端文案在前，全宽图片在后，每周便签定位在图片下边缘内部，而非覆盖标题。
   动效：标题各行以 70ms 错峰显现，照片以裁剪遮罩从底部擦入。随后应用指定的最大 40px 图片视差。
3. **本周农场动态** — 三条简洁更新：'HARVEST / Rainbow chard, carrots, and basil are at their peak.' 'FARM SHOP / Order by Wednesday for a Friday pickup.' 'NEXT VISIT / Morning field walk · Saturday, 9:30 AM.' 每条均含指向相关区块或页面的文字链接。
   布局：一条带边框的水平带，桌面端分为三个等宽栏，移动端堆叠为行。标签为 11px 大写并带字间距；更新内容使用 16px DM Sans。不使用图标卡片或额外容器。
   动效：各行一起显现，仅带轻微不透明度淡入。
4. **时令农产品日历** — 眉题 'THE PRODUCE CALENDAR'；标题 'Know what’s coming home.' 引言：'Harvest shifts with weather, but the rhythm stays useful. Explore a typical [CSA_SEASON] and plan your kitchen.' 提供 Spring、Summer、Autumn、Winter 标签页，初始选中 Summer。夏季行包括：Tomatoes / July–September / PEAK；Basil / June–September / PEAK；Sweet corn / July–August / COMING IN；Zucchini / June–August / PEAK；Carrots / June–October / AVAILABLE；Peppers / July–September / COMING IN。包含注释：'Typical harvest windows, not live inventory.' 相邻面板使用 csa-box.webp，标题为 'A high-summer box'，列表为 'Tomatoes · basil · carrots · zucchini · eggs · one pantry surprise'。
   布局：桌面端，八栏日历位于四栏照片面板旁。标签页构成单条带边框轨道，行使用三个对齐栏并留出宽裕的 18px 内边距，状态为带彩色圆点的小号大写标签，而非胶囊云。移动端标签页水平滚动，作物与状态保持可见，采收窗口移至作物名称下方。照片面板堆叠在下方。
   动效：切换标签页时交叉淡入，各行在 180ms 内位移 8px，同时日历高度保持稳定。
5. **CSA 介绍** — 在田野绿背景上，眉题 'CSA, WITHOUT THE GUESSWORK'，标题 'One farm. A box that fits your week.'，文案 'Choose your size, pickup point, and rhythm. Every share follows the harvest and includes a useful pantry extra.' 展示三个步骤：'01 Pick your box — Little, Kitchen, or Family.' '02 Choose pickup — Farm gate or a neighborhood point.' '03 Cook with the season — A crop note and simple use ideas in every box.' CTA 'Build your [CSA_SEASON]' 链接至 ./csa.html#share-builder。包含 'From $24 per box · pause or change before the next packing day.'
   布局：12 栏分割，csa-box.webp 裁剪为安静的五栏图片，文字占七栏。步骤之间以纤细的半透明水平分隔线隔开，而非独立卡片。移动端文字先于图片，所有 CTA 变为全宽。
   动效：三个步骤依次显现；无固定滚动。
6. **农场商店预览** — 眉题 'FROM THE FARM STAND'；标题 'Good things for the weekly table.' 引言 'A short shelf of what we grow and make, ready for local pickup.' 展示四款产品，数据与购物车行为与 shop.html 相同：Weekly Harvest Basket 每份 $28；Pasture-Raised Eggs 每打 $7；Orchard Preserves 每 9 oz 罐 $9；Stone-Milled Farm Loaf 每条 $8。每款均有 'Add to pickup order' 按钮。链接 'Browse the whole farm shop' 指向 ./shop.html。
   布局：桌面端四个等宽产品栏，平板两个，移动端一个。图片为正方形并带细微底边框；名称与价格共享基线行，单位与简短供应说明位于下方。不要将每款产品包裹在厚重的浮动卡片中。
   动效：添加产品时按钮短暂变为 'Added' 并更新页眉购物车数量；仅当访客激活购物车控件时购物车抽屉才打开。
7. **农场故事** — 锚点 id 'story'。眉题 'ROOTED HERE'；标题 'Small fields. Long relationships.' 文案：'We farm 14 acres outside North Elms, growing 32 crop varieties in rotation and keeping the shop stocked with a few things we use in our own kitchen.' 第二段：'Mara Ellison leads the growing work and Theo Bennett runs packing days. Their rule is simple: harvest close, pack carefully, and tell people exactly what is in the box.' 添加三个事实标记：'14 acres in rotation'、'32 crop varieties'、'4 seasons of farm visits'。CTA 'Meet us at the farm' 链接至 #visit。当变量变化时重写姓名、数字与地区细节。
   布局：使用 farmer-at-work.webp 于五栏 3:4 画幅，故事文案占七栏。标记在文案下方形成三栏带分隔线的行。移动端图片位于文字上方，采用 4:3 裁剪，农夫仍居中。
   动效：肖像以柔和裁剪遮罩显现；标记一起淡入。
8. **农场参观活动** — 锚点 id 'visit'。眉题 'COME BY'；标题 'See where your food grows.' 引言 'Small-group visits at [LOCATION]. Dress for the field and bring a water bottle.' 活动行：'JUN 13 · Morning field walk · 9:30–11:00 AM · Free · 12 places · A guided loop through the growing fields and pack shed.' 'JUN 27 · Summer pickling workshop · 2:00–4:00 PM · $18 · 10 places · Make one jar to take home; ingredients and tools included.' 'JUL 11 · Farm-table picnic · 5:30–8:00 PM · $32 · 24 places · A casual shared menu served beside the lower field.' 每个 CTA 文案为 'Reserve a place'，并打开一个模态框，含姓名、邮箱、同行人数及所选活动。验证为内联；确认信息为 'Your event request is saved on this device.'
   布局：区块标题占四栏，活动占八栏。每个活动为带分隔线的行，含 72px 日期块、标题与详情，以及右对齐 CTA。移动端行堆叠日期、标题、元数据与全宽 CTA。模态框居中，最大宽度 520px，背景为纸色（Paper）。
   动效：活动行以 60ms 错峰显现；模态框使用标准 240ms 过渡。

### CSA 份额配置器与自提指南（`csa.html`）
1. **CSA 主视觉区** — 眉题 '[CSA_SEASON]'；主标题 'Your share of the season.' 正文 'A weekly or every-other-week box of [FARM_FOCUS], packed at [BRAND] for [PICKUP_AREA].' 主 CTA 'Choose your share' 锚定到 #share-builder；次 CTA 'See the produce calendar' 链接到 ./index.html#seasons。包含三条安心提示：'Three useful sizes'、'Four pickup choices'、'Change before packing day'。
   布局：一个紧凑的 420px 编辑式主视觉区，文案占七列，csa-box.webp 的裁剪图占五列。共享的公告栏和页头保持在其上方可见。移动端图片以 4:3 比例跟随其后，安心提示折为单列。
   动效：仅使用标准的标题和图片显现效果；不添加额外的视差效果。
2. **交互式份额构建器** — 锚点 id 'share-builder'。标题 'Build a box around your week.' 第 1 步提供 Little Share，每箱 $24，'1–2 people · 5–6 harvest items'；Kitchen Share，每箱 $34，'2–3 people · 7–8 harvest items'；Family Share，每箱 $44，'4–5 people · 10–12 harvest items'。Kitchen Share 初始为选中状态。第 2 步提供 Farm Gate at [LOCATION]，周六 9 AM–12 PM，无费用；North Elms Library，周三 4–6 PM，无费用；Upper Valley Co-op，周五 3–6 PM，$2 手续费；Meadow Market Hall，周日 10 AM–1 PM，无费用。第 3 步提供 Weekly 或 Every other week。实时摘要显示所选规格、自提点、频率、按比例缩放的产品清单、含手续费的每箱总价，以及按每周四箱或每两周两箱估算的月度总价。姓名和邮箱字段为必填并经过验证。最终按钮文字为 'Save my share plan'；成功提示为 'Your share plan is saved on this device. No payment has been collected.' 包含 'Harvest substitutions are normal; the final box follows the field.'
   布局：桌面端三个步骤占七列，一个粘性的五列摘要保持在页头下方。选项为带边框的大行，右侧有单选指示器和价格；选中行使用 Sage 色和 2px Field 边框。摘要为 Paper 色，14px 圆角，包含一条小型 csa-box 图片条、分项总计和全宽 CTA。移动端摘要跟随在步骤之后，不粘性。
   动效：选项选择即时响应；清单行交叉淡入淡出，总价使用 150ms 的短暂透明度变化。保存时显示内联成功面板，而非浏览器弹窗。
3. **一季三箱** — 标题 'The box changes. The habit stays.' 展示三份示例清单：'Early summer / Snap peas, baby lettuce, spring onions, radishes, herbs, eggs, farm loaf.' 'High summer / Tomatoes, zucchini, basil, carrots, peppers, eggs, orchard preserves.' 'Early autumn / Winter squash, potatoes, kale, onions, apples, eggs, farm loaf.' 注释：'Examples show the Kitchen Share. Quantities scale with your selected size.'
   布局：桌面端三个等宽的编辑式栏目，用竖线分隔；移动端用横线分隔。每栏有一个大号 01/02/03 序号、季节标题和可读的逗号分隔清单；不添加额外照片或图标卡片。
   动效：栏目在进入时以短暂错峰效果显现。
4. **自提与灵活性** — 标题 'Pickup should be the easy part.' 四条说明：'Bring a bag — We pack in returnable crates.' 'Running late — Farm-gate boxes stay in the cool room until 6 PM.' 'Away for a week — Change your rhythm before the next packing day.' 'Send a friend — Add their name to your saved plan.' 包含一条简单的三步流程：'Choose your point → Look for your name → Take your box home.'
   布局：一个 Sage 色调的区块，上方为四列说明网格，下方为宽幅带分隔线的三步流程。移动端使用两列说明网格，步骤堆叠，箭头旋转朝下。
   动效：静态内容，仅使用标准区块显现效果。
5. **CSA 常见问题** — 五个无障碍手风琴条目：'What if I do not recognize a crop?' — Every box includes a short crop note with storage and preparation ideas. 'Can I switch box sizes?' — Yes; save a new plan before the next packing day. 'Is the monthly total a charge?' — No; it is an estimate from your selected rhythm. No payment is collected by this site. 'What happens in a poor harvest week?' — A comparable crop or pantry item replaces the missing item and the packing note explains the change. 'Do I need to return the crate?' — Return it at the next pickup so it can go back into circulation.
   布局：一个窄幅 860px 的手风琴，行高 20px，使用 Lucide 图标，末尾有一个指向 ./shop.html 的链接，标签为 'Rather shop one week at a time?'
   动效：手风琴高度和加号旋转以 200ms 动画过渡；减少动效模式下立即展开。

### 农场商店与本地自提购物车（`shop.html`）
1. **商店主视觉区与控件** — 眉题 '[BRAND] FARM SHOP'；主标题 'Good things from nearby fields.' 正文 'A short, changing shelf of [FARM_FOCUS] and kitchen staples. Save your order for local pickup.' 控件为分类标签 All、Produce、Pantry、Bakery 以及排序菜单 Featured、Price low to high、Price high to low。页头购物车按钮始终显示当前商品数量。
   布局：一个 320px 以文字为主的主视觉区，右侧有一条细的植物纹理 SVG，而非另一张大图。控件在主视觉区下方形成一条粘性的 64px 行，移动端可横向滚动，桌面端排序控件右对齐。
   动效：筛选变化时网格交叉淡入淡出，不单独动画化每个商品在页面上的移动。
2. **商品网格与快速查看** — 商品 1：Weekly Harvest Basket，Produce，每个 $28，csa-box.webp，'About 8 lb of mixed seasonal produce'，徽章 'PACKED FRIDAY'。商品 2：Pasture-Raised Eggs，Produce，每打 $7，farm-eggs.webp，'One dozen mixed-color eggs'，徽章 'FARM GATE'。商品 3：Orchard Preserves，Pantry，每 9 oz 罐 $9，orchard-preserves.webp，'Small-batch fruit preserve with cane sugar'，徽章 'PANTRY'。商品 4：Stone-Milled Farm Loaf，Bakery，每条 $8，farm-loaf.webp，'Naturally leavened; contains wheat'，徽章 'SATURDAY ONLY'。商品名称或图片打开快速查看模态框，包含更大的图片、描述、单位、过敏原或储存说明、数量步进器和添加按钮。变量变化时重写商品详情。
   布局：宽桌面使用四列网格，平板两列，移动端一列。每个商品有方形图片、分类标签、名称、单位详情和对齐的价格。快速查看在桌面端为 760px 两列模态框，移动端为单列底部面板。
   动效：商品悬停使用指定的 1.025 图片缩放；快速查看遵循共享模态框行为。
3. **自提购物车抽屉与已保存订单** — 购物车抽屉列出所选商品，带数量步进器、移除操作和实时小计。空状态：'Your pickup basket is empty.' 自提选项复用 Farm Gate、North Elms Library、Upper Valley Co-op 和 Meadow Market Hall 及其时间和费用。'Review pickup order' 显示紧凑的订单摘要并要求姓名和邮箱。'Save pickup order' 将订单存储在此设备上并显示 'Your pickup order is saved on this device. No payment has been collected.' 绝不暗示订单已传输或已付款。
   布局：桌面端为 440px 右侧抽屉，移动端全宽，带固定页头、可滚动商品列表和底部小计与 CTA 区域。审核时替换抽屉内容，同时保留清晰的返回按钮。焦点被限制直到关闭。
   动效：抽屉从右侧滑入，历时 240ms，带暗色背景；数量和小计更新短暂淡入淡出。
4. **自提说明** — 标题 'A few things before pickup.' 三条说明：'Order rhythm — Save your list by Wednesday for the best Friday selection.' 'What to bring — A reusable bag and your saved order screen.' 'Questions about allergens — Product notes list sample ingredients; always check with the farm before purchasing.' 添加共享的农场商店营业时间和 [LOCATION]。
   布局：一个 Cream 色区块，三列带分隔线，底部有一条全宽的位置条。移动端所有说明堆叠，间距 24px。
   动效：仅标准显现效果。

## 资源

- 图片：将 https://media.vibefather.ai/assets/e18be6d4-25ab-4c85-83b8-d1ca8f6dbe52/hero-harvest.webp 下载到 public/images/hero-harvest.webp。Alt：'A wooden crate of mixed seasonal produce beside rows on a small farm at golden hour.' 用作首页丰收主视觉图。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/e18be6d4-25ab-4c85-83b8-d1ca8f6dbe52/csa-box.webp 下载到 public/images/csa-box.webp。Alt：'A wooden CSA box filled with leafy greens, vegetables, herbs, and fruit.' 用于时令日历、CSA 区块和 Weekly Harvest Basket 产品。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/e18be6d4-25ab-4c85-83b8-d1ca8f6dbe52/farm-eggs.webp 下载到 public/images/farm-eggs.webp。Alt：'Brown and cream eggs in a plain pulp carton on a wooden farm-shop shelf.' 用于商店和快速查看中的 Pasture-Raised Eggs。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/e18be6d4-25ab-4c85-83b8-d1ca8f6dbe52/orchard-preserves.webp 下载到 public/images/orchard-preserves.webp。Alt：'Three jars of amber orchard preserves with blank labels on a wooden table.' 用于商店和快速查看中的 Orchard Preserves。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/e18be6d4-25ab-4c85-83b8-d1ca8f6dbe52/farm-loaf.webp 下载到 public/images/farm-loaf.webp。Alt：'A round rustic sourdough loaf on a linen-covered farm-shop counter.' 用于商店和快速查看中的 Stone-Milled Farm Loaf。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/e18be6d4-25ab-4c85-83b8-d1ca8f6dbe52/farmer-at-work.webp 下载到 public/images/farmer-at-work.webp。Alt：'A farmer seen from behind carrying a harvest crate between crop rows.' 用于首页农场故事。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图标：仅使用本地安装的 lucide-react 图标，用于菜单、购物车、箭头、加号、减号、关闭、日历和自提标记；许可证 ISC。直接在 SVG 中绘制原创的三线犁沟品牌标志。将两者都记录在 ASSETS.md 中。
- 字体：通过 @fontsource-variable/fraunces 自托管 Fraunces Variable，通过 @fontsource-variable/dm-sans 自托管 DM Sans Variable，两者均为 OFL-1.1。在本地导入这些包并记录在 ASSETS.md 中；不要使用字体 CDN。

## 禁止事项（Don'ts）
- 不得使用任何真实农场的名称、标志、字标、口号、原文文案、产品标签、包装、标志性插画、吉祥物、独特图标、自定义字体或完全一致的参考配色；所有品牌与业务内容必须保持虚构且原创。
- 不得复制参考代码、提示词、图像、视频或布局，超出此处描述的高层信息结构范围。
- 不得包含可识别的人物、名人肖像、品牌产品、被用作品牌的知名地标、动漫或游戏角色，或任何第三方标志。
- 不得添加来自 Unsplash、Pexels、Pixabay、Google Images、占位图服务或任何未明确允许来源的图库图片；仅使用提供的六张生成照片以及本地 SVG 或 Lucide 图标。
- 不得热链资源、加载 CDN 脚本或样式表、使用远程字体、添加分析统计或发起第三方 API 调用；每个运行时资源都必须为本地资源。
- 不得创建后端、数据库、身份验证、服务器路由、真实结账、支付收集或传输数据的表单；localStorage 保存与设备端确认必须准确说明实际发生了什么。
- 不得使用商业字体或缺少许可证、非商业、相同方式共享或其他受限许可证的依赖项。
- 不得输出 source map、将 src 复制到 dist、使 dist 超过 20 MB，或要求超过单条 npm run build 命令。
- 不得使用裸目录内部链接；链接到 ./index.html、./csa.html、./shop.html 或已记录的同一页面锚点，并保持所有资源路径为相对路径。
- 不得引入水平溢出、控制台错误、不可访问的焦点状态或忽略 prefers-reduced-motion 的动效；在 1440×900 和 390×844 下验证。
- 不得添加 SEO 元数据、结构化数据、站点地图、Open Graph 标签或关键词堆砌内容；一个普通的变量感知标题和本地 favicon 即可。
- 除可选的页脚署名链接外，不得在站点内提及 VibeFather，且绝不要将 VibeFather 用作变量默认值。

---
— Prompt by VibeFather · https://vibefather.ai/t/farm-shop-and-csa-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
