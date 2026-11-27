> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 膳食计划与购物清单应用

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个清新、阳光、移动优先的响应式每周膳食规划与智能超市货架购物清单 PWA（[BRAND]），面向 [HOUSEHOLD_NAME]（[DEFAULT_SERVINGS]）。移动端（<768px）使用 4 标签底部栏（Plan、Recipes、Groceries、Pantry）；桌面端展开为侧边栏 + 7 天膳食日历与实时货架购物分屏视图。不使用虚假手机边框。

- 受众：规划每周菜单并高效购物的家庭厨师、家庭和备餐者。
- 目标：一键将每周膳食规划直接关联到按份量缩放后的食谱和按货架排序的购物清单。
- 语气：温暖、自然、诱人、清爽的家庭厨房式宁静。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：lucide-react (ISC)、@fontsource/fraunces (OFL)、@fontsource/plus-jakarta-sans (OFL)、@fontsource/jetbrains-mono (OFL)
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中本地导入 @fontsource/fraunces（600、700）、@fontsource/plus-jakarta-sans（400、500、600、700）和 @fontsource/jetbrains-mono（400、500、600）。
  - 将所有 6 张风格统一的家常菜 WebP 照片下载到 public/images/，并通过 ./images/... 引用。
  - 在 src/data/mealSeed.ts 中预置一份 7 天早餐/午餐/晚餐计划、6 份带烹饪模式步骤的缩放食谱、按货架分类排序的杂货（农产品（Produce）、乳制品（Dairy）、食品储藏（Pantry）、烘焙（Bakery）），以及食品储藏库存开关；将所有状态持久化到 localStorage。

## 变量
- [BRAND] — 餐食应用名称（默认："BasilNote"）。虚构的餐食规划 PWA 名称
- [HOUSEHOLD_NAME] — 家庭问候语（默认："Clara & Ben's Kitchen"）。显示在页眉中
- [DEFAULT_SERVINGS] — 默认份数（默认："2 Servings"）。初始食谱倍数标签
- [WEEK_LABEL] — 规划器标题（默认："Weekly Table Plan"）。主日历标题
- [MARKET_NOTE] — 购物提示（默认："Grouped cleanly by supermarket aisle"）。购物清单副标题
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/meal-planner-grocery-list-app（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- Fresh Linen `#FBF9F4` — 温暖的厨房亚麻背景
- Card White `#FFFFFF` — 餐位卡片、食谱单和货架清单
- Forest Ink `#1B2A22` — 标题、食谱名称和正文
- Herb Green `#2D6A4F` — 主 CTA、活动标签页、勾选标记和 Produce 徽章
- Tomato Red `#DC4A2D` — 快速替换强调、晚餐高亮和 Pantry 提醒
- Warm Oat `#EFEAE0` — 细微边框、胶囊标签和日期选择器

### 字体排印
- 编辑风格食谱名称和标题：Fraunces（OFL），字重 600/700
- 餐卡、步骤和杂货条目：Plus Jakarta Sans（OFL），字重 400/500/600/700
- 缩放数量、准备分钟数和计数：JetBrains Mono（OFL），字重 400/500/600

### 布局与动效
- 间距：移动端（<768px）可从容避开固定的 64px 底部标签栏。桌面端（>=1024px）渲染全高 236px 左侧边栏、7 天餐食日历网格和右侧实时 Aisle Grocery 栏。
- 圆角：菜品卡片和食谱单为 16px，餐位和货架分组为 12px，日期胶囊和份量控件为 999px。
- 动效：平滑上滑的 Swap Meal 与 Recipe Cook-Mode 面板，带实时缩放数量过渡。
- 动效：杂货货架条目上清脆的删除线勾选动画。
- 动效：遵循 prefers-reduced-motion；所有内容立即可见。
- 图像：六张风格统一的阳光家庭烹饪照片，置于哑光斑点亚麻石器与温暖橡木台面上，无文字或标志。

## 页面与区块
### [BRAND] — 每周膳食计划与杂货（`index.html`）
1. **自适应移动端标签栏与桌面端侧边栏** — 移动端（<768px）：紧凑的 [BRAND] 页头，配有一键“Sync Groceries”胶囊按钮 + 固定底部 4 标签栏（Plan、Recipes、Groceries、Pantry）。桌面端（>=768px）：全高左侧边栏，包含 [BRAND] 徽标、[HOUSEHOLD_NAME]、4 个导航目的地、每周已计划餐食计数器，以及“Send Week to Grocery List”CTA。
   布局：全视口阳光厨房 PWA；零虚假手机边框。
2. **计划视图 — 7 天膳食日历 + 实时货架杂货拆分** — 日期切换器（Mon–Sun）+ 7 天早餐 / 午餐 / 晚餐卡片，展示协调统一的菜品照片、准备时间和快捷“Swap”与“Cook”按钮。点击“Swap”会打开 Swap Meal 面板，可分配 6 个预置食谱中的任意一个。点击“Send Week to Grocery List”会将所有已计划食材清晰地汇总到桌面端右侧栏内的 Produce、Dairy、Pantry 和 Bakery 货架中（移动端则在 Groceries 标签页中）。
   布局：桌面端 2 列拆分（左侧 7 天计划器 + 右侧实时货架杂货清单）；移动端为逐日餐食卡片。
3. **食谱视图与带份量缩放器的烹饪模式详情面板** — 全部 6 道家常食谱的照片画廊（Maple Berry Baked Oats、Herb-Crusted Salmon Bowl、Cherry Tomato Basil Rigatoni、Coconut Chickpea Curry、Poached Egg Avocado Toast、Roasted Tomato Lentil Soup）。打开任意食谱会启动内容丰富的 Recipe Detail Sheet，带有动态 1x–6x 份量步进器，可自动缩放每种食材用量，另有可勾选的逐步 Cook Mode 清单。
   布局：2 列或 3 列照片卡片 + 上滑/模态 Recipe Detail 面板。
4. **杂货与储藏室视图** — Groceries 标签页显示按货架分组的清单（Produce、Dairy、Pantry、Bakery），带删除线勾选、剩余项目计数器、Clear Checked 操作，以及带货物架选择器的 Add Custom Item 栏。Pantry 标签页跟踪家庭常备品（Olive Oil、Sea Salt、Arborio Rice、Oats、Tahini、Garlic），带有 In Stock / Running Low 切换。
   布局：桌面端 2 列货架网格；移动端为堆叠货架卡片。

## 资源
- 图片：将 https://media.vibefather.ai/assets/a225b482-061c-4bbe-ba0d-4d7080e9a018/meal-oats.webp 下载到 public/images/meal-oats.webp。替代文本：'Warm maple berry baked oats with toasted almonds and fresh figs in speckled stoneware bowl'。用于 Maple Berry Baked Oats。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/a225b482-061c-4bbe-ba0d-4d7080e9a018/meal-salmon.webp 下载到 public/images/meal-salmon.webp。替代文本：'Herb-crusted pan-seared salmon with roasted asparagus, charred lemon, and quinoa on stoneware plate'。用于 Herb-Crusted Salmon Bowl。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/a225b482-061c-4bbe-ba0d-4d7080e9a018/meal-pasta.webp 下载到 public/images/meal-pasta.webp。替代文本：'Rustic cherry tomato and fresh basil rigatoni pasta finished with olive oil in speckled stoneware bowl'。用于 Cherry Tomato Basil Rigatoni。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/a225b482-061c-4bbe-ba0d-4d7080e9a018/meal-curry.webp 下载到 public/images/meal-curry.webp。替代文本：'Golden coconut chickpea and spinach curry garnished with fresh cilantro and warm flatbread'。用于 Coconut Chickpea Curry。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/a225b482-061c-4bbe-ba0d-4d7080e9a018/meal-toast.webp 下载到 public/images/meal-toast.webp。替代文本：'Sourdough avocado toast with poached egg, sliced radish, and microgreens on stoneware plate'。用于 Poached Egg Avocado Toast。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图片：将 https://media.vibefather.ai/assets/a225b482-061c-4bbe-ba0d-4d7080e9a018/meal-soup.webp 下载到 public/images/meal-soup.webp。替代文本：'Velvety roasted heirloom tomato and red lentil soup swirled with herb oil and crisp croutons'。用于 Roasted Tomato Lentil Soup。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- 图标：安装 lucide-react（ISC），用于日历、餐具、购物篮、厨师帽、对勾和交换图标。
- 字体：通过 @fontsource 包（OFL）自托管 Fraunces、Plus Jakarta Sans 和 JetBrains Mono。

## 不要做
- 不要在桌面屏幕上使用假的手机边框或固定的窄移动端容器。
- 不要热链远程图片 URL；将所有 6 个菜品 WebP 下载到 public/images/ 中，并通过 ./images/... 引用。
- 不要使用真实的杂货连锁店、包装产品品牌或日历日期。
- 不要使用 CDN 脚本、Google Fonts 或 source maps；始终设置 base: './'。
- 在 390x844 移动端或 1440x900 桌面端不要出现水平溢出。
- 除可选的 [CREDIT] 外，不要提及 VibeFather 或竞争对手。

---
— Prompt by VibeFather · https://vibefather.ai/t/meal-planner-grocery-list-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
