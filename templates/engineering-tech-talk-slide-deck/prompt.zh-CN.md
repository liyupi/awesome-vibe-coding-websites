> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 工程技术分享幻灯片

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一套暗色美学的 12 页会议工程演讲幻灯片，标题为 '[TALK_TITLE]'，演讲者为 [SPEAKER_NAME]，主题是扩展 [BRAND] 的实时事件管道，包含可点击的数据包流转架构、p99 延迟图表、带行标注的语法高亮代码差异，以及交互式基准测试。

- 受众：后端工程师、SRE、分布式系统架构师和技术会议参会者。
- 目标：清晰地带工程受众走完从生产瓶颈到架构重新设计、代码级优化、经验证的基准测试，以及来之不易的事后复盘教训的完整过程。
- 语气：直接、技术严谨、坦诚、零废话的工程表达。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：lucide-react (ISC)、@fontsource/space-grotesk (OFL)、@fontsource/inter (OFL)、@fontsource/jetbrains-mono (OFL)
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中本地导入 @fontsource/space-grotesk（500、600、700）、@fontsource/inter（400、500、600）和 @fontsource/jetbrains-mono（400、500、600）。
  - 将所有演讲文案、架构阶段、代码差异标记、基准数据集和演讲者备注存储在 src/data/talkDeck.ts 中。
  - 为 TypeScript/Rust 风格的伪代码差异实现手写标记语法高亮，不使用外部 CDN prism 脚本。
  - 在 src/index.css 中配置 @media print，使用 @page { size: landscape; margin: 0; }，保持可读的深色或高对比度幻灯片卡片每页一张，隐藏导航界面元素。

## 变量
- [BRAND] — 系统或平台名称（默认："FluxPipe"）。虚构的实时事件管道名称
- [TALK_TITLE] — 会议演讲标题（默认："Scaling Real-Time Event Pipelines to 1.4M msg/sec"）。主开场幻灯片标题
- [SPEAKER_NAME] — 演讲者姓名（默认："Marcus Chen"）。进行演讲的虚构工程师
- [SPEAKER_ROLE] — 演讲者头衔（默认："Staff Systems Engineer"）。标题幻灯片和结尾幻灯片上的角色副标题
- [HANDLE] — 演讲者账号 / 域名（默认："@mchen.systems"）。封面和问答幻灯片上显示的虚构账号
- [CREDIT] — 在页脚保留一个小的 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/engineering-tech-talk-slide-deck（默认：是；删除此行即可移除）

页面与区块（Pages & Sections）下的文案是按默认值编写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 黑曜石舞台（Obsidian Stage）`#0B1016` — 主深色演示画布
- 终端表面（Terminal Surface）`#121A24` — 抬升的代码块、图表面板和卡片
- 终端薄荷（Terminal Mint）`#34D399` — 新增代码行、吞吐量提升、健康节点和活跃数据包流
- 电光青（Electric Cyan）`#38BDF8` — 主要技术高亮、标注徽章和活跃图表阶段
- 柔和石板（Muted Slate）`#94A3B8` — 次级元数据、注释和坐标轴标签
- 清透霜白（Crisp Frost）`#F1F5F9` — 高对比度标题和主要代码文本
- 差异玫瑰（Diff Rose）`#FB7185` — 删除的代码行、瓶颈和延迟尖峰

### 字体排印
- 展示标题：Space Grotesk（OFL），字重 500/600/700
- 正文：Inter（OFL），字重 400/500/600
- 代码差异、遥测和快捷键：JetBrains Mono（OFL），字重 400/500/600

### 布局与动效
- 间距：桌面端使用居中的 16:9 深色舞台（最大 1320px，44px 内边距），带有细微的 1px #1E293B 边框和 56px 底部状态栏。移动端（<768px）面板垂直堆叠，仅在其自身带边框的容器内使用可水平滚动的代码块（页面零水平溢出）。
- 圆角：代码窗口和遥测面板为 10px，节点框和开关为 6px，键盘快捷键胶囊为 999px。
- 动效：快速 180ms 滑动过渡，带有细微的水平位移；在 prefers-reduced-motion 下禁用。
- 动效：动画 SVG 数据包圆点沿幻灯片 04 上高亮的流水线路径流动。
- 动效：代码差异行标注和基准负载开关上的交互式悬停/点击过渡。
- 动效：所有内容默认可见；无 clip-path 揭示陷阱。
- 图像：纯代码绘制的技术图形：细微点阵深色画布、交互式 SVG 分布式流水线拓扑、p99 延迟与吞吐量 SVG 图表、终端代码窗口，以及问答幻灯片上确定性的几何 SVG QR 图案。

## 页面与区块
### [BRAND] — [TALK_TITLE]（`index.html`）
1. **深色演示外壳、网格（G）与演讲者备注（N）** — 极简顶栏，包含终端提示符徽标（`$ [BRAND] --slides`）、当前章节标签和打印 PDF 操作。固定底部状态栏，风格类似清晰的 tmux/终端栏，显示上一页/下一页、幻灯片索引 `01 / 12`、可点击的 12 段青色/薄荷色进度条、概览网格（`G`）、演讲者备注 + 演讲计时器（`N`）以及全屏（`F`）。按 G 显示 4x3 深色幻灯片地图；按 N 切换演讲者备注 + 运行中的演讲计时器。
   布局：桌面端为全视口 16:9 居中画布；移动端（<768px）为堆叠式响应式幻灯片，支持触摸滑动。
2. **幻灯片 01 — 戏剧性开场标题页** — 左侧（7 列）：终端眉标胶囊 `SYSTEMS TRACK · 35 MIN`、粗体大标题 '[TALK_TITLE]'、副标题 'How we cut p99 tail latency by 86% inside [BRAND] without adding cluster nodes'，以及演讲者行 '[SPEAKER_NAME] · [SPEAKER_ROLE] · [HANDLE]'。右侧视觉锚点（5 列）：实时风格 SVG 遥测预览卡片，展示动画数据包流环（终端薄荷色 `1.42M msg/s`、电光青色 `4.8 ms p99`、`0 dropped frames`），为开场幻灯片赋予强烈的技术视觉权威感。
   布局：黑曜石色细微点阵背景上的 7/5 非对称分栏；移动端堆叠。
3. **幻灯片 02 — 规模与瓶颈统计** — 标题 'When Growth Broke Our Original Pipeline'。四张粗体遥测卡片突出故障墙：峰值突发速率（1.4M events/sec，基线的 3.8 倍）、p99 摄取延迟（340 ms — 超出 SLO 7 倍）、GC 暂停尖峰（180 ms 世界停顿）、协调器 CPU 饱和（分区领导者上 94%）。下方：一条简洁的 SVG 时间线带，展示延迟在超过 450k msg/s 后如何非线性恶化。
   布局：4 列指标条位于内联 SVG 饱和曲线之上。
4. **幻灯片 03 — 根因剖析** — 标题 'Three Hidden Bottlenecks Under the Hood'。三个编号诊断面板：01 每消息堆分配（2.8 GB/s 的频繁分配触发 GC）、02 分区映射上的全局互斥锁（32 核间的线程争用）、03 无界消费者预取（下游变慢时的队头阻塞），每个面板都配有清晰的火焰图风格水平 SVG 条形分解。
   布局：3 列诊断网格，配颜色编码的 SVG 火焰条。
5. **幻灯片 04 — 交互式分布式架构图** — 标题 'The Redesigned Zero-Copy Pipeline'。交互式 SVG 架构图，包含 5 个可点击阶段：边缘摄取 -> 分片路由 -> 无锁环形缓冲区 -> 批量压缩器 -> 列式接收器。点击任意阶段会以终端薄荷色（#34D399）和电光青色（#38BDF8）点亮其活动数据包流路径，并更新实时阶段遥测检查器（吞吐量、内存模型、背压策略、故障恢复）。
   布局：全宽交互式 SVG 拓扑画布位于 4 字段阶段遥测栏之上；移动端为紧凑阶段标签页。
   动效：选中阶段时，活动边上的 SVG 虚线动画。
6. **幻灯片 05 — 前后对比：p99 延迟与吞吐量图表** — 标题 'Measured Impact in Production Shadow Traffic'。两张并排的代码绘制 SVG 图表：左图比较 p50 / p95 / p99 / p99.9 延迟（之前为玫瑰色 #FB7185，之后为终端薄荷色 #34D399，p99 从 340ms 降至 4.8ms）。右图展示在 4、8、16 和 32 个工作线程下持续吞吐量线性扩展至 1.42M msg/s。
   布局：2 列图表网格，配清晰图例和悬停数值标注；移动端堆叠。
7. **幻灯片 06 — 代码差异走查 1：无锁环形缓冲区** — 标题 'Code Deep-Dive: Eliminating Mutex Contention'。分栏终端代码窗口，显示语法高亮的统一差异（红色 `-` 行表示互斥锁保护的 push，薄荷色 `+` 行表示 [BRAND] 中的原子比较并交换槽位预留）。右侧边栏提供 3 个可点击行标注（第 4–7 行缓存行填充、第 12–16 行原子槽位声明、第 19–22 行零拷贝切片交接），点击会高亮代码块中匹配的行。
   布局：桌面端 8/4 代码加标注分栏；移动端堆叠，代码内部水平滚动。
8. **幻灯片 07 — 代码差异走查 2：自适应背压** — 标题 'Code Deep-Dive: Credit-Based Flow Control'。语法高亮代码差异，比较朴素的无界通道发送与带指数抖动的水位驱动信用授予。右侧交互式标注胶囊解释高水位暂停、丢弃非关键遥测以及关闭时的确定性排空。
   布局：8/4 分栏，与幻灯片 06 呼应，形成强烈的视觉节奏。
9. **幻灯片 08 — 实时可切换基准比较** — 标题 'Benchmarking Across Real Payload Profiles'。交互式切换条在 3 种负载大小间切换：小型遥测（256 B）、JSON 事件（2 KB）和批量追踪（16 KB），外加指标选择器（吞吐量 msg/s 对比 p99 延迟 ms）。动态更新 SVG 水平条形比较图，覆盖传统队列、分区工作器和 [BRAND] 环形引擎，并显示精确差值和 CPU 效率徽标。
   布局：顶部交互式负载与指标控件位于宽幅动画 SVG 比较图和 3 个要点统计胶囊之上。
10. **幻灯片 09 — 发布策略：影子镜像与金丝雀门禁** — 标题 'Shipping a Core Rewrite Without Dropping an Event'。四张顺序阶段卡片由青色箭头连接（1% 影子重放 -> 校验和对等差异 -> 10% 金丝雀区域 -> 100% 自动化切换），每个门禁下方清晰列出自动回滚触发阈值。
    布局：桌面端 4 步水平流水线；移动端垂直时间线卡片。
11. **幻灯片 10 — 事后复盘经验教训** — 标题 'What Still Bit Us in Production'。2x2 网格中的四条坦诚工程教训：（1）原子计数器上的伪共享，（2）时钟偏移破坏窗口去重，（3）超大巨型批次饿死心跳，（4）为什么合成基准在尾部抖动上撒了谎。每张卡片列出症状、根因和永久修复。
    布局：2x2 深色表面网格，配玫瑰色症状标签和薄荷色修复标注。
12. **幻灯片 11 — 关键要点与架构检查清单** — 标题 'Five Rules to Take Back to Your Team'。编号 1–5 的粗体工程原则，配简洁等宽子规则（重写前测量 p99.9、显式限制每个队列、热路径上预分配、控制面与数据面分离、自动化影子对等验证）。
    布局：结构化垂直列表，配大号青色等宽索引和细微发丝分隔线。
13. **幻灯片 12 — 问答、资源与几何 QR 幻灯片** — 标题 'Questions? Let’s Dig Into the Traces.'。左侧（7 列）：演讲者回顾（[SPEAKER_NAME]、[SPEAKER_ROLE]、[HANDLE]）、3 行可复制资源（基准测试工具仓库、架构 RFC 笔记、幻灯片打印讲义），带一键复制确认。右侧（5 列）：清晰的代码绘制 SVG 几何 QR 风格徽标，以电光青色和终端薄荷色为边框，配说明文字 'Scan for demo repo & slides'。
    布局：黑曜石网格上的 7/5 收尾分栏；移动端整洁堆叠。

## 资产
- 图标：安装 lucide-react（ISC）用于终端徽章、控件、复制反馈和系统图标。
- 字体：通过 @fontsource 包（OFL）自托管 Space Grotesk、Inter 和 JetBrains Mono。
- 图像：所有架构图、延迟/吞吐量图表、火焰条和几何 QR 图案均以内联 SVG 绘制。零外部图像。

## 不要做的事
- 不要后端、CDN 脚本、Prism/Highlight.js CDN 链接或 Google Fonts 链接。
- 不要真实云厂商名称、消息中间件商标或真实会议 logo。
- 生产构建中不要 source map，并且始终使用 base: './'。
- 在 390x844 移动端不要出现未受控的水平溢出（代码窗口在内部滚动）。
- 不要日期或真实世界的会议年份；保持幻灯片常青。
- 不要 clip-path 揭示陷阱；每个活动幻灯片立即渲染。
- 除可选的 [CREDIT] 槽位外，不要提及 VibeFather 或竞争对手。

---
— Prompt by VibeFather · https://vibefather.ai/t/engineering-tech-talk-slide-deck · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
