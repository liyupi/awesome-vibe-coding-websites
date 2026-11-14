> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 餐厅二维码菜单页面

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个移动优先的单页二维码菜单，采用温暖的小酒馆风格：招牌菜俯拍主视觉区、粘性滚动监听分类标签、可淡化不匹配菜品的过敏原筛选标签、图文菜单行、带数量步进器的底部抽屉式菜品详情、本地存储并呈现给服务员的点单统计，以及一个带“展示此屏幕”确认状态的呼叫服务员按钮。

- 受众：小酒馆、咖啡馆、葡萄酒吧以及任何用此替代丑陋 PDF 的餐桌服务餐厅，还有为其构建的工作室。
- 目标：让客人单手舒适地阅读菜单，围绕过敏进行筛选，建立他们想要的点单统计，并向服务员展示一个干净的屏幕——不暗示任何面向员工的技术。
- 语气：温暖、平实、略带家常感——是黑板的嗓音，而非应用的嗓音；简短的菜品行，诚实的示例文案注释。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/lora（OFL）、@fontsource/asap（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 使用 npm create vite@latest restaurant-qr-menu-page -- --template react-ts 搭建脚手架；将 tailwindcss@3.4、postcss 和 autoprefixer 添加为开发依赖；将 motion、lucide-react、@fontsource/lora 和 @fontsource/asap 添加为依赖。
  - vite.config.ts：base './'，build.sourcemap false，构建输出 dist/。
  - tailwind.config.js：扩展颜色 paper #FAF3E7、paperdeep #F1E6D2、linen #FFFDF8、benchline #E3D5BC、walnut #4A3628、walnutsoft #7A6753、terracotta #C05B3C、terracottadeep #A34830；fontFamily display 'Lora' 和 sans 'Asap'；radius：chip 999px、card 14px、photo 12px、sheet 20px。
  - postcss.config.js：tailwindcss + autoprefixer。
  - 移动优先列布局：应用根元素是 max-w-[480px] mx-auto 列；低于 480px 时填满视口，在 md 及以上时在 paperdeep 页面底色上获得 1px benchline 侧边框——布局永远不会变成多列。
  - src/components/BottomSheet.tsx：可复用面板——固定底部、linen 底色、20px 顶部圆角、1px benchline 顶部边框、背景遮罩 rgba(74,54,40,0.35)；以 translateY 100%→0 在 320ms ease-out 内打开；点击背景遮罩和其 X 关闭；打开时锁定 body 滚动。
  - src/hooks/useScrollSpy.ts：对五个分类区块使用 IntersectionObserver；与最顶部可见分类匹配的标签激活，标签行自动水平滚动以保持活动 chip 可见。
  - src/hooks/useOrder.ts 中的订单状态：{dishId: qty} 持久化到 localStorage 键 'qrOrder'；暴露 add/remove/step 以及从菜品列表派生的 count/total。
  - src/lib/motion.ts：共享变体——reveal（opacity 0→1，y 14→0，500ms ease-out，60ms 交错，whileInView once）、pop（scale 0.9→1，180ms，用于计数和添加按钮反馈）——使用 useReducedMotion 时使用普通 150ms 透明度淡入和面板原地淡入。
  - 将每个面向用户的字符串和整个菜单（品牌、桌号标签、服务说明、五个分类、每道菜 {id, name, one-line description, price, allergens, photo?}、页脚地址和营业时间）保留在 src/content.ts 中；各区块从中读取，以便值在一处替换。
  - index.html：<title>[BRAND] — Menu</title> 加上代码绘制的 favicon.svg（paper 底色上的 terracotta 圆形，像盘子）；无其他 meta 工作。

## 变量
- [BRAND] — 餐厅名称（默认："Rue Noisette"）。为字标、页面标题和页脚虚构的小酒馆名称。
- [TABLE] — 桌号标签（默认："Table 7"）。字标下方的小标签，标明此二维码所在的位置（例如 'Table 7'、'Stool 12'）——来自客人扫描的二维码。
- [SERVICE] — 服务说明（默认："Service included"）。显示在页眉下方和账单上的一行服务说明（例如 '15% service added'）。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/restaurant-qr-menu-page（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- 纸色（Paper）`#FAF3E7` — 页面底色 — 温暖的奶油纸张色，覆盖整个菜单。
- 深纸色（Paper deep）`#F1E6D2` — 吸顶标签栏底色、悬停色调、栏外桌面页面底色。
- 亚麻色（Linen）`#FFFDF8` — 卡片、底部弹层、照片说明卡 — 近白亚麻色。
- 长凳线色（Bench line）`#E3D5BC` — 细线、边框、点状价格引导线、标签描边。
- 胡桃木色（Walnut）`#4A3628` — 主墨色 — 菜品名、价格、标题、激活标签填充；温暖的深棕色，绝不用黑色。
- 柔胡桃木色（Walnut soft）`#7A6753` — 次要文本：描述、说明、注释。
- 陶土色（Terracotta）`#C05B3C` — 唯一强调色：添加按钮、激活筛选标签、CTA 胶囊按钮、招牌标签、呼叫服务员描边。
- 深陶土色（Terracotta deep）`#A34830` — 陶土色上的按下状态。

### 字体排印
- 展示字体 — 字标、菜品名、弹层标题（温暖衬线体，斜体点缀）：Lora（OFL），字重 500/600
- 文本字体 — 描述、标签、按钮、注释（友好圆润无衬线体）：Asap（OFL），字重 400/500/600

### 布局与动效
- 间距：菜单紧凑、适合拇指操作：单列 480px；页面内边距 16px；分类区块 py-24px，带 Lora 标题和一条长凳线分隔线；行内边距 16px 高，间距 12px；每个点击目标 ≥ 44px；计数栏预留 72px，确保最后一道菜永远不会被它遮住。
- 圆角：友好而圆润：999px 标签、14px 卡片、12px 照片缩略图、20px 弹层顶部；点状价格引导线是唯一的直线。
- 动效：底部弹层以 translateY 100%→0 在 320ms ease-out 内上滑，并伴随亚麻色背景淡入（250ms）；关闭时以 240ms 反向执行。
- 动效：吸顶标签：激活标签以胡桃木色填充、纸色文字（200ms）；标签行自动滚动使其保持居中；一条 2px 陶土色下划线在标签之间滑动（240ms）。
- 动效：过敏原筛选：不匹配的行以 35% 不透明度、grayscale(0.5) 动画过渡，其添加按钮禁用（250ms）；匹配的行保持全彩。
- 动效：添加按钮反馈：陶土色加号从 0.9→1 缩放（180ms），计数栏的数字弹跳一次；变更后 80ms，栏内总数上滑。
- 动效：呼叫服务员状态：描边胶囊按钮交叉淡入为带铃铛图标的胡桃木色确认卡（250ms）—— 一种屏幕状态，绝不代表网络请求。
- 动效：显现：分类区块通过 Motion 的 whileInView 轻柔淡入上移（y 14→0，500ms，60ms 交错），仅一次。
- 动效：prefers-reduced-motion：弹层原地淡入而不滑动，弹跳和下划线变为即时，显现变为 150ms 不透明度淡入。
- 图像：一个 bistro 场景：在温暖胡桃木桌面的陶瓷盘上，俯拍（top-down）诱人的食物摄影，每张照片都在同样的温暖吊灯 bistro 光线中，光线从左上角倾泻，柔和阴影，奶油与胡桃木色调配以陶土色点缀，轻柔蒸汽与光泽，诚实的分量 —— 仅六道菜；其他每道菜都是带点状引导线的文本行，像纸质菜单。画面中无可读文字（无菜单、无标签），无标志，无人物。照片由 VibeFather 生成并下载到 public/images。

## 页面与区块
### [BRAND] — 菜单（`index.html`）
1. **Bistro 页头** — 纸质背景上的非吸顶顶部区块：[BRAND] 字标使用 Lora 600 斜体 24px 胡桃色；旁边是一个低调的桌号标签（[TABLE]）——亚麻底色、长凳线边框、标签前有一个 6px 陶土色圆点，Asap 500 13px 胡桃色。下方一行，Asap 400 13px 柔胡桃色：'Kitchen open till 22:00 · [SERVICE] · this menu is sample copy for a demo bistro.'
   布局：列内边距 16px，py-16px；标签与字标基线对齐并右对齐；在 320px 屏幕上换行到下方。
   动效：无——页头随滚动移出，标签栏接管。
2. **招牌主视觉** — 视觉锚点：一张占满整列宽度的俯拍照片（public/images/hero-steak.webp，4:3，12px 圆角），在温暖的 bistro 灯光下展示招牌菜。照片底边叠压一张亚麻说明卡（14px 圆角，柔和阴影）：一个小陶土色标签 'FROM THE PASS'，Asap 600 11px 大写加字距；'Steak au poivre' 使用 Lora 600 22px 胡桃色；一行 Asap 13px 柔胡桃色：'the dish that named the street'；价格 '$26' Asap 600 胡桃色右对齐。点击卡片打开该菜品的详情面板。
   布局：照片占满整列宽度（宽高比 4:3，object-cover）；说明卡向上叠压 -28px，左右内缩 16px。
   动效：照片加载时淡入上移（500ms）；说明卡延后 100ms 跟随；移动端无视差。
3. **分类标签** — 吸顶标签行（top-0，z-30，深纸色底 92% 不透明度加模糊，底部 1px 长凳线）：五个标签在横向滚动行中——'Starters'、'Mains'、'Sides'、'Desserts'、'Drinks'——Asap 500 14px；激活标签为胡桃色底配纸色文字，其余为亚麻色配长凳线边框。标签对下方分类做滚动监听，标签行自动滚动以保持激活标签居中；点击标签平滑滚动到对应分类。
   布局：全宽吸顶栏，高 48px，标签高 36px、间距 8px，行内边距-x 16px。
   动效：激活填充 200ms；一条 2px 陶土色下划线在标签间滑动（240ms）；平滑滚动到分类（400ms，减少动效模式下使用原生 scroll-behavior）。
4. **过敏原筛选** — 标签栏下方一行（非吸顶）：标签 'Avoid:' 使用 Asap 500 13px 柔胡桃色，然后是四个标签——'Gluten'、'Dairy'、'Nuts'、'Shellfish'——亚麻底色、长凳线边框、胡桃色文字；激活标签填充陶土色配亚麻色文字。筛选会使所有分类中不匹配的菜品变暗（35% 不透明度，grayscale 0.5，添加按钮禁用）。下方免责声明行，Asap 12px 柔胡桃色：'Filters are a guide from our sample menu — always tell your server about allergies.'
   布局：标签在 390px 时换行到两行；行 py-12px。
   动效：每行变暗/恢复 250ms；激活标签填充 200ms。
5. **菜单——五个分类** — 五个分类区块，每个都有 Lora 600 18px 胡桃色标题、一条长凳线分隔线，以及两种诚实的行样式。照片行（六道菜，1:1 缩略图 88px，12px 圆角）：'French onion soup' — 'double broth, gruyère lid, the proper way' — $9 — dairy, gluten（onion-soup.webp）；'Steak au poivre' — 'the signature; frites underneath' — $26 — dairy（复用 hero-steak.webp）；'Duck confit' — 'slow leg, potatoes cooked in its fat' — $24 — dairy（duck-confit.webp）；'Moules frites' — 'a bowl of mussels, bread for the broth' — $21 — shellfish, dairy（mussels.webp）；'Chocolate tart' — 'dark, barely set, salt on top' — $9 — dairy, gluten（choc-tart.webp）；'House red, carafe' — 'the one the staff drinks' — $18 —（wine-carafe.webp）。文字行带点状引导线到价格：'Pâté de campagne' — 'toast, cornichons' — $11；'Little gem salad' — 'buttermilk, herbs' — $8 — dairy；'Rainbow trout amandine' — 'brown butter, almonds' — $23 — nuts, dairy；'Frites' — 'twice-cooked' — $5；'Haricots verts' — 'shallot, butter' — $6 — dairy；'Crème brûlée' — 'cracked to order' — $8 — dairy；'Badoit, bottle' — 'the fizzy one' — $6；'Espresso' — 'short, walnut-forward' — $3。每一行右侧都有一个 32px 陶土色添加按钮（lucide plus）；过敏原标签作为小长凳线标签位于描述下方。STARTERS：soup、pâté、salad · MAINS：steak、duck、mussels、trout · SIDES：frites、haricots · DESSERTS：tart、brûlée · DRINKS：carafe、Badoit、espresso。
   布局：区块 py-24px；照片行：缩略图在左，文字居中（名称 Lora 600 17px，描述 Asap 13px 柔胡桃色单行，过敏原标签），价格 Asap 600 胡桃色和添加按钮在右，窄于 360px 时堆叠；文字行：名称和价格在同一行，中间用点状长凳线引导线连接，描述在下方 13px 柔胡桃色。
   动效：区块滚动时淡入上移（500ms，60ms 交错）；添加按钮按下缩放 0.9→1（180ms）；行按筛选变暗。
6. **菜品详情面板** — 打开任意菜品会打开 BottomSheet：面板顶部一张 4:3 照片（12px 圆角），菜品名称 Lora 600 24px 胡桃色，完整描述 Asap 15px 柔胡桃色（两行），过敏原标签（亚麻色、长凳线），以及数量步进器（胡桃色描边减/加，数量 Asap 600）。面板底部：一个胡桃色胶囊按钮 'Add to order — $26'，其标签反映数量；添加后关闭面板并弹出计数气泡。
   布局：面板最大高度 82vh，内部可滚动；顶部 20px 圆角；X（lucide）在照片右上角。
   动效：面板上滑 320ms；背景淡入 250ms；添加胶囊按钮按下缩放 0.97；减少动效：面板原地淡入。
7. **订单计数与呼叫服务员** — 固定底栏（72px，亚麻底色，顶部 20px 圆角，顶部长凳线边框）：左侧 '3 items · $47' 使用 Asap 600 胡桃色（无订单时隐藏并显示 'Your order is empty — walnutsoft'）；右侧一个陶土色胶囊按钮 'Show server'（lucide receipt）打开计数面板。面板：'For your server' 使用 Lora 600 20px；行项目含名称、胡桃色描边数量步进器、行总计，以及一个小 x 用于移除；然后一条长凳线分隔线、小计、服务说明 '[SERVICE]' 使用 Asap 13px 柔胡桃色、总计使用 Lora 600 22px；一个描边陶土色胶囊按钮 'Call waiter'（lucide bell），点击后切换为胡桃色确认卡（250ms）：铃铛图标，亚麻色文字 'Screen ready — show your server when they pass.' 结尾行，Asap 12px 柔胡桃色居中：'This tally lives on your phone only — nothing was sent.' 计数持久化在 localStorage 中并注明这一点。
   布局：栏横跨列宽（固定在 480px 列内，桌面端内缩）；面板同菜品面板；项目列表有上限并内部滚动。
   动效：添加时栏计数弹出（180ms）；总计上滑 80ms；面板滑动 320ms；呼叫服务员交叉淡入 250ms；减少动效：仅淡入。
8. **页脚** — 顶部长凳线分隔线，py-24px：[BRAND] 字标小号（Lora 600 16px），一行 Asap 13px 柔胡桃色：'9 Larkspur Lane · Tue–Sun 17:00–22:00'；第二行 Asap 12px 柔胡桃色：'An invented demo bistro — dishes, prices and allergens are sample copy.'；可选 [CREDIT] 链接。除静态营业时间外无日期，无社交行。
   布局：居中列文字，16px 内边距。
   动效：无。

## 资源

- 图片：将 https://media.vibefather.ai/assets/388ef5f3-17ea-4f4a-a4af-a482bca86e24/hero-steak.webp 下载到 public/images/hero-steak.webp。Alt：'Overhead view of steak au poivre with peppercorn sauce and frites on a ceramic plate at a walnut bistro table.' 用作招牌主视觉（4:3）及其主菜（Mains）行的缩略图。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/388ef5f3-17ea-4f4a-a4af-a482bca86e24/onion-soup.webp 下载到 public/images/onion-soup.webp。Alt：'Overhead view of French onion soup with a melted cheese lid in a ceramic crock.' 前菜（Starters）行缩略图（1:1）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/388ef5f3-17ea-4f4a-a4af-a482bca86e24/duck-confit.webp 下载到 public/images/duck-confit.webp。Alt：'Overhead view of duck confit with potatoes in a warm ceramic plate.' 主菜（Mains）行缩略图（1:1）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/388ef5f3-17ea-4f4a-a4af-a482bca86e24/mussels.webp 下载到 public/images/mussels.webp。Alt：'Overhead view of a bowl of mussels in broth with fries and bread beside it.' 主菜（Mains）行缩略图（1:1）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/388ef5f3-17ea-4f4a-a4af-a482bca86e24/choc-tart.webp 下载到 public/images/choc-tart.webp。Alt：'Overhead view of a dark chocolate tart slice with flakes of salt on a small plate.' 甜点（Desserts）行缩略图（1:1）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/388ef5f3-17ea-4f4a-a4af-a482bca86e24/wine-carafe.webp 下载到 public/images/wine-carafe.webp。Alt：'Overhead view of a small carafe of red wine and one glass on a walnut table.' 饮品（Drinks）行缩略图（1:1）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图标：lucide-react（ISC）通过 npm 引入——添加按钮和步进器上的 plus 和 minus，关闭面板和移除条目用的 x，Show-server 胶囊按钮上的 receipt，呼叫服务员按钮及其确认提示上的 bell，页眉行中作为微小点缀的 utensils。不使用其他图标：不用 emoji，不用过敏原象形图集，不用餐厅 logo。没有照片的菜品是带点线引导的安静文本行——绝不用占位框。
- 字体：@fontsource/lora（OFL，字重 500 和 600，外加 500 斜体）和 @fontsource/asap（OFL，字重 400、500、600），在 src/main.tsx 中导入；绝不从 fonts.googleapis.com 或任何 CDN 加载。在项目根目录的 ASSETS.md 中列出这两个字体家族和六张照片：路径、来源、生成器或作者、许可证。

## 不要做
- 不要后端、不要点单、不要支付、不要网络请求、不要分析统计：计数、筛选和底部弹层都只是客户端状态，仅持久化到 localStorage，文案始终说明该计数是用于展示给服务员的。
- 呼叫服务员按钮绝不声称能联系到任何人：它只是把屏幕切换为“请出示此屏幕”的确认状态——任何地方都不暗示会接入员工网络。
- 过敏原标签只是示例性提示，绝不是饮食保证；筛选器下方的免责声明行必须保留。
- 不要真实餐厅、连锁店或其菜单：场所、菜品、价格和地址均为虚构，凡是出现名称的地方一律使用 [BRAND]。
- 照片只能是俯拍的 bistro 菜品：画面中不得有可读文字（不要菜单、黑板或标签），不要 logo，不要人物；如果生成的图片出现文字或人脸，请替换。
- 不要任何真实时钟相关内容：营业时间和“kitchen open till 22:00”都是静态示例文案，不得出现日期、年份或“today's specials”。
- 不要任何 CDN：字体通过 Fontsource 包提供，图标来自 lucide-react，照片来自 public/images；绝不外链，绝不使用 Unsplash/Pexels/Pixabay 或占位图服务。
- 生产构建：单条命令、压缩、无 source map、输出中不含 src/、使用相对路径（Vite base './'）；每张照片压缩为 ≤ 300 KB 的 WebP，使 dist/ 保持在 20 MB 以下。
- 移动优先就是设计本身：390×844 是主要目标，桌面端（1440×900）视图只是将同样的 480px 单列居中，两侧为细线——绝不做多列桌面布局，不隐藏任何仅桌面可见的内容；两种尺寸下控制台零报错。
- 底部弹层和计数栏必须尊重安全区域（env(safe-area-inset-bottom)），并确保每个点击目标 ≥ 44px。
- 锁定温暖 bistro 方向：纸感底色、胡桃木墨色、单一陶土色点缀、Lora 配 Asap、点状引导线和友好的圆角；不要深色模式、不要霓虹、不要玻璃拟态、不要快速弹簧动画——所有动画 ≤ 320ms。
- 尊重 prefers-reduced-motion：弹层原地淡入，弹出和滑动下划线变为即时，显现效果变为 150ms 淡入。
- 所有文案、标签、示例数据和 alt 文本均使用美式英语，放在 src/content.ts 中；当 [BRAND]、[TABLE] 或 [SERVICE] 变化时，重写菜品、价格和营业时间以适配新场所，而不是在 wine bar 下保留 bistro 文案。
- 在项目根目录的 ASSETS.md 中列出每个第三方文件（两个 Fontsource 字体家族、lucide 图标、六张照片）：路径、来源、许可证。

---
— Prompt by VibeFather · https://vibefather.ai/t/restaurant-qr-menu-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
