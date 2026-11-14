> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 保险代理报价网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一个精致的三页网站，[BRAND] 是一家虚构的独立保险代理机构，为 [SERVICE_AREA] 的 [AUDIENCE] 提供服务。核心信息是 [PROMISE]。包含房屋、汽车和人寿保险覆盖路径；一个简短的分支式三步报价摘要表单；一个清晰的工作流程；三个虚构的代理人简介；明确标注为示例的评价；以及一个实用的理赔帮助页面。使用下方完全一致的默认文案和示例数据，当变量值变化时重写每一个代理机构专属细节。

- 受众：正在比较房屋、租客、汽车或定期人寿保险覆盖的个人和家庭，他们希望在联系独立代理人之前获得通俗易懂的指导。它也适合小型代理机构所有者，为自己的受众和服务区域改编一个完整的静态前端。
- 目标：帮助访客确定正确的保险覆盖路径，理解代理机构的角色，为真实对话准备一份简明的摘要，并找到冷静的理赔指导。展示一个完整的客户端报价旅程，不计算保费、不提交个人数据，也不暗示保险已生效。
- 语气：温暖、清晰、沉稳且具体。听起来像一位耐心的本地顾问，而不是保险公司、呼叫中心或激进的潜在客户漏斗。使用短句、具体例子、透明的局限性，不制造恐慌、不承诺节省费用，也不使用施压倒计时。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react (MIT)、react-dom (MIT)、vite (MIT)、@vitejs/plugin-react (MIT)、typescript (Apache-2.0)、tailwindcss (MIT)、postcss (MIT)、autoprefixer (MIT)、motion (motion.dev，从 'motion/react' 导入) (MIT)、lucide-react (ISC)、@fontsource/fraunces (OFL-1.1)、@fontsource/public-sans (OFL-1.1)
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 搭建一个 Vite React TypeScript 应用。将 index.html、quote.html 和 claims.html 保留在项目根目录，每个文件都包含一个 div id='root'，其 data-page 值分别为 home、quote 或 claims，并使用相同的 src/main.tsx 入口。
  - 在 vite.config.ts 中设置 base './'、plugins [react()]、build.outDir 'dist'、build.sourcemap false、build.assetsInlineLimit 0，并将 rollupOptions.input 设置为所有三个根 HTML 文件，使用 resolve(__dirname, '<file>')。不要将 src/ 复制到 dist/ 中。
  - 通过 PostCSS 配置 Tailwind 3.4，content 为 ['./index.html', './quote.html', './claims.html', './src/**/*.{ts,tsx}']。添加 Design 颜色和 fontFamily display ['Fraunces', 'Georgia', 'serif'] 以及 sans ['Public Sans', 'system-ui', 'sans-serif']。
  - 在 src/fonts.ts 中导入 '@fontsource/fraunces/600.css'、'@fontsource/fraunces/700.css'、'@fontsource/public-sans/400.css'、'@fontsource/public-sans/500.css'、'@fontsource/public-sans/600.css' 和 '@fontsource/public-sans/700.css'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - src/main.tsx 读取根元素的 data-page 值并渲染匹配的页面，不使用路由器。每个导航链接指向 ./index.html、./quote.html 或 ./claims.html，仅在指定处使用 section 哈希和 quote 查询参数。
  - 将所有可见字符串、示例答案选项、评论、代理、地址、营业时间、联系方式、FAQ 和图像路径保存在 src/content.ts 的类型化记录中。推导品牌相关值，并在变量变化时重写所有相关内容。
  - 添加 src/lib/brand.ts 用于 brandSlug 和保留的 .example 电子邮件地址，src/lib/quote.ts 用于查询解析、类型化分支字段、验证、摘要格式化和重置行为，以及 src/lib/clipboard.ts 用于带本地回退的复制。
  - 使用 Motion for React 实现区块显示、移动导航、报价步骤过渡、清单选项卡和手风琴。仅使用 Lucide 图标。将报价状态保留在当前页面会话的内存中；不要将答案持久化到 localStorage 或发送到任何地方。
  - 在首次构建之前，将六张提供的图像下载到 public/images/ 中，使用 Assets 下的确切路径。生产构建本身从不获取任何内容。
  - 从 Assets 下的原始敞开门线条图案创建 public/favicon.svg。为每个 HTML 文件提供一个简单的变量感知标题和本地 favicon 链接；不要添加 SEO 元数据或结构化数据。
  - 在项目根目录编写 ASSETS.md，包含 Assets 下指定的每张提供的图像、字体包和图标包。保持 dist/ 在 20 MB 以下，无源映射。

## 变量
- [BRAND] — 机构名称（默认："Morrow & Vale Insurance"）。一个虚构的独立机构名称，用于字标、页面标题、报价摘要、联系文案和页脚。切勿使用真实的保险公司或承保商。
- [BRAND_SLUG] — 机构标识（默认："morrow-vale"）。由机构名称衍生的小写连字符标识。移除连字符以构成保留的 .example 电子邮件本地域；切勿使用真实域名。
- [AUDIENCE] — 主要受众（默认："homeowners, drivers, and growing families"）。一个简洁的小写短语，用于塑造首屏、保障指导、代理人介绍和报价邀请。
- [SERVICE_AREA] — 服务区域（默认："Alder Grove and the west-side neighborhoods"）。一个虚构的本地服务区域，贯穿整个网站使用。街道地址和街区名称保持虚构。
- [PROMISE] — 核心承诺（默认："Clear choices. A real person in your corner."）。一句简短的原创机构承诺，用作首页 H1，并在报价和页脚文案中重复。不要承诺节省、承保或理赔结果。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接至 https://vibefather.ai/t/insurance-agency-quote-website（默认：是；删除此行以移除它）

页面与区块下的文案按默认值撰写。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- 羊皮纸色（Parchment）`#F4F0E6` — 主页面背景和温暖的编辑风格区块
- 纸白色（Paper）`#FFFDF8` — 卡片、表单、人像说明文字，以及 Forest 上的文字
- 森林绿（Forest）`#183B35` — 主文本、深色横带、页脚和主按钮
- 松绿色（Pine）`#2E5B50` — 链接、选中控件、焦点环和次要按钮填充
- 陶土色（Clay）`#C86F4B` — 装饰线条、小图标块、步骤标记和非文本强调元素
- 鼠尾草绿（Sage）`#DCE5D8` — 低调徽章、选中背景、进度轨道和清单面板
- 柔和灰（Muted）`#66736D` — 次要文案、说明文字、辅助文本和非活动进度标签
- 线条色（Line）`#CBD3C8` — 细线边框、输入框、表格线和卡片轮廓
- 错误色（Error）`#9B3E35` — 验证消息和错误边框，始终与文本和图标搭配使用

### 字体排印
- 展示标题、区块标题、大号引文数字和文字标识：Fraunces（OFL），字重 600/700
- 正文、导航、表单、评价、清单、说明文字和按钮：Public Sans（OFL），字重 400/500/600/700

### 布局与动效
- 间距：使用 4px 基础网格和 1280px 最大内容宽度，桌面端 32px 边距，移动端 20px 边距。主要区块使用桌面端 112px、移动端 72px 的垂直内边距。使用 12 列桌面网格，列间距 24px。H1 为 clamp(46px, 5.2vw, 74px) Fraunces 600，行高 1.01，字距 -0.035em；内页 H1 为 clamp(44px, 4.8vw, 66px)。H2 为 clamp(34px, 3.5vw, 50px)，行高 1.08；H3 为 25px。正文为 17px/1.65，最大宽度 64ch；小标签为 12px/1.4 Public Sans 700 大写，字距 0.13em。按钮和输入框高度至少 50px。焦点使用 3px Pine 轮廓，浅色表面上偏移 3px，深色表面上使用 Paper。
- 圆角：大型照片框架使用 28px 圆角，主要卡片使用 22px，引文和清单面板使用 14px，输入框使用 12px，按钮使用 10px，仅紧凑标签使用全圆角。卡片使用 1px Line 边框而非浮动阴影；仅引文工作区使用克制的 0 20px 55px Forest 阴影，不透明度 8%。
- 动效：在首页主视觉区，眉题、标题行、正文和 CTA 以 y 22 到 0、不透明度 0 到 1 在 600ms 内显现，错开 70ms；hero.webp 从 clip-path inset(0 0 100% 0) 到 inset(0) 在 850ms 内显现，缩放从 1.025 到 1。
- 动效：区块标题和卡片组一次性以 y 18 和不透明度在 480ms 内显现，同级错开 60ms。内容在没有 IntersectionObserver 时仍然可见，绝不在等待动画时隐藏。
- 动效：引文步骤以不透明度和 x 18 在 220ms 内进入，以 x -12 在 160ms 内退出。导航后将焦点移至新步骤标题。进度填充使用宽度过渡 240ms；答案在可见之前绝不播放动画。
- 动效：移动端导航以不透明度和高度在 220ms 内打开。理赔标签页使用 180ms 内容淡入，FAQ 手风琴使用高度和不透明度过渡 200ms。复制和打印操作显示简洁的文本反馈，不使用彩带效果。
- 动效：覆盖卡片和代理人卡片使用最大 3px 的悬停上浮，配合边框颜色过渡；不使用循环装饰、轮播、视差、保费数字滚动或动画星级评分。
- 动效：通过 Motion 的 reduced-motion hook 和 CSS 覆盖来尊重 prefers-reduced-motion：移除变换、裁剪显现、平滑滚动、错开和非必要过渡，同时保留所有最终状态和交互。
- 图像：将提供的六张纪实编辑风格照片作为一次连贯的机构拍摄来使用：温暖的自然日光、柔和的窗光、柔和的森林绿、羊皮纸色、陶土色、暖橡木色、真实质感和微妙的 35mm 颗粒。主视觉是一个宽阔的温馨家居场景，人物距离较远且不可识别，绝不是面部特写。三位成年代理人是虚构人物，不与任何真实个人相似，年龄和族裔多样，办公室光线一致。咨询和理赔照片让手部、对话和场所比身份更重要。任何图像都不包含可读文字、标识、承运商材料、执照卡片、品牌产品或可识别的真实人物。使用 object-fit cover 配合指定的焦点位置和描述性 alt 文本；绝不将文字放在面部上方。开门 favicon、图标、进度图形和清单标记均以代码绘制。不要用库存照片、首字母头像或额外人像替代。

## 页面与区块
### 独立代理机构首页与保障路径（`index.html`）
1. **内容模型与默认示例数据** — 以下所有文案均按 [BRAND] = Morrow & Vale Insurance、[BRAND_SLUG] = morrow-vale、[AUDIENCE] = 房主、驾驶者和成长中的家庭、[SERVICE_AREA] = Alder Grove 及西侧社区、[PROMISE] = Clear choices. A real person in your corner. 编写。将所有值放入 src/content.ts，并在变量变化时重写机构专属文案。默认运营信息：虚构地址 418 Alder Grove Avenue, Suite 6；电话 (503) 555-0148；邮箱 hello@ + 不含连字符的 brandSlug + .example；办公时间周一至周五 8:30 AM–6:00 PM，周六 9:00 AM–1:00 PM。代理人：Mara Ellison，住宅与财产指导，将住宅保额上限和免赔额转化为适合真实预算的并排选项，英语和西班牙语；Theo Bennett，汽车与出行指导，帮助日常驾驶者比较使用情况、里程、免赔额和可选保障，不使用术语，英语和韩语；Elena Ruiz，人寿与家庭规划，在家庭变化的季节里让保险期限和保障目标更容易讨论，英语和西班牙语。所有人物、肖像、传记、评价、地址和运营信息均为虚构示例内容。评价：Nina and Paul R.，首次购房者，Mara drew two deductibles on a notepad and showed how each would affect our monthly budget. We finally understood the choice instead of just picking the lower price.；Celeste M.，日常通勤者，After a fender bender, Theo gave me a checklist and helped me find the claims number in my policy. I knew what to do next.；Jordan and Sam T.，新手父母，We came in to talk about life insurance and left with questions that fit our new childcare budget. No pressure, just a clear conversation. 将这些标注为示意性演示评价，绝不要标为已验证的客户证言。保持每个命名值在所有页面间同步。
   布局：不适用
   动效：不适用
2. **共享工具条、页眉和移动导航** — 工具条文本：Independent guidance for [AUDIENCE] · [SERVICE_AREA]。辅助文本：Mon–Fri 8:30–6 · Sat 9–1。在文字标识 [BRAND] 旁使用原创代码绘制的开门线条图案，并配小字说明 INDEPENDENT INSURANCE AGENCY。桌面导航：Coverage → ./index.html#coverage，How it works → ./index.html#process，Agents → ./index.html#agents，Claims help → ./claims.html。主 CTA：Start a quote → ./quote.html。用 aria-current='page' 标记当前页面。移动端使用 Menu 按钮，展开面板包含相同链接和 CTA；导航后及按 Escape 时关闭。在 quote.html 和 claims.html 上复用此页眉和共享页脚。
   布局：34px 的 Forest 工具条配 Paper 文字，位于粘性 78px 页眉上方。页眉使用 96% 不透明度的 Parchment、轻微模糊和 Line 底边框。文字标识居左，导航居中，CTA 居右，位于 1280px 容器内。低于 940px 时隐藏工具条辅助文本和桌面导航，然后显示文字标识、紧凑 Quote 按钮和 Menu。
   动效：使用指定的移动面板过渡；不要对粘性定位做动画。
3. **摄影主视觉与报价快速开始** — 眉题：INDEPENDENT · LOCAL · ON YOUR SIDE。H1：[PROMISE]。导语：[BRAND] helps [AUDIENCE] across [SERVICE_AREA] understand home, auto, and life coverage before making a decision. Bring your questions; leave with a clearer next step. 主 CTA：Start my quote → ./quote.html。次 CTA：Meet the agents → ./index.html#agents。添加三条紧凑事实：Home, auto, and life · Independent guidance · No-pressure conversations。使用 hero.webp，alt 为 'A welcoming green house and garden in soft morning light'，object-position 为 center 52%。在图像左下角叠加一张 Paper 快速开始卡片，标题为 What would you like to protect?，并提供三个全宽或等宽列选项：Home — House, condo, or rental → ./quote.html?type=home；Auto — Car and daily driving → ./quote.html?type=auto；Life — Family and future plans → ./quote.html?type=life。每个选项使用其 Lucide 图标和可见箭头。
   布局：在页眉后的首个桌面屏幕内，使用 5/7 网格，文案居左，570px 高的照片居右。主视觉顶部内边距 48px，底部内边距 88px。图像横跨其列，28px 圆角，右上角后方有一个小的 Clay 偏移块。390px 宽的快速开始卡片与图像左下角重叠 36px。移动端顺序为眉题、H1、图像、导语、CTA、事实，然后是不重叠的快速开始卡片；图像保持 230px 高，两个 CTA 均全宽。
   动效：使用主视觉入场序列。快速开始卡片在图像稳定后淡入；无自动播放轮播或循环装饰。
4. **三条保障路径** — 区块 id='coverage'。眉题：COVERAGE, IN PLAIN LANGUAGE。H2：Start with what you want to protect. 引言：You do not need to know the terminology before we talk. Choose a starting point and we will organize the questions. 住宅卡片：HOME AND RENTERS / A place to come back to / Explore options for the structure, belongings, and personal liability, whether you own a house, have a condo, or rent. 包含三个短标签：Dwelling and belongings、Personal liability、Loss of use。CTA Start a home quote → ./quote.html?type=home。汽车卡片：AUTO / For the everyday miles / Review liability, collision, comprehensive, and optional protection around how you actually drive. 标签：Liability、Collision and comprehensive、Roadside options。CTA Start an auto quote → ./quote.html?type=auto。人寿卡片：TERM LIFE / A little more certainty for your people / Talk through income support, mortgage goals, childcare, and final expenses without a one-size-fits-all recommendation. 标签：Income goals、Term length、Beneficiary planning。CTA Start a life quote → ./quote.html?type=life。小注：Coverage availability and definitions vary by policy and carrier. These summaries are general information, not a promise of coverage.
   布局：Parchment 区块，5/7 标题网格，后接三张等宽卡片。每张卡片有一个 48px Sage 图标块、标题、28px Fraunces 副标题、描述、分隔标签列表和底部对齐的文字 CTA。使用 House、Car 和 HeartPulse Lucide 图标。移动端堆叠卡片，不使用水平卡片轮播。
   动效：使用标准交错显示卡片，并使用克制的悬停上浮。悬停时不隐藏卡片内容。
5. **独立指导如何运作** — 区块 id='process'。眉题：HOW IT WORKS。H2：A conversation before a recommendation. 引言：An independent agent helps you frame the decision; the carrier still determines eligibility, pricing, and coverage. 使用 advisor.webp，alt 为 'A fictional advisor having a relaxed conversation with clients at a wooden table'，object-position 为 center 45%。三个编号步骤：01 Tell us what matters — Share the home, drive, or family goal on your mind. The quote guide takes about two minutes with sample details.；02 Compare the trade-offs — In a real agency conversation, your agent explains limits, deductibles, exclusions, and questions to ask each carrier.；03 Choose your next step — Take your summary into a conversation, ask for clarification, or take time to think. There is no pressure to decide on the spot. CTA Build my quote summary → ./quote.html。图像下方说明：Questions welcome. Fine print explained.
   布局：Paper 区块，6/6 网格。左侧放置 4:3 顾问照片，右侧放置三个堆叠步骤，每个步骤有一个大的 Clay 数字、24px Fraunces 标题、正文和连接竖线。CTA 位于步骤下方。移动端图像在引言之后、步骤之前。
   动效：仅使用标准图像和步骤显示；无固定或滚动擦除序列。
6. **虚构代理人档案** — 区块 id='agents'。眉题：PEOPLE YOU CAN TALK TO。H2：Different questions. A familiar person. 引言：Three fictional profile placeholders show how an agency can make expertise and communication style visible. 使用 agent-mara.webp、agent-theo.webp 和 agent-elena.webp 渲染 Mara、Theo 和 Elena，采用 3:4 裁剪，object-position 为 center 26%。每张卡片包含姓名、专长、传记和语言。每张卡片添加一个按钮：Ask Mara / Ask Theo / Ask Elena → ./quote.html?agent=mara、theo 或 elena。报价页面读取可选 agent，并在摘要中包含该偏好。说明：Demo profiles with fictional portraits; replace them with your agency's own staff information and verified credentials.
   布局：Parchment 区块，三张等宽卡片。肖像顶部圆角 22px；文字位于下方而非覆盖面部。桌面端按行对齐专长、描述、语言行和 CTA，移动端堆叠。按钮使用 Paper 配 Forest 边框，而非另一种厚重填充样式。
   动效：每张卡片使用一次轻柔的肖像显示和简短文字交错。无灰度滤镜或仅悬停显示的传记。
7. **示例客户故事** — 眉题：SAMPLE CLIENT STORIES。H2：Good guidance sounds like this。引言：默认情况下，请完全按照内容模型中的三条评价来使用，并配以虚构的姓名和背景。不要添加星级评分、评价数量、平台徽标或认证徽章。小字可见提示：Illustrative reviews written for this demo; replace them with verified customer feedback before publishing an agency site。
   布局：Sage 区块，标题位于 4 列栏中，三条评价位于 8 列堆叠列表中。每条评价使用一个大型装饰性 Fraunces 引号、20px/1.55 文本，以及由 Clay 分隔线隔开的紧凑姓名和背景行。在移动端，标题和评价堆叠排列。不要使用轮播。
   动效：评价行以标准错峰效果显示一次；不要自动旋转或动画引号。
8. **理赔预览和共享页脚** — 理赔眉题：WHEN SOMETHING GOES WRONG。H2：Start with a calm checklist。文案：Get safe, document what happened, find your policy, and contact the carrier handling the claim. Our general guide helps you organize the next few steps without replacing your carrier's instructions。四个简短步骤：01 Get to safety；02 Document the scene；03 Find your policy；04 Report and ask questions。CTA Open the claims guide → ./claims.html。紧急提示：If anyone is in immediate danger, contact local emergency services first. This demo does not provide live claims support。页脚重复 [BRAND]、[PROMISE]、指向全部三个页面的链接、电话 (503) 555-0148、派生的保留 .example 电子邮件、虚构地址和办公时间。底部提示：General information only. No coverage is offered or bound by this static demonstration, and quote summaries are not transmitted。© [BRAND] 加上可选的 [CREDIT] 链接。不要添加年份、承保公司徽标或社交图标。
   布局：理赔预览是一个 Forest 面板，Paper 文本采用 5/7 网格，右侧有四个紧凑的编号步骤，以及一个 Clay CTA 配 Forest 文本。页脚随后采用 5/3/4 网格，在更深的 Forest 表面上分别放置声明、导航和联系方式。在移动端堆叠排列，使用大点击目标，且文本不重叠。
   动效：仅使用简单的区块显示和链接颜色过渡。

### 分支式三步报价摘要（`quote.html`）
1. **报价介绍和隐私说明** — 使用 index.html 中的共享页眉和页脚。眉题：YOUR QUOTE STARTER · ABOUT TWO MINUTES。H1：A few details. One clear summary。引言：Prepare for a conversation with [BRAND] by choosing a coverage path and answering a short set of questions. Use sample information only. This browser-only demo does not calculate a premium, check eligibility, bind coverage, or send a request。可选的 type 查询值 home、auto 和 life 会预选该路径；无效或缺失的值默认为 home。可选的 agent 查询值 mara、theo 和 elena 会预选首选代理人；否则使用 No preference。显示一个带 ShieldCheck 图标的 Sage 隐私条：Your answers stay in this page and disappear when you leave or reset. Nothing is stored or transmitted。
   布局：紧凑的 Parchment 介绍采用 7/5 网格，文本在左，Paper 提示卡在右。提示卡内容为 NOT A BINDING QUOTE / A preparation tool for a real conversation。保持介绍足够紧凑，以便在首个桌面屏幕内显示进度指示器。在移动端堆叠排列。
   动效：标题和提示以标准入场效果显示一次。
2. **三步引导式报价工作区** — H2：Build your quote summary。进度标签为 1 Coverage、2 Details、3 Review，并带有可见的文本当前步骤公告，以及 33%、66% 或 100% 的进度填充。第 1 步字段：承保类型单选卡片 Home、Auto、Life，根据 type 预选；ZIP 或邮政编码文本，辅助说明 Use a fictional code for this demo；当前承保单选 Yes、No、Not sure；首选代理人选择 No preference、Mara Ellison、Theo Bennett、Elena Ruiz，根据 agent 预选。第 2 步根据路径变化。Home 字段：房产类型 Single-family home、Condo、Rental unit；关系 Own、Rent；建造年份范围 Before 1970、1970–1999、2000–2014、2015 or newer；优先事项 Lower monthly cost、Balanced cost and protection、Broader protection、Not sure。Auto 字段：车辆所有权 Own outright、Financed、Leased；主要用途 Commuting、Personal errands、Mixed personal and business；年行驶里程 Under 5,000、5,000–12,000、12,001–20,000、Over 20,000；持照驾驶员 1、2、3 or more。Life 字段：承保目标 Income support、Mortgage or housing、Childcare or education、Final expenses、Not sure；承保金额范围 $100,000–$250,000、$250,001–$500,000、$500,001–$1,000,000、Over $1,000,000、Not sure；年龄范围 18–29、30–39、40–49、50–59、60 or older；首选期限 10 years、20 years、30 years、Not sure。第 2 步还会询问当前优先事项，Auto 和 Life 使用相同的四个优先事项选项。第 3 步显示每个答案的分组审查行，带有返回相关步骤的 Edit 按钮、首选下一步单选 Phone conversation 或 Email conversation，以及最佳时间单选 Morning、Afternoon、Evening。不包含姓名、电子邮件、街道地址、出生日期、健康详情、车辆识别号码或支付字段。除首选代理人外，所有显示的字段均为必填，并且仅默认使用有效查询明确提供的值或上述列出的值。继续按钮验证可见字段，显示内联文本错误和错误摘要，聚焦第一个无效控件，并在返回时保留之前的答案。最终按钮：Create my summary。表单从不执行网络请求。
   布局：使用 8/4 网格，Paper 表单卡在左，粘性 reassurance 栏在右。表单桌面端内边距 32px，移动端 20px，标签可见，控件 50px，大单选目标，辅助文本 16px。右栏包含所选代理人、What this tool does、What it does not do、电话、保留电子邮件，以及重复的无提交说明。进度位于两列上方。在移动端，右栏变为表单下方的紧凑展开项，而不是将表单向下推。
   动效：使用指定的报价步骤过渡、焦点管理、进度填充和非抖动错误淡入。减少动效时立即切换步骤。
3. **本地摘要和诚实的完成状态** — 在第 3 步有效完成后，就地替换表单，显示眉题 SUMMARY READY · NOTHING SENT 和 H2 Your conversation starter is ready。显示格式化摘要，包含 [BRAND]、承保路径、当前承保、所有路径特定答案、首选代理人、首选下一步和最佳时间。不要显示价格、费率、资格标签、节省金额、申请编号或成功提交消息。显示：This summary is not an insurance quote and does not bind coverage. Your answers were not stored or sent. Contact [BRAND] directly to discuss real options。操作：Copy summary 使用纯文本版本和本地回退；Print summary 使用干净的打印样式表；Edit answers 返回第 3 步；Start over 在确认后清除所有答案和查询派生的选择。复制反馈显示 Summary copied，并通过 aria-live 公告。将焦点移动到完成标题。打印输出仅包含摘要、代理机构联系方式和披露信息，不包含导航或装饰性图像。
   布局：完成状态使用相同的工作区宽度，带有 Sage 标题带、Paper 摘要行，以及一个 2×2 操作网格，在低于 520px 时变为一列。将披露信息放在操作旁边，而不是底部的小字中。
   动效：用 220ms 不透明度过渡替换表单，并显示复制反馈，不使用彩带或成功戏剧效果。

### 理赔帮助与文件清单（`claims.html`）
1. **理赔指南主视觉区** — 使用 index.html 中的共享页眉和页脚。眉题：CLAIMS HELP · GENERAL GUIDANCE。H1：A calm checklist for a stressful moment。引言：Start with safety, then organize what your carrier may need. [BRAND] can help you understand the process, but the carrier handling your policy provides claim instructions and makes coverage decisions。主 CTA：Start with the first steps → ./claims.html#first-steps。次 CTA：Call the sample agency → tel:+15035550148。使用 claims.webp，alt 为 'Fictional adult hands organizing blank papers and notes at a kitchen table'，object-position 为 center 48%。紧急提示：If anyone is hurt or in danger, contact local emergency services before worrying about documents。
   布局：使用 5/7 网格，文案在左，右侧为 430px 高的照片，尺度与首页主视觉区相近，但顶部内边距为 48px。将紧急提示放在两栏下方，横跨全宽，使用 Clay 色调条带并配 TriangleAlert 图标。移动端将照片放在 H1 之后、正文之前。
   动效：标准标题和图片入场；无视差。
2. **即时首要步骤** — 区块 id='first-steps'。眉题：THE FIRST FEW STEPS。H2：Take one thing at a time。四张编号卡片：01 Make sure everyone is safe — Move to a safe place if possible and contact emergency services when needed.；02 Prevent further damage only if safe — Follow emergency guidance and your carrier's instructions. Do not take risks to protect property.；03 Document what happened — When safe, take photos, write down what you remember, and keep relevant names and receipts. Avoid guessing or admitting fault.；04 Find the policy and report — Locate the declarations page and claims contact, notify the carrier promptly, and ask what they need next。小注：Requirements differ by policy, carrier, and location. This checklist is general information, not legal or coverage advice。
   布局：Parchment 区块，采用 4/8 标题网格，四张等宽卡片排成 2×2 网格。每张卡片使用大号 Clay 数字、23px Fraunces 标题和简洁正文。移动端使用一条垂直时间线，数字相同并带连接线。
   动效：卡片以 60ms 错峰显现；无动画紧急效果。
3. **按保障类型划分的文件标签页** — 眉题：A PLACE TO START。H2：Gather what applies to you。引言：Use the tabs to view a general document checklist. Your carrier may ask for more, fewer, or different items。Home 标签页：policy declarations page；photos or video of damage；a simple damaged-item inventory；repair or cleanup estimates；receipts for emergency work or temporary expenses。Auto 标签页：driver and vehicle information；other party and witness details when available；photos of vehicles and the scene；police report details if applicable；repair estimates and towing receipts。Life 标签页：policy number and carrier contact；certified death certificate；claimant identification；carrier claim forms；beneficiary information requested by the carrier。每个标签页均包含：Keep originals unless the carrier asks for them, and make copies for your records。使用真实的标签页语义，支持方向键导航、aria-selected 和带标签的 tabpanel；默认选中 Home。
   布局：Paper 区块，顶部三个大标签页，下方为 Sage 清单面板。每个清单带 ClipboardList 图标和五行，行内用代码绘制的空复选框方块仅为视觉元素，并非伪造的已保存清单。600px 以下标签页堆叠为全宽按钮。
   动效：使用指定的 180ms 标签页淡入淡出，并将焦点保持在选中标签页上。减少动效时立即切换。
4. **一般理赔流程与常见问题** — 眉题：WHAT USUALLY COMES NEXT。H2：A process you can ask about。四个一般阶段：Report — Share the basic incident details with the carrier.；Review — The carrier assigns its process and requests information.；Assessment — Damage, documentation, and policy terms are evaluated as applicable.；Resolution — The carrier explains its decision and any next steps。注：Timelines and requirements vary; do not show estimated days or promise an outcome。FAQ 手风琴含五项：Should I file a claim? — If you are unsure, contact the carrier or your agent to discuss the situation. Ask how a formal claim is opened before assuming a conversation creates one.；Will filing a claim raise my premium? — It depends on the policy, carrier, location, claim, and underwriting rules. No one should promise an answer before the carrier reviews it.；What if I do not have every document? — Start with what you have and ask the carrier for a specific missing-item list and safe submission method.；Can I choose my own repair shop? — Rules and network options vary. Ask the carrier how estimates, shop choice, and guarantees work under your policy and local requirements.；What can an independent agent do during a claim? — An agent may help explain the process and communication steps, but the carrier manages the claim and determines coverage。
   布局：使用 5/7 网格，左侧为四阶段垂直流程，右侧为五项手风琴。阶段之间用 Line 分隔线隔开，并使用小号带编号的 Sage 圆圈。手风琴行有可见的加/减图标，按钮点击区域至少 52px。移动端堆叠。
   动效：使用标准显现和指定的手风琴高度过渡；绝不能让折叠文本对屏幕阅读器可见。
5. **理赔联系条带** — H2：Bring your questions to a real conversation。文案：For this fictional agency demo, use the sample contact details to see the intended layout. A production agency must replace them with its own monitored phone, secure document instructions, and after-hours carrier information。CTA Call (503) 555-0148 → tel:+15035550148。次 CTA Prepare a quote summary → ./quote.html。注：Do not upload claim documents to this static demo. Nothing here provides emergency response or live claim status。
   布局：全宽 Forest 条带，Paper 文字，联系 CTA 为 Sage 底色配 Forest 文字，另有次级文字链接。使用 8/4 网格，移动端按钮全宽堆叠。
   动效：仅链接颜色过渡。

## 资源

- 图片：将 https://media.vibefather.ai/assets/dfa770b4-f72e-4edb-ac6d-fc2670098136/hero.webp 下载到 public/images/hero.webp；alt 为 'A welcoming green house and garden in soft morning light'；用作首页大图 hero 照片，object-position 为 center 52%。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。在 ASSETS.md 中记录路径、源 URL、署名和许可证。
- 图片：将 https://media.vibefather.ai/assets/dfa770b4-f72e-4edb-ac6d-fc2670098136/advisor.webp 下载到 public/images/advisor.webp；alt 为 'A fictional advisor having a relaxed conversation with clients at a wooden table'；用于首页 How it works 区块，object-position 为 center 45%。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。在 ASSETS.md 中记录路径、源 URL、署名和许可证。
- 图片：将 https://media.vibefather.ai/assets/dfa770b4-f72e-4edb-ac6d-fc2670098136/agent-mara.webp 下载到 public/images/agent-mara.webp；alt 为 'Fictional agent Mara Ellison seated at a sunlit office table'；用于 Mara Ellison 的个人资料，object-position 为 center 26%。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。在 ASSETS.md 中记录路径、源 URL、署名和许可证。
- 图片：将 https://media.vibefather.ai/assets/dfa770b4-f72e-4edb-ac6d-fc2670098136/agent-theo.webp 下载到 public/images/agent-theo.webp；alt 为 'Fictional agent Theo Bennett standing beside a bright office window'；用于 Theo Bennett 的个人资料，object-position 为 center 26%。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。在 ASSETS.md 中记录路径、源 URL、署名和许可证。
- 图片：将 https://media.vibefather.ai/assets/dfa770b4-f72e-4edb-ac6d-fc2670098136/agent-elena.webp 下载到 public/images/agent-elena.webp；alt 为 'Fictional agent Elena Ruiz seated in a warm plant-filled office'；用于 Elena Ruiz 的个人资料，object-position 为 center 26%。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。在 ASSETS.md 中记录路径、源 URL、署名和许可证。
- 图片：将 https://media.vibefather.ai/assets/dfa770b4-f72e-4edb-ac6d-fc2670098136/claims.webp 下载到 public/images/claims.webp；alt 为 'Fictional adult hands organizing blank papers and notes at a kitchen table'；用作 claims 页面 hero，object-position 为 center 48%。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。在 ASSETS.md 中记录路径、源 URL、署名和许可证。
- 图标：安装 lucide-react（ISC），仅使用 House、Car、HeartPulse、ArrowRight、ArrowLeft、Menu、X、ShieldCheck、Phone、Mail、MapPin、Clock3、ClipboardList、Check、Copy、Printer、RotateCcw、ChevronDown、Plus、Minus、CircleAlert 和 TriangleAlert。将原创的开着门的 favicon 和 wordmark 图案绘制为简单的本地 SVG 描边；不要使用运营商、评论平台、社交媒体或其他品牌图标。在 ASSETS.md 中记录图标包和 ISC 许可证。
- 字体：安装 @fontsource/fraunces（OFL-1.1），并通过 src/fonts.ts 中的包导入自托管 600 和 700 的 woff2 文件。仅用于展示文本。在 ASSETS.md 中记录包、字体家族、来自包元数据的作者署名和 OFL 许可证；绝不加载 Google Fonts 或其他字体 CDN。
- 字体：安装 @fontsource/public-sans（OFL-1.1），并通过 src/fonts.ts 中的包导入自托管 400、500、600 和 700 的 woff2 文件。用于正文和界面文本。在 ASSETS.md 中记录包、字体家族、来自包元数据的作者署名和 OFL 许可证；绝不加载 Google Fonts 或其他字体 CDN。

## 不要做
- 不要使用真实的保险公司、承保方、代理机构或评论平台名称、标识、产品名称、口号、吉祥物、品牌配色、执照号码或承保方对比。[BRAND] 及所有相关细节必须保持虚构。
- 不要复制任何网站的代码、原文案、摄影作品、标志性插画、独特图标体系或受限组件源码。仅使用指定的宽松许可包和原创实现。
- 不要使用真实人物的肖像、身份、证言或资质。保留提供的六张虚构照片，并将代理人资料和评论标注为演示内容；不要用图库照片或姓名首字母替换头像。
- 不要展示保费估算、资格决定、节省金额、保证承保、保证保障范围、理赔结果、虚假评分、评论数量、认证徽章、实时指示器或申请编号。
- 报价摘要不是保险报价，也不构成承保约束。绝不要显示“request sent”、“application submitted”或同等的成功声明；完成时必须明确说明未存储或发送任何内容。
- 不要后端、服务器代码、API 路由、数据库、身份验证、分析、第三方 API、表单提交、理赔上传或外部跟踪。报价答案仅保存在内存中，不要求敏感个人详细信息，且绝不将其持久化到 localStorage。
- 不要添加真实联系方式或功能性提交端点。保留预留的 .example 邮箱和虚构的 555 电话号码；生产环境连接说明仅作为解释性文本保留。
- 严格使用 Vite 5、React 18、TypeScript、Tailwind CSS 3.4、Motion、Lucide 以及指定的两个 Fontsource 包。不要添加组件库、图标包、受限 UI 源码或未经允许许可的依赖。
- 所有字体、图像、图标、脚本和样式必须为本地资源。构建站点中不得包含 CDN 链接、Google Fonts、fonts.gstatic.com、热链接图像、占位图服务、图库照片网站或外部托管资源。
- 保留提供的六个精确图像路径和替代文本，在构建前下载它们，并在 ASSETS.md 中列出每个图像、图标包和字体包及其来源和许可证。不要额外照片或生成人物。
- 将所有可见文案、标签、验证、示例数据、替代文本和打印输出保持为美式英语，并集中在 src/content.ts 中。当变量变化时，重写依赖品牌和受众的内容；不要在逻辑中硬编码 Morrow & Vale 或其标识。
- 使用真实的 ./index.html、./quote.html 和 ./claims.html 链接，绝不要使用裸目录或仅路由部署。不带查询参数的 quote.html 必须默认到 Home 并保持完全可用；无效的 type 或 agent 值不得产生空状态。
- 不要发布日期、版权年份、倒计时、稀缺性消息、SEO 元数据、Open Graph 标签、JSON-LD、站点地图或关键词堆砌的标题。一个变量感知的纯标题和本地 favicon 就足够了。
- 不要将重要文案隐藏在悬停、动效、无键盘支持的标签页或动画库后面。提供标签、可见焦点、错误摘要、aria-live 反馈、语义化标签页和手风琴，以及完整的键盘操作。
- 尊重 prefers-reduced-motion，避免滚动劫持、视差、自动播放轮播、闪烁紧急图形和循环装饰。如果 JavaScript 动画观察器失败，内容必须保持可见。
- 生产构建必须是 dist/ 中的压缩静态文件，使用相对路径，无源映射，不复制 src/，总大小低于 20 MB。在 1440×900 和 390×844 下验证 index.html、quote.html 和 claims.html，控制台零错误且无水平溢出。

---
— Prompt by VibeFather · https://vibefather.ai/t/insurance-agency-quote-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
