> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 网页设计工作室网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
一个为虚构的小型工作室设计的网站，该工作室从事网站设计与搭建。首屏是一个用代码绘制的浏览器窗口堆叠，随着访客滚动而展开，展示作品；案例研究配有前后对比滑块，并以示例数字展示可衡量的成果；固定价格套餐（Launch、Grow、Custom）列明所含内容；一个项目计算器（页面、CMS、商店、语言、时间线给出价格区间和所需周数）；一个流程时间线；一个由工作室自有起步站点组成的模板商店；一个常见问题解答；以及一个预约探索通话的预订表单。纸白色、近黑色 #121212、电光蓝 #2F5BFF 和用于小面积点缀的柠檬绿 #C6FF3D。

- 受众：需要网站、并希望在联系任何人之前就知道费用的小型企业和独立执业机构的负责人。
- 目标：在首屏展示作品，让价格易于估算，并预约探索通话。
- 语气：平实、直接、友好，像一位靠谱的承包商：价格、周数和所含内容，没有代理机构行话。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：motion（MIT）、lucide-react（ISC）、@fontsource-variable/bricolage-grotesque（OFL-1.1）、@fontsource-variable/instrument-sans（OFL-1.1）、@fontsource-variable/geist-mono（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务端代码、无外部 API。
- 设置：
  - vite.config.ts：base './'，build.sourcemap false，src/ 中的任何内容都不会被复制到 dist/。
  - tailwind.config.js：扩展颜色 paper #FFFFFF、black #121212、grey #55565C、line #E6E6EA、blue #2F5BFF、blueTint #EEF2FF、lime #C6FF3D；fontFamily display 'Bricolage Grotesque Variable'、sans 'Instrument Sans Variable'、mono 'Geist Mono Variable'。
  - src/components/BrowserWindow.tsx 用代码绘制一个浏览器窗口（带有三个圆点和一个 URL 胶囊的 chrome 栏，然后是由 CSS 块构建的主体）；src/components/SitePreview.tsx 用一小套块类型（nav、headline、image block、card row、footer）填充一个项目的布局。不使用截图。
  - 主视觉是一个 220vh 高的区块，内部有一个粘性视口；对该区块使用 Motion useScroll，通过 useTransform 驱动窗口的旋转、x 和 y，使扇形排列与滚动位置绑定，而不是与时间绑定。
  - src/lib/estimate.ts 将计算器导出为纯函数 (pages, cms, shop, languages, fast, launchPrice) → { low, high, weeks }，因此公式可测试。
  - 所有文案、项目、案例研究、套餐、计算器输入、步骤、起步项、FAQ 和表单选项都以类型化对象的形式存放在 src/content.ts 中；组件从不硬编码文案。
  - 计算器的输入会持久化到 localStorage，键为 [BRAND_SLUG]-estimate，其中 [BRAND_SLUG] 是 [BRAND] 转为小写并用连字符连接后的形式。

## 变量
- [BRAND] — 工作室名称（默认：“Keel Studio”）
- [CITY] — 工作室所在城市（默认：“Seattle”）
- [LAUNCH_PRICE] — Launch 套餐的价格（最多覆盖五个页面）（默认：“$3,200”）
- [CREDIT] — 在页脚保留一个指向 https://vibefather.ai/t/web-design-studio-website 的小链接“Template by VibeFather”（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的取值不同，请为这些取值重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/web-design-studio-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
