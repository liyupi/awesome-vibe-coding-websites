> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 新住宅开发网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为虚构的新建住宅社区 [COMMUNITY_NAME] 打造一个温暖、富有建筑感的专业房地产销售网站，该社区由 [DEVELOPER_NAME] 开发，位于 [DISTRICT_NAME]（48 套联排住宅，起价 [STARTING_PRICE]）。以一张黄金时刻街景照片（`public/images/hero-street.webp`）作为主视觉锚点，搭配清爽的石灰岩色（#EDE6DA）与深森林绿（#23403A）编辑式框架，并提供通往 48-Lot Site Plan 和 Walkable 3D Model Home 的快捷链接。构建一个交互式代码绘制的 SVG 48 地块总平面图，点击任意地块即可显示地块面积、朝向、住宅类型、状态（Available、Reserved、Sold）和价格——并支持按状态/朝向/类型筛选。展示三种联排住宅户型（The Ash、The Birch、The Cedar），配有可切换的楼层 2D 平面图以及可漫游的 Three.js 3D 模型住宅（Dollhouse 3D 环绕 + 第一人称房间漫游，支持可点击的房间停靠点和 WASD/方向键移动），买家可在其中切换实时升级项（Kitchen Finish、Flooring、Flex Space），这些升级会重新着色 3D 表面，并实时更新住宅总价和预估月供。包含黄金时刻图库（`showhome-living.webp`、`greenway-path.webp`、`courtyard-terrace.webp`）、Phase 1–4 施工进度时间线（不含任何日历日期）、代码绘制的社区通勤地图、交互式房贷估算器，以及基于 localStorage 的 Register-Interest 表单。

- 受众：潜在购房者、搬迁家庭和建筑住宅开发商。
- 目标：让买家能够毫不费力地从浏览黄金时刻社区摄影，过渡到挑选确切地块、漫游 3D 模型住宅、通过实时定价定制装修，并登记意向。
- 基调：温暖、沉稳、建筑工艺感——触感十足的石灰岩、橡木、赤陶，以及透明的定价。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 4
- 库：three（MIT）、@types/three（MIT）、lucide-react（ISC）、@fontsource/fraunces（OFL-1.1）、@fontsource/plus-jakarta-sans（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中导入 @fontsource/fraunces（500、600、700）、@fontsource/plus-jakarta-sans（400、500、600、700）和 @fontsource/jetbrains-mono（400、500、600）。
  - 将所有 4 张托管的 golden-hour 建筑 WebP 照片下载到 public/images/（切勿热链），并在 ASSETS.md 中记录它们。
  - 在 src/components/WalkableModelHome3D.tsx 中构建可步行的程序化 Three.js 3D 模型住宅，支持 Dollhouse 轨道视图和第一人称逐房间漫游（Living Room、Chef's Kitchen、Dining Terrace、Upper Flex Study），具有柔和温暖的建筑照明、升级变更时实时更新材质，以及 preserveDrawingBuffer: true。
  - 将所有 48 个生成的地块、3 种住宅类型、楼层平面几何、升级选项、施工阶段（Phase 1–4，零日期）和邻里通勤地点存储在 src/data/communityData.ts 中。

## 变量
- [COMMUNITY_NAME] — 社区名称（默认：“Alder Row”）。虚构的 48 套联排住宅开发项目名称
- [DEVELOPER_NAME] — 开发商名称（默认：“Hearthstone Homes”）。虚构的住宅建筑商名称
- [DISTRICT_NAME] — 区域 / 街区（默认：“Cedarbrook Valley”）。虚构的街区标签
- [STARTING_PRICE] — 起价标签（默认：“$685,000”）。联排住宅基础起价
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/new-home-development-website（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/new-home-development-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
