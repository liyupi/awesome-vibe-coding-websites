> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 水墨山峦探险（Ink Wash Mountain Adventure）

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一款原创的英文第三人称 3D 动作冒险游戏，背景设定在 [WORLD]——一个虚构的 [SETTING]，面向 [AUDIENCE]。默认宣传语是 'Three guardians. One quiet summit.'。玩家沿着水墨风格的山间小径奔跑，躲避带有预警提示的攻击，并使用三段连击来校准三个守护者训练假人：Reed Sentinel、Stone Sentinel 和 Cloud Sentinel。一个名为 Breath 的耐力系统将攻击与闪避串联起来。雨声、远处的雷声以及原创的绘画风格着色器共同塑造了氛围。整个产品是 index.html 上的一个可玩静态页面，以动态山景和第一位守护者作为首屏视觉锚点，没有营销落地页。

- 受众：独立开发者、前端开发者、设计师、创意编程学习者，以及喜欢短时基于时机的动作游戏的玩家。界面必须通过简洁的操作提示、宽裕的预警提示、宽容的检查点重试和无血腥内容来欢迎首次游玩的玩家，同时保持战斗、渲染和内容模块易于调整。
- 目标：提供一个完整且可重复游玩的动作循环：从下方小径奔跑，识别并躲避每位守护者的地面预警，管理 Breath，打出连击，解决全部三个假人，打开每道练习之门，并走入山顶圆圈以获得完成总结。使键盘、鼠标和触摸操作等效，在重试当前课程时保留先前已解决的守护者，并保持所有玩法本地化和确定性。
- 基调：专注、有氛围、优雅、克制且鼓励。使用简洁的原创美式英语训练文案和安静的环境细节。战斗是对机械假人的非血腥练习，使用 'resolve'、'calibrate' 和 'form learned' 等语言，而非杀戮。没有史诗奇幻 exposition、长棍、共鸣力量、铸钟任务、授权角色，也没有对现有游戏或 AI 产品的引用。

## 技术栈
- 框架：Vite 6 + TypeScript 5
- 样式：原生 CSS（Vanilla CSS）
- 库：three（MIT）、lucide（ISC）、@fontsource-variable/newsreader（OFL-1.1）、@fontsource-variable/inter（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 使用 Vite 的原生 TypeScript 模板搭建脚手架，脚本为 dev=vite、build=tsc && vite build、preview=vite preview。不要添加 React、物理引擎、完整游戏引擎或单独的后处理依赖。
  - 将 vite.config 的 base 设为 './'，build.outDir 设为 'dist'，build.emptyOutDir 设为 true，build.sourcemap 设为 false。启用严格的 TypeScript 检查，并且只在 dist/ 中生成静态文件。
  - 仅安装 three、lucide、@fontsource-variable/newsreader 和 @fontsource-variable/inter 作为运行时依赖，外加 Vite、TypeScript 和 @types/three 作为开发依赖。导入 Newsreader 500/600、Inter 400/500/600/700，以及仅实际使用的 Lucide 图标。
  - 将实现组织为 src/content.ts、main.ts、scene.ts、terrain.ts、player.ts、combat.ts、guardians.ts、controls.ts、weather.ts、shader.ts、ui.ts、audio.ts 和 styles.css。将纯模拟和战斗状态与 Three.js 网格和 DOM 覆盖层分离。
  - 将 BRAND、WORLD、SETTING、AUDIENCE、TAGLINE、守护者显示名称、目标、说明、按钮标签、结果文案和 aria 文案放入 src/content.ts。当变量变化时，重写特定于场景的名称和场景装饰，同时保留坐标、三守护者机制、时序和 UI 结构。
  - 从 BRAND 和 WORLD 派生一个稳定的装饰性随机种子和 localStorage 键。仅保存最佳活跃完成时间和声音偏好；绝不保存日期或声称在线记录。重新加载时不要恢复半完成的战斗状态。
  - 使用一个包含 WebGL 画布和语义化 HTML 覆盖层的 index.html。将所有字体、脚本、图标和生成的视觉内容本地打包；无远程资源或 API。文档固定于视口，且不使用路由器。
  - 以固定的 1/60 秒模拟步长和受限的帧增量运行游戏玩法。仅为装饰性岩石、山脊变化、松树放置和雨偏移设置种子。保持玩家碰撞、攻击窗口、守护者模式、伤害、进度和计时器结果确定性。
  - 限制渲染工作，在隐藏时暂停模拟和音频，在焦点变化时清除按住的输入，并在拆卸时释放所有几何体、材质、渲染目标、纹理、监听器、音频节点和渲染器。

## 变量
- [BRAND] — 游戏名称（默认：“Rainveil”）。一个虚构的一到两个词的游戏标题；绝不能是现有的游戏、平台或 AI 品牌。
- [WORLD] — 山脉世界（默认：“the Rainveil Pass”）。一个虚构的山间路线，用于目标、帮助和完成文案中。
- [SETTING] — 景观设定（默认：“storm-washed mountain retreat”）。景观主题；调整植被点缀和场景布置，但不改变路线或战斗。
- [AUDIENCE] — 玩家受众（默认：“players who enjoy short, timing-based action games”）。目标玩家，自然地用于帮助介绍中，而非作为元数据。
- [TAGLINE] — 游戏标语（默认：“Three guardians. One quiet summit.”）。一行简短的原创文案，显示在游戏名称下方，并在完成时重复出现。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接至 https://vibefather.ai/t/ink-wash-mountain-adventure（默认：是；删除此行以移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图像——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图像路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块键控，以便之后无需触碰组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/ink-wash-mountain-adventure?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
