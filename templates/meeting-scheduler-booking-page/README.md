# Meeting Scheduler Booking Page

> A polished personal booking flow with time zone-aware slots, visitor details, and calendar downloads.

<a href="https://vibefather.ai/templates/meeting-scheduler-booking-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/meeting-scheduler-booking-page/e5638a86-5e2d-4203-9074-9d5e89ecb0a9/webp.6ed9be8b6e.webp" width="100%" alt="Meeting Scheduler Booking Page — Personal Booking Page with Time Zone Calendar built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/meeting-scheduler-booking-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Meeting Scheduler Booking Page is a complete, client-side scheduling flow for an independent consultant, coach, freelancer, or small studio. The page pairs a calm host introduction with a functional booking workspace, so visitors can move from choosing a session to downloading a calendar event without creating an account.

Three meeting cards establish clear durations and expectations. The date step combines a month calendar with only the days that have usable openings, a scrollable slot list, and a time zone selector. Availability is generated in the host's time zone, then rendered for the visitor, including daylight-saving offsets. The details step keeps the selected meeting, date, and time visible while validating the visitor's name, email, and optional notes. Confirmation provides a real downloadable ICS file rather than a decorative calendar button.

The visual direction is warm and precise: parchment surroundings, a deep pine host panel, citron selection states, serif headlines, and compact sans-serif controls. The working scheduler is the hero visual, with layered calendar cells, availability dots, progress states, and restrained transitions providing the detail usually supplied by a product screenshot. On mobile, the host panel becomes compact, progress turns horizontal, and the calendar and slots stack without shrinking tap targets.

Adapt the brand, host, audience, three meeting names, and host time zone through the variables. Meeting descriptions and supporting copy should be rewritten to fit those values while preserving the layout. Availability and the latest confirmation remain local to the browser; no backend, external calendar connection, or real message delivery is implied.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [App](../../types/app.md) |
| Style | [Minimal](../../styles/minimal.md) |
| Effects | Page Transitions, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + lucide-react + date-fns + date-fns-tz |
| Pages | 1 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/meeting-scheduler-booking-page?case=e5638a86-5e2d-4203-9074-9d5e89ecb0a9&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/meeting-scheduler-booking-page/e5638a86-5e2d-4203-9074-9d5e89ecb0a9/shot_desktop.be117455ef.webp" width="100%" alt="Meeting Scheduler Booking Page — Product strategy sessions, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Product strategy sessions</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/meeting-scheduler-booking-page?case=e5638a86-5e2d-4203-9074-9d5e89ecb0a9&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/meeting-scheduler-booking-page?case=9d0fcd64-84d9-403b-be65-806398bb4535&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/meeting-scheduler-booking-page/9d0fcd64-84d9-403b-be65-806398bb4535/shot_desktop.09c82ef7ea.webp" width="100%" alt="Meeting Scheduler Booking Page — Career coaching sessions, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Career coaching sessions</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/meeting-scheduler-booking-page?case=9d0fcd64-84d9-403b-be65-806398bb4535&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Brand | Moss & Minute |
| `[HOST_NAME]` | Host name | Mara Voss |
| `[HOST_ROLE]` | Host role | Independent product strategist |
| `[AUDIENCE]` | Audience | Independent founders and small product teams |
| `[MEETING_TYPES]` | Meeting types | Discovery call \| Project consultation \| Strategy intensive |
| `[HOST_TIME_ZONE]` | Host time zone | America/New_York |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add meeting-scheduler-booking-page` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A solo career coach: set HOST_NAME and HOST_ROLE to your own details, rename the three MEETING_TYPES to intro call, coaching session and deep-dive, and set HOST_TIME_ZONE to your city.
- A small design studio: set BRAND to the studio name, rewrite AUDIENCE for the clients you want, and adjust the meeting descriptions to cover discovery, scoping and project reviews.
- A freelance developer: keep the three durations but rename MEETING_TYPES to fit technical calls, and update the host introduction so visitors know what you build and who you help.
- A startup founder taking advisor calls: set HOST_TIME_ZONE to your base, trim the meeting descriptions to short outcome-focused lines, and point the confirmation copy at your own follow-up process.

## FAQ

### How do time zones work on the Meeting Scheduler Booking Page template?
The Meeting Scheduler Booking Page template defines availability in the host's IANA time zone set by HOST_TIME_ZONE, then converts each slot for the visitor using date-fns and date-fns-tz, including daylight-saving offsets. Visitors pick from at least eight common zones plus their auto-detected one, and the header shows the host's live local time. No fixed hour offsets are hard-coded.

### Does the Meeting Scheduler Booking Page template actually send calendar invites or emails?
No. The Meeting Scheduler Booking Page template is fully client-side: availability is sample data, the latest confirmed booking and chosen time zone are stored in the browser's localStorage, and nothing leaves the page. The confirmation does produce a real downloadable ICS file, but no email is sent and no external calendar is connected. Treat it as a front-end booking flow you can wire to a backend later.

### What should I change first when adapting the Meeting Scheduler Booking Page for my own practice?
Start with the variables: BRAND, HOST_NAME, HOST_ROLE, AUDIENCE, MEETING_TYPES and HOST_TIME_ZONE. The three meeting names map to 20, 45 and 60 minutes, so rename them and rewrite each description to match. Then update the host introduction and supporting line, and set HOST_TIME_ZONE to your real IANA zone so availability is generated correctly for your visitors.

### Is the Meeting Scheduler Booking Page template free to use?
The Meeting Scheduler Booking Page template is free. Its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial or client work needs Pro, which also gives you the full prompt and the demo source code. The template page shows the brief, stack and variables publicly either way.

### Can I add a real backend or calendar connection to the Meeting Scheduler Booking Page?
The Meeting Scheduler Booking Page template ships with client-side sample availability and localStorage only, so real bookings need your own backend or calendar service added on top. The four booking states, host-to-visitor time conversion and ICS generation are already built, which gives you a clear place to send confirmed bookings once you connect a server.

### How do I build a meeting scheduler booking page with AI?
Copy the prompt from this page or run npx vibefather add meeting-scheduler-booking-page, replace [BRAND], [HOST_NAME], [HOST_ROLE] and [AUDIENCE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Meeting Scheduler Booking Page demo?
The Product strategy sessions case was built by Kimi K3.1 Pro in Kimi Code; the Career coaching sessions case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Meeting Scheduler Booking Page template use?
Meeting Scheduler Booking Page is a single-page site built with Tailwind CSS and React, with page transitions and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Meeting Scheduler Booking Page template for a client or a business?
The Meeting Scheduler Booking Page prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Meeting Scheduler Booking Page template work on mobile?
Yes. Every Meeting Scheduler Booking Page build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Meeting Scheduler Booking Page on VibeFather](https://vibefather.ai/templates/meeting-scheduler-booking-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
