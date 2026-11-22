> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 电影宣传网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为虚构的近未来夜车悬疑剧情长片 [FILM_TITLE] 打造官方网站，该片由 [DIRECTOR_NAME] 执导、[STUDIO_NAME] 出品（宣传语：'[TAGLINE]'）。配色方案：深夜青（deep night teal， #0E2A33）、暖钠橙（warm sodium orange， #FF8C3A）、冷银（cool silver， #CFD6DC）与近黑（near-black， #080B0E）。页面一打开即呈现全幅电影预告片式主视觉（hero），在 4 张调色一致的 16:9 夜车剧照之间无缝动画切换，带有轻柔的视差缩放、暖钠变形宽银幕漏光，以及有节奏的标题卡（配有 Play/Pause Sequence、Still Selector 和 Skip-to-Synopsis 控件，且绝不隐藏第 1 帧）。包含可通过吸顶顶部导航到达的结构化区块：(1) 剧情简介与导演手记（片长 118 min，2.39:1 Anamorphic，Dolby Atmos）；(2) 演职员表（Cast & Crew）字幕块，含角色与工种；(3) 剧照画廊（Stills Gallery），点击打开可交互的全屏 Lightbox，支持键盘与按钮的上一个/下一个控件；(4) 原创配乐试听播放器（Original Score Preview Player），直接通过 Web Audio API 合成 3 段原创氛围黑色电影/科幻配乐（'01 · Platform Rain'、'02 · Carriage Four Signal'、'03 · Sodium Horizon'），带 Play/Pause、实时动画频谱条以及音量/静音；(5) 按国家/地区的国际院线上映日程（International Theatrical Release Schedule）（严格禁止 4 位日历日期——使用 'Opening Wave I / Wave II / Wave III' 以及 '70mm & Large Format' 等影院格式）；(6) 'Find Showtimes' 交互式本地演示表单，接受城市/ZIP 与放映格式（70mm / Large Format / Standard），列出虚构的附近影院与晚间放映时间；(7) 一键新闻资料包下载（Press Kit Download），生成干净的可下载制作档案（.txt）。将全部 4 张风格统一的夜车影院 WebP 剧照本地打包在 public/images/ 下（演员严格以背影、剪影或远景出现；零面部特写，图片中零文字）。

- 受众：影迷、电影节策展人、媒体编辑与娱乐制片公司。
- 目标：立即营造影院级悬念与夜间氛围，同时让放映时间、原声试听、剧照与新闻资料都能轻松探索。
- 基调：氛围感新黑色电影（neo-noir）——严谨的宽银幕构图、清晰的银幕字幕排版、零杂乱。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 4
- 库：lucide-react（ISC）、@fontsource/cinzel（OFL-1.1）、@fontsource/inter（OFL-1.1）、@fontsource/jetbrains-mono（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中导入 @fontsource/cinzel（500、600、700）、@fontsource/inter（400、500、600）和 @fontsource/jetbrains-mono（400、500、600）。
  - 将全部 4 张生成的宽屏夜行列车影院风格 WebP 剧照打包到 public/images/ 中，并在 ASSETS.md 中记录它们。
  - 在 src/audio/scoreSynth.ts 中为 3 段配乐提示实现纯浏览器 Web Audio API 合成，并具备干净的启动/停止清理机制。

## 变量
- [FILM_TITLE] — 剧情长片标题（默认：“THE NIGHT MERIDIAN”）。虚构的近未来夜行列车悬疑电影标题
- [DIRECTOR_NAME] — 导演姓名（默认：“Elena Lindstrom”）。虚构的编剧兼导演姓名
- [STUDIO_NAME] — 制作工作室（默认：“Solstice Filmworks”）。虚构的独立电影工作室
- [TAGLINE] — 官方电影宣传语（默认：“Every border crossed erases one passenger's memory.”）。显示在主视觉区的一行氛围感宣传语
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/movie-promo-website（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 近黑影院（Near-Black Theater）`#080B0E` — 主宽银幕背景
- 夜青（Night Teal）`#0E2A33` — 氛围阴影、卡片与夜行钢铁色调
- 钠橙（Sodium Orange）`#FF8C3A` — 变形宽银幕漏光、票务 CTA 与激活提示强调色
- 变形银（Anamorphic Silver）`#CFD6DC` — 主清晰银幕字体与细线边框

### 字体排印
- 片名与标题卡：Cinzel（OFL），字重 500/600/700
- 剧情简介、演职员与放映时间：Inter（OFL），字重 400/500/600
- 时间码、提示时长与规格：JetBrains Mono（OFL），字重 400/500/600

### 布局与动效
- 间距：全出血宽银幕预告片主视觉，随后是纪律严明的信箱式区块，配以深青边框和充裕的呼吸空间。
- 圆角：14px 影院画框，带细微银色细线。
- 动效：轻柔的 Ken Burns 视差漂移与温暖钠光漏光扫掠，在主视觉预告片序列的 4 张剧照间平滑循环（遵循 prefers-reduced-motion）。
- 动效：实时动画均衡器条，与当前激活的 Web Audio 配乐提示同步。
- 动效：每张电影剧照均支持平滑的全屏 Lightbox 查看。
- 图像：来自同一次夜拍的 4 张宽银幕 16:9 影院剧照，统一调色为夜青（#0E2A33）与温暖钠橙（#FF8C3A）：雨湿站台剪影、空荡卧铺走廊、午夜蒸汽高架桥、昏暗观景休息室——零面部特写，零文字。

## 页面与区块
### [FILM_TITLE] · 官方电影网站 (`#/film`)
1. **预告片风格动画多剧照主视觉** — 即时呈现宽银幕电影画面，[FILM_TITLE] 在 4 张剧照间循环切换，带有视差效果、暖色钠灯光漏和标题卡字幕，并搭配播放/暂停序列、剧照选择器圆点、观看放映时间 CTA 和收听配乐快捷入口。
   布局：全出血影院式主视觉（桌面端 min-h-[640px]，移动端干净堆叠）。
   动效：平滑交叉淡入淡出、细微缩放漂移和变形宽银幕光漏光泽。
2. **剧情简介、演职员、剧照灯箱与 Web Audio 配乐** — 官方剧情简介与导演阐述、经典影院式演职员表网格、可打开全屏灯箱的 4 张剧照画廊，以及 3 轨 Web Audio 合成配乐预览播放器。
   布局：居中 1152px 电影感区块，置于 #080B0E 和 #0E2A33 表面之上。
   动效：实时 Web Audio 合成器提示音，配动画电平表。
3. **国际上映时间表、查找放映时间与新闻资料包** — 地区上映波次表格（不含 4 位日历日期）、交互式本地“查找放映时间”城市/ZIP + 格式查询表单（返回示例影院排片），以及一键可下载的新闻资料包档案。
   布局：双栏放映时间与上映时间表位于简洁的新闻资料包下载栏上方。
   动效：即时客户端放映时间查询和 Blob 新闻资料包导出。

## Assets
- image: 下载 https://media.vibefather.ai/assets/73359a95-919f-42c1-9c0e-062b0f7540b8/still-platform.webp 到 public/images/still-platform.webp。Alt：'Silhouette of a lone traveler standing in rain on a misty night-train platform lit by sodium orange lamps and night teal haze'。用途：'Hero Frame 1 and Gallery Still 1'。Credit：由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- image: 下载 https://media.vibefather.ai/assets/73359a95-919f-42c1-9c0e-062b0f7540b8/still-corridor.webp 到 public/images/still-corridor.webp。Alt：'Atmospheric narrow sleeper-train corridor at night with warm sodium wall sconces and deep teal shadows, distant figure walking away'。用途：'Hero Frame 2 and Gallery Still 2'。Credit：由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- image: 下载 https://media.vibefather.ai/assets/73359a95-919f-42c1-9c0e-062b0f7540b8/still-viaduct.webp 到 public/images/still-viaduct.webp。Alt：'Sleek futuristic night train crossing a foggy stone mountain viaduct with glowing amber carriage windows against night teal mist'。用途：'Hero Frame 3 and Gallery Still 3'。Credit：由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- image: 下载 https://media.vibefather.ai/assets/73359a95-919f-42c1-9c0e-062b0f7540b8/still-lounge.webp 到 public/images/still-lounge.webp。Alt：'Moody near-future train observation lounge at night with rain-streaked panoramic glass, warm amber table lamps, and lone passenger seen from behind'。用途：'Hero Frame 4 and Gallery Still 4'。Credit：由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。
- font: 通过 npm 安装 @fontsource/cinzel、@fontsource/inter 和 @fontsource/jetbrains-mono。

## 禁止事项
- 绝不在任何生成的电影剧照中展示面部特写或内嵌标题/文字。
- 绝不在上映时间表或片尾字幕中包含 4 位日历年份或具体日历日期。
- 绝不依赖外部音频或视频流媒体 URL——直接在 Web Audio API 中合成配乐预览。

---
— Prompt by VibeFather · https://vibefather.ai/t/movie-promo-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
