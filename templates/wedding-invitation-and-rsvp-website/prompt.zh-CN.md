> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 婚礼邀请与 RSVP 网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的单页婚礼邀请函，[BRAND] 将于 [DATE] 在 [CITY] 的 [VENUE] 举行婚礼。它必须像一套活起来的印刷请柬：象牙色（ivory）的主视觉区，名字用优雅的衬线字体呈现，并配有实时倒计时指向 [DATE]；一个四章式的故事；当天日程以垂直时间线呈现；旅行与住宿须知，附虚构酒店；一个 RSVP 表单（是否出席、同行人数、餐食选择、饮食备注、一首点歌），提交后在客户端保存一张感谢卡；一个宾客 FAQ，以及手绘风格的礼物登记占位卡片。单页：index.html，包含各区块（#story、#day、#travel、#rsvp、#faq、#registry）。一切都在浏览器中运行；不会向任何地方提交。

- 受众：宾客名单：大学朋友、远亲、同事和携伴嘉宾，年龄从 9 岁到 90 岁，大多是在手机上从群聊里打开链接。他们想知道在哪里、什么时候、穿什么、住哪里，以及如何答复出席——在三分钟内完成。
- 目标：让每位宾客都提交 RSVP 并订好酒店。访客应在十秒内知道是谁、在哪里、什么时候，并看到倒计时；在两分钟内完成 RSVP 的填写。
- 语气：温暖、亲切、带点小幽默，就像这对新人状态好的时候自己写的一样。短段落，具体细节（时间、步行分钟数、菜单名称），不要正式的请柬套话，不要感叹号。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/gilda-display（OFL-1.1）、@fontsource/jost（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 npm create vite@latest 以 react-ts 模板搭建脚手架。项目根目录下只有一个 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4（tailwindcss + postcss + autoprefixer），content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的每种颜色以 kebab-case 键名添加到 theme.extend.colors 中（ivory、paper、linen、sage、olive、blush、blush-deep、ink、stone、rule），并设置 fontFamily display ['Gilda Display', 'Georgia', 'serif']、sans ['Jost', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 14px，并添加 maxWidth { container: '1080px' } —— 邀请函比商店页面更窄。
  - 在 src/fonts.ts 中导入 '@fontsource/gilda-display/400.css' 以及 '@fontsource/jost/300.css'、'@fontsource/jost/400.css'、'@fontsource/jost/500.css'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（所有字符串、数字、章节、时间线条目、酒店、餐食、FAQ 答案和礼物登记卡片，均带类型），src/lib/brand.ts（brandSlug = [BRAND] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，coupleInitials = [BRAND] 中每个名字的首字母转为大写后用 '&' 连接（E&M），hashtag = '#' + brandSlug 去掉连字符或空格后按单词首字母大写），src/lib/storage.ts（用 try/catch 包裹的安全 localStorage 读写，键名前缀为 brandSlug + ':'），src/lib/countdown.ts（timeLeft(target) → { days, hours, minutes, seconds, done }，从解析 [DATE] 得出）。
  - 状态：src/store/rsvp.ts 是一个小型外部 store（useSyncExternalStore），保存草稿 { name, attending, party, meal, dietary, song } 和已保存的答复，持久化到 localStorage 键 brandSlug + ':rsvp'。已保存的答复会渲染感谢卡片；'Change your answer' 会清除它并返回表单，且值已预填。
  - src/components/ 中的组件：Header.tsx（锚点导航）、Reveal.tsx（Motion whileInView 包装器）、Botanical.tsx（角落小枝 SVG，通过变换镜像）、Countdown.tsx（四个单元格）、Heart.tsx（手绘小 SVG 心形）、Footer.tsx；Hero.tsx、Story.tsx（ChapterCard.tsx）、DaySchedule.tsx（TimelineRow.tsx）、TravelStay.tsx（HotelCard.tsx、VenueSketch.tsx 内联 SVG）、Rsvp.tsx（AttendingToggle.tsx、PartyStepper.tsx、MealPicker.tsx、ThankYouCard.tsx）、Faq.tsx、Registry.tsx（RegistryCard.tsx 绘制的占位符）。src/pages/Home.tsx 将它们组合起来。
  - 在首次构建之前，使用 curl -L -o 将资源（Assets）下列出的每张图片下载到 public/images/ 中，并使用给定的确切文件名。构建本身从不获取任何内容。
  - public/favicon.svg 如资源（Assets）下所述。index.html：lang en，<meta name='theme-color' content='#F8F5EE'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[BRAND] — [VENUE], [CITY]</title>。
  - 如资源（Assets）下所述，在项目根目录写入 ASSETS.md。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张图片。保持在 10 MB 以下。

## 变量
- [BRAND] — 新人（默认值："Elena & Marcus"）。新人姓名在邀请函上的呈现形式，即 'Name & Name'。用于主视觉字标、标题、话题标签（由 slug 生成）、页脚的新人首字母缩写以及 RSVP 的保存键。始终为虚构人物。
- [VENUE] — 场地（默认值："Hollowbrook Barn"）。虚构的场地名称。用于主视觉文案行、场地手绘图的标签、交通文案和酒店距离。由两个常见英文单词组成；绝不使用真实场地。
- [CITY] — 城市（默认值："Hudson, New York"）。场地所在的城市。用于主视觉文案行、交通指引（火车站、驾车时间）和页脚。可以使用真实城镇；街道和酒店保持虚构。
- [DATE] — 婚礼日期（默认值："June 12, 2027"）。倒计时所指向的完整未来日期，写作 'June 12, 2027'。驱动倒计时、主视觉文案行和故事的最后章节。始终位于未来，以确保倒计时处于运行状态。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/wedding-invitation-and-rsvp-website（默认值：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- Ivory（象牙白）`#F8F5EE` — 全站页面背景。
- Paper（纸白）`#FDFBF7` — 卡片表面（故事章节、酒店、RSVP 面板、礼物登记卡片）。
- Linen（亚麻色）`#F0EBDF` — 交替区块背景（日程、礼物登记）、输入框填充、chip 悬停。
- Sage（鼠尾草绿）`#8A9B84` — 植物线条、章节标记、时间线圆点、选中的 chip、eyebrow。
- Olive（橄榄绿）`#4E5A48` — 浅色背景上的次要文字、时间线时间、说明文字、图标颜色。
- Blush（腮红粉）`#C98D84` — 唯一的暖色点缀：爱心、倒计时数字、出席的 'Joyfully accepts' 状态、焦点环。
- Blush Deep（深腮红）`#B26F66` — Blush 悬停状态、主按钮按下、餐食选中边框。
- Ink（墨色）`#32362F` — 姓名、标题和正文、主描边按钮。
- Stone（石灰灰）`#6B6F63` — 弱化正文、次要按钮、禁用字段。
- Rule（分隔线色）`#E2DCCF` — 1px 细线、卡片边框、输入框边框、时间线基线。

### 字体排印
- Display：新人姓名、H1、H2、H3、章节标题、时间线标题、倒计时数字、字标：Gilda Display（OFL），字重 400
- 文本与 UI：正文、eyebrow、按钮、导航、表单字段、时间线时间（font-variant-numeric tabular-nums）、说明文字：Jost（OFL），字重 300/400/500

### 布局与动效
- 间距：8px 基准单位。容器最大宽度 1080px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px。区块垂直内边距桌面端 112px、1024px 以下 80px、640px 以下 64px。字号阶梯：H1（姓名）clamp(56px, 9vw, 120px) Gilda Display 400，行高 1.04，字距 0.01em；H2 clamp(32px, 4vw, 52px) Gilda 400；H3 24px Gilda 400；姓名之间的 & 符号用 Sage 斜体，通过无 Cormorant 的回退方案设置（Gilda 没有斜体——改用 Jost 300 斜体设置 '&'）；lead Jost 300 18px / 1.75 Ink 85%；正文 Jost 400 16px / 1.8（最大宽度 64ch）；eyebrow Jost 500 12px 大写 字距 0.2em Olive，前面带一个 16px 手绘小枝字形；说明文字 Jost 400 13px Olive。按钮：高度 50px，内边距 0 28px，Jost 500 14px 字距 0.12em 大写。主按钮：Ink 填充，Paper 文字。次按钮：1px Olive 边框，Olive 文字。输入框：高度 50px，1px Rule 边框，Paper 填充，16px Jost，聚焦边框 Sage。全局焦点环：2px Blush 轮廓，偏移 3px。
- 圆角：卡片、输入框、chip、照片和 RSVP 面板为 14px。仅 chip、party 步进按钮、时间线圆点和爱心使用 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现和倒计时；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于手风琴和 RSVP 切换。缓慢而柔和——这是纸，不是软件。
- 动效：显现：包裹在 <Reveal> 中的区块从 opacity 0、translateY(16px) 开始，在 15% 可见时（Motion whileInView，viewport once）用 900ms --ease-out 动画到静止状态。同级元素错开 100ms（index prop）。
- 动效：Hero：两个姓名在加载后 400ms 以 200ms 错开从 translateY(20px) 淡入上升，然后 & 小枝绘制（stroke-dashoffset 到 0）历时 1200ms，然后倒计时淡入。Hero 照片（上半部分，照片 hero-barn.webp）在 2600ms 内从 1.05 缩放到 1.0；滚动时平移 0 到 8%（Motion useScroll，offset ['start start', 'end start']）。
- 动效：倒计时：四个单元格位于一条细线上；每次跳动只交叉淡化变化的数字（240ms y 轴滑动），绝不用翻页时钟。在 prefers-reduced-motion 下数字即时切换。
- 动效：故事章节：每个章节卡片显现时其标记圆点填充 Sage；连接细线随区块滚动向下绘制（scaleY 0 到 1，transform-origin top，对列表使用 useScroll）。
- 动效：时间线（日程）：行以 100ms 错开显现；每行进入时其时间交叉淡化；圆点从 scale 0.6 弹出一次。
- 动效：RSVP：出席切换在 'Joyfully accepts'（Blush）和 'Regretfully declines'（Stone）之间滑动一个小手绘爱心；餐食 chip 选中时填充 Sage；party 步进器计数时带 200ms 缩放脉冲；提交时表单滑出、ThankYouCard 滑入（16px 上升，320ms --ease-io，AnimatePresence mode 'wait'）；卡片上的爱心在 700ms 内绘制其轮廓。
- 动效：FAQ 手风琴：高度 0 到 auto，opacity 0 到 1，历时 340ms --ease-io；Plus 旋转 45 度变成 X。
- 动效：礼物登记卡片：悬停上浮 4px，手绘丝带变直（一个微小的 6px 旋转归零）。
- 动效：页头：在象牙白页面上透明，Ink 文字；滚动 40px 后变为 Ivory 92% 不透明度、backdrop-filter blur(8px) 和 1px Rule 边框，250ms 过渡。锚点导航始终可见，带 .link-draw 下划线。
- 动效：prefers-reduced-motion: reduce — 禁用照片缩放和视差、姓名上升、小枝绘制、数字递增、布局动画（以静止状态渲染；倒计时数字即时切换）。颜色和边框悬停变化保留。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：仅使用真实摄影，柔和浪漫，全部六张为本模板以统一风格制作：柔和花园光线，象牙白和鼠尾草绿配腮红点缀，浅景深，细腻颗粒。绝不出现人物：场地、花艺、文具、餐桌布置和蜡烛——没有面孔、没有手、手指上没有戒指。任何地方都没有可读文字——文具保持空白。每张照片使用 object-fit cover，object-position 见 Assets 下说明，14px 圆角，无阴影；Ivory 上的照片加 1px Rule 轮廓。照片下方说明文字为 Jost 13px Olive。代码绘制：植物角落小枝、章节标记、时间线圆点、爱心、场地草图以及礼物登记占位卡片。图标：仅 lucide-react，描边宽度 1.5。

## 页面与区块
### 邀请函（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[BRAND] = Elena & Marcus，[VENUE] = Hollowbrook Barn，[CITY] = Hudson, New York，[DATE] = June 12, 2027）。将每个字符串、数字和列表放入 src/content.ts 并从中渲染。若任何变量值不同，请重写每个标题、章节、时间线条目、酒店、路线、餐食、FAQ 回答和礼物登记卡片，使其对新人有针对性且可信，同时保持相同结构和数量（4 个章节、6 个时间线条目、2 家酒店、3 种餐食、5 个 FAQ、3 张礼物登记卡片）。所有人物、地点、酒店和商店均为虚构。全篇使用的事实：话题标签 '#ElenaAndMarcus' 来自 slug；仪式下午 3:00 在 [VENUE]；场地是一座修复的 1880 年代奶牛谷仓，带花园；下午 2:30 开始入场；火车：Amtrak 至 Hudson 站，出租车 10 分钟；驾车：城市以北两小时，草甸停车；接驳巴士从两家酒店分别于下午 2:00 和 2:20 发车，晚上 11:30 返回；酒店：'The Hollowbrook Inn' 步行五分钟（链接 '#'，占位符），'Riverside Lodge' 驾车十分钟（链接 '#'）；餐食：'Braised beef with roots'、'Roast salmon with fennel'、'Garden risotto'；饮食需求以自由文本记录；着装要求 'garden formal, block heels sink in grass'；仪式不插电；孩子欢迎参加早午餐，晚间仅限成人；礼物登记：三家虚构商店（'The Hearth Shop'、'Wander & Co'、'Kitchen Garden'），所有链接均为 '#'。
   布局：不适用
   动效：不适用
2. **页头（锚点导航）** — 居中字标：新人首字母 'E & M'，Gilda Display 20px，链接至 ./index.html。下方导航（Jost 500 14px，letter-spacing 0.08em）：'Our story' → #story，'The day' → #day，'Travel & stay' → #travel，'RSVP' → #rsvp，'FAQ' → #faq，'Registry' → #registry。移动端导航在字标下方横向滚动。'RSVP' 链接后加一个小手绘爱心，Blush 色。
   布局：固定顶部，Ivory/92%，滚动 40px 后加模糊，总高 104px（字标行 56px + 导航行 48px），居中容器。Body 加对应顶部内边距。
3. **首屏** — 上半部分：照片 hero-barn.webp（容器全宽，桌面端 21:9，移动端 16:10），底部边缘覆盖柔和 Ivory 渐变。下方在 Ivory 上居中：眉题小枝线条 'Together with their families'；名字 'Elena' 和 'Marcus' 分列 Jost 300 斜体 Sage 色 & 符号两侧，H1 字号；然后 Jost 300 20px '[VENUE] · [CITY]'；然后 'Save the afternoon of [DATE]'，Jost 400 16px Olive；然后话题标签 '#ElenaAndMarcus'，Blush 500。下方倒计时：四个单元格（Gilda Display 400 40px Ink 数字，上方 Jost 500 11px 大写 letter-spacing 0.18em Olive 标签）'days · hours · minutes · seconds'，倒计时至 [DATE] 下午 3:00 当地时间。倒计时下方，一个主按钮 'RSVP by April 1' → #rsvp 和次按钮 'See the day' → #day。说明文字：'Formal invitation to follow by post; this page is the one that updates.'
   布局：首屏照片 1px Rule 描边，14px 圆角，页头下方 32px 外边距。名字行在 640px 以下换行，& 符号居中单独一行。倒计时单元格以 1px Rule 竖线分隔，总高 48px，上下各一条 1px Rule 边框内缩 20%。按钮居中，间距 16px；说明文字下方 24px。
4. **我们的故事** — 区块 id='story'。眉题 'How we got here' 和 H2 'Four chapters, one barn.' 章节位于垂直细线上：1）标记 '2019' — 'A borrowed umbrella' — 'Elena lent Marcus an umbrella outside a bookstore and got it back three weeks later, with a receipt for two coffees she never drank. He had done the math; she did the forgiving.' 2）'2021' — 'One apartment, two bookshelves' — 'A move across the city turned into a shared lease. The bookshelves merged badly; everything else merged easily.' 3）'2024' — 'The question' — 'On the bridge where the umbrella finally died, Marcus asked. Elena said yes before he finished the sentence, which he has never let her forget.' 4）'2027' — 'You are here' — 'A barn in [CITY], everyone we love, and a playlist that starts polite. Thank you for being chapter four.'
   布局：Ivory 背景。页头居中。章节：桌面端垂直细线居中偏左（年份标记 Gilda 28px Sage 在左侧，卡片在右侧），768px 以下堆叠。卡片 Paper 背景 1px Rule 边框 28px 内边距，标题 Gilda 24px，正文 Jost 16px / 1.8。
5. **当天** — 区块 id='day'。眉题 'June 12' 和 H2 'The shape of the day.' 垂直时间线：'2:30pm — Arrivals & lemonade' — 'Gates open; find a seat, find a friend, find the shade.'；'3:00pm — The ceremony' — 'In the garden. Unplugged — our photographer is quick, we promise.'；'4:00pm — Cocktails on the lawn' — ' Lawn games for the competitive, chairs for the wise.'；'6:00pm — Dinner in the barn' — 'Long tables, short speeches, three suppers to choose from.'；'8:00pm — Toasts & cake' — 'Speak now or forever hold your prosecco.'；'9:00pm — Dancing' — 'The band starts polite. It does not stay polite.'；'11:30pm — Last song & shuttles' — 'The shuttle loops to both hotels until everyone is home.'
   布局：Linen 背景。页头居中。时间线：左侧 32px 列细线带 Sage 圆点，时间 Gilda 26px Ink（数字用 Jost 的 tabular-nums — 时间设为 Jost 500 16px，时段标签用 Gilda；所有行保持一种样式），标题 Gilda 24px，注释 Jost 15px Olive。行以交错方式显现；1px Rule 分隔线。时间线后照片条：三张照片并排（flowers-table.webp 'The palette'、stationery.webp 'The suite'、candles-evening.webp 'The evening'）4:3 比例，说明文字在下方。
6. **交通与住宿** — 区块 id='travel'。眉题 'Getting there' 和 H2 'The barn, the beds, the way home.' 左栏：VenueSketch（内联 SVG 线稿，谷仓带花园，标注 '[VENUE]' 为 Sage 色）和场地段落：'A restored 1880s dairy barn ten minutes outside town — gardens for the ceremony, string lights for the dancing, meadow parking for the practical. The ground is grass: block heels, not stilettos.' 交通行带 Lucide 图标：TrainFront 'By train' — 'Amtrak to Hudson station; the venue is a 10-minute taxi. We'll post a shared-cab list closer to the day.'；Car 'By car' — 'About two hours north of the city. Turn at the farm stand with the giant pumpkins — that's the one. Parking in the meadow, follow the lights.'；Bus 'Shuttle' — 'A shuttle loops from both hotels at 2:00pm and 2:20pm, and back from the last song until everyone's home.' 右栏：两张 HotelCard 在 Paper 上：'The Hollowbrook Inn' — 'A five-minute stroll from the barn. Twelve rooms held under [hashtag] until March 1; mention the wedding for the rate.' — 链接 '#' 说明 'Placeholder link for the couple to fill in'；'Riverside Lodge' — 'Ten minutes by car, breakfast worth the drive. Pet friendly, for the plus-ones with paws.' — 链接 '#' 相同说明。
   布局：Ivory 背景。两栏：场地 + 交通行（7 列），酒店（4 列，偏移 1）堆叠，间距 24px。交通行：图标在 44px Linen 圆角方块中。草图 SVG viewBox 0 0 480 360 宽度 100%，Rule 描边，Sage 点缀。
7. **RSVP** — 区块 id='rsvp'。眉题 'RSVP' 和 H2 'Say yes (or no, gently).' 一个 Paper 面板：姓名输入（占位符 'Your name as the envelope spelled it'）；出席切换 — 两个带滑动爱心的选项块，'Joyfully accepts'（激活时 Blush）/ 'Regretfully declines'（激活时 Stone）；同行人数步进器 'Seats in your party' 1–4（步进器带 Minus/Plus，数字 Gilda 28px）；餐食选择器（三个选项块带一行注释）：'Braised beef with roots' — 'short ribs, carrots, mash'；'Roast salmon with fennel' — 'herb butter, new potatoes'；'Garden risotto' — 'peas, mint, parmesan — the vegetarian plate'；饮食输入（占位符 'Allergies, aversions, strong feelings'）；歌曲输入（占位符 'One song that fills the floor'）；主按钮 'Send our answer' 带说明 'Saved right here in this browser — nothing is posted anywhere; the couple checks the list by candlelight.' 提交时（姓名 + 出席 + 餐食必填）：ThankYouCard 在 Linen 上 — 手绘爱心轮廓动画，'Thank you, [NAME].' Gilda 32px，摘要行（'2 seats · Roast salmon with fennel' 或拒绝时 'You'll be missed — we''ll raise a glass.'，饮食和歌曲回显），按钮 'Change your answer'（返回表单并预填）和 'Back to the day' → #day。保存在 localStorage 中。
   布局：Linen 背景。面板最大宽度 680px 居中，32px 内边距，1px Rule 边框，14px 圆角。输入全宽，间距 16px；选项块换行；步进器居中。480px 以下面板内边距降至 20px。
8. **FAQ** — 区块 id='faq'。眉题 'Good questions'，H2 'Before you ask the mothers.' 五个手风琴：1) 'What should I wear?' — 'Garden formal: linen, florals, a hat if you like. The ceremony is on grass — block heels forgive, stilettos do not.' 2) 'Can I bring my kids?' — 'To the Sunday-after brunch, absolutely and loudly. The evening is adults-only, except the two smallest ring bearers, who have contracts.' 3) 'What about photos?' — 'Unplugged ceremony — put the phones away and be in the pictures. After the kiss, shoot freely and tag [hashtag].' 4) 'Gifts?' — 'Your presence is the present; the registry below is for the stubborn. Three shops, no china, zero crystal.' 5) 'What if it rains?' — 'The barn holds everyone; the garden ceremony moves inside with the string lights on. Rain on a wedding is luck — mud is a shoe choice.'
   布局：象牙色（Ivory）背景，手风琴行以 1px Rule 分隔线分隔，问题用 Gilda 22px，答案用 Jost 16px / 1.8，最大宽度 64ch，右侧 Plus 图标。容器最大宽度 720px。
9. **Registry** — 区块 id='registry'。眉题 'For the stubborn'，H2 'Three shops, no china.' 三张手绘 RegistryCards（SVG：以 Rule 线条绘制的店面卷首插图，带 Sage 点缀，店名用 Gilda）：'The Hearth Shop' — 'For the fireplace we don''t have yet and fully intend to earn.' — 按钮 'Visit'（链接 '#'，说明 'placeholder link'）；'Wander & Co' — 'Travel fund in shop form: contributions to a honeymoon we''ll actually take.' — 'Visit'（'#'）；'Kitchen Garden' — 'Seeds, tools and one absurdly good knife.' — 'Visit'（'#'）。下方：'Or bring a bottle — red, dry, and label-free. We''re building a cellar, not a display.'
   布局：亚麻色（Linen）背景。三个等宽列，24px 间距；卡片 Paper 背景，1px Rule 边框，28px 内边距，店面 SVG 宽度 100%，顶部宽高比 4:3。低于 860px：堆叠。
10. **Footer** — 象牙色（Ivory）背景，顶部 1px Rule 边框。居中：一枝 Sage 小枝，首字母 'E & M' 用 Gilda 24px，'[VENUE] · [CITY] · [DATE]' 用 Jost 400 14px Olive，话题标签用 Blush 500 14px，以及一行 'Made with love and a shared spreadsheet.' 用 Jost 300 14px Stone。没有社交图标，没有邮箱——这对新人像 2019 年那样通过电话联系。
   布局：垂直内边距 64px，居中堆叠，16px 间距。

## 资源
- 图片：为本设计制作的模板照片（可随模板自由再分发）。用 curl -L -o 将每张图片下载到 public/images/：https://media.vibefather.ai/assets/2364ee3f-9bc9-48a8-bff1-bcd52aa512d9/hero-barn.webp → public/images/hero-barn.webp（首屏；object-position 50% 55%；alt 'A restored barn with string lights and garden chairs ready for a ceremony'）；https://media.vibefather.ai/assets/2364ee3f-9bc9-48a8-bff1-bcd52aa512d9/flowers-table.webp → public/images/flowers-table.webp（日间照片条；alt 'Sage and blush flowers with eucalyptus on a linen table'）；https://media.vibefather.ai/assets/2364ee3f-9bc9-48a8-bff1-bcd52aa512d9/stationery.webp → public/images/stationery.webp（日间照片条；alt 'Blank ivory wedding stationery with a wax seal and sage ribbon'）；https://media.vibefather.ai/assets/2364ee3f-9bc9-48a8-bff1-bcd52aa512d9/candles-evening.webp → public/images/candles-evening.webp（日间照片条；alt 'Taper candles in glass holders along a barn dinner table at dusk'）；https://media.vibefather.ai/assets/2364ee3f-9bc9-48a8-bff1-bcd52aa512d9/garden-path.webp → public/images/garden-path.webp（桌面端故事区块第 3 章与第 4 章之间的侧图；alt 'A garden path with a simple birch arch'）；https://media.vibefather.ai/assets/2364ee3f-9bc9-48a8-bff1-bcd52aa512d9/table-setting.webp → public/images/table-setting.webp（RSVP 区块，面板上方的小侧图；alt 'A single place setting with ivory linen and a sage napkin'）。共六个文件。
- 图片：在项目根目录写入 ASSETS.md，包含一张表：path、source URL、author、license——每张照片一行（source 'media.vibefather.ai, made for this template'，author 'VibeFather'，license 'Distributed with the template'），另加 @fontsource/gilda-display 和 @fontsource/jost（OFL-1.1）以及 lucide-react（ISC）的行。绝不用图库网站（Unsplash、Pexels、Pixabay）或含人物、面孔、手、手指上的戒指或文具上可读文字的图像替换照片。
- 图标：仅使用 lucide-react：Heart、Minus、Plus、TrainFront、Car、Bus、Check、Clock、MapPin、GlassWater、Music。描边宽度 1.5，16–24px，颜色继承。public/favicon.svg 手写：viewBox 0 0 32 32，一个 32x32 的 rect，rx 9，填充 #F8F5EE，带 1px 鼠尾草绿（Sage，#8A9B84）边框，中央一个腮红粉（Blush，#C98D84）心形字形。无其他 logo：这对新人的首字母始终以文字排版呈现。
- 字体：安装 @fontsource/gilda-display 和 @fontsource/jost，并按“安装”部分所列在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包进 dist/。
- 图片：以代码绘制：植物角枝和眉题字形、章节标记、时间线圆点、RSVP 心形、场地草图（谷仓线稿）以及三个礼物登记店铺门面占位图。无其他位图，无插画，无地图瓦片。

## 不要做的事
- 无后端、无表单提交、不向任何 API 发起 fetch 请求：RSVP 及其感谢卡片仅存在于浏览器中（localStorage）；任何内容都不会被发送到任何地方，表单中也会说明这一点。
- 这个单页上的所有链接都是锚点（./index.html#story、#day、#travel、#rsvp、#faq、#registry）；酒店和礼物登记链接是 '#' 占位符，由新人自行填写——绝不使用真实商店。
- 一切资源自托管：字体通过 Fontsource 引入，图标以 npm 包或内联 SVG 形式使用，图片下载到 public/images/。不使用 CDN 的 <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具。
- 生产构建：压缩、无 source map、不将 src/ 复制到 dist/、使用单一命令 npm run build、输出到 dist/ 且小于 10 MB。
- 不使用真实场地、酒店、礼物登记商店或真实情侣；不使用包含面部、手部或人物的照片；照片中的文具保持空白——无可读文字。
- 不使用任何真实情侣的日期；倒计时仅针对 [DATE] 变量；页面不显示其他日期（RSVP 截止日期存在于文案中，而非日历中）。
- 除可选的页脚署名链接外，绝不在网站内提及 VibeFather 或任何其他品牌；所有文案均为虚构的美式英语。
- 在所有地方尊重 prefers-reduced-motion：禁用视差、小枝和爱心绘制、数字滑动和交错显现；保留颜色/边框悬停效果。
- 网站必须在 1440x900 桌面端和 390x844 移动端正常工作，控制台零错误；RSVP 仅用键盘即可操作，每个交互元素都有可见的焦点环。
- 保持文案具体且个性化：不使用 lorem，不使用邀请网站的陈词滥调（“欢迎来到我们的旅程”）；每个时间、商店和酒店都来自 src/content.ts。

---
— Prompt by VibeFather · https://vibefather.ai/t/wedding-invitation-and-rsvp-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
