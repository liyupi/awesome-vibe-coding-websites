> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 直播购物流页面

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一个原创的直播购物网页体验，由虚构的 [HOST_NAME] 为 [AUDIENCE] 主持。默认活动为“[SHOW_TITLE]”。使用一张宽幅生成的演播室照片和五张生成的产品照片，通过脚本化的本地计时、细微的静态图像运动、精选产品叠加层、观众聊天和礼物反应来模拟直播。包含一个可领取的倒计时优惠券、一个产品货架抽屉和一个带有透明折扣计算的持久购物车；不存在真实的流媒体或商业服务。

- 受众：[AUDIENCE]。该页面也应适用于独立零售商、创作者和开发者，用于评估一个完全以静态文件形式运行的精致直播电商交互原型。
- 目标：让访客观看或手动浏览一场五部分的节目，了解每件精选产品，加入本地对话，领取演示优惠，浏览货架并构建一个准确计算的示例订单。每个可见按钮都必须改变真实的客户端状态，并且界面绝不能暗示正在发生真实的直播、观众或交易。
- 语气：温暖、沉稳、亲切且具体。像一位体贴的演播室主持人分享有用的细节那样写作，带有温和的观众能量，而不是狂热的销售压力、夸大的宣传或平台陈词滥调。

## 技术栈
- 框架：Vite 6 + React 19 + TypeScript
- 样式：Tailwind CSS 4
- 库：motion（MIT）、lucide-react（ISC）、@fontsource-variable/fraunces（OFL-1.1）、@fontsource-variable/manrope（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 将 Vite base 设为 './'，build.sourcemap 设为 false；仅将压缩后的静态文件输出到 dist/，以 index.html 作为唯一的 HTML 入口。
  - 通过 @tailwindcss/vite 配置 Tailwind CSS 4；在 src/index.css 中定义颜色令牌（color tokens）、字体族、舞台关键帧（stage keyframes）、礼物通道（gift lanes）和可复用的界面工具类。
  - 创建 src/content.ts，作为所有变量值和派生文案、五个产品、五个主持章节、种子聊天消息、礼物事件、工作室笔记、图片路径和 UI 标签的唯一来源；通过将 BRAND 转为小写并移除空格和标点来派生存储命名空间。
  - 使用一个 React context 配合 reducer 管理演出播放、当前章节、聊天、礼物、已领取优惠券、活动抽屉、展开的产品、购物车行、toast 和样品订单确认；不要添加状态管理库。
  - 用一个确定性的 60 秒本地时钟运行演出，包含五个 12 秒章节。使用单个计时器，绝不使用 Math.random，并保持当前章节、产品覆盖层和进度段同步。当文档隐藏时暂停时钟。
  - 将购物车行、已领取优惠券、用户添加的聊天消息和优惠券截止时间持久化到 localStorage 中，使用一个从 BRAND 派生的带版本键；根据当前库存验证解析的数据和存储的数量。当演出循环或重新加载时保留截止时间。
  - 使用 Motion 实现抽屉、对话框、产品覆盖层和 toast，使用 CSS 关键帧实现静态图像漂移和礼物通道。所有价格使用整数最小单位，显示时使用 Intl.NumberFormat 配合 [CURRENCY]。
  - 通过列出的 Fontsource 包自托管 Fraunces Variable 和 Manrope Variable。本地打包 Lucide 图标，仅创建原始的 [BRAND] 拱形线条标志作为内联 SVG。
  - 实现可访问的抽屉和对话框行为，包括可见的关闭按钮、Escape 和遮罩关闭、焦点捕获、焦点恢复，以及用于购物车和优惠券反馈的礼貌状态区域。
  - 当请求 prefers-reduced-motion 时，以暂停状态启动自主演出运动；保持章节按钮、货架、购物车和所有其他控件立即可用。

## 变量
- [BRAND] — 虚构的直播购物品牌（默认：“Moss & Meridian”）。用于字标、文档标题、存储命名空间和页脚；更改品牌时，重写所有由品牌衍生的文案。
- [SHOW_TITLE] — 直播活动标题（默认：“The Soft Evening Edit”）。一个简短的系列或活动名称；根据此主题调整五个章节和工作室笔记。
- [AUDIENCE] — 主要购物受众（默认：“design-conscious renters looking for practical comfort and small home rituals”）。针对此受众重写主播讲解、聊天内容和产品卖点，但不要做出真实的性能声明。
- [HOST_NAME] — 虚构主播姓名（默认：“Mara Ellison”）。仅使用虚构姓名；重写主播字幕和简介，同时保留提供的虚构主播图片。
- [ACCENT] — 主操作强调色，以十六进制颜色表示（默认：“#FF7A66”）。应用于主操作、活动章节、直播指示器和礼品详情，同时保持可访问的对比度。
- [CURRENCY] — 显示货币（默认：“USD”）。每个价格都使用 Intl.NumberFormat。更改货币仅改变格式；请显式重写价格数值，而不是暗示换算。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/live-shopping-stream-page（默认：是；删除此行即可移除）

“页面与区块”下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 画布（Canvas）`#100F0E` — 温暖的近黑色页面背景、舞台遮罩和深色环绕区域。
- 表面（Surface）`#1B1917` — 页眉、聊天、商品货架、购物车和次级面板。
- 凸起（Raised）`#29241F` — 输入框、商品卡片、标签和抬升的浮层表面。
- 羊皮纸（Parchment）`#FFF8EE` — 主文本、价格、标题和高对比度图标。
- 柔和（Muted）`#BCB0A3` — 时间戳、元数据、次级文案和非活动控件。
- 珊瑚（Coral）`#FF7A66` — [ACCENT] 的默认值；主按钮、活动状态和模拟直播指示器。
- 黄油（Butter）`#F2CF7A` — 优惠券面板和节省高亮，始终搭配深色文字。
- 鼠尾草（Sage）`#A8C5A0` — 已领取、有库存和成功的本地状态反馈。
- 细线（Hairline）`#40372F` — 一像素分隔线、卡片边框和低调的进度轨道。

### 字体排印
- 主播字幕、活动标题和编辑注释：Fraunces Variable（OFL），字重 500/600/700
- 界面、聊天、价格、商品数据和控制项：Manrope Variable（OFL），字重 400/500/600/700/800

### 布局与动效
- 间距：使用 4px 基准单位。桌面端页眉为 64px，水平内边距 28px；主工作区使用 20px 间隙和 24px 外侧留白。舞台浮层使用 20–24px 内边距，聊天行垂直间隙 12px，抽屉内容 20px。移动端页眉为 56px，外侧留白 12px，商品和优惠券控件高度至少 44px，底部抽屉包含安全区内边距。
- 圆角：直播舞台和大型抽屉使用 20px，商品和优惠券卡片使用 14px，输入框和小缩略图使用 10px，仅紧凑徽章、图标按钮和进度标签使用全圆角。使用 1px 细线边框和短促的暖色阴影，而非玻璃效果。
- 动效：活动主播静帧缓慢漂移，从 scale 1.025 translate3d(-0.5%,0,0) 到 scale 1.075 translate3d(0.75%,-0.75%,0)，历时 16s，交替方向。当节目播放时以及文档隐藏时暂停漂移。
- 动效：在每个 12 秒章节边界，旧精选商品卡片在 160ms 内向下退出 8px，新卡片在 280ms 内从 12px 向上进入，缩放从 96% 到 100%。主播字幕和章节进度在同一时钟节拍更新。
- 动效：聊天播放激活时，每 2.4 秒追加一条确定性种子聊天消息。新行使用 180ms 不透明度和 6px 上升；渲染列表上限为 30 行，同时保留用户消息。
- 动效：在每个节目周期的第 5、13、21、29、37、45 和 53 秒发出小型礼物反应。最多三个基于 Lucide 的原始礼物符号在 1400ms 内沿各自固定轨道向上移动，带有轻微水平漂移，然后移除。
- 动效：桌面端抽屉从右侧打开，历时 320ms；移动端底部面板向上打开，历时 300ms，使用 cubic-bezier(0.22,1,0.36,1)；遮罩在 180ms 内淡入，且绝不对背景页面做动画。
- 动效：添加商品后 180ms，购物车徽章脉冲一次。优惠券领取绘制一个对勾，提示条保留 1800ms，价格变化交叉淡入淡出，不移动周围布局。
- 动效：优惠券计时器每秒以数字形式更新一次，不翻转也不脉冲。归零时保持 00:00 并显示 Offer ended；它永不重置。
- 动效：在 prefers-reduced-motion 下，移除主播漂移、礼物移动、交错入场、平滑滚动和计数脉冲。节目以暂停状态开始，章节立即切换，浮层最多使用 100ms 不透明度过渡。
- 图像：恰好使用六张本地 AI 生成的摄影图片：一张宽幅编辑风格主播场景和五张方形商品静物。全部共享温暖的钨丝实用光、胡桃木和奶油色表面、克制的珊瑚色点缀、柔和的接触阴影、可触知的真实材质和细腻的 35mm 颗粒。主播是一位虚构的成年人，出现在宽敞的宽幅或中宽幅工作场景中，绝不是紧凑的面部特写。在文字后方应用方向性画布遮罩，而不是压暗整张照片。商品必须保持通用且无品牌，不得有文字、包装标记、标志或水印。当变量变化时，不要用真人、可识别的商业设计或不相关的图像替换这些照片。

## 页面与区块
### 直播购物秀（`index.html`）
1. **共享外壳与模拟声明** — 创建一个原创的 [BRAND] 字标，由两条水平线上方一个小开口拱形构成，而非平台风格的播放符号。页头操作项为 Live show、Show notes 和一个带单位数量徽章的 ShoppingBag 购物车按钮。在“Interactive simulation · local sample data”旁显示一个紧凑的红珊瑚色 LIVE DEMO 标签，以免该活动被误认为真实直播。Live show 返回舞台；Show notes 滚动到备注区；购物车打开购物车抽屉。移动端保留字标、LIVE DEMO 标签和购物车，并将 Live show 与 Show notes 放在页头下方一个紧凑的双标签行中。
   布局：使用粘性页头，桌面端 64px、移动端 56px，实色 Canvas 背景和 Hairline 底边框。桌面内容最大宽度 1440px。保持模拟声明可见且不换行覆盖字标；在 390px 时，将次要文本缩短为“Local simulation”。购物车徽章为 Butter 色配 Canvas 文字，且绝不改变按钮宽度。
   动效：导航激活状态立即变化。直播圆点仅在节目播放时轻微呼吸；移动端标签行无持续动效。
2. **主播舞台与首屏构图** — 使用 host-studio.webp 作为大型视觉锚点。叠加“[SHOW_TITLE]”、“with [HOST_NAME]”以及章节专属的主播说明文字。默认章节说明为：1“Let’s begin with the light: a small pool of warmth changes the whole room.” 2“This is the layer I keep nearby for slow endings and early starts.” 3“A simple pour feels better when the glass sits comfortably in your hand.” 4“Two quiet scents, one easy ritual. Burn them one at a time.” 5“Everything from tonight folds into one soft, useful carry.” 包含一个 Pause/Play show 按钮、一个无静音的“No audio in this demo”提示和一个固定的“8,412 demo viewers”标签。不要添加真实音量控制、全屏视频控制或虚假的流媒体设置。
   布局：在 1440×900 下使用工作区网格，包含 minmax(0,1fr) 和一个 344px 的聊天栏。左侧舞台为 16:9 比例，约占 880×495px，完整显示主播、标题、当前产品卡和播放控制。左上角放置 LIVE DEMO 和观众数；右上角放置播放控制。左下角放置活动与章节文案，右侧为产品卡留出空间。低于 768px 时使用 4:5 舞台裁切，将产品卡放在照片下方而非覆盖主播，说明文字保持在底部控制上方，并让页面自然滚动。
   动效：使用 Design 中定义的主播漂移和章节时序。仅对章节说明文字进行交叉淡入淡出；保持照片挂载以避免闪烁。
3. **精选产品与节目流程** — 在 src/content.ts 中创建五个 12 秒章节：0–11 秒 Alder Table Lamp，12–23 秒 Cove Knit Throw，24–35 秒 Arc Glass Carafe，36–47 秒 Drift Candle Duo，48–59 秒 Fold Canvas Tote。每个精选卡片显示其本地缩略图、“Featured in the studio”、产品名称、当前价格、划线价和两个可用操作：Add to bag 和 View details。默认价格分别为 $58/$72、$46/$56、$34/$42、$24/$30 和 $28/$36。View details 打开货架并展开该商品。Add to bag 立即更新共享购物车。五个带标签的进度段位于舞台下方，允许直接跳转章节；60 秒后节目返回第 1 章，但不重置优惠券、购物车或用户聊天。Replay from start 控件仅重置节目时钟。
   布局：桌面端精选卡片位于舞台右下角，宽 292px，含 84px 方形图片和紧凑的双按钮行。移动端卡片变为图片正下方全宽 Raised 面板。进度段仅使用产品首字母作为小文本标签，绝不作为图片替代；在 390px 时使用数字 01–05，并向屏幕阅读器播报当前产品名称。
   动效：遵循精确的章节边界过渡。点击进度段在同一次状态更新中设置主播说明和产品，并仅重启该章节的 12 秒间隔。
4. **观众聊天与原创礼物反应** — 构建一个标题为“Studio chat”的聊天栏，包含 All 和 Questions 筛选器以及 Pause chat/Resume chat 按钮。预置 14 条虚构消息，包括 Priya 的“The lamp glow looks much softer than ceiling light.”、Ellis 的“Would the throw work on a reading chair?”、Noor 的“The carafe shape is lovely.”和 Jules 的“I just claimed the studio coupon.”。用小型 HelpCircle 图标标记问题消息，而非彩色用户名徽章。每 2.4 秒从确定性序列追加，并显示“Demo audience · messages stay in this browser”。输入区有一个 120 字符输入框，标签为 Add a message，一个 Send 按钮和一个独立的 Send a star 按钮。用户消息显示为 You 并在本地持久化；空输入被拒绝。礼物反应使用 Heart、Star 和 Sparkles Lucide 符号，配以原创名称如 Warm star 和 Bright note，绝不使用平台礼物图稿。
   布局：桌面端聊天填充舞台旁 344px 右栏，含 52px 页头、可滚动消息列表和粘性输入区。消息文本 13px，元数据 11px，仅使用低调的圆形字母组合头像作为聊天点缀；照片主播锚定页面。移动端在折叠面板中显示最新三条消息，带 Expand chat 按钮，然后以 78dvh 底部抽屉展示完整聊天栏。输入区控件保持在安全区域上方。
   动效：聊天播放与节目播放相互独立。Pause chat 仅停止预置消息追加。礼物符号在裁切的舞台叠加层内浮动，绝不覆盖产品价格或控件；减少动效时显示静态星标计数。
5. **倒计时优惠券与领取反馈** — 在舞台和进度行正下方放置一条 Butter 优惠券条：“A little thank-you for watching”、“$10 off a $60 bag”、代码 STREAM10 和一个在访客首次加载时初始化的 15:00 倒计时。按钮文案为 Claim coupon，然后变为带 Check 图标的 Coupon claimed。该优惠在折扣前商品小计达到 $60 时一次性应用于商品小计；否则购物车显示仍差的确切金额。归零时禁用领取并标注 Offer ended，但不清除已领取的有效优惠券。添加一条简洁的“Sample offer · no payment is collected”说明。
   布局：桌面端使用单条水平条带，消息在左，代码和计时器居中，操作在右。移动端堆叠消息、代码/计时器和全宽操作，不覆盖精选产品。使用代码绘制的虚线票券边缘，而非条形码或第三方优惠券图案。
   动效：计时器数字使用等宽数字。领取反馈和购物车资格立即更新；无紧迫感闪烁或重复倒计时动画。
6. **产品货架抽屉** — 在优惠券下方和每个 View details 操作中提供一个醒目的 Browse all 5 products 按钮。货架按节目顺序列出 Alder Table Lamp、Cove Knit Throw、Arc Glass Carafe、Drift Candle Duo 和 Fold Canvas Tote，含本地照片、价格和库存标签。默认库存为 12、8、15、20 和 9。每行展开显示具体详情：台灯“Linen shade, walnut base, 16 in high, inline dimmer”；盖毯“Recycled-cotton knit, 50 × 60 in, machine wash cold”；水瓶“Borosilicate glass, 34 oz, hand wash”；蜡烛“Two 6 oz soy-blend candles, cedar and fig, approximate 32-hour burn each”；托特包“16 oz cotton canvas, 15 × 16 × 5 in, interior slip pocket”。Add to bag 遵守库存且绝不要求选择变体。包含当前购物袋的小结和 Go to cart 操作。
   布局：桌面端抽屉从右侧展开，宽 480px，位于页头下方；移动端为 90dvh 底部抽屉，顶部圆角并带可见手柄，但关闭绝不依赖拖拽。产品行使用 112px 方形缩略图和 16px 间距；展开详情保持在正常流中。保持 Add 按钮可见且无需水平滚动，打开时捕获焦点。
   动效：抽屉和遮罩遵循共享过渡。展开详情使用 180ms 高度和透明度显现；减少动效时立即展开。
7. **购物车抽屉与示例订单** — 共享购物车按钮打开“Your studio bag”，初始为空，显示“Start with something from tonight’s shelf”和一个可用的 Browse products 操作。每行显示缩略图、产品名称、单价、受库存限制的数量步进器、行总计和带五秒 Undo 提示的 Remove。摘要行显示商品小计、符合条件时的 STREAM10 折扣、折扣后低于 $80 时模拟运费 $6 或 $80 及以上时 $0，以及最终总计。不添加税费或额外折扣。Review sample order 打开一个对话框，列出各行和总计，并显示“This is a simulated order. No payment or personal information is collected.”。Confirm sample order 仅显示本地参考号 SAMPLE-1048 并保持购物车不变。绝不请求邮箱、地址、卡号或登录。
   布局：复用货架（shelf）中桌面端右侧抽屉和移动端底部面板的尺寸。订单摘要通过安全区域内边距（safe-area padding）固定在底部，而商品行可滚动。确认对话框居中，最大宽度 520px，在小屏幕上可滚动，关闭时将焦点返回购物车按钮。
   动效：数量和总计在任何视觉效果之前更新。移除操作在 160ms 内折叠，撤销（Undo）恢复确切的商品行和数量。确认使用单次 200ms 的稳定过渡。
8. **工作室说明与页脚** — 在实时工作区下方添加“演出说明”（Show notes），包含三张与默认编辑相关的实用卡片：“从一盏暖光开始”（Start with one warm light），关于将灯放在视线水平以下；“让一种纹理触手可及”（Keep one texture within reach），关于在阅读椅上叠搭针织毯；“让日常倾倒更有仪式感”（Make the everyday pour deliberate），关于将玻璃瓶和杯子放在一起存放。为 [HOST_NAME] 添加一段简短的虚构主持人简介：“一位工作室造型师，撰写关于小房间、实用物品和更慢节奏日常的内容。”这些是信息卡片，不是链接。最后以 [BRAND]、“一个仅限浏览器的直播购物概念。主持人、观众、产品、价格、库存和订单均为虚构示例内容。”以及可选的 [CREDIT] 链接收尾。不要添加日期、社交计数、法律声明或不相关的营销区块。
   布局：使用最大宽度 1184px 的说明区块，桌面端三张等宽卡片，移动端单列，桌面端顶部内边距 64px，移动端 40px。页脚是一个安静的两行区块，顶部有细线（Hairline）边框，移动端底部留有足够的间隙。说明文字保持左对齐，且不大于 16px。
   动效：说明首次进入视口时有一个微妙的 8px 显现效果，在减少动态效果（reduced motion）下移除。页脚无动画。

## 资源

- 图片：将 https://media.vibefather.ai/assets/20e8710f-c1bc-4e19-aca3-c727a2d962f5/host-studio.webp 下载到 public/images/host-studio.webp。替代文本：'Fictional home-goods host arranging warm lighting and textiles in a walnut studio.' 仅用作全出血（full-bleed）直播舞台照片及其响应式裁切图。在 ASSETS.md 中注明来源：Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- 图片：将 https://media.vibefather.ai/assets/20e8710f-c1bc-4e19-aca3-c727a2d962f5/alder-lamp.webp 下载到 public/images/alder-lamp.webp。替代文本：'Small walnut table lamp with a natural linen shade glowing on a warm set.' 用于 Alder Table Lamp 精选卡片、货架行和购物车行。在 ASSETS.md 中注明来源：Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- 图片：将 https://media.vibefather.ai/assets/20e8710f-c1bc-4e19-aca3-c727a2d962f5/cove-throw.webp 下载到 public/images/cove-throw.webp。替代文本：'Folded cream and rust knitted throw on a walnut bench.' 用于 Cove Knit Throw 精选卡片、货架行和购物车行。在 ASSETS.md 中注明来源：Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- 图片：将 https://media.vibefather.ai/assets/20e8710f-c1bc-4e19-aca3-c727a2d962f5/arc-carafe.webp 下载到 public/images/arc-carafe.webp。替代文本：'Clear curved glass carafe with a matching drinking glass on a cream plinth.' 用于 Arc Glass Carafe 精选卡片、货架行和购物车行。在 ASSETS.md 中注明来源：Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- 图片：将 https://media.vibefather.ai/assets/20e8710f-c1bc-4e19-aca3-c727a2d962f5/drift-candles.webp 下载到 public/images/drift-candles.webp。替代文本：'Two plain amber glass candles with unlit cotton wicks on a walnut tray.' 用于 Drift Candle Duo 精选卡片、货架行和购物车行。在 ASSETS.md 中注明来源：Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- 图片：将 https://media.vibefather.ai/assets/20e8710f-c1bc-4e19-aca3-c727a2d962f5/fold-tote.webp 下载到 public/images/fold-tote.webp。替代文本：'Soft natural canvas tote with rust stitching resting beside a cream wall.' 用于 Fold Canvas Tote 精选卡片、货架行和购物车行。在 ASSETS.md 中注明来源：Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- 图标：使用 lucide-react 实现 ShoppingBag、Plus、Minus、X、Play、Pause、Send、Star、Heart、Sparkles、Check、HelpCircle、ChevronDown、ArrowRight、RotateCcw、PackageOpen 和 Undo2。图标保持本地打包，并在 ASSETS.md 中记录 Lucide 的 ISC 许可证。用内联 SVG/CSS 绘制原创的拱形与线条品牌符号及票券边缘；不要模仿流媒体平台的图标。
- 字体：通过 @fontsource-variable/fraunces 自托管 Fraunces Variable，通过 @fontsource-variable/manrope 自托管 Manrope Variable。仅导入使用到的可变字体文件，在 ASSETS.md 中记录两个 OFL-1.1 许可证，并且不发起任何 Google Fonts 或其他 CDN 请求。

## 禁止事项
- 不要添加后端、服务器代码、API 路由、数据库、身份验证、远程表单、分析或第三方 API 调用。所有展示、聊天、观众、优惠券、库存和订单行为均为本地示例状态。
- 不要使用任何现有直播电商平台的名称、标志、吉祥物、口号、标志性插画、精确配色方案、专有图标集、自定义字体、可识别的界面构图或源代码。
- 不要使用真实主播、名人肖像或可识别的真实人物。所提供的主播为虚构生成人物；不要用真实人物的照片替换此形象，也不要将主播标识为真实主持人。
- 不要复制现有用户名、聊天记录、观众人数、商品列表、价格、促销文案、评价、产品摄影或品牌包装；所有提供的内容和示例值必须保持原创。
- 不要使用录播流、真实视频素材、平台专属礼物图案、专有音乐、第三方品牌标识、动漫或游戏角色，或可识别的商业产品设计。
- 不要暗示真实直播、真实观众、真实购买或实际稀缺性。保留可见的 LIVE DEMO 和模拟披露、固定的演示观众标签以及示例优惠话术。
- 不要添加自动播放音频、虚假麦克风或摄像头控件、虚假推流设置、真实聊天提交、支付字段、个人信息收集或会清空购物车的结账流程。
- 不要在重新加载时或 60 秒节目循环时重置优惠券截止时间，不要重启已结束的优惠，不要在低于门槛时应用 STREAM10，不要超出库存或隐藏运费和折扣计算。
- 不要热链资源，也不要使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务、CC BY-NC 或 CC BY-SA 媒体。将列出的六张图片下载到其精确的本地路径，并在 ASSETS.md 中列出每个第三方文件。
- 不要从 CDN 加载字体、脚本、图标或样式。仅使用固定技术栈和允许的许可证，两种字体均通过 Fontsource 自托管，且不使用受限组件源码。
- 不要生成 source map，不要将 src/ 复制到 dist/，不要超过 20 MB，也不要使用绝对根资源 URL。生产构建必须能在嵌套静态路径下使用相对 URL 正常工作。
- 不要添加更多页面、裸目录链接、真实路由服务或服务器回退要求；将完整体验保留在 index.html 中，使用本地抽屉和对话框。
- 不要在 src/content.ts 之外硬编码 BRAND、SHOW_TITLE、AUDIENCE、HOST_NAME、ACCENT 或 CURRENCY，不要留下可见的变量标记，也不要在值变化时将提供的照片重命名为无关产品。
- 不要引入 emoji 作为图标、可识别的礼物徽章、通用玻璃拟态、霓虹青红配色、过度发光、剧烈闪烁或遮挡主播、聊天或价格的动效。
- 不要交付无响应控件、无法工作的暂停或章节按钮、损坏的焦点状态、过小的触摸目标、水平溢出或控制台错误。验证 1440×900 和 390×844、两个抽屉、聊天、优惠券资格、购物车计算以及仅键盘操作。
- 不要忽略 prefers-reduced-motion。自主主播、聊天和礼物动效必须停止或保持暂停，同时手动章节、商品和购物车交互继续正常工作。
- 不要添加 SEO 元数据、Open Graph 标签、JSON-LD、站点地图或关键词堆砌内容；一个普通的 [BRAND] 文档标题和原创 favicon 就足够了。
- 除可选的渲染器提供的 [CREDIT] 页脚链接外，不要在演示中的任何位置提及 VibeFather。

---
— Prompt by VibeFather · https://vibefather.ai/t/live-shopping-stream-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
