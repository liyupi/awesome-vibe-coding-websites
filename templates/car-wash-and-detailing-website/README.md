# Car Wash and Detailing Website

> A glossy dark-mode car wash site with a live membership picker, size-aware pricing and a paint-correction slider.

<a href="https://vibefather.ai/templates/car-wash-and-detailing-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/car-wash-and-detailing-website/b5ab2ca9-328a-42b4-bec0-7e461e3c2a2d/webp.85698d3483.webp" width="100%" alt="Car Wash and Detailing Website — Car Wash Site with Membership Picker built by GLM-5.3 and Kimi K3.1 Pro"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/car-wash-and-detailing-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Car Wash and Detailing Website is a single-page site for a modern tunnel wash and detailing studio, in wet black, candy blue and foam white — the gloss itself is the design language, with CSS speculars and water-bead highlights on dark panels. A vehicle-size selector (sedan / SUV / truck) reprices every package, detail and membership on the page from one visible table. The signature tool is the monthly unlimited membership picker: three tiers with a live 'pays for itself in N washes' calculation as you choose tier and size. A before/after paint-correction slider proves the detailing work, the menu prices interior, polish, ceramic and headlight services by size, slot booking completes inline, and gift cards and fleet accounts round out the offer. Photos show foam, gloss and reflections on generic badge-free cars. It suits tunnel washes, hand-wash studios and mobile detailers re-pointing the menu. Five variables swap brand, city, owner, phone and years; all prices and reviews are invented sample data.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Dark](../../styles/dark.md), [Bold](../../styles/bold.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/car-wash-and-detailing-website?case=b5ab2ca9-328a-42b4-bec0-7e461e3c2a2d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/car-wash-and-detailing-website/b5ab2ca9-328a-42b4-bec0-7e461e3c2a2d/shot_desktop.b06d50e91f.webp" width="100%" alt="Car Wash and Detailing Website — Auto spa, Marina Heights, built by GLM-5.3 in ZCode"></a><br>
<b>Auto spa, Marina Heights</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/car-wash-and-detailing-website?case=b5ab2ca9-328a-42b4-bec0-7e461e3c2a2d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/car-wash-and-detailing-website?case=81d6151f-d12a-400b-ac55-33b92e86832a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/car-wash-and-detailing-website/81d6151f-d12a-400b-ac55-33b92e86832a/shot_desktop.0570749bda.webp" width="100%" alt="Car Wash and Detailing Website — Fleet wash, Dockside Junction, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Fleet wash, Dockside Junction</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/car-wash-and-detailing-website?case=81d6151f-d12a-400b-ac55-33b92e86832a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Brand | Sudworks Auto Spa |
| `[CITY]` | City | Marina Heights |
| `[FOUNDER]` | Owner | Theo Marsh |
| `[PHONE]` | Phone | (555) 554-7788 |
| `[EXPERIENCE]` | Years at the corner | 7 years |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add car-wash-and-detailing-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A mobile detailer with no fixed bay: set BRAND, CITY and PHONE, keep the size selector, and lead with the Interior Detail and Machine Polish rows instead of the tunnel packages.
- A fleet-wash operator: point FOUNDER and EXPERIENCE at your depot, keep the fleet form and its vehicle slider, and reword the membership band around monthly invoicing for company cars.
- A hand-wash studio in a small town: set CITY and the years at the corner, trim the menu to two packages and one membership tier, and keep the paint-correction slider as your proof.
- A ceramic coating specialist: keep the dark gloss styling, drop the Express wash from the price table, and make the Ceramic Coating row and the before/after slider the first things visitors see.

## FAQ

### How does the vehicle-size selector change prices on the Car Wash and Detailing Website?
The Car Wash and Detailing Website template has three size chips near the top of the pricing section: sedan, SUV and van, and truck and oversize. Choosing one reprices every wash package, membership tier and detailing service on the page from a single price table, with a short tween on each number. The choice is saved in the browser under a brand-named key, so a returning visitor sees their size again.

### How does the unlimited membership break-even calculation work on this car wash template?
The Car Wash and Detailing Website template divides each membership's monthly price by the single-wash price of the tier it includes at the current vehicle size. It shows the result to one decimal, for example roughly 1.7 Deluxe washes and it is paid for. The figure recalculates live when a visitor switches size or tier, so the math stays honest across sedan, SUV and truck pricing.

### Can I book a detail slot directly on the Car Wash and Detailing Website template?
Yes. The Car Wash and Detailing Website template includes an inline booking form where a visitor picks any wash package or detailing service, a relative day window such as Today, Tomorrow or This weekend, one of three sample time slots per window, plus name, phone and vehicle size. It validates inline, shows a success state with a slot code, and stores the submission in the browser. No calendar dates are tied to the real clock.

### What does the paint-correction slider show and how do visitors use it?
The before/after slider on the Car Wash and Detailing Website template sits over one 4:3 panel showing dull, swirled paint under corrected gloss, clipped by a candy-blue handle. Visitors can drag the handle with a pointer, click anywhere on the panel to jump the split, or focus the handle and move it with arrow keys. It is built as a real slider control and settles with a short spring on release.

### Which parts of the Car Wash and Detailing Website template are sample data I need to replace?
All prices, time slots and reviews in the Car Wash and Detailing Website template are invented sample data, so replace them with your own menu before publishing. The five variables are brand, city, owner, phone and years at the corner. The template keeps copy and the single price table in one content file, so you rewrite the dependent headlines and menu there and the size selector, membership math and booking options follow.

### How do I build a car wash and detailing website with AI?
Copy the prompt from this page or run npx vibefather add car-wash-and-detailing-website, replace [BRAND], [CITY], [FOUNDER] and [PHONE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Car Wash and Detailing Website demo?
The Auto spa, Marina Heights case was built by GLM-5.3 in ZCode; the Fleet wash, Dockside Junction case was built by Kimi K3.1 Pro in Kimi Code. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Car Wash and Detailing Website template use?
Car Wash and Detailing Website is a single-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Car Wash and Detailing Website template for a client or a business?
The Car Wash and Detailing Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Car Wash and Detailing Website template work on mobile?
Yes. Every Car Wash and Detailing Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Car Wash and Detailing Website on VibeFather](https://vibefather.ai/templates/car-wash-and-detailing-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
