> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# Gelato Shop 网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为一家小批量意式冰淇淋店打造的单页营销网站：柔和俏皮的品牌识别（奶油色、开心果绿、覆盆子红、黄油黄），搭配粗圆字体和滴落感的 SVG 形状；一面由柔和色块组成的口味墙，配有饮食筛选标签；一个可实时预览 SVG 杯子的“自选装杯”配置器；一条“慢速搅制”展示带；两个门店位置；以及一个客户端餐饮需求构建器。

- 受众：社区意式冰淇淋店、冻酸奶店、甜品店和果昔碗店，以及为这些店铺建站的设计师。
- 目标：先让访客对着口味墙垂涎欲滴，再让他们在杯子构建器里玩到投入，最后引导他们前往门店，或复制一份餐饮需求带走。
- 语调：阳光、健谈、带点傻气——短促有力的句子和温和的双关；俏皮感来自色彩和形状，绝不靠感叹号。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/baloo-2（OFL）、@fontsource/nunito（OFL）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化设置：
  - 使用 npm create vite@latest gelato-shop-website -- --template react-ts 搭建脚手架；将 tailwindcss@3.4、postcss 和 autoprefixer 添加为开发依赖；将 motion、lucide-react、@fontsource/baloo-2 和 @fontsource/nunito 添加为依赖。
  - vite.config.ts：base 设为 './'，build.sourcemap 设为 false，构建输出到 dist/。
  - tailwind.config.js：扩展颜色 cream #FFF6EA、milk #FFFDF9、pistachio #CBE3B6、pistachio-deep #A9C98E、raspberry #F4AFC0、raspberry-deep #E790A4、butter #FFE1A0、cocoa #4A3528、latte #8A7565；fontFamily 中 display 设为 'Baloo 2'，sans 设为 'Nunito'；保留 Tailwind 默认的圆角比例（chips 用 rounded-2xl，panels 用 rounded-3xl，pills 用 rounded-full）。
  - postcss.config.js：tailwindcss + autoprefixer。
  - src/components/Drip.tsx：一个可复用的 SVG 滴落分隔条（一条波浪路径带三个下垂的圆块，viewBox 0 0 1440 60，props 为 fill 和 flip），用于页眉下方、照片框上以及柔和色区块之间；src/components/Blob.tsx：大型绝对定位的柔和色径向渐变光斑，35% 不透明度，置于区块后方，aria-hidden。
  - src/lib/motion.ts 存放共享的动效变体：fadeUp（opacity 0→1，y 24→0，400ms ease-out，60ms 交错延迟）、squish（whileHover scale 1.04，whileTap 0.96，spring stiffness 400 damping 15）、scoopPop（scale 0.6→1 spring）；使用 Motion 的 useReducedMotion 回退为普通的 200ms 不透明度淡入。
  - 将所有面向用户的字符串（品牌、城市、尺寸、十二种口味及其名称/颜色/标签、配料、门店、事实、餐饮文案）保留在 src/content.ts 中；各区块从中读取，以便在一处替换值。
  - index.html：<title>[BRAND] — Gelato in [CITY]</title> 加上一个用代码绘制的 favicon.svg（三个重叠的冰淇淋球圆形，分别为 pistachio、raspberry 和 butter）；不做其他 meta 工作。

## 变量
- [BRAND] — 店铺名称（默认：“Pastella”）。用于页眉、页脚、页面标题、餐饮摘要和电子邮件的虚构名称。
- [CITY] — 城镇（默认：“Alder Bay”）。店铺和餐饮文案所在的城镇（'churned daily in [CITY]'、'two shops in [CITY]'）。
- [SCOOPS] — 每杯最大球数（默认：“3”）。控制杯子构建器中的球数限制、柜台标签以及 'stack up to three scoops' 的措辞（在文案中通过 content.ts 将数字拼写出来）。
- [PRICE_CUP] — 起步杯价（默认：“$6”）。显示在主视觉副行和构建器中作为 Classica 规格价格。
- [CREDIT] — 在页脚保留一个小型 “Template by VibeFather” 链接至 https://vibefather.ai/t/gelato-shop-website（默认：是；删除此行以移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块键控，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 奶油色（Cream）`#FFF6EA` — 所有页面的背景色；页脚背景色。
- 牛奶色（Milk）`#FFFDF9` — SVG 中的杯身、面板填充、标签内表面、输入框。
- 开心果绿（Pistachio）`#CBE3B6` — 主柔和色表面：主视觉照片边框、主视觉色块、激活状态的浅色调。
- 深开心果绿（Pistachio deep）`#A9C98E` — 开心果色表面上的滴落、边框和按下状态。
- 覆盆子粉（Raspberry）`#F4AFC0` — 次柔和色表面：商店面板二、标签胶囊、色块点缀。
- 深覆盆子粉（Raspberry deep）`#E790A4` — 覆盆子色表面上的滴落和边框；主视觉杯子照片上的那一滴。
- 黄油黄（Butter）`#FFE1A0` — 第三柔和色：高亮标签、每个区块一个色块、主视觉风味圆点点缀。
- 可可色（Cocoa）`#4A3528` — 所有文字和轮廓；主按钮为可可色底配奶油色文字。
- 拿铁色（Latte）`#8A7565` — 次要文字：介绍、说明文字、诚实的过敏原提示。

### 字体排印（Typography）
- 展示字体（Display）— 标题、风味名称、价格（粗圆体）：Baloo 2（OFL），字重 600/700/800
- 正文字体（Text）— 正文、标签、标记、输入框（圆体无衬线）：Nunito（OFL），字重 400/600/700

### 布局与动效（Layout & motion）
- 间距（Spacing）：宽敞但有弹性：区块桌面端 py-24（96px）/ 移动端 py-16（64px）；内容 max-w-6xl px-6/px-10；标题下方留 8–16px 呼吸空间；柔和色面板使用 32px 内边距，确保滴落不会挤到文字。
- 圆角（Radius）：处处圆角：面板和照片边框 24px（rounded-3xl），标签、按钮和输入框 16px（rounded-2xl），筛选标签 999px 胶囊；设计中唯一的直线是垂下的 SVG 滴落。
- 动效（Motion）：每个标签、按钮和风味色块悬停时挤压：以弹簧效果缩放至 1.04（stiffness 400，damping 15），whileTap 缩放至 0.96 — 在 src/lib/motion.ts 中实现一次。
- 动效（Motion）：滚动显现：区块和网格项淡入上移（y 24→0，400ms ease-out），通过 Motion 的 whileInView 以 60ms 交错触发，仅触发一次。
- 动效（Motion）：主视觉：杯子照片缓慢上下浮动（y ±6px，6s ease-in-out 循环），两个背景色块以 20s 循环漂移；风味圆点行在加载时依次弹出（间隔 150ms）。
- 动效（Motion）：风味墙筛选：不匹配的色块在 250ms 内动画至 opacity 0.25、grayscale 0.6 和 scale 0.96；匹配的标签保持全彩。
- 动效（Motion）：杯子构建器：每个添加的球弹出（scale 0.6→1 弹簧）；移除的球弹出（200ms）；价格行在任何变化后 80ms 滑入；有两个或更多球时，杯沿下方生长出一条滴落路径（scaleY 0→1，350ms）。
- 动效（Motion）：滴落分隔线闲置：每个分隔线的一个色块缓慢拉伸（scaleY 1→1.15），5s 循环，按区块交错。
- 动效（Motion）：prefers-reduced-motion：所有循环（浮动、色块漂移、滴落闲置）停止，弹簧变为 200ms 透明度淡入淡出，挤压变为仅颜色变化。
- 图像（Imagery）：全程一次工作室拍摄：无缝柔和色背景（开心果绿、覆盆子粉、奶油色、黄油黄）上的意式冰淇淋静物摄影，左前方柔和漫射日光，一个轻柔阴影，糖果柔和色调，高调极简构图，大量空白背景。画面中无文字或标签，无菜单板，无标志，无人物或面孔。六张照片由 VibeFather 生成并下载到 public/images。

## 页面与区块
### [BRAND] — [CITY] 的意式冰淇淋（`index.html`）
1. **页头（Header）** — 牛奶色背景上的吸顶顶栏：左侧是 [BRAND] 字标，使用 Baloo 2 800、26px、可可色，后面跟着一个小三球勺标记（开心果、覆盆子、黄油色圆点）。右侧（桌面端）：锚点链接 'Flavors'、'Build a cup'、'Shops'、'Catering'，使用 Nunito 700 15px 可可色；然后是一个胶囊按钮 'Build a cup'（可可色底、奶油色文字）。移动端：字标 + 按钮 + 一个 lucide menu/x 切换按钮，打开一个牛奶色面板，四个链接纵向堆叠。整个栏以可复用的牛奶色 Drip 分隔线收尾，与下方 hero 重叠（z-10）。
   布局：position sticky top-0 z-40，h-16，px-6/px-10，max-w-6xl mx-auto 内容；drip SVG 绝对定位在底部，宽度 100%，朝下。
   动效：滚动超过 40px 时，栏获得柔和的 10% 可可色底部阴影（200ms）；菜单面板下滑 250ms；链接悬停时挤压。
2. **Hero** — 左侧：一个胶囊标签 'CHURNED DAILY IN [CITY]'（Nunito 700 12px 大写，黄油色底，可可色文字）。标题使用 Baloo 2 800，clamp(2.75rem, 6vw, 4.5rem)，行高 1.05，可可色：'Serious gelato, silly colors.' 副行，Nunito 400 18px，拿铁色，max-w 46ch：'Small-batch gelato in [CITY] — twelve rotating flavors, plant-based options, and a cup you design yourself. Cups from [PRICE_CUP].' CTA：'Build your cup'（可可色胶囊，奶油色文字，lucide arrow-down）→ #build；'See the flavor wall'（描边胶囊，可可色边框）→ #flavors。CTA 下方是一行六个 14px 风味圆点（开心果、覆盆子、黄油、芒果、蓝莓、柠檬，来自 content.ts），链接到 #flavors。右侧：public/images/hero-cup.webp 放在开心果色底面板上的 3:4 rounded-3xl 框架中，一个覆盆子深色的 Drip 悬挂在框架底边，一个柔和色 Blob 在左上角后方。
   布局：12 列网格，py-24：文字列 1–6（self-center），照片面板列 8–12（最大高度 520px，object-cover）。移动端：堆叠，照片在前，高 420px，然后是文字。
   动效：照片以 6s 循环上下浮动 ±6px；blob 漂移 20s；标题、副行、CTA 和风味圆点依次淡入上移（60ms 错开，圆点间隔 150ms）；CTA 悬停时挤压。
3. **风味墙（Flavor wall）** — id=flavors。标题 Baloo 2 800 clamp(2rem,4vw,3rem) 可可色：'The flavor wall.' 介绍 Nunito 拿铁色：'Twelve flavors chalked up every morning — swirls, sorbets and one very stubborn fudge.' 筛选行四个胶囊（Nunito 700 14px）：'All'、'Vegan'、'Dairy-free'、'Nut-free' — 激活胶囊 = 可可色底/奶油色文字，未激活 = 牛奶色底/可可色边框。墙：十二个色块芯片，4×3 网格（移动端 2 列），每个芯片填充其来自 content.ts 的风味颜色：风味名使用 Baloo 2 700 20px 可可色，芯片底部有一条同色系更深色调的 Drip，以及标签胶囊（牛奶色 80% 不透明度，可可色 11px）：Pistachio Cream —；Raspberry Sorbet — vegan, dairy-free, nut-free；Stracciatella — nut-free；Dark Chocolate Fudge — vegan, dairy-free；Salted Caramel — nut-free；Mango Sorbet — vegan, dairy-free, nut-free；Matcha White —；Blueberry Oat — vegan, dairy-free, nut-free；Lemon Basil Sorbet — vegan, dairy-free, nut-free；Hazelnut Crunch —；Coconut Vanilla — vegan, dairy-free；Coffee Toffee — nut-free。网格下方，Nunito 13px 拿铁色：'Tags describe the recipe, not a certified allergen statement — always ask in shop.'
   布局：max-w-6xl 网格 gap-6；芯片宽高比约 4:5，内边距 24px，rounded-3xl。
   动效：芯片滚动时淡入上移，60ms 错开；悬停挤压使芯片上移 2px；筛选时非匹配芯片动画至 opacity 0.25 + grayscale 0.6 + scale 0.96（250ms），并停止接收指针事件。
4. **慢搅（Churned slow）** — 标题：'Churned slow, served soft.' 一行三张照片放在牛奶色框架上，带有俏皮的倾斜：gelato-pan.webp（rotate -2deg）、scoop-trio.webp（rotate 1.5deg）、waffle-cones.webp（rotate -1deg），每张 rounded-3xl，框架下方有一个 Drip。事实行三条短句，Nunito 600 可可色，Baloo 700 引导词：'30% less air — churned slow and dense'、'20 minutes — milk travels from the valley dairies to the churn'、'Every Friday — one new flavor gets chalked onto the wall'。
   布局：py-24；照片行三张（每张约 4 列，高度 260px，object-cover），倾斜交替；事实行是 3 列网格，间距 48px，与照片间隔 48px。
   动效：照片错开淡入上移；悬停时每个倾斜拉直到 0deg（300ms）并挤压；事实在照片之后淡入上移。
5. **制作一杯（Build a cup）** — id=build。标题：'Build your cup.' 介绍：'Pick a size, stack your scoops, dress it up — we will make exactly this at the counter.' 左侧：实时 SVG 杯子（几何见布局），下方是价格行，Baloo 2 700 24px 可可色，例如 '[PRICE_CUP] · Classica · 3 scoops · hot fudge'，以及两个胶囊按钮：'Save my cup'（可可色）和 'Reset'（描边）。保存将选择写入 localStorage 键 'savedCup'，并弹出一个内联芯片 'Saved! Show this at the counter.'（黄油色底）。右侧，三个步骤间隔 24px：步骤 1 'SIZE' — 两个芯片，'Piccolo — 1 scoop — $5' 和 'Classica — up to [SCOOPS] scoops — [PRICE_CUP]'。步骤 2 'SCOOPS' — 十二种风味作为带名称的小色块芯片；点击向杯子添加一勺该颜色，直到尺寸上限（Piccolo 1，Classica [SCOOPS]）；一个小计数徽章显示每种在杯中有多少；点击 SVG 中的一勺将其移除。步骤 3 'TOPPINGS' — 四个多选胶囊：'Rainbow sprinkles'、'Pistachio crumble'、'Hot fudge'、'Fresh berries'（每个 +$1，反映在价格行中）。配料下方，berry-toppings.webp 作为一个小 1:1 160px rounded-2xl 照片芯片，倾斜 -2deg。
   布局：12 列网格：吸顶杯子列 1–5（self-start），步骤列 7–12。杯子 SVG：viewBox 0 0 200 260 — 杯身路径 'M40 100 L52 220 Q54 236 70 236 L130 236 Q146 236 148 220 L160 100 Z' 填充牛奶色，描边可可色 6px；边缘线从 34,100 到 166,100；勺是 r=34 的圆，x=100，堆叠在 y=96、62 和 28（底部勺在前）；每个勺填充 = 风味颜色，描边可可色 5px；配料渲染在顶部勺上的固定常量位置（sprinkles：八个 8×3 旋转矩形；fudge：三个小滴弧；berries：三个 6px 圆，颜色 #B85C74；crumble：七个 3px 可可色点）；有 2+ 勺时，边缘下方生长出一条滴落路径。移动端：杯子在前（240px 宽，不吸顶），然后是步骤。
   动效：勺弹入（scale 0.6→1 弹簧）和弹出（200ms）；第二勺落下时滴落生长 scaleY 0→1（350ms）；价格行在任何变化后 80ms 上滑；芯片和胶囊挤压；保存芯片弹入并在 4s 后自动淡出。
6. **门店（Shops）** — 标题：'Two shops in [CITY].' 两个 rounded-3xl 面板并排，每个底边有一个 Drip：面板一在开心果色底上 — lucide map-pin + 'Old Mill Shop'、'14 Ropewalk Lane, Old Mill'、时钟图标 + 'Mon–Thu 12:00–21:00 · Fri–Sun 11:00–23:00'，行 'Window seats, and the dog bowl is always full.' 面板二在覆盆子色底上 — map-pin + 'Pier Two Shop'、'2b Ferry Slip, Old Harbour'、'Mon–Thu 13:00–21:00 · Fri–Sun 11:00–23:00'，行 'The sunset line forms at the window around six.' 文字全部可可色，Nunito；店名 Baloo 2 700 24px。
   布局：两个面板在 2 列网格中（移动端堆叠），内边距 32px，drip 使用 pistachio-deep 和 raspberry-deep。
   动效：面板错开 120ms 淡入上移；悬停挤压上移 2px；面板悬停时图标轻推 2px。
7. **餐饮（Catering）** — 标题：'We bring the cart.' 介绍：'Cups, cones and a churn cart for weddings, launches and school fairs across [CITY]. Tell us the shape of your party:' 牛奶色 rounded-3xl 面板上的控件：一个姓名输入框（Nunito，rounded-2xl，牛奶色底，可可色边框，占位符 'Your name'）；活动规模芯片 '15 cups'、'30 cups'、'50 cups'；风味选择 — 'choose up to three' — 与墙上相同的风味芯片；一个可可色胶囊按钮 'Copy request'，写入剪贴板：'Hi [BRAND]! I'm {name} — {size} for my event, hoping for {flavors}.' 并显示一个内联芯片 'Copied — paste it into an email to hello@pastella.shop'（黄油色底）。面板上方，party-cups.webp 作为全宽 16:9 rounded-3xl 横幅，带一个 Drip。不会提交到任何地方。
   布局：横幅（高 320px，object-cover）然后是面板 max-w-4xl mx-auto；控件堆叠，间距 24px，风味芯片换行。
   动效：横幅不使用视差（平静）；面板淡入上移；芯片挤压；复制芯片弹入；如果剪贴板 API 不可用，剪贴板写入回退为选中摘要文本 — 绝不发起网络请求。
8. **页脚（Footer）** — 奶油色底，顶部由牛奶色 Drip 分隔线开启。左侧：[BRAND] 字标带三球勺标记，以及一行 Nunito 拿铁色：'Small-batch gelato · [CITY] · hello@pastella.shop'（邮箱来自 content.ts，随 [BRAND] 变化）。右侧：锚点链接 'Flavors · Build a cup · Shops · Catering'，可可色。可选的 [CREDIT] 链接，拿铁色。没有日期，没有社交图标，没有 newsletter。
   布局：py-12，max-w-6xl，flex 行在移动端换行为列，gap 24px。
   动效：无。

## 资源（Assets）
- 图片（image）：将 https://media.vibefather.ai/assets/714eafea-4b0a-4b42-a617-0698f30b3d30/hero-cup.webp 下载到 public/images/hero-cup.webp。替代文本（Alt）：'A paper cup with pistachio, raspberry and cream gelato scoops on a pastel green backdrop.' 用作首屏主视觉照片（3:4）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片（image）：将 https://media.vibefather.ai/assets/714eafea-4b0a-4b42-a617-0698f30b3d30/gelato-pan.webp 下载到 public/images/gelato-pan.webp。替代文本（Alt）：'A metal pan of swirled raspberry sorbet with a spatula.' 用于 'Churned slow' 区块（4:3）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片（image）：将 https://media.vibefather.ai/assets/714eafea-4b0a-4b42-a617-0698f30b3d30/scoop-trio.webp 下载到 public/images/scoop-trio.webp。替代文本（Alt）：'Three gelato scoops — pistachio, vanilla and dark chocolate — in a row.' 用于 'Churned slow' 区块（1:1）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片（image）：将 https://media.vibefather.ai/assets/714eafea-4b0a-4b42-a617-0698f30b3d30/waffle-cones.webp 下载到 public/images/waffle-cones.webp。替代文本（Alt）：'A stack of crisp waffle cones on a pink pastel backdrop.' 用于 'Churned slow' 区块（1:1）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片（image）：将 https://media.vibefather.ai/assets/714eafea-4b0a-4b42-a617-0698f30b3d30/berry-toppings.webp 下载到 public/images/berry-toppings.webp。替代文本（Alt）：'Small bowls of sprinkles, chopped pistachios and fresh berries.' 用于 'Build a cup' 区块中配料步骤旁（1:1）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片（image）：将 https://media.vibefather.ai/assets/714eafea-4b0a-4b42-a617-0698f30b3d30/party-cups.webp 下载到 public/images/party-cups.webp。替代文本（Alt）：'Two rows of small gelato cups in pastel colors on a long table.' 用作餐饮服务横幅（catering banner，16:9）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图标（icon）：lucide-react（ISC）通过 npm 引入——首屏 CTA 中的 arrow-down，店铺面板中的 map-pin 和 clock，已保存杯子与已复制请求标签中的 check，移动端页头中的 menu 和 x。不使用其他图标：不用 emoji，不用食物图标，不用 logo 标记。
- 字体（font）：@fontsource/baloo-2（OFL，字重 600、700、800）和 @fontsource/nunito（OFL，字重 400、600、700），在 src/main.tsx 中导入；绝不从 fonts.googleapis.com 或任何 CDN 加载。在项目根目录的 ASSETS.md 中列出这两个字体家族和全部六张照片：路径、来源、生成器或作者、许可证。

## 禁止事项
- 无后端、无 API、无分析、无支付或订购：杯子构建器仅持久化到 localStorage，餐饮服务部分仅将摘要复制到剪贴板——任何表单都不会提交到任何地方。
- 无任何 CDN：字体通过 Fontsource 包提供，图标来自 lucide-react，照片来自 public/images；绝不热链接，绝不使用 Unsplash/Pexels/Pixabay 或占位图服务。
- 生产构建：单命令、压缩、无 source map、输出中无 src/、相对路径（Vite base './'）；通过将每张照片压缩为 ≤ 350 KB WebP，保持 dist/ 在 20 MB 以下。
- 仅单页锚点导航；必须在 1440×900 和 390×844 下干净渲染，零控制台错误，并尊重 prefers-reduced-motion（bob、drift 和 drip 循环停止；springs 变为 fades）。
- 无真实 gelaterias、连锁店或其品牌：店铺、口味、街道和位置均为虚构，[BRAND] 用于所有出现名称的地方。
- 饮食标签仅为描述性示例文案——绝非过敏原认证或保证；口味墙下方的诚实说明必须保留。
- 照片不包含可读文字、标签、菜单板、标志或人物和面孔；如果生成的图像出现文字，请替换。
- 任何地方无真实时钟日期：'chalked up every morning' 和 'every Friday' 是静态示例文案；无发布日期、无 'Est.' 年份、UI 中无 today()。
- 保持粉彩方向锁定：奶油底色配 pistachio、raspberry 和 butter 粉彩及 cocoa 文字；无深色模式、无霓虹渐变、无 glassmorphism；drippy 形状为绘制的 SVG 路径，绝不用栅格图像。
- 所有文案、标签、示例数据和 alt 文本均为美式英语，位于 src/content.ts；当 [BRAND]、[CITY]、[SCOOPS] 或 [PRICE_CUP] 更改时，重写口味名称、店铺名称、营业时间和拼写出的 scoop 数量以适配新店铺，而不是将 gelato 文案留在另一品牌下。
- 在项目根目录的 ASSETS.md 中列出每个第三方文件（两个 Fontsource 家族、lucide 图标、六张照片）：路径、来源、许可证。

---
— Prompt by VibeFather · https://vibefather.ai/t/gelato-shop-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
