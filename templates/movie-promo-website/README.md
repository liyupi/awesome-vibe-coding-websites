# Movie Promo Website

> Cinematic promo site for a near-future night-train mystery with animated trailer hero, lightbox gallery, Web Audio score, and press kit.

<a href="https://vibefather.ai/templates/movie-promo-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/movie-promo-website/2f3c1c9b-3447-4ef9-9985-1e3ddd158b26/webp.e8d1ca8b6a.webp" width="100%" alt="Movie Promo Website — Official Sci-Fi Mystery Film Promo Site built by Gemini 4 Neon"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/movie-promo-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

The official promotional website for a fictional near-future mystery feature film set aboard an overnight transcontinental sleeper train. Opens directly on a widescreen trailer-like animated hero combining consistently graded 16:9 cinema stills, subtle parallax drift, sodium-orange anamorphic light leaks, and rhythmic title cards. Scroll through the Synopsis and director's note, Cast & Crew billing, an interactive Stills Gallery with fullscreen Lightbox, a Web Audio synthesized 3-cue Soundtrack Player, International Release Schedule by territory, a local 'Find Showtimes' demo lookup, and a downloadable Press Kit.

| | |
|---|---|
| Category | [More Landing Pages](../../README.md#more-landing-pages) |
| Site type | [Landing](../../types/landing.md) |
| Style | [Editorial](../../styles/editorial.md), [Dark](../../styles/dark.md), Cinematic |
| Effects | Parallax, Audio, Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 4 + lucide-react |
| Pages | 1 |
| Built with | [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/movie-promo-website?case=2f3c1c9b-3447-4ef9-9985-1e3ddd158b26&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/movie-promo-website/2f3c1c9b-3447-4ef9-9985-1e3ddd158b26/shot_desktop.2130b167e8.webp" width="100%" alt="Movie Promo Website — THE NIGHT MERIDIAN, built by Gemini 4 Neon in Antigravity"></a><br>
<b>THE NIGHT MERIDIAN</b><br>
<sub>Built by <b>Gemini 4 Neon</b> in Antigravity · <a href="https://vibefather.ai/templates/movie-promo-website?case=2f3c1c9b-3447-4ef9-9985-1e3ddd158b26&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[FILM_TITLE]` | Feature Film Title | THE NIGHT MERIDIAN |
| `[DIRECTOR_NAME]` | Director Name | Elena Lindstrom |
| `[STUDIO_NAME]` | Production Studio | Solstice Filmworks |
| `[TAGLINE]` | Official Film Tagline | Every border crossed erases one passenger's memory. |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add movie-promo-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A short film or festival entry: set [FILM_TITLE] and [DIRECTOR_NAME] to your project, replace the four night-train stills with your own frames, and point Find Showtimes at your screening venues.
- A film festival or cinema program: keep the dark cinematic hero, rewrite the release schedule into your program waves, and turn the Press Kit into an accreditation and press-contact dossier.
- An indie studio launching several titles: use [STUDIO_NAME] as the studio brand, swap the synopsis for a slate overview, and repurpose the score player as a trailer reel selector.
- A novelist or audio-drama creator: keep the noir palette and title cards, replace cast billing with narrator and voice cast, and rewrite the synopsis for your serialized story.

## FAQ

### How do I change the film title, director and tagline in the Movie Promo Website template?
The Movie Promo Website template keeps four variables: [FILM_TITLE], [DIRECTOR_NAME], [STUDIO_NAME] and [TAGLINE], with defaults of THE NIGHT MERIDIAN, Elena Lindstrom, Solstice Filmworks and the memory-erasure tagline. Set your own values, then rewrite the synopsis, director's note, cast billing and still captions to match, since the template copy is written for the default film. Keep all copy in one content file so it swaps without touching layout.

### What sections does the Movie Promo Website template include?
The Movie Promo Website template is a single-page site with a full-bleed trailer-style hero cycling four night-train stills, a Synopsis and Director's Note, a Cast and Crew billing block, a Stills Gallery with fullscreen Lightbox, a three-cue Web Audio score player, an International Release Schedule by territory, a Find Showtimes demo lookup and a one-click Press Kit download. Sticky top navigation links every section.

### How does the soundtrack player work without audio files?
The Movie Promo Website template synthesizes its three score cues live in the browser with the Web Audio API instead of loading audio files. The cues are titled Platform Rain, Carriage Four Signal and Sodium Horizon, and each has play and pause, animated frequency bars and volume with mute. Because nothing is streamed or fetched, the player adds no audio hosting cost, but the cues are atmospheric previews rather than a licensed score.

### Can the Movie Promo Website template promote a real film release?
The Movie Promo Website template can present a real release, but its release schedule and showtimes are fictional demo content. The schedule uses opening waves and cinema formats rather than calendar dates, and Find Showtimes returns sample theaters and evening times from a city or ZIP plus a format. Replace those listings with your actual territory plan and ticketing links, and treat the press kit download as a starting dossier to rewrite.

### Is the Movie Promo Website template free, and can I use the stills in my own project?
The Movie Promo Website template's prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial or client work needs Pro, which also unlocks the full prompt and the demo source code. The four night-train stills are redistributable with the template, so you can keep them as placeholders or swap in your own graded 16:9 frames.

### How do I build a movie promo website with AI?
Copy the prompt from this page or run npx vibefather add movie-promo-website, replace [FILM_TITLE], [DIRECTOR_NAME], [STUDIO_NAME] and [TAGLINE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demo was built from exactly that text.

### Which AI model built the Movie Promo Website demo?
The THE NIGHT MERIDIAN case was built by Gemini 4 Neon in Antigravity. Each build used the published prompt with nothing added.

### What tech stack and pages does the Movie Promo Website template use?
Movie Promo Website is a single-page site built with Tailwind CSS, React and Typescript, with parallax, audio and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Movie Promo Website template for a client or a business?
The Movie Promo Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Movie Promo Website template work on mobile?
Yes. Every Movie Promo Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More More Landing Pages](../../README.md#more-landing-pages) · [Movie Promo Website on VibeFather](https://vibefather.ai/templates/movie-promo-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
