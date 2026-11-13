> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 外卖应用（Food Delivery App）

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一个面向 [AUDIENCE] 的原创外卖 Web 应用，为虚构的 [DELIVERY_AREA] 周边提供 [OCCASION] 服务。包含地址选择、菜系筛选、带评分和配送信息的餐厅卡片、带吸顶分类标签的完整餐厅菜单、常驻的最低起送价购物篮、逐项列出的示例结账页，以及带动态骑手路线的实时风格订单追踪器。使用五家虚构餐厅、原创英文文案、六张生成的菜品照片，以及一张用代码绘制的街区地图；所有交易和配送事件均在本地模拟。

- 受众：[AUDIENCE]。该模板还应服务于餐饮集团、食品产品创始人、独立开发者，以及需要完整配送流程精致静态原型的设计师。
- 目标：让访客能够从餐厅发现连续进入菜单、满足最低起送价、理解完整结账总额、下示例订单，并观看其状态和骑手路线推进。直接访问餐厅、结账和追踪路由时也必须包含有意义的演示内容，且每个可见控件都必须更新真实的客户端状态。
- 语气：温暖、轻快、邻里感、精确。使用诱人但克制的食物文案、透明的价格和时间、清晰的演示声明。避免外卖平台陈词滥调、人为制造的紧迫感、夸大的评分宣称，或暗示存在真实订单或骑手的语言。

## 技术栈
- 框架：Vite 6 + React 19 + TypeScript
- 样式：Tailwind CSS 4
- 库：motion（MIT）、lucide-react（ISC）、@fontsource-variable/bricolage-grotesque（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 将 Vite base 设为 './'，build.sourcemap 设为 false；将压缩后的静态文件输出到 dist/，以 index.html 作为唯一的 HTML 入口，且不将 src/ 目录复制到输出中。
  - 通过 @tailwindcss/vite 配置 Tailwind CSS 4；在 src/index.css 中定义颜色令牌（color tokens）、排版、路线图关键帧（route-map keyframes）、进度处理方式以及可复用的应用工具类。
  - 实现 index.html 以及哈希路由 #/restaurant、#/checkout 和 #/tracking。直接访问 #/restaurant 会选择第一个餐厅；直接访问 #/checkout 会使用已初始化的示例或持久化的购物篮；直接访问 #/tracking 会在没有已提交订单时创建内置示例订单。
  - 创建 src/content.ts，作为变量值和派生文案、餐厅和菜单记录、菜系筛选器、地址预设、费用、示例订单阶段、图片路径、地图标签和 UI 标签的唯一来源。当变量变化时重写默认文案，并通过将 BRAND 转为小写并移除空格和标点来派生存储命名空间。
  - 使用一个 React context 配合 reducer 管理所选地址、菜系、所选餐厅、购物篮条目、结账履约方式、已提交订单、追踪回放、对话框和 toast 反馈。不要添加状态管理或路由库。
  - 将购物篮条目、地址选择、初始化状态、已提交订单和追踪时间戳持久化到 localStorage 中，使用一个由 BRAND 派生的带版本键。加载时根据 src/content.ts 验证存储的餐厅 ID、菜品 ID、数量和总计。
  - 仅在首次访问时，在示例购物篮中初始化一份 Charred lemon chicken，并将其标记为预填充演示。清空购物篮后，重新加载时必须保持为空；用户清空或提交后，绝不要重新填充。
  - 所有价格使用整数最小货币单位，并使用 Intl.NumberFormat 配合 [CURRENCY] 进行显示。更改货币仅更改格式；应显式重写价格值，而不是暗示换算。
  - 使用 Motion 处理路由变化、抽屉、对话框、购物篮更新和 toast。使用 SVG 路径几何加 requestAnimationFrame 计算配送员位置；文档隐藏时暂停计时器，且绝不要对订单事件使用 Math.random。
  - 通过列出的 Fontsource 包自托管 Bricolage Grotesque Variable 和 Inter Variable。本地打包 Lucide 图标，并仅将原始 [BRAND] 购物篮条目符号和街区地图绘制为内联 SVG。
  - 实现可访问的对话框和抽屉，具有可见的关闭按钮、Escape 和遮罩关闭、焦点捕获、焦点恢复，以及用于购物篮、地址、结账和追踪更新的礼貌状态区域。
  - 从首次渲染起就遵循 prefers-reduced-motion：禁用自动配送员移动和非必要过渡，保留手动 Next 演示步骤和 Replay 控件，并保持所有订购交互功能正常。

## 变量
- [BRAND] — 虚构的配送服务品牌（默认：“Pepper & Parcel”）。用于字标、文档标题、存储命名空间、结账、订单详情和页脚；更改品牌时，重写所有由品牌衍生的文案。
- [OCCASION] — 用餐场景（默认：“weeknight dinners”）。一个简短的小写场景，例如 weeknight dinners 或 weekend lunches；调整主视觉文案、空状态和结账标签，但不更改食物照片。
- [AUDIENCE] — 主要客户群体（默认：“busy neighbors who want a reliable meal without cooking”）。为该受众重写发现和服务文案，同时保持界面简洁。
- [DELIVERY_AREA] — 虚构的配送区域（默认：“Maple District”）。在地址栏、餐厅覆盖范围文案、结账和地图标签中使用虚构区域；切勿替换为真实品牌地点。
- [ACCENT] — 主操作强调色，以十六进制颜色表示（默认：“#B7472A”）。应用于主按钮、选中标签、活动分类和路线高亮，同时保持可访问的对比度。
- [CURRENCY] — 显示货币（默认：“USD”）。对每个价格使用 Intl.NumberFormat，并保持所有计算以整数最小货币单位进行。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/food-delivery-app（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 画布（Canvas）`#F6F1E8` — 温暖的羊皮纸色应用背景，模块之间留出宽敞的间隔。
- 表面（Surface）`#FFFDF8` — 餐厅卡片、菜单面板、地址对话框、结账区和吸底栏。
- 墨色（Ink）`#25291F` — 主文本、字标、图标、价格和高对比度描边。
- 柔和色（Muted）`#6E7165` — 元数据、次要文案、营业时间和非活动控件。
- 番茄色（Tomato）`#B7472A` — [ACCENT] 的默认值；主操作、活动筛选器和路线进度，配白色文字。
- 鼠尾草色（Sage）`#DDE6D4` — 成功面板、素食标签、已送达状态和安静的地图区域。
- 叶绿色（Leaf）`#365B3D` — 成功文本、可用性和鼠尾草色上的高对比度强调。
- 蜂蜜色（Honey）`#F1C75B` — 评分星星和小型高亮，始终与深色墨色文本搭配。
- 细线色（Hairline）`#E3DCCE` — 一像素边框、分隔线、输入框轮廓和进度轨道。

### 字体排印（Typography）
- 主视觉、页面标题、餐厅名称和编辑式美食时刻：Bricolage Grotesque Variable（OFL），字重 500/600/700/800
- 导航、菜单项、价格、表单、状态标签和正文：Inter Variable（OFL），字重 400/500/600/700

### 布局与动效（Layout & motion）
- 间距：使用 4px 基础单位。应用内容最大宽度 1280px，桌面端边距 28px，移动端边距 16px。桌面端页头 72px，移动端页头 64px，主要页面模块之间间隔 24px。餐厅卡片内边距 16px，菜单行 20px，结账面板 24px。交互目标至少保持 44×44px，吸底栏与内容之间保留 16px，移动端控件下方包含安全区内边距。
- 圆角：摄影主视觉和追踪地图使用 24px，餐厅卡片和结账卡片使用 18px，菜单图片和对话框使用 14px，输入框使用 10px，仅菜系标签、评分徽章和紧凑图标按钮使用全圆角。使用 1px 细线色边框和短而温暖的阴影，而非玻璃效果。
- 动效：菜系选择、餐厅悬停、添加按钮、数量步进器、地址变更和购物车徽章使用 180–240ms ease-out 过渡；先更新状态再播放任何效果。
- 动效：哈希路由切换时淡入并在 200ms 内向上稳定 8px。保持共享页头和底部导航不动画，并将焦点移至新页面标题。
- 动效：添加菜品时绘制一个小对勾，并让购物篮徽章脉冲一次。最低订单进度条宽度在 260ms 内动画过渡，同时其文本立即更新。
- 动效：吸底菜单分类标签使用 180ms 的活动指示器滑动，并以正确的页头偏移量平滑滚动；滚动监听切换活动标签时不移动页面。
- 动效：结账成功直接过渡到追踪，伴随一次 240ms 的订单卡片稳定。不要使用彩带、庆祝音效或虚假的支付处理延迟。
- 动效：对于进行中的订单，使用 getPointAtLength 让自行车标记沿 SVG 路线连续移动，并用相同的归一化值展示路线进度。状态变更和骑手位置均源自同一个 60 秒时钟。
- 动效：对话框和移动端抽屉在 220ms 内以透明度和 12px 稳定进入；提示条保留 1800ms。动画期间绝不阻塞购物篮或导航控件。
- 动效：在 prefers-reduced-motion 下，移除路线稳定、平滑滚动、徽章脉冲、进度插值和骑手自主运动。显示静态路线，仅允许手动切换追踪阶段。
- 图像：恰好使用六张本地 AI 生成的写实编辑式美食照片：一张宽幅邻里晚餐场景图，以及五张 4:3 的餐厅招牌菜。每张图像共享柔和的左上方窗户日光、温暖的奶油色石材表面、哑光象牙色陶瓷、微妙的番茄色和鼠尾草色点缀、自然的食物质感、柔和的接触阴影、50mm 镜头透视和细腻的 35mm 颗粒。保持盘子完全可读、份量诱人，且不含文字、包装标记、标志、水印、人物、手或可识别的品牌产品。每张餐厅照片仅用于该餐厅及其匹配的招牌菜；delivery-spread.webp 仅属于发现页。当变量变化时，不要将提供的菜品重命名为不相关的食物。首屏必须突出展示宽幅场景图，而非仅靠字体排印。

## 页面与区块
### 餐厅发现（`index.html`）
1. **共享应用外壳与地址栏** — 创建一个原创的 [BRAND] 文字标识，旁边是一个简单的内联 SVG 购物篮，由两条水平线和一条弯曲的提手组成。粘性页头包含首页、配送地址按钮、追踪订单，以及一个带有实时数量徽章的购物篮按钮。默认地址文案为 'Deliver to · 128 Willow Lane, [DELIVERY_AREA]'。点击它会打开一个地址对话框，内含三个虚构的预设选项：128 Willow Lane、42 Alder Street 和 17 Garden Mews，均位于 [DELIVERY_AREA]。选择其中一个会更新所有位置的共享地址并关闭对话框；不要请求地理位置或真实个人地址。包含一个小标签 'Local demo · simulated restaurants and orders'。在移动端，将文字标识和地址保留在页头中，并使用固定底部导航栏承载首页、餐厅、追踪和购物篮，且具有真实的路由目标。此处描述的共享外壳适用于每个路由。
   布局：桌面端页头是 1280px 容器内的 72px 三列行，文字标识居左，地址居中，操作居右。移动端使用 64px 双行页头，地址截断为一行且不覆盖文字标识。底部导航为 64px 加上安全区域内边距，页面底部留白 80px。对话框最大宽度为 460px，包含三个全宽地址选项。
   动效：地址选择和活动导航立即更新。对话框遵循共享过渡；购物篮徽章仅在添加商品后脉冲一次。
2. **首屏食物画面与搜索** — 使用 delivery-spread.webp 作为大型视觉锚点。眉题：'[DELIVERY_AREA] kitchen collective'。标题：'Good food, close to home.'。辅助文案：'Order [OCCASION] from independent kitchens, with every fee clear before you order.'。添加一个紧凑的搜索字段，标签为 'Search restaurants or dishes'，占位符为 'Try chicken, bowls, or flatbread'。输入时按餐厅名称、菜系和菜单项名称筛选餐厅卡片；显示清除按钮和结果计数。包含主要操作 'Browse restaurants'，它会移动焦点并滚动到餐厅网格。一个小型覆盖徽章显示 '5 neighborhood kitchens · sample availability'。不要添加应用商店按钮、促销倒计时或营销区块堆叠。
   布局：在 1440×900 下，将主视觉紧接页头下方放置在一个 12 列的 Surface 面板中，高度约 360px：五列用于文案/搜索，七列用于全高食物画面。仅在文案与图像相接处使用柔和的 Canvas 到透明的遮罩。低于 768px 时，将文案堆叠在 190px 图像裁剪上方，标题不超过 40px，并在空间允许时让菜系行在首屏内开始。
   动效：图像有一个 420ms 的微妙 1.02 缩放入场；无连续的 Ken Burns 效果。搜索结果和清除状态立即更新。
3. **菜系筛选** — 从 src/content.ts 渲染六个水平排列的标签：All、Grill、Seafood、Vegetarian、Flatbread 和 Dessert。初始选中 All。选择标签会筛选餐厅列表，并将标题 '5 kitchens for [OCCASION]' 更新为匹配的计数和菜系。搜索和菜系筛选可组合；空结果显示 'No kitchens match that search'，并提供可用的 Clear filters 操作。结果计数始终从数据派生，绝不硬编码。
   布局：仅在餐厅网格可见时，在共享页头下方使用粘性筛选行，具有实心 Canvas 背景和 Hairline 底部边框。桌面端标签居左，结果计数居右。移动端使用水平吸附行，间距 12px，无可见滚动条；标签绝不缩小到低于其内容宽度。
   动效：选中的标签填充 [ACCENT] 并显示白色文字，其指示器在 180ms 内滑动。筛选后的卡片使用短暂的透明度更新，无重新排序延迟。
4. **餐厅列表与精确示例数据** — 按此顺序创建五张餐厅卡片，每张包含匹配的本地图像、菜系、评分、评论数、配送预估、配送费、最低订单和 View menu 操作。Ember & Thyme：charred-chicken.webp，Grill，4.8，324 条示例评论，20–30 分钟，$1.49 费用，$20 最低。Nori & Ladle：sesame-salmon.webp，Seafood，4.7，186，25–35 分钟，$2.49，$22。Juniper Bowl：garden-grain-bowl.webp，Vegetarian，4.9，218，15–25 分钟，$0.99，$15。Copper Crust：truffle-flatbread.webp，Flatbread，4.8，441，20–30 分钟，$1.99，$18。Butter & Berry：citrus-pavlova.webp，Dessert，4.9，157，15–25 分钟，$0.99，$12。在网格上方一次性标注评分和可用性为示例数据。选择整张卡片或 View menu 会存储该餐厅并打开 #/restaurant；直接路由访问默认为 Ember & Thyme。
   布局：使用三列桌面网格，等高 Surface 卡片和 4:3 图像裁剪；仅当五张卡片视觉上保持平衡时，第一张卡片可跨两列。平板使用两列，移动端一列。将评分、时间和费用放在一个紧凑的元数据行中，使用 Honey 星形和 Lucide Clock/Bike 图标；将最低订单文案放在下方，不截断餐厅名称。
   动效：卡片悬停时最多上浮 3px，带有浅阴影。路由选择使用共享的 200ms 稳定过渡；减少动效时移除上浮。
5. **服务说明与页脚** — 在网格下方添加一个紧凑的 Sage 服务说明，标题为 'One basket, one kitchen'，解释每个示例订单包含来自所选餐厅的菜品、其自身的最低订单和其自身的配送费。添加 'Switching kitchens starts a new sample basket after confirmation'，并在非空购物篮将被替换时实现该确认。最后以 [BRAND]、'Restaurants, ratings, menus, fees, addresses, and orders are fictional sample content. No payment is collected.' 和可选的 [CREDIT] 链接结束。不要添加日期、社交计数、真实覆盖范围声明或不相关的营销区块。
   布局：桌面端使用一个水平说明，包含图标和文本，移动端堆叠。页脚是一个安静的两行区块，带有 Hairline 顶部边框，并为移动端导航留出足够的底部间隙。
   动效：无连续动效；单个 8px 显现为可选，且在减少动效下必须移除。

### 餐厅菜单与最低起送购物篮（`#/restaurant`）
1. **餐厅封面与信息** — 提供返回厨房（Back to kitchens）以及面包屑导航 首页 / 菜系 / 餐厅。展示所选餐厅对应的封面图、名称、菜系、示例评分与评价数、预计送达时间、配送费、最低起送价，以及“示例菜单 · 可订状态为本地演示数据”。默认的 Ember & Thyme 文案为“Live-fire plates, bright sides, and a little something sweet.”。包含一个在本地持久化的爱心“收藏厨房（Save kitchen）”开关，以及一个信息手风琴，内容为“厨房营业时间 · 11:30 AM–9:30 PM”、“本演示仅支持配送”和“过敏原信息仅为示意；这不是真实餐厅”。当购物篮中已有商品时切换餐厅，需要弹出对话框说明当前购物篮将被清空。
   布局：桌面端封面采用 5/7 网格，左侧文字、右侧 4:3 照片，置于 24px 圆角的 Surface 面板内。移动端将紧凑文字堆叠在 210px 图片上方。保持“返回”和“收藏”控件在封面上方可见，并保留共享外壳。
   动效：餐厅切换时封面图使用一次 180ms 交叉淡入；收藏与手风琴状态立即更新。
2. **吸顶分类标签与菜单记录** — 根据所选菜单生成吸顶分类标签，支持点击滚动和 IntersectionObserver 滚动监听。Ember & Thyme 包含 热门（Popular）、主菜（Mains）、配菜（Sides）、甜点（Dessert）和饮品（Drinks）。热门：炭烤柠檬鸡 $18，“Smoked paprika, charred lemon, pan juices”，配 charred-chicken.webp；拍黄瓜沙拉 $6，“Sesame, rice vinegar, toasted seeds”，纯文字。主菜：烟熏牛小排 $22，“Slow-roasted beef, onion jam, natural jus”；哈里萨花椰菜 $16，“Roasted cauliflower, chickpeas, herb tahini”。配菜：迷迭香土豆 $5，“Crisp potatoes, rosemary salt”；炭烤西兰苔 $7，“Garlic, chili, toasted almonds”。甜点：焦蜂蜜卡仕达 $7，“Silky custard, oat crumble”。饮品：血橙苏打 $4 和黄瓜气泡水 $3。仅在准确时添加“素食（Vegetarian）”或“含坚果（Contains nuts）”饮食标签。每一行都有描述、价格，以及一个带加号（Plus）的 44px“添加（Add）”按钮；添加会递增共享购物篮，并将控件变为数量步进器。其他餐厅各有四条菜单记录，其中一条配对应的招牌照片，三条为纯文字行：Nori & Ladle——芝麻三文鱼 $19、味噌蘑菇盖饭 $15、海藻黄瓜沙拉 $6、柚子苏打 $4；Juniper Bowl——田园谷物碗 $14、烤红薯碗 $13、腌卷心菜杯 $4、薄荷青柠饮 $4；Copper Crust——松露蘑菇薄饼 $16、烟熏番茄薄饼 $14、迷迭香海盐结 $6、罗勒柠檬水 $4；Butter & Berry——柑橘帕夫洛娃 $9、焦黄油短蛋糕 $8、香草莓果杯 $6、冰洋甘菊茶 $4。在 src/content.ts 中为每条记录提供原创的一句话描述和合适的分类；绝不重复使用其他餐厅的照片。
   布局：桌面端菜单为 8/4 网格，左侧菜单分组、右侧紧凑购物篮摘要；吸顶标签行位于 72px 共享页头下方。移动端标签保持在两行页头下方的横向吸附条中，菜单行仅在必要时将文字堆叠在控件上方。带照片的招牌行使用 152×120px 缩略图；纯文字行保留对齐的价格和一条窄的 Tomato 食材分隔线，而非虚假占位照片。分组标题有 32px 顶部间距和稳定的锚点偏移。
   动效：标签使用 Design 中的激活指示器和滚动监听行为。添加按钮短暂显示“已添加（Added）”，但不延迟共享状态更新；数量步进器就地替换它们。
3. **常驻最低起送栏** — 只要购物篮中有商品，就显示一个常驻栏，包含缩略图、餐厅名称、件数、当前商品小计，以及达到该餐厅最低起送价的进度。在全新的 Ember & Thyme 示例购物篮中显示“$18.00 subtotal · Add $2.00 to reach the $20.00 minimum”和 90% 填充的进度条。“查看购物篮（View basket）”操作在有商品时始终打开 #/checkout；低于最低起送价时它不会被禁用，而结账提交在此时仍保持禁用。达到或超过最低起送价时，将消息替换为 Leaf 色的“Minimum met · ready to review”并填满进度条。在访客更改任何数量之前，显示一个小标签“Prefilled sample basket”。清空购物篮需确认后清空所有行，并持久化空状态。
   布局：桌面端栏在 4 列购物篮摘要内吸底，并在摘要离开视野后固定于视口底部上方。移动端在底部导航上方使用一个固定的 Surface 栏，带安全区内边距、两行进度消息和全宽“查看购物篮”操作；它绝不能遮挡菜品“添加”按钮或追踪路线。
   动效：进度宽度遵循 Design；小计和剩余金额立即更新。栏的入场使用 200ms 内上移 12px，且不会在每次数量变化时重复。
### 购物篮与示例结账（`#/checkout`）
1. **购物篮行与履约** — 标题：“Review your order”。有商品时，显示餐厅名称、每道菜的缩略图（如有）、名称、单价、上限为 12 的数量步进器、行总计，以及带五秒“撤销（Undo）”提示的“移除（Remove）”。全新的示例购物篮包含一份炭烤柠檬鸡，并明确说明“This basket was prefilled for the demo”。购物篮为空时，显示代码绘制的购物篮、“Your basket is ready for something good”，以及可用的“浏览厨房（Browse kitchens）”操作。履约包括所选虚构地址（“更改（Change）”打开相同的预设对话框）、配送时间选项“As soon as possible”、“6:30 PM”、“7:00 PM”和“7:30 PM”作为示例时段，以及限制 120 字符的订单备注字段，占位符为“Optional note for this sample order”。不要索取姓名、邮箱、电话、卡信息、登录或真实地址。
   布局：桌面端使用 8/4 网格，左侧购物篮与履约面板、右侧摘要。移动端堆叠所有区块，并保持数量控件至少 44px。空状态居中，但保留共享导航。地址和时间选项使用大号可选行，而非密集下拉菜单。
   动效：数量和总计在视觉特效之前更新。移除在 160ms 内折叠，“撤销”恢复确切的行和数量；地址对话框遵循共享行为。
2. **透明总计与示例订单操作** — 显示商品小计、所选餐厅的配送费、固定的 $1.25 示例服务费和最终总计。不添加税费、小费、折扣、小额订单费或隐藏费用。所有计算使用整数最小货币单位和 [CURRENCY]。如果小计低于餐厅最低起送价，显示确切还差多少、禁用“下示例订单（Place sample order）”，并提供可用的“添加更多菜品（Add more dishes）”操作返回 #/restaurant。否则启用按钮。支付面板仅包含“Demo payment · no card required”和披露声明“This creates a local sample order. No payment or personal information is collected.”。下示例订单会将当前行、费用、地址、餐厅和总计快照为一个已提交订单，分配参考号 PP-1048 或其他确定性的品牌派生参考号，清空购物篮，在“已确认（Confirmed）”状态启动 60 秒追踪时钟，并导航到 #/tracking。
   布局：桌面端摘要在页头下方吸顶，每项费用单独一行，最终总计加粗。最低起送进度直接出现在全宽主操作上方。移动端摘要在履约之后，保持可读且无需横向滚动；任何固定结账按钮都不得遮挡内容。
   动效：最低起送资格和总计立即更新。成功下单使用 #/tracking 上共享的订单卡片落定效果，绝不使用虚假的处理中加载动画。

### 实时风格订单跟踪（`#/tracking`）
1. **订单状态时间线与回放** — 标题：'Your order, step by step'。始终显示 'Live demo · simulated courier and timing'。如果不存在已提交的订单，则创建一个内置的 Ember & Thyme 示例，包含一份 Charred lemon chicken 和一份 Smashed cucumber salad，小计 $24，配送费 $1.49，服务费 $1.25，总计 $26.74，参考号 PP-1048，并将其时钟初始化为 42 秒，以便直接访问者看到 On the way。新提交的订单则从 0 秒开始，并带有其实际的购物篮快照。定义五个阶段：Confirmed 0–9 秒，Preparing 10–24，Picked up 25–39，On the way 40–54，Delivered 55–60。文案分别为 'The kitchen has your sample order'、'Your dishes are being prepared'、'The courier has collected the order'、'Following the neighborhood route' 和 'Sample order delivered'。提供 Pause demo/Resume demo、Next demo step 和 Replay from start。Next demo step 移动到下一个阶段边界并暂停；Replay 仅重置跟踪，不重置餐厅或地址数据。Delivered 在 60 秒停止，且从不自动循环。持久化计时，以便重新加载不会重新启动活动订单。
   布局：桌面端将 5 步垂直时间线放在地图旁的 4 列 Surface 面板中，当前阶段展开，已完成阶段显示勾选。移动端在地图上方使用紧凑的水平五段进度行，当前阶段卡片位于其下方。播放控制在移动端为全宽，并保持键盘可访问。
   动效：一个确定性的 60 秒时钟驱动阶段和路线。暂停会冻结两者；Next 和 Replay 在一次状态变更中更新两者。减少动效时以暂停状态启动，并提供手动阶段，不自动推进。
2. **原创动画快递员地图** — 使用内联 SVG 绘制原创示意性街区地图，不使用地图瓦片或外部服务。使用 viewBox 0 0 820 380、Sage 公园街区、带 Hairline 道路的 Canvas 街区、一条浅蓝色小溪，以及三个源自 [DELIVERY_AREA] 的安静标签：'Garden Square'、'Willow Lane' 和 'Kitchen Row'。使用 Lucide ChefHat 和 Home 标记将所选餐厅放在左下角，将所选虚构地址放在右上角。将路线绘制为路径 'M 72 314 C 160 250 192 168 302 184 S 456 298 548 158 S 682 76 756 118'。保留 Hairline 路线底层，并显示 Tomato 进度描边。使用 getPointAtLength 移动一个小圆形 Bicycle 标记：在第 24 秒前固定在餐厅，在第 25–54 秒期间归一化路线进度从 0 到 1，在 Delivered 时固定在目的地。包含一个紧凑图例 'Illustrative map · not to scale'，以及在 On the way 期间显示当前示例 ETA '12–18 min'，在 Delivered 时变为 'Arrived'。不暗示任何真实地理位置、快递员身份、街道数据或实时交通。
   布局：桌面端地图填充一个 8 列 Surface 面板，24px 圆角，最小高度 430px。移动端地图高 300px，标签根据需要缩短，且端点不被裁剪。状态覆盖层位于左上角，不遮挡自行车或目的地；图例保持在左下角。
   动效：自行车位置和 Tomato 描边共享来自跟踪时钟的归一化路线进度。不要过度弹跳或旋转标记。减少动效时，将标记显示在当前阶段的静态位置，并仅通过手动控制更改。
3. **订单详情和后续操作** — 在跟踪器下方显示参考号、餐厅、虚构配送地址、所选时间、每个订单行和数量、小计、配送费、服务费和来自同一快照的最终总计。按钮为 Order again、Back to kitchens 和 Start a new sample order。Order again 将快照行恢复到购物篮并打开 #/checkout；Back to kitchens 打开 index.html；Start a new sample order 仅清除已提交的订单，并在保留现有地址的情况下打开发现页。包含 'Courier, timing, route, and order status are generated locally for this demo.'
   布局：使用 7/5 桌面网格，订单行在左，总计/操作在右，移动端堆叠。保持长参考号和地址换行而不溢出，操作高度至少 44px。
   动效：订单详情在 200ms 内一次性稳定。按钮立即生效，除非其标签明确说明，否则不重置跟踪。

## 资源

- 图片：将 https://media.vibefather.ai/assets/f1c18452-9e0a-4a41-966d-6f6bd8d0ee66/delivery-spread.webp 下载到 public/images/delivery-spread.webp。Alt：'A warm neighborhood dinner spread with colorful shared dishes on cream stone.' 仅用作发现页主视觉图及其响应式裁剪版本。在 ASSETS.md 中注明：由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/f1c18452-9e0a-4a41-966d-6f6bd8d0ee66/charred-chicken.webp 下载到 public/images/charred-chicken.webp。Alt：'Charred lemon chicken with herbs and pan juices on an ivory plate.' 仅用于 Ember & Thyme 的餐厅卡片、封面、Charred lemon chicken 菜单行、购物篮和订单快照。在 ASSETS.md 中注明：由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/f1c18452-9e0a-4a41-966d-6f6bd8d0ee66/sesame-salmon.webp 下载到 public/images/sesame-salmon.webp。Alt：'Sesame salmon with rice and green vegetables in a matte ceramic bowl.' 仅用于 Nori & Ladle 的餐厅卡片、封面、Sesame salmon 菜单行及其订单快照。在 ASSETS.md 中注明：由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/f1c18452-9e0a-4a41-966d-6f6bd8d0ee66/garden-grain-bowl.webp 下载到 public/images/garden-grain-bowl.webp。Alt：'Colorful grain bowl with roasted vegetables, greens, and herb dressing.' 仅用于 Juniper Bowl 的餐厅卡片、封面、Garden grain bowl 菜单行及其订单快照。在 ASSETS.md 中注明：由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/f1c18452-9e0a-4a41-966d-6f6bd8d0ee66/truffle-flatbread.webp 下载到 public/images/truffle-flatbread.webp。Alt：'Mushroom flatbread with melted cheese and herbs on a cream stone table.' 仅用于 Copper Crust 的餐厅卡片、封面、Truffle mushroom flatbread 菜单行及其订单快照。在 ASSETS.md 中注明：由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/f1c18452-9e0a-4a41-966d-6f6bd8d0ee66/citrus-pavlova.webp 下载到 public/images/citrus-pavlova.webp。Alt：'Small citrus pavlova with cream and bright fruit on an ivory dessert plate.' 仅用于 Butter & Berry 的餐厅卡片、封面、Citrus pavlova 菜单行及其订单快照。在 ASSETS.md 中注明：由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图标：使用 lucide-react 实现 MapPin、ChevronDown、Search、X、Home、Bike、Clock、Star、Plus、Minus、ShoppingBasket、ArrowLeft、Heart、Check、Trash2、RotateCcw、Pause、Play、SkipForward、ChefHat、ReceiptText 和 Navigation。图标需本地打包，并在 ASSETS.md 中记录 Lucide 的 ISC 许可证。使用内联 SVG/CSS 绘制原创的 basket-line 字标和示意性街区地图；不要模仿任何外卖平台的标志。
- 字体：通过 @fontsource-variable/bricolage-grotesque 自托管 Bricolage Grotesque Variable，通过 @fontsource-variable/inter 自托管 Inter Variable。仅导入使用到的可变字体文件，在 ASSETS.md 中记录两个 OFL-1.1 许可证，并且不得发起任何 Google Fonts 或其他 CDN 请求。

## 禁止事项
- 不要添加后端、服务器代码、API 路由、数据库、身份验证、远程表单、分析、第三方 API、真实支付、地理位置、地图、餐厅或外卖员集成。所有餐厅、可用性、费用、地址、订单和追踪行为均为本地示例状态。
- 不要使用任何现有外卖平台的名称、标志、吉祥物、口号、标志性插图、精确配色方案、专有图标集、自定义字体、可识别的界面构图、商业外观或源代码。
- 不要复制真实餐厅的身份、菜单、菜品描述、评分、评论数、价格、摄影、宣传文案、地址或订单记录；所有提供的商家和内容必须保持虚构和原创。
- 不要使用专有地图瓦片、真实路线数据、第三方路线图稿、品牌外卖员插图、可识别包装或品牌标识。街区地图必须是指定的原创内联 SVG，自行车必须是通用的 Lucide 图标。
- 不要在生成的图像中使用真实人物肖像、名人图像、可识别身份的外卖员、顾客肖像、手部、动漫或游戏角色，或任何标志。六张食物照片仅包含食物和餐桌布置。
- 不要将示例评分、评论数、配送预估、费用、库存、地址、预计送达时间、订单参考号或外卖员状态呈现为真实信息。在发现页、菜单页、结账页和追踪页保留可见的演示和模拟披露。
- 不要请求或存储真实个人信息、账户凭据、电子邮件、电话、银行卡详情或自由填写的家庭地址。地址选择仅使用三个虚构预设，并保留在 localStorage 中。
- 不要允许结账低于所选餐厅的最低消费、每道菜数量超过 12、未经确认混合不同餐厅的购物篮、隐藏任何费用、添加税费/小费/折扣，或根据变更后的菜单数据而非其快照重新计算已提交的订单。
- 不要在重新加载时重新填充已清空的购物篮、在重新加载时重启活跃的追踪时钟、自动循环已送达的订单，或在“重播”时清除新提交的订单。
- 不要使用随机订单事件、虚假网络活动、虚假支付处理延迟、自动播放音频、倒计时压力或收集支付的结账流程。
- 不要热链接资源或使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务、CC BY-NC 或 CC BY-SA 媒体。将列出的六张图片下载到其确切的本地路径，并在 ASSETS.md 中列出每个第三方文件。
- 不要添加除列出的六张食物照片之外的图片，或将菜品照片重命名为不相关的食物。仅在指定上下文中使用每张餐厅图片，并保持所有运行时图片路径为相对路径。
- 不要从 CDN 加载字体、脚本、图标、样式或地图。仅使用固定技术栈和允许的许可证，两种字体均通过 Fontsource 自托管，且不使用受限组件源码。
- 不要生成 source map、将 src/ 复制到 dist/、超过 20 MB、使用绝对根资源 URL 或需要服务器回退。生产构建必须能在嵌套静态路径下通过一次 npm run build 正常工作。
- 不要添加更多 HTML 入口、裸目录链接、路由库或依赖服务器的 URL。保留指定的 hash 路由；直接访问 #/restaurant 显示 Ember & Thyme，直接访问 #/checkout 渲染已初始化或持久化的购物篮状态，直接访问 #/tracking 渲染内置示例订单。
- 不要在 src/content.ts 之外硬编码 BRAND、OCCASION、AUDIENCE、DELIVERY_AREA、ACCENT 或 CURRENCY，不要留下可见的变量标记，不要在值变化时破坏派生标签和存储命名空间。
- 不要引入水平溢出、被裁剪的粘性栏、不可访问的纯图标控件、过小的触摸目标、键盘陷阱或控制台错误。在全部四个路由、菜单滚动监听、地址选择、购物篮计算、最低消费强制执行、结账和追踪控件中验证 1440×900 和 390×844。
- 不要忽略 prefers-reduced-motion。自主追踪和非必要动效必须停止或暂停启动，同时手动订单、导航和追踪阶段控件继续工作。
- 不要添加 SEO 元数据、Open Graph 标签、JSON-LD、站点地图、可见日期或关键词堆砌内容；一个普通的 [BRAND] 文档标题和原创 favicon 就足够了。
- 除可选的渲染器提供的 [CREDIT] 页脚链接外，不要在演示中的任何地方提及 VibeFather。

---
— Prompt by VibeFather · https://vibefather.ai/t/food-delivery-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
