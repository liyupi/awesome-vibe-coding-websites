> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 商业印刷店网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一个单页网站。[BRAND] 是商业印刷店，由印刷机长 [FOUNDER] 在 [CITY] 经营，[EXPERIENCE] 的油墨都嵌在指甲缝里。页面以印刷四色（process color）为语言——CMYK 点缀、套准标记（registration marks）和半色调色块（halftone fields）全部用代码绘制——并配有产品目录（名片、传单、横幅、贴纸、小册子）、计算过程可见的即时报价计算器、文件准备清单、模拟上传芯片、交付截止时间和自取或配送的物流说明。照片展示纸堆和印刷机细节。所有价格和规格均为虚构的示例数据。

- 受众：主要： [CITY] 周边每周或每年下单一次印刷的小型企业和活动组织者——两者都希望在对话之前先拿到一个数字。次要：招牌制作商和促销品供应商，他们会把计算器的表格转给他人参考。
- 目标：让访客从“500 张传单多少钱”走到提交报价请求：四次点击完成定价，通过文件准备指南建立对规格的信任，附上“文件”并发送——同时带上计算器的精确配置。
- 语气：印刷车间的自信——干脆、精确、带点油墨污渍式的幽默。数字和截止时间像事实一样陈述，因为它们就是事实。

## 技术栈（Stack）
- 框架（Framework）：Vite 6 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react (MIT)、react-dom (MIT)、vite (MIT)、typescript (Apache-2.0)、tailwindcss (MIT)、motion (MIT)、lucide-react (ISC)、@fontsource/archivo-black (OFL-1.1)、@fontsource/ibm-plex-sans (OFL-1.1)
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化（Setup）：
  - 创建一个 Vite 6 + React 18 + TypeScript 项目，base 设为 './'，build.outDir 设为 'dist'，build.sourcemap 设为 false。不使用路由、无后端、无服务端代码。
  - 安装 Tailwind CSS 3.4，并配置 PostCSS 和 Autoprefixer。用下方精确的调色板扩展主题，fontFamily.display 设为 'Archivo Black'，fontFamily.body 设为 'IBM Plex Sans'。
  - 通过 @fontsource/archivo-black 和 @fontsource/ibm-plex-sans 自托管 Archivo Black（400）和 IBM Plex Sans 的 400、500、600、700 字重，在 src/main.tsx 中导入。绝不从 CDN 加载字体。
  - 使用来自 'motion/react' 的 Motion（motion、useInView、useReducedMotion）实现入场动画和报价补间动画；每个动画都要以 useReducedMotion() 作为开关条件。
  - 将所有文案和数据放在 src/content.ts 中：品牌字符串、首屏文案、带规格的产品目录、完整的报价表（每个产品×尺寸的单位基础价、纸张系数、数量阶梯、交期乘数）、文件准备事项、截断值、配送文案。当变量值变化时，在该文件中重写依赖的文案，并从 [BRAND] 和 [PHONE] 派生存储键和 tel: 链接，确保不残留默认品牌痕迹。
  - 报价表，精确如下：100 件数量的单位基础价和尺寸系数——名片（business cards）：3.5×2 基础价 $0.55，方形 ×1.15，窄版 ×1.05；传单（flyers）：4×6 基础价 $0.28，5.5×8.5 ×1.9，8.5×11 ×2.8；横幅（banners）：2×6 基础价 $22，3×8 ×2.1，4×8 ×2.6；贴纸（stickers）：3" 圆形基础价 $0.65，方形 ×1.05，模切整版 ×1.4；小册子（booklets）：8 页基础价 $2.40，16 页 ×1.6，32 页 ×2.4。每个产品的纸张/材质选项及系数：名片 14 pt matte ×1.0 / 16 pt matte ×1.25 / 16 pt silk +UV ×1.45；传单 100 lb gloss ×1.0 / 100 lb matte ×1.08 / 80 lb uncoated ×0.95；横幅 13 oz vinyl ×1.0 / 15 oz ×1.18 / mesh ×1.3；贴纸 matte ×1.0 / gloss ×1.05 / holographic ×1.9；小册子 100 lb text ×1.0 / 80 lb uncoated ×1.05。数量阶梯：100 ×1.0，250 ×0.85，500 ×0.70，1,000 ×0.55，2,500 ×0.42。交期：Standard 3 working days ×1.0，Next-day ×1.35，Same-day ×1.8。价格 = 基础价 × 尺寸系数 × 材质系数 × 数量 × 数量阶梯 × 交期，四舍五入到整数美元；结果面板打印每个因子（'3.5×2 · 14 pt matte'、'$0.55 × 1.00 × 500 × 0.70'、'Next-day × 1.35'）以及每单位最终价。将输入持久化到 localStorage 的 [BRAND_SLUG]-quote 键下。
  - 用代码绘制 CMYK 元素：套准标记（十字准星圆）作为项目符号和品牌标识；页眉下方的四色 CMYK 色条；计算器和页脚色带后方 6% 不透明度的半调网点场（CSS radial-gradient 图案）；仅展示型标题通过 text-shadow 实现套印偏移（品红左移 2px，青色右移 2px）。
  - 文件上传芯片为诚实模拟：一个带 Upload 图标的虚线拖放芯片；点击后附加一个固定的示例芯片 'menu-flyers-v3.pdf · 8.2 MB'，带 X 可移除，以及一行 12px 注释 'Demo attachment — nothing uploads.'。不使用会发送数据的真实文件输入。
  - 仅使用以下 lucide-react 图标：Phone、Upload、FileText、Ruler、Layers、Scissors、BookOpen、Timer、Truck、Store、CheckCircle2、ChevronRight、ArrowRight、Menu、X、Calculator、Package、Droplets。
  - 将报价配置和报价请求持久化到 localStorage，以 [BRAND_SLUG] 为命名空间；校验恢复的 JSON，并从格式错误的数据中静默恢复。
  - 构建前将五张生成的图片下载到 Assets 中列出的精确 public 路径。在项目根目录创建 ASSETS.md，列出每个文件的路径、来源 URL、作者或生成器以及许可证。
  - 一个纯 <title> 为 [BRAND] 以及一个 favicon（带套准标记十字准星的黑色方块）即可；不需要 meta 描述、Open Graph 标签、JSON-LD 或站点地图。

## 变量
- [BRAND] — 店铺名称（默认：“Regmark Print Co.”）。虚构的店铺名称；代码中会据此派生出一个注册标记图形标志。
- [CITY] — 城市（默认：“Ironbridge”）。店铺所在地；出现在首屏、自取文案和页脚中。
- [FOUNDER] — 工头（默认：“Sal Dominguez”）。虚构的印刷工头，在首屏和文件准备文案中提及。
- [PHONE] — 电话（默认：“(555) 887-2214”）。柜台电话；以 tel: 链接形式呈现，仅使用数字。
- [EXPERIENCE] — 年数（默认：“23 years”）。像 '23 years' 这样的普通短语；用于首屏文案。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/commercial-print-shop-website（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- 纸白（Paper）`#F9F9F7` — 页面底色
- 黑色（Black）`#161616` — 文字、页脚底色、结构
- 青色（Cyan）`#00AEEF` — 工艺强调色 1：链接、尺寸标签、计算器高亮
- 品红（Magenta）`#EC008C` — 工艺强调色 2：CTA、标签、套印错位阴影
- 黄色（Yellow）`#FFF200` — 工艺强调色 3：仅用于黑色背景上的填充和标签——绝不用于白底上的小号文字
- 青色浅调（Cyan tint）`#E5F6FD` — 选中标签和面板
- 钢灰（Steel）`#5B5F63` — 次要文字
- 细线（Hairline）`#E4E4E0` — 细线分隔和卡片边框

### 字体排印
- 展示字体：标题、价格：Archivo Black（OFL），字重 400
- 正文字体：段落、控件、表格：IBM Plex Sans（OFL），字重 400/500/600/700

### 布局与动效
- 间距：区块之间桌面端 88px / 移动端 60px；区块标题位于 CMYK 色块分隔线下方，上方是 13px 字距的钢灰眉题和 clamp(26px, 3vw, 42px) 的 Archivo Black 标题；卡片内边距 24px，间距 20px。
- 圆角：模切边角：卡片和标签为 2px，按钮为 0——套准般锐利；照片为 2px 并带 1px 黑色边框。
- 动效：淡入上升显现（12px，450ms，50ms 交错）通过 useInView 实现，仅触发一次——按压般干脆。
- 动效：报价价格在变化时以 150ms 补间过渡；各系数行在重新计算时以青色浅调高亮；上传标签从 0.96 缩放进入。
- 动效：半色调场和套印错位阴影为静态；没有任何脉动或滑动。
- 动效：所有动效在 prefers-reduced-motion 下立即禁用；无视差、无滚动劫持、无自动播放媒体。
- 图像：来自同一次拍摄的油墨与纸张摄影：带有 CMYK 墨辊的印刷机细节、成摞的新纸、展开的印张展示饱满的工艺色彩、带抽象艺术的模切贴纸页，以及一个装订角落，摆放着骑马订小册子——没有人物、没有可读的工单、没有品牌标识。

## 页面与区块
### [BRAND] — [CITY] 的印刷店（`index.html`）
1. **页眉与主视觉区** — 页眉（纸张色 95% 不透明度，带背景模糊，68px）：套准标记 logo 图形 + [BRAND]，Archivo Black 16px 黑色；导航锚点：产品、计算器、文件准备、交付周期、联系；右侧：电话胶囊 Phone 图标 + [PHONE]（tel:）和洋红色胶囊按钮 'Get a quote'。页眉下方有一条 4px 的 CMYK 色条（青色/洋红/黄色/黑色等宽分段）。在 390px 宽度下：logo 图形 + 名称、电话图标按钮、菜单按钮排成一行；锚点收进纸张色下拉菜单。主视觉区：左侧文案（第 1–6 列）：洋红色眉标 'COMMERCIAL PRINT — [CITY], SAME-DAY CAPABLE'；H1 使用 Archivo Black，带套印不准阴影 'THE PRICE IS ON THE PAGE.'；段落文字为钢灰色 'Foreman [FOUNDER] runs two presses and a bindery — [EXPERIENCE] of ink, pressure and deadlines. The calculator below prices like we do: every factor visible.'；洋红色胶囊按钮 'Run the calculator'（锚点）和黑色描边胶囊按钮 'See products'（锚点）；标签：'Same-day by 11 a.m.' · 'Counter pickup' · 'File check, free'。右侧（第 7–12 列）：印刷机细节照片置于 2px 黑色边框的 4:3 画框中，右上角叠放一个黄字黑底贴纸标签：'CMYK + 1 spot, no problem.'
   布局：12 列网格；标签偏移 -14px；移动端先堆叠文案再显示照片。
   动效：照片从 1.03 缩放归位；文案上移 12px，间隔 60ms 交错出现。
2. **产品目录** — 纸张色区块。眉标 'PRODUCTS'（洋红色）；标题 'Five things, printed properly.'。五张卡片（白色，细线边框）：'Business cards' — '3.5×2 and friends · 14–16 pt · matte, silk or +UV' — 'from $55 / 100'；'Flyers' — '4×6 to 8.5×11 · 80–100 lb · gloss, matte, uncoated' — 'from $24 / 100'；'Banners' — '2×6 to 4×8 · 13–15 oz vinyl or mesh · hemmed & grommeted' — 'from $22 each'；'Stickers' — '3" circles to kiss-cut sheets · matte, gloss or holo' — 'from $65 / 100'；'Booklets' — '8–32 pages · 100 lb text covers · saddle-stitched' — 'from $240 / 100'。每张卡片：一个小的代码绘制线性图标（Layers、FileText、Ruler、Scissors、BookOpen）和一个青色链接 'Quote this →'，点击后预设计算器。
   布局：五张卡片：3+2 换行排列（900px 以下 2 列，640px 以下 1 列）。
   动效：卡片上移 12px，间隔 60ms 交错出现。
3. **即时报价计算器** — 黑色区块，带 6% 半色调网点底纹，标志性区块。眉标 'INSTANT QUOTE'（黄色）；标题 'FOUR CHOICES, ONE NUMBER.'。控件（白色面板，左侧，6 列）：产品标签（五种）；每个产品对应的尺寸标签；每个产品对应的纸张/材质标签；数量标签（100 / 250 / 500 / 1,000 / 2,500）；交付周期标签（Standard · 3 days / Next-day / Same-day）。结果面板（黑色，黄色边框，右侧，6 列）：价格使用 Archivo Black 黄色，字号 clamp(36px, 4vw, 56px)，例如 '$97'；单件价格行 '$0.19 / piece'；因子列表 13px 青色/白色：'3.5×2 · 14 pt matte'、'$0.55 × 1.00'、'× 500 × 0.70'、'Next-day × 1.35'；脚注 12px 钢灰色 'Sample pricing for this template — your file check may adjust specs.'；洋红色胶囊按钮 'Send this quote'，滚动到请求表单并附带当前配置。输入内容持久保存。
   布局：桌面端 6/6 列；移动端堆叠；结果面板不吸顶。
   动效：价格以 150ms 补间过渡；因子行变化时闪烁青色底纹 120ms；无布局偏移。
4. **文件准备指南** — 纸张色区块。眉标 'FILE PREP'（青色）；标题 'Five checks before you upload.'。清单行使用套准标记作为项目符号：'Bleed — 0.125" on every cut edge' — 'trim lines are where the blade lands; bleed is what keeps it pretty'；'CMYK, not RGB' — 'convert once with us; the press can't guess your green'；'Fonts outlined' — 'or embed them; we don't have your cousin's free fonts'；'300 dpi at final size' — 'upscaling a screenshot is how 500 flyers become 500 regrets'；'Dielines for cut work' — '1 pt stroke on its own layer; kiss-cut or die, we'll match it.'。页脚行 13px 钢灰色：'Not sure? Send it anyway — [FOUNDER]'s team checks every file free, and tells you before printing.'
   布局：行最大宽度 780px，细线分隔。
   动效：行淡入，间隔 50ms。
5. **交付周期承诺** — 纸张色区块。眉标 'TURNAROUND'（青色）；标题 'Cutoffs, not vibes.'。三张卡片：'Same-day' — 'in by 11 a.m., out by 5:30 p.m.' — 'cards, flyers, stickers; files that pass check by 11'；'Next-day' — 'in by 4 p.m., out the next working day' — 'everything except large-format laminations'；'Standard' — '3 working days' — 'the friendly price; booklets and banners sometimes 4'。页脚行：'A press goes down sometimes; if it does, you hear it from us before the deadline does.'，下方配一张纸张堆叠照片作为宽幅横幅。
   布局：三张卡片一行排列（900px 以下 1 列）；横幅 21:9 位于下方。
   动效：卡片上移 12px，间隔 70ms 交错出现。
6. **取货与配送** — 纸张色区块。眉标 'GETTING IT'（青色）；标题 'Counter, van, or courier.'。三行：'Counter pickup' — Store 图标 — 'Walk in, walk out; most orders boxed and waiting in 5 minutes.'；'Local delivery' — Truck 图标 — 'Free inside 10 miles of the shop on orders over $150; scheduled morning runs.'；'Rush courier' — Timer 图标 — 'When 5:30 is too late; we hand it to a courier and you get a door time.'
   布局：三行最大宽度 720px；图标置于青色底纹方块中。
   动效：行淡入，间隔 60ms。
7. **报价请求** — 黑色区块，带半色调网点底纹。眉标 'SEND THE JOB'（黄色）；标题 'CONFIGURED. ATTACHED. SENT.'。表单（白色面板，最大宽度 760px）：如果计算器运行过，顶部显示配置标签（'500 flyers · 5.5×8.5 · 100 lb gloss · Next-day ×'，可移除）；模拟上传标签（虚线，点击后显示 'menu-flyers-v3.pdf · 8.2 MB ×'，12px 注释 'Demo attachment — nothing uploads.'）；姓名（必填）、公司、电话（必填）、邮箱（必填）；'Notes for the press' 文本域（'e.g. match the navy from last run, PO attached'）；洋红色胶囊按钮 'Request this quote'。内联验证（2px 洋红色边框，13px 注释），不使用原生弹窗。成功状态：CheckCircle2 洋红色，'Quote on the press desk.' Archivo Black，'We confirm the number and the cutoff within two working hours — file checks come back with screenshots, not shrugs. This demo stores your request in this browser only.'，以及描边胶囊按钮 'Quote another'。持久化到 localStorage。
   布局：桌面端双列字段行，移动端 1 列，底部内边距 96px 以避开吸底栏。
   动效：成功状态交叉淡入并上移 12px；上传标签从 0.96 缩放进入。
8. **页脚** — 黑色区块，带 6% 半色调网点底纹，顶部重复 CMYK 色条。第 1 列：套准 logo 图形 + [BRAND]，Archivo Black 白色 15px；13px #9A9A9A 文字行 '318 Gear Avenue, Unit 2, [CITY]'、'[PHONE]（tel:）'、'Mon–Fri 7:30a–5:30p · Sat 9a–1p'。第 2 列 'Shop'：锚点：产品、计算器、文件准备、交付周期。第 3 列 'Small print'：'Sample site for a template — prices, products and cutoffs invented'，可选的 [CREDIT] 链接为黄色。移动端吸底栏（768px 以下）：固定底部，黑色 96% + 模糊；洋红色胶囊按钮 'Call'（tel:）和白色描边胶囊按钮 'Quote'（锚点），带安全区内边距。
   布局：页脚网格 4/4/4，移动端 1 列；768px 以下 body 底部内边距 80px。
   动效：无。

## 资源（Assets）
- 图片：印刷细节。将 https://media.vibefather.ai/assets/6c8aabf8-caf8-41c4-bddb-2651b8526909/hero-press.webp 下载到 public/images/hero-press.webp。Alt：'A press detail with CMYK ink rollers.' 主视觉锚点图。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：纸堆。将 https://media.vibefather.ai/assets/6c8aabf8-caf8-41c4-bddb-2651b8526909/paper-stack.webp 下载到 public/images/paper-stack.webp。Alt：'Fresh stacks of paper waiting for the press.' 交付周期横幅图。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：印刷页张。将 https://media.vibefather.ai/assets/6c8aabf8-caf8-41c4-bddb-2651b8526909/printed-sheets.webp 下载到 public/images/printed-sheets.webp。Alt：'Freshly printed sheets fanned out in rich process color.' 产品目录附近的辅助图。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：贴纸页。将 https://media.vibefather.ai/assets/6c8aabf8-caf8-41c4-bddb-2651b8526909/sticker-sheets.webp 下载到 public/images/sticker-sheets.webp。Alt：'Die-cut sticker sheets with abstract colorful art.' 计算器附近的辅助图。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：装订车间。将 https://media.vibefather.ai/assets/6c8aabf8-caf8-41c4-bddb-2651b8526909/bindery.webp 下载到 public/images/bindery.webp。Alt：'A bindery corner with saddle-stitched booklets stacked.' 产品区或联系方式附近的辅助图。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图标：Lucide（ISC），通过 lucide-react 包引入，仅限 setup 中的图标列表，另加原创代码绘制的 CMYK 元素：套准标记、色条和半色调网点区域。不使用其他图标来源。
- 字体：Archivo Black（OFL）和 IBM Plex Sans（OFL），通过 @fontsource/archivo-black 和 @fontsource/ibm-plex-sans 自托管；不从 CDN 加载字体。

## 禁止事项
- 不得使用真实印刷连锁品牌、出版社或纸张品牌及其商标；设备和材料保持通用（14 pt 哑光、13 oz 乙烯基）。
- 不得将真实设计软件或快递公司名称用作背书；文件格式和加急配送保持功能性和通用性。
- 所有价格均为标注为示例的数据；计算器会打印其计算因子，绝不冒充具有约束力的报价。
- 上传芯片为模拟实现：没有会发送数据的真实文件输入，没有 FormData，没有网络请求——固定的示例芯片和诚实说明随构建一同交付。
- 黄色仅作为黑色背景上的填充和标签点缀——绝不用作白底小字；正文在所有位置均保持 AA 对比度。
- 不得将日期绑定到真实时钟：交付周期仅以工作日和时钟截止时间表示，不出现日历日期，不出现版权年份。
- 表单仅为本地示例：不向任何服务器提交，不调用 API，不做分析。仅持久化到 localStorage，并验证恢复的数据。
- 无后端、服务器代码、数据库或认证。静态输出通过单一构建命令生成到 dist/，小于 20 MB，Vite 的 base 使用相对路径。
- 仅通过 Fontsource 包自托管字体；绝不加载 Google Fonts、Adobe Fonts 或任何 CDN 样式表或脚本。
- 生产环境不生成 source map，不将 src/ 复制到 dist/。
- 不得使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务或热链接文件；仅使用五张生成的图片和代码绘制的 SVG/CSS 图形。
- 不做 SEO 工作：不写 meta 描述、Open Graph 标签、JSON-LD、站点地图或堆砌关键词的标题。一个包含 [BRAND] 的普通标题和一个 favicon 就足够了。
- 单一价格来源：计算器、目录中的“起价”和文案均派生自 content.ts 表格；绝不硬编码第二份数字副本。
- 不得使用滚动劫持、页面视差、自定义光标或自动播放媒体；动效仅限于指定的显现、补间、闪烁和弹出，且全部遵循 prefers-reduced-motion。
- 移动端页头在 390px 下保持单行，绝不让吸底栏遮挡报价表单的提交按钮。
- 从 [BRAND] 和 [PHONE] 构建品牌派生字符串（存储键、tel: 链接），以便替换变量值后不会残留默认品牌痕迹。
- 每个内部链接都是文件名或页内锚点，绝不是裸目录；网站保持为单个 index.html。

---
— Prompt by VibeFather · https://vibefather.ai/t/commercial-print-shop-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
