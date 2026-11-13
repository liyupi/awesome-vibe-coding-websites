# Dance Studio Website

> Dance studio site with class filters, instructor profiles, a recital countdown and free-trial booking.

<a href="https://vibefather.ai/templates/dance-studio-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/dance-studio-website/c35c18f8-548e-436f-b6b3-fd7bbc152715/webp.66979b99f6.webp" width="100%" alt="Dance Studio Website — Dance Studio Website with Class Filters built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/dance-studio-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A two-page website for a dance studio that needs to fill classes without hiding the practical details. The home page pairs a wide, stage-lit dance photograph with a direct free-class invitation, then introduces three dance programs, three instructor profiles, the next recital, class passes and a trial-booking form. A second page presents 24 weekly classes with combined style, age and level filters, clear availability, and a detail drawer that leads back to the trial form.

The default content follows an invented neighborhood studio teaching hip-hop, contemporary and jazz to children, teens and adults. Class names, times, capacities, prices, instructor biographies and first-visit answers are specific enough to feel like an operating business, but every person and detail is fictional. The three instructor portraits are generated placeholders for an invented team, ready to be replaced with a real studio's photography.

Visually, the template uses deep aubergine, warm paper, coral and soft lilac, with oversized uppercase headlines and a rhythmic moving program rail. Photographs share one editorial treatment: dark studio floors, coral rim light and gentle lilac fill. Large images anchor the hero and recital sections rather than leaving the first screen to typography alone.

Useful interactions do the selling. Filters combine with AND logic and sync to the URL, the recital timer counts down to a configurable local date, pass cards feed the booking form, and valid trial reservations produce a printable confirmation saved only in the browser. Everything works as static files with local assets and reduced-motion support.

To adapt it, change the studio name, city, dance styles, audience and recital date. All schedule entries, prices, biographies and copy live in one content file, so a builder can rewrite them for the new studio while preserving the layout, motion and booking flow.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Playful](../../styles/playful.md), [Editorial](../../styles/editorial.md), [Dark](../../styles/dark.md) |
| Effects | Text Animation, Marquee, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 2 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/dance-studio-website?case=c35c18f8-548e-436f-b6b3-fd7bbc152715&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/dance-studio-website/c35c18f8-548e-436f-b6b3-fd7bbc152715/shot_desktop.ecf31bec48.webp" width="100%" alt="Dance Studio Website — Neighborhood dance studio, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Neighborhood dance studio</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/dance-studio-website?case=c35c18f8-548e-436f-b6b3-fd7bbc152715&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/dance-studio-website?case=23d6d009-9d81-486b-ba29-ee7a32de3b74&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/dance-studio-website/23d6d009-9d81-486b-ba29-ee7a32de3b74/shot_desktop.2ed26b7759.webp" width="100%" alt="Dance Studio Website — Community movement studio, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Community movement studio</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/dance-studio-website?case=23d6d009-9d81-486b-ba29-ee7a32de3b74&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Studio name | Offbeat Dance Assembly |
| `[CITY]` | Studio city | Austin, Texas |
| `[STYLES]` | Three dance styles | Hip-Hop, Contemporary, Jazz |
| `[AUDIENCE]` | Who the studio teaches | dancers ages 7 and up, from complete beginners to experienced movers |
| `[RECITAL_DATE]` | Next recital date and time | 2027-06-12T19:00:00-05:00 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add dance-studio-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A neighborhood ballet school: set BRAND and CITY, replace the three programs with ballet, pointe and creative movement, and point RECITAL_DATE at your spring showcase.
- A teen street-dance collective: keep the dark aubergine look, set STYLES to breaking, popping and house, and rewrite the instructor profiles for your crew.
- An adult beginner studio: set AUDIENCE to adults returning to dance, adjust prices and passes, and keep the 18+ timetable band full.
- A children's movement program: set AUDIENCE to ages 7 to 12, simplify the trial form, and replace the instructor portraits with your teaching team.

## FAQ

### How does the class timetable filtering work on the Dance Studio Website?
The classes page lists 24 weekly sessions and combines style, age and level filters with AND logic, so choosing Hip-Hop plus 7-12 plus Beginner narrows to classes that match all three. Filter state syncs to the URL, so a parent can bookmark or share a filtered timetable. Each class row shows time, instructor and available places, and a detail drawer links straight to the free-trial form.

### How do I change the recital date and studio details in the Dance Studio Website template?
The Dance Studio Website template uses five variables: BRAND, CITY, STYLES, AUDIENCE and RECITAL_DATE. Set BRAND to your studio name and CITY to your location, list exactly three dance styles in STYLES, describe who you teach in AUDIENCE, and give RECITAL_DATE as an ISO datetime with a time-zone offset. The countdown, page titles, contact email and reservation references all update from those values.

### What does the free-trial booking flow on the Dance Studio Website actually do?
The Dance Studio Website template validates the trial form, lets pass cards preselect a class pass, and produces a printable confirmation with a reservation reference. The confirmation is saved only in the visitor's browser through local storage, so nothing is sent to a server. To receive real bookings you connect the form to your own booking or email service after generating the site.

### Can I change the dance styles on the Dance Studio Website template to ballet, salsa or tap?
Yes. The STYLES variable takes exactly three comma-separated style names, and the template expects you to rewrite the three program cards, all 24 session names and descriptions, instructor specialties, filter options and FAQ answers for those styles. The schedule structure, three age bands and filter logic stay the same, so the timetable still works with the new styles.

### Is the Dance Studio Website template free, and what do I get with Pro?
The Dance Studio Website template is free. Its prompt and the DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial or client work needs Pro, which also gives you the full prompt for Pro templates and the source code of the demos. You can preview the live demos built with Kimi K3.1 Pro and DeepSeek V4.1 Flash before starting.

### How do I build a dance studio website with AI?
Copy the prompt from this page or run npx vibefather add dance-studio-website, replace [BRAND], [CITY], [STYLES] and [AUDIENCE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Dance Studio Website demo?
The Neighborhood dance studio case was built by Kimi K3.1 Pro in Kimi Code; the Community movement studio case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Dance Studio Website template use?
Dance Studio Website is a 2-page site built with Tailwind CSS, Motion and React, with text animation, marquee and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Dance Studio Website template for a client or a business?
The Dance Studio Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Dance Studio Website template work on mobile?
Yes. Every Dance Studio Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Dance Studio Website on VibeFather](https://vibefather.ai/templates/dance-studio-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
