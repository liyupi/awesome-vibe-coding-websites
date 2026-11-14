> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 私立 K-12 学校网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个单页网站，这是一所独立的 K-12 走读学校，由校长 [FOUNDER] 领导，位于 [CITY]，在三个学部共服务 540 名学生，提供 [EXPERIENCE]。页面明亮且具有机构感——学校红、海军蓝、粉笔白，无徽章的衬线字标——包含学部卡片、每个学部的“一天生活”时间线、带季节性截止日期的五步招生节奏、带可见示例计算的学费与助学金估算器、体育与艺术网格、校园参观预约和新闻动态。照片展示教室、图书馆和运动场，画面中的人物在远处或背对镜头。所有统计数据、教职员工和活动均为虚构的示例数据。

- 受众：主要：在 [CITY] 周边研究独立学校的家长——快速浏览以判断学部匹配度、对日常的真实感受以及费用数字。次要：重新定位学部和估算器的特许网络和小型学院。
- 目标：推动家长从“又一个不错的学校网站”转变为预约参观：让日常足够生动，使他们能想象自己的孩子身处其中；让招生感觉像一种节奏而非一堵墙；让估算器足够诚实地回答费用问题，以保持对话继续。
- 语调：温暖的机构式叙述——具体、从容、略带自豪。学校听起来像是老师和校长认识每一个孩子，而不是像营销委员会。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、vite（MIT）、typescript（Apache-2.0）、tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/source-serif-4（OFL-1.1）、@fontsource/inter（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务端代码、无外部 API。
- 设置：
  - 创建一个 Vite 6 + React 18 + TypeScript 项目，base 为 './'，build.outDir 为 'dist'，build.sourcemap: false。无路由、无后端、无服务端代码。
  - 安装 Tailwind CSS 3.4 及 PostCSS 和 Autoprefixer。用下方精确的调色板扩展主题，fontFamily.display 为 'Source Serif 4'，fontFamily.body 为 'Inter'。
  - 通过 @fontsource/source-serif-4 和 @fontsource/inter 自托管 Source Serif 4 字重 600 和 700 以及 Inter 字重 400、500、600、700，在 src/main.tsx 中导入。绝不从 CDN 加载字体。
  - 使用来自 'motion/react' 的 Motion（motion、useInView、useReducedMotion）实现显现和时间线绘制；每个动画都以 useReducedMotion() 为条件。
  - 将所有文案和数据保留在 src/content.ts 中：品牌字符串、主视觉文案、三个学部、每个学部的“一天生活”站点、带季节性锚点的招生步骤、估算器表格（基础学费、助学金档位、规模调整）、体育和艺术网格、新闻条目、参观选项。当变量值变化时，在那里重写依赖的文案，并从 [BRAND] 和 [PHONE] 派生存储键和 tel: 链接，确保不残留默认品牌痕迹。
  - “一天生活”，每个学部恰好六个站点，时间固定：低年级 K–4 — '8:15 morning circle'（问候、天气、背诵一首诗）、'8:45 reading workshop'（按准备度分组的小组）、'10:30 the woods walk'（小径上的自然研究）、'12:00 family-style lunch'（老师同桌）、'1:15 studio: art & music'（隔天交替）、'2:30 pick-up line'（留校者参加园艺俱乐部）；中年级 5–8 — '8:00 advisory check-in'（八个孩子，一位成人，每天早晨）、'8:20 math by readiness'（不按生日）、'10:00 humanities seminar'（圆桌，非排排坐）、'11:45 lunch + clubs'（四十个可选）、'12:45 science lab'（真实实验台，真实护目镜）、'2:00 athletics & arts block'（人人运动）、'3:20 optional study hall'（安静房间，数学老师值班）；高年级 9–12 — '8:15 Harkness English'（十四把椅子，一张桌子）、'9:40 advanced math tracks'（直至多变量）、'11:15 electives'（机器人、工作室艺术、辩论）、'12:30 lunch senate'（学生运营的社团预算）、'1:15 lab sciences'（九年级先学物理）、'2:45 team practice or rehearsal'（人人有所归属）、'4:00 ensembles'（晚餐前的爵士乐）。标签页以 200ms 交叉淡入切换时间线；时间线绘制为海军蓝线条配红色节点。
  - 学费与助学金估算器，精确为：按学部的基础学费 — 低年级 $19,800，中年级 $23,400，高年级 $25,900；按收入档位的助学金百分比 — 低于 $80k：45%，$80–150k：28%，$150–250k：15%，超过 $250k：5%；家庭规模调整 — 1–3：×1.0，4：×1.05，5：×1.08，6+：×1.12（应用于助学金百分比，上限 60%）；估算学费 = 基础 × (1 − min(0.60, 助学金% × 规模调整))，四舍五入到最接近的 $10；结果面板打印每一行（'Upper division base — $25,900'、'Income $80–150k — 28% aid'、'Household of 4 — ×1.05'、'Estimated: $18,340 / year'）加上 'Illustrative only — aid decisions are made by committee with your full application.'。输入持久化到 localStorage 的 [BRAND_SLUG]-estimator 下。
  - 在代码中绘制无徽章的文字标识：校名使用 Source Serif 700 字体，下方一条小红线，以及一个无打开书本的简单红色方块字形；任何地方都不使用纹章、盾牌或印章。
  - 仅使用这些 lucide-react 图标：Phone、GraduationCap、BookOpen、FlaskConical、Palette、Trophy、Users、MapPin、Clock、CalendarCheck、CheckCircle2、ChevronRight、ArrowRight、Menu、X、Bus、Star、Newspaper。
  - 将估算器输入和参观请求持久化到 localStorage，以 [BRAND_SLUG] 为命名空间；验证恢复的 JSON 并从格式错误的数据中静默恢复。
  - 构建前将六张生成的图片下载到 Assets 中列出的精确公共路径。在项目根目录创建 ASSETS.md，列出每个文件的路径、来源 URL、作者或生成器以及许可证。
  - 一个纯 <title> 为 [BRAND] 和一个 favicon（带红色线条标记的海军蓝方块）就足够了；不需要 meta 描述、Open Graph 标签、JSON-LD 或站点地图。

## 变量
- [BRAND] — 学校名称（默认：“Redgate School”）。虚构的学校名称；字标和红色线条标志在代码中由此派生。
- [CITY] — 城市（默认：“Windmere”）。校区所在地；出现在主视觉、参观文案和页脚中。
- [FOUNDER] — 校长（默认：“Dr. Althea Rowe”）。虚构的校长，在主视觉和招生文案中提及。
- [PHONE] — 电话（默认：“(555) 448-7700”）。招生热线；以 tel: 链接形式呈现，仅使用数字。
- [EXPERIENCE] — 年数（默认：“61 years”）。如 '61 years' 这样的简单短语；用于主视觉文案。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/private-k-12-school-website（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值撰写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后替换内容而无需改动组件。

## 设计
### 颜色
- 学校红 `#C62E2E` — 强调色：眉题、CTA、时间线节点
- 藏青 `#16325C` — 字体、深色色带、字标
- 深藏青 `#0F2440` — 页脚底色
- 红色浅调 `#FAE8E8` — 标签和突出面板
- 粉笔白 `#FBFBF8` — 页面底色
- 白色 `#FFFFFF` — 卡片
- 钢灰 `#5A6474` — 次要文本
- 细线 `#E5E6E1` — 细线分隔和卡片边框

### 排版
- 展示字体：标题、分部名称、价格：Source Serif 4（OFL），字重 600/700
- 正文字体：段落、时间线、表单：Inter（OFL），字重 400/500/600/700

### 布局与动效
- 间距：传统式宽裕：桌面端区块间距 96px / 移动端 64px；区块标题使用 13px 字距加宽的红色眉题，下方为 Source Serif 700 标题，字号 clamp(30px, 3.4vw, 46px)；卡片内边距 26px，间距 22px。
- 圆角：机构式克制：卡片 6px，标签 4px，按钮 2px；照片 6px 并带 1px 藏青边框。
- 动效：淡入上浮显现（14px，550ms，70ms 交错）通过 useInView 实现，仅触发一次。
- 动效：分部标签页以 200ms 交叉淡入切换时间线；时间线的藏青线条以 700ms 绘制，红色节点以 1.1× 交错弹出。
- 动效：估算器输出在变化时以 200ms 补间过渡；新闻卡片以 50ms 交错。
- 动效：所有动效在 prefers-reduced-motion 下立即禁用；无视差、无滚动劫持、无自动播放媒体。
- 图像：来自同一次拍摄的阳光校园摄影：一栋带草坪的砖砌校舍、一间明亮的小学部教室（从背后拍摄儿童）、一间中学部科学实验室（从背后拍摄坐在实验台前的学生）、一间温暖的图书馆（学生位于远处）、一片运动场（远处有一支队伍），以及一个亮灯的礼堂舞台——无可辨认的面孔、无未成年人特写、无可读标识。

## 页面与区块
### [BRAND] — [CITY] 的独立 K-12 学校（`index.html`）
1. **页眉与首屏** — 页眉（粉笔白 95% 不透明度，带背景模糊，72px）：字标（名称用 Source Serif 700 海军蓝，配红色分隔线）+ 无校徽；导航锚点：学部（Divisions）、一日校园（A day here）、招生（Admissions）、学费（Tuition）、艺术与体育（Arts & athletics）；右侧：电话胶囊 Phone 图标 + [PHONE]（tel:）和红色胶囊按钮 'Book a tour'。在 390px 下：字标、电话图标按钮、菜单按钮排成一行；锚点收进粉笔白下拉菜单。首屏：全出血校园照片（砖砌校舍、草坪、晨光、远处有人，桌面 78vh / 移动端 540px），底部叠加从海军蓝 #16325C 92% 到透明的渐变（55% 处）；内容位于左下：红色眉题 'INDEPENDENT K-12 — [CITY]'；H1 用 Source Serif 700 白色 'Small school. Whole child. Full day.'；段落 '#D5DDEA' 'Head of school [FOUNDER] leads 540 students across three divisions on one fourteen-acre campus — [EXPERIENCE] of knowing every name by the second week.'；红色胶囊按钮 'Book a campus tour'（锚点）和白色描边胶囊按钮 'See a day here'（锚点）；12px 白色胶囊标签置于半透明海军蓝底上：'K through 12th grade' · '40% receive aid (sample)' · 'Bus routes county-wide'。
   布局：文案占第 1–7 列；胶囊标签在 390px 下最多换两行；遮罩保证 AA 对比度。
   动效：照片从 1.04 缩放到 1，历时 800ms；文案上移 14px，错开 70ms。
2. **学部（Divisions）** — 粉笔白区块。眉题 'THREE DIVISIONS'（红色）；标题 'One campus, three schools.' 三张卡片（白色，海军蓝细线）：'Lower School · K–4' — 低年级教室照片 — 'Two teachers per classroom, reading by readiness, and a woods walk that outranks any worksheet.'；'Middle School · 5–8' — 科学实验室照片 — 'Advisories of eight, math tracked to the kid not the birthday, labs with real benches.'；'Upper School · 9–12' — 图书馆照片 — 'Seminar tables, physics-first science, and electives from robotics to debate.' 每张卡片页脚：红色链接 'See a day in [division] →'，切换下方时间线标签并滚动到该处。
   布局：三张卡片一行（900px 以下单列）；照片 4:3 顶部对齐，带海军蓝边框。
   动效：卡片上移 14px，错开 70ms。
3. **一日校园（A day here）** — 白色区块，首个标志性区块。眉题 'A DAY HERE'（红色）；标题 'The schedule is the philosophy.' 学部标签（Lower / Middle / Upper — 激活项红色下划线）；时间线：一条从左到右绘制的海军蓝线，带红色时间节点和上下交替的站点卡片（移动端垂直排列），每个学部的六个站点与设置中列出的完全一致（时间用 Inter 600，站点名称用 Source Serif 700，各一行细节）。12px 钢灰色脚注：'Times are the typical rhythm; specials and electives shift by term.'
   布局：标签在上方；时间线最大宽度 980px；移动端垂直排列，卡片位于节点下方。
   动效：标签切换交叉淡入 200ms；线条绘制 700ms；节点错开弹出；减少动效时静态渲染。
4. **招生（Admissions）** — 粉笔白区块。眉题 'ADMISSIONS'（红色）；标题 'Five steps, no mystery.' 五张带红色数字的步骤卡片：01 'Inquire' — 'any season — the form takes three minutes and unlocks the visit calendar'；02 'Visit' — 'fall through winter — a weekday morning walk-through with a student guide'；03 'Apply' — 'by mid-January — one application per child, teacher references included'；04 'Aid application' — 'by mid-January — same deadline as the application, no separate chase'；05 'Decisions' — 'mid-March — every family hears by the same week, yes or no or waitlist'。13px 钢灰色页脚行：'Rolling admissions after March as space allows — deadlines follow the seasonal rhythm, not a live calendar.'
   布局：五个步骤横向排列（900px 以下 2×2+1 换行，640px 以下单列）；数字用 Source Serif 700 红色 36px。
   动效：步骤上移 14px，错开 80ms。
5. **学费与助学金估算器** — 海军蓝区块，标志性工具。眉题 'TUITION & AID'（海军蓝上的红色调）；标题 'The number, with its math showing.' 控件位于白色面板（左侧，5 列）：学部胶囊标签（Lower / Middle / Upper）；家庭人数胶囊标签（1–3 / 4 / 5 / 6+）；收入区间胶囊标签（Under $80k / $80–150k / $150–250k / Over $250k）。结果面板（粉笔白，右侧，7 列）：'ESTIMATED TUITION' 红色眉题；数字用 Source Serif 700 海军蓝，字号 clamp(36px, 4vw, 52px)，例如 '$18,340 / year'；13px 钢灰色行列表，数值为海军蓝（'Upper division base — $25,900'、'Income $80–150k — 28% aid'、'Household of 4 — ×1.05'）；12px 脚注 'Illustrative only — aid decisions are made by committee with your full application. Sample rates for this template.'；红色胶囊按钮 'Talk to admissions about aid' 锚定到参观表单。输入项持久保存。
   布局：桌面 5/7 列；移动端堆叠；结果不吸顶。
   动效：数字和行在变更时补间 200ms；无布局偏移。
6. **体育与艺术** — 粉笔白区块。左右两半。左侧：'ATHLETICS' 眉题；运动场照片置于海军蓝边框相框中；赛季网格 — 秋季：足球（场地）、越野（小径）；冬季：篮球（体育馆）、游泳（与 YMCA 共用的泳池？不 — 'the natatorium'）；春季：长曲棍球、田径、网球 — 每项为带设施说明的胶囊标签；一行文字 'No cuts before eighth grade — everyone belongs to a team.' 右侧：'ARTS' 眉题；艺术楼照片；项目胶囊标签 — 工作室艺术（两个工作室 + 窑炉）、音乐（三个乐团 + 私人课程）、戏剧（每年两部作品，所有试镜者都有角色）、辩论（午餐联盟）— 以及一行文字 'The spring musical casts everyone; the stage crew is why it works.'
   布局：6/6 列；胶囊标签换行；照片 4:3 带说明文字。
   动效：照片上移 14px；胶囊标签淡入，错开 50ms。
7. **校园参观预约** — 白色区块。眉题 'BOOK A TOUR'（红色）；标题 'A weekday morning, with a student guide.' 表单（粉笔白面板，最大宽度 720px）：入学年级选择（K 到 12 按学部编组）；同行人数胶囊标签（'Parent(s) only' / 'Family visit' / 'Student shadow morning'）；时间段胶囊标签（Weekday mornings · 8:30 or 10:00 / 'Open House Saturdays'）；姓名（必填）、电话（必填）、邮箱（可选）；红色胶囊按钮 'Request the tour'。内联验证（2px 红色边框，13px 提示），无原生弹窗。成功：CheckCircle2 红色，'See you on campus.' Source Serif 700，'Admissions calls within one business day to confirm the morning. Tours start at the front porch — look for the red door. This demo stores your request in this browser only.' 以及描边胶囊按钮 'Book another'。持久保存到 localStorage。
   布局：桌面双列字段行，移动端单列，底部留 96px 内边距以避开吸底栏。
   动效：成功状态交叉淡入并上移 12px；对勾弹出 1.15×。
8. **新闻与活动** — 粉笔白区块。眉题 'THIS SEASON'（红色）；标题 'The school, lately.' 六张新闻卡片排成 3×2 网格（白色，细线），每张带分类胶囊标签（Academics / Athletics / Arts / Community）、Source Serif 600 18px 标题和一行文字：'Robotics takes the regional — the upper-school team's bridge-bot held 41 pounds'（Academics）；'The fall festival returns — cider, the eighth-grade pie stand, and the famous faculty dunk tank'（Community）；'Middle school play sells out both nights — seventy kids in the cast, zero missed rehearsals'（Arts）；'Cross country sweeps the county meet — the trail on campus hosted, and the Lower School made signs'（Athletics）；'A new kiln for the studio — fired by an anonymous family gift, first load in November'（Arts）；'Grandparents' Day RSVPs open — the fourth graders will give the tours, obviously'（Community）。12px 钢灰色注：'Invented news items for this template demo.'
   布局：3 列网格（900px 以下 2 列，640px 以下 1 列）。
   动效：卡片错开 50ms。
9. **页脚** — 深海军蓝区块。第 1 列：字标 + 红色分隔线；13px #B9C4D6 行 '1 Redgate Circle, [CITY]'、'Admissions [PHONE]（tel:）'、'Bus routes across the county'。第 2 列 'School'：锚点 学部（Divisions）、一日校园（A day here）、招生（Admissions）、学费（Tuition）。第 3 列 'Small print'：'Sample site for a template — students, staff, stats and news invented'、'The school claims no accreditations or affiliations'、可选 [CREDIT] 链接用红色调。移动端吸底栏（768px 以下）：固定底部海军蓝 96% + 模糊；红色胶囊按钮 'Inquire'（tel:）和白色描边胶囊按钮 'Tour'（锚点），带安全区内边距。
   布局：页脚网格 4/4/4，移动端单列；768px 以下 body 底部内边距 80px。
   动效：无。

## 资源

- 图片：校园（Campus）。下载 https://media.vibefather.ai/assets/5047866d-2dda-419a-9105-122841ba8957/hero-campus.webp 到 public/images/hero-campus.webp。替代文本：'A brick schoolhouse with a lawn in morning light, people far away.' 首屏主视觉锚点。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：低年级教室（Lower classroom）。下载 https://media.vibefather.ai/assets/5047866d-2dda-419a-9105-122841ba8957/classroom-lower.webp 到 public/images/classroom-lower.webp。替代文本：'A bright lower-school classroom with children seen from behind.' 低年级（Lower School）卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：科学实验室（Science lab）。下载 https://media.vibefather.ai/assets/5047866d-2dda-419a-9105-122841ba8957/science-lab.webp 到 public/images/science-lab.webp。替代文本：'Middle-school students at lab benches, seen from behind.' 初中（Middle School）卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：图书馆（Library）。下载 https://media.vibefather.ai/assets/5047866d-2dda-419a-9105-122841ba8957/library.webp 到 public/images/library.webp。替代文本：'A warm school library with students far away among the shelves.' 高中（Upper School）卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：运动场（Athletic field）。下载 https://media.vibefather.ai/assets/5047866d-2dda-419a-9105-122841ba8957/athletic-field.webp 到 public/images/athletic-field.webp。替代文本：'A school athletic field with a team in the distance.' 体育板块（athletics half）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图片：艺术厅（Arts hall）。下载 https://media.vibefather.ai/assets/5047866d-2dda-419a-9105-122841ba8957/arts-hall.webp 到 public/images/arts-hall.webp。替代文本：'A lit auditorium stage with red curtains.' 艺术板块（arts half）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录该确切署名。
- 图标：Lucide（ISC），通过 lucide-react 包引入，仅限 setup 中的图标列表，外加代码绘制的无徽章字标。不使用其他图标来源。
- 字体：Source Serif 4（OFL）和 Inter（OFL），通过 @fontsource/source-serif-4 和 @fontsource/inter 自托管；不通过 CDN 加载字体。

## 不要做
- 不得声称或提及任何真实学校、学区、认证或排名；[BRAND]、教职员工、统计数据和新闻均为虚构，页脚需声明未声称任何隶属关系。
- 任何地方不得出现可辨认的未成年人面部：人物以远景或背影出现——逐一检查每张照片；不得有儿童特写。
- 不得提及任何真实标准化考试、奖学金项目或竞争学校/联盟；招生和体育内容保持通用。
- 学费和助学金数字为示例样本，需展示计算过程并附委员会免责声明——绝不构成财务援助的承诺。
- 不得暗示任何宗教或治理隶属关系；学校为独立、无宗派的通用设定。
- 不得使用与真实时钟绑定的日期：截止日期为季节性锚点（'mid-January'、'mid-March'），新闻写'this season'，不得出现日历日期，不得出现版权年份。
- 表单仅为本地示例：不得提交到任何服务器，不得使用 API，不得使用分析工具。仅持久化到 localStorage，并验证恢复的数据。
- 不得有后端、服务器代码、数据库或认证。通过单一构建命令输出静态文件到 dist/，小于 20 MB，Vite 的 base 设为相对路径。
- 仅通过 Fontsource 包自托管字体；绝不加载 Google Fonts、Adobe Fonts 或任何 CDN 样式表或脚本。
- 生产环境不得有 source map，不得将 src/ 复制到 dist/。
- 不得使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务或热链接文件；仅使用六张生成的图片和代码绘制的 SVG 图形。
- 不做 SEO 工作：不得有 meta 描述、Open Graph 标签、JSON-LD、站点地图或关键词堆砌的标题。一个包含 [BRAND] 的普通标题和一个 favicon 就足够了。
- 数学数据单一来源：估算器、分部卡片和文案均派生自 content.ts 表格；绝不在别处硬编码第二份数字。
- 不得有滚动劫持、页面视差、自定义光标或自动播放媒体；动效仅限于指定的显现、交叉淡入、时间线绘制和弹出效果，且均遵循 prefers-reduced-motion。
- 移动端页头在 390px 下保持单行，且绝不能让粘性底栏遮挡参观表单的提交按钮。
- 从 [BRAND] 和 [PHONE] 构建品牌派生字符串（存储键、tel: 链接），以便替换变量值后不会残留默认品牌痕迹。
- 每个内部链接都是文件名或页内锚点，绝不是裸目录；网站保持为单个 index.html。

---
— Prompt by VibeFather · https://vibefather.ai/t/private-k-12-school-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
