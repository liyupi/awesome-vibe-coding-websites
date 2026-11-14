> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 团队聊天应用界面

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个单屏、完全可交互的团队聊天应用，场景设定在 [WORKSPACE] 中，这是一个 [TEAM_TYPE]，正在协作推进 [PROJECT]。首屏就是真实的产品界面，而不是营销落地页：频道侧边栏、密集但沉静的消息线程，以及成员目录共同组成一个精致的 workspace。所有人物、组织、对话和项目细节均为虚构且原创。

- 受众：构建协作软件的设计师和开发者、需要真实感消息 UI 的产品团队，以及寻找一个内容充实的 React 应用界面而非静态视觉稿的人。
- 目标：让访客能够切换频道、搜索并发送消息、切换表情回应、打开并回复线程、插入提及和 Unicode emoji、筛选成员，以及在深色和浅色主题之间切换。所有更改都保存在 React state 和 localStorage 中，因此完整体验可作为静态文件运行，无需网络服务。
- 基调：温暖、专注，带一点安静的俏皮。使用简洁、可信的职场消息，包含具体决策和有帮助的回复；避免企业口号、刻意热情和通用的 lorem ipsum。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：lucide-react (ISC)、@fontsource-variable/manrope (OFL)、@fontsource-variable/inter (OFL)
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 将 Vite base 设为 './'，build.outDir 设为 'dist'，build.sourcemap 设为 false；生产输出必须完全静态且可移植。
  - 使用基于 class 的深色策略和由 CSS 变量支持的语义颜色令牌配置 Tailwind；在 src/index.css 中定义完整的浅色和深色调色板。
  - 将所有可编辑的界面标签、频道名称、成员资料、示例消息、反应和线程回复保留在 src/content.ts 中，按工作区和频道组织，并针对提供的变量值编写。
  - 使用 React useReducer 管理工作区状态，并为侧边栏、消息列表、编辑器、线程、成员目录和覆盖层使用小型展示组件；不要添加路由器或状态管理依赖。
  - 在一个由 slugified [BRAND] 派生的 localStorage 键下持久化主题、每频道草稿、已发送消息、反应、线程回复和已清除的未读计数；在工作区菜单中包含一个清晰标记的 Reset local demo 操作。
  - 为编辑器使用 textarea，为每个操作使用原生按钮，具有可见的焦点环、可访问名称、Escape 关闭行为，以及当弹出框或抽屉关闭时焦点返回。

## 变量
- [BRAND] — 聊天产品名称（默认："Plumthread"）。使用一个简短的自创产品名，并为其派生小写 slug，用于文档标题和 localStorage 键。
- [WORKSPACE] — 工作区名称（默认："Fable & Fern Studio"）。为频道侧边栏顶部显示的虚构组织命名。
- [TEAM_TYPE] — 团队描述（默认："independent product design studio"）。根据这类团队调整成员角色、频道名称和工作场所用语。
- [PROJECT] — 当前共享项目（默认："Wander notebook redesign"）。让选中的频道、置顶笔记和示例对话围绕该项目展开。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/team-chat-app-interface（默认：是；删除此行即可移除）

Pages & Sections 下的文案是为默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 浅色画布 `#F4F3F7` — 整体应用背景，以及工作区后方的窄边距。
- 浅色表面 `#FFFFFF` — 会话面板、输入框、搜索字段和主要控件。
- 浅色侧边栏 `#ECEAF2` — 频道侧边栏和成员目录背景。
- 浅色悬停 `#F7F5FA` — 消息行悬停、选中的细微表面和表情回应标签背景。
- 浅色文本 `#25222C` — 主标题、消息文本和重要标签。
- 浅色弱化 `#706A7B` — 时间戳、次要标签、频道描述和非活动图标。
- 浅色边框 `#DCD8E3` — 一像素面板分隔线、输入框边框和分隔符。
- 紫罗兰强调色 `#7051C8` — 浅色模式下的选中频道、主发送按钮、提及文本、焦点环和活动控件。
- 紫罗兰柔和色 `#E8E1F7` — 浅色模式下的选中频道背景、活动表情回应标签和柔和徽章。
- 在线绿色 `#2E8B68` — 两种主题下的在线状态点和小型成功确认。
- 深色画布 `#141219` — 深色模式下的整体应用背景。
- 深色表面 `#1D1A24` — 深色模式下的会话、输入框、字段和弹出层。
- 深色侧边栏 `#19161F` — 深色模式下的频道和成员面板。
- 深色抬升 `#282331` — 深色模式下的悬停行、选中的细微表面和覆盖层边框。
- 深色文本 `#F0EDF5` — 深色模式下的主文本和活动图标。
- 深色弱化 `#AAA3B6` — 深色模式下的次要文本、时间戳和非活动图标。
- 深色边框 `#383240` — 深色模式下的面板、字段和覆盖层分隔线。
- 深色紫罗兰强调色 `#B39AEF` — 深色模式下的活动文本、焦点、提及和选中细节；实心主按钮搭配 #21182F 文本。

### 字体排印
- 品牌、工作区和面板标题：Manrope Variable（OFL），字重 600/700/800
- 消息、控件、元数据和正文：Inter Variable（OFL），字重 400/500/600/700

### 布局与动效
- 间距：使用 4px 基础比例。桌面端为 100dvh 网格，包含 248px 频道侧边栏、流式 minmax(0,1fr) 会话区和 248px 成员面板。面板标题高 64px。侧边栏行高 36px，水平内边距 10px；消息行使用 12px 垂直和 20px 水平内边距，头像 36px，文本列间距 12px。保持会话可读性，最大文本宽度 760px。输入框距会话边缘 16px，距底部 12px。
- 圆角：频道行和小按钮使用 8px，字段和表情回应标签使用 12px，输入框使用 14px，弹出层和抽屉使用 16px，头像和状态点使用完整圆形。面板通过边框分隔而非浮动卡片；仅覆盖层使用克制的 0 16px 40px rgb(20 15 30 / 0.18) 阴影。
- 动效：悬停背景、图标颜色、边框颜色、表情回应状态和主题切换使用 140–180ms ease-out 过渡；切勿对完整消息列表持续动画。
- 动效：发送的消息以 160ms 淡入和 translateY(4px) 入场追加，然后平滑滚动到视图中，除非请求减少动效。
- 动效：表情、提及、回应和工作区弹出层以 120ms 不透明度和 scale(0.98 到 1) 过渡打开，锚定到其触发控件。
- 动效：回复面板或移动端抽屉以 180ms ease-out 过渡滑入 12px 到位，并淡入其背景；避免大幅视差或滚动劫持效果。
- 动效：在 prefers-reduced-motion: reduce 下，移除入场、滑动、平滑滚动和主题过渡，同时保留即时状态反馈。
- 图像：不使用照片、生成的位图、库存素材或外部头像服务。丰富的应用 UI 是首屏视觉锚点。绘制八个不同的虚构人物作为原创内联 SVG 几何肖像，具有简单的头肩形状、多样的肤色、发型、服装，以及紫罗兰、珊瑚、赭石、青绿和蓝色背景；不要使用仅首字母头像或类似真实个人。从两个互锁的圆角环创建原创 [BRAND] 标志。界面图标使用 Lucide，表情使用纯系统渲染的 Unicode 字符，绝不使用下载的表情 artwork。

## 页面与区块
### 团队聊天工作区（`index.html`）
1. **应用外壳与本地工作区状态** — 将文档标题设为 '[BRAND] · Team chat'。除非已存在保存的选择，否则以浅色主题启动，并在绘制前用一小段 head 脚本应用已保存的主题。提供六个频道、三个私信会话、八名成员，以及当前登录的虚构用户 'Alex Rivera'。默认选中的频道是 '# project-wander'，由 [PROJECT] 派生而来。其他默认频道为 '# team-room'、'# design-crit'（未读数 3）、'# research-notes'、'# build-log'（未读数 1）和 '# small-talk'。每个频道和私信会话都有各自可信的示例消息；任何一个打开时都不会是空白或未找到状态。所有状态保持在客户端，并让每个可见控件执行真实的本地操作。
   布局：渲染一个 border-box 应用，高度 100dvh、宽度 100%，overflow hidden，在 1440px 下使用 grid-template-columns: 248px minmax(0,1fr) 248px。仅中间列滚动其消息历史；页头、侧边栏和输入区在应用内保持固定。使用语义化的 aside、main、section 和 nav 元素。在频道侧边栏底部放置一个小的可选 [CREDIT] 链接，不干扰产品布局。
   动效：初始工作区完整呈现，没有加载动画。主题切换使用 Design 中的短颜色过渡，绝不闪现无样式内容。
2. **品牌页头与频道侧边栏** — 顶部一行显示原始 loop 标记、Manrope 700 字重的 [BRAND]，以及一个紧凑的主题切换按钮，带 Sun 和 Moon 图标，无障碍标签为 'Switch to dark theme' 或 'Switch to light theme'。其下方是一个工作区按钮，显示 [WORKSPACE]、说明文字 '8 members · 5 online' 和一个 ChevronDown。其菜单包含 'Workspace details' 和 'Reset local demo'；details 打开一个小对话框，说明消息保留在此浏览器中，reset 在恢复原始内容前请求确认。一个带 SquarePen 图标的 'New message' 按钮聚焦输入区。频道区块标签为 'Channels' 和 'Direct messages'。频道使用 Hash 图标，私信使用原始 SVG 头像，选中样式为紫色，未读徽章为小圆角。选择频道会更新页头、消息、成员上下文和输入区占位符，清除该频道的未读徽章，并保留其各自的草稿。
   布局：将左侧面板设为 flex 列，包含 64px 品牌行、工作区块 20px 侧内边距、导航组 12px 内边距。频道行高 36px，间距 8px，标签为 13px 中等字重。将导航放在可滚动的中部，将已登录用户的 36px 头像、姓名、'Available' 状态和 Settings 图标放在 64px 底部行。
   动效：选中的频道和按钮在 140ms 内改变背景和图标颜色。未读徽章仅在选中后以短暂的透明度过渡消失。
3. **会话页头与消息搜索** — 默认视图下，以 Manrope 700 显示 '# project-wander'、主题 'Decisions, critique, and small wins for [PROJECT]'，以及带 '8 members' 的头像堆叠。页头按钮为 Search、Open member list 和 More horizontal。搜索展开为 260px 输入框，标签为 'Search messages'；输入时以不区分大小写的方式过滤当前会话并高亮匹配项，不改变已存储的消息。显示结果计数和 Clear search 按钮。空结果读作 'No messages match “{query}” in this channel.'，并带一个 'Clear search' 操作。More 菜单包含 'View pinned note' 和 'Mark channel unread'；pinned 操作打开项目笔记，mark-unread 在不离开频道的情况下恢复徽章。
   布局：使用 64px 高的 flex 页头，水平内边距 20px，底部一像素边框。将标题和主题放在 min-width-zero 列中，仅截断主题，操作按钮保持 36px 方形。窄屏下，左侧显示 Menu，保留 Search 和 Members 图标，并移除主题而非挤占标题。
   动效：搜索以 160ms 的宽度和透明度过渡展开。弹出菜单使用标准的 120ms 入场，并在外部点击或 Escape 时关闭。
4. **固定项目笔记与消息历史** — 默认历史以一条纤细的淡紫色固定笔记条开始：Pin 图标、'Project note' 和 'Option B is our direction for the critique; keep the notebook switcher visible.'。添加居中的 'Today' 分隔线。渲染全宽消息行，而非对话气泡。默认消息为：09:12 Maya Chen，'Morning! I added the three navigation options to the prototype. Option B keeps the notebook switcher visible without crowding the editor.'，带反应 ✨ 4 和 👍 3 以及一个 '2 replies' 链接；09:15 Jonah Brooks，'Option B also gives us the cleanest route on mobile. I can keep the same hierarchy without a second toolbar.'；09:18 Priya Nair，'That matches the interviews. Five of six participants looked for notebooks before they looked for formatting.'，带反应 🎯 2；09:24 Sofia Alvarez，带一个小 'Decision' 徽章，'Let’s take Option B into today’s critique. I’ll note the trade-off in the project log.'；09:31 Theo Martin，'I trimmed the page transition to 180 ms. It feels responsive without making the notebook jump.'；09:36 Alex Rivera，'The empty state is ready too—one quiet illustration and a single create action.' 仅当同一发送者的连续消息间隔在三分钟内时才合并；否则重复发送者和时间。悬停行时显示 SmilePlus、Reply 和 More horizontal 操作。反应按钮打开一个小表情条；点击任何反应切换当前用户的投票，并更新其计数和选中样式。Reply 打开线程面板。消息 More 包含 'Copy text'，写入剪贴板并在小 toast 中显示 'Message copied'。
   布局：消息滚动区填满页头和输入区之间的所有空间，水平内边距 20px，底部内边距 16px。左侧使用 36px 头像，发送者和时间在同一行，消息文本 14px、行高 1.55，元数据 12px。反应 chip 位于相关消息下方，间距 6px。将悬停操作栏放在行的右上角，带边框表面背景。仅当用户滚动离开底部且有新的本地消息到达时，才包含一个微妙的 'New messages' 胶囊。
   动效：行使用仅背景的悬停反馈。新反应在 120ms 内从 0.96 缩放到 1；发送的消息使用标准的 160ms 入场。不要对预加载的会话做动画或逐字打出。
5. **回复线程面板** — '2 replies' 的默认父消息是 Maya 09:12 的消息。其线程回复为 Jonah 09:14，'I checked the 390px layout—the switcher still fits above the editor.' 和 Maya 09:16，'Perfect. I’ll bring that frame to the critique as well.' 打开任何其他回复操作时，以该消息为父消息，并从其自身存储的回复或诚实的 'No replies yet. Start the conversation.' 状态开始。面板标题为 'Thread'，下方为当前频道，以及一个标签为 'Close thread' 的 X 按钮。底部的紧凑输入区显示 'Reply in thread'，支持 Enter 发送、Shift+Enter 换行，以及相同的 Unicode 表情选择器。线程回复在本地追加并持久化。关闭线程恢复成员目录，不重置会话。
   布局：宽桌面下，用 320px 线程面板替换 248px 成员面板，并让会话吸收宽度差。使用 64px 页头、带边框的父消息块、可滚动的回复列表和最小 88px 的输入区。宽度低于 1180px 时，将线程呈现为成员面板上方 340px 的右侧覆盖层；移动端则变为全宽右侧抽屉。
   动效：面板使用 180ms 水平滑动和淡入，新追加的回复使用 160ms；减少动效模式立即切换。
6. **输入区、提及与表情选择器** — 输入区占位符为 'Message # project-wander'，并随当前频道变化。提供 Plus、AtSign、Smile 和一个带 ArrowUp 图标的紫色 Send 按钮；仅当修剪后的草稿为空时禁用 Send。输入 @ 后跟零个或多个姓名字符会打开匹配成员的提及列表，带头像、姓名、角色和状态。方向键改变活动建议，Enter 或点击插入 '@FirstName LastName'，Escape 关闭。Smile 打开一个 6 列 × 4 行的选择器，包含这些纯 Unicode 表情：😀 😄 😂 🙂 😉 😊 😍 🤔 👍 👏 🙌 🙏 💪 ✨ 🎉 ❤️ 💜 💡 ✅ 🎯 🚀 📌 📝 ☕ 🌿。选择一个会插入到光标处并保持焦点在文本区。Enter 发送非空消息，Shift+Enter 添加换行，发送的消息以当前本地时间显示在 'You · Alex Rivera' 下。在输入时存储每个频道的草稿，在提交时存储发送的消息；不要模拟向他人投递或任何网络请求。
   布局：将输入区锚定在中间窗格内，左右边距 16px、底边距 12px。使用带边框、14px 圆角的表面，文本域最小 44px、最大高度 128px，并随内容增长。将工具图标放在 36px 的底部工具栏中，Send 放在右下角，高度 32px。将提及和表情弹层定位在其控件上方，并限制在视口内；在移动端，表情选择器变为底部抽屉，高度不超过 42dvh。
   动效：弹层以 120ms 缩放并淡入淡出。Send 有轻微的按下缩放 scale(0.97)，已发送消息的入场动画绝不会移动输入区本身。
7. **成员目录与个人资料操作** — 右侧窗格标题为 'Members'，带 Users 图标和数量 8。包含一个标签为 'Find a member' 的搜索输入框，并将结果分组在 'Online — 5'、'Away — 2' 和 'Offline — 1' 下。默认成员为 Maya Chen，Product designer，online；Jonah Brooks，Frontend engineer，online；Priya Nair，Research lead，online；Sofia Alvarez，Product manager，online；Alex Rivera，Content designer，online；Theo Martin，Motion designer，away；Noor Haddad，Accessibility specialist，away；以及 Adrian Okafor，Engineering lead，offline。每一行都有一个原创几何头像和一个状态点。选择某人会打开个人资料弹层，显示其更大的头像、姓名、角色、状态，以及一条具体细节，例如 Maya 的 'Working on notebook navigation'；'Message' 操作会打开或创建该私信会话。筛选会更新可见分组，并在适当时显示 'No members found' 及一个明确的清除操作。
   布局：使用 64px 头部、16px 侧边内边距、36px 搜索框，以及 48px 成员行，头像 36px、间距 10px。姓名使用 13px semibold，角色使用 11px 弱化文本。窗格在需要时独立滚动。个人资料弹层宽 280px，并保持在视口内。
   动效：筛选立即生效，没有列表重排动画。个人资料弹层使用标准的 120ms 缩放并淡入淡出过渡。
8. **响应式抽屉、键盘访问与持久化** — 在 1180px 及以下，默认隐藏成员窗格，并将其作为右侧覆盖层打开；在 820px 及以下，同时隐藏频道侧边栏，并通过头部 Menu 按钮将其作为左侧抽屉打开。两个抽屉都使用带标签的关闭按钮、点击即关闭的非交互背景、Escape 支持、焦点陷阱和 body 滚动锁定。在移动端选择频道会关闭其抽屉。在移动端保持消息文本为 14px，所有触摸目标至少 44px。支持在未输入时按 '/' 聚焦消息搜索，按 Escape 关闭最顶层覆盖层，以及已描述的输入区快捷键。在存储为空或不可用时保存和恢复本地状态且不产生控制台错误。在 390×844 下，显示完整的会话头部、若干可读消息和输入区，且零水平溢出；在 1440×900 下，在首屏显示全部三个窗格、置顶便签、至少五条消息和输入区。
   布局：桌面侧边栏保持固定宽度。覆盖抽屉左侧为 min(320px,88vw)，右侧为 min(340px,92vw)，全应用高度并带安全区内边距。移动端中间列始终为 100% 宽度，并使用 12px 的消息和输入区间距。在缩小发送者姓名或消息文本之前，先隐藏装饰性头像堆叠。
   动效：抽屉滑动 12px 并随其背景在 180ms 内淡入淡出。对于减少动态效果，所有滑动、平滑滚动和非必要过渡均被禁用。

## 资产
- 字体：通过 npm 包 @fontsource-variable/manrope 和 @fontsource-variable/inter（OFL）自托管 Manrope Variable 和 Inter Variable。在 src/main.tsx 中导入本地字体 CSS；不要使用 Google Fonts 或其他字体 CDN URL。
- 图标：使用 lucide-react（ISC）实现 Hash、Search、Menu、Sun、Moon、ChevronDown、SquarePen、Settings、Pin、SmilePlus、Reply、MoreHorizontal、X、Plus、AtSign、Smile、ArrowUp、Users、Check 和 Copy。仅使用系统渲染的 Unicode emoji。不要导入或复制任何专有图标或 emoji 集。
- 图像：不使用任何位图图像，也不请求生成任何资产。八个虚构的几何肖像头像、双环 [BRAND] 标志以及任何微小的空状态插图，均以原创内联 SVG/CSS 在项目中绘制。不要使用图库照片、真实人物肖像、可识别的品牌图像、头像 URL 或占位图服务。

## 不要做
- 不要添加后端、服务器代码、API 路由、身份验证、数据库、websockets、分析、外部 API 或任何真实的消息传递；所有交互和持久化必须在浏览器本地运行。
- 不要从 CDN 或远程 URL 加载脚本、样式、字体、图标、emoji、头像或图片。保持每个运行时资源本地化，并使用相对路径和 Vite base './'。
- 不要使用真实聊天产品名称、标志、口号、品牌标记、专有 emoji 艺术作品、商业字体，或现有聊天产品的精确布局和调色板。
- 不要复制对话、真实用户身份、可识别的头像肖像或现有产品文案。保持所有示例内容虚构，并在提供的变量变化时重写。
- 不要使用 Aceternity UI、Tailwind Plus 或 Tailwind UI、ThemeForest 或 Framer 模板源、复制的组件实现，或没有允许的宽松许可证的依赖项。
- 不要使用仅首字母的成员肖像、库存照片服务、占位图片服务、热链接文件、生成的位图头像，或动漫、游戏、名人或其他真实人物肖像。
- 不要将此变成营销落地页，或添加排版式 hero、定价、推荐语或功能部分；首屏必须保持完整、丰富的聊天应用程序。
- 不要留下可见的按钮、菜单、频道行、反应、回复、成员过滤器、主题控件或编辑器操作无功能；每个提供的控件都必须有客户端结果。
- 不要使用大量对话气泡的消息卡片、玻璃拟态、跨整个面板的渐变、持续的环境动画、滚动劫持，或忽略 prefers-reduced-motion 的动效。
- 不要将日历日期或真实世界时间戳显示为事实性产品数据；仅使用 'Today' 和虚构的示例时间。
- 不要生成源映射、将 src/ 复制到 dist/、使 dist/ 超过 20 MB，或要求超过单个 npm run build 命令来生成生产输出。
- 不要使用裸目录链接或引入需要服务器回退的路由。这是一个自包含的 index.html 应用程序；任何本地导航必须指向 index.html 或哈希路由。
- 不要在产品 UI 内提及 VibeFather，除了侧边栏页脚中可选的小型 [CREDIT] 链接。

---
— Prompt by VibeFather · https://vibefather.ai/t/team-chat-app-interface · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
