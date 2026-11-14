> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 带餐盘构建器的营养师网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一个明亮的一页式网站，这是 [PRACTITIONER] 在 [CITY] 的营养教练实践，通过一对一教练、团体项目和 [FOOD_FOCUS] 服务 [AUDIENCE]。页面展示服务内容与教练方式、一个点击即可构建每日餐盘的工具（配有友好的平衡读数）、三道食谱预览、低调的客户评价，以及一个探索通话预约示例。每一个字都停留在厨房层面：页面上任何地方都没有医疗、诊断或减重声明。

- 受众：主要：[AUDIENCE] —— 想要更从容的采购行程、更快的周中晚餐，以及更稳定的饮食习惯，而不需要节食、羞耻感或临床语言的人。次要：自由职业者和小型工作室，为任何提供套餐服务的教练调整此布局。
- 目标：让访客从“这看起来就是我的生活”转变为预约好一个探索通话时段：用一屏的农产品优先世界赢得他们，用一次交互中的餐盘构建器证明教练方法，并让预约成为一个简单的工作日与时间选择，可内联完成并保留在浏览器中。
- 语气：温暖、平实、令人开胃——一位在阳光厨房里的厨师，绝不是诊所。短句、真实的食物词汇、温和的幽默。教练谈技能、购物和习惯；它从不诊断、治疗、开处方，也不承诺体重或医疗结果。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react (MIT)、react-dom (MIT)、vite (MIT)、typescript (Apache-2.0)、tailwindcss (MIT)、motion (MIT)、lucide-react (ISC)、@fontsource/baloo-2 (OFL-1.1)、@fontsource/nunito (OFL-1.1)
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 创建一个 Vite 6 + React 18 + TypeScript 项目，base 为 './'，build.outDir 为 'dist'，build.sourcemap: false。无路由、无后端、无服务器代码。
  - 安装 Tailwind CSS 3.4 及 PostCSS 和 Autrefixer。使用下方精确的调色板扩展主题，fontFamily.display 为 'Baloo 2'，fontFamily.body 为 'Nunito'，并将四个餐盘分组颜色作为命名令牌。
  - 通过 @fontsource/baloo-2 和 @fontsource/nunito 自托管 Baloo 2 字重 600 和 700 以及 Nunito 字重 400、600 和 700，在 src/main.tsx 中导入。绝不从 CDN 加载字体。
  - 使用来自 'motion/react' 的 Motion（motion、AnimatePresence、useReducedMotion）实现显现、弹簧和数字补间动画；每个动画都以 useReducedMotion() 为条件。
  - 将所有文案和数据保留在 src/content.ts 中：品牌字符串、主视觉文案、服务、工作原理步骤、餐盘分组（目标、最大值、示例）、食谱、引语、从业者简介、预约日期和时段标签、FAQ。当变量值变化时，在该文件中重写依赖的文案，并从 [BRAND] 派生 slug 和存储键，以确保不残留默认品牌痕迹。
  - 将餐盘构建为内联 SVG 环形图，由 8 个等分楔形组成，每个分组有各自的填充色，中心为白色圆形；分数、读数等级和建议是 content.ts 中定义的分组计数的纯函数。
  - 将餐盘和探索通话请求持久化到 localStorage，键名分别为 [BRAND_SLUG] + '-plate' 和 [BRAND_SLUG] + '-discovery-request'；验证恢复的 JSON，并从格式错误的数据中静默恢复。
  - 仅使用以下 lucide-react 图标：Leaf、Sparkles、MessagesSquare、Users、ChefHat、Salad、Drumstick、Wheat、Droplets、Clock、CalendarCheck、Check、RotateCcw、Star、Quote、MapPin、ChevronDown、ArrowRight。
  - 在构建前将六张生成的图片下载到资源部分列出的精确公共路径。在项目根目录创建 ASSETS.md，列出每个文件的路径、来源 URL、作者或生成器以及许可证。
  - 一个纯 <title> 为 [BRAND] 以及一个 favicon（代码绘制的叶子标记）就足够了；不需要元描述、Open Graph 标签、JSON-LD 或站点地图。

## 变量
- [BRAND] — 品牌（默认：“Marigold Table”）。虚构的两词练习名称；代码中由此派生出一个叶点标志图形。
- [PRACTITIONER] — 从业者（默认：“June Calloway”）。虚构教练的名字，用于主视觉、关于区块和预约文案。
- [CITY] — 城市（默认：“Alder Springs”）。工作室所在地；出现在主视觉眉题、关于、FAQ 和地址中。
- [AUDIENCE] — 受众（默认：“busy parents who want weeknight dinners to come easily”）。用平实语言描述该教练服务面向的人群。
- [FOOD_FOCUS] — 食物重点（默认：“Mediterranean-inspired weeknight cooking”）。塑造主视觉文案、食谱和餐盘构建器示例的烹饪风格。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/nutritionist-website-with-plate-builder（默认：是；删除此行即可移除）

页面与区块下的文案按默认值撰写。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 奶油色（Cream）`#FBFAF6` — 页面底色
- 白色（White）`#FFFFFF` — 卡片、标签和餐盘中心
- 叶绿色（Leaf green）`#2E7D4F` — 主色：按钮、链接、激活状态、品牌标志
- 叶绿浅色调（Leaf tint）`#F0F7F1` — 区块色带和柔和标签
- 柑橘色（Citrus）`#F5A63B` — 强调色：高亮、价格刻度、选中槽位填充
- 菠菜墨色（Spinach ink）`#26332B` — 标题和正文文本
- 鼠尾草色（Sage）`#DEE9DD` — 细线边框和分隔线
- 餐盘蔬菜色（Plate veggie）`#4C9A5F` — 餐盘构建器中蔬菜和水果扇区的填充色
- 餐盘蛋白质色（Plate protein）`#CC6B4A` — 餐盘构建器中蛋白质扇区的填充色
- 餐盘谷物色（Plate grain）`#DCA94E` — 餐盘构建器中全谷物扇区的填充色
- 餐盘脂肪色（Plate fats）`#8FA05C` — 餐盘构建器中优质脂肪和附加项扇区的填充色

### 排版（Typography）
- 展示字体：标题、价格、餐盘读数标题：Baloo 2（OFL），字重 600/700
- 正文字体：段落、控件、标签、元信息：Nunito（OFL），字重 400/600/700

### 布局与动效（Layout & motion）
- 间距：8px 基础网格。内容外壳最大宽度 1160px，桌面端侧边内边距 32px，移动端 20px。页头 72px。桌面端区块垂直内边距 96px，移动端 64px。卡片网格间距 24px。文本块每行最多 62 个字符。
- 圆角：按钮、标签、标记和品牌标志使用胶囊形 999px；照片、餐盘卡片和大型面板使用 24px；小型卡片和输入框使用 16px。照片使用 24px 圆角并带 1px 鼠尾草色边框。
- 动效：区块在滚动时显现一次：上移 14px，伴随 450ms ease-out 淡入，同级卡片错开 60ms。在 prefers-reduced-motion 下禁用。
- 动效：首屏：农产品照片在 700ms 内从 1.04 缩放至 1，同时文案行上移 16px，错开 80ms。
- 动效：餐盘构建器：新添加的扇区以弹簧效果弹入（刚度 260，阻尼 20），最新扇区脉冲一次；读数标题在 200ms 内交叉淡入，分数数字在 300ms 内补间。
- 动效：悬停状态将卡片上移 4px 并带柔和阴影，180ms。无页面漂移、无自定义光标、无自动播放媒体。
- 动效：在 prefers-reduced-motion: reduce 下，将弹簧、补间和显现替换为 100ms 透明度变化；所有交互保持完全可用。
- 图像：一组摄影作品，一次拍摄：新鲜农产品和成品菜肴，采用一致的轻盈日光色调——白色大理石和浅橡木表面，柔和的窗户光从左上角照入，高调白色，温和的暖色高光，以绿叶蔬菜和柑橘为主。六张生成照片（首屏农产品摆拍、三道摆盘食谱、教练厨房、市场篮子）；不出现人脸、手、可读包装或标志。餐盘环、图标、品牌标志和装饰弧线均以代码绘制，绝不使用照片。

## 页面与区块
### [BRAND] — [CITY] 的营养指导（`index.html`）
1. **页眉与主视觉区** — 吸顶页眉（72px，奶油色 92% 不透明度并带背景模糊，1px 鼠尾草绿底边线）：代码绘制的标志图形——一个叶绿色圆形内嵌白色 Lucide Leaf 图标——旁边是 Baloo 2 700 字重的 [BRAND]；导航锚点：Services、Plate builder、Recipes、About；右对齐的叶绿色胶囊按钮 'Book a discovery call'。主视觉区位于奶油色背景上：眉题 'NUTRITION COACHING IN [CITY]'；H1 'Good food, made doable.'；段落 'Hi, I'm [PRACTITIONER]. I help [AUDIENCE] cook [FOOD_FOCUS] — with calmer grocery runs, a rotation of dinners you actually like, and plates that get eaten.'；主胶囊按钮 'Book a free discovery call'（滚动至预约区）和次级叶绿色描边胶囊按钮 'Try the plate builder'。按钮下方的信任行：'480 households coached · 12-week Table Reset program · 120+ weeknight recipes'。右侧：主视觉农产品照片置于 24px 圆角边框内，其左下角悬浮一张白色小卡片：一个 Sparkles 图标和 'In season this week — oranges, chard, leeks'。
   布局：12 列网格：文案位于第 1–5 列，照片位于第 6–12 列，4:3 比例，object-cover，最小高度 520px。H1 字号 clamp(40px, 4.6vw, 64px)，行高 1.05，菠菜墨色。悬浮小卡片为白色胶囊，阴影从照片左下角偏移 -16px。移动端：文案先堆叠，照片随后全宽显示，4:3 比例，小卡片位于其左下角内；每个点击目标至少 44px。
   动效：照片从 scale 1.04 在 700ms 内稳定；眉题、H1、段落、按钮和信任行以 80ms 错峰上升 16px；小卡片最后以相同弹簧效果淡入。
2. **服务与指导方式** — 白色区块。眉题 'WHAT WE DO TOGETHER'；标题 'Coaching that fits your kitchen.'。三张平静的卡片：'One-to-one coaching' — '$390 / month' — 'Two 50-minute sessions a month, a grocery game plan, and message check-ins between. For people who want a coach in their corner.'；'The Table Reset' — '$249 / 12 weeks' — 'A small-group program: six live cooking classes, a pantry clean-out guide, and weekly habit threads. New groups start each season.'；'Pantry Workshop' — '$85 / one visit' — 'Two hours in your kitchen (or on video). We reorganize, label, and shop-list your staples so weeknights stop being improvised.' 每张卡片页脚链接 'Ask about it on a call' 指向预约锚点。卡片下方是一条 'How coaching works' 三步条带：'01 Discovery call — 20 minutes, no charge. We talk about your weeknights.'；'02 A plan you'll actually cook — three habits, one shopping rhythm.'；'03 Weekly check-ins — we adjust, celebrate, and keep it doable.'
   布局：卡片在白色背景上呈 3 列网格（16px 圆角，1px 鼠尾草绿边框）：图标圆盘（MessagesSquare、Users、ChefHat）位于叶色浅底上，服务名称 Baloo 2 600 字重，价格行 Baloo 2 700 字重叶绿色，正文，页脚链接带 ArrowRight。下方步骤条带：三列由 1px 鼠尾草绿细线分隔，描边数字 01–03 为 40px 叶绿色。移动端：卡片堆叠；步骤堆叠，左侧数字栏，细线变为水平分隔线。
   动效：一次性显现：卡片以 60ms 错峰上升 14px；悬停时卡片上浮 4px 并带柔和阴影；步骤数字随区块淡入，无单独的循环动画。
3. **每日餐盘构建器** — 叶色浅底条带。眉题 'TRY IT NOW'；标题 'Build today's plate.'；引言 'Tap a food group to add a portion. Aim for the simple rule — half the plate veggies and fruit, a quarter protein, a quarter grains, plus a drizzle of something good.' 四行食物组，每行含图标、名称、示例行、计数和减号控件：'Veggies & fruit'（Salad）'roasted broccoli · shaved carrot · orange segments' 最多 5；'Protein'（Drumstick）'eggs · white beans · salmon' 最多 3；'Whole grains'（Wheat）'farro · barley · sourdough' 最多 2；'Good fats & extras'（Droplets）'olive oil · pumpkin seeds · avocado' 最多 2。餐盘是一个绘制的 SVG 甜甜圈，8 个等分扇区围绕白色中心，中心显示 'Your plate · N / 8'。旁边是读数面板：分数仪表、标题和一句建议，外加一个 'Clear the plate' 重置链接。餐盘状态持久化在 localStorage 中。
   布局：两列：餐盘 SVG 约 380px 在左，控件在右。每个食物组行是 56px 高的按钮：图标圆盘为组颜色，名称加示例，计数 '2 / 5'，以及一个减号圆圈，移除该组最后一份。扇区从 12 点钟方向顺时针按添加顺序填充，按组着色。评分：目标为 4 份蔬菜、2 份蛋白质、1 份谷物、1 份脂肪；分数 = max(0, 100 − 12 × Σ|count − target|)。读数层级：分数 100 'A beautifully balanced plate — the simple rule in action.'；85–99 'Bright and balanced — {suggestion}.'；60–84 'Almost there — {suggestion}.'；低于 60 'Keep building — {suggestion}.'。建议：餐盘未满时，指出缺口最大的组（'add a scoop of whole grains'）；餐盘已满但偏离目标时，指出超出最多的组（'take one off the veggies and make room'）。读数为 aria-live='polite'。移动端：餐盘居中于食物组行上方，读数在下方，无水平滚动。
   动效：新扇区弹簧进入（stiffness 260，damping 20），最新扇区单次脉冲；移除在 150ms 内淡出；分数补间 300ms，标题交叉淡入淡出 200ms；减少动态效果时全部替换为即时状态变化。
4. **食谱预览** — 白色区块。眉题 'FROM THE RECIPE LIBRARY'；标题 'Three dinners from this month.'；三张照片卡片：'Charred Lemon & White Bean Bowl' — 标签 '25 min' 和 'weeknight' — 'Crisp-edged beans, soft herbs, and a lemony dressing kids ask for twice.'；'Sheet-Pan Harissa Chicken with Plums' — '35 min' 和 'one pan' — 'Sweet plums, warm spice, and a pan sauce that makes its own glory.'；'Spring Pea & Feta Farro' — '20 min' 和 'meatless' — 'Chewy grains, poppy peas, salty feta — dinner tonight, lunch tomorrow.' 网格下方页脚行：'Full recipes live in the member library — have a taste on a discovery call.' 卡片为视觉元素带元信息标签，非链接。
   布局：3 列白色卡片网格（16px 圆角，1px 鼠尾草绿边框）：顶部 4:3 照片 24px 圆角，名称 Baloo 2 600 字重，元信息标签带 Clock 图标表示时间，一行描述。平板 2 列；移动端单列。悬停上浮 4px。
   动效：卡片以 60ms 错峰显现；每张照片在悬停时循环 6s 从 1 到 1.03 的缓慢缩放，减少动态效果时完全跳过。
5. **客户评价** — 奶油色条带。眉题 'KITCHEN TABLE STORIES'；标题 'What changes, people say.' 三张安静的引用卡片：'Priya S. — parent of two' 'Our Tuesday is no longer cereal. We plan on Sunday, shop once, and actually cook. [PRACTITIONER] made it feel easy, not virtuous.'；'Marcus & Elena T. — Table Reset cohort' 'Six dishes we rotate happily, and a grocery list that alone paid for the program.'；'Dana W. — shift nurse' 'I eat real food on night shifts now. We built a plan around my odd hours, not against them.'
   布局：3 列白色卡片网格（24px 圆角）：大 Quote 图标为叶色浅底，引用文字 17px 菠菜墨色，然后是姓名行带小鼠尾草绿首字母圆盘。移动端堆叠为一列，间距舒适 16px。
   动效：仅一次性错峰显现；引用无悬停动画。
6. **关于指导师** — 白色区块，两列。左：工作室厨房照片（4:3，24px 圆角）。右：眉题 'YOUR COACH'；标题 'Hi, I'm [PRACTITIONER].'；正文 'I trained as a nutrition coach at the Welltable Institute and spent nine years in teaching kitchens before starting [BRAND] in [CITY]. I don't hand out meal plans you abandon in a week — we build food skills: shopping, prep, and a rotation of dinners you like. When I'm not coaching, I'm at the farmers' market deciding between two kinds of chard.' 三个事实标签：'9 years coaching'、'Certified nutrition coach — Welltable Institute'、'Cooking-class teacher'。标签下方一行小 MapPin 文字：'Studio 3, 92 Alder Lane, [CITY]'。
   布局：照片位于第 1–6 列，4:3；文案位于第 7–12 列，事实标签为叶色浅底胶囊，最多换行两行。移动端：照片在文案上方，标签自由换行。
   动效：区块级显现；照片从 scale 1.03 在 700ms 内微妙稳定，减少动态效果时跳过。
7. **Discovery-call booking（探索通话预约）** — 深叶绿色横幅配奶油色文字：眉题 'START HERE'；标题 'Book a free discovery call.'；引言 'Pick a weekday and a time that suits you — 20 minutes, on video or at the studio (Studio 3, 92 Alder Lane, [CITY]). This demo keeps your request in your own browser; nothing is sent anywhere.' 白色卡片内：星期胶囊按钮 Monday–Saturday；时段胶囊按钮 9:00, 10:30, 13:00, 15:30, 17:00；一个双选项分段控件 'Video call' / 'At the studio'；姓名和邮箱输入框；提交胶囊按钮 'Request this slot'。成功后表单替换为确认信息：CalendarCheck 图标、'You're on the list, {name}!'、'We'd see you {day} at {time} ({place}). In a live site this would reach [PRACTITIONER] — in this demo it's saved locally.'，以及一个 'Change my request' 链接，点击后恢复已填写的表单。
   布局：深叶绿色横幅上居中放置 720px 宽的白色卡片（24px 圆角）。胶囊按钮为 44px；选中胶囊填充叶绿色配白色文字，时段胶囊填充柑橘色配菠菜墨色文字。本地验证：姓名必填，邮箱必须匹配简单模式；错误以字段下方的行内红色文字显示，绝不使用弹窗。将整个请求持久化到以 [BRAND_SLUG] 为键的 localStorage；重新加载时恢复。确认信息为 aria-live='polite'。移动端：卡片保持 20px 侧边内边距；胶囊按钮换行。
   动效：选中胶囊弹至 1.06 并回落（180ms）；确认信息在 240ms 内交叉淡入；分段控件滑块滑动 200ms。在减少动态效果下全部替换为即时变化。
8. **FAQ and footer（常见问题与页脚）** — FAQ 'Fair questions.' 以四个 details/summary 项呈现：'Do you write meal plans or give medical advice?' — 'Neither. We work on food skills and habits — shopping, prep, and rotation. I don't diagnose, treat, or prescribe; for medical questions you'll always be pointed back to your clinician.'；'What happens on a discovery call?' — 'Twenty minutes about your weeknights: what works, what collapses, and whether coaching fits. No pressure and no charge.'；'Do you sell supplements or products?' — 'No. The only things I sell are time, programs, and a very opinionated spice-rack diagram.'；'Virtual or in person?' — 'Both. Coaching happens over video anywhere; pantry visits and classes happen at the studio in [CITY].' 页脚为菠菜墨色配奶油色文字：叶子标志和 [BRAND]，一行 'Food skills, not rules.'，锚点导航（Services, Plate builder, Recipes, About, Book a call），以及说明 'This site is food-and-habits coaching, not medical advice.' 加上可选的 [CREDIT] 链接。
   布局：FAQ 为单列，最大宽度 760px，1px 鼠尾草色分隔线，每项 22px 垂直内边距，以及一个旋转的 ChevronDown。页脚：桌面端两行——品牌块在左，导航在右，说明和 [CREDIT] 在第二行以柔和奶油色显示；移动端堆叠。无社交图标，无新闻订阅表单。
   动效：切换时 160ms 的箭头旋转，无可能裁切文字的高度动画；页脚为静态。

## 资源

- 图片：主视觉食材铺陈图。将 https://media.vibefather.ai/assets/e96d06da-c68d-42e7-9fc9-2ae91f028d0f/hero-produce.webp 下载到 public/images/hero-produce.webp。Alt：'A spread of fresh produce — leafy greens, citrus, and herbs on a white marble table.' 用作主视觉的视觉锚点。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请将这一确切署名记录在 ASSETS.md 中。
- 图片：食谱照片一。将 https://media.vibefather.ai/assets/e96d06da-c68d-42e7-9fc9-2ae91f028d0f/recipe-beans.webp 下载到 public/images/recipe-beans.webp。Alt：'A bowl of white beans with charred lemon halves and herbs.' 用于 Charred Lemon & White Bean Bowl 卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请将这一确切署名记录在 ASSETS.md 中。
- 图片：食谱照片二。将 https://media.vibefather.ai/assets/e96d06da-c68d-42e7-9fc9-2ae91f028d0f/recipe-sheetpan.webp 下载到 public/images/recipe-sheetpan.webp。Alt：'A sheet pan of roasted chicken with plums and red onion.' 用于 Sheet-Pan Harissa Chicken 卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请将这一确切署名记录在 ASSETS.md 中。
- 图片：食谱照片三。将 https://media.vibefather.ai/assets/e96d06da-c68d-42e7-9fc9-2ae91f028d0f/recipe-farro.webp 下载到 public/images/recipe-farro.webp。Alt：'A plate of farro with green peas, feta, and mint.' 用于 Spring Pea & Feta Farro 卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请将这一确切署名记录在 ASSETS.md 中。
- 图片：教练厨房。将 https://media.vibefather.ai/assets/e96d06da-c68d-42e7-9fc9-2ae91f028d0f/studio-kitchen.webp 下载到 public/images/studio-kitchen.webp。Alt：'A bright studio kitchen with jars of grains and a bowl of citrus.' 用于关于区块。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请将这一确切署名记录在 ASSETS.md 中。
- 图片：市集篮。将 https://media.vibefather.ai/assets/e96d06da-c68d-42e7-9fc9-2ae91f028d0f/market-basket.webp 下载到 public/images/market-basket.webp。Alt：'A woven basket filled with greens and citrus on light wood.' 用作教练如何运作条带旁的小方形点缀图。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请将这一确切署名记录在 ASSETS.md 中。
- 图片：完全用代码绘制餐盘构建器：一个内联 SVG 甜甜圈图，由 8 个等分扇区（每个 45 度）组成，中心有一个 120px 的白色圆形，显示 'Your plate · N / 8'，扇区填充取自四个餐盘分组 token，外圈为细鼠尾草色圆环。餐盘不使用任何生成图或图库图片。
- 图标：安装 lucide-react，并且仅使用 Leaf、Sparkles、MessagesSquare、Users、ChefHat、Salad、Drumstick、Wheat、Droplets、Clock、CalendarCheck、Check、RotateCcw、Star、Quote、MapPin、ChevronDown 和 ArrowRight。ISC 许可证。不绘制任何品牌 logo；叶子标志是在 Leaf 字形周围用原创代码绘制的。请在 ASSETS.md 中记录该包和许可证。
- 字体：通过 @fontsource/baloo-2 自托管 Baloo 2 的 600 和 700 字重（OFL-1.1）。请在 ASSETS.md 中记录该包和许可证；不要使用字体 CDN。
- 字体：通过 @fontsource/nunito 自托管 Nunito 的 400、600 和 700 字重（OFL-1.1）。请在 ASSETS.md 中记录该包和许可证；不要使用字体 CDN。

## 禁止事项
- 不得在任何文案、工具提示、替代文本或元数据中陈述或暗示诊断、治疗、治愈、预防、排毒或减重效果。每句话都应保持在食物技能层面，并保留页脚中关于食物与习惯的免责声明。
- 不得提及或暗示真实的营养师、饮食学家、饮食体系或商业项目。[PRACTITIONER]、Welltable Institute、客户评价、食谱、价格和统计数据均为本演示虚构。
- 照片只能展示农产品、菜肴和厨房——图像中不得出现人脸、手、可读的包装、标签或徽标。
- 预约流程仅为本地示例：不提交表单、不调用 API、不发送邮件或使用日历服务、不做分析。仅持久化到 localStorage，并校验恢复的数据。
- 不得使用与真实时钟绑定的日期：使用星期标签和静态示例时段；绝不渲染今天的日期、倒计时，或基于访客时钟的节气日历计算。
- 不得使用后端、服务器代码、数据库、认证或第三方脚本。通过单一构建命令在 dist/ 中生成静态输出。
- 仅通过列出的 Fontsource 包自托管字体；绝不加载 Google Fonts、Adobe Fonts 或任何 CDN 样式表或脚本。
- 生产环境不得包含 source map，不得将 src/ 复制到 dist/，保持 dist/ 在 20 MB 以下，并保持 Vite 的 base 为相对路径。
- 不得使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务或热链接文件；仅使用六张生成的图片和原创的代码绘制 SVG/CSS 艺术。
- 不做 SEO 工作：不写 meta 描述、Open Graph 标签、JSON-LD、站点地图，也不使用堆砌关键词的标题。一个包含 [BRAND] 的普通标题和一个 favicon 就足够了。
- 不得让餐盘构建器出现水平溢出、困住键盘焦点，或以忽略 prefers-reduced-motion 的方式进行动画。
- 不得使用滚动劫持、自定义光标、自动播放音频、页面视差，或超出指定显现、弹簧、弹出和补间动画范围的运动效果。
- 所有文案保持美式英语，并基于 [BRAND] 和 [BRAND_SLUG] 构建品牌派生字符串（存储键、slug、替代文本），以便替换变量值后不会残留默认品牌痕迹。
- 每个内部链接都是文件名或页内锚点，绝不是裸目录；网站必须在 1440×900 和 390×844 下渲染，且控制台零错误。

---
— Prompt by VibeFather · https://vibefather.ai/t/nutritionist-website-with-plate-builder · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
