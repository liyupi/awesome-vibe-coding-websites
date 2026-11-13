> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 交互式公寓户型图导览

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND]、[UNIT] 构建一个原创、精致、可立即探索的单页公寓展示。一张标注尺寸的 2D 图纸平滑过渡为带家具的 Three.js 公寓。场景是主角，而不是冗长销售标题下方的插图。使用一个全新的、由代码构建的示例公寓；这是建筑概念研究，不是真实的房产广告。

- 受众：室内设计师、住宅团队，以及希望在请求看房前了解房间之间关系的访客。
- 目标：让访客查看平面图、飞入任意房间、播放导览、比较光照和两套材质调色板、下载平面图并保存本地看房请求。
- 语气：精确、平静且热情的美式英语。编辑式建筑语言、具体的房间细节和诚实的演示状态。为变更的变量重写每一句住宅相关语句；将所有文案、房间记录、材质和单元事实集中放在 src/content.ts 中。

## 技术栈（Stack）
- 框架（Framework）：Vite + TypeScript + Three.js
- 样式（Styling）：原生 CSS（Vanilla CSS）
- 库（Libraries）：three（MIT）、@fontsource/dm-sans（OFL-1.1）、@fontsource/cormorant-garamond（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置（Setup）：
  - 在项目中安装 Vite、TypeScript、three、@types/three 以及两个 Fontsource 包。从已安装的 three/addons 路径导入 OrbitControls。打包所有依赖；不使用远程脚本、字体或 import maps。
  - 配置 Vite base：./，build.outDir：dist，开启压缩并关闭 source maps。创建 npm run build（使用 vite build）以及一个本地开发脚本。
  - 将房间矩形、墙体分段、家具摆放、房间描述、材质色板（material swatches）和下载标签保存在 src/content.ts 中。平面图和 3D 几何体均从这些记录派生，以确保房间选择、尺寸和可下载平面图之间不会出现不一致。
  - 直接使用 Three.js、HTML 控件和内联 SVG 尺寸标注层。所有表面和家具均使用原创的程序化几何体构建；通过本地生成的 canvas 纹理或材质着色创建细微的木纹和石材变化。不使用图像生成、库存照片、外部加载的 3D 模型或远程纹理。
  - 使用单一渲染器，开启抗锯齿、暖色色彩管理、柔和阴影贴图、环境光和平行光，处理窗口尺寸变化，设备像素比上限为桌面端 1.75 / 移动端 1.5。页面隐藏时暂停渲染。目标为流畅的触摸交互，且生产环境 dist 总大小小于 20 MB。
  - 平面图和类透视等轴测视图均使用正交相机，同时改变位置、目标和缩放。保持稳定的地面轮廓，并为平面图到房间的过渡动画化相机以及墙体/家具高度。
  - 为 canvas 提供有用的无障碍描述，并提供等效的 HTML 房间选择按钮。如果 WebGL 不可用，则显示可读的内联 SVG 平面图，并保持事实信息、色板描述、下载和查看表单可用，且不抛出控制台错误。
  - 提供从同一几何体生成的本地可下载 SVG 平面图，下载文件名由 [BRAND] 和 [UNIT] 派生。包含 ASSETS.md，记录原创几何体、着色器和线条图标、字体、Three.js 及其许可证。

## 变量
- [BRAND] — 住宅名称（默认：“Alder House”）。虚构的项目标识；请更新字标、下载文件名和表单文案。
- [UNIT] — 单元名称（默认：“Apartment 4B”）。简短的单元或套房标签。
- [SETTING] — 位置故事（默认：“A quiet upper-floor home above the fictional Alder Lane gardens”）。虚构的场景，不是真实地址。
- [MATERIAL_STORY] — 室内材料（默认：“Warm oak, chalk plaster, olive wool, cream linen and honed limestone”）。请相应调整两个场景的配色、标签和描述，同时保留平面图。
- [PALETTE_NAMES] — 两个材料配色名称（默认：“Warm Oak | Soft Clay”）。必须正好是两个简短名称，用 | 分隔。第一个为默认。
- [CONTACT_NAME] — 看房接待人（默认：“Mara Ellis”）。用于看房对话框的虚构接待人姓名。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/interactive-apartment-floor-plan-tour（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值编写的。如果你的取值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/interactive-apartment-floor-plan-tour?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
