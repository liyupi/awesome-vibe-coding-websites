> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 人体心脏如何运作

完全按照以下描述构建此网站。将 [VARIABLES] 替换为您自己的值；其余内容保持不变。

## 简介
由 [BRAND] 制作的单页交互式科学讲解页，说明 [TOPIC] 的工作原理。首屏就是工作示意图本身：一幅大型代码绘制的剖面图已经在运动，速率滑块和实时轨迹无需滚动即可见。一个时钟驱动所有运动部件。默认主题是人类心脏，在深茄紫底色上以钴蓝色表示缺氧血、猩红色表示富氧血，并配一条磷光绿色的 ECG 扫描线。如果 [TOPIC] 不是人类心脏，则完全保留页面结构、配色、时钟、轨迹条、聚光灯行为和区块顺序，在同一块 1000 x 900 画布上把示意图重绘为 [TOPIC] 的全新风格化剖面图，将钴蓝和猩红映射到 [FLOW_PATH] 中命名的两种状态，从 [FLOW_PATH] 取十个滚动停靠点，从 [RATE_CONTROL] 取滑块，从 [TRACE_SIGNAL] 取轨迹及其标记，并重写所有文案，确保不残留任何心脏相关词汇。

- 受众：[AUDIENCE]。他们通过分享链接或课程计划进入，使用笔记本电脑或手机，除中学科学外没有其他背景知识。
- 目标：让一个机制豁然开朗：读者应能拖动滑块，观察各部件保持同步，跟随路径从起点到终点，并向他人解释这个循环。所有文案都放在 src/content.ts 中；当变量值与默认值不同时，重写该文案以适配它们。
- 语气：清晰、好奇且准确，像一位在白板前的好老师。短句和具体动词。不炒作、不戏剧化，也不提供健康建议。

## 技术栈
- 框架：Vite 5 + 原生 TypeScript
- 样式：纯 CSS
- 库：vite（MIT）、typescript（Apache-2.0）、gsap（含其 ScrollTrigger 插件）（GSAP Standard License，免费且包含商业使用）、lucide（ISC）、@fontsource/gloock（OFL-1.1）、@fontsource-variable/hanken-grotesk（OFL-1.1）、@fontsource-variable/martian-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置：
  - package.json 脚本：dev 运行 vite，build 运行 tsc --noEmit && vite build。使用严格模式的 TypeScript。
  - vite.config.ts 设置 base: './' 和 build.sourcemap: false，不使用任何插件。
  - 文件：index.html、public/favicon.svg、ASSETS.md、src/main.ts（负责连接逻辑和唯一的 requestAnimationFrame 循环）、src/model.ts（纯函数，提供基于 t 和 rate 的时序、音量、阀门和轨迹计算）、src/diagram.ts（createDiagram(svg, options) 工厂函数，用于图表的每一份副本）、src/trace.ts（canvas 扫描）、src/scroll.ts（GSAP ScrollTrigger 步骤）、src/content.ts（所有可见文案和变量值）、src/styles.css。
  - 只存在一个 requestAnimationFrame 循环。每一帧它推进一次时钟，然后用同一个 t 更新每个图表实例、每条轨迹和每个读数。任何跳动部件都不得由 CSS 动画或 GSAP 时间线驱动。
  - src/model.ts 不访问 DOM，因此暂停或单步的图表可以在任意 t 通过调用相同的函数来绘制。
  - 用 gsap.registerPlugin(ScrollTrigger) 注册一次 ScrollTrigger。GSAP 仅用于滚动触发和区块显现。
  - 标签页隐藏时暂停循环，并将帧间隔限制在 50 ms，以免返回时时钟跳变。
  - 用 devicePixelRatio 设置 canvas 尺寸，并在 resize 时重绘。
  - title 标签为 '[BRAND] | How [TOPIC] works'。favicon 为 public/favicon.svg。

## 变量
- [BRAND] — 发布者名称（默认：“Cutaway Lab”）。发布解说内容的虚构工作室或教师。
- [TOPIC] — 主题，以小写句中形式书写（默认：“the human heart”）。用于“How [TOPIC] works”中。选择一个具有重复循环和某物运动路径的机器或系统。
- [AUDIENCE] — 目标读者（默认：“curious adults and high school biology classes”）。决定阅读难度和课堂提示。
- [RATE_CONTROL] — 滑块名称、范围和起始值（默认：“Heart rate: 40–180 BPM, starting at 72”）。读者唯一可以拖动的数字。
- [FLOW_PATH] — 两种状态和十个停靠点（默认：“Cobalt, oxygen-poor blood: right atrium, tricuspid valve, right ventricle, pulmonary valve, lungs. Scarlet, oxygen-rich blood: left atrium, mitral valve, left ventricle, aortic valve, body.”）。每种颜色恰好五个停靠点，按行进顺序排列。这些将成为十个滚动步骤。
- [TRACE_SIGNAL] — 实时轨迹及其标记（默认：“Stylized ECG with P, QRS and T marks”）。由数学合成的信号，绝非录音。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接至 https://vibefather.ai/t/how-the-human-heart-works（默认：是；删除此行即可移除）

Pages & Sections 下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 茄紫底色（Aubergine ground）`#16081A` — 页面背景与首屏底色；猩红与荧光填充上的文字颜色
- 茄紫面板（Aubergine panel）`#26102C` — 卡片、步骤面板、波形条背景
- 细线（Hairline）`#4B2A55` — 边框、分隔线、滑块刻度
- 钴蓝（Cobalt）`#1F4BFF` — 腔室与血管中缺氧血的填充
- 钴蓝壁（Cobalt wall）`#0F2A9E` — 钴蓝血管的壁
- 钴蓝文字（Cobalt text）`#7F9CFF` — 深色底上的钴蓝侧文字；浅色粒子
- 猩红（Scarlet）`#FF1F3D` — 腔室与血管中富氧血的填充
- 猩红壁（Scarlet wall）`#A80F2A` — 猩红血管的壁
- 猩红文字（Scarlet text）`#FF4A5E` — 深色底上的猩红侧文字
- 肌肉（Muscle）`#6A1B45` — 心脏壁填充
- 肌肉线（Muscle line）`#8E2A5A` — 心脏轮廓与纤维排线
- 荧光（Phosphor）`#39FF88` — ECG 波形、电火花、滑块拇指、激活状态、主 CTA 填充
- 瓣叶（Leaflet）`#FFE6D6` — 瓣膜瓣叶与铰点圆点
- 肺组织（Lung tissue）`#2A1033` — 肺填充，配 #6B4A78 描边
- 文字（Text）`#F8EEF4` — 标题与正文文字
- 弱化文字（Muted text）`#C9B6CE` — 次要文字与说明文字

### 字体排印
- 展示字体：H1 与章节标题，句首大写，行高 1.02。H1 在桌面端为 84px、移动端为 42px；章节标题为 56px 与 34px。：Gloock（OFL），字重 400
- 正文字体：正文 18px、行高 1.6，步骤说明文字，按钮 15px、字重 600：Hanken Grotesk Variable（OFL），字重 400/500/600
- 仪表字体：眉题、图示标签、读数与表格数字，12–14px 大写，标签字距 0.08em；心率读数为 64px、字重 500：Martian Mono Variable（OFL），字重 400/500

### 布局与动效
- 间距：8px 基准。页面最大宽度 1320px，桌面端左右留白 40px、移动端 16px。区块在桌面端垂直内边距 120px、移动端 72px。区块之间用 1px #4B2A55 的线分隔，而非交替背景。
- 圆角：卡片与步骤面板 14px。按钮与标签为胶囊形。波形条为方形并通栏延伸至边缘。
- 动效：时序模型位于 src/model.ts，以秒为单位，每次心搏的 R 峰处 t = 0：RR = 60 / rate；Ts = 0.16 + 0.12 * RR（收缩期）；Td = RR - Ts（舒张期）；PR = 0.06 + 0.08 * min(1, RR)；Tic = 0.05；Tir = min(0.07, 0.25 * Td)；Tf = RR - PR - Ts - Tir（充盈期）。
- 动效：五个阶段依次为：1 挤压开始，0 至 Tic。2 射血，Tic 至 Ts。3 舒张，Ts 至 Ts + Tir。4 充盈，Ts + Tir 至 RR - PR。5 心房补充，RR - PR 至 RR。
- 动效：心室缩放 v：F = 0.74 + 0.22 * (1 - exp(-Tf / 0.05))，E = F + 0.04。阶段 1 保持 E。阶段 2 从 E 缓入缓出至 0.74。阶段 3 保持 0.74。阶段 4 为 0.74 + 0.22 * (1 - exp(-tau / 0.05))，其中 tau 为阶段开始以来的时间。阶段 5 从 F 缓出至 E。高心率时充盈被截短，因此心室可见地充盈得更少。
- 动效：心房缩放 a：除阶段 5 外始终为 1，阶段 5 中 a = 1 - 0.12 * sin(pi * x)，x 为该阶段的进度，从 0 到 1。
- 动效：瓣膜开放度，0 到 1。入口瓣膜（三尖瓣、二尖瓣）在阶段 1 的前 0.03 s 内从 1 降至 0，在阶段 2 和 3 保持 0，在阶段 4 的前 min(0.04, Tf) 内从 0 升至 1，在阶段 5 保持 1。出口瓣膜（肺动脉瓣、主动脉瓣）在阶段 2 的前 0.03 s 内从 0 升至 1，在阶段 3 的前 min(0.03, Tir) 内从 1 降至 0，其余时间保持 0。
- 动效：波形，合成为高斯函数之和 A * exp(-((t' - c)^2) / (2 * s^2))，其中 t' 为 t 环绕到 -RR/2 至 RR/2 区间后的值。P：A 0.15，c -PR，s 0.025。Q：A -0.12，c -0.025，s 0.009。R：A 1.0，c 0，s 0.011。S：A -0.22，c 0.028，s 0.011。T：A 0.30，c Ts - 0.05，s 0.045。
- 动效：心率变化时，保持当前周期比例（t / RR），使心搏永不跳变。滑块输入在同一帧生效。
- 动效：电火花，使用波形的环绕 t'：从 t' = -PR - 0.02 到 t' = -PR + 0.06，一个 7 单位的荧光点沿传导线的心房段行进，与 P 标记同步；从 t' = -0.03 到 t' = 0.04，它沿室间隔段与两条分支行进，与 QRS 同步。火花经过时，节点圆点闪烁，线条不透明度从 0.25 提亮至 1。
- 动效：区块显现：标题与卡片通过 ScrollTrigger 在 0.5s 内淡入并上移 16px，仅触发一次。按钮按下时缩放至 0.97。聚光灯变暗过渡 0.35s。
- 动效：prefers-reduced-motion：时钟永不运行。每个图示渲染静态帧，首屏显示阶段 2 中点的帧，波形条绘制两个静态心搏，粒子隐藏，首屏图示下方出现 Previous 与 Next 按钮以逐步浏览五个阶段。滚动步骤仍切换聚光灯与说明文字，无过渡，液滴置于该步骤的停靠点。
- 图像：无照片，无下载图片。一切均以代码绘制为扁平、自信的解剖形状，肌肉上带细排线：现代印刷科学图版的感觉，依据本提示词中的坐标全新绘制，绝不描摹自图谱或教科书。对于另一个 [TOPIC]，在同一画布上绘制同样简洁的剖面，使用相同的扁平填充、管壁、排线、瓣叶颜色与荧光信号线。

## 页面与区块
### [TOPIC] 的工作原理（`index.html`）
1. **图示规范（页面中每个图示共用）** — 不是可见区块：createDiagram 以内联 SVG 构建此图示，viewBox 为 '0 0 1000 900'。观察者面对该人物，因此人物的右侧位于屏幕左侧。以下所有形状均针对默认的 [TOPIC]。闭合形状为闭合的 Catmull-Rom 样条，转换为三次贝塞尔曲线（控制点 p1 + (p2 - p0) / 6 和 p2 - (p3 - p1) / 6）。管道是一条描边路径绘制两次，使用平头端点：先以宽度 W 绘制壁色，再以宽度 W - 12 绘制血液色。

腔室控制点，每个点围绕其锚点按模型缩放比例缩放（心房为 a，心室为 v）。
RA，钴蓝色（cobalt），锚点 (332,428)：262,272 330,250 392,276 402,345 388,410 330,428 268,404 244,340。
LA，猩红色（scarlet），锚点 (626,404)：566,266 640,244 716,266 738,324 712,386 640,404 574,388 548,328。
RV，钴蓝色（cobalt），锚点 (350,462)：290,478 350,456 440,462 470,540 472,622 452,706 392,672 326,606 284,540。
LV，猩红色（scarlet），锚点 (626,450)：548,482 622,446 704,470 730,550 710,652 656,738 596,790 552,716 530,626 526,546。

心脏轮廓，每个点标记其跟随的腔室。它围绕该腔室的锚点按 1 - (1 - scale) * 0.55 缩放：262,238 RA；400,236 RA；470,250 LA；550,236 LA；640,214 LA；742,244 LA；774,324 LA；752,410 LV；768,500 LV；768,584 LV；740,676 LV；676,776 LV；596,840 LV；530,792 LV；462,742 RV；388,710 RV；300,632 RV；252,548 RV；244,452 RV；216,404 RA；210,330 RA。填充 #6A1B45，描边 #8E2A5A，宽度 4。叠加同一路径，填充为间距 7 单位的线条图案，旋转 38 度，描边 #8E2A5A，宽度 1.6，不透明度 0.4。

绘制顺序，从后到前，每个项目位于其自己的命名组中，以便可以聚光突出：
1. 肺：闭合样条 66,160 120,126 168,170 176,270 160,370 96,396 46,340 40,240 及其镜像（x 变为 1000 - x），填充 #2A1033，描边 #6B4A78，宽度 3。在每个肺内，绘制分支树：递归线条，按正负 26 度分叉，长度乘以 0.72，描边宽度为 depth * 1.4，使用圆头端点。钴蓝色树从 (172,188) 角度 175 和 (828,188) 角度 5 开始，长度 40，深度 5。猩红色树从 (172,290) 角度 180、(172,346) 角度 170、(828,290) 角度 0 和 (828,346) 角度 10 开始，长度 34，深度 4。
2. 身体床：rect x 176，y 826，宽度 640，高度 52，半径 26，不透明度 0.85，带有从右侧 #FF1F3D 到左侧 #1F4BFF 的水平渐变。
3. 降主动脉：猩红色管道 M792 150 L792 838，W 50。
4. 左肺静脉，从心脏后方穿过：猩红色管道 M172 290 L300 290 和 M172 346 L300 346，W 34。
5. 心脏轮廓和阴影线。
6. 右肺静脉：猩红色管道 M828 290 L700 290 和 M828 346 L700 346，W 34。
7. 肺动脉作为一个组：先绘制壁描边，再绘制血液描边，使 T 形连接处干净。壁色 #0F2A9E：M172 188 L828 188 宽度 44 和 M432 210 L432 480 宽度 56。血液色 #1F4BFF：M172 188 L828 188 宽度 32 和 M432 188 L432 480 宽度 44。
8. 腔静脉：钴蓝色管道 M318 0 L318 280 和 M204 836 L204 500 C204 450 236 420 290 380，W 50。
9. 主动脉：猩红色管道 M612 502 C540 470 500 440 500 390 L500 160 C500 92 560 56 640 56 C730 56 792 100 792 166，W 60。三条弓部分支：猩红色管道 M590 66 L590 0、M650 66 L650 0、M710 66 L710 0，W 26。然后以 #FF1F3D 宽度 48 重绘 M500 390 L500 160 C500 92 560 56 640 56 C730 56 792 100 792 166，以清除分支末端。
10. 入口通道：钴蓝色 rect x 288，y 404，w 88，h 70 和猩红色 rect x 574，y 384，w 104，h 84。
11. 四个腔室，绘制在管道末端之上，使连接处消失。
12. 瓣膜，中心 x、中心 y、流向角度（度）、半宽：三尖瓣 332,442,90,44；二尖瓣 626,425,90,52；肺动脉瓣 432,290,-90,22；主动脉瓣 500,330,-90,24。每个瓣膜有两个瓣叶，铰接在中心加减垂直方向乘以半宽处，长度为半宽 * 1.04。瓣叶角度从指向中心（关闭）向流向方向转动，在开放度 1 时转动 87%。将每个瓣叶绘制为二次曲线，其中点沿流向方向推移 6 单位，描边 #FFE6D6，宽度 7，使用圆头端点，外加一个 5 单位的铰接点。
13. 传导线，描边 #39FF88，宽度 2.5：心房段 M262 262 C330 330 420 410 500 470；室间隔段 M500 470 L500 700；分支 M500 560 C450 600 400 620 360 600 和 M500 620 C550 680 620 700 680 640。节点圆点位于 (262,262) 半径 7 和 (500,470) 半径 6。
14. 粒子：90 个半径 3.5 的圆，钴蓝色路径上为 #7F9CFF，猩红色路径上为 #FF9AA6，均匀分布在这些路径上，当其闸门打开时以每秒 520 单位移动，否则为 40。始终打开：M318 0 L318 280；M204 836 L204 500 C204 450 236 420 290 380；M828 290 L700 290；M828 346 L700 346。当入口开放度高于 0.5 时打开：M330 340 L332 442 L380 560；M640 320 L626 425 L626 580。当出口开放度高于 0.5 时打开：M380 560 L432 480 L432 188；M432 188 L172 188；M432 188 L828 188；M626 580 L612 502 C540 470 500 440 500 390 L500 160 C500 92 560 56 640 56 C730 56 792 100 792 166 L792 838。
15. 标签，Martian Mono 15 单位，在缩略图上隐藏：'Right atrium' 位于 322,345 和 'Right ventricle' 位于 385,565，颜色 #FFFFFF；'Left atrium' 位于 640,325 和 'Left ventricle' 位于 628,590，颜色 #16081A；'Aorta' 位于 640,112，颜色 #FF4A5E；'Pulmonary artery' 位于 610,152，颜色 #7F9CFF；'Vena cava' 位于 350,30，颜色 #7F9CFF；'Lungs' 位于 108,112 和 892,112，颜色 #C9B6CE；'Body' 位于 496,858，颜色 #F8EEF4。全部居中。宽度低于 768px 时，仅显示 'RA'、'RV'、'LA'、'LV'，36 单位。

createDiagram 接受 { labels, particles, frozenT, frozenRate }，以便缩略图可以渲染固定帧。
   布局：一个函数，多个实例：hero、粘性滚动图示、阶段缩略图和小型轨迹区块图示。每个实例读取相同的时钟，除非被冻结。
2. **页眉** — 左侧：一个小的代码绘制标记（一个 20px 的圆垂直分割，左侧钴蓝色，右侧猩红色）和 [BRAND]，使用 Hanken Grotesk 600。右侧，使用 Martian Mono 12px 大写：The beat、Blood path、Five moments、Rate、The trace、Valves、Class。每个都是同页哈希链接。在移动端仅显示标记、[BRAND] 和一个链接 'Blood path'。
   布局：粘性，桌面端高 64px，移动端高 52px。背景 #16081A，不透明度 92%，底部有 1px #4B2A55 线条。
   动效：当前区块的链接在滚动时变为 #39FF88。
3. **Hero：工作图示（id beat）** — 眉题：'[BRAND] Explainer No. 07'。H1：'How the human heart works'。副标题：'Four chambers, four valves and one electrical signal, running on a single clock. Drag the slider and watch every part keep time.'

仪表板：滑块标签 'Heart rate' 使用等宽字体；当前值显示为 64px 数字，旁边有 'BPM'；范围输入从 40 到 180，步长 1，起始值 72，刻度位于 40、60、90、120、150、180，刻度上无文字；一个暂停和播放图标按钮；相位读数以 #39FF88 显示当前相位名称；'Systole 0.26 s' 和 'Diastole 0.57 s'，实时计算到两位小数；以及一个 10px 的共享条，其中收缩期为 #39FF88，舒张期为 #4B2A55，其宽度实时更新。

按钮：主按钮 'Follow one drop of blood'（phosphor fill，#16081A 文字）链接到 #path。次按钮 'Step through one beat'（1px #4B2A55 轮廓）链接到 #moments。

图示下方的小方向说明行，使用柔和的等宽字体：'You are facing the person, so their right side is on your left.'

轨迹条说明文字，位于轨迹条左上角：'Stylized trace, synthesized from math. Not a recording.' 右上角，三个字母标签 P、QRS 和 T，活动标签旁有一句实时句子。P，在其中心 0.04 s 内：'P: the signal crosses the atria. They squeeze next.' QRS，从 -0.04 s 到 0.05 s：'QRS: the signal reaches the ventricles. They squeeze next.' T，在其中心 0.05 s 内：'T: the ventricles reset for the next beat.'
   布局：桌面端：页眉下方恰好 100vh，作为一列。上部区域是两列网格：左列 500px，包含眉题、H1、副标题、仪表盘和按钮，垂直居中；右列是图示，填满所有剩余高度，其完整的 1000 x 900 画布可见且无任何裁剪。下部区域是轨迹条，168px 高，全出血，#26102C，顶部和底部线条为 #4B2A55。在 1440 x 900 下一切可见，无需滚动。移动端：堆叠，按此顺序：眉题和 H1、全宽图示、数值和滑块、相位读数及收缩期和舒张期数值、110px 高的轨迹条，然后副标题和按钮位于首屏下方。
   动效：图示从第一帧开始跳动，无入场动画。轨迹：画布扫描以恒定速度从左向右移动，5 s 内穿过轨迹条，因此速率升高时可容纳更多心搏。每帧以 1/240 s 为步长推进，确保不遗漏任何 QRS。线条 #39FF88，2px，带 8px 阴影模糊；较旧的列随老化淡至 35% alpha；亮头部圆点前方擦除 28px 间隙。基线位于轨迹条高度的 62%，垂直缩放为每 1.0 信号对应高度的 50%。在波形上方绘制每个波时，在其上方写入小号 'P'、'QRS' 和 'T' 标记，随线条淡出。键盘：滑块使用原生方向键；当焦点不在按钮或链接上时，空格切换暂停。
4. **跟随一滴血（id path）** — 标题：'Follow one drop of blood'。引言：'One full trip goes through the heart twice. Scroll, and the diagram lights up each stop in order.'

十个步骤，每个步骤有一个等宽编号、一个 Gloock 字体的短标题和一段说明。等宽编号在步骤 1–5 为 #7F9CFF，在步骤 6–10 为 #FF4A5E。
1 右心房，'Arrival'：'Blood back from the body collects here, through one large vein from above and one from below. It has given up much of its oxygen, so it is drawn in cobalt.'
2 三尖瓣，'A one-way door opens'：'When the chamber below relaxes, pressure drops and this valve swings open. A small squeeze from the atrium tops up the ventricle before the door shuts.'
3 右心室，'The short push'：'The electrical signal arrives and this chamber squeezes. The tricuspid valve shuts so nothing flows back. The wall is thinner here because the lungs are close by.'
4 肺动脉瓣，'Out to the lungs'：'Pressure forces these cusps open and blood leaves through the pulmonary artery. When the squeeze ends, the cusps catch the backflow and seal.'
5 肺，'The color change'：'Blood spreads through tiny vessels wrapped around air sacs. Carbon dioxide leaves and oxygen comes in. This is where the diagram turns from cobalt to scarlet.'
6 左心房，'Back to the heart'：'Four veins carry the refreshed blood back. The left atrium holds it until the next relaxation, filling at the same time as its partner on the other side.'
7 二尖瓣，'The two-leaflet door'：'This valve has two leaflets where the tricuspid has three. It opens as the left ventricle relaxes, and the atrium adds a last squeeze.'
8 左心室，'The thick wall'：'This chamber has the heaviest wall in the diagram. It sends blood all the way around the body, against far more resistance than the right side faces.'
9 主动脉瓣，'The big exit'：'Both ventricles squeeze together, so this valve opens at the same moment as the pulmonary valve. Blood rushes into the aorta, and the first branches arch off toward the head and arms.'
10 身体，'The long way round'：'Arteries divide into smaller and smaller vessels until oxygen can pass to the tissue. The blood turns cobalt again and heads for the two large veins. Then the trip starts over.'

血滴停靠点按图示单位依次为：(330,340)、(332,442)、(380,560)、(432,290)，然后 (432,188) 和 (880,188) 在前往 (880,290) 的肺途中，然后 (700,290) 在前往 (640,320)、(626,425)、(626,580)、(500,330) 的途中，然后 (500,120)、(640,56) 和 (792,166) 在前往 (792,700) 的身体途中。随后血滴继续前往 (500,852) 和 (204,836)，作为最后一步的结束。

每步的聚光目标：1 RA；2 三尖瓣和入口通道；3 RV；4 肺动脉瓣和肺动脉；5 双肺；6 LA 和右肺静脉；7 二尖瓣和入口通道；8 LV；9 主动脉瓣和主动脉；10 主动脉、降主动脉、身体床和双腔静脉。
   布局：桌面端：两列。左侧 42%：步骤，每个步骤 min-height 80vh，其卡片垂直居中（14px 圆角，#26102C，1px #4B2A55 边框，32px 内边距）。右侧 58%：一个粘性面板，top 64px，高度 calc(100vh - 64px)，容纳图示，除活动停靠点的标签外标签关闭，其下方是 96px 轨迹条，其右边缘是一列十个进度点。移动端：粘性面板位于顶部，44svh，无轨迹条，步骤卡片在其下方以全宽滚动，间距 60vh。
   动效：每个步骤上的 ScrollTrigger（start 'top 60%'，end 'bottom 60%'）设置活动步骤。聚光之外的一切在 0.35s 内变暗至不透明度 0.22。聚光目标保持完全不透明，并带有 SVG 辉光（feGaussianBlur stdDeviation 8，合并到源下方）。目标旁出现一条引导线和停靠点名称。第二个 ScrollTrigger 在整个区块内擦洗，沿折线移动血滴：一个 10 单位圆，带 3 单位 #F8EEF4 环，在肺之前填充 #1F4BFF，之后填充 #FF1F3D。心脏在这一切期间持续跳动，速率由滑块控制。活动卡片边框变为 #39FF88；其进度点填充。
5. **一次心搏，五个瞬间（id moments）** — 标题：'One beat, five moments'。引言：'Pick a moment and the page holds there. Every diagram, trace and valve card waits with it.'

五个图块，每个图块有一个在其相位中点冻结的缩略图、一个名称、一句话和两个标签。
1 'Squeeze begins'：'The ventricles tighten, but every valve is shut. Pressure climbs with nowhere to go.' 标签：'Inlets closed'、'Outlets closed'。
2 'Ejection'：'Pressure wins. The outlet valves open and blood leaves for the lungs and the body.' 标签：'Inlets closed'、'Outlets open'。
3 'Relaxation'：'The ventricles let go. The outlet valves snap shut against the backflow, and for a moment everything is closed again.' 标签：'Inlets closed'、'Outlets closed'。
4 'Filling'：'Pressure falls below the atria. The inlet valves open and blood pours down.' 标签：'Inlets open'、'Outlets closed'。
5 'Atrial top-up'：'A small squeeze from the atria pushes in the last of the blood, just before the next beat.' 标签：'Inlets open'、'Outlets closed'。

图块下方的控件：Previous、Next 和 'Back to live'，带 Lucide 箭头图标。
   布局：桌面端：五个等宽列，16px 间距。每个图块是一张 #26102C 卡片，缩略图在顶部（标签和粒子关闭）。选中图块：2px #39FF88 边框。移动端：水平滚动吸附行，卡片宽 78vw。
   动效：点击图块暂停时钟并将 t 设置为该相位的中点。所有图示和读数更新。轨迹保留已绘制的线条并停止。'Back to live' 从该 t 恢复。图块缩略图从不动画。同一区块也是减少动效的回退方案，工作方式完全相同。
6. **更快的心搏，更短的休息（id rate）** — 标题：'Faster beats, shorter rests'。引言：'Systole, the squeeze, barely changes as the rate climbs. Diastole, the rest and refill, gives up almost all of the difference.'

一个条形表格，速率 40、60、90、120、150 和 180，外加一行标记为 'Your slider' 的实时行，重复当前速率。所有数字均由图示使用的同一函数中的时序模型计算。在这些速率下，收缩期和舒张期的秒值为：40：0.34，1.16。60：0.28，0.72。90：0.24，0.43。120：0.22，0.28。150：0.21，0.19。180：0.20，0.13。

说明文字，弱化等宽字体：'Output of the simple model on this page, not measured data. It is drawn to show the pattern.' 任何地方都不要用文字把任何速率描述为良好、不良、典型、健康或危险。
   布局：每一行：左侧为等宽字体的速率，然后是在共享时间尺度上的水平条（1.5 s 等于全宽），收缩期为 #39FF88，舒张期为 #4B2A55，带 #C9B6CE 1px 描边，然后右侧是两个数字。行高为 44px。'Your slider' 行位于顶部 #26102C 色带上，带有自己的紧凑版范围输入控件，并与主视觉滑块保持同步。在移动端，数字移到条形下方。
   动效：条形在首次显示时从零开始，在 0.6s 内增长。实时行在每次滑块输入时更新。
7. **解读波形（id trace）** — 标题：'Three marks on one line'。引言：'The trace shows the electrical signal, not the movement. The signal comes first, then the muscle answers.'

三张卡片。
'P'：'A spark starts at the top of the right atrium and spreads across both atria. They squeeze a moment later.' 高亮心房传导段、RA 和 LA。
'QRS'：'The signal drops down the wall between the ventricles and fans out. It is the tallest mark because the ventricles are the largest muscle in the diagram.' 高亮室间隔段、分支、RV 和 LV。
'T'：'The ventricle muscle resets, ready for the next signal. The chambers are finishing their squeeze as this mark passes.' 高亮 RV 和 LV。

下方注释：'This line is built from smooth math curves to show where each mark falls. It cannot be used to read a real heart.'
   布局：顶部：一个大型静态 SVG，显示来自同一波形函数的单次搏动，全内容宽度、240px 高，位于 #26102C 上，带有 #4B2A55 的微弱 40px 网格线，并标注三个标记。下方两列：左侧为三张卡片，右侧为一个关闭标签的小图，宽 420px。在移动端，小图位于波形和卡片之间。
   动效：悬停、聚焦或轻触卡片时，会在静态波形中以完整荧光高亮其对应部分（其余部分变暗至 35%），并在小图中聚光显示其部件，小图持续搏动。
8. **四个瓣膜，一个方向（id valves）** — 标题：'Four valves, one direction'。引言：'Valves do not push anything. They open and close because of pressure on either side.'

四张卡片，每张包含一个动画特写、名称、路径和状态行。
'Tricuspid'：'Right atrium to right ventricle. Three leaflets, shown as two in this slice.'
'Pulmonary'：'Right ventricle to pulmonary artery. Three cusps, shown as two in this slice.'
'Mitral'：'Left atrium to left ventricle. Two leaflets.'
'Aortic'：'Left ventricle to aorta. Three cusps, shown as two in this slice.'
每张卡片上的实时状态行，使用等宽字体：'Open' 为 #39FF88，或 'Closed' 为 #C9B6CE，来自相同的开放度值，其中 Open 表示高于 0.5。
   布局：桌面端为四张等宽卡片，移动端为两列。每个特写是一个 200 x 140 SVG：在两堵 #6A1B45 壁之间有一条正确血液颜色的通道，带有两个大型 #FFE6D6 瓣叶，使用相同的瓣膜函数，缩放为两倍。
   动效：瓣叶跟随实时时钟。粒子仅在该瓣膜打开时穿过通道。
9. **课堂使用（id class）** — 标题：'Use it in class'。三个编号提示：
1 'Set the slider to 40, then to 180. Which part of the beat lost more time, and what did the ventricles do differently?'
2 'Pause on Ejection. Name the two open valves and say why the other two must stay shut.'
3 'Find the point where the diagram turns from cobalt to scarlet. What changed, and where?'

四个问题，使用原生 details 和 summary 元素：
'Why does the trace move before the heart does?'：'The electrical signal comes first and the muscle responds a moment later. Watch the green spark travel just before each squeeze.'
'Is this a real ECG?'：'No. The trace is a sum of smooth math curves shaped to show where P, QRS and T fall. It is not a recording and should not be read as one.'
'Are the timings real?'：'They come from a simple formula chosen to show one pattern: systole barely changes while diastole shrinks. Treat them as a teaching model, not as measurements.'
'Can this page tell me anything about my own heart?'：'No. It does not read your pulse and it cannot assess anything. Questions about your own heart belong with a clinician.'
   布局：桌面端为两列：左侧为提示，带有 #FF4A5E 的大型 Gloock 数字；右侧为问题，带有 1px #4B2A55 分隔线。移动端为一列。
   动效：每个问题上的加号图标在打开时旋转 45 度。
10. **页脚** — 免责声明行使用 Hanken Grotesk 18px：'A stylized teaching model for [AUDIENCE]. Not medical advice and not a measuring tool.' 版权页信息使用弱化等宽字体：'Words: Odalys Renn. Drawing and code: Teo Marchetti. Published by [BRAND].' 一行标题为 'Next in the series'，包含三个非链接条目，标记为 'In progress'：'How lungs trade gas'、'How a kidney filters'、'How a four-stroke engine breathes'。[CREDIT] 链接在保留时位于底部行的最右侧。
   布局：全宽色带：顶部边框为从 #1F4BFF 到 #FF1F3D 的 6px 水平渐变，然后在 #16081A 上为三列网格，内边距 64px。移动端为一列。
   动效：无。

## 资产
- 图像：未下载任何图像。所有视觉元素均根据本提示词中的坐标以代码绘制：图表使用内联 SVG，轨迹使用 canvas。public/favicon.svg 为手写：一个 #16081A 圆角方块，内含一个垂直分割的圆形，左侧为 #1F4BFF，右侧为 #FF1F3D。在项目根目录的 ASSETS.md 中，列出 gsap、lucide 以及三种字体，并注明路径、来源 URL、作者和许可证，同时说明该项目不包含任何第三方图像。
- 图标：Lucide（ISC），来自 lucide npm 包，逐个导入并以内联 SVG 渲染：Play、Pause、ChevronLeft、ChevronRight、Plus。页眉标记为手绘内联 SVG。
- 字体：通过 @fontsource/gloock（400）、@fontsource-variable/hanken-grotesk 和 @fontsource-variable/martian-mono 自托管，均为 OFL-1.1，在 src/main.ts 中导入。

## 禁止事项
- 不得包含后端、服务器代码、API 路由、数据库、认证、任何会提交到某处的表单或第三方 API。不得访问摄像头、麦克风或传感器。
- 不得使用 CDN 的 script 或 link 标签，不得使用 fonts.googleapis.com 或 fonts.gstatic.com，不得包含分析统计。字体、图标和脚本全部本地打包。
- 不得包含 source map，不得将 src/ 复制到 dist/。使用 Vite base './' 的相对资源路径。保持 dist/ 在 20 MB 以下。同页链接为哈希链接，任何指向页面自身的链接都使用 ./index.html，绝不使用裸目录。
- 不得使用从解剖图谱、教科书或商业医学插图中描摹的图版或线条。仅根据此处的坐标绘制示意图，或为另一个 [TOPIC] 全新绘制为风格化插图。
- 不得使用真实患者 ECG 记录或复制的波形描记。波形由此处的数学合成，并标注为风格化。
- 不得出现医院、健康慈善机构、医学期刊或设备制造商的标志、名称或徽章。
- 不得复制健康百科、教科书或患者手册中的文字。使用此处撰写的文案。
- 不得包含诊断功能或医疗建议：不得有症状检查器，不得读取用户自己的脉搏，不得标注某速率或节律为健康、正常、良好、有风险或危险，不得提及具名疾病，不得有治疗或药物声明。
- 不得使用真实器官、手术或患者的照片，不得有血腥内容。不得有逼真的血液飞溅或滴落。
- 不得编造统计数据或专家引语并作为有出处的医学事实呈现，不得有医生背书或“医学审核”徽章。页面上的数字来自所述模型，并标注为模型输出。
- 不得有第二个动画时钟：不得使用 CSS keyframes、GSAP 时间线或独立循环来驱动腔室、瓣膜、粒子或波形描记。
- 不得回退到苍白背景或柔和配色。钴蓝（cobalt）和猩红（scarlet）都必须填充 hero 的大面积区域。
- 不得在 hero 中裁剪示意图，不得在桌面端将滑块或波形描记推到首屏以下。
- 当 [TOPIC] 是其他主题时，不得硬编码心脏相关词汇：标签、阶段名称、瓣膜卡片、类别提示、问题、免责声明和系列行都遵循变量。
- 必须在 1440 x 900 和 390 x 844 下正常工作，控制台零错误，页面无水平滚动。按所述尊重 prefers-reduced-motion。
- 站点中任何位置不得出现模板名称或提及提示词来源，可选的 [CREDIT] 页脚链接除外。

---
— Prompt by VibeFather · https://vibefather.ai/t/how-the-human-heart-works · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
