> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 个人预算仪表盘（Personal Budget Dashboard）

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [OWNER_NAME] 构建一个原创、完整的个人预算应用，品牌名为 [BRAND]，其示例计划围绕 [BUDGET_CONTEXT]。使用包含分类环形图和每日支出图表的月度概览、可搜索和筛选的交易台账、带进度条的可编辑预算目标，以及一个无障碍的添加交易对话框。为 [SAMPLE_MONTH] 填充可信的固定数据，用 [CURRENCY] 格式化金额，并将交易和目标持久化到 localStorage。精致的应用工作区是首屏视觉锚点；不要添加营销主视觉区。

- 受众：希望了解月度计划并练习完整预算工作流程的个人、学生、家庭和自由职业者，无需注册、关联金融账户或将个人数据发送到服务。
- 目标：让访客一眼了解示例月份，找到任意交易，调整分类目标，添加收入或支出，并在重新加载前后看到所有依赖数字和图表正确更新。
- 语气：平静、精确、鼓励且不带评判。使用简短实用的标签和通俗的辅助文本。绝不要因超支而羞辱用户、承诺储蓄、提供财务建议，或暗示示例数据来自真实账户。

## 技术栈（Stack）
- 框架（Framework）：Vite 6 + React 19 + TypeScript
- 样式（Styling）：Tailwind CSS 4.1
- 库（Libraries）：motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、@fontsource-variable/fraunces（OFL）、@fontsource-variable/inter（OFL）、@fontsource/ibm-plex-mono（OFL）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置（Setup）：
  - 将 Vite base 设为 './'，build.sourcemap 设为 false；将压缩后的静态文件输出到 dist/，使用相对资源路径，且不将 src/ 目录复制进去。
  - 使用 Tailwind CSS 4 及其 Vite 插件。在 src/index.css 中定义 Design 中的颜色、字体、圆角、阴影和动效令牌（token）；使用 CSS 媒体查询实现响应式布局和 prefers-reduced-motion。
  - 将所有文案、变量值、分类元数据、商户、交易、预算目标、图表标签和空状态文本保留在 src/content.ts 中。当 [BRAND]、[OWNER_NAME]、[BUDGET_CONTEXT]、[CURRENCY] 或 [SAMPLE_MONTH] 发生变化时，重写所有依赖上下文的雇主、商户、备注、所有者标签、示例日期和存储命名空间，确保不残留任何家庭特定或自由职业特定的过期内容。
  - 在 src/lib/budget.ts 中定义规范的 Transaction 和 CategoryBudget 类型。金额以整数最小货币单位存储，仅在输入边界处保持收入为正、支出为负，并通过纯函数推导所有总计、图表序列、百分比、目标状态和筛选后的行。切勿将展示的 KPI 与交易数据分开硬编码，也切勿渲染 NaN。
  - 在不引入额外依赖的情况下实现一个小型哈希路由（hash router）：./index.html 和 ./index.html#/overview 显示 Overview，./index.html#/transactions 显示 Transactions，./index.html#/goals 显示 Goals。未知哈希返回 Overview。在视图切换时保留共享外壳（shell）和本地数据。
  - 在 src/lib/storage.ts 中创建一个带版本的 localStorage 仓库，其命名空间由 [BRAND] 派生。仅当不存在有效的已保存数据集时才进行种子初始化（seed），在每次变更后持久化交易和已编辑目标，对格式错误的 JSON 以及存储或配额错误以非阻塞消息进行防护，并让 Reset demo data 在确认后恢复由变量派生的种子数据。
  - 为 Add transaction、Adjust target 和 Reset confirmation 使用原生 dialog 元素或同等完整的无障碍实现：可见标签、初始焦点、焦点陷阱（trapped focus）、Escape 关闭、关闭按钮、焦点返回调用者，以及打开时禁止背景交互。
  - 使用内联 SVG 或 CSS 从派生数据绘制环形图（donut）、每日支出柱状图和目标进度可视化。提供文本等价物和无障碍名称；图表悬停或点击详情可以增强体验，但绝不能替代可见数值。
  - 使用包含 [BRAND] 的纯文档标题、一个原创的本地 SVG favicon，以及在项目根目录放置 ASSETS.md，列出代码绘制的可视化内容以及每个字体和图标包，包含包路径、上游来源、作者和许可证。

## 变量
- [BRAND] — 预算应用品牌（默认：“Willowsum”）。虚构的产品名称，用于字标、文档标题和 localStorage 命名空间。
- [OWNER_NAME] — 示例预算所有者（默认：“Maya Chen”）。虚构人物，其名字和首字母用于个性化工作区；不使用肖像或真实个人数据。
- [BUDGET_CONTEXT] — 示例预算背景（默认：“a two-income household”）。简短的小写短语，用于驱动示例收入来源、商户、备注和一个弹性支出类别。
- [CURRENCY] — 显示货币（默认：“USD”）。仅用于本地数字格式化的 ISO 货币代码；更改它不得声称按汇率换算数值。
- [SAMPLE_MONTH] — 主要示例月份（默认：“May 2026”）。所有默认日期和标题的固定示例月份；在不读取真实时钟的情况下推导上一个和下一个示例月份。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接指向 https://vibefather.ai/t/personal-budget-dashboard（默认：是；删除此行以移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块键控，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 画布（Canvas）`#F3F0E7` — 温暖的象牙色应用背景。
- 面板（Panel）`#FFFDF8` — 摘要带、图表、账本、对话框和目标区域。
- 森林（Forest）`#183B32` — 导航栏、主按钮、激活状态和收入文本。
- 柔和森林（Forest Soft）`#DCE8DF` — 选中的导航项、正向状态背景和细微高亮。
- 墨色（Ink）`#202722` — 标题、正文和交易金额。
- 柔和色（Muted）`#626D65` — 次级标签、注释、坐标轴和辅助文本。
- 分隔线（Rule）`#D8DDD3` — 细线边框、表格线、输入框边框和图表网格线。
- 黄绿色（Chartreuse）`#DCE9A8` — 仅用于小额预算剩余高亮和原始品牌标志细节，绝不用于正文。
- 住房（Housing）`#2E5B4C` — 住房环形图分段和类别标记。
- 杂货（Groceries）`#7B9870` — 杂货环形图分段和类别标记。
- 交通（Transport）`#769A9D` — 交通环形图分段和类别标记。
- 餐饮（Dining）`#C97455` — 餐饮环形图分段和类别标记。
- 公用事业（Utilities）`#D0A24D` — 公用事业环形图分段和类别标记。
- 健康（Health）`#A66558` — 健康环形图分段和类别标记。
- 休闲（Leisure）`#8D7892` — 休闲环形图分段和类别标记。
- 灵活（Flexible）`#6E8293` — 家庭或特定情境类别环形图分段和标记。
- 危险（Danger）`#A34F39` — 超预算文本、破坏性操作和验证错误，具有可读对比度。

### 排版
- 页面标题、主要总计和编辑性数字：Fraunces Variable（OFL），字重 500/600
- 导航、控件、标签、正文、表格和对话框：Inter Variable（OFL），字重 400/500/600/700
- 交易 ID、日期、图表刻度和右对齐货币值：IBM Plex Mono（OFL），字重 400/500

### 布局与动效
- 间距：使用 4px 基础比例。桌面侧边栏为 232px，顶部工具栏为 64px，主内容有 32px 内边距和 1480px 最大宽度，面板使用 24px 内边距，主要区块有 24px 间隙。页面标题为 Fraunces 34px/1.1，字重 600，KPI 数字为 Fraunces 30px，字重 600，正文和表格文本为 Inter 14px/1.5，标签为 12px，字重 600。桌面端控件高度至少 40px，移动端至少 44px。低于 900px 时主内边距使用 20px；在 390px 时使用 16px 内边距、16px 面板内边距和 12px 字段间隙。
- 圆角：主要面板和对话框使用 14px，输入框和按钮使用 9px，小类别色块使用 6px，999px 仅用于紧凑状态标签和进度轨道。将摘要保持为一条带分隔线的带状区域，而不是悬浮卡片网格；避免玻璃效果、发光和过多的胶囊形容器。
- 动效：悬停、聚焦、激活导航、筛选标签和按钮状态使用 120–160ms ease-out 过渡；计算数字始终立即更新。
- 动效：在首次渲染概览时，环形图以 450ms stroke-dashoffset 动画显现，每日柱状图以 350ms 上升 6px 显现，每根柱子的错开时间不超过 8ms。
- 动效：哈希视图切换时，传入内容在 160ms 内交叉淡入并平移 5px，不移动共享导航，也不延迟交互。
- 动效：对话框的遮罩淡入，面板在 180ms 内向上移动 8px；目标或交易变化后，目标条在 300ms 内插值宽度。
- 动效：Toast 上升 8px 并在 160ms 内淡入，保持可读至少 4 秒，且可手动关闭。
- 动效：在 prefers-reduced-motion 下，移除图表绘制、错开、滑动和插值；立即渲染最终状态，同时保留所有聚焦和状态变化。
- 图像：不使用照片、库存图片、生成图像、头像或外部插图。丰富的预算界面是视觉锚点：森林色导航栏、带分隔线的财务摘要、大型多分段 SVG 环形图和密集的每日支出图表。绘制一个原创的 [BRAND] 标志，为 28px 森林色方块，包含三条象牙色账本线和一条黄绿色圆点。使用简单的几何类别图标和所有者姓名首字母仅作为功能性 UI 点缀。Lucide 提供界面图标；不使用银行、卡组织、商户或支付服务标志。

## 页面与区块
### 月度概览（`index.html`）
1. **规范内容与默认算术** — 以下所有文案均针对默认变量。[OWNER_NAME] 为 Maya Chen，[BUDGET_CONTEXT] 为双收入家庭，[CURRENCY] 为 USD，[SAMPLE_MONTH] 为 2026 年 5 月。精确播种 30 笔 5 月交易。收入：5 月 1 日 Alder & Finch Studio +4200.00 和 5 月 1 日 Fieldnote Workshop +2600.00，合计 6800.00。住房：5 月 1 日 Rowan House Properties 1850.00。杂货：5 月 2 日 Hearth Market 148.62，5 月 9 日 Hearth Market 162.45，5 月 16 日 Orchard Pantry 171.38，5 月 23 日 Hearth Market 160.35，合计 642.80。交通：5 月 3 日 CityLine Transit 64.00，5 月 11 日 Fable Fuel 72.40，5 月 24 日 CityLine Transit 50.00，合计 186.40。餐饮：5 月 5 日 Juniper Coffee 18.75，5 月 8 日 Saffron Table 86.00，5 月 17 日 Bluebird Diner 64.00，5 月 27 日 Juniper Coffee 22.00，5 月 29 日 Saffron Table 74.00，合计 264.75。公用事业：5 月 6 日 Cedar Power 142.60，5 月 14 日 Clearwater Utility 88.00，5 月 20 日 Northline Internet 65.00，5 月 22 日 Alder Mobile 47.00，合计 342.60。健康：5 月 4 日 Alder Health Plan 300.00，5 月 10 日 Elm Pharmacy 45.00，5 月 18 日 Harbor Dental 140.00，5 月 26 日 Elm Pharmacy 35.00，合计 520.00。休闲：5 月 7 日 North Window Cinema 32.00，5 月 13 日 Paper Fox Books 46.00，5 月 21 日 Riverbend Records 58.00，5 月 30 日 North Window Cinema 70.00，合计 206.00。家庭：5 月 12 日 Little Sprout Supplies 84.00，5 月 19 日 Community Swim School 72.00，5 月 28 日 Little Sprout Supplies 45.00，合计 201.00。支出合计 4213.55。月度分类目标为住房 1850、杂货 750、交通 300、餐饮 250、公用事业 400、健康 550、休闲 250、家庭 450，合计 4800.00。派生标题数值为计划剩余 586.45 和支出后 2586.45。在 src/content.ts 中为每一行提供简短具体的备注，例如 Weekly produce、Monthly pass 或 Checkup and cleaning。同时为上一个和下一个样本月份播种显式、固定的 12 行数据集，具有连贯的变化且无运行时随机性；保留相同的目标。当变量变化时，保留计数和算术规则，但重写所有收入来源、商户、备注、必要的分类标签以及日期，以适配 [BUDGET_CONTEXT] 和 [SAMPLE_MONTH]。
   布局：此区块定义数据和文案，而非可见的独立面板。从这一单一规范状态渲染所有可见视图。日期为固定样本日期，绝不从 Date.now 生成或呈现为今天。
   动效：无；派生值在每次变更后同步更新。
2. **共享应用外壳与本地状态** — 森林色侧边栏包含原始 [BRAND] 标记、[BRAND]、描述符 Personal budget，以及三个导航项：Overview、Transactions 和 Goals。活动项使用 Forest Soft 配 Forest 文字和 3px Chartreuse 前导规则。底部显示由 [OWNER_NAME] 派生的小型所有者字母组合、默认情况下的标签 Maya's budget，以及诚实的本地状态 Local only · no bank connected。顶部工具条包含围绕 [SAMPLE_MONTH] 的上月和下月箭头、一个弱化的 Sample data 标签、Reset demo data，以及主按钮 Add transaction。导航仅限于显式播种的上月、当前月和下月，并在边界处禁用箭头。Reset 打开一个确认框，说明此浏览器中添加的条目和目标编辑将被替换。使用纯标题 [BRAND] — Personal budget。
   布局：使用固定的 232px 全高森林色侧轨和粘性的 64px Panel 工具条，底部带 Rule 边框。主内容填充剩余宽度。低于 900px 时将侧轨折叠为 68px 图标轨，带可访问的工具提示；低于 640px 时替换为固定的底部三项导航栏，将所有者字母组合移入工具条，并添加足够的底部内边距，确保内容永不被遮挡。在 390px 时，Reset 保持为仅图标带标签的按钮，月份标签不换行，Add transaction 为紧凑的主按钮。
   动效：活动导航和按钮使用 120ms 颜色过渡。移动端导航不横跨屏幕滑动，且绝不覆盖对话框或提示。
3. **月度摘要与图表工作区** — 以眉题 MONTHLY PLAN、H1 May overview、辅助文字 A clear view of where your money went，以及小型派生状态 88% of plan used 开头。一条带分隔线的摘要带显示 Income 6800.00、Spent 4213.55、Left in plan 586.45 和 After spending 2586.45，配以简洁标签；第三个单元格获得 Chartreuse 淡色填充，而非单独的浮动卡片。下方左侧面板标题为 Where May went，包含一个以 4213.55 Total spent 为中心的大型八段环形图，以及列出每个分类、金额和派生百分比的图例。点击或键盘激活分类图例行将导航到 Transactions 并应用该分类筛选。右侧面板标题为 Daily spending，显示按天分组的 31 个手绘 SVG 条形、154.84 处的虚线每日预算参考线、派生的 Daily average 135.92，以及可见备注 Sample month · fixed data。悬停或键盘聚焦条形时，在附近工具提示中显示其日期和支出总额；无支出的日期具有零高度基线。
   布局：将 H1 行保持在工具条下方 84px 以内。摘要带为单个 Panel，四个等宽单元格由垂直 Rule 线分隔。图表网格为 5fr 7fr，间距 24px，等高面板约 350px。在宽度允许时将 210px 环形图置于图例左侧，否则居中置于两列图例上方。每日条形填充响应式 640×220 viewBox，轴为 16px，水平参考线可见。在 1100px 时堆叠两个图表面板；在 640px 时摘要单元格变为两行两列，带水平和垂直分隔线。在 390px 时使用 176px 环形图、至少 40px 高的单列图例行，以及水平响应式图表，无页面级水平滚动。
   动效：使用 Design 中的首次渲染环形图和条形显现。工具提示即时出现以跟踪焦点，无弹跳数字或循环动画。
4. **预算监控与最近活动** — 左下 Budget watch 面板显示需要关注的三个分类：Dining 为 264.75 / 250.00，显式文字 14.75 over；Housing 为 1850.00 / 1850.00，Target reached；Health 为 520.00 / 550.00，30.00 left。每个都有带标签的进度条和文字状态，而非仅靠颜色。View all goals 打开 ./index.html#/goals。右下 Recent activity 面板列出六笔最新的 5 月支出，包含商户、分类、固定样本日期和带符号金额；View all 打开 ./index.html#/transactions。添加、删除或编辑目标会立即更新这些列表和进度状态。
   布局：使用平衡的 1fr 1fr 网格，间距 24px，Panel 内边距 24px，紧凑的带分隔线行，不嵌套装饰性卡片。低于 1000px 时堆叠面板。最近交易金额在 IBM Plex Mono 中右对齐，允许商户名称截断并带有效的 title 属性，而非将布局横向撑开。
   动效：目标条仅在数据变化后插值。行使用 120ms 背景悬停，无滚动劫持或视差。
5. **添加交易与共享反馈** — Add transaction 打开一个标题为 Add a transaction 的对话框，辅助文字为 This entry stays in this browser。使用 Expense / Income 分段控件、必填 Amount、必填 Merchant or source、包含八个默认支出分类和 Income 的 Category 选择器、必填 Date 默认为 2026 年 5 月 15 日，以及最多 120 字符的可选 Note。默认分类为 Groceries。验证金额为所选货币精度内的正有限数，商户或来源为 2–60 个修剪后的字符，日期为三个播种样本月份之一的真实日期。显示内联错误并聚焦第一个无效字段。Save transaction 添加稳定的唯一 ID，关闭对话框，持久化状态，更新所有视图，并在 aria-live 提示中显示 Transaction added。将访客留在当前视图。包含次要的 Cancel 操作，验证失败时绝不清除已输入的值。
   布局：使用居中的 480px 对话框，内边距 24px，可见的关闭按钮，两列的 Amount 和 Date 字段，以及全宽的 Merchant、Category 和 Note 字段。在 390px 时使用底部抽屉，高度不超过 92vh，内边距 20px，单列字段，44px 控件，以及粘性操作行。打开时捕获焦点并阻止背景滚动。
   动效：对话框和提示遵循 Design，在减少动效下变为即时。绝不对已保存金额做动画或延迟持久化。

### 交易（`#/transactions`）
1. **账目工具栏与结果摘要** — 显示眉题 MONEY IN AND OUT、H1 标题 Transactions，以及默认辅助说明 30 entries in May 2026。工具栏包含一个搜索字段，标签为 Search transactions，占位符为 Search merchant or note；一个 Category 选择器，包含 All categories 以及八个分类；一个 Income / Expense / All types 分段控件；以及一个 Sort 选择器，包含 Newest first、Oldest first、Amount: high to low 和 Amount: low to high。仅在筛选器激活时显示派生结果行 Showing 30 of 30 entries 和 Clear filters 操作。从 Overview 分类图例进入时，应用该分类并将焦点置于结果标题而非搜索字段。
   布局：标题保持左对齐，将 Add transaction 放在标题行右侧。在一个 Panel 工具栏内，搜索字段使用灵活的 2fr 宽度，其他控件使用紧凑的 1fr 列。低于 1000px 时控件换行为两列；在 390px 时使用单列，并使类型分段等宽，目标尺寸为 44px。
   动效：筛选更新即时生效，行以 120ms 的细微交叉淡入呈现；本地筛选不要使用加载旋转指示器。
2. **可搜索的交易账目** — 在语义化表格中渲染筛选后的规范行，列为 Date、Merchant、Category、Note 和 Amount。日期使用简短的固定格式，如 May 30；商户使用 Inter 500；分类带有小色块和文本标签；备注使用 Muted；金额右对齐，使用 IBM Plex Mono 并显式标注正负号。收入使用 Forest，支出使用 Ink；绝不单独依赖颜色传达信息。每行最右侧有一个可访问的 Delete 操作。Delete 会打开确认对话框，注明商户和金额，然后移除该条目、持久化、重新计算所有视图，并播报 Transaction deleted。空状态显示 No transactions match these filters，辅助说明为 Try a different search or clear the filters，并提供一个可用的 Clear filters 按钮。真正为空的月份显示 No entries in this month yet，并提供 Add transaction。
   布局：使用全宽 Panel，44px 表头，桌面端行高 58px，单元格内边距 16px，使用 Rule 水平分隔线。Amount 列宽保持 132px，Delete 列宽 44px。在 760px 时，将表格替换为等效的语义化交易行列表：第一行为商户和金额，第二行为日期和分类，第三行为备注，Delete 作为带标签的图标按钮。在 390px 时绝不强制使用宽表格或水平页面滚动。
   动效：仅在允许动效时，删除的行以 120ms 的短暂淡出退出。确认对话框使用共享的对话框行为和焦点返回。

### 预算目标（`#/goals`）
1. **目标概览与分类进度** — 显示眉题 MONTHLY LIMITS、H1 标题 Budget goals，以及辅助说明 Set a comfortable limit for each category。一条带分隔线的摘要行显示 4800.00 planned · 4213.55 spent · 586.45 left，对应未更改的默认值。按以下顺序渲染八个分类目标面板：Housing、Groceries、Transport、Dining、Utilities、Health、Leisure、Family。每个面板显示其几何分类图标、已花费和目标金额、派生百分比，以及明确的剩余文本：Housing Target reached、Groceries 107.20 left、Transport 113.60 left、Dining 14.75 over、Utilities 57.40 left、Health 30.00 left、Leisure 44.00 left、Family 249.00 left。进度条使用分类颜色，可见填充上限为 100%，并通过 role progressbar 和 aria 值暴露真实百分比。Dining 获得 Danger 超预算标签，但不使用危言耸听的文案。每个面板都有一个 Adjust target 按钮。
   布局：使用两列网格，间距 20px，Panel 内边距 22px；每个目标的进度轨道高 10px，位于分类标题下方 24px 处。百分比右对齐，使用 IBM Plex Mono。低于 760px 时使用单列，并在 390px 时保持 Adjust target 按钮为 44px。不要将摘要变成额外的浮动 KPI 卡片。
   动效：数据变化后，进度条宽度在 300ms 内插值过渡；在减少动效模式下立即渲染最终宽度。
2. **调整目标对话框** — Adjust target 打开一个小对话框，标题为 Adjust [category] target，显示当前已花费金额、一个必填的 Monthly target 货币字段，以及辅助说明 Changes apply to all three sample months in this browser。要求输入大于零且符合货币精度的有限金额。Save target 更新规范目标、持久化、重新计算计划摘要和目标状态，并播报 [category] target updated。不要修改交易或静默清除超预算状态。包含 Cancel，以及与 Add transaction 相同的焦点、Escape 和验证行为。
   布局：使用居中的 420px 对话框，包含一个全宽带标签的货币输入框、一个只读的已花费摘要，以及右对齐的操作按钮。在 390px 时使用共享的底部抽屉模式，操作按钮全宽。
   动效：使用共享的 180ms 对话框入场动画和即时验证；不要使用动画计数。

## 资产
- 图像：不使用任何位图或下载的图片。用 SVG 或 CSS 绘制原创的 [BRAND] 账本线条标志、favicon、分类图标、所有者字母组合、环形图、每日条形图、进度条和空状态装饰。将这些作为原创代码绘制资产记录在 ASSETS.md 中；不得获取或热链任何图片。
- 图标：安装并导入 lucide-react（ISC），用于 LayoutDashboard、ReceiptText、Goal、Plus、ChevronLeft、ChevronRight、RotateCcw、Search、X、Trash2、SlidersHorizontal、Check 和 AlertCircle。使用 1.75px 描边、16–20px 尺寸、继承颜色，并为仅图标按钮提供可访问名称。不得使用银行、商户、卡组织或支付服务图标。
- 字体：通过 @fontsource-variable/fraunces、@fontsource-variable/inter 和 @fontsource/ibm-plex-mono 自托管 Fraunces Variable、Inter Variable 和 IBM Plex Mono。仅导入指定的字重，对财务数字使用 font-variant-numeric: tabular-nums，不包含任何远程字体 URL，并在 ASSETS.md 中记录包路径、上游来源、作者和 OFL 许可证。

## 禁止事项
- 不要添加后端、服务器路由、账户、身份验证、数据库、云同步、银行关联、分析、第三方 API、实时汇率或任何网络提交；所有行为和持久化均在本地进行。
- 不要复制现有预算或银行产品的布局、文案、图表、插图、图标、标语或视觉识别；界面和所有示例内容必须保持原创。
- 不要使用真实银行、雇主、商户、账户身份、账号、收据、个人财务记录，或声称示例已连接到真实账户。
- 不要提供财务建议、贬低消费行为、承诺储蓄或回报、捏造安全声明，或将 localStorage 描述为加密、已备份、已同步或在其他设备上可用。
- 不要使用图表、表格、表单或拖放库；仅使用手绘 SVG 或 CSS 视觉效果、语义化表格和列表、原生控件，以及指定的 Motion 和 Lucide 包。
- 不要使用照片、生成的图像、头像、图库图片服务、可识别的品牌标志、商业字体、CDN 脚本、CDN CSS、Google Fonts、Adobe Fonts 或热链接资源。
- 不要读取真实时钟来生成今日标签或交易日期。使用从 [SAMPLE_MONTH] 及相邻两个示例月份派生的固定日期，所有示例内容显式存储在 src/content.ts 中。
- 不要在 src/content.ts 之外硬编码默认商户、收入来源、备注、所有者详情、月份标签或特定货币的文案，且当 [BUDGET_CONTEXT] 或其他变量变化时，不要使家庭内容过时。
- 不要允许总计不一致、图表过时、NaN、无效金额、重复提交、静默存储失败或清除交易的目标编辑。从规范状态派生所有视图，并使用整数最小单位。
- 不要添加落地页区块、定价、推荐语、注册表单、轮播、装饰性渐变、玻璃效果、无关小部件、额外路由或裸目录链接；仅在指定的文件和哈希 URL 中保留 Overview、Transactions 和 Goals。
- 不要发布 source map、dist/ 中的 src/、远程资源、绝对资源路径或超过 20 MB 的 dist/ 包；npm run build 必须生成零控制台错误的静态文件。
- 除可选署名链接外，不要在应用内提及 VibeFather；所有界面文案、示例数据、验证消息和无障碍标签均保持美式英语。
- 不要牺牲可见标签、键盘操作、焦点捕获与返回、语义化表格、44px 移动端触控目标、可读对比度、颜色之外的文本状态、减少动态效果支持，或 1440×900 和 390×844 布局。

---
— Prompt by VibeFather · https://vibefather.ai/t/personal-budget-dashboard · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
