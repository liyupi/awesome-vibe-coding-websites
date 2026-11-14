> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 电影评分社区

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一个面向 [AUDIENCE] 的原创静态电影评分社区。默认邀请语是 [TAGLINE]，精选影片是 [FEATURED_FILM]，已登录的示例成员是 [PROFILE_NAME]，编辑排名榜单是 [RANKED_LIST_NAME]。提供发现首页、电影详情路由、短评与长评合并的评论信息流、可筛选的 100 部影片排名经典、想看与已看片库，以及个人品味仪表盘。所有影片和人物均为虚构；界面必须像一个有用的产品，而不是一个由互不关联的模型稿拼成的落地页。

- 受众：为 [AUDIENCE] 撰写简洁、友好的美式英语。假定访客理解片名和星级评分，但不需要教程、账户或后端。倾向于对氛围、工艺、节奏和重看价值给出具体观察，而非泛泛赞美或营销语言。
- 目标：让访客发现一部影片、查看其五星评分聚合分布、阅读两种评论、为其评分、将其加入某个榜单、将某条评论标记为有帮助，并立即看到个人片库和品味档案更新。在 1440×900 和 390×844 下保持每条路由可交互，零控制台错误，且不依赖外部服务。
- 语气：有文化底蕴、温暖、有主见、从容不迫：一本独立电影期刊转化为一个精确的社区应用。使用准确的影片细节和令人难忘的评论文案，而非炒作、奖项语言、互动诱饵、流媒体声明或注册号召。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：原生 CSS + 手工构建的 SVG
- 库：React 18 和 React DOM（MIT）、Vite 5（MIT）、TypeScript 5.6（Apache-2.0）、lucide-react（ISC）、@fontsource/instrument-serif（OFL-1.1）、@fontsource/dm-sans（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 创建 package.json，脚本 dev = vite、build = tsc --noEmit && vite build、preview = vite preview。使用 React 18.3、Vite 5.4、TypeScript 5.6、lucide-react 0.468.0 以及列出的三个 Fontsource 包；在本地安装并打包所有依赖。
  - 配置 vite.config.ts，base 为 './'，build.outDir 为 'dist'，build.sourcemap 为 false，build.target 为 'es2020'，并启用压缩。使用一个 index.html 入口和基于哈希的导航；不要将 src/ 复制到 dist/。
  - 组织 src/content.ts 用于每个变量、可见字符串、影片记录、评论、种子列表和图表标签；src/data/catalog.ts 用于确定性的派生元数据；src/state/community.tsx 用于共享状态；src/components/ 用于外壳、影片卡片、评分输入、图表、评论卡片、筛选器和对话框；src/pages/ 用于六个路由视图；src/App.tsx 用于路由；src/styles.css 用于令牌和响应式规则。
  - 使用一个小型哈希路由器，支持 '#/'、'#/film'、'#/film/<slug>'、'#/reviews'、'#/rankings'、'#/library' 和 '#/profile'。所有 href 使用 './index.html#/…' 形式。打开不带 slug 的 '#/film' 时显示由 FEATURED_FILM 选中的影片，如果不匹配则回退到第一条目录记录。未知影片 slug 也显示该第一部影片并给出简单提示，而不是空页面。
  - 从 BRAND 本地派生 BRAND_SLUG，使用小写 ASCII、空格转连字符并移除不安全字符；仅将其用于内部键或 id，绝不作为外部包或 URL。设置 lang 为 en，纯文档标题为当前视图加上 [BRAND]，并创建一个原创的本地帧标记 favicon.svg。
  - 保持一个恰好包含 100 个影片对象的规范目录和一个评论集合。派生计数、图表、库视图、搜索结果、个人资料指标和相关影片必须从共享状态读取，而不是重复的硬编码数字。仅使用稳定种子；渲染期间绝不调用 Math.random。
  - 将 localStorage 访问包裹在 try/catch 中，因为沙盒演示可能拒绝存储。使用版本化键 '[BRAND_SLUG]-community-v1' 用于个人评分、列表状态、有用投票、书面评论和草稿。如果存储失败，在会话期间将相同状态保留在内存中，不抛出异常或显示技术错误。仅当不存在已保存状态时才播种示例个人资料。
  - 通过 Fontsource 拉丁子集自托管 Instrument Serif 400、DM Sans 400/500/600/700 和 IBM Plex Mono 400/500。不使用任何图表、路由器、动画、表单或状态管理依赖。将图表构建为带标签的 SVG/HTML 复合体，并在图形外提供文本值。
  - 在项目根目录编写 ASSETS.md，列出所有六张生成的图像及其源 URL、目标路径和必需的生成图像署名，以及 Lucide ISC 和每个 Fontsource 包及其作者、包 URL 和 OFL-1.1 许可证。在构建任务期间将六张图像下载到 public/posters/ 并使用相对路径；运行时绝不热链接它们。
  - 使用单个 React 社区提供程序处理评分、已观看和想看状态、有用投票、本地评论、筛选器、搜索和移动导航。已观看和想看互斥；设置星级评分也会将影片标记为已观看。提供显式按钮用于移除评分或在列表之间移动影片。在导航时以及存储可用时重新加载后保留个人更改。

## 变量
- [BRAND] — 社区名称（默认：“Fableframe”）。一个自创的一到两个词的名称，用于字标、文档标题、个人资料欢迎语和存储键前缀；绝不能是真实存在的电影或社区品牌。
- [TAGLINE] — 首页邀请语（默认：“Rate the films. Find your people. Know your taste.”）。一句简洁的原创邀请语，最多 64 个字符；将其用作首页 H1，当其变化时自然地调整辅助文案。
- [AUDIENCE] — 社区受众（默认：“curious film lovers”）。一个简短的小写受众短语，用于首页眉题和辅助文案。
- [FEATURED_FILM] — 精选影片标题（默认：“The Cartographer's Dream”）。六个艺术指导目录标题之一：The Cartographer's Dream、The Night Orchard、Static Between Stars、A Room for August、Salt on the Projectionist's Hands 或 The Clockwork Heron。
- [PROFILE_NAME] — 示例成员姓名（默认：“Mara Ellison”）。一个自创的成员姓名，用于个人资料问候语、姓名首字母、本地评论和片库标签；绝不能是真实人物。
- [RANKED_LIST_NAME] — 排名经典名称（默认：“The Hundred”）。一个简短的原创名称，用于 100 部影片排名列表，在导航和排名标题中使用。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接指向 https://vibefather.ai/t/movie-rating-community（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块键控，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 画布（Canvas）`#F3F0E8` — 主页面背景和宽裕的编辑留白。
- 纸张（Paper）`#FFFDF7` — 评论卡片、筛选器、对话框和抬升的内容表面。
- 墨色（Ink）`#17262E` — 主文本、深色导航带和主按钮填充。
- 次级墨色（Secondary Ink）`#667178` — 元数据、辅助文本和非活动导航；切勿在低于可读对比度时使用。
- 细线（Hairline）`#D7D2C5` — 分隔线、表格线、输入框边框和图表轨道。
- 珊瑚色（Coral）`#C85F49` — 编辑强调、活动下划线、选中标签和关键链接；仅在对比度通过时与 Paper 搭配用于大号文本。
- 赭色（Ochre）`#D49A3A` — 星级评分、排名标记和小型数据高亮，填充控件上使用 Ink 文本。
- 鼠尾草绿（Sage）`#83927D` — 已观看状态、品味条和安静次级数据。
- 夜蓝（Night Blue）`#203943` — 精选影片面板和深色页脚表面。
- 薄雾（Mist）`#E8E5DC` — 悬停填充、选中的中性筛选器和微妙的图表背景。
- 焦点青（Focus Teal）`#236B70` — 可见的键盘焦点轮廓和无障碍交互强调。

### 字体排印
- 字标、首页 H1、页面标题、影片标题和大型编辑引用：Instrument Serif (OFL)，字重 400
- 正文、评论文本、按钮、导航、筛选器、表单字段和个人资料摘要：DM Sans (OFL)，字重 400/500/600/700
- 排名数字、年份、时长、评分值、投票数、图表刻度和筛选计数：IBM Plex Mono (OFL)，字重 400/500

### 布局与动效
- 间距：使用 4px 基准单位。共享内容宽度在桌面端为 min(1440px, calc(100vw - 96px))，侧边留白 48px，卡片间距 24px，主要组之间 32px，首页区块之间 72px。页头高度为 72px。页面标题块使用 36px 顶部和 28px 底部内边距。影片卡片使用 12px 内部内边距；评论卡片 24px；筛选行 16px。在 390×844 下使用 20px 留白、48px 区块间距、16px 卡片内边距、12px 间距和 60px 页头。H1 在桌面端使用 clamp(44px, 5vw, 72px)，行高 0.98，移动端为 42px、行高 1.0；页面标题桌面端 48px、移动端 38px。所有触摸目标至少为 44×44px，且任何布局都不会导致页面水平溢出。
- 圆角：排名徽章和微小标签使用 2px，按钮和输入框使用 6px，影片和评论卡片使用 10px，精选影片组合和大型仪表盘面板使用 16px，仅头像首字母、状态点和紧凑图标按钮使用完全圆形。优先使用细线和纯色，而非浮动玻璃或重阴影。
- 动效：立即渲染精选影片、海报、核心指标和首批评论；无启动画面、自动播放轮播、加载骨架或阻塞式入场动画。
- 动效：路由切换使用 160ms 不透明度淡入，最多 6px 向上移动，并滚动到顶部，除非保留有意的后退导航位置。减少动效模式移除位移并使过渡立即完成。
- 动效：影片卡片悬停时整张卡片上浮 3px，仅其图像在 180ms 内缩放至 1.025；标题颜色变为 Coral。触摸设备保留可见标签和操作，不依赖悬停。
- 动效：个人评分变化后，评分条在 240ms 内从当前宽度动画到新宽度。有用投票和列表按钮提供即时文本/状态反馈，外加 160ms 高亮，不引起布局偏移。
- 动效：筛选结果变化在 140ms 内交叉淡入，并通过礼貌的实时区域宣布结果计数。对话框和移动菜单使用 160ms 不透明度和 8px 垂直移动，焦点陷阱、Escape 关闭和焦点返回。
- 动效：仅对首屏以下的微妙 12px 区块显现使用 IntersectionObserver。在 prefers-reduced-motion 下，立即显现所有内容，停止图表动画，移除悬停移动，并保留每个状态变化。
- 图像：使用六张原创无字电影感水粉与丝网印刷海报插画作为精选目录的高工艺视觉系统：The Cartographer's Dream、The Night Orchard、Static Between Stars、A Room for August、Salt on the Projectionist's Hands 和 The Clockwork Heron。它们共享暖象牙色、墨海军蓝、柔和珊瑚色、赭色、灰鼠尾草绿、哑光颗粒和柔和漫射剧场光。将影片标题和评分作为 HTML 显示在插画之外；切勿要求图像生成器添加文字。对于其他 94 部影片，使用相同调色板从每部影片的 slug 创建确定性原创 SVG 海报，并按类型键控不同的几何场景配方——剧情片用地平线，科幻片用轨道弧线，悬疑片用窗户，爱情片用交叉路径，喜剧片用偏移圆，冒险片用地形线，动画片用有机形状，纪录片用画框，恐怖片用阴影，惊悚片用汇聚线。这些是创作的海报，不是灰色占位符。没有真实人物、可识别的演员、现有电影图像、标志、嵌入图像中的文字或可识别的地标。Lucide 仅提供熟悉的界面图标。

## 页面与区块
### 发现 — [BRAND] (`#/`)
1. **共享应用外壳与精确内容模型** — 页头包含一个原创的四角胶片框 SVG、[BRAND]，以及 Discover、Reviews、[RANKED_LIST_NAME]、My Library 和 Taste Profile 的链接。桌面端搜索框的占位符为 'Search the 100-film catalog…'，打开一个可通过键盘访问的结果列表，显示片名、年份、类型和平均评分；当没有输入框处于活动状态时，'/' 聚焦该搜索框，Escape 关闭它。活动路由使用 Coral 下划线和 aria-current。移动端页头保留品牌、搜索，以及一个带标签的 Menu 按钮，点击后打开包含所有路由的抽屉。页脚文案为 'A slower place for film conversations.'，链接包括 Discover、Reviews、[RANKED_LIST_NAME]、My Library、Taste Profile，以及可选的 [CREDIT] 链接。将所有可见字符串保留在 src/content.ts 中。默认首页眉题为 'A film diary for [AUDIENCE]'；H1 为 '[TAGLINE]'；正文为 'Keep a living shelf of what you have seen, trade notes with people who notice the details, and let your own ratings—not a trending feed—shape what comes next.' 主 CTA 为 'Explore the community'，次 CTA 为 'Open my film diary'。为替代值重写依赖变量的文案，不要保留 Fableframe、Mara Ellison 或 The Hundred。
   布局：使用粘性的 72px Ink 页头，内部容器全宽，桌面端留 48px 边距。桌面端顺序为品牌、五个紧凑导航链接、260px 搜索框，然后是由 PROFILE_NAME 派生的示例成员字母组合。移动端使用 60px 页头，包含品牌、搜索图标按钮和 Menu；抽屉最大宽度 320px，位于右侧且全高。页脚为 Night Blue（夜蓝），垂直内边距 40px，移动端为简单的两行布局。不要添加登录、定价、促销横幅或第二个营销页头。
   动效：搜索结果以 120ms 淡入出现，支持方向键、Enter 和 Escape。移动端抽屉过渡遵循 Design motion，打开时锁定背景滚动，关闭时将焦点返回 Menu。
2. **目录与评论数据** — 创建恰好 100 个原创电影片名，分为十个类型组，每组十个，然后通过在每个排名中从每组取一个片名来交错各组，使经典片单混合类型。剧情：The Cartographer's Dream；A Room for August；The Night Orchard；The Last Tram to Bellwether；Porcelain Winter；The House on Aster Lane；A Choir of Empty Rooms；Small Hours at Meridian；Letters from a Paper Boat；Where the Violet Road Ends。科幻：Static Between Stars；The Clockwork Heron；Glass Horizon；Orbital Radio Hotel；The Tenth Lunar Winter；Machines of the Mild Sun；A Field of Artificial Stars；Instruction Manual for Tomorrow；The Cloud Archivist；Children of the Low Orbit。悬疑：The Bell at Blackwater；A Study in Salt；The Missing Hour Museum；No One Saw the Rain；The Eleventh Alibi；A Key for Every Stranger；The Quiet Witness Club；Footprints in the Blue Hour；The Unfinished Confession；A House of Locked Windows。爱情：Love at the Summer Terminal；The Geometry of Goodbye；Two Tickets to Elsewhere；The Letterbox Garden；A Waltz for Insomniacs；Meet Me at the Meridian；Paper Moon Over June；The Last Ferry to You；An Almost Perfect Detour；Recipe for Second Chances。喜剧：The Accidental Auction；My Neighbor the Astronaut；A Serious Case of Pigeons；The Understudy's Day Off；How to Lose a Lighthouse；The Wrong Suitcase Society；Dinner with Twelve Strangers；The Amateur Ghost Bureau；A Very Polite Heist；The Mayor of Nowhere。冒险：Salt on the Projectionist's Hands；The River Beyond Maps；The Atlas of Hidden Islands；North of the Sleeping Sun；The Valley of Paper Cranes；The Last Desert Radio；A Compass for the Lost；The Storm Carriers；Beneath the Emerald Canopy；The Mountain That Moved。动画：The Umbrella Collector；Moss and the Midnight Train；The Little Comet Bakery；A Whale in the Attic；The Paper Fox Parade；The Garden of Borrowed Colors；The Moon's Repair Shop；The Clockwork Seed；A Pocketful of Thunder；The Starlight Tailor。纪录片：The Last Neon Repairman；Voices of the Night Market；The Museum of Lost Sounds；Bread at First Light；The Secret Life of Crosswalks；Makers of the Morning；The River Remembers Us；One Hundred Small Gardens；The Night Shift Orchestra；The Hands That Mend。恐怖：The House That Listens；A Knock at Blue Hour；The Hollow Photograph；The Guests Below；When the Streetlights Sleep；The Thirteenth Window；A Lullaby for the Walls；The Uninvited Garden；The Shape Behind the Rain；The Attic at Mill House。惊悚：The Silent Exchange；A Passenger in Room Nine；The Last Train West；The Courier's Second Shadow；Thirty Minutes to Midnight；The Glass Alibi；A Trap for the Honest Man；The Stranger's Notebook；No Exit from Eden；The Vanishing Platform。确定性地将片名转为 slug，绝不替换为真实电影。
   布局：这是一个数据区块，不是可见的页面外壳。交错后存储排名 1 到 100。对于从 0 开始的排名 i，分配 year = 1968 + ((i × 7) mod 57)，runtime = 84 + ((i × 13) mod 73) 分钟，ratingCount = 860 + ((i × 7919) mod 48000)。使用 i mod 10 从十个明确的五星到一星百分比模式中选择一个：[[68,21,7,3,1],[61,27,8,3,1],[74,17,6,2,1],[57,29,9,4,1],[65,22,8,4,1],[54,30,10,4,2],[70,19,7,3,1],[59,26,10,4,1],[63,24,8,4,1],[52,29,12,5,2]]。使用最大余数法将百分比转换为整数计数，使计数总和恰好等于 ratingCount，然后根据这些计数计算平均分，保留两位小数。排名保持编辑排名；评分排序使用计算出的平均分。在 content.ts 中为每部电影提供一句独特的 logline，以及一个主类型加一个次类型。不要使用当前日期或外部数据。
   动效：数据派生是同步且确定性的。没有人为加载延迟、随机化或重新加载时更改计数。
3. **艺术指导影片与示例社区** — 六部艺术指导影片保留以下精确默认值。The Cartographer's Dream — 2023，128m，Drama/Mystery，导演 Elian Voss：'An insomniac mapmaker discovers a country that appears only in other people's dreams.' A Room for August — 2019，97m，Drama，导演 Sora Bell：'A retired stage painter spends one summer restoring an apartment for a tenant she has never met.' The Night Orchard — 2021，106m，Drama/Romance，导演 Mina Quell：'Two estranged sisters return to sell an orchard and find their mother's unfinished harvest ledger.' Static Between Stars — 2024，114m，Science fiction，导演 Rowan Ives：'A late-night radio operator on a relay station receives broadcasts from a future that may never happen.' Salt on the Projectionist's Hands — 2018，121m，Adventure/Drama，导演 Tavi Ren：'A traveling projectionist follows a coastal road to return a lost reel to a village missing from every map.' The Clockwork Heron — 2022，104m，Science fiction/Animation，导演 Imani Wren：'A shy repair apprentice follows a mechanical bird through a marsh where forgotten machines migrate each winter.' 用这些值覆盖派生的年份和时长。为这六部影片各播种至少三条不同的短评和两篇实质性文章，全部由虚构评论者撰写，带有 helpful 计数、星级值和 80–180 词的文章正文。对于 The Cartographer's Dream，包含短评 'The final map is still living in my head.'，作者 Nico P.，五星，184 helpful；'Quiet, strange, and unexpectedly funny.'，作者 June R.，四星，96 helpful；以及 'Worth watching for the paper-city sequence alone.'，作者 Ellis K.，五星，73 helpful。包含文章 'The map is not the destination'，作者 Amara Vale，五星，328 helpful，以及 'A puzzle box with a pulse'，作者 Theo Marr，四星，192 helpful。绝不要复制真实评论或使用真实评论者身份。
   布局：仅数据区块。为 [PROFILE_NAME] 播种 47 部已看影片、18 部想看影片、12 篇撰写的评论、接近 3.9 的个人平均分，以及最喜欢的类型 Drama、Science fiction、Mystery 和 Documentary。存储精确的种子影片 slug，以便片库和个人资料数字对账。从变量名派生首字母。示例社区头像使用带指定纯色的两字母字母组合，而非远程肖像。不需要可见的 'sample data' 或 'demo user' 免责声明，因为整个世界都是有意虚构的。
   动效：个人更改在一次 React 渲染中更新所有依赖值。种子计数在导航期间永不重置。
4. **精选影片发现主视觉区** — 左侧包含来自共享内容模型的眉题、H1、正文和两个 CTA，外加一个紧凑的搜索提示 'Not sure where to begin? Search by title, genre, or mood.'。右侧是 [FEATURED_FILM] 的丰富精选影片组合：其海报、类型/年份/时长、标题、一句话简介、计算出的社区平均分和评分数量、五星预览，以及 CTA 'View film'。添加一张层叠的短评卡片，引用一条种子评论，包含评论者和有用数，以及一条小型 'Tonight's queue' 条带，展示示例档案中前三个想看标题。主 CTA 链接到 '#/reviews'；次级链接到 '#/library'；View film 链接到所选影片的详情路由。不要添加 Play trailer、流媒体提供商按钮或通用营销插图。
   布局：在 1440×900 下，主视觉区是最大高度 620px 的两列网格，5fr 文本对 7fr 视觉，间距 48px，垂直内边距 32px。文本垂直居中，包含 12px 眉题、大号衬线 H1、18px 正文和两个 48px 按钮。Night Blue（夜蓝）视觉面板填满其列，内边距 24px：左侧为 250×375px 海报，右侧为影片详情，短评卡片与海报右下角重叠 32px 且不覆盖其标题，队列条带沿底部排列。在移动端，先堆叠紧凑文本块，再堆叠视觉面板；使用 112×168px 海报置于标题和元数据旁，将评论和队列放在下方且不重叠，并保持 View film 按钮在约前 844px 内可见。绝不要将海报裁剪成无法辨认的条带。
   动效：完整组合在首次绘制时可见。仅评论卡片有从下方 8px 处开始的 160ms 微妙入场；减少动效用户立即看到它。切换路由不会将海报动画移出屏幕。
5. **今晚精选** — 标题 'Tonight's selection'，副标题 'Six original films, six reasons to stay up a little later.'，文本链接 'Browse the full canon' 指向 '#/rankings'。将六部艺术指导影片渲染为可复用影片卡片：海报、标题、年份和主类型、带 Ochre（赭石色）星标的平均分，以及一个书签按钮，标签为 'Want to watch' 或 'Saved to want to watch'。点击 artwork 或标题打开其影片路由。书签状态在各处同步，且不得触发导航。
   布局：在 1440px 下使用六个等宽列，间距 16px，3:4 海报；低于 1180px 使用三列；低于 640px 使用两列网格，间距 12px。标题最多换行两行，但操作保持正常流，绝不绝对定位覆盖文本。包含 44px 书签目标，具有可见的可访问名称。区块间距遵循 Design，如果高度允许，第一行在桌面折叠处部分可见。
   动效：影片悬停遵循 Design。书签更新在礼貌状态区域显示 'Added to want to watch' 或 'Removed from want to watch'，且不显示阻塞性 toast。
6. **社区笔记本和个人桥接** — 左列标题 'From the community notebook' 展示一篇当前精选影片的精选长文，包含标题、完整评论者姓名、星级评分、2–3 句摘录、有用数和 'Read the full essay'。其下放置来自三部不同影片的三条紧凑短评。右列是 [PROFILE_NAME] 的 'Your film diary, so far'，包含三个协调指标 Watched、Want to watch 和 Reviews；一个四行类型偏好预览；以及链接 'See your taste profile'。最后一条安静引用条带写着 'Good films end. Good conversations do not.'，CTA 'Write a review' 链接到 '#/reviews?compose=1' 或应用解析的等效 hash 查询。
   布局：使用 7fr/5fr 网格，间距 24px。文章卡片为 Paper，内边距 24px，带 Coral（珊瑚色）左侧规则；短评由细线分隔，而非嵌套卡片。个人面板为 Mist，16px 圆角，内边距 24px，三个指标列，以及四个带标签的 Sage 进度条。在移动端堆叠文章、短评，然后个人面板；保持评论文本 16px，行高 1.65，无水平轮播。
   动效：有用按钮每位成员每条评论更新一次，并在存储可用时重新加载后保持按下状态。区块显现遵循 Design；无自动轮播评论。

### 影片详情 — [BRAND]（`#/film`）
1. **影片概览与评分分布** — 对于 '#/film/<slug>'，显示所选影片或 FEATURED_FILM 回退项。包含面包屑 'Discover / [film title]'、海报、标题、导演、年份、片长、主类型和次类型、一句话简介、社区平均分、格式化后的评分数量，以及个人操作按钮 'Want to watch'、'Watched'，和一个标注为 'Your rating' 的五星输入。添加标题 'How the community rated it'，以及五条水平条，按 5、4、3、2、1 星的顺序排列，并显示精确计数和百分比。仅当访客评分后，才显示一行小字 'Your rating is included in this distribution'。移除个人评分会精确恢复先前的聚合结果。相关操作包括 'Write a short take' 和 'Write an essay'，两者都会将焦点置于下方相应的编辑器。
   布局：桌面端使用 320px/minmax(0,1fr)/360px 网格，间距 32px：海报在左，影片元数据居中，分布面板在右。海报为全宽 3:4，圆角 10px。居中标题为 56px Instrument Serif，元数据使用 IBM Plex Mono 12px。个人星级按钮桌面端 40px、移动端 44px，具有可见的悬停/聚焦预览和文本值 '4 out of 5'。分布面板为 Paper 背景，内边距 20px；每行包含 48px 标签、灵活的 12px 轨道和 72px 计数。低于 1100px 时，海报与内容分两列，分布面板全宽置于下方；在 390px 时，使用 120px 海报置于标题和基本元数据旁，操作和分布面板在下方。切勿将评分控件叠加在海报上。
   动效：星级在悬停和键盘聚焦时预览，点击或 Enter/Space 提交，并支持左右方向键。条形图从先前值动画过渡 240ms。列表操作立即更新其按下状态，减少动效用户获得即时变化。
2. **短评与长文** — 标题 'The conversation' 引入标签页 'Short takes' 和 'Long essays'，计数来自当前评论列表。短评为简洁的 280 字符以内反应，包含字母组合、评论者、星级评分、文本、有用按钮，以及一个折叠的报告图标，该图标仅在本地显示 'Thanks for the feedback'，不做其他操作。长文显示标题、评论者、评分、完整的 80–180 词正文、有用按钮，以及展开后的 'Collapse essay'。排序选项为 'Most helpful' 和 'Latest added'；Latest added 将本地创作的条目放在前面，不虚构日历日期。每个有用投票对本地成员仅切换一次，并更新显示的计数。
   布局：将标签页和排序放在一个带边框的控件行中。短评在桌面端使用两列网格，移动端使用单列网格。长文使用一个可读列，最大宽度 760px，正文 18px/1.7。将评论集合保留在共享状态中，以便相同的条目出现在首页、影片和评论路由上。标签面板具有可访问的角色和键盘导航；没有内容隐藏在悬停之后。
   动效：切换标签页时列表交叉淡入淡出 140ms，并保留每个标签页的排序。有用按钮使用 ThumbsUp 加文本 'Helpful · 184'，变为 'Helpful given · 185' 时不移动相邻控件。
3. **本地评论编辑器** — 使用分段控件 'Short take' 和 'Long essay'，以及一个可见的五星个人评分输入。短评字段为一个文本区域，标签为 'What stayed with you?'，实时 280 字符计数，提交按钮 'Publish short take'。长文字段为 'Essay title'（最多 80 字符）和 'Your essay'（最多 2,000 字符，最少 40 字符），提交按钮 'Publish essay'。包含 'Preview' 和 'Edit' 模式；预览使用最终评论卡片的排版。提交后在 [PROFILE_NAME] 下添加一条本地评论，与社区状态一起保存，不关闭其他内容，并显示确认 'Your review is on this film page.'。空或无效字段收到具体的行内消息，而非警报。
   布局：编辑器为 Paper 面板，内边距 24px，位于评论列表下方，最大宽度 860px。桌面端评分和模式控件共享一行；文本区域全宽，短评 120px，长文 240px。移动端堆叠控件并保持提交按钮全宽。在输入时保存当前草稿，并提供 'Discard draft' 及简单的行内确认。不要将数据发送到任何地方，也不要声称评论已发布到服务器。
   动效：预览在 120ms 内交叉淡入。成功提交后，评论插入到 Latest added 下的顶部，并将焦点移到其标题；减少动效模式为即时。
4. **更多类似内容** — 标题 'More like this' 和三张影片卡片，从相同主类型中确定性选取，排除当前影片，按编辑排名排序。每张卡片解释一个简短理由，如 'Similar quiet mystery' 或 'Another hand-built world'，使用 content.ts 中实际的类型/基调标签。包含 'See the full canon' 链接到 '#/rankings'。
   布局：桌面端三列等宽，移动端为单个三列水平滚动吸附轨道，卡片宽度为视口宽度的 78%，带有标注的上一页/下一页按钮，且无页面级水平溢出。卡片复用与首页相同的操作和海报系统。
   动效：轨道控件每次滚动一张卡片，使用原生平滑行为，除非请求减少动效。书签和评分状态保持同步。

### 社区评论 — [BRAND]（`#/reviews`）
1. **评论台介绍与筛选器** — 眉题 'THE REVIEW DESK'；H1 'Notes worth arguing over.'；正文 'Quick reactions for the walk home. Longer essays for the films that need more room.' 提供搜索占位符 'Search reviews or film titles…'，类型芯片 All、Short takes、Long essays，类型选择 All genres 加上全部十个类型，以及排序 Most helpful / Latest added。结果文案为 '{n} reviews across {m} films'。主按钮 'Write a review' 打开撰写器，影片选择器默认为 FEATURED_FILM。如果哈希查询请求 compose=1，则在进入时打开它。
   布局：标题块最大宽度 760px，后跟桌面端粘性筛选栏，间距 12px，Mist 背景。搜索占用 minmax(240px,1fr)；芯片保持可见，而非隐藏在下拉菜单中。移动端筛选栏不粘性，芯片换行成两行，选择器全宽，所有字段至少 44px 高。
   动效：筛选立即更新计数和列表，使用标准结果淡入。仅当有筛选器激活时显示 Clear filters，重置时不重新加载。
2. **统一评论流** — 渲染来自全部六部艺术指导影片的短评和长文混合流，以及任何影片的本地创作评论。每张卡片显示影片标题并链接到其详情路由。短评显示一个紧凑段落；长文显示标题、实质性摘录、星级评分和 'Read full essay' 展开。包含有用投票和影片海报缩略图。空结果显示 'No reviews match those filters yet.' 及 'Clear filters'，绝不显示损坏的空白面板。
   布局：使用 8fr/4fr 网格：评论流在左，'Reviewing this week' 侧栏在右。评论流卡片为 Paper 背景，内边距 20px，间距 16px。右侧栏列出六部艺术指导影片及其评论数量和平均评分，外加一个小注释 'Both quick notes and patient essays belong here.' 移动端使用单列，将侧栏移到前六张评论流卡片下方，或置于 'Browse reviewed films' 展开项之后。
   动效：有用和展开状态的行为与影片页面完全一致。无无限滚动；使用 'Show more reviews' 按钮每次添加六条，焦点保留在按钮上。
3. **社区撰写器** — 打开 Write a review 显示一个对话框，使用与影片编辑器相同的验证和字段，外加一个必需的、可搜索的 'Film' 选择器，覆盖全部 100 个标题。对话框标题为 'Add to the conversation'。提交将评论添加到共享状态，关闭对话框，不应用人为延迟，并在 Latest added 下显示新条目于顶部。包含注释 'Your words stay in this browser in this static edition.'，而非模拟网络请求。
   布局：桌面端对话框居中，最大宽度 680px，最大高度 90svh，内部滚动；移动端为全宽底部表单，带安全区域内边距。包含可访问的标题、关闭按钮、焦点陷阱、Escape 关闭和焦点返回。草稿在导航时保持，但对话框绝不会在没有 compose=1 或明确点击的情况下自动打开。
   动效：使用标准对话框过渡。提交将焦点移到新评论标题，并宣布一条简洁的确认。

### [RANKED_LIST_NAME] — [BRAND] (`#/rankings`)
1. **排名典藏引言** — 眉题 'THE COMMUNITY CANON'；H1 '[RANKED_LIST_NAME]'；正文 'One hundred fictional films, ordered by the editorial desk and opened up to your own filters. Rank is a point of view, not a permanent verdict.' 展示核对后的指标 '100 films'、'10 genres'，以及根据目录计算出的社区平均评分。包含 'Reset filters' 和 'Save a film to your library' 指引，而不是虚假的分享按钮。
   布局：使用宽幅编辑式标题行，H1 居左，右侧为最大宽度 420px 的说明。指标位于下方三列分隔条中，使用 IBM Plex Mono 24px 数值和 DM Sans 12px 标签。移动端依次堆叠标题、文案、指标，不使用过大的空白首屏。
   动效：内容立即出现；仅应用标准的首屏以下显现效果。
2. **有意义的典藏筛选器** — 提供搜索 'Title or director…'、类型选择 All genres 加十个类型、年代选择 All decades / 2020s / 2010s / 2000s / 1990s / 1980s / 1970s / 1960s、最低评分选择 Any / 4.5+ / 4.0+ / 3.5+，以及排序 Editorial rank / Highest rated / Title A–Z。显示 '{n} of 100 films' 和 Clear filters。筛选器在整个目录中按 AND 逻辑组合，然后再切分可见行。排序绝不改变印刷的原始排名。无筛选结果时产生空状态，包含活动筛选摘要和 Reset filters。
   布局：Paper 筛选面板内边距 16px，第一行包含搜索，第二行包含四个选择器和结果计数。桌面端控件末端对齐；移动端使用两列选择器网格和全宽搜索。所有控件都有持续可见的标签，而非仅占位符标签。
   动效：结果计数和行同步更新，使用 140ms 交叉淡入淡出。礼貌地播报计数；不要独立动画每一行，也不要在每次选择后重置焦点。
3. **排名表格与渐进行** — 每行显示零填充的原始排名、64×96px 海报、标题、导演、年份、类型、时长、计算出的平均分、评分数量、个人星级评分（如有）和书签按钮。标题打开影片路由。初始显示 20 行，使用 'Show 20 more' 直到所有筛选结果可见。默认第一行是 #001 The Cartographer's Dream。已观看行有一个小的 Sage 'Watched' 标签；想看有 Coral 轮廓的 'Queued' 标签。包含列标题 Rank、Film、Details、Community 和 Your library。
   布局：桌面端使用分隔表格，72px 排名、minmax(280px,1.6fr) 影片、minmax(180px,1fr) 详情、160px 社区和 128px 操作。行高 120px，内边距 12px，Paper 悬停。移动端将每行转换为网格：排名和海报居左，标题/元数据居右，评分和操作在全宽底行；不要强制水平滚动表格。书签至少保持 44px，无需悬停即可显示所有信息。
   动效：Show more 追加而不替换现有行。书签状态立即更新，并带有可访问的状态消息；减少动效模式禁用行淡入淡出。

### My film diary — [BRAND] (`#/library`)
1. **个人库标题** — 眉题 '[PROFILE_NAME]’S FILM DIARY'；H1 'Your shelves, your rules.'；正文 'Keep the maybes separate from the memories. Ratings and reviews follow every film you mark watched.' 显示 Watched、Want to watch 和 Reviews written 的三个计算计数。包含 'Browse the canon' 到 '#/rankings' 和 'Reset sample diary'，后者位于内联确认之后，说明它会恢复原始虚构个人资料并移除本地编辑。
   布局：标题使用双列标题/计数组合，位于 Night Blue 面板内，Paper 文字，内边距 24px。三个计数单元格有细线分隔。移动端堆叠标题和计数，保持两个操作至少 44px，在请求确认前不使用破坏性按钮。
   动效：任何列表或评论操作后计数立即更新。重置在恢复的列表上使用 160ms 高亮，并将焦点返回到 Watched 标签页。
2. **已观看和想看货架** — 标签为 'Watched' 和 'Want to watch'，每个都带有确切的当前计数。已观看卡片显示海报、标题、年份、个人星级或 'Not rated yet'、社区平均分，以及按钮 'Rate'、'Write a review' 和 'Move to want to watch'。想看卡片显示海报、标题、类型、时长、社区平均分，以及按钮 'Mark watched' 和 'Remove'。在当前货架内提供搜索和排序 Recently changed / Title A–Z / Community rating。想看空状态文案为 'Your maybe-later shelf is open. Save a film from the canon.' 带 'Browse films'；已观看空状态文案为 'Your first watched film starts the diary.' 带 'Find a film'。
   布局：标签、搜索和排序占据一个控制行。每个货架在桌面端使用两列水平影片卡片网格，海报 112×168px，内边距 16px；移动端使用一列，海报 96×144px。Rate 在内联展开中聚焦星级输入，而不是打开新页面。Write a review 导航到该影片并聚焦其编辑器。所有操作保持可见，没有仅滑动行为。
   动效：移动影片在标准 160ms 状态高亮后切换其标签页归属，并播报目标位置。活动标签页保持稳定，除非用户明确打开另一个标签页。
3. **最近更改货架** — 标题 'Recently changed' 列出本地状态中最近评分、评论或列表更改的六部影片，带有简洁操作标签 'Rated 4 stars'、'Added to want to watch'、'Marked watched' 或 'Reviewed'。种子条目使用相对序列号，而非日历日期。为每部影片提供文本链接。
   布局：使用单个分隔列表，包含 48px 海报缩略图、标题、操作标签和 ArrowRight 图标。移动端将操作标签保持在标题下方，并维持 44px 行目标。如果不存在更改，按存储顺序显示原始六个种子更改，而不是空白面板。
   动效：新更改移动到顶部，不进行动画重排序；在更改的行上使用一个微妙的背景高亮。

### 品味档案 — [BRAND] (`#/profile`)
1. **成员身份与摘要** — 展示一个 72px 的扁平珊瑚色字母组合标志，源自 [PROFILE_NAME]，眉题 'TASTE PROFILE'，H1 '[PROFILE_NAME], your taste has a shape.'，以及正文 'Not a verdict. Just a useful map of what you return to, what you rate generously, and where your next surprise might live.' 四张计算卡片分别显示已看电影、已写评论、个人平均评分和想看。包含 CTA 'Update your diary' 链接到 '#/library'。不显示粉丝数、公开成就声明、真人照片或账户设置。
   布局：使用夜蓝（Night Blue）面板，字母组合标志和标题在左侧，四个指标单元格在右侧以 2×2 网格排列，24px 内边距，16px 圆角。移动端将身份和指标堆叠，保留可读的 14px 标签，绝不让长变量名溢出；换行而不是截断。
   动效：指标使用相同的共享状态，更新时无计数动画。仅标准区块显现。
2. **类型偏好与评分习惯** — 左侧面板标题 'Genres you return to' 以水平鼠尾草绿（Sage）条形显示全部十个类型，基于成员看过的电影，附确切观看数和占已看库的百分比；种子数据强调剧情、科幻、悬疑和纪录片。右侧面板标题 'How you rate' 显示五条个人五星到一星评分的条形，加上平均分和已评分电影总数。包含确定性生成的文本洞察，默认 'You rate dramas most often, but science fiction earns your highest average.' 当变量或评分变化时，从实际状态重新计算洞察，而不是保持硬编码。
   布局：两个等宽的纸色（Paper）面板，24px 内边距和 24px 间距。每个图表行在 SVG 外包含可见文本标签和值；条形高度 12px，发丝线（Hairline）轨道。移动端堆叠面板，标签至少保持 14px。不要使用饼图、微小图例、仅提示框显示的值或图表库默认样式。
   动效：评分/列表变化后，条形在 240ms 内从旧宽度动画到新宽度；减少动效用户看到即时值。每次路由重访不自动动画。
3. **年代与下一步推荐** — 左侧面板 'Your decades' 显示从 1960 年代到 2020 年代的紧凑柱状图，基于看过的电影，每列下方有计数。右侧面板 'A different corner of the canon' 推荐三部来自成员最少观看类型的电影，排除已看电影并按社区评分排序，每部包含海报、标题、一句话简介、平均分和想看。解释使用实际数据，例如 'You have only watched two documentaries, so start here.' 包含链接 'Explore the full canon'。
   布局：使用 5fr/7fr 网格。年代图表高 280px，七个带标签的列，值无需悬停即可见。推荐为三个水平行，海报 72×108px，间距 16px。移动端堆叠两个面板并使用 64×96px 海报；图表列保持至少 28px 宽，仅在必要时使用内部水平滚动。
   动效：保存推荐会更新其按钮和所有位置的想看指标。列使用与其他图表相同的克制宽度/高度过渡，在减少动效下变为即时。
4. **最近评论** — 标题 'In your own words' 显示最多三条 [PROFILE_NAME] 的本地评论，混合短评和文章摘录，每条链接到其电影并包含个人星级和有用数。CTA 'Write another review' 链接到 '#/reviews?compose=1'。如果所有种子评论被移除，显示 'Your review notebook is ready.' 并附相同 CTA。
   布局：桌面端三列等宽，移动端一列，使用纸色（Paper）卡片，20px 内边距。摘录保持四行，附可见的 Read review 链接到电影；不要在没有展开路径的情况下截断。
   动效：新的本地评论首先出现，带单次 160ms 高亮。无轮播或自动旋转。

## 资产
- 图片：将 https://media.vibefather.ai/assets/8fb087e6-021d-4f04-a2f4-ba660f1ef5f3/cartographers-dream.webp 下载到 public/posters/cartographers-dream.webp。替代文本：'Abstract desert map with an impossible staircase in warm ivory, ink, and coral.' 用于 The Cartographer's Dream 的精选主视觉、影片详情、卡片、排行榜和个人资料（如适用）。在 ASSETS.md 中准确注明：Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template。
- 图片：将 https://media.vibefather.ai/assets/8fb087e6-021d-4f04-a2f4-ba660f1ef5f3/night-orchard.webp 下载到 public/posters/night-orchard.webp。替代文本：'Moonlit orchard with coral lanterns and dark sage branches in a matte illustrated style.' 用于 The Night Orchard 的卡片和详情路由。在 ASSETS.md 中准确注明：Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template。
- 图片：将 https://media.vibefather.ai/assets/8fb087e6-021d-4f04-a2f4-ba660f1ef5f3/static-between-stars.webp 下载到 public/posters/static-between-stars.webp。替代文本：'A solitary radio tower and orbital arcs in an inky star field with ochre light.' 用于 Static Between Stars 的卡片和详情路由。在 ASSETS.md 中准确注明：Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template。
- 图片：将 https://media.vibefather.ai/assets/8fb087e6-021d-4f04-a2f4-ba660f1ef5f3/room-for-august.webp 下载到 public/posters/room-for-august.webp。替代文本：'Sunlit empty room with a ladder, linen curtains, and geometric late-summer shadows.' 用于 A Room for August 的卡片和详情路由。在 ASSETS.md 中准确注明：Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template。
- 图片：将 https://media.vibefather.ai/assets/8fb087e6-021d-4f04-a2f4-ba660f1ef5f3/salt-cinema.webp 下载到 public/posters/salt-cinema.webp。替代文本：'An empty seaside projection screen, winding coastal path, and coral dusk in textured gouache.' 用于 Salt on the Projectionist's Hands 的卡片和详情路由。在 ASSETS.md 中准确注明：Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template。
- 图片：将 https://media.vibefather.ai/assets/8fb087e6-021d-4f04-a2f4-ba660f1ef5f3/clockwork-heron.webp 下载到 public/posters/clockwork-heron.webp。替代文本：'An original mechanical heron among misty reeds with muted coral gears and ochre light.' 用于 The Clockwork Heron 的卡片和详情路由。在 ASSETS.md 中准确注明：Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template。
- 图片：对于其余 94 个目录条目，在代码中根据影片 slug 和类型，使用声明的调色板和几何场景配方，创作确定性的内联 SVG 海报。将可复用的海报生成代码保存在 src/components/GenerativePoster.tsx 中，而不是作为远程图片或占位块。在 ASSETS.md 中记录原创 SVG 作者身份；不额外下载位图。
- 图标：本地打包 lucide-react，用于 Search、Menu、X、Star、Bookmark、Check、ThumbsUp、SlidersHorizontal、ChevronDown、ArrowRight、PenLine、UserRound、Film、Clock3、BarChart3、RotateCcw 和 Trash2，尺寸 16–20px，使用 currentColor。在本地绘制原创四角边框字标、favicon、字母组合和所有图表。在 ASSETS.md 中记录 Lucide 的 ISC 许可证；不使用品牌、电影节、制片厂或流媒体图标。
- 字体：通过 @fontsource/instrument-serif 自托管 Instrument Serif 400，通过 @fontsource/dm-sans 自托管 DM Sans 400/500/600/700，通过 @fontsource/ibm-plex-mono 自托管 IBM Plex Mono 400/500。仅导入所需的 Latin woff2 文件，并在 ASSETS.md 中记录包路径、包源 URL、作者和 OFL-1.1 许可证。绝不使用字体 CDN。

## 不要做
- 不要使用真实的电影片名、海报、剧照、预告片、角色、制片厂、发行商、电影节、流媒体服务、奖项标识、可辨认的演员肖像或真人肖像。全部 100 部影片、导演、评论者、成员、剧情简介、评论和汇总数据都必须保持虚构。
- 不要复制现有电影社区的名称、标志、吉祥物、口号、独特图标、品牌配色、精确布局、界面文案、评论文本、榜单条目、评分总数、用户名或个人资料图像。星级、列表、评论和品味图表这些通用概念，并不构成复制某个品牌产品的许可。
- 不要使用外部电影数据库、第三方 API、身份验证、账户、后端、服务器代码、API 路由、数据库、远程表单、分析、跟踪、广告、分享服务，或任何声称可在线发布评论的请求。所有交互都在本地进行，所有内容都随静态包一起发布。
- 不要热链六张生成的图片或任何其他资源。在构建期间将声明的图片下载到 public/posters/，使用相对路径，并在 ASSETS.md 中包含每个第三方文件和准确的生成图片署名。不得使用 Unsplash、Pexels、Pixabay、图库授权照片、占位图服务、Google Images、CC BY-NC 或 CC BY-SA 资源。
- 不要使用商业字体、Google Fonts URL、CDN 脚本或样式、受限的 UI 库源码、额外的图表/路由/状态/动画库，或外部托管的图标。仅使用声明的包、手工构建的 SVG 图表、本地 CSS 和自托管的 Fontsource 字体。
- 不要让 localStorage 被拒绝、沙箱化 iframe、格式错误的已保存数据或未知影片 slug 产生控制台错误或空白页面。验证已保存状态，使用内存回退，保留交互，并在详情 slug 缺失或无效时显示所选/默认影片。
- 不要在无关组件中重复评分、评论、列表或个人资料数字。从规范的共享状态派生所有计数和图表；使已看和想看互斥，将新评分一次性纳入汇总，并在移除时精确地反向操作。
- 不要在 src/content.ts 之外硬编码 Fableframe、默认邀请、受众、精选影片、个人资料名称或排名列表名称。当变量变化时，自然地重写依赖变量的文案，并且不暴露任何未解析的 [VARIABLE] 占位符或矛盾的默认文本。
- 不要创建裸目录链接、无功能按钮、占位符 '#'、服务器路由或额外页面。仅使用 index.html 和声明的 hash 路由，href 为 './index.html#/…'；'#/film' 和未知影片 slug 始终解析为真实的默认影片。
- 不要添加营销定价、注册墙、虚假实时计数器、真实评论日期、流媒体链接、预告片、奖项、推送通知、cookie 横幅、自动播放轮播、无限滚动或促销弹窗。产品本身就是社区界面。
- 不要添加超出纯当前视图标题和本地 favicon 的 SEO 元数据：不要做 meta-description 工作、Open Graph 标签、JSON-LD、站点地图代码、关键词堆砌或标题层级指令。
- 生产环境 npm run build 必须输出压缩后的静态 dist/，小于 20 MB，Vite base 为 './'，无 source map，且不将 src/ 复制到 dist/。它必须在 1440×900 和 390×844 下正常工作，零控制台错误且无水平页面溢出。
- 尊重 prefers-reduced-motion、可见的键盘焦点、语义化按钮和标签页、可访问的图表值、带标签的字段、对话框焦点捕获和恢复、44px 触摸目标以及非颜色状态标签。不要要求悬停、滑动或动画才能完成操作。
- 除可选的 [CREDIT] 页脚链接外，绝不在渲染的站点内提及 VibeFather，也绝不使用 VibeFather 或任何真实品牌作为变量默认值。所有文案、标签、示例数据和 alt 文本必须为美式英语。

---
— Prompt by VibeFather · https://vibefather.ai/t/movie-rating-community · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
