> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 第一人称滑雪游戏

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建一款程序化生成的 Three.js 3D 高山滑雪游戏，标题为 [BRAND]，场景设定在虚构的 [MOUNTAIN_NAME]（[ELEVATION_DROP]）山上，向下延伸至高山山谷村庄 [VILLAGE_NAME]。整个 3D 世界全部用代码渲染（零外部模型文件）：雕刻般的雪道，带有压雪后的灯芯绒纹理着色、雪包坑洼、实例化的覆雪松林（#1F4D3A）、沿架空缆索滑行的移动红色缆车厢、阳光照耀的远峰、木制山谷小屋、闪烁的雪花闪光点，以及动态的刻滑飞雪粒子。提供干脆利落的刻滑物理（倾斜转向、收身加速、立刃刹车以扬起飞雪并减速、按 Space/按钮从自由滑跳台起跳做特技），3 条难度递增的赛道（Blue Glacier Cruiser、Red Timber Ridge、Black Ice Chute）、计时的回转旗门及过门奖励、基于 localStorage 的半透明最快下坡幽灵回放、可交互的 SVG 雪道地图、实时天气切换（Bluebird、Snowfall、Fog）、一天中的时段（Morning、Noon、Alpenglow）、第一人称（带刻滑板头）和追逐相机、Web Audio 合成的风声和滑雪板刃声，以及完整的键盘、鼠标、游戏手柄和移动端触控支持。第一帧即开场：站在阳光明媚的晨间雪道顶端，俯瞰闪光的雪坡、回转旗门、松林、缆车和下方的山谷——并配有一个清晰、不阻塞操作的 'Drop In' 胶囊按钮。

- 受众：浏览器游戏玩家、体育迷和 WebGL 爱好者，他们想要即时、有触感的 3D 下坡体验。
- 目标：在第一帧就呈现令人惊叹的高山远景，并在数秒内在桌面端和移动端都带来干脆、愉悦的刻滑反馈。
- 基调：清爽、阳光明媚的高山运动感——清新的山间空气、干净的冰川蓝遥测数据，以及一目了然的蓝/红/黑雪道标记。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 4
- 库：three（MIT）、@types/three（MIT）、lucide-react（ISC）、@fontsource/barlow-condensed（OFL-1.1）、@fontsource/inter（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中导入 @fontsource/barlow-condensed（600、700、800）、@fontsource/inter（400、500、600）和 @fontsource/jetbrains-mono（500、600、700）。
  - 在 src/sim/skiEngine.ts 中构建程序化 Three.js 山脉、实例化积雪松林、动画架空缆车、村庄木屋、回转旗门、自由滑雪跳台、雪花闪烁 + 刻滑飞溅粒子系统、幽灵滑雪者回放和物理引擎（始终设置 preserveDrawingBuffer: true，并将 DPR 上限设为移动端 1.5 / 桌面端 2）。
  - 在 src/sim/skiAudio.ts 中使用 Web Audio API 合成持续的高山风声和滑雪板刻滑嘶嘶声（无音频文件；在用户交互时干净启动，带静音开关）。
  - 将所有 3 条雪道定义（Blue、Red、Black）、技巧名称和可自定义品牌文案保留在 src/data/runs.ts 中，并在 src/components/TrailMapModal.tsx 中构建交互式 SVG Trail Map 模态框。

## 变量
- [BRAND] — 游戏标题（默认：“Crestline Powder”）。高山滑雪游戏品牌标题
- [MOUNTAIN_NAME] — 虚构山峰名称（默认：“Mount Alabaster”）。原创高山峰名
- [VILLAGE_NAME] — 基地村庄名称（默认：“Larch Hollow”）。虚构高山基地村庄名称
- [ELEVATION_DROP] — 垂直落差标签（默认：“840m Vertical”）。显示在 HUD 中的垂直落差徽章
- [CREDIT] — 在页脚保留一个小的“Template by VibeFather”链接，指向 https://vibefather.ai/t/first-person-ski-run-game（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- Fresh Powder（新雪粉） `#F7FBFF` — 阳光照耀的雪地地形、高光与简洁的 HUD 卡片
- Glacier Blue（冰川蓝） `#7EC8E3` — 高山天空、冰感点缀、幽灵轨迹与速度仪表
- Alpine Pine（高山松） `#1F4D3A` — 实例化常青树林带与深林点缀
- Summit Slate（峰顶石板） `#0F2233` — 磨砂半透明 HUD 界面与高对比度字体
- Blue Piste（蓝色雪道） `#2563EB` — 初级 Glacier Cruiser 雪道标记与旗门
- Red Piste（红色雪道） `#E11D48` — 中级 Timber Ridge 雪道标记与缆车车厢
- Black Diamond（黑钻雪道） `#18181B` — 高级 Ice Chute 标记与陡峭雪槽警告

### 字体排印
- 山峰标题、速度读数与特技提示：Barlow Condensed（OFL），字重 600/700/800
- 控件、雪道地图与滑行总结：Inter（OFL），字重 400/500/600
- 秒表、垂直落差与旗门分段：JetBrains Mono（OFL），字重 500/600/700

### 布局与动效
- 间距：全出血 100dvh Three.js 高山视口，配紧凑磨砂玻璃顶部遥测栏、首帧不打扰的峰顶出发胶囊按钮，以及响应式底部控制条（外加移动端左/右/收身/跳跃触控板）。
- 圆角：14px 磨砂峰顶 HUD 卡片；全胶囊形蓝/红/黑雪道选择徽章。
- 动效：动态第一人称镜头侧倾，随刻刃转弯倾斜；收身时轻微俯仰下沉；自由式跳台腾空时划出令人兴奋的空中弧线。
- 动效：头顶缆车车厢沿绷紧的钢缆在雪道上方持续滑行，雪面在晨光中闪烁微光。
- 动效：刻刃转弯扬起程序化雪雾粒子的弧形羽流。
- 动效：遵循 prefers-reduced-motion，柔化镜头侧倾与粒子密度，同时保留完整可滑行性。
- 图像：100% 程序化 Three.js 3D 高山地形、雪顶峰峦地平线、实例化松树、红色缆车车厢、木制山谷小屋、发光的青色幽灵滑雪者，以及清晰代码绘制的 SVG 雪道地图。

## 页面与区块
### [BRAND] · 第一人称滑雪道（`#/mountain`）

1. **全出血程序化高山雪道与首帧峰顶远景** — 全视口 Three.js 场景在清脆晨光中同步于 [MOUNTAIN_NAME] 山顶开启：雪亮的灯芯绒雪道穿过红/蓝回转旗门向下延伸，实例化松林（#1F4D3A），头顶红色缆车车厢，山谷下方 [VILLAGE_NAME] 的木屋闪烁，第一人称视野底部框出明亮的滑雪板尖端。一个流畅、不突兀的悬浮山顶启动胶囊（'Drop In · Press Space or Tap'）干净地放置，不遮挡山景。
   布局：全视口 `h-dvh` 3D 画布，带悬浮顶部遥测 HUD 和紧凑底部环境/雪道停靠栏。
   动效：第一帧有轻微的滑雪板尖端闲置摇摆和移动的缆车；进入后平滑 60fps 刻滑下降。

2. **磨砂高山遥测 HUD 与控制停靠栏** — 紧凑顶部 HUD 显示 [BRAND] / [MOUNTAIN_NAME]（`[ELEVATION_DROP]`）、当前雪道胶囊（蓝 / 红 / 黑）、实时速度（`km/h`）、雪道秒表、已通过回转旗门、特技得分和幽灵分段时间差。底部/侧边紧凑停靠栏让玩家在 3 条雪道间切换，切换相机（`First-Person` / `Chase`）、天气（`Bluebird` / `Snowfall` / `Fog`）、一天中的时间（`Morning` / `Noon` / `Alpenglow`）、音频静音，并打开雪道地图。在移动/触摸屏上，符合人体工学的拇指控制（`←`、`→`、`Tuck`、`Jump`）干净地出现在底部边缘。
   布局：在 1440×900 和 390×844 下零水平溢出；在雪地上有清晰可读的对比度。
   动效：特技弹出（`360° SPIN +350`、`CLEAN GATE +100`）在上方中央附近干净地动画。

3. **交互式 SVG 高山雪道地图与终点滑行总结** — 以清晰矢量 SVG 渲染的模态雪道地图，显示 [MOUNTAIN_NAME] 的山顶、缆车索道线、Blue Glacier Cruiser、Red Timber Ridge、Black Ice Chute、Freeride Jump Zone 和 [VILLAGE_NAME] 基地——每条雪道可点击直接传送到其起点门，并显示保存的 localStorage 个人最佳时间和幽灵状态。穿过山谷终点横幅会打开一张干净的终点卡片，包含时间、通过的旗门、特技奖励、新纪录幽灵徽章，以及一键 Run Again / Next Difficulty。
   布局：居中的磨砂高山模态框，带干净的键盘 Escape 关闭和微妙的页脚署名。
   动效：平滑的模态框显现和终点彩纸/雪花爆发。

## 资产


## 禁止事项
- 绝不要提及任何真实的滑雪场、阿尔卑斯山峰、滑雪装备制造商或竞争对手。
- 绝不要加载外部 3D 模型、音频文件、纹理或 CDN 字体。
- 绝不要在首帧渲染空白的深色屏幕或全屏遮挡式标题菜单——要立即展示俯瞰雪道、旗门、松林、缆车和山谷的阳光照耀下的山景。
- 绝不要在 HUD 或雪道地图上的任何位置打印日历日期或 4 位年份。
- 绝不要在 390×844 移动端上出现水平溢出，或用 clip-path 裁剪元素。

---
— Prompt by VibeFather · https://vibefather.ai/t/first-person-ski-run-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
