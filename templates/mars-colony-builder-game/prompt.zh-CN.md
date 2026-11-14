> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 火星殖民地建造游戏

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，这是一款在 [CRATER] 中运行的单屏回合制殖民地游戏，由 [EXPEDITION] 建立。玩家在代码绘制的等距陨石坑上放置居住舱、太阳能阵列、温室和冰钻，然后一次推进一个火星日。氧气、电力、水和士气同步变化。沙尘暴持续四个火星日，并削减太阳能产出。只有当床位和全部四种库存都允许时，殖民者才会增加，上限为 50。网格和库存持久化在 localStorage 中。默认标语：[TAGLINE]。陨石坑、一个居住舱和一层尘雾已经显示在屏幕上，位于承载标题和 HUD 的玻璃柱之间。

- 受众：喜欢短小规划谜题的人，包括 [AUDIENCE]，以及想要一款自带键盘和触摸控制、自包含 canvas 游戏的独立开发者和前端开发者。帮助文本保持简短，第一场风暴出现在已知的火星日，失败的火星日可以重试。
- 目标：交付一个完整循环：一个位于实时陨石坑上方的标题柱，每个火星日一次结构变更，一个与 Advance sol 使用相同 tick 的预览，风暴，增长到 50，胜利覆盖层，失败远征覆盖层，从 localStorage 恢复，以及在 1440x900 和 390x844 下等效游玩。
- 语气：平静、务实、略带干涩，像一份小型勘测的现场日志。简短美式英语，具体产出，不用感叹号，不用史诗式殖民口号，也不开把任何人遗弃在行星上的玩笑。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react 18（MIT）、react-dom 18（MIT）、lucide-react（ISC）、@fontsource-variable/fraunces（OFL-1.1）、@fontsource-variable/outfit（OFL-1.1）、@fontsource/ibm-plex-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 初始化：
  - 使用 React TypeScript 模板搭建 Vite 5。脚本：dev=vite，build=tsc --noEmit && vite build，preview=vite preview。包名是 BRAND 的 slug。将 react 18、react-dom 18、lucide-react 以及三个 fontsource 包安装为运行时依赖。将 vite 5、typescript 5、tailwindcss 3.4、postcss 和 autoprefixer 安装为开发依赖。不要添加游戏引擎、路由、物理库、canvas 辅助库、补间库或音频文件。
  - vite.config.ts 将 base 设为 './'，build.outDir 设为 dist，build.emptyOutDir 设为 true，build.sourcemap 设为 false。tsconfig 的 strict 为 true。Tailwind content 覆盖 index.html 和 src。从设计（Design）部分扩展颜色和字体系列。所有自定义 CSS、玻璃面板（glass panel）规则以及 prefers-reduced-motion 都放在 src/styles.css 中。
  - 在 src/main.tsx 中从 @fontsource-variable/fraunces 和 @fontsource-variable/outfit 导入 Fraunces variable 和 Outfit variable。从 @fontsource/ibm-plex-mono/500.css 导入 IBM Plex Mono 500。将它们映射到 font-display、font-sans 和 font-mono。绝不加载字体 CDN。
  - 使用 src/content.ts、sim.ts、draw.ts、audio.ts、save.ts、App.tsx、main.tsx 和 styles.css。sim.ts 是纯 TypeScript，不含 React，也不含 Math.random。draw.ts 负责 canvas 和带种子的尘埃（seeded dust）。App.tsx 负责工具选择、待处理操作、覆盖层和键盘焦点。每一句面向玩家的句子都放在 content.ts 中。
  - 如果 BRAND、CRATER、EXPEDITION、TAGLINE 或 AUDIENCE 与默认值不同，请重写名单、标题正文、胜利和失败句子以及日志行，使新的专有名词读起来自然。保留建筑名称、产出、网格、颜色和风暴日历。对于 Saltmere 这一组，名单确切为 Imani Okonkwo、Leo Hart 和 June Pell。对于任何其他非默认组，创造三个新人，并去掉 Nia Calder、Omar Voss、Priya Sen、Tallow 和 Amberline。绝不渲染原始方括号占位符。
  - 文档标题为 BRAND + ' — ' + CRATER。交付 public/favicon.svg，为一个小型等距菱形外围的铜色圆环，使用铜色和玄武岩色十六进制色值，并用相对 href 链接它。一个 index.html，无路由，无第二个页面。
  - 设备像素比上限为 2。当文档隐藏时暂停尘埃动画。卸载时释放音频上下文和动画帧。生产 dist 不含 source map、不复制 src，且保持在 20 MB 以下。

## 变量
- [BRAND] — 殖民地名称（默认："Hearthline"）。一个虚构的殖民地和游戏标题。绝不是真实的机构、公司、探测车或任务。
- [CRATER] — 陨石坑名称（默认："Tallow Crater"）。一个虚构的盆地名称，用于标题栏、预报提示和胜利文案中。
- [EXPEDITION] — 创建远征队（默认："the Amberline Survey"）。一个简短的虚构团体名称。眉题会去掉开头的 'the' 并将其余部分转为大写。
- [TAGLINE] — 殖民地标语（默认："Fifty beds against the dust."）。一行简短的原创文字，位于标题栏中殖民地名称下方以及胜利对话框上。
- [AUDIENCE] — 玩家受众（默认："players who like short planning puzzles"）。仅使用一次，在帮助介绍中。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接指向 https://vibefather.ai/t/mars-colony-builder-game（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 玄武岩（Basalt）`#14110F` — 页面背景、画布空白区域和对话框遮罩底色
- 玻璃（Glass）`#1C1814` — HUD 面板，90% 不透明度，带 14px 背景模糊
- 铜（Copper）`#E39B54` — 唯一强调色：栖息地穹顶、主按钮、选中态、焦点环、35% 不透明度的面板边框
- 深铜（Copper deep）`#A86B38` — 栖息地裙边、按钮按下态和穹顶阴影
- 风化层（Regolith）`#C4784E` — 最浅的盆地地面瓦片
- 中风化层（Regolith mid）`#B56545` — 中间色调的盆地地面瓦片
- 暗风化层（Regolith dark）`#A85A3C` — 最深的盆地地面瓦片
- 坑缘（Rim）`#5C3428` — 陨石坑壁顶部
- 坑缘面（Rim face）`#3F241C` — 陨石坑壁南面、门和温室基座
- 尘埃（Dust）`#C4A574` — 雾霾粒子、风暴幕帘和巨石高光
- 羊皮纸（Parchment）`#F3E6D4` — 主文本和栖息地窗户
- 陶土（Clay）`#B7A394` — 次要文本、太阳能桅杆和非激活工具标签
- 鼠尾草（Sage）`#8FB573` — 氧气条和温室窗格
- 冰（Ice）`#B7D0D6` — 水条和钻探孔
- 士气陶土（Morale clay）`#D9896A` — 士气条
- 警告（Warning）`#E07A5F` — 库存低于 25、无效单元格和“仍要继续”
- 面板墨色（Panel ink）`#1C120C` — 铜色按钮上的文字
- 阵列单元格（Array cell）`#3E4C55` — 太阳能板填充

### 字体排印
- 殖民地名称、胜利与失败标题、sol 数字：Fraunces（OFL），字重 600/700
- HUD 标签、帮助、按钮和正文：Outfit（OFL），字重 400/500/600
- 库存数字、预报和床位数量：IBM Plex Mono（OFL），字重 500

### 布局与动效
- 间距：以 4px 为单位。页面高度为 100dvh，不滚动。桌面端在 1100px 及以上时，在通栏画布上使用两个 320px 的玻璃栏，栏内边距 20px，陨石坑上下内边距 24px。低于 1100px（包括 390px）时，画布为顶部区域，底部面板承载 HUD，面板内边距 12px，按钮高度 48px，并适配安全区内边距。中央栖息地保持在两栏之间的开放画布中。
- 圆角：玻璃面板 12px，对话框 14px，按钮 10px，预报标签和库存轨道 999px。画布为直角且通栏。世界中的形状是菱形、穹顶和桅杆，而非圆角应用图标。
- 动效：尘埃是唯一的持续动效：32 个带种子的粒子以每帧 0.6 CSS 像素向右漂移，并在陨石坑边界内循环。风暴将数量提升至 64，并添加一层 0.18 alpha 的平坦尘埃幕帘。
- 动效：允许动效时，库存填充宽度在 160ms 内缓动。覆盖层在 140ms 内淡入淡出透明度，位移不超过 8px。按钮不弹跳。
- 动效：在 prefers-reduced-motion 下，不绘制粒子，库存填充瞬时到位，覆盖层即时显示，风暴仅保留平坦尘埃幕帘。放置、移除和 sol 结算保持即时。
- 动效：标签页隐藏时停止动画帧。不要晃动画布、闪烁幕帘或自动播放声音。
- 图像：陨石坑、坑缘、巨石、四种结构类型、选中态、尘埃、风暴幕帘、favicon 和建造栏图标均以 canvas 和内联 SVG 绘制。不使用照片、生成图像、下载纹理或精灵图。首屏的视觉锚点是锈色盆地中央的栖息地穹顶，玻璃 HUD 已在其周围清晰可读。

## 页面与区块
### [BRAND] — [CRATER] (`index.html`)
1. **实时陨石坑上方的标题栏** — 文档标题为 [BRAND] — [CRATER]。标题与游玩区域共用一个框架：一块全出血画布，以及在 1100px 及以上宽度时显示的两列 320px 玻璃栏。不要在栏上方再添加第二张卡片。在 Open 或 Resume 之前，左栏依次展示眉题、[BRAND]、[CRATER]、[TAGLINE]、正文、“Open the basin”和“Resume survey”，随后仍显示 SOL 1、预报“Storm in 7 sols”、人口行以及四项初始库存。右栏显示四张建造卡片、“Remove”和“Advance sol”，可见且 aria-disabled，透明度为 55%。中央画布是新游戏陨石坑，栖息舱位于第 5 列、第 6 行，处于两栏之间的开放空隙中。低于 1100px 时，画布保持在顶部，以便穹顶仍然可见，底部面板先显示相同的标题块，然后是紧凑库存和禁用的缩略条。眉题是考察队名称，不带前置的 the，使用大写 Outfit 字体，字距 0.16em。默认情况下即为 AMBERLINE SURVEY。正文：Place one structure a sol. Keep oxygen, power, water, and morale above empty until 50 colonists have beds. “Resume survey”始终可见，无存档时禁用。如果存在存档，“Open the basin”会询问“Replace the saved survey of [BRAND]?”，并提供“Replace”和“Keep it”。在 Open 或 Resume 之后，移除标题操作和正文，保留品牌块，并启用建造控件。如果构建提供了 credit 字符串，则将其作为安静的 Clay 文本显示在标题按钮下方以及帮助底部。否则省略。不要虚构 credit、日期或价格。
   布局：桌面端栏为绝对定位，占满视口高度，Glass 透明度 90%，内边距 20px，朝向陨石坑的边缘带 1px 铜色边框，透明度 35%。主按钮为铜色，Panel 墨色文字，高 48px。次按钮为透明铜色描边。焦点环为 2px 铜色，偏移 2px。移动端面板为全宽，仅顶部两角为 12px 圆角，且不遮挡画布中央。
   动效：首次绘制陨石坑后，栏在 140ms 内淡入。它们不浮动也不滑动。减少动效模式下在首次绘制时即显示。
2. **等距陨石坑网格** — 网格为 12 × 12，列 c 和行 r 从 0 到 11。列向东递增，行向南递增。对每个单元格，d2 = (c * 2 - 11) 的平方加 (r * 2 - 11) 的平方。如果 d2 大于 128，该单元格为 void，不绘制。如果 d2 大于 84，则为 rim，不可建造。否则为 floor，但巨石单元格 (2,4)、(8,3)、(4,9)、(9,7)、(3,7) 和 (7,8) 除外，它们是被阻挡的 floor。即 62 个可建造 floor 单元格、6 块巨石和 28 个 rim 单元格。正确的地形函数必须匹配这些计数。新游戏在 (5,6) 放置一个栖息舱，不放置其他任何东西。缩放适配前，瓦片宽度为 72，瓦片高度为 36。偏移前的屏幕位置为 x = (c - r) * 36，y = (c + r) * 18。按 (c + r) 升序绘制非 void 单元格。Floor 填充按 (c * 3 + r) 对 3 取模循环使用 Regolith、Regolith mid 和 Regolith dark，并带 1px 描边 rgba(62,32,24,0.45)。Rim 顶部菱形使用 Rim，南面在缩放前像素中低 7px，填充 Rim face。巨石先绘制 floor 菱形，然后在瓦片中心周围绘制三个圆：半径 10 位于 (-6,-4)，颜色 #6A3E30；半径 8 位于 (7,-1)，颜色 Rim；半径 7 位于 (0,6)，颜色 #4A2C22；并在第一个圆上加 Dust 高光。网格背后的画布为从 #2A1A14 到 Basalt 的垂直渐变，以及一个 #6E3B2C、20% alpha 的宽椭圆。将非 void 菱形的包围盒适配到可游玩画布矩形内，内边距 16px，统一缩放上限 1.35，居中。在 1100px 及以上宽度时，该矩形为视口左右各内缩 320px、上下各内缩 24px。低于该宽度时，该矩形为 canvas 元素。 
   布局：一个 canvas 元素填满视口，位于 HTML HUD 下方。将其位图尺寸设为 CSS 尺寸乘以封顶的设备像素比，并缩放上下文。在 resize 时重建适配。命中测试反转适配：fx = x / 36，fy = y / 18，c = round((fx + fy) / 2)，r = round((fy - fx) / 2)。忽略 void。状态行报告指针或键盘光标下的单元格。
   动效：网格本身不动画。只有尘埃、风暴帷幕和选择描边在两次绘制之间变化。
3. **四种结构与相邻关系** — 每种结构占据一个 floor 单元格。正交相邻才计数。对角线、rim、void 和巨石不计。太阳能板的阴影为相邻的正交栖息舱和温室数量。无阴影太阳能产出为 max(2, 10 - 3 * shade)。风暴太阳能产出为 max(1, 5 - 2 * shade)。无遮挡阵列在晴朗时为 10，在尘埃中为 5。一个高邻居使其变为 7 和 3。两个使其变为 4 和 1。三个或四个保持最小值，2 和 1。温室在至少一个正交邻居为栖息舱时产出 16 氧气，否则产出 8。它始终消耗 4 电力、2 水，并在电网供电时提供 2 士气。钻机产出 20 水，消耗 3 电力，并在供电时消耗 1 士气，每有一个正交栖息舱再额外消耗 2。栖息舱可睡眠 8 人，消耗 2 电力和 1 水，并提供 1 士气。钻机不会给太阳能板造成阴影。以 72 宽瓦片的瓦片局部像素绘制，然后乘以适配缩放。栖息舱：裙边椭圆 (0,6, rx 20, ry 8)，颜色 Copper deep；穹顶 (0,-2, rx 18, ry 12)，颜色 Copper；门矩形 (-3,2, 6 × 8)，颜色 Rim face；窗户 (-6,-6, 12 × 3)，颜色 Parchment。太阳能板：桅杆从 (0,4) 到 (0,-14)，颜色 Clay；面板经过 (-16,-18)、(10,-18)、(18,-8)、(-8,-8)，填充 Array cell，描边 Copper。温室：底座椭圆 (0,6, rx 18, ry 7)，颜色 Rim face；拱顶椭圆 (0,-2, rx 16, ry 11)，颜色 Sage，85% 不透明度，带 Array cell 描边；窗格线位于 x -5 和 5。钻机：底座椭圆 (0,8, rx 14, ry 6)，颜色 Rim；塔身矩形 (-4,-16, 8 × 24)，颜色 Clay；环箍 (-6,-6, 12 × 4)，颜色 Copper；钻孔椭圆 (0,-16, rx 4, ry 3)，颜色 Ice。待放置项以 50% alpha 绘制。选中单元格为 2px Copper 菱形。非法单元格为 2px Warning 菱形，且不消耗行动。
   布局：建造栏图标为内联 SVG，使用相同的轮廓和十六进制色值，尺寸 28px，而不是 Lucide 中无关对象的图片。HUD 状态行使用键盘光标或悬停单元格。示例：Column 5, row 6 · Habitat。Column 2, row 4 · Boulder。Open floor · Solar yield 10 clear / 5 dust。Rim 和 void 从不显示产出。
   动效：幽灵和选择没有脉冲。减少动效模式不改变绘制。
4. **Sol 推进、风暴、增长、胜利与失败** — 将所有这些都放在 sim.ts 中，并为预览和 Advance sol 两者调用。库存为 0 到 100 的整数。新游戏：sol 1，人口 6，氧气 74，电力 46，水 64，士气 68，一个栖息舱位于 (5,6)。风暴在第 8 至 11、18 至 21、30 至 33、44 至 47、60 至 63 和 78 至 81 个 sol 期间活跃，之后在从 96、114、132 等开始、步长为 18 的每四个 sol 的区间内活跃。供给是风暴期间风暴产出之和，否则为晴朗产出。需求为栖息舱 * 2 + 温室 * 4 + 钻机 * 3，在待处理动作之后计算。当电力 + 供给至少达到需求时，电网通电。如果通电，电力变化为供给减去需求，水变化为钻机水减去栖息舱和温室水再减去人口，氧气变化为温室氧气减去人口，士气变化为栖息舱和温室士气减去钻机惩罚。如果未通电，温室和钻机闲置：它们在该 sol 不增加任何东西也不消耗任何东西，电力变化为供给减去栖息舱 * 2，水变化为减去栖息舱再减去人口，氧气变化为减去人口，士气变化为栖息舱减去 6。然后，使用增长前的人口和动作后的住房，当人口小于或等于住房 - 8 时增加 2 士气，当人口等于住房且住房为正时减去 4，风暴期间减去 8。将每个库存限制在 0 到 100。如果任何库存为 0，则该 tick 失败且人口不增长。否则，如果电网通电且每个库存至少为 35 且人口低于住房和 50 两者，人口增长 min(2, 住房 - 人口, 50 - 人口)。然后 sol 增加 1。失败的 tick 不会被提交。失败对话框显示限制后的结果和刚刚尝试的 sol。Retry 和 Leave 会丢弃它。Retry 还会清除待处理动作并返回到 sol 开始时的快照。Leave 删除存档并返回到新游戏陨石坑上的标题。成功的 tick 会提交、替换快照、清除待处理动作并保存。如果人口现在至少为 50 且本次运行中胜利尚未被关闭，则打开胜利对话框。后续 sol 不会再次打开它。新游戏的必需检查：通过 sol 1 落在氧气 68、电力 44、水 57、士气 69、人口 8、sol 2。放置一个无阴影太阳能并推进落在氧气 68、电力 54、水 57、士气 69、人口 8、sol 2。一个与起始栖息舱正交的太阳能，例如 (6,6)，产出 7 晴朗，因此电力落在 51，其他结果相同。
   布局：预览行显示 O2 74 到 68、PWR 46 到 54、匹配的水和士气数值，以及人口 6 到 8，使用待处理动作。无阴影太阳能显示电力 46 到 54。跳过显示电力 46 到 44。将下降的数字使用 Clay；低于 25 的结果使用 Warning 并带后缀 LOW；结果为 0 时将 Advance sol 变为 Warning 中的 Advance anyway。按钮仍然有效。不要在组件内重复公式。
   动效：解析是单次状态变更加上库存缓动。没有逐 sol 动画，也没有自动额外 tick。
5. **HUD、预报、日志、胜利与失败** — 运行开始后，左列为游玩列。在标题期间，相同的读数位于标题动作下方，右列保持禁用。游玩列，从上到下：铜环标记、[BRAND]、[CRATER]、sol 标签 SOL 以字距大写形式位于 Fraunces 数字上方、预报芯片、人口行、四个库存，以及最新日志行。人口在开始时显示 6 colonists · 8 beds · goal 50，之后显示实时数字。sol 1 的预报为 Storm in 7 sols。风暴期间为 Dust storm · N sols left，计入当前 sol，因此 sol 8 显示 4 sols left，sol 11 显示 1 sol left。当计数为 1 时使用 sol，而非 sols。库存为 Oxygen、Power、Water 和 Morale，每个都有一个等宽整数、一个 #3A2A22 的 8px 轨道，以及 Sage、Copper、Ice 或 Morale clay 的填充。右列：四张建造卡和 Remove。副标题：Habitat, Sleeps 8 · power -2 · water -1。Solar array, 10 power · 5 in dust · shade cuts both。Greenhouse, 8 oxygen · 16 beside a habitat。Ice drill, 20 water · quieter away from beds。Remove, Clear one structure this sol。然后是 Undo，仅在存在待处理动作时显示，以及 Advance sol。在新运行的第一次推进之前，提示为 Place a solar on open ground, then advance。之后为 One change per sol, or none。每个成功 sol 后显示一个 toast，2.2 秒，按此优先级：限电显示 Power ran short. Drills and greenhouses sat this sol out。否则如果该 sol 开始了风暴，Dust fills [CRATER]. Arrays are on their storm yield。否则如果该 sol 结束了风暴，The dust thins over [CRATER]. Arrays return to clear yield。否则如果人口增长了，[BRAND] adds N. Population P。否则如果床位已满且人口低于 50，Beds are full. Place a habitat before the next arrivals。否则如果增长等待某个库存，按该并列顺序命名 Oxygen、Power、Water 和 Morale 中低于 35 的最低者，如 Oxygen is under 35. Growth waits。否则 Sol N closes quiet。胜利标题为 The basin holds。正文：[BRAND] houses 50 colonists. [CRATER] still has air, current, water, and a crew that will stay。然后是 [TAGLINE] 和 Sol N from [EXPEDITION]，其中 N 是已解析的 sol。按钮：Keep surveying 和 Found again。Found again 会确认，然后重置为新游戏。失败标题：The expedition folds。Oxygen：Oxygen hit zero. The domes go quiet。Power：Power hit zero and the batteries are flat。Water：The cistern hit zero。Morale：Morale hit zero. The crew will not work another sol。然后是 Sol N is the last one logged for [BRAND]。按钮：Retry this sol 和 Leave the crater。如果多个库存为零，按 oxygen、power、water、morale 顺序命名它们。Toast 和对话框命名刚刚解析的 sol。SOL 数字显示现在正在规划的 sol，成功 tick 后高一个。
   布局：桌面列为 320px 玻璃，全高，位于画布上方。推进按钮高 52px，占右列全宽。移动端，低于 1100px：一个 48px 顶栏，包含 [BRAND] 和 sol 数字，画布在其下方，然后是一个面板，包含 2 乘 2 库存网格、人口和预报在一行、提示、一个 48px 推进按钮，以及一个五按钮拇指栏，标签为 Habitat、Solar、Greenhouse、Drill 和 Remove。面板加顶栏必须在 390x844 下为画布留下至少 240px 高度。对话框为 440px 玻璃卡居中，或在移动端为底部面板，最多 70dvh，带有 45% 的 Basalt 遮罩，以便陨石坑保持可见。Help 和失败及胜利会捕获焦点并将焦点返回到打开它们的按钮。
   动效：Toast 仅淡入淡出。胜利和失败对话框在 140ms 内淡入淡出。减少动效时为即时。风暴帷幕是画布，而非 CSS 闪光。
6. **建造动作、指针、键盘和触摸** — 一个 sol 允许一次成功放置、一次成功移除或一次跳过。选择工具不会消耗它。合法的放置或移除会存储待处理动作并消耗它。Undo，或再次点击待处理结构，会清除它。Advance 解析任何待处理内容，或跳过。工具为 1 habitat、2 solar、3 greenhouse、4 drill、X remove、U 或 Backspace undo、Escape 清除工具、N 推进、H 打开帮助、M 切换声音。方向键移动一个 Copper 单元格光标，该光标在第一次按方向键前保持隐藏，然后仅在非虚空单元格之间循环。Enter 在该光标上放置或移除。当对话框打开或按钮聚焦时忽略这些键，并为它们阻止页面滚动。指针：使用建造工具点击地板单元格进行放置，使用 Remove 点击结构进行移除，右键单击清除工具。非法点击不会消耗动作。状态文案：Crater wall. Build on the basin floor。A boulder sits on this cell。That cell is already built. Remove it on its own sol。People still need those beds。Nothing to remove。One change per sol. Undo it or advance。当人口将超过剩余床位时，移除栖息舱会被阻止。触摸使用拇指栏。选中的工具保持选中，直到另一个工具、成功的待处理动作或 Escape。在待处理放置之后，进一步点击不会添加第二个结构。目标至少为 48px。指针、键盘和触摸都调用相同的放置和移除函数。
   布局：桌面建造卡在右列堆叠，间距 8px，选中的卡片有 3px Copper 左边框。移动端工具共享一行，等宽，高 68px，选中的工具有 3px Copper 上边框。键盘光标和悬停状态永远不会覆盖推进按钮。在粗指针上隐藏桌面键位提示 1-4 build · X remove · arrows · Enter place · N advance。
   动效：选择颜色在与输入相同的帧上变化。无延迟，触摸上无粘性悬停。
7. **保存、帮助、音频与无障碍** — 保存键为 colony-save: 加上 BRAND 的 slug，小写，非字母数字字符折叠为单个连字符。默认键为 colony-save:hearthline。每次成功 tick 后、胜利被关闭时、以及 Found again 重置时保存。不要保存失败的 tick 或待处理操作。形状版本 1：sol、population、oxygen、power、water、morale、buildings（作为 c、r 和 kind）、wonDismissed 和 version。缺失或不匹配的版本会被忽略。声音偏好是单独的布尔值 colony-sound: 加上相同的 slug，默认 false。Resume survey 将存档加载到 HUD 并关闭标题操作，不重置 sol。帮助标题：One sol, one change。引言：Built for [AUDIENCE]。然后是名册句子。默认名册：Nia Calder leads the survey, Omar Voss runs the drills, and Priya Sen keeps the greenhouse bench。Saltmere 名册：Imani Okonkwo leads the survey, Leo Hart runs the drills, and June Pell keeps the greenhouse bench。帮助随后列出产出、阴影示例、风暴日历、生长规则、失败规则和控制方式，使用与 sim.ts 相同的数字。包含 sol 1 的完整通过示例，以便玩家核对预览：oxygen 68、power 44、water 57、morale 69、population 8。声音保持关闭，直到玩家开启。在下一次手势时，创建一个 AudioContext。提示音是增益 0.04 或更低的短振荡器：放置为 740Hz 正弦波持续 50ms，移除为 196Hz 正弦波持续 70ms，推进为三角波从 330Hz 到 440Hz 持续 90ms，生长为两个正弦波 523Hz 和 659Hz 持续 80ms 中间间隔 40ms，胜利为 523、659、784 和 1046Hz 各持续 100ms，失败为 220Hz 然后 146Hz 持续 140ms，风暴开始为 280ms 的种子噪声缓冲区通过 400Hz 带通滤波器。增益在 20ms 内渐变。无音频文件且无自动播放。每个提示音也有可见反馈。画布为 aria-hidden。一个 polite 实时区域播报 toast、失败标题和胜利标题。对话框是真实 HTML、有标签，Escape 关闭帮助。如果无法创建画布上下文，显示一个 Glass 面板，内容为 This browser could not start the crater view. 并保持帮助按钮可用，不在循环中抛出异常。
   布局：帮助是一个 560px 的面板。在移动端它是带内部滚动的底部面板。实时区域和帮助文本在标题屏幕以及运行中均可用。可选的署名行（如果提供）也位于帮助底部。
   动效：音频不依赖尘埃运动。减少动效在声音开启时仍允许提示音，因为每个提示音是单个短音，且面纱不闪烁。
8. **尘埃、响应式适配与减少动效** — 用 mulberry32 从 0xC1A0E11 开始播种尘埃，并在火山口边界内一次性放置 32 个粒子。每个粒子是 Dust 中半径 4 到 12 的椭圆，alpha 为 0.12。每帧将它们向右漂移 0.6 CSS 像素并环绕。风暴期间，绘制 64 个粒子，alpha 为 0.22，然后在结构上方绘制全画布 Dust 填充，alpha 为 0.18。绘制顺序为背景、地形、巨石、结构、选择、粒子、风暴面纱。HTML HUD 不绘制到画布中。在 1440x900 下，中央栖息地在列之间完全可见，且没有列文本溢出。在 390x844 下，穹顶在画布中，拇指栏在拇指区域，且没有水平页面滚动。库存显示整数、名称和 LOW，因此颜色从不是唯一信号。风暴状态始终是预报句子。
   布局：在 1440x900 下，位于第 5 列、第 6 行的栖息地位于列之间的开放画布中，完全可见，不在其下方。移动端面板顺序固定：仅在运行尚未开始时显示标题块，然后是库存、预报和床位、提示、推进、工具和安全区域。
   动效：使用 prefers-reduced-motion 时，跳过粒子放置和动画帧。风暴仅为 0.18 的面纱。调整大小仍重绘一次。

## 资产
- 图像：没有下载或生成的图像文件。使用 Design 中的十六进制色值，在 canvas 和 SVG 中绘制陨石坑、坑缘、巨石、居住舱、太阳能阵列、温室、冰钻、尘埃、风暴帷幕、选择框以及 public/favicon.svg。在 ASSETS.md 中记录场景美术和 favicon 均为代码绘制，且未使用任何外部图像。
- 图标：建造栏图标是四种结构和一条简单移除斜线的原创内联 SVG 剪影，使用 Design 中的十六进制色值。帮助、声音、撤销和关闭仅使用本地安装的 lucide-react 包（ISC）中的 CircleHelp、Volume2、VolumeX、Undo2 和 X。在 ASSETS.md 中列出这些图标模块、https://www.npmjs.com/package/lucide-react、Lucide contributors 以及 ISC 许可证。
- 字体：通过 @fontsource-variable/fraunces 和 @fontsource-variable/outfit 自托管 Fraunces 和 Outfit，并通过 @fontsource/ibm-plex-mono 自托管 IBM Plex Mono 500（OFL-1.1）。仅导入这些字重。在 ASSETS.md 中列出这些包生成的本地文件、npm 包页面、随附 OFL 声明中的版权持有人以及 OFL 许可证。不得向 fonts.googleapis.com 或任何其他字体主机发起请求。
- 视频：没有视频和音频文件。可选提示音在玩家开启声音后通过 Web Audio 在浏览器中合成。

## 不要做
- 不要添加后端、服务器路由、账户、数据库、分析、排行榜、多人模式或任何网络调用。唯一的持久化是 localStorage 中的殖民地存档和声音标志。
- 不要更改技术栈。不要使用 Unity、Godot、Phaser、three.js、Pixi、物理引擎、GSAP、Motion 或第二个页面。构建使用 Vite 5、React 18、TypeScript、Tailwind CSS 3.4 和一个 canvas。
- 仅在 dist/ 中发布静态文件。Vite base 为 './'，链接使用文件名，资源使用相对路径，构建经过压缩，source map 关闭，src 不被复制，dist 保持在 20 MB 以下。
- 不要从 CDN 加载脚本、字体、图标、图像、音频或瓦片。不要热链或下载火星照片、地图或纹理。陨石坑、结构和风暴由代码绘制。
- 不要使用商业字体或字体 CDN。Fraunces、Outfit 和 IBM Plex Mono 仅来自 Fontsource 包。
- 不要复制现有的殖民地、地球化改造或生存城市游戏：不要使用 Surviving Mars、Per Aspera、Terraforming Mars、Oxygen Not Included 或 Frostpunk 的名称、标志、穹顶套件、无人机、赞助商徽章、突破卡或界面布局。
- 不要使用 NASA、ESA、JPL、SpaceX 或任何真实机构或公司的标志、徽章、漫游车、着陆器或任务名称作为殖民地、陨石坑或探险队的名称。不要引用关于火星的电影或书籍台词，包括 The Martian，也不要绘制真实宇航员或任何名人。
- 不要添加个体殖民者 AI、肖像、研究树、无人机、战斗、武器、金钱成本、随机事件或程序化地图。风暴、生长和陨石坑是 sim.ts 中的固定规则。
- 不要在 src/content.ts 之外硬编码 Hearthline、Tallow Crater、Amberline Survey、默认标语或默认名册。当变量变化时，建筑名称和产出保持稳定。
- 不要让预览使用第二份经济逻辑。推进 sol、预览和失败检查调用同一个 tick 函数。新游戏必须通过 tick 部分中的 sol-1 检查。
- 不要自动播放音频、要求指针锁定或忽略 prefers-reduced-motion。尘埃和风暴帷幕不得遮挡栖息地或选择菱形。
- 不要让手机依赖悬停或键盘快捷键。拇指栏、点击放置和 48px 目标在 390x844 下正常工作且无水平溢出，桌面游玩在 1440x900 下正常工作。
- 不要在陨石坑前显示日期、价格、账户或营销页面。唯一可选的署名是提供的 credit 字符串。不要提及 VibeFather、模板许可证或成员数量。
- 不要添加 SEO 元数据、Open Graph 标签、JSON-LD、站点地图或关键词堆砌的标题。一个普通标题和 favicon 就足够了。
- 不要在缺少 canvas 上下文或存档损坏时抛出异常。忽略未知的存档版本，如果 canvas 无法启动，只显示一次回退面板。

---
— Prompt by VibeFather · https://vibefather.ai/t/mars-colony-builder-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
