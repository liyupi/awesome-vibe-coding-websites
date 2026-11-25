> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 讨论论坛网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个虚构爱好社区的社区论坛，一个业余天文俱乐部，不同于问答网站：带颜色的分类；按最新、热门和未回复排序的主题列表；带引用、回应和投票的嵌套回复；带信任徽章的用户个人资料；通知；带 Markdown 预览的编辑器；以及管理工具（置顶、锁定、举报队列）。预置 40 个真实主题。午夜色 #101935、星黄色 #FFD166 和星云粉 #EF476F，置于柔和的白色卡片上。

- 受众：希望有一个对话场所的俱乐部委员会和社区组织者，以及寻找可在此基础上构建的论坛界面的开发者。
- 目标：从第一个屏幕起就感觉像一个活跃的俱乐部，然后让访客阅读一个主题、在投票中投票、回复或发起一个主题。
- 语气：友好而具体，像由成员撰写的俱乐部通讯：真实的问题、真实的回答，没有企业式的社区腔调。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：motion（MIT）、lucide-react（ISC）、@fontsource-variable/epilogue（OFL-1.1）、@fontsource-variable/albert-sans（OFL-1.1）、@fontsource/dm-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - vite.config.ts：base './'，build.sourcemap false，src/ 中的任何内容都不会被复制到 dist/。
  - tailwind.config.js：扩展颜色 midnight #101935、midnightSoft #1C2650、star #FFD166、pink #EF476F、ink #1B2140、muted #5B6280、card #FFFFFF、page #EEF1F8、line #DFE3EF、teal #118AB2、green #0E9F7A、violet #7B61FF、orange #E07A1F；fontFamily display 'Epilogue Variable'、sans 'Albert Sans Variable'、mono 'DM Mono'。
  - 一个小型哈希路由器读取 location.hash：#/（首页）、#/category、#/category/<slug>、#/thread、#/thread/<slug>、#/users、#/users/<handle>、#/notifications、#/moderation；不带参数的路由显示第一项；路由变化时滚动到顶部。不使用路由器库。
  - src/data/seed.ts 保存 40 个主题、14 名成员、分类、投票和举报队列；src/store/useForum.ts 是一个 reducer，包含所有操作（回复、反应、投票、将通知标记为已读、置顶、锁定、举报、隐藏帖子、警告、忽略），并将访客的更改持久化到 localStorage 中，键为 [BRAND_SLUG]-forum，其中 [BRAND_SLUG] 是 [BRAND] 转为小写并用连字符连接。
  - src/lib/markdown.ts 是一个小型渲染器，用于 **bold**、*italic*、`code`、项目符号和编号列表、链接、> 引用和段落；输入中的所有 HTML 都会被转义。不使用 Markdown 库。
  - 页眉的星图是由 src/lib/stars.ts 中固定的星坐标和星座线列表生成的内联 SVG；不使用图像文件。
  - 所有界面文案、分类、主题文本、成员、徽章和举报原因都以类型化对象的形式位于 src/data/seed.ts 和 src/content.ts 中；组件从不硬编码文案。

## 变量
- [BRAND] — 社区名称（默认：“Northfield Astronomical Society”）
- [CITY] — 城镇或城市（默认：“Northfield”）
- [FEATURED_THREAD] — 置顶欢迎帖的标题（默认：“Start here: how this forum works”）
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/discussion-forum-website（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- midnight `#101935` — 页眉、发帖按钮文字、版主徽章、星黄色背景上的主文字
- midnightSoft `#1C2650` — midnight 上的悬停行、页脚
- star `#FFD166` — 星黄色：New thread 按钮、活动标签下划线、页眉图表中的星星、高亮；始终搭配 midnight 文字
- pink `#EF476F` — 星云粉：铃铛上的未读圆点、举报原因、锁图标、管理操作
- page `#EEF1F8` — 页面底色
- card `#FFFFFF` — 柔和白色卡片
- ink `#1B2140` — 文字
- muted `#5B6280` — 次要文字和时间戳
- line `#DFE3EF` — 卡片边框和分隔线
- teal `#118AB2` — 分类颜色：Telescopes & gear；Verified observer 徽章
- green `#0E9F7A` — 分类颜色：Observing reports
- violet `#7B61FF` — 分类颜色：Astrophotography；Top contributor 徽章
- orange `#E07A1F` — 分类颜色：Events & star parties；Event host 徽章
- gold `#A37A00` — 黄色分类的分类文字和圆点（白底上满足 AA）

### 字体排印
- 展示 / 标题和帖子标题：Epilogue Variable（OFL），字重 700/900
- 正文 / UI 和帖子文字：Albert Sans Variable（OFL），字重 400/500/600
- 等宽 / 时间戳、计数、用户名：DM Mono（OFL），字重 400/500

### 布局与动效
- 间距：页面 max-w-[1200px] px-6；卡片 rounded-[14px]，带 1px line 边框和 p-5；列表行 py-4，带 1px line 分隔线；8px 节奏。
- 圆角：卡片 14px；按钮 10px；标签和头像 rounded-full；输入框 10px。
- 动效：首页滚动显现：分类卡片淡入上移 20px，历时 350ms，错开 40ms，仅一次；内容默认可见。
- 动效：表情反应按下时缩放到 1.2 再恢复；计数立即更新。
- 动效：投票后 300ms，投票条动画过渡到新宽度。
- 动效：发帖标签和帖子排序标签以 150ms 淡入切换；移动端抽屉以 220ms 滑入。
- 动效：prefers-reduced-motion：所有变化立即完成。
- 图像：不使用照片或插画。头像是取自成员姓名的颜色圆形，配白色首字母；页眉带有一幅代码绘制的星图；图标来自 lucide。柔和白色卡片置于浅色页面之上、midnight 页眉之下，仅以星黄色和星云粉作为强烈点缀，外加每个分类一种颜色。

## 页面与区块
### 首页（`index.html`）
1. **页头（Header）** — 桌面端为一条 180px 高的午夜色横带，星空图横贯其上（约 90 颗星，三种大小，五条细星座线，星黄色，50% 不透明度）。顶行：字标 [BRAND]，Epilogue 900 20px 白色，带一个小黄色星形图标；导航：Categories、Latest、Members、Notifications（一个 lucide 铃铛，带粉色计数徽章 '3'）、Moderation；右侧：一个胶囊形按钮 'New thread'（星黄色填充，午夜色文字）。该行下方：H1 为 Epilogue 900 clamp(30px, 3.4vw, 48px) 白色 'Where [CITY] talks about the night sky.'，以及一行 white/70 的文字：'A friendly forum for telescope owners, naked-eye watchers and anyone who looks up.'
   布局：横带内容 max-w-[1200px]；星空图位于文字后方，在该处较淡。在 390px 宽度下，横带高 150px，该行在同一行内放置字标、铃铛和一个 lucide 菜单按钮，导航移入抽屉，'New thread' 变为右下角的圆形黄色浮动按钮。
   动效：星空图中的星星非常缓慢地闪烁（不透明度在 6 秒内从 0.6 到 1，错开进行）；在减少动效模式下为静态。
2. **分类（Categories）** — H2 'Categories'。六张卡片：'Getting started'（粉色圆点，'First telescopes, first questions'，7 个主题，最新 'Which eyepiece first for an 8-inch Dob?'）；'Telescopes & gear'（青色，'Scopes, mounts, eyepieces and DIY fixes'，9 个主题，最新 'Replaced the focuser on my 102ED'）；'Observing reports'（绿色，'What you saw, and how the sky was'，8 个主题，最新 'Saturday at the dark-site'）；'Astrophotography'（紫色，'Capturing and processing the night sky'，8 个主题，最新 'First attempt at the Orion Nebula'）；'Events & star parties'（橙色，'Meet-ups, public nights and car pools'，5 个主题，最新 'Autumn star party — sign-up'）；'Off-topic & clubhouse'（金色，'Books, coffee and how the club is run'，3 个主题，最新 'What are you reading?'）。每张卡片链接到 #/category/<slug>。
   布局：白色卡片上使用 Grid md:grid-cols-2 lg:grid-cols-3 gap-4；一个 10px 的彩色圆点，名称用 Epilogue 700 20px，描述 14px 弱化色，计数用等宽字体。
   动效：卡片错开淡入上移；悬停时上浮 3px。
3. **最新动态与侧边栏（Latest activity and sidebar）** — 左栏，H2 'Latest activity'：十个主题，最新的在前，每行包含分类圆点、标题（Epilogue 700 17px）、一行等宽字体显示作者 handle、'12 replies'、'184 views' 和 '8 minutes ago'，有未读回复的主题上带粉色 'NEW' 标签，置顶主题上带黄色图钉图标，锁定主题上带粉色锁图标。右栏，侧边栏：'Top contributors this month'，包含五位成员（头像、handle、等宽字体回复数、徽章）；'Coming up'，包含两个活动（'Autumn star party — Sat, sign-up open'、'Public night at the lake — volunteers needed'）；一行等宽字体统计 '1,280 members · 40 threads · 486 replies'。页头下方有一行文字：'You are signed in as Nova_Nate · moderator'。
   布局：lg:grid-cols-[68%_32%] gap-6；移动端侧边栏堆叠在列表下方，且仅显示贡献者卡片。
   动效：行悬停时显示浅色页面背景。

### 分类页（`#/category`）
1. **分类页头与排序标签（Category header and sort tabs）** — 显示 hash 中 slug 对应的分类；以 #/category 打开且无 slug 时显示第一个分类。一张白色卡片，带彩色圆点、Epilogue 900 36px 的名称、描述和一行等宽字体计数 '7 threads'。标签：Latest、Top、Unanswered；活动标签带 3px 星黄色下划线。Top 按回复数和反应数排序；Unanswered 显示无回复的主题（第一个分类中有两个，其他分类中有几个）。
   布局：py-8；标签高 40px。
   动效：切换标签时淡入淡出 150ms。
2. **主题列表（Thread list）** — 行：标题；其下为作者头像和 handle、一行等宽字体显示回复数和浏览量、最后回复时间，以及分类标签的小标签（'eyepieces'、'beginner'、'planetary'、'dso'、'processing'、'star party'）。置顶主题排在最前，带黄色图钉；锁定主题带粉色锁且无回复操作。在 'Getting started' 中：[FEATURED_THREAD]（置顶，14 条回复）、'Which eyepiece first for an 8-inch Dob?'（9）、'Is a 70 mm refractor useless?'（21）、'How do you find anything without a GoTo mount?'（6）、'Collimation scares me — a walkthrough for beginners'（0）、'Light pollution: what can I actually see from a city?'（17）、'Best free planetarium app?'（0）。其余五个分类包含其列出的主题，总计最多 40 个，在种子数据中完整写出：Telescopes & gear（'Dobsonian vs. SCT for a small balcony'、'Replaced the focuser on my 102ED — photos inside'、'Is a coma corrector worth it on an f/5?'、'Filter drawer or filter wheel?'、'Show us your field cart'、'A cheap DIY dew heater that actually works'、'Mount recommendations under $800'、'Binocular viewing: 15×70 or 20×80?'、'Eyepiece focal lengths — fill the gaps in my set'）；Observing reports（'Saturday at the dark-site: Saturn and a meteor'、'First light report: Messier 13 was stunning'、'Lunar 100 — 62 down'、'The occultation I almost missed'、'Three comets in one night'、'Nova in Delphinus — anyone confirmed?'、'Aurora visible from town last night'、'Double stars on a hazy evening'）；Astrophotography（'First attempt at the Orion Nebula (unguided)'、'Back-focus hell with a Newtonian — solved'、'Stacking 30-second subs vs. 120-second'、'Dew, frost and a dead battery: lessons'、'A cheap narrowband filter — worth it?'、'Tracking error after a meridian flip'、'Processing the North America Nebula, step by step'、'Phone through the eyepiece — better than I expected'）；Events & star parties（'Autumn star party — sign-up and directions'、'Club public night at the lake — volunteers needed'、'Perseids watch: carpool thread'、'Loaner telescope slots for the star party'、'Indoor meeting: member astroimage night'）；Off-topic & clubhouse（'What are you reading?'、'Coffee at the observatory — a monthly thing'、'Forum questions and suggestions'，已锁定）。
   布局：白色卡片；行 py-4，带 1px 分隔线；移动端计数换行到标题下方。
   动效：除悬停外无其他动效。

### 主题页面（`#/thread`）
1. **主题页头部** — 显示该 slug 对应的主题；不带 slug 以 #/thread 打开时显示 [FEATURED_THREAD]。面包屑 'Home / Getting started' 为弱化色；H1 使用 Epilogue 900，字号 clamp(26px, 3vw, 40px)；一行等宽字体文本 'Started by StarSlewSara · moderator · 14 replies · 1.2k views'；一个 'Moderate' 菜单（lucide moreHorizontal），包含 'Pin thread' 或 'Unpin thread' 以及 'Lock thread' 或 'Unlock thread'，因访客是版主而显示。
   布局：py-8；头部操作右对齐，移动端在标题下方换行。
   动效：菜单以 150ms 淡入。
2. **原帖与嵌套回复** — 原帖位于白色卡片上：头像、handle、徽章 chip、等宽时间（'3 months ago'），正文由 Markdown 渲染（标题、列表、引用）。在 [FEATURED_THREAD] 中，正文为：'Welcome to the forum. **Be curious and be kind.**'，后接四行列表（'Introduce yourself in Off-topic & clubhouse'、'Search before you ask — the answer is often already here'、'Post a report after an observing session, even a short one'、'Bring a friend to a star party'）以及引用 '> A telescope you actually use beats a better one in a box.'。回复最多嵌套两层，缩进使用 2px 的 line 颜色；引用其他回复的回复会在浅色块中显示引用内容及被引用的 handle。每个帖子都有以图标 chip 形式呈现的表态及计数 — lucide thumbsUp 'Helpful' 18、heart 'Thanks' 7、star 'Spot on' 4 — 以及一个 'Reply' 链接；点击表态会为访客切换该表态并改变计数。主题首屏显示原帖和至少三条回复，其中两条为嵌套回复，均在种子数据中完整写出。
   布局：帖子正文 max-w-[720px]，16px，行高 1.65；嵌套回复 max-w-[560px]；移动端嵌套仅使用单条 16px 缩进线。
   动效：表态按下时缩放 1.2；新回复以 200ms 淡入。
3. **投票** — 帖子内的投票，显示在主题 'Eyepiece focal lengths — fill the gaps in my set' 中：问题 'Which focal length should I add next?'，四个选项各带投票条和等宽百分比 — '6 mm' 42%、'12 mm' 27%、'24 mm' 19%、'Something else' 12% — 以及一行 '73 votes · poll closes in 6 days'。投票前每个选项是一个按钮；投票后投票条显示访客的选择并带黄色对勾，计数包含该票。
   布局：投票位于帖子内浅色页面底色面板上；投票条使用分类颜色，10px 高，rounded-full。
   动效：投票条以 300ms 动画过渡到新宽度。
4. **回复编辑器** — 位于底部：头像和 'Replying as Nova_Nate'，一个带等宽提示 'Markdown is supported' 的 textarea，以及 'Write' 和 'Preview' 标签页。Preview 使用项目自身的渲染器渲染 Markdown。'Post reply'（midnight 填充、白色文字）将回复作为嵌套回复追加到被回复的帖子并立即显示；'Cancel' 清空内容。锁定主题会显示粉色锁图标和 'This thread is locked.'，替代编辑器。
   布局：白色卡片；标签页位于 textarea 上方；移动端全宽，按钮在下方。
   动效：标签页切换以 150ms 淡入；新回复以 200ms 淡入。

### 成员资料（`#/users`）
1. **资料** — 显示该 handle 对应的成员；不带 slug 以 #/users 打开时显示 StarSlewSara。头部卡片：72px 头像，handle 使用 Epilogue 900 32px，来自种子数据的真实风格显示名（'Sara Lindqvist'），徽章以 chip 形式呈现 — Moderator（midnight 配黄色星标）、Verified observer（teal 对勾）、Top contributor（violet）、Event host（orange）、New member（弱化色）— 以及一行等宽文本 'Joined 3 years ago · 412 posts · 1,860 reactions helped'。一段简短简介。右侧：'Activity' 列表，显示该成员最近五条帖子及指向其主题的链接。种子数据中有十四名成员，其中包括 OrionPete、Luna_Lena、DeepSkyDmitri、CometChaser、eyepiece_junkie、NorthfieldNick、TheDobDad、halation_hana 以及访客 Nova_Nate。
   布局：lg:grid-cols-[40%_60%] gap-6；移动端堆叠。
   动效：以 300ms 上浮淡入。

### 通知（`#/notifications`）
1. **通知列表** — H1 'Notifications'；一个 'Mark all as read' 按钮（midnight 描边）。三条未读带粉色圆点，两条已读，最新在前：'DeepSkyDmitri replied to your thread “First attempt at the Orion Nebula (unguided)” · 8 minutes ago'；'OrionPete reacted to your reply in “Perseids watch: carpool thread” · 1 hour ago'；'Luna_Lena mentioned you in “Stacking 30-second subs vs. 120-second” · yesterday'；'StarSlewSara pinned your thread · 2 days ago'（已读）；'TheDobDad replied to “Show us your field cart” · last week'（已读）。每条都链接到其主题；铃铛计数跟随未读数。
   布局：白色卡片；行 py-4；未读行有浅黄色背景。
   动效：标记已读后圆点立即清除。

### 审核队列（`#/moderation`）
1. **举报队列** — H1 'Moderation'；弱化色行 'You are moderating as Nova_Nate.'。一行等宽摘要：'3 open reports · 1 pinned · 1 locked'。三条被举报帖子以卡片形式呈现：帖子摘录、作者和主题、带原因的粉色 chip 和等宽计数 — 'Off-topic · 2 reports' 位于 'Perseids watch: carpool thread'，'Uncivil · 3 reports' 位于 'Dobsonian vs. SCT for a small balcony'，'Spam · 1 report' 位于 'Show us your field cart' — 每张卡片都有按钮 'Dismiss'（描边）、'Hide post'（粉色填充、白色文字）和 'Warn user'（描边）。Dismiss 会移除卡片；隐藏会移除卡片并将该帖子在其主题中替换为 'This post was hidden by a moderator.'；警告会移除卡片并在该成员资料下添加一条备注。
   布局：卡片堆叠 max-w-[860px]；移动端按钮换行。
   动效：执行操作时卡片以 200ms 淡出。

## 资源
- 图片：无。没有照片或插图：头像为彩色圆圈中的首字母，图标来自 lucide-react，星图是代码生成的内联 SVG。
- 图标：lucide-react npm 包（ISC）：menu、x、bell、plus、pin、lock、messageCircle、eye、thumbsUp、heart、star、check、chevronRight、chevronDown、moreHorizontal、flag、search、shield、users、calendar。不使用其他图标集，任何地方都不使用品牌标志。
- 字体：Fontsource 包（OFL-1.1）：@fontsource-variable/epilogue、@fontsource-variable/albert-sans 和 @fontsource/dm-mono，在 main.tsx 中导入。不使用字体 CDN 链接。

## 不要做
- 无后端：没有服务器代码、API 路由、数据库、认证或对任何服务的请求。回复、反应、投票、通知和审核决定都保存在浏览器的 localStorage 中。
- 俱乐部、其成员、用户名、帖子和活动都是虚构的示例内容；不得命名或模仿任何真实的俱乐部、社团、软件产品、网站或人物，也不得从现有社区复制帖子。
- 这是一个对话论坛，不是问答网站：没有已采纳答案的勾选标记，也没有按投票排序的答案；排序标签只有 Latest、Top 和 Unanswered。
- 不用 emoji 作为图标或反应；反应是带计数的 lucide 图标。
- 不用渐变、玻璃面板或发光元素；使用扁平的午夜色（midnight）、星黄色（star yellow）、星云粉色（nebula pink）和柔和白色卡片，配 1px 线条。
- 星黄色始终位于午夜色文字之后；白色上的星云粉色文字仅用于 12px 粗体或更大的标签（chip）。
- Markdown 输入会被转义：帖子或回复中的原始 HTML 不会被渲染。
- 一切自托管：字体通过 Fontsource 包引入，不用 CDN script 或 link 标签，不用 Google Fonts，不用分析工具。
- Vite base 为 './'，使用相对资源路径；内部链接是锚点（#/category、#/thread、#/users）或真实文件名，绝不用裸目录；不带参数打开的路线显示第一项。
- 生产构建压缩且不生成 source map；dist/ 小于 20 MB。
- prefers-reduced-motion：无闪烁、显现、上浮或动画条；所有变化都是即时的。绝不在等待进入视口触发器时用 clip-path 或零不透明度隐藏整个元素。
- 在 390×844 下，页眉将字标、铃铛和菜单按钮保持在一行，浮动的 New thread 按钮不遮挡最后一条回复的输入框。
- Tailwind 不透明度工具类使用默认刻度（例如 /50、/70、/95）；自定义档位写成任意值。
- 不做 SEO 工作：一个包含 [BRAND] 的普通 <title> 和一个 favicon 就足够了。
- 不从任何参考网站复制代码、文案或字体；模板名称、slug、文案或 alt 文本中不得出现品牌名称。

---
— Prompt by VibeFather · https://vibefather.ai/t/discussion-forum-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
