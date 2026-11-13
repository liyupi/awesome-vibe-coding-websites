> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 搬家公司报价页面

完全按照下面的描述构建这个网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个原创的单页潜在客户开发网站，[BRAND] 是一家虚构的搬家公司，服务于 [SERVICE_AREA]。该页面帮助 [AUDIENCE] 根据房屋面积、可编辑的房间物品清单和行驶距离创建透明的即时估价，然后保存附带该估价的预约请求。使用下面指定的默认英文文案，并在变量值变化时重写所有文案、示例、评价和联系方式。

- 受众：正在比较本地搬家公司的人，他们希望在联系协调员之前获得一个有用的规划价格区间；此外还包括需要可信、高意向报价和预约页面的搬家公司老板。
- 目标：让报价计算器成为主要交互，解释数字是如何产生的，通过具体的服务细节和虚构评价建立信任，并将完成的估价转化为客户端预约请求。
- 语气：冷静、专业、温暖且精确。听起来像一位经验丰富的搬家协调员，而不是销售页面。使用平实的美国英语、具体的包含项、真实的示例细节，并且不使用施压策略。

## 技术栈（Stack）
- 框架（Framework）：Vite 6 + React 19 + TypeScript
- 样式（Styling）：Tailwind CSS 4
- 库（Libraries）：react (MIT)、react-dom (MIT)、tailwindcss (MIT)、@tailwindcss/vite (MIT)、motion (MIT)、lucide-react (ISC)、@fontsource-variable/fraunces (OFL-1.1)、@fontsource-variable/dm-sans (OFL-1.1)
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置（Setup）：
  - 在 vite.config.ts 中配置 base './'、build.sourcemap false，以及 React 和 Tailwind 的 Vite 插件；生产入口为 index.html，所有资源 URL 必须为相对路径。
  - 使用 Tailwind CSS 4，并在 src/index.css 中定义一个小型主题，包含精确的颜色、字体族、关键帧、焦点环和减少动态效果（reduced-motion）的覆盖样式；布局组件放在 src/components 中。
  - 将所有变量默认值、标题、按钮文案、评价、FAQ、联系方式、库存项、搬家规模预设和定价常量放入 src/content.ts。变量变更时重写默认专属内容；绝不遗留旧的品牌、地点、受众、费率或电话号码。
  - 在 src/lib/estimate.ts 中实现纯计算函数，在 src/App.tsx 中实现共享的 React 状态。将当前库存、距离和预约草稿持久化到 localStorage，存储不可用时使用安全默认值。
  - 在 src/main.tsx 中导入自托管的 Fraunces Variable 和 DM Sans Variable 包。通过 motion/react 使用 Motion for React，所有界面图标使用 Lucide React。
  - 用云杉色（spruce）和杏色（apricot）的三个简单错位矩形轮廓创建一个原创 favicon；不要模仿任何现有搬家公司的标志。

## 变量
- [BRAND] — 搬家公司名称（默认：“Juniper Lane Movers”）。一个虚构的本地搬家公司名称，贯穿整个网站使用。
- [SERVICE_AREA] — 服务区域（默认：“Portland and the Willamette Valley”）。公司服务的城市或地区。
- [AUDIENCE] — 主要客户（默认：“Apartment renters, growing families, and small offices”）。简短描述搬家服务所面向的人群和机构的短语。
- [BASE_RATE] — 两名搬家工人的每小时费率，以美元计（默认：“145”）。仅限数字。计算器每增加一名搬家工人每小时加收 45。
- [PHONE] — 预约电话号码（默认：“(503) 555-0148”）。一个显示号码兼电话链接号码；请使用虚构的示例联系方式。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/moving-company-quote-page（默认：是；删除此行即可移除）

Pages & Sections 下的文案是针对默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 画布（Canvas）`#F3F0E7` — 温暖的象牙色页面背景，以及交替区块的底色。
- 纸张（Paper）`#FFFDF8` — 卡片、表单控件、报价明细表和页头的表面色。
- 云杉（Spruce）`#193C35` — 主文本、深色按钮、页脚和醒目的图标描边。
- 灰松（Muted Pine）`#63736C` — 次要文案和辅助文本；切勿用于字号很小、对比度低的标签。
- 鼠尾草淡彩（Sage Wash）`#DDE6D8` — 选中的搬家规模卡片、房间标签页、进度强调元素和柔和徽章。
- 杏色（Apricot）`#E88962` — 小型编辑性强调元素、当前步骤标记和估价高亮；需搭配云杉色文本使用。
- 细线（Hairline）`#D4D8CD` — 一像素边框、表格线、输入框轮廓和分隔线。

### 字体排印
- 展示字体和编辑性标题：Fraunces Variable（OFL），字重 500/600/700
- 正文、导航、表单和数字：DM Sans Variable（OFL），字重 400/500/600/700

### 布局与动效
- 间距：使用居中的 1280px 最大容器，桌面端留白 32px，移动端留白 20px。基于 8px 基础网格构建。桌面端区块垂直内边距为 104px，移动端区块为 68px。Hero 区顶部内边距 56px、底部 72px。卡片内边距 24–32px，表单行间距 16px，库存条目行垂直间距 12px。
- 圆角：主要摄影图使用 28px 圆角，报价工作室和预订面板使用 20px，卡片和输入框使用 14px，仅紧凑标签和步骤标签使用全圆角胶囊形。所有带边框的表面使用 1px 细线轮廓，而非重阴影。
- 动效：主要区块使用 Motion 的 whileInView 只揭示一次：不透明度从 0 到 1，y 从 18 到 0，持续 500ms，直接子元素错开 70ms，视口触发量为 0.18。
- 动效：每当状态变化时，报价范围数字以及卡车、人员、小时数值以 280ms 的交叉淡入/滑动进行动画；保持布局宽度稳定，切勿对每次按键都过度动画。
- 动效：房间标签页、数量步进器、手风琴高度、移动端导航、悬停箭头和展开的移动端估价栏使用 180–220ms 的过渡。
- 动效：Hero 摄影图可在进入时从 1.025 缩放到 1，持续 700ms；不要添加持续的视差或自动播放的轮播。
- 动效：当启用 prefers-reduced-motion 时，移除变换和数字补间，立即显示最终值，并保持所有控件完全可用。
- 图像：使用四张专为此模板生成、风格协调的写实编辑性图片。共同风格为温暖的天然窗光、克制的象牙色/鼠尾草色/杏色、真实的搬运材料、微妙的胶片颗粒感，以及 35mm 纪实生活感。展示正在使用的空间和细致的工作，而非摆拍的广告。不得出现文字、标志、水印、品牌制服、可识别的卡车车型、可见的面部或可识别的人物。将 Hero 图裁剪为大幅 4:3 场景，在分栏服务区块中使用打包照片，在宽幅服务区域带中使用无标识卡车，在预订面板旁使用安顿好的房间。将四张图片全部下载到本地，并在 ASSETS.md 中列出，附上提供的生成资产署名。

## 页面与区块
### [BRAND] — 搬家估价（`index.html`）
1. **页眉与摄影主视觉** — 创建一个 72px 的粘性 Paper 页眉，底部带一条细线（Hairline）边框。左侧：原始偏移方框 favicon 和 DM Sans 700 字重的 [BRAND]。桌面端居中锚点：Estimate、What's included、Reviews、Service area、FAQ。右侧：[PHONE] 作为紧凑文本链接，以及一个标注为 Start my estimate 的云杉色（spruce）按钮。移动端显示品牌、带无障碍标签的电话图标，以及一个 Menu 按钮，点击打开 Paper 下拉菜单，包含相同锚点。主视觉眉题：LOCAL MOVES · [SERVICE_AREA]。H1 使用 Fraunces 600：A clearer move starts with a clearer quote。辅助文案：Tell us what is coming with you. We will turn your rooms and mileage into a practical crew, truck, and budget plan。主 CTA：Build my quote。次级文本链接：See how pricing works。信任行：No deposit to estimate · A coordinator reviews every request。在 CTA 下方，放置四个紧凑的搬家规模按钮，分别标注 Studio、1 bedroom、2 bedrooms 和 3+ bedrooms；初始选中 2 bedrooms。选中一个按钮会应用对应的物品预设，并滚动到报价工作室。使用 hero-move.webp 作为视觉锚点，alt 文本为：Movers carrying plain boxes through a sunlit apartment。在照片左下角添加一个小型 Paper 说明卡片：Thoughtful planning, before moving day。
   布局：主视觉为 12 列网格，文案占 5 列，图片占 7 列，列间距 64px。文案在最小 590px 的主视觉主体内垂直居中。H1 为 clamp(48px, 5.2vw, 76px)，行高 0.98，字距 -0.035em，自然情况下每行最多 11 个字符。图片以 object-fit cover 填满其 4:3 画框。浮动说明卡片宽 220px，距边缘偏移 24px。在 390px 宽度下，文案堆叠在照片之前，H1 使用 44px，主 CTA 全宽，搬家规模行可水平滚动且控件不被裁切，图片位于下方，比例为 4:3。
   动效：眉题、标题、文案和操作按钮以 70ms 错峰淡入。照片在 700ms 内从 1.025 缩放到 1。选择搬家规模时，先短暂显示 Sage Wash 高亮，然后平滑滚动到 Estimate；对于减少动态效果偏好，使用即时滚动。
2. **保障条** — 添加三条简洁的保障说明，分别使用 Lucide 的 ShieldCheck、PackageCheck 和 CalendarCheck 图标：Padding and floor protection included；Clear arrival windows；Flexible rescheduling。对应的简短辅助文本分别为：For furniture and shared hallways。So your day stays predictable。Because plans can change。
   布局：一条全宽云杉色（Spruce）色带，在标准容器内分为三个等宽列，垂直内边距 28px，使用暖 Paper 文字，桌面端带垂直分隔线。移动端将三行堆叠，间距 16px，无分隔线。
   动效：进入时简单 400ms 显现；无循环动效。
3. **交互式报价工作室** — 区块眉题：YOUR MOVE, ITEMIZED。H2：Build an estimate you can actually use。引言：Start with a home size, fine-tune each room, then add the distance. The estimate updates as you go。工作室在一个连续面板中包含三个工作阶段，而非独立路由。阶段 1 房屋：重复四张搬家规模卡片，带简短标签 Studio / Up to 400 sq ft、1 bedroom / 400–700 sq ft、2 bedrooms / 700–1,100 sq ft、3+ bedrooms / 1,100+ sq ft。显示说明：Presets are a starting point; every item below is editable。阶段 2 物品清单：房间标签页 Living room、Bedroom、Kitchen 和 Office，每个标签页带实时立方英尺小计。使用带可见数量和 aria-label 的加/减步进器。精确物品体积（立方英尺）：Living room — sofa 50、armchair 20、coffee table 15、TV and stand 20、standard box 每个 5。Bedroom — queen bed 70、dresser 35、nightstand 10、wardrobe box 每个 8。Kitchen — dining table 40、dining chair 每个 8、kitchen box 每个 6、microwave 5。Office — desk 35、office chair 12、bookcase 30、file box 每个 5。包含 Reset room 和 Apply preset 按钮，仅在对非空房间执行重置时显示确认。按上述物品顺序的精确预设数量：Studio = Living [0,1,1,1,4]、Bedroom [1,1,1,3]、Kitchen [0,0,4,1]、Office [0,0,0,1]。1 bedroom = Living [1,0,1,1,6]、Bedroom [1,1,2,4]、Kitchen [1,2,6,1]、Office [0,0,1,2]。2 bedrooms = Living [1,1,1,1,8]、Bedroom [2,2,2,6]、Kitchen [1,4,8,1]、Office [1,1,1,3]。3+ bedrooms = Living [1,2,1,1,12]、Bedroom [3,3,4,9]、Kitchen [1,6,12,1]、Office [1,2,2,5]。阶段 3 距离：一个数字输入框和同步的范围滑块，用于单程英里数，最小值 1，最大值 500，默认 18。标签：Approximate distance between addresses。辅助说明：Not sure? A rough mileage is enough for this planning range。桌面端三个阶段以堆叠区块形式保持可见，带锚定阶段编号 01、02、03；移动端可折叠，但第一个未完成阶段默认展开。
   布局：报价工作室为 12 列网格：8 列用于控件，4 列用于粘性估价账本，账本在区块标题下方 24px 处对齐。控件位于一个 Paper 20px 圆角面板中，阶段之间用细线（Hairline）分隔。搬家规模为 2×2 网格。物品清单行包含物品名称、每件立方英尺数和 132px 步进器；交替行无背景色。距离输入框宽 140px，旁边是弹性滑块。账本为云杉色（Spruce），Paper 文字，粘性定位在顶部 96px。在 390px 宽度下使用单列、20px 内边距、全宽房间标签页以 2×2 网格排列，以及一个固定底部估价条，显示价格范围加 View breakdown；它展开为底部抽屉，且绝不覆盖聚焦的输入框。
   动效：切换房间时，物品行在 180ms 内交叉淡入淡出。按下步进器时给出 120ms 缩放反馈，并立即更新总计。阶段锚点平滑滚动，标题不被粘性页眉遮挡。遵循减少动态效果偏好。
4. **实时估价账本与计算** — 这是报价工作室内的粘性右侧账本，而非独立的单独区块。标签：YOUR PLANNING RANGE。显示一个大型动画低–高 USD 范围，然后三行图标：推荐卡车、团队人数和预计团队工时。添加体积和距离行。包含一个 View price breakdown 展开项，显示人工、卡车费和里程。完全用 TypeScript 计算：totalVolume 为数量 × 物品立方英尺之和。卡车：体积 ≤250 时 12 ft，≤500 时 16 ft，≤800 时 20 ft，否则 26 ft。团队：体积 ≤550 时 2 名搬运工，≤850 时 3 名，否则 4 名。loadHours = max(2, ceil((1.5 + totalVolume / 180) × 2) / 2)。driveHours = max(0.5, ceil((distance / 30) × 2) / 2)。crewHours = loadHours + driveHours。crewRate = 数值 [BASE_RATE] + (crewSize − 2) × 45。labor = crewHours × crewRate。卡车费按尺寸：$85 / $115 / $145 / $185。Mileage = max(0, distance − 15) × 2。Subtotal = labor + truck fee + mileage。Low = ceil(subtotal × 0.90 / 5) × 5；high = ceil(subtotal × 1.15 / 5) × 5。默认 2 bedrooms 和 18 英里时，初始 UI 必须显示 $1,250–$1,595、20 ft truck、3 movers、6.5 hours、640 cu ft。明细：labor $1,235、truck $145、mileage $6。明细下方写：Planning range adjusts the subtotal by −10% / +15%。CTA：Request this move。免责声明：This is an illustrative estimate, not a binding quote. A coordinator confirms access, timing, and final pricing。
   布局：使用深色 20px 圆角卡片，内边距 28px。价格范围使用 DM Sans 700，桌面端 36px、移动端 30px，使用表格数字。分隔线为 Paper 18% 不透明度。所有账本内容保持正常流，使长数值永不重叠。展开的移动端抽屉使用相同组件、关闭按钮、焦点陷阱和 Escape 关闭。
   动效：更新值在 280ms 内交叉淡入淡出，表格数字对齐稳定。明细以测量高度过渡展开。减少动态效果偏好下显示即时值和即时展开。
5. **定价说明** — 将此区块锚定为 pricing。眉题：NO MYSTERY LINE ITEMS。H2：The math stays on the table。三张编号卡片：01 Your inventory — We use cubic feet to understand the load, not just the number of bedrooms。02 Your route — Mileage adds drive time and a $2 per-mile charge after the first 15 miles。03 Your crew — Two movers start at $[BASE_RATE] per hour; larger loads add hands rather than hiding labor in a flat fee。添加一条低调说明：Stairs, specialty items, and packing materials are reviewed before a final quote。
   布局：三张等宽 Paper 卡片排成一行，带大号杏色（apricot）01/02/03 数字，间距 24px，内边距 32px。移动端堆叠。此区块保持紧凑，桌面端高度约 480px（含标题）。
   动效：卡片以 70ms 错峰显现；悬停时卡片仅上浮 3px，减少动态效果偏好和触摸设备下禁用。
6. **包含的搬家关怀** — 使用 packing-care.webp，alt：Hands wrapping a ceramic bowl beside plain moving boxes。眉题：CARE IN EVERY CARRY。H2：The things we bring, besides the truck。四行清单，带 Lucide Check 图标：Furniture padding and stretch wrap；Floor and doorway protection；Room-by-room unloading labels；One confirmation call before moving day。辅助文案：Your coordinator reviews access, fragile pieces, and timing before the crew arrives。小提示：Have a piano, safe, or oversized piece? Mention it in your request so the estimate can be reviewed properly。
   布局：两个等宽列，间距 64px：左侧 4:3 照片，右侧文案。清单行使用细线（Hairline）分隔，垂直内边距 18px。移动端将图片放在标题之后、清单之前，图片上无浮动文字。
   动效：图片和清单从相反的 12px 偏移处显现，历时 500ms；无视差。
7. **客户评价** — 眉题：NOTES FROM RECENT MOVES。H2：Less guessing makes for calmer moving days。显示三条虚构的五星评价，每条带五个小型 Lucide Star 图标，无头像或外部评价徽章。评价 1：The inventory list caught two bookcases I would have forgotten. The crew arrived inside the window and the final price matched the confirmed quote. — Maya R., two-bedroom move。评价 2：I could adjust the boxes myself instead of explaining everything over the phone. Booking the follow-up was straightforward. — Elena T., apartment move。评价 3：They labeled every carton by room and protected the shared hallway. Our small office was ready to unpack that afternoon. — Jordan Lee, office relocation。页脚注：Customer names and reviews shown here are invented sample content for this demo。
   布局：一个 Sage Wash 区块，标题左对齐，下方三张 Paper 评价卡片等宽排列。卡片使用 20px 圆角和 28px 内边距；引用文本为 Fraunces 500、23px、行高 1.35。移动端使用垂直堆叠，绝不使用裁切的水平轮播。
   动效：仅单次错峰显现；无自动轮播评价。
8. **服务区域与工作时间** — 使用 moving-truck.webp 作为宽幅摄影横幅，alt：An unmarked moving truck outside a quiet residential building。叠加一个云杉色（Spruce）面板，而非将文字直接放在照片的繁忙区域。眉题：CLOSE TO HOME。H2：Moving across [SERVICE_AREA]。文案：From walk-ups to family homes and compact offices, we plan the route, access, and crew before moving day。详情：Dispatch area — [SERVICE_AREA]。Office visits — By appointment。Hours — Monday–Saturday 7:00 AM–7:00 PM; Sunday 9:00 AM–4:00 PM。Phone — [PHONE]。CTA：Check your address with us，滚动到预订表单。
   布局：在标准容器内使用 16:9 图片区域，28px 圆角。放置一个 440px 宽的云杉色（Spruce）信息面板，与左边缘重叠 32px 并垂直居中；保持卡车在右侧可见。移动端将图片设为 4:3，面板放在其下方，无重叠。
   动效：进入时图片淡入，信息面板滑动 16px；无持续动效。
9. **常见问题** — H2：Before you put us on the calendar。使用五个无障碍手风琴项，第一项初始展开：Is the instant range a final price? — No. It is a planning estimate based on your inventory and mileage. A coordinator confirms access, specialty items, dates, and final pricing。Why does my home size not set the price by itself? — Two homes with the same bedroom count can hold very different loads, so the editable inventory gives a better starting point。What is included in the hourly rate? — The crew, standard moving equipment, furniture padding, and basic floor protection. Truck and mileage appear separately in the estimate。Can I change my inventory after requesting a booking? — Yes. Bring the updated list to your confirmation call so the coordinator can revise the plan。How far ahead should I book? — Two to three weeks is helpful for the widest choice of arrival windows, but short-notice requests are welcome。
   布局：两列区块，4 列粘性标题和 8 列手风琴。每个问题为全宽按钮，带 Plus/Minus 图标、aria-expanded 和细线（Hairline）底部边框。答案为 DM Sans 17px，行高 1.65。移动端使用单列并移除粘性定位。
   动效：答案高度和透明度在 200ms 内动画；展开时 Plus 图标旋转 45 度。减少动态效果偏好下即时显示。
10. **预订请求** — 锚定为 booking。眉题：READY WHEN YOU ARE。H2：Turn your estimate into a moving plan。文案：Share a few details and keep a copy of your current inventory and planning range. The form carries forward total volume, distance, truck, crew, hours, and price range into a read-only estimate summary。字段：Full name、Email、Phone、Preferred move date、Starting address or ZIP、Destination address or ZIP，以及 Notes about access or special items。标记 Full name、Email、Starting address or ZIP 和 Destination address or ZIP 为必填。使用内联验证、autocomplete 属性和原生日期输入。同意复选框：I understand this range is an estimate and the final quote will be confirmed by a coordinator。提交按钮：Save my booking request。由于这是静态演示，验证通过提交后将表单和估价快照保存到 localStorage，并显示页内确认：Request saved on this device. No message was sent. Your estimate is ready to review with [BRAND] at [PHONE]。包含 Start a new request，仅清除预订表单而保留物品清单。在表单旁使用 settled-home.webp，alt：A calm furnished room with unpacked chairs and plain moving boxes。
   布局：一个 12 列 Paper 面板，5 列图片和 7 列表单。图片覆盖整个左侧高度，左侧圆角。表单字段为两列：姓名/邮箱、电话/日期、起点/终点，Notes 全宽。估价摘要位于字段上方，作为 Sage Wash 条带。在 390px 宽度下堆叠图片、摘要和表单；每个字段为单列，控件最小高度 48px。
   动效：单次显现，然后以 240ms 淡入将表单替换为确认。提交后聚焦确认标题，绝不显示虚假的服务器成功状态。
11. **页脚** — 使用云杉色（Spruce）页脚，包含 [BRAND]、短句 Careful moving for [AUDIENCE]，以及锚点链接 Estimate、Reviews、Service area、FAQ 和 Booking。显示 [PHONE] 和 Serving [SERVICE_AREA]。底部行：Illustrative prices and sample business content。以不显眼的方式包含可选的 [CREDIT] 链接；不要在其他任何地方提及 VibeFather。
   布局：标准容器，大号品牌行位于 3 列链接/详情网格上方，顶部边框为细线（Hairline）等效的半透明边框。桌面端垂直内边距 56px，移动端 40px。小屏幕上堆叠，链接 16px 可读，点击目标至少 44px。
   动效：无需显现；仅简单的链接颜色和下划线过渡。

## 资源（Assets）
- 图片（image）：将 https://media.vibefather.ai/assets/7f1950a3-398e-46e0-aae7-420fc83a2e16/hero-move.webp 下载到 public/images/hero-move.webp。替代文本（Alt）：搬运工在阳光充足的公寓中搬运素色纸箱。用作大幅主视觉照片（hero photograph）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录路径、确切源 URL、作者及本署名。
- 图片（image）：将 https://media.vibefather.ai/assets/7f1950a3-398e-46e0-aae7-420fc83a2e16/packing-care.webp 下载到 public/images/packing-care.webp。替代文本（Alt）：双手在素色搬家纸箱旁包裹一只陶瓷碗。用于 Included moving care。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录。
- 图片（image）：将 https://media.vibefather.ai/assets/7f1950a3-398e-46e0-aae7-420fc83a2e16/moving-truck.webp 下载到 public/images/moving-truck.webp。替代文本（Alt）：一辆无标识搬家卡车停在安静的住宅楼外。用于 Service area and working hours。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录。
- 图片（image）：将 https://media.vibefather.ai/assets/7f1950a3-398e-46e0-aae7-420fc83a2e16/settled-home.webp 下载到 public/images/settled-home.webp。替代文本（Alt）：一间宁静的带家具房间，摆放着未拆封的椅子和素色搬家纸箱。用于预订请求旁。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录。
- 图标（icon）：仅使用本地打包的 lucide-react 图标：ArrowRight、ArrowUpRight、Menu、X、Phone、ShieldCheck、PackageCheck、CalendarCheck、Plus、Minus、Check、Truck、Users、Clock、MapPin、Star、ChevronDown、RotateCcw 和 ClipboardCheck。不要导入品牌图标。在 ASSETS.md 中列出 lucide-react 及其 ISC 许可证。
- 字体（font）：通过 @fontsource-variable/fraunces 和 @fontsource-variable/dm-sans 自托管 Fraunces Variable 和 DM Sans Variable。在本地导入所需字重，不包含任何 Google Fonts URL，并在 ASSETS.md 中列出这两个包及其 OFL-1.1 许可证。

## 禁止事项
- 不得复制任何真实搬家公司的名称、身份、标志、口号、配色方案、文案、评价、照片、插图或代码。公司及客户内容须保持虚构，当变量变化时重写默认特定内容。
- 任何素材中不得出现品牌制服、品牌车辆、可识别的卡车车型、可见的面部、可识别的人物、真实人物的肖像、第三方标志或水印。
- 不得使用图库照片服务、运行时外部图片 URL、占位图服务、Google Images、Unsplash、Pexels、Pixabay、CC BY-NC 或 CC BY-SA 素材。仅使用指定的四张生成图片和本地打包的 Lucide 图标。
- 不得从 CDN 加载字体、脚本、样式、图标、图片、分析工具或任何其他运行时资源。自托管指定的 Fontsource 包，并保持所有资源本地化。
- 不得添加后端、数据库、身份验证、API 路由、无服务器函数、外部表单服务、真实提交、跟踪或第三方 API。计算、持久化、验证和预订确认必须保持在客户端，并且必须声明未发送任何消息。
- 不得将即时报价范围呈现为具有约束力的报价、保证价格或已确认的预订。保持估算免责声明和协调员审核步骤可见。
- 不得用随机价格或不相关公式替换指定的计算器。每个控件都必须有效，默认的 2 卧室/18 英里状态必须产生 $1,250–$1,595，零数量库存必须保持有效并符合公式的最小值。
- 不得使用商业字体、受限组件库源码、复制的 Aceternity 或 Tailwind Plus 代码，或超出许可范围的依赖项。
- 不得在 dist 中创建额外页面、裸目录链接、源映射或复制的 src 文件。使用带锚点分区的 index.html、相对资源路径、压缩的生产输出，且 dist 总大小低于 20 MB。
- 不得仅以排版作为主视觉、使用自动播放轮播、过度视差、水平卡片裁切、阻碍阅读或忽略 prefers-reduced-motion 的动效。
- 不得留下控制台错误、无效按钮、无法访问的披露内容、低对比度辅助文本或水平溢出。验证 1440×900 和 390×844、键盘操作、可见焦点以及 48px 移动端表单目标。
- 不得编写 SEO 元数据、Open Graph 标签、JSON-LD、站点地图、关键词堆砌文案或非英文网站内容。一个简单的 [BRAND] 文档标题和原始 favicon 即可。

---
— Prompt by VibeFather · https://vibefather.ai/t/moving-company-quote-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
