# Industrial Manufacturing Company Website <sup>PRO</sup>

> A precision machine-shop site with spec-sheet capabilities, an equipment table and an RFQ flow that estimates lead time.

<a href="https://vibefather.ai/templates/industrial-manufacturing-company-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/industrial-manufacturing-company-website/16080d09-ae32-4fdc-846e-ad95636eb935/webp.5fcf70574f.webp" width="100%" alt="Industrial Manufacturing Company Website — Precision Machine Shop Site with RFQ Tool built by GLM-5.3 and Kimi K3.1 Pro"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/industrial-manufacturing-company-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Industrial Manufacturing Company Website is a single-page B2B site for a CNC machining and metal-fabrication shop, in machined steel grey with electric blue for data and CTAs and hazard yellow as thin machine-signage stripes. The page reads like a spec sheet: capabilities with tolerances (±0.0005 in), surface finishes and materials; an equipment table with travel and spindle columns; case studies with part photos, materials and the problem solved; and a quality section about inspection (CMM, first-article, material certs) rather than badge soup. The signature flow is the RFQ: part details with material and finish selects, a simulated drawing-upload chip, quantity tiers, and a lead-time estimator that computes working days and a planning price band from process, quantity, finish and material — with the rule table visible and a firm-quote disclaimer. A careers block with real shift details closes it. It suits machine shops, fabricators, molders and printing houses — any business that quotes by drawing. Five variables swap shop name, town, owner, phone and years; every machine, part and price is invented sample data.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Minimal](../../styles/minimal.md), [Industrial](../../styles/industrial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/industrial-manufacturing-company-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/industrial-manufacturing-company-website?case=16080d09-ae32-4fdc-846e-ad95636eb935&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/industrial-manufacturing-company-website/16080d09-ae32-4fdc-846e-ad95636eb935/shot_desktop.5d6f995d8e.webp" width="100%" alt="Industrial Manufacturing Company Website — CNC machine shop, Halbrook, built by GLM-5.3 in ZCode"></a><br>
<b>CNC machine shop, Halbrook</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/industrial-manufacturing-company-website?case=16080d09-ae32-4fdc-846e-ad95636eb935&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/industrial-manufacturing-company-website?case=f20265aa-e228-4b03-baed-1be140e39a8a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/industrial-manufacturing-company-website/f20265aa-e228-4b03-baed-1be140e39a8a/shot_desktop.c23c241173.webp" width="100%" alt="Industrial Manufacturing Company Website — Fabrication shop, Ridgeway, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Fabrication shop, Ridgeway</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/industrial-manufacturing-company-website?case=f20265aa-e228-4b03-baed-1be140e39a8a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Shop name | Halvorsen Precision |
| `[CITY]` | City | Halbrook |
| `[FOUNDER]` | Owner | Ingrid Halvorsen |
| `[PHONE]` | Phone | (555) 771-3460 |
| `[EXPERIENCE]` | Experience | 26 years |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/industrial-manufacturing-company-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A metal fabricator: set BRAND and CITY to your shop, swap the CNC capability cards for welding, bending and assembly tolerances, and rewrite the equipment table with your press brakes and shears.
- A plastic injection molder: keep the RFQ and estimator, change the material options and multipliers to your resins, and replace the case studies with molded parts and tooling projects.
- A contract printing house: retitle the capabilities to sheet sizes, inks and finishing, and relabel the drawing upload as artwork files for the quote desk.
- A precision job shop owner: set FOUNDER, PHONE and EXPERIENCE to your own details, then replace the careers shifts with your real openings and hours.

## FAQ

### How does the lead-time and price estimator work on the Industrial Manufacturing Company Website?
The estimator adds working days from the selected process, quantity tier and finish, then shows a planning unit price band from the quantity base price times the material multiplier, rounded to whole dollars with a ±15% spread. Every rule it used is listed beside the result, and a firm-quote disclaimer sits underneath. Inputs are saved in the browser under the shop's own storage key.

### Can I add a real file upload to the RFQ form instead of the sample chip?
The Industrial Manufacturing Company Website ships with a deliberately simulated drawing upload: clicking the dashed chip attaches a fixed sample file named bracket-rev3.step with a remove button and a note that nothing uploads. There is no backend or server code in the template, so a real upload means connecting your own form service or quote system to the RFQ section.

### What should I change first when adapting this template to my machine shop?
Start with the five variables: shop name, city, owner, phone and years of experience, which appear in the hero, quality copy, footer and careers block. Then replace the invented capabilities, equipment rows, case studies and estimator rule table with your own tolerances, machines, materials and pricing, since every machine, part and price in the demo is sample data.

### What sections does the Industrial Manufacturing Company Website include?
The single page covers a hero with the crosshair logomark, capability cards with tolerances, finishes and materials, an equipment table with travel and spindle columns, industries served, an inspection-led quality section, case studies with part photos, an RFQ form with quantity tiers, the lead-time and price-band estimator, and a careers block with shift details.

### Can I use this template for a fabrication shop or a molder rather than a CNC machine shop?
Industrial Manufacturing Company Website suits any business that quotes by drawing, including fabricators, molders and printing houses. Keep the RFQ flow and estimator, then rewrite the capability cards, equipment table and case studies for your processes, and adjust the process options and base days in the estimator rules so they match how your shop actually schedules work.

### How do I build an industrial manufacturing company website with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add industrial-manufacturing-company-website, replace [BRAND], [CITY], [FOUNDER] and [PHONE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Industrial Manufacturing Company Website demo?
The CNC machine shop, Halbrook case was built by GLM-5.3 in ZCode; the Fabrication shop, Ridgeway case was built by Kimi K3.1 Pro in Kimi Code. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Industrial Manufacturing Company Website template use?
Industrial Manufacturing Company Website is a single-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Industrial Manufacturing Company Website template free to use?
Industrial Manufacturing Company Website is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Industrial Manufacturing Company Website template work on mobile?
Yes. Every Industrial Manufacturing Company Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Industrial Manufacturing Company Website on VibeFather](https://vibefather.ai/templates/industrial-manufacturing-company-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
