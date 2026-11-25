# Industrial Manufacturing Company Website <sup>PRO</sup>

> A precision machine-shop site with spec-sheet capabilities, an equipment table and an RFQ flow that estimates lead time.

<a href="https://vibefather.ai/templates/industrial-manufacturing-company-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/industrial-manufacturing-company-website/16080d09-ae32-4fdc-846e-ad95636eb935/webp.5fcf70574f.webp" width="100%" alt="Industrial Manufacturing Company Website — Precision Machine Shop Site with RFQ Tool built by GLM-5.3, Kimi K3.1 Pro and GLM-5.4"></a>

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
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [GLM-5.4](../../models/glm-5-4.md) in ZCode |
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
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/industrial-manufacturing-company-website?case=4d629633-6003-45d0-aef8-33f0bef7eb6d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/industrial-manufacturing-company-website/4d629633-6003-45d0-aef8-33f0bef7eb6d/shot_desktop.57670a297e.webp" width="100%" alt="Industrial Manufacturing Company Website — CNC machine shop, Halbrook, built by GLM-5.4 in ZCode"></a><br>
<b>CNC machine shop, Halbrook</b><br>
<sub>Built by <b>GLM-5.4</b> in ZCode · <a href="https://vibefather.ai/templates/industrial-manufacturing-company-website?case=4d629633-6003-45d0-aef8-33f0bef7eb6d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
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

- A mold-making shop: set BRAND and CITY, then rewrite the capability cards around tool steel and mold bases and swap the equipment table for your press and EDM capacity.
- A metal printing house: keep the RFQ and estimator, change the process base days to your print and finishing steps, and replace case-study parts with printed brackets and housings.
- A fabrication and welding contractor: lead with the fabrication process in the estimator, retitle the equipment table for press brakes and weld cells, and show structural steel case studies.
- A precision turning supplier: drop CNC milling from the estimator options, feature turned parts in the case studies, and set the equipment table to your lathes and bar feeders.

## FAQ

### How does the RFQ lead-time estimator work on the Industrial Manufacturing Company Website template?
The estimator adds working days from three visible rules: a process base (CNC milling 3, CNC turning 2, fabrication 4, finishing only 1), a quantity tier (1 pc adds 0, 1,000 adds 14), and a finish add (bead blast 2, passivate 3, anodize 4). It shows every rule it used and a ±15% planning price band, with a firm-quote disclaimer.

### Can I use the Industrial Manufacturing Company Website template for a client's machine shop?
Commercial and client work on the Industrial Manufacturing Company Website template needs Pro, which also gives you the full prompt and the demo source code. Free use covers the published brief, stack and variables for personal, non-commercial projects, and every DESIGN.md is free to read. The estimator math, equipment table and RFQ flow all come with the Pro template.

### What do I change first to make the Industrial Manufacturing Company Website template my own shop?
Set the five variables first: BRAND for the shop name, CITY for the floor location, FOUNDER for the owner named in the hero and quality copy, PHONE for the quote desk line, and EXPERIENCE for the years in the stats. Then replace the invented machines, case-study parts, tolerances and estimator prices in the content file with your real data.

### Does the Industrial Manufacturing Company Website template actually upload drawings?
No. The drawing upload on the Industrial Manufacturing Company Website template is honestly simulated: clicking the dashed drop-chip attaches a fixed sample file labeled bracket-rev3.step · 2.4 MB with an X to remove it, and a small note says nothing uploads. There is no backend, so pair it with your own quote inbox or form service before going live.

### What sections come with the Industrial Manufacturing Company Website template?
The single page carries capabilities with tolerances, surface finishes and materials; an equipment table with travel and spindle columns; industries served; an inspection-led quality section covering CMM, first-article and material certs; case studies with part photos; the RFQ form with quantity tiers; the lead-time and price-band estimator; and a careers block with shift details.

### How do I build an industrial manufacturing company website with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add industrial-manufacturing-company-website, replace [BRAND], [CITY], [FOUNDER] and [PHONE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Industrial Manufacturing Company Website demo?
The CNC machine shop, Halbrook case was built by GLM-5.3 in ZCode; the Fabrication shop, Ridgeway case was built by Kimi K3.1 Pro in Kimi Code; the CNC machine shop, Halbrook case was built by GLM-5.4 in ZCode. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Industrial Manufacturing Company Website template use?
Industrial Manufacturing Company Website is a single-page site built with Motion, React and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Industrial Manufacturing Company Website template free to use?
Industrial Manufacturing Company Website is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Industrial Manufacturing Company Website template work on mobile?
Yes. Every Industrial Manufacturing Company Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Industrial Manufacturing Company Website on VibeFather](https://vibefather.ai/templates/industrial-manufacturing-company-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
