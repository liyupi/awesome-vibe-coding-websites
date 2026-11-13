# Wedding Invitation and RSVP Website

> Single-page wedding invite with a live countdown, story timeline, day schedule, guest logistics and a client-side RSVP.

<a href="https://vibefather.ai/templates/wedding-invitation-and-rsvp-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/wedding-invitation-and-rsvp-website/492cbcfb-25b1-46b8-b13b-8d333717a4f0/webp.bcde51bbf0.webp" width="100%" alt="Wedding Invitation and RSVP Website — Wedding Invite Site with RSVP built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/wedding-invitation-and-rsvp-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [DESIGN.md](DESIGN.md)

A single-page wedding invitation site: the couple's names in an elegant serif over an ivory hero with a live countdown, a four-chapter love story, the schedule of the day as a vertical timeline, travel and stay notes for guests, an RSVP form with meal choice and party size, a first-timer FAQ and registry placeholder cards. The default content follows an invented couple marrying at a barn estate in Hudson, but the structure suits any wedding: change the couple, venue, city and date and every section still reads true — the countdown, hashtag and story all derive from them. The RSVP captures attending, party size, meal choice, dietary notes and one song request, then saves a thank-you card in the browser with a change-your-answer link — no backend, nothing submitted. The palette is ivory and warm paper with sage and deep olive accents and one blush tone for hearts and highlights; Gilda Display sets the names and headings in a calm high-contrast serif, Jost the body, both self-hosted. Botanical details, chapter markers, the venue sketch and registry cards are drawn in SVG; photography shows the venue, florals, stationery and table settings with no faces anywhere. To adapt it, swap the variables and rewrite the copy in one content file; the schedule, hotels, FAQ and meals all read from it.

| | |
|---|---|
| Category | [Events & Communities](../../README.md#events--communities) |
| Site type | [Event](../../types/event.md) |
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
<a href="https://vibefather.ai/templates/wedding-invitation-and-rsvp-website?case=492cbcfb-25b1-46b8-b13b-8d333717a4f0&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/wedding-invitation-and-rsvp-website/492cbcfb-25b1-46b8-b13b-8d333717a4f0/shot_desktop.7c506955a3.webp" width="100%" alt="Wedding Invitation and RSVP Website — Elena and Marcus in Hudson, built by GLM-5.3 in ZCode"></a><br>
<b>Elena and Marcus in Hudson</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/wedding-invitation-and-rsvp-website?case=492cbcfb-25b1-46b8-b13b-8d333717a4f0&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/wedding-invitation-and-rsvp-website?case=7825d3e3-24ac-46a4-b68f-8efec5cb4629&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/wedding-invitation-and-rsvp-website/7825d3e3-24ac-46a4-b68f-8efec5cb4629/shot_desktop.b8dab4deb9.webp" width="100%" alt="Wedding Invitation and RSVP Website — Priya and James in Asheville, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Priya and James in Asheville</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/wedding-invitation-and-rsvp-website?case=7825d3e3-24ac-46a4-b68f-8efec5cb4629&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | The couple | Elena & Marcus |
| `[VENUE]` | Venue | Hollowbrook Barn |
| `[CITY]` | City | Hudson, New York |
| `[DATE]` | Wedding date | June 12, 2027 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add wedding-invitation-and-rsvp-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A couple marrying at a city hotel: set BRAND to your names, VENUE to the hotel, CITY to the town and DATE to your day, then rewrite the travel notes for public transport.
- An elopement or small garden wedding: keep the hero and countdown, shorten the story to two chapters and replace hotel cards with a single note on where to meet.
- A destination wedding abroad: change CITY and VENUE, rewrite the travel section with flight and transfer details, and adjust the FAQ for passports and local customs.
- A wedding planner's client gift: set BRAND and VENUE per couple, swap the registry cards for a gift note and point the RSVP at the planner's own form service.

## FAQ

### How does the RSVP form on the Wedding Invitation and RSVP Website work without a backend?
The RSVP form on the Wedding Invitation and RSVP Website captures attending, party size, meal choice, dietary notes and one song request, then saves a thank-you card in the guest's browser using localStorage. Nothing is submitted anywhere, so the couple never receives the answers automatically. To collect responses you would connect the form to a form service or mailing list, or ask guests to send their answers directly.

### How do I change the couple's names, venue, city and date on the wedding invitation template?
Set the BRAND, VENUE, CITY and DATE variables in the Wedding Invitation and RSVP Website template. BRAND is the couple written as Name & Name, VENUE is the venue name, CITY is the town and DATE is the full future wedding date. The countdown, hashtag, couple initials, hero line and story all derive from these values, so every section updates together. Rewrite the surrounding copy in the content file so the tone matches your real wedding.

### Can I use the Wedding Invitation and RSVP Website template for free?
The Wedding Invitation and RSVP Website template is free. Its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0, which suits a couple building their own invitation. Commercial and client use needs Pro. Pro templates show the brief, stack and variables publicly and the full prompt to Pro members, and source code of the demos comes with Pro.

### What sections and guest information does the wedding invitation template include?
The Wedding Invitation and RSVP Website template is one page with a hero and live countdown, a four-chapter love story, the day schedule as a vertical timeline, travel and stay notes with hotel cards, an RSVP form with meal choice and party size, a guest FAQ and registry placeholder cards. Guests can find where, when, what to wear, where to sleep and how to say yes from a phone in a few minutes.

### How do I host the wedding invitation website and share it with guests?
The Wedding Invitation and RSVP Website template builds to static files in a dist folder with no backend or external APIs, so any static host works. Run the build, upload the output and share the link in your group chats. The site is in English and designed mobile-first, since most guests open the invitation from a phone. Check the countdown and RSVP on a small screen before sending it out.

### How do I build a wedding invitation and RSVP website with AI?
Copy the prompt from this page or run npx vibefather add wedding-invitation-and-rsvp-website, replace [BRAND], [VENUE], [CITY] and [DATE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Wedding Invitation and RSVP Website demo?
The Elena and Marcus in Hudson case was built by GLM-5.3 in ZCode; the Priya and James in Asheville case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Wedding Invitation and RSVP Website template use?
Wedding Invitation and RSVP Website is a single-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Wedding Invitation and RSVP Website template for a client or a business?
The Wedding Invitation and RSVP Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Wedding Invitation and RSVP Website template work on mobile?
Yes. Every Wedding Invitation and RSVP Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Events & Communities](../../README.md#events--communities) · [Wedding Invitation and RSVP Website on VibeFather](https://vibefather.ai/templates/wedding-invitation-and-rsvp-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
