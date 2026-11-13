# HVAC Heating and Cooling Website

> A hot-and-cold duotone HVAC site with a sizing helper that recommends a system in plain language.

<a href="https://vibefather.ai/templates/hvac-heating-and-cooling-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/hvac-heating-and-cooling-website/7c31323f-d723-4e1d-be7e-ea694c775619/webp.c5dc053de0.webp" width="100%" alt="HVAC Heating and Cooling Website — HVAC Site with System Sizing Helper built by GLM-5.3 and Kimi K3.1 Pro"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/hvac-heating-and-cooling-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [DESIGN.md](DESIGN.md)

HVAC Heating and Cooling Website is a single-page site for a residential heating and cooling company, organized around a duotone that means something: ember red owns everything heating and urgent, ice cyan owns everything cooling and informational, and deep navy keeps the two from shouting. The signature tool is a system sizing helper — square footage, climate zone and insulation quality go in, a recommended capacity in BTU and tons plus a system type with a plain-language explanation comes out, with the math visible on screen. Around it: a 24/7 emergency banner with a real response-time promise, services color-coded hot and cold, an honest maintenance-plan comparison with the savings arithmetic shown, a rebates explainer with sample amounts labeled illustrative, technician profiles with generated portraits, and a booking form with time windows that completes inline. It suits any home-services company that diagnoses and quotes — HVAC first, but also plumbers, electricians and insulation contractors re-pointing the helper's table. Five variables swap brand, city, founder, phone and experience years; every price, rebate and review is invented sample data in one content file.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | Duotone, [Bold](../../styles/bold.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/hvac-heating-and-cooling-website?case=7c31323f-d723-4e1d-be7e-ea694c775619&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/hvac-heating-and-cooling-website/7c31323f-d723-4e1d-be7e-ea694c775619/shot_desktop.2255b231dd.webp" width="100%" alt="HVAC Heating and Cooling Website — Residential HVAC, Rookfield, built by GLM-5.3 in ZCode"></a><br>
<b>Residential HVAC, Rookfield</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/hvac-heating-and-cooling-website?case=7c31323f-d723-4e1d-be7e-ea694c775619&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/hvac-heating-and-cooling-website?case=a4d64cc8-e73d-45c7-b497-e5e209f78185&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/hvac-heating-and-cooling-website/a4d64cc8-e73d-45c7-b497-e5e209f78185/shot_desktop.b096d814be.webp" width="100%" alt="HVAC Heating and Cooling Website — Commercial HVAC, Lakeshore Heights, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Commercial HVAC, Lakeshore Heights</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/hvac-heating-and-cooling-website?case=a4d64cc8-e73d-45c7-b497-e5e209f78185&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Brand | Calder Point Heating & Air |
| `[CITY]` | City | Rookfield |
| `[FOUNDER]` | Founder | Marta Ellison |
| `[PHONE]` | Phone | (555) 462-8871 |
| `[EXPERIENCE]` | Experience | 19 years |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add hvac-heating-and-cooling-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A residential plumbing company: set BRAND and CITY, swap the services for drain, water heater and leak work, and re-point the sizing helper's table to pipe and fixture sizing.
- An electrical contractor: keep the hot-and-cold duotone, rename the services to panel upgrades and rewiring, and replace the BTU output with load and circuit explanations in plain language.
- An insulation installer: set FOUNDER and EXPERIENCE, keep the insulation factor input, and turn the maintenance plans into a seasonal inspection plan with the savings arithmetic shown.
- A commercial HVAC contractor: set BRAND to your company, switch the sizing helper to rooftop unit capacities, and replace the homeowner reviews with building-manager references.

## FAQ

### How does the system sizing helper on the HVAC Heating and Cooling Website template work?
The sizing helper on the HVAC Heating and Cooling Website template takes three inputs: square footage, climate zone and insulation quality. Cooling BTU is footprint times a zone factor of 22, 26 or 30 BTU per square foot, times an insulation factor of 0.92, 1.0 or 1.12. Tons are BTU divided by 12,000 and rounded to the nearest 0.5, and the system type follows from the tons. The result shows the BTU, tons, system type and one plain-language sentence per factor, with the math visible on screen.

### What sections and content come with the HVAC Heating and Cooling Website template?
The HVAC Heating and Cooling Website template is a single page built around a hot-and-cold duotone. It includes a 24/7 emergency banner with a response-time promise, a header with a dial logomark, a hero with a temperature dial, services color-coded heating and cooling, the system sizing helper, a maintenance-plan comparison with the savings arithmetic shown, a rebates explainer with sample amounts labeled illustrative, technician profiles, reviews and a booking form with time windows that completes inline.

### How do I change the brand, city, founder and phone number in the HVAC Heating and Cooling Website template?
The HVAC Heating and Cooling Website template has five variables: BRAND, CITY, FOUNDER, PHONE and EXPERIENCE. Set them in the content file, then rewrite the dependent copy so no default-brand remnants remain. The tel: link is derived from PHONE as digits only, and storage keys are derived from BRAND, so the sizing helper and booking request save under your own brand slug. Every price, rebate and review in the template is invented sample data in that same content file.

### Can I adapt the HVAC Heating and Cooling Website template for a plumbing or electrical business?
Yes. The HVAC Heating and Cooling Website template is built for any home-services company that diagnoses and quotes, and the prompt names plumbers, electricians and insulation contractors as the secondary audience. To re-point it, rewrite the service cards, the emergency banner and the sizing helper's table and explanations in the content file so the inputs and output match your trade, and keep the duotone and layout as they are.

### What should I check before publishing the HVAC Heating and Cooling Website template for my own company?
Before publishing the HVAC Heating and Cooling Website template, replace the five variables and every invented price, rebate amount and review with your own real figures. The rebate amounts are labeled illustrative, so keep that label or remove the numbers. Check the emergency response-time promise against what you can actually deliver, confirm the tel: link dials correctly from a phone, and test the sizing helper and booking form at a narrow width.

### How do I build a HVAC heating and cooling website with AI?
Copy the prompt from this page or run npx vibefather add hvac-heating-and-cooling-website, replace [BRAND], [CITY], [FOUNDER] and [PHONE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the HVAC Heating and Cooling Website demo?
The Residential HVAC, Rookfield case was built by GLM-5.3 in ZCode; the Commercial HVAC, Lakeshore Heights case was built by Kimi K3.1 Pro in Kimi Code. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the HVAC Heating and Cooling Website template use?
HVAC Heating and Cooling Website is a single-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the HVAC Heating and Cooling Website template for a client or a business?
The HVAC Heating and Cooling Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the HVAC Heating and Cooling Website template work on mobile?
Yes. Every HVAC Heating and Cooling Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [HVAC Heating and Cooling Website on VibeFather](https://vibefather.ai/templates/hvac-heating-and-cooling-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
