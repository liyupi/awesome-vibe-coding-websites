> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 企业公司网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND]（股票代码：[TICKER]，总部位于 [HQ_CITY]，由 CEO [CEO_NAME] 领导）构建一个多页面哈希路由的企业网站，这是一家虚构的多元化工业集团，业务涵盖先进材料（Advanced Materials）、电气化铁路系统（Electric Rail Systems）和电网储能（Grid Energy Storage）。在概览（Overview）、投资者关系（Investor Relations）、可持续发展（Sustainability）、新闻中心（Newsroom）、领导力与职业（Leadership & Careers）以及询盘路由联系（Inquiry-Routed Contact）视图中，将统一的暮色工业摄影与深海军蓝、信号青、暖白和铜色点缀相结合。

- 受众：机构投资者、市政铁路和公用事业采购负责人、可持续发展分析师、潜在工程人才以及行业媒体。
- 目标：从第一帧起就展现建筑级的可信度与运营透明度——以全出血的黄昏铁路主视觉和简洁陈述开场，随后提供可验证的交互式图表、区域办公室、进度环和路由式联系流程。
- 基调：克制、权威、以工程为主导的企业文风——具体的吨位、兆瓦时容量和部门指标，并在每个财务数字旁附上明确的示意性样本数据说明。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 4
- 库：lucide-react（ISC）、@fontsource/space-grotesk（OFL-1.1）、@fontsource/inter（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中导入 @fontsource/space-grotesk（500、600、700）、@fontsource/inter（400、500、600）和 @fontsource/jetbrains-mono（400、500）。
  - 将所有 6 张生成的黄昏建筑 WebP 图片下载到 public/images/，并通过相对路径 ./images/<name>.webp 引用它们。
  - 将所有部门、区域办事处、财务样本系列、可持续发展目标、新闻编辑室文章、领导层简介和开放职位保留在 src/data/corporateData.ts 中，以 [BRAND]、[TICKER]、[HQ_CITY] 和 [CEO_NAME] 为键。
  - 在每个股价图表、季度表格和财务 KPI 上渲染明确的“Illustrative sample data”徽章。

## 变量
- [BRAND] — 工业集团名称（默认：“Valken Industrial Group”）。虚构的多元化工业企业名称
- [TICKER] — 示例股票代码（默认：“VLKN”）。4 个字母的虚构交易所代码
- [HQ_CITY] — 总部城市（默认：“Zurich”）。主要公司总部所在城市
- [CEO_NAME] — 首席执行官姓名（默认：“Henrik Lindholm”）。虚构的集团 CEO 姓名
- [CREDIT] — 在页脚保留一个小的“Template by VibeFather”链接，指向 https://vibefather.ai/t/corporate-company-website（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/corporate-company-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
