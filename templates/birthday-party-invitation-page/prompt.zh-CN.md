> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 生日派对邀请页面

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [BRAND] 打造一份原创的单页生日邀请函，包含一个大型代码绘制的派对餐桌立体场景、动画彩纸屑、由日期驱动的倒计时、实用活动详情、礼物建议、一个插画风格的地图占位符，以及一个仅本地运行的 RSVP。

- 受众：受邀参加 [HONOREE] 庆祝活动的朋友和家人，使用桌面端或手机；该模板面向任何创建个人生日邀请函的人。
- 目标：让这一场合显得即时且欢乐，让每个实用细节都易于扫读，并让宾客在无需任何网络请求的情况下记录出席回复和派对人数。
- 语气：温暖、俏皮、包容，略带调侃，就像一位体贴的朋友精心印制的邀请函；指示保持直接，绝不向宾客施压要求带礼物。

## 技术栈
- 框架：Vite 6 + TypeScript
- 样式：原生 CSS（Vanilla CSS）
- 库：@fontsource-variable/fraunces（OFL-1.1）、@fontsource-variable/dm-sans（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 使用 Vite 的原生 TypeScript 模板，包含 index.html、src/main.ts、src/content.ts 和 src/styles.css；保持实现不依赖框架。
  - 将 package.json 的构建脚本设置为 tsc && vite build，在 vite.config.ts 中设置 base: './'，并将 build.sourcemap 设置为 false。
  - 在 src/main.ts 中导入 @fontsource-variable/fraunces 和 @fontsource-variable/dm-sans，使两种字体均在本地打包；仅使用设计（Design）中列出的字重。
  - 将每个事件值、标题、段落、标签、日程项、礼物建议、地图标签和链接都放入 src/content.ts，按区块（section）作为键。
  - 在一个 canvas 上实现彩纸效果（confetti），并将所有图标、地图、favicon 和派对立体模型（party diorama）实现为原创的内联 SVG 或 CSS；不添加任何运行时包。
  - 使用语义化 HTML 和小型 TypeScript 模块来实现倒计时、彩纸效果、滚动显现、剪贴板操作、日历下载和 RSVP 状态。

## 变量
- [BRAND] — 邀请函名称（默认："Maya's Garden Disco"）。一个简短的、虚构的庆祝活动名称。
- [HONOREE] — 生日主角（默认："Maya"）。默认活动使用虚构的名字。
- [PARTY_DATE] — 派对开始日期和时间（默认："2027-06-20T16:00:00-07:00"）。带数字时区偏移的 ISO 8601 日期时间；据此推导显示日期、倒计时、日程和回复截止时间。
- [VENUE] — 场地和地址（默认："The Sunroom · 18 Willow Lane, Portland, Oregon"）。使用虚构的场地和街道地址，绝不使用真实人物的家庭住址。
- [PARTY_THEME] — 派对主题（默认："Garden disco"）。一个简洁的活动或视觉主题，可用于指导文案改写。
- [GIFT_NOTE] — 礼物偏好（默认："A favorite book, a small plant, or a handwritten note"）。礼物保持可选，并根据此说明调整三张建议卡片。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接指向 https://vibefather.ai/t/birthday-party-invitation-page（默认：是；删除此行即可移除）

Pages & Sections 下的文案是按默认值撰写的。如果你的值不同，请为它们重写每个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色（Colors）
- Party Paper `#FFF7E8` — 主页面背景，以及深梅色表面上的浅色文字
- Plum Ink `#2E2140` — 正文、轮廓、主按钮和倒计时背景
- Confetti Coral `#FF6B6B` — 蛋糕细节、选中的票券、图钉和装饰点缀；绝不用于纸色背景上的小号正文
- Marigold `#FFC83D` — 倒计时数字、次级按钮、星星和高亮形状
- Lilac Wrapper `#B9A7FF` — 礼物面板、地图区块、气球和交替使用的装饰表面
- Mint Scoop `#8BD9B6` — 成功状态、植物、日程标记和一张细节票券

### 字体排印（Typography）
- 展示文字和倒计时数字：Fraunces Variable（OFL），字重 700/800/900
- 正文、标签、按钮和表单控件：DM Sans Variable（OFL），字重 400/500/600/700

### 布局与动效（Layout & motion）
- 间距：使用 8px 基准单位，内容最大宽度 1200px，桌面页面边距 32px，移动端边距 20px。区块内边距桌面为 104px，移动端为 64px。文本行宽保持在 48 到 62 个字符之间，卡片间距为 24px。
- 圆角：主要卡片使用 28px，输入框和小面板使用 16px，按钮和标签使用全圆角胶囊形。添加 2px 梅色轮廓、票券打孔线，以及少量手剪风格的 SVG 剪影，而不是让每个表面都变成圆角矩形。
- 动效：仅在 hero 区域内运行一个轻量级彩纸 canvas：桌面端约 70 个矩形、圆形和短丝带，移动端 36 个，先有蛋糕顶部的初始爆发，随后缓慢向下飘落；当 hero 离开屏幕或标签页隐藏时暂停。
- 动效：hero 文案以 600ms 向上淡入，分两个短阶段呈现，然后让 SVG 气球以不超过 8px 的幅度漂浮，交替使用 4.8s 和 5.6s 的周期。
- 动效：使用 IntersectionObserver 实现一次性区块显现，垂直位移 16px，透明度过渡 450ms；当 JavaScript 不可用时，内容保持可见。
- 动效：倒计时数字仅在数值变化时给予短暂的 120ms 垂直跳动，按钮、礼物卡片和地图图钉在悬停或聚焦时给予 160ms 的短响应。
- 动效：在有效的出席 RSVP 之后，发射一次 24 片的小型彩纸爆发；不要自动播放声音、闪烁、滚动劫持，或将动效绑定到指针移动上。
- 动效：在 prefers-reduced-motion 下，禁用所有飘动、摇摆、显现、数字跳动和爆发；渲染静态彩纸排列，并保持倒计时文本更新功能正常。
- 图像：不使用照片或下载的插图。首屏的视觉锚点是一个大型原创内联 SVG 和 CSS 派对餐桌立体模型：一张以轻微角度观看的椭圆桌、一个三层珊瑚色和奶油色蛋糕、五支点燃的蜡烛、三个包装好的礼物、六个气球、纸彩带和小型抽象花朵。用简单的几何形状、微妙的纸张纹理图案和梅色轮廓来营造深度。不出现面孔、人物、角色、标志或可识别的品牌物体。在礼物图标和不按比例绘制的地图中重复相同的视觉语言。

## 页面与区块
### 生日邀请函（`index.html`）
1. **邀请函页眉** — 展示一个小巧的原创蛋糕切片标志，并以 [BRAND] 作为文字标识。包含标注为 'The plan'、'Gifts' 和 'Find us' 的锚点链接，以及一个标注为 'RSVP' 的梅子色胶囊按钮，点击后跳转至表单。使用包含 [BRAND] 的纯文本文档标题，以及一个原创蛋糕切片 SVG favicon。
   布局：在 1200px 容器内放置一个 80px 高的非粘性页眉，文字标识居左、导航居右。在 390px 宽度下使用两行布局：第一行为文字标识和 RSVP，第二行为三个文本链接均匀分布；不要将导航隐藏在汉堡菜单后。
   动效：RSVP 按钮在悬停或聚焦时上浮 2px；无入场动画。
2. **彩纸邀请函主视觉** — 使用眉题 '[PARTY_THEME] · YOU’RE INVITED'。默认标题：'It’s Maya’s birthday. Let’s make it loud.' 将 Maya 替换为 [HONOREE]，并在值变化时自然地改写该行。默认辅助文案：'An afternoon of garden games, cake, and dancing as the sun goes down. Bring your brightest shirt and your best moves.' 主 CTA：'RSVP by June 13'，由 PARTY_DATE 前七天推导得出；次 CTA：'See the party plan'。添加紧凑行 'Sunday, June 20 · 4–9 PM · The Sunroom'，全部由 PARTY_DATE 和 VENUE 推导得出。另一半填充 Imagery 中描述的派对餐桌立体模型。
   布局：使用 12 列网格，文案占 5 列，立体模型占 7 列。主视觉至少为 calc(100svh - 80px)，顶部内边距 64px、底部内边距 80px。标题使用 Fraunces 900，字号为 clamp(56px, 6.2vw, 92px)，行高 0.94。将两个 CTA 放在同一行，活动信息行放在下方。在移动端，将文案堆叠在 340px 高的立体模型上方，标题使用 48px，CTA 全宽堆叠。保持立体模型在移动端首屏内足够大且可见，而不是用纯色块替代。
   动效：将彩纸画布层叠在背景之上、可读文本和控件之下。标题、辅助文案和 CTA 播放一次动画；气球轻轻摆动，蛋糕保持稳定。
3. **实时倒计时条** — 将条带标注为 'COUNTING DOWN TO [BRAND]'，并显示根据 PARTY_DATE 在所提供的时区偏移下计算出的 Days、Hours、Minutes 和 Seconds。在单位下方，显示完整的本地化开始日期和时间。在五小时的派对时段内，将数字替换为 'The party is happening now'；之后显示 'What a night — thanks for celebrating.' 永远不要显示负值。
   布局：使用全出血梅子色条带，内部为 1200px 网格：标签和日期居左，四个等宽倒计时单元格居右。使用万寿菊色 Fraunces 800 数字，采用等宽数字，以及小号大写纸色标签。在移动端，将标题居中置于四列网格上方，间隙为窄 8px，数字不超过 36px。
   动效：每秒更新一次，仅应用短促的数字跳动；减少动效模式下更新文本而不使用变换。
4. **派对详情票券** — 标题：'The need-to-knows'。使用三张票券。日期：'Sunday, June 20'、'4:00–9:00 PM' 和 'Reply by June 13'。地点：'The Sunroom'、'18 Willow Lane, Portland, Oregon' 和 'Look for the coral door'。着装：'Garden glam'、'Bright colors welcome' 和 'Wear shoes made for dancing'。所有日期、时间和场地文本均从变量推导得出；为新 PARTY_THEME 改写主题相关的着装行。
   布局：将标题和一条短波浪 SVG 下划线置于三张等宽卡片上方。为每张卡片添加打孔票券边缘，带两个小圆形切口、2px 梅子色轮廓，以及独特的珊瑚色、薄荷色或淡紫色表面。仅在桌面端将外侧卡片旋转最多 1 度。在移动端以 16px 间隙堆叠卡片，并保持所有值左对齐。
   动效：作为一组揭示；在悬停或聚焦时，每张票券变直并上浮 3px，不移动周围内容。
5. **派对日程** — 眉题：'THE PARTY PLAN'。标题：'A little structure. Plenty of room to dance.' 使用四个默认站点：'4:00 PM — Lemonade and hellos. Find your name tag and grab something cold.'；'5:00 PM — Garden games. Teams are optional; ridiculous victory dances are not.'；'6:30 PM — Cake and a sunset toast. Gather around the long table.'；'7:30 PM — Disco under the string lights. The playlist is open for requests.' 将这些时间作为 PARTY_DATE 的偏移量推导得出，并为 PARTY_THEME 改写活动内容。
   布局：使用非对称双列布局：桌面端粘性标题占 4 列，垂直时间线占 8 列。每个站点有一个万寿菊色圆形时间标记、一个粗体时间和一句话，由 2px 点状梅子色线分隔。在移动端移除粘性行为，将标题堆叠在时间线上方。
   动效：按顺序以 70ms 交错揭示时间线站点；无滚动驱动的固定或擦洗效果。
6. **礼物创意** — 标题：'Bring a story, not a shopping bag.' 引言：'No gifts are expected. If you would like to bring something, Maya’s short list is: [GIFT_NOTE].' 将 Maya 替换为 HONOREE。默认卡片：'A well-loved paperback — Add a note on the inside cover.'；'A little green thing — A herb, succulent, or cutting for the kitchen window.'；'A note for future Maya — Share a memory she can reread next year.' 当 GIFT_NOTE 或 HONOREE 变化时调整所有三张卡片。不添加商店、价格、联盟链接或购买按钮。
   布局：将标题和引言放在窄左侧栏中，右侧为三张堆叠的水平礼物便签。每张便签有一个原创 72px SVG 礼物、书籍、植物或信封插图、一个粗体标题和一句话；交替使用纸色和淡紫色背景。在移动端，保持便签全宽，插图置于文本上方。
   动效：礼物便签图标在悬停或键盘聚焦时倾斜最多 4 度；便签一起揭示。
7. **插画场地地图** — 标题：'Meet at the coral door.' 将完整 VENUE 显示为可选文本。默认到达说明：'Street parking is available along Willow Lane. A bike rack sits by the side gate; come straight through the coral door when you arrive.' 添加一个标注为 'Copy address' 的按钮，具有两秒的 'Copied' 成功状态，以及在剪贴板访问失败时的可选文本回退方案。将绘图标注为 'ILLUSTRATED MAP · NOT TO SCALE'。它是位置占位符，不是实时地图，也不声称地理准确性。
   布局：使用双列卡片，地图占 7 列，地址和到达说明占 5 列。使用内联 SVG 绘制三条弯曲的梅子色道路、薄荷色公园街区、淡紫色建筑、微小的抽象树木，以及一个标注场地名称的珊瑚色图钉。当 VENUE 变化时重命名街道标签。在移动端将地图堆叠在文本上方，并保持地址按钮至少 48px 高。
   动效：当该区块进入时，图钉做一次轻柔的 6px 跳跃；剪贴板反馈淡出而不移动布局。
8. **仅浏览器端 RSVP** — 标题：'Save your spot on the dance floor.' 辅助文案：'Tell us who’s coming and whether anyone is joining you.' 表单字段：出席单选选项 'Yes, I’m in' 和 'Can’t make it'；必填 'Your name'；必填 'Email address'；标注为 'Party size, including you' 的宾客人数步进器，带减号和加号按钮，范围为 1–4；可选的 'Dietary notes or a song request'。在提交按钮 'Save my RSVP' 旁显示 'Demo RSVP: saved only in this browser. Nothing is sent.' 内联验证姓名和邮箱，对不出席禁用步进器并将派对人数设为 0，且绝不发起网络请求。出席提交时，显示 'Your RSVP is saved, [name]!' 以及派对人数摘要、'Update RSVP' 和 'Add to calendar'。不出席时，显示 'Thanks for letting us know. You’ll be missed.' 将响应持久化到 localStorage，返回时预加载，并根据 PARTY_DATE 以五小时时长在本地生成日历文件。
   布局：使用大型梅子色区块，纸色 RSVP 卡片偏移在珊瑚色抽象形状之上。在桌面端将卡片分为 5 列邀请信息和 7 列表单。使用 16px 圆角输入框、可见标签、强聚焦环、最小 48px 控件，以及通过 aria-describedby 关联的内联错误。步进器为一个水平控件，数字居中。用确认面板和薄荷色成功标记就地替换表单。在移动端堆叠所有内容，无水平溢出。
   动效：高亮选中的出席胶囊，以 120ms 跳动动画更新宾客人数，仅对出席响应触发小型成功爆发；在减少动效模式下立即显示所有确认文本。
9. **邀请函页脚** — 重复 [BRAND]，然后显示 'Come as you are. Leave with cake.' 和 'Questions? Ask the friend who sent you this invitation.' 包含一个标注为 'Back to the top' 的文本链接和可选的 CREDIT 页脚链接；不要虚构联系方式或社交账号。
   布局：以扇贝形 SVG 顶边收尾，使用紧凑的三列行展示活动名称、结束语和链接，垂直内边距 40px。在移动端堆叠并左对齐相同内容。
   动效：无页脚动画。

## 资产（Assets）
- 图像（image）：不使用任何位图图像或下载的美术素材。使用所列调色板，以原创内联 SVG、CSS 和 canvas 几何图形来创建主视觉立体场景（hero diorama）、彩纸屑（confetti）、礼物插画、扇贝形分隔线（scalloped divider）以及非等比例地图（not-to-scale map）；无需图像清单或远程图像 URL。
- 图标（icon）：将简单的蛋糕切片 favicon、日历、定位图钉、礼物、箭头、加号和减号图标绘制为原创内联 SVG 描边和形状。不要导入品牌图标集，也不要复制其他邀请函的图标。
- 字体（font）：通过 @fontsource-variable/fraunces 自托管 Fraunces Variable，仅导入所需的字重。在 ASSETS.md 中记录打包字体的路径、来源 https://github.com/undercasetype/Fraunces、作者 Undercase Type 以及 OFL-1.1。
- 字体（font）：通过 @fontsource-variable/dm-sans 自托管 DM Sans Variable，仅导入所需的字重。在 ASSETS.md 中记录打包字体的路径、来源 https://github.com/googlefonts/dm-fonts、作者 DM Sans Project Authors 以及 OFL-1.1。

## 禁止事项
- 不要添加后端、服务器代码、API 路由、数据库、身份验证、外部表单端点、第三方 API、分析或实时地图嵌入。RSVP 持久化和日历生成必须完全在浏览器中进行，且 UI 绝不能声称响应已发送。
- 不要热链接或加载远程脚本、样式、字体、图标、图片、地图或占位图服务。将所有资源本地打包，并使用 Vite base './' 的相对路径。
- 不要复制其他邀请函的代码、文案、插图、图标、布局细节或标语。不要使用徽标、授权角色、吉祥物、可识别的人物肖像、真实个人地址或真实联系方式。
- 不要使用商业字体、受限组件库源码或所述宽松许可证之外的任何依赖；仅使用列出的两个自托管字体家族。
- 不要用纯色背景上的排版或通用库存生日照片替换主视觉；保留大型原始派对桌立体模型和分层彩纸。
- 不要在运行时逻辑中硬编码 Maya、默认场地或默认日期。从 src/content.ts 读取内容，并从 PARTY_DATE 派生可见日期、倒计时、五小时日程和七天回复截止时间。
- 不要添加页面、裸目录链接、死按钮、购物链接或外部导航服务。保持单一 index.html 和可用的同页锚点。
- 不要添加元描述、Open Graph 标签、JSON-LD、站点地图、关键词堆砌文本或其他 SEO 工作；仅使用所要求的纯标题和 favicon。
- 不要生成源映射、将 src 复制到 dist、使 dist 超过 20MB，或引入框架或动画库。
- 不要使用滚动劫持、自动播放音频、闪烁效果或在 prefers-reduced-motion 下的持续运动。保持所有控件可通过键盘和触摸访问，并具有可见的焦点状态。
- 不要在 1440×900 或 390×844 下出现文本裁剪、彩纸控件重叠或水平溢出；完成的静态构建必须产生零控制台错误。

---
— Prompt by VibeFather · https://vibefather.ai/t/birthday-party-invitation-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
