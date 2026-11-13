> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# API 参考文档站点

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的单页 API 参考文档，即 [PRODUCT] 的 JSON API，版本为 [VERSION]。页面分为三栏：带即时搜索的端点导航栏、包含入门区块和八个端点区块的阅读栏（参数、带复制功能的标签式代码示例、响应示例），以及一个本页目录侧栏。单页，文件为 index.html；搜索、标签切换、复制和折叠功能全部在浏览器中运行。

- 受众：一位希望在五分钟内粘贴出第一个请求的开发者：他们想要基础 URL、一行 API 密钥说明、诚实的参数表格，以及真正与 schema 匹配的复制粘贴示例。
- 目标：快速完成首次成功调用。访客在十秒内看到基础 URL 和安装命令；在两分钟内复制一个 curl 示例，并通过搜索找到他们需要的端点。
- 语气：文档式的平实风格：简短的陈述句，不带营销腔调，在错误区块中有一处冷幽默。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/ibm-plex-sans（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化（Setup）：
  - 使用 npm create vite@latest 并选择 react-ts 模板进行脚手架搭建（如果最新模板面向更新的主版本，则固定版本），然后保留一个真实的 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的每种颜色添加到 theme.extend.colors，使用 kebab-case 键名（paper、panel、line、ink、softink、blue、blue-deep、blue-mist、get、post、patch、del、codebg、codetext、codestring、codekey、codecomment），并设置 fontFamily sans ['IBM Plex Sans Variable', 'system-ui', 'sans-serif']、mono ['IBM Plex Mono', 'ui-monospace', 'monospace']。将 borderRadius DEFAULT 设为 8px，并添加 maxWidth { container: '1440px', read: '760px' }。
  - 在 src/fonts.ts 中导入 '@fontsource-variable/ibm-plex-sans' 和 '@fontsource/ibm-plex-mono/400.css' 以及 '500.css' 和 '600.css'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局（File layout）：src/content.ts（所有字符串、端点、参数行、代码行、响应和错误，带类型 — endpoints: { id, group, method, path, title, desc, params: { name, type, required, default, desc }[], samples: { curl, js, py }, response: { status, body }[] }）、src/lib/brand.ts（brandSlug = [BRAND] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，baseUrl = 'https://api.' + 去除连字符的 brandSlug + '.dev/' + [VERSION]，npmPackage = '@' + 去除连字符的 brandSlug + '/client'，keyHeader = 'Authorization: Bearer ' + 去除连字符的 brandSlug.toUpperCase() + '_KEY'）。content.ts 中的每个 URL、包名和命令都由这些辅助函数构建 — 没有任何地方硬编码品牌。
  - src/lib/search.ts（score(query, endpoint) 匹配 title、path、group、参数名和描述；返回排序后的 id）、src/lib/clipboard.ts（copy(text) 使用 navigator.clipboard，并带有 textarea 回退）。
  - 状态（State）：src/store/docs.ts 是一个小型外部存储（useSyncExternalStore），持有 { query, activeEndpoint, copiedKey } — 无需持久化；搜索状态在加载时重置。
  - src/components/ 中的组件：Header.tsx（包含内联的 SearchBox.tsx）、EndpointNav.tsx（NavGroup.tsx、NavItem.tsx）、OnThisPage.tsx（AnchorRow.tsx）、GettingStarted.tsx（InstallLine.tsx 带 CopyButton.tsx）、EndpointBlock.tsx（MethodChip.tsx、PathLine.tsx、ParamTable.tsx、CodeTabs.tsx 带 TabButton.tsx 和 CopyButton.tsx、ResponseBlock.tsx 带 StatusChip.tsx 和 JsonView.tsx）、ErrorsBlock.tsx、Footer.tsx。src/pages/Docs.tsx 组合它们。
  - CodeTabs：三个标签按钮（curl / JavaScript / Python），使用 roving tabindex 和方向键，面板以 160ms 交叉淡入淡出切换；CopyButton 复制活动标签的原始文本（保存在隐藏字符串中，不从 DOM 抓取），并显示 Check 图标 1.2s。
  - 语法高亮为手写实现：示例存储为纯字符串，由 src/lib/highlight.ts 中的小型分词器（针对字符串、数字、键、注释和标志的正则 span）渲染为彩色 span — 无高亮器依赖。
  - JsonView：使用相同分词器预样式化的美化 JSON；响应标题行带有 StatusChip(s)（200 / 400）和一个折叠切换（旋转 chevron），以 240ms 动画 max-height。
  - 搜索（Search）：在 SearchBox 中输入会实时过滤左侧导航（不匹配项变暗至 30% 并下沉），Enter 聚焦第一个匹配项的块，Escape 清除；有活动查询时，阅读列中不匹配的 EndpointBlock 淡出至 25%，并在列上方显示粘性 'N results · clear' 栏。全部客户端实现。
  - public/favicon.svg 如资源（Assets）下所述。index.html：lang en，<meta name='theme-color' content='#FAFAF8'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[BRAND] API — [VERSION] reference</title>。
  - 在项目根目录编写 ASSETS.md，如资源（Assets）下所述。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体和 favicon.svg。保持在 4 MB 以下。

## 变量
- [BRAND] — API 名称（默认：“Ledgerline”）。虚构 API 的名称，一个单词。驱动字标、标题、基础 URL（api.<brand>.dev）、npm 包（@<brand>/client）、密钥请求头和每个示例命令。绝不使用真实 API。
- [PRODUCT] — 它提供什么（默认：“expense data for small teams”）。一个命名该领域的小写短语。重写入门文案、分组描述和端点一句话说明。保持具体。
- [VERSION] — API 版本（默认：“v1”）。路径前缀和版本标签，如 'v1'。保持每个示例 URL 一致；不使用日期。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接指向 https://vibefather.ai/t/api-reference-docs-site（默认：是；删除此行以移除）

Pages & Sections 下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块键控，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/api-reference-docs-site?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
