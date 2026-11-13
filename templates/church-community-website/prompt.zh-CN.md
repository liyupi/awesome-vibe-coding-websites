> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 教会社区网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [CHURCH] 打造的单页网站，这是位于 [CITY]、由 [PASTOR] 带领的社区教会，气质上 [VIBE]。网站必须做到欢迎而不施压：包含礼拜时间及注意事项、四个定期活动、可按系列和讲员筛选的八条讲道存档、六个小组、一个不做任何处理的奉献区块、规划来访步骤，以及一个在客户端确认的“打个招呼”表单。单页：index.html，包含各区块（#services、#events、#sermons、#groups、#giving、#visit）。一切都在浏览器中运行；不会提交到任何地方。

- 受众：周六晚上 9 点紧张地搜索“church near me”的新来者，以及查看今晚小组安排的长期成员。他们想知道时间、停车的真实情况、该穿什么，以及一张看起来友善的面孔。
- 目标：让新来者规划一次来访，让成员找到合适的小组。访客在十秒内看到时间和来访 CTA；在两分钟内读完注意事项并感受到牧师的语气。
- 语气：温暖、平实、好客。句子简短，不使用内部行话，除非加以解释，对停车问题带点温和的幽默。信仰体现在欢迎中，而非词汇中。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（MIT）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/sortsmillgoudy（OFL-1.1）、@fontsource-variable/source-sans-3（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化（Setup）：
  - 使用 react-ts 模板通过 npm create vite@latest 脚手架创建。项目根目录只有一个 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的每种颜色以 kebab-case 键添加到 theme.extend.colors（warmwhite、stonepaper、card、teal、teal-deep、teal-mist、ink、slate、wheat、rule），并设置 fontFamily display ['Sorts Mill Goudy', 'Georgia', 'serif']、sans ['Source Sans 3 Variable', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 12px，并添加 maxWidth { container: '1120px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/sortsmillgoudy/400.css' 和 '@fontsource-variable/source-sans-3'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（所有字符串、讲道、活动、小组、时间与图片路径，带类型），src/lib/brand.ts（churchSlug = [CHURCH] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 churchSlug + '.org'），src/lib/storage.ts（安全的 localStorage 读写，包裹在 try/catch 中，键前缀为 churchSlug + ':'），src/lib/useOpenNow.ts（根据服务时间表和客户端时钟判断 open-now），src/lib/sermonFilters.ts（applyFilters(sermons, { series, speaker })）。
  - 状态（State）：src/store/hello.ts 是一个小型外部 store（useSyncExternalStore），持有 { name, email, note, sent }，持久化到 localStorage 键 churchSlug + ':hello'。
  - 组件位于 src/components/：Header.tsx、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、Footer.tsx；Hero.tsx、Services.tsx（WhatToExpect.tsx）、Events.tsx（EventCard.tsx）、Sermons.tsx（FilterChips.tsx、SermonRow.tsx）、Groups.tsx（GroupCard.tsx）、Giving.tsx、Visit.tsx（StepCard.tsx、HelloForm.tsx、SaidHello.tsx）、PastorNote.tsx。src/pages/Home.tsx 组合它们。
  - 在首次构建之前，使用 curl -L -o 将资源（Assets）下列出的每张图片下载到 public/images/，并使用给定的确切文件名。构建本身从不获取任何内容。
  - public/favicon.svg 如资源（Assets）下所述。index.html：lang en，<meta name='theme-color' content='#FAF7F0'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[CHURCH] — A community church in [CITY]</title>。
  - 在项目根目录编写 ASSETS.md，如资源（Assets）下所述。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和四张图片。保持其在 8 MB 以下。

## 变量
- [CHURCH] — 教会名称（默认："Cornerstone Commons"）。虚构的教会名称。用于字标、标题、页脚、电子邮件（hello@ + 不含连字符的 churchSlug + '.org'）以及 localStorage 键。绝不使用真实教会。
- [CITY] — 城市（默认："Nashville, Tennessee"）。教会聚会的地点。用于标题、主视觉、路线指引和页脚。可以使用真实城市；街道为虚构。
- [PASTOR] — 牧师（默认："Pastor Elena Marsh"）。虚构主任牧师的名字。用于欢迎辞、讲道讲员列表和问候表单的回复行。绝不使用真实神职人员。
- [VIBE] — 氛围（默认："neighborhood, unplugged and sincere"）。一个全小写短语，描述社区的感受。驱动主视觉文案和“可以期待什么”文案。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/church-community-website（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 暖白（Warm White）`#FAF7F0` — 全站页面背景。
- 石纸色（Stonepaper）`#F0EBE0` — 交替区块背景（Events、Groups）、标签片、悬停填充。
- 卡片色（Card）`#FFFFFF` — 讲道行、活动卡片、问候面板。
- 青绿（Teal）`#2F6B5E` — 主色：标题强调、按钮、选中标签片、焦点环、系列圆点。
- 深青绿（Teal Deep）`#224F45` — 悬停、页脚背景。
- 青雾（Teal Mist）`#E2EEEA` — 选中标签片填充、图标底槽。
- 墨色（Ink）`#2C2A24` — 标题与正文、图标颜色。
- 石板灰（Slate）`#6B675D` — 次要文本、说明文字、眉题、关闭状态。
- 麦色（Wheat）`#C9A54E` — 安静的第二色：活动星期方块、小组圆点、小型大写装饰。
- 分隔线（Rule）`#E4DDCE` — 1px 细线、卡片边框、输入框边框、分隔线。

### 字体排印（Typography）
- 展示字体：H1、H2、H3、讲道标题、小组名称、字标 — Sorts Mill Goudy，温和而书卷气：Sorts Mill Goudy (OFL)，字重 400
- 文本与界面：正文、眉题、按钮、表单、说明文字；时间使用等宽数字：Source Sans 3 (OFL)，字重 400/600/700

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。容器最大宽度 1120px，居中，侧边内边距桌面 48px、平板 32px、640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面 100px、1024px 以下 76px、640px 以下 60px。字号阶梯：H1 clamp(42px, 6vw, 72px) Sorts Mill Goudy 400，行高 1.08；H2 clamp(28px, 3.8vw, 44px) Goudy 400；H3 21px Goudy 400；讲道标题 Goudy 19px；导语 Source Sans 400 17.5px / 1.65 Ink 90%；正文 15.5px / 1.7（最大宽度 62ch）；眉题 Source Sans 700 12px 大写 字距 0.15em Slate；说明文字 13px Slate。按钮：高度 50px，Source Sans 700 14px。主按钮：Teal 填充，Card 文字。次按钮：1px Teal 边框。输入框：高度 50px，1px Rule 边框，Card 填充，聚焦时 Teal 边框。全局焦点环：2px Teal 轮廓，偏移 3px。
- 圆角：卡片、按钮、输入框、标签片和照片为 12px。仅药丸形、开放圆点和筛选标签片使用 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现和筛选；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于表单切换。平静而不慌不忙——像清晨漫步。
- 动效：显现：包裹在 <Reveal> 中的区块从 opacity 0、translateY(12px) 开始，在 15% 可见时（Motion whileInView，viewport once）以 800ms --ease-out 稳定下来。同级元素错开 80ms。
- 动效：首屏：圣所照片在 2600ms 内亮度提升 4%，同时从 1.03 缩放到 1.0；H1 上升；一条细麦色线在欢迎词下方绘制一次。
- 动效：聚会时间：开放中的圆点轻轻脉动（1800ms，减少动效下关闭）；今日行的青绿线滑入一次。
- 动效：讲道筛选：标签片选中时从 Teal Mist 填充为 Teal（150ms）；行以 popLayout 淡入淡出重新排列（200ms 淡出 / 380ms 滑行）；实时计数交叉淡入淡出；筛选后为空的归档显示 'Nothing in that combination yet — sermons arrive weekly.'
- 动效：活动卡片：麦色星期方块在悬停时变亮；卡片上浮 3px。
- 动效：小组：区块进入时圆点依次弹出；悬停上浮 2px。
- 动效：问候表单：无效提交抖动 4px，并显示友好的内联标签；发送时以 320ms --ease-io 切换到 SaidHello，绘制的麦色 'HELLO, FRIEND' 印章轻轻缩放进入，'Thanks, [NAME].' '[PASTOR] replies personally — usually within a day.' 以及预填的 'Say more'。持久化在 localStorage 中。
- 动效：链接：.link-draw 在悬停和 focus-visible 时以 280ms 生长出 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 无脉动、绘制、重排或错开；一切静止；颜色/边框悬停保留。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：欢迎的光线，真实摄影，四张均为本模板以一致风格制作：清晨圣所光线、砖与暖木、聚会空间和社区餐食餐桌——建筑感与人的邻近感，绝不出现面孔或礼仪特定符号。牧师肖像为 AI 生成的虚构人物（一位温暖、四十多岁的女性，穿芥末色开衫）——真实教会可替换为自己牧师照片的占位图。无可读文字或标牌。每张照片使用 object-fit cover，object-position 见 Assets，12px 圆角，无阴影。说明文字为 Source Sans 13px Slate。代码绘制：favicon、系列圆点、星期方块、印章和标签片。图标：仅 lucide-react，描边宽度 1.75。

## 页面与区块
### 教会（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值撰写（[CHURCH] = Cornerstone Commons，[CITY] = Nashville, Tennessee，[PASTOR] = Pastor Elena Marsh，[VIBE] = neighborhood, unplugged and sincere）。将每个字符串和列表放入 src/content.ts 并从中渲染。若任何变量值不同，请重写主视觉、期待内容、全部四场活动、八篇讲道、六个小组、奉献文案和到访步骤，使其对新教会具体且可信，同时保持相同的结构和数量。所有人物、讲道和小组均为虚构；语气保持非宗派且热情好客。事实：地址 '2209 Clover Street, [CITY]' 为虚构；聚会时间为周日 9:00 与 10:45（9:00 那场更安静），周三 18:30（简单，三十分钟）；办公室周一至周四 9–15；停车场位于建筑后方及 Clover 街上；着装要求为 'come as you are, genuinely'；两场周日聚会均欢迎儿童。讲道（标题 · 系列 · 讲员 · 时长）：'The Long Table' 'Belonging First' [PASTOR] 28 分钟；'Unhurried Mornings' 'Sabbath-ish' [PASTOR] 25 分钟；'Brick by Brick' 'Belonging First' 'Pastor June Okafor（虚构）' 31 分钟；'The Quiet Yes' 'Sabbath-ish' [PASTOR] 26 分钟；'Laundry Theology' 'Everyday Hours' 'Pastor June Okafor' 24 分钟；'The Guest Room' 'Belonging First' [PASTOR] 29 分钟；'Enough for Tuesday' 'Everyday Hours' [PASTOR] 27 分钟；'Open Hands, Open Doors' 'Belonging First' 'Pastor June Okafor' 30 分钟。活动：'Wednesday · Community Meal' 'tables at 6, everyone eats, nobody checks a list'；'Thursday · Youth Night' 'grades 6–12, games with rules and games without'；'Tuesday (1st) · Choir & Anyone Who Hums' 'no audition, no solos forced'；'Saturday (monthly) · Block Workday' 'the garden, the fence, the donuts'。小组：'Sunday Breakfast Club' 'after the 9:00, diner booth theology' 周日；'Young Families' 'kids present, chaos welcome' 周二；'Men''s Morning' 'coffee, scripture, honesty' 周三；'Women''s Circle' 'tea, study, laughter that echoes' 周四；'Walk & Pray' 'a slow mile, weather permitting' 周六；'Dinner Church' 'we cook, we eat, we linger' 周五（每月）。
   布局：不适用
   动效：不适用
2. **页眉** — 左侧：字标 '[CHURCH]'（Goudy 21px），下方为 'A community church · [CITY]'（10px 大写 Slate），链接至 ./index.html。右侧导航（Source Sans 600 14px）：'Services' → #services，'Events' → #events，'Sermons' → #sermons，'Groups' → #groups；一个小号 Teal 的 'Plan a visit' → #visit。800px 以下：字标 + 到访按钮。
   布局：吸顶，高度 72px，Warm White/95% 模糊，Rule 边框。
3. **主视觉** — 全出血 sanctuary-light.webp（88svh，最小 600px），覆盖柔和遮罩。眉题（Bone 80%）：'A COMMUNITY CHURCH · [CITY]'。H1 两行：'Come as you are.' / '*Really.*' 导语（Bone 85%，最大宽度 500px）：'[CHURCH] is [VIBE] — two Sunday services, a Wednesday meal, and a front door that doesn''t have a dress code.' 主按钮 'Plan your visit' → #visit，照片上的次级按钮 'What to expect' → #services。底部条带 Teal Deep/70%：'Sundays 9:00 & 10:45' · 'Parking behind the building' · 'Kids at both services'。
   布局：照片 object-position 50% 50%；遮罩渐变 Warm White 0.1→0.05→0.65；内容锚定左下，上移 112px。
4. **聚会与期待内容** — 区块 id='services'。眉题 'WHEN WE GATHER'，H2 'Two Sundays and a Wednesday.' 聚会行（时间、名称、一句话、今日高亮）：'9:00 · The quiet service' 'the earlier one: fewer kids, more silence'；'10:45 · The full room' 'the later one: all ages, all volumes'；'Wed 18:30 · Midweek reset' 'thirty minutes, simple, done by seven'。WhatToExpect 三张卡片：'Dress' 'come as you are — the pulpit has seen running shoes'；'Kids' 'welcome at both services; the 10:45 has a kids'' moment, then optional kid-space'；'Parking' 'the lot behind the building, or Clover Street; the walk is one block'。
   布局：Warm White 背景。聚会行以细线分隔，最大宽度 720px；期待卡片三列，20px 间距，位于 Stonepaper 上。
5. **活动** — 区块 id='events'。眉题 'THIS MONTH, MOST MONTHS'，H2 'FOUR RECURRING GATHERINGS.' EventCards（Wheat 星期方块、名称、一行说明）：即上述名册。说明文字：'Details land in the newsletter — paper copies at the door, as tradition demands.'
   布局：Stonepaper 背景；2x2 存根式卡片，20px 间距；星期方块为 Wheat，日期首字母为 Teal。
6. **讲道** — 区块 id='sermons'。眉题 'SERMON ARCHIVE'，H2 'EIGHT TO CATCH UP ON.' FilterChips：系列（All、Belonging First、Sabbath-ish、Everyday Hours）与讲员（All、[PASTOR]、Pastor June Okafor）；实时计数 '8 sermons'。SermonRows：标题（Goudy）、系列圆点 + 标签、讲员、时长；筛选时行重新排列；每行的播放控件链接至 '#placeholder'，并附说明 'recordings live on the real page'。
   布局：Warm White 背景；行以细线分隔，最大宽度 780px；滚动时筛选标签吸顶于页眉下方。
7. **小组** — 区块 id='groups'。眉题 'SMALL GROUPS'，H2 'SIX WAYS IN THE DOOR.' GroupCards（圆点、名称、一行说明、聚会模式）：即上述名册。一则注释：'Groups open and close with the seasons; the Thursday circle has outlived three cars per member (sample).'
   布局：Stonepaper 背景；3x2 网格，20px 间距；卡片位于 Card Rule 边框上。
8. **奉献与牧师留言** — 区块 id='giving'。眉题 'GIVING'，H2 'IF YOU''D LIKE TO.' 三行低调内容：'In person' 'the wooden box by the door, no envelopes required'；'By bank transfer' 'details on the printed card — ask any usher'；'Time and skills' 'the meal, the garden, the fence: hands count double'。说明文字：'This demo page doesn''t process gifts; the real one explains exactly where each goes.' 旁边 PastorNote：pastor-elena.webp 肖像（3:4），配文 '[PASTOR] — a fictional pastor'，留言为：'I answer the hello form myself. Tell me what you''re looking for — or what you''re wary of. Both are welcome.'
   布局：Warm White 背景；奉献行占 6 列，细线分隔；留言占 4 列，偏移 1 列，肖像置于上方。
9. **计划到访与页脚** — 区块 id='visit'。眉题 'PLAN A VISIT'，H2 'THREE EASY STEPS.' StepCards：1) 'Pick a service' '9:00 for quiet, 10:45 for the full room'；2) 'Park & walk' 'the lot behind the building; the side door is the main door on Sundays'；3) 'Say hello — or don''t' 'nobody will single you out; the hello form below is for when you want to be expected.' HelloForm 位于 Card 上：姓名、邮箱、备注（占位符 'Anything you''d like us to know — or nothing at all'）；主按钮 'Say hello'，配说明 'Saved in this browser — the real page emails [PASTOR]. Nothing is sent here.' SaidHello：Wheat 印章，'Thanks, [NAME].' '[PASTOR] replies personally — usually within a day.' 'Say more' 预填。页脚（Teal Deep，bone 文字）：字标、'2209 Clover Street, [CITY]'、hello@ + emailDomain、(615) 555-0172 tel:、锚点；底行 '© [CHURCH]. Everyone is welcome; the parking is free.'
   布局：步骤三列，带编号圆点；表单最大宽度 560px；页脚三段式行，底行位于 bone/10% 分隔线之上。

## 资源
- 图片：为本设计制作的模板照片（可随模板自由再分发）。用 curl -L -o 将每张图片下载到 public/images/：https://media.vibefather.ai/assets/6de4164a-09df-48f4-bff8-f9883994b202/sanctuary-light.webp → public/images/sanctuary-light.webp（主视觉；object-position 50% 50%；alt 'A sanctuary with morning light through tall windows'）；https://media.vibefather.ai/assets/6de4164a-09df-48f4-bff8-f9883994b202/community-table.webp → public/images/community-table.webp（活动侧；alt 'Long tables set for a community meal'）；https://media.vibefather.ai/assets/6de4164a-09df-48f4-bff8-f9883994b202/brick-entry.webp → public/images/brick-entry.webp（到访侧；alt 'A brick entry with a wooden door and lantern'）；https://media.vibefather.ai/assets/6de4164a-09df-48f4-bff8-f9883994b202/pastor-elena.webp → public/images/pastor-elena.webp（牧师寄语；alt 'Pastor Elena Marsh, a fictional pastor'）。共四个文件。
- 图片：在项目根目录写入 ASSETS.md，包含一个表格：路径、来源 URL、作者、许可证——每张照片一行（来源 'media.vibefather.ai, made for this template'，作者 'VibeFather'，许可证 'Distributed with the template'），另加 @fontsource/sortsmillgoudy 和 @fontsource-variable/source-sans-3（OFL-1.1）以及 lucide-react（ISC）的行。根据肖像规则，牧师肖像为 AI 生成的虚构人物；任何照片中均不得出现会众面孔、可读标牌或特定礼仪符号。
- 图标：仅使用 lucide-react：Clock、Users、MapPin、Car、Baby、Coffee、Music、Hammer、Check、Plus。描边宽度 1.75，16–24px，颜色继承。系列圆点、星期方块、HELLO 印章和 favicon 为绘制的 SVG。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的 rect rx 9 填充 #2F6B5E，一个 Card（#FFFFFF）开门字形（一个简单的拱形）。无其他标志：教堂名称始终以文字排版呈现；favicon 中不得有十字架或教派标记——保持建筑感。
- 字体：安装 @fontsource/sortsmillgoudy 和 @fontsource-variable/source-sans-3，并在 src/fonts.ts 中按 Setup 所列导入它们。Vite 会将 woff2 文件打包进 dist/。
- 图片：在代码中绘制：系列圆点、星期方块、印章、标签和 favicon。除四张照片外无其他位图；无插图；无地图瓦片。

## 禁止事项（Don'ts）
- 无后端、无表单提交、不向任何 API 发起 fetch 请求——也不进行任何形式的支付处理：奉献（giving）仅以文字说明；hello 表单保存在浏览器中，并对此作出说明。
- 此单页上的所有链接均为锚点（./index.html#services、#events、#sermons、#groups、#giving、#visit）以及页脚的 mailto。
- 不使用真实教会、神职人员、教派或其标识；图像或 favicon 中不使用特定礼仪符号；不出现会众面孔；不出现可读的标牌。
- 一切自托管：字体通过 Fontsource，图标以 npm 包或内联 SVG 形式引入，图片下载至 public/images/。不使用 CDN 的 <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具。
- 生产构建：压缩、无 source map、不将 src/ 复制到 dist/、单一命令 npm run build、输出位于 dist/ 且小于 8 MB。
- 牧师肖像为 AI 生成的虚构人物，非任何真实个人；整体语气保持热情好客且不隶属特定教派。
- 任何地方均不出现日期或年份；活动和小组以星期几命名并定期重复；讲道行标注时长而非日期；网站从不显示当天日期。
- 除页脚可选的致谢链接外，网站内绝不提及 VibeFather 或任何其他品牌；所有文案均为虚构的美式英语。
- 尊重 prefers-reduced-motion：无脉冲、绘制、洗牌或交错动画；一切处于静止状态；颜色/边框悬停效果保留。
- 页面必须在 1440x900 桌面端和 390x844 移动端正常工作，控制台零错误；标签（chips）、行和表单仅用键盘即可操作，且焦点环可见。
- 文案保持热情好客且平实：不使用 lorem，不使用无注释的圈内词汇；每个时间、小组和讲道均存放于 src/content.ts。

---
— Prompt by VibeFather · https://vibefather.ai/t/church-community-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
