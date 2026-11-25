> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 学术研究者网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为您自己的值；其余内容保持不变。

## 简介
一个虚构教授及其实验室的主页：个人简介、研究兴趣、带筛选功能的出版物、复制 BibTeX 和 PDF 链接、项目、含课程页面的教学、含幻灯片链接的报告、带打印样式表的 CV 页面、实验室成员、开放职位和新闻。纸张色 #FAFAF7、大学藏青色 #1C2B4A 和酒红色强调色 #8C1C3E；一种学术衬线字体。

- 受众：寻找导师或课程的学生、寻找论文或 BibTeX 条目的研究人员，以及任何查看 CV 的人。
- 目标：让访客在两次点击内找到正确的论文、课程或开放职位，并让他们能够无摩擦地复制引用或打印 CV。
- 语气：克制而精确，像一篇优秀的摘要：对问题、方法和发现的平实陈述，不夸大。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：motion（MIT）、lucide-react（ISC）、@fontsource-variable/newsreader（OFL-1.1）、@fontsource-variable/libre-franklin（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 配置：
  - vite.config.ts：base './'，build.sourcemap false，src/ 中的任何内容都不会被复制到 dist/。
  - tailwind.config.js：扩展颜色 paper #FAFAF7、navy #1C2B4A、navyTint #EEF1F7、burgundy #8C1C3E、ink #1F2430、muted #5C6472、rule #D9D9D2；fontFamily serif 'Newsreader Variable'、sans 'Libre Franklin Variable'、mono 'IBM Plex Mono'。
  - 一个小型 hash 路由器读取 location.hash：#/（首页）、#/publications、#/projects、#/teaching、#/teaching/<slug>、#/talks、#/talks/<slug>、#/people、#/cv；不带 slug 的详情路由显示第一项；路由变化时滚动到顶部。不使用路由器库。
  - src/lib/bibtex.ts 根据出版物的数据构建 BibTeX 条目；src/components/Figure.tsx 根据 content.ts 中的数据以内联 SVG 绘制三个项目图。
  - CV 页面有一个打印样式表（src/print.css），它会隐藏导航和页脚，将文字设为白底黑字并移除边距。
  - 所有文案、出版物、项目、课程、报告、成员、新闻和 CV 条目都以类型化对象的形式存放在 src/content.ts 中；组件从不硬编码文案。

## 变量
- [BRAND] — 教授姓名与头衔（默认：“Dr. Sofia Anastasi”）
- [FIELD] — 领域，小写（默认：“computational ecology”）
- [UNIVERSITY] — 机构（默认：“Halloran University”）
- [LAB_NAME] — 实验室名称（默认：“Anastasi Lab”）
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/academic-researcher-website（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- paper `#FAFAF7` — 页面底色
- navy `#1C2B4A` — 大学海军蓝：标题、链接、侧边栏色带、白字主按钮
- navyTint `#EEF1F7` — 浅蓝色面板和悬停行
- burgundy `#8C1C3E` — 酒红点缀：兴趣标签、激活的筛选器、复制 BibTeX 按钮、图表点缀
- ink `#1F2430` — 文本
- muted `#5C6472` — 次要文本和元信息
- rule `#D9D9D2` — 列表项之间的分隔线

### 字体排印
- 展示与正文 / 标题、出版物标题、散文：Newsreader Variable（OFL），字重 400/600
- UI / 导航、按钮、筛选器：Libre Franklin Variable（OFL），字重 400/500
- 等宽 / 作者、发表 venue、年份、课程代码、BibTeX：IBM Plex Mono（OFL），字重 400/500

### 布局与动效
- 间距：内容 max-w-[1080px] px-6；列表行 py-4，带 1px 分隔线；区块内边距 py-16；8px 节奏。
- 圆角：边角为直角：卡片、照片、按钮和输入框均为 0px。
- 动效：出版物筛选器：离场行淡出 150ms，入场行淡入 200ms；结果计数立即更新。
- 动效：复制 BibTeX 会显示内联的 'Copied' 标签 2 秒；摘要面板下滑 200ms。
- 动效：幻灯片查看器：幻灯片交叉淡入淡出 250ms；ArrowLeft 和 ArrowRight 在幻灯片之间切换。
- 动效：首页滚动显现：区块上移淡入 12px，历时 350ms，仅一次；内容默认可见。
- 动效：prefers-reduced-motion：所有变化即时完成。
- 图像：一张教授的专业肖像、四张实验室成员肖像，以及一张从背后拍摄的实验室工作照片：全部为虚构人物，暖中性背景，柔和窗光。项目图表为内联 SVG，使用海军蓝、酒红和浅蓝色。不使用大学校徽、印章、建筑照片或标志。

## 页面与区块
### 首页（`#/`）
1. **站点页眉** — 左侧：[BRAND]，Newsreader 600 22px 藏青色。中间导航：Publications、Projects、Teaching、Talks、People、CV，Libre Franklin 400 14px 弱化色，悬停时变为藏青色并带 2px 酒红色下划线；当前激活项保留下划线。
   布局：粘性 56px 栏，背景 paper/95，带背景模糊和 1px 底部细线；内部 max-w-[1080px]。移动端：名称和 lucide 菜单按钮在 390px 宽度下同一行；菜单打开全屏 paper 抽屉，链接纵向堆叠。
   动效：抽屉 200ms 淡入。
2. **首屏 — 教授** — 左侧：public/images/portrait-professor.webp（3:4），外框带 6px 藏青色边框，alt 为 'Portrait of the professor in a navy blazer in front of bookshelves'。右侧：眉题 mono 12px 大写酒红色 'ASSOCIATE PROFESSOR OF [FIELD]'；H1 Newsreader 600 clamp(40px, 5vw, 72px) 藏青色：'[BRAND]'；一行 Libre Franklin 16px 弱化色 '[UNIVERSITY] · [LAB_NAME]'；两段 Newsreader 19px 墨色 max-w-[56ch]：'I study how animals move across changing landscapes, and build the statistical and software tools that make those questions answerable at scale.' 'The lab sits between ecology, statistics and computer science. We publish open code, open data and papers that a field biologist can use.' 研究兴趣以酒红色描边标签呈现：Movement ecology、Species distribution models、Bayesian statistics、Citizen-science data、Climate adaptation。按钮：'Publications'（藏青色填充、白色文字 → #/publications）、'Open positions'（酒红色描边 → #/people）和 'Download CV'（带下载图标的文字链接，打开 #/cv 并触发打印）。
   布局：Grid lg:grid-cols-[36%_64%] gap-12 items-center py-16。文字后方以低透明度放置一个代码绘制的 SVG 点阵，使用 navyTint 和酒红色，暗示分布图。移动端：肖像 4:5 max-w-[320px]，然后文字。
   动效：文字 400ms 淡入上移；肖像从 scale 1.02 归位。
3. **新闻** — H2 'News.' 四行，每行带一个 mono 月份和年份以及一句话：'New preprint: wind-aware migration models for soaring birds.'（本月）；'Two open positions: a PhD studentship and a research assistant.'（上个月）；'Keynote at the Conference on Environmental Data.'（三个月前）；'Best paper award for the camera-trap benchmark, with K. Mensah.'（五个月前）。一个链接 'Lab news archive' → #/people。
   布局：行 py-3，带 1px 分隔线，桌面端月份位于 120px 列中。
   动效：无。
4. **精选出版物** — H2 'Selected publications.' 五行，格式与出版物页面一致（标题、mono 作者、 venue、年份），带复制 BibTeX 和 PDF 按钮；一个链接 'All publications' → #/publications。
   布局：行 py-4，带 1px 分隔线。
   动效：行以 60ms 错峰淡入上移。
5. **项目** — H2 'Projects.' 三张卡片，顶部为代码绘制的图形：'BirdFlow' — 图形：点阵地图，酒红色箭头向北弧形延伸 — 'Continent-scale models of bird migration built from weather radar and citizen-science data.'；'Microclimate loggers' — 图形：藏青色线条绘制的小电路板和传感器示意图 — 'A $12 open-hardware logger for temperature and humidity in the field.'；'Occupancy toolkit' — 图形：带误差线的柱状图 — 'Fast, documented Bayesian occupancy models for camera-trap and survey data.' 每张卡片链接到 #/projects。
   布局：Grid md:grid-cols-3 gap-6；图形 16:10，背景 navyTint。
   动效：图形 350ms 淡入。

### 出版物（`#/publications`）
1. **筛选与列表** — H1 'Publications.' 筛选以胶囊按钮呈现：Topic（All、Movement、Distribution、Methods、Climate）、Type（All、Journal、Conference、Preprint）、Year（All、2025、2024、2023、2022 及更早）；一个 mono 计数 '12 publications'。每行：标题 Newsreader 600 20px 藏青色；作者 mono 13px 墨色，教授本人姓名用酒红色；venue 和年份 mono 13px 弱化色；两个小按钮，'BibTeX'（复制条目）和 'PDF'（在该行下方打开摘要面板，包含摘要、一行 'This paper is a sample; no PDF file exists.' 和一个 'Copy BibTeX' 链接）。十二篇出版物：'Wind-aware migration models for soaring birds' — Anastasi, Kaur, Okafor — Annals of Spatial Ecology, 2025, journal, Movement；'Scaling species distribution models to 10-m resolution' — Anastasi, Chen — Journal of Wildlife Informatics, 2024, journal, Distribution；'A benchmark for camera-trap occupancy estimators' — Mensah, Anastasi — Ecological Computing Review, 2024, journal, Methods；'Learning phenology from street-level imagery' — Anastasi, Reyes, Chen — Proceedings of the Conference on Environmental Data, 2023, conference, Climate；'Cheap sensors, strong inference: logging microclimate at scale' — Kaur, Anastasi — Annals of Spatial Ecology, 2023, journal, Methods；'Route optimisation for volunteer survey networks' — Okafor, Anastasi — Journal of Wildlife Informatics, 2022, journal, Methods；'Uncertainty maps for habitat suitability under climate scenarios' — Anastasi — Ecological Computing Review, 2022, journal, Climate；'Do movement models transfer across continents? A test with storks' — Chen, Anastasi, Mensah — Annals of Spatial Ecology, 2021, journal, Movement；'Open tools for cleaning citizen-science observations' — Anastasi, Reyes — Preprint, 2021, preprint, Methods；'Heterogeneous satellites, homogeneous features' — Anastasi, Chen, Kaur — Proceedings of the Conference on Environmental Data, 2020, conference, Distribution；'Microrefugia in agricultural landscapes' — Mensah, Anastasi — Journal of Wildlife Informatics, 2019, journal, Climate；'A field guide to Bayesian occupancy models' — Anastasi — Ecological Computing Review, 2018, journal, Methods。每篇在 content.ts 中有一段两句话的摘要。
   布局：筛选在列表上方换行；行 py-4，带 1px 分隔线；摘要面板横跨行宽。
   动效：筛选和复制反馈如动效部分所述。

### 项目（`#/projects`）
1. **项目** — H1 'Projects.' 每个项目作为一个区块，图形位于两段文字旁：'BirdFlow' — 'Every spring, billions of birds move north. BirdFlow combines weather radar, light-level geolocators and citizen-science records to model those movements night by night.' 'The models are used by two conservation networks to time wind-farm shutdowns.'；'Microclimate loggers' — 'Off-the-shelf loggers cost more than the fieldwork they support. We designed a $12 logger with open hardware and a phone app for read-out.' 'Four hundred units are in the field across three continents.'；'Occupancy toolkit' — 'Camera traps produce more images than anyone can check. The toolkit fits Bayesian occupancy models in seconds and writes its own methods section.' 每个项目列出三个人，以及一个 'Code and data' 链接，点击显示 'Available on request (sample)'。
   布局：区块带 1px 分隔线；桌面端图形 40%、文字 60%，移动端堆叠。
   动效：图形 350ms 淡入。

### 教学（`#/teaching`）
1. **课程** — H1 'Teaching.' 三门课程：'Spatial Ecology' — ECL 640 · graduate · Fall — 'Species distribution models, movement ecology and the data behind them.'；'Data Analysis for Ecologists' — ECL 320 · undergraduate · Spring — 'From messy field notes to a defensible model.'；'Scientific Computing' — CS 210 · undergraduate · Fall — 'Version control, reproducible reports and enough Python to be dangerous.' 每行链接到其课程页面（#/teaching/spatial-ecology、#/teaching/data-analysis、#/teaching/scientific-computing），并显示一行 mono '12 students · lectures and labs'。
   布局：行 py-5，带 1px 分隔线；课程代码 mono 酒红色。
   动效：行悬停时背景为 navyTint。
2. **课程页面** — 显示于 #/teaching/<slug>（slug 缺失时打开 #/teaching/spatial-ecology）：面包屑 'Teaching'；H1 课程标题；一行 mono 包含代码、层次和学期；一段描述；'Syllabus' 为八行，包含周数、主题和一个 mono 标签（'Lecture'、'Lab'、'Project'）：'Week 1 — Why things live where they do — Lecture'；'Week 2 — Presence-only data — Lecture'；'Week 3 — Maxent and its critics — Lab'；'Week 4 — Occupancy models — Lecture'；'Week 5 — Fitting occupancy models — Lab'；'Week 6 — Movement and telemetry — Lecture'；'Week 7 — Project clinics — Project'；'Week 8 — Project presentations — Project'；以及一行 'Office hours: Thursdays, 2 to 4 pm.' 其他课程在 content.ts 中有各自的八行。
   布局：max-w-[760px]；大纲行 py-3，带 1px 分隔线。
   动效：无。

### Talks (`#/talks`)
1. **Talks** — H1 'Talks.' 六行：标题、等宽字体的举办地点（全部为虚构：'Conference on Environmental Data'、'Halloran Department of Biology'、'Spatial Ecology Symposium'、'Wildlife Informatics Workshop'）、一个 'Invited' 或 'Contributed' 标签，以及一个打开 #/talks/<slug> 的 'Slides' 按钮。Talks：'Where do the birds go when the wind changes?' — Conference on Environmental Data, 2025, Invited；'Ten-metre species distribution models' — Spatial Ecology Symposium, 2024, Invited；'Occupancy models in the browser' — Wildlife Informatics Workshop, 2024, Contributed；'Learning phenology from street view' — Conference on Environmental Data, 2023, Contributed；'The $12 logger' — Halloran Department of Biology, 2023, Invited；'Maps that admit uncertainty' — Spatial Ecology Symposium, 2022, Invited。
   布局：行 py-4，带 1px 分隔线；标签为方形，带 1px 海军蓝（navy）边框，'Invited' 为酒红色（burgundy）。
   动效：无。
2. **幻灯片查看器** — 在 #/talks/<slug> 显示：演讲标题和举办地点；一个 16:9 幻灯片框架，在纸色背景上以海军蓝和酒红色展示五张代码绘制的幻灯片（一张标题幻灯片，含演讲标题和演讲者姓名；三张幻灯片，每张含一个短标题和三条项目符号行；一张结束幻灯片 'Thank you — data and code on request'）；上一页和下一页按钮、一个等宽计数器 '2 / 5' 以及 ArrowLeft / ArrowRight 键。
   布局：幻灯片框架 max-w-[960px]；控件在其下方。
   动效：幻灯片之间交叉淡入淡出 250ms；在减少动效模式下为即时切换。

### People (`#/people`)
1. **Lab members** — H1 'People.' 一段导语：'[LAB_NAME] is eight people: two postdocs, four doctoral students and two research assistants.' 一个五人网格，含肖像、姓名、角色、一句关于其工作的描述和一个等宽虚构邮箱：[BRAND] — Principal investigator（portrait-professor.webp）；'Kabir Okafor' — Postdoc — 'Movement models for soaring birds.' — member-1.webp，alt 'Portrait of a postdoctoral researcher in glasses and a grey sweater'；'Mei-Lin Chen' — PhD student — 'Species distribution models at high resolution.' — member-2.webp，alt 'Portrait of a doctoral student in a burgundy top'；'Kwame Mensah' — PhD student — 'Occupancy models for camera traps.' — member-3.webp，alt 'Portrait of a doctoral student in a navy overshirt'；'Alejandra Reyes' — Research assistant — 'Citizen-science data cleaning.' — member-4.webp，alt 'Portrait of a research assistant in a sage-green blouse'。下方为 public/images/lab-group.webp（16:9）全宽，alt 'The lab working around a table in a library room, seen from behind'。
   布局：网格 md:grid-cols-2 lg:grid-cols-5 gap-6；肖像为方形，带 1px 海军蓝边框；合影为 16:9，带说明文字。
   动效：肖像以 60ms 错峰淡入。
2. **Alumni and open positions** — H2 'Alumni.' 四行：'Lena Fischer — PhD — now at the Alpine Research Centre'；'Tomás Rivera — Postdoc — now at the Institute for Wildlife Informatics'；'Aisha Bello — Research assistant — now a data scientist'；'Jonas Weber — MSc — now a high-school teacher'。H2 'Open positions.' 两张卡片：'PhD studentship — Movement ecology and wind energy' — 'Four years, fully funded. Start in the fall. Experience with R or Python and a love of fieldwork.'；'Research assistant — Data engineering' — 'One year, renewable. You will keep our pipelines honest.' 按钮 'How to apply' 打开一个面板：'Send a short note and your CV to the email above. This is a sample page, so nothing is sent.'
   布局：Alumni 行 py-3，带 1px 分隔线；职位卡片在桌面端并排。
   动效：面板下滑 200ms。

### CV (`#/cv`)
1. **Curriculum vitae** — H1 'Curriculum vitae.'，带一个调用 window.print() 的按钮 'Print or save as PDF'。各章节在 120px 等宽列中显示年份范围：Education — 'PhD, Ecology — Halloran University, 2012'；'MSc, Statistics — University of the Coast, 2008'；'BSc, Biology — University of the Coast, 2006'。Positions — 'Associate Professor, Halloran University, 2021 – present'；'Assistant Professor, Halloran University, 2015 – 2021'；'Postdoctoral fellow, Institute for Wildlife Informatics, 2012 – 2015'。Awards — 'Early Career Researcher Award, Society for Spatial Ecology, 2019'；'Best paper, Conference on Environmental Data, 2024'。Selected publications — 前五篇出版物，以紧凑列表呈现。Teaching — 三门课程。Service — 'Associate editor, Annals of Spatial Ecology, 2022 – present'；'Review panel, Conference on Environmental Data, 2023, 2024'。末尾一条等宽注释：'Sample CV. Dates and entries are invented.'
   布局：max-w-[820px]；行 py-3，带 1px 分隔线。打印样式表隐藏页眉、导航和页脚，除海军蓝标题外移除颜色，并设置 18 mm 页边距。
   动效：无。

## 资产
- 图片：六张由 VibeFather 生成的照片，下载到 public/images/ 并仅在此处使用：portrait-professor.webp（3:4）、lab-group.webp（16:9）、member-1.webp、member-2.webp、member-3.webp 和 member-4.webp（1:1）。每张均从 https://media.vibefather.ai/assets/4d45d089-d722-4474-91dc-d1d231d266eb/<file> 下载；替代文本已在上述各节中给出。所有人物均为虚构。在 ASSETS.md 中注明：'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.'
- 图片：项目插图、主视觉点阵网格和演讲幻灯片均为代码绘制的内联 SVG 和 HTML。
- 图标：lucide-react npm 包（ISC）：menu、x、copy、check、fileText、download、printer、chevronLeft、chevronRight、arrowUpRight、mail。不使用其他图标集，任何地方均不使用徽标或纹章。
- 字体：Fontsource 可变字体包（OFL-1.1）：@fontsource-variable/newsreader、@fontsource-variable/libre-franklin 和 @fontsource/ibm-plex-mono，在 main.tsx 中导入。不使用字体 CDN 链接。

## 不要做
- 无后端：没有服务器代码、API 路由、数据库、认证或网络请求。复制、筛选、幻灯片查看器和打印全部在浏览器中运行。
- 教授、实验室、机构、每一篇出版物、课程、演讲、奖项、期刊和会议都是虚构的示例内容；不得提及或展示任何真实的大学、院系、期刊、出版商、资助机构、个人、校徽或印章。
- PDF 按钮会打开一个摘要面板，并明确说明不存在 PDF 文件；没有死链接。
- 除六张生成的头像外，不得使用正面肖像；不得使用大学校徽、印章、校园照片或标志。
- 不使用渐变、阴影、玻璃效果或圆角卡片；采用扁平纸张质感，藏青色（navy）和酒红色（burgundy），配 1px 线条和直角。
- 酒红色（burgundy）是唯一的强调色；纸张上的小号酒红色文字仅用于 13px 等宽字体或更大字号。
- 所有资源自托管：字体通过 Fontsource 包引入，图片下载到项目中，不使用 CDN 脚本或链接标签，不使用 Google Fonts，不使用分析工具。
- Vite base 设为 './'，使用相对资源路径；内部链接使用锚点（#/publications、#/teaching/spatial-ecology）或真实文件名，绝不使用裸目录；缺少 slug 的详情路由显示第一项。
- 生产构建压缩且不生成 source map；dist/ 小于 20 MB。
- prefers-reduced-motion：无淡入淡出；所有变化即时完成。绝不在等待进入视口触发器时用 clip-path 或零不透明度隐藏整个元素。
- CV 打印干净：无导航、无页脚、白底黑字、无截断行。
- Tailwind 不透明度工具类使用默认刻度（例如 /95）；自定义档位写成任意值。
- 不做 SEO 工作：一个包含 [BRAND] 的普通 <title> 和一个 favicon 就足够了。
- 不得从任何参考网站复制代码、文案、图像或字体；模板名称、slug、文案或 alt 文本中不得出现品牌名称。

---
— Prompt by VibeFather · https://vibefather.ai/t/academic-researcher-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
