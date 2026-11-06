"""Build /work (work.html) and /ar/work (ar/work.html): every project as a card grid.
The cards are read from the home page's work slider, so both stay in step."""
import json, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from clean_links import fix_html
from case_lib import SITE, CSS_V, analytics

ROOT = sys.argv[1] if len(sys.argv) > 1 else os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # repo root


def cards_from(home):
    t = open(os.path.join(ROOT, home), encoding="utf-8").read()
    i = t.index('<div class="work__track" id="workTrack"')
    track = t[t.index(">", i) + 1:t.index('<div class="work__all', i)]
    out = []
    for m in re.finditer(r'<a class="card" href="([^"]+)"[^>]*>\s*<div class="card__img"><img src="([^"]+)"[^>]*alt="([^"]*)"></div>\s*'
                         r'<div class="card__meta"[^>]*><span class="card__num">(\d\d)</span><h3>([^<]+)</h3><p>([^<]+)</p></div>', track):
        out.append(dict(href=m[1], img=m[2], alt=m[3], num=m[4], name=m[5], label=m[6]))
    return out


def page(ar):
    cards = cards_from("ar/index.html" if ar else "index.html")
    assert cards and all(c["href"].startswith("/") for c in cards), "every card should open an on-site page"
    url = f"{SITE}/ar/work" if ar else f"{SITE}/work"
    home, home_abs = ("ar", f"{SITE}/ar") if ar else ("index.html", f"{SITE}/")
    T = dict(
        title="أعمالنا — كل المشاريع | BLD Labs" if ar else "Work — All Projects &amp; Case Studies | BLD Labs",
        desc=("كل مشاريع BLD Labs في مكان واحد: تطبيقات ومواقع ولوحات تحكم وبحث تجربة مستخدم، ولكل مشروع دراسة حالة بالتفاصيل."
              if ar else "Every BLD Labs project in one place — apps, websites, dashboards and UX research — each with its own case study."),
        crumb_home="الرئيسية" if ar else "Home", crumb="أعمالنا" if ar else "Work",
        tag="// أعمالنا — /work" if ar else "// WORK — /work",
        h1=("كل <span class=\"rm__accent\">المشاريع<i class=\"dot\"></i></span>" if ar
            else "ALL THE <span class=\"rm__accent\">PROOF<i class=\"dot\"></i></span>"),
        h1_text="كل المشاريع" if ar else "ALL THE PROOF",
        lead=("تطبيقات ومواقع ولوحات تحكم وبحث تجربة مستخدم صمّمناها وبنيناها مع عملائنا — ولكل مشروع صفحة تحكي التحدي والحل وما سلّمناه."
              if ar else "Apps, websites, dashboards and UX research we designed and built with our clients — each with a page on the challenge, the solution and what we delivered."),
        meta=(f'<span><b>{len(cards)}</b> مشروعًا</span><span>تطبيقات · مواقع · <b>لوحات تحكم</b></span><span>بحث <b>UX</b></span>' if ar
              else f'<span><b>{len(cards)}</b> PROJECTS</span><span>APPS · WEBSITES · <b>DASHBOARDS</b></span><span><b>UX</b> RESEARCH</span>'),
        label="شاهد" if ar else "VIEW CASE",
        behance="المزيد من أعمالنا على Behance ←" if ar else "More of our work on Behance →",
        cta_band="عندك فكرة مشروع؟ لنتحدث." if ar else "GOT A PROJECT IN MIND? LET’S TALK.",
        cta_big="ابدأ مشروعك ←" if ar else "START A PROJECT →",
        contact="/ar/contact.html" if ar else "contact.html",
        cta_nav="ابدأ مشروعك" if ar else "START A PROJECT",
        copyright="© 2026 BLD LABS — جميع الحقوق محفوظة · أسّسها <a href=\"/ar/ismail-mosbah\" class=\"footer__founder\" data-hover>إسماعيل مصباح</a>" if ar else "© 2026 BLD LABS — ALL RIGHTS RESERVED · FOUNDED BY <a href=\"/ismail-mosbah\" class=\"footer__founder\" data-hover>ISMAIL MOSBAH</a>",
    )
    navl = ([("ar/work", "أعمالنا"), ("/ar/products", "منتجاتنا"), ("/ar/about", "من نحن"), ("ar/services.html", "خدماتنا"), ("/ar/learning.html", "تعلّم"),
             ("/ar/blogs.html", "المقالات"), ("/ar/contact.html", "تواصل")] if ar else
            [("/work", "WORK"), ("/products", "PRODUCTS"), ("/about", "ABOUT"), ("services.html", "SERVICES"), ("learning.html", "LEARNING"),
             ("blogs.html", "BLOGS"), ("contact.html", "CONTACT")])
    nav = "".join(f'\n    <a href="{h}" data-hover data-scramble>{t}</a>' for h, t in navl)
    lang_switch = ('<a href="/work" class="nav__lang" hreflang="en" lang="en" data-hover>EN</a>' if ar else
                   '<a href="/ar/work" class="nav__lang" hreflang="ar" lang="ar" data-hover>عربي</a>')
    meta_dir = ' dir="rtl"' if ar else ""
    grid = "\n".join(
        f'''    <a class="card" href="{c["href"]}" data-hover data-label="{T["label"]}">
      <div class="card__img"><img src="{c["img"]}" width="800" height="1000" loading="{'eager' if k < 3 else 'lazy'}" decoding="async" alt="{c["alt"]}"></div>
      <div class="card__meta"{meta_dir}><span class="card__num">{c["num"]}</span><h2>{c["name"]}</h2><p>{c["label"]}</p></div>
    </a>''' for k, c in enumerate(cards))
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": T["crumb_home"], "item": home_abs},
            {"@type": "ListItem", "position": 2, "name": T["crumb"], "item": url}]},
        {"@type": "CollectionPage", "name": T["title"].split(" | ")[0].replace("&amp;", "&"), "description": T["desc"], "url": url,
         "inLanguage": "ar" if ar else "en", "publisher": {"@id": SITE + "/#org"},
         "mainEntity": {"@type": "ItemList", "itemListElement": [
             {"@type": "ListItem", "position": k + 1, "name": c["name"], "url": SITE + c["href"]} for k, c in enumerate(cards)]}},
    ]}
    fonts = ("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&family=JetBrains+Mono:wght@400;700"
             + ("&family=IBM+Plex+Sans+Arabic:wght@300;400;500;700" if ar else "") + "&display=swap")
    an = analytics(ROOT, "ar/products/baytak.html" if ar else "products/baytak.html")
    og_img = SITE + cards[0]["img"].replace("cover.webp", "og.jpg")
    return f"""<!DOCTYPE html>
{'<html lang="ar" dir="rtl" class="ar">' if ar else '<html lang="en">'}
<head>
<meta charset="UTF-8">
<meta name="facebook-domain-verification" content="714gqtx9d1c6a6qvyppl1t5q78c2e6" />
<base href="/">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{T["title"]}</title>
<meta name="description" content="{T["desc"]}">
<link rel="canonical" href="{url}">
<link rel="alternate" hreflang="en" href="{SITE}/work">
<link rel="alternate" hreflang="ar" href="{SITE}/ar/work">
<link rel="alternate" hreflang="x-default" href="{SITE}/work">
<script type="application/ld+json">
{json.dumps(ld, ensure_ascii=False, indent=2)}
</script>
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/assets/img/icons/favicon-96x96.png" sizes="96x96" type="image/png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta property="og:title" content="{T["title"]}">
<meta property="og:description" content="{T["desc"]}">
<meta property="og:image" content="{og_img}">
<meta property="og:url" content="{url}">
<meta property="og:type" content="website">
{'<meta property="og:locale" content="ar_AR">' + chr(10) if ar else ''}<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{T["title"]}">
<meta name="twitter:description" content="{T["desc"]}">
<meta name="twitter:image" content="{og_img}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="{fonts}" rel="stylesheet">
<link rel="stylesheet" href="css/style.css?v={CSS_V}">
{an}</head>
<body class="subpage">
<div class="scanlines" aria-hidden="true"></div>
<div class="grain" aria-hidden="true"></div>
<div class="cursor" id="cursor" aria-hidden="true"><span class="cursor__box"></span><span class="cursor__label" id="cursorLabel"></span></div>
<header class="nav is-scrolled" id="nav">
  <a href="{home}" class="nav__logo" data-hover><img src="assets/img/logo.svg" alt="BLD Labs"></a>
  <nav class="nav__links">{nav}
  </nav>
  <div class="nav__end">
    {lang_switch}
    <a href="{T["contact"]}" class="btn btn--solid nav__cta" data-hover data-magnetic>{T["cta_nav"]}</a>
  </div>
</header>
<main id="top" class="svc workidx">
  <nav class="svc__crumbs" aria-label="Breadcrumb"><a href="{home}" data-hover>{T["crumb_home"]}</a><i>/</i><span aria-current="page">{T["crumb"]}</span></nav>
  <p class="section__tag">{T["tag"]}</p>
  <h1 class="section__title glitch" data-text="{T["h1_text"]}">{T["h1"]}</h1>
  <p class="rm__lead">{T["lead"]}</p>
  <div class="rm__meta">{T["meta"]}</div>

  <div class="workgrid">
{grid}
  </div>

  <p class="workidx__more"><a href="https://www.behance.net/bld_labscompany" target="_blank" rel="noopener" class="path__go" data-hover>{T["behance"]}</a></p>

  <div class="rm__cta">
    <p>{T["cta_band"]}</p>
    <a href="{T["contact"]}" class="btn btn--big" data-hover data-magnetic>{T["cta_big"]}</a>
  </div>
</main>
<footer class="footer">
  <div class="footer__base">
    <span>{T["copyright"]}</span>
    <span class="footer__sig">BUILD. LAUNCH. DELIVER. ▮</span>
  </div>
</footer>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="https://unpkg.com/lenis@1.1.14/dist/lenis.min.js"></script>
<script src="js/pages.js"></script>
</body>
</html>
"""


for ar, out in ((False, "work.html"), (True, "ar/work.html")):
    open(os.path.join(ROOT, out), "w", encoding="utf-8").write(fix_html(page(ar)))
    print("wrote", out)
