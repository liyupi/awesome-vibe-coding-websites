> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 大学招生网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为位于 [LOCATION] 的虚构 [BRAND] 打造一个自信的单页招生网站，目标受众为 [AUDIENCE]。该大学的身份标识是一个强有力的无徽章字标，采用编辑风格的衬线字体——任何地方都不出现印章、徽章、盾牌、吉祥物或类似标志的图案。页面以一张黄金时刻的校园方庭照片为锚点，随后呈现一个项目查找器，支持按层次、领域和形式筛选十一个虚构项目；一条校园生活照片带；一条带有轮次截止日期标签的申请-审核-决定时间线；一个双滑块费用与资助估算器，配有明确标注为虚构的示例数字；以及一个在本地保存的参观日报名。

- 受众：[AUDIENCE]——未来的学生以及帮助他们做决定的人——再加上招生和营销团队，他们正在为学院、音乐学院或培训机构调整这一结构。
- 目标：带领访客从方庭照片走向入围项目清单和已保留的参观日名额：通过一次交互将项目筛选至他们的兴趣范围，用透明的示例估算器让费用清晰可读，并在浏览器中保存一份参观请求，不留任何死胡同。
- 基调：温暖、笃定且具体——这是一个深知自身价值却无需自夸的地方的声音。编辑风格的标题，平实的辅助句子，可信的虚构数字。绝不浮夸，绝不推销，绝不是真实机构。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、vite（MIT）、typescript（Apache-2.0）、tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/fraunces（OFL-1.1）、@fontsource/source-sans-3（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 创建一个 Vite 6 + React 18 + TypeScript 项目，base 设为 './'，build.outDir 设为 'dist'，build.sourcemap 设为 false。不使用路由、无后端、无服务端代码。
  - 安装 Tailwind CSS 3.4 及 PostCSS 和 Autrefixer。用下方精确的调色板扩展主题，并设置 fontFamily.display 为 'Fraunces'、fontFamily.body 为 'Source Sans 3'。
  - 通过 @fontsource/fraunces 和 @fontsource/source-sans-3 自托管 Fraunces 字重 600 和 700，以及 Source Sans 3 字重 400、600 和 700，在 src/main.tsx 中导入。绝不从 CDN 加载字体。
  - 使用来自 'motion/react' 的 Motion（motion、AnimatePresence、useReducedMotion）实现筛选过渡、显现和估算器补间动画；每个动画都要以 useReducedMotion() 为条件。
  - 将所有文案和数据放在 src/content.ts 中：品牌字符串、字标拆分、主视觉文案、十一条项目记录（level、area、format、one-liner）、筛选词汇表、时间线文案、估算器常量与公式、参观日标签、地址和页脚注释。当变量值变化时，在该文件中重写依赖的文案，并从 [BRAND] 派生字标、存储键和 slug，确保不残留默认品牌的痕迹。
  - 在代码中构建无徽章字标：将 [BRAND] 拆分，使最后一个词位于第二行，使用加字距的大写字母（默认：'STONEWATER' 大字在上方，'UNIVERSITY' 在下方，字距 0.35em，黄铜色）；绝不添加徽章、印章、盾牌或纹章。
  - 将候选清单和参观日请求持久化到 localStorage，键名分别为 [BRAND_SLUG] + '-shortlist' 和 [BRAND_SLUG] + '-visit-request'；验证恢复的 JSON，并从格式错误的数据中静默恢复。
  - 仅使用以下 lucide-react 图标：GraduationCap、Bookmark、RotateCcw、MapPin、ArrowRight、ChevronDown、Users、Clock、CalendarCheck、Check。
  - 在构建前将六张生成的图片下载到 Assets 中列出的确切公共路径。在项目根目录创建 ASSETS.md，列出每个文件的路径、来源 URL、作者或生成器以及许可证。
  - 一个纯 <title> 为 [BRAND] 以及一个 favicon（一个海军蓝方块，内含 [BRAND] 的首字母，使用 Fraunces 字体）就足够了；不需要 meta 描述、Open Graph 标签、JSON-LD 或站点地图。

## 变量
- [BRAND] — 大学名称（默认：“Stonewater University”）。虚构的机构名称；无徽章的文字标识和存储键均由此派生。
- [LOCATION] — 位置（默认：“Millhaven, Vermont”）。校区所在的城镇和州；用于文案、地址和替代文本。
- [AUDIENCE] — 受众（默认：“first-year, transfer, and graduate applicants”）。招生页面面向的对象。
- [SIGNATURE_STRENGTH] — 标志性优势（默认：“freshwater science and sustainability studies”）。该校的知名领域；影响主视觉文案、专业方向和校园图片说明。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/university-admissions-website（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值撰写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 学院蓝（Collegiate blue）`#1E3A5C` — 主色：按钮、首屏遮罩、页脚色带
- 墨海军蓝（Ink navy）`#14273E` — 标题与正文文字
- 暖石色（Warm stone）`#F5F0E5` — 页面底色与区块色带
- 深石色（Deep stone）`#E7DECC` — 栏轨、标签片与细线边框
- 羊皮纸色（Parchment）`#FDFBF5` — 石色底上的卡片与面板
- 黄铜色（Brass）`#B08A4F` — 强调色：分隔线、激活的筛选器、时间线节点、滑块拇指
- 石板蓝（Slate blue）`#4A5871` — 次要文字与元信息行

### 字体排印
- 展示字体：大标题、字标、项目名称、净成本数字：Fraunces（OFL），字重 600/700
- 正文字体：段落、筛选器、元信息、表单：Source Sans 3（OFL），字重 400/600/700

### 布局与动效
- 间距：8px 基础网格。内容外壳最大宽度 1200px，桌面端侧内边距 32px，移动端 20px。页头 84px。桌面端区块垂直内边距 104px，移动端 64px。项目网格间距 20px。正文每行最多 64 个字符。
- 圆角：编辑风格、近乎直角：卡片、输入框和照片为 2px；仅筛选标签片和等级标签使用 999px 全圆角胶囊。照片置于 1px 深石色边框上，悬停或精选卡片带 8px 黄铜色顶部线条。
- 动效：首屏：四联照片在 900ms 内从 scale 1.06 稳定到 1，其上覆有海军蓝遮罩，遮罩从 55% 淡入至其静止渐变；标题行上升 18px，错峰 90ms。
- 动效：项目查找器：筛选后的卡片通过 AnimatePresence 以 200ms 淡入滑动退出和进入；结果计数交叉淡变 160ms；书签切换在 180ms 内弹至 1.12 并填充黄铜色。
- 动效：估算器：净成本数字在 320ms 内补间变化，同时堆叠成本条以 320ms 宽度过渡重新分配；滑块拇指带有 2px 黄铜色聚焦环。
- 动效：区块在滚动时显现一次：上升 16px，伴随 480ms ease-out 淡入，同级卡片错峰 60ms。
- 动效：在 prefers-reduced-motion: reduce 下，上述所有过渡变为 100ms 不透明度变化。无视差、无滚动劫持、无自定义光标、无自动播放媒体。
- 图像：一组摄影作品，一次黄金时刻拍摄：校园石材建筑、河滨步道、工作室和绿色方庭，统一暖色调——蜜色高光、长阴影、柔和薄雾、深蓝阴影，35mm 镜头。学生仅以远景和背影出现；无可辨认的面孔、无可读的标牌、无真实地标。字标、筛选器 UI、时间线和估算器均为代码绘制；绝不绘制任何纹章、印章或徽记。

## 页面与区块
### [BRAND] — 招生（`index.html`）
1. **页眉与首屏** — 页眉（84px，羊皮纸色 92% 不透明度并带背景模糊，1px 深石色底边线）：无徽章字标——[BRAND] 使用 Fraunces 700 大写字母，最后一个词另起一行，字距为 0.35em 的黄铜色（默认 'STONEWATER' 在上、'UNIVERSITY' 在下）；导航锚点：Programs、Campus life、Admissions、Cost & aid；右对齐的学院蓝胶囊按钮 'Sign up for a visit'。首屏：全出血 16:9 黄金时刻四方院照片，覆盖海军蓝遮罩，左侧加深至 65%；眉题 'ADMISSIONS · [LOCATION]'；H1 'Study where the river bends.'；段落 '[BRAND] is a university of 11,400 students built on small seminars, [SIGNATURE_STRENGTH], and quads that actually get used. Filter our programs, sketch a sample net cost, and come walk the riverwalk yourself.'；按钮 'Explore programs'（黄铜填充、墨海军蓝文字）和 'Sign up for a visit day'（白色描边、白色文字）。按钮下方的数据条：'11,400 students · 140+ programs · 15 : 1 student–faculty ratio · 86% receive aid'。
   布局：全高首屏（最小 640px）：照片绝对定位并使用 object-cover；内容位于外壳内，左下对齐，最大宽度 640px。H1 使用 Fraunces，字号 clamp(44px, 5.2vw, 72px)，行高 1.04，白色。数据条为玻璃带（白色 12%），四个数据之间用黄铜色细线分隔。移动端：照片变为固定的 16:9 区块，遮罩更重，H1 降至 clamp(34px, 9vw, 44px)，数据换行为 2×2 网格；所有点击目标至少 44px。
   动效：照片从 1.06 在 900ms 内稳定；眉题、H1、段落、按钮和数据条上升 18px，间隔 90ms 错开；遮罩先淡入，持续 400ms。
2. **项目查找器** — 暖石色区块。眉题 'FIND YOUR FIT'；标题 'Programs, filtered your way.'；引导语 'Eleven of our most-asked-about programs below — the full catalog lists 140+. Shortlist the ones you like.' 筛选器，均为单选：Level [All, Undergraduate, Graduate]；Area [All, Arts & Humanities, Business, Computing, Science & Engineering, Health & Education]；Format [All, On campus, Hybrid, Online]。当任一筛选器激活时，显示带 RotateCcw 图标的 'Reset filters' 文字按钮。结果标题 'Showing 11 of 11 programs' 实时更新。十一条项目记录（level · area · format · 一句话简介）：'B.A. Environmental Humanities'（Undergraduate · Arts & Humanities · On campus）'Literature, ethics, and the living world, taught beside the river.'；'B.S. Computer Science'（Undergraduate · Computing · On campus）'Systems and software craft, capped by a build for a regional partner.'；'B.B.A. Sustainable Business'（Undergraduate · Business · Hybrid）'Markets and supply chains with the long view built in.'；'B.S. Freshwater Science'（Undergraduate · Science & Engineering · On campus）'Rivers, lakes, and fieldwork from week one — our signature program.'；'B.S. Nursing'（Undergraduate · Health & Education · On campus）'Simulation labs first, community clinics from the start.'；'B.A. Digital Media Design'（Undergraduate · Arts & Humanities · Hybrid）'Interfaces, motion, and storytelling in studio cohorts.'；'M.S. Data Engineering'（Graduate · Computing · Online）'Pipelines and platforms on a part-time calendar.'；'M.F.A. Creative Writing'（Graduate · Arts & Humanities · Hybrid）'Short campus residencies between online workshop terms.'；'M.B.A. for Working Professionals'（Graduate · Business · Hybrid）'Evening seminars that respect your day job.'；'M.S. Environmental Policy'（Graduate · Science & Engineering · Online）'Policy craft for water, land, and climate work.'；'M.Ed. Learning Design'（Graduate · Health & Education · Online）'Curriculum and technology for working educators.' 每张卡片：level 胶囊标签、项目名称、一句话简介、元信息行 'area · format'，以及 Bookmark 切换按钮 'Shortlist'。空状态：'No programs match those filters — try clearing one.' 并带 Reset 按钮。候选清单持久化在 localStorage 中。
   布局：桌面端：左侧 280px 粘性筛选栏，包含三组带标签的胶囊按钮组；右侧结果为两列羊皮纸卡片网格（2px 圆角，1px 深石色边框），高度统一；计数行位于网格上方，石板蓝色，旁边有实时的 'Shortlist (N)' 书签计数。移动端：筛选栏变为网格上方三行可水平滚动的芯片行。卡片悬停时顶部出现 8px 黄铜色线条；Bookmark 图标激活时填充黄铜色，并带 aria-pressed。空状态完全替换网格，且不会让用户陷入死胡同。
   动效：筛选变化时，卡片通过 AnimatePresence 以 200ms 淡入滑动动画过渡；计数交叉淡入淡出 160ms；书签弹出 180ms；整个网格在滚动时一次性显现，间隔 60ms 错开。
3. **校园生活条带** — 羊皮纸区块。眉题 'CAMPUS LIFE'；标题 'Stone halls, green quads, a working river.' 四张照片配说明卡片：'The main quad at golden hour — where seminars spill outside.'；'The riverwalk between the library and the boathouse.'；'Fabrication studios, open late for cohort projects.'；'Pick-up games on the lower green, most Thursdays.' 条带下方的辅助文字：'Eleven hundred acres of it, ten minutes from downtown [LOCATION] by the foot ferry.'
   布局：四列 4:3 照片，直角，1px 深石色边框；每张说明位于小羊皮纸卡片中，与照片底边重叠 12px（translateY）。平板端 2×2；移动端单列，说明仍然重叠。桌面端照片使用 object-cover，统一高度 280px。
   动效：一次性显现：四个画框上升 16px，间隔 70ms 错开；此条带无悬停缩放。
4. **招生时间线** — 暖石色带。眉题 'HOW TO APPLY'；标题 'Three steps, two rounds, zero application-fee games.' 垂直时间线：'01 Apply — One essay, one recommendation, your transcripts. Choose the Early round (decisions sooner, no binding promise) or the Regular round.'；'02 Review — Admissions readers reply in four to six weeks. Every application is read twice, by humans.'；'03 Decide — Celebrate, compare, and claim your spot by the national reply window in spring.' 侧栏：讲座厅照片（4:3）上方是 'Which round fits you?' 卡片：'Early — decisions arrive first, typically within four weeks. Best when [BRAND] is your clear first choice.' 和 'Regular — one cycle, six weeks at most. Best when you want to compare offers.' 仅轮次标签；任何地方都不出现日历日期。
   布局：两列：时间线占 60%，在 2px 深石色垂直线上有三个黄铜色节点，每步为 Fraunces 64px 数字、标题和两行文案；右侧 40% 放置照片和轮次对比卡片（羊皮纸色，2px 圆角）。移动端：时间线堆叠，线条沿左边缘，然后是照片，最后是对比卡片。
   动效：区块显现时，节点以 300ms 黄铜色填充绘制，间隔 120ms 错开；其余为一次性 16px 上升。
5. **费用与助学金估算器** — 深石色带。眉题 'COST & AID'；标题 'A sample net price, in two sliders.' 滑块 1 'Family contribution per year'：$0–$60,000，步长 $2,500，默认 $15,000。滑块 2 'Living arrangement'，三个停靠点：'On campus'、'Off campus in [LOCATION]'、'With family'。计算固定为样本本科年度：学杂费 $34,800；食宿——校内 $12,400，校外 $10,900，与家人同住 $4,200；书籍与用品 $1,100；[BRAND] Grant = max(0, min(28000, round((50000 − contribution) × 0.6 / 100) × 100))。输出卡片：学费、食宿和书籍的分项；堆叠水平条（学院蓝学费、石板蓝食宿、黄铜色书籍），助学金以斜线覆盖层显示，跨越其在总额中的份额；大数字 'Sample net cost: $27,300 / year'（默认值）；以及注释 'Invented sample figures for this demo — not a financial aid offer or a promise of aid.' 幽灵按钮 'Ask about aid on a visit' 锚定到访问区块。
   布局：两列：滑块在左（每个带标签、Fraunces 600 实时值、44px 轨道和黄铜色滑块），输出在右为羊皮纸卡片，包含分项、全卡片宽度的 18px 堆叠条，以及墨海军蓝 Fraunces 600 40px 的净费用数字。两个控件均为原生 range 输入重新样式化，完全支持键盘操作，aria-valuetext 如 '$15,000 per year' 和 'Living on campus'。所有货币使用千位分隔符格式化。移动端：滑块堆叠在输出卡片上方。
   动效：净费用数字在数值间补间 320ms；堆叠条各段宽度过渡 320ms；斜线助学金覆盖层在条形稳定后 200ms 淡入。
6. **访问日报名** — 学院蓝（Collegiate-blue）色带配羊皮纸色文字。眉题 'VISIT'；标题 'Come see the golden hour yourself.'；文案 'Pick a weekday and a morning or afternoon slot. Tours leave from Founders Gate, deep-dives start in the program halls, and aid walkthroughs happen in the welcome center — every visit ends on the quad.' 日期选项为周一至周六；时段选项为 9:30、11:00、14:00；一个三选项分段控件用于选择访问类型：'Campus tour'、'Program deep-dive'、'Aid & cost walkthrough'；姓名和邮箱输入框（仅本地）；提交胶囊按钮 'Save my visit-day request'。确认面板：'Request saved — {day} at {time} · {type}. This demo stores your request in this browser; a live site would send it to the visit office.'，并带一个 'Change my request' 链接，点击后恢复已填写的表单。表单下方：'Prefer a virtual session? Choose any weekday slot and say so in the confirmation step.'
   布局：一张 760px 宽（2px 圆角）的羊皮纸色卡片居中于蓝色色带上。选项为 44px 胶囊；选中的日期选项填充学院蓝配羊皮纸色文字，选中的时段选项填充黄铜色（brass）配墨蓝（ink-navy）文字；分段控件滑动一个黄铜色滑块。本地校验：姓名必填，邮箱须匹配简单模式；错误以内联红色文字显示。将请求持久化到以 [BRAND_SLUG] 为键的 localStorage，并在重新加载时恢复。确认面板为 aria-live='polite'。移动端：卡片保持 20px 内边距，选项换行。
   动效：选项选中时弹至 1.06（180ms）；分段滑块滑动 200ms；确认面板交叉淡入 240ms。减少动效时每项变化即时生效。
7. **页脚** — 墨蓝色页脚。左侧：小号重复的字标；地址行 '12 Riverwalk Terrace, [LOCATION]'。中间：锚点导航 Programs、Campus life、Admissions、Cost & aid、Sign up for a visit。右侧：注释 'This is a fictional university created for a website template — programs, rates, and figures are invented samples.' 以及可选的 [CREDIT] 链接。页脚内容上方有一条 2px 黄铜色分隔线。
   布局：桌面端为三段式 flex 行（字标块、导航、注释），移动端堆叠，间距 24px。墨蓝底色配羊皮纸色文字；注释为石板蓝（slate blue）13px。无社交图标、无订阅表单、无社会证明数字。
   动效：静态；无页脚动画。

## 资源
- 图片：Hero 四方院照片。将 https://media.vibefather.ai/assets/73548a67-9db2-4f00-b518-6ccf6caddb7e/quad-golden-hour.webp 下载到 public/images/quad-golden-hour.webp。替代文本：'A campus quad with stone halls in golden-hour light.' 用作深蓝色遮罩层下方的全出血 Hero 锚点图。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：图书馆拱廊。将 https://media.vibefather.ai/assets/73548a67-9db2-4f00-b518-6ccf6caddb7e/library-arches.webp 下载到 public/images/library-arches.webp。替代文本：'A stone library arcade in warm evening light.' 用于校园生活横条。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：河畔步道。将 https://media.vibefather.ai/assets/73548a67-9db2-4f00-b518-6ccf6caddb7e/riverwalk.webp 下载到 public/images/riverwalk.webp。替代文本：'A riverside path on campus with low sun on the water.' 用于校园生活横条。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：制造工作室。将 https://media.vibefather.ai/assets/73548a67-9db2-4f00-b518-6ccf6caddb7e/studio-lab.webp 下载到 public/images/studio-lab.webp。替代文本：'A bright fabrication studio with workbenches in late-afternoon light.' 用于校园生活横条。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：阶梯教室。将 https://media.vibefather.ai/assets/73548a67-9db2-4f00-b518-6ccf6caddb7e/lecture-hall.webp 下载到 public/images/lecture-hall.webp。替代文本：'A warm wooden lecture hall with tall windows and empty seats.' 用于招生时间线旁边。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图片：下草坪。将 https://media.vibefather.ai/assets/73548a67-9db2-4f00-b518-6ccf6caddb7e/lower-green.webp 下载到 public/images/lower-green.webp。替代文本：'Distant students playing on a green lawn at golden hour, seen from behind.' 用于校园生活横条。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请在 ASSETS.md 中记录该确切署名。
- 图标：安装 lucide-react，并且只使用 GraduationCap、Bookmark、RotateCcw、MapPin、ArrowRight、ChevronDown、Users、Clock、CalendarCheck 和 Check。ISC 许可证。不要绘制任何校徽、印章、吉祥物或品牌标志；身份识别仅依靠字体字标本身。请在 ASSETS.md 中记录该包和许可证。
- 字体：通过 @fontsource/fraunces 自托管 Fraunces 字重 600 和 700（OFL-1.1）。请在 ASSETS.md 中记录该包和许可证；不要使用字体 CDN。
- 字体：通过 @fontsource/source-sans-3 自托管 Source Sans 3 字重 400、600 和 700（OFL-1.1）。请在 ASSETS.md 中记录该包和许可证；不要使用字体 CDN。

## 不要做
- 任何地方都不得出现真实的大学、学院、吉祥物、印章、徽章、纹章、盾徽、字母组合图案或类似标志的图形。身份标识仅限由 [BRAND] 衍生的字体字标。
- 照片必须展示建筑、景观和从背后或远处拍摄的学生生活——不得出现可辨认的面孔、可读的标牌，也不得将真实校园或地标呈现为这所大学。
- 费用数字是虚构的样本：严格按照规定实现估算器数学逻辑，每个输出都标注为 'sample'，并在净额数字旁保持 'not a financial aid offer' 提示可见。
- 截止日期仅使用笼统标签（Early / Regular）和相对表述——绝不使用真实日历日期、倒计时或任何基于访客时钟计算的内容。
- 所有项目、统计数据、建筑、教职人员和资助数字均为虚构；绝不引用认证机构、排名、体育联盟或真实机构。
- 表单仅限本地：任何地方都不得有提交、API、电子邮件或日历服务；仅将候选清单和参观请求持久化到 localStorage，并验证恢复的数据。
- 无后端、服务器代码、数据库、认证或分析。通过单一构建命令在 dist/ 中生成静态输出。
- 仅通过列出的 Fontsource 包自托管字体；绝不加载 Google Fonts、Adobe Fonts 或任何 CDN 样式表或脚本。
- 生产环境无 source map，不将 src/ 复制到 dist/，保持 dist/ 在 20 MB 以下，并保持 Vite 的 base 为相对路径。
- 不使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务或热链接文件；仅使用六张生成的图片和原创代码绘制的 UI。
- 不做 SEO 工作：无 meta 描述、Open Graph 标签、JSON-LD、站点地图或关键词堆砌的标题。一个包含 [BRAND] 的普通标题和一个 favicon 就足够了。
- 筛选后的项目视图绝不能走入死胡同：始终显示带有可用 Reset 的空状态，且每个内部链接都是文件名或页内锚点，绝不是裸目录。
- 在所有地方尊重 prefers-reduced-motion；无滚动劫持、视差、自定义光标或自动播放媒体。
- 所有文案保持美式英语，并从 [BRAND] 和 [BRAND_SLUG] 构建品牌派生字符串（字标、存储键、slug、alt 文本），以便替代变量值永远不会留下默认品牌残留。
- 网站必须在 1440×900 和 390×844 下渲染，且控制台零错误。

---
— Prompt by VibeFather · https://vibefather.ai/t/university-admissions-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
