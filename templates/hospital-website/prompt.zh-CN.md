> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 医院网站

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
为 [HOSPITAL_NAME] 构建一个沉稳、高对比度的区域医院网站，服务于 [REGION_NAME]（主服务台：[PHONE_MAIN]；急诊横幅：[EMERGENCY_LINE]）。使用暖白色表面（#FCFBF8）搭配医院蓝（#1356A8）、舒缓薄荷绿（#3CC2A0）、珊瑚色点缀（#FF6F59），以及大号、高对比度的字体排版。包含一个常驻顶部急诊横幅（Emergency Banner），展示三个区域院区的示例急诊等候时间，以及与 window.location.hash 双向同步的哈希路由导航，覆盖以下页面：(1) #/home — 阳光中庭建筑主视觉、快捷就医操作（Find a Doctor、Request Appointment、ER Wait Times、Patient Portal）、精选科室（Departments）、院区急诊等候时间条，以及示例数据透明说明；(2) #/departments — 交互式科室卡片，点击打开详细服务视图（Cardiology、Orthopedics、Maternity & Family、Diagnostic Imaging、Neurology、Urgent & Primary Care）；(3) #/doctors — 可筛选的医生名录（专科、院区位置、使用语言、接受新患者开关、关键词搜索），点击打开完整的虚构临床医生资料面板，并支持直接预填预约；(4) #/locations — 三个区域医院与诊所院区，包含示例急诊等候时间、停车场、交通指引，以及患者与访客指南（探视时间、停车费率、需携带物品）；(5) #/appointments — 分步预约申请流程，附带即时示例确认单；(6) #/portal — 交互式模拟患者门户预览，包含选项卡式示例化验结果、护理团队消息（带回复编辑器）和账单对账单；(7) #/library — 健康图书馆文章，带主题筛选和完整文章阅读器弹窗/视图，另有招聘开放职位和基金会捐赠影响层级。将所有等候时间、门户记录和资料明确标注为示例数据，不含任何医疗声明，不含任何日历日期。

- 受众：患者、家属、访客、转诊临床医生、求职者和社区捐赠者。
- 目标：为焦虑的访客提供即时的安心感与导引——让急诊等候时间、医生搜索、院区停车和预约挂号一键可达。
- 语气：令人安心、透明、现代公民医疗——平实英语、宽裕留白、高对比度。

## 技术栈
- 框架：Vite 6 + React 18 + TypeScript
- 样式：Tailwind CSS 4
- 库：lucide-react（ISC）、@fontsource/plus-jakarta-sans（OFL-1.1）、@fontsource/inter（OFL-1.1）
- 构建：`npm run build` → `dist/` 中的静态文件。无后端、无服务器代码、无外部 API。
- 设置：
  - 在 vite.config.ts 中设置 base: './' 和 build: { sourcemap: false }。
  - 在 src/main.tsx 中导入 @fontsource/plus-jakarta-sans（500、600、700）和 @fontsource/inter（400、500、600）。
  - 将所有 4 张生成的 WebP 建筑/临床医院照片本地打包到 public/images/ 下，并通过 ./images/*.webp 引用。
  - 将活动路由（#/home、#/departments、#/doctors、#/locations、#/appointments、#/portal、#/library、#/careers、#/giving）与 window.location.hash 双向同步。

## 变量
- [HOSPITAL_NAME] — 医院系统名称（默认："Meridian Valley Health"）。虚构的区域医院网络名称
- [REGION_NAME] — 服务区域（默认："Meridian Valley"）。所服务的虚构山谷或海湾区域
- [PHONE_MAIN] — 总机电话（默认："(555) 019-4400"）。示例非工作 555 电话号码
- [EMERGENCY_LINE] — 紧急指引横幅（默认："Dial 911 for emergencies · 24/7 Nurse Triage: (555) 019-4911"）。顶部紧急横幅文案
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/hospital-website（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值编写的。如果你的值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便日后无需改动组件即可替换内容。

---
这是 VibeFather Pro 模板公开的部分。页面区块、布局、动效和素材说明仅对 Pro 会员开放：https://vibefather.ai/templates/hospital-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt-zh
