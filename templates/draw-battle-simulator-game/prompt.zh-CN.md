> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 绘制对战模拟器游戏

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建一个欢快的卡通玩具战斗模拟器，标题为 [BRAND]，场景设在 [MAP_NAME]，玩家可以在阳光明媚的草地（#8BC34A）上、晴朗天空（#BEE3F8）下，通过拖拽线条来涂绘一排排小士兵——左侧是 [RED_TEAM]（#FF5A5F），右侧是 [BLUE_TEAM]（#3A86FF），然后按下 Fight，观看数百个单位以空间哈希群集（spatial-hash flocking）平滑交战，并伴随欢快的彩纸爆裂（零血腥）。包含 10 个原创代码绘制单位，各有独特优势与克制关系（Pikemen、Archers、Catapults、Shield Walls、Goat Cavalry、Orb Wizards（带弹跳法球）、Splitting Slimes、Giant Snowmen、Horn Drummers（为附近友军提供增益）和 Balloon Bombers），可涂绘的地形笔刷（River、Hills、Forest，可减速单位或提供射程/掩护）、慢动作（0.35×）、跟随动作镜头缩放、已绘制阵型的回放、12 个金币预算挑战谜题（“Win with 40 coins”）以及分享战斗 URL 编码。第一帧即开场，一场动画遭遇战已经在草地上冲锋。

- 受众：浏览器游戏玩家、物理沙盒爱好者，以及喜欢即时绘制并观看玩具的休闲策略玩家。
- 目标：在第一帧用一场充满活力的冲锋中玩具战斗在一秒内吸引玩家，然后让绘制军队、涂绘地形和解决 12 个战术金币谜题在桌面端和触屏设备上都轻松有趣。
- 基调：阳光明媚、弹跳活泼、木制玩具盒般的奇思妙想——节日彩纸爆裂和欢快的单位剪影。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 4
- 库：lucide-react（ISC）、@fontsource/fredoka（OFL-1.1）、@fontsource/plus-jakarta-sans（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务端代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中导入 @fontsource/fredoka（600、700）、@fontsource/plus-jakarta-sans（400、500、600、700）和 @fontsource/jetbrains-mono（400、500、600）。
  - 在 src/sim/battleEngine.ts 中编写高性能空间哈希群集与战斗引擎，支持最多 1,000 个单位流畅运行，全部 10 种单位具有各自不同的行为（弹跳的巫师法球、史莱姆被击破时分裂、投石车溅射巨石、鼓手加速光环、盾墙减伤、河流/森林地形减速与丘陵射程加成，以及欢快的多彩纸屑爆裂）。
  - 在 src/sim/puzzles.ts 中编写 12 个金币预算挑战谜题和紧凑的 URL hash 编码器/解码器，并将所有文案和单位元数据保留在 src/content.ts 中。
  - 在第一帧同步渲染阳光明媚的草甸战场，处于冲锋中段，带有柔和的天空地平线、手绘风格的河流/森林/丘陵、清晰的卡通单位剪影、投射物和纸屑爆裂。

## 变量
- [BRAND] — 游戏标题（默认：“Meadow Clash”）。俏皮卡通对战沙盒标题
- [RED_TEAM] — 左方军队名称（默认：“Crimson Brigade”）。左侧红色玩具军队的名称
- [BLUE_TEAM] — 右方军队名称（默认：“Cobalt Banner”）。右侧蓝色玩具军队的名称
- [MAP_NAME] — 战场名称（默认：“Buttercup Field”）。阳光草甸竞技场标签
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/draw-battle-simulator-game（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值编写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 阳光草地（Sunny Meadow）`#8BC34A` — 主要的草地玩具箱战场
- 破晓天空（Daybreak Sky）`#BEE3F8` — 页面背景、顶部地平线云朵和绘制河流
- 绯红队（Crimson Team）`#FF5A5F` — 左方军队束腰外衣、计数器和队伍旗帜
- 钴蓝队（Cobalt Team）`#3A86FF` — 右方军队束腰外衣、计数器和队伍旗帜
- 玩具箱奶油色（Toybox Cream）`#FFFDF7` — 清爽的 HUD 栏、单位调色板停靠区和拼图抽屉
- 墨炭色（Ink Charcoal）`#1F2937` — 粗壮卡通边框、排版和阴影

### 排版
- 游戏标题与胜利横幅：Fredoka（OFL），字重 600/700
- 单位提示与控件：Plus Jakarta Sans（OFL），字重 400/500/600/700
- 单位计数、金币与速度：JetBrains Mono（OFL），字重 400/500/600

### 布局与动效
- 间距：紧凑的阳光顶部控制栏、占据视口核心的全宽带框草地战斗画布，以及触感十足的底部 10 单位 + 地形画笔停靠区，在 390px 移动端上可干净换行。
- 圆角：草地舞台和拼图卡片使用 14px 圆角，配粗壮 2px 墨色边框；Fight、Slow-Mo、Follow Cam 和 Replay 使用全胶囊按钮。
- 动效：第一帧即运行实时冲锋中的卡通战斗，带有跳跃行走循环、拱形箭矢、弹跳巫师法球，以及单位爆裂时的庆祝彩纸爆发。
- 动效：平滑的线条草图预览轨迹，在手指或鼠标拖过草地时精确显示玩具士兵将生成的位置。
- 动效：跟随动作相机平滑缩放和平移，朝向最密集的活跃前线冲突。
- 动效：在 prefers-reduced-motion 下，缓慢动画温和减速并禁用相机抖动，同时保持完整可玩性。
- 图像：100% 代码绘制的 HTML5 Canvas 2D 阳光草地地形（山丘、蜿蜒河流、蓬松卡通松树林）、10 种独特的玩具士兵原型、弹跳法球、投石机石块和彩纸粒子。

## 页面与区块
### [BRAND] · 绘画对战模拟器（`#/battle`）
1. **顶部命令栏与实时草地对战画布** — 俏皮的奶油色与墨色顶部栏，展示 [BRAND] 徽章、实时军队平衡条（[RED_TEAM] 数量 vs [BLUE_TEAM] 数量）、主 Fight / Pause 按钮、Slow-Mo（0.35×）切换、Follow Cam 切换、Replay 按钮、Clear 按钮、Puzzles（12）抽屉按钮，以及 Share URL 复制按钮。正下方是阳光明媚的 [MAP_NAME] Canvas 舞台，第一帧就已处于冲锋中（红蓝玩具军队碰撞，伴随箭矢、巫师法球和彩纸爆裂！）。在左半区拖动可沿你的笔画部署 [RED_TEAM] 单位；在右半区拖动可部署 [BLUE_TEAM] 单位（或在选中 Terrain Brush 时绘制 River、Hill 和 Forest 地形）。
   布局：1280px 容器内全宽响应式战场（桌面端 min-h 460px / 移动端 330px），零溢出。
   动效：实时 60fps 群集模拟，笔画到生成单位的放置平滑流畅。
2. **10 单位玩具箱停靠栏与可绘制地形笔刷** — 触感十足的底部选择条，展示全部 10 个卡通单位，附金币成本、角色标签和悬停计数器提示：Pikeman（2g）、Archer（3g）、Shield Wall（3g）、Goat Cavalry（4g）、Splitting Slime（4g）、Horn Drummer（4g）、Orb Wizard（5g）、Balloon Bomber（6g）、Catapult（7g）和 Giant Snowman（8g）——外加 4 个 Terrain Brushes（`River — Slows 50%`、`Forest — Slows & Cover`、`Hill — +30% Range`、`Grass Eraser`）。
   布局：桌面端为响应式水平 chip 停靠栏；390px 移动端为紧凑换行网格。
   动效：激活的笔刷弹起，带有厚重的玩具箱墨影。
3. **12 个金币预算挑战谜题与可分享对战链接** — 滑出式或模态抽屉，列出 12 个手工战术谜题（例如 '01: Shield Breaker · 32 Coins'、'04: Goat Charge · 40 Coins'、'08: River Crossing · 48 Coins'、'12: Snowman Siege · 70 Coins'），完成星级保存在 localStorage 中。加载谜题会生成固定的 [BLUE_TEAM] 防御，并在 [RED_TEAM] 一侧给玩家严格的金币预算。'Share URL' 将绘制的单位和地形序列化为紧凑的 hash 参数，因此打开链接即可重现完全相同的对战。底部有可选 [CREDIT] 链接的简洁页脚。
   布局：整洁的 2 列谜题模态网格 + 分享确认 toast。
   动效：胜利横幅爆出节日彩纸并标记谜题已解决。

## 资源
- 图标：安装 lucide-react（ISC），用于播放控制、地形笔刷、解谜奖杯、相机切换和分享操作。
- 字体：安装 @fontsource/fredoka、@fontsource/plus-jakarta-sans 和 @fontsource/jetbrains-mono（OFL-1.1），并在 src/main.tsx 中直接导入。
- 图像：在 src/sim/battleEngine.ts 内的 HTML5 Canvas 上直接绘制阳光草甸、河流、丘陵、森林、全部 10 种卡通单位原型、投射物和彩纸爆裂效果。

## 不要做
- 不要复制 Neal Agarwal 的 Battle Draw 中的代码、美术、声音文件或布局。
- 不要出现血、血腥或写实暴力——被击败的玩具单位会爆成明亮的派对彩纸。
- 渲染出的 UI 上任何地方都不要出现日历日期或四位年份。
- 第一帧不要是空荡荡的战场——启动时立即呈现一场热闹的冲锋中遭遇战。
- 不要用 clip-path 在滚动前隐藏区块。
- 不要 CDN 脚本/字体，不要后端 API，生产构建中不要 source maps，并保持 dist/ 在 20 MB 以下。
- 在 1440x900 桌面端或 390x844 移动端不要出现控制台错误或水平溢出。

---
Inspired by Draw-to-Deploy Cartoon Battle Sandbox by @nealagarwal — https://neal.fun/
— Prompt by VibeFather · https://vibefather.ai/t/draw-battle-simulator-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
