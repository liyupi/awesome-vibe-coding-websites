# Coming Soon Page

> Single-screen coming-soon page with a drifting CSS aurora, live countdown, honest email capture and a three-feature teaser.

<a href="https://vibefather.ai/templates/coming-soon-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/coming-soon-page/d4f337b5-61a0-47e9-9121-fbb9cb4dd13f/webp.3f93b0b489.webp" width="100%" alt="Coming Soon Page — Coming Soon Page with Countdown built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/coming-soon-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A single 100vh coming-soon page: the brand mark and a one-line promise over a slowly drifting CSS aurora (layered gradients plus a fine grain overlay — no WebGL, no images); a live countdown to a [DATE] variable with tabular digits and a done-state that swaps to a launch line; an email capture with inline validation and an honest client-side-only saved state; and a teaser row of three features as icon chips. A micro-footer carries drawn-generic social chips (no platform logos) and the credit line. The look is quiet night launch: deep indigo ground, bone text, one warm apricot accent, centered and unhurried. Reduced motion freezes the aurora while the countdown keeps ticking. Everything runs locally; nothing leaves the browser.

| | |
|---|---|
| Category | [Landing Pages & Product Launches](../../README.md#landing-pages--product-launches) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Aurora](../../styles/aurora.md), [Dark](../../styles/dark.md) |
| Effects | Micro-interactions, Countdown |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/coming-soon-page?case=d4f337b5-61a0-47e9-9121-fbb9cb4dd13f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/coming-soon-page/d4f337b5-61a0-47e9-9121-fbb9cb4dd13f/shot_desktop.cb2e827ce6.webp" width="100%" alt="Coming Soon Page — Software product pre-launch, built by GLM-5.3 in ZCode"></a><br>
<b>Software product pre-launch</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/coming-soon-page?case=d4f337b5-61a0-47e9-9121-fbb9cb4dd13f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/coming-soon-page?case=ec9127f6-c0e8-4765-af09-42ba03954ce0&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/coming-soon-page/ec9127f6-c0e8-4765-af09-42ba03954ce0/shot_desktop.690bd6006e.webp" width="100%" alt="Coming Soon Page — Coffee subscription pre-launch, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Coffee subscription pre-launch</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/coming-soon-page?case=ec9127f6-c0e8-4765-af09-42ba03954ce0&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Brand name | Ferrywheel |
| `[PROMISE]` | Promise line | handoff notes that write themselves while you ship |
| `[DATE]` | Launch date | January 14, 2027 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add coming-soon-page` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- An indie software founder: set [BRAND] to your product name, [PROMISE] to the one thing it does, and [DATE] to your ship date.
- A coffee subscription roaster: keep the countdown, rewrite the three feature chips as roast, cadence and delivery, and swap the promise for your first box.
- A podcast or newsletter launch: point [BRAND] at the show, set [PROMISE] to the weekly promise, and change the footer chips to your channels.
- A local studio opening a new space: use [DATE] for opening day and rewrite the feature chips as what visitors will find inside.

## FAQ

### How does the countdown on the Coming Soon Page work, and what happens when the date arrives?
The Coming Soon Page reads the [DATE] variable and ticks a live countdown of days, hours, minutes and seconds every second, with tabular digits so the width never jumps. When the target time passes, the countdown row crossfades to a launch line and the warm aurora layer brightens one step. Set [DATE] to a future date written like a full calendar date; the date itself is never printed on the page.

### Where do the emails from the Coming Soon Page signup form actually go?
Nowhere. The Coming Soon Page email capture validates the address inline and saves it to the browser's local storage only, then shows a saved state that says the demo sends nothing. There is no backend, no server code and no external API. To collect real addresses you would connect the form to your own mailing list or form service after building the page.

### What do I need to change first to make the Coming Soon Page my own?
Change the three variables first: [BRAND] sets the wordmark, page title, footer and the hello@ email address; [PROMISE] sets the H1's second line and the feature chips; [DATE] sets the countdown target. Then rewrite the three feature chips and the micro-footer links in the single content file so the copy matches your launch.

### Is the aurora background on the Coming Soon Page an image or WebGL, and what about reduced motion?
The Coming Soon Page aurora is pure CSS: three layered radial gradients in warm apricot, deep blue and violet that drift on slow, staggered loops, plus a fine SVG-noise grain overlay. There are no images and no WebGL. Under prefers-reduced-motion the gradients stay visible but stop moving, and the countdown keeps ticking because the tick is information, not decoration.

### What does the Coming Soon Page template include beyond the countdown and email form?
The Coming Soon Page is one screen with a drawn brand mark and wordmark, a one-line promise, the live countdown, the email capture with inline validation and a saved state, a teaser row of three feature chips with icons, and a micro-footer with drawn social chips and the credit line. The whole page fits in a single 100dvh column at a 720px max width.

### How do I build a coming soon page with AI?
Copy the prompt from this page or run npx vibefather add coming-soon-page, replace [BRAND], [PROMISE] and [DATE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Coming Soon Page demo?
The Software product pre-launch case was built by GLM-5.3 in ZCode; the Coffee subscription pre-launch case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Coming Soon Page template use?
Coming Soon Page is a single-page site built with React, Motion and Tailwind CSS, with micro-interactions and countdown. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Coming Soon Page template for a client or a business?
The Coming Soon Page prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Coming Soon Page template work on mobile?
Yes. Every Coming Soon Page build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Landing Pages & Product Launches](../../README.md#landing-pages--product-launches) · [Coming Soon Page on VibeFather](https://vibefather.ai/templates/coming-soon-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
