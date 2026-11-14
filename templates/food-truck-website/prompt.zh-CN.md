> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 餐车网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一个精致的单页网站，[BRAND] 是一家位于 [CITY] 的独立 [CUISINE] 餐车。将一张以食欲为导向的编辑式主视觉图与可交互的七日地点日程表及原创 SVG 街区地图搭配，菜单以今日 [SIGNATURE_DISH] 特餐为主打，并提供客户端餐饮咨询。将所有文案、全部日程与菜单数据、图片路径、链接和替代文本保留在 src/content.ts 中；当变量值变化时，连贯地重写默认内容，同时保持相同的结构和交互。

- 受众：正在决定现在去哪吃饭的本地上班族、市集访客和街区常客，以及比较餐车餐饮服务的派对主办方和职场活动组织者。
- 目标：回答餐车本周将在哪里，让今日餐食和价格易于浏览，并在无需任何后端的情况下将餐饮咨询转化为完整的电子邮件请求。
- 语气：温暖、快捷、大方、直白，带有手绘人行道招牌的活力，而非连锁餐厅的企业感。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、vite（MIT）、tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource-variable/bricolage-grotesque（OFL）、@fontsource-variable/dm-sans（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 将 Vite base 设为 './'，禁用 source maps，将生产文件输出到 dist/，并且绝不将 src/ 复制到 dist/ 中。
  - 在本地导入可变字体 Bricolage Grotesque 和 DM Sans 包；不发起远程字体请求。
  - 将所有导航标签、文案、菜品、价格、日程条目、图片路径、社交 URL 和替代文本集中到 src/content.ts 中，从六个变量初始化，并在其值变化时进行连贯重写。
  - 通过 motion/react 使用 Motion 实现显现和小型状态过渡；仅使用 lucide-react 作为界面图标。
  - 使用本地 React 状态实现日程选择、移动端菜单、FAQ 手风琴和餐饮表单验证；周二始终是初始选中的日程日，以确保确定性渲染。
  - 在餐饮表单有效提交后，显示请求摘要和一个指向 [CATERING_EMAIL] 的 Open email draft 链接；不要传输或声称传输该请求。
  - 将街区地图绘制为带有本地标签和图钉的原创内联 SVG；不使用地图瓦片、地理定位、地址查询或外部地图服务。
  - 使用 ./index.html#section-id 作为导航锚点，所有资源使用相对路径，并使用包含 [BRAND] 的纯文档标题以及本地代码绘制的 favicon。

## 变量
- [BRAND] — 餐车名称（默认："Ember & Route"）。一个虚构的两到四个单词的移动餐饮业务名称。
- [CUISINE] — 菜系描述（默认："Sonoran street food"）。一个简短的菜系短语，用于眉题、介绍和故事中。
- [CITY] — 服务城市（默认："Tucson, Arizona"）。主要城市及州或地区；根据它改写街区和地址。
- [SIGNATURE_DISH] — 招牌菜（默认："Mesquite chicken taco"）。在每日特价横幅和第一张菜单卡中展示的菜品。
- [CATERING_EMAIL] — 餐饮邮箱（默认："hola@emberandroute.example"）。仅用于访客发起的邮件草稿的目标地址。
- [SOCIAL_HANDLE] — 社交账号（默认："@emberandroute"）。显示在基于文本的社交链接旁边的账号名。
- [CREDIT] — 在页脚保留一个小型"Template by VibeFather"链接指向 https://vibefather.ai/t/food-truck-website（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 暖纸色（Warm Paper）`#F6EDDA` — 主页面背景，以及深绿色上的浅色文字。
- 炭黑色（Charcoal）`#24231F` — 标题、正文、轮廓线和硬阴影细节。
- 番茄红（Tomato）`#D94F35` — 每日特供强调色、选中图钉和小型编辑亮点。
- 腌黄瓜绿（Pickle Green）`#244C3F` — 位置区块、主按钮和页脚背景。
- 姜黄（Turmeric）`#F2B84B` — 徽章、活动日程标记和小型图形强调色。

### 字体排印
- 展示字体和区块标题：Bricolage Grotesque Variable（OFL），字重 600/700/800
- 正文、导航、表单和标签：DM Sans Variable（OFL），字重 400/500/600/700

### 布局与动效
- 间距：使用 4px 基准单位。内容最大宽度 1440px，移动端边距 24px，桌面端边距 48px。桌面端使用 12 列网格，列间距 24px；区块内边距移动端 72px、桌面端 112px；标签到标题间距 16px；段落到底部操作间距 28–40px。正文行宽控制在 62 个字符，日程行高度至少 72px。
- 圆角：输入框和按钮使用 10px，内容卡片使用 18px，大图框架使用 28px，仅饮食和状态徽章使用全圆角胶囊形。主要图片和选中控件加 2px 炭黑色轮廓；5px × 5px 硬阴影仅用于主 CTA，避免嵌套浮动卡片。
- 动效：首次加载时，主视觉眉题、标题、文案和操作按钮从下方 18px 处显现，在 500ms 内以 70ms 错峰依次出现；餐车照片从 scale 1.035 过渡到 1，持续 700ms。
- 动效：每个主要区块使用 Motion 的 whileInView 只显现一次，透明度从 0 到 1，上移 24px，持续 450ms；如果观察器或 JavaScript 动效失效，内容必须保持可见。
- 动效：选中某个日程日时，其详情文字在 160ms 内交叉淡入淡出，对应的 SVG 图钉从 0.85 增长到 1，使用 180ms 弹簧动画；地图绝不平移或缩放。
- 动效：悬停时，主按钮向硬阴影方向移动 2px，箭头图标右移 3px；FAQ 箭头旋转 180 度，移动端导航在 180ms 内淡入淡出。
- 动效：在 prefers-reduced-motion 下，移除显现、平滑滚动、缩放和非必要过渡，使每个状态立即呈现。
- 图像：使用恰好六张本地打包的 AI 生成纪实照片，带有温暖的午后沙漠光线、触感表面，以及协调的奶油色、赤陶色、绿色和姜黄色调。主视觉是一张宽幅环境照片，展示一辆原创的无品牌餐车，而不是面部特写；菜品照片承载菜单内容，裁剪的手部或餐饮摆台增加人的尺度，但不出现可识别的面孔。地图绘制为原创内联 SVG，带有略微不规则的双线道路、六个编号图钉、微小街区形状和清晰可读的街区标签。不得替换为远程图库、通用彩色占位符、食物插画或额外摄影。

## 页面与区块
### [BRAND] — [CITY] 的 [CUISINE] 餐车（`index.html`）
1. **页眉与主视觉区** — 吸顶页眉，包含纯文字 [BRAND] 字标、Find the truck、Menu、Catering 和 Our story 链接，以及一个 This week's stops 按钮。移动端菜单在紧凑抽屉中展示相同的链接。主视觉眉题：'[CUISINE] · [CITY]'。H1：'Big flavor. Always on the move.'。辅助文案：'[BRAND] serves a short menu from a little truck with a weekly route and plenty of room for your next gathering.'。主 CTA：'Find this week's stop'；次级 CTA：'See the menu'。在餐车图片左下方放置一张 Warm Paper（暖纸色）下一站卡片：'Next stop'、'Tuesday · Cinder Market'、'11:30 AM–2:00 PM'、'418 Cinder Lane'。添加小字行 'Walk-ups welcome · No preorders needed'。使用 hero-truck.webp 及其指定的 alt 文本。
   布局：页眉高 76px，Warm Paper 背景，底部为 1px Charcoal（炭黑）边框。主视觉区采用五列放文案、七列放 4:3 图片，居中对齐，间距 40px；桌面端 H1 为 clamp(56px, 6.2vw, 92px)，行高 0.94。在桌面端首个 900px 视口内保留完整标题、CTA 和大图。移动端上，文案在前，随后是全宽 4:3 图片，下一站卡片移到图片下方，而不是与图片边缘重叠。
   动效：使用指定的主视觉入场错峰和图片落定效果。吸顶页眉仅在滚动 24px 后获得微妙的 4px 底部阴影；移动端抽屉在 180ms 内打开和关闭。
2. **每日特供横幅** — 一条紧凑的横带，标注为 'Today's special'，以 [SIGNATURE_DISH] 开头，默认描述为 'citrus slaw, charred scallion, and smoky red salsa'，价格 $5.50。结尾为 'While it lasts' 和文字链接 'See the full menu'。当变量变化时，在 src/content.ts 中重写菜品描述和合适的价格，而不是保留默认的 taco 文案。
   布局：全宽 Pickle Green（腌黄瓜绿）横带，Warm Paper 文字。在标准容器内，桌面端使用四列行：小号 Turmeric（姜黄）标签、弹性的菜品与描述、价格、箭头链接。移动端堆叠为两行紧凑布局，无水平滚动。
   动效：无；这是稳定的工具性横带，不是跑马灯。
3. **每周日程与插画地图** — 标题：'Where to find us this week'。引言：'Seven days, six stops, one little truck. Pick a day to see where we are parking.'。默认日程：Monday — 'Closed for prep'；Tuesday — 'Cinder Market'、'418 Cinder Lane'、'11:30 AM–2:00 PM'；Wednesday — 'Juniper Yard'、'87 Juniper Street'、'5:00–9:00 PM'；Thursday — 'Copper Foundry Lot'、'220 Copper Row'、'11:30 AM–2:00 PM'；Friday — 'Lantern Grove'、'15 Lantern Walk'、'5:00–10:00 PM'；Saturday — 'Makers’ Meadow'、'640 Meadow Loop'、'10:00 AM–3:00 PM'；Sunday — 'Agave Park'、'92 Agave Avenue'、'11:00 AM–4:00 PM'。初始选中 Tuesday。选择某个营业日会更新活动行、编号地图图钉和详情面板，包含场地、完整的虚构地址、营业时间和 'Walk-ups welcome'。Monday 没有图钉，其详情显示 'We are restocking and making salsa. See you Tuesday.'。原始地图展示虚构的 Cinder、Juniper、Copper、Lantern、Meadow 和 Agave 街区，由简单道路连接；它是示意性的，不是地理导航。
   布局：使用 Pickle Green 区块，五列日程和七列地图。每一天是一个全宽按钮，包含星期、场地和营业时间；选中行为 Warm Paper 背景、Charcoal 文字和 Turmeric 左侧标记，未选中行有 1px Warm Paper 30% 透明度边框。地图置于 Warm Paper 28px 边框中，SVG 宽高比 4:3，下方有紧凑的详情条。移动端上，全部七行堆叠在地图之前，每个控件至少 48px 高。
   动效：按指定方式交叉淡入地图详情并弹性动画选中图钉。仅对状态变化做动画；不要自动轮播日期。
4. **菜单与今日特供** — 眉题：'From the little window'。标题：'A short menu, done right'。引言：'Six things every day, plus two salsas made each morning.'。默认菜品：[SIGNATURE_DISH] — 'citrus slaw, charred scallion, smoky red salsa' — $5.50 — 'Today's special'；'Ancho beef burrito' — 'slow-braised beef, smoky tomato rice, pickled onion' — $13；'Citrus cauliflower burrito' — 'roasted cauliflower, black beans, herb crema' — $12 — 'Vegetarian'；'Charred corn + black bean taco' — 'queso fresco, cilantro, lime' — $5 — 'Vegetarian'；'Smoky tomato rice' — 'toasted cumin and scallion' — $4.50 — 'Vegan'；'Cinnamon churro bites' — 'six pieces with cinnamon sugar' — $6。前三道菜使用 signature-taco.webp、ancho-burrito.webp 和 cauliflower-burrito.webp。包含一条注释：'Ask about today’s vegan crema and gluten-free options.'。当变量变化时，同时重写菜品名称、描述、价格、饮食标签和 alt 文本。
   布局：Warm Paper 背景。以四列区块标签和八列标题开头。前三道菜组成等宽的图片卡片，4:3 照片、18px 边框，价格与菜品名称相对对齐；给招牌卡片一个小号 Tomato（番茄红）徽章。其余三道菜放在单个带边框列表中，桌面端三列，移动端堆叠行。桌面端描述保持两行，不截断内容。
   动效：以 70ms 错峰显示三张照片卡片。悬停时，卡片图片最多上移 4px，并加深其箭头图标；不要创建轮播。
5. **餐车故事与服务详情** — 眉题：'Our story'。标题：'Small truck. Long mornings.'。默认文案：'Mara and Theo Bennett started [BRAND] with one plancha, a borrowed cooler, and a belief that lunch should feel like a break. We still prep in small batches, warm tortillas to order, and write the route on the window every Monday.'。添加三条具体服务详情：'Two salsas made each morning'、'A vegetarian option every day' 和 'Compostable trays and cutlery'。使用 shared-tacos.webp，仅裁剪手部和躯干。将姓名、仪式和食物引用适配到 [BRAND] 和 [CUISINE]，而不是原样保留这些细节。
   布局：两个均衡的列：一张大号 4:3 照片，其右下角后方有 Turmeric 偏移块，以及带三行水平服务详情的文案。列间距 40px，标题保持在 58px 以下。移动端上，将照片放在介绍段落之后、三条详情之前。
   动效：一次克制的区块显现；服务行悬停时高亮其小号 Tomato 数字标记，无布局偏移。
6. **餐饮请求** — 眉题：'Bring the truck to you'。标题：'Your gathering, with a better lunch line.'。引言：'Office lunches, backyard birthdays, and neighborhood parties across [CITY].'。提供两个透明的起点：'Street-side drop-off — from $18 per person — 25-guest minimum, two menu choices, setup included' 和 'Full truck service — from $1,200 — two hours of service, up to 60 guests, travel within 20 miles included'。表单字段：姓名、邮箱、活动日期、宾客人数、服务方式选择、活动地点和饮食备注。CTA：'Prepare catering request'。在浏览器中验证必填字段、有效邮箱、宾客人数大于零以及已选择服务方式。成功后显示完整摘要和 'Your request is ready. Open the email draft to send it to [CATERING_EMAIL]. Nothing has been sent yet.'。Open email draft 操作使用预填的 mailto 链接；包含 Edit details 操作。将 catering-spread.webp 放在报价旁边，而不是作为装饰背景。
   布局：使用 Tomato 区块，Charcoal 文字。顶部五列放报价文案，七列放 16:9 餐饮照片。下方放置横跨八列的 Warm Paper 表单和四列吸顶侧栏，侧栏包含两个价格块和作为虚构业务文案的 'Replies within two business days'。表单控件有可见标签、12px 垂直内边距和内联错误文本。移动端上，移除吸顶行为，按报价、图片、价格、表单的顺序堆叠。
   动效：以 160ms 淡入和 8px 上移显示请求摘要；为屏幕阅读器用户聚焦摘要标题。不要庆祝动画或虚假发送加载指示器。
7. **FAQ 与社交链接** — 标题：'Before you head over'。四个手风琴项：'What happens if it rains?' — 'We post any route change beside the schedule and on our social links. If a stop is canceled, the day is labeled clearly.'；'Can you handle dietary restrictions?' — 'A vegetarian dish is always on the menu. Tell us about allergies in the catering notes so we can discuss ingredients before you book.'；'How far ahead should I book catering?' — 'Two weeks works for most drop-off orders. Full truck service is best booked four to six weeks ahead.'；'Can I order ahead at the truck?' — 'Not right now. Walk up to the window and we will give you a time estimate.' 社交标题：'Follow the route'。显示 [SOCIAL_HANDLE]，并附上标注为 Instagram、TikTok 和 Facebook 的文本链接，每个链接使用通用的 ArrowUpRight 图标，以及来自 src/content.ts 的明确标记的占位 URL；不要嵌入社交信息流或使用品牌图标。
   布局：Warm Paper（暖纸色）上两栏：七栏用于带边框的 FAQ 行，五栏用于 Pickle Green（腌黄瓜绿）社交面板，面板内使用大号 Warm Paper 手柄文本。一次只展开一个 FAQ，初始时第一个展开。在移动端，FAQ 堆叠在社交链接之前，并保持社交 URL 换行而不是溢出。
   动效：手风琴内容以 180ms 不透明度过渡和 chevron 旋转展开；尊重减少动效设置，并保留原生键盘焦点。
8. **页脚** — 重复纯文本 [BRAND] 字标、行 '[CUISINE] · [CITY]'、四个栏目链接、[CATERING_EMAIL] 以及三个社交文本链接。添加一条小号 'Schedule and menu are sample content for this demo' 注释和可选的 [CREDIT] 链接。不要添加指向空页面的法律页面链接。
   布局：Pickle Green 页脚，Warm Paper 文本，顶部有 1px 半透明分隔线。左侧使用大号但完全可见的字标，右侧两个紧凑链接组，底部一行用于联系方式、示例内容注释和 credit。移动端所有组堆叠，间距 24px，不裁切展示字体。
   动效：除链接悬停颜色和箭头移动外，无其他动效。

## 资源

- 图片：生成的 hero 主视觉照片。确切 URL：https://media.vibefather.ai/assets/066f7d22-9180-4156-bfcd-d599ad7ff656/hero-truck.webp。目标路径：public/images/hero-truck.webp。替代文本：'A cream and terracotta food truck open for lunch at a desert market'。用于 Header 和 hero 区域。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录此来源信息和 URL。
- 图片：生成的招牌菜照片。确切 URL：https://media.vibefather.ai/assets/066f7d22-9180-4156-bfcd-d599ad7ff656/signature-taco.webp。目标路径：public/images/signature-taco.webp。替代文本：'Mesquite chicken tacos with citrus slaw and lime on a metal tray'。用于第一张菜单卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录此来源信息和 URL。
- 图片：生成的 burrito 照片。确切 URL：https://media.vibefather.ai/assets/066f7d22-9180-4156-bfcd-d599ad7ff656/ancho-burrito.webp。目标路径：public/images/ancho-burrito.webp。替代文本：'Sliced ancho beef burrito with rice and smoky red salsa'。用于第二张菜单卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录此来源信息和 URL。
- 图片：生成的素食菜品照片。确切 URL：https://media.vibefather.ai/assets/066f7d22-9180-4156-bfcd-d599ad7ff656/cauliflower-burrito.webp。目标路径：public/images/cauliflower-burrito.webp。替代文本：'Citrus cauliflower burrito with herbs and pickled onion'。用于第三张菜单卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录此来源信息和 URL。
- 图片：生成的生活方式照片。确切 URL：https://media.vibefather.ai/assets/066f7d22-9180-4156-bfcd-d599ad7ff656/shared-tacos.webp。目标路径：public/images/shared-tacos.webp。替代文本：'Friends sharing tacos beside a food truck, visible only as cropped hands and torsos'。用于 Truck story 和 service details 区域。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录此来源信息和 URL。
- 图片：生成的餐饮服务照片。确切 URL：https://media.vibefather.ai/assets/066f7d22-9180-4156-bfcd-d599ad7ff656/catering-spread.webp。目标路径：public/images/catering-spread.webp。替代文本：'A taco catering spread arranged on a sunlit outdoor table'。用于 Catering request 区域。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录此来源信息和 URL。
- 图片：在代码中以原创内联 SVG 绘制日程地图和一个简单的 favicon。使用通用的道路、街区、数字和地图标记，不使用地图瓦片、标识或复制的插图。将所有装饰性 SVG 保留在本地，并在 ASSETS.md 中将其列为原创代码。
- 图标：使用 lucide-react（ISC）提供 MapPin、Clock、ArrowUpRight、Menu、X、ChevronDown、Users 和 CalendarDays。使用文本标签而非社交品牌图标，不要添加单独的图标文件。
- 字体：通过 @fontsource-variable/bricolage-grotesque（OFL）自托管 Bricolage Grotesque Variable，并通过 @fontsource-variable/dm-sans（OFL）自托管 DM Sans Variable。在 ASSETS.md 中记录这两个包及其许可证；切勿使用字体 CDN。

## 不要做
- 不要使用现有的餐车名称、标志、车身涂装、口号、照搬的菜单措辞、价格、故事、社交简介或可识别的产品品牌。
- 不要创建吉祥物、模仿标志性插画风格、复制现有地图、使用品牌化的位置图形，或包含可识别的人物肖像。
- 不要在照片内生成或放置可读的文字、字母、数字或标志；保持餐车面板无品牌标识，并使用 HTML 文字字标来呈现 [BRAND]。
- 不要使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务、社交嵌入或远程图库；只使用指定的六张生成图片、原创代码绘制的 SVG 和 Lucide 图标，全部本地打包。
- 不要热链资源、加载 CDN 脚本或样式、使用商业字体，或从 Google Fonts 或任何其他远程主机请求字体。
- 不要添加后端、API 路由、数据库、身份验证、分析、地图服务、地理定位、第三方表单端点、真实下单、支付或实际的表单提交。
- 绝不要声称餐饮请求已发送或已预订；只在本地验证、显示摘要，并让访客打开一封预填好的邮件草稿发送至 [CATERING_EMAIL]。
- 不要在 src/content.ts 之外硬编码默认特定的文案，或在变量要求不同内容时保留 Sonoran 名称、Tucson 地点、taco 描述、账号名或电子邮件地址不变。
- 不要引入额外页面、购物车、结账、菜单轮播、自动播放的日程标签、视差、3D 或连续跑马灯。
- 不要生成 source map、将 src/ 复制到 dist/、使用绝对部署路径、使 dist/ 超过 20 MB，或要求超过单条 npm run build 命令。
- 不要使用裸目录链接、损坏的占位锚点、空的 FAQ 答案、隐藏的焦点指示器或小于 44px 的控件；每个导航链接必须指向 ./index.html 并带有其区块哈希，每个交互控件必须支持键盘和触摸操作。
- 不要在 1440×900 或 390×844 下出现水平溢出、首屏内容被裁剪、移动端卡片重叠、对比度不可读或忽略 prefers-reduced-motion 的动效。
- 不要添加 SEO 元数据、Open Graph 标签、JSON-LD、站点地图工作、分析或关键词堆砌的文案；一个简单的 [BRAND] 标题和本地 favicon 就足够了。
- 除可选的 [CREDIT] 页脚链接外，不要在演示中提及 VibeFather。

---
— Prompt by VibeFather · https://vibefather.ai/t/food-truck-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
