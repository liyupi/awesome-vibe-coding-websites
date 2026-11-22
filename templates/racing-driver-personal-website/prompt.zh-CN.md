> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 赛车手个人网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为虚构的年轻赛车手 [DRIVER_NAME]（[CAR_NUMBER]，效力于 [SERIES_NAME] 的 [TEAM_NAME] 车队）打造一个达到获奖水准的互动个人品牌网站。首屏以完全用代码构建（无模型文件）的可拖拽雕塑感 Three.js 3D 赛车头盔作为视觉锚点，当访客滚动页面或点击涂装标签时，头盔会在三种截然不同的赛季涂装（第一赛季 Cobalt Velocity、第二赛季 Safety Flare、第三赛季 Midnight Carbon）之间平滑变形。其后依次是赛季仪表盘（交互式代码绘制的地球赛道日历，覆盖 8 条虚构赛道、分站成绩表与 SVG 积分图表）、'On Track' 区块中基于代码绘制赛道的滚动擦洗与滑块擦洗圈速回放，并配有实时 Speed、Gear、RPM 和 G-Force 读数、磁吸式幕后围场卡片、虚构合作伙伴展示条、带可用本地购物车抽屉的 Replica Helmet & Merch 商店，以及基于 localStorage 的 Fan Club 数字通行证生成器。配色使用 Graphite（#121417）、Electric Cobalt（#2F6BFF）、Safety Orange（#FF6A1A）和 Chalk（#F2F2EF），搭配窄体运动风展示字体——零霓虹黄、零真实赛车品牌、零 4 位年份。

- 受众：赛车运动车迷、潜在赞助商以及互动设计爱好者。
- 目标：在首屏即刻呈现 3D 触感存在感，随后以动感十足的赛事遥测数据和丰富的互动区块，在桌面端和 390px 移动端上都带来毫不费力的体验。
- 基调：动感、精密工程感、自信的赛车运动编辑风格。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 4
- 库：three（MIT）、@types/three（MIT）、lucide-react（ISC）、@fontsource/barlow-condensed（OFL-1.1）、@fontsource/inter（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中导入 @fontsource/barlow-condensed（600、700、800）、@fontsource/inter（400、500、600）和 @fontsource/jetbrains-mono（500、600、700）。
  - 在 src/components/HelmetHero3D.tsx 中构建可拖拽的程序化 Three.js 3D 全脸赛车头盔，带动态 CanvasTexture 涂装贴花（[CAR_NUMBER] + 赛车条纹）、雕塑式下巴扰流板、着色反光环绕式面罩、影棚轮廓光、跨 3 个赛季的平滑颜色/涂装变形，以及 preserveDrawingBuffer: true。
  - 将所有虚构车手资料数据、8 条赛道、比赛结果、积分、单圈遥测路径、BTS 故事、虚构合作伙伴和商店 SKU 存储在 src/data/driverData.ts 中（零真实车队、赞助商或赛历日期）。
  - 实现交互式代码绘制地球赛道日历、带实时遥测的滚动擦洗式赛道单圈回放、本地演示商店购物车抽屉，以及 localStorage 粉丝俱乐部通行证卡。

## 变量
- [DRIVER_NAME] — 车手姓名（默认：“Kaelen Vance”）。虚构赛车手全名
- [CAR_NUMBER] — 赛车号码（默认：“#47”）。印在头盔和周边商品上的车手参赛号码
- [TEAM_NAME] — 虚构车队名称（默认：“Voltara Motorsport”）。虚构赛车队名称
- [SERIES_NAME] — 虚构系列赛名称（默认：“Apex World Touring”）。虚构锦标赛名称
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/racing-driver-personal-website（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/racing-driver-personal-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
