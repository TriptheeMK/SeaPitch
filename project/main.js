'use strict';

/* ─── JS-READY FLAG (enables CSS reveal animations) ──────── */
document.documentElement.classList.add('js-ready');

/* ═══════════════════════════════════════════════════════════
   ATTRACTION DATA — VERIFIED FACTS + IMAGE LIBRARY URLS
═══════════════════════════════════════════════════════════ */
var ATTRACTIONS = [
  {
    name: 'Sky Park',
    icon: '🌿',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    detail: "~20,000 m² elevated rooftop park — free entry — designed in collaboration with Kenneth Cobonpue. Features ponds, trees, jogging track, soccer field, dog park, and children’s playground. Views overlook San Pedro Calungsod Chapel and Cebu Ocean Park. Hosts the annual Sinulog Sky Park Party (5,000+ guests). The adjacent Sky Garden event terrace seats 500 per side."
  },
  {
    name: 'Super Screen Cinema',
    icon: '🎬',
    img: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/SM_Cinema_at_SM_Seaside_City_%282025-03-01%29.jpg',
    detail: "351 seats with Christie 6P laser projection and Dolby Atmos sound — a screen nearly 30% larger than standard. Plus 2 Director’s Club recliner theatres and 4 regular digital screens — 7 auditoriums total. The Visayas’ most advanced cinema complex."
  },
  {
    name: 'Olympic Ice Rink',
    icon: '⛸️',
    img: 'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=1200&q=80',
    detail: "The only Olympic-sized ice rink in the Visayas — 1,800 m² of full-format ice. Freshly renovated and reopened March 2026. Public skating, learn-to-skate, and hockey clinics year-round. Up to 300 skaters at once; floor-to-ceiling food court windows look directly over the rink."
  },
  {
    name: 'SM Bowling & Amusement',
    icon: '🎳',
    img: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/SM_Bowling_and_Leisure_Center_at_SM_Seaside_City_%282024-06-13%29.jpg',
    detail: "18 regulation bowling lanes plus a full amusement floor on 3rd Level, City Wing. A proven draw for families, corporate groups, and barkada — strong naming rights and in-venue sponsorship potential."
  },
  {
    name: 'Skywalk Adventure',
    icon: '🪟',
    img: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=1200&q=80',
    detail: "Paid attraction within Sky Park: transparent glass-floor panels with an unobstructed view straight down. One of the most photographed experiences in Cebu — a genuine thrill and social-media moment ideal for branded activations."
  },
  {
    name: 'Seaside Tower',
    icon: '🗼',
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Tower_Garden_at_SM_Seaside_City_%282024-06-13%29.jpg',
    detail: "147 m tall, standing at the centre of the circular mall. The most recognisable landmark on the South Road Properties skyline, visible from across the water. Nautilus-inspired design by Arquitectonica. A premium future branding and observation asset as SRP continues to develop."
  }
];

/* ═══════════════════════════════════════════════════════════
   1. SCROLL PROGRESS BAR
═══════════════════════════════════════════════════════════ */
function initScrollProgress() {
  var bar = document.getElementById('scroll-progress');
  if (!bar) return;

  function updateProgress() {
    var scrollTop = window.scrollY || window.pageYOffset;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + '%';
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

/* ═══════════════════════════════════════════════════════════
   2. HERO SLIDESHOW
═══════════════════════════════════════════════════════════ */
function initHeroSlideshow() {
  var slides = document.querySelectorAll('.hero-slide');
  var counter = document.getElementById('slide-current');
  if (!slides.length) return;

  var current = 0;
  var total = slides.length;
  var interval = null;

  function goTo(index) {
    slides[current].classList.remove('active');
    current = (index + total) % total;
    slides[current].classList.add('active');
    if (counter) {
      counter.textContent = String(current + 1).padStart(2, '0');
    }
  }

  function next() {
    goTo(current + 1);
  }

  interval = setInterval(next, 5000);

  // Add hero-loaded class after short delay to trigger text entrance
  setTimeout(function () {
    var hero = document.getElementById('hero');
    if (hero) hero.classList.add('hero-loaded');
  }, 150);
}

/* ═══════════════════════════════════════════════════════════
   3. NAV — SCROLL-SPY + SCROLLED CLASS
═══════════════════════════════════════════════════════════ */
function initNav() {
  var nav = document.getElementById('main-nav');
  if (!nav) return;

  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-links a[data-section]');
  var navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 68;

  function onScroll() {
    var scrollY = window.scrollY || window.pageYOffset;

    // Scrolled class (shadow only — background always solid)
    if (scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Scroll-spy
    var active = '';
    sections.forEach(function (sec) {
      var top = sec.offsetTop - navH - 80;
      if (scrollY >= top) {
        active = sec.id;
      }
    });

    navLinks.forEach(function (link) {
      link.classList.toggle('active', link.dataset.section === active);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ═══════════════════════════════════════════════════════════
   4. SMOOTH SCROLL
═══════════════════════════════════════════════════════════ */
function initSmoothScroll() {
  var navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 68;

  document.addEventListener('click', function (e) {
    var target = e.target.closest('a[href^="#"]');
    if (!target) return;

    var href = target.getAttribute('href');
    // Skip data-modal links from smooth scroll (they open a modal)
    if (target.hasAttribute('data-modal')) return;

    var dest = document.querySelector(href);
    if (!dest) return;

    e.preventDefault();
    var top = dest.getBoundingClientRect().top + window.scrollY - navH;
    window.scrollTo({ top: top, behavior: 'smooth' });
  });
}

/* ═══════════════════════════════════════════════════════════
   5. MOBILE NAV
═══════════════════════════════════════════════════════════ */
function closeMobileNav() {
  var hamburger = document.getElementById('hamburger');
  var overlay = document.getElementById('mobile-overlay');
  if (hamburger) { hamburger.classList.remove('open'); hamburger.setAttribute('aria-expanded', 'false'); }
  if (overlay) { overlay.classList.remove('open'); overlay.setAttribute('aria-hidden', 'true'); }
  document.body.classList.remove('scroll-locked');
}

function initMobileNav() {
  var hamburger = document.getElementById('hamburger');
  var overlay = document.getElementById('mobile-overlay');
  var closeBtn = document.getElementById('overlay-close');
  var overlayLinks = document.querySelectorAll('.overlay-link');

  if (!hamburger || !overlay) return;

  hamburger.addEventListener('click', function () {
    var isOpen = overlay.classList.contains('open');
    if (isOpen) {
      closeMobileNav();
    } else {
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
      hamburger.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      document.body.classList.add('scroll-locked');
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMobileNav);
  }

  overlayLinks.forEach(function (link) {
    link.addEventListener('click', closeMobileNav);
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closeMobileNav();
    }
  });
}

/* ═══════════════════════════════════════════════════════════
   6. INTERSECTION OBSERVER — REVEAL
═══════════════════════════════════════════════════════════ */
function initReveal() {
  var elements = document.querySelectorAll('.reveal');
  if (!elements.length || !('IntersectionObserver' in window)) {
    // Fallback: show all
    elements.forEach(function (el) { el.classList.add('visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

  elements.forEach(function (el) { observer.observe(el); });
}

/* ═══════════════════════════════════════════════════════════
   7. ANIMATED COUNTERS
═══════════════════════════════════════════════════════════ */
function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function animateCounter(el) {
  var raw = el.dataset.target;
  var suffix = el.dataset.suffix || '';
  var target = parseInt(raw.replace(/[^0-9]/g, ''), 10);
  if (isNaN(target)) return;

  var duration = 1800;
  var startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    var elapsed = timestamp - startTime;
    var progress = Math.min(elapsed / duration, 1);
    var eased = easeOutExpo(progress);
    var value = Math.round(eased * target);

    // Format large numbers with commas
    var formatted = value.toLocaleString('en-US');
    el.textContent = formatted + suffix;

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = target.toLocaleString('en-US') + suffix;
    }
  }

  requestAnimationFrame(step);
}

function initCounters() {
  var counters = document.querySelectorAll('.stat-num[data-target]');
  if (!counters.length || !('IntersectionObserver' in window)) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(function (el) { observer.observe(el); });
}

/* ═══════════════════════════════════════════════════════════
   8. 3D CARD TILT
═══════════════════════════════════════════════════════════ */
function initCardTilt() {
  var cards = document.querySelectorAll('.attraction-card');
  var maxTilt = 8;

  cards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var cx = rect.width / 2;
      var cy = rect.height / 2;
      var rotateX = ((y - cy) / cy) * -maxTilt;
      var rotateY = ((x - cx) / cx) * maxTilt;
      card.style.transform = 'perspective(800px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateZ(8px)';
    });

    card.addEventListener('mouseleave', function () {
      card.style.transform = '';
      card.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
      setTimeout(function () { card.style.transition = ''; }, 500);
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   9. ATTRACTION MODAL
═══════════════════════════════════════════════════════════ */
function initAttractionModal() {
  var backdrop = document.getElementById('modal-backdrop');
  var modal = document.getElementById('modal');
  var closeBtn = document.getElementById('modal-close');
  var modalImg = document.getElementById('modal-img');
  var modalIcon = document.getElementById('modal-icon');
  var modalTitle = document.getElementById('modal-title');
  var modalDetail = document.getElementById('modal-detail');
  var cards = document.querySelectorAll('.attraction-card[data-index]');

  if (!backdrop || !modal) return;

  var focusableSel = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  var lastFocused = null;

  function openModal(index) {
    var data = ATTRACTIONS[index];
    if (!data) return;

    modalImg.style.backgroundImage = 'url("' + data.img + '")';
    modalIcon.textContent = data.icon;
    modalTitle.textContent = data.name;
    modalDetail.textContent = data.detail;

    lastFocused = document.activeElement;
    backdrop.classList.add('open');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.classList.add('scroll-locked');

    // Focus first focusable in modal
    var focusables = modal.querySelectorAll(focusableSel);
    if (focusables.length) focusables[0].focus();

    trackCta('modal-attraction-' + data.name.toLowerCase().replace(/\s+/g, '-'));
  }

  function closeModal() {
    backdrop.classList.remove('open');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('scroll-locked');
    if (lastFocused) lastFocused.focus();
  }

  // Focus trap
  modal.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab') return;
    var focusables = Array.from(modal.querySelectorAll(focusableSel));
    if (!focusables.length) return;
    var first = focusables[0];
    var last = focusables[focusables.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  cards.forEach(function (card) {
    function open() { openModal(parseInt(card.dataset.index, 10)); }
    card.addEventListener('click', open);
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  backdrop.addEventListener('click', function (e) {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) closeModal();
  });
}

/* ═══════════════════════════════════════════════════════════
   10. SKY HALL PANEL
═══════════════════════════════════════════════════════════ */
function initSkyHallPanel() {
  var openBtn = document.getElementById('events-module-open');
  var panel = document.getElementById('skyhall-panel');
  var closeBtn = document.getElementById('skyhall-close');

  if (!panel) return;

  // Create backdrop element
  var backdrop = document.createElement('div');
  backdrop.className = 'skyhall-panel-backdrop';
  backdrop.setAttribute('aria-hidden', 'true');
  document.body.appendChild(backdrop);

  function openPanel() {
    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
    backdrop.classList.add('open');
    document.body.classList.add('scroll-locked');
    // Focus close button
    if (closeBtn) setTimeout(function () { closeBtn.focus(); }, 100);
    trackCta('skyhall-panel-open');
  }

  function closePanel() {
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    backdrop.classList.remove('open');
    document.body.classList.remove('scroll-locked');
    if (openBtn) openBtn.focus();
  }

  if (openBtn) openBtn.addEventListener('click', openPanel);
  if (closeBtn) closeBtn.addEventListener('click', closePanel);

  backdrop.addEventListener('click', closePanel);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && panel.classList.contains('open')) closePanel();
  });
}

/* ═══════════════════════════════════════════════════════════
   11. CONTACT MODAL
═══════════════════════════════════════════════════════════ */
function initContactModal() {
  var modal = document.getElementById('contact-modal');
  var closeBtn = document.getElementById('contact-modal-close');
  var triggers = document.querySelectorAll('[data-modal="contact"]');

  if (!modal) return;

  function openModal() {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('scroll-locked');
    var box = modal.querySelector('.contact-modal-box');
    if (box) {
      var focusable = box.querySelector('button, [href], [tabindex]:not([tabindex="-1"])');
      if (focusable) setTimeout(function () { focusable.focus(); }, 100);
    }
    trackCta('contact-modal-open');
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('scroll-locked');
  }

  triggers.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      openModal();
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
}

/* ═══════════════════════════════════════════════════════════
   12. CTA CLICK TRACKING
═══════════════════════════════════════════════════════════ */
function trackCta(label) {
  console.log('[CTA]', label, new Date().toISOString());
  // Netlify analytics-ready: fire a custom event if gtag exists
  if (typeof gtag === 'function') {
    gtag('event', 'cta_click', { event_category: 'sales', event_label: label });
  }
  // Store in sessionStorage for later review
  try {
    var log = JSON.parse(sessionStorage.getItem('cta_log') || '[]');
    log.push({ label: label, ts: Date.now() });
    sessionStorage.setItem('cta_log', JSON.stringify(log));
  } catch (e) {
    // sessionStorage may be unavailable in some contexts
  }
}

function initCtaTracking() {
  document.addEventListener('click', function (e) {
    var target = e.target.closest('[data-cta]');
    if (!target) return;
    var label = target.dataset.cta;
    if (label) trackCta(label);
  });
}

/* ═══════════════════════════════════════════════════════════
   13. MARQUEE — DUPLICATE TRACK FOR SEAMLESS LOOP
═══════════════════════════════════════════════════════════ */
function initMarquee() {
  var track = document.getElementById('marquee-track');
  if (!track) return;

  // Clone the inner content and append to create seamless loop
  var originalHTML = track.innerHTML;
  track.innerHTML = originalHTML + originalHTML;
}

/* ═══════════════════════════════════════════════════════════
   14. TOUR MODAL — YouTube embed per leasing category
═══════════════════════════════════════════════════════════ */
var TOURS = {
  luxury: {
    videoId:  'He19Uh_UPlY',
    eyebrow:  'Luxury Flagship · SM Seaside City Cebu',
    title:    'Premium Ground-Floor Walkthrough',
    inquirySubject: 'Luxury+Flagship+Leasing+%E2%80%94+SM+Seaside+City+Cebu',
    start:    4
  },
  midtier: {
    videoId:  'XHU0RVTqRKo',
    eyebrow:  'Mid-Tier Retail · SM Seaside City Cebu',
    title:    'City Wing & Seaview Wing Walkthrough',
    inquirySubject: 'Mid-Tier+Retail+Leasing+%E2%80%94+SM+Seaside+City+Cebu',
    start:    5
  },
  atrium: {
    videoId:  'vWJAPA2qT1w',
    eyebrow:  'Pop-Up & Kiosk · SM Seaside City Cebu',
    title:    'Mountain Wing Atrium & Concourse',
    inquirySubject: 'Atrium+Kiosk+Leasing+%E2%80%94+SM+Seaside+City+Cebu',
    start:    3
  }
};

var tourOpen = false;
var tourProgressTimer = null;
var tourIntroTimer    = null;
var TOUR_DURATION     = 20000; // ms of progress bar fill
var INTRO_DURATION    = 2600;  // ms intro stays before video appears

function initTourModal() {
  var backdrop      = document.getElementById('tour-modal');
  var intro         = document.getElementById('tour-intro');
  var introFill     = document.getElementById('tour-intro-fill');
  var introLabel    = document.getElementById('tour-intro-label');
  var playerWrap    = document.getElementById('tour-player-container');
  var metaEyebrow   = document.getElementById('tour-meta-eyebrow');
  var metaTitle     = document.getElementById('tour-meta-title');
  var progressFill  = document.getElementById('tour-progress-fill');
  var closeBtn      = document.getElementById('tour-close-btn');
  var inquiryBtn    = document.getElementById('tour-inquiry-btn');
  var triggers      = document.querySelectorAll('.tour-trigger');

  if (!backdrop || !triggers.length) return;

  function openTour(tourKey) {
    var tour = TOURS[tourKey];
    if (!tour) return;

    tourOpen = true;
    trackCta('tour-open-' + tourKey);

    // Populate meta
    metaEyebrow.textContent = tour.eyebrow;
    metaTitle.textContent   = tour.title;
    introLabel.textContent  = 'Your guided experience begins…';
    inquiryBtn.href = 'mailto:customercare@smsupermalls.com?subject=' + tour.inquirySubject;

    // Reset state
    intro.classList.remove('fade-out');
    introFill.style.transition  = 'none';
    introFill.style.width       = '0%';
    progressFill.style.transition = 'none';
    progressFill.style.width      = '0%';
    playerWrap.innerHTML = '';

    // Open modal
    backdrop.classList.add('open');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.classList.add('scroll-locked');

    // Build YouTube embed — autoplay muted, start at specified second
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/' + tour.videoId
      + '?autoplay=1&mute=1&controls=0&loop=1&playlist=' + tour.videoId
      + '&start=' + (tour.start || 0)
      + '&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1';
    iframe.title        = tour.title;
    iframe.allow        = 'autoplay; fullscreen';
    iframe.setAttribute('allowfullscreen', '');
    playerWrap.appendChild(iframe);

    // Intro fill animation (matches INTRO_DURATION)
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        introFill.style.transition = 'width ' + INTRO_DURATION + 'ms linear';
        introFill.style.width      = '100%';
      });
    });

    // After intro duration, fade intro out and start progress bar
    tourIntroTimer = setTimeout(function () {
      intro.classList.add('fade-out');

      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          progressFill.style.transition = 'width ' + TOUR_DURATION + 'ms linear';
          progressFill.style.width      = '100%';
        });
      });
    }, INTRO_DURATION);

    // Focus close button for accessibility
    setTimeout(function () { if (closeBtn) closeBtn.focus(); }, 100);
  }

  function closeTour() {
    if (!tourOpen) return;
    tourOpen = false;

    clearTimeout(tourProgressTimer);
    clearTimeout(tourIntroTimer);

    backdrop.classList.remove('open');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('scroll-locked');

    // Destroy iframe to stop video
    setTimeout(function () {
      playerWrap.innerHTML = '';
      intro.classList.remove('fade-out');
      progressFill.style.transition = 'none';
      progressFill.style.width      = '0%';
      introFill.style.transition    = 'none';
      introFill.style.width         = '0%';
    }, 500);

    trackCta('tour-close');
  }

  // Wire triggers
  triggers.forEach(function (btn) {
    btn.addEventListener('click', function () {
      openTour(btn.dataset.tour);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeTour);

  backdrop.addEventListener('click', function (e) {
    if (e.target === backdrop) closeTour();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && tourOpen) closeTour();
  });
}

/* ═══════════════════════════════════════════════════════════
   CONTACT DETAILS POPUP
═══════════════════════════════════════════════════════════ */
function initContactPopup() {
  var backdrop = document.getElementById('cp-backdrop');
  var closeBtn = document.getElementById('cp-close');
  if (!backdrop || !closeBtn) return;

  function open() {
    backdrop.classList.add('open');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.classList.add('scroll-locked');
    setTimeout(function () { if (closeBtn) closeBtn.focus(); }, 80);
  }

  function close() {
    backdrop.classList.remove('open');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('scroll-locked');
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-contact-btn]');
    if (btn) {
      e.preventDefault();
      trackCta(btn.dataset.cta || 'contact-popup');
      open();
    }
  });

  closeBtn.addEventListener('click', close);

  backdrop.addEventListener('click', function (e) {
    if (e.target === backdrop) close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) close();
  });
}

/* ═══════════════════════════════════════════════════════════
   INITIALISE ALL MODULES
═══════════════════════════════════════════════════════════ */
function init() {
  initScrollProgress();
  initHeroSlideshow();
  initNav();
  initSmoothScroll();
  initMobileNav();
  initReveal();
  initCounters();
  initCardTilt();
  initAttractionModal();
  initSkyHallPanel();
  initContactModal();
  initCtaTracking();
  initMarquee();
  initTourModal();
  initContactPopup();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
