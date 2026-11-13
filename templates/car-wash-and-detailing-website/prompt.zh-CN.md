> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 洗车与汽车美容网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为您自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一个单页网站，这是由 [FOUNDER] 在 [CITY] 经营的洗车与汽车美容工作室，[EXPERIENCE] 位于同一个街角。页面采用光泽感深色模式——湿黑（wet black）、糖果蓝（candy blue）、泡沫白（foam white）——配有可重新计算所有价格的车型尺寸选择器、三个洗车套餐、带实时盈亏平衡计算的会员选择器、漆面修复前后对比滑块、按车型尺寸调整的汽车美容菜单、时段预约、礼品卡、车队账户，以及一条关于设备与用水的信任展示条。照片展示泡沫、光泽和倒影，车辆为无徽标、无车牌的通用车型。所有价格、时段和评价均为虚构的示例数据。

- 受众：主要受众：[CITY] 周边正在 12 美元洗车和 45 美元/月习惯之间做决定的司机——他们想要菜单、算账，以及无需打电话就能预约时段。次要受众：移动汽车美容师和车队洗车运营商，他们希望重新调整菜单的定位。
- 目标：推动访客从“只是洗个车”转变为预约汽车美容时段或加入会员：展示各档位及所需时间，让会员计算可见且诚实，用滑块证明汽车美容效果，然后让预约在页面内完成。
- 语气：自信的维修区英语——简短、有光泽感、对干净的车略带趣味。每项声明都关于流程和设备，绝不用奇迹式形容词。

## 技术栈（Stack）
- 框架（Framework）：Vite 6 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、vite（MIT）、typescript（Apache-2.0）、tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/chakra-petch（OFL-1.1）、@fontsource/inter（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化（Setup）：
  - 创建一个 Vite 6 + React 18 + TypeScript 项目，base 设为 './'，build.outDir 设为 'dist'，build.sourcemap: false。不使用路由、无后端、无服务端代码。
  - 安装 Tailwind CSS 3.4，并配置 PostCSS 和 Autoprefixer。用下方精确的调色板扩展主题，fontFamily.display 设为 'Chakra Petch'，fontFamily.body 设为 'Inter'。
  - 通过 @fontsource/chakra-petch 和 @fontsource/inter 自托管 Chakra Petch 字重 600 和 700，以及 Inter 字重 400、500、600、700，在 src/main.tsx 中导入。绝不从 CDN 加载字体。
  - 使用来自 'motion/react' 的 Motion（motion、useInView、useReducedMotion）实现入场动画、价格补间和滑块弹簧；所有动画都要以 useReducedMotion() 作为开关条件。
  - 将所有文案和数据放在 src/content.ts 中：品牌字符串、hero 文案、按车型尺寸划分的单一价格表（套餐、会员、带时长的精洗服务）、回本文案、礼品卡预设、车队表单字段、信任项、评价、时段标签。当变量值变化时，在该文件中重写依赖的文案，并从 [BRAND] 和 [PHONE] 派生存储键和 tel: 链接，确保不残留默认品牌痕迹。
  - 价格表，唯一数据源：按尺寸划分的洗车套餐（轿车/SUV 与厢式车/卡车与超大型）——Express $14/$18/$22 · 5 分钟；Deluxe $24/$29/$35 · 12 分钟；Ceramic Shine $39/$46/$54 · 25 分钟。按尺寸划分的会员——Suds Unlimited $29/$34/$41（无限次 Express 及以上洗车）；Gloss Unlimited $45/$52/$60（每次到店另含吸尘、轮胎泡沫和仪表台擦拭）；Everything $69/$78/$88（另含每月一次陶瓷增强和每季度一次内饰翻新）。按尺寸划分的精洗——Interior Detail $189/$209/$229 · 3 小时；Machine Polish $349/$369/$389 · 5 小时；Ceramic Coating $899/$929/$959 · 8 小时；Headlight Restore 统一 $89 · 45 分钟。尺寸选择器（价格区顶部附近的三个标签）以 180ms 补间切换所有显示价格，并持久化到 localStorage 的 [BRAND_SLUG]-size 下。
  - 回本计算，精确为：对每个会员档位，回本 = 该档位月价 ÷ 当前尺寸下所含单次洗车档位的单次价格，保留一位小数显示为 '≈ 1.7 Deluxe washes and it's paid for'；随尺寸选择器实时更新。
  - 光泽效果仅用 CSS 实现：湿黑卡片在悬停时获得 1px 糖果蓝顶边和缓慢的 1200ms 高光扫过（::after 渐变横向平移），在 prefers-reduced-motion 下禁用；hero 和会员区带上淡淡的径向"水珠"图案（CSS radial-gradient 圆点，6% 不透明度）。所有背景上的文字保持 AA 对比度。
  - 前后对比滑块使用 before-paint（漩涡状暗淡漆面）叠在 after-paint（校正后的光泽）之下，同一 4:3 面板视角，通过 inset(0 0 0 N%) 裁剪，配糖果蓝手柄（指针拖拽、点击定位、聚焦时方向键、role='slider'）。
  - 预约：服务选择（任意套餐或精洗服务，可从卡片预选）、相对日期窗口标签（Today / Tomorrow / This weekend），每个带三个示例时段（Morning: 8:00, 9:30, 11:00；Midday: 12:30, 2:00；Late: 4:30, 6:00）、姓名、电话、车型尺寸标签；内联校验，成功状态带类似 'SLT-402' 的时段码，持久化到 localStorage 的 [BRAND_SLUG]-booking 下；不使用与真实时钟绑定的日历日期。
  - 礼品卡为代码绘制的视觉：糖果蓝卡片 SVG 配泡沫白丝带，预设标签 $25/$50/$100 和一条 'custom amount' 说明；兑换说明行 'redeemable for washes, details and memberships — plastic-free, emailed instantly (sample)' 明确表示并未真正购买任何东西。
  - 车队账户：一个简短的仅本地表单（公司、联系人姓名、邮箱、车辆数量滑块 2–40、洗车频率标签），带内联成功提示；注明 'we invoice monthly — no per-visit receipts in the cupholder'。
  - 仅使用这些 lucide-react 图标：Phone、Droplets、Sparkles、Car、Truck、Timer、CheckCircle2、Star、MapPin、ChevronRight、ChevronLeft、ArrowRight、Menu、X、CreditCard、Users、Clock、Gift、Waves。
  - 将尺寸选择、预约和车队提交持久化到 localStorage，以 [BRAND_SLUG] 为命名空间；校验恢复的 JSON，并从格式错误的数据中静默恢复。
  - 构建前将六张生成的图片下载到 Assets 中列出的精确 public 路径。在项目根目录创建 ASSETS.md，列出每个文件的路径、来源 URL、作者或生成器，以及许可证。
  - 一个纯 <title> 为 [BRAND] 的标题和一个 favicon（湿黑圆角方块配糖果蓝水滴标记）即可；不需要 meta 描述、Open Graph 标签、JSON-LD 或站点地图。

## 变量
- [BRAND] — 品牌（默认：“Sudworks Auto Spa”）。虚构的洗车店名；代码中会由此衍生出一个水滴标志。
- [CITY] — 城市（默认：“Marina Heights”）。隧道所在的城市；出现在首屏、营业时间和页脚中。
- [FOUNDER] — 店主（默认：“Theo Marsh”）。虚构的店主，在首屏和信任文案中提及。
- [PHONE] — 电话（默认：“(555) 554-7788”）。工作室电话；以 tel: 链接形式呈现，仅使用数字。
- [EXPERIENCE] — 街角经营年数（默认：“7 years”）。像“7 years”这样的简单短语；用于首屏文案。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/car-wash-and-detailing-website（默认：是；删除此行即可移除）

“页面与区块”下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 湿黑（Wet black）`#0A0A0C` — 页面底色
- 面板黑（Panel black）`#121218` — 深色背景上的卡片和面板
- 浮起面板（Panel raised）`#181820` — 悬停和选中面板状态
- 糖果蓝（Candy blue）`#2D7BFF` — 电光强调色：CTA、激活标签、价格、滑块手柄
- 蓝色辉光（Blue glow）`#6FA8FF` — 渐变端点、高光、深色背景上的链接
- 泡沫白（Foam white）`#F4F7FB` — 深色背景上的主文本、浅色卡片强调
- 泡沫浅染（Foam tint）`#E9F1FB` — 选中标签的文本和礼品卡缎带
- 钢灰（Steel）`#8A94A6` — 深色背景上的次要文本
- 细线（Hairline）`#23232C` — 深色背景上的细线分隔和卡片边框

### 字体排印（Typography）
- 展示字体：标题、价格、时间、导航：Chakra Petch（OFL），字重 600/700
- 正文字体：段落、控件、菜单：Inter（OFL），字重 400/500/600/700

### 布局与动效（Layout & motion）
- 间距：桌面端区块间距 88px / 移动端 60px；区块标题使用 13px 字距的糖果蓝眉题，下方为 Chakra Petch 700 标题，字号 clamp(28px, 3.2vw, 44px)；卡片内边距 24px，间距 20px。
- 圆角：汽车式柔和感：卡片和标签 10px，胶囊形 CTA；照片 10px，边框顶部有 1px 蓝色边。
- 动效：通过 useInView 实现淡入上浮显现（12px，450ms，50ms 错峰），仅触发一次——快速且有光泽感。
- 动效：切换尺寸时价格以 180ms 补间过渡；盈亏平衡数字以 300ms 计数到新值；悬停时高光扫过卡片，耗时 1200ms。
- 动效：拖动时滑块手柄直接跟随指针，释放时以 200ms 弹簧效果归位。
- 动效：所有动效（包括扫光和珠点图案）在 prefers-reduced-motion 下立即禁用；无视差、无滚动劫持、无自动播放媒体。
- 图像：来自同一次拍摄的深色光泽汽车摄影：蓝色灯光洗车工位中覆满白色泡沫的汽车、镜面光泽的面板反射、同一视角下的旋纹与修复后车漆对比、 pristine 皮革内饰细节和自助吸尘站——仅使用通用车型，无徽标、无车牌、无人物。

## 页面与区块
### [BRAND] — [CITY] 的洗车与汽车美容（`index.html`）
1. **页头与首屏** — 页头（湿黑 92% 配背景模糊，68px，吸顶）：水滴标志（泡沫白圆环中的糖果蓝水滴）+ [BRAND]，Chakra Petch 700 大写泡沫白 17px；导航锚点 Washes、Unlimited、Detailing、Book、Fleet；右侧：电话胶囊 Phone 图标 + 蓝色 [PHONE]（tel:）以及糖果蓝药丸按钮 'Book a slot'。390px 时：标志 + 名称、电话图标按钮、菜单按钮排成一行；锚点收进面板黑下拉菜单。首屏：全出血泡沫照片（蓝光工位中覆满白色泡沫的汽车，桌面 82vh / 移动端 560px），配从湿黑 95% 到透明 50% 的底部向上渐变遮罩，以及淡淡的 CSS 水珠图案叠加层；内容位于左下：糖果蓝眉题 'TUNNEL WASH · HAND DETAIL — [CITY]'；H1 Chakra Petch 700 大写泡沫白 'DIRT DOESN'T STAND A GLOSS.'；段落钢灰 'Soft-cloth tunnel, spot-free rinse, and a hand-finish bay — [FOUNDER]'s crew has kept [CITY] shiny for [EXPERIENCE]. Pick your size below; every price updates.'；糖果蓝药丸按钮 'Book a slot'（锚点）和泡沫描边药丸按钮 'See memberships'（锚点）；12px 泡沫白标签置于半透明面板黑上：'Open daily 7a–8p' · 'Water reclamation — 80% reused' · 'Free vacuums with any wash'。
   布局：文案占第 1–7 列；390px 时标签最多换两行；遮罩保证 AA 对比度。
   动效：照片从 1.04 缩放至 1，历时 800ms；文案上移 12px，错开 60ms。
2. **洗车套餐与尺寸选择器** — 湿黑区块。眉题 'THE TUNNEL'（糖果蓝）；标题 'Three washes. Pick your size.' 车辆尺寸选择器行（桌面端吸顶于页头下方）：三个标签 'Sedan'（Car 图标）、'SUV & van'（Car 图标）、'Truck & oversize'（Truck 图标）——激活标签填充糖果蓝配泡沫白文字；12px 钢灰注释 'Prices below match your size.' 三张套餐卡片（面板黑，1px 蓝色顶边，悬停时高光扫过）：'Express' — '$14' — '5 minutes' — 'Soft-cloth wash, spot-free rinse, wheel blast, air dry.'；'Deluxe' — '$24' — '12 minutes' — 'Everything in Express plus triple-foam wax, tire shine and underbody blast.'，以泡沫白标签标注 'MOST WASHED'；'Ceramic Shine' — '$39' — '25 minutes' — 'Everything in Deluxe plus a ceramic sealant pass and 10-minute hand-finish in the bay.' 价格以 Chakra Petch 700、40px 渲染，并在尺寸切换时重新补间；每张卡片页脚：蓝色链接 'Book this'（锚定表单并预选该服务）。
   布局：三张卡片一行（900px 以下单列）；选择器居中于上方，全宽；价格补间 180ms。
   动效：卡片上移 12px，错开 60ms；悬停时高光扫过；尺寸切换时价格补间 180ms。
3. **无限会员选择器** — 带水珠图案的面板黑区块，标志性区块。眉题 'UNLIMITED'（糖果蓝）；标题 'The membership math, shown.' 三张会员卡片：'Suds Unlimited' — '$29 / mo' — 'Unlimited Express-and-up washes. Any day, both lanes.'；'Gloss Unlimited' — '$45 / mo' — 'Plus vacuums, tire foam and a dash wipe on every visit.'，以泡沫白标注 'BEST VALUE'；'Everything' — '$69 / mo' — 'Plus a monthly ceramic boost and a quarterly interior refresh.' 卡片下方为实时计算条（糖果蓝边框）：'Break-even: ≈ 1.7 Deluxe washes — everything after that is free gloss.'，随尺寸选择器更新。12px 钢灰脚注：'Sample prices, month-to-month, cancel any time. Join at the counter or the pay station — this demo doesn't take a card.' 一行三步的 'How unlimited works'：'Windshield tag at the gate → wash detected automatically → drive out, no wallet'。蓝色药丸按钮 'Start at the counter →' 锚定预约表单并预选 'Membership signup'。
   布局：三张卡片一行（900px 以下单列）；计算条全宽置于下方；步骤三列并排。
   动效：变更时盈亏平衡数字计数至目标值，历时 300ms；卡片上移 12px，错开。
4. **漆面修复滑块** — 湿黑区块。眉题 'PROOF'（糖果蓝）；标题 'Swirls out. Gloss in.' 前后对比滑块（最大宽度 1080px，4:3 照片裁切为 16:9）：before-paint（强光下暗淡、有旋纹的清漆层）位于 after-paint（修复后的镜面光泽）之下，糖果蓝手柄配双箭头，顶部两角为 'BEFORE' / 'AFTER' 标签。13px 钢灰说明：'Fender panel, machine polish stage two — same light, same angle. No filters; the bay camera doesn't have any.'
   布局：滑块居中；指针拖拽、点击定位、聚焦时方向键控制；44px 手柄。
   动效：手柄直接跟随指针，以 200ms 弹簧效果稳定；裁切每帧更新。
5. **美容菜单** — 面板黑区块。眉题 'HAND DETAIL'（糖果蓝）；标题 'Menu by the hour, priced by size.' 四行服务（细线分隔）：'Interior Detail' — '$189' — '3 hours' — 'Full interior deep-clean: steam on fabric, leather conditioner, glass, jambs.'；'Machine Polish' — '$349' — '5 hours' — 'Two-stage correction cutting swirls and oxidation; measured with a gloss meter.'；'Ceramic Coating' — '$899' — '8 hours' — 'Multi-layer ceramic with a 24-month sample warranty; cured overnight indoors.'；'Headlight Restore' — '$89' — '45 minutes' — 'Wet-sand, polish and seal — output measured before and after.' 每行：预约按钮 'Book'（蓝色药丸）预选表单；价格随尺寸选择器重新补间。菜单旁为内饰美容照片（10px 边框）。
   布局：菜单占 7 列，照片占 5 列；移动端先菜单后照片堆叠。
   动效：各行淡入，间隔 50ms；尺寸切换时价格补间 180ms。
6. **设备与水信任** — 湿黑区块。眉题 'THE BAY, EXPLAINED'（糖果蓝）；标题 'Gentle on paint, loud about water.' 四张事实卡片：'Soft-cloth everything' — 'No brushes on paint — closed-cell foam and microfiber only.'；'Water reclamation' — '80% of every wash is filtered and reused; the bay floor drinks first.'；'Spot-free final rinse' — 'Deionized water, so drying marks never start.'；'Hand-finish bay' — 'Two towels minimum on any glossy surface, always.' 统计行计数动画：'310k' 'washes run' · '80%' 'water reused' · '4.9' 'from 502 reviews'。
   布局：四张卡片 2×2（800px 以下单列）；统计三列并排置于下方。
   动效：数字计数 800ms；卡片上移 12px，错开。
7. **按时段预约** — 面板黑区块。眉题 'BOOK A SLOT'（糖果蓝）；标题 'Twelve minutes, scheduled.' 表单（湿黑面板，最大宽度 720px）：服务选择（所有洗车、美容、'Membership signup'）；相对日期标签（Today / Tomorrow / This weekend），每个附三个示例时段（Morning 8:00 / 9:30 / 11:00；Midday 12:30 / 2:00；Late 4:30 / 6:00）；Name（必填）、Phone（必填）；车辆尺寸标签与全局选择器一致。糖果蓝药丸提交按钮 'Hold my slot'。内联校验（2px 蓝色边框，13px 注释），无原生弹窗。成功：CheckCircle2 蓝色，时段代码 'SLT-402' 以 Chakra Petch 700 24px 显示，'Held for 2 hours — reply to the confirmation text if you're running late. This demo stores the booking in this browser only.' 以及描边药丸按钮 'Book another'。持久化到 localStorage。
   布局：桌面端字段两列，移动端单列，底部内边距 96px 以避开吸底栏；时段标签 44px 触控目标。
   动效：成功状态交叉淡入并上移 12px；代码弹出至 1.1×。
8. **礼品卡与车队** — 湿黑区块，左右两半。左：'Gift cards' — 代码绘制的糖果蓝卡片配泡沫丝带；预设标签 $25 / $50 / $100 及自定义金额注释；文案 'Redeemable for washes, details and memberships — emailed instantly, plastic-free (sample).' 右：'Fleet accounts' — 简短表单：company、contact name、email（三项必填），车辆滑块 2–40，频率标签（Weekly / Biweekly / Monthly）；内联成功提示 'We'll call with a lane plan and monthly invoicing — no per-visit receipts in the cupholder.'；两者均在本地持久化。
   布局：桌面端 6/6 列，移动端堆叠。
   动效：卡片悬停倾斜 4°；面板上移 12px。
9. **评价与页脚** — 面板黑区块。眉题 'FROM THE LANES'；标题 'Shiny, and said nicely.' 三张引用卡片：五颗蓝色星；泡沫白 15px 引用；钢灰 13px 页脚。'The membership math strip is real — I wash twice a week and my truck pays for Everything by the 9th.' — Danny R., Silverado。'They photographed my fender before and after polish and printed the gloss-meter numbers. Nerds. Excellent nerds.' — Priya M., hatchback。'Water reclamation is why I switched. Also the free vacuums have actual suction.' — Gwen A., minivan。12px 钢灰免责声明：'Sample reviews for this demo.' 页脚（湿黑）：第 1 列 — 标志 + [BRAND]，'4 Harbor Loop Road, [CITY]'，'Daily 7a–8p · details by slot'，[PHONE]（tel:）；第 2 列 'Studio'：锚点 Washes、Unlimited、Detailing、Fleet；第 3 列 'Small print'：'Sample site for a template — prices, slots and reviews invented'，'No real payment or subscription anywhere in this demo'，可选蓝色 [CREDIT] 链接。移动端吸底栏（768px 以下）：固定底部湿黑 96% + 模糊；糖果蓝药丸按钮 'Call'（tel:）和泡沫描边药丸按钮 'Book'（锚点），安全区内边距。
   布局：三张卡片一行（900px 以下单列）；页脚网格 4/4/4，移动端单列；768px 以下 body 底部内边距 80px。
   动效：卡片上移 12px，错开 70ms。

## 资源
- 图片：泡沫主视觉。下载 https://media.vibefather.ai/assets/4040e97e-485b-467c-842e-83aaab08c7b6/hero-foam.webp 到 public/images/hero-foam.webp。替代文本：'A car covered in white foam inside a blue-lit wash bay.' 主视觉锚点。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：光泽反射。下载 https://media.vibefather.ai/assets/4040e97e-485b-467c-842e-83aaab08c7b6/gloss-reflection.webp 到 public/images/gloss-reflection.webp。替代文本：'A mirror-gloss car panel reflecting blue studio light.' 设备带中的辅助图片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：施工前车漆。下载 https://media.vibefather.ai/assets/4040e97e-485b-467c-842e-83aaab08c7b6/before-paint.webp 到 public/images/before-paint.webp。替代文本：'A car fender panel with swirl marks under harsh light.' 滑块的前图层。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：施工后车漆。下载 https://media.vibefather.ai/assets/4040e97e-485b-467c-842e-83aaab08c7b6/after-paint.webp 到 public/images/after-paint.webp。替代文本：'The same fender panel corrected to a mirror gloss.' 滑块的后图层，与施工前视角匹配。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：内饰细节。下载 https://media.vibefather.ai/assets/4040e97e-485b-467c-842e-83aaab08c7b6/interior-detail.webp 到 public/images/interior-detail.webp。替代文本：'A pristine leather car interior after detailing.' 位于汽车美容菜单旁。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：吸尘区。下载 https://media.vibefather.ai/assets/4040e97e-485b-467c-842e-83aaab08c7b6/vacuum-bay.webp 到 public/images/vacuum-bay.webp。替代文本：'A row of self-serve vacuum stations in a clean bay.' 信任带中的辅助图片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图标：Lucide（ISC），通过 lucide-react 包引入，仅限设置中的图标列表。不使用其他图标来源。
- 字体：Chakra Petch（OFL）和 Inter（OFL），通过 @fontsource/chakra-petch 和 @fontsource/inter 自托管；不通过 CDN 加载字体。

## 禁止事项
- 不得使用真实洗车品牌、连锁店或其标语；[BRAND]、价格、时段和评价均为虚构的示例数据。
- 照片中不得出现真实车辆品牌、车标或车牌；车辆均为通用且无标识的车型。
- 不得使用真实汽车美容产品或设备品牌（蜡、涂层、机器）；产品以通用方式描述（陶瓷密封剂、双作用抛光剂、去离子水冲洗）。
- 不得提及真实支付处理商或订阅平台；会员保持按月示例定价，且任何时候不在线收取银行卡信息——页面须明确说明这一点。
- 不得作出奇迹般的美容承诺：不得出现“展厅级保证”，不得作出超出标注“示例保修”范围的涂层寿命承诺；修复以工艺和测量数据来描述。
- 不得使用与真实时钟绑定的日期：预约使用相对日期标签和静态示例时段，不使用日历日期，不显示版权年份。
- 表单仅为本地示例：不向任何服务器提交，不使用 API，不使用分析工具，不进行真实礼品卡购买。仅持久化到 localStorage，并验证恢复的数据。
- 不使用后端、服务器代码、数据库或认证。通过单一构建命令在 dist/ 中输出静态文件，大小低于 20 MB，Vite 的 base 使用相对路径。
- 仅通过 Fontsource 包自托管字体；绝不加载 Google Fonts、Adobe Fonts 或任何 CDN 样式表或脚本。
- 生产环境不生成 source map，不将 src/ 复制到 dist/。
- 不使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务或热链接文件；仅使用六张生成的图片和代码绘制的 SVG/CSS 图形。
- 不做 SEO 工作：不写 meta 描述、Open Graph 标签、JSON-LD、站点地图或堆砌关键词的标题。一个包含 [BRAND] 的普通标题和一个 favicon 即可。
- 仅一个价格来源：所有显示的价格均通过尺寸选择器从 content.ts 表格派生——绝不硬编码第二份副本。
- 湿黑（wet-black）和面板黑（panel-black）上的文字满足 AA 对比度；镜面扫光和珠点图案为装饰层，绝不置于正文文字后方。
- 不做滚动劫持、页面视差、自定义光标或自动播放媒体；动效仅限于指定的显现、补间、扫光、计数递增和滑块弹簧效果，且均遵循 prefers-reduced-motion。
- 在 390px 宽度下保持移动端页头单行显示，且绝不让粘性底栏遮挡预约表单的提交按钮。
- 从 [BRAND] 和 [PHONE] 构建品牌派生字符串（存储键、tel: 链接），以便替换变量值后不会残留默认品牌痕迹。
- 每个内部链接均为文件名或页内锚点，绝不为裸目录；站点保持为单个 index.html。

---
— Prompt by VibeFather · https://vibefather.ai/t/car-wash-and-detailing-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
