> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 个人支出追踪应用

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个真正的三断点响应式移动优先个人理财与日常支出追踪 PWA（[BRAND]），面向 [USER_NAME]，月度预算为 [MONTHLY_BUDGET]。移动端（<768px）使用原生底部标签栏（首页、分析、预算、设置）+ 上滑式“添加支出”底部弹层，并配有自定义数字键盘；平板/桌面端使用左侧边栏 + 双栏仪表盘布局。不使用虚假手机外框。

- 受众：普通消费者、年轻职场人士和自由职业者，他们在手机和笔记本电脑上追踪日常支出、分类限额和周期性账单。
- 目标：让记录一笔支出耗时不超过五秒，同时让月度预算健康状况、分类趋势和周期性账单始终一目了然。
- 基调：平静、清晰、可信、无杂乱干扰的财务清晰感。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：lucide-react (ISC)、@fontsource/plus-jakarta-sans (OFL)、@fontsource/ibm-plex-mono (OFL)
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务端代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中本地导入 @fontsource/plus-jakarta-sans（400、500、600、700）和 @fontsource/ibm-plex-mono（400、500、600）。
  - 将所有预置的虚构交易、分类、定期账单和初始预算限额存储在 src/data/seedFinance.ts 中；将所有状态变更（交易、预算、darkMode、账单已支付标记）持久化到 localStorage。
  - 切勿将应用包裹在装饰性手机边框或固定的 390px 桌面容器中；在移动端（<768px 底部标签栏 + 面板）、平板和桌面端（侧边栏 + 双列网格）渲染全出血响应式布局。

## 变量
- [BRAND] — 应用品牌名称（默认："LedgerLeaf"）。虚构的个人理财 PWA 名称
- [USER_NAME] — 个人资料显示名称（默认："Maya Lin"）。虚构的账户所有者问候语
- [MONTHLY_BUDGET] — 月度预算标题（默认："$3,400"）。月度支出上限格式化字符串
- [CURRENCY_SYMBOL] — 货币符号（默认："$"）。各金额前使用的货币前缀
- [SAVINGS_GOAL] — 突出显示的储蓄目标（默认："Autumn Kyoto Trip"）。虚构的个人储蓄目标卡片
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/personal-expense-tracker-app（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值编写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- 浅色画布（Light Canvas）`#F6F7F9` — 浅色模式主应用背景
- 卡片白（Card White）`#FFFFFF` — 浮起的移动端和桌面端卡片
- 深墨（Deep Ink）`#0F172A` — 主要余额、标题和深色模式背景
- 清翠绿（Crisp Emerald）`#059669` — 收入、剩余预算环、安全进度条和主 '+' CTA
- 警示玫瑰（Alert Rose）`#E11D48` — 支出、超预算警告和删除确认
- 石板灰（Slate Muted）`#64748B` — 次级标签、时间戳和非活动标签图标

### 字体排印
- 应用标题和 UI：Plus Jakarta Sans (OFL)，字重 400/500/600/700
- 货币余额、键盘数字和百分比：IBM Plex Mono (OFL)，字重 400/500/600

### 布局与动效
- 间距：移动端（<768px）使用边到边 16px 水平内边距，固定 64px 标签栏上方留 84px 底部间隙。桌面端（>=1024px）使用 240px 左侧导航侧边栏 + max-w-6xl 双列响应式工作区。
- 圆角：主摘要卡片和底部弹层为 16px，交易行和预算卡片为 12px，分类筛选标签为 999px。
- 动效：添加/编辑支出数字键盘抽屉采用平滑上滑弹层展开。
- 动效：添加或编辑交易时，SVG 环形弧和预算进度条过渡动画。
- 动效：遵循 prefers-reduced-motion；所有内容立即可见。
- 图像：纯代码绘制的财务视觉元素：SVG 支出对比预算摘要环、交互式 SVG 分类环形图、7 天支出柱状图、清晰的 Lucide 分类图标，零库存照片。

## 页面与区块
### [BRAND] — 个人支出追踪器（`index.html`）
1. **自适应移动端标签栏与桌面端侧边栏导航** — 四个主要目的地：首页（Home）、分析（Analytics）、预算（Budgets）和设置（Settings），外加一个高对比度的祖母绿 '+' 快速添加按钮。在 768px 以下渲染为粘性底部标签栏，中央为悬浮 '+' 按钮，点击目标 >=44px；在 >=768px 时无缝转换为左侧边栏，包含 [BRAND] 徽标、导航链接、实时剩余预算迷你胶囊、深色模式切换和 'Add Transaction' CTA。
   布局：全视口响应式应用外壳；零虚假手机边框。
2. **首页视图 — 余额摘要环、周期性账单与交易流** — 顶部主视觉摘要卡片采用深墨色（#0F172A），配有祖母绿/玫瑰色 SVG 圆形支出对比预算环，显示剩余预算（Remaining Budget）、本月支出（Spent This Month）、月收入（Monthly Income）和 [SAVINGS_GOAL] 进度标签。桌面端与即将到来的周期性账单（可点击的 'Mark Paid' 切换项，涵盖 Rent、Fiber Internet、Transit Pass、Cloud Backup）并排呈 2 列布局。下方：可搜索且可按类别筛选的交易流，预置 14 条逼真的虚构交易（Groceries、Dining、Transit、Utilities、Health、Subscriptions、Salary Income），并带有内联编辑和删除操作。
   布局：桌面端 2 列网格（主账本 + 右侧账单/摘要栏）；移动端为单列原生交易流。
3. **快速 '+' 添加/编辑支出面板，带自定义数字键盘** — 移动端以触感圆角 rounded-t-2xl 底部面板打开，桌面端以居中模态对话框打开。包含支出/收入（Expense / Income）切换、大型实时等宽金额读数、自定义 3x4 触控友好数字键盘（0–9、'.'、退格、清除），同时支持键盘输入、商户/备注输入、6 个颜色编码的类别标签（Dining、Groceries、Transit、Housing、Leisure、Health）、日期选择器，以及可立即更新余额、图表和 localStorage 的保存按钮。
   布局：<768px 为底部面板，>=768px 为模态对话框。
4. **分析视图 — SVG 类别环形图与 7 日支出柱状图** — 左侧卡片：交互式 SVG 按类别支出环形图，点击或悬停任意扇区会高亮其类别占比、金额总计和交易数量。右侧卡片：7 日每日支出 SVG 柱状图，带日均虚线参考线和峰值日高亮，外加热门商户（Top Merchants）与现金流比率（Cashflow Ratio）摘要卡片。
   布局：桌面端 2 列分析网格；移动端为堆叠卡片。
5. **预算视图 — 交互式月度类别滑块与提醒** — 显示针对 [MONTHLY_BUDGET] 的总体预算使用进度条，以及 6 张按类别划分的卡片（Groceries、Dining、Transit、Housing、Leisure、Health）。每张卡片显示已支出对比限额（Spent vs Limit）、祖母绿/琥珀/玫瑰色状态胶囊、动画进度条，以及一个交互式范围滑块，让用户实时调整月度限额，并即时显示超预算警告徽章。
   布局：桌面端 2 列响应式卡片网格；移动端为单列。
6. **设置视图 — 深色模式、货币、CSV 导出与数据重置** — [USER_NAME] 的个人资料头部、浅色/深色主题切换、通过 Blob URL 直接下载 `ledgerleaf-transactions.csv` 的 CSV 导出按钮、存储摘要读数，以及 'Restore Sample Data' 按钮。
   布局：整洁的堆叠设置面板居中于工作区内。

## 资源
- 图标：安装 lucide-react（ISC）用于底部标签图标、分类图标、键盘删除键和导出控件。
- 字体：通过 @fontsource 包（OFL）自托管 Plus Jakarta Sans 和 IBM Plex Mono。
- 图像：所有环形图、甜甜圈图和 7 天柱状图均以内联 SVG 渲染。零外部图像。

## 不要做的事
- 不要在桌面屏幕上使用假手机边框、iPhone 刘海或固定窄手机外壳。
- 不要使用真实银行、信用卡标志、商户商标或真实金融账户。
- 不要使用后端、API 调用、CDN 脚本或 Google Fonts 链接。
- 不要空白的初始屏幕；立即预置 14 条逼真的虚构交易和 4 条周期性账单。
- 生产构建中不要包含 source maps，并始终使用 base: './'。
- 在 390x844 移动端或 1440x900 桌面端不要出现水平溢出。
- 除可选的 [CREDIT] 槽位外，不要提及 VibeFather 或竞争对手。

---
— Prompt by VibeFather · https://vibefather.ai/t/personal-expense-tracker-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
