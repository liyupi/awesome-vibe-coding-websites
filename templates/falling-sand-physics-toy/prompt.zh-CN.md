> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 落沙物理玩具

完全按照以下描述构建这个网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建一个快速的 60fps 元胞自动机落沙物理玩具，标题为 [BRAND]（[TAGLINE]），配有清晰的浅色工作室工具栏，框住一个鲜艳的深板岩色模拟画布（#15171C）。使用类型化数组支持全部 16 种相互作用的材料：Sand、Water、Fire、Smoke、Plant、Lava、Ice、Acid、Oil、Wood、Steam、Stone、Seed、Cloner、Wind 和 Eraser。实现真实的元素反应（Water 将 Fire 扑灭并转化为 Steam；Lava + Water 生成 Stone + Steam；Fire 点燃 Wood、Oil 和 Plants；Seeds 遇水生长为 Plants；Acid 腐蚀非 Stone/Cloner 元素；Ice 在热源附近融化为 Water；Cloner 复制相邻材料；Wind 吹动空气中的颗粒）。包含笔刷大小（1–12）、笔刷形状（Circle、Square、Spray）、Play/Pause、Single-Step（+1 tick）、实时 Temperature Heatmap 开关、三个起始场景（Volcano、Hourglass、Rain Garden —— 打开时 [DEFAULT_SCENE] 已在第一帧就活跃地喷发运动！）、紧凑的 URL hash 场景分享，以及响应式鼠标与触摸绘制。

- 受众：好奇的浏览器用户、物理玩具爱好者、学生，以及喜欢涌现式元胞炼金术的创意编程者。
- 目标：在第一帧就用一个实时喷发的 Volcano（或起始场景）在一秒内吸引玩家，然后让他们在桌面端和 390px 移动端以 60fps 流畅混合全部 16 种元素。
- 基调：触感科学实验室极简主义——清晰的浅色仪器栏与鲜艳发光的元素像素形成对比。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 4
- 库：lucide-react（ISC）、@fontsource/space-grotesk（OFL-1.1）、@fontsource/inter（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中导入 @fontsource/space-grotesk（600、700）、@fontsource/inter（400、500、600）和 @fontsource/jetbrains-mono（500、600）。
  - 在 src/sim/sandEngine.ts 中编写 60fps Uint8Array + Int16Array 温度元胞自动机模拟、全部 16 种元素反应、3 个手工制作的起始场景（Volcano、Hourglass、Rain Garden）、热力图渲染器，以及紧凑的 RLE URL 哈希序列化器。
  - 将材质定义、反应指南提示和可自定义的品牌文案保留在 src/data/materials.ts 中。
  - 在初始加载时同步预模拟 28 个 tick，使第一帧就已充满落下的熔岩、蒸汽羽流、水流瀑布和茂盛的绿植。

## 变量
- [BRAND] — 应用标题（默认：“GrainLab”）。俏皮的科学沙盒品牌名
- [TAGLINE] — 简短副标题（默认：“16-element cellular alchemy sandbox”）。显示在顶部浅色工具栏中的简洁描述
- [DEFAULT_SCENE] — 初始起始场景（默认：“volcano”）。可选 volcano、hourglass 或 rain-garden 之一
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/falling-sand-physics-toy（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 深板岩画布（Dark Slate Canvas）`#15171C` — 高对比度细胞模拟腔室
- 工作室瓷白（Studio Porcelain）`#F6F7F9` — 清爽的浅色页面外壳与工具栏表面
- 实验室墨色（Lab Ink）`#15171C` — 高对比度排版与激活工具轮廓
- 熔岩橙（Molten Lava）`#FF4D1A` — 鲜艳的岩浆、火焰与热力高光
- 高山流水蓝（Alpine Water）`#3B9EFF` — 流体水流与水解反应
- 霓虹酸绿（Neon Acid）`#B8FF2E` — 腐蚀性酸液像素与激活反应徽章

### 排版
- 品牌字标与场景标题：Space Grotesk（OFL），字重 600/700
- 材质标签与工具提示：Inter（OFL），字重 400/500/600
- 粒子计数器、FPS 与笔刷大小：JetBrains Mono（OFL），字重 500/600

### 布局与动效
- 间距：清爽的浅色顶部仪表栏，视口中央为全宽边框的深板岩模拟画布，符合人体工学的 16 种材质调色板 + 笔刷/场景控件，在 1440×900 和 390×844 下均能整洁适配。
- 圆角：14px 深色模拟边框，配以清晰的 1px 板岩色描边；全部 16 种元素均采用触感胶囊色块。
- 动效：首帧即已流动的持续 60fps 涌现式粒子物理。
- 动效：指针事件之间平滑插值的笔触绘制，使快速笔触也能画出无间隙的实心流线。
- 动效：即时温度热力图色带可视化开关，展示熔热热点与冰冷蓝色对比。
- 动效：在 prefers-reduced-motion 下，温和放慢模拟步进速率，同时保持 Single-Step 与完整绘制响应灵敏。
- 图像：100% 实时像素级清晰的 HTML5 Canvas ImageData 细胞自动机艺术，带有鲜艳的逐颗粒颜色微变化。

## 页面与区块
### [BRAND] · 落沙物理玩具 (`#/sandbox`)
1. **清爽浅色乐器式页头与深板岩模拟舱** — 浅瓷色页头展示 [BRAND]、[TAGLINE]、播放/暂停切换、单步（+1）按钮、热成像视图切换、起始场景切换器（`Volcano`、`Hourglass`、`Rain Garden`）、清除按钮，以及分享 URL 复制按钮。正下方是深板岩色（`#15171C`）交互式模拟画布，第一帧即已活跃，当前起始场景正在喷发、倾泻与冒蒸汽——另有一条紧凑的实时状态栏，显示当前材料反应提示、实时颗粒数与笔刷预览。
   布局：居中的 1280px 工作室布局，在桌面端将页头 + 大尺寸深色画布 + 完整 16 元素调色板整洁地容纳在首屏内；在 390×844 移动端为响应式堆叠画布 + 紧凑 4×4 材料网格。
   动效：60fps 类型化数组元胞自动机，带流畅的触摸与鼠标线条插值。
2. **16 元素色板坞与笔刷控制** — 清爽浅色底部面板，包含全部 16 个颜色编码的元素按钮（`Sand`、`Water`、`Fire`、`Smoke`、`Plant`、`Lava`、`Ice`、`Acid`、`Oil`、`Wood`、`Steam`、`Stone`、`Seed`、`Cloner`、`Wind`、`Eraser`），以及笔刷大小滑块（`1–12`）、笔刷形状胶囊按钮（`Circle`、`Square`、`Spray`）和简洁的化学反应图例。底部有细微的单行页脚，含可选的 [CREDIT]。
   布局：整洁的 8 列桌面 / 4 列移动色板网格，零水平溢出。
   动效：激活元素以粗墨色描边和色点高亮。

## 资产


## 不要做的事
- 绝不要以空白的黑屏开始——在首次绘制前同步加载并预运行生动活泼的起始场景。
- 绝不要提及或复制任何现有落沙游戏（falling-sand game）的名称或源代码。
- 绝不要在 UI 的任何位置显示日历日期或 4 位年份。
- 绝不要在 390×844 移动端上出现水平溢出，或用 clip-path 裁剪元素。
- 绝不要掉帧——使用类型化数组（Uint8Array / Int16Array）和直接写入 ImageData 像素。

---
— Prompt by VibeFather · https://vibefather.ai/t/falling-sand-physics-toy · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
