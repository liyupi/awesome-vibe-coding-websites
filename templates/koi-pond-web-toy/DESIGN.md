---
name: "Koi Pond Web Toy"
colors:
  ink_teal: "#0E3B43"
  vermilion: "#F2542D"
  cream: "#F5EFE0"
  gold: "#E0B04A"
  deep_water: "#082A31"
  night_water: "#061C24"
  ink: "#10262B"
  pad_green: "#2E6F5E"
  pad_light: "#4C9A7A"
  stone: "#6F8480"
  bridge_wood: "#7A4A2E"
  blush: "#F6B8A8"
  ice: "#CFE6E4"
  amber: "#C98F3A"
typography:
  display_the_brand_title_season_names_timer_digits_the_session_complete_heading_weight_500_for_large_sizes_700_for_the_small_wordmark_a_mincho_serif_with_softened_ink_bled_corners: { family: "Shippori Mincho B1", weights: [500, 700] }
  text_tagline_gesture_hints_dock_labels_tooltips_buttons_labels_are_13px_weight_600_uppercase_letter_spacing_0_06em_the_tagline_is_17px_weight_400_line_height_1_45: { family: "Instrument Sans Variable", weights: [400, 500, 600] }
spacing: "No page grid: the scene fills the viewport. Interface elements sit on an 8px scale, inset 56px from the edges on the wide layout and 20px on the tall layout, plus env(safe-area-inset-*) on every side. Dock height 56px with 6px inner padding and 4px gaps. Every control is at least 44px tall; on phones dock cells may narrow to 36px wide but stay 48px tall. Scene sizes use one unit u = sqrt(viewportWidth × viewportHeight) / 1140, so u is 1px at 1440×900 and 0.5px at 390×844."
radius: "Dock, buttons and tooltips are full pills (999px). Cards are 20px. The focus progress line has square ends. The only interface shadow is 0 12px 40px rgba(4, 22, 27, 0.35) under the dock and cards; text over the water gets text-shadow 0 1px 18px rgba(8, 42, 49, 0.55) instead of a panel."
---

# Koi Pond Web Toy — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Ink Teal** `#0E3B43` — The water, the page background and text on gold or cream surfaces. Hard-coded exactly; it must cover most of the first screen.
- **Vermilion** `#F2542D` — Koi bodies and patches, the lacquered rail along the bridge edge, lantern rims, the blush on lotus tips. Hard-coded exactly; never used for body text.
- **Cream** `#F5EFE0` — All interface text and icons, koi bodies and fins, petals, snow, ripple rings and caustic light. Hard-coded exactly.
- **Gold** `#E0B04A` — Ginkgo leaves, gold koi, lantern and firefly light, bridge post caps, the Focus button, active toggle marks and the focus progress line. Hard-coded exactly.
- **Deep Water** `#082A31` — Vignette toward the corners, floor mottling, koi shadows, the tint behind the dock.
- **Night Water** `#061C24` — Water color in night mode and the night tint drawn over the scene.
- **Ink** `#10262B` — Koi eyes, speckles and dorsal ridge, gaps between bridge planks.
- **Pad Green** `#2E6F5E` — Lily pad base and moss on stones. Stays close to the water hue so the four core colors lead.
- **Pad Light** `#4C9A7A` — Lily pad veins and the fresh spring pads.
- **Stone** `#6F8480` — Stepping stones, with #8FA39D speckles on top.
- **Bridge Wood** `#7A4A2E` — Bridge planks, alternating plus and minus 5 percent lightness.
- **Blush** `#F6B8A8` — Base of spring petals and tips of lotus petals (a mix of cream and vermilion).
- **Ice** `#CFE6E4` — Winter ice plates at low opacity and frost rims on pads.
- **Amber** `#C98F3A` — Darker ginkgo leaves and food pellets.

## Typography
- **Display: the [BRAND] title, season names, timer digits, the session-complete heading. Weight 500 for large sizes, 700 for the small wordmark. A mincho serif with softened, ink-bled corners.** — Shippori Mincho B1 (OFL), weights 500/700. Self-host the font files.
- **Text: tagline, gesture hints, dock labels, tooltips, buttons. Labels are 13px, weight 600, uppercase, letter-spacing 0.06em; the tagline is 17px, weight 400, line-height 1.45.** — Instrument Sans Variable (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: No page grid: the scene fills the viewport. Interface elements sit on an 8px scale, inset 56px from the edges on the wide layout and 20px on the tall layout, plus env(safe-area-inset-*) on every side. Dock height 56px with 6px inner padding and 4px gaps. Every control is at least 44px tall; on phones dock cells may narrow to 36px wide but stay 48px tall. Scene sizes use one unit u = sqrt(viewportWidth × viewportHeight) / 1140, so u is 1px at 1440×900 and 0.5px at 390×844.
- Radius: Dock, buttons and tooltips are full pills (999px). Cards are 20px. The focus progress line has square ends. The only interface shadow is 0 12px 40px rgba(4, 22, 27, 0.35) under the dock and cards; text over the water gets text-shadow 0 1px 18px rgba(8, 42, 49, 0.55) instead of a panel.

## Motion
- Every movement has a physical cause (water, wind, a fish deciding something) or marks a state change. Nothing loops just to look busy, and no two neighbours share a phase: every period and delay is drawn from a range by the seeded generator.
- Two interface easings only. Soft out: cubic-bezier(0.22, 1, 0.36, 1) for things arriving. In-out: cubic-bezier(0.65, 0, 0.35, 1) for cross-fades between states. Interface durations: 240ms for hover and reveal, 360ms for the season thumb, 600 to 900ms for the title and focus fades.
- Koi swim in a glide-and-kick rhythm: 1.6 to 3.2s of tail beats, then 0.8 to 1.6s of gliding with the body wave at 35 percent amplitude while speed decays by a fifth. Speed changes follow a critically damped spring with a 0.8s time constant, and turning is capped at 70 degrees per second at cruise, so turns are arcs, never spins.
- Ripples expand with an ease-out cubic radius and fade with an exponential opacity curve over 2.6s: fast and bright at birth, slow and faint at the end.
- Season changes are 2.4s in-out cross-fades with staggered parts; night is 1.8s in-out; rain ramps in over 2.5s and out over 4s. Interrupting a transition continues from the current blended state, never snapping.
- The simulation runs on real elapsed time with the frame delta clamped to 1/30s, pauses while the tab is hidden, and follows the reduced-motion rules in the last section.

## Imagery
Everything is drawn in code as flat, painterly shapes: solid fills with one lighter and one darker tone, soft offset shadows, no outlines, no photo textures, no sprites. Depth comes from layering (floor and caustics, fish and their shadows, surface plants and structures, ripples and light on top). The first screen's visual anchor is the scene itself: vermilion and gold on ink-teal with a large cream title.

## Tone
Quiet, unhurried and precise, like an ink-and-wash painting that happens to be alive. Copy is short, lower-key and concrete. No exclamation marks, no wellness slogans.

---
Inspired by Code-drawn koi pond web toy with switchable seasons, night mode and a focus timer by @ann_nnng — https://www.24vids.com/video/never-seen-a-model-this-powerfulclaude-fable-5-just-helped-me-build-this-whole-p-tw-2072648308846370897
— Prompt by VibeFather · https://vibefather.ai/t/koi-pond-web-toy · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
