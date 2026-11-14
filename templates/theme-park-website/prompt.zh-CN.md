> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 主题公园网站

完全按照下面的描述构建这个网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个完全用代码绘制的单页主题公园网站：糖果色系品牌识别，一张插画风格的 SVG 公园地图作为主视觉锚点，包含分区、扁平矢量地标和可筛选的游乐设施圆点，配套的游乐设施列表，厚实醒目的门票与通行证对比（带演示按钮），一条示例的营业时间与演出信息条，以及一个本地保存的“规划你的一天”清单，附带可重新排序的行程安排。

- 受众：主题公园、水上乐园、家庭游乐景点和探险场馆，以及正在制作其夏季页面的工作室。
- 目标：让一个家庭从“哇，快看”走到规划好的一天：玩转地图、按孩子的身高筛选游乐设施、挑选门票，并带着一份已保存的行程离开——所有这些都如实标注为示例数据，且未接入任何票务系统。
- 语气：欢乐向前、带点甜腻，但绝不喧闹——允许双关，感叹号要节制；颜色在呐喊，文案则可以保持友好。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/fredoka（OFL）、@fontsource/dm-sans（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 使用 npm create vite@latest theme-park-website -- --template react-ts 搭建脚手架；将 tailwindcss@3.4、postcss 和 autoprefixer 添加为开发依赖；将 motion、lucide-react、@fontsource/fredoka 和 @fontsource/dm-sans 添加为依赖。
  - vite.config.ts：base './'，build.sourcemap false，构建输出 dist/。
  - tailwind.config.js：扩展颜色 cream #FFF8F0、bubblegum #FF7DA5、sky #79C7F2、lemon #FFD23F、mint #7BD9B0、grape #4A3560、lilac #8E7AAE、snow #FFFFFF；fontFamily display 'Fredoka' 和 sans 'DM Sans'；radius：chunky 默认值（chip 14px、card 24px、blob 32px）。
  - postcss.config.js：tailwindcss + autoprefixer。
  - src/components/ParkMap.tsx：插画地图放在一个 SVG 中，viewBox 0 0 900 560 —— 四个区域色块为圆角有机多边形，采用平涂填充（Candy Canyon 用 bubblegum、Sky Harbor 用 sky、Lemon Grove 用 lemon、Mint Meadow 用 mint），底部有一条 lilac 入口条带，带两条连接各区域的路径线，Sky Harbor 中有一个小湖形状，树点（12px 的 mint/grape 圆形，位于固定位置），扁平矢量地标（Sky Harbor 中一个带 8 根辐条的摩天轮圆形，Candy Canyon 中一条单环过山车路径，Mint Meadow 中一个带三角屋顶的旋转木马圆形），以及十四个游乐设施点（12px 白色描边圆形，使用其区域颜色，位置固定，来自 content.ts）；圆点在加载时交错弹出；filter 属性（thrill | height）将不匹配的圆点以灰度调暗至 15%（250ms）；点击圆点打开弹出卡片；键盘焦点以按钮形式在圆点间移动。
  - src/components/RideIcon.tsx：六个小型扁平矢量游乐设施图标，用 SVG 绘制（过山车环、旋转器、跳楼机、激流冲溅、旋转木马、摩天轮）—— 简单几何形状，区域配色，28px，除 grape 2px 外无轮廓。
  - src/components/Confetti.tsx：一次性爆发六个小糖果形状（圆形、三角形、方形，使用四种区域颜色），从触发点上升 40px 并在 600ms 内淡出，aria-hidden，在 prefers-reduced-motion 下禁用。
  - src/hooks/useDayPlan.ts：规划你的一天状态 —— 一个有序的游乐设施/演出 id 数组，持久化到 localStorage 键 'dayPlan'；暴露 add/remove/moveUp/moveDown/clear；添加时触发一次 Confetti 爆发。
  - src/lib/motion.ts：弹性变体 —— popIn（scale 0.6→1，spring stiffness 260 damping 18）、reveal（opacity 0→1，y 22→0，500ms ease-out，70ms stagger，whileInView once）—— 配合 useReducedMotion 回退到普通 200ms 淡入淡出，且无 confetti 或弹簧。
  - 将所有面向用户的字符串和数据集（公园、城镇、票价、游乐设施数量、区域、rides 数组 {id, name, zone, thrill 'mild'|'wild'|'max', height 'any'|'102'|'122', icon, blurb, mapAt{x,y}}、shows、hours、tickets）保留在 src/content.ts 中；各区块从中读取，以便在一处替换值。
  - index.html：<title>[BRAND] — [CITY]'s Theme Park</title> 加上一个代码绘制的 favicon.svg（cream 背景上的 bubblegum 气球圆形）；无其他 meta 工作。

## 变量
- [BRAND] — 公园名称（默认：“Jubilee Junction”）。为字标、主视觉标题、页面标题和页脚虚构的公园名称。
- [CITY] — 城镇（默认：“Fernhollow”）。公园所在的虚构城镇——主视觉副标题行、地址和页脚。
- [TICKET_DAY] — 日票价格（默认：“$58”）。门票对比中的日票价格，以及页头 CTA 的预期。
- [RIDES] — 游乐设施数量（默认：“24”）。主视觉统计行中的示例游乐设施总数（'[RIDES] rides, four zones — sample'）；地图上展示了其中十四个。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/theme-park-website（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 奶油色（Cream）`#FFF8F0` — 全站页面底色 — 温暖的糖果店奶油色。
- 泡泡糖粉（Bubblegum）`#FF7DA5` — 区域 1（Candy Canyon）及主强调色：CTA、激活态标签、被标记的票券。
- 天空蓝（Sky）`#79C7F2` — 区域 2（Sky Harbor）；次级标签和信息底色。
- 柠檬黄（Lemon）`#FFD23F` — 区域 3（Lemon Grove）；高亮标签、营业时间条上的太阳图标。
- 薄荷绿（Mint）`#7BD9B0` — 区域 4（Mint Meadow）；成功状态、已加入计划的勾选标记。
- 葡萄墨色（Grape ink）`#4A3560` — 正文文字及所有 SVG 描边 — 深葡萄色，绝不用黑色。
- 丁香紫（Lilac）`#8E7AAE` — 次级文字、地图入口条、元信息行。
- 雪白（Snow）`#FFFFFF` — 卡片、面板、游乐设施圆点描边 — 在奶油色底上呈现清爽的白色。

### 字体排印
- 展示字体 — 园区名称、标题、区域名称、票价（粗圆体）：Fredoka（OFL），字重 500/600/700
- 正文字体 — 正文、标签、游乐设施简介、清单（标签大写、字距 0.08em）：DM Sans（OFL），字重 400/500/700

### 布局与动效
- 间距：活泼且宽松：区块桌面端 py-24（96px）/ 移动端 py-16；内容 max-w-6xl px-6/px-10；厚实卡片内边距 24px、间距宽裕的 24px；地图面板占满内容宽度，四周留 32px 空白。
- 圆角：处处厚实圆润：卡片和地图面板 24px，标签和输入框 14px，按钮 999px 胶囊形，区域形状 32px 不规则圆角；没有任何直角。
- 动效：地图圆点加载时弹出（scale 0.6→1，弹簧 stiffness 260 damping 18，错峰 40ms）— 仿佛园区正在点亮灯光。
- 动效：筛选：不匹配的圆点和游乐设施卡片变暗至 15% 并灰度化（250ms）；匹配项弹跳一次（scale 1→1.04→1）；等宽风格说明文字中的计数即时更新。
- 动效：游乐设施弹出层：卡片从其圆点处弹出（scale 0.8→1 弹簧），点击外部、按 Escape 或点其 X 关闭。
- 动效：加入计划：清单行弹出，伴随六种形状的 Confetti 爆发（600ms，每次添加触发一次）；上移/下移以 200ms 滑动行。
- 动效：入场揭示：区块和卡片上升（y 22→0，500ms ease-out），通过 Motion 的 whileInView 以 70ms 错峰，仅一次；票券卡片落地时带轻微过冲。
- 动效：prefers-reduced-motion：无弹出、弹簧或 Confetti；圆点和卡片静止渲染；筛选即时切换；所有入场揭示变为 200ms 透明度淡入。
- 图像：零摄影 — 整个园区由扁平矢量代码绘制：糖果色区域色块、几何地标（摩天轮、环形过山车、旋转木马）、无面孔的简单树木和人群圆点、微型游乐设施图标以及 Confetti 形状。所有元素共享同一种扁平插画语言：2px 葡萄色描边、纯色填充、无渐变、无纹理、无带面孔的角色或吉祥物。

## 页面与区块
### [BRAND] — [CITY] 主题公园（`index.html`）
1. **页眉（Header）** — 固定顶栏，64px，奶油色底、94% 不透明度，带柔和阴影。左侧：[BRAND] 字标，Fredoka 700 20px，葡萄紫（grape）。右侧（桌面端）：锚点链接 'Map'、'Rides'、'Tickets'、'Shows'、'Plan'，DM Sans 700 14px 葡萄紫 → 悬停时变为泡泡糖粉（bubblegum）；随后是泡泡糖粉胶囊按钮 'Get tickets'（雪白文字）→ #tickets。移动端：字标 + 胶囊按钮 + lucide 菜单/x 切换按钮，点击展开雪白面板，五个链接纵向堆叠。
   布局：position fixed，z-40。
   动效：移动端面板弹跳下落 300ms；链接悬停 150ms；胶囊按钮按下时压缩至 0.96。
2. **主视觉 — 插画地图** — 地图上方左侧区块：标签 DM Sans 700 12px 大写、字距 0.12em、泡泡糖粉：'[RIDES] RIDES · FOUR ZONES · [CITY]'；标题 Fredoka 700 clamp(2.75rem, 6vw, 4.75rem) 葡萄紫：'Pick your thrill.'；副标题 DM Sans 400 17px 淡紫（lilac）、max-w 42ch：'Tap a dot, check the height, build your day. [BRAND] is a demo park — every number on this page is sample copy.' 行动按钮：'Plan your day'（泡泡糖粉胶囊）→ #plan；'See tickets'（葡萄紫描边）→ #tickets。然后是 ParkMap 面板（雪白底、24px 圆角、葡萄紫 2px 边框）：四个区域色块，名称以 Fredoka 600 16px 葡萄紫置于色块上，另有地标、游乐设施圆点，以及停靠在面板底部的浮动筛选栏（雪白胶囊行）：THRILL [All / Mild / Wild / Max] × HEIGHT [All / Any height / 102 cm+ / 122 cm+]。点击圆点打开设施弹出层：名称 Fredoka 600 18px 葡萄紫、区域标签、刺激度计量（三个实心/空心葡萄紫圆点）、身高标签、简介行，以及 'Add to my day +'（薄荷绿胶囊）——点击后加入清单并触发彩纸效果。
   布局：min-h auto：文字区块限制在 max-w-2xl，位于地图上方；地图面板占满内容宽度（宽高比约 16:10），筛选栏位于其底边内侧；移动端：地图在面板内以 4:3 横向滚动，筛选栏随后堆叠到下方。
   动效：圆点加载时错峰弹出；筛选时非匹配圆点变暗（250ms），匹配圆点弹跳一次；弹出层从圆点处弹出；减少动态效果：圆点静止，筛选即时生效。
3. **设施列表** — id=rides。标签 'ALL RIDES' 泡泡糖粉；标题 Fredoka：'Nine of [RIDES], filtered.' 此处镜像同样的 THRILL/HEIGHT 筛选器（与地图共享状态）。设施卡片（雪白、24px 圆角、葡萄紫 2px 边框）排成 3 列网格：区域配色的 RideIcon、名称 Fredoka 600 18px 葡萄紫、简介 DM Sans 14px 淡紫、区域标签、刺激度计量（三个圆点）和身高标签，以及 'Add to my day +'（薄荷绿胶囊，添加后变为薄荷绿对勾 'In your day'）。设施：'Gumdrop Coaster' — Candy Canyon — mild, any height — 'First loops, gentle speed, endless grins.' / 'Taffy Twister' — Candy Canyon — wild, 102 cm+ — 'Spins until the horizon disagrees.' / 'Sky Diver' — Sky Harbor — max, 122 cm+ — 'Straight down, politely.' / 'Cloud Carousel' — Sky Harbor — mild, any height — 'Bobbing seahorses, vintage paint.' / 'Big Wheel' — Sky Harbor — mild, any height — 'The view, at a civilized speed.' / 'Lemon Drop Tower' — Lemon Grove — wild, 122 cm+ — 'Up slowly, down immediately.' / 'Citrus Splash' — Lemon Grove — wild, 102 cm+ — 'The flume with the famous final wave.' / 'Mint Express' — Mint Meadow — mild, any height — 'A family coaster through the mint beds.' / 'Meadow Racers' — Mint Meadow — wild, 102 cm+ — 'Head-to-head karts, one winner's photo.' 说明文字：'HEIGHTS AND THRILL LEVELS ARE SAMPLE DATA.'
   布局：3 列网格（平板 2 列、移动端 1 列），间距 24px；标签在卡片内换行。
   动效：筛选时匹配卡片弹跳一次、非匹配变暗（250ms）；卡片错峰 70ms 显现；添加时弹出薄荷绿对勾并触发彩纸；减少动态效果：筛选即时生效，仅用淡入淡出。
4. **门票** — id=tickets。标签 'TICKETS' 泡泡糖粉；标题：'Pick your wristband.' 三张厚实卡片（雪白、24px 圆角、葡萄紫 2px 边框）：'DAY PASS' — '[TICKET_DAY]' Fredoka 700 44px 葡萄紫 — 行首带 lucide 对勾（薄荷绿）：'All [RIDES] rides' / 'Both daily shows' / 'Free parking after noon'。'SEASON PASS' — '$149' — 带泡泡糖粉缎带 'PICKED FOR SUMMER' 和泡泡糖粉边框：'Every open day' / 'Bring-a-friend mornings' / '10% off snacks'。'FAMILY FOUR' — '$199' — 'Two grown-ups, two kids' / 'All rides and shows' / 'One souvenir photo'。每张卡片的 'Buy — demo' 按钮（葡萄紫胶囊）会显示共享的行内提示（300ms）：'Demo button — no ticketing is connected; nothing is charged.' 说明文字：'PRICES ARE SAMPLE DATA.'
   布局：3 列网格（移动端堆叠），间距 24px；季卡在桌面端上浮 8px；缎带横跨其顶部边框。
   动效：卡片显现时带轻微过冲落地；缎带摆动一次（±3°，500ms）；演示提示淡入并保持。
5. **营业时间与演出** — id=shows。柠檬色调条带：'TODAY'S HOURS' 为 DM Sans 700 12px、字距加宽、葡萄紫，'10:00 — 20:00' 为 Fredoka 700 32px 葡萄紫，以及淡紫示例说明 'SAMPLE HOURS — NO REAL CLOCK.' 然后是三行演出（雪白卡片、24px 圆角）：'Parade of Sprinkles' — '13:00 & 17:00 · Main Street' — 'Floats, brass, one very slow tortoise.' / 'Harbor Stunt Dive' — '14:30 · Sky Harbor stage' — 'Kites, trampolines, a suspicious amount of confetti.' / 'Lantern Glow' — '19:30 · Mint Meadow' — 'A quiet end; bring the sleepy ones.' 每行演出都带一个 'Add to my day +' 薄荷绿胶囊，接入同一清单。
   布局：营业时间条带占满宽度，带柠檬色太阳图标（手绘 SVG）；演出行排成 3 列网格（移动端堆叠）。
   动效：条带淡入上移；演出卡片错峰 70ms 显现；太阳图标显现时旋转 360° 一次（800ms）；减少动态效果：不旋转。
6. **规划你的一天** — id=plan。标签 'PLAN YOUR DAY' 泡泡糖粉；标题：'Your day, in order.' 引言 DM Sans 16px 淡紫：'Tap rides and shows anywhere on this page — they land here, saved on this device.' 行程面板（雪白、24px 圆角、葡萄紫 2px 边框）：有序行，带编号泡泡糖粉徽章、名称 Fredoka 600 16px 葡萄紫、其区域标签，以及控件（lucide arrow-up、arrow-down、x，均 ≥ 44px）；空状态：一张薄荷绿虚线描边卡片，写着 'Nothing yet — go tap something fun on the map.' 按钮：'Clear the day'（葡萄紫描边）和摘要行 '6 stops · 3 rides · 2 shows · 1 parade'（实时更新）。说明 DM Sans 13px 淡紫：'Saved on this device only — this demo sends nothing.'
   布局：面板 max-w-3xl mx-auto；行高 64px，间距 12px；控件右对齐；移动端保持相同顺序。
   动效：新行弹入（弹簧效果），彩纸在面板右上角爆发；上移/下移滑动行 200ms；清空时行淡出 200ms；减少动态效果：仅淡入淡出，无彩纸。
7. **页脚** — 奶油色底，顶部葡萄紫 2px 边框（页面上唯一一条强分隔线）。左侧：[BRAND] 字标和一行 DM Sans 13px 淡紫：'1 Confetti Way, [CITY] — an invented park; rides, heights, hours and prices on this page are sample copy.' 右侧：锚点链接 'Map · Rides · Tickets · Shows · Plan'，葡萄紫；可选 [CREDIT] 链接。无日期，无社交行。
   布局：py-12，max-w-6xl，flex 行，移动端换行为列。
   动效：无。

## 资产
- 图标：lucide-react（ISC）通过 npm 引入——在票券行和已加入计划状态上使用 check，在行程控件上使用 arrow-up、arrow-down 和 x，在需要的地方使用 plus 和 minus，在营业时间条上使用 sun 和 clock，在页脚使用 map-pin，在移动端页眉使用 menu 和 x。不使用其他图标：不使用 emoji，不使用乐园连锁标志，不使用游乐设施标志。所有视觉元素——乐园地图、区域色块、地标、游乐设施图形、彩纸和太阳——均由构建器按照各节规范用 SVG 绘制；任何地方都不使用图片文件。
- 字体：@fontsource/fredoka（OFL，字重 500、600、700）和 @fontsource/dm-sans（OFL，字重 400、500、700），在 src/main.tsx 中导入；绝不从 fonts.googleapis.com 或任何 CDN 加载。在项目根目录的 ASSETS.md 中列出这两个字体家族和 lucide 图标包：路径、来源、许可证——没有图片资产需要列出。

## 不要做的事
- 不做售票后端，不做支付，不做网络请求：购买按钮是演示锚点，点击后显示内联提示（'no ticketing is connected; nothing is charged'），套餐仅保存到 localStorage，并附上如实说明。
- 不使用真实主题公园、游乐设施名称、演出或特许品牌：公园、游乐设施、演出和价格均为虚构；不得出现城堡、角色、老鼠耳朵或任何类似真实公园或特许品牌的剪影——地图地标保持通用几何形状（摩天轮、环形轨道、旋转木马）。
- 身高、刺激等级、营业时间和演出时间均为示例数据，并保持标注；不得出现与真实时钟绑定的日期——'today's hours' 是静态示例，绝不感知时间。
- 所有内容均为代码绘制的扁平矢量图：不使用照片，不生成图像，不使用占位图服务；人物仅为无面部的人群圆点——不得出现有面部的人物，不得出现吉祥物。
- 不使用任何 CDN：字体通过 Fontsource 包提供，图标来自 lucide-react；不使用第三方脚本或嵌入内容。
- 生产构建：单条命令，压缩，无 source map，输出中不含 src/，使用相对路径（Vite base './'）；保持 dist/ 体积很小（远低于 20 MB——因为没有位图）。
- 单页面，使用锚点导航；必须在 1440×900 和 390×844 下干净渲染，控制台零错误；地图圆点、筛选器和行程控件必须是可用键盘操作的按钮，并具有可见焦点；所有动效必须遵循 prefers-reduced-motion（不使用弹出、弹簧或彩纸效果；仅使用普通淡入淡出）。
- 保持糖果风格锁定：奶油色底，四种区域色（bubblegum、sky、lemon、mint）加 grape ink，Fredoka 搭配 DM Sans，粗壮的 14–24px 圆角，仅使用扁平填充；无深色模式，无渐变，无玻璃拟态，无霓虹发光，界面过渡不得快于 300ms。
- 所有文案、标签、示例数据和 alt 文本均为美式英语，存放在 src/content.ts 中；当 [BRAND]、[CITY]、[TICKET_DAY] 或 [RIDES] 变化时，重写区域名称、游乐设施和演出以适配新公园，而不是在水上乐园下留下干式游乐设施的文案。
- 在项目根目录的 ASSETS.md 中列出每个第三方文件（两个 Fontsource 字体家族、lucide 图标）：路径、来源、许可证。

---
— Prompt by VibeFather · https://vibefather.ai/t/theme-park-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
