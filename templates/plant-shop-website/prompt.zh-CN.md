> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 植物商店网站

完全按照下面的描述构建这个网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一个温暖的单页商店，这是位于 [CITY] 的一家植物店，货架上摆着六种室内植物。阳光植物摄影、可筛选的植物网格（光照、养护、宠物安全）、一个“找到你的植物”测验，以及一个通过查询路由的产品页面，包含养护卡片、花盆搭配和本地心愿单。页面末尾是一则安静的亲手配送说明，范围在 [DELIVERY_RADIUS] 内。

- 受众：[CITY] 的公寓园丁和初次养植物的人——尤其是需要知道什么可以安全带回家的猫狗主人。
- 目标：为访客匹配一株能在其窗户环境和宠物周围存活的植物，然后引导他们前往产品页面和本地心愿单。
- 语气：友好的邻里专家：温暖、具体，带一点园艺幽默。绝不为了炫耀而使用植物学拉丁名，绝不说教。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react + react-dom 18（MIT）、motion（motion.dev）11（MIT）、lucide-react（ISC）、@fontsource/baloo-2、@fontsource/nunito（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 使用 react-ts 模板通过 npm create vite@latest 搭建脚手架。项目根目录下有两个 HTML 页面：index.html（入口 src/main.tsx）和 plant.html（入口 src/plant.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist'，sourcemap false，assetsInlineLimit 0，rollupOptions.input { main: 'index.html'，plant: 'plant.html' } }。切勿将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html'，'./plant.html'，'./src/**/*.{ts,tsx}']。theme.extend.colors 映射 cream、white、leaf、leafDeep、clay、claySoft、bark、ink、rule。
  - src/fonts.ts 导入 @fontsource/baloo-2/600.css、700.css 和 @fontsource/nunito/400.css、600.css、700.css。从两个入口导入 fonts.ts。
  - src/index.css 中的全局 CSS：body 背景为 cream；选中文本为 leaf 色配 cream 色；focus-visible 轮廓为 2px clay；按设计规范所有元素使用圆角。
  - src/content.ts 保存所有字符串：plants 数组（slug、name、latin? 可选仅常用名、light bright、medium、low；care easy、moderate；petSafe 布尔值；price；image；alt；养护卡片文案；花盆搭配；用于测验的 whyLine）、quizSteps、careGuides、deliveryNote、address、hours。当变量变化时重写此文件。
  - src/lib/brand.ts：brandSlug 来自 [BRAND]；localStorage 键 `${brandSlug}:wishlist` 存储植物 slug 数组。
  - src/plant.tsx 读取 new URLSearchParams(location.search).get('id')；未知或缺失的 id 渲染第一个植物（monstera）——绝不出现空状态或未找到状态。
  - src/components/ 中的组件：Header.tsx、Reveal.tsx（Motion whileInView，淡入 + 16px 上移，450ms，70ms 交错）、PlantCard.tsx、FilterBar.tsx、Quiz.tsx、CareGuides.tsx、DeliveryNote.tsx、Footer.tsx；在 plant.html 上使用 CareCard.tsx、PotPairing.tsx、WishlistButton.tsx。
  - public/favicon.svg：一个 64px 代码绘制的单个陶土花盆，配两个 leaf 绿色的叶片形状。构建前将六张照片从 Assets 下载到 public/images/；在项目根目录写入 ASSETS.md。
  - dist/ 包含 index.html、plant.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张 webp 图片。保持在 20 MB 以下。

## 变量
- [BRAND] — 店铺名称（默认：“Fern & Forth”）。虚构的植物店名称。用于字标、标题、brandSlug（localStorage 键）以及每一处提及。绝不使用真实的花园连锁店或配送品牌。
- [CITY] — 城市（默认：“Savannah, Georgia”）。店铺所在地。出现在主视觉眉题、配送说明和页脚地址中。可以使用真实城市。
- [DELIVERY_RADIUS] — 配送半径（默认：“15 miles”）。店铺人工配送的最远距离。用于主视觉副标题和底部的配送说明。
- [SIGNER] — 店铺留言署名（默认：“Maya Okonkwo”）。虚构的店主，在配送说明上署名——'founder & waterer-in-chief'。无需照片即可增添人情味。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/plant-shop-website（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- 奶油色（Cream）`#FBF4E4` — 全站页面底色 — 温暖的奶油色，如阳光洒过。
- 白色（White）`#FFFFFF` — 卡片、测验面板、养护卡片 — 干净但在奶油色衬托下仍显温暖。
- 叶绿（Leaf）`#2F5D3E` — 主绿色：标题、按钮、链接、心愿单上的实心心形。
- 深叶绿（Leaf Deep）`#234931` — 绿色的悬停与按下状态。
- 陶土色（Clay）`#C4704B` — 赤陶色点缀：价格、宠物安全爪印徽章、测验进度、焦点环、标签芯片。
- 柔陶色（Clay Soft）`#F2E0D2` — 芯片与徽章填充、配送说明条带、选中的筛选状态。
- 树皮色（Bark）`#6D5F4E` — 次要文本：眉题、说明文字、养护指南正文。
- 墨色（Ink）`#2C2A24` — 浅色背景上的主要文本。
- 分隔线（Rule）`#E8DEC9` — 1px 细线：卡片边框、页脚分隔线、筛选下划线。

### 字体排印
- 展示字体 — 品牌字标、H1、H2、植物名称、测验问题。Baloo 2，圆润厚实，句首大写，行高 1.15：Baloo 2（OFL），字重 600/700
- 正文字体 — 正文、养护说明、按钮（标签用 600）、说明文字：Nunito（OFL），字重 400/600/700

### 布局与动效
- 间距：友好而通透：桌面端区块节奏 104px（移动端 64px），容器 1200px，侧边内边距 28px。网格间距 24px；产品页 6/6 分栏，栏间距 48px。
- 圆角：像店铺一样圆润：卡片和测验面板 20px，芯片、按钮和徽章 999px，图片 16px。
- 动效：轻柔，绝不快速：显现效果为淡入并上移 16px，时长 450ms，错开 70ms；移动端缩短至 350ms。
- 动效：筛选时网格以 Motion 布局动画在 320ms 内重新排列，让植物滑行而非跳跃。
- 动效：测验步骤以 320ms 交叉淡入并伴随 12px 的小幅滑动；结果卡片以柔和弹簧（刚度 200，阻尼 22）上移 16px。
- 动效：保存时心愿单心形弹跳一次（缩放 1 到 1.2 再到 1，300ms）；花盆搭配选择以相同弹簧效果让价格弹跳。
- 动效：prefers-reduced-motion：所有动画变为即时状态切换。
- 图像：一次阳光拍摄：每张照片都是明亮柔和窗光下的活体植物，置于无釉赤陶（或浅色木质）花盆中，奶油色墙壁，柔和的叶影，浅色木地板和搁架。50mm 平视，温暖而通透。无人物，无可读植物标签，无标识。

## 页面与区块
### [BRAND] — 植物、查找测验、养护与配送（`index.html`）
1. **页眉** — 奶油色（Cream）上的粘性页眉，滚动 12px 后出现 1px 分隔细线（Rule hairline）。左侧：字标 [BRAND]，使用 Baloo 2 700 22px、叶绿色（Leaf），名称前有一个小的陶土花盆图形（代码绘制的 SVG，20px）。中间导航（桌面端）：Plants、Find a plant、Care — Nunito 600 14px，树皮色（Bark）到叶绿色（Leaf）150ms 过渡，滚动至锚点。右侧：'My plant list' 文字链接，带心形图标和来自 localStorage 的实时计数。移动端：字标加汉堡菜单（两条 2px 叶绿色线条），打开全屏奶油色（Cream）覆盖层，锚点使用 Baloo 2 26px。
   布局：单行，1200px 容器，16px 垂直内边距。
   动效：细线在滚动时淡入；覆盖层淡入并上移 12px，220ms；心愿单计数变化时弹跳。
2. **首屏** — 分栏首屏：右侧 7 列放置 hero-monstera.webp，边缘延伸至视口右边缘（左侧圆角 24px），龟背竹被晨间窗光照亮。左侧 5 列，文案垂直居中：眉题 '[BRAND] — PLANT SHOP IN [CITY]'，Nunito 700 12px 大写 0.22em 黏土色（Clay）。H1 使用 Baloo 2 700 clamp(40px, 5.5vw, 64px)、墨色（Ink）：'Plants that like your window.' 副标题使用 Nunito 400 17px 树皮色（Bark），最大 44ch：'Six easy houseplants matched to your light, your schedule and your pets. Hand-delivered within [DELIVERY_RADIUS] of the shop.' CTA 堆叠：'Shop plants'（叶绿色填充、奶油色文字、999px）和 'Find my plant — 1 min'（幽灵按钮、1.5px 叶绿色边框）。下方，一行安静的信任文案，树皮色（Bark）13px，带 PawPrint 图标：'Every plant page tells you if it is pet-safe.'
   布局：5/7 分栏；桌面端图片向右出血。移动端：图片在上，4:3，文案在下，24px 内边距。
   动效：文案以 450ms 每条、间隔 70ms 交错进入；照片从 1.03 缩放至 1.0，700ms，仅一次。
3. **查找你的植物测验** — 白色面板（圆角 24px，id='find'），位于眉题 'FIND MY PLANT' 和 H2 'One minute to the right plant.' 下方。左侧栏文案使用树皮色（Bark）：'Three questions — answer for the window, not for ambition.' 三个步骤，一次一个。步骤 1 'How is the light?' — 三张卡片带 lucide 图标：Sun 'Bright — right by a window'、CloudSun 'Medium — a bright room, off the glass'、Moon 'Low — north-facing or shady'。步骤 2 'Do pets share the room?' — 'Yes — they chew things' 带 PawPrint、'No — plants are my only leaf-eaters'。步骤 3 'How is your memory?' — 'Water me weekly' 带 Droplets、'Remind me... eventually' 带 BellOff。确定性评分：从六种植物开始，剔除任何在 petSafe 上未通过 pets=yes 的，然后未通过光照的，然后未通过关注度的（calathea 和 fig 需要 'weekly'）；其余按价格升序排名并取第一个；平局按 slug 字母顺序打破。结果卡片：植物照片 4:3，'Your plant: [name]' 使用 Baloo 2 24px，来自 content.ts 的原因行（例如 'Forgiving, pet-safe and happy in medium light — the parlor palm has survived worse than us.'），价格使用黏土色（Clay），以及两个链接：'View the [name]' 打开 ./plant.html?id=parlor-palm，和 'Start over'。
   布局：面板内 5/7 分栏，32px 内边距，选项卡片 3 列网格，圆角 16px。
   动效：步骤交叉淡入并滑动 12px，320ms；3 段黏土色（Clay）进度条填充；结果以柔和弹簧上移 16px。
4. **植物网格** — id='plants'。眉题 'ON THE SHELF' 和 H2 'Six plants, no guesswork.' 下方筛选栏，三组 999px 胶囊（黏土柔和色（Clay Soft）填充、树皮色（Bark）文字；激活胶囊：叶绿色（Leaf）填充、奶油色（Cream）文字）：光照（Any、Bright、Medium、Low）、养护（Any、Easy、Moderate），以及一个带 PawPrint 的宠物安全切换胶囊（'Pet-safe only'）。六种植物，精确数据：Monstera — 明亮、简单、非宠物安全、$42；Fiddle-Leaf Fig — 明亮、中等、非宠物安全、$56；Snake Plant — 低光、简单、非宠物安全、$34；Calathea Orbifolia — 中等、中等、宠物安全、$38；Parlor Palm — 中等、简单、宠物安全、$28；Watermelon Peperomia — 明亮、简单、宠物安全、$24。每张卡片：照片 4:3 圆角 16px，名称使用 Baloo 2 18px，光照胶囊和养护胶囊（12px），宠物安全时显示黏土色 PawPrint 徽章，价格使用 Nunito 700 黏土色（Clay），以及 'View' 链接到 ./plant.html?id=…，使用每种植物的 slug。筛选隐藏不匹配的卡片并显示 'Showing 2 of 6 plants'；一旦筛选激活则出现 'Clear'。网格下方一行安静的树皮色（Bark）14px 文字：'More on the bench this week — spider plant and pothos, in store only.'
   布局：3 列网格（平板 2 列，移动 1 列），24px 间隙，卡片在白色（White）上圆角 20px，18px 内边距和 1px 分隔线（Rule）边框。
   动效：筛选变化时植物以 Motion 布局动画 320ms 滑动；卡片滚动时以 450ms、70ms 交错显现。
5. **养护指南** — 三张养护卡片在奶油色（Cream）上排成一行，每张有一个叶绿色（Leaf）的 lucide 图标，位于黏土柔和色（Clay Soft）圆圈内：Sprout — 'Water less in winter' — 'Growth slows, so does thirst. Check the top inch of soil before every pour.'；Droplets — 'Repot when roots circle' — 'If roots peek from the drainage hole in spring, go one pot size up — no jumps.'；Wind — 'Dust the leaves monthly' — 'A damp cloth on the leaves is half the fertilizer your plant will ever need.' 标题使用 Baloo 2 17px，正文使用 Nunito 14px 树皮色（Bark），行下方一行说明文字：'General guidance from our bench, not botanical law.'
   布局：3 列网格，24px 间隙，卡片在白色（White）上圆角 20px，24px 内边距；移动端堆叠。
   动效：卡片滚动时以 450ms、70ms 交错显现。
6. **配送说明** — 一条安静的全宽色带，黏土柔和色（Clay Soft），圆角 24px，带叶绿色（Leaf）的 Bike 图标。一行 Nunito 15px 墨色（Ink），最大 62ch：'We hand-deliver within [DELIVERY_RADIUS] of the shop, Tuesday to Saturday, free over $60 — every plant rides seat-belted in the passenger seat and leaves with its own care card.' 署名使用 Baloo 2 16px 叶绿色（Leaf）：'— [SIGNER], [BRAND]'。下方，一行小的诚实文字，树皮色（Bark）12px：'This is a template demo — nothing is ordered or delivered.'
   布局：居中单列，最大宽度 720px，40px 内边距。
   动效：滚动时以 450ms 显现一次。
7. **页脚** — 1px 分隔细线（Rule hairline），然后在奶油色（Cream）上三列：字标带花盆图形；'18 Mossing Lane, [CITY]' 带 MapPin、'Tue–Sat 9:00–18:00, Sun 10:00–16:00' 带 Clock、'(912) 555-0164' 带 Phone；导航锚点小号重复。底部行树皮色（Bark）12px：'Every plant, price and promise on this page is an invented example.' 加上可选的 [CREDIT] 链接。
   布局：三列，移动端堆叠，32px 间隙。
   动效：无 — 页脚是静止的。

### [BRAND] — 一种植物、其养护卡和花盆搭配（`plant.html`）
1. **产品** — 读取 ?id=；未知或缺失 id 渲染龟背竹。6/6 分栏：左侧，植物照片 4:3 圆角 24px 在白色（White）上，带 1px 分隔线（Rule）边框；下方说明文字树皮色（Bark）13px：'Photographed on the shop bench — your plant will have its own opinions.' 右列：光照和养护眉题使用黏土色（Clay）大写，植物名称使用 Baloo 2 700 36px 墨色（Ink），价格使用 Nunito 700 20px 黏土色（Clay），然后是养护卡 — 一个白色（White）圆角 20px 面板，三行，每行一个叶绿色（Leaf）的 lucide 图标加上来自 content.ts 的标签和值：Sun 'Light — Bright indirect, near an east window'；Droplets 'Water — Every 7–10 days, top inch dry first'；Droplet 'Humidity — Average home humidity is fine'。宠物安全状态作为徽章：黏土色 PawPrint 带 'Pet-safe — chewable but not chosen' 当为真时，或树皮色（Bark）'Keep away from chewers — not pet-safe' 当为假时。然后 'Pair it with a pot' — 两个花盆选项作为可选行（激活时叶绿色（Leaf）边框）：'Terracotta, 6 in — +$14'、'Glazed sage, 6 in — +$18'；运行总计显示在按钮上：'Add to my plant list — $56'。按下它将 slug 添加到 `${brandSlug}:wishlist` 并显示带 Check 的内联注释：'Saved on this device — a demo list, nothing ordered.'
   布局：6/6 分栏，48px 间距；移动端堆叠，照片在前。
   动效：花盆选择以柔和弹簧弹跳价格（刚度 200，阻尼 22）；页眉中的心形弹跳；注释上滑 12px，240ms。
2. **相关植物** — 眉题 'ALSO HAPPY IN MOST HOMES' 和三种相关植物（当前之后的下三个 slug，循环）作为紧凑卡片：照片 4:3、名称、价格、'View' 链接到 ./plant.html?id=…。
   布局：3 列网格，24px 间隙，与主网格相同的卡片样式。
   动效：滚动时以 450ms、70ms 交错显现。

## 资源（Assets）
- 图片（image）：为本模板制作的六张阳光下的植物照片，可随模板一起再分发。构建前，用 curl -L -o 将每张图片下载到 public/images/ 目录。https://media.vibefather.ai/assets/dac013c1-6154-4a3c-908e-5bc13ae3c0df/hero-monstera.webp -> public/images/hero-monstera.webp（用于 hero 区以及龟背竹的卡片/产品照片；alt 为 'A large monstera in a terracotta pot beside a bright window, leaf shadows on a cream wall'）；https://media.vibefather.ai/assets/dac013c1-6154-4a3c-908e-5bc13ae3c0df/plant-fig.webp -> public/images/plant-fig.webp（琴叶榕；alt 为 'A tall fiddle-leaf fig filling a bright corner'）；https://media.vibefather.ai/assets/dac013c1-6154-4a3c-908e-5bc13ae3c0df/plant-snake.webp -> public/images/plant-snake.webp（虎尾兰；alt 为 'A snake plant in a terracotta pot on a wooden stool in a stripe of window light'）；https://media.vibefather.ai/assets/dac013c1-6154-4a3c-908e-5bc13ae3c0df/plant-calathea.webp -> public/images/plant-calathea.webp（肖竹芋；alt 为 'A round-leaved striped calathea in dappled window light'）；https://media.vibefather.ai/assets/dac013c1-6154-4a3c-908e-5bc13ae3c0df/plant-palm.webp -> public/images/plant-palm.webp（袖珍椰子；alt 为 'A feathery parlor palm on a wooden shelf'）；https://media.vibefather.ai/assets/dac013c1-6154-4a3c-908e-5bc13ae3c0df/plant-peperomia.webp -> public/images/plant-peperomia.webp（西瓜皮椒草；alt 为 'A small striped-leaf peperomia in a clay pot on a windowsill'）。在 ASSETS.md 中为每张图片注明：'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.'
- 图标（icon）：仅使用 lucide-react：Sun、CloudSun、Moon、PawPrint、Droplets、Droplet、BellOff、Sprout、Wind、Bike、Heart、Check、MapPin、Clock、Phone、ArrowRight。描边宽度为 2，尺寸为 16-24px，颜色继承。字标中的花盆图形和 favicon 是用代码绘制的 SVG。不使用其他图标集。
- 字体（font）：@fontsource/baloo-2（600、700）和 @fontsource/nunito（400、600、700），在 src/fonts.ts 中导入，以便 Vite 将 woff2 文件打包进 dist/。切勿从 CDN 加载字体。

## 不要做
- 不要后端、不要 API、不要表单提交、不要下单：购买和心愿单操作只保存到 localStorage，文案要说明这是演示列表。
- 不要真实的植物商店、配送品牌或植物营养品牌；店名、植物名称和价格都是虚构的。
- 养护建议保持为通用示例指导——不做植物学保证，不诊断植物问题，不宣称农药或肥料功效。
- 照片只展示盆栽植物和店铺细节——不出现人物，不出现可读的植物标签，不出现 logo。
- 不出现日历日期，不出现实时时钟：配送日固定为周二至周六的模式，营业时间固定为示例字符串；网站永远不显示今天的日期。
- plant.html 不带查询参数时显示第一株植物，绝不出现空状态或未找到状态。
- 一切自托管：字体通过 Fontsource，图标通过 lucide-react，图片下载到 public/images/——不用 CDN 标签，不用分析工具。
- 静态构建：压缩，不生成 source map，dist/ 中不含 src/，一条命令 npm run build，多页面输出，dist/ 中有真实的 plant.html，总体积小于 20 MB。
- 每个内部链接都指向一个文件（./index.html#plants、./plant.html?id=…）；绝不指向裸目录。
- 尊重 prefers-reduced-motion：测验、弹簧动画和布局动画变为即时完成。
- 在 1440×900 和 390×844 下正常工作，控制台零报错；筛选、测验、花盆搭配和心愿单仅用键盘即可操作，并有可见的陶土色焦点环。
- 除带 [BRAND] 的普通 title 外，不做任何 SEO 机制；网站内绝不提及 VibeFather 或任何真实品牌；所有文案都是虚构的美式英语，存放在 src/content.ts 中。

---
— Prompt by VibeFather · https://vibefather.ai/t/plant-shop-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
