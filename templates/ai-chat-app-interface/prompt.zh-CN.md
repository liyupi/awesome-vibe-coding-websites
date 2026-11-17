> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# AI 聊天应用界面

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一个面向 [WORKSPACE] 的完整浏览器本地 AI 聊天工作区。在初始演示中使用精确的变量默认值。以一段预置对话开场，其中包含一个高亮代码回答和一个 Markdown 表格，一个深梅子色（deep-plum）历史侧边栏，以及一个鲜艳珊瑚色（vivid coral）的输入区操作按钮。实现完整的交互循环、浅色/深色主题、可编辑的助手配置文件和持久化的本地附件。

- 受众：[AUDIENCE]，他们想要一个专注的地方来处理 [PROJECT]。
- 目标：让 [USER_NAME] 整理对话、向 [ASSISTANT_NAME] 请求有用的本地示例回复、修改请求，并在多次访问之间保留工作区。单一的 sendMessage 适配器是未来唯一的集成点；交付的站点不发起任何外部请求。
- 语气：温暖、简洁、周到且实用。具体的产品工作示例，克制的幽默，不做宏大的 AI 宣称，不做营销式主视觉。

## 技术栈
- 框架：Vite + React + TypeScript
- 样式：Tailwind CSS 4 + CSS 变量
- 库：react (MIT)、react-dom (MIT)、vite (MIT)、@vitejs/plugin-react (MIT)、typescript (Apache-2.0)、tailwindcss (MIT)、@tailwindcss/vite (MIT)、react-markdown (MIT)、remark-gfm (MIT)、highlight.js (BSD-3-Clause)、lucide-react (ISC)、@fontsource/space-grotesk (OFL-1.1)、@fontsource/dm-sans (OFL-1.1)、@fontsource/ibm-plex-mono (OFL-1.1)
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 使用 Vite，配置 base: './'、build.sourcemap:false 以及 React 和 Tailwind 的 Vite 插件；将静态文件直接构建到 dist/ 中。
  - 将所有文案、变量默认值、预置对话内容、个人资料默认值和本地响应库保留在 src/content.ts 中；组件引用这些数据，而不是重复文案。
  - 使用带类型的 React reducer 或等效的小型状态层来管理对话、草稿、个人资料、附件和活动流身份。无需状态库。
  - 在 src/adapters/sendMessage.ts 中实现唯一的响应边界，作为可中止的异步生成器。每次发送、重试、重新生成和编辑后重发都调用它；绝不调用真实模型 API。
  - 使用 react-markdown 配合 remark-gfm，并使用基于 highlight.js 的自定义代码渲染器，仅对代码文本进行高亮。禁用原始 HTML 和不安全的 URL 协议；绝不高亮或执行任意 HTML。
  - 仅导入所需的本地字体字重：Space Grotesk 500/600/700、DM Sans 400/500/600/700、IBM Plex Mono 400/500。为精确调色板使用 CSS 变量，并为微小的 UI 过渡使用自定义关键帧。
  - 使用 index.html 作为唯一页面，工作区的客户端状态；无需路由库。将文档标题设置为 [BRAND]，并创建一个原创的本地 SVG favicon。
  - 创建 ASSETS.md，记录本地捆绑的图标/字体包和原创代码绘制，包含源 URL、作者和许可证；不包含任何远程视觉资源。
  - 当变量未更改时，完全使用每个默认值，包括预置的项目文案。如果之后更改了某个值，则连贯地重写所有依赖的可见文案、系统提示、片段、文件名和附件文本，同时保持结构、调色板和功能不变。

## 变量
- [BRAND] — 助手应用名称（默认：“Plumline”）。一个虚构的产品名称；根据此值推导 favicon 标签和存储命名空间。
- [WORKSPACE] — 工作区名称（默认：“Juniper Studio”）。侧边栏中显示的虚构团队或个人工作区。
- [USER_NAME] — 你的显示名称（默认：“Nora Vale”）。一个虚构的工作区成员；在空状态问候语中显示其名字。
- [ASSISTANT_NAME] — 助手名称（默认：“Mira”）。回复旁显示的虚构助手；将个人资料角色标签分开保留。
- [AUDIENCE] — 主要受众（默认：“small product teams”）。根据此受众调整示例对话、起始提示词和个人资料描述。
- [PROJECT] — 示例项目（默认：“a collaborative notes app”）。默认聊天围绕此项目的发布检查清单展开；如果更改，请同步调整代码数据、表格行和文件。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接至 https://vibefather.ai/t/ai-chat-app-interface（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块键控，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/ai-chat-app-interface?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
