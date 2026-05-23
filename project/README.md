# SM Seaside City Cebu — Interactive Sales Deck

An interactive, single-page sales deck for SM Seaside City Cebu — the Visayas' largest mall at 470,486 m² with 700+ stores on South Road Properties. Built as a cinematic, scroll-driven pitch tool for leasing, sponsorship, and events prospects.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Markup | Vanilla HTML5 (semantic sections, ARIA attributes) |
| Styling | Vanilla CSS3 — custom properties, Flexbox, Grid, `@keyframes` |
| Scripting | Vanilla JavaScript (ES5-compatible, no build step) |
| Fonts | Google Fonts — Cormorant Garamond (headings) + Inter (body) |
| Icons / Marks | Custom SVG (logo, favicon) |
| Assets | Locally hosted JPEG images — no CDN dependency |

No frameworks, no bundler, no npm. The entire project is three files: `index.html`, `style.css`, `main.js`.

---

## Setup Instructions

**Requirements:** Any modern web browser. No server, build tool, or internet connection required (fonts load from Google Fonts if online; everything else is local).

```bash
# Clone the repo
git clone https://github.com/TriptheeMK/SeaPitch.git
cd SeaPitch/project

# Open directly in browser
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

Or drag `project/index.html` into a browser window.

> **Note:** If you move `index.html` out of the `project/` folder, update the image paths in `index.html` and `main.js` to match.

---

## Project Structure

```
project/
├── index.html              # All markup and section content
├── style.css               # All styles (layout, animations, responsive)
├── main.js                 # All interactivity (no dependencies)
├── assets/
│   └── img/
│       ├── hero-1..4.jpg   # Cinematic hero slideshow images
│       ├── attraction-*.jpg
│       ├── retail-*.jpg
│       ├── dining-*.jpg
│       ├── events-*.jpg
│       ├── logo.svg
│       └── favicon.svg
```

---

## Design Decisions

**No frameworks.** The deck is a single static file that deploys anywhere — no Node, no bundler, no dependencies that can break. Vanilla JS + CSS means zero toolchain overhead and instant load times.

**Cinematic hero slideshow.** Four full-bleed images with a 5-second auto-advance and a `visibilitychange` pause when the tab is backgrounded. Images are preloaded one slide ahead to eliminate flash-of-blank.

**Cormorant Garamond + Inter pairing.** Cormorant gives the luxury/editorial tone expected by leasing and sponsorship decision-makers. Inter provides high-legibility body copy at any size. Both are loaded with `font-display: swap` via `<link rel="preconnect">` to avoid layout shift.

**Scroll-spy side rail.** A fixed left-rail nav with dot indicators and label reveals on hover. Lets prospects jump directly to the section most relevant to them (Leasing, Sponsorship, Events) without scrolling the full deck.

**Scroll progress bar.** A thin top bar that fills as the user scrolls — signals how much content remains and encourages full engagement with the deck.

**IntersectionObserver reveals.** Sections and stat cards animate in on scroll using `IntersectionObserver` rather than scroll-event listeners — no jank, no layout thrashing, works on mobile.

**Float inquiry widget.** A persistent `+` button in the lower-right corner expands into quick-action links (Leasing, Sponsorship, Book a Venue, Phone). Reduces friction for prospects ready to act at any point in the deck.

**Contact popup (modal).** A single reusable modal renders the full contact card — populated with leasing, sponsorship, and events contacts — triggered from multiple CTAs throughout the deck via a `data-contact-btn` attribute pattern. One implementation, used everywhere.

**CSS custom properties throughout.** Colors, spacing, nav height, and breakpoints are defined as `--var` tokens on `:root`, making global reskins a one-file change.

**Progressive enhancement.** A `js-ready` class is added to `<html>` on script load; CSS reveal animations are gated on this class. The page reads fully without JavaScript — animations are an enhancement, not a requirement.

---

## Sections

| # | Section | Purpose |
|---|---|---|
| 1 | Overview (Hero) | Cinematic intro slideshow with headline stats |
| 2 | Why Here | Location, footfall, and catchment area brief |
| 3 | Retail | Floor plate breakdown and tenant mix |
| 4 | Luxury | Premium and anchor brand positioning |
| 5 | Leasing | Available units and leasing contact CTA |
| 6 | Dining | F&B offer and venue capacity |
| 7 | Attractions | Sky Park, Ice Rink, Cinema, Bowling, Skywalk, Seaside Tower |
| 8 | Events | Venue hire — Sky Hall, Director's Club, Sky Garden |
| 9 | Sponsorship | Brand activation and naming rights opportunities |
| 10 | Contact | Leasing, sponsorship, and events contacts |

---

## AI Tools Used

| Tool | Role |
|---|---|
| **Claude (Anthropic)** | Primary development assistant — authored and iterated on all HTML, CSS, and JavaScript. Debugged scroll-spy, smooth-scroll offset, hero slideshow, and modal logic. Assisted with copywriting for section content, stat cards, and CTA labels. |
| **Claude Code (CLI)** | Used in the terminal to apply edits, manage git commits, and execute multi-step refactors across sessions (image optimization pass, dead-CSS removal, contact popup redesign, asset consolidation). |

All photography is verified factual imagery of SM Seaside City Cebu — no AI-generated images were used in the final build.

---

## License

Private. All content, photography, and data relate to SM Prime Holdings / SM Seaside City Cebu. Not for public redistribution.
