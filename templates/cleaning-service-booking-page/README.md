# Cleaning Service Booking Page

> Home cleaning booking page with a live price calculator (rooms, frequency, add-ons), checklist, date picker and client-side booking.

<a href="https://vibefather.ai/templates/cleaning-service-booking-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/cleaning-service-booking-page/558aa9e8-f7a4-4f02-baa2-6fe98feb2d66/webp.809bed58a8.webp" width="100%" alt="Cleaning Service Booking Page — Cleaning Page with Price Calculator built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/cleaning-service-booking-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A single-page booking site for a home cleaning service: the calculator is the centerpiece — bedroom and bathroom steppers, frequency pills with visible discounts (once, biweekly, weekly), and add-on toggles (oven, windows, fridge, laundry) whose prices stack live onto an itemized quote. Around it: a sparkle-promise hero, the plain-words checklist of what every clean includes, a 14-day date picker with time windows, a sticky booking summary with name and address fields that confirms client-side, a trust strip (insured, same cleaner each visit, our own supplies) and reviews from invented households. The default content prices an invented two-cleaner crew, but the pattern suits any per-visit home service — handyman, pet-sitting, lawn care: change the brand, city, rates and service lines and every number still derives cleanly from one content file. The look is fresh and spotless: crisp white, sky-blue ink, one citrus accent, airy rounded Poppins display over Plus Jakarta Sans, check marks everywhere and gentle wipe-in reveals. Photography shows rooms mid-clean with no people. To adapt it, swap the variables and rewrite the copy in one content file.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Playful](../../styles/playful.md), [Minimal](../../styles/minimal.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/cleaning-service-booking-page?case=558aa9e8-f7a4-4f02-baa2-6fe98feb2d66&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/cleaning-service-booking-page/558aa9e8-f7a4-4f02-baa2-6fe98feb2d66/shot_desktop.1ce3ff4711.webp" width="100%" alt="Cleaning Service Booking Page — Home cleaning crew, built by GLM-5.3 in ZCode"></a><br>
<b>Home cleaning crew</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/cleaning-service-booking-page?case=558aa9e8-f7a4-4f02-baa2-6fe98feb2d66&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/cleaning-service-booking-page?case=c38f583c-1425-4fdb-a433-122a51a6a5b2&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/cleaning-service-booking-page/c38f583c-1425-4fdb-a433-122a51a6a5b2/shot_desktop.a29c70f6a7.webp" width="100%" alt="Cleaning Service Booking Page — Office cleaning crew, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Office cleaning crew</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/cleaning-service-booking-page?case=c38f583c-1425-4fdb-a433-122a51a6a5b2&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Company name | Suds & Sun |
| `[CITY]` | City | Denver, Colorado |
| `[BASE]` | Base visit price | 89 |
| `[FOCUS]` | What gets cleaned | family homes and apartments |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add cleaning-service-booking-page` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A solo house cleaner: set BRAND to your name, BASE to your flat visit rate, FOCUS to apartments and condos, and trim the add-on toggles to the extras you actually offer.
- An office cleaning crew: set FOCUS to small offices and studios, rename the bedroom and bathroom steppers to desks and restrooms, and rewrite the checklist around after-hours office cleaning.
- A pet-sitting service: keep the date picker and sticky summary, swap the room steppers for number of pets and visits per day, and replace the cleaning checklist with feeding and walk duties.
- A lawn care business: set BASE to your mowing visit price, replace the add-on toggles with edging, hedging and leaf removal, and rewrite reviews for suburban neighborhoods in CITY.

## FAQ

### How does the live price calculator on the Cleaning Service Booking Page work?
The Cleaning Service Booking Page calculator adds a base visit price to a per-bedroom and per-bathroom charge, then applies a frequency multiplier for once, biweekly or weekly cleans and stacks flat add-on prices for oven, windows, fridge and laundry. Bedroom and bathroom steppers and add-on toggles update an itemized quote and total live, and every figure derives from one content file.

### What can I change first to make the Cleaning Service Booking Page my own cleaning business?
Start with the four variables: set BRAND to your company name, CITY to your service area, BASE to your base visit price and FOCUS to what you clean, such as family homes and apartments or small offices and studios. Then rewrite the hero, checklist, reviews and time windows in the single content file so the copy matches your crew and rates.

### Does the Cleaning Service Booking Page actually send bookings anywhere?
No. The Cleaning Service Booking Page confirms bookings client-side only, so name, address, date and time window are captured in the browser and nothing is submitted to a server or external API. To receive real bookings you connect the form to your own email service, form backend or scheduling tool, or use the summary as a starting point for a call.

### What sections come with the Cleaning Service Booking Page template?
The Cleaning Service Booking Page template is one page with a sparkle-promise hero, the calculator, a plain-words checklist of what every clean includes, a 14-day date picker with time windows, a sticky booking summary with name and address fields, a trust strip covering insured, same cleaner each visit and our own supplies, and reviews from invented households.

### Can the Cleaning Service Booking Page be adapted for a handyman or pet-sitting business?
The Cleaning Service Booking Page pattern suits any per-visit home service. The calculator math, frequency pills, add-on toggles, date picker and sticky summary are generic, so a handyman, pet-sitter or lawn care crew can change the brand, city, rates and service lines in the content file and every number still derives cleanly from the same quote math.

### How do I build a cleaning service booking page with AI?
Copy the prompt from this page or run npx vibefather add cleaning-service-booking-page, replace [BRAND], [CITY], [BASE] and [FOCUS] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Cleaning Service Booking Page demo?
The Home cleaning crew case was built by GLM-5.3 in ZCode; the Office cleaning crew case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Cleaning Service Booking Page template use?
Cleaning Service Booking Page is a single-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Cleaning Service Booking Page template for a client or a business?
The Cleaning Service Booking Page prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Cleaning Service Booking Page template work on mobile?
Yes. Every Cleaning Service Booking Page build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Cleaning Service Booking Page on VibeFather](https://vibefather.ai/templates/cleaning-service-booking-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
