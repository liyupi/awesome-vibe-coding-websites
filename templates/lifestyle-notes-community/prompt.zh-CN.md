> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 生活方式笔记社区（Lifestyle Notes Community）

请完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一个原创的英文生活方式笔记社区，聚焦于 [NICHE]，面向 [AUDIENCE]。该产品是一个精致的三页静态 Web 应用：index.html 上的瀑布流发现信息流、note.html 上的沉浸式笔记详情页，以及 profile.html 上的特色创作者个人主页。默认品牌是 Morrow & Moss，其编辑承诺是“Small rituals, beautifully shared.”。每个屏幕都必须感觉内容充实、有意为之且可用，而不是像营销样稿。

- 受众：创作者、独立出版人、设计师和社区建设者，他们想要一个以图片为主导的笔记产品，面向 [AUDIENCE]，并具备完全在浏览器中运行的真实内容和社交互动。
- 目标：让访客发现视觉笔记、筛选和搜索它们、打开一篇完整笔记、滑动浏览其摄影图片、进行反应和评论，然后继续前往特色创作者的笔记和收藏。通过五个变量保持所有内容可替换，同时保留相同的布局和交互模型。
- 语气：温暖、善于观察、具体，并带着安静的乐观。像有思想的人分享日常生活中的有用细节那样写作，绝不要像参与度农场。使用简洁的美式英语、虚构的名字、原创对话，并且不对真实用户或在线活动作出任何声称。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：Vite 5（MIT）、React 18（MIT）、Tailwind CSS 3.4（MIT）、Motion（MIT）、lucide-react（ISC）、@fontsource-variable/fraunces（OFL-1.1）、@fontsource-variable/dm-sans（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 配置 Vite，base 设为 './'，build.sourcemap 设为 false，并设置三个显式 HTML 入口点：index.html、note.html 和 profile.html。每个 HTML 文件加载各自的小型 React 入口，共享组件和内容。
  - 使用 Tailwind 进行布局和状态样式，主题中使用提供的颜色、间距、圆角和字体系列。仅添加一个小型全局样式表，用于基础排版、瀑布流列、焦点状态和减少动态效果覆盖。
  - 将所有变量值、导航标签、笔记、创作者简介、标签、评论、收藏、图片路径、替代文本和行动号召放入 src/content.ts。重写每个内容项以适应变更后的变量值；不要在其他情况下保留慢生活文案。
  - 创建共享 TypeScript 模型和一个小型 localStorage 存储，其键由 [BRAND] 的 slug 派生。在本地持久化点赞、收藏、关注、添加的评论和选定的创作者标签页；示例计数和对话是虚构的，从不获取。
  - 从 Fontsource 包导入 Fraunces Variable 和 DM Sans Variable，并使用 Lucide React 图标。打包 public/images 中提供的全部六张图片；不使用远程字体、图标、脚本或图片。
  - 使用共享的可访问按钮、可见的键盘焦点、描述性标签和跳过链接。支持 1440×900 和 390×844 且无溢出，提供至少 44px 的触摸目标，并遵循 prefers-reduced-motion。

## 变量
- [BRAND] — 社区名称（默认：“Morrow & Moss”）。一个虚构的两到三个词的生活方式社区名称。
- [NICHE] — 社区焦点（默认：“slow living and thoughtful homes”）。所有笔记和合集共同围绕的主题。
- [AUDIENCE] — 受众（默认：“people creating calmer, more personal spaces”）。这个社区旨在服务的人群。
- [TAGLINE] — 编辑承诺（默认：“Small rituals, beautifully shared.”）。一句简短的原创句子，用作发现页的标题。
- [CREATOR_NAME] — 精选创作者（默认：“Maya Ellison”）。一位虚构的创作者，其个人资料、笔记和合集会被重点展示。
- [CREDIT] — 在页脚保留一个小型“Template by VibeFather”链接，指向 https://vibefather.ai/t/lifestyle-notes-community（默认：是；删除此行即可移除）

页面与区块下的文案是为默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- 纸色（Paper）`#F7F3EC` — 页面背景和深色按钮上的主文本
- 表面色（Surface）`#FFFCF7` — 卡片、轮播控件和输入框表面
- 墨色（Ink）`#24251F` — 标题、正文文本和深色主按钮
- 鼠尾草绿（Sage）`#56604D` — 激活的筛选器、关注状态、链接和低调点缀
- 陶土色（Terracotta）`#C96F4A` — 点赞、小型装饰标记和图片点缀；切勿在纸色背景上用于小号文本
- 沙色（Sand）`#E3DACD` — 边框、分隔线和未激活控件
- 柔和色（Muted）`#6F7168` — 次要文本和元数据

### 字体排印
- 展示标题和笔记标题：Fraunces Variable（OFL），字重 400/500/600
- 界面、正文和元数据：DM Sans Variable（OFL），字重 400/500/600/700

### 布局与动效
- 间距：使用 8px 基础网格，内容最大宽度 1360px，桌面端边距 40px，移动端边距 20px，桌面端页头高度 72px。发现页主视觉采用 5/7 栏分割，栏间距 48px，顶部内边距 56px，底部内边距 40px。信息流卡片的文本块间距为 20px，瀑布流间隙为 28px。笔记阅读正文宽度上限为 640px。移动端使用 24px 区块间距和 64px 底部导航避让空间。
- 圆角：特色卡片和笔记卡片使用 20px，图片框和输入框使用 16px，小按钮使用 12px，标签和计数器使用全圆角胶囊形。阴影保持极简：仅在浮动轮播控件和移动端导航上使用 0 12px 36px rgba(36,37,31,0.08)。
- 动效：首次加载时，主视觉文案和特色图片在 420ms 内淡入，向上偏移 12px，错峰 70ms；返回页面时不再播放动画。
- 动效：瀑布流筛选和搜索变化使用 Motion 布局动画，时长 260ms，缓动为 [0.22,1,0.36,1]，同时保持文档阅读顺序和焦点。
- 动效：轮播幻灯片以 280ms ease-out 过渡水平移动；支持指针滑动（阈值 45px）、触摸滑动、箭头按钮、圆点指示器和左右键盘按键，不自动播放。
- 动效：点赞和收藏控件获得 160ms 的图标填充和 0.92 到 1 的缩放响应，关注状态文本以简单的 160ms 交叉淡入淡出动画过渡。
- 动效：在笔记（Notes）和收藏集（Collections）之间切换以及本地添加评论时，使用 180ms 淡入和 8px 上移动画。当请求减少动态效果时，禁用变换和平滑滚动。
- 图像：仅使用 assets 中列出的六张协调的本地编辑风格生活方式照片：morning-table.webp、reading-corner.webp、ceramic-hands.webp、kitchen-ritual.webp、balcony-garden.webp 和 creator-portrait.webp。它们共享温暖的象牙色、柔和的鼠尾草绿、陶土色和焦糖色调，柔和的窗光，自然的颗粒感，以及触感自然、不加修饰的瑕疵感。在笔记和收藏集拼贴中有意重复使用这些图片，采用稳定的宽高比容器和焦点裁剪，而非拉伸。特色创作者肖像为完全虚构的成年人，不得与任何真实人物相似。不得出现可读的包装、文字、标志、可识别的品牌、地标、名人或真实人物的肖像。每张图片都从 src/content.ts 获取针对内容定制的美式英语 alt 文本；装饰性重复图片使用空 alt 文本。

## 页面与区块
### 发现笔记（`index.html`）
1. **共享外壳与导航** — 使用排版式 [BRAND] 字标，不复制徽标，链接到 ./index.html。桌面导航包含发现（./index.html）、收藏集（./profile.html?tab=collections）、已保存（./index.html?view=saved）、一个聚焦信息流搜索框的搜索按钮，以及链接到 ./profile.html 的精选创作者头像。为主内容添加跳转链接。在 note.html 和 profile.html 上复用此外壳。在 390px 宽度下，顶栏仅保留字标和头像，并添加固定底部导航，包含发现、已保存、收藏集和个人主页；激活项使用 Sage（鼠尾草绿）和一个小型实心指示器。
   布局：粘性 72px 顶栏，半透明 Paper（纸色）背景，微妙的 Sand（沙色）底边框，1360px 居中内行。桌面链接靠右排列，间距 28px。移动端底部导航为四列 Surface（表面色）栏，带安全区内边距和 44px 触控目标。
   动效：导航状态变化使用 160ms 颜色过渡；粘性头部不移动。
2. **编辑式发现主视觉** — 左侧眉题：'A COMMUNITY FOR [NICHE]'。H1 精确为 [TAGLINE]，默认 'Small rituals, beautifully shared.'。辅助文案：'Unhurried notes about rooms, rituals, and the objects that make a day feel like yours.'。主按钮 'Explore today's notes' 滚动到筛选器；次级文本链接 'Meet [CREATOR_NAME]' 打开 ./profile.html。右侧特色为 [CREATOR_NAME] 的笔记 'The five-minute reset that saved my mornings'，标注 'NOTE OF THE DAY'，链接到 ./note.html?id=morning-reset，使用 morning-table.webp。首屏必须展示实质性的摄影锚点，而非仅排版。
   布局：桌面 12 列网格：五列文案居中对齐偏左，七列用于 4:3 图片卡片。将笔记标题置于 Surface 面板中，与图片左下角重叠 24px，下方为作者和 1,284 次点赞。移动端先堆叠文案，使用 40px Fraunces H1，然后全宽图片和不重叠的说明文字。
   动效：仅应用指定的首次加载交错动画和进入时从 1.02 到 1 的轻微图片缩放；减少动效模式下禁用两者。
3. **标签筛选与本地搜索** — 标题 'Find your next small inspiration' 和实时结果计数。筛选胶囊为 All notes、Slow Living、Home、Food、Craft 和 Wellness。搜索占位符 'Search notes, creators, or tags'。选择标签立即筛选，更新 aria-pressed，并将 ?tag= 写入 URL 而不重新加载。搜索在本地筛选标题、创作者、摘要和标签。?view=saved 将标题替换为 'Your saved notes' 并仅显示已保存项；若无，则显示 'Notes you save will gather here.' 和可用的 'Discover notes' 重置按钮。仅在需要时显示清除筛选。
   布局：主视觉下方 64px 高筛选行，胶囊可水平滚动，桌面右侧 280px 搜索框。移动端搜索占据独立全宽行，胶囊在其下方滚动且不被裁剪。
   动效：结果布局动画 260ms，计数交叉淡入淡出；不延迟实际筛选。
4. **瀑布流笔记信息流** — 填充九条原创默认笔记，含精确标题和点赞数：'The five-minute reset that saved my mornings' — Maya Ellison — Slow Living — 1,284；'A reading corner that finally gets used' — Theo Bennett — Home — 946；'What my first pottery class taught me' — Lena Ortiz — Craft — 731；'A softer start: citrus, mint, and ten quiet minutes' — Maya Ellison — Food — 1,102；'The six-pot balcony garden' — Jun Park — Home — 854；'A linen table for doing absolutely nothing' — Maya Ellison — Slow Living — 669；'Three small objects that make a room feel yours' — Theo Bennett — Home — 512；'The no-recipe weekend lunch I keep repeating' — Lena Ortiz — Food — 988；'Before the messages: a morning on the balcony' — Jun Park — Wellness — 1,476。合理分配所列本地照片，变化 4:3、3:4 和 1:1 封面，并为每条提供一句原创摘要。图片和标题链接到 ./note.html?id=<note-id>。心形和书签按钮切换本地状态并更新计数，不打开笔记。信息流中可使用次级创作者首字母；精选个人主页使用生成的头像。
   布局：桌面使用 CSS 列实现真正的三列瀑布流信息流，平板两列，390px 一列。卡片保持 inline-block，列间距和行间距 28px。图片和标题链接与操作按钮分开。卡片主体包含创作者行、24px Fraunces 标题、两行摘要、标签、点赞数和保存操作。在每个断点保持合理的 DOM 顺序。
   动效：使用 Motion 布局动画筛选；悬停封面缩放不超过 1.025，持续 240ms。触控和减少动效模式移除悬停缩放。
5. **社区提示与页脚** — 紧凑编辑式横幅显示 'THIS WEEK'S PROMPT' 和 'Show us a corner that helps you exhale.'。辅助文案邀请浏览而非发布：'See how [CREATOR_NAME] collected quiet corners, useful objects, and slow morning ideas.'。CTA 'Explore the collection' 打开 ./profile.html?tab=collections。页脚包含 [BRAND]、'A softer place to share what makes a day.'、指向发现、收藏集和个人主页的文本链接，以及可选的 [CREDIT] 链接。不要添加社交图标、虚假应用商店徽章、日期或外部链接。
   布局：全宽 Sand 色调横幅，2/1 文本对按钮网格，32px 内边距，后接带 Sand 顶边框的简单页脚。移动端 CTA 堆叠在文案下方。
   动效：无需显现动画；CTA 悬停仅使用颜色。

### 笔记详情（`note.html`）
1. **笔记轮播与身份信息** — 从 URL 中读取 ?id= 并显示匹配的笔记；没有 id 或 id 未知时，始终显示 morning-reset。默认轮播按顺序使用 morning-table.webp、reading-corner.webp 和 kitchen-ritual.webp，配有唯一的 alt 文本和可见的“1 / 3”计数器。标题上方显示“Slow Living · 5 min read”。H1 为“The five-minute reset that saved my mornings”。作者行使用 creator-portrait.webp、[CREATOR_NAME] 和“Home rituals, secondhand finds, and meals that take their time.”。关注按钮在本地切换为 Following，并与 profile.html 保持同步。点赞和收藏控件显示当前状态和计数。
   布局：在共享页头之后，一个返回链接“Back to all notes”打开 ./index.html。桌面端主区域为 7/5 分栏，间距 48px：轮播在左，粘性身份面板在右。轮播使用稳定的 4:5 画框，采用 contain-safe 焦点裁剪，两侧有上一张/下一张按钮，下方有三个圆点。移动端将标题和作者堆叠在全宽 4:3 轮播之前，随后是操作按钮；所有控件保持至少 44px。
   动效：实现滑动、指针拖拽、方向键、按钮和圆点，使用指定的 280ms 滑动过渡。绝不自动播放；减少动态效果时图片即时切换。
2. **富文本笔记正文与标签** — 开头段落：“For years, I treated mornings like a race I was already losing. Then I started ending each evening with five quiet minutes of reset—not cleaning the whole home, just giving my future self a softer place to begin.” 添加三个带标题的章节。“Start where your eyes land first”说明只清理早餐桌、将一件物品放回原位，并留下一只杯子和当前在读的书。“Make the first action easy”描述摆好水壶、一只喜爱的杯子和一本空白日记，这样泡茶前无需寻找。“Stop before it becomes a project”建议使用五分钟计时器，其余部分保持不动。包含引用语“The point is not a perfect room. It is one kind thing waiting for you.”。结尾：“The next morning will still be a morning. It just will not begin with yesterday's clutter.”。标签 Slow Living、Home 和 Morning 链接到 ./index.html?tag=<tag>。针对变化的变量值重写这整段叙述，而不仅仅是替换标题。
   布局：正文位于轮播下方，在 640px 可读栏内，与其左边缘对齐，正文 18px，行高 1.75，段落间距 32px，章节标题 34px Fraunces。引用语有 3px Terracotta 左边线和 24px Fraunces 斜体。标签在下方以胶囊形式换行排列。
   动效：无滚动劫持或显现门控；所有文章文本立即可见。
3. **评论与相关笔记** — 评论标题包含计数。预置三条原创评论：Nora P. —“The tray by the door is such a small change, but I can see it making mornings calmer.”；Ellis R. —“I tried the five-minute version while my tea steeped. The clear surface really did change the room.”；Amara K. —“Saving the one thing back where it belongs rule for tonight.”。使用首字母头像、姓名和完整句子，不显示日期。评论文本框占位符“Add something thoughtful...”和按钮“Post comment”在本地追加一条去除首尾空白后的非空评论，清空输入框，更新计数，并在重新加载后保留。空提交保留内联的有用错误提示。小提示：“Your reactions and comments stay on this device.”。Up next 显示三张相关卡片，分别对应 reading-corner、citrus-mint 和 linen-table，每张链接到其 note.html 查询。
   布局：桌面端评论占据同一左侧阅读栏，而右侧栏以三张紧凑水平卡片承载 Up next。移动端使用单栏，相关卡片位于评论之后。编辑器是 Surface 卡片，内边距 16px，右对齐 Ink 按钮。
   动效：新评论在 180ms 内淡入并上移 8px；不模拟其他用户活动或延迟虚假发布。

### 创作者个人资料（`profile.html`）
1. **精选创作者介绍** — 显示 [CREATOR_NAME]，默认为 Maya Ellison，配有 creator-portrait.webp 图片和眉题“FEATURED CREATOR”。简介：“Collecting quiet corners, useful objects, and recipes worth repeating. I share small ways to make home feel more like your own.”。详情显示“Portland, Oregon”、“48 notes”、“6 collections”和“12.8K followers”，作为虚构示例内容，不显示日期。关注按钮与 note.html 共享状态。次要按钮“View notes”激活 Notes 标签页。当变量变化时重写位置、计数、简介和专长。
   布局：桌面端个人资料主视觉是 Surface 卡片内的 3/9 网格：左侧 240×280 肖像，文本中左对齐，关注控件右对齐。移动端使用 112×144 肖像位于文本上方，以及全宽关注按钮。名称在桌面端保持 48px，移动端 38px，使用 Fraunces。
   动效：关注文本在 160ms 内交叉淡入淡出；肖像保持静止。
2. **Notes 和 Collections 标签页** — 两个可访问的标签页，Notes 和 Collections，更新 ?tab= 而无需重新加载页面，默认显示 Notes，除非 ?tab=collections。Notes 显示六条 [CREATOR_NAME] 笔记：三条信息流笔记 morning-reset、citrus-mint 和 linen-table，加上“A home for the books I have not read”、“How I choose a secondhand lamp”和“Sunday soup, without the timetable”，复用 reading-corner.webp、ceramic-hands.webp 和 kitchen-ritual.webp。每条笔记打开其可用的 note.html?id= 视图。Collections 显示三张卡片：“The gentle reset”——12 条笔记——morning-table、reading-corner、balcony-garden；“Rooms with room to breathe”——8 条笔记——reading-corner、ceramic-hands、morning-table；“A better cup”——6 条笔记——kitchen-ritual、morning-table、ceramic-hands。选择集合会展开一个内联面板，包含两句原创描述和三个链接笔记标题；再次选择则折叠。没有卡片是无效按钮。
   布局：标签栏有 Sand 底边框和 44px 点击目标。Notes 使用与信息流相同的三/二/一列视觉网格语言。Collections 是桌面端三列网格和移动端单列网格；每张卡片有三图拼贴、28px Fraunces 标题、计数和展开图标。内联集合面板在所选卡片下方横跨网格。
   动效：使用指定的 180ms 标签页过渡和集合的高度/不透明度展开，减少动态效果时即时切换状态，并正确设置 aria-expanded。
3. **创作者寄语与页脚** — 结尾条引用 [CREATOR_NAME]：“I save notes I want to live with, not just look at.”。添加“Browse the community”链接到 ./index.html，并重复共享的简单页脚。不要添加联系表单、外部社交资料或未实现的消息按钮。
   布局：居中的 720px 文本块，上下内边距 48px，随后是页脚。结尾引用在桌面端保持 30px Fraunces，移动端 26px。
   动效：无。

## 资源

- 图片：https://media.vibefather.ai/assets/307d2680-aefc-4aa0-acac-c3171ab038d2/morning-table.webp → public/images/morning-table.webp。Alt：'Linen-covered breakfast table with ceramic tea cups and an open blank journal in warm window light.' 用于发现功能、晨间重置轮播、信息流卡片和合集拼贴。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。下载到本地并记录在 ASSETS.md 中。
- 图片：https://media.vibefather.ai/assets/307d2680-aefc-4aa0-acac-c3171ab038d2/reading-corner.webp → public/images/reading-corner.webp。Alt：'A soft armchair beside a reading lamp and a small stack of unmarked books.' 用于阅读笔记、晨间重置轮播、创作者笔记和合集。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。下载到本地并记录在 ASSETS.md 中。
- 图片：https://media.vibefather.ai/assets/307d2680-aefc-4aa0-acac-c3171ab038d2/ceramic-hands.webp → public/images/ceramic-hands.webp。Alt：'Hands shaping a small clay bowl on a pottery wheel.' 用于陶艺和二手物品笔记以及合集拼贴。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。下载到本地并记录在 ASSETS.md 中。
- 图片：https://media.vibefather.ai/assets/307d2680-aefc-4aa0-acac-c3171ab038d2/kitchen-ritual.webp → public/images/kitchen-ritual.webp。Alt：'Ceramic kettle, citrus, and herbs arranged on a wooden kitchen counter.' 用于美食和晨间仪式笔记、默认轮播以及 A better cup 合集。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。下载到本地并记录在 ASSETS.md 中。
- 图片：https://media.vibefather.ai/assets/307d2680-aefc-4aa0-acac-c3171ab038d2/balcony-garden.webp → public/images/balcony-garden.webp。Alt：'A small balcony garden with terracotta pots and a folded throw over a wooden stool.' 用于阳台和健康笔记以及 The gentle reset 合集。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。下载到本地并记录在 ASSETS.md 中。
- 图片：https://media.vibefather.ai/assets/307d2680-aefc-4aa0-acac-c3171ab038d2/creator-portrait.webp → public/images/creator-portrait.webp。Alt：'A creator seated beside a bright window in a warm, plant-filled room.' 用于精选创作者的个人资料、页眉头像和默认笔记作者行。此人为完全虚构，与任何真实个人均无相似之处。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。下载到本地并记录在 ASSETS.md 中。
- 字体：通过 @fontsource-variable/fraunces 自托管 Fraunces Variable，通过 @fontsource-variable/dm-sans 自托管 DM Sans Variable，两者均为 OFL-1.1。在应用中本地导入，在 ASSETS.md 中列出包和许可证，切勿使用字体 CDN。
- 图标：使用本地打包的 lucide-react 图标（ISC）用于 Search、Heart、Bookmark、ArrowLeft、ArrowRight、ChevronLeft、ChevronRight、Plus、Check、Home、User、Grid2X2 和 Send。不要绘制或导入任何现有社区平台的图标；在 ASSETS.md 中列出 Lucide 及其许可证。

## 禁止事项
- 不得使用任何现有生活方式或社交平台的名称、标志、吉祥物、口号、精确配色方案、自定义字体、独特图标体系、代码、文案、摄影作品或标志性界面构图。
- 不得使用真实人物肖像、名人、授权角色、可识别的产品品牌、可读包装或第三方标志。生成的创作者必须始终是明确虚构的人物。
- 不得添加后端、身份验证、数据库、API 路由、第三方 API、分析统计、真实发布、远程评论或依赖网络的社交计数。所有交互和持久化必须为诚实的纯浏览器行为。
- 不得热链资源，或从 CDN 加载脚本、字体、图标或图片。不得使用 Unsplash、Pexels、Pixabay、占位图服务、受限组件源码或非宽松许可的依赖。
- 不得使用商业字体或外部字体服务；仅可交付指定的自托管 OFL Fontsource 字体族。
- 不得留下占位文案、lorem ipsum、以其他大小写形式残留的 slow-living 内容、空白详情视图、失效按钮、无功能标签页或未实现的导航。没有有效 id 的 note.html 必须显示 morning-reset。
- 不得使用裸目录链接、在静态托管上会失效的纯客户端路由、source map、复制的 src 目录或绝对生产资源路径。使用 ./index.html、./note.html 和 ./profile.html，配合相对资源与 Vite base './'。
- 不得展示日期、虚构的实时状态指示器、在线成员声明，或将被呈现为真实活动的互动数据。所有人物、对话和计数均为虚构示例内容。
- 不得让首屏仅为排版、用通用卡片替换摄影信息流、为轮播添加自动播放，或将文章内容隐藏在滚动动画之后。
- 不得使 dist/ 超过 20 MB、忽略移动端触摸手势或键盘控制、在 390px 宽度下允许水平溢出，或交付带有控制台错误的版本。全程遵循 prefers-reduced-motion。
- 除可选的 [CREDIT] 页脚链接外，不得在产品内提及 VibeFather。所有站点文案、示例数据、标签和 alt 文本保持美式英语。

---
— Prompt by VibeFather · https://vibefather.ai/t/lifestyle-notes-community · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
