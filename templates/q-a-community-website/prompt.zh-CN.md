> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 问答社区网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个原创的多视图知识问答应用，[BRAND] 是一个虚构社区，围绕 [COMMUNITY_FOCUS]，面向 [AUDIENCE]。产品承诺是 [TAGLINE]。打开时直接进入实际的热门信息流，而不是营销页面，并提供可用的提问、话题、答案编辑器和声誉视图。所有人物、问题、答案、指标、徽章和社区活动均为虚构的示例内容；访客所做的更改仅保留在此设备上。

- 受众：产品内的受众是 [AUDIENCE]，从提出第一个实际问题的初学者，到分享详细答案的经验丰富的成员。该模板本身适合教育工作者、创作者、社区建设者、设计师和开发者，他们需要一个精致的、支持真实客户端交互的长篇社区界面。
- 目标：帮助访客发现相关问题，理解其答案的质量，对答案点赞或折叠，关注话题，并撰写带预览的格式化答案。让搜索、筛选、哈希导航、草稿持久化、本地发布和声誉进度在无需账户、服务器或第三方 API 的情况下正常工作。
- 语气：深思熟虑、慷慨、具体且平静。答案应听起来像经验丰富的同行在解释他们会尝试什么以及为什么，并附上有用的约束条件和诚实的犹豫。避免增长黑客式语言、空洞的欢迎语、泛泛的鼓励，以及声称示例贡献者或指标是真实的。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：motion（MIT）、lucide-react（ISC）、@fontsource-variable/newsreader（OFL）、@fontsource-variable/source-sans-3（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 将 Vite base 设为 './'，build.outDir 设为 'dist'，build.sourcemap 设为 false。生成一个自包含的 index.html 应用，使用带哈希的资源，且无需服务器回退。
  - 配置 Tailwind，使用由 CSS 变量支持语义颜色（semantic colors）、Newsreader 和 Source Sans 3 字体族、表格数字工具类（tabular numeric utilities），以及一个用于长文答案排版、焦点环、滚动条和减少动态效果覆盖的小型全局样式表。
  - 实现一个无需额外依赖的微型哈希路由。支持 '#/'、'#/question/<question-slug>'、'#/topic/<topic-slug>'、'#/write/<question-slug>' 和 '#/reputation'；直接加载 index.html 时显示信息流（feed），浏览器前进和后退正常工作，缺失或未知的 slug 回退到第一个真实问题或主题，而不是显示未找到页面。
  - 将所有由变量派生的标签、主题、问题、完整答案、贡献者、徽章、指标、指南、图表定义和编辑器示例保留在 src/content.ts 中。为所提供的变量值重写整个知识库，确保其他社区中不残留任何城市园艺（urban-gardening）文案。
  - 使用 React useReducer 管理应用状态，并使用小型组件构建外壳（shell）、信息流（feed）、问题卡片、答案、作者卡片、主题视图、编辑器、预览、声誉指南、搜索结果和移动端抽屉。保持派生过滤和排序函数为纯函数，并由实际 UI 行为覆盖。
  - 将点赞、折叠的答案 ID、关注的 topic ID、每个问题的编辑器草稿、本地发布的答案和本地声誉调整持久化在单个带版本的 localStorage 键下，该键由 slug 化后的 [BRAND] 派生。处理空或不可用的存储，不产生控制台错误，并在社区菜单中提供已确认的“重置本地演示”（Reset local demo）操作。
  - 仅对短路由、折叠、抽屉、toast 和已发布答案反馈使用 motion/react 的 AnimatePresence 和布局过渡。调用 useReducedMotion，并在请求时用即时状态变化替换非必要的移动。
  - 将编辑器预览构建为来自小型允许列表 Markdown 子集的安全 React 元素：粗体、斜体、行内代码、链接、列表、块引用和段落。不要注入原始 HTML。格式化按钮在 textarea 选区处插入语法并保留撤销行为。
  - 从 Fontsource 本地导入 Newsreader Variable 和 Source Sans 3 Variable。使用原生 button、input、textarea、nav、main、aside 和 article 元素；所有覆盖层都需要可访问名称、Escape 处理、焦点返回和可见的键盘焦点。
  - 当访客尚未在输入时，支持 '/' 或 Command/Ctrl+K 聚焦全局问题搜索。通过克制的 aria-live 区域播报过滤计数、投票、关注、保存状态和发布结果。

## 变量
- [BRAND] — 社区名称（默认：“Plot & Porch”）。使用一个虚构的社区名称，并为其派生一个小写 slug，用于文档标题和 localStorage 键。
- [COMMUNITY_FOCUS] — 知识主题（默认：“urban gardening”）。针对该主题重写每一个问题、答案、话题、贡献者专长、指南和图表。
- [AUDIENCE] — 社区受众（默认：“city growers”）。即提问和回答的人；调整经验水平和示例以适合他们。
- [TAGLINE] — 社区标语（默认：“Practical growing answers from people who try them.”）。一句简短的原创承诺，用于信息流标题下方和社区语境中。
- [FEATURED_TOPIC] — 精选话题（默认：“Small-space growing”）。设置精选信息流话题及其第一个问题集合；针对所选主题重写它。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/q-a-community-website（默认：是；删除此行即可移除它）

“页面与区块”下的文案是为默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 画布（Canvas）`#F3F0E8` — 整体应用背景，以及三栏工作区周围的留白空间
- 纸张（Paper）`#FFFDF8` — 问题卡片、回答正文、编辑器、预览、搜索和吸顶页头
- 墨色（Ink）`#202A24` — 标题、回答文本、主要控件和重要图标
- 柔和色（Muted）`#68736C` — 元数据、次级标签、非活动图标和辅助文案
- 森林绿（Forest）`#234B3A` — 主按钮、已关注话题、活动导航和深色社区面板
- 鼠尾草绿（Sage）`#DDE8D8` — 选中导航、声望进度、有帮助高亮和柔和图表填充
- 朱红（Vermilion）`#B84A32` — 品牌圆点、投票高亮、小下划线和聚焦强调；实心填充上使用白色文字
- 腮红（Blush）`#F4DDD4` — 已点赞背景、精选问题强调和暖色徽章表面
- 线条（Line）`#D9D4C8` — 细线卡片边框、栏分隔线、输入框轮廓和回答分隔线
- 徽章金（Badge Gold）`#8A641C` — 最高声望标签和浅色背景上的小奖项细节

### 字体排印（Typography）
- 品牌、页面标题、问题标题、引文和长篇回答：Newsreader Variable（OFL），字重 400/500/600/700
- 导航、控件、元数据、搜索、编辑器界面、徽章和辅助文本：Source Sans 3 Variable（OFL），字重 400/500/600/700

### 布局与动效（Layout & motion）
- 间距：使用 4px 基础刻度。吸顶桌面页头高 68px。工作区最大宽度 1480px，外侧留白 28px，左侧栏 208px，中间栏 minmax(0,760px)，右侧栏 264px，间距 24px。信息流卡片使用 22px 内边距和 18px 垂直间距。问题阅读使用 68px 投票栏和最大 680px 文本宽度，正文为 20px Newsreader，行高 1.72。移动端使用 16px 留白和至少 44px 的触控目标。
- 圆角：按钮和输入框使用 10px，标准卡片使用 14px，精选面板和编辑器表面使用 18px，仅紧凑标签和状态胶囊使用全圆角。几何头像使用圆角方形，而非通用的首字母圆形。优先使用细线边框；将 0 18px 50px rgba(32,42,36,0.14) 阴影保留给搜索结果、抽屉和对话框。
- 动效：在 hash 路由变化时，新主视图以 translateY(6px) 在 180ms 内淡入；不要对共享页头或侧栏做动画，也不要延迟可读内容。
- 动效：点赞按钮填充，其计数在 140ms 内交叉淡入淡出。关注按钮以 160ms ease-out 过渡切换标签和图标，不移动相邻控件。
- 动效：折叠回答在 200ms 内对高度和透明度做动画，同时保留作者行和 Expand answer 控件；新发布的本地回答以 220ms 淡入和 8px 上升进入。
- 动效：移动端导航、话题和贡献者抽屉滑动 16px，其背景在 200ms 内淡入。搜索结果在 140ms 内从 0.99 缩放到 1。
- 动效：在 prefers-reduced-motion: reduce 下，移除路由位移、高度动画、平滑滚动和入场过渡，同时保留即时状态、焦点和文本反馈。
- 图像：不使用位图图像、生成肖像、库存照片或头像服务。完整的应用 UI 是首屏视觉锚点，并由一张带有原创内联 SVG 田野笔记图表的精选问题卡片强化。对于默认社区，绘制一张阳台日照图，包含四个花盆、一条浅色太阳弧线、栏杆线条和小型数字小时标记；对于其他主题，替换为同样具体的技​​术图表，例如面包发酵时间线。绘制八位不同的虚构贡献者，作为原创几何 SVG 头肩肖像，具有不同的肤色、发型、服装，以及鼠尾草绿、腮红、赭石、蓝色和陶土色背景；绝不使用仅首字母头像或类似真实人物。用两片打开的书页状矩形叶片和一个朱红圆点创建原创 [BRAND] 标志，外加一个简单的匹配 favicon。

## 页面与区块
### 热门问题信息流（`#/`）
1. **共享应用外壳与导航** — 将文档标题设置为 '[BRAND] · [COMMUNITY_FOCUS] answers'。粘性页头包含原始书叶标志、[BRAND]、指向 '#/' 的 Feed 链接、一个 Topics 操作（在移动端打开主题抽屉，在桌面端聚焦主题栏），以及指向 '#/reputation' 的 Reputation 链接。居中放置一个全局搜索输入框，占位符为 'Search [COMMUNITY_FOCUS] questions'。搜索以不区分大小写的方式匹配问题标题、摘要、回答文本和主题，最多显示六条分组结果，并带有问题和主题标签；选择其中一条会导航至该结果，清空搜索则恢复信息流。主朱红色描边按钮文字为 'Write an answer'，链接到精选问题的编辑器。一个紧凑的社区菜单包含 'About this demo' 和 'Reset local demo'。About 说明所有人物和指标均为虚构，访客的更改仅保留在此浏览器中。将可选的小号 [CREDIT] 链接仅放在左侧栏底部。
   布局：在 1440px 下使用 68px 的 Paper 页头，内部容器宽 1480px，水平间距 20px。品牌占据左侧 208px，搜索为 minmax(240px,520px)，操作区靠右。其下方渲染 Design 中描述的三栏工作区，粘性侧栏距视口顶部偏移 92px。在宽度低于 1180px 时，将右侧栏隐藏在 Contributors 按钮之后；低于 820px 时，将左侧栏隐藏在 Menu 按钮之后，保留一个可展开搜索框的 Search 图标，并将页头文本链接折叠进抽屉。
   动效：外壳在首次绘制时即完全组合完成。搜索结果和菜单使用 Design 中的短遮罩；路由变化绝不会使粘性页头发生位移。
2. **主题栏与本地成员摘要** — 左侧栏以 Feed 导航项和 Compass 图标开始，然后是 'Topics'，配一个无 Plus 的安静列表：[FEATURED_TOPIC] 有 42 个问题，Soil & compost 有 36 个，Herb harvests 有 28 个，Balcony fruit 有 19 个，Pest patrol 有 24 个，Seasonal planning 有 31 个。每个主题链接到其真实的哈希路由，并显示各自的名称、描述、问题数和关注状态。已关注的主题会获得一个小号 Forest 圆点和 Sage 行背景。下方一个 'Your local profile' 面板将访客显示为 'Guest contributor'，配有几何访客头像、'240 demo reputation points'、Helpful Hand 徽章，以及一个标注为 '260 points to Trusted Guide' 的进度条。将 'How reputation works' 链接到 '#/reputation'。将 Reset local demo 包含在社区菜单中，而不是作为显眼的侧栏按钮。
   布局：使用 36px 导航行、组间 12px 间距、13px Source Sans 标签，以及右对齐的等宽数字计数。本地资料位于粘性侧栏靠下部分，但在垂直空间不足时仍可访问。在移动端，相同内容填充一个 min(320px,88vw) 的左侧抽屉，带有安全区内边距和带标签的 Close 按钮。
   动效：主题选择在 140ms 内改变背景和圆点颜色。本地发布后进度在 180ms 内变化；减少动效时立即更新。
3. **精选问题与视觉田野笔记** — 在信息流上方显示小号大写标签 'THE [BRAND] COMMUNITY'、H1 'Trending in [COMMUNITY_FOCUS]' 和 [TAGLINE]。添加分段筛选器 Trending、Newest 和 Unanswered，具有真实的结果排序和计数；Newest 使用内容文件的顺序，不显示日期。精选卡片标记为 [FEATURED_TOPIC] 和 'Community field note'。其问题为 'How much morning sun do balcony tomatoes really need?'，由虚构的 Lena Ortiz 提出，有 6 个回答和 1.8k 示例阅读量。问题摘要：'My railing gets direct sun from roughly 7:30 to 10:00, then bright shade. Is that enough for cherry tomatoes in a 20-liter pot, or should I move them to the fire escape?' 来自 Mara Ellis 的精选回答摘要开头为 'Four hours of direct morning light can grow cherry tomatoes, but the pot and watering routine will decide whether they fruit well.' 一个主文本链接文字为 'Read 6 answers'；次级图标按钮在其初始 184 示例票数上添加或移除一个本地赞成票。点击标题或回答摘要打开 '#/question/container-tomatoes'。
   布局：使用 18px 的 Paper 卡片，带有微妙的 Vermilion 顶部线条。桌面端问题和回答摘要占 62%，SVG 日照图占 38%，中间有 20px 分隔线。H1 为 Newsreader 38px，精选问题为 28px。图表具有 Sage 背景、细 Ink 描边，且没有小于 12px 的文字。移动端将图表堆叠在问题下方，高度 160px，页面 H1 缩小至 32px，并保持两个操作均可见且无需水平滚动。
   动效：仅投票控件有动画。图表为静态；不要添加循环太阳、视差或人工打字效果。
4. **问题流与可用筛选器** — 渲染五张额外的实质性卡片，每张包含紧凑的赞成票栏、一或两个主题标签、问题标题、两行最佳回答摘要、几何回答者头像、贡献者姓名、声誉徽章、回答数和示例阅读数。默认问题为：'Why do my herb stems turn woody before I get a second harvest?' 有 96 票和 4 个回答；'Can self-watering planters cause root rot if the reservoir never empties?' 有 81 票和 5 个回答；'What soil mix drains well in a shallow window box?' 有 67 票和 3 个回答；'How do I keep basil watered through a hot weekend away?' 有 54 票和 0 个回答，以便 Unanswered 筛选器有意义；以及 'Which compact climbing vegetable suits a trellis on a bright north-facing wall?' 有 43 票和 2 个回答。每个问题链接到其各自填充的问题路由；未回答的问题显示原始提示，来自其他问题的相关回答绝不会冒充为其自身的回答，并提供一个清晰的 'Write the first answer' 编辑器链接。赞成票每位访客切换一次并持久保存。搜索和所有三个筛选器更新可见信息流和计数；空状态显示 'No questions match “{query}” yet'，带有 Clear search 和一个指向精选编辑器的链接，而不是虚假的 Ask question 操作。
   布局：在共享的 Paper 信息流上用 1px Line 边框分隔标准卡片，而不是让每一行独立浮动。每行有一个 48px 投票栏和一个 minmax(0,1fr) 内容区。标题保持 Newsreader 23px，摘要保持 Source Sans 15px。移动端将投票数和回答数移入紧凑的底部元数据行，同时保留 44px 的赞成票点击目标。
   动效：筛选在 160ms 内交叉淡化信息流，不产生大幅卡片位移。赞成票状态和 aria-live 确认立即更新。
5. **贡献者与社区侧栏** — 右侧栏有两个安静的 Paper 面板。'Trusted guides' 列出 Mara Ellis，容器种植导师，Trusted Guide，1,840 积分；Priya Nair，土壤与堆肥研究员，Community Anchor，2,460 积分；以及 Theo Bennett，阳台园艺爱好者，Trusted Guide，620 积分。每行链接到包含该人物最强示例回答的问题，而不是不存在的个人资料路由。'A better answer includes' 列出三条紧凑指南：'Name the conditions you tested'、'Explain the trade-off, not only the rule' 和 'Leave room for a different climate or setup'。将 'Read the community standards' 链接到 '#/reputation'，完整指南出现在那里。在面板页脚一次性将所有声誉数字标注为演示数据。
   布局：面板使用 18px 内边距，内部间距 16px。贡献者头像为 40px 圆角方形；姓名和徽章换行而不截断。低于 1180px 时，这些面板在 min(340px,92vw) 的右侧抽屉中打开；低于 820px 时，其重要的可信指南链接也出现在问题流之后。
   动效：行使用仅背景的悬停反馈。右侧抽屉使用标准的 200ms 滑动和淡入。

### 问题与长文回答（`#/question/container-tomatoes`）
1. **问题头部与阅读控件** — 从 src/content.ts 解析问题 slug；'#/question/container-tomatoes' 为默认值，未知或缺失的 slug 也显示它。以面包屑链接 Feed 和 [FEATURED_TOPIC] 开头，然后是 H1 'How much morning sun do balcony tomatoes really need?'。包含完整问题：'I am growing two cherry tomato plants in separate 20-liter pots on a third-floor balcony. They get direct sun from about 7:30 to 10:00, then bright shade for the rest of the day. The plants are leafy, but I only see a few flowers. Should I move them somewhere brighter, change the feeding routine, or give the current setup more time?' 显示话题标签、6 条示例回答、1.8k 示例阅读量，以及一条朴素的 'Sample community content' 披露。主 CTA 是 'Write an answer'，链接到 '#/write/container-tomatoes'；一个低调的 'Back to questions' 链接返回 '#/'。不要显示日期或相对时间标签。
   布局：中央 Paper 阅读界面桌面端内边距为 32px。H1 为 Newsreader 44px、行高 1.08、最大行宽 16 词，问题正文为 19px、行高 1.65，元数据位于一条细线下方。移动端使用 22px 内边距和 34px 的 H1。移动端将主 CTA 放在问题正文之后，以免挤占标题。
   动效：仅使用标准路由入场；完整问题必须立即可见，不做分阶段揭示。
2. **带折叠功能的投票长文回答** — 在标题 'Answers' 和一个包含 Most helpful 与 Original order 的排序选择器下方，显示四条完整的默认回答。Mara Ellis，Trusted Guide，1,840 积分，获得 248 票，是领先回答：以 'Four hours of direct morning light can grow cherry tomatoes, but leafy growth and only a few flowers suggest that light is still the limiting factor.' 开头。继续以三个有用的部分展开：'Check the whole setup' 说明 20 升花盆对一株紧凑型植株可行，两株不应共用，且持续排水很重要；'Before moving the plants' 建议在三个晴朗早晨观察直射光与反射光，并避免不安全的消防梯放置；'What I would change first' 建议每盆只种一个紧凑型品种，仅移除接触土壤的下部叶片，并在没有诊断的情况下避免额外氮肥。包含引文 'More leaves in bright shade are not the same as more fruit.'。Theo Bennett，Trusted Guide，620 积分，获得 96 票，其回答正文内标题为 'Make a simple light log'，包含三条编号观察，并提醒附近墙壁可能改变反射光。Priya Nair，Community Anchor，2,460 积分，获得 71 票，比较了修剪、施肥和热应激，但没有承诺通用解决方案。Jonah Fields，Helpful Hand，185 积分，获得 32 票，描述了一项使用可移除浅色板进行的反射光测试，并指出风和浇水的权衡。每条回答至少 180 词原创、具体的文字，包含段落、一个列表或小标题，且不复制参考文本。其他问题路由使用各自的完整回答数据，而未回答的问题正确显示无回答卡片。
   布局：每篇文章使用 64px 左侧投票栏和 minmax(0,1fr) 正文。将 ArrowUp 和计数放在顶部一个 44px 宽的垂直控件中，仅在宽回答正文内粘性定位，且绝不与文字重叠。作者行包含 48px 几何头像、姓名、专长、原创徽章和积分。Collapse answer 按钮位于该行右侧。长文小标题为 Newsreader 24px，正文 20px、行宽 680px，列表保留可见标记，引文有 3px Vermilion 左边线。回答之间使用全宽细线和 32px 垂直间距，而非单独的嵌套卡片。移动端投票控件变为作者行下方的水平布局，正文降至 18px。
   动效：投票切换计数一次并持久化。Collapse 仅隐藏正文，保留一行紧凑的 'Answer by <name> · <votes> votes' 以及 Expand answer；动画时长 200ms，并合理恢复滚动位置。
3. **回答作者卡片与专业背景** — 当访客阅读领先回答时，右侧栏显示 'Answered by Mara Ellis'，包含她更大的 64px 几何头像、'Container-growing mentor'、Trusted Guide 徽章、1,840 演示积分，以及简短虚构简介 'Mara grows tomatoes and herbs in twelve railing planters and likes answers that begin with observable conditions.'。列出 'Frequently answers in'，包含 [FEATURED_TOPIC]、Balcony fruit 和 Herb harvests 话题链接。添加 'Why this badge' 链接到 '#/reputation'。当另一条回答获得焦点或其作者行被点击时，将此卡片更新为该贡献者，而不离开问题。不要创建虚假的关注、消息或个人资料按钮。
   布局：使用粘性 Paper 面板，内边距 20px，并带 Sage 徽章条。低于 1180px 时，将选中的作者卡片内联放在相关回答之后或 Contributors 抽屉中；绝不覆盖阅读栏。移动端在每个回答内显示紧凑的作者披露，而非单独的粘性卡片。
   动效：当作者行被激活时，贡献者详情以 140ms 交叉淡入淡出。访客阅读时不要自动轮换作者。
4. **相关问题与结尾回答操作** — 回答之后显示 'Keep reading'，包含三个真实问题链接：self-watering planters and root rot、soil for shallow window boxes，以及 basil during a hot weekend。最后以一个 Forest 面板结束，标题为 'Have experience with a similar setup?'，文案为 'Add the conditions you tested, what changed, and what you would try next.'。Paper 按钮 'Write your answer' 打开当前问题的编辑器。如果访客已在本地发布，则在其回答前加上一个小标签 'Published on this device'，并保留编辑器操作。
   布局：相关链接形成三行列表，标题为 Newsreader 20px，带 ArrowUpRight 图标。结尾面板横跨阅读栏，内边距 24px，桌面端文字居左、按钮居右，移动端堆叠。
   动效：相关链接使用简单下划线和 2px 箭头移动。新发布的回答使用单次 220ms 入场和礼貌的 toast 提示。

### 主题问题与关注（`#/topic/small-space-growing`）
1. **主题标识与关注控件** — 从共享主题数据中解析每个主题 slug，缺失或未知 slug 时默认使用 [FEATURED_TOPIC]。显示原创内联 SVG 种植网格徽标、眉题 'TOPIC'、H1 [FEATURED_TOPIC]，以及描述 'Practical advice for railings, windowsills, patios, and other compact growing spaces.'。显示 42 个示例问题和 318 个示例关注者。Forest 按钮 'Follow topic' 切换为 'Following' 并带 Check 图标，显示计数加一，本地持久化，同时在左侧栏标记该主题。添加链接到精选问题的 'Write an answer'。包含一个小号 'Sample topic metrics' 说明文字，不显示日期。
   布局：使用宽幅 Forest 面板配 Paper 文字，SVG 徽标置于右侧，其后为柔和的 Sage 种植网格图案。桌面端标题为 Newsreader 46px；操作按钮位于描述下方。移动端将徽标置于右上方之后并降低不透明度，保持文字完全可读，仅在必要时让两个按钮占满宽度。
   动效：关注状态在 160ms 内交叉淡入淡出标签并递增计数。种植网格背景保持静止。
2. **精选主题问题列表** — 提供 Top questions、Unanswered 和 All questions 标签页，对该主题的问题进行实际筛选。显示精选番茄问题、浅窗箱土壤、炎热周末罗勒和紧凑攀爬蔬菜卡片，包含其真实投票数、摘录、作者和回答数。添加一条主题专属编辑说明 'Start here: match the plant to the light you actually have, then choose the pot.'，链接到番茄问题。每个标题打开其已填充的问题路由。空结果仅在属实时使用 'No unanswered questions in this topic'，并提供 All questions。
   布局：主题面板下方使用两栏区域：minmax(0,1fr) 问题流和宽屏桌面下 240px 的 'About this topic' 侧栏。卡片遵循信息流的安静行系统，带 48px 投票栏。移动端标签页仅在必要时滚动，问题流保持单栏，关于面板移至下方。
   动效：标签切换在 160ms 内交叉淡入淡出列表并播报其结果数，不重排无关主题。
3. **主题指南与相关主题** — 关于面板说明 'Good questions include your available light, pot size, plant variety, and what you have already tried.'。列出两位虚构主题主持人 Mara Ellis 和 Theo Bennett，包含其徽章及指向其代表性回答的链接。下方以链接芯片形式显示 'Related topics'：Balcony fruit、Herb harvests 和 Soil & compost；每个渲染自己的主题内容和指标，而非保留 [FEATURED_TOPIC]。最后以小号链接 'How badges and reputation work' 指向 '#/reputation'。
   布局：使用 18px 内边距、14px 正文文字、紧凑主持人行和可换行芯片。移动端流程中将相关主题置于页脚署名之前，使导航保持可发现。
   动效：悬停仅使用颜色和下划线。无自动主题轮播或关注者活动滚动条。

### 撰写回答编辑器（`#/write/container-tomatoes`）
1. **问题上下文与草稿状态** — 解析当前问题，回退到 container-tomatoes。显示指向该问题和 [FEATURED_TOPIC] 的面包屑链接、H1 'Write an answer'，以及包含完整问题标题、主题芯片和 'Answering as Guest contributor · demo profile' 的紧凑 Paper 摘要。添加可见披露 'Your draft and published answer stay on this device.'。首次访问预填一份有用的示例草稿：'I would start by tracking the direct light for three clear mornings. Four hours can be enough for a compact cherry tomato, but the combination of light, variety, and consistent watering matters more than any one fix. In my 20-liter pots, I keep one plant per container and avoid adding extra feed when the leaves already look lush. I would also check whether the railing shades the lower half of the plant before moving anything.'。访客可全部替换。每次更改都保存，并在 300ms 静默防抖后显示 'Draft saved on this device'，若存储不可用则显示 'Draft is kept for this session'。
   布局：此路由使用更宽的中央工作区，同时在大屏幕上保留共享页头和左侧主题栏。问题摘要位于编辑器上方，内边距 20px。移动端移除左侧栏，将草稿状态置于标题下方，使其永不截断。
   动效：保存状态仅改变不透明度；不要每次按键都闪现 toast。
2. **带安全实时预览的格式化编辑器** — 提供工具栏按钮 Bold、Italic、Link、Bulleted list、Numbered list、Quote 和 Inline code，带 Lucide 图标和无障碍标签。它们在当前选区插入或包裹相应的 Markdown。文本区标签为 'Your answer'，占位符为 'Share what you observed, what you tried, and what you would do next'。显示实时字数统计，发布前要求至少 40 词。Preview 面板使用问题页的 Newsreader 长文样式，将同一草稿渲染为安全的 React 元素，包括可见的引用块和列表（如存在）。原始 HTML 显示为文本，绝不作为标记。移动端 Write 和 Preview 为独立的无障碍标签页，桌面端为同时显示的带标签窗格。返回时恢复精确的每问题草稿，并包含带确认的 Clear draft。
   布局：在 1440px 下，在带边框的 18px 编辑器表面内使用两个相等的 minmax(0,1fr) Paper 窗格；工具栏横跨编辑器窗格顶部，文本区至少 440px 高，预览内边距 28px，最大行宽 680px。低于 900px 使用 Write 和 Preview 标签页及 52dvh 文本区。触摸屏上工具栏按钮保持 44px，允许水平换行而非裁剪。
   动效：输入后预览内容在 120ms 内交叉淡入淡出，无动画打字效果。减少动效下标签切换即时完成，并保留文本区选区。
3. **回答清单与本地发布** — 右侧或下方标题为 'Make the answer useful' 的清单包含 'Name your setup and constraints'、'Explain what you would try first' 和 'Say when a different condition changes the advice'。发布时校验 40 词下限，聚焦文本区，必要时显示具体错误。Forest 'Publish answer' 按钮以 Guest contributor 身份将回答追加到当前问题，标记为 'Published on this device'，仅清除该草稿，添加 5 点本地声誉并显示 aria-live 消息，然后导航到问题并显示新回答。次要按钮 'Return to question' 保留草稿。没有按钮声称回答已发送给其他人。
   布局：宽屏桌面下清单为 240px 右侧面板，发布操作粘性置于其下。较小屏幕上将清单和操作置于编辑器之后，移动端 Publish 占满宽度。确认 toast 保持在底部中央，避开导航和安全区域内边距。
   动效：发布使用短暂的按钮按下状态、标准路由过渡和一次礼貌 toast。无彩带、虚假进度条或网络加载旋转器。

### 声誉徽章与社区标准（`#/reputation`）
1. **原始徽章阶梯与本地进度** — H1 文案为 'Reputation marks useful participation.' 介绍文案：'Badges help readers understand a contributor's sample history; they are not credentials or a measure of personal worth.' 展示访客当前的 'Guest contributor' 卡片，含 240 基线演示积分、Helpful Hand 徽章、距 Trusted Guide 500 积分的进度，以及一条可见提示：本地发布可加 5 积分。四个原始等级为：New Voice 0 积分，单一描边方形徽记；Helpful Hand 100 积分，两个重叠方形；Trusted Guide 500 积分，小型罗盘星徽记；Community Anchor 1,500 积分，同心圆环徽记。四个徽记均以原创 SVG 绘制，不得复制任何现有社区徽章。说明示例贡献者积分为虚构，本地更改不会同步到任何地方。
   布局：使用 Paper 主视觉区，左侧为当前进度，右侧为大型 Sage 徽章组合。下方四张等级卡片在桌面端排成一行，各具不同徽记形状、积分阈值和一句话描述；移动端使用两列网格，文字为可读的 15px，徽记不得被裁切。
   动效：进度和积分总数仅在本地发布操作后动画。徽章徽记保持静态，减少动效设置下移除进度动画。
2. **积分与回答如何运作** — 提供一个紧凑的三列表格，表头为 Contribution、Reader value 和 Sample points。行：'Publish a complete answer'，'Adds experience others can evaluate'，+5；'Receive an upvote on an answer'，'A reader found the answer useful'，+10；'Receive a topic-host commendation'，'A host marked an especially careful explanation'，+25。表格标注为 'Illustrative community rules'，仅实现本地发布 +5 调整；不要添加虚假表彰按钮或模拟收到的投票。第二个面板 'Voting and collapsing' 说明：在此演示中，赞成票是本地信号，折叠仅改变访客自己的阅读视图。
   布局：使用可读表格，仅在视口需要滚动时使用粘性表头，表格数字右对齐，行描述为 15px。两个说明面板在表格下方堆叠，桌面端两列，移动端一列。
   动效：无动画计数或虚假的收到声誉事件。行使用简单悬停背景。
3. **社区标准与重置** — 本节标题为 'A useful answer leaves a clear trail.' 四条编号标准为：01 'Start with the conditions' — 光线、空间、工具和限制条件会改变建议；02 'Separate observation from guesswork' — 让不确定性可见；03 'Offer a next step, not a universal rule' — 尊重不同配置；04 'Keep people and places safe' — 绝不推荐不稳固的栏杆、堵塞的出口或危险的捷径。最后以 'Explore the questions' 链接到 '#/'，以及一个低调的 'Reset local demo' 按钮，该按钮在清除投票、关注、草稿、已发布回答、折叠和本地积分调整前要求确认。
   布局：使用 Forest 标准面板，桌面端为四行水平编号行，移动端为堆叠行。操作项出现在标准之后，位于 Paper 页脚带中，主导航与破坏性重置之间有足够间隔。
   动效：标准随路由一起出现，而非滚动隐藏卡片。重置使用标准无障碍确认对话框，带焦点陷阱和 160ms 淡入淡出。

## 资产
- 字体：通过 @fontsource-variable/newsreader 和 @fontsource-variable/source-sans-3（OFL）自托管 Newsreader Variable 和 Source Sans 3 Variable。在 src/main.tsx 中导入本地包的 CSS；绝不使用 Google Fonts、Adobe Fonts 或其他字体 CDN。
- 图标：使用 lucide-react（ISC）实现 Search、Menu、X、PenLine、ArrowUp、ArrowLeft、ArrowUpRight、ChevronDown、Check、Compass、BookOpen、Users、Award、BadgeCheck、Plus、Bold、Italic、Link、List、ListOrdered、Quote、Code2、Eye、Info 和 RotateCcw。仅自行绘制原始品牌和徽章标志；不要导入品牌图标。
- 图像：不使用位图图像，也不请求生成资产。在项目中以原创内联 SVG/CSS 创建八个虚构的几何贡献者头像、嘉宾头像、书叶 [BRAND] 标志和 favicon、情节网格主题徽章、四个徽章标志以及问题特定的现场笔记图表。不使用库存照片、真实肖像、外部头像、占位符服务、徽标或可识别的社区艺术作品。

## 不要做
- 不要添加后端、服务器代码、API 路由、身份验证、账户、数据库、websockets、分析、外部 API 或真实的多用户发布功能。所有交互和持久化都只在浏览器本地进行，并明确披露。
- 不要从 CDN 或远程 URL 加载脚本、样式、字体、图标、头像或图片。保持每个运行时资源都在本地，并使用相对路径配合 Vite base './'。
- 不要使用现有问答、论坛或社交产品的名称、标志、吉祥物、口号、精确布局、标志性的橙蓝配色、可识别的投票处理方式或徽章图案。
- 不要从真实社区或出版物复制问题、答案、评论、个人资料、指南、凭证或声誉历史。保持完整知识库为原创，并针对提供的变量进行改写。
- 不要使用真实人物的姓名、肖像、用户名、代言、雇主、大学或成就。所有贡献者都是虚构的几何 SVG 人物，与真实个人无任何相似之处。
- 不要使用仅首字母头像、图库照片服务、生成的位图肖像、动漫或游戏角色、真实品牌标志、商业字体、受限 UI 源码，或没有允许的宽松许可证的依赖项。
- 不要把信息流变成营销落地页，也不要添加纯排版的主视觉区、定价、用户评价、功能区块或促销注册墙。首屏必须是丰富的、可工作的社区应用。
- 不要让搜索、信息流筛选、问题链接、点赞、折叠控件、话题关注、编辑器格式化、预览、草稿保存、发布、声誉导航或重置操作失效；每个可见控件都必须有真实的本地结果。
- 不要假装示例指标、投票、关注者、声誉、徽章、答案或贡献者是实时或真实的。绝不要模拟传入活动，或声称本地答案已触达其他人。
- 不要显示日历日期、相对发布时间、虚假在线状态、真实世界时间戳，或关于当前活动的事实性声明。
- 不要对编辑器预览或答案渲染使用 dangerouslySetInnerHTML，不要允许原始 HTML 执行，也不要注入不受信任的标记。将允许列表中的 Markdown 子集渲染为安全的 React 元素。
- 不要添加持续的环境动画、滚动劫持、视差、自动播放轮播、虚假网络加载指示器、彩带，或忽略 prefers-reduced-motion 的动效。
- 不要生成 source maps，不要将 src/ 复制到 dist/，不要让 dist/ 超过 20 MB，也不要要求超过单个 npm run build 命令来完成生产输出。
- 不要使用裸目录链接或需要服务器回退的路由。将所有导航保持在 index.html 和声明的 hash 路由上；未知的问题和话题 slug 必须显示第一个有内容的条目。
- 不要添加 SEO 元数据、Open Graph 标签、JSON-LD、站点地图说明、关键词堆砌的标题或标题层级规则。一个普通的 [BRAND] 文档标题和原创 favicon 就足够了。
- 不要在产品 UI 内提及 VibeFather，除非是左侧栏页脚中可选的小型 [CREDIT] 链接。

---
— Prompt by VibeFather · https://vibefather.ai/t/q-a-community-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
