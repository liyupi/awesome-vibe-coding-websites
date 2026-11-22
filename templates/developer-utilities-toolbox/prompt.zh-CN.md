> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 开发者实用工具集

请完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一个触感强、工艺精湛的浏览器本地开发者工具套件，包含 15 个真正可用的工具，每个工具都位于自己的 hash 路由上，并同步文档标题和工具描述。所有操作 100% 在浏览器本地运行，零网络调用或上传。

- 受众：软件工程师、前端开发者、SRE 和设计师，他们需要快速、无干扰的编码、格式化、差异对比、正则测试、颜色对比度检查和哈希计算，而无需将敏感数据粘贴到广告泛滥的网站中。
- 目标：在桌面端直接打开即可使用的分栏工作台，在移动端为干净的单列工具视图，配有常驻侧边栏工具目录、持久化在 localStorage 中的收藏和最近历史、Cmd+K / Ctrl+K 命令面板，以及无缝的浅色/深色切换。
- 基调：技术文具风：清晰的细线边框、充裕的留白、精确的表格等宽读数、醒目的青柠色高亮，以及零营销废话。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：lucide-react (ISC)、@fontsource/space-grotesk (OFL-1.1)、@fontsource/inter (OFL-1.1)、@fontsource/jetbrains-mono (OFL-1.1)
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置：
  - 在 vite.config.ts 中设置 base: './' 和 build.sourcemap: false。
  - 在 tailwind.config.js 中配置 darkMode: 'class'，显示字体使用 Space Grotesk，无衬线字体使用 Inter，等宽字体使用 JetBrains Mono。
  - 在 src/main.tsx 中导入 @fontsource/space-grotesk（500、600、700）、@fontsource/inter（400、500、600）和 @fontsource/jetbrains-mono（400、500、600）。
  - 将所有品牌文案、工具元数据和默认示例输入保留在 src/data/tools.ts 中。
  - 将收藏、最近工具历史和主题偏好持久化到 localStorage，使用基于 [BRAND] 派生的命名空间键。

## 变量
- [BRAND] — 应用名称（默认："BenchKit"）。显示在侧边栏标题、页面标题和命令面板中的短名称。
- [TAGLINE] — 简短标语（默认："15 local developer utilities. Zero uploads."）。显示在主页目录和隐私横幅上的简洁副标题。
- [DOMAIN_HINT] — 本地域名标签（默认："benchkit.local"）。用于示例 JSON、JWT、URL 和电子邮件片段中。
- [SUPPORT_EMAIL] — 示例联系邮箱（默认："ops@benchkit.local"）。用于载荷和页脚中的示例邮箱。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接指向 https://vibefather.ai/t/developer-utilities-toolbox（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- 纸白（Paper White）`#FBFBF9` — 浅色模式主画布背景
- 纸面白（Sheet White）`#FFFFFF` — 浅色模式下的抬升工作台面板和卡片
- 墨黑（Ink Black）`#15171A` — 主文本、激活胶囊标签和清晰的结构边框
- 石板灰（Slate Muted）`#59606B` — 次级标签、描述和行号（WCAG AA）
- 电光青柠（Electric Lime）`#A3E635` — 激活路由指示器、主操作高亮和本地安全脉冲
- 深苔绿（Deep Moss）`#3F6212` — 浅青柠表面上的高对比度强调文本
- 曜石黑（Obsidian Dark）`#101215` — 深色模式主画布背景
- 石墨面板（Graphite Panel）`#171B20` — 深色模式抬升卡片和编辑器井

### 字体排印
- 展示与工具标题：Space Grotesk（OFL），字重 500/600/700
- UI 正文与标签：Inter（OFL），字重 400/500/600
- 代码、载荷与表格指标：JetBrains Mono（OFL），字重 400/500/600

### 布局与动效
- 间距：紧凑工程网格：264px 固定桌面侧边栏，主工作区 24px–32px 内边距，16px 面板间距，12px 内部工具栏节奏。
- 圆角：8px 清晰容器，6px 输入框和按钮，999px 状态胶囊。
- 动效：140ms ease-out 悬停高亮，侧边栏项上激活青柠轨道滑动
- 动效：160ms 缩放淡入，用于 Cmd+K 命令面板模态框
- 动效：复制按钮上 1.2s 短暂青柠对勾确认状态
- 动效：遵循 prefers-reduced-motion，禁用变换和过渡
- 图像：纯代码绘制的技术 UI：清晰的 Lucide 图标、精确 SVG 对比度仪表、用于 Image-to-Data-URI 的示例内联几何 SVG，以及空/概览标题上微妙的点阵纸张纹理。

## 页面与区块
### 全部工具目录 — [BRAND] (`#/`)
1. **持久化应用外壳（页头 + 侧边栏 + 命令面板）** — 左侧边栏（移动端为可折叠抽屉）展示 [BRAND] 几何标志、“100% Local · Nothing Uploaded” 青柠点隐私徽章、显示 “⌘K” 的即时搜索触发按钮、固定收藏区、最近历史区（最近使用的 5 个工具），以及全部 15 个工具，分为 5 类：格式化与代码、编码与 Web、安全与加密、文本与正则、设计与时间。顶栏显示当前路由面包屑、快捷 “⌘K Jump” 胶囊按钮，以及浅色/深色主题切换。
   布局：桌面端固定 264px 左侧栏（lg:flex），带 1px ink/10 细线分隔；粘性 56px 顶栏，含单行控件和移动端菜单抽屉按钮。
   动效：140ms 平滑侧边栏激活态高亮，以及 Cmd+K 模态框内即时键盘导航（Up/Down/Enter/Esc）。
2. **工作台概览主视觉与快速启动网格** — 简洁技术风横幅，含 [BRAND] 标题、[TAGLINE]、15 个本地工具的实时计数、快速搜索/筛选栏、固定收藏条，以及全部 15 个工具的结构化 3 列便当式目录，带分类标签、一行描述、星标/收藏按钮，并内嵌一张交互式 “Quick Scratchpad” 预览卡，展示实时 JSON/Hash/Base64 检测。
   布局：微妙的点阵纸张页头卡片，后接分类筛选胶囊按钮和响应式 1/2/3 列卡片网格。
   动效：工具卡片悬停时清晰的 border-ink 上浮效果，带青柠色角标索引徽章。

### JSON 格式化与校验器 — [BRAND] (`#/json`)
1. **JSON 格式化与校验工作台** — 为 [BRAND] 预载真实感示例 JSON 载荷，实时语法校验并精确指示错误行/列，提供格式化（2 空格 / 4 空格）、压缩、按键名字母排序、校验、清空、加载示例和复制输出控件，以及实时字节大小、键数量和嵌套深度统计。
   布局：桌面端双列并排等宽编辑器，移动端堆叠，带紧凑操作工具栏和状态页脚。
   动效：即时绿色/青柠色有效胶囊或深红色语法错误横幅过渡。

### Base64 编码与解码 — [BRAND] (`#/base64`)
1. **Base64 UTF-8 与 URL 安全工作台** — 双向编码/解码模式切换、URL 安全 base64 选项（- 和 _ 且无填充）、完整 UTF-8 多字节支持、交换输入/输出按钮、示例载荷加载器、字节差量徽章和复制按钮。
   布局：分栏双窗格工作台，带方向切换栏和实时字符/字节计数器。
   动效：交换动画反馈，输入时即时实时转换。

### URL 编码器与查询解析器 — [BRAND] (`#/url`)
1. **URL 编码/解码与结构化查询参数编辑器** — 在 encodeURIComponent 和完整 URI 编码之间切换、解码面板，以及交互式解析明细，展示协议、主机、路径名、哈希，和可编辑的键值查询参数表，实时重建 URL。
   布局：顶部 URL 栏和编码/解码分栏窗格，下方为整洁的结构化组件和查询参数表。
   动效：查询参数编辑器中实时行添加/删除过渡。

### JWT 解码器与检查器 — [BRAND] (`#/jwt`)
1. **JSON Web Token 检查器** — 为 [DOMAIN_HINT] 预载有效演示 JWT，彩色编码三段式令牌视图（Header、Payload、Signature），格式化的 JSON Header 和 Payload 卡片，带人类可读声明说明（iss、sub、iat、exp、scope），过期状态徽章，并明确提示签名验证需在离线环境使用你的密钥。
   布局：左侧原始 JWT 输入，带彩色分段预览条；右侧堆叠 Header、Payload 和 Claims Summary 卡片。
   动效：编辑令牌时即时分段高亮。

### 正则测试器与匹配高亮器 — [BRAND] (`#/regex`)
1. **正则表达式测试器** — 模式输入，带交互式标志开关（g、i、m、s、u）、快捷预设芯片（Email、Semantic Version、IPv4、Hex Color、ISO Time）、实时测试字符串编辑器，内联青柠色高亮匹配覆盖层、匹配计数徽章，以及结构化捕获组明细表。
   布局：全宽模式栏，下方为分栏的实时高亮测试区和匹配/捕获组检查器。
   动效：每次按键即时更新匹配高亮。

### 文本差异查看器 — [BRAND] (`#/diff`)
1. **逐行文本差异工作台** — 原始和修改后的等宽文本输入，预载真实感配置对比，真实 LCS 逐行差异引擎，支持统一和分栏视图模式、忽略空白开关、新增/删除/未变更行计数器，以及可复制的统一补丁输出。
   布局：双输入窗格，下方为全宽彩色编码差异查看器，带清晰的 +/- 行号槽。
   动效：即时重新计算差异，插入和删除行带微妙着色。

### UUID 与密码生成器 — [BRAND] (`#/uuid`)
1. **加密 UUID v4 与高熵密码生成器** — 使用浏览器 crypto.getRandomValues()：批量 UUID v4 生成器（一次 1–25 个，大写/无连字符开关，全部复制），以及加密密码生成器，带长度滑块（8–64）、字符集开关、排除易混淆字符、实时熵位计算和强度计。
   布局：桌面端两张均衡卡片并排（UUID 批量面板和密码生成器面板），移动端堆叠。
   动效：平滑强度计条填充和复制反馈状态。

### 颜色转换器与 WCAG 对比度检查器 — [BRAND] (`#/color`)
1. **颜色格式转换器与无障碍对比度实验室** — 交互式颜色选择器和可编辑的 HEX、RGB、HSL 输入，即时同步，精选调色板色块，前景 vs. 背景交换按钮，实时 WCAG 2.1 对比度读数，普通文本、大文本和 UI 组件的 AA/AAA 通过/失败徽章，以及实时排版预览卡。
   布局：左侧颜色转换器输入 + 色块条；右侧实时对比度预览卡，带 AA/AAA 合规矩阵。
   动效：调整滑块或交换时平滑的背景/前景颜色过渡。

### Unix 时间戳转换器 — [BRAND] (`#/timestamp`)
1. **Epoch 与时区转换器** — 实时跳动的当前 Unix 时间戳（秒和毫秒），带暂停/复制控件，Epoch 转人类可读转换器（自动检测秒 vs. 毫秒），人类可读转 Epoch 构建器（本地和 UTC ISO-8601），相对偏移读数，以及多时区表（UTC、New York、London、Tokyo、Sydney）。
   布局：顶部实时时钟条，下方为两张转换器卡片和紧凑的多时区读数表。
   动效：实时时钟运行时微妙的青柠色脉冲点。

### Cron 表达式解释器 — [BRAND] (`#/cron`)
1. **5 字段 Cron 解析器与下次运行模拟器** — 可编辑的 5 字段 cron 表达式输入（分钟、小时、月内日、月份、星期几），可点击预设芯片（Every 5 min、Weekday 09:00、Nightly Backup、Monthly 1st），通俗英文人类翻译，逐字段明细卡片，以及计算出的接下来 5 次计划执行时间。
   布局：醒目的等宽 cron 输入栏、大型英文解释标注、5 列字段明细和即将到来的计划列表。
   动效：字段卡片高亮对应每个 cron 令牌。

### Markdown 实时预览 — [BRAND] (`#/markdown`)
1. **分栏 Markdown 编辑器与净化 HTML 预览** — 为 [BRAND] 预载真实感 README 片段，工具栏按钮包括粗体、斜体、代码、标题、链接、引用和列表，真实客户端 Markdown 转 HTML 渲染器，支持标题、粗体/斜体/内联代码、围栏代码块、表格、块引用、列表和水平线，字数/阅读时间计数器，以及复制 HTML / 复制 Markdown 操作。
   布局：桌面端可调整或均衡的 50/50 分栏编辑器和样式化正文预览，移动端为标签页或堆叠。
   动效：编辑 Markdown 时即时实时预览更新。

### 图像转 Data URI 编码器 — [BRAND] (`#/image-uri`)
1. **本地图像转 Base64 Data URI 转换器** — 拖放和点击文件选择器，支持 PNG、SVG、WebP 和 JPEG 文件（100% 本地 FileReader），外加一键 “Load Sample Graphic” 按钮，使用内联代码绘制的几何徽章，让访客可立即测试。显示缩略图预览、尺寸、原始 vs. 编码字节大小，以及可复制的 Data URI、CSS background-image 和 HTML img 片段。
   布局：左侧拖放区和预览元数据卡片；右侧多格式片段输出，带标签页（Data URI / CSS / HTML）。
   动效：文件拖入时青柠色虚线边框发光。

### 大小写转换器 — [BRAND] (`#/case`)
1. **多格式标识符与文本大小写转换器** — 单一文本输入，同时计算并显示 10 种格式，带一键复制按钮：camelCase、PascalCase、snake_case、SCREAMING_SNAKE_CASE、kebab-case、Title Case、Sentence case、dot.case、path/case 和 Constant Header-Case，外加单词/字符/行计数器。
   布局：顶部等宽源文本区，下方为整洁的 2 列实时转换格式卡片网格。
   动效：全部 10 张输出卡片即时同步更新。

### Lorem Ipsum 生成器 — [BRAND] (`#/lorem`)
1. **可配置占位文案生成器** — 模式选择器（段落、句子、单词、技术规格）、数量滑块（1–20）、"以经典开头起始"或"工程风格"开关、可选的 HTML <p> 包裹开关、即时重新生成按钮、单词/字符数读数，以及一键复制。
   布局：紧凑的控制栏位于简洁易读的输出面板上方，并带有复制按钮。
   动效：清晰的重新生成刷新反馈。

### Web Crypto 哈希生成器 — [BRAND] (`#/hash`)
1. **浏览器原生 SHA 摘要与 HMAC 工作台** — 使用原生 Web Crypto API（crypto.subtle.digest）为任意文本输入或拖入的本地文件同时实时计算 SHA-1、SHA-256、SHA-384 和 SHA-512 摘要，带有大写/小写十六进制切换、Base64 摘要视图，以及一个交互式校验和比较器输入框，匹配时亮起青柠色。
   布局：顶部输入文本域与本地文件拖放芯片，位于堆叠的摘要行和校验和验证栏上方。
   动效：当比较器与任一计算出的摘要匹配时，立即显示青柠色已验证徽章。

## 资源
- 图标：通过 npm 包 lucide-react（ISC 许可证）安装；在侧边栏、工具栏和命令面板中统一使用清晰的 1.75px 描边技术风格图标。
- 字体：通过 @fontsource/space-grotesk、@fontsource/inter 和 @fontsource/jetbrains-mono（OFL）安装；由 Vite 在本地打包。
- 图像：在 src/data/tools.ts 内以代码绘制的内联 SVG，用于品牌标识和 Image-to-Data-URI 一键示例加载器。

## 不要做
- 不要发起任何外部网络请求、CDN 字体加载或第三方 API 调用——每个工具都必须 100% 在浏览器本地运行。
- 不要伪造或打桩这 15 个工具中的任何一个；每个工具都必须对任意用户输入执行真正的实时计算。
- 不要在 UI 界面任何位置硬编码日历日期或版权年份；时间戳工具必须根据输入或当前 epoch 动态计算。
- 不要包含 source maps，也不要把 src/ 文件复制到 dist/；保持 vite base 设置为 './'。
- 不要在 1440x900 桌面端或 390x844 移动端出现水平溢出——在代码和输出框内始终应用 min-w-0 和 break-all/overflow-x-auto。
- 不要提及任何真实的第三方开发者工具网站或品牌。

---
— Prompt by VibeFather · https://vibefather.ai/t/developer-utilities-toolbox · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
