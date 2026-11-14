# Industrial Robotics Company Website

> A steel-and-safety-orange robotics site with spec tables, industry proof and a live local ROI calculator.

<a href="https://vibefather.ai/templates/industrial-robotics-company-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/industrial-robotics-company-website/a3172df2-73da-42ed-9fd9-50d7653132a8/webp.cf988e28ce.webp" width="100%" alt="Industrial Robotics Company Website — Industrial Robotics Site with ROI Calculator built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/industrial-robotics-company-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

This is an industrial robotics site in safety orange, steel grey and near-white, built with React, Tailwind CSS and Motion, for a B2B hardware brand that sells on numbers. The first screen anchors on a robot arm standing in a clean, skylit factory bay, with the headline over the photo's cool greys and mono spec chips — reach, payload, repeatability — pinned beside it. The product section presents three arms as tabbed spec sheets: each tab swaps the table (reach, payload, repeatability, footprint, cycle time, sample price) and a side-profile arm drawn as original SVG geometry — capsule links and sphere joints in cream with orange joint rings, deliberately unlike any real maker's silhouette.

The centerpiece is the ROI calculator: two sliders — operators per shift and shifts per day — recompute annual labor replaced, payback in months and three-year net, all in local math from the selected arm's price and a labeled sample labor rate. Assumptions sit as mono chips under the numbers, and the full model is spelled out in the prompt so every build computes identically. Industry cards carry invented proof figures, three case studies summarize believable deployments behind photographs, a parallax band sells the weekend install, and a client-side demo-request form closes the page.

It suits hardware founders, automation integrators and anyone selling capital equipment that pays for itself. To adapt it, change the brand, the audience, the primary use case and the labor rate; arms, industries, cases and calculator constants rewrite from those values. All six photographs share one look — empty bays, even skylight, orange accents — and the drawn arm geometry stays original.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Swiss](../../styles/swiss.md), [Minimal](../../styles/minimal.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/industrial-robotics-company-website?case=a3172df2-73da-42ed-9fd9-50d7653132a8&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/industrial-robotics-company-website/a3172df2-73da-42ed-9fd9-50d7653132a8/shot_desktop.d1a58e8deb.webp" width="100%" alt="Industrial Robotics Company Website — Industrial robot arms, built by GLM-5.3 in ZCode"></a><br>
<b>Industrial robot arms</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/industrial-robotics-company-website?case=a3172df2-73da-42ed-9fd9-50d7653132a8&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/industrial-robotics-company-website?case=0c630867-d1b3-4ce8-81dc-c293c59a62f7&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/industrial-robotics-company-website/0c630867-d1b3-4ce8-81dc-c293c59a62f7/shot_desktop.fe62a53664.webp" width="100%" alt="Industrial Robotics Company Website — Lab automation arms, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Lab automation arms</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/industrial-robotics-company-website?case=0c630867-d1b3-4ce8-81dc-c293c59a62f7&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Brand name | Torvan |
| `[AUDIENCE]` | Who buys it | plant managers at mid-size US factories |
| `[PRIMARY_USE]` | Main use case | palletizing and machine tending |
| `[LABOR_RATE]` | Sample labor rate | $38 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add industrial-robotics-company-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A welding integrator: set PRIMARY_USE to welding cells, rewrite the industry proof lines for fabrication shops and set LABOR_RATE to your region's welder wage.
- A lab automation vendor: keep the tabbed spec sheets but rename the arms for liquid handlers, and swap the factory-bay photos for clean lab benches.
- A packaging machine maker: set BRAND and AUDIENCE to plant teams in food and beverage, and rewrite the case studies around line speed and changeover time.
- An automation consultancy selling assessments: keep the ROI calculator as the lead magnet and point the demo form at a free plant audit offer.

## FAQ

### How does the ROI calculator on the Industrial Robotics Company Website template work?
The ROI calculator on the Industrial Robotics Company Website template takes two sliders, operators per shift and shifts per day, and recomputes annual labor replaced, payback in months and three-year net. The math runs locally from the selected arm's sample price and the labeled labor rate, so nothing is sent to a server. Assumptions appear as mono chips under the numbers, and all outputs are marked as invented samples.

### What do I need to change first to make the Industrial Robotics Company Website my own?
Start with the four variables: BRAND, AUDIENCE, PRIMARY_USE and LABOR_RATE. BRAND sets the company name and footer, AUDIENCE drives the hero subhead and demo-form copy, PRIMARY_USE rewrites the hero, industries, cases and footer line, and LABOR_RATE sets the calculator's default hourly rate. Every headline, paragraph, label and image is written for the defaults, so rewrite each one to match your values while keeping the same length and tone.

### Can the Industrial Robotics Company Website template be adapted for welding or lab automation instead of palletizing?
Yes. PRIMARY_USE drives the hero, industries, cases and footer line, so swapping it for welding, dispensing or lab handling rewrites those sections. The two live demos show the range: one built for industrial robot arms with GLM-5.3 in ZCode, another for lab automation arms with DeepSeek V4.1 Flash in DeepSeek Harness. You also rewrite the proof lines on the industry cards and the case study summaries to match the new use case, and adjust the arm specs and sample prices to fit.

### Are the spec tables and ROI numbers on the Industrial Robotics Company Website template real?
No. Every spec, price and ROI output on the Industrial Robotics Company Website template is an invented sample, labeled as such in the copy. The three arms (TL-120, TL-190 and TL-260) carry sample reach, payload, repeatability, footprint, cycle time and price values, and the industry cards carry invented proof figures. Replace them with your own verified numbers before publishing, and keep the sample labels until you do.

### How do I add a demo-request form to the Industrial Robotics Company Website template?
The Industrial Robotics Company Website template already includes a client-side demo-request form at the end of the page, so the structure and styling are in place. To receive submissions, point the form at your own endpoint or form service, since the template has no backend and sends nothing by default. Keep the form copy aligned with AUDIENCE, and leave the calculator and spec sections above it so plant teams see the numbers before they request a demo.

### How do I build an industrial robotics company website with AI?
Copy the prompt from this page or run npx vibefather add industrial-robotics-company-website, replace [BRAND], [AUDIENCE], [PRIMARY_USE] and [LABOR_RATE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Industrial Robotics Company Website demo?
The Industrial robot arms case was built by GLM-5.3 in ZCode; the Lab automation arms case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Industrial Robotics Company Website template use?
Industrial Robotics Company Website is a single-page site built with React, Motion and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Industrial Robotics Company Website template for a client or a business?
The Industrial Robotics Company Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Industrial Robotics Company Website template work on mobile?
Yes. Every Industrial Robotics Company Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Industrial Robotics Company Website on VibeFather](https://vibefather.ai/templates/industrial-robotics-company-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
