> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 工业制造公司网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为您自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一个单页网站，[BRAND] 是一家精密机加工与制造车间，由 [FOUNDER] 创立于 [CITY]，拥有 [EXPERIENCE] 的合同加工经验。页面需展示具备真实公差与材料的能力、设备表、服务行业、以检测为导向的质量体系、带零件照片的案例研究、带模拟文件上传芯片和数量分级的 RFQ 表单、带可见规则的交付周期与价格区间估算器，以及招聘区块。机加工钢灰色为主调，配电光蓝和警示黄点缀；零件、机器和干净地面的清晰照片，不出现人脸。所有机器、零件、客户和价格均为虚构的示例数据。

- 受众：主要：设计工程师、采购买家和车间经理，他们寻找机加工或制造零件——这些人在打电话之前会先浏览公差、材料和产能。次要：制造商、成型商以及任何按图纸加工的 B2B 车间。
- 目标：将访客从“他们能保证我的公差吗”引导至提交 RFQ：用一屏数字证明能力，用估算器回答“何时”和“大概多少钱”的问题，然后让 RFQ 表单成为页面上最短的路径。
- 语气：车间口语英语：简短的陈述句，数字无处不在，零营销废话。读起来像一位资深估价师在工作间隙写下的。

## 技术栈（Stack）
- 框架（Framework）：Vite 6 + React 18 + TypeScript
- 样式（Styling）：Tailwind CSS 3.4
- 库（Libraries）：react (MIT)、react-dom (MIT)、vite (MIT)、typescript (Apache-2.0)、tailwindcss (MIT)、motion (MIT)、lucide-react (ISC)、@fontsource/archivo (OFL-1.1)、@fontsource/ibm-plex-mono (OFL-1.1)
- 构建（Build）：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置（Setup）：
  - 创建一个 Vite 6 + React 18 + TypeScript 项目，base 设为 './'，build.outDir 设为 'dist'，build.sourcemap: false。不使用路由、无后端、无服务端代码。
  - 安装 Tailwind CSS 3.4，并配置 PostCSS 和 Autoprefixer。用下方精确的调色板扩展主题，fontFamily.display 设为 'Archivo'，fontFamily.mono 设为 'IBM Plex Mono'；所有规格、公差、价格和表格数字均以 IBM Plex Mono 渲染。
  - 通过 @fontsource/archivo 和 @fontsource/ibm-plex-mono 自托管 Archivo 字重 500、600、700 和 IBM Plex Mono 字重 400、500，在 src/main.tsx 中导入。绝不从 CDN 加载字体。
  - 使用来自 'motion/react' 的 Motion（motion、useInView、useReducedMotion）实现显现动画和估算器补间动画；每个动画都以 useReducedMotion() 作为启用条件。
  - 将所有文案和数据保存在 src/content.ts 中：品牌字符串、首屏文案、能力卡片（工艺、公差、表面处理、材料）、设备行（机床、行程、主轴/公差、备注）、行业、质量项、案例研究、估算器配置（各工艺的基础天数、数量档位天数、表面处理附加天数、材料价格乘数和基础单价）、招聘、RFQ 选项。当变量值变化时，在该文件中重写依赖的文案，并从 [BRAND] 和 [PHONE] 派生存储键和 tel: 链接，确保不残留默认品牌痕迹。
  - 交期估算器计算，精确如下：工作日 = 工艺基础天数（CNC 铣削 3、CNC 车削 2、钣金加工 4、仅表面处理 1）+ 数量档位天数（1 件 → 0、10 → 2、50 → 5、250 → 9、1,000 → 14）+ 表面处理附加天数（机加工态 0、喷砂 2、钝化 3、阳极氧化 4）；规划单价区间 = 按数量的基础单价（1 → $185、10 → $52、50 → $31、250 → $19.50、1,000 → $14）× 材料乘数（ABS 0.8、Aluminum 6061 1.0、Stainless 304 1.35、Titanium Gr5 1.9），以 ±15% 区间显示并四舍五入到整美元；输出列出所用的每条规则（'CNC milling base 3 days'、'Qty 250 tier +9 days'、'Anodize +4 days'）以及免责声明 'Planning estimates — the RFQ returns a firm quote with drawings.'。将输入持久化到 localStorage 的 [BRAND_SLUG]-estimate 键下。
  - 仅在深色首屏和估算器区块上，用 CSS 背景绘制微妙的蓝图网格（24px 的 1px 细线网格，约 3% 不透明度）；危险黄色仅作为区块标题和 'MOST QUOTED' 标签上的 4px 斜条纹顶部线条出现，绝不用作大面积填充。
  - RFQ 文件上传为如实模拟：一个带 Upload 图标的虚线拖放芯片，点击后附加一个固定的示例芯片 'bracket-rev3.step · 2.4 MB'，并带一个 X 可移除，以及一行 12px 注释 'Demo attachment — nothing uploads.'。绝不使用会向任何地方发送数据或 FormData 的真实文件输入。
  - 仅使用以下 lucide-react 图标：Phone、Upload、FileText、Ruler、Layers、Cog、ScanLine、Wrench、Factory、ClipboardCheck、CheckCircle2、ShieldCheck、ChevronRight、ArrowRight、Menu、X、Clock、Users、MapPin、Gauge、Package。
  - 将估算器输入和 RFQ 提交持久化到 localStorage，以 [BRAND_SLUG] 为命名空间；验证恢复的 JSON，并从格式错误的数据中静默恢复。
  - 构建前将六张生成的图片下载到 Assets 中列出的精确 public 路径。在项目根目录创建 ASSETS.md，列出每个文件的路径、来源 URL、作者或生成器以及许可证。
  - 一个纯 <title> 为 [BRAND] 以及一个 favicon（带电子蓝十字准星标记的钢制方块）即可；不需要 meta 描述、Open Graph 标签、JSON-LD 或站点地图。

## 变量
- [BRAND] — 店铺名称（默认：“Halvorsen Precision”）。虚构的店铺名称；代码中会据此派生出一个准星标志。
- [CITY] — 城市（默认：“Halbrook”）。车间所在地；出现在首屏、页脚和招聘文案中。
- [FOUNDER] — 所有者（默认：“Ingrid Halvorsen”）。虚构的所有者，在首屏和质量文案中提及。
- [PHONE] — 电话（默认：“(555) 771-3460”）。报价台电话；以 tel: 链接形式呈现，仅使用数字。
- [EXPERIENCE] — 经验（默认：“26 years”）。像 '26 years' 这样的简单短语；用于首屏和统计数据。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/industrial-manufacturing-company-website（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/industrial-manufacturing-company-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
