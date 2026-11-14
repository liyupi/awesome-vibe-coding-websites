> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 披萨订购网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个完整的响应式单页订餐网站，[BRAND] 是一家虚构的披萨店，在 [CITY] 供应 [PIZZA_STYLE]。该体验包括以照片为主的店面展示、按类别筛选的菜单、带实时 SVG 预览和价格的 DIY 披萨工作台、共享购物车抽屉、自取或配送时间段、客户详情，以及客户端确认页面。使用下方完全一致的默认内容，然后在变量值变化时，连贯地重写名称、详情和辅助文案。

- 受众：独立披萨店店主、小型餐厅团队、幽灵厨房，以及需要一套完全以静态站点运行、贴近真实餐饮场景的订餐流程的前端开发者。
- 目标：让访客从产生食欲，顺畅走到一份可定制、已定价、已排期的演示订单，全程没有死胡同，同时为餐厅赋予温暖、可信的本地身份。
- 语气：温暖、诱人、简洁，并聚焦邻里感。使用具体的食材和服务细节，而不是泛泛的餐厅宣传语。让界面俏皮但不过于幼稚。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：motion（MIT）、lucide-react（ISC）、@fontsource-variable/fraunces（OFL-1.1）、@fontsource/dm-sans（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 将 Vite base 设为 './'，build.outDir 设为 'dist'，build.sourcemap 设为 false，emptyOutDir 设为 true。
  - 为 index.html 和 src/**/*.{ts,tsx} 配置 Tailwind；将指定的颜色和字体系列添加到主题中，并将全局关键帧保留在 src/index.css 中。
  - 从 motion/react 导入 Motion，并使用 lucide-react 作为界面图标；不要添加组件库或其他动画库。
  - 通过在 src/main.tsx 中导入 Fontsource 包来自托管 Fraunces Variable 和 DM Sans，仅包含所使用的字重。
  - 将所有变量值、标题、标签、菜单项、价格、营业时间、时间段、验证消息和替代文本放入 src/content.ts，以便新案例只需更改一个内容模块，而不是分散在 JSX 中。
  - 在 src/App.tsx 中使用一个类型化的订单状态，用于菜单、自定义披萨、购物车、履约方式、时间段、客户详情和确认；从该状态派生每个显示的总计。
  - 将金额存储为整数分。通过共享函数计算小计、配送费、税费和总计，以便构建器、购物车、结账和确认永远不会不一致。
  - 将购物车和当前自定义披萨持久化到 localStorage 中，使用从 slugified 的 BRAND 值派生的稳定键；在渲染之前验证存储的数据。
  - 对 Menu、Pizza Lab 和 Visit 导航使用带 scrollIntoView 的按钮，并将整个体验保留在 index.html 中，不使用路由器。

## 变量
- [BRAND] — 披萨店名称（默认："Juniper & Crust"）。一个虚构的社区披萨店名称，绝不是真实存在的连锁餐厅。
- [CITY] — 城市和地区（默认："Portland, Oregon"）。用于公告、主视觉、服务文案和页脚。
- [TAGLINE] — 主视觉标语（默认："A little wild. A lot wood-fired."）。一句简短的原创文案，可作为主视觉的大标题。
- [PIZZA_STYLE] — 披萨风格（默认："wood-fired neighborhood pizza"）。一段简洁的描述，用于调整故事和菜单细节。
- [ADDRESS] — 自取地址（默认："418 Alder Finch Street, Portland, Oregon"）。一个虚构的街道地址，用于自取和到店信息。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/pizza-ordering-website（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 烤箱奶油色（Oven Cream）`#F6EFE3` — 主页面背景和确认页面
- 面粉白色（Flour White）`#FFFaf2` — 菜单卡片、抽屉、输入框和凸起表面
- 烘焙墨色（Roasted Ink）`#2B1B17` — 标题、正文、深色按钮和图标描边
- 番茄红（Tomato）`#B9402A` — 主要操作、激活的分类标签、价格和小型高亮；在其上使用白色文字
- 罗勒绿（Basil）`#35543D` — 次要按钮、饮食标签、成功状态和页脚背景
- 饼皮金色（Crust Gold）`#E2A44B` — 仅用于装饰性饼皮色调、星星和焦点强调，绝不用于小号正文

### 字体排印
- 展示和章节标题：Fraunces Variable（OFL），字重 600/700/900
- 正文、导航、控件、价格和表单标签：DM Sans（OFL），字重 400/500/600/700

### 布局与动效
- 间距：使用 8px 基础网格，最大内容宽度 1280px，桌面端 32px 或移动端 20px 侧边留白。章节的垂直内边距为桌面端 96px、移动端 64px。卡片内容使用 24px 内边距；控件组使用 16px 间距；正文每行保持在 62 个字符以下。
- 圆角：摄影图片和主卡片使用 24px 圆角，输入框和紧凑行使用 16px，小型控件使用 12px，标签、徽章和主按钮使用完全圆角的胶囊形。边框为 1px 实线 Roasted Ink，不透明度 12%；阴影柔和温暖，而非黑色。
- 动效：初始加载时，将 hero 区域的眉题、标题、文案和按钮以 70ms 的间隔依次错开，以 20px 向上淡入；以 500ms 的 clip-path 擦除效果展示 hero 照片，不使用视差。
- 动效：主要章节标题和菜单卡片在进入视口时以 16px 向上淡入、持续 350ms 展示一次；不要在每次滚动时重复播放。
- 动效：分类切换以 160ms 交叉淡入和 8px 垂直位移进行动画，同时保持网格高度足够稳定以避免跳动。
- 动效：新选中的 SVG 配料组从 0.7 缩放到 1，使用 160ms ease-out，并对实时价格进行微妙的 120ms 高亮动画，而非滚动数字。
- 动效：购物车抽屉从右侧滑入，使用阻尼弹簧、持续 320ms，并淡入其背景遮罩；锁定焦点，按 Escape 关闭，并将焦点恢复到下单按钮。
- 动效：结账到确认页面的过渡使用 180ms 淡入和小的对勾图标缩放。在 prefers-reduced-motion 下，移除变换和错开展示，立即显示所有状态变化。
- 图像：仅使用列出的六张生成的编辑风格照片，不使用其他摄影图片。它们共享浅色石材表面或温暖奶油色室内、番茄和罗勒点缀、来自左上方的柔和午后窗光，以及克制的自然餐厅风格。将 hero.webp 裁剪为大幅横向场景，以一致的 4:3 卡片展示四张披萨照片，并将 dining-room.webp 放置在到访文案旁边。披萨配置器是用代码绘制的清晰原创 SVG，而非生成图像。不得出现人物、烘焙进图像的文字、标志、品牌包装或可识别的连锁餐厅。

## 页面与区块
### 披萨店店面与订购流程（`index.html`）
1. **公告栏与共享页头** — 一条纤细的罗勒绿（Basil）公告条写着 'Wood-fired in [CITY] · Pickup 20–30 min · Delivery 35–45 min'。其下方，吸顶的面粉白（Flour White）页头包含 Fraunces 字体的 [BRAND] 字标、三个文字按钮（Menu、Pizza Lab 和 Visit），以及一个带购物袋图标和实时商品计数的番茄红（Tomato）下单按钮。在移动端，保持字标和下单按钮可见，并将三个导航按钮放入一个可访问的紧凑菜单中。
   布局：公告条高 32px 并居中。页头高 76px，带底部细线、1280px 内层行，导航组之间留有充裕间距。滚动时保持吸顶，并带微妙的奶油色模糊。移动端菜单在页头下方展开，而不是覆盖下单按钮。
   动效：吸顶页头在滚动 24px 后获得淡淡的阴影。每当添加商品时，购物车计数短暂缩放至 1.12；在减少动态效果模式下移除所有运动。
2. **照片主导的订购主视觉** — 使用一个小号番茄红眉题 'NEIGHBORHOOD PIZZA, MADE YOUR WAY'。H1 为 [TAGLINE]，默认情况下恰为 'A little wild. A lot wood-fired.'。辅助文案为 'Slow-fermented dough, bright produce, and pies built your way. Order pickup or delivery from [BRAND] in [CITY].'。主 CTA：'Start an order'，滚动至菜单。次 CTA：'Build your own'，滚动至 Pizza Lab。下方三条简洁事实为 '48-hour dough'、'Local pickup'、'No app needed'。使用 hero.webp，替代文本取自资源清单，并配一个小型整合说明 'Hot from the oven · ready when you are'。
   布局：在 1440px 下，在 1280px 容器内使用 5/7 两栏网格，最小高度为 calc(100svh - 108px)，内容垂直居中，栏间距 64px。左侧 H1 为 clamp(56px, 6vw, 88px)，字重 900，行高 0.94，字距紧凑。右侧照片填充 24px 圆角边框，比例约为 4:3，并略微超出容器边缘而不引起水平滚动。在移动端，文案堆叠在 4:3 图片之前，H1 缩小至 48px，两个 CTA 仅在能完整显示而不截断时并排全宽。
   动效：使用指定的主视觉入场序列和图片擦除效果。CTA 悬停时上浮 2px，主视觉说明随照片淡入；无持续漂浮或光标效果。
3. **分类菜单** — 标题：'Tonight's lineup'。引言：'Start with a house favorite, then make it yours. Every pizza is stretched to order.'。提供分类胶囊按钮 Pizzas、Sides 和 Drinks，并显示可见计数。默认 Pizzas：Ember Margherita，$16，'Crushed tomato, fior di latte, basil, olive oil'，素食徽章，ember-margherita.webp；Forest Floor，$19，'Roasted mushrooms, caramelized onion, thyme, smoked provolone'，素食徽章，forest-floor.webp；Hot Honey Pepperoni，$19，'Pepperoni, mozzarella, chili honey, oregano'，辣味徽章，hot-honey-pepperoni.webp；Green Orchard，$18，'Zucchini ribbons, roasted leeks, basil pesto, ricotta, lemon'，素食徽章，green-orchard.webp。Sides：Rosemary Dough Knots，$8，'Six knots, roasted garlic butter, parsley'；Charred Little Gems，$9，'Little Gem lettuce, lemon dressing, toasted breadcrumbs'，素食徽章。Drinks：Blood Orange Fizz，$5，'Blood orange, sparkling water, rosemary'；Basil Lime Cooler，$5，'Lime, basil, cucumber, sparkling water'。每个商品都有 Add 按钮和清晰的价格。分类选择仅筛选菜单；不会重置购物车。
   布局：桌面端区块标题和引言居左，分类胶囊按钮居右。披萨以两栏网格呈现为厚实的水平卡片：4:3 照片在上，24px 内容区在下，名称和价格同一行，配料在下方，Add 按钮对齐在底部。Sides 和 Drinks 使用两栏紧凑的面粉白行，不带空图片占位符。在移动端所有卡片变为单栏，分类胶囊按钮水平滚动而不换行。菜单卡片在每行内等高。
   动效：使用分类过渡动画筛选项目。点击 Add 时，按钮中短暂显示对勾图标和 'Added' 700ms，同时购物车计数更新；绝不阻止重复添加。
4. **Pizza Lab 配置器** — 标题：'Your pizza, in the making'。引言：'Choose a size, pick a sauce, and tap toppings to see them land.'。第 1 步 尺寸：12 英寸 $14 或 16 英寸 $18。第 2 步 酱料：Crushed Tomato 包含在内，Garlic Cream +$1，Spicy Arrabbiata +$1。第 3 步 配料：Basil、Mushroom、Red Onion、Roasted Pepper、Olive、Pepperoni 和 Jalapeño，各 +$1.50；mozzarella 包含在内。配料按钮暴露按下状态，允许任意组合，包括不选。实时 SVG 显示俯视披萨，含饼边、酱料、奶酪，以及每种配料类型的确定性固定位置。显示配方摘要和公式 'Base + sauce + toppings'。实时价格从 $14.00 开始并立即更新。控件：Reset 恢复 12 英寸、Crushed Tomato、无配料；'Add custom pizza · $14.00' 更新自身价格并向共享购物车添加唯一标识的自定义商品。
   布局：使用罗勒绿着色区块背景，配两栏工作台：左侧控件分三个编号组，右侧为吸顶的面粉白预览面板。SVG 占据最大 480px 的正方形，实时价格作为大号 Fraunces 数字在其下方，添加按钮全宽。在移动端，先显示 SVG 预览（最大 280px），然后是三个控件组和吸底添加栏，该栏绝不覆盖最后的控件。
   动效：配料以指定的缩放过渡出现和消失，选择胶囊按钮在 140ms 内响应，Reset 温和地将预览淡回基础状态。保持 SVG 几何稳定，仅所选图层移动。
5. **到店与服务详情** — 标题：'The oven is on'。正文：'Come for a quick slice at the counter or order ahead for a relaxed night in. Our small dining room keeps things simple: good dough, careful ingredients, and a table when you need one.'。显示 dining-room.webp、自取地址 [ADDRESS]、电话 '(503) 555-0148'，以及营业时间：Monday Closed；Tuesday–Thursday 4–10 PM；Friday–Saturday 12–11 PM；Sunday 12–9 PM。添加三条服务说明：'Pickup · Usually ready in 20–30 minutes'、'Delivery · Within 3 miles, $3.50 fee'、'Questions · Call us for allergy information before ordering'。电话和菜单内容位于 src/content.ts 中，并重写以适应变更的变量集。
   布局：两栏网格将 4:3 餐厅照片放在左侧，内容堆栈放在右侧。营业时间使用紧凑的两栏定义列表，值对齐。服务说明在地址下方形成三个分隔行，而不是三张浮动卡片。在移动端，图片在前，随后是故事、营业时间和服务说明，间距 16px。
   动效：对图片和文案使用单次视口显现；无地图动画或环境视频。
6. **页脚** — 页脚标题：'Good pizza. No waiting room.'。包含 [BRAND]、[CITY]、三个导航按钮、电话号码，以及 'Demo ordering experience · no payment collected'。使用基于简单三角形和圆形的小型代码绘制披萨切片 favicon，而非从任何餐厅复制的标志。
   布局：罗勒绿背景配面粉白文字，1280px 内层容器，垂直内边距 40px。品牌和标题居左；导航和服务详情居右，小字上方有细的半透明分隔线。在移动端干净堆叠，16px 可读文本和大点击目标。
   动效：除标准区块显现外无入场动画。
7. **购物车抽屉与结账** — 下单按钮打开模态购物车抽屉。空状态：袋子图标、'Your pizza is waiting'，以及 'Browse the menu' 以关闭并滚动至菜单。填充状态列出每个标准或自定义披萨及其选项、数量步进器、行总计和 Remove 操作。显示 Subtotal、Delivery fee（配送 $3.50，自取 $0）、Estimated tax（食品小计的 8.75%）和 Total；不对配送费征税。结账有两个大型分段选择：Pickup 和 Delivery。自取时段：'ASAP · 20–30 min'、'5:45–6:00 PM'、'6:15–6:30 PM'、'6:45–7:00 PM'。配送时段：'ASAP · 35–45 min'、'6:00–6:15 PM'、'6:30–6:45 PM'、'7:00–7:15 PM'。两者均要求 Name 和 Phone；仅 Delivery 要求 Street address 和 ZIP。使用内联错误并在切换方式时保留已输入的值。最终按钮为 'Place demo order'，在购物车、时段和必填字段有效之前禁用。相邻说明：'Demo only — no payment is collected and no order is sent.'
   布局：桌面端抽屉宽 480px，占满视口高度，右对齐，带半透明遮罩和三个内部区域：固定头部、可滚动的商品项或结账表单、固定的合计/页脚。从结账返回商品项时不丢失状态。在 390px 宽度下占满视口。输入框高度至少 48px，错误提示具体明确，键盘焦点在抽屉关闭前始终保持在抽屉内。
   动效：使用抽屉弹簧和遮罩淡入。支付方式和时段变更时其详情交叉淡入淡出，不导致合计不可预测地变化；禁用按钮绝不呈现可点击的动画效果。
8. **订单确认屏幕** — 提交有效的演示订单后，对购物车和选择项进行快照，用 [BRAND] 的大写首字母加 '-1048' 生成订单参考号（默认 'JC-1048'），清空当前购物车，并用确认页替换结账页。显示 Basil 对勾图标、'Your demo order is in the books'、参考号、所选支付方式和时段、客户姓名、商品摘要、费用、税费和最终合计。自取显示 [ADDRESS]；配送显示输入的配送地址。辅助文案：'This is a demonstration. No payment was taken and nothing was sent to a kitchen.' 主按钮 'Start another order' 重置履约和客户详情，关闭确认页，并滚动到菜单。次按钮 'Back to site' 关闭确认页但不开始新订单。
   布局：使用占满视口的 Oven Cream 覆盖层，居中 640px 栏，留白充裕，采用一个连续的确认面板而非分散的卡片。订单摘要为带边框的列表，合计右对齐。移动端保持所有操作可见，边距 20px，并允许垂直滚动。
   动效：覆盖层淡入，对勾图标缩放一次。开始另一订单时返回干净的菜单状态，不再次对每个区块做动画。

## 资源

- 图片：将 https://media.vibefather.ai/assets/48136723-c752-4085-9636-8de8c41cde5a/hero.webp 下载到 public/images/hero.webp。Alt：'A wood-fired pizza with basil on a cream ceramic plate in warm window light'。用作大幅主视觉照片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/48136723-c752-4085-9636-8de8c41cde5a/ember-margherita.webp 下载到 public/images/ember-margherita.webp。Alt：'A margherita pizza with tomato, mozzarella, and fresh basil'。用于 Ember Margherita 菜单卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/48136723-c752-4085-9636-8de8c41cde5a/forest-floor.webp 下载到 public/images/forest-floor.webp。Alt：'A rustic pizza topped with roasted mushrooms, caramelized onion, and thyme'。用于 Forest Floor 菜单卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/48136723-c752-4085-9636-8de8c41cde5a/hot-honey-pepperoni.webp 下载到 public/images/hot-honey-pepperoni.webp。Alt：'A pepperoni pizza with melted mozzarella and a glossy chili-honey drizzle'。用于 Hot Honey Pepperoni 菜单卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/48136723-c752-4085-9636-8de8c41cde5a/green-orchard.webp 下载到 public/images/green-orchard.webp。Alt：'A vegetable pizza with zucchini, roasted leeks, pesto, and ricotta'。用于 Green Orchard 菜单卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/48136723-c752-4085-9636-8de8c41cde5a/dining-room.webp 下载到 public/images/dining-room.webp。Alt：'A small cream and terracotta pizzeria dining room with oak tables and an open oven'。用于 Visit 和服务详情旁。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：在 src/components/PizzaPreview.tsx 中将配置器披萨绘制为原创的分层 SVG：同心饼皮和奶酪圆、酱色层，以及位于固定坐标的可复用配料符号。在本地将简单的披萨切片 favicon 绘制为 SVG。两者均不需要外部资源文件。
- 图标：购物袋、加号、减号、垃圾桶、时钟、地图图钉、电话、对勾、chevron、菜单和关闭操作仅使用本地打包的 lucide-react 图标。为仅含图标的按钮提供可访问名称，不要绘制替代品牌标识。
- 字体：通过 @fontsource-variable/fraunces 自托管 Fraunces Variable，字重为 600、700 和 900；许可证 OFL-1.1。通过 Fontsource 在本地导入，并在 ASSETS.md 中记录该包。
- 字体：通过 @fontsource/dm-sans 自托管 DM Sans，字重为 400、500、600 和 700；许可证 OFL-1.1。通过 Fontsource 在本地导入，并在 ASSETS.md 中记录该包。

## 不要做
- 不要使用任何真实的披萨店名称、标志、口号、吉祥物、品牌配色、复制的菜单文案、可识别的餐厅摄影、品牌包装或标志性插画。
- 不要获取图库图片，也不要使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务、渲染站点中的外部图片 URL，或除列出的六个生成文件和代码绘制的 SVG 之外的任何图像。
- 不要加载 Google Fonts、Adobe Fonts、CDN 脚本、CDN 样式表、远程图标、分析工具或任何第三方 API。所有运行时资源都要自托管。
- 不要添加后端、数据库、身份验证、无服务器函数、支付字段、支付处理器、真实订单提交，或声称厨房收到了演示订单。
- 不要让菜单、自定义披萨、购物车、结账和确认页各自维护独立的总计或相互矛盾的选项状态；所有部分都必须使用共享的类型化订单状态和整数分计算。
- 不要在切换菜单分类或打开 Pizza Lab 时重置购物车，也不要在自取和配送之间切换时丢失结账详情。
- 不要创建额外路由或裸目录链接。将站点保持在 index.html 中，使用相对资源路径，并且只将静态生产站点输出到 dist/。
- 不要生成 source map、将 src/ 复制到 dist/、让 dist/ 超过 20 MB，或在 1440×900 和 390×844 下留下控制台错误。
- 不要将文案或价格分散在 JSX 中、将默认品牌硬编码到存储键中，或在变量值变化时让仅默认值的详情保持不变。
- 不要使用商业字体、受限的 UI 源码、未授权的依赖、可识别的人物肖像、动漫或游戏角色，或第三方标志。
- 不要添加 SEO 元数据、Open Graph 标签、JSON-LD、站点地图工作、分析工具或堆砌关键词的文案；一个普通的 [BRAND] 标题和本地 favicon 就足够了。
- 不要忽略键盘操作、可见焦点、可访问名称、表单错误、模态框焦点管理、颜色对比度或 prefers-reduced-motion。
- 将所有界面文案、示例数据、验证消息和替代文本保持为美式英语。除可选的署名链接外，不要在站点内提及 VibeFather。

---
— Prompt by VibeFather · https://vibefather.ai/t/pizza-ordering-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
