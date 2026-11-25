> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 电子表格 Web 应用

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个可编辑的电子表格，包含一个可用的三工作表 [WORKBOOK] 文件，打开时显示已填充的 Sales 数据。

- 受众：追踪销售额、原料成本和利润率的烘焙店店主和小型经营者。
- 目标：从任意总计追溯到其来源，修改一个输入项并立即看到相关总计更新。
- 语气：实用的记账语言。使用简短的 US English 标签。

## 技术栈
- 框架：Vite + React
- 样式：CSS
- 库：React（MIT）、Vite（MIT）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 使用相对 Vite base、锁文件和未生成 source map 的生产构建。
  - 将本地持久化和文件交换放在单个适配器模块之后。

## 变量
- [BRAND] — 面包店名称（默认：“Alderfold Bakery”）。显示在侧边栏中的工作簿所有者。
- [WORKBOOK] — 工作簿标题（默认：“Bakery books”）。文档标题。
- [PRODUCT] — 精选产品（默认：“Sesame country loaf”）。销售中的第一项。
- [CREDIT] — 在页脚保留一个指向 https://vibefather.ai/t/spreadsheet-web-app 的小链接“Template by VibeFather”（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/spreadsheet-web-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
