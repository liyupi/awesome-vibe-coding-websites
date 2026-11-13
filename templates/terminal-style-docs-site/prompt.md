# Terminal-Style Docs Site

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A three-page, terminal-style documentation site for [BRAND], an invented open-source command-line tool ([PURPOSE]). Monospace-first UI on a near-black background with one amber accent. There is a fixed top bar, a file-tree sidebar, a scroll-spy outline, terminal-window command blocks with copy buttons, and a '/' search palette over a static client-side index. Pages: Getting started, Commands reference and Configuration, connected by hash routing.

- Audience: Developers who install and use [BRAND] from the terminal: they skim for a command, copy it, check a flag or a config key, and leave. Secondary audience: maintainers judging whether the project is serious and well kept.
- Goal: Get a new user from zero to a working first run within one page, and make every command, flag and config key reachable within two keystrokes (/ then type) or one sidebar click.
- Tone: Calm, exact and a little dry, like good man pages written by a friendly person. Short sentences, second person, no exclamation marks, no marketing words. Terminal flavour comes from glyphs (>, $, #, //, ├─) and type, not from jokes.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), lucide-react (ISC), @fontsource/jetbrains-mono (OFL-1.1), @fontsource/ibm-plex-sans (OFL-1.1), tailwindcss (dev) (MIT), postcss (dev) (MIT), autoprefixer (dev) (MIT)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with: npm create vite@latest . -- --template react-ts, then npm i lucide-react @fontsource/jetbrains-mono @fontsource/ibm-plex-sans and npm i -D tailwindcss@3.4 postcss autoprefixer, then npx tailwindcss init -p.
  - vite.config.ts: base: './', build.outDir: 'dist', build.sourcemap: false. No other plugins besides @vitejs/plugin-react.
  - In src/main.tsx import '@fontsource/jetbrains-mono/400.css', '@fontsource/jetbrains-mono/500.css', '@fontsource/jetbrains-mono/700.css', '@fontsource/ibm-plex-sans/400.css', '@fontsource/ibm-plex-sans/500.css', '@fontsource/ibm-plex-sans/600.css'.
  - tailwind.config.js: content ['./index.html','./src/**/*.{ts,tsx}']; extend colors with the design tokens as names bg, surface, surface2, line, ink, muted, dim, amber, amberSoft, sand; fontFamily.mono = ['"JetBrains Mono"','ui-monospace','monospace'], fontFamily.sans = ['"IBM Plex Sans"','system-ui','sans-serif']; keyframes blink (0%,49% opacity 1; 50%,100% opacity 0) and fadeUp (from opacity 0 translateY(4px) to opacity 1 translateY(0)); animations blink '1.06s steps(1) infinite' and fadeUp '160ms ease-out'.
  - src/index.css: Tailwind directives, html background #0d0c0a, color-scheme dark, ::selection background rgba(245,165,36,0.28), scrollbar thumb #2a261f on transparent, :focus-visible outline 2px solid #f5a524 with 2px offset, [id] scroll-margin-top 80px, and a @media (prefers-reduced-motion: reduce) block that sets animation and transition to none on every element and html scroll-behavior auto.
  - Put ALL copy and data in src/content.ts: site variables (BRAND, BINARY, PURPOSE, VERSION, CONFIG_FILE), sidebar groups, each page's sections, commands (name, synopsis, description, example lines, flags[]), global flags, exit codes, config sections (keys[] with type, default, description), env vars, callouts and footer text. Components only render this data. Everything below is written for the default values. If the variable values change, rewrite all copy and invent a coherent replacement set of 6 commands, flags, config keys, env vars and terminal output that fits [PURPOSE]. Keep the same counts, structure and table shapes.
  - Derive env var names from the uppercased BINARY (default prefix BRINDLE_). Terminal examples always use [BINARY] as the command.
  - Routing: write a tiny useHashRoute hook in src/router.ts (no router library). Hash format is #/<page> or #/<page>/<anchorId>. Pages are getting-started, commands and configuration. An empty hash, #/ or an unknown page renders getting-started. On page change, scroll to top and replay the fadeUp animation on the main column. When an anchorId is present, scrollIntoView that element after render. Outline and sidebar anchor clicks call scrollIntoView({behavior:'smooth'}) and history.replaceState to #/<page>/<anchorId>.
  - Search: src/search.ts builds an in-memory array at startup from content.ts. Entries are { title, kind: 'page'|'section'|'cmd'|'flag'|'key'|'env', page, anchor, keywords }. Matching: lowercase the query, split on whitespace, and require every token to be a substring of title + ' ' + keywords. Score 3 if the title starts with the first token, 2 if the title contains it, 1 otherwise. Sort by score, then by title length. Return at most 8 results. No search library.
  - Components: AppShell, TopBar, Sidebar (desktop column and mobile drawer), Outline, Terminal (command block with copy), CodeFile (file block with line numbers), Tabs, Callout, FlagTable, Heading (with hover # anchor), SearchPalette, PrevNext, Footer. Write a tiny tokenizer in src/highlight.ts for shell and TOML. No highlighting library.
  - index.html: <title>[BRAND] docs</title>, <link rel="icon" href="./favicon.svg">, lang en. public/favicon.svg is drawn in code: a 32×32 rounded square (rx 6) filled #f5a524 with the glyph '>_' in #0d0c0a, bold monospace, centred.
  - Add package.json scripts dev: vite, build: tsc -b && vite build, preview: vite preview. Write ASSETS.md at the project root listing the two Fontsource packages and lucide-react with source URL, author and license.

## Variables
- [BRAND] — Tool name (default: "Brindle"). The project's display name, used in the title, headings and footer.
- [BINARY] — Command / binary name (default: "brindle"). What users type in the terminal. Used in every command example and as the env-var prefix.
- [PURPOSE] — One-line purpose (default: "a local-first task runner that caches every step of your build"). Lowercase phrase without a trailing period; it completes the sentence '[BRAND] is …'.
- [VERSION] — Current version (default: "v2.4.0"). Shown in the top-bar badge, the --version output and the footer.
- [CONFIG_FILE] — Config file name (default: "brindle.toml"). The file documented on the Configuration page.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/terminal-style-docs-site in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- bg `#0d0c0a` — Page background, top bar base (at 85% opacity with blur)
- surface `#15130f` — Sidebar hover, cards, palette panel, table header rows
- surface2 `#1c1a15` — Terminal and code block bodies, inline code background, selected palette row
- line `#2a261f` — All 1px borders, dividers, table rules, tree glyphs at rest
- ink `#e8e3d8` — Primary text, headings, command text in terminals
- muted `#9a9284` — Secondary text, inactive nav items, table descriptions
- dim `#6b6458` — Labels, line numbers, comments, terminal output timings, group headings
- amber `#f5a524` — The single accent: links, active nav and '>' marker, caret, $ prompt, focus rings, flag names, TOML section headers, 'copied' state
- amberSoft `rgba(245,165,36,0.08)` — Callout background, active sidebar row tint, hover tint on link cards
- sand `#d9c79e` — Strings in code and inline code text; never used for UI chrome

### Typography
- Display + UI (headings, nav, top bar, tables, kbd, all code): JetBrains Mono (OFL), weights 400/500/700
- Body prose (paragraphs, list items, table description cells): IBM Plex Sans (OFL), weights 400/500/600

### Layout & motion
- Spacing: 4px base unit. Top bar 56px tall. Desktop grid at ≥1280px: sidebar 260px | main column (content max-width 760px, padding 48px 56px) | outline 220px. At 1024–1279px the outline is hidden. Below 1024px the sidebar becomes a drawer and the main padding is 32px 20px. Vertical rhythm: 64px between H2 sections, 24px between blocks inside a section, 12px between a paragraph and its terminal block. Type scale: H1 40px/1.15 mono 700, tracking -0.02em (30px on mobile); H2 24px/1.3 mono 700, prefixed by '## ' in amber at 60% opacity; H3 17px mono 500; body 16px/1.7 Plex Sans 400 in ink; small labels 11px mono uppercase tracking 0.08em in dim; terminals and tables 14px mono (13px on mobile).
- Radius: 6px for terminal, code-file, callout, link cards and tables; 4px for inline code, kbd, badges and buttons; 10px for the search palette panel. No pill shapes.
- Motion: Block caret: an 8×16px amber block after the top-bar brand and at the end of the hero terminal, animation blink 1.06s steps(1) infinite.
- Motion: Hero typing (Getting started only): after 300ms, type the command '[BINARY] run build' at 45ms per character. Pause 250ms, then reveal the 5 output lines one at a time every 120ms (opacity 0→1, 100ms), then show a fresh '$ ' prompt with the blinking caret. Runs once per page visit.
- Motion: Page change: the main column replays fadeUp (opacity 0→1, translateY 4px→0, 160ms ease-out).
- Motion: Search palette: backdrop fades in over 120ms and the panel scales 0.98→1 with opacity 0→1 over 120ms ease-out. Closing reverses it in 100ms.
- Motion: Mobile drawer: slides from translateX(-100%) to 0 in 200ms cubic-bezier(.2,.8,.2,1), with an overlay fading to rgba(13,12,10,0.6).
- Motion: Copy button: the icon swaps Copy→Check and the label 'copied' appears in amber with a 120ms opacity fade, then reverts after 1600ms.
- Motion: Hover micro-interactions: nav items and links change colour over 120ms. Link cards shift their border to amber and nudge the arrow 3px right over 150ms. No transforms on text.
- Motion: Smooth scrolling only for outline and anchor clicks. Under prefers-reduced-motion: no typing (the hero shows its final state immediately), a static caret, no fades, slides or smooth scroll.
- Imagery: No photos or illustrations. All visuals are type, 1px borders, and terminal and code windows drawn with HTML and CSS. Icons are Lucide at 14–16px with stroke width 1.75, in muted (amber when active). The only graphic file is the code-drawn favicon.svg.

## Pages & Sections
### App shell on every page (`(shared shell)`)
1. **Top bar** — Left: the brand lockup '~/' in dim + '[BINARY]' in ink, 15px mono 700, followed by the blinking amber block caret, then a 1px×16px divider in line, then 'docs' in muted 14px. Right on desktop: a search trigger button (lucide Search 14px, the text 'Search docs' in muted, and a kbd '/' at the far right; 280px wide, 36px tall, surface background, 1px line border, 4px radius, border turns amber on hover) and a version badge '[VERSION]' (12px mono, muted, 1px line border, 4px radius, 2px 8px padding). Right on mobile: an icon-only search button and a menu button (lucide Menu, which becomes X while the drawer is open). Both are 40×40 tap targets.
   Layout: Fixed, full width, height 56px, z-index 40. Background rgba(13,12,10,0.85) with backdrop-filter blur(8px) and a 1px bottom border in line. Inner padding 0 24px (0 16px on mobile). Flex row with space-between and centred items.
   Motion: Caret blinks. The search trigger border transitions over 120ms.
2. **Sidebar** — Group label '// start' with one page item 'getting-started'. Group label '// reference' with page items 'commands' and 'configuration'. Group labels are 11px uppercase dim with 0.08em tracking and 28px of space above each group. Page items are 14px mono. Inactive items are muted and indented 2ch so they align with the active marker. The active item shows an amber '> ' prefix, amber text and an amberSoft background on a 32px row with 4px radius. Below the active page only, list its H2 anchors as a tree: each row starts with '├─ ' ('└─ ' for the last) in #4a443a, then the anchor label in 13px muted. The anchor currently in view (from scroll spy) turns amber. Anchors for getting-started: install, quick-start, first-task, next-steps. For commands: one row per command (init, run, watch, cache, graph, doctor), then global-flags and exit-codes. For configuration: lookup-order, example, [project], [tasks.<name>], [cache], [env], environment-variables. Pinned to the bottom of the sidebar: a 1px line-bordered box with 12px dim text 'press / to search', with '/' in a kbd.
   Layout: Desktop (≥1024px): sticky column 260px wide, top 56px, height calc(100vh - 56px), overflow-y auto, 1px right border in line, padding 24px 16px, flex column with the hint box pushed to the bottom (mt-auto). Mobile (<1024px): the same content in a fixed drawer 300px wide, full height under the top bar, background bg, z-index 50, with an overlay behind it. Clicking any item or the overlay, or pressing Esc, closes it. Focus moves to the first item when it opens.
   Motion: The drawer slides in over 200ms. Item colours transition over 120ms.
3. **On this page outline** — Label 'on this page' (11px mono uppercase, dim). A list of the page's H2 headings in 13px mono muted, each 28px tall. The active heading is amber with a 2px amber bar on its left edge; the others have a 2px line bar. Under the list, a 'back to top ↑' link in 12px dim.
   Layout: Visible only at ≥1280px. Sticky at top 88px, 220px wide, padding-left 24px. Scroll spy uses an IntersectionObserver on H2 elements with rootMargin '-80px 0px -65% 0px'. When none intersect, the last heading above the viewport stays active.
   Motion: Colour and bar changes over 120ms.
4. **Prev / next and footer** — At the bottom of every page, two link cards. Each has a label in 12px dim ('← previous' or 'next →') and the page title in 16px mono ink. Order: getting-started → commands → configuration; the first page has only 'next' and the last only 'previous'. Below them, the footer text in 13px mono dim: '[BRAND] [VERSION] · MIT licensed · docs written in plain text'. If a [CREDIT] link is defined in the Credit section, render it on a second footer line in the same style, with the link in muted turning amber on hover.
   Layout: Cards in a 2-column grid with a 16px gap (1 column on mobile); a lone 'next' card sits in the right column on desktop. Each card has a 1px line border, 6px radius and 16px 20px padding. The footer has margin-top 64px, padding 24px 0 48px and a 1px top border in line.
   Motion: On card hover the border turns amber, the background becomes amberSoft and the arrow nudges 3px.
5. **Search palette** — Opens on '/' (only when focus is not in an input, textarea or contenteditable, and no modifier key is held), on Ctrl+K or Cmd+K, or on clicking either search trigger. The input row starts with an amber '/' glyph, has the placeholder 'search commands, flags, config keys…' and an 'esc' kbd on the right. Results rows are 40px tall: a fixed-width kind tag in dim ('[page]', '[sec]', '[cmd]', '[flag]', '[key]', '[env]'), the title in 14px mono ink with the matched substring in amber, and the page name right-aligned in 12px dim. The selected row has a surface2 background, an amber '> ' marker and an amber title. An empty query shows 6 suggested entries under the label 'jump to': getting-started, run, cache prune, --jobs, [tasks.<name>], BRINDLE_CACHE_DIR. No matches shows: no matches for "<query>" — try 'run' or 'cache'. The footer row reads '↑↓ navigate · ↵ open · esc close' in 12px dim.
   Layout: A fixed full-screen backdrop rgba(13,12,10,0.72) with blur(4px), z-index 60. The panel is centred horizontally at top 12vh, width min(640px, 100vw - 32px), surface background, 1px line border, 10px radius and a shadow of 0 24px 64px rgba(0,0,0,0.5). The input row is 52px tall with a bottom border, and the results list has a max-height of 360px with overflow auto. ArrowUp and ArrowDown move the selection (wrapping, and keeping the selected row scrolled into view). Enter navigates to #/<page>/<anchor> and closes. Esc or a backdrop click closes. Focus is trapped inside the panel and returns to the previously focused element on close. The panel uses role dialog with aria-modal, and the list uses role listbox.
   Motion: The backdrop fades and the panel scales 0.98→1 over 120ms.

### Getting started (`#/getting-started`)
1. **Header + hero terminal** — Breadcrumb in 12px mono dim: 'docs / start / getting-started'. H1: 'Getting started'. Lead paragraph (18px Plex Sans, muted): '[BRAND] is [PURPOSE]. This page takes you from nothing installed to a cached build in about a minute.' Then the hero terminal, titled 'shell', which types '$ [BINARY] run build' and then prints: '  ✓ install     cached   0.02s', '  ✓ lint        cached   0.01s', '  ● compile     ran      1.48s', '  ● bundle      ran      0.36s', '  done · 2 cached · 2 ran · 1.87s', and ends on a new '$ ' prompt with the blinking caret. In the output, ✓ and the word 'cached' are amber, ● and 'ran' are ink, timings are dim and the summary line is muted.
   Layout: Breadcrumb, then H1 with 12px gap, then lead with 16px gap, then the terminal with 32px gap, full content width. The hero terminal has no copy button. It has a min-height equal to its final state so the layout never shifts while typing.
   Motion: Typing sequence as described in the design motion. Reduced motion shows the final state.
2. **Install** — H2 '## install' (id install). Paragraph: 'One binary, no runtime. Pick whichever installer you already trust.' A Tabs component with three tabs, 'script', 'npm' and 'cargo', each holding a Terminal. script: '$ curl -fsSL https://get.brindle.example/install.sh | sh'. npm: '$ npm install --global brindle'. cargo: '$ cargo install brindle-cli'. Then the paragraph 'Check that it worked:' and a Terminal with '$ [BINARY] --version' and the output 'brindle [VERSION]'.
   Layout: Tabs sit in the terminal's header bar in place of the title. Tab buttons are 12px mono: inactive tabs are dim, and the active tab is ink with a 2px amber underline. The tablist supports ArrowLeft and ArrowRight keyboard switching. The selected tab persists in localStorage under '<binary>-install-tab'.
   Motion: Tab content switches instantly. The underline moves with a 150ms transform.
3. **Quick start** — H2 '## quick start' (id quick-start). Three numbered steps. Each has a step number in amber 13px mono ('01', '02', '03'), an H3 title, one sentence and a Terminal. 01 'Create a config' — 'Run init in your project root. It writes a [CONFIG_FILE] with three starter tasks.' — '$ [BINARY] init --template minimal' → 'created [CONFIG_FILE] (3 tasks)'. 02 'Run the default task' — 'With no task name, [BRAND] runs the default from your config.' — '$ [BINARY] run' → '  done · 0 cached · 4 ran · 2.31s'. 03 'Run it again' — 'Nothing changed, so every step comes back from cache.' — '$ [BINARY] run' → '  done · 4 cached · 0 ran · 0.06s'.
   Layout: Steps are a vertical list. Each step is a 2-column grid: a 48px column for the number and a 1fr column for the content. A 1px line vertical rule connects the step numbers, running down the centre of the number column between steps. On mobile the number sits above the title instead.
   Motion: None beyond the copy button.
4. **Your first task** — H2 '## your first task' (id first-task). Paragraph: 'A task is a command plus the files it depends on. [BRAND] hashes the inputs and restores the outputs when the hash matches.' A CodeFile titled '[CONFIG_FILE]' with: '[tasks.test]', 'run = "npm test"', 'inputs = ["src/**", "test/**"]', 'deps = ["install"]'. Then a note Callout: label 'NOTE', text 'Inputs are hashed, not timestamped. Saving a file without changing it never invalidates the cache.' Then a Terminal: '$ [BINARY] run test'.
   Layout: CodeFile: a header bar like the terminal's, with lucide FileText 14px and the filename in 12px muted. The body has right-aligned line numbers 3ch wide in dim with 16px gutter padding. Callout: 2px amber left border, amberSoft background, 6px radius on the right corners, 16px 20px padding, a label row with lucide Info 14px and 'NOTE' in amber 11px mono uppercase, and body text in 15px Plex Sans ink.
   Motion: None.
5. **Next steps** — H2 '## next steps' (id next-steps). Two link cards. Card 1: lucide Terminal icon, title 'Commands', text 'Every command, flag and exit code.', link #/commands. Card 2: lucide Settings2 icon, title 'Configuration', text 'Every key in [CONFIG_FILE], with defaults.', link #/configuration. Each card ends with a '→' in dim that turns amber on hover.
   Layout: 2-column grid with a 16px gap (1 column on mobile). Cards have a 1px line border, 6px radius, 20px padding, the icon in amber and the title in 16px mono 700.
   Motion: Card hover as in the shared prev/next.

### Commands (`#/commands`)
1. **Header + usage** — Breadcrumb 'docs / reference / commands'. H1 'Commands'. Lead: 'Every [BRAND] command has the same shape. Flags can go before or after the task name.' A Terminal titled 'usage' with '$ [BINARY] <command> [task] [flags]' (copyable).
   Layout: Same header structure as Getting started.
   Motion: None.
2. **Command index** — A compact list of the 6 commands. Each row shows the command name in amber 14px mono at a fixed 10ch width, then a one-line description in muted Plex Sans 15px: init — 'Create a [CONFIG_FILE] in the current directory.'; run — 'Run a task and its dependencies, restoring cached steps.'; watch — 'Rerun a task whenever its inputs change.'; cache — 'Inspect, prune or clear the local step cache.'; graph — 'Print the task dependency graph.'; doctor — 'Check your setup and explain what is wrong.' Each row links to #/commands/<name>.
   Layout: Bordered table-like block: 1px line border, 6px radius, rows 44px tall separated by 1px line rules, 0 16px padding. Hovered rows get a surface background and a '>' in amber before the name. On mobile the description wraps below the name.
   Motion: Row hover over 120ms.
3. **Per-command sections (×6)** — One section per command, in order: init, run, watch, cache, graph, doctor. Each has an H2 '## [BINARY] <name>' (id <name>), a synopsis line in inline code, a 1–2 sentence description, a Terminal example with output, and a FlagTable (columns Flag | Default | Description). init: synopsis '[BINARY] init [--template <name>] [--force]'; example '$ [BINARY] init --template monorepo' → 'created [CONFIG_FILE] (6 tasks)'; flags --template <name> | minimal | Start from a bundled template: minimal, monorepo or static-site. --force | false | Overwrite an existing config. run: synopsis '[BINARY] run [task] [flags]'; example as in the hero output; flags -j, --jobs <n> | CPU count | Maximum steps run in parallel. --no-cache | false | Ignore the cache and rebuild every step. --dry-run | false | Print the plan without running anything. --filter <glob> | — | Only run tasks whose name matches. watch: example '$ [BINARY] watch test' → '  watching 42 files · ctrl-c to stop'; flags --debounce <ms> | 200 | Wait this long after the last change. --clear | false | Clear the screen before each run. cache: synopsis '[BINARY] cache <ls|prune|clear> [flags]'; example '$ [BINARY] cache prune --older-than 14d' → '  removed 318 entries · freed 1.2 GB'; flags --older-than <duration> | 30d | Used by prune: drop entries older than this. --json | false | Print machine-readable output. graph: example '$ [BINARY] graph build' → tree output 'build', '├─ install', '└─ lint', '   └─ install'; flags --format <tree|dot> | tree | Output format. --depth <n> | unlimited | Stop after n levels. doctor: example '$ [BINARY] doctor' → '  ✓ config parsed', '  ✓ cache writable', '  ! 2 tasks have no inputs (always rerun)'; flags --fix | false | Apply safe fixes automatically.
   Layout: Sections are separated by 64px and a 1px line rule. H2 shows an amber '#' link to its left on hover (positioned in the left gutter on desktop and hidden on mobile); clicking it sets the hash. FlagTable: full content width, 1px line border, 6px radius, header row on surface background with 11px uppercase dim labels, body rows in 14px with 12px 16px padding and 1px line rules. The Flag cell is amber mono and nowrap, Default is sand mono, and Description is muted Plex Sans 15px. On mobile the table wrapper scrolls horizontally (overflow-x auto) with a min-width of 560px.
   Motion: None beyond the copy buttons and anchor hover.
4. **Global flags** — H2 '## global flags' (id global-flags). Sentence: 'These work with every command.' FlagTable: --config <path> | ./[CONFIG_FILE] | Use a different config file. -q, --quiet | false | Only print errors. -v, --verbose | false | Print every step, including cached ones. --color <auto|always|never> | auto | Control coloured output. --version | — | Print the version and exit. -h, --help | — | Show help for a command.
   Layout: Same FlagTable style.
   Motion: None.
5. **Exit codes** — H2 '## exit codes' (id exit-codes). Table with columns Code | Meaning: 0 — Success. 1 — A task failed. 2 — Invalid arguments or config. 3 — Cache directory is not writable. 130 — Interrupted with ctrl-c.
   Layout: Same table style. The Code column is 80px wide, in amber mono.
   Motion: None.

### Configuration (`#/configuration`)
1. **Header + lookup order** — Breadcrumb 'docs / reference / configuration'. H1 'Configuration'. Lead: '[BRAND] reads one file, [CONFIG_FILE], from your project root. Every key is optional except a task's run.' H2 '## lookup order' (id lookup-order) with an ordered list in mono 14px, each item starting with an amber number: '1  the --config flag', '2  the BRINDLE_CONFIG environment variable', '3  ./[CONFIG_FILE]', '4  the nearest parent directory that contains [CONFIG_FILE]'. Then: 'The first file found wins. Files are never merged.'
   Layout: Ordered list with 8px row gaps and the numbers in a fixed 3ch column.
   Motion: None.
2. **Full example** — H2 '## example' (id example). CodeFile titled '[CONFIG_FILE]' with line numbers and a copy button, containing exactly: '# [CONFIG_FILE]', '[project]', 'name = "atlas-web"', 'default = "build"', '', '[cache]', 'dir = ".brindle/cache"', 'max_size = "5GB"', 'compress = true', '', '[env]', 'NODE_ENV = "production"', '', '[tasks.install]', 'run = "npm ci"', 'inputs = ["package-lock.json"]', '', '[tasks.lint]', 'run = "npm run lint"', 'inputs = ["src/**/*.ts"]', 'deps = ["install"]', '', '[tasks.build]', 'run = "npm run build"', 'inputs = ["src/**", "vite.config.ts"]', 'outputs = ["dist/**"]', 'deps = ["install", "lint"]'.
   Layout: The CodeFile copy button sits in the header bar on the right. Highlighting: '# …' comments in dim, [section] headers in amber, keys in ink, '=' in dim, strings in sand, booleans and numbers in amber.
   Motion: None.
3. **Key reference sections** — Four H2 sections, each with one sentence and a key table (Key | Type | Default | Description). '## [project]' (id project): name | string | directory name | Shown in logs and graph output. default | string | — | Task to run when none is given. root | string | "." | Paths in inputs and outputs resolve from here. '## [tasks.<name>]' (id tasks): run | string | required | Shell command to execute. inputs | string[] | [] | Globs hashed to build the cache key. outputs | string[] | [] | Globs saved to and restored from the cache. deps | string[] | [] | Tasks that must finish first. env | table | {} | Extra variables for this task only. cache | bool | true | Set false for tasks with side effects. '## [cache]' (id cache-config): dir | string | ".brindle/cache" | Where step outputs are stored. max_size | string | "5GB" | Oldest entries are pruned past this size. compress | bool | true | Compress stored outputs. '## [env]' (id env): any key | string | — | Exported to every task and included in the cache key. After [env], a warning Callout: label 'WARN' with lucide TriangleAlert, text 'Values in [env] become part of the cache key and are written to disk. Keep secrets out of it and read them from your shell instead.'
   Layout: Key tables use the FlagTable style with 4 columns: Key in amber mono, Type in muted mono, Default in sand mono, Description in muted Plex Sans. The sidebar and outline labels show the bracketed names exactly ('[project]' and so on). The warning callout uses the same style as the note, with a different icon and label.
   Motion: None.
4. **Environment variables** — H2 '## environment variables' (id environment-variables). Sentence: 'Environment variables override the config file. Flags override both.' Table Variable | Default | Description: BRINDLE_CONFIG | — | Path to the config file. BRINDLE_CACHE_DIR | .brindle/cache | Overrides [cache].dir. BRINDLE_JOBS | CPU count | Same as --jobs. BRINDLE_LOG | info | One of error, warn, info, debug. NO_COLOR | — | Any value disables colour output.
   Layout: Same table style. Variable names in amber mono, nowrap.
   Motion: None.

## Assets
- font: JetBrains Mono (400, 500, 700) via the @fontsource/jetbrains-mono npm package, imported in src/main.tsx and bundled by Vite. OFL-1.1. List it in ASSETS.md.
- font: IBM Plex Sans (400, 500, 600) via the @fontsource/ibm-plex-sans npm package, imported in src/main.tsx. OFL-1.1. List it in ASSETS.md.
- icon: lucide-react (ISC) only: Search, Menu, X, Copy, Check, FileText, Info, TriangleAlert, Terminal, Settings2, ArrowUp. 14–16px, strokeWidth 1.75. No brand icons (no GitHub or other logo glyphs). List it in ASSETS.md.
- image: No bitmap images. The only graphic is public/favicon.svg, drawn in code: a 32×32 amber (#f5a524) rounded square with '>_' in #0d0c0a. Terminal and code windows, dots, rules and tree glyphs are all HTML, CSS or text.

## Don'ts
- No backend of any kind: no server code, API routes, databases, auth, analytics or third-party APIs. Search runs fully in the browser over the in-memory index.
- No forms that submit anywhere. The search input only filters locally.
- Self-host every font through Fontsource. Never load from fonts.googleapis.com, fonts.gstatic.com or any other font CDN.
- No CDN <script> or <link> tags. Every script, font, icon and image is bundled locally.
- Production build must be minified with no source maps (build.sourcemap false) and must not copy src/ into dist/.
- Use relative asset paths (Vite base './'). Use hash routing only (#/getting-started, #/commands, #/configuration). Any link to a file points to ./index.html, never to a bare directory.
- Keep dist/ under 20 MB, and the site must have zero console errors at 1440×900 and 390×844. If the clipboard API is unavailable, fall back to a hidden textarea and execCommand('copy') inside try/catch, so it never throws.
- Respect prefers-reduced-motion: no typing animation, no caret blink, no fades, slides or smooth scrolling.
- Copy buttons copy only the command lines, with the leading '$ ' stripped and output lines excluded, joined by newlines.
- Do not use the '/' shortcut while the user is typing in an input, textarea or contenteditable.
- No docs framework (Docusaurus, VitePress, Nextra, Starlight, Mintlify or similar), no router library, no search library, no syntax-highlighting library, and no code or components copied from Aceternity UI, Tailwind Plus/Tailwind UI or any docs theme.
- Do not use any real CLI tool's name, logo, ASCII-art banner or mascot, and do not copy command names, flags or prose from real documentation sites. All content is invented for [BRAND].
- Do not reproduce the exact palette or branding of any existing terminal app or docs brand. Use only the colours in this spec, with amber as the single accent.
- No commercial or proprietary fonts, no brand logos and no icon sets containing brand marks.
- No real people, avatars, testimonials or screenshots.
- No SEO extras: no meta descriptions, Open Graph tags, JSON-LD or sitemaps. Only <title>[BRAND] docs</title> and the favicon.
- Keep all copy in src/content.ts. When variable values change, rewrite that file's copy to match. Do not hard-code text in components.
- Do not change the stack (Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + lucide-react + Fontsource) unless the user asks.

---
— Prompt by VibeFather · https://vibefather.ai/t/terminal-style-docs-site · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
