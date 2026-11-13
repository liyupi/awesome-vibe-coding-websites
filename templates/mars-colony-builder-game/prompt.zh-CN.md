> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 火星殖民地建造游戏（Mars Colony Builder Game）

请完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，这是一款在 [CRATER] 中、由 [EXPEDITION] 建立的单屏回合制殖民地游戏。玩家在代码绘制的等距陨石坑上放置居住舱、太阳能阵列、温室和冰钻，然后一次推进一个火星日。氧气、电力、水和士气同步变化。沙尘暴持续四个火星日并削减太阳能产出。只有当床位和全部四种库存都允许时，殖民者才会增加，上限为 50。网格和库存持久化在 localStorage 中。默认标语：[TAGLINE]。陨石坑、一个居住舱和一层尘雾已经显示在屏幕上，位于承载标题和 HUD 的玻璃柱之间。

- 受众：喜欢短小规划解谜的人，包括 [AUDIENCE]，以及想要一款自带键盘和触摸控制、自包含 canvas 游戏的独立开发者和前端开发者。帮助文本保持简短，第一场风暴出现在已知的火星日，失败的火星日可以重试。
- 目标：交付一个完整循环：一个位于实时陨石坑上方的标题柱、每个火星日一次结构变更、一个与 Advance sol 使用相同 tick 的预览、风暴、增长到 50、胜利覆盖层、探险失败覆盖层、从 localStorage 恢复，以及在 1440x900 和 390x844 下等效游玩。
- 语气：平静、务实、略带干涩，像一份小型勘测的现场日志。简短美式英语，具体产出，不用感叹号，不用史诗式殖民口号，也不开把任何人遗弃在行星上的玩笑。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react 18（MIT）、react-dom 18（MIT）、lucide-react（ISC）、@fontsource-variable/fraunces（OFL-1.1）、@fontsource-variable/outfit（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化：
  - 使用 React TypeScript 模板搭建 Vite 5 项目。脚本：dev=vite，build=tsc --noEmit && vite build，preview=vite preview。包名使用 BRAND 的 slug。将 react 18、react-dom 18、lucide-react 以及三个 fontsource 包安装为运行时依赖。将 vite 5、typescript 5、tailwindcss 3.4、postcss 和 autoprefixer 安装为开发依赖。不要添加游戏引擎、路由、物理库、canvas 辅助库、补间动画库或音频文件。
  - vite.config.ts 将 base 设为 './'，build.outDir 设为 dist，build.emptyOutDir 设为 true，build.sourcemap 设为 false。tsconfig 的 strict 设为 true。Tailwind 的 content 覆盖 index.html 和 src。从设计（Design）部分扩展颜色和字体族。所有自定义 CSS、玻璃面板（glass panel）规则以及 prefers-reduced-motion 都放在 src/styles.css 中。
  - 在 src/main.tsx 中从 @fontsource-variable/fraunces 和 @fontsource-variable/outfit 导入 Fraunces variable 和 Outfit variable。从 @fontsource/ibm-plex-mono/500.css 导入 IBM Plex Mono 500。将它们分别映射到 font-display、font-sans 和 font-mono。绝不加载字体 CDN。
  - 使用 src/content.ts、sim.ts、draw.ts、audio.ts、save.ts、App.tsx、main.tsx 和 styles.css。sim.ts 是纯 TypeScript，不含 React，也不使用 Math.random。draw.ts 负责 canvas 和带种子的尘埃（seeded dust）。App.tsx 负责工具选择、待处理操作、覆盖层和键盘焦点。所有面向玩家的句子都放在 content.ts 中。
  - 如果 BRAND、CRATER、EXPEDITION、TAGLINE 或 AUDIENCE 与默认值不同，请重写名册、标题正文、胜利与失败句子以及日志行，使新的专有名词读起来自然。保留建筑名称、产出、网格、颜色和风暴日历。对于 Saltmere 这一组，名册严格为 Imani Okonkwo、Leo Hart 和 June Pell。对于任何其他非默认组合，请创造三个新人物，并去掉 Nia Calder、Omar Voss、Priya Sen、Tallow 和 Amberline。绝不渲染原始方括号占位符。
  - 文档标题为 BRAND + ' — ' + CRATER。交付 public/favicon.svg，图案为围绕一个小型等距菱形（isometric diamond）的铜色圆环，使用铜色和玄武岩色（basalt）的十六进制色值，并用相对 href 链接。只有一个 index.html，无路由，无第二个页面。
  - 设备像素比上限设为 2。当文档隐藏时暂停尘埃动画。在卸载时释放音频上下文和动画帧。生产环境的 dist 不含 source map、不复制 src，且保持在 20 MB 以下。

## 变量
- [BRAND] — 殖民地名称（默认：“Hearthline”）。一个虚构的殖民地和游戏标题。绝不是真实的机构、公司、漫游车或任务。
- [CRATER] — 陨石坑名称（默认：“Tallow Crater”）。一个虚构的盆地名称，用于标题栏、预报提示和胜利文案中。
- [EXPEDITION] — 创始远征队（默认：“the Amberline Survey”）。一个简短的虚构团体名称。眉题会去掉开头的“the”并将其余部分转为大写。
- [TAGLINE] — 殖民地标语（默认：“Fifty beds against the dust.”）。一行简短的原创文字，位于标题栏中殖民地名称下方以及胜利对话框上。
- [AUDIENCE] — 玩家受众（默认：“players who like short planning puzzles”）。仅使用一次，出现在帮助介绍中。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接指向 https://vibefather.ai/t/mars-colony-builder-game（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 玄武岩（Basalt）`#14110F` — 页面背景、画布空白区域和对话框遮罩底色
- 玻璃（Glass）`#1C1814` — HUD 面板，90% 不透明度，14px 背景模糊
- 铜色（Copper）`#E39B54` — 唯一强调色：栖息地穹顶、主按钮、选中态、焦点环、35% 不透明度的面板边框
- 深铜色（Copper deep）`#A86B38` — 栖息地裙边、按钮按下态和穹顶阴影
- 风化层（Regolith）`#C4784E` — 最浅的盆地地面砖
- 中风化层（Regolith mid）`#B56545` — 中间色调的盆地地面砖
- 暗风化层（Regolith dark）`#A85A3C` — 最深的盆地地面砖
- 边缘（Rim）`#5C3428` — 环形山壁顶部
- 边缘面（Rim face）`#3F241C` — 环形山壁南面、门和温室基座
- 尘埃（Dust）`#C4A574` — 雾霾粒子、风暴帷幕和巨石高光
- 羊皮纸（Parchment）`#F3E6D4` — 主文本和栖息地窗户
- 陶土（Clay）`#B7A394` — 次要文本、太阳能桅杆和未激活的工具标签
- 鼠尾草（Sage）`#8FB573` — 氧气条和温室窗格
- 冰色（Ice）`#B7D0D6` — 水条和钻探孔
- 士气陶土（Morale clay）`#D9896A` — 士气条
- 警告（Warning）`#E07A5F` — 库存低于 25、无效单元格和“仍要继续”
- 面板墨色（Panel ink）`#1C120C` — 铜色按钮上的文字
- 阵列单元格（Array cell）`#3E4C55` — 太阳能板填充色

### 字体排印
- 殖民地名称、胜利和失败标题、sol 数字：Fraunces（OFL），字重 600/700
- HUD 标签、帮助、按钮和正文：Outfit（OFL），字重 400/500/600
- 库存数字、预报和床位数量：IBM Plex Mono（OFL），字重 500

### 布局与动效
- 间距：4px 单位。页面高度为 100dvh，不滚动。桌面端在 1100px 及以上使用两个 320px 玻璃栏覆盖全出血画布，栏内边距 20px，环形山上下内边距 24px。低于 1100px（包括 390px）时，画布为顶部区域，底部面板承载 HUD，面板内边距 12px，按钮高度 48px，并包含安全区域内边距。中央栖息地保持在两栏之间的开放画布中。
- 圆角：玻璃面板 12px，对话框 14px，按钮 10px，预报标签和库存轨道 999px。画布为直角且全出血。世界中的形状是菱形、穹顶和桅杆，而非圆角应用图标。
- 动效：尘埃是唯一的持续动效：32 个种子粒子以每帧 0.6 CSS 像素向右漂移，并在环形山边界内循环。风暴将数量提升至 64，并添加 0.18 alpha 的平坦尘埃帷幕。
- 动效：允许动效时，库存填充宽度在 160ms 内缓动。覆盖层透明度在 140ms 内淡入淡出，位移不超过 8px。按钮不弹跳。
- 动效：在 prefers-reduced-motion 下，不绘制粒子，库存填充瞬间完成，覆盖层即时显示，风暴仅保留平坦尘埃帷幕。放置、移除和 sol 结算保持即时。
- 动效：标签页隐藏时停止动画帧。不摇晃画布、不闪烁帷幕、不自动播放声音。
- 图像：在 canvas 和内联 SVG 中绘制环形山、边缘、巨石、四种结构类型、选中态、尘埃、风暴帷幕、favicon 和建造栏图标。不使用照片、生成图像、下载纹理或精灵图。首屏的锚点是锈色盆地上居中的栖息地穹顶，玻璃 HUD 已在其周围清晰可读。

## 页面与区块
### [BRAND] — [CRATER] (`index.html`)
1. **实时陨石坑上方的标题栏** — 文档标题为 [BRAND] — [CRATER]。标题与游玩共用一个框架：一块全出血画布，以及在 1100px 及以上宽度时显示的两列 320px 玻璃栏。不要在栏上方再添加第二张卡片。在 Open 或 Resume 之前，左栏依次以眉题、[BRAND]、[CRATER]、[TAGLINE]、正文、Open the basin 和 Resume survey 开头，然后仍显示 SOL 1、预报 Storm in 7 sols、人口行以及四项初始库存。右栏显示四张建造卡、Remove 和 Advance sol，可见且以 55% 不透明度处于 aria-disabled 状态。中央画布是新游戏陨石坑，栖息舱位于第 5 列、第 6 行，处于两栏之间的开放空隙中。低于 1100px 时，画布保持在顶部，以便穹顶仍然可见，底部面板以相同的标题块开头，然后是紧凑库存和禁用的拇指栏。眉题是考察队名称，不带前置的 the，使用大写 Outfit 字体，字距 0.16em。默认情况下即为 AMBERLINE SURVEY。正文：Place one structure a sol. Keep oxygen, power, water, and morale above empty until 50 colonists have beds. Resume survey 始终可见，无存档时禁用。如果存在存档，Open the basin 会询问 Replace the saved survey of [BRAND]?，并提供 Replace 和 Keep it。在 Open 或 Resume 之后，移除标题操作和正文，保留品牌块，并启用建造控件。如果构建提供了署名字符串，将其作为安静的 Clay 文本显示在标题按钮下方以及帮助底部。否则省略。不要虚构署名、日期或价格。
   布局：桌面栏为绝对定位，全视口高度，Glass 90% 不透明度，20px 内边距，朝向陨石坑的边缘有 1px 铜色边框，35% 不透明度。主按钮为铜色，Panel 墨色文字，高 48px。次按钮为透明铜色描边。焦点环为 2px 铜色，偏移 2px。移动端面板为全宽，仅顶部两角有 12px 圆角，且不遮挡画布中心。
   动效：首次绘制陨石坑后，栏在 140ms 内淡入。它们不浮动也不滑动。减少动效时在首次绘制即显示。
2. **等距陨石坑网格** — 网格为 12 乘 12，列 c 和行 r 从 0 到 11。列向东递增，行向南递增。对每个单元格，d2 = (c * 2 - 11) 的平方加上 (r * 2 - 11) 的平方。如果 d2 大于 128，该单元格为虚空，不绘制。如果 d2 大于 84，则为边缘，不可建造。否则为地面，但巨石单元格 (2,4)、(8,3)、(4,9)、(9,7)、(3,7) 和 (7,8) 除外，它们是被阻挡的地面。即 62 个可建造地面单元格、6 块巨石和 28 个边缘单元格。正确的地形函数必须匹配这些计数。新游戏在 (5,6) 放置一个栖息舱，不放置其他任何东西。适配前瓦片宽度为 72，瓦片高度为 36。偏移前的屏幕位置为 x = (c - r) * 36，y = (c + r) * 18。按 (c + r) 升序绘制非虚空单元格。地面填充按 (c * 3 + r) 对 3 取模循环使用 Regolith、Regolith mid 和 Regolith dark，并带有 1px 描边 rgba(62,32,24,0.45)。边缘使用 Rim 绘制顶部菱形，以及一个低 7px（缩放前像素）的南面，填充 Rim face。巨石先绘制地面菱形，然后在瓦片中心周围绘制三个圆：半径 10 位于 (-6,-4)，颜色 #6A3E30；半径 8 位于 (7,-1)，颜色 Rim；半径 7 位于 (0,6)，颜色 #4A2C22；并在第一个圆上添加 Dust 高光。网格后方的画布是从 #2A1A14 到 Basalt 的垂直渐变，以及一个 20% alpha 的 #6E3B2C 宽椭圆。将非虚空菱形的包围盒适配到可游玩画布矩形内，留 16px 内边距，统一缩放上限 1.35，居中。在 1100px 及以上宽度时，该矩形为视口左右各内缩 320px、上下各内缩 24px。低于该宽度时，该矩形为画布元素。
   布局：一个画布元素填满视口，位于 HTML HUD 下方。将其位图尺寸设为 CSS 尺寸乘以封顶的设备像素比，并缩放上下文。在调整大小时重建适配。命中测试反转适配：fx = x / 36，fy = y / 18，c = round((fx + fy) / 2)，r = round((fy - fx) / 2)。忽略虚空。状态行报告指针或键盘光标下的单元格。
   动效：网格本身不动画。只有尘埃、风暴幕和选中描边在两次绘制之间变化。
3. **四种结构与相邻关系** — 每个结构占据一个地面单元格。正交邻居计入。对角线、边缘、虚空和巨石不计入。太阳能板的阴影是正交栖息舱和温室的数目。晴朗太阳能产出为 max(2, 10 - 3 * shade)。风暴太阳能产出为 max(1, 5 - 2 * shade)。无遮挡阵列晴朗为 10，沙尘中为 5。一个高邻居使其变为 7 和 3。两个变为 4 和 1。三个或四个保持最小值，2 和 1。温室在至少一个正交邻居为栖息舱时产生 16 氧气，否则产生 8。它始终消耗 4 电力、2 水，并在电网供电时提供 2 士气。钻机产生 20 水，消耗 3 电力，并在供电时消耗 1 士气，每有一个正交栖息舱再额外消耗 2。栖息舱容纳 8 人睡眠，消耗 2 电力和 1 水，提供 1 士气。钻机不会给太阳能板造成阴影。以 72 宽瓦片的瓦片局部像素绘制，然后乘以适配缩放。栖息舱：裙边椭圆 (0,6, rx 20, ry 8) 颜色 Copper deep，穹顶 (0,-2, rx 18, ry 12) 颜色 Copper，门矩形 (-3,2, 6 乘 8) 颜色 Rim face，窗户 (-6,-6, 12 乘 3) 颜色 Parchment。太阳能板：桅杆从 (0,4) 到 (0,-14) 颜色 Clay，面板经过 (-16,-18)、(10,-18)、(18,-8)、(-8,-8)，填充 Array cell 并描边 Copper。温室：底座椭圆 (0,6, rx 18, ry 7) 颜色 Rim face，拱顶椭圆 (0,-2, rx 16, ry 11) 颜色 Sage 85%，带 Array cell 描边，窗格线位于 x -5 和 5。钻机：底座椭圆 (0,8, rx 14, ry 6) 颜色 Rim，塔架矩形 (-4,-16, 8 乘 24) 颜色 Clay，环箍 (-6,-6, 12 乘 4) 颜色 Copper，钻孔椭圆 (0,-16, rx 4, ry 3) 颜色 Ice。待定放置以 50% alpha 绘制。选中单元格为 2px Copper 菱形。非法单元格为 2px Warning 菱形，且不消耗行动。
   布局：建造栏图标为内联 SVG，使用相同的轮廓和十六进制颜色，28px，不是无关对象的 Lucide 图片。HUD 状态行使用键盘光标或悬停的单元格。示例：Column 5, row 6 · Habitat。Column 2, row 4 · Boulder。Open floor · Solar yield 10 clear / 5 dust。边缘和虚空从不显示产出。
   动效：幽灵和选中无脉冲。减少动效不改变绘制。
4. **Sol 推进、风暴、增长、胜利与失败** — 将所有这些保留在 sim.ts 中，并为预览和 Advance sol 调用它。库存为 0 到 100 的整数。新游戏：sol 1，人口 6，氧气 74，电力 46，水 64，士气 68，一个栖息舱位于 (5,6)。风暴在 sol 8 到 11、18 到 21、30 到 33、44 到 47、60 到 63 和 78 到 81 期间活跃，然后在从 96、114、132 等开始、步长 18 的每四个 sol 的连续段中活跃。供给是风暴期间风暴产出之和，否则为晴朗产出之和。需求为栖息舱 * 2 + 温室 * 4 + 钻机 * 3，在待定行动之后计数。当电力 + 供给至少为需求时，电网供电。如果供电，电力变化为供给减需求，水变化为钻机水减栖息舱和温室水减人口，氧气变化为温室氧气减人口，士气变化为栖息舱和温室士气减钻机惩罚。如果未供电，温室和钻机闲置：它们在该 sol 不增加也不消耗任何东西，电力变化为供给减栖息舱 * 2，水变化为减栖息舱减人口，氧气变化为减人口，士气变化为栖息舱减 6。然后，使用增长前的人口和行动后的住房，当人口小于或等于住房 - 8 时增加 2 士气，当人口等于住房且住房为正时减去 4，风暴期间减去 8。将每项库存钳制在 0 到 100。如果任何库存为 0，推进失败且人口不增长。否则，如果电网供电且每项库存至少为 35 且人口低于住房和 50，人口增长 min(2, housing - population, 50 - population)。然后 sol 增加 1。失败的推进不会提交。失败对话框显示钳制后的结果和刚刚尝试的 sol。Retry 和 Leave 丢弃它。Retry 还会清除待定行动并返回到 sol 开始时的快照。Leave 删除存档并返回到新游戏陨石坑的标题。成功的推进提交、替换快照、清除待定行动并保存。如果人口现在至少为 50 且本次运行中尚未关闭胜利，打开胜利对话框。后续 sol 不会再次打开它。新游戏的必需检查：通过 sol 1 落在氧气 68、电力 44、水 57、士气 69、人口 8、sol 2。放置一个无阴影太阳能板并推进落在氧气 68、电力 54、水 57、士气 69、人口 8、sol 2。与起始栖息舱正交的太阳能板，例如 (6,6)，产出 7 晴朗，因此电力落在 51，其他结果相同。
   布局：预览行显示 O2 74 到 68、PWR 46 到 54、匹配的水和士气数值，以及人口 6 到 8，使用待定行动。无阴影太阳能板显示电力 46 到 54。跳过显示电力 46 到 44。将下降的数字使用 Clay；低于 25 的结果使用 Warning 并加后缀 LOW；结果为 0 时将 Advance sol 变为 Warning 中的 Advance anyway。按钮仍然有效。不要在组件内重复公式。
   动效：结算是一次状态变化加上库存缓动。没有逐 sol 动画，也没有自动额外推进。
5. **HUD、预报、日志、胜利与失败** — 运行开始后，左栏为游玩栏。在标题期间，相同的读数位于标题操作下方，右栏保持禁用。游玩栏从上到下：铜环标记、[BRAND]、[CRATER]、sol 标签 SOL（字距大写）位于 Fraunces 数字上方、预报芯片、人口行、四项库存和最新日志行。开始时人口显示 6 colonists · 8 beds · goal 50，之后显示实时数字。sol 1 的预报为 Storm in 7 sols。风暴期间为 Dust storm · N sols left，计入当前 sol，因此 sol 8 显示 4 sols left，sol 11 显示 1 sol left。计数为 1 时使用 sol，而非 sols。库存为 Oxygen、Power、Water 和 Morale，每项带有等宽整数、8px 轨道 #3A2A22，以及 Sage、Copper、Ice 或 Morale clay 的填充。右栏：四张建造卡和 Remove。副标题：Habitat, Sleeps 8 · power -2 · water -1。Solar array, 10 power · 5 in dust · shade cuts both。Greenhouse, 8 oxygen · 16 beside a habitat。Ice drill, 20 water · quieter away from beds。Remove, Clear one structure this sol。然后是 Undo，仅在存在待定行动时显示，以及 Advance sol。在新运行的首次推进之前，提示为 Place a solar on open ground, then advance。之后为 One change per sol, or none。每个成功 sol 后显示一个 toast，2.2 秒，按此优先级：电力不足时显示 Power ran short. Drills and greenhouses sat this sol out. 否则如果该 sol 开始了风暴，显示 Dust fills [CRATER]. Arrays are on their storm yield. 否则如果该 sol 结束了风暴，显示 The dust thins over [CRATER]. Arrays return to clear yield. 否则如果人口增长，显示 [BRAND] adds N. Population P. 否则如果床位已满且人口低于 50，显示 Beds are full. Place a habitat before the next arrivals. 否则如果增长因某项库存而等待，按该平局顺序指出 Oxygen、Power、Water 和 Morale 中低于 35 的最低项，例如 Oxygen is under 35. Growth waits. 否则显示 Sol N closes quiet。胜利标题为 The basin holds。正文：[BRAND] houses 50 colonists. [CRATER] still has air, current, water, and a crew that will stay. 然后是 [TAGLINE] 和 Sol N from [EXPEDITION]，其中 N 是已结算的 sol。按钮：Keep surveying 和 Found again。Found again 会确认，然后重置为新游戏。失败标题：The expedition folds。氧气：Oxygen hit zero. The domes go quiet。电力：Power hit zero and the batteries are flat。水：The cistern hit zero。士气：Morale hit zero. The crew will not work another sol。然后是 Sol N is the last one logged for [BRAND]。按钮：Retry this sol 和 Leave the crater。如果多项库存为零，按氧气、电力、水、士气顺序列出。Toast 和对话框指出刚刚结算的 sol。SOL 数字显示现在正在规划的 sol，成功推进后高一位。
   布局：桌面栏为 320px 玻璃，全高，位于画布上方。推进按钮高 52px，占满右栏宽度。移动端，低于 1100px：一个 48px 顶栏，包含 [BRAND] 和 sol 数字，其下为画布，然后是一个面板，包含 2 乘 2 库存网格、人口和预报在一行、提示、48px 推进按钮，以及一个五按钮拇指栏，标签为 Habitat、Solar、Greenhouse、Drill 和 Remove。面板加顶栏必须在 390x844 下为画布留下至少 240px 高度。对话框为 440px 玻璃卡片居中，或在移动端为底部面板，最多 70dvh，带有 45% 的 Basalt 遮罩，以便陨石坑保持可见。帮助、失败和胜利会捕获焦点，并将焦点返回到打开它们的按钮。
   动效：Toast 仅淡入淡出。胜利和失败对话框在 140ms 内淡入。减少动效时为即时。风暴幕是画布，不是 CSS 闪烁。
6. **建造操作、指针、键盘和触摸** — 一个 sol 允许一次成功放置、一次成功移除或一次跳过。选择工具不消耗它。合法的放置或移除存储待定行动并消耗它。Undo，或再次点击待定结构，会清除它。Advance 结算任何待定内容，或跳过。工具为 1 栖息舱、2 太阳能板、3 温室、4 钻机、X 移除、U 或 Backspace 撤销、Escape 清除工具、N 推进、H 打开帮助、M 切换声音。方向键移动一个 Copper 单元格光标，在首次按方向键前保持隐藏，然后仅在非虚空单元格之间循环。Enter 在该光标上放置或移除。对话框打开或按钮聚焦时忽略这些键，并阻止页面滚动。指针：使用建造工具点击地面单元格进行放置，使用 Remove 点击结构进行移除，右键单击清除工具。非法点击不消耗行动。状态文案：Crater wall. Build on the basin floor. A boulder sits on this cell. That cell is already built. Remove it on its own sol. People still need those beds. Nothing to remove. One change per sol. Undo it or advance. 当人口将超过剩余床位时，阻止移除栖息舱。触摸使用拇指栏。选中的工具保持选中，直到选择另一个工具、成功的待定行动或 Escape。待定放置后，进一步点击不会添加第二个结构。目标至少 48px。指针、键盘和触摸都调用相同的放置和移除函数。
   布局：桌面建造卡在右栏堆叠，间距 8px，选中卡左侧有 3px Copper 边框。移动端工具共享一行，等宽，高 68px，选中工具顶部有 3px Copper 边框。键盘光标和悬停状态从不覆盖推进按钮。在粗指针上隐藏桌面键位提示 1-4 build · X remove · arrows · Enter place · N advance。
   动效：选中颜色与输入在同一帧变化。无延迟，触摸上无粘滞悬停。
7. **存档、帮助、音频和无障碍** — 存档键为 colony-save: 加上 BRAND 的 slug，小写，非字母数字折叠为单个连字符。默认键为 colony-save:hearthline。在每次成功推进后、关闭胜利时以及 Found again 重置时保存。不要保存失败的推进或待定行动。形状版本 1：sol、population、oxygen、power、water、morale、buildings 为 c、r 和 kind、wonDismissed 和 version。缺失或不匹配的版本被忽略。声音偏好是单独的布尔值 colony-sound: 加上相同的 slug，默认 false。Resume survey 将存档加载到 HUD 并关闭标题操作，而不重置 sol。帮助标题：One sol, one change。介绍：Built for [AUDIENCE]。然后是名册句子。默认名册：Nia Calder leads the survey, Omar Voss runs the drills, and Priya Sen keeps the greenhouse bench。Saltmere 名册：Imani Okonkwo leads the survey, Leo Hart runs the drills, and June Pell keeps the greenhouse bench。帮助然后列出产出、阴影示例、风暴日历、增长规则、失败规则和控制，使用与 sim.ts 相同的数字。包含 sol 1 的完整跳过示例，以便玩家检查预览：oxygen 68, power 44, water 57, morale 69, population 8。声音保持关闭，直到玩家打开。在下一次手势时，创建一个 AudioContext。提示音为增益 0.04 或更低的短振荡器：放置为 740Hz 正弦波 50ms，移除为 196Hz 正弦波 70ms，推进为三角波从 330Hz 到 440Hz 持续 90ms，增长为两个正弦波 523Hz 和 659Hz 持续 80ms，间隔 40ms，胜利为 523、659、784 和 1046Hz 各 100ms，失败为 220Hz 然后 146Hz 持续 140ms，风暴开始为 280ms 的种子噪声缓冲通过 400Hz 带通。增益在 20ms 内渐变。无音频文件，无自动播放。每个提示音也有可见反馈。画布为 aria-hidden。一个礼貌的实时区域播报 toast、失败标题和胜利标题。对话框为真实 HTML，有标签，Escape 关闭帮助。如果无法创建画布上下文，显示一个 Glass 面板，内容为 This browser could not start the crater view.，并保持帮助按钮可用，不在循环中抛出异常。
   布局：帮助为 560px 面板。移动端为底部面板，内部滚动。实时区域和帮助文本在标题屏幕和运行中均可用。可选的署名行（如果提供）也位于帮助底部。
   动效：音频不依赖尘埃运动。减少动效时，声音开启仍允许提示音，因为每个提示音是单个短音，且幕不闪烁。
8. **尘埃、响应式适配和减少动效** — 使用 mulberry32 从 0xC1A0E11 开始播种尘埃，并在陨石坑边界内一次性放置 32 个粒子。每个粒子是半径 4 到 12 的椭圆，颜色 Dust，0.12 alpha。每帧向右漂移 0.6 CSS 像素并环绕。风暴期间，绘制 64 个粒子，0.22 alpha，然后在结构上方绘制全画布 Dust 填充，0.18 alpha。绘制顺序为背景、地形、巨石、结构、选中、粒子、风暴幕。HTML HUD 不绘制到画布中。在 1440x900 下，中央栖息舱在两栏之间完全可见，且没有栏文本溢出。在 390x844 下，穹顶在画布中，拇指栏在拇指区域，且没有水平页面滚动。库存显示整数、名称和 LOW，因此颜色从不是唯一信号。风暴状态始终是预报句子。
   布局：在 1440x900 下，第 5 列、第 6 行的栖息舱位于两栏之间的开放画布中，完全可见，不在其下方。移动端面板顺序固定：仅在运行尚未开始时显示标题块，然后是库存、预报和床位、提示、推进、工具和安全区域。
   动效：使用 prefers-reduced-motion 时，跳过粒子放置和动画帧。风暴仅为 0.18 的幕。调整大小仍重绘一次。

## 资产
- 图像：没有下载或生成的图像文件。使用 Design 中的十六进制色值，在 canvas 和 SVG 中绘制陨石坑、坑缘、巨石、居住舱、太阳能阵列、温室、冰钻、尘埃、风暴幕、选择框以及 public/favicon.svg。在 ASSETS.md 中记录：场景美术和 favicon 均为代码绘制，未使用任何外部图像。
- 图标：建造栏图标是四种结构和一条简单移除斜线的原创内联 SVG 剪影，使用 Design 中的十六进制色值。帮助、声音、撤销和关闭仅使用本地安装的 lucide-react 包（ISC）中的 CircleHelp、Volume2、VolumeX、Undo2 和 X。在 ASSETS.md 中列出这些图标模块、https://www.npmjs.com/package/lucide-react、Lucide contributors 以及 ISC 许可证。
- 字体：通过 @fontsource-variable/fraunces 和 @fontsource-variable/outfit 自托管 Fraunces 和 Outfit，并通过 @fontsource/ibm-plex-mono（OFL-1.1）自托管 IBM Plex Mono 500。仅导入这些字重。在 ASSETS.md 中列出这些包生成的本地文件、npm 包页面、随包附带的 OFL 声明中的版权持有人以及 OFL 许可证。不向 fonts.googleapis.com 或任何其他字体主机发起请求。
- 视频：没有视频，也没有音频文件。可选提示音在玩家开启声音后由浏览器通过 Web Audio 合成。

## 禁止事项
- 不要添加后端、服务器路由、账户、数据库、分析、排行榜、多人模式或任何网络调用。唯一的持久化是 localStorage 中的殖民地存档和声音标志。
- 不要更改技术栈。不要使用 Unity、Godot、Phaser、three.js、Pixi、物理引擎、GSAP、Motion 或第二个页面。构建使用 Vite 5、React 18、TypeScript、Tailwind CSS 3.4 和一个 canvas。
- 仅将静态文件发布到 dist/。Vite base 为 './'，链接使用文件名，资源使用相对路径，构建经过压缩，source map 关闭，src 不被复制，dist 保持在 20 MB 以下。
- 不要从 CDN 加载脚本、字体、图标、图像、音频或瓦片。不要热链或下载火星照片、地图或纹理。陨石坑、结构和风暴均以代码绘制。
- 不要使用商业字体或字体 CDN。Fraunces、Outfit 和 IBM Plex Mono 仅来自 Fontsource 包。
- 不要复制现有的殖民地、地球化改造或生存城市游戏：不得使用 Surviving Mars、Per Aspera、Terraforming Mars、Oxygen Not Included 或 Frostpunk 的名称、标志、穹顶套件、无人机、赞助商徽章、突破卡或界面布局。
- 不要使用 NASA、ESA、JPL、SpaceX 或任何真实机构或公司的标志、徽章、漫游车、着陆器或任务名称作为殖民地、陨石坑或探险队的名称。不要引用关于火星的电影或书籍台词，包括《火星救援》，也不要绘制真实宇航员或任何名人。
- 不要添加单个殖民者 AI、肖像、研究树、无人机、战斗、武器、金钱成本、随机事件或程序化地图。风暴、生长和陨石坑是 sim.ts 中的固定规则。
- 不要在 src/content.ts 之外硬编码 Hearthline、Tallow Crater、Amberline Survey、默认标语或默认名册。当变量变化时，建筑名称和产出保持稳定。
- 不要让预览使用第二份经济系统。推进 sol、预览和失败检查调用同一个 tick 函数。新游戏必须通过 tick 部分中的 sol-1 检查。
- 不要自动播放音频、要求指针锁定或忽略 prefers-reduced-motion。尘埃和风暴帷幕不得遮挡栖息地或选择菱形。
- 不要让手机依赖悬停或键盘快捷键。拇指栏、点击放置和 48px 目标在 390x844 下正常工作且无水平溢出，桌面端在 1440x900 下可正常游玩。
- 不要在陨石坑前显示日期、价格、账户或营销页面。唯一可选的署名是提供的 credit 字符串。不要提及 VibeFather、模板许可证或成员数量。
- 不要添加 SEO 元数据、Open Graph 标签、JSON-LD、站点地图或堆砌关键词的标题。一个普通标题和 favicon 就足够了。
- 不要在缺少 canvas 上下文或存档损坏时抛出异常。忽略未知的存档版本，如果 canvas 无法启动，只显示一次回退面板。

---
— Prompt by VibeFather · https://vibefather.ai/t/mars-colony-builder-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
