"""Asees-X case study: /work/asees-x and /ar/work/asees-x."""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from case_lib import SITE, analytics, fig, stack, block, write

ROOT = sys.argv[1] if len(sys.argv) > 1 else os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # repo root
P = dict(slug="asees-x", name="Asees-X", date="2026-10",
         behance="https://www.behance.net/gallery/257317093/Asees-X-Project-UI-UX-design-(-App-website-)")


def swatches(items):
    out = []
    for name, hexes, use, style in items:
        out.append(f'<li><i style="{style}"></i><b>{name}</b><code>{hexes}</code><span>{use}</span></li>')
    return '<ul class="case__swatches">' + "".join(out) + "</ul>"


def palette(L):
    core = [
        (L["green"], "#0CBF62", L["u_green"], "background:#0CBF62"),
        (L["lime"], "#ECFF8E", L["u_lime"], "background:#ECFF8E"),
        (L["ink"], "#0D0D0D", L["u_ink"], "background:#0D0D0D"),
        (L["cream"], "#FCF8ED", L["u_cream"], "background:#FCF8ED"),
        (L["lavender"], "#BFAEF8", L["u_lavender"], "background:#BFAEF8"),
        (L["pink"], "#F8C9FB", L["u_pink"], "background:#F8C9FB"),
        (L["sky"], "#8EEFFE", L["u_sky"], "background:#8EEFFE"),
        (L["mint"], "#BDFCDC", L["u_mint"], "background:#BDFCDC"),
    ]
    status = [
        (L["present"], "#30A96A / #EDFFF9", L["u_present"], "background:#EDFFF9;border:3px solid #30A96A"),
        (L["late"], "#E08C1A / #FFF6E7", L["u_late"], "background:#FFF6E7;border:3px solid #E08C1A"),
        (L["absent"], "#D9334D / #FFEAF1", L["u_absent"], "background:#FFEAF1;border:3px solid #D9334D"),
        (L["clockout"], "#CE080B", L["u_clockout"], "background:#CE080B"),
    ]
    return (f'<p class="case__sub">{L["sub_colors"]}</p>' + swatches(core) +
            f'<p class="case__sub">{L["sub_status"]}</p>' + swatches(status))


BEHANCE = "https://www.behance.net/gallery/257317093/Asees-X-Project-UI-UX-design-(-App-website-)"

EN = dict(
    lang="en", url=f"{SITE}/work/asees-x", home="index.html", home_abs=f"{SITE}/",
    contact="contact.html", behance=BEHANCE, analytics=analytics(ROOT, "products/baytak.html"),
    title="Asees-X — Arabic-first HR App &amp; Landing Page | BLD Labs",
    ld_name="Asees-X — HR app and landing page UI/UX",
    desc="Case study: BLD Labs designed Asees-X, an Arabic-first HR app for Saudi companies — attendance, leave, payroll and documents in one app — plus its design system and landing page.",
    nav=[("index.html#work", "WORK"), ("/products", "PRODUCTS"), ("services.html", "SERVICES"),
         ("learning.html", "LEARNING"), ("blogs.html", "BLOGS"), ("contact.html", "CONTACT")],
    lang_switch='<a href="/ar/work/asees-x" class="nav__lang" hreflang="ar" lang="ar" data-hover>عربي</a>',
    cta_nav="START A PROJECT", crumb_home="Home", crumb_work="Work",
    tag="// CASE STUDY — HR TECH · SAAS",
    cover_alt="Asees-X HR app on a phone and its landing page on a laptop",
    lead="An Arabic-first HR app that puts attendance, leave and payroll in every employee’s pocket. Asees-X helps companies in Saudi Arabia run HR without the paperwork: employees clock in and out, request leave and check their payslip from one simple app, while HR gets a clear, live view of the whole team.",
    facts=[("CLIENT", "ASEES-X"), ("INDUSTRY", "HR TECH · SAAS"), ("SCOPE", "UI/UX · APP · LANDING PAGE"),
           ("PLATFORMS", "iOS · ANDROID · WEB"), ("MARKET", "SAUDI ARABIA · ARABIC RTL"), ("YEAR", "2026")],
    cta_similar="BUILD SOMETHING LIKE THIS", cta_behance="VIEW ON BEHANCE",
    h_brief="// THE BRIEF", l_challenge="THE CHALLENGE", l_solution="THE SOLUTION",
    challenge_h="HR still runs on paper, spreadsheets and chat groups.",
    challenge_p="Attendance lives in spreadsheets, leave requests get lost in WhatsApp, and employees never know their remaining balance or why their salary changed. HR spends the day answering the same questions.",
    solution_h="One clear app for the employee, one live view for HR.",
    solution_p="A live work-hours timer with one-tap clock-in and clock-out, a visual leave balance, monthly attendance at a glance and a transparent payslip breakdown. Arabic and RTL-first, backed by a landing page that sells the product to companies.",
    h_pains="// WHAT WE FIXED",
    pains=["Attendance tracked by hand in spreadsheets", "Leave requests lost in WhatsApp threads",
           "Employees unsure of their leave balance or why their pay changed", "HR answering the same questions all day"],
    h_features="// KEY FEATURES",
    features=[("Attendance · الحضور", "A live work-hours timer, one-tap clock-in and clock-out, and a monthly summary of present, late and absent days."),
              ("Leave · الإجازات", "Remaining balance at a glance, leave history by type, and every request tracked from submission to approval."),
              ("Payroll · الرواتب", "Net salary with a full breakdown of basic pay, allowances and deductions, plus past payslips to download."),
              ("Profile &amp; Docs · ملفك", "Personal and job details in one place, with employment documents like the contract ready to download.")],
    h_app="// THE SCREENS", alt_app="Six Asees-X app screens: profile, leave, home, attendance, payroll and splash",
    cap_app="HOME · ATTENDANCE · LEAVE · PAYROLL · PROFILE · SPLASH — ARABIC, RIGHT-TO-LEFT",
    h_ds="// DESIGN SYSTEM", sub_colors="COLOURS — CORE &amp; ACCENTS", sub_status="STATUS",
    green="Primary Green", lime="Lime", ink="Ink", cream="Cream", lavender="Lavender", pink="Pink", sky="Sky", mint="Mint",
    u_green="Main actions, active states, charts", u_lime="Highlights, primary CTA on landing", u_ink="Text, borders, active tab",
    u_cream="Landing page background", u_lavender="Leave tile, pricing block", u_pink="Profile tile, tags",
    u_sky="Payroll tile, final CTA", u_mint="Soft success surfaces",
    present="Present", late="Late", absent="Absent", clockout="Clock-out Red",
    u_present="On-time attendance", u_late="Late arrival", u_absent="Absence, deductions", u_clockout="Clock-out button",
    sub_type="TYPOGRAPHY", type_display="DISPLAY · LANDING HEADLINES", type_ui="UI · APP SCREENS &amp; BODY",
    sub_components="COMPONENTS", alt_components="Asees-X components: work-hours card, monthly attendance, quick actions and tab bar",
    cap_components="WORK-HOURS CARD · MONTHLY ATTENDANCE · QUICK ACTIONS · TAB BAR — RADII 8 / 12 / 16 / FULL",
    h_landing="// LANDING PAGE",
    alt_l1="Asees-X landing page hero: “Manage your employees, now easier”", cap_l1="HERO — THE PROMISE, A LIVE APP PREVIEW AND PROOF IN NUMBERS",
    alt_l2="Asees-X landing page sections: features, three steps, pricing and testimonials", cap_l2="FEATURES · 3 STEPS TO START · SIMPLE PRICING · WHAT CUSTOMERS SAY",
    alt_l3="Asees-X landing page FAQ, final call to action and footer", cap_l3="FAQ · FINAL CTA (14-DAY FREE TRIAL) · FOOTER",
    h_final="// FINAL LOOK", alt_final="Asees-X app and website shown on a phone and a desktop monitor", cap_final="THE APP AND THE WEBSITE, SIDE BY SIDE",
    h_built="// WHAT WE DELIVERED",
    built=[("Product &amp; UX", "The employee journey from clock-in to payslip, and the flows HR relies on, mapped before any screen was drawn."),
           ("Design system", "Colours, status states, Arabic typography, components and radii — so every screen stays consistent as the product grows."),
           ("Mobile app UI", "Home, attendance, leave, payroll, profile and splash screens for iOS and Android, built Arabic and RTL-first."),
           ("Landing page", "A marketing site that explains the product, shows pricing and turns HR managers into sign-ups.")],
    cta_band="WANT A PRODUCT LIKE THIS? LET’S TALK.", cta_big="START A PROJECT →",
    h_next="// MORE",
    next=[("/work/hom", "CASE STUDY — PROPERTY MANAGEMENT", "HOM →"), ("index.html#work", "SELECTED WORK", "All projects →"), ("/products", "BUILT &amp; RUN BY US", "Our products →")],
    copyright="© 2026 BLD LABS — ALL RIGHTS RESERVED",
)

AR = dict(
    lang="ar", url=f"{SITE}/ar/work/asees-x", home="ar", home_abs=f"{SITE}/ar",
    contact="/ar/contact.html", behance=BEHANCE, analytics=analytics(ROOT, "ar/products/baytak.html"),
    title="أسيس اكس — تطبيق موارد بشرية عربي وصفحة هبوط | BLD Labs",
    ld_name="أسيس اكس — تصميم تطبيق موارد بشرية وصفحة هبوط",
    desc="دراسة حالة: صمّمت BLD Labs تطبيق أسيس اكس للموارد البشرية للشركات في السعودية — الحضور والإجازات والرواتب والمستندات في تطبيق واحد — مع نظام التصميم وصفحة الهبوط.",
    nav=[("ar#work", "أعمالنا"), ("/ar/products", "منتجاتنا"), ("ar/services.html", "خدماتنا"),
         ("/ar/learning.html", "تعلّم"), ("/ar/blogs.html", "المقالات"), ("/ar/contact.html", "تواصل")],
    lang_switch='<a href="/work/asees-x" class="nav__lang" hreflang="en" lang="en" data-hover>EN</a>',
    cta_nav="ابدأ مشروعك", crumb_home="الرئيسية", crumb_work="أعمالنا",
    tag="// دراسة حالة — تقنية موارد بشرية · SaaS",
    cover_alt="تطبيق أسيس اكس على الجوال وصفحة الهبوط على اللابتوب",
    lead="تطبيق موارد بشرية عربي أولًا، يضع الحضور والإجازات والرواتب في جيب كل موظف. يساعد أسيس اكس الشركات في السعودية على إدارة الموارد البشرية بلا أوراق: يسجّل الموظف حضوره وانصرافه، ويطلب إجازته، ويطّلع على كشف راتبه من تطبيق واحد بسيط، بينما ترى إدارة الموارد البشرية الفريق كله لحظة بلحظة.",
    facts=[("العميل", "ASEES-X"), ("المجال", "موارد بشرية · SaaS"), ("النطاق", "UI/UX · تطبيق · صفحة هبوط"),
           ("المنصات", "iOS · أندرويد · ويب"), ("السوق", "السعودية · عربي RTL"), ("السنة", "2026")],
    cta_similar="ابنِ منتجًا مثل هذا", cta_behance="شاهده على Behance",
    h_brief="// الفكرة", l_challenge="التحدي", l_solution="الحل",
    challenge_h="الموارد البشرية ما زالت تُدار بالورق وجداول الإكسل ومجموعات الواتساب.",
    challenge_p="الحضور في جداول، وطلبات الإجازة تضيع في الواتساب، والموظف لا يعرف رصيده المتبقي ولا لماذا تغيّر راتبه. وفريق الموارد البشرية يقضي يومه في الإجابة عن الأسئلة نفسها.",
    solution_h="تطبيق واضح للموظف، ورؤية مباشرة للموارد البشرية.",
    solution_p="عدّاد لساعات العمل مع تسجيل حضور وانصراف بضغطة واحدة، ورصيد إجازات مرئي، وملخص شهري للحضور، وتفاصيل راتب شفافة. عربي ومن اليمين لليسار من الأساس، مع صفحة هبوط تبيع المنتج للشركات.",
    h_pains="// ما الذي عالجناه",
    pains=["الحضور يُسجَّل يدويًا في جداول الإكسل", "طلبات الإجازة تضيع في محادثات الواتساب",
           "الموظف لا يعرف رصيد إجازاته ولا سبب تغيّر راتبه", "فريق الموارد البشرية يجيب عن الأسئلة نفسها طوال اليوم"],
    h_features="// أهم المميزات",
    features=[("الحضور", "عدّاد مباشر لساعات العمل، وتسجيل حضور وانصراف بضغطة، وملخص شهري لأيام الحضور والتأخير والغياب."),
              ("الإجازات", "رصيدك المتبقي بنظرة، وسجل الإجازات حسب النوع، ومتابعة كل طلب من التقديم حتى الموافقة."),
              ("الرواتب", "صافي الراتب مع تفصيل كامل للأساسي والبدلات والخصومات، وكشوف الرواتب السابقة للتحميل."),
              ("ملفك", "بياناتك الشخصية والوظيفية في مكان واحد، ومستنداتك مثل عقد العمل جاهزة للتحميل.")],
    h_app="// الشاشات", alt_app="ست شاشات من تطبيق أسيس اكس: الملف الشخصي والإجازات والرئيسية والحضور والراتب وشاشة البداية",
    cap_app="الرئيسية · الحضور · الإجازات · الراتب · الملف الشخصي · شاشة البداية — عربي من اليمين لليسار",
    h_ds="// نظام التصميم", sub_colors="الألوان — الأساسية والمكمّلة", sub_status="ألوان الحالات",
    green="الأخضر الأساسي", lime="الليموني", ink="الحبر", cream="الكريمي", lavender="اللافندر", pink="الوردي", sky="السماوي", mint="النعناعي",
    u_green="الأزرار الرئيسية والحالات النشطة والرسوم", u_lime="الإبرازات وزر الدعوة في صفحة الهبوط", u_ink="النصوص والحدود والتبويب النشط",
    u_cream="خلفية صفحة الهبوط", u_lavender="بطاقة الإجازات وقسم الأسعار", u_pink="بطاقة الملف والوسوم",
    u_sky="بطاقة الراتب والدعوة الأخيرة", u_mint="أسطح النجاح الهادئة",
    present="حضور", late="تأخير", absent="غياب", clockout="أحمر الانصراف",
    u_present="حضور في الموعد", u_late="وصول متأخر", u_absent="الغياب والخصومات", u_clockout="زر الانصراف",
    sub_type="الخطوط", type_display="العناوين · صفحة الهبوط", type_ui="الواجهة · شاشات التطبيق والنصوص",
    sub_components="المكوّنات", alt_components="مكوّنات أسيس اكس: بطاقة ساعات العمل والحضور الشهري والإجراءات السريعة وشريط التبويب",
    cap_components="بطاقة ساعات العمل · الحضور الشهري · الإجراءات السريعة · شريط التبويب — زوايا 8 / 12 / 16 / كاملة",
    h_landing="// صفحة الهبوط",
    alt_l1="واجهة صفحة هبوط أسيس اكس: إدارة موظفيك بقت أسهل", cap_l1="الواجهة — الوعد، ومعاينة حيّة للتطبيق، وأرقام تثبت",
    alt_l2="أقسام صفحة هبوط أسيس اكس: المميزات والخطوات والأسعار وآراء العملاء", cap_l2="المميزات · 3 خطوات للبدء · أسعار واضحة · آراء العملاء",
    alt_l3="الأسئلة الشائعة والدعوة الأخيرة وتذييل صفحة هبوط أسيس اكس", cap_l3="الأسئلة الشائعة · الدعوة الأخيرة (تجربة 14 يومًا مجانًا) · التذييل",
    h_final="// الشكل النهائي", alt_final="تطبيق وموقع أسيس اكس على جوال وشاشة كمبيوتر", cap_final="التطبيق والموقع جنبًا إلى جنب",
    h_built="// ما سلّمناه",
    built=[("المنتج وتجربة الاستخدام", "رحلة الموظف من تسجيل الحضور حتى كشف الراتب، والمسارات التي تعتمد عليها الموارد البشرية، رسمناها قبل أي شاشة."),
           ("نظام التصميم", "الألوان وحالات الحضور والخطوط العربية والمكوّنات والزوايا، ليبقى كل شيء متّسقًا مع نمو المنتج."),
           ("واجهات التطبيق", "شاشات الرئيسية والحضور والإجازات والراتب والملف والبداية لـ iOS وأندرويد، عربية ومن اليمين لليسار."),
           ("صفحة الهبوط", "موقع تسويقي يشرح المنتج ويعرض الأسعار ويحوّل مديري الموارد البشرية إلى مشتركين.")],
    cta_band="تريد منتجًا مثل هذا؟ لنتحدث.", cta_big="ابدأ مشروعك ←",
    h_next="// المزيد",
    next=[("/ar/work/hom", "دراسة حالة — إدارة عقارات", "هوم ←"), ("ar#work", "أعمال مختارة", "كل المشاريع ←"), ("/ar/products", "منتجات نملكها ونديرها", "منتجاتنا ←")],
    copyright="© 2026 BLD LABS — جميع الحقوق محفوظة",
)



def middle(L):
    ds = (palette(L) + f'\n    <p class="case__sub">{L["sub_type"]}</p>\n    <div class="case__type"><div><span class="case__label">{L["type_display"]}</span><b>Cairo</b><span>Black · Bold</span></div><div><span class="case__label">{L["type_ui"]}</span><b>IBM Plex Sans Arabic</b><span>SemiBold · Medium · Regular</span></div></div>\n    <p class="case__sub">{L["sub_components"]}</p>\n    '
          + fig("asees-x", "components", 1200, 550, L["alt_components"], L["cap_components"], widths=(800, 1200)))
    screens = stack("asees-x", [("app-ui", 1400, 2043, L["alt_app"]), ("landing-hero", 1400, 1055, L["alt_l1"]),
                                ("landing-sections", 1400, 1898, L["alt_l2"]), ("landing-faq", 1400, 2184, L["alt_l3"]),
                                ("mockups", 1400, 2630, L["alt_final"])])
    return block(L["h_ds"], ds) + "\n" + block(L["h_app"], screens)


write(ROOT, P, [(EN, middle(EN)), (AR, middle(AR))])
