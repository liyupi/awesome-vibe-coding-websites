---
name: "How the Human Heart Works"
colors:
  aubergine_ground: "#16081A"
  aubergine_panel: "#26102C"
  hairline: "#4B2A55"
  cobalt: "#1F4BFF"
  cobalt_wall: "#0F2A9E"
  cobalt_text: "#7F9CFF"
  scarlet: "#FF1F3D"
  scarlet_wall: "#A80F2A"
  scarlet_text: "#FF4A5E"
  muscle: "#6A1B45"
  muscle_line: "#8E2A5A"
  phosphor: "#39FF88"
  leaflet: "#FFE6D6"
  lung_tissue: "#2A1033"
  text: "#F8EEF4"
  muted_text: "#C9B6CE"
typography:
  display_h1_and_section_headings_sentence_case_line_height_1_02_h1_is_84px_on_desktop_and_42px_on_mobile_section_headings_are_56px_and_34px: { family: "Gloock", weights: [400] }
  text_body_at_18px_with_line_height_1_6_step_captions_buttons_at_15px_weight_600: { family: "Hanken Grotesk Variable", weights: [400, 500, 600] }
  instrument_eyebrows_diagram_labels_readouts_and_table_numbers_12_14px_uppercase_with_0_08em_tracking_for_labels_the_rate_readout_is_64px_weight_500: { family: "Martian Mono Variable", weights: [400, 500] }
spacing: "8px base. Page max-width 1320px with 40px gutters on desktop and 16px on mobile. Sections have 120px vertical padding on desktop and 72px on mobile. Sections are divided by a 1px #4B2A55 line, not by alternating backgrounds."
radius: "Cards and step panels 14px. Buttons and chips are pills. The trace strip is square and runs edge to edge."
---

# How the Human Heart Works — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Aubergine ground** `#16081A` — Page background and hero ground; the text color on scarlet and phosphor fills
- **Aubergine panel** `#26102C` — Cards, step panels, the trace strip background
- **Hairline** `#4B2A55` — Borders, dividers, slider ticks
- **Cobalt** `#1F4BFF` — Oxygen-poor blood fill in chambers and vessels
- **Cobalt wall** `#0F2A9E` — Walls of cobalt vessels
- **Cobalt text** `#7F9CFF` — Cobalt-side text on dark grounds; light particles
- **Scarlet** `#FF1F3D` — Oxygen-rich blood fill in chambers and vessels
- **Scarlet wall** `#A80F2A` — Walls of scarlet vessels
- **Scarlet text** `#FF4A5E` — Scarlet-side text on dark grounds
- **Muscle** `#6A1B45` — Heart wall fill
- **Muscle line** `#8E2A5A` — Heart outline and fiber hatch
- **Phosphor** `#39FF88` — ECG trace, electrical spark, slider thumb, active states, primary CTA fill
- **Leaflet** `#FFE6D6` — Valve leaflets and hinge dots
- **Lung tissue** `#2A1033` — Lung fill, with a #6B4A78 outline
- **Text** `#F8EEF4` — Headings and body text
- **Muted text** `#C9B6CE` — Secondary text and captions

## Typography
- **Display: H1 and section headings, sentence case, line-height 1.02. H1 is 84px on desktop and 42px on mobile; section headings are 56px and 34px.** — Gloock (OFL), weights 400. Self-host the font files.
- **Text: body at 18px with line-height 1.6, step captions, buttons at 15px weight 600** — Hanken Grotesk Variable (OFL), weights 400/500/600. Self-host the font files.
- **Instrument: eyebrows, diagram labels, readouts and table numbers, 12–14px uppercase with 0.08em tracking for labels; the rate readout is 64px weight 500** — Martian Mono Variable (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base. Page max-width 1320px with 40px gutters on desktop and 16px on mobile. Sections have 120px vertical padding on desktop and 72px on mobile. Sections are divided by a 1px #4B2A55 line, not by alternating backgrounds.
- Radius: Cards and step panels 14px. Buttons and chips are pills. The trace strip is square and runs edge to edge.

## Motion
- Timing model in src/model.ts, in seconds, with t = 0 at the R peak of each beat: RR = 60 / rate; Ts = 0.16 + 0.12 * RR (systole); Td = RR - Ts (diastole); PR = 0.06 + 0.08 * min(1, RR); Tic = 0.05; Tir = min(0.07, 0.25 * Td); Tf = RR - PR - Ts - Tir (filling).
- Five phases in order: 1 Squeeze begins, 0 to Tic. 2 Ejection, Tic to Ts. 3 Relaxation, Ts to Ts + Tir. 4 Filling, Ts + Tir to RR - PR. 5 Atrial top-up, RR - PR to RR.
- Ventricle scale v: F = 0.74 + 0.22 * (1 - exp(-Tf / 0.05)) and E = F + 0.04. Phase 1 holds E. Phase 2 eases in-out from E to 0.74. Phase 3 holds 0.74. Phase 4 is 0.74 + 0.22 * (1 - exp(-tau / 0.05)), where tau is time since the phase began. Phase 5 eases out from F to E. At high rates filling is cut short, so the ventricle visibly fills less.
- Atrium scale a: 1 at all times except phase 5, where a = 1 - 0.12 * sin(pi * x) and x is progress through the phase from 0 to 1.
- Valve openness, 0 to 1. Inlet valves (tricuspid, mitral) ramp 1 to 0 over the first 0.03 s of phase 1, stay 0 through phases 2 and 3, ramp 0 to 1 over the first min(0.04, Tf) of phase 4, and stay 1 through phase 5. Outlet valves (pulmonary, aortic) ramp 0 to 1 over the first 0.03 s of phase 2, ramp 1 to 0 over the first min(0.03, Tir) of phase 3, and stay 0 otherwise.
- Trace, synthesized as a sum of gaussians A * exp(-((t' - c)^2) / (2 * s^2)), where t' is t wrapped into -RR/2 to RR/2. P: A 0.15, c -PR, s 0.025. Q: A -0.12, c -0.025, s 0.009. R: A 1.0, c 0, s 0.011. S: A -0.22, c 0.028, s 0.011. T: A 0.30, c Ts - 0.05, s 0.045.
- When the rate changes, keep the current fraction of the cycle (t / RR) so the beat never jumps. Slider input takes effect on the same frame.
- Electrical spark, using the wrapped t' of the trace: from t' = -PR - 0.02 to t' = -PR + 0.06 a 7-unit phosphor dot travels the atrial segment of the conduction line, in step with the P mark; from t' = -0.03 to t' = 0.04 it travels the septal segment and both branches, in step with QRS. The node dots flash and the line brightens from 0.25 to 1 opacity as the spark passes.
- Section reveals: headings and cards fade in and rise 16px over 0.5s via ScrollTrigger, once only. Buttons scale to 0.97 on press. Spotlight dimming transitions over 0.35s.
- prefers-reduced-motion: the clock never runs. Every diagram renders a static frame, the hero shows the frame for the mid-point of phase 2, the trace strip draws two static beats, particles are hidden, and Previous and Next buttons appear under the hero diagram to step through the five phases. Scroll steps still swap the spotlight and caption, with no transitions and the drop placed at the step's stop.

## Imagery
No photographs and no downloaded images. Everything is drawn in code as flat, confident anatomical shapes with a fine hatch on the muscle: the feel of a modern printed scientific plate, drawn fresh from the coordinates in this prompt, never traced from an atlas or textbook. For another [TOPIC], draw an equally simple cross-section on the same canvas with the same flat fills, tube walls, hatch, leaflet color and phosphor signal line.

## Tone
Clear, curious and exact, like a good teacher at a whiteboard. Short sentences and concrete verbs. No hype, no drama and no health advice.

---
— Prompt by VibeFather · https://vibefather.ai/t/how-the-human-heart-works · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
