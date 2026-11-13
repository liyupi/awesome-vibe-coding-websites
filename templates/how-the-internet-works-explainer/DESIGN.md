---
name: "How the Internet Works Explainer"
colors:
  ink: "#0A1222"
  panel: "#0F1A30"
  raised: "#15233F"
  grid: "#1F2E4D"
  hairline: "#2B3C61"
  fog: "#E6ECF7"
  haze: "#95A3BF"
  paper: "#F2ECDF"
  paper_ink: "#18202F"
  paper_muted: "#5A6274"
  paper_rule: "#DDD3C0"
  signal: "#34E2F2"
  amber: "#F4A93B"
  loss: "#FF6B81"
typography:
  display_hero_headline_64_68px_desktop_40_44px_mobile_weight_600_tracking_0_02em_scene_headlines_40_46px_desktop_30_36px_mobile_weight_600_wordmark_17px_weight_600_stage_labels_in_the_rail_12px_weight_500_uppercase_tracking_0_08em: { family: "Space Grotesk Variable (@fontsource-variable/space-grotesk)", weights: [500, 600, 700] }
  text_hero_deck_21_32px_weight_400_beat_paragraphs_19_30px_desktop_17_27px_mobile_weight_400_emphasis_weight_600_glossary_definitions_16_25px: { family: "Source Serif 4 Variable (@fontsource-variable/source-serif-4)", weights: [400, 600] }
  mono_ip_addresses_ports_headers_dns_records_kickers_03_across_the_network_hop_and_latency_labels_inside_svg_11_12px_the_round_trip_timer_15px_weight_600_tabular_figures_callout_blocks_14_22px: { family: "IBM Plex Mono (@fontsource/ibm-plex-mono)", weights: [400, 500, 600] }
spacing: "8px base unit. Content container max-width 1280px with 32px side padding (16px on mobile). Scenes have 120px vertical padding on desktop and 72px on mobile, beats are spaced 60vh apart on desktop and 40svh on mobile. Inside cards use 20-30px padding; inside diagrams keep at least 24px between labels and edges."
radius: "Diagram panels 20px, hero visual card and recap panel 24px, reading cards 16px (14px mobile), callouts and inputs 10px, glossary cards 14px, buttons, chips and the timer pill 999px, packet squares 3px, packet tiles 4px."
---

# How the Internet Works Explainer — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **ink** `#0A1222` — Page background (deep navy) and the header background at 88% opacity
- **panel** `#0F1A30` — Diagram panels and the hero visual card
- **raised** `#15233F` — Raised surfaces inside diagrams: laptop lid, server units, node fills, control bar
- **grid** `#1F2E4D` — Dot grid, landmass dots, inactive links
- **hairline** `#2B3C61` — 1px borders on panels, chips and rail separators
- **fog** `#E6ECF7` — Primary text on navy (headlines, hero, glossary terms)
- **haze** `#95A3BF` — Secondary text and mono labels on navy
- **paper** `#F2ECDF` — Reading cards (scene beats) and glossary cards
- **paper-ink** `#18202F` — Body text on paper
- **paper-muted** `#5A6274` — Kickers, captions and footnotes on paper
- **paper-rule** `#DDD3C0` — Rules and mono callout borders on paper; callout fill #E9E1D0
- **signal** `#34E2F2` — The one signal accent: packets, active paths, active rail stage, focus rings, primary buttons (text on it is ink)
- **amber** `#F4A93B` — Handshake and lock states: TCP arrows, TLS messages, certificate card, lock badge, cache-hit badges
- **loss** `#FF6B81` — Dropped packets, failed lookups and retransmit labels only

## Typography
- **Display: hero headline 64/68px desktop, 40/44px mobile, weight 600, tracking -0.02em; scene headlines 40/46px desktop, 30/36px mobile, weight 600; wordmark 17px weight 600; stage labels in the rail 12px weight 500 uppercase tracking 0.08em** — Space Grotesk Variable (@fontsource-variable/space-grotesk) (OFL), weights 500/600/700. Self-host the font files.
- **Text: hero deck 21/32px weight 400; beat paragraphs 19/30px desktop, 17/27px mobile, weight 400; emphasis weight 600; glossary definitions 16/25px** — Source Serif 4 Variable (@fontsource-variable/source-serif-4) (OFL), weights 400/600. Self-host the font files.
- **Mono: IP addresses, ports, headers, DNS records, kickers ('03 · Across the network'), hop and latency labels inside SVG (11-12px), the round-trip timer (15px weight 600, tabular figures), callout blocks 14/22px** — IBM Plex Mono (@fontsource/ibm-plex-mono) (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Content container max-width 1280px with 32px side padding (16px on mobile). Scenes have 120px vertical padding on desktop and 72px on mobile, beats are spaced 60vh apart on desktop and 40svh on mobile. Inside cards use 20-30px padding; inside diagrams keep at least 24px between labels and edges.
- Radius: Diagram panels 20px, hero visual card and recap panel 24px, reading cards 16px (14px mobile), callouts and inputs 10px, glossary cards 14px, buttons, chips and the timer pill 999px, packet squares 3px, packet tiles 4px.

## Motion
- Scene structure uses CSS position: sticky for the diagram (not GSAP pin), and GSAP ScrollTrigger only to detect which beat is active. One ScrollTrigger per beat card: start 'top 65%', end 'bottom 65%', onToggle when isActive sets that scene's beat index (0-2). A beat change runs a GSAP timeline (0.7s, ease 'power3.inOut') from the current diagram state to that beat's target state with overwrite 'auto', so scrolling back up reverses cleanly.
- Beat cards: inactive cards sit at opacity 0.45; the active card goes to opacity 1 and translates from y 12px to 0 over 0.4s 'power2.out'.
- Packets: a 12x12px signal-colored rounded square (rx 3) with a 3px ink stripe across its top third (the 'header'), moved along SVG paths with a GSAP tween on a proxy {t: 0 → 1} that calls path.getPointAtLength(t * length) on update; ease 'none' between nodes, 0.12s pause at each router where the node ring pulses (scale 1 → 1.6, opacity 0.8 → 0 over 0.5s).
- Dashed trails: every active link is a 1.5px signal path with stroke-dasharray '3 6' revealed behind the packet using a second mask path whose stroke-dashoffset tweens from the path length to 0 in sync with the packet; once revealed, the dashes drift (stroke-dashoffset animates -18 per second, linear, infinite).
- Header round-trip timer counts up or down to the new milestone with a GSAP tween over 0.6s 'power2.out', rounding to whole milliseconds; the active rail packet dot slides between stage stops over 0.5s 'power3.inOut'.
- Hero: kicker, headline, deck and buttons fade up 16px in sequence (stagger 0.08s, 0.6s each) on load; the URL in the hero laptop types in at 32ms per character with a 2px signal caret blinking (steps(1) 1s); the hero packet loops along its path every 3.2s forever.
- Lock: the TLS lock is drawn in SVG; its shackle translates from y -6px (open, rotated -18deg around the right leg) to closed over 0.5s 'back.out(2)' and the badge flashes amber once.
- Micro-interactions: buttons and chips lift 1px on hover with a 150ms transition; focus-visible gets a 2px signal outline at 2px offset; segmented controls slide a raised thumb under the active option over 0.25s.
- prefers-reduced-motion: no typing, no looping packets, no drifting dashes, no tweens, no sticky diagrams. Each scene renders its diagram in the final beat state as a normal block after the intro text, beats follow as plain cards, and every control still works with instant (0s) updates.

## Imagery
No photographs and no raster images. Everything visual is inline SVG drawn in code: a neutral, generic laptop (rounded lid, plain window frame with one address field, no logo, no traffic-light buttons, no recognizable OS or browser chrome), a generic server rack (stacked units with LED dots), router nodes (6px circles with a 1.5px ring), an abstract dotted landmass map generated from math (dots on a grid kept inside a few overlapping ellipses with a sine-wobble edge, never traced from real geography), sequence diagrams, packet tiles and a simple mock web page on the laptop screen. Strokes are 1.5px, corners rounded, palette limited to the tokens above. The packet is always an abstract rounded square, never a character. Lucide icons appear only in UI controls.

## Tone
Calm, precise and friendly, like a good science editor: short sentences, everyday analogies used sparingly, exact numbers in monospace, no hype and no jokes at the reader's expense.

---
— Prompt by VibeFather · https://vibefather.ai/t/how-the-internet-works-explainer · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
