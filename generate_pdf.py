from fpdf import FPDF

class PDF(FPDF):
    def header(self):
        self.set_fill_color(15, 15, 15)
        self.rect(0, 0, 210, 297, 'F')

    def footer(self):
        self.set_y(-15)
        self.set_font('Helvetica', 'I', 8)
        self.set_text_color(120, 100, 60)
        self.cell(0, 10, f'Page {self.page_no()}', align='C')

def add_section_title(pdf, text):
    pdf.ln(6)
    pdf.set_font('Helvetica', 'B', 11)
    pdf.set_text_color(197, 160, 80)
    pdf.cell(0, 7, text, ln=True)
    pdf.set_draw_color(197, 160, 80)
    pdf.set_line_width(0.4)
    pdf.line(pdf.get_x(), pdf.get_y(), pdf.get_x() + 170, pdf.get_y())
    pdf.ln(3)

def add_body(pdf, text):
    pdf.set_font('Helvetica', '', 10)
    pdf.set_text_color(210, 205, 195)
    pdf.multi_cell(0, 6, text)
    pdf.ln(2)

def add_bold_intro(pdf, bold_part, rest):
    pdf.set_font('Helvetica', 'B', 10)
    pdf.set_text_color(230, 225, 215)
    pdf.write(6, bold_part + ' ')
    pdf.set_font('Helvetica', '', 10)
    pdf.set_text_color(210, 205, 195)
    pdf.write(6, rest)
    pdf.ln(5)

def add_bullet(pdf, label, text):
    pdf.set_font('Helvetica', 'B', 10)
    pdf.set_text_color(197, 160, 80)
    pdf.write(6, '  *  ')
    pdf.set_font('Helvetica', 'B', 10)
    pdf.set_text_color(230, 225, 215)
    pdf.write(6, label + '  ')
    pdf.set_font('Helvetica', '', 10)
    pdf.set_text_color(210, 205, 195)
    pdf.write(6, text)
    pdf.ln(5)

pdf = PDF()
pdf.set_auto_page_break(auto=True, margin=20)
pdf.add_page()
pdf.set_margins(20, 20, 20)

# Title block
pdf.ln(8)
pdf.set_font('Helvetica', 'B', 18)
pdf.set_text_color(197, 160, 80)
pdf.cell(0, 10, 'SM Seaside City Cebu', ln=True, align='C')
pdf.set_font('Helvetica', '', 12)
pdf.set_text_color(170, 160, 140)
pdf.cell(0, 7, 'Interactive Sales Deck  -  Design Rationale', ln=True, align='C')
pdf.ln(2)
pdf.set_draw_color(197, 160, 80)
pdf.set_line_width(0.5)
pdf.line(20, pdf.get_y(), 190, pdf.get_y())
pdf.ln(8)

# ── SECTION 1 ──────────────────────────────────────────
add_section_title(pdf, '1.  Design Rationale')

add_bold_intro(pdf,
    'The audience shapes everything.',
    'This deck is a pitch tool for a specific person: a leasing manager, a brand sponsorship '
    'director, or an events booker. That person is time-poor, visually literate, and evaluating '
    'multiple venues at once. Every decision was made with that in mind.')

add_bold_intro(pdf,
    'Visual tone: luxury without coldness.',
    'SM Seaside City is home to international luxury brands and a landmark 147 m tower. '
    'The deck needed to feel premium without feeling corporate. The near-black background, '
    'gold accent, and wide negative space signal confidence. Cormorant Garamond was chosen '
    'for headlines - a typeface that shares DNA with Hermes and Saint Laurent - paired with '
    'Inter for body copy, which stays legible at small sizes and on mobile.')

add_bold_intro(pdf,
    'Non-linear navigation.',
    'A sticky side-rail nav with scroll-spy lets any prospect jump directly to the section '
    'most relevant to their role - a leasing manager goes straight to Leasing, a brand '
    'manager jumps to Sponsorship. The scroll progress bar tells them how much content '
    'remains. The experience respects the viewer\'s time rather than forcing a linear '
    'slide-by-slide path.')

add_bold_intro(pdf,
    'Reduce friction at the point of intent.',
    'The floating + widget (bottom-right) is always visible. When a prospect is ready to '
    'act - whether on section two or nine - they don\'t need to scroll to a contact page. '
    'It expands into four direct actions: Leasing Inquiry, Sponsorship, Book a Venue, and '
    'a direct phone number. The contact modal is triggered from multiple CTAs and always '
    'renders the same up-to-date contact card. One source of truth, zero dead ends.')

add_bold_intro(pdf,
    'Performance as a design choice.',
    'The deck is a single static file - index.html, style.css, main.js - with all images '
    'hosted locally. No framework, no CDN dependency. It opens instantly from a USB drive '
    'in a client meeting room with no Wi-Fi. The hero slideshow preloads the next image in '
    'advance to eliminate blank flashes, and pauses automatically when the tab is hidden.')

# ── SECTION 2 ──────────────────────────────────────────
add_section_title(pdf, '2.  AI Usage')

add_body(pdf,
    'Three AI tools were used across research, planning, and implementation - each for a '
    'distinct purpose.')

add_bullet(pdf, 'Perplexity AI -',
    'Used for fast fact-checking and research. Verified SM Seaside City statistics '
    '(floor area, store count, attraction specs such as ice rink dimensions and cinema '
    'seat count) against publicly available sources before committing any numbers to the deck.')

add_bullet(pdf, 'ChatGPT (OpenAI) -',
    'Used during early planning and content phases. Brainstormed the deck\'s narrative '
    'structure, drafted initial section copy, and generated alternative headline and CTA '
    'options to compare against.')

add_bullet(pdf, 'Claude (Anthropic) -',
    'Primary development assistant for the full build. Authored the HTML structure, '
    'semantic sections, and ARIA patterns. Wrote the entire CSS design system - dark/gold '
    'palette, custom properties, responsive breakpoints, hero transitions, and '
    'IntersectionObserver reveal animations. Implemented all JavaScript: scroll progress '
    'bar, hero slideshow with visibility-pause and preload, scroll-spy nav, smooth scroll, '
    'mobile hamburger, float widget, contact modal, and animated stat counters. Also '
    'assisted with copywriting, CTA text, and attraction detail copy.')

add_bullet(pdf, 'Claude Code (CLI) -',
    'Used in the terminal across sessions to apply targeted multi-file edits, run a '
    'dead-CSS removal pass, manage git commits, consolidate all assets into a single '
    'directory, and redesign the contact popup into a structured card layout.')

add_body(pdf,
    'Key distinction: Perplexity for facts, ChatGPT for early narrative, '
    'Claude + Claude Code for all design and implementation. All photography is verified '
    'factual imagery of SM Seaside City Cebu - no AI-generated images were used.')

# ── SECTION 3 ──────────────────────────────────────────
add_section_title(pdf, '3.  What I Would Improve With More Time')

add_bullet(pdf, 'Leasing path module -',
    'The current Leasing section is a single CTA. A category-selector (retail, F&B, '
    'services, luxury) surfacing relevant floor options and a pre-filled inquiry form per '
    'category would let prospects self-qualify rather than calling cold.')

add_bullet(pdf, 'Sponsorship tier cards -',
    'Replace prose with a structured Bronze / Silver / Gold / Title tier table, '
    'with audience reach numbers visualised as simple inline SVG bar charts. '
    'Far more persuasive to a brand manager than paragraphs.')

add_bullet(pdf, 'Offline-safe fonts -',
    'The deck currently loads fonts from Google Fonts. In a meeting room with no internet '
    'the browser falls back to system fonts and breaks the visual hierarchy. Self-hosting '
    'via @font-face would fix this.')

add_bullet(pdf, 'Scroll-triggered counters -',
    'Headline stats (470,486 m2, 700+ stores) currently animate on page load. Triggering '
    'them on IntersectionObserver - counting up the moment the viewer scrolls to them - '
    'would make them land with more impact.')

add_bullet(pdf, 'Print / PDF export mode -',
    'A @media print stylesheet that expands all sections and strips animations would let '
    'the deck double as a clean A4 leave-behind PDF - useful for post-meeting follow-ups '
    'with no extra tooling.')

add_bullet(pdf, 'Analytics -',
    'A lightweight tracker on section entry and CTA clicks would tell the sales team '
    'which sections hold attention and which CTAs convert - closing the feedback loop '
    'between the deck and the actual sales process.')

# Footer note
pdf.ln(4)
pdf.set_font('Helvetica', 'I', 9)
pdf.set_text_color(100, 90, 70)
pdf.cell(0, 6, 'Three sessions. Zero framework dependencies. One file to open.', align='C')

pdf.output('project/SeaPitch_Design_Rationale.pdf')
print('PDF created: project/SeaPitch_Design_Rationale.pdf')
