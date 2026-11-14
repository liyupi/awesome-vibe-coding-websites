> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 兽医诊所网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的两页网站，[BRAND] 是位于 [CITY] 的一家小动物兽医诊所，联系电话 [PHONE]，自 [FOUNDED] 年起营业。它必须让人感觉像一家好诊所应有的气味：平静、温暖、专业。首页：带有承诺的主视觉区、一条让人不可能错过、也不可能引发恐慌的急诊信息带、六项服务、三位兽医简介、四条常青护理小贴士。到访页：营业时间及“当前营业”指示、手绘迷你地图、非营业时间详情以及新患者表单（客户端）。页面：index.html、visit.html。一切都在浏览器中运行；不会向任何地方提交数据。

- 受众：住在短途车程内的宠物主人：养狗和猫的家庭、偶尔养兔子的人、略带慌张的首次领养者。他们想要服务、营业时间、急诊电话和一位能想象出其样貌的兽医——按这个顺序，快速地，通常是在手机上。
- 目标：预约初诊，并成为紧急情况下被保存的号码。访客在十秒内看到护理承诺、营业状态和急诊电话。
- 语气：温暖、平实、不慌不忙——大家希望遇到的那位前台接待员。短句，术语必附解释，对宠物有温和的幽默（绝不针对主人）。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（MIT）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/comfortaa（OFL-1.1）、@fontsource-variable/albert-sans（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化设置：
  - 使用 npm create vite@latest 并选择 react-ts 模板搭建项目。项目根目录下有两个真实的 HTML 页面：index.html（入口 src/main-home.tsx）和 visit.html（入口 src/main-visit.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0, rollupOptions { input { index: resolve(__dirname, 'index.html'), visit: resolve(__dirname, 'visit.html') } } }。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4，content 为 ['./index.html', './visit.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将 Design 下的所有颜色以 kebab-case 键名添加到 theme.extend.colors（warm-white、mist、card、teal、teal-deep、teal-mist、ink、slate、honey、honey-deep、coral-alert、rule），并设置 fontFamily display ['Comfortaa', 'Georgia', 'serif']、sans ['Albert Sans Variable', 'system-ui', 'sans-serif']。将 borderRadius 的 DEFAULT 设为 16px，并添加 maxWidth { container: '1160px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/comfortaa/500.css'、'@fontsource/comfortaa/700.css' 和 '@fontsource-variable/albert-sans'；在两个入口文件中导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（所有字符串、服务、兽医、提示、营业时间、急诊电话、表单标签和图片路径，均带类型），src/lib/brand.ts（brandSlug = [BRAND] 转为小写并将每一段连续的非字母数字字符替换为 '-'，phoneDigits = [PHONE] 仅保留数字用于 tel:，emailDomain = brandSlug 去掉连字符 + '.com'），src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键名前缀为 brandSlug + ':'），src/lib/useOpenNow.ts（根据营业时间表和客户端时钟判断 open-now）。
  - 状态：src/store/patient.ts 是一个小型外部 store（useSyncExternalStore），保存表单草稿 { petName, species, age, reason, ownerName, ownerPhone } 和 submitted 标志，持久化到 localStorage 键 brandSlug + ':patient'。已保存的登记会渲染确认卡片；'Start another' 会清除它。
  - 组件位于 src/components/：Header.tsx、MobileMenu.tsx、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、PawIcon.tsx（手绘 SVG 爪印）、Footer.tsx；首页：Hero.tsx、EmergencyBand.tsx、Services.tsx（ServiceCard.tsx）、Vets.tsx（VetCard.tsx）、CareTips.tsx；到访页：HoursCard.tsx（OpenNowPill.tsx）、MiniMap.tsx（内联 SVG）、OutOfHours.tsx、PatientForm.tsx（SpeciesPicker.tsx、ConfirmationCard.tsx）。src/pages/Home.tsx 和 Visit.tsx 组合它们；两个页面都渲染 Header 和 Footer。
  - 首次构建前，使用 curl -L -o 并按照给定的确切文件名，将 Assets 下列出的每张图片下载到 public/images/ 中。构建本身从不获取任何内容。
  - public/favicon.svg 如 Assets 所述。两个 HTML 文件：lang en，<meta name='theme-color' content='#FDFBF7'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>。标题：index.html '<title>[BRAND] — Gentle care for [CITY]''s pets</title>'，visit.html '<title>Visit us — [BRAND]</title>'。（保持撇号实体正确。）
  - 在项目根目录下按 Assets 所述编写 ASSETS.md。
  - dist/ 包含两个 HTML 文件、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张图片。保持在 10 MB 以下。

## 变量
- [BRAND] — 诊所名称（默认："Pinebrook Animal Clinic"）。虚构的诊所名称。用于字标、标题、页脚、电子邮件（hello@ + 不含连字符的 brandSlug + .com）以及 localStorage 键。绝不是真实诊所或连锁品牌。
- [CITY] — 城市（默认："Asheville, North Carolina"）。诊所所在地。用于主视觉区、迷你地图标签、路线指引文案和页脚。真实城市可以；街道保持虚构。
- [PHONE] — 电话（默认："(828) 555-0143"）。主线路，使用 555 交换号格式。用于页眉、紧急联系条（主线路）、页脚和 tel: 链接。非工作时间线路是 content.ts 中的第二个虚构号码。
- [FOUNDED] — 开业年份（默认："2009"）。四位数字年份。驱动字标行 'Caring since [FOUNDED]'、故事文案行和一位兽医的任职年限。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/veterinary-clinic-website（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 暖白（Warm White）`#FDFBF7` — 两个页面的页面背景。
- 薄雾（Mist）`#F0EFE9` — 交替区块背景（服务、护理小贴士）、悬停填充。
- 卡片（Card）`#FFFFFF` — 卡片、表单面板、确认信息、营业时间卡片。
- 青绿（Teal）`#2C6E63` — 主色：标题强调、主按钮、服务图标、营业中圆点、焦点环。
- 深青绿（Teal Deep）`#1F5349` — 主色悬停、页脚背景、紧急提示条文字。
- 青绿薄雾（Teal Mist）`#E3EEEA` — 选中标签、兽医头像圆圈、服务图标底槽。
- 墨色（Ink）`#22302C` — 标题和正文文字、图标颜色。
- 石板灰（Slate）`#5E6B66` — 次要文字、说明文字、眉题、营业时间标签。
- 蜂蜜色（Honey）`#D9A441` — 暖色强调：免费价格高亮、星级时刻、爪印、护理小贴士图标、“新患者”标签。
- 深蜂蜜色（Honey Deep）`#B8862F` — 蜂蜜色悬停状态、表单焦点刻度。
- 珊瑚警示（Coral Alert）`#C75146` — 仅用于紧急提示条：提示条边框、电话图标和脉冲圆点 — 平静、克制、绝不闪烁。
- 分隔线（Rule）`#E4E1D8` — 1px 细线、卡片边框、输入框边框、地图等高线。

### 字体排印
- 展示字体：H1、H2、H3、服务和兽医名称、字标、表单标题：Comfortaa (OFL)，字重 500/700
- 文本和界面：正文、眉题、按钮、表单、说明文字、营业时间（时间使用等宽数字）：Albert Sans (OFL)，字重 400/600/700

### 布局与动效
- 间距：8px 基础单位。容器最大宽度 1160px，居中，侧边内边距桌面端 48px，平板端 32px，640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面端 104px，1024px 以下 80px，640px 以下 64px。字号比例：H1 clamp(42px, 6vw, 76px) Comfortaa 700，行高 1.05；H2 clamp(30px, 4vw, 48px) Comfortaa 700；H3 22px Comfortaa 700；导语 Albert Sans 400 18px / 1.7 Ink 90%；正文 16px / 1.7（最大宽度 64ch）；眉题 Albert Sans 700 12px 大写 字间距 0.16em Slate，前面有一个小的手绘爪印，颜色为 Teal；说明文字 13px Slate。按钮：高度 52px，Albert Sans 700 15px。主按钮：Teal 填充，Card 文字。次按钮：1px Teal 边框，Teal 文字。紧急 CTA：Coral Alert 轮廓，Coral Alert 文字（绝不填充 — 保持平静）。输入框：高度 50px，1px Rule 边框，Card 填充，焦点时 Teal 边框。全局焦点环：2px Teal 轮廓，偏移 3px。
- 圆角：卡片、按钮、输入框、标签、照片、表单面板为 16px。仅胶囊、营业中圆点、兽医首字母和爪印圆点为 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于表单切换和手风琴。轻柔、从容 — 候诊室的节奏。
- 动效：显现：包裹在 <Reveal> 中的区块从 opacity 0、translateY(14px) 开始，在 15% 可见时（Motion whileInView，viewport once）以 700ms --ease-out 稳定下来。同级元素错开 80ms。
- 动效：主视觉照片：加载时在 2400ms 内从 1.05→1.0 缩放；一条手绘爪印轨迹（三个小 SVG 爪印）沿主视觉底部边缘淡入，错开 200ms（在减少动效下关闭）。
- 动效：紧急提示条：脉冲圆点呼吸（scale 1→1.2，1800ms 循环，在减少动效下关闭）；提示条本身是静态的 — 紧迫但不惊慌。
- 动效：服务卡片：悬停上浮 3px，图标底槽填充 Teal Mist；图标的描边每次悬停重绘一次。
- 动效：兽医卡片：悬停时头像上浮 2px，并将专长行切换为床边引言（240ms 交叉淡入淡出）。
- 动效：表单：物种标签选中时填充 Teal Mist（150ms）；无效提交抖动 4px 一次并显示内联提示；提交时面板滑向 ConfirmationCard（280ms --ease-io），同时一个手绘的心形爪印印章缩放进入；“开始另一个”反向执行。
- 动效：营业时间：营业中圆点仅在营业时脉冲；今日行带有 2px Teal 左边线，在午夜时在日期之间滑动（交叉淡入淡出）。
- 动效：MiniMap：进入视图时，道路线绘制（900ms），然后图钉带着一次柔和的过冲弹入；公园区块最后填充。
- 动效：链接：.link-draw 在悬停和 focus-visible 时于 280ms 内生长出 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 无脉冲、绘制、错开或缩放；颜色/边框悬停保留。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：温暖的真实摄影，全部六张为本模板以一致风格制作：柔和日光、暖白和木色配青绿点缀、动物放松，兽医肖像为 AI 生成的虚构人物，展示与动物患者一起工作的场景（一致的温暖诊所光线）；它们是占位符，真实诊所会替换为自己的员工照片；所有其他照片仅限动物和房间。每张照片使用 object-fit cover，object-position 见资源部分，16px 圆角，无阴影；暖白背景上的照片获得 1px Rule 轮廓。说明文字为 Albert Sans 13px Slate。代码绘制：爪印、服务图标保持 lucide、心形爪印印章、迷你地图、标签和 favicon。图标：仅 lucide-react，描边宽度 1.75。

## 页面与区块
### 首页（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[BRAND] = Pinebrook Animal Clinic，[CITY] = Asheville, North Carolina，[PHONE] = (828) 555-0143，[FOUNDED] = 2009）。将每个字符串和数字放入 src/content.ts 并从中渲染；两个页面共用一个内容文件。如果任何变量值不同，请重写 hero、services、vets、tips、hours、emergency 文案和表单文案，使其对新诊所具体且可信，同时保持相同的结构和数量（6 项服务、3 位兽医、4 条建议、5 个紧急步骤）。所有兽医、员工和故事均为虚构。事实：地址 '47 Fernbrook Lane, [CITY]'；营业时间 Mon–Fri 8:00–18:00, Sat 9:00–14:00, Sun closed；非工作时间电话 '(828) 555-0190'（虚构）；猫、狗和小型宠物（兔子、豚鼠）；三位兽医：Dr. Ana Reyes（猫和老年护理）、Dr. Owen Baptiste（狗和手术）、Dr. Priya Nair（小型宠物和牙科）；新患者就诊 40 分钟；前台提供零食，'freeze-dried liver, the good stuff'。兽医肖像为 AI 生成的虚构人物，与默认名单匹配（不 resemblance 任何真实个人）；alt 保持 'A fictional veterinarian at work'。
   布局：不适用
   动效：不适用
2. **页眉（所有页面）** — 左侧：文字标识——一个绘制的爪形符号，Teal 色 + '[BRAND]'（Comfortaa 700 18px），下方为 'Caring since [FOUNDED] · [CITY]'（Albert Sans 600 10px 大写 字间距 0.18em）——链接到 ./index.html。右侧导航（Albert Sans 600 14px）：'Services' → ./index.html#services，'Our vets' → ./index.html#vets，'Visit us' → ./visit.html，以及一个小的 Teal 色 'New patient' 按钮 → ./visit.html#register。低于 820px：汉堡菜单打开全屏 Mist 菜单（Comfortaa 链接 26px，按钮固定在底部）。
   布局：粘性顶部，高度 76px，Warm White/92% 模糊，带 Rule 边框。移动菜单从右侧滑入。
3. **Hero** — 两列。左侧：眉题爪形 'SMALL-ANIMAL CARE IN [CITY]'；H1 'They''re family.' / '*We treat them that way.*'；导语（最大宽度 520px）：'Cats, dogs and the small furry friends in between — seen gently, explained clearly, and sent home with a treat they didn''t earn but deserve. Independent and neighborhood-run since [FOUNDED].'；按钮：主按钮 'Book a first visit' → ./visit.html#register，次按钮 'Call [PHONE]'（tel:）。信任行：三个短项，带绘制的对勾——'40-minute first visits'；'Fear-free handling, treats first'；'Same-day sick appointments'。右侧：hero-clinic.webp（4:3，诊所的猫在接待台上睡觉），配文 'Buttercup, head of greetings'。
   布局：Warm White 背景，垂直内边距顶部 112px。左侧 6 列，右侧 5 列偏移 1。信任行作为一条细线顶部的三行，16px 间距。
4. **紧急横幅** — hero 和 services 之间的全宽横幅：Card 上 2px Coral Alert 左边框，一个呼吸的 Coral Alert 圆点，'Emergencies: don''t wait, don''t Google'（Comfortaa 700 20px），以及两行：'In hours: call [PHONE] — we hold space every day for emergencies.' / 'Out of hours: call (828) 555-0190 — the answering service pages the on-call vet.' 右侧：一个小链接 'What counts as an emergency →' → ./visit.html#emergency。平静的排版，无红色填充，无闪烁。
   布局：容器对齐的横幅，20px 垂直内边距，Card 填充，1px Rule 边框带 2px Coral 左边线；低于 768px 时链接换行到下方。
5. **服务** — 区块 id='services'。眉题 'WHAT WE DO' 和 H2 'Six things, done gently.' 卡片（图标，标题 Comfortaa 700 18px，两行）：1）Stethoscope 'Wellness exams' — 'Nose-to-tail once a year, longer for seniors; you leave with a plan, not a pamphlet.' 2）Scissors 'Dentistry' — 'Cleanings, extractions and the breath conversation, handled kindly both ways.' 3）Syringe 'Surgery & recovery' — 'Routine to complex, with soft warm blankets and a call the moment they''re awake.' 4）Microscope 'Diagnostics in-house' — 'Bloodwork and x-rays on site — answers while you wait, not next week.' 5）HeartHandshake 'Senior care' — 'Comfort-first plans for gray muzzles: joints, kidneys, and quality of Tuesday.' 6）Plane 'Travel papers' — 'Health certificates for trips, minus the paperwork panic.'
   布局：Mist 背景。3x2 网格 20px 间距；卡片在 Card 上 1px Rule 边框 20px 内边距；图标 22px Teal 在 44px Teal Mist 圆角方块中。低于 860px：2 列，低于 640px：一列。
6. **我们的兽医** — 区块 id='vets'。眉题 'The vets' 和 H2 'Three people your pet will actually like.' 卡片带 AI 生成的工作肖像（4:3）——诊所 teal 世界中的虚构兽医：1）vet-ana.webp，alt 'Dr. Reyes examining a tabby cat, a fictional veterinarian' — Dr. Ana Reyes — 'Cats · Senior care' — 'Twelve years of bribing cats into friendship; slow blinks preferred.' — 引语 '*"The exam starts in the carrier, not on the table."*' — 'Mon–Thu'。2）vet-owen.webp，alt 'Dr. Baptiste with a golden retriever, a fictional veterinarian' — Dr. Owen Baptiste — 'Dogs · Surgery' — 'Ex-big-animal vet; still speaks fluent farm dog. Gentle hands, terrible dog jokes.' — '*"A wagging tail is vital data."*' — 'Tue–Fri'。3）vet-priya.webp，alt 'Dr. Nair weighing a lop-eared rabbit, a fictional veterinarian' — Dr. Priya Nair — 'Small pets · Dentistry' — 'Rabbits, guinea pigs, and anyone whose teeth need diplomacy.' — '*"Small patients, small instruments, same respect."*' — 'Wed–Sat'。
   布局：Warm White 背景。三列 24px 间距；Card 带 24px 内边距：工作肖像顶部（宽高比 4:3，16px 圆角），姓名 Comfortaa 700 20px，专长 Albert Sans 700 12px 大写 Honey Deep，行 14.5px Slate，引语 Comfortaa 500 斜体 15px Ink，天数说明。
7. **护理建议和 CTA** — 眉题 'FOUR HABITS' 和 H2 'The boring stuff that adds years.' 建议卡片（Honey 图标，标题，2 行）：1）Scale 'Weight is the whole game' — 'Most pets live longer lean; your vet can show you the ribs-to-rub test in ten seconds.' 2）Smile 'Teeth before trouble' — 'Dental pain hides; if chewing changes or breath changes, that''s the appointment to make.' 3）Puzzle 'A tired pet is a good pet' — 'Ten minutes of sniffing beats an hour of treadmill — brains need walks too.' 4）Car 'Practice the carrier' — 'Leave it out, feed in it, make it furniture; then it isn''t a trap on visit day.' CTA 横幅在 Teal Deep 上：'First visits take forty minutes and end with a treat.' + primary-on-dark 'Register your pet' → ./visit.html#register + 说明 'Or call [PHONE] — a human answers.'
   布局：Mist 区块带 2x2 建议网格（16px 间距，Card 瓷砖）；CTA 横幅全宽在下方，两列，72px 内边距。
8. **页脚（所有页面）** — Teal Deep 背景，Card 色调文字。四列：1）爪形文字标识 + '[BRAND]' 在 'Caring since [FOUNDED] · [CITY]' 上方。2）'Find us'：'47 Fernbrook Lane, [CITY]'，[PHONE] tel:，hello@ + emailDomain。3）'Hours'：Mon–Fri 8:00–18:00, Sat 9:00–14:00, Sun closed — 'Closed Sundays; emergencies page the on-call vet.' 4）'Around'：Services, Our vets, Visit us, New patient。底部行：'© [BRAND]. All patients, all treats.'
   布局：垂直内边距 72px，4 列，底部行在 Card/15% 规则下方 40px。低于 768px：两列，然后堆叠。

### 到访（`visit.html`）
1. **页头（Masthead）** — 实心页头。眉题爪印 'VISIT US'，H1 'Where we are, when we''re in.'，导语：'Hours, directions, what to do at 2am, and the new-patient form — everything for a first visit on one page.'
   布局：暖白（Warm White）背景，垂直内边距顶部 136px + 48px，底部细线。H1 最大宽度 720px。
2. **营业时间与位置** — 左侧：HoursCard（卡片，1px 分隔线）— OpenNowPill（'Open now · closes 6pm' / 'Closed · opens 8am Mon'）以及表格 周一至周五 8:00–18:00 / 周六 9:00–14:00 / 周日 休息，今天的行加粗并带青绿（Teal）左侧线；说明文字 'Sick pets are seen same-day — call before noon when you can.' 右侧：MiniMap SVG — Fernbrook Lane 作为一条弯曲的分隔线道路，诊所处有青绿（Teal）图钉，青绿雾（Teal Mist）色的公园区块标注为 'Fernbrook Green'，一个小型停车 'P' 方块，指北针；说明文字 '47 Fernbrook Lane · free parking behind the building · the treats jar is visible from the door.'
   布局：两列 5/6 偏移 1，24px 间距；地图 SVG viewBox 0 0 640 480 宽度 100%。低于 900px：堆叠。
3. **紧急情况详情** — 区块 id='emergency'。眉题 'AT 2AM, READ THIS' 和 H2 'When it can''t wait until morning.' 卡片行上的五个步骤：1) PhoneCall 'Call the out-of-hours line' — '(828) 555-0190 — the answering service pages the on-call vet, usually within ten minutes.' 2) MessageCircle 'Describe, don''t diagnose' — 'What happened, when, and what''s different now; the vet will ask the right questions.' 3) Thermometer 'Bring the obvious things' — 'Any medicine bottles, the food bag, and a favorite blanket — calm travels well.' 4) Car 'Drive like it''s raining, not flooding' — 'You are no help in a ditch; the ten minutes you save, spend on breathing.' 5) Heart 'When in doubt, call' — 'Better a false alarm at 2am than a real one at 8. We mean it.' 结尾一句：'Poison concerns: keep the packaging and call — the vet will triage from there.'
   布局：雾（Mist）背景。行位于卡片上，带细线间隙，数字圆圈为珊瑚警报（Coral Alert）描边（无填充），20px 内边距；容器最大宽度 760px。
4. **新患者表单** — 区块 id='register'。眉题 'NEW PATIENTS' 和 H2 'Register your pet in two minutes.' 卡片上的面板：宠物名字输入框（占位符 'Pet''s name'）；SpeciesPicker 选项标签 — Cat / Dog / Rabbit / Guinea pig / Other（选择 'Other' 时出现一个 'Other' 自由文本输入）；年龄输入框（占位符 'Age (years, or ''about 4'')'）；原因选择（First check-up / Vaccines / Something minor / Something urgent / Second opinion）；主人姓名 + 电话输入框；主按钮 'Save registration'，说明文字 'Saved in this browser — the real clinic page would send it to the front desk. Nothing is charged or sent here.' ConfirmationCard：一个手绘的心形带爪印印章缩放进入，'Registered!'（Comfortaa 26px），'We can''t wait to meet [PETNAME].' 摘要行（物种 · 年龄 · 原因 · 主人），'Bring: nothing but the pet (and any old paperwork if there is any).' 以及 'Start another' 重置表单。持久化在 localStorage 中。
   布局：暖白（Warm White）背景；面板最大宽度 640px，28px 内边距，1px 分隔线边框，16px 圆角；物种选项标签 999px；步骤切换 280ms --ease-io。低于 480px 内边距 20px。
5. **照片与结尾** — 表单下方的一条三张照片横条：cat-window.webp 'Buttercup supervises the waiting room'，dog-wait.webp 'Bailey, pre-treat, mid-wiggle'，vet-owen.webp 'Dr. Baptiste and his favorite patient (sample)'。说明文字 13px 石板灰（Slate）。居中结尾一句：'See you and yours soon — the kettle''s on and the treats are out.'
   布局：三个等宽列 16px 间距，宽高比 4:3，16px 圆角；横条位于雾（Mist）背景上，56px 内边距，结尾句在其下方 40px。

## 资源
- 图片：为本设计制作的模板照片（可随模板自由再分发）。用 curl -L -o 将每张图片下载到 public/images/：https://media.vibefather.ai/assets/746cdbde-ca6e-4906-a7e2-24faa972b082/hero-clinic.webp → public/images/hero-clinic.webp（首页主视觉；object-position 50% 55%；alt 'A ginger cat asleep on a warm wooden reception counter'）；https://media.vibefather.ai/assets/746cdbde-ca6e-4906-a7e2-24faa972b082/cat-window.webp → public/images/cat-window.webp（到访条带；alt 'A tabby cat watching the waiting room from a window shelf'）；https://media.vibefather.ai/assets/746cdbde-ca6e-4906-a7e2-24faa972b082/dog-wait.webp → public/images/dog-wait.webp（到访条带；alt 'A golden retriever sitting expectantly on a waiting-room bench'）；https://media.vibefather.ai/assets/746cdbde-ca6e-4906-a7e2-24faa972b082/vet-ana.webp → public/images/vet-ana.webp（兽医卡片 Dr. Reyes；alt 'Dr. Reyes examining a tabby cat, a fictional veterinarian'）；https://media.vibefather.ai/assets/746cdbde-ca6e-4906-a7e2-24faa972b082/vet-owen.webp → public/images/vet-owen.webp（兽医卡片 Dr. Baptiste，到访条带；alt 'Dr. Baptiste with a golden retriever, a fictional veterinarian'）；https://media.vibefather.ai/assets/746cdbde-ca6e-4906-a7e2-24faa972b082/vet-priya.webp → public/images/vet-priya.webp（兽医卡片 Dr. Nair；alt 'Dr. Nair weighing a lop-eared rabbit, a fictional veterinarian'）。共六个文件。
- 图片：在项目根目录写入 ASSETS.md，包含一张表格：路径、来源 URL、作者、许可证——每张照片一行（来源 'media.vibefather.ai, made for this template'，作者 'VibeFather'，许可证 'Distributed with the template'），另加 @fontsource/comfortaa 和 @fontsource-variable/albert-sans（OFL-1.1）以及 lucide-react（ISC）的行。绝不用图库网站或含人物、面孔或手的图片替换照片——仅限动物和空诊所空间。
- 图标：仅使用 lucide-react：Stethoscope、Scissors、Syringe、Microscope、HeartHandshake、Plane、PhoneCall、MessageCircle、Thermometer、Car、Heart、Scale、Smile、Puzzle、Menu、X、Check、ArrowRight、MapPin、Clock。描边宽度 1.75，16–24px，颜色继承。爪印、心形爪印印章和 favicon 为手绘 SVG。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的 rect rx 9 填充 #2C6E63，一个 Warm White（暖白）爪形图案（一个大掌垫圆加三个趾圆）。无其他标志：诊所名称始终以文字排版呈现。
- 字体：安装 @fontsource/comfortaa 和 @fontsource-variable/albert-sans，并按 Setup 中所述在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包进 dist/。
- 图片：在代码中绘制：爪印和眉题字形、心形爪印印章、迷你地图（道路、图钉、公园）、标签、营业中圆点和 favicon。除六张照片外无其他位图；无插图；无地图瓦片。

## 不要做
- 无后端、无表单提交、不向任何 API 发起 fetch：注册信息仅保存在浏览器中（localStorage），表单上要说明这一点；tel: 链接由 [PHONE] 构建。
- 每个内部链接都指向文件名（./index.html、./index.html#services、./visit.html、./visit.html#register、./visit.html#emergency）——绝不指向裸目录。
- 一切自托管：字体通过 Fontsource，图标用 npm 包或内联 SVG，图片下载到 public/images/。不使用 CDN 的 <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具。
- 生产构建：压缩、无 source map、不把 src/ 复制进 dist/、单条命令 npm run build、输出在 dist/ 下且小于 10 MB。
- 不使用真实诊所、兽医、连锁店或真人的宠物；不使用含人脸或人手的照片——只出现动物和空诊所空间；护理提示保持常青，不含医疗建议或剂量。
- 除 'since [FOUNDED]' 外，任何地方都不出现日期或年份；网站永不显示当天日期。
- 除可选的页脚署名链接外，网站内绝不提及 VibeFather 或任何其他品牌；所有文案均为虚构的美式英语。
- 处处尊重 prefers-reduced-motion：无脉冲、描画、交错或缩放；颜色/边框悬停保留；紧急横幅绝不闪烁。
- 网站必须在 1440x900 桌面端和 390x844 移动端正常工作且控制台零错误；表单、chips 和手风琴仅用键盘即可操作，每个交互元素都有可见的焦点环。
- 文案保持具体：不用 lorem，不用未加解释的医学术语；每个营业时间、服务和提示都放在 src/content.ts 中。

---
— Prompt by VibeFather · https://vibefather.ai/t/veterinary-clinic-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
