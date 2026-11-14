> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 视频制作公司网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个原创的五页静态网站，[BRAND] 是一家虚构的视频制作公司，位于 [LOCATION]，专精于 [SPECIALTY]。其核心是一个全视口（full-viewport）的 showreel，通过交叉淡化生成的电影剧照实现，辅以可筛选的六个项目作品集、由查询参数驱动的项目案例研究、一个工作室页面，以及一个客户端项目简报。默认身份为 Aster & Frame，一家导演主导的商业与品牌纪录片工作室；请重写每一个项目、客户、服务、价格和细节，以契合所提供的变量。

- 受众：该网站服务于 [AUDIENCE]。主要访客希望评估视觉工艺、了解相关服务和可能的预算、查看完整的项目故事，并在不创建账户的情况下准备一份有用的咨询。
- 目标：让作品集立即呈现电影质感，通过六个各具特色的项目证明能力广度，以具体的方式说明范围与流程，并将符合条件的访客引导至作品档案或项目简报流程。所有交互必须能在无服务器的静态文件下正常工作。
- 语调：自信、有质感、简洁、导演主导。使用具体的制作语言和实用细节，而非代理商陈词滥调、奖项、夸大的成果或宏大的宣称。所有品牌、客户、人物、项目、地址、价格和推荐语均为虚构。

## 技术栈
- 框架：Vite 6 + React 19 + TypeScript
- 样式：Tailwind CSS 4
- 库：motion（MIT）、lucide-react（ISC）、@fontsource/instrument-serif（OFL-1.1）、@fontsource-variable/manrope（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务器代码、无外部 API。
- 设置：
  - 使用 Vite，base 设为 './'，并为 index.html、work.html、project.html、studio.html 和 brief.html 配置 build.rollupOptions.input 入口；将 sourcemap 设为 false，并将所有源文件放在 public/ 之外。
  - 为每个 HTML body 设置一个 data-page 值，让 src/main.tsx 挂载对应的 React 页面组件。共享页头、页脚、reel 模态框、按钮和 reveal 基础组件，不添加路由器。
  - 将所有可编辑字符串和全部示例数据放入 src/content.ts：变量、导航、客户字标、项目记录、筛选标签、服务、示例价格、署名、地址、流程步骤、FAQ 和表单选项。当变量值变化时重写完整的内容模型；绝不要在活动影像案例中留下商业影片示例。
  - 用 id、title、client、category、image、alt、summary、challenge、approach、deliverables、credits、duration、shootDetails 和 accentPosition 表示每个项目。仅在 project.html 上使用 URLSearchParams，并在 id 缺失或未知时回退到第一个项目。
  - 在 src/index.css 中从列出的 Fontsource 包导入 Instrument Serif、Manrope Variable 和 IBM Plex Mono。为指定的颜色、字体、间距和关键帧配置 Tailwind 4 主题令牌；不要从远程主机加载任何字体样式表。
  - 用 MotionConfig 包裹应用，并设置 reducedMotion='user'。为 hero reel、reel 模态框、项目筛选、移动导航、FAQ 手风琴和 brief 表单使用本地 React 状态；无需持久化或网络调用。
  - 将六张生成的图片下载到 public/images，并用相对路径 './images/<file>' 引用它们。在项目根目录创建 ASSETS.md，包含每个图片 URL、目标路径、生成署名、字体包和图标许可证。
  - 仅对熟悉的控件使用 Lucide 图标，例如 Play、Pause、ArrowUpRight、X、Menu、Check、Copy 和 ChevronDown。工作室和客户身份是文字字标，不是 logo 资源。
  - 确保生产构建仅向 dist/ 输出可静态部署的文件，使用相对资源 URL，保持在 20 MB 以下，并在 1440×900 和 390×844 下运行时无控制台错误。

## 变量
- [BRAND] — 工作室名称（默认：“Aster & Frame”）。一个虚构的制作公司名称，用作纯文本字标。
- [TAGLINE] — 主视觉标语（默认：“Make the story move.”）。一句简短的原创文案，可分成两行展示。
- [LOCATION] — 工作室所在地（默认：“Portland, Oregon”）。城市和地区，显示在主视觉、工作室详情和页脚中。
- [SPECIALTY] — 制作专长（默认：“Commercials and branded documentaries”）。工作室的主要业务；据此调整项目和服务。
- [AUDIENCE] — 主要客户（默认：“marketing leads, founders, and creative teams”）。文案和项目案例应面向的访客群体。
- [CONTACT_EMAIL] — 联系邮箱（默认：“hello@asterandframe.example”）。仅用于可见的联系文本和显式的 mailto 链接；表单本身从不发送数据。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/video-production-company-website（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/video-production-company-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
