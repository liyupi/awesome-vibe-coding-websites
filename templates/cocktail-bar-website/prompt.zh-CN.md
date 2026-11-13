> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 鸡尾酒吧网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BAR] 打造的两页网站，这是一家位于 [CITY] 的 [NEIGHBORHOOD] 的鸡尾酒吧——以 [SPIRITS] 为基酒的饮品，每周营业六晚。它必须让人感觉像眼睛适应后的那个房间：一个琥珀色烛光的主视觉区，带着承诺和预订 CTA，一份按烈酒分组的菜单，配以诚实的文案，一张调酒师工作时的锚点照片，三张照片呈现的房间，四个固定活动之夜，私人包场咨询和订桌流程——两者均为客户端实现。页面：index.html、visit.html。一切都在浏览器中运行；不会提交到任何地方。

- 受众：选择今晚去哪家酒吧的下班饮酒者和提前规划的周末聚会人群：25–45 岁，手机在手，对喧闹的场所过敏。他们想要房间的氛围、饮品的可信度，以及三次点击内订到桌位。
- 目标：填满餐桌和包场日历。访客在十秒内感受到房间氛围并看到“book a table”；在两分钟内读完菜单并查看活动之夜。
- 语调：低声自信，饮品之间带着冷幽默。真实的原料，真实的时间，没有“mixology journey”。在无酒精部分开一个玩笑——反着来。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（MIT）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/oswald（OFL-1.1）、@fontsource-variable/karla（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置（Setup）：
  - 使用 react-ts 模板通过 npm create vite@latest 脚手架创建项目。项目根目录下有两个真实的 HTML 页面：index.html（入口 src/main-home.tsx）和 visit.html（入口 src/main-visit.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist'，sourcemap false，assetsInlineLimit 0，rollupOptions { input { index: resolve(__dirname, 'index.html')，visit: resolve(__dirname, 'visit.html') } } }。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './visit.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的每种颜色以 kebab-case 键名添加到 theme.extend.colors 中（noir、coal、candle、amberglow、bone、ash、brass、rule），并将 fontFamily display 设为 ['Oswald', 'Arial Narrow', 'sans-serif']，sans 设为 ['Karla Variable', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 4px，并添加 maxWidth { container: '1140px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/oswald/400.css'、'@fontsource/oswald/600.css' 和 '@fontsource-variable/karla'；从两个入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（所有字符串、饮品、价格、活动、营业时间、房间说明和图片路径，带类型），src/lib/brand.ts（barSlug = [BAR] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 barSlug + '.com'，phoneDigits 用于 tel:），src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键前缀为 barSlug + ':'），src/lib/useOpenNow.ts（根据营业时间表和客户端时钟判断 open-now）。
  - 状态（State）：src/store/booking.ts 是一个小型外部 store（useSyncExternalStore），持有 { kind: 'table' | 'hire', party, day, area, occasion, capacity, name, email, sent }，持久化到 localStorage 键 barSlug + ':request'。两个表单写入同一个 store；确认信息从中读取。
  - 组件位于 src/components/：Header.tsx、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、Footer.tsx；首页（home）：Hero.tsx、MenuBoard.tsx（SpiritGroup.tsx、DrinkRow.tsx）、BartenderAnchor.tsx、RoomStrip.tsx（RoomPhoto.tsx）、Events.tsx（NightCard.tsx）、TrustStrip.tsx；到访页（visit）：HoursBlock.tsx（OpenNowPill.tsx）、TableBooking.tsx（PartyStepper.tsx、DayChips.tsx、AreaPicker.tsx）、HireForm.tsx、RequestCard.tsx（共享确认信息）。src/pages/Home.tsx 和 Visit.tsx 组合它们；两个页面都渲染 Header 和 Footer。
  - 在首次构建之前，使用 curl -L -o 将资源（Assets）下列出的每张图片下载到 public/images/ 中，并使用给定的确切文件名。构建本身从不获取任何内容。
  - public/favicon.svg 如资源（Assets）下所述。两个 HTML 文件：lang en，<meta name='theme-color' content='#12100D'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>。标题：index.html '<title>[BAR] — Cocktails in [NEIGHBORHOOD], [CITY]</title>'，visit.html '<title>Book & visit — [BAR]</title>'。
  - 在项目根目录下按资源（Assets）下所述编写 ASSETS.md。
  - dist/ 包含两个 HTML 文件、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张图片。保持在 10 MB 以下。

## 变量
- [BAR] — 酒吧名称（默认：“The Amber Room”）。虚构的酒吧名称。用于字标、标题、页脚、电子邮件（hello@ + 不含连字符的 barSlug + .com）以及 localStorage 键。绝不使用真实酒吧。
- [CITY] — 城市（默认：“New Orleans, Louisiana”）。酒吧所在地。用于标题、主视觉眉题、路线指引文案和页脚。可以使用真实城市；街道为虚构。
- [NEIGHBORHOOD] — 街区（默认：“the Warehouse District”）。小写冠词风格（'the Warehouse District'、'Eastside'）。用于标题、主视觉文案和活动文案。
- [SPIRITS] — 店内烈酒（默认：“gin, rye and agave”）。三种以逗号分隔的基酒。驱动菜单的三个烈酒分组（外加无酒精分组）、主视觉文案和一个活动之夜。保持恰好三种。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/cocktail-bar-website（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值撰写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 黑（Noir）`#12100D` — 两个页面的页面背景。
- 炭（Coal）`#1C1915` — 交替区块背景、卡片、菜单板凹槽、悬停填充。
- 烛（Candle）`#262019` — 照片叠加层（以 rgba(38,32,25,x) 表示）、输入框填充、标签片。
- 琥珀光（Amberglow）`#E0A458` — 唯一强调色：价格、订位 CTA、选中标签片、烛点、焦点环、黄铜细线。
- 骨（Bone）`#EDE6D8` — 主文本：标题、正文、饮品名称。
- 灰（Ash）`#9C9184` — 次要文本、说明文字、眉题、不可用状态。
- 黄铜（Brass）`#B08A4F` — 安静的第二色：区块分隔线、分组标签、小型大写细节、星形填充。
- 线（Rule）`#322C24` — 1px 细线、卡片边框、输入框边框、菜单分隔线。

### 字体排印（Typography）
- 展示字体：H1、H2、饮品名称、价格、字标、活动之夜 — Oswald 高瘦压缩体，加字距：Oswald（OFL），字重 400/600
- 文本与 UI：正文、眉题、按钮、表单、说明文字；价格和营业时间使用表格数字：Karla（OFL），字重 400/600/700

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。容器最大宽度 1140px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面端 104px、1024px 以下 76px、640px 以下 60px — 一间暗室缓缓呼吸。字号比例：H1 clamp(48px, 7.5vw, 104px) Oswald 600 大写 letter-spacing 0.02em，line-height 0.96；H2 clamp(30px, 4vw, 52px) Oswald 600 大写；饮品名称 Oswald 400 21px；价格 Oswald 600 18px Amberglow 表格数字；导语 Karla 400 17.5px / 1.7 Bone 88%；正文 15.5px / 1.7（max-width 62ch）；眉题 Karla 700 11px 大写 letter-spacing 0.26em Ash；说明文字 12.5px Ash。按钮：高度 52px，Karla 700 13.5px 大写 letter-spacing 0.1em。订位 CTA：Amberglow 填充，Noir 文字。次要按钮：1px Bone/35% 边框，Bone 文字。输入框：高度 50px，Candle 填充，1px Rule 边框，Bone 文字，聚焦时 Amberglow 边框。全局焦点环：2px Amberglow 轮廓，偏移 3px。
- 圆角：卡片、按钮、输入框、标签片和照片均为 4px — 暗而锐利。仅药丸形、烛点和派对步进器按钮使用 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于表单切换和标签片。缓慢淡入如眼睛适应 — 700–900ms，没有突兀。
- 动效：显现：包裹在 <Reveal> 中的区块从 opacity 0、translateY(12px) 开始，在 12% 可见时（Motion whileInView，viewport once）以 800ms --ease-out 落定。同级元素错开 80ms。
- 动效：首屏：房间照片在 1600ms 内从 60% 淡入到全显，同时缩放 1.04→1.0；H1 各行上升 18px，错开 150ms；一个小烛点脉冲一次（琥珀色，2000ms，减少动效下关闭）。
- 动效：菜单行：悬停时从左侧滑入一条 1px Brass 分隔线，价格从 Ash→Amberglow 变亮；饮品的一句话描述缩进 2px。
- 动效：调酒师锚点：照片的黄铜边框在滚动进入视野时绘制一次；说明文字最后交叉淡入。
- 动效：房间横条：照片在滚动时以不同速率视差 4%（逐帧 useScroll）；说明文字随其画框淡出。
- 动效：活动：夜晚卡片以 60ms 错开显现；星期标签片悬停时填充 Amberglow。
- 动效：预订：派对步进器在计数时弹出；日期标签片填充 Amberglow；区域选择器交叉淡入迷你平面草图；提交时面板滑向 RequestCard（300ms --ease-io），并带一个烛焰印章（绘制的琥珀色火焰）闪烁两次后静止。
- 动效：链接：.link-draw 在悬停和 focus-visible 时以 300ms 生长 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 一切以静止状态渲染；火焰印章为静态；颜色/边框悬停保留。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：情绪化真实摄影，全部六张为本模板以统一风格制作：近乎黑暗的房间由蜡烛和一盏琥珀色灯照亮，玻璃器皿捕捉光线，空白标签的瓶子，深色皮革。一张锚点照片展示调酒师工作 — 一个 AI 生成的虚构人物（倒酒中，温暖的专注），真实酒吧可替换为自己员工的照片。任何地方都没有顾客面孔，没有可读文字或标志（瓶标空白）。每张照片使用 object-fit cover，object-position 见 Assets 下，4px 圆角，无阴影；Noir 上的照片获得 1px Rule 轮廓。说明文字为 Karla 12.5px Ash。代码绘制：favicon、烛点、火焰印章、标签片、迷你平面草图和星形填充。图标：仅 lucide-react，描边宽度 1.75。

## 页面与区块
### 首页（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值撰写（[BAR] = The Amber Room，[CITY] = New Orleans, Louisiana，[NEIGHBORHOOD] = the Warehouse District，[SPIRITS] = gin, rye and agave）。将每个字符串、价格和列表放入 src/content.ts 并从中渲染；两个页面共享一个内容文件。若任何变量值不同，请重写主视觉、全部十二款饮品、活动、房间说明、租赁文案和预订文案，使其对新酒吧具体且可信，保持相同的结构和数量（4 个菜单组 × 3 款饮品，4 个活动之夜，3 张房间照片，3 个区域，5 条信任/租赁事实）。所有饮品、员工和夜晚均为虚构。事实：地址 '912 Tchoupitoulas Lane, [CITY]' 为虚构；电话 (504) 555-0186；营业时间周二至周四 17:00–01:00，周五至周六 17:00–02:00，周日 16:00–23:00，周一休息；随时接受散客；餐桌保留 15 分钟；无最低消费；接受银行卡；租赁容量：卡座 12 人，后吧 24 人，整间 60 人。菜单（组 · 饮品 · 一行描述 · 价格）：Gin：'Garden Distraction' 'elderflower, cucumber, a whisper of dill — the porch, distilled' $15；'Last Ferry' 'gin, dry vermouth, olive brine, taken seriously' $14；'Juniper & Smoke' 'gin, lapsang syrup, lemon — campfire in a coupe' $16。Rye：'Warehouse Sour' 'rye, honey, lemon, a float of malbec — our postcard' $15；'Second Thoughts' 'rye, amaro, bitters — for decisions already improving' $16；'Barrel Standard' 'rye, demerara, orange bitters — the house handshake' $14。Agave：'Cloud Cover' 'blanco tequila, coconut, lime, sea salt — a beach in the dark' $15；'Smoke Signal' 'mezcal, grapefruit, chili — answers on a ten-second delay' $16；'Sundown Express' 'reposado, vermouth, burnt orange — the last one, twice' $15。Zero-proof：' designated Driver' → 'Designated Driver' 'seedlip, tonic, grapefruit — zero proof, full effort' $10；'Open Secret' 'roasted barley, chicory, orange peel — the sober pour regulars fight over' $10；'Static' 'sparkling water, verjus, thyme — quiet, and proud of it' $9。活动（夜晚 · 名称 · 一行描述）：'Wednesday · Vinyl Midweek' 'records on the turntable, no playlist, requests at the bar''s discretion'；'Thursday · Educated Guess' 'a blind tasting flight, five pours, bragging rights'；'Friday · Late Set' 'a trio plays two sets from nine; talking over them is discouraged politely'；'Sunday · Slow Close' 'one bartender, the classics only, last call at ten'。
   布局：不适用
   动效：不适用
2. **页眉（所有页面）** — 左侧：字标 '[BAR]'（Oswald 600 20px 大写 字间距 0.14em）链接至 ./index.html。右侧导航（Karla 600 13px 大写 字间距 0.08em）：'Menu' → ./index.html#menu，'The room' → ./index.html#room，'Nights' → ./index.html#nights，'Visit' → ./visit.html；以及一个小号 Amberglow 的 'Book a table' → ./visit.html#book。低于 760px：字标 + 预订按钮。
   布局：粘性顶部，高度 68px，Noir/88% 模糊，Rule 边框。
3. **主视觉** — 全出血 hero-room.webp（92svh，最小 620px）。眉题（Bone 70% 不透明度）：'COCKTAILS · [NEIGHBORHOOD] · [CITY]'。H1 两行：'AFTER YOUR EYES' / '*ADJUST.*' 导语（Bone 80% 不透明度，最大宽度 500px）：'A basement room, forty candles, and drinks built on [SPIRITS] — no shouty playlists, no minimum spend, no dress code with opinions.' 主按钮 'Book a table' → ./visit.html#book 和照片上的次要按钮 'Read the menu' → #menu。主视觉内底部条带 Coal/70%：'Tue–Sun from 5pm' · 'Walk-ins welcome' · 'Tables held 15 min'。
   布局：照片 object-position 50% 60%；叠加渐变 Noir 0.5→0.15→0.92；内容锚定左下角向上 120px。
4. **饮品菜单** — 区块 id='menu'。眉题 'THE DRINKS' 和 H2 'TWELVE, CHOSEN SLOWLY.' 两栏：左侧，MenuBoard — 四个 SpiritGroups（GIN / RYE / AGAVE / ZERO-PROOF 标签，Oswald 600 13px 字间距 Brass）各含三个 DrinkRows（名称 + 一行描述 + 价格）；右侧，BartenderAnchor：bartender-pour.webp（3:4，黄铜边框）配说明 'Marius, mid-pour — a fictional bartender' 及下方注释：'Tell him a flavor you like; he''ll bring you something with a name by the second round.' 菜单板下方说明行：'Prices include the ice negotiations. Zero-proof listed with the same respect.'
   布局：Noir 背景。菜单板 7 列，组间 Rule 细线分隔（24px 间距）；锚点 4 列偏移 1 列，粘性顶部 96px。低于 1024px：堆叠，锚点在菜单板之后，宽高比 3:2。
5. **房间** — 区块 id='room'。眉题 'THE ROOM' 和 H2 'THREE PLACES TO SIT.' RoomStrip 照片带视差：room-booths.webp 'The booths — leather, low light, decisions'（4:3）；room-backbar.webp 'The back bar — forty bottles, no logos we answer to'（4:3）；room-terrace.webp 'The terrace — one string bulb and the river smell'（4:3）。每张配小号 Brass 索引（'01'、'02'、'03'）。
   布局：Coal 背景。三列 20px 间距；每张下方说明文字 Karla 12.5px Ash 配 Brass 索引；照片 4px 圆角，1px Rule 轮廓。
6. **夜晚与信任** — 区块 id='nights'。眉题 'MOST WEEKS' 和 H2 'FOUR NIGHTS, REPEATING.' NightCards：星期标签（Oswald 600）+ 名称 + 来自名册的一行描述。下方，Coal 上的 TrustStrip：三项带 Amberglow 勾选 — 'Walk-ins welcome, always'；'No minimum spend, no bottle politics'；'Card, cash and split bills without sighs'。结尾行：'Sundays we close early; the candles have families.'
   布局：Noir 背景。2x2 网格 20px 间距卡片，Coal 上 Rule 边框；信任条为细线边界的三项一行；结尾行居中，下方 40px。
7. **页脚** — Noir 配 Rule 顶部边框。三栏：1）字标 + '[BAR]' 上方 'Cocktails · [NEIGHBORHOOD] · [CITY]'。2）'Find us'：'912 Tchoupitoulas Lane, [CITY]'，(504) 555-0186 tel:，hello@ + emailDomain。3）'Hours'：周二至周四 5pm–1am，周五至周六 5pm–2am，周日 4pm–11pm，周一休息。底部行：'© [BAR]. The ice is clear; the jokes are not.'
   布局：垂直内边距 64px，3 列，底部行在 Bone/10% 分隔线下方 32px。低于 768px 堆叠。

### 访问（`visit.html`）
1. **刊头与营业时间** — 实心页眉。眉题 'BOOK & VISIT'，H1 'COME DOWN.' 导语：'Tables for two to eight, private hire for twelve to sixty, and a door policy that stops at ''be decent''.' HoursBlock：OpenNowPill（根据营业时间表显示 'Open · kitchen of ice until 1am' 样式）和本周营业时间，今日行用 Amberglow 高亮；注释 'Tables held 15 minutes; the candle clock is generous but finite.'
   布局：Noir 背景，垂直内边距顶部 136px + 48px，底部细线；营业时间块最大宽度 640px 配 Rule 分隔线。
2. **餐桌预订** — 区块 id='book'。眉题 'A TABLE' 和 H2 'THREE TAPS AND A BOOTH.' Coal 上的 TableBooking 面板：PartyStepper 2–8；DayChips（接下来 7 个营业日，以星期命名；周一禁用 'we rest'）；AreaPicker 配迷你平面草图（绘制 SVG：三个区域）— 'Booths (leather, low)' / 'Back bar (watch the work)' / 'Terrace (weather permitting)'；姓名 + 邮箱；主按钮 'Request the table' 配说明 'Saved in this browser — the real bar confirms by text. Nothing is sent here.'
   布局：Coal 区块；面板最大宽度 620px，28px 内边距，Rule 边框，4px 圆角；草图在选择器旁 5 列；低于 760px 堆叠。
3. **私人租赁与确认** — 眉题 'THE WHOLE ROOM' 和 H2 'RENT THE DARK.' HireForm：容量选择（'Booths · up to 12' / 'Back bar · up to 24' / 'The whole room · up to 60'）；场合输入（占位符 'Birthday, launch, music video — we''ve hosted two of three'）；无日期窗口标签（'This month' / 'Next month' / 'Just exploring'）；姓名 + 邮箱；次要按钮 'Send the enquiry'。共享 RequestCard（任一表单）：烛焰印章闪烁两次后静止，'Request received.'（Oswald 28px），回显（'Table for 4 · Friday · Booths' 或 'Hire · the whole room · this month'），'We reply within a day — usually with a better idea than you asked for.' 和 'Change my request' 返回预填。持久化在 localStorage 中。
   布局：Noir 背景；租赁面板 6 列，RequestCard 共享确认在两个表单下方（交叉淡入 300ms）；低于 1024px 堆叠。
4. **到达方式** — 三行安静文字配图标：MapPin '912 Tchoupitoulas Lane — the stairs next to the flower shop, follow the amber bulb'；TrainFront 'Two streetcar stops from the Quarter, then a short walk that builds anticipation'；Car 'Street parking after 7pm; the lot behind the brewery is kinder'。结尾行居中：'Knock once. If Marius knocks back, it''s the right door.'
   布局：Coal 条带；行间细线分隔，最大宽度 720px；结尾行下方 48px。

## 资源
- 图片：为本设计制作的模板照片（可随模板自由再分发）。用 curl -L -o 将每张图片下载到 public/images/：https://media.vibefather.ai/assets/886249a6-bf32-4601-8683-a27771ad5375/hero-room.webp → public/images/hero-room.webp（Hero；object-position 50% 60%；alt 'A dark cocktail bar room lit by candles and one amber lamp'）；https://media.vibefather.ai/assets/886249a6-bf32-4601-8683-a27771ad5375/bartender-pour.webp → public/images/bartender-pour.webp（Menu anchor；alt 'Marius mid-pour, a fictional bartender'）；https://media.vibefather.ai/assets/886249a6-bf32-4601-8683-a27771ad5375/room-booths.webp → public/images/room-booths.webp（Room 1；alt 'Deep leather booths in candlelight'）；https://media.vibefather.ai/assets/886249a6-bf32-4601-8683-a27771ad5375/room-backbar.webp → public/images/room-backbar.webp（Room 2；alt 'A back bar of blank-labeled bottles under amber light'）；https://media.vibefather.ai/assets/886249a6-bf32-4601-8683-a27771ad5375/room-terrace.webp → public/images/room-terrace.webp（Room 3；alt 'A small terrace with one string bulb'）；https://media.vibefather.ai/assets/886249a6-bf32-4601-8683-a27771ad5375/glassware.webp → public/images/glassware.webp（Menu board side detail，可选的小条带；alt 'Coupe and rocks glasses catching amber light'）。共六个文件。
- 图片：在项目根目录写入 ASSETS.md，包含一个表格：path、source URL、author、license——每张照片一行（source 'media.vibefather.ai, made for this template'，author 'VibeFather'，license 'Distributed with the template'），另加 @fontsource/oswald 和 @fontsource-variable/karla（OFL-1.1）以及 lucide-react（ISC）的行。绝不用图库网站替换照片，也不使用带客户面孔、可读标签或品牌标识的图片——调酒师肖像按肖像规则是 AI 生成的虚构人物。
- 图标：仅使用 lucide-react：Martini、Wine、GlassWater、Music、FlaskConical、MapPin、TrainFront、Car、Clock、Check、Plus、Minus、ArrowRight。描边宽度 1.75，16–24px，颜色继承。蜡烛圆点、火焰印章、迷你平面草图、Brass 索引和 favicon 为绘制的 SVG。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的 rect，rx 5，填充 #12100D，带 1px #B08A4F 边框，一个 Amberglow（#E0A458）烛焰字形覆盖在一条短的 Bone 烛芯线上。无其他标志：酒吧名称始终以文字排版呈现。
- 字体：安装 @fontsource/oswald 和 @fontsource-variable/karla，并按 Setup 中所列在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包进 dist/。
- 图片：在代码中绘制：蜡烛圆点、火焰印章、迷你平面草图、Brass 索引、chips 和 favicon。除六张照片外无其他位图；无插图；无地图瓦片。

## 禁止事项
- 无后端、无表单提交、不向任何 API 发起 fetch 请求：两个表单仅在浏览器内保存（localStorage）并明确说明这一点；tel: 链接由电话号码数字构建。
- 每个内部链接都指向文件名（./index.html、./index.html#menu、./index.html#room、./index.html#nights、./visit.html、./visit.html#book）——绝不指向裸目录。
- 全部自托管：字体通过 Fontsource，图标作为 npm 包或内联 SVG，图片下载到 public/images/。不使用 CDN 的 <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具。
- 生产构建：压缩，无 source map，不将 src/ 复制到 dist/，单条命令 npm run build，输出在 dist/ 下且小于 10 MB。
- 不使用真实酒吧、烈酒品牌或其酒瓶；照片中的酒瓶标签保持空白；调酒师肖像为 AI 生成的虚构人物，非任何真实个人；任何地方不出现顾客面部；无可读标识。
- 任何地方不出现日期或年份；活动为以星期命名的定期之夜；日期标签显示星期名称而不含日历日期；网站从不显示今天的日期。
- 除可选的页脚署名链接外，网站内绝不提及 VibeFather 或任何其他品牌；所有文案为虚构的美式英语。
- 尊重 prefers-reduced-motion：无脉冲、闪烁、视差或交错淡入；一切以静止状态渲染；颜色/边框悬停效果保留。
- 网站必须在 1440x900 桌面端和 390x844 移动端正常工作且零控制台错误；步进器、标签、选择器和两个表单仅用键盘即可操作，并具有可见的 Amberglow 焦点环。
- 文案保持低调具体：无 lorem，无“mixology journey”；每一款饮品、价格和夜晚都存放在 src/content.ts 中。

---
— Prompt by VibeFather · https://vibefather.ai/t/cocktail-bar-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
