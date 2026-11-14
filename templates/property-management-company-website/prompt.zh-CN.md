> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 物业管理公司网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个单页网站，这是一家住宅物业管理公司，由管理经纪人 [FOUNDER] 领导，位于 [CITY]，在 [EXPERIENCE] 期间管理着 340 扇门。页面运行两条清晰的路径：业主（服务、透明的费用表、带有可见数学计算的租金收入估算器、带有数字的客户评价、租赁分析表单）和租户（可筛选的租赁网格、申请步骤，以及一个保存到本地列表并带有状态的维护请求流程）。暖砖色和墨海军蓝配沙色；管理房屋和租赁办公室的摄影。所有费用、列表和人物均为虚构的样本数据。

- 受众：两个受众，均为本地：业主——拥有一到十扇门的房东，权衡管理费与自己的周末；以及租户——寻找房屋的租户，想要列表、步骤和可用的维护表单，而无需创建账户。
- 目标：业主：到达租赁分析表单，费用结构和估算器已经回答了金钱问题。租户：到达申请，已选择列表，并相信维护会得到处理。
- 语气：直截了当的经纪人英语——温暖但注重数字。费用像成人对话一样解释；租户文案简单快捷。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、vite（MIT）、typescript（Apache-2.0）、tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/source-serif-4（OFL-1.1）、@fontsource/inter（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 创建一个 Vite 6 + React 18 + TypeScript 项目，base 为 './'，build.outDir 为 'dist'，build.sourcemap: false。无路由、无后端、无服务器代码。
  - 安装 Tailwind CSS 3.4 及 PostCSS 和 Autoprefixer。使用下方精确的调色板扩展主题，fontFamily.display 为 'Source Serif 4'，fontFamily.body 为 'Inter'。
  - 通过 @fontsource/source-serif-4 和 @fontsource/inter 自托管 Source Serif 4 字重 600 和 700 以及 Inter 字重 400、500、600、700，在 src/main.tsx 中导入。绝不从 CDN 加载字体。
  - 使用来自 'motion/react' 的 Motion（motion、useInView、useReducedMotion）实现显现和估算器补间动画；每个动画都以 useReducedMotion() 为条件。
  - 将所有文案和数据保存在 src/content.ts 中：品牌字符串、hero 文案、业主服务、费用行、估算器默认值、客户评价、八个租赁房源（标题、卧室、浴室、平方英尺、租金、类型、照片键、可用性标签）、申请步骤、维护类别和紧急程度、种子示例请求、带单元数量的城镇、分析表单文案。当变量值变化时，在那里重写依赖的文案，并从 [BRAND] 和 [PHONE] 派生存储键和 tel: 链接，以确保不残留默认品牌痕迹。
  - 收入估算器数学，精确为：输入 — 月租金滑块 $800–$5,000（默认 $2,100），每年空置周数 0–8（默认 3），管理费 6–12%（默认 8.5%），维护储备 3–10%（默认 5%）；计算 — 年毛收入 = 租金 × 12；空置成本 = 租金 ÷ 4.33 × 周数；实收 = 年毛收入 − 空置成本；管理费成本 = 实收 × 费率%；储备成本 = 实收 × 储备%；年净收入 = 实收 − 管理费成本 − 储备成本；月净收入 = 年净收入 ÷ 12，全部四舍五入到整数美元；输出面板显示大号月净收入加一行列表（'Gross $25,200'、'Vacancy (3 wks) −$1,455'、'Management 8.5% −$2,023'、'Reserve 5% −$1,187'）以及脚注 'Sample math on sample assumptions — not a guarantee of income.'。将输入持久化到 localStorage 的 [BRAND_SLUG]-estimator 下。
  - 费用表，精确为五行：'Leasing fee' — '75% of one month's rent' — 'paid only when a tenant signs'；'Management' — '8.5% of collected rent' — 'never charged on vacancy'；'Renewal' — '$250' — 'when the same tenant re-signs'；'Maintenance coordination' — 'included' — 'vendors at our volume rates, markup $0'；'Lease-out guarantee' — 're-lease free' — 'if a tenant we placed breaks the lease in the first six months'。
  - 租赁网格，精确为八个房源，字段包括（标题如 'Craftsman on Alder Ave'、卧室、浴室、平方英尺、租金、类型、可用性标签）：在虚构城镇中混合房屋和联排别墅，照片从生成集中分配（外观和室内按索引确定性地在房源间复用），筛选器 — 卧室标签（Any / 1 / 2 / 3+）、最高价格滑块 $1,200–$3,600、类型标签（House / Townhome）— 带有实时计数（'6 of 8 homes'）和激活时的 'Clear filters'；零结果状态显示清除标签。每张卡片：照片 4:3，租金以 Source Serif 700 砖色显示，卧室/浴室/平方英尺行，可用性标签（'Available now' 沙色底 / 'Mid-month' 钢色），海军蓝 'View & apply' 链接滚动到申请步骤并预选该房屋的标题。
  - 维护流程，精确为：表单 — 物业选择（八个房源）、类别标签（Plumbing / Electrical / Appliance / HVAC / General）、紧急程度标签（Routine — 'scheduled within a week' / Urgent — '48 hours' / Emergency — 'call [PHONE] now'，紧急选择显示呼叫行而非表单）、描述文本区域、可选照片备注；提交将请求添加到 'My requests'，状态为 'Submitted'，无时间戳，持久化到 localStorage 的 [BRAND_SLUG]-requests 下；列表附带两个种子示例请求（'Furnace filter'，状态 'Done'；'Kitchen faucet drip'，状态 'Scheduled'），因此 UI 永不为空，以 12px 标注 'sample'；每行显示状态步骤（Submitted → Scheduled → Done），当前步骤高亮；状态不会自动推进。
  - 在沙色上以行内 SVG 绘制服务区域地图：六个海军蓝城镇圆点按单元数量大小，带标签（'Ellsworth — 120 doors'、'Harlow Corners — 64'、'Dunmor — 58'、'Pierpont — 42'、'Kettle Falls — 34'、'Alder Flat — 22'），细砖色连接道路，[CITY] 处一个砖色星标。
  - 仅使用这些 lucide-react 图标：Phone、KeyRound、Wrench、FileText、ShieldCheck、CheckCircle2、Star、MapPin、ChevronRight、ArrowRight、Menu、X、Home、Users、ClipboardList、AlertTriangle、Droplets、Zap、Thermometer。
  - 将估算器输入、维护请求和分析表单持久化到 localStorage，以 [BRAND_SLUG] 为命名空间；验证恢复的 JSON 并从格式错误的数据中静默恢复。
  - 在构建前将六张生成的图片下载到 Assets 中列出的精确公共路径。在项目根目录创建 ASSETS.md，列出每个文件的路径、来源 URL、作者或生成器以及许可证。
  - 一个纯 <title> 为 [BRAND] 和一个 favicon（带砖色钥匙标记的海军蓝方块）就足够了；不需要 meta 描述、Open Graph 标签、JSON-LD 或站点地图。

## 变量
- [BRAND] — 公司名称（默认："Tandem House Property Co."）。虚构的公司名称；代码中会从中派生出一个关键标志图形。
- [CITY] — 城市（默认："Ellsworth"）。公司的所在地；地图星标和办公地址会使用它。
- [FOUNDER] — 管理经纪人（默认："Marcus Fielder"）。虚构的经纪人，在首屏和客户评价文案中提及。
- [PHONE] — 电话（默认："(555) 228-6614"）。办公室和紧急联系电话；以 tel: 链接形式呈现，仅使用数字。
- [EXPERIENCE] — 管理年限（默认："16 years"）。像 '16 years' 这样的普通短语；用于首屏和关于文案。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/property-management-company-website（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值撰写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/property-management-company-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
