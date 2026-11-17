> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# AI 工具目录网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一个完整的目录，收录 64 个为 [DIRECTORY_FOCUS] 虚构的工具，配有精致的青柠色与淡紫色（lime-and-lilac）目录、丰富的原创产品预览以及实用的浏览器持久化交互。目录本身就是首页，在首次加载时填充内容。

- 受众：[AUDIENCE]，用于发现和比较实用工具；以及改编该网站的独立目录发布者。
- 目标：让搜索、筛选、详细评估、收藏、比较和本地提交作为一个连贯的流程运作。通过单个可替换的适配器，提供诚实的本地新闻通讯和精选位置请求。
- 语气：好奇、简洁且具编辑风格。用通俗英语描述每个工具的功能，并附上平衡的局限性和具体的示例用例。

## 技术栈
- 框架：Vite + React + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、vite（MIT）、typescript（Apache-2.0）、tailwindcss（MIT）、lucide-react（ISC）、@fontsource/space-grotesk（OFL-1.1）、@fontsource/dm-sans（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 Vite 搭配 React 和 TypeScript、Tailwind CSS 3.4、lucide-react 以及下面列出的两个 Fontsource 包。用 CSS 和项目内哈希路由实现动效；不要添加动画库或路由依赖。
  - 将 Vite base 设为 './'，build.outDir 设为 'dist'，build.sourcemap 设为 false，并让 npm run build 先做类型检查再构建。所有资源本地安装并打包；以静态文件形式部署在任意 URL 子目录下。
  - 将所有面向用户的字符串、变量值、预置工具记录、集合、价格和预览示例保留在 src/content.ts 中。从 BRAND 派生 BRAND_SLUG。默认值构建下面这个确切的世界；不同的变量值必须连贯地重写目录的用途、示例 UI 内容、集合名称和受众文案，而不改变布局或功能覆盖范围。两种情况下都保持恰好 64 个初始工具，每个分类八个。
  - 为每个工具建模，包含 id、slug、name、tagline、description、category、pricingModel、monthlyPrice、platforms[]、useCases[]、baseVotes、addedOrder、featured、logoSeed、features[4]、pros[2]、cons[2]、previewKind 和 previewData。下面规定了每个预置名称和用途；为该用途写出独特的 55–85 词描述以及具体的功能和取舍，而不是重复的通用段落。价格和投票数是虚构的示例数据，绝不呈现为经审计的真实数据。
  - 按列出的分类和条目顺序预置这个完整目录，分配 id 从 t01 到 t64，以及小写连字符名称 slug。这些是虚构示例，不是对现有产品的引用。写作：Quillnest | 将粗略笔记变成结构化的初稿；Promptpetal | 从写作样本构建可复用的品牌语气；Sentencegrove | 将密集句子改写成清晰的平实语言；Outlinefern | 在写作前组织长文章；Copyacorn | 从功能笔记起草聚焦的产品描述；Briefwillow | 将创意简报转化为三个活动方向；Editmoss | 发现重复短语和不均匀语气；Storybramble | 在可视化板上规划场景和角色弧线。
设计：Frameplum | 从内容大纲探索落地页构图；Hueburrow | 从单个色样构建无障碍调色板；Gridpebble | 排列一组一致的社交图形；Shapeorchard | 创建可编辑的几何插画习作；Typecove | 搭配开放字体并预览字体比例；Mockfern | 将虚构界面放入干净的设备框架中；Vectorlilt | 将手绘形状细化为可编辑矢量路径；Layoutthistle | 检查跨屏幕尺寸的间距和对齐。
编程：Patchfinch | 解释代码变更并提出聚焦测试；Testwren | 从函数签名起草测试用例；Querymoth | 将数据问题转化为可读查询；Dockitfern | 将已文档化的函数变成可浏览的参考；Regexbud | 构建并解释文本匹配模式；Refactorplum | 将长函数拆分为命名的更小片段；Traceacorn | 总结本地错误跟踪和可能原因；Schemaflock | 从示例记录起草类型化数据形状。
音频：Hushreed | 从语音片段中去除稳定的房间噪声；Voicemallow | 以可调节节奏勾勒虚构旁白；Beatthicket | 编排原创打击乐循环；Chordfinch | 为旋律草图建议和弦进行；Transcriptcove | 从短语音笔记生成可搜索文本；Stemwillow | 将演示循环分离为乐器层；Audiobramble | 比较项目中各片段的响度；Soundpetal | 构建简单的界面声音调色板。
视频：Cutgrove | 在长采访中找到简洁亮点；Captionfern | 为短片段设计可读字幕；Sceneburrow | 将脚本大纲转化为镜头板；Motionacorn | 用可复用动效预设为扁平形状制作动画；Reelwillow | 从片段列表组装竖版剪辑；Framehush | 稳定摇晃场景并预览其裁剪；Clipmoss | 标记并整理视频片段文件夹；Storyspindle | 在渲染前比较两种剪辑结构。
研究：Notefinch | 将研究笔记分组为有用主题；Sourcewillow | 在主张旁跟踪来源摘录；Paperburrow | 总结论文并链接到提供的段落；Insightlilt | 按反复出现的需求聚类客户评论；Questionfern | 将宽泛主题转化为研究问题地图；Evidenceplum | 比较支持性和冲突性证据；Surveyacorn | 为小型调查起草中立问题；Readthicket | 构建带简洁注释的阅读队列。
自动化：Flowquill | 将表单响应连接到审核队列；Taskmoth | 将传入请求分类为下一步行动；Routepetal | 使用可读规则树路由记录；Formgrove | 将结构化笔记转换为表单模式；Syncwillow | 匹配两个本地数据文件之间的列；Ruleburrow | 针对示例记录预览规则；Loopfinch | 从流程构建可重复清单；Handoffmoss | 为下一位队友打包任务上下文。
生产力：Focuspebble | 将大任务分解为现实的专注时段；Planbramble | 在小型项目板上平衡工作；Meetfern | 将会议笔记转化为负责人和下一步；Inboxlilt | 将消息分组为清晰行动桶；Goalacorn | 通过具体里程碑跟踪目标；Boardwillow | 总结繁忙的项目板；Timeburrow | 使用小型可比任务估算工作量；Recallpetal | 在保存的个人笔记中找到想法。
  - 对于从零开始的索引 i，addedOrder=i+1，baseVotes=83+((i*37)%421)；popular 按 baseVotes 加上用户的投票排序，然后按名称排序，而 newest 按 addedOrder 降序排序，不显示日期或时间戳。定价按 i 对 4 取模循环 Free、Freemium、Paid、Free trial，月价分别为 0、12+(i%5)*3、19+(i%5)*5、15+(i%5)*4。分别显示 Free；Free + from $N/mo；From $N/mo；或 Trial + $N/mo。将三条精选记录 Quillnest、Frameplum 和 Flowquill 标记为编辑精选；仅在展示位置预览中显示 Paid placement，不在这些编辑精选上显示。
  - 对于每条记录，按 i 对 4 取模循环分配主要平台 Web app、Desktop、Browser extension、API；每第五条记录如果尚未列出，也支持 Web app。用例为 Writing、Editing、Design、Development、Research、Marketing、Operations、Planning。为每个分类赋予其明显的主要用例，并将 Editing 添加到 Writing/Audio/Video，将 Marketing 添加到 Design，将 Operations 添加到 Automation，将 Planning 添加到 Productivity。这些确切值填充下拉菜单；筛选值使用小写 slug。
  - 在 src/demoAdapter.ts 中实现一个目录存储和适配器，用于 submitTool、subscribeNewsletter、requestPlacement 和本地产品预览操作。它们返回确定性的本地成功结果，绝不发起 fetch。localStorage 键为 BRAND_SLUG + ':directory:v1'；存储 version、savedIds、votedIds、compareIds、submissions、submissionDraft、newsletter 和 placementRequests。将解析和写入包裹在 try/catch 中；损坏的数据恢复默认值，被阻止的存储使用内存状态并显示一条小的 'Changes last for this visit' 消息。绝不保存 HTML；将用户字符串作为文本渲染。预置一次，重新加载时合并已保存的本地提交，并保留稳定的 id 和 slug。
  - 路由器接受 #/、#/tool/<slug>、#/tool、#/collections、#/collection/<slug>、#/collection、#/saved、#/compare、#/submit 和 #/featured。列表查询参数属于哈希内部，例如 #/?q=draft&category=writing&pricing=freemium&platform=web-app&use=writing&sort=popular。使用 URLSearchParams 解析，省略默认值，编码每个值，保留无关筛选值，并在不重新加载的情况下更新。在 q 输入上，120ms 后使用 history.replaceState；离散选择使用 pushState。同时处理 hashchange 和 popstate，以便 Back 和 Forward 恢复控件和结果。无效值回退到默认值。缺少详情 slug 时显示第一个预置工具或集合；未知 slug 显示有用的本地未找到面板，并带有主页链接。
  - 按照此目录的特别要求，每个工具路由将 document.title 设置为 tool.name + ' — ' + BRAND，并将一个 description meta 元素替换为工具的 tagline。其他路由恢复品牌标题和目录描述。不要添加任何其他 SEO 工作、社交元数据或生成的爬虫文件。
  - 路由变化时，将焦点置于主 h1 并滚动至顶部，但返回目录时除外：恢复其先前的滚动偏移量和查询。所有链接均为哈希路由或显式本地文件名；绝不使用裸服务器路径。默认情况下唯一允许的外部链接是模板渲染器的可选署名。产品卡片使用本地 Open demo 预览，而非虚构的外链网站链接。
  - 在 1440×900 和 390×844 下验证生产构建：64 条初始记录、实时搜索和所有筛选器、深链接重载和浏览器历史、切换投票持久化、刷新后保存的工具、第四个对比项拒绝、对比移除、全部 64 条详情路由、每个集合、三步验证/后退导航/草稿恢复、本地添加的第 65 个工具、newsletter 重复处理、placement 请求确认、阻止存储回退和零控制台错误。检查未引入任何可见日期或真实产品名称。

## 变量
- [BRAND] — 目录品牌（默认："Sprigstack"）。一个虚构的目录品牌；从该值派生其 slug、favicon 和存储命名空间。
- [DIRECTORY_FOCUS] — 目录定位（默认："AI tools for independent work"）。重写主视觉、目录用途、合集和提交示例以契合该定位。
- [AUDIENCE] — 主要受众（默认："independent makers and small teams"）。编辑指南和精选展示位面向的对象。
- [NEWSLETTER_NAME] — 新闻通讯名称（默认："The Useful Stack"）。一个虚构的编辑类新闻通讯名称，用于注册和已保存偏好状态。
- [FEATURED_PRICE] — 精选展示位价格（默认："39"）。单一展示位示例的整数美元；其他方案价格从该值派生。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接指向 https://vibefather.ai/t/ai-tools-directory-website（默认：是；删除该行即可移除）

页面与区块（Pages & Sections）下的文案按默认值撰写。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 画布（Canvas）`#111214` — 页面画布和最深的控件。
- 表面（Surface）`#1B1D20` — 普通工具卡片和详情面板。
- 凸起（Raised）`#25282D` — 输入框、对话框和选中的深色控件。
- 青柠（Lime）`#C8F560` — 主要操作、第一张精选卡片、标题强调和新闻通讯横幅；仅限深色文字。
- 淡紫（Lilac）`#B9A6FF` — 主视觉预览、第二张精选卡片、合集插图和捆绑方案；仅限深色文字。
- 主文字（Main text）`#F5F6F2` — 深色表面上的标题和主要文字。
- 次要文字（Secondary text）`#B5B9C1` — 深色表面上可读的描述、标签和辅助文字。
- 线条（Line）`#3D424A` — 边框和分隔线，交互表面上有更亮的聚焦环。
- 墨色（Ink）`#17210D` — 青柠和淡紫上的文字与标记。
- 错误（Error）`#FF9E9E` — 深色表面上的错误文字；同时显示图标和说明文字。

### 字体排印
- 文字标识、标题、工具名称、价格：Space Grotesk（OFL），字重 500/600/700
- 正文、控件、描述和微文案：DM Sans（OFL），字重 400/500/600/700

### 布局与动效
- 间距：4px 基础节奏；页面边距桌面端 40px，平板端 24px，移动端 20px。内容最大宽度 1280px。主视觉间距 72px；区块间距 48px，绝不出现长时间空白屏。卡片内边距 24px，网格间距 20px。文字行高 1.55；可读正文 15–16px，辅助文案最小 12px。控件至少 44×44px，可见聚焦 2px 青柠色，偏移 3px。桌面端首屏必须包含真实的目录卡片，而不仅仅是标题。
- 圆角：工具卡片和预览卡片 16px；控件 10px；胶囊 999px；内部 UI 面板 8px。圆角保持一致，绝不为整个区块使用气泡式巨大胶囊。
- 动效：仅使用 140–180ms 的 CSS 过渡，用于控件颜色、阴影和适度的 2–3px 位移。
- 动效：默认显示内容：没有初始透明度为零的区块、clip-path 揭示、永久跑马灯、视差或滚动劫持。
- 动效：减少动效会移除变换、循环播放头和延迟状态更新，保留所有功能。
- 动效：对话框和面板过渡绝不能延迟焦点、输入响应或路由导航。
- 图像：所有视觉均为原创 SVG/CSS/HTML。使用类别形状家族和个体种子构建 64 个不同的确定性抽象标记：写作类用叶子，设计类用偏移矩形，编码类用括号，音频类用波形，视频类用画框，研究类用连接点，自动化类用路径，生产力类用瓷砖。不得以圆圈中的字母作为唯一标识，不得模仿产品标志。使用下文指定的八个详细产品工作区家族。大的青柠色和淡紫色视觉区域必须都出现在桌面端首屏中。无需栅格图像、肖像、网络资源或库存占位符。

## 页面与区块
### 探索工具（`#/`）
1. **共享外壳与发现主视觉** — 页头：原始双叶几何标志、[BRAND] 字标、Explore、Collections、带实时计数的 Saved，以及一个描边的 'Submit a tool' 按钮。当前路由获得一条纤细的柠檬绿下划线。Logo 链接到 #/。主视觉眉题 'SMALL TOOLS. BETTER WORK.'；标题 'Find your next
unfair advantage.'，其中 'unfair advantage.' 为柠檬绿色；正文 'A considered collection of [DIRECTORY_FOCUS]. Find the useful ones, compare the details, and build a stack that fits.' 显示一行低调的 '64 tools · 8 categories · Made for curious people'，计数由数据派生。右侧视觉上方显示 'EDITOR’S PICK' 和一个小箭头，链接到 #/tool/quillnest。大型淡紫色视觉卡片包含 Quillnest 的原始写作工作区：一个小型内容大纲栏、可读标题 'A clearer first draft'、四个句子块、一个三项 'Keep / Tighten / Rewrite' 工具栏，以及一张悬浮的柠檬绿摘要卡片 'Notes → Outline → Draft'。该模型是本地预览的视觉入口，而非伪造的视频播放器。其下方显示 Quillnest 及一句用途说明和 'Take a closer look ↗'。所有页面共享的页脚包含目录导航、一句 'Fictional tools. Local demo interactions.'、可用处的 newsletter 链接锚点以及可选的渲染器署名；无版权年份。移动端导航使用带标签的 Menu 按钮和一个焦点陷阱抽屉，支持 Escape 和点击外部关闭。
   布局：近黑色画布；居中最大宽度 1280px。桌面端页头高度 76px，主视觉在其后 44px 开始，两列 1.05fr 1fr，间距 72px，视觉高度 324px。标题 64px/1.02 字重 700，紧凑字距；正文 16px/1.6 最大宽度 470px。视觉是一个 16px 圆角的淡紫色面板，内含丰富的白与深色微型界面，细微阴影，无浏览器边框。在 1440×900 下保持完整主视觉加分类栏和结果顶部可见。在 390px 下页头为 64px，主视觉标题 40px，预览高度 205px；堆叠间距 24px，保持搜索可见且无大块空白引导区。
   动效：模型工具栏高亮在进入时移动一次，历时 350ms，然后停止。悬停预览时其小型柠檬绿摘要上浮 3px。内容在动效之前和减少动效模式下均可见。
2. **搜索、分类与目录** — 宽输入框带 Search 图标和标签 'Search tools'；占位符 'What do you want to make?'；非空时显示可见的清除控件。搜索以不区分大小写方式匹配所有以空白分隔的 token，覆盖 name、tagline、category、features 和 useCases，以 AND 应用每个 token。轻量建议面板最多显示五个匹配工具，含代码标记、名称和分类；方向键、Enter 和 Escape 可用；无建议时按 Enter 保留筛选后的网格。输入框下方，分类芯片显示 All tools 和八个分类名称及派生计数。筛选行包含 Pricing、Platform、Use case、排序 Popular/Newest 和结果计数。筛选条件取交集。每个活动筛选显示一个可移除芯片，Clear all 将查询、分类、筛选和排序重置为默认值。无需侧边栏筛选。移动端使用水平滚动的分类药丸和一个 'Filters' 面板，含即时预览计数、Reset 和 Show results。筛选是真实的并通过设置规则与 URL 同步。网格初始显示 12 条记录，仅当无搜索/筛选活动且排序为 Popular 时精选记录优先；其余记录按所选排序跟随，无重复。'Show 12 more' 追加最多 12 条并显示 'Showing X of Y'。筛选或排序变化时将可见计数重置为 12。Saved tools 有独立路由。空状态显示 'No tools fit this combination.' 并提供 Clear filters 和一个可用的查询建议。
   布局：搜索全宽 64px 高，填充 #202226，1px #3A3D43 边框，12px 圆角。桌面端分类栏和控件适配两行紧凑布局。结果标题 'Tools worth your attention' 居左带一个小火花标记；计数和排序居右。三列卡片网格，间距 20px，740–1099px 为 2 列，740px 以下为 1 列。第一张卡片为电光柠檬绿，第二张淡紫色，第三张深色。其他卡片为 #1B1D20 带细边框。精选卡片携带可读的深色文字。每张卡片：48px 原始标记、20px 工具名称、两行有用标语、分类/定价标签和底部操作。在首个桌面视口内至少六张卡片应基本可见。无垂直筛选侧边栏。
   动效：搜索结果在 120ms 内更新。卡片上浮 3px 并在悬停时显示一个细微箭头；无倾斜。筛选芯片在 140ms 内改变填充。重新计算期间保留焦点，并在礼貌的实时区域播报结果计数。
3. **目录卡片操作与对比托盘** — 每张卡片有一个标题链接打开 #/tool/<slug>、一个标记为 Save tool 或 Unsave tool 的书签按钮、一个带计数和 aria-pressed 的点赞按钮，以及一个 Add to compare 复选框。不要将整张卡片包裹在其操作按钮周围。投票为每个工具精确切换一个本地投票；每个位置反映相同计数，不制造额外投票。保存立即更新页头计数和已保存网格。对比持久化 id 并打开一个固定底部托盘，最多三个微型工具芯片、单独移除按钮、Clear 和 'Compare tools (N)'。当 N<2 时对比操作禁用并显示 'Choose at least two tools'；当 N=2 或 3 时路由到 #/compare?tools=<comma-separated-slugs>。尝试第四个工具时保持所有现有选择不变并播报 'Compare up to 3 tools. Remove one to add another.' 一个共享的 toast 区域确认 Save、Unsave 和复制操作。为卡片控件提供包含工具名称的特定无障碍标签。
   布局：每张卡片页脚有分隔线和 44px 操作目标。投票居左在一个小型圆角描边控件中；书签和对比居右。工具卡片高 250–280px，文本和页脚对齐。托盘最大宽度 850px 居中，距视口底部 20px，深色抬升表面和柠檬绿 CTA；添加匹配的页面底部内边距，使其永不遮挡最后一张卡片。移动端托盘适配视口，含水平滚动的已选芯片和全宽 Compare 按钮。
   动效：投票箭头上移 2px，计数变化无布局偏移。保存图标在 140ms 内填充。托盘在 180ms 内上滑 12px，减少动效时立即显示。
4. **Collections 预告与 newsletter** — 在完整目录区域下方显示一个紧凑的 'A good stack starts here' 集合条，链接到三个编辑集合：'Make your first launch'、'Create without a big team'、'Research with a clear head'。每个显示一个由代码绘制的四个相关工具标记的构图和精确集合计数。Newsletter 区块标题 'Useful tools. Less noise.'；正文 'Join [NEWSLETTER_NAME] for thoughtful picks for [AUDIENCE].'；标签 Email address，占位符 'you@example.com'，CTA 'Join the list'。相邻辅助文字 'Demo: your sign-up stays on this device.' 验证邮箱，无效时聚焦内联错误，并将有效值传递给 demoAdapter。将订阅保存到 localStorage，不显示时间戳；成功后将表单替换为 'You’re on the local list.' 加上存储的邮箱、Change email 和 Remove subscription。重复相同邮箱返回已订阅消息，无重复。无伪造邮件发送或实时订阅者总数。
   布局：Collections 使用三个水平编辑面板，带小型 2×2 图标构图和细边框，而非巨大的全屏区块。Newsletter 是一条电光柠檬绿带，黑色文字，32px 内边距，标题居左，双控件表单居右；移动端堆叠。页脚随后，36px 垂直内边距和 12px 柔和微文案。
   动效：表单成功在 140ms 内交叉淡入；无彩带。集合标记仅在悬停时移动 2px。

### 工具详情（`#/tool`）
1. **工具详情与本地产品预览** — 所有 #/tool/<slug> 路由共用此页面。#/tool 单独解析为 Quillnest。面包屑 'Explore / Writing / Quillnest' 使用真实哈希链接。主视觉区包含 72px 代码标记、名称、用途标语、定价/类别/平台徽章、Save、Upvote 和 Compare 控件。主按钮 'Open demo' 打开一个丰富的可访问本地预览对话框；次要按钮 'Copy link' 复制当前深链接，带可选中 URL 回退和诚实的提示状态。Quillnest 的精确标题为 'Turn rough notes into a structured first draft.'，开篇文案为 'Give your next piece a useful shape before you polish a sentence. Quillnest groups loose notes, proposes an outline, and keeps the original ideas within reach.' 页面下部包含 Overview、四个 Key features、两个具体的 Good for 要点、两个 Limitations、Pricing，以及三个 Similar tools（排除当前记录，按匹配类别再按共享用例排序）。Pricing 显示实际记录的定价模型和金额，并附清晰的本地演示说明。没有无效的访问网站 CTA。所有工具都有各自完整的数据和匹配的预览标签；按类别复用视觉语法，而不是每个产品都用完全相同的截图。工具路由按设置中的规定更新标题和描述。
   布局：页头主视觉区最大宽度 1060px，带返回链接；标题桌面端 48px/移动端 34px。下方为 2fr/1fr 分栏：左侧 Overview 上方是 16:10 的精致代码界面预览；右侧为粘性 300px 事实/定价栏，直到页脚。预览面板按类别在淡紫（lilac）和青柠（lime）之间切换；内部工作区使用近黑色面板和可读的浅色文字。功能列表为 2×2 网格，带细分割线；优缺点为两栏。Similar tools 是真正的三卡片网格。移动端所有内容堆叠，详情侧面板不粘性。
   动效：对话框以 160ms 内透明度加 8px 位移进入，锁定 body 滚动，捕获焦点，通过 Escape/背景/Close 关闭并恢复焦点。相似卡片悬停效果与目录一致。
2. **八个原创产品工作区系列** — 按类别实现 previewKind，在 Open demo 内提供有意义、本地可用的控件。写作（Writing）：可编辑的粗略笔记 textarea 和 'Build outline'，从输入的名词生成三个确定性标题；默认输入 'Launch a simple waitlist. Explain the benefit. Ask one useful question.'，大纲为 'The promise / The first step / The feedback loop'。设计（Design）：三色板调色板和四个构图瓦片，'Try another palette' 按钮循环三个固定的可访问调色板并应用到预览画布。编程（Coding）：原创短伪代码、可读的 diff 和 'Run sample checks'，显示三个固定通过的检查，明确标注为 Sample checks。音频（Audio）：绘制的波形带修剪标记，Play preview 切换一个小型移动播放头但不发出声音；显示 'Silent waveform preview'。视频（Video）：三个彩色场景块和时间线，Next scene 更改选中的块和字幕。研究（Research）：四条原创笔记和证据地图，Group notes 切换到两个命名聚类。自动化（Automation）：三个连接块 Input → Review → Ready，Run sample 让一条样本记录经过三个状态并生成可见的完成卡片。效率（Productivity）：四卡片任务板，Complete next task 将卡片移到 Done 并更新派生的进度条。每个工具在其系列工作区内更改标签和样本用途。绝不模拟实际的远程模型调用，也不暗示生成的媒体已保存到外部。所有预览状态可通过 Reset preview 重置；模态关闭时停止计时器。
   布局：工作区框架有窄功能工具栏、相关处 20% 导航栏、60% 中央内容和紧凑检查器。使用真实 SVG/CSS 矢量形状和可读的样本内容，避免 lorem ipsum 和无意义的条形行。桌面对话框最大宽度 940px、最大高度 88vh，内部滚动；移动端填满可用宽度，边距 16px，并重新排列预览面板。每个可见控件都有操作；微小的装饰性模拟控件不可交互并 aria-hidden。
   动效：只有活动预览有动画。模拟运行最多 700ms；减少动效时状态即时更新。波形播放头在关闭时和减少动效下停止。

### 合集（`#/collections`）
1. **编辑精选合集索引** — 标题 'Good tools work better together.'；正文 'Small, considered stacks for a specific job.' 展示四个合集，封面艺术由所含原创工具标记组合绘制，附编辑摘要、工具数量和 'Explore collection'。Make your first launch 包含 Quillnest、Frameplum、Copyacorn、Flowquill、Formgrove、Meetfern。Create without a big team 包含 Promptpetal、Gridpebble、Hushreed、Cutgrove、Captionfern、Motionacorn。Research with a clear head 包含 Notefinch、Sourcewillow、Paperburrow、Evidenceplum、Readthicket、Recallpetal。Keep the work moving 包含 Taskmoth、Routepetal、Syncwillow、Loopfinch、Planbramble、Boardwillow。路由由每个标题的 slug 派生。合集详情绝不链接到缺失的工具 id。
   布局：四个 2 列横向编辑卡片，交替使用青柠（lime）、淡紫（lilac）和深色艺术区域，宽松的 24px 内边距和小的 6 项数量徽章。移动端折叠为一列。顶部页头紧凑，使四张卡片都在正常页面长度内开始。

### 合集详情（`#/collection`）
1. **合集故事与有序工具** — # /collection（无空格且无 slug）解析为 make-your-first-launch。主视觉标题 'Make your first launch'；副标题 'Six tools for turning an idea into a clear, useful first release.' 包含 90 词编辑介绍、一个 'Save all 6 tools' 按钮（与 savedIds 执行幂等并集，并宣布新保存的数量）和 Copy link 操作。按精选顺序展示六条实际记录，每条附具体的一句话 'Why it belongs' 说明和常规的保存/投票/比较操作。以 'Explore more collections' 链接到索引结束。其他三个合集各有自己的标题、介绍和每个工具的理由。
   布局：淡紫（lilac）主视觉面板，右侧紧凑标记拼贴，左侧 42px 标题。有序卡片使用 36px 索引和 1fr/2fr 文本分栏；使用普通数字 01–06，绝不使用发布日期。移动端索引和标记位于标题旁，理由在下方换行。没有空白占位合集路由。

### 已保存工具（`#/saved`）
1. **已保存工具** — 标题 'Your useful little shortlist.'，附派生的已保存数量、Search saved tools 输入框，以及需要内联确认/取消提示的 Clear saved 操作。在已保存子集上复用相同的卡片和筛选匹配。状态持久化并与每张卡片和页头同步。初始状态仅可在此专用页面为空；显示原创代码绘制的书签构图、'Save the ones you want to come back to.' 和链接到首页的 'Explore tools'。移除最后一条记录后立即恢复此空状态。绝不代表用户静默预保存工具。
   布局：紧凑页面介绍和常规三列卡片网格。空状态最大宽度 560px 居中，带 160px 青柠（lime）/淡紫（lilac）矢量插图；有用的浏览 CTA 在移动端保持可见。

### 比较工具（`#/compare`）
1. **并排比较** — 从 tools 哈希查询中读取最多三个有效且唯一的工具 slug；如果未提供且无存储选择，则显示 Quillnest 和 Promptpetal 作为明确标注的 'Sample comparison'，不静默修改已保存或比较状态。如果恰好存在一个选中项，则显示该真实选择，附 Add a tool 选择器和明确的再选一个提示。列标题包含标记、标题链接、移除按钮和 Save。行比较用途、类别、定价模型、月度起价、平台、四个关键功能、两个优势、两个局限和推荐用例。'Only show differences' 隐藏所选工具间值相同的行。Add tool 控件是可搜索的本地选择器，达到三个时禁用并显示精确的限制消息。移除会更新 URL 和存储；替换工具会重新计算所有行。Copy comparison link 带可选中字段回退。绝不编造评分或获胜者。移除所有项后显式选择为空时，显示有用的 Add a tool 状态，而不是重新引入样本。
   布局：主标题 'Find the right fit.' 和选中数量；表格位于自己的水平滚动区域内，第一标签列 180px，每个工具列最小宽度 250px。桌面端 2–3 个工具列居中，最大宽度 1280px。粘性表头和行标签单元格使用不透明近黑色填充。在 390px 时保持标签 116px、工具列 230px，显示不显眼的 'Swipe to compare' 提示，并将溢出限制在表格内；页面本身绝不溢出。交替使用微妙的行背景，青柠（lime）仅用于选中的操作，不用于暗示获胜产品。

### 提交工具（`#/submit`）
1. **三步提交，带实时卡片预览** — 标题 'Put something useful on the map.'；引言 'Show [AUDIENCE] what your tool helps them do.' 步骤为 1 基本信息、2 详情、3 审核。第 1 步要求工具名称 3–40 个字符、标语 15–110 个字符和一个分类；以不区分大小写的方式拒绝重名。第 2 步要求定价模式、非 Free 时填写非负的起始月价、至少一个平台和一个用例、描述 60–500 个字符以及三个以换行分隔的功能。可选的网站 URL 若填写则必须为 HTTPS；在提交记录中仅以文本形式呈现，绝不自动打开。第 3 步显示完整审核内容，并要求勾选 'I understand this submission stays in this browser.' 复选框。桌面端实时预览使用与目录完全相同的卡片组件，随字段变化更新，并带有生成的几何标记。下一步仅校验当前步骤的字段，将错误显示在标签旁，聚焦第一个无效输入，并在返回时保留所有值。250ms 后将草稿自动保存到 localStorage。重新加载会恢复步骤和字段；'Discard draft' 使用可见的确认/取消控件。最终点击 'Add to my directory' 时调用 demoAdapter，生成唯一 id 和 slug，设置 baseVotes=0、addedOrder 为最高值+1、featured=false 以及有意义的默认详情优缺点，将其追加到同一目录，移除草稿，显示 'Added to your local directory.' 和 View tool 链接。重复点击最终按钮不能创建重复项。目录计数变为 65，最新排序将此条目显示在首位。没有虚假的待审核状态、远程提交、文件上传或邮件确认。
   布局：桌面端 7/5 双栏表单/预览布局，最大宽度 1120px；预览在 100px 处粘性固定，带有 'LIVE CARD PREVIEW' 标签，下方有紧凑的本地存储说明。步骤条是一条带有编号节点的细水平线；当前节点为 lime（青柠色）。表单使用 48px 高的输入框、8px 字段间距、20px 组间距、清晰的辅助文本和完整的错误文本。上一步和继续按钮位于底部；最终按钮为 lime（青柠色）。移动端预览以紧凑的真实卡片形式出现在表单上方，绝不隐藏，也绝不覆盖输入框。
   动效：步骤条线条在 160ms 内填充；字段错误出现时不抖动。预览即时反映输入。成功时原地替换内容并聚焦确认信息。

### 精选展示位（`#/featured`）
1. **精选展示位方案与本地请求** — 标题 'Give a useful tool a little more room.'；副标题 'Choose a placement for [AUDIENCE]. See exactly how it will look before you request it.' 三个方案：标准列表 $0，'A place in the searchable directory'，CTA 提交工具 链接到 #/submit；精选卡片 $[FEATURED_PRICE] 每个展示位，'One highlighted card in a focused category'，CTA 预览展示位；编辑精选套餐 $[FEATURED_PRICE multiplied by 3] 每套餐，'A highlighted card and a collection placement preview'，CTA 预览套餐。没有稀缺数量、受众触达承诺、日期、排名出售或实时结账。选择付费选项会打开一个无障碍抽屉，包含方案摘要、种子工具加已提交工具的选择器、必填联系邮箱以及该工具卡片的精确预览，并带有小的 'Paid placement' 标签。文案为 'Local preview only. No payment or placement is processed.' 确认按钮 'Save placement request' 进行校验，通过 adapter 存储唯一的本地请求，并显示包含方案、工具、价格和参考号（如 SP-0001，前缀从 BRAND 字母派生，不含时间戳）的本地收据。提供 Edit request 和 Close；绝不索取卡号。三个 FAQ 手风琴分别说明高亮的内容、编辑精选保持独立，以及此演示仅在设备上存储请求。
   布局：紧凑的 3 列定价行，精选卡片为 lime（青柠色），标准为深色，编辑精选套餐为 lilac（淡紫色）。价格 48px，单位 14px；所有正文在亮色卡片上为深色。下方显示全宽的展示前后卡片位置预览，然后是三个低调的 FAQ 行。移动端方案堆叠；预览抽屉全宽最大 520px，内部滚动并尊重安全区域边距。
   动效：方案选择在 140ms 内移动 2px 边框。FAQ 使用 160ms 的高度过渡并带 aria-expanded；抽屉具有标准的焦点和 Escape 行为。

## 资产（Assets）
- 图像（image）：直接在本地 SVG/CSS/HTML 组件中创建全部 64 个工具标记、集合构图、主视觉工作区和八个预览系列。原创作品，专为本模板创作；不使用下载的图片或外部图片请求。装饰性图形设为 aria-hidden；有意义的工作区图形配以简洁的英文描述。
- 图标（icon）：从 npm 包中打包 lucide-react 图标，遵循 ISC 许可：Search、ArrowUpRight、Bookmark、ChevronUp、SlidersHorizontal、Check、X、Plus、ArrowLeft、ChevronDown、Menu、Copy、ArrowRight 和 Sparkles。使用 18–20px、stroke-width 1.75；绝不使用品牌图标。在 ASSETS.md 中记录包名、来源 https://github.com/lucide-icons/lucide、作者 Lucide contributors 和 ISC 许可。
- 字体（font）：通过 @fontsource/space-grotesk 自托管 Space Grotesk 字重 500/600/700，通过 @fontsource/dm-sans 自托管 DM Sans 字重 400/500/600/700。仅导入所需的拉丁子集。ASSETS.md 记录包文件路径、https://fontsource.org/fonts/space-grotesk 和 https://fontsource.org/fonts/dm-sans、其字体作者及 OFL-1.1。绝不加载远程字体样式表。

## 禁止事项
- 不要引入后端、API 路由、数据库、登录、分析、第三方 API、远程 AI 调用、外部表单提交或支付。所有类似服务的操作都通过 src/demoAdapter.ts 处理，并留在本设备上；绝不要声称电子邮件、支付、审核决定或展示位置已被实际处理。
- 不要使用真实产品或平台名称、标志、复制的截图、名人肖像、借用口号、可识别的吉祥物、受限库代码或商业字体。所有目录条目和品牌均为虚构，所有视觉标记和 UI 场景均为原创。
- 不要显示日历日期、时间戳、相对发布日期、发布年份、版权年份或基于时间的促销截止日期。Newest 仅使用内部序号。可以出现按展示位置计算的计划价格和虚构的投票数；不要声称实测触达或真实背书。
- 不要将种子目录缩减到少于 64 条完整唯一记录，也不要发布重复的填充描述、空白详情或装饰性控件。每个列出的路由、筛选器、模态框、复选框、卡片操作、比较规则和提交步骤都必须按照此提示词正常工作。
- 不要允许比较超过三个工具、重复计票、重复最终提交、未经确认删除已保存内容、在 localStorage 损坏时崩溃，或破坏哈希路由的后退/前进导航和重新加载。查询参数位于哈希内部，并使用 URLSearchParams 编码。
- 不要创建裸目录链接或依赖服务器重写。使用哈希路由或真实 HTML 文件名、相对本地资源、Vite base ./，以及小于 20 MB 的静态 dist/。npm run build 必须生成压缩构建，且不包含 source map 或源文件夹。
- 不要热链图片、字体、脚本或样式；所有资源都本地打包。不要使用 CDN 标签、占位符服务、库存照片、未经验证的下载 URL 或不兼容许可证的包。在 ASSETS.md 中列出第三方资源路径、作者、源链接和许可证。
- 不要使初始目录为空，也不要用纯排版替代其视觉锚点。保留指定的近黑色、电光青柠色和淡紫色调色板、原创代码绘制的 hero 工作区和可见的已填充卡片。保持 AA 文本对比度，尤其是青柠色和淡紫色上的深色文本。
- 不要将关键信息隐藏在悬停之后、使用嵌套交互控件、省略标签和键盘支持、将焦点困在关闭的对话框中，或在模拟界面中放置无操作的假按钮。工作表和对话框在打开时困住焦点，关闭时恢复焦点，并支持 Escape。使用 aria-live 提供结果和操作反馈。
- 不要在 390×844 下允许页面级水平溢出或控件重叠。将比较溢出限制在其表格滚动容器内，使移动端筛选工作表可用，为固定托盘留出空间，并保持点击目标至少 44px。
- 不要将内容置于介绍之后、使用滚动劫持、闪烁效果、持续背景运动或初始隐藏的区块。遵守 prefers-reduced-motion，并在关闭时停止预览计时器。控制台必须没有运行时错误。
- 不要在内容文件之外硬编码默认品牌引用，或在变量更改后留下旧内容。将所有字符串、记录、示例和价格保留在 src/content.ts 中，派生存储命名空间和品牌 slug，并为替代值连贯地重写目录和集合文案。
- 不要添加超出特别要求的每工具文档标题和描述、纯站点标题和原创 favicon 之外的 SEO 交付物。不要添加社交元数据、结构化数据、站点地图或关键词填充。
- 不要将模板生产说明、模型名称、计划标识符、成本或内部文件路径放入渲染产品中。所有可见文案、字段错误、示例记录、可访问标签和替代文本必须为美式英语。唯一可选的模板库提及是渲染器提供的 credit。

---
— Prompt by VibeFather · https://vibefather.ai/t/ai-tools-directory-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
