> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 即将上线页面（Coming Soon Page）

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造的单屏即将上线页面，旨在传递 [PROMISE]。包含漂移的极光（aurora）背景、到 [DATE] 的实时倒计时、邮箱收集（仅客户端）、三特性预告和微型页脚。单页，index.html；一切都在浏览器中运行。

- 受众：一位好奇的访客，从某个链接点进来，只会给你八秒钟：他们想知道即将到来的是什么、何时到来，以及留下邮箱是否有任何代价（并没有）。
- 目标：邮箱收集。五秒内访客看到承诺和倒计时；二十秒内他们要么输入了邮箱，要么关闭了标签页。
- 语气：安静的自信：一个承诺，没有感叹号，零个“revolutionary”。

## 技术栈（Stack）
- 框架（Framework）：Vite 5 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（ISC）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource-variable/sora（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化（Setup）：
  - 使用 react-ts 模板通过 npm create vite@latest 脚手架创建（如果最新模板面向更新的主版本，则固定版本），然后保留一个真实 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的每种颜色添加到 theme.extend.colors，使用 kebab-case 键名（night、panel、line、bone、mist、apricot、apricot-deep、apricot-mist、slateink、good），并设置 fontFamily display ['Sora Variable', 'system-ui', 'sans-serif']、sans ['Inter Variable', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 10px，并添加 maxWidth { shell: '720px' }。
  - 在 src/fonts.ts 中导入 '@fontsource-variable/sora' 和 '@fontsource-variable/inter'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 极光背景（aurora background）仅存在于 CSS 中（index.css）：三个绝对定位的径向渐变（radial-gradient）层（Apricot Mist、深蓝色 #1B2547 和紫色 #2A2350 色调），不透明度为 40–60%，每层在 26–40s 内以不同的持续时间交替无限（alternate-infinite）动画 translate/scale；外加一个 SVG 噪点颗粒叠加层（内联 data-URI feTurbulence，不透明度 4%，在 index.css 中定义一次）。在 prefers-reduced-motion 下，关键帧暂停（animation-play-state: paused）——渐变仍然渲染，但为静态。
  - 文件布局：src/content.ts（品牌、承诺语、三个功能、倒计时标签、所有字符串，带类型），src/lib/brand.ts（brandSlug = [BRAND] 转为小写，并将每一段连续的非字母数字字符替换为 '-'，emailDomain = 去掉连字符的 brandSlug + '.com'），src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键为 brandSlug + ':waitlist'），src/lib/countdown.ts（用 new Date 解析 [DATE]；timeLeft(target) → { days, hours, minutes, seconds, done }）。
  - 状态（State）：src/store/waitlist.ts 是一个小型外部存储（useSyncExternalStore），持有 { email, saved } 并持久化到 localStorage；一个时钟 hook 每秒滴答一次（滴答是信息性的——在减少动态效果下没有动画也会继续）。
  - 组件位于 src/components/：Aurora.tsx（三个 CSS 层 + 颗粒），BrandMark.tsx（绘制的字形 + 字标），Countdown.tsx（CountCell.tsx），EmailCapture.tsx（字段状态内联），FeatureRow.tsx（FeatureChip.tsx），MicroFooter.tsx（SocialChip.tsx），Toast.tsx。src/pages/Soon.tsx 组合它们。
  - 倒计时（Countdown）：四个 CountCell（DAYS / HOURS / MINUTES / SECONDS），使用 Sora 700 等宽数字（tabular）40px 数字，位于 11px 大写 Mist 标签之上；数字切换无动画（宽度由等宽数字保持）；完成后，整行交叉淡入淡出为 'We're live — check your inbox first.'
  - EmailCapture：一个输入框（高度 52px，Night 填充，1px Line 边框，聚焦时 Apricot 环）+ 主按钮 'Notify me'；内联验证（无效时字段下方显示一行 Mist 文本 'That email looks unfinished'，无红色警报）；成功后，这一对交叉淡入淡出为 Good 行 'Saved in this browser — the demo sends nothing. Real launch notes come from hello@' + emailDomain。
  - public/favicon.svg 如资源（Assets）下所述。index.html：lang en，<meta name='theme-color' content='#0B1023'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[BRAND] — coming soon</title>。
  - 在项目根目录编写 ASSETS.md，如资源（Assets）下所述。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体和 favicon.svg。保持在 2 MB 以下。

## 变量
- [BRAND] — 品牌名称（默认："Ferrywheel"）。虚构产品的名称，一个单词。用于标志、标题、页脚和电子邮件（hello@ + 不含连字符的 brandSlug + '.com'）。绝不是真实产品。
- [PROMISE] — 承诺语（默认："handoff notes that write themselves while you ship"）。一个描述即将推出内容的小写短语。重写 H1 的第二行和功能标签。保持具体，不要夸张。
- [DATE] — 发布日期（默认："January 14, 2027"）。倒计时指向的完整未来日期，格式如 'January 14, 2027'。保持在未来，以便演示倒计时；日期本身不会打印在页面上。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接指向 https://vibefather.ai/t/coming-soon-page（默认：是；删除此行以移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块键控，以便之后无需修改组件即可替换内容。

## 设计
### 颜色（Colors）
- 夜色（Night）`#0B1023` — 页面底色 — 深靛蓝。
- 面板（Panel）`#131A36` — 输入框填充、标签填充、toast。
- 线条（Line）`#28305A` — 1px 边框：输入框、标签、分隔线。
- 骨白（Bone）`#EFF1F6` — 主文本、数字、字标。
- 薄雾（Mist）`#98A0BC` — 标签、提示、校验行、微型页脚。
- 杏色（Apricot）`#E8A26B` — 唯一的暖色强调：主按钮、聚焦环、品牌字形、极光的暖色层、选中态。
- 深杏（Apricot Deep）`#C9844F` — 悬停/按下态的主按钮。
- 杏雾（Apricot Mist）`#3A2E33` — 极光暖色层基底、标签底色。
- 石板墨（Slate Ink）`#1A1006` — 杏色填充上的文本。
- 良好（Good）`#69C08C` — 已保存状态行、完成勾选。

### 字体排印（Typography）
- 展示字体：H1、倒计时数字、字标 — Sora：Sora（OFL），字重 600/700
- 文本与 UI：承诺语、特性、页脚 — Inter；倒计时中的等宽数字：Inter（OFL），字重 400/500

### 布局与动效（Layout & motion）
- 间距：8px 基准单位。单列居中，最大宽度 720px，两侧内边距 24px；屏幕为单个 100dvh 弹性列：标记（顶部 12vh）、承诺语 + 倒计时 + 采集（居中）、特性与微型页脚（底部）。字号阶梯：H1 clamp(34px, 5vw, 56px) Sora 700 行高 1.08；承诺语 17px Inter 400 / 1.6 薄雾色，最大宽度 92% 46ch；倒计时数字 40px Sora 700 等宽数字，配 11px 标签；特性标签 14px Inter 500；页脚 12.5px。按钮：高度 52px，Inter 600 14px；主按钮杏色填充配石板墨文本。输入框：高度 52px，夜色→面板填充，聚焦时杏色边框 + 2px 偏移环。全局聚焦：2px 杏色轮廓，3px 偏移。
- 圆角：输入框、按钮和 toast 为 10px；特性标签和社交标签为 999px。
- 动效：缓动：--ease-out cubic-bezier(0.22, 0.61, 0.36, 1)。夜色启动缓慢：除悬停态外，任何动效不低于 500ms。
- 动效：极光：三层以 26–40s 交替无限关键帧漂移（平移 ±4%，缩放 1→1.06），错开时间使其永不同步；颗粒叠加层为静态。
- 动效：入场：标记淡入 400ms；承诺语上移 10px 600ms；倒计时淡入 600ms 延迟 150ms；特性错开 80ms；页脚最后淡入。
- 动效：倒计时：数字即时切换（信息性）；每分钟一次，秒单元格的标签以 4% 不透明度脉冲 — 在减少动效模式下完全移除。
- 动效：EmailCapture：输入框聚焦环缓动 160ms；已保存状态交叉淡入 260ms；主按钮悬停加深至深杏 160ms。
- 动效：完成态：当倒计时归零，该行交叉淡入至发布行（300ms），极光的暖色层提亮一档（类切换，600ms）。
- 动效：prefers-reduced-motion: reduce — 极光暂停（静态渐变），无入场动效（内容静止），无脉冲；倒计时继续跳动；颜色悬停保留。在 index.css 中使用 CSS @media 加上 Motion 的 useReducedMotion。
- 图像：无照片、无图片：极光为分层 CSS 渐变加一个内联 SVG 噪点颗粒；品牌字形、标签和 favicon 均以代码绘制。社交标签使用 lucide 图标，绘制为通用样式（AtSign、Globe、Mail）— 绝不使用平台标志。图标：仅 lucide-react，描边宽度 1.75。

## 页面与区块
### 即将上线（`index.html`）
1. **内容文件与文案规则** — 以下所有文案均按默认值撰写（[BRAND] = Ferrywheel，[PROMISE] = handoff notes that write themselves while you ship，[DATE] = January 14, 2027）。将每个字符串放入 src/content.ts 并从中渲染。若任何变量不同，请重写承诺语、三个功能标签和页脚行以适配该产品，保持数量不变（3 个功能、3 个社交标签）。功能标签：'Writes while you work'（PenLine）— 'captures decisions as they happen'；'Reads like you wrote it'（BookOpen）— 'in your tone, not a template's'；'Never a blank page'（Sparkles）— 'drafts wait pre-filled, you edit'。页脚行：'hello@' + emailDomain + ' · quietly building'。社交标签：AtSign 'Mastodon-ish'、Globe 'Website-ish'、Mail 'Email' — 每个均为惰性 '#' 锚点，标题为 'Demo link (sample)'。所有数量、链接和声明保持示例诚实。
   布局：不适用
   动效：不适用
2. **标志与承诺语** — BrandMark：一个 36px 的绘制字形（由六个点组成的摩天轮圆形，其中一个为 Apricot 座舱 — 内联 SVG），旁边是字标 '[BRAND]'（Sora 700 20px）。下方为 H1：'Almost there.'，第二行为 Mist 色的承诺语（'[PROMISE]' 以 60% 大小设置，Inter 400）。
   布局：居中；标志位于 12vh；H1 最大宽度 20ch。
3. **倒计时与捕获** — Countdown 行（四个单元格，之间为 2px Line 分隔线，非盒子）。其下为一行安静的文字 'Launching soon — no newsletter, one email, then silence'（12.5px Mist）。下方为 EmailCapture：输入框占位符 'you@somewhere.com' + 主按钮 'Notify me'；小字行 'Sample form: saved in this browser only.' 位于其下，始终可见；成功时按 Setup 切换为 Good 行。
   布局：居中列，间距 20px；捕获行最大宽度 420px。
4. **功能预告与微型页脚** — FeatureRow：一行三个 FeatureChips（在 560px 以下换行为列）：图标位于 Panel 凹槽上 + 标签（Inter 500 14px Bone）+ 一行承诺语（12.5px Mist）。MicroFooter：顶部为发丝线 Line 边框，高 20px：左侧为社交标签；右侧为 '© [BRAND]' 和 'Built with a VibeFather template'，链接至 https://vibefather.ai。
   布局：功能行间距 24px；页脚固定于底部，内边距 24px。

## 资产（Assets）
- 图像（image）：完全不使用任何图片：极光（aurora）由 CSS 渐变加上一个在 index.css 中定义的内联 SVG 噪点 data-URI 叠加层构成；字形（glyph）、标签（chips）和网站图标（favicon）均以代码绘制。不要获取或热链任何内容。
- 图像（image）：在项目根目录写入 ASSETS.md，列出以代码绘制的资产（极光层、颗粒叠加层、品牌字形、社交标签、网站图标——"以代码绘制，原创"）以及 npm 包：@fontsource-variable/sora 和 @fontsource-variable/inter（OFL-1.1）以及 lucide-react（ISC）。
- 图标（icon）：仅使用 lucide-react：AtSign、BookOpen、Globe、Mail、PenLine、Sparkles。描边宽度 1.75，14–18px，颜色继承。public/favicon.svg：viewBox 0 0 32 32，一个 32x32 的圆角方块填充 #0B1023，一个摩天轮字形（Bone 圆形轮廓带六个圆点，一个 Apricot 座舱）。不使用任何平台或品牌标志。
- 字体（font）：安装 @fontsource-variable/sora 和 @fontsource-variable/inter，并按"设置（Setup）"中所述在 src/fonts.ts 中导入它们。Vite 会将 woff2 文件打包进 dist/。

## 禁止事项
- 无后端、无表单提交、无 API 请求、无分析、无 Cookie：捕获内容仅保存在 localStorage 中并明确说明；社交芯片为无交互的演示锚点。
- 每个内部链接都指向页面自身（./index.html）——绝不指向裸目录；只有一个页面。
- 不使用真实产品名称、平台标志或社交标识；品牌、字形和芯片均为虚构并绘制为通用样式。
- 除倒计时本身外，不制造虚假紧迫感或发布日期声明；[DATE] 为虚构的未来默认值且日期从不打印；任何地方不出现年份。
- 不使用照片、插图或第三方资源；背景仅用 CSS 且自包含。
- 一切自托管：字体通过 Fontsource，图标以 npm 包或内联 SVG 形式引入。不使用 CDN <script> 或 <link> 标签，不使用 Google Fonts。
- 生产构建：压缩、无 source map、不将 src/ 复制到 dist/、单条命令 npm run build、输出在 dist/ 下且小于 2 MB。
- 除微型页脚署名链接外，页面内绝不提及 VibeFather。
- 尊重 prefers-reduced-motion：极光暂停、无入场动画、无脉冲；倒计时继续走时且捕获功能完全可用。
- 页面必须在 1440x900 桌面端和 390x844 移动端正常工作（列换行，倒计时单元格必要时 2x2 配对）且零控制台错误；输入框、按钮和芯片仅用键盘即可操作并有可见焦点环。

---
— Prompt by VibeFather · https://vibefather.ai/t/coming-soon-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
