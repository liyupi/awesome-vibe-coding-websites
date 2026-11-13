---
name: "Retro Desktop OS Portfolio"
colors:
  desktop: "#4F7E7A"
  desktop_dot: "#46716D"
  chrome: "#CBC5B7"
  highlight: "#FFFCF3"
  shade: "#6E695F"
  edge: "#24211C"
  cream: "#F3ECDD"
  cream_dim: "#E4DBC8"
  ink: "#1F1D1A"
  slate: "#24323A"
  stage: "#1A2228"
  idle: "#8F8A80"
  tangerine: "#FF6A2B"
  tangerine_deep: "#C94A16"
  plum_tint: "#6E5F78"
  olive_tint: "#6F7656"
typography:
  display_window_titles_about_headline_goodbye_screen_start_menu_banner: { family: "Pixelify Sans", weights: [400, 500, 700] }
  tiny_ui_labels_icon_labels_clock_tray_boot_progress_caption: { family: "Silkscreen", weights: [400] }
  body_text_tables_fields_boot_log_buttons: { family: "IBM Plex Mono", weights: [400, 500, 600] }
spacing: "4px base grid. Window body padding is 16px, title bar height 26px, taskbar height 40px on desktop and 52px on mobile, icon cells 96x88px. Body text is 14px with line-height 1.55. Table rows are 28px. Buttons are 28px tall with 12px horizontal padding."
radius: "0px everywhere. Every edge is square. Depth comes only from the 2px bevels and the hard 4px offset window shadow, never from blur or rounded corners."
---

# Retro Desktop OS Portfolio — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Desktop** `#4F7E7A` — Wallpaper base (default tint)
- **Desktop dot** `#46716D` — 2px pixel dots of the wallpaper pattern
- **Chrome** `#CBC5B7` — Window frames, taskbar, buttons, start menu (warm gray)
- **Highlight** `#FFFCF3` — Top/left bevel light edge
- **Shade** `#6E695F` — Inner bevel shadow
- **Edge** `#24211C` — Outer bevel dark edge, pixel icon outlines
- **Cream** `#F3ECDD` — Window bodies, text fields
- **Cream dim** `#E4DBC8` — Row hover, table header, status bars
- **Ink** `#1F1D1A` — Body text
- **Slate** `#24323A` — Active title bar, start menu banner, boot and goodbye backgrounds (with #141816)
- **Stage** `#1A2228` — Background of every looping preview
- **Idle** `#8F8A80` — Inactive title bars
- **Tangerine** `#FF6A2B` — The single hot accent: selection, primary buttons, close-hover, REC dot, progress blocks, preview highlights
- **Tangerine deep** `#C94A16` — Pressed state of accent buttons
- **Plum tint** `#6E5F78` — Alternate wallpaper tint 2
- **Olive tint** `#6F7656` — Alternate wallpaper tint 3

## Typography
- **Display: window titles, About headline, goodbye screen, start menu banner** — Pixelify Sans (OFL), weights 400/500/700. Self-host the font files.
- **Tiny UI labels: icon labels, clock, tray, boot progress caption** — Silkscreen (OFL), weights 400. Self-host the font files.
- **Body text, tables, fields, boot log, buttons** — IBM Plex Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: 4px base grid. Window body padding is 16px, title bar height 26px, taskbar height 40px on desktop and 52px on mobile, icon cells 96x88px. Body text is 14px with line-height 1.55. Table rows are 28px. Buttons are 28px tall with 12px horizontal padding.
- Radius: 0px everywhere. Every edge is square. Depth comes only from the 2px bevels and the hard 4px offset window shadow, never from blur or rounded corners.

## Motion
- Boot: log lines type in at 10ms per character with an 80ms pause between lines (about 2s total). Then a 24-block tangerine progress bar fills one block every 20ms, and the boot screen fades out over 250ms. A click or any key skips straight to the desktop. The boot plays once per session (sessionStorage key 'shell-booted') and never under reduced motion.
- Window open: Motion animates from opacity 0, scale 0.92 to opacity 1, scale 1 over 180ms with ease [0.2,0.8,0.2,1]. Close: to opacity 0, scale 0.96 over 120ms, using AnimatePresence. Minimize: to opacity 0, scale 0.6, y +60 over 160ms. Restore reverses it.
- Start menu: opens from the taskbar with opacity 0→1 and y 8→0 over 140ms using CSS steps(4) for a stepped, retro feel. Close is instant.
- Clock colon blinks with steps(1) once per second. The tray REC dot pulses between opacity 1 and 0.25 every 1.2s.
- Icon select: the label background turns tangerine instantly, with no easing. Button press switches .bevel-out to .bevel-in and shifts the label 1px right and 1px down.
- Scraps empty: rows collapse one after another, 40ms apart (height to 0, x +24px, opacity 0, 200ms each), then the empty state fades in.
- Project previews loop forever at 60fps while their window is open, not minimized and the tab is visible. They pause otherwise.
- prefers-reduced-motion: skip the boot, open and close windows instantly, show each preview as a static frame (t = 1.2s) with a Play button the visitor can press to opt in, and stop the clock blink and REC pulse.

## Imagery
No bitmaps. Everything is code-drawn: the wallpaper is a CSS background of 2px #46716D dots on an 8px grid over the desktop tint, the desktop icons are 16x16 pixel-art SVGs at 3x, the About portrait is a 12x12 pixel monogram tile generated from OWNER_NAME's initials (slate, cream and tangerine squares, no face), and all six project previews are animated SVG, CSS or canvas compositions on the #1A2228 stage. Icons use a limited palette of edge #24211C, cream #F3ECDD, chrome #CBC5B7, slate #24323A and tangerine #FF6A2B.

## Tone
Playful, nerdy and warm. Short lines with a deadpan humor about frames, curves and render times. The copy never imitates real operating system messages.

---
— Prompt by VibeFather · https://vibefather.ai/t/retro-desktop-os-portfolio · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
