> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 网络安全 SaaS 落地页

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个原创的单页落地站点，[BRAND] 是面向 [AUDIENCE] 的 [PRODUCT_CATEGORY]。首屏将清晰的销售主张与一个丰富的动画 SVG 世界地图相结合，地图标注为 [EVENT_LABEL]，并配有模拟事件流和明确的示例数据提示。页面依次呈现产品模块、事件工作流、示意性客户成果、通用信任控制、演示请求表单、常见问题解答，以及一个聚焦的收尾行动号召。

- 受众：站点面向 [AUDIENCE]，他们需要快速理解产品，并评估一次引导式演示是否值得投入时间。模板所有者是一支技术型 SaaS 团队，需要一个精致、可信的营销页面，配有实质性的产品可视化，而非抽象装饰。
- 目标：让访客理解产品从检测到响应的故事，探索全部四个模块，认识到每一项指标和事件均为示例性质，并完成一次有效的演示请求预览。每个可见控件都必须在本地正常工作，任何表单数据都不得离开或持久化到当前页面状态之外。
- 语气：冷静、精确、可操作且自信。使用具体的产品语言和有用的细节，而非恐惧、电影化的黑客陈词滥调、含糊的最高级或缺乏支持的安防声明。将动画活动视为示意性界面内容，绝不作为真实防护或实时遥测的证据。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：React 18（MIT）、Vite 5（MIT）、TypeScript（Apache-2.0）、Tailwind CSS 3.4（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource-variable/space-grotesk（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 使用 Vite 5 搭配 React 18 和 TypeScript。在 vite.config.ts 中设置 base: './'，将 build.sourcemap 设为 false，并仅向 dist/ 输出静态生产文件。
  - 使用下方精确的颜色、字体族、间距、圆角和阴影配置 Tailwind CSS 3.4。将地图关键帧、焦点样式、选中颜色和减少动态效果覆盖放入 src/index.css。
  - 将所有可编辑的品牌文案、标题、模块文案和数据、地图事件、指标、信任标签、FAQ 和表单选项保留在 src/content.ts 中，并使用 TypeScript 接口。组件不得嵌入仅适用于默认主题的文案。
  - 当变量值变化时，重写每个主题特定的标题、产品模块、事件标签、示例事件、指标、工作流步骤、信任说明、FAQ 答案和表单选项，以适配 [PRODUCT_CATEGORY]、[AUDIENCE] 和 [EVENT_LABEL]，同时保持布局和交互不变。
  - 使用 Motion for React 实现区块入场、产品标签切换、手风琴答案和请求预览状态。地图使用原创内联 SVG 和 CSS 关键帧；不要添加映射、图表或动画依赖。
  - 创建一个确定性的 ThreatMap 组件，包含固定节点、路线和六个预定义事件。使用一个清理过的定时器每 2800ms 轮换高亮事件；Pause feed 必须同时停止定时器和装饰动画。不要使用随机数据或外部遥测。
  - 将产品标签状态、移动菜单状态、打开的 FAQ 状态、信息流暂停状态和表单状态仅保存在 React 内存中。不要使用 localStorage、sessionStorage、cookie、分析、URL 跟踪参数或任何网络请求。
  - 从 Fontsource 本地导入 Space Grotesk Variable、Inter Variable 和 IBM Plex Mono。创建 ASSETS.md，列出三个字体包、lucide-react、它们的来源和许可证，并说明所有地图和产品图稿均为原创代码绘制的 SVG/CSS，不含栅格图像。
  - 使用语义化地标、带标签的控件、可见焦点、44px 最小触摸目标、可键盘操作的标签和手风琴，以及减少动态效果行为。在 1440×900 和 390×844 下验证完整页面，确保零控制台错误且无水平溢出。

## 变量
- [BRAND] — 产品品牌（默认：“Sablegrid”）。一个虚构的产品名称，用于原始方括号标记、页眉、文案、表单预览和页脚。
- [PRODUCT_CATEGORY] — 产品类别（默认：“threat detection and response platform”）。一个简洁的小写类别短语；所有产品和流程文案都必须遵循它。
- [AUDIENCE] — 主要受众（默认：“lean security teams”）。一个简洁的小写受众描述，用于主视觉和销售文案。
- [EVENT_LABEL] — 地图事件标签（默认：“Threat activity”）。一个简短的首字母大写标签，用于地图及其模拟事件，例如 Data risk activity。
- [PRIMARY_CTA] — 主要行动号召（默认：“Request a demo”）。一个简短的按钮标签，点击后滚动访客至本地演示请求表单。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接至 https://vibefather.ai/t/cybersecurity-saas-landing-page（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块键控，以便日后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 深场（Deep Field）`#071114` — 页面背景、页眉和页脚
- 面板墨色（Panel Ink）`#0D1C20` — 地图、产品查看器、表单和凸起区块表面
- 凸起线条（Raised Line）`#173036` — 选中行、输入框背景和安静色调块
- 网格线（Grid Line）`#28434A` — 边框、坐标线、分隔线和非活动轨道
- 薄雾（Mist）`#E8F1EE` — 主标题、深色表面上的正文文本和重要数值
- 石板文本（Slate Text）`#93AAA9` — 次要文案、元数据、标签和非活动控件
- 信号薄荷（Signal Mint）`#78E0CF` — 主按钮、活动标签页、已解决事件、焦点环和关键数据
- 警报珊瑚（Alert Coral）`#FF927A` — 仅用于调查中的事件、一个警报节点、验证错误和稀疏强调
- 按钮墨色（Button Ink）`#09201F` — Signal Mint 按钮上的文本和图标

### 排版
- 展示标题、区块标题和大型示例指标：Space Grotesk Variable，通过 @fontsource-variable/space-grotesk（OFL）自托管，字重 500/600/700
- 正文、导航、按钮、标签页和表单控件：Inter Variable，通过 @fontsource-variable/inter（OFL）自托管，字重 400/500/600/700
- 眉题、地图坐标、事件元数据、徽章和小型系统标签：IBM Plex Mono，通过 @fontsource/ibm-plex-mono（OFL）自托管，字重 400/500

### 布局与动效
- 间距：使用 8px 基础网格。内容最大宽度为 1280px，桌面端留白 40px，移动端留白 20px。主要区块使用桌面端 112px、移动端 76px 的垂直内边距。页眉高度为 72px。主视觉文案和视觉列之间的间距为 56px；面板内边距为桌面端 24–32px、移动端 18–22px。正文行宽保持在 48 到 66 个字符之间。
- 圆角：标签和小徽章使用 4px，输入框和按钮使用 8px，主要面板使用 12px。避免胶囊形容器，微型状态点除外。使用 1px Grid Line 边框，仅在主视觉地图和演示表单上使用克制的 0 20px 60px rgb(0 0 0 / 0.24) 阴影。
- 动效：使用 Motion 的 whileInView 让主要区块显示一次：透明度从 0 到 1，translateY(22px) 到 0，持续 480ms，直接子元素之间错开 60ms；在没有 JavaScript 交叉观察支持的情况下，内容必须保持可见。
- 动效：在主视觉地图上，路线虚线偏移在 4.5 秒内动画，节点环从 scale 0.75 到 1.35，透明度渐隐，持续 2.4 秒。同一时间只有一个路线和一个节点获得 Alert Coral 强调。
- 动效：每 2800ms 推进模拟的高亮事件，不添加或删除行。暂停信息流会冻结虚线、脉冲和间隔运动，并将其标签改为 Resume feed；重新启动会从当前事件继续。
- 动效：产品视图通过 AnimatePresence 交换，使用 180ms 透明度和 translateX(10px) 过渡，位于稳定的最小高度查看器内。活动标签指示器颜色在 160ms 内变化；内容高度不得剧烈跳动。
- 动效：按钮在悬停时向上平移 1px，按下时在 140ms 内返回。手风琴答案使用 180ms 透明度和高度过渡，移动菜单使用 160ms 淡入和 8px 向下进入。
- 动效：请求预览以 220ms 透明度和 12px 上升过渡替换表单，然后将焦点移到其标题。复制请求会将其按钮标签改为 Request copied，持续 1600ms。
- 动效：在 prefers-reduced-motion 下，移除区块显示、路线移动、节点脉冲、自动事件轮换、平滑滚动和变换过渡。立即显示完整的静态信息流和最终组件状态。
- 图像：不使用照片、生成的位图、外部地图、库存插图或图像占位符。主视觉锚点是一个大型原创 SVG 操作地图：简化的手绘大陆轮廓、微妙的点阵、经度和纬度参考线、六个固定位置节点、弯曲路线、十字准线细节和紧凑的事件栏。用 HTML/CSS/SVG 绘制四个不同的产品模块界面。仅使用抽象的括号、节点、路线、波形和账本图案；不使用盾牌、兜帽人物、骷髅、挂锁陈词滥调、品牌标志或认证印章。

## 页面与区块
### 网络安全 SaaS 落地页与演示请求（`index.html`）
1. **页头与移动端导航** — 用四个小方形角括号围绕一个薄荷色圆点，创建原创的 [BRAND] 文字标识。桌面端导航链接为 Platform、Workflow、Trust 和 FAQ，分别指向对应的区块 ID。右侧按钮为 [PRIMARY_CTA]，点击后滚动至 Demo request。在文字标识下方添加一行小字状态，内容为 [PRODUCT_CATEGORY]。移动端显示文字标识、紧凑的 [PRIMARY_CTA] 按钮和一个 Menu 图标按钮。展开的菜单包含全部四个锚点，在选择后、按 Escape 时或点击外部时关闭。不要添加 Sign in、账户、社交或其他无效控件。
   布局：粘性顶部页头，z-40，高 72px，Deep Field（深场色）94% 不透明度，带背景模糊和 1px Grid Line（网格线色）底边框。使用 1280px 容器。桌面端链接居中，间距 28px；文字标识和 CTA 分别锚定两端。移动端菜单是绝对定位的 Panel Ink（面板墨色）面板，直接位于页头下方，行高 48px、占满宽度。包含一个在获得焦点时出现的跳转链接。
   动效：页头保持稳定。仅在未请求减少动效时，锚点使用平滑滚动。移动端导航遵循共享的 160ms 入场动效，并在关闭时将焦点返回其触发按钮。
2. **首屏宣传语与动态威胁地图** — 默认值使用眉题 SECURITY OPERATIONS, WITHOUT THE NOISE，H1 为 See the signal. Stop the spiral.，正文为 [BRAND] gives [AUDIENCE] one calm workspace to detect, investigate, and contain risk before it becomes downtime.。主按钮为 [PRIMARY_CTA]，带 ArrowRight；次按钮为 Explore the platform，滚动至 Platform。添加三条简洁的安心说明：Guided product walkthrough、Your workflows and priorities 和 No generic sales deck。为替代值重写全部三条说明和首屏文案。右侧视觉区域标题为 [EVENT_LABEL]，带徽章 SIMULATED FEED 和 6 SAMPLE NODES。包含一个可用的 Pause feed 按钮。使用六个固定位置——Seattle、São Paulo、London、Lagos、Singapore 和 Sydney——以及六个预定义事件：Credential anomaly · London · Investigating；Unusual export · Singapore · Reviewing；Privilege change · São Paulo · Verified；New device cluster · Seattle · Observing；Policy drift · Sydney · Resolved；Repeated sign-in · Lagos · Contained。一次显示四行紧凑的订阅源行，并高亮活动行；事件为预定义示例内容，并非实时队列。页脚图例为 Observed、Investigating、Resolved，外加 Illustrative events · no live intelligence。对于替代值，仅在有用时替换位置，并为新主题重写全部六个事件名称和状态。
   布局：首屏最小高度为 calc(100svh - 72px)，使用 42%/58% 两列网格，项目居中，垂直内边距 48px。左侧 H1 为 Space Grotesk 68px/0.98，字重 600，最大宽度 540px；正文为 18px/1.65，最大宽度 510px。操作按钮间距 12px，安心说明项在下方以等宽字体 11px 换行排列。右侧视觉区域为 Panel Ink 12px 圆角面板，带 64px 页头、760×440 SVG viewBox，以及沿底部集成的 176px 事件栏；总高度约 610px。地图仍是首屏的主导元素。移动端将文案堆叠在地图上方，H1 使用 clamp(43px,12vw,54px)，保持主 CTA 在视觉区域之前，并将视觉区域缩减至约 440px 高，订阅源区域可滚动但不阻塞页面。在 390px 宽度下不得有文字被裁切。
   动效：首屏文案以 20px 上升一次性入场；地图在 100ms 后跟随。应用指定的路线、节点、间隔、暂停和减少动效行为。SVG 本身为 aria-hidden；所有事件含义仍以文本形式提供。
3. **示意性客户成果** — 添加一个窄标题行，眉题为 ILLUSTRATIVE CUSTOMER OUTCOMES，标题为 A calmer queue, measured in practical terms.，并带一个可见的 SAMPLE DATA 徽章。使用恰好四个默认指标：38% — fewer duplicate alerts in a simulated four-team comparison；18 min — to a first triage summary in the sample workflow；3.1× — more incidents reviewed per analyst in the illustrative scenario；12 weeks — of searchable context shown in the product example。添加脚注：Fictional figures for layout demonstration, not customer results or performance guarantees。为替代值重写每个指标和说明，同时保留四个混合单位和样本数据标签。
   布局：将此条带紧邻首屏下方放置，带顶部和底部 Grid Line 边框。桌面端四等列共享一行，由垂直分隔线隔开；每个数值为 Space Grotesk 42px，每条说明为 13px/1.55 Slate Text（石板文本色）。平板端使用两列，移动端使用一列并带水平分隔线。标题行位于网格上方，底部间距 24px。
   动效：条带作为一组一次性显现；不要数字递增或重复动画。
4. **四个产品模块标签页** — 区块 id 为 Platform。眉题：ONE CONNECTED WORKSPACE。标题：From raw signal to accountable action。引言：Explore four modules that share the same incident context。按此顺序构建四个功能标签页。01 Signal Ingest — Normalize events without losing their source context — 示例查看器显示三行来源 Cloud workload、Identity provider、Endpoint fleet，带事件计数、解析状态和一个小型吞吐量迷你图。02 Detection Studio — Tune transparent rules around your own thresholds — 示例查看器显示规则 Impossible travel，带条件卡片、阈值 2 signals / 10 min、严重性 Medium，以及一个真正在本地切换的启用开关。03 Investigation Graph — Connect identities, assets, and activity in one view — 示例查看器绘制一个五节点关系图，选中节点为 Service account，侧面板包含三条上下文事实。04 Response Ledger — Assign, contain, and document the next move — 示例查看器显示负责人 Mara Venn、操作 Disable stale token、状态 Ready for review，以及一个四条目的审计时间线。所有显示的状态均为样本数据。对于替代值，重命名全部四个模块，并用同样具体、适合主题的内容替换查看器数据，同时保留摄取、配置、调查和响应角色。
   布局：以两列标题行开始，然后是 34%/66% 的工作区面板。左侧标签页为全宽 104px 行，带编号、标题、一行描述和 ArrowUpRight；活动标签页具有 Raised Line（凸起线色）背景、2px Signal Mint（信号薄荷色）左边线和 Mist（雾色）文本。右侧查看器有 52px 工具栏、最小高度 470px，以及四个完全不同的代码绘制布局，而非重复同一卡片。移动端标签页变为 2×2 紧凑网格，位于最小高度 430px 的查看器上方；保持标签可读，仅简化装饰性图形细节。
   动效：在标签页之间使用键盘方向键导航，并使用 AnimatePresence 实现查看器过渡。检测开关和图形节点选择更新本地状态，并立即提供可见反馈。无自动标签页轮换。
5. **从检测到响应的工作流** — 区块 id 为 Workflow。眉题：A SHARED OPERATING RHYTHM。标题：One incident. Three clear moves。引言：Keep the handoffs visible and the next action owned。创建三个步骤：01 Collect — Bring cloud, identity, and endpoint events into one normalized stream。迷你 UI 显示三个来源汇聚为一个解析后的事件。02 Correlate — Group related signals around the same identity and asset instead of opening three separate tickets。迷你 UI 显示三个警报芯片合并为一张事件卡片。03 Contain — Assign an owner, choose a response, and preserve a readable audit trail。迷你 UI 显示负责人、审核复选框和已完成的台账条目。结尾说明：The interface examples use fictional events and never connect to real infrastructure。为替代变量重写来源类型、关联逻辑和响应操作。
   布局：桌面端使用三张等宽卡片，由一条水平 1px 路线连接。每张卡片有等宽步骤编号、22px 标题、15px 正文，以及底部 160px 的原创图示。宽屏上中间卡片向下偏移 32px，以营造节奏感而不损害阅读顺序。移动端按数字顺序堆叠，带垂直连接线且无偏移。
   动效：卡片按顺序以 70ms 错峰显现。悬停时，图示路线变亮，其小节点移动最多 4px；无无限动画。
6. **通用信任与合规控件** — 区块 id 为 Trust。左侧眉题：CONTROL, MADE VISIBLE。标题：Trust is a workflow, not a badge wall。正文：Give buyers a clear view of the controls your product story supports, without borrowing certification marks or implying an audit。包含文本链接 Review common questions，滚动至 FAQ。右侧创建四个通用控件徽章：ACCESS CONTROLS — Role-based access patterns with a original keyhole-free Users icon；ENCRYPTION CONTEXT — Clear at-rest and in-transit language with a Binary icon；AUDIT-READY EXPORTS — Portable incident histories with a FileClock icon；RETENTION OPTIONS — Configurable sample retention windows with a Database icon。在网格下方添加说明 Illustrative control categories only. No certification, compliance, or audit status is claimed。在其下方，添加三个无品牌集成占位符，分别标记为 Cloud sources、Identity sources 和 Case management，使用简单的 Lucide 图标。为替代值重写控件语言，绝不插入真实客户或认证徽标。
   布局：40%/60% 两列区块，左侧文案仅在高桌面屏幕上粘性定位。右侧控件形成 2×2 的 Panel Ink 卡片网格，每张高 176px，带小线条图标、等宽标题和 14px 说明。免责声明以带边框条带横跨网格；集成占位符在其下方形成三个安静等宽行。移动端堆叠文案，每行一个控件。
   动效：控件卡片以两对形式显现。悬停仅在 160ms 内改变边框颜色和图标颜色；徽章绝不闪烁、旋转或类似官方印章。
7. **演示请求表单与本地预览** — 区块 id 为 Demo request。左侧眉题：A WALKTHROUGH WITH CONTEXT。标题：Bring one real workflow to the demo。正文：Tell us what you want to unpack and use the preview to check your request。默认值列出三个议程项：Your current alert sources、One investigation you want to simplify 和 The response handoff you want to make clearer。添加小注：Static template demo: no request is transmitted。右侧表单字段为 Full name、Work email、Company、Team size 下拉选择（1–10、11–50、51–200 和 201+），以及一个标记为 What should the demo cover? 的文本区域，占位符为 For example: triaging identity alerts across two cloud accounts。提交按钮为 Preview request。验证去除首尾空格后的姓名和公司至少 2 个字符、常规电子邮件模式、团队规模非空，以及文本区域至少 12 个字符。显示内联错误并聚焦第一个无效字段。有效提交时，不发出请求，将表单替换为标题 Your request preview is ready、包含全部五个值的定义列表摘要，以及说明 Nothing was sent or stored. This preview exists only in the current page state。提供 Copy request，使用 Clipboard API 复制纯文本摘要，并带优雅的手动选择回退方案，以及 Edit details，恢复已填写的表单。不要虚构预约时间、请求 ID、交付承诺或成功确认。为替代值重写标签、议程项和占位符，同时保持相同的验证模型。
   布局：在 Raised Line 区块面板内使用 42%/58% 两列网格。左侧有 32px 内边距和三行编号议程。右侧是 Deep Field 表单卡片，28px 内边距，两列姓名/邮箱和公司/团队行，全宽文本区域，以及全宽薄荷色提交按钮。输入框高 48px，带 Raised Line 背景、Grid Line 边框和 Mist 文本；错误文本使用 Alert Coral（警示珊瑚色）。预览占据同一卡片，行间距 20px。移动端堆叠两列，使用单列字段，并保留 44px 触摸目标。
   动效：预览遵循共享的 220ms 入场和焦点行为。复制反馈持续 1600ms。错误出现时不造成破坏布局的位移；减少动效时使用即时状态变化。
8. **常见问题** — 区块 id 为 FAQ。标题：Specific answers before a closer look。构建五个可访问的手风琴项，一次恰好打开一个，且第一个初始打开。问：Is the threat map connected to live intelligence? 答：No. Every route, location, status, and event in this template is predefined sample content. The pause control changes only the local animation。问：Do the customer numbers describe real results? 答：No. They are fictional figures included to demonstrate the layout and are labeled as sample data wherever they appear. Replace them with substantiated content before using the page commercially。问：Are the trust badges certifications? 答：No. They are generic control categories, not seals or audit claims. The template deliberately excludes official marks and customer logos。问：What happens when I submit the demo form? 答：The page validates your entries and creates an on-screen request preview. It does not transmit, store, email, or book anything; you can copy the summary yourself。问：Can the product modules be changed for another platform? 答：Yes. All module copy and sample data belong in the central content file. Keep the four-stage interaction model and rewrite the content for the supplied variables。为替代值调整每个答案，使其绝不保留默认威胁术语。
   布局：使用 36%/64% 网格，左侧为标题和简短支持说明，右侧为手风琴。行有顶部 Grid Line 边框、24px 垂直内边距、18px 问题文本，以及打开时旋转 45 度的 Plus 图标。答案为 15px/1.7 Slate Text，底部内边距 16px。移动端使用单列。
   动效：使用带 aria-expanded 和 aria-controls 的按钮、键盘支持，以及 180ms 高度/不透明度过渡。如果禁用动画，内容仍可读。
9. **结尾行动号召与页脚** — 结尾眉题：START WITH ONE WORKFLOW。标题：Make the next incident feel less uncertain。正文：See how [BRAND] could fit the way [AUDIENCE] already work。按钮为 [PRIMARY_CTA]，滚动回 Demo request。页脚显示原创括号标记、[BRAND]，以及从 [PRODUCT_CATEGORY] 派生的简洁描述。页脚控件为 Platform、Workflow、Trust、FAQ 和 Demo request，均执行其命名的锚点操作。添加底部说明：All interface events and outcome figures are illustrative samples。以 [CREDIT] 结尾。不要添加地址、日期、社交图标、法律链接占位符或虚构公司详情。
   布局：结尾面板具有 Signal Mint 背景和 Button Ink（按钮墨色）文本，桌面端内边距 48px，以及一个占据右侧三分之一而不覆盖文案的大型原创路线 SVG。页脚使用 Deep Field、三列顶行，以及由 Grid Line 分隔的底线，垂直内边距 24px。移动端堆叠所有内容，并保持 CTA 全宽。
   动效：结尾面板一次性显现。其静态 SVG 不播放动画；链接使用 140ms 颜色变化。

## 资产（Assets）
- 图像（image）：不需要任何栅格图像文件或生成的图像。将世界地图、路线、节点图、迷你折线图（sparkline）、工作流示意图、收尾路线图案和方括号品牌标识全部创建为原创的内联 SVG/CSS/HTML。不要使用外部地图几何数据、图片 URL、占位符服务或第三方插图。
- 图标（icon）：使用本地打包的 lucide-react 图标，为 ArrowRight、ArrowUpRight、Menu、X、Pause、Play、Users、Binary、FileClock、Database、Plus、Copy、Check 以及小型产品控件统一使用 1.7px 描边。在 ASSETS.md 中记录 lucide-react、https://github.com/lucide-icons/lucide、ISC license。
- 字体（font）：通过 @fontsource-variable/space-grotesk 自托管 Space Grotesk Variable，通过 @fontsource-variable/inter 自托管 Inter Variable，通过 @fontsource/ibm-plex-mono 自托管 IBM Plex Mono，均为 OFL-1.1。在本地导入包 CSS，并在 ASSETS.md 中列出每个包及其许可证；绝不请求字体 CDN。

## 禁止事项
- 不要添加后端、无服务器函数、API 路由、数据库、身份验证、实时遥测、外部地图服务、第三方 API、表单端点或依赖网络的行为。演示表单仅验证和预览本地状态，绝不能声称已发送请求或已完成预订。
- 不要传输或持久化姓名、电子邮件地址、公司详情或任何其他输入。不得使用 localStorage、sessionStorage、cookie、分析工具、跟踪像素、隐藏遥测或 URL 跟踪参数。
- 不要加载任何 CDN 脚本、样式表、字体、图标、地图瓦片、图像或远程资源。打包所有依赖项，并使用相对资源路径，Vite base 设为 './'。
- 不要使用真实的网络安全公司、产品名称、徽标、客户标识、标语、专有界面、精确文案或可识别的品牌色系。保持 [BRAND] 及所有组织和人物为虚构。
- 不要使用官方认证印章、审计员标识、合规徽标、安全保证、真实攻击归因、真实威胁情报、客户成果或未经证实的声明。保留可见的 SAMPLE DATA 和模拟信息源标签。
- 不要使用盾牌、连帽黑客、骷髅、发光挂锁、指纹陈词滥调、紫蓝色霓虹渐变、矩阵雨、库存黑客摄影、动漫或游戏角色或真人肖像。
- 不要复制其他产品的地图图稿或界面代码。使用此处指定的原创手写 SVG 几何图形和预定义示例事件；不得使用外部 geoJSON、瓦片服务或图表库。
- 不要使用商业字体、fonts.googleapis.com、fonts.gstatic.com、Adobe Fonts、受限 UI 源码、非宽松许可的包或固定技术栈之外的依赖项。
- 不要使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务、生成的位图、第三方徽标或热链接文件。不需要任何栅格图像。
- 不要让导航、信息源暂停、模块选项卡、检测开关、图形节点、FAQ 项、演示表单、复制操作、编辑操作或结尾 CTA 失效。不要添加无效的社交、登录、法律或集成链接。
- 不要生成 source map、将 src/ 复制到 dist/、使 dist/ 超过 20 MB，或要求超过 npm run build 的生产输出。将所有内容保留在 index.html 中，仅使用文件名或哈希的本地导航。
- 不要在组件内硬编码默认威胁内容，也不要在替代变量构建中保留 Sablegrid 安全文案。将所有可编辑文案和示例数据保留在 src/content.ts 中，并全程使用美式英语。
- 不要添加 SEO 元数据、Open Graph 标签、JSON-LD、站点地图、关键词堆砌的标题、日期或分析工具；一个简单的 [BRAND] 文档标题和原创 favicon 就足够了。
- 不要在网站的任何位置提及 VibeFather、其许可证、定价、指标或会员资格，除非是可选的渲染 [CREDIT] 页脚链接。
- 不要牺牲可访问性或响应式行为：保持可见焦点、语义化控件、带标签的字段、键盘可操作的选项卡和手风琴、可访问的错误焦点、减少动态效果支持、44px 触摸目标、零控制台错误，以及在 390×844 或 1440×900 下无水平溢出。

---
— Prompt by VibeFather · https://vibefather.ai/t/cybersecurity-saas-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
