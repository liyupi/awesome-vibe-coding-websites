> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 科幻竞技场波次生存游戏

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个单页第一人称波次游戏，场景是一座由方块搭建的封闭工业场地。一张玻璃标题卡悬浮在实时场地之上，画面中已有一架无人机在盘旋。随后访客行走、瞄准，并用一把弹匣供弹的卡宾枪开火，从地上拾取生命和护盾电池，面对一波波编号的方块无人机，直到生命值归零。重试卡会显示到达的波次和击落的无人机数量。几何体和声音均由代码生成。

- 受众：希望获得一个成品浏览器游戏、能用自己的名称重新换皮并作为静态文件发布的开发者和学生。
- 目标：一局用鼠标和键盘游玩的游戏，并且在指针锁定被拒绝时仍能游玩，包括在沙盒 iframe 内：观察、射击、换弹、拾取电池、失败、重试，分数保存在内存中，且无控制台错误。
- 语气：干硬而具物理感，像张贴在试验场上的告示。短标签，无玩笑，无感叹号，无血腥内容。

## 技术栈
- 框架：Vite 5 + TypeScript + three.js
- 样式：Tailwind CSS 3.4
- 库：three（MIT）、tailwindcss（MIT）、vite（MIT）、typescript（Apache-2.0）、@fontsource/chakra-petch（OFL-1.1）、@fontsource/source-sans-3（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务器代码、无外部 API。
- 设置：
  - 创建一个 Vite 5 + TypeScript 应用，不使用 React、Vue 或 Svelte。入口是 index.html 加 src/main.ts。将文档语言设为 en。title 元素内容为 [BRAND] — [ARENA]。body 包含一个 canvas 和一个 div#ui，用于承载所有覆盖层。
  - 在 vite.config.ts 中将 base 设为 './'，build.sourcemap 设为 false，build.outDir 设为 dist。不要将 src 复制到 dist。
  - 安装 tailwindcss 3.4，以及 postcss 和 autoprefixer。将 Tailwind content 指向 ./index.html 和 ./src/**/*.ts。不要安装 Tailwind 4，不要从 CDN 加载 Tailwind。将下面的字体族和十六进制颜色映射到 Tailwind 主题中。
  - 安装 three，并从 three 包中导入。不要从 CDN 加载。不要使用 GLTFLoader、TextureLoader、AudioLoader、EffectComposer 或任何其他后处理通道。
  - 安装 Fontsource 包，并在 src/main.ts 中导入 @fontsource/chakra-petch/600.css、@fontsource/chakra-petch/700.css、@fontsource/source-sans-3/400.css、@fontsource/source-sans-3/600.css 和 @fontsource/jetbrains-mono/500.css。
  - 将所有面向用户的字符串放在 src/content.ts 中。用 [BRAND]、[OPERATOR]、[ARENA]、[WEAPON] 和 [DRONE] 构建命名该范围的字符串。当 [DRONE] 的值不以 s 结尾时，通过追加字母 s 来复数化 [DRONE]。当这些值与默认值不同时，重写字符串并保留每个数字、布局和机制。
  - 将玩法代码拆分为 src/scene.ts、src/player.ts、src/weapon.ts、src/drones.ts、src/pickups.ts、src/waves.ts、src/input.ts、src/hud.ts 和 src/audio.ts。在 src/main.ts 中用一个 requestAnimationFrame 循环驱动它们。将每帧 delta 限制为 0.05 秒。当 document.hidden 为 true 时，冻结模拟。
  - 将 public/favicon.svg 写为圆角方形，填充 #100F0C，中央为 18 乘 4 的圆角条，颜色 #3EE0D2，无字母。用相对 href 链接它。
  - 在项目根目录写 ASSETS.md，列出每个 Fontsource 包、OFL-1.1 许可证和作者。没有第三方图片。
  - 将渲染器像素比上限设为 1.5，当视口宽度小于 768 时设为 1.25。将绘图缓冲区调整为 canvas 的客户端尺寸。将 canvas 位置设为 fixed，inset 0，touch-action 为 none。将页面 margin 设为 0，背景设为 #100F0C，overflow hidden，高度设为 100dvh。

## 变量
- [BRAND] — 游戏标题（默认："Lampwright"）。标题卡上的大字名称，也用于文档标题。虚构名称。它不是武器名称，也不是真实工作室。
- [OPERATOR] — 靶场运营方（默认："Hale Relay Works"）。标题卡眉题和前提句中的简短虚构公司名。
- [ARENA] — 场地名称（默认："Sodium Court"）。封闭场地。显示在标题下方和暂停卡中。也是文档标题的后半部分。
- [WEAPON] — 卡宾枪名称（默认："Ash Spool"）。仅作为弹药计数上方的标签。无论此处写什么，武器始终是 12 发弹匣的卡宾枪。绝不用真实枪械型号名称。
- [DRONE] — 无人机名称（默认："Wick"）。唯一敌人的单数名称。暂停卡和游戏结束卡使用复数形式，即该值加 s，除非它已经以 s 结尾。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/sci-fi-arena-wave-survival-game（默认：是；删除此行即可移除）

Pages & Sections 下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图像——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图像路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- Yard Black（场地黑）`#100F0C` — 页面背景、渲染器清除色和雾
- Floor（地面）`#1A1915` — 主地板板块
- Panel（面板）`#14130F` — 细窄的内嵌地板板块，仅视觉用途
- Crate（木箱）`#3A342C` — 外围墙壁和奇数编号的木箱
- Crate Dark（深色木箱）`#2E2B26` — 矮墙、偶数编号的木箱和卡宾枪护罩
- Steel（钢铁）`#4A463E` — 龙门架和卡宾枪机匣
- Sodium（钠光）`#E8A15A` — 灯光、眉题、主按钮和无人机灯
- Sodium Hot（高亮钠光）`#FFC27A` — 灯光自发光和主按钮悬停
- Paper（纸白）`#F4EFE6` — 标题、HUD 数字和准星
- Dust（尘灰）`#A39C90` — 次级标签、图例和制作人员行
- Ink（墨黑）`#1A120C` — 钠光按钮上的文字
- Tracer（曳光）`#3EE0D2` — 唯一的青色：曳光弹、武器肋条、换弹填充和命中确认准星
- Shield（护盾）`#7EB6FF` — 护盾条和护盾格
- Health（生命）`#F08A4B` — 生命条和生命格
- Bolt（弹丸）`#E7B15A` — 敌方弹丸和空弹匣数字
- Track（轨道）`#241F1A` — 条形条后方的空轨道和换弹填充
- Glass（玻璃）`rgba(12,11,9,0.78)` — 标题、暂停、游戏结束和 HUD 面板
- Hurt（受伤）`#C46B4A` — 仅用于受伤暗角。绝不作为溅射贴花

### 字体排印
- 展示字体：Chakra Petch（OFL），字重 600/700
- 正文字体：Source Sans 3（OFL），字重 400/600
- 弹药字体：JetBrains Mono（OFL），字重 500

### 布局与动效
- 间距：画布填满视口。在宽度至少 768px 的视口上，覆盖面板距边缘 20px；低于该宽度时距边缘 14px，另加 env(safe-area-inset-*)。标题卡内边距为 28px 32px。堆叠的 HUD 行使用 6px 间距。触摸摇杆直径 112px，外边距 16px，Fire 和 Reload 按钮间距 10px。
- 圆角：标题、暂停和游戏结束卡片为 10px。文字按钮为 8px。生命条、护盾条、摇杆以及圆形的 Fire 和 Reload 按钮为 999px 的胶囊形。
- 动效：回合开始前，标题无人机以 0.25 rad/s 偏航，并以 0.8 Hz 上下浮动 0.12 m。当设置了 prefers-reduced-motion 时，浮动幅度为 0。
- 动效：当玩家移动速度超过 0.4 m/s 时，相机垂直浮动 0.016 m、横向浮动 0.008 m，并带有 0.004 rad 的滚转。射击使俯仰在 70 ms 内偏移 0.008 rad。命中使相机在 100 ms 内偏移 0.012 m。当设置了 prefers-reduced-motion 时，跳过以上全部三项。
- 动效：地板格以 0.7 rad/s 绕 Y 轴旋转。战斗无人机以 1.4 Hz 上下浮动 0.1 m。当设置了 prefers-reduced-motion 时，两者均保持静止。
- 动效：被摧毁的无人机会发射 18 个火花，飞行 2.2 m 并在 0.4 s 内淡出。视口低于 768px 或使用粗指针时，使用 8 个火花。减少动效时使用 6 个火花，在 0.25 s 内原地淡出且不飞行。
- 动效：换弹轨道在 950 ms 内线性填充。命中无人机时，准星变为 Tracer 色并持续 80 ms。生命值在 30 或以下时，生命条在 0.8 s 内从不透明度 1 脉动到 0.45 再返回，除非设置了减少动效，此时条形保持实心。
- 动效：按钮仅在悬停时改变背景色。它们不缩放、不弹跳、不上升。卡片显示和隐藏时没有页面过渡。
- 图像：不使用照片、纹理或下载的模型。首屏是实时场地：深色板块、四片暖色灯光池、木箱堆、一个龙门架和一台悬停的无人机，玻璃标题卡居中覆盖在该场景之上，而非纯色背景。卡宾枪、无人机、弹丸、能量格、曳光弹和火花均为 three.js 网格和点。唯一的平面图形是 favicon SVG。

## 页面与区块
### 竞技场（`index.html`）
1. **外壳与状态** — 四种状态：标题、游戏中、暂停和游戏结束。页面加载时处于标题状态。没有营销页、商店、账户或第二条路由。回合数仅存在于模块内存中，且仅在重试运行时重置。WebGLRenderer 使用 antialias、ACES 电影色调映射（曝光 1），以及 Yard Black 的清除色。雾为 Yard Black 中的 Fog，near 16、far 40。如果构造渲染器抛出异常，捕获它，不留未捕获错误，并在纯 Yard Black 背景上显示标题卡，文案为 This browser could not start the yard view。在该失败状态下隐藏开始按钮。
   布局：画布位于最底层。全视口暗角位于其上方。#ui 为 position fixed、inset 0、pointer-events none，承载 HUD、提示行、触控控件和模态卡。卡片和触控控件设置 pointer-events auto。Z 序从后到前：画布、暗角、HUD、触控控件、卡片。暗角为径向渐变，中心透明，边缘为 Hurt。
2. **回合规则** — 这些数值在变量变化时保持不变。生命 100 和护盾 100 初始满值且永不回复。一发弩箭造成 18 点伤害，先扣护盾，溢出部分扣生命。从满条开始，护盾为 10 时一发弩箭结束时护盾 0、生命 92。受伤后 0.35 s 内忽略弩箭；该窗口内到达的弩箭消失。生命钳制在 0 并结束回合。移动速度为 4.6 m/s，无跳跃、无冲刺。卡宾枪弹匣 12 发，950 ms 内装填至 12 发，备弹无限。按住开火每 125 ms 射击一次。弹匣为 12 发或已在装填时忽略装填，装填期间忽略开火。空弹匣空击不快于每 180 ms 一次，且不绘制曳光。每次命中无人机造成 34 点伤害。无人机有 100 生命，生命为 0 时死亡，因此第三次命中时死亡。第 1 波包含 3 架无人机。第 n 波包含 3 + (n - 1) * 2 架。无人机移动速度为 min(4.2, 2.2 + (n - 1) * 0.18) m/s。无人机每 max(0.95, 1.7 - (n - 1) * 0.06) 秒开火一次。弩箭速度始终为 9 m/s。当视口宽度至少 768px 且主指针为精细指针时，活动上限为 8；否则上限为 4。一波被完全消灭后的喘息时间为 4.5 s。一个细胞恢复自身条 40 点，钳制到 100，14 s 后返回。没有胜利，也没有波次上限。运行仅在生命为 0 时结束。
   布局：不要在页面上打印此规则列表。访客通过标题卡文案、HUD 和游玩了解循环。生命、护盾、弹药、波次规模、速度和计时器由其他模块导入的单一 rules 对象驱动。
3. **标题卡** — 默认文案，按此顺序：眉题 HALE RELAY WORKS 来自 [OPERATOR]，大写；标题 Lampwright 来自 [BRAND]；副行 Sodium Court 来自 [ARENA]；前提 Hale Relay Works shut the bay doors on Sodium Court. The Wicks are already inside. 将该前提构建为 [OPERATOR] shut the bay doors on [ARENA]. The [DRONE plural] are already inside. 按钮：Enter the yard。桌面图例，两行：WASD move · Mouse look · Click fire · R reload · Esc pause，然后 If the lock is blocked: drag the view, arrow keys look, F or the Fire button shoots。触控图例，当触控控件将显示时替代那两行：Left stick move · Right stick look · Fire · Reload。细胞行：Warm floor cells restore health. Cool floor cells restore shield. Neither bar refills on its own. 声音按钮：Sound on，切换为 Sound off。最后一行：[CREDIT] 链接。无感叹号。
   布局：卡片居中，宽度 min(420px, calc(100% - 32px))，max-height calc(100dvh - 32px)，overflow auto，padding 28px 32px，背景 Glass，1px 边框 rgba(244,239,230,0.16)，圆角 10px，12px 背景模糊。场地在其周围保持可见。眉题为 Chakra Petch 12px 字重 600，字距 0.18em，Sodium。标题为 Chakra Petch 64px 字重 700，低于 768px 时为 40px，行高 0.95，字距 -0.02em，Paper。竞技场为 Source Sans 3 16px Dust，上方间距 8px。前提为 Source Sans 3 15px Paper，行高 1.45，上方间距 14px。开始按钮为 12px 22px 内边距，8px 圆角，Chakra Petch 15px 字重 600，Sodium 背景，Ink 文字，悬停 Sodium Hot，上方间距 20px。图例和细胞行为 Source Sans 3 13px Dust，第一个图例上方间距 14px。声音控件为透明按钮，13px Dust，上方间距 10px。署名链接为 12px Dust，上方间距 16px。只有开始按钮开始回合。点击卡片后方的场地无效果。
   动效：卡片不播放入场动画。页面出现时场地和标题无人机已在移动。开始按钮有颜色悬停，无位移。
4. **场地** — 玩家无法离开的封闭场地。单位为米，Y 向上，北为负 Z，原点为地板中心。内部地板 x 从 -14 到 14，z 从 -11 到 11。墙壁厚 0.7、高 4.4，颜色 Crate，内表面位于这些边界上。在东墙和西墙上各留一个宽 2.6、高 2.9 的开口并居中，每个开口上方加过梁，并在每个开口后方放置 Yard Black 的深色塞块，使其读作舱门。碰撞仍会在内表面阻挡玩家。地板为 y -0.25 到 0 的板，颜色 Floor，粗糙度 0.94。八块薄 Panel 板，高 0.02，作为视觉接缝置于地板上，无碰撞。箱子，中心 y 为其高度的一半：A 在 (-6.2, 0.65, -2.2)，尺寸 1.5 x 1.3 x 1.5；B 堆叠在 A 上，位于 (-6.2, 1.75, -2.2)，尺寸 1.05 x 0.9 x 1.05；C 在 (5.6, 0.85, -5.2)，尺寸 2.3 x 1.7 x 1.25；D 在 (1.8, 0.45, 1.6)，尺寸 1.25 x 0.9 x 1.25；E 在 (-2.4, 0.6, -6.4)，尺寸 1.9 x 1.2 x 1.0；F 在 (7.2, 1.05, 2.6)，尺寸 1.35 x 2.1 x 1.35；G 在 (-8.4, 0.5, 3.8)，尺寸 1.7 x 1.0 x 1.7。奇数箱子使用 Crate，偶数箱子使用 Crate Dark，粗糙度 0.82。矮墙：(0.2, 0.52, -0.6)，尺寸 3.4 x 1.05 x 0.45；(-4.2, 0.52, 4.6)，尺寸 0.45 x 1.05 x 2.8；(6.4, 0.48, -1.2)，尺寸 2.6 x 0.95 x 0.4；均为 Crate Dark。龙门架平台中心 (0, 3.15, -9.7)，尺寸 18 x 0.22 x 1.5，颜色 Steel，金属度 0.45，粗糙度 0.48，南边缘有栏杆。四根立柱，0.28 x 3.04 x 0.28，位于 x -8、-2.5、3.5 和 8，z 与平台相同。玩家与立柱、箱子、矮墙和周边碰撞，并从平台下方走过。不可攀爬。
   布局：四根灯杆位于 (-10.5, 3.7, -8.2)、(10.5, 3.7, -8.2)、(-10.5, 3.7, 7.4) 和 (10.5, 3.7, 7.4)。每根灯杆为 Crate Dark 的 0.14 方形柱，每个灯头为 0.55 x 0.22 x 0.34 的盒子，自发光 Sodium Hot，强度 1.6。每个灯头处的 PointLight 使用 Sodium，强度 25，距离 18，衰减 2。添加 HemisphereLight，天空 #3A342C，地面 #0C0B09，强度 0.55，以及一个来自 (12, 18, 8) 的 DirectionalLight，颜色 #F3D7B0，强度 0.85。该平行光投射 1024 阴影贴图，bias -0.0003，来自墙壁、箱子、矮墙、龙门架、无人机和细胞，但不来自视图模型。当视口低于 768px 时关闭阴影贴图。如果场地过曝或近乎全黑，将点光、半球光和平行光强度乘以一个共享因子，直到灯下箱子表面明显亮于角落，且角落保持接近 Floor。不要添加更多世界灯光。
   动效：灯不闪烁。在玩家行动之前，只有标题无人机以及之后的战斗无人机在此场景中移动。
5. **视角与移动** — 相机为透视相机，视场角 72，near 0.08，far 70，眼高 1.65。出生点 (0, 1.65, 7.4)，yaw 0，pitch 0，朝负 Z 方向看，使标题无人机居中。Pitch 钳制在 ±1.05 rad。鼠标灵敏度为 0.0022 rad 每像素。方向键在所有视角模式下以 1.35 rad/s 偏航和俯仰。WASD 相对 yaw 以回合规则速度移动，对角线归一化，无加速度。胶囊半径 0.36。命中时分离轴，使玩家沿箱子和墙壁滑动。玩家不被无人机推动，接触它们不受伤害。阻止 Space，不跳跃。对 W、A、S、D、R、F、Esc 和方向键阻止默认行为，使页面不滚动。
   布局：当视口宽度小于 768px 或主指针为粗略指针时，视角模式初始为触摸（touch），否则为锁定（lock）。在所有模式下，F 键开火，R 键装填。进入场地（yard）时，恢复音频上下文，隐藏标题卡，显示 HUD，将状态设为 playing，并开始第 1 波。在触摸模式下，不要请求指针锁定；摇杆和按钮就是控制方式，如果连接了键盘，键盘仍然可用。在锁定模式下，从该点击事件中在 try/catch 内调用 canvas.requestPointerLock。如果该调用返回 promise，则捕获拒绝。同时监听 pointerlockerror。如果 400 ms 后 canvas 不是 document.pointerLockElement，则使用相同的回退方案。回退方案将视角模式设为拖拽（drag），不抛出异常，也不调用 console.error、console.warn 或 console.log。在顶部 HUD 下方显示此提示 4 秒：Pointer lock was blocked. Drag the view to look, or use the arrow keys. 在拖拽模式下，按住画布上的主按钮即可视角移动，且该按钮不会开火。只要视角模式为拖拽，就显示屏幕上的 Fire 和 Reload 按钮，即使在宽屏上也是如此。在锁定模式下，鼠标移动控制视角，鼠标按钮 0 开火，且这两个按钮保持隐藏。游戏过程中按 Esc 会调用 exitPointerLock 并打开暂停。在有意调用 exitPointerLock 前后设置一个标志，以便匹配的 pointerlockchange 不会打开第二张卡片。如果游戏过程中文档再次变为可见，且视角模式为锁定，而锁定已丢失，则打开暂停。
   运动：头部晃动仅在 playing 状态下运行，仅在速度超过 0.4 m/s 时运行，且仅在减少运动（reduced motion）关闭时运行：垂直 sin(time * 10.5) * 0.016 m，横向 sin(time * 5.25) * 0.008 m，滚转 sin(time * 5.25) * 0.004 rad。静止时，在 0.15 s 内回到水平视线。减少运动将相机锁定在 y 1.65，滚转为 0。
6. **Carbine** — 屏幕上的名称为 [WEAPON]，默认为 Ash Spool。它是一个钝感的虚构工具，不是任何真实枪械的模型：一个 0.28 x 0.09 x 0.16 的机匣盒，材质为 Steel；前端一个 0.08 x 0.06 x 0.34 的护罩，材质为 Crate Dark；一个方形弹匣 0.06 x 0.12 x 0.07；以及一个顶部肋条 0.03 x 0.025 x 0.2，带有强度 0.8 的自发光 Tracer。没有瞄准镜，没有制造商标记，没有文字，也没有复制自已知步枪的枪托。将其以局部坐标 (0.26, -0.24, -0.52) 父级绑定到相机。伤害射线从相机中心开始，行进 48 m。测试无人机机身盒、箱子、墙壁、矮墙、龙门架和地板。第一个命中者获胜。无人机承受 round-rule 伤害，准星闪烁。实体命中会生成 4 个 Tracer 点，在 0.12 s 内淡出，除非视口宽度小于 768px 或减少运动开启，在这种情况下跳过这些点。可见的曳光弹是一个 0.018 的方形盒，使用 MeshBasicMaterial Tracer，从枪口尖端到命中点，如果未命中任何东西则为 48 m，持续 60 ms。一个 Tracer 颜色的枪口 PointLight，强度 6，距离 3.5，持续 40 ms，在减少运动下跳过。
   布局：武器保持在视图的右下角，永不遮挡中心准星。它不投射阴影。弹药文本为实时计数、一个空格、一个斜杠、一个空格和 12。当弹药为 0 发时，数字使用 Bolt。装填期间，武器名称被替换为 RELOADING，一个 104 x 3 的轨道在装填持续时间内用 Tracer 填充。
   运动：当减少运动关闭时，射击会增加 0.008 rad 的俯仰角，并将视图模型向后移动 0.02 m，持续 70 ms，然后缓动回位。当减少运动开启时，视图模型保持不动，曳光弹仍然出现。
7. **Drones and waves** — 一种无人机类型，名称来自 [DRONE]，默认为 Wick。网格是一个机身盒 0.84 x 0.30 x 0.58，颜色 #2A2824，金属度 0.42，粗糙度 0.46；两个推进器盒 0.2 x 0.14 x 0.2，位于局部 x ±0.28 和 y -0.2，自发光 Sodium 强度 0.6；顶部一个鳍片 0.06 x 0.2 x 0.16；以及两个前部标记 0.07 立方体，自发光 Sodium 强度 1.2。没有腿、轮子、头、眼睛、翅膀、三脚架或骷髅。射线检测命中仅使用机身盒。在标题屏幕上，一架无人机悬停在 (0, 2.25, -4.2)，以 0.25 rad/s 偏航，以 0.8 Hz 上下浮动 ±0.12 m，且不能射击或受到伤害。当回合开始时，它成为第 1 波的无人机 0，并在 0.4 s 后切换到战斗浮动。该波的其他无人机以 0.45 s 的间隔生成，交替出现在西湾（x -12.4, y 2.15, z 0）和东湾（x 12.4, y 2.15, z 0）。如果实时上限已满，则将其余的保持排队，并在槽位打开后 0.45 s 生成下一个。永远不要删除排队的无人机。只有当属于该波的每一架无人机都被摧毁时，一波才结束。然后 HUD 在整个 4.5 s 的喘息期间显示 Wave clear。已经在空中的螺栓继续飞行，细胞计时器继续运行。然后下一波开始，标签变为 Wave 加上新数字。每架无人机的第一发战斗螺栓等待 0.6 s 加上槽位索引乘以 0.15 s，然后使用波间隔。
   布局：每架无人机存储一个槽位角度，从槽位索引乘以 2.2 rad 开始，并以速度除以半径行走该角度。半径为 8.5 m 加上（槽位模 3）乘以 1.1 m。期望点是玩家在 XZ 平面上的位置加上该偏移，y 为 2.15。如果路径经过距离实体 0.8 m 以内，则尝试向任一侧偏移 2 m 的点，否则在该帧保持不动。在 5.5 m 以内，向外偏置。超过 13 m，向内偏置。将无人机限制在内院（inner yard）内缩 1.2 m 的范围内。面向移动方向，倾斜最多 0.15 rad。螺栓是 MeshBasicMaterial 球体，半径 0.11，颜色 Bolt，从前方朝开火瞬间的玩家眼睛位置发射，无追踪。在 3.2 s 后、碰到实体或碰到玩家时移除螺栓。使用分段测试步进螺栓，使其无法穿透。玩家命中使用螺栓伤害规则。螺栓不会伤害其他无人机。死亡时，移除网格，将掉落计数加 1，并发射交替为 Paper 和 Sodium 的火花。桌面火花数量为 18。在小屏幕或粗略指针屏幕上使用 8。减少运动使用 6 个火花，无移动。运动：战斗浮动为 ±0.1 m，频率 1.4 Hz，每个槽位有相位偏移，在减少运动下振幅为 0。火花移动 2.2 m 并在 0.4 s 内淡出，或在减少运动下在 0.25 s 内原地淡出。没有碎片块，也没有烟雾纹理。
8. **Floor cells** — 两个生命细胞和两个护盾细胞。生命细胞为自发光 Health，位于 (-4.8, 0.4, 6.6) 和 (9.1, 0.4, -5.4)。护盾细胞为自发光 Shield，位于 (3.6, 0.4, 6.5) 和 (-8.8, 0.4, -2.6)。每个网格是一个 10 边圆柱体，半径 0.2，高度 0.62，加上一个盖盒 0.16 x 0.08 x 0.16。自发光强度为 1.3，粗糙度为 0.35。没有十字、没有加号、没有红色符号。当与玩家的水平距离小于 1.0、对应条低于 100 且状态为 playing 时，拾取发生。加 40，钳制到 100，隐藏网格，播放拾取音调，并在 14 s 后再次显示同一细胞。如果条已满，不要消耗该细胞。
   布局：细胞放置在地板上，位于上述箱子之间的开放间隙中。它们在桌面上投射阴影，在 768px 以下不投射。它们没有自己的点光源。
   运动：每个细胞以 0.7 rad/s 绕 Y 轴旋转。减少运动将旋转冻结在 0，并保持自发光颜色稳定。
9. **HUD** — 在标题、暂停和游戏结束期间隐藏，除了短暂的锁定提示，它可以在游戏上方显示。永久标签，全部为美式英语且大写，竞技场名称除外：顶部中央的 WAVE 和实时数字；其下方的竞技场名称；右上角的 DROPPED 和实时计数；条上的 SHIELD 和 HEALTH；弹药上方的武器名称。在喘息期间，顶部中央的词是 Wave clear 而不是波数。弹药显示为 7 / 12，带有实时计数。当弹药为 0 发时，数字使用 Bolt。装填期间，武器名称变为 RELOADING。
   布局：在 768px 或更宽的精细指针上：顶部中央距顶部 20px，Chakra Petch 13px 字重 600，字距 0.16em，Paper，下方竞技场为 12px Dust 字重 500，不大写。右上角为 DROPPED，12px Dust，字距 0.14em。左下角有两个 188 x 8 的条，半径 999px，轨道颜色 Track，相距 6px，每个上方 4px 处有一个 11px Dust 标签。护盾是上方的条，颜色为 Shield；生命是下方的条，颜色为 Health。填充宽度与百分比匹配。底部中央是武器名称，11px Dust 字距 0.16em，然后是弹药，JetBrains Mono 28px 字重 500 Paper，然后是一个 104 x 3 的装填轨道。准星是四个 8 x 1 的矩形，距中心 5px，Paper 不透明度 0.8，固定在屏幕上。它在标题、暂停和游戏结束时隐藏。命中时变为 Tracer 持续 80 ms。在 768px 以下，或使用粗略指针时：边距 14px，条移动到左上角，宽度 132px，以便避开移动摇杆，弹药降至 22px，位于摇杆之间安全区域内缩上方 18px。准星保持居中。
   Motion：血条宽度在受到伤害或拾取时更新。装填轨道在 950 ms 内缩放。生命值在 30 或以下时，静止暗角不透明度为 0.18，生命条会脉动，除非开启了减少动态效果。受击会将暗角提升至 0.32，持续 140 ms（包括在减少动态效果下），然后恢复到静止值。生命值高于 30 时，静止暗角为 0。
10. **暂停与游戏结束** — 暂停文案：标题 Paused；行 Wave 和实时数字；行 [ARENA]；行 [DRONE plural] dropped 和实时计数；按钮 Resume 和 Retry；声音开关；[CREDIT] 链接。模式化行的默认示例为 Wave 4、Sodium Court 和 Wicks dropped 9。游戏结束文案：标题 Yard lost；行 Reached wave 和实时数字；行 [DRONE plural] dropped 和实时计数；按钮 Retry；[CREDIT] 链接。默认示例为 Reached wave 6 和 Wicks dropped 22。Esc 从游玩中暂停，从暂停中恢复。Esc 在标题卡上不执行任何操作，在游戏结束时不执行任何操作，但仍会 preventDefault。从任一卡片点击 Retry 会重置生命值、护盾、弹药、装填、掉落计数、波次索引、单元格可见性、单元格计时器、玩家姿态和无人机，然后立即开始第 1 波。它不会返回标题卡。该点击是用户手势，因此除非触摸模式处于活动状态，否则使用相同的回退规则再次请求指针锁定。Resume 继续冻结的时钟，并且仅在视角模式为 lock 时请求指针锁定。
   Layout：两张卡片复用标题卡的玻璃效果，居中，max-width 360px。标题为 Chakra Petch 40px 字重 700 Paper。统计行为 Source Sans 3 16px Dust。暂停时的 Resume 和 Retry，以及游戏结束时的 Retry，使用 sodium 按钮。暂停卡上的 Retry 是第二个按钮，为 ghost 样式：透明、1px 边框 rgba(244,239,230,0.3)、Paper 文本。打开暂停或游戏结束会隐藏准星和触摸控件，通过守卫标志释放指针锁定，并冻结无人机、螺栓、装填、单元格计时器、波次计时器和头部晃动。游戏结束还会停止开火。焦点移动到主按钮。一个暗层 rgba(8,7,6,0.45) 仅位于卡片后方，场地保持可见。
   Motion：暂停或游戏结束时，模拟时钟不会推进。卡片不会淡入淡出。卡片下方声音提示不会继续。
11. **触摸控件** — 当视口小于 768px 或主指针为 coarse 时，在游玩期间显示摇杆以及 Fire 和 Reload 按钮。当宽屏精细指针屏幕上视角模式为 drag 时，也显示 Fire 和 Reload，但不显示摇杆。在标题、暂停和游戏结束时隐藏所有这些。左摇杆移动。死区为半径的 0.15，完全偏转等于 round-rule 移动速度。当左摇杆偏离中心时，忽略 WASD。右摇杆以完全偏转时 1.55 rad/s 的速度观察，死区相同。Fire 为按住重复，节奏 125 ms。Reload 为点按，运行与 R 相同的装填。
   Layout：左摇杆位于左下角，右摇杆位于右下角。每个外圆为 112px，margin 16px 加上安全区域内边距，背景 rgba(12,11,9,0.55)，边框 1px Paper 不透明度 0.2。摇杆头为 44px，Paper 不透明度 0.85，并保持在外半径内。Fire 和 Reload 是 64px 圆形，堆叠在右摇杆上方，间距 10px，相同玻璃效果，标签 Fire 和 Reload 为 12px Paper。在这些控件上停止传播，以免页面滚动。
   Motion：摇杆头跟随拇指，无额外缓动。减少动态效果不会改变摇杆。
12. **声音** — 所有提示均为代码生成的短 Web Audio 音调。没有音频文件。在 Enter the yard 点击内创建一个 AudioContext，并在那里恢复它。主增益为 0.16。如果上下文保持挂起，保持静音且不抛出异常。声音开关将主增益设置为 0 或恢复为 0.16，并存储在内存中，默认开启。射击：方波振荡器从 170 Hz 到 75 Hz，持续 0.05 s，增益 0.06。干点击：方波 900 Hz 持续 0.02 s，增益 0.035。装填：开始时正弦 300 Hz 持续 0.03 s，结束时正弦 460 Hz 持续 0.04 s。螺栓：正弦 120 Hz 持续 0.1 s，增益 0.045。受伤：锯齿波 80 Hz 持续 0.08 s，增益 0.05。无人机破碎：方波 1500、1900 和 2300 Hz，各 0.035 s，错开 0.028 s。拾取：正弦从 400 Hz 到 660 Hz，持续 0.13 s，增益 0.05。波次开始：正弦 196 Hz 持续 0.18 s，增益 0.04。
   Layout：开关是标题卡和暂停卡上的文本按钮。它不在游戏结束卡上，也不在游玩 HUD 上。
   Motion：无音频反应式相机运动。减少动态效果不会静音提示。

## 资产
- 字体：使用 @fontsource/chakra-petch 的 600 和 700 字重自托管 Chakra Petch（OFL-1.1，Indian Type Foundry），用于标题、按钮和 HUD 标签。在 ASSETS.md 中列出该包、作者和许可证。不要从字体 CDN 加载。
- 字体：使用 @fontsource/source-sans-3 的 400 和 600 字重自托管 Source Sans 3（OFL-1.1，Adobe），用于前提、图例和状态行。在 ASSETS.md 中列出。
- 字体：使用 @fontsource/jetbrains-mono 的 500 字重自托管 JetBrains Mono（OFL-1.1，JetBrains），用于弹药数字。在 ASSETS.md 中列出。
- 图标：用代码绘制 public/favicon.svg：一个 #100F0C 的圆角方块和一个居中的 #3EE0D2 青色条。不要图标包，不要字母，不要下载的 SVG。

## 不要做
- 不要后端、服务器路由、数据库、认证、账户、表单提交、fetch 或第三方 API。回合只保存在内存中。不要使用 localStorage、sessionStorage、cookie 或 indexedDB。
- 用 npm run build 把静态文件构建到 dist/。把 Vite 的 base 设为 './'，并使用相对资源路径。不要发布 source map，也不要把 src 复制到 dist/。保持 dist/ 在 20 MB 以下。
- 自托管技术栈中指定的三个 Fontsource 包。字体、脚本、音频或图片都不要用 fonts.googleapis.com、fonts.gstatic.com、Adobe Fonts 或任何其他 CDN。不要分析统计。
- 不要下载的 3D 模型、纹理、音频文件或照片。院子、卡宾枪、无人机、能量单元、火花和 favicon 都用代码绘制。用 Web Audio 生成音调。
- 只有一个页面：index.html。不要加营销首页、定价页或单独的说明页。如果添加任何内部链接，请指向一个文件名。
- 在 1440×900 和 390×844 下可玩，无控制台错误、无未捕获的 rejection。指针锁定仅用于顶层标签页。捕获被拒绝的锁定（包括在仅带 allow-scripts 的 iframe 沙箱内），并回退到拖拽视角加方向键。不要请求全屏。不要调用 alert。
- 遵循 prefers-reduced-motion。移除头部晃动、开火后坐、受击抖动、无人机浮动、能量单元旋转、生命条脉冲和飞行火花。玩法数值保持不变。
- 在 768px 以下，或使用粗指针时，显示左侧移动摇杆、右侧视角摇杆，以及 Fire 和 Reload 按钮。活动无人机上限为 4，并缩短火花爆发。不要要求悬停。
- 玩家永远不离开院子。一把卡宾枪、一种无人机、无载具、无跳跃、无冲刺、无第二种开火模式、无胜利画面。波次持续到生命值为 0。
- 无人机死亡只有火花。不要血、血腥、肢解、人类、生物、驾驶员或燃烧的尸体。不要红十字，也不要十字形生命道具。生命和护盾永不自行恢复。
- 不要使用 Doom、Quake、Halo、Unreal Tournament、Overwatch、Titanfall、Destiny、Warframe、Apex Legends、Call of Duty、Serious Sam、Killing Floor、Gears of War 或 Left 4 Dead 中的名称、标志、武器、HUD、恶魔，或陆战队员/英雄剪影。不要超级霰弹枪、BFG、等离子步枪、刺针枪、能量剑或重力枪。不要写 rip and tear 或 finish the fight 这些短语。HUD 中不要面部肖像。
- 不要描绘 Terminator 内骨骼、ED-209、AT-ST、战斗机器人、探测机器人、Sentinel 鱿鱼、Portal 炮塔、四足机器人、Wall-E 或 Necrons。不要使用真实枪械型号名称。不要工作室、机构或航天机构徽标，包括 NASA 和 SpaceX 标志。
- 不要商业字体，也不要受限组件库源码。不要安装 Aceternity UI、Tailwind Plus 或付费模板。这个 HUD 不需要图标包。
- 所有屏幕文案均为美式英语。除标题卡、暂停卡和游戏结束卡上唯一的 [CREDIT] 链接外，任何地方都不要提及 VibeFather。
- 不要占位图服务，也不要热链接媒体。主视觉是实时院子，而不是平铺背景上的文字。

---
— Prompt by VibeFather · https://vibefather.ai/t/sci-fi-arena-wave-survival-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
