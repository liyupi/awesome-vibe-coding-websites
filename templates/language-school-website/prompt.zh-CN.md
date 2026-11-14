> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 语言学校网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一个精致的单页网站。[BRAND] 是一家虚构的社区语言学校，在 [LOCATION] 为 [AUDIENCE] 提供 [COURSE_LANGUAGES]，包含线下与实时在线两种选择。将课程探索、准确的十题分班测验、循环课表、透明价格、教师简介和报名申请整合为一个连贯的体验。使用下方完全一致的默认文案，但当变量值变化时，重写每一门课程、题库、教师简介、课表、学员评价、地址和联系方式。

- 受众：潜在的语言学习者，他们希望在报名前了解合适的级别、每周时间投入、教学方法和费用；也包括调整该网站的教育工作者或小型学校团队。
- 目标：帮助访客从初步兴趣走向合适的课程，并完成客户端报名申请，同时不隐藏课表或价格。
- 语气：温暖、清晰、鼓励且务实。使用简洁的教学语言和具体的课堂细节，不对流利程度、认证或学习成果作任何保证。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、vite（MIT）、tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 创建一个 Vite React TypeScript 应用，在 vite.config 中设置 base 为 './'，禁用 sourcemap，并让 npm run build 在 dist/ 中生成静态文件。
  - 使用指定的颜色和字体系列配置 Tailwind 主题；将全局关键帧、焦点样式、减少动态效果覆盖和选择颜色保留在 src/index.css 中。
  - 通过 @fontsource-variable/fraunces 自托管 Fraunces，通过 @fontsource-variable/dm-sans 自托管 DM Sans；仅导入所需的轴和字重。
  - 将所有可见文案、课程记录、日程行、价格、教师简介、测验题库、常见问题和联系方式保留在 src/content.ts 中。从 [BRAND]、[COURSE_LANGUAGES]、[AUDIENCE]、[LOCATION] 和 [BASE_PRICE] 派生内容，并在值变化时重写所有依赖文案。
  - 使用 Motion for React 实现显现、筛选布局变化、测验过渡和移动菜单；使用 Lucide 图标，而不是手动模仿任何现有图标集。
  - 使用可访问的 React 组件，包含语义化按钮、字段集、单选组、标签、焦点管理，以及用于测验结果和表单确认的 aria-live。仅在 localStorage 中存储最新的测验结果和报名草稿。

## 变量
- [BRAND] — 学校名称（默认：“Cedar & Verb”）。一个虚构的语言学校名称；绝不是真实学校或 VibeFather。
- [COURSE_LANGUAGES] — 教授的语言（默认：“Spanish, French, and Italian”）。三种语言；为每种语言提供课程和十题测验题库。
- [AUDIENCE] — 学习者受众（默认：“adults learning for travel, work, and connection”）。一个简洁的短语，描述课程服务对象。
- [LOCATION] — 学校位置（默认：“Portland, Oregon”）。用于 hero、到访详情和时区文案的城市及州或地区。
- [BASE_PRICE] — 团体课程价格（默认：“$240”）。一门八周团体课程的美元价格；更改时更新相关定价文案。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/language-school-website（默认：是；删除此行以移除它）

Pages & Sections 下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按 section 作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 纸白（Paper）`#F7F3EA` — 主页面背景和安静区块的填充色
- 墨色（Ink）`#19352F` — 标题、正文、边框和深色页脚
- 柿子橙（Persimmon）`#E76F51` — 主按钮、测验激活状态和小型编辑点缀
- 钴蓝（Cobalt）`#3157D5` — 次级链接、等级标签和焦点环
- 鼠尾草绿（Sage）`#B7C9A8` — 课程卡片底色、进度轨道和装饰形状
- 粉笔白（Chalk）`#FFFCF7` — 卡片、表单表面以及 Ink 或 Persimmon 上的文字

### 排版
- 展示标题和区块标题：Fraunces（OFL），字重 500/600/700
- 正文、导航、表单和表格：DM Sans（OFL），字重 400/500/600/700

### 布局与动效
- 间距：使用 8px 基础网格，内容最大宽度 1280px，桌面端边距 32px，移动端边距 20px。区块在桌面端有 112px 垂直内边距，移动端为 72px。使用 12 列桌面网格，卡片间距 24px，主要交互面板内部留白充裕，为 40–56px。
- 圆角：卡片圆角 24px，图片框圆角 32px，输入框圆角 12px，按钮和筛选标签为全圆角。主要表面使用 18% 不透明度的 1px Ink 边框；避免厚重的投影。
- 动效：首屏加载时，两行标题上移 32px，缓动为 650ms ease-out，并错开 90ms；照片从 scale 1.04 过渡到 1，时长 900ms。
- 动效：区块标题和卡片组以 opacity 0 到 1、y 24 到 0 的动画显示一次，时长 550ms，错开 70ms；绝不在等待 JavaScript 时隐藏内容。
- 动效：测验题目以 20px 的位移交叉淡入淡出，时长 240ms；进度条宽度动画时长 300ms；通过 aria-live 播报最终等级。
- 动效：使用 Motion 布局过渡为筛选后的课程布局添加动画，课程卡片在悬停时上浮 4px，教师肖像仅缩放至 1.025。
- 动效：使用 reduced-motion 钩子和 prefers-reduced-motion CSS 覆盖，移除变换、平滑滚动和非必要过渡，同时保留所有最终状态。
- 图像：将提供的六张温暖编辑纪实照片作为一次连贯的拍摄来使用：奶油色墙面、森林绿家具、克制的柿子橙点缀、柔和的窗光、自然的 35mm 质感，以及多元的虚构成年人。首屏是一个宽敞的教室场景，而不是面部特写。教师肖像是虚构人物一致的半身工作肖像，不与任何真实个人相似。不要在任何图像中添加可读文字、标志、著名地标或可识别的真实人物。

## 页面与区块
### 学校主页、课程查找器、测验和报名（`index.html`）
1. **粘性页眉和移动端导航** — 使用文字标识 [BRAND]，旁边配一个小型的原创代码绘制的一对重叠对话圆圈。桌面端锚点链接为 Courses、Placement quiz、Schedule、Teachers 和 FAQ；主按钮为 Enroll now。移动端使用 Menu 按钮，带一个可访问的展开面板，包含相同的锚点和 CTA。每个锚点滚动到对应区块并关闭移动端面板。
   布局：粘性固定在顶部，高度 80px，Paper 背景 94% 不透明度，轻微模糊，底部边框。在 1280px 容器内，文字标识居左，导航居中，CTA 居右。低于 900px 时，仅显示文字标识、Enroll now 和 Menu。
   动效：移动端面板以 220ms 不透明度和高度过渡展开；不要对粘性页眉的位置做动画。
2. **摄影主视觉** — 眉题：IN PERSON IN [LOCATION] · LIVE ONLINE。H1：Speak beyond the classroom。正文：Practical [COURSE_LANGUAGES] classes for [AUDIENCE], with small groups, clear levels, and teachers who make time to talk。主 CTA：Take the placement quiz。次 CTA：Browse courses。CTA 下方显示三个运营事实：8-week courses · Max 8 learners · 90-minute classes。使用 hero-classroom.webp，alt 为 'Adult learners talking around a sunlit classroom table'。在图片上添加一个小型浮动 Chalk 卡片：Not sure of your level? / Answer 10 questions / Find your class。
   布局：在页眉后的首个桌面屏幕内，使用 12 列主视觉，文案占 5 列，照片占 7 列。H1 设置为 clamp(52px, 5.6vw, 82px)，行高 0.96；正文每行保持 52 个字符。图片为 4:3 裁剪，32px 圆角。移动端上，文案堆叠在全宽 4:3 图片之前，两个 CTA 均为全宽且不覆盖照片。
   动效：使用指定的主视觉入场效果。浮动卡片在标题后轻柔淡入；不要循环浮动或光标效果。
3. **课程查找器** — 标题：Start where you are。介绍：Choose a language, then filter by level. Not sure? The placement quiz will point you here。提供由 [COURSE_LANGUAGES] 生成的语言胶囊按钮和级别胶囊按钮 All levels、A1、A2、B1、B2。默认课程，均为八周、90 分钟、最多八名学习者，价格为 [BASE_PRICE]：Spanish A1 'Spanish from Hello' 周二/周四 18:00；Spanish A2 'Spanish in Motion' 周一/周三 19:00；Spanish B1 'Spanish at the Table' 周六 10:00；French A1 'French First Steps' 周二/周四 19:30；French B1 'French Conversation Club' 周六 11:30；Italian A1 'Italian Day by Day' 周一/周三 18:00。每张卡片包含一段简短的以成果为导向的描述、时间表、教师姓名、级别标签、View details 和 Enroll。View details 展开三个具体课程主题和材料说明；Enroll 滚动到表单并预选该课程。当没有组合匹配时，显示有用的空状态和 Clear filters。
   布局：将标题和介绍放在左侧 5 列区块，筛选组放在右侧 7 列区块。下方桌面端使用三列卡片网格，平板两列，移动端一列。卡片有 Sage 色调顶部条、大号 Fraunces 课程标题、对齐的元数据行和底部操作。展开的详情向下推内容，而不是打开模态框。
   动效：筛选变化后对卡片重新排序和不透明度做动画。将 View details 的箭头旋转 180 度并对其内容高度做动画。
4. **十题分班测验** — 标题：Ten questions to your best-fit class。介绍：Choose a language and answer ten short questions. Your result is a course recommendation, not a certificate。以一个必选的语言选择器开始，包含 [COURSE_LANGUAGES] 中的每种语言。然后一次只显示一道四选项题目，带 Back 和 Continue 控件、Question N of 10 和进度条。Continue 在选中答案前保持禁用。每个正确答案得一分：0–2 推荐 A1，3–5 A2，6–8 B1，9–10 B2。结果面板显示 Your recommended level: [LEVEL]，给出一句话解释，并提供 See matching courses、Retake quiz 和 Enroll at this level。See matching courses 同时应用语言和级别筛选并滚动到课程网格。在本地保存最新的语言、答案、分数和级别。对于 Spanish，使用以下确切问题和正确选项，以及列出的备选项：1 What does 'buenos días' mean? Good morning（正确）、Good night、Thank you、See you later。2 Complete 'Me ___ Elena.' llamo（正确）、llamas、llaman、llaméis。3 Which word means 'book'? libro（正确）、mesa、calle、reloj。4 Complete 'Nosotros ___ en una casa pequeña.' vivimos（正确）、viven、vivo、vives。5 Complete 'Ayer yo ___ café con Ana.' tomé（正确）、tomo、tomaré、tomas。6 Complete '¿A qué hora ___ la clase?' empieza（正确）、empiezo、empiezas、empiecen。7 Complete 'Si tengo tiempo este fin de semana, ___ a mis primos.' visitaré（正确）、visitaría、visitara、visitado。8 Complete 'Me gustaría ___ una mesa para dos.' reservar（正确）、reserva、reservas、reservado。9 Complete 'Para cuando llegamos, la película ya ___.' había empezado（正确）、ha empezado、empezará、empieza。10 Complete 'Si ___ más tiempo libre, aprendería otro idioma.' tuviera（正确）、tengo、tendré、tenía。为每个其他所选语言编写十道原创、语法准确的四选项题目，镜像此进阶：从问候和现在时到过去叙述、未来计划、礼貌请求以及虚拟式或同等高级结构。将每道题、选项和答案键保留在 src/content.ts 中。
   布局：使用 4/8 两列区块：左侧为标题、说明和一个小型代码绘制的 A1→B2 级别轨道；右侧为大型 Chalk 测验卡片。测验卡片保持稳定的最小高度，进度放在题目上方，答案在桌面端为 2×2 网格，导航在下方。移动端上，答案和列堆叠，级别轨道变为水平。
   动效：使用指定的题目和进度过渡。在 Continue 后将焦点移到新题目标题，在第十题后移到结果标题。
5. **教学方法和课堂场景** — 标题：Learn it. Use it. Make it yours。三个编号步骤：01 Warm up — Start with useful phrases from a real situation。02 Guided practice — Build accuracy through short pair exercises and clear feedback。03 Real conversation — Put the lesson together in unscripted, supportive exchanges。使用 conversation-table.webp，alt 为 'Learners practicing conversation around a wooden table'，说明文字：A typical class: fewer lectures, more useful exchanges。
   布局：使用全宽 16:9 照片，后接三列编号行，在桌面端与照片下边缘重叠 48px。每个步骤位于 Chalk 上，带彩色编号、简洁文案和顶部边框。移动端上，移除重叠并将步骤堆叠在图片下方。
   动效：以微妙的裁剪内缩效果显示照片，三个步骤以短交错效果显示；不要使用会裁切面部或笔记本的视差效果。
6. **时间表和透明定价** — 标题：A week that works with your week。副文案：Recurring times, small groups, and no registration fee。提供 In person 和 Live online 标签页。时间表列包括 Course、Level、Days、Time、Format 和 Price。复用六条课程记录，在线时间标注为本地 [LOCATION] 时区，小组课程价格设为 [BASE_PRICE]。旁边显示三行价格：Eight-week group course [BASE_PRICE]；Four-week conversation club $96；One private 60-minute lesson $58。注意：All prices are in USD. Course materials are included。添加一个 Enroll in a group course 按钮，预选第一个可见课程。
   布局：使用 8/4 网格，左侧为带标签页的时间表，右侧为 Ink 色价格卡片。表头在行上方保持可见，每行有充裕的 18px 垂直内边距。在低于 760px 的屏幕上，将每行转换为带标签的卡片，而不是允许页面水平溢出。移动端上保持价格卡片静态。
   动效：标签页切换时以 180ms 交叉淡入淡出时间表行，并在标签之间移动一个小下划线。不要对价格做动画或计算虚构的节省。
7. **教师简介** — 标题：Teachers who make room for your voice。默认简介：Amara Bennett — 西班牙语 · A1–B2 — 用社区故事、食物词汇和简短角色扮演让初学者开口说话。Jonas Berg — 法语 · A1–B1 — 把发音拆解成实用模式，并将短广播片段带入会话课。Priya Nair — 意大利语 · A1–B2 — 围绕旅行场景、日常仪式和细致的错误复盘来构建课程。分别搭配 teacher-amara.webp、teacher-jonas.webp 和 teacher-priya.webp。使用替代文本 'Amara Bennett, a fictional Spanish teacher, in a sunlit classroom'、'Jonas Berg, a fictional French teacher, beside a classroom bookshelf' 和 'Priya Nair, a fictional Italian teacher, seated in a language studio'。这些是虚构的简介和虚构的肖像占位图，并非真实员工。
   布局：三张等宽卡片，配 3:4 肖像，姓名和语言放在下方而非覆盖在面部，简介为两行。使用微妙的 Sage、Paper 和 Cobalt 色调卡片背景。保持单列移动端布局，图片裁切高度不超过 480px。
   动效：仅使用克制的肖像悬停缩放和显现错峰；不要将简介隐藏在悬停之后。
8. **学生心声** — 标题：What practice feels like。使用三条虚构的演示引语，不含指标或成果声明：'The class gives me just enough structure, then lets me try the conversation myself.' — Nora，西班牙语 A2。'I finally understand what to practice between lessons instead of collecting random phrases.' — Theo，法语 A1。'Making mistakes feels normal here, and that makes speaking much easier.' — Mina，意大利语 A1。
   布局：一个 Ink 区块，配大号 Fraunces 引语处理。桌面端以水平三列行展示三条引语，移动端为无需滑动的垂直堆叠。使用 Persimmon 引号和 Chalk 文字，对比强烈。
   动效：以微妙的透明度过渡一起显现引语；无轮播或自动旋转。
9. **报名表单和学校详情** — 标题：Your next conversation starts here。正文：Tell us what you want to learn and when you can join. 演示会检查你的详细信息，并仅在此浏览器中保存请求。字段：Full name、Email、Language、Level、Preferred schedule、Format（In person 或 Live online），以及可选的 What would you like to say in your new language? 文本区域。预选来自任何 Enroll 按钮的课程值。在浏览器中验证必填字段和合理的电子邮件。提交按钮：Request my place。成功状态：Thanks, [first name]. Your request is saved for this demo. No information has been sent. 包含按钮 Edit request 和 Start another request。表单旁使用 school-studio.webp，替代文本为 'A welcoming language school studio with green chairs and warm wood'，以及详情：418 Alder Mews, [LOCATION]；hello@[BRAND-slug].example；(503) 555-0148；Mon–Thu 10:00–20:00, Fri 10:00–17:00, Sat 09:00–15:00。当变量变化时，派生电子邮件 slug 并重写虚构的街道地址、电话和营业时间。
   布局：使用 5/7 网格：图像和访问详情在左，表单在右，位于 Chalk 卡片中。桌面端姓名/电子邮件和语言/级别使用两列，然后在 640px 以下变为一列。输入框最小高度 48px，标签可见，内联错误文本，以及清晰的 Cobalt 焦点环。将表单替换为成功面板，同时尽可能保持其高度。
   动效：不要抖动任何字段。淡入错误，成功时将焦点移动到确认标题，并带有 240ms 透明度过渡。
10. **常见问题** — 标题：Before your first hello。六个手风琴，附具体答案：Do I need any experience? — No. A1 assumes no prior study, and the quiz helps place everyone else. How accurate is the placement quiz? — It recommends a starting level from ten answers; a teacher can adjust it after a short conversation. Can I switch levels? — Yes. Speak with your teacher after the first class and the school will suggest a better-fit group. What should I bring? — A notebook and something to write with; all course materials are included. Are online classes live? — Yes. Online groups meet with a teacher at the listed recurring time and are not prerecorded. What is the refund policy? — A full refund is available up to seven days before the first class; after that, the school offers course credit. 为变更后的学校重写政策和支持文案，而不是暗示通用条款。
   布局：使用 4/8 网格，标题在左，六个全宽手风琴行在右。每个问题是一个最小 56px 的按钮，带加号图标和可见焦点；一次只需打开一个答案。
   动效：在 220ms 内动画答案高度和透明度，并将加号旋转为 X。在减少动态效果下保持所有答案可用。
11. **页脚** — 重复 [BRAND] 和行 Practical language classes in [LOCATION] and online。包含 Courses、Placement quiz、Schedule、Teachers、Enroll now、来自报名部分的虚构地址、电子邮件、电话和营业时间。以 © [BRAND] 和可选的 [CREDIT] 链接结束。不要添加社交图标、外部地图、年份或虚构的认证徽章。
   布局：一个 Ink 页脚，桌面端为 5/3/4 网格，用于品牌声明、导航和访问详情，通过 Persimmon 顶部线与 FAQ 分隔。移动端堆叠，间距 28px，大点击目标。
   动效：除简单的链接颜色悬停过渡外，无其他动效。

## 资源

- 图片：将 https://media.vibefather.ai/assets/b2e01ad5-88c0-4e5e-a7d0-1876a943e80b/hero-classroom.webp 下载到 public/images/hero-classroom.webp；alt：Adult learners talking around a sunlit classroom table；用于 hero 区域。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；记录到 ASSETS.md。
- 图片：将 https://media.vibefather.ai/assets/b2e01ad5-88c0-4e5e-a7d0-1876a943e80b/conversation-table.webp 下载到 public/images/conversation-table.webp；alt：Learners practicing conversation around a wooden table；用于 Teaching method。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；记录到 ASSETS.md。
- 图片：将 https://media.vibefather.ai/assets/b2e01ad5-88c0-4e5e-a7d0-1876a943e80b/teacher-amara.webp 下载到 public/images/teacher-amara.webp；alt：Amara Bennett, a fictional Spanish teacher, in a sunlit classroom；用于 Teacher profiles。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；记录到 ASSETS.md。
- 图片：将 https://media.vibefather.ai/assets/b2e01ad5-88c0-4e5e-a7d0-1876a943e80b/teacher-jonas.webp 下载到 public/images/teacher-jonas.webp；alt：Jonas Berg, a fictional French teacher, beside a classroom bookshelf；用于 Teacher profiles。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；记录到 ASSETS.md。
- 图片：将 https://media.vibefather.ai/assets/b2e01ad5-88c0-4e5e-a7d0-1876a943e80b/teacher-priya.webp 下载到 public/images/teacher-priya.webp；alt：Priya Nair, a fictional Italian teacher, seated in a language studio；用于 Teacher profiles。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；记录到 ASSETS.md。
- 图片：将 https://media.vibefather.ai/assets/b2e01ad5-88c0-4e5e-a7d0-1876a943e80b/school-studio.webp 下载到 public/images/school-studio.webp；alt：A welcoming language school studio with green chairs and warm wood；用于 Enrollment 旁边。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；记录到 ASSETS.md。
- 字体：安装并自托管 @fontsource-variable/fraunces 和 @fontsource-variable/dm-sans，两者均为 OFL；将所需的 woff2 文件打包到本地，并在 ASSETS.md 中列出这些包和许可证。
- 图标：使用 lucide-react（ISC）实现 menu、arrow、chevron、plus、check、clock、map-pin 和 mail 图标。本地打包，使用一致的 20px 描边，并在 ASSETS.md 中记录包和许可证。仅用 SVG 绘制原始的 conversation-circle 品牌标志。

## 不要做
- 不要添加后端、API 路由、数据库、身份验证、分析、外部表单提交、地图嵌入或第三方 API 调用。测验评分、筛选、本地持久化和报名确认必须完全在浏览器中运行。
- 不要热链图片，也不要从 CDN 加载脚本、字体、图标或样式。下载提供的六张图片，自行托管两种字体，并让每个运行时资源都通过相对路径保持本地化。
- 不要生成 source map，不要把 src/ 复制到 dist/，不要让 dist/ 超过 20 MB，也不要要求超过 npm run build 的操作。这个单页站点必须能从 index.html 打开，并使用哈希锚点而不是裸目录链接。
- 不要把文案分散到各个组件中。将所有可编辑文本和记录保留在 src/content.ts 中，从变量派生依赖品牌的取值，并在变量变化时重写所有仅默认内容。
- 不要使用真实学校名称、徽标、口号、品牌化视觉系统、现有学校文案、自定义商业字体或来自其他网站的页面代码。
- 不要使用真实教师身份、名人或公众人物肖像、可识别的真实人物，或仅含首字母的教师卡片。所有教师简介和肖像都是虚构占位内容，并且必须自然变化。
- 不要使用 Unsplash、Pexels、Pixabay、Google Images、CC BY-NC、CC BY-SA、占位图服务，或任何再分发权利不清晰的资源。不要在生成的图像中添加文字、徽标、著名地标或品牌产品。
- 不要声称获得认证、保证流利、已验证学生成果、真实评论数量或捏造的性能统计数据。将分班结果明确保持为建议性质，而不是证书。
- 不要留下装饰性或无效控件。语言和级别筛选、课程详情、两个日程标签页、全部十个测验步骤和评分、结果到课程的筛选、重测、移动端导航、折叠面板、报名预选、验证、成功、编辑和重置都必须正常工作。
- 不要在站点 UI 中使用 lorem ipsum、通用库存口号、虚假紧迫感、倒计时、无关品牌，或 VibeFather 自己的名称、定价、许可、指标或会员内容。
- 不要损害可访问性或响应式表现：在 390px 下不得出现水平溢出，不得使用仅表格的移动端布局，不得缺少标签或 alt 文本，不得有焦点陷阱，不得仅悬停显示信息，并且在 390×844 或 1440×900 下不得出现控制台错误。
- 不要忽略 prefers-reduced-motion，不要将平滑滚动用户带入他们无法禁用的动效中，不要把核心内容隐藏在动画之后，也不要使用不必要的 3D、视差、自动播放轮播或循环装饰。

---
— Prompt by VibeFather · https://vibefather.ai/t/language-school-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
