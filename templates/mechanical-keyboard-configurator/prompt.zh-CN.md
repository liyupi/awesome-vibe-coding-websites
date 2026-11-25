> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 机械键盘配置器

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个完全可交互的机械键盘设计工作室。第一帧展示在柔和影棚灯光下完成的 [BOARD]。

- 受众：比较布局、声学与饰面的键盘爱好者。
- 目标：配置、试用、保存并比较键盘，然后完成模拟下单。
- 基调：将精准的工业产品摄影转化为程序化几何。简短、直接的标签。

## 技术栈
- 框架：React 19 + Vite
- 样式：Vanilla CSS
- 库：Three.js（MIT）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 使用相对 Vite base './'。在本地打包字体和脚本，压缩，并禁用 source maps。
  - 将所有可编辑标签、示例内容和产品名称放在一个内容模块中。将模拟服务放在一个适配器文件中。
  - 使用 Three.js 搭配基于物理的材质和本地程序化光照。单一目录驱动渲染器、区块、定价和购物车快照。

## 变量
- [BRAND] — 键盘工作室（默认：“Relay Capworks”）
- [BOARD] — 板卡系列（默认：“Relay One”）
- [COLORWAY] — 默认键帽套装（默认：“Workshop Cream”）
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/mechanical-keyboard-configurator（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/mechanical-keyboard-configurator?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
