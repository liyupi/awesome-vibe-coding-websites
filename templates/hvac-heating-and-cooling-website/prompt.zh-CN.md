> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# HVAC 供暖与制冷网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个单页网站，这是一家由 [FOUNDER] 创立的供暖与制冷公司，服务范围覆盖 [CITY] 及周边 30 英里，拥有 [EXPERIENCE] 的从业经验。页面采用冷暖双色调——余烬红代表供暖与紧迫感，冰青色代表制冷与数据——并配有一个 SVG 温度表盘图案，从首屏到成果展示反复出现。一个系统选型助手可将平方英尺、气候区和保温情况转化为推荐容量和系统类型，并附上通俗易懂的原因说明；维护计划进行诚实的对比；24/7 紧急横幅承诺响应时间；技术人员、补贴和评价充实了信任故事；一个带时间窗口的预约表单作为收尾。所有价格、补贴和容量数字均为虚构的示例数据。

- 受众：主要：[CITY] 的房主，正面临炉子故障或夏季空调更换——他们希望在销售人员上门之前，就得到关于哪种系统适合的直截了当的答案。次要：任何诊断与报价类的行业商家，可将该助手适配到管道、电气或保温业务。
- 目标：推动访客从“我家不舒服”转变为预约成功：在顶部横幅快速分诊紧急情况，在不强制留资的情况下诚实回答费用和选型问题，然后通过简短的预约表单完成转化。
- 语气：直率的行业自信——数字、承诺和解释都用短句表达。读起来像一位乐于教学的技师，而非销售话术。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、vite（MIT）、typescript（Apache-2.0）、tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/barlow-condensed（OFL-1.1）、@fontsource/barlow（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 创建一个 Vite 6 + React 18 + TypeScript 项目，base 为 './'，build.outDir 为 'dist'，build.sourcemap: false。无路由、无后端、无服务器代码。
  - 安装 Tailwind CSS 3.4 及 PostCSS 和 Autoprefixer。使用下方精确的调色板扩展主题，fontFamily.display 为 'Barlow Condensed'，fontFamily.body 为 'Barlow'。
  - 通过 @fontsource/barlow-condensed 和 @fontsource/barlow 自托管 Barlow Condensed 字重 500、600、700 和 Barlow 字重 400、500、600、700，在 src/main.tsx 中导入。绝不从 CDN 加载字体。
  - 使用来自 'motion/react' 的 Motion（motion、useInView、useReducedMotion）实现区块显现、表盘补间和计数动画；每个动画都以 useReducedMotion() 为条件。
  - 将所有文案、费率和数据保留在 src/content.ts 中：品牌字符串、主视觉文案、服务卡片、紧急文案、尺寸辅助配置（区域系数、保温系数、每平方英尺 BTU 基数、系统类型阈值和说明）、包含内容和价格的计划层级、包含示例金额的返利步骤、技师档案、评价、无 FAQ 页面、表单选项。当变量值变化时，在那里重写依赖的文案，并从 [BRAND] 和 [PHONE] 派生存储键和 tel: 链接，确保不残留默认品牌痕迹。
  - 尺寸辅助计算，精确为：制冷 BTU = 占地面积 × zoneFactor × insulationFactor，其中 zoneFactor 为三个区域（温和夏季 / 四季分明 / 炎热夏季）的 22 / 26 / 30 BTU 每平方英尺，insulationFactor 为 0.92 紧密且新建、1.0 一般、1.12 老旧且漏风；吨数 = BTU ÷ 12,000 四舍五入到最接近的 0.5；系统类型：吨数 ≤ 2 为 'Single-stage'，吨数 ≤ 3.5 为 'Two-stage'，否则为 'Two systems, zoned'；供暖行显示 'furnace sized around 40 BTU per sq ft in this zone'，不受制冷系数调整。显示 BTU、吨数、系统类型、使用的三个系数，以及每个系数一句说明。将输入持久化到 localStorage 的 [BRAND_SLUG]-sizing 下。
  - 将温度表盘绘制为内联 SVG 半圆仪表，每 10° 有刻度线、一个指针、左半部分有炭红色弧线、右半部分有冰青色弧线；主视觉指针闲置时向任一方向漂移 4°（在减少动态效果下暂停），尺寸结果复用该组件，指针设置为从吨数（1–5）映射的位置。
  - 将气候区域选择器绘制为简单的内联 SVG 地图形状——一个抽象的三带区域（北部 / 中部 / 南部），选中的带填充青色，[CITY] 用点标记——纯粹是装饰性定位，不是真实地图。
  - 仅使用这些 lucide-react 图标：Phone、Flame、Snowflake、Wind、Wrench、Thermometer、CalendarCheck、ShieldCheck、Clock、CheckCircle2、Star、MapPin、ChevronRight、ArrowRight、Menu、X、Home、AlertTriangle、Leaf。
  - 将预订请求持久化到 localStorage 的 [BRAND_SLUG]-booking-request 下；验证恢复的 JSON 并从格式错误的数据中静默恢复。
  - 在构建前将六张生成的照片下载到 Assets 中列出的精确公共路径。在项目根目录创建 ASSETS.md，列出每个文件的路径、源 URL、作者或生成器以及许可证。
  - 一个纯 <title> 为 [BRAND] 和一个 favicon（海军蓝方块，带半炭红、半青色的表盘标记）就足够了；不需要 meta 描述、Open Graph 标签、JSON-LD 或站点地图。

## 变量
- [BRAND] — 品牌（默认："Calder Point Heating & Air"）。虚构的公司名称；表盘标志在代码中由它派生。
- [CITY] — 城市（默认："Rookfield"）。服务基地；出现在紧急横幅、首屏、区域选择器和页脚中。
- [FOUNDER] — 创始人（默认："Marta Ellison"）。虚构的创始人和首席技师；在首屏信任行和第一张技师卡片中署名。
- [PHONE] — 电话（默认："(555) 462-8871"）。紧急和预约电话；以 tel: 链接形式呈现，仅含数字。
- [EXPERIENCE] — 经验（默认："19 years"）。类似 '19 years' 的简单短语；用于首屏文案和技师卡片。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/hvac-heating-and-cooling-website（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值撰写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 深海军蓝（Deep navy）`#0B1F3A` — Hero 区底色、深色区块、页眉、页脚
- 深海军蓝（Navy deep）`#081729` — 页脚和紧急横幅底色
- 余烬红（Ember red）`#FF4D2E` — 供暖区块、紧迫感、主 CTA、表盘左弧
- 余烬浅色（Ember tint）`#FFE7E2` — 浅色背景上的供暖标签和高亮
- 冰青（Ice cyan）`#3DD6F5` — 制冷区块、数据、链接、表盘右弧
- 冰浅色（Ice tint）`#E2F6FC` — 信息面板、制冷标签
- 暖白（Warm white）`#F6F8FA` — 浅色区块底色
- 白色（White）`#FFFFFF` — 卡片和面板
- 墨色（Ink）`#10233F` — 浅色背景上的标题和正文
- 钢色（Steel）`#54627A` — 浅色背景上的次要文本；深色背景上为 #9FB0C6
- 细线色（Hairline）`#DCE4EC` — 细线分隔和卡片边框

### 字体排印
- 展示字体：标题、区块标题、统计数据、导航：Barlow Condensed（OFL），字重 500/600/700
- 正文字体：段落、控件、表格单元格：Barlow（OFL），字重 400/500/600/700

### 布局与动效
- 间距：桌面端区块间距 96px / 移动端 64px；区块标题使用 14px 字距的 eyebrow（按区块温度选用余烬色或青色），下方为 Barlow Condensed 700 标题，字号 clamp(30px, 3.4vw, 46px)；卡片内边距 28px，网格间距 24px。
- 圆角：硬边风格：卡片和标签 2px，按钮 0；照片和表盘面板 6px。
- 动效：区块进入时通过 useInView 触发淡入上浮显现（16px，500ms，60–90ms 错峰），仅一次。
- 动效：Hero 表盘指针以 4s 循环怠速漂移 ±4°；选型结果表盘在 600ms 内补间到其吨位位置；统计数字在 900ms 内递增。
- 动效：套餐层级卡片以 200ms 抬升高亮；紧急横幅脉冲为 3s 循环的微妙背景变化，且仅作用于横幅。
- 动效：在 prefers-reduced-motion 下所有动效立即禁用；无视差、无滚动劫持、无自动播放媒体。
- 图像：来自一次拍摄的行业摄影：海军蓝暮色下的外景，配有冷凝机组和温暖的窗光；干净日光下的设备间和风管；以及三张影棚布光的技术人员肖像（虚构人物，多样化，制服上无标识）。设备为通用款，任何位置均无可读型号、品牌标记或文字。

## 页面与区块
### [BRAND] — [CITY] 的供暖与制冷（`index.html`）
1. **紧急横幅与页头** — 顶部横幅（深海军蓝底色，全宽，高 40px，在 390px 宽度下单行显示）：一个 ember 色的 AlertTriangle 图标，白色 14px 文字“24/7 emergency line — on-site within 4 hours across [CITY]:”，以及青色（tel:）的 [PHONE]；最右侧为 12px 的 steel-on-dark 文字“Cooling calls answered first this week.”。下方页头（深海军蓝，76px）：logomark——一个海军蓝方块，内含半 ember／半青色的表盘——旁边是 Barlow Condensed 700 大写 20px 白色的 [BRAND]；导航锚点 Services、Sizing helper、Plans、Technicians；右侧一个 ember 色胶囊按钮“Book now”和一个青色电话 chip，含 Phone 图标 + [PHONE]（tel:）。在 390px 宽度下：横幅单行显示，季节性提示隐藏，页头显示 logomark + 品牌、一个电话图标按钮和一个菜单按钮（44px 触控目标）；锚点收进海军蓝下拉菜单。
   布局：横幅与页头作为一个整体吸顶；hero 位于其下。海军蓝上的所有文字均满足 AA 对比度。
   动效：横幅背景以 3s ease 循环在 navy-deep → #0E1F33 之间往返；在 reduced motion 下暂停。
2. **带表盘的 Hero** — 深海军蓝 hero（桌面 88vh／移动端 640px）。左侧（第 1–7 列）：冰青色 eyebrow“HEATING & COOLING — [CITY] & 30 MILES AROUND”；H1 为 Barlow Condensed 700 大写白色“ONE COMPANY FOR THE HOT AND THE COLD.”；段落文字为 #C9D6E8 的“[FOUNDER] started [BRAND] with one van and a rule that still stands: explain the system before you sell it. [EXPERIENCE] later — 6,400 repairs, 2,100 installs, and a 4.9 from 268 neighbors.”；两个 CTA：ember 色胶囊按钮“Book a visit”（锚定到表单）和青色描边胶囊按钮“What system fits my home?”（锚定到 helper）；证明 chip 行，白色 12px 大写，置于半透明海军蓝上：“EPA-certified refrigerant handling” · “License #HV-20417” · “Same-day diagnostics”。右侧（第 8–12 列）：hero 照片——黄昏时分一栋现代住宅旁一台干净的冷凝器机组，窗户透出暖光——置于 6px 圆角边框内，SVG 温度表盘（140px）作为卡片悬浮并叠压其左下角，指针处于待机状态。
   布局：12 列网格，表盘卡片相对照片边角偏移 -20px；移动端照片在文案之后全宽显示，比例 4:3，表盘叠压其右上角。
   动效：照片从 scale 1.04 在 700ms 内落定；文案以 80ms 错峰上移 16px；表盘指针以 4s 循环漂移 ±4°。
3. **服务，冷与热** — 暖白色区块。Eyebrow“WHAT WE DO”（ember）；标题“Heating on the left. Cooling on the right.”。一行四张卡片，每张顶部有颜色条：“Furnace & heating”（ember 色条，Flame 图标）——“Repairs, replacements and heat-pump conversions for gas and electric systems. Diagnostics $89, waived with the repair.”——chips：“Same-day parts”、“Carbon-monoxide testing”；“AC & cooling”（青色条，Snowflake 图标）——“Repair and replacement of central air and mini-splits, with static-pressure testing so the new unit actually fits your ducts.”——chips：“Refrigerant leak tracing”、“Mini-split installs”；“Indoor air quality”（白色条，Wind 图标）——“Humidity, filtration and fresh-air systems sized to the house, not the catalog.”——chips：“HEPA bypass”、“Whole-home humidifiers”；“Maintenance plans”（海军蓝条，Wrench 图标）——“Two tune-ups a year, priority scheduling and 15% off repairs. Compared in full below.”——chip：“See the plans”锚定到对比表。卡片正文为白色底上的 15px ink 文字，2px 圆角，细线边框；页脚链接使用卡片对应的温度色，文字“Book this”，锚定到表单。
   布局：4 列网格（1024px 以下 2×2，640px 以下 1 列）；顶部颜色条高 4px。
   动效：卡片以 70ms 错峰上移 16px；颜色条在进入后 400ms 内从 0 绘制到全宽。
4. **系统选型助手** — 海军蓝区块，标志性区块。Eyebrow“THE SIZING HELPER”（青色）；标题“What system fits my home?”；副标题 #9FB0C6“Three answers in, one plain-language recommendation out. It's a starting point — the real load calc happens on site.”。控件位于白色面板（左侧，7 列）：1）“Heated & cooled floor area”——滑块 600–4,000 sq ft，默认 1,850，实时显示 condensed 数值；2）“Climate zone”——以内联 SVG 三带区域地图作为选择器（Mild summers / Four full seasons / Hot summers），选中带填充青色，[CITY] 圆点保持可见；3）“Insulation”——三个 chips：“Old and drafty”、“Decent”、“Tight and new”。结果面板（navy-deep，右侧，5 列）：结果表盘（指针映射自 tons 1–5，青色弧线点亮）；“YOUR STARTING POINT” eyebrow 为青色；容量大字为 Barlow Condensed 700 青色——例如“3.0 tons · 36,000 BTU cooling”；系统类型行为白色 600——“Two-stage system”；三行说明为 13px #9FB0C6，数值为白色：“Zone: four full seasons — 26 BTU per sq ft”、“Insulation: decent — no adjustment”、“Heating: furnace around 40 BTU per sq ft here”；脚注 12px“Illustrative sizing from industry rules of thumb. Your quote follows a room-by-room Manual-J-style load calc on site.”；ember 色胶囊按钮“Book the free estimate”。结果实时重新计算并持久保存。
   布局：桌面 7/5 网格；移动端结果面板堆叠在控件下方；结果面板内表盘为 120px。
   动效：变更时指针在 600ms 内补间到位置；容量数字补间 200ms；说明行淡入 8px；无布局偏移。
5. **维护计划对比** — 白色区块。Eyebrow“PLANS”（青色）；标题“Tune-ups, compared honestly.”。三张计划卡片（暖白底，细线边框，28px 内边距；中间卡片为海军蓝底白字，带青色“MOST PICKED”chip）：“Seasonal Check”——“$149 / year”——“One precision tune-up a year, on the season you choose. 21-point checklist, filter included.”；“Comfort Club”——“$249 / year”——“Two tune-ups (heat + cool), priority scheduling, 15% off repairs, no diagnostic fee ever.”；“Total Care”——“$389 / year”——“Everything in Comfort Club plus parts coverage on repairs and no overtime rates — even at 2 a.m.”。卡片下方为包含项矩阵（行：Precision tune-up ×1/×2/×2、Priority scheduling —/check/check、15% off repairs —/check/check、Parts covered —/—/check、No overtime rates —/—/check；勾选标记为青色 CheckCircle2）。算术说明位于冰色调面板，14px：“Bought separately, two tune-ups plus one $89 diagnostic come to $338 — Comfort Club is $249. The math is the pitch.”
   布局：三张卡片一行（900px 以下 1 列，矩阵横向滚动）；矩阵行使用细线分隔。
   动效：桌面端中间卡片上浮 12px；矩阵进入视口时勾选标记以 1.15× 弹出，错峰 50ms。
6. **信任与数据** — Ember 区块（纯色 #FF4D2E 底，白色文字——供暖温度，刻意为之）。Eyebrow 为白色“WHY NEIGHBORS KEEP THE NUMBER”；标题“Promises with numbers behind them.”。四项数据，Barlow Condensed 700 白色数字递增计数：“4 hr”“emergency response, guaranteed” · “6,400”“repairs completed” · “2,100”“systems installed” · “4.9”“from 268 reviews”。下方一行白色 18px 承诺：“If we miss the window, the diagnostic is free. It's in writing on every quote.”。右侧：锅炉房照片（干净的设备间，新的空气处理机）置于 6px 边框内，宽 40%，悬浮并越过区块底边进入下一区块（重叠 -48px）。
   布局：左侧数据 2×2 网格，右侧照片；移动端数据堆叠，照片内联显示且无重叠。
   动效：进入时数字在 900ms 内递增计数；照片上移 16px。
7. **补贴说明** — 白色区块。Eyebrow“REBATES”（ember）；标题“Three places the price comes down.”。三张编号步骤卡片（细线边框，大号青色步骤数字 01/02/03）：01“Utility rebate”——“Most regional utilities pay back part of a high-efficiency swap. Sample: up to $400 back on a qualifying AC. We file the paperwork with your invoice.”；02“Manufacturer seasonal offer”——“Equipment makers run spring and fall promotions — sample: up to $900 off a complete system during the fall campaign. We show you the current sheet with the quote.”；03“Tax credit”——“High-efficiency installs may qualify for a federal credit of up to 30% of the equipment cost. Confirm with your tax preparer — we hand over the spec sheets they'll want.”。页脚注释位于冰色调面板，13px：“Amounts shown are illustrative samples, not offers. Rebates change by season, utility and equipment — your written quote lists what's live right now.”
   布局：三张卡片一行（900px 以下 1 列）；步骤数字为 Barlow Condensed 700 青色，44px。
   动效：卡片以 80ms 错峰上移 16px。
8. **技术人员（Technicians）** — 暖白色区块。眉题 'THE PEOPLE AT THE DOOR'（青色）；标题 'Background-checked, certified, and on time.' 三张卡片，每张配一张 3:4 肖像（生成的虚构技术人员），姓名用 Barlow Condensed 700 20px 墨色，职位用钢色 13px，两个文字标签（无徽章图形）：'[FOUNDER]' — 'Founder & master technician' — '[EXPERIENCE] in the field' — 标签 'EPA-certified refrigerant handling'、'Gas systems'；'Dev Ranganathan' — 'Senior installer' — 'Heat pumps and mini-splits, 11 years' — 标签 'Duct design'、'Mini-splits'；'Lu Chen' — 'Diagnostics lead' — 'Finds the failure others miss' — 标签 'Indoor air quality'、'Controls & thermostats'。每张肖像下方一行 14px 钢色引语：例如 'Measure twice, charge once.' / 'The ducts are half the system.' / 'Comfort is a data problem.'
   布局：三张卡片一行（900px 以下为 1 列）；肖像按 3:4 裁剪，顶部圆角 6px。
   动效：卡片上升 16px，错开 90ms。
9. **评价（Reviews）** — 白色区块。眉题 'NEIGHBORS'；标题 'What the street says.' 三张引语卡片（暖白色、细线、青色引号）：五行青色星星；16px 墨色引语；页脚 13px 钢色。'Furnace died on the coldest night of the year. Tech at 9 p.m., new board installed, house warm by midnight. The 4-hour promise is real.' — Gwen A.，[CITY]，紧急维修。'The sizing helper said 2.5 tons; the load calc on site said 2.5 tons. First company that didn't try to sell me five.' — Tomas W.，Alder Junction，整套系统。'Comfort Club tune-up found a cracked heat exchanger under warranty. They handled the whole claim — I paid $0.' — Riya K.，Foxglove，套餐会员。
   布局：三张卡片一行；桌面端中间卡片上浮 12px。
   动效：卡片上升 16px，错开 90ms。
10. **预约表单（Booking form）** — 深蓝色区块。眉题 'BOOK A VISIT'（青色）；标题 'Pick a window. We'll confirm by phone.' 表单位于白色面板中（max-width 720px，32px 内边距）：服务需求（分段控件，选中时为余烬色：'Emergency — no heat/AC' / 'Estimate for a new system' / 'Tune-up or repair'）；姓名（必填）、电话（tel，必填）、街道地址（必填）；城镇下拉：'[CITY]'、'Alder Junction'、'Foxglove'、'Milldam'、'Rookfield North'、'Stony Hollow'；时间窗口（分段：'Morning 8–12' / 'Afternoon 12–4' / 'Any'）；备注文本域占位符 'e.g. upstairs never cools, unit is 16 years old'。余烬色胶囊提交按钮 'Request the visit'。校验：缺失必填字段显示 2px 余烬色边框和 13px 余烬色提示；不使用浏览器原生弹窗。成功状态替换表单：青色 CheckCircle2、'Got it, [name].' 用 Barlow Condensed 700、'Emergency requests: we call back within 15 minutes, day or night. Everything else: the office confirms your window within one business day. This demo stores the request in this browser only.' 以及一个描边胶囊按钮 'Book another'。持久化到 localStorage。
   布局：桌面端字段行两列（姓名+电话、地址+城镇），分段控件和文本域占满整宽；移动端 1 列，底部内边距 96px，确保吸底栏不会遮住提交按钮。
   动效：成功状态交叉淡入并上升 12px；对勾弹出 1.15×。
11. **页脚（Footer）** — 深海军蓝区块。第 1 列：拨号标志 + [BRAND] 用 Barlow Condensed 700 白色；13px #9FB0C6 行 '42 Kiln Yard Road, Unit 2, [CITY]'、'License #HV-20417 · insured'、'Mon–Sat 7a–6p · emergency line always on'。第 2 列 'Services'：锚点 Services、Sizing helper、Plans、Technicians。第 3 列 'Talk to us'：[PHONE] 用青色（tel:），余烬色胶囊按钮 'Book now'。底部细线行：'[BRAND] · Sample site for a template — all prices, rebates and reviews invented' 用 12px #6B7C93，加上可选的 [CREDIT] 链接。移动端吸底栏（768px 以下）：固定底部海军蓝 96% + 模糊，余烬色胶囊按钮 'Call [PHONE]'（tel:）和青色描边胶囊按钮 'Book now'（锚点），安全区内边距。
   布局：页脚网格桌面端 4/4/4 到移动端 1 列；768px 以下 body 底部内边距 80px。
   动效：无。

## 资源

- 图片：黄昏时分的主视觉冷凝器。将 https://media.vibefather.ai/assets/a1fd975a-dcee-43b4-aa1c-2c72142544ae/hero-hvac.webp 下载到 public/images/hero-hvac.webp。替代文本：'A clean air-conditioner condenser beside a modern home at dusk.' 主视觉的视觉锚点。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：设备间。将 https://media.vibefather.ai/assets/a1fd975a-dcee-43b4-aa1c-2c72142544ae/furnace-room.webp 下载到 public/images/furnace-room.webp。替代文本：'A tidy utility room with a new air handler and water heater.' 用于信任带。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：技师肖像一（创始人）。将 https://media.vibefather.ai/assets/a1fd975a-dcee-43b4-aa1c-2c72142544ae/tech-1.webp 下载到 public/images/tech-1.webp。替代文本：'Portrait of a fictional HVAC technician in a plain navy uniform.' 用于 [FOUNDER] 技师卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：技师肖像二。将 https://media.vibefather.ai/assets/a1fd975a-dcee-43b4-aa1c-2c72142544ae/tech-2.webp 下载到 public/images/tech-2.webp。替代文本：'Portrait of a fictional senior installer in a plain work uniform.' 用于 Dev Ranganathan 卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：技师肖像三。将 https://media.vibefather.ai/assets/a1fd975a-dcee-43b4-aa1c-2c72142544ae/tech-3.webp 下载到 public/images/tech-3.webp。替代文本：'Portrait of a fictional diagnostics technician in a plain work uniform.' 用于 Lu Chen 卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：安装细节。将 https://media.vibefather.ai/assets/a1fd975a-dcee-43b4-aa1c-2c72142544ae/install-detail.webp 下载到 public/images/install-detail.webp。替代文本：'New galvanized ductwork and a fresh vent detail.' 服务带背景或返利带中的辅助细节图。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图标：Lucide（ISC），通过 lucide-react 包引入，仅限设置中列出的图标列表。不使用其他图标来源。
- 字体：Barlow Condensed（OFL）和 Barlow（OFL），通过 @fontsource/barlow-condensed 和 @fontsource/barlow 自托管；不从 CDN 加载字体。

## 不要做
- 不使用真实的 HVAC 制造商、设备品牌名称、型号或保修计划；设备以通用方式描述（single-stage、two-stage、heat pump、mini-split）。
- 不按名称使用真实公用事业公司、返利计划、税务表格或政府激励措施；返利金额为示例性样本，页面需说明这一点。
- 不使用真实承包商、加盟商或认证徽章图形；[BRAND]、license #HV-20417、评价和城镇均为虚构样本数据，认证仅以纯文本形式出现。
- 照片：设备上不得有可读的型号、品牌标记或文字；技师肖像为虚构人物，年龄和族裔多样，不 resemblance 任何真实个人。
- 所有价格、容量数据和返利均为样本数据：将选型输出标注为经验法则起点，返利标注为示例性——绝不作为负荷计算、报价或要约。
- 页面任何位置不得出现日期：页脚无年份、无版权年份、无绑定真实时钟的日期选择器；时间引用保持相对表述（'this week'、'within one business day'）。
- 表单仅为本地样本：不提交到任何服务器、无 API、无分析、无电子邮件或日历服务。仅持久化到 localStorage，并验证恢复的数据。
- 无后端、服务器代码、数据库或认证。通过单一构建命令输出静态文件到 dist/，小于 20 MB，Vite 的 base 为相对路径。
- 仅通过 Fontsource 包自托管字体；绝不加载 Google Fonts、Adobe Fonts 或任何 CDN 样式表或脚本。
- 生产环境无 source maps，不将 src/ 复制到 dist/。
- 不使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务或热链接文件；仅使用六张生成的图片和代码绘制的 SVG 图形。
- 不做 SEO 工作：无 meta 描述、Open Graph 标签、JSON-LD、站点地图或关键词堆砌的标题。一个包含 [BRAND] 的普通标题和一个 favicon 就足够了。
- 选型助手绝不能静默猜测：将系数表保留在 content.ts 中，并在屏幕上显示所使用的系数。
- 无滚动劫持、页面视差、自定义光标或自动播放媒体；动效仅限于指定的揭示、表盘补间、计数递增和横幅脉冲，均遵循 prefers-reduced-motion。
- 紧急横幅在 390px 宽度下保持一行，且绝不让粘性底栏遮挡预订表单的提交按钮。
- 从 [BRAND] 和 [PHONE] 构建品牌派生字符串（存储键、tel: 链接），以便备用变量值不会留下默认品牌残留。
- 每个内部链接都是文件名或页内锚点，绝不是裸目录；网站保持为单个 index.html。

---
— Prompt by VibeFather · https://vibefather.ai/t/hvac-heating-and-cooling-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
