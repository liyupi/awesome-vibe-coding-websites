> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 家庭服务报价落地页（Home Services Quote Landing Page）

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的单页获客网站，[BRAND] 是一家服务 [CITY] 的 [TRADE] 公司，可通过 [PHONE] 全天候 24/7 联系。它必须像真实的行业落地页一样实现转化：一条在滚动时始终可见的紧急呼叫栏、一个位于首屏的即时报价估算器（工种、房屋面积、紧急程度），可实时计算价格区间、六张带有固定起步价的服务卡片、一个带虚构社区列表的服务区域 ZIP 查询器、一条保障承诺带、业主评价、一条四步流程带，以及一个立即致电的收尾。单页：index.html。一切都在浏览器中运行；不会向任何地方提交数据。

- 受众：深夜 9 点在手机上搜索的紧急情况业主（爆管、锅炉故障、无热水），以及比较装修报价的规划者。年龄偏 35–70 岁，对价格敏感但被紧迫感驱动；他们想要一个价格区间、电话那头的一个真人，以及公司持证且本地的证明。
- 目标：产生电话呼叫和预约估价上门。访客应在十秒内看到紧急联系电话、到达承诺和估算器的开头；在两分钟内看到其工种的价格区间。
- 语气：平实、快速、诚实，像一位优秀的调度员。简短陈述句，具体数字（分钟、美元、年），不用感叹号，不用没有具体细节的“家族经营”陈词滥调。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/barlow-condensed（OFL-1.1）、@fontsource/barlow（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务器代码、无外部 API。
- 设置：
  - 使用 react-ts 模板通过 npm create vite@latest 搭建脚手架。项目根目录下有一个 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base 设为 './'，plugins 为 [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4（tailwindcss + postcss + autoprefixer），content 为 ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将 Design 下的每种颜色以 kebab-case 键添加到 theme.extend.colors（paper、mist、navy、navy-soft、ink、slate-blue、rule、orange、orange-deep、orange-pale、good），并设置 fontFamily display 为 ['Barlow Condensed', 'Arial Narrow', 'sans-serif']，sans 为 ['Barlow', 'system-ui', 'sans-serif']。将 borderRadius 的 DEFAULT 设为 10px，并添加 maxWidth { container: '1200px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/barlow-condensed/600.css'、'@fontsource/barlow-condensed/700.css' 以及 '@fontsource/barlow/400.css'、'@fontsource/barlow/600.css'；在入口文件中导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（所有字符串、数字、服务、价格区间、ZIP、街区、评价、步骤和 FAQ 答案，均带类型）、src/lib/brand.ts（brandSlug = [BRAND] 转为小写并将每一段非字母数字字符替换为 '-'，phoneDigits = [PHONE] 仅保留数字用于 tel: 链接，emailDomain = 去掉连字符的 brandSlug + '.com'）、src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键前缀为 brandSlug + ':'）、src/lib/estimate.ts（纯函数 estimate(jobType, homeSize, urgency) → { low, high, minutes }，基于 content.ts 中的价格区间）。
  - 状态：src/store/lead.ts 是一个小型外部 store（useSyncExternalStore），保存估算器选项 { jobType, homeSize, urgency }、ZIP 输入和结果，以及最终表单提交后的已保存线索 { name, phone, problem }，持久化到 localStorage 键 brandSlug + ':lead'。
  - src/components/ 中的组件：EmergencyBar.tsx（sticky）、Header.tsx、MobileMenu.tsx、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、Footer.tsx；Hero.tsx（带估算器卡片）、Estimator.tsx（JobPicker.tsx、SizePicker.tsx、UrgencyPicker.tsx、EstimateResult.tsx）、Guarantees.tsx（BadgeShape.tsx）、Services.tsx（ServiceCard.tsx）、ZipChecker.tsx、AreaMap.tsx（内联 SVG）、Reviews.tsx、Process.tsx、LeadForm.tsx、Faq.tsx。src/pages/Home.tsx 将它们与 Header 和 Footer 组合在一起。
  - 在首次构建之前，使用 curl -L -o 并按照给定的确切文件名，将 Assets 下列出的每张图片下载到 public/images/ 中。构建本身从不获取任何内容。
  - public/favicon.svg 如 Assets 下所述。index.html：lang 为 en，<meta name='theme-color' content='#13293F'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[BRAND] — [TRADE] in [CITY] · 24/7</title>。
  - 在项目根目录下按 Assets 下所述编写 ASSETS.md。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张图片。保持在 10 MB 以下。

## 变量
- [BRAND] — 公司名称（默认：“Trueflow Plumbing & Heating”）。虚构的行业公司名称。用于字标、标题标签、页脚、电子邮件（dispatch@ + 不含连字符的 brandSlug + .com）以及 localStorage 键。绝不是真实加盟商或公司。
- [TRADE] — 行业（默认：“Plumbing & Heating”）。公司从事的业务。驱动六张服务卡片、估算器的作业列表、流程条文案和 FAQ。保持相同数量：6 项服务、8 种作业类型、3 种尺寸、3 种紧急程度。
- [CITY] — 城市（默认：“Columbus, Ohio”）。公司工作的地点。用于标题、主视觉、区域地图标签和页脚。街区和 ZIP 前缀保持虚构感；只有城市可以是真实的。
- [PHONE] — 电话（默认：“(614) 555-0184”）。24/7 热线，格式为带 555 交换机的本地号码。用于紧急栏、主视觉、CTA 按钮（由数字构建的 tel: 链接）和页脚。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接指向 https://vibefather.ai/t/home-services-quote-landing-page（默认：是；删除此行以移除它）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块键控，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- Paper `#FFFFFF` — 页面背景、卡片、估价器面板。
- Mist `#F1F4F8` — 交替区块背景（Services、Process）、输入框填充、标签（chips）。
- Navy `#13293F` — Hero 背景、页头表面、页脚、紧急栏文字、照片叠加层（以 rgba(19,41,63,x) 形式）。
- Navy Soft `#1D3A57` — Navy 上的悬停表面、估价器选中步骤填充、深色边框。
- Ink `#17222E` — 浅色背景上的标题和正文、图标颜色。
- Slate `#5B6B7B` — 次要文字、说明文字、眉题（eyebrows）、禁用状态（45% 不透明度）。
- Rule `#DCE2EA` — 1px 细线、卡片边框、输入框边框、地图等高线。
- Orange `#E8622A` — 唯一强调色：紧急栏背景、主 CTA、价格数字、选中标签、焦点环、地图图钉。
- Orange Deep `#C94E1D` — 主按钮悬停和按下状态。
- Orange Pale `#FBE3D6` — 估价结果背景、徽章填充、服务卡片悬停色调。
- Good `#2E7D5B` — 成功状态：ZIP 覆盖勾选、表单已保存勾选、保证勾选标记。

### 排版（Typography）
- 展示字体：H1、H2、H3、服务名称、价格数字、字标、大尺寸电话号码：Barlow Condensed（OFL），字重 600/700
- 文本与 UI：正文、眉题、按钮、导航、表单字段、说明文字、数字（价格和估价使用 font-variant-numeric tabular-nums）：Barlow（OFL），字重 400/600

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。容器最大宽度 1200px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面端 104px、1024px 以下 80px、640px 以下 64px。字号比例：H1 clamp(46px, 7vw, 96px) Barlow Condensed 700，行高 0.98，大写，字距 0.005em；H2 clamp(34px, 4.4vw, 58px) Barlow Condensed 700 大写；H3 24px Barlow Condensed 700；导语 Barlow 400 18px / 1.65；正文 Barlow 400 16px / 1.7（最大宽度 64ch）；眉题 Barlow 600 12px 大写 字距 0.16em Slate，前面有一条 24px x 2px 的 Orange 线，间隔 12px；说明文字 Barlow 400 13px Slate。按钮：高度 54px，内边距 0 28px，Barlow 600 15px 大写 字距 0.08em。主按钮：Orange 填充，Paper 文字。次按钮：1px Ink 边框，Ink 文字（在 Navy 上：1px Paper 边框，Paper 文字）。小按钮高 40px。输入框：高度 52px，1px Rule 边框，Mist 填充，16px Barlow，聚焦边框 Orange。电话链接：Barlow Condensed 700 26px，tabular-nums。全局焦点环：2px Orange 轮廓，偏移 3px。
- 圆角：卡片、按钮、输入框、标签、照片和估价器面板为 10px。仅标签、徽章和脉冲圆点为 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现和结果变化；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于手风琴和选择器切换。自信，绝不轻佻。
- 动效：显现：包裹在 <Reveal> 中的区块从 opacity 0、translateY(16px) 开始，当 15% 可见时（Motion whileInView，viewport once）在 600ms 内以 --ease-out 动画到静止状态。同级元素错开 70ms（index prop）。
- 动效：紧急栏：'24/7' 旁有一个小的 Orange 脉冲圆点（scale 1 到 1.3，1400ms 循环，在减少动效下暂停）；栏本身在加载后 300ms 向下滑入 100% 到位。
- 动效：估价器：每个选择器选项在 120ms 内填充标签，并将估价面板的数字滑动到新范围——价格在旧值和新值之间以 --ease-io 在 500ms 内计数，分钟徽章交叉淡入淡出。切换步骤时面板内容水平滑动 16px，260ms --ease-io（AnimatePresence mode 'wait'）。
- 动效：ZIP 检查器：提交时，一个旋转器（CSS 绘制的圆环）旋转固定 700ms，然后结果卡片向上滑动 12px——对于已服务前缀显示 Good 勾选和 'Covered — [neighborhood]'，否则显示 Orange 'Call us' 卡片。
- 动效：服务卡片：悬停时上浮 4px，价格上跳 2px；Orange 的 'from' 线从 0 增长到 24px 宽度。
- 动效：区域地图：当滚动进入视图时，半径圆绘制（stroke-dashoffset 到 0）历时 900ms，然后厢式车图钉以 100ms 错开弹出；覆盖的 ZIP 圆点淡入。
- 动效：评论：卡片悬停时上升 8px；星行在首次查看时以 400ms 从左到右填充 Orange。
- 动效：页头：在 Navy hero 上透明，使用 Paper 文字；滚动 40px 后变为 96% 不透明度的 Paper、Ink 文字、1px Rule 边框和一个小 Orange 'Call' 按钮，250ms 过渡。紧急栏保持在其上方（两个堆叠的粘性行，紧急栏在前）。
- 动效：链接：.link-draw 在悬停和 focus-visible 时以 250ms --ease-out 从 0% 到 100% 宽度增长 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 禁用栏滑动、脉冲、计数、绘制、错开图钉和布局动画（以静止状态渲染）。颜色和边框悬停变化保留。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：仅使用真实摄影，纪实且务实，所有六张均为此模板以一致风格制作：自然日光、海军蓝和白色配橙色工具点缀、干净的工作现场、细腻颗粒。绝不出现人物：厢式车、工具、安装、零件和细节——没有面孔，没有手。厢式车、工具或零件上没有可读文字、标志或品牌。每张照片使用 object-fit cover，object-position 在 Assets 下给出，10px 圆角，无阴影；Mist 上的照片获得 1px Rule 轮廓。照片下方说明文字为 Barlow 13px Slate。代码绘制：favicon、字标（仅字体）、虚构的保证徽章（纯几何形状——盾牌、圆环、勾选、时钟——绝不是真实认证机构的标志）、区域地图、标签和估价器面板。图标：仅 lucide-react，描边宽度 1.75。

## 页面与区块
### 首页（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[BRAND] = Trueflow Plumbing & Heating，[TRADE] = Plumbing & Heating，[CITY] = Columbus, Ohio，[PHONE] = (614) 555-0184）。将每个字符串、数字和列表放入 src/content.ts 并从中渲染。若任何变量值不同，请重写每个标题、服务、价格区间、工作列表、ZIP 列表、街区、评价、步骤和 FAQ 答案，使其对新行业具体且可信，同时保持相同结构和数量（6 项服务、8 个估价器工作、3 种尺寸、3 种紧急程度、5 个 ZIP 前缀、3 条评价、4 个步骤、5 个 FAQ）。所有人物、价格、街道和数字均为虚构。全篇使用的公司事实：地址 2210 Foundry Road, [CITY]；电话 [PHONE]，24/7 由真人接听，而非菜单；平均紧急到达时间 47 分钟；12 名技术人员，6 辆货车；持证且投保（虚构许可证 'OH-88412'）；开工前报固定价格；维修享 2 年保修；无加班、周末或节假日附加费；始于 2009 年。服务 ZIP 前缀（虚构街区）：43012 Ashcroft、43054 Bellwood、43214 Foundry District、43219 Millrace、43230 Quarry North。最近可用时段：紧急 'today'，估价上门 'tomorrow 8am–10am'。
   布局：不适用
   动效：不适用
2. **紧急栏（吸顶）** — 橙色栏，最高优先级层（吸附在页眉上方）。左侧：Lucide PhoneCall 16px 和 '24/7 emergency line — answered by a person'（Barlow 600 14px）。中/右：脉冲点和 '24/7' 徽章、电话 '[PHONE]' 作为 tel: 链接（Barlow Condensed 700 20px Paper）以及 'Average arrival: 47 min'（Barlow 400 13px Paper 85% 不透明度）。640px 以下：仅徽章、电话链接和到达说明，居中。
   布局：Position sticky top 0，z-50，高度 44px，全宽。所有内部锚点（index.html#services 等）。
3. **页眉** — 左侧：字标 '[BRAND]'（Barlow Condensed 700 22px 大写）及第二行 'Licensed & insured · [CITY]'（Barlow 600 10px 大写，字距 0.2em），链接至 ./index.html。中间导航（Barlow 600 14px）：'Services' → #services、'Pricing' → #pricing、'Estimate' → #estimate、'Reviews' → #reviews、'FAQ' → #faq。右侧：小号橙色按钮 'Call [PHONE]'（tel: 链接）和汉堡菜单（Lucide Menu 22px，820px 以下）打开 MobileMenu：全屏 Navy 面板，链接为 Barlow Condensed 700 28px 大写 Paper，呼叫按钮在底部，关闭图标在右上角。
   布局：Position sticky top 44px（紧急栏下方），高度 72px，容器对齐，在英雄区上方透明，滚动 40px 后变为 Paper。移动菜单覆盖视口，从右侧 300ms 滑入。
4. **带估价器的英雄区** — Navy 背景。左侧（6 列）：眉题（橙色线）'Plumbing & Heating · [CITY]'，H1 'BURST PIPE? BOILER DOWN? *WE''RE ON THE WAY.*' 导语（Paper 85%，最大宽度 520px）：'Trueflow answers [PHONE] twenty-four hours a day — a dispatcher, not a menu. Flat-rate quotes before we touch a wrench, and a technician at your door in under an hour when it matters.' 三行信任信息配 Lucide 图标（ShieldCheck 'Licensed & insured, OH-88412'；Timer 'Average arrival 47 minutes'；BadgeCheck '2-year warranty on every repair'）。Navy 上的次要按钮 'See flat-rate prices' → #pricing。右侧（5 列，偏移 1）：Paper 上的估价器卡片（见下一节）。英雄区底部账目行：'12 technicians · 6 vans · 15 years on the road'（Barlow 600 14px Paper 75% 不透明度）。
   布局：页眉下方顶部垂直内边距 128px，底部 96px。照片 hero-van.webp 作为全出血背景，18% 不透明度叠加在 Navy 上，配 linear-gradient(180deg, rgba(19,41,63,0.92), rgba(19,41,63,0.96))。1024px 以下：单列，估价器在信任行下方。
5. **即时报价估价器** — Paper 卡片，id='estimate'。卡片头部：眉题 'Instant estimate' 和 H3 'What will it run me?' 配说明 'A honest range before anyone visits. Three questions, no email.' 卡片内步骤芯片：1）工作 — 8 个选项为 2x4 芯片网格：'Burst pipe / leak'（紧急档）、'Blocked drain'、'Water heater'、'Boiler / furnace'、'Toilet or faucet'、'Radiators'、'Sump pump'、'Renovation quote'。2）房屋尺寸 — 'Apartment'、'House up to 2,000 sq ft'、'House over 2,000 sq ft'。3）紧急程度 — 'Emergency (now)'、'This week'、'Planning ahead'。Orange Pale 上的结果面板（始终可见，实时更新）：'Estimated: $180 – $420'（Barlow Condensed 700 40px Ink，tabular-nums，变化间计数），行 'Typical fix: 60–90 minutes at the house' 和 'Final flat rate confirmed before work starts.' 按钮：主按钮 'Book a visit' → #lead（将估价与线索一起存储）和幽灵按钮 'Or call [PHONE]'（tel:）。说明：'Ranges from 2,400 jobs in the last two years. Your wall stays closed until you agree the number.'
   布局：Paper 卡片 10px 圆角，1px Rule 边框，32px 内边距。芯片：Mist 填充，1px Rule 边框，999px 圆角，选中填充 Navy 配 Paper 文字；悬停边框橙色。结果面板 20px 圆角，24px 内边距。估价计算（区间 × 尺寸乘数 1 / 1.15 / 1.3，紧急程度 +60% / +0% / −5%，四舍五入到 $10）位于 src/lib/estimate.ts，区间在 content.ts 中。
6. **保证条** — Mist 色带，四个虚构徽章形状（绘制 SVG，Orange 在 Orange Pale 上，绝非真实认证标志）：ShieldCheck 'Licensed & insured' — 'State license OH-88412, $2M coverage, both current.'；Receipt 'Flat-rate quotes' — 'The number we quote is the number you pay. No hourly meter running.'；Wrench '2-year warranty' — 'Repairs warranted two years, parts and labor, in writing.'；Clock 'No overtime rates' — 'Nights, weekends and holidays cost the same as Tuesday at noon.'
   布局：四等列，24px 间距，徽章 64px 圆形 + 标题 Barlow Condensed 700 20px + 两行正文 Barlow 14px。768px 以下：2x2，然后单列。
7. **服务** — 区块 id='services'。眉题 'What we fix' 和 H2 'Six jobs, flat rates, no surprises.' 六张卡片，每张顶部有照片、名称（Barlow Condensed 700 24px）、一行描述，底部行 'from $89'（Barlow Condensed 700 24px Orange）+ 'Typical: 60–90 min'（Barlow 13px Slate）：1）照片 tools-flat.webp — 'Emergency leaks & bursts' — 'Water where it shouldn''t be. We shut it off, dry it out and fix the line.' — from $129。2）照片 boiler-install.webp — 'Boilers & furnaces' — 'Repairs, service and replacements, all makes we can still get parts for.' — from $210。3）照片 pipe-work.webp — 'Drains & blockages' — 'Camera inspection first, so we fix the pipe, not a guess.' — from $99。4）照片 kitchen-sink.webp — 'Kitchens & bathrooms' — 'Faucets, toilets, sinks and the pipes behind the walls.' — from $89。5）照片 hero-van.webp（复用）— 'Water heaters' — 'Tank and tankless, same-day swaps when the shower goes cold.' — from $240。6）照片 technician-belt.webp — 'Radiators & sump pumps' — 'Bleeding, balancing and the pump that keeps the basement dry.' — from $150。每张卡片按钮 'Get an estimate' → #estimate（向上滚动并预选匹配的工作芯片）。
   布局：Paper 背景。3x2 网格（24px 间距），卡片在 Mist 上 10px 圆角，1px Rule 边框；照片宽高比 4:3，仅顶部圆角 10px。900px 以下：2 列，640px 以下：单列。
8. **ZIP 检查器与区域地图** — 区块 id='pricing'。眉题 'Where we roll' 和 H2 'In [CITY] and forty minutes around it.' 左侧：ZIP 检查器 — 输入框（占位符 'Your ZIP code'），提交 'Check'；对服务前缀（43012、43054、43214、43219、43230）显示 Good 结果卡：勾选图标、'Covered — that''s [neighborhood].' 和 'Next estimate slots: tomorrow 8am–10am. Emergencies: today.'；任何其他 5 位输入显示橙色卡片：'Not on our regular routes — but call [PHONE]; we cover most of the metro and we''ll tell you straight.'；无效输入显示内联提示 'Five digits, like 43214.' 右侧：AreaMap SVG — Rule 轮廓街道网格，中心橙色图钉标注 '[BRAND] HQ'，虚线橙色半径圆标注 '40 min'，五个 Good 圆点标注街区，小号北箭头；说明 'Routes as the crow drives, not as the crow flies.'
   布局：Mist 背景。两列：检查器 5 列，地图 6 列偏移 1。地图 SVG viewBox 0 0 720 520，宽度 100%。900px 以下：堆叠，检查器在前。
9. **评价** — 区块 id='reviews'。眉题 'Neighbors, quoted' 和 H2 'Three of 412 reviews.' 卡片：1）五颗橙色星 — '"Sunday night, water heater died, water everywhere. Trueflow answered on the second ring and the tech was pulling in at minute fifty-one. Quoted before he touched anything."' — Dana K., Foundry District — 'Emergency water heater swap'。2）五颗星 — '"The camera found the blockage was roots, not toys (two kids, both innocent). Flat rate, clean up better than they found it, warranty in writing."' — Marcus and Jo T., Quarry North — 'Drain line repair'。3）四星半（绘制半星）— '"Booked an estimate for a bathroom redo. The quote came in three parts — must, should, someday — which is the most honest document I''ve received from a trades company."' — Priya S., Bellwood — 'Renovation estimate'。
   布局：Paper 背景。三等列，24px 间距，卡片在 Mist 上 1px Rule 边框 28px 内边距；引文 Barlow 400 16px / 1.7，署名 Barlow 600 13px Slate，工作以橙色显示。860px 以下：堆叠。
10. **流程与线索表单** — 区块 id='lead'。眉题 'How a visit goes' 和 H2 'Four steps, zero drama.' 条带：1）Phone 'You call [PHONE]; a dispatcher answers, asks three questions and books a window.' 2）ClipboardList 'The tech arrives, diagnoses and quotes a flat rate — before any tool leaves the van.' 3）Wrench 'You agree the number; the work happens; the old parts go in a box, not the wall.' 4）Sparkles 'We clean up, you get the warranty in writing, and the invoice matches the quote.' 下方，Paper 卡片上的线索表单在条带旁（右列）：姓名输入、电话输入、文本域 'What''s going on?'（可选）、主按钮 'Request my visit' 和说明 'We call back within 15 minutes during the day. Nothing is sent anywhere — this demo keeps your details in your browser.' 提交时（姓名 + 有效电话必填）：卡片切换为 Good 确认 — 勾选圆圈、'Got it, [NAME].' 'A dispatcher will call [PHONE]. If it''s flooding, call now — don''t wait for us to click.' 以及已存储的估价行（若存在）（'Your estimate: $180 – $420, Water heater, this week'）。
   布局：Navy 背景，Paper 文字。条带：四个步骤一排，编号橙色圆圈由 1px Paper/25% 线连接。表单 5 列右偏移 1；输入 Paper 填充，Navy 文字。1024px 以下：条带变为 2x2，表单在下方。
11. **FAQ** — 区块 id='faq'。眉题 'Straight answers' 和 H2 'Asked at the door, answered here.' 五个手风琴：1）'Do you charge extra at night or on weekends?' — 'No. Nights, weekends and holidays bill at the same flat rates as Tuesday at noon. The estimate you see is the estimate you pay.' 2）'Are you licensed and insured?' — 'State license OH-88412 and $2M liability coverage, both current; both numbers are on every invoice and every van.' 3）'What does the warranty cover?' — 'Repairs carry two years, parts and labor, in writing. Replacements carry the manufacturer''s term plus our first year of labor.' 4）'Can I supply my own parts or fixtures?' — 'Yes. We install customer-supplied parts; the labor warranty still applies, the part warranty passes to the maker.' 5）'What if the quote changes once you open the wall?' — 'It stops. Work pauses, you see photos of what we found, and nothing continues without a new number you agreed to.'
   布局：Paper 背景，手风琴行配 1px Rule 分隔线，问题为 Barlow Condensed 700 22px 大写，答案 Barlow 16px / 1.7 最大宽度 66ch，右侧 Plus 图标。容器最大宽度 780px。
12. **页脚** — Navy 背景。四列：1）字标 '[BRAND]'（Barlow Condensed 700 24px Paper）上方 '[TRADE] · Est. 2009' 和 'OH-88412 · $2M insured'。2）'Reach us'：电话 tel: '[PHONE]' 24/7，dispatch@ + emailDomain，地址 2210 Foundry Road, [CITY]。3）'Hours'：'Phones: 24/7, humans only' / 'Office: Mon–Sat 7am–6pm' / 'Estimates: same week, usually tomorrow'。4）'This page'：锚点 Services、Pricing、Estimate、Reviews、FAQ。底部行在 1px Paper/15% 规则线下方：'© [BRAND]. Fixed right, priced straight.'
   布局：垂直内边距 72px，4 等列，底部行在规则线下方 40px。768px 以下：两列，然后堆叠。

## 资源

- 图片：为本设计制作的模板照片（可随模板自由再分发）。用 curl -L -o 将每张图片下载到 public/images/：https://media.vibefather.ai/assets/a0691ecf-c44e-4489-a4a2-9d11c6fc7a8c/hero-van.webp → public/images/hero-van.webp（Hero 背景，在 Navy 上以 18% 不透明度呈现，Services 卡片 5；alt 'A clean white service van parked on a quiet residential street'）；https://media.vibefather.ai/assets/a0691ecf-c44e-4489-a4a2-9d11c6fc7a8c/tools-flat.webp → public/images/tools-flat.webp（Services 卡片 1；alt 'Plumbing tools laid out neatly on a workbench'）；https://media.vibefather.ai/assets/a0691ecf-c44e-4489-a4a2-9d11c6fc7a8c/boiler-install.webp → public/images/boiler-install.webp（Services 卡片 2；alt 'A new wall-mounted boiler installed on a clean utility wall'）；https://media.vibefather.ai/assets/a0691ecf-c44e-4489-a4a2-9d11c6fc7a8c/pipe-work.webp → public/images/pipe-work.webp（Services 卡片 3；alt 'Copper pipe fittings and a valve arranged after a repair'）；https://media.vibefather.ai/assets/a0691ecf-c44e-4489-a4a2-9d11c6fc7a8c/kitchen-sink.webp → public/images/kitchen-sink.webp（Services 卡片 4；alt 'The cabinet under a kitchen sink with fresh white PVC trap and shutoff valves'）；https://media.vibefather.ai/assets/a0691ecf-c44e-4489-a4a2-9d11c6fc7a8c/technician-belt.webp → public/images/technician-belt.webp（Services 卡片 6；alt 'A loaded tool belt hung on a pegboard wall'）。共六个文件。
- 图片：在项目根目录写入 ASSETS.md，包含一张表：path、source URL、author、license——每张照片一行（source 'media.vibefather.ai, made for this template'，author 'VibeFather'，license 'Distributed with the template'），另加 @fontsource/barlow-condensed 和 @fontsource/barlow（OFL-1.1）以及 lucide-react（ISC）的行。绝不用图库网站（Unsplash、Pexels、Pixabay）或含人物、人脸或可读品牌标识的图片替换照片。
- 图标：仅使用 lucide-react：PhoneCall、Phone、Menu、X、Plus、Check、ShieldCheck、BadgeCheck、Timer、Clock、Receipt、Wrench、Sparkles、MapPin、Star、StarHalf、ClipboardList、ArrowRight。描边宽度 1.75，16–24px，颜色继承。public/favicon.svg 手写：viewBox 0 0 32 32，一个 32x32 的 rect，rx 7，填充 #E8622A，一个 Paper（#FFFFFF）扳手字形。无其他 logo：公司名称始终以文字排版呈现；保障徽章绘制为纯几何形状（盾牌、圆环、对勾、时钟），绝不模仿任何真实认证机构的标志。
- 字体：安装 @fontsource/barlow-condensed 和 @fontsource/barlow，并按 Setup 中所述在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包进 dist/。
- 图片：以代码绘制：区域地图（内联 SVG 街道、半径圆、图钉和圆点）、虚构的保障徽章、标签、估算器结果面板、脉冲圆点、星星（包括半星）以及 favicon。无其他位图，无插图，无地图瓦片。

## 禁止事项
- 无后端、无表单提交、不向任何 API 发起 fetch 请求：估价器、ZIP 检查和潜在客户表单全部仅在浏览器内解析（localStorage）；不向任何地方发送数据，表单中已注明这一点。
- 此单页上的所有链接均为锚点（./index.html#services、#pricing、#estimate、#reviews、#lead、#faq），外加由 [PHONE] 构建的 tel: 链接。
- 一切资源自托管：字体通过 Fontsource 加载，图标以 npm 包或内联 SVG 形式使用，图片下载至 public/images/。不使用 CDN 的 <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具。
- 生产构建：压缩，无 source map，不将 src/ 复制到 dist/，使用单一命令 npm run build，输出位于 dist/ 且小于 10 MB。
- 不使用真实公司或特许经营名称，不使用真实许可证编号或认证机构（徽章形状为虚构几何图形），不使用地图瓦片或嵌入内容，不使用包含面部、手部、人物或货车、工具、零件上可辨识品牌标识的照片。
- 除 'Est. 2009' 外，任何地方不出现日期或年份；网站从不显示当天日期。
- 除可选的页脚署名链接外，网站内绝不提及 VibeFather 或任何其他品牌；所有文案均为虚构的美式英语。
- 在所有位置遵循 prefers-reduced-motion：禁用脉冲、数字递增、绘制、滑动和交错图钉动画；保留颜色/边框悬停效果。
- 网站必须在 1440x900 桌面端和 390x844 移动端正常工作，控制台零错误；估价器和 ZIP 检查器仅用键盘即可操作，每个交互元素都有可见的焦点环。
- 文案保持具体：不使用 lorem，不使用填充内容，不使用无法验证的最高级表述；每个价格、分钟数和保修条款均来自 src/content.ts。

---
— Prompt by VibeFather · https://vibefather.ai/t/home-services-quote-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
