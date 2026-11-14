> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 产品更新日志页面

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [PRODUCT] 制作的单页更新日志，[SUMMARY]：在细线时间轴上呈现九条带版本号的条目，带实时计数的类型筛选器，可复制的版本锚点，一个订阅面板（仅客户端）以及一个订阅源标签。单页，index.html；一切都在浏览器中运行。

- 受众：在更新徽标出现后快速浏览“改了什么”的现有用户，以及把发布节奏当作信任信号来阅读的评估者。两者都想要具体细节，而不是营销话术。
- 目标：在十五秒内回答“有什么新内容”，并赢得一次订阅。滚动一屏，访客已读完三条条目标题；滚动两屏，他们已筛选到修复项或复制了版本链接。
- 语气：发布说明的口吻：具体、谦逊，偶尔拿 bug 开个玩笑。每条条目都用一行说明改了什么以及为什么重要。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/dm-serif-display（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 npm create vite@latest 以 react-ts 模板搭建脚手架（如果最新模板面向更新的主版本，则固定版本），然后保留一个真实的 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将 Design 下的每种颜色添加到 theme.extend.colors，使用 kebab-case 键名（warmwhite、panel、line、ink、softink、violet、violet-deep、violet-mist、feature、fix、breaking、improvement、good），并设置 fontFamily display ['DM Serif Display', 'Georgia', 'serif']、sans ['Inter Variable', 'system-ui', 'sans-serif']、mono ['JetBrains Mono', 'ui-monospace', 'monospace']。将 borderRadius DEFAULT 设为 8px，并添加 maxWidth { read: '760px' }。
  - 在 src/fonts.ts 中导入 '@fontsource/dm-serif-display/400.css'、'@fontsource-variable/inter' 和 '@fontsource/jetbrains-mono/400.css' 以及 '500.css'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（product、summary、九个条目 — { version, title, types: ('feature'|'improvement'|'fix'|'breaking')[], standfirst, changes: string[], note?: string }、subscribe 文案、每个字符串，带类型），src/lib/brand.ts（productSlug = [PRODUCT] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，emailDomain = productSlug 去掉连字符 + '.com'，feedUrl = './feed.xml'（演示路径，从不请求）），src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键为 productSlug + ':sub'），src/lib/anchors.ts（versionToAnchor('2.4.1') → 'v2-4-1'）。
  - 状态：src/store/filter.ts 是一个小型外部 store（useSyncExternalStore），保存活动类型过滤器的集合（空 = 全部）；src/store/sub.ts 保存 { email, saved }，持久化到 localStorage。
  - 组件位于 src/components/：SlimHeader.tsx（Wordmark.tsx、NewChip.tsx）、FilterBar.tsx（带计数的 TypeChip.tsx）、Timeline.tsx（EntryBlock.tsx：VersionChip.tsx、EntryTitle.tsx、TagRow.tsx、ChangeList.tsx、AnchorLink.tsx、NoteLine.tsx）、SubscribePanel.tsx、FeedChip.tsx、Footer.tsx。src/pages/Changelog.tsx 组合它们。
  - AnchorLink：一个 Link2 图标，在标题行内条目悬停/聚焦时出现；点击将完整锚点 URL（location.origin-safe：'./index.html#v2-4-1'）复制到剪贴板，并伴随 1.2s 的 Check 切换；条目带有 id={anchor}，并为粘性头部设置 scroll-margin-top。
  - 过滤：类型与活动集合相交的条目保持完整；其他条目变暗至 22% 不透明度并下沉 2px（180ms）— 它们保持原位（无重排）；计数行更新 'Showing 9 of 9' → 'Showing 3 of 9'；当过滤器处于活动状态时出现 Clear 芯片。TypeChip 计数始终显示真实总数（而非过滤后的总数）。
  - public/favicon.svg 如 Assets 下所述。index.html：lang en，<meta name='theme-color' content='#FBFAF7'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[PRODUCT] — changelog</title>。
  - 在项目根目录编写 ASSETS.md，如 Assets 下所述。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体和 favicon.svg。保持在 3 MB 以下。

## 变量
- [PRODUCT] — 产品名称（默认：“Traybike”）。虚构产品的名称，一个单词。用于字标、标题、页脚和电子邮件（notes@ + 不含连字符的 productSlug + '.com'）。绝不是真实产品。
- [SUMMARY] — 它是什么（默认：“a tray-based task app for people who close tabs too fast”）。一个描述产品的小写短语。重写页眉简介、条目文案和订阅行，使日志读起来真实。保持具体。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接指向 https://vibefather.ai/t/product-changelog-page（默认：是；删除此行以移除它）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块键控，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 暖白（Warm White）`#FBFAF7` — 全页背景。
- 面板（Panel）`#FFFFFF` — 订阅面板、悬停时的标签片。
- 线条（Line）`#E5E1D8` — 1px 细线：时间线轨道、卡片边框、分隔线。
- 墨色（Ink）`#1F211C` — 标题、正文、图标。
- 柔墨（Soft Ink）`#5F6258` — 导语、计数、说明文字、注释。
- 紫罗兰（Violet）`#6D5BD0` — 唯一强调色：版本标签片的边框和文字、锚点、链接、主按钮、焦点环、激活筛选填充。
- 深紫罗兰（Violet Deep）`#54469F` — 悬停和按下状态。
- 紫雾（Violet Mist）`#EDEAF9` — 激活标签片填充、标签片、条目悬停底色。
- 功能（Feature）`#2F7D5B` — 'feature' 标签片的颜色。
- 改进（Improvement）`#3E6B9E` — 'improvement' 标签片的颜色。
- 修复（Fix）`#B0812A` — 'fix' 标签片的颜色。
- 破坏性变更（Breaking）`#B4443C` — 'breaking' 标签片的颜色 — 谨慎使用且从不单独使用（标签本身带有文字）。
- 成功（Good）`#3E7A52` — 订阅成功、已复制勾选。

### 字体排印
- 展示字体：页面标题、条目标题 — DM Serif Display，带个性的衬线体：DM Serif Display (OFL)，字重 400
- 文本与界面：导语、变更内容、标签片、按钮 — Inter：Inter (OFL)，字重 400/500/600
- 等宽字体：版本标签片、锚点 id、订阅源标签片、快捷键说明：JetBrains Mono (OFL)，字重 400/500

### 布局与动效
- 间距：8px 基准单位。阅读栏最大宽度 760px 居中，两侧内边距 32px（640px 以下为 20px）。时间线：左侧 12px 处一条 1px 线条轨道，带条目圆点；条目之间以 56px 间距堆叠；每个条目是开放的（无卡片盒子）— 仅用细线。字号比例：页面标题 34px DM Serif；条目标题 22px DM Serif；导语 15.5px Inter 400 / 1.6 柔墨；变更内容 15px / 1.65 墨色，作为项目符号列表，间距 6px；版本标签片等宽 13px，面板上 1px 紫罗兰边框；标签 11px 大写 600 字距 0.08em，使用其颜色 12% 色调；计数 13px 等宽柔墨。按钮：高度 44px，Inter 600 13.5px；主按钮紫罗兰填充配白色文字。输入框：高度 44px，面板填充，1px 线条边框，聚焦时紫罗兰边框 + 2px 偏移环。全局焦点：2px 紫罗兰轮廓，3px 偏移。
- 圆角：标签片、按钮、输入框、面板为 8px；版本标签片和订阅源标签片为 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1)。纸般安静：除条目的首次显现外，任何动效不超过 240ms。
- 动效：条目显现：每个块进入时在 400ms 内上升 8px（Motion whileInView，一次）；轨道在首次视图时从顶部绘制（scaleY 0→1，600ms）。
- 动效：筛选：按所述 180ms 变暗/下沉；TypeChip 填充交叉淡入淡出 140ms；计数行交叉淡入淡出 160ms。
- 动效：AnchorLink：图标在条目悬停/聚焦时 140ms 淡入；复制→勾选切换以 120ms 缩放弹出。
- 动效：破坏性变更标签条目：其轨道上的圆点在首次显现时获得一次性 4px 脉冲（减少动效下关闭）。
- 动效：订阅：交叉淡入淡出到成功行 240ms；验证行淡出 160ms。
- 动效：链接：.link-draw 在悬停和 focus-visible 时以 240ms 生长 1px currentColor 下划线。
- 动效：prefers-reduced-motion: reduce — 无显现、无轨道绘制、无脉冲；筛选立即变暗（仅透明度）；一切静止且可用。在 index.css 中使用 CSS @media 加上 Motion 的 useReducedMotion。
- 图像：无照片或插图：页面是字体排印、标签片和细线；圆点、标签和 favicon 均以代码绘制。图标：仅 lucide-react，描边宽度 1.75。

## 页面与区块
### 更新日志（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值编写（[PRODUCT] = Traybike，[SUMMARY] = 一个面向关标签页太快的人的托盘式任务应用）。将每个字符串和全部九条记录放入 src/content.ts 并从中渲染。若任何变量不同，请重写简介、条目和订阅行，使日志契合该产品，同时保持数量（9 条记录；类型覆盖 feature/improvement/fix/breaking；至少一条 breaking 记录并附迁移说明）。条目（版本 · 标题 · 类型 · 导语 · 变更 · 备注）：'2.4.1' 'The tray stops flickering' [fix] 'a redraw bug that only appeared on Wednesdays (kidding — on refresh)' — 变更：'Fixed the tray flicker when a tab closes mid-drag'；'Removed a console log we shipped by accident (it said hi)'。'2.4.0' 'Trays in trays' [feature] 'sub-trays, for the organizers among us' — 'New: nest one tray inside another (up to three deep)'；'Long-press a tray header to fold it'；备注：'Shortcut: hold Shift while dropping to auto-nest'。'2.3.2' 'Faster cold start' [improvement] 'opens before your coffee does' — 'Cold start down to 380ms from 1.2s (sample figure)'；'Trimmed two dependencies that were mostly README'。'2.3.0' 'Search everything' [feature, improvement] 'one box, every tray' — 'New: Ctrl+K searches titles, notes and closed trays'；'Results preview the tray path'。'2.2.4' 'The great undo' [fix] 'undo now undoes, reliably' — 'Fixed undo skipping drags in rare cases'；'Undo history doubled'。'2.2.0' 'Dark mode, properly' [feature] 'not just inverted, actually tuned' — 'New theme follows the system'；'Contrast passes everywhere we could measure'。'2.1.3' 'Sync conflict dance' [fix] 'two devices, one tray, zero lost tabs' — 'Conflicts now merge instead of last-write-wins'；备注：'If you hit a conflict before this version, the log entry above explains the recovery'。'2.1.0' 'Tray sharing' [feature] 'send a tray, not a mess' — 'Share a read-only tray link'；'Recipients see live changes'。'2.0.0' 'Everything moves' [breaking] 'the 2.0 you asked for' — 'Trays replaced lists as the core object'；'Keyboard shortcuts remapped (see the guide)'；备注：'Migration: the in-app wizard walks old lists over — takes about a minute'。订阅行：'Get each release in your inbox — an email per version, nothing else.'
   布局：不适用
   动效：不适用
2. **精简页头** — 左侧：字标 '[PRODUCT]'（DM Serif 22px），其下为 'CHANGELOG · [SUMMARY]'（10.5px 大写 Soft Ink，截断为一行）。右侧：NewChip——最新版本置于等宽 Violet 边框胶囊中 'v2.4.1'——以及紧凑的主按钮 'Subscribe' → #subscribe。
   布局：顶部粘性，60px，Warm White 95% 不透明度加背景模糊，Line 底边框。
3. **引言与筛选栏** — 页头下方：页面标题 'What's new in [PRODUCT]'（34px DM Serif）和一行导语 'Nine releases, newest first — version numbers only, no dates to pretend about.'。FilterBar：四个 TypeChip（Feature 4 · Improvement 3 · Fix 3 · Breaking 1——计数为等宽 12px），多选切换；实时计数行 'Showing 9 of 9'；激活时显示 Clear 胶囊。
   布局：阅读栏；筛选栏位于导语下方 24px，不粘性。
4. **时间线条目** — 轨道上的九个 EntryBlock：一个 Line 圆点（最新条目为 Violet 填充；Breaking 条目的圆点为 Breaking 色），第一行为 VersionChip + 标签行 + AnchorLink，然后是标题、导语、ChangeList（项目符号，6px 间距），以及任何以 1px Violet 左边线分隔的 NoteLine（等宽提示读起来像提交脚注）。条目从不显示日期；排序为版本降序。
   布局：轨道位于左侧 12px；条目缩进 32px；条目之间 56px。
5. **订阅、feed 与页脚** — Section id='subscribe'：SubscribePanel（Panel，Line 边框，Violet 1px 顶部轨道）：标题 'One email per release'；诚实的正文 'Sample form — this demo saves your address in this browser only; a real changelog would mail from notes@' + emailDomain；输入框 + 主按钮 'Subscribe'；成功：Good 行 'Subscribed (in this browser). Silence until 2.5.0.'。旁边 FeedChip：绘制的 Rss 图标 + 'feed.xml' 等宽标签，一个惰性锚点，标题为 'Demo feed link (sample)'。页脚：左侧字标 + 'notes@' + emailDomain；右侧 '© [PRODUCT]. Sample changelog; every version above is invented.' 和 'Built with a VibeFather template' 链接至 https://vibefather.ai。
   布局：订阅与 feed 共享一行（面板扩展，胶囊位于旁边；640px 以下堆叠）；页脚 72px，Line 顶边框。

## 资产
- 图片：完全不使用图片：圆点、标签、标记和 favicon 均以代码绘制。不要获取或热链任何内容。
- 图片：在项目根目录写入 ASSETS.md，列出代码绘制的资产（轨道、圆点、版本/标签标记、订阅源标记、favicon——“以代码绘制，原创”）以及 npm 包：@fontsource/dm-serif-display、@fontsource-variable/inter、@fontsource/jetbrains-mono（OFL-1.1）和 lucide-react（ISC）。
- 图标：仅使用 lucide-react：Check、Link2、Rss、Sparkles、Wrench（未使用亦可）、Zap。描边宽度 1.75，14–18px，颜色继承。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的圆角方块填充 #1F211C，一个等宽风格的 'v' 字形为 #6D5BD0，带一个小圆点（类似版本标记）。不使用品牌标志。
- 字体：安装 @fontsource/dm-serif-display、@fontsource-variable/inter 和 @fontsource/jetbrains-mono，并按 Setup 中所述在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包进 dist/。

## 不要做
- 不要后端、不要表单提交、不要向 API 发起 fetch：订阅只保存在 localStorage 中，文案要说明这一点；feed 芯片是一个无交互的演示锚点，feed.xml 永远不会生成或获取。
- 每个内部链接都指向页面或锚点（./index.html、#subscribe、./index.html#v2-4-0）——绝不指向裸目录；只有一个页面。
- 不要真实产品、版本历史或发布说明文案；产品、版本和变更都是虚构的示例内容，带有普通的细节。
- 任何地方都不要日期或时间戳：条目仅按版本排序；不要“昨天发布”，不要年份——导语中“没有日期”的玩笑要保留。
- 不要图片、照片或 logo；一切用代码绘制。
- 一切自托管：字体通过 Fontsource，图标用 npm 包或内联 SVG。不要 CDN 的 <script> 或 <link> 标签，不要 Google Fonts，不要分析工具。
- 生产构建：压缩，不要 source map，不要将 src/ 复制到 dist/，单条命令 npm run build，输出在 dist/ 下，小于 3 MB。
- 页面内绝不提及 VibeFather，页脚署名链接除外；所有文案都是虚构的美式英语。
- 尊重 prefers-reduced-motion：不要显现动画，不要脉冲；筛选仅通过不透明度变暗。
- 页面必须在 1440x900 桌面和 390x844 移动端正常工作（侧栏缩进优雅折叠，芯片换行），控制台零错误；筛选、锚点、复制按钮、订阅和芯片仅用键盘即可操作，并有可见的焦点环。
- 无障碍：被筛掉的条目以变暗状态保留在无障碍树中，但其中的链接仍可聚焦——改为设置 aria-hidden 和 inert，使键盘顺序与视觉叙事一致；标签颜色始终与文本标签配对。

---
— Prompt by VibeFather · https://vibefather.ai/t/product-changelog-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
