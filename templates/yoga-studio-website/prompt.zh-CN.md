> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 瑜伽馆网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的两页网站，[BRAND] 是一家社区瑜伽工作室，位于 [CITY] 的 [STREET]，自 [FOUNDED] 年起营业，教授 [PRACTICE]。网站必须让人感觉像一间真实、宁静的工作室：空旷房间、瑜伽垫和辅具的通透摄影，用平实的语言解释三种练习风格，入门优惠，教师简介，带每节课费用计算的会员方案对比，新手常见问题，可按级别和风格筛选的每周课表，以及一个在客户端确认并保存预约位置的预订弹窗。页面：index.html（首页）、schedule.html（本周课表）。一切都在浏览器中运行；不会向任何地方发送数据。

- 受众：住在短途车程内、正决定尝试第一节课的成年人，以及晚上 10 点比较课表的流失会员。年龄混合，多为女性，担心自己是教室里最新的人；她们想确切知道第一次到访是什么感觉，以及费用是多少。
- 目标：用入门优惠填满瑜伽垫，并用会员方案留住她们。访客应在十秒内感受到房间的宁静、看到入门价格，并找到本周适合初学者的课程。
- 语气：温暖、从容且具体，像老师在门口迎接第一次来的人。短句，具体数字（分钟、美元、瑜伽垫），不用健康养生术语，不做医疗声明，不用感叹号。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/marcellus（OFL-1.1）、@fontsource-variable/mulish（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 npm create vite@latest 以 react-ts 模板搭建脚手架。项目根目录下有两个真实 HTML 页面：index.html（入口 src/main-home.tsx）和 schedule.html（入口 src/main-schedule.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0, rollupOptions { input { index: resolve(__dirname, 'index.html'), schedule: resolve(__dirname, 'schedule.html') } } }。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4（tailwindcss + postcss + autoprefixer），content ['./index.html', './schedule.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将 Design 下的每种颜色以 kebab-case 键（sand、shell、card、fern、moss、clay、clay-deep、rule、night）添加到 theme.extend.colors，并添加 fontFamily display ['Marcellus', 'Georgia', 'serif']、sans ['Mulish Variable', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 18px，并添加 maxWidth { container: '1160px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/marcellus/400.css' 和 '@fontsource-variable/mulish'；从两个入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（两个页面的所有字符串、数字、课程、教师、档位、时段、FAQ 答案和图片路径，带类型），src/lib/brand.ts（brandSlug = [BRAND] 转为小写并将每一段非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 brandSlug + '.com'），src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键以 brandSlug + ':' 为前缀），src/lib/useOpenNow.ts（根据时段表生成工作室营业指示器）。
  - 状态：src/store/booking.ts 是一个小型外部 store（useSyncExternalStore），保存模态框状态 { classId, day, name } 和已确认名额列表，持久化到 localStorage 键 brandSlug + ':spots'。客户端阻止预订已满的课程（每节课容量来自 content.ts，预置的已占用数量在重新加载后保持稳定）。
  - 组件位于 src/components/：Header.tsx、MobileMenu.tsx、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、LevelPill.tsx、Footer.tsx；首页：Hero.tsx、IntroOffer.tsx、Styles.tsx（StyleCard.tsx）、Teachers.tsx（TeacherCard.tsx）、Memberships.tsx（TierCard.tsx）、Faq.tsx；日程页：ScheduleMasthead.tsx、FilterBar.tsx、WeekGrid.tsx（DayColumn.tsx、ClassCard.tsx）、BookingModal.tsx、FirstTimers.tsx。src/pages/Home.tsx 和 Schedule.tsx 组合它们；两个页面都渲染 Header 和 Footer。
  - 在首次构建之前，使用 curl -L -o 并按照 Assets 下给出的确切文件名，将 Assets 下列出的每张图片下载到 public/images/。构建本身从不获取任何内容。
  - public/favicon.svg 如 Assets 下所述。两个 HTML 文件：lang en，<meta name='theme-color' content='#F5F1E8'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>。标题：index.html '<title>[BRAND] — Yoga on [STREET], [CITY]</title>'，schedule.html '<title>The week — [BRAND]</title>'。
  - 在项目根目录编写 ASSETS.md，如 Assets 下所述。
  - dist/ 包含两个 HTML 文件、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张图片。保持在 10 MB 以下。

## 变量
- [BRAND] — 工作室名称（默认："Stillwater Yoga"）。虚构的工作室名称。用于字标、标题、页脚、电子邮件（hello@ + 不含连字符的 brandSlug + .com）以及 localStorage 键。绝不是真实的工作室或连锁品牌。
- [CITY] — 城市（默认："Boulder, Colorado"）。工作室所在地。用于主视觉眉题、到达路线文案和页脚。街道名称保持虚构感；只有城市可以是真实的。
- [STREET] — 街道（默认："Linden Court"）。工作室所在的虚构街道（'9 Linden Court'）。决定地址和主视觉文案。使用常见英文词汇，不是真实地址。
- [PRACTICE] — 练习风格（默认："Vinyasa, Yin and Restorative"）。工作室教授的三种风格。决定三张风格卡片、周课表中的课程名称（保持 3 种风格和每周 20 节课）、筛选标签和教师专长。严格保持三个以逗号分隔的风格名称。
- [FOUNDED] — 开业年份（默认："2018"）。四位数字年份。用于主视觉眉题、字标行 'Est. [FOUNDED]'、故事文案和教师"练习始于"时间跨度。
- [CREDIT] — 在页脚保留一个小型"Template by VibeFather"链接，指向 https://vibefather.ai/t/yoga-studio-website（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值撰写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 沙色（Sand）`#F5F1E8` — 两个页面的页面背景、输入框填充色。
- 贝壳色（Shell）`#EDE6D8` — 交替区块背景（Styles、Memberships）、行和标签的悬停填充色、图片容器。
- 卡片色（Card）`#FDFBF6` — 卡片表面（课程卡片、教师卡片、档位卡片、模态框）、浅色面板背景。
- 蕨绿色（Fern）`#2A352F` — 标题和正文文字、主要描边按钮、图标颜色、模态框边框。
- 苔藓色（Moss）`#6E7F6A` — 次要文字、说明文字、眉题、温和课程的等级胶囊、开放圆点。
- 陶土色（Clay）`#AE7A64` — 唯一强调色：主要按钮、价格、入门优惠边框和标题强调、选中标签、焦点环。
- 深陶土色（Clay Deep）`#916152` — 主要按钮悬停和按下状态、等级 2 胶囊。
- 分隔线色（Rule）`#DCD3C2` — 1px 细线、卡片边框、输入框边框、日列分隔线。
- 夜色（Night）`#26302B` — 页脚、主视觉叠加底色、照片叠加层（以 rgba(38,48,43,x) 表示）。

### 字体排印
- 展示字体：H1、H2、H3、课程名称、教师姓名、大尺寸价格、字标：Marcellus（OFL），字重 400
- 文本和 UI：正文、眉题、按钮、导航、表单字段、日程时间、数字（时间和价格使用 font-variant-numeric tabular-nums）：Mulish（OFL），字重 400/600/800

### 布局与动效
- 间距：8px 基础单位。容器最大宽度 1160px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面端 104px、1024px 以下 80px、640px 以下 64px。字号阶梯：H1 clamp(42px, 6vw, 88px) Marcellus 400，行高 1.06，字距 0；H2 clamp(32px, 4vw, 54px) Marcellus 400，行高 1.1；H3 24px Marcellus 400，行高 1.25；导语段落 Mulish 400 18px / 1.7 Fern 85% 不透明度；正文 Mulish 400 16px / 1.75（最大宽度 64ch）；眉题 Mulish 800 12px 大写 字距 0.18em Moss，前面有一条 24px x 1px 的 Clay 线，间距 12px；说明文字 Mulish 400 13px Moss。按钮：高度 50px，内边距 0 28px，Mulish 600 14px 字距 0.06em。主要按钮：Clay 填充，Card 文字。次要按钮：1px Fern 边框，Fern 文字，透明（在照片上：1px Card 边框，Card 文字）。小按钮高 38px，内边距 0 16px，12px 文字。输入框：高度 50px，1px Rule 边框，Card 填充，16px Mulish，聚焦时边框 Clay。全局焦点环：2px Clay 轮廓，偏移 3px。
- 圆角：卡片、照片、输入框、标签和模态框为 18px。仅等级胶囊、筛选标签、教师首字母和开放圆点使用 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现和模态框；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于筛选和 FAQ。缓慢而平静——没有弹跳，没有急停。
- 动效：显现：包裹在 <Reveal> 中的区块从 opacity 0、translateY(16px) 开始，在 15% 可见时（Motion whileInView，viewport once）以 900ms --ease-out 动画到静止状态。同级元素以 100ms 错开（index prop）。
- 动效：主视觉照片：加载时图片从 1.05 缩放到 1.0，历时 2600ms --ease-out；滚动时，随着主视觉滚出，图片平移 0 到其高度的 8%（Motion useScroll，offset ['start start', 'end start']）。H1 各行从 translateY(24px) 和 opacity 0 升起，以 160ms 错开，在加载后 300ms 开始。
- 动效：呼吸圆点：主视觉标题下方一个 10px Clay 圆点，以 5000ms ease-in-out 循环从 1 缩放到 1.5 再返回（吸气/呼气），在减少动态效果下暂停为静态圆点。
- 动效：课程卡片：悬停时上浮 4px，并在 300ms 内将边框柔化为 Fern；点击打开 BookingModal。筛选变化时卡片淡出（opacity，8px y），并在 350ms --ease-io 内重新错开淡入。
- 动效：预订模态框：Night 叠加层在 300ms 内淡入到 45%；Card 面板上升 24px 并在 380ms --ease-out 内淡入；关闭时在 260ms 内反向。确认视图在面板内交叉淡入，位置编号在 600ms 内逐字符打出。Escape 和点击叠加层关闭。
- 动效：FAQ 手风琴：高度 0 到 auto，opacity 0 到 1，历时 340ms --ease-io；Plus 图标旋转 45 度变成 X。
- 动效：会员档位：中间（推荐）档位以 1px Clay 描边并上浮 8px；悬停时每个档位的每节课计算行在 500ms 内将价格向上/向下计数到有效的每节课价值。
- 动效：页头：在照片主视觉上透明，使用 Card 文字；滚动 40px 后变为 Sand 94% 不透明度、backdrop-filter blur(10px)、Fern 文字和 1px Rule 底部边框，250ms 过渡。在 schedule.html 上从一开始就是实色。
- 动效：链接：.link-draw 在悬停和 focus-visible 时以 300ms --ease-out 从 0% 到 100% 宽度生长 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 禁用主视觉缩放和视差、H1 升起、呼吸圆点、计数动画、打字动画和错开筛选（以静止状态渲染）。颜色和边框悬停变化保留。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：仅使用真实摄影，平静而通透，全部六张为本模板以一致风格制作：柔和日光、浅色木材、亚麻和植物、空房间和静物道具、纪实编辑风格、细腻颗粒。两种照片类型，绝不混用：房间和道具静物（主视觉、三张风格卡片、晚间蜡烛照片——没有人、没有手、没有脸）和教师肖像（AI 生成的虚构人物，仅头肩肖像，自然光，绝不全身姿势，绝不手触道具，绝不类似任何真实个人；它们是占位符，用户可替换为自己的员工）。日程和课程头像绝不是照片：用代码绘制的首字母圆圈。任何地方都没有可读文字或标志。每张照片使用 object-fit cover，object-position 在 Assets 下给出，18px 圆角，无阴影；Sand 上的照片获得 1px Rule 轮廓。照片下方说明文字为 Mulish 13px Moss。用代码绘制：favicon、字标（仅文字）、等级胶囊、教师首字母圆圈、呼吸圆点、分隔线和模态框位置卡片。图标：仅 lucide-react，描边宽度 1.5。

## 页面与区块
### 首页（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[BRAND] = Stillwater Yoga，[CITY] = Boulder, Colorado，[STREET] = Linden Court，[PRACTICE] = Vinyasa, Yin and Restorative，[FOUNDED] = 2018）。将每个字符串、数字和列表放入 src/content.ts 并从中渲染；两个页面共用一个内容文件。若任何变量值不同，请重写每个标题、风格卡片、课程、教师简介、档位、营业时间和 FAQ 答案，使其对新工作室具体且可信，同时保持相同的结构、数量和长度（3 种风格、20 节周课、4 位教师（肖像）、3 个档位）。所有人物、课程、街道和数字均为虚构。全篇使用的工作室信息：地址 9 [STREET], [CITY]；电话 (720) 555-0129；邮箱 hello@ + emailDomain（hello@stillwateryoga.com）；一间教室，18 张垫子；辅具免费借用；营业时间（客户时钟）：周一至周五 6:00–21:00，周六 7:30–17:00，周日 8:00–16:00。入门优惠：14 天内 3 节课 30 美元。单次 22 美元，10 次卡 180 美元（每节 18 美元），月度无限 135 美元。垫子、砖、伸展带和毯子免费；课后茶饮。教师肖像为 AI 生成的虚构人物，与默认名单匹配（不 resemblance 任何真实个人）；alt 保持 'A fictional yoga teacher'，以便工作室替换为自己的照片。
   布局：不适用
   动效：不适用
2. **页眉（所有页面）** — 左侧：字标 '[BRAND]'（Marcellus 22px，letter-spacing 0.05em），第二行 'Yoga studio · Est. [FOUNDED]'（Mulish 800 10px 大写 letter-spacing 0.22em），链接到 ./index.html。中间导航（Mulish 600 14px）：'The week' → ./schedule.html，'Styles' → ./index.html#styles，'Teachers' → ./index.html#teachers，'Membership' → ./index.html#membership。当前页面链接有 1px 下划线。右侧：主按钮 'Book a class' → ./schedule.html 和汉堡菜单（Lucide Menu 22px，820px 以下）打开 MobileMenu：全屏 Shell 面板，链接为 Marcellus 28px，预订按钮在底部，关闭图标在右上角。
   布局：固定顶部，高度 76px，容器对齐。仅在首页英雄区上方时，它开始透明并使用 Card 文本。移动菜单覆盖视口，从右侧滑入 300ms。
3. **英雄区** — 背景照片 hero-studio.webp，带有 Night 渐变叠加，在文本列后方增强至约 rgba(38,48,43,.55)，以便浅色文案保持可读；在移动端，在粘性页眉下方添加顶部内边距，并给页眉一个实色背景，使 H1 避开它。眉题（Card，Card 中线条 60%）：'[STREET] · [CITY] · Est. [FOUNDED]'。H1 分两行：'Slow down,' / '*on your way in.*' 导语（Card 88%，最大宽度 560px）：'[BRAND] is one bright room on [STREET] with 18 mats, borrowed props and teachers who learned to teach before they learned to market. [PRACTICE], seven days a week, first class nerves understood.' 按钮：主按钮 'Claim 3 classes for $30' → ./index.html#intro，照片上次按钮 'See the week' → ./schedule.html。按钮下方是呼吸点及说明文字（Card 70%）：'Inhale on the way in. Exhale on the way out.' 底部四项账目（Marcellus 26px Card 值，Mulish 800 12px 大写标签 70%）：'3 for $30' / 'Intro offer, 14 days'；'20 classes' / 'Every week, all levels'；'18 mats' / 'One room, never crowded'；'7 days' / 'From 6am to 9pm'。
   布局：高度 92svh，最小高度 640px，最大高度 980px。图像 object-fit cover，object-position 50% 55%。叠加 linear-gradient(180deg, rgba(38,48,43,0.44) 0%, rgba(38,48,43,0.10) 35%, rgba(38,48,43,0.22) 60%, rgba(38,48,43,0.78) 100%)。内容块锚定在容器内左下角，账目上方 120px，最大宽度 760px。账目：绝对底部 0，全容器宽度，1px Card/25% 顶部边框，4 等列，内边距 24px 0 32px。768px 以下：H1 为 42px，账目变为 2x2 网格，按钮全宽堆叠。
4. **入门优惠** — 区块 id='intro'（其页眉必须在加载时避开粘性栏）。一个宽 Card 面板，1px Clay 边框和 18px 圆角，左侧由代码绘制的票券式数字块视觉（'3'）锚定：左侧，眉题 'First time here' 和 H2 'Three classes, thirty dollars, two weeks.'，正文 'New to [BRAND] or new to yoga? Take any three classes within fourteen days for $30 — mats and props included, no membership talk until you''re ready.'；右侧，主按钮 'Start with the week' → ./schedule.html 和说明 'Book from the schedule; pay at the studio.' 面板右上角注释，Mulish 13px Moss：'One per person, generously interpreted.'
   布局：Sand 背景，面板容器对齐，垂直内边距 40px，两列（7 文本 / 4 按钮，偏移 1），项目垂直居中，48px 内边距。768px 以下堆叠，按钮全宽。
5. **风格** — 区块 id='styles'。眉题 'What we teach' 和 H2 'Three styles, one room.' 三张卡片（照片仅为教室和辅具静物——绝无人物；Yin 卡片使用晚间烛光教室静物）：1）'Vinyasa' — 照片 mats-still.webp，alt 'Rolled mats and folded blankets on a shelf by the window' — 'Movement tied to breath, one pose flowing into the next. Expect warmth, a little sweat and a clear thread through the hour. Our 6:30am sunrise class is this, before coffee.' — 药丸行 'Levels 1–2 · 60 min'。2）'Yin' — 照片 props-still.webp，alt 'Yoga blocks, a strap and a ceramic bowl arranged on pale wood' — 'Long, quiet holds close to the floor — two to five minutes each. The deep stretch happens while you do nothing at all, which is harder than it sounds and worth it.' — 药丸 'All levels · 60 min'。3）'Restorative' — 照片 candle-studio.webp，alt 'Candles and folded blankets laid out in a dim studio room' — 'Bolsters, blankets and almost no effort. The 7:30pm class ends by candlelight; regulars describe it as a nap that counts. Come tired, leave lighter.' — 药丸 'Gentle · 75 min'。每张卡片链接 'Find a class' → ./schedule.html?style=<slug>（日程页面筛选到该风格；无查询打开时显示所有课程——绝不报错）。
   布局：Shell 背景。三个等列（24px 间隙），卡片在 Card 上，1px Rule 边框，28px 内边距：照片顶部（宽高比 4:3，18px 圆角），名称 Marcellus 26px，正文 Mulish 15px / 1.7，药丸，小次按钮。900px 以下：堆叠。
6. **教师** — 区块 id='teachers'。眉题 'The teachers' 和 H2 'Four people, four reasons to come.' 卡片带有 AI 生成的教学肖像（4:3）——虚构人物，平静的教室光线：1）teacher-amara.webp，alt 'Amara teaching a morning flow, a fictional yoga teacher' — Amara Chen — 'Vinyasa lead' — 'Twelve years of practice, the last five at [BRAND]. Trained in Mysore and Boulder; teaches the sunrise classes and the level 2 flows.' — 理念 '*"Strong beats fast, every time."*' — 'Teaches Mon, Wed, Fri'。2）teacher-devon.webp，alt 'Devon seated in a quiet yin pose, a fictional yoga teacher' — Devon Alvarez — 'Yin & breathwork' — 'Came to yoga from distance running and stayed for the stillness. Runs the midday yin and the breath workshop on Saturdays.' — '*"The pose ends when you stop fighting it."*' — 'Teaches Tue, Thu, Sat'。3）teacher-priya.webp，alt 'Priya arranging bolsters for restorative class, a fictional yoga teacher' — Priya Raman — 'Restorative' — 'Ten years teaching restorative and yoga nidra. Believes the 7:30pm class is the real event of the day and schedules her life around it.' — '*"Rest is a skill. Practice it."*' — 'Teaches Wed, Fri, Sun'。4）teacher-sam.webp，alt 'Sam guiding a foundations pose, a fictional yoga teacher' — Sam Whitfield — 'Foundations & community' — 'Six years in, permanently curious. Teaches the beginner foundations course and remembers every name by week two, without tricks.' — '*"Show up. That''s the whole practice."*' — 'Teaches Mon, Sat, Sun'。肖像仅为头肩半身照（无全身姿势，无手扶辅具），以一致构图裁剪为 3:4，使卡片高度匹配。
   布局：Warm White 背景。桌面端四个等列（24px 间隙），1024px 以下 2x2，640px 以下一列。卡片：教学肖像顶部（宽高比 4:3，18px 圆角），名称 Marcellus 24px，角色行 Mulish 800 12px 大写 Clay，简介 Mulish 15px / 1.6，理念行 Mulish 600 斜体 15px Espresso，教学日说明。
7. **会员方案（Memberships）** — 区块 id='membership'。眉题（Eyebrow）'Membership'，H2 'Simple math, no contracts.' 三张档位卡片：1) 'Drop-in' — $22 — 'One class, any time. Bring a friend and they pay the same; no codes, no fine print.' — 单节课价格行 '$22 a class'。2) 'Class pack'（重点推荐，1px Clay 描边，上浮）— $180 — 'Ten classes, valid four months. Shareable within a household; we track it so you don''t have to.' — 单节课价格行 '$18 a class — you save $40'。3) 'Monthly unlimited' — $135 — 'Every class, every style, including the workshops'' open portions. Pause it twice a year, no questions.' — 单节课价格行 '$15 a class at 9 classes — most members come 11'。网格下方：说明文字 'All options include mats, props and tea. Cancel anytime; the door stays open either way.' 每个档位的按钮：'Pay at the studio'（次要按钮，非支付链接，指向 ./schedule.html）。
   布局：Shell 背景。三列（24px 间距），中间档位上浮 8px 并带 Clay 描边。卡片表面，32px 内边距：档位名称 Mulish 800 12px 大写 Moss，价格 Marcellus 44px Fern，描述 Mulish 15px / 1.7，单节课价格行 Mulish 600 13px Clay，全宽次要按钮。低于 900px：堆叠，取消上浮。
8. **常见问题（FAQ）** — 眉题 'Before your first class'，H2 'Asked once an hour, answered here.' 五个手风琴条目：1) 'What should I bring?' — 'Yourself and comfortable clothes. Mats, blocks, straps and blankets are free to borrow — most people borrow everything for the first month.' 2) 'What do the levels mean?' — 'All levels: breathing is the only prerequisite. Level 1 adds standing sequences, Level 2 expects familiarity with the poses, Gentle means we stay low and slow. Every teacher offers options in both directions.' 3) 'Can I arrive late?' — 'Doors close when class starts — it''s a one-room studio and the door talks. If you''re five minutes early, you''re perfectly on time.' 4) 'I can''t touch my toes.' — 'Neither could half the room, once. Toes are a direction, not a destination; every pose has a version that meets today''s body.' 5) 'Do you have showers?' — 'One, with towels. The tea after class is the better reason to linger.'
   布局：Sand 背景，手风琴行之间用 1px Rule 分隔线，问题用 Marcellus 20px，答案用 Mulish 16px / 1.75，最大宽度 64ch，右侧 Plus 图标。容器最大宽度 760px。
9. **页脚（所有页面）** — Night 背景。四列：1) 文字标识 '[BRAND]'（Marcellus 22px Card），下方 'Yoga studio · [STREET], [CITY]'。2) 'Find us'：地址 '9 [STREET]'、'[CITY]'、电话 (720) 555-0129、hello@ + emailDomain。3) 'Hours'：周一至周五 6:00–21:00，周六 7:30–17:00，周日 8:00–16:00，说明文字 'The room opens 15 minutes before class.' 4) 'Around the studio'：'The week' → ./schedule.html，'Styles' → ./index.html#styles，'Teachers' → ./index.html#teachers，'Membership' → ./index.html#membership。底部一行位于 1px Card/15% 分隔线下方：'© [BRAND]. Breathe first.' 文字为 Card 80% 不透明度，链接为 Card 并带 .link-draw。
   布局：垂直内边距 72px，4 个等宽列，底部一行位于分隔线下方 40px。低于 768px：两列，再堆叠。

### 本周课表（`schedule.html`）
1. **页首区（Masthead）** — 从一开始就是实心页头。眉题 'The week'，H1 'Twenty classes, one calm room.' 导语（最大宽度 620px）：'Filter by level or style, click a class, and your mat is held in this browser. Pay at the studio — cash, card or a membership you already love.' 右侧为营业中胶囊标签（Moss 圆点 + 'Studio open · closes 9pm'，根据营业时间表计算）和说明文字 'Times are local; the studio clock is atomic, allegedly.'
   布局：Sand 背景，与容器对齐，垂直内边距顶部 136px（页头高度）+ 48px。H1 最大宽度 720px。页首区底部边框 1px Rule，位于文字下方 64px。低于 860px 时胶囊标签换行到导语下方。
2. **筛选栏（Filter bar）** — 吸附在页头下方（top 76px），Card 96% 不透明度并带模糊，底部 1px Rule 边框。左侧 'Level' 标签（999px）：'All levels'、'Gentle'、'Level 1'、'Level 2'。右侧 'Style' 标签：来自 [PRACTICE] 的三个风格加上 'All styles'。每组一个标签处于激活状态；激活标签填充 Fern，文字为 Card。最右侧：实时计数 '20 classes this week'，随筛选更新，以及一个 'Reset' 文字按钮，在有筛选激活时出现。
   布局：低于 768px 时标签横向滚动；计数和 Reset 固定在右侧。标签填充在 150ms 内切换。
3. **周网格（Week grid）** — 七个日期列（周一至周日），列头为星期名称（Mulish 800 12px 大写 Moss），不显示日期（不显示日期——模式每周重复）。每列中的课程卡片按时间排序：时间（Mulish 600 13px，tabular-nums）、名称（Marcellus 19px）、级别胶囊标签、时长说明 '60 min'、教师圆形头像 28px（复用教师肖像）、剩余名额说明（'4 mats left' 或 'Full — waitlist at the desk'）。20 节课：周一 6:30 Sunrise Vinyasa（L2，60m，AC）、12:15 Yin & Breath（All，45m，DA）、18:00 Slow Flow（L1，60m，AC）、19:30 Candlelight Restorative（Gentle，75m，PR）；周二 6:30 Sunrise Vinyasa（L2，60m，AC）、12:15 Lunch Express Flow（All，45m，SW）、18:00 Foundations（L1，75m，SW）、19:30 Deep Yin（All，60m，DA）；周三 6:30 Slow Flow（L1，60m，PR）、9:30 Gentle Morning（Gentle，60m，PR）、18:00 Vinyasa 2（L2，60m，AC）、19:30 Restorative & Sound（Gentle，75m，PR）；周四 6:30 Sunrise Vinyasa（L2，60m，AC）、12:15 Yin & Breath（All，45m，DA）、18:00 Slow Flow（L1，60m，SW）、19:30 Deep Yin（All，60m，DA）；周五 6:30 Vinyasa 2（L2，60m，AC）、18:00 Community Flow（All，60m，SW，'Pay what you can'）、19:30 Candlelight Restorative（Gentle，75m，PR）；周六 8:00 Foundations（L1，75m，SW）、9:30 Vinyasa All Levels（All，60m，AC）、11:00 Breath Workshop（All，90m，DA）；周日 9:00 Slow Flow（L1，60m，PR）、11:00 Yin & Tea（All，75m，DA）、17:00 Restorative Reset（Gentle，60m，PR）。风格标签将每节课映射到 Vinyasa、Yin 或 Restorative，用于风格筛选。满员课程（20 节中的 2 节，根据课程 id 稳定生成）显示删除线 'Full'。筛选默认 All levels 和 All styles（首次来访者看到所有课程）。'Pay what you can' 渲染为标题上方单独一行的胶囊标签；'Full · waitlist' 保持在一行；满员课程使用弱化标题加 'Full' 胶囊标签，绝不使用删除线。单元格中的教师标记是用代码绘制的首字母圆圈（Shell 填充，Fern 首字母）——绝不使用照片。卡片高度按行对齐；低于 760px 时网格变为垂直的逐日列表，带吸附的日期标题（无横向滚动）。
   布局：Sand 背景。桌面端 7 个等宽列，16px 间距（每列最小宽度 150px）；低于 1024px 时整个网格横向滚动（按列 scroll-snap，边缘渐隐）。课程卡片：Card 表面，1px Rule 边框，18px 圆角，16px 内边距，堆叠行；悬停上浮 4px。被筛掉的卡片以淡出移除（Motion AnimatePresence，popLayout）。
4. **预约弹窗（Booking modal）** — 点击任意课程卡片打开（满员课程除外，点击会抖动并显示候补说明）。面板在 Card 上：眉题 'Hold a mat'，课程名称（Marcellus 28px），详情行（星期与时间 · 级别 · 时长 · 教师姓名，来自首字母），正文 'We hold the mat for ten minutes past start. Pay at the studio — drop-in $22, the intro offer counts, memberships too.' 姓名输入框（必填，占位符 'Name on the mat'）。按钮：主要按钮 'Hold my mat'（未填姓名前禁用），次要按钮 'Not today'。确认后面板切换为名额视图：一个无 Sage 的 Fern 对勾圆圈逐笔绘制，'You''re in.'（Marcellus 30px），'for [NAME]'，'Spot 12 of 18'（根据种子已占用数 + 本次预约计算），课程详情行，说明文字 'Saved in this browser — screenshot it if you''re the careful kind. See you on the mat.' 按钮 'Book another class'（关闭弹窗）和 'Back to the studio' → ./index.html。预约持久化在 localStorage 中；已预约的课程在其卡片上显示 'Held for you'。
   布局：固定遮罩（Night 45% 不透明度），居中 Card 面板最大宽度 480px，24px 内边距，18px 圆角，焦点陷阱，Escape 和点击遮罩关闭。面板上升/淡入如 Motion。低于 480px 时面板底部锚定、全宽、顶部圆角。
5. **首次来访提示（First-timer note）** — 页脚上方的 Shell 色带：左侧，眉题 'First class checklist' 和单行列表带 Lucide 图标：Check 'Arrive 10 minutes early'，Check 'Everything''s provided'，Check 'Socks optional, opinions welcome'；右侧，主要按钮 'Claim 3 classes for $30' → ./index.html#intro，说明文字 'Pay at the studio, no card online.'
   布局：全宽色带，与容器对齐，两列（8 / 3 偏移 1），垂直内边距 72px。低于 768px 堆叠，按钮全宽。

## 资源

- 图片：为本设计制作的模板照片（可随模板自由再分发）。使用 curl -L -o 将每张图片下载到 public/images/：https://media.vibefather.ai/assets/759c26bd-aebe-42a7-b843-360f97ba8db8/hero-studio.webp → public/images/hero-studio.webp（首页主视觉，Styles 卡片 Vinyasa；object-position 50% 55%；alt 'Bright empty yoga studio with pale wood floors, plants and stacked mats'）；https://media.vibefather.ai/assets/759c26bd-aebe-42a7-b843-360f97ba8db8/candle-studio.webp → public/images/candle-studio.webp（Styles 卡片 Restorative；alt 'Candles and folded blankets laid out in a dim studio room'）；https://media.vibefather.ai/assets/759c26bd-aebe-42a7-b843-360f97ba8db8/teacher-amara.webp → public/images/teacher-amara.webp（教师卡片 Amara；alt 'Amara teaching a morning flow, a fictional yoga teacher'）；https://media.vibefather.ai/assets/759c26bd-aebe-42a7-b843-360f97ba8db8/teacher-devon.webp → public/images/teacher-devon.webp（教师卡片 Devon，Styles 卡片 Yin，周网格头像；alt 'Devon seated in a quiet yin pose, a fictional yoga teacher'）；https://media.vibefather.ai/assets/759c26bd-aebe-42a7-b843-360f97ba8db8/teacher-priya.webp → public/images/teacher-priya.webp（教师卡片 Priya；alt 'Priya arranging bolsters for restorative class, a fictional yoga teacher'）；https://media.vibefather.ai/assets/759c26bd-aebe-42a7-b843-360f97ba8db8/teacher-sam.webp → public/images/teacher-sam.webp（教师卡片 Sam；alt 'Sam guiding a foundations pose, a fictional yoga teacher'）。共六个文件。
- 图片：在项目根目录编写 ASSETS.md，包含一个表格：路径、来源 URL、作者、许可证——每张照片一行（来源 'media.vibefather.ai, made for this template'，作者 'VibeFather'，许可证 'Distributed with the template'），另加 @fontsource/marcellus 和 @fontsource-variable/mulish（OFL-1.1）以及 lucide-react（ISC）的行。绝不要用图库网站（Unsplash、Pexels、Pixabay）或包含人物、面孔或可读品牌标识的图片替换照片。
- 图标：仅使用 lucide-react：CalendarDays、Menu、X、Plus、Check、ArrowRight、Clock、Phone、Mail、MapPin、Sun、Moon、Wind、Flower2、Leaf、Heart、Sparkles、Users。描边宽度 1.5，16–24px，颜色继承。public/favicon.svg 手写：viewBox 0 0 32 32，一个 32x32 的 rect rx 9 填充 #2A352F，一个 Card（#FDFBF6）莲花风格字形，由三段简单的花瓣弧线组成。没有其他标志：工作室名称始终以文字排版呈现。
- 字体：安装 @fontsource/marcellus 和 @fontsource-variable/mulish，并按 Setup 中列出的方式在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包进 dist/。
- 图片：在代码中绘制：favicon、教师姓名首字母圆圈、级别和筛选胶囊、呼吸圆点、营业中圆点、模态框对勾圆圈、分隔线和日期列线。没有其他位图，没有插图，没有地图瓦片。

## 不要做
- 无后端、无表单提交、不向任何 API 发起 fetch：预约、容量和确认信息仅存在于浏览器中（localStorage）；不收取任何费用，也不发送任何内容。
- 每个内部链接都指向文件名（./index.html、./schedule.html、./schedule.html?style=yin、./index.html#intro）——绝不指向裸目录；不带查询参数打开 schedule.html 时显示所有课程。
- 一切自托管：字体通过 Fontsource，图标以 npm 包或内联 SVG 形式引入，图片下载到 public/images/。不使用 CDN 的 <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具。
- 生产构建：压缩，无 source map，不将 src/ 复制进 dist/，单条命令 npm run build，输出位于 dist/ 且小于 10 MB。
- 人像和工作室照片是 AI 生成的虚构人物（不 resemblance 任何真实个人），用作模板占位符；任何地方都不出现真实人物。
- 任何地方都不得出现医疗或疗愈宣称；只使用体验性语言（'leave lighter'，绝不用 'heals' 或 'treats'）。
- 除 'Est. [FOUNDED]' 外，任何地方都不出现日期或年份；周网格不含日期并按周重复；网站从不显示今天的日期。
- 除可选的页脚署名链接外，网站内绝不提及 VibeFather 或任何其他品牌；所有文案均为虚构的美式英语。
- 在所有地方尊重 prefers-reduced-motion：禁用视差、呼吸圆点、数字递增、打字机效果和交错筛选动画；保留颜色/边框悬停效果。
- 网站必须在 1440x900 桌面端和 390x844 移动端正常工作，控制台零错误；模态框仅用键盘即可操作，打开时焦点陷阱生效，每个交互元素都有可见的焦点环。
- 保持文案具体：不用 lorem，不用填充内容，不用健康养生陈词滥调；时间、价格和容量始终来自 src/content.ts。

---
— Prompt by VibeFather · https://vibefather.ai/t/yoga-studio-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
