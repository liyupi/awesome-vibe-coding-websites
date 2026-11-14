> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 复古轮滑场网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，这是一家位于 [CITY]、地址为 [ADDRESS] 的虚构轮滑场。[TAGLINE] 是它面向顾客的欢迎语；保留带有 1970 年代风情的室内环境，以及特定的焦橙色/芥末黄视觉识别。

- 受众：家庭、初次滑冰者、与朋友聚会的成年人，以及派对组织者。
- 目标：找到合适的场次，查看租赁装备是否合脚，比较派对费用，并提交一份诚实的、仅在本地进行的预订预览。
- 语气：友好、清晰、有社区意识，并附上实用的安全与年龄信息。

## 技术栈
- 框架：Vite + React + TypeScript
- 样式：Vanilla CSS
- 库：vite（MIT）、react（MIT）、react-dom（MIT）、typescript（Apache-2.0）、@fontsource/fredoka（OFL-1.1）、@fontsource/dm-sans（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 将 Vite base 设为 ./，并将 build.sourcemap 设为 false。使用单个 src/content.ts 存放所有可编辑内容，并针对变量变更完全重写其数据。
  - 在 src/styles.css 中实现响应式组件和 CSS 令牌。通过列出的 Fontsource 包打包字体；仅导入实际使用的字重。
  - 提供语义化原生控件和键盘/触摸替代方案；实现焦点管理的对话框和仅本地验证的表单反馈。

## 变量
- [BRAND] — 品牌（默认值："Rollerloop"）。针对该值重写所有相关的标题、条目、标签、alt 和确认信息。
- [CITY] — 城市（默认值："Cedar Quay"）。针对该值重写所有相关的标题、条目、标签、alt 和确认信息。
- [ADDRESS] — 地址（默认值："48 Marigold Lane"）。针对该值重写所有相关的标题、条目、标签、alt 和确认信息。
- [TAGLINE] — 标语（默认值："Good wheels. Great company."）。针对该值重写所有相关的标题、条目、标签、alt 和确认信息。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/retro-roller-rink-website（默认值：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值编写的。如果你的值不同，请针对它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 焦橙色（Burnt orange）`#E8590C` — Hero 大色块和全宽波浪条纹。WCAG 相对亮度计算：#32170E 文字在 #E8590C 上：4.64:1；#32170E 文字在 #F2B807 上：9.20:1；#FFFDF5 文字在 #32170E 上：16.31:1；#FFFDF5 文字在 #546B24 上：5.88:1；#32170E 文字在 #FFFDF5 上：16.31:1。所有常规尺寸的标签/正文/按钮都使用这些配对。装饰性重叠/渐变不承载文字；可读文字使用纯色底衬。
- 芥末黄（Mustard）`#F2B807` — Hero 大色块、表单选项、票券。
- 巧克力色（Chocolate）`#32170E` — 所有深色文字；页脚和深层分隔线。
- 牛油果绿（Avocado）`#546B24` — 日程特色面板和波浪条带。
- 纸白（Paper）`#FFFDF5` — 阅读/表单面板，不用作主 Hero 背景。

### 字体排印
- 展示字体：Fredoka（OFL），字重 700
- 正文字体：DM Sans（OFL），字重 400/700

### 布局与动效
- 间距：最大宽度 1180px，桌面端 40px/移动端 20px 边距。8px 间距单位，桌面端区块间距 88px，移动端 56px。Hero 55/45 分栏，日程 3 列，派对 3 列。
- 圆角：36px 照片拱形圆角，20px 套餐面板，999px 胶囊按钮，3px 巧克力色边框。波浪分隔线为手工编写的 SVG，绝不覆盖标签。
- 动效：装饰性迪斯科闪光点在 3 秒内于 .65 和 1 之间缓慢改变不透明度，不闪烁；暂停装饰开关保持持久。
- 动效：卡片在悬停/聚焦时上浮 3px，持续 180ms，区块显现最多 16px 一次；减少动效会移除两者。无水平自动跑马灯。
- 图像：五张一致的写实暖调编辑风格照片，描绘同一个虚构的 1970 年代轮滑场，焦橙/芥末黄/牛油果绿/巧克力色和抛光枫木地板，柔和钨丝灯光配轻微胶片颗粒。Hero 是宽阔的轮滑场建筑，不是人脸。无文字、标志或品牌设备。一个家庭动作场景仅从背后展示腿/溜冰鞋，无可辨认的面孔。照片是 AI 虚构场地占位图，不代表真实地址。绝不替换为纯矢量商业图像。

## 页面与区块
### [BRAND] — [TAGLINE] (`index.html`)
1. **Groovy 欢迎区** — 页眉 [BRAND]、Sessions、Rentals、Parties、Snack bar、'Plan a visit'。H1 '[TAGLINE]'。简介 'A warm floor, a good groove, and room for every kind of skater in [CITY].' CTA 'Find your session' 和 'Plan a party'。信息胶囊 '[ADDRESS], [CITY]'、'Rentals from $5'、'First-timers welcome'。照片说明 'A fictional rink, shown with generated venue photography'。紧凑提示 'No outside skates with exposed metal parts. Helmets welcome.'
   布局：页眉芥末黄 #F2B807/巧克力色 #32170E。主视觉区有 55% 纯色 #E8590C 文字面板和 45% #F2B807 照片框，两者均为首屏大块可见元素；#32170E H1 82px/0.98 Fredoka 700。hero-rink.webp 拱形裁切 560×480，带迪斯科球细节，下方是牛油果绿 #546B24/巧克力色波浪。移动端 H1 50px，随后是大照片，无面部特写。
   动效：单次 450ms 入场；文字不弹跳。
2. **Pick your roll** — 标题 'There is a session for your kind of good time.' 筛选器 All / Family / Adults / Learn 和星期选择 All / Tuesday / Thursday / Friday / Saturday / Sunday。数据：Tuesday Learn to Roll 4–5 PM，7+，$14 含租赁，容量演示备注；Thursday Easy Eight 6–8 PM，全年龄，$12 + $5 租赁；Friday Afterglow 8–11 PM，18+，$18 + $5；Saturday Family Spin 11 AM–1 PM，全年龄，$12 + $5；Saturday Groove Club 7–10 PM，16+，$16 + $5；Sunday First Wheels 10–11 AM，5–10 岁需成人陪同，$14 含租赁。除非注明，门票仅为入场费；观众 $3。结果计数、Reset filters、明确的空结果状态。'Choose session' 选中并滚动到预约表单，显示已携带的选择。显示 'Recurring weekly sessions; this demo does not display live capacity.'
   布局：芥末黄 #F2B807 背景配 #32170E 标签；3 列白色 #FFFDF5 票券卡片，带票券缺口和橙色 #E8590C 底边线。成人徽章巧克力色/白色；筛选状态绝不单靠颜色区分。移动端垂直卡片，筛选器换行。
   动效：即时筛选；焦点保持在触发控件上。
3. **Find your rental fit** — 'Your wheels are waiting.' 青少年 Y8–Y13 和成人 US 1–13 分段选择器；可选尺码按钮。辅助说明 'Rental sizes are a guide, not a live inventory check. Start with your usual sneaker size; our counter team helps with fit.' 青少年/成人切换会重置不兼容尺码；所选尺码出现在规划器中。控件 'Add $5 rentals' 复选框（若所选场次含租赁则禁用并说明）。备注 'Socks required. Bring your own or add a $3 pair at the counter.' 相邻故事 'Learning is allowed to look wobbly' 和 'Hold the rail, take a breath, and ask for a hand. Our floor hosts make space for beginners.'
   布局：牛油果绿 #546B24 色带，白色 #FFFDF5 标题，白色内容面板/巧克力色文字。rental-skates.webp 4:3 在左，选择器在右，次要 family-roll.webp 小图 220px 在下方。桌面 2 列，移动端堆叠。橙色 #E8590C/巧克力色选中尺码。
   动效：点击和键盘选择；无仅拖拽交互。
4. **Make it a party** — 三个套餐：Little Wheels $180 8 位客人，预留卡座 90 分钟，入场和租赁，两个披萨和水；Big Groove $280 12 位客人，卡座 2 小时，入场/租赁，三个披萨和两壶饮料；Full Orbit $390 16 位客人，卡座 2 小时，入场/租赁，四个披萨、三壶饮料和场地主持人欢迎。额外客人每位 $18，最多 24 人。所有派对含租赁，无单独租赁附加费。CTA 'Choose Little Wheels' 等填充表单。套餐不承诺独家使用溜冰场。'Cake is welcome. Outside hot food stays at home.'
   布局：焦橙色 #E8590C 面板/巧克力色 #32170E 文案。party-booth.webp 宽横幅在 3 张芥末黄 #F2B807 套餐卡片上方，中间卡片巧克力色描边。移动端卡片堆叠；价格 42px Fredoka。
   动效：选中套餐获得勾选和边框，不缩放。
5. **Local visit planner** — 标题 'Put a little roll in your plans.' 模式 Visit / Party。字段：姓名、邮箱、所选循环场次、客人数 1–24、需要租赁、租赁尺码（除非选择租赁否则可选）、套餐（仅 Party）、备注最多 240 字符。Visit 总计 = 客人数 × 场次入场费 + 客人数 × $5 租赁（除非包含）。Party 总计 = 套餐基础价 + max(0, 客人数-包含人数) × $18；客人数最低为包含人数，最高 24。显示所有算术和年龄规则，要求复选框 'I have checked the age rules for my group'。提交 'Preview my plan'。内联验证，不清除成功值；收据列出场次星期/时间、客人、租赁尺码、套餐和总计，以及 'Local demo only. No booking, message, or payment was sent. This does not reserve a space.' 按钮 Edit plan / Clear plan。无电话或真实邮箱目的地。
   布局：巧克力色 #32170E 区块配白色 #FFFDF5 文案；芥末黄 #F2B807 表单标题和白色表单字段面板/巧克力色正文。2 列表单/摘要，粘性摘要仅桌面，移动端正常流。44px 输入框，3px 边框和深色上的白色焦点环。
   动效：实时总计在 aria-live polite 中；错误焦点移至第一个无效输入。
6. **Snack break and house notes** — 'One more lap, then a snack.' 菜单：芝士片 $4 素食；番茄派片 $4 纯素；软椒盐卷饼 $5 素食；橙子浮冰 $6 含乳制品；青柠气泡饮 $4 纯素；瓶装水 $2。菜单分类按钮 Food / Drinks / All 本地筛选；无订购控件。场馆须知手风琴：'Do I need to book?' — 此演示无法预留位置；运营网站所有者应连接自己的系统；'Can beginners join?' — 可以，参加 Learn 场次或提前到场参加场地介绍；'Can I bring my own skates?' — 需要干净的室内轮子和牢固的刹车；'What should I wear?' — 舒适的衣服和袜子，无松散拖曳配饰。地址 [ADDRESS], [CITY]。柜台时间 Tue 3–7 PM, Thu 5–9 PM, Fri 6–11 PM, Sat 10 AM–10 PM, Sun 9 AM–3 PM。页脚 [BRAND]、本地演示说明、Back to top、无日期。
   布局：芥末黄 #F2B807 和牛油果绿 #546B24 分割，芥末黄上巧克力色文字，牛油果绿上白色文字。snack-counter.webp 大图在左，价目表在不透明白色面板上。移动端堆叠；场馆规则使用语义化 details/summary。
   动效：无障碍手风琴和即时分类切换。

## 资源

- 字体：使用 Stack 中列出的 Fontsource 包自托管 Fredoka、DM Sans；OFL-1.1，不发起外部字体请求。
- 图片：将 https://media.vibefather.ai/assets/f9ea4954-55d7-4e17-a65a-fbd2a7691a35/hero-rink.webp 下载到 public/images/hero-rink.webp，并且只引用本地相对 URL。Alt：Wide wooden roller rink with warm striped walls。用于 hero。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。在 ASSETS.md 中记录 URL、路径、alt、生成器和此许可。该资源在生成/上传后提供；如果无法下载则明确失败，绝不用无关的图库素材或损坏的占位图替换它。
- 图片：将 https://media.vibefather.ai/assets/f9ea4954-55d7-4e17-a65a-fbd2a7691a35/rental-skates.webp 下载到 public/images/rental-skates.webp，并且只引用本地相对 URL。Alt：Caramel quad skates ready at the rental counter。用于 rental fit。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。在 ASSETS.md 中记录 URL、路径、alt、生成器和此许可。该资源在生成/上传后提供；如果无法下载则明确失败，绝不用无关的图库素材或损坏的占位图替换它。
- 图片：将 https://media.vibefather.ai/assets/f9ea4954-55d7-4e17-a65a-fbd2a7691a35/party-booth.webp 下载到 public/images/party-booth.webp，并且只引用本地相对 URL。Alt：Orange and avocado party booth beside the rink。用于 parties。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。在 ASSETS.md 中记录 URL、路径、alt、生成器和此许可。该资源在生成/上传后提供；如果无法下载则明确失败，绝不用无关的图库素材或损坏的占位图替换它。
- 图片：将 https://media.vibefather.ai/assets/f9ea4954-55d7-4e17-a65a-fbd2a7691a35/snack-counter.webp 下载到 public/images/snack-counter.webp，并且只引用本地相对 URL。Alt：Pizza, pretzel and sodas at a warm snack counter。用于 snack bar。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。在 ASSETS.md 中记录 URL、路径、alt、生成器和此许可。该资源在生成/上传后提供；如果无法下载则明确失败，绝不用无关的图库素材或损坏的占位图替换它。
- 图片：将 https://media.vibefather.ai/assets/f9ea4954-55d7-4e17-a65a-fbd2a7691a35/family-roll.webp 下载到 public/images/family-roll.webp，并且只引用本地相对 URL。Alt：Skaters of different sizes rolling together from behind。用于 beginner welcome。由 VibeFather 使用 qwen-image-3.0-pro 生成，可随本模板再分发。在 ASSETS.md 中记录 URL、路径、alt、生成器和此许可。该资源在生成/上传后提供；如果无法下载则明确失败，绝不用无关的图库素材或损坏的占位图替换它。
- 图片：使用橙色 #E8590C／芥末黄 #F2B807／巧克力色 #32170E／牛油果绿 #546B24，以内联 SVG 绘制原创的复古波浪分隔线和一个小的迪斯科球装饰；原创项目图稿，不使用外部 logo。

## 不要做
- 构建纯静态演示：不要后端、API 路由、数据库、身份验证、支付、第三方 API、分析、遥测，或会发送网络请求的表单。确认信息必须明确说明是本地演示；绝不要声称订单、预订、生成的服务结果或电子邮件已发送。
- 使用 Vite base ./、相对本地资源、哈希路由或真实的 .html 文件名；不要使用裸目录链接。直接打开每个路由，并确保任何没有 ID 的详情路由渲染其第一个项目。使用 npm run build 构建压缩的 dist/，不要 source maps 或源文件，dist 总大小低于 20 MB。
- 将所有可编辑文案、虚构示例数据、价格、交互标签、alt 文本和 A/B 内容保留在单个 src/content.ts 模块中。保留 3–6 个变量。当变量变化时，一致地重写所有相关内容；绝不要在第二个案例中留下默认品牌或主题。
- 所有可见语言和 alt 文本使用美式英语。不要渲染日历日期、年份、带日期的版权行、虚假的新鲜度或流行度指标。运营工作日和时间、赛道时长、相对计时器、问题标识符和尺寸是允许的。
- 仅使用原创代码/艺术/文案、宽松的 MIT/ISC/BSD/Apache/CC0 依赖和本地捆绑的 OFL 字体。不要复制网站代码、现有徽标、著名角色、商业字体、受限组件或可识别的真人肖像。在 ASSETS.md 中列出每个字体、依赖和生成的艺术作品及其来源和许可证。
- 运行时一切都在本地：不要热链接图片、字体 CDN、远程脚本、远程音乐或占位图服务。在构建前下载指定的模板托管图片；在 ASSETS.md 中记录完整源 URL、目标路径、alt 文本和生成的署名。
- 在 1440×900 和 390×844 下保持零控制台错误且无水平溢出。触摸目标至少 44px，可见的键盘焦点和带标签的输入，对话框的 Escape/外部关闭和焦点恢复，抽屉焦点陷阱、滚动锁定和结果变化的 aria-live。悬停效果需要等效的焦点/点击路径。
- 尊重 prefers-reduced-motion：移除循环变换、滚动擦除和视差，显示最终静态状态，绝不自动播放音频/视频，无闪烁、频闪或快速全屏亮度变化。不要隐藏等待动画的基本内容。
- 保留指定的调色板，至少两种强烈的英雄色占据大面积。不要中性奶油色/炭灰色回退，不要在普通文本后面使用渐变，不要低对比度的小标签。在设计中使用的计算出的 AA 文本/背景配对。
- 不要显示日历日期、活动年份、售罄数量或声称的实时可用性。日程仅限重复的工作日/时间。租赁尺寸是说明性的，不得声称有库存。派对/参观预览绝不预订、发送电子邮件、收费或发送网络请求。
- 不要省略或替换提供的五张真实照片。不要使用人脸、品牌溜冰鞋、可见标牌、复制的溜冰场身份、复古海报或受版权保护的音乐。AI 场地/腿部是虚构的并本地捆绑；此许可与图像/资产一致。
- 对于 Orbit Rollhouse，围绕 Juniper Bay 重写会话名称和工作日、所有描述性文案、套餐名称和价格、小吃名称和无员工故事。保留溜冰场设置、照片集、定价公式、精确调色板和部分结构；不要留下 Rollerloop 或 Cedar Quay。

---
— Prompt by VibeFather · https://vibefather.ai/t/retro-roller-rink-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
