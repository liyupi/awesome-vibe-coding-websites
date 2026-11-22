> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# Roguelike Deckbuilder Card Game

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建一个完整的战术类 roguelike 牌组构筑网页游戏，标题为 [BRAND]，由 [STUDIO_NAME] 出品，主角为 [HERO_NAME]——一位灯塔看守人，正在攀登 [WORLD_NAME]，一片被风暴摧毁的浮空群岛链。首个画面直接进入一场进行中的回合制战斗——绝不是空菜单——展示 [HERO_NAME] 及其 HP、Block、Energy、Relics，以及 5 张扇形展开的手牌，面对风暴而生的敌人，敌人带有清晰无误的 Intent 徽章和精确的实时伤害预览（计入 Strength、Weak、Vulnerable 和 High/Low Tide）。包含完整的 60 张原创代码绘制卡牌目录及升级（+）版本、20 件可收集遗物、3 个逐步升级的幕，配有分支节点地图（Fights、Elites、Lantern Shops、Rest Anchorages、Storm Events，以及会在战斗中反转 High/Low Tide 规则的 Tide-Flipping Bosses）、Card Reward 选牌、Deck/Compendium 查看器、Run Summary、Seeded Daily Climb、键盘快捷键（1–5 打出卡牌，E 结束回合），以及完整的 localStorage 运行持久化。

- 受众：策略卡牌游戏玩家、roguelike 粉丝，以及寻找深度、响应式浏览器牌组构筑游戏的网页游戏创作者。
- 目标：让访客在第一个画面就进入令人满足的战术卡牌玩法，具备清晰无比的意图预告、利落的手牌动画，以及跨越 60 张卡牌和 20 件遗物的真正策略深度。
- 基调：氛围化的风暴照亮海事奇幻——风化黄铜灯笼、海玻璃般的清澈，以及干脆的战术精确感。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 4
- 库：lucide-react (ISC)、@fontsource/cinzel (OFL-1.1)、@fontsource/inter (OFL-1.1)、@fontsource/jetbrains-mono (OFL-1.1)
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中导入 @fontsource/cinzel (600, 700)、@fontsource/inter (400, 500, 600) 和 @fontsource/jetbrains-mono (400, 500, 600)。
  - 在 src/game/catalog.ts 中编写完整的 60 张原创航海卡牌目录（每张卡牌包含基础版和升级版 + 属性、花色：Lamp / Tide / Hull / Storm、稀有度、费用以及代码绘制的 SVG 徽章图案）和 20 件遗物。
  - 在 src/game/engine.ts 中编写确定性种子 PRNG、3 幕分支地图生成器、带有精确伤害预览计算的回合制战斗引擎、Tide State 中 Boss 规则翻转、状态效果（Block、Flare/Strength、Soaked/Vulnerable、Fogged/Weak、Burn、Ward）、商店/休息/事件处理器以及 localStorage 运行存档。
  - 在 src/components/NauticalArt.tsx 中为灯塔看守人、风暴敌人/Boss、浮岛背景和卡牌徽章绘制原创 SVG 插图。

## 变量
- [BRAND] — 游戏标题（默认：“Lantern Spire”）。虚构的 roguelike 牌组构建游戏标题
- [HERO_NAME] — 主角名称（默认：“Keeper Mira”）。可玩灯塔看守人的名字
- [WORLD_NAME] — 群岛名称（默认：“The Shattered Archipelago”）。风暴摧毁的漂浮岛链的名称
- [STUDIO_NAME] — 工作室印记（默认：“Foghorn Interactive”）。虚构的独立游戏工作室署名
- [CREDIT] — 在页脚保留一个小的“Template by VibeFather”链接，指向 https://vibefather.ai/t/roguelike-deckbuilder-card-game（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后可以在不触及组件的情况下替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/roguelike-deckbuilder-card-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
