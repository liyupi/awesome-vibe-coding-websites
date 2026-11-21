> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 全息交易卡展示

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个交互式 3D 全息箔片交易卡展示与预购网站，主打 [SERIES_NAME] 深海生物系列（[PACK_COUNT] 补充包盒，售价 [BOX_PRICE]）。每张卡牌均以代码绘制，配有原创 SVG 深海生物插画，并支持 3D 倾斜，呈现 6 种光学箔片工艺（彩虹（Rainbow）、银河（Galaxy）、碎冰（Cracked Ice）、蚀刻金（Etched Gold）、宇宙（Cosmos）、反光（Reverse））。包含交互式“撕开-扇开-翻面”开包序列（带稀有卡闪光效果）、带筛选功能的 localStorage 收藏活页册、含属性与背景故事的卡牌详情视图、6 张卡组构筑器，以及本地补充包盒预订表单。

- 受众：收藏卡爱好者、桌面游戏创作者、独立插画师，以及展示 3D CSS 光学着色器的前端设计师。
- 目标：在首屏即以可实时倾斜的 3D 全息标本主视觉和箔片工艺切换器立刻吸引访客，随后邀请他们撕包、检视卡牌并构筑卡组。
- 基调：充满奇趣的海洋学珍奇柜——精确的深度读数、生物发光背景故事，以及收藏级印刷工艺术语。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 4
- 库：lucide-react（ISC）、@fontsource/syne（OFL-1.1）、@fontsource/inter（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中导入 @fontsource/syne（700、800）、@fontsource/inter（400、500、600）和 @fontsource/jetbrains-mono（400、500、600）。
  - 在 src/index.css 中使用 CSS 自定义属性（--rx、--ry、--px、--py）从头编写全部六种全息箔光学层（彩虹（rainbow）、星系（galaxy）、冰裂纹（cracked-ice）、蚀刻金（etched-gold）、宇宙（cosmos）、反向（reverse）），这些属性由指针、触摸和可选的 DeviceOrientation 事件干净地更新。
  - 在 src/components/CreatureArt.tsx 中将全部 12 种深海生物绘制为各不相同的分层 SVG 构图，并在 src/data/cardCatalog.ts 中填充统计数据、背景故事、稀有度、栖息地和箔类型。
  - 在 localStorage 中持久化已拥有的收藏数量、当前 6 张卡组、已开启卡包计数和本地补充包盒预留。

## 变量
- [BRAND] — 发布方名称（默认：“Abyssal Foil Press”）。虚构的卡牌发行品牌
- [SERIES_NAME] — 卡牌系列标题（默认：“Hadal Bloom: Series I”）。虚构的深海收藏系列名称
- [BOX_PRICE] — 补充包盒价格（默认：“$84”）。一盒补充包的预购价格
- [PACK_COUNT] — 每盒包数（默认：“24 Foil Packs”）。每个补充包盒内的包数
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/holographic-trading-card-showcase（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/holographic-trading-card-showcase?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
