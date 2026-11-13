> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 园林绿化与草坪养护网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为您自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一个单页网站，这是一家由 [FOUNDER] 创立的景观设计与草坪养护公司，位于 [CITY]，拥有 [EXPERIENCE] 的设计与维护经验。页面以花园摄影为卖点——精心设计的花坛、石板小径、黄昏灯光——并通过草坪方案生成器赢得潜在客户，该生成器根据地块面积、服务频率和附加项目为月度养护方案定价，每一项明细都清晰可见。可筛选的画廊、五步设计时间线、逐月季节日历、干净利落的保证以及现场拜访请求共同构成完整页面。所有价格、项目和客户均为虚构的示例数据。

- 受众：主要受众：居住在 [CITY] 周边、希望拥有更好的庭院但不想亲力亲为的房主——他们正在一次性设计服务和持续性养护方案之间做选择。次要受众：正在借鉴该方案生成器表格的花园设计师、泳池及物业养护公司。
- 目标：引导访客从“我们的庭院也可以变成那样”转变为请求现场拜访：用一屏摄影作品激发灵感，用方案生成器回答费用问题，用日历和保证证明可靠性，最后通过简短的拜访表单完成转化。
- 语调：温暖、专业且从容不迫——像一位热爱解释庭院为何呈现如此面貌的园艺师。具体的植物、具体的月份，没有企业式的空话。

## 技术栈（Stack）
- 框架（Framework）：Vite 6 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、vite（MIT）、typescript（Apache-2.0）、tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/fraunces（OFL-1.1）、@fontsource/work-sans（OFL-1.1）
- 构建（Build）：`npm run build` → `dist/` 中的静态文件。无后端、无服务端代码、无外部 API。
- 设置（Setup）：
  - 创建一个 Vite 6 + React 18 + TypeScript 项目，base 设为 './'，build.outDir 设为 'dist'，build.sourcemap 设为 false。不使用路由、不使用后端、不使用服务端代码。
  - 安装 Tailwind CSS 3.4，并配置 PostCSS 和 Autoprefixer。用下方精确的调色板扩展主题，fontFamily.display 设为 'Fraunces'，fontFamily.body 设为 'Work Sans'。
  - 通过 @fontsource/fraunces 和 @fontsource/work-sans 自托管 Fraunces 字重 600 和 700（如果用于强调，还包括 600 斜体）以及 Work Sans 字重 400、500、600、700，并在 src/main.tsx 中导入。绝不从 CDN 加载字体。
  - 使用来自 'motion/react' 的 Motion（motion、useInView、useReducedMotion）实现入场动画、时间线绘制和构建器的数字补间动画；每个动画都要以 useReducedMotion() 作为启用条件。
  - 将所有文案、价格和数据放在 src/content.ts 中：品牌字符串、主视觉文案、服务卡片、方案构建器配置（地块档位及其基础到访价格、各频率对应的每月到访次数、附加项月度价格、季节说明）、带分类和地点的图库条目、流程步骤、十二个月日历条目、统计数据、评价、表单选项。当变量值变化时，在那里重写依赖的文案，并从 [BRAND] 和 [PHONE] 派生存储键和 tel: 链接，确保不残留默认品牌痕迹。
  - 方案构建器计算，精确如下：按地块面积档位确定基础到访价格——低于 6,000 sq ft 为 $58，6,000–12,000 为 $74，超过 12,000 为 $92；每月到访次数——每周 4.3，每两周 2.2，每月 1.0；月度基础费用 = 到访价格 × 每月到访次数，四舍五入到最接近的 $5；附加项增加固定月度金额——花坛除草 $46，打孔通气 $8（年度通行费摊销），秋季落叶清理 $28，节日灯饰 $40（季节摊销）；结果显示月度总额、每一项明细、一条季节说明（'weekly programs run March through November; billing is even across the year'）以及一条 'quoted yearly, billed monthly' 免责声明。将所有输入持久化到 localStorage 的 [BRAND_SLUG]-plan 键下。
  - 将流程时间线构建为一条从左到右绘制的 SVG 藤蔓线（进入时 stroke-dashoffset 在 900ms 内变化），连接五个编号步骤标记；步骤以 80ms 的间隔依次动画进入。
  - 将图库构建为数据驱动的网格，带有分类标签（All、Design & build、Lawn programs、Hardscape & paths、Lighting、Irrigation）；'All' 为默认值，因此网格永远不会为空；筛选时以 200ms 交叉淡入淡出。
  - 将季节日历构建为 12 格网格（桌面端 4×3，移动端水平滚动吸附）——月份名称、一项班组任务、一条园艺笔记，每个格子带有季节色调的顶部线条：春季青柠色、夏季绿色、秋季陶土色、冬季石板色。不显示年份，不显示与访客时钟绑定的日期。
  - 将现场到访请求持久化到 localStorage 的 [BRAND_SLUG]-visit-request 键下；验证恢复的 JSON，并从格式错误的数据中静默恢复。
  - 仅使用以下 lucide-react 图标：Phone、Leaf、Sprout、Sun、Snowflake、Droplets、Scissors、Shovel、Lightbulb、CalendarCheck、CheckCircle2、Star、MapPin、ChevronRight、ArrowRight、Menu、X、Ruler、Sparkles。
  - 在构建前将六张生成的图片下载到 Assets 中列出的精确 public 路径。在项目根目录创建 ASSETS.md，列出每个文件的路径、来源 URL、作者或生成器以及许可证。
  - 一个纯 <title> 为 [BRAND] 以及一个 favicon（蕨绿色圆形内嵌青柠色 Leaf 字形）就足够了；不需要 meta 描述、Open Graph 标签、JSON-LD 或站点地图。

## 变量
- [BRAND] — 品牌（默认：“Fernhollow Landscaping”）。虚构的公司名称；代码中会据此派生出一个叶子标志。
- [CITY] — 城市（默认：“Willow Bend”）。所在地；出现在首屏眉题、图库位置和页脚中。
- [FOUNDER] — 创始人（默认：“Cole Barrett”）。虚构的园艺师创始人，在首屏和关于文案中提及。
- [PHONE] — 电话（默认：“(555) 703-2214”）。页眉和移动端通话栏中的办公电话；以 tel: 链接，仅使用数字。
- [EXPERIENCE] — 经验（默认：“14 years”）。像 '14 years' 这样的简单短语；用于首屏文案和统计数据带。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/landscaping-and-lawn-care-website（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 深蕨绿（Deep fern）`#1E4D2B` — Hero 遮罩和地面、深色条带、浅色背景上的标题
- 更深蕨绿（Fern deeper）`#163822` — 页脚地面
- 鲜亮青柠（Fresh lime）`#B7E36B` — 主 CTA 填充、激活标签、时间线标记 — 切勿在浅色背景上用作小号文字
- 青柠浅调（Lime tint）`#EDF6DA` — 春季标签和高亮面板
- 暖赤陶（Warm terracotta）`#C8643B` — 点缀、秋季日历线条、次级 CTA 和眉题文字
- 赤陶浅调（Terracotta tint）`#F8E7DE` — 秋季标签和注释面板
- 柔石色（Soft stone）`#F2F0EA` — 浅色区块地面
- 白色 `#FFFFFF` — 卡片和面板
- 墨色（Ink）`#1E2B22` — 浅色背景上的标题和正文
- 钢色（Steel）`#5C6B5F` — 浅色背景上的次级文字；深色背景上为 #B9C9BB
- 细线色（Hairline）`#DEDCD2` — 细线分隔和卡片边框

### 字体排印
- 展示字体：标题、区块标题、价格：Fraunces（OFL），字重 600/700
- 正文字体：段落、控件、日历单元格：Work Sans（OFL），字重 400/500/600/700

### 布局与动效
- 间距：区块间距为桌面端 96px / 移动端 64px；区块标题使用 14px 字距的赤陶色眉题，下方为 Fraunces 700 标题，字号为 clamp(30px, 3.4vw, 46px)；卡片内边距 28px，网格间距 24px。
- 圆角：花园的温暖感：卡片和照片为 12px，标签为 8px，胶囊按钮 — 组件库中最柔和的圆角在这里不合适；保持一致的有机感，绝不生硬方正。
- 动效：淡入上升显现（16px，500ms，60–90ms 交错）通过 useInView 实现，仅触发一次。
- 动效：流程时间线的 SVG 藤蔓从左到右绘制，历时 900ms，各步骤间隔 80ms；构建器的月度价格在变化时以 200ms 补间过渡。
- 动效：画廊照片在悬停时于框架内缩放至 1.03（400ms）；筛选变化以 200ms 交叉淡入淡出。
- 动效：所有动效在 prefers-reduced-motion 下立即禁用；无视差、无滚动劫持、无自动播放媒体。
- 图像：来自同一次拍摄的午后花园摄影：设计好的种植床、石径、条纹草坪和黄昏光线场景，温暖的自然光，茂盛的绿色搭配赤陶色点缀 — 无工作人员、无面部、无设备品牌标识、任何地方无可读文字。

## 页面与区块
### [BRAND] — [CITY] 的景观设计（`index.html`）
1. **页眉与主视觉区** — 页眉（白色 92% 不透明度，带背景模糊，72px）：叶片标志——蕨绿色圆形内嵌青柠色 Leaf 字形——旁边是 Fraunces 700 字重的 [BRAND]；导航锚点：Services、Plan builder、Gallery、The year；右侧电话行，含 Phone 图标 + [PHONE]（tel:）以及一个蕨绿色胶囊按钮 'Book a site visit'。在 390px 宽度下：标志 + 品牌名、电话图标按钮、菜单按钮，单行排列（44px 触控目标）；锚点收进白色下拉菜单。主视觉区：全出血主视觉花园照片（带石径的设计花园，黄金时刻，桌面端 86vh / 移动端 600px，object-cover），下方覆盖从 #163822 92% 到 55% 高度处透明的底部加重渐变遮罩；内容位于左下角：青柠色眉题 'GARDEN DESIGN & CARE — [CITY]'；H1 为 Fraunces 700 白色 'A yard that earns its keep.'；段落 '#DCE8DC' 'Design, build, and a crew that shows up: [FOUNDER]'s team has kept [CITY] yards trim for [EXPERIENCE] — with a plan for every month of the year.'；主按钮青柠色胶囊 'Get a free site visit'（锚定到表单）和白色描边胶囊 'Price my lawn plan'（锚定到构建器）；证明标签为白色 12px 大写，置于半透明蕨绿色上：'Licensed & insured · #LC-55230' · 'Clean-cut guarantee' · '4.9 from 214 neighbors'。
   布局：文案位于 1200px 网格的第 1–7 列；标签在 390px 下最多换行成两行；遮罩确保所有主视觉区文字达到 AA 对比度。
   动效：照片从 1.05 缩放，历时 900ms；文案上移 16px，以 80ms 错峰。
2. **服务** — 柔石色带。眉题 'WHAT WE DO'（陶土色）；标题 'Five ways we keep a yard right.' 五张卡片（白色，12px 圆角，细线边框）：'Garden design' — Sprout 图标 — 'Planting plans tuned to your light and soil, drawn to scale and installed by the same crew that maintains them.' — 'from $1,800'；'Build & hardscape' — Shovel 图标 — 'Stone paths, patios and edging that make the planting read. Permeable, properly based, guaranteed against frost heave for 5 years.' — 'from $3,400'；'Weekly lawn care' — Scissors 图标 — 'Mow, trim, blow and a sharp-eye check of the beds on every visit. Programs run March through November.' — 'from $58 / visit'；'Seasonal cleanup' — Leaf 图标 — 'Spring wake-up and fall leaf programs, with a dormant-prune pass that keeps shrubs honest.' — 'from $240 / season'；'Irrigation & lighting' — Droplets 图标 — 'Smart-line irrigation and dusk lighting, zoned, timed and winterized every fall.' — 'from $1,150'。卡片页脚：陶土色 ChevronRight 'Book this' 锚定到表单。
   布局：五张卡片排成一行（1200px 下 3+2 换行成两行，900px 以下 2 列，640px 以下 1 列）；价格位于右上角青柠色调标签中。
   动效：卡片上移 16px，以 70ms 错峰。
3. **草坪方案构建器** — 蕨绿色带，标志性区块。眉题 'THE PLAN BUILDER'（青柠色）；标题 'Know your monthly number.'；副导语 '#B9C9BB' 'Three choices, one honest price — quoted yearly, billed monthly. The visit confirms it.' 控件位于白色 12px 圆角面板中（左侧，7 列）：1) 'Lot size' — 滑块 2,000–20,000 平方英尺，默认 8,500，实时 Fraunces 数值 '8,500 sq ft'；2) 'How often?' — 三个标签：'Weekly'、'Every other week'、'Monthly'，每个下方有团队备注（'sharpest look' / 'most picked' / 'tidy-up'）；3) 'Add-ons' — 四行带价格的开关：'Bed weeding +$46/mo'、'Aeration (yearly pass) +$8/mo'、'Fall leaf removal +$28/mo'、'Holiday lighting +$40/mo'。结果面板（深蕨绿色，右侧，5 列）：'YOUR PLAN' 眉题青柠色；月度总计为 Fraunces 700 青柠色，字号 clamp(36px, 4vw, 52px)，例如 '$365 / month'；明细行 13px #B9C9BB，数值为白色：'Weekly visits, 8,500 sq ft · $74 × 4.3'、'Bed weeding · +$46'、'Fall leaf removal · +$28'；细线；季节说明 12px 'Weekly programs run March–November; even billing keeps winter visits covered.'；青柠色胶囊 'Book the free site visit'。实时重新计算并持久化。
   布局：桌面端 7/5 网格；移动端结果堆叠在控件下方；结果面板非粘性。
   动效：总计在变更时以 200ms 补间；附加项行在切换时滑动 8px；无布局偏移。
4. **项目画廊** — 白色带。眉题 'RECENT WORK'（陶土色）；标题 'Gardens we're still proud of.' 分类标签：All、Design & build、Lawn programs、Hardscape & paths、Lighting、Irrigation（默认 All 激活，蕨绿色）。六张照片卡片（12px 圆角，4:3，细线边框）：'Kestrel Lane regrade' — Design & build — 'a soggy back corner turned into a raised pollinator bed' — Willow Bend；'The Harper program' — Lawn programs — 'weekly cuts, stripes and all' — Fernhill；'Milldam flagstone run' — Hardscape & paths — '120 ft of path, permeable base, no more mud season' — Milldam；'Dusk at the Alders' — Lighting — '12 uplights, one transformer, moths politely uninvited' — Alder Junction；'Foxglove beds, year three' — Design & build — 'the fill-in finally beat the weeds' — Foxglove；'Orchard line irrigation' — Irrigation — 'drip zones cut their water bill by a third' — Stony Hollow。筛选以 200ms 交叉淡出隐藏不匹配的卡片；每张照片下方说明：标题 16px 墨色，备注 14px 钢色，城镇 12px 钢色带 MapPin。
   布局：3 列网格（900px 以下 2 列，640px 以下 1 列）；标签在移动端水平滚动；网格永不渲染为空。
   动效：悬停时照片在框内缩放 1.03（400ms）；筛选交叉淡出 200ms。
5. **设计流程时间线** — 柔石色带。眉题 'HOW A GARDEN HAPPENS'（陶土色）；标题 'From soil test to Sunday afternoon.' 一条 SVG 藤蔓线从左到右绘制，连接五个青柠色编号标记：01 'Site visit & soil test' — 'We measure light, slope and soil before we say a word about plants — free, 45 minutes.'；02 'Design & plant plan' — 'A to-scale drawing with a plant list you keep, tuned to the way you actually use the yard.'；03 'Build & hardscape' — 'Paths, beds and lighting go in first; planting follows in the right season, not the convenient one.'；04 'Grow-in season' — 'Watering schedules, a mid-season tweak visit, and the patience speech every good garden needs.'；05 'Year-round care' — 'The same crew that built it maintains it — mow programs, seasonal passes, one number to call.'。
   布局：五个步骤水平排列，藤蔓线在后方（移动端垂直，线从上到下绘制）；每个步骤宽 200px，含标记、标题 16px 墨色、备注 14px 钢色。
   动效：藤蔓在进入时以 900ms 绘制；步骤以 80ms 间隔淡入。
6. **季节日历** — 蕨绿色带。眉题 'THE YEAR, MONTH BY MONTH'（青柠色）；标题 'What the crew's doing while you're not watching.' 十二个单元格（桌面端 4×3，移动端水平滚动吸附），每个含 Fraunces 600 字重的月份名、一项团队任务和一条花园备注，顶部线条按季节着色：January — 'Dormant pruning, tool service' / 'bare branches show the shape'；February — 'Structural cuts, bed-edge repair' / 'first bulbs nose up'；March — 'Wake-up cleanup, first cut, pre-emergent' / 'programs start'；April — 'Mow weekly, divide perennials' / 'everything leans into the sun'；May — 'Planting window, mulch refresh' / 'peak design season'；June — 'Mow, feed, first irrigation checks' / 'roses earn their keep'；July — 'Deep-water audits, hedge trims' / 'heat checks at 6 a.m.'；August — 'Renovation seeding prep' / 'lawns want September'；September — 'Aeration, overseed, leaf-plan setup' / 'best planting month of the year'；October — 'Leaf removal rounds, bulb planting' / 'the good kind of busy'；November — 'Final cleanup, irrigation winterize' / 'programs tuck in for winter'；December — 'Holiday lighting, dormant plans' / 'next year's garden starts on paper'。页脚行 13px '#B9C9BB'：'Your plan's calendar shifts with your garden — this is the default rhythm for [CITY].'
   布局：网格单元格为蕨绿色上 6% 白色，12px 圆角；月份名 18px；任务 13px 白色；备注 12px #B9C9BB；移动端滚动吸附，单元格 240px。
   动效：单元格在进入时上移 12px，以 40ms 错峰；之后无逐单元格动画。
7. **保证与数据** — 白色带。眉题 'STANDING BEHIND THE CUT'（陶土色）；标题 'The clean-cut guarantee.' 正文 16px 墨色：'If a cut isn't clean, a stripe is missed, or a gate is left unlatched — we come back within 48 hours and make it right, free. It's in writing on every program agreement.' 四个数据排成一行，Fraunces 700 墨色数字：'310' 'yards in weekly programs' · '96' 'gardens designed & built' · '11' 'crew members, [EXPERIENCE] average' · '4.9' 'from 214 neighbor reviews'。右侧：黄昏照明画廊照片（12px 圆角边框）漂浮在带底部边缘 -40px 处，伸入日历带。
   布局：数据 2×2 在左，照片在右占 40%；移动端先堆叠数据再照片，无重叠。
   动效：数字在进入时以 900ms 计数上升；照片上移 16px。
8. **评价** — 柔石色带。眉题 'NEIGHBORS'；标题 'Word travels down the street.' 三张卡片（白色，12px 圆角，青柠色引号）：五颗陶土色星；16px 墨色引文；13px 钢色页脚。'The plan builder said $340 a month. The actual quote, after the site visit: $340. Nobody upsold us a thing.' — Dana P., Willow Bend, weekly program。'They redesigned our back slope three years ago and still maintain it. The fall leaf program alone saved my marriage with the rake.' — Marcus L., Foxglove, design + program。'Frost-heaved patio, fixed under warranty, no argument. The 5-year hardscape guarantee is real paper.' — Ines V., Milldam, hardscape。
   布局：三张卡片排成一行（900px 以下 1 列）；桌面端中间卡片上浮 12px。
   动效：卡片上移 16px，以 90ms 错峰。
9. **现场访问请求** — 蕨绿色带。眉题 'START HERE'（青柠色）；标题 'Free site visit. 45 minutes. Soil test included.' 表单位于白色面板中（最大宽度 720px，32px 内边距）：Name（必填）、Phone（tel，必填）、Street address（必填）、town 下拉选择 — '[CITY]'、'Alder Junction'、'Fernhill'、'Foxglove'、'Milldam'、'Stony Hollow'；'What does the yard need?'（分段：'Lawn care only' / 'Beds & garden' / 'Full redesign'）；'Tell us about it' 文本域占位符 'e.g. shady back lawn, two dogs, dreams of tulips'；首选访问时段（Morning / Afternoon / Either）。青柠色胶囊提交按钮 'Request my visit'（青柠色上墨色文字以保证对比度）。验证：缺失必填字段获得 2px 陶土色边框和 13px 陶土色提示；无浏览器原生弹窗。成功状态替换表单：青柠色 CheckCircle2、Fraunces 700 的 'Got it, [name].'、'[FOUNDER] or the office calls within one business day to set the window. This demo stores your request in this browser only.' 以及描边胶囊 'Book another'。持久化到 localStorage。
   布局：桌面端双列字段行，移动端 1 列，底部内边距 96px，使粘性栏永不覆盖提交按钮。
   动效：成功状态交叉淡出并上移 12px；对勾弹出 1.15×。
10. **页脚** — 深蕨绿色带。第 1 列：叶片标志 + Fraunces 700 白色 [BRAND]；13px #B9C9BB 行 '9 Greenhouse Lane, [CITY]'、'Licensed contractor #LC-55230 · insured'、'Mon–Fri 7a–5p · Sat by appointment'。第 2 列 'Work'：锚点 Services、Plan builder、Gallery、The year。第 3 列 'Talk to us'：[PHONE] 青柠色（tel:）、青柠色胶囊 'Book a site visit'。底部细线行：'[BRAND] · Sample site for a template — all prices, projects and reviews invented' 12px #86A089 加上可选的青柠色 [CREDIT]。移动端粘性栏（768px 以下）：固定底部蕨绿色 96% + 模糊；青柠色胶囊 'Call [PHONE]'（tel:）和白色描边胶囊 'Free visit'（锚点）；安全区内边距。
   布局：页脚网格桌面端 4/4/4 到移动端 1 列；768px 以下 body 底部内边距 80px。
   动效：无。

## Assets
- image: Hero garden。将 https://media.vibefather.ai/assets/0dd3ae1b-b732-4cb5-8693-8c2a74b09802/hero-garden.webp 下载到 public/images/hero-garden.webp。Alt：'A designed garden with a stone path in late-afternoon light.' 主视觉（hero）的全出血锚点图。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- image: Gallery: hardscape。将 https://media.vibefather.ai/assets/0dd3ae1b-b732-4cb5-8693-8c2a74b09802/gallery-hardscape.webp 下载到 public/images/gallery-hardscape.webp。Alt：'A flagstone path with neat edging through a planted bed.' 用于画廊（Hardscape & paths）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- image: Gallery: dusk lighting。将 https://media.vibefather.ai/assets/0dd3ae1b-b732-4cb5-8693-8c2a74b09802/gallery-lighting.webp 下载到 public/images/gallery-lighting.webp。Alt：'Garden uplights glowing along a path at dusk.' 用于画廊（Lighting），并浮动展示在保障（guarantee）区块中。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- image: Gallery: planting beds。将 https://media.vibefather.ai/assets/0dd3ae1b-b732-4cb5-8693-8c2a74b09802/gallery-beds.webp 下载到 public/images/gallery-beds.webp。Alt：'Layered perennial beds with fresh mulch.' 用于画廊（Design & build）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- image: Gallery: lawn。将 https://media.vibefather.ai/assets/0dd3ae1b-b732-4cb5-8693-8c2a74b09802/gallery-lawn.webp 下载到 public/images/gallery-lawn.webp。Alt：'A freshly mown lawn with clean stripes.' 用于画廊（Lawn programs）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- image: Gallery: irrigation。将 https://media.vibefather.ai/assets/0dd3ae1b-b732-4cb5-8693-8c2a74b09802/gallery-irrigation.webp 下载到 public/images/gallery-irrigation.webp。Alt：'A low irrigation head misting a planted bed at golden hour.' 用于画廊（Irrigation）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- icon: Lucide（ISC），通过 lucide-react 包引入，仅限 setup 中的图标列表。不得使用其他图标来源。
- font: Fraunces（OFL）和 Work Sans（OFL），通过 @fontsource/fraunces 和 @fontsource/work-sans 自托管；不从 CDN 加载字体。

## 禁止事项
- 不得使用真实园林绿化品牌、连锁加盟店、苗圃或植物商标；植物仅以通用名称出现。
- 不得出现可识别的真实花园、庄园或地标；所有拍摄的花园均为虚构且通用的场景。
- 不得使用真实客户或地址；[BRAND]、许可证号 #LC-55230、项目、城镇和评价均为虚构的示例数据。
- 照片仅展示花园、草坪、小径和照明——不得出现施工人员、人脸、设备品牌标识，任何位置不得有可读文字或标牌。
- 所有价格均为示例数据；建造师的估价必须始终标注为估价（“现场勘察后确认”），绝不可作为锁定报价。
- 不得将日期与真实时钟绑定：日历仅显示月份名称，不显示年份，不包含当日日期逻辑，不设倒计时；页脚不包含版权年份。
- 表单仅为本地示例：不向任何服务器提交，不调用 API，不接入分析工具，不接入邮件或日历服务。仅持久化到 localStorage，并对恢复的数据进行校验。
- 无后端、服务器代码、数据库或认证。通过单一构建命令在 dist/ 中输出静态文件，体积小于 20 MB，Vite 的 base 使用相对路径。
- 仅通过 Fontsource 包自托管字体；绝不加载 Google Fonts、Adobe Fonts 或任何 CDN 样式表或脚本。
- 生产环境不生成 source map，不将 src/ 复制到 dist/。
- 不得使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务或热链接文件；仅使用六张生成的图片和代码绘制的 SVG 图形。
- 不做 SEO 工作：不添加 meta 描述、Open Graph 标签、JSON-LD、站点地图或关键词堆砌的标题。一个包含 [BRAND] 的普通标题和一个 favicon 即可。
- 方案生成器绝不能静默猜测：将价格表保留在 content.ts 中，并在屏幕上显示每一行。
- 画廊筛选器绝不能留下空白网格；“All”恢复六张卡片。
- 仅将 lime 用于填充、标签和大号数字——绝不可用于浅色背景上的小号正文；正文保持 AA 对比度。
- 不得使用滚动劫持、页面视差、自定义光标或自动播放媒体；动效仅限于指定的显现效果、藤蔓绘制、数字递增、补间动画和悬停缩放，且均需遵循 prefers-reduced-motion。
- 在 390px 宽度下保持移动端页眉单行显示，且绝不能让吸底栏遮挡参观表单的提交按钮。
- 从 [BRAND] 和 [PHONE] 构建品牌派生字符串（存储键、tel: 链接），以便替换变量值后不会残留默认品牌痕迹。
- 每个内部链接均为文件名或页内锚点，绝不可为裸目录；网站保持为单个 index.html。

---
— Prompt by VibeFather · https://vibefather.ai/t/landscaping-and-lawn-care-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
