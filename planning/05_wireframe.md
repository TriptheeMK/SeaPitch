# Step 5 — Wireframe (text layout blueprint)

## Global chrome

```
┌─────────────────────────────────────────────────────────┐
│ [SM SEASIDE]        [WHY] [RETAIL] [DINING] [ATTRACT]   │  ← sticky top nav
│                     [EVENTS] [CONTACT]         [INQUIRE] │    dark bar, 56px tall
└─────────────────────────────────────────────────────────┘
```

- Logo left, section links centre-right, primary CTA button far right
- Active section highlighted via JS scroll-spy
- Mobile: hamburger collapses to full-screen overlay nav

## Section 1 — Hero (100vh)

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│          [full-bleed muted autoplay video]              │
│                  dark overlay gradient                  │
│                                                         │
│       THE VISAYAS' MOST ICONIC DESTINATION.             │  ← H1, white, large
│   470,000 m² of retail, dining & events in Cebu.       │  ← sub-headline
│                                                         │
│              [ Explore the Opportunity → ]              │  ← ghost button
│                                                         │
│                        ↓                               │  ← scroll indicator
└─────────────────────────────────────────────────────────┘
```

Non-linear entry: clicking any nav item from here jumps directly to that section.

## Section 2 — Why This Property (100vh)

```
┌────────────────────────┬────────────────────────────────┐
│  [Location visual /    │  WHY SM SEASIDE CITY           │
│   aerial image]        │  ────────────────────          │
│                        │  [Counter] 470,486 m²          │
│                        │  [Counter] 700+ Stores         │
│                        │  [Counter] 12 Anchors          │
│                        │  [Counter] 4,336 Parking       │
│                        │                                │
│                        │  Visayas' largest. Regional    │
│                        │  draw. ₱8.5B investment.       │
│                        │                                │
│                        │  [Secure Your Spot →]          │
└────────────────────────┴────────────────────────────────┘
```

## Section 3 — Retail + Luxury (100vh)

```
┌─────────────────────────────────────────────────────────┐
│  RETAIL & LUXURY                                        │
│  ───────────────                                        │
│  [Tenant logo strip: SM Store · Zara · Uniqlo · H&M …] │
│                                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐    │
│  │  [image 1]  │  │  [image 2]  │  │  [image 3]  │    │
│  │  SM Store   │  │ Luxury wing │  │  Fashion    │    │
│  └─────────────┘  └─────────────┘  └─────────────┘    │
│                                                         │
│       200,000 m² GLA  ·  Arquitectonica-designed       │
│                                                         │
│              [ Inquire About Leasing → ]                │
└─────────────────────────────────────────────────────────┘
```

## Section 4 — Dining & Lifestyle (100vh)

```
┌─────────────────────────────────────────────────────────┐
│  [large warm lifestyle image — full bleed left half]    │
│                                                         │
│  ┌──────────────────────────────────────────────────┐  │
│  │  DINING & LIFESTYLE                              │  │
│  │  100+ F&B venues. Filipino · Japanese · Korean   │  │
│  │  Chinese · Fast food · Fine dining               │  │
│  │                                                  │  │
│  │  Food as destination, not afterthought.          │  │
│  │                                                  │  │
│  │  [ Partner as a F&B Tenant → ]                   │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

## Section 5 — Attractions & Entertainment (100vh)

```
┌─────────────────────────────────────────────────────────┐
│  ATTRACTIONS & ENTERTAINMENT                            │
│                                                         │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌────────┐ │
│  │ Sky Park  │ │   IMAX    │ │ Ice Rink  │ │Bowling │ │  ← tile cards
│  │ [image]   │ │ [image]   │ │ [image]   │ │[image] │ │    click = expand
│  │ Rooftop   │ │ 500 seats │ │ 1,800 m²  │ │18 lanes│ │
│  └───────────┘ └───────────┘ └───────────┘ └────────┘ │
│                                                         │
│  [ Brand Activations Available → ]                      │
└─────────────────────────────────────────────────────────┘
```

Cards expand on click to show more detail (modal overlay or inline expand).

## Section 6 — Events & Platform (100vh)

```
┌─────────────────────────────────────────────────────────┐
│  [dark bg — energy photo of Sky Hall or activation]     │
│                                                         │
│  EVENTS & PLATFORM                                      │
│  ──────────────────                                     │
│                                                         │
│  Sky Hall Seaside: 1,857 m² · 1,500 capacity           │
│  100 exhibit booths · LED displays · Car lift access   │
│                                                         │
│  SM Arena Seaside Cebu — 16,000 seats (2026)           │
│                                                         │
│  ┌──────────────────────────────────────────┐          │
│  │  Past activations: Sinulog · concerts ·  │          │
│  │  corporate galas · product launches      │          │
│  └──────────────────────────────────────────┘          │
│                                                         │
│  [ Book Sky Hall → ]    [ Download Capacity Sheet ]     │
└─────────────────────────────────────────────────────────┘
```

## Section 7 — Contact / CTA (100vh)

```
┌─────────────────────────────────────────────────────────┐
│  READY TO BE PART OF THIS?                              │
│                                                         │
│  ┌──────────────────┐ ┌──────────────────┐ ┌──────────┐│
│  │  LEASE A SPACE   │ │ SPONSOR AN       │ │  BOOK A  ││
│  │                  │ │ ACTIVATION       │ │  VENUE   ││
│  │  Luxury · Retail │ │ Atrium · Rink ·  │ │ Sky Hall ││
│  │  F&B · Pop-up    │ │ Sky Park · Hall  │ │ +SMArena ││
│  │                  │ │                  │ │          ││
│  │  [Email inquiry] │ │  [Email inquiry] │ │ [Call/   ││
│  │                  │ │                  │ │  Email]  ││
│  └──────────────────┘ └──────────────────┘ └──────────┘│
│                                                         │
│  customercare@smsupermalls.com · +63 917 552 5667      │
└─────────────────────────────────────────────────────────┘
```

## Non-linear navigation logic

- Sticky nav: click any section name → `scrollIntoView({behavior:'smooth'})`
- Scroll-spy: IntersectionObserver watches each section → highlights active nav item
- Attraction cards: click → modal opens inline, ESC or ✕ closes
- Every section CTA: either scrolls to #contact or opens mailto pre-filled with subject
- No forced linear path — viewer can land on any section from any point

## Animation rules (no premature complexity)

- Scroll-triggered fade-in: CSS `@keyframes` + IntersectionObserver, no library needed for v1
- Counter animation: requestAnimationFrame count-up when section enters viewport
- Hover states: CSS transitions only (transform scale + colour shift)
- No GSAP or Framer Motion in v1 — keep it vanilla for speed
