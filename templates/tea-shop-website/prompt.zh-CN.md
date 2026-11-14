> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 茶叶店网站

完全按照下面的描述构建这个网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的一页式静谧小店，这是位于 [CITY] 的一家散叶茶店，售卖 [SPECIALTY]。暖纸底色，低饱和绿与陶土色，衬线字体语调。六款茶可按类型与咖啡因含量筛选，每款配有风味笔记标签；一个由查询路由驱动的产品页承载冲泡指南与可用的浸泡计时器；品鉴套装与样品订阅为页面收尾。

- 受众：拥有好茶壶与窗边座位的人——[CITY] 的饮茶者，他们先读品鉴笔记再看价格，会把样品套装送给朋友。
- 目标：让访客从好奇走向候选清单：按类型或咖啡因浏览，打开一款茶，运行其浸泡计时器，并将其保存到本地茶架。
- 语调：安静而感官化：蜂蜜、木烟、兰花——风味在先，事实在后，绝不推销。文案从不催促读者。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react + react-dom 18（MIT）、motion（motion.dev）11（MIT）、lucide-react（ISC）、@fontsource/lora、@fontsource/alegreya-sans、@fontsource/spline-sans-mono（OFL）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务器代码、无外部 API。
- 设置：
  - 使用 npm create vite@latest 配合 react-ts 模板搭建脚手架。项目根目录下有两个 HTML 页面：index.html（入口 src/main.tsx）和 tea.html（入口 src/tea.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0, rollupOptions.input { main: 'index.html', tea: 'tea.html' } }。切勿将 src/ 复制到 dist/ 中。
  - Tailwind 3.4 通过 PostCSS 配置，content ['./index.html', './tea.html', './src/**/*.{ts,tsx}']。theme.extend.colors 映射 paper、kraft、ink、olive、clay、clayDeep、stone、rule。
  - src/fonts.ts 导入 @fontsource/lora/400.css、600.css、@fontsource/lora/400-italic.css、@fontsource/alegreya-sans/400.css、500.css、700.css，以及 @fontsource/spline-sans-mono/400.css、500.css。从两个入口文件导入 fonts.ts。
  - src/index.css 中的全局 CSS：body 背景为 paper，带有微妙的暖色纸张纹理（内联 SVG feTurbulence data-URI，不透明度 2.5%）；选中文本为 clay 配 paper；focus-visible 轮廓为 2px clay。
  - src/content.ts 保存所有字符串：teas 数组（slug、name、type 为 green、black、oolong、herbal、white；caffeinated 布尔值；notes 数组含三项；每 100g 价格；steepSeconds、tempC、leafGrams、steeps；image；alt；whyLine）、sets 数组、订阅文案、brewBasics、address、hours。当变量变化时重写此文件。
  - src/lib/brand.ts：brandSlug 来自 [BRAND]；localStorage 键 `${brandSlug}:shelf` 存储茶叶 slug 数组。
  - src/tea.tsx 读取 new URLSearchParams(location.search).get('id')；未知或缺失的 id 渲染第一款茶（Hearth Amber）——绝不出现空白或未找到状态。
  - 冲泡计时器：一个普通 React 组件（setInterval 250ms，精确在 00:00 结束，暂停和重置，通过 SVG stroke-dashoffset 实现细 clay 进度环）。不发出声音、不发送通知，标签页隐藏时干净停止（visibilitychange 暂停计时，而非显示）。
  - src/components/ 中的组件：Header.tsx、Reveal.tsx（Motion whileInView，淡入 + 14px 上移，550ms，80ms 交错）、TeaCard.tsx、FilterBar.tsx、Sets.tsx、BrewBasics.tsx、Subscribe.tsx、Footer.tsx；tea.html 上为 BrewGuide.tsx、SteepTimer.tsx、ShelfButton.tsx。
  - public/favicon.svg：一个 64px 代码绘制的热气茶杯轮廓，clay 色配 paper 底色。构建前从 Assets 下载六张照片到 public/images/；在项目根目录编写 ASSETS.md。
  - dist/ 包含 index.html、tea.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张 webp 图片。保持在 20 MB 以下。

## 变量
- [BRAND] — 店铺名称（默认："Amber & Ash"）。虚构的茶叶店名称。用于字标、标题、brandSlug（localStorage 键）以及每一处提及。绝不使用真实茶叶品牌或茶园名称。
- [CITY] — 城市（默认："Burlington, Vermont"）。店铺所在地。出现在主视觉眉题、订阅行和页脚地址中。可以使用真实城市。
- [SPECIALTY] — 特色产品线（默认："small-lot oolong and black teas"）。店铺的招牌产品。用于主视觉副标题和订阅文案。保持小写且具体。
- [SUB_PRICE] — 订阅价格（默认："$19/month"）。月度茶罐的示例价格字符串，以示例文案形式说明，页面上不进行任何支付。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/tea-shop-website（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值撰写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- 纸色（Paper）`#F4EDDE` — 全站页面底色 — 带有细微颗粒感的暖纸色。
- 牛皮纸色（Kraft）`#EAE0C9` — 交替区块色带、茶卡片、冲泡指南面板。
- 墨色（Ink）`#2F2A22` — 主文本：标题、正文、价格、浅色背景上的按钮。
- 橄榄色（Olive）`#6F7A4F` — 柔和绿色：眉题、类型标签、链接、静止状态的计时环。
- 陶土色（Clay）`#B26840` — 强调色：CTA、运行中的计时环、选中的筛选器、笔记标签边框、焦点环。
- 深陶土色（Clay Deep）`#96532F` — 陶土色的悬停与按下状态。
- 石色（Stone）`#8B8171` — 次要文本：说明文字、冲泡标签、低调的脚注。
- 分隔线色（Rule）`#D9CCB0` — 1px 细线：卡片边框、套装行、页脚分隔线。

### 字体排印
- 展示字体（Display）— 字标、H1、H2、茶名、套装名。Lora 衬线体，句首大写，行高 1.25；风味笔记使用斜体：Lora (OFL)，字重 400/600
- 文本字体（Text）— 正文、按钮（500，0.04em 字距）、说明文字、FAQ 回答：Alegreya Sans (OFL)，字重 400/500/700
- 数字字体（Figures）— 陡峭的计时数字、冲泡数字、价格：Spline Sans Mono (OFL)，字重 400/500

### 布局与动效
- 间距：平静而宽裕：桌面端区块节奏 128px（移动端 80px），容器 1120px，内边距 32px，正文行高 1.7。网格间距 24px；产品页 6/6 分栏，栏间距 56px。
- 圆角：柔和但不圆鼓：卡片和面板 10px，标签和按钮 999px，图片 8px。
- 动效：如蒸汽般缓慢：显现效果在 550ms 内淡入并上移 14px，错开 80ms；没有任何弹跳。
- 动效：筛选时茶网格以 Motion 布局动画在 380ms 内重新排列。
- 动效：一缕细蒸汽——一条 SVG 路径以 4s 循环向上飘移——位于首屏底边；在 prefers-reduced-motion 下为静态卷曲。
- 动效：陡峭的计时环平滑消退（SVG stroke-dashoffset），运行中数字每秒以 4% 不透明度呼吸一次；暂停时两者立即冻结。
- 动效：笔记标签和色块状类型标签在选中时以 220ms 交叉淡入淡出；减少动效模式下所有动画即时完成。
- 图像：一次暖调拍摄：每张照片都是茶——冒着热气的倾倒茶汤、亚麻布或深色木上的干叶、陶壶与碟——在柔和的暖色侧窗光下，琥珀色与陶土色调，浅景深，50-85mm 微距质感。无人物，无可读包装，无标识。

## 页面与区块
### [BRAND] — 按类型分类的茶、套装与每月茶罐（`index.html`）
1. **页眉** — 在 Paper 上吸顶，滚动 12px 后出现 1px Rule 细线。左侧：字标 [BRAND]，Lora 600 20px，Ink。中间导航（桌面端）：Teas、Sets、The Monthly Tin — Alegreya Sans 500 14px，Stone 到 Ink 过渡 180ms，滚动至锚点。右侧：'My shelf' 文本链接，带 Bookmark 图标和来自 localStorage 的实时计数。移动端：字标加汉堡菜单（两条 1.5px Ink 线），打开全屏 Paper 覆盖层，锚点用 Lora 26px。
   布局：单行，1120px 容器，18px 垂直内边距。
   动效：细线在滚动时淡入；覆盖层淡入并上移 12px，240ms。
2. **首屏** — 分栏首屏：左侧 6 列放置 hero-pour.webp（茶正在倒入玻璃杯，蒸汽在窗光中缭绕），4:3 圆角 8px；右侧 6 列，文案垂直居中。眉题 '[BRAND] — TEA SHOP IN [CITY]'，Alegreya Sans 700 12px 大写 0.2em Olive。H1 用 Lora 400 clamp(40px, 5vw, 60px)，Ink：'Slow hours, good leaves.' 副标题用 Alegreya Sans 400 16px Stone，最大 46ch：'[SPECIALTY], weighed by the scoop at the counter and brewed with patience at home. Every tea ships with its brewing card — and its timer is on this page.' CTA 并排：'Shop teas'（clay 填充，paper 文字，999px）和 'See the sets'（幽灵按钮，1px Ink 边框）。CTA 下方一行低调文字，Stone 13px，带 Timer 图标：'Each tea page runs a steep timer while you wait.'
   布局：6/6 分栏；移动端将照片堆叠在文案上方，24px 内边距。
   动效：文案以每条 550ms、间隔 80ms 交错进入；蒸汽缕（一个 SVG 卷曲，4s 循环）在照片底边飘动；照片本身从不移动。
3. **按类型分类的茶** — id='teas'。眉题 'THE SHELF' 和 H2 'Six tins, weighed fresh.' 筛选栏：两组 chip — Type（All、Green、Black、Oolong、Herbal、White）和 Caffeine（Any、Caffeine-free）— 为 999px chip，Kraft 填充，Ink 文字，Olive 边框；激活 chip 反转为 Olive 填充配 paper 文字。六款茶，精确数据：Hearth Amber — oolong，含咖啡因，风味 'honey, toasted grain, orchid'，$14/100g；Meadow Steam — green，含咖啡因，'cut grass, sweet pea, hazelnut'，$12；Rowan Black — black，含咖啡因，'malt, dark honey, woodsmoke'，$11；Roast Moon — oolong，含咖啡因，'charcoal, brown butter, dried fig'，$13；Quiet Bloom — herbal，无咖啡因，'chamomile, honey, apple peel'，$10；Cloud Veil — white，含咖啡因，'melon, fresh hay, spring rain'，$16。每张卡片：该茶的 4:3 圆角 8px 照片，名称 Lora 600 19px，三条风味笔记作为斜体 chip（Kraft 填充，1px clay 边框，Lora 斜体 13px），类型和价格行用 Spline Sans Mono 13px（'$14 / 100 g — oolong'），以及 'View tea' 链接到 ./tea.html?id=…，使用每款茶的 slug。筛选会隐藏不匹配的卡片并显示 'Showing 2 of 6 teas'；一旦有筛选激活，'Clear' 出现。
   布局：3 列网格（平板 2 列，移动 1 列），24px 间距，卡片在 Kraft 上圆角 10px，20px 内边距，1px Rule 边框。
   动效：筛选变化时卡片以 Motion 布局动画 380ms 滑动；卡片在滚动时以 550ms、80ms 交错显现。
4. **品鉴套装** — id='sets'。眉题 'SETS' 和 H2 'Begin anywhere.' 三行平静的条目（不是卡片），每行由 Rule 细线分隔：'First Steeps — three 20 g tins of the gentlest greens and herbals — $24'；'Oolong Hours — two oolongs and a small clay pot — $38'；'Caffeine-Free Evenings — three herbals built for after dinner — $28'。名称 Lora 600 22px，描述 Alegreya Sans 15px Stone，价格 Spline Sans Mono 16px clay。行下方一行低调文字：'Sets are wrapped in the same paper as the tins — no ribbon, no fuss.'
   布局：单列 760px，左对齐行，细线分隔，28px 行内边距。
   动效：行在滚动时以 550ms、80ms 交错显现。
5. **每月茶罐** — id='subscribe'。全宽 Kraft 色带，圆角 10px，带 Olive 的 Package 图标。标题 Lora 600 22px：'The Monthly Tin'。正文 Alegreya Sans 15px Stone，最大 60ch：'One 50 g tin chosen to match the month's weather — darker in November, greener in May — posted with its brewing card. [SUB_PRICE], pause or skip whenever you like.' 然后一行坦诚文字 Stone 13px：'Sample copy for this template — the page takes no payments and stores nothing.' CTA 'See how it works' 滚动回茶区；没有结账。
   布局：居中单列，最大宽度 680px，44px 内边距。
   动效：滚动时以 550ms 显现一次。
6. **冲泡基础** — 眉题 'BREWING BASICS' 和 H2 'Three habits, better tea.' 下的三条简短提示 — 每条带一个 Olive 的 lucide 图标：Scale 'Weigh, don't guess — 3 g per 150 ml is the whole secret'；Thermometer 'Temperature before leaf — boiling water is for black, not for green'；Timer 'One short rinse wakes rolled oolongs — then start counting'。标题 Lora 17px，正文 Alegreya Sans 14px Stone。说明行：'General brewing guidance, offered warmly.'
   布局：3 列网格，24px 间距，无卡片背景 — 只有 Paper 上的图标和文字；移动端堆叠。
   动效：滚动时以 550ms、80ms 交错显现。
7. **页脚** — 1px Rule 细线，然后在 Paper 上三列：字标；'5 Weave Lane, [CITY]' 带 MapPin，'Mon–Sat 10:00–18:00' 带 Clock，'(802) 555-0126' 带 Phone；导航锚点小号重复。底部行 Stone 12px：'Every tea, note and price on this page is an invented example.' 加上可选的 [CREDIT] 链接。
   布局：三列，移动端堆叠，32px 间距。
   动效：无 — 页脚是静止的。

### [BRAND] — 一款茶、其冲泡指南与浸泡计时器（`tea.html`）
1. **产品** — 读取 ?id=；未知或缺失 id 渲染 Hearth Amber。6/6 分栏。左侧：该茶的 4:3 圆角 8px 照片；下方 Stone 13px 说明：'Shot on the shop counter — your tin will be weighed, not staged.' 右列：类型眉题 Olive 大写（'OOLONG — CAFFEINATED' 或 'HERBAL — CAFFEINE-FREE'），茶名 Lora 400 40px Ink，三条风味笔记作为斜体 chip，价格行 Spline Sans Mono '$14 / 100 g'。然后是冲泡指南面板（Kraft，圆角 10px，24px 内边距）：三行带 lucide 图标 — Thermometer 'Temperature — 85°C'；Scale 'Leaf — 3 g per 150 ml'；Timer 'Time — 3:00, up to 3 steeps' — 值来自 content.ts 中每款茶（Hearth Amber 85°C，3:00；greens 75°C，2:30；herbals 100°C，6:00；whites 80°C，4:00；blacks 95°C，3:30；Roast Moon 90°C，3:30）。下方是工作浸泡计时器：大号 mm:ss 数字 Spline Sans Mono 500 56px，一个细 clay 进度环（80px SVG 圆）在运行时逐渐排空，以及三个低调按钮 — Start/Pause（切换标签）、Reset（回到该茶的预设），以及 Stone 12px 的标签 'steeping [name]'。按钮 'Save to my shelf' 将 slug 添加到 `${brandSlug}:shelf` 并显示内联 Check 提示：'Saved on this device — a demo shelf, nothing ordered.'
   布局：6/6 分栏，56px 栏间距；指南和计时器在右侧堆叠；移动端照片优先堆叠。
   动效：运行时数字每秒以 4% 不透明度呼吸一次；进度环平滑排空；Start/Pause 和 Reset 即时生效；保存提示以 240ms 上滑 12px；减少动效时计时器完全可用但外观静止。
2. **相关茶** — 眉题 'ALSO ON THE SHELF' 和三款相关茶（当前之后的下三个 slug，循环）作为紧凑卡片：照片 4:3，名称，风味行，价格，'View tea' 链接到 ./tea.html?id=…。
   布局：3 列网格，24px 间距，与主网格相同的卡片样式。
   动效：滚动时以 550ms、80ms 交错显现。

## 资源

- 图片：为本模板制作的六张暖色调茶主题照片，可随模板一起再分发。构建前，用 curl -L -o 将每张图片下载到 public/images/ 目录。https://media.vibefather.ai/assets/a61dccb9-1f8d-4222-a254-42161ff37c63/hero-pour.webp -> public/images/hero-pour.webp（主视觉图，以及 Hearth Amber 的卡片/产品图；alt 'Amber tea pouring into a glass cup, steam curling through warm window light'）；https://media.vibefather.ai/assets/a61dccb9-1f8d-4222-a254-42161ff37c63/leaf-green.webp -> public/images/leaf-green.webp（Meadow Steam；alt 'Dry green tea leaves scattered on oatmeal linen'）；https://media.vibefather.ai/assets/a61dccb9-1f8d-4222-a254-42161ff37c63/leaf-black.webp -> public/images/leaf-black.webp（Rowan Black；alt 'Twisted black tea leaves on dark walnut wood in warm side light'）；https://media.vibefather.ai/assets/a61dccb9-1f8d-4222-a254-42161ff37c63/leaf-oolong.webp -> public/images/leaf-oolong.webp（Roast Moon；alt 'Rolled oolong tea balls in a small clay dish on linen'）；https://media.vibefather.ai/assets/a61dccb9-1f8d-4222-a254-42161ff37c63/leaf-herbal.webp -> public/images/leaf-herbal.webp（Quiet Bloom；alt 'Dried chamomile flowers on warm linen'）；https://media.vibefather.ai/assets/a61dccb9-1f8d-4222-a254-42161ff37c63/leaf-white.webp -> public/images/leaf-white.webp（Cloud Veil；alt 'Slender white tea needles on a warm ceramic plate'）。在 ASSETS.md 中为每张图片注明：'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.'
- 图标：仅使用 lucide-react：Timer、Thermometer、Scale、Package、Bookmark、Check、MapPin、Clock、Phone、ArrowRight。描边宽度 1.75，尺寸 16-24px，颜色继承。蒸汽细缕和茶杯 favicon 是用代码绘制的 SVG。不使用其他图标集。
- 字体：@fontsource/lora（400、600、400-italic）、@fontsource/alegreya-sans（400、500、700）和 @fontsource/spline-sans-mono（400、500），在 src/fonts.ts 中导入，以便 Vite 将 woff2 文件打包进 dist/。绝不从 CDN 加载字体。

## 不要做
- 不要后端、不要 API、不要表单提交、不要支付：货架只保存到 localStorage，订阅仅以示例文案说明。
- 不要真实茶叶品牌、茶园或进口商；店铺名称、茶名、品鉴笔记和价格均为虚构。
- 不要任何健康声明——文案只停留在感官层面（味道、气味、温度），冲泡卡片绝不承诺功效。
- 浸泡计时器仅为本地工具：无声音、无通知、除可见倒计时外无后台行为。
- 照片只展示茶、茶叶、茶壶和倒茶——不要人脸、不要手、不要可辨认的包装、不要标志。
- 不要日历日期，不要实时时钟：营业时间为固定的示例字符串，订阅文案中的月份仅为示例；网站绝不显示今天的日期。
- 不带查询参数的 tea.html 显示第一款茶，绝不显示空白或未找到状态。
- 一切自托管：字体通过 Fontsource，图标通过 lucide-react，图片下载到 public/images/——不要 CDN 标签，不要分析工具。
- 静态构建：压缩，无 source map，dist/ 中无 src/，一条命令 npm run build，多页面输出，dist/ 中有真实的 tea.html，总体积低于 20 MB。
- 每个内部链接都指向一个文件（./index.html#teas、./tea.html?id=…）；绝不指向裸目录。
- 尊重 prefers-reduced-motion：无蒸汽循环，无呼吸数字；计时器本身保持可用。
- 在 1440×900 和 390×844 下正常工作，控制台零错误；筛选器、计时器按钮和货架保存仅用键盘即可操作，并有可见的陶土色焦点环。
- 除带有 [BRAND] 的普通标题外，不要任何 SEO 机制；网站内绝不提及 VibeFather 或任何真实品牌；所有文案均为虚构的美式英语，存放于 src/content.ts。

---
— Prompt by VibeFather · https://vibefather.ai/t/tea-shop-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
