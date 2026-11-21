> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 代码托管平台应用

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个原创的、功能完备的开发者代码托管 Web 应用，以 [MAINTAINER_NAME]（@[MAINTAINER_HANDLE]）维护的 [ORG_HANDLE]/[PRIMARY_REPO] 开源项目为核心。该应用在 Repository Code、Issues、Pull Requests、Commits、Releases、Insights 和 User Profile 视图之间使用哈希路由，并配有全局 '/' 和 Cmd+K 搜索面板、浅色/深色主题切换，以及隔离在单个存储适配器模块内的 localStorage 持久化。

- 受众：软件工程师、开源维护者、开发者工具团队，以及正在评估或演示一个自包含的仓库协作工作空间的技术创始人。
- 目标：在首屏就交付一个即刻可用、真正可用的代码托管界面——落在主仓库上，带有可交互的文件树、分支切换器、语法高亮代码查看器、Markdown README、实时 diff，以及持久的本地协作状态。
- 基调：清晰、技术化、整洁，并真实贴合实际系统工程团队——具体的提交信息、真实的多语言源文件，以及零营销废话。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 4
- 库：lucide-react（ISC）、@fontsource/space-grotesk（OFL-1.1）、@fontsource/inter（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中导入 @fontsource/space-grotesk（600、700）、@fontsource/inter（400、500、600）和 @fontsource/jetbrains-mono（400、500、600）。
  - 将所有种子仓库、源文件、议题、拉取请求、差异、提交、发布和资料指标存储在 src/data/seedData.ts 中，键动态来自 [BRAND]、[ORG_HANDLE]、[PRIMARY_REPO]、[MAINTAINER_NAME] 和 [MAINTAINER_HANDLE]。
  - 将所有浏览器持久化（星标、关注、复刻、创建的议题、评论、内联 PR 审查、反应和主题选择）保留在 src/data/storageAdapter.ts 内，以便切换到真实 API 时只需编辑一个文件。
  - 在 src/utils/syntaxHighlight.ts 中实现一个轻量级、零依赖的语法分词器，支持 Rust、TypeScript、Go、Python、SQL 和 Markdown，无需 CDN 脚本。

## 变量
- [BRAND] — 平台名称（默认："KestrelForge"）。虚构的代码托管平台名称
- [ORG_HANDLE] — 组织标识（默认："linden-sys"）。用于种子组织的全小写 slug
- [PRIMARY_REPO] — 主仓库（默认："quiver-kv"）。首次加载时显示的默认开放仓库
- [MAINTAINER_NAME] — 维护者全名（默认："Nadia Okafor"）。在个人资料和提交记录中显示的虚构首席维护者
- [MAINTAINER_HANDLE] — 维护者标识（默认："nokafor"）。维护者个人资料的全小写用户名
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/code-hosting-platform-app（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/code-hosting-platform-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
