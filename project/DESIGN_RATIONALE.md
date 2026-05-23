# Design Rationale — SM Seaside City Cebu Sales Deck

**Project:** Interactive single-page sales deck for SM Seaside City Cebu
**Author:** Anjel
**Stack:** Vanilla HTML · CSS · JavaScript — no frameworks, no build step

---

## 1. Design Rationale

### The audience shapes everything

This deck is not a public website — it is a pitch tool handed to a specific type of person: a leasing manager, a brand sponsorship director, or an events booker. That person is time-poor, visually literate, and evaluating multiple venues simultaneously. Every design decision was made with that context in mind.

### Visual tone: luxury without coldness

SM Seaside City Cebu is the largest mall in the Visayas, home to international luxury brands and a landmark architectural tower. The deck needed to feel premium without feeling corporate. The near-black background, gold accent colour, and wide negative space signal confidence. **Cormorant Garamond** was chosen for headlines — a typeface that shares visual DNA with Hermès, Gucci, and Saint Laurent — paired with **Inter** for body copy, which stays legible at small sizes and on mobile. Together they balance prestige with clarity.

### Non-linear navigation

Sales decks are typically linear slide shows. This one is not. A sticky **side-rail nav** with scroll-spy lets any prospect jump directly to the section most relevant to their role — a leasing manager goes straight to Leasing, a brand manager jumps to Sponsorship. The scroll progress bar at the top tells them how much remains, which reduces abandonment. The experience respects the viewer's time.

### Reduce friction at the point of intent

A **floating inquiry widget** (the `+` button, bottom-right) is always visible. When a prospect is ready to act — whether on slide two or slide nine — they do not need to scroll to a contact section. The widget expands into four direct actions: Leasing Inquiry, Sponsorship, Book a Venue, and a direct phone number. The **contact modal** is triggered from multiple CTAs throughout the deck and always renders the same up-to-date contact card. One source of truth, zero dead ends.

### Performance as a design choice

The deck is a single static file — `index.html`, `style.css`, `main.js` — with all images hosted locally. There is no framework, no bundler, no CDN dependency. It opens instantly from a USB drive in a client meeting room with no Wi-Fi. The hero slideshow preloads the next image in advance to eliminate any blank flash between slides, and pauses automatically when the browser tab is hidden to avoid wasting cycles.

### Progressive enhancement

CSS reveal animations are gated on a `js-ready` class added to `<html>` at script load time. If JavaScript is blocked or slow, every section still reads correctly — the animations are cosmetic, not structural. This is a deliberate choice: the content is the product, not the interactivity.

---

## 2. AI Usage

### Claude (Anthropic) — primary development partner

Claude was used as the primary development assistant throughout the build. Specific contributions:

- **HTML structure** — authored the semantic section layout, ARIA labels, and the data-attribute patterns used for modal triggers (`data-contact-btn`, `data-modal`).
- **CSS** — wrote the full design system including the dark/gold colour palette, CSS custom properties, responsive breakpoints, hero slideshow transitions, IntersectionObserver reveal animations, and the mobile overlay nav.
- **JavaScript** — implemented all interactive behaviours: scroll progress bar, hero slideshow with visibility-pause and preload, scroll-spy nav (both top nav and side rail), smooth scroll with nav-height offset, mobile hamburger menu, IntersectionObserver section reveals, the float inquiry widget, contact modal open/close logic, and animated stat counters.
- **Copywriting** — assisted with fact-checking section content, writing stat card labels, CTA button text, and attraction detail copy (Sky Park, Ice Rink, Cinema specs).
- **Debugging** — resolved a smooth-scroll offset bug caused by the fixed nav height, a hero slide flash-of-blank on first load, and a modal z-index conflict with the side rail.

### Claude Code (CLI) — development workflow

Claude Code was used in the terminal across multiple sessions to:

- Apply targeted multi-file edits (e.g. image path updates, contact info corrections)
- Execute a dead-CSS removal pass without breaking any live rules
- Manage git commits with descriptive messages
- Consolidate all images into a single `assets/img/` directory
- Redesign the contact popup from a basic overlay into a structured card layout

### What AI did not do

All photography is verified factual imagery of SM Seaside City Cebu — sourced, compressed, and hosted locally. No AI-generated images were used. All facts, statistics, and venue specifications (floor areas, seat counts, rink dimensions) were verified against publicly available SM Prime data before being written into the deck.

---

## 3. What I Would Improve With More Time

**Leasing path module.** The current Leasing section is a single CTA. With more time I would build a category-selector — retail, F&B, services, luxury — that surfaces relevant floor area options, average footfall data, and a pre-filled inquiry form for each. Prospects self-qualify rather than calling cold.

**Sponsorship tier cards with data visualisation.** The Sponsorship section describes opportunities in prose. It would be more persuasive as a structured tier table (Bronze / Silver / Gold / Title) with audience reach numbers visualised as simple inline SVG bar charts — no charting library needed.

**Offline-safe fonts.** The deck currently loads Cormorant Garamond and Inter from Google Fonts. In a meeting room with no internet connection, the browser falls back to a system serif/sans, which breaks the visual hierarchy. I would self-host the font files in `assets/fonts/` using `@font-face` so the deck looks identical online and offline.

**Scroll-triggered counter animation.** The headline stat counters (470,486 m², 700+ stores, etc.) currently animate on page load. Moving them to trigger on IntersectionObserver — so they count up when the viewer first scrolls to them — would make them more impactful and feel more deliberate.

**Print / PDF export mode.** Prospects often request a leave-behind after a meeting. A `@media print` stylesheet that expands all sections, removes animations, and lays out the content as clean A4 pages would make the deck double as a PDF one-pager with no extra tooling.

**Analytics.** A single lightweight event tracker (e.g. Plausible or a simple `navigator.sendBeacon` call) on section entry and CTA clicks would tell the sales team which sections hold attention and which CTAs convert — closing the feedback loop between the deck and the sales process.

---

*Total build time: ~3 sessions. Framework dependencies: zero.*
