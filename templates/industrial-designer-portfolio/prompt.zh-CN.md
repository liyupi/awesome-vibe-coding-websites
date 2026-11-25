> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 工业设计师作品集

请完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个虚构的家居物品工业设计师的作品集：水壶、台灯、音箱和椅子。项目页面讲述完整流程，包含研究笔记、草图、泡沫模型、带色板的 CMF（色彩、材料、表面处理）板以及最终产品渲染图；其中两件物品内置了用代码构建的 3D 转盘查看器，并带有材质切换功能；奖项与媒体报道以时间线呈现；简历一键下载。渲染图以统一的简洁工作室风格生成，不带任何标志。混凝土色 #E7E5E0、石墨色 #2B2D31 以及单一的安全橙 #FF6B1A；精准的技术感排版。

- 受众：家居用品品牌的设计总监、正在筹备首款产品的初创公司，以及寻找自由职业工业设计师的工作室。
- 目标：展示这位设计师能够将一件物品从研究推进到生产，进而促成简历下载或咨询发送。
- 语气：精准而冷静，像一份写得好的规格说明：尺寸、材料和理由，没有设计陈词滥调。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：three（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource-variable/big-shoulders（OFL-1.1）、@fontsource-variable/spline-sans（OFL-1.1）、@fontsource/spline-sans-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置：
  - vite.config.ts：base 设为 './'，build.sourcemap 设为 false，src/ 中的任何内容都不会被复制到 dist/。
  - tailwind.config.js：扩展颜色 concrete #E7E5E0、white #F7F6F3、graphite #2B2D31、graphiteSoft #3A3D43、muted #55585F、orange #FF6B1A；fontFamily 中 display 为 'Big Shoulders Variable'，sans 为 'Spline Sans Variable'，mono 为 'Spline Sans Mono'。
  - three.js 模型由 src/three/models.ts 中的基础几何体构建（水壶使用 LatheGeometry 壶身、TubeGeometry 壶嘴、TorusGeometry 壶柄；台灯使用 Cylinders 和 ConeGeometry 灯罩），搭配 MeshStandardMaterial 和三盏灯光；不加载任何模型文件。
  - src/components/Turntable.tsx 在一个 canvas 中持有单个 WebGLRenderer，按需渲染并在旋转时渲染，将 devicePixelRatio 上限设为 2，并在卸载时释放所有资源。
  - 一个小型 hash 路由器读取 location.hash：#/（首页）、#/work、#/work/<slug>；路由变化时滚动到顶部。不使用路由库。
  - 所有文案、产品、流程步骤、色板、奖项、媒体报道和 CV 文本都以类型化对象的形式存放在 src/content.ts 中；组件从不硬编码文案。

## 变量
- [BRAND] — 设计师姓名（默认：“Elin Vasquez”）
- [CITY] — 工作室所在城市（默认：“Copenhagen”）
- [FEATURED_PRODUCT] — 精选物件（默认：“Quill kettle”）
- [CREDIT] — 在页脚保留一个小号“Template by VibeFather”链接，指向 https://vibefather.ai/t/industrial-designer-portfolio（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/industrial-designer-portfolio?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
