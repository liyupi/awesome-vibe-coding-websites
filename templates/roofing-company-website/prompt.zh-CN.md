> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 屋顶公司网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个单页网站，这家屋顶公司由 [FOUNDER] 创立，在 [CITY] 运营，拥有 [EXPERIENCE] 的翻新屋顶经验。页面以黄金时刻的主视觉展示完工工艺，通过前后对比滑块和材料表加以证明，并用两个实用工具赢得线索：一个屋顶成本估算器，可计算可见的价格区间和现场施工天数；以及一个风暴损坏清单，对房主所看到的情况进行评级。许可证与保修区块、手绘服务区域地图、示例融资说明和检查请求表单为页面收尾。每个价格、费率和评价均为虚构的示例数据。

- 受众：主要：[CITY] 及其周边地区的房主，他们在风暴、屋顶老化或购房后比较屋顶承包商——这些人希望在与人交谈之前先得到一个真实的数字。次要： trades contractors，将布局和估算器适配到壁板、窗户或太阳能。
- 目标：推动访客从“这家公司看起来靠谱”转变为提交检查请求：在一个屏幕内用具体细节赢得信任，让估算器诚实地回答金钱问题而不捕获信息，然后将这股势头转化为底部的简短表单。
- 语气：自信、直白的行业用语——短句、精确数字、不自我吹嘘。写作风格像老板 [FOUNDER] 在厨房桌边解释工作，绝不像广告公司。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、vite（MIT）、typescript（Apache-2.0）、tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/oswald（OFL-1.1）、@fontsource/inter（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 创建一个 Vite 6 + React 18 + TypeScript 项目，base 设为 './'，build.outDir 设为 'dist'，build.sourcemap: false。不使用路由、无后端、无服务端代码。
  - 安装 Tailwind CSS 3.4，搭配 PostCSS 和 Autrefixer。用下方精确的调色板扩展主题，fontFamily.display 设为 'Oswald'，fontFamily.body 设为 'Inter'。
  - 通过 @fontsource/oswald 和 @fontsource/inter 自托管 Oswald 字重 500、600、700 和 Inter 字重 400、500、600、700，在 src/main.tsx 中导入。绝不从 CDN 加载字体。
  - 使用来自 'motion/react' 的 Motion（motion、useInView、useReducedMotion、animate）实现区块显现、统计数字递增和滑块手柄弹簧效果；所有动画都要以 useReducedMotion() 为条件。
  - 将所有文案、费率和数据保留在 src/content.ts 中：品牌字符串、主视觉文案、服务卡片、估算器配置（带面积系数和人工附加费的坡度配置、材料费率区间、每日平方数除数、拆除费率）、带权重和档位文案的清单项、材料表格行、评价、带车程时间的服务城镇、融资说明、表单城镇选项。当变量值变化时，在那里重写依赖的文案，并从 [BRAND] 和 [PHONE] 派生存储键和 tel: 链接，确保不残留默认品牌痕迹。
  - 估算器数学，精确如下：squares = ceil(footprint × pitchAreaFactor ÷ 100)，其中四种配置的 pitchAreaFactor 分别为 1.05 / 1.12 / 1.20 / 1.41；每平方安装费率为沥青 $425–515、金属 $725–875、瓦片 $950–1,150；陡坡附加费在上下界上各加 8%（Steep）或 15%（Very steep）；拆除开启时，每平方加 $95–130；days = ceil(squares ÷ divisor) + 1，如果拆除且 squares 超过 18，除数沥青 15 / 金属 12 / 瓦片 9，最小 1，显示为 'N–N+1 days'；两个价格边界都四舍五入到最接近的 $100。每个输入、所选坡度名称和材料都持久化到 localStorage 的 [BRAND_SLUG]-estimate 下。
  - 将四个坡度配置构建为代码内联绘制的 SVG 山墙横截面（一个直角三角形屋顶，高度仅按角度标注——4/12、6/12、9/12、12/12——除名称和坡度分数外无其他文字），每个放在可选卡片中，激活时以安全橙色高亮。
  - 将服务区域地图构建为内联 SVG：炭灰色面板，[CITY] 为橙色星标并带 'Shop' 标签，六个天蓝色城镇圆点由细虚线道路连接，一个大的虚线天蓝色圆圈标注 '40-mile service radius'。圆点位置自行设定；城镇和车程时间来自 content.ts。
  - 前后对比滑块使用同一 4:3 视角的两张堆叠图片，后图通过 inset(0 0 0 N%) 裁剪；一个可拖动的橙色手柄带左右箭头，由指针事件驱动，聚焦时响应方向键，并带有 role='slider' 和 aria-valuenow。
  - 将风暴清单选择和检查请求持久化到 localStorage 的 [BRAND_SLUG]-storm-check 和 [BRAND_SLUG]-inspection-request 下；验证恢复的 JSON，并从格式错误的数据中静默恢复。
  - 仅使用这些 lucide-react 图标：Phone、CalendarCheck、ShieldCheck、HardHat、Home、Wind、Droplets、CloudRain、Wrench、CheckCircle2、Star、MapPin、ChevronRight、ArrowRight、Clock、Menu、X、ChevronLeft。
  - 构建前将六张生成的图片下载到 Assets 中列出的精确 public 路径。在项目根目录创建 ASSETS.md，列出每个文件的路径、来源 URL、作者或生成器以及许可证。
  - 一个纯 <title> 为 [BRAND] 和一个 favicon（橙色屋顶线标志）就足够了；不需要 meta 描述、Open Graph 标签、JSON-LD 或站点地图。

## 变量
- [BRAND] — 品牌（默认："Ironpeak Roofing Co."）。虚构的承包商名称；代码中会据此生成一个橙色屋顶线条人字形标志。
- [CITY] — 城市（默认："Harlow Springs"）。店铺所在 hometown；出现在 hero 眉题、服务地图、城镇列表和页脚地址中。
- [FOUNDER] — 创始人（默认："Ray Delgado"）。虚构所有者的姓名，用于 hero 和保修文案。
- [PHONE] — 电话（默认："(555) 214-8806"）。页眉、风暴检查清单结果和移动端通话栏中显示的业务电话；以 tel: 链接，仅使用数字。
- [EXPERIENCE] — 经验（默认："17 years"）。像 '17 years' 这样的简单短语；用于 hero 文案和证明栏。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/roofing-company-website（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 石板炭灰（Slate charcoal）`#2B2F36` — Hero 区底色、深色条带、浅色背景上的页眉文字、页脚
- 深炭灰（Charcoal deep）`#22262C` — 页脚及深色背景上最深的面板
- 安全橙（Safety orange）`#FF6A13` — 主信号色：CTA、激活的推介卡片、滑块手柄、关键数字
- 橙色浅调（Orange tint）`#FFE9DC` — 白色背景上的浅色强调标签和估算器高亮
- 天蓝（Sky blue）`#8EC5FF` — 数据强调色：地图圆点、半径环、链接、次级高亮
- 天蓝浅调（Sky tint）`#E7F0FC` — 信息面板（融资说明、估算器脚注）
- 暖白（Warm white）`#F7F5F1` — 浅色区块条带底色
- 白色（White）`#FFFFFF` — 卡片和内容面板
- 墨色（Ink）`#1B1F25` — 浅色背景上的标题和正文
- 钢灰（Steel）`#59626D` — 浅色背景上的次级文字；深色背景上使用 #A9B2BD
- 细线灰（Hairline）`#DCE0E5` — 细线分隔和卡片边框

### 字体排印
- 展示字体：标题、区块标题、大数字、导航：Oswald（OFL），字重 500/600/700
- 正文字体：段落、控件、表格单元格、元信息：Inter（OFL），字重 400/500/600/700

### 布局与动效
- 间距：桌面端区块间距 96px，移动端 64px；区块标题使用 14px 字距加宽的橙色眉题，其下为 Oswald 600 标题，字号 clamp(30px, 3.4vw, 46px)；卡片内部留白 28px，网格间距 24px。
- 圆角：硬边风格：卡片和标签为 2px，按钮和表格为 0 — 方角就是身份标识；只有照片使用 6px。
- 动效：淡入上升显现：区块和卡片以 16px 上升、500ms ease 进入，子元素错开 60–90ms，由 useInView 触发一次。
- 动效：当数据证明条进入视口时，统计数字在 900ms 内递增；估算器价格在变化时以 150ms 补间过渡。
- 动效：前后对比手柄在拖拽时直接跟随指针，释放时以 200ms 弹簧效果归位；清单勾选以 1.15× 在 150ms 内弹出。
- 动效：所有动画在 prefers-reduced-motion 下立即禁用；无视差、无滚动劫持、无自动播放媒体。
- 图像：来自同一次拍摄的黄金时刻建筑摄影：完工的屋顶、屋顶轮廓细节和材料纹理，倾斜的暖光，深阴影，无工人、无工具、无车辆、任何地方都没有可读文字或标牌。炭灰色屋面板和暖陶土色调呼应配色方案。

## 页面与区块
### [BRAND] — [CITY] 屋顶工程 (`index.html`)
1. **页眉与首屏** — 页眉（炭灰色，76px，滚动时变为 92% 不透明度并带背景模糊）：标志图形——一个安全橙色方块内嵌白色屋顶线人字形——旁边是 Oswald 600 大写 20px 的 [BRAND]；导航锚点：Services、Estimator、Materials、Service area；右侧是天蓝色电话线“Phone”图标 + [PHONE]（链接为 tel: 仅含数字）和一个橙色胶囊按钮“Free inspection”滚动至表单。在 390px 宽度下，页眉在一行内显示标志图形 + 品牌标识、一个电话图标按钮和一个菜单按钮（44px 触控目标，不换行）；锚点位于菜单按钮下方的炭灰色下拉菜单中。首屏：全出血首屏屋顶照片（两层住宅在黄金时刻的完工炭灰色瓦屋顶，桌面端 88vh / 移动端 640px，object-cover），带有从左到右的渐变遮罩，从 #2B2F36 在左侧 55% 区域以 96% 不透明度渐隐至 30%；内容位于左下角：天蓝色眉标“LICENSED ROOFING CONTRACTOR — [CITY] & 40 MILES AROUND”；Oswald 700 大写 H1“A ROOF YOU NEVER THINK ABOUT AGAIN.”；段落“[FOUNDER]'s crews have reroofed [CITY] for [EXPERIENCE] — on schedule, yard left spotless, and a ten-year workmanship warranty in writing.”；主要橙色胶囊按钮“Get a free inspection”（锚定至表单）和白色描边胶囊按钮“Price my roof”（锚定至估算器）；证明行由三个白色 12px 大写标签组成，位于半透明炭灰色背景上：“10-yr workmanship warranty” · “License #RC-88412 · insured” · “Same-week inspections”。
   布局：首屏内容位于 1200px 最大宽度网格中，文案位于第 1–7 列；标签在 390px 下最多换行两行。遮罩确保所有首屏文本满足 WCAG AA。
   动效：照片在 900ms 内从 1.05 缩放至 1；眉标、H1、段落、按钮和标签以 80ms 交错上升 16px；遮罩为静态。
2. **证明栏** — 白色条带，顶部和底部有细线分隔，四个统计数据由垂直细线分隔，每个包含：一个 Oswald 700 大数字（墨色）带橙色后缀，以及一个 13px 钢灰色标签。“1,417”“roofs completed” · “10-yr”“workmanship warranty” · “48-hr”“storm response promise” · “4.9”“from 312 neighbor reviews”（最后一个带橙色星形图标）。
   布局：桌面端四等列，移动端两行两列，细线仅作为外边框。
   动效：当条带进入视口时，数字在 900ms 内从 0 计数（10-yr 和 48-hr 按数字计数）；减少动效时渲染最终值。
3. **服务** — 暖白色条带。眉标“WHAT WE DO”（橙色）；标题“Four jobs, done roof-first.”。卡片（白色，2px 圆角，细线边框，28px 内边距）：“Full roof replacement”——“from $13,900”——“Tear-off, deck repair, ice-and-water shield, and a full architectural, metal or tile install. Most homes finish in two to four days.”，带 Home 图标；“Repair & leak tracing”——“from $385”——“Water tests, attic checks and infrared tracing to find the real entry point — then a fix that holds, documented with photos.”，带 Wrench 图标；“Storm damage & insurance”——“inspection free”——“Hail and wind assessments with a photo report you can hand straight to your adjuster. 48-hour response after a named storm.”，带 CloudRain 图标；“Gutters & ventilation”——“from $1,150”——“Seamless gutters, guards and ridge/soffit vent balancing so the new roof breathes the way it should.”，带 Wind 图标。每张卡片页脚：橙色 ChevronRight 链接“Book it”锚定至表单。
   布局：四张卡片位于 4 列网格中（1024px 以下 2×2，640px 以下 1 列）；价格位于每张卡片右上角的橙色浅色标签中。
   动效：卡片在区块进入时以 70ms 交错上升 16px。
4. **屋顶成本估算器** — 炭灰色条带，标志性区块。眉标“THE HONEST NUMBER”（橙色）；标题“Know the range before anyone knocks.”；副标题为 #A9B2BD 色“Answer four things — no email, no call. Sample regional rates; your written quote follows a free on-roof inspection.”。控件位于白色 2px 圆角面板中（左侧，7 列）：1）“Home footprint”——范围滑块 800–4,000 平方英尺，默认 1,800，实时 Oswald 值“1,800 sq ft”；2）“Roof pitch”——四张可选卡片，每张为内联 SVG 山墙截面，带名称和坡度：“Low · 4/12”、“Medium · 6/12”、“Steep · 9/12”、“Very steep · 12/12”，激活卡片以橙色描边并带橙色浅色水洗；3）“Material”——三个带 40px 缩略图的标签（shingle-macro、metal-roof-detail、tile-roof-detail）：“Architectural asphalt”、“Standing-seam metal”、“Clay tile”；4）“Existing layers to remove”——切换开关，默认开启，标签“Tear-off included”。结果面板（深炭灰色，右侧，5 列，桌面端粘性）：天蓝色眉标“YOUR BALLPARK”；价格范围以 Oswald 700 橙色显示，字号 clamp(38px, 4vw, 54px)，例如“$15,200 – $18,400”；行项目为 14px #A9B2BD 色，值为白色：“Roof area 24 squares”、“Asphalt, installed $425–515 / square”、“Steep-pitch labor +8%”、“Tear-off $95–130 / square”；一条细线；“Time on site 2–3 days”；12px 脚注：“Sample rates for a typical [CITY] job. Real number comes with the free inspection.”；橙色胶囊按钮“Book the free inspection”。估算值在每次更改时实时重新计算。
   布局：桌面端两列 7/5 网格；移动端结果面板堆叠在控件下方，非粘性，价格使用 38px。
   动效：价格范围和天数以 150ms 数字补间更新；行项目在更改时淡入 8px；无布局偏移。
5. **材料对比** — 白色条带。眉标“MATERIALS”；标题“Three rooflines, three budgets.”。表格（Oswald 500 14px 大写表头行，炭灰色背景白色文字；行 Inter 15px 白色背景带细线分隔；第一列为 56px 材料缩略图）：列 Material · Lifespan · Installed cost / square · Weight · Best for · Material warranty。行：“Architectural asphalt”（shingle-macro 缩略图）——“25–30 yrs”——“$425–515”——“Moderate”——“Most homes and budgets”——“25–30 yr”；“Standing-seam metal”（metal-roof-detail 缩略图）——“40–70 yrs”——“$725–875”——“Light”——“Snow country, low-pitch additions”——“50 yr”；“Clay tile”（tile-roof-detail 缩略图）——“50+ yrs”——“$950–1,150”——“Heavy — may need framing check”——“Mediterranean looks, long-horizon homes”——“Lifetime”。表格下方为天蓝色浅色面板，14px：“Ranges are sample regional rates for side-by-side comparison, not quotes. Your written estimate reflects pitch, layers, deck condition and access.”
   布局：900px 以下表格在细线边框面板内水平滚动，第一列左侧粘性；注释面板在下方全宽。
   动效：行悬停时左侧升起 2px 橙色边缘；无其他动效。
6. **前后对比** — 暖白色条带。眉标“PROOF”；标题“Same street. Three days apart.”。交互式滑块，16:9 最大 1080px 宽：前屋顶（老化、开裂、苔藓条纹的瓦片，平坦阴天光线）位于后屋顶（清晰的新建筑瓦片，温暖金色光线）下方，相同四分之三屋顶线视角；一个垂直橙色手柄，圆形内带白色 ChevronLeft + ChevronRight 字形；标签“BEFORE”和“AFTER”位于顶部角落的半透明炭灰色标签中。滑块下方说明，14px 钢灰色：“Alder Creek reroof — 2,150 sq ft, tear-off, 3 days on site. Photo taken from the same corner of the yard.”
   布局：滑块居中，两侧 24px 边距；指针拖动、点击定位和手柄聚焦时的方向键；触控友好 44px 手柄。
   动效：手柄跟随指针，释放时带轻微 200ms 弹簧；拖动时裁剪每帧更新，无过渡。
7. **风暴损害清单** — 白色条带。眉标“AFTER A STORM”；标题“Check eight things. We'll tell you how urgent it is.”。介绍 15px 钢灰色：“Walk the yard with your phone. Tap everything you can see from the ground — no ladders.”。清单（两列四张白色卡片，每张为 CheckCircle2，点击时填充橙色，16px Inter 标签，12px 钢灰色权重标签）：“Missing or lifted shingles”（高）、“Granules filling the gutters”（观察）、“Water stain on a ceiling or wall”（高）、“Dented gutters or downspouts”（高）、“Cracked or curling shingle edges”（观察）、“Daylight through the boards in the attic”（紧急）、“Sagging deck or dip in the roofline”（紧急）、“Roof is past 20 years old”（观察）。结果卡片（炭灰色，下方全宽，点击一项后出现）：严重程度层级以 Oswald 600 橙色显示——1 个观察项“Keep an eye on it” / 任何高项“Get an inspection this season” / 任何紧急项“Call today — active damage worsens with every rain”；一行钢灰色解释；橙色胶囊按钮“Call [PHONE]”（tel:）和白色描边胶囊按钮“Book a free inspection”（锚点）。结果文本示例：观察——“Recheck after the next big wind; book before winter if it worsens.”；高——“A roofer should look within weeks — inspections are free and take 40 minutes.”；紧急——“Active leaks compound fast. The storm line answers 24/7.”
   布局：卡片网格桌面端 2×4，移动端 1 列；结果卡片是粘性？否——在下方流动；选择持久化到 localStorage 并在重新加载时恢复。
   Motion: 点击时复选框以 1.15× 弹跳，持续 150ms；结果卡片以 250ms 的高度缓动展开；等级升级时等级标签闪烁橙色一次。
8. **保修、许可与服务区域** — 炭灰色带，分两半。左侧：眉题 'THE PAPERWORK THAT MATTERS'（橙色）；标题 'Ten years on the work. License on file.'；段落 '[BRAND] fixes any workmanship failure free for ten years — parts, labor, and the trip. Materials carry the manufacturer's own coverage, 25 years to lifetime depending on what you pick. We operate under license #RC-88412 with workers' comp and $2M liability; ask the crew lead to see the binder any day on site.'；三个标签（炭灰深色，天蓝色文字）：'License #RC-88412'、'Insured · workers' comp + $2M'、'Background-checked crews'。右侧：炭灰深色面板上的内联 SVG 服务地图 — [CITY] 为橙色星标，标注 'Shop'，天蓝色圆点标注 'Alder Creek 12 min'、'Brookfield 18 min'、'Kestrel Park 22 min'、'Sawmill Flat 26 min'、'Two Bridges 31 min'、'Vesper Bay 38 min'，它们之间以细虚线天蓝色道路连接，一个大的虚线圆圈标注 '40-mile service radius'；地图下方一行 13px #A9B2BD 文字：'Outside the circle? Call anyway — full replacements travel.'
   Layout: 桌面端 6/6 列，移动端堆叠，地图为 4:3 面板；城镇标签绝不与半径环重叠（标签保持在环内或用引导线）。
   Motion: 地图圆点在区块进入时脉冲一次（不透明度 0.6→1，600ms 交错）；道路通过 stroke-dashoffset 在 800ms 内绘制；减少动态效果时显示静态地图。
9. **邻居怎么说** — 白色带。眉题 'NEIGHBORS'；标题 'Reviewed by the people on the next street.' 三张卡片（暖白底、细线边框、橙色调引号）：五颗橙色星；引文 16px 墨色；页脚 13px 钢色 — 姓名、城镇、工作。'They reroofed our 1962 ranch in three days and the yard was cleaner than they found it. The estimator was $600 over the final invoice — in our favor.' — Marion T., Alder Creek, full replacement. 'Hail took half the street. [BRAND] had a photo report to my adjuster in two days and the check covered everything they quoted.' — Devon R., Brookfield, storm claim. 'Leak three roofers couldn't find. Ray water-tested for an hour, found a nail pop by the chimney, fixed it, showed me photos.' — Priya S., Kestrel Park, repair.
   Layout: 三张卡片排成一行（900px 以下为 1 列）；桌面端中间卡片上浮 12px 以形成节奏。
   Motion: 卡片进入时以 90ms 交错上升 16px。
10. **融资说明** — 暖白色带，带单个天蓝色调面板，2px 圆角，居中最大宽度 860px：标题为 Oswald 600 'Want it in payments?' 15px 墨色段落 'Sample terms for illustration only: 0% APR for 12 months, or 9.9% APR across 60 months, through a third-party lender — subject to credit approval. This is not an offer of credit. Real options arrive with your written quote.' 一行小的 Droplets-to-Clock 注释：'Storm-damage jobs can often be scheduled first and financed after the adjuster settles.'
   Layout: 单个居中面板；32px 内边距；无网格。
   Motion: 面板进入时淡入并上移 12px；无其他动态效果。
11. **检查请求** — 炭灰色带。眉题 'START HERE'（橙色）；标题 'Free inspection. 40 minutes. Photo report yours to keep.' 表单位于白色 2px 圆角面板中（最大宽度 720px，32px 内边距），字段为 Inter 15px，输入框 6px 圆角，钢色 13px 标签：Name（文本，必填）、Phone（tel，必填，基本格式检查）、Street address（文本，必填）、Town（下拉选择：七个服务城镇，[CITY] 排第一）、'What's going on'（文本域，占位符 'e.g. ceiling stain after Monday's storm, roof is ~22 years old'）、Preferred window（分段控件：Morning / Afternoon / Either）、一个复选框 'An insurance claim may be involved'。橙色胶囊提交按钮 'Request my inspection'。验证：提交时，缺失的必填字段获得 2px 橙色边框，字段下方显示 13px 橙色提示；不使用浏览器原生弹窗。成功状态替换表单（无刷新）：橙色 CheckCircle2、Oswald 600 的 'Got it, [name].'、'The office calls within one business day — usually the same morning. Nothing was sent anywhere: this demo stores your request in this browser only.' 以及白色描边胶囊按钮 'Book another'。请求持久化到 localStorage。
   Layout: 桌面端两列字段行（name+phone、address+town），文本域和窗口控件全宽；移动端 1 列。移动端此区块底部内边距 96px，以便粘性栏永不遮挡提交按钮。
   Motion: 成功状态以 12px 上升交叉淡入；对勾以 1.15× 弹出；减少动态效果时即时切换。
12. **页脚** — 炭灰深色带。网格：第 1 列 — 标志 + Oswald 600 白色的 [BRAND]，然后 13px #A9B2BD 行 '118 Foundry Row, Unit 4, [CITY]'、'License #RC-88412 · insured'、'Mon–Sat 7a–6p · storm line 24/7'；第 2 列 — 'Jobs' 锚点列表（Services、Estimator、Materials、Service area）；第 3 列 — 'Talk to us'，电话 [PHONE]（tel:）为天蓝色，'Free inspection' 橙色胶囊按钮。细线下方底行：'[BRAND] · Sample site for a template — all rates, towns and reviews invented' 为 12px #7C858F，以及可选 [CREDIT] 链接为天蓝色。移动端粘性栏（仅在 768px 以下可见）：固定底部，炭灰色 96% 不透明度带背景模糊，两个胶囊按钮填满宽度：橙色 'Call [PHONE]'（tel:）和白色描边 'Free inspection'（锚点到表单）；包含 safe-area-inset-bottom 内边距。
   Layout: 页脚网格桌面端 4/4/4 堆叠为移动端 1 列；粘性栏高度 64px；768px 以下页面主体底部内边距 80px，以免内容被遮挡。
   Motion: 无。

## 资产
- 图片：Hero 完工屋顶。下载 https://media.vibefather.ai/assets/25ee36a4-c2f6-445b-88f9-2cb6f77604a2/hero-roof.webp 到 public/images/hero-roof.webp。Alt：'A finished charcoal-shingle roof on a two-story home at golden hour.' 用作 hero 的全出血视觉锚点。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：沥青瓦特写。下载 https://media.vibefather.ai/assets/25ee36a4-c2f6-445b-88f9-2cb6f77604a2/shingle-macro.webp 到 public/images/shingle-macro.webp。Alt：'Close view of architectural asphalt shingles.' 用作估算器的沥青缩略图和材料表的沥青行。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：直立锁边金属细节。下载 https://media.vibefather.ai/assets/25ee36a4-c2f6-445b-88f9-2cb6f77604a2/metal-roof-detail.webp 到 public/images/metal-roof-detail.webp。Alt：'Standing-seam metal roof panels catching warm light.' 用作估算器的金属缩略图和材料表的金属行。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：陶瓦细节。下载 https://media.vibefather.ai/assets/25ee36a4-c2f6-445b-88f9-2cb6f77604a2/tile-roof-detail.webp 到 public/images/tile-roof-detail.webp。Alt：'Overlapping terracotta clay roof tiles.' 用作估算器的陶瓦缩略图和材料表的陶瓦行。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：改造前照片。下载 https://media.vibefather.ai/assets/25ee36a4-c2f6-445b-88f9-2cb6f77604a2/before-roof.webp 到 public/images/before-roof.webp。Alt：'An aged roof with cracked, curling shingles and moss streaks.' 对比滑块的改造前图层。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：改造后照片。下载 https://media.vibefather.ai/assets/25ee36a4-c2f6-445b-88f9-2cb6f77604a2/after-roof.webp 到 public/images/after-roof.webp。Alt：'The same roofline with new architectural shingles in warm light.' 对比滑块的改造后图层，与改造前视角匹配。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图标：Lucide（ISC），通过 lucide-react 包引入，仅限 setup 中的图标列表。不使用其他图标来源。
- 字体：Oswald（OFL）和 Inter（OFL），通过 @fontsource/oswald 和 @fontsource/inter 自托管；不通过 CDN 加载字体。

## 不要做
- 不使用真实的屋面材料制造商、产品线、瓦片颜色名称或保修计划——材料一律以通用方式描述为建筑沥青瓦、直立锁边金属屋面与陶土瓦。
- 不使用真实的承包商、加盟商、认证徽章或检验印章；[BRAND]、许可证号 #RC-88412、评价、城镇和地址均为虚构的示例数据。
- 照片只能展示屋顶、屋顶轮廓线和材料——任何地方都不得出现施工队、人脸、车辆、可读文字、标牌、车牌或品牌标识。
- 所有价格、费率、融资条款和车程时间均标注为示例数据仅供说明；绝不将其呈现为报价或信贷要约，也绝不把融资部分称为贷款方的条款。
- 页面上任何地方都不出现日期：页脚不出现年份，不出现 '© 2026'，不出现与真实时钟绑定的日期选择器；时间引用保持相对表述（'same-week'、'48-hour response'）。
- 表单仅为本地示例：不向任何服务器提交，不使用 API，不做分析，不接入电子邮件或日历服务。仅持久化到 localStorage，并对恢复的数据进行校验。
- 不使用后端、服务器代码、数据库或认证。通过单一构建命令在 dist/ 中输出静态产物，小于 20 MB，Vite 的 base 使用相对路径。
- 仅通过 Fontsource 包自托管字体；绝不加载 Google Fonts、Adobe Fonts 或任何 CDN 样式表或脚本。
- 生产环境不生成 source map，不将 src/ 复制到 dist/。
- 不使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务或热链接文件；仅使用六张生成的图片和代码绘制的 SVG 图形。
- 不做 SEO 工作：不写 meta 描述、Open Graph 标签、JSON-LD、站点地图，也不使用堆砌关键词的标题。一个包含 [BRAND] 的普通标题和一个 favicon 就足够了。
- 估算器绝不能静默猜测：将费率表和每一项附加费用保留在 content.ts 中可见，并反映在屏幕上的明细行中。
- 不做滚动劫持、页面视差、自定义光标或自动播放媒体；动效仅限于指定的显现、数字递增、补间和滑块弹簧效果，且全部遵循 prefers-reduced-motion。
- 在 390px 宽度下，移动端页眉保持单行（标志图形、通话按钮、菜单按钮），且绝不让吸底栏遮挡检验表单的提交按钮。
- 从 [BRAND] 和 [PHONE] 构建品牌派生字符串（存储键、tel: 链接、slug），以便替换变量值后不会残留默认品牌的痕迹。
- 每个内部链接都是文件名或页内锚点，绝不是裸目录；站点保持为单个 index.html。

---
— Prompt by VibeFather · https://vibefather.ai/t/roofing-company-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
