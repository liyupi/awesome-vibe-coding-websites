> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 热门话题微博客

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为对 [COMMUNITY_TOPIC] 感兴趣的 [AUDIENCE] 构建一个名为 [BRAND] 的原创静态微博客。首屏是一个完整、精致的应用工作区，包含导航、短帖编辑器、富媒体时间线和排名趋势面板。添加一个完整的趋势看板和聚焦话题页。所有账号、对话、计数和活动均为虚构的本地示例数据；明确将变化的热度分数标识为本地模拟。

- 受众：独立开发者、社区建设者、创作者、教育工作者和产品设计师，他们需要一个令人信服的社交社区原型，完全在浏览器中运行，并可通过一小组变量适配到不同主题。
- 目标：让访客浏览上升中的对话、打开话题、阅读帖子并与之互动，并发布一条带可选本地图片的短帖。让每个可见控件都有用，无需账号、远程 API 或服务器，并将访客的互动持久化到 localStorage。
- 语气：善于观察、友好、具体、从容。使用关于具体发现和进行中工作的简洁帖子，而非诱导互动的内容、泛泛的励志文案或对真实在线活动的声称。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react 18.3.1 和 react-dom 18.3.1（MIT）、lucide-react 0.468.0（ISC）、@fontsource-variable/bricolage-grotesque 5（OFL）、@fontsource-variable/inter 5（OFL）、@fontsource/ibm-plex-mono 5（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 配置 vite.config.ts，将 base 设为 './'，并将 build.sourcemap 设为 false；只生成静态的 dist/ 目录，绝不将 src/ 复制到其中。
  - 使用 Tailwind CSS 3.4，并为指定的颜色和字体系列做一个小型主题扩展；将全局焦点样式、滚动条样式、关键帧和减少动态效果覆盖放入 src/index.css。
  - 将所有品牌值、导航标签、示例账户、帖子、评论、话题、计数和作品选择保留在 src/content.ts 中。重写示例世界以适配所提供的变量值，而不是在替代构建中保留仅默认的城市自然文案。
  - 构建名为 AppShell、Composer、PostCard、Artwork、TrendBoard、TopicHeader、CommentThread、BookmarksDrawer 和 Toast 的聚焦组件；将共享交互状态保留在一个 React context 或一个小型自定义 store 中。
  - 在不引入其他依赖的情况下实现 hash 路由：index.html 是首页，./index.html#/trends 是完整看板，./index.html#/topic 显示 [FEATURED_TOPIC]，./index.html#/topic/<slug> 打开任何其他话题。未知话题 slug 回退到 [FEATURED_TOPIC]，绝不为空状态。
  - 使用由 [BRAND] 的小写 slug 派生的 localStorage 命名空间，使点赞、转发、书签、关注、评论和新帖子在重新加载后仍保留，且不会与另一个品牌冲突。
  - 创建一个确定性的本地活动序列，在初始渲染后每八秒更新热度分数和排名顺序；当文档隐藏时暂停它，并在请求减少动态效果时用 Refresh activity 按钮替换自动更新。
  - 对 composer 的可选图片使用 FileReader，以便最大 1 MB 的 PNG、JPEG 或 WebP 可以预览、移除、发布并在本地持久化；对其他类型或更大的文件用内联错误拒绝，并且绝不上传该文件。

## 变量
- [BRAND] — 社区名称（默认：“Cloverloop”）。一个自造的双音节或复合名称；由它派生文字标识、favicon、页面标题和存储命名空间。
- [COMMUNITY_TOPIC] — 社区主题（默认：“urban nature and citizen science”）。塑造每条示例帖子、插图、话题和社区描述的宽泛主题。
- [AUDIENCE] — 社区受众（默认：“neighborhood observers and amateur ecologists”）。对参与此社区的人的简洁描述。
- [FEATURED_TOPIC] — 精选趋势（默认：“Roof Gardens”）。在趋势板顶部以及裸 #/topic 路由处首先展示的领先话题；由该值派生其哈希 slug 和话题标签。
- [COMPOSER_PROMPT] — 发布框占位符（默认：“What did you notice outside today?”）。一个针对社区主题和受众定制的简短问题。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/trending-topics-microblog（默认：是；删除此行即可移除）

Pages & Sections 下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 画布（Canvas）`#F3F0E8` — 暖燕麦色页面背景，带有 3% 不透明度的极细微 CSS 点状纹理。
- 表面（Surface）`#FFFCF6` — 卡片、页头、发布器和抽屉。
- 墨色（Ink）`#20231F` — 主文本、深色导航胶囊和主按钮。
- 柔和色（Muted）`#6F7269` — 元数据、时间戳、次级标签和非活动图标。
- 线条（Line）`#D9D6CC` — 一像素边框、分隔线、输入框轮廓和热度条轨道。
- 珊瑚色（Coral）`#E86A4A` — 热度条、排名变化高亮、选中的反应强调色和小图形细节。
- 深珊瑚色（Coral Dark）`#A63F2A` — 浅色表面上可访问的珊瑚色文本、热门徽章文本、计数器警告和焦点细节。
- 鼠尾草绿（Sage）`#DCE8D8` — 新徽章、选中的筛选背景和柔和的插画区域。
- 森林绿（Forest）`#285846` — 新徽章文本、正向排名增量和实时模拟标签。
- 阳光黄（Sun）`#F1C75B` — 小型热门徽章区域和 SVG 插画中的暖色高亮；绝不用于正文文本。

### 字体排印（Typography）
- 展示与品牌：Bricolage Grotesque Variable（OFL），字重 600/700/800
- 界面与帖子正文：Inter Variable（OFL），字重 400/500/600/700
- 热度分数、计数、时间戳和排名数字：IBM Plex Mono（OFL），字重 500/600

### 布局与动效（Layout & motion）
- 间距：使用 4px 基准单位。桌面外壳最大宽度 1360px，外内边距 24px，列宽为 216px、minmax(0, 660px) 和 312px，列间距 24px。卡片在桌面端使用 20px 内边距，移动端 16px。帖子行具有 16px 的垂直节奏；趋势行高 64px。在 1440×900 下，显示完整页头、发布器、第一条媒体帖和至少五行趋势，且不显拥挤。
- 圆角：信息流和面板卡片使用 18px，插画和图片预览使用 14px，输入框和按钮使用 12px，标签、徽章、头像和图标按钮悬停区域使用 999px。边框和间距定义布局；仅在抽屉和聚焦时的粘性发布器上使用柔和的 0 10px 30px rgba(32,35,31,0.05) 阴影。
- 动效：首次加载时，外壳、发布器、第一条帖子和趋势面板以 40ms 错开，以 240ms 不透明度和 12px 向上显现；绝不对整个信息流进行持续数秒的动画。
- 动效：当本地活动改变排名时，使用 260ms FLIP 过渡对行重新排序，热度条宽度在 500ms 内使用 cubic-bezier(0.22,1,0.36,1) 过渡；仅对变化的数值增量进行短暂着色。
- 动效：新帖子以 280ms 不透明度和 -12px 变换过渡从顶部进入。Toast 在 180ms 内淡出并向上平移，停留 2.5 秒，且绝不覆盖发布器或移动端导航。
- 动效：反应按钮使用 160ms 颜色和背景过渡，无布局偏移。评论区以不透明度和最大高度过渡展开，同时保持键盘可访问。
- 动效：哈希页面切换时，主列在 180ms 内交叉淡入淡出，并将其标题滚动到视图中，移动端不使用平滑滚动。遵循 prefers-reduced-motion，移除显现、FLIP 移动、自动活动和平滑滚动。
- 图像：所有视觉元素均用代码绘制。使用四幅原创 16:9 内联 SVG 编辑插画，采用扁平几何形状、清晰的 2px 墨色轮廓、克制的珊瑚色、鼠尾草绿、阳光黄和奶油色填充，以及手工放置的微小纹理标记，而非照片。场景为：雨水充盈的屋顶花园、阴凉的社区树木地图、带有抽象传粉者的月见草，以及砾石与芦苇的袖珍湿地。不包含任何文字、标志、可识别地标、真实产品或人脸。从圆形、弧线和偏移色块生成抽象头像，每个虚构账户使用唯一种子；不要使用仅首字母头像、库存肖像或真实人物肖像。社区脉搏卡片中的紧凑 SVG 迷你折线图使用相同的视觉语言。首屏媒体帖和密集的应用 UI 是视觉锚点。

## 页面与区块
### 首页时间线（`index.html`）
1. **共享应用外壳** — 使用一个粘性的 68px 顶部页头，其中包含由三条错位圆角对话条构成的原创 [BRAND] 字标、一个居中的搜索框（标签为 'Search posts and topics'），以及一个深色的 'Write a post' 按钮。左侧栏包含 Home、Trends 和 Saved 导航、一张关于 [COMMUNITY_TOPIC] 的小型社区卡片，以及说明文字 'Fictional people, posts, and counts · Local demo'。Home 链接到 ./index.html，Trends 链接到 ./index.html#/trends，Saved 打开一个可用的书签抽屉。搜索会在访客输入时过滤帖子文本、账户名称和话题标题，显示一个清除按钮和一个结果计数，并支持 '/' 作为键盘快捷键。Write 按钮会将焦点移到编辑器。在低于 1024px 的屏幕上移除左侧栏，并将趋势面板放在信息流下方；低于 720px 时使用 60px 页头，将完整搜索框隐藏在搜索图标切换之后，并为 Home、Trends、Saved 和 Write 添加固定的底部导航。
   布局：将三栏外壳居中置于页头下方。左侧栏和右侧栏保持粘性，顶部偏移 20px，而中间栏自然滚动。桌面端页头搜索框宽度为 360px。移动端内容有 16px 的侧边内边距和 84px 的底部内边距，以确保固定导航永远不会遮挡操作。
   动效：粘性页头在滚动 8px 后获得略强的底部边框。移动端搜索在 180ms 内向下展开；书签抽屉在桌面端从右侧滑入 24px，在移动端从底部升起。
2. **信息流介绍与编辑器** — 中间栏以眉题 'YOUR COMMUNITY'、H1 'Your corner of the conversation.' 以及辅助行 'Short posts and rising ideas from [AUDIENCE] exploring [COMMUNITY_TOPIC].' 开头。将编辑器直接放在下方，包含一个预置的几何头像、一个使用 [COMPOSER_PROMPT] 的文本域、一个图片预览区域和一行底部操作。操作项为 Image、Add [FEATURED_TOPIC] 和 Post。使用 280 字符限制，并带有数字计数和 20px 圆形进度指示器；在 260 字符时显示珊瑚色，超过 280 时显示红色，并且仅当内容为空且无图片或超出限制时才禁用 Post。Image 打开本地文件选择器，话题按钮在光标处插入派生的精选话题标签，Post 将条目添加到顶部，作者为 'You'，重置编辑器，并显示 'Post added to your local feed'。
   布局：介绍部分位于开放画布上，垂直内边距为 20px。编辑器是一个 Surface 卡片，左上角有头像，一个至少 76px 高的无边框文本域，以及图标操作上方的一条分隔线。选中的图片显示为 160×110px 的裁剪预览，并带有一个带标签的移除按钮；验证消息位于其下方，不会移动操作行。
   动效：聚焦时给编辑器一个 2px Coral Dark 轮廓，并带有 3px 柔和偏移。字符环在文本变化时插值其描边。发布时仅对新卡片进行动画，并重置文本域，不会导致页面跳动。
3. **时间线** — 使用标签 'Latest' 和 'Most discussed'；Latest 按提供的相对时间顺序排序，Most discussed 按评论数排序。为默认值预置六条原创帖子：Lena Ortiz（@lenaobserves），'The rain garden on Alder Street held every drop from last night’s storm. Fourteen new shoots are coming through along the southern edge. #RoofGardens'，配有屋顶艺术图，24 个赞、6 次转发、4 条评论、'8m'；Mateo Chen（@mateomaps），'I mapped every public drinking fountain within a ten-minute walk of the community garden. The shaded route wins. #StreetTreeWatch'，配有树木地图艺术图，41 个赞、9 次转发、7 条评论、'21m'；Priya Nair（@priyainthefield），'A tiny victory: the library approved our seed-sharing drawer. Bring labeled envelopes, take something unexpected, and leave a note for the next grower. #SeedLibraries'，无图片，63 个赞、12 次转发、11 条评论、'36m'；Theo Martin（@theoafterdark）转发 Jun Park，'Three hawk moths at the evening primrose tonight. The best garden show starts after sunset. #NightPollinators'，配有传粉者艺术图，38 个赞、14 次转发、5 条评论、'48m'；Ada Flores（@adamakes），'Our pocket wetland filter is just gravel, sand, and patience. Week two: the water finally runs clear. #PocketWetlands'，配有湿地艺术图，52 个赞、8 次转发、9 条评论、'1h'；以及 Jonah Bell（@jonahreads），'What is one small patch of green you would protect on your block? I am collecting answers for a hand-bound neighborhood atlas. #StreetTreeWatch'，无图片，29 个赞、3 次转发、12 条评论、'2h'。为替代变量值重写名称、话题、帖子文案和艺术图，同时保留四条媒体帖和两条纯文本帖的混合。每张卡片都有 Like、Repost、Comment、Bookmark 和 Share 操作，并带有无障碍标签。Like、Repost 和 Bookmark 每位访客只能切换一次，并更新其计数。Comment 展开两条预置评论以及一个可用的回复字段。Share 复制一个包含帖子 id 的本地 URL 并显示 toast；不要调用真实的社交服务。
   布局：卡片之间用 12px 分隔，而不是将每条帖子放在一个厚重的浮动容器中。使用 44px 头像，账户名称和相对时间在同一行，正文为 15px/1.6，媒体帖下方为全宽 16:9 艺术图。操作图标位于四列行中，Bookmark 和 Share 分组在末尾；切换时计数保持对齐。转发的帖子在作者行上方显示一个紧凑的 Repeat2 标签。评论线程使用左侧竖线和较小的几何头像。
   动效：悬停时在操作图标后方显示淡色 Canvas 底色。反应状态变化使用短暂的颜色过渡，而不是弹跳的心形。展开的评论淡入；新提交的评论以 160ms 的向上显现出现。
4. **趋势预览与社区脉搏** — 右侧栏以 'Rising now' 和一个标有 'Local live simulation' 的绿点开头。列出完整趋势数据中的前五个话题：#RoofGardens 热度 94，18.4K 帖子，HOT；#NightPollinators 热度 86，12.7K 帖子，+1；#RainwaterMapping 热度 79，9.8K 帖子，NEW；#StreetTreeWatch 热度 72，8.2K 帖子，−1；#PocketWetlands 热度 66，6.9K 帖子，+2。每行链接到其哈希话题页面，并显示排名、话题、帖子数、变化量和热度条。以 'View all trends' 结尾，链接到 ./index.html#/trends。在其下方放置 'Community pulse'、一个原创 SVG 迷你折线图、示例标签 '128 local interactions this session'，以及一段简短说明，指出活动是在浏览器中生成用于演示。
   布局：使用一个内边距为 20px 的 Surface 面板，不要在每个话题周围嵌套卡片。排名数字占 24px，标题单行截断，热度条在剩余行宽上高 5px。脉搏卡片有鼠尾草色底和 96px 高的迷你折线图。在平板端将两个面板以两列网格移到时间线下方；在移动端以单列先显示 Rising now，再显示 Community pulse。
   动效：热度条从之前的值开始动画，排名变化会为其变化量着色 600ms。绿色模拟点保持静止，而不是持续脉动。

### 实时趋势板（`#/trends`）
1. **趋势板页头** — 替换首页中栏，同时保留共享外壳。显示眉题 'DISCOVER'、H1 'What is rising today.'，以及文案 'A browser-generated ranking of fictional conversations across [COMMUNITY_TOPIC].'。在其旁边放置一个紧凑的热度图例，说明 'Heat combines sample post velocity and discussion depth; it is not real network data.'。包含 All、Hot 和 New 筛选标签，以及一个 Refresh activity 按钮，该按钮在任何动效偏好下都保持可用。
   布局：在一个全宽 Surface 板上方使用开放式画布标题。将筛选器放在文案下方一行无滚动的行中，热度图例在桌面端放在 220px 的侧注中；在移动端将注记堆叠在筛选器上方。
   动效：筛选器变化时，板行在 160ms 内交叉淡入淡出，不改变标题高度。
2. **排名主题表格** — 渲染全部六个主题：#RoofGardens 热度 94、18.4K 帖子、HOT 和 +3；#NightPollinators 热度 86、12.7K 帖子 和 +1；#RainwaterMapping 热度 79、9.8K 帖子、NEW 和 +4；#StreetTreeWatch 热度 72、8.2K 帖子 和 −1；#PocketWetlands 热度 66、6.9K 帖子 和 +2；以及 #SeedLibraries 热度 58、5.4K 帖子、NEW 和 +2。精选主题来自 [FEATURED_TOPIC]；为替代值重写全部六个标题和讨论描述。使用确定性的八步活动序列将分数调整一到三分，当分数交叉时重新排列行，然后停在稳定状态，而不是无限运行。每一行在 ./index.html#/topic/<slug> 打开所选主题。一个小型 Follow 按钮独立切换并持久化。
   布局：每个桌面行是一个 88px 网格：44px 排名、minmax(170px,1fr) 主题和描述、92px 帖子数、minmax(120px,220px) 热度轨道、64px 增量，以及 88px 关注操作。用更大的等宽排名数字强调前三名，而不是领奖台卡片。在移动端，每一行变成两行，第一行是排名和主题，第二行是热度和操作；在 390px 下保持所有标签可见且无水平滚动。
   动效：应用指定的 FLIP 排名和热度条过渡。在刷新或定时 tick 后，通过礼貌的实时区域宣布 'Trend activity updated'，而不是为每一行弹出 toast。
3. **主题对比页脚** — 在表格下方添加一条细摘要条：'6 fictional topics'、'61.4K sample posts' 和 'Activity stays in this browser'。包含一个文本链接 'Read the leading conversation'，指向裸 ./index.html#/topic 路由，该路由始终解析为 [FEATURED_TOPIC]。
   布局：在桌面端使用三个均匀间隔的等宽统计数据，最后一个文本链接右对齐。在移动端堆叠为两列统计数据网格，随后是链接。
   动效：无额外动画。

### 主题对话（`#/topic`）
1. **主题刊头** — 对于默认值，显示返回 Trends 的链接、标签 'FEATURED CONVERSATION'、H1 '#RoofGardens'，以及描述 'Practical notes, small experiments, and photographs replaced by original field sketches from people growing above the street.'。显示热度 94、18.4K 示例帖子和 1,842 虚构关注者，并带一个 Follow topic 按钮。添加三个相关主题标签：#PocketWetlands、#RainwaterMapping 和 #SeedLibraries。对于替代值，从重写的内容文件派生 H1、路由、相关主题、描述和计数；裸路由始终显示 [FEATURED_TOPIC]，绝不显示未找到屏幕。
   布局：将刊头放在一个大型 Surface 卡片中，右侧三分之一沿边放置 Coral-to-Sun 抽象等高线绘图，文本保持在左侧。统计数据在描述下方形成三列行。相关标签位于底部并整齐换行。在移动端仅隐藏装饰性等高线绘图，保留所有内容和操作。
   动效：Follow 按钮在 160ms 内在描边加号状态和 sage 对勾状态之间变化。刊头使用正常的页面交叉淡入淡出，而不是视差。
2. **主题编辑器和筛选信息流** — 复用完整编辑器，已插入精选话题标签，文本区域占位符为 'Add to this conversation…'。在其下方仅显示与所选主题关联的帖子，以 Lena 的屋顶帖子开头，随后是两个额外的种子条目：Noor Bennett (@noorgrows)，'A shallow crate, two drainage layers, and herbs that do not mind the wind. My smallest roof bed is finally thriving. #RoofGardens'，33 个赞、5 次转发、6 条评论；以及 Eli Ward (@eliaboveground)，'The west planters need shade cloth before noon. The east bed is happy with nothing more than yesterday’s rain. #RoofGardens'，27 个赞、4 次转发、3 条评论。两者都使用从原始屋顶 SVG 适当裁剪的细节，而不是新的图像文件。选择相关主题会交换刊头并将集中帖子筛选到该主题。保持 Like、Repost、Comment、Bookmark、Share、图像选择、字符计数和发布行为与 Home 完全相同。
   布局：使用与 Home 相同的中栏卡片，使导航感觉连续。将紧凑编辑器放在筛选结果上方，并在它们之间显示结果计数，例如 '3 sample posts'。右侧栏包含 About this trend 面板和相关主题列表，而不是重复完整排名。
   动效：切换主题时，在刊头更新后交叉淡入淡出信息流。新发布的帖子立即加入当前主题信息流，并在重新加载后保留。

## 资源

- 图片：创建原创内联 SVG 组件 src/components/artwork/RoofGarden.tsx：一个 16:9 的几何风格雨后屋顶花园，包含珊瑚色花箱、鼠尾草绿植、奶油色建筑、深色轮廓，且不含文字、标志、人物或外部图片引用。将其用于 Lena 的家居帖子和两个话题流详情裁剪图。
- 图片：创建 src/components/artwork/TreeMap.tsx 作为原创 16:9 SVG 街区示意图，包含抽象街道、一条步行小径、圆形树冠和通用喷泉圆点。不要使用真实地图、地名、地图提供商瓦片、标签或标志。
- 图片：创建 src/components/artwork/NightPollinators.tsx 作为原创 16:9 SVG 黄昏花园，包含超大奶油色报春花、三个抽象飞蛾形状、深墨色天空和珊瑚色点缀。不得包含现有角色、写实物种插图、文字或标志。
- 图片：创建 src/components/artwork/PocketWetland.tsx 作为原创 16:9 SVG 剖面图，展示一个小型砾石与沙子过滤器，包含芦苇、水层和精确的几何纹理。保持插画风格，而非照搬工程图；不得包含标签或标志。
- 图片：创建 src/components/artwork/AbstractAvatar.tsx，使用指定调色板中的圆形、弧线和偏移块，根据账户名种子渲染确定性的几何头像。不要获取人像、使用真实肖像，或回退为仅首字母的圆形。
- 图片：创建 src/components/artwork/CommunityPulse.tsx 作为本地 SVG 迷你折线图，绘图区高 96px，珊瑚色 3px 路径，浅鼠尾草绿区域填充，且不依赖图表库。其数据点基于固定的本地活动序列。
- 图标：仅使用本地打包的 lucide-react 0.468.0 图标：Home、TrendingUp、Search、Bookmark、UserRound、PenLine、ImagePlus、X、Heart、Repeat2、MessageCircle、Share2、ArrowUpRight、ArrowLeft、Flame、Sparkles、Check、Plus、Send、RefreshCw 和 ChevronDown。为装饰性图标设置 aria-hidden，并为每个按钮提供可见标签或屏幕阅读器标签。不得使用第三方品牌图标。
- 字体：通过 @fontsource-variable/bricolage-grotesque 5（OFL）安装并自托管 Bricolage Grotesque Variable；导入本地包 CSS 并使用 600–800 字重。
- 字体：通过 @fontsource-variable/inter 5（OFL）安装并自托管 Inter Variable；导入本地包 CSS 并使用 400–700 字重。
- 字体：通过 @fontsource/ibm-plex-mono 5（OFL）安装并自托管 IBM Plex Mono，仅导入本地 500 和 600 字重文件。创建 ASSETS.md，列出这些 npm 包、Lucide、其许可证以及原创代码绘制 artwork；无需下载栅格资源。

## 不要做
- 不要使用任何真实社交平台名称、标志、吉祥物、口号、专有字体、商标图标、精确品牌配色或逐像素界面。
- 不要复制真实帖子、用户名、个人照片、趋势、评论、代码或艺术作品；每个账号和指标都是虚构示例内容，所有插图必须是原创代码。
- 不要添加后端、身份验证、数据库、API 路由、远程表单提交、分析、真实社交分享或第三方活动服务。如实标注模拟活动，并将所有状态保留在浏览器中。
- 不要热链图片、字体、脚本、图标、地图瓦片或其他资源。不要使用图库网站、占位图服务、CDN、真实人脸、可识别地标或外部 SVG 文件。
- 不要从 Google Fonts 或其他 CDN 加载字体；仅使用指定的自托管 Fontsource 包，并保持精确的三字体系排版系统。
- 不要替换技术栈、添加路由或动画依赖、使用受限组件库源码或引入商业字体。使用 React、Tailwind、Lucide、CSS 过渡和指定的本地哈希路由器。
- 不要使用裸目录链接。使用 ./index.html、./index.html#/trends、./index.html#/topic 和 ./index.html#/topic/<slug>；打开不带 slug 的 #/topic 必须显示 [FEATURED_TOPIC]。
- 不要发布 source map、dist/ 中的 src/ 文件、未压缩的生产输出或大于 20 MB 的 dist/。保持 base './'，以便静态构建可从嵌套演示路径工作。
- 不要留下死按钮、装饰性搜索字段、无功能标签页或占位符注释。每个撰写、筛选、关注、反应、书签、分享、抽屉和导航控件都必须支持鼠标、触摸和键盘操作。
- 不要上传撰写器图片或接受超过 1 MB 的文件。为用户添加的图片提供预览、移除、验证、替代文本输入和本地持久化，且不发起网络请求。
- 不要在 1440×900 和 390×844 下允许水平溢出或控件被遮挡。保持触摸目标至少 44px、可见焦点指示器、足够对比度、语义按钮、带标签输入和零控制台错误。
- 不要忽略 prefers-reduced-motion、运行无尽背景活动、使用自动播放声音、闪烁内容或用排名动画阻碍阅读。
- 不要添加 SEO 元数据、Open Graph 标签、JSON-LD、站点地图、分析或关键词堆砌文案；仅使用从 [BRAND] 派生的纯文档标题和简单的原创 favicon。
- 不要显示日历日期或暗示真实在线用户、真实流行度或已验证指标。使用提供的相对时间示例标签，并清楚标记计数和热度为虚构本地数据。
- 不要在 src/content.ts 之外硬编码默认城市自然文案，或在变量不同时保持其不变；从当前值派生话题标签、主题 slug、品牌标签、存储键和所有示例内容。

---
— Prompt by VibeFather · https://vibefather.ai/t/trending-topics-microblog · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
