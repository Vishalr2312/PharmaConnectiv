/* ================================================================
   PHARMA-Connectiv · Shared JS
   ================================================================ */

/* ── Navbar scroll ── */
function initNav() {
  const nb  = document.getElementById('navbar');
  const tog = document.getElementById('nav-toggle');
  const drw = document.getElementById('nav-drawer');
  if (!nb) return;

  const onScroll = () => nb.classList.toggle('scrolled', window.scrollY > 30);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (tog && drw) {
    tog.addEventListener('click', () => {
      const open = drw.classList.toggle('open');
      tog.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    drw.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      drw.classList.remove('open');
      tog.classList.remove('open');
      document.body.style.overflow = '';
    }));
  }
}

/* ── Scroll reveal ── */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ── Smooth scroll ── */
function initScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const t = document.querySelector(this.getAttribute('href'));
      if (!t) return;
      e.preventDefault();
      window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    });
  });
}

/* ── Counter ── */
function animateCounter(el) {
  const target = +el.dataset.count, suffix = el.dataset.suffix || '';
  let start, dur = 1800;
  const step = ts => {
    if (!start) start = ts;
    const p = Math.min((ts - start) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
function initCounters() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { animateCounter(e.target); io.unobserve(e.target); } });
  }, { threshold: .5 });
  document.querySelectorAll('[data-count]').forEach(el => io.observe(el));
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  initNav(); initReveal(); initScroll(); initCounters();
});
