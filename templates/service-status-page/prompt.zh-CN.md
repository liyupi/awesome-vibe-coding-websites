> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 服务状态页面

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个原创的单页服务状态网站，[BRAND] 是一个为 [AUDIENCE] 虚构的 [SERVICE]。呈现一组连贯的虚构运营数据：整体健康状态、六个组件及其固定的 90 天正常运行时间历史、四条已解决或已完成的事件条目及其带时间戳的更新，以及一个带有诚实静态演示确认的订阅表单。将所有变量驱动的文案、组件记录、每日状态值和事件叙述保留在 src/content.ts 中；当变量变化时重写服务特定的细节，同时保持布局、记录数量和交互模型不变。

- 受众：主要读者是正在检查 [BRAND] 是否可用的 [AUDIENCE]，以及需要一份简洁公开事件记录的支持和运营团队。
- 目标：让访客在五秒内了解整体健康状况，比较 90 天内各组件的可靠性，准确查看过去事件的发展过程，并选择本地演示通知偏好，而不暗示发生了真实订阅。
- 语气：冷静、精确、负责任，且沉稳自信。使用平实的运营语言、有用的时间戳和直接的解释；绝不要将页面变成推销话术或制造紧迫感。

## 技术栈
- 框架：Vite 6 + React 19 + TypeScript
- 样式：Tailwind CSS 4
- 库：lucide-react（ISC）、@tailwindcss/vite（MIT）、@fontsource-variable/manrope（OFL）、@fontsource-variable/inter（OFL）、@fontsource/ibm-plex-mono（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 将 npm 构建脚本设置为 tsc -b && vite build；配置 Vite，使用 base: './'、build.sourcemap: false，以及一个名为 dist 的空 outDir。
  - 使用 @tailwindcss/vite，并在 src/index.css 中使用 @import "tailwindcss"；将列出的颜色、字体、间距、阴影和关键帧定义为 CSS 自定义属性和 Tailwind 主题令牌。
  - 在 src/main.tsx 中从各自的 Fontsource 包导入 Manrope Variable、Inter Variable 和 IBM Plex Mono 的 400 与 500 字重，以便每个字体文件都在本地打包。
  - 将所有默认和变量派生的文案、固定的十月样本参考日期、六条组件记录、四条事件记录以及每个 90 天状态序列保留在 src/content.ts 中；切勿将品牌特定文案分散到各个组件中。
  - 为页眉、聚合健康图表、组件行、事件手风琴和订阅表单使用小型 React 组件。仅将 React 状态用于图表检查、事件展开和表单验证或确认；不要添加路由器或全局状态库。
  - 将 90 个每日值表示为在 src/content.ts 中提交的类型化数组，按从最旧到最新排序，并以固定样本日期 10 月 25 日结束。不要使用随机值、当前时间请求或远程数据。

## 变量
- [BRAND] — 品牌名称（默认："Fablegrid"）。一个虚构的产品或公司名称；在页眉、主视觉文案、订阅面板、页脚和文档标题中使用它。
- [SERVICE] — 服务描述（默认："cloud application platform"）。一个描述所报告健康状况之服务的全小写短语。
- [AUDIENCE] — 主要受众（默认："product engineering teams"）。依赖此服务的人群；根据他们改写组件描述和事件用语。
- [SUPPORT_EMAIL] — 支持邮箱（默认："status@fablegrid.example"）。与虚构品牌相匹配的支持地址；演示内容请使用保留的 .example 域名。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/service-status-page（默认：是；删除此行即可移除）

页面与区块（Pages & Sections）下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 画布（Canvas）`#F3F6F2` — 页面背景，带有 3% 墨色不透明度的细微 32 px CSS 网格。
- 表面（Surface）`#FFFFFF` — 组件表格、事件卡片、表单字段和工具提示表面。
- 墨色（Ink）`#13241D` — 主标题、正文强调和深色文本。
- 柔和色（Muted）`#63736B` — 次要文案、时间戳、标签和图表轴文本。
- 线条（Line）`#D8E1DA` — 细线边框、行分隔符和非活动轨道。
- 运行正常（Operational）`#16865A` — 健康状态文本、图标和浅色表面正常运行时间条。
- 运行正常柔和色（Operational Soft）`#E3F4E9` — 整体状态徽章和健康状态药丸背景。
- 性能降级（Degraded）`#C48618` — 性能降级条和琥珀色状态指示器。
- 服务中断（Outage）`#D6574B` — 中断条和错误指示器；始终与文本或图标配对使用。
- 面板（Panel）`#10291F` — 主视觉聚合图表和订阅面板背景。
- 面板文本（Panel Text）`#F2FAF5` — 深色面板上的主要文本。
- 面板柔和色（Panel Muted）`#A8BDB1` — 深色面板上的次要文本和标签。
- 面板条（Panel Bar）`#48D28D` — 深色聚合图表上的健康条。

### 排版
- 展示标题和章节标题：Manrope Variable（OFL），字重 500/600/700
- 正文、导航、控件和运营文案：Inter Variable（OFL），字重 400/500/600
- 正常运行时间值、时间戳、图表标签和紧凑元数据：IBM Plex Mono（OFL），字重 400/500

### 布局与动效
- 间距：使用 8 px 基础节奏。内容容器最大宽度 1180 px，桌面端边距 32 px，移动端边距 20 px。页头高度 72 px。主视觉内边距桌面端顶部 72 px、底部 80 px，移动端顶部 40 px、底部 56 px。主要章节使用桌面端 88 px、移动端 60 px 的垂直内边距。卡片使用桌面端 28 px、移动端 20 px 的内边距；组件行使用 22 px 的垂直间距。正文每行保持在 64 个字符以内。
- 圆角：聚合图表和订阅面板使用 20 px，组件卡片和事件卡片使用 14 px，输入框和按钮使用 10 px，正常运行时间条使用 3 px，状态药丸使用全圆角。边框保持 1 px；阴影谨慎使用，仅在主视觉图表和可见工具提示上使用 0 18 px 50 px rgba(19,36,29,0.10)。
- 动效：初始加载时，主视觉文案和图表在 420 ms 内向上淡入并平移 12 px，错开 80 ms；等待动画期间绝不隐藏核心状态。
- 动效：健康图表条在 320 ms 内从 65% 高度增长到全高，分组小延迟上限为 360 ms；降级和中断条出现时无弹跳。
- 动效：事件更新以 180 ms 的不透明度和 grid-row 过渡展开和折叠，同时将箭头旋转 180 度；保留键盘焦点和 aria-expanded。
- 动效：图表检查工具提示以 120 ms 淡入和 4 px 向上移动显示，裁剪或翻转以确保它们永远不会导致水平溢出。
- 动效：按钮、导航锚点、筛选状态和表单焦点环使用 160 ms 颜色过渡；仅在未请求减少动效时平滑滚动锚点导航。
- 动效：在 prefers-reduced-motion 下，移除入场变换、条形错开、平滑滚动和手风琴动画，同时让每个状态立即可见且可用。
- 图像：不使用照片、生成的位图、人物或装饰性库存插图。首屏视觉锚点是一个丰富的、代码构建的 90 天聚合健康面板，包含 90 个独立条形、精确指标、图例、网格线和检查工具提示。用三个简单的 CSS 状态条构建小型原创 [BRAND] 字形，其他所有地方使用 currentColor Lucide 图标。

## 页面与区块
### [BRAND] 服务状态（`index.html`）
1. **页眉与整体状态主视觉区** — 创建一个纤细的共享页眉，包含一个原创的三横条状态图标、文字标识 '[BRAND] status'、标注为 'Components'、'Incidents' 和 'Subscribe' 的锚点链接，以及一个紧凑的 'All systems operational' 胶囊标签。主视觉区的眉题文字为 'SAMPLE STATUS · UPDATED 2 MIN AGO'。展示一个大的 CheckCircle2 图标、H1 标题 'All systems operational'，以及句子 'The latest sample health for [BRAND]'s [SERVICE], built for [AUDIENCE].'。添加两个锚点 CTA：主按钮 'View component history' 和次按钮 'Get incident updates'。在它们下方，显示紧凑的元数据 '6 / 6 components available' 和 '0 active incidents'。相邻的视觉面板标题为 '90-day platform health'，以大型等宽字体显示 '99.98%'，下方为 'aggregate uptime'，并包含恰好 90 根垂直日柱，覆盖固定样本范围 Jul 28–Oct 25。使用 86 根绿色柱，在从零开始的索引 61、82 和 88 处使用琥珀色柱，在索引 73 处使用一根红色柱。添加悬停检查，显示日期、每日状态和样本正常运行时间；在可访问的屏幕外表格中提供相同的每日详情，而不是设置 90 个单独的 Tab 停靠点。以范围标签 'Jul 28' 和 'Oct 25'、三项图例 'Operational'、'Degraded'、'Outage'，以及一行页脚文字 '90 days monitored' 和 '4 days with notes' 结束面板。
   布局：将页眉放在 1180 px 容器内，品牌在左、导航居中、状态胶囊在右；在移动端，将品牌和胶囊保留在第一行，并将三个锚点放在第二行水平间隔排列。主视觉区在桌面端使用五列 / 七列网格，间距 56 px。左侧文案垂直居中，H1 为 58 px / 1.04 Manrope，字重 600，字距 -0.04 em。深色图表面板占据右侧七列，内边距 28 px，带有淡淡的内部网格和 152 px 高的柱状区域。柱使用灵活等宽、2 px 间隙和圆角顶部。在低于 800 px 的屏幕上，将文案堆叠在图表上方，间距 32 px，将 H1 缩小至 40 px，保持图表至少 250 px 宽，并通过更窄的间隙保留全部 90 根柱，而不是水平滚动。
   动效：使用指定的主视觉区入场动画和分组柱状生长动画。CTA 和导航获得微妙的颜色和下划线过渡；工具提示仅在指针检查时出现，且从不改变布局。
2. **当前组件** — 标题：'Components'。辅助文案：'Current state and the last 90 days, using fixed sample data.'。添加右对齐图例和标签 '90 days ago / Today'。渲染恰好六个组件行：'Web application'，描述为 'Customer-facing application and session delivery'，以及 '100.00%'；'Public API'，描述为 'REST endpoints and authentication'，以及 '99.99%'；'Developer dashboard'，描述为 'Configuration, usage, and team controls'，以及 '100.00%'；'Background jobs'，描述为 'Queues, scheduled work, and retries'，以及 '99.96%'；'Webhooks'，描述为 'Outbound event delivery'，以及 '99.92%'；'Media delivery'，描述为 'Asset processing and edge downloads'，以及 '99.98%'。每个当前状态胶囊都显示 'Operational'。每一行都有自己的 90 柱条带：Public API 在索引 82 处为琥珀色，Background jobs 在 61 处，Webhooks 在 73 处为红色，Media delivery 在 88 处为琥珀色，其他所有日柱均为绿色。使用与聚合图表相同的固定 Jul 28–Oct 25 参考日期。包含简洁的逐行可访问摘要，例如 'Public API: 99.99 percent uptime over 90 days; one degraded day; currently operational.'。当变量变化时，重命名并描述组件以适配新的 [SERVICE]，同时保留六行和相同的视觉状态分布。
   布局：使用一张白色 14 px 圆角卡片，包含独立行，而不是六张浮动卡片。区块标题和图例共享基线行。在桌面端，每个组件行是一个网格，包含 250 px 的名称和描述列、灵活的日柱列、82 px 右对齐等宽百分比，以及 112 px 右对齐状态胶囊。柱高 30 px，间隙 2 px。行分隔线为 Line，1 px。在移动端，每一行变为一个带内边距的块：第一行是名称和状态胶囊，接下来是描述，然后是全宽柱，最后一行是百分比加 '90-day uptime'。在 390 px 宽度下，绝不截断组件名称或裁剪工具提示。
   动效：行在滚动时不播放动画。正常运行时间条带在行悬停时轻微变亮；单个柱工具提示在 120 ms 内淡入。所有信息在无悬停或无动效时仍然可见。
3. **事件历史** — 标题：'Incident history'。辅助文案：'A clear record of what happened, what changed, and when service recovered.'。提供三个筛选按钮：'All 4'、'Incidents 3' 和 'Maintenance 1'，初始选中 All。渲染四条最新在前的条目。第一条，徽章 'Resolved'，标题 'Media processing delays'，日期 'Oct 22'，持续时间 '26 min'，受影响组件 'Media delivery'，更新为：'11:08 Investigating — We are investigating longer processing queues for uploaded media.'；'11:21 Identified — A stalled worker pool has been isolated and pending jobs are moving to healthy capacity.'；'11:34 Resolved — Processing times are back to normal and all queued jobs have completed.'。第二条，徽章 'Resolved'，标题 'Elevated API latency in the EU region'，日期 'Oct 18'，持续时间 '38 min'，组件 'Public API'，更新为：'14:12 Investigating — We are investigating elevated response times for API requests in the EU region.'；'14:24 Identified — A saturated cache node has been isolated. Traffic is shifting to healthy capacity.'；'14:50 Resolved — Latency has returned to normal. No data loss occurred.'。第三条，徽章 'Resolved'，标题 'Webhook delivery interruption'，日期 'Oct 9'，持续时间 '1 hr 12 min'，组件 'Webhooks'，更新为：'09:06 Investigating — Some webhook deliveries are failing while event ingestion remains available.'；'09:41 Monitoring — Failed events are replaying successfully after we restored the delivery worker.'；'10:18 Resolved — The replay is complete and delivery success has returned to normal.'。第四条，徽章 'Completed'，标题 'Scheduled database maintenance'，日期 'Sep 27'，持续时间 '20 min'，组件 'Background jobs'，更新为：'21:55 Scheduled — Maintenance will begin at 22:00. Background jobs may pause briefly while web requests continue.'；'22:00 In progress — The primary database is being updated and queued work is temporarily paused.'；'22:20 Completed — Maintenance is complete and all paused jobs have resumed.'。默认展开第一条，折叠其他三条。允许多个条目同时展开，并为变更后的 [SERVICE] 重写事件叙述，不保留不再适用的云特定细节。
   布局：将筛选器放在标题下方的小型分段行中，在移动端自然换行。使用垂直堆叠的白色 14 px 圆角卡片，间距 16 px。每个关闭的页眉左侧显示一个小状态点和徽章，中间是标题和受影响组件，右侧是日期、持续时间和 chevron。展开的更新时间线位于 1 px 分隔线下方，带有垂直线轨、10 px 状态点、等宽时间戳、粗体更新状态和纯文本说明。在移动端，将徽章和日期放在第一行，标题放在第二行，组件和持续时间放在第三行，并将 chevron 右对齐；如果空间低于 360 px，时间线时间戳位于其更新文案上方。筛选会改变可见性，而不留下空白包装器。
   动效：手风琴更新使用 180 ms 展开和 chevron 过渡。筛选变化使用 140 ms 淡入淡出，不进行大规模列表重排或滚动跳转。减少动效的用户获得即时状态变化。
4. **订阅更新** — 创建一个深色面板，眉题为 'STATUS NOTIFICATIONS'，标题为 'Know when things change.'，文案为 'Choose the sample updates you would receive from [BRAND].'。表单标签为 'Work email'，占位符为 'you@company.com'，包含一个电子邮件输入框和一个主按钮 'Subscribe to updates'。包含两个已勾选的复选框，标签为 'Incident updates' 和 'Maintenance notices'，以及小字行 'Demo form only. Your address is not transmitted or stored.'。验证非空、合理的电子邮件以及至少一种选中的通知类型；在相关控件下方显示具体的行内错误。在有效提交时，将按钮内容替换为对勾和 'Preferences saved locally'，然后显示确认信息 'Demo subscription confirmed for this session. No email was sent.'。将输入的地址排除在 localStorage 之外，并提供一个 'Reset preferences' 文本按钮以恢复初始表单。包含一行小型支持信息 'Questions about service health? [SUPPORT_EMAIL]'。
   布局：Panel 色的 20 px 圆角区块采用两栏网格：左侧五栏为说明文案和 Bell 图标，右侧七栏为表单，两者间隔 56 px。输入框为 Surface 色、10 px 圆角、最小高度 48 px，并带有可见的聚焦环；提交按钮使用 Panel Bar 配 Ink 文字。复选框在桌面端排成一行，在窄屏上堆叠。在移动端，将各栏堆叠，间距 28 px，并让按钮占满全宽。错误和成功文本必须预留空间或重新排版而不被裁切。
   动效：仅使用简短的聚焦、悬停、错误和确认过渡。除非请求减少动效，确认勾选在 180 ms 内绘制完成；绝不模拟网络加载延迟。
5. **页脚** — 重复原始的三条横杠字形和 '[BRAND] status'。添加 'Operational communication for [AUDIENCE].' 以及明确说明 'All service names, metrics, and incidents on this page are fictional sample data.'。包含文本链接 'Components'、'Incidents' 和 'Subscribe'，分别指向 './index.html#components'、'./index.html#incidents' 和 './index.html#subscribe'，以及支持地址 [SUPPORT_EMAIL]。将文档标题设置为 '[BRAND] Service Status'，并使用相同的三条横杠字形作为本地生成的 SVG favicon。
   布局：使用顶部边框、32 px 垂直内边距，桌面端为一行，左侧为品牌和示例数据说明，右侧为锚点链接。在移动端，将品牌、说明、链接和支持地址堆叠，间距 16 px。页脚文案保持 Muted 色，元数据使用 12 px IBM Plex Mono。
   动效：无入场动画；仅使用细微的链接颜色过渡。

## 资产
- 图像：不使用位图图像。聚合健康可视化、所有每日正常运行时间条、三栏品牌字形、网格纹理和 SVG favicon 全部使用本地 HTML、CSS、React 和 SVG 渲染；不要调用图像生成器，也不要使用占位图服务。
- 图标：从 lucide-react（ISC）安装并导入 CheckCircle2、ChevronDown、Bell、Mail、Activity、ArrowDownRight、RotateCcw 和 AlertCircle。以 16–20 px 使用 currentColor，装饰性图标上使用 aria-hidden，并用可见文本标签表达含义。
- 字体：通过 @fontsource-variable/manrope（OFL）自托管 Manrope Variable，通过 @fontsource-variable/inter（OFL）自托管 Inter Variable，并通过 @fontsource/ibm-plex-mono（OFL）自托管 IBM Plex Mono 400 和 500。仅从 npm 导入所需文件，并在 ASSETS.md 中列出每个包、作者或项目、源 URL 和许可证。

## 不要做
- 不要向任何服务添加后端、无服务器函数、API 路由、数据库、身份验证、分析、第三方状态源、外部 API 请求或表单提交；所有运营数据都是固定的本地示例数据，订阅交互仅在会话本地生效。
- 不要声称电子邮件、警报、监控、正常运行时间检查或事件更新实际正在运行。绝不要显示虚假的网络加载旋转器、随机刷新健康数据或持久化电子邮件地址。
- 不要使用真实的状态服务提供商或科技公司的名称、徽标、标语、产品文案、实际事件、域名或作为事实呈现的真实正常运行时间数据；每个品牌、指标和事件都必须明确保持为虚构的示例内容。
- 不要复制现有状态页面的精确配色、布局、文案、插图、图标或构图，也不要使用品牌专属吉祥物、自定义字体或徽标集。
- 不要使用照片、AI 生成的位图、库存插图、远程图像、占位图服务、可识别的人物或可识别的品牌资产；精心构建的代码健康面板是视觉锚点。
- 不要从 CDN 加载脚本、样式、字体、图标或资产。仅使用指定的本地 npm 依赖和自托管的 Fontsource 文件，不使用商业性或限制性许可的来源。
- 不要输出源映射、将 src 复制到 dist、使 dist 目录超过 20 MB、使用绝对资产 URL，或要求超过单个 npm run build 命令。
- 不要添加客户端路由、裸目录链接、空 href 属性、SEO 元数据、Open Graph 标签、JSON-LD、站点地图文件或关键词堆砌的文案；一个 index.html、本地锚点链接、一个由变量驱动的纯文本标题和一个 SVG favicon 就足够了。
- 不要使用 Math.random、Date.now 或远程数据生成每日正常运行时间值。在 src/content.ts 中保留固定的 90 天序列、示例参考范围、事件时间线和一致的组件到事件状态映射。
- 不要在变量默认值和内容文件之外硬编码 Fablegrid 专属文案。当变量变化时，连贯地重写品牌引用、服务描述、组件名称、支持详情和事件叙述。
- 不要仅依赖绿色、琥珀色或红色来传达状态。保留文本标签、无障碍图标、描述性图表摘要、可见的焦点状态、带标签的控件、键盘可操作的折叠面板和筛选器，以及减少动态效果的行为。
- 不要让条形图工具提示、导航、状态胶囊、长电子邮件地址或事件时间戳在 1440×900 或 390×844 下造成水平溢出或控制台错误。

---
— Prompt by VibeFather · https://vibefather.ai/t/service-status-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
