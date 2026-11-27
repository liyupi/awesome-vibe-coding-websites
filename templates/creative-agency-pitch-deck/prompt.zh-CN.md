> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 创意机构提案演示文稿

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简报
一份高水准的 12 页编辑式资质与品牌策略提案演示文稿，由独立设计工作室 [BRAND] 为 [LOCATION] 的酒店业客户 [CLIENT_NAME] 制作。特点包括非对称杂志式版式、风格统一的影棚摄影情绪板、3 页带交互式前后对比艺术指导切换的案例研究、4 阶段流程时间线、团队名册卡片，以及透明的投资档位。

- 受众：酒店业创始人、品牌副总裁、酒店业主集团，以及正在评估品牌重塑合作伙伴的创意总监。
- 目标：通过展现编辑式品味、策略严谨性和清晰的商业范围，赢得完整的品牌识别、艺术指导和数字旗舰项目合作。
- 语调：有文化底蕴、自信、建筑感、触感强且具体；避免代理机构陈词滥调。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：lucide-react（ISC）、@fontsource/instrument-serif（OFL）、@fontsource/dm-sans（OFL）、@fontsource/ibm-plex-mono（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中本地导入 @fontsource/instrument-serif（400、400 italic）、@fontsource/dm-sans（400、500、600、700）和 @fontsource/ibm-plex-mono（400、500）。
  - 将 Assets 中列出的全部 6 张风格统一的 studio WebP 图片下载到 public/images/，并通过相对路径（./images/...）引用它们。
  - 将所有幻灯片文案、案例研究、前后对比说明、团队名册、投资层级和演讲者备注集中到 src/data/pitchDeck.ts 中。
  - 在 src/index.css 中配置 @media print，使用 @page { size: landscape; margin: 0; }，隐藏界面元素，并将全部 12 张幻灯片每页一张干净地渲染。

## 变量
- [BRAND] — 设计工作室名称（默认："Atelier Verve"）。虚构的独立创意机构
- [CLIENT_NAME] — 酒店业客户名称（默认："Maison Solis Hotels"）。正在提案的虚构酒店集团
- [LOCATION] — 客户所在地区或城市（默认："Lisbon & Algarve"）。酒店物业所在区域
- [INVESTMENT_ANCHOR] — 核心合作费用（默认："$88,000"）。投资幻灯片上展示的旗舰档费用
- [CONTACT_EMAIL] — 工作室联系邮箱（默认："partners@atelierverve.example"）。结尾幻灯片上的虚构邮箱
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/creative-agency-pitch-deck（默认：是；删除此行即可移除）

页面与区块（Pages & Sections）下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/creative-agency-pitch-deck?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
