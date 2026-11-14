> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 物理治疗诊所网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [CLINIC] 打造的两页网站，这是一家位于 [CITY] 的物理治疗诊所，服务对象为 [FOCUS]，自费就诊起价 $[SELF_PAY]。网站必须温暖而诚实：用平实的语言描述病症，三步疗法，三位治疗师配 AI 肖像（虚构占位符），一个解答尴尬问题的保险区块，一份在客户端确认的新患者登记表，以及带有"当前营业"指示的营业时间。页面：index.html、newpatient.html。不使用诊断性语言，不承诺疗效。一切都在浏览器中运行；不会向任何地方提交数据。

- 受众：30–70 岁的成年人，带着挥之不去的疼痛和一份他们看不懂的免赔额：术后膝盖、办公背痛、跑者全身痛。他们想知道这家诊所能否解决他们这类问题、是否接受他们的保险，并且不会因为他们拖延就诊而让他们难堪。
- 目标：让访客填写登记表。访客在十秒内看到承诺、一位治疗师的面孔和新患者 CTA；在两分钟内找到自己的病症并打开表单。
- 语气：鼓励而务实，就像一位见过同一个肩膀一千次的物理治疗师。用平实的语言描述解剖结构，用典型病程描述结果（标注为示例），外加一个关于作业依从性的玩笑。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（MIT）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/nunito（OFL-1.1）、@fontsource-variable/source-sans-3（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 npm create vite@latest 和 react-ts 模板搭建脚手架。项目根目录下有两个真实的 HTML 页面：index.html（入口 src/main-home.tsx）和 newpatient.html（入口 src/main-new.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0, rollupOptions { input { index: resolve(__dirname, 'index.html'), newpatient: resolve(__dirname, 'newpatient.html') } } }。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './newpatient.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将 Design 下的每种颜色以 kebab-case 键添加到 theme.extend.colors（white-page、slate-mist、card、teal、teal-deep、teal-mist、ink、slate、coral、rule、good），并设置 fontFamily display ['Nunito', 'system-ui', 'sans-serif']、sans ['Source Sans 3 Variable', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 14px，并添加 maxWidth { container: '1160px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/nunito/600.css'、'@fontsource/nunito/700.css' 和 '@fontsource-variable/source-sans-3'；从两个入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（每个字符串、病症、步骤、治疗师、保险条目、营业时间和图片路径，均带类型），src/lib/brand.ts（clinicSlug = [CLINIC] 转为小写并将每一段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 clinicSlug + '.com'，phoneDigits 用于 tel:），src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键前缀为 clinicSlug + ':'），src/lib/useOpenNow.ts（根据营业时间表和客户端时钟判断 open-now）。
  - 状态：src/store/intake.ts 是一个小型外部 store（useSyncExternalStore），持有 { condition, history: string[], name, phone, sent }，持久化到 localStorage 键 clinicSlug + ':intake'。
  - 组件位于 src/components/：Header.tsx、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx、Footer.tsx；首页：Hero.tsx、Conditions.tsx（ConditionCard.tsx）、Approach.tsx（StepCard.tsx）、Therapists.tsx（TherapistCard.tsx）、Insurance.tsx（InsRow.tsx）；新患者页：IntakeForm.tsx（ConditionSelect.tsx、HistoryChecks.tsx、Confirmed.tsx）、HoursBlock.tsx（OpenNowPill.tsx）、GettingHere.tsx。src/pages/Home.tsx 和 NewPatient.tsx 组合它们；两个页面都渲染 Header 和 Footer。
  - 首次构建前，使用 curl -L -o 将 Assets 下列出的每张图片以给定的确切文件名下载到 public/images/。构建本身从不获取任何内容。
  - public/favicon.svg 如 Assets 所述。两个 HTML 文件：lang en，<meta name='theme-color' content='#FDFDFB'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>。标题：index.html '<title>[CLINIC] — Physical therapy in [CITY]</title>'，newpatient.html '<title>New patients — [CLINIC]</title>'。
  - 在项目根目录编写 ASSETS.md，如 Assets 所述。
  - dist/ 包含两个 HTML 文件、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张图片。保持在 10 MB 以下。

## 变量
- [CLINIC] — 诊所名称（默认：“Bridge Physical Therapy”）。虚构的诊所名称。用于字标、标题、页脚、电子邮件（hello@ + 不含连字符的 clinicSlug + .com）以及 localStorage 键。绝不使用真实诊所或连锁品牌。
- [CITY] — 城市（默认：“Minneapolis, Minnesota”）。诊所所在地。用于标题、首屏、营业时间区块和页脚。可以使用真实城市；街道为虚构。
- [FOCUS] — 治疗对象（默认：“adults with stubborn joints”）。一个全小写短语，说明客户群体。驱动首屏文案、病症语气和一个 FAQ。保持温暖且具体。
- [SELF_PAY] — 自费就诊（默认：“95”）。自费每次就诊费率，以数字表示。驱动保险区块的诚实计算和一个 FAQ。保持在 75–150。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/physical-therapy-clinic-website（默认：是；删除此行以移除它）

Pages & Sections 下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- White Page `#FDFDFB` — 两个页面的页面背景。
- Slate Mist `#EFF3F2` — 交替区块背景（Conditions、Insurance）、标签、悬停填充。
- Card `#FFFFFF` — 病症卡片、治疗师卡片、接诊面板、确认。
- Teal `#1F7A6D` — 主色：标题强调、主按钮、选中标签、步骤编号、焦点环。
- Teal Deep `#155F55` — 悬停和按下、页脚背景。
- Teal Mist `#E0F0ED` — 选中标签填充、图标槽、开放圆点光晕。
- Ink `#22302D` — 标题和正文文本、图标颜色。
- Slate `#5C6B68` — 次要文本、说明文字、眉题、关闭状态。
- Coral `#E2795B` — 唯一的暖色点缀：新患者 CTA、旅程圆点、示例结果标签、悬停刻度。
- Rule `#DEE5E2` — 1px 细线、卡片边框、输入框边框、分隔线。
- Good `#2E8B62` — 确认勾选、保险接受刻度、当前开放圆点。

### 排版
- 展示字体：H1、H2、H3、病症名称、治疗师姓名、字标 — Nunito，圆润友好：Nunito (OFL)，字重 600/700
- 文本和 UI：正文、眉题、按钮、表单、说明文字；时间和价格使用表格数字：Source Sans 3 (OFL)，字重 400/600/700

### 布局与动效
- 间距：8px 基础单位。容器最大宽度 1160px，居中，侧边内边距桌面 48px、平板 32px、640px 以下 20px。12 列网格，列间距 24px。区块垂直内边距桌面 96px、1024px 以下 72px、640px 以下 56px。字号比例：H1 clamp(40px, 6vw, 72px) Nunito 700，行高 1.06；H2 clamp(28px, 3.8vw, 44px) Nunito 700；H3 20px Nunito 700；导语 Source Sans 400 17.5px / 1.65 Ink 90%；正文 15.5px / 1.7（最大宽度 62ch）；眉题 Source Sans 700 12px 大写 字间距 0.14em Slate；说明文字 13px Slate。按钮：高度 50px，Source Sans 700 14px。主按钮：Teal 填充，Card 文本。新患者 CTA：Coral 填充，Card 文本。次要按钮：1px Teal 边框，Teal 文本。输入框：高度 50px，1px Rule 边框，Card 填充，焦点 Teal 边框。全局焦点环：2px Teal 轮廓，偏移 3px。
- 圆角：卡片、按钮、输入框、标签和照片 14px。仅药丸、开放圆点和旅程圆点使用 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于表单切换和手风琴。轻柔而稳定。
- 动效：显现：包裹在 <Reveal> 中的区块从 opacity 0、translateY(12px) 开始，在 15% 可见时（Motion whileInView，viewport once）以 700ms --ease-out 稳定下来。同级元素错开 70ms。
- 动效：Hero：房间照片在 2000ms 内从 1.04 缩放到 1.0；H1 上升；一个小旅程圆点（coral）脉冲一次。
- 动效：病症卡片：悬停上浮 3px，图标槽填充 Teal Mist。
- 动效：方法：三个步骤卡片的连接线随区块滚动从左到右绘制；数字依次弹出。
- 动效：治疗师卡片：肖像悬停时缩放 1.03；专长药丸交叉淡入到一句话简介。
- 动效：保险行：接受网络的刻度以 60ms 错开进入。
- 动效：接诊：病史复选框以绘制的勾选标记打勾；无效提交抖动 4px 一次，并显示友好的内联标签；发送切换为 Confirmed（300ms --ease-io），Good 勾选绘制，并显示 'See you soon, [NAME].' 以及回显的病症行。
- 动效：链接：.link-draw 在悬停和 focus-visible 时以 280ms 增长 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 无缩放、绘制、弹出或错开显现；一切静止；颜色/边框悬停保留。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：明亮的真实摄影，全部六张为此模板以一致风格制作：柔和日光下的治疗室，浅色木材和柔和绿色，无手场景 — 无患者，无面孔。治疗师肖像是 AI 生成的虚构人物在工作（引导肩部拉伸、观察步态、演示弹力带练习）— 占位符，真实诊所可替换为自己员工的照片。无可读文字或标牌。每张照片使用 object-fit cover，object-position 在 Assets 下给出，14px 圆角，无阴影；White 上的照片获得 1px Rule 轮廓。说明文字使用 Source Sans 13px Slate。代码绘制：favicon、旅程圆点、刻度、标签和确认勾选。图标：仅 lucide-react，描边宽度 1.75。

## 页面与区块
### 首页（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[CLINIC] = Bridge Physical Therapy，[CITY] = Minneapolis, Minnesota，[FOCUS] = adults with stubborn joints，[SELF_PAY] = 95）。将每个字符串和数字放入 src/content.ts 并从中渲染；两个页面共用一个内容文件。如果任何变量值不同，请重写主视觉区、全部八个病症、步骤、治疗师、保险条目和常见问题，使其对新诊所而言具体且可信，同时保持相同的结构和数量（8 个病症、3 个步骤、3 位治疗师、4 行保险、4 个常见问题）。所有患者、治疗师和疗程均为虚构；结果保持体验性描述，并带有“(typical journey, sample)”标签。事实：地址 '88 Shepherd Lane, [CITY]' 为虚构；电话 (612) 555-0172；营业时间周一至周四 7:00–19:00，周五 7:00–15:00，周六 8:00–12:00（仅手法治疗），周日休息；自费 $[SELF_PAY]/次；与“most major plans — we check your card in five minutes and tell you before visit two”为网络内合作；病症（名称 · 通俗说明 · 疗程）：'Necks & desk-backs' 'the monitor won, for now' 'most people feel freer turning their head within 3–4 visits (typical journey, sample)'；'Shoulders' 'overhead, underpaid, over-40 — we get it' '6–8 weeks is the common arc for rotator-cuff irritation (typical journey, sample)'；'Knees' 'stairs, squats and the kneecap''s opinions' 'many return to stairs comfortably in 4–6 visits (typical journey, sample)'；'Hips & backs' 'the pair that carries everything' 'most report easier mornings by week two or three (typical journey, sample)'；'Post-op rehab' 'knee and shoulder replacements, protocols followed' 'we sync with your surgeon''s protocol from visit one'；'Runners'' legs' 'shins, IT bands, plantar fascia' 'a return-to-run plan from week one, progressed with you'；'Wrists & thumbs' 'keyboards, phones, guitars' '2–3 weeks of calm work is typical (typical journey, sample)'；'Dizziness & balance' 'vestibular-friendly, unhurried' 'positional work often settles spells in 1–3 visits (typical journey, sample)'。步骤：1) 'Listen & measure' 'your story first, then the movement screen — noTreatment before we agree the problem'；2) 'Treat & teach' 'hands-on when it helps, homework you''ll actually do, dosed like a prescription'；3) 'Build the bridge' 'from the table to the trail, the gym, or the garden — your version of normal'。治疗师（肖像 · 姓名 · 专长 · 出诊日）：'pt-dana.webp' 'Dana Whitfield, DPT (fictional)' 'necks, headache-adjacent, vestibular' 'Mon–Thu'；'pt-marcus.webp' 'Marcus Oyelaran, DPT (fictional)' 'post-op knees, runners, kettlebells' 'Tue–Sat'；'pt-lin.webp' 'Lin Zhao, DPT (fictional)' 'shoulders, hands-on craft, weekend golfers' 'Mon–Fri'。保险行：'In-network' 'most major PPOs — we verify before visit two' Good；'Self-pay' '$[SELF_PAY] a visit, no packages, homework included' Good；'Medicare' 'accepted, assignment taken — bring the card' Good；'Out-of-network?' 'we give superbills and honest odds — sometimes it''s cheaper self-pay' Good。常见问题：'Do I need a referral?' 'State rules allow direct access — most people start without one; we check yours specifically.'；'Will it hurt?' 'The treatment shouldn''t; the homework might, mildly, on day two. We scale to your Yes-line.'；'What do I wear?' 'Comfortable clothes you can move in; shorts for knees, a tank for shoulders. We have spares.'；'How many visits?' 'Honest ranges on day one — many conditions run 4–8 visits (typical journey, sample), and we re-check the plan every visit.'
   布局：不适用
   动效：不适用
2. **页眉（所有页面）** — 左侧：字标 '[CLINIC]'（Nunito 700 18px），其下为 'Move better · [CITY]'（10px 大写 Slate），链接至 ./index.html。右侧导航（Source Sans 600 14px）：'Conditions' → ./index.html#conditions，'Our approach' → ./index.html#approach，'Therapists' → ./index.html#therapists，'Insurance' → ./index.html#insurance；一个 Coral 色的 'New patient' → ./newpatient.html。低于 800px：字标 + 新患者按钮。
   布局：顶部粘性定位，高度 72px，White/94% 模糊，Rule 边框。
3. **主视觉区** — 两栏。左侧：眉题 'PHYSICAL THERAPY · [CITY]'；H1 'Stubborn joints,' / '*unstubborned.*' 导语（最大宽度 500px）：'[CLINIC] helps [FOCUS] get back to stairs, gardens, gyms and golf — with a plan you understand from visit one and homework you''ll actually do.' 主按钮 'Start as a new patient' → ./newpatient.html，次按钮 'See the conditions' → #conditions；信任行：'Direct access — no referral needed for most'；'Insurance verified before visit two'；'Self-pay $[SELF_PAY], no packages'。右侧：room-treatment.webp（4:3），配文 'Room two — where the kneeling happens'。
   布局：白色背景，顶部垂直内边距 104px；左侧 6 列，右侧 5 列偏移 1。
4. **病症** — 区块 id='conditions'。眉题 'WHAT WE SEE WEEKLY'，H2 'EIGHT FAMILIAR STORIES.' 八个 ConditionCards（图标、名称、通俗说明、Coral 色的疗程说明）：即上述名册。配文：'Journeys shown are typical (sample) — yours gets its own honest range on day one.'
   布局：Slate Mist 背景。4x2 网格，间距 20px；卡片使用 Card Rule 边框；图标位于 44px Teal Mist 圆角方块中；疗程说明 13px Coral。低于 900px：2 列，低于 600px：1 列。
5. **方法与治疗师** — 区块 id='approach'。眉题 'HOW IT GOES'，H2 'LISTEN. TREAT. BRIDGE.' 三个 StepCards，带连接线。区块 id='therapists'。眉题 'THE TEAM'，H2 'THREE PTS, ZERO DRILLS.' TherapistCards：肖像（4:3，悬停缩放）、姓名、一句话专长、出诊日说明；下方注释：'You''ll see the same PT every visit — continuity is the treatment''s best-kept secret.'
   布局：白色背景。步骤三列，带手绘连接线；治疗师三列，间距 24px；肖像悬停缩放，专长→一句话说明交叉淡入淡出。
6. **保险与页脚** — 区块 id='insurance'。眉题 'THE MONEY PART, ANSWERED'，H2 'NO SURPRISES AT THE FRONT DESK.' InsRows 位于 Card 上，带 Good 勾选：即上述四行名册。旁边一张安静的照片：room-gym.webp 'Where the bridges get built'（4:3）。页脚（Teal Deep，bone 文字）：字标 + 'Move better · [CITY]'；'88 Shepherd Lane, [CITY]'，(612) 555-0172 tel:，hello@ + emailDomain；营业时间区块；底部行 '© [CLINIC]. Journeys shown are typical (sample); your plan is written with you.'
   布局：保险区使用 Slate Mist（行 6 列，照片 4 列偏移 1，低于 900px 时堆叠）；页脚三部分行。

### 新患者（`newpatient.html`）
1. **刊头** — 实心页眉。眉题 'NEW PATIENTS'，H1 'Let''s start with your story.' 导语：'Sixty seconds of forms, saved in this browser — the real clinic would send it ahead so your first visit is all assessment, no clipboard.'
   布局：白色背景，顶部垂直内边距 136px + 48px，底部细线。
2. **接诊表单** — IntakeForm 位于 Card 上：ConditionSelect（八个病症 + 'Something else — we''ll figure it out'）；HistoryChecks（多选：'This started after an injury' / 'I''ve had imaging (MRI/X-ray)' / 'Surgery is on the table' / 'I''ve tried PT before'）；姓名 + 电话；主按钮 'Send my intake'，配文 'Saved in this browser — nothing is sent here.' 确认后：Good 勾选图形，'See you soon, [NAME].' 'We''ll call to book your first hour — bring shorts and a question list.' 回显的病症；'Edit my intake' 返回预填状态。持久化于 localStorage。旁边 HoursBlock，带 OpenNowPill 和本周营业时间（今天高亮）。
   布局：Slate Mist 背景；表单 7 列，营业时间 4 列偏移 1；低于 900px 时堆叠。
3. **到达方式** — 三行安静的信息，带图标：MapPin '88 Shepherd Lane — ground floor, no steps to the door'；Car 'Free lot behind the building, and the meters on Shepherd forgive a session''s length'；TrainFront 'Two blocks from the green line; a walk we''d count as a warm-up'。结尾行：'First visits take an hour. Bring the paperwork energy; we''ll bring the coffee.'
   布局：白色背景；各行以细线分隔，最大宽度 720px；结尾行居中，下方 48px。

## 资源

- 图片：为本设计制作的模板照片（可随模板自由再分发）。用 curl -L -o 将每张图片下载到 public/images/：https://media.vibefather.ai/assets/a35d3b49-4f19-45ea-be6d-2a4e4d5ee899/room-treatment.webp → public/images/room-treatment.webp（Hero；object-position 50% 55%；alt 'A bright treatment room with a low table and resistance bands'）；https://media.vibefather.ai/assets/a35d3b49-4f19-45ea-be6d-2a4e4d5ee899/pt-dana.webp → public/images/pt-dana.webp（治疗师卡片 Dana；alt 'Dana guiding a shoulder stretch, a fictional physical therapist'）；https://media.vibefather.ai/assets/a35d3b49-4f19-45ea-be6d-2a4e4d5ee899/pt-marcus.webp → public/images/pt-marcus.webp（治疗师卡片 Marcus；alt 'Marcus watching a patient''s gait, a fictional physical therapist'）；https://media.vibefather.ai/assets/a35d3b49-4f19-45ea-be6d-2a4e4d5ee899/pt-lin.webp → public/images/pt-lin.webp（治疗师卡片 Lin；alt 'Lin demonstrating a band exercise, a fictional physical therapist'）；https://media.vibefather.ai/assets/a35d3b49-4f19-45ea-be6d-2a4e4d5ee899/room-gym.webp → public/images/room-gym.webp（保险侧；alt 'A rehab gym corner with racks, bands and a treadmill'）；https://media.vibefather.ai/assets/a35d3b49-4f19-45ea-be6d-2a4e4d5ee899/room-wait.webp → public/images/room-wait.webp（新患者侧小图；alt 'A calm waiting corner with two chairs and plants'）。共六个文件。
- 图片：在项目根目录写入 ASSETS.md，包含一张表：path、source URL、author、license——每张照片一行（source 'media.vibefather.ai, made for this template'，author 'VibeFather'，license 'Distributed with the template'），另加 @fontsource/nunito 和 @fontsource-variable/source-sans-3（OFL-1.1）以及 lucide-react（ISC）的行。治疗师肖像为按肖像规则由 AI 生成的虚构人物；任何照片中均不出现患者。
- 图标：仅使用 lucide-react：Activity、Bone、Footprints、Dumbbell、PersonStanding、Keyboard、Waves、HeartPulse、Check、MapPin、Car、TrainFront。描边宽度 1.75，16–24px，颜色继承。旅程圆点、绘制的对勾、chip 和 favicon 为 SVG。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的 rect，rx 9，填充 #1F7A6D，一个 Card（#FFFFFF）桥形符号（一道柔和的拱形）。无其他 logo：诊所名称始终以文字排版呈现。
- 字体：安装 @fontsource/nunito 和 @fontsource-variable/source-sans-3，并按 Setup 中所述在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包进 dist/。
- 图片：在代码中绘制：旅程圆点、绘制的对勾、步骤连接线、chip、favicon。除六张照片外无其他位图；无插画；无地图瓦片。

## 不要做
- 无后端、无表单提交、不向任何 API 发起 fetch：接诊信息仅保存在浏览器中（localStorage），并在页面上说明这一点；tel: 链接由电话号码数字构建。
- 每个内部链接都指向文件名（./index.html、./index.html#conditions、./index.html#approach、./index.html#therapists、./index.html#insurance、./newpatient.html）——绝不指向裸目录。
- 不使用诊断、治愈或保证结果的语言：病症以体验性方式描述，结果以带有（示例）标签的典型旅程来描述，文案说明个体化方案是与患者共同制定的。
- 一切自托管：字体通过 Fontsource，图标作为 npm 包或内联 SVG，图片下载到 public/images/。不使用 CDN <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具。
- 生产构建：压缩，无 source map，不将 src/ 复制到 dist/，单一命令 npm run build，输出在 dist/ 下，小于 10 MB。
- 不使用真实诊所、医院或保险公司（网络以通用方式描述，无保险公司标志）；治疗师肖像为 AI 生成的虚构人物，非任何真实个人；任何照片中无患者或面部；无可读标识。
- 任何地方不出现日期或年份；网站从不显示今天的日期。
- 除可选的页脚署名链接外，网站内绝不提及 VibeFather 或任何其他品牌；所有文案为虚构的美式英语。
- 尊重 prefers-reduced-motion：无缩放、连接线绘制、弹出或交错显现；一切处于静止状态；颜色/边框悬停保留。
- 网站必须在 1440x900 桌面端和 390x844 移动端正常工作，控制台零错误；选择框、复选框和表单仅用键盘即可操作，并有可见的焦点环。
- 保持文案温暖平实：无 lorem，无 'holistic healing journey'；每个病症、时段和费用都存放在 src/content.ts 中。

---
— Prompt by VibeFather · https://vibefather.ai/t/physical-therapy-clinic-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
