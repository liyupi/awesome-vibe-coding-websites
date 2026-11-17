> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 简历生成器 Web 应用

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一个基于浏览器的简历工作台。直接打开工作编辑器，其中已为 [CANDIDATE]（一位 [PROFESSION]）填充好一份可编辑的简历。预览是屏幕上最大的一块视觉主体，也是用户将要打印的实际文档。

- 受众：求职者、学生和职业顾问，他们正从职位、项目和实用技能中整理出一份简历。
- 目标：让用户在第一次使用中就能修改一条要点、看到它对纸张效果的影响、检查文本阅读顺序，并打印或带走一份可编辑的副本。
- 语气：印刷工作室般安静而精准。使用简短、字面的美式英语标签，以及具体、精炼的简历文案。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：原生 CSS
- 库：react 和 react-dom（MIT）、@fontsource/newsreader（OFL-1.1）、@fontsource/source-sans-3（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 使用 base 为 './'、生产环境压缩、无 source map、以 index.html 为入口的 Vite React 项目。
  - 将所有界面文案、内置选项和种子内容放在一个 content.ts 文件中。当变量值变化时，将联系方式、雇主、成就、教育、技能和示例项目重写为一段连贯的虚构职业经历。从当前品牌和候选人派生标题、文字标识、存储键和下载文件名。
  - 使用带版本的本地简历模型，具有稳定的 section、entry 和 bullet ID、section 可见性和顺序，以及独立的布局设置。由这一个模型驱动表单、纸张、纯文本、打印和 JSON 往返。
  - 为所列字体字重设置本地拉丁 WOFF2 导入。将原始线条图标构建为内联 SVG。将文档标题设置为 '[BRAND] — Resume builder'，并使用原始纸张标记作为 favicon。

## 变量
- [BRAND] — 编辑名称（默认："Quirefield"）。应用字标中虚构的名称。
- [CANDIDATE] — 候选人姓名（默认："Mira Calder"）。一个虚构的申请人，用于派生联系方式和文件名。
- [PROFESSION] — 目标职位（默认："Exhibit Designer"）。直接显示在候选人姓名下方的职位。
- [CAREER_FOCUS] — 职业方向（默认："Accessible museum exhibits, tactile interpretation, and small touring installations"）。使用此专业方向来撰写具体的雇主、职责、技能、教育背景和项目。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/resume-builder-web-app（默认：是；删除此行即可移除）

Pages & Sections 下的文案是为默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 桌面纸张色 `#F7F4EC` — 整体温暖的应用程序背景、顶部栏和编辑器边距。
- 森林绿（Forest） `#1F5F4A` — 字标、激活的编辑器控件、打印按钮和默认简历墨色强调。
- 万寿菊黄（Marigold） `#F2B134` — 应用标志的折角、选中的布局色板，以及预览板上带标签的小纸张尺寸标签。与深色墨色搭配使用。
- 切割垫色（Cutting mat） `#204D40` — 纸张后方的大型预览板，其顶部和左侧边缘带有稀疏的低对比度刻度线。
- 墨色（Ink） `#1C3029` — 主要文本和万寿菊黄上的深色描边。
- 石墨灰（Graphite） `#52635C` — 浅色表面上的辅助标签。
- 轮廓线色（Keyline） `#D0D5C9` — 字段轮廓和细微的手风琴分隔线。
- 校样纸色（Proof sheet） `#FFFFFF` — 文档页面、字段和展开的编辑器表面。

### 字体排印
- 字标、工作区标题和默认打印姓名：Newsreader（OFL），字重 500/600
- 界面、简历正文和替代无衬线标题：Source Sans 3（OFL），字重 400/500/600/700

### 布局与动效
- 间距：使用 4 px 基准。在 1440 px 下，为页眉和工作区设置 48 px 侧边距，最大外部宽度为 1440 px。编辑器和预览之间留 28 px。编辑器使用 370–410 px，预览占据剩余宽度。编辑器内部留 20–24 px，预览纸张周围留 26–36 px。应用正文 15–16 px，行高 1.45。主标题 44 px，紧凑字距，移动端 32 px。简历姓名 38 pt，职位 12 pt，正文 10.5 pt（物理尺寸）。
- 圆角：编辑器面板和垫子使用 7 px，字段和按钮使用 5 px。打印纸张为直角。纸张下方使用单一柔和偏移阴影。
- 动效：选中状态使用 120 ms 颜色变化，拖动区块时显示细万寿菊黄插入线。
- 动效：输入时保持实时纸张静止。减少动效会移除过渡和重新排序时的移动。
- 图像：使用 HTML 和 CSS 构建文档和切割垫。一张白色校样纸漂浮在深森林绿绘图表面上，带有低透明度的精细 24 px 网格线和外边缘的短标尺刻度。板角纸张外侧有一个标记为 Letter 或 A4 的万寿菊黄标签。将原始应用标志绘制为两个偏移的纸张轮廓，带有一个折叠的万寿菊黄角。插图、网格和标尺完全不出现在打印的简历中。

## 页面与区块
### 简历工作区（`index.html`）
1. **工作台页眉** — 将 [BRAND] 字标放在折纸标记旁边。右侧显示一个小状态点和 'Saved on this device'，然后是一个 'File' 菜单和一个带打印机图标的实心森林色 'Print / PDF' 按钮。File 菜单包含 'Import JSON' 和 'Export JSON'。使用 'Resume workspace' 作为栏下方的主标题。在其下方以 '[CANDIDATE] · [PROFESSION]' 显示当前文档，并带一个小型轮廓文件图标。避免使命宣言或营销式介绍。
   布局：将页眉设为 62 px 高，底部带一条细线。将标题和当前文档行与编辑器边缘对齐，并让两列在它们下方从同一基线开始。在手机宽度下将按钮缩短为 'Print'，保持操作可触及，并在需要时将保存状态折叠为可访问的图标。
2. **区块编辑器** — 左侧面板标题为 'Resume sections'。在每一行上使用区块特定的线条图标、展开箭头和拖动手柄。将顺序初始化为 Contact、Summary、Experience、Education、Skills、Projects，然后是一个隐藏的自定义区块，标题为 Workshops。在桌面端初始展开 Experience，其他所有行折叠。为所选条目显示带标签的 Role、Organization、Duration 和 Highlights 字段。添加或移除经历、教育和项目条目，编辑文本，以及添加或移除单个项目符号。Contact 编辑姓名、目标职位、地点和电子邮件。Skills 是可编辑和可移除的标记。'Add section' 创建一个自定义的带标题的文本和项目符号区块。每一行（包括 Contact）都通过带标签的区块操作菜单提供 Hide 或 Show、Move up 和 Move down。在列表两端禁用不可用的移动操作。隐藏的区块保持可编辑，并从所有文档输出中省略。
   布局：使用浅色纸张面板，配以窄分隔线和宽松的行。展开的 Experience 行具有 3 px 森林色左侧线条、浅绿色标题带和白色字段区域。将标签放在全宽输入框上方。保持条目名称紧凑，并为其他条目提供展开控件。为每个操作使用真正的按钮，并将拖动手柄与展开按钮分开。包含一个用于重新排序的实时播报，并在移动后保持焦点在被移动的条目上。
3. **示例文档** — 使用默认名称和目标职位，配以 'Fern Quay' 和 'mira.calder@example.test'。Summary：'I turn field research into hands-on exhibits. My work spans tactile models, listening stations, and touring displays that a small crew can set up in a morning.' Experience：'Exhibit Designer' 在 'Tern Hall Workshop'，为期 '18 months'。项目符号：'Built six listening stations for a traveling sound exhibit, each with a seated reach option.' 和 'Reworked the packing plan so a two-person crew could install the gallery in four hours.' 第二个职位：'Fabrication Assistant' 在 'Brindle Yard Studio'，为期 '11 months'。项目符号：'Prototyped raised-line maps with visitors and revised the key after eight guided tests.' Education：'Diploma in Exhibit Craft'、'Fern Quay School of Making'、'Two-year program'。Skills：'Spatial planning'、'Model making'、'Tactile graphics'、'Shop drawings'。Project：'The Listening Table'，项目备注 'Portable audio exhibit'，项目符号 'Designed a flat-pack listening table with six touch-guided audio points for library visits.' 隐藏的 Workshops 条目：'Relief Mapping Lab'，项目符号为 'Led a hands-on session on making raised maps from everyday materials.' 为替代变量值重写每个依赖细节，包括虚构邮箱。
   布局：在可编辑字段和校样中以相同内容呈现。在默认 Classic 纸张上，以大型衬线姓名锚定左上角，目标职位用森林色，以及紧凑的联系信息行。在联系信息块下方绘制一条细线。区块标题为小型、宽字距的森林色大写字母。将每个职位和组织分组在左侧，时长放在右侧，然后下方有两到三行短行。使用真正的列表、舒适的行距和宽松的白色边距。将此种子内容保持在一张纸上。
4. **预览与排版** — 将右侧面板标记为 'Live preview'。在其标题中放置一个 Paper / ATS check 分段开关，默认选中 Paper。显示一行紧凑的设置，标记为 'Layout'、'Accent'、'Type' 和 'Paper size'。布局选项为 'Classic'、'Sidebar' 和 'Technical'，每个都带有一个其页面几何结构的微型原创线条图。Classic 使用一个叙述性单栏。Sidebar 将技能和教育等辅助区块放在一个 30% 着色栏中，并在每栏内保留所选顺序。Technical 使用紧凑的单栏网格，窄左侧边栏中放置短标签，右侧对齐经历详情。提供 Forest #1F5F4A、Indigo #394984 和 Clay #984C36。字体选项 'Editorial' 和 'Sans' 在 Newsreader 标题配 Source Sans 3 正文，以及全程 Source Sans 3 之间切换。纸张选项为 US Letter 和 A4。默认为 Classic、Forest、Editorial 和 US Letter。选中的控件需要可见标记和可访问名称。
   布局：保持工具栏表面在森林色垫子上方为浅色。将每个纸张盒设为其真实尺寸，8.5 × 11 in 或 210 × 297 mm，边距为 0.65 in 或 16.5 mm。按可用宽度成比例缩放显示包装器，在桌面端上限约为 660 px 宽。在包装器内保持物理尺寸。通过正常的垂直滚动使整张纸可访问。预览标题旁的一条紧凑状态行对于适合的文档显示 'Fits on one page'，当溢出时显示 'Uses N pages' 并带琥珀色警告。基于字体加载、编辑、隐藏、重新排序、尺寸、字体或布局更改后的实际测量布局。
5. **阅读视图和打印** — ATS check 显示所有可见区块的可选纯文本转录，按用户的区块顺序排列，完整字段文本和项目符号各占一行。添加一条简短说明：'Read the text in the order an application form would receive it.' Paper 恢复所选预览。'Print / PDF' 为当前纸张打开浏览器打印对话框，即使选中了 ATS check。打印结果仅包含简历。
   布局：以未缩放的物理宽度测量内容。将溢出分页到额外的匹配纸张中，标题与其第一行保持在一起，条目在必要时在项目符号或行边界处拆分。在屏幕和打印之间共享这些页面盒和相同的简历组件。将 @page 尺寸设置为所选格式，外边距为零，移除仅屏幕的变换、垫板、阴影、界面元素和间隙，保留文档颜色，并在每张纸后分页（最后一张除外）。切勿裁剪较长文本或创建尾部空白页。ATS 阅读窗格使用浅色背景、左对齐换行，无分栏或装饰性字形。
6. **可移植性和窄屏幕** — 将草稿和设置自动保存到 localStorage。写入时显示 'Saving…'，成功后显示 'Saved on this device'。当存储不可用时，在内存中保留编辑并显示 'Local saving unavailable'。导出一个带版本的 JSON 文件，包含完整草稿（包括隐藏区块），文件名源自候选人。通过本地文件选择器导入，在应用前验证版本、字段类型、支持的布局选项和区块结构。导入失败时保留当前草稿并显示通俗语言的错误。重新打开应用会恢复已保存的工作。空存储槽从虚构示例开始。
   布局：在 800 px 以下，在工作区标题下放置一个 Edit / Preview 切换，初始为 Preview 并显示现成的简历。使用全宽控件、44 px 触摸目标、可换行的设置、缩放纸张和单一垂直滚动轴。切换视图会保留选择、草稿数据和布局。提供可见的焦点环、明确的输入标签、可用键盘操作且支持 Escape 和焦点返回的弹出框，以及可访问的保存状态。任何可选的模板署名应放在纸张外部的应用页脚中。

## 资产
- 图标：在本地 SVG 中绘制折纸品牌标记、favicon、布局缩略图，以及用于文件、打印、分节类型、拖拽、展开/收起、可见性和移动的 16–20 px 线性图标。保持描边一致为 1.6 px。装饰性字形对辅助技术隐藏；仅图标控件需提供无障碍标签。
- 字体：从所列 Fontsource 包中打包 Latin Newsreader 500/600 和 Source Sans 3 400/500/600/700。在根目录 ASSETS.md 中记录本地资产路径、源 URL、作者和 OFL-1.1 许可证。将原始内联字形和 CSS 垫片记录为项目绘制资产。

## 不要做
- 不使用后端、API 路由、账户、外部 API、远程表单提交、分析、网络存储或数据上传。所有编辑、文件处理和打印准备都留在浏览器内。
- 不使用真实身份、地址、服务名称、平台标志、雇主标志、推荐语、品牌化简历设计、商业字体、复制的 UI 或受限库代码。所有内容和变量默认值保持美式英语，所有简历细节均为虚构。界面、示例或纸张中只显示时长短语，不显示日历日期、年份范围或时间戳。
- 不暗示认证、ATS 分数、招聘预测、面试或外部验证。ATS 检查保持为纯文本阅读视图。
- 绝不热链或使用 CDN。自行托管字体、图标、脚本和样式，并在 ASSETS.md 中列出第三方资产及其作者、来源和许可证。仅发布采用宽松许可证的依赖项。使用原创的代码绘制 UI 和纸张图稿。
- 不更改固定技术栈或添加服务器。使用 npm run build 将压缩后的静态文件构建到 dist/，并使用相对资产 URL。内部链接必须指向实际文件名或哈希路由。保持 dist/ 低于 20 MB，不包含 source map 或复制的 src/。
- 不将编辑器功能仅隐藏在悬停或拖拽之后，不单独使用颜色表示状态，不裁剪打印文档，不打印应用控件。遵循减少动态效果设置，保持 WCAG AA 正文文本对比度，并在 1440×900 和 390×844 下保持可用布局，控制台零错误且页面无水平滚动。
- 应用内不显示外部品牌署名，仅在其页脚中可选显示模板署名。不在简历或其打印副本上放置署名、状态、设置或看板装饰。

---
— Prompt by VibeFather · https://vibefather.ai/t/resume-builder-web-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
