"""Build /about, /ar/about, /ismail-mosbah and /ar/ismail-mosbah.
Founder facts come from Ismail's Framer portfolio and Behance profile."""
import json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from clean_links import fix_html
from case_lib import SITE, CSS_V, analytics

ROOT = sys.argv[1] if len(sys.argv) > 1 else os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # repo root
PERSON_ID = f"{SITE}/ismail-mosbah#person"
PHOTO = "/assets/img/about/ismail-mosbah-v2"
SAME_AS = ["https://www.linkedin.com/in/ismail-mospah", "https://www.behance.net/ismailMospah",
           "https://ismailmospah.framer.website/", "https://www.instagram.com/ismail_mospah/",
           "https://dribbble.com/IsmailMospah", "https://twitter.com/ismailmospah"]
LINKS = [("LinkedIn", SAME_AS[0]), ("Behance", SAME_AS[1]), ("Portfolio", SAME_AS[2]),
         ("Instagram", SAME_AS[3]), ("Dribbble", SAME_AS[4]), ("X / Twitter", SAME_AS[5])]


def nav(ar):
    navl = ([("/ar/work", "أعمالنا"), ("/ar/products", "منتجاتنا"), ("/ar/about", "من نحن"), ("ar/services.html", "خدماتنا"),
             ("/ar/learning.html", "تعلّم"), ("/ar/blogs.html", "المقالات"), ("/ar/contact.html", "تواصل")] if ar else
            [("/work", "WORK"), ("/products", "PRODUCTS"), ("/about", "ABOUT"), ("services.html", "SERVICES"),
             ("learning.html", "LEARNING"), ("blogs.html", "BLOGS"), ("contact.html", "CONTACT")])
    return "".join(f'\n    <a href="{h}" data-hover data-scramble>{t}</a>' for h, t in navl)


def shell(ar, path, title, desc, ld, og_img, main_cls, main, og_type="website", extra_head=""):
    url = f"{SITE}/ar{path}" if ar else f"{SITE}{path}"
    home = "ar" if ar else "index.html"
    contact = "/ar/contact.html" if ar else "contact.html"
    lang_switch = (f'<a href="{path}" class="nav__lang" hreflang="en" lang="en" data-hover>EN</a>' if ar else
                   f'<a href="/ar{path}" class="nav__lang" hreflang="ar" lang="ar" data-hover>عربي</a>')
    fonts = ("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&family=JetBrains+Mono:wght@400;700"
             + ("&family=IBM+Plex+Sans+Arabic:wght@300;400;500;700" if ar else "") + "&display=swap")
    an = analytics(ROOT, "ar/products/baytak.html" if ar else "products/baytak.html")
    return f"""<!DOCTYPE html>
{'<html lang="ar" dir="rtl" class="ar">' if ar else '<html lang="en">'}
<head>
<meta charset="UTF-8">
<meta name="facebook-domain-verification" content="714gqtx9d1c6a6qvyppl1t5q78c2e6" />
<base href="/">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<meta name="description" content="{desc}">
{extra_head}<link rel="canonical" href="{url}">
<link rel="alternate" hreflang="en" href="{SITE}{path}">
<link rel="alternate" hreflang="ar" href="{SITE}/ar{path}">
<link rel="alternate" hreflang="x-default" href="{SITE}{path}">
<script type="application/ld+json">
{json.dumps(ld, ensure_ascii=False, indent=2)}
</script>
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/assets/img/icons/favicon-96x96.png" sizes="96x96" type="image/png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:image" content="{og_img}">
<meta property="og:url" content="{url}">
<meta property="og:type" content="{og_type}">
{'<meta property="og:locale" content="ar_AR">' + chr(10) if ar else ''}<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{title}">
<meta name="twitter:description" content="{desc}">
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
  <nav class="nav__links">{nav(ar)}
  </nav>
  <div class="nav__end">
    {lang_switch}
    <a href="{contact}" class="btn btn--solid nav__cta" data-hover data-magnetic>{'ابدأ مشروعك' if ar else 'START A PROJECT'}</a>
  </div>
</header>
<main id="top" class="svc {main_cls}">
{main}
</main>
<footer class="footer">
  <div class="footer__base">
    <span>{'© 2026 BLD LABS — جميع الحقوق محفوظة · أسّسها <a href="/ar/ismail-mosbah" class="footer__founder" data-hover>إسماعيل مصباح</a>' if ar else '© 2026 BLD LABS — ALL RIGHTS RESERVED · FOUNDED BY <a href="/ismail-mosbah" class="footer__founder" data-hover>ISMAIL MOSBAH</a>'}</span>
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


def items(rows):
    return '<div class="svc__items">' + "".join(
        f'<div class="svc__item"><span class="svc__no">{i+1:02d}</span><h3>{h}</h3><p>{p}</p></div>' for i, (h, p) in enumerate(rows)) + "</div>"


def tiles(rows):  # (href, name, line, external?)
    return '<div class="svc__work">' + "".join(
        f'<a href="{h}"{" target=\"_blank\" rel=\"noopener\"" if ext else ""} data-hover><b>{n}</b><span>{s}</span></a>' for h, n, s, ext in rows) + "</div>"


def owned(ar, rows):
    """Companies and products Ismail founded/owns: logo, name, line. Top Tech opens its own site."""
    out = []
    for href, logo, name, line, ext in rows:
        tgt = ' target="_blank" rel="noopener"' if ext else ""
        label = ("زر الموقع" if ar else "VISIT") if ext else ("افتح" if ar else "OPEN")
        out.append(f'<a class="prodstrip__item about__owned" href="{href}"{tgt} data-hover data-label="{label}">'
                   f'<img src="/assets/img/logos/{logo}.webp" width="72" height="72" loading="lazy" alt="{name} logo">'
                   f'<span><b>{name}</b><em>{line}</em></span></a>')
    return '<div class="prodstrip__grid">' + "".join(out) + "</div>"


def photo(ar, eager=True):
    alt = "إسماعيل مصباح، مؤسس BLD Labs" if ar else "Ismail Mosbah, founder of BLD Labs"
    return (f'<img src="{PHOTO}-800.webp" srcset="{PHOTO}-800.webp 800w, {PHOTO}-1200.webp 1200w" sizes="(max-width: 760px) 340px, 340px" '
            f'width="800" height="1000" {"fetchpriority=\"high\"" if eager else "loading=\"lazy\""} decoding="async" alt="{alt}">')


def facts(rows):
    return '<dl class="prodd__facts">' + "".join(f"<div><dt>{a}</dt><dd>{b}</dd></div>" for a, b in rows) + "</dl>"


PERSON = {
    "@type": "Person", "@id": PERSON_ID, "name": "Ismail Mosbah",
    "alternateName": ["Ismail Mospah", "إسماعيل مصباح", "Som3a"],
    "url": f"{SITE}/ismail-mosbah", "image": f"{SITE}{PHOTO}-1200.webp",
    "jobTitle": "Founder of BLD Labs · Product Designer",
    "description": "Product designer from Cairo, Egypt with 4+ years of experience, founder of BLD Labs and owner of Top Tech, Baytak, Prince El-Lamma and Qalqalah.",
    "worksFor": {"@id": f"{SITE}/#org"},
    "address": {"@type": "PostalAddress", "addressLocality": "Cairo", "addressCountry": "EG"},
    "knowsAbout": ["Product design", "UX research", "UX design", "UI design", "Digital products", "Mobile apps", "SaaS dashboards"],
    "sameAs": SAME_AS,
}
TOPTECH = {"@type": "Organization", "@id": "https://www.toptech.studio/#org", "name": "Top Tech", "url": "https://www.toptech.studio/",
           "description": "Full-service marketing agency in Saudi Arabia and Egypt.", "founder": {"@id": PERSON_ID}}
ORG = {"@type": "Organization", "@id": f"{SITE}/#org", "name": "BLD Labs", "url": f"{SITE}/", "foundingDate": "2026",
       "founder": {"@id": PERSON_ID}, "logo": f"{SITE}/assets/img/icons/icon-512.png",
       "address": {"@type": "PostalAddress", "addressLocality": "Cairo", "addressCountry": "EG"}}


# ----------------------------------------------------------------------------- /about
def about(ar):
    T = (dict(
        title="من نحن — استوديو منتجات رقمية تأسس في 2026 | BLD Labs",
        desc="BLD Labs استوديو منتجات رقمية تأسس في القاهرة عام 2026، يركّز على المنتجات الرقمية فقط — تطبيقات ومواقع ولوحات تحكم ومنصات SaaS — من الفكرة حتى الإطلاق والنمو. أسّسه المصمّم إسماعيل مصباح.",
        crumbs='<a href="ar" data-hover>الرئيسية</a><i>/</i><span aria-current="page">من نحن</span>',
        tag="// من نحن — /about", h1="نبني <span class=\"rm__accent\">منتجات <span class=\"case__last\">رقمية<i class=\"dot\"></i></span></span>", h1t="نبني منتجات رقمية",
        lead="BLD Labs استوديو منتجات رقمية تأسس في القاهرة عام 2026. نركّز على شيء واحد فقط: المنتجات الرقمية — التطبيقات والمواقع ولوحات التحكم ومنصات SaaS — ونأخذها من الفكرة الأولى حتى الإطلاق والنمو.",
        facts=[("التأسيس", "2026"), ("المقر", "القاهرة، مصر"), ("تركيزنا", "المنتجات الرقمية فقط"), ("العملاء", "+18 حول العالم"), ("منتجات أطلقناها", "+24")],
        b_h="// ما نؤمن به", b_p="نؤمن أن المنتجات العظيمة تُبنى على فهم عميق — لا على افتراضات. البحث والاستراتيجية وتحديد المشكلة تأتي قبل الشكل. لا نبدأ بالبكسلات؛ نبدأ بفهم العمل والمستخدم، ثم نصمّم ونبني منتجات منطقية للاثنين.",
        f_h="// ما نركّز عليه",
        focus=[("الاستراتيجية وبحث المستخدم", "نفهم السوق والمستخدم والمشكلة قبل أي شاشة: ورش عمل، ومقابلات، ومراجعة للبيانات."),
               ("تصميم المنتج", "تجربة وواجهات التطبيقات والمواقع ولوحات التحكم، ونظام تصميم يحافظ على الاتساق مع نمو المنتج."),
               ("التطوير", "تحويل التصميم إلى منتج يعمل على الويب والجوال، بعروض أسبوعية لتتابع التقدّم."),
               ("الإطلاق والنمو", "نُطلق ونقيس ونحسّن، ونبقى معك بعد الإطلاق.")],
        p_h="// طريقة عملنا",
        steps=[("اكتشاف", "ورش عمل وبحث سوق ومقابلات مستخدمين. نفهم عملك قبل أن نلمس أي بكسل."),
               ("تصميم", "من الإطار السلكي إلى واجهات عالية الدقة ثم نماذج تفاعلية، تُختبر مع مستخدمين حقيقيين."),
               ("بناء", "هندسة نظيفة قابلة للنمو مع عروض أسبوعية."),
               ("إطلاق", "نُطلق ونقيس ونحسّن، ونبقى بعد الإطلاق.")],
        o_h="// منتجاتنا", o_lead="إلى جانب مشاريع عملائنا، نبني منتجاتنا الخاصة ونديرها بأنفسنا.",
        prods=[("/ar/products/baytak", "baytak", "بيتك", "منصة سكن مشترك + تطبيق السماسرة"),
               ("/ar/products/qalqalah", "qalqalah", "قلقلة", "تعلّم التجويد وحفظ القرآن"),
               ("/ar/products/prince-el-lamma", "prince-el-lamma", "برنس اللمة", "ألعاب جماعية · أكثر من 20,000 تحميل")],
        all_prods=("/ar/products", "كل المنتجات"), open_label="افتح",
        fo_h="// المؤسس", fo_tag="المؤسس · مصمّم منتجات",
        fo_p="إسماعيل مصباح مصمّم منتجات من القاهرة بخبرة تزيد على 4 سنوات في تصميم التطبيقات والمواقع ولوحات التحكم لشركات في مصر والسعودية والإمارات. أسّس BLD Labs في 2026 ليبني منتجات رقمية تبدأ بالبحث وتنتهي بمنتج يحبه الناس.",
        fo_btn="المزيد عني ←", fo_href="/ar/ismail-mosbah",
        cta_band="عندك فكرة منتج رقمي؟ لنبنِها معًا.", cta_big="ابدأ مشروعك ←", contact="/ar/contact.html",
    ) if ar else dict(
        title="About BLD Labs — A Digital Product Studio Founded in 2026",
        desc="BLD Labs is a digital product studio founded in Cairo in 2026. We focus only on digital products — apps, websites, dashboards and SaaS — from the first idea to launch and growth. Founded by product designer Ismail Mosbah.",
        crumbs='<a href="index.html" data-hover>Home</a><i>/</i><span aria-current="page">About</span>',
        tag="// ABOUT — /about", h1="WE BUILD <span class=\"rm__accent\">DIGITAL <span class=\"case__last\">PRODUCTS<i class=\"dot\"></i></span></span>", h1t="WE BUILD DIGITAL PRODUCTS",
        lead="BLD Labs is a digital product studio founded in Cairo in 2026. We focus on one thing only: digital products — apps, websites, dashboards and SaaS platforms — and we take them from the first idea to launch and growth.",
        facts=[("FOUNDED", "2026"), ("BASED IN", "CAIRO, EGYPT"), ("FOCUS", "DIGITAL PRODUCTS ONLY"), ("CLIENTS", "18+ WORLDWIDE"), ("PRODUCTS SHIPPED", "24+")],
        b_h="// WHAT WE BELIEVE", b_p="We believe great products are built on deep understanding — not assumptions. Research, strategy and problem definition come before visuals. We don’t start with pixels; we start by understanding the business and the user, then design and build products that make sense for both.",
        f_h="// WHAT WE FOCUS ON",
        focus=[("Strategy &amp; UX research", "We understand the market, the users and the problem before any screen: workshops, interviews and a look at the data."),
               ("Product design", "UX and UI for apps, websites and dashboards, with a design system that keeps the product consistent as it grows."),
               ("Development", "Turning the design into a working product on the web and mobile, with weekly demos so you see progress."),
               ("Launch &amp; growth", "We ship, measure and improve — and we stay on after launch.")],
        p_h="// HOW WE WORK",
        steps=[("DISCOVER", "Deep-dive workshops, market research and user interviews. We learn your business before we touch a pixel."),
               ("DESIGN", "Wireframes → high-fidelity UI → interactive prototypes, tested with real users."),
               ("BUILD", "Clean, scalable engineering with weekly demos."),
               ("LAUNCH", "Ship, measure, optimise — and we stay on after launch.")],
        o_h="// OUR PRODUCTS", o_lead="Besides client work, we build and run products of our own.",
        prods=[("/products/baytak", "baytak", "BAYTAK", "CO-LIVING PLATFORM + BROKER APP"),
               ("/products/qalqalah", "qalqalah", "QALQALAH", "TAJWEED &amp; QURAN MEMORISATION"),
               ("/products/prince-el-lamma", "prince-el-lamma", "PRINCE EL-LAMMA", "PARTY GAMES · 20,000+ DOWNLOADS")],
        all_prods=("/products", "VIEW ALL PRODUCTS"), open_label="OPEN",
        fo_h="// THE FOUNDER", fo_tag="FOUNDER · PRODUCT DESIGNER",
        fo_p="Ismail Mosbah is a product designer from Cairo with 4+ years of experience designing apps, websites and dashboards for companies in Egypt, Saudi Arabia and the UAE. He founded BLD Labs in 2026 to build digital products that start with research and end with something people love to use.",
        fo_btn="MORE ABOUT ME →", fo_href="/ismail-mosbah",
        cta_band="GOT A DIGITAL PRODUCT IDEA? LET’S BUILD IT.", cta_big="START A PROJECT →", contact="contact.html",
    ))
    steps = '<ol class="svc__steps">' + "".join(f'<li><span class="svc__no">{i+1:02d}</span><h3>{h}</h3><p>{p}</p></li>' for i, (h, p) in enumerate(T["steps"])) + "</ol>"
    main = f"""  <nav class="svc__crumbs" aria-label="Breadcrumb">{T["crumbs"]}</nav>
  <p class="section__tag">{T["tag"]}</p>
  <h1 class="section__title glitch" data-text="{T["h1t"]}">{T["h1"]}</h1>
  <p class="rm__lead">{T["lead"]}</p>
  {facts(T["facts"])}

  <div class="svc__block">
    <h2 class="svc__h">{T["b_h"]}</h2>
    <p class="about__belief">{T["b_p"]}</p>
  </div>
  <div class="svc__block">
    <h2 class="svc__h">{T["f_h"]}</h2>
    {items(T["focus"])}
  </div>
  <div class="svc__block">
    <h2 class="svc__h">{T["p_h"]}</h2>
    {steps}
  </div>
  <div class="svc__block">
    <h2 class="svc__h">{T["o_h"]}</h2>
    <p class="prodstrip__lead about__prodlead">{T["o_lead"]}</p>
    <div class="prodstrip__grid">{"".join(f'<a class="prodstrip__item" href="{h}" data-hover data-label="{T["open_label"]}"><img src="/assets/img/products/{img}.jpg" alt="{n}" width="72" height="72" loading="lazy"><span><b>{n}</b><em>{s}</em></span></a>' for h, img, n, s in T["prods"])}</div>
    <p class="about__allprods"><a href="{T["all_prods"][0]}" class="btn btn--ghost" data-hover data-magnetic>{T["all_prods"][1]}</a></p>
  </div>

  <div class="svc__block" id="founder">
    <h2 class="svc__h">{T["fo_h"]}</h2>
    <div class="prodd__hero">
      <div class="prodd__shot">{photo(ar, eager=False)}</div>
      <div class="prodd__intro">
        <p class="section__tag">{T["fo_tag"]}</p>
        <h3 class="about__name">{'إسماعيل مصباح' if ar else 'Ismail Mosbah'} <small lang="{'en' if ar else 'ar'}">{'Ismail Mosbah' if ar else 'إسماعيل مصباح'}</small></h3>
        <p class="rm__lead">{T["fo_p"]}</p>
        <div class="svc__actions"><a href="{T["fo_href"]}" class="btn btn--solid" data-hover data-magnetic>{T["fo_btn"]}</a><a href="https://www.linkedin.com/in/ismail-mospah" target="_blank" rel="noopener" class="btn btn--ghost" data-hover data-magnetic>LINKEDIN</a></div>
      </div>
    </div>
  </div>

  <div class="rm__cta">
    <p>{T["cta_band"]}</p>
    <a href="{T["contact"]}" class="btn btn--big" data-hover data-magnetic>{T["cta_big"]}</a>
  </div>"""
    url = f"{SITE}/ar/about" if ar else f"{SITE}/about"
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "الرئيسية" if ar else "Home", "item": f"{SITE}/ar" if ar else f"{SITE}/"},
            {"@type": "ListItem", "position": 2, "name": "من نحن" if ar else "About", "item": url}]},
        {"@type": "AboutPage", "name": T["title"], "url": url, "inLanguage": "ar" if ar else "en", "about": {"@id": f"{SITE}/#org"}},
        ORG, PERSON]}
    return shell(ar, "/about", T["title"], T["desc"], ld, f"{SITE}/assets/img/og-image.png", "aboutpg", main)


# ----------------------------------------------------------------------------- /ismail-mosbah
EXPERIENCE_EN = [
    ("Product Designer · Guapa", "Feb 2025 — present", "Redesigned the user and provider apps and the company website, improving usability, user flows and engagement for 35K–60K users, and designed and launched new features based on user research and business needs."),
    ("Product Designer · Tuba", "Feb 2025 — Nov 2025", "A medical insurance company changing the future of health insurance — designing an easy experience for each of the system’s five actors."),
    ("Product Designer · Estate Master", "Jul 2024 — Jan 2025", "Real estate: added features to the existing app and redesigned key pages with a focus on the user experience."),
    ("Product Designer · Easy Orders", "Dec 2023 — Apr 2024", "SaaS: designed a theme for the platform and its landing page."),
    ("Product Designer · Desh &amp; Dez", "Sep 2023 — Jun 2024", "A social media platform: designed the app, the dashboard and the design system."),
    ("Product Designer · Halal Mazarana", "Sep 2023 — Dec 2023", "Meat and animal products: redesigned the app (10,000+ downloads on the store) and the website, and improved the user experience."),
]
EXPERIENCE_AR = [
    ("مصمّم منتجات · Guapa", "فبراير 2025 — حتى الآن", "إعادة تصميم تطبيقي المستخدم ومقدّم الخدمة وموقع الشركة، وتحسين سهولة الاستخدام والمسارات والتفاعل لـ 35 إلى 60 ألف مستخدم، وتصميم ميزات جديدة وإطلاقها بناءً على بحث المستخدم واحتياجات العمل."),
    ("مصمّم منتجات · Tuba", "فبراير 2025 — نوفمبر 2025", "شركة تأمين طبي تسعى لتغيير مستقبل التأمين الصحي — تصميم تجربة سهلة لكل طرف من أطراف النظام الخمسة."),
    ("مصمّم منتجات · Estate Master", "يوليو 2024 — يناير 2025", "عقارات: إضافة ميزات للتطبيق الحالي وإعادة تصميم صفحات أساسية مع التركيز على تجربة المستخدم."),
    ("مصمّم منتجات · Easy Orders", "ديسمبر 2023 — أبريل 2024", "SaaS: تصميم ثيم للمنصة وصفحة الهبوط الخاصة بها."),
    ("مصمّم منتجات · Desh &amp; Dez", "سبتمبر 2023 — يونيو 2024", "منصة تواصل اجتماعي: تصميم التطبيق ولوحة التحكم ونظام التصميم."),
    ("مصمّم منتجات · Halal Mazarana", "سبتمبر 2023 — ديسمبر 2023", "لحوم ومنتجات حيوانية: إعادة تصميم التطبيق (أكثر من 10 آلاف تحميل) والموقع وتحسين تجربة المستخدم."),
]


def founder(ar):
    T = (dict(
        title="إسماعيل مصباح — مؤسس BLD Labs ومصمّم منتجات | Ismail Mosbah",
        desc="إسماعيل مصباح (Ismail Mosbah) مصمّم منتجات من القاهرة ومؤسس BLD Labs، ومالك توب تك وبيتك وبرنس اللمة وقلقلة. أكثر من 4 سنوات في تصميم التطبيقات والمواقع ولوحات التحكم.",
        crumbs='<a href="ar" data-hover>الرئيسية</a><i>/</i><a href="/ar/about" data-hover>من نحن</a><i>/</i><span aria-current="page">إسماعيل مصباح</span>',
        tag="// المؤسس — BLD LABS", h1="إسماعيل <span class=\"rm__accent\"><span class=\"case__last\">مصباح<i class=\"dot\"></i></span></span>", h1t="إسماعيل مصباح",
        sub="Ismail Mosbah · مؤسس BLD Labs · مصمّم منتجات",
        lead="مرحبًا! أنا إسماعيل مصباح، مصمّم منتجات ومؤسس BLD Labs، شغوف بصناعة تجارب رقمية ذات معنى وتحويل الأفكار إلى منتجات يحب الناس استخدامها. أعمل بمنهج يضع المستخدم في المركز، يركّز على حل المشكلات وتصميم تجارب عملية وجذابة في آن واحد.",
        facts=[("الدور", "مؤسس BLD LABS"), ("التخصص", "مصمّم منتجات"), ("الخبرة", "+4 سنوات"), ("المقر", "القاهرة، مصر"), ("يُعرف أيضًا", "ISMAIL MOSPAH")],
        o_h="// مؤسس ومالك",
        own=[("/ar/about", "bld-labs", "BLD Labs", "استوديو منتجات رقمية · تأسس 2026", False),
             ("https://www.toptech.studio/", "top-tech", "Top Tech", "وكالة تسويق في السعودية ومصر · toptech.studio ↗", True),
             ("/ar/products/baytak", "baytak", "بيتك", "منصة سكن مشترك في مصر", False),
             ("/ar/products/qalqalah", "qalqalah", "قلقلة", "تطبيق قرآن وتجويد", False),
             ("/ar/products/prince-el-lamma", "prince-el-lamma", "برنس اللمة", "ألعاب جماعية · +20 ألف تحميل", False)],
        a_h="// عني", a_p=["أحب العمل مع الفرق وأصحاب القرار لتحويل التحديات المعقّدة إلى حلول بسيطة وسهلة. وفي 2026 أسّست BLD Labs لأبني مع المؤسسين والشركات منتجات رقمية تبدأ بالبحث والاستراتيجية قبل الشكل.",
                                   "إن كنت تبحث عن شخص شغوف بالتصميم ومهتم بصناعة منتجات مؤثّرة، فلنتواصل ونبنِ شيئًا مذهلًا معًا."],
        s_h="// ما أقدّمه", services=[("بحث تجربة المستخدم", "مقابلات واختبارات قابلية الاستخدام وتحليل البيانات لفهم المشكلة الحقيقية."),
                                      ("تصميم المنتج", "من الفكرة واستراتيجية المنتج إلى منتج متكامل يخدم العمل والمستخدم."),
                                      ("تصميم تجربة المستخدم", "مسارات ورحلات مستخدم واضحة تختصر الطريق للهدف."),
                                      ("تصميم الواجهات", "واجهات وأنظمة تصميم متّسقة للتطبيقات والمواقع ولوحات التحكم.")],
        e_h="// الخبرة", exp=EXPERIENCE_AR,
        w_h="// أعمال مختارة",
        work=[("/ar/work/zabehaty", "ZABEHATY", "بحث تجربة مستخدم وإعادة تصميم", False), ("/ar/work/hom", "HOM", "تطبيقات عقارية ولوحة تحكم", False),
              ("/ar/work/asees-x", "ASEES-X", "تطبيق موارد بشرية وصفحة هبوط", False), ("/ar/work", "كل المشاريع", "أعمال BLD Labs", False)],
        l_h="// تجدني على",
        cta_band="لنبنِ منتجك الرقمي التالي معًا.", cta_big="ابدأ مشروعًا مع BLD Labs ←", contact="/ar/contact.html",
    ) if ar else dict(
        title="Ismail Mosbah — Founder of BLD Labs &amp; Product Designer | إسماعيل مصباح",
        desc="Ismail Mosbah (Ismail Mospah, إسماعيل مصباح) is a product designer from Cairo and the founder of BLD Labs — owner of Top Tech, Baytak, Prince El-Lamma and Qalqalah, with 4+ years designing apps, websites and dashboards.",
        crumbs='<a href="index.html" data-hover>Home</a><i>/</i><a href="/about" data-hover>About</a><i>/</i><span aria-current="page">Ismail Mosbah</span>',
        tag="// FOUNDER — BLD LABS", h1="ISMAIL <span class=\"rm__accent\"><span class=\"case__last\">MOSBAH<i class=\"dot\"></i></span></span>", h1t="ISMAIL MOSBAH",
        sub="إسماعيل مصباح · Founder of BLD Labs · Product Designer",
        lead="Hello! I’m Ismail Mosbah, a product designer and the founder of BLD Labs, with a passion for creating meaningful digital experiences and turning ideas into products people love to use. My approach is user-centred: solving real problems and designing experiences that are both functional and visually engaging.",
        facts=[("ROLE", "FOUNDER OF BLD LABS"), ("DISCIPLINE", "PRODUCT DESIGNER"), ("EXPERIENCE", "4+ YEARS"), ("BASED IN", "CAIRO, EGYPT"), ("ALSO KNOWN AS", "ISMAIL MOSPAH")],
        o_h="// FOUNDER &amp; OWNER OF",
        own=[("/about", "bld-labs", "BLD LABS", "DIGITAL PRODUCT STUDIO · FOUNDED 2026", False),
             ("https://www.toptech.studio/", "top-tech", "TOP TECH", "MARKETING AGENCY · KSA &amp; EGYPT · TOPTECH.STUDIO ↗", True),
             ("/products/baytak", "baytak", "BAYTAK", "CO-LIVING PLATFORM FOR EGYPT", False),
             ("/products/qalqalah", "qalqalah", "QALQALAH", "QURAN &amp; TAJWEED APP", False),
             ("/products/prince-el-lamma", "prince-el-lamma", "PRINCE EL-LAMMA", "PARTY GAMES · 20,000+ DOWNLOADS", False)],
        a_h="// ABOUT ME", a_p=["I love collaborating with teams and stakeholders to turn complex challenges into simple, intuitive solutions. In 2026 I founded BLD Labs to build digital products with founders and companies — products that put research and strategy before visuals.",
                                "If you’re looking for someone passionate about design and dedicated to creating impactful products, let’s connect and build something amazing together."],
        s_h="// WHAT I DO", services=[("UX research", "Interviews, usability testing and data to find the real problem."),
                                     ("Product design", "From the idea and product strategy to a complete product that serves the business and the user."),
                                     ("UX design", "Clear flows and user journeys that shorten the path to the goal."),
                                     ("UI design", "Consistent interfaces and design systems for apps, websites and dashboards.")],
        e_h="// EXPERIENCE", exp=EXPERIENCE_EN,
        w_h="// SELECTED WORK",
        work=[("/work/zabehaty", "ZABEHATY", "UX research + app redesign", False), ("/work/hom", "HOM", "Property apps + dashboard", False),
              ("/work/asees-x", "ASEES-X", "HR app + landing page", False), ("/work", "ALL PROJECTS", "Everything by BLD Labs", False)],
        l_h="// FIND ME ON",
        cta_band="LET’S BUILD YOUR NEXT DIGITAL PRODUCT.", cta_big="START A PROJECT WITH BLD LABS →", contact="contact.html",
    ))
    exp = '<ol class="about__exp">' + "".join(f'<li><span class="svc__no">{d}</span><h3>{r}</h3><p>{p}</p></li>' for r, d, p in T["exp"]) + "</ol>"
    links = '<div class="svc__actions">' + "".join(f'<a href="{u}" target="_blank" rel="noopener me" class="btn btn--ghost" data-hover data-magnetic>{n}</a>' for n, u in LINKS) + "</div>"
    main = f"""  <nav class="svc__crumbs" aria-label="Breadcrumb">{T["crumbs"]}</nav>
  <p class="section__tag">{T["tag"]}</p>
  <h1 class="section__title glitch" data-text="{T["h1t"]}">{T["h1"]}</h1>

  <div class="prodd__hero">
    <div class="prodd__shot">{photo(ar)}</div>
    <div class="prodd__intro">
      <p class="about__sub">{T["sub"]}</p>
      <p class="rm__lead">{T["lead"]}</p>
      {facts(T["facts"])}
      <div class="svc__actions"><a href="https://www.linkedin.com/in/ismail-mospah" target="_blank" rel="noopener me" class="btn btn--solid" data-hover data-magnetic>LINKEDIN</a><a href="https://www.behance.net/ismailMospah" target="_blank" rel="noopener me" class="btn btn--ghost" data-hover data-magnetic>BEHANCE</a><a href="https://ismailmospah.framer.website/" target="_blank" rel="noopener me" class="btn btn--ghost" data-hover data-magnetic>{'البورتفوليو' if ar else 'PORTFOLIO'}</a></div>
    </div>
  </div>

  <div class="svc__block">
    <h2 class="svc__h">{T["o_h"]}</h2>
    {owned(ar, T["own"])}
  </div>
  <div class="svc__block">
    <h2 class="svc__h">{T["a_h"]}</h2>
    {"".join(f'<p class="about__belief">{p}</p>' for p in T["a_p"])}
  </div>
  <div class="svc__block">
    <h2 class="svc__h">{T["s_h"]}</h2>
    {items(T["services"])}
  </div>
  <div class="svc__block">
    <h2 class="svc__h">{T["e_h"]}</h2>
    {exp}
  </div>
  <div class="svc__block">
    <h2 class="svc__h">{T["w_h"]}</h2>
    {tiles(T["work"])}
  </div>
  <div class="svc__block">
    <h2 class="svc__h">{T["l_h"]}</h2>
    {links}
  </div>

  <div class="rm__cta">
    <p>{T["cta_band"]}</p>
    <a href="{T["contact"]}" class="btn btn--big" data-hover data-magnetic>{T["cta_big"]}</a>
  </div>"""
    url = f"{SITE}/ar/ismail-mosbah" if ar else f"{SITE}/ismail-mosbah"
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "الرئيسية" if ar else "Home", "item": f"{SITE}/ar" if ar else f"{SITE}/"},
            {"@type": "ListItem", "position": 2, "name": "من نحن" if ar else "About", "item": f"{SITE}/ar/about" if ar else f"{SITE}/about"},
            {"@type": "ListItem", "position": 3, "name": "إسماعيل مصباح" if ar else "Ismail Mosbah", "item": url}]},
        {"@type": "ProfilePage", "name": T["title"].replace("&amp;", "&"), "url": url, "inLanguage": "ar" if ar else "en",
         "dateModified": "2026-11-06", "mainEntity": {"@id": PERSON_ID}},
        PERSON, ORG, TOPTECH]}
    head = '<meta name="author" content="Ismail Mosbah">\n'
    return shell(ar, "/ismail-mosbah", T["title"], T["desc"], ld, f"{SITE}{PHOTO}-og.jpg", "aboutpg founderpg", main,
                 og_type="profile", extra_head=head)


for ar in (False, True):
    pre = "ar/" if ar else ""
    open(os.path.join(ROOT, f"{pre}about.html"), "w", encoding="utf-8").write(fix_html(about(ar)))
    open(os.path.join(ROOT, f"{pre}ismail-mosbah.html"), "w", encoding="utf-8").write(fix_html(founder(ar)))
    print("wrote", f"{pre}about.html", f"{pre}ismail-mosbah.html")
