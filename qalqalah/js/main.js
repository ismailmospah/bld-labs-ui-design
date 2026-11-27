/* QALQALAH — Option 2 interactions (no external libraries) */
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const EN = document.documentElement.lang === 'en';   // /en uses English labels; Quran text stays Arabic

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
  // in-page section links only: "/blog" is another page and isn't a valid selector
  const links = $$('.nav__links a[href^="#"]');
  if ('IntersectionObserver' in window) {
    const so = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) links.forEach(a => a.classList.toggle('is-on', a.getAttribute('href') === '#' + e.target.id));
    }), { rootMargin: '-45% 0px -50% 0px' });
    links.forEach(a => { const s = $(a.getAttribute('href')); if (s) so.observe(s); });
  }

  /* Quiz */
  const Q = [
    { ref: 'سورة البقرة · آية ٨', verse: 'وَمِنَ ٱلنَّاسِ <mark>مَن</mark> يَقُولُ', ask: 'ما حكم النون الساكنة في الكلمة المميّزة؟', answer: 'idgham',
      why: 'جاء بعد النون الساكنة حرف «ي»، وهو من حروف «يَنْمُو»، فتُدغَم النون فيه مع غُنّة.',
      en: { ref: 'Al-Baqarah · 8', ask: 'Which rule applies to the noon sakinah in the highlighted word?',
            why: 'It is followed by «ي» (ya), one of the letters of «يَنْمُو», so the noon merges into it with ghunnah (a nasal sound).' } },
    { ref: 'سورة النساء · آية ٢٦', verse: 'وَٱللَّهُ <mark>عَلِيمٌ</mark> حَكِيمٌ', ask: 'ما حكم التنوين في الكلمة المميّزة؟', answer: 'izhar',
      why: 'جاء بعد التنوين حرف «ح»، وهو من حروف الحلق الستة، فيُظهَر التنوين بلا غُنّة.',
      en: { ref: 'An-Nisa · 26', ask: 'Which rule applies to the tanween in the highlighted word?',
            why: 'It is followed by «ح» (ha), one of the six throat letters, so the tanween is pronounced clearly, without ghunnah.' } },
    { ref: 'سورة البقرة · آية ٣٣', verse: '<mark>أَنۢبِئْهُم</mark> بِأَسْمَآئِهِمْ', ask: 'ما حكم النون الساكنة في الكلمة المميّزة؟', answer: 'iqlab',
      why: 'جاء بعد النون الساكنة حرف «ب»، فتُقلَب النون ميمًا مخفاةً مع الغُنّة.',
      en: { ref: 'Al-Baqarah · 33', ask: 'Which rule applies to the noon sakinah in the highlighted word?',
            why: 'It is followed by «ب» (ba), so the noon turns into a concealed meem, with ghunnah.' } },
    { ref: 'سورة البقرة · آية ٤', verse: 'وَمَآ أُنزِلَ <mark>مِن</mark> قَبْلِكَ', ask: 'ما حكم النون الساكنة في الكلمة المميّزة؟', answer: 'ikhfa',
      why: 'جاء بعد النون الساكنة حرف «ق»، وهو من حروف الإخفاء الخمسة عشر، فتُخفى النون مع غُنّة.',
      en: { ref: 'Al-Baqarah · 4', ask: 'Which rule applies to the noon sakinah in the highlighted word?',
            why: 'It is followed by «ق» (qaf), one of the fifteen letters of ikhfa, so the noon is concealed, with ghunnah.' } }
  ];
  const LABEL = EN
    ? { izhar: 'Izhar (clear)', idgham: 'Idgham with ghunnah', iqlab: 'Iqlab (conversion)', ikhfa: 'Ikhfa (concealment)' }
    : { izhar: 'إظهار حلقي', idgham: 'إدغام بغنّة', iqlab: 'إقلاب', ikhfa: 'إخفاء حقيقي' };
  const T = EN
    ? { ok: 'Well done! +10 XP', answer: 'Answer: ', again: 'Start over ', next: 'Next question ' }
    : { ok: 'أحسنت! +10 XP', answer: 'الإجابة: ', again: 'من البداية ', next: 'السؤال التالي ' };
  const tr = q => (EN && q.en ? { ...q, ...q.en } : q);
  const opts = $$('.opt');
  const fb = $('#qFb');
  let qi = 0;
  const render = () => {
    const q = tr(Q[qi]);
    $('#qRef').textContent = q.ref;
    $('#qVerse').innerHTML = q.verse;
    $('#qAsk').textContent = q.ask;
    opts.forEach(o => { o.disabled = false; o.classList.remove('is-right', 'is-wrong'); });
    fb.hidden = true;
  };
  opts.forEach(o => o.addEventListener('click', () => {
    const q = tr(Q[qi]);
    const ok = o.dataset.v === q.answer;
    opts.forEach(x => {
      x.disabled = true;
      if (x.dataset.v === q.answer) x.classList.add('is-right');
      else if (x === o) x.classList.add('is-wrong');
    });
    fb.className = 'quiz__fb ' + (ok ? 'is-ok' : 'is-bad');
    $('#qFbTitle').textContent = ok ? T.ok : T.answer + LABEL[q.answer];
    $('#qFbWhy').textContent = q.why;
    $('#qNext').firstChild.textContent = qi === Q.length - 1 ? T.again : T.next;
    fb.hidden = false;
  }));
  $('#qNext').addEventListener('click', () => { qi = (qi + 1) % Q.length; render(); });

  /* Qalqalah letters */
  const ECHO = [
    { w: 'ٱ<mark>قْ</mark>رَأْ', ref: 'سورة العلق · آية ١', note: 'القاف ساكنة في وسط الكلمة، فتُقلقَل قلقلةً صغرى.', en: { ref: "Al-Alaq · 1", note: 'The qaf has a sukun in the middle of the word, so it takes the minor qalqalah.' } },
    { w: 'أَ<mark>طْ</mark>وَارًا', ref: 'سورة نوح · آية ١٤', note: 'الطاء ساكنة في وسط الكلمة، فتُقلقَل قلقلةً صغرى.', en: { ref: "Nuh · 14", note: 'The ta has a sukun in the middle of the word, so it takes the minor qalqalah.' } },
    { w: 'ٱلْأَ<mark>بْ</mark>تَرُ', ref: 'سورة الكوثر · آية ٣', note: 'الباء ساكنة في وسط الكلمة، فتُقلقَل قلقلةً صغرى.', en: { ref: "Al-Kawthar · 3", note: 'The ba has a sukun in the middle of the word, so it takes the minor qalqalah.' } },
    { w: 'ٱلنَّ<mark>جْ</mark>دَيْنِ', ref: 'سورة البلد · آية ١٠', note: 'الجيم ساكنة في وسط الكلمة، فتُقلقَل قلقلةً صغرى.', en: { ref: "Al-Balad · 10", note: 'The jim has a sukun in the middle of the word, so it takes the minor qalqalah.' } },
    { w: 'قَ<mark>دْ</mark> أَفْلَحَ', ref: 'سورة المؤمنون · آية ١', note: 'الدال ساكنة عند الوصل فتُقلقَل قلقلةً صغرى، وتصير كبرى إذا وقفتَ عليها.', en: { ref: "Al-Mu'minun · 1", note: 'The dal has a sukun when you read on, so it takes the minor qalqalah. It becomes major when you stop on it.' } }
  ];
  const keys = $$('.key');
  const echo = $('.echo');
  const word = $('#eWord');
  const setKey = i => {
    keys.forEach((k, j) => { k.classList.toggle('is-on', j === i); k.setAttribute('aria-selected', String(j === i)); });
    word.classList.add('is-out');
    setTimeout(() => {
      const e = tr(ECHO[i]);
      word.innerHTML = e.w;
      $('#eRef').textContent = e.ref;
      $('#eNote').textContent = e.note;
      word.classList.remove('is-out');
    }, 200);
    echo.classList.remove('is-ringing'); void echo.offsetWidth; echo.classList.add('is-ringing');
  };
  keys.forEach((k, i) => k.addEventListener('click', () => setKey(i)));
})();
