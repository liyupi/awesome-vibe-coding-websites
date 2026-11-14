> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 宠物美容与寄养网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一个单页网站。[BRAND] 是 [FOUNDER] 在 [CITY] 开设的美容寄养沙龙，已积累 [EXPERIENCE] 的满意成果。页面明快清爽——白色底色上点缀泡泡糖粉、天空蓝和阳光黄——包含美容价格选择器（宠物类型、体型、毛况 → 从一张可见表格得出价格和时长）、寄养费用计算器（夜数、套房、附加项 → 逐项合计）、一日生活日程、疫苗接种要求、本地保存的宠物档案，以及内联预约流程。照片展示刚做完美容、解剖结构正确的猫狗，置身明亮沙龙中。所有价格、套房和评价均为虚构的示例数据。

- 受众：主要受众：[CITY] 周边那些给每家沙龙都打电话问“中型犬有点打结，多少钱？”的猫狗主人——他们想要一个数字，也想要一个值得信赖的地方。次要受众：重新调整菜单指向的狗狗日托和猫咪专属休息室。
- 目标：推动访客从“多少钱、他们会善待我的宠物吗”走向预约美容或寄养：一次交互就回答价格问题，用日程和要求打消顾虑，再让宠物档案使预约感觉像给朋友发条短信。
- 语气：温暖的美容师聊天口吻：对动物充满关爱，对流程干脆利落，对猫咪的小脾气带点轻松的幽默。绝不甜腻，绝不冷冰冰。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、vite（MIT）、typescript（Apache-2.0）、tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/baloo-2（OFL-1.1）、@fontsource/nunito（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 创建一个 Vite 6 + React 18 + TypeScript 项目，base 为 './'，build.outDir 为 'dist'，build.sourcemap: false。无路由、无后端、无服务器代码。
  - 安装 Tailwind CSS 3.4 及 PostCSS 和 Autoprefixer。使用下方精确的调色板扩展主题，fontFamily.display 为 'Baloo 2'，fontFamily.body 为 'Nunito'。
  - 通过 @fontsource/baloo-2 和 @fontsource/nunito 自托管 Baloo 2 字重 600 和 700 以及 Nunito 字重 400、600、700、800，在 src/main.tsx 中导入。绝不从 CDN 加载字体。
  - 使用来自 'motion/react' 的 Motion（motion、useInView、useReducedMotion）实现显现和计算器补间动画；每个动画都以 useReducedMotion() 为条件。
  - 将所有文案和数据保留在 src/content.ts 中：品牌字符串、主视觉文案、美容价格矩阵（物种 × 尺寸 × 毛型 → 价格和分钟数）、寄养套房和每晚价格、附加服务及价格、一日生活日程、疫苗接种要求、个人资料字段、预订选项、评价。当变量值变化时，在那里重写依赖的文案，并从 [BRAND] 和 [PHONE] 派生存储键和 tel: 链接，确保不残留默认品牌痕迹。
  - 美容价格矩阵，精确为：物种 Dog 和 Cat；尺寸 Small / Medium / Large（猫仅为 Cat，单一尺寸）；毛型 Smooth / Double / Curly / Matted-plus（matted 仅适用于狗）。Dog — Small：$65 / $78 / $85 / $115；Medium：$78 / $92 / $99 / $135；Large：$92 / $108 / $118 / $160。Cat（除 Matted 外的所有毛型）：Smooth $85，Double $98，Curly $110。时长：Small 60 分钟，Medium 75，Large 90，Cat 75；Matted-plus 增加 30 分钟。每个组合的价格和时长都从这一张表派生；脚注为 'Sample prices — matted coats get a kindness check before we quote firm.'
  - 寄养计算器，精确为：按套房的每晚价格 — Cozy Den $48，Run Suite $68，Villa with window $89（每晚，每只宠物）；晚数步进器 1–21（默认 3）；每次寄养的附加服务 — Group playtime $12/天，One-on-one walk $15/天，Going-home bath $42 固定，Bedtime story session $8 固定；总计 = 晚数 × 套房价格 + 按天附加服务 ×（晚数，按天附加服务上限为 14）+ 固定附加服务，以行列表显示（'3 nights × Villa — $267'、'Group playtime × 3 days — $36'、'Going-home bath — $42'）和总计；脚注 'Sample rates — multi-pet and long-stay discounts quoted at booking.' 输入持久化到 localStorage 的 [BRAND_SLUG]-stay 下。
  - 将爪印标志和小爪印装饰绘制为代码中的内联扁平 SVG — 少量使用（标志、区块眉标、日程条）；不使用剪贴画爪印照片。
  - 宠物个人资料表单（宠物名字、物种选项 Dog/Cat、尺寸选项、毛型选项、怪癖文本区域，如 'hates the dryer, loves the peanut butter spoon'）保存到 localStorage 的 [BRAND_SLUG]-pet-profile 下，并在预订表单上显示为选项标签（'Booking for: Biscuit · Medium · curly ×'，带一个 X 用于分离和一个 'Edit profile' 链接）。
  - 预订：服务分段控件（Groom / Boarding stay / Daycare day），价格选择器或寄养计算器结果可附加，首选时间窗口选项（Morning drop-off / Midday / Late afternoon），姓名 + 电话及内联验证，成功卡片 'Biscuit's on the book — we text a confirmation. This demo stores the booking in this browser only.' 持久化在 [BRAND_SLUG]-booking 下。
  - 仅使用这些 lucide-react 图标：Phone、Dog、Cat、Scissors、Bath、Moon、Sun、Clock、CheckCircle2、Star、MapPin、ChevronRight、ArrowRight、Menu、X、Heart、ShieldCheck、Sparkles、Users、BedDouble。
  - 将选择器状态、寄养输入、宠物个人资料和预订持久化到 localStorage，以 [BRAND_SLUG] 为命名空间；验证恢复的 JSON 并从格式错误的数据中静默恢复。
  - 在构建前将六张生成的图片下载到 Assets 中列出的精确公共路径。在项目根目录创建 ASSETS.md，列出每个文件的路径、源 URL、作者或生成器以及许可证。
  - 一个纯 <title> 为 [BRAND] 和一个 favicon（带白色爪印的泡泡糖圆圈）就足够了；不需要 meta 描述、Open Graph 标签、JSON-LD 或站点地图。

## 变量
- [BRAND] — 商家名称（默认："Biscuit & Bubbles Salon"）。虚构的美容沙龙名称；爪形标志在代码中由此派生。
- [CITY] — 城市（默认："Maplewood"）。沙龙所在地；出现在主视觉区、营业时间和页脚中。
- [FOUNDER] — 店主（默认："Nell Faraday"）。虚构的美容师兼店主，在主视觉区和关于文案中提及。
- [PHONE] — 电话（默认："(555) 719-4420"）。沙龙电话；以 tel: 链接形式呈现，仅使用数字。
- [EXPERIENCE] — 年数（默认："11 years"）。如 '11 years' 这样的普通短语；用于主视觉区文案。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/pet-grooming-and-boarding-website（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值撰写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- 泡泡糖粉（Bubblegum）`#FF7EB6` — 主强调色：CTA、美容区块、品牌标志
- 泡泡糖粉浅色调（Bubblegum tint）`#FFEDF5` — 标签和突出面板
- 天空蓝（Sky）`#5EC2FF` — 寄养区块、信息强调、链接
- 天空蓝浅色调（Sky tint）`#EAF6FF` — 信息面板和日程条
- 阳光黄（Sunshine）`#FFD84D` — 高亮、标签、日程太阳图标、价格总计
- 阳光黄浅色调（Sunshine tint）`#FFF7D9` — 提示面板
- 白色（White）`#FFFFFF` — 页面底色和卡片
- 云灰（Cloud）`#F7F9FB` — 交替浅色带
- 墨色（Ink）`#2B2733` — 标题和正文
- 钢灰（Steel）`#6A6575` — 次要文本
- 细线色（Hairline）`#EAE6EF` — 细线分隔和卡片边框

### 字体排印
- 展示字体：标题、价格、总计：Baloo 2（OFL），字重 600/700
- 正文字体：段落、控件、日程：Nunito（OFL），字重 400/600/700/800

### 布局与动效
- 间距：桌面端区块间距 88px / 移动端 60px；区块标题使用 13px 字距的泡泡糖粉（寄养区块用天空蓝）眉题，下方为 Baloo 2 700 标题，字号 clamp(28px, 3.2vw, 44px)；卡片内边距 26px，间距 22px。
- 圆角：在保持成人感的前提下最大化亲和力：卡片 18px，标签和输入框 12px，胶囊形 CTA；照片 18px。
- 动效：通过 useInView 实现淡入上移动画（14px，500ms，60ms 交错），仅触发一次。
- 动效：价格选择器和住宿计算器的输出以 200ms 补间过渡；日程条的太阳图标在区块进入时移动 8°。
- 动效：个人资料和预订标签在附加时弹跳 1.05×；成功勾选弹跳 1.15×。
- 动效：所有动效在 prefers-reduced-motion 下立即禁用；无视差、无滚动劫持、无自动播放媒体。
- 图像：来自同一次拍摄的明亮沙龙摄影：刚美容过的狗和猫（解剖结构正确、毛茸茸且健康）在白色美容台上和阳光充足的套间里，整洁的洗浴站配有泡泡，以及沙龙的临街橱窗——不出现人脸、不出现品牌标识、不出现痛苦的动物，每只动物看起来都平静且得到妥善照料。

## 页面与区块
### [BRAND] — [CITY] 的宠物美容与寄养（`index.html`）
1. **页眉与主视觉区** — 页眉（白色 94% 不透明度，带背景模糊，72px）：爪印标志（泡泡糖粉色圆形配白色爪印）+ [BRAND]，使用 Baloo 2 700 18px；导航锚点：Grooming、Boarding、A day here、Requirements、Book；右侧：电话标签 Phone 图标 + [PHONE]（tel:）和泡泡糖粉色胶囊按钮 'Book a visit'。在 390px 宽度下：标志 + 名称、电话图标按钮、菜单按钮排成一行；锚点收进白色下拉菜单。主视觉区：云朵地面；左侧文案（第 1–6 列）：天蓝色眉标 'GROOMING · BOARDING · DAYCARE — [CITY]'；H1 使用 Baloo 2 700 墨色 'Go home fluffy. Stay here happy.'；段落使用钢灰色 '[FOUNDER] and four groomers run the gentlest tables in town — [EXPERIENCE] of patient scissor work, honest prices published, and boarding suites with actual windows.'；泡泡糖粉色胶囊按钮 'Price my groom'（锚点）和天蓝色描边胶囊按钮 'Price a boarding stay'（锚点）；标签：'Cats Tuesdays & Thursdays' · 'Same-week grooms' · 'Report cards every stay'。右侧（第 7–12 列）：刚美容完的狗狗照片，放在 18px 边框的 4:3 画框中，左下角叠加一张悬浮白色卡片：Sparkles 图标、'Today: 6 grooms, 4 boarders'、'Next opening: Thursday 10:20' 使用 Baloo 2 700 泡泡糖粉色、12px 钢灰色 'Sample board.'
   布局：12 列网格；悬浮卡片偏移 -18px；移动端先堆叠文案再显示照片。
   动效：照片从 1.03 缩放稳定下来；文案上浮 14px，错开 70ms。
2. **美容价格选择器** — 白色区块，第一个工具。眉标 'GROOMING PRICES'（泡泡糖粉色）；标题 'The number, before the phone call.' 控件位于云朵面板中（左侧，6 列）：物种标签（Dog / Cat）；体型标签（Small / Medium / Large — 选择 Cat 时隐藏）；毛型标签（Smooth / Double / Curly / Matted-plus — 猫不显示 Matted-plus，显示时带一个小 Heart 图标和注释 'kindness check first'）。结果卡片（右侧，6 列，泡泡糖粉色浅底）：价格使用 Baloo 2 700 泡泡糖粉色，字号 clamp(36px, 4vw, 52px)，例如 '$92'；时长标签 'about 75 minutes'；包含项目列表（洗澡、吹干、按需修剪、指甲、耳朵）；脚注 12px 钢灰色 'Sample prices — matted coats get a kindness check before we quote firm.'；泡泡糖粉色胶囊按钮 'Book this groom'（锚定表单并附带所选选项）。完整矩阵位于 content.ts 中，选择器状态会持久保存。
   布局：桌面端 6/6 列；移动端堆叠；标签触控目标 44px。
   动效：价格和时长在变更时以 200ms 补间过渡；无布局偏移。
3. **寄养与住宿计算器** — 天蓝色浅底区块，标志性工具。眉标 'BOARDING'（天蓝色）；标题 'Suites with windows. Math with line items.' 左侧（5 列）：三张套房卡片 — 'Cozy Den' $48/晚 'a snug private den with raised bedding'；'Run Suite' $68/晚 'private run + indoor-outdoor access'，标记为 'MOST POPULAR'；'Villa with window' $89/晚 'sunbeam included, squirrel TV optional'。右侧（7 列）为计算器（白色面板）：晚数步进器 1–21，默认 3；附加项开关 — 'Group playtime +$12/day'（Users）、'One-on-one walk +$15/day'（Heart）、'Going-home bath +$42'（Bath）、'Bedtime story +$8'（Moon）；总计使用 Baloo 2 700 阳光色配墨色标签 'Total stay: $345'；明细列表 13px 钢灰色，数值为墨色（'3 nights × Villa — $267'、'Group playtime × 3 days — $36'、'Going-home bath — $42'）；脚注 'Sample rates — multi-pet and long-stay discounts quoted at booking.'；天蓝色胶囊按钮 'Book this stay'。输入会持久保存。
   布局：桌面端 5/7 列；移动端堆叠；套房卡片在左侧堆叠。
   动效：总计以 200ms 补间过渡；附加项行在切换时滑动 8px。
4. **这里的一天** — 白色区块。眉标 'A DAY AT THE SALON'（天蓝色）；标题 'The schedule your dog would write.' 日程条：一条水平太阳弧线（代码绘制的 SVG，进入时太阳图标沿弧线移动）位于六张时间卡片上方 — '7:00 — Wake-up and yard rotation'；'8:30 — Grooming tables start, one dog at a time per groomer'；'12:00 — Nap hour: lights low, classical on, cats unimpressed'；'2:00 — Group playtime for the boarding crew'；'4:30 — Second yard rotation + report cards written'；'6:00 — Dinner and wind-down; late pickup by arrangement'。日程条下方，日常生活照片（猫咪慵懒趴着）作为宽幅 18px 横幅，配 13px 钢灰色说明 'Boarding guests get the same tables the groomers use — everyone knows everyone.'
   布局：移动端六张卡片在滚动吸附行中，桌面端 3×2 网格；下方横幅 21:9。
   动效：太阳图标进入时沿弧线移动一次，历时 1s；卡片错开 60ms。
5. **疫苗接种要求** — 云朵色区块。眉标 'REQUIREMENTS'（天蓝色）；标题 'Papers, please (the friendly kind).' 两张卡片并排：'Dogs' — 清单：'Rabies — current'、'DHPP — current'、'Bordetella — within 12 months'、'A quick meet-and-greet for new boarding dogs'；'Cats' — 清单：'Rabies — current'、'FVRCP — current'、'Front-load carrier (theirs, not ours)'。两张卡片下方有一条阳光色浅底注释：'Snap a photo of the vaccine record at booking — we keep it on file so you never hunt for the folder again. Sample requirements; your vet's schedule wins.'
   布局：两张卡片 6/6（移动端堆叠）；清单项配天蓝色 CheckCircle2。
   动效：勾选标记进入时错开 50ms 弹出。
6. **宠物档案** — 白色区块。眉标 'TELL US ABOUT THEM'（泡泡糖粉色）；标题 'Save a profile, book in one tap.' 表单（云朵面板，最大宽度 680px）：宠物名字（必填）、物种标签、体型标签、毛型标签、'Quirks we should know' 文本域，占位符 'e.g. hates the dryer, loves the peanut butter spoon, must say hi to the front-desk cat'；泡泡糖粉色胶囊按钮 'Save profile'。已保存状态：一张档案标签卡片（爪印图标、'Biscuit · Dog · Medium · curly'、Edit 和 Forget 按钮）以及一行文字 'Lives in this browser only — we never see it until you book.' 预约表单会将该档案显示为可附加的标签。
   布局：标签自动换行；成功后表单切换为标签卡片，上浮 12px。
   动效：保存时爪印弹出至 1.1×；标签卡片上浮 12px。
7. **预约** — 泡泡糖粉色浅底区块。眉标 'BOOK'（泡泡糖粉色）；标题 'Pick a service, attach a pet, done.' 表单（白色面板，最大宽度 720px）：服务分段控件（Groom / Boarding stay / Daycare day）；如果存在选择器结果或宠物档案，顶部显示可附加标签（'Groom: Medium · curly — $92 ×'、'Booking for: Biscuit ×'）；首选时段标签（Morning drop-off / Midday / Late afternoon）；姓名（必填）、电话（必填）、备注可选。泡泡糖粉色胶囊提交按钮 'Send it'。内联验证（2px 泡泡糖粉色边框，13px 注释），无原生弹窗。成功：CheckCircle2 泡泡糖粉色、'Biscuit's on the book.' 使用 Baloo 2 700、'We text a confirmation within office hours — and yes, the report card comes with photos. This demo stores the booking in this browser only.' 以及描边胶囊按钮 'Book another'。持久保存到 localStorage。
   布局：桌面端双列字段行，移动端单列，底部内边距 96px 以避开粘性栏。
   动效：成功状态交叉淡入并上浮 12px；勾选标记弹出至 1.15×。
8. **评价与页脚** — 白色区块。眉标 'FROM THE HUMANS'；标题 'Fluffy results, quoted.' 三张卡片（云朵底色，泡泡糖粉色引号）：五颗泡泡糖粉色星星；16px 墨色引文；13px 钢灰色页脚。'The price picker said $78 for our medium double-coat mutt. The invoice said $78. Revolutionary.' — Dana & Biscuit。'Our cat tolerates exactly one place outside home. It's this one. The window villa was built for her.' — Priya & Miso。'Boarding report card said 'excelled at nap hour.' We booked the next stay before leaving.' — Theo & Waffles。免责声明 12px 钢灰色：'Sample reviews for this demo.' 页脚（墨色底色）：第 1 列 — 爪印标志 + [BRAND] 使用 Baloo 2 700 白色、'212 Alder Court, [CITY]'、'Mon–Sat 8a–6p · cats Tue & Thu'、[PHONE]（tel:）；第 2 列 'Salon'：锚点 Grooming、Boarding、Requirements；第 3 列 'Small print'：'Sample site — prices, suites and reviews invented'，可选的 [CREDIT] 链接使用泡泡糖粉色。移动端粘性栏（768px 以下）：固定底部白色 96% + 模糊；泡泡糖粉色胶囊按钮 'Call'（tel:）和天蓝色描边胶囊按钮 'Book'（锚点），安全区域内边距。
   布局：三张卡片一行（900px 以下单列）；页脚网格 4/4/4，移动端单列；768px 以下 body 底部内边距 80px。
   动效：卡片上浮 14px，错开 80ms。

## 资源

- 图片：刚美容过的狗。下载 https://media.vibefather.ai/assets/27b91602-a514-49ad-82d9-3163145d7521/hero-dog.webp 到 public/images/hero-dog.webp。Alt：'A freshly groomed, fluffy dog on a white salon table.' 主视觉锚点图。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：美容过的猫。下载 https://media.vibefather.ai/assets/27b91602-a514-49ad-82d9-3163145d7521/cat-groomed.webp 到 public/images/cat-groomed.webp。Alt：'A calm, freshly groomed cat in a bright salon.' 一日寄养横幅图。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：洗浴台。下载 https://media.vibefather.ai/assets/27b91602-a514-49ad-82d9-3163145d7521/bath-station.webp 到 public/images/bath-station.webp。Alt：'A tidy pet bathing station with bubbles and warm light.' 美容选择器附近的辅助图片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：寄养套房。下载 https://media.vibefather.ai/assets/27b91602-a514-49ad-82d9-3163145d7521/suite.webp 到 public/images/suite.webp。Alt：'A clean boarding suite with raised bedding and a window.' 寄养区块中的辅助图片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：庭院玩耍。下载 https://media.vibefather.ai/assets/27b91602-a514-49ad-82d9-3163145d7521/yard-play.webp 到 public/images/yard-play.webp。Alt：'A sunny fenced play yard with agility toys.' 日程安排附近的辅助图片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：美容店门面。下载 https://media.vibefather.ai/assets/27b91602-a514-49ad-82d9-3163145d7521/salon-front.webp 到 public/images/salon-front.webp。Alt：'The bright salon storefront with a paw-marked window.' 页脚附近的辅助图片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图标：Lucide（ISC），通过 lucide-react 包引入，仅限 setup 中的图标列表，外加代码绘制的爪印标志。不使用其他图标来源。
- 字体：Baloo 2（OFL）和 Nunito（OFL），通过 @fontsource/baloo-2 和 @fontsource/nunito 自托管；不从 CDN 加载字体。

## 不要做
- 每张照片中的每只动物在解剖结构上都必须正确、健康、平静且得到妥善照料——不得出现畸形的爪子、错误的眼睛、不可能的姿势或痛苦的动物；人物绝不出现在特写中。
- 不得出现真实的宠物美容或寄养品牌、加盟店、产品品牌（洗发水、零食）或其标志；一切均为通用且虚构的。
- 不得作出兽医或医疗声明：疫苗接种文案是纯需求清单，绝非建议；除描述性语言（'gentle'、'patient'）外，不得承诺健康结果。
- 犬业俱乐部品种名称绝不出现在价格档位中；体型保持 Small/Medium/Large，配以通用被毛描述词。
- 所有价格和寄养总计均为标注为示例数据的样本；折扣为 'quoted at booking'，绝不作出承诺。
- 不得出现与真实时钟绑定的日期：预订使用相对时间窗口，日程条使用固定的每日时间点，无日历日期，无版权年份。
- 表单和宠物档案仅为本地样本：不向任何服务器提交，无 API，无分析——档案明确 'lives in this browser only'。持久化到 localStorage 并验证恢复的数据。
- 无后端、服务器代码、数据库或认证。通过单一构建命令在 dist/ 中输出静态产物，小于 20 MB，Vite 的 base 为相对路径。
- 仅通过 Fontsource 包自托管字体；绝不加载 Google Fonts、Adobe Fonts 或任何 CDN 样式表或脚本。
- 生产环境无 source map，且不将 src/ 复制到 dist/。
- 不得使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务或热链接文件；仅使用六张生成的图片和代码绘制的 SVG 艺术。
- 不做 SEO 工作：无 meta 描述、Open Graph 标签、JSON-LD、站点地图或关键词堆砌的标题。一个包含 [BRAND] 的普通标题和一个 favicon 就足够了。
- 单一价格来源：选择器、计算器和文案均派生自 content.ts 表格；绝不硬编码第二份数字副本。
- 无滚动劫持、页面视差、自定义光标或自动播放媒体；动效仅限于指定的显现、补间、弹出、交错卡片和太阳弧，全部遵循 prefers-reduced-motion。
- 在 390px 下保持移动端页头单行，且绝不让粘性底栏遮挡预订表单的提交按钮。
- 从 [BRAND] 和 [PHONE] 构建品牌派生字符串（存储键、tel: 链接），以便替代变量值绝不留下默认品牌残留。
- 每个内部链接都是文件名或页内锚点，绝不是裸目录；网站保持为单个 index.html。

---
— Prompt by VibeFather · https://vibefather.ai/t/pet-grooming-and-boarding-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
