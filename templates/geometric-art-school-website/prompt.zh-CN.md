> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 几何艺术学校网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为您自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，这是一所虚构的独立艺术/设计学校，位于 [ADDRESS]，[CITY]，教授 [FOCUS]。原创的基础几何图形既是视觉识别，也是学生作品的材料。

- 受众：好奇的初学者、正在发展的创意从业者，以及正在比较实用课程的潜在学生。
- 目标：筛选课程、查看有分量的学生项目、认识虚构的教职员工、规划开放日参观，并预览一个仅限本地使用的申请。
- 语气：清晰、鼓励，并对过程保持严肃；不提供认证、就业或录取方面的保证。

## 技术栈（Stack）
- 框架（Framework）：Vite + React + TypeScript
- 样式（Styling）：Vanilla CSS
- 库（Libraries）：vite（MIT）、react（MIT）、react-dom（MIT）、typescript（Apache-2.0）、@fontsource/league-spartan（OFL-1.1）、@fontsource/public-sans（OFL-1.1）
- 构建（Build）：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置（Setup）：
  - 将 Vite base 设为 ./，并将 build.sourcemap 设为 false。使用单一的 src/content.ts 存放所有可编辑内容，并针对变量变更完全重写其数据。
  - 在 src/styles.css 中实现响应式组件和 CSS tokens。通过列出的 Fontsource 包打包字体；仅导入实际使用的字重。
  - 提供语义化的原生控件以及键盘/触摸替代方案；实现焦点管理的对话框和仅本地验证的表单反馈。

## 变量
- [BRAND] — 品牌（默认：“Formhouse School”）。针对该值重写所有相关标题、条目、标签、alt 和确认信息。
- [CITY] — 城市（默认：“East Marlow”）。针对该值重写所有相关标题、条目、标签、alt 和确认信息。
- [FOCUS] — 重点（默认：“graphic design, illustration, and objects”）。针对该值重写所有相关标题、条目、标签、alt 和确认信息。
- [ADDRESS] — 地址（默认：“26 Assembly Lane”）。针对该值重写所有相关标题、条目、标签、alt 和确认信息。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/geometric-art-school-website（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 主红色 `#E63946` — Hero 圆形和大型项目面板。WCAG 相对亮度计算：#111111 文字在 #E63946 上：4.53:1；#111111 文字在 #FFC300 上：11.74:1；#FFFFFF 文字在 #1D3FBB 上：8.46:1；#111111 文字在 #FFF9ED 上：18.01:1。所有常规尺寸的标签/正文/按钮均使用这些配对。装饰性重叠/渐变不承载文字；可读文字需有实色背景。
- 主黄色 `#FFC300` — Hero 方形区域和开放日/申请面板。
- 主蓝色 `#1D3FBB` — Hero 三角形区域、展示墙和页脚。
- 暖白色 `#FFF9ED` — 明确的简报阅读底色。
- 墨色 `#111111` — 红色/黄色/暖白色上的正文。
- 白色 `#FFFFFF` — 主蓝色上的文字。

### 字体排印
- 展示字体：League Spartan (OFL)，字重 700
- 正文字体：Public Sans (OFL)，字重 400/700

### 布局与动效
- 间距：最大 1200px，桌面端 48px/移动端 20px 边距，严格 12 列网格，1px 分隔线；8px 单位，桌面端 96px/移动端 56px 区块间距。展示字体 92px/54px，正文 18px/1.6，标签 13px。
- 圆角：矩形和按钮为 0px；圆形仅存在于艺术/肖像语言中。不使用圆角便当盒式仪表盘面板。
- 动效：几何元素以 16px 位移进入一次，持续 350ms，仅带 4 度小幅旋转，无循环浮动块。
- 动效：项目悬停/聚焦通过即时边框显示过程标签，而非隐藏关键文字。减少动效模式下显示所有最终几何形态并移除滑动过渡。
- 图像：代码绘制的原创主色学生作品艺术图：几何海报、构造器皿、抽象印张和空间纸模型。Hero 是一个精心打光的 CSS/SVG 工作室钉板，带有重叠的实体纸张、折叠纸模型、裁切标记、投射阴影和真实的视觉构图。教师使用四幅原创的代码生成 AI 几何剪纸肖像，描绘虚构人物，不似任何真实个体：头/肩形状、独特的发型轮廓和服装、多样的肤色形状和年龄，刻意风格化，无照片级真实面部。这些肖像在图像/资产/禁止项中被允许且要求一致使用。无外部照片、真实学校作品或仅首字母头像。

## 页面与区块
### [BRAND] — 养成创作的习惯（`index.html`）
1. **学校与工作室墙面** — 页眉 [BRAND]、课程（Courses）、学生作品（Student work）、师资（Faculty）、开放工作室（Open studio）、'Start an application'。眉题 '[CITY] / Independent creative learning'。H1 'Make a practice of making.' 简介 'Study [FOCUS] through small studio groups, patient critique, and work you can hold in your hands.' 行动号召 'Find your course' 和 'Plan an open-studio visit'。小事实条 '6 practical courses / studio groups up to 14 / beginner routes available'；这些是虚构的课程规格，并非成果承诺。主视觉图钉板说明 'Original fictional student work, drawn for this school concept'。无证书/认证徽章。
   布局：暖白 #FFF9ED 页眉/墨色 #111111。主视觉左侧 42% 为大面积红色 #E63946 文字区配黑色 H1，右侧 58% 为构建的黄色 #FFC300 与蓝色 #1D3FBB 图钉板，每种强烈色相覆盖 >=20% 首屏。画面包含 3 张原创分层海报和一个折叠几何纸艺物件；而非几个空圆圈。红色上 92px League Spartan H1，移动端 54px。桌面 2 栏/移动端堆叠，完整视觉锚点至少 340px 高。
   动效：一次 350ms 几何入场；无持续漂移。
2. **课程查找器** — 标题 'A clear way into your next discipline.' 筛选器 学科（Discipline）全部（All）/ 平面（Graphic）/ 插画（Illustration）/ 物件（Objects）与 形式（Format）全部（All）/ 晚间（Evening）/ 全日制（Full-time）/ 周末（Weekend）；显示结果计数和重置（Reset）。六条记录：Graphic Foundations，平面，晚间，8 周，周二/周四 6–8 PM，$640，初级，产出 6 件套品牌识别系统；Editorial Systems，平面，全日制，6 周，周一–周四 10 AM–3 PM，$1480，中级，产出 24 页出版物；Image and Story，插画，晚间，8 周，周一/周三 6–8 PM，$680，初级，产出一组 8 张原创图像；Print Experiments，插画，周末，4 周，周六 10 AM–2 PM，$420，全级别，产出 3 色印刷套装；Object Study，物件，全日制，6 周，周一–周四 10 AM–3 PM，$1520，中级，产出小材料原型；Paper Structures，物件，周末，4 周，周日 10 AM–2 PM，$440，初级，产出可折叠空间模型。每张卡片 'View outline' 打开模态框，含 3 个具体学习模块、包含材料/自带清单和以评图评估的说明。'Choose this course' 将课程 ID 带入申请表并滚动至该表。组合筛选器，提供真实的空结果状态并保留选择。无报名/席位可用性声明。
   布局：暖白 #FFF9ED 网格，墨色 #111111 配可见 1px 分隔线。六张等大卡片 桌面 3 栏/移动端 1 栏，类别形状 红 #E63946/黑、黄 #FFC300/黑 或 蓝 #1D3FBB/白；表单区域从不使用图案。搜索/筛选行自动换行。
   动效：即时筛选，大纲模态框焦点管理；无内容隐藏在悬停后。
3. **学生作品墙** — 标题 'The work tells you what learning feels like.' 八个原创项目，含创作者、媒介和 60 词过程说明：Common Ground 作者 Ada Penn，平面，模块化海报网格；Three Small Rooms 作者 Ivo Reed，物件，折叠纸空间研究；Borrowed Light 作者 Tia Moss，插画，3 色窗户印刷；Useful Errors 作者 Ren Vale，平面，故意错位的字体块，仅含原创文本；Moving Still 作者 Neri Hale，插画，6 帧抽象运动序列；A Cup in Parts 作者 Sol Fen，物件，可堆叠纸容器；The Quiet Route 作者 Mae Lin，平面，一个虚构的导视网格；Held Together 作者 Kian North，物件，互锁纸板接头。画面为精细原创 SVG/CSS，而非空白占位块。全部（All）/ 平面 / 插画 / 物件 筛选器更新墙面/计数。点击项目打开大图视图，含项目标题/创作者/媒介、60 词过程和 3 条要点决策。上一项/下一项在当前筛选内循环，Escape 关闭。'Save work' 本地收藏，带仅显示已保存切换和清除。无真实设计师署名或复制的学校练习作品。
   布局：主蓝色 #1D3FBB 整面墙配白色 #FFFFFF 标题；4 列严格瓷砖网格 / 移动端 2 列，最小 150px 瓷砖。原创画面在红 #E63946/黄 #FFC300/蓝 #1D3FBB/白之间切换，呈分层版画式构图；说明文字在不透明暖白 #FFF9ED/墨色上。首块瓷砖在桌面端 2×2 特写，移动端正常流。
   动效：画面焦点边框 3px 黄色；项目对话框即时或 180ms 淡入，减少动态效果时除外。
4. **有观点的师资** — 标题 'Learn with people who keep making.' 四位虚构师资：Mara Ellin，平面负责人，构建小型出版系统并将网格作为有用约束教授；Davi Rowan，插画导师，以形状序列工作，不依赖具象图片叙事；Amara Senn，物件导师，测试纸接头和低浪费原型制作；Jules Taro，工作室导师，通过清晰反馈和反思过程支持作品集。每人有 55 词原创简介、当前实践说明和 'See teaching approach' 对话框，含具体练习和关联课程。全部虚构，无真实学校/雇主/奖项。提供实际风格化剪纸肖像，而非首字母。
   布局：暖白 #FFF9ED 配墨色 #111111 文字，桌面 4 个等大档案 / 移动端 2 再 1。每张 220px 原创肖像为几何头肩像，轮廓各异：Mara 短卷深发/红色方形外套，Davi 棱角椒盐发/蓝色圆形衣领，Amara 高圆发/黄色三角领口，Jules 波浪发/红色半圆衣领；多样的暖肤色纸形，无真人相似。主色底色强烈且不透明。
   动效：肖像纸层在焦点时上浮 2px；无目光跟随或面部变形。
5. **开放工作室本地计划** — 标题 'Come with questions. Leave with a direction.' 'Illustrative recurring Saturday open studio; this page does not reserve a real visit.' 议程：10–10:20 AM 欢迎与建筑参观；10:30–11:10 AM 课程工作室参观；11:20 AM–中午 作品集对话；中午–12:30 PM 材料演示。选择一个或多个复选框场次，小组人数 1–4，无障碍说明可选最多 200 字符，姓名/邮箱。所选场次构建本地行程；无重叠选项。提交 'Preview my studio visit' 验证姓名/邮箱和至少一个场次，打开摘要显示所选工作日/时间和小组人数。明确 'Local demo only. No visit, email or accessibility request was sent.' 编辑/重置工作；无虚构剩余席位或确认号。
   布局：黄色 #FFC300 整节配墨色 #111111，55/45 议程/表单。议程有蓝色 #1D3FBB/白色时间标签和红色 #E63946/墨色几何标记；表单在暖白 #FFF9ED 上。移动端单栏，场次保持可见，复选框目标 44px。
   动效：本地行程更新 aria-live；错误聚焦第一个字段。
6. **申请台与页脚** — 标题 'Show us what you are curious about.' 简介 'You do not need a finished practice to begin. Tell us what you want to explore.' 表单字段 姓名、邮箱、课程下拉、经验 初级（Beginner）/ 发展中（Developing）/ 回归（Returning）、动机文本域 60–600 字符带计数、可选作品集 URL 文本（仅验证 URL 格式，从不抓取）、复选框 'I understand this is a local application demo'。从查找器选择的课程预填充。提交 'Preview application'。内联验证，本地摘要显示所有输入内容和所选课程价格/时长，'Nothing was submitted, uploaded, reviewed or emailed. This preview stays in your browser.' 编辑、清除和下载本地摘要 .txt；不自动持久化个人数据，仅显式 在此设备保存草稿 存储并带 清除草稿。FAQ 'Is this accredited?' — 虚构学校演示，未声称认证；'Is equipment provided?' — 课程大纲显示示意材料；'Does the form reach admissions?' — 无后端。页脚 [BRAND]、[ADDRESS]、[CITY]、返回课程、本地演示说明；无年份/日历日期。
   布局：主红色 #E63946 色带配墨色 #111111 标题；大暖白 #FFF9ED 表单面板，蓝色 #1D3FBB/白色按钮，黄色 #FFC300 辅助条。桌面 2 栏 表单/FAQ，移动端单栏。页脚蓝色 #1D3FBB 配白色正文和黄色装饰方块。
   动效：无障碍验证和本地文件下载；无虚假提交加载器。

## 资产
- 字体：使用 Stack 中列出的 Fontsource 包自托管 League Spartan、Public Sans；OFL-1.1，无外部字体请求。
- 图像：用原创内联 SVG/CSS 创建全部八件学生项目作品和分层工作室墙面主视觉。使用红色 #E63946、黄色 #FFC300、蓝色 #1D3FBB 和暖白色 #FFF9ED 绘制精细构图和实体纸张折痕。原创 AI 生成的项目作品，不复制任何海报/艺术家/标志；在 ASSETS.md 中列出创作的组件及其来源。
- 图像：必需的教师图像：按照 Faculty 中的规定，以统一的风格创作四幅原创几何剪纸头部/肩部 SVG 肖像。它们描绘 AI 生成的虚构人物，不 resemblance 任何真实个人；有意采用非写实风格，轮廓和肤色纸片形状各异，不得以仅含首字母的替代品代替。将其视为原创项目肖像资产，并在 ASSETS.md 中记录其来源。无需外部照片 URL。

## 禁止事项
- 构建纯静态演示：无后端、API 路由、数据库、身份验证、支付、第三方 API、分析、遥测或发送网络请求的表单。确认信息必须明确说明是本地演示；绝不可声称已发送订单、预订、生成的服务结果或电子邮件。
- 使用 Vite base ./、相对本地资源、哈希路由或真实 .html 文件名；不得使用裸目录链接。直接打开每个路由，并确保任何没有 ID 的详情路由渲染其第一个项目。使用 npm run build 构建压缩的 dist/，无 source map 或源文件，dist 总大小低于 20 MB。
- 将所有可编辑文案、虚构示例数据、价格、交互标签、alt 文本和 A/B 内容保留在单个 src/content.ts 模块中。保留 3–6 个变量。当变量更改时，一致地重写所有相关内容；绝不在第二个案例中保留默认品牌或主题。
- 所有可见语言和 alt 文本使用美式英语。不渲染日历日期、年份、带日期的版权行、虚假新鲜度或流行度指标。允许运营工作日和时间、轨道持续时间、相对计时器、问题标识符和尺寸。
- 仅使用原创代码/艺术/文案、宽松的 MIT/ISC/BSD/Apache/CC0 依赖项和本地捆绑的 OFL 字体。不得复制网站代码、现有徽标、著名角色、商业字体、受限组件或可识别的真人肖像。在 ASSETS.md 中列出每个字体、依赖项和生成的艺术作品及其来源和许可证。
- 运行时一切均在本地：无热链接图片、字体 CDN、远程脚本、远程音乐或占位图片服务。在构建前精确下载指定的模板托管图片；在 ASSETS.md 中记录完整源 URL、目标路径、alt 文本和生成的署名。
- 在 1440×900 和 390×844 下保持零控制台错误且无水平溢出。触摸目标至少 44px，可见键盘焦点和带标签的输入，对话框的 Escape/外部关闭和焦点恢复，抽屉焦点陷阱、滚动锁定和结果变化的 aria-live。悬停效果需要等效的焦点/点击路径。
- 尊重 prefers-reduced-motion：移除循环变换、滚动擦除和视差，显示最终静态状态，绝不自动播放音频/视频，无闪烁、频闪或快速全屏亮度变化。不得隐藏等待动画的基本内容。
- 保留指定的调色板，至少两种强烈的英雄色占据大面积。无中性奶油色/炭灰色回退，正常文本后无渐变，无低对比度小标签。使用设计中计算的 AA 文本/背景配对。
- 不得省略教师视觉元素或使用仅首字母头像。明确允许并要求几何 AI 创作的虚构剪纸肖像，在 imagery/assets/donts 中保持一致；无真人肖像、名人、复制肖像或外部照片。
- 不得用著名艺术品、真实学生作品、复制的设计学校海报或空白色占位符替代八件原创详细作品。每个课程大纲和项目对话框都需要大量原创内容。
- 开放日参观预览和申请完全保持本地：无网络提交、上传、录取承诺、发送电子邮件、实际预订、虚构空缺或认证声明。可选的作品集 URL 从不获取。明确保存的草稿可以清除；不得静默存储个人数据。
- 对于 Common Shape Institute，将所有六门课程重写为空间设计/印刷/动态，并带有适当的筛选标签，所有八个项目标题/过程描述、教师姓名/简介以及 Lake Fen 的两套表单文案。保留主调色板、几何剪纸人物、网格、本地交互和课程到表单状态。不得留下默认学校、城市或重点。

---
— Prompt by VibeFather · https://vibefather.ai/t/geometric-art-school-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
