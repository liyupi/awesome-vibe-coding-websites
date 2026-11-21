> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 体素沙盒建造游戏

请完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建一个原创的 Three.js 粉彩糖果体素沙盒游戏，名为 [BRAND]，以 [VILLAGE_NAME] 为中心（默认地形种子 [WORLD_SEED]）。功能包括：带顶点环境光遮蔽的分块面剔除地形、山丘、绿松石色湖泊、花树、山坡洞穴，以及一个在第 1 帧日落时分即可见、预先建好的湖畔村庄；第一人称行走/跳跃/飞行控制；12 材质快捷栏，包括半透明玻璃、夜间发光灯笼和局部蔓延的水；昼/日落/夜循环；复制/粘贴区域建造模式；带种子重新生成的 localStorage 世界保存/加载；桌面指针锁定；以及移动端触摸控制。

- 受众：创意开发者、3D 网页爱好者，以及在浏览器中探索趣味程序化世界的休闲沙盒建造者。
- 目标：打开后立即呈现一个宜人、明亮照明的日落粉彩村庄，旁边是波光粼粼的湖泊，同时提供清晰的 60fps 方块编辑、区域复制粘贴和动态夜间灯笼照明。
- 基调：俏皮、可触摸、建筑模型般的温暖感——柔和的黏土色彩、清晰的等宽字体工具栏，以及轻松自如的创作流。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 4
- 库：three（MIT）、@types/three（MIT）、lucide-react（ISC）、@fontsource/fredoka（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中导入 @fontsource/fredoka（500、600、700）和 @fontsource/jetbrains-mono（400、500、600）。
  - 初始化 THREE.WebGLRenderer，设置 antialias: true、preserveDrawingBuffer: true，以及自适应 pixelRatio（移动端上限为 1.5，桌面端为 2）。
  - 在 src/voxel/voxelEngine.ts 中实现分块的面剔除网格化（chunked face-culled meshing），并带有逐顶点环境光遮蔽（per-vertex ambient occlusion）（为清晰渲染和低绘制调用，分别使用不透明、半透明玻璃/水，以及自发光灯笼缓冲区）。
  - 从 [WORLD_SEED] 确定性地播种地形生成器，并为 [VILLAGE_NAME] 雕刻出湖畔盆地、丘陵、洞穴入口、花树、人行桥和粉彩灯笼照亮的村舍。

## 变量
- [BRAND] — 沙盒世界标题（默认：“Sugarblock Basin”）。虚构的体素沙盒名称
- [VILLAGE_NAME] — 湖畔村庄名称（默认：“Peachtide Village”）。预置日落村庄的名称
- [WORLD_SEED] — 默认数字种子（默认：“4821”）。用于确定性地形生成的种子整数
- [CREDIT] — 在页脚保留一个小的“Template by VibeFather”链接，指向 https://vibefather.ai/t/voxel-sandbox-building-game（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 薄荷草坪（Mint Turf）`#86E3CE` — 起伏的柔和草地方块
- 蜜桃沙地（Peach Sand）`#FFD3B6` — 湖畔沙滩方块与温暖日落天空辉光
- 珊瑚瓦片（Coral Tile）`#FF8B94` — 小屋坡屋顶与主激活快捷栏描边
- 奶油灰泥（Buttercream Plaster）`#FFF3C4` — 小屋墙壁与明亮柔和的小径
- 薰衣草石（Lavender Stone）`#C9B6F2` — 悬崖、洞穴拱门与梯田式石砌结构
- 辉光灯笼（Glow Lantern）`#FFE066` — 自发光方块，搭配动态 Three.js PointLights 照亮夜景
- 泻湖水（Lagoon Water）`#6ED3FF` — 半透明水方块，会局部蔓延至相邻的低处空气单元
- 梅紫 HUD（Plum HUD）`#1F1A2E` — 半透明深梅紫 HUD 胶囊（rgba(31,26,46,0.82)），配以清爽的白色与蜜桃色点缀

### 字体排印
- 标题与工具标签：Fredoka（OFL），字重 500/600/700
- 坐标、种子与快捷键：JetBrains Mono（OFL），字重 400/500/600

### 布局与动效
- 间距：全出血 100vw × 100dvh 3D 画布，配以简洁顶栏、底部 12 格糖果材质快捷栏，以及可选的可折叠 World / Region Build 弹出面板。
- 圆角：HUD 胶囊、快捷栏材质芯片与 World Seed 抽屉均为 10px。
- 动效：流畅的第一人称行走/跳跃重力与自由飞行移动，配以清脆的方块放置/破坏反馈。
- 动效：动态日落/白天/夜晚天空穹顶与方向光过渡，夜间辉光灯笼会变亮。
- 动效：遵循 prefers-reduced-motion，禁用细微的待机镜头晃动。
- 图像：100% 程序化 Three.js 柔和体素几何，采用面剔除区块、顶点烘焙的角落环境光遮蔽、柔和温暖的日落雾、半透明水体与天空玻璃材质，以及发光的村舍灯笼——零外部纹理。

## 页面与区块
### [BRAND] · [VILLAGE_NAME] 体素沙盒（`#/world`）
1. **全视口日落湖畔村庄画布** — 首帧即为阳光照耀的 3D 场景，位于一处风景优美的露台上，俯瞰日落时分清澈柔和湖面旁的 [VILLAGE_NAME]：4 座手工打造的柔和色调小屋，配珊瑚色屋顶和发光的灯笼窗；一座横跨湖面的木制人行桥；粉色花树；起伏的薄荷色山丘；以及一处雕刻的薰衣草石洞穴入口。点击画布可启用桌面指针锁定（`ESC` 释放），带有中心准星和清晰的线框方块目标高亮；左键破坏、右键放置所选快捷栏方块。
   布局：全视口固定画布（`100vw × 100dvh`），带不阻塞操作的角落 HUD 小组件。
2. **顶栏：品牌、飞行/行走模式、光照循环、区域构建与世界保存/加载** — 左上角胶囊标签显示 [BRAND] · [VILLAGE_NAME] 及实时玩家 XYZ 坐标。右上角控件：行走/飞行切换（`F`）、白天/日落/夜晚循环按钮（演示夜晚时发光灯笼方块点亮黑暗村庄）、区域复制/粘贴弹出层（`Mark A`、`Mark B`、`Copy Selection`、`Paste Ahead`，带体素数量反馈），以及世界保存/加载弹出层（可编辑的数字 Seed 字段，默认 [WORLD_SEED]，`Generate Seed`、`Save World` 保存至 localStorage、`Load Saved`、`Reset Village`）。
   布局：弹性换行的半透明深梅色顶部 HUD 栏，在 390px 移动端无水平溢出。
3. **底部 12 种材质糖果快捷栏与移动端触控** — 底部居中的简洁 12 槽材质快捷栏（1–9、0、-、= 键或点击/轻触），带各不相同的柔和色块和材质提示：Mint Turf、Peach Sand、Coral Tile、Cream Plaster、Lavender Stone、Berry Brick、Timber、Blossom Leaves、Sky Glass、Glow Lantern、Water（局部蔓延至相邻较低地块）、Cloud Puff。在移动端（`<768px`），显示整洁的屏幕移动按钮（Forward/Back/Turn + Up/Jump + Break/Place），整齐地置于可滚动的快捷栏上方，另在右下角提供可选的 [CREDIT] 链接。
   布局：底部居中快捷栏（`max-w-[96vw] overflow-x-auto`），移动端控件零重叠。

## 资产
- 图标：安装 lucide-react（ISC）用于 HUD 切换（太阳/月亮、羽毛飞行模式、复制/粘贴区域、保存/加载、镐/方块）。
- 字体：安装 @fontsource/fredoka 和 @fontsource/jetbrains-mono（OFL），并在 src/main.tsx 中直接导入。
- 图像：所有体素区块、环境光遮蔽着色、湖畔村庄、树木、天空穹顶以及半透明的水/玻璃均在 Three.js 中程序化生成。

## 不要做
- 不要使用任何类似 Minecraft 或任何现有体素游戏品牌的纹理、方块角色、生物、UI 槽位或品牌标识。
- 不要使用深色加载屏幕或阻塞式模态框，以致第一帧就遮住日落湖畔村庄。
- 不要使用外部 3D 模型、纹理文件或 CDN 脚本/字体。
- 不要创建未剔除的逐体素 Mesh；请使用分块面剔除的 BufferGeometry，以便笔记本电脑和无头浏览器都能流畅渲染。
- 界面任何位置都不要出现日历日期。
- 生产构建中不要包含 source maps（build.sourcemap: false），并将 dist/ 保持在 20 MB 以下。
- 在 1440x900 桌面端或 390x844 移动端，不要出现水平页面溢出或控制台错误。

---
— Prompt by VibeFather · https://vibefather.ai/t/voxel-sandbox-building-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
