> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 舞蹈工作室网站

完全按照下面的描述构建这个网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个双页网站，[BRAND] 是位于 [CITY] 的一家舞蹈工作室，向 [AUDIENCE] 教授 [STYLES]。首页通过一张宽幅课堂照片、三张课程卡片、三位导师简介、一个面向 [RECITAL_DATE] 的实时汇演倒计时、三种价格通行证以及一个经过验证的免费试课预约流程来推销这种体验。classes.html 是完整的每周课程表，带有风格、年龄和级别筛选器、课程详情以及直接试课链接。视觉语言是电气化编辑风格：深茄紫、暖纸色、珊瑚色和淡紫色，超大号怪诞体标题，不对称网格，以及富有节奏但清晰易读的动效。一切都是静态的、客户端实现。

- 受众：为孩子比较第一项活动的家长、寻找适合自己级别课程的青少年，以及想要开始或重返舞蹈的 [CITY] 成年人。访客需要快速回答：有没有适合我的年龄和经验的课程，谁教这门课，费用是多少，我能不能在承诺之前先试课？
- 目标：将首次访客转化为免费试课预约。每个主要区块都提供通往合适课程或预约表单的路径。课程表也服务于现有舞者，让下一节课、导师和可用名额在手机上易于浏览。
- 语气：充满活力、鼓励且精确。使用简短的陈述句，具体的时间、年龄、时长和价格。赞美努力，而不是身体形象或竞争。不要舞蹈陈词滥调，不要成名承诺，不要感叹号，不要购买压力。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/archivo-black（OFL-1.1）、@fontsource-variable/manrope（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务器代码、无外部 API。
- 设置：
  - 使用 react-ts 模板通过 npm create vite@latest 搭建脚手架。在项目根目录创建两个真实的 HTML 入口文件：index.html 对应 src/main-home.tsx，classes.html 对应 src/main-classes.tsx。不要添加路由。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist'，sourcemap false，assetsInlineLimit 0，rollupOptions { input { index: resolve(__dirname, 'index.html')，classes: resolve(__dirname, 'classes.html') } } }。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4，content 为 ['./index.html', './classes.html', './src/**/*.{ts,tsx}']。将 Design 颜色添加为 ink、plum、raised、paper、white、coral、coral-deep、lilac、muted 和 rule；fontFamily display ['Archivo Black', 'Arial Black', 'sans-serif']、sans ['Manrope Variable', 'system-ui', 'sans-serif']、mono ['IBM Plex Mono', 'ui-monospace', 'monospace']。配置 1240px 容器和下方的缓动令牌。
  - src/fonts.ts 导入 '@fontsource/archivo-black/400.css'、'@fontsource-variable/manrope'、'@fontsource/ibm-plex-mono/400.css' 和 '@fontsource/ibm-plex-mono/500.css'。两个入口文件都导入 src/fonts.ts 和 src/index.css。
  - src/index.css 包含 Tailwind 层、焦点样式、图像调色与颗粒、裁剪标题遮罩、program-rail 关键帧、倒计时等宽数字、试课通行证的打印规则，以及所有 prefers-reduced-motion 覆盖。
  - src/content.ts 包含两个页面的所有字符串、数字、价格、图像路径、alt 文本、课程、导师、场次、通行证、FAQ 和地址，并带有类型。将 [STYLES] 解析为恰好三个逗号分隔的名称，并从中派生小写样式 slug。src/lib/brand.ts 从 [BRAND] 派生 brandSlug，从 brandSlug 去掉连字符 + '.com' 派生 emailDomain，并从品牌的前两个单词派生两字母预订前缀。
  - src/lib/schedule.ts 负责课程筛选、结束时间、名额标签和查询解析。src/lib/countdown.ts 解析一次 [RECITAL_DATE]，计算剩余的整天/小时/分钟/秒，并将过期值钳制为零。src/lib/storage.ts 提供安全的 try/catch localStorage 辅助函数，使用以 brandSlug + ':' 为前缀的键。src/lib/validation.ts 负责所有试课表单规则。
  - src/components/ 中的组件：Header.tsx、MobileMenu.tsx、Reveal.tsx、MaskedHeading.tsx、ProgramRail.tsx、ProgramCards.tsx、Instructors.tsx、RecitalCountdown.tsx、Pricing.tsx、TrialForm.tsx、TrialPass.tsx、Faq.tsx、Visit.tsx、Footer.tsx，以及 classes/FilterBar.tsx、WeekList.tsx、DayGroup.tsx、ClassRow.tsx、ClassDrawer.tsx。src/pages/Home.tsx 和 Classes.tsx 组合它们；两个页面使用相同的 Header 和 Footer。
  - 在首次构建之前，使用确切的文件名将 Assets 下列出的六张图像下载到 public/images/。构建本身从不获取资源或调用 API。
  - 按 Assets 中所述创建 public/favicon.svg。两个 HTML 文件都使用 lang en、<meta name='theme-color' content='#17111C'> 和相对 ./favicon.svg 链接。标题：index.html '<title>[BRAND] — Dance classes in [CITY]</title>' 和 classes.html '<title>Class timetable — [BRAND]</title>'。
  - 在项目根目录编写 ASSETS.md，包含每张图像、字体和图标包，以及 Assets 下的确切署名和许可详情。
  - dist/ 必须包含 index.html、classes.html、带哈希的 JS/CSS、自托管的 woff2 字体、favicon.svg 和六张本地图像。目标低于 12 MB，且绝不超过 20 MB。

## 变量
- [BRAND] — 工作室名称（默认："Offbeat Dance Assembly"）。一个虚构的 2–4 词工作室名称，用于字标、标题、联系邮箱、预约参考和 localStorage 键。切勿使用真实的工作室或连锁品牌。
- [CITY] — 工作室所在城市（默认："Austin, Texas"）。用于 hero 区域、到访部分、页脚和页面标题。请相应调整电话格式、时区和虚构的街区细节。
- [STYLES] — 三种舞蹈风格（默认："Hip-Hop, Contemporary, Jazz"）。恰好三个以逗号分隔的风格名称。针对这些风格重写三张课程卡片、全部 24 个课程名称和描述、导师专长、筛选器和常见问题，同时保留课程表结构。
- [AUDIENCE] — 工作室的教学对象（默认："dancers ages 7 and up, from complete beginners to experienced movers"）。一个自然的小写短语，用于 hero 区域和课程介绍。保留三个课程表年龄段 7–12、13–17 和 18+。
- [RECITAL_DATE] — 下一次汇报演出的日期和时间（默认："2027-06-12T19:00:00-05:00"）。一个带偏移量的 ISO 8601 本地日期时间。驱动倒计时和人类可读的活动行；事件格式化时使用提供的偏移量，而非访客的时区。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接指向 https://vibefather.ai/t/dance-studio-website（默认：是；删除此行即可移除）

页面与区块下的文案按默认值编写。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- Ink `#17111C` — 主页面背景、Paper 和 Coral 上的深色文字、页脚和对话框背景遮罩。
- Plum `#281A32` — 首屏渐变、交替深色区块、课程卡片和移动端菜单。
- Raised `#382443` — 课程行、表单字段、抽屉和抬升的深色表面。
- Paper `#F4EEE5` — 浅色区块、试课表单面板、定价背景和深色背景上的主文字。
- White `#FFFCF7` — 明亮标题、肖像卡片文字和选中高亮。
- Coral `#FF7452` — 主操作填充、激活的筛选器、倒计时强调、焦点环和小型编辑标记；始终搭配 Ink 文字。
- Coral Deep `#E95C3B` — Coral 按钮和筛选器的悬停与按下状态。
- Lilac `#C7B9FF` — 次级强调色，用于级别胶囊、汇报演出详情、描边字体和深色背景上的链接；作为填充使用时搭配 Ink。
- Muted `#B9AFBF` — Ink 或 Plum 上的次级文字、元数据和说明文字；在 Paper 上改用 68% 不透明度的 Ink。
- Rule `#4B3954` — 深色区块的边框和分隔线；浅色区块的分隔线使用 16% 不透明度的 Ink。

### 排版（Typography）
- Display：字标、H1、H2、大号价格、课程名称和倒计时数字；大写并采用紧凑行距：Archivo Black（OFL），字重 400
- Text and UI：正文、导航、按钮、课程行、个人简介、表单标签和 FAQ：Manrope（OFL），字重 400/500/600/700/800
- Mono：眉题、区块索引、课程表时间、年龄和级别元数据、剩余名额、预约编号和细则文字：IBM Plex Mono（OFL），字重 400/500

### 布局与动效（Layout & motion）
- 间距：8px 基础单位。容器最大宽度 1240px，居中，侧边内边距桌面端 40px、平板端 28px、640px 以下 20px。十二列网格，间距 24px。区块内边距桌面端 112px、平板端 80px、移动端 64px。眉题：IBM Plex Mono 500 12px 大写，字距 0.14em，配一条 24px 的 Coral 线。H1：Archivo Black clamp(58px, 8.6vw, 124px)，行高 0.9，字距 -0.035em。H2：Archivo Black clamp(42px, 5.8vw, 78px)，行高 0.94，字距 -0.025em。H3：Manrope 800 24px / 1.2。导语：Manrope 500 19px / 1.6，最大宽度 56ch。正文：Manrope 400 16px / 1.7，最大宽度 66ch。按钮：最小高度 48px，胶囊形，内边距 0 24px，Manrope 800 13px 大写，字距 0.06em。主按钮为 Coral 配 Ink 文字；次按钮为 1px currentColor 描边配透明填充。输入框高 52px，文字 16px。每个可交互元素都有 2px Coral 焦点轮廓，偏移 3px。
- 圆角：大型摄影和内容面板 24px，课程行和小卡片 16px，输入框 12px，999px 仅用于按钮、标签、胶囊和状态圆点。避免在相同的圆角卡片内嵌套圆角卡片。
- 动效：摄影和内容揭示使用 --ease-out cubic-bezier(0.22, 1, 0.36, 1)，遮罩、轨道过渡和抽屉移动使用 --ease-beat cubic-bezier(0.76, 0, 0.24, 1)。
- 动效：MaskedHeading 将每个提供的行包裹在 overflow-hidden 中，并在 720ms 内以 --ease-beat 将其内部 span 从 translateY(110%) 提升到 0，行间间隔 80ms。H2 在 25% 可见时触发一次。
- 动效：Reveal 在 15% 可见时将区块内容从 opacity 0 和 translateY(22px) 移动到静止状态，历时 650ms --ease-out；网格子项以 70ms 错开。如果 IntersectionObserver 不可用，绝不要永久隐藏内容。
- 动效：首屏照片在加载时从 1.07 缩放到 1，历时 1600ms，并在首屏离开视口时垂直平移不超过 5%。标题和操作在 120ms 后进入。
- 动效：ProgramRail 将两条相同的轨道在 32s 内线性平移 -50%。悬停和 focus-within 时暂停；向屏幕阅读器暴露一个视觉隐藏的静态列表。
- 动效：筛选器更新使用 Motion AnimatePresence，以 opacity 和 10px 垂直移动在 180ms 内完成；保持布局稳定，并用 aria-live polite 播报结果数量。
- 动效：汇报演出数字仅在值变化时交叉淡入并移动 8px；秒数不会导致布局偏移。按钮悬停时平移 -2px，按下时复位。肖像在悬停时在其裁剪区域内缩放到 1.035。
- 动效：课程抽屉从右侧进入，历时 360ms --ease-beat，同时其背景在 180ms 内淡入。试课确认以 12px 上升和 250ms 淡入替换表单；错误显示时不会将提交按钮推出屏幕。
- 动效：prefers-reduced-motion：所有内容以静止状态渲染，停止轨道，移除视差、缩放、错开和数字移动，禁用平滑滚动，菜单和对话框仅使用 100ms 的 opacity 变化。倒计时数值仍以无障碍方式更新，无动画。
- 图像：仅使用 Assets 下列出的六张生成的编辑类舞蹈照片。它们构成一次拍摄：纪实运动摄影、深茄紫色阴影、暖珊瑚色轮廓光、柔和淡紫色补光、无品牌深色排练服、微妙的胶片颗粒和干净的影棚建筑。首屏是宽幅群像场景，留有充裕的负空间，绝不是面部特写。课程和汇报演出照片展示全身动作，面部转开、被姿势遮挡或自然运动模糊。三张导师图像是明确虚构的成年人的专业肖像，不 resemblance 任何真实个人，年龄和族裔多样，胸部以上构图一致。不要替换为真实舞者、名人、库存肖像、仅首字母的导师卡片或无关的健身房照片。应用 object-fit cover 和列出的 object-position；保留自然皮肤纹理。所有其他图形均为代码绘制：字标是文本，favicon 使用两条偏移的节拍条，课程轨道和胶囊是 CSS，可用性轨道是 div，试课通行证打孔是 CSS。图标仅来自 lucide-react，描边宽度 1.75px。任何图像中不得有可读的标牌、服装标志或品牌标记。

## 页面与区块
### 首页（`index.html`）
1. **内容文件与工作室数据** — 以下所有文案均使用默认值：[BRAND] Offbeat Dance Assembly、[CITY] Austin, Texas、[STYLES] Hip-Hop, Contemporary, Jazz、[AUDIENCE] dancers ages 7 and up, from complete beginners to experienced movers，以及 [RECITAL_DATE] 2027-06-12T19:00:00-05:00。将所有内容放入 src/content.ts，并在变量变化时重写每个标题、课程项目、场次、导师专长、活动详情、价格说明和 FAQ，保持相同的数量和大致长度：3 个课程项目、3 位导师、24 节每周课程、3 种通行证和 6 个 FAQ。所有身份和业务细节均为虚构。地址：18 Cadence Alley, [CITY]。电话：(512) 555-0148。邮箱：hello@ + emailDomain。营业时间：周一至周五 15:00–21:30，周六 09:00–17:00，周日 12:00–17:00。默认时区：America/Chicago。汇演为 'In Full Motion'，于 [RECITAL_DATE] 19:00 在改造后的主工作室举行；18:15 开门，三个年龄组展示，120 个座位，参与家庭免费。默认价格：单节课 $24；八节课通行证 $152，有效期三个月，每节课 $19；月度无限 $168，按月计费，按每周八次到访计算相当于每节课 $5.25。免费试课：一节 First class 或 Beginner 课程，无需信用卡。青少年容量 14 人，其他所有课程 16 人。取消政策：可在课程开始前六小时到前台或通过电话取消或改期；不伪造在线取消功能。导师名单：maya — Maya Rivera，Hip-Hop 负责人，11 年教学经验，'We learn the groove before the trick. Count it out, then make it yours.'；jules — Jules Bennett，Jazz 与表演教练，9 年教学经验，'Clean lines are useful. A little personality is required.'；elena — Elena Park，Contemporary 与基础教练，14 年教学经验，'Technique should give you more choices, not make you afraid to move.' 他们的照片为虚构占位图，并非真实导师。将每位导师的 'View classes' 按钮链接到 classes.html?style=<their style slug>。
   布局：无视觉输出。导出带类型的 studio、programs、instructors、sessions、passes、faqs、visit 和 images 对象。在内容中将日期保持为 ISO 字符串，绝不分散到组件中。
   动效：不适用
2. **页头与移动菜单（共享）** — 左侧：[BRAND] 使用 Archivo Black 18px 大写，最多两行，前面有两条错位的垂直条（一条 Coral，一条 Lilac），用 CSS 绘制；链接到 ./index.html。桌面导航：'Programs' → ./index.html#programs，'Timetable' → ./classes.html，'Instructors' → ./index.html#instructors，'Passes' → ./index.html#passes。右侧：主按钮 'Free trial' → ./index.html#trial。当前页面获得 Coral 下划线。低于 860px 时显示 48px 的 Menu 按钮和一个小型 Coral 'Trial' 按钮。全屏 Plum 移动菜单以 Archivo Black 38px 列出四个链接，然后是地址、电话和一个 Free trial 按钮；Escape 和链接选择会关闭它，body 滚动锁定，焦点返回触发按钮。
   布局：固定顶部，桌面高度 76px，移动端 68px，z-index 40。在首页 hero 上方透明，滚动 32px 后变为 Ink 94% 并带背景模糊和 Rule 底部边框。在 classes.html 上始终为实色。容器对齐的 flex 行。
   动效：页头背景和边框过渡 200ms。移动菜单以 clip-path 在 320ms 内 --ease-beat 向下擦除展开，链接以 45ms 交错上升；减少动效时仅使用透明度。
3. **Hero（#top）** — 全宽背景 hero-dance.webp，定位 64% 50%，带有从左到右的 Ink 渐变（左侧 94%，中间 52%，右侧 18%）和底部 Ink 淡出。眉标：'[CITY] · CLASSES FOR AGES 7+'。H1 分三行：'FIND YOUR' / 'BEAT.' / 'OWN THE ROOM.'，其中 'BEAT.' 为 Coral，最后一行宽度不超过九列。导语：'[BRAND] teaches [STYLES] to [AUDIENCE]. Small classes, clear levels and a first session that costs nothing but an hour.' 按钮：主按钮 'Book a free class' → #trial；照片上的次级按钮 'Explore the timetable' → ./classes.html。底部账目行：'24' / 'weekly classes'；'3' / 'dance styles'；'16' / 'dancers max'；'$0' / 'your first class'。账目行上方有一个 Lilac 描边的小注释，内容为 'Next recital · In Full Motion'，链接到 #recital。
   布局：min-height 100svh，桌面最小 720px，移动端最小 740px。内容位于容器内，顶部内边距 156px，底部账目行锚定在底部。桌面端文本跨越第 1–9 列；H1 最大宽度 1080px。账目行为四列行，顶部有 1px White/20% 边框，垂直内边距 24px。低于 700px 时，使用更强的全宽 Ink/55% 叠加层，H1 56px，堆叠的全宽按钮和 2×2 账目行；保持图片在右侧和上半部分可见。
   动效：照片缩放和标题遮罩如设计所述。账目行项目在操作按钮之后淡入上升，交错 60ms；没有永久弹跳或光标跟随。
4. **课程项目横条** — 一条 Coral 色带，承载序列 'HIP-HOP · CONTEMPORARY · JAZZ · FIRST CLASS FREE · AGES 7+ · ALL BODIES WELCOME ·'，源自 [STYLES]。项目使用 Archivo Black 30px 大写 Ink，之间用 CSS 绘制的小型 Ink 四角星分隔。在动画的 aria-hidden 轨道之外，提供相同事实的静态可访问列表。
   布局：全出血，高 68px，整个色带旋转 -1.2deg 并 x 轴缩放 1.02 以到达两侧边缘；向相邻深色区块添加 24px 负外边距。溢出隐藏，包含两条相同轨道。
   动效：32s 线性无限平移，悬停/聚焦时暂停，减少动效时替换为换行的静态行。
5. **课程项目（#programs）** — 眉标 '01 · FIND YOUR CLASS'。H2 'THREE WAYS IN.' 导语：'Start with the style that makes you turn the music up. Every program has a first-class session, and every instructor shows the steps before asking for polish.' 三张源自 [STYLES] 的非对称课程项目卡片：1) Hip-Hop — 索引 01，'GROOVE / FOUNDATIONS / FREESTYLE' 元数据，描述 'Footwork, bounce, isolations and short combinations taught one eight-count at a time. Youth groups learn the same foundations without the late finish.' — '7–12 · 13–17 · 18+' 和 'First class through Advanced'。2) Contemporary — 索引 02，'FLOORWORK / BREATH / PHRASES'，描述 'A clear technical warm-up moves into traveling phrases and floorwork. Beginners get smaller ranges and a slower count; experienced dancers get more complexity, not more speed for its own sake.' — 相同年龄组、级别。3) Jazz — 索引 03，'RHYTHM / LINES / PERFORMANCE'，描述 'Sharp accents, turns and expansive combinations with room for character. Recital choreography stays optional and every class works as a standalone session.' — 相同年龄组、级别。每张卡片有一个大型描边索引、三条水平节奏条，宽度分别为 42/68/52%、58/36/72% 和 76/46/60%，以及一个 'See [style] classes' 链接到 ./classes.html?style=<slug>。仅在 Contemporary 描述下方使用 class-contemporary.webp 作为宽图，桌面端裁剪为 4:3；另外两张卡片使用代码绘制的节奏条，不使用替代照片。
   布局：Ink 背景。页头 H2 占 7 列，导语占 4 列，偏移 1。卡片形成 12 列网格：卡片一第 1–5 列，卡片二第 6–12 列，卡片三第 3–9 列，产生刻意的非对称。卡片有 1px Rule 边框、Plum 填充、28px 内边距和 24px 圆角。低于 800px 时，按顺序堆叠且无偏移，保持 Contemporary 照片为 16:10。
   动效：卡片按顺序显现。悬停时，边框变为 Lilac，索引从透明填充为 Coral，节奏条在 260ms 内从 scaleX 0.65 增长到 1，transform-origin 为左侧。
6. **教练（#instructors）** — 眉题 '02 · THE PEOPLE IN THE ROOM'。H2 'CLEAR CUES. GOOD MUSIC.' 导语：'Three teachers, three different routes into dance. They correct the step, explain the why and learn every dancer's name.' 三张个人资料卡：teacher-maya.webp — Maya Rivera — 'HIP-HOP LEAD · 11 YEARS TEACHING' — 简介 'Maya builds combinations from the groove outward. Her beginner classes are music-first, low-pressure and famous for ending with one more run than planned.' — 引语 'We learn the groove before the trick. Count it out, then make it yours.' — 'Teaches Hip-Hop · Mon–Sat'；teacher-jules.webp — Jules Bennett — 'JAZZ & PERFORMANCE · 9 YEARS' — 简介 'Jules mixes clean technique with theater instincts. He breaks turns into foot, spot and landing, then helps each dancer add a little character.' — 引语 'Clean lines are useful. A little personality is required.' — 'Teaches Jazz · Mon–Sat'；teacher-elena.webp — Elena Park — 'CONTEMPORARY & FOUNDATIONS · 14 YEARS' — 简介 'Elena teaches floorwork without the mystery and progressions without the rush. Her first-class sessions include a full explanation of the room, the warm-up and what to wear.' — 引语 'Technique should give you more choices, not make you afraid to move.' — 'Teaches Contemporary · Mon–Sat'。替代文本将每位标注为虚构教练肖像。每张卡片的按钮：'View [style] classes' → ./classes.html?style=<style slug>。
   布局：Paper 背景配 Ink 文字。页头跨 7 列，导语 4 列。三张等宽卡片，间距 24px。顶部肖像 3:4，圆角 24px，姓名 Manrope 800 26px，等宽字体专长文字为 Ink/65%，简介和一个 Lilac 填充、Ink 文字的引语块。在深到浅的图像边缘不使用文字叠加。低于 900px 时使用单列，在宽度允许时文字旁配 38% 的肖像列；低于 600px 时恢复为堆叠卡片。
   动效：卡片以 80ms 错峰显现。悬停时肖像缩放至 1.035；教练链接箭头向右移动 4px。
7. **演出倒计时（#recital）** — 使用 recital-stage.webp 作为大视觉面板，配一个小号等宽标签 'NEXT RECITAL · MAIN STUDIO'。旁边：眉题 '03 · SAVE A SEAT'，H2 'IN FULL MOTION.' 正文：'Three age bands. Twenty-four short pieces. One night where the practice room becomes a stage. Participating is optional; cheering is strongly encouraged.' 活动行按提供的活动偏移量格式化 [RECITAL_DATE]，默认值为 'Saturday, June 12 · 7:00 PM CDT'，后接 'Doors 6:15 PM · 18 Cadence Alley · 120 seats'。四个倒计时单元格：DAYS、HOURS、MINUTES、SECONDS，每秒从 Date.parse([RECITAL_DATE]) 计算，使用表格数字和固定宽度。活动日期及其时区缩写来自显式的活动偏移量格式化，而非访客所在时区。目标时间过后，显示 00 值并将按钮替换为 'Ask about the next recital' → mailto:hello@emailDomain；绝不显示负值。主按钮 'Try a class before curtain' → #trial；次按钮 'See class times' → ./classes.html。小字：'Recital participation is optional and included in regular classes. Tickets are free for participating families; no online ticket sale.'
   布局：Plum 背景。十二列网格：照片占第 1–7 列，16:10 裁剪，圆角 24px；文字占第 8–12 列。倒计时是活动行下方的四列网格，每个单元格由 Rule 垂直边框分隔，数字 Archivo Black clamp(34px, 4vw, 56px) Coral，标签等宽 10px Muted。低于 900px 时先堆叠照片再文字；在 390px 时使用 2×2 倒计时网格以防止数字过小。
   动效：照片以从底部开始的 clip-path inset 在 700ms 内显现。数字变化时交叉淡入淡出；秒单元格不产生滚动动画积压。减少动效时移除两者。
8. **价格通行证（#passes）** — 眉题 '04 · PASSES'。H2 'START SMALL. KEEP MOVING.' 导语：'Try one class first. If the room feels right, choose the pass that matches your actual week.' 三张卡片：'Single class' — $24 — 'One 45–75 minute session, any style or level that fits.' — 特性 ['One class reservation', 'All props and practice space included', 'No enrollment fee'] — 算式 '$24 / CLASS'；'Eight-class pass' — $152 — 标签 'BEST FOR 1–2 CLASSES A WEEK' — 'Eight classes to use within three months, across any style.' — 特性 ['$19 per class', 'Share with one family member', 'Unused classes expire after 3 months'] — 算式 '$19 / CLASS · SAVE $40'；'Monthly unlimited' — $168 — 'Every regular class, every week, with month-to-month billing handled at the studio.' — 特性 ['Unlimited regular classes', 'Two guest passes each month', 'Pause once per year for up to 30 days'] — 算式 '$5.25 / CLASS AT 8 VISITS A WEEK'。按钮均显示 'Start with a free class' 并链接到 ./index.html?plan=single|eight|unlimited#trial。试课表单根据此查询显示 'Pass you are considering: …'，不产生扣费。脚注：'Passes are purchased at the studio after your trial. Monthly plans need 30 days notice to cancel. Recital participation carries no costume fee.'
   布局：Paper 背景，Ink 文字。三张卡片，等高，间距 24px。Ink 文字配 1px Ink/16% 边框和 White 填充；中间卡片有 2px Coral 边框，桌面端上移 12px。价格 Archivo Black 58px，算式 IBM Plex Mono 12px 位于 Coral 胶囊内配 Ink 文字，特性 Manrope 15px 配 Check 图标。按钮位于底部。低于 900px 时堆叠，移除上移效果，仅当 DOM 顺序仍然合理时优先显示中间卡片；所有尺寸下首选顺序仍为 Single、Eight、Monthly。
   动效：卡片以 70ms 错峰显现。悬停时非特色卡片上移 4px；算式胶囊变为 Lilac，绝不对价格做动画。
9. **免费试课预约（#trial）** — 双列区块。左侧：眉题 '05 · YOUR FIRST CLASS'，H2 'COME AS YOU ARE.' 导语：'Choose a First class or Beginner session. We will have a place marked, a teacher expecting you, and no card reader waiting by the door.' 清单：'One free trial per dancer'、'Comfortable clothes and water are enough'、'Arrive 15 minutes early; under-18s bring a parent or guardian on the first visit'。右侧：一个 Paper 表单面板，标题 'RESERVE A FREE CLASS'。字段：舞者名字（必填，2–40 个字符）；家长或监护人姓名（仅当所选课程年龄为 7–12 或 13–17 时显示且必填）；邮箱（必填，标准邮箱格式）；课程选择按天分组，仅包含未满的 First class 和 Beginner 课程，标签如 'Wed 6:45 PM · Adult Hip-Hop · 7 spots'；经验单选组 'Brand new'、'A few classes'、'Returning after a break'（必填）；可选备注文本域最多 240 个字符，带实时计数；必填复选框 'I understand this reservation is saved on this device and I should show the confirmation at the front desk.' 在触摸后失焦时和提交时验证，设置 aria-invalid 和 describedby，显示简洁错误并聚焦第一个无效字段。?class=<session id> 预选一个有效的符合条件的课程；未知或不符合条件的 id 会保留第一个符合条件的课程被选中，且不显示错误。?plan=single|eight|unlimited 显示匹配的考虑行。有效提交使用 preventDefault，仅等待 500ms 用于视觉反馈，将 { reservation id, session id, dancer first name, created from RECITAL-independent current timestamp } 保存到 localStorage 键 brandSlug + ':trial'，并用 TrialPass 替换表单。TrialPass：Coral 标签 'FREE CLASS RESERVED'、'SEE YOU ON THE FLOOR, {FIRST NAME}.'、课程名称、日期和开始–结束时间、教练、地址，以及预约参考号 '<two-letter brand prefix>-' + 四位数字，该数字由 session id + 小写邮箱的稳定哈希派生。说明文字：'Saved on this device. Screenshot or print this pass and bring it to the desk. No payment has been taken and no email has been sent.' 按钮：'Print pass' 使用仅打印通行证的样式表调用 window.print；'Choose another class' 在确认后重置状态并移除已保存的预约。已保存的预约在再次访问时加载通行证。不传输任何内容。
   布局：Ink 背景。十二列网格：左侧第 1–5 列在桌面端 sticky 于顶部 112px，表单第 7–12 列。面板圆角 24px，内边距 36px（移动端 24px）。姓名/邮箱双列行仅在 520px 以上；标签 13px Manrope 700，字段 White 填充配 Ink 文字和 Ink/20% 边框。错误文字为 #9E321F 于 Paper 上，配 AlertCircle 图标。确认区有虚线分隔、CSS 侧边缺口和一个等宽参考号。移动端保持说明内容在表单之前，且无 sticky 定位。
   动效：错误使用 160ms 高度/透明度显现。提交旋转器为简单的 LoaderCircle，持续 500ms。TrialPass 在 250ms 内精确上升 12px。打印和重置无动效。
10. **首次访问 FAQ（#faq）** — 眉题（Eyebrow）'06 · BEFORE YOU ARRIVE'。H2 'GOOD QUESTIONS. STRAIGHT ANSWERS.' 六个手风琴项：1) 'I have never danced. Which class should I pick?' — 'Choose any session marked First class. The warm-up, basic vocabulary and combination are taught from zero. Beginner is also suitable if you are comfortable learning with people who have taken a few classes.' 2) 'What should I wear?' — 'Clothes that let you bend and stretch, clean sneakers for Hip-Hop and Jazz, and socks or bare feet for Contemporary. Bring water. You do not need special dance shoes for a trial.' 3) 'How do age groups work?' — 'Youth is 7–12, Teen is 13–17 and Adult is 18+. Use the age filter on the timetable; dancers stay with their age band even when the choreography is shared.' 4) 'Does my child have to join the recital?' — 'No. Recital choreography is taught in regular classes, but performing is optional. Dancers who prefer not to perform still learn the complete combination.' 5) 'What if a class is full?' — 'Full sessions are marked on the timetable. Call the desk to join the waitlist; the site does not pretend to hold a place that is unavailable.' 6) 'Can I cancel or move my trial?' — 'Yes, up to six hours before class. Call (512) 555-0148 and the desk will move it. If you simply need a different session on this device, choose another class on the confirmation pass.' 第一项默认展开；同一时间只展开一项，使用 aria-expanded 和 aria-controls。
   布局：Paper 背景，Ink 文字。左侧 H2 在桌面端占据第 1–5 列并粘性固定；右侧手风琴占据第 7–12 列。问题为全宽按钮，垂直内边距 24px，Manrope 800 18px 并带 Plus 图标。答案最大宽度 62ch，Ink/72%。低于 800px 时堆叠，无粘性。
   动效：手风琴高度和透明度以 220ms --ease-out 动画；Plus 旋转 45 度。减少动效时立即展开。
11. **到访与页脚（共享）** — Plum 上的到访条带：'FIND THE ROOM' — '18 Cadence Alley'、'[CITY]'、'Second floor; stairs and a lift open onto the same landing.'；'STUDIO HOURS' — 来自内容的四行营业时间；'CALL OR WRITE' — '(512) 555-0148' tel 链接和 'hello@' + emailDomain mailto。文字旁是一个代码绘制的 SVG 街区示意图：三条细 Lilac 街道线，分别标注 'CADENCE ALLEY'、'WILLOW WALK' 和 'EIGHTH ST'，一个 Coral 方块代表工作室，以及一条简单的步行路线；无地图瓦片或外部地图服务。页脚在 Ink 上：大号 [BRAND] 使用 Archivo Black clamp(42px, 7vw, 96px)，然后四列：Programs（三个筛选后的时间表链接）、Visit（地址和电话）、Classes（Timetable、Free trial、Passes）、First visit（FAQ、Recital）。底部行：左侧 '© [BRAND] · Practice counts.'，右侧可选 [CREDIT] 链接。无当前年份，无社交媒体标志。
   布局：到访区内边距 80px，网格中三个信息列占据 1–7，地图占据 8–12，宽高比 4:3，1px Rule 边框和 24px 圆角。页脚内边距 72px 0 32px，大号字标位于 Rule 上方，然后是四列网格。在 760px 时所有网格堆叠，地图跟在地址详情之后。
   动效：地图路线在进入时使用 stroke-dashoffset 绘制一次，历时 700ms；减少动效时静态显示。

### 课程时间表（`classes.html`）
1. **时间表数据与行为** — 从 src/content.ts 精确渲染 24 节课，与首页表单共享。每条记录：id、day、24 小时制开始时间、style slug、title、ageBand（youth 7–12、teen 13–17、adult 18+）、level（first-class、beginner、intermediate、advanced）、duration、instructor id、booked、capacity。周一：mon-1630 16:30 hip-hop 'Youth Hip-Hop Foundations' youth first-class 45m maya 8/14；mon-1730 17:30 jazz 'Teen Jazz Basics' teen beginner 60m jules 11/16；mon-1845 18:45 contemporary 'Adult Contemporary Foundations' adult beginner 75m elena 12/16；mon-2015 20:15 hip-hop 'Adult Hip-Hop Combinations' adult intermediate 60m maya 14/16。周二：tue-1630 16:30 contemporary 'Youth Contemporary Start' youth first-class 45m elena 9/14；tue-1730 17:30 hip-hop 'Teen Hip-Hop Combinations' teen intermediate 60m maya 13/16；tue-1845 18:45 jazz 'Adult Jazz Basics' adult beginner 60m jules 10/16；tue-2000 20:00 contemporary 'Adult Contemporary Repertoire' adult advanced 75m elena 16/16。周三：wed-1630 16:30 jazz 'Youth Jazz Basics' youth beginner 45m jules 8/14；wed-1730 17:30 contemporary 'Teen Contemporary Foundations' teen beginner 60m elena 12/16；wed-1845 18:45 hip-hop 'Adult First Hip-Hop' adult first-class 60m maya 9/16；wed-2000 20:00 jazz 'Adult Jazz Combinations' adult intermediate 60m jules 15/16。周四：thu-1630 16:30 hip-hop 'Youth Hip-Hop Basics' youth beginner 45m maya 10/14；thu-1730 17:30 contemporary 'Teen Contemporary Phrases' teen intermediate 60m elena 14/16；thu-1845 18:45 jazz 'Adult First Jazz' adult first-class 60m jules 7/16；thu-2000 20:00 hip-hop 'Adult Hip-Hop Repertoire' adult advanced 60m maya 16/16。周五：fri-1630 16:30 contemporary 'Youth Contemporary Basics' youth beginner 45m elena 11/14；fri-1730 17:30 jazz 'Teen Jazz Combinations' teen intermediate 60m jules 12/16；fri-1845 18:45 hip-hop 'Adult Hip-Hop Basics' adult beginner 60m maya 13/16；fri-2000 20:00 contemporary 'Adult Contemporary Combinations' adult intermediate 75m elena 9/16。周六：sat-0930 09:30 hip-hop 'Youth First Hip-Hop' youth first-class 45m maya 6/14；sat-1030 10:30 jazz 'Teen Jazz Basics' teen beginner 60m jules 9/16；sat-1145 11:45 contemporary 'Adult First Contemporary' adult first-class 75m elena 8/16；sat-1315 13:15 jazz 'Adult Jazz Repertoire' adult advanced 60m jules 14/16。周日无常规课程，显示 'Sunday · Rest and reset' 以及工作室 12:00–17:00 的前台时间。从开始时间 + 时长计算结束时间，从容量 − 已预订计算剩余名额。名额标签：0 = 'Full'，1–3 = 'Only N spots'，否则 'N spots'。未满的 first-class 和 beginner 课程显示 Coral 的 'Trial eligible' 药丸标签。如果变量变化，重命名课程并为三个新风格重写描述，同时保留天数、时间、年龄段、级别、数量和容量。
   布局：自身无视觉输出。src/lib/schedule.ts 导出 filteredSessions(filters)、groupedByDay(sessions)、spotsLabel(session)、isTrialEligible(session) 以及安全的查询解析。筛选器组合 style AND age AND level。未知查询值被忽略并替换为规范值；无空白页或异常。
   动效：不适用
2. **时间表刊头** — 共享实心 Header。眉题 'THE WEEK · 24 CLASSES · AGES 7+'。H1 'PICK A TIME. FIND YOUR PEOPLE.' 导语：'Filter by style, age and level. Open a class for the full picture, or reserve a free trial where you see the Coral pill.' 右侧摘要面板：'FIRST TIME HERE?' 带 'Start with any First class or Beginner session. Your first one is free.' 以及主按钮 'Book a free trial' → ./index.html#trial。下方，class-contemporary.webp 的宽幅裁剪，桌面端 16:5、移动端 16:8，带小说明 'Contemporary foundations · Main room'。
   布局：Ink 背景，padding-top 156px 包含固定页头。刊头网格：文字列 1–8，摘要列 10–12 在 Raised 上，24px 内边距和圆角。H1 使用 clamp(54px, 7.4vw, 104px) 和 max-width 1000px。图片带 margin-top 56px，全容器宽度，24px 圆角。低于 800px 时摘要堆叠在导语下方。
   动效：H1 加载时遮罩行。摘要和图片淡入一次；无自动播放视频。
3. **筛选器** — 三个带标签的单选 chip 组：STYLE = 'All styles' 加上从 [STYLES] 解析出的三个名称；AGE = 'All ages'、'7–12'、'13–17'、'18+'；LEVEL = 'Any level'、'First class'、'Beginner'、'Intermediate'、'Advanced'。选中的 chip 为 Coral 配 Ink 文字，aria-pressed 为 true。实时结果计数 'SHOWING 24 OF 24 CLASSES' 和 Clear 按钮出现在组之后；Clear 仅在筛选器激活时显示。使用 history.replaceState 将状态同步到 ?style=hip-hop&age=adult&level=first-class，并在加载时读取，以便课程和教师链接正常工作。打开和关闭课程抽屉时保留所有三个筛选器。无结果时，渲染 'No classes match all three filters.' 以及按钮 'Clear filters' 和 'Ask the desk'（tel 链接），而非空网格。
   布局：粘性固定在页头下方，桌面端 top 76px、移动端 68px，z-index 30，Ink 96% 带背景模糊和 Rule 底边框。容器行中标签使用 mono 11px Muted，chip 高 36px。低于 800px 时每组为独立的水平溢出行，无 body 级水平滚动；结果计数位于组下方。
   动效：Chip 填充在 140ms 内变化。结果计数交叉淡入淡出。筛选面板本身在 Clear 出现时从不改变高度；预留其空间。
4. **周列表（Week list）** — 从周一到周日的七个日期分组。日期标题包含 Archivo Black 30px 的完整星期名称，以及反映筛选条件的等宽字体班级数量。每个匹配的课程是一个按钮行：开始–结束时间使用 IBM Plex Mono 13px；标题使用 Manrope 800 18px，下方以小号 Muted 文本显示风格名称；年龄和级别胶囊标签；教师姓名；名额标签加上 72px 的可用性轨道（已预约/容量用 Coral 填充，Rule 背景）；ChevronRight。在适当位置于标题旁添加 'Trial eligible'。整行保持可点击，以便抽屉解释候补名单。不匹配的行被移除，没有匹配的日期被省略，但无筛选条件激活时的周日除外。当前星期几根据访客时钟获得一个小号 Lilac 的 'TODAY' 标签，但不显示当前日期。
   布局：容器最大宽度 1240px，内边距 56px 0 96px。日期分组有 1px Rule 顶部边框，标题内边距 24px 0 12px。课程行使用 CSS grid 列 110px minmax(240px, 2fr) minmax(160px, 1fr) 150px 150px 24px，间距 20px，居中对齐，Raised 背景，16px 圆角，18px 内边距，下外边距 8px。低于 1080px 时隐藏单独的教师列并将教师放在标题下方；grid 变为 88px 2fr 1fr 120px 20px。低于 700px 时每行变为两列卡片：时间和标题在前，年龄/级别标签其次，名额和 ChevronRight 底部对齐。无表格式水平滚动。
   动效：行在首次进入视图时以 20ms 交错显现，之后筛选变化使用 180ms 的 opacity/y 过渡，不触发布局高度动画。悬停/聚焦时边框变为 Coral，ChevronRight 移动 3px。
5. **课程详情抽屉（Class detail drawer）** — 点击一行会打开右侧抽屉，显示所选课程，并在 URL 中镜像 ?class=<session id> 同时保留筛选条件；有效的 class 查询参数会在加载时打开它。头部：风格 slug 标签、日期和开始–结束时间、关闭按钮。标题，然后是年龄、级别、时长和容量的胶囊标签。描述由课程和级别组合而成：基础课描述术语和热身，组合课描述学习一个短句，剧目课描述一个为期四周的可选演出短句，不要求表演。'WHAT TO EXPECT' 列出 '15-minute guided warm-up'、'Steps demonstrated at two speeds'、'A short combination with options'、'Water breaks whenever you need one'。'WHAT TO BRING' 因风格而异：Hip-Hop 和 Jazz = 干净运动鞋、舒适服装和水；Contemporary = 袜子或赤脚、用于地面动作的分层衣物和水。教师区块使用匹配的肖像裁剪为 64px 正方形、全名和专长；这个小肖像是装饰性的，alt 为空，因为姓名就在旁边。可用性轨道带有精确的 'N of 16 booked · N spots left'。符合条件的非满员课程页脚：主按钮 'Reserve this as my free trial' → ./index.html?class=<id>#trial；其他非满员课程：主按钮 'Ask about this class' → tel 链接和说明文字 'Free trials are available in First class and Beginner sessions.' 满员课程：主按钮 'Join the waitlist by phone' → tel 链接，无虚假在线候补名单。次要按钮 'Close'。
   布局：固定右侧面板宽度 460px，全高，Ink 背景，Rule 左边框，独立滚动，粘性头部和页脚；低于 560px 时 100vw。背景遮罩 Ink 72%。role dialog、aria-modal、由标题标记。打开时焦点移至关闭按钮，捕获 Tab，Escape 和背景遮罩关闭，焦点返回原始行并锁定 body 滚动。
   动效：抽屉以 360ms --ease-beat 从 100% → 0 滑入，背景遮罩 180ms 淡入。内容在面板之后以 40ms 交错进入；减少动效时仅使用 100ms 淡入。
6. **日程帮助和共享页脚（Schedule help and shared footer）** — 页脚上方三个简洁的帮助区块：Clock 图标 'ARRIVE 15 MINUTES EARLY' — 'The teacher will show you the room and where to put your things.'；Users 图标 'SIXTEEN MAX, FOURTEEN FOR YOUTH' — 'Capacity is fixed so everyone can see the instructor and cross the floor safely.'；CalendarCheck 图标 'NEED A DIFFERENT DAY?' — 'Call (512) 555-0148 up to six hours before class and we will move your reservation.' 然后是与 index.html 相同的 Visit 和 Footer 组件。
   布局：Plum 背景，三列，间距 24px，每列由 Rule 顶部线条分隔而非浮动卡片。低于 760px 时堆叠，间距 32px。
   动效：简单 Reveal，无循环效果。

## 资源
- 图片：为本设计生成了六张模板图片。构建前，用 curl -L -o 将每个精确 URL 下载到所列本地路径：https://media.vibefather.ai/assets/f6760505-d224-4c8b-94b0-79a9a41365ad/hero-dance.webp → public/images/hero-dance.webp（首页主视觉；object-position 64% 50%；alt 'A fictional adult dance ensemble moving across a dark studio under coral and lilac light'）；https://media.vibefather.ai/assets/f6760505-d224-4c8b-94b0-79a9a41365ad/class-contemporary.webp → public/images/class-contemporary.webp（当代舞课程卡片和时间表刊头；object-position 50% 45%；alt 'Two fictional contemporary dancers practicing a wide floorwork phrase'）；https://media.vibefather.ai/assets/f6760505-d224-4c8b-94b0-79a9a41365ad/recital-stage.webp → public/images/recital-stage.webp（汇演面板；object-position 50% 50%；alt 'Fictional dancers seen from behind during a recital rehearsal'）；https://media.vibefather.ai/assets/f6760505-d224-4c8b-94b0-79a9a41365ad/teacher-maya.webp → public/images/teacher-maya.webp（Maya 个人资料和抽屉肖像；alt 'Maya Rivera, a fictional hip-hop instructor, in the studio'）；https://media.vibefather.ai/assets/f6760505-d224-4c8b-94b0-79a9a41365ad/teacher-jules.webp → public/images/teacher-jules.webp（Jules 个人资料和抽屉肖像；alt 'Jules Bennett, a fictional jazz instructor, in the studio'）；https://media.vibefather.ai/assets/f6760505-d224-4c8b-94b0-79a9a41365ad/teacher-elena.webp → public/images/teacher-elena.webp（Elena 个人资料和抽屉肖像；alt 'Elena Park, a fictional contemporary instructor, in the studio'）。每一张都需署名 'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template'。
- 图片：在项目根目录创建 ASSETS.md，包含路径、源 URL、作者和许可证的表格。为六张图片分别给出其精确的 media.vibefather.ai URL 和精确署名 'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template'。同时将 @fontsource/archivo-black、@fontsource-variable/manrope 和 @fontsource/ibm-plex-mono 列为 OFL-1.1，将 lucide-react 列为 ISC。不得使用其他照片或图片服务。
- 图标：仅对 Menu、X、ArrowRight、ChevronRight、Plus、Check、Clock、Users、CalendarCheck、AlertCircle、LoaderCircle、MapPin、Phone、Mail 和 Printer 使用 lucide-react；描边宽度 1.75，继承颜色。public/favicon.svg 为手写，viewBox 0 0 32 32：一个 32×32 圆角方形 Ink 背景，以及两个 6×18 节拍条，分别位于 x 8/y 8 Coral 和 x 18/y 6 Lilac，不含字母。网站字标仍为纯文本加两个 CSS 条；无工作室标志资源。
- 字体：通过 Setup 中指定的三个 Fontsource 包自托管 Archivo Black、Manrope Variable 和 IBM Plex Mono。仅导入所列字重，以便 Vite 在本地打包 woff2 文件；绝不请求字体 CDN。
- 图片：用代码绘制：页眉条、favicon、课程节奏条、可用性轨道、倒计时单元格、CSS 票券缺口和 SVG 街区示意图。这些是原创的简单几何图形，不是复制的插图或品牌图标。

## 不要做
- 不使用后端、服务器代码、API 路由、数据库、身份验证、支付服务、邮件服务、分析或第三方 API。筛选、倒计时、预约确认和持久化完全在客户端完成；绝不要声称已发送邮件或已收取付款。
- 使用固定的 Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + Motion 技术栈和两个 HTML 入口。除非用户明确更改技术栈，否则不要使用路由器、UI 套件、日历库、倒计时包或表单库。
- 所有内部导航使用相对文件链接，例如 ./index.html、./classes.html、./index.html#trial、./classes.html?style=hip-hop 和 ./index.html?class=wed-1845#trial。绝不要使用裸目录或前导斜杠路由。无效的查询值应安全回退，且不产生控制台错误。
- 自行托管每个脚本、样式、字体、图标和图像。不要使用 CDN 脚本或链接、Google Fonts、Adobe Fonts、远程地图瓦片、分析、热链接照片或占位图服务。在构建前将列出的六张图像下载到 public/images/。
- 不要使用 Unsplash、Pexels、Pixabay、Google Images、CC BY-NC 或 CC BY-SA 资源。不要用真实的舞蹈室、舞者或教练照片替代。所有六张生成的图片和所有三个教练身份都是虚构的占位符，不得与真实个人相似。
- 不要使用真实的舞蹈室名称、标志、口号、时间表、价格或联系方式；不要使用可识别的舞者或名人；不要使用真实的表演、场地、特许经营或课程项目品牌；不要使用品牌服装、可读标牌或复制的图像。
- 不要使用参考网站的代码、文案、插图、吉祥物、自定义字体或独特图标。仅使用此处描述的原始布局和简单代码绘制的几何图形。依赖项必须保留所列的宽松许可证；不要使用 Aceternity UI、Tailwind Plus、购买的模板或未授权的源代码。
- 仅通过 Fontsource（OFL）使用 Archivo Black、Manrope 和 IBM Plex Mono。不要使用商业字体，也不要使用字体托管 CDN。
- 生产构建使用 npm run build 输出到 dist/，Vite base 为 './'，启用压缩，sourcemap 为 false，且不将 src/ 复制到 dist/。保持 dist/ 在 20 MB 以下，目标在 12 MB 以下。
- 不要添加 SEO 工作：不要元描述、Open Graph 标签、JSON-LD、站点地图或关键词堆砌的文案。仅需要指定的纯标题、主题色和 favicon。
- 不要进行身体羞辱、转变承诺、精英舞者门槛或医疗声明。演出参与保持可选。所有人物、传记、价格、可用性和评论（如果以后添加）均为虚构的示例内容。
- 严格按照规定尊重 prefers-reduced-motion。停止轨道，移除遮罩、视差、缩放和交错动画，并保持所有信息可见。倒计时绝不能产生负数，并且必须使用等宽固定宽度数值。
- 网站必须在 1440×900 和 390×844 下正常工作，零控制台错误且无页面级水平溢出。时间表标签可以在其自身行内滚动；课程行和倒计时必须在移动端重排。
- 所有控件均可通过键盘访问，并具有可见焦点。标签暴露 aria-pressed，手风琴暴露 aria-expanded，筛选结果暴露 aria-live，抽屉和移动菜单捕获并恢复焦点，表单错误使用 role alert 和关联描述。
- 将每个字符串、价格、时间、图像路径和示例记录保留在 src/content.ts 中。不要使用 lorem ipsum、填充内容或组件中矛盾的硬编码品牌细节。当变量更改时，重写所有默认特定内容。
- 不要显示当前日历日期或版权年份。重复的时间表可以按星期标记 TODAY，只有配置的虚构演出活动显示其活动日期。

---
— Prompt by VibeFather · https://vibefather.ai/t/dance-studio-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
