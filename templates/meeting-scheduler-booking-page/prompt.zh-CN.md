> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 会议预约页面

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个原创的单页个人会议预约器，由虚构的 [HOST_NAME] 主持。可用的预约界面是核心亮点：访客从三种会议类型中选择一种，在自己所在的时区选择可用日期和时间，输入详细信息，并到达带有有效“添加到日历”下载的确认页面。仅使用客户端示例可用性和 localStorage；绝不要暗示实时日历集成或已发送电子邮件。

- 受众：主要：[AUDIENCE]。次要：希望拥有专注、平易近人的预约页面而无需创建账户或复杂仪表板的独立专业人士。
- 目标：让访客有信心地完成整个预约流程，在每一步都了解会议时长和时区，轻松纠正错误，并最终获得准确的日历文件。在 1440×900 下保持界面精致，并在 390×844 下完全可用。
- 语气：温暖、有条理，并带有安静的个人亲和力。使用直接的语言、具体的会议成果、充裕的间距，不施加销售压力，不使用生产力陈词滥调，也不编造客户指标。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：lucide-react（ISC）、date-fns 3（MIT）、date-fns-tz 3（MIT）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 将 Vite base 设为 './'，生产 sourcemap 设为 false，输出目录设为 dist；保持所有运行时资源本地化。
  - 将每个品牌值、主机详情、会议定义、可用性规则、表单标签、确认消息、FAQ 项和备用案例重写放在 src/content.ts 中；不要将默认文案分散到各个组件中。
  - 在一个 React 状态机中建模四个预订状态——会议、日期和时间、详情和确认；在返回时保留选择，仅在选择 Book another meeting 时重置。
  - 使用 date-fns 和 date-fns-tz 进行所有主机到访客的转换和 ICS UTC 格式化；不要手动添加固定小时偏移。使用 Intl.DateTimeFormat().resolvedOptions().timeZone 检测初始访客时区，并提供至少八个常见 IANA 时区以及检测到的时区。
  - 仅在 localStorage 中持久化最新确认的预订和选定的时区；内存中的表单字段在确认前保持可编辑。不需要也不允许网络请求。
  - 使用下方精确的调色板和字体系列配置 Tailwind；使用 CSS 关键帧和过渡实现动效，而不是添加动画库。

## 变量
- [BRAND] — 品牌（默认："Moss & Minute"）。一个虚构的日程安排品牌或独立执业名称。
- [HOST_NAME] — 主持人姓名（默认："Mara Voss"）。用于介绍和确认环节的虚构主持人姓名。
- [HOST_ROLE] — 主持人角色（默认："Independent product strategist"）。一个简洁的专业角色。
- [AUDIENCE] — 受众（默认："Independent founders and small product teams"）。主持人希望会面的人群，以名词短语形式书写。
- [MEETING_TYPES] — 会议类型（默认："Discovery call | Project consultation | Strategy intensive"）。三个会议名称按顺序排列，分别对应 20、45 和 60 分钟；请根据名称改写每个描述。
- [HOST_TIME_ZONE] — 主持人时区（默认："America/New_York"）。一个有效的 IANA 时区，用于定义可用时间并显示主持人的本地时间。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/meeting-scheduler-booking-page（默认：是；删除此行即可移除）

Pages & Sections 下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 羊皮纸色（Parchment）`#F2F0E9` — 页面背景和安静的页脚区域
- 纸白色（Paper）`#FFFEFA` — 预约工作区、卡片和表单字段
- 墨色（Ink）`#17231E` — 主文本和高对比度图标
- 石板苔绿色（Slate moss）`#64716A` — 次要文案、非活跃日期和元数据
- 细线色（Hairline）`#D8DDD5` — 边框、日历网格分隔线和分割线
- 松绿色（Pine）`#1F4A3A` — 主持人面板、主按钮和选中的日历日期
- 香橼色（Citron）`#DDF47A` — 可用日期圆点、活跃进度、选中时段和焦点强调
- 薄荷浅色（Mint wash）`#E8F1E8` — 摘要面板、成功背景和微妙的悬停填充

### 排版（Typography）
- 主持人标题和步骤标题：Instrument Serif (OFL)，字重 400
- 界面、正文、标签、按钮和数字时间显示：Inter (OFL)，字重 400/500/600/700

### 布局与动效（Layout & motion）
- 间距：使用 4px 基础单位。页头高度 76px；桌面页面边距 32px；工作区外边距 0，包含 360px 主持人侧栏和弹性内容列。主持人侧栏内边距 40px；工作区内边距 40px；卡片内边距 20px；字段间距 16px；区块间距 24px。最大内容宽度 1240px。移动端使用 16px 页面边距、24px 面板内边距和最小 44px 点击目标。
- 圆角：工作区 28px，会议卡片 16px，摘要面板 14px，输入框和时段按钮 10px，主按钮 999px，可用性圆点 50%。使用一条 1px 细线色（Hairline）边框和克制的 0 20px 60px rgba(23,35,30,0.08) 工作区阴影；避免嵌套浮动卡片和厚重阴影。
- 动效：步骤切换时，淡出离开的内容，并将进入的内容向上移动 12px，持续 220ms，使用 ease-out；尽可能保持工作区高度以避免跳动。
- 动效：会议选择填充一个小单选按钮，并在 160ms 内将边框变为松绿色（Pine）；选中的时间段获得香橼色（Citron），并带有 160ms 的缩放进入勾选，绝不使用大幅弹跳。
- 动效：月份切换时，日历网格水平滑动 10px，同时交叉淡入淡出，持续 180ms；可用性圆点不单独动画。
- 动效：确认时，勾选笔画绘制一次，持续 320ms，并在 80ms 后淡入摘要。
- 动效：手风琴答案以 180ms 的高度和透明度过渡展开。遵循 prefers-reduced-motion，移除变换、滑动、笔画动画和平滑滚动，同时保持即时状态变化。
- 图像：不使用摄影、肖像、生成的位图图像或外部插画。首屏视觉锚点是丰富、功能性的排程工作区本身：深松绿色（Pine）主持人侧栏、分层进度指示器、会议卡片、日历网格、可用性圆点、时区控件和精确的选择状态。仅添加一个原创的代码绘制品牌标记，由两个偏移的圆角矩形和一个小圆形勾选图案组成；不要模仿已知的排程标志。

## 页面与区块
### 个人会议调度器与预约确认（`index.html`）
1. **页头与共享预约外壳** — 页头左侧：原始双矩形 SVG 标记和 Inter 600 字体的 [BRAND]。页头右侧：一个小型 Mint wash 圆点、'[HOST_NAME] 的本地时间'，以及带主持人时区缩写、实时更新的 HH:MM 显示。Pine 主持人栏中的主标题：'A good conversation starts with a time that works.' 默认支持文案：'Practical conversations for independent founders and small product teams, with Mara Voss, an independent product strategist.' 根据 [AUDIENCE]、[HOST_NAME] 和 [HOST_ROLE] 重写支持文案。添加一个使用主持人姓名首字母的紧凑主持人字母组合、'Usually replies within one business day' 和 'No account required'。四步指示器为 Meeting、Date & time、Details、Done；当前步骤编号用 Citron 显示，已完成步骤带勾选标记，即将进行的步骤用柔和白色显示。右侧 Paper 工作区是实际可交互的产品，而非静态模型。
   布局：页头和主外壳居中，最大宽度 1240px。桌面外壳为 360px / minmax(0,1fr) 网格，最小高度 660px，溢出隐藏，左侧为深色主持人栏，右侧为工作区。确保整个外壳在首个 900px 视口内可见。主持人栏步骤位于底部，带垂直连接线。在 ≤768px 时，隐藏页头的本地时间标签但保留时区缩写，将主持人栏堆叠在工作区上方，标题缩小至 40px，并将步骤指示器变为无连接线的四列水平行。
   动效：外壳以 opacity 0 到 1、translateY 8px 到 0 的动画进入一次，持续 320ms。本地时间更新无动画。进度勾选使用与确认页相同的克制描边绘制效果。
2. **步骤 1 — 会议类型卡片** — 工作区眉题：'STEP 1 OF 4'。标题：'What would you like to talk about?' 正文：'Choose a format. You will see times in your own time zone next.' 从 [MEETING_TYPES] 渲染恰好三张可选卡片，分别映射到 20、45 和 60 分钟。默认卡片文案依次为：'Discovery call — A quick hello, your current challenge, and a useful next step.'；'Project consultation — Scope, constraints, and whether we are the right fit.'；'Strategy intensive — A working session with a written recap and three priorities.' 每张卡片包含一个通用 Video 图标、时长、'Video call' 和 'Details included with your booking'。预选第一张卡片，使主按钮可用。按钮：'Choose a time'。下方显示 Globe2 和 'Your time zone: [detected zone]'。
   布局：使用三行全宽行的单一垂直堆叠，每行包含一个 44px 图标块、灵活的标题/描述组、右侧时长元数据和 20px 单选按钮。桌面端描述保持两行。移动端时长移至标题下方，元数据保持左对齐，行永远不会变成三个窄列。主按钮置于右下角，时区注释置于左下角。
   动效：卡片悬停时背景从 Paper 过渡到 Mint wash，持续 160ms，不移动布局。选择卡片时仅对单选按钮、边框和一个小勾选标记做动画。继续使用标准步骤过渡。
3. **步骤 2 — 日历、时区和时段** — 工作区眉题：'STEP 2 OF 4'。标题：'Pick a day and time.' 返回按钮：'Back to meeting types'。在 [HOST_TIME_ZONE] 中定义未来 60 天的示例可用时间：周二和周四 09:00–12:00 和 13:00–15:30；周三 10:00–14:30；其他日期不可用。仅当整个所选会议时长适合某个时间窗口时，才每 30 分钟生成开始时间。使用 (dayOfMonth + slotIndex) mod 3 等于 0 确定性地省略三分之一的开始时间，使日历看起来真实开放而非均匀排满。禁用过去日期和今天未来不足两小时的开始时间。初始化为当前月份并选择第一个可用日期，但不预选时间。日历箭头切换月份；在当前月份之前禁用向前导航，在 60 天范围之后禁用向后导航。可用日期有 Citron 圆点；选中日期有 Pine 填充。时段以访客时区显示，带一个选择菜单可覆盖时区，列表下方显示精确的主持人等效时间。按钮：'Continue to details'，选择时段前禁用。更改会议类型或主持人时区必须重新计算，而不仅仅是重新标记时段。
   布局：桌面工作区内容为 minmax(0,1fr) / 230px 网格，间距 28px。左侧：月份标签和箭头控件、周一开头的星期行、六周网格，固定 44px 单元格，月份之间无布局偏移。右侧：时区选择器、选中的长日期，然后是一个垂直时段列表，最大高度 340px，带细微溢出阴影。网格下方添加 'All openings are shown in your selected time zone.' 移动端将日历堆叠在时段上方，星期单元格至少 40px，时段渲染为两列网格，无固定高度滚动容器，继续按钮全宽。
   动效：使用上述月份滑动交叉淡入淡出和选中时段勾选效果。更新时区时时段标签交叉淡入淡出，持续 140ms，不改变滚动位置。
4. **步骤 3 — 访客详情** — 工作区眉题：'STEP 3 OF 4'。标题：'Add the finishing touches.' 返回按钮：'Back to times'。顶部保留 Mint wash 摘要，包含所选会议名称、时长、完整访客日期/时间和时区，以及较小的主持人时间行。表单字段：'Your name' 必填，'Email address' 必填并带格式验证，'What would you like to get from this conversation?' 可选文本域，最多 500 字符并带实时计数。默认辅助文本：'A sentence or two helps Mara prepare.' 根据 [HOST_NAME] 重写主持人姓名。仅在失焦或尝试确认后显示内联错误。主按钮：'Confirm booking'。脚注：'Static preview: your details stay in this browser and no email is sent.' 成功后，将预约存储在本地并进入确认页；绝不用页面重载清空字段。
   布局：表单限制在 560px 宽，利用剩余工作区宽度留出呼吸空间。摘要为两行 flex 块，带 CalendarDays 和 Clock3 图标。输入框高 48px，标签在上方，标签垂直间距 12px，文本域高 120px。错误文本位于其字段下方，不重叠。桌面操作右对齐；移动端摘要和输入框变为全宽，按钮横跨整行。
   动效：无效字段获得短暂的边框颜色过渡，而非抖动动画。字段验证时预约摘要保持稳定。确认使用正常的退出/进入步骤过渡。
5. **步骤 4 — 确认与日历文件** — 显示一个 56px 的 Mint wash 圆形，带 Pine 勾选标记，眉题 'BOOKING PENCILED IN'，标题 'You’re on the calendar, [visitor first name].' 正文：'Your time with [HOST_NAME] is saved in this browser. Add it to your calendar so the details stay close.' 在简洁的定义列表中重复会议名称、时长、访客日期/时间和时区、主持人等效时间以及访客邮箱。带 Download 图标的主按钮：'Add to calendar'。它必须生成并下载一个有效的 .ics 文件，包含 UTC 格式的 DTSTART 和 DTEND、正确的时长、使用 [BRAND] 和会议名称的 SUMMARY、使用访客备注的 DESCRIPTION，以及唯一的 UID；转义 ICS 文本并使用 CRLF 行结尾。次要按钮：'Book another meeting'，清除预约状态但保留访客时区。不要声称已发送邀请或邮件。
   布局：确认内容居中，最大宽度 560px，顶部留出充足内边距。将图标置于左对齐标题上方，而非制作通用的居中成功模态框。定义行在桌面端使用 150px 标签，移动端标签堆叠。按钮在桌面端并排，移动端全宽堆叠。
   动效：勾选标记绘制一次，摘要淡入，ICS 下载保持即时。无彩带、模态框或循环成功动画。
6. **安心条与 FAQ** — 在外壳下方，添加三个紧凑事实：'Time zones handled' — 'See every opening where you are, with the host time alongside.'；'Calendar-ready' — 'Download a standard event file with the correct duration.'；'A human pace' — 'No account, countdown, or pressure to decide.' 随后是四个手风琴项：'Can I reschedule?' — 'Choose Book another meeting and confirm a new time; this preview replaces the booking saved in your browser.'；'Where is the video link?' — 'A live version would add the joining details to the invitation. This static preview does not create a real call.'；'Which calendar apps are supported?' — 'The downloaded ICS file can be imported by calendar apps that support the standard format.'；'Why can’t I choose a gray date?' — 'That day is outside the host’s sample availability or has no slot long enough for the selected meeting.' 页脚：[BRAND]、'Scheduling across [HOST_TIME_ZONE]' 和可选的署名链接。
   布局：事实区为三列等宽，列间以细线分隔，位于最大宽度 1240px 内，顶部外边距 64px。FAQ 使用单个 760px 列，与工作区左边缘对齐，包含四条带下边框的行以及 chevrons。移动端事实区堆叠为三行，FAQ 占满全宽。页脚为安静的 flex 行，垂直内边距 32px。
动效：仅 FAQ 的 chevron 和答案过渡有动画。安心事实区保持静止；无滚动劫持或 reveal 库。

## 资产
- 字体：通过 @fontsource/instrument-serif 自托管 Instrument Serif 400，通过 @fontsource-variable/inter 自托管 Inter，两者均从 npm 导入构建。二者均为 OFL；不要使用字体 CDN。在 ASSETS.md 中记录包名和许可证。
- 图标：使用 lucide-react（ISC）作为通用界面图标：CalendarDays、Clock3、Globe2、Video、ArrowLeft、ArrowRight、Check、Download、ChevronLeft、ChevronRight 和 ChevronDown。用本地内联 SVG/CSS 绘制原创的双矩形 [BRAND] 标志和对勾图案。不使用品牌图标、下载的插图或图片文件。

## 不要做
- 不要添加后端、无服务器函数、API 路由、数据库、身份验证、分析、外部表单 action、邮件服务、真实排程集成或第三方 API；所有行为都必须能在 dist/ 中的静态文件上运行。
- 不要声称创建或发送了真实的邀请、视频链接或邮件。要在访客确认的位置以及相关 FAQ 中，准确标注预览的仅本地行为。
- 不要使用现有排程、日历或视频通话产品的名称、徽标、专有视觉标识、精确文案、插图、图标体系、口号或复制的代码。
- 不要使用可识别的品牌图标、真实人物肖像、真实可用时间或真实联系方式。主持人和所有示例内容都必须保持虚构并由变量驱动。
- 不要添加摄影图片、人像、位图插图、占位图服务或外部托管的资源；功能性排程器才是视觉锚点。
- 不要从 CDN 加载字体、脚本、样式、图标或其他资源。自行托管指定的 OFL 字体，并在 ASSETS.md 中列出第三方包和许可证。
- 不要在 src/content.ts 之外硬编码 Mara、默认会议名称、默认受众、默认主持人时区或默认特定描述。更改变量必须重写所有受影响的文案并重新计算可用时间。
- 不要用固定偏移量近似时区。要遵循 IANA 时区、夏令时转换、会议时长、过去时间过滤，以及 ICS 文件中正确的 UTC 转换。
- 不要让禁用日期可聚焦，也不要允许访客在没有有效会议、可用时段、姓名和有效邮箱的情况下继续。使用语义化按钮、标签、focus-visible 焦点环、键盘可操作的日历控件和可访问的手风琴状态。
- 不要在 dist 中使用裸目录链接、source map、SEO 元数据块、Open Graph 标签、JSON-LD、站点地图或复制的 src 文件。保持输出低于 20 MB，并使用相对资源路径。
- 不要引入渐变、玻璃拟态、深色霓虹风格、通用蓝紫色 SaaS 视觉、过多浮动卡片、视差、滚动劫持或自动播放动画。
- 不要忽略减少动态效果设置。完成后的页面必须零控制台错误，并且在 1440×900 和 390×844 下没有水平溢出，每个预订步骤都能通过键盘和触摸使用。

---
— Prompt by VibeFather · https://vibefather.ai/t/meeting-scheduler-booking-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
