# Daily Word Puzzle Game

> Warm-arcade five-letter word game with tile flips, a mirroring on-screen keyboard, streak stats and a copyable results row.

<a href="https://vibefather.ai/templates/daily-word-puzzle-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/daily-word-puzzle-game/3cb4ec06-14f1-4f52-a4ac-8f25880119a7/webp.5992511e85.webp" width="100%" alt="Daily Word Puzzle Game — Word Game with Tile Flips built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/daily-word-puzzle-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A single-page word puzzle: guess a five-letter word in six tries on a chunky cream board. Letter tiles flip to mark hits, near-misses and misses with a per-tile stagger; invalid guesses shake; the on-screen keyboard mirrors every letter's state and physical keyboards play too. Winning or losing shows a result panel with the answer and a copy-to-clipboard results row (an original character format — no emoji grids); stats (played, win rate, current and best streak, guess distribution) persist in localStorage. A help modal teaches the rules with worked examples. Between rounds the next word serves from an original curated list, rotated per completed game and labeled as sample rotation — no real dates, no daily lockout. The look is warm arcade: cream ground, ink tiles, one marigold accent, rounded keys, a quiet confetti-free celebration. Everything runs locally; nothing leaves the browser.

| | |
|---|---|
| Category | [Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) |
| Site type | [Browser Game](../../types/game.md) |
| Style | [Playful](../../styles/playful.md), [Minimal](../../styles/minimal.md) |
| Effects | Keyboard, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/daily-word-puzzle-game?case=3cb4ec06-14f1-4f52-a4ac-8f25880119a7&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/daily-word-puzzle-game/3cb4ec06-14f1-4f52-a4ac-8f25880119a7/shot_desktop.a4a161e248.webp" width="100%" alt="Daily Word Puzzle Game — Five-letter word game, built by GLM-5.3 in ZCode"></a><br>
<b>Five-letter word game</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/daily-word-puzzle-game?case=3cb4ec06-14f1-4f52-a4ac-8f25880119a7&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/daily-word-puzzle-game?case=923c2a99-bad7-48dd-8bf9-e1179caddb2b&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/daily-word-puzzle-game/923c2a99-bad7-48dd-8bf9-e1179caddb2b/shot_desktop.44677071a8.webp" width="100%" alt="Daily Word Puzzle Game — Five-letter food words game, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Five-letter food words game</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/daily-word-puzzle-game?case=923c2a99-bad7-48dd-8bf9-e1179caddb2b&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[GAME]` | Game name | Larkspur |
| `[FLAVOR]` | Word theme | everyday English words |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add daily-word-puzzle-game` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A classroom vocabulary game: set GAME to your quiz name, set FLAVOR to the week's spelling words, and rewrite the 40 answers to five-letter terms from the lesson.
- A food publication's daily break: set FLAVOR to food words, keep the cream and marigold palette, and swap the help copy for your editorial voice.
- A conference or event booth game: set GAME to the event wordmark and theme FLAVOR around the industry so visitors can play between sessions.
- A creator's community warm-up: set GAME to your handle's game name and rewrite the answers around your niche so regulars return for the next sample rotation.

## FAQ

### How do I change the word list and theme in the Daily Word Puzzle Game?
The Daily Word Puzzle Game template keeps two plain word lists in its content file: 40 curated five-letter answers themed around the FLAVOR variable and 80 additional accepted guesses. To retheme the game, set FLAVOR to a lowercase phrase such as "food words" and rewrite the 40 answers to match, keeping every word exactly five letters and common enough to guess. The accepted list must include all answers plus the extra common words.

### How does the shareable results row work in the Daily Word Puzzle Game?
The Daily Word Puzzle Game template builds a copyable results row from the committed guesses using unicode box-drawing characters rather than colored-square emoji. The ShareRow button copies a multi-line text block with a header naming the game and the solved-in count, then shows a confirmation toast. Nothing is sent to a server: the result is written to the clipboard in the browser, and the format is original to the template.

### Where are the Daily Word Puzzle Game stats stored and how do players reset them?
The Daily Word Puzzle Game template stores played, wins, current streak, best streak and a six-bar guess distribution in the browser's localStorage under a key derived from the game name. Stats survive between rounds and reloads on the same device. A quiet reset link inside the stats block opens a confirm popover so a player can clear their history without touching the rest of the game.

### Can I rename the game and keep my own brand on the Daily Word Puzzle Game template?
The Daily Word Puzzle Game template takes a GAME variable for the invented game's name, used in the wordmark, page title, share text and the localStorage key. Set GAME to a single word you own, and the storage key changes with it, so a renamed game starts with fresh stats. The template also keeps a small VibeFather credit link in the footer; leave it in place.

### How do I make the Daily Word Puzzle Game accessible to keyboard and touch players?
The Daily Word Puzzle Game template listens for physical keyboard input on the page, so letters, Enter and Backspace work without focusing the on-screen keyboard, and every on-screen key is a real button for touch. It also respects reduced motion: tile states swap instantly and the invalid-guess shake is replaced by a toast explaining the problem. Focus outlines are defined on every interactive element.

### How do I build a daily word puzzle game with AI?
Copy the prompt from this page or run npx vibefather add daily-word-puzzle-game, replace [GAME] and [FLAVOR] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Daily Word Puzzle Game demo?
The Five-letter word game case was built by GLM-5.3 in ZCode; the Five-letter food words game case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Daily Word Puzzle Game template use?
Daily Word Puzzle Game is a single-page site built with Tailwind CSS, Motion and React, with keyboard and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Daily Word Puzzle Game template for a client or a business?
The Daily Word Puzzle Game prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Daily Word Puzzle Game template work on mobile?
Yes. Every Daily Word Puzzle Game build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Games, 3D & Interactive Toys](../../README.md#games-3d--interactive-toys) · [Daily Word Puzzle Game on VibeFather](https://vibefather.ai/templates/daily-word-puzzle-game?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
