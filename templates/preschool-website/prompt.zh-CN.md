> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 幼儿园网站

完全按照下面的描述构建这个网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [SCHOOL] 打造的单页网站，[SCHOOL] 是位于 [CITY] 的一家幼儿园，提供 [FOCUS]、[RATIO_NOTE]。网站必须让家长安心：按年龄划分的课程、一日生活时间线、三位教师肖像（AI 生成的虚构人物）、一份简明直白的学费表、一份坦诚的家长常见问题解答，以及一个在客户端确认的参观预约表单。单页：index.html，包含多个区块（#programs、#day、#teachers、#tuition、#tour）。一切都在浏览器中运行；不会提交到任何地方。

- 受众：2–5 岁孩子的家长，一周内要参观三所学校，晚上 10 点在手机上阅读。他们关心师生比、作息节奏、学费的透明度，以及那些看起来会蹲下来和孩子说话的老师。
- 目标：预约参观。十秒内，家长能看到承诺、一位老师的脸和参观 CTA；两分钟内，他们已经读完一日时间线和学费。
- 语气：温暖的教师口吻：短句、具体细节、对幼儿逻辑的温和幽默。没有教育术语，除非配有通俗解释。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（MIT）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/baloo-2（OFL-1.1）、@fontsource-variable/nunito-sans（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 使用 react-ts 模板通过 npm create vite@latest 搭建脚手架。项目根目录下有一个 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将 Design 下的每种颜色以 kebab-case 键添加到 theme.extend.colors 中（warmwhite、milkyway、card、skydeep、skymist、ink、slate、crayon、crayon-deep、rule、good），并设置 fontFamily display ['Baloo 2', 'system-ui', 'sans-serif']、sans ['Nunito Sans Variable', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 16px，并添加 maxWidth { container: '1120px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/baloo-2/600.css'、'@fontsource/baloo-2/700.css' 和 '@fontsource-variable/nunito-sans'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（每个字符串、费率、时间、课程、时间线站点、FAQ 答案和图片路径，均带类型），src/lib/brand.ts（schoolSlug = [SCHOOL] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 schoolSlug + '.com'），src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键前缀为 schoolSlug + ':'）。
  - 状态：src/store/tour.ts 是一个小型外部存储（useSyncExternalStore），持有 { day, age, name, phone, sent }，持久化到 localStorage 键 schoolSlug + ':tour'。
  - src/components/ 中的组件：Header.tsx、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、Footer.tsx；Hero.tsx、Programs.tsx（ProgramCard.tsx）、DayTimeline.tsx（StopCard.tsx）、Teachers.tsx（TeacherCard.tsx）、Tuition.tsx（RateRow.tsx）、Faq.tsx、TourForm.tsx（DayChips.tsx、AgeSelect.tsx、Booked.tsx）。src/pages/Home.tsx 组合它们。
  - 在首次构建之前，使用 curl -L -o 将 Assets 下列出的每张图片下载到 public/images/ 中，并使用给定的确切文件名。构建本身从不获取任何内容。
  - public/favicon.svg 如 Assets 下所述。index.html：lang en，<meta name='theme-color' content='#FBF8F2'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[SCHOOL] — A preschool in [CITY]</title>。
  - 在项目根目录下按 Assets 下所述编写 ASSETS.md。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张图片。保持在 10 MB 以下。

## 变量
- [SCHOOL] — 学校名称（默认："Bluebird Garden Preschool"）。虚构的学校名称。用于字标、标题、页脚、电子邮件（hello@ + 不含连字符的 schoolSlug + '.com'）以及 localStorage 键。绝不使用真实学校。
- [CITY] — 城市（默认："Boulder, Colorado"）。学校所在地。用于标题、首屏、营业时间和页脚。可以使用真实城市；街道为虚构。
- [FOCUS] — 教学重点（默认："play-based learning with real mud"）。一个描述教学法的小写短语。驱动首屏文案、课程文案和一个 FAQ。保持温暖且具体。
- [RATIO_NOTE] — 配比说明（默认："1:8 in every room, 1:6 for toddlers"）。师生配比说明，用于信任条和课程卡片。保持简短平实。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接指向 https://vibefather.ai/t/preschool-website（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 暖白（Warm White）`#FBF8F2` — 全站页面背景。
- 银河白（Milkyway）`#F1EDE3` — 交替区块背景（课程、学费）、标签、悬停填充。
- 卡片白（Card）`#FFFFFF` — 课程卡片、教师卡片、参观面板、已预约状态。
- 深天蓝（Skydeep）`#3A6EA5` — 主色：标题强调、主按钮、选中标签、时间线圆点、焦点环。
- 雾天蓝（Skymist）`#E3EDF7` — 选中标签填充、图标底槽、时间线基线。
- 墨色（Ink）`#2F3338` — 标题与正文文字、图标颜色。
- 石板灰（Slate）`#66707A` — 次要文字、说明文字、眉题、关闭状态。
- 蜡笔橙（Crayon）`#EE8B4A` — 唯一的暖色强调：参观 CTA、学费数字、时间线高亮圆点、focus-visible 附加项。
- 深蜡笔橙（Crayon Deep）`#D2742F` — CTA 悬停与按下。
- 分隔线（Rule）`#E2DCCE` — 1px 细线、卡片边框、输入框边框。
- 良好绿（Good）`#3E8E6D` — 开放圆点、已预约勾选、许可证对勾。

### 字体排印
- 展示字体：H1、H2、H3、课程名称、教师姓名、字标 — Baloo 2，圆润且具绘本感：Baloo 2 (OFL)，字重 600/700
- 文本与 UI：正文、眉题、按钮、表单、说明文字；学费与课时使用等宽数字：Nunito Sans (OFL)，字重 400/600/700

### 布局与动效
- 间距：8px 基准单位。容器最大宽度 1120px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面端 96px、1024px 以下 72px、640px 以下 56px。字号阶梯：H1 clamp(40px, 6vw, 72px) Baloo 2 700，行高 1.08；H2 clamp(28px, 3.8vw, 44px) Baloo 700；H3 21px Baloo 700；学费数字 Baloo 700 32px Crayon 等宽；导语 Nunito 400 17.5px / 1.65 Ink 90%；正文 15.5px / 1.7（最大宽度 62ch）；眉题 Nunito 700 12px 大写 字距 0.15em Slate；说明文字 13px Slate。按钮：高度 50px，Nunito 700 14px。主按钮：Skydeep 填充，Card 文字。参观 CTA：Crayon 填充，Card 文字。次要按钮：1px Skydeep 边框。输入框：高度 50px，1px Rule 边框，Card 填充，聚焦时 Skydeep 边框。全局焦点环：2px Skydeep 轮廓，偏移 3px。
- 圆角：卡片、按钮、输入框、标签和照片均为 16px。仅胶囊、时间线圆点和开放圆点使用 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现和时间线绘制；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于表单切换。轻柔而平稳——幼儿园的节奏。
- 动效：显现：包裹在 <Reveal> 中的区块初始为 opacity 0、translateY(12px)，当 15% 可见时（Motion whileInView，viewport once）以 750ms --ease-out 落定。同级元素错开 75ms。
- 动效：首屏：教室照片从 1.04→1.0 缩放，历时 2200ms；H1 上升；眉题旁一个手绘小太阳弹跳一次（减少动效下关闭）。
- 动效：一日时间线：水平基线随区块滚动从左到右绘制；每个站点的圆点依次弹出，错开 120ms；当前站点高亮（午餐）填充 Crayon。
- 动效：课程卡片：悬停上浮 3px，图标底槽填充 Skymist；年龄徽章跳动一次。
- 动效：教师卡片：悬停时肖像缩放 1.03，一句话简介交叉淡入。
- 动效：学费行：悬停时滑入 2px Skydeep 线条；数字永不动画。
- 动效：参观表单：日期标签选中时填充 Skydeep（150ms）；无效提交抖动 4px 并显示温和的行内标签；发送时切换为已预约（300ms --ease-io）——一个手绘 Crayon 'SEE YOU SOON' 贴纸缩放进入，'We can''t wait to meet [NAME] (and their grown-up).' 日期/年龄回显，'Change my tour' 预填。持久化于 localStorage。
- 动效：链接：.link-draw 在悬停和 focus-visible 时以 280ms 生长 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 无缩放、绘制、弹出或错开；一切静止；颜色/边框悬停保留。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：明亮的真实摄影，全部六张为本模板以统一风格制作：阳光充足的空旷教室和游戏空间——绝不出现儿童的面部或身体；玩具和小椅子来代言。教师肖像是 AI 生成的虚构人物（温暖、蹲跪高度的能量）——占位符，真实学校可替换为自己的员工照片。无可读文字或标牌。每张照片使用 object-fit cover，object-position 见资源部分，16px 圆角，无阴影；暖白背景上的照片加 1px Rule 轮廓。说明文字 Nunito 13px Slate。代码绘制：favicon、太阳字形、时间线圆点、贴纸和标签。图标：仅 lucide-react，描边宽度 1.75。

## 页面与区块
### 学校（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[SCHOOL] = Bluebird Garden Preschool，[CITY] = Boulder, Colorado，[FOCUS] = play-based learning with real mud，[RATIO_NOTE] = 1:8 in every room, 1:6 for toddlers）。将每个字符串和数字放入 src/content.ts 并从中渲染。若任何变量值不同，请重写主视觉、全部三个项目、六个时间线站点、教师文案、学费、FAQ 和参观文案，使其对新学校具体且可信，同时保持相同的结构和数量。所有教师、家庭和数字均为虚构；任何照片中均不出现儿童。事实：地址 '47 Sunflower Lane, [CITY]' 为虚构；电话 (303) 555-0169；营业时间周一至周五 8:00–15:30，参观周二/周四 9:00 或 10:00；年龄 2–5 岁；[RATIO_NOTE]；户外游乐场风雨无阻；包含点心，午餐自带；许可描述为通用表述（'state-licensed, copies at the front desk'）。项目：'Seedlings (age 2)' 'mornings of songs, sensory play and heroic snack efforts' 比例 1:6，周二/周四或周一–周三–周五；'Sprouts (ages 3–4)' 'stories, building, the mud kitchen and its diplomacy' 比例 1:8，三天或五天；'Blossoms (pre-K, ages 4–5)' 'letters via treasure hunts, numbers via markets, kindergarten readiness without the drill' 比例 1:8，五天。日程时间线（站点 · 备注）：'8:00 Arrival & free play' 'the room warms up one backpack at a time'；'9:00 Circle time' 'songs, calendar, one very important weather report'；'9:30 Choice centers' 'art, blocks, drama, and the science table''s current experiment'；'10:30 Outdoor play' 'rain means puddles; we have the boots'；'11:30 Lunch' 'from home, at tiny tables, with astonishing opinions'；'12:30 Story & rest' 'quiet bodies, quiet books, some heroic napping'；'14:30 Pickup' 'one sticker, one story, one muddier child'。教师：'t-marisol.webp' 'Marisol Vega (fictional)' 'lead teacher, Blossoms' 'twelve years; can de-escalate a block dispute at forty paces'；'t-derek.webp' 'Derek Nkemdirim (fictional)' 'lead teacher, Sprouts' 'former park ranger; the mud kitchen is his legacy'；'t-hana.webp' 'Hana Yoon (fictional)' 'lead teacher, Seedlings' 'fluent in toddler, which is harder than it sounds'。学费（每月）：'Two mornings (Seedlings)' '$420'；'Three mornings' '$580'；'Five mornings (any age)' '$860'；'Full days, three per week' '$1,090'；'Full days, five per week' '$1,450'；说明文字 'Sibling discount 10%; scholarships available — ask on the tour, it''s a two-line form.'。FAQ：'Does my child need to be potty-trained?' 'No. Seedlings especially; we keep a very calm changing station and zero embarrassment.'；'What about naps?' 'Rest time after lunch for all rooms; cots, sheets from home, back-rubs for the brave.'；'What food is provided?' 'Morning and afternoon snack; lunch comes from home (nut-free tables, we label everything).'；'My child clings at drop-off.' 'Normal and welcome — we have a goodbye window routine; most days it takes four minutes, some days eleven, both fine.'；'Screens?' 'One shared projector for Friday films, otherwise the screens are windows.'
   布局：不适用
   动效：不适用
2. **页眉** — 左侧：字标 '[SCHOOL]'（Baloo 700 18px）位于 'Ages 2–5 · [CITY]'（10px 大写 Slate）上方，链接至 ./index.html。右侧导航（Nunito 600 14px）：'Programs' → #programs，'A day here' → #day，'Teachers' → #teachers，'Tuition' → #tuition；一个小型 Crayon 色 'Book a tour' → #tour。低于 800px：字标 + 参观按钮。
   布局：顶部吸附，高度 72px，Warm White/95% 模糊，Rule 边框。
3. **主视觉** — 两栏。左侧：眉题 'PLAY-BASED · AGES 2–5 · [CITY]'；H1 'Small people,' / '*big mornings.*' 导语（最大宽度 500px）：'[SCHOOL] is [FOCUS] — three rooms, tiny ratios ([RATIO_NOTE]), and teachers who explain the day in stickers and complete sentences.' 主按钮 'Book a tour' → #tour 和次按钮 'See a day here' → #day；信任行：'[RATIO_NOTE]'；'Outdoor play, rain or shine'；'Tours Tue & Thu mornings'。右侧：room-play.webp（4:3），配说明文字 'The block corner, before the architects arrive'。
   布局：Warm White 背景，顶部垂直内边距 104px；左侧 6 列，右侧 5 列偏移 1。
4. **项目** — 区块 id='programs'。眉题 'THREE ROOMS' 和 H2 'Programs by age, gently ambitious.' 三个 ProgramCards（年龄徽章、名称、三行节奏描述、比例胶囊、天数胶囊）：即名册。说明文字：'All rooms share the playground, the garden and the snack schedule — the mud is communal.'
   布局：Milkyway 背景。三列 24px 间距；卡片位于 Card 上，Rule 边框，年龄徽章在 Skymist 圆圈中。
5. **日程时间线** — 区块 id='day'。眉题 'A DAY HERE' 和 H2 'From backpacks to stickers.' 水平 DayTimeline：七个站点（圆点、时间、名称、备注）配绘图基线；午餐以 Crayon 色高亮。低于 760px 时时间线变为垂直，带左侧轨道。
   布局：Warm White 背景；时间线横跨容器；平板端站点在可滚动行中。
6. **教师** — 区块 id='teachers'。眉题 'THE TEACHERS' 和 H2 'Three people your child will name nightly.' TeacherCards（肖像 4:3 悬停缩放、姓名、角色、一句话简介）：即名册。一则说明：'All leads hold early-childhood credentials and current first-aid (invented details; copies at the front desk).'
   布局：Milkyway 背景。三列 24px 间距；肖像 Rule 描边。
7. **学费与 FAQ** — 区块 id='tuition'。眉题 'TUITION, PLAINLY' 和 H2 'MONTHLY RATES, NO SURPRISES.' 学费行（日程 · 金额）以细线分隔，来自名册并配说明文字。区块（续）FAQ：五个手风琴（问题 Baloo 700 17px，答案 15.5px / 1.7）来自名册。
   布局：Warm White 背景；学费最大宽度 640px；FAQ 最大宽度 720px 位于下方。
8. **参观表单与页脚** — 区块 id='tour'。眉题 'BOOK A TOUR' 和 H2 'Twenty minutes, your child welcome.' TourForm 位于 Card 上：DayChips（周二/周四，9:00 或 10:00 作为两组胶囊）；AgeSelect（2 / 3 / 4 / 5）；姓名 + 电话；主按钮 'Request the tour' 配说明文字 'Saved in this browser — the real page emails the school. Nothing is sent here.' 已预约：Crayon 贴纸，'We can''t wait to meet [NAME] (and their grown-up).' 日期/时间回显，'Change my tour' 预填；持久化于 localStorage。页脚（Skydeep→深色渐变或纯色，bone 文字）：字标，'47 Sunflower Lane, [CITY]'，(303) 555-0169 tel:，hello@ + emailDomain；营业时间；底部行 '© [SCHOOL]. Licensed, loved, occasionally muddy.'
   布局：参观区块为 Milkyway 区块（面板最大宽度 600px）；页脚纯色 Skydeep，三部分行。

## 资源
- 图片：为本设计制作的模板照片（可随模板自由再分发）。用 curl -L -o 将每个文件下载到 public/images/：https://media.vibefather.ai/assets/3c706d5d-2ab2-4098-b3c2-0d76cbe48dc1/room-play.webp → public/images/room-play.webp（Hero；alt 'A bright preschool room with a block corner and art easels'）；https://media.vibefather.ai/assets/3c706d5d-2ab2-4098-b3c2-0d76cbe48dc1/t-marisol.webp → public/images/t-marisol.webp（教师卡片；alt 'Marisol Vega, a fictional preschool teacher'）；https://media.vibefather.ai/assets/3c706d5d-2ab2-4098-b3c2-0d76cbe48dc1/t-derek.webp → public/images/t-derek.webp（教师卡片；alt 'Derek Nkemdirim, a fictional preschool teacher'）；https://media.vibefather.ai/assets/3c706d5d-2ab2-4098-b3c2-0d76cbe48dc1/t-hana.webp → public/images/t-hana.webp（教师卡片；alt 'Hana Yoon, a fictional preschool teacher'）；https://media.vibefather.ai/assets/3c706d5d-2ab2-4098-b3c2-0d76cbe48dc1/room-art.webp → public/images/room-art.webp（课程侧；alt 'An art easel with washable paints at child height'）；https://media.vibefather.ai/assets/3c706d5d-2ab2-4098-b3c2-0d76cbe48dc1/yard-mud.webp → public/images/yard-mud.webp（信任/日常侧；alt 'A playground with a mud kitchen and rain boots'）。共六个文件。
- 图片：在项目根目录写入 ASSETS.md，包含一张表：路径、来源 URL、作者、许可证——每张照片一行（来源 'media.vibefather.ai, made for this template'，作者 'VibeFather'，许可证 'Distributed with the template'），另加 @fontsource/baloo-2 和 @fontsource-variable/nunito-sans（OFL-1.1）以及 lucide-react（ISC）的行。教师肖像为按肖像规则生成的 AI 虚构人物；任何照片中均不出现儿童——教室和庭院保持空无一人。
- 图标：仅使用 lucide-react：Sun、Blocks、Palette、CloudRain、Utensils、BookOpen、Smile、Check、Plus。描边宽度 1.75，16–24px，颜色继承。太阳字形、时间线圆点、SEE YOU SOON 贴纸和 favicon 为绘制的 SVG。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的 rect rx 9 填充 #3A6EA5，一个 Card（#FFFFFF）鸟形字形带一个 Crayon（#EE8B4A）太阳点。无其他标志：学校名称始终以文字排版呈现。
- 字体：安装 @fontsource/baloo-2 和 @fontsource-variable/nunito-sans，并按 Setup 中列出的方式在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包进 dist/。
- 图片：在代码中绘制：太阳字形、时间线圆点和轨道、贴纸、标签以及 favicon。除六张照片外无其他位图；无插图；无地图瓦片。

## 不要做
- 不要后端、不要表单提交、不要向任何 API 发起 fetch 请求：参观预约只保存在浏览器中（localStorage），并且要明确说明这一点；tel: 链接由电话号码数字构建。
- 这个单页上的所有链接都是锚点（./index.html#programs、#day、#teachers、#tuition、#tour）加上页脚的 mailto。
- 任何照片中都不要出现儿童的面部或可识别的儿童——教室和院子保持空无一人；只有三张教师肖像展示人物，且为 AI 生成的虚构成年人。
- 一切自托管：字体通过 Fontsource，图标使用 npm 包或内联 SVG，图片下载到 public/images/。不要 CDN 的 <script> 或 <link> 标签，不要 Google Fonts，不要分析工具。
- 生产构建：压缩，不要 source maps，不要把 src/ 复制到 dist/，单一命令 npm run build，输出在 dist/ 下，小于 10 MB。
- 不要真实学校、认证机构或其标志；认证以通用方式描述；不要真实地址。
- 任何地方都不要出现日期或年份；日期标签以星期命名；网站永远不显示今天的日期。
- 除了可选的页脚署名链接外，网站内绝不提及 VibeFather 或任何其他品牌；所有文案都是虚构的美式英语。
- 尊重 prefers-reduced-motion：不要缩放、绘制、弹出或交错动画；一切处于静止状态；颜色/边框的悬停效果保留。
- 页面必须在 1440x900 桌面和 390x844 移动端正常工作，控制台零错误；标签、选择器和表单仅用键盘即可操作，并有可见的焦点环。
- 保持文案教师般的温暖：不要 lorem，不要学术术语；每个费率、小时和比例都放在 src/content.ts 中。

---
— Prompt by VibeFather · https://vibefather.ai/t/preschool-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
