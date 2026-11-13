> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 港口小镇配送游戏（Harbor Town Delivery Game）

请完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一个完整的单页 3D 浏览器游戏，背景设定在 [TOWN_NAME]，一个虚构的 [SETTING]。玩家驾驶一辆原创的低多边形送货车，在仓库收集 [DELIVERY_ITEM]，并在 [ROUND_SECONDS] 秒的轮班结束前将它们送到六个发光的门口。可游玩的城镇是第一个屏幕和主要视觉锚点，而不是营销主视觉或装饰性背景。

- 受众：独立黑客、前端开发者、设计师和创意编程学习者，他们想要一个精致、可适配的 Three.js 驾驶游戏，支持键盘和触摸操作，并以静态文件形式发布。
- 目标：提供一个完整且可重玩的街机循环：开始轮班、驾驶、跟随路线、拾取货物、送达六个地址、管理倒计时、暂停或恢复，并达成明确的成功或超时结果。保持每个控制和场景资源都在本地，并让相同的道路和任务系统可用于不同的内容值。
- 基调：舒适、海滨、俏皮、清晰，并带有温和的活力。使用具体的本地地名和友好的配送语言，不包含战斗、处于危险中的行人、失败羞辱、真实品牌或对灵感来源的引用。

## 技术栈
- 框架：Vite 6 + TypeScript 5
- 样式：原生 CSS（Vanilla CSS）
- 库：three（MIT）、lucide（ISC）、@fontsource-variable/fredoka（OFL）、@fontsource-variable/dm-sans（OFL）
- 构建：`npm run build` → 输出静态文件到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化设置：
  - 用 Vite 的原生 TypeScript 模板搭建项目，脚本配置为 dev=vite、build=tsc && vite build、preview=vite preview。不要引入 React、物理引擎或完整的游戏引擎。
  - 将 vite.config 的 base 设为 './'，build.outDir 设为 'dist'，build.emptyOutDir 设为 true，build.sourcemap 设为 false。启用 TypeScript 严格检查。
  - 仅将 three、lucide、@fontsource-variable/fredoka 和 @fontsource-variable/dm-sans 安装为运行时依赖，另外安装 Vite 和 TypeScript 作为开发依赖。引入 Fredoka 600/700、DM Sans 400/500/600/700，并且只引入实际用到的 Lucide 图标。
  - 将实现组织为 src/content.ts、main.ts、scene.ts、driving.ts、missions.ts、minimap.ts、ui.ts、audio.ts 和 styles.css。将所有变量值、地名、说明文字、按钮标签和任务文案放在 content.ts 中；场景和 UI 模块必须从该文件读取。
  - 全程使用 BRAND、TOWN_NAME、SETTING、DELIVERY_ITEM 和 ROUND_SECONDS。当这些值发生变化时，重写专有名词、目的地名称、标牌、目标和场景装饰，以适配新的设定，同时保留道路图、六任务结构、碰撞尺寸和 UI 布局。
  - 将 ROUND_SECONDS 解析为整数，并限制在 60–600 之间，以保证行为稳健。基于 BRAND 和 TOWN_NAME 派生稳定的 localStorage 键和装饰性随机种子，而不是硬编码任一默认名称。
  - 使用单个 index.html，包含一个 WebGL canvas 和语义化 HTML 覆盖层。不需要路由。在创建任何 CanvasTexture 街道标牌之前等待 document.fonts.ready，将其 colorSpace 设为 SRGBColorSpace，并将纹理各向异性上限设为 4。
  - 仅从 TOWN_NAME 派生装饰性摆放变化（如灌木、屋顶细节和船只浮动偏移）的种子。保持道路、任务顺序、碰撞形状、交付点和计分具有确定性。

## 变量
- [BRAND] — 配送公司（默认：“Copper Quay Couriers”）。一个虚构的本地配送服务；用于标题、开始卡片、仓库和保存分数的键。
- [TOWN_NAME] — 城镇名称（默认：“Bellbuoy Bay”）。一个虚构的城镇名称，用于开始卡片、标牌和结果文案。
- [SETTING] — 场景（默认：“harbor town”）。世界的主题；当此项变化时，更改海事道具和目的地名称。
- [DELIVERY_ITEM] — 配送物品（默认：“parcels”）。小写复数货物名词，用于目标、说明和结果。
- [ROUND_SECONDS] — 班次时长（默认：“180”）。完成全部六次配送可用的秒数。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接指向 https://vibefather.ai/t/harbor-town-delivery-game（默认：是；删除此行以移除它）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图像——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图像路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块键控，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/harbor-town-delivery-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
