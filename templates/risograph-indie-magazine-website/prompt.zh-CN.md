> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# Risograph 独立杂志网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一本位于 [CITY] 的虚构独立印刷与网络杂志。期号主题：[ISSUE_THEME]。保留荧光丝网印刷（risograph）叠印效果，而非精致的商业卡片式 UI。

- 受众：充满好奇心的读者、社区创作者和独立印刷品收藏者。
- 目标：浏览原创故事、完成一篇长文阅读、收藏一篇文章，并体验真实可信的本地印刷订阅流程。
- 语气：观察敏锐、具体、温和而带有批判性。不要创业口号，也不要编造读者数量。

## 技术栈
- 框架：Vite + React + TypeScript
- 样式：原生 CSS（Vanilla CSS）
- 库：vite（MIT）、react（MIT）、react-dom（MIT）、typescript（Apache-2.0）、@fontsource/archivo-black（OFL-1.1）、@fontsource/ibm-plex-sans（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 将 Vite base 设为 ./，并将 build.sourcemap 设为 false。使用单个 src/content.ts 存放所有可编辑内容，并针对变量变更完全重写其数据。
  - 在 src/styles.css 中实现响应式组件和 CSS 令牌。通过列出的 Fontsource 包打包字体；仅导入实际使用的字重。
  - 提供语义化的原生控件以及键盘/触摸替代方案；实现焦点管理的对话框和仅本地验证的表单反馈。

## 变量
- [BRAND] — 品牌（默认：“Sidefold”）。针对此值重写所有相关标题、条目、标签、alt 和确认信息。
- [ISSUE_THEME] — 期号主题（默认：“Small Acts, Loud Places”）。针对此值重写所有相关标题、条目、标签、alt 和确认信息。
- [CITY] — 城市（默认：“Port Briar”）。针对此值重写所有相关标题、条目、标签、alt 和确认信息。
- [PRINT_PRICE] — 印刷版价格（默认：“18”）。针对此值重写所有相关标题、条目、标签、alt 和确认信息。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/risograph-indie-magazine-website（默认：是；删除此行即可移除）

“页面与区块”下的文案是按默认值撰写的。如果你的值不同，请针对它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 荧光粉 `#FF48B0` — 大型主视觉左侧区域、封面墨版、故事面板。WCAG 相对亮度计算：#16113B 文字置于 #FF48B0 上：5.78:1；#FFFFFF 文字置于 #0078BF 上：4.73:1；#FFFFFF 文字置于 #572178 上：11.09:1；#16113B 文字置于 #FFE64D 上：14.16:1；#16113B 文字置于 #FFFFFF 上：17.84:1。所有常规尺寸的标签/正文/按钮均使用这些配对。装饰性重叠/渐变不承载文字；可读文字须有实色衬底。
- 印刷蓝 `#0078BF` — 大型主视觉右侧区域及实色文章特写色带。
- 叠印紫 `#572178` — 装饰性交叠色版；切勿伪造正片叠底文字。
- 纸黄 `#FFE64D` — 订阅标签页与阅读标记。
- 纸白 `#FFFFFF` — 长读版面。
- 墨色 `#16113B` — 用于粉色/黄色/白色背景上的正文；不可作为背景替代色。

### 字体排印
- 展示字体：Archivo Black（OFL），字重 700
- 正文字体：IBM Plex Sans（OFL），字重 400/700

### 布局与动效
- 间距：1120px 编辑网格，桌面端 40px 栏间距 / 移动端 20px；12 栏封面采用 6/6 分割；88px 主间距 / 移动端 52px；正文最大 65ch。
- 圆角：纸张边角 0px；按钮边缘 2px。2px 深色线条，不使用圆角 SaaS 卡片。
- 动效：首次出现时，封面蓝色色版在 550ms 内偏移 2px，仅一次；报头保持可读，作为单一未偏移图层。
- 动效：故事悬停/聚焦时，插画色版在 150ms 内偏移 2px；进度线跟随实际文章滚动。无循环颗粒。减少动态效果时冻结套准并移除路由过渡。
- 图像：仅使用原创 SVG 孔版印刷插画：半调双手组装桌子、罗纹长凳、圆形扬声器、抽象印刷滚筒；一致的 #FF48B0/#0078BF 油墨与 #572178 叠印。精致的实体刊物样机包含封面正面、书脊、阴影和页口。撰稿人使用原创抽象几何剪纸肖像，描绘轮廓各异的虚构人物；不使用照片或真实肖像，不使用仅含首字母的头像。颗粒为内联种子化 SVG 滤镜或微小 CSS 点阵图案，不透明度 <=.09，绝不叠加于文字上。

## 页面与区块
### [BRAND] — [ISSUE_THEME] (`index.html`)
1. **报头与本期封面** — 页眉：[BRAND] 字标、Stories、Contributors、Print；带计数的收藏书签按钮。眉题 'Independent culture, printed with care'。H1 '[ISSUE_THEME]'。引言 'A repair bench, an open listening room, and the people who keep a place useful. Stories from [CITY] and beyond.' 期号标记 'Issue 04 • 96 pages • Two inks'。CTA 'Read the cover story' 链接到 ./index.html#/story/shared-bench，'Get the print issue' 滚动到印刷区块。封面文字 '[BRAND] / [ISSUE_THEME] / 04'。页脚注 'Made to be read, folded, and passed along.' 页眉菜单在 <760px 时折叠为可访问抽屉。
   布局：56px 报头，背景 #FFE64D，文字 #16113B。首屏最小 620px：左侧 46% 满铺 #FF48B0，右侧 54% 满铺 #0078BF；首屏可见的强色块各 >=30%。粉色上使用 96px Archivo Black 主题字；蓝色上的 440×500 实体刊物视觉带白色边缘，原始粉/蓝半调表格几何以紫色叠印。桌面双栏，移动端堆叠，标题 56px，封面 >=330px 宽。文字不得压在颗粒纹理上或相互重叠。
   动效：一次轻微的 2px 套准入场，随后静止。封面 CTA 即时哈希导航。
2. **故事台** — 标题 'What holds a place together?'。筛选按钮 All / Places / People / Objects，结果计数和 Saved 切换。六条故事记录，含 ID、分区、作者、阅读时长和完整原文：shared-bench，Places，'A bench with room for one more'，Mina Vale，6 min；listening-room，Places，'A room that listens back'，Jules Fen，4 min；shared-supper，People，'The table that travels'，Etta Penn，5 min；pocket-press，Objects，'A press small enough to borrow'，Noor Lane，4 min；repair-ledger，Objects，'Notes in the repair ledger'，Mina Vale，3 min；doorway-garden，People，'Growing things by the doorway'，Jules Fen，5 min。每条都有具体的 24–35 词导语，讲述该物件/场所，原创 SVG 图案，'Read story' 和单独的 'Save story' 操作。筛选与收藏列表协同工作，空状态 'No saved stories in this section yet.' 将 ID 持久化到带命名空间的 localStorage。每张卡片打开自己的完整故事路由，含 4 段实质性的 70–100 词段落；以下方封面文章正文作为质量基准。
   布局：白色 #FFFFFF 网格，标签 #16113B，2px 分隔线；第一条故事跨 3 列中的 2 列，配 420px 粉色 #FF48B0 印刷插画，其他图案 #0078BF/#FFE64D；紫色 #572178 分类标签配白色文字。移动端单列，不做瀑布流阅读重排。筛选栏换行。
   动效：悬停/聚焦时 150ms 墨迹轻推；筛选内容绝不以零不透明度开始动画。
3. **撰稿人** — 'The hands behind the pages'。Mina Vale — 编辑，记录共享物件如何改变一个房间；Jules Fen — 声音写作者，维护聆听笔记；Etta Penn — 插画师，画人们忽视的有用之物；Noor Lane — 版画师，用大问题测试小工具。每个档案含一段 30 词原创短注和一篇文章链接。除非存在真实的本地档案面板，否则不加社交链接。档案打开本地对话框，列出其已发布故事 ID 和简短简介。
   布局：蓝色 #0078BF 整幅色带配白色标题；四个白色档案面板，#16113B 正文，每个配 96px 粉/黄/蓝原创几何虚构肖像，而非首字母。移动端 2 列，<=360px 时 1 列。
   动效：肖像套准对聚焦最多反应 2px；点按打开简介。
4. **印刷台** — 'A good story deserves a paper life.' 'Uncoated paper, two bright inks, and a spine that opens flat. Nothing hidden behind a screen.' 单期：$[PRINT_PRICE]，96 页；三期套装：价格等于 2.5×PRINT_PRICE 四舍五入到最接近的美元；'Domestic shipping included. International availability is not simulated.' 单选 Single / Bundle，数量 1–4，邮箱，国家选择 Domestic / Other。实时总价 = 单价 × 数量。选择 Other 国家时显示 'This local demo does not quote international shipping' 并禁用预订。提交 'Preview print reservation' 校验邮箱和选择，并就地显示回执 'Local demo only. Nothing was charged, ordered, or emailed.' 包含 Clear form。不收集地址，不使用结账措辞。
   布局：黄色 #FFE64D 色带，#16113B 文案；60/40 文本/表单，标题旁另有一幅倾斜的刊物跨页视觉，用 #FF48B0/#0078BF。表单白色，方形 2px 墨色边框，选中单选为紫色 #572178/白色。移动端单列。
   动效：算术即时更新，aria-live 总价；无庆祝彩纸。
5. **页脚** — [BRAND] — 'Independent pages, shared attention.' 链接 Stories、Contributors、Print；可访问的 Return to top。'A fictional publication demo. Reading and reservation controls stay on this device.' 无版权年份。
   布局：紫色 #572178 配白色文字和粉色 #FF48B0 装饰条，32px 内边距。
   动效：静态。

### [BRAND] — 长读 (`#/story`)
1. **完整文章与阅读工具** — 直接打开 #/story 显示 shared-bench。#/story/<id> 选择已知故事；未知 ID 回退到封面故事，并显示小提示 'Opening the cover story'。共享页眉含 Back to stories、文字大小 A−/A+（18–24px）、Save story（本地）、阅读进度 0–100，基于实际文章几何而非计时器。封面文章标题 'A bench with room for one more'，导语 'At the back of a borrowed workshop, one shared surface makes space for a neighborhood to learn by doing.'，作者 Mina Vale，Places，6 min。开篇：'The bench is never quite clear. A blue clamp rests beside a cup of worn pencils, and a chair with three steady legs waits for somebody to notice the fourth. Nobody has written a membership rule. The only agreement is simpler: if you use a tool, leave it ready for the next pair of hands.' 章节 The useful kind of welcome：'Tomas, who keeps the key, says the easiest way to make a room feel private is to label everything with a person’s name. Here the drawers are labeled by what they hold. Screws. Sandpaper. Things that might be useful. The last drawer is the largest. It is also the one visitors open first, because uncertainty is a good reason to start a conversation.' 拉引 'A shared place is built again every time somebody makes room.' 章节 Repairs that travel：'The repair is rarely the whole story. A broken lamp brings in a neighbor who has lived two doors away for years. A stuck drawer becomes a lesson in reading the grain. Before the object leaves, someone writes its problem and its repair in a small ledger. Not a record of expertise, but a record of attention. The next person starts one page further along.' 章节 Leave a little space：'Near closing, the bench returns to something close to empty. The pencils stay. So does the chair, now steady on four legs. Tomas leaves one clear corner because arriving with a broken thing can feel like asking too much. An empty patch of wood is his way of answering before the question is spoken. There is room here. Put it down.' 增加两段同样具体的 70 词段落，分别关于工具借用和账本，使封面故事总字数保持在约 600 词。展示大型代码绘制的孔版印刷夹具/工作台图形，图注 'A shared surface, drawn from the story.' 结尾含相关故事和 Back to all stories；无虚假评论。
   布局：顶栏黄色 #FFE64D / 墨色 #16113B；标题跨页一半 #FF48B0 一半 #0078BF，标题在粉色上，另设独立白色阅读面。正文最大 65ch，背景 #FFFFFF，#16113B 19px/1.7；紫色 #572178 拉引置于黄色面板，正文无纹理。图形重复精确的粉/蓝/紫几何。移动端阅读工具换行，无粘性遮挡。
   动效：#572178 细进度指示器；减少动态时禁用平滑。无动画文字。

## 资产
- 字体：使用 Stack 中列出的 Fontsource 包自托管 Archivo Black、IBM Plex Sans；OFL-1.1，不发起外部字体请求。
- 图像：以 inline SVG 绘制原创期刊封面、六个编辑图案、跨页以及四幅抽象虚构撰稿人肖像；使用带种子的半色调图案和 2px 套印偏移，颜色为粉色 #FF48B0 / 蓝色 #0078BF / 紫色 #572178。不使用外部 artwork、照片、logo 或复制的封面；在 ASSETS.md 中列为原创项目 artwork。

## 不要做
- 构建纯静态演示：不要后端、API 路由、数据库、身份验证、支付、第三方 API、分析、遥测，或会发送网络请求的表单。确认信息必须明确说明是本地演示；绝不要声称已发送订单、预订、生成的服务结果或电子邮件。
- 使用 Vite base ./、相对本地资源、哈希路由或真实的 .html 文件名；不要使用裸目录链接。直接打开每个路由，并确保任何没有 ID 的详情路由渲染其第一个项目。使用 npm run build 构建压缩的 dist/，不要 source maps 或源文件，dist 总大小低于 20 MB。
- 将所有可编辑文案、虚构示例数据、价格、交互标签、alt 文本和 A/B 内容保留在单个 src/content.ts 模块中。保留 3–6 个变量。当变量变化时，一致地重写所有相关内容；绝不要在第二个案例中留下默认品牌或主题。
- 所有可见语言和 alt 文本使用美式英语。不要渲染日历日期、年份、带日期的版权行、虚假的新鲜度或流行度指标。运营工作日和时间、轨道持续时间、相对计时器、问题标识符和尺寸是允许的。
- 仅使用原创代码/艺术/文案、宽松的 MIT/ISC/BSD/Apache/CC0 依赖项和本地捆绑的 OFL 字体。不要复制网站代码、现有徽标、著名角色、商业字体、受限组件或可识别的真人肖像。在 ASSETS.md 中列出每个字体、依赖项和生成的艺术作品及其来源和许可证。
- 运行时一切都在本地：不要热链接图片、字体 CDN、远程脚本、远程音乐或占位图片服务。在构建前准确下载指定的模板托管图片；在 ASSETS.md 中记录完整源 URL、目标路径、alt 文本和生成的署名。
- 在 1440×900 和 390×844 下保持零控制台错误且无水平溢出。触摸目标至少 44px，可见的键盘焦点和带标签的输入，对话框的 Escape/外部关闭和焦点恢复，抽屉焦点陷阱、滚动锁定和结果变化的 aria-live。悬停效果需要等效的焦点/点击路径。
- 尊重 prefers-reduced-motion：移除循环变换、滚动擦除和视差，显示最终静态状态，绝不自动播放音频/视频，无闪烁、频闪或快速全屏亮度变化。不要隐藏等待动画的基本内容。
- 保留指定的调色板，至少两种强烈的英雄色占据大面积。不要中性奶油色/炭灰色回退，不要在正常文本后面使用渐变，不要低对比度的小标签。在 Design 中使用计算出的 AA 文本/背景配对。
- 不要受版权保护的编辑拼贴或真实杂志刊头。绝不要在正文文本上使用 CSS blend-mode；印刷颗粒和套准仅属于插图图层。贡献者视觉是原创抽象虚构几何肖像，在 Design 和 Assets 中一致允许；不要真实肖像或仅首字母替代。
- 对于 altCase Folio Signal，完全重写所有六个故事、贡献者姓名/简介和 600 字主文章，围绕 West Alder 的工具共享和公共餐食；保留相同的部分顺序、套印艺术语言、路由和本地交互。不要留下 Sidefold、Port Briar、默认标题或价格。

---
— Prompt by VibeFather · https://vibefather.ai/t/risograph-indie-magazine-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
