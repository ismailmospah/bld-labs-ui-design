"""Car Max case study: /work/car-max and /ar/work/car-max.
Text is taken from the CarMax Description / Challenge / Solution / Results boards on Behance."""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from case_lib import analytics, stack, block, write

ROOT = sys.argv[1] if len(sys.argv) > 1 else os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # repo root
P = dict(slug="car-max", name="Car Max", date="2026-02",
         behance="https://www.behance.net/gallery/243540189/Car-Max-Product-(-UI-UX-Design-)")
BOARDS = [(2, 1398, "CarMax: description", "كار ماكس: الوصف"),
          (3, 2341, "CarMax: search results and the challenge", "كار ماكس: نتائج البحث والتحدي"),
          (4, 1807, "CarMax: home with brands and all cars, and the solution", "كار ماكس: الرئيسية بالماركات وكل السيارات، والحل"),
          (5, 1717, "CarMax: my rents and the results", "كار ماكس: إيجاراتي والنتائج"),
          (6, 1297, "CarMax: no results and the pick-up and delivery address on a map", "كار ماكس: لا نتائج، وعنوان الاستلام والتوصيل على الخريطة"),
          (7, 1159, "CarMax: all brands and a brand’s cars", "كار ماكس: كل الماركات وسيارات ماركة واحدة"),
          (8, 1127, "CarMax: upload documents and sign in", "كار ماكس: رفع المستندات وتسجيل الدخول"),
          (9, 1228, "CarMax: filters and notifications", "كار ماكس: الفلاتر والإشعارات")]

EN = dict(lang="en", analytics=analytics(ROOT, "products/baytak.html"), crumb_home="Home", crumb_work="Work",
    title="Car Max — Car Rental App UI/UX | BLD Labs",
    ld_name="Car Max — car rental app UI/UX design",
    desc="Case study: UI/UX design for CarMax, a smart car rental app — clear car listings, transparent pricing and an easy booking flow that takes a rental from search to reservation in a few steps.",
    tag="// CASE STUDY — CAR RENTAL APP",
    cover_alt="CarMax car rental app: car details with specifications and rental packages",
    lead="CarMax is a smart car rental platform designed to make renting a car simple, fast and reliable. The app lets users browse a wide range of vehicles, compare options based on their needs, view clear pricing and book a car in just a few steps.",
    facts=[("CLIENT", "CARMAX"), ("INDUSTRY", "CAR RENTAL"), ("SCOPE", "UI/UX DESIGN"),
           ("PLATFORMS", "iOS · ANDROID"), ("LANGUAGE", "ENGLISH"), ("YEAR", "2026")],
    challenge_h="Renting a car meant guesswork and too many steps.",
    challenge_p="Customers face difficulties when renting a car due to limited availability visibility, unclear pricing, complex booking steps and a lack of trust in the rental process.",
    solution_h="Clear listings, transparent pricing, an easy booking flow.",
    solution_p="CarMax offers a smart and seamless car rental experience with clear car listings, transparent pricing and an easy booking flow. Users can browse available cars, compare options, choose the rental duration and complete their reservation in just a few simple steps.",
    h_pains="// RESULTS",
    pains=["A faster, smoother booking experience", "More user trust through transparent pricing",
           "Less booking friction and fewer drop-offs", "Higher customer satisfaction and repeat rentals"],
    h_features="// WHAT WE DESIGNED",
    features=[("Brands &amp; all cars", "Browse by brand or see every available car, each with its price per day."),
              ("Search &amp; filters", "Filter by type, price range, brand and delivery — with a clear empty state when nothing matches."),
              ("Car details", "Colour, fuel, gearbox, engine, seats and doors at a glance, with rental packages or a number of days."),
              ("Pick-up &amp; delivery", "Choose where to collect the car or have it delivered, on a map."),
              ("Documents", "Upload the driving licence and passport once, before the first rental."),
              ("My rents &amp; notifications", "Every rental in one place — available, reserved or finished — with the days left or the start date, and a notification when a request is accepted.")],
    h_built="// WHAT WE DELIVERED",
    built=[("UX design", "The rental journey from search to reservation, built to remove friction and build trust."),
           ("UI design", "The full app interface: sign-in, home, brands, search, filters, car details, address, documents, my rents and notifications.")])

AR = dict(lang="ar", analytics=analytics(ROOT, "ar/products/baytak.html"), crumb_home="الرئيسية", crumb_work="أعمالنا",
    title="كار ماكس — تصميم تطبيق تأجير سيارات | BLD Labs",
    ld_name="كار ماكس — تصميم واجهات وتجربة تطبيق تأجير سيارات",
    desc="دراسة حالة: تصميم تطبيق كار ماكس الذكي لتأجير السيارات — قوائم سيارات واضحة وأسعار شفافة ومسار حجز سهل يأخذ الإيجار من البحث إلى الحجز في خطوات قليلة.",
    tag="// دراسة حالة — تطبيق تأجير سيارات",
    cover_alt="تطبيق كار ماكس لتأجير السيارات: تفاصيل السيارة ومواصفاتها وباقات الإيجار",
    lead="كار ماكس منصة ذكية لتأجير السيارات تجعل استئجار سيارة بسيطًا وسريعًا وموثوقًا. يتيح التطبيق تصفّح تشكيلة واسعة من السيارات، ومقارنة الخيارات حسب الاحتياج، ورؤية الأسعار بوضوح، وحجز السيارة في خطوات قليلة.",
    facts=[("العميل", "CARMAX"), ("المجال", "تأجير سيارات"), ("النطاق", "تصميم UI/UX"),
           ("المنصات", "iOS · أندرويد"), ("اللغة", "الإنجليزية"), ("السنة", "2026")],
    challenge_h="استئجار سيارة كان تخمينًا وخطوات كثيرة.",
    challenge_p="يواجه العملاء صعوبات عند استئجار سيارة بسبب ضعف وضوح السيارات المتاحة، وعدم وضوح الأسعار، وتعقيد خطوات الحجز، وضعف الثقة في عملية الإيجار.",
    solution_h="قوائم واضحة وأسعار شفافة ومسار حجز سهل.",
    solution_p="يقدّم كار ماكس تجربة تأجير ذكية وسلسة بقوائم سيارات واضحة وأسعار شفافة ومسار حجز سهل. يتصفّح المستخدم السيارات المتاحة، ويقارن الخيارات، ويختار مدة الإيجار، ويُتمّ الحجز في خطوات بسيطة.",
    h_pains="// النتائج",
    pains=["تجربة حجز أسرع وأسلس", "ثقة أكبر من المستخدمين بفضل وضوح الأسعار",
           "عوائق أقل في الحجز وانسحاب أقل", "رضا أعلى للعملاء وتكرار للإيجار"],
    h_features="// ما الذي صمّمناه",
    features=[("الماركات وكل السيارات", "تصفّح حسب الماركة أو شاهد كل السيارات المتاحة، ولكلٍّ منها سعرها في اليوم."),
              ("البحث والفلاتر", "فلترة حسب النوع ونطاق السعر والماركة والتوصيل — مع شاشة واضحة حين لا توجد نتائج."),
              ("تفاصيل السيارة", "اللون والوقود وناقل الحركة والمحرك والمقاعد والأبواب بنظرة، مع باقات الإيجار أو عدد الأيام."),
              ("الاستلام والتوصيل", "اختر مكان استلام السيارة أو توصيلها على الخريطة."),
              ("المستندات", "ارفع رخصة القيادة وجواز السفر مرة واحدة قبل أول إيجار."),
              ("إيجاراتي والإشعارات", "كل إيجاراتك في مكان واحد — متاحة أو محجوزة أو منتهية — مع الأيام المتبقية أو تاريخ البدء، وإشعار عند قبول الطلب.")],
    h_built="// ما سلّمناه",
    built=[("تصميم تجربة المستخدم", "رحلة الإيجار من البحث حتى الحجز، مبنية لإزالة العوائق وبناء الثقة."),
           ("تصميم الواجهات", "واجهة التطبيق كاملة: الدخول والرئيسية والماركات والبحث والفلاتر وتفاصيل السيارة والعنوان والمستندات وإيجاراتي والإشعارات.")])


def middle(L):
    ar = L["lang"] == "ar"
    shots = [(f"board-{n:02d}", 1400, h, a_ar if ar else a_en) for n, h, a_en, a_ar in BOARDS]
    return block("// دراسة الحالة" if ar else "// THE CASE STUDY", stack("car-max", shots))


write(ROOT, P, [(EN, middle(EN)), (AR, middle(AR))])
