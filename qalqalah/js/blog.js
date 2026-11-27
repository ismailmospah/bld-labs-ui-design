/* QALQALAH — blog interactions: nav state and the practice quiz at the end of each article. */
(() => {
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('is-scrolled', scrollY > 30);
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  const toArabic = n => String(n).replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);

  document.querySelectorAll('[data-quiz]').forEach(root => {
    const data = JSON.parse(root.querySelector('script[type="application/json"]').textContent);
    const $ = s => root.querySelector(s);
    const optsBox = $('.quiz__opts');
    const fb = $('.quiz__fb');
    const nextBtn = $('.quiz__next');
    let qi = 0;

    const render = () => {
      const q = data[qi];
      $('.quiz__count').textContent = `سؤال ${toArabic(qi + 1)} من ${toArabic(data.length)}`;
      $('.quiz__ref').textContent = q.ref;
      $('.quiz__verse').innerHTML = q.verse;
      $('.quiz__ask').textContent = q.ask;
      optsBox.innerHTML = '';
      q.options.forEach((label, i) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'opt';
        b.textContent = label;
        b.addEventListener('click', () => answer(i));
        optsBox.appendChild(b);
      });
      fb.hidden = true;
    };

    const answer = i => {
      const q = data[qi];
      const ok = i === q.answer;
      [...optsBox.children].forEach((b, j) => {
        b.disabled = true;
        if (j === q.answer) b.classList.add('is-right');
        else if (j === i) b.classList.add('is-wrong');
      });
      fb.className = 'quiz__fb ' + (ok ? 'is-ok' : 'is-bad');
      $('.quiz__fb-title').textContent = ok ? 'أحسنت!' : 'الإجابة: ' + q.options[q.answer];
      $('.quiz__fb-why').textContent = q.why;
      nextBtn.querySelector('span').textContent = qi === data.length - 1 ? 'من البداية' : 'السؤال التالي';
      fb.hidden = false;
    };

    nextBtn.addEventListener('click', () => { qi = (qi + 1) % data.length; render(); });
    render();
  });
})();
