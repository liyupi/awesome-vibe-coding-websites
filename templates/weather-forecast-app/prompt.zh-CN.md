> **参考译文**，帮助理解这份提示词。在线 Demo 由英文原版生成，复制到 AI 编程工具时请用 [prompt.md](prompt.md)。
> `[VARIABLES]`、代码、命令、包名、色值和字体名保留英文原文。

# 天气预报应用

完全按照以下描述构建此网站。将 [VARIABLES] 替换为你自己的值；其余内容保持不变。

## 简介
构建 [BRAND]，一个精致的氛围感天气预报 Web 应用，其全视口背景是一个动画 HTML5 Canvas 场景，可动态匹配七种天气状况（晴天（Sunny）、多云（Cloudy）、雨（Rain）、雪（Snow）、雾（Fog）、雷暴（Thunderstorm）以及带星星的晴夜（Clear Night with Stars））。六个预置城市的全部天气数据都放在一个简洁的 weatherAdapter.ts 文件中，随时可接入任何真实天气 API。

- 受众：日常旅行者、通勤者、户外活动规划者，以及寻找带有真实数据可视化组件的氛围感天气仪表盘起始模板的前端开发者。
- 目标：直接打开即进入实时白天天空预报（#6EC1FF 到 #DDF1FF，配以深色 #0F2033 墨色），并可立即访问全部 7 个动画天气场景、6 个预置城市、°C/°F 切换、逐小时和 10 天预报、遥测表盘，以及可拖拽擦洗的雷达地图。
- 基调：清爽的北欧氛围仪器感：明亮的天空渐变、半透明磨砂卡片，在白天天空和夜间风暴两种主题下均满足 WCAG AA 对比度，以及精确的等宽数字。

## 技术栈
- 框架：Vite 5 + React 18 + TypeScript
- 样式：Tailwind CSS 3.4
- 库：lucide-react（ISC）、@fontsource/plus-jakarta-sans（OFL）、@fontsource/inter（OFL）、@fontsource/jetbrains-mono（OFL）
- 构建：`npm run build` → 静态文件输出到 `dist/`。无后端、无服务端代码、无外部 API。
- 配置：
  - 在 vite.config.ts 中设置 base: './' 和 build.sourcemap: false。
  - 在 tailwind.config.js 中将 Plus Jakarta Sans 配置为展示字体，Inter 配置为正文（body）字体，JetBrains Mono 配置为表格数字（tabular metric）字体。
  - 在 src/main.tsx 中导入 @fontsource/plus-jakarta-sans（600、700、800）、@fontsource/inter（400、500、600）和 @fontsource/jetbrains-mono（400、500、600）。
  - 将所有 6 个种子城市、24 小时序列、10 天预报和雷达风暴单元轨迹隔离在一个适配器模块 src/data/weatherAdapter.ts 中，并提供清晰的 WeatherAdapter 接口。
  - 将已保存的城市和 °C/°F 单位偏好持久化到 localStorage。

## 变量
- [BRAND] — 应用名称（默认："Skyloom Weather"）。显示在顶部导航栏和页面标题中。
- [TAGLINE] — 简短副标题（默认："Live atmospheric skies and precision local forecasts."）。显示在已保存城市视图的页眉上。
- [DEFAULT_CITY] — 默认起始城市（默认："San Francisco"）。首次访问时加载的初始活动城市（晴朗白天配色）。
- [ADAPTER_LABEL] — 适配器徽章标签（默认："weatherAdapter.ts · Seeded Data"）。页脚中的小指示器，用于标明可替换的数据适配器。
- [CREDIT] — 在页脚保留一个小型 "Template by VibeFather" 链接，指向 https://vibefather.ai/t/weather-forecast-app（默认：是；删除此行即可移除）

页面与区块下的文案是按默认值编写的。如果你的取值不同，请为它们重写每一个标题、段落、标签和图片——保持相同的长度、语气和结构。布局、颜色、字体和动效保持所述不变。
将所有文案、图片路径和链接放在一个内容文件中（例如 `src/content.ts`），按区块作为键，以便之后无需改动组件即可替换内容。

## 设计
### 颜色
- 日间天空顶部 `#6EC1FF` — 默认晴天条件下的上层天空渐变
- 日间天空地平线 `#DDF1FF` — 默认晴天条件下的地平线天空渐变
- 深空墨蓝 `#0F2033` — 浅色日间天空上的主文本和高对比度排版
- 柔和石板墨 `#334E68` — 日间磨砂卡片上的次级标签和元数据
- 太阳琥珀 `#F59E0B` — 温度条暖色、紫外线警告和日出弧线
- 风暴石板 `#1C2738` — 雨天和雷暴的大气背景
- 夜空靛蓝 `#0B132B` — 晴朗星空背景，搭配清晰的 #F4F7FB 文本
- 磨砂卡片 `rgba(255, 255, 255, 0.72)` — 日间玻璃面板表面，带清晰的 1px 边框

### 排版
- 主温度与城市显示：Plus Jakarta Sans (OFL)，字重 600/700/800
- 预报文案与标签：Inter (OFL)，字重 400/500/600
- 遥测、坐标与逐小时指标：JetBrains Mono (OFL)，字重 400/500/600

### 布局与动效
- 间距：通透的大气仪表盘网格：max-w-6xl 居中容器，20px–24px 玻璃卡片内边距，16px 便当格间距。
- 圆角：柔和的 20px 天气便当卡片，12px 内部仪表和胶囊，999px 天气状况和单位切换按钮。
- 动效：持续 60fps 的 HTML5 Canvas 天空场景（飘动的积云、带溅水的斜向雨丝、轻柔的雪花、翻滚的雾带、闪电分叉闪光、闪烁的星星与流星、金色阳光射线）
- 动效：切换城市或预览 7 种天气状况中任意一种时，平滑的 400ms 颜色主题过渡
- 动效：风格化降水雷达地图上的交互式播放/暂停时间轴循环
- 动效：遵循 prefers-reduced-motion，渲染清晰的静态大气场景，零闪烁
- 图像：100% 代码绘制的氛围艺术：全视口 HTML5 Canvas 实时天空渲染器、清晰的 SVG 风向罗盘、日出/日落太阳弧线、月相 SVG、风格化地形降水雷达 Canvas，以及 Lucide 天气图标。

## 页面与区块
### 实时预报 — [BRAND] (`#/forecast`)
1. **动画全视口天空画布与顶栏** — 固定全幅 HTML5 Canvas 在界面后方渲染当前天气状况。顶栏显示 [BRAND] 标识、快捷已保存城市选择条、'Manage Cities' 路由链接，以及 °C / °F 单位切换胶囊按钮。正下方是一个紧凑的 'Preview Sky Scene' 胶囊栏，允许访客随意切换全部 7 个实时 Canvas 场景（Sunny、Cloudy、Rain、Snow、Fog、Thunderstorm、Clear Night）。
   布局：粘性磨砂顶部页眉（桌面端单行，移动端紧凑整洁换行）覆盖在居中的大气工作区之上。
   动效：每次点击城市或天气状况时，平滑切换调色板与 Canvas 物理效果。
2. **当前天气主视觉与 24 小时条** — 使用 Plus Jakarta Sans 字体的巨大当前温度读数，配有体感温度、最高/最低温、天气状况摘要、湿度、露点、气压和能见度胶囊徽章，并与一个平滑横向滚动的 24 小时逐时预报条配对，显示时间、天气图标、降水概率和温度。
   布局：分栏主视觉遥测卡片位于全宽磨砂逐时轮播卡片上方。
   动效：所有读数即时进行 °C/°F 和 km/h/mph 单位换算。
3. **10 天预报（含温度范围条与大气仪表）** — 左栏：10 天预报列表（Today、Tue、Wed… Day 10 — 零日历日期），显示天气图标、降雨概率、最低温、跨越 10 天全局最低/最高值的归一化渐变最低/最高温度范围条，以及最高温。右栏：2×2 大气仪表 bento 网格，包含空气质量指数（AQI 刻度条 + PM2.5）、带峰值提示的紫外线指数仪表、带方向箭头和阵风速度的动画 SVG 风向罗盘，以及日出/日落太阳进度弧 + 带照明百分比的月相 SVG。
   布局：12 列响应式网格（桌面端 5 列 10 天预报、7 列遥测 bento；移动端整洁垂直堆叠）。
   动效：SVG 风向罗盘上的平滑指针旋转和动画渐变填充条。
4. **风格化降水雷达图（含时间轴滑块）** — 交互式 Canvas/SVG 区域雷达图，具有风格化海岸线、地形环、城市图钉标记、动画漂移的雨/雪/暴风强度单元、dBZ 图例条、播放/暂停动画按钮，以及以 15 分钟间隔从 -1h 到 +3h 拖动的时间滑块。
   布局：全宽磨砂 bento 卡片，雷达视口位于左侧，实时风暴单元遥测与播放控制位于旁边或下方。
   动效：平滑雷达扫描环和由时间滑块驱动的风暴单元平流。

### 已保存城市 — [BRAND] (`#/cities`)
1. **已保存城市管理器与添加城市目录** — 页眉包含 [BRAND] 标题、[TAGLINE]、搜索框和 °C/°F 切换。保存在 localStorage 中的已保存城市天气卡片网格，显示每个城市的实时天空渐变预览、当前温度、天气状况、最高/最低温、本地时间偏移、'Open Forecast' 点击操作、设为默认星标和移除按钮，另有一个 'Available Seeded Cities' 搁架，用于重新添加任何已移除的城市或查看 6 个种子位置。
   布局：响应式 1/2/3 列卡片网格，覆盖在微妙的动态天空背景之上。
   动效：微妙的悬停上浮和渐变卡片的即时更新。

## Assets
- icon：通过 npm 包 lucide-react（ISC 许可证）安装，用于清晰的天气状况、指南针、太阳/月亮和导航控件。
- font：通过 @fontsource/plus-jakarta-sans、@fontsource/inter 和 @fontsource/jetbrains-mono（OFL）安装；由 Vite 本地打包。
- image：100% 代码绘制的 HTML5 Canvas 7 种天气状况大气天空引擎、风格化降水雷达 Canvas，以及 SVG 遥测仪表（Wind Compass、Solar Arc、Moon Phase）。

## 不要做
- 不要发起任何外部天气 API、地图瓦片或 CDN 请求——将所有预置示例数据隔离在 src/data/weatherAdapter.ts 内。
- 不要在任何地方显示日历日期或 4 位年份——10 天预报请使用 Today 和星期缩写（Tue、Wed、Thu……）。
- 不要在明亮晴朗天空或深色雷暴/夜空背景下让文字保持低对比度——根据每种天气状况动态切换文字颜色和磨砂卡片不透明度，以维持 WCAG AA。
- 不要引用 Apple Weather、AccuWeather、Dark Sky 或任何真实天气服务。
- 不要在 1440x900 桌面端或 390x844 移动端出现水平溢出。
- 不要包含 source maps，也不要将 src/ 复制到 dist/；保持 vite base 设置为 './'。

---
— Prompt by VibeFather · https://vibefather.ai/t/weather-forecast-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
