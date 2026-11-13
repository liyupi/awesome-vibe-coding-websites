---
name: "Virtual Pet Companion"
colors:
  midnight_plum: "#241D31"
  deep_plum: "#372A49"
  warm_paper: "#FFF3D6"
  muted_lavender: "#B9AEC5"
  meadow_leaf: "#8AC926"
  berry_coral: "#FF7B6B"
  bubble_sky: "#69C3D4"
  dream_lavender: "#A78BFA"
  coin_honey: "#F6C453"
  habitat_mint: "#BFE3C0"
  pixel_line: "#574665"
typography:
  wordmark_pet_name_view_headings_button_labels_scores_and_short_status_labels: { family: "Silkscreen", weights: [400, 700] }
  body_copy_instructions_activity_messages_dialogs_meter_context_and_mobile_navigation_labels: { family: "Nunito Variable", weights: [400, 600, 700, 800] }
spacing: "Use a 4px base grid and an 8px dominant rhythm. The app maximum width is 1280px with 24px desktop gutters and 12px mobile gutters. Header height is 64px desktop and 56px mobile. Main desktop top padding is 24px; the home grid columns have a 20px gap. Scene and console padding is 16px or 20px. Keep pointer targets at least 48×48px with at least 8px separation. On mobile use 12px panel padding and avoid squeezing four action buttons into one narrow row."
radius: "Use a crisp pixel silhouette: 12px outer app panels, 8px scene and canvas frames, 4px buttons and meter cards, and 3px Midnight Plum borders. Primary buttons have a hard 4px 4px 0 Midnight Plum shadow that compresses to 1px 1px on press. Avoid glass, soft drop shadows, pill overload, and generic rounded bento cards."
---

# Virtual Pet Companion — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Midnight Plum** `#241D31` — Page background, pixel outlines, and dark text on bright buttons.
- **Deep Plum** `#372A49` — Header, console panels, dialogs, and secondary dark surfaces.
- **Warm Paper** `#FFF3D6` — Primary text on dark surfaces, cards, labels, and sprite highlights.
- **Muted Lavender** `#B9AEC5` — Secondary text and inactive icons on dark surfaces.
- **Meadow Leaf** `#8AC926` — Primary actions, hunger meter, success states, and habitat foliage.
- **Berry Coral** `#FF7B6B` — Play action, mood meter, cheeks, and friendly alerts.
- **Bubble Sky** `#69C3D4` — Clean action, cleanliness meter, water, and cool highlights.
- **Dream Lavender** `#A78BFA` — Rest action, energy meter, night details, and selected outfit accents.
- **Coin Honey** `#F6C453` — Currency, unlock prices, rewards, and rare game objects.
- **Habitat Mint** `#BFE3C0` — Default habitat background and quiet illustrated surfaces.
- **Pixel Line** `#574665` — Panel borders, dividers, meter tracks, and inactive controls.

## Typography
- **Wordmark, pet name, view headings, button labels, scores, and short status labels** — Silkscreen (OFL), weights 400/700. Self-host the font files.
- **Body copy, instructions, activity messages, dialogs, meter context, and mobile navigation labels** — Nunito Variable (OFL), weights 400/600/700/800. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base grid and an 8px dominant rhythm. The app maximum width is 1280px with 24px desktop gutters and 12px mobile gutters. Header height is 64px desktop and 56px mobile. Main desktop top padding is 24px; the home grid columns have a 20px gap. Scene and console padding is 16px or 20px. Keep pointer targets at least 48×48px with at least 8px separation. On mobile use 12px panel padding and avoid squeezing four action buttons into one narrow row.
- Radius: Use a crisp pixel silhouette: 12px outer app panels, 8px scene and canvas frames, 4px buttons and meter cards, and 3px Midnight Plum borders. Primary buttons have a hard 4px 4px 0 Midnight Plum shadow that compresses to 1px 1px on press. Avoid glass, soft drop shadows, pill overload, and generic rounded bento cards.

## Motion
- The pet idles on a two-frame steps(1,end) loop with one logical pixel of vertical movement every 760ms, a blink every 4.2 seconds, and occasional habitat prop movement. Keep the face and equipped accessory aligned in every frame.
- Feed, Play, Clean, and Rest select dedicated sprite states for 900ms. Feed drops two snack pixels toward the bowl, Play bounces a small ball once, Clean raises six square bubbles, and Rest dims the habitat by 18 percent and shows two small Z glyphs. Action feedback never blocks the next view navigation.
- Meter fills update over 180ms with steps(6,end), while numeric values update immediately. Buttons depress with the hard-shadow compression described above. Toasts remain for 2.4 seconds and never cover the pet or primary controls.
- Hash-view content crossfades for 140ms without route-based scroll-jacking. Wardrobe equips crossfade only the accessory layer for 120ms. Unlocking emits eight tiny square sparkles for 500ms, never full-screen confetti.
- Mini-games use continuous motion only after explicit Start. Reduced-motion mode removes decorative particles, easing, screen shake, and idle bobbing; game objects move in readable 10fps discrete steps and all results remain legible.
- Under prefers-reduced-motion outside active games, use static sprite poses, instant meter and accessory changes, no floating hearts or sparkles, and no automatic scene animation. Never flash more than three times per second.

## Imagery
Draw every visual asset in code as original pixel art. Build the habitat as inline SVG on a 160×90 logical grid with shape-rendering='crispEdges', integer coordinates, hard-edged rects and polygons, and no raster texture. Build the pet on a separate 32×32 grid rendered at least 192×192px on desktop. Default [PET_NAME] is a moss bunny with an original square body, two uneven leaf ears, a cream muzzle, coral cheek pixels, and a tiny square tail; do not derive its silhouette from an existing character. Create idle, blink, happy, eating, playing, washing, resting, and needy poses plus independent 32×32 accessory overlays. The default habitat includes a large window, leafy arch, food bowl, toy ball, washing nook, shelf, rug, and small plants. Rewrite and redraw species-specific features, habitat motifs, and falling snacks when PET_KIND or HABITAT changes. Use the same original pet and equipped overlay in home, arcade, and wardrobe. No people, real likenesses, stock images, downloaded sprite sheets, logos, branded props, or text baked into artwork.

## Tone
Warm, playful, concise, and gently funny without baby talk, guilt, urgency, or punitive mechanics. Use clear US English labels and specific variable-aware messages. The pet can be sleepy or messy but never dies, gets ill, or shames the visitor.

---
— Prompt by VibeFather · https://vibefather.ai/t/virtual-pet-companion · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
