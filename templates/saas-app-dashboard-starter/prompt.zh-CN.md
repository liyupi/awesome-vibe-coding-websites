> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# SaaS 应用仪表盘起始模板

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建完整的已登录产品，这是一个面向 [AUDIENCE]、专注于 [FOCUS] 的虚构分析应用。打开后立即展示 [WORKSPACE] 内容丰富、数据充实的概览页，然后通过一个连贯的本地应用支持账户、集成、设置、模拟认证和引导流程。

- 受众：[AUDIENCE]；演示所有者是 [OWNER]。
- 目标：让每个可见控件都有实际用途：探索示例分析数据、操作表格、管理工作区并完成所有本地账户流程。首个视图应看起来已可投入工作，且每个外部服务操作都必须能通过一个带类型的本地适配器替换。
- 语气：清晰、精确、沉稳自信。使用简短的美国英语产品文案，在服务边界处使用诚实的演示语言和具体的虚构记录；不使用营销最高级用语。

## 技术栈
- 框架：Vite + React + TypeScript
- 样式：原生 CSS
- 库：react 和 react-dom（MIT）、vite 和 @vitejs/plugin-react（MIT）、typescript（Apache-2.0）、lucide-react（ISC）、@fontsource/manrope 字体文件（OFL-1.1）、@fontsource/inter 字体文件（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务端代码、无外部 API。
- 设置：
  - 使用 Vite + React + TypeScript，搭配原生 CSS、lucide-react、@fontsource/manrope 和 @fontsource/inter。用原生内联 SVG 实现图表，用 location.hash 实现路由；无需图表、认证或支付 SDK。
  - 配置 Vite base 为 './'、生产压缩、sourcemap 为 false、输出到 dist/。提供 npm run build 和 npm run dev。将文档标题设为 [BRAND]，并在本地生成一个原创的几何 SVG favicon。
  - 将所有可见字符串、默认变量、种子记录、图表数组、套餐定义和集成定义保留在 src/content.ts 中。当变量变化时，连贯地重写所有匹配的文案和虚构记录。从 [BRAND] 派生 brandSlug；将其用于存储命名空间、.test 地址和下载文件名。不要将模板标题硬编码到产品 UI 中。
  - 将所有模拟的服务调用和持久化放在 src/localAdapter.ts 中：loadState、saveState、signIn、signUp、requestPasswordReset、createWorkspace、inviteMember、updateMemberRole、removeMember、connectIntegration、disconnectIntegration、createApiKey、revokeApiKey、changePlan 和 makeInvoiceDownload。全部返回带类型的本地结果，并在有待处理状态有用时返回 Promise。这是未来所有者替换的唯一集成边界。组件从不发起 fetch 或发送网络请求。
  - 维护一个带版本的状态结构，包含 profile、selectedWorkspaceId、工作区本地的 accounts/members/invites/integrations/keys/billing/notifications、theme、sidebar mode 和 onboarding draft。在成功变更后持久化到 localStorage；捕获存储拒绝、配额错误和格式错误的 JSON，恢复到有效的种子状态，并回退到模块内存存储。如果持久化不可用，显示一个紧凑的 'Session only' 指示器。绝不存储密码或真实凭据。
  - 在无 hash 的全新访问中，立即显示 #/overview，使用主种子工作区、模拟的活动会话和浅色主题。绝不要将首次加载置于认证、引导、空数据、开场动画或模态框之后。保存的主题和工作区可在后续访问中恢复。所有命名的 hash 路由必须能在直接打开和刷新后存活。未知 hash 解析为 #/overview。
  - 种子 36 个虚构账户：27 个 Active、6 个 Trial 和 3 个 Paused；套餐为 Starter、Growth 和 Scale。首行是 Ternleaf Works、Morrow Bench、Cobalt Finch、Reedvale Lab、Parchment Grove 和 Emberwell Office。从本地数组确定性地生成其余原创名称。每行都有 id、company、虚构联系人、.test 邮箱、plan、status、owner、eventCount、expansionValue、healthScore 和 channel。保持计算出的表格总计、可见 KPI 值、导出和图表摘要与同一来源记录同步；在一个低调的工具栏徽章中将所有数据标记为示例数据。
  - 为主工作区种子四个成员（包括 [OWNER]）、两个待处理邀请、两个已连接的通用集成、一个演示 API 密钥、四条发票记录和三条未读通知。种子第二个工作区，名为 'Fable Quarry Lab'，具有一组不同的 12 个账户和 Starter 套餐；当变量变化时适当地重写它。状态、密钥、成员、账单、通知和记录选择绝不能在工作区之间泄漏。
  - 在标签 'Cycles' 下使用合成图表类别 '01' 到 '12'。概览比较模式为 'Recent 6 cycles' 和 'All 12 cycles'。任何 UI、发票、下载或示例内容中都不出现日期、月/日名称、日历控件或时间戳。
  - 使用一个共享的应用外壳、可复用的表单字段、弹出框、焦点陷阱抽屉/对话框和一个 toast 区域。Escape 关闭最顶层覆盖层并返回焦点；点击背景关闭可关闭的覆盖层；破坏性确认对话框需要明确操作。一个 aria-live polite 区域宣布已保存状态和错误。
  - 在 1440x900 和 390x844 下验证键盘导航和完整交互流程。检查全新首次加载、主题持久化、工作区隔离、组合表格筛选、一个批量操作、账户详情、个人资料保存、邀请/角色更改、密钥创建/显示/复制/撤销、账单更改/下载、所有认证屏幕、完整的引导向导、直接 hash 打开和空状态恢复。运行生产构建并检查最终的 dist，零控制台错误且无页面级水平溢出。

## 变量
- [BRAND] — 产品名称（默认："Quillmere Analytics"）。虚构的分析产品；从中派生其 slug、演示邮箱域名和下载文件名。
- [WORKSPACE] — 主工作区（默认："Brindle Research"）。虚构组织，其示例数据在首次加载时显示。
- [AUDIENCE] — 产品受众（默认："Product teams at subscription software companies"）。针对该受众重写引导指引、账户示例和概览洞察。
- [FOCUS] — 分析重点（默认："Account engagement and expansion"）。根据该衡量重点驱动指标名称、图表描述、账户详情标签和洞察文案。
- [OWNER] — 演示所有者（默认："Mira Calder"）。虚构工作区所有者；派生一个小写点分隔的演示邮箱本地部分，并使用 .test 域名。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接指向 https://vibefather.ai/t/saas-app-dashboard-starter（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/saas-app-dashboard-starter?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
