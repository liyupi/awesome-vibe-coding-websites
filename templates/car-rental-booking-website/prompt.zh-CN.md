> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 汽车租赁预订网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个精致的多视图汽车租赁预订网站，服务 [CITY] 周边的 [AUDIENCE]。体验从搜索优先的首页开始，经过可筛选的车队结果、可配置的车辆详情，再到三步模拟结账，最终到达本地确认页。以 [BRAND_PROMISE] 作为核心客户承诺，并确保每个价格在最终演示操作前都清晰可见。

- 受众：主要访客是 [AUDIENCE]，他们希望快速比较实用的租赁选项、了解包含内容，并在预订前知晓完整价格。模板所有者是租赁运营商、旅行初创公司或小型出行企业，需要一个无需后端基础设施的真实感预订界面。
- 目标：帮助访客找到合适的通用车辆，调整日期、保障和附加项并即时获得价格反馈，然后完成一个可信但明确为模拟的预订。将所有车队、政策、地点、费率和营销内容保持在一个内容文件中，便于替换。
- 语调：冷静、精确、懂旅行，而非激进或痴迷奢华。使用简洁标签、具体包含项、通俗语言的政策和温暖的编辑式文案。界面应感觉可靠且有触感，没有压力计时器、虚构稀缺或隐藏费用。

## 技术栈
- 框架：Vite 6 + React 19 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：motion 12（MIT）、lucide-react（ISC）、@fontsource-variable/bricolage-grotesque（OFL）、@fontsource-variable/inter（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在仓库根目录搭建一个 Vite React TypeScript 项目。将 vite.config.ts 的 base 设为 './'，build.outDir 设为 'dist'，build.sourcemap 设为 false，build.emptyOutDir 设为 true；npm run build 必须只在 dist/ 中生成生产站点。
  - 在 tailwind.config.ts 中配置 Tailwind，使用下方精确的颜色令牌和字体系列。将全局样式、焦点状态、原生日期控件样式、打印规则和减少动态效果覆盖放入 src/index.css。
  - 在 src/main.tsx 中从两个 Fontsource 可变字体包导入 Bricolage Grotesque 和 Inter。不要使用任何远程字体样式表。
  - 用 MotionConfig 包裹应用，设置 reducedMotion='user'。对指定的路由、筛选、抽屉和结账过渡使用 Motion 和 AnimatePresence；不要添加其他动画或路由库。
  - 使用 window.location.hash 和 hashchange 事件为 index.html、#/results、#/vehicle、#/checkout 和 #/confirmation 实现一个小型哈希路由器。对于空或未知哈希，渲染 index.html 内容，并使用 ./index.html 作为首页链接。
  - 将所有字符串、变量值、地点、车辆、费率、附加项、保护计划、评论、政策和 FAQ 保留在 src/content.ts 中。当值变化时，连贯地重写依赖变量的文案；绝不要将默认品牌内容分散到各个组件中。
  - 在一个使用 useReducer 的 React context 中管理搜索、筛选、所选车辆、附加项、保护和结账步骤。仅将非敏感预订状态持久化到 sessionStorage，使用通用键 'rental-booking-v1'；将卡号、有效期和安全码值仅保留在组件内存中。
  - 使用原生日期输入和共享的基于 UTC 的租赁天数计算。默认取车时间为访客本地今天之后三天，还车时间为今天之后六天，拒绝取车日期当天或之前的还车日期，并计算 rentalDays 为 max(1, round((returnUTC - pickupUTC) / 86400000))。
  - 创建一个简单的原创 SVG favicon 和路由标记，由圆角正方形中的两条弯曲道路线组成。仅对界面控件使用 Lucide 图标，图标按钮需有可访问标签。

## 变量
- [BRAND] — 租赁品牌（默认：“Morroway”）。一个虚构的短租赁公司名称；在字标、标题、文案和确认信息中使用它。
- [CITY] — 主要服务区域（默认：“Portland, Oregon”）。用于搜索默认值、主视觉文案和位置指引的主要取车区域。
- [AUDIENCE] — 主要旅客（默认：“weekend travelers and small families”）。一个小写短语，描述车队和文案应服务的人群。
- [BRAND_PROMISE] — 客户承诺（默认：“Clear prices. Easy roads.”）。一个简短的原创承诺，用作主视觉眉题和结尾陈述。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/car-rental-booking-website（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/car-rental-booking-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
