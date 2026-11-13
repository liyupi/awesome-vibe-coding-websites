> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 在线课程销售页

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简要说明
为 [COURSE] 打造的单页销售页，这是一门教授 [TOPIC] 的在线课程，由 [INSTRUCTOR] 授课，定价 $[PRICE]，或分三次付款、每次约 $[PRICE]/3（具体分期计算以 content.ts 为准）。它必须在一次滚动中完成长页面的任务：承诺 + 视频框主视觉（占位模态框，诚实呈现）、样本成果条、六模块课程手风琴、讲师故事、三个样本成果、含内容清单的全额付款/三次付款定价、30 天保证，以及八问 FAQ。单页：index.html，包含各区块（#curriculum、#instructor、#results、#pricing、#faq）。一切都在浏览器中运行；不会向任何地方提交内容。

- 受众：22–45 岁的爱好者和职业转型者，他们开着三个类似课程的标签页，还有一个装满弃坑项目的文件夹。当课程体系证明深度、成果显得诚实、保证消除最后一个借口时，他们就会购买。
- 目标：卖出报名。访客在十秒内知道他们将做出什么，并且知道这门课适合初学者；在三分钟内，他们已经读完两个模块、一个成果和保证。
- 语气：鼓励且具体，就像讲师发给学生的第一封邮件：具体成果（“你将发布一个 60 秒游戏”），零收入承诺，每屏一个温和的玩笑。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、motion（motion.dev，从 'motion/react' 导入）（MIT）、lucide-react（MIT）、tailwindcss（MIT）、postcss（MIT）、autoprefixer（MIT）、vite（MIT）、@vitejs/plugin-react（MIT）、typescript（Apache-2.0）、@fontsource/domine（OFL-1.1）、@fontsource-variable/assistant（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 npm create vite@latest 以 react-ts 模板搭建脚手架。项目根目录下有一个 HTML 页面：index.html（入口 src/main.tsx）。
  - vite.config.ts：base './'，plugins [react()]，build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }。不要将 src/ 复制到 dist/。
  - 通过 PostCSS 使用 Tailwind 3.4，content ['./index.html', './src/**/*.{ts,tsx}']。在 tailwind.config.ts 中，将设计（Design）下的每种颜色以 kebab-case 键添加到 theme.extend.colors（cream、walnut、card、espresso、roast、marigold、marigold-deep、sage、rule），并设置 fontFamily display ['Domine', 'Georgia', 'serif']、sans ['Assistant Variable', 'system-ui', 'sans-serif']。将 borderRadius DEFAULT 设为 14px，并添加 maxWidth { container: '1080px' } —— 一个字母宽度的阅读宽度。
  - 在 src/fonts.ts 中导入 '@fontsource/domine/500.css'、'@fontsource/domine/700.css' 和 '@fontsource-variable/assistant'；从入口文件导入 src/fonts.ts 和 src/index.css。
  - 文件布局：src/content.ts（每个字符串、模块、课程、运行时间、结果、方案、包含项、FAQ 答案和图片路径，均带类型），src/lib/brand.ts（courseSlug = [COURSE] 转为小写，并将每一段非字母数字字符替换为 '-'，emailDomain = 'hello.' + instructorSlug + '.example' 风格的虚构地址：instructor@ + 去掉连字符的 courseSlug + '.com'），src/lib/storage.ts（安全的 localStorage get/set，包裹在 try/catch 中，键前缀为 courseSlug + ':'）。
  - 状态：src/store/plan.ts 是一个小型外部 store（useSyncExternalStore），持有 { plan: 'full' | 'three' } 并持久化到 localStorage 键 courseSlug + ':plan'；定价卡片、粘性 CTA 和最终 CTA 都读取相同的方案价格。
  - src/components/ 中的组件：Header.tsx（粘性，始终可见的 Enroll 按钮，读取实时方案价格）、Hero.tsx（VideoFrame.tsx —— 海报、播放图标、时长徽章；PlayModal.tsx —— 诚实的占位符）、OutcomeStrip.tsx、Curriculum.tsx（ModuleAccordion.tsx）、Instructor.tsx、Results.tsx（ResultCard.tsx）、Pricing.tsx（PlanToggle.tsx、IncludedList.tsx）、Guarantee.tsx、Faq.tsx、FinalCta.tsx、Footer.tsx、Reveal.tsx（Motion whileInView 包装器）、Eyebrow.tsx。src/pages/Home.tsx 组合它们。
  - 在首次构建之前，使用 curl -L -o 将资源（Assets）下列出的每张图片下载到 public/images/，并使用给定的确切文件名。构建本身从不获取任何内容。
  - public/favicon.svg 如资源（Assets）下所述。index.html：lang en，<meta name='theme-color' content='#FAF6EE'>，<link rel='icon' href='./favicon.svg' type='image/svg+xml'>，<title>[COURSE] — Learn [TOPIC] from zero</title>。
  - 在项目根目录下按资源（Assets）下所述编写 ASSETS.md。
  - dist/ 包含 index.html、带哈希的 JS/CSS、woff2 字体、favicon.svg 和六张图片。保持在 10 MB 以下。

## 变量
- [COURSE] — 课程名称（默认：“Tiny Games Workshop”）。虚构的课程标题。用于标题、主视觉区（hero）、页眉、页脚、localStorage 键以及报名按钮（'Enroll — $[PRICE]'）。绝非真实课程。
- [TOPIC] — 课程所教的内容（默认：“making tiny 2D games from scratch”）。用一个全小写短语描述该技能。驱动主视觉区的承诺、模块标题、两项成果和三个 FAQ 答案。保持对初学者真实可信（无需任何先验经验）。
- [INSTRUCTOR] — 讲师（默认：“Theo Marsh”）。虚构的教师姓名。用于个人简介、视频弹窗（'a note from [INSTRUCTOR]'）、成果的上下文以及页脚签名。绝非真实人物。
- [PRICE] — 全价（默认：“149”）。以数字表示的全额付款价格。三期付款方案在默认值下恰好为 3 × $55（总计 $165，明确说明）；如果 [PRICE] 不同，方案价格会在 content.ts 中重新计算为四舍五入的三等分 + $16，并显示总额。驱动定价卡片、吸底 CTA 和最终 CTA。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/online-course-sales-page（默认：是；删除此行即可移除）

“页面与区块”（Pages & Sections）下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/online-course-sales-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
