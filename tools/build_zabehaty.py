"""Zabehaty case study: /work/zabehaty and /ar/work/zabehaty.
Text is taken from the Zabehaty UX case study boards on Behance."""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from case_lib import analytics, stack, block, items, write

ROOT = sys.argv[1] if len(sys.argv) > 1 else os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # repo root
P = dict(slug="zabehaty", name="Zabehaty", date="2026-07",
         behance="https://www.behance.net/gallery/252513857/Zabehaty-App-Case-Study")

H = {2: 650, 3: 1667, 4: 942, 5: 2250, 6: 708, 7: 4533, 8: 3085, 9: 869, 10: 1218, 11: 869,
     12: 3329, 13: 8564, 14: 5274, 15: 1815, 16: 2677, 17: 2502, 18: 2092, 19: 3016}
ALT = {  # board: (EN, AR)
    2: ("About Zabehaty: an e-commerce app with 500K+ users", "عن ذبيحتي: تطبيق تجارة إلكترونية بأكثر من 500 ألف مستخدم"),
    3: ("Research objectives, my role and the business requirement", "أهداف البحث والدور ومتطلبات العمل"),
    4: ("The process: convincing the company, research, analysis, problems, solutions", "مراحل العمل: إقناع الشركة، البحث، التحليل، المشكلات، الحلول"),
    5: ("Why UX research before redesign, and how the team was convinced", "لماذا البحث قبل إعادة التصميم، وكيف اقتنع الفريق"),
    6: ("Primary research objectives", "أهداف البحث الأساسي"),
    7: ("Usability testing plan: 5 users, gift cards flow and checkout flow, with sessions", "خطة اختبار قابلية الاستخدام: 5 مستخدمين، مسار بطاقات الهدايا ومسار الدفع، مع الجلسات"),
    8: ("Affinity diagram for Send Gifts and Checkout", "مخطط التقارب لإرسال الهدايا وإتمام الشراء"),
    9: ("Affinity diagram for the home page", "مخطط التقارب للصفحة الرئيسية"),
    10: ("User journey map: gift wrapping, checkout and home page", "خريطة رحلة المستخدم: تغليف الهدايا وإتمام الشراء والصفحة الرئيسية"),
    11: ("Interview insights", "خلاصات المقابلات"),
    12: ("Secondary research: customer service insights", "البحث الثانوي: خلاصات خدمة العملاء"),
    13: ("Problems and solutions: the Send Gifts feature", "المشكلات والحلول: ميزة إرسال الهدايا"),
    14: ("Problems and solutions: the checkout flow", "المشكلات والحلول: مسار إتمام الشراء"),
    15: ("Old and new UI: home and gifts", "الواجهة القديمة والجديدة: الرئيسية والهدايا"),
    16: ("Send Gifts screens", "شاشات إرسال الهدايا"),
    17: ("All UI screens: gift wrapping", "كل شاشات الواجهة: تغليف الهدايا"),
    18: ("Checkout screens: cart, address, payment and order tracking", "شاشات إتمام الشراء: السلة والعنوان والدفع وتتبع الطلب"),
    19: ("App screens: onboarding, sign-up, OTP, address and product", "شاشات التطبيق: التعريف والتسجيل ورمز التحقق والعنوان والمنتج"),
}

EN = dict(
    lang="en", analytics=analytics(ROOT, "products/baytak.html"),
    title="Zabehaty — UX Research &amp; App Redesign Case Study | BLD Labs",
    ld_name="Zabehaty — UX research and app redesign",
    desc="Case study: UX research and redesign for Zabehaty, a fresh-meat e-commerce app with 500K+ users — why nobody used its gifts feature, why checkout felt tiring, and the redesign that fixed both.",
    tag="// CASE STUDY — UX RESEARCH + REDESIGN",
    cover_alt="Zabehaty app redesign: 500K+ users",
    lead="Zabehaty is an e-commerce app with 500K+ users that sells fresh meat and more, with options for preparation and delivery. One of its key features lets you buy a product and send it as a gift, with a personal message and packaging. The brief was a redesign; we started with UX research to find out why checkout felt tiring and why almost nobody used the gifts feature.",
    facts=[("CLIENT", "ZABEHATY"), ("INDUSTRY", "E-COMMERCE · FRESH MEAT"), ("SCOPE", "UX RESEARCH · APP REDESIGN"),
           ("PLATFORMS", "iOS · ANDROID"), ("USERS", "500K+"), ("YEAR", "2026")],
    challenge_h="A gifts feature nobody used, and a checkout people found tiring.",
    challenge_p="The business wanted a redesign. We argued for research first: redesigning without a diagnosis risks optimising the wrong problems. Framed as a way to cut rework and drive revenue rather than a delay, the research phase got the team’s buy-in.",
    solution_h="Research first, then a redesign aimed at the real problems.",
    solution_p="Usability testing, interviews, an affinity diagram, a journey map and customer-support data pointed to two root causes: most users didn’t know Gift Cards existed, and checkout had too many steps and unclear information. The redesign makes gifting visible and cuts checkout to two steps for returning users.",
    h_pains="// WHAT THE RESEARCH FOUND",
    pains=["Most users didn’t know the Gift Cards feature existed — it was built, just hard to find",
           "Gift cards and physical products were mixed together in the cart",
           "Users couldn’t tell which saved address an order was going to",
           "Card details re-entered on every purchase; Apple Pay and “add a new card” hard to spot",
           "Too many steps and too much information to complete a purchase",
           "Support tickets about changing the address, signing up and OTP, and picking a delivery time"],
    h_features="// WHAT WE CHANGED",
    features=[("Gift onboarding", "A dedicated onboarding screen introduces Gift Cards to new users."),
              ("Home banner", "A prominent “Send gifts” banner on the home screen, so existing users see the feature without searching."),
              ("Gifts in their own tab", "Gift cards separated from physical products in the cart, so each item is easy to identify."),
              ("A simpler gift flow", "Choose the gift, the card and the message, then the delivery details — or let the recipient add their own address — in fewer steps."),
              ("Clear delivery address", "The selected address sits at the top of the cart, so orders stop going to the wrong place."),
              ("Better payment methods", "Apple Pay first, saved cards, a visible “add a new card”, plus Tabby, Tamara and cash on delivery."),
              ("One-tap checkout", "Saved address and card for returning users: the order takes two steps and one confirmation tap.")],
    h_research="// THE RESEARCH",
    research=[("Usability testing", "Five current users in the UAE, over 30, who had bought before but never used Send Gifts — tested on the gift cards and checkout flows for task success, time, errors, misclicks and satisfaction."),
              ("Interviews", "Users talked about their experience with the app — what they order most, what they like and where they got stuck, from sign-up and OTP to delivery addresses and notifications."),
              ("Affinity diagram &amp; journey map", "Insights grouped for gifts, checkout and the home page, then mapped into a journey with what users did, thought and felt at each stage."),
              ("Customer support data", "Existing tickets reviewed for recurring complaints: changing the delivery address, signing up, choosing an address and time, and completing a purchase.")],
    h_screens="// THE CASE STUDY",
    h_built="// WHAT WE DELIVERED",
    built=[("UX research", "Research plan, usability sessions, interviews, support-data review and synthesis into problems and design goals."),
           ("Gifts redesign", "Onboarding, a home banner, a gifts tab in the cart and a shorter gift flow with cards, messages and delivery options."),
           ("Checkout redesign", "Clear address selection, improved payment methods and a one-tap checkout for returning users."),
           ("App UI", "A refreshed home page and 20+ screens: onboarding, sign-up and OTP, address and map, product and order tracking.")],
    crumb_home="Home", crumb_work="Work",
)

AR = dict(
    lang="ar", analytics=analytics(ROOT, "ar/products/baytak.html"),
    title="ذبيحتي — دراسة حالة بحث تجربة مستخدم وإعادة تصميم | BLD Labs",
    ld_name="ذبيحتي — بحث تجربة مستخدم وإعادة تصميم التطبيق",
    desc="دراسة حالة: بحث تجربة مستخدم وإعادة تصميم لتطبيق ذبيحتي للحوم الطازجة بأكثر من 500 ألف مستخدم — لماذا لم يستخدم أحد ميزة الهدايا، ولماذا كان الدفع مرهقًا، والتصميم الذي عالج الاثنين.",
    tag="// دراسة حالة — بحث تجربة مستخدم + إعادة تصميم",
    cover_alt="إعادة تصميم تطبيق ذبيحتي: أكثر من 500 ألف مستخدم",
    lead="ذبيحتي تطبيق تجارة إلكترونية بأكثر من 500 ألف مستخدم، يبيع اللحوم الطازجة وغيرها مع خيارات للتجهيز والتوصيل. ومن أهم ميزاته أن تشتري منتجًا وترسله هدية مع رسالة شخصية وتغليف. كان المطلوب إعادة تصميم، فبدأنا ببحث تجربة المستخدم لنعرف لماذا كان الدفع مرهقًا، ولماذا لا يكاد أحد يستخدم ميزة الهدايا.",
    facts=[("العميل", "ZABEHATY"), ("المجال", "تجارة إلكترونية · لحوم طازجة"), ("النطاق", "بحث UX · إعادة تصميم التطبيق"),
           ("المنصات", "iOS · أندرويد"), ("المستخدمون", "+500 ألف"), ("السنة", "2026")],
    challenge_h="ميزة هدايا لا يستخدمها أحد، ودفع يراه الناس مرهقًا.",
    challenge_p="أرادت الشركة إعادة تصميم. اقترحنا البحث أولًا: فإعادة التصميم دون تشخيص قد تعالج المشكلات الخطأ. وحين قدّمناه كطريقة لتقليل إعادة العمل وزيادة الإيرادات لا كتأخير، اقتنع الفريق بمرحلة البحث.",
    solution_h="البحث أولًا، ثم إعادة تصميم تستهدف المشكلات الحقيقية.",
    solution_p="اختبارات قابلية الاستخدام والمقابلات ومخطط التقارب وخريطة الرحلة وبيانات خدمة العملاء أشارت إلى سببين: أغلب المستخدمين لم يعرفوا بوجود بطاقات الهدايا، والدفع فيه خطوات كثيرة ومعلومات غير واضحة. جعل التصميم الجديد الهدايا ظاهرة، واختصر الدفع إلى خطوتين للعملاء العائدين.",
    h_pains="// ما كشفه البحث",
    pains=["أغلب المستخدمين لم يعرفوا بوجود بطاقات الهدايا — الميزة موجودة لكن يصعب الوصول لها",
           "بطاقات الهدايا والمنتجات الفعلية مختلطة معًا في السلة",
           "المستخدم لا يعرف إلى أي عنوان محفوظ سيذهب الطلب",
           "إدخال بيانات البطاقة مع كل شراء، وApple Pay و«إضافة بطاقة جديدة» غير واضحين",
           "خطوات كثيرة ومعلومات زائدة لإتمام الشراء",
           "شكاوى لخدمة العملاء عن تغيير العنوان والتسجيل ورمز التحقق واختيار وقت التوصيل"],
    h_features="// ما الذي غيّرناه",
    features=[("تعريف بالهدايا", "شاشة تعريف مخصّصة تقدّم بطاقات الهدايا للمستخدمين الجدد."),
              ("بانر في الرئيسية", "بانر واضح «أرسل هدية» في الصفحة الرئيسية، ليرى المستخدمون الحاليون الميزة دون بحث."),
              ("تبويب خاص بالهدايا", "فصل بطاقات الهدايا عن المنتجات الفعلية في السلة ليسهل تمييز كل عنصر."),
              ("مسار هدايا أبسط", "اختر الهدية والبطاقة والرسالة ثم بيانات التوصيل — أو اترك المستلم يضيف عنوانه — بخطوات أقل."),
              ("عنوان توصيل واضح", "العنوان المختار في أعلى السلة، فلا تذهب الطلبات إلى المكان الخطأ."),
              ("طرق دفع أفضل", "Apple Pay أولًا، وبطاقات محفوظة، و«إضافة بطاقة جديدة» واضحة، مع تابي وتمارا والدفع عند الاستلام."),
              ("دفع بضغطة واحدة", "عنوان وبطاقة محفوظان للعملاء العائدين: الطلب في خطوتين وضغطة تأكيد واحدة.")],
    h_research="// البحث",
    research=[("اختبار قابلية الاستخدام", "خمسة مستخدمين حاليين في الإمارات فوق الثلاثين، اشتروا من قبل ولم يستخدموا إرسال الهدايا — اختُبروا على مساري بطاقات الهدايا والدفع لقياس النجاح والوقت والأخطاء والنقرات الخاطئة والرضا."),
              ("المقابلات", "تحدّث المستخدمون عن تجربتهم مع التطبيق — ما يطلبونه أكثر وما يعجبهم وأين تعثّروا، من التسجيل ورمز التحقق إلى عناوين التوصيل والإشعارات."),
              ("مخطط التقارب وخريطة الرحلة", "تجميع الملاحظات للهدايا والدفع والصفحة الرئيسية، ثم رسمها في رحلة توضّح ما فعله المستخدم وفكّر فيه وشعر به في كل مرحلة."),
              ("بيانات خدمة العملاء", "مراجعة الشكاوى الحالية بحثًا عن المتكرّر: تغيير عنوان التوصيل، والتسجيل، واختيار العنوان والوقت، وإتمام الشراء.")],
    h_screens="// دراسة الحالة",
    h_built="// ما سلّمناه",
    built=[("بحث تجربة المستخدم", "خطة البحث وجلسات الاختبار والمقابلات ومراجعة بيانات الدعم وتحويلها إلى مشكلات وأهداف تصميم."),
           ("إعادة تصميم الهدايا", "شاشة تعريف وبانر في الرئيسية وتبويب للهدايا في السلة ومسار أقصر مع البطاقات والرسائل وخيارات التوصيل."),
           ("إعادة تصميم الدفع", "اختيار واضح للعنوان وطرق دفع أفضل ودفع بضغطة واحدة للعملاء العائدين."),
           ("واجهات التطبيق", "صفحة رئيسية جديدة وأكثر من 20 شاشة: التعريف والتسجيل ورمز التحقق والعنوان والخريطة والمنتج وتتبع الطلب.")],
    crumb_home="الرئيسية", crumb_work="أعمالنا",
)


def middle(L):
    ar = L["lang"] == "ar"
    shots = [(f"board-{k:02d}", 1400, h, ALT[k][1] if ar else ALT[k][0]) for k, h in H.items()]
    return (block(L["h_research"], f'<div class="svc__items">{items(L["research"])}</div>') + "\n"
            + block(L["h_screens"], stack("zabehaty", shots)))


write(ROOT, P, [(EN, middle(EN)), (AR, middle(AR))])
