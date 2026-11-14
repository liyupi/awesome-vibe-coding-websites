> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 自助仓储设施网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一个单页网站。[BRAND] 是由经理 [FOUNDER] 在 [CITY] 经营的自助仓储设施，营业时间为 [EXPERIENCE]。页面以按比例绘制的尺寸指南开场（选择你要存放的物品，即可看到用箱体轮廓绘制的单元以及推荐尺寸），随后是可筛选的单元网格、三步预订流程（采用相对入住时间且无需付款）、具体的安全与出入事实、用品商店预告、手绘位置地图和评价。大胆的皇家蓝（royal blue）与向日葵黄（sunflower）配白色；走廊和卷帘门的明亮照片，无可读标识。所有单元、价格和评价均为虚构的示例数据。

- 受众：主要：[CITY] 周边正在比较仓储方案的租户、搬家人士和小企业主——他们不确定自己需要多大尺寸，并且担心在看到单元之前就要付款。次要：房车/船只仓储和邮箱业务，用于改编单元表格。
- 目标：让访客从“我到底需要多大尺寸”转变为持有预订：在一个屏幕内以视觉方式回答尺寸问题，展示感觉真实的月租价格和可用性，然后让他们无需付款即可保留一个单元。
- 语气：欢快的柜台英语——平实、有帮助、对搬家的混乱略带幽默。数字清晰可见，没有小字陷阱。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、vite（MIT）、typescript（Apache-2.0）、tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/sora（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 创建一个 Vite 6 + React 18 + TypeScript 项目，base 为 './'，build.outDir 为 'dist'，build.sourcemap: false。无路由、无后端、无服务器代码。
  - 安装 Tailwind CSS 3.4 及 PostCSS 和 Autoprefixer。使用下方精确的调色板扩展主题，fontFamily.display 和 fontFamily.body 均为 'Sora'。
  - 通过 @fontsource/sora 自托管 Sora 字重 400、600、700、800，在 src/main.tsx 中导入。绝不从 CDN 加载字体。
  - 使用来自 'motion/react' 的 Motion（motion、useInView、useReducedMotion）实现显现效果、尺寸指南绘制和预订步骤器；每个动画都以 useReducedMotion() 为条件。
  - 将所有文案和数据保留在 src/content.ts 中：品牌字符串、主视觉文案、尺寸指南预设（标签、单位尺寸、带英尺占位面积的物品、适配结论）、单元类型（id、尺寸、尺寸标注、平方英尺、月价、气候、直入、备注、样本可用性）、安保项目、用品项目、路线文字、评价、预订文案。当变量值变化时，在那里重写依赖的文案，并从 [BRAND] 和 [PHONE] 派生存储键和 tel: 链接，确保不残留默认品牌痕迹。
  - 尺寸指南，精确要求：每个预设使用一个 22 px 每英尺的 SVG 比例；单元轮廓绘制为蓝色矩形并带有尺寸标注（例如 10×20）；内部物品为圆角向日葵色调矩形，带有 12px 标签——Studio 5×10：大号床垫 5×7、6 个箱子 2×2、自行车 6×2（适配：'snug but honest'）；1-bed 10×10：床垫 5×7、沙发 7×3、餐桌椅套装 6×4、10 个箱子（适配：'room to spare'）；2-bed home 10×20：以上所有加上洗衣机和烘干机各 3×3、20 个箱子、梳妆台 4×2（适配：'the garage, relocated'）；Garage/stock 10×30：两个托盘 4×4、货架排 10×1.5、工作台 6×2、30 个箱子（适配：'a small warehouse'）。物品在轮廓之后以 120ms 交错绘制；推荐尺寸徽章（向日葵色标签）和适配结论最后出现，带有 'See 10×20 units →' 链接，该链接将网格筛选到该尺寸。
  - 单元网格，精确九个单元：5×5 $39 室内；5×10 $62 室内；5×10 $78 气候控制；10×10 $98 室内；10×10 $124 气候控制；10×15 $139 直入；10×20 $176 直入；10×20 $215 气候控制；10×30 $248 直入。筛选器：尺寸标签（Small ≤5×10 / Medium 10×10–10×15 / Large 10×20 / XL 10×30）、气候控制开关、直入开关、最高价格滑块 $30–$260；实时结果计数（'7 of 9 units'）；按价格从低到高或从高到低排序；任何激活的筛选器显示 'Clear filters' 标签；零结果状态显示清除标签，绝不显示空页面。每张卡片：尺寸标注使用 Sora 700、平方英尺、月价大号显示、Climate / Drive-up 标签、可用性标签（'3 open' / 'Waitlist'）、向日葵色 'Reserve' 按钮。
  - 预订流程，精确要求：第 1 步显示所选单元（如果从导航进入则为 'first available 10×10'）及月度总计；第 2 步入住时间标签——'As soon as possible' / 'In 2–4 weeks' / 'Next month' / 'Just pricing for now'（最后一个将 CTA 切换为 'Ask a question' 行为，但保持本地）；第 3 步姓名、电话、邮箱，带内联验证，然后成功：一个类似 'RSV-8241' 的代码，使用 Sora 800，'Held for 48 hours — the manager calls to confirm. No payment is taken in this demo; this reservation lives in this browser only.' 将预订持久化到 localStorage 中的 [BRAND_SLUG]-reservation。
  - 将位置绘制为内联 SVG 地图：设施区块为皇家蓝，带有卷帘门刻度线、通道、两个虚构地标标注（'Route 9 interchange'、'the grain elevator'）以及虚线接近路径；旁边的驾驶文案：'From the Route 9 interchange, two lights past the grain elevator, turn into the blue row — the office is the second door.' 15 英尺卡车说明：'Drive-up lanes fit a 15-foot box truck with room to drop ramp.'
  - 仅使用这些 lucide-react 图标：Phone、Box、Boxes、Warehouse、Thermometer、Truck、Camera、Lightbulb、Clock、ShieldCheck、KeyRound、MapPin、ChevronRight、ChevronLeft、ArrowRight、Menu、X、CheckCircle2、Star、Lock、CalendarCheck、Search。
  - 将尺寸指南选择和预订持久化到 localStorage，以 [BRAND_SLUG] 为命名空间；验证恢复的 JSON，并从格式错误的数据中静默恢复。
  - 在构建前将六张生成的照片下载到 Assets 中列出的精确公共路径。在项目根目录创建 ASSETS.md，列出每个文件的路径、源 URL、作者或生成器以及许可证。
  - 一个纯 <title> 为 [BRAND] 和一个 favicon（带有向日葵卷帘门标记的皇家蓝方块）就足够了；不需要 meta 描述、Open Graph 标签、JSON-LD 或站点地图。

## 变量
- [BRAND] — 设施名称（默认："Storewell Self Storage"）。虚构的设施名称；代码中会据此派生出一个卷帘门标志图形。
- [CITY] — 城市（默认："Lakemont"）。设施所在地；出现在首屏、地图标注、路线指引和页脚中。
- [FOUNDER] — 经理（默认："Rosa Whitcomb"）。虚构的现场经理，在首屏和预订文案中署名。
- [PHONE] — 电话（默认："(555) 388-2040"）。办公室电话；以 tel: 链接形式呈现，仅保留数字。
- [EXPERIENCE] — 营业年数（默认："9 years"）。类似 '9 years' 的简短短语；用于首屏和评价文案。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/self-storage-facility-website（默认：是；删除此行即可移除）

页面与区块（Pages & Sections）下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- 皇家蓝（Royal blue）`#2445FF` — 品牌色：页眉、链接、单元轮廓、地图填充
- 深蓝（Blue deep）`#1A35CC` — 页脚底色和深色面板
- 向日葵黄（Sunflower）`#FFC83D` — CTA、徽章、高亮、尺寸指南中的物品矩形
- 向日葵浅色调（Sunflower tint）`#FFF3D4` — 标签片、注释、选中状态
- 云白（Cloud）`#F5F7FB` — 浅色区块底色
- 白色（White）`#FFFFFF` — 卡片和面板
- 墨色（Ink）`#161B2C` — 浅色背景上的标题和正文
- 钢灰（Steel）`#5A6377` — 次要文本
- 细线色（Hairline）`#E2E6EF` — 细线分隔和卡片边框

### 字体排印
- 展示字体和正文字体：全部使用：Sora（OFL），字重 400/600/700/800

### 布局与动效
- 间距：区块之间桌面端间隔 92px / 移动端 64px；区块标题使用 13px 字距的皇家蓝眉题，下方是 Sora 800 标题，字号为 clamp(28px, 3.2vw, 44px)；卡片内边距 26px，间隙 22px。
- 圆角：友好的仓储风格：卡片 14px，标签片和输入框 10px，胶囊形 CTA；照片 14px。
- 动效：通过 useInView 实现淡入上升显现（14px，500ms，60ms 交错），仅触发一次。
- 动效：尺寸指南中的物品在轮廓之后以 120ms 交错绘制进入，徽章和结论最后出现；网格卡片以 40ms 交错。
- 动效：预订步骤条在步骤之间以 220ms 滑动；保留的取件码在成功时以 1.1× 弹出。
- 动效：所有动效在 prefers-reduced-motion 下立即禁用；无视差、无滚动劫持、无自动播放媒体。
- 图像：来自同一次拍摄的明亮、干净的设施摄影：一条光线充足的室内卷帘门走廊、一个整齐堆放着箱子的小单元、一个敞开的直入式单元内有家具、一堆用品、黄昏时的入口，以及从外部拍摄的设施排房——没有人、没有可读的单元编号或标牌、没有带车牌的车辆。

## 页面与区块
### [BRAND] — [CITY] 的自助仓储（`index.html`）
1. **页眉与首屏** — 页眉（白色 94% 不透明度，背景模糊，72px）：卷帘门标志图形（宝蓝色方块配向日葵色门线）+ [BRAND]，Sora 800 18px；导航锚点：尺寸指南、单元、预订、安保、到访；右侧：电话胶囊 Phone 图标 + [PHONE]（tel:）和向日葵色胶囊按钮 'Reserve a unit'。390px 宽度下：标志图形 + 名称、电话图标按钮、菜单按钮排成一行；锚点收进白色下拉菜单。首屏：云朵底色；左侧文案（第 1–6 列）：眉标宝蓝色 'SELF STORAGE — [CITY], OFF ROUTE 9'；H1 Sora 800 墨色 'The garage called. It wants the house back.'；段落钢灰色 16px '[FOUNDER] runs 340 units, sweeps the corridors daily, and answers the phone before the third ring — [EXPERIENCE] of keeping [CITY]'s extras dry, lit and behind a coded gate.'；向日葵色胶囊按钮 'Find my size'（锚点至尺寸指南）和蓝色描边胶囊按钮 'See units & prices'（锚点）；标签：'No payment to reserve' · 'Gate 6a–10p daily' · 'Month-to-month'。右侧（第 7–12 列）：走廊照片，14px 边框，4:3 比例，左下角叠一张浮动白色卡片：Boxes 图标、'340 units · 9 sizes'、Sora 800 宝蓝色 'From $39/mo'、12px 钢灰色 'Sample availability shown.'
   布局：12 列网格；浮动卡片偏移 -18px；移动端先文案后照片。
   动效：照片从 1.03 缩放归位；文案上移 14px，错峰 70ms；价格数字滚动一次。
2. **尺寸指南** — 白色区块，标志性区块。眉标 'WHAT SIZE DO I NEED?'（宝蓝色）；标题 'Drawn to scale, not to guesswork.' 四个预设胶囊（Studio apartment / 1-bedroom / 2-bedroom home / Garage & business stock）；SVG 面板（云朵底色，14px 圆角）按同一比例绘制所选单元——宝蓝色轮廓配尺寸标注，向日葵色浅底物品矩形配标签（queen mattress、sofa、washer、boxes…），错峰 120ms 动画进入；最后出现向日葵色徽章 'Recommended: 10×20' 和 Sora 700 墨色的适配结论（'The garage, relocated.'），随后是蓝色链接 'See 10×20 units →'，点击后筛选并滚动到网格。13px 钢灰色注释：'One scale for every preset — 22 pixels to the foot, so compare honestly.'
   布局：胶囊在面板上方，通栏；面板最大宽度 900px 居中，最小高度 380px；移动端 SVG 等比缩小，标签最小 11px。
   动效：轮廓绘制 400ms，物品错峰 120ms，徽章和结论最后上移 12px；切换预设时重播整个序列。
3. **单元网格** — 云朵色区块。眉标 'UNITS & PRICES'（宝蓝色）；标题 'Nine sizes, every number visible.' 筛选栏（白色面板）：尺寸胶囊（Small / Medium / Large / XL）、'Climate control' 和 'Drive-up access' 开关、最高月价滑块 $30–$260、排序下拉（默认 Price low→high，high→low）；实时计数 '9 of 9 units'；激活时出现 'Clear filters' 胶囊。九张单元卡片（白色，14px 圆角，细线边框）：尺寸 Sora 800 18px（'10×20'），平方英尺 + 备注（'Drive-up — back right in'）13px 钢灰色，月价 Sora 800 宝蓝色 '$176 /mo'，标签 'Climate'（蓝色胶囊）和 'Drive-up'（向日葵色胶囊），可用状态胶囊（'3 open' 偏绿蓝色文字 / 'Waitlist' 钢灰色），向日葵色 'Reserve' 按钮，点击后预填该单元的预订流程。
   布局：3 列网格（1024px 以下 2 列，640px 以下 1 列）；筛选栏在桌面端为左列（260px），移动端为可折叠的 'Filters' 抽屉；零结果状态显示清除胶囊。
   动效：筛选变化时卡片错峰 40ms，配 180ms 交叉淡入；Reserve 按钮按下时弹至 1.05×。
4. **预订流程** — 白色区块。眉标 'RESERVE — NO PAYMENT'（宝蓝色）；标题 'Hold a unit in three steps.' 步骤条（白色面板，最大宽度 760px）：步骤圆点 1–2–3 配标签（Unit / Timing / Details）。第 1 步——所选单元摘要卡（尺寸、标签、'$176 /mo'），带一个返回网格的更改选择；合计行 'First month: $176 (sample)'。第 2 步——入住时间胶囊：'As soon as possible' / 'In 2–4 weeks' / 'Next month' / 'Just pricing for now'，每个下方一行注释（'units held 48 hours'、'we'll watch inventory'、'ask us about waitlists'、'no unit held — we'll answer questions'）。第 3 步——Name（必填）、Phone（必填）、Email（必填），内联校验（2px 宝蓝色边框，13px 注释，无原生弹窗），蓝色胶囊按钮 'Hold my unit'。成功后替换面板：CheckCircle2 宝蓝色，验证码 'RSV-8241' Sora 800 24px，'Held for 48 hours — [FOUNDER] calls to confirm and takes no payment over the phone either. This demo stores the reservation in this browser only.'，以及描边胶囊按钮 'Reserve another'。持久化到 localStorage。
   布局：步骤条在步骤间滑动 220ms；各步骤保持最小高度以避免跳动；移动端单列，底部留 96px 内边距避开吸底栏。
   动效：步骤滑动 220ms；验证码弹至 1.1×；成功状态交叉淡入并上移 12px。
5. **安保与出入** — 云朵色区块。眉标 'SECURITY & ACCESS'（宝蓝色）；标题 'Locked, lit, and swept daily.' 六张事实卡片（白色，图标在向日葵色浅底圆中）：'Coded gate 6a–10p' — 'Your code, your log — every entry recorded.'（KeyRound）；'Cameras on every corner' — 'Fourteen of them, kept 30 days.'（Camera）；'Alarmed units' — 'Indoor units individually alarmed; drive-up rows on sensors.'（ShieldCheck）；'Lit like a parking lot' — 'LEDs on motion after hours.'（Lightbulb）；'Manager on site' — '[FOUNDER]'s office is the second door, weekdays 9a–6p, Saturdays 9a–2p.'（Clock）；'Disc locks at the office' — 'The one lock bolt cutters hate; $18, cut-resist tested.'（Lock）。
   布局：3×2 卡片网格（900px 以下 2 列，640px 以下 1 列）。
   动效：卡片上移 14px，错峰 60ms。
6. **用品商店** — 白色区块，左侧用品照片（4:3，14px 边框），右侧商品：标题 'Boxes on the way in, too.' 四行商品（细线分隔）：'Small box 16×12×12 — $2.50'；'Medium box 18×18×16 — $3.75'；'Wardrobe box with bar — $12'；'Queen mattress bag — $9'。一张向日葵色浅底注释卡：'Reserved a unit? Show the code at the office — 10% off supplies on move-in day.' 13px 钢灰色页脚：'Prices are sample data for this demo.'
   布局：照片占 5 列，商品占 7 列；移动端照片在前堆叠。
   动效：商品错峰 70ms 淡入；注释卡最后上移。
7. **到访与路线** — 云朵色区块。眉标 'FIND US'（宝蓝色）；标题 'Two lights past the grain elevator.' 左侧（7 列）：内联 SVG 地图——设施区块为宝蓝色，两排向日葵色卷帘门刻度线，通道为钢灰色，标注地标 'Route 9 interchange' 和 'Grain elevator'，一条蓝色虚线接近路径带箭头。右侧（5 列）：地址 '2100 Row Nine Road, [CITY]'（MapPin）；路线段落 'From the Route 9 interchange, two lights past the grain elevator, turn into the blue row — the office is the second door.'；卡车提示配 Truck 图标：'Drive-up lanes fit a 15-foot box truck with room to drop the ramp.'；办公时间 'Weekdays 9a–6p · Sat 9a–2p · gate daily 6a–10p'；电话 [PHONE]（tel:）。
   布局：地图 4:3；移动端先地图后信息；地图标签不得与道路线重叠。
   动效：接近路径进入时绘制 600ms；门刻度线错峰 40ms。
8. **评价** — 白色区块。眉标 'FROM THE ROW'；标题 'Neighbors with full garages.' 三张引述卡（云朵底色，蓝色引号）：五颗宝蓝色星；16px 墨色引述；13px 钢灰色页脚。'The size guide told me 10×20; I fit with room to walk. The guide is smarter than my tape measure.' — Priya & Sam，跨城搬家。'Gate code worked at 5:58 a.m. on moving day. That's when you learn if a facility is real.' — Theo W.，drive-up 排。'My business stock sat for two years, dry and dust-swept. Rosa even accepted a delivery for me once.' — Dana K.，10×30 单元。12px 钢灰色免责声明：'Sample reviews for this template demo.'
   布局：三张卡片一行（900px 以下 1 列）；桌面端中间卡片上移 12px。
   动效：卡片上移 14px，错峰 80ms。
9. **页脚** — 深蓝色区块。第 1 列：门标志图形 + [BRAND]，Sora 800 白色；13px #B9C6F2 文字行 '2100 Row Nine Road, [CITY]'、'Office [PHONE]（tel:）'、'Gate daily 6a–10p'。第 2 列 'Facility'：锚点 尺寸指南、单元、安保、到访。第 3 列 'Small print'：'Sample site for a template — units, prices and reviews invented'、'No payment is collected anywhere in this demo'，以及可选的向日葵色 [CREDIT] 链接。移动端吸底栏（768px 以下）：固定底部深蓝色 96% + 模糊；向日葵色胶囊按钮 'Call'（tel:）和白色描边胶囊按钮 'Reserve'（锚点），安全区内边距。
   布局：页脚网格 4/4/4，移动端 1 列；768px 以下 body 底部内边距 80px。
   动效：无。

## 资源
- 图片：Corridor。下载 https://media.vibefather.ai/assets/acc0565d-8b61-44b7-a766-82f654dbc645/hero-corridor.webp 到 public/images/hero-corridor.webp。Alt：'A bright, clean storage corridor with roll-up doors.' 主视觉锚点。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该准确署名。
- 图片：Small unit interior。下载 https://media.vibefather.ai/assets/acc0565d-8b61-44b7-a766-82f654dbc645/unit-small.webp 到 public/images/unit-small.webp，保存为 public/images/unit-small.webp。Alt：'A small storage unit with neatly stacked moving boxes.' 尺寸指南附近的辅助图片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该准确署名。
- 图片：Drive-up unit。下载 https://media.vibefather.ai/assets/acc0565d-8b61-44b7-a766-82f654dbc645/unit-driveup.webp 到 public/images/unit-driveup.webp。Alt：'An open drive-up storage unit with furniture inside.' 单元网格附近的辅助图片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该准确署名。
- 图片：Supplies。下载 https://media.vibefather.ai/assets/acc0565d-8b61-44b7-a766-82f654dbc645/supplies.webp 到 public/images/supplies.webp。Alt：'A neat stack of new moving boxes and packing supplies.' 用品商店图片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该准确署名。
- 图片：Entrance。下载 https://media.vibefather.ai/assets/acc0565d-8b61-44b7-a766-82f654dbc645/gate.webp 到 public/images/gate.webp。Alt：'The storage facility entrance at dusk with a lit access lane.' 安全区块中的辅助图片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该准确署名。
- 图片：Facility rows。下载 https://media.vibefather.ai/assets/acc0565d-8b61-44b7-a766-82f654dbc645/facility-rows.webp 到 public/images/facility-rows.webp。Alt：'Rows of drive-up storage units with blue doors in daylight.' 到访/路线附近的辅助图片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该准确署名。
- 图标：Lucide（ISC），通过 lucide-react 包使用，仅限于 setup 中的图标列表。不使用其他图标来源。
- 字体：Sora（OFL），通过 @fontsource/sora 自托管；不通过 CDN 加载字体。

## 不要做
- 不使用真实的仓储品牌、加盟商及其标识和标语；[BRAND]、价格、可租情况和评价均为虚构的示例数据。
- 不使用真实的卡车租赁品牌或车辆；卡车说明保持通用，照片中不出现车牌可辨认的车辆。
- 不使用真实的锁具、摄像头或安防硬件品牌；设备以通用方式描述。
- 照片只展示走廊、单元和用品——不出现人物、人脸、可辨认的单元编号、标牌或品牌标识。
- 价格为每月示例费率；预订流程在任何环节都不收取付款并明确说明这一点，保留的代码是本地存储的演示产物。
- 不出现与真实时钟绑定的日期：没有日历组件、没有具体月份名称、没有版权年份；时间选项保持相对表述（'in 2–4 weeks'、'held 48 hours'）。
- 表单仅为本地示例：不向任何服务器提交、不调用 API、不做分析。仅持久化到 localStorage，并校验恢复的数据。
- 尺寸指南在所有预设间使用同一套 SVG 比例——绝不重绘尺寸以免误导；合身结论保持通俗、诚实的语言。
- 筛选器绝不能留下没有 'Clear filters' 入口的空网格。
- 无后端、服务器代码、数据库或认证。通过单一构建命令输出静态文件到 dist/，小于 20 MB，Vite 的 base 使用相对路径。
- 仅通过 Fontsource 包自托管字体；绝不加载 Google Fonts、Adobe Fonts 或任何 CDN 样式表或脚本。
- 生产环境不生成 source map，不将 src/ 复制到 dist/。
- 不使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务或热链接文件；仅使用六张生成的图片和代码绘制的 SVG 图形。
- 不做 SEO 工作：没有 meta 描述、Open Graph 标签、JSON-LD、站点地图或堆砌关键词的标题。一个包含 [BRAND] 的普通标题和一个 favicon 就足够了。
- 不做滚动劫持、页面视差、自定义光标或自动播放媒体；动效仅限于指定的显现、绘制、卡片错落、步骤滑动和弹出，全部遵循 prefers-reduced-motion。
- 移动端页头在 390px 下保持单行，吸底栏绝不能遮挡预订的提交按钮。
- 由 [BRAND] 和 [PHONE] 构建品牌派生字符串（存储键、tel: 链接），使替换变量值后绝不残留默认品牌痕迹。
- 每个内部链接都是文件名或页内锚点，绝不是裸目录；站点保持为单个 index.html。

---
— Prompt by VibeFather · https://vibefather.ai/t/self-storage-facility-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
