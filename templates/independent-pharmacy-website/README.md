# Independent Pharmacy Website

> A fresh green-and-tangerine pharmacy site with a seconds-long refill request, transfer steps and a delivery checker.

<a href="https://vibefather.ai/templates/independent-pharmacy-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/independent-pharmacy-website/bb59ef30-eaff-4778-a623-6b46f2e37cc3/webp.ea616b26e5.webp" width="100%" alt="Independent Pharmacy Website — Pharmacy Site with Refill Request built by GLM-5.3 and Kimi K3.1 Pro"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/independent-pharmacy-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Independent Pharmacy Website is a single-page site for a neighborhood pharmacy, in pharmacy green, clean white and cheerful tangerine — the feel of a bright modern counter rather than a chain portal. The three flows patients actually need are built: a refill request (Rx number, pickup or delivery, time window) that confirms locally and keeps a 'My refills' list in the browser; a transfer-your-prescription walkthrough with the four real steps and a local request form; and a delivery-area checker that matches an entered ZIP against an invented service zone on a drawn map. Vaccines and health services book by slot, extra services (med sync, blister packs, pet prescriptions, equipment) get plain cards, hours and a pharmacist-chat line sit near the phone number, and a short FAQ answers the real questions. The template gives no medical advice and makes no drug claims — every question routes to 'ask the pharmacist' — and photos show plain-label bottles only. It suits independent pharmacies, compounding shops and health-supply stores. Five variables swap name, town, pharmacist-owner, phone and years; everything is sample data.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Playful](../../styles/playful.md), [Minimal](../../styles/minimal.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/independent-pharmacy-website?case=bb59ef30-eaff-4778-a623-6b46f2e37cc3&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/independent-pharmacy-website/bb59ef30-eaff-4778-a623-6b46f2e37cc3/shot_desktop.096dcc375a.webp" width="100%" alt="Independent Pharmacy Website — Pharmacy, Alderwood, built by GLM-5.3 in ZCode"></a><br>
<b>Pharmacy, Alderwood</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/independent-pharmacy-website?case=bb59ef30-eaff-4778-a623-6b46f2e37cc3&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/independent-pharmacy-website?case=909d7848-11d0-4674-b133-5ac578564eb3&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/independent-pharmacy-website/909d7848-11d0-4674-b133-5ac578564eb3/shot_desktop.373b4eb913.webp" width="100%" alt="Independent Pharmacy Website — Pharmacy, Cedar Hollow, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Pharmacy, Cedar Hollow</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/independent-pharmacy-website?case=909d7848-11d0-4674-b133-5ac578564eb3&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Pharmacy name | Linden Row Pharmacy |
| `[CITY]` | City | Alderwood |
| `[FOUNDER]` | Owner-pharmacist | Phuong Tran |
| `[PHONE]` | Phone | (555) 774-8890 |
| `[EXPERIENCE]` | Years | 12 years |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add independent-pharmacy-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A compounding pharmacy: keep the refill and transfer flows, then re-point the extra-service cards to compounded preparations and set BRAND and FOUNDER to your lab and head pharmacist.
- A health-supply store: set CITY to your town, swap the vaccine slot chips for equipment fitting appointments and keep the ZIP delivery checker for local drop-offs.
- A rural pharmacy with one van: narrow the in-zone ZIP list to your actual routes, change the out-of-zone note to mention counter pickup and adjust the hours block near the phone line.
- A new pharmacist taking over an established counter: set EXPERIENCE to the years the store has stood, name yourself in FOUNDER and keep the transfer walkthrough to win patients from chains.

## FAQ

### How does the refill request work on the Independent Pharmacy Website template?
The Independent Pharmacy Website template includes a refill form with an Rx number field (pattern RX-######), your name, a pickup-or-delivery choice and morning, afternoon or evening time-window chips. Submitting validates inline, confirms with 'Request sent — we'll text when it's ready' and adds the refill to a 'My refills' list stored in the browser, showing the Rx number, method, window and a Requested chip. Statuses are demo only and never advance on their own.

### How do I change the pharmacy name, town and pharmacist on this template?
Five variables control the Independent Pharmacy Website template: BRAND for the pharmacy name, CITY for the town, FOUNDER for the owner-pharmacist, PHONE for the store line and EXPERIENCE for the years on the corner. Change them and rewrite the dependent copy — the hero paragraph, transfer confirmation, delivery map label and footer — so no default-brand remnants remain. The tel: link is derived from PHONE using digits only.

### What does the delivery-area checker do and can I set my own ZIP codes?
The Independent Pharmacy Website template's delivery checker takes a five-digit ZIP and matches it against an invented in-zone list of eight codes. In-zone returns a green 'Yes — same-day windows before 4 p.m., seven days' message; out-of-zone returns a tangerine note about pickup and holding at the counter. A drawn map shows the zone as a green blob over invented streets with the pharmacy marked. Replace the ZIP list and zone copy with your real service area.

### Does the Independent Pharmacy Website template give medical advice or make drug claims?
No. The Independent Pharmacy Website template deliberately gives no medical advice and makes no drug claims. Every health question routes to 'ask the pharmacist', and the footer states that the site books the service while the pharmacist answers every health question in person or by phone. Photos show plain-label bottles and boxes only, with no readable product labels or brand marks.

### What vaccines and health services can patients book on this pharmacy site?
The Independent Pharmacy Website template lists five bookable services with slot chips: flu shot (walk-in or slot), shingles, pneumonia, travel health consult and blood pressure check (walk-in only). The booking form has a service select, morning, midday or late-afternoon slot chips, name and phone, and confirms with 'Booked (demo) — we text a confirmation.' Bookings persist in the browser under a brand-namespaced key.

### How do I build an independent pharmacy website with AI?
Copy the prompt from this page or run npx vibefather add independent-pharmacy-website, replace [BRAND], [CITY], [FOUNDER] and [PHONE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Independent Pharmacy Website demo?
The Pharmacy, Alderwood case was built by GLM-5.3 in ZCode; the Pharmacy, Cedar Hollow case was built by Kimi K3.1 Pro in Kimi Code. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Independent Pharmacy Website template use?
Independent Pharmacy Website is a single-page site built with React, Motion and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Independent Pharmacy Website template for a client or a business?
The Independent Pharmacy Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Independent Pharmacy Website template work on mobile?
Yes. Every Independent Pharmacy Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Independent Pharmacy Website on VibeFather](https://vibefather.ai/templates/independent-pharmacy-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
