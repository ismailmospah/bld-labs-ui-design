/* ================================================================
   BLD LABS — Concept 2 "The Studio" · interaction engine
   GSAP + ScrollTrigger + Lenis + Three.js (organic blob)
================================================================ */
gsap.registerPlugin(ScrollTrigger);
const isTouch = matchMedia('(hover:none)').matches;
const reduced = matchMedia('(prefers-reduced-motion:reduce)').matches;

/* ---------------- smooth scroll ---------------- */
const lenis = new Lenis({ lerp: 0.085 });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add(t => lenis.raf(t * 1000));
gsap.ticker.lagSmoothing(0);
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (!t) return;
    e.preventDefault(); closeMenu();
    lenis.scrollTo(t, { duration: 1.3 });
  });
});

/* ---------------- cursor ---------------- */
const cursor = document.getElementById('cursor');
const dot = document.getElementById('cursorDot');
if (!isTouch) {
  const p = { x: innerWidth / 2, y: innerHeight / 2 }, t = { ...p };
  addEventListener('mousemove', e => {
    t.x = e.clientX; t.y = e.clientY;
    dot.style.transform = `translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`;
  });
  gsap.ticker.add(() => {
    p.x += (t.x - p.x) * 0.2; p.y += (t.y - p.y) * 0.2;
    cursor.style.transform = `translate(${p.x}px,${p.y}px) translate(-50%,-50%)`;
  });
  document.querySelectorAll('[data-hover]').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('is-hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('is-hover'));
  });
} else { cursor.style.display = dot.style.display = 'none'; }

/* ---------------- magnetic ---------------- */
if (!isTouch && !reduced) {
  document.querySelectorAll('[data-magnetic]').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      gsap.to(el, { x: (e.clientX - r.left - r.width / 2) * 0.25, y: (e.clientY - r.top - r.height / 2) * 0.3, duration: 0.4 });
    });
    el.addEventListener('mouseleave', () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,.4)' }));
  });
}

/* ---------------- loader ---------------- */
function runLoader() {
  const fill = document.getElementById('loaderFill');
  const pct = document.getElementById('loaderPct');
  const obj = { v: 0 };
  gsap.to(obj, {
    v: 100, duration: reduced ? 0.3 : 1.5, ease: 'power2.inOut',
    onUpdate: () => { fill.style.width = obj.v + '%'; pct.textContent = String(Math.round(obj.v)).padStart(2, '0'); },
    onComplete: revealHero
  });
}
function revealHero() {
  const tl = gsap.timeline();
  tl.to('.loader__inner', { autoAlpha: 0, duration: 0.3 })
    .to('#loader', { yPercent: -100, duration: 0.8, ease: 'power4.inOut', onComplete: () => document.getElementById('loader').remove() })
    .to('.hero__title .up', { y: 0, duration: 0.9, ease: 'power4.out', stagger: 0.1 }, '-=0.3')
    .to('.hero__lead, .hero__act', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1 }, '-=0.6');
}
addEventListener('load', runLoader);
if (document.readyState === 'complete') runLoader();

/* ---------------- THREE.JS : organic green blob ---------------- */
(function blob() {
  const canvas = document.getElementById('blob');
  if (!canvas || !window.THREE || reduced) return;
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.z = 5;

  // hash-based value noise for a one-time organic displacement
  function hash(x, y, z) {
    const s = Math.sin(x * 12.9898 + y * 78.233 + z * 37.719) * 43758.5453;
    return s - Math.floor(s);
  }
  const geo = new THREE.IcosahedronGeometry(1.6, 24);
  const posAttr = geo.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < posAttr.count; i++) {
    v.fromBufferAttribute(posAttr, i);
    const n = v.clone().normalize();
    const lump =
      Math.sin(n.x * 3 + n.y * 2) * 0.18 +
      Math.cos(n.y * 4 - n.z * 3) * 0.12 +
      (hash(Math.round(n.x * 4), Math.round(n.y * 4), Math.round(n.z * 4)) - 0.5) * 0.16;
    v.addScaledVector(n, lump);
    posAttr.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();

  const mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0x52ba5f }));
  const wire = new THREE.LineSegments(
    new THREE.WireframeGeometry(geo),
    new THREE.LineBasicMaterial({ color: 0x2c6e35, transparent: true, opacity: 0.25 })
  );
  const group = new THREE.Group();
  group.add(mesh); group.add(wire);
  group.scale.set(0.001, 0.001, 0.001);
  scene.add(group);
  gsap.to(group.scale, { x: 1, y: 1, z: 1, duration: 1.8, ease: 'elastic.out(1,.6)', delay: 0.8 });

  const m = { x: 0, y: 0, tx: 0, ty: 0 };
  addEventListener('mousemove', e => { m.tx = (e.clientX / innerWidth) * 2 - 1; m.ty = (e.clientY / innerHeight) * 2 - 1; });
  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
  }
  resize(); addEventListener('resize', resize);
  let vis = true;
  new IntersectionObserver(([e]) => vis = e.isIntersecting).observe(canvas);
  function tick() {
    requestAnimationFrame(tick);
    if (!vis) return;
    m.x += (m.tx - m.x) * 0.05; m.y += (m.ty - m.y) * 0.05;
    group.rotation.y += 0.0035;
    group.rotation.x = m.y * 0.4;
    group.rotation.z = m.x * 0.2;
    renderer.render(scene, camera);
  }
  tick();
})();

/* ---------------- nav + menu ---------------- */
const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
function closeMenu() { menu.classList.remove('is-open'); burger.classList.remove('is-open'); }
burger.addEventListener('click', () => { menu.classList.toggle('is-open'); burger.classList.toggle('is-open'); });

/* ---------------- marquee (velocity aware) ---------------- */
(function strip() {
  const track = document.querySelector('.strip__track');
  if (!track) return;
  const tw = gsap.to(track, { xPercent: -50, ease: 'none', duration: 26, repeat: -1 });
  ScrollTrigger.create({
    trigger: '.strip',
    onUpdate: self => {
      const vv = gsap.utils.clamp(0.3, 4, Math.abs(self.getVelocity()) / 320);
      gsap.to(tw, { timeScale: (self.direction || 1) * vv, duration: 0.3, overwrite: true });
    }
  });
})();

/* ---------------- generic reveals ---------------- */
document.querySelectorAll('.reveal-up').forEach(el => {
  if (el.closest('.hero')) return;
  gsap.to(el, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 88%' } });
});

/* big serif headings: line mask reveal */
document.querySelectorAll('.serv__h, .work__h, .proc__h, .contact__h').forEach(el => {
  gsap.from(el, { yPercent: 18, opacity: 0, duration: 0.9, ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 85%' } });
});
// contact lines slam (overflow masked)
gsap.to('.contact__h .up', { y: 0, duration: 0.9, ease: 'power4.out', stagger: 0.1,
  scrollTrigger: { trigger: '.contact', start: 'top 70%' } });

/* ---------------- about : word-by-word ---------------- */
(function aboutLite() {
  const words = gsap.utils.toArray('.about__statement .word');
  if (!words.length) return;
  ScrollTrigger.create({
    trigger: '.about__statement', start: 'top 75%', end: 'bottom 55%', scrub: 0.4,
    onUpdate: self => {
      const n = Math.floor(self.progress * words.length);
      words.forEach((w, i) => w.classList.toggle('lit', i <= n));
    }
  });
})();

/* ---------------- counters ---------------- */
document.querySelectorAll('[data-count]').forEach(el => {
  const target = +el.dataset.count, o = { v: 0 };
  ScrollTrigger.create({ trigger: el, start: 'top 92%', once: true,
    onEnter: () => gsap.to(o, { v: target, duration: 1.4, ease: 'power2.out',
      onUpdate: () => el.textContent = Math.round(o.v) }) });
});

/* ---------------- services accordion + floating media ---------------- */
(function accordion() {
  const items = gsap.utils.toArray('.acc__item');
  const media = document.getElementById('accMedia');
  const img = media.querySelector('img');

  function open(item) {
    items.forEach(i => i.classList.toggle('is-open', i === item));
    const src = item.dataset.img;
    if (img.getAttribute('src') !== src) img.src = src;
  }
  items.forEach(item => {
    item.querySelector('.acc__bar').addEventListener('click', () => open(item));
    if (!isTouch) item.addEventListener('mouseenter', () => open(item));
  });

  if (!isTouch) {
    let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y, raf;
    addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });
    function loop() { x += (tx - x) * 0.1; y += (ty - y) * 0.1; media.style.left = x + 'px'; media.style.top = y + 'px'; raf = requestAnimationFrame(loop); }
    const serv = document.querySelector('.serv');
    serv.addEventListener('mouseenter', () => { gsap.to(media, { opacity: 1, scale: 1, rotate: 0, duration: 0.4, ease: 'power3.out' }); cancelAnimationFrame(raf); loop(); });
    serv.addEventListener('mouseleave', () => { gsap.to(media, { opacity: 0, scale: 0.9, rotate: -4, duration: 0.3 }); cancelAnimationFrame(raf); });
  }
})();

/* ---------------- work : sticky stack scale-down ---------------- */
(function stack() {
  if (matchMedia('(max-width:900px)').matches) return;
  const cards = gsap.utils.toArray('.scard');
  cards.forEach((card, i) => {
    if (i === cards.length - 1) return;
    gsap.to(card.querySelector('.scard__inner'), {
      scale: 0.92, filter: 'brightness(0.85)', ease: 'none',
      scrollTrigger: { trigger: cards[i + 1], start: 'top bottom', end: 'top top', scrub: true }
    });
  });
  // reveal each card's content
  cards.forEach(card => {
    gsap.from(card.querySelectorAll('.scard__txt > *'), {
      y: 40, opacity: 0, duration: 0.7, stagger: 0.07, ease: 'power3.out',
      scrollTrigger: { trigger: card, start: 'top 60%' }
    });
  });
})();

/* ---------------- process line draw ---------------- */
(function procLine() {
  const line = document.getElementById('procLine');
  if (!line) return;
  gsap.to(line, { height: '100%', ease: 'none',
    scrollTrigger: { trigger: '.proc__steps', start: 'top 60%', end: 'bottom 80%', scrub: 0.5 } });
})();
