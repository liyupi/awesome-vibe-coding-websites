> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 发票生成工具

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建一个原创、完整的单页发票生成器，品牌为 [BRAND]。左侧的结构化编辑器控制右侧精美的实时发票。包含可编辑的开票方和客户详情、发票元数据、本地 logo 上传、明细项、税费、固定或百分比折扣、货币格式化、已保存客户、草稿持久化，以及浏览器打印或保存为 PDF。发票本身即是首屏视觉锚点；不要添加营销 hero 区。

- 受众：自由职业者、独立工作室、手工艺人和小企业主，他们想要专注的发票工作流，无需账户、云设置或支付处理。
- 目标：让访客基于提供的示例创建一张连贯的发票，即时看到每项计算更新，在重新加载后复用客户记录，并仅使用浏览器能力生成干净的打印或 PDF 文档。
- 语气：沉稳可靠、精确、平易近人，并带有纸张质感。使用直接的标签和实用的辅助文本，不要促销口号、虚假云声明或财务建议。

## 技术栈
- 框架：Vite 6 + React 19 + TypeScript
- 样式：Tailwind CSS 4.1
- 库：lucide-react（ISC）、@fontsource-variable/inter（OFL）、@fontsource-variable/source-serif-4（OFL）、@fontsource/ibm-plex-mono（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 将 Vite base 设为 './'，build.sourcemap 设为 false；将生产站点输出到 dist/，使用相对资源路径，且不将 src/ 目录复制到其中。
  - 使用 Tailwind CSS 4 及其 Vite 插件，并在 src/index.css 中定义颜色、排版、圆角和阴影令牌；将打印规则保留在本地导入的专用样式表中。
  - 将所有默认文案、示例详情、行项目、货币选项和 UI 标签保留在 src/content.ts 中。使用提供的变量值填充 [BRAND]、[ISSUER_NAME]、[ISSUER_LOCATION]、[CLIENT_NAME]、[SERVICE_TYPE] 和 [CURRENCY]，并重写服务特定的示例行、地址和备注，使其在这些值变化时保持连贯。
  - 定义一个规范的 InvoiceDraft 类型和纯计算辅助函数。以整数最小货币单位存储货币值，使用所选货币的精度，在计税前计算折扣，按货币精度对税额进行一次舍入，且绝不渲染 NaN、负总额或过时金额。
  - 将当前草稿、上传的 logo 数据 URL 和已保存客户分别持久化到独立的带版本 localStorage 键下。对格式错误的 JSON、不可用的存储和配额错误以非阻塞状态消息进行防护；已保存客户必须在“新建发票”重置后仍然保留。
  - 使用包含 [BRAND] 的纯文档标题、一个原创的代码绘制 SVG favicon，以及一个 ASSETS.md，其中列出每个第三方字体和图标包及其本地路径或包名、源 URL、作者和许可证。

## 变量
- [BRAND] — 生成器品牌（默认：“Tallyfold”）。虚构的产品名称，显示在应用页眉和文档标题中。
- [ISSUER_NAME] — 示例开票方（默认：“Hearth & Field Studio”）。开具初始发票的虚构企业。
- [ISSUER_LOCATION] — 开票方所在地（默认：“Portland, Oregon”）。示例账单地址中使用的城市和地区。
- [CLIENT_NAME] — 示例客户（默认：“Moss & Marker Workshop”）。初始发票所开给的虚构客户。
- [SERVICE_TYPE] — 服务类型（默认：“brand design services”）。用于撰写初始行项目和发票备注的行业。
- [CURRENCY] — 起始货币（默认：“USD”）。初始 ISO 货币代码；选择器还支持 EUR、GBP、CAD、AUD 和 JPY。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/invoice-generator-tool（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 画布（Canvas）`#F3F0E9` — 工作区背后的暖灰色应用背景。
- 面板（Panel）`#FBFAF7` — 编辑器卡片、抽屉和克制的次级表面。
- 纸张（Paper）`#FFFFFF` — 实时发票单页和所有打印页面。
- 墨色（Ink）`#18201D` — 主文本、发票标题和高强调边框。
- 弱化色（Muted）`#68716B` — 辅助文本、元数据和具有可读对比度的次级标签。
- 分隔线（Rule）`#D9DDD6` — 输入框边框、表格线和分隔符。
- 强调色（Accent）`#1F6F54` — 主按钮、活动标签页、焦点环和选中操作。
- 柔和强调色（Accent Soft）`#DDEBE3` — 已保存状态背景、活动字段底色和微妙的发票强调块。
- 危险色（Danger）`#A54732` — 仅用于删除和移除操作。

### 字体排印（Typography）
- 文档展示和发票总计：Source Serif 4 Variable（OFL），字重 600/700
- 应用界面、标签、输入框和正文：Inter Variable（OFL），字重 400/500/600/700
- 数量、费率、发票编号和对齐金额：IBM Plex Mono（OFL），字重 400/500/600

### 布局与动效（Layout & motion）
- 间距：使用 4px 基础刻度。桌面页面内边距为 28px，顶栏高 64px，编辑器卡片内边距为 20px，表单区块之间间隔 24px，输入框至少 44px 高，工作区列间距为 24px。发票单页在桌面端使用 48px 内边距，移动端为 28px。移动端页面内边距为 16px，卡片内边距为 16px，字段间距为 12px。
- 圆角：编辑器卡片和主按钮使用 10px，输入框和次级按钮使用 8px，仅小型已保存状态胶囊使用 999px，发票单页使用 2px。避免过度使用胶囊形状和悬浮圆角容器。
- 动效：按钮悬停、边框颜色、焦点环、标签页和抽屉遮罩使用 120–160ms ease-out 过渡；绝不对计算出的数字做动画或延迟其更新。
- 动效：新增行项目行在 160ms 内淡入并向上平移 6px，移除的行退出时不会造成大幅布局跳动。
- 动效：Toast 从底部进入，180ms 淡入并上升 8px；已保存客户抽屉在桌面端从右侧滑入 16px，在移动端作为全屏面板淡入。
- 动效：在 prefers-reduced-motion 下，移除滑动和行进入动效，并让所有状态变化立即生效。
- 图像：不使用图库或生成图像。首屏视觉锚点是丰富的实时发票本身：一张清晰的白色纸张、原创发行方字母组合、精细线条、结构化行项目和精确的总计区块，下方带有柔和的 0 18px 50px rgba(24,32,29,0.10) 阴影。上传前，从 [ISSUER_NAME] 派生一个简单的两字母发行方字母组合，置于 Accent Soft 方块内。上传控件接受本地 PNG、JPEG 或 WebP，最大 2 MB，并仅在发票徽标位置显示该图像。控件使用 Lucide 图标，并将 [BRAND] 标记绘制为原创几何收据与对勾 SVG；绝不使用真实企业或支付服务标记。

## 页面与区块
### 发票工作区（`index.html`）
1. **应用页头与草稿操作** — 左侧显示原始几何 [BRAND] 标记、[BRAND]，以及纯文字描述 Invoice generator。右侧提供 Saved clients、New invoice，以及带打印机图标的 primary Print / Save PDF 按钮。栏下方显示工作区标题 Create invoice、一条弱化的 Draft stored only in this browser 提示，以及一个实时状态胶囊，在 300ms 防抖后从 Saving… 变为 Saved locally。New invoice 打开确认对话框，说明当前草稿将重置，而已保存的客户会保留。Print / Save PDF 调用 window.print，绝不假装直接下载文件。
   布局：使用全宽 64px 顶栏，底部带 Rule 边框，随后是最大宽度 1480px 的工作区标题，水平内边距 28px，垂直间距 20px。桌面端操作保持在一行。在 390px 时，标题和按钮干净换行，Print / Save PDF 变为全宽，并在工作区标题正下方放置粘性的 Edit / Preview 分段控件；无水平滚动。
   动效：仅使用细微的 120ms 按钮和焦点过渡。保存状态胶囊交叉淡入淡出其文本，不改变宽度，也不延迟持久化。
2. **业务、客户与发票详情编辑器** — 第一张编辑器卡片是 Business & client。包含一个 logo 上传拖放按钮，辅助文本为 Upload logo PNG, JPEG, or WebP · max 2 MB，一个小预览，以及存在时的 Remove logo。提供带标签的字段：Issuer name、Issuer address、Issuer email、Client name、Client address 和 Client email。默认值使用 [ISSUER_NAME]、虚构地址 184 Rowan Lane · [ISSUER_LOCATION] 97209、hello@hearthandfield.example、[CLIENT_NAME]、27 Alder Street · Seattle, Washington 98101 和 accounts@mossandmarker.example；当变量变化时重写这些详情。添加 Save current client 和 Choose saved client 操作。第二张卡片是 Invoice settings，Invoice number 默认 INV-1048，Issue date 默认 2026-05-14，Due date 默认 2026-05-28，Currency 从 [CURRENCY] 初始化。包含 USD、EUR、GBP、CAD、AUD 和 JPY 选项，以及注释 Currency changes formatting only; amounts are not converted。
   布局：将这些卡片放在左侧编辑器列中，该列在 1440px 时宽 430px，在移动端折叠为全部可用宽度。Business & client 堆叠在 Invoice settings 上方。仅当每个字段保持至少 180px 宽时，才对 issuer/client 配对使用两列网格；否则使用单列。Invoice number 跨全宽，issue 和 due dates 共享一行，currency 跨全宽。每个输入都有持久可见的标签和强烈的键盘焦点状态。
   动效：Logo 预览在 160ms 内淡入。内联验证出现时不会使整体列产生超过必要的位移；无装饰性动效。
3. **行项目与计算编辑器** — 此卡片标题为 Line items，提供列标签 Description、Qty、Rate 和 Amount。[SERVICE_TYPE] 的默认行为 Brand strategy workshop 1 × 650.00、Homepage design 1 × 1200.00 和 Print-ready style guide 1 × 480.00；对于其他服务类型，用该行业中同样具体的服务替换全部三个描述。每行有可编辑的 description、quantity 和 unit-rate 字段、计算出的 amount，以及带标签的删除图标。提供 Add line item 按钮，如果所有行都被移除，至少保留一个空的可编辑行。下方包含 Discount type，选项为 Fixed 和 Percentage，默认 Fixed，Discount 默认 100.00，Tax rate 默认 8.25%。显示实时计算摘要：在起始 USD 情况下，Subtotal 2330.00、Discount −100.00、Tax 183.98 和 Total 2413.98。基于折后小计计算税费，百分比折扣上限为 100，固定折扣上限为小计，允许零值但不允许负输入。
   布局：将此作为左列的第三张也是最后一张卡片。桌面端使用紧凑网格，description 占据剩余宽度，quantity 64px，rate 104px，amount 96px，delete 36px。窄屏上，将每个项目设为带边框的块，description 全宽，quantity、rate 和 amount 在下方；不要创建宽表格。将 discount 和 tax 输入放在两列行中，然后将计算摘要右对齐，Total 以 Ink 和 Source Serif 4 强调。
   动效：添加的行使用指定的 160ms 入场。金额在每次有效击键时同步更新，无计数动画。删除按钮获得 Danger 色的悬停状态。
4. **实时发票预览** — 从同一规范状态渲染完整发票，而非数据的第二副本。纸张以上传的 logo 或派生的 issuer 字母组合、[ISSUER_NAME]、issuer 地址和邮箱、大号 INVOICE 标题以及当前发票编号开头。两列 Bill to 和 Invoice details 块显示 [CLIENT_NAME] 和客户详情，以及 issue date、due date 和 currency。项目表重复 Description、Qty、Rate 和 Amount，包含三个默认行。右下角总计块显示 Subtotal、Discount、Tax，以及未更改默认值时的粗体 Total due 2413.98。以 Payment notes 结尾，通用注释 Payment due within 14 days. Please include the invoice number in the transfer reference.，以及 Thank you for the opportunity to work together。添加小号页脚行 Prepared with [BRAND] · Stored locally in your browser。所有可见发票值在编辑时必须立即更新。
   布局：桌面端右侧预览列填充剩余宽度，并在编辑器滚动时粘性固定在顶栏下方 24px 处。居中一张白色纸张，最大宽度 780px，最小可读文档比例，48px 内边距，以及细微纸张阴影；允许页面垂直滚动，确保完整纸张永不被裁剪。INVOICE 使用 Source Serif 4 700 44px，Total due 使用 28px，数字列使用 IBM Plex Mono。低于 900px 时，根据 Edit / Preview 标签显示编辑器或预览。移动端使用流式 28px 内边距的纸张，堆叠元数据块，并将项目行转换为可读的堆叠块，而非缩小 A4 图像。打印样式表隐藏除发票外的所有应用元素，移除阴影和背景，设置白色纸张和黑色文本，保留表格和总计，避免破坏单个项目行，并使用合理的 A4/Letter 边距。
   动效：预览在每次击键时不产生动画。移动端 Edit / Preview 使用可选的 120ms 交叉淡入淡出，在减少动效时禁用。打印无动画。
5. **已保存客户抽屉与反馈** — Saved clients 打开一个标题为 Saved clients 的抽屉，说明为 Reuse billing details without creating an account。Save current client 使用当前客户名称、地址和邮箱添加或更新记录，重复名称在覆盖前确认。每个已保存行显示客户名称和邮箱，以及 Apply 和 Delete 操作；Apply 仅填充客户字段并关闭抽屉，而 Delete 请求确认。包含空状态：No saved clients yet. Fill in the client details and choose Save current client。重新加载后恢复已保存记录和活动草稿。使用短 toast 提示 Client saved、Client applied、Client deleted、Logo removed 和存储失败。
   布局：桌面端使用 380px 右侧抽屉，带半透明 Ink 遮罩、关闭按钮和可滚动列表。移动端使用全屏面板，具有相同控件和至少 44px 的点击目标。将键盘焦点限制在打开的抽屉或确认对话框中，按 Escape 关闭，将焦点返回调用按钮，模态 UI 打开时绝不允许背景交互。
   动效：抽屉和 toast 过渡遵循设计动效规则，在减少动效时变为即时。

## 资产
- 图标：安装并导入 lucide-react（ISC），用于 Plus、Trash2、Users、Upload、X、Printer、RotateCcw、Check 和 ChevronDown。通过 npm 包将图标保持为内联和本地形式，为仅含图标的按钮添加无障碍名称，并且不使用任何品牌或支付服务图标。在 SVG/CSS 中绘制原创的 [BRAND] 收据与对勾标记以及发行方字母组合。
- 字体：通过 @fontsource-variable/inter、@fontsource-variable/source-serif-4 和 @fontsource/ibm-plex-mono 自托管 Inter Variable、Source Serif 4 Variable 和 IBM Plex Mono。仅导入指定的字重，不包含任何远程字体 URL，并在 ASSETS.md 中记录包路径、上游来源、作者和 OFL 许可证。

## 禁止事项（Don'ts）
- 不要添加后端、服务器路由、账户、身份验证、数据库、云同步、支付收款、分析统计、第三方 API、实时税率查询或汇率换算。
- 不要复制现有开票产品、其精确布局、文案、插图、图标、品牌化发票设计或专有视觉资产；仅使用此处描述的原创界面。
- 不要使用真实商业身份、真实徽标、支付服务商标、可识别的商业产品、图库照片服务、热链接文件或生成的图像。
- 不要加载 Google Fonts、Adobe Fonts、CDN 脚本、CDN CSS 或商业字体；仅自托管列出的开源许可 Fontsource 包。
- 不要添加 PDF 库或伪造下载的 PDF；使用 window.print 和专用打印样式表，以便浏览器可以打印或将发票保存为 PDF。
- 不要在 src/content.ts 之外硬编码默认内容，也不要在变量变化时留下过时的设计服务行项目、地址、名称或备注；将所有网站文案保持为美式英语，并且除了可选的署名链接外，绝不提及 VibeFather。
- 不要将数据存储在任何地方，除了带版本的 localStorage 键，并且不要声称本地草稿或客户已同步、在账户中受到保护或在另一台设备上可用。
- 不要允许无效计算、负数输入或总计、NaN、未处理的 localStorage 失败、来自上传或输入内容的原始 HTML 注入，或在重置期间静默丢失已保存的客户数据。
- 不要引入额外页面、裸目录链接、营销部分、落地页主视觉、轮播、装饰性渐变、玻璃效果或无关的仪表板小部件。
- 不要发布 source maps、dist/ 中的 src/、远程资产、绝对资产路径或超过 20 MB 的 dist/ 包；单个 index.html 构建必须能在静态托管下运行，且控制台零错误。
- 不要牺牲键盘访问、可见标签、焦点管理、44px 移动端目标、可读对比度、减少动态效果支持或 1440×900 和 390×844 布局。

---
— Prompt by VibeFather · https://vibefather.ai/t/invoice-generator-tool · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
