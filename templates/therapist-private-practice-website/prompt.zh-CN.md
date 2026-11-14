> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 治疗师私人执业网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [THERAPIST] 打造的单页网站，[THERAPIST] 是一位在 [CITY] 执业的持证治疗师——提供面对面或远程医疗会话，费用从 $[FEE] 起，并设有浮动收费。网站必须让人感觉就像那间治疗室本身：治疗取向、专长领域（以温和的方式呈现）、费用与保险的通俗说明、第一次会话的真实样貌、执业详情，以及一个在客户端确认的联系表单。单页：index.html，包含各区块（#approach、#areas、#fees、#first-session、#contact）。不做临床断言，不承诺疗效，不使用诊断性语言。一切都在浏览器中运行；不会向任何地方提交内容。

- 受众：那些已经“想着要去了解一下那件事”想了好几个月的成年人：他们在夜里阅读，害怕被评判或被推销，需要第一条消息让人感到安全、门槛很低。这个页面的任务是让写下一句话变得可能。
- 目标：收到第一条消息。访客在十秒内感受到房间的平静并看到联系 CTA；在两分钟内读完第一次会话的样貌并打开表单。
- 语气：温暖、不慌不忙、第一人称。用平实的语言讲述艰难的事；没有通俗语言配套说明时，不使用临床词汇；不对痛苦表现出欢快。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（MIT）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/lora（OFL-1.1）、@fontsource-variable/nunito-sans（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 react-ts 模板通过 npm create vite@latest 搭建脚手架。项目根目录下只有一个 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将 Design 下的每种颜色以 kebab-case 键（sand、warmhaze、card、warmink、taupe、sage-soft、sage-deep、rose-quiet、rose-deep、rule）添加到 theme.extend.colors，并设置 fontFamily display ['Lora', 'Georgia', 'serif']、sans ['Nunito Sans Variable', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 18px，并添加 maxWidth { container: '1040px' } —— 练习页面比商店页面窄。
  - 在 src/fonts.ts 中导入 '@fontsource/lora/500.css'、'@fontsource/lora/600.css'、'@fontsource/lora/500-italic.css' 和 '@fontsource-variable/nunito-sans'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（每个字符串、费用、区域行、步骤和图片路径，均带类型）、src/lib/brand.ts（therapistSlug = [THERAPIST] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 therapistSlug + '.com'，practiceEmail = 'hello@' + emailDomain）、src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键前缀为 therapistSlug + ':'）。
  - 状态：src/store/contact.ts 是一个小型外部存储（useSyncExternalStore），持有 { name, email, line, sent }，持久化到 localStorage 键 therapistSlug + ':contact'。已发送的便条会渲染一个温和的确认；'Write again' 会清除它。
  - 组件位于 src/components/：Header.tsx（安静，无粘性紧迫感——一个小型顶部栏）、Reveal.tsx（Motion whileInView 包装器，温和）、Eyebrow.tsx、Footer.tsx；Hero.tsx、Approach.tsx、Areas.tsx（AreaCard.tsx）、Fees.tsx（FeeRow.tsx）、FirstSession.tsx（StepCard.tsx）、Details.tsx（HoursRow.tsx）、ContactForm.tsx（SentNote.tsx）、CrisisNote.tsx。src/pages/Home.tsx 组合它们。
  - 在首次构建之前，使用 curl -L -o 和给定的确切文件名，将 Assets 下列出的每张图片下载到 public/images/。构建本身从不获取任何内容。
  - public/favicon.svg 如 Assets 下所述。index.html：lang en，<meta name='theme-color' content='#F6F1E7'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[THERAPIST] — Therapy in [CITY]</title>。
  - 在项目根目录下按 Assets 下所述编写 ASSETS.md。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和四张图片。保持在 6 MB 以下。

## 变量
- [THERAPIST] — 治疗师姓名（默认："Elena Marsh"）。虚构治疗师的名字，资质保持通用（'Lena Marsh, LMFT-style' 是错的——请使用纯 '[THERAPIST], licensed therapist'）。用于标题、署名行、电子邮件（hello@ + 姓名-slug + .com）和 localStorage 键。绝不使用真实人物。
- [CITY] — 城市（默认："Santa Fe, New Mexico"）。执业地点。用于标题、主视觉文案、详情区块和页脚。真实城市可以；街道为虚构。
- [FEE] — 单次咨询费（默认："140"）。标准 50 分钟咨询费，以数字表示。驱动费用区块、浮动收费行（'a limited number of sliding-scale places at $90–120'）以及无 FAQ 的坦诚文案。保持在 100–200。
- [MODES] — 咨询方式（默认："in person and by telehealth"）。咨询如何进行，小写（'in person and by telehealth'、'in person only'）。驱动主视觉副行、详情区块和一句方法说明。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/therapist-private-practice-website（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 沙色（Sand）`#F6F1E7` — 全页背景 — 温暖、安静。
- 暖雾色（Warmhaze）`#EFE8DA` — 交替区块背景（Areas、First session）、悬停填充、标签。
- 卡片色（Card）`#FDFBF6` — 区域卡片、费用行、联系面板、已发送提示。
- 暖墨色（Warmink）`#3B352C` — 标题和正文、图标颜色。
- 灰褐色（Taupe）`#7A7163` — 次要文本、说明文字、眉题、费用标签。
- 柔鼠尾草色（Sage Soft）`#A9B49C` — 安静的第二色：步骤编号、区域图形填充、柔和分隔线。
- 深鼠尾草色（Sage Deep）`#6F7D62` — 主按钮、选中状态、焦点环、已发送提示的对勾。
- 静玫瑰色（Rose Quiet）`#C99A94` — 唯一的暖色点缀：联系 CTA、斜体强调标记、照片说明中的玫瑰细节、悬停刻度。
- 深玫瑰色（Rose Deep）`#B07D76` — 玫瑰色悬停和按下状态。
- 分隔线色（Rule）`#E2DAC8` — 1px 细线、卡片边框、输入框边框、分隔线。

### 字体排印
- 展示字体：H1、H2、H3、治疗师姓名、费用数字、字标 — Lora，温暖而有人情味：Lora (OFL)，字重 500/600
- 文本与 UI：正文、眉题、按钮、表单字段、说明文字；费用使用等宽数字：Nunito Sans (OFL)，字重 400/600/700

### 布局与动效
- 间距：8px 基础单位。容器最大宽度 1040px，居中，侧边内边距桌面端 48px，平板端 32px，640px 以下 20px。单列流式布局，首屏和费用区为两列。区块垂直内边距桌面端 96px，1024px 以下 72px，640px 以下 56px — 这是该诊所见过的所有页面中最宽裕的间距。字号比例：H1 clamp(38px, 5.6vw, 64px) Lora 500，行高 1.08；H2 clamp(26px, 3.6vw, 42px) Lora 500；H3 20px Lora 600；标题中的斜体短语使用 Lora 500 italic（以 *星号* 标记，渲染为 <em>）；导语 Nunito 400 17.5px / 1.7 Warmink 90% 不透明度；正文 16px / 1.8（最大宽度 62ch）；眉题 Nunito 700 12px 大写 字距 0.18em Taupe；说明文字 13px Taupe。按钮：高度 50px，Nunito 700 14px。主按钮（联系 CTA）：Sage Deep 填充，Card 文字。安静次要按钮：1px Warmink/30% 边框，Warmink 文字。输入框：高度 50px，1px Rule 边框，Card 填充，聚焦时 Sage Deep 边框。全局焦点环：2px Sage Deep 轮廓，偏移 3px。
- 圆角：卡片、按钮、输入框、照片和联系面板均为 18px — 柔和圆角，此页面没有任何尖锐边角。仅药丸和圆点使用 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1) 用于显现；--ease-io cubic-bezier(0.65, 0, 0.35, 1) 用于表单切换。所有 D 组页面中最慢、最轻柔的动效 — 900ms 显现，无弹跳，无循环。
- 动效：显现：包裹在 <Reveal> 中的区块从 opacity 0、translateY(10px) 开始，在 20% 可见时以 900ms --ease-out 稳定下来（Motion whileInView，viewport once）。相邻元素错开 100ms。
- 动效：首屏：房间照片从 96% 不透明度在 1400ms 内淡入（无缩放 — 没有任何突兀动作）；H1 各行上升 14px，错开 180ms；斜体强调词绘制一次 2px Rose Quiet 下划线。
- 动效：区域卡片：悬停仅上浮 2px；小图形（一片叶子、一座桥、一个结 — 绘制的 SVG）在悬停时填充 Sage Soft。此页面没有任何脉冲动效。
- 动效：首次会话步骤：连接细线随区块滚动向下绘制（scaleY）；步骤编号依次淡入，间隔 80ms，仅一次。
- 动效：费用行：费用数字在显现时计数一次（600ms，轻柔）；滑动比例线最后淡入。
- 动效：联系表单：无效提交抖动 3px 一次（最轻柔的抖动），并显示一行友善的内联文字（'An email address helps the reply find you'）；发送时切换到 SentNote（360ms --ease-io）— 一个绘制的 Sage Deep 对勾柔和缩放进入，'Thank you, [NAME].' 'A reply usually comes within two days — no newsletters, no follow-up sequence.' 以及 'Write again' 轻柔清除。持久化在 localStorage 中。
- 动效：链接：.link-draw 在悬停和 focus-visible 时以 320ms 生长 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 一切以静止状态渲染（无显现、无绘制、无计数）；颜色/边框悬停变化保留。在 index.css 中使用 CSS @media，并在组件中使用 Motion 的 useReducedMotion。
- 图像：平静的真实摄影，全部四张为本模板以统一风格制作：柔和的自然光、温暖的沙色和鼠尾草色调、空房间 — 窗边的扶手椅、茶具、植物、走廊。绝不出现人物（无面孔、无手、无剪影）；无可读文字。每张照片使用 object-fit cover，object-position 见 Assets 下说明，18px 圆角，无阴影；Sand 上的照片获得 1px Rule 轮廓。说明文字使用 Nunito 13px Taupe。代码绘制：区域图形（叶子、桥、结、波浪、石头、小径）、步骤编号、已发送对勾、标签和 favicon。图标：仅 lucide-react，描边宽度 1.5，克制使用。

## 页面与区块
### 诊疗实践（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[THERAPIST] = Elena Marsh，[CITY] = Santa Fe, New Mexico，[FEE] = 140，[MODES] = in person and by telehealth）。将每个字符串、费用和列表都放入 src/content.ts 并从中渲染。若任何变量值不同，请重写主视觉、方法、全部六个领域、费用、步骤和详情，使其对新诊疗实践具体且可信，保持相同结构和数量（3 段方法段落、6 个领域、3 行费用、4 个步骤）。所有语言以经验为框架，绝不临床化：不出现诊断、不出现结果、不出现“treatment of”；领域是“a space to explore”。事实：会谈 50 分钟，[MODES]，标准费用 $[FEE]，有 $90–120 的浮动收费名额；营业时间周二至周五 9–5（两个晚间至 7 点）；诊所为“412 Alameda Court, [CITY]”的一间安静房间，外加一间安全视频室；治疗师亲自回复邮件；无危机热线 — CrisisNote 内容为“If you are in immediate danger, please call your local emergency number or go to your nearest emergency room — this page is not a crisis service.”
   布局：不适用
   动效：不适用
2. **页眉** — 一条安静的顶栏，而非导航机器：左侧“[THERAPIST]”（Lora 500 19px），下方“Licensed therapist · [CITY]”（10px 大写 Taupe）；右侧仅两个文本链接 — “Fees” → #fees，“First session” → #first-session — 以及 Rose-to-Sage 主按钮“Write to Elena” → #contact。无粘性行为；页面是一次轻柔滚动。640px 以下：名称 + 联系按钮。
   布局：相对定位（非粘性），高度 80px，Sand 背景，底部细线边框。
3. **主视觉** — 两栏。左侧：眉题“A QUIET PLACE TO START”；H1：“You don''t have to” / “*know what to say.*”；导语（最大宽度 500px）：“I''m [THERAPIST], a licensed therapist in [CITY]. Sessions happen [MODES] — fifty minutes that belong entirely to you, at whatever pace the week allows.”；主按钮“Write a first note” → #contact，配说明文字“One sentence is enough. No forms, no commitment.”；下方 Taupe 小字一行：“Currently welcoming new clients”。右侧：room-chair.webp（4:3），配说明文字“The room — the chair by the window is yours”。
   布局：Sand 背景，顶部垂直内边距 112px；左侧 6 列，右侧 5 列偏移 1。
4. **方法** — 区块 id='approach'。眉题“HOW I WORK”和 H2“Slower, plainer, yours.”。三段（首行 Lora 主导，正文 Nunito）：“My approach is conversational first. We talk like people — about your week, your work, the thing you keep almost saying — and the deeper work finds its own way in.” / “I draw on psychodynamic and mindfulness-based traditions, translated into plain language. You will never leave a session with homework you didn''t help design.” / “Change, when it comes, tends to look quiet: a shorter pause before the old reaction, a sentence you couldn''t say last month. We notice those together.”
   布局：Warmhaze 背景。单列最大宽度 640px；首行 Lora 600 22px，正文 16.5px / 1.8；段落间距 28px。
5. **领域** — 区块 id='areas'。眉题“WHAT WE MIGHT EXPLORE”和 H2“Areas, not labels.”。六个 AreaCard，每个为手绘图标（Sage Soft）+ 标题（Lora 600 18px）+ 两行温和文字：“Anxiety” — “the kind that hums under everything; a place to turn the volume knob”；“Life transitions” — “new city, new job, new shape of family — thresholds deserve witnesses”；“Relationships” — “the ones you''re in, the ones you left, the one with yourself”；“Work stress” — “when the job follows you home and sits down”；“Grief” — “no timetable, no five stages in order, whatever it is to you”；“Identity” — “the questions that don''t fit on forms”。说明文字：“If your something isn''t listed, write anyway — the sentence matters more than the category.”
   布局：Sand 背景。3x2 网格，间距 20px；卡片在 Card Rule 边框上，内边距 24px；图标 36px；800px 以下：2 列，560px 以下：单列。
6. **费用与保险** — 区块 id='fees'。眉题“MONEY, PLAINLY”和 H2“Fees and the awkward part, answered.”。Card 上的 FeeRow：“A session” — “50 minutes” — “$[FEE]”；“Sliding scale” — “a limited number of places” — “$90–120, no paperwork, just ask”；“Insurance” — “I''m out-of-network” — “superbills provided for reimbursement”。下方两行朴素文字：“Payment is by card after each session. If the fee is the reason you''re hesitating, say so in your note — the sliding scale exists exactly for that.” / “No packages, no pre-paid bundles: one session at a time, always.”
   布局：Warmhaze 背景。行在 Card 面板内以细线分隔，最大宽度 680px；费用数字 Lora 600 22px 等宽数字；两行文字 15px Taupe 位于面板下方。
7. **首次会谈** — 区块 id='first-session'。眉题“THE FIRST SESSION”和 H2“What it actually looks like.”。StepCard 配 Sage Soft 数字：1）“The first ten minutes” — “Tea if you''re in the room, headphones if you''re not. We go at conversation speed; you can start anywhere, including nowhere.” 2）“The middle” — “You talk, I listen, we find the thread together. Questions when they help; silence when that helps more.” 3）“The last ten minutes” — “We surface, gently. You''ll leave with a sense of the room and how it feels to be heard in it — no plan is required.” 4）“After” — “You decide. If it fit, we find a time; if it didn''t, that''s information too, and I''ll say so kindly.”
   布局：Sand 背景。四个步骤位于一条手绘垂直细线上；数字 Lora 28px Sage Deep；标题 Lora 600 18px；正文 15.5px / 1.75；容器最大宽度 680px。
8. **诊疗详情** — 眉题“THE PRACTICAL BITS”和 H2“Where and when.”。Warmhaze 上两个安静栏目：“In person” — “412 Alameda Court, [CITY]” · “a quiet ground-floor room; tea and a window” · “ Tue–Thu 9–5”；“Telehealth” — “a secure video room, link sent the morning of” · “Fri 9–5, Tue/Wed evenings until 7” · “same fee, same fifty minutes”。一张柔和照片（tea-light.webp），配说明文字“The kettle is usually on”。
   布局：Warmhaze 背景延续；栏目 5/5，间距 32px；桌面端照片 4 列居右，800px 以下堆叠。
9. **联系与结尾** — 区块 id='contact'。眉题“A FIRST NOTE”和 H2“One sentence is enough.”。Card 上的 ContactForm：姓名（占位符“A name you''d like to be called”）、邮箱，以及一个高度充裕的字段 — “What brings you here, if you''d like to say”（占位符“Even ''not sure yet'' is a fine start.”）；主按钮“Send the note”，配说明文字“Saved in this browser — the real page would reach Elena''s own inbox. Nothing is sent here.”。SentNote：手绘对勾，“Thank you, [NAME].”“A reply usually comes within two days — no newsletters, no follow-up sequence.”以及“Write again”轻柔清除。表单下方 CrisisNote，小而稳定，Taupe 色：“If you are in immediate danger, please call your local emergency number or go to your nearest emergency room — this page is not a crisis service.”。页脚：Sand 配细线；左侧名称 + “Licensed therapist · [CITY]”；右侧 hello@ + emailDomain。底行：“© [THERAPIST]. Content on this page is informational, not medical advice.”
   布局：Sand 背景。面板最大宽度 600px；CrisisNote 位于面板下方 32px，居中；页脚顶部细线，内边距 48px。

## 资源

- 图片：为本设计制作的模板照片（可随模板自由再分发）。用 curl -L -o 将每张图片下载到 public/images/：https://media.vibefather.ai/assets/c1758982-3c2e-4a04-8e28-ab387f18c305/room-chair.webp → public/images/room-chair.webp（Hero；object-position 50% 55%；alt 'An empty armchair beside a window with soft light and a plant'）；https://media.vibefather.ai/assets/c1758982-3c2e-4a04-8e28-ab387f18c305/tea-light.webp → public/images/tea-light.webp（Details；alt 'A ceramic tea set on a low table in warm light'）；https://media.vibefather.ai/assets/c1758982-3c2e-4a04-8e28-ab387f18c305/hallway-soft.webp → public/images/hallway-soft.webp（Approach side；alt 'A soft-lit hallway with a wooden door ajar'）；https://media.vibefather.ai/assets/c1758982-3c2e-4a04-8e28-ab387f18c305/window-plants.webp → public/images/window-plants.webp（Areas side；alt 'Plants on a windowsill with sheer curtains'）。共四个文件。
- 图片：在项目根目录写入 ASSETS.md，包含一个表格：path、source URL、author、license——每张照片一行（source 'media.vibefather.ai, made for this template'，author 'VibeFather'，license 'Distributed with the template'），另加 @fontsource/lora 和 @fontsource-variable/nunito-sans（OFL-1.1）以及 lucide-react（ISC）的行。绝不用图库网站或含人物、面孔、手部或可读文字的图片替换照片。
- 图标：仅使用 lucide-react：Clock、MapPin、Video、Check、ArrowRight（克制使用——此页面更偏好手绘字形）。六个区域字形（leaf、bridge、knot、wave、stone、path）、步骤编号、发送勾选标记和 favicon 均为手绘 SVG。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的 rect rx 10 填充 #6F7D62，一个 Card（#FDFBF6）柔叶字形。无其他 logo：治疗师姓名始终以文字排版呈现；无真实目录或执照徽章。
- 字体：安装 @fontsource/lora 和 @fontsource-variable/nunito-sans，并按 Setup 中所述在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包进 dist/。
- 图片：以代码绘制：六个区域字形、步骤编号、发送勾选标记、chips 和 favicon。除四张照片外无其他位图；无插图；无地图瓦片。

## 不要做
- 不要后端、不要表单提交、不要向任何 API 发起 fetch：联系备注仅保存在浏览器中（localStorage），表单上要说明这一点；危机提示以通用方式指向当地紧急服务，不得编造任何热线号码。
- 这个单页上的所有链接都是锚点（./index.html#approach、#areas、#fees、#first-session、#contact）加上页脚的 mailto。
- 一切自托管：字体通过 Fontsource，图标用 npm 包或内联 SVG，图片下载到 public/images/。不要 CDN 的 <script> 或 <link> 标签，不要 Google Fonts，不要分析统计——也不要第三方预约组件或聊天气泡；页面上要说明治疗师亲自回复自己的邮件。
- 生产构建：压缩，不要 source map，不要把 src/ 复制进 dist/，单条命令 npm run build，输出在 dist/ 下且小于 6 MB。
- 任何地方都不要临床断言、疗效承诺或诊断性语言；领域描述保持体验性；不要真实治疗师、执照机构或目录徽章；不要含人物、面孔、手或可读文字的照片。
- 任何地方都不要日期或年份；网站永远不显示今天的日期。
- 除可选的页脚署名链接外，网站内绝不提及 VibeFather 或任何其他品牌；所有文案均为虚构的美式英语。
- 绝对尊重 prefers-reduced-motion——这个页面的平静就是产品本身：一切静态渲染，没有循环或脉动；颜色/边框的悬停效果保留。
- 页面必须在 1440x900 桌面和 390x844 移动端正常工作，控制台零错误；表单仅用键盘可操作且有可见的焦点环；textarea 高度舒适（4 行）。
- 文案保持人性化、平实：不要 lorem，不要“journey of healing”之类的陈词滥调；每一项费用、时段和文案都放在 src/content.ts 中。

---
— Prompt by VibeFather · https://vibefather.ai/t/therapist-private-practice-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
