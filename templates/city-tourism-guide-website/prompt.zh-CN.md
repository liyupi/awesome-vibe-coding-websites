> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 城市旅游指南网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一个充满活力的单页目的地指南，[BRAND] 是一座虚构的沿海城市。页面包含一张色彩缤纷的街头摄影主视觉图、四个按颜色编码的游玩板块（吃（Eat）、看（See）、玩（Do）、放松（Relax））、一张配有区域卡片的插画式街区地图、现成的 1/2/3 日行程、一个带季节标签的活动跑马灯，以及一个会在浏览器中保存站点的旅行规划器候选清单。

- 受众：计划在 [BRAND] 停留几天的独立旅行者——[AUDIENCE]——以及需要一页读起来像杂志的指南式页面的目的地营销人员和旅行创作者。
- 目标：让访客按心情浏览站点、了解街区、跟随现成的一日计划，并在本地保存自己的候选清单，使这份指南成为工具而非宣传册。
- 语气：阳光杂志腔调：具体、有主见、温暖。具体的站点配以诚实的一句话点评，不要旅游局式的陈词滥调。重写每一个站点、街区和活动，以契合所提供的变量。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：motion（MIT）、lucide-react（ISC）、@fontsource-variable/fraunces（OFL）、@fontsource/karla（OFL）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置：
  - Vite 使用 base './'、React 18、TypeScript 和 Tailwind CSS 3.4；vite.config 设置 base './' 和 build.sourcemap: false。
  - 将所有站点、街区、行程、活动和页面文案保存在 src/content.ts 中，由变量值派生，以便一个文件即可重写整个指南。
  - 在 src/main.tsx 中导入 @fontsource-variable/fraunces（wght 600、900）和 @fontsource/karla（400、500、700）；在 tailwind.config.js 中将它们映射到标题字体和正文字体。
  - 在 tailwind.config.js 中定义 Paper、Cream、Ink、Coral、Teal 和 Sunflower 颜色令牌；共享关键帧（marquee、pop、bob）位于 src/index.css。
  - 使用 React state 加 localStorage（键为 trip-shortlist.v1）运行旅行规划器；不使用路由或状态管理库。
  - 将街区地图、太阳图形、指南针和 favicon 绘制为原创内联 SVG；favicon 是一个 32px 的向日葵方块，带有一个珊瑚色太阳。
  - 从 [BRAND] 和上述 favicon 设置一个简单的文档标题；不添加其他元数据。

## 变量
- [BRAND] — 城市名称（默认：“Solmara”）。虚构的海滨城市；用于字标、主视觉标题、文案和页脚。
- [KNOWN_FOR] — 以……闻名（默认：“citrus groves, fishing piers and a lighthouse point”）。这座城市因何出名；驱动主视觉引导语、站点和街区特色。
- [AUDIENCE] — 访客群体（默认：“weekend wanderers, food lovers and young families”）。指南面向的旅行者；据此重写站点和行程。
- [SIGNATURE_EVENT] — 标志性活动（默认：“Marigold Lantern Regatta”）。这座城市的头条季节性活动，在活动条和行程中提及。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/city-tourism-guide-website（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 纸色（Paper）`#F8F1E0` — 温暖的纸张页面底色与安静区块。
- 奶油色（Cream）`#FFFDF4` — 卡片表面、标签和纸面上的站点行。
- 墨色（Ink）`#2E2B25` — 标题、正文、Relax 区块和页脚底色。
- 珊瑚色（Coral）`#F0654A` — Eat 区块、主 CTA、活动跑马灯带、计数徽章。
- 青绿色（Teal）`#177E76` — See 区块、链接、行程数字圆圈、地图圆点。
- 向日葵色（Sunflower）`#F4B942` — Do 区块、高亮徽章、太阳图形、滚动提示。

### 字体排印
- 展示 / 标题：Fraunces Variable（OFL），字重 600/900
- 正文 / UI 文本：Karla（OFL），字重 400/500/700

### 布局与动效
- 间距：杂志式节奏：桌面端区块内边距 96px、移动端 64px，单一 1200px 容器，32px 网格间距，72px 粘性页头；首屏占 92vh。
- 圆角：锐利编辑风格：色块和照片为 0px，标签和输入框为 4px，仅胶囊按钮和计数徽章为 999px。
- 动效：滚动显现：区块和卡片在 0.5s 内向上淡入 24px，使用 Motion 的 whileInView，每张卡片错开 60-80ms。
- 动效：活动跑马灯以 38s 线性循环向左滑动，悬停和聚焦时暂停，在 prefers-reduced-motion 下渲染为静态。
- 动效：规划器反馈：Plus 按钮翻转为 Check，伴随 150ms 缩放弹跳，并触发一个小 toast，内容为 Saved to your shortlist；计数徽章在每次变化时弹跳。
- 动效：卡片悬停：区块照片缩放至 1.04，色块标题上移 4px；在 prefers-reduced-motion 下一切归于平静。
- 图像：六张阳光街头照片采用统一的温暖金色调 — 街道、市场、灯塔、港口、海湾、广场 — 无可读招牌、无标识，人物仅远景或背影。其余一切均为绘制：手绘墨线 SVG 城市地图、太阳图形、指南针和 favicon，采用同一配色。

## 页面与区块
### [BRAND] 城市指南与行程规划器（`index.html`）
1. **页眉与导航** — 左侧为文字标识：[BRAND] 使用 Fraunces 900 字体，配有一个用 SVG 绘制的小向日葵太阳图形。中间导航：可做的事、街区、行程、活动。右侧是一个胶囊按钮，标签为 Shortlist，在第一个停靠点被保存前保持隐藏，之后显示珊瑚色计数徽章。移动端导航折叠为一个 Menu 按钮，点击后打开纸质面板，包含相同的锚点，选择后关闭。
   布局：Paper 背景上的 72px 粘性页眉；滚动 24px 后出现 1px 墨色底边线和 4px 阴影。共享 1200px 容器。锚点为 ./index.html#things、#districts、#itineraries 和 #events。
   动效：底边线和阴影在滚动时淡入；Shortlist 胶囊在首次保存停靠点时向下滑入。
2. **带彩色街景照片的主视觉区** — 全出血 hero-street.webp，底部三分之一处升起温暖的纸质渐变。Karla 700 大写青绿色导语：An independent guide to a city built on [KNOWN_FOR]。城市名 [BRAND] 以 Fraunces 900 字体填满宽度（clamp 96px 至 180px，Ink 色）。副标题：Forty-two stops, six neighborhoods, one very good lighthouse。两个 CTA：珊瑚色胶囊按钮 Start with one perfect day 和墨色描边胶囊按钮 Browse things to do。左下角三个奶油色数据标签：42 stops、6 neighborhoods、3 itineraries。
   布局：92vh 区块，照片覆盖；标题块位于纸质蒙层左下方，因此不会与天空冲突；移动端标签行换行至副标题下方。替代文本：A colorful coastal street with coral, teal and yellow facades sloping toward the sea。
   动效：标题在加载时上升 32px 并在 0.7s 内淡入；数据标签以 80ms 间隔交错进入；一个细小的向日葵滚动提示箭头在底部边缘上下浮动。
3. **可做的事：颜色编码区块** — 标题：Things to do, four ways。副标题：Tap the plus on anything that sounds like you; the shortlist keeps it。一个 2x2 的全彩区块网格，每个区块以 Fraunces 900 字体显示其类别、一张照片和五个停靠点。吃（Coral，eat-market.webp）：Roe & Embers — sardines grilled at the pier counter；The Marigold Room — custard tarts, eaten standing；Fish Market Row — tuna tostadas from seven in the morning；Casa Lupa — citrus-cured everything, order the small plates；Pier 9 Coffee — an iced carajillo on the seawall。看（Teal，see-lighthouse.webp）：Lighthouse Point — 118 steps, worth every one；The Old Cannery Murals — nine walls, nine painters；Museum of Salt — small, strange, perfect；The Grove Gate arch on Fennel Street；Mussel Rocks at sunset — bring a sweater。做（Sunflower，do-harbor.webp）：Kayak the harbor at first light — glass water, working boats；Saturday boatyard market — go early；Tide-pooling at Cape Sol — low tide only；Bike the Coast Line, pier to lighthouse；Night swimming at Gull Cove — brave and wonderful。放松（Ink 配 Cream 文字，relax-cove.webp）：The hammock lawn at Fig Grove；A two-hour lunch at Pier 9；The seawall benches between Piers 8 and 10；The cliff steps down to Shell Beach — go slow；The evening paseo — everyone out, nobody rushing。每个停靠点行都有一个圆形 Plus 按钮，保存后切换为 Check。
   布局：1200px 下为 2x2 网格，移动端为单列；区块齐平且为锐角；每张照片作为 4:3 卡片位于左上角，停靠点列表在旁边，移动端堆叠在照片下方；停靠点行为 56px，带有细线 Cream 分隔线。
   动效：区块在进入视图时以 80ms 交错显示；照片悬停时缩放 1.04；Plus 以 150ms 弹跳翻转为 Check，并显示提示 Saved to your shortlist。
4. **街区：插画地图与区域卡片** — 标题：Six neighborhoods, forty minutes apart on foot。左侧是一张手绘 SVG 地图，描绘这座虚构城市：锯齿状海岸线，带有港口和码头线条，细墨色街道，每个区域用向日葵圆点标记，一个小罗盘玫瑰和纸质纹理填充；悬停圆点会抬起其标签。右侧是四张 Cream 背景卡片。The Pier Quarter — fish counters, a ferry horn, the best morning walk in town；最适合：first morning, seafood, people-watching。Marigold Old Town — painted shutters, tiny plazas, the custard-tart line；最适合：an easy afternoon, gifts, gelato。Lighthouse Point — wind, viewpoints, 118 steps down to Mussel Rocks；最适合：sunrise, a long talk, the photo。Fig Grove — the green bit: hammocks, market sheds, Sunday picnics；最适合：kids, shade, doing nothing。
   布局：桌面端两列，地图占 55%，堆叠卡片占 45%；地图为原创内联 SVG，绝不使用地图瓦片或嵌入式地图服务；每张卡片列出三个最适合标签，以其地图圆点颜色着色。
   动效：区块进入视图时地图圆点脉冲一次；卡片以 70ms 交错显示；悬停卡片时柔和放大其对应的地图圆点。
5. **行程：一天、两天或三天** — 标题：Ready-made days。副标题：Every stop saves to your shortlist with one tap。一个标签行切换三列。完美一天：golden-hour swim at Gull Cove；custard tarts at The Marigold Room；tuna tostadas at Fish Market Row；the Cannery Murals in the cool of the afternoon；118 steps up Lighthouse Point；sardines at Roe & Embers；the evening paseo。慢周末：Day 1 — market breakfast, kayak the harbor, the hammock lawn, dinner at Pier 9；Day 2 — Old Town plazas, Museum of Salt, Shell Beach by the cliff steps, sunset at Mussel Rocks。完整 [BRAND]：Day 1 同上；Day 2 — Cape Sol tide pools, the Grove Gate, the gelato mile；Day 3 — bike the Coast Line, the boatyard market, one last lighthouse。停靠点带有日段标签（morning、midday、golden hour、after dark）——绝不用时钟时间——每行末尾都有相同的 Plus 转 Check 控件。
   布局：一个粘性标签行（1 day、2 days、3 days）位于三个等宽列上方；仅选中的列可见，标签行在滚动时固定在顶部；移动端同一标签行切换堆叠列；每个编号停靠点行为 48px，带有青绿色数字圆圈。
   动效：列切换以 0.3s 交叉淡入淡出；数字圆圈在行进入时填充青绿色；Plus-Check 弹跳与可做的事一致。
6. **季节性活动跑马灯** — 一条全宽 Coral 色带。以 Fraunces 900 Cream 字体，条带内容为：SPRING — [SIGNATURE_EVENT], two hundred paper lanterns down the harbor；SUMMER — Salt & Citrus Festival, juice everywhere；AUTUMN — The Slow Fish Supper, one long table on the pier；WINTER — Grove Lights Night Market；IN BETWEEN — Sunday pier concerts。条带边缘固定一个小号 Karla 说明文字：Season samples — no dates, ever。
   布局：行程与页脚之间的一条 64px 色带；内容重复两次以实现无缝循环；说明文字位于滚动轨道之外。
   动效：跑马灯以 38s 线性循环向左滑动，悬停和聚焦时暂停，在 prefers-reduced-motion 下为静态。
7. **行程规划器：粘性栏与候选清单抽屉** — 一旦保存任何内容，一个粘性栏停靠在底部：Shortlist — n stops，带有一个 Open 按钮。抽屉从右侧滑入，Cream 背景：停靠点按其类别圆点颜色分组，每个都有 Remove 控件，外加一个 Clear all 链接和注释 Saved in this browser only — nothing is sent anywhere。空状态：Nothing saved yet — tap any plus to start。计数在所有位置同时更新，并通过 localStorage（键 trip-shortlist.v1）在重新加载后保留。
   布局：固定底栏，移动端为 24px 内嵌卡片；抽屉为 420px 右侧面板，带遮罩覆盖层，可通过 Esc、点击遮罩或 Close 按钮关闭；打开时焦点被限制在内部。
   动效：底栏在 0.4s 内升起进入视图；抽屉在 0.35s ease-out 内滑入；移除停靠点时其行高平滑折叠。
8. **页脚** — Ink 底色，Cream 文字。一个大型 Fraunces 900 [BRAND] 文字标识，然后是：An independent guide to the city — written, walked and photographed by people who live here。地址：14 Harbor Line, The Pier Quarter, [BRAND]。小字行：The shortlist lives in your browser; season labels, not dates。重复锚点：可做的事、街区、行程、活动。可选的 [CREDIT] 链接放在最后。
   布局：一个居中的单列，约 96px 高；小字位于一条细线分隔的行上。

## 资源
- 图片：为本设计制作的模板照片，可随模板自由再分发。用 curl -L -o 将每张图片下载到 public/images/：https://media.vibefather.ai/assets/2337ccac-0ba1-428e-b01b-fb6bb80dab95/hero-street.webp → public/images/hero-street.webp（Hero；alt A colorful coastal street with coral, teal and yellow facades sloping toward the sea）；https://media.vibefather.ai/assets/2337ccac-0ba1-428e-b01b-fb6bb80dab95/eat-market.webp → public/images/eat-market.webp（Eat 区块；alt An open-air market with citrus crates and fresh fish under paper lanterns）；https://media.vibefather.ai/assets/2337ccac-0ba1-428e-b01b-fb6bb80dab95/see-lighthouse.webp → public/images/see-lighthouse.webp（See 区块；alt A whitewashed lighthouse with a coral lantern room above teal water）；https://media.vibefather.ai/assets/2337ccac-0ba1-428e-b01b-fb6bb80dab95/do-harbor.webp → public/images/do-harbor.webp（Do 区块；alt Kayaks and dinghies on glassy harbor water beside a wooden pier）；https://media.vibefather.ai/assets/2337ccac-0ba1-428e-b01b-fb6bb80dab95/relax-cove.webp → public/images/relax-cove.webp（Relax 区块；alt A quiet cove with striped umbrellas and a hammock between pines）；https://media.vibefather.ai/assets/2337ccac-0ba1-428e-b01b-fb6bb80dab95/plaza-oldtown.webp → public/images/plaza-oldtown.webp（Neighborhoods；alt An old-town plaza with painted shutters and cafe tables under a tree）。
- 图片：在项目根目录写入 ASSETS.md，包含一个表格：路径、来源 URL、作者、许可证——每张照片一行（来源 media.vibefather.ai，为本模板制作；作者 VibeFather；许可证 Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template），另加 @fontsource-variable/fraunces 和 @fontsource/karla（OFL-1.1）以及 lucide-react（ISC）的行。任何照片中均无可识别的人物；无可读的标牌，无标识。
- 图标：lucide-react（ISC）仅用于 UI 描边：Plus、Check、X、MapPin、ArrowRight、ArrowDown、Compass、Sun（描边宽度 2，18-24px，颜色继承）。城市地图、太阳符号、罗盘玫瑰、跑马灯分隔符和 favicon 均为为本模板绘制的原创内联 SVG；不使用其他图标包，不使用品牌标识。
- 字体：安装 @fontsource-variable/fraunces 和 @fontsource/karla，并按 Setup 中所列在 src/main.tsx 中导入；Vite 会将 woff2 文件打包进 dist/。切勿从 fonts.googleapis.com 或任何 CDN 加载字体。
- 图片：以代码绘制：手绘墨线风格的街区地图（海岸线、码头、街道、圆点、罗盘玫瑰、纸张纹理）、分类太阳符号、滚动提示和 favicon 均为原创内联 SVG。除六张照片外无其他位图；无地图瓦片，无嵌入式地图服务。

## 禁止事项
- 不得复制或引用任何真实的目的地指南、旅游局、城市、地标、博物馆、商家或节庆；城市、街道、站点、活动和地图均为完全虚构。
- 摄影中不得出现可辨认的面孔、可读的标牌、品牌标识或可识别的产品；人物仅以远景或背影出现，图片和 alt 文本均如此。
- 不得在任何位置放置日期、年份、时钟时间或日期选择器；活动为按季节标注的示例，行程仅使用时段词语。
- 不得将规划器变成一项服务：无账户、无同步、无邮箱收集、无预订、无支付；仅使用 localStorage，并明确标注 Saved in this browser only。
- 不得添加后端、服务器代码、API 路由、数据库、认证、表单提交、第三方 API 或分析；网站以静态文件运行。
- 不得使用图库网站、占位图服务、外链资源、CDN 脚本、CDN 样式表或外部字体 URL；仅使用下载到 public/images/ 的六张生成照片以及代码绘制的 SVG。
- 不得加载商业字体或来自 Google 或 Adobe CDN 的字体；仅通过 Fontsource 自托管 Fraunces 和 Karla。
- 不得在 dist/ 中附带 source map 或 src/，不得使 dist/ 超过 20 MB，不得使用绝对资源路径，不得更改固定构建命令 npm run build。
- 不得使用裸目录内部链接；单页保持在 index.html，使用 ./index.html# 锚点。
- 不得添加 SEO 元数据、Open Graph 标签、JSON-LD、站点地图或关键词堆砌的标题；一个普通的 [BRAND] 标题和 favicon 即可。
- 不得留下无效控件：每个加号、勾选、移除、清除、抽屉关闭、标签切换和移动端菜单都必须在本地响应；跑马灯在悬停时暂停，所有动效遵循 prefers-reduced-motion。
- 在 1440x900 和 390x844 下，不得出现控制台错误、水平溢出或小于 44px 的点击目标。

---
— Prompt by VibeFather · https://vibefather.ai/t/city-tourism-guide-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
