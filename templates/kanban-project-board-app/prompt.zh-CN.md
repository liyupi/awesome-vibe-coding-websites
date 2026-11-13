> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 看板项目面板应用（Kanban Project Board App）

请完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BOARD] 打造的单页看板，这个团队正在规划 [PROJECT]。四列；在列之间拖动卡片（手写指针拖拽），或从键盘菜单移动卡片；在详情弹窗中打开卡片以编辑所有内容；按搜索、标签或逾期筛选；内联添加卡片；所有内容都持久化在 localStorage 中，Reset board 操作可恢复示例看板。单页，index.html；一切都不离开浏览器。

- 受众：一个小团队（3–5 名虚构队友）以及任何想让自己的每周安排一目了然的人：看板必须能在五秒内读懂，并且绝不丢失卡片。
- 目标：让计划显得尽在掌握。十秒内访客拖动一张卡片并感受到物理手感；一分钟内他们已打开一张卡片、勾选一个子任务并筛选到逾期。
- 语气：队友式随性：卡片标题是祈使句且简短，空列里有一个温和的玩笑。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/bricolage-grotesque（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化（Setup）：
  - 使用 react-ts 模板通过 npm create vite@latest 脚手架创建（如果最新模板面向更新的主版本，则固定版本），然后保留一个真实的 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist'，sourcemap false，assetsInlineLimit 0 }。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的每种颜色以 kebab-case 键添加到 theme.extend.colors（board、panel、card、line、ink、softink、spruce、spruce-deep、spruce-mist、clay、ochre、plum、moss、slateink、good），并设置 fontFamily display ['Bricolage Grotesque Variable', 'system-ui', 'sans-serif']、sans ['Inter Variable', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 12px，并添加 maxWidth { shell: '1480px' }。
  - 在 src/fonts.ts 中导入 '@fontsource-variable/bricolage-grotesque' 和 '@fontsource-variable/inter'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（看板标题、队友、标签集、预置卡片和每个标签，带类型——cards: { id, title, desc, labels: string[], due: 'today'|'tomorrow'|'in 3 days'|'next week'|null, done?: boolean, assignees: string[], checks: { text, done }[] }）、src/lib/brand.ts（boardSlug = [BOARD] 转为小写，并将每一段非字母数字字符替换为 '-'，storageKey = boardSlug + ':board'）、src/lib/storage.ts（用 try/catch 包裹的安全 localStorage get/set）、src/lib/due.ts（dueSort 和逾期标志基于固定的演示 'today' 锚点计算——看板自带哪些卡片已逾期的静态参考，因此无需实时时钟：每张卡片的逾期状态是其数据的一部分）。
  - 状态（State）：src/store/board.ts 是一个小型外部 store（useSyncExternalStore），持有 { columns: { id: 'backlog'|'week'|'progress'|'done', cardIds: string[] }, cards: Record<id, Card>, filters: { q, labels: string[], overdueOnly } }，持久化在 storageKey 下；动作：moveCard、addCard、updateCard、deleteCard（带撤销载荷）、toggleCheck、resetBoard。
  - 拖放（Drag-and-drop）位于 src/lib/dnd.ts + src/components/Board.tsx：使用 Pointer Events 手工实现（在卡片的抓取手柄上 pointerdown → setPointerCapture，pointermove 更新固定定位的幽灵元素，用 getBoundingClientRect 对列矩形进行命中测试，pointerdrop 提交 moveCard）。拖动时：幽灵元素倾斜 2deg 并增加柔和阴影；悬停的列获得 Spruce Mist 淡色覆盖且其边缘发光；源槽位保留一个 1px Line 占位符。当指针接近边缘时自动水平滚动看板。如果指针类型为触摸，则要求使用手柄以避免滚动冲突。在 prefers-reduced-motion 下，幽灵元素跟随但不倾斜、无阴影（放下时无动画）。Escape 取消进行中的拖动。
  - src/components/ 中的组件：Topbar.tsx（Wordmark、ResetButton）、FiltersBar.tsx（SearchInput、LabelChip、OverdueToggle）、Board.tsx（Column.tsx 含 ColumnHeader.tsx、Composer.tsx、CardTile.tsx 含 DueChip.tsx、LabelDot.tsx、AssigneeDots.tsx、CardMenu.tsx）、CardModal.tsx（TitleField.tsx、DescField.tsx、LabelPicker.tsx、DuePicker.tsx、CheckList.tsx）、Toasts.tsx。src/pages/BoardPage.tsx 组合它们。
  - CardTile：Panel 卡片，14px Inter 500 标题（2 行截断），一行 LabelDots（8px 圆点，带标题工具提示），一行脚部 DueChip（等宽 11px；逾期为 Clay，即将到期为 Ochre，已完成为 Moss 并带删除线）+ 清单计数（'2/5'）+ AssigneeDots（18px 首字母圆圈，重叠，显示两个然后 +N）。悬停上浮 2px；抓取手柄（GripVertical）在悬停时出现，触摸时始终显示。
  - CardMenu：一个小型下拉菜单（卡片上的 ChevronDown）：'Open card'、'Move left'、'Move right'、'Delete'。所有操作都有键盘路径。
  - CardModal：居中的 560px 面板覆盖在遮罩上；捕获焦点；Escape 关闭；字段在失焦时实时保存并显示细微的已保存勾选；CheckList 切换时动画删除线；Delete 在移除提交前显示撤销 toast（3s）。
  - Composer：每列一个 '+ Add card' 幽灵行，内联展开为标题输入 + Add/Cancel（Enter 添加并保持 composer 打开以输入下一张卡片）。
  - public/favicon.svg 如资源（Assets）部分所述。index.html：lang en，<meta name='theme-color' content='#EFEAE0'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[BOARD] — board</title>。
  - 在项目根目录编写 ASSETS.md，如资源（Assets）部分所述。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体和 favicon.svg。保持在 4 MB 以下。

## 变量
- [BOARD] — 看板名称（默认：“Kettle Launch”）。虚构的看板/项目名称。用于字标、标题标签和 localStorage 键。绝不是真实的产品或公司。
- [PROJECT] — 计划的内容（默认：“a small kitchen-goods product launch”）。一个描述该工作的小写短语。重写顶栏简介、所有卡片标题和子任务，使看板对该项目而言读起来真实可信。保持具体。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/kanban-project-board-app（默认：是；删除此行即可移除）

Pages & Sections 下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- Board `#EFEAE0` — 页面背景 — 暖纸色。
- Panel `#FBF9F4` — 列背景。
- Card `#FFFFFF` — 卡片、模态框、输入区。
- Line `#E2DCCE` — 1px 细线：列边框、分隔线、占位符轮廓。
- Ink `#22201B` — 标题、正文、图标。
- Soft Ink `#6B665B` — 计数、提示、空状态、占位符文本。
- Spruce `#3E6B5A` — 唯一强调色：按钮、列计数标签、焦点环、拖拽光晕。
- Spruce Deep `#2F5346` — 主按钮的悬停与按下态。
- Spruce Mist `#E3EBE6` — 拖拽悬停时的列底色、选中的标签标签。
- Clay `#C0603A` — 标签 1 和逾期标签。
- Ochre `#C9931B` — 标签 2 和即将到期标签。
- Plum `#8B5CB8` — 标签 3。
- Moss `#7B8F4A` — 标签 4 和完成状态。
- Slate Ink `#10201A` — Spruce 填充上的文字。
- Good `#4E8D5B` — 成功提示、已保存对勾。

### 排版（Typography）
- 展示字体：顶栏字标、列标题、模态框标题 — Bricolage Grotesque，温暖且略带俏皮：Bricolage Grotesque (OFL)，字重 400/600
- 文本与 UI：卡片标题、正文、按钮、到期标签 — Inter：Inter (OFL)，字重 400/500/600

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。外壳最大宽度 1480px，内边距 28px（900px 以下为 16px）。列：最小宽度 300px，间距 20px，溢出时水平滚动；列头 40px；卡片堆叠间距 12px；卡片内边距 14px。字号层级：字标 20px Bricolage 600；列标题 15px Bricolage 600，配等宽风格计数标签；卡片标题 14px Inter 500；提示 12.5px Soft Ink；到期标签 11px 600 等宽数字。按钮：高度 36px，Inter 600 13px；主按钮 Spruce 填充配 Card 文字色，幽灵按钮 1px Line 边框。输入框：高度 38px，Card 填充，1px Line 边框，聚焦时 Spruce 边框 + 2px 偏移环。全局焦点：2px Spruce 轮廓，3px 偏移。
- 圆角：列和模态框 12px；卡片、输入区、按钮 10px；标签、圆点和提示 999px。
- 动效：缓动：卡片落下使用弹簧（stiffness 320, damping 28）；其他位置使用 --ease-out cubic-bezier(0.22, 0.61, 0.36, 1)。看板应像毛毡上的纸 — 快速，回弹过冲不超过 2%。
- 动效：拖拽：拖拽幽灵在 120ms 内抬起（scale 1.02、2deg 倾斜、柔和阴影）；悬停的列在 120ms 内以 Spruce Mist 泛染；放下时以弹簧提交（200ms 稳定）；腾空槽位的占位符淡入。
- 动效：视图加载：列以 60ms 错峰上升 10px；内部卡片错峰 25ms。
- 动效：卡片交互：悬停上浮 2px（120ms）；抓取手柄淡入；勾选子任务时文字删除线（180ms）并弹出计数。
- 动效：通过菜单移动：卡片滑向新列（布局动画，260ms 弹簧）— 与放下走同一提交路径。
- 动效：筛选：不匹配的卡片在原位淡至 22% 并下沉 2px（160ms）— 绝不重排移走；列计数保持诚实（'3 of 7 shown'）。
- 动效：模态框：遮罩淡入 160ms；面板以弹簧从 0.97→1 缩放；Escape 反向执行两者。
- 动效：提示：180ms 内上升 8px，带 3s 自动消失条；点击时撤销立即提交。
- 动效：prefers-reduced-motion: reduce — 幽灵无倾斜/阴影，无布局滑动（卡片跳变），无错峰；筛选仍然变暗；看板保持完全可用。在 index.css 中使用 CSS @media 加上 Motion 的 useReducedMotion。
- 图像：无照片、无头像、无标志：被分配人是首字母圆点，标签是彩色圆点，所有字形均为 lucide 或内联 SVG。图标：仅 lucide-react，描边宽度 1.75。

## 页面与区块
### 看板（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均针对默认值编写（[BOARD] = Kettle Launch，[PROJECT] = 一个小型厨房用品产品发布）。将每个字符串、队友、标签和卡片放入 src/content.ts 并从中渲染。如果任何变量不同，请重写所有卡片标题、描述、子任务和顶栏简介，使其对该项目具体且可信，同时保持相同的结构和数量（4 列；共 11 张卡片——3 张待办、3 张本周、3 张进行中、2 张已完成；4 个标签；4 名队友）。队友（首字母）：'AR' Alina Rios；'JT' Jonah Tan；'PV' Priya Verma；'MB' Marcus Brand。标签：'design' Clay；'copy' Ochre；'build' Plum；'ops' Moss。卡片——待办：'Photograph the pour-over set'（标签 design、ops；截止下周；AR；检查项：'borrow backdrop'、'charge lights' 0/2）；'Write the launch note'（copy；截止 null；JT；0/3：'draft'、'edit'、'proofread'）；'Pick packaging insert card'（design；截止 3 天后；AR；0/2）。本周：'Lock the bundle price'（ops；截止明天；MB；0/2）；'Size chart for enamel mugs'（design；截止明天；PV；1/3）；'Order mailer boxes (200)'（ops；截止 3 天后；MB；0/1）。进行中：'Build the product page'（build；截止明天；JT+PV；2/5）；'Cut the 20s kettle film'（build；截止今天，标记为 OVERDUE 的示例；AR；1/4）；'Proof the checkout flow'（build；截止 3 天后；JT；0/3）。已完成：'Choose the name'（copy；已完成；AR+JT；3/3，截止下周）；'Sign the co-packer'（ops；已完成；MB；2/2，截止下周）。逾期状态随卡片数据一起提供（一张故意逾期的卡片，以便筛选器演示）；不根据真实时钟计算任何内容。
   布局：不适用
   动效：不适用
2. **顶栏** — 左侧：字标 '[BOARD]'（Bricolage 600 20px Ink）位于 'Planning [PROJECT]'（12px Soft Ink）上方。右侧：一个实时 'overdue: 1' 标签（Clay，仅当存在逾期卡片且未被筛选掉时显示）、一个幽灵 'Reset board' 按钮（RotateCcw）带确认弹出框（'Restore the sample board? Your changes go away.'），以及一个保存指示器：一个小 Good 圆点 'Saved in this browser'。
   布局：粘性顶部，64px，Board 底色 92% 带背景模糊，Line 底边框。
3. **筛选栏** — 顶栏下方一行：SearchInput（'Search cards…'，高度 38px）；四个 LabelChips（圆点 + 名称；选中时填充 Spruce Mist 并带 Spruce 边框）；一个 OverdueToggle 开关（'Only overdue'）；以及诚实的计数行 'Showing 11 of 11'。筛选器实时生效；计数更新为 'Showing 2 of 11'。
   布局：Flex 行，在 900px 以下换行；位于看板滚动区域上方，不粘性。
4. **看板与列** — 四列并排（窄屏上水平滚动）：Backlog（圆点 Soft Ink）、This week（Ochre）、In progress（Clay）、Done（Moss）。ColumnHeader：名称（Bricolage 600 15px）、计数标签（12px，Line 边框），以及——仅在 'In progress' 上——一个 WIP 提示标签 'wip 3/4'，在达到 4 时变为 Clay。卡片以 CardTiles 堆叠；每列以各自的 Composer（'+ Add card'）结尾。空筛选状态（所有卡片变暗）保持列位置不变。空列状态：'Nothing here — enjoy it while it lasts.'
   布局：列最小宽度 300px，Panel 填充，1px Line 边框，12px 圆角，14px 内边距；看板区域水平滚动，带细微的 Line 滚动条。
5. **卡片模态框与提示消息** — CardModal：TitleField（Inter 600 17px，contenteditable 风格输入框）、DescField（文本域，3 行）、LabelPicker（四个标签）、DuePicker（五个示例选项的下拉选择：— / today / tomorrow / in 3 days / next week）、CheckList（带删除线动画的切换行，内联 'Add item'）、负责人圆点（只读行），以及 Delete（Ruby 幽灵按钮）带撤销提示消息。提示消息堆叠在底部居中：撤销（'Card removed — Undo'）、通过菜单移动后的补货式确认（'Moved to Done'），以及重置（'Sample board restored'）。
   布局：模态框居中，最大宽度 560px，Card 填充，20px 内边距；遮罩 32% Ink；提示消息最大宽度 420px。

## 资产（Assets）
- 图片（image）：不使用照片或下载的图片：圆点、标签、图块和 favicon 均以代码绘制。不要获取或热链任何内容。
- 图片（image）：在项目根目录写入 ASSETS.md，列出以代码绘制的资产（标签圆点、首字母圆点、到期标签、favicon——“以代码绘制，原创”）以及 npm 包：@fontsource-variable/bricolage-grotesque 和 @fontsource-variable/inter（OFL-1.1）以及 lucide-react（ISC）。
- 图标（icon）：仅使用 lucide-react：Check、ChevronDown、GripVertical、Plus、RotateCcw、Search、Trash2、X。描边宽度 1.75，14–20px，颜色继承。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的圆角方块填充 #3E6B5A，三根高度不同的白色圆角柱（一个看板字形）。不使用品牌标志。
- 字体（font）：安装 @fontsource-variable/bricolage-grotesque 和 @fontsource-variable/inter，并按“设置（Setup）”中所列在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包进 dist/。

## 禁止事项
- 无后端、无表单提交、无对 API 的 fetch 请求：看板通过 board key 持久化到 localStorage；Reset 恢复示例看板。
- 每个内部链接都指向文件名或应用内操作（./index.html）——绝不指向裸目录；只有一个页面。
- 不使用真实项目工具或其 UI（Trello、Linear、Jira、Notion、Asana）：列、标签和卡片均为虚构；无“kanban”厂商标识。
- 不使用拖放库（dnd-kit、react-beautiful-dnd）：指针事件按规范手写实现，并提供基于菜单的键盘回退方案。
- 不使用真实时钟的日期：到期标签为固定的示例字符串，逾期状态随卡片数据提供，且不打印今天的日期或年份。
- 不使用照片、人物、头像：受指派者为标签色填充上的首字母圆点。
- 一切自托管：字体通过 Fontsource，图标以 npm 包或内联 SVG 形式提供。不使用 CDN 的 <script> 或 <link> 标签，不使用 Google Fonts，不使用分析工具。
- 生产构建：压缩、无 source map、不将 src/ 复制进 dist/、单条命令 npm run build、输出位于 dist/ 且小于 4 MB。
- 除页脚署名行 'Built with a VibeFather template' 链接 https://vibefather.ai 外，绝不在站内提及 VibeFather……——而是将其放在 Reset 弹出层的底部，作为一行低调文字。
- 遵循 prefers-reduced-motion：无倾斜/阴影滑动或布局动画；拖放立即提交；筛选仍会变暗。
- 应用必须在 1440x900 桌面端和 390x844 移动端（列垂直堆叠并配有列切换器）下正常工作，且控制台零错误；拖拽、菜单移动、模态框、筛选和编辑器均须仅用键盘即可操作，并具有可见的焦点环。
- 无障碍：卡片为按钮，其 aria-label 携带其状态（列、标签、到期）；拖拽通过 aria-live 播报移动；模态框捕获焦点；标签颜色绝不单独承载含义（圆点与名称配对）。

---
— Prompt by VibeFather · https://vibefather.ai/t/kanban-project-board-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
