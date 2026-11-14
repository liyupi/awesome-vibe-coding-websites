> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 数字下载商店

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一个精致的数字下载商店，向 [AUDIENCE] 销售 [PRODUCT_FOCUS]。使用原创的代码绘制产品预览、详细的许可说明、持久购物车、折扣捆绑包，以及静态的即时下载确认页。

- 受众：销售数字资源的独立创作者和小型工作室，以及希望查看产品、了解其许可并无障碍获取文件的购物者。
- 目标：通过丰富的预览帮助访客比较产品、选择合适的许可、组建订单，并清楚了解结账后会发生什么，同时展示完整的静态商务流程。
- 基调：温暖、精确、富有创意自信且透明。使用简洁的产品文案和实用细节，不施加压力策略、不制造虚假稀缺、不夸大宣传。

## 技术栈
- 框架：Vite 6 + React 19 + TypeScript 5
- 样式：Tailwind CSS 4
- 库：react（MIT）、react-dom（MIT）、lucide-react（ISC）、@fontsource-variable/fraunces（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 React 19 和 TypeScript 5 搭建 Vite 6 脚手架；在 vite.config 中设置 base: './' 和 build.sourcemap: false，并且只将生产站点输出到 dist/。不要使用其他应用框架或路由器。
  - 通过 @tailwindcss/vite 使用 Tailwind CSS 4。在 src/index.css 中定义颜色、字体、间距、阴影、圆角和关键帧令牌，并用 CSS 制作一个克制的纸张纹理背景。
  - 将四个变量值、每个界面字符串、六条产品记录、分类定义、价格、捆绑内容、FAQ 和预览图配置放入 src/content.ts。当变量值变化时，重写目录、分类、产品详情、FAQ、预览标签、下载名称以及所有默认特定文案，确保旧店铺的内容不残留。
  - 使用一个小型 React context 管理筛选器、选中产品、逐项许可证、购物车状态、抽屉可见性、toast 和已完成订单。将购物车和最新订单存储在 localStorage 中，防止同一产品和许可证的重复副本，并从内容数据推导每个价格和总计。
  - 在不依赖路由库的情况下实现哈希路由 #/、#/product 和 #/confirmation。产品卡片在导航前设置选中产品；直接加载产品页时显示目录中的第一个项目，直接加载确认页时显示包含该项目及个人许可证的示例订单。
  - 从各自的 Fontsource 包中本地导入 Fraunces Variable、Inter Variable 和 IBM Plex Mono。使用 lucide-react 作为界面图标，并为每个产品视觉使用原创的内联 SVG/CSS 组件；不要添加动画库。
  - 使用三个偏移文件页和强调色，创建一个微小的原创 favicon 作为本地 SVG。使用包含 [BRAND] 的纯文档标题，不添加额外的 SEO 元数据。

## 变量
- [BRAND] — 商店品牌（默认：“Nooktone Supply”）。为独立数字商品卖家虚构的名称。
- [PRODUCT_FOCUS] — 产品重点（默认：“design templates, photo presets, and display fonts”）。一个小写短语，命名三种相关的可下载产品类型。
- [AUDIENCE] — 主要受众（默认：“independent designers and creative studios”）。该商店服务的人群，以小写短语书写。
- [BRAND_LINE] — 品牌标语（默认：“Useful files for beautiful work.”）。一句简短的原创语句，体现卖家的观点。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/digital-download-shop（默认：是；删除此行即可移除）

“页面与区块”下的文案是为默认值撰写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 画布（Canvas）`#F3EFE6` — 暖色羊皮纸页面背景，带有非常微弱的 CSS 纤维纹理
- 表面（Surface）`#FFFCF6` — 卡片、抽屉、输入框和凸起的产品预览面板
- 墨色（Ink）`#20221E` — 主文本、深色套装横幅和主按钮背景
- 柔和色（Muted）`#68675F` — 次要文案、元数据和非活动控件
- 琥珀色（Amber）`#F2A93B` — 强调徽章、选中状态和小型图形细节；始终与 Ink 文本搭配
- 鼠尾草绿（Sage）`#B9D8C0` — 成功状态和选中的产品预览面板
- 淡紫色（Lilac）`#C9C3E8` — 备用预览背景和装饰性产品图案
- 线条色（Line）`#D6D0C4` — 一像素边框、分隔线和低调的网格线

### 字体排印（Typography）
- 用于主视觉、区块标题、产品名称和大号价格的编辑式展示字体：Fraunces Variable（OFL），字重 600/700
- 界面和正文文案：Inter Variable（OFL），字重 400/500/600/700
- 分类、文件格式、订单标签和紧凑的实用元数据：IBM Plex Mono（OFL），字重 500

### 布局与动效（Layout & motion）
- 间距：使用 4px 基础网格。内容最大宽度为 1280px，桌面端边距为 48px，移动端边距为 20px。页头高度为 76px，位于 34px 公告栏下方。区块的桌面端垂直内边距为 104px，移动端为 68px；产品网格使用 24px 间隙。主视觉 H1 为 clamp(48px, 5.4vw, 76px)，行高 0.96；区块标题桌面端为 42px，移动端为 32px；正文为 16px，行高 1.65。
- 圆角：产品卡片和主要面板使用 22px 圆角，预览图案和输入框使用 16px，小型行项目使用 12px，标签和紧凑按钮使用全圆角胶囊形。使用清晰的 1px Line 边框和宽大、低透明度的橄榄色阴影，而非玻璃效果。
- 动效：初始加载时，主视觉文案在 420ms 内淡入并上移 14px，然后三个预览层以 80ms 的间隔依次进入，并带有小幅旋转，最终稳定到各自位置。
- 动效：主要区块在视口交叉率达到 12% 时显示一次，上移 16px，透明度过渡 380ms；当 IntersectionObserver 不可用时，绝不隐藏内容。
- 动效：悬停时产品卡片上移 4px，其预览图案在 180ms 内缩放至 1.015；筛选变化时网格交叉淡入淡出 160ms，不改变卡片尺寸。
- 动效：购物车抽屉在 260ms 内滑入，同时其背景淡入；锁定焦点，按 Escape 关闭，将焦点恢复到购物车按钮，并阻止背景滚动。
- 动效：哈希路由变化时滚动到顶部，并在 160ms 内淡入新的主内容。在 prefers-reduced-motion 下，移除显示动画、旋转、平滑滚动和变换，同时保持每个状态变化即时且可见。
- 图像：所有视觉元素均为原创内联 SVG 和 CSS，而非位图照片。使用纸色纸张、清晰的几何网格、字体样本字母、渐变样本、微型界面模型、微妙的 1px 轮廓和柔和的偏移阴影，构建一个连贯的触感产品封面系列。主视觉是由三个精致产品预览组成的分层构图，每个目录卡片都有来自内容数据的自身确定性预览配置。不要使用外部图片、可识别的产品、品牌标识、人物或生成图像资产。

## 页面与区块
### 店面（`index.html`）
1. **公告、页眉和导航** — 公告内容为 'Free updates on every purchase · Personal and commercial licenses'。品牌标识组合将原始的三页 SVG 标记与 [BRAND] 结合。导航链接为 Shop（#products）、Bundle（#bundle）和 License guide（#licenses）。购物车按钮显示当前商品数量并打开全局抽屉。在移动端，保持 Shop 和 Cart 可见，并将 Bundle 和 License guide 放入紧凑的无障碍菜单中。
   布局：一个 34px 的 Ink 公告栏位于一个粘性的 76px 页眉上方，页眉具有半透明的 Canvas 背景、背景模糊和底部 Line 边框。内部内容使用共享的 1280px 容器。标识组合在左侧，导航居中，购物车在右侧；移动端菜单在页眉下方打开，不覆盖主视觉区域。
   动效：粘性页眉在滚动 24px 后获得稍强的底部边框；移动端菜单和购物车数量以 160ms 的短过渡变化。
2. **分层店面主视觉** — 对于默认值，显示眉题 'SMALL-BATCH DIGITAL GOODS'、H1 'Make something good before lunch.' 和支持句 'Shop design templates, photo presets, and display fonts from Nooktone Supply. Preview every detail, choose your license, and leave with your files.'。将 [BRAND_LINE] 放在文案下方的小琥珀色纸标签上。CTA 为 'Shop all resources' 和 'Build a bundle'。一个安静的信任行写着 'Instant access · Free updates · Clear licenses'。视觉锚点由前方的 Sunroom Social Kit 界面页、右上方后方的 Pollen Display 样本和左下方后方的 Golden Hour Presets 色板条组成，并带有一个小的 '6 products / one shelf' 徽章。
   布局：在桌面端，使用两栏主视觉，44% 文案和 56%  artwork，列间距 64px，最小高度 610px。左侧文案垂直居中。右侧 artwork 填充一个 620×500px 的舞台：主要的 420×330px 预览位于中心，旋转 5deg，两个次要页面重叠约 25%，每个都有 1px Ink 边框和柔和的偏移阴影。在 390px 时，将文案堆叠在 340px 高的 artwork 舞台上方，按比例缩放所有图层，并保持 CTA 全宽且无水平溢出。
   动效：使用指定的交错入场。当指针悬停在 artwork 上时，前页抬起 6px，次要页面移动不超过 4px；不要添加连续的浮动动画。
3. **产品目录** — 标题：'Fresh from the workbench'。介绍：'Six useful starting points, made to be opened, edited, and put to work.'。包含分类标签 All、Templates、Presets 和 Fonts，一个标记为 'Search the shelf' 的搜索字段，以及一个排序选择器，包含 Featured、Price: low to high 和 Price: high to low。六个默认产品为：Sunroom Social Kit — Templates — $24 — '42 warm, modular social layouts'，带有微型编辑屏幕；Golden Hour Presets — Presets — $18 — '12 amber-forward color recipes'，带有三个抽象的对比色板；Pollen Display — Fonts — $32 — 'A high-contrast serif in 3 weights'，带有原始 Aa 样本；Studio Deck System — Templates — $28 — '36 composed slides for client pitches'，带有幻灯片网格预览；Soft Focus Presets — Presets — $16 — '10 muted looks with gentle contrast'，带有色调渐变条；Marker Mono — Fonts — $22 — 'A compact mono in 2 weights'，带有原始字符网格样本。每张卡片显示分类、预览、标题、一行详情、包含格式和价格。'Preview' 打开 #/product；加号按钮添加个人许可证并显示 toast。空搜索结果说 'No resources match that search'，并带有一个 Clear filters 按钮。
   布局：从分割的标题行开始，然后是换行的筛选工具栏，然后是等高的 Surface 卡片的三列桌面网格。每个预览具有固定的 4:3 比例，后跟 22px 的文本内边距。在平板使用两列，在移动端使用一列。保持价格和操作在卡片底部对齐；不要截断产品名称。
   动效：仅对不透明度和小的悬停抬升进行动画。立即更新可见结果计数，并通过礼貌的实时区域宣布筛选变化。
4. **Whole Shelf 捆绑包** — 眉题：'THE WHOLE SHELF'。H2：'One cart. Six resources. Every update.'。文案：'Get the complete default collection for $86 instead of $140. Personal and commercial options use the same clear terms as individual products.'。在两列清单中显示所有六个产品名称、'Save $54' 和一个按钮 'Add the bundle — $86'。捆绑包是一个独立的购物车项目，个人版定价 $86，商业版定价 $172；添加它不会重复六个单独项目。右侧包含一个代码绘制的六张微型封面扇形，使用与目录相同的预览配置。
   布局：一个全宽的 Ink 面板，桌面内边距 56px，位于标准容器内。使用 52%/48% 的两栏构图，Paper 文本和 Amber 节省徽章；在移动端，将文本堆叠在 300px 高的封面扇形上方。面板保持矩形，22px 圆角，没有人为的倒计时或库存计数器。
   动效：进入视口时，封面从 4px 堆叠偏移扇形展开到最终旋转，历时 420ms；捆绑包按钮有简单的 160ms 颜色和位移响应。
5. **许可证指南** — 标题：'Pay for the work, not the fine print.'。介绍：'Start personal, or choose commercial when the work is for clients or revenue.'。个人卡片：列出基础价格、一人、仅个人项目、免费更新、无客户工作。商业卡片：恰好为基础价格的 2×、一个团队最多五人、允许商业和客户最终产品、免费更新。两者均声明：'Do not resell, redistribute, or sublicense the source files.'。包含一个小链接 'Read common license questions' 指向 #faq。
   布局：使用 38%/62% 分割，标题和介绍在左侧，两张相邻的许可证卡片在右侧。商业版有 Amber 顶部边框和 'For client work' 标签，而不是强制预选。在移动端，将所有三个块堆叠，间距 16px。
   动效：以 70ms 交错显示两张卡片；此说明性部分中没有切换开关。
6. **制作者注记和实用 FAQ** — 制作者条幅写着 'Made slowly. Updated when it matters.' 和 'Every resource is checked in a real layout before it joins the shelf.'。以 Fraunces 字体添加 [BRAND] 名称作为文本签名，没有肖像或伪造的手写图像。FAQ 项目：'How do files arrive?' — 'The confirmation screen appears immediately after the demo order and lists every purchased item and its license.'；'Are updates included?' — 'Yes. Every purchase includes later refinements to that resource.'；'Can I use a personal license for client work?' — 'No. Choose commercial for client work, paid campaigns, or products you sell.'；'What formats are included?' — 'Each product page lists its exact package, including editable vector files, portable previews, or desktop and web font formats.'；'Can I share the source files?' — 'No. Commercial licenses cover one team of up to five people, but source files may not be redistributed.'。
   布局：将制作者条幅放在带边框的 Surface 面板中，具有宽松的水平内边距。在其下方，FAQ 使用 34%/66% 分割：'Useful answers' 标题在左，五行手风琴在右。第一行默认打开；一次只打开一行。手风琴内容从不依赖动画来变得可读。
   动效：手风琴高度和箭头旋转使用 180ms 过渡，在减少动态效果下禁用。
7. **页脚** — 显示品牌标识组合、[PRODUCT_FOCUS] 和行 'Made for [AUDIENCE]'。将 Shop、Bundle、License guide 和 FAQ 链接到其现有的 index 锚点。以 'Digital goods, thoughtfully packed.' 和可选的 [CREDIT] 链接结束。不要显示版权日期、新闻通讯表单、社交图标或外部市场链接。
   布局：标准容器内带顶部边框的页脚使用 45px 桌面顶部内边距、两栏品牌/导航行和一条安静的小底部行。在移动端将导航堆叠在品牌下方。
   动效：除共享的区块显示外，没有入场动画。
8. **全局购物车抽屉和 toast** — 购物车抽屉列出每个选定的产品或捆绑包，包含其缩略图、名称、许可证、价格、个人/商业分段控件和 Remove。更改许可证立即在基础价格和 2× 定价之间切换。将小计和总计显示为相同值，并注明 'No taxes or payment are collected in this static demo.'。主按钮为 'Complete demo order'；它将购物车快照为最新订单，清空购物车，关闭抽屉，并打开 #/confirmation。空状态：'Your shelf is empty' 和一个 'Browse resources' 按钮。Toast 确认 Add、Remove、Already in cart 和 License updated 操作。
   布局：桌面端使用固定右侧抽屉，宽 420px、全视口高度；移动端全宽并带 20px 内边距。行项目独立滚动，而总计和结账按钮固定在底部。包含可见的关闭按钮、对话框标签、焦点陷阱、Escape 处理和深色半透明背景。
   动效：使用指定的 260ms 抽屉过渡，并在左下角附近出现小幅 toast 上浮；toast 停留 3 秒，且绝不遮挡购物车结账按钮。

### 产品详情（`#/product`）
1. **产品预览与许可购买面板** — 使用在店铺前台选中的产品，直接打开时则使用 Sunroom Social Kit。面包屑：'Shop / [product name]'。对于默认的第一个产品，显示 'TEMPLATES'、'Sunroom Social Kit'、'$24'、'42 warm, modular social layouts'，以及描述 'A flexible set of editorial posts, announcements, and carousels with room for real words. Includes 42 vector layouts, portable previews, and a concise style guide.'。元数据为 '42 layouts · SVG, PNG, PDF · Free updates'。预览标签为 Overview、Details 和 Contents；每个标签都会改变原始 SVG 构图，而不是加载图片。许可分段控件提供 Personal '$24' 和 Commercial '$48'，所选条款显示在一个简短面板中。主按钮在基础价格下为 'Add to cart — $24'，并更新为所选许可价格。辅助行：'Instant access · Lifetime updates · Clear license'。
   布局：在共享页头下方，使用 58%/42% 双栏工作区，间距 48px。左侧是大型 4:3 预览，下方有三个紧凑标签；右侧是粘性购买面板，间距 24px，背景为 Surface。其他每个目录产品都复用此结构，使用各自的数据和预览。移动端将预览放在最前，购买面板改为静态，许可和购物车按钮全宽。
   动效：预览标签切换以 160ms 交叉淡入淡出。选择许可时，价格数字垂直滑动 6px 并短暂淡入，同时布局高度保持不变。
2. **套餐详情手风琴** — 标题：'Know exactly what you are getting.'。三个手风琴为 What’s inside、Formats and compatibility 和 License summary。对于 Sunroom Social Kit，第一个列出 12 个公告布局、18 个轮播布局、12 个故事布局和一份 6 页样式指南；第二个列出可编辑 SVG、即用 PNG 和适合打印的 PDF；第三个重复当前选择的个人或商业条款。其他产品使用内容数据中的具体对应项，绝不复制默认详情。
   布局：使用 32%/68% 分栏，标题在左，右侧为三行带边框的手风琴。第一个默认展开。下方添加一条窄的 Sage 安心条，文字为 'One resource, one clear license, updates included.'。
   动效：使用与店铺前台 FAQ 相同的无障碍手风琴行为。
3. **相关产品** — 标题：'Keep the shelf consistent'。显示目录中的另外三个产品，优先同一分类，然后选择下一个可用项目。复用完全相同的产品卡片组件和 Preview 行为；不要显示当前选中的产品。
   布局：桌面端三列网格，移动端在 64px 区块间距下方为单列网格。共享页脚紧随此区块。
   动效：使用标准区块显现和卡片悬停行为。

### 即时下载确认（`#/confirmation`）
1. **订单成功与示例下载** — 显示 Sage 对勾图标、眉题 'DEMO ORDER COMPLETE'、H1 'Your files are ready.'，以及 'No payment was collected. This confirmation previews the instant-delivery experience.'。使用最近完成的订单，直接打开时则使用示例 Sunroom Social Kit 个人订单。将通用订单标记为 'Order #1048'。列出每个项目及其原始预览缩略图、产品名称、所选许可、格式和 'Download sample' 按钮。每个按钮必须生成并下载该项目预览的真实本地 SVG 版本，并提供纯文本许可收据；不要假装交付 ZIP 或商业产品文件。订单摘要显示每个价格和正确的总计。操作为 'Back to shop' 和 'Download license receipt'。
   布局：在共享页头下方居中放置一个 760px 宽的确认面板，桌面端内边距为宽松的 40px，移动端为 22px。下载行堆叠排列，缩略图在左、元数据居中、按钮在右；移动端将每行变为紧凑卡片，按钮全宽。将订单摘要放在项目下方单独的带边框区块中。共享页脚随后出现，并增加顶部间距。
   动效：对勾以 360ms SVG 描边动画绘制一次，面板淡入；在减少动态效果下跳过描边动画。每次示例下载开始后显示本地 toast。
2. **下载帮助** — 标题：'Downloads not starting?'。文案：'Check that your browser allows downloads, then try the sample again. Your order and license choices remain available on this device.'。添加三条简短提醒：示例在本地生成、不允许再分发源文件、商业条款覆盖一个最多五人的团队。
   布局：确认面板下方放置一行安静的三列内容，每条提醒之间用 Line 边框分隔。移动端堆叠为一列。不要添加联系表单、电子邮件链接、聊天组件或外部支持服务。
   动效：无额外动效。

## 资产
- 图像：无需任何栅格图像或生成图像。将所有主视觉图、产品缩略图、字体样张、预设色板、套装封面和下载缩略图创建为原创的内联 SVG 和 CSS 组件，并在 src/content.ts 中配置。将这些组件保留在源项目中；没有需要下载的图像 URL，也没有第三方图像署名。
- 图标：使用 lucide-react（ISC）作为界面图标，例如 ShoppingBag、Plus、X、ArrowRight、Download、Check、ChevronDown、Search 和 Menu。将它们渲染为 18–22px 的内联 SVG，并在仅图标按钮上提供无障碍标签。从头创建简单的三页品牌标志和 favicon，并在 ASSETS.md 中记录 Lucide 的包、来源、作者和 ISC 许可证。
- 字体：通过 @fontsource-variable/fraunces 和 @fontsource-variable/inter 自托管 Fraunces Variable 和 Inter Variable，并通过 @fontsource/ibm-plex-mono 自托管 IBM Plex Mono。仅使用列出的 OFL 字重，在生产构建中将字体文件保留在本地，并在 ASSETS.md 中列出每个包、来源、作者和 OFL 许可证。

## 不要做
- 不要添加后端、服务器代码、API 路由、数据库、身份验证、支付处理、邮件发送、第三方 API、分析统计，或任何会提交到某处的表单。购物车和订单状态仅限本地，结账明确为静态演示。
- 不要声称已扣款或已交付商业产品文件。仅从浏览器数据生成真实的本地 SVG 示例和纯文本许可证收据；绝不使用虚假 ZIP 链接或失效的下载按钮。
- 不要使用现有市场或卖家名称、徽标、口号、精确品牌配色、参考代码、参考文案或参考预览构图。
- 不要使用真实产品名称、现有模板设计、预设产品、商业字体产品或复制的预览图片。每个卖家、产品、套餐、价格、预览和每一行文案都必须针对当前变量值原创。
- 不要使用参考特有的吉祥物、标志性插画、自定义字体、独特图标、真实人物肖像、动漫或游戏角色，或任何现有品牌徽标。
- 不要加载外部或热链接图片、图库照片、占位图服务、CDN 脚本、CDN 样式或字体服务 URL。所有视觉元素、图标、字体和脚本都必须在本地提供。
- 不要使用商业字体或未授权及受许可证限制的组件源码。仅使用指定的包，并从零实现每个视觉和交互。
- 不要在渲染文案中暴露 [BRAND] 等变量占位符，并且当 PRODUCT_FOCUS 变化时，不要遗留设计商店产品或语言。将所有文案和目录数据保留在 src/content.ts 中。
- 不要添加 SEO 元数据、Open Graph 标签、JSON-LD、站点地图指令、关键词堆砌标题或标题层级规则。仅使用普通的 [BRAND] 文档标题和本地 favicon。
- 不要链接到裸目录或引入依赖服务器的路由。保留三个声明的哈希路由、可用的区块锚点，以及产品和确认视图的直接加载回退。
- 不要生成 source map、将 src/ 复制到 dist/、超过 20 MB，或要求超过 npm run build 的操作。保留 Vite base './'，使所有生产资源 URL 都是相对的。
- 不要显示日期、虚假评分、编造的销量、倒计时、库存计数器、新闻订阅表单或社会证明徽章。保持店面信息丰富，不制造人为紧迫感。
- 不要在 1440×900 和 390×844 下出现预览被裁剪、水平溢出、不可访问的覆盖层、键盘陷阱、空的直接路由或控制台错误。尊重 prefers-reduced-motion，并确保所有内容在无动画时也可读。

---
— Prompt by VibeFather · https://vibefather.ai/t/digital-download-shop · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
