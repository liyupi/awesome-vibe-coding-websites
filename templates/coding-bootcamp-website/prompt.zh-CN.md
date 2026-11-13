> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 编程训练营网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [SCHOOL] 打造的单页网站，这是一个为期十六周的训练营，教授 [PROGRAM]：课程时间线、三个示例批次、示例成果、学费与资助方案、三位讲师、一份申请表（仅客户端）以及简短 FAQ。单页，index.html；一切都在浏览器中运行。

- 受众：一位在午休时间阅读的职业转型者，对营销话术持怀疑态度：他们想要逐周计划、价格、付款方式，以及教学真实可靠的证明——具体细节胜过口号。
- 目标：申请。访客在十秒内看到承诺和申请按钮；在两分钟内读完课程并打开表单。
- 语气：校园式朴实：具体的周次、有名字的项目、诚实的示例标注。一个关于自动售货机的玩笑。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/zilla-slab（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 react-ts 模板通过 npm create vite@latest 脚手架创建（如果最新模板面向更新的主版本，则固定版本），然后保留一个真实的 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将 Design 下的每种颜色添加到 theme.extend.colors 中，使用 kebab-case 键名（chalk、panel、cream、line、ink、softink、green、green-deep、green-mist、clay、slateink、good），并设置 fontFamily display ['Zilla Slab', 'Georgia', 'serif']、sans ['Inter Variable', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 10px，并添加 maxWidth { container: '1160px', read: '720px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/zilla-slab/400.css'、'@fontsource/zilla-slab/600.css'、'@fontsource/zilla-slab/500-italic.css' 和 '@fontsource-variable/inter'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（学校、项目短语、阶段、批次、成果、学费方案、讲师、FAQ 行以及每个字符串，带类型），src/lib/brand.ts（schoolSlug = [SCHOOL] 转为小写，并将每段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 schoolSlug + '.com'，applyMail = 'apply@' + emailDomain），src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键为 schoolSlug + ':app'）。
  - 状态：src/store/app.ts 是一个小型外部存储（useSyncExternalStore），持有持久化到 localStorage 的申请草稿 { name, email, track, format, why }；submit 标记为已发送。
  - 组件位于 src/components/：Header.tsx、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、Footer.tsx；Hero.tsx（NextCohortChip.tsx）、Curriculum.tsx（PhaseRow.tsx 与 TopicTags.tsx）、Cohorts.tsx（CohortTable.tsx）、Outcomes.tsx（StatCard.tsx）、Tuition.tsx（PlanCard.tsx）、Instructors.tsx（InstructorCard.tsx）、Apply.tsx（Field.tsx、TrackSelect.tsx）、Faq.tsx（FaqRow.tsx）。src/pages/Home.tsx 组合它们。
  - 申请表在失焦时验证（字段下方显示 Clay 色文本）：姓名非空、邮箱格式、已选择 track、why 至少 40 个字符并带实时计数器；在有效之前提交按钮禁用；成功后交叉淡入到 Good 面板：'Application saved — this demo keeps it in this browser; a real school would email ' + applyMail + ' within two days.'
  - 在首次构建之前，使用 curl -L -o 将 Assets 下列出的每张图片下载到 public/images/ 中，使用给定的确切文件名。构建本身从不获取任何内容。
  - public/favicon.svg 如 Assets 下所述。index.html：lang en，<meta name='theme-color' content='#FCFBF7'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[SCHOOL] — sixteen weeks to [PROGRAM]</title>。
  - 在项目根目录编写 ASSETS.md，如 Assets 下所述。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和三张肖像。保持在 7 MB 以下。

## 变量
- [SCHOOL] — 学校名称（默认："Copperline"）。虚构学校的名称，一个单词。用于字标、标题、页脚和电子邮件（apply@ + 不含连字符的 schoolSlug + '.com'）。绝不使用真实学校。
- [PROGRAM] — 项目短语（默认："full-stack web development"）。一个命名所授内容的小写短语。重写 H1、阶段主题、项目名称和 FAQ，使课程内容与之匹配。保持具体。
- [CREDIT] — 在页脚保留一个指向 https://vibefather.ai/t/coding-bootcamp-website 的小型 "Template by VibeFather" 链接（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- Chalk `#FCFBF7` — 全站页面背景。
- Panel `#FFFFFF` — 卡片、表格、表单面板。
- Cream `#F4F1E8` — 交替区块（Curriculum、Tuition）、chip 填充。
- Line `#E4E0D4` — 1px 细线：表格行、卡片边框、时间线轨道。
- Ink `#20221C` — 标题与正文文字、图标。
- Soft Ink `#5D6055` — 导语、说明文字、eyebrow、示例标签行。
- Green `#2E7D54` — 唯一强调色：主按钮、阶段编号、链接、焦点环、选中方案。
- Green Deep `#236242` — 主按钮的悬停与按下状态。
- Green Mist `#E7F1EA` — chip 填充、悬停行、选中轨道。
- Clay `#B4543A` — 校验错误与注意事项星号。
- Slate Ink `#0F1A14` — 绿色填充上的文字。
- Good `#2E7D54` — 成功状态（别名保持简单）。

### 字体排印（Typography）
- 展示字体：H1、H2、阶段标题、方案名称 — Zilla Slab，校园风格粗衬线体：Zilla Slab（OFL），字重 400/600
- 文本与 UI：正文、表格、表单、标签 — Inter；统计与席位使用等宽数字：Inter（OFL），字重 400/500/600

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。容器最大宽度 1160px，居中，侧边内边距桌面端 48px、平板端 32px、640px 以下 20px。区块垂直内边距桌面端 96px、1024px 以下 72px、640px 以下 56px。字号阶梯：H1 clamp(36px, 5vw, 60px) Zilla 600 行高 1.08；H2 clamp(26px, 3.4vw, 40px) Zilla 600；阶段标题 Zilla 600 22px；正文 15.5px / 1.7；导语 17px / 1.65 Soft Ink；eyebrow 12px 600 大写 letter-spacing 0.14em Soft Ink；说明文字与示例标签 12.5px；统计 32px Zilla 600 等宽数字。按钮：高度 48px，Inter 600 14px；主按钮 Green 填充配白色文字，次按钮 Panel 上 1px Line 边框。输入框/下拉框：高度 48px，Panel 填充，1px Line 边框，聚焦时 Green 边框 + 2px 偏移环。全局焦点：2px Green 轮廓，3px 偏移。
- 圆角：卡片、面板、按钮、输入框 10px；表格容器 8px；chip 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1)。校园式沉稳：每个区块只做一次显现，不夸张。
- 动效：显现：区块包裹在 <Reveal> 中，在视口 15% 处用 600ms 上升 12px（Motion whileInView，once）；同级元素错开 70ms。
- 动效：Curriculum：阶段行按顺序显现；时间线轨道随滚动绘制（scaleY 由该区块上的 useScroll 驱动）；主题标签以 40ms 错开淡入。
- 动效：Cohort 表格：行以 40ms 错开显现；悬停填充 Green Mist。
- 动效：统计：数字在首次进入视图时计数一次（700ms，等宽数字）。
- 动效：方案卡片：中间（分期付款）卡片带 Green 1.5px 边框，悬停时上浮 4px；选中状态仅为视觉呈现 — 无真实结账。
- 动效：表单：字段错误在 160ms 内淡入；实时字符计数器跳动；成功状态在 260ms 内交叉淡入到 Good 面板。
- 动效：链接：.link-draw 在悬停和 focus-visible 时用 240ms 生长出 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 无显现、无轨道绘制、无计数（直接显示最终值）；一切静止且可用。在 index.css 中使用 CSS @media，并配合 Motion 的 useReducedMotion。
- 图像：三张讲师肖像，均为 AI 生成的虚构人物，风格统一：自然光、粉笔白影棚墙面、商务休闲、温暖亲切，年龄与族裔多样（一位 30 多岁的黑人男性、一位 40 多岁的白人女性、一位 30 岁左右的东亚女性），不似任何真实个人。肖像 object-fit cover，10px 圆角，1px Line 描边；说明文字用 Inter 12.5px Soft Ink，注明为占位肖像。无其他照片；其余一切均为字体排印、表格与 chip。图标：仅用 lucide-react，描边宽度 1.75。favicon 为手绘 SVG。

## 页面与区块
### 训练营网站（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[SCHOOL] = Copperline，[PROGRAM] = 全栈 Web 开发）。将每个字符串、阶段、批次、统计数据、方案、讲师和 FAQ 行放入 src/content.ts 并从中渲染。如果任何变量不同，请重写 H1、全部四个阶段的主题和项目、批次表、成果、学费名称和 FAQ，使其适配该课程，同时保持相同的结构和数量（4 个阶段；3 个批次；4 项统计；3 个方案；3 位讲师；5 行 FAQ）。阶段（周 · 标题 · 主题 · 里程碑）：'Weeks 1–4' 'Foundations' ['HTML & CSS the honest way','JavaScript, gently at first','git, and apologizing to git','pair programming'] 里程碑 'Ship a personal site you're not embarrassed by'；'Weeks 5–8' 'Full-stack, really' ['React with guardrails','APIs you build, not just call','databases beyond SELECT *','auth without fear'] 里程碑 'A full app with login, data and deployment'；'Weeks 9–12' 'Product weeks' ['working from tickets','code review, giving and taking','testing that pays rent','accessibility pass'] 里程碑 'A team-built product for a real brief (sample)'；'Weeks 13–16' 'Career sprint' ['portfolio sharpening','interview practice, kindly','salary conversations','alumni show-and-tell'] 里程碑 'A portfolio, a story, and a plan'。批次（名称 · 形式 · 时间安排 · 席位示例）：'Autumn cohort' 全日制 'Mon–Fri, 9–5' '4 seats left (sample)'；'Winter cohort' 非全日制 'Tue/Thu eve + Sat am' '12 seats (sample)'；'Spring cohort' 全日制 'Mon–Fri, 9–5' 'opening soon'。成果（带说明的示例统计）：'87% hired within six months (sample)'；'+$21k median salary change (sample)'；'420 alumni (sample)'；'14 students per cohort'；说明行内容为 'Sample figures from our invented records — ask any real school for theirs.'。学费方案：'Upfront' '$8,400' 'one payment, $600 off'；'Installments' '$8,900' 'six monthly payments (sample plan)' [高亮]；'Scholarship line' 'two seats per cohort at 50% — short form, honest criteria (sample)'。讲师（姓名 · 角色 · 一句话介绍）：'Marcus Bell' 'Foundations lead' 'taught 31 cohorts and still reads every repo'；'Dana Whitfield' 'Full-stack lead' 'breaks things on purpose so you learn to fix them'；'Yuna Park' 'Careers lead' 'has heard every interview answer and rates half of them'。FAQ：'Do I need experience?' 'Some comfort with a computer; none with code — week one assumes zero.'；'What if I fall behind?' 'Every cohort has office hours four nights a week and a no-questions reset into the next one (sample policy).'；'Is it remote?' 'Fully remote with two in-person meetups per cohort where geography allows.'；'Do you guarantee a job?' 'No honest school does; we guarantee the sprint, the coaching and the introductions (sample).'；'What about the vending machine?' 'Remote campus — bring your own snacks.' 所有姓名、数字和政策均为虚构的示例内容。
   布局：不适用
   动效：不适用
2. **页头（Header）** — 左侧：字标 '[SCHOOL]'（Zilla 600 20px）配一个小号 Green（绿色）方块字形；其下方为 'SIXTEEN-WEEK BOOTCAMP'（10px 大写 Soft Ink）。右侧导航（Inter 500 14px）：'Curriculum' → #curriculum、'Tuition' → #tuition，以及一个紧凑的主按钮 'Apply' → #apply。720px 以下：字标 + apply。
   布局：粘性顶部，64px，Chalk（粉笔白）95% 不透明度带背景模糊，Line（线条色）底部边框。
3. **首屏（Hero）** — 眉标 'COHORTS FORMING NOW (SAMPLE)'；H1 'Sixteen weeks to [PROGRAM].'；导语 'Small cohorts, named projects, and a schedule that respects a career change. Taught by people who still ship.' CTA 行：主按钮 'Apply for the autumn cohort' → #apply，次按钮 'Read the curriculum' → #curriculum。CTA 旁为 NextCohortChip：一个 Green Mist（绿雾色）胶囊标签 'Next cohort: Autumn · 4 seats (sample)'。信任行（Green 对勾）：'14 students per cohort'、'Fully remote'、'Scholarship seats (sample)'。
   布局：Chalk 背景，居中偏左栏最大宽度 680px，顶部内边距 120px；无首屏图片——排版即首屏。
4. **课程时间线（Curriculum timeline）** — 区块 id='curriculum'，位于 Cream（奶油色）背景。眉标 'THE SIXTEEN WEEKS'；H2 'A plan, week by week.' 在垂直 Line 轨道上排列四个 PhaseRow：一个 Green 周标签（偏等宽的 Inter 600 13px，固定 110px 列宽）、阶段标题、TopicTag（Green Mist 标签片），以及一行以 Zilla 500 斜体排版的里程碑文字（'Milestone — …'）。
   布局：阅读栏最大宽度 860px；轨道位于左侧 12px；阶段间距 48px（760px 以下堆叠，周标签置于标题上方）。
5. **批次表（Cohorts table）** — 区块 id='cohorts'。眉标 'COHORTS'；H2 'Three ways in (sample schedule).' CohortTable 置于 Panel（面板色）上，带 Line 边框：列为 Cohort / Format / Schedule / Seats；行来自名册；当出现 'left' 时席位单元格带 Green 标签片，否则为 Soft Ink；说明行 'Formats and seats are sample content — the next real cohort updates here.'
   布局：阅读栏最大宽度 860px；使用真正的 <table> 语义；行高 52px；720px 以下堆叠为卡片。
6. **成果（Outcomes）** — 区块 id='outcomes'。眉标 'OUTCOMES (SAMPLE)'；H2 'Numbers we'd show our own families.' 一行四个 StatCard（900px 以下为 2x2）：数字（Zilla 600 32px 等宽数字）+ 标签；每张卡片的标签中都带有 '(sample)' 字样。下方为带 Clay（陶土色）星号的说明行。
   布局：Chalk 背景；4 列，间距 24px；说明居中，最大宽度 560px。
7. **学费（Tuition）** — 区块 id='tuition'，位于 Cream 背景。眉标 'TUITION & FINANCING'；H2 'Priced like a decision, not a mystery.' 三张 PlanCard：名称（Zilla 600 20px）、数字（Zilla 600 30px）、说明行，以及一个幽灵按钮 'Choose [name]'（指向 #apply 的惰性演示锚点，title 为 'Demo'）；Installments 卡片按设计规范高亮。卡片下方：奖学金行和小字 'All plans are sample pricing for a fictional school.'
   布局：3 列，间距 24px（860px 以下为 1 列）；中间卡片上移 8px 并带 Green 边框。
8. **讲师（Instructors）** — 区块 id='instructors'。眉标 'WHO TEACHES'；H2 'Three people, thirty-one cohorts.' 三张 InstructorCard：肖像（3:4）、姓名（Zilla 600 19px）、角色（13px Green）、一句话介绍（Inter 15px Soft Ink）。行下方说明：'Placeholder portraits — AI-generated fictional people (swap in your real staff).'
   布局：Chalk 背景；3 列，间距 24px（860px 以下为 1 列）；每张肖像宽 4 列。
9. **申请表单（Apply form）** — 区块 id='apply'。一张宽 Panel 卡片，顶部带 Green 1px 轨道：左侧——眉标 'APPLICATION'；H2 'Two minutes, honestly.'；正文 'Tell us where you're starting from; we reply to every application (a real school would — this demo just saves yours locally).' 以及注释 'No essays required. The why box is 40 characters minimum because two words can't hold a plan.' 右侧——表单：姓名、邮箱、TrackSelect（三种批次形式），以及带实时计数器的 why 文本域；主按钮 'Submit application'。成功状态：按 Setup 规范显示 Good 面板。
   布局：Chalk 背景；卡片最大宽度 1040px，两列，内边距 40px（900px 以下堆叠）。
10. **FAQ 与页脚（FAQ and footer）** — 五行 FaqRow（加号旋转为叉号）置于 Panel 行上。页脚：左侧字标 + 'apply@' + emailDomain；右侧 '© [SCHOOL]. A fictional bootcamp with honest sample numbers.' 以及 'Built with a VibeFather template' 链接至 https://vibefather.ai。
    布局：FAQ 单列最大宽度 760px；页脚 72px，Line 顶部边框。

## 资源

- 图片：为本设计制作的模板人像（可随模板自由再分发），全部为 AI 生成的虚构人物，与任何真实个人无关。使用 curl -L -o 将每个文件下载到 public/images/：https://media.vibefather.ai/assets/ee8294a2-56de-453f-9a6d-d822541395c7/instructor-marcus.webp → public/images/instructor-marcus.webp（讲师 1；alt 'Portrait of instructor Marcus Bell'）；https://media.vibefather.ai/assets/ee8294a2-56de-453f-9a6d-d822541395c7/instructor-dana.webp → public/images/instructor-dana.webp（讲师 2；alt 'Portrait of instructor Dana Whitfield'）；https://media.vibefather.ai/assets/ee8294a2-56de-453f-9a6d-d822541395c7/instructor-yuna.webp → public/images/instructor-yuna.webp（讲师 3；alt 'Portrait of instructor Yuna Park'）。共三个文件。如果变量发生变化，请保留这些人像作为虚构占位符，只更改 content.ts 中的姓名。

- 图片：在项目根目录写入 ASSETS.md，包含一个表格：路径、来源 URL、作者、许可证——每个人像一行（来源 'media.vibefather.ai, made for this template'，作者 'VibeFather'，许可证 'Distributed with the template'），另外为 @fontsource/zilla-slab 和 @fontsource-variable/inter（OFL-1.1）以及 lucide-react（ISC）各添加一行。说明这些人像是 AI 生成的虚构人物，用作模板占位符。

- 图标：仅使用 lucide-react：ArrowRight、Check、GraduationCap、MapPin、Plus、Users。描边宽度 1.75，16–22px，颜色继承。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的圆角方块，填充 #2E7D54，一个白色的打开书本括号字形（一本带有代码括号的书）。不使用品牌标志。

- 字体：安装 @fontsource/zilla-slab 和 @fontsource-variable/inter，并在 src/fonts.ts 中按“设置”部分所列进行导入。Vite 会将 woff2 文件打包到 dist/ 中。

## 禁止事项
- 无后端、无表单提交、无 API 请求、无支付：应用仅保存到 localStorage，文案中已说明这一点；计划按钮为无实际功能的演示锚点。
- 每个内部链接都指向文件名或锚点（./index.html、#curriculum、#apply）——绝不指向裸目录；只有一个页面。
- 不使用真实学校、训练营、课程或其文案；学校、教职员工、阶段、政策及所有数字均为虚构示例内容，每个统计数据均标注“(sample)”。
- 不以事实形式呈现就业或薪资保证；FAQ 回答中说明诚实的学校不保证就业。
- 讲师头像为 AI 生成的虚构人物，年龄和族裔多样，不 resemblance 任何真实个人；不使用学生照片或真实人物证言。
- 不出现日期或年份：队列名称为季节性示例标签，日程为星期模式，任何内容都不打印当天日期。
- 全部自托管：字体通过 Fontsource，图标使用 npm 包或内联 SVG，头像下载至 public/images/。不使用 CDN <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具。
- 生产构建：压缩、无 source map、不将 src/ 复制到 dist/、单一命令 npm run build、输出在 dist/ 下且小于 7 MB。
- 除页脚署名链接外，站点内绝不提及 VibeFather；所有文案均为虚构的美式英语。
- 尊重 prefers-reduced-motion：无入场动画、无轨道绘制、无计数动画；一切处于静止状态且可用。
- 站点必须在 1440x900 桌面端和 390x844 移动端（表格变为堆叠卡片）正常工作，控制台零错误；导航、表单、FAQ 和按钮仅用键盘即可操作，且焦点环可见。

---
— Prompt by VibeFather · https://vibefather.ai/t/coding-bootcamp-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
