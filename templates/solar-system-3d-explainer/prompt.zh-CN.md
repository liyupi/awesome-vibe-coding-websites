> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 太阳系 3D 讲解器

完全按照下面的描述构建这个网站。用你自己的值替换 [VARIABLES]；其余内容保持不变。

## 简介
一个由 [BRAND]（一家虚构的小型科学出版社）发布的 [SYSTEM] 单页交互式 3D 比例模型。一个固定的全视口 WebGL 画布从第一帧起就是主角，其上叠加着纤细的仪器风格 UI。它有两种模式：探索（拖动以环绕，点击天体飞向它并阅读其数据，一个比例切换开关，一个时间滑块）和导览（一段从 [CENTER_BODY] 向外延伸的九站滚动旅程，带有脚本化的镜头运动，最终以真实比例的揭示和一张用于在真实街道上丈量该模型的表格收尾）。标志性时刻是比例切换：当距离和尺寸动画过渡到它们的真实比例时，行星几乎全部消失，而一个实时读数会显示 [HOME_BODY] 现在有多少像素宽。

- 受众：[AUDIENCE]。默认受众：在课堂上投影它的教师，以及在笔记本电脑或手机上充满好奇心的成年人。
- 目标：让一个观念令人难忘：太空极其空旷，而每一张海报都把它画错了。访客应在几秒内拨动开关，然后开始导览。
- 语气：平静、精确，带一点冷幽默，像一位优秀的科学老师。短句，真实数字优先使用美制单位，不使用感叹号，不使用诸如 vast、awe-inspiring 或 journey through the cosmos 之类的宇宙式夸张词汇。

## 技术栈
- 框架：Vite 5 + 原生 TypeScript + three.js
- 样式：Tailwind CSS 3.4
- 库：three 0.169（渲染器、来自 three/addons 的 OrbitControls）（MIT）、gsap 3.12 及 ScrollTrigger（GSAP 标准许可证（免费，含商业使用））、lucide（图标）（ISC）、@fontsource/instrument-serif（OFL-1.1）、@fontsource/ibm-plex-sans（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 不使用 React 或其他 UI 框架：场景是一个命令式 canvas，UI 是一个小型 DOM 覆盖层。除非用户要求更改，否则技术栈固定不变。
  - vite.config.ts：base './'，build.sourcemap false，build.chunkSizeWarningLimit 1200。npm 构建脚本为：tsc --noEmit && vite build。
  - tailwind.config：用设计部分中的 void、panel、hairline、ink、muted、solar 扩展 colors，并用 display（Instrument Serif）、sans（IBM Plex Sans）、mono（IBM Plex Mono）扩展 fontFamily。自定义 CSS 和 prefers-reduced-motion 规则位于 src/styles.css。
  - 文件布局：src/content.ts（所有文案和所有天体数据）、src/main.ts（启动和模式切换）、src/scene/system.ts（天体、轨道、比例）、src/scene/bake.ts（表面烘焙）、src/scene/shaders.ts、src/scene/camera.ts（飞行动画和巡览路径）、src/ui/instruments.ts、src/ui/panel.ts、src/ui/labels.ts、src/ui/tour.ts。
  - src/content.ts 中的每个天体包含：id、name、kind、kicker、note、facts（由 label 和 value 字符串组成的数组）、diameterKm、distanceKm、orbitDays、rotationHours（负值表示反向）、tiltDeg、startAngleDeg、tourAngleDeg、surface（配方名称加调色板十六进制色值）、atmosphere（颜色和强度，或 null）、rings（或 null）、stop（方位角、仰角、以半径计的距离、说明文字、标签、侧边）。场景代码只读取这些数据，因此换一个星系系统无需改动场景。
  - 如果 [SYSTEM]、[CENTER_BODY] 或 [BODIES] 与默认值不同：使用这些天体的真实公开数据，用你自己的话重新表述，填入相同字段。巡览为 [CENTER_BODY] 提供一个停靠点，并为每个天体各提供一个停靠点，按相应顺序编号。从同一配方集中选择表面配方和调色板。在不存在的地方将 belt 和 rings 设为 null。用 3D 场景部分给出的公式重新计算可读比例表，用 Walk it yourself 部分给出的方法重新计算街道表。重写任何不适用的条目（例如，Moons: none known；Day: likely always the same face to the star）。
  - WebGL 设置：THREE.WebGLRenderer，antialias true、logarithmicDepthBuffer true、powerPreference high-performance、ACESFilmicToneMapping、exposure 1.05、clear color #05070D。桌面端像素比为 min(devicePixelRatio, 2)，指针为 coarse 时为 min(devicePixelRatio, 1.5)。每个自定义 ShaderMaterial 都必须在顶点和片元中包含 three.js 的 logdepthbuf 代码块，否则深度排序会出错。
  - 在创建渲染器之前，测试 canvas.getContext('webgl2')。如果返回 null，则不要创建渲染器；显示 3D 场景部分所述的降级方案，以保持控制台干净。

## 变量
- [BRAND] — 发布方或项目名称（默认：“Fernhill Almanac”）。虚构的科学出版方、学校项目或博物馆微型网站。
- [SYSTEM] — 被讲解的系统（默认：“the Solar System”）。任何拥有环绕天体的恒星。
- [CENTER_BODY] — 位于中心的天体（默认：“the Sun”）
- [BODIES] — 环绕天体，由内到外（默认：“Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune”）。5 到 8 个天体能让导览保持合适的长度。
- [HOME_BODY] — 用于实时像素读数的天体（默认：“Earth”）。读者最关心的那一个。
- [AUDIENCE] — 面向的受众（默认：“middle school classrooms and curious adults”）
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/solar-system-3d-explainer（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/solar-system-3d-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
