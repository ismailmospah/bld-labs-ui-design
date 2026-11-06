"""Top Tech case study: /work/top-tech and /ar/work/top-tech.
Text is taken from the Top Tech website shown on Behance (its own copy)."""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from case_lib import analytics, stack, block, write

ROOT = sys.argv[1] if len(sys.argv) > 1 else os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # repo root
P = dict(slug="top-tech", name="Top Tech", date="2026-08",
         behance="https://www.behance.net/gallery/253726345/Website-Redesign-Top-Tech-Company")

SHOTS = [  # (file, w, h, alt EN, alt AR): seven slices of the home page, then the contact page
    ("site-1", 1200, 962, "Top Tech website hero: We make brands grow", "واجهة موقع توب تك: We make brands grow"),
    ("site-2", 1200, 960, "Top Tech website: Born in motion, built for marketing — the agency’s three chapters",
     "موقع توب تك: Born in motion — مراحل الوكالة الثلاث"),
    ("site-3", 1200, 960, "Top Tech website: the services list", "موقع توب تك: قائمة الخدمات"),
    ("site-4", 1200, 960, "Top Tech website: client messages shown as chat bubbles", "موقع توب تك: آراء العملاء على شكل محادثات"),
    ("site-5", 1200, 960, "Top Tech website: numbers and the Let’s make noise call to action",
     "موقع توب تك: الأرقام والدعوة Let’s make noise"),
    ("site-6", 1200, 962, "Top Tech website: footer and the contact page brief form", "موقع توب تك: التذييل ونموذج طلب المشروع"),
    ("site-7", 1200, 961, "Top Tech contact page: budget, project details and contact info",
     "صفحة تواصل توب تك: الميزانية وتفاصيل المشروع وبيانات التواصل"),
]

EN = dict(
    lang="en", analytics=analytics(ROOT, "products/baytak.html"),
    title="Top Tech — Marketing Agency Website Redesign | BLD Labs",
    ld_name="Top Tech — marketing agency website redesign",
    desc="Case study: BLD Labs redesigned the website of Top Tech, a full-service marketing agency in Saudi Arabia and Egypt — a bold, motion-led site that tells the agency’s story and turns visitors into briefs.",
    tag="// CASE STUDY — AGENCY WEBSITE",
    cover_alt="Top Tech website on a laptop: We make brands grow",
    lead="A new website for Top Tech, a full-service marketing agency in Saudi Arabia and Egypt that was born from motion. The site tells how a motion graphics studio grew into an agency, lays out what it does, proves it with clients’ own words and numbers, and ends in a contact page that collects a full brief.",
    facts=[("CLIENT", "TOP TECH"), ("INDUSTRY", "MARKETING AGENCY"), ("SCOPE", "WEBSITE REDESIGN · UI/UX"),
           ("PLATFORMS", "WEB · DESKTOP + MOBILE"), ("MARKET", "SAUDI ARABIA · EGYPT"), ("YEAR", "2026")],
    challenge_h="A motion studio that grew into a full agency.",
    challenge_p="Top Tech started as a motion graphics studio in Saudi Arabia, moved into content, and today runs strategy, campaigns and performance marketing under one roof. The website had to tell that story and show the agency it is now, not the studio it was.",
    solution_h="A bold, motion-led site that ends in a brief.",
    solution_p="Dark, high-contrast pages with particle motion and big type: the agency’s evolution in three chapters, six services, client messages shown as chats, proof in numbers and a contact page that asks for everything needed to reply within 24 hours.",
    h_pains="// WHAT THE SITE HAD TO DO",
    pains=["Tell the story from motion studio to full-service agency",
           "Make six services clear at a glance",
           "Prove results with clients’ own words and real numbers",
           "Turn visitors into a complete brief, answered within 24 hours",
           "Work in English and Arabic for clients in Saudi Arabia and Egypt"],
    h_features="// THE SECTIONS",
    features=[("We make brands grow", "A hero with big type and a particle play button: a full-service marketing agency born from motion."),
              ("Born in motion", "The evolution in three chapters: the studio era, the content years and the agency now."),
              ("Everything your brand needs", "Six services: marketing strategy, social media marketing, content management, branding &amp; design, motion &amp; video and media buying."),
              ("Straight from our clients’ chats", "Client feedback in Arabic and English, shown as the chat messages it came from."),
              ("Signal strength", "80+ brands across KSA and the GCC, 200+ motion videos, 150+ social media designs and a 24-hour response on every brief."),
              ("Let’s build something", "A contact page that collects the brief: services needed, country, budget and project details.")],
    h_built="// WHAT WE DELIVERED",
    built=[("Website UX", "The page structure and flow, from the story to the services, proof and a call to action on every screen."),
           ("UI design", "A dark, high-contrast visual language with yellow accents, big type and particle motion."),
           ("Contact &amp; brief page", "A form that qualifies every lead with the services, country and budget before the first reply."),
           ("Responsive, bilingual layouts", "Desktop and mobile layouts with an English / Arabic switch.")],
    crumb_home="Home", crumb_work="Work",
)

AR = dict(
    lang="ar", analytics=analytics(ROOT, "ar/products/baytak.html"),
    title="توب تك — إعادة تصميم موقع وكالة تسويق | BLD Labs",
    ld_name="توب تك — إعادة تصميم موقع وكالة تسويق",
    desc="دراسة حالة: أعادت BLD Labs تصميم موقع توب تك، وكالة تسويق متكاملة في السعودية ومصر — موقع جريء قائم على الحركة يحكي قصة الوكالة ويحوّل الزوار إلى طلبات مشاريع.",
    tag="// دراسة حالة — موقع وكالة تسويق",
    cover_alt="موقع توب تك على لابتوب: We make brands grow",
    lead="موقع جديد لتوب تك، وكالة تسويق متكاملة في السعودية ومصر وُلدت من الموشن جرافيك. يحكي الموقع كيف تحوّل استوديو موشن إلى وكالة، ويعرض ما تقدّمه، ويثبت ذلك بكلام العملاء والأرقام، وينتهي بصفحة تواصل تجمع تفاصيل المشروع كاملة.",
    facts=[("العميل", "TOP TECH"), ("المجال", "وكالة تسويق"), ("النطاق", "إعادة تصميم موقع · UI/UX"),
           ("المنصات", "ويب · كمبيوتر + جوال"), ("السوق", "السعودية · مصر"), ("السنة", "2026")],
    challenge_h="استوديو موشن كبر وأصبح وكالة متكاملة.",
    challenge_p="بدأت توب تك استوديو موشن جرافيك في السعودية، ثم دخلت صناعة المحتوى، واليوم تدير الاستراتيجية والحملات والتسويق بالأداء تحت سقف واحد. كان على الموقع أن يحكي هذه القصة ويعرض الوكالة كما هي الآن، لا الاستوديو الذي كانت عليه.",
    solution_h="موقع جريء قائم على الحركة، ينتهي بطلب مشروع.",
    solution_p="صفحات داكنة عالية التباين بحركة جزيئات وخطوط كبيرة: مسيرة الوكالة في ثلاث مراحل، وست خدمات، وآراء العملاء على شكل محادثات، وأرقام تثبت، وصفحة تواصل تطلب كل ما يلزم للرد خلال 24 ساعة.",
    h_pains="// ما كان على الموقع أن يحققه",
    pains=["يحكي القصة من استوديو موشن إلى وكالة متكاملة",
           "يوضّح الخدمات الست من أول نظرة",
           "يثبت النتائج بكلام العملاء وأرقام حقيقية",
           "يحوّل الزائر إلى طلب مشروع كامل يُرد عليه خلال 24 ساعة",
           "يعمل بالعربية والإنجليزية لعملاء السعودية ومصر"],
    h_features="// أقسام الموقع",
    features=[("We make brands grow", "واجهة بخط كبير وزر تشغيل من الجزيئات: وكالة تسويق متكاملة وُلدت من الموشن."),
              ("Born in motion", "مسيرة الوكالة في ثلاث مراحل: عصر الاستوديو، وسنوات المحتوى، والوكالة الآن."),
              ("كل ما تحتاجه علامتك", "ست خدمات: استراتيجية التسويق، والتسويق عبر السوشيال ميديا، وإدارة المحتوى، والهوية والتصميم، والموشن والفيديو، وشراء الإعلانات."),
              ("مباشرة من محادثات العملاء", "آراء العملاء بالعربية والإنجليزية، معروضة كرسائل المحادثات التي جاءت منها."),
              ("قوة الإشارة", "أكثر من 80 علامة في السعودية والخليج، و200+ فيديو موشن، و150+ تصميم سوشيال ميديا، ورد خلال 24 ساعة على كل طلب."),
              ("لنبنِ شيئًا", "صفحة تواصل تجمع تفاصيل المشروع: الخدمات المطلوبة، والدولة، والميزانية، ووصف المشروع.")],
    h_built="// ما سلّمناه",
    built=[("تجربة استخدام الموقع", "بنية الصفحات وتسلسلها، من القصة إلى الخدمات والإثبات، مع دعوة لاتخاذ إجراء في كل شاشة."),
           ("تصميم الواجهات", "لغة بصرية داكنة عالية التباين بلمسات صفراء وخطوط كبيرة وحركة جزيئات."),
           ("صفحة التواصل وطلب المشروع", "نموذج يؤهّل كل عميل محتمل بالخدمات والدولة والميزانية قبل أول رد."),
           ("تصميم متجاوب بلغتين", "تصميمات للكمبيوتر والجوال مع التبديل بين الإنجليزية والعربية.")],
    crumb_home="الرئيسية", crumb_work="أعمالنا",
)


def middle(L):
    ar = L["lang"] == "ar"
    shots = [(f, w, h, a_ar if ar else a_en) for f, w, h, a_en, a_ar in SHOTS]
    return block("// الموقع" if ar else "// THE WEBSITE", stack("top-tech", shots, big=1200))


write(ROOT, P, [(EN, middle(EN)), (AR, middle(AR))])
