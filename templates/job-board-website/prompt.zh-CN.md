> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 招聘网站（Job Board Website）

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个面向 [BOARD] 的招聘板，列出 [FOCUS]：对十二个职位进行搜索和筛选、职位详情页、四个公司页面、带实时预览的发布职位表单，以及一条已保存职位栏。页面：index.html、job.html?j=<slug>（无参数时显示第一个职位）、company.html?c=<slug>（无参数时显示第一个公司）、post.html。一切都在浏览器中运行；不会提交到任何地方。

- 受众：通勤途中在手机上快速浏览的人：他们两次点击即可筛选，扫一眼薪资区间，收藏三个职位，之后再回来。
- 目标：开始申请和发布职位。访客能在十秒内筛选出薪资超过 $100k 的远程职位；在两分钟内打开一个职位、收藏它，并瞄一眼公司。
- 语气：大报式的平实：短句、真实的薪资区间，没有任何“摇滚明星忍者”之类的东西。空状态里有一个冷幽默。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/fraunces（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 npm create vite@latest 以 react-ts 模板搭建脚手架（如果最新模板面向更新的主版本，则固定版本）。项目根目录下四个真实 HTML 页面：index.html（入口 src/main-index.tsx）、job.html（入口 src/main-job.tsx）、company.html（入口 src/main-company.tsx）、post.html（入口 src/main-post.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist'，sourcemap false，assetsInlineLimit 0，rollupOptions { input { index: resolve(__dirname, 'index.html')，job: resolve(__dirname, 'job.html')，company: resolve(__dirname, 'company.html')，post: resolve(__dirname, 'post.html') } } }。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './job.html', './company.html', './post.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将 Design 下的每种颜色以 kebab-case 键添加到 theme.extend.colors（warmwhite、panel、line、ink、softink、fern、fern-deep、fern-mist、ochre、clay、slateink、good），并设置 fontFamily display ['Fraunces', 'Georgia', 'serif']、sans ['Inter Variable', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 10px，并添加 maxWidth { container: '1200px', read: '760px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/fraunces/400.css'、'@fontsource/fraunces/600.css' 和 '@fontsource-variable/inter'；从所有四个入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（看板名称和焦点行、公司、职位、标签词汇及每个标签，带类型——companies: { slug, name, monogram, blurb, facts: { label, value }[], teamNote }，jobs: { slug, company, title, roleType, location, remote, salaryMin, salaryMax, tags[], posted: 静态相对标签, summary, description: string[], requirements: string[] }；用户发布的职位从 localStorage 合并），src/lib/brand.ts（boardSlug = [BOARD] 转为小写，并将每段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 boardSlug + '.com'，helloMail = 'hello@' + emailDomain），src/lib/route.ts（读取 ?j= / ?c=，解析或回退到第一个——绝不显示未找到），src/lib/filters.ts（applyFilters(jobs, { q, roleType, location, remoteOnly, salaryMin })），src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键为 boardSlug + ':saved' 和 ':posted'）。
  - 状态：src/store/saved.ts 是一个小型外部存储（useSyncExternalStore），保存已收藏的职位 slug，持久化在 saved 键下；src/store/posted.ts 在 posted 键下保存用户发布的职位（每个都是 jobs 形状的对象，带 'yours' 标志和从标题生成的 slug）。
  - src/components/ 中的组件：Header.tsx（Wordmark.tsx、SavedChip.tsx）、Footer.tsx、JobCard.tsx（MonogramTile.tsx、SalaryBand.tsx、TagChip.tsx、PostedLabel.tsx、SaveButton.tsx）、FiltersPanel.tsx（SearchInput.tsx、RoleSelect.tsx、LocationSelect.tsx、RemoteToggle.tsx、SalarySlider.tsx）、EmptyState.tsx；职位页面：ApplyPanel.tsx、RequirementList.tsx、RelatedJobs.tsx；公司：FactRow.tsx；发布：PostForm.tsx（Field.tsx）、PreviewCard.tsx。页面：src/pages/Home.tsx、Job.tsx、Company.tsx、Post.tsx。
  - SalarySlider：一个原生 range 输入，样式化（accent Fern），带等宽读数 '$100k+'；最小值映射 0/60/80/100/120/140/160k 档位；过滤时比较 salaryMin。
  - SaveButton：一个 Bookmark 图标，切换填充/未填充，带 140ms 缩放弹出；Header 的 SavedChip 计数在变化时动画；Home 上的已收藏条以水平滚动行列出已收藏职位（为空时隐藏）。
  - PostForm：字段 company、title、roleType 选择、location、remote 切换、salary min/max（数字，验证 min<max）、tags（最多三个，从词汇标签中选择）、summary（一行）、description（文本域）、requirements（每行一个的文本域）。失焦时内联验证（Clay 文本）。PreviewCard 从草稿实时渲染为真实 JobCard，带 'UNPOSTED' 标签。提交写入 posted 存储，弹出提示 'Posted — visible in this browser only' 并链接到列表（该职位出现在最前，标记为 'yours' 并带 Ochre 标签）。
  - public/favicon.svg 如 Assets 下所述。所有四个 HTML 文件：lang en，<meta name='theme-color' content='#FBFAF6'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>。标题：index '<title>[BOARD] — [FOCUS] jobs</title>'；job/company/post 在加载时设置 document.title。
  - 在项目根目录写入 ASSETS.md，如 Assets 下所述。
  - dist/ 包含四个 HTML 文件、带哈希的 JS/CSS、woff2 字体和 favicon.svg。保持在 6 MB 以下。

## 变量
- [BOARD] — 板块名称（默认："Deskwork"）。虚构板块的名称，一个单词。用于字标、标题、页脚、电子邮件（hello@ + 不含连字符的 boardSlug + '.com'）以及 localStorage 键。绝不使用真实板块。
- [FOCUS] — 板块聚焦领域（默认："design and product jobs"）。一个小写短语，命名该细分领域。重写主视觉文案、全部十二个职位标题、标签和公司简介，使板块读起来真实可信。保持具体。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/job-board-website（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块键控，以便日后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 暖白（Warm White）`#FBFAF6` — 全站页面背景。
- 面板（Panel）`#FFFFFF` — 卡片、表单、申请面板。
- 线条（Line）`#E6E2D8` — 1px 细线：分隔线、边框、分割线、表格行。
- 墨色（Ink）`#20211C` — 标题和正文文字、图标。
- 柔墨（Soft Ink）`#63645C` — 摘要、说明文字、发布时间标签、眉题。
- 蕨绿（Fern）`#3E7A52` — 唯一强调色：链接、主按钮、薪资区间、已保存状态、焦点环、激活的筛选器。
- 深蕨（Fern Deep）`#2F5F3F` — 主按钮的悬停和按下状态。
- 蕨雾（Fern Mist）`#E8F0E9` — 标签芯片、远程芯片、字母组合方块填充、悬停行。
- 赭石（Ochre）`#C08A1E` — 'yours' / 'UNPOSTED' 芯片以及“由你发布”标记。
- 陶土（Clay）`#C0603A` — 校验错误和逾期类警告（默认不出现）。
- 石板墨（Slate Ink）`#12271B` — 蕨绿填充上的文字。
- 良好（Good）`#3E7A52` — 表单成功、保存确认。

### 字体排印（Typography）
- 展示字体：H1、H2、职位标题、文字标识 — Fraunces，有存在感的墨色衬线体：Fraunces (OFL)，字重 400/600
- 文本与界面：正文、筛选器、卡片、表单；薪资使用等宽数字：Inter (OFL)，字重 400/500/600

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。容器最大宽度 1200px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px；阅读栏最大 760px。区块垂直内边距桌面端 88px、1024px 以下 64px、640px 以下 48px。字号阶梯：H1 clamp(34px, 4.6vw, 54px) Fraunces 600，行高 1.08；H2 28px Fraunces 600；职位标题 19px Fraunces 600；导语 17px Inter 400 / 1.65，90% 宽度；正文 15.5px / 1.7；眉题 12px 600 大写 letter-spacing 0.14em Soft Ink；说明文字和发布时间标签 13px Soft Ink；薪资区间 15px Inter 600 等宽数字。按钮：高度 46px，Inter 600 14px；主按钮 Fern 填充配白色文字，次按钮 Panel 上 1px Line 边框。输入框/下拉框：高度 46px，Panel 填充，1px Line 边框，聚焦时 Fern 边框 + 2px 偏移环。全局焦点：2px Fern 轮廓，3px 偏移。
- 圆角：卡片、面板、输入框、按钮 10px；芯片和已保存计数 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1)。大报节奏：安静移动，没有弹跳。
- 动效：显现：区块和卡片进入时在 500ms 内上升 10px（Motion whileInView，once），同级元素错开 50ms — 列表按行错开，而非卡片洗牌式错开。
- 动效：筛选：被筛掉的卡片变暗 20% 并下沉 2px（180ms），计数行交叉淡入淡出 — 行保持原有顺序；移除的卡片在淡出后才折叠高度（总计 240ms）。
- 动效：SaveButton：图标以 140ms 缩放弹出填充；SavedChip 计数以 160ms 滑动跳动。
- 动效：职位页：申请面板加载时落定 8px；Apply 按钮如实说明（'Apply — opens your mail client'，由公司 slug 构建的 mailto:）。
- 动效：发布表单：PreviewCard 随每次按键批次以 120ms 微淡入实时更新；校验错误 160ms 淡入；成功提示上升 8px。
- 动效：链接：.link-draw 在悬停和 focus-visible 时以 240ms 生长出 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 无显现、无变暗（被筛掉的卡片立即隐藏）、无弹出；一切静止并正常工作。在 index.css 中使用 CSS @media，外加 Motion 的 useReducedMotion。
- 图像：一张锚定照片：hero-office.webp，一个编辑风格的开放办公室场景（人们从背后或柔和侧影出现在办公桌前，面部不可辨认），用作 Ink 渐变下的主视觉背景。其余一切保持代码绘制：公司的 MonogramTiles、芯片、细线。图标：仅 lucide-react，描边宽度 1.75。favicon 为绘制的 SVG。

## 页面与区块
### 看板首页（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[BOARD] = Deskwork，[FOCUS] = design and product jobs）。将每个字符串、公司、职位和标签放入 src/content.ts 并从中渲染。若任何变量不同，请重写主视觉文案、全部十二个职位、标签和公司简介，使其针对该细分领域具体且可信，同时保持相同结构和数量（4 家公司、12 个职位、每个 3–4 个标签）。公司（slug · 名称 · 字母组合 · 简介 · 事实）：'larkspur-studio' 'Larkspur Studio' 'LS' 'a nine-person brand studio for food and farm clients' — 事实：'Team 9'、'Founded-era Grown slowly'、'Remote Mostly'，备注 'Known for identities that survive a farmers-market crush (sample).'；'pemberly' 'Pemberly' 'PE' 'product design for reading apps' — 'Team 23'、'Remote Hybrid, two cities'、'Note Readers first, meetings never (sample).'；'oakhollow-labs' 'Oak Hollow Labs' 'OH' 'research-driven interface studio' — 'Team 14'、'Remote Yes'、'Note Half the team are former librarians (sample).'；'cadence-co' 'Cadence & Co' 'CA' 'a small consultancy for design systems' — 'Team 7'、'Remote Fully remote'、'Note Systems that survive their authors (sample).' 职位（标题 · 公司 · 职位类型 · 地点 · 远程 · 薪资区间 · 标签 · 发布时间标签）：'Senior Brand Designer' larkspur-studio full-time Portland, OR hybrid $95–120k ['brand', 'studio', 'hybrid'] 2d ago；'Product Designer, Reading' pemberly full-time Remote remote $110–135k ['product', 'remote', 'reading'] 5h ago；'Design Systems Lead' cadence-co full-time Remote remote $130–160k ['systems', 'lead', 'remote'] 1d ago；'UX Researcher' oakhollow-labs full-time Chicago, IL hybrid $100–125k ['research', 'hybrid'] 3d ago；'Visual Designer (Packaging)' larkspur-studio full-time Portland, OR onsite $78–95k ['packaging', 'studio'] 4d ago；'Product Manager' pemberly full-time Remote remote $120–145k ['product', 'remote', 'pm'] 6d ago；'Junior Product Designer' cadence-co full-time Columbus, OH hybrid $65–80k ['junior', 'product'] 1d ago；'Motion Designer' oakhollow-labs contract Remote remote $70–90k ['motion', 'contract'] 2d ago；'Design Engineer' cadence-co full-time Remote remote $125–150k ['systems', 'code', 'remote'] 8h ago；'Content Designer' pemberly full-time Remote remote $95–115k ['writing', 'remote'] 2d ago；'Studio Producer' larkspur-studio full-time Portland, OR onsite $70–88k ['producer', 'studio'] 5d ago；'Service Designer' oakhollow-labs full-time Chicago, IL hybrid $105–130k ['service', 'research'] 6d ago。标签词汇表：brand、studio、hybrid、product、remote、reading、systems、lead、research、packaging、pm、junior、motion、contract、code、writing、producer、service。每个薪资均为虚构的示例区间；发布时间标签为静态相对文本。
   布局：不适用
   动效：不适用
2. **页头** — 左侧：字标 '[BOARD]'（Fraunces 600 20px），下方为 '[FOCUS], listed plainly'（10px 大写 Soft Ink）。右侧（Inter 500 14px）：SavedChip（书签图标 + 计数，链接至 #saved，为零时隐藏）、'Post a job' 主按钮 → ./post.html。720px 以下：字标 + 发布按钮。
   布局：顶部粘性，64px，Warm White 95% 不透明度加背景模糊，Line 底边框。
3. **主视觉与筛选器** — 全宽主视觉背景照片 hero-office.webp（16:9，object-position 50% 40%），覆盖从左到右的 Ink 渐变（左侧 rgba(32,33,28,.82) 至右侧 .25），确保所有文案可读；主视觉区块在桌面端高 440px。眉题 'TWELVE ROLES, NO GAMES'；H1 'Find work you can point at.'；一行引导语 'Every listing shows its salary band and its remote truth — [FOCUS], curated by hand (sample board).' FiltersPanel 位于 Panel 卡片中：SearchInput（'Role or company…'）、RoleSelect（All / full-time / contract）、LocationSelect（All / Portland / Chicago / Columbus / Remote-first）、RemoteToggle（'Remote only'）、带读数的 SalarySlider，以及实时计数行 'Showing 12 of 12'。筛选器即时生效。筛选面板与列表之间有一条代码绘制的薪资景观条：十二条细水平条（每个职位一条，从最低到最高薪资，Fern 70%，远程职位为实心 Fern），等宽轴刻度 $60k / $100k / $160k，说明文字 'Twelve bands, invented sample data'；该条随筛选标签重新筛选。筛选面板与列表之间有一条代码绘制的薪资景观条：12 条细水平条（每个职位一条，从最低到最高薪资，Fern 70%，远程职位为实心 Fern），等宽轴刻度 $60k/$100k/$160k，说明文字 'Twelve bands, invented sample data'。它随筛选标签重新筛选。
   布局：Warm White 背景；主视觉文本最大宽度 680px；面板横跨容器，字段在一行内换行（900px 以下堆叠）。
4. **列表** — 十二个 JobCard（用户发布的在前，用 Ochre 标签标记 'yours'）：MonogramTile + 公司名（链接至公司页）· 标题（Fraunces 600 19px，链接至职位页）· SalaryBand（'$95–120k'，Fern，等宽数字）· 地点 + 发布时间标签（13px Soft Ink）· TagChips（Fern Mist）· 右侧 SaveButton。行间以细线分隔（非盒装卡片）—— 大报密度。EmptyState：'Nothing matches those filters — even we can't invent that job. Loosen one and try again.'
   布局：单列，行内边距 22px，Line 分隔线；列表位于近似粘性的筛选器下方（筛选器不粘性，计数行为粘性）。
5. **收藏条与页脚** — 区块 id='saved'（为空时隐藏）：眉题 'SAVED BY YOU'；一行水平滚动的紧凑收藏 JobCard（标题、公司、薪资、取消收藏）。页脚：左侧字标 + helloMail；右侧 '© [BOARD]. Sample board; every role and salary is invented.' 和 'Built with a VibeFather template' 链接至 https://vibefather.ai。
   布局：收藏行带细 Line 滚动条；页脚 72px，Line 顶边框。

### 职位详情（`job.html`）
1. **职位视图** — 读取 ?j=<slug>；无查询参数时渲染第一个职位。面包屑：'Board' → ./index.html · 公司名 → ./company.html?c=<slug>。头部区块：标题（H1）、带 MonogramTile 的公司行、事实行（职位类型 · 地点 · remote/hybrid/onsite 标签 · 发布时间标签）、突出的 SalaryBand（18px）、TagChips，以及 ApplyPanel 旁的 SaveButton。正文（阅读列）：眉题 'THE ROLE'；描述段落；眉题 'WHAT YOU'LL BRING'；RequirementList（该职位的五项要求以勾选行呈现）；RelatedJobs（'Also open' —— 三个共享标签或同一公司的职位）。ApplyPanel（桌面端粘性）：'This demo doesn't take applications' 小字说明、诚实的主按钮 'Apply by email'（mailto:jobs@ + 公司邮箱 slug，主题中带职位标题），以及幽灵按钮 'Save for later'。
   布局：Warm White；网格：正文 7 列，面板 4 列偏移 1 粘性（900px 以下堆叠）。

### 公司简介（`company.html`）
1. **公司视图** — 读取 ?c=<slug>；无查询参数时渲染第一家公司。头部：MonogramTile（56px）、名称（H1）、简介（引导语）、FactRow 网格（四项事实）、teamNote 作为安静的引用行。下方：眉题 'OPEN ROLES'；该公司的职位以 JobCard 呈现（与首页相同组件）。幽灵按钮 'See the whole board' → ./index.html。
   布局：Warm White；头部最大宽度 760px；职位单列，与首页一致。

### 发布职位（`post.html`）
1. **发布视图** — 眉题 'POST A JOB'；H2 'One page, one preview, no account.' 两列：PostForm（左侧，6 列）和实时 PreviewCard（右侧，5 列偏移 1，粘性），外观与列表行完全一致，外加 Ochre 'UNPOSTED' 标签。表单下方小字：'This demo saves your post in this browser only — it will be first on the board, marked yours.' 成功后：显示 Good toast，按钮变为 'View the board' → ./index.html，发布的职位带入列表。
   布局：Warm White；900px 以下表单堆叠，预览位于其上方，非粘性。

## 资产
- 图片：使用 curl -L -o 下载到 public/images/：https://media.vibefather.ai/assets/ddb2b902-6cce-459e-8ba3-e55803da4603/hero-office.webp -> public/images/hero-office.webp（Hero 背景；alt 为 'An open-plan studio office with people working at desks'）。总共一个文件；其他所有视觉元素均保持代码绘制（MonogramTiles、chips、salary bars、favicon）。
- 图片：在项目根目录写入 ASSETS.md，列出代码绘制的资产（monogram tiles、tag chips、salary bands、favicon —— 'drawn in code, original'）以及 npm 包：@fontsource/fraunces 和 @fontsource-variable/inter（OFL-1.1）以及 lucide-react（ISC）。
- 图标：仅使用 lucide-react：ArrowRight、Bookmark、Check、Mail、MapPin、Search、SlidersHorizontal、Upload。描边宽度 1.75，16–24px，颜色继承。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的圆角方块填充 #3E7A5A，一个白色矩形“卡片”带 Fern 茎线（一个小型职位卡片字形）。无品牌标志。
- 字体：安装 @fontsource/fraunces 和 @fontsource-variable/inter，并在 src/fonts.ts 中按 Setup 所列导入它们。Vite 将 woff2 文件打包到 dist/。

## 禁止事项
- 无后端、无表单提交、无对 API 的 fetch 请求：发帖表单仅保存到 localStorage，显示时标记为“yours”，文案中也说明这一点；申请按钮是由变量构建的诚实 mailto: 链接。
- 每个内部链接都指向文件名（./index.html、./job.html?j=senior-brand-designer、./company.html?c=pemberly、./post.html）——绝不指向裸目录；不带查询参数的 job.html 和 company.html 显示第一项，绝不报错。
- 不使用真实招聘网站、公司或其品牌（LinkedIn、Indeed、Y Combinator、Airbnb）；公司、职位和薪资区间均为虚构示例数据。
- 不将真实薪资作为市场事实呈现；不声称具备 ATS 或申请人跟踪功能；申请面板明确说明这是演示。
- 不使用真实时钟的日期：发布标签为静态相对文本（'2d ago'），任何地方都不打印今天的日期或年份。
- 唯一的照片是 hero-office.webp；其中人物为背景人物，无可辨认的面部；其余全部为字母组合方块、代码绘制的条形和文字。
- 一切自托管：字体通过 Fontsource，图标作为 npm 包或内联 SVG。无 CDN <script> 或 <link> 标签，无 Google Fonts，无分析。
- 生产构建：压缩、无 source map、不将 src/ 复制到 dist/、单条命令 npm run build、输出在 dist/ 下且小于 6 MB。
- 除页脚署名链接外，绝不在站内提及 VibeFather；所有文案均为虚构的美式英语。
- 尊重 prefers-reduced-motion：无显现、无变暗、无弹出；被过滤掉的卡片立即隐藏。
- 网站必须在 1440x900 桌面和 390x844 移动端正常工作，控制台零错误；筛选器、保存、表单标签页、预览和 mailto 链接仅用键盘即可操作，并有可见的焦点环。
- 保持大报式平实语气：不用“rockstar”、“ninja”或“family”；每个字符串都位于 src/content.ts 或发帖存储中。

---
— Prompt by VibeFather · https://vibefather.ai/t/job-board-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
