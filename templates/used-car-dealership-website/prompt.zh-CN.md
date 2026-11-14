> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 二手车经销商网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 构建一个单页应用，这是一家由 [FOUNDER] 在 [CITY] 经营的独立二手车经销商，从业经验 [EXPERIENCE]。该网站是一个可用的店面：包含 24 辆虚构品牌车辆的库存，支持实时筛选和排序；每辆车有详情视图，含图库、规格和付款计算器；最多可对比三辆车；支持收藏车辆；提供置换估价器和融资说明。石墨色与白色为主，信号黄是唯一醒目的颜色；使用通用、无品牌标识车辆的明亮展厅摄影。所有车辆、价格、估值和条款均为虚构的示例数据。

- 受众：主要：[CITY] 周边在夜间用手机比较车源的二手车买家——他们想先看到月供数字、里程和退货政策，而不想先和任何人交谈。次要：重新指向库存字段的房车、船只、自行车和设备经销商。
- 目标：推动访客从浏览转向收藏车辆并提交置换或试驾请求：让库存真正可筛选，让钱的问题能在计算器中得到回答，并让购买风险显得很小（检测次数、退货窗口、保修月数）。
- 语气：平静、具体、零压力——规格表式的英语，使用表格数字。绝不使用倒计时，绝不使用全大写紧迫感，绝不使用“今日特惠”。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react (MIT)、react-dom (MIT)、vite (MIT)、typescript (Apache-2.0)、tailwindcss (MIT)、motion (MIT)、lucide-react (ISC)、@fontsource/space-grotesk (OFL-1.1)、@fontsource/inter (OFL-1.1)
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 创建一个 Vite 6 + React 18 + TypeScript 项目，base 为 './'，build.outDir 为 'dist'，build.sourcemap: false。无后端、无服务器代码。
  - 安装 Tailwind CSS 3.4 及 PostCSS 和 Autoprefixer。使用下方精确的调色板扩展主题，fontFamily.display 为 'Space Grotesk'，fontFamily.body 为 'Inter'；对每个价格、里程和规格数字使用 Inter 的 tabular-nums（font-variant-numeric）。
  - 通过 @fontsource/space-grotesk 和 @fontsource/inter 自托管 Space Grotesk 字重 500 和 700 以及 Inter 字重 400、500、600、700，在 src/main.tsx 中导入。绝不从 CDN 加载字体。
  - 在 src/router.ts 中手写一个微型哈希路由器：useHashRoute() 返回当前路径（''、'car'、'compare'、'saved'、'trade-in'），navigate() 设置 location.hash。路由：''（首页 + 库存）、'#/car/<id>'（车辆详情；未知或缺失的 id 回退到车辆 #1，绝不出现空状态）、'#/compare'、'#/saved'、'#/trade-in'。路由变化时滚动到顶部。
  - 使用来自 'motion/react' 的 Motion（motion、AnimatePresence、useReducedMotion）实现视图过渡、卡片显现和对比托盘；每个动画都以 useReducedMotion() 为条件。
  - 将所有文案和数据保存在 src/content.ts 中：品牌字符串、主视觉文案、价值主张、完整的 24 辆车库存（字段：id、year、make、model、trim、body、fuel、transmission、miles、price、oneLineNote、inspectionScore）、车身类型照片映射、计算器默认值、置换配置、融资步骤、购车流程步骤、FAQ。当变量值变化时，在该文件中重写依赖的文案，并从 [BRAND] 和 [PHONE] 派生存储键和 tel: 链接，确保不残留默认品牌痕迹。
  - 库存，恰好 24 辆车，包含以下字段（价格为美元，所有品牌均为虚构）：2021 Avera Lumen SL sedan gas auto 38,400mi $18,900 'One owner, dealer-serviced since new'；2022 Avera Lumen SE sedan gas auto 24,900mi $16,400 'Still on original tires'；2020 Avera Vale GT hatchback gas manual 51,200mi $12,800 'Last of the manual hatches'；2019 Avera Terran LX SUV gas auto 67,500mi $15,700 'Third-row delete, cleaner cabin'；2022 Avera Terran Hybrid SUV hybrid auto 29,300mi $23,900 'Hybrid battery report in the glovebox'；2020 Bexley Ardor sedan gas auto 44,800mi $27,600 'Loaded trim, head-up display'；2023 Bexley Ardor EV sedan electric auto 12,600mi $41,900 'Battery health 96%, home charger included'；2019 Bexley Wren coupe gas auto 58,900mi $21,400 'Two-door, glass roof, adult owned'；2021 Bexley Meridian SUV gas auto 39,700mi $31,800 'Tow package, never towed'；2018 Bexley Holt wagon diesel auto 72,100mi $17,900 'Diesel torque, highway miles'；2021 Corvin Harlan Crew pickup diesel auto 61,300mi $28,400 'Work truck, bed liner, no rust'；2022 Corvin Harlan Shortbed pickup gas auto 33,000mi $25,100 'Half the miles of its twin on the lot'；2020 Corvin Cadence minivan gas auto 64,700mi $13,900 'Soccer-team spec, doors all work'；2023 Corvin Cadence EV minivan electric auto 9,800mi $34,600 'Nearly new, remaining factory warranty'；2021 Dunmore Fable coupe gas manual 36,200mi $19,700 'Manual, limited color'；2022 Dunmore Fable Turbo coupe gas auto 19,400mi $24,300 'Turbo under certified pre-owned'；2020 Dunmore Rill hatchback hybrid auto 47,500mi $15,900 'Hybrid commuter, 41 mpg lifetime'；2023 Dunmore Rill EV hatchback electric auto 11,200mi $29,800 'EV hatch, still on its first brake pads'；2019 Elna Piccolo hatchback gas manual 73,800mi $9,400 'The cheap one that runs forever'；2021 Elna Piccolo Plus hatchback gas auto 42,100mi $11,600 'City car, parking sensors added'；2020 Elna Sonder sedan gas auto 55,600mi $10,900 'Basic, honest, cold-air kings'；2022 Elna Sonder Hybrid sedan hybrid auto 26,800mi $16,900 'Hybrid sedan, commuter math done'；2020 Fennec Otter SUV gas auto 59,400mi $14,800 'Small SUV, big sunroof'；2021 Fennec Otter Adventure SUV hybrid auto 35,600mi $19,900 'Roof rack, hitch, hybrid'。品牌：Avera、Bexley、Corvin、Dunmore、Elna、Fennec。
  - 在 content.ts 中按车身类型映射照片：sedan 和 coupe → car-sedan.webp；SUV → car-suv.webp；hatchback 和 wagon → car-hatch.webp；pickup 和 minivan → car-pickup.webp；每个详情画廊还额外将 car-interior.webp 和 showroom-hero.webp 作为其第二和第三张幻灯片展示。卡片使用车身类型照片，比例为 4:3。
  - 付款计算器，精确为：monthly = P × r(1+r)^n ÷ ((1+r)^n − 1)，其中 P = price − down payment，r = APR ÷ 1200，n = term months；控件为价格（从车辆预填，可编辑）、首付滑块 $0–$15,000 步长 $500（默认为价格的 10%）、期限选项 36 / 48 / 60 / 72（默认 60）、APR 滑块 3.9%–14.9% 步长 0.1（默认 7.9%）；输出以 Space Grotesk 700 signal yellow 显示月供、融资金额、总利息和总付款额，每项四舍五入到整美元；脚注 'Estimate only — not an offer of credit.'
  - 置换估价器，精确为：输入年份（2005–2023）、品牌（六个虚构品牌）、型号（文本）、里程滑块 5,000–180,000、车况选项 Excellent / Good / Fair；base = 32,000 − (当前年份常量 2026 − year) × 1,150 − miles × 0.09，下限为 2,000，× 乘数 Excellent 1.1 / Good 1.0 / Fair 0.82，四舍五入到最接近的 $250，以 ±8% 的范围显示，并附上使用的行项目（'age adjustment'、'mileage adjustment'、'condition multiplier'）；脚注 'Sample figures to set expectations — the walkaround sets the real number.' 将提交内容持久化到 localStorage 的 [BRAND_SLUG]-trade-in 下。
  - 收藏车辆：每张卡片和详情页上的 Heart 切换按钮将车辆 id 数组持久化到 localStorage 的 [BRAND_SLUG]-saved-cars 下；'#/saved' 用相同的卡片列出它们，并有一个空状态（'Nothing saved yet — tap the heart on a car.'）链接回库存。
  - 对比：卡片上的 'Compare' 切换按钮添加到对比数组，上限为 3；一个固定的底部托盘（graphite，当选中 ≥1 时出现）显示带移除按钮的缩略图和一个路由到 '#/compare' 的 'Compare 3' 按钮；对比页面渲染一个并排表格（price、year、miles、body、fuel、transmission、inspection score、oneLineNote），其中一行中不同的值用 signal-yellow 文本标记，相同的值保持 ink；移除到低于 2 时返回托盘状态。
  - 库存筛选器：品牌选项（多选）、车身选项（多选）、燃料选项（多选）、最高价格滑块（$8k–$45k）、最高里程滑块（10k–80k）、最低年份滑块（2018–2023）；排序下拉菜单：'Price: low to high'（默认）、'Price: high to low'、'Mileage: low to high'、'Year: newest'。实时结果计数 'Showing 14 of 24'。任何激活的筛选器显示一个 'Clear all' 选项；筛选到零的状态显示 'No cars match — loosen a filter.' 并带有清除选项，绝不出现空页面。
  - 仅使用这些 lucide-react 图标：Phone、Heart、Scale、Search、SlidersHorizontal、ChevronRight、ChevronLeft、ArrowRight、ArrowLeft、Menu、X、Check、CheckCircle2、Gauge、Fuel、CalendarCheck、ShieldCheck、MapPin、Calculator、Car、Star、Truck、FileCheck。
  - 将收藏车辆、对比选择和置换提交持久化到 localStorage，以 [BRAND_SLUG] 为命名空间；验证恢复的 JSON 并从格式错误的数据中静默恢复。
  - 在构建前将六张生成的图片下载到 Assets 中列出的精确公共路径。在项目根目录创建 ASSETS.md，列出每个文件的路径、源 URL、作者或生成器以及许可证。
  - 一个纯 <title> 为 [BRAND] 和一个 favicon（带 signal-yellow 钥匙扣标记的 graphite 方块）就足够了；不需要 meta 描述、Open Graph 标签、JSON-LD 或站点地图。

## 变量
- [BRAND] — 品牌（默认：“Cedar Row Motors”）。虚构的经销商名称；代码中会由此派生出一个钥匙扣标志图形。
- [CITY] — 城市（默认：“Bellhaven”）。车场所在地；出现在首屏、交付文案和页脚中。
- [FOUNDER] — 经销商负责人（默认：“Ade Owolabi”）。虚构的车主，在首屏文案和“购车流程”部分中被点名。
- [PHONE] — 电话（默认：“(555) 833-1277”）。短信与电话专线；以 tel: 链接形式呈现，仅使用数字。
- [EXPERIENCE] — 从业经验（默认：“12 years”）。像 '12 years' 这样的普通短语；用于首屏和关于文案。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/used-car-dealership-website（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/used-car-dealership-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
