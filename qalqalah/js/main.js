/* =================================================================
   QALQALAH — site interactions
================================================================= */
(() => {
  const doc = document.documentElement;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const hasGsap = !!(window.gsap && window.ScrollTrigger);
  const toArabic = n => String(n).replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);

  /* If the animation library failed to load, show everything statically. */
  if (!hasGsap) doc.classList.remove('js');
  else {
    gsap.registerPlugin(ScrollTrigger);
    /* Visitors who asked for less motion get the end state almost instantly. */
    if (reduce) gsap.globalTimeline.timeScale(50);
  }

  /* ---------------- Smooth scroll ---------------- */
  let lenis = null;
  if (hasGsap && window.Lenis && !reduce) {
    lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  const scrollToTarget = (target) => {
    if (lenis) lenis.scrollTo(target, { offset: -70, duration: 1.4 });
    else (typeof target === 'string' ? $(target) : target)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  };

  /* ---------------- Nav ---------------- */
  const nav = $('#nav');
  const burger = $('#burger');
  const sheet = $('#sheet');
  let lastY = 0;
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle('is-scrolled', y > 30);
    const goingDown = y > lastY && y > window.innerHeight * .8;
    nav.classList.toggle('is-hidden', goingDown && sheet.hidden);
    lastY = y;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const setSheet = (open) => {
    sheet.hidden = !open;
    burger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    if (lenis) open ? lenis.stop() : lenis.start();
    if (open && hasGsap && !reduce) gsap.from($$('a', sheet), { y: 30, opacity: 0, stagger: .05, duration: .6, ease: 'power3.out' });
  };
  burger.addEventListener('click', () => setSheet(sheet.hidden));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !sheet.hidden) setSheet(false); });

  $$('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    const el = id === '#top' ? document.body : $(id);
    if (!el) return;
    e.preventDefault();
    if (!sheet.hidden) setSheet(false);
    scrollToTarget(id === '#top' ? 0 : el);
  }));

  /* ---------------- Arch lengths (for draw-in) ---------------- */
  $$('.arch').forEach(p => p.style.setProperty('--len', Math.ceil(p.getTotalLength())));

  /* ---------------- Loader + hero intro ---------------- */
  const loader = $('#loader');
  const heroIntro = () => {
    if (!hasGsap) return;
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    tl.to('.hero .arch', { strokeDashoffset: 0, duration: 2.2, stagger: .18, ease: 'power2.inOut' }, 0)
      .to('.hero__title .line>span', { y: 0, duration: 1.3, stagger: .12 }, .15)
      .to('[data-hero]', { opacity: 1, y: 0, duration: 1.1, stagger: .08 }, .3)
      .fromTo('.phone--hero', { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 1.6 }, .35)
      .fromTo('.hero .float', { opacity: 0, scale: .6, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 1, stagger: .12, ease: 'back.out(1.8)' }, .9)
      .add(() => {
        if (reduce) return;
        $$('.hero .float').forEach((f, i) => gsap.to(f, { y: i % 2 ? 10 : -10, duration: 2.6 + i * .4, yoyo: true, repeat: -1, ease: 'sine.inOut' }));
      });
  };
  const hideLoader = () => {
    if (!hasGsap || reduce) { loader.remove(); heroIntro(); return; }
    loader.classList.add('is-done');
    gsap.timeline()
      .to('.loader__mark, .loader__word', { scale: .9, opacity: 0, duration: .45, ease: 'power2.in' })
      .to(loader, { clipPath: 'inset(0 0 100% 0)', duration: .9, ease: 'expo.inOut' }, '-=.1')
      .add(() => loader.remove())
      .add(heroIntro, '-=.55');
  };
  const minWait = new Promise(r => setTimeout(r, reduce ? 0 : 1200));
  const fonts = document.fonts ? document.fonts.ready : Promise.resolve();
  const maxWait = new Promise(r => setTimeout(r, 3500));
  Promise.race([Promise.all([minWait, fonts]), maxWait]).then(hideLoader);

  /* ---------------- Generic reveals ---------------- */
  if (hasGsap) {
    ScrollTrigger.batch('[data-reveal]', {
      start: 'top 88%',
      once: true,
      onEnter: els => gsap.to(els, { opacity: 1, y: 0, duration: 1.1, stagger: .09, ease: 'expo.out' })
    });

    if (!reduce) {
      gsap.to('.hero__callig--a', { y: 140, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
      gsap.to('.hero__callig--b', { y: -100, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
      gsap.to('.cta__callig', { y: 120, ease: 'none', scrollTrigger: { trigger: '.cta', start: 'top bottom', end: 'bottom top', scrub: true } });
      gsap.from('.cta__arch .arch', { strokeDashoffset: (i, el) => el.getTotalLength(), strokeDasharray: (i, el) => el.getTotalLength(), ease: 'none', scrollTrigger: { trigger: '.cta', start: 'top 80%', end: 'top 20%', scrub: true } });
      gsap.from('.cta__mascot', { yPercent: 40, opacity: 0, ease: 'none', scrollTrigger: { trigger: '.cta__mascot', start: 'top bottom', end: 'top 70%', scrub: true } });
      gsap.from('.phone--badge', { rotate: -6, y: 60, ease: 'none', scrollTrigger: { trigger: '.badges', start: 'top bottom', end: 'center center', scrub: true } });
      gsap.from('.phone--card', { y: 120, ease: 'none', scrollTrigger: { trigger: '.card--group', start: 'top bottom', end: 'center center', scrub: true } });
    }

    /* Current section in nav */
    $$('.nav__links a').forEach(a => {
      const sec = $(a.getAttribute('href'));
      if (!sec) return;
      ScrollTrigger.create({ trigger: sec, start: 'top 45%', end: 'bottom 45%', toggleClass: { targets: a, className: 'is-current' } });
    });
  }

  /* ---------------- 01 · Qalqalah letters ---------------- */
  const ECHO = [
    { w: 'ٱ<mark>قْ</mark>رَأْ', ref: 'سورة العلق · ١', note: 'القاف ساكنة في وسط الكلمة، فتُقلقَل قلقلةً صغرى.' },
    { w: 'أَ<mark>طْ</mark>وَارًا', ref: 'سورة نوح · ١٤', note: 'الطاء ساكنة في وسط الكلمة، فتُقلقَل قلقلةً صغرى.' },
    { w: 'ٱلْأَ<mark>بْ</mark>تَرُ', ref: 'سورة الكوثر · ٣', note: 'الباء ساكنة في وسط الكلمة، فتُقلقَل قلقلةً صغرى.' },
    { w: 'ٱلنَّ<mark>جْ</mark>دَيْنِ', ref: 'سورة البلد · ١٠', note: 'الجيم ساكنة في وسط الكلمة، فتُقلقَل قلقلةً صغرى.' },
    { w: 'قَ<mark>دْ</mark> أَفْلَحَ', ref: 'سورة المؤمنون · ١', note: 'الدال ساكنة عند الوصل فتُقلقَل قلقلةً صغرى، وتصير كبرى إذا وقفتَ عليها.' }
  ];
  const letters = $$('.letter');
  const echo = $('.echo');
  const echoWord = $('#echoWord'), echoRef = $('#echoRef'), echoNote = $('#echoNote');
  let letterIdx = 0, userTouched = false, autoTimer = null;

  const ring = () => { echo.classList.remove('is-ringing'); void echo.offsetWidth; echo.classList.add('is-ringing'); };
  const setLetter = (i, fromUser) => {
    letterIdx = i;
    letters.forEach((b, j) => {
      const on = j === i;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-selected', String(on));
    });
    const btn = letters[i];
    btn.classList.remove('is-bounce'); void btn.offsetWidth; btn.classList.add('is-bounce');
    const d = ECHO[i];
    const swap = () => { echoWord.innerHTML = d.w; echoRef.textContent = d.ref; echoNote.textContent = d.note; };
    if (hasGsap && !reduce) {
      gsap.timeline()
        .to([echoWord, echoRef, echoNote], { opacity: 0, y: -10, duration: .18, ease: 'power2.in' })
        .add(swap)
        .fromTo(echoWord, { opacity: 0, y: 26, scale: .96 }, { opacity: 1, y: 0, scale: 1, duration: .7, ease: 'back.out(2.2)' })
        .to([echoRef, echoNote], { opacity: 1, y: 0, duration: .5, stagger: .06, ease: 'power3.out' }, '-=.5');
    } else swap();
    ring();
    if (fromUser) { userTouched = true; clearInterval(autoTimer); }
  };
  letters.forEach((b, i) => {
    b.addEventListener('click', () => setLetter(i, true));
    b.addEventListener('keydown', e => {
      const dir = e.key === 'ArrowLeft' ? 1 : e.key === 'ArrowRight' ? -1 : 0; // RTL
      if (!dir) return;
      e.preventDefault();
      const n = (letterIdx + dir + letters.length) % letters.length;
      letters[n].focus(); setLetter(n, true);
    });
  });
  if (!reduce && 'IntersectionObserver' in window) {
    new IntersectionObserver(([en]) => {
      clearInterval(autoTimer);
      if (en.isIntersecting && !userTouched) {
        autoTimer = setInterval(() => setLetter((letterIdx + 1) % letters.length), 3200);
      }
    }, { threshold: .5 }).observe(echo);
  }

  /* ---------------- Manifesto word scrub ---------------- */
  const man = $('#manifesto');
  if (man) {
    const gold = ['معلّمٌ', 'صغيرٌ', 'جيبك'];
    man.innerHTML = man.textContent.trim().split(/\s+/).map(w =>
      `<span class="w${gold.some(g => w.startsWith(g)) ? ' is-gold' : ''}">${w}</span>`).join(' ');
    if (hasGsap && !reduce) {
      gsap.to($$('.w', man), {
        opacity: 1, stagger: .1, ease: 'none',
        scrollTrigger: { trigger: man, start: 'top 78%', end: 'bottom 45%', scrub: .6 }
      });
    } else $$('.w', man).forEach(w => (w.style.opacity = 1));
  }

  /* ---------------- 02 · Sticky phone steps ---------------- */
  const steps = $$('.step');
  const stickyImgs = $$('.phone--sticky .phone__screen img');
  const dots = $$('.how__dots i');
  const setStep = (i) => {
    steps.forEach((s, j) => s.classList.toggle('is-active', j === i));
    stickyImgs.forEach((im, j) => im.classList.toggle('is-active', j === i));
    dots.forEach((d, j) => d.classList.toggle('is-active', j === i));
  };
  if (hasGsap) {
    ScrollTrigger.matchMedia({
      '(min-width: 961px)': () => {
        steps.forEach((s, i) => ScrollTrigger.create({
          trigger: s, start: 'top 55%', end: 'bottom 55%',
          onToggle: self => self.isActive && setStep(i)
        }));
        if (!reduce) gsap.to('.how__frame .arch', { strokeDashoffset: 0, duration: 2, stagger: .2, ease: 'power2.inOut', scrollTrigger: { trigger: '.how__grid', start: 'top 70%' } });
      }
    });
  }

  /* ---------------- 03 · Quiz ---------------- */
  const Q = [
    { prompt: 'ما حكم النون الساكنة في الكلمة المميّزة؟', ref: 'سورة البقرة · آية ٨', verse: 'وَمِنَ ٱلنَّاسِ <mark>مَن</mark> يَقُولُ', hint: 'ركّز على النون الساكنة في «مَن» وما بعدها', answer: 'idgham',
      why: 'جاء بعد النون الساكنة حرف «ي»، وهو من حروف «يَنْمُو»، فتُدغَم النون فيه مع غُنّة.' },
    { prompt: 'ما حكم التنوين في الكلمة المميّزة؟', ref: 'سورة النساء · آية ٢٦', verse: 'وَٱللَّهُ <mark>عَلِيمٌ</mark> حَكِيمٌ', hint: 'ركّز على تنوين «عَلِيمٌ» والحرف الذي بعده', answer: 'izhar',
      why: 'جاء بعد التنوين حرف «ح»، وهو من حروف الحلق الستة، فيُظهَر التنوين بلا غُنّة.' },
    { prompt: 'ما حكم النون الساكنة في الكلمة المميّزة؟', ref: 'سورة البقرة · آية ٣٣', verse: '<mark>أَنۢبِئْهُم</mark> بِأَسْمَآئِهِمْ', hint: 'ركّز على النون الساكنة في «أَنۢبِئْهُم»', answer: 'iqlab',
      why: 'جاء بعد النون الساكنة حرف «ب»، فتُقلَب النون ميمًا مخفاةً مع الغُنّة.' },
    { prompt: 'ما حكم النون الساكنة في الكلمة المميّزة؟', ref: 'سورة البقرة · آية ٤', verse: 'وَمَآ أُنزِلَ <mark>مِن</mark> قَبْلِكَ', hint: 'ركّز على النون الساكنة في «مِن» وما بعدها', answer: 'ikhfa',
      why: 'جاء بعد النون الساكنة حرف «ق»، وهو من حروف الإخفاء الخمسة عشر، فتُخفى النون مع غُنّة.' }
  ];
  const LABEL = { izhar: 'إظهار حلقي', idgham: 'إدغام بغنّة', iqlab: 'إقلاب', ikhfa: 'إخفاء حقيقي' };
  const quiz = $('#quiz');
  const opts = $$('.opt', quiz);
  const check = $('#qCheck'), fb = $('#qFeedback'), next = $('#qNext'), done = $('#qDone');
  const el = { prompt: $('#qPrompt'), ref: $('#qRef'), verse: $('#qVerse'), hint: $('#qHint'), idx: $('#qIndex'), total: $('#qTotal'),
    hearts: $('#hearts'), xp: $('#xp'), bar: $('#quizBar'), fbTitle: $('#fbTitle'), fbAnswer: $('#fbAnswer'), fbWhy: $('#fbWhy'), fbMascot: $('#fbMascot'), doneXp: $('#doneXp') };
  let qi = 0, choice = null, xp = 0, hearts = 3;
  el.total.textContent = toArabic(Q.length);

  const bump = (node) => { if (hasGsap && !reduce) gsap.fromTo(node, { scale: 1.6 }, { scale: 1, duration: .6, ease: 'back.out(3)' }); };
  const renderQ = () => {
    const q = Q[qi];
    el.prompt.textContent = q.prompt;
    el.ref.textContent = q.ref;
    el.verse.innerHTML = q.verse;
    el.hint.textContent = q.hint;
    el.idx.textContent = toArabic(qi + 1);
    el.bar.style.width = Math.max(8, (qi / Q.length) * 100) + '%';
    choice = null;
    check.disabled = true;
    opts.forEach(o => { o.disabled = false; o.setAttribute('aria-checked', 'false'); o.classList.remove('is-right', 'is-wrong'); });
    if (hasGsap && !reduce) gsap.from(['.quiz__ask', '.quiz__verse', ...opts], { y: 16, opacity: 0, duration: .5, stagger: .05, ease: 'power3.out' });
  };
  opts.forEach(o => o.addEventListener('click', () => {
    if (o.disabled) return;
    choice = o.dataset.v;
    opts.forEach(x => x.setAttribute('aria-checked', String(x === o)));
    check.disabled = false;
  }));
  const confetti = () => {
    if (!hasGsap || reduce) return;
    const colors = ['#3EC2CF', '#E2B157', '#7C6FD6', '#35B26B', '#E8655E'];
    const r = quiz.getBoundingClientRect();
    for (let i = 0; i < 26; i++) {
      const c = document.createElement('i');
      c.className = 'confetti';
      c.style.background = colors[i % colors.length];
      c.style.left = r.width / 2 + 'px';
      c.style.top = r.height * .55 + 'px';
      quiz.appendChild(c);
      gsap.to(c, {
        x: gsap.utils.random(-r.width * .5, r.width * .5), y: gsap.utils.random(-r.height * .55, -r.height * .1),
        rotation: gsap.utils.random(-360, 360), duration: gsap.utils.random(.8, 1.3), ease: 'power3.out'
      });
      gsap.to(c, { y: '+=180', opacity: 0, delay: .9, duration: .9, ease: 'power1.in', onComplete: () => c.remove() });
    }
  };
  check.addEventListener('click', () => {
    if (!choice) return;
    const q = Q[qi];
    const ok = choice === q.answer;
    opts.forEach(o => {
      o.disabled = true;
      if (o.dataset.v === q.answer) o.classList.add('is-right');
      else if (o.dataset.v === choice) o.classList.add('is-wrong');
    });
    if (ok) { xp += 10; el.xp.textContent = xp; bump(el.xp.parentElement); confetti(); }
    else { hearts = Math.max(0, hearts - 1); el.hearts.textContent = hearts; bump(el.hearts.parentElement); }
    fb.classList.toggle('is-bad', !ok);
    el.fbTitle.textContent = ok ? 'أحسنت! +10 XP' : 'قريب! تذكّر القاعدة';
    el.fbAnswer.textContent = 'الإجابة: ' + LABEL[q.answer];
    el.fbWhy.textContent = q.why;
    el.fbMascot.src = ok ? '/qalqalah/assets/img/mascot-cheer.webp' : '/qalqalah/assets/img/mascot-think.webp';
    fb.hidden = false;
    requestAnimationFrame(() => fb.classList.add('is-open'));
    next.focus({ preventScroll: true });
  });
  next.addEventListener('click', () => {
    fb.classList.remove('is-open');
    setTimeout(() => { fb.hidden = true; }, 450);
    qi++;
    if (qi < Q.length) { renderQ(); return; }
    el.bar.style.width = '100%';
    el.doneXp.textContent = xp;
    done.hidden = false;
    if (hasGsap && !reduce) gsap.from(done.children, { y: 30, opacity: 0, stagger: .08, duration: .7, ease: 'back.out(1.8)' });
    confetti();
  });
  $('#qRestart').addEventListener('click', () => {
    qi = 0; xp = 0; hearts = 3;
    el.xp.textContent = 0; el.hearts.textContent = 3;
    done.hidden = true;
    renderQ();
  });

  /* ---------------- 04 · Hifz journey ---------------- */
  const line = $('#journeyLine');
  const nodes = $$('.journey .node');
  const marks = [0, .32, .64, .96];
  if (line) {
    const len = line.getTotalLength();
    line.style.strokeDasharray = len;
    const light = p => nodes.forEach((n, i) => n.classList.toggle('is-lit', p >= marks[i]));
    if (hasGsap && !reduce) {
      line.style.strokeDashoffset = len;
      gsap.to(line, {
        strokeDashoffset: 0, ease: 'none',
        scrollTrigger: { trigger: '.journey', start: 'top 70%', end: 'bottom 70%', scrub: .5, onUpdate: s => light(s.progress) }
      });
      gsap.from('.journey__tip', { opacity: 0, x: -30, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: '.journey__tip', start: 'top 80%' } });
    } else { line.style.strokeDashoffset = 0; light(1); }
  }

  /* ---------------- Magnetic buttons ---------------- */
  if (finePointer && !reduce) {
    $$('[data-magnetic]').forEach(b => {
      b.addEventListener('pointermove', e => {
        const r = b.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * .25;
        const y = (e.clientY - r.top - r.height / 2) * .35;
        b.style.transform = `translate(${x}px, ${y}px)`;
      });
      b.addEventListener('pointerleave', () => { b.style.transform = ''; });
    });
  }

  window.addEventListener('load', () => hasGsap && ScrollTrigger.refresh());
})();
