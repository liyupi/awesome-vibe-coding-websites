> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# UX 设计师案例研究作品集

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个包含四个条目的静态作品集，[BRAND] 是一个虚构的 [DISCIPLINE]，从事 [PROJECT_SET] 相关工作。网站包含一个项目索引页、一个由查询驱动的长篇案例研究页、一个关于页和一个联系页。其标志性设计是一块编辑式证据板：清晰的手绘代码产品界面、研究注释、低保真线框图，以及一个无障碍的前后对比。当 PROJECT_SET 为 Healthcare and financial tools 时，使用下方精确的默认项目内容；否则，重命名并重写所有项目、研究、界面标签和成果，以适配所提供的项目集，同时保持相同的结构。

- 受众：独立 UX 和产品设计师、设计求职者、研究人员，以及需要说明过程和决策而非仅展示最终视觉效果的小型工作室。
- 目标：帮助招聘人员、招聘经理或潜在客户从快速的项目概览，转向可信的过程证据，再转向有针对性的项目咨询。
- 语气：深思熟虑、精确、温暖，并以证据为导向。以设计师的第一人称写作，使用具体的观察和决策，避免机构式的溢美之词，并将每个项目和成果标注为虚构的示例内容。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：motion（MIT）、lucide-react（ISC）、@fontsource/instrument-serif（OFL）、@fontsource-variable/inter（OFL）、@fontsource/ibm-plex-mono（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 为 index.html、case-study.html、about.html 和 contact.html 配置 Vite 多页面入口；设置 base: './' 和 build.sourcemap: false。
  - 将所有变量值、导航标签、项目数据、案例研究文案、研究笔记、指标、关于文案和表单选项放入 src/content.ts；当变量变化时，重写每个相关内容字符串。
  - 创建共享的 Header、Footer、Reveal、ProjectCard、BrowserMock、Wireframe、BeforeAfter、CaseNav 和 ContactForm 组件；每个 HTML 入口挂载自己的 React 根节点。
  - 仅将 Motion 用于 transform 和 opacity 显现；使用本地 React 状态和原生事件实现阅读进度、线框选择、手风琴和对比滑块。
  - 在共享入口 CSS 中导入自托管的 Fontsource 包，并在 Tailwind 中定义所列的调色板、排版、间距和断点。
  - 在 case-study.html 上读取项目查询参数，渲染匹配的项目，当参数缺失或无法识别时默认为第一个项目。

## 变量
- [BRAND] — 设计师姓名（默认：“Mara Voss”）。一个虚构的设计师名字，用作作品集的标识。
- [DISCIPLINE] — 设计领域（默认：“Product designer”）。一个简短的专业角色，例如 Product designer 或 UX designer。
- [PROJECT_SET] — 案例研究主题集（默认：“Healthcare and financial tools”）。三个项目共同涵盖的相关行业或主题。
- [LOCATION] — 所在地（默认：“Portland, Oregon”）。在个人资料和联系方式中显示的城市和地区。
- [CONTACT_EMAIL] — 联系邮箱（默认：“hello@maravoss.design”）。用于联系链接和预填咨询的邮箱地址。
- [AVAILABILITY] — 可用性说明（默认：“Booking one new engagement”）。一句简短的当前可用性声明。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/ux-designer-case-study-portfolio（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/ux-designer-case-study-portfolio?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
