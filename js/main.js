/* ================================================================
   BLD LABS — interaction engine
   GSAP + ScrollTrigger + Lenis + Three.js
================================================================ */
gsap.registerPlugin(ScrollTrigger);

const isTouch = matchMedia('(hover:none)').matches;
const reduced = matchMedia('(prefers-reduced-motion:reduce)').matches;

/* ---------------- interactive pixel field + cursor glow ---------------- */
(function field() {
  if (reduced) return;
  const dpr = Math.min(devicePixelRatio || 1, 2);
  const canvas = document.createElement('canvas');
  canvas.className = 'field';
  const ctx = canvas.getContext('2d');
  const glow = document.createElement('div');
  glow.className = 'glow';
  document.body.prepend(glow);
  document.body.prepend(canvas);

  const GAP = 36;            // spacing between pixels
  const R = 190;            // glow radius of influence
  let w, h, cols, rows;
  // mouse target + smoothed position (parked off-screen until first move)
  const m = { tx: -600, ty: -600, x: -600, y: -600, active: false };

  function resize() {
    w = innerWidth; h = innerHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.ceil(w / GAP) + 1;
    rows = Math.ceil(h / GAP) + 1;
  }
  resize();
  addEventListener('resize', resize);

  addEventListener('mousemove', e => {
    m.tx = e.clientX; m.ty = e.clientY;
    if (!m.active) { m.active = true; glow.style.opacity = '1'; }
  });
  addEventListener('mouseleave', () => { m.active = false; glow.style.opacity = '0'; });

  function draw() {
    requestAnimationFrame(draw);
    m.x += (m.tx - m.x) * 0.12;
    m.y += (m.ty - m.y) * 0.12;
    glow.style.transform = `translate(${m.x}px,${m.y}px) translate(-50%,-50%)`;
    ctx.clearRect(0, 0, w, h);
    for (let c = 0; c < cols; c++) {
      const px = c * GAP;
      const dxm = px - m.x;
      for (let r = 0; r < rows; r++) {
        const py = r * GAP;
        const dym = py - m.y;
        const d = Math.sqrt(dxm * dxm + dym * dym);
        const t = m.active ? Math.max(0, 1 - d / R) : 0;
        const a = 0.05 + t * t * 0.85;          // faint base, bright near cursor
        const s = 1.4 + t * 3.2;                // pixels grow toward the cursor
        ctx.fillStyle = `rgba(82,186,95,${a})`;
        ctx.fillRect(px - s / 2, py - s / 2, s, s);
      }
    }
  }
  requestAnimationFrame(draw);
})();

/* ---------------- smooth scroll (Lenis) ---------------- */
const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1.0 });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add(t => lenis.raf(t * 1000));
gsap.ticker.lagSmoothing(0);

// anchor links through lenis
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    closeMenu();
    lenis.scrollTo(target, { offset: 0, duration: 1.4 });
  });
});

/* ---------------- text scramble utility ---------------- */
const GLYPHS = '█▓▒░<>/\\_01BLDX#%&';
function scramble(el, finalText, dur = 600) {
  const len = finalText.length;
  const start = performance.now();
  function frame(now) {
    const p = Math.min((now - start) / dur, 1);
    const solved = Math.floor(p * len);
    let out = '';
    for (let i = 0; i < len; i++) {
      out += i < solved || finalText[i] === ' '
        ? finalText[i]
        : GLYPHS[(Math.random() * GLYPHS.length) | 0];
    }
    el.textContent = out;
    if (p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
document.querySelectorAll('[data-scramble]').forEach(el => {
  const original = el.textContent;
  el.addEventListener('mouseenter', () => scramble(el, original, 450));
});

/* ---------------- custom cursor ---------------- */
const cursor = document.getElementById('cursor');
const cursorLabel = document.getElementById('cursorLabel');
if (!isTouch) {
  const pos = { x: innerWidth / 2, y: innerHeight / 2 };
  const tgt = { ...pos };
  addEventListener('mousemove', e => { tgt.x = e.clientX; tgt.y = e.clientY; });
  gsap.ticker.add(() => {
    pos.x += (tgt.x - pos.x) * 0.18;
    pos.y += (tgt.y - pos.y) * 0.18;
    cursor.style.transform = `translate(${pos.x}px,${pos.y}px)`;
  });
  document.querySelectorAll('[data-hover]').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('is-hover');
      const label = el.dataset.label;
      if (label) { cursorLabel.textContent = label; cursor.classList.add('has-label'); }
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('is-hover', 'has-label');
    });
  });
} else {
  cursor.style.display = 'none';
}

/* ---------------- magnetic buttons ---------------- */
if (!isTouch && !reduced) {
  document.querySelectorAll('[data-magnetic]').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      gsap.to(el, {
        x: (e.clientX - r.left - r.width / 2) * 0.3,
        y: (e.clientY - r.top - r.height / 2) * 0.35,
        duration: 0.4, ease: 'power2.out'
      });
    });
    el.addEventListener('mouseleave', () =>
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,.4)' }));
  });
}

/* ---------------- preloader : boot sequence ---------------- */
const bootMsgs = [
  '<b>BLD.LABS</b> // BOOT SEQUENCE v2.0',
  'LOADING STRATEGY MODULE ........ <b>OK</b>',
  'LOADING DESIGN SYSTEM .......... <b>OK</b>',
  'COMPILING TECHNOLOGY STACK ..... <b>OK</b>',
  'CALIBRATING RESULTS ENGINE ..... <b>OK</b>',
  'INITIALIZING EXPERIENCE ........ <b>READY</b>'
];
const bootLines = document.getElementById('bootLines');
const bootBar = document.getElementById('bootBar');
const bootPct = document.getElementById('bootPct');
const BLOCKS = 26;

function runBoot() {
  let i = 0;
  const stepTime = reduced ? 10 : 210;
  const int = setInterval(() => {
    if (i < bootMsgs.length) {
      const d = document.createElement('div');
      d.className = 'ok';
      d.innerHTML = '&gt; ' + bootMsgs[i];
      bootLines.appendChild(d);
    }
    const p = Math.min((i + 1) / bootMsgs.length, 1);
    bootBar.textContent = '█'.repeat(Math.round(BLOCKS * p)) + '░'.repeat(BLOCKS - Math.round(BLOCKS * p));
    bootPct.textContent = Math.round(p * 100) + '%';
    i++;
    if (i > bootMsgs.length) { clearInterval(int); exitPreloader(); }
  }, stepTime);
}

function exitPreloader() {
  const tl = gsap.timeline();
  tl.to('#preloader', {
    yPercent: -100, duration: 0.7, ease: 'power4.inOut', delay: 0.25,
    onComplete: () => document.getElementById('preloader').remove()
  });
  heroIntro(tl);
}

/* ---------------- hero intro (slam, no fades) ---------------- */
function heroIntro(tl) {
  tl.to('.hero__title .word', {
    y: 0, duration: 0.55, ease: 'back.out(1.4)', stagger: 0.09
  }, '-=0.15')
  .from('.hero__title .mark', {
    scaleX: 0, transformOrigin: 'left', duration: 0.4, ease: 'power2.out', stagger: 0.12
  }, '-=0.15')
  .to('.hero__inner .reveal', {
    opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', stagger: 0.12
  }, '-=0.3');
  typeLine('> BLD.LABS — PRODUCT & DESIGN STUDIO_');
}

function typeLine(text) {
  const el = document.getElementById('typeLine');
  let i = 0;
  const int = setInterval(() => {
    el.textContent = text.slice(0, ++i);
    if (i >= text.length) clearInterval(int);
  }, reduced ? 1 : 34);
}

addEventListener('load', runBoot);
// safety: if load already fired
if (document.readyState === 'complete') runBoot();

/* ---------------- THREE.JS : dot-matrix field ---------------- */
(function heroField() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas || !window.THREE || reduced) return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
  camera.position.set(0, 4.2, 9);
  camera.lookAt(0, 0, 0);

  const COLS = isTouch ? 70 : 110;
  const ROWS = isTouch ? 40 : 60;
  const SPACING = 0.32;
  const count = COLS * ROWS;
  const positions = new Float32Array(count * 3);
  const base = new Float32Array(count * 2);
  let k = 0;
  for (let x = 0; x < COLS; x++) {
    for (let z = 0; z < ROWS; z++) {
      const px = (x - COLS / 2) * SPACING;
      const pz = (z - ROWS / 2) * SPACING;
      positions[k * 3] = px;
      positions[k * 3 + 1] = 0;
      positions[k * 3 + 2] = pz;
      base[k * 2] = px;
      base[k * 2 + 1] = pz;
      k++;
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const mat = new THREE.PointsMaterial({
    color: 0x52ba5f, size: 0.045, transparent: true, opacity: 0.85,
    blending: THREE.AdditiveBlending, depthWrite: false
  });
  scene.add(new THREE.Points(geo, mat));

  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  addEventListener('mousemove', e => {
    mouse.tx = (e.clientX / innerWidth) * 2 - 1;
    mouse.ty = (e.clientY / innerHeight) * 2 - 1;
  });

  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  addEventListener('resize', resize);

  let visible = true;
  new IntersectionObserver(([e]) => visible = e.isIntersecting).observe(canvas);

  const pos = geo.attributes.position.array;
  function tick(t) {
    requestAnimationFrame(tick);
    if (!visible) return;
    const time = t * 0.001;
    mouse.x += (mouse.tx - mouse.x) * 0.05;
    mouse.y += (mouse.ty - mouse.y) * 0.05;
    const mx = mouse.x * (COLS * SPACING) / 2.2;
    const mz = mouse.y * (ROWS * SPACING) / 2.2;
    for (let i = 0; i < count; i++) {
      const bx = base[i * 2], bz = base[i * 2 + 1];
      let y = Math.sin(bx * 0.7 + time * 1.2) * 0.35
            + Math.cos(bz * 0.9 + time * 0.9) * 0.3
            + Math.sin((bx + bz) * 0.45 + time * 0.6) * 0.25;
      // mouse ripple — push dots up near the pointer
      const dx = bx - mx, dz = bz - mz;
      const d2 = dx * dx + dz * dz;
      y += Math.max(0, 1.4 - d2 * 0.55) * 0.9;
      pos[i * 3 + 1] = y;
    }
    geo.attributes.position.needsUpdate = true;
    camera.position.x = mouse.x * 0.6;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  }
  requestAnimationFrame(tick);
})();

/* ---------------- project form modal ---------------- */
(function projectForm() {
  const modal = document.getElementById('projectModal');
  if (!modal) return;
  const form = document.getElementById('pform');
  const serviceSel = document.getElementById('pservice');
  const specify = document.getElementById('pspecify');
  const note = document.getElementById('pnote');
  let lastFocus = null;

  function open(e) {
    if (e) e.preventDefault();
    lastFocus = document.activeElement;
    closeMenu();
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    lenis.stop();
    setTimeout(() => form.querySelector('input')?.focus(), 350);
  }
  function close() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    lenis.start();
    lastFocus?.focus?.();
  }

  document.querySelectorAll('.js-open-form').forEach(b => b.addEventListener('click', open));
  document.querySelectorAll('.js-close-form').forEach(b => b.addEventListener('click', close));
  addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('is-open')) close(); });

  // reveal "describe the service" only when Other is picked
  serviceSel.addEventListener('change', () => {
    const other = serviceSel.value === 'Other';
    specify.hidden = !other;
    specify.querySelector('input').required = other;
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const f = new FormData(form);
    const svc = f.get('service') + (f.get('specify') ? ' — ' + f.get('specify') : '');
    const subject = `New project brief — ${f.get('name')} (${f.get('company')})`;
    const body =
      `Full name: ${f.get('name')}\n` +
      `WhatsApp: ${f.get('whatsapp')}\n` +
      `Country: ${f.get('country')}\n` +
      `Company: ${f.get('company')}\n` +
      `Service: ${svc}\n` +
      `Budget: ${f.get('budget')}\n` +
      `Industry: ${f.get('industry')}\n\n` +
      `Project details:\n${f.get('details')}\n`;
    note.hidden = false;
    window.location.href = `mailto:bldlabscompany@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setTimeout(() => { note.hidden = true; }, 4000);
  });
})();

/* ---------------- nav state + mobile menu ---------------- */
const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
lenis.on('scroll', ({ scroll }) => nav.classList.toggle('is-scrolled', scroll > 40));
function closeMenu() { menu.classList.remove('is-open'); burger.classList.remove('is-open'); }
burger.addEventListener('click', () => {
  menu.classList.toggle('is-open');
  burger.classList.toggle('is-open');
});

/* ---------------- marquee : velocity-aware ---------------- */
document.querySelectorAll('.marquee').forEach(mq => {
  const track = mq.querySelector('.marquee__track');
  const tween = gsap.to(track, { xPercent: -50, ease: 'none', duration: 22, repeat: -1 });
  ScrollTrigger.create({
    trigger: mq,
    onUpdate: self => {
      const v = gsap.utils.clamp(0.4, 4, Math.abs(self.getVelocity()) / 300);
      gsap.to(tween, { timeScale: (self.direction || 1) * v, duration: 0.3, overwrite: true });
    }
  });
});

/* ---------------- statement : word-by-word light-up ---------------- */
(function statementReveal() {
  const el = document.getElementById('statementText');
  if (!el) return;
  const hot = ['UNDERSTANDING', 'ASSUMPTIONS.', 'BEFORE'];
  el.innerHTML = el.textContent.split(' ').map(w =>
    `<span class="w${hot.includes(w) ? ' hot' : ''}">${w}</span>`).join(' ');
  const words = el.querySelectorAll('.w');
  ScrollTrigger.create({
    trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: 0.4,
    onUpdate: self => {
      const n = Math.floor(self.progress * words.length);
      words.forEach((w, i) => w.classList.toggle('lit', i <= n));
    }
  });
})();

/* ---------------- generic reveals (slam up) ---------------- */
document.querySelectorAll('.reveal').forEach(el => {
  if (el.closest('.hero')) return; // hero handles its own
  gsap.to(el, {
    opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 88%' }
  });
});

/* section titles: clip-slam in */
document.querySelectorAll('.section__title').forEach(el => {
  gsap.from(el, {
    yPercent: 60, opacity: 0, duration: 0.6, ease: 'back.out(1.6)',
    scrollTrigger: { trigger: el, start: 'top 86%' }
  });
});

/* ---------------- counters ---------------- */
document.querySelectorAll('[data-count]').forEach(el => {
  const target = +el.dataset.count;
  const obj = { v: 0 };
  ScrollTrigger.create({
    trigger: el, start: 'top 90%', once: true,
    onEnter: () => gsap.to(obj, {
      v: target, duration: 1.4, ease: 'power2.out',
      onUpdate: () => { el.textContent = Math.round(obj.v); }
    })
  });
});

/* ---------------- services : module console ---------------- */
(function moduleConsole() {
  const list = document.getElementById('modList');
  if (!list) return;
  const MODS = [
    {
      title: 'PRODUCT DESIGN',
      path: '/bld/services/product-design',
      desc: 'Designing end-to-end digital products that balance business goals, user needs, and technical constraints.',
      meters: [['STRATEGY', 9], ['USER FOCUS', 10], ['SCALABILITY', 8]]
    },
    {
      title: 'UX RESEARCH',
      path: '/bld/services/ux-research',
      desc: 'Uncovering real user problems through research, testing, and insights that guide confident product decisions.',
      meters: [['INTERVIEWS', 9], ['USABILITY TESTS', 9], ['INSIGHTS', 10]]
    },
    {
      title: 'UI DESIGN',
      path: '/bld/services/ui-design',
      desc: 'Creating clean, accessible, and consistent interfaces that feel professional and intentional.',
      meters: [['CONSISTENCY', 10], ['ACCESSIBILITY', 9], ['CRAFT', 10]]
    },
    {
      title: 'DEVELOPMENT',
      path: '/bld/services/development',
      desc: 'Full-stack web & mobile development — Frontend, Backend, and Flutter solutions.',
      meters: [['FRONTEND', 9], ['BACKEND', 9], ['FLUTTER', 10]]
    }
  ];
  const BAR = 14;
  const titleEl = document.getElementById('panelTitle');
  const descEl = document.getElementById('panelDesc');
  const pathEl = document.getElementById('panelPath');
  const idxEl = document.getElementById('panelIdx');
  const metersEl = document.getElementById('panelMeters');
  const buttons = list.querySelectorAll('.mod');
  let current = 0, autoTimer;

  function renderMeters(mod) {
    metersEl.innerHTML = mod.meters.map(([label, lv]) =>
      `<div class="meter"><b>${label}</b><span data-lv="${lv}">${'░'.repeat(BAR)}</span></div>`).join('');
    // fill bars in steps
    metersEl.querySelectorAll('.meter span').forEach((span, mi) => {
      const fill = Math.round(BAR * (+span.dataset.lv) / 10);
      let step = 0;
      const int = setInterval(() => {
        step++;
        span.textContent = '▓'.repeat(Math.min(step, fill)) + '░'.repeat(BAR - Math.min(step, fill));
        if (step >= fill) clearInterval(int);
      }, 28 + mi * 6);
    });
  }

  function select(i) {
    if (i === current) return; // already showing this module — don't re-scramble
    current = i;
    buttons.forEach((b, bi) => b.classList.toggle('is-active', bi === i));
    const mod = MODS[i];
    scramble(titleEl, mod.title, 420);
    scramble(pathEl, mod.path, 380);
    descEl.textContent = mod.desc;
    gsap.fromTo(descEl, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' });
    idxEl.textContent = 'MODULE 0' + (i + 1) + ' / 0' + MODS.length;
    renderMeters(mod);
  }

  function restartAuto(delay) {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => select((current + 1) % MODS.length), delay || 5000);
  }

  // hover to switch — pauses the auto-cycle while the pointer is on the list
  buttons.forEach(b => {
    b.addEventListener('mouseenter', () => { clearInterval(autoTimer); select(+b.dataset.mod); });
    b.addEventListener('click', () => { clearInterval(autoTimer); select(+b.dataset.mod); }); // touch fallback
  });
  list.addEventListener('mouseleave', () => restartAuto());

  // start cycling only when section is visible
  ScrollTrigger.create({
    trigger: '.console', start: 'top 85%', once: true,
    onEnter: () => { current = -1; select(0); restartAuto(); }
  });
})();

/* ---------------- work : pinned horizontal scroll ---------------- */
(function workScroll() {
  const track = document.getElementById('workTrack');
  const idxEl = document.getElementById('workIdx');
  const cards = track.children.length;
  function dist() { return track.scrollWidth - document.querySelector('.work__pin').clientWidth + 80; }
  gsap.to(track, {
    x: () => -dist(),
    ease: 'none',
    scrollTrigger: {
      trigger: '.work',
      start: 'top top',
      end: () => '+=' + dist(),
      pin: true,
      scrub: 0.6,
      invalidateOnRefresh: true,
      onUpdate: self => {
        const i = Math.min(cards, Math.max(1, Math.round(self.progress * (cards - 1)) + 1));
        idxEl.textContent = String(i).padStart(2, '0');
      }
    }
  });
  // card entrance
  gsap.from('.card', {
    y: 90, opacity: 0, stagger: 0.08, duration: 0.6, ease: 'power3.out',
    scrollTrigger: { trigger: '.work', start: 'top 70%' }
  });
})();

/* ---------------- CTA title slam ---------------- */
gsap.from('.cta__title .line', {
  yPercent: 110, duration: 0.7, ease: 'back.out(1.3)', stagger: 0.12,
  scrollTrigger: { trigger: '.cta', start: 'top 75%' }
});
