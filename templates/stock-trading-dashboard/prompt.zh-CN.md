> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 股票交易仪表盘

完全按照以下描述构建此网站。将 [VARIABLES] 替换为您自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一个可运行的本地模拟交易终端。首次渲染时，[PRIMARY_ISSUER]（[PRIMARY_SYMBOL]）在一个已有数据的市场中处于活跃状态，且账户已持有三个持仓。除非提供了值，否则使用精确的默认变量。每个面板都读取同一个模拟市场。在工作区中保留精确的提示语“Simulated, not financial advice”。

- 受众：尝试订单类型的学生，以及围绕本地市场行情源构建交易台的开发者。
- 目标：访客可以查看价格变动、下单和撤单，并随着行情推进看到账户变化。
- 语气：简洁的美式英语交易台标签，精确的带符号价格，以及对所发生情况的直白反馈。

## 技术栈
- 框架：Vite + React + TypeScript
- 样式：原生 CSS（Vanilla CSS）
- 库：React 和 React DOM（MIT）、Vite（MIT）、TypeScript（Apache-2.0）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 将 Vite base 设为 './'，生产 sourcemap 设为 false。所有图形均为本地 SVG 或 CSS。
  - 将变量值和编辑文案放在一个内容模块中。将种子数据生成、feed 更新和模拟执行放在一个可替换的 marketAdapter.ts 文件中。
  - 在 localStorage 中持久化一个带版本的账户和 feed 快照，包含挂单、成交、所选交易品种和图表设置。仅在首次使用时播种，并从格式错误的存储中恢复。

## 变量
- [BRAND] — 桌面名称（默认：“Rivetline Desk”）
- [PRIMARY_ISSUER] — 特色公司（默认：“Veylan Foundry”）
- [PRIMARY_SYMBOL] — 特色合成股票代码（默认：“VYL.X7”）
- [OPENING_CASH] — 起始现金，以美元计（默认：“24500”）
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/stock-trading-dashboard（默认：是；删除此行即可移除）

“页面与区块”下的文案是为默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/stock-trading-dashboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
