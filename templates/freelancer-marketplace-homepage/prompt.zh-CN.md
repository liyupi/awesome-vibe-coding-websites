> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 自由职业者市场首页（Freelancer Marketplace Homepage）

请完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个原创的四页市场网站，[BRAND] 是一个虚构的目录，通过 [MARKET_FOCUS] 连接 [AUDIENCE]。默认品牌是 Workkind，位于 [LOCATION]，主标题为 [HERO_HEADLINE]。包含一个精致的首页、一个由查询驱动的人才类别页面、个人资料视图，以及一个四步发布项目的体验。每个人物、公司、评分、评价、价格和可用性说明均为虚构的示例内容。

- 受众：主要受众是 [AUDIENCE]。对于默认设置，这意味着 [LOCATION] 及其周边的小型工作室创始人、初创企业运营者以及独立创意或技术专家。对比较帮助的客户和决定是否加入的自由职业者，要以同样清晰的方式沟通。
- 目标：帮助访客从宽泛的需求转向相关的示例自由职业者，理解市场的双方，并组装一份有用的项目简介。搜索、筛选、排序、个人资料链接、本地草稿持久化、简介复制和文本下载必须完全在浏览器中工作。
- 语气：温暖、能干、平实、人性化。倾向于具体的技能和实际期望，而非市场炒作。绝不暗示虚构的个人资料、评分、公司、可用性或提交内容是真实的。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：motion（MIT）、lucide-react（ISC）、@fontsource-variable/fraunces（OFL）、@fontsource-variable/inter（OFL）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置：
  - 将 Vite 的 base 设为 './'，并在生产配置中禁用 source map。
  - 为 index.html、category.html、profile.html 和 post-project.html 配置 Vite 多页面输入；每个 HTML 文件加载同一个带类型的 React 入口，由该入口根据 window.location.pathname 选择页面。
  - 使用 Tailwind 处理布局和状态样式，并用一个小型 CSS 文件处理令牌（tokens）、关键帧、焦点环、图像处理和减少动态效果（reduced-motion）的覆盖样式。
  - 将所有由变量派生的文案、导航标签、分类、个人资料、作品集条目、FAQ、筛选选项和表单选项保留在 src/content.ts 中；每个视图都从 [BRAND]、[MARKET_FOCUS]、[AUDIENCE]、[HERO_HEADLINE] 和 [LOCATION] 派生，而不是在组件中散落仅含默认值的文案。
  - 从各自的 Fontsource 包中导入 Fraunces Variable 和 Inter Variable，并在 Tailwind 主题中声明字体族。
  - 使用 URLSearchParams 处理搜索、分类、个人资料和预选自由职业者状态；无需路由包。
  - 仅在浏览器内存或 localStorage 中存储项目表单草稿和已关闭的移动菜单状态；包含一个可见的“清除草稿”操作。
  - Maya Reed（id 为 maya）的默认个人资料数据：分类为 Design，remoteCollaboration 为 true，简介为 'Maya turns early, tangled ideas into identity systems that small teams can actually use. Her calm workshops connect verbal direction, visual principles, and a practical first rollout.' 概念项目：'Alder & Field identity — a warmer but still precise system for a landscape studio'、'Papercup Pantry packaging — a flexible shelf language for a fictional neighborhood provisions brand' 和 'Stillwater Journal launch — an editorial identity and rollout kit for an invented independent publication'。
  - Theo Park（id 为 theo）的默认个人资料数据：分类为 Development，remoteCollaboration 为 true，简介为 'Theo builds approachable front ends where motion supports the content and the component system stays easy to maintain. He is at his best translating a strong visual idea into responsive, accessible product UI.' 概念项目：'Pollen analytics dashboard — a legible responsive reporting interface for an invented research tool'、'Common Table ordering flow — an accessible menu and cart prototype for a fictional supper club' 和 'Waypoint UI kit — a compact component library with interaction and usage notes'。
  - Inés Alvarez（id 为 ines）的默认个人资料数据：分类为 Writing 和 Business Support，remoteCollaboration 为 true，简介为 'Inés helps thoughtful teams say the useful thing clearly. She combines customer interviews, message architecture, and editorial systems, then leaves writers with practical guidance rather than a static document.' 概念项目：'Nolla Home message map — a plain-spoken positioning system for an invented modular furniture studio'、'Good Measure onboarding — a supportive email and in-product copy sequence for a fictional habits service' 和 'Fieldnote editorial desk — a repeatable interview and publishing workflow for an imagined research collective'。
  - Owen Bennett（id 为 owen）的默认个人资料数据：分类为 Video & Motion，remoteCollaboration 为 false，简介为 'Owen creates compact motion languages for products and places, with an emphasis on timing, transitions, and stories that remain clear without sound. His process moves from frame studies to a reusable motion toolkit.' 概念项目：'Lantern House wayfinding — a restrained animated signage study for an invented arts venue'、'Daybreak product loop — a twelve-second feature story for a fictional morning-planning app' 和 'Small Planet title sequence — an editorial frame system for an imagined short documentary'。
  - Amara Rao（id 为 amara）的默认个人资料数据：分类为 Marketing，remoteCollaboration 为 true，简介为 'Amara plans measured launches for small, useful products. She connects audience research, channel choices, and lifecycle messages so a team can learn from the work instead of chasing every new tactic.' 概念项目：'Mellow Workshop launch — a focused waitlist and referral plan for an invented creative class platform'、'Open Pantry lifecycle — a helpful retention sequence for a fictional recipe club' 和 'Little Signal campaign — a three-channel experiment plan for an imagined family podcast'。
  - 使用两个互锁的圆角矩形，以内联 SVG 创建一个原创的抽象品牌标志；将其与 [BRAND] 字标搭配使用，不要模仿现有标志。

## 变量
- [BRAND] — 市场名称（默认：“Workkind”）。一个虚构的、简短的市场名称，与任何真实服务无关。
- [MARKET_FOCUS] — 人才市场（默认：“独立创意与技术人才”）。专业领域；据此重写类别、个人资料、技能和示例。
- [AUDIENCE] — 双边受众（默认：“小型团队与独立专业人士”）。描述招聘方和提供服务方这两类人群。
- [HERO_HEADLINE] — 首页标题（默认：“Good work starts with the right people.”）。一句简洁、温暖的承诺，契合所选人才市场。
- [LOCATION] — 所在地（默认：“Portland, Oregon”）。一个虚构的市场总部所在地；用于首屏辅助文案和页脚细节。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/freelancer-marketplace-homepage（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- Paper `#F5F1E8` — 主页面背景和充裕的编辑式留白
- Cream `#FFFDF8` — 卡片、搜索面板、表单表面和页头背景
- Forest Ink `#183A32` — 标题、正文强调、主按钮和深色页脚
- Slate Green `#64736C` — 次要文案、元数据和未激活控件
- Coral `#D86F4B` — 小面积高亮、激活标签、评分点缀和品牌标识；此颜色上绝不使用白色文字
- Sage `#DDE8D5` — 选中状态、信息面板和步骤进度填充
- Line `#D6DDD3` — 细线边框、分隔线、输入框轮廓和卡片边界

### 字体排印（Typography）
- 展示和编辑式标题：Fraunces Variable（OFL），字重 500/600/700
- 正文、导航、表单、卡片和元数据：Inter Variable（OFL），字重 400/500/600/700

### 布局与动效（Layout & motion）
- 间距：使用 4px 基础比例，内容容器最大宽度 1280px，桌面端边距 40px。桌面端区块垂直内边距 104px，紧凑目录区块 64px，移动端区块 64px、边距 20px。Hero 使用 12 列网格，列间距 64px。卡片内部使用 20–24px；表单字段垂直内边距 12px、水平内边距 16px。
- 圆角：卡片使用 18px，摄影面板和主要提示框使用 24px，输入框和按钮使用 12px，仅标签和紧凑状态胶囊使用全圆角。阴影保持稀疏：仅浮动搜索面板和移动端菜单使用一层柔和的高度阴影 0 16px 50px rgba(24,58,50,0.10)。
- 动效：初始加载时，Hero 文案在 500ms 内淡入并向上位移 18px，随后照片以 24px 的 clip-path 内缩在 650ms 内展开；仅对这两组做错峰。
- 动效：主要首页区块进入视口时一次性显现，向上位移 16px，缓动 450ms；绝不隐藏核心文案等待 JavaScript。
- 动效：为分类标签、个人资料卡箭头和按钮提供 160–200ms 的颜色、边框和 2px 方向性变换；筛选更新时结果在 180ms 内交叉淡入，不产生布局跳动。
- 动效：项目表单以 220ms 的 12px 水平淡入推进，并动画化进度填充；将焦点移至新步骤标题以保持焦点。
- 动效：在 prefers-reduced-motion 下禁用平滑滚动、显现、视差和非必要过渡；所有内容和控件保持立即可见。
- 图像：使用六张本地托管、生成的编辑式照片，作为一次连贯拍摄：温暖的奶油色室内、森林绿和陶土色服装或道具、自然窗光、真实的皮肤质感、柔和的胶片颗粒和简洁的构图。Hero 是一个带有环境空间的宽幅协作场景，绝不是紧凑的面部特写。五张自由职业者图像是明确虚构的成年人的自然工作肖像，年龄和族裔多样，不 resemblance 任何真实个人。个人资料卡使用一致的 3:4 裁剪，Hero 使用 4:3 裁剪。作品集缩略图是原创 CSS 和 SVG 构图，不是额外照片。仅使用 Lucide 图标，不使用第三方品牌标识。

## 页面与区块
### 市场首页（`index.html`）
1. **共享页头与移动端导航** — 粘性页头，包含原有的互锁圆角矩形标志、[BRAND] 文字标识、链接至 ./category.html 的 Find talent、链接至 ./index.html#how-it-works 的 How it works、链接至 ./index.html#for-freelancers 的 For freelancers，以及一个链接至 ./post-project.html 的深色 Forest Ink（森林墨色）Post a project 按钮。相同的页头和导航出现在每个页面上，当前页面通过字重和一个小珊瑚色圆点来指示，而非使用大型激活标签。
   布局：桌面端高 72px，位于半透明 Cream（奶油色）栏内，底部有 Line（线条色）边框和微妙的背景模糊。桌面导航靠右，间距 28px。在 390px 宽度下显示品牌标识和一个 44px 的菜单图标按钮；展开面板包含全部四个链接，位于页头下方的 Cream 卡片中，选择后或按 Escape 键关闭。
   动效：页头背景在滚动 16px 后变得稍微更不透明。移动端菜单在 180ms 内淡入并下移 8px；无动画粘性缩放。
2. **编辑式搜索主视觉** — 小型大写眉题 'INDEPENDENT TALENT, THOUGHTFULLY MATCHED'。H1 为 [HERO_HEADLINE]，默认 'Good work starts with the right people.' 辅助文案：'Meet [MARKET_FOCUS] for thoughtful collaborations, clear scopes, and work that feels like a good fit from the start. Browse from [LOCATION] and beyond.' 主搜索询问 'What do you need help with?'，占位符为 'Try brand identity, a website, or launch copy'，一个默认选中 All categories 的类别选择器，以及一个 Find your freelancer 按钮。其下方显示六个类别标签：Design、Development、Writing、Marketing、Video & Motion 和 Business Support。提交搜索跳转至 ./category.html?q=<encoded query>&category=<encoded category>；每个标签跳转至其对应的类别查询。
   布局：桌面端 12 列主视觉，文案和搜索跨 7 列，4:3 的 hero-studio.webp 照片跨 5 列，两者垂直居中。H1 设置为 clamp(48px,5.2vw,76px)，行高 0.96，每行最多 10 个单词。搜索表单是一个 Cream 悬浮面板，在其左下边缘与照片重叠 40px；类别标签在下方以两行松散排列换行。移动端依次堆叠文案、搜索、标签、照片；移除重叠，使用 42px 的 H1，并使搜索字段全宽。
   动效：使用指定的主视觉文案和照片入场效果。类别标签悬停时上浮 2px；主视觉照片保持静止。
3. **精选自由职业者画廊** — 标题 'A good fit is more than a skill match.' 介绍：'Compare craft, communication style, and the shape of a typical collaboration.' 添加可见标签 'Fictional profiles · sample ratings and rates'。Maya Reed 是西雅图的品牌设计师，时薪 $68，来自 23 条示例评价的评分为 4.9，技能为 Brand identity 和 Art direction，使用 freelancer-maya.webp。Theo Park 是奥斯汀的前端开发者，时薪 $74，来自 18 条示例评价的评分为 5.0，技能为 React 和 Design systems，使用 freelancer-theo.webp。Inés Alvarez 是芝加哥的内容策略师，时薪 $58，来自 31 条示例评价的评分为 4.8，技能为 Messaging 和 Editorial，使用 freelancer-ines.webp。Owen Bennett 是丹佛的动效设计师，时薪 $82，来自 27 条示例评价的评分为 4.9，技能为 Motion identity 和 Product film，使用 freelancer-owen.webp。Amara Rao 是布鲁克林的增长营销人员，时薪 $64，来自 21 条示例评价的评分为 4.9，技能为 Launches 和 Lifecycle，使用 freelancer-amara.webp。每张卡片链接至 ./profile.html?id=<id>，使用 id 分别为 maya、theo、ines、owen 和 amara。下方 CTA：Browse all sample profiles。
   布局：桌面端使用 12 列非对称马赛克布局：Maya 的特色卡片跨 6 列和两行，带有高肖像和两行简介；其他四张卡片各跨 3 列，呈 2×2 排列。每张卡片都有可见的评分、位置、时薪、两个技能胶囊和一个小箭头。平板端使用两个等宽列；移动端使用单列，肖像裁剪高度为 180px，而非水平轮播。
   动效：在区块内以 60ms 的间隔交错卡片入场。悬停时，仅肖像缩放至 1.025，箭头移动 3px；文本从不移动。
4. **双向如何运作** — 区块 id 为 how-it-works。眉题 'ONE MARKETPLACE, TWO CLEAR PATHS'。标题 'Clarity on both sides of the brief.' 客户面板标题为 For clients，步骤：01 Share the brief — 'Tell us what you are making, where you are stuck, and what a useful outcome looks like.' 02 Compare the fit — 'Review relevant craft, working preferences, sample rates, and portfolio details side by side.' 03 Start with alignment — 'Use the brief to agree on scope, communication, and the first milestone.' 自由职业者面板 id 为 for-freelancers，标题为 For freelancers，步骤：01 Show how you work — 'Lead with a focused profile, selected work, and the problems you solve best.' 02 Choose aligned briefs — 'Look for scope, timing, and budget that match the way you want to work.' 03 Set expectations early — 'Turn a good conversation into clear deliverables and a calm first step.'
   布局：在 Sage（鼠尾草色）调的全宽色带上并排两个大面板：客户面板为 Cream，自由职业者面板为 Forest Ink 配 Cream 文字。每个面板有三个水平编号步骤，由细线分隔，并有一个紧凑的操作链接：Post a project 链接至 ./post-project.html 或 Explore sample profiles 链接至 ./category.html。移动端堆叠面板，无水平滚动。
   动效：面板一起显现，然后其步骤以克制的 50ms 间隔交错出现。不要使用标签页、自动播放或固定滚动。
5. **项目简报标注** — 标题 'A better first brief makes better work possible.' 文案：'You do not need every answer. Start with the outcome, the constraints, and what you already know.' 显示三个带有原创线条图标的紧凑提示：Outcome — 'What should be different when this is done?'，Scope — 'Which deliverables matter first?'，Working style — 'How often should we check in?' CTA Build your project brief 链接至 ./post-project.html，次级链接 See how profiles work 跳转至 ./profile.html。
   布局：一个 24px 圆角的 Coral（珊瑚色）调 Cream 标注框，左侧文案跨 7 列，右侧 5 列堆叠三个提示卡片。在 'better first brief' 下方添加一个原创的松散手绘 SVG 下划线。移动端将提示放在 CTA 之后，并保持所有按钮全宽。
   动效：SVG 下划线在可见时以 500ms 绘制一次。提示卡片无浮动动画。
6. **实用 FAQ** — 标题 'Before you begin.' 四个无障碍手风琴：How does matching work? — 'Start with a category or a search phrase, then compare each sample profile’s skills, portfolio, rate, and working notes.' What should a project brief include? — 'A useful outcome, the first deliverables, a realistic range, and any constraints your collaborator should know.' Can I browse before posting? — 'Yes. Every sample category and profile is available without an account.' Is this a live marketplace? — 'No. This is a fictional website demonstration. Profiles, ratings, availability, and briefs are sample content; nothing is sent to a server.' 一次只打开一个答案，初始时第一个打开。
   布局：两列区块，左侧 4 列为粘性标题，右侧 8 列为手风琴列表。问题为 18px 半粗体，带有 Plus 图标，旋转至类似 X 的关闭状态；答案每行不超过 62 个字符。移动端移除粘性定位。
   动效：手风琴高度和透明度在 200ms 内动画，在减少动态效果下即时展开。
7. **共享页脚与演示披露** — 页脚标题 'Find the people who make the work feel possible.' 包含 [BRAND]、'An independent talent marketplace concept rooted in [LOCATION].'、导航至 ./category.html、./post-project.html、./index.html#how-it-works 和 ./index.html#for-freelancers，以及一个纯文本示例类别列表。添加披露：'Fictional marketplace demo. People, companies, ratings, reviews, and availability are invented. Project drafts stay in your browser and are never submitted.' 包含可选的 [CREDIT] 链接，但不要使其突出。
   布局：Forest Ink 页脚配 Cream 文字，左侧大型 Fraunces 标题，右侧三个紧凑链接组。顶部 CTA 链接至 ./post-project.html。底部披露横跨全宽，位于微妙的 Line 分隔线上方。移动端堆叠所有组，间距 32px，并保持可读的最小 14px 文本。
   动效：页脚无循环或滚动动效；链接使用简单的下划线显现。

### 浏览人才类别（`category.html`）
1. **类别介绍与搜索** — 从查询字符串中读取 category 和 q。没有 category 时，默认使用 Design，而不是显示空状态。眉题（Eyebrow）为 'BROWSE [MARKET_FOCUS]'。H1 动态显示 '<Category> specialists with a thoughtful approach'，对于 All 类别则显示 'Find your freelance collaborator'。辅助文案根据所选类别和 [AUDIENCE] 进行调整。重复首页的关键词搜索和类别选择，提交时保留当前值。在结果计数附近显示 'Sample directory — all people and ratings are fictional'。
   布局：共享页头下方为紧凑的 Cream（奶油色）主视觉区，H1 桌面端最大 760px、字号 52px，移动端 38px。将搜索面板放在文案下方，不要与任何照片重叠。桌面端将此介绍区高度控制在 420px 以内，以便结果出现在首屏。
   动效：所选类别变化时使用简单的 240ms 淡入淡出；不要在每次按键时重播完整的主视觉入场动画。
2. **可筛选的个人资料结果** — 使用 src/content.ts 中相同的五个带照片的首页个人资料，为 Inés 分配 Business Support 作为第二类别，使每个首页标签都有对应的结果。筛选器：类别标签、最低评分选择、最高时薪范围 $50 到 $90、Remote collaboration 复选框，以及排序选项 Recommended、Rate: low to high 和 Rating: high to low。结果计数、活动筛选标签、个人资料顺序和空状态立即更新。空状态显示 'No sample profiles match those filters yet'，并带有 Clear filters 按钮。每个结果链接到 ./profile.html?id=<id>；不带 id 的 profile.html 默认显示 Maya。
   布局：桌面端网格为 3 列筛选栏和 9 列结果区域。筛选栏在页头下方粘性定位，按标签分组，不隐藏在模态框中。结果每行两张等宽卡片，采用横向内容排列：肖像或作品图在左，详情在右。移动端提供 Filters 按钮，在单列结果上方打开内联可折叠面板，并在筛选器激活时提供常驻的 Clear 操作。
   动效：更新后的结果在 180ms 内交叉淡入淡出，并通过 aria-live 区域播报新的计数。不要对范围滑块做动画，也不要用大幅移动重新排列卡片。
3. **类别专属项目提示** — 动态标题 'Not sure which <Category> profile fits?' 文案：'Start with the outcome and a few constraints. The brief builder will help you organize the rest.' 按钮 Start a project brief 链接到 ./post-project.html?category=<current category>。
   布局：全宽 Sage（鼠尾草绿）色带，文案在左，深色按钮在右，按钮后方为三张重叠简报卡片的原创 SVG 组合。移动端堆叠，避免额外摄影图。
   动效：简报卡片 SVG 图层仅在悬停时分离 4px。

### 自由职业者个人资料详情（`profile.html`）
1. **个人资料概览** — 从查询字符串读取 id，缺失或无法识别时显示 Maya Reed。显示所选个人资料的头像（如有）、姓名、专长、位置、示例评分和评论数、时薪、两到四项技能、简洁传记，以及静态示例工作备注，如 'Prefers a written brief' 和 'Weekly check-in'。按钮 Start a project with <first name> 链接到 ./post-project.html?freelancer=<id>。次要按钮 Back to talent 链接到 ./category.html。在姓名附近明显位置添加 'Fictional profile · sample details'。
   布局：面包屑导航位于 12 列概览上方。左侧 5 列包含 3:4 头像，24px 圆角；右侧 7 列包含 56px 的姓名、角色、传记、费率、技能和 CTA 行。没有照片的其他个人资料使用基于其专长的大型原创 SVG 构图。移动端依次堆叠图片、身份信息、操作按钮，然后是详情，H1 为 40px。
   动效：图片和文字使用一次克制的共享入场动画；不显示粉丝数、动画评分或在线指示器。
2. **精选作品与协作备注** — 显示三个与所选人物相关的虚构作品集研究，每个包含具体项目标题、一句话挑战、贡献和交付物列表；全部标注为 'Concept work'。使用原创 CSS/SVG 图形：设计类用身份网格，开发类用界面线框图，写作类用编辑排版，营销类用活动图表，动效类用帧序列。旁边设协作面板，列出 Typical first milestone、Best-fit projects、Preferred communication 和 Sample capacity，使用定性措辞如 'One focused project at a time'，绝不显示实时可用性。
   布局：三张作品集卡片排成一行，4:3 图形在上、文字在下，随后是两列传记和协作面板。移动端作品集卡片堆叠；SVG 文字仅为示意，不得包含可读的品牌名称。
   动效：作品集图形在区块进入时以 12px 裁剪上升效果显现。无需灯箱。
3. **示例反馈与下一步** — 两张明确标注的 Sample feedback 卡片，为所选个人资料撰写，包含虚构客户名字和虚构公司名称，如 'Elliot at Alder & Field' 和 'Priya at Small Hours Studio'。不要使用真实公司名称或可验证的声明。以标题 'Have a project that fits <first name>’s work?' 和 CTA Build a brief 结尾，链接到预选的项目表单。
   布局：两张等宽引用卡片位于居中的 Cream（奶油色）CTA 面板上方，面板 24px 圆角。使用 Coral（珊瑚色）的超大装饰引号，不要使用客户照片。移动端堆叠引用卡片，CTA 保持可见，不使用粘性定位。
   动效：引用卡片一起淡入；CTA 按钮仅使用标准悬停位移。

### 发布项目简报（`post-project.html`）
1. **简报构建器介绍** — 眉题（Eyebrow）为“A LOCAL, FOUR-STEP BRIEF BUILDER”。H1 为“Start with what you know.”。文案：“Shape the essentials now. You can refine the details with your freelancer later.”。表单前的声明：“Demo only: this brief is saved in your browser, never sent to [BRAND] or any freelancer.”。读取 freelancer 和 category 查询参数，并在有效时预选匹配的示例人员或类别。
   布局：窄幅居中标题位于 12 列工作区上方：表单占 8 列，常驻简报摘要占 4 列。在移动端，摘要变为表单上方的可折叠详情面板。将主要的“Next step”按钮保持在正常文档流中，绝不要做成覆盖屏幕的粘性栏。
   动效：介绍淡入一次。摘要更新时无动效。
2. **四个经过验证的表单步骤** — 进度标签为 01 Basics、02 Scope、03 Contact、04 Review。Basics 要求填写项目标题、类别，以及至少 40 个字符的项目成果文本域；显示辅助文本“What should be different when this work is complete?”。Scope 要求填写交付物复选框、预算单选组（$1k–$3k、$3k–$6k、$6k–$10k、Not sure yet）、时间线选择（2–4 weeks、1–2 months、3+ months、Flexible）以及工作方式选择（One weekly call、Async updates、A mix of both）。Contact 要求填写姓名和语法有效的电子邮件，以及可选的 Company 和 Notes；说明联系方式仅用于标记可下载的演示简报。Review 渲染每个答案、所选示例自由职业者（如有），以及一个已勾选的确认项：“I understand this is a local demo and nothing will be submitted.”。在点击“Next step”时进行验证，显示内联消息并将焦点移到第一个无效字段。Back 保留值。Save draft 写入 localStorage；Clear draft 在内联确认后将其移除。
   布局：奶油色表单卡片，带有 Sage 进度轨道和四个编号标签。每个步骤都有一个 36px 的 Fraunces 标题、输入框上方清晰的字段标签、16px 的垂直字段节奏，以及底部的 Back / Next 操作。Review 使用定义列表行，并带有返回相关步骤的 Edit 链接。在移动端，进度标签缩短为数字，当前标签在表单上方可见地公布。
   动效：应用指定的 220ms 水平步骤淡入和进度填充。焦点移动到新步骤标题，验证错误出现时无抖动。
3. **本地确认与导出** — 在验证和确认后，将表单替换为成功面板，标题为“Your project brief is ready.”。文案：“Nothing was sent. Your demo brief is saved only in this browser.”。显示紧凑摘要和操作：Copy brief、Download .txt、Edit brief 和 Start another。Copy 将纯文本版本写入剪贴板，并提供回退选择；Download 创建一个本地 Blob，以通用 project-brief slug 命名；Start another 在确认后清除已保存的草稿。不要显示虚假的项目 ID、提交时间戳、响应时间承诺，或声称已联系自由职业者的成功消息。
   布局：居中的奶油色确认卡片，带有由两个互锁圆角形状组成的原创 SVG 对勾，下方为摘要，以及两行按钮。将仅本地声明放在导出操作旁边。移动端按钮为全宽。
   动效：一次 300ms 的对勾描边动画和内容淡入；没有彩纸或循环庆祝。

## 资产（Assets）
- 图片（image）：主视觉协作图（Hero collaboration image）：https://media.vibefather.ai/assets/3f5d2967-68c6-4170-b1c4-c8d4e3b43075/hero-studio.webp 已下载至 public/images/hero-studio.webp。默认 alt：'Four freelance collaborators exchanging ideas around a sunlit studio table'。用于首页主视觉区（hero）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录相同的署名信息。
- 图片（image）：Maya 头像图（Maya profile image）：https://media.vibefather.ai/assets/3f5d2967-68c6-4170-b1c4-c8d4e3b43075/freelancer-maya.webp 已下载至 public/images/freelancer-maya.webp。默认 alt：'Brand designer reviewing sketches at a studio desk'。用于首页、分类页和个人资料页上的 Maya Reed。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录相同的署名信息。
- 图片（image）：Theo 头像图（Theo profile image）：https://media.vibefather.ai/assets/3f5d2967-68c6-4170-b1c4-c8d4e3b43075/freelancer-theo.webp 已下载至 public/images/freelancer-theo.webp。默认 alt：'Front-end developer working beside a bright studio window'。用于首页、分类页和个人资料页上的 Theo Park。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录相同的署名信息。
- 图片（image）：Inés 头像图（Inés profile image）：https://media.vibefather.ai/assets/3f5d2967-68c6-4170-b1c4-c8d4e3b43075/freelancer-ines.webp 已下载至 public/images/freelancer-ines.webp。默认 alt：'Content strategist making notes at a warm paper-covered desk'。用于首页、分类页和个人资料页上的 Inés Alvarez。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录相同的署名信息。
- 图片（image）：Owen 头像图（Owen profile image）：https://media.vibefather.ai/assets/3f5d2967-68c6-4170-b1c4-c8d4e3b43075/freelancer-owen.webp 已下载至 public/images/freelancer-owen.webp。默认 alt：'Motion designer reviewing frame studies in a quiet studio'。用于首页、分类页和个人资料页上的 Owen Bennett。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录相同的署名信息。
- 图片（image）：Amara 头像图（Amara profile image）：https://media.vibefather.ai/assets/3f5d2967-68c6-4170-b1c4-c8d4e3b43075/freelancer-amara.webp 已下载至 public/images/freelancer-amara.webp。默认 alt：'Growth marketer planning a campaign beside a bright worktable'。用于首页、分类页和个人资料页上的 Amara Rao。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；在 ASSETS.md 中记录相同的署名信息。
- 图标（icon）：Search、ArrowRight、MapPin、Star、Check、Plus、Menu、X、SlidersHorizontal、Download、Copy 和 ChevronLeft 使用 lucide-react ISC 图标。品牌标识、作品研究、需求卡片和确认标记用 SVG/CSS 在本地绘制。不要使用第三方 logo 或来自现有市场的可识别图标系统。
- 字体（font）：通过 @fontsource-variable/fraunces 和 @fontsource-variable/inter 自托管 Fraunces Variable 和 Inter Variable，两者均为 OFL。在本地导入包 CSS，并在 ASSETS.md 中列出包名和许可证；绝不请求字体 CDN。
- 图片（image）：ASSETS.md 必须列出每一张生成的图片，包含其本地路径、准确的源 URL、署名 'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template' 以及用途。所有其他图形均为原创 SVG/CSS，无需外部图片来源。

## 禁止事项
- 不得使用或模仿任何真实市场平台的名称、标志、口号、界面文案、精确配色、专有插图或自定义图标。
- 不得使用真实人物、可辨认的肖像、真实的自由职业者简介、真实客户公司或可验证的评价；每一份个人资料、评分、评论、价格、公司和工作记录均为虚构的示例内容。
- 不得声称真实的市场规模、经核实的收入、有保证的结果、实时在线状态、当前可用性、响应时间、成功安置或实际项目提交。
- 不得添加后端逻辑、API 路由、数据库、身份验证、支付、消息传递、身份验证、外部表单端点、分析或第三方 API 调用。搜索、筛选、个人资料、草稿存储和导出必须保持客户端运行。
- 不得热链接资源，也不得从 CDN 加载脚本、样式、图标、图像或字体。将六张指定的生成图像下载到 public/images，并在网站中使用本地路径。
- 不得使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务、CC BY-NC 或 CC BY-SA 素材、商业字体，或任何超出许可许可证范围的依赖项。
- 不得生成可辨认的名人或公众人物肖像。生成的人物为虚构成年人，年龄和族裔多样，照片中不得包含标志、可读屏幕、水印或文字。
- 不得显示当前日期、时间戳、动态变化的可用性、虚假项目 ID 或虚假提交状态。使用相对时间线和明确标注的静态示例详情。
- 不得让 profile.html 缺少有效 id，或让 category.html 缺少有效 category 而处于空白或未找到状态；分别默认使用 Maya Reed 和 Design，同时保持控件可用。
- 不得使用裸目录链接。每个内部导航目标必须是显式的 HTML 文件，例如 ./index.html、./category.html、./profile.html 或 ./post-project.html，并在指定位置使用哈希锚点或查询参数。
- 不得输出会破坏嵌套静态托管的绝对资源路径。使用 Vite base './'、相对构建资源、压缩的生产文件，且不生成 source map；不得将 src/ 复制到 dist/，并保持 dist/ 在 20 MB 以下。
- 不得添加 SEO 元数据、Open Graph 标签、JSON-LD、站点地图或关键词堆砌的文案。包含 [BRAND] 的普通文档标题和本地原创 favicon 即可。
- 不得让任何核心内容依赖于动画、悬停、自动播放或仅 JavaScript 可见性。遵循 prefers-reduced-motion，保留键盘焦点，并在 1440×900 和 390×844 下保持零控制台错误。
- 不得隐藏仅本地表单的披露信息或模拟网络成功。复制和下载 .txt 必须基于当前简报运行，清除草稿和开始另一个必须按所述删除本地草稿。
- 不得在 src/content.ts 之外硬编码仅默认名称或细分文案。当 [BRAND]、[MARKET_FOCUS]、[AUDIENCE]、[HERO_HEADLINE] 或 [LOCATION] 变化时，连贯地重写个人资料、类别、示例、替代文本、标签和 FAQ 答案。
- 除可选的 [CREDIT] 页脚链接外，不得在渲染网站的任何位置提及 VibeFather；所需的生成致谢应放在 ASSETS.md 中，而不是可见的市场文案中。

---
— Prompt by VibeFather · https://vibefather.ai/t/freelancer-marketplace-homepage · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
