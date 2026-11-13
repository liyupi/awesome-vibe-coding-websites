> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 开放世界城市驾驶游戏

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一个完整的单页 3D 浏览器游戏，设定在虚构的 [DISTRICT] 街区。玩家在黄昏时分漫步于一座小型低多边形城市，借用任意一辆薄荷条纹的共享汽车，要么把 [ERRAND] 送到三扇门前，要么驾驶 [RACE_NAME]——一条六门单圈赛道。整个街区一次性加载，并且是屏幕上最先出现的内容。在游玩的两分半钟里，光照从淡紫黄昏缓缓过渡到夜晚。默认标语：[TAGLINE]。

- 受众：独立开发者、前端开发者和设计师，他们想要一个精致的静态 Three.js 驾驶玩具，支持键盘和屏幕虚拟手柄操作，在桌面和手机上都能以街区速度清晰可读。
- 目标：交付一个可重复游玩的夜晚：一张覆盖着鲜活街道网格的标题卡、自由行走、进出共享汽车、街机式驾驶、八辆环境交通车、一个北向朝上的小地图、一趟门廊跑腿任务、一场单圈计时赛、黄昏到夜晚的光照、暂停与帮助，以及本地最佳成绩。两套不同的名称集必须保持相同的道路、操控和任务几何结构。
- 基调：温暖、本地化、俏皮。简短的美国英语、具体的地名，以及邻里汽车俱乐部的礼仪。玩家是一位受欢迎的成员，借用俱乐部的车，把包裹或鲜花送到门口。

## 技术栈
- 框架：Vite 6 + TypeScript 5
- 样式：原生 CSS（Vanilla CSS）
- 库：three（MIT）、lucide（ISC）、@fontsource-variable/fraunces（OFL）、@fontsource-variable/outfit（OFL）、@fontsource/ibm-plex-mono（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务端代码、无外部 API。
- 设置：
  - 搭建 Vite 的原生 TypeScript 模板。脚本：dev=vite，build=tsc && vite build，preview=vite preview。包名是 BRAND 的 slug，不是固定的模板 id。将 vite base 设为 './'，build.outDir 设为 dist，build.emptyOutDir 设为 true，build.sourcemap 设为 false。tsconfig：strict 为 true，noEmit 为 true。
  - 仅安装 three、lucide、@fontsource-variable/fraunces、@fontsource-variable/outfit 和 @fontsource/ibm-plex-mono 作为运行时依赖，外加 Vite 和 TypeScript 作为开发依赖。不要添加 React、物理引擎、游戏框架、后处理或补间库。
  - 从这些包中导入 Fraunces 可变字重 600 和 700，Outfit 可变字重 400、500 和 600，以及 IBM Plex Mono 字重 500。仅导入 Lucide 图标 Play、Pause、Volume2、VolumeX、CircleHelp、Car、Flag、Package 和 X。在绘制画布标牌前等待 document.fonts.ready。
  - 使用模块 src/content.ts、main.ts、world.ts、drive.ts、traffic.ts、missions.ts、lighting.ts、minimap.ts、ui.ts、audio.ts 和 styles.css。将所有专有名称、按钮标签、帮助行、toast 和标牌字符串保留在 content.ts 中。模拟代码读取该模块。
  - 世界坐标轴：+x 向东，+y 向上，+z 向北。网格的朝向偏航角为 Math.atan2(forwardX, forwardZ)，赋值给 rotation.y。偏航角 0 面向 +z。验证 Kiln 泳池车指向北方；如果它指向南方，则翻转偏航角符号，而不是镜像地图。
  - 在所有面向玩家的文案构建中使用 BRAND、DISTRICT、ERRAND、RACE_NAME 和 TAGLINE。当任何值与默认值不同时，重写 content.ts 中的标牌、商店名称、遮阳篷道具和看板句子，并保留每个坐标、速度、颜色和门。如果 DISTRICT 是 Orchid Blocks 且 ERRAND 是 flower crates，则严格使用世界部分中的备用名称表。
  - 仅在 localStorage 中持久化门廊最佳分数、最佳单圈秒数和静音状态，键为 BRAND 的 slug 加上 -evening。不使用日历日期。不从网络解析任何内容。
  - 一个 index.html，lang=en，viewport 带 viewport-fit=cover，一个全视口画布和 HTML 覆盖层。文档标题为 BRAND + 一个长破折号 + DISTRICT。Body 溢出隐藏。无路由器。

## 变量
- [BRAND] — 俱乐部名称（默认：“Amber Row Club”）。虚构的俱乐部或市场名称，用于标题卡、会所标牌和存档键。
- [DISTRICT] — 街区（默认：“Reed Wharf”）。虚构的街区名。用于眉题、待机目标和标题。
- [ERRAND] — 货物（默认：“bakery boxes”）。小写复数名词，指跑腿运送的货物。
- [RACE_NAME] — 圈速赛名称（默认：“Lantern Lap”）。六门计时赛的简称。
- [TAGLINE] — 标题副句（默认：“Walk the blocks before the lamps take over.”）。标题卡上俱乐部名称下方的一句话。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/open-world-city-driving-game（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/open-world-city-driving-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
