# Independent Pharmacy Website

> A fresh green-and-tangerine pharmacy site with a seconds-long refill request, transfer steps and a delivery checker.

<a href="https://vibefather.ai/templates/independent-pharmacy-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/independent-pharmacy-website/bb59ef30-eaff-4778-a623-6b46f2e37cc3/webp.ea616b26e5.webp" width="100%" alt="Independent Pharmacy Website — Pharmacy Site with Refill Request built by GLM-5.3"></a>

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
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/independent-pharmacy-website?case=bb59ef30-eaff-4778-a623-6b46f2e37cc3&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/independent-pharmacy-website/bb59ef30-eaff-4778-a623-6b46f2e37cc3/shot_desktop.096dcc375a.webp" width="100%" alt="Independent Pharmacy Website — Pharmacy, Alderwood, built by GLM-5.3 in ZCode"></a><br>
<b>Pharmacy, Alderwood</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/independent-pharmacy-website?case=bb59ef30-eaff-4778-a623-6b46f2e37cc3&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
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

- A compounding pharmacy: set [BRAND] to your lab's name, swap the extra services cards for your preparations and keep the transfer steps for patients moving from a chain.
- A health-supply store: rename [BRAND] and [CITY], replace the vaccine slots with equipment fittings and keep the ZIP delivery checker for local drop-offs.
- A new pharmacist-owner: set [FOUNDER] and [EXPERIENCE] to your own details, then rewrite the hero paragraph to introduce your counter and your delivery van.
- A bilingual neighborhood pharmacy: keep the refill and transfer flows, set [PHONE] to your line and rewrite the FAQ and hours copy around how your counter answers questions.

## FAQ

### How does the refill request work on the Independent Pharmacy Website template?
The Independent Pharmacy Website template takes an Rx number in the RX-###### pattern, your name, a pickup-or-delivery choice and a time-window chip for morning, afternoon or evening. Submitting validates inline, shows the confirmation 'Request sent — we'll text when it's ready' and adds the refill to a My refills list saved in the browser with a Requested chip. No backend is involved.

### How do I check whether a ZIP code is in the delivery area?
The delivery checker on the Independent Pharmacy Website template takes a five-digit ZIP and matches it against an invented in-zone list. A match shows a green success with same-day windows before 4 p.m., seven days; anything else shows a tangerine note that pickup is always ready and the order will be held at the counter. A drawn map marks the zone as a green blob over invented streets.

### What do I need to change to make this pharmacy template my own pharmacy?
The Independent Pharmacy Website template exposes five variables: brand name, city, owner-pharmacist, phone and years in business. Set them in the content file and rewrite the dependent copy in the same tone and length, including the hero, the transfer request success message that names the pharmacist, the hours section and the footer. Storage keys and the tel: link derive from brand and phone.

### Does the Independent Pharmacy Website template give medical advice or make drug claims?
No. The Independent Pharmacy Website template is written so every health question routes to the pharmacist, and the footer states that the site books services while the pharmacist answers health questions in person or by phone. Photos show plain-label bottles and a bright counter only, with no readable product labels. Keep that boundary when you rewrite copy for your own pharmacy.

### Can I adapt this template for a compounding pharmacy or a health-supply store?
Yes. The Independent Pharmacy Website template is built for independent pharmacies, compounding shops and health-supply stores. The extra services cards cover med sync, blister packs, pet prescriptions and equipment, so a compounding shop can re-point those cards at its own preparations and keep the refill, transfer, vaccine booking and delivery checker flows as they are.

### How do I build an independent pharmacy website with AI?
Copy the prompt from this page or run npx vibefather add independent-pharmacy-website, replace [BRAND], [CITY], [FOUNDER] and [PHONE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demo was built from exactly that text.

### Which AI model built the Independent Pharmacy Website demo?
The Pharmacy, Alderwood case was built by GLM-5.3 in ZCode. Each build used the published prompt with nothing added.

### What tech stack and pages does the Independent Pharmacy Website template use?
Independent Pharmacy Website is a single-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Independent Pharmacy Website template for a client or a business?
The Independent Pharmacy Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Independent Pharmacy Website template work on mobile?
Yes. Every Independent Pharmacy Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Independent Pharmacy Website on VibeFather](https://vibefather.ai/templates/independent-pharmacy-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
