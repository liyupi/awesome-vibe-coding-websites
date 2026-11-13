> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 密室逃脱网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简要说明
为 [BRAND] 打造的单页网站，[BRAND] 是位于 [CITY] 的一家密室逃脱场馆，设有四个虚构主题房间。页面以氛围为先：近乎黑色的纹理底色、一处琥珀色光晕、宽字距的黑色电影风格字体，以及深阴影中仅用单一实用光源拍摄的房间照片。访客可以浏览房间、为同行伙伴预留晚间时段，并查看团建套餐。一切都在浏览器中运行。

- 受众：[CITY] 的朋友聚会群体、下班后的团队以及企业活动组织者，他们想找一个 60 分钟的挑战，并希望无需反复电话沟通就能锁定一个晚间时段。
- 目标：让访客选定一个房间、按同行人数预留时段（保存在本地，并如实标注），或致电咨询私人团队之夜。
- 语调：黑色电影式的自信：简短陈述句，带一点冷幽默，绝不浮夸做作。房间低语；琥珀色光晕负责大声宣告。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react + react-dom 18（MIT）、motion（motion.dev）11（MIT）、lucide-react（ISC）、@fontsource/bebas-neue、@fontsource/barlow、@fontsource/space-mono（OFL）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置（Setup）：
  - 使用 react-ts 模板通过 npm create vite@latest 脚手架创建项目。项目根目录下只有一个 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。切勿将 src/ 复制到 dist/ 中。
  - Tailwind 3.4 通过 PostCSS 接入，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中将设计颜色（Design colors）添加到 theme.extend.colors（ink、char、smoke、bone、ash、amberGlow、amberDeep、rule），字体族（font families）display/text/mono，以及字距令牌（letter-spacing tokens）（tracking-noir 0.16em、tracking-wide-caps 0.12em）。
  - src/fonts.ts 导入 @fontsource/bebas-neue、@fontsource/barlow/400.css、500.css、600.css，以及 @fontsource/space-mono/400.css、700.css。从 src/main.tsx 导入 fonts.ts。
  - 全局 CSS 位于 src/index.css：body 背景为 ink，带有固定的细颗粒纹理（内联 SVG feTurbulence data-URI，3% 不透明度，pointer-events none，z-0），选中颜色为 ink 上的 amberGlow，focus-visible 轮廓为 1px amberGlow。
  - src/content.ts 存放所有字符串和数据结构：rooms（slug、name、locks 1-5、players、teaser、image、alt）、dayChips、带 dark-hours 规则的 slots、party range、packages、faqs、address、hours、phone、rate、brand。文案不得存放在其他任何地方；当变量变化时，构建器会重写此文件。
  - src/lib/brand.ts：brandSlug = [BRAND] 转为小写，非字母数字字符折叠为连字符；localStorage 键 `${brandSlug}:hold` 以 JSON 存储 { room, day, slot, players }。
  - 组件位于 src/components/：Header.tsx、Hero.tsx（包含 DustCanvas）、Reveal.tsx（Motion whileInView 包装器，淡入 + 24px 上移，480ms，80ms 交错）、RoomCard.tsx、Booking.tsx（DayChips、SlotGrid、Stepper、SummaryPanel）、TeamBuilding.tsx、Faq.tsx、Footer.tsx。
  - DustCanvas：在 hero 照片上方绘制 60 个粒子的 canvas，粒子为 1-2px 的 amber，3% 不透明度，通过 requestAnimationFrame 缓慢向左上漂移；在 prefers-reduced-motion 下绘制一帧静态画面后停止。
  - public/favicon.svg：一个 64px 的圆角方块，颜色为 #0B0A08，带有简单的 amber 钥匙剪影（代码绘制）。构建前将六张照片从 Assets 下载到 public/images/；在项目根目录写入 ASSETS.md。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张 webp 图片。保持在 20 MB 以下。

## 变量
- [BRAND] — 场馆名称（默认：“Vault Nine”）。虚构的密室逃脱品牌。用于字标、页面标题、brandSlug（localStorage 键）以及每一处提及。绝不使用真实场馆或加盟品牌。
- [CITY] — 城市（默认：“Portland, Oregon”）。场馆所在地。出现在主视觉眉题和页脚地址中。可以使用真实城市。
- [SIGNATURE_ROOM] — 旗舰房间（默认：“The Last Signal”）。主打房间：第一张房间卡片、预订面板中的默认选项，以及主视觉文案所依托的房间。
- [RATE] — 每位玩家价格（默认：“$38”）。每个房间每位玩家的价格字符串。用于每张房间卡片、预订总价计算（玩家数 × RATE）以及团建介绍。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/escape-room-website（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- Ink `#0B0A08` — 所有页面的底色 — 关灯的房间，带有 3% 细颗粒噪点纹理。
- Char `#15120D` — 卡片凹槽、预订摘要面板、FAQ 行、移动端菜单遮罩。
- Smoke `#1F1B15` — 悬停表面、标签填充、步进按钮。
- Bone `#EDE5D3` — 主文本：标题、正文、导航、深色背景上的按钮。
- Ash `#9C9080` — 次要文本：眉题、预告、说明文字、未选中的时段。
- Amber Glow `#E2A13C` — 唯一强调色：CTA 填充、锁图标、价格、选中的标签、光晕脉冲、焦点环。
- Amber Deep `#B87E23` — 琥珀色悬停和按下状态。
- Rule `#2B261E` — 1px 细线：卡片边框、页眉底边、FAQ 分隔线、步进器轮廓。

### 字体排印（Typography）
- Display — 字标、H1、H2、房间名称、面板标题。Bebas Neue，始终大写，letter-spacing 0.16em（房间卡片上为 0.12em），紧凑行高 1.05：Bebas Neue (OFL)，字重 400
- Text — 正文、预告、导航、按钮（Barlow 600 大写，标签字距 0.12em）：Barlow (OFL)，字重 400/500/600
- Mono — 时段、价格、人数、电话号码、hero 下方的房间索引：Space Mono (OFL)，字重 400/700

### 布局与动效（Layout & motion）
- 间距：桌面端区块间距 112px，移动端 72px；容器 1200px，两侧内边距 32px。卡片留白：内部内边距 32px，网格间距 32px。hero 高度 92vh，文案垂直居中。
- 圆角：锐利，如业务本身：卡片、面板和图片为 2px；仅日期标签和时段胶囊为 999px；CTA 为 2px 矩形。
- 动效：慢就是重点：显现效果在 480ms 内淡入并上移 24px，错开 80-90ms；没有任何突变。
- 动效：琥珀色强调色会呼吸 — CTA 和字标下划线运行 6s 的 text-shadow/box-shadow 脉冲（不透明度 1.0 到 1.15），在 prefers-reduced-motion 下完全停止。
- 动效：尘埃微粒：60 个琥珀色粒子以 3% 不透明度在 hero 中向左上漂移；reduced-motion 下绘制一帧静态画面。
- 动效：悬停：房间照片在 300ms 内从 0.9 提亮到 1.05；标签按下时缩放到 0.96；人数变化时预订总额在 180ms 内交叉淡入淡出。
- 动效：手风琴：220ms 高度缓动，ChevronDown 旋转 180deg。
- 图像：一次黑色电影风格拍摄：每张照片都是深阴影中的房间或道具，由单一温暖琥珀色实用光源照亮，细腻胶片颗粒，无人物、无可读文字、无标识。hero 展示金库房间全景；房间卡片展示该房间的标志性道具；团队部分展示简报休息室。永远不要提亮到超出该调色。

## 页面与区块
### [BRAND] — 房间、预订、团队之夜与常见问题，尽在一个深色页面（`index.html`）
1. **页头（Header）** — 粘性页头，在英雄区上方透明，滚动 24px 后变为实心 Ink 色，底部带 1px Rule 细线。左侧：字标 [BRAND]，Bebas Neue 24px，0.18em 字距，Bone 色，最后一个词下方有 2px Amber Glow 下划线，缓慢脉动。中间导航（桌面端）：Rooms、Book、Teams、FAQ — Barlow 500，12px 大写，0.12em 字距，Ash 到 Bone 的 150ms 淡入；每项滚动到对应锚点。右侧：电话 (503) 555-0173，Space Mono 13px，带 Phone 图标（16px，Ash），以及紧凑 CTA 'Book a room' — Amber Glow 填充，Ink 文字，Barlow 600 大写，2px 圆角。移动端：字标加汉堡菜单（两条 1px Bone 线），打开全屏 Ink 覆盖层，四个锚点以 Bebas Neue 32px 堆叠，电话号码在底部。
   布局：单行，1200px 容器，20px 垂直内边距。移动端覆盖层覆盖视口，内容左对齐并垂直居中。
   动效：页头背景在滚动时交叉淡入为实心；汉堡覆盖层淡入并上移 12px，200ms；链接错开 40ms。
2. **英雄区（Hero）** — 全出血 hero-vault-room.webp，高度 92vh，object-cover，照片上覆盖从左到右的 Ink 渐变（rgba(11,10,8,0.92) 到 60% 处透明），全局噪点纹理位于两者之上。文案块左对齐并垂直居中：眉题 'ESCAPE ROOMS — [CITY]'，Barlow 600 大写 12px，0.32em 字距，Ash。H1 为 [BRAND]，Bebas Neue，clamp(64px, 10vw, 148px)，0.16em 字距，Bone，带微弱琥珀色文字阴影（0 0 24px rgba(226,161,60,0.25)）。副行：'Four rooms. Sixty minutes each. One way out — bring people you trust.' Barlow 400 18px，Ash，最大宽度 46ch。CTA：'Book a room'（Amber Glow 实心）和 'See the rooms'（幽灵按钮，1px Rule 边框，Bone 文字）。左下角，首屏边缘上方：四个房间名作为安静索引，Space Mono 11px，以琥珀色斜杠分隔 — 'THE LAST SIGNAL / THE CLOCKMAKER'S DEBT / THE RED LEDGER / HALL OF SECOND THOUGHTS'。
   布局：文案位于 1200px 容器的左侧 55%；照片填满其后整个视口宽度。移动端：照片作为全背景，文案底部对齐，24px 内边距。
   动效：加载时，眉题、H1、副行和 CTA 以 80ms 间隔错开进入（淡入 + 上移 24px，500ms）。H1 字距从 0.28em 过渡到 0.16em，历时 900ms — 微妙，仅一次。DustCanvas 在照片上运行；减少动效模式跳过所有动效，字距直接渲染为最终值。
3. **房间（Rooms）** — 眉题 'THE ROOMS'（Barlow 600 大写，0.32em，Ash）和 H2 'Pick your hour.'，Bebas Neue 44px。四张卡片在 2×2 网格中（移动端 1 列）。每张卡片：房间道具照片 4:3（saturate 0.8，brightness 0.9；悬停 brightness 1.05），1px Rule 边框，Char 背景，32px 内边距。照片下方：房间名 Bebas Neue 28px 0.12em；难度以五个 Lock 图标（16px）表示，n 个填充 Amber Glow，其余为 Rule 色，后跟如 '4 of 5' 的标签；人数 '2–6 players' 带 Users 图标；一行预告 Barlow 15px Ash；价格 '[RATE] per player'，Space Mono 15px Amber Glow。精确房间数据：The Last Signal — 4 把锁，2–6 名玩家，'The radio tower answers one question before midnight.' The Clockmaker's Debt — 3 把锁，2–5 名玩家，'Wind the wrong spring and the workshop keeps you.' The Red Ledger — 2 把锁，2–4 名玩家，'A burnt-out detective left the case half-solved.' Hall of Second Thoughts — 5 把锁，4–8 名玩家，'The mirrors disagree about the exit.' 每张卡片以 'Choose this room' 文字链接结尾（Barlow 600 大写，琥珀色，箭头），滚动到预订面板并预选该房间。
   布局：2×2 网格，32px 间距，卡片 1fr；区块位于 Ink 上，带噪点纹理。
   动效：卡片在滚动时成对显现（淡入 + 上移 24px，480ms，90ms 错开）。'Choose this room' 平滑滚动，预订面板的房间选择更新，边框闪烁 Amber Glow 一次。
4. **预订（Booking）** — 桌面端两列 7/5，移动端堆叠，位于 H2 'Hold an evening.' 下方。左列：七个日期芯片 — MON TUE WED THU FRI SAT SUN — 作为 999px 胶囊（Rule 边框，Space Mono 13px，Ash；选中：Amber Glow 边框和文字，Char 背景）。这些是示例周模式，永远不是日期。下方，五个时段按钮，Space Mono 15px：17:00、18:30、20:00、21:30、23:00。周一至周四，23:00 时段以 40% 不透明度变暗渲染，附说明 'dark hours — ask us'；周五和周六保留全部五个。始终有一个时段可选。右列：摘要面板，Char 背景，1px Rule 边框，2px 圆角，32px 内边距 — 房间选择（四个房间，默认 [SIGNATURE_ROOM]），人数步进器从 2 到 8（Minus / 计数 Space Mono 20px / Plus），然后摘要行 'Room'、'Evening'（日期 + 时段）、'Players' 和显示计算的总计行：'4 × [RATE] = $152'，总计 Space Mono 24px Amber Glow。按钮 'Hold this slot'（Amber Glow，全宽）。按下时将 { room, day, slot, players } 保存到 localStorage 的 `${brandSlug}:hold` 下，并将面板内容切换为确认状态：Check 图标、'Held on this device' 和 'Nothing was paid or sent. Call (503) 555-0173 to confirm — we answer Wed–Sun from noon.' 以及一个 'Change hold' 链接，返回预填的表单。
   布局：7/5 网格，48px 列间距；摘要面板在桌面端粘性定位 top 96px，日期芯片滚动。
   动效：芯片和时段按下时缩放到 0.96；选择交叉淡入 180ms；人数变化时总计行交叉淡入；确认状态淡入并上移 12px，240ms。
5. **团队建设（Team building）** — H2 'Nights that build teams.'，Ash 色介绍行：'Same rooms, private floor, and a leaderboard nobody forgets.' 左侧：lounge-team.webp 4:3，黑色电影调色，1px Rule 边框。右侧：三行套餐，以 Rule 细线分隔 — The Warm-Up，'$49 per player'，'one room, coffee after'；The Full Night，'$79 per player'，'two rooms, pizza between'；The Lockout，'$119 per player'，'private floor, three rooms, engraved trophy'。名称 Bebas Neue 24px，价格 Space Mono Amber Glow，描述 Barlow 15px Ash。脚注行：'Packages are sample tiers for this template — weekday blocks from 17:00, up to 32 players. Call (503) 555-0173 and ask for the night desk.'
   布局：5/7 图片到列表分割，48px 间距；移动端堆叠，图片在前。
   动效：图片和行以标准 480ms 淡入上移动效显现；每行价格在行悬停时从 Ash 变亮为 Amber Glow（200ms）。
6. **常见问题（FAQ）** — H2 'Before you knock.' 四行手风琴，Char 背景，Rule 分隔线。What if we get stuck? — 'Ask the radio. Hints are unlimited and the game master is paid to be mysterious, not cruel.' Is it scary? — 'Tense, never horror. Our darkest room still has a light switch — finding it is the puzzle.' Can two people play? — 'Yes. The Hall prefers three or more; the Ledger was built for pairs.' What should we bring? — 'Nothing but wits and closed shoes. Lockers, pencils and nerves provided.' 问题 Barlow 600 17px Bone；答案 Barlow 400 15px Ash，最大 60ch。
   布局：单列 760px，左对齐，行间 1px Rule 分隔线。
   动效：行点击以 220ms 高度缓动打开；ChevronDown 旋转 180deg；一次只开一行；第一行默认打开。
7. **页脚（Footer）** — Rule 细线，然后 Ink 上的三部分页脚：字标重复，Bebas Neue 20px；联系块 — 'Sublevel 3, 44 Mercer Lane, [CITY]' 带 MapPin，'Wed–Sun 16:00–23:30' 带 Clock，'(503) 555-0173' 带 Phone；以及四个锚点链接重复，Barlow 12px 大写。底部行 Ash 13px：'Every room, price and package on this page is an invented example.' 后跟可选的 [CREDIT] 链接。
   布局：桌面端三列（字标左，联系中，链接右），移动端堆叠，32px 间距。
   动效：无 — 页脚静止。

## 资源（Assets）
- 图片（image）：为本模板制作的六张黑色电影风格照片，可随模板一起再分发。构建前，用 curl -L -o 将每张图片下载到 public/images/。https://media.vibefather.ai/assets/7212bd1d-e397-44e0-af1e-bba82a902104/hero-vault-room.webp -> public/images/hero-vault-room.webp（首屏背景；alt 'A brick vault room in near darkness, one hanging bulb over a table of brass cogs and an open blank ledger'）；https://media.vibefather.ai/assets/7212bd1d-e397-44e0-af1e-bba82a902104/prop-radio.webp -> public/images/prop-radio.webp（The Last Signal 卡片；alt 'A vintage valve radio in the dark, its unmarked dial glowing amber'）；https://media.vibefather.ai/assets/7212bd1d-e397-44e0-af1e-bba82a902104/prop-clockwork.webp -> public/images/prop-clockwork.webp（The Clockmaker's Debt 卡片；alt 'A workshop wall of brass gears lit by one amber lamp'）；https://media.vibefather.ai/assets/7212bd1d-e397-44e0-af1e-bba82a902104/prop-desk.webp -> public/images/prop-desk.webp（The Red Ledger 卡片；alt 'A brass lamp glowing over a rotary telephone and blank ledger pages'）；https://media.vibefather.ai/assets/7212bd1d-e397-44e0-af1e-bba82a902104/prop-mirror.webp -> public/images/prop-mirror.webp（Hall of Second Thoughts 卡片；alt 'An ornate mirror at the end of a dark corridor catching one amber light'）；https://media.vibefather.ai/assets/7212bd1d-e397-44e0-af1e-bba82a902104/lounge-team.webp -> public/images/lounge-team.webp（团队建设区块；alt 'A briefing lounge of worn leather chairs around a low table, lit by one floor lamp'）。在 ASSETS.md 中为每张图片注明：'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.'
- 图标（icon）：仅使用 lucide-react：Phone、Lock、Users、Clock、MapPin、ChevronDown、Check、Plus、Minus、ArrowRight。描边宽度 1.75，尺寸 16-24px，颜色继承。钥匙 favicon 是用代码绘制的 SVG，不是图标字体。不使用其他图标集。
- 字体（font）：@fontsource/bebas-neue（400）、@fontsource/barlow（400、500、600）、@fontsource/space-mono（400、700），在 src/fonts.ts 中导入，以便 Vite 将 woff2 文件打包进 dist/。绝不从 CDN 加载字体。

## 禁止事项
- 无后端、无 API、无表单提交：预订保留仅保存到 localStorage，确认文案明确说明未支付任何款项、未发送任何内容。
- 不使用真实的密室逃脱品牌、加盟店或房间名称；四个房间、套餐、排行榜文案和电话号码均为本模板虚构。
- 照片仅展示房间和道具——不出现演员面部、不出现手部、无可读文字、无标识；切勿向演示中添加人物照片。
- 不显示日历日期、不显示实时时钟：日期标签为固定的 MON–SUN 示例模式，时段为五个固定示例时间，网站从不显示当天日期。
- 团建档位为虚构示例定价；不得提及任何真实团建公司名称。
- 一切资源自托管：字体通过 Fontsource，图标通过 lucide-react，图片下载至 public/images/ ——不使用 CDN 脚本或链接标签，不使用分析工具。
- 静态构建：压缩，无 source map，不将 src/ 复制到 dist/，一条命令 npm run build，输出位于 dist/ 且小于 20 MB。
- 内部链接为指向 ./index.html 的锚点（#rooms、#book、#teams、#faq）；绝不链接到裸目录。
- 遵循 prefers-reduced-motion：无光晕脉冲、无尘埃飘移、无追踪沉降——显现变为即时，页面保持完全可读。
- 在 1440×900 桌面端和 390×844 移动端正常工作，控制台零错误；所有交互控件均可通过键盘访问，并带有可见的琥珀色焦点环。
- 无 SEO 机制：带有 [BRAND] 的普通标题和 favicon 即可——无 meta 描述、Open Graph 标签、JSON-LD 或站点地图。
- 绝不在网站内提及 VibeFather 或任何真实品牌；所有文案为虚构美式英语，每个字符串均位于 src/content.ts。

---
— Prompt by VibeFather · https://vibefather.ai/t/escape-room-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
