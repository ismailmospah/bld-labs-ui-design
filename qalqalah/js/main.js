/* QALQALAH — Option 2 interactions (no external libraries) */
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* Reveal on scroll */
  const reveal = $$('[data-r], .showcase');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (!e.isIntersecting) return;
      const sibs = [...e.target.parentElement.children].filter(c => c.hasAttribute('data-r'));
      e.target.style.transitionDelay = Math.max(0, sibs.indexOf(e.target)) * 70 + 'ms';
      e.target.classList.add('in');
      io.unobserve(e.target);
    }), { rootMargin: '0px 0px -8% 0px' });
    reveal.forEach(el => io.observe(el));
  } else reveal.forEach(el => el.classList.add('in'));

  /* Nav state + current section */
  const nav = $('#nav');
  const onScroll = () => nav.classList.toggle('is-scrolled', scrollY > 30);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const links = $$('.nav__links a');
  if ('IntersectionObserver' in window) {
    const so = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) links.forEach(a => a.classList.toggle('is-on', a.getAttribute('href') === '#' + e.target.id));
    }), { rootMargin: '-45% 0px -50% 0px' });
    links.forEach(a => { const s = $(a.getAttribute('href')); if (s) so.observe(s); });
  }

  /* Quiz */
  const Q = [
    { ref: 'سورة البقرة · آية ٨', verse: 'وَمِنَ ٱلنَّاسِ <mark>مَن</mark> يَقُولُ', ask: 'ما حكم النون الساكنة في الكلمة المميّزة؟', answer: 'idgham',
      why: 'جاء بعد النون الساكنة حرف «ي»، وهو من حروف «يَنْمُو»، فتُدغَم النون فيه مع غُنّة.' },
    { ref: 'سورة النساء · آية ٢٦', verse: 'وَٱللَّهُ <mark>عَلِيمٌ</mark> حَكِيمٌ', ask: 'ما حكم التنوين في الكلمة المميّزة؟', answer: 'izhar',
      why: 'جاء بعد التنوين حرف «ح»، وهو من حروف الحلق الستة، فيُظهَر التنوين بلا غُنّة.' },
    { ref: 'سورة البقرة · آية ٣٣', verse: '<mark>أَنۢبِئْهُم</mark> بِأَسْمَآئِهِمْ', ask: 'ما حكم النون الساكنة في الكلمة المميّزة؟', answer: 'iqlab',
      why: 'جاء بعد النون الساكنة حرف «ب»، فتُقلَب النون ميمًا مخفاةً مع الغُنّة.' },
    { ref: 'سورة البقرة · آية ٤', verse: 'وَمَآ أُنزِلَ <mark>مِن</mark> قَبْلِكَ', ask: 'ما حكم النون الساكنة في الكلمة المميّزة؟', answer: 'ikhfa',
      why: 'جاء بعد النون الساكنة حرف «ق»، وهو من حروف الإخفاء الخمسة عشر، فتُخفى النون مع غُنّة.' }
  ];
  const LABEL = { izhar: 'إظهار حلقي', idgham: 'إدغام بغنّة', iqlab: 'إقلاب', ikhfa: 'إخفاء حقيقي' };
  const opts = $$('.opt');
  const fb = $('#qFb');
  let qi = 0;
  const render = () => {
    const q = Q[qi];
    $('#qRef').textContent = q.ref;
    $('#qVerse').innerHTML = q.verse;
    $('#qAsk').textContent = q.ask;
    opts.forEach(o => { o.disabled = false; o.classList.remove('is-right', 'is-wrong'); });
    fb.hidden = true;
  };
  opts.forEach(o => o.addEventListener('click', () => {
    const q = Q[qi];
    const ok = o.dataset.v === q.answer;
    opts.forEach(x => {
      x.disabled = true;
      if (x.dataset.v === q.answer) x.classList.add('is-right');
      else if (x === o) x.classList.add('is-wrong');
    });
    fb.className = 'quiz__fb ' + (ok ? 'is-ok' : 'is-bad');
    $('#qFbTitle').textContent = ok ? 'أحسنت! +10 XP' : 'الإجابة: ' + LABEL[q.answer];
    $('#qFbWhy').textContent = q.why;
    $('#qNext').firstChild.textContent = qi === Q.length - 1 ? 'من البداية ' : 'السؤال التالي ';
    fb.hidden = false;
  }));
  $('#qNext').addEventListener('click', () => { qi = (qi + 1) % Q.length; render(); });

  /* Qalqalah letters */
  const ECHO = [
    { w: 'ٱ<mark>قْ</mark>رَأْ', ref: 'سورة العلق · آية ١', note: 'القاف ساكنة في وسط الكلمة، فتُقلقَل قلقلةً صغرى.' },
    { w: 'أَ<mark>طْ</mark>وَارًا', ref: 'سورة نوح · آية ١٤', note: 'الطاء ساكنة في وسط الكلمة، فتُقلقَل قلقلةً صغرى.' },
    { w: 'ٱلْأَ<mark>بْ</mark>تَرُ', ref: 'سورة الكوثر · آية ٣', note: 'الباء ساكنة في وسط الكلمة، فتُقلقَل قلقلةً صغرى.' },
    { w: 'ٱلنَّ<mark>جْ</mark>دَيْنِ', ref: 'سورة البلد · آية ١٠', note: 'الجيم ساكنة في وسط الكلمة، فتُقلقَل قلقلةً صغرى.' },
    { w: 'قَ<mark>دْ</mark> أَفْلَحَ', ref: 'سورة المؤمنون · آية ١', note: 'الدال ساكنة عند الوصل فتُقلقَل قلقلةً صغرى، وتصير كبرى إذا وقفتَ عليها.' }
  ];
  const keys = $$('.key');
  const echo = $('.echo');
  const word = $('#eWord');
  const setKey = i => {
    keys.forEach((k, j) => { k.classList.toggle('is-on', j === i); k.setAttribute('aria-selected', String(j === i)); });
    word.classList.add('is-out');
    setTimeout(() => {
      word.innerHTML = ECHO[i].w;
      $('#eRef').textContent = ECHO[i].ref;
      $('#eNote').textContent = ECHO[i].note;
      word.classList.remove('is-out');
    }, 200);
    echo.classList.remove('is-ringing'); void echo.offsetWidth; echo.classList.add('is-ringing');
  };
  keys.forEach((k, i) => k.addEventListener('click', () => setKey(i)));
})();
