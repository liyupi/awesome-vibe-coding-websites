# Escape Room Website

> Cinematic escape room site with room cards, slot booking and team packages — all client-side.

<a href="https://vibefather.ai/templates/escape-room-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/escape-room-website/0dca018b-154d-45ee-b2a6-d84549f501f9/webp.9801e098f4.webp" width="100%" alt="Escape Room Website — Escape Rooms with Slot Booking built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/escape-room-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

This template builds a cinematic, single-page site for an escape room venue: near-black textured backgrounds, one glowing amber accent, and film-noir typography with wide letter spacing that sets the mood before a single word is read. The hero is a full-bleed photograph of a vault-like room lit by a single practical bulb, the brand name in tall tracked caps over a subtle glow, and slow dust motes drifting through the beam. It suits any business that sells atmosphere — escape rooms, ghost tours, mystery dinners, immersive theater — especially owners who want bookings without running a backend. Below the hero, four room cards each show a key prop photographed in the same noir light, with theme names, difficulty as one-to-five lock icons, player counts, one-line teasers and per-player pricing. A booking panel follows with sample weekday chips, evening time slots and a party-size stepper; the hold saves to the browser and says so honestly. A team-building section offers three invented package tiers around a photo of the briefing lounge, and a quiet accordion answers the questions first-timers ask. Everything is client-side: React and Tailwind under Motion, fonts self-hosted through Fontsource, photographs bundled with the project. Swap the brand, city, flagship room and rate through four variables and the copy rewrites itself from one content file. Reveals are slow, the amber glow pulses gently, and prefers-reduced-motion returns a fully static page. Six matching photographs come with the template, generated as one consistent shoot — dark rooms, a single light source, no faces, no readable text.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Dark](../../styles/dark.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/escape-room-website?case=0dca018b-154d-45ee-b2a6-d84549f501f9&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/escape-room-website/0dca018b-154d-45ee-b2a6-d84549f501f9/shot_desktop.2982d6e0eb.webp" width="100%" alt="Escape Room Website — Downtown escape rooms, built by GLM-5.3 in ZCode"></a><br>
<b>Downtown escape rooms</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/escape-room-website?case=0dca018b-154d-45ee-b2a6-d84549f501f9&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/escape-room-website?case=79e666fc-c903-4680-8325-c132a4026339&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/escape-room-website/79e666fc-c903-4680-8325-c132a4026339/shot_desktop.1ecc6e6ce4.webp" width="100%" alt="Escape Room Website — Ghost tour company, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Ghost tour company</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/escape-room-website?case=79e666fc-c903-4680-8325-c132a4026339&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Venue name | Vault Nine |
| `[CITY]` | City | Portland, Oregon |
| `[SIGNATURE_ROOM]` | Flagship room | The Last Signal |
| `[RATE]` | Per-player rate | $38 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add escape-room-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A ghost tour operator: set BRAND and CITY to your route, rename the four room cards after your stops, and swap the lock difficulty for a scare rating in the content file.
- A mystery dinner company: keep the noir hero and booking panel, rewrite the room cards as dinner themes, and turn the team-building packages into private party tiers.
- A small immersive theater: set SIGNATURE_ROOM to your current production, replace the key-prop photographs with set shots, and use the slot grid for showtimes.
- A corporate team-night organizer: keep the briefing lounge photo, rewrite the three packages around group sizes, and point the booking hold at your phone number.

## FAQ

### How do I change the rooms, prices and city in the Escape Room Website template?
The Escape Room Website template keeps every string in one content file. Set the four variables — BRAND, CITY, SIGNATURE_ROOM and RATE — and the wordmark, hero eyebrow, room cards, booking total and team-building intro rewrite themselves. Room names, lock difficulty, player counts, teasers, day chips, time slots, packages and FAQ answers also live in that file, so you edit copy there rather than in the layout.

### Does the booking panel in the Escape Room Website template take real reservations?
No. The booking panel on the Escape Room Website template holds a slot in the visitor's browser only. It saves room, day, slot and party size locally under the brand name and labels the hold honestly, so nothing reaches a server and no payment is taken. To take real reservations, point the confirmed hold at your own booking system or add a phone number and email for manual follow-up.

### What do I need to change first in the Escape Room Website template?
Start with the four variables in the content file: BRAND for the venue name, CITY for the hero eyebrow and footer address, SIGNATURE_ROOM for the flagship room that leads the cards and the default booking selection, and RATE for the per-player price used on every card and in the total. Then replace the six bundled photographs with your own rooms shot in the same single-light style.

### Can I use the Escape Room Website template for a ghost tour or mystery dinner instead?
Yes. The Escape Room Website template sells atmosphere rather than a specific format, so ghost tours, mystery dinners and immersive theater fit the same structure. Keep the hero photograph, the four card slots and the booking panel, then rewrite the room names, teasers, lock difficulty and time slots in the content file to match your events, and adjust the team-building packages to your group offering.

### Is the Escape Room Website template free, and how do I get the source code?
The Escape Room Website template is free. Its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0, and the live demos built by GLM-5.3 in ZCode and DeepSeek V4.1 Flash in DeepSeek Harness are public. Commercial or client work needs Pro, which also brings the full prompt and the demo source code. You can add the template to a project with npx vibefather add escape-room-website.

### How do I build an escape room website with AI?
Copy the prompt from this page or run npx vibefather add escape-room-website, replace [BRAND], [CITY], [SIGNATURE_ROOM] and [RATE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Escape Room Website demo?
The Downtown escape rooms case was built by GLM-5.3 in ZCode; the Ghost tour company case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Escape Room Website template use?
Escape Room Website is a single-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Escape Room Website template for a client or a business?
The Escape Room Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Escape Room Website template work on mobile?
Yes. Every Escape Room Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Escape Room Website on VibeFather](https://vibefather.ai/templates/escape-room-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
