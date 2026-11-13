> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 社区银行网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个单页网站，[BRAND] 是一家服务 [CITY] 的社区银行，已有 [EXPERIENCE] 的历史，由行长 [FOUNDER] 领导。页面围绕两个实用工具展示个人、商业和贷款服务：一个带有代码绘制摊销图表的贷款计算器，以及一个带有混合利率和到期时间表的 CD 阶梯构建器。一个示例利率表、一个风格化的分行与 ATM 地图（含营业时间）、一份转户清单和一个安全中心构成完整页面。利率为示例数据，并附有截至日期说明；网站从不提及真实机构，从不声称存款保险，也从不提供财务建议。所有分行、ATM 和数字均为虚构。

- 受众：主要：围绕 [CITY] 的家庭和小企业，正在本地机构和大型银行应用之间做选择——他们希望看到更好的利率、能走进的分行，以及没有暗黑模式的账户开立流程。次要：正在采用这些工具的信用合作社和本地贷款机构。
- 目标：将访客从“本地银行真的有竞争力吗”推进到开始对话：先展示数字（利率和工具，计算过程可见），证明分行确实存在，让转户感觉像五项清单事项，然后提供简短的联系表单。
- 语气：平实、不慌不忙的银行家英语——像一位优秀的支行经理隔着桌子解释数字那样解释数据。信息性强，绝不构成建议；自信，绝不推销。

## 技术栈（Stack）
- 框架（Framework）：Vite 6 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react（MIT）、react-dom（MIT）、vite（MIT）、typescript（Apache-2.0）、tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/lora（OFL-1.1）、@fontsource/public-sans（OFL-1.1）
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化（Setup）：
  - 创建一个 Vite 6 + React 18 + TypeScript 项目，base 设为 './'，build.outDir 设为 'dist'，build.sourcemap: false。不使用路由、无后端、无服务端代码。
  - 安装 Tailwind CSS 3.4，并配置 PostCSS 和 Autoprefixer。用下方精确的调色板扩展主题，fontFamily.display 设为 'Lora'，fontFamily.body 设为 'Public Sans'。
  - 通过 @fontsource/lora 和 @fontsource/public-sans 自托管 Lora 字重 600 和 700，以及 Public Sans 字重 400、500、600、700，在 src/main.tsx 中导入。绝不从 CDN 加载字体。
  - 使用来自 'motion/react' 的 Motion（motion、useInView、useReducedMotion）实现入场动画和数字补间；每个动画都要以 useReducedMotion() 为条件进行控制。
  - 将所有文案和数据放在 src/content.ts 中：品牌字符串、首屏文案、服务项目、利率表行（product、term、APY、note）、计算器默认值、CD 阶梯利率、带营业时间的网点和 ATM、清单步骤、安全提示、统计数据、表单选项。当变量值变化时，在该文件中重写依赖的文案，并从 [BRAND] 和 [PHONE] 派生存储键和 tel: 链接，确保不残留默认品牌痕迹。
  - 贷款计算器数学公式，精确如下：monthly = P × r(1+r)^n ÷ ((1+r)^n − 1)，其中 r = rate ÷ 1200，n = 期限月数；控件：金额滑块 $5,000–$600,000（默认 $320,000，按房贷风格），利率滑块 3.0%–9.0%，步长 0.05（默认 6.40%），期限选项 120 / 180 / 240 / 360 个月（默认 360）；输出：月供、总利息、总还款额，均四舍五入到整数美元；图表为手写 SVG，包含随时间变化的两条序列——剩余余额线和累计利息面积——在 24 个等距点上重新计算，以 250ms 过渡重绘；脚注 'Sample math, not an offer.'
  - CD 阶梯构建器数学公式，精确如下：存款输入 $5,000–$500,000，步长 $1,000（默认 $25,000），平均分配到四个阶梯——12 个月 4.00% APY、24 个月 3.85%、36 个月 3.70%、60 个月 3.55%；每个阶梯的到期价值 = 份额 × (1 + APY ÷ 12) ^ 月数；混合 APY = 各阶梯 APY 按份额加权的平均值（等份额 → 简单平均）；输出：混合 APY、每个阶梯的行（期限、APY、份额、到期价值）、四个阶梯全部走完期限后的总价值，以及一条计划说明 'a rung matures every 12 months — roll each into a new 60-month CD to keep the ladder walking'；将输入持久化到 localStorage，键为 [BRAND_SLUG]-ladder。
  - 将网点地图绘制为纸质面板上的风格化内联 SVG：简化的街道网格、一条河流曲线、三个黄铜网点标记（常青绿图钉配黄铜芯），标注网点名称，六个金色 ATM 圆点；筛选标签（All / Branches / ATMs only）切换标记可见性；每个网点的营业时间放在地图旁的列表中；示例说明 'Hours shown for this demo — holiday hours post in-branch.' 不使用真实地图瓦片，不使用真实地理数据。
  - 转户清单是可交互的：五个条目（'Open your [BRAND] account online or in-branch — 15 minutes'、'Move your direct deposit (we give your payroll department the form)'、'Point your bill-pay and auto-pays at the new account'、'Let checks and card charges clear for two weeks'、'Close the old account and ask for a written confirmation'），复选框持久化到 localStorage，键为 [BRAND_SLUG]-switch，并带一个 '3 of 5' 进度标签。
  - 仅使用以下 lucide-react 图标：Phone、Landmark、PiggyBank、Briefcase、Home、Car、ShieldCheck、Lock、AlertTriangle、CheckCircle2、MapPin、Clock、ChevronRight、ArrowRight、Menu、X、Calculator、TrendingUp、Users、FileCheck。
  - 将阶梯输入、清单状态和联系表单持久化到 localStorage，以 [BRAND_SLUG] 为命名空间；验证恢复的 JSON，并从格式错误的数据中静默恢复。
  - 构建前将五张生成的图片下载到 Assets 中列出的精确公共路径。在项目根目录创建 ASSETS.md，列出每个文件的路径、来源 URL、作者或生成器，以及许可证。
  - 一个纯 <title> 为 [BRAND] 的标题和一个 favicon（常青绿方块配黄铜硬币标记）就足够了；不需要 meta 描述、Open Graph 标签、JSON-LD 或站点地图。

## 变量
- [BRAND] — 银行名称（默认：“Almstead Community Bank”）。虚构的银行名称；代码中会据此生成一个黄铜硬币风格的标志图形。
- [CITY] — 城镇（默认：“Calverton”）。银行所在的家乡；出现在首屏、分行、地图标签和页脚中。
- [FOUNDER] — 行长（默认：“Ellen Marchetti”）。虚构的银行行长，在首屏和关于文案中提及。
- [PHONE] — 电话（默认：“(555) 664-1000”）。分行电话；以 tel: 链接形式呈现，仅使用数字。
- [EXPERIENCE] — 服务年限（默认：“93 years”）。类似 '93 years' 的普通短语；用于首屏和统计数据文案。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/community-bank-website（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/community-bank-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
