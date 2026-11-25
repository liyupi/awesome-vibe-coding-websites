> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 消费电子产品商店

请完全按照以下描述构建此网站。将 [VARIABLES] 替换为您自己的值；其余内容保持不变。

## 简介
为 [STORE_NAME]（[TAGLINE]；支持邮箱：[SUPPORT_EMAIL]）构建一个多品类消费电子产品商店，采用纯净清爽的白色（#FFFFFF）、石墨色（#1C1F24）、电光蓝（#2D6BFF）和促销红（#FF3B30）。所有设备均为虚构的、无品牌的工业硬件，横跨五个系列（Core、Air、Studio、Optic、Echo-free Acoustic），在统一浅灰色影棚拍摄中呈现，零标志、无可读文字。将七个哈希路由与 window.location.hash 双向同步：(1) #/home — 编辑式硬件展示主视觉，突出旗舰哑光笔记本电脑与手机、快捷品类磁贴、Deals 聚焦和好评精选；(2) #/category — 多品类目录，带交互式 Mega Menu 下拉菜单以及规格筛选器（Category、Price Ceiling、Series Name、Screen/Driver Size、Minimum Battery Hours、Finish Color）和“+ Compare”固定项；(3) #/product — 完整产品详情页，带影棚图库、Finish Color 色板、实时更新价格的 Storage/Tier 变体、Add to Cart + 可选的 2-Year Care+ Protection Plan 复选框、结构化规格表和客户评价；(4) #/compare — 并排对比表，支持最多 3 个已选产品，高亮同类最佳规格并带快捷 Add to Cart 按钮；(5) #/deals — 精选 Deals 页面，带红色（#FF3B30）优惠胶囊、库存条和即时捆绑折扣；(6) #/checkout — 三步模拟结账流程（Shipping → Delivery Speed → Review & Place Demo Order，明确标注无真实付款），自动创建真实可追踪的订单代码；(7) #/track — 订单追踪查询，预置两个示例订单 ID（'VG-84210' 和 'VG-91045'）以及任何新下的模拟订单，显示 4 阶段履约步骤条。包含一个持久化的滑出式 Cart Drawer，可从每个页面访问，带数量步进器和每件商品的 2-Year Protection Plan 附加项开关。任何地方均无日历日期或 4 位年份。

- 受众：日常购物者、创意人士、硬件爱好者和电商团队。
- 目标：让技术硬件对比、变体选择、保护附加项和模拟结账变得轻松且值得信赖。
- 语气：精密工业设计——简洁不杂乱，技术规格以清晰利落的视觉克制呈现。

## 技术栈（Stack）
- 框架（Framework）：Vite 6 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 4
- 库（Libraries）：lucide-react（ISC）、@fontsource/space-grotesk（OFL-1.1）、@fontsource/inter（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建（Build）：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置（Setup）：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中导入 @fontsource/space-grotesk（600、700）、@fontsource/inter（400、500、600）和 @fontsource/jetbrains-mono（500、600）。
  - 将全部 5 张生成的、无品牌的工作室产品 WebP 照片打包到本地 public/images/ 下，并在 ASSETS.md 中记录它们。
  - 将购物车商品、保护计划选择、对比 ID 和已下的模拟订单持久化到 localStorage；通过 window.location.hash 与所有路由双向同步。

## 变量
- [STORE_NAME] — 店面名称（默认：“VoltGrid Hardware”）。虚构的消费电子产品商店名称
- [TAGLINE] — 店面标语（默认：“Engineered Essentials. Zero Brand Markup.”）。简短的工业设计风格标题标语
- [SUPPORT_EMAIL] — 支持邮箱（默认：“support@voltgrid.example”）。符合 RFC-2606 的 .example 示例支持地址
- [CREDIT] — 在页脚保留一个指向 https://vibefather.ai/t/consumer-electronics-store 的小型“Template by VibeFather”链接（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/consumer-electronics-store?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
