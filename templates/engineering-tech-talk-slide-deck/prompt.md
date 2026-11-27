# Engineering Tech Talk Slide Deck

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A dark-aesthetic 12-slide conference engineering talk deck titled '[TALK_TITLE]' by [SPEAKER_NAME] on scaling [BRAND]'s real-time event pipeline, featuring clickable packet-flow architecture, p99 latency charts, syntax-highlighted code diffs with line callouts, and interactive benchmarks.

- Audience: Backend engineers, SREs, distributed systems architects, and technical conference attendees.
- Goal: Walk an engineering audience clearly from production bottleneck through architecture redesign, code-level optimizations, verified benchmarks, and hard-won post-mortem lessons.
- Tone: Direct, technically rigorous, candid, zero-fluff engineering voice.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: lucide-react (ISC), @fontsource/space-grotesk (OFL), @fontsource/inter (OFL), @fontsource/jetbrains-mono (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/space-grotesk (500, 600, 700), @fontsource/inter (400, 500, 600), and @fontsource/jetbrains-mono (400, 500, 600) locally in src/main.tsx.
  - Store all talk copy, architecture stages, code diff tokens, benchmark datasets, and speaker notes in src/data/talkDeck.ts.
  - Implement hand-rolled token syntax highlighting for TypeScript/Rust-like pseudo-code diffs without external CDN prism scripts.
  - Configure @media print in src/index.css with @page { size: landscape; margin: 0; } preserving readable dark-or-high-contrast slide cards one per page, hiding navigation chrome.

## Variables
- [BRAND] — System or platform name (default: "FluxPipe"). Fictional real-time event pipeline name
- [TALK_TITLE] — Conference talk title (default: "Scaling Real-Time Event Pipelines to 1.4M msg/sec"). Main opening slide headline
- [SPEAKER_NAME] — Speaker name (default: "Marcus Chen"). Fictional engineer presenting the talk
- [SPEAKER_ROLE] — Speaker title (default: "Staff Systems Engineer"). Role subtitle on title and closing slides
- [HANDLE] — Speaker handle / domain (default: "@mchen.systems"). Fictional handle shown on cover and Q&A slide
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/engineering-tech-talk-slide-deck in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Obsidian Stage `#0B1016` — Primary dark presentation canvas
- Terminal Surface `#121A24` — Elevated code blocks, diagram panels, and cards
- Terminal Mint `#34D399` — Added code lines, throughput wins, healthy nodes, and active packet flow
- Electric Cyan `#38BDF8` — Primary technical highlights, callout badges, and active diagram stage
- Muted Slate `#94A3B8` — Secondary metadata, comments, and axis labels
- Crisp Frost `#F1F5F9` — High-contrast headlines and primary code text
- Diff Rose `#FB7185` — Removed code lines, bottlenecks, and latency spikes

### Typography
- Display headings: Space Grotesk (OFL), weights 500/600/700
- Body copy: Inter (OFL), weights 400/500/600
- Code diffs, telemetry, and shortcuts: JetBrains Mono (OFL), weights 400/500/600

### Layout & motion
- Spacing: Desktop uses a centered 16:9 dark stage (max 1320px, 44px padding) with subtle 1px #1E293B borders and a 56px bottom status bar. Mobile (<768px) stacks panels vertically with horizontally scrollable code blocks only inside their own bordered container (zero page horizontal overflow).
- Radius: 10px for code windows and telemetry panels, 6px for node boxes and toggles, 999px for keyboard shortcut pills.
- Motion: Fast 180ms slide transitions with subtle horizontal translate; disabled under prefers-reduced-motion.
- Motion: Animated SVG packet dots flowing along the highlighted pipeline path on Slide 04.
- Motion: Interactive hover/click transitions on code diff line callouts and benchmark payload toggles.
- Motion: All content visible by default; no clip-path reveal traps.
- Imagery: Pure code-drawn technical graphics: subtle dot-grid dark canvas, interactive SVG distributed pipeline topology, p99 latency & throughput SVG charts, terminal code windows, and a deterministic geometric SVG QR pattern on the Q&A slide.

## Pages & Sections
### [BRAND] — [TALK_TITLE] (`index.html`)
1. **Dark Presentation Shell, Grid (G) & Speaker Notes (N)** — Minimal top bar with terminal prompt badge (`$ [BRAND] --slides`), active chapter tag, and Print PDF action. Fixed bottom status bar styled like a crisp tmux/terminal bar showing Prev/Next, slide index `01 / 12`, clickable 12-segment cyan/mint progress bar, Overview Grid (`G`), Speaker Notes + Talk Timer (`N`), and Fullscreen (`F`). Pressing G displays a 4x3 dark slide map; pressing N toggles presenter notes + running talk timer.
   Layout: Full-viewport 16:9 centered canvas on desktop; stacked responsive deck on mobile (<768px) with touch swipe.
2. **Slide 01 — Dramatic Opening Title Slide** — Left (7 cols): terminal eyebrow pill `SYSTEMS TRACK · 35 MIN`, bold headline '[TALK_TITLE]', subtitle 'How we cut p99 tail latency by 86% inside [BRAND] without adding cluster nodes', and speaker line '[SPEAKER_NAME] · [SPEAKER_ROLE] · [HANDLE]'. Right visual anchor (5 cols): live-styled SVG telemetry preview card showing animated packet stream rings (`1.42M msg/s` in terminal mint, `4.8 ms p99` in electric cyan, `0 dropped frames`), giving the opening slide strong technical visual authority.
   Layout: 7/5 asymmetric split on an obsidian subtle dot-grid background; stacked on mobile.
3. **Slide 02 — Scale & Bottleneck Stats** — Headline 'When Growth Broke Our Original Pipeline'. Four bold telemetry cards highlighting the failure wall: Peak Burst Rate (1.4M events/sec, 3.8x baseline), p99 Ingest Latency (340 ms — 7x SLO breach), GC Pause Spikes (180 ms stop-the-world stalls), and Coordinator CPU Saturation (94% on partition leader). Below: a clean SVG timeline strip showing how latency degraded nonlinearly past 450k msg/s.
   Layout: 4-column metric strip above an inline SVG saturation curve.
4. **Slide 03 — Root Cause Anatomy** — Headline 'Three Hidden Bottlenecks Under the Hood'. Three numbered diagnostic panels: 01 Per-Message Heap Allocations (2.8 GB/s churn triggering GC), 02 Global Mutex on Partition Map (thread contention across 32 cores), and 03 Unbounded Consumer Prefetch (head-of-line blocking during downstream slowdowns), each with a crisp flamegraph-style horizontal SVG bar breakdown.
   Layout: 3-column diagnostic grid with color-coded SVG flame strips.
5. **Slide 04 — Interactive Distributed Architecture Diagram** — Headline 'The Redesigned Zero-Copy Pipeline'. Interactive SVG architecture diagram with 5 clickable stages: Edge Ingest -> Shard Router -> Lock-Free Ring Buffer -> Batch Compactor -> Columnar Sink. Clicking any stage illuminates its active packet flow path in terminal mint (#34D399) and electric cyan (#38BDF8) and updates the live stage telemetry inspector (Throughput, Memory Model, Backpressure Policy, Failure Recovery).
   Layout: Full-width interactive SVG topology canvas above a 4-field stage telemetry bar; compact stage tabs on mobile.
   Motion: Animated SVG dashes along active edges when a stage is selected.
6. **Slide 05 — Before vs After: p99 Latency & Throughput Charts** — Headline 'Measured Impact in Production Shadow Traffic'. Two side-by-side code-drawn SVG charts: Left chart compares p50 / p95 / p99 / p99.9 latency (Before in rose #FB7185 vs After in terminal mint #34D399, dropping p99 from 340ms to 4.8ms). Right chart shows sustained throughput ramp across 4, 8, 16, and 32 worker threads scaling linearly to 1.42M msg/s.
   Layout: 2-column chart grid with crisp legends and hover value callouts; stacked on mobile.
7. **Slide 06 — Code Diff Walkthrough 1: Lock-Free Ring Buffer** — Headline 'Code Deep-Dive: Eliminating Mutex Contention'. Split terminal code window displaying a syntax-highlighted unified diff (red `-` lines for mutex-guarded push, mint `+` lines for atomic compare-and-swap slot reservation in [BRAND]). Right sidebar offers 3 clickable line callouts (Lines 4–7 Cache-Line Padding, Lines 12–16 Atomic Slot Claim, Lines 19–22 Zero-Copy Slice Hand-Off) that highlight the matching lines inside the code block.
   Layout: 8/4 code-plus-callouts split on desktop; stacked on mobile with internal code horizontal scroll.
8. **Slide 07 — Code Diff Walkthrough 2: Adaptive Backpressure** — Headline 'Code Deep-Dive: Credit-Based Flow Control'. Syntax-highlighted code diff comparing naive unbounded channel sends against watermark-driven credit grants with exponential jitter. Interactive callout pills on the right explain High-Watermark Pause, Shedding Non-Critical Telemetry, and Deterministic Drain on Shutdown.
   Layout: 8/4 split mirroring Slide 06 for strong visual rhythm.
9. **Slide 08 — Live Toggleable Benchmark Comparison** — Headline 'Benchmarking Across Real Payload Profiles'. Interactive toggle strip switching between 3 payload sizes: Small Telemetry (256 B), JSON Event (2 KB), and Batched Trace (16 KB), plus a metric selector (Throughput msg/s vs p99 Latency ms). Dynamically updates an SVG horizontal bar comparison across Legacy Queue, Partitioned Worker, and [BRAND] Ring Engine with exact deltas and CPU efficiency badges.
   Layout: Top interactive payload & metric controls above a wide animated SVG comparison chart and 3 takeaway stat pills.
10. **Slide 09 — Rollout Strategy: Shadow Mirroring & Canary Gates** — Headline 'Shipping a Core Rewrite Without Dropping an Event'. Four sequential stage cards connected by cyan chevrons (1% Shadow Replay -> Checksum Parity Diff -> 10% Canary Region -> 100% Automated Cutover) with automated rollback trigger thresholds clearly listed beneath each gate.
   Layout: 4-step horizontal pipeline flow on desktop; vertical timeline cards on mobile.
11. **Slide 10 — Post-Mortem Lessons Learned** — Headline 'What Still Bit Us in Production'. Four candid engineering lessons in a 2x2 grid: (1) False Sharing on Atomic Counters, (2) Clock Skew Breaking Windowed Deduplication, (3) Oversized Jumbo Batches Starving Heartbeats, and (4) Why Synthetic Benchmarks Lied About Tail Jitter. Each card lists Symptom, Root Cause, and Permanent Fix.
   Layout: 2x2 dark surface grid with rose symptom tags and mint fix callouts.
12. **Slide 11 — Key Takeaways & Architecture Checklist** — Headline 'Five Rules to Take Back to Your Team'. Numbered 1–5 bold engineering principles with crisp mono sub-rules (Measure p99.9 Before Rewriting, Bound Every Queue Explicitly, Pre-Allocate on the Hot Path, Separate Control From Data Planes, Automate Shadow Parity Verification).
   Layout: Structured vertical list with large cyan mono indices and subtle hairline dividers.
13. **Slide 12 — Q&A, Resources & Geometric QR Slide** — Headline 'Questions? Let’s Dig Into the Traces.'. Left (7 cols): speaker recap ([SPEAKER_NAME], [SPEAKER_ROLE], [HANDLE]), 3 copyable resource rows (Benchmark Harness Repo, Architecture RFC Notes, Deck Print Handout) with one-click copy confirmation. Right (5 cols): crisp code-drawn SVG geometric QR-style badge framed in electric cyan and terminal mint with caption 'Scan for demo repo & slides'.
   Layout: 7/5 closing split on obsidian grid; stacked cleanly on mobile.

## Assets
- icon: Install lucide-react (ISC) for terminal badges, controls, copy feedback, and system icons.
- font: Self-host Space Grotesk, Inter, and JetBrains Mono via @fontsource packages (OFL).
- image: All architecture diagrams, latency/throughput charts, flame bars, and geometric QR pattern are drawn in inline SVG. Zero external images.

## Don'ts
- No backend, CDN scripts, Prism/Highlight.js CDN links, or Google Fonts links.
- No real cloud vendor names, messaging broker trademarks, or real conference logos.
- No source maps in production build and always use base: './'.
- No uncontained horizontal overflow on 390x844 mobile (code windows scroll internally).
- No dates or real-world conference years; keep slides evergreen.
- No clip-path reveal traps; every active slide renders immediately.
- No mention of VibeFather or competitors except the optional [CREDIT] slot.

---
— Prompt by VibeFather · https://vibefather.ai/t/engineering-tech-talk-slide-deck · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
