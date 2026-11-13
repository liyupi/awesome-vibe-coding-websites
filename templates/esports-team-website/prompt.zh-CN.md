> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 电子竞技战队网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个完整的原创电子竞技组织网站，该组织在 [SEASON_NAME] 期间以 [HOME_CITY] 为基地参加 [DISCIPLINE] 项目。使用 [TEAM_CODE] 作为战队简称。交付一个电影感的首页，以及阵容、比赛、商店和新闻的哈希路由。所有战队成员、对手、赞助商、赛事名称、产品、标题、统计数据和故事均为虚构。将每个变量值、导航标签、选手记录、比赛记录、产品、赞助商、故事、UI 字符串和 alt 文本都保留在 src/content.ts 中。当变量值发生变化时，重写整个内容集，以形成一个连贯的新组织，而不是仅仅替换页眉名称。

- 受众：电子竞技战队、游戏团体、创作者小队、社区赛事组织，以及他们的粉丝、选手、合作伙伴和周边商品客户。
- 目标：为粉丝提供一种快速了解战队、查看阵容和统计数据、关注赛程和赛果、阅读原创战队故事、发现虚构合作伙伴，并在可用的本地演示购物车中组装周边商品订单的方式。
- 基调：专注、竞技、精准且具有编辑感。使用关于准备、团队协作、回合、地图和恢复的简短陈述性文案。避免攻击性垃圾话、赌博用语、空洞的溢美之词、虚假的实时活动和通用的创业公司语言。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript 5
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react 18.3.1 (MIT)、react-dom 18.3.1 (MIT)、motion 11 (MIT)、lucide-react (ISC)、tailwindcss 3.4 (MIT)、@fontsource/barlow-condensed (OFL-1.1)、@fontsource/inter (OFL-1.1)、@fontsource/jetbrains-mono (OFL-1.1)
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置（Setup）：
  - 配置 Vite：base: './'、build.outDir: 'dist'、build.sourcemap: false、emptyOutDir: true；使用单个 index.html 入口，不含服务端代码。
  - 实现一个带类型的小型 hash 路由，监听 window 的 hashchange 事件。路由为 home、#/roster、#/matches、#/shop 和 #/news；所有导航 href 使用 ./index.html 或 ./index.html#/route，未知 hash 返回 home。
  - 使用设计（Design）中的颜色和字体族配置 Tailwind。将切角工具类（clipped-corner utilities）、关键帧（keyframes）、焦点样式（focus styles）、减少动效覆盖（reduced-motion overrides）和自定义滚动条样式（custom scrollbar styling）放入 src/index.css。
  - 在 src/main.tsx 中仅导入指定的本地 Fontsource 字重。不要使用字体 CDN。
  - 创建 src/content.ts 作为唯一内容源。导出一个内容工厂（content factory），接收五个变量，返回完全重写的 team、roster、match、sponsor、product、story、navigation 和 UI 内容。
  - 在运行应用前，将六张生成的图片下载到 public/images，通过相对本地路径引用，并在项目根目录创建 ASSETS.md，列出所有来源与署名。
  - 使用 Motion 的 React API 实现入场、布局、模态框、抽屉和路由过渡。界面图标仅使用 lucide-react；团队标志、赞助商标志、数据条和产品插图以原创内联 SVG 或 CSS 绘制。
  - 在合适的地方将购物车内容、已选变体和已关闭的 UI 偏好保存在 localStorage 中。任何购物车、筛选、抽屉、手风琴或结账控件都不得是装饰性或无功能的。

## 变量
- [BRAND] — 团队名称（默认：“Static Vale”）。贯穿整个网站使用的虚构电子竞技组织名称。
- [TEAM_CODE] — 团队简称代码（默认：“STV”）。三个大写字母，用于比分条、队服图案和紧凑标签。
- [DISCIPLINE] — 竞技项目（默认：“Tactical arena”）。通用或虚构的竞赛类别，绝不使用真实游戏名称。
- [HOME_CITY] — 所在城市（默认：“Rotterdam”）。团队基地，用于首屏主视觉区和页脚。
- [SEASON_NAME] — 赛季或系列赛名称（默认：“Meridian Open”）。为赛程和新闻虚构的赛季或赛事名称。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/esports-team-website（默认：是；删除此行即可移除）

“页面与区块”下的文案按默认值撰写。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 虚空（Void）`#080A0B` — 页面背景和最深的页脚表面。
- 碳黑（Carbon）`#111517` — 卡片、抽屉、导航和交替的内容带。
- 钢灰（Steel）`#2A3134` — 一像素分隔线、表格边框、统计轨道和禁用状态。
- 粉笔白（Chalk）`#F3F6EF` — 主标题、比分和高强调文本。
- 薄雾灰（Mist）`#98A39F` — 次要文案和元数据；在虚空（Void）或碳黑（Carbon）上以可读字号使用。
- 伏特绿（Volt）`#C8FF3D` — 用于行动号召、激活筛选器、选中统计和纤细灯光细节的唯一电光强调色。

### 字体排印（Typography）
- 展示文字和比分：Barlow Condensed（OFL），字重 600/700/800
- 正文和界面：Inter（OFL），字重 400/500/600
- 统计数据、标签和比赛元数据：JetBrains Mono（OFL），字重 400/500/600

### 布局与动效（Layout & motion）
- 间距：使用 12 列网格，内容最大宽度 1440px，桌面端边距 48px，移动端边距 20px，桌面端网格间隙 24px。主要区块的垂直内边距为桌面端 112px、移动端 72px。卡片内边距为桌面端 28px、移动端 20px。数据行保持紧凑，高度 64–76px，正文行宽低于 68 个字符。
- 圆角：使用直角，主要图片卡片的右上角做 18px 切角，小型数据面板的左下角做 10px 切角。按钮圆角为 2px，模态抽屉无圆角，仅微型状态标签可完全圆角。切勿将设计软化为通用的圆角卡片。
- 动效：首页初始加载时，主视觉标题以两行遮罩形式在 560ms 内显现，眉题和行动号召在 100ms 错峰后淡入，竞技场图片在 900ms 内从 scale 1.045 缓动至 1。
- 动效：使用 Motion 的 whileInView 显现区块标题和卡片组，向上位移 24px，时长 480ms，子元素错峰 70ms；在 18% 可见度时触发一次。
- 动效：赞助商条以 28 秒的缓慢无缝跑马灯运行，悬停或键盘聚焦时暂停。不要对导航、比赛数据或关键文案使用跑马灯。
- 动效：在阵容悬停或聚焦时，头像上移 6px 并显示紧凑的统计栏；选中时，以 240ms 水平过渡打开球员详情抽屉，并共享焦点管理。
- 动效：使用 180ms 淡入加 8px 的路由过渡、200ms 手风琴高度过渡，以及 240ms 购物车和产品抽屉。遵循 prefers-reduced-motion，移除变换、平滑滚动、视差、计数效果和跑马灯移动，同时保留所有最终可见状态。
- 图像：仅使用六张提供的 AI 生成照片，作为一次连贯的虚构球队拍摄：一张宽幅竞技场合影和五张 3:4 的个人球员肖像。全部采用纯黑色运动服饰、炭灰色雾气、青黑色阴影、微妙的酸性青柠色轮廓光、写实编辑摄影风格，且无文字或标志。宽幅主视觉是宽敞的合影场景，绝非紧凑的面部特写。桌面端个人肖像统一裁剪至躯干中部，移动端稍高。在选定的新闻卡片中复用合影或肖像，而非添加无关的图库素材。所有商品绘制为精致的原创黑与伏特绿 SVG 产品插画，并用代码绘制简单的抽象赞助商标记。每张球队肖像都是虚构占位符，绝不用首字母缩写替代或使用真实人物的肖像。

## 页面与区块
### 首页（`index.html`）
1. **全局页头与公告栏** — 一条 34px 高的顶部栏显示 'NEXT / [TEAM_CODE] vs Iron Union / SAT 19:00 CET'，并链接到 ./index.html#/matches。76px 高的主页头包含一个原创的三斜线队伍标志、[BRAND]，以及标注为 Home、Roster、Matches、Shop、News 的链接。当前激活的路由带有 volt 下划线。购物车按钮显示实时商品数量，并打开商店购物车抽屉。在移动端，使用 64px 高的页头，配一个 Menu 按钮，点击后在页头下方打开一个全宽、可访问的导航抽屉。
   布局：固定在顶部，位于 Void 背景之上，带 Steel 底边框和不透明 Carbon 背景；不使用半透明玻璃效果。桌面端导航为水平排列。移动端导航在请求前隐藏，关闭后不锁定滚动，并在选择路由或按 Escape 时关闭。
   动效：公告栏以 12px 淡入进入；移动端抽屉和购物车数量使用简短的 Motion 过渡，不延迟导航。
2. **电影感队伍主视觉** — 眉题：'[HOME_CITY] / [DISCIPLINE]'。超大 H1 为 '[BRAND]'，后接描边第二行 'NO QUIET ROUNDS.'。辅助文案：'Five players. One read. Patient setups, decisive finishes, and every round accounted for.' 主 CTA 'Meet the roster' 链接到 ./index.html#/roster；次级 CTA 'Match center' 链接到 ./index.html#/matches。添加一个紧凑的下一场比赛面板，标注 'NEXT SERIES'、'[TEAM_CODE] vs IRU'、'Meridian semifinal / Best of 3' 和 'Saturday / 19:00 CET'。
   布局：在 1440×900 下最小高度为 740px，包含页头偏移。宽幅 hero-arena 图片占据第 5–12 列并占满主视觉高度，带棱角左侧遮罩和保护文案的深色渐变。标题和文案占据第 1–7 列，并略微重叠图片边缘。[BRAND] 设为 152px/0.82、字重 700，'NO QUIET ROUNDS.' 设为 74px；移动端使用 64px 和 42px。下一场比赛面板在桌面端置于右下角，在移动端直接置于 CTA 下方。确保团队合影在移动端首屏内可见，将其置于下半部分之后，而非所有文案下方。
   动效：使用指定的遮罩标题和图片缩放入场。仅添加与滚动前 400px 绑定的细微图片位移；在减少动效和小屏幕上移除该效果。
3. **赛季数据** — 四项精确的默认指标：'12–4 / SERIES RECORD'、'68% / MAP WIN RATE'、'1.18 / TEAM K/D'、'14 / CLUTCH WINS'。添加注释 'Local sample data for the [SEASON_NAME].'，而非暗示实时数据连接。
   布局：紧接主视觉之后的一条带边框四列横带，使用 64px 压缩数字和等宽标签。移动端使用两列，注释保持全宽。
   动效：随区块交错显示每项指标；不要使用长时间计数动画或伪造实时更新。
4. **精选阵容** — 标题 'Five ways to win a round.' 文案：'Different instincts, one shared playbook.' 展示 Kestrel / IGL、Mako / Entry 和 Sable / Flex 作为三位精选选手，球衣号码分别为 01、14 和 07，并配各自的选手照片。每张卡片包含一项标志性数据：Kestrel '72% KAST'、Mako '58% opening duels'、Sable '1.16 K/D'。CTA：'Full roster'。
   布局：区块标题跨四列，卡片以三卡一行占据剩余区域。使用 3:4 裁切肖像框、号码水印、角色标签、选手代号和数据栏。移动端使用水平吸附轮播，卡片宽 82vw，可见下一张卡片露出，带滚动按钮，且不隐藏阵容内容。
   动效：肖像和数据栏的悬停行为遵循设计规范。轮播控件仅在未要求减少动效时使用原生平滑滚动。
5. **比赛中心预览** — 标题 'The next test. The last receipt.' 即将开始：'[TEAM_CODE] vs Iron Union'、'Semifinal / Best of 3 / Saturday 19:00 CET'。最新赛果：'[TEAM_CODE] 2–1 Ochre Labs'，地图比分 'Array 13–9 / Causeway 8–13 / Foundry 13–7'，以及 'Mako 1.42 series rating'。CTA 'All fixtures & results'。
   布局：两个不等宽面板：即将开始的比赛跨七列，使用超大队伍代码和 volt NEXT 标签；最新赛果跨五列，带紧凑地图表格。移动端堆叠，比分无需水平滚动即可见。
   动效：悬停最新赛果时高亮决胜地图行；面板以共享的区块时序显示。
6. **虚构合作伙伴条** — 标签 'BUILT WITH OUR PARTNERS'。展示五个虚构赞助商名称：Brivo Chairs、Zestfuel、Loam Coffee、Twill Hardware 和 Aster Mobility。为每个名称绘制不同的简单原创几何标志（SVG），不得与现有品牌相似。包含一个静态的 'Partnership enquiries' mailto 链接，使用 hello@[brand-slug].example，确保不会发送真实消息。
   布局：宽屏下在 overflow-hidden 跑马灯轨道内放置两组相同内容；每个合作伙伴为 220px 单元格，含抽象标志和文字。在窄屏或减少动效时，显示静态两列换行网格，不重复可访问内容。
   动效：在支持的桌面客户端上缓慢无缝滚动；悬停或聚焦时暂停，减少动效下禁用。
7. **周边预览** — 标题 'The off-map uniform.' 文案：'Heavy cotton, quiet branding, and room for long LAN days.' 展示四件产品：Home Jersey €64、Scrim Hoodie €72、Static Cap €28 和 Team Scarf €24。使用原创 SVG 产品插画，而非照片。每张卡片有一个可用的 Quick view 按钮和一个 Add 按钮，后者选择默认尺码并打开购物车。CTA 'Shop all six pieces'。
   布局：四张等宽卡片，带 4:3 产品图区域、等宽产品编号 01–04、名称、价格和颜色标签。移动端使用两列网格，按钮标签堆叠并在 390px 下适配。
   动效：产品图悬停位移不超过 8px；快速查看和购物车使用可访问的 Motion 抽屉。
8. **最新队伍故事** — 标题 'Notes from inside the round.' 特稿 'Five maps, one calm finish'，副标题 'The timeout that helped [BRAND] stop chasing and start trading.' 次级故事：'Inside our 40-minute reset routine' 和 'A home kit built for long LAN days'。分别包含标签 Matches、Culture 和 Team，以及 '6 min read'、'4 min read' 和 '3 min read'。
   布局：特稿跨七列，使用裁切的 hero-arena 图片；两个堆叠故事行跨五列，配小尺寸选手图片裁切或原创代码绘制图表。移动端堆叠。每个 Read story 控件链接到 ./index.html#/news，并通过本地内容状态标识要展开的故事。
   动效：图片遮罩显示仅使用一次，链接悬停时箭头轻微位移。
9. **全局页脚** — 大字声明 'STAY READY.'，后接 '[BRAND] / [HOME_CITY]'。包含五个路由链接、一个使用 hello@[brand-slug].example 的 Contact 链接，以及一行紧凑文字 'Independent [DISCIPLINE] team competing in the [SEASON_NAME].' 仅在渲染器提供时添加可选的 [CREDIT] 页脚链接。不要添加指向死链的社交图标或虚假的新闻订阅表单。
   布局：Void 页脚，带 Steel 顶边框，超大压缩声明跨八列，以及两个小链接列。移动端声明安全换行，链接变为两列网格。
   动效：无持续动画；声明以遮罩行方式显示一次。

### 阵容（`#/roster`）
1. **阵容介绍** — 眉题 'ACTIVE FIVE / [SEASON_NAME]'。H1 'Different instincts. One read.' 引言：'Meet the five players behind [BRAND], their roles, and the numbers that shape a series.' 添加一个紧凑的图例，将 KAST 解释为 'rounds with a kill, assist, survival, or trade'，将 K/D 解释为 'kill-death ratio'；如果 [DISCIPLINE] 发生变化，则替换为合适的虚构指标和说明。
   布局：5/7 分割的页头，右侧带一个描边的 '05' 阵容计数。桌面端标题保持 84px，移动端 52px，指标词汇表位于下方两行短行中。
   动效：共享标题显现；阵容计数以 300ms 不透明度过渡绘制进入。
2. **角色筛选与完整选手网格** — 提供筛选按钮 All、IGL、Entry、Flex、Support 和 Anchor，并带实时结果计数。默认选手：Kestrel / Mara Voss / #01 / IGL / player-kestrel 图片 / 72% KAST / 1.08 K/D / 14 次残局；Mako / Jae Park / #14 / Entry / player-mako 图片 / 58% 首杀对决 / 1.24 K/D / 每回合 186 伤害；Sable / Luis Serrano / #07 / Flex / player-sable 图片 / 69% KAST / 1.16 K/D / 7.8 回合影响力；Tinker / Amara Okafor / #22 / Support / player-tinker 图片 / 76% KAST / 0.96 K/D / 31% 助攻率；Vexa / Elias Nyström / #09 / Anchor / player-vexa 图片 / 71% KAST / 1.11 K/D / 18 次站点防守。将所有数值标注为虚构的赛季示例数据。
   布局：筛选行位于响应式三列卡片网格上方；最后两张卡片对齐网格而非拉伸。每张裁剪卡片包含肖像、编号、代号、全名、角色和两个可见指标。筛选立即更新，并带 aria-live 计数。移动端为单列，3:4 图片高度不超过 460px。
   动效：使用 Motion 布局过渡动画化卡片布局变化，保持焦点在活动筛选上，并在减少动效模式下立即显示所有卡片。
3. **选手详情抽屉** — 选择选手会打开右侧抽屉，包含相同的肖像、代号、姓名、角色、编号、两句简介、四个带标签的统计条和三项近期表现。Kestrel 的简介：'Mara calls the early round slowly and the final twenty seconds fast. She tracks opponent utility with a handwritten three-color system.' Mako 的简介：'Jae creates the first opening and calls his own timing. He reviews every lost entry before watching a single highlight.' Sable 的简介：'Luis moves between second entry and late-round anchor. His calm mid-round calls keep the playbook flexible.' Tinker 的简介：'Amara builds rounds around information and well-timed support. She also runs the team's replay tagging library.' Vexa 的简介：'Elias prefers patient holds and narrow crossfires. He leads the final ten-minute defensive walkthrough before every match.' 近期表现使用 content.ts 中合理的本地地图名称和比分。包含 Previous 和 Next 选手控件。
   布局：桌面端抽屉宽 520px 且全高；移动端为全宽底部面板，上限 92vh，内部滚动。使用可见的 Close 按钮、焦点陷阱、Escape 支持、背景点击、恢复触发焦点，打开时背景 inert。
   动效：滑动 24px 并带 240ms 淡入，而非横扫整个视口；统计条填充一次至其数值，并在减少动效模式下保持可见。
4. **团队原则** — 三条简短原则：'01 / Trade before heroics — The second player matters more than the highlight.' '02 / Say the useful thing — Information first, volume second.' '03 / Review without theater — One lesson, one owner, one next drill.' CTA 'See how the season is going' 链接到比赛。
   布局：阵容下方三个带边框的列，配超大等宽数字和 18px 正文。移动端以 20px 间距堆叠。
   动效：简单的组显现，无额外交互。

### 比赛（`#/matches`）
1. **赛季页头** — 眉题 '[SEASON_NAME] / MATCH CENTER'。H1 'Every round leaves a trace.' 文案：'Upcoming fixtures, final scores, and the map-by-map story.' 显示摘要标签 '12–4 series'、'34 maps played'、'6 finals reached'。将所有数据标记为本地赛季示例；除非内容编辑有意设置该状态，否则绝不要将静态条目标记为 LIVE。
   布局：宽幅编辑式页头，H1 占七列，摘要标签位于五列的三列轨道中。移动端标签变为水平换行行。
   动效：仅共享标题和标签交错。
2. **赛程与结果筛选** — 按钮 All、Upcoming 和 Results 筛选六场比赛。即将到来的条目：[TEAM_CODE] vs Iron Union / IRU / 半决赛 / 周六 19:00 CET / 三局两胜；[TEAM_CODE] vs Drift Nine / DFN / 败者组决赛 / 下周五 18:30 CET / 三局两胜。结果：[TEAM_CODE] 2–1 Ochre Labs / OCH / 第 6 周；[TEAM_CODE] 2–0 North & Neon / NNN / 第 5 周；[TEAM_CODE] 1–2 Drift Nine / DFN / 第 4 周；[TEAM_CODE] 2–0 Boro Five / BR5 / 第 3 周。包含本地时区标签，不自动刷新比分。
   布局：带结果计数的分段筛选行位于全宽比赛行之前。每行使用 120px 状态列、弹性赛程列、120px 格式列和一个 Chevron 按钮。移动端重排为顶部状态和比分，下方赛程和元数据，无表格溢出。
   动效：使用短列表更新并保持键盘焦点。展开行动画高度一次，动画完成后绝不隐藏内容。
3. **可展开比赛详情** — 即将到来的行展开显示 'Map pool: Array, Causeway, Foundry'、'First pick: Array' 以及针对该对手撰写的简短侦察笔记。已完成的行显示地图比分和三名选手评分。Ochre Labs 系列使用 Array 13–9、Causeway 8–13、Foundry 13–7，Mako 1.42、Kestrel 1.18 和 Vexa 1.09。North & Neon 使用 Array 13–6 和 Foundry 13–11。Drift Nine 失利使用 Causeway 11–13、Array 13–10、Foundry 9–13。Boro Five 使用 Array 13–4 和 Foundry 13–8。'Download match card' 按钮创建一个纯文本本地文件，包含可见的赛程和比分数据，而非无效分享链接。
   布局：展开内容位于同一带边框行内，包含三列地图表和侦察或复盘列。移动端每张地图变为紧凑的两行比分块。下载使用详情网格下方的次要按钮。
   动效：Chevron 旋转 180 度；详情行在高度展开后淡入，并在减少动效模式下保持可读。
4. **准备说明** — 标题 'The plan fits on one page.' 文案：'Three likely maps. Two opponent habits. One reset word if the round gets loud.' 添加一个仅使用 content.ts 中虚构队伍代码的小型原创 SVG 对阵图；它是信息性的，不是预测控件。
   布局：双列 Carbon 色带，文案占四列，图表占八列。移动端图表保持完全可见，标签至少 12px。
   动效：使用不透明度和描边长度一次性绘制图表线条；在减少动效模式下立即显示最终图表。

### 商店（`#/shop`）
1. **商店介绍** — 眉题 'TEAM GOODS / SIX PIECES'。H1 'Built for the long day.' 文案：'Heavy fabrics, practical layers, and an original [TEAM_CODE] slash mark. Every product is a fictional demo item.' 显示一条小的履约说明 'Demo store / no payment is collected'。
   布局：编辑式 7/5 分栏，右侧为原创折叠球衣 SVG 构图，使用黑色面料、volt 滚边和抽象三斜线标记。移动端上，插画保持在文案下方且高度至少 240px。
   动效：产品插画各图层在入场时分离 8px，之后保持静止。
2. **产品筛选与商品网格** — 筛选 All、Wear 和 Accessories，带实时计数。六件产品：Home Jersey / Wear / €64 / 尺码 XS–XL / 再生性能针织；Scrim Hoodie / Wear / €72 / 尺码 S–XXL / 420gsm 磨毛棉；Arena Overshirt / Wear / €88 / 尺码 S–XL / 棉质防撕裂布；Static Cap / Accessories / €28 / 可调节 / 水洗斜纹布；Team Scarf / Accessories / €24 / 均码 / 双面针织；LAN Duffel / Accessories / €58 / 32 升 / 再生帆布。每张卡片使用独特的精致内联 SVG 产品视图、颜色和材质标签、价格、Quick view 和 Add 按钮。
   布局：三列产品网格，配 4:3 Carbon 插画面板和 1px Steel 边框。使用原创的棱角折线和细腻的 SVG 阴影，而非空白矩形或远程产品照片。移动端两列，低于 350px 时折叠为一列；按钮在 390px 下保持可用且文字不被裁切。
   动效：筛选使用布局动画，产品插画在悬停时最多平移 8px。Add 以小对勾图标确认并打开购物车。
3. **产品快速查看** — Quick view 打开大号产品插画、名称、价格、材质、版型说明、尺码选择器、数量步进器和 Add to cart。版型说明具体明确：球衣 'athletic unisex cut'，连帽衫 'relaxed drop shoulder'，外穿衬衫 'boxy layer with two chest pockets'，帽子 'six-panel adjustable back'，围巾 '160cm double-sided knit'，行李袋 '32 liters with a separate shoe pocket'。没有虚假的库存倒计时或划掉的促销价。
   布局：桌面端为 520px 右侧抽屉，移动端为全宽底部面板。产品插画占 280px，其后是可滚动的详情和吸底 Add 按钮。支持 Escape、焦点陷阱、点击背景关闭和恢复触发元素焦点。
   动效：抽屉入场 240ms，在减少动效模式下控件立即可见。
4. **持久购物车与模拟结账** — 购物车行包含产品、尺码、单价、数量控件、移除操作、小计，以及 €0 的免费演示配送行。结账是两步本地交互：先是带邮箱和国家字段的验证联系表单，然后是订单复核和 'Place demo order' 按钮。完成时显示 'Demo order saved in this browser. No payment was taken and no email was sent.' 在本地生成订单参考号并提供 'Clear demo order'。绝不发送或暗示将数据发送到任何地方。
   布局：购物车是右侧抽屉，含可滚动商品区和吸底总计。结账替换抽屉内容，同时保留 Back to cart 控件。空状态包含 'Your kit bag is empty' 和可用的 Continue shopping 按钮。移动端使用全宽和 44px 控件。
   动效：行移除动画不会折叠其他控件；结账面板以 180ms 交叉淡入淡出，减少动效模式下去除变换。
5. **产品护理带** — 三条说明：'Cold wash / Turn printed pieces inside out.'、'Carry more / The duffel fits a keyboard sleeve and headset.'、'Repair first / Spare snaps ship with the overshirt.' 添加一条小的尺码版型说明，而非虚假评价。
   布局：网格下方三个等宽带边框列，Lucide 图标位于简洁文字旁。移动端堆叠。
   动效：仅一次整组揭示。

### 新闻（`#/news`）
1. **新闻编辑室介绍与筛选** — 眉题 'TEAM JOURNAL / NOTES FROM THE SERVER ROOM'。H1 'What happened. What we learned.' 文案：'Match reviews, preparation notes, and the working life behind [BRAND].' 筛选 All、Matches、Culture 和 Team，带实时计数。四篇故事：'Five maps, one calm finish' / Matches / 6 min read；'Inside our 40-minute reset routine' / Culture / 4 min read；'A home kit built for long LAN days' / Team / 3 min read；'Scrim notes: defending the split' / Matches / 5 min read。
   布局：页头横跨八列，筛选控件直接位于其下。移动端筛选换行为两行，且高度至少 40px。
   动效：共享标题揭示和简短的筛选过渡。
2. **故事索引** — 首篇故事为特写，导语 'The timeout that helped [BRAND] stop chasing and start trading.' 使用竞技场团队图片。第二篇故事导语：'A repeatable routine for noisy venues, delayed starts, and lost openings.' 使用 Kestrel 肖像。第三篇故事导语：'Why the final pattern uses three slashes and almost no branding.' 使用原创代码绘制的球衣细节。第四篇故事导语：'Three small adjustments from a week of replay reviews.' 使用 Vexa 肖像。每篇故事都有可用的 Read story 按钮、标签和阅读时间。
   布局：特写故事为宽幅 7/5 图文行。其余三篇组成三列网格，配一致的 16:10 图片裁切。移动端为一列。不要使用失效的文章 URL。
   动效：图片遮罩揭示一次，仅在允许动效时选中的故事平滑移入阅读器。
3. **内联文章阅读器** — 默认在索引下方显示首篇故事，使路由永不打开空详情状态。选择 Read story 会更新此阅读器并将其标题滚动到视野内。每篇故事在 content.ts 中存储唯一标题、导语、三段各 70–110 词的原创段落和一句拉引语。第一篇故事讲述一次战术暂停、一张丢失的中局地图和决定性的最后一回合；拉引语：'We stopped asking for a hero round and started asking for the next trade.' 第二篇故事讲述补水、十分钟瞄准热身、按角色复盘和五分钟远离屏幕；拉引语：'The routine is ordinary so the match does not have to be.' 第三篇故事讲述面料测试、旅行洗涤和原创三斜线标记；拉引语：'The kit had to work after the arena lights went off.' 第四篇故事讲述回放标签、防守间距和一项在三场训练赛中重复的练习；拉引语：'A useful note names the next action.' 以 Previous story 和 Next story 控件结尾。
   布局：文章居中于 720px，正文 20px、行高 1.7、volt 拉引语分隔线，以及带边框的故事导航行。保持故事索引在其上方以便选择。移动端正文 18px、边距 20px。
   动效：文章正文以 180ms 交叉淡入淡出，不逐段动画。选择后将焦点置于文章标题并尊重减少动效。

## 资源

- 图片：将 https://media.vibefather.ai/assets/d4c68bea-b954-48e3-858a-850cab503040/hero-arena.webp 下载到 public/images/hero-arena.webp。用于首页主视觉（hero）、精选比赛故事以及选定的编辑裁剪图。替代文本（Alt）：'Five fictional [BRAND] players standing together in a dark arena tunnel.' 由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。在 ASSETS.md 中列出本地路径、确切源 URL、生成器 VibeFather 以及这段确切的致谢信息。
- 图片：将 https://media.vibefather.ai/assets/d4c68bea-b954-48e3-858a-850cab503040/player-kestrel.webp 下载到 public/images/player-kestrel.webp。用于 Kestrel 的阵容卡片、选手抽屉、首页阵容预览以及 reset-routine 故事。替代文本（Alt）：'Kestrel, fictional [BRAND] in-game leader, in a black team jersey.' 由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。在 ASSETS.md 中记录路径、源 URL、生成器以及确切的致谢信息。
- 图片：将 https://media.vibefather.ai/assets/d4c68bea-b954-48e3-858a-850cab503040/player-mako.webp 下载到 public/images/player-mako.webp。用于 Mako 的阵容卡片、选手抽屉以及首页阵容预览。替代文本（Alt）：'Mako, fictional [BRAND] entry player, in a black team jersey and cap.' 由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。在 ASSETS.md 中记录路径、源 URL、生成器以及确切的致谢信息。
- 图片：将 https://media.vibefather.ai/assets/d4c68bea-b954-48e3-858a-850cab503040/player-sable.webp 下载到 public/images/player-sable.webp。用于 Sable 的阵容卡片、选手抽屉以及首页阵容预览。替代文本（Alt）：'Sable, fictional [BRAND] flex player, in a black team jersey.' 由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。在 ASSETS.md 中记录路径、源 URL、生成器以及确切的致谢信息。
- 图片：将 https://media.vibefather.ai/assets/d4c68bea-b954-48e3-858a-850cab503040/player-tinker.webp 下载到 public/images/player-tinker.webp。用于 Tinker 的阵容卡片和选手抽屉，必要时也用于编辑缩略图。替代文本（Alt）：'Tinker, fictional [BRAND] support player, in a black team jersey.' 由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。在 ASSETS.md 中记录路径、源 URL、生成器以及确切的致谢信息。
- 图片：将 https://media.vibefather.ai/assets/d4c68bea-b954-48e3-858a-850cab503040/player-vexa.webp 下载到 public/images/player-vexa.webp。用于 Vexa 的阵容卡片、选手抽屉以及 defending-the-split 故事。替代文本（Alt）：'Vexa, fictional [BRAND] anchor, in a black team jersey.' 由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。在 ASSETS.md 中记录路径、源 URL、生成器以及确切的致谢信息。
- 图标：安装 lucide-react，并使用 Menu、X、ShoppingBag、ArrowUpRight、ChevronDown、ChevronLeft、ChevronRight、Plus、Minus、Check、Download 和 ArrowLeft 图标，尺寸为 18–22px，描边为 1.75px。不要使用品牌图标。将原创的三斜线团队标志、抽象赞助商标志、数据条、对阵图以及全部六幅周边商品插画绘制为内联 SVG 或 CSS。在 ASSETS.md 中注明 Lucide 的 ISC 许可证；原创代码绘制的美术作品无需外部来源。
- 字体：通过 @fontsource/barlow-condensed 自托管 Barlow Condensed 600/700/800，通过 @fontsource/inter 自托管 Inter 400/500/600，通过 @fontsource/jetbrains-mono 自托管 JetBrains Mono 400/500/600。在本地导入确切的字重 CSS 文件，并在 ASSETS.md 中记录全部三个包及其 OFL-1.1 许可证。

## 禁止事项（Don'ts）
- 不得使用任何后端、服务器逻辑、API 路由、数据库、身份验证、远程表单提交、分析工具、第三方 API 或实时比分服务。构建产物必须是 dist/ 中的静态文件，所有交互都必须在本地运行。
- 不得从 CDN 或远程运行时 URL 加载脚本、样式、字体、图片、图标、视频或其他资源。下载提供的六张照片，并自行托管指定的 Fontsource 字体。
- 不得使用真实的电子竞技战队、选手 ID、人物肖像、战队历史、现有赞助商品牌或口号、游戏发行商标志、游戏角色、武器美术、可识别的游戏内场景、注册商标的联赛、奖杯设计或转播图形。
- 不得复制现有组织的网站代码、文案、摄影、周边设计、标题、统计数据、图标、吉祥物或徽章设计。战队、赛事、对手、赞助商、产品和故事必须保持虚构且原创。
- 不得使用 Unsplash、Pexels、Pixabay、Google Images、Simple Icons、CC BY-NC 或 CC BY-SA 素材、商业字体、受限的组件库源码或占位图服务。
- 不得用首字母圆圈、剪影、无关的图库图片或额外生成的人物替换提供的肖像。不得在照片内放置文字、标志、可识别的人物、游戏角色或品牌装备。
- 不得使用裸目录链接或基于路径的客户端路由，以免在静态托管上失效。每个导航目标必须为 ./index.html 或 ./index.html#/roster、#/matches、#/shop 或 #/news（视情况而定），未知哈希必须回退到首页。
- 不得添加 SEO 元数据、Open Graph 标签、JSON-LD、站点地图代码、关键词块或标题层级指令。仅使用包含 [BRAND] 的纯文档标题和一个原创的本地 favicon。
- 不得发布 source map、将 src/ 复制到 dist/、超过 20 MB，或在 1440×900 和 390×844 下留下控制台错误。使用相对资源路径，并保持所有文案为美式英语。
- 不得忽略 prefers-reduced-motion、将关键内容隐藏在动画之后，或允许动效阻碍阅读和控件操作。跑马灯在减少动效时停止，所有最终状态立即可见。
- 不得创建无效按钮、占位社交链接、虚假的新闻订阅成功、虚假支付、虚假邮件发送、虚假库存压力或虚假实时活动。筛选器、选手详情、比赛展开、下载、快速查看、变体、数量、购物车和模拟结账必须可用，并如实标明仅限本地的行为。
- 不得将布局变成通用的圆角卡片、蓝紫渐变、玻璃拟态、过度发光或纯排版的主视觉区。保留深色编辑风格体育网格、切角、单一 volt 强调色、醒目的场馆图片和一致的选手肖像。
- 不得在 src/content.ts 之外硬编码默认战队身份，或在变量更改后留下 Static Vale 专属文案。将名称、代码、对手、产品、统计数据、故事、替代文本和示例数据重写为一套连贯的内容集。

---
— Prompt by VibeFather · https://vibefather.ai/t/esports-team-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
