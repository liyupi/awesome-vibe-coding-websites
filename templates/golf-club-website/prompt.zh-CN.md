> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 高尔夫俱乐部网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个单页高尔夫俱乐部网站，采用优雅的深绿色与象牙白品牌形象：一个带有一处轻柔视差效果的清晨球道主视觉区，一个展示特色球洞的球场导览（含标准杆、码数和自动绘制的 SVG 球洞布局），一个按日期/时间排列的开球时间网格（含示例可用时段和本地保存的预订），三张象牙白卡片上的会员等级，一个会所餐饮区块，以及一条示例活动横条。

- 受众：高尔夫及乡村俱乐部、九洞球场和林克斯球场，以及那些正把自家网站拖进这个十年的工作室。
- 目标：让访客从景观走向第一洞发球台：爱上清晨的球场，了解各个球洞，三次点击内预订开球时间，并考虑加入会员——每一个数字都如实标注为示例数据。
- 语气：礼貌、从容、低调自豪——像秘书写的一封信，而不是宣传册；短句、精确数字、不用最高级形容词。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/playfair-display（OFL）、@fontsource/mulish（OFL）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化设置：
  - 使用 npm create vite@latest golf-club-website -- --template react-ts 脚手架创建项目；将 tailwindcss@3.4、postcss 和 autoprefixer 添加为开发依赖；将 motion、lucide-react、@fontsource/playfair-display 和 @fontsource/mulish 添加为依赖。
  - vite.config.ts：base 设为 './'，build.sourcemap 设为 false，构建输出到 dist/。
  - tailwind.config.js：扩展颜色 fairwaydeep #1E3D2B、fairway #2A4E38、ivory #F4EFE3、ivoryline #DED4BE、brass #B08D4A、brasslight #C9A968、pineink #2B3327、fescue #9BA791；fontFamily 中 display 设为 'Playfair Display'，sans 设为 'Mulish'；radius：panel 4px，pill 999px。
  - postcss.config.js：tailwindcss + autoprefixer。
  - src/components/HoleSVG.tsx：一个用代码手绘的球洞布局，viewBox 为 0 0 400 220——球道是一条粗的锥形路径（stroke 26px，圆头端点，球道绿色 #2A4E38），每个洞沿固定的路径字符串绘制；发球台是路径起点处一个 14px 的 pineink 方块；果岭是路径终点处一个 34×24 的椭圆（#7FA06B），带一条 3px 的 brass 旗杆线和圆点；两个沙坑是 20px 的 ivoryline 色块，按固定的偏移对放置；虚线橄榄色长草区以 40% 不透明度贴合球道路径；每个洞的路径数据、果岭位置和沙坑偏移都存放在 content.ts 中；球道路径在其卡片首次显示时，stroke-dashoffset 从 1→0 动画（800ms）。
  - src/components/TeeGrid.tsx：日期/时间选择器——三个静态示例日期标签（'Tuesday'、'Friday'、'Saturday'）与八个整点时段（07:00–11:00、13:00–15:00）交叉组合；单元格状态来自 content.ts 中固定的可用性映射（available / taken / selected）；点击可用单元格会将其选中（brass 填充），随后通过一行人数选择（2/3/4）完成预订。
  - src/lib/motion.ts：温和的动效变体——reveal（opacity 0→1，y 20→0，700ms cubic-bezier(0.16,1,0.3,1)，100ms 交错，whileInView once）、crossfade（300ms）——配合 useReducedMotion 跳过视差和描边绘制（球洞完整渲染），并使用普通的 200ms 淡入淡出。
  - 将所有面向用户的字符串和数据集（俱乐部、地区、果岭费、holes 数组 {n, name, par, yards, index, note, path, greenAt, bunkers}、发球台可用性映射、tiers、餐饮文案、活动、联系方式）保留在 src/content.ts 中；各区块从中读取，以便在一处替换值。
  - index.html：<title>[BRAND] Golf Club — [REGION]</title> 加上一个用代码绘制的 favicon.svg（在 fairway-deep 底色上的一条小 brass 旗杆线）；不做其他 meta 工作。

## 变量
- [BRAND] — 俱乐部名称（默认：“Kestrel Downs”）。为字标、页面标题、餐厅名称和联系邮箱（来自 content.ts）虚构的俱乐部名称。
- [REGION] — 场景设定（默认：“Aldermoor Heath”）。球场路线所经过的虚构场景——主视觉标签、地址行和页脚。
- [HOLES] — 球洞数量（默认：“18”）。主视觉标签和球场导览介绍（'an [HOLES]-hole heathland course'）中球场的球洞数量。
- [GREEN_FEE] — 访客果岭费（默认：“$95”）。主视觉副行和开球时间区块中的示例访客价格。
- [CREDIT] — 在页脚保留一个小的“Template by VibeFather”链接，指向 https://vibefather.ai/t/golf-club-website（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- Fairway deep（球道深绿）`#1E3D2B` — 全站页面底色 — 深石南绿，整个俱乐部的背景。
- Fairway（球道绿）`#2A4E38` — 绿色区域上的浅色调：发球台网格单元、活动行、悬停底色；SVG 球道描边。
- Ivory（象牙白）`#F4EFE3` — 面板、球洞卡片、会员卡、表单字段 — 俱乐部的纸张色。
- Ivory line（象牙白线条）`#DED4BE` — 象牙白上的细线：表格分隔线、卡片边框、SVG 中的沙坑色块。
- Brass（黄铜色）`#B08D4A` — 规则线与点缀：象牙白上的 1px 黄铜细线、球洞编号、标准杆/码数标签、CTA、SVG 中的旗杆。
- Brass light（浅黄铜色）`#C9A968` — 黄铜色的悬停与强调状态。
- Pine ink（松墨色）`#2B3327` — 象牙白上的主文本 — 用于衬线标题与正文的绿黑色墨水。
- Fescue（羊茅灰绿）`#9BA791` — 绿色区域上的次要文本：说明文字、元信息行、示例注释。

### 字体排印
- Display（展示字体）— 俱乐部字标、标题、球洞名称、价格（精致衬线体，斜体点缀）：Playfair Display（OFL），字重 500/600
- Text（正文字体）— 正文、标签、表格、表单标签（安静的 sans；标签大写，字距 0.14em）：Mulish（OFL），字重 400/500/600

### 布局与动效
- 间距：俱乐部信笺式的宽裕：桌面端区块 py-32（128px）/ 移动端 py-20；内容 max-w-6xl px-6/px-10；象牙白面板内边距 32px，配 1px 黄铜细线边框；球场导览卡片内边距 48px — 它是信笺抬头。
- 圆角：克制：面板、卡片和输入框 4px；仅两个 CTA 和标签使用 999px；照片保持直角。
- 动效：首屏：球道照片以滚动量 0.08 的比例视差移动（全页唯一一处视差），并在加载时用 2.5s 从 1.03 稳定到 1；标题延后 200ms 跟随。
- 动效：球洞布局：球道路径首次随卡片显示时，以 stroke-dashoffset 1→0 在 800ms 内自行绘制；沙坑和果岭在之后 300ms 淡入。
- 动效：球洞点按切换：上一个/下一个以 300ms 交叉淡入卡片内容，并伴随 12px 滑动；黄铜色的球洞编号翻动切换。
- 动效：发球台网格：可用单元在悬停时上浮 1px 并带黄铜色圆环（200ms）；选中时填充黄铜色、文字为象牙白；预订提示在 300ms 内淡入。
- 动效：入场显现：区块和卡片向上淡入（y 20→0，700ms cubic-bezier(0.16,1,0.3,1)），通过 Motion 的 whileInView 以 100ms 错峰，仅一次。
- 动效：prefers-reduced-motion：无视差或加载缩放，球洞路径立即完整渲染，所有入场显现变为普通的 200ms 透明度淡入。
- 图像：俱乐部的一个清晨：高尔夫球场和会所摄影，低角度金色晨光配柔和薄雾 — 球道和果岭上的露水，薄雾中的一面旗，象牙白光线下的深绿色，幽暗会所内景中的黄铜灯笼，石南与沙坑细节 — 宁静、专属、35mm 质感。高尔夫球手最多以远处背影出现，无可辨认的面孔。画面中任何地方都无可读文字（无标牌、记分板或记分卡），无标识。六张照片由 VibeFather 生成并下载到 public/images。

## 页面与区块
### [BRAND] 高尔夫俱乐部 — [REGION] (`index.html`)
1. **页头（Header）** — 固定顶栏，68px，在首屏主视觉上方透明。左侧：[BRAND] 字标使用 Playfair Display 600 21px 象牙白，下方为 Mulish 600 10px 大写、字距 0.3em 的 'GOLF CLUB'，颜色为羊茅绿（fescue）。右侧（桌面端）：锚点链接 'The Course'、'Tee Times'、'Membership'、'Dining'，使用 Mulish 500 13px 大写、字距 0.14em、羊茅绿 → 悬停时变为象牙白；随后是一个黄铜描边胶囊按钮 'Book a tee time'（象牙白文字）→ #tees。移动端：字标 + 胶囊按钮 + lucide menu/x 切换按钮，打开一个球道深绿（fairway-deep）面板，四个链接纵向堆叠。
   布局：position fixed，z-40；滚动 80px 后，顶栏获得 93% 不透明度的球道深绿底色、柔和模糊，以及 40% 不透明度的 1px 黄铜底部细线（300ms）。
   动效：底色与细线在阈值处淡入；移动端面板下滑 250ms；链接悬停 200ms。
2. **首屏主视觉（Hero）— 晨光初现** — 全出血清晨球道照片（public/images/fairway-morning.webp）：露水、低雾、远处一支旗杆。标题上方标签使用 Mulish 600 12px 大写、字距 0.2em、浅黄铜色（brasslight）：'AN [HOLES]-HOLE HEATHLAND COURSE · [REGION]'。标题使用 Playfair Display 500，clamp(3rem, 7vw, 5.5rem)，象牙白：'The heath, played properly.' 副标题，Mulish 400 17px 羊茅绿，max-w 48ch：'Fast greens, firm fairways, and weather that keeps the card honest. Visitors welcome Tuesday to Sunday — green fee [GREEN_FEE].' CTA：'Book a tee time'（黄铜胶囊按钮，球道深绿文字）→ #tees；'Tour the course'（象牙白文字，带浅黄铜色下划线）→ #course。
   布局：min-h 94vh；照片 absolute inset-0 object-cover object-center；遮罩 linear-gradient(180deg, rgba(30,61,43,0.42) 0%, rgba(30,61,43,0.18) 45%, rgba(30,61,43,0.94) 100%)；文字块位于左下，列 1–9，padding-bottom 104px。
   动效：照片以 0.08 视差移动，并在 2.5s 内从 1.03→1 稳定；标签、标题、副标题和 CTA 从 300ms 起以 100ms 间隔错开淡入上移；减少动态效果：静态照片，单次淡入。
3. **球场（The course）— 球洞卡片** — id=course。标签 'THE COURSE' 浅黄铜色；标题 Playfair：'Three holes worth the walk.' 一个象牙白面板（48px 内边距，1px 黄铜细线）承载精选球洞：球洞编号为巨大的 Playfair 黄铜数字（'01'），球洞名称（'Heather Start'），标签 'PAR 4 · 385 YDS · INDEX 7' 使用 Mulish 600 12px，置于象牙白细线（ivoryline）胶囊上，HoleSVG 布局，以及一行建议，使用 Mulish 斜体、象牙白底上的羊茅绿（松墨色 pineink 75%）：'Driver optional — the burn sleeps left of the short grass.' 上一个/下一个箭头（lucide）点击切换三个球洞：01 'Heather Start' — PAR 4 · 385 YDS · INDEX 7；07 'Kestrel's Rise' — PAR 3 · 168 YDS · INDEX 11 — 'All carry, no bail-out; take one more club into the wind.'；12 'The Long Sleep' — PAR 5 · 512 YDS · INDEX 3 — 'Three good shots or two brave ones; the green runs away right.' 下方示例说明，Mulish 12px 羊茅绿：'Yardage and index are sample data for the demo.'
   布局：面板 max-w-4xl mx-auto；内部为 12 列网格：编号 + 名称 + 标签 + 建议占列 1–5，HoleSVG 占列 6–12；箭头位于右下，带一个黄铜色 '1 / 3' 计数器。
   动效：球道路径首次进入视口时自绘（800ms）；点击切换交叉淡入 300ms；减少动态效果：路径完整渲染，即时切换。
4. **开球时间（Tee times）— 示例网格** — id=tees。标签 'TEE TIMES'；标题：'Pick your morning.' 介绍文字 Mulish 16px 羊茅绿：'Three sample days, hourly slots, honest availability — the pro shop confirms every booking by phone.' TeeGrid 位于球道面板上：日期胶囊（'Tuesday'、'Friday'、'Saturday' — 静态示例日期），4×2 时间槽网格（07:00、08:00、09:00、10:00、11:00、13:00、14:00、15:00），可用单元格为象牙白，已占用单元格为 50% 球道绿并带斜线划除，以及一行球员数（'2 players' / '3 players' / '4 players'）。按钮 'Reserve this slot'（黄铜）。点击时：将 {day, time, players} 保存到 localStorage 键 'teeTime'，并显示内联提示（300ms 淡入，Mulish 13px 羊茅绿）：'Saved on this device only — this demo sends nothing; the pro shop confirms by phone. Availability is sample data.' 网格旁的访客说明：'Visitor green fee [GREEN_FEE] · members book by phone.'
   布局：12 列网格：网格面板占列 1–8，访客说明和球员数占列 9–12 并垂直居中；移动端堆叠。
   动效：单元格悬停上浮 1px 并带黄铜色描边（200ms）；选中填充黄铜色；提示淡入；减少动态效果：仅颜色过渡。
5. **会员（Membership）** — id=membership。标签 'MEMBERSHIP'；标题：'Three ways to belong.' 三张象牙白卡片（32px 内边距，1px 黄铜细线，4px 圆角）：'Midweek' — '$145 / MO' 黄铜 Playfair 32px — 'Weekday play, Monday to Friday' · 'Handicap and competitions' · 'Dining room priority'。'Full Playing' — '$230 / MO' — 'Seven-day play' · 'Competition entry' · 'Two guest passes monthly'。'Founder's' — '$3,900 / YR'，带一个小号浅黄铜色标签 'BY INVITE (SAMPLE)' — 'Full playing rights' · 'Family guests' · '$400 clubhouse credit'。每张卡片以文字链接 'Enquire →' 结尾（黄铜色，mailto proshop@kestreldowns.com，来自 content.ts）。示例说明：'Fees are sample data for the demo.'
   布局：3 列网格（移动端堆叠），24px 间距；价格位于 1px 象牙白细线（ivoryline）分隔线上；Founder's 卡片在桌面端上浮 6px。
   动效：卡片以 120ms 间隔错开淡入上移；悬停上浮 2px；减少动态效果：普通淡入。
6. **会所餐饮（Clubhouse dining）** — id=dining。标签 'CLUBHOUSE'；标题：'The [BRAND] Room.' 文案 Mulish 16px 羊茅绿，max-w 44ch：'Lunch from noon on the terrace, dinner till late by the fire — open to members and visiting players. Sunday is roast, and the toast list is short on purpose.' 营业时间模式行位于黄铜细线上：'LUNCH — NOON TILL 15:00 · DINNER — 18:00 TILL LATE · SUNDAY — ROAST FROM 12:30'。氛围感室内照片（public/images/clubhouse-interior.webp，3:4），配说明文字 'THE DINING ROOM, WINTER EVENING'。
   布局：12 列网格：照片占列 1–5，文字占列 6–12 并垂直居中；移动端照片优先堆叠。
   动效：照片淡入上移，并伴随缓慢的 1.03→1 稳定；行以 100ms 间隔错开。
7. **活动条（Events strip）** — 标签 'FIXTURES' 浅黄铜色；标题：'The quiet calendar.' 三行位于黄铜细线（40% 不透明度）上，每行包含一个黄铜色模式标签、一个 Playfair 20px 象牙白标题和一行 Mulish 14px 羊茅绿文字：'WEEKLY — Twilight Nine' — 'Summer evenings, nine holes, one glass of something after.' / 'MONTHLY — Mug & Medal' — 'Stableford, early tee, lunch to follow.' / 'SEASONAL — Guest Day' — 'Members bring a friend; the heath behaves (mostly).' 脚注 Mulish 12px 羊茅绿：'Sample fixtures — patterns, not dates.'
   布局：行占满内容宽度，72px 高，桌面端标签居左 / 标题居中 / 文字居右；移动端堆叠。
   动效：行以 100ms 间隔错开淡入上移；标签在显现时获得一次浅黄铜色下划线。
8. **页脚（Footer）** — 顶部 1px 黄铜细线（40% 不透明度）。左侧：[BRAND] 字标和一行 Mulish 13px 羊茅绿：'1 Aldermoor Lane, [REGION] · proshop@kestreldowns.com · (555) 014-2266 — an invented club; yardage, fees and fixtures on this page are sample copy.' 右侧：锚点链接 'The Course · Tee Times · Membership · Dining'，羊茅绿色；可选 [CREDIT] 链接。无日期，无社交行。
   布局：py-14，max-w-6xl，flex 行在移动端换行为列。
   动效：无。

## 资源

- 图片：将 https://media.vibefather.ai/assets/3da4f67b-a83f-4546-839c-1b71245947ab/fairway-morning.webp 下载到 public/images/fairway-morning.webp。替代文本：'A misty morning fairway with dew on the grass and one distant flag.' 用作全出血的 hero 锚点（16:9）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/3da4f67b-a83f-4546-839c-1b71245947ab/green-flag.webp 下载到 public/images/green-flag.webp。替代文本：'A close morning view of a putting green with the flagstick in low light.' 用于开球时间访客行旁边（4:3）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/3da4f67b-a83f-4546-839c-1b71245947ab/clubhouse-interior.webp 下载到 public/images/clubhouse-interior.webp。替代文本：'A moody clubhouse dining room with dark wood, brass lamps and set tables.' 餐饮区块（3:4）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/3da4f67b-a83f-4546-839c-1b71245947ab/bunker-detail.webp 下载到 public/images/bunker-detail.webp。替代文本：'A detail of heather and a sand bunker edge in morning light.' 用于球场导览面板角落（1:1）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/3da4f67b-a83f-4546-839c-1b71245947ab/golfer-behind.webp 下载到 public/images/golfer-behind.webp。替代文本：'A golfer seen from behind, distant, walking down a dewy fairway.' 会员区块侧边（3:4）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/3da4f67b-a83f-4546-839c-1b71245947ab/clubhouse-exterior.webp 下载到 public/images/clubhouse-exterior.webp。替代文本：'The clubhouse exterior at dawn overlooking the closing green, no people.' 活动条幅背景带（16:9）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图标：lucide-react（ISC）通过 npm —— 球洞点按切换上的 chevron-left 和 chevron-right，开球时间和页脚联系行中的 clock 和 map-pin，活动标签上的 calendar，球员行上的 users，链接和 CTA 中的 arrow-right，移动端页眉的 menu 和 x。不使用其他图标：无 emoji、无俱乐部徽章、无赛事标志。
- 字体：@fontsource/playfair-display（OFL，字重 500 和 600，外加 500 斜体）和 @fontsource/mulish（OFL，字重 400、500、600），在 src/main.tsx 中导入；绝不从 fonts.googleapis.com 或任何 CDN 加载。在项目根目录的 ASSETS.md 中列出这两个字体家族和六张照片：路径、来源、生成器或作者、许可证。

## 禁止事项
- 不做预订后端、不做支付、不发网络请求：开球时间预订仅保存到 localStorage，并附上如实的内联说明；会员咨询使用 mailto 链接；任何地方都不做结账。
- 不出现真实的高尔夫俱乐部、球场、锦标赛或巡回赛：俱乐部、球洞、赛程和餐厅均为虚构，任何地方都不得出现冠军或排名相关声明。
- 码数、差点指数、可预订情况、果岭费和会员费均为示例数据，并始终如此标注；不使用与真实时钟绑定的日期——日期标签为静态的工作日示例，赛程为每周/每月/季节性模式，绝不使用日历日期。
- 照片仅展示球场、会所和细节：高尔夫球手最多以远景背影出现，无可辨认的面部，画面中任何位置都不得出现可读的文字、标牌、记分板或标志；餐厅为会所自有的虚构空间——不出现餐厅品牌。
- 不使用任何 CDN：字体通过 Fontsource 包提供，图标来自 lucide-react，照片来自 public/images；绝不外链，绝不使用 Unsplash/Pexels/Pixabay 或占位图服务。
- 生产构建：单条命令、压缩、无 source map、输出中不含 src/、使用相对路径（Vite base './'）；每张照片压缩为 ≤ 400 KB 的 WebP，使 dist/ 保持在 20 MB 以内。
- 单页面配锚点导航；必须在 1440×900 和 390×844 下干净渲染，控制台零报错；开球时间网格和球洞点击查看必须支持键盘操作（按钮带可见焦点），所有动画必须遵循 prefers-reduced-motion（无视差、无路径绘制；球洞完整渲染；仅使用普通淡入淡出）。
- 保持俱乐部识别度锁定：深球道绿（deep fairway-green）底色、象牙白（ivory）面板、极细黄铜（hairline brass）分隔线、Playfair Display 搭配 Mulish、克制的圆角；不使用浅色页面背景、不使用霓虹、不使用玻璃拟态（glassmorphism），界面过渡不得快于 300ms。
- 所有文案、标签、示例数据和替代文本均使用美式英语，存放于 src/content.ts；当 [BRAND]、[REGION]、[HOLES] 或 [GREEN_FEE] 变更时，重写球洞名称、赛程和档位以适配新俱乐部，而不是在 links 球场下保留石南地（heathland）文案。
- 在项目根目录的 ASSETS.md 中列出每个第三方文件（两个 Fontsource 字体家族、lucide 图标、六张照片）：路径、来源、许可证。

---
— Prompt by VibeFather · https://vibefather.ai/t/golf-club-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
