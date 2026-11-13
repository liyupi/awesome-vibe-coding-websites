> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 公寓租赁网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一个精致的单页租赁网站，[BRAND] 是位于 [LOCATION] 的 [PROPERTY_TYPE]。将大气的建筑摄影与包含四种户型和八套房源的交互式房源清单、配套设施与社区故事，以及客户端看房请求相结合。房源起租价为 [STARTING_RENT]，看房时间为 [TOUR_HOURS]，租赁联系方式为 [LEASING_EMAIL]。

- 受众：正在比较户型、月租金和入住时间的潜在租客，其次是小型物业团队，他们需要一个清晰、可灵活调整的租赁展示页面。
- 目标：帮助访客将房源筛选到合适的住所，了解物业的日常生活，并将选中的房源带入完整的看房请求流程，无需后端。
- 语气：温暖、自信、精确，具有住宅感而非企业感。使用具体细节和沉稳的行动号召；避免施压策略、夸张措辞和含糊的奢华宣称。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：motion（MIT）、lucide-react（ISC）、@fontsource/dm-serif-display（OFL）、@fontsource-variable/inter（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 将 vite.config.ts 设置为使用 React，base: './'，build.outDir: 'dist'，以及 build.sourcemap: false。
  - 配置 tailwind.config.ts，content 指向 index.html 和 src/**/*.{ts,tsx}；将列出的颜色和字体系列定义为主题令牌。
  - 在 src/main.tsx 中导入自托管字体包，在 src/index.css 中导入全局 Tailwind 指令。
  - 将每个标题、段落、标签、库存记录、设施、社区项目、联系方式、链接和图片路径放入 src/content.ts，按区块作为键。
  - 构建小型区块组件，并将筛选、选中单元、手风琴、移动菜单和参观表单状态保留在 React 中；仅对指定的显现和过渡使用 Motion for React。
  - 将单元可用性存储为相对于访客当前本地日期的非负天数偏移量，以美式英语格式化日期，并从该本地日期推导入住筛选和参观日历。

## 变量
- [BRAND] — 物业名称（默认：“Alder & Row”）。使用一个虚构的住宅物业名称。
- [PROPERTY_TYPE] — 建筑描述（默认：“modern brick courtyard residences”）。用于主视觉和介绍中的简短小写描述。
- [LOCATION] — 街区和城市（默认：“Elm Park, Chicago”）。使用一个合理的位置，并相应调整周边区域的文案。
- [STARTING_RENT] — 广告起始租金（默认：“$1,875”）。包含货币符号的月租金；保持房源库存与之相符。
- [TOUR_HOURS] — 看房可用时间（默认：“Daily, 9 AM–6 PM”）。简洁易读的时间安排。
- [LEASING_EMAIL] — 租赁邮箱（默认：“hello@alderandrow.example”）。为虚构物业使用一个虚构地址。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接指向 https://vibefather.ai/t/apartment-leasing-website（默认：是；删除此行以移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/apartment-leasing-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
