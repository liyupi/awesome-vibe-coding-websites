# Arcade Game Studio Landing Page <sup>PRO</sup>

> Pixel-art arcade landing page for a game studio, with a playable runner in the hero and a local high-score board.

<a href="https://vibefather.ai/templates/arcade-game-studio-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/coinslot/884b18c2-d036-476f-8c99-65397e86221e/webp.3196f77393.webp" width="100%" alt="Arcade Game Studio Landing Page — Pixel-Art Arcade Landing Page with Playable Hero Game and CRT Scanlines built by Claude Opus 5.5 and Gemini 4 Carbon"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/arcade-game-studio-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Coinslot is a single-page landing template for a small game studio, and the page is itself a small game. The hero is an arcade cabinet drawn in CSS. Its screen holds a canvas runner: a hooded pixel courier with a lantern runs across night rooftops, jumping chimneys and ducking low-flying moths while the speed slowly rises. Visitors play with Space and the arrow keys on desktop, or with taps, swipes and two large on-screen buttons on phones. The control hints change to match whichever input they last used. Next to the cabinet is a top-five high-score board with three-letter initials entry. Scores are saved in localStorage, the board can be reset, and the best score also appears in the ticker below.

The template suits indie studios, game jams, retro arcade bars, pixel artists and any small team that wants its front page to be played as well as read. The look is a deep navy-black screen with one hot magenta accent, phosphor green for success states and amber for scores. Borders and buttons have stepped pixel corners and hard offset shadows, and buttons press down when clicked. The CRT treatment covers scanlines, a soft vignette, slight screen curvature, a faint flicker and a slow rolling band. Every animated part switches off when the visitor has reduced motion turned on.

Below the hero are a scrolling ticker of game titles, a grid of cartridge-shaped game cards with code-drawn label art, a studio section with stat counters and a short manifesto, and a newsletter sign-up. The form only checks the email in the browser and then shows a confetti "1UP" message. All sprites and illustrations are drawn in code, so there are no image files to license. To adapt it, change the brand, the hero game's name, the studio pitch, the home city and the newsletter name in one content file. Then swap the game list and the pixel grids.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [Landing Page](../../types/landing-page.md), [Browser Game](../../types/game.md) |
| Style | [Retro](../../styles/retro.md), [Pixel Art](../../styles/pixel.md), [Dark](../../styles/dark.md) |
| Effects | Text Animation, Marquee, Micro-interactions |
| Stack | Vite 5 + vanilla TypeScript + Hand-written vanilla CSS |
| Pages | 1 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Claude Code, [Gemini 4 Carbon](../../models/gemini-4-carbon.md) in Cursor |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/arcade-game-studio-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/arcade-game-studio-landing-page?case=884b18c2-d036-476f-8c99-65397e86221e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/coinslot/884b18c2-d036-476f-8c99-65397e86221e/shot_desktop.325abec805.webp" width="100%" alt="Arcade Game Studio Landing Page — Indie game studio, built by Claude Opus 5.5 in Claude Code"></a><br>
<b>Indie game studio</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Claude Code · <a href="https://vibefather.ai/templates/arcade-game-studio-landing-page?case=884b18c2-d036-476f-8c99-65397e86221e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/arcade-game-studio-landing-page?case=2bd3687d-f73f-4118-a336-c77efb812591&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/arcade-game-studio-landing-page/2bd3687d-f73f-4118-a336-c77efb812591/shot_desktop.2156094387.webp" width="100%" alt="Arcade Game Studio Landing Page — Retro arcade bar, built by Gemini 4 Carbon in Cursor"></a><br>
<b>Retro arcade bar</b><br>
<sub>Built by <b>Gemini 4 Carbon</b> in Cursor · <a href="https://vibefather.ai/templates/arcade-game-studio-landing-page?case=2bd3687d-f73f-4118-a336-c77efb812591&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Studio name | Lanternbyte Games |
| `[HERO_GAME]` | Playable hero game title | Lantern Dash |
| `[STUDIO_PITCH]` | One-line studio pitch | a three-person studio making pocket-sized pixel games you can finish on a lunch break |
| `[HOME_BASE]` | City / home base | Tallinn, Estonia |
| `[NEWSLETTER_NAME]` | Newsletter name | The Save Point |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/arcade-game-studio-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- An indie game studio launching a first title: set BRAND and HERO_GAME to your game, point the cartridge grid at your releases and rewrite the studio stats for your team size.
- A retro arcade bar: set BRAND to the venue, HOME_BASE to your city, and swap the game cards for your cabinets, tournaments and opening hours.
- A game jam collective: use STUDIO_PITCH to describe the jam, list past jam entries as cartridges and rename NEWSLETTER_NAME to your next-jam signup.
- A pixel artist portfolio: keep the playable hero as a showreel, replace the game grid with commissioned work and set the manifesto to your process and tools.

## FAQ

### How do I change the playable game in the hero to my own title?
The playable runner is set by the HERO_GAME variable in the template's content file. Change that value and the cabinet marquee, attract screen and primary call to action all update to your title. The runner itself is a hooded pixel courier with a lantern jumping chimneys and ducking moths, drawn in code, so renaming is a copy change rather than a rebuild.

### Where are the arcade high scores stored and can visitors reset the board?
The Arcade Game Studio Landing Page template saves the top-five high scores with three-letter initials in the visitor's browser using localStorage, so each player sees their own board. The board includes a reset control. If localStorage is unavailable, the template falls back to in-memory scores so private browsing does not break the game. The best score also shows in the ticker below the hero.

### Do I need image files or licensed art for this pixel-art game studio page?
No image files are needed. Every sprite, cartridge label, icon and illustration in the Arcade Game Studio Landing Page template is drawn in code, so there is nothing to license or host. The only font packages are Press Start 2P and VT323, both open licensed. That makes the page light to load and simple to restyle by editing the pixel grids and palette.

### How do I adapt this arcade template for a retro arcade bar instead of a game studio?
Set BRAND to the bar's name, HOME_BASE to its city, STUDIO_PITCH to a one-line description of the venue and NEWSLETTER_NAME to your mailing list. Then swap the game list for your cabinets or events and adjust the pixel art. The live demo built with Gemini 4 Carbon in Cursor already shows the template used as a retro arcade bar, so the structure holds up for that kind of business.

### What can I change first to make this template my own game studio site?
Start with the five variables in the content file: BRAND, HERO_GAME, HOME_BASE, STUDIO_PITCH and NEWSLETTER_NAME. Those cover the nav, hero, footer, page title, cabinet marquee and newsletter copy. After that, replace the game list and cartridge label art, then rewrite the studio stats and manifesto to match your team. The layout, colors and CRT effects can stay as they are.

### How do I build an arcade game studio landing page with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add arcade-game-studio-landing-page, replace [BRAND], [HERO_GAME], [STUDIO_PITCH] and [HOME_BASE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Arcade Game Studio Landing Page demo?
The Indie game studio case was built by Claude Opus 5.5 in Claude Code; the Retro arcade bar case was built by Gemini 4 Carbon in Cursor. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Arcade Game Studio Landing Page template use?
Arcade Game Studio Landing Page is a single-page site built with Plain HTML, with text animation, marquee and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Arcade Game Studio Landing Page template free to use?
Arcade Game Studio Landing Page is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Arcade Game Studio Landing Page template work on mobile?
Yes. Every Arcade Game Studio Landing Page build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [Arcade Game Studio Landing Page on VibeFather](https://vibefather.ai/templates/arcade-game-studio-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
