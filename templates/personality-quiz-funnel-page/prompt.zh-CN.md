> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 性格测试漏斗页

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个精致的单页人格测验漏斗，核心是一份为 [AUDIENCE] 设计的原创 [QUIZ_TOPIC] 测验。体验流程从编辑风格的落地页开始，进入恰好八个视觉化问题，一段简短的计算过渡，一个个性化原型结果，以及一个通过邮箱解锁的 [REPORT_NAME]，在屏幕上展示。所有答案、计分和表单行为都保持在浏览器标签页本地。

- 受众：主要受众是 [AUDIENCE]：喜欢简短、低压力反思练习并希望获得一个有用下一步的人。模板所有者是创作者、教练、营销人员或小型工作室，用这个测验来介绍一种观点并提供更深度的资源。
- 目标：让访客开始测验、完成全部八个问题、理解为什么他们的结果适合他们，并解锁完整的 [REPORT_NAME]。让每个控件都可正常使用，并让静态邮箱演示诚实地说明不会发送或存储数据。
- 语气：温暖、敏锐、有活力且具体。使用鼓励性的平实语言，而不是模糊的肯定。将结果视为灵活的创意模式，绝不是固定身份、诊断、排名或科学测量。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：React 18（MIT）、Vite 5（MIT）、TypeScript（Apache-2.0）、Tailwind CSS 3.4（MIT）、lucide-react（ISC）、@fontsource-variable/fraunces（OFL-1.1）、@fontsource-variable/dm-sans（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 使用 Vite 5 搭配 React 18 和 TypeScript。在 vite.config.ts 中设置 base: './'，将 build.sourcemap 设为 false，并仅将生产站点输出到 dist/。
  - 使用下方定义的颜色、字体族、间距、圆角、阴影和关键帧配置 Tailwind CSS 3.4。将自定义关键帧、焦点样式、打印样式和减少动态效果覆盖放入 src/index.css。
  - 将所有可编辑的品牌文案、测验主题文案、八个问题、答案选项、四种原型、常见问题解答和报告部分保存在 src/content.ts 中，并使用 TypeScript 接口。组件必须从该文件读取内容，而不是嵌入默认特定的字符串。
  - 当变量值变化时，重写每个主题特定的标题、问题、答案、原型名称、描述、推荐、常见问题解答和报告项，以适配新的 [QUIZ_TOPIC]、[AUDIENCE] 和 [REPORT_NAME]，同时保留布局和交互模型。
  - 使用一个 React 状态机，包含 landing、quiz、calculating 和 result 状态。不要添加路由器。仅在内存中保留当前问题、八个答案、解锁状态和电子邮件输入；不要使用 localStorage、sessionStorage、cookies 或 URL 查询参数。
  - 使用 lucide-react 作为界面图标，使用原始内联 SVG 或 CSS 作为装饰性图形。不要添加动画库；使用 CSS 过渡、关键帧和一个小型 IntersectionObserver 实现落地页部分的显示。
  - 从 Fontsource 包本地导入 Fraunces Variable 和 DM Sans Variable。在项目根目录创建 ASSETS.md，列出两个字体包、lucide-react、它们的来源和许可证；声明所有插图均为原创代码绘制的 SVG/CSS，且不使用栅格图像。
  - 支持键盘操作、可见焦点、语义化按钮和标题、aria-live 进度和结果播报、44px 最小触摸目标以及减少动态效果模式。验证 1440×900 和 390×844 下无水平溢出或控制台错误。

## 变量
- [BRAND] — 品牌名称（默认：“Moss & Meter”）。一个虚构的工作室、创作者或出版物名称，用于字标、页脚和报告中。
- [QUIZ_TOPIC] — 测验主题（默认：“Creative Work Rhythm”）。测验的反思性主题；所有问题和结果都必须围绕它展开。
- [AUDIENCE] — 受众（默认：“independent creatives”）。一个简洁的小写受众描述，用于介绍和结果文案中。
- [REPORT_NAME] — 完整报告名称（默认：“Creative Rhythm Field Guide”）。在电子邮件表单之后解锁的个性化资源。
- [PRIMARY_CTA] — 主要测验 CTA（默认：“Find my rhythm”）。用于首屏和结尾测验开始按钮的简短操作标签。
- [CREDIT] — 在页脚保留一个小的“Template by VibeFather”链接，指向 https://vibefather.ai/t/personality-quiz-funnel-page（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 纸张色（Paper）`#F5F0E6` — 主页面背景和安静的负空间
- 墨色（Ink）`#20231F` — 标题、正文、边框和深色面板
- 粉笔白（Chalk）`#FFFDF7` — 卡片、输入框和墨色面板上的文字
- 珊瑚色（Coral）`#F28C78` — 火花点缀、选中状态和装饰圆形
- 青柠色（Lime）`#CBE47A` — 主按钮、进度填充和锚点点缀
- 淡紫色（Lilac）`#C8B9E8` — 编织者卡片和报告预览点缀
- 蓝绿色（Teal）`#70B8A7` — 探路者点缀和次要插图
- 柔和墨色（Muted Ink）`#62665E` — 次要文案和元数据

### 字体排印（Typography）
- 展示标题和结果原型名称：Fraunces Variable，通过 @fontsource-variable/fraunces 自托管；启用光学尺寸（OFL），字重 600/700
- 正文、导航、按钮、表单标签和小号元数据：DM Sans Variable，通过 @fontsource-variable/dm-sans 自托管（OFL），字重 400/500/600/700

### 布局与动效（Layout & motion）
- 间距：使用 8px 基础网格。落地页区块在桌面端有 104px、移动端有 72px 的垂直内边距。内容最大宽度为 1240px，桌面端 40px、移动端 20px 的边距。主视觉文案最大宽度为 610px。卡片内边距桌面端为 28–36px、移动端为 20–24px；按钮间距为 12px。
- 圆角：主要卡片和测验舞台使用 24px，答案卡片和输入框使用 16px，按钮和小标签使用 999px。主要卡片有 2px 墨色边框和 6px 6px 0 #20231F 的偏移阴影；悬停抬升时该阴影减小为 3px 3px 0。
- 动效：落地页区块以 opacity 0 到 1、translateY(18px) 到 0 在 500ms 内使用 ease-out 显现，在网格内以 70ms 错开；当 IntersectionObserver 不可用时绝不隐藏内容。
- 动效：主按钮和答案卡片在悬停时向上平移 2px，按下时恢复，时长 160ms。选中的答案填充青柠色并在推进前显示对勾图标。
- 动效：开始测验时，落地页视图在 280ms 内交叉淡出并滑出，测验视图滑入。每个答案在 240ms 的选中状态后推进；问题内容从左侧 8px 退出、从右侧 8px 进入。
- 动效：进度条和活动分段在 240ms 内动画宽度或颜色。计算间歇持续 1100ms 并循环三条状态短语；结果内容随后以 420ms 淡入和 14px 上升呈现。
- 动效：装饰性主视觉形状在六秒内浮动不超过 8px，轨道标签在 24 秒内缓慢旋转；在 prefers-reduced-motion 下禁用两者。
- 动效：在 prefers-reduced-motion 下，移除显现、浮动、旋转、平滑滚动和滑动变换；使用即时状态变化或 80ms 以内的仅透明度过渡。
- 图像：不使用照片、AI 生成肖像、外部插图或位图占位符。主视觉的视觉锚点是一个丰富、分层的测验 UI 模型，配有原创 CSS/SVG 几何图形、答案卡片、进度、纸张网格背景和偏移色块。为每个原型提供一个可复用的原创 SVG 徽章：Spark 的放射状线条、Anchor 的精确模块化网格、Weaver 的互锁环，以及 Pathfinder 的蜿蜒轮廓路径。保持所有几何图形抽象且通用。

## 页面与区块
### 落地页、测验、结果与报告漏斗（`index.html`）
1. **共享页头与应用外壳** — 在落地页状态，显示 [BRAND] 字标配一个简单的四点 CSS 标记，居中的链接分别标注为 The patterns、How it works 和 Questions，点击后滚动到对应区块，右侧按钮标注为 Take the quiz。添加一个小徽章，内容为 8 questions · 2 minutes。在移动端，仅保留字标和 Take the quiz 按钮。在测验和计算状态期间，将居中导航替换为一个 Exit quiz 文字按钮，点击返回落地页状态。在结果状态，显示字标和一个 Retake quiz 按钮。
   布局：粘性顶部页头，高 76px，Paper 背景 94% 不透明度配背景模糊和 1px Ink/10 底边框。内部行使用 1240px 容器。所有视图切换调用 window.scrollTo({ top: 0 })，在减少动态模式下不使用平滑滚动。渲染一个 main 地标和一个聚焦时出现的跳转链接。
   动效：页头在各状态间保持稳定；控件使用共享的 160ms 触感悬停和按压处理。
2. **落地页主视觉** — 对于默认值，使用眉题 A TWO-MINUTE RESET FOR YOUR CREATIVE PRACTICE，H1 为 Your best work has a rhythm. Find yours.，正文为 Discover whether you lead with spark, structure, connection, or exploration—and leave with one small experiment for the week ahead.。主按钮为 [PRIMARY_CTA] 配 ArrowRight 图标；次要文字按钮为 Meet the four patterns，点击滚动到模式网格。在操作按钮下方，以三个紧凑的清单项显示 8 visual questions、No wrong answers 和 One useful next step。为其他变量值重写眉题、标题、正文和清单。在右侧，组合一个逼真的预览卡片，标签为 QUESTION 03 / 08，问题为 When a new idea arrives, what do you do first?，四个微型答案磁贴，一个八段进度条其中三段激活，以及一个小型 Next idea 徽章。周围环绕一个圆形 NO WRONG ANSWERS 印章、抽象纸网格形状和三张错位色卡。预览答案为静态 div，不是死按钮；预览内唯一的交互控件是一个 Start 按钮，触发 [PRIMARY_CTA]。
   布局：在 1440×900 下，主视觉填满可用的首屏，采用两栏网格，52% 文案和 48% 图形，垂直居中，上下内边距最小 56px。H1 为 Fraunces 72px/0.98，600 字重，在 rhythm 下方有一条 Coral 手绘 SVG 下划线。正文为 19px/1.65，最大宽度 530px。右侧图形至少 520px 宽、590px 高，主测验卡片旋转 2 度，第二张 Lilac 卡片旋转 -5 度置于其后。在移动端，文案堆叠在 390px 高的缩放预览上方，H1 使用 clamp(44px, 13vw, 58px)，并保持主 CTA 可见且无水平裁切。
   动效：主视觉文案先进入，随后预览卡片以 100ms 延迟进入。仅装饰形状浮动；测验卡片本身保持可读和稳定。
3. **四张模式卡片** — 标题：Four ways ideas become finished work. 引言：Most of us use every pattern. This quiz looks for the one you reach for first. 按此顺序显示四张卡片：The Spark — Idea igniter — You begin by making possibilities visible. Your best next step is a small experiment, not a perfect plan. The Anchor — Thoughtful finisher — You turn loose ideas into dependable progress. Your best next step is protecting enough structure without overplanning. The Weaver — Creative connector — You find momentum through people and shared context. Your best next step is making collaboration intentional. The Pathfinder — Curious explorer — You notice possibilities beyond the obvious route. Your best next step is turning exploration into one concrete choice. 为每张卡片添加页脚行：A pattern, not a box. 对于替代值，重命名四个原型并重写这些描述以适配新主题，同时保留它们各自在实验、结构、连接和探索方面的角色。
   布局：区块 id 为 patterns。标题居左，引言居右，形成两栏标题行。下方，桌面端一行四张等宽卡片，平板端两列，移动端一列。每张卡片有一个 96px 原创 SVG 徽章、编号 01–04、30px Fraunces 的原型名称、角色标签和 16px 正文。背景分别为 Coral、Lime、Lilac 和 Teal，配 Ink 文字和边框。
   动效：卡片以 70ms 错峰显现。悬停时卡片上浮 3px，徽章轻微旋转不超过 3 度；无持续卡片运动。
4. **测验如何运作** — 眉题：SIMPLE BY DESIGN。标题：Eight choices. One clearer next step. 三个编号步骤：01 Choose what feels natural — Answer instinctively; there are no trick questions or better scores. 02 See your pattern mix — We count your choices across four complementary patterns and show the result, including ties. 03 Put it into practice — Unlock the [REPORT_NAME] for strengths, friction points, and a seven-day experiment. 添加一条窄注释：Reflective, not clinical. Your result is a prompt for self-observation, not a diagnosis.
   布局：在容器内使用 Ink 全宽圆角 32px 面板，配 Chalk 文字。三栏由 1px Chalk/20 垂直分隔线隔开。数字为大型 Fraunces，使用匹配的强调色；步骤标题为 22px，正文为 15px/1.65。移动端堆叠，使用水平分隔线。
   动效：步骤作为一个组显现。悬停时，每个数字从描边变为实心强调色文字，无布局偏移。
5. **现场指南预览** — 分栏标题：A result you can use after the confetti fades. 正文：Your [REPORT_NAME] turns the pattern into practical prompts for the next seven days. 列出四个包含的区块：Your pattern at a glance、Three strengths to protect、Two friction points to watch 和 A seven-day experiment。在文案旁，绘制一个分层报告页模型，展示默认 Weaver 结果的这些精确示例行：Strength — You make room for better ideas by inviting other perspectives. Watch for — A crowded feedback loop can blur your own instinct. Try this week — Share a rough draft with one trusted person before adding more input. 最后以一个标注为 Take the quiz 的按钮结束，从第一题开始。
   布局：两栏 44%/56% 区块。左侧文案保持垂直居中。右侧是一个 520px 高的 Chalk 报告单，配 2px Ink 边框和错位的 Coral 与 Lilac 纸张。报告单有一个微型徽章、[REPORT_NAME]、三行横线内容行和一个七格周条。移动端将文案堆叠在 420px 高的报告模型上方。
   动效：报告纸张在悬停时分离 8px；阅读示例文本无需交互。
6. **问题与结尾邀请** — 使用五个无障碍手风琴项，同一时间恰好一个打开，初始时第一个打开。问：How long does the quiz take? 答：Most people can finish eight visual questions in about two minutes. You can go back to change an answer before seeing the result. 问：Is this a scientific personality test? 答：No. It is an original reflective exercise built around four creative-work patterns, not a validated assessment or clinical tool. 问：What happens to my answers? 答：They stay in this browser tab only. Refreshing or leaving resets the quiz; no answer data is transmitted. 问：Will you email me the report? 答：In this static demo, submitting the form unlocks the full report on screen. No email is sent or stored. 问：Can I retake it? 答：Yes. Retake clears all eight answers and the unlocked report so you can start fresh. 在手风琴下方，添加一个 Coral 结尾面板，标题为 Ready to notice your pattern?，按钮为 [PRIMARY_CTA]，注释为 Eight questions · No signup to see your result。
   布局：区块 id 为 questions。FAQ 为居中的 860px 列，垂直间距 16px，带边框的 Chalk 行，Plus 图标旋转为 X，答案在打开过渡后不推移周围内容。结尾面板在下方占满容器宽度，内边距 48px，右侧对齐一个抽象旭日图形。
   动效：手风琴答案使用 180ms 不透明度和 6px 位移过渡。结尾面板显现一次，滚动时不重复动画。
7. **落地页页脚** — 页脚左侧：[BRAND] 和 Small reflections for more intentional work。中间：Take the quiz、The patterns 和 Questions 控件，执行其命名操作。右侧：Built for reflection, not labels。底部行：[CREDIT]。不要添加社交链接、地址、日期或虚构的公司指标。
   布局：Ink 背景配 Chalk 文字，垂直内边距 40px，容器内三栏行，版权行上方一条细 Chalk/20 分隔线。移动端左对齐堆叠。
   动效：链接悬停时变为 Lime，160ms 颜色过渡。
8. **八题测验状态** — 按此固定顺序创建恰好八个原创默认问题。每题有四个答案卡片，每个答案恰好给括号中的原型加一分；保持评分数据不可见。Q1 A blank page appears. What do you reach for first? | A loose pencil sketch (Spark) | A short checklist (Anchor) | A conversation with someone (Weaver) | A walk around the block (Pathfinder)。Q2 A project deadline moves closer. You… | Make a bold first draft (Spark) | Break the work into checkpoints (Anchor) | Set a quick check-in (Weaver) | Revisit the brief from a new angle (Pathfinder)。Q3 Which workspace helps you think? | A table covered in materials (Spark) | A calm desk with a clear plan (Anchor) | A shared studio with conversation (Weaver) | A window seat and room to wander (Pathfinder)。Q4 Feedback is most useful when it… | Sparks three new possibilities (Spark) | Names the next concrete fix (Anchor) | Shows how others respond (Weaver) | Challenges the central assumption (Pathfinder)。Q5 Choose a Saturday creative reset. | Make something with no plan (Spark) | Finish a satisfying small project (Anchor) | Host a casual making session (Weaver) | Visit somewhere unfamiliar (Pathfinder)。Q6 Your notebook is mostly… | Fragments and rapid sketches (Spark) | Lists, systems, and revisions (Anchor) | Quotes, questions, and shared ideas (Weaver) | Observations and surprising connections (Pathfinder)。Q7 A stalled project usually needs… | A playful constraint (Spark) | One clearly defined next step (Anchor) | A fresh pair of eyes (Weaver) | Distance and a different input (Pathfinder)。Q8 The best compliment about your work is… | It feels alive (Spark) | It really works (Anchor) | It brought people together (Weaver) | It changed how I see things (Pathfinder)。在 src/content.ts 中为每个答案提供一句简短的支持句和合适的 Lucide 图标。对于替代值，替换每个问题、答案、支持句和图标选择，使用同样具体且适合主题的内容，同时保持每题每个原型一个答案。
   布局：测验主区域使用最大宽度 980px 和最小高度 calc(100svh - 76px)。顶部行显示 Question N of 8，使用类似等宽的 DM Sans 小型大写字母，一个文字 Back 控件仅在第一个问题时禁用，以及八个等宽进度段。其下方，一个 4px 全宽轨道有 Lime 填充，比例为 N/8。居中一个 Chalk 问题卡片，内边距 36px，小图标和主题标签，Fraunces 42px 问题，以及 2×2 答案网格。答案卡片为全宽语义按钮，配图标、答案标签、一行支持文本和 ArrowUpRight 图标；移动端使用单列和 32px 问题字号。包含一个 aria-live polite 步骤播报。点击答案记录并推进到选中状态之后；Back 返回上一答案而不丢失其他答案。Exit quiz 返回落地页主视觉，答案仅在刷新前保留，如果存在部分测验，则在主视觉 CTA 上显示 Resume quiz。
   动效：选中的答案显示 Lime 填充和 Check 图标 240ms 后推进。问题过渡遵循共享的 280ms 模式；进度在每个答案后动画。减少动态模式下立即推进，无 240ms 延迟。
9. **评分与计算间奏** — 第八题后，汇总 Spark、Anchor、Weaver 和 Pathfinder 的分数。最高总分为主要原型。如果多个原型并列，选择最近回答的并列原型，从第八题向前扫描答案；如果仍然并列，使用固定顺序 Spark、Anchor、Weaver、Pathfinder。保留所有四个总分用于结果的模式组合。计算期间，依次显示 Finding the threads in your choices… 然后 Balancing your four patterns… 然后 Preparing your [REPORT_NAME]…，配一个小型抽象四部分徽章自行组装。
   布局：居中 Chalk 卡片，最大宽度 620px，上方一个 160px 代码绘制的徽章，下方 34px Fraunces 状态行和三个小进度点。保留共享页头。此短暂状态期间无需用户控件，如果组件卸载必须清理计时器。
   动效：使用 1100ms 总间奏，状态变化约在 0ms、370ms 和 740ms。减少动态模式下，显示一条静态 Preparing your result… 消息，在结果前不超过 100ms。
10. **个性化结果主视觉** — 默认结果内容：The Spark — Idea igniter — You turn possibility into motion. A rough sketch, a surprising constraint, or a quick prototype helps you discover what an idea can become. 建议：Choose one idea and make a deliberately rough version in 25 minutes; stop while the next move still excites you. The Anchor — Thoughtful finisher — You create momentum by giving good ideas a dependable shape. Clear checkpoints help you protect both quality and follow-through. 建议：Define the smallest finishable version of your current project, then schedule one distraction-free block to complete its first checkpoint. The Weaver — Creative connector — You do your clearest thinking in relation to other people. Conversation helps you test assumptions and notice what an idea means beyond your own perspective. 建议：Share a rough draft with one trusted person and ask a single focused question before gathering more feedback. The Pathfinder — Curious explorer — You find direction by stepping outside the obvious route. New places and unexpected inputs help you connect ideas others might miss. 建议：Collect three references from outside your usual field and turn one observed connection into a concrete sketch. 对于其他主题，重写所有四个结果名称、角色、描述和建议，同时保留它们的四个评分角色。结果标题为 Your pattern is [archetype name]。包含标签 A starting point, not a fixed type 和一个次要 Retake quiz 按钮。显示 Pattern mix 为四个水平条，标注所有四个原型，计算为 count ÷ 8 × 100 并四舍五入到最接近的整数百分比；说明 Percentages show where your eight answers landed, not a scientific score。
   布局：结果视图以一个两栏 Chalk 主视觉卡片开始。左侧包含眉题 YOUR [QUIZ_TOPIC] RESULT、56px Fraunces 原型标题、角色标签、18px 描述、一个 Lime 建议框和操作按钮。右侧包含一个 280px 原创 SVG 徽章，使用原型颜色，以及四个模式组合条。移动端将徽章堆叠在描述之后、建议之前；所有文本保持可读，无需解锁内容。
   动效：结果文案、徽章和条形以 420ms 淡入/上升显现。条形在结果出现后 600ms 内从 0 动画到实际宽度；减少动态模式下立即显示最终宽度。
11. **邮箱门控完整报告** — 在结果后立即放置一个 Lilac 面板，眉题为 GO A LITTLE DEEPER，标题为 Your [REPORT_NAME] is ready，正文为 Enter your email to unlock the on-screen report in this static demo。使用可见的 Email address 标签、一个邮箱输入框，占位符为 you@example.com，required 和 type=email，以及按钮 Unlock my field guide。隐私说明：Demo only: no email is sent, transmitted, or stored。有效提交时，不发起网络请求；在内存中设置解锁状态，将表单替换为 Unlocked below — no email was sent，并平滑显示报告。无效提交时，使用原生邮箱验证消息。报告包含四个区块：1 Your pattern at a glance — 重复主要描述并列出两个最高模式及其答案计数。2 Three strengths to protect — 主要原型的三个主题特定优势。3 Two friction points to watch — 两个具体风险，各配一个纠正提示。4 A seven-day experiment — 七个简短每日行动，每个 20 词或更少，基于主要建议。对于默认 Weaver，包含优势 You invite useful perspectives、You make shared progress visible 和 You help ideas land with other people；摩擦提示 When does feedback become too many voices? 和 What do you think before asking the room?；以及七天序列 Choose one rough idea、Write your own goal first、Ask one trusted person、Listen for one surprise、Revise without polling、Share the finished piece 和 Note what you learned。最后以 Print or save this report 使用 window.print() 和一个 Start over 按钮结束，清除答案和锁定状态。
   布局：锁定面板使用两栏行，文案居左，紧凑表单居右。解锁报告在下方展开为 Chalk 纸张，最大宽度 960px，四个编号区块，宽松的横线分隔符，和一个七行日网格。打印样式隐藏页头、页脚、按钮、装饰图形和锁定面板，同时以黑白打印解锁报告。无虚假发送加载动画或虚构的送达确认。
   动效：解锁使用 300ms 不透明度和 12px 上升显现，并将焦点移到报告标题。Start over 返回落地页状态，减少动态模式下无动画。

## 资产（Assets）
- 图像（image）：不使用任何栅格图像文件。所有主视觉（hero）、原型（archetype）、报告（report）和装饰性图形，均使用指定的几何图案和调色板，以原创内联 SVG 和 CSS 创建。不要使用图像占位符或外部图像 URL。
- 图标（icon）：仅对界面和答案卡片图标使用本地打包的 lucide-react 图标，并保持一致的 1.8px 描边。在 ASSETS.md 中记录 lucide-react、https://github.com/lucide-icons/lucide、ISC license。
- 字体（font）：通过 @fontsource-variable/fraunces 自托管 Fraunces Variable，通过 @fontsource-variable/dm-sans 自托管 DM Sans Variable，两者均为 OFL-1.1。在本地导入包 CSS，并在 ASSETS.md 中列出这两个包及其许可证；绝不要请求 Google Fonts 或其他字体 CDN。

## 禁止事项
- 不要添加后端、无服务器函数、API 路由、数据库、身份验证、真实表单端点、第三方 API 或依赖网络的行为。邮箱表单仅用于解锁本地内容，绝不能声称已发送邮件。
- 不要传输、持久化或追踪测验答案或邮箱输入。不得使用 localStorage、sessionStorage、cookie、分析工具、追踪像素或隐藏遥测。
- 不要加载任何 CDN 脚本、样式表、字体、图标、图片或其他远程资源。打包所有依赖，并使用相对资源路径，Vite base 设为 './'。
- 不要使用 Unsplash、Pexels、Pixabay、占位图服务、Google Images、可识别的人物、真实肖像、动漫或游戏角色、第三方 logo、吉祥物、品牌产品或有辨识度的地标。
- 不要复制现有测验的名称、问题、答案、结果类型、确切文案、插图、图标、代码或科学框架。仅使用本提示词中的原创内容模型，并针对替代变量重写。
- 不要将原型呈现为诊断、临床建议、心理测量、经过验证的评估、排名或固定特质。不要编造参与者数量、评分、推荐语或科学证据。
- 不要使用商业字体、fonts.googleapis.com、fonts.gstatic.com、Adobe Fonts、受限的 UI 源码、非宽松许可的包或固定技术栈之外的依赖。
- 不要添加路由器、裸目录链接、失效锚点、无效按钮、虚假加载状态、无法复现结果的分享链接或不可用的社交链接。将完整体验保留在 index.html 中。
- 不要生成 source map、将 src/ 复制到 dist/、使 dist/ 超过 20 MB，或要求生产输出需要超过 npm run build 的操作。
- 不要在组件中硬编码特定主题的文案，也不要在替代变量构建中保留 Moss & Meter 创意作品内容。将所有可编辑文案和示例数据保留在 src/content.ts 中，并全程使用美式英语。
- 除可选渲染的 [CREDIT] 页脚链接外，不要在网站任何位置提及 VibeFather、其许可证、定价、指标或会员资格。不要添加 SEO 元数据、Open Graph 标签、JSON-LD、站点地图、分析工具或日期；一个简单的 [BRAND] 标题和 favicon 就足够了。
- 不要牺牲无障碍性或响应式行为：保持可见焦点、带标签的表单控件、可键盘操作的答案和手风琴、aria-live 更新、减少动态效果支持、44px 触摸目标、零控制台错误，以及在 390×844 或 1440×900 下无水平溢出。

---
— Prompt by VibeFather · https://vibefather.ai/t/personality-quiz-funnel-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
