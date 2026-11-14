> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 虚拟宠物伴侣

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，这是一款原创虚拟宠物网页小游戏，主角是 [PET_NAME]，一只住在 [HABITAT] 的 [PET_KIND]。首屏是一个可游玩的像素风栖息地，而不是宣传性的主视觉区。喂食、玩耍、清洁和休息操作会改变四个实时护理计量条，并触发原创精灵动画反应。包含两个完全可玩的小游戏，可奖励 [COIN_NAME]；六件可解锁并穿戴的服装道具；本地最高分；以及带版本号的 localStorage 持久化。使用 hash 视图分别呈现宠物之家、街机和衣橱，同时保持一份共享的实时宠物状态。

- 受众：开发者、创作者、学生和设计师，他们正在构建一款舒适的浏览器游戏、一个交互式作品集项目，或一个用于桌面和移动端休闲游玩的小型虚拟伙伴。
- 目标：让访客一眼就能了解宠物的状况，在五秒内完成一次令人满意的护理操作，通过真正基于技巧的游玩赚取货币，将其花费在可见的配饰上，并在之后回来时看到一个一致的、本地保存的伙伴。每个可见控件都必须执行其描述的功能。
- 语气：温暖、俏皮、简洁，并带有温和的幽默感，不使用儿语、不制造愧疚感、不制造紧迫感，也不使用惩罚性机制。使用清晰的 US English 标签和具体的、能感知变量状态的提示消息。宠物可能会困倦或脏乱，但永远不会死亡、生病，也不会让访客感到羞耻。

## 技术栈
- 框架：Vite 7 + React 19 + TypeScript 5
- 样式：Tailwind CSS 3.4 + 自定义 CSS
- 库：react（MIT）、react-dom（MIT）、lucide-react（ISC）、@fontsource/silkscreen（OFL）、@fontsource-variable/nunito（OFL）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 使用 React 19.2、TypeScript 5.9、Vite 7.2、@vitejs/plugin-react、Tailwind CSS 3.4、PostCSS 和 Autoprefixer。package.json 脚本为 dev='vite'、build='tsc -b && vite build'、preview='vite preview'。不要添加路由、状态管理、动画、物理、游戏、音频或组件库。
  - 在 vite.config.ts 中设置 base='./'、plugins=[react()]、build.outDir='dist'、build.sourcemap=false 和 assetsInlineLimit=0。保持所有资源 URL 为相对路径，不要将 src/ 复制到 dist/。生产构建必须压缩并保持在 20 MB 以下。
  - 为 ./index.html 和 ./src/**/*.{ts,tsx} 配置 Tailwind content。将每个 Design 颜色添加到 theme.extend.colors，display=['Silkscreen','monospace']，sans=['Nunito Variable','system-ui','sans-serif']。将整数网格像素渲染、步进精灵关键帧、硬像素阴影、画布缩放、焦点样式和减少动态效果覆盖放入 src/index.css。
  - 在 src/fonts.ts 中导入 @fontsource/silkscreen/400.css、@fontsource/silkscreen/700.css 和 @fontsource-variable/nunito。仅自托管已输出的 Fontsource 文件；绝不请求字体 CDN。编写 ASSETS.md 时使用已安装包中的实际 OFL 许可证文件。
  - 将所有面向访客的文案、变量默认值、宠物和栖息地定义、护理操作标签和消息、游戏名称和说明、服装名称和价格以及空状态保留在带类型的 src/content.ts 中。从 [BRAND]、[PET_NAME]、[PET_KIND]、[HABITAT] 和 [COIN_NAME] 解析它们。当值更改时，重写支持文案、零食名称、欢迎消息以及原始宠物和栖息地主题以匹配；组件中不得保留任何默认值特定的字符串。
  - 为共享模拟使用一个 React context 和 reducer。将饥饿、心情、清洁度和能量保持为 0 到 100 的数字，加上 [COIN_NAME] 余额、已拥有和已装备的服装、游戏最高分、设置、活动消息、lastTickAt 和 lastSavedAt。从 Date.now() 重新计算经过的衰减，而不是计数间隔。页面打开时每秒更新一次可见状态，并在每次操作后立即更新。
  - 初始状态为饥饿 72、心情 80、清洁度 68、能量 86、30 [COIN_NAME]、Leaf Cap 已拥有并已装备、无最高分、无声音视觉模式。每真实经过分钟的被动衰减为饥饿 0.30、心情 0.18、清洁度 0.12、能量 0.10。将每个计量条限制在 0–100，并将离线模拟上限设为 10,080 分钟。为零时，宠物显示疲惫或需要帮助的精灵和有用的护理提示，绝不显示死亡或失败状态。
  - 使用 src/lib/storage.ts 实现带版本的键，该键派生自小写连字符 BRAND slug、安全 JSON 解析、显式模式验证、数值限制、localStorage 周围的 try/catch 以及迁移钩子。在每次操作、购买、装备、完成游戏和重置后持久化；每 10 秒以及在 pagehide 时刷新。重新加载时应用一次经过的衰减，并且仅当至少一个显示的计量条发生变化时显示单个“While you were away”摘要。如果保存的数据损坏，请干净启动并显示非阻塞说明。
  - 在 src/App.tsx 中实现轻量级哈希路由，无需包：空哈希和 index.html 显示宠物主页，#/games 显示街机，#/wardrobe 显示衣柜。监听 hashchange，保留相同的内存模拟，并支持直接深链接。导航使用 ./index.html、#/games 和 #/wardrobe；绝不使用裸目录 URL 或添加未声明的路由。
  - 建议的源文件为 App.tsx、content.ts、components/AppShell.tsx、PetScene.tsx、CarePanel.tsx、ActivityPanel.tsx、Arcade.tsx、MiniGameCanvas.tsx、Wardrobe.tsx、Toast.tsx、ResetDialog.tsx、lib/simulation.ts、lib/storage.ts 和 lib/gameEngine.ts。保持画布游戏逻辑独立于 React 渲染，并公开 HUD 和结果的快照。
  - 在一个响应式 HTML 画布上渲染两个游戏，使用固定的 640×360 逻辑坐标系、上限为 2 的 devicePixelRatio、ResizeObserver 和指针坐标缩放。仅在活动回合期间使用 requestAnimationFrame、固定的 1/60 秒模拟步长和每回合带种子的 PRNG。暂停必须停止经过的回合时间和移动。在退出或卸载时取消动画帧和监听器。不要使用游戏引擎或远程资源。

## 变量
- [BRAND] — 虚拟宠物世界名称（默认："Pocket Meadow"）。一个自创的短名称，用于字标、文档标题、存储前缀和页脚。
- [PET_NAME] — 宠物名称（默认："Bramble"）。一个自创的简短伙伴名称，用于文案、反应和结果中。
- [PET_KIND] — 宠物物种（默认："moss bunny"）。一个小写的原创生物描述；当此项变化时，需重新绘制基础精灵图。
- [HABITAT] — 栖息地名称（默认："Sunpatch Burrow"）。一个自创的地名，用于指导房间或景观细节。
- [COIN_NAME] — 货币名称（默认："acorns"）。一个小写复数名词，用于余额、奖励、价格和余额不足提示。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接指向 https://vibefather.ai/t/virtual-pet-companion（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 午夜紫（Midnight Plum）`#241D31` — 页面背景、像素描边，以及亮色按钮上的深色文字。
- 深紫（Deep Plum）`#372A49` — 页头、控制台面板、对话框和次级深色表面。
- 暖纸色（Warm Paper）`#FFF3D6` — 深色表面上的主文字、卡片、标签和精灵高光。
- 柔和薰衣草（Muted Lavender）`#B9AEC5` — 深色表面上的次级文字和非活动图标。
- 草甸绿（Meadow Leaf）`#8AC926` — 主要操作、饥饿值条、成功状态和栖息地植被。
- 浆果珊瑚（Berry Coral）`#FF7B6B` — 玩耍操作、心情值条、脸颊和友好提示。
- 泡泡天蓝（Bubble Sky）`#69C3D4` — 清洁操作、清洁度条、水和冷色调高光。
- 梦幻薰衣草（Dream Lavender）`#A78BFA` — 休息操作、能量值条、夜间细节和已选服装的点缀。
- 金币蜜黄（Coin Honey）`#F6C453` — 货币、解锁价格、奖励和稀有游戏物品。
- 栖息地薄荷（Habitat Mint）`#BFE3C0` — 默认栖息地背景和安静的插画表面。
- 像素线（Pixel Line）`#574665` — 面板边框、分隔线、数值条轨道和非活动控件。

### 字体排版
- 字标、宠物名、视图标题、按钮标签、分数和短状态标签：Silkscreen（OFL），字重 400/700
- 正文、说明、活动消息、对话框、数值条上下文和移动端导航标签：Nunito Variable（OFL），字重 400/600/700/800

### 布局与动效
- 间距：使用 4px 基础网格和 8px 主导节奏。应用最大宽度为 1280px，桌面端边距 24px，移动端边距 12px。页头高度桌面端 64px、移动端 56px。桌面端主内容顶部内边距为 24px；首页网格列间距为 20px。场景和控制台内边距为 16px 或 20px。指针目标至少保持 48×48px，间距至少 8px。移动端面板内边距使用 12px，避免把四个操作按钮挤进一个窄行。
- 圆角：使用清晰的像素轮廓：应用外层面板 12px，场景和画布边框 8px，按钮和数值卡片 4px，午夜紫边框 3px。主按钮带有硬边 4px 4px 0 午夜紫阴影，按下时压缩为 1px 1px。避免玻璃质感、柔和投影、胶囊形泛滥和通用的圆角便当卡片。
- 动效：宠物以两帧 steps(1,end) 循环待机，每 760ms 垂直移动一个逻辑像素，每 4.2 秒眨眼一次，栖息地道具偶尔移动。每一帧中脸部和已装备饰品保持对齐。
- 动效：喂食、玩耍、清洁和休息会选用专用精灵状态，持续 900ms。喂食向碗的方向落下两个零食像素，玩耍让一个小球弹跳一次，清洁升起六个方形泡泡，休息将栖息地调暗 18% 并显示两个小 Z 字形。操作反馈绝不阻塞下一次视图导航。
- 动效：数值条填充以 steps(6,end) 在 180ms 内更新，而数值立即更新。按钮按下时使用上述硬阴影压缩效果。提示条停留 2.4 秒，绝不遮挡宠物或主要控件。
- 动效：哈希视图内容交叉淡入 140ms，不进行基于路由的滚动劫持。衣橱装备仅对饰品层交叉淡入 120ms。解锁时发出八个微小方形闪光，持续 500ms，绝不使用全屏彩纸。
- 动效：迷你游戏仅在明确开始后才使用连续运动。减少动态效果模式会移除装饰性粒子、缓动、屏幕震动和待机浮动；游戏对象以可读的 10fps 离散步进移动，所有结果保持清晰可读。
- 动效：在活动游戏之外的 prefers-reduced-motion 下，使用静态精灵姿势、数值和饰品即时变化，不显示漂浮爱心或闪光，也不自动播放场景动画。每秒闪烁绝不超过三次。
- 图像：所有视觉资产均以代码绘制为原创像素艺术。栖息地以内联 SVG 构建在 160×90 逻辑网格上，使用 shape-rendering='crispEdges'、整数坐标、硬边 rect 和 polygon，不使用栅格纹理。宠物构建在独立的 32×32 网格上，桌面端渲染至少 192×192px。默认 [PET_NAME] 是一只苔藓兔，具有原创的方形身体、两只不对称的叶子耳朵、奶油色口鼻、珊瑚色脸颊像素和一个小方形尾巴；不要从现有角色衍生其轮廓。创建待机、眨眼、开心、进食、玩耍、清洗、休息和需求姿势，以及独立的 32×32 饰品叠加层。默认栖息地包括一扇大窗户、叶形拱门、食物碗、玩具球、清洗角落、架子、地毯和小植物。当 PET_KIND 或 HABITAT 变化时，重写并重绘物种特定特征、栖息地主题和下落零食。在首页、街机和衣橱中使用相同的原创宠物和已装备叠加层。不得出现人物、真实肖像、图库图片、下载的精灵表、标志、品牌道具或烘焙进 artwork 的文字。

## 页面与区块
### [BRAND] — [PET_NAME] 的家（`index.html`）
1. **共享页头与导航** — 创建三个视图共用的外壳。页头包含原创的四像素嫩芽标志、[BRAND] 字标，以及三个导航链接，分别标注为 'Pet'、'Arcade' 和 'Wardrobe'。Pet 链接到 ./index.html，Arcade 链接到 #/games，Wardrobe 链接到 #/wardrobe。右侧显示 Honey 金币图标、当前数字余额和 [COIN_NAME]。当前激活视图带有 Meadow Leaf 下划线及 aria-current='page'。文档标题以 [BRAND] 开头，favicon 使用原创嫩芽标志。不要添加登录、云端、通知、商店或社交控件。
   布局：使用 Midnight Plum（午夜梅紫）页面，搭配 Deep Plum（深梅紫）吸顶页头和 3px Pixel Line 底边框。页头内容保持在 1280px 容器内。品牌居左，导航居中，货币居右。在 390px 宽度下，仅当空间足够时，第一行使用品牌图标加短字标；否则将字标放在紧凑的三链接导航行上方，整体保持在 56px 最小页头高度内，保持货币可见，绝不将导航隐藏在无标签图标之后。所有链接保持 48px 触控目标。
   动效：激活导航立即切换；悬停仅将链接偏移一个逻辑像素。货币变化时以 Coin Honey 短暂高亮 300ms，不缓慢递增计数。
2. **宠物栖息地与欢迎** — 场景上方，一行小号 Warm Paper 眉题显示 [HABITAT]，H1 显示 'Meet [PET_NAME].'。一行简短的变量感知文案显示 'Your little [PET_KIND], ready for a quiet break.'。在大型原创栖息地内，展示 [PET_NAME] 及其当前装备的装扮和一个表情丰富的思考气泡；默认思考为 'Is that a snack?'。点击或轻触宠物可切换开心反应并添加一条活动消息，但不奖励货币。碗触发 Feed，球触发 Play，清洗角触发 Clean，使用与护理按钮相同的 reducer 动作。左下角场景文字显示 [HABITAT]；右下角状态根据最低的计量条推导，显示 'All needs steady'、'Could use a little care' 或 'Time for some care'。包含场景和当前宠物状态的视觉隐藏文本摘要。
   布局：主页工作区为网格，列宽为 minmax(0,1.65fr) 和 minmax(330px,0.85fr)。栖息地占据左列，宽高比 16/10，最小高度 460px，溢出隐藏，Habitat Mint 背景，3px Midnight Plum 边框。标题行足够紧凑，使场景和护理操作在桌面首屏 900px 内可见。宠物约占场景宽度的 32%，位置略低于中心，道具远离其面部。低于 900px 时使用单列，栖息地在前。在 390px 时使用 4/3 场景，无最小高度，宠物约占场景宽度 46%，较小的说明文字置于实色 Deep Plum 背景上，无水平裁切或页面溢出。
   动效：使用设计中的待机、眨眼、道具点击和动作反应。思考气泡仅随状态或动作变化，绝不作为无限文本跑马灯。减少动效用户看到完整的静态栖息地和清晰的文本状态。
3. **实时护理控制台** — 右侧控制台标题为 'Care for [PET_NAME]'，带一个小型实时指示器，标注为 'Needs update with real time'。按以下确切顺序渲染四个计量条：Hunger 使用 Meadow Leaf，Mood 使用 Berry Coral，Cleanliness 使用 Bubble Sky，Energy 使用 Dream Lavender。每个计量条包含 Lucide 图标、标签、0–100 整数值、无障碍进度条和状态词：70–100 为 'Great'，40–69 为 'Okay'，1–39 为 'Low'，0 为 'Needs care'。摘要行始终为最低计量条推荐一个动作，而非使用通用填充内容。

渲染四个操作按钮：Feed 配 Utensils 和快捷键 F，Play 配 Gamepad2 和 P，Clean 配 ShowerHead 和 C，Rest 配 Moon 和 R。Feed 增加 24 Hunger、3 Mood，减少 4 Cleanliness。Play 增加 18 Mood，减少 10 Energy、6 Cleanliness 和 4 Hunger；若 Energy 低于 10，不执行并显示 'A quick rest will help first.'。Clean 增加 32 Cleanliness 和 4 Mood，减少 3 Energy。Rest 增加 30 Energy，减少 4 Hunger。结果限制在 0–100。每个动作更新 lastTickAt、宠物精灵、活动日志和本地存档。在输入文字或玩小游戏时忽略键盘快捷键。在 1.2 秒动作冷却期间，保持控件可读并显示小型内联状态，而非静默丢弃输入。
   布局：使用一个 Deep Plum 控制台，20px 内边距，四行 58px 计量条，以 Pixel Line 分隔。操作区域为两行两列的 52px 最小按钮网格，含图标、标签和小号快捷键提示。Feed 使用 Meadow Leaf，Play 使用 Berry Coral，Clean 使用 Bubble Sky，Rest 使用 Dream Lavender，均配 Midnight Plum 文字和边框。移动端使用两列计量条摘要，后接相同的两行两列操作网格；不要创建水平滚动的按钮条或用吸底操作栏覆盖内容。
   动效：每个成功动作运行其命名的 900ms 精灵状态和对应粒子。低能量 Play 使用单次 160ms 水平轻推和解释性消息，减少动效下无抖动。计量条更新遵循设计中的阶梯过渡。
4. **活动、下一解锁和存档控件** — 在工作区下方，创建两列区域。'Little moments' 按最新优先列出四条最新活动消息，不含日期或虚假在线事件；初始条目为 '[PET_NAME] moved into [HABITAT].' 和 'A tiny jar held 30 [COIN_NAME].'。后续条目命名实际护理动作、游戏奖励、解锁或已装备物品。'Next wardrobe treat' 显示尚未拥有的最便宜物品、其像素预览、确切价格、当前余额和 'Visit wardrobe' 链接。若所有物品均已拥有，显示 'Every look is unlocked. Time to mix and match.'

一行紧凑的 'How care works' 包含三条说明：'Needs change with elapsed time'、'Games earn [COIN_NAME]' 和 'Progress saves on this device'。包含一个低调的 'Reset pet' 文本按钮。其对话框显示 'Start over with [PET_NAME]?'，并说明此设备上的护理进度、[COIN_NAME]、装扮、活动和高分将被清除。Cancel 和 Reset pet 明确列出；重置恢复初始状态并关闭对话框。
   布局：使用 minmax(0,1.3fr) 和 minmax(300px,0.7fr) 列，20px 间距和 Deep Plum 表面，低于 820px 时堆叠。活动行以文本为主，垂直间距 12px，而非嵌套卡片。下一解锁面板左侧为 96px 像素预览，右侧为详情。重置对话框居中，最大宽度 440px，带 Midnight Plum 遮罩、焦点陷阱、Escape 处理和焦点返回。
   动效：新活动以 140ms 不透明度变化出现。下一解锁进度和对话框不使用复杂庆祝效果。减少动效使所有变化即时完成。
5. **共享页脚** — 共享页脚左侧显示 [BRAND]，后接 'A small companion for quiet breaks.'。右侧显示 'Saved on this device · No account · Original pixel art'，并在启用时包含可选的 [CREDIT] 链接。不要在玩具内显示日期、会员数、评价、定价、云端声明、健康声明或模板许可文本。
   布局：使用全宽顶部 Pixel Line 边框，24px 垂直内边距，以及相同的 1280px 容器。桌面端页脚项目保持弹性行，移动端以 8px 间距堆叠。在 arcade 和 wardrobe 视图中原样复用此页脚。
   动效：页脚为静态。

### [BRAND] — 口袋街机 (`#/games`)
1. **街机介绍与游戏选择器** — 复用共享页头、实时 [COIN_NAME] 余额和页脚。眉题（eyebrow）为 'Pocket arcade'，H1 为 'Play for [COIN_NAME].'。辅助文案为 'Two quick games. Real rewards. Your best scores stay on this device.'。提供两张选择卡，带原创像素缩略图和 Play 按钮。'Snack Catch' 标注为 '30 seconds · Move & catch'，说明为 'Guide [PET_NAME] under falling snacks. Each catch adds 1 to the round reward.'。'Bubble Pop' 标注为 '25 seconds · Aim & pop'，说明为 'Pop drifting bubbles. Large bubbles add 1 and small bubbles add 2.'。每张卡显示已保存的最高分或 'No score yet'。选择卡片会准备对应游戏，但在按下 Start 前不会开始移动。
   布局：保持介绍紧凑，然后在游戏工作区上方使用两列选择器网格。卡片内边距 16px、3px Pixel Line 边框、96px 像素缩略图，选中边框为 Meadow Leaf。游戏工作区在桌面端使用 minmax(0,1fr) 和 280px 说明栏。低于 900px 时改为单列；移动端仅在标签不截断即可容纳时，将选择卡保持为两个紧凑列，否则堆叠。画布在 390px 下以 16/9 比例保持完全可见。
   动效：选择游戏时以 140ms 交叉淡入淡出切换已准备的场景并更新说明。缩略图为静态像素构图，不是自动播放的游戏演示。
2. **Snack Catch 实时游戏** — 共享画布 HUD 显示 'Snack Catch'、Score、Time、当前最高分、Pause 和 Restart。初始画布显示 [PET_NAME] 在篮子旁，覆盖层为 'Catch snacks for 30 seconds.'。主按钮为 Start。游戏过程中，用 ArrowLeft/ArrowRight 或 A/D、指针拖拽，以及两个可见的 48px 触摸按钮（标注 Left 和 Right）让 [PET_NAME] 沿底部水平移动。每 600ms 在种子化水平位置生成一个与变量适配的零食。下落速度从每秒 110 逻辑像素开始，每过一秒增加每秒 4 像素，上限为 230。接住零食加 1 Score 并向待结算的 [COIN_NAME] 奖励加 1；漏接无惩罚。Pause 冻结移动和绝对回合计时器。30 秒时，将 Score 以相同数量存入 [COIN_NAME]，一次性更新总余额和最高分，保存，并显示 'Round complete'、Score、'+N [COIN_NAME]'、Play again 和 'Back to pet'。未完成即退出不结算任何奖励，并在小型确认中说明。
   布局：使用 640×360 逻辑画布，Deep Plum 边框和纯色栖息地颜色游戏区。HUD 位于画布上方一行，移动端换行为三个紧凑组。触摸方向按钮位于画布下方，而非覆盖其上。说明栏重复控制方式、奖励规则和 'Misses cost nothing.'。结果显示为居中的 Deep Plum 面板，覆盖在暂停的最终帧上，画布外无布局偏移。
   动效：使用固定步长移动和小方块接住粒子。绝不移动整个页面、抖动画布或在接住时闪烁。减少动效时使用离散 10fps 位置且无粒子。
3. **Bubble Pop 实时游戏** — Bubble Pop 使用相同的 HUD、结果、暂停、重开、结算和退出行为，回合为 25 秒。初始覆盖层为 'Pop bubbles for 25 seconds.'。最多生成八个气泡，每 550ms 一个，每个生命周期 3.2 秒并缓慢上漂。75% 为半径 22 的 Bubble Sky 大气泡，价值 1；25% 为半径 13 的 Coin Honey 小气泡，价值 2。指针和触摸点击直接戳破。键盘游玩时，方向键或 WASD 移动可见方形准星，Space 戳破中心位于其半径加 10 逻辑像素内的气泡。Start 前显示控制提示，回合中保持焦点在游戏区域。漏接和过期气泡无惩罚。最终 Score 一比一转换为 [COIN_NAME]，一次性更新余额和最高分，并立即持久化。
   布局：保持与 Snack Catch 相同的画布和 HUD 几何结构，使切换游戏时页面不跳动。气泡不能在 HUD 下方或距画布边缘 20 逻辑像素内生成。说明栏列出 Pointer/touch: tap a bubble; Keyboard: arrows or WASD, Space to pop; Large +1, small +2。在画布外提供可访问的文本分数和计时器。
   动效：气泡以每秒 24–42 逻辑像素漂移，无可预测的加速度。戳破在标准动效下仅使用 120ms 四像素圆环。减少动效时移除圆环并使用离散移动，同时保留命中区域和时机。
4. **奖励说明与衣橱链接** — 在游戏工作区下方，显示三条简洁说明：'Rewards bank when a round ends'、'Pausing freezes the clock' 和 'High scores and [COIN_NAME] save on this device'。一个 Dream Lavender 面板写着 'Ready for a new look?'，并带有指向 #/wardrobe 的 'Spend [COIN_NAME] in the wardrobe' 链接。不要添加排行榜、多人、每日连续、广告、随机付费战利品、虚假对手、在线状态或外部分享。
   布局：使用简单的三列说明行和全宽内联衣橱提示，内边距 20px。移动端堆叠说明。将提示保持在可玩区域下方，使其绝不与 Start 或游戏控制竞争。
   动效：仅链接悬停使用一像素位移；说明为静态。

### [BRAND] — [PET_NAME] 的衣橱 (`#/wardrobe`)
1. **更衣室与宠物预览** — 复用共享外壳和余额。眉题为 'Wardrobe'，H1 为 'A new look for [PET_NAME].'。辅助文案为 'Unlock once, wear whenever. Everything is saved on this device.'。左侧预览在 [HABITAT] 中简单的棋盘格像素更衣地毯上显示相同的原创 [PET_KIND] 精灵和当前配饰。其下显示已装备物品名称和 'Remove accessory' 操作，该操作选择始终可用的 None 状态而不删除已拥有物品。'Play to earn more' 链接返回 #/games。
   布局：使用 minmax(0,0.9fr) 和 minmax(0,1.1fr) 两列更衣室，间距 20px。桌面端预览至少 420px 高，宠物渲染为 224×224px，大型 Warm Paper 名牌和 Deep Plum 边框。移动端先堆叠预览，将其高度降至 300px、宠物降至 176×176px，并保持 Remove accessory 和赚取链接可访问且无需水平滚动。
   动效：更换配饰时仅对覆盖层进行 120ms 交叉淡入淡出，并播放宠物的开心姿势。减少动效时立即切换。预览其余部分使用与首页宠物相同的安静待机。
2. **六件物品解锁与装备网格** — 准确渲染六张原创配饰卡，每张带代码绘制的预览、描述、[COIN_NAME] 价格和一个明确操作。Leaf Cap 花费 0 且初始拥有：'A two-leaf cap for sunny lounging.'。Berry Scarf 花费 20：'A coral neckerchief with a square knot.'。Cloud Hood 花费 35：'A sky-blue hood with tiny cream tufts.'。Star Glasses 花费 55：'Honey pixel frames with four-point arms.'。Cozy Cape 花费 80：'A lavender cape with a cream clasp.'。Sun Crown 花费 120：'A five-point crown made for tiny celebrations.'。None 是单独免费状态，不是第七张可购买卡。

已拥有的物品显示 Equip 或 Equipped，并带有 aria-pressed。未拥有的物品显示 'Unlock · N [COIN_NAME]'。解锁时会原子性地检查当前余额，扣除准确价格，将物品添加到已拥有物品中，装备它，更新每个余额显示，保存，并显示 '[Item] unlocked. Looking good, [PET_NAME]!' 如果资金不足，显示 'Need N more [COIN_NAME]'，并且不改变余额或库存。绝不使用虚假购买按钮或结账流程。配饰是同一宠物上独立对齐的叠加层，并在首页、游戏预览和重新加载后保持可见。
   布局：在右栏内使用两列卡片网格，间距为 16px，内边距为 16px。每张卡片顶部有一个 96×96px 的像素预览，名称和价格在同一行，简短描述，底部有一个全宽 48px 的操作按钮。在 390px 时每行保留一张卡片，以便描述和按钮永不截断。Equipped 使用 Dream Lavender（梦幻薰衣草），可负担的 Unlock 使用 Meadow Leaf（草甸叶绿），资金不足使用 Deep Plum（深梅紫）配 Muted Lavender（柔和薰衣草）文字，同时保持可读对比度。
   动效：Unlock 使用八格闪光爆发和短暂的余额高亮。Equip 仅使用预览过渡。没有老虎机式动效、随机稀有度、倒计时或人为稀缺。
3. **Wardrobe help** — 底部注释标题为 'Tiny closet, simple rules'，包含三行：'Play either arcade game to earn [COIN_NAME].'、'Unlocks are permanent on this device.'、'Choose Remove accessory for the original look.' 包含一个文本链接 'Back to [PET_NAME]'，指向 ./index.html。不要添加高级货币、真实货币价格、交易、出售、物品耐久度、过期物品或未实现的 'coming soon' 卡片。
   布局：将注释放在更衣室下方，作为一个扁平的 Deep Plum（深梅紫）面板，内边距为 20px，包含三个短行。在桌面端将返回链接保持在右下角，在移动端保持全宽。
   动效：帮助区域为静态。

## 资产
- 图像：不使用任何第三方、图库、栅格或生成的图像文件。在指定的整数网格上，以原创内联 SVG、CSS 和 Canvas 像素画的形式绘制幼苗标志、favicon、宠物及所有姿势、栖息地、护理道具、配饰叠加层、游戏缩略图、零食、气泡和粒子。在 ASSETS.md 中记录：所有插图和精灵图均为项目原创的代码绘制资产，且不使用任何外部图像文件。
- 图标：界面控件仅使用经过 tree-shaking 的 lucide-react 图标（ISC）：Coins、House、Gamepad2、Shirt、Utensils、ShowerHead、Moon、Heart、Droplets、Zap、Play、Pause、RotateCcw、Trophy、ArrowLeft、ArrowRight、Lock、Check、X、Sparkles 和 ChevronRight。不要导入品牌图标。在 ASSETS.md 中列出所导入的模块、https://www.npmjs.com/package/lucide-react、Lucide 贡献者以及 ISC 许可证。
- 字体：通过 @fontsource/silkscreen 和 @fontsource-variable/nunito（OFL）自托管 Silkscreen 400/700 和 Nunito Variable。在 ASSETS.md 中列出生成的本地 woff2 路径、包源 URL、从随附 OFL 文件中复制的版权持有人以及 OFL 许可证。不使用 Google Fonts、Adobe Fonts 或其他字体 CDN。

## 不要做
- 不要复制或改编任何现有的虚拟宠物品牌、角色物种设计、吉祥物、剪影、标志性动画、精灵图集、屏幕布局、计量条设计、图标、声音、代码、提示词、口号或逐字文案。请从零开始实现指定的原创宠物和界面。
- 不要使用真实人物的肖像、动漫、游戏或电影角色、名人风格的宠物、品牌配饰、可识别的产品设计、标志或现有游戏字体。默认宠物和备用宠物都必须是原创的通用创作。
- 不要使用图库照片、下载的精灵图包、占位图服务、外部图片 URL、Unsplash、Pexels、Pixabay 或生成的栅格素材。所有游戏和栖息地的视觉艺术均为本地 SVG、CSS 或 Canvas 代码。
- 不要使用后端、服务器代码、API 路由、账户、身份验证、数据库、外部 API、分析、广告、通知、云同步、在线排行榜或任何会提交到某处的表单。所有模拟和持久化都留在浏览器中，使用 localStorage。
- 不要伪造模拟。计量条必须根据经过的真实时间推导，所有四个照料操作必须应用精确的效果，两个小游戏都必须可玩且计时和奖励正常工作，购买必须扣除精确的余额，已装备的配饰必须渲染在宠物身上，并且所有指定的状态必须在重新加载后保留。
- 不要用间隔计数代替时间戳、不要重复应用离线衰减、不要为闲置或反复提前退出发放货币、不要重复存入一轮奖励、不要允许负货币，也不要允许无效的已保存 JSON 导致应用崩溃。请钳制数值，并以可见但非破坏性的方式处理存储失败。
- 不要在组件中留下默认变量内容，也不要在值变化时仅仅替换标签。所有文案都放在 src/content.ts 中；宠物特征、栖息地主题、零食艺术、活动消息、奖励标签和衣橱反馈都必须遵循 [BRAND]、[PET_NAME]、[PET_KIND]、[HABITAT] 和 [COIN_NAME]。
- 不要添加死亡、疾病、受伤、惩罚、内疚文案、连续记录丢失、紧急推送通知、操纵性计时器、付费战利品、赌博、真实货币购买，或关于健康、生产力或情感益处的声明。
- 不要从 CDN 或热链接加载脚本、样式、字体、图标、图片、音频或媒体。请自托管固定的 Fontsource 字体，对 Lucide 进行 tree-shaking，在 ASSETS.md 中列出所有第三方文件和许可证，并且不要添加未经核实的音频或视频。
- 不要添加超出固定技术栈的 npm 依赖，也不要使用受限的 UI 源码、商业字体、CC BY-NC、CC BY-SA、未授权的包、游戏引擎、路由器或状态管理库。
- 不要把首屏变成以排版为主的落地页、营销主视觉、静态应用截图、通用 bento 仪表盘、注册漏斗或定价页面。大型动画宠物栖息地和可用的照料控制台才是产品。
- 不要添加滚动劫持、视差、光标跟随、自动播放的游戏回合、自动音频、无限文字跑马灯、闪烁效果、虚假对手、在线活动、公开分数、成员数量、日期或虚构的荣誉。
- 不要输出 source map、不要把 src/ 复制到 dist/、不要使用绝对根路径的资源 URL、不要超过 20 MB，也不要要求服务器。单一的 npm run build 命令必须生成压缩的、相对路径的静态文件到 dist/。
- 不要添加超出 ./index.html、#/games 和 #/wardrobe 的路由，不要使用裸目录链接，也不要让深层链接失效。在每个视图上复用共享的模拟和外壳；对话框和游戏结果是本地界面状态。
- 不要忽视移动端或无障碍。在 1440×900 和 390×844 下必须零控制台错误且无页面级水平溢出；所有控件都需要标签、可见焦点、48px 目标、键盘等效操作、无障碍计量条数值、适合触摸的游戏控件和减少动态效果的行为。
- 不要在玩具内部提及 VibeFather，除了可选的 [CREDIT] 页脚链接，也不要添加 SEO 元数据块、结构化数据、站点地图说明、堆砌关键词的标题或其他无关的营销工作。

---
— Prompt by VibeFather · https://vibefather.ai/t/virtual-pet-companion · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
