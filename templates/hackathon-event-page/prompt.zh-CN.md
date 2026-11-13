> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 黑客松活动页面

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [EVENT] 打造的单页网站，这是一个为期 36 小时、围绕 [SCENE] 的黑客松，于 [DATE] 开始：包含实时倒计时、三个奖项赛道、日程安排、四位评委、赞助商展示条、常见问题解答（FAQ）以及一个注册表单（仅客户端）。单页，index.html；一切都在浏览器中运行。

- 受众：学生和早期职业开发者，他们在一个标签页里决定是否要牺牲一个周末：他们想看到赛道、真正重要的规则（团队、硬件、睡眠），以及两分钟即可完成的注册。
- 目标：注册量。访客在十秒内看到倒计时和“Register”；在两分钟内选定一个赛道并提交表单。
- 语气：通宵咖啡因十足但友善：终端式简写，零企业腔。一个关于凌晨 3 点调试的笑话。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/space-grotesk（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化（Setup）：
  - 使用 npm create vite@latest 并选择 react-ts 模板进行脚手架搭建（如果最新模板面向更新的主版本，则固定版本），然后保留一个真实的 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的所有颜色以 kebab-case 键添加到 theme.extend.colors（shell、panel、panel-2、line、bone、mist、lime、lime-deep、lime-mist、amber、violet、slateink、good），并设置 fontFamily display ['Space Grotesk Variable', 'system-ui', 'sans-serif']、sans ['Inter Variable', 'system-ui', 'sans-serif']、mono ['JetBrains Mono', 'ui-monospace', 'monospace']。将 borderRadius 的 DEFAULT 设为 8px，并添加 maxWidth { container: '1160px' }。
  - 在 src/fonts.ts 中导入 '@fontsource-variable/space-grotesk'、'@fontsource-variable/inter' 和 '@fontsource/jetbrains-mono/400.css' 以及 '500.css'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（活动名称、场景短语、日期字符串、赛道、日程区块、评委、赞助层级、FAQ 行以及所有字符串，带类型），src/lib/brand.ts（eventSlug = [EVENT] 转为小写，并将每段连续的非字母数字字符替换为 '-'，emailDomain = eventSlug 去掉连字符 + '.dev'），src/lib/countdown.ts（解析 [DATE]；timeLeft(target) → { days, hours, minutes, seconds, done }），src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键为 eventSlug + ':reg'）。
  - 状态（State）：src/store/reg.ts 是一个小型外部 store（useSyncExternalStore），持有 { name, email, track, teamSize, sent } 并持久化到 localStorage；一个时钟 hook 每秒滴答（信息性——在减少动态效果下继续运行）。
  - 组件位于 src/components/：Header.tsx（Wordmark、RegisterButton）、Countdown.tsx（CountCell.tsx）、Hero.tsx（BracketTitle.tsx——标题包裹在等宽括号中）、Tracks.tsx（TrackCard.tsx）、Schedule.tsx（BlockRow.tsx）、Judges.tsx（JudgeCard.tsx）、Sponsors.tsx（TierRow.tsx、TileChip.tsx）、Register.tsx（TrackSelect.tsx、TeamSizeSelect.tsx、Field.tsx）、Faq.tsx（FaqRow.tsx）、Footer.tsx。src/pages/Event.tsx 组合它们。
  - 倒计时的完成状态将 hero 行替换为 'We're live — the wifi password is on the whiteboard (sample).'，并将注册按钮替换为 'Join the recap list'。
  - 注册表单：姓名、邮箱、TrackSelect（三个赛道）、TeamSizeSelect（单人 / 2 / 3 / 4）；在失焦时内联验证（字段下方 Amber 文本）；成功时交叉淡入到 Good 面板：'You're in — saved in this browser only; a real event would confirm from hello@' + emailDomain + '.'
  - 在首次构建之前，使用 curl -L -o 将资源（Assets）下列出的每张图片下载到 public/images/，并使用给定的确切文件名。构建本身从不获取任何内容。
  - public/favicon.svg 如资源（Assets）下所述。index.html：lang en，<meta name='theme-color' content='#0A0F0C'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[EVENT] — a 36-hour hackathon</title>。
  - 在项目根目录编写 ASSETS.md，如资源（Assets）下所述。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和四张肖像。保持在 8 MB 以下。

## 变量
- [EVENT] — 活动名称（默认：“Nightcompile”）。虚构黑客松的名称，一个单词。用于字标、标题、方括号和电子邮件（hello@ + 不含连字符的 eventSlug + '.dev'）。绝不是真实活动。
- [DATE] — 开始日期（默认：“February 19, 2027”）。倒计时所指向的完整未来日期，写作 'February 19, 2027'。保持它在未来；日期本身永远不会印在页面上。
- [SCENE] — 场景短语（默认：“tools that make student life slightly less chaotic”）。一个小写短语，命名所构建的内容。重写 H1、赛道简介、日程演示和 FAQ，使活动读起来真实。保持具体。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接到 https://vibefather.ai/t/hackathon-event-page（默认：是；删除此行以移除它）

页面与章节下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图像——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图像路径和链接放在一个内容文件中（例如 `src/content.ts`），按章节键控，以便以后可以交换内容而无需触碰组件。

## 设计
### 颜色（Colors）
- Shell `#0A0F0C` — 页面背景 — 接近黑色，带绿色调。
- Panel `#101812` — 卡片、日程行、表单面板。
- Panel 2 `#16211A` — 悬停填充、抬升面板、下拉选择。
- Line `#23322A` — 1px 细线：边框、表格行、分隔线。
- Bone `#ECF2EC` — 主文本、标题。
- Mist `#8FA093` — 次要文本、眉题、日程时间。
- Lime `#A8E63C` — 唯一的电光强调色：倒计时数字、主按钮、赛道奖金数字、焦点环、激活状态。
- Lime Deep `#7FB92A` — 悬停和按下状态的主按钮。
- Lime Mist `#1D2A16` — 标签填充、选中赛道、一级磁贴底色。
- Amber `#E0A93C` — 校验提示和“sleep”日程块。
- Violet `#8A7BE8` — “food”日程块和一个评委角色强调色 — 谨慎使用。
- Slate Ink `#0C1408` — Lime 填充上的文本。
- Good `#7FBF6A` — 成功面板、已注册状态。

### 字体排印（Typography）
- 展示字体：H1、赛道标题、评委姓名、字标 — Space Grotesk：Space Grotesk (OFL)，字重 500/700
- 文本与 UI：正文、表单、FAQ — Inter：Inter (OFL)，字重 400/500/600
- 等宽字体：倒计时、日程时间、括号、标签 — JetBrains Mono：JetBrains Mono (OFL)，字重 400/500

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。容器最大宽度 1160px，居中，桌面端侧边内边距 48px，平板端 32px，640px 以下 20px。区块垂直内边距桌面端 96px，1024px 以下 72px，640px 以下 56px。字号比例：H1 clamp(44px, 7vw, 84px) Space Grotesk 700 行高 1.02；H2 clamp(26px, 3.6vw, 40px) Space Grotesk 700；倒计时数字 JetBrains 500 48px 等宽数字，配 11px 大写 Mist 标签；赛道标题 Space Grotesk 700 22px；奖金数字 Space Grotesk 700 30px；正文 15.5px / 1.7；眉题等宽 12px 大写 字距 0.14em Mist；日程时间等宽 13px。按钮：高度 48px，Inter 600 14px；主按钮 Lime 填充配 Slate Ink 文本，次按钮 1px Line 边框配 Bone 文本。输入框/下拉选择：高度 48px，Panel 2 填充，1px Line 边框，聚焦时 Lime 边框 + 2px 偏移环。全局焦点：2px Lime 轮廓，3px 偏移。
- 圆角：卡片、面板、按钮、输入框 8px；日程行 4px；标签和胶囊 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1)。终端般迅捷：除区块显现外，任何动效不超过 400ms。
- 动效：显现：区块在视口 15% 处用 500ms 上升 10px（Motion whileInView，仅一次）；同级元素错开 60ms。
- 动效：首屏：标题的等宽括号先绘制进入（每个括号位移 8px，240ms），然后标题落定；眉题下方一条细 Lime 线脉冲一次。
- 动效：倒计时：数字即时切换（信息性，保持等宽宽度）；归零时该行交叉淡入到直播行（300ms）。
- 动效：赛道卡片：悬停上浮 3px，奖金数字变为全 Lime；推荐赛道带有常驻的 Lime 1.5px 边框。
- 动效：日程：行以 40ms 错开显现；块类型标签（BUILD/FOOD/SLEEP/DEMOS）按颜色着色；悬停填充 Panel 2。
- 动效：评委：肖像从 scale 1.04 落定，错开 80ms。
- 动效：注册：字段错误淡出 160ms；成功交叉淡入 260ms；提交按钮的 Lime 填充在悬停时加深。
- 动效：链接：.link-draw 在悬停和 focus-visible 时用 240ms 生长出 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 无显现、无括号绘制、无肖像缩放；倒计时仍然跳动；颜色悬停保留。在 index.css 中使用 CSS @media，外加 Motion 的 useReducedMotion。
- 图像：四张评委肖像，全部为 AI 生成的虚构人物，风格统一：低调光配 Lime 轮廓光，背景接近黑色，连帽衫和 T 恤混搭西装外套，自信平静的表情，年龄和族裔多样（一位 30 多岁的拉丁裔女性、一位约 50 岁的白人男性、一位 20 多岁的南亚男性、一位约 40 岁的黑人女性），不似任何真实个人。无可读文本、无标志、无挂绳或徽章。肖像 object-fit cover，8px 圆角，1px Line 轮廓。赞助商条为绘制式通用样式：字标风格文本磁贴分三档（无标志 — 虚构名称以字体排版呈现）。图标：仅 lucide-react，描边宽度 1.75。favicon 为绘制式 SVG。

## 页面与区块
### 活动页（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[EVENT] = Nightcompile，[DATE] = February 19, 2027，[SCENE] = tools that make student life slightly less chaotic）。将每个字符串、赛道、区块、评委、层级和 FAQ 行都放入 src/content.ts 并从中渲染。若任何变量不同，请重写 H1、赛道简介、日程演示名称、评委一句话介绍和 FAQ 以适配该场景，同时保持数量不变（3 个赛道、12 个日程区块、4 位评委、3 个赞助层级、5 行 FAQ）。赛道（名称 · 简介 · 奖金示例）：'Campus life' 'timetables, laundry, and the group-chat chaos' '$1,500 (sample)'；'Study better' 'notes that index themselves and flashcards that care' '$1,500 (sample)'；'Wildcards' 'anything that makes a student laugh — judged loudest' '$500 (sample)' [推荐标签：'most fun']。日程（时间 · 标题 · 类型）：'FRI 18:00' 'Doors, wifi, lies about sleeping bags' FOOD；'FRI 19:00' 'Kickoff + track pitches' BUILD；'FRI 20:00' 'Teams form; snacks attack' BUILD；'FRI 22:00' 'Mentor rounds begin' BUILD；'SAT 00:00' 'Midnight checkpoint; coffee diplomacy' FOOD；'SAT 03:00' 'The quiet hour ( debugging in the dark )' BUILD；'SAT 08:00' 'Breakfast; stand-up stretch' FOOD；'SAT 12:00' 'Mentor rounds; demo-drills' BUILD；'SAT 16:00' 'Recommended nap window' SLEEP；'SAT 20:00' 'Practice pitch gym' BUILD；'SUN 09:00' 'Hard commit; slides from scraps' BUILD；'SUN 12:00' 'Demos, judges, loud applause' DEMOS。评委（姓名 · 职位 · 一句话介绍）：'Rosa Delgado' 'Staff engineer, tools team' 'ships CLI tools people actually keep'；'Hendrik Vos' 'CS professor (retired-ish)' 'grades gently, asks one brutal question'；'Arjun Mehta' 'Nightcompile alum, cohort one' 'won with a laundry app; now builds fintech'；'Tessa Boateng' 'Founder, campus software studio' 'funds what she demos twice'。赞助层级：层级 1 'Coldbrew Cloud' 'Keystone'；层级 2 'Snackstack' 'Kettle' + 'Gitmind' 'Kettle'；层级 3 'Papertrail Press' 'Brew' + 'Cyclops Lenses' 'Brew' + 'Hallmate' 'Brew' — 所有名称均为虚构，以字体块形式呈现，无徽标。FAQ：'Team size?' 'One to four; solo heroes welcome.'；'Hardware?' 'Bring what you like; we loan arduino-ish kits at the desk (sample).'；'Sleep?' 'There is a sanctioned nap room and a Saturday window; use both.'；'Who owns the code?' 'You do — fully; we just cheer.'；'Cost?' 'Free, including food; registration helps us count sandwiches.' 所有名称、奖金和政策均为虚构示例内容。
   布局：不适用
   动效：不适用
2. **页头** — 左侧：字标 '[EVENT]'（Space Grotesk 700 19px Bone），置于等宽括号内；上方为 '36-HOUR HACKATHON'（10px 等宽大写 Mist）。右侧导航（Inter 500 14px）：'Tracks' → #tracks，'Schedule' → #schedule，以及紧凑的主按钮 'Register' → #register。720px 以下：字标 + 注册按钮。
   布局：顶部粘性定位，64px 高，Shell 宽度 92%，背景模糊，底部 Line 边框。
3. **首屏** — BracketTitle：H1 '[EVENT]' 以超大等宽括号包裹展示名称，括号为 Lime 色；导语 'Thirty-six hours to build [SCENE]. Mentors at 22:00, demos at noon Sunday, sandwiches counted (sample).' 倒计时（四个 CountCell — DAYS/HOURS/MINUTES/SECONDS — Lime 数字配细 Line 分隔线）。CTA 行：主按钮 'Register for [EVENT]' → #register，次按钮 'See the tracks' → #tracks。下方一行等宽状态文字 '> doors open FRI 18:00 · fully in-person · sample event'，带闪烁终端光标（减少动效模式下光标闪烁关闭）。
   布局：Shell 背景，倒计时后方 12% 处柔和 Lime 径向光晕；居中列最大宽度 760px；顶部内边距 120px。
4. **赛道** — Section id='tracks'。眉题 'THREE TRACKS'；H2 'Pick a lane, or make one.' 三张 TrackCard：标题、简介、奖金数字（'(sample)' 以 Mist 色附加）、标签行（'mentored'、'beginner-safe' — 以及 Wildcards 的 'most fun' Lime 标签）。卡片悬停上浮；Wildcards 带推荐 Lime 边框。
   布局：3 列，24px 间距（860px 以下 1 列）。
5. **日程** — Section id='schedule'。眉题 'THE 36 HOURS'；H2 'Coffee diplomacy included.' 十二个 BlockRow 置于 Panel 上：时间（等宽 13px Mist，固定 96px）、标题（Inter 500 15px Bone）、类型标签（BUILD Lime-mist/Line；FOOD 紫罗兰色调；SLEEP 琥珀色调；DEMOS Lime 填充配 Slate Ink）。下方说明：'Times are the sample schedule — doors really do open at 18:00 (sample).'
   布局：阅读列最大宽度 820px；行圆角 8px，内边距 10px；单列。
6. **评委** — Section id='judges'。眉题 'THE JUDGES'；H2 'Four people who ship.' 四张 JudgeCard：肖像（3:4）、姓名（Space Grotesk 700 18px）、职位（13px Lime）、一句话介绍（Inter 14.5px Mist）。说明：'Placeholder portraits — AI-generated fictional people.'
   布局：4 列，24px 间距（1024px 以下 2 列，640px 以下 1 列）。
7. **赞助商** — Section id='sponsors'。眉题 'BACKED BY (SAMPLE)'；H2 'Names, not logos.' 三个 TierRow：等宽层级标签（KEYSTONE / KETTLE / BREW）和字块 — 虚构名称以 Space Grotesk 字标风格呈现于 Panel 标签上（层级 1 为 Lime Mist，更大）。说明：'Invented sponsors; real ones would go here with their marks.'
   布局：阅读列最大宽度 860px；层级堆叠，字块在行内居中。
8. **注册** — Section id='register'。宽 Panel 卡片，顶部 Lime 1px 轨道线：左侧 — 眉题 'REGISTRATION'；H2 'Two minutes, then build.'；正文 'Name, email, track, team size — that's the whole form. Free, food included, code stays yours (sample policy).'；诚实提示 'This demo saves your registration in this browser only.' 右侧 — 按 Setup 的表单，主按钮 'Count me in'。成功：倒计时结束时显示 Good 面板及 recap-list 行。
   布局：Shell 背景；卡片最大宽度 1040px，两列，40px 内边距（900px 以下堆叠）。
9. **FAQ 与页脚** — 五个 FaqRow（加号旋转为叉号）置于 Panel 行上。页脚：左侧字标 + 'hello@' + emailDomain；右侧 '© [EVENT]. A fictional hackathon; the sandwiches are real (in spirit).' 和 'Built with a VibeFather template' 链接至 https://vibefather.ai。
   布局：FAQ 单列最大宽度 760px；页脚 72px，顶部 Line 边框。

## 资源

- 图片：为本设计制作的模板肖像（可随模板自由再分发），全部为 AI 生成的虚构人物，与任何真实个人无关。用 curl -L -o 将每个文件下载到 public/images/：https://media.vibefather.ai/assets/2ec629bd-055b-454e-9791-702acdfa3995/judge-rosa.webp → public/images/judge-rosa.webp（法官 1；alt 'Portrait of judge Rosa Delgado'）；https://media.vibefather.ai/assets/2ec629bd-055b-454e-9791-702acdfa3995/judge-hendrik.webp → public/images/judge-hendrik.webp（法官 2；alt 'Portrait of judge Hendrik Vos'）；https://media.vibefather.ai/assets/2ec629bd-055b-454e-9791-702acdfa3995/judge-arjun.webp → public/images/judge-arjun.webp（法官 3；alt 'Portrait of judge Arjun Mehta'）；https://media.vibefather.ai/assets/2ec629bd-055b-454e-9791-702acdfa3995/judge-tessa.webp → public/images/judge-tessa.webp（法官 4；alt 'Portrait of judge Tessa Boateng'）。共四个文件。
- 图片：在项目根目录写入 ASSETS.md，包含一个表格：路径、来源 URL、作者、许可证——每张肖像一行（来源 'media.vibefather.ai, made for this template'，作者 'VibeFather'，许可证 'Distributed with the template'），另加 @fontsource-variable/space-grotesk、@fontsource-variable/inter 和 @fontsource/jetbrains-mono（OFL-1.1）以及 lucide-react（ISC）的行。说明肖像是 AI 生成的虚构占位图，赞助商名称是虚构的。
- 图标：仅使用 lucide-react：ArrowRight、Check、Coffee、Cpu、MoonStar、Plus、Users。描边宽度 1.75，14–20px，颜色继承。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的圆角方块，填充 #0A0F0C，带 1.5px #A8E63C 边框，居中一个青柠色终端尖角符号 '>'。不使用品牌标志。
- 字体：安装 @fontsource-variable/space-grotesk、@fontsource-variable/inter 和 @fontsource/jetbrains-mono，并按 Setup 中所列在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包进 dist/。

## 禁止事项（Don'ts）
- 无后端、无表单提交、无 API 请求：注册仅保存在 localStorage 中，文案也如实说明；每个“sample”标签都保持诚实。
- 每个内部链接都指向文件名或锚点（./index.html、#tracks、#register）——绝不指向裸目录；只有一个页面。
- 不使用真实的黑客松、赞助商、平台（MLH、Devpost）或其标识：活动、赞助商、奖品和评委均为虚构；赞助商方块采用字标风格字体，绝不使用 logo。
- 评委是 AI 生成的虚构人物，年龄和族裔多样，不 resemblance 任何真实个人；肖像中无挂绳或徽章。
- 不以事实形式呈现真实奖金金额——“(sample)”随之出现；FAQ 的费用回答保持免费但虚构。
- 倒计时仅针对 [DATE] 变量；除示例日程的星期模式标签外，不出现其他日期、作为声明的时间或年份。
- 一切自托管：字体通过 Fontsource，图标作为 npm 包或内联 SVG，肖像下载到 public/images/。无 CDN <script> 或 <link> 标签，无 Google Fonts，无分析。
- 生产构建：压缩、无 source map、不将 src/ 复制到 dist/，单命令 npm run build，输出在 dist/ 下小于 8 MB。
- 除页脚署名链接外，绝不在站内提及 VibeFather；所有文案为虚构的美式英语。
- 尊重 prefers-reduced-motion：无显现、无括号绘制、无光标闪烁；倒计时继续走动，一切保持可用。
- 页面必须在 1440x900 桌面和 390x844 移动端零控制台错误；导航、倒计时、表单、FAQ 和按钮仅用键盘即可操作，并有可见焦点环。

---
— Prompt by VibeFather · https://vibefather.ai/t/hackathon-event-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
