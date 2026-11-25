> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 剧院演出票务网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [SHOW] 打造一个英文票房页面，这是一部原创音乐剧，演出地点在 [BRAND]，一座位于 [CITY] 的虚构 1,100 座剧场。页面直接进入灯光亮起的演出场景及其前三场可预订的演出。界面应让人感觉像在天黑后翻开一本印刷精美的剧院节目册。

- 受众：比较座位、无障碍安排和演出时间的观众，以及组织团体观演的主办方。
- 目标：将特定演出和一组座位转化为限时保留、逐项列明的模拟订单和可验证的本地电子票。每个可见操作都可用。
- 语气：节目册文案文雅而热情。关于库存、无障碍和价格则直接而具体。

## 技术栈
- 框架：Vite + React
- 样式：Vanilla CSS
- 库：qrcode（MIT）、lucide-react（ISC）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 将 Vite base 设为 './'；打包本地字体、照片和 JavaScript，不生成 source map。
  - 将支持变量的英文文案以及演员阵容、评论和访问详情放在一个内容文件中。在 A 中逐字使用这些默认值。
  - 将确定性排期、座位库存、带绝对过期时间戳的保留、购物篮、结账和团体请求放在一个由 localStorage 支持的 box-office 适配器中。将预订绑定到演出 ID。按演出持久化已确认库存；防止重复结账。无网络或真实支付。
  - 使用 hash 路由。直接进入时默认选择第一场演出进行选座，并在购物篮或订单缺失时包含一条返回演出列表的恢复路径。

## 变量
- [BRAND] — 剧院名称（默认：“Vesper Arch Theatre”）
- [SHOW] — 演出剧目名称（默认：“The Gilded Hour”）
- [CITY] — 地点（默认：“Bellcross”）
- [ADDRESS] — 入口地址（默认：“18 Orison Lane”）
- [CREDIT] — 在页脚保留一个小的“Template by VibeFather”链接，指向 https://vibefather.ai/t/theater-show-ticketing-website（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/theater-show-ticketing-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
