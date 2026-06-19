/* ================================================================
   BLD LABS — subpage engine (learning / roadmap / blogs)
   Lenis + cursor + interactive field + reveals + accordion
================================================================ */
gsap.registerPlugin(ScrollTrigger);
const isTouch = matchMedia('(hover:none)').matches;
const reduced = matchMedia('(prefers-reduced-motion:reduce)').matches;

/* ---------------- smooth scroll ---------------- */
const lenis = new Lenis({ lerp: 0.09 });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add(t => lenis.raf(t * 1000));
gsap.ticker.lagSmoothing(0);
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (!t) return;
    e.preventDefault();
    lenis.scrollTo(t, { duration: 1.2 });
  });
});

/* ---------------- interactive pixel field + glow ---------------- */
(function field() {
  if (reduced || document.body.classList.contains('no-cursor')) return;
  const dpr = Math.min(devicePixelRatio || 1, 2);
  const canvas = document.createElement('canvas');
  canvas.className = 'field';
  const ctx = canvas.getContext('2d');
  const glow = document.createElement('div');
  glow.className = 'glow';
  document.body.prepend(glow);
  document.body.prepend(canvas);
  const GAP = 36, R = 190;
  let w, h, cols, rows;
  const m = { tx: -600, ty: -600, x: -600, y: -600, active: false };
  function resize() {
    w = innerWidth; h = innerHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.ceil(w / GAP) + 1; rows = Math.ceil(h / GAP) + 1;
  }
  resize(); addEventListener('resize', resize);
  addEventListener('mousemove', e => {
    m.tx = e.clientX; m.ty = e.clientY;
    if (!m.active) { m.active = true; glow.style.opacity = '1'; }
  });
  addEventListener('mouseleave', () => { m.active = false; glow.style.opacity = '0'; });
  function draw() {
    requestAnimationFrame(draw);
    m.x += (m.tx - m.x) * 0.12; m.y += (m.ty - m.y) * 0.12;
    glow.style.transform = `translate(${m.x}px,${m.y}px) translate(-50%,-50%)`;
    ctx.clearRect(0, 0, w, h);
    for (let c = 0; c < cols; c++) {
      const px = c * GAP, dxm = px - m.x;
      for (let r = 0; r < rows; r++) {
        const py = r * GAP, dym = py - m.y;
        const d = Math.sqrt(dxm * dxm + dym * dym);
        const t = m.active ? Math.max(0, 1 - d / R) : 0;
        const a = 0.05 + t * t * 0.85, s = 1.4 + t * 3.2;
        ctx.fillStyle = `rgba(82,186,95,${a})`;
        ctx.fillRect(px - s / 2, py - s / 2, s, s);
      }
    }
  }
  requestAnimationFrame(draw);
})();

/* ---------------- custom cursor ---------------- */
(function cursor() {
  const cur = document.getElementById('cursor');
  const label = document.getElementById('cursorLabel');
  if (!cur || isTouch) { if (cur) cur.style.display = 'none'; return; }
  const pos = { x: innerWidth / 2, y: innerHeight / 2 }, tgt = { ...pos };
  addEventListener('mousemove', e => { tgt.x = e.clientX; tgt.y = e.clientY; });
  gsap.ticker.add(() => {
    pos.x += (tgt.x - pos.x) * 0.18; pos.y += (tgt.y - pos.y) * 0.18;
    cur.style.transform = `translate(${pos.x}px,${pos.y}px)`;
  });
  document.querySelectorAll('[data-hover]').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cur.classList.add('is-hover');
      if (el.dataset.label) { label.textContent = el.dataset.label; cur.classList.add('has-label'); }
    });
    el.addEventListener('mouseleave', () => cur.classList.remove('is-hover', 'has-label'));
  });
})();

/* ---------------- magnetic buttons ---------------- */
if (!isTouch && !reduced) {
  document.querySelectorAll('[data-magnetic]').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      gsap.to(el, { x: (e.clientX - r.left - r.width / 2) * 0.3, y: (e.clientY - r.top - r.height / 2) * 0.35, duration: 0.4 });
    });
    el.addEventListener('mouseleave', () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,.4)' }));
  });
}

/* ---------------- scramble on hover ---------------- */
const GLYPHS = '█▓▒░<>/\\_01BLDX#%&';
function scramble(el, finalText, dur = 450) {
  const len = finalText.length, start = performance.now();
  function frame(now) {
    const p = Math.min((now - start) / dur, 1), solved = Math.floor(p * len);
    let out = '';
    for (let i = 0; i < len; i++) out += i < solved || finalText[i] === ' ' ? finalText[i] : GLYPHS[(Math.random() * GLYPHS.length) | 0];
    el.textContent = out;
    if (p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
document.querySelectorAll('[data-scramble]').forEach(el => {
  const original = el.textContent;
  el.addEventListener('mouseenter', () => scramble(el, original));
});

/* ---------------- roadmap accordion ---------------- */
(function roadmap() {
  const weeks = document.querySelectorAll('.rmw');
  if (!weeks.length) return;
  weeks.forEach(w => {
    const bar = w.querySelector('.rmw__bar');
    bar.addEventListener('click', () => w.classList.toggle('is-open'));
  });
  // staggered reveal per level
  document.querySelectorAll('.rm__level').forEach(level => {
    gsap.from(level.querySelectorAll('.rmw'), {
      opacity: 0, y: 24, duration: 0.5, stagger: 0.04, ease: 'power3.out',
      scrollTrigger: { trigger: level, start: 'top 80%' }
    });
  });
})();

/* ---------------- generic title reveal ---------------- */
document.querySelectorAll('.rm__title, .learn__title, .soon__title, .path').forEach(el => {
  gsap.from(el, { opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 90%' } });
});

/* ---------------- blogs "coming soon" bar ---------------- */
(function soon() {
  const bar = document.getElementById('soonBar');
  if (!bar) return;
  gsap.to(bar, { width: '64%', duration: 2, ease: 'power2.inOut', repeat: -1, yoyo: true });
})();
