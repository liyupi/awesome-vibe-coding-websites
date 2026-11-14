# Moving Company Quote Page

> A warm moving quote page with live inventory, crew estimates, and a booking request.

<a href="https://vibefather.ai/templates/moving-company-quote-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/moving-company-quote-page/4769861d-18b6-4837-a102-422a3477c892/webp.162e55d00f.webp" width="100%" alt="Moving Company Quote Page — Moving Quote Page with Inventory Calculator built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/moving-company-quote-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Moving Company Quote Page is a single-page website for a local mover that wants to answer practical questions before asking for contact details. It suits residential movers, apartment specialists, and small relocation teams. Visitors can choose a home size, adjust a room-by-room inventory, enter mileage, and see the recommended truck, crew, labor time, and price range update together. A booking request carries the current estimate into a clear final step. A persistent ledger explains labor, truck, and mileage charges instead of hiding the logic behind a single number.

The visual direction combines warm ivory surfaces, deep spruce typography, restrained apricot accents, and editorial photography of real moving-day scenes. Fraunces headings give the page a human voice, while DM Sans keeps form controls and price breakdowns easy to scan. The quote studio is the central feature: a spacious working area sits beside a sticky estimate ledger on desktop and becomes an expandable summary on mobile. Small number transitions, section reveals, and responsive stepper controls provide feedback without slowing down the task.

The prompt includes exact inventory presets, cubic-foot values, calculation rules, sample reviews, service details, FAQs, and four coordinated image prompts. Default content presents an invented Portland-area mover, with an alternative Austin-area case for a second build. Adapt the brand, service area, audience, hourly rate, and phone number through the variables, then revise the centralized content to match. Everything runs as a static React site; inventory, estimate state, and the demo booking request stay in the browser, with no backend or external form service.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 6 + React 19 + TypeScript + Tailwind CSS 4 + @tailwindcss/vite + motion + lucide-react |
| Pages | 1 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/moving-company-quote-page?case=4769861d-18b6-4837-a102-422a3477c892&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/moving-company-quote-page/4769861d-18b6-4837-a102-422a3477c892/shot_desktop.929a7e01e8.webp" width="100%" alt="Moving Company Quote Page — Portland home movers, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Portland home movers</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/moving-company-quote-page?case=4769861d-18b6-4837-a102-422a3477c892&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/moving-company-quote-page?case=5acec1bc-5ec0-4753-adfb-4536ca76a28c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/moving-company-quote-page/5acec1bc-5ec0-4753-adfb-4536ca76a28c/shot_desktop.4f7ad660d6.webp" width="100%" alt="Moving Company Quote Page — Austin apartment movers, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Austin apartment movers</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/moving-company-quote-page?case=5acec1bc-5ec0-4753-adfb-4536ca76a28c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Moving company name | Juniper Lane Movers |
| `[SERVICE_AREA]` | Service area | Portland and the Willamette Valley |
| `[AUDIENCE]` | Primary customers | Apartment renters, growing families, and small offices |
| `[BASE_RATE]` | Two-mover hourly rate in USD | 145 |
| `[PHONE]` | Booking phone number | (503) 555-0148 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add moving-company-quote-page` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- An apartment specialist in a dense city: set AUDIENCE to renters and building managers, trim the inventory presets to studio and one-bedroom layouts, and rewrite the mileage copy for tight urban access.
- A small office relocation team: keep the quote studio but swap the room tabs for desks, servers and filing, then adjust BASE_RATE and the crew rules for commercial moves.
- A long-distance mover: set SERVICE_AREA to your corridor, make mileage the dominant ledger line, and rewrite the FAQ to explain how distance affects truck and labor time.
- A family-run local mover: set BRAND and PHONE to your company, replace the sample reviews with your own, and point the booking step at your coordinator's inbox.

## FAQ

### How does the moving quote calculator actually work out truck size, crew and price?
The Moving Company Quote Page template starts from a move-size preset that sets a room-by-room inventory, then adjusts cubic-foot values as visitors add or remove items. Mileage and the two-mover hourly rate feed the same calculation, so the recommended truck, crew count, labor hours and price range update together. A persistent ledger shows the labor, truck and mileage charges separately, so the estimate reads as a planning range rather than a single unexplained number.

### Can I change the hourly rate and service area for my own moving company?
Yes. The Moving Company Quote Page template exposes BASE_RATE for the two-mover hourly rate and SERVICE_AREA for the region you serve, alongside BRAND, PHONE and AUDIENCE. The calculator adds 45 per additional mover per hour on top of that base rate. When you change any variable, rewrite the default Portland-area copy, reviews, FAQs and image prompts in the centralized content so nothing from the sample mover is left behind.

### Where do booking requests go if the site has no backend?
The Moving Company Quote Page template keeps inventory, estimate state and the demo booking request in the browser, with the current draft saved locally. The final booking step carries the live estimate into a clear request summary, but it does not send anything to a server or external form service. To receive real requests, connect that step to your own form endpoint or inbox after generating the site.

### What should I change first after generating the Moving Company Quote Page?
Set the five variables first: BRAND, PHONE, AUDIENCE, BASE_RATE and SERVICE_AREA. Then revise the centralized content for the move-size presets and inventory items, since those drive every estimate, and check the reviews, service details and FAQs against what your company actually offers. The four coordinated image prompts are worth regenerating for real moving-day scenes in your area rather than reusing the sample photography.

### Is the Moving Company Quote Page prompt free to use?
The Moving Company Quote Page is a free template. Its prompt and every DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial use, including building a quote page for a client or for your own moving business, requires Pro. Pro templates show the brief, stack and variables publicly and the full prompt to Pro members, and source code of the demos comes with Pro.

### How do I build a moving company quote page with AI?
Copy the prompt from this page or run npx vibefather add moving-company-quote-page, replace [BRAND], [SERVICE_AREA], [AUDIENCE] and [BASE_RATE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Moving Company Quote Page demo?
The Portland home movers case was built by Kimi K3.1 Pro in Kimi Code; the Austin apartment movers case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Moving Company Quote Page template use?
Moving Company Quote Page is a single-page site built with React, Motion and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Moving Company Quote Page template for a client or a business?
The Moving Company Quote Page prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Moving Company Quote Page template work on mobile?
Yes. Every Moving Company Quote Page build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Moving Company Quote Page on VibeFather](https://vibefather.ai/templates/moving-company-quote-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
