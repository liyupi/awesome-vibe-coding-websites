> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 音乐课程学校网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一个单页网站，这是一所由小提琴家兼总监 [FOUNDER] 在 [CITY] 创办的音乐学校，拥有 [EXPERIENCE] 的经验和 300 名学生。页面温暖——李子色（plum）、黄铜色（brass）、奶油色（cream）、阳光下的乐器照片——包含一个横跨六种乐器的乐器与教师网格、一个课程查找器（乐器、年龄、水平、形式 → 匹配有每周空档的教师）、按课程时长定价、一个浏览器本地练习追踪器、一个以社区为框架的演奏会与活动页面，以及一个会带上查找器所选选项的试课预约。所有教师、空档、价格和活动均为虚构的示例数据。

- 受众：主要：寻找合适的第一位老师的家长，以及一直想开始学琴的成年人——两者都会先感受温度，再看资历。次要：正在改造查找器和追踪器的辅导中心和艺术工作室。
- 目标：让访客从“谁适合我的孩子”走向预约试课：三次点击匹配一位老师，清楚地展示价格，让练习追踪器证明学校认真对待快乐，然后带着所有信息预约试课。
- 语气：温暖的工作室英语——一位记得每个学生狗狗名字的总监。鼓励练习但不施压；坦诚地说明乐器一开始会很吵。

## 技术栈（Stack）
- 框架（Framework）：Vite 6 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、vite（MIT）、typescript（Apache-2.0）、tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/petrona（OFL-1.1）、@fontsource/mulish（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化（Setup）：
  - 创建一个 Vite 6 + React 18 + TypeScript 项目，base 设为 './'，build.outDir 设为 'dist'，build.sourcemap 设为 false。不使用路由、无后端、无服务端代码。
  - 安装 Tailwind CSS 3.4，并配置 PostCSS 和 Autoprefixer。用下方精确的调色板扩展主题，fontFamily.display 设为 'Petrona'，fontFamily.body 设为 'Mulish'。
  - 通过 @fontsource/petrona 和 @fontsource/mulish 自托管 Petrona 字重 600 和 700，以及 Mulish 字重 400、600、700、800，并在 src/main.tsx 中导入。绝不从 CDN 加载字体。
  - 使用来自 'motion/react' 的 Motion（motion、useInView、useReducedMotion）实现入场动画、追踪器填充和数字递增；每个动画都要以 useReducedMotion() 作为开关条件。
  - 将所有文案和数据放在 src/content.ts 中：品牌字符串、首屏文案、乐器、四位教师（姓名、乐器、风格描述、授课形式、年龄、级别、照片、每周可约时段）、价格档位、追踪器文案、活动、评价、表单选项。当变量值变化时，在该文件中重写依赖的文案，并从 [BRAND] 和 [PHONE] 派生存储键和 tel: 链接，确保不残留默认品牌痕迹。
  - 课程查找器（Lesson finder），具体要求：输入项——乐器标签（Piano、Guitar、Violin、Voice、Drums、Cello）、年龄标签（Child 6–10 / Tween 11–13 / Teen 14–17 / Adult 18+）、级别标签（Beginner / Some experience / Advanced）、形式标签（In-person / Online / Either）。教师：'Amara Lin'——小提琴、中提琴、大提琴——线下与线上——年龄 child+——初级到高级——可约时段 'Tue 4:00'、'Wed 5:30'、'Sat 9:00'；'Ben Osei'——钢琴——线下——年龄 child+——初级与部分经验——可约时段 'Mon 3:30'、'Thu 4:30'、'Sat 10:30'；'Carmen Ruiz'——声乐、吉他——线下与线上——年龄 tween+——所有级别——可约时段 'Tue 5:00'、'Fri 3:30'、'Sat 11:00'；'Dana Whitehorse'——鼓、钢琴——线下——年龄 child+——初级与部分经验——可约时段 'Mon 4:00'、'Wed 3:30'、'Thu 6:00'。匹配结果返回所有教授该乐器且符合所选筛选条件的教师（形式 'Either' 匹配全部）；无匹配状态显示 'No one fits that exact mix — loosen a filter, or note that online teachers match everywhere'，外加一个 'Loosen filters' 标签，绝不出现空白页面。选中的匹配项将可约时段显示为可预订标签，点击后预填试课表单（教师 + 时段）。
  - 练习追踪器（Practice tracker），具体要求：一个 Mon–Sun 的七格网格；点击某格按 0 → 10 → 20 → 30 → 45+ 分钟循环（标签为 '10'、'20'、'30'、'45+'）；网格按数值以黄铜色强度填充；一个周总计计数器和朝向 100 分钟的目标进度条；一行根据存储历史统计连续记录周数的连续记录文字（'2-week streak — the metronome approves'）；一条 12px 的注释 'Lives in this browser only — bring your streak to lessons for bragging rights.'。持久化到 localStorage 的 [BRAND_SLUG]-practice 键下。
  - 价格档位（Pricing tiers），具体要求：30 分钟——$38；45 分钟——$52；60 分钟——$64；备注——线上课程每节减 $6；家庭第二名学员 9 折；按月计费，无注册费，价格为示例。
  - 仅使用以下 lucide-react 图标：Phone、Music、Piano、Guitar、Mic、Drum、CalendarCheck、Clock、CheckCircle2、Star、MapPin、ChevronRight、ArrowRight、Menu、X、Users、Sparkles、Metronome？（使用 Timer）、Heart。
  - 将查找器选择、练习追踪器和试课预约持久化到 localStorage，以 [BRAND_SLUG] 为命名空间；校验恢复的 JSON，并对格式错误的数据静默恢复。
  - 构建前将六张生成的图片下载到 Assets 中列出的精确 public 路径。在项目根目录创建 ASSETS.md，列出每个文件的路径、来源 URL、作者或生成器，以及许可证。
  - 一个纯 <title> 为 [BRAND] 以及一个 favicon（带黄铜四分音符的梅子色圆形）即可；不需要 meta 描述、Open Graph 标签、JSON-LD 或站点地图。

## 变量
- [BRAND] — 学校名称（默认：“Cadence House Music”）。虚构的学校名称；代码中由此派生出一个四分音符标志。
- [CITY] — 城市（默认：“Birchwood”）。学校所在地；出现在 hero、活动和页脚中。
- [FOUNDER] — 总监（默认：“Amara Lin”）。虚构的小提琴家兼总监；也是第一张教师卡片。
- [PHONE] — 电话（默认：“(555) 648-3390”）。学校电话；以 tel: 链接形式呈现，仅使用数字。
- [EXPERIENCE] — 年限（默认：“13 years”）。像 '13 years' 这样的普通短语；用于 hero 文案。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/music-lessons-school-website（默认：是；删除此行即可移除）

Pages & Sections 下的文案是为默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 梅紫（Plum）`#4B1D52` — Hero 区底色、深色区块、标题
- 深梅紫（Plum deep）`#38153E` — 页脚底色和最深的面板
- 黄铜色（Brass）`#E3A33B` — 强调色：CTA、追踪器填充、高亮
- 黄铜浅调（Brass tint）`#F9EFD9` — 标签片和注释面板
- 奶油色（Cream）`#FAF5EC` — 页面底色
- 白色（White）`#FFFFFF` — 奶油色底上的卡片
- 墨色（Ink）`#2E2233` — 正文文字
- 钢灰色（Steel）`#6E5F73` — 次要文字；深色底上使用 #C4B3C9
- 细线色（Hairline）`#EAE0E3` — 细线分隔和卡片边框

### 字体排印
- 展示字体：标题、价格、每周总计：Petrona（OFL），字重 600/700
- 正文字体：段落、控件、追踪器：Mulish（OFL），字重 400/600/700/800

### 布局与动效
- 间距：区块之间桌面端间隔 88px / 移动端 60px；区块标题使用 13px 字距的黄铜色配梅紫（或梅紫配奶油色）眉题，下方是 clamp(28px, 3.2vw, 44px) 的 Petrona 700 标题；卡片内边距 26px，间距 22px。
- 圆角：温暖工作室风格：卡片 14px，标签片和输入框 10px，胶囊形 CTA；照片 14px。
- 动效：淡入上浮显现（14px，500ms，60ms 交错）通过 useInView 实现，仅触发一次。
- 动效：追踪器单元格以 200ms 缩放填充；目标条以 300ms 填充；连续天数计数以 500ms 递增。
- 动效：查找器结果在任何筛选条件变化时以 200ms 交叉淡入淡出；展开的标签片被选中时以 1.05× 弹出。
- 动效：所有动效在 prefers-reduced-motion 下立即禁用；无视差、无滚动劫持、无自动播放媒体。
- 图像：来自同一次拍摄的阳光教室摄影：一间温暖的房间，里面有一架立式钢琴和一把放在椅子上等待的小提琴，四张教师肖像（虚构、多样、手持或身旁放着乐器），以及一个小而温暖的演奏厅，空椅子面向亮灯的舞台——除肖像外没有人物特写，乐器上没有品牌标识。

## 页面与区块
### [BRAND] — [CITY] 的音乐课程（`index.html`）
1. **页眉与首屏** — 页眉（奶油色 94% 不透明度，带背景模糊，72px）：四分音符标志（梅子色圆形配黄铜色音符）+ [BRAND]，Petrona 700 18px 梅子色；导航锚点：乐器（Instruments）、课程查找器（Lesson finder）、价格（Pricing）、练习（Practice）、活动（Events）；右侧：电话标签（Phone 图标 + [PHONE]（tel:））和黄铜色胶囊按钮“Book a trial”。在 390px 宽度下：标志 + 名称、电话图标按钮、菜单按钮排成一行；锚点收进奶油色下拉菜单。首屏：左侧文案（第 1–6 列）：眉标为黄铜色配梅子色底胶囊“MUSIC LESSONS — [CITY], ALL AGES”；H1 为 Petrona 700 墨色“The lesson room you still remember.”；段落为钢灰色“Director [FOUNDER] and three teachers run a sunlit house of instruments — [EXPERIENCE], 300 students, and a rule that's held: no one gets rushed past Twinkle.”；黄铜色胶囊按钮“Find your teacher”（锚点）和梅子色描边胶囊按钮“See pricing”（锚点）；标签：“First trial free” · “Six instruments” · “Recitals, not auditions”。右侧（第 7–12 列）：教室照片置于 14px 边框内，4:3 比例，左下角叠一张浮动白色卡片：Music 图标、“This week: 84 lessons”、“Next openings: Tue 4:00 · Sat 10:30”，Petrona 700 梅子色，12px 钢灰色“Sample board.”
   布局：12 列网格；浮动卡片偏移 -18px；移动端先堆叠文案再显示照片。
   动效：照片从 1.03 缩放归位；文案上浮 14px，错开 70ms。
2. **乐器与教师** — 白色区块。眉标“WHAT WE TEACH”（黄铜色）；标题“Six instruments, four teachers, zero auditions.” 3×2 乐器卡片网格（奶油色底、细线边框）：钢琴（Piano）——“Ben & Dana — classical and pop, duets encouraged”；吉他（Guitar）——“Carmen — chords first, songs by week three”；小提琴与中提琴（Violin & viola）——“[FOUNDER] — the Suzuki-free path: good posture, real tunes”；声乐（Voice）——“Carmen — range without the opera pressure (unless asked)”；鼓（Drums）——“Dana — pads first, kit by month two, neighbors consulted”；大提琴（Cello）——“[FOUNDER] — the instrument that hums back”。卡片页脚：梅子色链接“Meet them in the finder →”。
   布局：3 列网格（900px 以下 2 列，640px 以下 1 列）；乐器图标为小型代码绘制的 SVG 线条图标。
   动效：卡片上浮 14px，错开 60ms。
3. **课程查找器** — 梅子色区块，标志性区块。眉标“LESSON FINDER”（黄铜色）；标题“Three taps to the right teacher.” 控件位于白色面板（左侧，5 列）：乐器标签；年龄标签；水平标签；形式标签。结果（右侧，7 列）：匹配的教师卡片（白色、细线边框、14px）——肖像缩略图、姓名 Petrona 700、乐器 + 形式行、风格句（“Teaches the Suzuki-free path: good posture, real tunes.”）、可预约的黄铜色描边标签形式的时间空档（“Tue 4:00”等），点击可预填试课表单，以及黄铜色胶囊按钮“Trial with [first name]”。无匹配状态：“No one fits that exact mix — loosen a filter, or note that online teachers match everywhere”，外加一个“Loosen filters”标签。查找器状态会持久保存。
   布局：桌面端 5/7 列；移动端堆叠；结果变化时交叉淡入 200ms。
   动效：结果交叉淡入；标签选中时弹跳 1.05×。
4. **价格** — 奶油色区块。眉标“PRICING”（黄铜色）；标题“Priced by the minute, published like it should be.” 三张卡片：“30 minutes”——“$38 / lesson”——“young students and busy weeks”；“45 minutes”——“$52 / lesson”——“the sweet spot for most”，标注“MOST CHOSEN”；“60 minutes”——“$64 / lesson”——“teens, adults and the serious”。说明面板（黄铜色浅底，13px）：“Online lessons $6 less. Second student in a family, 10% off. Monthly billing, no registration fee — sample prices, and the trial is always free.”
   布局：三张卡片排成一行（900px 以下 1 列）；中间卡片上浮 12px。
   动效：卡片上浮 14px，错开 70ms；标签弹跳 1.1×。
5. **练习追踪器** — 白色区块，第二个工具。眉标“PRACTICE TRACKER”（黄铜色）；标题“Minutes in, streaks on.” 追踪器（奶油色面板，最大宽度 720px）：周一至周日一行七个可点击单元格；每次点击使单元格在 0 → 10 → 20 → 30 → 45+ 分钟之间循环，单元格以递增强度填充黄铜色；周总计计数器为 Petrona 700（“70 minutes this week”）；朝向 100 分钟的目标进度条；带 Timer 图标的连续记录行（“2-week streak — the metronome approves”）；重置链接“Start a fresh week”；12px 浏览器本地存储说明。下方一行 14px 钢灰色鼓励语：“We'd rather see four honest tens than one heroic hour.”
   布局：单元格 56px 方形，44px 点击目标，标签在下方；目标条全宽；移动端保持一行七个紧凑单元格，标签更小。
   动效：单元格填充缩放 200ms；目标条填充 300ms；连续记录计数递增 500ms。
6. **演奏会与活动** — 梅子色区块。眉标“RECITALS & EVENTS”（黄铜色）；标题“Community, not competitions.” 左侧（5 列）：演奏厅照片置于 14px 边框内。右侧（7 列）：三行活动——“Winter & spring recitals”——“every student invited, nobody ranked; the cookie table is famous”（CalendarCheck）；“Coffee-house nights”——“monthly, low-stakes, five-minute slots for the brave and the almost”（Mic）；“Summer porch ensemble”——“a mixed-instrument group that plays two farmers markets a season”（Users）。12px 钢灰色说明：“Events run on a seasonal rhythm — dates live in the monthly newsletter (sample events).”
   布局：5/7 列；移动端先堆叠照片再显示行。
   动效：行淡入，间隔 60ms；照片上浮 14px。
7. **教师** — 奶油色区块。眉标“THE TEACHERS”；标题“Four people your kid will quote at dinner.” 四张卡片，3:4 肖像，姓名 Petrona 700，乐器行，一句理念：“[FOUNDER] — violin · viola · cello”——“Choir kid turned fiddler; teaches the Suzuki-free path.”——“Every student gets a tune they love by month two.”；“Ben Osei — piano”——“Jazz degree, endless patience for Hot Cross Buns.”——“Rhythm is a conversation; we start by listening.”；“Carmen Ruiz — voice · guitar”——“Open-mic veteran who coaxes room-filling sound from shy people.”——“Your voice already exists; we just tune the room.”；“Dana Whitehorse — drums · piano”——“The steady heartbeat of the school, literally.”——“Count out loud. Everything else follows.”
   布局：四张卡片排成一行（1024px 以下 2×2，640px 以下 1 列）。
   动效：卡片上浮 14px，错开 70ms。
8. **评价** — 白色区块。眉标“FROM FAMILIES”；标题“Quoted from the pickup line.” 三张卡片（奶油色底、黄铜色引号）：五颗黄铜色星；16px 墨色引文；13px 钢灰色页脚。“The finder matched my shy 8-year-old with [FOUNDER] in about thirty seconds. Two months later he practices without being asked. We checked with a doctor.” — Rosa M., violin parent。“I'm 52 and started drums because why not. Dana never once made it weird.” — Gerald T., adult beginner。“The practice tracker's streak feature is_parenting_gold.” — Dana P., guitar parent。12px 钢灰色免责声明：“Sample reviews for this template demo.”
   布局：三张卡片排成一行（900px 以下 1 列）；中间卡片上浮 12px。
   动效：卡片上浮 14px，错开 80ms。
9. **试课预约** — 梅子色区块。眉标“FREE TRIAL”（黄铜色）；标题“One lesson, no card, no commitment.” 表单（白色面板，最大宽度 720px）：乐器选择；如果选择了查找器匹配或时间空档，顶部显示标签（“With: Amara Lin ×”、“Opening: Tue 4:00 ×”）；学生姓名（必填）和年龄（必填）；监护人姓名 + 电话（必填）；形式标签（In-person / Online）；备注可选（“anything we should know — instruments owned, songs loved”）。黄铜色胶囊按钮提交“Book the trial”。内联验证（2px 黄铜色边框，13px 说明），无原生弹窗。成功：CheckCircle2 黄铜色，“See you at the house, [student].” Petrona 700，“We confirm by text within a day — bring nothing but curiosity; instruments are here. This demo stores the booking in this browser only.”，以及描边胶囊按钮“Book another”。持久化到 localStorage。
   布局：桌面端双列字段行，移动端 1 列，底部留 96px 内边距以避开粘性栏。
   动效：成功状态交叉淡入并上浮 12px；对勾弹跳 1.15×。
10. **页脚** — 深梅子色区块。第 1 列：音符标志 + [BRAND] Petrona 700 白色；13px #C4B3C9 行“19 Chestnut Row, [CITY]”、“[PHONE]（tel:）”、“Mon–Fri 2–8p · Sat 9a–2p”。第 2 列“School”：锚点 Instruments、Lesson finder、Pricing、Events。第 3 列“Small print”：“Sample site for a template — teachers, openings, prices and reviews invented”，可选 [CREDIT] 链接为黄铜色。移动端粘性栏（768px 以下）：固定底部梅子色 96% + 模糊；黄铜色胶囊按钮“Call”（tel:）和白色描边胶囊按钮“Trial”（锚点），安全区内边距。
   布局：页脚网格 4/4/4，移动端 1 列；768px 以下 body 底部内边距 80px。
   动效：无。

## 资产
- 图片：教室。下载 https://media.vibefather.ai/assets/f2aa6a1b-ed2f-4609-9fef-1fe34458907f/hero-lessonroom.webp 到 public/images/hero-lessonroom.webp。替代文本：'A sunlit lesson room with an upright piano and a violin on a chair.' 主视觉锚点。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：教师肖像一。下载 https://media.vibefather.ai/assets/f2aa6a1b-ed2f-4609-9fef-1fe34458907f/teacher-1.webp 到 public/images/teacher-1.webp。替代文本：'Portrait of a fictional violin teacher holding her instrument.' [FOUNDER] 卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：教师肖像二。下载 https://media.vibefather.ai/assets/f2aa6a1b-ed2f-4609-9fef-1fe34458907f/teacher-2.webp 到 public/images/teacher-2.webp。替代文本：'Portrait of a fictional piano teacher seated at an upright piano.' Ben Osei 卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：教师肖像三。下载 https://media.vibefather.ai/assets/f2aa6a1b-ed2f-4609-9fef-1fe34458907f/teacher-3.webp 到 public/images/teacher-3.webp。替代文本：'Portrait of a fictional voice and guitar teacher with an acoustic guitar.' Carmen Ruiz 卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：教师肖像四。下载 https://media.vibefather.ai/assets/f2aa6a1b-ed2f-4609-9fef-1fe34458907f/teacher-4.webp 到 public/images/teacher-4.webp。替代文本：'Portrait of a fictional drums teacher with sticks by a practice kit.' Dana Whitehorse 卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：演奏厅。下载 https://media.vibefather.ai/assets/f2aa6a1b-ed2f-4609-9fef-1fe34458907f/recital-hall.webp 到 public/images/recital-hall.webp。替代文本：'A small warm recital hall with empty chairs facing a lit stage.' 活动横幅。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图标：Lucide（ISC），通过 lucide-react 包引入，仅限 setup 中的图标列表，外加小型代码绘制的乐器线条图标和四分音符标志。无其他图标来源。
- 字体：Petrona（OFL）和 Mulish（OFL），通过 @fontsource/petrona 和 @fontsource/mulish 自托管；不从 CDN 加载字体。

## 禁止事项
- 不得使用真实音乐学校、音乐学院、考级机构或教学法商标（Suzuki、ABRSM 等）；级别保持通用，小提琴路径明确使用“Suzuki-free”的表述，且不带贬损。
- 不得使用真实乐器制造商或可识别的品牌乐器；照片中的乐器均为通用款，不出现可见的标识或琴头标记。
- 不得使用真实场地名称作为演奏会地点；音乐厅、咖啡馆和农夫市集均为通用名称。
- 不得承诺结果：不得出现“保证达到音乐会水平”，不得声称通过考试；鼓励的语气保持温暖而诚实。
- 所有价格、开放时间和活动均为示例数据；活动按季节节奏运行，绝不使用与真实时钟绑定的真实日期。
- 练习追踪器仅存储在此浏览器中，并明确说明这一点；无账户、无同步、无分析。
- 表单仅为本地示例：不向任何服务器提交，不使用 API。仅持久化到 localStorage，并对恢复的数据进行校验。
- 查找器绝不走进死胡同：无匹配状态提供“Loosen filters”标签和“online-everywhere”说明。
- 无后端、服务器代码、数据库或认证。静态输出通过单一构建命令生成到 dist/，体积小于 20 MB，Vite 的 base 使用相对路径。
- 仅通过 Fontsource 包自托管字体；绝不加载 Google Fonts、Adobe Fonts 或任何 CDN 样式表或脚本。
- 生产环境不生成 source map，不将 src/ 复制到 dist/。
- 不得使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务或热链接文件；仅使用六张生成的图片和代码绘制的 SVG 图形。
- 不做 SEO 工作：不写 meta description、Open Graph 标签、JSON-LD、站点地图，不堆砌关键词标题。一个包含 [BRAND] 的普通标题和一个 favicon 就足够了。
- 日期不得与真实时钟绑定：开放时间使用星期标签，不使用日历日期，不写版权年份。
- 教师肖像为虚构人物，多样且不 resemblance 任何真实个人。
- 无滚动劫持、页面视差、自定义光标或自动播放媒体；动效仅限于指定的显现、交叉淡入、追踪器填充和数字递增，且全部遵循 prefers-reduced-motion。
- 在 390px 宽度下，移动端页头保持单行，且绝不让粘性底栏遮挡试听表单的提交按钮。
- 从 [BRAND] 和 [PHONE] 构建品牌派生字符串（存储键、tel: 链接），以便替换变量值后绝不残留默认品牌痕迹。
- 每个内部链接都是文件名或页内锚点，绝不使用裸目录；网站保持为单个 index.html。

---
— Prompt by VibeFather · https://vibefather.ai/t/music-lessons-school-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
