> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 销售 CRM 仪表盘（Sales CRM Dashboard）

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个面向 [BRAND] 的单页 CRM 应用，[BRAND] 是 [TEAM] 的销售工具，[TEAM] 是一个销售 [FOCUS] 的小团队，以 [CURRENCY] 计价。它必须是一个真实的应用，而不是一个原型：五阶段销售管道看板，支持指针拖放和键盘替代操作；联系人表格，支持排序/搜索/筛选；交易抽屉，包含可编辑字段、备注和活动时间线；洞察视图，包含 SVG 图表；以及约 40 条预置的虚构交易，持久化在 localStorage 中并支持重置。单页：index.html 作为哈希路由应用（#/pipeline、#/contacts、#/insights；#/deal/<id> 打开抽屉）。一切都在浏览器中运行；不会提交到任何地方。

- 受众：与销售相邻的构建者：评估 CRM 应该是什么感觉的独立创始人和小团队运营者，以及需要一个把密集数据 UI 做对的 app-shell 模板的开发者。
- 目标：感觉像软件，而不是落地页。在一分钟内，访客拖动一笔交易、打开一个抽屉、编辑一个值、重新加载，并发现一切都在他们离开时的位置。
- 语气：简洁的产品文案：按钮动词、一行空状态，应用中任何地方都没有营销口吻。示例数据带有可信的 B2B 质感。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react (MIT)、react-dom (MIT)、motion (motion.dev，从 'motion/react' 导入) (MIT)、lucide-react (MIT)、tailwindcss (MIT)、postcss (MIT)、autoprefixer (MIT)、vite (MIT)、@vitejs/plugin-react (MIT)、typescript (Apache-2.0)、@fontsource-variable/inter (OFL-1.1)、@fontsource/jetbrains-mono (OFL-1.1)
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化（Setup）：
  - 使用 react-ts 模板通过 npm create vite@latest 脚手架创建。项目根目录只有一个 HTML 页面：index.html（入口 src/main.tsx）——一个 hash 路由应用（监听 hashchange；解析 '#/pipeline'、'#/contacts'、'#/insights'、'#/deal/<id>'；未知路由落到 #/pipeline，绝不报错）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要把 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，把设计（Design）下的每个颜色以 kebab-case 键加入 theme.extend.colors（canvas、panel、chrome、hairline、ink、ink-soft、indigo、indigo-deep、indigo-mist、good、warn、danger），并设置 fontFamily sans ['Inter Variable', 'system-ui', 'sans-serif']、mono ['JetBrains Mono', 'ui-monospace', 'monospace']。将 borderRadius DEFAULT 设为 8px。
  - 在 src/fonts.ts 中导入 '@fontsource-variable/inter' 以及 '@fontsource/jetbrains-mono/400.css'、'@fontsource/jetbrains-mono/500.css'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（阶段、负责人、带确定性种子生成器的种子公司/交易/活动、图表标签、所有文案——带类型），src/lib/brand.ts（brandSlug = [BRAND] 转为小写，并将每一段连续的非字母数字字符替换为 '-'），src/lib/storage.ts（安全的 localStorage get/set，键为 brandSlug + ':crm'），src/lib/format.ts（money(cents, [CURRENCY]) 带区域格式化；initials(name)；ageInDays(fromSeed)）；src/lib/router.ts（hash 路由解析/订阅）。
  - 状态（State）：src/store/crm.ts 是一个小型外部 store（useSyncExternalStore），持有整个数据集 { deals, contacts, activities }，从 localStorage 加载，或在首次运行时播种。动作（Actions）：moveDeal(id, stage, index)、updateDeal(id, patch)、addNote(id, text)、toggleWon(id)（stage → Won）、resetData()。每个动作都会持久化。抽屉路由（#/deal/<id>）按 id 读取当前交易——缺失的 id 会关闭抽屉并返回上一个视图，绝不报错。
  - 拖放为手写实现：在卡片上 pointerdown 开始拖拽（带 6px 阈值），pointermove 抬起卡片（一个固定定位的克隆，原位置为 40% 不透明度的幽灵），按边界矩形对阶段列进行命中测试，pointerup 放下；Escape 在拖拽中途取消。键盘：卡片是按钮；Enter 打开抽屉；Alt+ArrowLeft/Right 将聚焦的交易移动一个阶段（通过 aria-live 区域播报）。不使用 dnd 库。
  - 图表为手写 SVG：BarChart（按月收入，12 根柱，轴刻度，悬停提示），StageBar（水平堆叠分布），Sparkline（按负责人）。不使用图表库。
  - 组件位于 src/components/：AppShell.tsx（Sidebar.tsx、TopBar.tsx 含 SearchInput、FilterMenu、NewDealButton），kanban/（Pipeline.tsx、StageColumn.tsx、DealCard.tsx、DragLayer.tsx），contacts/（ContactsTable.tsx、ContactRow.tsx、ContactCard.tsx 移动端），drawer/（DealDrawer.tsx、TimelineList.tsx、EditableValue.tsx、NoteBox.tsx），insights/（Insights.tsx、BarChart.tsx、StageBar.tsx、TopDeals.tsx、Sparkline.tsx），common/（Avatar.tsx 首字母、Badge.tsx、EmptyState.tsx、Toast.tsx）。src/pages/App.tsx 按路由组合。
  - public/favicon.svg 如资源（Assets）部分所述。index.html：lang en，<meta name='theme-color' content='#F7F8FA'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[BRAND] — Sales CRM</title>。
  - 在项目根目录按资源（Assets）部分所述编写 ASSETS.md。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体和 favicon.svg。保持在 5 MB 以下——不要图片。

## 变量
- [BRAND] — 应用名称（默认：“Pipestack”）。虚构的 CRM 名称。用于标题、顶部栏、页脚版权信息和 localStorage 键。绝不是真实产品。
- [TEAM] — 团队名称（默认：“Northmill Supply”）。使用该 CRM 的虚构公司。驱动顶部栏团队标签、种子交易公司的上下文（它们向 [TEAM] 的市场销售）以及欢迎语。两个常见词。
- [FOCUS] — 他们销售什么（默认：“industrial sensor hardware”）。所销售的产品——驱动种子公司名称和交易标题（'42-unit sensor rollout'）。保持具体的 B2B。
- [CURRENCY] — 货币（默认：“USD”）。用于所有金额格式化的三字母货币代码（USD、EUR、GBP）。驱动每个值、总计和图表刻度的 money() 格式化。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接指向 https://vibefather.ai/t/sales-crm-dashboard（默认：是；删除此行以移除它）

Pages & Sections 下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块键控，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/sales-crm-dashboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
