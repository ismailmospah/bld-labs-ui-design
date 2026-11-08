"""Shared template for the /work/<slug> case-study pages (EN + AR)."""
import json, os
from clean_links import fix_html

SITE = "https://bld-labs.com"
CSS_V = 26


def analytics(root, path):
    t = open(os.path.join(root, path), encoding="utf-8").read()
    a = t.index("<!-- Meta Pixel Code -->")
    b = t.index("</head>")
    return t[a:b].rstrip() + "\n"


def img_dir(slug):
    return f"/assets/img/work/{slug}"


def fig(slug, name, w, h, alt, cap, widths=(800, 1400)):
    IMG = img_dir(slug)
    big = widths[-1]
    srcset = ", ".join(f"{IMG}/{name}-{x}.webp {x}w" for x in widths)
    return (f'<figure class="case__fig"><img src="{IMG}/{name}-{big}.webp" srcset="{srcset}" '
            f'sizes="(max-width: 900px) 100vw, 1100px" width="{w}" height="{h}" loading="lazy" '
            f'decoding="async" alt="{alt}"><figcaption>{cap}</figcaption></figure>')


def shot(slug, name, w, h, alt, big=1400):
    """One image in the gap-free screens strip: no caption, no frame."""
    IMG = img_dir(slug)
    return (f'<img src="{IMG}/{name}-{big}.webp" srcset="{IMG}/{name}-800.webp 800w, {IMG}/{name}-{big}.webp {big}w" '
            f'sizes="(max-width: 900px) 100vw, 1100px" width="{w}" height="{h}" loading="lazy" decoding="async" alt="{alt}">')


def stack(slug, shots, big=1400):
    """shots: [(name, w, h, alt)] -> the edge-to-edge strip."""
    return '<div class="case__stack">\n      ' + "\n      ".join(shot(slug, *s, big=big) for s in shots) + "\n    </div>"


# every case study, newest first: (slug, EN label, EN name, AR label, AR name)
CASES = [
    ("hom", "CASE STUDY — PROPERTY MANAGEMENT", "HOM", "دراسة حالة — إدارة عقارات", "هوم"),
    ("asees-x", "CASE STUDY — HR APP", "Asees-X", "دراسة حالة — تطبيق موارد بشرية", "أسيس اكس"),
    ("top-tech", "CASE STUDY — AGENCY WEBSITE", "Top Tech", "دراسة حالة — موقع وكالة تسويق", "توب تك"),
    ("zabehaty", "CASE STUDY — UX RESEARCH + REDESIGN", "Zabehaty", "دراسة حالة — بحث تجربة مستخدم وإعادة تصميم", "ذبيحتي"),
    ("bld-labs-website", "CASE STUDY — OUR OWN WEBSITE", "BLD Labs website", "دراسة حالة — موقعنا", "موقع BLD Labs"),
    ("ghym-website", "CASE STUDY — EDUCATION WEBSITE", "Ghym Website", "دراسة حالة — موقع تعليمي", "موقع غيم"),
    ("ghym-dashboard", "CASE STUDY — SAAS DASHBOARD", "Ghym Dashboard", "دراسة حالة — لوحة تحكم", "لوحة تحكم غيم"),
    ("otlob", "CASE STUDY — E-COMMERCE APP", "Otlob", "دراسة حالة — تطبيق تجارة إلكترونية", "اطلب"),
    ("wajba", "CASE STUDY — FOOD ORDERING APP", "Wajba", "دراسة حالة — تطبيق طلب طعام", "وجبة"),
    ("car-max", "CASE STUDY — CAR RENTAL APP", "Car Max", "دراسة حالة — تطبيق تأجير سيارات", "كار ماكس"),
    ("prince-el-lamma", "CASE STUDY — PARTY GAME APP", "Prince El-Lamma", "دراسة حالة — تطبيق ألعاب جماعية", "برنس اللمة"),
]


def next_links(slug, ar):
    out = []
    i = [c[0] for c in CASES].index(slug)
    for s, en_l, en_n, ar_l, ar_n in [CASES[(i + k) % len(CASES)] for k in (1, 2, 3)]:  # the next three, wrapping
        out.append((f"/ar/work/{s}", ar_l, f"{ar_n} ←") if ar else (f"/work/{s}", en_l, f"{en_n} →"))
    out += ([("/ar/work", "أعمال مختارة", "كل المشاريع ←"), ("/ar/products", "منتجات نملكها ونديرها", "منتجاتنا ←")] if ar
            else [("/work", "SELECTED WORK", "All projects →"), ("/products", "BUILT &amp; RUN BY US", "Our products →")])
    return out


def items(rows):
    return "".join(f'<div class="svc__item"><span class="svc__no">{i+1:02d}</span><h3>{h}</h3><p>{p}</p></div>'
                   for i, (h, p) in enumerate(rows))


def block(heading, inner):
    return f'  <div class="svc__block">\n    <h2 class="svc__h">{heading}</h2>\n    {inner}\n  </div>\n'


def page(P, L, middle):
    """P: project constants (slug, name, behance, date). L: one language's text.
    middle: HTML for the project-specific blocks between features and deliverables."""
    slug, name = P["slug"], P["name"]
    IMG = img_dir(slug)
    ar = L["lang"] == "ar"
    url = f"{SITE}/ar/work/{slug}" if ar else f"{SITE}/work/{slug}"
    home, home_abs = ("ar", f"{SITE}/ar") if ar else ("index.html", f"{SITE}/")
    contact = "/ar/contact.html" if ar else "contact.html"
    ld = {
        "@context": "https://schema.org",
        "@graph": [
            {"@type": "BreadcrumbList", "itemListElement": [
                {"@type": "ListItem", "position": 1, "name": L["crumb_home"], "item": home_abs},
                {"@type": "ListItem", "position": 2, "name": L["crumb_work"], "item": f"{SITE}/ar/work" if ar else f"{SITE}/work"},
                {"@type": "ListItem", "position": 3, "name": name, "item": url},
            ]},
            {"@type": "CreativeWork", "name": L["ld_name"], "description": L["desc"],
             "image": SITE + IMG + "/og.jpg", "url": url, "inLanguage": L["lang"],
             "dateCreated": P["date"], "genre": "UI/UX design",
             "creator": {"@id": SITE + "/#org"}, "sameAs": P["behance"]},
        ],
    }
    fonts = ("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&family=JetBrains+Mono:wght@400;700"
             + ("&family=IBM+Plex+Sans+Arabic:wght@300;400;500;700" if ar else "") + "&display=swap")
    html_open = '<html lang="ar" dir="rtl" class="ar">' if ar else '<html lang="en">'
    locale = '<meta property="og:locale" content="ar_AR">\n' if ar else ""
    if ar:
        navl = [("/ar/work", "أعمالنا"), ("/ar/products", "منتجاتنا"), ("/ar/about", "من نحن"), ("ar/services.html", "خدماتنا"),
                ("/ar/learning.html", "تعلّم"), ("/ar/blogs.html", "المقالات"), ("/ar/contact.html", "تواصل")]
        lang_switch = f'<a href="/work/{slug}" class="nav__lang" hreflang="en" lang="en" data-hover>EN</a>'
        ui = dict(cta_nav="ابدأ مشروعك", crumb_home="الرئيسية", crumb_work="أعمالنا", cta_similar="ابنِ منتجًا مثل هذا",
                  cta_behance="شاهده على Behance", h_brief="// الفكرة", l_challenge="التحدي", l_solution="الحل",
                  cta_band="تريد منتجًا مثل هذا؟ لنتحدث.", cta_big="ابدأ مشروعك ←", h_next="// المزيد",
                  copyright="© 2026 BLD LABS — جميع الحقوق محفوظة · أسّسها <a href=\"/ar/ismail-mosbah\" class=\"footer__founder\" data-hover>إسماعيل مصباح</a>")
    else:
        navl = [("/work", "WORK"), ("/products", "PRODUCTS"), ("/about", "ABOUT"), ("services.html", "SERVICES"),
                ("learning.html", "LEARNING"), ("blogs.html", "BLOGS"), ("contact.html", "CONTACT")]
        lang_switch = f'<a href="/ar/work/{slug}" class="nav__lang" hreflang="ar" lang="ar" data-hover>عربي</a>'
        ui = dict(cta_nav="START A PROJECT", crumb_home="Home", crumb_work="Work", cta_similar="BUILD SOMETHING LIKE THIS",
                  cta_behance="VIEW ON BEHANCE", h_brief="// THE BRIEF", l_challenge="THE CHALLENGE", l_solution="THE SOLUTION",
                  cta_band="WANT A PRODUCT LIKE THIS? LET’S TALK.", cta_big="START A PROJECT →", h_next="// MORE",
                  copyright="© 2026 BLD LABS — ALL RIGHTS RESERVED · FOUNDED BY <a href=\"/ismail-mosbah\" class=\"footer__founder\" data-hover>ISMAIL MOSBAH</a>")
    nav = "".join(f'\n    <a href="{h}" data-hover data-scramble>{t}</a>' for h, t in navl)
    facts = "".join(f"<div><dt>{a}</dt><dd>{b}</dd></div>" for a, b in L["facts"])
    pains = "".join(f"<li>{x}</li>" for x in L["pains"])
    nexts = "".join(f'<a href="{h}" data-hover><span>{s}</span><b>{b}</b></a>' for h, s, b in next_links(slug, ar))
    title = L["title"]
    upper = name.upper()
    # keep the green dot glued to the last word so it never wraps onto its own line
    head, _, last = upper.rpartition(" ")
    title_html = (head + " " if head else "") + f'<span class="case__last">{last}<i class="dot"></i></span>'
    return f"""<!DOCTYPE html>
{html_open}
<head>
<meta charset="UTF-8">
<meta name="facebook-domain-verification" content="714gqtx9d1c6a6qvyppl1t5q78c2e6" />
<base href="/">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<meta name="description" content="{L["desc"]}">
<link rel="canonical" href="{url}">
<link rel="alternate" hreflang="en" href="{SITE}/work/{slug}">
<link rel="alternate" hreflang="ar" href="{SITE}/ar/work/{slug}">
<link rel="alternate" hreflang="x-default" href="{SITE}/work/{slug}">
<script type="application/ld+json">
{json.dumps(ld, ensure_ascii=False, indent=2)}
</script>
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/assets/img/icons/favicon-96x96.png" sizes="96x96" type="image/png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{L["desc"]}">
<meta property="og:image" content="{SITE}{IMG}/og.jpg">
<meta property="og:url" content="{url}">
<meta property="og:type" content="article">
{locale}<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{title}">
<meta name="twitter:description" content="{L["desc"]}">
<meta name="twitter:image" content="{SITE}{IMG}/og.jpg">
<link rel="preload" as="image" href="{IMG}/cover.webp" fetchpriority="high">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="{fonts}" rel="stylesheet">
<link rel="stylesheet" href="css/style.css?v={CSS_V}">
{L["analytics"]}</head>
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
    <a href="{contact}" class="btn btn--solid nav__cta" data-hover data-magnetic>{ui["cta_nav"]}</a>
  </div>
</header>
<main id="top" class="svc prodd case">
  <nav class="svc__crumbs" aria-label="Breadcrumb"><a href="{home}" data-hover>{ui["crumb_home"]}</a><i>/</i><a href="{"/ar/work" if ar else "/work"}" data-hover>{ui["crumb_work"]}</a><i>/</i><span aria-current="page">{name}</span></nav>
  <p class="section__tag">{L["tag"]}</p>
  <h1 class="section__title glitch" data-text="{upper}"><span class="rm__accent">{title_html}</span></h1>

  <div class="prodd__hero">
    <div class="prodd__shot"><img src="{IMG}/cover.webp" width="800" height="1000" fetchpriority="high" decoding="async" alt="{L["cover_alt"]}"></div>
    <div class="prodd__intro">
      <p class="rm__lead">{L["lead"]}</p>
      <dl class="prodd__facts">{facts}</dl>
      <div class="svc__actions"><a href="{contact}" class="btn btn--solid" data-hover data-magnetic>{ui["cta_similar"]}</a><a href="{P["behance"]}" target="_blank" rel="noopener" class="btn btn--ghost" data-hover data-magnetic>{ui["cta_behance"]}</a></div>
    </div>
  </div>

  <div class="svc__block">
    <h2 class="svc__h">{ui["h_brief"]}</h2>
    <div class="case__duo">
      <div><span class="case__label">{ui["l_challenge"]}</span><h3>{L["challenge_h"]}</h3><p>{L["challenge_p"]}</p></div>
      <div><span class="case__label">{ui["l_solution"]}</span><h3>{L["solution_h"]}</h3><p>{L["solution_p"]}</p></div>
    </div>
  </div>
  <div class="svc__block">
    <h2 class="svc__h">{L["h_pains"]}</h2>
    <ul class="svc__for">{pains}</ul>
  </div>
  <div class="svc__block">
    <h2 class="svc__h">{L["h_features"]}</h2>
    <div class="svc__items">{items(L["features"])}</div>
  </div>

{middle}
  <div class="svc__block">
    <h2 class="svc__h">{L["h_built"]}</h2>
    <div class="svc__items">{items(L["built"])}</div>
  </div>

  <div class="rm__cta">
    <p>{ui["cta_band"]}</p>
    <a href="{contact}" class="btn btn--big" data-hover data-magnetic>{ui["cta_big"]}</a>
  </div>

  <div class="svc__block">
    <h2 class="svc__h">{ui["h_next"]}</h2>
    <div class="svc__next">{nexts}</div>
  </div>
</main>
<footer class="footer">
  <div class="footer__base">
    <span>{ui["copyright"]}</span>
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


def write(root, P, langs):
    """langs: [(L, middle_html)] for en then ar."""
    for L, middle in langs:
        out = f"ar/work/{P['slug']}.html" if L["lang"] == "ar" else f"work/{P['slug']}.html"
        p = os.path.join(root, out)
        os.makedirs(os.path.dirname(p), exist_ok=True)
        open(p, "w", encoding="utf-8").write(fix_html(page(P, L, middle)))
        print("wrote", out)
