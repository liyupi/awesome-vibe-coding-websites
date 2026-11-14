> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 私人厨师服务网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一个单页网站。[BRAND] 是一个虚构的私人厨师品牌，在 [CITY] 的家中烹饪 [CUISINE] 晚餐，并带着一句安静的承诺：“[PROMISE]”。品牌识别是亲密的明暗对照（chiaroscuro）：近黑色的暖调底色，烛光琥珀色作为唯一强调色，奶油色字体，Cormorant Garamond 标题搭配 Karla 正文，以及带有情绪感的烛光摄影——菜肴、餐桌与劳作中的双手。首屏以烛光下的一道摆盘菜肴微距特写为锚点，厨师的名字以衬线字体呈现；其下依次是三道品鉴菜单以菜品卡片形式呈现、一场晚餐如何进行的四步时间线、三张带摄影的活动类型卡片、两段安静克制的客户引言、一个可交互的按客计价计算器（含宾客滑块与菜单档位），以及一个本地咨询表单。

- 受众：在 [CITY] 筹划周年纪念或晚宴聚会的东道主、想要每周私人备餐的忙碌家庭——以及改编此页面的私人厨师、晚餐俱乐部主理人、餐饮承办商和品鉴活动组织者。
- 目标：让东道主在一次平静的滚动中从好奇走向咨询：用烛光菜肴定下氛围，用菜单证明手艺，用时间线和活动卡片揭开工作方式的神秘面纱，用计算器让费用变得具体，最后落在一个像写便条而非填表格的表单上。
- 语气：安静的自信——一位让食物自己说话的厨师。简短温暖的句子，不用感叹号，价格平实陈述，演示计算器坦诚说明所用为示例费率。亲密但绝不矫饰。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：react（MIT）、react-dom（MIT）、vite（MIT）、typescript（Apache-2.0）、tailwindcss（MIT）、motion（MIT）、lucide-react（ISC）、@fontsource/cormorant-garamond（OFL-1.1）、@fontsource/karla（OFL-1.1）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 设置：
  - 创建一个 Vite 6 + React 18 + TypeScript 项目，base 设为 './'，build.outDir 设为 'dist'，build.sourcemap 设为 false。不使用路由、无后端、无服务端代码。
  - 安装 Tailwind CSS 3.4，并配置 PostCSS 和 Autoprefixer。使用下方精确的调色板扩展主题，并设置 fontFamily.display 为 'Cormorant Garamond'、fontFamily.body 为 'Karla'。
  - 通过 @fontsource 包在 src/main.tsx 中导入，自托管 Cormorant Garamond 500/600 及斜体 500，以及 Karla 300/400/500/600。绝不从 CDN 加载字体。
  - 使用来自 'motion/react' 的 Motion（useReducedMotion、AnimatePresence）实现计算器数字变化、区块显现和表单成功状态；每个动画都要以 useReducedMotion() 为条件。
  - 将所有文案和数据放在 src/content.ts 中：主厨字符串、三条菜单记录（名称、菜式数量、每位客人价格、菜式列表、备注）、四个步骤、三种活动类型、两条引语、计算器规则、表单标签。当变量值变化时，在该文件中重写依赖的文案，并从 [BRAND_SLUG] 派生询价存储键。
  - 将计算器实现为纯状态：一个客人数量范围输入（2–30，默认 8）、档位单选卡片（Garden 每位客人 $78、Cellar $95、Long Table $135）、选择 Long Table 时有效客人数 = max(guests, 10)、有效人数不足六人时收取固定 $60 厨房附加费，以及显示每位客人价格、附加费行和预估总计（有效客人数 × 价格 + 附加费）。当适用时，将 Long Table 下限显示为提示行。
  - 将询价持久化到 localStorage，键为 [BRAND_SLUG] + '-inquiry'；验证恢复的 JSON 并静默恢复；绝不提交到任何地方。
  - 在构建前将六张生成的图片下载到 Assets 中列出的精确公共路径。在项目根目录创建 ASSETS.md，列出每个文件的路径、来源 URL、作者或生成器以及许可证。
  - 仅使用这些 lucide-react 图标：ArrowRight、Users、Clock、Leaf、Check。
  - 一个纯 <title> 为 '[BRAND] — private chef in [CITY]' 和一个 favicon（一个余烬黑色方块带一个烛焰琥珀色圆点）就足够了；不需要 meta 描述、Open Graph 标签、JSON-LD 或站点地图。

## 变量
- [BRAND] — 主厨姓名（默认："Maren Holt"）。虚构的主厨姓名——它就是品牌：主视觉衬线字体、标识和存储键都源自它。
- [CITY] — 城市（默认："Bridgehaven"）。主厨烹饪所在的城市及其街区；出现在主视觉、活动卡片、引语和页脚中。
- [CUISINE] — 菜系（默认："Mediterranean coastal"）。用两个平实的词概括的烹饪风格；决定主视觉段落和菜单文案的基调。
- [PROMISE] — 承诺（默认："One menu, written for your table — nothing reheated, nothing rushed."）。主厨的一句信条，位于主视觉标题下方，并在页脚中呼应。
- [CREDIT] — 在页脚保留一个小的 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/personal-chef-service-website（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

## 设计
### 颜色
- 余烬黑（Ember black）`#171210` — 页面底色
- 浮起余烬（Raised ember）`#211814` — 卡片、计算器面板、表单面板
- 烛光琥珀（Candle amber）`#D9A05B` — 唯一强调色：分隔线、链接、滑块、档位圆环、关键数字
- 奶油色（Cream）`#F4ECDD` — 主文本
- 灰褐色（Taupe）`#A2937F` — 次要文本、元数据、课程描述
- 细线余烬（Hairline ember）`#33291F` — 分隔线、卡片边框、时间轴轨道

### 字体排印
- 展示字体：主厨姓名、标题、菜单名称、引文：Cormorant Garamond（OFL），字重 500/600
- 正文字体：段落、课程、表单、按钮：Karla（OFL），字重 300/400/500/600

### 布局与动效
- 间距：8px 基础网格。外壳最大宽度 1080px，桌面端侧边内边距 32px，移动端 20px。页头 72px。区块垂直内边距桌面端 104px，移动端 72px。课程列表行间距 14px，配细线分隔；正文每行最多 58 个字符。
- 圆角：全局 2px — 近乎直角，高级餐饮的克制感：卡片、按钮、输入框、照片。唯一的曲线是滑块拇指、时间轴上的圆形数字圆点，以及照片上的琥珀色偏移描边边框。
- 动效：每当滑块或档位变化时，计算器以 200ms 交叉淡入更新每位宾客费率、附加项行和总计；滑块拇指带有柔和的琥珀色聚焦环。
- 动效：四步时间轴在首次显现时，其水平琥珀色轨道在 800ms 内从左到右绘制，数字以 120ms 间隔依次淡入。
- 动效：照片随其所在区块显现时，从 scale 1.02 在 600ms 内落定；区块上浮 14px 并伴随 480ms 淡入，错开 60ms — 缓慢而安静，没有任何弹跳感。
- 动效：询价成功面板在 240ms 内交叉淡入，并带有一个 Check 图标。
- 动效：在 prefers-reduced-motion 下，所有动画都变为即时状态切换；计算器、滑块和表单保持完全可用。
- 图像：六张来自同一次烛光拍摄的照片：近乎黑色的暖调阴影、单一烛光主光、深琥珀色高光、绘画般的明暗对照、50mm 微距镜头、浅景深、暗角。拍摄对象为摆盘菜品、餐桌布置、厨房细节，以及在手腕处裁切的工作中的双手 — 画面中没有任何可辨认的面孔，也没有任何可读的文字或标志。

## 页面与区块
### [BRAND] — [CITY] 的私厨（`index.html`）
1. **页眉与首屏** — 页眉（72px，余烬黑 80% 配背景模糊，底部细线边框）：[BRAND] 使用 Cormorant Garamond 600 加字距；导航锚点 Menus、How it works、Rates、Inquire。首屏：16:9 全出血的摆盘特写，一道黑色渐变遮罩从左下角升起；其上是一个小号 Karla 加字距的眉题 'PRIVATE CHEF · [CITY]'；H1 使用 Cormorant Garamond 斜体 600 'Dinner, composed for your table.'；副行 '[BRAND] cooks [CUISINE] dinners in [CITY] homes — one menu at a time, written around your table. [PROMISE]'；按钮：琥珀描边 'Plan a dinner' 和奶油色文字链接 'See sample menus ↓'；眉题下方一条细琥珀色横线。
   布局：文案锚定在照片之上 12 列网格的左下 7 列，距首屏边缘上方 96px；按钮高 48px。移动端：照片填满视口高度减去页眉，文案堆叠，按钮全宽，每个点击目标至少 44px。
   动效：照片从 scale 1.02 在 600ms 内落定；眉题、H1、副行和按钮以 80ms 错峰上升 14px；琥珀色横线在 500ms 内从 0 增长到 48px。
2. **示例菜单** — 眉题 'SAMPLE MENUS'；标题 'Three ways to eat.' 使用 Cormorant Garamond 600。卡片右侧，一张 3:4 的竖版甜点照片作为安静的陪衬。三张菜品卡：'The Garden Menu — 4 courses · $78 per guest — vegetarian-forward'：'Charred leek vinaigrette'；'Herb gnocchi, brown butter & sage'；'Roast delicata, pistachio dukkah'；'Olive-oil cake, citrus curd'。'The Cellar Menu — 5 courses · $95 per guest'：'Whipped ricotta, honeycomb & rye'；'Hand-cut tartare, crisps & capers'；'Pappardelle, short-rib ragù'；'Sea bass, fennel salmoriglio'；'Dark-chocolate budino, sea salt'。'The Long Table — 7 courses · $135 per guest — for ten or more'：'Oysters, mignonette granita'；'Squash soup, brown-butter crumbs'；'Carpaccio, aged balsamic'；'Agnolotti, sage broth'；'Duck, cherry & farro'；'Cheese, quince & walnut'；'Burnt-honey tart'。网格下方脚注：'Menus shift with the market — tell me what you can't eat. I cook around allergies and preferences, but I don't make medical-grade allergen guarantees; cross-contact is possible in any home kitchen.'
   布局：卡片在抬升的余烬色上呈 3 列网格（移动端单列），2px 圆角和 1px 细线边框；每张卡片：菜单名使用 Cormorant Garamond 600，一行灰褐色菜品数量行，菜品列表以细线分隔，每位宾客价格使用琥珀色 Karla 600。甜点照片在宽屏上填充网格旁的 3:4 槽位，在较窄屏幕上落到卡片上方。
   动效：卡片以 60ms 错峰配合标准上升效果显现；照片从 scale 1.02 落定；其他不动。
3. **一顿晚餐如何进行** — 眉题 'HOW IT WORKS'；标题 'One evening, four movements.' 水平时间轴上的四个步骤：'01 The consult — a twenty-minute call about your table: who's coming, what nobody eats, and the room we'll cook in.'；'02 The market run — I shop the morning of your dinner: fish that was swimming yesterday, bread still warm at pickup.'；'03 The cook — your kitchen from mid-afternoon; stock on the stove, music on, everything scrubbed as I go.'；'04 The table — courses plated and poured while you host. I leave the kitchen cleaner than I found it.'
   布局：一条水平琥珀色轨道配四个编号圆点；每个步骤是一列，数字在 40px 琥珀色圆环中，Karla 600 步骤名，以及两行灰褐色文案。移动端轨道沿左边缘垂直延伸，步骤堆叠。
   动效：轨道在首次显现时从左到右绘制 800ms；数字以 120ms 间隔依次淡入；减少动态效果下为静态。
4. **活动类型** — 眉题 'THE TABLE SETTINGS'；标题 'What kind of night is it?' 三张安静的摄影卡片：'Intimate dinners — 2–8 guests · seated' 配烛光餐桌照片 — 'One menu, plated course by course while the candles burn down. Anniversaries, proposals, Tuesdays.'；'Dinner parties — 10–24 guests · family service' 配长桌照片 — 'Big platters down the middle, seconds encouraged, the kitchen humming behind the door.'；'The weekly prep — 5 dinners, stacked' 配厨房细节照片 — 'I cook once in your kitchen and your week takes care of itself: labeled, chilled, ready to warm.'
   布局：3 列网格（移动端单列）；每张卡片：4:3 照片在 2px 圆角框架中，配 1px 琥珀色描边偏移 6px，然后是标题行，宾客范围用灰褐色，以及两行文案。
   动效：卡片以 60ms 错峰显现；照片从 scale 1.02 落定；琥珀色描边在每个框架后方 200ms 淡入。
5. **来自餐桌** — 一个安静的条带，左侧是 3:4 的厨师双手照片，右侧是两条客户引语：'“She cooked our anniversary like it was hers. The kitchen smelled like a coast we haven't visited yet.” — Rosa & Teo, [CITY]' 和 '“The kitchen was cleaner when she left than when she arrived. The food was the second-best part, which is saying something.” — the Marsh family, [CITY]' — 引语使用 Cormorant Garamond 斜体 500，配琥珀色破折号署名。
   布局：5/7 分割：照片在左，引语在右堆叠，之间以细线分隔；移动端堆叠，照片在前。
   动效：标准缓慢显现；无其他运动。
6. **价格计算器** — 眉题 'RATES'；标题 'Do the math.' 左侧面板：一个从 2 到 30 的 'Guests' 滑块，实时数量以大号 Cormorant Garamond 600 显示，以及三张档位单选卡 — 'The Garden Menu · $78 / guest'、'The Cellar Menu · $95 / guest'、'The Long Table · $135 / guest' — 选中的档位带有琥珀色圆环。右侧面板在抬升的余烬色上：估价 — 'Per guest $78' 用琥珀色，'Kitchen supplement (parties under six) $60' 仅在适用时显示，'Estimated total $684' 大号显示，当选择 Long Table 且宾客少于十人时，提示行 'The Long Table is plated for ten or more — the estimate uses ten guests.' 脚注：'Sample rates for this template — your menu sets the real number after the consult.'
   布局：桌面端 6/6 分割，移动端堆叠；滑块是 2px 细线轨道配 20px 琥珀色滑块和 44px 触摸目标；档位卡是带单选点的行；估价面板是单张抬升余烬色卡片，32px 内边距，总计使用 Cormorant Garamond 600 56px。
   动效：每次变化将变化的行交叉淡入 200ms；滑块带有柔和的琥珀色聚焦环；档位选择以 180ms 动画呈现圆环。
7. **咨询** — 眉题 'INQUIRE'；标题 'Tell me about your table.' 分割：左侧 3:4 甜点盘照片，右侧表单。字段：姓名、邮箱、场合选择（Anniversary、Dinner party、Weekly prep、Just because）、宾客数字输入默认 8，以及一个消息文本域，提示 'What's the occasion? Anything nobody eats?'。本地验证 — 姓名、有效邮箱和场合为必填 — 提交后切换到成功面板：Check 图标、'Inquiry saved — a live site would email [BRAND] directly; this demo keeps it in your browser.'，以及一个 'Write another' 链接，将表单恢复为空。
   布局：桌面端 5/7 分割，移动端堆叠；输入框在抬升的余烬色上，2px 圆角，1px 细线边框和奶油色文字；错误以内联方式用烛光琥珀色呈现（绝不用红色 — 安静），成功面板为 aria-live='polite'。
   动效：成功面板交叉淡入 240ms；输入框带有 1px 琥珀色聚焦环；其他不动。
8. **页脚** — 顶部细线。[BRAND] 使用 Cormorant Garamond 600，下方是灰褐色的承诺 '[PROMISE]'；导航锚点（Menus、How it works、Rates、Inquire）；行 'Cooking in [CITY] and the neighborhoods around it.'；'A fictional chef, menu and rates built as a website template.'；'© [BRAND]' 不带年份；可选的 [CREDIT] 链接。
   布局：两行 — 品牌块在左，导航在右；第二行灰褐色，包含虚构说明、版权和 [CREDIT]；移动端堆叠。
   动效：静态。

## 资源

- 图片：主菜特写。将 https://media.vibefather.ai/assets/acb4b043-d18f-42ab-81c4-beba558f9253/hero-dish.webp 下载到 public/images/hero-dish.webp。Alt：'A plated fine-dining dish in warm candlelight against deep shadows.' 全出血首屏主视觉锚点。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请将这一确切署名记录在 ASSETS.md 中。
- 图片：烛光餐桌。将 https://media.vibefather.ai/assets/acb4b043-d18f-42ab-81c4-beba558f9253/candle-table.webp 下载到 public/images/candle-table.webp。Alt：'Lit taper candles and wine glasses on a dark linen table.' 用于 Intimate dinners 活动卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请将这一确切署名记录在 ASSETS.md 中。
- 图片：长桌。将 https://media.vibefather.ai/assets/acb4b043-d18f-42ab-81c4-beba558f9253/long-table.webp 下载到 public/images/long-table.webp。Alt：'A long dinner-party table set with candles down the center.' 用于 Dinner parties 活动卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请将这一确切署名记录在 ASSETS.md 中。
- 图片：厨房细节。将 https://media.vibefather.ai/assets/acb4b043-d18f-42ab-81c4-beba558f9253/kitchen-detail.webp 下载到 public/images/kitchen-detail.webp。Alt：'A copper pan, fresh herbs and a knife on a worn cutting board in candlelight.' 用于 weekly-prep 活动卡片。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请将这一确切署名记录在 ASSETS.md 中。
- 图片：主厨的双手。将 https://media.vibefather.ai/assets/acb4b043-d18f-42ab-81c4-beba558f9253/chef-hands.webp 下载到 public/images/chef-hands.webp。Alt：'A chef's hands finishing a plated dish with tweezers by candlelight.' 用于客户引语旁。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请将这一确切署名记录在 ASSETS.md 中。
- 图片：甜点盘。将 https://media.vibefather.ai/assets/acb4b043-d18f-42ab-81c4-beba558f9253/dessert-plate.webp 下载到 public/images/dessert-plate.webp。Alt：'A slice of burnt-honey tart on a dark plate with a curl of cream.' 用作菜单卡片旁的高幅点缀图，并再次用于咨询表单旁。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发；请将这一确切署名记录在 ASSETS.md 中。
- 图标：安装 lucide-react（ISC），仅使用 ArrowRight、Users、Clock、Leaf 和 Check。不要绘制任何品牌标志；字标即主厨姓名的字体排版。请将包名和许可证记录在 ASSETS.md 中。
- 字体：通过 @fontsource/cormorant-garamond（OFL-1.1）自托管 Cormorant Garamond 500/600 以及斜体 500。请将包名和许可证记录在 ASSETS.md 中；不要使用字体 CDN。
- 字体：通过 @fontsource/karla（OFL-1.1）自托管 Karla 300/400/500/600。请将包名和许可证记录在 ASSETS.md 中；不要使用字体 CDN。

## 不要做
- 不使用真实的主厨、餐厅、客户或出版物：主厨、菜单、引语和价格均为虚构，页脚需对此作出说明。
- 照片中不得包含可识别的面孔——最多只能裁切到手腕处的手部——画面中任何位置都不得出现可读的文字、字母或标志。
- 定价输出为虚构示例，计算器需对此作出说明；绝不可将估算值呈现为报价，也绝不可暗示预订已确认。
- 咨询表单仅在本地运行：不提交表单、不使用邮件服务、不使用 API、不使用分析工具；持久化到 localStorage 并验证恢复的数据。
- 饮食相关文案保持通用：围绕偏好进行烹饪，绝不承诺无过敏原厨房或医疗级保证。
- 不绑定真实时钟的日期：不使用日期选择器、不提供可预订日历、不根据今天计算季节、页脚不显示版权年份。
- 不使用后端、服务器代码、数据库、认证或第三方脚本。通过单一构建命令输出到 dist/ 的静态文件，使用相对路径。
- 仅通过列出的 Fontsource 包自托管字体；绝不加载 Google Fonts、Adobe Fonts 或任何 CDN 样式表或脚本。
- 生产环境不生成 source map，不将 src/ 复制到 dist/，保持 dist/ 在 20 MB 以下，并保持 Vite 的 base 为相对路径。
- 不使用 Unsplash、Pexels、Pixabay、Google Images、占位图服务或热链接文件；仅使用六张生成的图片。
- 每个内部链接都是页内锚点或文件名，绝不是裸目录；单页必须在 1440×900 和 390×844 下渲染，且控制台零错误。
- 保持调色板克制：烛光琥珀色是唯一的强调色——不使用红色错误状态、不使用渐变、除柔和的琥珀色聚焦环外不使用发光效果。
- 尊重 prefers-reduced-motion：计算器交叉淡入淡出、时间线绘制和显现效果变为即时；滑块和表单保持完全可用。
- 计算器数学必须严格遵循所述规则（2–30 位客人，档位费率 78/95/135，Long Table 十人起订，六人以下加收 $60），并随滑块移动实时更新。
- 所有文案保持美式英语，并从 [BRAND] 和 [BRAND_SLUG] 派生咨询存储键，以便替代变量值永远不会留下默认品牌残留。
- 不做 SEO 工作：不使用 meta 描述、Open Graph 标签、JSON-LD、站点地图或关键词堆砌的标题。一个包含 [BRAND] 的普通标题和一个 favicon 就足够了。

---
— Prompt by VibeFather · https://vibefather.ai/t/personal-chef-service-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
