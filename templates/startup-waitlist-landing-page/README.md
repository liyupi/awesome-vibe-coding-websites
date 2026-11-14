# Startup Waitlist Landing Page

> Minimal waitlist page with an email capture, a queue-position counter, a referral mock and a short FAQ.

<a href="https://vibefather.ai/templates/startup-waitlist-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/startup-waitlist-landing-page/04a22c24-520c-4205-a49d-3da0206f5a85/webp.908ebaa468.webp" width="100%" alt="Startup Waitlist Landing Page — Waitlist Page with Referral Counter built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/startup-waitlist-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A single-page waitlist for a product about to launch: an oversized headline over a quietly generative code-drawn background, an email capture with inline validation, and — the hook — a confirmation that shows your queue position with a copyable referral link that visibly skips you ahead when shared (an honest client-side mock). Below sit three benefit cards with one concrete line each, a beta user's quote with a small sample-data stats row, and five FAQ answers covering launch timing and referral mechanics. The default content waits for an invented pairing product for solo developers, but the page suits any early launch: change the brand, the one-line description, the launch season and the queue figure and everything still reads true. The look is bold minimal: a near-black canvas, one electric lime accent, an oversized variable grotesque headline, an IBM Plex Mono queue number and referral link, and a dot-field background generated in canvas that drifts behind the type. Nothing is submitted anywhere — the spot, position and referrals live in the browser. To adapt it, swap the variables and rewrite the copy in one content file.

| | |
|---|---|
| Category | [Landing Pages & Product Launches](../../README.md#landing-pages--product-launches) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Brutalist](../../styles/brutalist.md), [Minimal](../../styles/minimal.md), [Dark](../../styles/dark.md) |
| Effects | Generative / Canvas, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/startup-waitlist-landing-page?case=04a22c24-520c-4205-a49d-3da0206f5a85&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/startup-waitlist-landing-page/04a22c24-520c-4205-a49d-3da0206f5a85/shot_desktop.ceec09c9c5.webp" width="100%" alt="Startup Waitlist Landing Page — Dev pairing tool waitlist, built by GLM-5.3 in ZCode"></a><br>
<b>Dev pairing tool waitlist</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/startup-waitlist-landing-page?case=04a22c24-520c-4205-a49d-3da0206f5a85&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/startup-waitlist-landing-page?case=25bc60c6-da2f-46f8-a17b-df524aba8514&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/startup-waitlist-landing-page/25bc60c6-da2f-46f8-a17b-df524aba8514/shot_desktop.75cd790a66.webp" width="100%" alt="Startup Waitlist Landing Page — Code review tool waitlist, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Code review tool waitlist</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/startup-waitlist-landing-page?case=25bc60c6-da2f-46f8-a17b-df524aba8514&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Product name | Tandem |
| `[WHAT]` | What it does | pair-programming sessions for solo developers |
| `[LAUNCH]` | Launch window | this winter |
| `[WAITLIST]` | Queue figure | 2,417 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add startup-waitlist-landing-page` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- An indie developer launching a side project: set BRAND to your app name, WHAT to one concrete line, and LAUNCH to the season you plan to ship.
- A newsletter writer building an audience: keep the email capture, rewrite the three benefit cards as what each issue covers, and swap the queue figure for your subscriber sample.
- A small studio teasing a new service: set WHAT to the service, replace the beta quote with a client line, and rewrite the FAQ around timing and referrals.
- A community or event organizer: use the referral link as an invite mechanic, change the confirmation copy to mention your event, and adjust the five FAQ answers.

## FAQ

### How does the queue position and referral link on the Startup Waitlist Landing Page actually work?
The Startup Waitlist Landing Page generates a stable four-digit queue position from a hash of the visitor's email and a matching six-character referral code, then stores both in the browser. Copying and sharing the referral link bumps the position in the same browser as a visible demo. Nothing is submitted anywhere, so the mechanic is an honest client-side mock rather than a real waitlist backend.

### What do I need to change to use this waitlist page for my own product launch?
Set the four variables in the content file: WHAT for the one-line product description, BRAND for the product name, LAUNCH for the season phrase and WAITLIST for the sample queue figure. Then rewrite the headline, the three benefit cards, the beta quote, the stats row and the five FAQ answers to match. The layout, colors and motion stay as they are.

### Can the Startup Waitlist Landing Page collect real email addresses?
No. The Startup Waitlist Landing Page has no backend, no server code and no external APIs, so the email capture validates the address in the browser and then shows the confirmation card. To collect real signups you would connect the form to your own mailing list or form service. The template ships as a static front end you can wire to whatever you use.

### What is the dot-field background on the Startup Waitlist Landing Page and can I turn it off?
The background is a canvas field of about 140 dots drifting on a slow noise motion; dots near the cursor brighten toward the lime accent and repel gently. It pauses when the tab is hidden and renders a single static frame for visitors who prefer reduced motion. To remove it, drop the background component from the page and keep the flat near-black canvas.

### Is the Startup Waitlist Landing Page free to use and can I change the colors and fonts?
The Startup Waitlist Landing Page is a free template: its prompt and DESIGN.md are free for personal, non-commercial use, and commercial or client work needs Pro. The design uses a near-black canvas, one electric lime accent, an Archivo display face and IBM Plex Mono for the queue number and links. All of it is set in Tailwind theme colors and font families, so you can change them in one place.

### How do I build a startup waitlist landing page with AI?
Copy the prompt from this page or run npx vibefather add startup-waitlist-landing-page, replace [BRAND], [WHAT], [LAUNCH] and [WAITLIST] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Startup Waitlist Landing Page demo?
The Dev pairing tool waitlist case was built by GLM-5.3 in ZCode; the Code review tool waitlist case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Startup Waitlist Landing Page template use?
Startup Waitlist Landing Page is a single-page site built with React, Motion and Tailwind CSS, with generative / canvas and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Startup Waitlist Landing Page template for a client or a business?
The Startup Waitlist Landing Page prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Startup Waitlist Landing Page template work on mobile?
Yes. Every Startup Waitlist Landing Page build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Landing Pages & Product Launches](../../README.md#landing-pages--product-launches) · [Startup Waitlist Landing Page on VibeFather](https://vibefather.ai/templates/startup-waitlist-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
