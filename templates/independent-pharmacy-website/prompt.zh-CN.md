> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 独立药房网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一个单页网站，该独立药房由药剂师 [FOUNDER] 在 [CITY] 拥有，[EXPERIENCE] 就在同一个街角。页面风格清新——绿色、白色、橘色——包含续方请求（处方号、自取或配送、时间段）、转处方步骤和本地表单、疫苗与健康服务预约（带时段选项）、基于手绘地图的 ZIP 配送区域查询、额外服务、营业时间及药剂师专线，以及简短 FAQ。照片展示明亮的柜台和朴素标签的货架。任何地方均不提供医疗建议或药物声明；所有数据均为示例。

- 受众：主要：正在考虑离开连锁药房的社区家庭——他们在查看配送、转处方，以及药剂师是否真的与人交流。次要：重新定位服务的配药和健康用品商店。
- 目标：推动访客从“他们到底送不送货”转变为提交续方、转处方或疫苗预约：一键回答配送问题，让续方只需几秒钟，并让电话号码在每个位置都触手可及。
- 语气：柜台式的亲切感——轻快、温暖、带点闲聊。关于药物的问题始终转接给药剂师，绝不交给网页文案。

## 技术栈（Stack）
- 框架（Framework）：Vite 6 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、vite（MIT）、typescript（Apache-2.0）、tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/rubik（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化（Setup）：
  - 创建一个 Vite 6 + React 18 + TypeScript 项目，base 设为 './'，build.outDir 设为 'dist'，build.sourcemap 设为 false。不使用路由、无后端、无服务端代码。
  - 安装 Tailwind CSS 3.4，并配置 PostCSS 和 Autoprefixer。用下方给出的精确调色板扩展主题，fontFamily.display 和 fontFamily.body 均设为 'Rubik'。
  - 通过 @fontsource/rubik 自托管 Rubik 字重 400、500、600、700，在 src/main.tsx 中导入。绝不从 CDN 加载字体。
  - 使用来自 'motion/react' 的 Motion（motion、useInView、useReducedMotion）实现入场显示和状态弹出；每个动画都要以 useReducedMotion() 作为启用条件。
  - 将所有文案和数据放在 src/content.ts 中：品牌字符串、hero 文案、refill 文案、transfer 步骤、带时段标签（slot chips）的服务、配送 ZIP 列表和区域文案、额外服务、营业时间、FAQ 问答对。当变量值变化时，在该文件中重写依赖的文案，并从 [BRAND] 和 [PHONE] 派生存储键和 tel: 链接，确保不残留默认品牌痕迹。
  - Refill 请求，严格如下：Rx 编号输入框（占位符 'RX-004821'，基本模式 RX-######）、你的姓名、自取或配送的分段控件、时间段标签（Morning 9–12 / Afternoon 12–4 / Evening 4–7）；提交时进行内联校验，并显示成功提示 'Request sent — we'll text when it's ready'，同时将该 refill 添加到 'My refills'（[BRAND_SLUG]-refills 下的本地列表，显示 Rx 编号、方式、时间段和一个 'Requested' 标签——演示状态，绝不自动推进，并附注 'This demo list lives in your browser only'）。
  - 配送检查器，严格如下：一个 ZIP 输入框（5 位数字），对照虚构的区域内列表 ['55501','55502','55503','55504','55505','55506','55507','55508'] 进行检查；区域内 → 绿色成功提示 'Yes — same-day windows before 4 p.m., seven days'；区域外 → 橘色提示 'Not yet on the van routes — pickup is always ready, and we'll hold it at the counter'；绘制的 SVG 地图在虚构街道上以绿色色块显示该区域，并标出药房位置。
  - Transfer 步骤，严格四步：01 'Bring or call in your current bottles' — 'Names and pharmacy are enough; you don't need the paperwork.'；02 'We call them for you' — 'Usually done the same business day.'；03 'We check stock and insurance' — 'If something needs ordering, you hear it from a person.'；04 'First fill ready, texts thereafter' — 'Enroll in med sync and everything lands on one day.'；最后是一个本地请求表单（姓名、电话、当前药房名称、处方数量标签 1–5+），成功提示为 'Transfer started (demo) — [FOUNDER]'s team calls to confirm details.'
  - 疫苗和服务，严格五项并带时段标签：'Flu shot' — 无需预约或时段；'Shingles' — 时段；'Pneumonia' — 时段；'Travel health consult' — 时段；'Blood pressure check' — 仅无需预约。预约表单：服务选择、时段标签（Morning 9–12 / Midday / Late afternoon）、姓名、电话；成功提示 'Booked (demo) — we text a confirmation.' 页脚免责声明：'We book the service; the pharmacist answers every health question in person or by phone — this site gives no medical advice.'
  - 仅使用以下 lucide-react 图标：Phone、Pill、Truck、Clock、MapPin、CheckCircle2、CalendarCheck、ArrowRight、Menu、X、Heart、Package、ClipboardList、Syringe、Stethoscope、MessageCircle、Search。
  - 将 refill 列表和预约持久化到 localStorage，以 [BRAND_SLUG] 作为命名空间；校验恢复的 JSON，并在数据格式错误时静默恢复。
  - 构建前将五张生成的图片下载到 Assets 中列出的精确 public 路径。在项目根目录创建 ASSETS.md，列出每个文件的路径、来源 URL、作者或生成器以及许可证。
  - 一个纯 <title> 为 [BRAND] 以及一个 favicon（绿色圆角方块，带白色无十字药丸标记）即可；不需要 meta 描述、Open Graph 标签、JSON-LD 或站点地图。

## 变量
- [BRAND] — 药房名称（默认：“Linden Row Pharmacy”）。虚构的药房名称；代码中会据此生成一个药丸标志图形。
- [CITY] — 城市（默认：“Alderwood”）。门店所在地；出现在主视觉区、配送地图和页脚中。
- [FOUNDER] — 店主兼药剂师（默认：“Phuong Tran”）。虚构的药剂师店主，在主视觉区和转让文案中提及。
- [PHONE] — 电话（默认：“(555) 774-8890”）。门店电话；以 tel: 链接形式呈现，仅使用数字。
- [EXPERIENCE] — 年数（默认：“12 years”）。类似 '12 years' 的普通短语；用于主视觉区文案。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/independent-pharmacy-website（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- 药房绿（Pharmacy green）`#14A06F` — 主色：页眉点缀、链接、成功状态、区域地图
- 深绿（Green deep）`#0D7A54` — 深色色带和页脚底色
- 橘橙（Tangerine）`#FF8A3D` — CTA、高亮、区域外提示
- 橘橙浅色（Tangerine tint）`#FFEFE4` — 标签和高亮面板
- 绿色浅色（Green tint）`#E6F6EF` — 信息面板和成功标签
- 白色（White）`#FFFFFF` — 页面底色和卡片
- 墨色（Ink）`#1F2A26` — 标题和正文
- 钢色（Steel）`#5A6A63` — 次要文本
- 细线色（Hairline）`#E3EBE7` — 细线分隔和卡片边框

### 字体排印
- 展示和正文：全部使用：Rubik（OFL），字重 400/500/600/700

### 布局与动效
- 间距：区块之间桌面端 88px / 移动端 60px；区块标题使用 13px 字距加宽的绿色眉题，下方是 Rubik 700 标题，字号为 clamp(28px, 3.2vw, 44px)；卡片内边距 26px，间距 22px。
- 圆角：柜台友好：卡片 14px，标签和输入框 10px，胶囊形 CTA；照片 14px。
- 动效：淡入上升显现（14px，500ms，60ms 交错）通过 useInView 实现，仅一次。
- 动效：续方成功和配送查询结果弹出 1.05×；地图上的区域色块在区块进入时用 400ms 绘制轮廓。
- 动效：所有动效在 prefers-reduced-motion 下立即禁用；无视差、无滚动劫持、无自动播放媒体。
- 图像：来自一次拍摄的明亮药房摄影：白色和绿色相间的现代柜台，干净的白色货架，上面摆放着无标签瓶子和盒子，两张穿白大褂的药剂师肖像（虚构、多样），以及一辆小型绿色配送车——无可读产品标签、无品牌标识、除肖像外无人物。

## 页面与区块
### [BRAND] — [CITY] 的药房（`index.html`）
1. **页眉与首屏** — 页眉（白色 95% 不透明度，带背景模糊，72px）：胶囊形标志（绿色圆角方块配白色胶囊图形）+ [BRAND]，使用 Rubik 700 18px；导航锚点：Refills、Transfers、Vaccines、Delivery、Hours；右侧：电话标签 Phone 图标 + [PHONE]（tel:）和橘色胶囊按钮 'Request a refill'。在 390px 宽度下：标志 + 名称、电话图标按钮、菜单按钮排成一行；锚点收进白色下拉菜单。首屏：左侧文案（第 1–6 列）：绿色眉题 'INDEPENDENT PHARMACY — [CITY]'；H1 使用 Rubik 700 墨色 'The counter where they know your name.'；段落钢灰色 'Pharmacist [FOUNDER] has run this corner for [EXPERIENCE] — refills by text, deliveries by van, and every question answered by a person in a white coat.'；橘色胶囊按钮 'Request a refill'（锚点）和绿色描边胶囊按钮 'Check delivery'（锚点）；标签：'Open till 8 p.m.' · 'Walk-in flu shots' · 'Pet prescriptions too'。右侧（第 7–12 列）：柜台照片置于 14px 边框内，4:3 比例，左下角叠加一张浮动白色卡片：Pill 图标、'Refills ready for pickup: 23'、'Average wait: 9 minutes' 使用 Rubik 700 绿色，12px 钢灰色 'Sample board.'。
   布局：12 列网格；浮动卡片偏移 -18px；移动端先堆叠文案再显示照片。
   动效：照片从 1.03 缩放稳定下来；文案上移 14px，错开 70ms。
2. **续方请求** — 绿色浅底区块，标志性区块。眉题 'REFILLS'（绿色）；标题 'Ten seconds, no portal.' 表单（白色面板，最大宽度 720px）：处方号（必填，占位符 'RX-004821'）、您的姓名（必填）、自取或配送分段控件、时间段标签；绿色胶囊按钮 'Send request'。内联验证（2px 绿色边框，13px 注释），不使用原生弹窗。成功状态：CheckCircle2 绿色，'Request sent — we'll text when it's ready.'，续方请求出现在下方 'My refills' 中（列表卡片：处方号、方式、时间段、'Requested' 标签、12px 注释 'Demo list — lives in this browser only'）。表单下方一条钢灰色链接：'Out of refills? Call [PHONE] — we handle renewals with your prescriber (no web medical advice, ever).'
   布局：桌面端字段行两列；移动端单列，底部内边距 96px 以避开吸底栏。
   动效：成功状态弹出 1.05×；列表行滑入 160ms。
3. **转移您的处方** — 白色区块。眉题 'SWITCH TO US'（绿色）；标题 'Four steps, and we do the calling.' 四张步骤卡片排成一行，带绿色数字：01 'Bring or call in your bottles' — 'Names and your current pharmacy are enough.'；02 'We call them' — 'Usually done the same business day.'；03 'Stock & insurance checked' — 'If something needs ordering, you hear it from a person.'；04 'First fill, then texts' — 'Med sync can land everything on one day.' 转移表单（绿色浅底面板）：姓名（必填）、电话（必填）、当前药房名称（必填）、'How many prescriptions?' 标签（1 / 2–3 / 4–5 / 5+）；橘色胶囊按钮 'Start my transfer'；成功状态 'Transfer started (demo) — [FOUNDER]'s team calls to confirm details.'
   布局：步骤四列并排（900px 以下为 2×2）；表单最大宽度 640px，位于下方。
   动效：步骤上移 14px，错开 70ms；表单成功状态弹出。
4. **疫苗与健康服务** — 绿色浅底区块。眉题 'CLINIC SERVICES'（绿色）；标题 'Slots, not waiting rooms.' 五行服务（白色卡片，细线分隔）：'Flu shot' — 'walk-in or slot · most insurance covers it, we verify before you sit'；'Shingles' — 'slot · two-dose schedules managed for you'；'Pneumonia' — 'slot'；'Travel health consult' — 'slot · destination-specific, bring the itinerary'；'Blood pressure check' — 'walk-in only · free, always'。下方预约表单：服务选择、时间段标签（Morning 9–12 / Midday / Late afternoon）、姓名、电话；绿色胶囊按钮 'Book it'；成功状态 'Booked (demo) — we text a confirmation.' 表单下方 13px 钢灰色免责声明：'We book services; the pharmacist answers every health question in person or by phone. This site gives no medical advice.'
   布局：行最大宽度 720px；预约表单位于旁边或下方（移动端堆叠）。
   动效：行以 60ms 间隔淡入；时间段选中时弹出 1.05×。
5. **配送查询** — 白色区块。眉题 'DELIVERY'（绿色）；标题 'Does the van reach you?' 左侧（5 列）：手绘 SVG 地图——虚构的街道网格，药房为绿色图钉，配送区域为覆盖区域内范围的绿色色块，货车照片作为小卡片叠在地图角落。右侧（7 列）：ZIP 输入框（5 位数字）+ 绿色胶囊按钮 'Check'；区域内结果（绿色浅底面板）：'Yes — same-day windows before 4 p.m., seven days a week.'；区域外（橘色浅底）：'Not yet on the van routes — pickup is always ready, and we'll hold it at the counter.'；一条钢灰色文字：'Sample zone for this demo — call to double-check edges.'
   布局：5/7 列；移动端先堆叠地图再显示查询器；输入框 + 按钮排成一行。
   动效：区域色块轮廓在进入时绘制 400ms；结果面板弹出 1.05×。
6. **额外服务** — 绿色浅底区块。眉题 'ALSO AT THE COUNTER'（绿色）；标题 'The things chains forgot.' 四张卡片：'Med sync' — 'All your prescriptions land on one pickup day each month.'；'Blister packs' — 'Sorted by time of day — a game changer for parents and caregivers.'；'Pet prescriptions' — 'Same pharmacist, smaller patients; we stock the vet favorites generically.'；'Canes, braces & supplies' — 'Fitted at the counter, billed where insurance allows.' 每张卡片配一个图标（Package、ClipboardList、Heart、Stethoscope）。
   布局：四张卡片 2×2（700px 以下为单列）。
   动效：卡片上移 14px，错开 60ms。
7. **营业时间与药剂师专线** — 白色区块，货架照片作为宽幅 14px 横幅。眉题 'HOURS'（绿色）；标题 'Open when the neighborhood needs us.' 营业时间表（两列）：Mon–Fri 8a–8p · Sat 9a–6p · Sun 9a–5p；下方一行：'The pharmacist answers the phone until close — [PHONE] (tel:). After hours, the message line routes emergencies to the on-call partner store.'
   布局：横幅 21:9；营业时间表最大宽度 560px；居中。
   动效：横幅淡入；表格行错开 50ms。
8. **常见问题** — 绿色浅底区块。眉题 'QUICK ANSWERS'（绿色）；标题 'What people ask at the counter.' 六行手风琴：'Do you take my insurance?' — 'Most regional plans, and we verify before filling so nothing surprises you — bring the card once.'；'Generic or brand?' — 'Generic by default where your prescriber allows; we flag any meaningful difference to you, not the other way around.'；'Can you blister-pack my mom's twelve medications?' — 'Yes — sorted by time of day, delivered if you like, reviewed with you every refill.'；'Pets, really?' — 'Really. Vets send them here; we compound where the dose needs it.'；'Delivery?' — 'Eight ZIPs same-day before 4 p.m.; the checker above knows.'；'Do I need an appointment for a flu shot?' — 'Walk in. Slots exist for the planners.'
   布局：手风琴最大宽度 720px；一次只展开一行；44px 点击目标。
   动效：行展开 200ms；箭头旋转。
9. **页脚** — 深绿色区块。第 1 列：胶囊形标志 + [BRAND] Rubik 700 白色；13px #BEE3D3 文字行 '48 Linden Row, [CITY]'、'[PHONE] (tel:)'、'Mon–Fri 8a–8p · Sat 9a–6p · Sun 9a–5p'。第 2 列 'Store'：锚点 Refills、Transfers、Vaccines、Delivery。第 3 列 'Small print'：'Sample site for a template — services, hours and reviews invented'、'No medical advice on this site; ask the pharmacist'，可选的 [CREDIT] 链接使用橘色。移动端吸底栏（768px 以下）：固定底部深绿色 96% + 模糊；橘色胶囊按钮 'Call'（tel:）和白色描边胶囊按钮 'Refill'（锚点），带安全区内边距。
   布局：页脚网格 4/4/4，移动端变为单列；768px 以下 body 底部内边距 80px。
   动效：无。

## 资源
- 图片：柜台（Counter）。将 https://media.vibefather.ai/assets/481b83a8-425a-4e9c-81d7-c637c90c6cdb/hero-counter.webp 下载到 public/images/hero-counter.webp。替代文本（Alt）：'A bright modern pharmacy counter with green accents.' 主视觉锚点。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：货架（Shelves）。将 https://media.vibefather.ai/assets/481b83a8-425a-4e9c-81d7-c637c90c6cdb/shelves.webp 下载到 public/images/shelves.webp。替代文本（Alt）：'Clean white pharmacy shelves with plain-label bottles.' 营业时间横幅。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：药剂师肖像一（Pharmacist portrait one）。将 https://media.vibefather.ai/assets/481b83a8-425a-4e9c-81d7-c637c90c6cdb/pharmacist-1.webp 下载到 public/images/pharmacist-1.webp。替代文本（Alt）：'Portrait of a fictional pharmacist in a white coat at the counter.' 用于处方转移或续方区块旁。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：药剂师肖像二（Pharmacist portrait two）。将 https://media.vibefather.ai/assets/481b83a8-425a-4e9c-81d7-c637c90c6cdb/pharmacist-2.webp 下载到 public/images/pharmacist-2.webp。替代文本（Alt）：'Portrait of a fictional pharmacy technician in a white coat.' 用于诊所服务区块旁。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：配送车（Delivery van）。将 https://media.vibefather.ai/assets/481b83a8-425a-4e9c-81d7-c637c90c6cdb/delivery-van.webp 下载到 public/images/delivery-van.webp。替代文本（Alt）：'A small green pharmacy delivery van at the curb.' 与配送地图重叠。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图标：Lucide（ISC），通过 lucide-react 包引入，仅限 setup 中的图标列表。不得使用其他图标来源。
- 字体：Rubik（OFL），通过 @fontsource/rubik 自托管；不通过 CDN 加载字体。

## 禁止事项
- 页面任何位置都不得出现医疗建议、药物声明、剂量或相互作用指导——所有健康问题都引导至“ask the pharmacist”；免责声明须说明本站不提供医疗建议。
- 文案、占位符或照片中不得出现真实或虚构的药物名称（品牌名或通用名）；Rx 编号为示例格式，药瓶为无标签样式。
- 不得提及真实药房连锁、品牌、保险公司、折扣计划或疫苗生产商；所有内容均为通用且虚构的。
- 照片仅展示柜台、货架、货车和人物肖像——不得出现可读的产品标签、包装文字或品牌标识；肖像为虚构的、多样化的人物。
- 配送区域为虚构街道上的示例——不得使用真实地图瓦片，不得声称真实的 ZIP 与服务对应关系；页面须说明该区域为示例。
- 续方、转移和预约流程均为本地演示，并须明确说明——绝不可暗示会传输至药房系统、处方医生或保险公司。
- 不得出现与真实时钟绑定的日期：时间窗口为相对时间，不得有日历日期，不得有版权年份。
- 表单仅为本地示例：不得提交至任何服务器，不得使用 API，不得使用分析工具。仅持久化到 localStorage，并对恢复的数据进行校验。
- 不得有后端、服务器代码、数据库或认证。静态输出通过单一构建命令生成至 dist/，体积小于 20 MB，Vite 的 base 设为相对路径。
- 仅通过 Fontsource 包自托管字体；绝不加载 Google Fonts、Adobe Fonts 或任何 CDN 样式表或脚本。
- 生产环境不得有 source map，不得将 src/ 复制到 dist/。
- 不得使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务或热链接文件；仅使用五张生成的图片和代码绘制的 SVG 图形。
- 不做 SEO 工作：不得有 meta 描述、Open Graph 标签、JSON-LD、站点地图或关键词堆砌的标题。一个包含 [BRAND] 的普通标题和一个 favicon 即可。
- 不得有滚动劫持、页面视差、自定义光标或自动播放媒体；动效仅限于指定的 reveal、pop、slide 和区域绘制，且均须遵循 prefers-reduced-motion。
- 移动端页头在 390px 下须保持单行，且粘性底栏绝不可遮挡续方表单的提交按钮。
- 由 [BRAND] 和 [PHONE] 构建品牌派生字符串（存储键、tel: 链接），以便替换变量值后不会残留默认品牌痕迹。
- 每个内部链接均为文件名或页内锚点，绝不可为裸目录；站点保持为单个 index.html。

---
— Prompt by VibeFather · https://vibefather.ai/t/independent-pharmacy-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
