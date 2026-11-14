> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 夏令营网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一个温暖的单页网站，这是一个虚构的湖畔夏令营。一个分层剪纸风格的 SVG 营地场景构成主视觉的锚点，其后依次是含活动列表的分龄项目、周一至周日的营地一周条带、小屋与安全卡片、插画风格的员工一排、带营期标签的费用表，以及一个在本地保存的报名表。

- 受众：正在为 [AGE_RANGE] 岁的营员选择第一个——或第五个——夏天的家长，以及希望网站有手工感、能在被提问之前就回答安全问题的营长和项目协调员。
- 目标：展现营地的日常现实——项目、节奏、小屋、员工、价格——温暖到足以让孩子兴奋，可信到足以让家长安心，最终以一个保存在浏览器中的报名表收尾。
- 语气：温暖、自豪、带一点幽默；同时对家长和孩子说话。用具体细节而非口号，安全陈述直白而从不吓人。重写项目、日程、员工、费用和常见问题，以契合所提供的变量。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：motion（MIT）、lucide-react（ISC）、@fontsource/baloo-2（OFL）、@fontsource/nunito（OFL）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - Vite 配置 base './'，React 18、TypeScript 和 Tailwind CSS 3.4；vite.config 设置 base './' 和 build.sourcemap: false。
  - 将课程项目、每周日程、小屋、员工、费用、常见问题及所有页面文案保存在 src/content.ts 中，内容源自变量值。
  - 在 src/main.tsx 中导入 @fontsource/baloo-2（600、700、800）和 @fontsource/nunito（400、600、700）；在 tailwind.config.js 中将它们映射到标题字体和正文字体。
  - 在 tailwind.config.js 中定义 Craft Cream、Paper White、Cocoa、Sun Yellow 和 Lake Blue 令牌；关键帧（float、pop、rise）位于 src/index.css。
  - 在 src/components/CampScene.tsx 中将主视觉构建为单个分层 SVG 组件，每个纸质图层对应一个组，以便每个图层可以按自己的关键帧循环漂移；注册状态使用 React 加 localStorage 键 camp-registration.v1。
  - 添加一个静态纸质颗粒叠加层（SVG 湍流滤镜，5% 不透明度），固定在页面之上；它从不播放动画。
  - 从 [BRAND] 设置纯文本文档标题，并设置一个原创的 32px SVG favicon（Sun Yellow 圆形，Cocoa 色切割射线）；不添加其他元数据。

## 变量
- [BRAND] — 营地名称（默认："Camp Bluejay"）。虚构的营地；用于字标、文案、费用和页脚。不得与真实营地品牌相似。
- [CAMP_FOCUS] — 营地主题（默认："canoeing, forest crafts and campfire cooking"）。营地日常活动围绕其展开；决定活动项目列表、每周日程和主视觉副标题。
- [AGE_RANGE] — 年龄范围（默认："7 to 14"）。营员年龄；三个项目分组在此范围内划分。
- [SESSION_LENGTH] — 营期时长（默认："one week"）。营期按此时长命名和定价，绝不按日历日期。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接指向 https://vibefather.ai/t/summer-camp-website（默认：是；删除此行即可移除）

页面与区块下的文案按默认值撰写。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- 手工奶油色（Craft Cream）`#FBF2DC` — 颗粒叠加层下方的页面底色。
- 纸白色（Paper White）`#FFFDF6` — 卡片、费用表和报名面板。
- 可可色（Cocoa）`#4A3728` — 文字、手绘轮廓和描边。
- 阳光黄（Sun Yellow）`#FFC53D` — 主强调色、CTA、水上活动标签和头像圆盘。
- 湖水蓝（Lake Blue）`#3F8DB4` — 次强调色、日程卡片、表头和陆地活动标签。

### 字体排印
- 展示 / 标题：Baloo 2（OFL），字重 600/700/800
- 正文 / UI 文字：Nunito（OFL），字重 400/600/700

### 布局与动效
- 间距：友好而宽敞：桌面端区块内边距 88px，移动端 56px，容器宽 1120px，卡片间距 24px；首屏场景高 62vh。
- 圆角：格外圆润：卡片和相框 24px，标签、按钮和头像圆形 999px，输入框和表格角 16px。
- 动效：首屏纸层漂移：每个 SVG 层以各自 9-13s 的 ease-in-out 循环浮动，translateY 最多 8px，错开进行；在 prefers-reduced-motion 下所有循环冻结。
- 动效：滚动显现：卡片上升 20px 并在 0.45s 内淡入，whileInView，错开 70ms。
- 动效：微交互：活动标签悬停时上浮 2px，保存按钮像纸张一样按下，输入框和下拉选择获得阳光黄聚焦环。
- 动效：颗粒叠加层是静态的；页面上没有任何循环快于 9s。
- 图像：一个手工搭建的剪纸世界：首屏场景、项目圆盘、木屋图标和员工头像使用分层平面 SVG 形状，配以长而柔和的阴影和可可色墨线轮廓。三张真实营地照片（湖泊、木屋、篝火）共享同一种温暖黄金时刻纪实调色，像胶带贴上的照片一样悬挂；员工和营员始终是插画，绝不用照片。

## 页面与区块
### [BRAND] 夏令营（`index.html`）
1. **页眉与导航** — 左侧为字标：[BRAND] 使用 Baloo 2 800 字体，旁边是一个手绘小独木舟图形。中间导航：Programs、A week at camp、Cabins & safety、Fees。右侧是一个 Sun Yellow（阳光黄）胶囊按钮，文字为 Register。移动端上，Menu 按钮会打开一个奶油色面板，包含相同的锚点链接，选择后关闭。
   布局：粘性 76px 页眉，Craft Cream（手作奶油色）背景带颗粒叠加层；共享 1120px 容器。锚点为 ./index.html#programs、#week、#cabins、#fees 和 #register。
   动效：滚动 24px 后，一层柔和的 2px 阴影淡入。
2. **分层剪纸湖景主视觉** — 一幅全宽的分层剪纸 SVG 营地场景：带光芒的剪纸太阳、两条 Lake Blue（湖水蓝）山丘色带、带码头和两艘独木舟的湖面、渐变蓝色的松树、一栋 A 字形小屋和两顶帐篷、一小堆篝火；每一层都是独立的 SVG 组。场景之上，Baloo 2 800 字体显示：Six days of lake, woods and cooking outside. 副标题使用 Nunito：A sleepaway camp built around [CAMP_FOCUS], on the quiet shore of Loonshore Lake, for campers aged [AGE_RANGE]. CTA：Sun Yellow 胶囊按钮 See a week at camp 和 Lake Blue 描边胶囊按钮 Fees & registration。三个奶油色小标签：8 campers a cabin、1:6 staff on the water、0 screens。
   布局：场景占 62vh，标题块位于左下角的奶油色水洗卡片上，旋转 -1deg，24px 圆角；标签行在 CTA 下方换行；在 390px 宽度下，场景裁剪以保持太阳、小屋和码头在画面内。
   动效：太阳和独木舟漂移最慢，树梢最快，各自独立循环；标题卡片加载时上升 20px；标签以 90ms 间隔弹出；在 prefers-reduced-motion 下所有漂移冻结。
3. **真实的地方：胶带照片条** — 三张照片像冲印照片一样用胶带贴在页面上：黄金时刻的码头和独木舟（camp-lake.webp）、晨光中木屋之间的碎石小路（camp-cabins.webp）、黄昏时的篝火圈（camp-campfire.webp）。照片行下方的说明文字：Loonshore Lake, photographed on an ordinary Tuesday.
   布局：三张 4:3 冲印照片排成一行，移动端堆叠，分别旋转 -2、1 和 2 度，带手工裁切白色边框、CSS 胶带条和柔和投影。
   动效：照片在 whileInView 时以 90ms 错峰显现，并向水平方向回正 1deg。
4. **按年龄段划分的项目** — 标题：Three bands, one lake. 副标题：Campers join a band by age; the lake does not care how old you are. 三张 Paper White（纸白色）卡片，带分层剪纸图标圆盘。Otters，7-9 岁，睡莲叶图标：池塘戏水、串珠手工、短途独木舟环游、青蛙普查、熄灯故事；每组 8 人，2 名工作人员。Falcons，10-11 岁，翅膀图标：全湖独木舟日、木工坊、夺旗游戏、周二过夜、绳结学校；每组 10 人，2 名工作人员。Voyagers，12-14 岁，指南针图标：日出划桨、野外烹饪、高空绳索林、每日队长、两晚岛屿露营；每组 10 人，2 名工作人员。水上活动使用 Sun Yellow 标签，陆地活动使用 Lake Blue；各年龄段重申 [AGE_RANGE]。
   布局：三张等宽卡片，24px 圆角；图标圆盘为约 72px 的分层 SVG；标签最多换行两行；脚注行：Every band swims daily; every band cooks Friday supper.
   动效：卡片在 whileInView 时以 70ms 错峰上升淡入；标签悬停时上浮 2px。
5. **营地一周** — 标题：A week, honestly. 一排七张日卡，周一到周日，每张有一个主题和四个活动标签。周一 — 到达、游泳测试、木屋旗帜。周二 — 独木舟日和过夜。周三 — 手工艺市集和午休反抗。周四 — 岛屿徒步和短剧之夜。周五 — 营员烹饪晚餐和谷仓舞会。周六 — 帆船赛、篝火、秘密伙伴。周日 — 煎饼早餐和告别圈。日卡条下方是一条 Every day rhythm 栏：升旗、早餐、两个活动时段、午休、自由游泳、晚间篝火。
   布局：日卡宽 240px，位于可水平滚动的行中，边缘柔和淡出；节奏栏是一条圆角 Lake Blue 轨道，带六个奶油色站点；移动端日卡条保持可滚动，节奏栏变为两列列表。
   动效：日卡条首次查看时带有轻微拖拽提示；节奏站点在 whileInView 时依次亮起。
6. **木屋与安全** — 左侧三张木屋迷你卡：Hemlock、Birch 和 Cedar — 每间 8 名营员和 2 名工作人员，纱窗、门廊秋千，以及恰好放一支手电筒和一个铅笔盒的架子。右侧一张安全卡，带手绘图标行：每次游泳都有救生员；水上 1:6 的工作人员比例；现场护士全天候值守；所有工作人员接受急救培训；大门签到和签出；厨房围栏并检查。结尾句：The scary part of camp is the spider in the shower. We even have a plan for him.
   布局：两栏，比例 45/55；木屋卡在左栏内排成一行；安全行由细线 Cocoa（可可色）分隔，带 24px 图标。
   动效：卡片在 whileInView 时显现；安全图标在对应行进入时自绘一次（stroke-dashoffset）。
7. **带插画头像的工作人员行** — 标题：The people who run the lake. 四个插画剪纸头像位于 Sun Yellow 圆盘上 — 分层 SVG 面孔，不同肤色、一顶毛线帽、眼镜、辫子 — 绝不用照片。Marisol Vega，Camp Director，第十四个夏天。Theo Brandt，Water Lead，前世是摆渡人。Nia Okafor，Crafts Lead，串珠库的守护者。Ruth Calloway，Camp Nurse，对一切泰然自若。
   布局：桌面端四列，移动端两两排列；头像 96px；名字使用 Baloo 2 700，角色行使用 Nunito 600，70% Cocoa。
   动效：头像以 100ms 错峰弹出，悬停时倾斜 2deg。
8. **营期与费用表** — 标题：Sessions & fees. Paper White 上的表格：First Session（[SESSION_LENGTH]），所有年龄，$895，包含所有餐食、独木舟训练和一次洗衣。Two-Week Voyager，12-14 岁，$1,690，包含岛屿过夜。Full Summer，三个营期，所有年龄，$2,480，包含所有内容外加一件营地连帽衫。Day Camp，上午 8 点到下午 6 点，7-9 岁，每周 $390，包含午餐。脚注：$150 定金保留床位；兄弟姐妹 10% 折扣；注册后费用永不上涨。
   布局：五行，Lake Blue 表头行和奶油色/纸白色斑马行，16px 圆角并隐藏溢出；移动端表格变为堆叠卡片，营期名称作为标题。
   动效：行在 whileInView 时以 50ms 错峰淡入。
9. **本地保存的注册表单** — 标题：Hold a bunk. 字段：营员名字、年龄、营期选择（上述四个营期）、木屋伙伴请求（可选）、家长姓名、家长邮箱，以及任何我们应该知道的事（文本域）。提交按钮：Save my registration. 保存后，表单切换为确认卡片：Saved in this browser only — this demo does not send anything anywhere，下方有 Edit 和 Clear 按钮。状态持久化在 localStorage 键 camp-registration.v1 中。
   布局：Paper White 上的两栏卡片，16px 输入框，Sun Yellow 焦点环，全宽 Sun Yellow 胶囊提交按钮；确认卡片保持相同占位。
   动效：提交按钮点击时下压；确认卡片上升 16px，一个 Sun Yellow 对勾自绘一次。
10. **常见问题** — 三个手风琴。What do campers pack? One duffel: layers, broken-in boots, a hat, a flashlight; we provide the rest, including the courage. Can my child room with a friend? Yes — one buddy request per camper, and we honor nearly all of them. What about homesickness? It is normal, it is short, and the canoe usually fixes it; the nurse or director calls home the same evening if it is not.
   布局：单个 720px 列，Paper White 上的 16px 圆角行；Plus 图标打开时旋转为 X；一次只打开一行。
   动效：答案以高度动画在 0.3s 内展开；打开的图标旋转 45 度。
11. **页脚** — Craft Cream 地面，顶部细线 Cocoa 分隔线：Baloo 2 800 的 [BRAND] 字标，然后是 1 Canoe Launch Road, Loonshore Lake。小字：Registration in this demo saves to this browser only. 重复锚点：Programs、A week at camp、Cabins & safety、Fees。可选的 [CREDIT] 链接放在最后。
   布局：居中列，约 96px 高；小字位于一条细线分隔的行上。

## 资源

- 图片：为本设计制作的模板照片，可随模板自由再分发。用 curl -L -o 将每张图片下载到 public/images/：https://media.vibefather.ai/assets/19cb2ddb-ed54-4fb8-96e1-05a7823a7171/camp-lake.webp → public/images/camp-lake.webp（真实地点，print 1；alt A wooden dock and two orange canoes on a calm lake at golden hour）；https://media.vibefather.ai/assets/19cb2ddb-ed54-4fb8-96e1-05a7823a7171/camp-cabins.webp → public/images/camp-cabins.webp（print 2；alt A gravel path between small wood cabins among pines in morning light）；https://media.vibefather.ai/assets/19cb2ddb-ed54-4fb8-96e1-05a7823a7171/camp-campfire.webp → public/images/camp-campfire.webp（print 3；alt A stone campfire circle with log benches and a small fire at dusk）。三张照片共用同一种温暖黄金时刻纪实调色；没有可辨认的人物。
- 图片：在项目根目录写入 ASSETS.md，包含一个表格：path、source URL、author、license——每张照片一行（source media.vibefather.ai，为本模板制作；author VibeFather；license Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template），另加 @fontsource/baloo-2 和 @fontsource/nunito（OFL-1.1）以及 lucide-react（ISC）的行。
- 图标：lucide-react（ISC）用于小型 UI 线条：Plus、X、Check、ArrowRight、ShieldCheck、Sun（stroke width 2，16-24px，color inherits）。主视觉剪纸场景、项目图标圆盘、小屋字形、员工头像、胶带条和 favicon 都是为本模板绘制的原创分层 SVG；不使用其他图标包，不使用品牌标识，不使用类似现有营地的吉祥物。
- 字体：安装 @fontsource/baloo-2 和 @fontsource/nunito，并按 Setup 中所列在 src/main.tsx 中导入；Vite 会将 woff2 文件打包进 dist/。绝不要从 fonts.googleapis.com 或任何 CDN 加载字体。
- 图片：代码绘制：分层剪纸主视觉场景（太阳、山丘、湖泊、码头、独木舟、松树、小屋、帐篷、营火）、项目圆盘、小屋迷你字形、员工头像、颗粒叠加层和 favicon 都是原创内联 SVG。除三张照片外，没有其他位图。

## 不要做
- 不要复制或引用任何真实的营地、组织、协会或认证机构；营地、湖泊、员工、小屋和费用完全是虚构的，且不得与真实营地品牌相似。
- 不要在任何地方使用可识别的真实人物照片；员工和营员是插画风格的剪纸头像，照片只展示地点，任何人物都处于远处且为背影。
- 不要在任何地方放置日历日期、年份或日期选择器；营期和活动仅使用营期和周标签。
- 不要暗示注册表单会传输任何内容；它仅保存到 localStorage，确认信息会用通俗的语言说明这一点。
- 不要通过网站收取付款或定金；费用和定金仅为展示文案。
- 不要添加后端、服务器代码、API 路由、数据库、认证、表单提交、第三方 API 或分析；网站以静态文件运行。
- 不要使用图库网站、占位图片服务、热链接资源、CDN 脚本、CDN 样式表或外部字体 URL；仅使用下载到 public/images/ 的三张生成照片以及代码绘制的 SVG。
- 不要加载商业字体或来自 Google 或 Adobe CDN 的字体；仅通过 Fontsource 自托管 Baloo 2 和 Nunito。
- 不要在 dist/ 中附带 source maps 或 src/，不要让 dist/ 超过 20 MB，不要使用绝对资源路径，不要更改固定的构建命令 npm run build。
- 不要使用裸目录内部链接；单页保持在 index.html，使用 ./index.html# 锚点。
- 不要添加 SEO 元数据、Open Graph 标签、JSON-LD、站点地图或堆砌关键词的标题；一个简单的 [BRAND] 标题和 favicon 就足够了。
- 不要留下无效控件：菜单、标签、手风琴、表单字段、保存、编辑和清除都必须本地响应；图层漂移和显现效果要遵循 prefers-reduced-motion。
- 不要在 1440x900 和 390x844 下出现控制台错误、水平溢出或小于 44px 的点击目标。

---
— Prompt by VibeFather · https://vibefather.ai/t/summer-camp-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
