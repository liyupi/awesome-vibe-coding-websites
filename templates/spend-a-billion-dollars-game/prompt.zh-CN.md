> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 花掉十亿美元游戏

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建一个诙谐、富有触感的浏览器消费游戏，标题为 [BRAND]，玩家从虚构的古怪人物 [BENEFACTOR] 那里继承 $100,000,000,000，并试图把全部花光。在顶部固定一个粘性动画余额计数器，随着物品买入或卖出平滑滚动下降，并配有一个已花费百分比进度条，以及可在“Spend the $100B”和“Feel the Scale”之间快速切换的标签页切换器。在 Spend 标签页中，展示 60 件原创物品，价格从 $4 到 $25,000,000,000（从咖啡和自行车到体育场、太阳能城市和空间站），每件物品都用代码以统一的扁平贴纸 SVG 风格绘制，带有粗墨线轮廓，且没有任何品牌标志，并提供 Sell (-)、可输入的数量输入框和 Buy (+) 控件。提供一个实时逐项收据、里程碑提示（“You've spent 4,000 lifetimes of average earnings”）、一个可自定义薪资的“How long to earn this”换算器，以及一键下载的 Canvas 收据 PNG。在“Feel the Scale”标签页中，用动画堆叠的 $100 钞票、按比例绘制的等距立方体和时间对比，来比较 $1 Million、$1 Billion 和 $1 Trillion。

- 受众：好奇的浏览器游戏玩家、学生，以及任何着迷于可视化极端数字和财富规模的人。
- 目标：通过触感十足的购物反馈、实时收据更新和引人注目的视觉规模对比，让 $100 billion 在打开页面三秒内变得直观可感。
- 语气：俏皮、利落、编辑式玩具盒风格——机智的物品说明、利落的绿金印刷墨色，以及零说教。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 4
- 库：lucide-react（ISC）、@fontsource/bricolage-grotesque（OFL-1.1）、@fontsource/plus-jakarta-sans（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中导入 @fontsource/bricolage-grotesque（600、700、800）、@fontsource/plus-jakarta-sans（400、500、600、700）和 @fontsource/jetbrains-mono（500、600、700）。
  - 将所有 60 个目录项、分类定义、里程碑和文案变量存储在 src/data/catalog.ts 中（零真实品牌、零真实人物、零日历日期）。
  - 在 src/components/StickerIcon.tsx 中创建一个统一的扁平贴纸 SVG 图稿渲染器，使 60 个条目中的每一个都能获得一个用代码绘制的迷人、多彩、墨线描边的贴纸插图。
  - 在 src/utils/receiptCanvas.ts 中实现一个 HTML5 Canvas 收据图像生成器，渲染出清晰的锯齿状热敏纸收据 PNG 用于下载/分享，并将玩家的购物车持久化到 localStorage。

## 变量
- [BRAND] — 游戏标题（默认：“Aunt Margo's Vault”）。$100B 消费游戏的趣味标题
- [BENEFACTOR] — 虚构的恩人姓名（默认：“Aunt Margo Vance”）。留下 $100B 财富的虚构古怪亲戚
- [LEDGER_LABEL] — 收据页眉标签（默认：“Inheritance Ledger”）。印在实时收据和可下载凭条上的副标题
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/spend-a-billion-dollars-game（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值编写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- Money Green（金钱绿）`#2EC27E` — 吸顶余额金库横幅、Buy 按钮和钞票堆
- Warm Cream（暖奶油色）`#FFF8E7` — 主画布背景和纸质收据表面
- Print Ink（印刷墨色）`#1A1A1A` — 粗厚贴纸描边、清晰排版和偏移投影
- Vault Gold（金库金）`#F5B700` — 里程碑缎带、超级档位高亮和激活标签胶囊
- Coral Sell（珊瑚售出色）`#FF6B57` — Sell (-) 按钮和预算警告强调色

### 字体排印
- 游戏标题与大型余额数字：Bricolage Grotesque（OFL），字重 600/700/800
- 物品标题、描述与里程碑：Plus Jakarta Sans（OFL），字重 400/500/600/700
- 价格、收据行与薪资计算：JetBrains Mono（OFL），字重 500/600/700

### 布局与动效
- 间距：Hero 赞助人欢迎条搭配吸顶的鲜艳绿色 `$100,000,000,000` 金库计数器条、分类筛选胶囊、3 至 4 列响应式 60 件物品贴纸网格，以及吸顶/可折叠的收据与薪资转换侧边栏。
- 圆角：16px 圆角贴纸卡片，配 2px 实线 #1A1A1A 墨色边框和清晰的 3px 硬偏移阴影；底部为锯齿状收据边缘。
- 动效：每当金额减少或退款时，使用平滑的 requestAnimationFrame 滚动计数器动画。
- 动效：卡片悬停时呈现俏皮的贴纸弹出倾斜效果，跨越重大里程碑或剩余金额归 $0 时呈现清晰的彩纸爆发效果。
- 动效：在 'Feel the Scale' 标签页中，动画呈现不断增长的 $100 钞票堆和按比例缩放的 3D 等距立方体。
- 动效：遵循 prefers-reduced-motion，立即跳变计数器并暂停比例尺浮动。
- 图像：全部 60 件物品均使用 100% 原创代码绘制的扁平贴纸 SVG 插画，风格化赞助人圆形肖像，动画 SVG/Canvas 钞票堆和比例尺立方体，以及 Canvas 渲染的热敏收据 PNG。

## 页面与区块
### [BRAND] · 花掉 $100,000,000,000（`#/spend`）
1. **古怪姨妈金库主视觉与吸顶余额计数器** — 紧凑、高能量的页头，介绍虚构的 [BENEFACTOR] 的 $100,000,000,000 遗产，配有原创代码绘制的金色圆形徽章肖像、快捷标签切换器（“Spend $100B” 与 “Feel the Scale”），以及一条吸顶全宽 Money Green（#2EC27E）余额条，显示实时动画的剩余财富（`$100,000,000,000`）、已花金额、百分比进度条、当前激活的里程碑胶囊标签，以及快捷的 Reset / Jump to Receipt 操作。
   布局：吸顶计数器干净地固定在紧凑导航栏下方；在 1440×900 和 390×844 下，主视觉加第一行商品能立即落在首屏内。
   动效：每次购买或退款时，数字以滚轮里程表式插值滚动。
2. **60 件扁平贴纸购物网格** — 分类筛选栏（`All 60`、`Everyday`、`Gadgets & Fun`、`Wheels & Wings`、`Real Estate`、`Culture & Sport`、`Megaprojects`），外加搜索和排序（Low→High / High→Low）。展示 60 件原创无品牌商品，从 `$4` 的 Iced Oat Coffee 和 `$18` 的 Sourdough Pizza，一直到 `$1.2B` 的 Pro Stadium、`$8B` 的 Solar Desert City 和 `$25B` 的 Orbital Space Station。每张卡片渲染一个清晰的扁平贴纸 SVG 图标、价格标签、一句诙谐短注、`Sell (-)` 按钮、可编辑的数字数量输入框和 `Buy (+)` 按钮（外加 `×10` 快捷调整，或按最大可负担金额禁用）。
   布局：响应式网格，移动端 1 列 → sm 2 列 → lg 3 列，桌面端与实时收据及换算器栏并排。
   动效：悬停时贴纸轻微倾斜，购买时短暂绿色脉冲。
3. **实时收据、里程碑、薪资换算器与 PNG 分享** — 锯齿边奶油色纸质收据，标题为 “[BRAND] — [LEDGER_LABEL]”，列出每件已购商品、数量、小计和总计，外加一键 “Download Receipt PNG” 按钮，可生成清晰的高分辨率 Canvas 收据小票。包含交互式 “How long to earn this?” 薪资换算器（预设：Median Salary $65k、Surgeon $350k、Pro Athlete $5M，或自定义输入），计算所需工作年数与人生数，以及 8 个里程碑的进度追踪（例如 “1 Lifetime of Earnings”、“100 Lifetimes”、“Small Island GDP”、“4,000 Lifetimes”、“Vault Emptied!”）。
   布局：桌面端为吸顶右侧栏（`lg:col-span-4`），移动端可在下方访问，或通过浮动 “View Receipt” 跳转胶囊按钮访问。
   动效：新收据行平滑滑入；解锁的里程碑闪烁 Vault Gold。

### Feel the Scale · $1M vs $1B vs $1T（`#/scale`）
1. **交互式 $1M vs $1B vs $1T 可视化器** — 专门的第二个标签页，让数量级令人难忘：（1）交互式钞票堆叠对比器，展示 100 美元钞票堆叠到的高度（$1M 为 10,000 张 = 1.1m / 齐肩高；$1B 为 1,000 万张 = 1.09 km / 高于最高塔楼；$1T 为 100 亿张 = 1,092 km / 高入轨道空间），（2）比例 3D 等距立方体与托盘网格，其中 $1M 是一个小手提箱，$1B 是填满仓库的 1,000 个托盘，$1T 是 1,000 个仓库，（3）时间到秒与步行速度比例尺（`1M sec = 11.6 days`、`1B sec = 31.7 years`、`1T sec = 31,709 years`），以及（4）交互式 “Compare Your Current Spend” 小部件，将玩家的实际收据总额直接标绘到 $100B 尺度上。
   布局：干净的堆叠交互式信息图卡片，置于 1280px 容器内，在 390px 移动端无水平溢出。
   动效：动画钞票堆叠平滑升起，以及交互式比例乘数滑块。

## 资产


## 禁止事项（Don'ts）
- 绝不要命名、描绘或引用任何真实的亿万富翁、名人、科技高管或现实世界的公司/品牌。
- 绝不要在页面上或生成的收据上任何位置打印日历日期、月份或 4 位年份。
- 绝不使用损坏的外部图片或 CDN 字体——所有 60 个扁平贴纸图标都用 SVG 代码绘制，并将 Fontsource 字体本地打包。
- 绝不要让首屏留空或被模态介绍遮挡——立即显示 $100B 金库计数器（vault counter）和首批可购买的贴纸商品行。
- 绝不要在 390×844 移动端上出现水平溢出，或用 clip-path 裁剪元素。

---
— Prompt by VibeFather · https://vibefather.ai/t/spend-a-billion-dollars-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
