"""BLD Labs website case study: /work/bld-labs-website and /ar/work/bld-labs-website.
Text is taken from the BLD Labs website boards on Behance (the site's own copy)."""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from case_lib import analytics, stack, block, write

ROOT = sys.argv[1] if len(sys.argv) > 1 else os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # repo root
P = dict(slug="bld-labs-website", name="BLD Labs", date="2026-07",
         behance="https://www.behance.net/gallery/252207477/BLD-Labs-new-website-design")

SHOTS = [  # (file, w, h, alt EN, alt AR) — Behance order
    ("home-1", 1200, 2264, "BLD Labs home page: Building digital products that actually make sense, the manifesto and the numbers",
     "الصفحة الرئيسية لـ BLD Labs: Building digital products that actually make sense والبيان والأرقام"),
    ("home-2", 1200, 2080, "BLD Labs home page: About, Services and The Proof", "الصفحة الرئيسية لـ BLD Labs: من نحن والخدمات وأعمالنا"),
    ("learning-brief", 1200, 1500, "BLD Labs learning paths page and project brief page on laptops",
     "صفحة مسارات التعلّم وصفحة وصف المشروع لـ BLD Labs على لابتوبين"),
    ("home-3", 1200, 2165, "BLD Labs home page: Process, Let’s build and the footer", "الصفحة الرئيسية لـ BLD Labs: طريقة العمل وLet’s build والتذييل"),
    ("overview", 1200, 1500, "BLD Labs web design overview: hero, process, about and services",
     "نظرة عامة على تصميم موقع BLD Labs: الواجهة وطريقة العمل ومن نحن والخدمات"),
]

EN = dict(
    lang="en", analytics=analytics(ROOT, "products/baytak.html"),
    title="BLD Labs — Our Own Website Design | BLD Labs",
    ld_name="BLD Labs — studio website design",
    desc="Case study: how BLD Labs designed its own website — a terminal-inspired, green-on-black site that says what the studio does in one line and leads with how it thinks: research and strategy before visuals.",
    tag="// CASE STUDY — OUR OWN WEBSITE",
    cover_alt="The new BLD Labs website on a laptop: Building digital products that actually make sense",
    lead="Our own website. BLD Labs is a product studio in Cairo that helps startups and companies turn complex ideas into clear, usable and scalable digital products. The site had to say that in one line, lead with how we work — research, strategy and problem definition before visuals — and make starting a project one step away.",
    facts=[("CLIENT", "BLD LABS (US)"), ("INDUSTRY", "PRODUCT STUDIO"), ("SCOPE", "WEBSITE DESIGN · UI/UX"),
           ("PLATFORMS", "WEB · DESKTOP + MOBILE"), ("BASED IN", "CAIRO · SHIPPING WORLDWIDE"), ("YEAR", "2026")],
    challenge_h="A studio that sells thinking needs a site that shows it.",
    challenge_p="We don’t start with pixels. We start with research, strategy and deep problem definition — then we design and build products that make sense for the business and the user. A portfolio of pretty screens wouldn’t say that; the site had to.",
    solution_h="A terminal-inspired site built around how we work.",
    solution_p="Pixel display type, a green-on-black terminal look and one long scroll: the promise, what we believe, who we are, the services, the proof, the process and a call to action — with learning paths and a project brief page alongside.",
    h_pains="// WHAT THE SITE HAD TO DO",
    pains=["Say what BLD Labs does in one line",
           "Lead with how we think: research and strategy before visuals",
           "Show proof — work, products shipped and clients",
           "Explain the process from discovery to launch",
           "Keep “start a project” one step away on every screen"],
    h_features="// THE SECTIONS",
    features=[("Building digital products that actually make sense", "The hero: the promise in one line, with a dotted grid that glows around it."),
              ("What we believe", "Great products are built on deep understanding, not assumptions — with the numbers: 24+ products shipped, 18+ happy clients, 3+ countries, founded in 2026."),
              ("About", "A product studio founded in 2026 in Cairo, shipping worldwide — with a terminal-style card for type, location, services, clients and status."),
              ("Services", "Product design, UX research, UI design and development, each opening a detail panel."),
              ("The proof", "Selected work in a row of cards."),
              ("Process", "Discover, design, build, launch — from workshops and user interviews to weekly demos and staying on after launch."),
              ("Let’s build", "A closing call to action, plus learning paths and a page to describe your project.")],
    h_built="// WHAT WE DELIVERED",
    built=[("Visual language", "Pixel display type, terminal motifs, a green-on-black palette and glowing dot grids."),
           ("Home page", "One scroll from the promise to the call to action, in the order a client decides."),
           ("Learning &amp; brief pages", "Learning paths for designers, and a page that turns a visitor into a project brief."),
           ("Responsive layouts", "Desktop and mobile layouts for every section.")],
    crumb_home="Home", crumb_work="Work",
)

AR = dict(
    lang="ar", analytics=analytics(ROOT, "ar/products/baytak.html"),
    title="BLD Labs — تصميم موقعنا | BLD Labs",
    ld_name="BLD Labs — تصميم موقع الاستوديو",
    desc="دراسة حالة: كيف صمّمت BLD Labs موقعها — موقع بطابع الطرفية بالأخضر على الأسود، يقول ما يفعله الاستوديو في سطر واحد ويبدأ بطريقة تفكيره: البحث والاستراتيجية قبل الشكل.",
    tag="// دراسة حالة — موقعنا",
    cover_alt="موقع BLD Labs الجديد على لابتوب: Building digital products that actually make sense",
    lead="موقعنا نحن. BLD Labs استوديو منتجات في القاهرة يساعد الشركات الناشئة والشركات على تحويل الأفكار المعقّدة إلى منتجات رقمية واضحة وسهلة الاستخدام وقابلة للنمو. كان على الموقع أن يقول ذلك في سطر واحد، ويبدأ بطريقة عملنا — البحث والاستراتيجية وتحديد المشكلة قبل الشكل — ويجعل بدء المشروع على بُعد خطوة واحدة.",
    facts=[("العميل", "BLD LABS (نحن)"), ("المجال", "استوديو منتجات"), ("النطاق", "تصميم موقع · UI/UX"),
           ("المنصات", "ويب · كمبيوتر + جوال"), ("المقر", "القاهرة · نعمل عالميًا"), ("السنة", "2026")],
    challenge_h="استوديو يبيع طريقة التفكير يحتاج موقعًا يُظهرها.",
    challenge_p="نحن لا نبدأ بالبكسلات. نبدأ بالبحث والاستراتيجية والتعمّق في تحديد المشكلة، ثم نصمّم ونبني منتجات منطقية للعمل وللمستخدم. معرض شاشات جميلة لن يقول هذا، فكان على الموقع أن يقوله.",
    solution_h="موقع بطابع الطرفية مبني حول طريقة عملنا.",
    solution_p="خطوط بكسل وشكل طرفية بالأخضر على الأسود وتمرير واحد طويل: الوعد، وما نؤمن به، ومن نحن، والخدمات، وأعمالنا، وطريقة العمل، ودعوة لبدء مشروع — ومعها مسارات التعلّم وصفحة لوصف المشروع.",
    h_pains="// ما كان على الموقع أن يحققه",
    pains=["يقول ما تفعله BLD Labs في سطر واحد",
           "يبدأ بطريقة تفكيرنا: البحث والاستراتيجية قبل الشكل",
           "يعرض الإثبات — الأعمال والمنتجات المُطلقة والعملاء",
           "يشرح طريقة العمل من الاكتشاف حتى الإطلاق",
           "يُبقي «ابدأ مشروعك» على بُعد خطوة في كل شاشة"],
    h_features="// أقسام الموقع",
    features=[("Building digital products that actually make sense", "الواجهة: الوعد في سطر واحد، مع شبكة نقاط تتوهّج حوله."),
              ("ما نؤمن به", "المنتجات العظيمة تُبنى على فهم عميق لا على افتراضات — مع الأرقام: 24+ منتجًا أُطلق، و18+ عميلًا، و3+ دول، وتأسسنا في 2026."),
              ("من نحن", "استوديو منتجات تأسّس في 2026 بالقاهرة ويعمل عالميًا — مع بطاقة بطابع الطرفية للنوع والموقع والخدمات والعملاء والحالة."),
              ("الخدمات", "تصميم المنتج، وبحث تجربة المستخدم، وتصميم الواجهات، والتطوير، ولكلٍّ منها لوحة تفاصيل."),
              ("أعمالنا", "أعمال مختارة في صف من البطاقات."),
              ("طريقة العمل", "اكتشاف، تصميم، بناء، إطلاق — من ورش العمل ومقابلات المستخدمين إلى العروض الأسبوعية والبقاء بعد الإطلاق."),
              ("لنبنِ", "دعوة ختامية لبدء مشروع، ومعها مسارات التعلّم وصفحة لوصف مشروعك.")],
    h_built="// ما سلّمناه",
    built=[("اللغة البصرية", "خطوط بكسل وعناصر بطابع الطرفية وألوان الأخضر على الأسود وشبكات نقاط متوهّجة."),
           ("الصفحة الرئيسية", "تمرير واحد من الوعد إلى الدعوة لبدء مشروع، بالترتيب الذي يتخذ به العميل قراره."),
           ("صفحات التعلّم ووصف المشروع", "مسارات تعلّم للمصمّمين، وصفحة تحوّل الزائر إلى وصف مشروع."),
           ("تصميم متجاوب", "تصميمات للكمبيوتر والجوال لكل قسم.")],
    crumb_home="الرئيسية", crumb_work="أعمالنا",
)


def middle(L):
    ar = L["lang"] == "ar"
    shots = [(f, w, h, a_ar if ar else a_en) for f, w, h, a_en, a_ar in SHOTS]
    return block("// الموقع" if ar else "// THE WEBSITE", stack("bld-labs-website", shots, big=1200))


write(ROOT, P, [(EN, middle(EN)), (AR, middle(AR))])
