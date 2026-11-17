> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 社交媒体内容日历（Social Media Content Calendar）

请完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余所有内容保持不变。

## 简介
为 [BRAND] 打造社交规划室，这是一家小型文具制造商。团队正在筹备 [CYCLE_NAME]，这是面向 [AUDIENCE] 的为期四周的编辑周期。直接打开一个可用的内容日历，其中包含一条带照片的下一篇帖子条带、一个繁忙的周一至周日网格，以及一键访问每份草稿。

- 受众：一位内容负责人、店主或摄影师，需要查看哪些内容已拍摄、已撰写并已排期。
- 目标：让一个人编辑一篇真实帖子、检查其格式、将其移动到另一个时段、在重新加载后在看板上找到它，并下载更新后的计划。
- 语气：使用简洁的美式英语和简短、具体的标题。像那位知道托盘边缘为何是圆角、以及为何胶带卷能轻松取出的制造商那样写作。

## 技术栈
- 框架：Vite + React + TypeScript
- 样式：Vanilla CSS
- 库：lucide-react (ISC)、@fontsource/bricolage-grotesque (OFL-1.1)、@fontsource/dm-sans (OFL-1.1)
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 将 Vite base 设为 './'，禁用生产环境 source map，并从 index.html 解析 hash 路由。将文案、种子数据、文件路径和变量默认值一起放在 src/content.ts 中。
  - 使用单个本地数据适配器来读取和更新帖子、媒体选择、已保存的话题标签集以及当前编辑器草稿。仅在首次使用时初始化循环。在移动过程中保持帖子 ID 稳定。将编辑内容持久化到带版本的 localStorage 中，并在保存失败时给出有用的反馈。
  - 使用具有稳定媒体 ID 和固定尺寸的本地图片。对于 CSV 下载，在客户端创建 UTF-8 Blob。

## 变量
- [BRAND] — 工作区品牌（默认："Clip Orchard"）。在报头和模拟文章署名中使用你的文具工作室名称。
- [CYCLE_NAME] — 规划周期（默认："The Desk Edit"）。为一个不标注日期的四周编辑合集命名。
- [AUDIENCE] — 读者（默认："people setting up their first home desk"）。为这些读者撰写文章标题、配文和收藏标签。
- [CAMPAIGNS] — 活动名称（默认："Color Drop / Bench Notes / Desk Rituals"）。按粉色、蓝色和黄色的顺序给出三个简短名称。将它们贯穿到筛选器、卡片和 CSV 中。
- [CREDIT] — 在页脚保留一个小的 "Template by VibeFather" 链接指向 https://vibefather.ai/t/social-media-content-calendar（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值撰写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/social-media-content-calendar?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
