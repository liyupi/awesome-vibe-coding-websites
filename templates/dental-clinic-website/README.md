# Dental Clinic Website

> A calm two-page clinic site with up-front price ranges, monogram team cards and a client-side booking form.

<a href="https://vibefather.ai/templates/dental-clinic-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/dental-clinic-website/51604e9b-9cd3-431d-bce2-e9793afc1733/webp.c12022c38d.webp" width="100%" alt="Dental Clinic Website — Dental Clinic Website with Booking Form built by Claude Opus 5.5 and Claude Sonnet 5.5"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/dental-clinic-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Brightwell is a two-page website for a local health practice that wants to look like a place people already trust. The default build is Wrenfield Dental, an invented family and cosmetic dental clinic in the invented town of Calder Springs. The home page carries the full story: a dismissible emergency banner, a hero with a live open-now card and the next free slot, a reassurance strip, an $89 new-patient offer, six treatment cards with price ranges, a photo gallery of the clinic interior, the team, reviews, insurance and payment plans, a booking section with opening hours and a drawn map, and an FAQ about pain and cost. The second page lists sixteen treatments by category, each with a price range, duration, insurance note and a short what-to-expect list, followed by a clear aligner feature and a payment plan calculator.

It suits dentists, physiotherapists, vets, dermatology and optometry practices, and the freelancers and small studios who build sites for them. The look is calm and clinical but warm: a linen background, soft sage surfaces, deep teal text and one clay accent kept for booking buttons and the emergency banner. Headlines are set in Fraunces, body text in Figtree. The team appears as monogram avatars with credentials instead of portraits, and every photograph shows rooms and equipment, never patients.

The appointment request form works entirely in the browser. Visitors pick a reason, choose one of the next fourteen days and a time slot from chips grouped by morning, afternoon and evening, fill in their details and see a confirmation with a reference number. Nothing is sent anywhere. Links from the treatments page preselect the reason.

To adapt it, change the brand, town, practice type, new-patient offer and phone number, then edit the treatments, prices, hours and team in the single content file. Swap the interior photos for your own rooms.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + lucide-react |
| Pages | 2 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Cursor, [Claude Sonnet 5.5](../../models/claude-sonnet-5-5.md) in Cursor |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/dental-clinic-website?case=51604e9b-9cd3-431d-bce2-e9793afc1733&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/dental-clinic-website/51604e9b-9cd3-431d-bce2-e9793afc1733/shot_desktop.18145648a9.webp" width="100%" alt="Dental Clinic Website — Family dental clinic, built by Claude Opus 5.5 in Cursor"></a><br>
<b>Family dental clinic</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/dental-clinic-website?case=51604e9b-9cd3-431d-bce2-e9793afc1733&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/dental-clinic-website?case=8b62c9a4-ebd8-4a3f-8d3d-213698152b86&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/dental-clinic-website/8b62c9a4-ebd8-4a3f-8d3d-213698152b86/shot_desktop.bb580b4237.webp" width="100%" alt="Dental Clinic Website — Neighborhood vet clinic, built by Claude Sonnet 5.5 in Cursor"></a><br>
<b>Neighborhood vet clinic</b><br>
<sub>Built by <b>Claude Sonnet 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/dental-clinic-website?case=8b62c9a4-ebd8-4a3f-8d3d-213698152b86&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Practice name | Wrenfield Dental |
| `[CITY]` | Town or city | Calder Springs |
| `[SPECIALTY]` | Practice type | family & cosmetic dentistry |
| `[NEW_PATIENT_OFFER]` | New-patient offer | $89 first visit: exam, cleaning & X-rays |
| `[PHONE]` | Phone number | (320) 555-0142 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add dental-clinic-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A neighbourhood vet clinic: set SPECIALTY to veterinary care, rewrite the sixteen treatments for vaccinations, dental checks and surgery, and swap the clinic gallery for your consulting rooms and equipment.
- A physiotherapy practice: set BRAND and CITY, replace the treatment cards with sports injury, back pain and post-surgery rehab, and change the new-patient offer to a first assessment price.
- A dermatology clinic: keep the calm sage and teal palette, rewrite the team monogram cards with your consultants' credentials, and adjust the FAQ about pain and cost to skin treatments.
- A freelance web designer building for local health practices: duplicate the template per client, set BRAND, CITY, PHONE and SPECIALTY, and link the booking form to each clinic's own inbox.

## FAQ

### How does the booking form on the Dental Clinic Website template work without a server?
The appointment request form on the Dental Clinic Website template runs entirely in the browser. Visitors pick a reason, choose one of the next fourteen days, select a time slot from chips grouped by morning, afternoon and evening, enter their details and see a confirmation with a reference number. Nothing is sent anywhere, so you connect the form to your own booking system or inbox before going live.

### What can I change on the Dental Clinic Website template with the BRAND, CITY and SPECIALTY variables?
Setting BRAND changes the wordmark, page titles, footer, booking confirmation and FAQ answers, and the care plan name becomes your brand plus Care Plan. CITY appears in the hero eyebrow, titles, address block and footer. SPECIALTY drives the hero eyebrow, titles, treatments, prices, team credentials, FAQ answers and photos, so rewrite those for your practice type.

### Can I use the Dental Clinic Website template for a physiotherapy, veterinary or optometry practice?
The Dental Clinic Website template suits dentists, physiotherapists, vets, dermatology and optometry practices. Change SPECIALTY to your field, then rewrite the sixteen treatments, price ranges, durations, insurance notes and what-to-expect lists in the content file. Swap the interior photos for your own rooms and equipment, and adjust the team credentials and FAQ answers about pain and cost to match your services.

### Is the Dental Clinic Website template free, and what does Pro include?
The Dental Clinic Website template is free. Its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial and client use needs Pro, which also gives you the full prompt for Pro templates and the source code of the demos. The free template shows the brief, stack and variables publicly, and you can add it with npx vibefather add dental-clinic-website.

### What should I change first when adapting the Dental Clinic Website template to a real clinic?
Start with the variables: set BRAND, CITY, SPECIALTY, PHONE and NEW_PATIENT_OFFER so the offer, emergency banner, booking panel and footer show your real details. Then edit the treatments, prices, opening hours and team in the single content file, and replace the nine interior photos with your own rooms. Check the emergency banner and booking form on a phone before publishing.

### How do I build a dental clinic website with AI?
Copy the prompt from this page or run npx vibefather add dental-clinic-website, replace [BRAND], [CITY], [SPECIALTY] and [NEW_PATIENT_OFFER] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Dental Clinic Website demo?
The Family dental clinic case was built by Claude Opus 5.5 in Cursor; the Neighborhood vet clinic case was built by Claude Sonnet 5.5 in Cursor. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Dental Clinic Website template use?
Dental Clinic Website is a 2-page site built with React and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Dental Clinic Website template for a client or a business?
The Dental Clinic Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Dental Clinic Website template work on mobile?
Yes. Every Dental Clinic Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Dental Clinic Website on VibeFather](https://vibefather.ai/templates/dental-clinic-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
