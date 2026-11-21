> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 粒子变形 3D 落地页

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 的旗舰空间音频耳机 [PRODUCT_NAME]（[PRICE]，[BATTERY_SPEC]）构建一个深空主题的 3D 产品落地页。一个固定的 Three.js WebGL 舞台渲染数万个自定义着色器 GPU 粒子（桌面端约 24,000 个 / 移动端约 9,000 个），这些粒子在五个由代码采样、与滚动区块对齐的 3D 几何体之间无缝变形：Scattered Nebula（Hero）、Spatial Headset（Features）、Acoustic Sound Wave（Specs）、Globe of Listeners（Reviews）和 Studio Emblem（Pricing、FAQ 与 Pre-Order）。粒子会轻柔地从指针处排斥开，呈现柔和的景深散景（depth-of-field bokeh）与极光泛光（aurora bloom），并在访客于 Pricing 颜色选择器中选择版本时实时改变颜色。在减少动态效果（Reduced motion）模式下，每个区块显示清晰的静态形状，不播放连续的变形动画。

- 受众：发烧友、空间音频创作者、工业设计爱好者，以及展示旗舰可穿戴设备的硬件发布团队。
- 目标：在第一帧就以明亮、一眼可辨的 3D 极光粒子云和清晰的产品主视觉吸引访客，然后引导他们了解声学工程、评价、配色定制和本地预购。
- 基调：精准声学工程与氛围宁静感的结合——平静、雕塑感、触感十足。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 4
- 库：three（MIT）、@types/three（MIT）、lucide-react（ISC）、@fontsource/syne（OFL-1.1）、@fontsource/inter（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中导入 @fontsource/syne（700、800）、@fontsource/inter（400、500、600）和 @fontsource/jetbrains-mono（400、500）。
  - 完全在 src/three/particleShapes.ts 的代码中编写程序化 3D 点云形状采样器，为 5 个轮廓生成精确匹配的顶点数组：nebula（星云）、headset（头戴式耳机：拱形头带 + 双声学耳罩 + 耳垫 + 空间光环）、soundwave（声波：3D 驻波谐波曲面）、globe（地球：经纬度声学聆听者球体 + 轨道节点）和 emblem（徽标：晶体共振环标记）。
  - 在 src/three/ParticleMorphStage.tsx 中构建自定义 Three.js ShaderMaterial 舞台，具备 preserveDrawingBuffer: true、自适应粒子数量（桌面端 24000 / 移动端 9000）、活动形状对之间的平滑 GLSL 变形、指针射线平面排斥、景深精灵模糊 + 加法泛光效果、滚动联动的区块颜色插值、实时 Pricing 配色覆盖、同步首帧渲染，以及静态减少动态效果下的形状切换。
  - 将所有文案、规格、评价、配色、FAQ 和页脚链接保留在 src/content.ts 中。

## 变量
- [BRAND] — 音频品牌名称（默认：“Auralis”）。虚构的空间音频硬件品牌
- [PRODUCT_NAME] — 耳机型号名称（默认：“Auralis One”）。旗舰空间音频耳机名称
- [PRICE] — 起售价（默认：“$389”）。标准版预购价格
- [BATTERY_SPEC] — 电池亮点（默认：“48-Hour Spatial Battery”）。标志性电池续航宣传语
- [CREDIT] — 在页脚保留一个小的“Template by VibeFather”链接，指向 https://vibefather.ai/t/particle-morph-3d-landing-page（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值撰写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 深空（Deep Space）`#07071A` — 主全视口宇宙背景
- 黑曜玻璃（Obsidian Glass）`#10122D` — 半透明编辑式卡片、规格表、FAQ 手风琴和预购抽屉
- 极光青（Aurora Teal）`#4EF2C3` — 主发光粒子颜色、活动变形指示器和主 CTA
- 离子紫（Ion Violet）`#8C5CFF` — 次级粒子渐变、声波高光和活动色板
- 暖白（Warm White）`#F6F3EC` — 高对比度展示字体和清晰星光粒子核心

### 字体排印
- 展示标题与产品字标：Syne（OFL），字重 700/800
- 正文、评论与控件：Inter（OFL），字重 400/500/600
- 声学遥测与规格：JetBrains Mono（OFL），字重 400/500

### 布局与动效
- 间距：固定全视口 3D 粒子画布位于 1240px 滚动编辑式栏后方；64px 粘性磨砂页眉；宽松的 96px 区块节奏，留有清晰呼吸空间，让每个 3D 粒子轮廓无遮挡地闪耀。
- 圆角：磨砂声学玻璃面板和预购卡片为 14px；全胶囊按钮和形状章节指示器。
- 动效：连续滚动驱动的 GLSL 变形，跨越五个 3D 形状：01 Nebula → 02 Spatial Headset → 03 Sound Wave → 04 Listener Globe → 05 Brand Emblem。
- 动效：平滑的指针/触摸粒子排斥场，以弹性弹簧回位将附近粒子径向推开。
- 动效：紧凑右下角章节停靠栏中的实时交互式变形跳转胶囊，让访客可以自然滚动或直接预览 5 个形状中的任意一个。
- 动效：实时定价配色选择器（Aurora Teal、Ion Violet、Solar Amber、Arctic Pearl）立即为 3D GPU 粒子云重新着色。
- 动效：在 prefers-reduced-motion 下，将每个区块锁定到其干净的静态目标形状，零连续变形抖动。
- 图像：实时 Three.js 自定义 GLSL GPU 粒子云，完全从程序化代码构建的 3D 几何体采样——无外部模型文件或库存照片。

## 页面与区块
### [PRODUCT_NAME] by [BRAND] · 空间音频头戴耳机（`#/auralis`）
1. **粘性页头、形态停靠栏与星云主视觉区** — 粘性深空玻璃页头，含 [BRAND] 几何波纹徽标、跳转链接（功能、规格、评价、价格、常见问题）、实时激活形态指示胶囊（`01 · Nebula`）以及“Reserve [PRODUCT_NAME]”CTA。全屏主视觉区干净地叠在发光的星云至头戴耳机 3D 粒子云之上（首帧即明亮渲染）：展示主标题（“Sound sculpted in three dimensions.”）、简要介绍 [PRODUCT_NAME] 与 [BATTERY_SPEC] 的文案、两个 CTA（“Reserve [PRICE]”、“Explore Acoustics”），以及三个快速声学徽章（`50mm Planar Drivers`、`360° Head Tracking`、`0.8ms Low Latency`）。紧凑的浮动右下角形态预览停靠栏让用户随时在 5 个 3D 变形阶段之间跳转。
   布局：非对称双栏主视觉区叠在固定的全视口粒子画布之上（文案居左，无遮挡的 3D 粒子雕塑居右）；在 390px 移动端上干净堆叠。
   动效：粒子以星云形态缓慢呼吸，并随光标轻柔排斥。
2. **声学功能（空间头戴耳机变形）** — 粒子汇聚成雕塑般的 3D [PRODUCT_NAME] 头戴式耳机轮廓，同时四张玻璃功能卡片突出展示双腔平面驱动单元、自适应空间锚定、Whisper-Seal ANC（-46 dB）与轻量镁合金轭架。
   布局：左右编辑式分栏，为旋转的 3D 头戴耳机粒子云留出清晰的视口呼吸空间；移动端单栏堆叠。
   动效：滚动进度将星云变形为雕塑般的 3D 空间头戴耳机。
3. **技术规格（声学声波变形）** — 粒子展开为起伏的 3D 谐波声波缎带，旁边是结构化的声学规格账本：驱动单元拓扑、频率响应（`4 Hz – 48 kHz`）、空间引擎、电池续航（[BATTERY_SPEC]）、无线编解码器、重量（`268 g`）与材质。
   布局：双栏响应式规格矩阵卡片，配等宽字体读数。
   动效：粒子在着色器时间驱动下以驻波谐波形式泛起涟漪。
4. **听众评价（听众地球变形）** — 粒子组装成发光的 3D 听众地球，城市节点环绕运行，同时三位虚构的母带工程师、电影作曲家和空间音频总监分享简短印象与听音室评分。
   布局：桌面端三栏评价卡片行；移动端单栏。
   动效：3D 粒子球体轻柔旋转，伴随脉动的极光听众信标。
5. **价格、实时粒子取色器、常见问题与本地预购** — 粒子解析为水晶般的 [BRAND] 共振徽标。两张版本卡片（标准版 [PRICE] 与含平衡 DAC 底座的 Studio Bundle）位于交互式 4 色饰面取色器（`Aurora Teal`、`Ion Violet`、`Solar Amber`、`Arctic Pearl`）旁，后者可实时为 3D GPU 粒子云重新着色。包含 5 问交互式常见问题手风琴，以及保存在 localStorage 中的本地演示预购预约表单，并附有明确的“Local demo reservation — no real payment”提示。干净页脚含可选的 [CREDIT] 链接。
   布局：价格 + 配色面板双栏位于常见问题 + 预购表单上方；在 390px 移动端上单栏堆叠。
   动效：选择任一配色会平滑插值 3D 着色器的主/次粒子 uniform。

## 资源
- 图标：安装 lucide-react（ISC）用于声学指标、配色选择器、FAQ 折叠面板、形状停靠栏和预订控件。
- 字体：安装 @fontsource/syne、@fontsource/inter 和 @fontsource/jetbrains-mono（OFL-1.1），并在 src/main.tsx 中直接导入。
- 图像：在 src/three/particleShapes.ts 中使用自定义 GLSL 着色器，通过 Three.js 代码程序化生成全部 5 个 3D 粒子变形形状；不使用任何外部 3D 模型或位图。

## 不要做
- 不要使用从 Three.js Journey 或任何商业音频品牌复制的着色器、几何体资源或代码。
- 不要使用外部 .glb/.gltf 模型文件、CDN 脚本/字体，或真实的支付/结账后端。
- 渲染页面上任何位置都不得出现日历日期或四位年份。
- 不要出现空白的黑色首帧——在第一帧就同步渲染出鲜艳的极光粒子，并使用 preserveDrawingBuffer: true。
- 不要在滚动前用 clip-path 隐藏区块。
- 生产构建中不要包含 source maps（build.sourcemap: false），并保持 dist/ 在 20 MB 以下。
- 在 1440x900 桌面端或 390x844 移动端不得出现控制台错误或水平溢出。

---
Inspired by Particle Morph 3D Product Showcase by @bruno_simon — https://threejs-journey.com/
— Prompt by VibeFather · https://vibefather.ai/t/particle-morph-3d-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
