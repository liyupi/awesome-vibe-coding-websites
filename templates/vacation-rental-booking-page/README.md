# Vacation Rental Booking Page

> Single-property cabin rental page with a price calendar, live price breakdown, area guide and a booking request form.

<a href="https://vibefather.ai/templates/vacation-rental-booking-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/vacation-rental-booking-page/b9852515-6c37-4f2d-b416-19ea62ce047e/webp.d97d9b98f0.webp" width="100%" alt="Vacation Rental Booking Page — Cabin Rental Page with Calendar built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/vacation-rental-booking-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A single-page website for one vacation rental: a dusk hero of the cabin with the sleeps-and-rate line, a gallery with lightbox, amenities in plain groups, a two-month availability calendar that shows the nightly price on every day and strikes through booked ranges, a price breakdown that recalculates live as dates and guests change, house rules in a calm voice, an area guide with a hand-drawn mini-map, and a booking request form that ends in a client-side confirmation with a reference number. The default content follows an invented cabin in the Catskills that sleeps eight, but the structure suits any single property — cabin, cottage, lake house, A-frame: change the name, region, sleep count and base rate and every section, including the calendar math, still holds. Nightly rates show weekday and weekend pricing with a weekly discount, cleaning and service fees itemize, and the whole booking flow lives in the browser. The palette is timber brown and moss green over warm cream; Bitter sets a hand-cut slab-serif headline voice, Work Sans the body, both self-hosted. To adapt it, swap the variables and rewrite the copy in one content file; rates, fees, rules and guide spots all read from it.

| | |
|---|---|
| Category | [Restaurants, Hotels & Travel](../../README.md#restaurants-hotels--travel) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/vacation-rental-booking-page?case=b9852515-6c37-4f2d-b416-19ea62ce047e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/vacation-rental-booking-page/b9852515-6c37-4f2d-b416-19ea62ce047e/shot_desktop.72ca70a964.webp" width="100%" alt="Vacation Rental Booking Page — Cabin in the Catskills, built by GLM-5.3 in ZCode"></a><br>
<b>Cabin in the Catskills</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/vacation-rental-booking-page?case=b9852515-6c37-4f2d-b416-19ea62ce047e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/vacation-rental-booking-page?case=96fe5090-cf70-41e3-ab86-52f4467b8cc8&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/vacation-rental-booking-page/96fe5090-cf70-41e3-ab86-52f4467b8cc8/shot_desktop.02f84e8a7e.webp" width="100%" alt="Vacation Rental Booking Page — House in the Blue Ridge, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>House in the Blue Ridge</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/vacation-rental-booking-page?case=96fe5090-cf70-41e3-ab86-52f4467b8cc8&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Property name | Hemlock Hollow Cabin |
| `[REGION]` | Region | the Catskills |
| `[SLEEPS]` | Sleeps | 8 |
| `[NIGHTLY]` | Weeknight rate | 185 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add vacation-rental-booking-page` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A lake house owner: set BRAND to your property name and REGION to the lake, raise SLEEPS for the bunk room, and swap the area guide spots for your marina, boat launch and nearest town.
- A couple renting one A-frame: lower SLEEPS to two or four, cut the family amenities to a short list, and rewrite the house rules for quiet weekends and no pets.
- A cottage agency: keep the booking form but point the confirmation copy at your enquiry inbox, and replace the guide spots with your own trail, bakery and swimming hole.
- A mountain lodge with weekly stays: set NIGHTLY higher, keep the weekly discount, and rewrite the price breakdown labels to name your cleaning and service fees.

## FAQ

### How does the price calendar work on the Vacation Rental Booking Page and where do the nightly rates come from?
The calendar shows two months at a time with a price printed on every available day. Weeknight rates come from the NIGHTLY variable; Friday and Saturday add 30. Booked ranges are struck through in rust so guests see real availability. Selecting a start and end date writes them into the booking store, and the price breakdown recalculates the total in the browser.

### How do I change the property name, region, sleep count and base rate in the Vacation Rental Booking Page template?
Set BRAND, REGION, SLEEPS and NIGHTLY in the content file, then rewrite the copy that names them: the hero line, the sleeping arrangement lines, the area guide and the footer. The calendar math, the guests stepper maximum and the booking reference initials all derive from those four variables, so changing them keeps every section consistent.

### Does the booking request form on the Vacation Rental Booking Page send real emails or take payments?
The booking request form confirms client-side with a reference number and stores the request in the browser under a key prefixed with the property slug. Nothing is submitted to a server and no payment is taken. To receive real requests you would connect the form to your own email service or booking tool after generating the site.

### Can I use the Vacation Rental Booking Page template for a lake house or cottage instead of a cabin?
The Vacation Rental Booking Page template suits any single property: cabin, cottage, lake house or A-frame. Change BRAND and REGION, set SLEEPS and NIGHTLY, and replace the gallery photos, amenities, house rules and area guide spots in the content file. The calendar, price breakdown and booking form keep working because they read from the same variables.

### What is included in the Vacation Rental Booking Page template and is the prompt free?
The Vacation Rental Booking Page template is a free single-page site with a dusk hero, gallery and lightbox, grouped amenities, a two-month price calendar, a live price breakdown, house rules, an area guide with a hand-drawn mini-map and a booking request form. Its prompt and DESIGN.md are free for personal, non-commercial use; commercial or client work needs Pro, which also includes the demo source code.

### How do I build a vacation rental booking page with AI?
Copy the prompt from this page or run npx vibefather add vacation-rental-booking-page, replace [BRAND], [REGION], [SLEEPS] and [NIGHTLY] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Vacation Rental Booking Page demo?
The Cabin in the Catskills case was built by GLM-5.3 in ZCode; the House in the Blue Ridge case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Vacation Rental Booking Page template use?
Vacation Rental Booking Page is a single-page site built with React, Motion and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Vacation Rental Booking Page template for a client or a business?
The Vacation Rental Booking Page prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Vacation Rental Booking Page template work on mobile?
Yes. Every Vacation Rental Booking Page build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Restaurants, Hotels & Travel](../../README.md#restaurants-hotels--travel) · [Vacation Rental Booking Page on VibeFather](https://vibefather.ai/templates/vacation-rental-booking-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
