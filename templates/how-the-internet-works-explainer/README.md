# How the Internet Works Explainer

> Follow one web request from laptop to server and back in seven scroll scenes, each with a hands-on control.

<a href="https://vibefather.ai/templates/how-the-internet-works-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/how-the-internet-works-explainer/21de6634-1fcc-4e2b-afdc-737b5e339799/webp.78696c4e26.webp" width="100%" alt="How the Internet Works Explainer — Scrollytelling Explainer with Packet Map built by Claude Opus 5.5, Claude Sonnet 5.5 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/how-the-internet-works-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

This is a long-form scrollytelling explainer that follows a single web request from the moment someone presses Enter until the page appears on their screen. Seven full-height scenes cover the address bar, the DNS lookup, the trip across routers, the TCP handshake, the TLS lock, the server's reply and the final render, followed by a fast replay of the whole round trip and a glossary. Each scene pairs a short reading column with a pinned diagram that changes as you scroll, and each diagram has exactly one control to play with: type a domain and watch the resolver chain answer, drag a distance slider and see the hop count and latency change, step through SYN, SYN-ACK and ACK yourself, flip between what an observer sees over HTTP and over HTTPS, raise packet loss to watch pieces get resent, or reload the page with a warm cache. A progress rail in the header shows which stage the packet is in, next to a running round-trip timer that updates when the controls change. The look is editorial and technical at the same time: a deep navy page, paper-toned reading cards set in a readable serif, monospace callouts for IP addresses, ports and headers, electric cyan for packets and amber for handshakes and the lock. Every diagram, including the abstract dotted network map, is drawn as inline SVG, so the build ships no photos. It suits teachers, course authors, developer advocates and anyone who wants to explain how a system works one step at a time. To adapt it, change the publisher, the headline, the example domain, the page path and the audience, and the copy and sample data get rewritten to match. The same structure also works for other how-it-works stories, such as payments, email delivery or a deploy pipeline.

| | |
|---|---|
| Category | [Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) |
| Site type | [Interactive Explainer](../../types/explainer.md) |
| Style | [Editorial](../../styles/editorial.md), [Dark](../../styles/dark.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + vanilla TypeScript + Tailwind CSS 3.4 + gsap + lucide |
| Pages | 1 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Claude Code, [Claude Sonnet 5.5](../../models/claude-sonnet-5-5.md) in Cursor, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/how-the-internet-works-explainer?case=21de6634-1fcc-4e2b-afdc-737b5e339799&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/how-the-internet-works-explainer/21de6634-1fcc-4e2b-afdc-737b5e339799/shot_desktop.2bb06ac656.webp" width="100%" alt="How the Internet Works Explainer — Loading a web page, built by Claude Opus 5.5 in Claude Code"></a><br>
<b>Loading a web page</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Claude Code · <a href="https://vibefather.ai/templates/how-the-internet-works-explainer?case=21de6634-1fcc-4e2b-afdc-737b5e339799&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/how-the-internet-works-explainer?case=52f411f9-da8c-475b-b65b-45ce35470384&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/how-the-internet-works-explainer/52f411f9-da8c-475b-b65b-45ce35470384/shot_desktop.85379ff973.webp" width="100%" alt="How the Internet Works Explainer — School computing lesson, built by Claude Sonnet 5.5 in Cursor"></a><br>
<b>School computing lesson</b><br>
<sub>Built by <b>Claude Sonnet 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/how-the-internet-works-explainer?case=52f411f9-da8c-475b-b65b-45ce35470384&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/how-the-internet-works-explainer?case=5426ad22-6680-4bfa-aabb-e00c834ae0d7&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/how-the-internet-works-explainer/5426ad22-6680-4bfa-aabb-e00c834ae0d7/shot_desktop.17ef0f82fe.webp" width="100%" alt="How the Internet Works Explainer — Loading a web page, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Loading a web page</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/how-the-internet-works-explainer?case=5426ad22-6680-4bfa-aabb-e00c834ae0d7&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Publisher or series name | Northbeam Primers |
| `[TOPIC]` | Explainer headline | How one web page reaches your laptop |
| `[SITE_DOMAIN]` | Example site being loaded | kettleandcrumb.example |
| `[PAGE_PATH]` | Page requested on that site | /recipes/rye-sourdough |
| `[AUDIENCE]` | Who the page is for | curious readers who use the web every day but have never seen what happens underneath |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add how-the-internet-works-explainer` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A school computing teacher: set BRAND to your department, AUDIENCE to secondary students, and simplify the glossary and beat copy to match the lesson.
- A developer advocate writing onboarding docs: keep the seven scenes, set TOPIC to your platform's request flow and point SITE_DOMAIN at a reserved demo host.
- A payments course author: reuse the scene structure for a card authorization, rewrite each beat and give every scene one control such as a decline toggle.
- An email deliverability explainer: set PAGE_PATH aside, retitle the stages for sending, relaying and inbox delivery, and keep the round-trip timer as total delivery time.

## FAQ

### What can I actually do in each scene of the How the Internet Works Explainer?
Each of the seven scenes pairs a short reading column with a pinned diagram and exactly one control. You can type a domain and watch the resolver chain answer, drag a distance slider to change hop count and latency, step through SYN, SYN-ACK and ACK, flip between what an observer sees over HTTP and HTTPS, raise packet loss to watch pieces get resent, or reload with a warm cache. A progress rail and round-trip timer update as you play.

### How do I change the example website and page path in the explainer?
Set SITE_DOMAIN and PAGE_PATH in the template variables. SITE_DOMAIN is the made-up site the reader visits and must end in a reserved name such as .example or .test so it can never point at a real site. PAGE_PATH is the page requested, and the mock page drawn on the laptop in the final scene shows content that fits that path. All copy and sample data are rewritten in the content file to match.

### Can I reuse the How the Internet Works Explainer structure to explain something other than a web request?
Yes. The How the Internet Works Explainer is built as seven full-height scenes, a fast replay and a glossary, and the same structure works for other how-it-works stories such as payments, email delivery or a deploy pipeline. Change BRAND, TOPIC and AUDIENCE, then rewrite the scene copy, the control labels and the sample data in the content file so each stage and its one hands-on control fit the new system.

### Is the How the Internet Works Explainer free to use, and what do I get with Pro?
The How the Internet Works Explainer is a free template. Its prompt and every DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial and client use needs Pro, and Pro members also get the full prompt and the source code of the demos. The brief, stack and variables are shown publicly on the page either way.

### What should a teacher change first before using the How the Internet Works Explainer in a lesson?
Start with AUDIENCE, because it sets the vocabulary, the analogies and how much jargon each reading beat uses. Then set BRAND and TOPIC for the lesson or course title, and pick a SITE_DOMAIN and PAGE_PATH that match something your students recognize. Check the glossary terms and the control labels afterwards, since those carry the most subject-specific wording.

### How do I build a how the internet works explainer with AI?
Copy the prompt from this page or run npx vibefather add how-the-internet-works-explainer, replace [BRAND], [TOPIC], [SITE_DOMAIN] and [PAGE_PATH] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the How the Internet Works Explainer demo?
The Loading a web page case was built by Claude Opus 5.5 in Claude Code; the School computing lesson case was built by Claude Sonnet 5.5 in Cursor; the Loading a web page case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the How the Internet Works Explainer template use?
How the Internet Works Explainer is a single-page site built with GSAP, Plain HTML and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the How the Internet Works Explainer template for a client or a business?
The How the Internet Works Explainer prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the How the Internet Works Explainer template work on mobile?
Yes. Every How the Internet Works Explainer build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) · [How the Internet Works Explainer on VibeFather](https://vibefather.ai/templates/how-the-internet-works-explainer?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
