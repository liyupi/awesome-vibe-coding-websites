> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 数字营销机构网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [AGENCY] 打造的单页网站，这是一家位于 [CITY] 的 [SPECIALTY] 代理机构——八人团队，客户长期留存。网站必须听起来像一家能赢下比稿的工作室：一个宣言式的首屏主视觉区，配有客户滚动条（虚构名称），五项服务，三个案例研究，其中的示例数字会递增（每个都标注为示例数据），一个四步流程，五张团队卡片，一份关于 [MANIFESTO_WORD] 的三行宣言，以及一个在客户端确认的提案表单。单页：index.html，包含各区块（#services、#work、#process、#team、#proposal）。一切都在浏览器中运行；不会提交到任何地方。

- 受众：创始人和营销负责人，正从推荐帖中筛选三家代理机构。他们按顺序快速浏览以寻找证据、价格信号和个性——并在一百八十秒内判断一家代理机构听起来是贵还是便宜。
- 目标：让提案表单被填写。访客在十秒内知道这家机构做什么，并看到过一个客户名称滚动而过；在两分钟内，他们已读过一份案例研究的数字和那份宣言。
- 语气：自信、具体、对空话过敏。真实的动词，虚构但可信的数字，一个关于漏斗的笑话。绝不说“we leverage synergies”。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（MIT）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/space-grotesk（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化设置（Setup）：
  - 使用 npm create vite@latest 并选择 react-ts 模板来搭建脚手架。项目根目录下只有一个 HTML 页面：index.html（入口为 src/main.tsx）。
  - vite.config.ts：base 设为 './'，plugins 为 [react()]，build 配置为 { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要将 src/ 复制到 dist/ 中。
  - Tailwind 3.4 通过 PostCSS 接入，content 为 ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的每种颜色以 kebab-case 键名添加到 theme.extend.colors 中（offblack、coal、bone、paper、ink-soft、lime、lime-deep、lime-mist、rule-dark），并设置 fontFamily：display 为 ['Space Grotesk Variable', 'system-ui', 'sans-serif']，sans 为 ['Inter Variable', 'system-ui', 'sans-serif']。将 borderRadius 的 DEFAULT 设为 0px——粗粝边缘——并添加 maxWidth { container: '1240px' }。
  - 在 src/fonts.ts 中导入 '@fontsource-variable/space-grotesk' 和 '@fontsource-variable/inter'；在入口文件中导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（所有字符串、服务、案例、数据、步骤、人物、宣言行和客户名称，均带类型），src/lib/brand.ts（agencySlug = [AGENCY] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 agencySlug + '.com'），src/lib/storage.ts（用 try/catch 包裹的安全 localStorage 读写，键名以 agencySlug + ':' 为前缀）。
  - 状态管理：src/store/proposal.ts 是一个小型外部 store（useSyncExternalStore），持有 { budget, services: string[], name, email, note, sent }，并持久化到 localStorage 键 agencySlug + ':proposal'。
  - 组件位于 src/components/：Header.tsx、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、Footer.tsx、Ticker.tsx（跑马灯）、Counter.tsx（进入视口时数字递增）；Hero.tsx、Services.tsx（ServiceTile.tsx）、CaseStudies.tsx（CaseCard.tsx 配合 MetricRow.tsx）、Process.tsx（StepRow.tsx）、Team.tsx（PersonCard.tsx）、Manifesto.tsx、ProposalForm.tsx（BudgetPills.tsx、ServiceChips.tsx、SentPanel.tsx）。src/pages/Home.tsx 负责组合它们。
  - 完全不使用位图图像——所有视觉元素都由代码生成：首屏的抽象上升条形 SVG、案例卡片图表符号（迷你条形/折线/环形图形）、跑马灯、以首字母块形式呈现的头像以及 favicon。图标：仅使用 lucide-react，描边宽度为 2。
  - public/favicon.svg 按“资源（Assets）”一节所述。index.html：lang 为 en，<meta name='theme-color' content='#101112'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[AGENCY] — [SPECIALTY] in [CITY]</title>。
  - 在项目根目录下按“资源（Assets）”一节所述编写 ASSETS.md。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和两张照片。保持其大小在 5 MB 以下。

## 变量
- [AGENCY] — 机构名称（默认：“Brightline Dept.”）。虚构的机构名称。用于字标、标题、页脚、电子邮件（new@ + 不含连字符的 agencySlug + .com）以及 localStorage 键。绝不使用真实机构。
- [CITY] — 城市（默认：“Brooklyn, New York”）。工作室所在地。用于标题、主视觉副行、团队区块和页脚。可以使用真实城市。
- [SPECIALTY] — 专长（默认：“growth marketing”）。用两个词命名该专业领域。驱动标题、服务网格的重心以及案例研究的指标。保持小写。
- [MANIFESTO_WORD] — 宣言词（默认：“proof”）。宣言围绕其展开的那一个词（'proof'、'taste'、'momentum'）。用于宣言标题和一行案例研究文字。小写，一个词。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/digital-marketing-agency-website（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 近黑色（Offblack）`#101112` — 页面背景 — 工作室的默认浅色设置处于关闭状态。
- 炭黑色（Coal）`#1A1C1E` — 交替区块背景（服务、流程）、卡片表面。
- 骨白色（Bone）`#F4F1E8` — 主文本：标题、正文、深色背景上的按钮。
- 纸白色（Paper）`#FBFAF6` — 反色面板：提案表单和已发送面板翻转为浅色。
- 柔和墨色（Ink Soft）`#8E8B82` — 次要文本、说明文字、眉题、未选中的标签。
- 青柠色（Lime）`#C8F135` — 唯一的强调色：主按钮、计数器、滚动条分隔符、选中的标签、焦点环、指标数字。
- 深青柠色（Lime Deep）`#A8CC1E` — 青柠色的悬停和按下状态。
- 青柠雾色（Lime Mist）`#2A2E14` — 深色背景上选中标签的填充色、指标槽。
- 深色分隔线（Rule Dark）`#2E3134` — 1px 细线、卡片边框、输入框边框、滚动条边缘。

### 字体排印（Typography）
- 展示字体：H1、H2、服务磁贴、案例名称、指标数字、字标 — Space Grotesk 以海报尺寸呈现，大写：Space Grotesk (OFL)，字重 500/700
- 文本与 UI：正文、眉题、按钮、标签、表单、说明文字；所有数字使用表格数字：Inter (OFL)，字重 400/600/700

### 布局与动效（Layout & motion）
- 间距：8px 基础单位。容器最大宽度 1240px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面端 112px、1024px 以下 84px、640px 以下 64px。字号比例：H1 clamp(56px, 10vw, 140px) Space Grotesk 700 大写，行高 0.92，字距 -0.01em；H2 clamp(34px, 4.6vw, 64px) Space Grotesk 700 大写；服务磁贴标题 22px Grotesk 700；指标数字 Grotesk 700 56px 青柠色表格数字；导语 Inter 400 18px / 1.6 骨白色 85%；正文 15.5px / 1.7（最大宽度 62ch）；眉题 Inter 700 12px 大写 字距 0.22em 柔和墨色；说明文字 13px 柔和墨色。按钮：高度 54px，Inter 700 14px 大写 字距 0.08em。主按钮：青柠色填充，近黑色文本。次按钮：1px 骨白色/30% 边框，骨白色文本。输入框：高度 52px，炭黑色填充，1px 深色分隔线边框，骨白色文本，聚焦时青柠色边框。全局焦点环：2px 青柠色轮廓，偏移 3px。
- 圆角：所有元素均为 0px — 磁贴、按钮、标签、卡片、输入框、表单面板。锐利就是品牌。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现和计数器；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于表单切换和滚动条暂停。干脆且声明式。
- 动效：显现：包裹在 <Reveal> 中的区块从 opacity 0、translateY(16px) 开始，在 12% 可见时（Motion whileInView，viewport once）以 550ms --ease-out 稳定下来。相邻元素错开 60ms。
- 动效：首屏：H1 单词从两侧交替滑入 24px（错开 90ms）；抽象上升条形 SVG 在 800ms 内向上绘制其条形；滚动条以 60px/s 在折叠线下方运行，悬停时暂停，减少动效时静止。
- 动效：滚动条：虚构的客户名称以 Grotesk 700 大写呈现，由绘制的青柠色方块分隔；内容复制以实现无缝循环。
- 动效：计数器：每个案例研究指标在首次查看时从 0 计数到其数字（800ms --ease-out，表格数字）；% 后缀在计数落定后弹出。
- 动效：服务磁贴：悬停时将磁贴反转为骨白色配近黑色文本（200ms）；磁贴的图标旋转 90deg 一次。
- 动效：案例卡片：悬停时抬升 0（无抬升 — 粗野）但卡片的图表字形（青柠色的迷你条形/折线/圆环）在每次悬停时动画其数据一次。
- 动效：提案：预算药丸在选择时以青柠色文本填充青柠雾色（150ms）；服务标签单独切换；无效提交抖动 5px 并显示内联标签；发送时切换到 SentPanel（280ms --ease-io）— 面板翻转为纸白色配近黑色文本，一个绘制的青柠色 'SENT' 印章以 scale 1.2→1 砸入，并回显预算 + 服务。
- 动效：链接：.link-draw 在悬停和 focus-visible 时以 220ms 生长出 1px 骨白色下划线。
- 动效：prefers-reduced-motion: reduce — 无滚动条动效（静态行），无计数器（最终数字），无绘制或印章；颜色/边框悬停变化保留。在 index.css 中使用 CSS @media 加上 Motion 的 useReducedMotion 在组件中。
- 图像：两张 AI 生成的工作室照片（虚构人物）在近黑色-青柠色世界中 — 一场作战室会议和一次团队围谈；其他一切用代码绘制。首屏的上升条形 SVG、案例卡片图表字形（青柠色描边的条形、折线、圆环）、滚动条分隔符、首字母头像块和 favicon 均为 SVG/CSS。无库存图片、无办公室照片、无真实客户标志（滚动条仅使用虚构名称）、无平台品牌图标。图标：仅 lucide-react，描边宽度 2。

## 页面与区块
### 机构（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[AGENCY] = Brightline Dept.，[CITY] = Brooklyn, New York，[SPECIALTY] = growth marketing，[MANIFESTO_WORD] = proof）。将每个字符串和数字放入 src/content.ts 并从中渲染。如果任何变量值不同，请重写主视觉、所有服务、所有三个案例及其指标、步骤、团队、宣言和提案文案，使其对新机构而言具体且可信，同时保持相同的结构和数量（5 项服务、3 个案例 × 3 项指标、4 个步骤、5 个人、3 行宣言、11 个滚动条名称）。所有客户、数字和结果均为虚构；每张案例卡片均带有一次“(sample data)”。滚动条名称（虚构）：'HEARTLINE COFFEE'、'VELOCITY LEGGING CO'、'BRAMBLE GOODS'、'NORTHSPOOL'、'ATLAS & FIG'、'KILOWATT KITCHENS'、'SUNDER WATCHES'、'FOXGLOVE FM'、'MARGIN PRESS'、'TIDEBOUND'。服务：'Paid acquisition' — 'search, social and the audit that fixes both'；'Lifecycle email' — 'flows that behave like a person wrote them'；'SEO & content' — 'compounding pages, not blog confetti'；'Creative studio' — 'ads people screenshot'；'Analytics' — 'one dashboard, fewer lies'。案例：'Heartline Coffee' — 'subscription launch' — 指标 '+41%' 'subscription revenue (sample)'、'2.3×' 'return on ad spend (sample)'、'-18%' 'churn at 90 days (sample)'；'Velocity Legging Co' — 'holiday peak' — '4.1×' 'peak ROAS (sample)'、'+212%' 'email revenue (sample)'、'31k' 'new subscribers (sample)'；'Bramble Goods' — 'rebrand + relaunch' — '+67%' 'organic traffic (sample)'、'1.9×' 'conversion rate (sample)'、'12' 'markets entered (sample)'。工作室照片为 AI 生成的虚构人物，与虚构工作室相匹配（不 resemblance 任何真实个人）；alt 保持为 'the studio team, fictional people'。
   布局：不适用
   动效：不适用
2. **作战室横幅** — 全宽照片 studio-warroom.webp（16:9，alt 'The studio team mid-session around a wall of cards, fictional people'）直接位于滚动条下方——五个人围绕一面贴满卡片和打印件的软木板墙进行头脑风暴（无可读文字），手持马克笔，offblack-lime 世界：暗室、一盏 lime 强调光、真实的能量。右下角 mono 说明文字：'tuesday, second coffee'。
   布局：全出血、16:9 裁剪、Offblack 到照片的渐变边缘使其融入页面；说明文字为 Inter 12px Ink Soft，置于 Coal/80% 芯片上。
3. **页眉** — 左侧：字标 '[AGENCY]'（Grotesk 700 18px 大写），前面有一个小 lime 方块，链接到 ./index.html。导航（Inter 600 13px 大写）：'Services' → #services、'Work' → #work、'Process' → #process、'Team' → #team；右侧为 Lime 色 'Start a project' → #proposal。760px 以下：字标 + 开始按钮。
   布局：粘性顶部，高度 68px，Offblack/88% 模糊，Rule Dark 边框。
4. **主视觉** — 眉题 '[SPECIALTY] · [CITY] · EIGHT HUMANS'。H1：'GROWTH IS' / 'A PORTFOLIO' / 'OF PROOFS.'（三行，'PROOFS.' 为 Lime 色）。导语（最大宽度 540px）：'We plan, ship and measure [SPECIALTY] for brands that are done guessing. Small senior team, big appetite, every number on this page earned twice.' 两个 CTA：Lime 色 'Start a project' → #proposal 和次要 'See the numbers' → #work。右侧/下方：上升条形 SVG。滚动条固定于主视觉底边，滚动十个虚构客户名称。
   布局：Offblack 背景，顶部垂直内边距 128px；H1 最大宽度 980px；滚动条全宽，上下有 Rule Dark 边框，高 44px。
5. **服务** — 区块 id='services'。眉题 'WHAT WE DO' 和 H2 'FIVE DISCIPLINES, ONE TEAM.' 五个 ServiceTiles 以 3+2 网格排列（图标：Target、Mail、FileText、PenTool、BarChart3），每个带有标题和来自名册的一句话简介；悬停时反转为 Bone。下方一行低调文字：'Retainers from $6k/mo; sprints from $9k. Both real numbers (sample pricing for this template).'
   布局：Coal 背景。瓦片 1px Rule Dark 边框，28px 内边距；网格刻意不均匀（2 个瓦片跨宽）以营造编辑节奏。
6. **案例研究** — 区块 id='work'。眉题 'RECEIPTS' 和 H2 'CASES, WITH NUMBERS.' 三个 CaseCards：客户名称（Grotesk 700 26px）、合作描述行、其图表符号（Heartline 为条形、Velocity 为折线、Bramble 为环形），以及三个带 Counters 的 MetricRows（Grotesk 56px Lime 等宽数字）——每张卡片页脚显示 '(sample data)'。结尾行：'Full case studies with methodology walk-throughs happen on the call — bring [MANIFESTO_WORD], leave with a plan.'
   布局：Offblack 背景。三列 24px 间距；卡片在 Coal 上带 Rule Dark 边框；指标堆叠带细线。
7. **流程与宣言** — 区块 id='process'。眉题 'HOW IT GOES' 和四个 StepRows（编号为 Grotesk 700 32px Lime）：1) 'Audit (weeks 1–2)' — 'every channel, pixel and assumption — we find the leak before we buy a bucket'；2) 'Plan (week 3)' — 'one page of priorities; if it doesn''t fit on one page, it isn''t a plan'；3) 'Ship (weeks 4–12)' — 'creative, campaigns and code in weekly increments you can see'；4) 'Prove (ongoing)' — 'a dashboard your CFO will actually open, and a monthly meeting we prepare for'。宣言（Bone 背景带、Offblack 文字——表单前页面唯一的反转）：H2 'THREE BELIEFS.' — '01 Numbers are the [MANIFESTO_WORD] that survives the meeting.' — '02 Small senior teams beat large junior ones; you will know everyone''s name by week two.' — '03 If a channel can''t explain itself in one sentence, we retire it.'
   布局：流程为 Coal 区块（行以细线分隔，容器 760px）；宣言为全宽 Bone 带，96px 内边距，信念为三行 Grotesk 26px 带 Inter 15px 副行。
8. **团队** — 区块 id='team'。眉题 'THE EIGHT'。一张宽幅照片 team-group.webp（4:3，alt 'Half of the studio team huddled by a monitor, fictional people'）位于卡片上方——三名成员围着一台显示器，暗室中带有 lime 屏幕光晕，轻松欢笑。然后是五张卡片，第六个瓦片写着 '+3 specialists who prefer the background'。PersonCards（Lime Mist 中的首字母块，带 Grotesk 首字母、姓名、角色）：'JR' June Ramírez 'Founder · strategy'；'TO' Tomas Okafor 'Paid media'；'AL' Ada Lindqvist 'Creative director'；'MP' Marcus Peña 'Lifecycle'；'SY' Sofia Yamada 'Analytics'。悬停时的一句话简介：'June has killed more funnels than she''s built, on purpose.'；'Tomas spends the budget like it''s his own — the good version.'；'Ada''s ads get screenshotted, which is the metric that isn''t on the dashboard.'；'Marcus writes emails people answer at 11pm.'；'Sofia''s dashboards have ended three arguments this quarter.'
   布局：Offblack 背景。团队照片全容器宽度（4:3），带 Coal 说明芯片（'the Tuesday review, fictional people'）；下方六瓦片网格 16px 间距；首字母块 72px；一句话简介在悬停/聚焦时以 150ms 淡入出现（触摸设备上静态显示）。
9. **提案表单** — 区块 id='proposal'。眉题 'START A PROJECT' 和 H2 'TELL US THE AMBITION.' ProposalForm 在 Paper 上（Offblack 文字——反转）：BudgetPills（'$3–6k/mo' / '$6–12k/mo' / '$12k+/mo' / 'one-off sprint'）；ServiceChips（五项，多选）；姓名 + 邮箱；备注文本域（占位符 'What are we growing? Deadlines welcome.'）；Lime 色 'Request a proposal' 带说明 'Saved in this browser — the real page would reach the studio. Nothing is sent here.' SentPanel：lime 色 'SENT' 印章、'Received, [NAME].' 'We reply within two working days with questions, then a proposal — in that order.' 预算 + 服务回显，以及 'Edit the request' 返回预填。持久化在 localStorage 中。
   布局：Offblack 背景，Paper 面板最大宽度 680px，32px 内边距，0px 圆角；姓名/邮箱两列在 560px 以下堆叠。
10. **页脚** — Offblack 带 Rule Dark 顶部边框：左侧 lime 方块 + '[AGENCY]' 位于 '[SPECIALTY] · [CITY] · since a very good year' 上方；中间锚点（Services、Work、Process、Team、Start a project）；右侧 'new@ + emailDomain' 和 'Mon–Fri, loudly'。底部行：'© [AGENCY]. Case figures are sample data; the confidence is not.'
    布局：垂直内边距 56px，三部分行，底部行在 Bone/10% 细线下方 28px。

## 资产
- 图片：为本设计制作的模板照片（可随模板自由再分发）：https://media.vibefather.ai/assets/7529c0a6-693b-4a9e-9bc0-3c3e8272b890/studio-warroom.webp → public/images/studio-warroom.webp（主视觉下方的作战室横条图；alt 'The studio team mid-session around a wall of cards, fictional people'）；https://media.vibefather.ai/assets/7529c0a6-693b-4a9e-9bc0-3c3e8272b890/team-group.webp → public/images/team-group.webp（团队区块；alt 'Half of the studio team huddled by a monitor, fictional people'）。
- 图标：仅使用 lucide-react：Target、Mail、FileText、PenTool、BarChart3、ArrowRight、Check、X、Plus。描边宽度 2，16–24px，颜色继承。public/favicon.svg 手写：viewBox 0 0 32 32，一个 32x32 的方块（0 圆角）填充 #101112，三根 Lime（#C8F135）色条高度递增。不使用其他 logo：机构名称始终以文字排版呈现；任何地方都不出现真实客户 logo 或平台标识。
- 图片：仅在代码中绘制——不用照片、不用图库、不用外部图片。主视觉的上升条形 SVG、案例卡片图表图形（条形/折线/环形）、滚动条分隔符、首字母块、SENT 印章和 favicon 均为 SVG/CSS。编写 ASSETS.md，列出 lucide-react（ISC）、@fontsource-variable/space-grotesk 和 @fontsource-variable/inter（OFL-1.1），并注明 'No image assets; all visuals drawn in code.'
- 字体：安装 @fontsource-variable/space-grotesk 和 @fontsource-variable/inter，并按 Setup 中的说明在 src/fonts.ts 中导入。Vite 会将 woff2 文件打包进 dist/。

## 禁止事项
- 无后端、无表单提交、不向任何 API 发起 fetch 请求：方案仅在浏览器中保存（localStorage），表单中已注明这一点；案例数据为虚构的示例数据，并已标注为示例。
- 此单页上的所有链接均为锚点（./index.html#services、#work、#process、#team、#proposal）。
- 所有资源自托管：字体通过 Fontsource 加载，图标以 npm 包或内联 SVG 形式使用。不使用 CDN 的 <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具。
- 生产构建：压缩，无 source map，不将 src/ 复制到 dist/，使用单一命令 npm run build，输出到 dist/ 且小于 3 MB。
- 人像和工作室照片为 AI 生成的虚构人物（不 resemblance 任何真实个人），用作模板占位符；任何位置均不出现真实人物。
- 任何位置均不出现日期或年份；网站从不显示当天日期。
- 除可选的页脚署名链接外，网站内绝不提及 VibeFather 或任何其他品牌；所有文案均为虚构的美式英语。
- 尊重 prefers-reduced-motion：静态滚动条（不循环），计数器显示最终数字，无印章或抽奖动画；颜色/边框悬停反转保留。
- 页面必须在 1440x900 桌面端和 390x844 移动端正常工作，控制台零错误；胶囊按钮、标签和表单仅用键盘即可操作，并具有可见的焦点环（两种背景上均为 Lime）。
- 保持文案自信且具体：无 lorem，无“synergies”；每个指标、价格和信念都存放在 src/content.ts 中，并带有其示例标签。

---
— Prompt by VibeFather · https://vibefather.ai/t/digital-marketing-agency-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
