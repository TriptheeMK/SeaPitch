# SM Seaside City Cebu — Interactive Sales Deck

Live URL: _(add after deploy)_
GitHub: _(add repo URL)_

## What it is

A browser-based interactive sales deck for SM Seaside City Cebu — the largest mall in the Visayas. Built as a pitch tool for prospective tenants, sponsors, and event partners.

## Tech stack

| Layer | Choice | Why |
|---|---|---|
| HTML/CSS/JS | Vanilla — no framework | Fast to load, no build step, 90+ Lighthouse |
| Typography | Cormorant Garamond + Inter (Google Fonts) | Luxury serif + clean sans |
| Video | YouTube IFrame API (background embed) | No hosting cost; autoplay/mute supported |
| Scroll reveal | IntersectionObserver (native) | No library needed for this pattern |
| Counter animation | requestAnimationFrame | Smooth, zero deps |
| Deploy | Vercel / Netlify (static) | One-command deploy |

## Project structure

```
project/
  index.html       ← single-page deck (7 sections)
  style.css        ← design system + all component styles
  main.js          ← nav, scroll-spy, counters, modal, YT player
  data/
    stats.json     ← facts, stats, video IDs, contact info
  videos/          ← (placeholder) local .mp4 files if used
  images/          ← (placeholder) optimised .webp stills
  ai-assets/       ← (placeholder) AI-generated renders
planning/
  01_subject_assets.md
  02_story.md
  03_sections.md
  04_content_manifest.md
  05_wireframe.md
```

## Sections

1. **Hero** — full-bleed YouTube background, cinematic 10-second hook
2. **Why This Property** — animated counters, location context, ₱8.5B facts
3. **Retail & Luxury** — tenant strip, 3-card grid, leasing CTA
4. **Dining & Lifestyle** — split layout, 100+ F&B venues story
5. **Attractions & Entertainment** — 6 expandable cards, click-to-modal detail
6. **Events & Platform** — Sky Hall specs, SM Arena 2026, booking CTAs
7. **Contact / Inquiry** — 3-path CTA: Lease · Sponsor · Book

## Navigation model

Non-linear: sticky nav with scroll-spy. Viewer jumps to any section at any time. No forced linear path.

## AI tools used

- **ChatGPT / Claude** — narrative copywriting, data synthesis, JS architecture
- **Midjourney / DALL·E** — lifestyle imagery for retail, luxury wing, and events sections (see `ai-assets/`)
- **Unsplash** — placeholder photography for retail, dining, attraction cards

## Setup

```bash
# no build step needed — open directly
open project/index.html
# or serve locally:
npx serve project
```

## Design decisions

- **Dark palette** (near-black base, gold accent) — signals luxury and confidence without feeling corporate
- **Cormorant Garamond** for headlines — shares DNA with Hermès, Gucci, Saint Laurent
- **No scroll-jacking** — smooth scroll but user controls momentum
- **Video as storytelling** — YouTube embed autoplays muted in hero; Sky Park 4K embed available in attractions

## What I'd improve with more time

- Replace Unsplash placeholders with official SM Seaside photography
- Add Sky Hall floor-plan PDF viewer inline (Phase 2)
- Add Sponsorship tier cards with audience data visualisation (Phase 2)
- Add Leasing path module with category-specific pitches (Phase 2)
- Swap YouTube embed for self-hosted optimised MP4 for offline demo use
