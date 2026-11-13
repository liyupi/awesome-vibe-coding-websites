> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 岛屿邮路游戏

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一款原创的英语第三人称 3D 探索游戏，背景设定在 [ISLAND_NAME]——一个虚构的 [SETTING]，面向 [AUDIENCE]。默认标语是 'Three stamps. One open gate.' 玩家引导一位原创的邮递员步行探索，可以按任意顺序发现风、河、山三座神社，在每座神社收集一枚印章，并打开一座向北的寺庙大门完成最终投递。整个产品是一个位于 index.html 的可玩静态页面，以一座活生生的岛屿作为首屏视觉锚点，没有营销落地页。

- 受众：独立开发者、前端开发者、设计师、创意编程学习者，以及喜欢轻松探索的休闲玩家。界面必须通过简短说明、宽容的碰撞、清晰的标识，以及没有计时器或战斗来欢迎首次接触 3D 的玩家，同时保持世界数据和游戏逻辑易于调整。
- 目标：交付一个完整的低压力游戏循环：从邮局出发，沿着路径行走，按任意顺序发现并激活三座神社，看到每枚印章进入任务日志，在第三枚印章后打开寺庙大门，跨过门槛，并到达带有重玩和重置控件的完成面板。在当前设备上保留已收集的印章，并使键盘和触摸操作等效。
- 基调：温和、田园、好奇、有触感，并带着安静的乐观。使用简洁的原创美式英语田野日志文案、友好的寻路提示和小型环境细节。没有战斗、生命条、倒计时、失败状态、惩罚性文案、史诗奇幻传说、纸鹤吉祥物，也不引用任何现有游戏或 AI 产品。

## 技术栈
- 框架：Vite 6 + TypeScript 5
- 样式：原生 CSS（Vanilla CSS）
- 库：three（MIT）、lucide（ISC）、@fontsource-variable/fraunces（OFL-1.1）、@fontsource-variable/dm-sans（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务端代码、无外部 API。
- 配置：
  - 使用 Vite 的原生 TypeScript 模板搭建项目，脚本设置为 dev=vite、build=tsc && vite build、preview=vite preview。不要添加 React、物理引擎、完整游戏引擎或其他渲染框架。
  - 将 vite.config 的 base 设为 './'，build.outDir 设为 'dist'，build.emptyOutDir 设为 true，build.sourcemap 设为 false。启用严格的 TypeScript 检查，并且只在 dist/ 中生成静态文件。
  - 仅将 three、lucide、@fontsource-variable/fraunces 和 @fontsource-variable/dm-sans 安装为运行时依赖，另外安装 Vite 和 TypeScript 作为开发依赖。导入 Fraunces 600/700、DM Sans 400/500/600/700，并且只导入实际用到的 Lucide 图标。
  - 将实现组织为 src/content.ts、main.ts、terrain.ts、scene.ts、player.ts、quests.ts、controls.ts、ui.ts、audio.ts 和 styles.css。将纯路线与碰撞数据同 Three.js 渲染分离。
  - 将 BRAND、ISLAND_NAME、SETTING、AUDIENCE、TAGLINE、神龛名称、标牌文字、目标、说明、对话文案、按钮标签和 aria 文案放入 src/content.ts。当变量变化时，重写特定于场景的名称、植被点缀和场景装饰，同时保留坐标、三印章机制和 UI 结构。
  - 从 BRAND 和 ISLAND_NAME 派生一个稳定的 localStorage 键和一个装饰性随机种子。仅保存已收集的神龛 ID、完成状态和声音偏好；重新加载时恢复已收集的印章和开启的大门，但将信使送回邮局，而不是恢复不安全的位置。
  - 使用一个包含 WebGL canvas 和语义化 HTML 覆盖层的 index.html。在创建任何 CanvasTexture 标牌之前等待 document.fonts.ready。将所有字体、脚本、图标和生成的视觉资源本地打包；不使用远程资源或 API。
  - 仅为装饰性树木、灌木、岩石和叶片偏移设置种子。保持路径样条、神龛位置、神庙坐标、碰撞形状和任务结果具有确定性。限制渲染工作量，在页面隐藏时暂停，并在销毁时释放所有几何体、材质、纹理、监听器、音频节点和渲染器。

## 变量
- [BRAND] — 邮政服务名称（默认：“Amberwick Post”）。一个虚构的小型邮政服务，用于标题、日志、邮局和已保存进度的键名。
- [ISLAND_NAME] — 岛屿名称（默认：“Amberwick Isle”）。一个虚构的岛屿名称，用于欢迎文案、路线日志和完成面板。
- [SETTING] — 岛屿设定（默认：“autumn woodland island”）。世界的季节与景观主题；在不改变路线的前提下调整植被点缀和场景布置。
- [AUDIENCE] — 玩家受众（默认：“players who enjoy quiet exploration”）。目标玩家，自然地用于帮助介绍中，而非作为元数据。
- [TAGLINE] — 游戏标语（默认：“Three stamps. One open gate.”）。一句简短的原创文案，显示在游戏名称下方，并在完成时重复出现。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接指向 https://vibefather.ai/t/island-postal-route-game（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/island-postal-route-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
