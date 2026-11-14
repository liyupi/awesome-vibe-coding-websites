> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 私人辅导教师网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一个精致的单页网站，这是由 [TUTOR_NAME] 创立的虚构一对一辅导工作室，面向 [LOCATION] 及线上，为 [AUDIENCE] 提供 [SUBJECTS]。将学科与级别指导、透明的教学过程、清晰标注的示例学生进步、基于 [HOURLY_RATE] 的套餐、交互式可用时间日历，以及免费的介绍通话请求整合为一个连贯的体验。使用下方完全一致的默认文案，但当变量值变化时，重写每个学科、级别、导师简介、成果、套餐描述、可用时间详情、FAQ 和联系方式。

- 受众：正在比较一对一导师的学科匹配度、教学风格、可能的投入、费用和可用时间的学生与家庭，以便在咨询前做出判断；以及正在将网站适配到自己实践的独立导师。
- 目标：帮助访客从初步兴趣转向合适的学科，并完成一个客户端免费介绍通话请求，其中包含选定的示例日期和时间，同时让所有成果和可用时间都明确标注为示意性内容。
- 语气：温暖、平静、睿智且务实。像一位体贴的导师那样写作，清晰地解释下一步。使用具体的教育细节，避免施压，绝不承诺成绩、录取或保证进步。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、vite（MIT）、tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务端代码、无外部 API。
- 设置：
  - 创建一个 Vite React TypeScript 应用，在 vite.config 中设置 base 为 './'，禁用 sourcemap，并让 npm run build 在 dist/ 中生成静态文件。
  - 使用指定的颜色和字体家族配置 Tailwind 主题；将全局关键帧、焦点样式、减少动态效果覆盖和选中颜色保留在 src/index.css 中。
  - 通过 @fontsource-variable/lora 自托管 Lora，通过 @fontsource-variable/manrope 自托管 Manrope；仅导入所需的轴和字重。
  - 将所有可见文案、科目和级别记录、示例成果、价格、导师详情、常见问题和联系信息保留在 src/content.ts 中。从 [BRAND]、[TUTOR_NAME]、[SUBJECTS]、[AUDIENCE]、[LOCATION] 和 [HOURLY_RATE] 派生内容，并在值变化时重写所有依赖的文案。
  - 从 [HOURLY_RATE] 中解析数字金额和货币符号，将四节课总价精确计算为该金额的四倍，并通过一个定价辅助函数格式化所有依赖的价格，而不是重复硬编码总价。
  - 使用 Motion for React 实现显现、科目标签切换、移动端导航和表单状态；使用 Lucide 图标，而不是手动模仿任何现有图标集。
  - 使用可访问的 React 组件，包含语义化按钮、字段集、单选组、标签、焦点管理，以及针对所选时段、验证摘要和表单确认的 aria-live。仅在 localStorage 中存储最新的预约草稿。
  - 使用 America/New_York 作为默认导师时区，并在 [LOCATION] 变化时在 src/content.ts 中选择合适的 IANA 时区。在本地生成滚动示例日历，不使用外部 API。

## 变量
- [BRAND] — 辅导机构名称（默认：“Mara Ellison Tutoring”）。一个虚构的单人辅导机构名称；绝不能是真实存在的辅导机构或 VibeFather。
- [TUTOR_NAME] — 导师姓名（默认：“Mara Ellison”）。一个虚构的导师身份，其姓名在首屏、个人简介和联系文案中保持一致使用。
- [SUBJECTS] — 教授科目（默认：“mathematics and physics”）。两到三个相关科目；为每个科目提供科目标签页和针对不同水平的课程内容。
- [AUDIENCE] — 学习者受众（默认：“high school students preparing for exams”）。一句简洁的描述，说明导师服务的对象；据此调整水平、示例和家长指南。
- [LOCATION] — 导师所在地（默认：“Cambridge, Massachusetts”）。用于线下授课详情和导师本地时区文案的城市及州或地区。
- [HOURLY_RATE] — 单次课程价格（默认：“$68”）。一次 60 分钟一对一私教课程的美元价格；根据此值计算四次课程的总价。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/private-tutor-website（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- 粉笔白（Chalk）`#F7F4EC` — 主页面背景和安静的编辑式区块
- 午夜蓝（Midnight）`#172A3A` — 标题、正文、边框、主按钮和深色页脚
- 长春花蓝（Periwinkle）`#5B6BB2` — 科目标签页、选中的日历状态、链接和焦点环
- 杏色（Apricot）`#D89A3D` — 小型的笔记本风格点缀，以及与 Midnight 文字搭配的高亮线条
- 雾色（Mist）`#DDE7E0` — 次级面板、可预约时段的浅色底纹和进度轨道
- 纸白（Paper）`#FFFDF8` — 卡片、表单、图片说明，以及 Midnight 或 Periwinkle 背景上的文字

### 字体排印
- 展示文字、导师引语和区块标题：Lora（OFL），字重 500/600/700
- 正文、导航、价格、日历和表单：Manrope（OFL），字重 400/500/600/700

### 布局与动效
- 间距：使用 8px 基础网格，内容最大宽度 1240px，桌面端边距 32px，移动端边距 20px。区块在桌面端有 104px 垂直内边距，移动端为 68px。使用 12 列桌面网格，卡片间距 24px，主要交互面板内部内边距为 32–48px。段落每行保持在 62 个字符左右。
- 圆角：卡片圆角 20px，图片框圆角 28px，输入框圆角 10px，按钮和标签页为全圆角。主要表面带有 1px Midnight 边框，不透明度 16%；仅在预约面板上使用克制的 `0 12px 36px` Midnight 阴影，不透明度 6%。
- 动效：首屏加载时，眉题和两行标题上移 26px，使用 600ms ease-out，并以 80ms 错开；照片从 scale 1.035 到 1，历时 850ms。
- 动效：区块标题和卡片组以 opacity 0 到 1、y 22 到 0 的动画显示一次，历时 500ms，错开 65ms；如果 JavaScript 或 IntersectionObserver 不可用，内容保持可见。
- 动效：科目级面板以 16px 的位移交叉淡入淡出，历时 220ms；活动标签页下划线使用布局过渡移动，并将键盘焦点保留在选中的标签页上。
- 动效：选中的日历时段以 180ms 的背景和边框过渡进行动画；预约摘要以 opacity 和高度在 220ms 内展开，不会意外移动日历。
- 动效：使用 reduced-motion 钩子和 `prefers-reduced-motion` CSS 覆盖来移除变换、平滑滚动和非必要过渡，同时保留每个最终状态。
- 图像：使用提供的四张温暖编辑式纪实照片作为一次连贯拍摄，主角是同一位虚构导师：粉笔白灰泥、浅橡木、午夜蓝搁架、克制的长春花蓝服装、小面积杏色点缀、柔和的午后窗光、自然的皮肤质感和微妙的 35mm 颗粒。首屏是一个宽敞的工作场景，而不是紧凑的面部特写。导师和任何学生都是虚构人物，与任何真实个人都不相似。不使用可读文字、标志、著名地标、品牌产品或真实学生图像。

## 页面与区块
### 导师主页、科目、进度示例与介绍通话请求（`index.html`）
1. **吸顶页头与移动端导航** — 使用文字标识 [BRAND]，旁边配一个小巧的原创代码绘制打开书本线条图案，带一个杏色圆点。桌面端锚点链接为 Subjects、How it works、Sample progress、Pricing 和 Availability；主按钮为 Book a free intro。移动端使用 Menu 按钮，展开一个可访问的面板，包含相同的锚点和 CTA。每个锚点滚动到对应区块并关闭移动端面板。
   布局：吸顶于顶部，高度 76px，Chalk 背景 95% 不透明度，轻微模糊，底部边框。在 1240px 容器内，文字标识居左，导航居中，CTA 居右。低于 940px 时，仅显示文字标识、紧凑的 Free intro 按钮和 Menu。
   动效：移动端面板以 220ms 不透明度和高度过渡展开；不对吸顶页头的位置做动画。
2. **个人照片主视觉** — 眉题：ONE-TO-ONE [SUBJECTS] TUTORING · [LOCATION] + ONLINE。H1：Patient tutoring. Clear next steps. 正文：Personal [SUBJECTS] support for [AUDIENCE], built around clear explanations, thoughtful practice, and a plan you can see. 主 CTA：Book a free intro call。次 CTA：Explore subjects。CTA 下方显示三条运营事实：60-minute sessions · Weekly progress note · No long-term contract。使用 hero-tutor.webp，alt 为 'A fictional tutor preparing a lesson at a sunlit oak table'。在图片上添加一个小型浮动 Paper 卡片：Free 20-minute intro / Talk through goals / No preparation needed。
   布局：在页头之后的第一个桌面屏幕内，使用 12 列主视觉，文案占 5 列，照片占 7 列。H1 设置为 clamp(54px, 5.3vw, 78px)，行高 1.01，桌面端最多两行。图片为 4:3 裁剪，28px 圆角。移动端顺序为眉题、H1、图片、正文、CTA；使用 210px 高的图片裁剪，使视觉内容出现在前 844px 内，两个 CTA 均全宽且不覆盖照片。
   动效：使用指定的主视觉入场效果。浮动卡片在标题之后淡入；无循环浮动、视差或光标效果。
3. **科目与级别查找器** — 标题：Find the right starting point。引言：Choose a subject to see how [TUTOR_NAME] breaks down support by level. Every path starts with the student's current work, not an assumed syllabus。根据 [SUBJECTS] 为每个科目提供一个可访问的标签页。默认 Mathematics 标签页显示：Foundations · Grades 8–9 — Fractions, linear equations, and turning word problems into workable steps；Core high school · Grades 9–11 — Algebra I and II, geometry, functions, and clear written reasoning；Advanced and exam prep · Grades 11–12 — Precalculus, calculus readiness, and timed mixed-problem practice。Physics 显示：Foundations · Grades 8–9 — Measurement, graphs, and scientific reasoning；Core high school · Grades 10–11 — Forces, energy, circuits, and diagram-first problem solving；Advanced and exam prep · Grades 11–12 — Momentum, fields, and structured exam-style problems。每个级别卡片包含 Best for、三项主题列表和 Ask about this level。该操作在请求表单中预选科目和级别，并滚动到 Availability。重写所有级别和示例以适配变更后的 [SUBJECTS] 和 [AUDIENCE]。
   布局：将标题和引言放在左侧 5 列区块，科目标签页放在右侧 7 列区块。下方使用三个等宽级别卡片，包含大号 Lora 级别标题、小号年级标签、对齐的主题行和底部操作。活动科目标签页为 Periwinkle 配 Paper 文字；非活动标签页使用 Paper。移动端堆叠卡片，标签行换行而非水平滚动。
   动效：使用指定的科目面板过渡。选择级别时，短暂高亮预约表单的科目字段，而非添加 toast。
4. **课程如何进行** — 标题：A lesson is only one part of the progress。引言：A simple four-part rhythm keeps student, tutor, and family aligned。步骤：01 Free intro — A 20-minute conversation about current work, goals, and fit。02 Personal starting plan — [TUTOR_NAME] identifies two priorities and agrees on a manageable weekly rhythm。03 Focused 60-minute session — Work through one concept, guided examples, and increasingly independent practice。04 Short weekly recap — Receive what clicked, what needs another look, and one concrete practice priority。使用 session-progress.webp，alt 为 'A fictional tutor and student working through a lesson at a wooden table'，说明文字：Enough structure to move forward, enough room to ask why。
   布局：使用 7/5 网格，左侧 16:9 照片，右侧堆叠四个编号步骤。每个步骤有 Apricot 编号、加粗 Manrope 标题和两行文案，以细线分隔。移动端堆叠照片后接步骤，无重叠。
   动效：照片以轻微裁剪内缩效果显现，四个步骤以短交错效果显现；无视差效果裁剪参与者。
5. **认识导师** — 眉题：YOUR TUTOR, FROM FIRST CALL TO FINAL SESSION。标题：Clear explanations, without the performance。[TUTOR_NAME] 的默认第一人称简介：'I start by finding the exact step where a problem stops making sense. Then we rebuild it with plain language, a visual example, and practice that gradually removes my help.' 第二段：'Sessions are calm and focused. You leave with a short recap, one priority for the week, and practice matched to what happened in the lesson.' 使用 tutor-portrait.webp，alt 为 '[TUTOR_NAME], a fictional private tutor, in a warm home studio'。添加三条实用事实：One tutor throughout · Online or in person in [LOCATION] · Reschedule up to 24 hours ahead。添加小说明：Demo profile with a fictional portrait placeholder。以相同的第一人称结构为变更后的导师和科目重写简介。
   布局：使用 5/7 网格，左侧 3:4 肖像，右侧简介。在第一人称引语旁放置 64px 高的 Apricot 引用线，然后是第二段和三条事实（换行标签行）。说明文字保持在图片下方而非覆盖面部。移动端使用最大 360px 肖像，简介堆叠在其下。
   动效：使用单次轻柔肖像显现，三条事实交错显现；不将简介内容隐藏在悬停之后。
6. **清晰标注的示例学生进度** — 眉题：ILLUSTRATIVE EXAMPLES。标题：Progress you can discuss in plain language。引言：These fictional samples show how [BRAND] would report a starting point, a focus, and a change. They are not verified outcomes or promises。卡片 1：Algebra II · 8 weekly sessions · Practice-set accuracy 61% → 79% on equivalent mixed sets · Focus: functions and multi-step setup · Next step: timed practice without a worked example。卡片 2：Physics · 6 weekly sessions · Five-problem check 2 → 4 correct · Focus: drawing and labeling force diagrams before calculating · Next step: mixed force and energy problems。卡片 3：Study routine · 4 weekly sessions · Planned review blocks 0 → 3 completed per week · Focus: a short weekly plan and closed-book recall · Next step: protect the routine during a busy assessment week。将前后值渲染为可访问文本加简单 CSS 条形，而非暗示实时测量数据的图表。为变更后的科目和受众重写每个示例，同时保持 ILLUSTRATIVE 标签和免责声明可见。
   布局：使用 Midnight 区块，标题和免责声明横跨顶部，后接三个等宽 Paper 卡片。每个卡片有 Apricot ILLUSTRATIVE 标签、科目和时长元数据、大号前后数值、两个克制的 Mist 条形及数字标签，以及对齐的 focus 和 next-step 行。移动端堆叠卡片；绝不单独依赖条形长度传达数值。
   动效：卡片以 60ms 交错一起显现。条形仅在 600ms 内从 0 动画到最终宽度一次；减少动效时立即显示最终宽度。
7. **透明的辅导套餐** — 标题：先聊一聊，再选择节奏。简介：无注册费，本演示不收款，也无长期合同。卡片 1：免费咨询 · $0 · 20 分钟 · 聊聊当前的学习情况与目标，了解是否合适，并决定是否继续。按钮：Book free intro。卡片 2：单次课程 · [HOURLY_RATE] · 60 分钟 · 一节量身定制的课程、一份简短的课后记录，以及三个有针对性的练习提示。按钮：Choose single session。卡片 3：四次课程计划 · 默认 $272，按 4 × [HOURLY_RATE] 计算 · 每周四节 60 分钟课程 · 包含单次课程的全部内容，另加每周回顾和一份双方商定的练习计划。按钮：Choose four sessions。每个按钮都会滚动到 Availability 并预选对应的 Package interest 值；付费选项仍从免费咨询通话开始。注意：价格以 USD 计。课程开始前 24 小时内可改期。变量变化时，更新所有关联价格和套餐描述。
   布局：使用三张等宽卡片，单次课程卡片通过 Periwinkle（长春花色）顶部边框略微强调，而不是使用 Most popular 徽章。对齐价格、时长、功能列表和按钮行。将四次课程总价与乘法公式一起显示。移动端堆叠，所有按钮高度至少 48px。
   动效：套餐卡片悬停时仅上浮 3px，并使用 180ms 的边框颜色过渡；不要为价格添加动画，也不要虚构节省金额。
8. **示例可用时间与免费咨询通话请求** — 标题：选一个时间进行首次交谈。简介：选择一个示例时段，然后告诉 [TUTOR_NAME] 你希望获得哪些帮助。本演示仅将请求保存在此浏览器中；它不会发送信息，也不会预订真实预约。构建一个滚动的七日日历，包含周标签、Previous week 和 Next week 控件，以及四周的前向导航。按导师所在本地时区生成日期。默认示例可用时间为周二和周四的 16:00、17:00 和 18:00，以及周六的 09:00、10:00 和 11:00。禁用过去的日期、所有其他工作日以及超过四周的日期。将日历标记为 Sample availability · Tutor local time。选择可用日期后显示其时间标签；选择时间后创建一个只读摘要，包含星期、日期、时间、20 分钟时长和一个 Change time 按钮。请求表单字段包括 Your name、Email、Student level、Subject（从 [SUBJECTS] 派生）、Format（含 Online 和 In person 单选按钮）、Package interest（从 Pricing 同步）以及 What would you like help with? 文本区域。要求选择时段、姓名、合理邮箱、年级、科目、形式、套餐，以及至少 20 字符的目标说明。提交按钮：Request free intro call。成功状态：Thanks, [first name]. Your demo request is saved in this browser. Nothing has been sent and no real appointment is booked. 包含 Copy request summary（带本地回退）、Edit request 和 Start over。在本地保存并恢复最新草稿，包括所选时段。
   布局：使用 7/5 网格，日历在左，Paper 预订面板在右。日历使用七个等宽列，日期按钮最小 44px，所选日期的时段显示在下方。移动端保留七个紧凑列，使用两字母星期标签和数字日期；绝不要引入页面水平溢出。表单字段仅在 640px 以上时对 name/email 和 level/subject 使用两列，然后变为一列。输入框最小高度 48px，标签可见，内联错误，并使用 Periwinkle 焦点环。将表单就地替换为成功面板，并将焦点移到其标题。
   动效：使用指定的时段和摘要过渡。错误淡入，不要抖动字段；成功时使用 220ms 不透明度过渡，并通过 aria-live 宣布。
9. **实用常见问题** — 标题：见面之前。六个手风琴式问答，提供具体答案：What happens on the free intro call? — 我们讨论当前的学习情况、哪些地方感到困难，以及有用的第一个月可能是什么样。没有销售话术，也没有继续的义务。Do sessions include homework? — 仅在有帮助时。导师会建议一个简短、具体的练习任务，而不是自动堆叠一堆练习纸。Can a parent join? — 欢迎家长或照护者在咨询通话的前几分钟参与，并可收到商定的每周回顾；请根据成人 [AUDIENCE] 调整此答案。What should we have ready? — 最近的作业、练习测试或一份作品会有帮助，但咨询时并非必需。What is the rescheduling policy? — 在约定开始时间前 24 小时内可免费改期；更晚的变更将逐案讨论。Are the student results real? — 不是。进度卡片是本演示的示意样本，并非经过验证的说法或保证。请为更换后的导师重写政策和支持文案，而不是暗示通用条款。
   布局：使用 4/8 网格，标题在左，六个全宽手风琴行在右。每个问题是一个最小 56px 的按钮，带加号图标和可见焦点；同一时间只需打开一个答案。
   动效：在 220ms 内为答案高度和不透明度添加动画，并将加号旋转为 X。在减少动态效果模式下保留所有答案可用。
10. **页脚与虚构联系方式** — 重复 [BRAND] 以及 Personal [SUBJECTS] tutoring in [LOCATION] and online 这一行。包含 Subjects、How it works、Sample progress、Pricing、Availability 和 Book a free intro。默认联系方式为 hello@[BRAND-slug].example 和 (617) 555-0136；派生邮箱 slug，并为变更后的地点选择一个合适的保留 555 号码。可用时间说明：Intro calls Tuesday, Thursday, and Saturday by request。以 © [BRAND] 和可选的 [CREDIT] 链接结尾。不要添加社交图标、外部地图、年份、认证徽章或评论数量。
   布局：Midnight 页脚，桌面端使用 5/3/4 网格，分别用于品牌声明、导航和联系方式，并通过 Apricot 顶部线与 FAQ 分隔。移动端堆叠，间距 28px，点击目标要大。
   动效：除简单的链接颜色悬停过渡外，无其他动效。

## 资源

- 图片：将 https://media.vibefather.ai/assets/5abc010d-2f28-4b7e-a3bc-504315ecaf19/hero-tutor.webp 下载到 public/images/hero-tutor.webp；alt：一位虚构的导师在阳光洒落的橡木桌旁备课；用于 hero 区域。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；记录到 ASSETS.md。
- 图片：将 https://media.vibefather.ai/assets/5abc010d-2f28-4b7e-a3bc-504315ecaf19/session-progress.webp 下载到 public/images/session-progress.webp；alt：一位虚构的导师和学生在木桌旁进行课程；用于 How sessions work。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；记录到 ASSETS.md。
- 图片：将 https://media.vibefather.ai/assets/5abc010d-2f28-4b7e-a3bc-504315ecaf19/tutor-portrait.webp 下载到 public/images/tutor-portrait.webp；alt：[TUTOR_NAME]，一位虚构的私人导师，身处温暖的家庭工作室；用于 Meet the tutor。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；记录到 ASSETS.md。
- 图片：将 https://media.vibefather.ai/assets/5abc010d-2f28-4b7e-a3bc-504315ecaf19/study-space.webp 下载到 public/images/study-space.webp；alt：一间安静的辅导工作室，配有橡木桌和午夜蓝（midnight-blue）书架；仅在宽屏上作为定价介绍旁的可选安静视觉元素使用，绝不替换任何内容。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；记录到 ASSETS.md。
- 字体：安装并自托管 @fontsource-variable/lora 和 @fontsource-variable/manrope，两者均为 OFL；将所需的 woff2 文件打包到本地，并在 ASSETS.md 中列出这些包和许可证。
- 图标：使用 lucide-react（ISC）实现菜单、箭头、chevron、加号、对勾、时钟、日历和邮件图标。本地打包，使用一致的 20px 描边，并在 ASSETS.md 中记录该包和许可证。仅在 SVG 中绘制原创的打开书本品牌图案。

## 不要做
- 不要添加后端、API 路由、数据库、身份验证、分析、外部表单提交、地图嵌入或第三方 API 调用。日历生成、本地持久化、价格计算、验证、剪贴板回退和确认必须完全在浏览器中运行。
- 不要热链图片，也不要从 CDN 加载脚本、字体、图标或样式。下载提供的四张图片，自行托管两种字体，并保持每个运行时资源都使用相对路径本地化。
- 不要生成 source map，不要把 src/ 复制到 dist/，不要让 dist/ 超过 20 MB，也不要要求超过 npm run build 的步骤。单页站点必须能从 index.html 打开，并使用哈希锚点而不是裸目录链接。
- 不要把文案分散到各个组件中。将所有可编辑文本和记录保留在 src/content.ts 中，从变量派生品牌相关值和套餐总计，并在变量变化时重写所有仅默认内容。
- 不要使用真实的辅导业务名称、徽标、口号、品牌视觉系统、现有站点文案、自定义商业字体或其他网站的页面代码。
- 不要使用真实的导师或学生身份、名人或公众人物肖像、可识别的真人、真实推荐语，或仅以首字母呈现导师。导师资料和所有 photographed people 均为虚构占位符。
- 不要使用 Unsplash、Pexels、Pixabay、Google Images、CC BY-NC、CC BY-SA、占位图服务或任何再分发权利不明确的资源。不要在生成的图像中添加可读文本、徽标、著名地标或品牌产品。
- 不要声称认证、已验证的学生成果、保证成绩、录取结果、真实评论数量或捏造的绩效统计。每个进度卡片和可用日历都必须明确标注为示意性示例内容。
- 不要暗示已预订真实预约或已传输个人信息。确认信息必须说明请求仅保存在此浏览器中，未发送任何内容。
- 不要留下装饰性或无效控件。学科标签页、级别到表单的预选、套餐到表单的同步、日历导航、禁用日期、时间选择、Change time、移动导航、手风琴、验证、本地草稿恢复、复制、编辑和重置都必须正常工作。
- 不要在站点 UI 中使用 lorem ipsum、通用库存口号、虚假紧迫感、倒计时、无关品牌或 VibeFather 自己的名称、定价、许可、指标或会员内容。
- 不要损害可访问性或响应性：在 390px 下不得出现水平溢出，不得有仅悬停信息，不得缺少标签或 alt 文本，不得有焦点陷阱，不得有仅靠颜色的日历状态，在 390×844 或 1440×900 下不得有控制台错误。
- 不要忽略 prefers-reduced-motion，不要将核心内容隐藏在动画后面，也不要添加无法禁用的不必要 3D、视差、自动播放轮播、循环装饰或平滑滚动。

---
— Prompt by VibeFather · https://vibefather.ai/t/private-tutor-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
