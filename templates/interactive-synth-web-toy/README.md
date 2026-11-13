# Interactive Synth Web Toy

> A playable neon browser synth with a 16-step sequencer, live scope and patterns that share as a link.

<a href="https://vibefather.ai/templates/interactive-synth-web-toy?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/interactive-synth-web-toy/58b0d596-64c6-4ab4-8213-d577a8fe4c23/webp.05d1b4c4e6.webp" width="100%" alt="Interactive Synth Web Toy — Browser Synthesizer with 16-Step Sequencer built by Claude Opus 5.5 and Claude Sonnet 5.5"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/interactive-synth-web-toy?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

This template builds a one-page musical instrument that runs entirely in the browser. There is no landing page in front of it: the first screen is the panel itself, with a wide waveform scope on top, a strip of voice and transport controls in the middle, and a 16-step pattern grid above a 25-key keyboard. Visitors can press a key with a mouse, a finger or their computer keyboard and hear sound right away. Every sound is synthesized live with the Web Audio API, so there are no sample files to license or host, and the finished site is plain static files.

It suits developers who want a portfolio piece people will actually play, creators who want something fun to post, and teachers who need a quick way to show pitch, rhythm and waveforms to a class. The link is the main feature. Each edit rewrites the URL hash with the pattern, tempo, voice and tone, so a copied link opens exactly what was made, with no account and no database.

The look is a neon instrument on a deep violet-black chassis. Hot magenta and electric cyan run through the scope trace, the lit pads and the main buttons, and a third volt green arrives with the bass voice. Knobs and keys are drawn in CSS and SVG and respond to drag, touch and arrow keys. The sequencer uses a look-ahead clock, so timing holds steady, and reduced-motion users get a still trace.

To adapt it, change the name, the tagline, the voice names, the starter pattern names and the audience line. A classroom music lab and a late-night pocket synth both work without touching the layout. Starter patterns, grid notes and voices all live in one settings file, so you can retune or reshape them quickly.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [Interactive Toy](../../types/toy.md) |
| Style | [Playful](../../styles/playful.md), [Dark](../../styles/dark.md) |
| Effects | Drag & Physics, Micro-interactions, Web Audio |
| Stack | Vite 5 + vanilla TypeScript + Plain CSS + lucide |
| Pages | 1 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Claude Code, [Claude Sonnet 5.5](../../models/claude-sonnet-5-5.md) in Cursor |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/interactive-synth-web-toy?case=58b0d596-64c6-4ab4-8213-d577a8fe4c23&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/interactive-synth-web-toy/58b0d596-64c6-4ab4-8213-d577a8fe4c23/shot_desktop.06115fd807.webp" width="100%" alt="Interactive Synth Web Toy — Neon pocket synth, built by Claude Opus 5.5 in Claude Code"></a><br>
<b>Neon pocket synth</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Claude Code · <a href="https://vibefather.ai/templates/interactive-synth-web-toy?case=58b0d596-64c6-4ab4-8213-d577a8fe4c23&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/interactive-synth-web-toy?case=4a782699-beb9-44f3-9eea-f63df852fa40&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/interactive-synth-web-toy/4a782699-beb9-44f3-9eea-f63df852fa40/shot_desktop.23ebd8c0c3.webp" width="100%" alt="Interactive Synth Web Toy — Classroom music lab, built by Claude Sonnet 5.5 in Cursor"></a><br>
<b>Classroom music lab</b><br>
<sub>Built by <b>Claude Sonnet 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/interactive-synth-web-toy?case=4a782699-beb9-44f3-9eea-f63df852fa40&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Toy name | Moonbleep |
| `[TAGLINE]` | One-line tagline | Sixteen steps, three voices, one link to send a friend. |
| `[VOICE_NAMES]` | Three voice names | Velvet Pad, Pixel Lead, Gravel Bass |
| `[PATTERN_NAMES]` | Three starter pattern names | Night Tram, Tin Rain, Slow Comet |
| `[AUDIENCE]` | Who it is for | people who have never touched a synth |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add interactive-synth-web-toy` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A classroom music lab: set BRAND to your school or course, name the voices for the lesson and use the classroom music lab demo as the starting point for showing pitch and rhythm.
- A developer portfolio piece: set BRAND to your own name, keep the tagline short and link the page from your project list so visitors can play something you built.
- A late-night pocket synth for a creator: set BRAND to your handle, rewrite PATTERN_NAMES for your own grooves and post the copied link so followers open the exact pattern.
- A band or label promo toy: set BRAND to the release name, rename the starter patterns after tracks and put the copied link in your posts so fans hear a pattern and remix it.

## FAQ

### How does the shared link work on the Interactive Synth Web Toy?
The Interactive Synth Web Toy writes the pattern, tempo, voice and tone into the URL hash every time you edit a pad, load a starter, change voice, change tempo or change tone. Copy the address and whoever opens it hears exactly what you made, with no account and no database. Volume stays out of the link, so each visitor sets their own.

### What can I change in the Interactive Synth Web Toy without rewriting the code?
The Interactive Synth Web Toy exposes five variables: BRAND for the wordmark, page title and footer, TAGLINE for the line beside it, VOICE_NAMES for the three voices in order, PATTERN_NAMES for the three starter patterns and AUDIENCE for the footer sentence. Starter patterns, grid notes and voices all sit in one settings file, so you can retune or reshape them quickly.

### Do visitors need music theory to play the Interactive Synth Web Toy?
No. Every grid note in the Interactive Synth Web Toy sits in one scale, C minor pentatonic, so any combination of lit pads sounds fine. The 25-key keyboard, the 16-step grid and the voice strip are all playable with a mouse, a finger or the computer keyboard, and the page loads stopped until the visitor presses something.

### Does the Interactive Synth Web Toy need audio files or a server to play sound?
The Interactive Synth Web Toy synthesizes every sound live with the Web Audio API, so there are no sample files to license or host. The build produces plain static files with no backend, no server code and no external APIs, which means you can publish it on any static host. If a browser has no Web Audio, the scope shows a message and the grid stays editable.

### What should I change first in the Interactive Synth Web Toy?
Start with BRAND and TAGLINE in the content file so the wordmark, page title and footer match your name, then rewrite the three VOICE_NAMES and the three PATTERN_NAMES to fit the audience you have in mind. After that, check the starter patterns and grid notes in the settings file and adjust the footer AUDIENCE line to say who the toy is made for.

### How do I build an interactive synth web toy with AI?
Copy the prompt from this page or run npx vibefather add interactive-synth-web-toy, replace [BRAND], [TAGLINE], [VOICE_NAMES] and [PATTERN_NAMES] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Interactive Synth Web Toy demo?
The Neon pocket synth case was built by Claude Opus 5.5 in Claude Code; the Classroom music lab case was built by Claude Sonnet 5.5 in Cursor. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Interactive Synth Web Toy template use?
Interactive Synth Web Toy is a single-page site built with Plain HTML, with drag & physics, micro-interactions and web audio. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Interactive Synth Web Toy template for a client or a business?
The Interactive Synth Web Toy prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Interactive Synth Web Toy template work on mobile?
Yes. Every Interactive Synth Web Toy build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [Interactive Synth Web Toy on VibeFather](https://vibefather.ai/templates/interactive-synth-web-toy?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
