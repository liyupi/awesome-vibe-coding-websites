> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 游艇租赁网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个两页的游艇租赁网站，具有清晰的海事识别——海军蓝底色、白色面板、黄铜色细线、甲板灰等宽标签：一个明亮的海洋光感主视觉，展示一艘抛锚的游艇；一个可筛选的四艘游艇船队网格，带布局动画；一个通过查询路由的游艇详情页，包含规格和 SVG 甲板平面图；一张带编号停靠点的插画路线图上的示例行程；以及一个本地保存的报价请求。

- 受众：带船员的租赁公司、经纪人和精品船队，以及为他们服务的工作室。
- 目标：带访客从明信片走到计划：浏览船队、按同行人数筛选、研究甲板平面图、想象一条路线，并留下报价请求——每个价格和路线都如实标注为示例数据。
- 基调：海图桌般的精确与海盐浸染：简短的陈述句、等宽数字，不让形容词承担照片的工作。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/archivo（OFL）、@fontsource/roboto-mono（Apache-2.0）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 npm create vite@latest yacht-charter-website -- --template react-ts 搭建脚手架；将 tailwindcss@3.4、postcss 和 autoprefixer 添加为开发依赖；将 motion、lucide-react、@fontsource/archivo 和 @fontsource/roboto-mono 添加为依赖。
  - vite.config.ts：base 设为 './'，build.sourcemap 设为 false，并在 build.rollupOptions.input 中配置两个入口——index.html 和 yacht.html——以便一条命令构建两个页面。
  - tailwind.config.js：扩展颜色 navy #12263A、navyraised #1B3350、white #FCFBF7、deckline #D8DCE0、deckgray #8C959D、brass #B98F4E、brasslight #D3AC6C、ink #1B2B3A、haze #9FB4C2；fontFamily 的 sans 设为 'Archivo'，mono 设为 'Roboto Mono'；radius：panel 6px 和 pill 999px。
  - postcss.config.js：tailwindcss + autoprefixer。
  - src/components/FleetGrid.tsx：可筛选网格——三个筛选组以等宽字体标签（mono chips）呈现（类型：全部/帆船/机动 · 宾客：全部/最多 8 人/9–12 人 · 客舱：全部/4+/6+）；匹配的游艇在 Motion 的 AnimatePresence 中渲染，并带有布局动画，使卡片可见地重新排序（350ms）；不匹配的卡片以 40% 缩放淡出。
  - src/components/RouteMap.tsx：一幅用 SVG 绘制的插画海图，viewBox 0 0 800 460，置于白色面板上——一条虚构的通用海岸线作为甲板灰填充的陆块沿左上分布，四个小岛，一层浅蓝灰色海面渲染（5% deckgray），一层淡淡的 40px 经纬网格，以及当前行程以点状黄铜色路线路径（stroke-dasharray 2 8）呈现，并带有编号的黄铜色停靠点圆圈；停靠点位置来自 content.ts；切换行程时路线交叉淡入淡出（300ms）并重绘点状路径。
  - src/components/DeckPlan.tsx：一幅用 SVG 绘制的俯视甲板平面图，viewBox 0 0 720 220，置于白色面板上——船体为细长的圆角轮廓（ink 描边 2px，白色填充），船尾设有泳台，驾驶舱、沙龙和厨房为甲板灰着色的矩形并带 deckline 描边，四个客舱为 90×70 的矩形（左舷两个、右舷两个），船首设有一间船首套房；每个区域均以 Roboto Mono 11px 标注，并带 1px 黄铜色引导线；客舱数量是一个 prop，因此每艘游艇渲染各自的客舱数量（旗舰的几何布局为固定参考布局）。
  - src/lib/motion.ts：平静的变体——reveal（opacity 0→1，y 20→0，700ms cubic-bezier(0.16,1,0.3,1)，100ms 交错，whileInView 一次）——并通过 useReducedMotion 使布局重新排序即时完成、路线切换变为普通淡入淡出。
  - 将所有面向用户的字符串和数据集（品牌、水域、港口、入门价格、fleet 数组 {id, name, type, meters, guests, cabins, rate, photo, blurb}、itineraries {id, title, nights, stops[{n, name, line, at{x,y}}], path}、报价文案、联系方式）保留在 src/content.ts 中；两个页面均从中读取，因此值可在一处替换。
  - yacht.html 从 location.search（?id=aletia）读取 id，并将其映射到 fleet 数组；若无 id 或 id 未知，则显示第一艘游艇（旗舰），绝不显示空状态或未找到状态。页面之间的链接为文件名：./yacht.html?id=aletia 和 ./index.html#quote。index.html：<title>[BRAND] — Crewed Charters in [WATERS]</title>；yacht.html：<title>[BRAND] — Yacht name</title>（动态）；一个共享的、以代码绘制的 favicon.svg（一个黄铜色无锚点圆点与线条标记——海军蓝底上的简单黄铜色圆形）。

## 变量
- [BRAND] — 包船公司（默认：“Saltcrest Charters”）。为字标、页面标题和联系邮箱虚构的包船公司（来自 content.ts）。
- [WATERS] — 水域（默认：“the Vela Isles”）。虚构的巡航海域——主视觉标签、行程介绍和页脚（'[WATERS]' 是虚构群岛，绝非真实海岸线）。
- [PORT] — 母港（默认：“Port Selene”）。虚构的基地港口，包船在此登船，行程由此出发。
- [WEEK_FROM] — 入门周租价（默认：“€38,000”）。旗舰游艇的示例周租价——船队卡片、游艇详情价格行和主视觉副标题行（'from [WEEK_FROM] per week, all-inclusive, sample rate'）。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/yacht-charter-website（默认：是；删除此行即可移除）

页面与区块下的文案按默认值撰写。如果你的取值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/yacht-charter-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
