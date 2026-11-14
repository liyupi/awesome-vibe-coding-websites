# Spa and Massage Website

> A serene two-page spa site with treatments, therapist profiles, gift cards and four-step booking.

<a href="https://vibefather.ai/templates/spa-and-massage-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/spa-and-massage-website/69a6c319-1d03-4112-afaf-fe35aacd96a0/webp.c145b3203e.webp" width="100%" alt="Spa and Massage Website — Calm Spa Website with Treatment Booking built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/spa-and-massage-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A two-page website for an independent day spa: a home page with treatments, durations and prices, three therapist profiles, curated packages, an interactive gift-card preview and a first-visit FAQ, plus a dedicated booking page. The default content follows an invented neighborhood spa in Portland, but the structure suits massage studios, wellness rooms and solo practitioners. Change the brand, city, street and treatment specialties, then rewrite the content in one file to fit the new business. The visual direction is quiet and tactile rather than clinical: warm porcelain, pale sage and deep spruce, generous editorial spacing, fine rules, a tall arched hero photograph and softly rounded cards. Cormorant Garamond headlines contrast with Manrope body copy, both self-hosted. Six coordinated photographs supply an empty treatment room, folded linens and botanical details, three fictional therapist portraits and a gift-card still life. The booking flow moves through treatment, therapist, date and time, and confirmation. Package selections, staff schedules, service durations and occupied slots all affect the available choices. A reference card persists in localStorage, while gift-card selections also stay on the device; no payment or form data leaves the browser. Small details make the site useful before a first appointment: arrival guidance, pressure preferences, accessibility notes, cancellation terms and opening hours. Gentle reveals, accordions, step transitions and responsive sticky summaries add polish without disturbing the calm. On smaller screens, treatment cards and time slots retain generous tap targets, while reduced-motion preferences replace transitions with immediate, readable state changes. The layout adapts from a spacious desktop composition to a thumb-friendly mobile booking experience.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Minimal](../../styles/minimal.md), [Luxury](../../styles/luxury.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 2 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/spa-and-massage-website?case=69a6c319-1d03-4112-afaf-fe35aacd96a0&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/spa-and-massage-website/69a6c319-1d03-4112-afaf-fe35aacd96a0/shot_desktop.5f3e7763b4.webp" width="100%" alt="Spa and Massage Website — Neighborhood spa in Portland, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Neighborhood spa in Portland</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/spa-and-massage-website?case=69a6c319-1d03-4112-afaf-fe35aacd96a0&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/spa-and-massage-website?case=99e7d100-0b4a-4ce6-9e7e-5d94830845b5&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/spa-and-massage-website/99e7d100-0b4a-4ce6-9e7e-5d94830845b5/shot_desktop.5fb0917f18.webp" width="100%" alt="Spa and Massage Website — Coastal spa in Monterey, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Coastal spa in Monterey</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/spa-and-massage-website?case=99e7d100-0b4a-4ce6-9e7e-5d94830845b5&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Spa name | Alder & Ash Spa |
| `[CITY]` | City | Portland, Oregon |
| `[STREET]` | Street | Juniper Lane |
| `[SPECIALTIES]` | Treatment specialties | Deep tissue, hot stone and aromatherapy |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add spa-and-massage-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A solo massage therapist: set BRAND to your practice name, keep one therapist profile, and rewrite the treatment menu around your own durations and prices.
- A hotel wellness room: set CITY and STREET to the property address, keep the first-visit FAQ, and adjust opening hours to match guest check-in times.
- A couples massage studio: change SPECIALTIES to couples sessions, rewrite packages around two-person bookings, and adapt the gift-card preview for anniversary gifts.
- A mobile spa serving one neighborhood: set STREET to your service area, rewrite arrival guidance to cover home visits, and simplify the booking summary for travel time.

## FAQ

### How does the four-step booking flow on the Spa and Massage Website template work?
The Spa and Massage Website template books a treatment in four steps: choose a treatment, choose a therapist or no preference, pick a date and time, then confirm. Available times are generated as 30-minute starts that fit the treatment duration before closing, and they account for each therapist's working days, Mondays being closed and occupied slots. The flow ends with a reference card that stays in the browser.

### How do I change the spa name, city, street and specialties in the template?
The Spa and Massage Website template uses four variables: BRAND, CITY, STREET and SPECIALTIES. Set BRAND to your spa name, CITY and STREET to your location and SPECIALTIES to three comma-separated treatments. When you change SPECIALTIES, rewrite the treatment names, therapist specialties, package contents, hero copy and FAQs to match, keeping the same counts and layout. All copy lives in one content file, so the swap happens in one place.

### Can the Spa and Massage Website template take payments or send bookings to my email?
No. The Spa and Massage Website template keeps everything in the browser. Gift-card selections and the confirmed booking reference stay on the guest's device in localStorage, and no payment or form data leaves the browser. To accept deposits or receive bookings by email, you would connect the confirmation step to your own booking system or payment provider outside the template.

### What is included in the Spa and Massage Website template beyond the booking page?
The home page of the Spa and Massage Website template includes six priced treatments with durations, three therapist profiles, three bookable packages, an interactive gift-card preview, opening hours and a first-visit FAQ covering arrival guidance, pressure preferences, accessibility and cancellation terms. A dedicated booking page holds the four-step flow. The design uses warm porcelain, pale sage and deep spruce with Cormorant Garamond headlines and Manrope body copy.

### What should I change first when adapting the Spa and Massage Website template to my own studio?
Start with the four variables on the Spa and Massage Website template: BRAND, CITY, STREET and SPECIALTIES. Then rewrite the content file so treatment names, prices, durations, therapist profiles, packages and FAQ answers describe your real services. Replace the six photographs with your own treatment room, linens and therapist portraits, and check the booking flow on a phone before publishing.

### How do I build a spa and massage website with AI?
Copy the prompt from this page or run npx vibefather add spa-and-massage-website, replace [BRAND], [CITY], [STREET] and [SPECIALTIES] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Spa and Massage Website demo?
The Neighborhood spa in Portland case was built by Kimi K3.1 Pro in Kimi Code; the Coastal spa in Monterey case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Spa and Massage Website template use?
Spa and Massage Website is a 2-page site built with React, Motion and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Spa and Massage Website template for a client or a business?
The Spa and Massage Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Spa and Massage Website template work on mobile?
Yes. Every Spa and Massage Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Spa and Massage Website on VibeFather](https://vibefather.ai/templates/spa-and-massage-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
