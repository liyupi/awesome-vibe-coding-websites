> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 寿司 Omakase 餐厅网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个八座 omakase 吧台的单页营销网站：漆黑色的静谧奢华、一张全出血的握寿司微距主视觉图、一份随滚动逐道呈现的时令菜单、主厨的故事，以及一个交互式吧台座位预订选择器（日期、用餐时段、8 座示意图），完全以 UI 状态运行。

- 受众：预订高端品鉴吧台的食客，以及为这类餐厅建站的店主和工作室。
- 目标：说服访客申请一个吧台座位：在首屏建立静谧与匠心，带他们逐道走过当季菜品，以主厨的故事赢得信任，然后让他们在一次平静的交互中选定日期、用餐时段和座位。
- 语调：静谧、精准、从容。简短的陈述句；奢华通过克制、空间与光传达，绝不依赖形容词。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：tailwindcss（MIT）、lenis（MIT）、lucide-react（ISC）、@fontsource/cormorant-garamond（OFL）、@fontsource/karla（OFL）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化设置：
  - 使用 npm create vite@latest sushi-omakase-restaurant-website -- --template react-ts 搭建脚手架；将 tailwindcss@3.4、postcss 和 autoprefixer 添加为开发依赖；将 lenis、lucide-react、@fontsource/cormorant-garamond 和 @fontsource/karla 添加为依赖。
  - vite.config.ts：base 设为 './'，build.sourcemap 设为 false，构建输出到 dist/。
  - tailwind.config.js：扩展颜色 lacquer #0D0B09、charred #171310、cedar #6B4A2F、ashwood #A9805B、amber #C8873A、amber-raised #E3A85C、rice #EDE6DB、mist #9A8F83；fontFamily 中 display 设为 'Cormorant Garamond'，sans 设为 'Karla'；将默认 borderRadius 比例设为 0，并添加 rounded-sm2 = 2px。
  - postcss.config.js：tailwindcss + autoprefixer。
  - src/lib/motion.ts 存放 IntersectionObserver 显现钩子（useReveal，阈值 0.25，仅触发一次）、rAF 视差辅助函数和 prefersReducedMotion() 检查；所有关键帧和过渡工具类都放在 src/index.css 中。
  - 将所有面向用户的字符串（品牌、标签行、主视觉文案、八道菜品、座位图、营业时间、常见问题、邮箱）保留在 src/content.ts 中，由变量构建；各区块从中读取，因此只需在一处替换值。
  - index.html：<title>[BRAND] — An Omakase Counter</title> 以及一个用代码绘制的 favicon.svg（在漆色背景上居中的单个 2px 琥珀色方块）；不做其他 meta 工作。

## 变量
- [BRAND] — 餐厅名称（默认："Kurosumi"）。自造词标，用于页眉、页脚、页面标题、联系邮箱以及文案中的每一处提及。
- [CONCEPT] — 菜单概念（默认："seasonal omakase"）。用于主视觉副标题、菜品介绍和预订文案中对品鉴体验的描述（例如 'guided cupping flight'）。
- [PRICE] — 品鉴价格（默认："$185 per guest"）。显示在主视觉副标题、菜品列表下方以及预订区块中。
- [SEATS] — 吧台座位数（默认："8"）。决定座位图中令牌的数量，以及文案中拼写出的数字，如 'a counter for eight'。
- [CHEF] — 主厨姓名（默认："Ren Ishida"）。用于主厨区块标题和故事中指明掌勺之人；请保持其为虚构人物。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接指向 https://vibefather.ai/t/sushi-omakase-restaurant-website（默认：是；删除此行即可移除）

页面与区块下的文案按默认值撰写。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- 漆黑（Lacquer）`#0D0B09` — 所有页面的底色；主视觉遮罩的基础色。接近黑色，带暖棕底色——绝不用纯 #000。
- 焦黑（Charred）`#171310` — 滚动后实心页头背景、页脚底色、确认面板底色。
- 雪松（Cedar）`#6B4A2F` — 细线、区块分隔线、课程导轨、吧台示意图的木料部分。细线以 40–60% 不透明度使用。
- 梣木（Ashwood）`#A9805B` — 暖木高光：变暗的座位标记、说明文字、座位示意图中的吧台横条。
- 琥珀（Amber）`#C8873A` — 唯一强调色：区块标签、当前课程刻度、选中座位填充、CTA 下划线。
- 琥珀提亮（Amber raised）`#E3A85C` — 仅用于悬停和激活强调态（链接、日期标签、座位悬停细线）。
- 米白（Rice）`#EDE6DB` — 主文本：标题、课程名称、正文。暖调米白，绝不用纯 #fff。
- 雾灰（Mist）`#9A8F83` — 次要文本：描述、说明文字、静止态导航链接。

### 字体排印
- 展示字体 — 标题、课程名称、引文（500 斜体）：Cormorant Garamond（OFL），字重 500/600
- 正文字体 — 正文、标签、标签片、导航（大写标签字距 0.18em）：Karla（OFL），字重 400/500/600

### 布局与动效
- 间距：宽松从容：区块桌面端 py-40（160px）/ 移动端 py-24（96px）；内容 max-w-6xl（72rem），移动端 px-6 / 桌面端 px-10；区块内块与块之间 64–96px；结构由 45% 不透明度的 1px 雪松细线承载，而非盒子或卡片。
- 圆角：几乎不用：控件、日期标签和座位标记 2px；图片和表面 0px。不用胶囊按钮，不用大圆角卡片。
- 动效：Lenis 平滑滚动（duration 0.9），在 App 中初始化一次；在 prefers-reduced-motion 下完全禁用。
- 动效：课程显现：IntersectionObserver 在 25% 阈值触发，每门课程只触发一次——opacity 0→1、translateY 28px→0，历时 750ms，cubic-bezier(0.16,1,0.3,1)；标签、名称和描述错开 80ms。
- 动效：主视觉：封面照片加载时以 2.4s ease-out 从 1.06→1 缩放，并以滚动量的 0.15 视差（上限 12%）；标题行从 300ms 起错开 120ms 淡入上移；遮罩随滚动加深。
- 动效：课程导轨：最接近视口高度 40% 的课程刻度在 200ms 内填充琥珀色；已过的刻度保持琥珀色、50% 不透明度。
- 动效：选座微交互：悬停空闲座位标记时上浮 2px 并出现 1px 琥珀细线；选中时在 200ms 内填充琥珀色；内联确认面板在 300ms 内淡入。任何动画都不超过 750ms。
- 动效：prefers-reduced-motion：关闭 Lenis、视差和加载缩放，所有显现变为普通的 200ms 不透明度淡入，微交互只保留颜色变化。
- 图像：每张照片都出自同一次拍摄：深色漆面雪松吧台上的微距美食摄影，左侧一盏暖色侧光，如吧台上方的低垂灯，深邃柔和的阴影，柔和的琥珀高光，近黑背景带隐约暖色木纹，细微胶片颗粒，浅景深。无文字、无标识、无品牌道具、无可辨认的面孔——厨师只以双手劳作的形式出现。不用图库服务；六张照片由 VibeFather 生成并下载到项目中。

## 页面与区块
### [BRAND] — 一间 Omakase 吧台（`index.html`）
1. **页头（Header）** — 固定顶栏，72px。左侧：[BRAND] 字标，使用 Cormorant Garamond 600、20px、rice 色——仅字母，无 logo 图形。右侧（桌面端）：锚点链接 'The house'、'This season'、'The hands'、'Find us'，使用 Karla 12px 大写、字距 0.18em，悬停时由 mist 变为 rice；随后是一个低调的 CTA 'Reserve'，带 1px amber 下划线。移动端：字标 + 'Reserve' + 一个 lucide menu/x 切换按钮，打开全宽 charred 面板，其中堆叠同样的四个链接。
   布局：position: fixed，全宽，z-50，在 hero 上方透明；滚动 80px 后，顶栏获得 bg charred 92% 不透明度、背景模糊和底部 1px cedar 细线（过渡 300ms）。
   动效：背景和细线在 80px 阈值处淡入；移动端菜单面板下滑 300ms；锚点链接使用 Lenis 平滑滚动到对应区块。
2. **Hero** — 全视口锚点。标题上方的小标签：'AN OMAKASE COUNTER FOR [SEATS]'（Karla 12px 大写、amber、字距 0.18em）。标题使用 Cormorant Garamond 500、clamp(3rem, 8vw, 6.25rem)、行高 1.04、rice 色：'Eight seats. One season at a time.' 副行，Karla 400、18px、mist、max-w 46ch：'Warm rice, day-boat fish and a counter of cedar — [BRAND] serves one [CONCEPT] menu each night, [PRICE].' 两个 CTA：主按钮 'Reserve a counter seat'（rice 文字，1px amber 下划线，悬停时加粗至 2px，arrow-right 图标）滚动到 #reserve；次按钮 'The courses'，mist 色，滚动到 #courses。底部居中：一条 1px amber 垂直线，高 48px，其高度每 3.2s 安静地循环 24px→48px→24px。
   布局：100vh 相对定位。背景：public/images/hero-nigiri.webp，absolute inset-0、object-cover、object-position center 68%。遮罩：linear-gradient(105deg, rgba(13,11,9,0.92) 0%, rgba(13,11,9,0.55) 45%, rgba(13,11,9,0.12) 100%)。文本块绝对定位在 12 列网格的左下角，第 1–7 列，底部内边距桌面端 96px / 移动端 48px；标题和副行左对齐。
   动效：封面照片加载时在 2.4s 内从 1.06→1 缩放，滚动时以 0.15（最大 12%）视差移动；标题、副行和 CTA 依次淡入上移，间隔 120ms，从 300ms 开始；amber 滚动线循环。减少动态效果：静态照片，文本块仅一次 200ms 淡入。
3. **The house** — 标签 'THE HOUSE'（Karla 大写 amber）。标题，Cormorant 500、clamp(2.25rem, 4.5vw, 3.5rem)、rice 色：'Quiet is the luxury.' 两段文字，Karla 400、17px、mist、max-w 46ch：'The room seats [SEATS] and holds nothing louder than the knives. Cedar, lacquer, two low lamps — everything else was deliberately left out.' / 'Fish comes off the morning boat; rice is seasoned with a two-year akazu and held warmer than the room. Nothing at the counter is rushed, including you.' 下方是一行由细线分隔的低调行，Karla 大写 12px mist：'TWO SEATINGS · [SEATS] GUESTS · ONE MENU'。
   布局：12 列网格：照片在右侧，第 8–12 列（counter-interior.webp，全高约 560px、object-cover、0px 圆角、向右出血至视口边缘）；文本在第 1–6 列，包含标签、标题、段落和低调行。移动端：照片在上（高 320px），文本在下。
   动效：室内照片以 0.08 视差移动并只显现一次（不透明度 + 上移 28px，750ms）；文本块以 80ms 错开显现；低调行最后淡入。
4. **This season — courses** — 标签 'THIS SEASON'。标题：'Eight courses, served one at a time.' 引导行，mist：'The menu follows the market boat and is rewritten with the season.' 然后是八道菜，每道都有 Karla 大写 mist 标签、Cormorant 600 rice 名称和一行 Karla mist 描述：Course 01 · First fire — 'Hokkaido scallop seared over binchotan, yuzu kosho, a whisper of smoked salt.' Course 02 · Silk — 'Chawanmushi of snow crab, dashi gelée, young ginger.' Course 03 · The boat — 'Day-boat sashimi, three cuts, wasabi grated to order.' Course 04 · Slow ember — 'Braised Kyoto vegetables in bonito broth, six hours.' Course 05 · The progression — 'Five nigiri in sequence — warm rice, akazu, fish rested, never chilled.' Course 06 · Smoke and char — 'Grilled barramundi collar, charred lemon, shiso.' Course 07 · The hand roll — 'Temaki of bluefin belly and crisp nori, served one at a time and eaten immediately.' Course 08 · Last sweetness — 'Warabi mochi, stone-milled matcha, hojicha to finish.' 结尾细线注释，Karla 14px mist：'The whole counter eats together — one path, [PRICE]; allergies honored with 72 hours' notice.'
   布局：沿页面垂直推进。桌面端：左侧粘性进度轨（1px cedar 垂直线，带八个 6px 方形刻度，在区块内粘性定位）。每道菜是 12 列行，行间距 96px：'COURSE 01' 标签在第 1–2 列；名称和描述在第 3–7 列（名称 clamp 1.75–2rem）；课程 01、03 和 05 在第 8–12 列带照片（01 在右，03 镜像到左使照片占 1–5，05 在右），object-cover、0px 圆角，按提供素材约为 4:3 到 16:9。移动端：隐藏进度轨，每道菜堆叠，照片全宽，间距 24px。
   动效：每道菜在视口 25% 处独立显现（750ms 上移淡入，内部 80ms 错开）；照片在其框架内以 0.06 视差移动；最接近视口 40% 的课程对应的进度轨刻度填充 amber（200ms），已过去的刻度保持 50% amber。减少动态效果：仅 200ms 不透明度淡入。
5. **The hands — chef** — 标签 'THE HANDS'。标题：'[CHEF] shapes every piece.' 正文，Karla 17px mist、max-w 44ch：'Fifteen years across counters in Kyoto and Copenhagen, and two rules carried from both: rice warmer than the room, fish never chilled past the moment.' / 'The counter is worked by one pair of hands each night — the same hands that fillet, season and press what you eat.' 引语使用 Cormorant Garamond 500 斜体、28px、rice 色，带 1px amber 左线：'The rice decides; the fish only asks.' 照片下方说明，Karla 12px mist：'Nigiri, pressed once. Photographed across the counter.'
   布局：与 'The house' 镜像：照片在第 1–5 列（chef-hands.webp，3:4，高约 640px，向左出血至视口边缘），文本在第 7–12 列。移动端：堆叠，照片在前，高 380px。
   动效：照片以 1.04→1 的缓慢缩放显现，持续 1.2s（一次）；文本和引语以 80ms 错开显现。减少动态效果：仅不透明度淡入。
6. **Reserve — 吧台座位选择器** — 标签 'RESERVATIONS'。标题：'Choose your seat at the counter.' 左栏文案，Karla 17px mist、max-w 40ch：'Two seatings each night, 17:30 and 20:00. The counter seats [SEATS]; every seat watches the same hands. [PRICE], 72 hours to cancel.' 右栏，三个步骤由 1px cedar 细线分隔（无盒子、无面板）：步骤 1 'THE EVENING'——七个日期芯片，运行时根据访客时钟生成，每个显示星期和日号。步骤 2 'THE SEATING'——两个选项，'17:30' 和 '20:00'。步骤 3 'THE SEAT'——俯视图：一条水平 ashwood 吧台（the counter），其后有一个 10px amber 小圆点标注 'the chef'，前方有 [SEATS] 个方形令牌，编号 1–[SEATS]；默认内容标记座位 4 和 7 已被占用（变暗、斜线划掉、不可点击）。选择日期 + 餐段 + 空闲令牌会更新摘要行，Karla 14px rice：例如 'Thursday 20:00 · counter seat 5'。按钮 'Request this seat'（rice，amber 下划线）将步骤区域替换为内联确认：'Noted. We reply personally within a day to confirm every seat.' 并带一个 'Change selection' 链接恢复选择器。不会向任何地方提交。
   布局：两栏：文案第 1–5 列，选择器第 6–12 列。座位令牌 44px 方形（移动端 40px，间距 6px，若 [SEATS] 增加则换行到第二行）；日期芯片宽 72px，移动端水平滚动；所有控件在漆面底上 2px 圆角。
   动效：空闲座位悬停时令牌上浮 2px，带 1px amber 细线；选择时 amber 填充交叉淡入 200ms；日期芯片选择滑动 1px amber 下划线（180ms）；确认在 300ms 内淡入。减少动态效果：仅颜色过渡。
7. **Find us** — 标签 'FIND US'。标题：'Old Harbour, after dusk.' 三个低调栏，每栏一个 16px lucide 图标（map-pin、clock、mail），amber 色，Karla 文本：Address — '14 Kestin Row, Old Harbour Quarter' / Hours — 'Tuesday to Saturday, seatings 17:30 and 20:00' / Write — 'reservations@kurosumi.com'（来自 content.ts；随 [BRAND] 变化）。下方是三行 FAQ，由细线分隔，问题 Karla 500 rice，回答 Karla 400 mist：'Dietaries?' — 'The menu is one path; tell us 72 hours ahead and the kitchen bends it.' / 'Cancellation?' — 'Seats release back to the counter at 72 hours.' / 'Walk-ins?' — 'The counter is [SEATS]; we keep none empty. Book ahead.'
   布局：图标置顶的栏位于 12 列网格上（三个等宽跨度，间距 48px），FAQ 行上方有细线，FAQ 始终展开（无手风琴）。
   动效：栏目和 FAQ 行以标准的 750ms 上升淡入显现，80ms 错峰。无其他动效。
8. **页脚（Footer）** — 1px 雪松色细线，然后在一行内：[BRAND] 字标（Cormorant 600，米色），Karla 12px 雾色的低调文字行 'A counter for [SEATS]'（从 content.ts 拼写出的数字），以及雾色的锚点链接 'The house · This season · Reserve'。可选 [CREDIT] 链接位于最右侧，12px 雾色。无日期，无社交链接，无新闻通讯。
   布局：炭黑底色，py-12，max-w-6xl，flex 行在移动端换行为列。
   动效：无。

## 资产
- 图片：将 https://media.vibefather.ai/assets/58784ade-8566-4083-9c76-e82c638662a5/hero-nigiri.webp 下载到 public/images/hero-nigiri.webp。替代文本：'Two pieces of nigiri on a dark lacquered cedar counter under a single warm light.' 用作全出血的 hero 锚点（16:9）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/58784ade-8566-4083-9c76-e82c638662a5/course-appetizer.webp 下载到 public/images/course-appetizer.webp。替代文本：'A charcoal-seared scallop in a small dark ceramic dish on cedar.' 用于 Course 01 旁边（3:4）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/58784ade-8566-4083-9c76-e82c638662a5/course-sashimi.webp 下载到 public/images/course-sashimi.webp。替代文本：'Three cuts of day-boat sashimi fanned on dark slate over the cedar counter.' 用于 Course 03 旁边（4:3）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/58784ade-8566-4083-9c76-e82c638662a5/course-nigiri-set.webp 下载到 public/images/course-nigiri-set.webp。替代文本：'Five pieces of nigiri in a row on a long dark serving board.' 用于 Course 05 旁边（16:9）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/58784ade-8566-4083-9c76-e82c638662a5/chef-hands.webp 下载到 public/images/chef-hands.webp。替代文本：'A chef's hands pressing a piece of nigiri over the cedar counter.' 用于 'The hands' 区块（3:4）；仅手部与前臂，不出现面部。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/58784ade-8566-4083-9c76-e82c638662a5/counter-interior.webp 下载到 public/images/counter-interior.webp。替代文本：'The empty eight-seat cedar counter at dusk, lit by two low lamps.' 用于 'The house' 区块（16:9）。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图标：lucide-react（ISC）通过 npm 引入——hero CTA 和 seat-request 按钮中的 arrow-right；'Find us' 各栏中的 map-pin、clock 和 mail；移动端页眉中的 menu 和 x。不使用其他图标：无 emoji、无 logo 标记、无装饰性图标行。
- 字体：@fontsource/cormorant-garamond（OFL，字重 500 和 600 以及 500 斜体）和 @fontsource/karla（OFL，字重 400、500、600），在 src/main.tsx 中导入；绝不从 fonts.googleapis.com 或任何 CDN 加载。在项目根目录的 ASSETS.md 中列出这两个字体家族和全部六张照片：路径、来源、作者或生成器、许可证。

## 不要做
- 无后端、无 API 调用、无分析统计；预订选择器仅为本地 UI 状态，绝不提交到任何地方——'Request this seat' 只显示内联确认面板，别无其他。
- 不使用任何 CDN：字体通过 Fontsource 包提供，图标来自 lucide-react，照片来自 public/images；绝不外链，绝不使用 Unsplash/Pexels/Pixabay 或占位图服务。
- 生产构建：单条命令、压缩、无 source map、输出中不含 src/、相对路径（Vite base './'）；每张照片压缩为 ≤ 350 KB 的 WebP，使 dist/ 保持在 20 MB 以下。
- 单页面，仅锚点导航；必须在 1440×900 和 390×844 下干净渲染，控制台零错误，并遵循 prefers-reduced-motion。
- 不使用真实餐厅、厨师或品牌名称，不使用米其林星级或奖项徽章，不使用书法痕迹、印章或汉字标识——字标为 [BRAND]，使用 Cormorant Garamond 字体，菜品用普通数字编号。
- 任何地方都不出现可辨认的面孔；厨师仅以照片中工作的双手出现。
- 避免通用的 SaaS 外观：无白色或浅色背景，无圆角卡片，无胶囊按钮，无蓝紫渐变，无玻璃拟态面板——结构来自漆色底上的细线、留白和字体。
- 任何地方都不出现内容日期（无 'Est.' 年份，无发布日期）；预订日期标签在运行时根据访客的时钟生成。
- 所有文案、标签、示例数据和 alt 文本均使用美式英语；每个字符串都位于 src/content.ts 中；当 [BRAND]、[CONCEPT]、[CHEF] 或 [SEATS] 变化时，重写本季的菜品名称、故事和拼写出的数量以匹配新值，而不是在不同品牌下保留寿司文案。
- 在项目根目录的 ASSETS.md 中列出每个第三方文件（两个字体家族、lucide 图标、六张照片）：路径、来源、许可证。

---
— Prompt by VibeFather · https://vibefather.ai/t/sushi-omakase-restaurant-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
