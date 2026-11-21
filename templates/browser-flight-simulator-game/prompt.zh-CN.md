> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 浏览器飞行模拟器游戏

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个即时可玩的 Three.js 低多边形浏览器飞行模拟器，驾驶 [AIRCRAFT_NAME] 飞越以 [HARBOR_NAME] 为锚点的程序化生成的 [ARCHIPELAGO_NAME]。第一帧即在黄金时刻以空中状态开启，带有自动驾驶风景环绕和一个小巧的 'Take control' 胶囊按钮——绝不是一个暗色菜单墙。包含程序化岛屿、带泡沫的动态海面着色器、可穿越的云层、Day/Sunset/Night 循环、Chase 与 Cockpit 相机、带 localStorage Ghost Replay 的 Ring Course、Mail Deliveries、计分式 Runway Landings、Photo Mode、合成的 Web Audio 引擎/风声，以及移动端触控操作。

- 受众：游戏玩家、创意技术专家和 Web 开发者，用于展示实时 3D WebGL 场景和有趣的浏览器体验。
- 目标：在加载后一秒内渲染出 unmistakable、阳光照耀的低多边形海岸群岛飞行画面，同时提供真正令人满意的街机式飞行、活动和简洁的航空 HUD 仪表。
- 基调：轻松、冒险的海岸航空——清晰的仪表读数、俏皮的低多边形温暖感，以及零杂乱。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 4
- 库：three（MIT）、@types/three（MIT）、lucide-react（ISC）、@fontsource/space-grotesk（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中导入 @fontsource/space-grotesk（600、700）和 @fontsource/jetbrains-mono（400、500、600）。
  - 初始化 THREE.WebGLRenderer，设置 antialias: true、preserveDrawingBuffer: true、powerPreference: 'high-performance'，并将 pixelRatio 上限设为 Math.min(window.devicePixelRatio, 2)（在窄移动视口上按比例缩小）。
  - 在 src/sim/worldBuilder.ts 中程序化构建所有 3D 网格（岛屿、海滩、InstancedMesh 松树林、港口房屋、带旋转光束的灯塔、带信标的柏油跑道、体积云团、螺旋桨飞机、半透明幽灵飞机和发光的金色圆环）。
  - 在 src/sim/audioEngine.ts 中纯粹通过 Web Audio API 合成螺旋桨嗡鸣、油门音高、风声、圆环铃声和邮件投递音效，在用户交互时干净地激活。

## 变量
- [BRAND] — 飞行俱乐部名称（默认：“Pelican Airworks”）。虚构的岛屿航空品牌
- [ARCHIPELAGO_NAME] — 群岛名称（默认：“Aurelia Isles”）。虚构的群岛名称
- [AIRCRAFT_NAME] — 飞机型号名称（默认：“Kite-4 Seaplane”）。虚构的轻型飞机名称
- [HARBOR_NAME] — 主要港口城镇（默认：“Port Solis”）。主要岛屿港口城镇名称
- [CREDIT] — 在页脚保留一个指向 https://vibefather.ai/t/browser-flight-simulator-game 的小型“Template by VibeFather”链接（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 金色地平线（Golden Horizon）`#FF9E5E` — 默认的黄金时刻天空地平线辉光与阳光照射的飞机点缀色
- 海岸天空（Coastal Sky）`#3B7DD8` — 上层天穹与白昼大气渐变
- 泻湖青（Lagoon Teal）`#1C8C9E` — 自定义动画海洋着色器，带白色海岸线浪花泡沫
- 赤陶屋顶（Terracotta Roof）`#E05A47` — 飞机机翼条纹、灯塔环带与港口小镇屋顶
- 阳光沙滩（Sunlit Sand）`#F2D7A0` — 程序化岛屿海滩与环形赛道门
- 松林（Pine Forest）`#2E6F52` — 实例化低多边形岛屿雪松与松树丛
- HUD 石板灰（HUD Slate）`#0D1524` — 半透明航空 HUD 卡片（rgba(13,21,36,0.78)），配 #F4F7FC 清晰文字与 #FFB547 琥珀色仪表

### 字体排印
- HUD 标题与徽章：Space Grotesk（OFL），字重 600/700
- 航空仪表与遥测：JetBrains Mono（OFL），字重 400/500/600

### 布局与动效
- 间距：全出血 100vw × 100dvh 3D 画布，配以克制的 16px 边缘内嵌 HUD 集群，留出 >=75% 的视口作为晴朗天空与群岛。
- 圆角：8px，用于半透明 HUD 仪表胶囊、活动切换器与触控控制板。
- 动效：60fps 流畅街机式空气动力学，带倾斜相机弹簧滞后、旋转螺旋桨盘、翻滚海浪着色器与飘移云团。
- 动效：首帧即启动黄金时刻自动驾驶飞行环绕，让场景在任何输入之前就显得生动。
- 动效：遵循 prefers-reduced-motion，通过阻尼相机抖动与云层漂移速度。
- 图像：100% 程序化 Three.js 低多边形 3D 世界，含自定义 GLSL 海浪与海岸线泡沫着色器、多面体岛屿高度场、实例化松树、彩绘港口小屋、条纹灯塔、柏油跑道、天空渐变穹顶，以及明亮的赤陶与奶油色双浮筒飞机。

## 页面与区块
### [BRAND] · [ARCHIPELAGO_NAME] 飞行模拟器 (`#/fly`)
1. **全视口 3D 群岛画布与即时升空首帧** — 全屏 Three.js WebGL 画布，打开即处于黄金时刻的空中，在 [ARCHIPELAGO_NAME] 上空进行风景巡航，[AIRCRAFT_NAME] 以清晰的 3/4 追逐视角呈现，俯瞰 [HARBOR_NAME]、条纹灯塔、柏油跑道、发光的金色赛道环、泡沫镶边的海洋和阳光照耀的云层。底部中央的紧凑胶囊形提示（'Cruise Autopilot · Press W/S/A/D or click Take Control'）邀请玩家立即驾驶，且不遮挡视野。
   布局：固定全视口画布（`100vw × 100dvh`），配有不阻塞操作半透明角落 HUD 集群。
2. **顶栏：品牌、活动、光照循环、相机、声音与照片模式** — 左上角紧凑徽章显示 [BRAND] · [ARCHIPELAGO_NAME] 及当前任务读数。顶部中央活动选择器胶囊：自由飞行（Free Flight）、赛道环（Ring Course，8 个发光金色环，带实时计时器 + 最佳成绩保存在 localStorage 中 + 半透明青色幽灵回放飞机沿你保存的路径飞行）、邮件投递（Mail Delivery，3 个港口投放区，带 'Drop Mail [Space]' 按钮和投递得分）、跑道降落（Runway Landing，引导玩家对准跑道中线，并对触地垂直速度和对齐度进行百分制评分）。右上角紧凑图标栏：时段切换（`Sunset` / `Day` / `Night`）、相机切换（`Chase` / `Cockpit`）、Web Audio 声音开关和照片模式（干净地隐藏 HUD，仅保留 'Exit Photo Mode' 胶囊和 'Save Snapshot' PNG 按钮）。
   布局：边缘对齐的半透明深色玻璃 HUD 栏（`bg-[#0D1524]/78 backdrop-blur`），在 390px 手机上干净地压缩为整洁的 2 行微型 HUD。
3. **底部航空仪表、2D 雷达小地图与移动端触控板** — 左下角：清晰的 118px 圆形/方形 2D 画布雷达小地图，显示岛屿、跑道矢量、活动环/邮件区、玩家航向三角形和幽灵飞机圆点，并配有空速（KTS）、高度（FT）、油门条，以及速度过低时自动显示的琥珀色/红色 STALL 警告指示器。右下角：桌面端紧凑控制说明（`W/S Pitch · A/D Roll · Shift/Ctrl Throttle · C Camera · Space Drop`），或在移动端视口上显示响应式屏幕触控转向板（俯仰/横滚虚拟摇杆 + 油门 +/- + 投放按钮），另可选 [CREDIT] 链接低调地收在右下角。
   布局：角落锚定的 HUD 小组件，在 1440x900 和 390x844 下均无水平溢出。

## 资产
- icon：安装 lucide-react（ISC），用于 HUD 控件（相机、太阳/月亮、音量、拍照快门、指南针、邮件投放）。
- font：安装 @fontsource/space-grotesk 和 @fontsource/jetbrains-mono（OFL），并在 src/main.tsx 中导入。
- image：所有 3D 岛屿、海沫着色器、飞行器、灯塔、港口小镇、云层和 2D 小地图均使用 Three.js 和 Canvas 程序化渲染，不依赖任何外部模型或音频文件。

## 不要做的事
- 不要使用来自 fly.pieter.com 或任何第三方飞行模拟器的代码、素材或品牌标识。
- 不要有阻塞式标题画面、模态启动墙、加载转圈，或空白的深色首帧——第 1 帧时飞机必须可见地飞行在阳光照耀的群岛上空。
- 不要使用外部 GLTF/OBJ 模型、外部声音 MP3/WAV 文件，或 CDN 脚本/字体。
- 不要出现日历日期或真实航空公司/飞机商标。
- 生产构建中不要有 source map（build.sourcemap: false），并保持 dist/ 在 20 MB 以下。
- 在 1440x900 桌面端或 390x844 移动端不要出现水平溢出或控制台错误。

---
— Prompt by VibeFather · https://vibefather.ai/t/browser-flight-simulator-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
