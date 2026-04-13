export type ResourceType = "video" | "article";

export type RoadmapLevel = "beginner" | "intermediate";

export interface Resource {
  type: ResourceType;
  label: string;
  url: string;
}

export interface RoadmapWeek {
  week: string;
  title: string;
  level: RoadmapLevel;
  details: string[];
  resources: Resource[];
  task: string;
}


export const roadmapData: RoadmapWeek[] = [
  // ── BEGINNER ──────────────────────────────────────────────
  {
    week: "01",
    title: "UX vs UI: What's the Difference?",
    level: "beginner",
    details: [
      "To begin your journey as a UI/UX designer, you need to grasp the fundamental differences and roles within the field.",
      "UI Design — Focus on the visual aspects of digital interfaces. Elements: Visuals, colours, typography.",
      "UX Design — Focus on the overall user experience and interaction. Elements: User research, wireframes, user journeys."
    ],
    resources: [
      { type: "article", label: "UX vs UI: What's the Difference?", url: "https://www.interaction-design.org/literature/article/ux-vs-ui-what-s-the-difference" },
      { type: "video",   label: "Intro Video (Arabic)", url: "https://youtu.be/Nje7GiGeKW0?si=_8fr2D2jzz6uvK8K" }
    ],
    task: "Write about the differences between UI and UX."
  },
  {
    week: "02",
    title: "UXD Fundamentals",
    level: "beginner",
    details: ["1:30 hour Only and you will get a certificate from mahara tech."],
    resources: [
      { type: "video", label: "Mahara Tech Course (Arabic)", url: "https://maharatech.gov.eg/course/view.php?id=1231" }
    ],
    task: "Get a certificate and Summarize what you learned."
  },
  {
    week: "03",
    title: "Principles of Design",
    level: "beginner",
    details: ["What is design? Basic design principles (balance, contrast, proportion, harmony)."],
    resources: [
      { type: "article", label: "Toptal: Design Principles", url: "https://www.toptal.com/designers/ui/principles-of-design" },
      { type: "article", label: "Paperform: Design Principles", url: "https://paperform.co/blog/principles-of-design/" },
      { type: "video",   label: "Principles Explained (Part 1)", url: "https://youtu.be/120NDS4WrAs?si=NUfL82DWOOzDkbAn" },
      { type: "video",   label: "Principles Explained (Part 2)", url: "https://youtu.be/9EPTM91TBDU?si=UEem4s7kvuhs1exE" }
    ],
    task: "Summarize what you learned."
  },
  {
    week: "04",
    title: "Figma & Wireframing",
    level: "beginner",
    details: [],
    resources: [
      { type: "article", label: "Wireframing Guide", url: "https://www.springboard.com/blog/design/how-to-create-a-wireframe/" },
      { type: "video",   label: "Figma Masterclass (Arabic)", url: "https://youtu.be/-zkYtn7cIew?si=HnBtErgZgKKyQUXb" },
      { type: "video",   label: "Figma Playlist (Arabic)", url: "https://www.youtube.com/watch?v=7K7pEPFepWA&list=PLjzhiGLyugKynpBi7v2AWMCJgTrRI6Ne-" }
    ],
    task: "Watch this video and apply behind him and create wireframe to this app → https://www.youtube.com/watch?v=7tC8b9pIqhY"
  },
  {
    week: "05",
    title: "UX Basics",
    level: "beginner",
    details: ["7 Factors of User Experience, What is UX process, good UX vs bad UX?"],
    resources: [
      { type: "article", label: "7 Factors of User Experience", url: "https://medium.com/ascentic-technology/7-factors-of-user-experience-by-peter-morville-cb2fdfb45bcb" },
      { type: "article", label: "What is the Design Process", url: "https://uxdesign.cc/what-is-the-design-process-and-why-every-designer-should-know-about-it-baab017eed82" },
      { type: "article", label: "Good vs Bad UX", url: "https://www.creativecorner.studio/blog/bad-ux-vs-good-ux" },
      { type: "video",   label: "What is UX Design?", url: "https://www.youtube.com/watch?v=SRec90j6lTY" },
      { type: "video",   label: "Good UX vs Bad UX Examples", url: "https://youtu.be/6chQ6JZpvTQ?si=VzdWvpgr1RIXmZMZ" }
    ],
    task: "Summarize what you learned. Analyze any website or app and identify the strengths and weaknesses in user experience."
  },
  {
    week: "06",
    title: "Basics User Interface (UI)",
    level: "beginner",
    details: [],
    resources: [
      { type: "article", label: "Maze: UI Principles", url: "https://maze.co/collections/ux-ui-design/ui-design-principles/" },
      { type: "article", label: "10 Principles in UI Design", url: "https://medium.com/@NALSengineering/10-principles-in-ui-design-enhancing-user-experience-through-practical-examples-9d519e91b515" },
      { type: "video",   label: "UI Design Tutorial", url: "https://youtu.be/uwNClNmekGU?si=98qlxy0Iw6PTy0wm" },
      { type: "video",   label: "UI Design Tips", url: "https://youtu.be/yNDgFK2Jj1E?si=12Lv_RHz9yAQ_H6-" }
    ],
    task: "Watch this video and apply behind him and create wireframe to this app → https://youtu.be/5ebUVh72wGc?si=rYeE3vmwEi919zF8"
  },
  {
    week: "07",
    title: "Prototyping",
    level: "beginner",
    details: [],
    resources: [
      { type: "video", label: "Figma Prototyping Tutorial", url: "https://youtu.be/UUsysuFmVrA?si=JFgel3qGZFQimTIm" },
      { type: "video", label: "Advanced Prototyping", url: "https://youtu.be/1hJjyL0o7vg?si=3hHrAz2rMKyFvDv-" }
    ],
    task: "Watch this video and apply behind him and create prototype to this app → https://youtu.be/eM1534Fng6g?si=aThhQ8mf_9n532M1"
  },
  {
    week: "08",
    title: "Project: Local Food Delivery App",
    level: "beginner",
    details: [
      "The task is for beginners to design a simple app that allows users to order food from local restaurants, with a user-friendly interface for browsing and ordering.",
      "Project Details: Study popular food delivery apps • Identify the strengths and weaknesses of existing apps • Sketch on paper • Wireframes • Final UI • Focus on UI principles • Focus on UX principles • Prototype",
      "App Features: Viewing menus from different restaurants • Selecting Meals and adding them to the cart • Multiple payment options (cash, card) • Tracking order status (preparing, on the way, delivered)"
    ],
    resources: [],
    task: "Present the final project, explaining each stage they went through. Showcase the final prototypes and how users responded to them."
  },

  // ── INTERMEDIATE ──────────────────────────────────────────
  {
    week: "09",
    title: "Design Thinking",
    level: "intermediate",
    details: [],
    resources: [
      { type: "article", label: "What is Design Thinking (IxDF)", url: "https://www.interaction-design.org/literature/article/what-is-design-thinking-and-why-is-it-so-popular" },
      { type: "article", label: "NNG: Design Thinking", url: "https://www.nngroup.com/articles/design-thinking/" },
      { type: "video",   label: "Design Thinking Explained", url: "https://www.youtube.com/watch?v=6lmvCqvmjfE" },
      { type: "video",   label: "Arabic Tutorial 1", url: "https://www.youtube.com/watch?v=p_IKACdmH10" },
      { type: "video",   label: "Arabic Tutorial 2", url: "https://www.youtube.com/watch?v=9dkGoWhgQBg&t=190s" },
      { type: "video",   label: "Arabic Tutorial 3", url: "https://www.youtube.com/watch?v=n8V5yV2VEtU" }
    ],
    task: "Write what steps we follow when thinking about solving a specific problem?"
  },
  {
    week: "10",
    title: "Colors & Typography",
    level: "intermediate",
    details: [],
    resources: [
      { type: "article", label: "Color Theory for Designers", url: "https://medium.com/@code_theorem/color-theory-for-designers-color-wheel-theory-what-each-color-means-9401af6ea981" },
      { type: "article", label: "Crash Course with Infographic", url: "https://uxdesign.cc/color-theory-for-designers-a-crash-course-with-infographic-41d8b4c45619" },
      { type: "video",   label: "Color Theory (Arabic 1)", url: "https://youtu.be/wHCauzqO3kk?si=hfOsbJS9CNcQ2x66" },
      { type: "video",   label: "Color Theory (Arabic 2)", url: "https://youtu.be/0xl67wDdOvg?si=A4F208gAkwz2kafh" },
      { type: "article", label: "Typography in UI", url: "https://xd.adobe.com/ideas/process/ui-design/typography-in-ui-design/" },
      { type: "video",   label: "Typography Basics", url: "https://www.youtube.com/watch?v=GCluIaNmOG0" },
      { type: "video",   label: "Arabic Typography 1", url: "https://youtu.be/tGdSVmtwFk0?si=faykymlJeXu3lv9y" },
      { type: "video",   label: "Arabic Typography 2", url: "https://youtu.be/9mXXkHZBJpE?si=Nb4MEaifln17Vaaw" }
    ],
    task: "Design 3 Onboarding Screens to clothes app, focus on colors and typography."
  },
  {
    week: "11",
    title: "Intro to UX Research",
    level: "intermediate",
    details: [],
    resources: [
      { type: "article", label: "Beginner's Guide to Design Research", url: "https://uxbooth.com/articles/complete-beginners-guide-to-design-research/" },
      { type: "article", label: "9 Rules of Design Research", url: "https://medium.com/mule-design/the-9-rules-of-design-research-1a273fdd1d3b" },
      { type: "video",   label: "UX Research Basics", url: "https://youtu.be/kQ_6faxhyIw?si=Az79h9_spnxEP5eS" },
      { type: "video",   label: "Arabic Tutorial", url: "https://www.youtube.com/watch?v=z3ruzLItPlM" }
    ],
    task: "What are the primary goals of your user experience research? What specific questions are you trying to answer?"
  },
  {
    week: "12",
    title: "Qualitative & Quantitative Research",
    level: "intermediate",
    details: [],
    resources: [
      { type: "article", label: "Qualitative Research (IxDF)", url: "https://www.interaction-design.org/literature/topics/qualitative-research" },
      { type: "video",   label: "Qualitative Research Methods", url: "https://www.youtube.com/watch?v=dyHMTaQJmYo" },
      { type: "video",   label: "Qualitative vs Quantitative", url: "https://www.youtube.com/watch?v=qvpitkHcIGk" },
      { type: "article", label: "Quantitative Research (IxDF)", url: "https://www.interaction-design.org/literature/topics/quantitative-research" },
      { type: "article", label: "NNG: Quantitative Methods", url: "https://www.nngroup.com/articles/quantitative-user-research-methods/" },
      { type: "video",   label: "Quantitative Research Methods", url: "https://www.youtube.com/watch?v=LmWPygSxMms" }
    ],
    task: "State the difference between Qualitative & Quantitative Research."
  },
  {
    week: "13",
    title: "Spacings & Iconography",
    level: "intermediate",
    details: [],
    resources: [
      { type: "article", label: "Space, Grids, and Layouts", url: "https://www.designsystems.com/space-grids-and-layouts/" },
      { type: "article", label: "8-Point Grid System", url: "https://medium.com/built-to-adapt/intro-to-the-8-point-grid-system-d2573cde8632" },
      { type: "video",   label: "Spacing Systems", url: "https://youtu.be/cf95Z7Ngg8k?si=wt9xdeg2EMi_OFb6" },
      { type: "video",   label: "Spacing (Arabic)", url: "https://youtu.be/xUfiMPTz2mI?si=DpD4uBq-ml96u5qg" },
      { type: "article", label: "Iconography Guide", url: "https://www.designsystems.com/iconography-guide/" },
      { type: "video",   label: "Typography Basics", url: "https://www.youtube.com/watch?v=GCluIaNmOG0" },
      { type: "video",   label: "Icon Design Tips", url: "https://youtu.be/ffUxT6pVI5Q?si=QvW2yPTiDlsjzP-g" }
    ],
    task: "Design Login and Sign Up Screens to Clothing app, Focus on spacing and icons."
  },
  {
    week: "14",
    title: "( Discover ) Interviews & Surveys",
    level: "intermediate",
    details: [],
    resources: [
      { type: "article", label: "User Interviews (NNG)", url: "https://www.nngroup.com/articles/user-interviews/" },
      { type: "article", label: "Exploratory Interviews", url: "https://medium.com/designstrat/exploratory-design-research-interview-dc51398c6354" },
      { type: "article", label: "Interview Guide (NNG)", url: "https://www.nngroup.com/articles/interview-guide/" },
      { type: "video",   label: "Conducting User Interviews", url: "https://youtu.be/5tVbFfGDQCk?si=QptXsjQpLgf3XLg9" },
      { type: "article", label: "Qualitative Surveys", url: "https://www.nngroup.com/articles/qualitative-surveys/?ref=uxtools-challenges" },
      { type: "article", label: "Survey Best Practices", url: "https://www.surveymonkey.com/learn/survey-best-practices/" },
      { type: "article", label: "UX Survey Guide", url: "https://uxplanet.org/this-is-all-you-need-to-know-to-conduct-a-ux-survey-50400af45920" },
      { type: "video",   label: "Survey Design Tips", url: "https://youtu.be/exyHMFVrZCg?si=-NkJkkqCOGV-UGwB" }
    ],
    task: "1- Choose 3 people and do a user interview with them about the problem you previously identified in Design Thinking Task?\n\n2- The designs you designed in the previous task, design them here but used website frame and make the web responsive."
  },
  {
    week: "15",
    title: "Components & Naming",
    level: "intermediate",
    details: [],
    resources: [
      { type: "article", label: "Design Systems Components", url: "https://www.designsystems.com/space-grids-and-layouts/" },
      { type: "video",   label: "Components (Arabic 1)", url: "https://youtu.be/BGNacvycbiI?si=-PUTts4EgpDmU34U" },
      { type: "video",   label: "Components (Arabic 2)", url: "https://youtu.be/MeNNPaxT3UM?si=BE_RrHttrm196YHv" },
      { type: "video",   label: "Components (Arabic 3)", url: "https://youtu.be/77UlksKEaeI?si=sv49J6TG_VzkCOiG" },
      { type: "video",   label: "Naming Components", url: "https://www.youtube.com/watch?v=w2LFfOtPsoc" }
    ],
    task: "1- Create variable button used by components ( with title and without, with icon and without icon, big and small fill and outline and so on ) Focus on naming to this components too.\n\n2- Design Home screen to clothing contains: search, ads bar, categories and products Cards.\n\nDesign product details screen.\n\nDesign cart screen."
  },
  {
    week: "16",
    title: "( Discover ) Competitive Analysis & SWOT Analysis",
    level: "intermediate",
    details: [],
    resources: [
      { type: "article", label: "Guide for Product Designers", url: "https://www.toptal.com/product-managers/product-consultant/product-designer-guide-to-competitive-analysis" },
      { type: "article", label: "Adobe XD Guide", url: "https://xd.adobe.com/ideas/process/user-research/guide-to-competitive-analysis-ux-design/" },
      { type: "article", label: "UX Competitive Analysis Tips", url: "https://uxplanet.org/top-things-to-know-about-ux-competitive-analysis-d91689fd8b36" },
      { type: "video",   label: "Conducting User Interviews", url: "https://youtu.be/5tVbFfGDQCk?si=QptXsjQpLgf3XLg9" },
      { type: "article", label: "SWOT Analysis Guide", url: "https://www.investopedia.com/terms/s/swot.asp" },
      { type: "video",   label: "SWOT Analysis Explained", url: "https://youtu.be/I_6AVRGLXGA?si=9OZrAoWssEWj7hO7" }
    ],
    task: "1- Do Competitive Analysis to 3 competitors in any field you choose and Swot Analysis.\n\n2- The designs you designed in the previous task, design them here but used website frame and make the web responsive."
  },
  {
    week: "17",
    title: "Read Chapter 1 & 2 from Practical UI book",
    level: "intermediate",
    details: [],
    resources: [
      { type: "article", label: "Download Practical UI PDF", url: "https://drive.google.com/file/d/1fRb1u3k7yLmch3PqwSp4SdUoqa-0He9I/view" }
    ],
    task: "1- Summarize Chapters 1 & 2 and tell us what you learned.\n\n2- Complete any screens not designed yet in clothing app and web like Check Out screens and account screens and anything else to complete this app."
  },
  {
    week: "18",
    title: "( Discover ) Persona & Empathy Map",
    level: "intermediate",
    details: [],
    resources: [
      { type: "article", label: "NNG: Personas", url: "https://www.nngroup.com/articles/persona/" },
      { type: "article", label: "Smashing Magazine: Personas", url: "https://www.smashingmagazine.com/2014/08/a-closer-look-at-personas-part-1/" },
      { type: "article", label: "Medium: Personas", url: "https://medium.com/@benleralph/personas-74c4e1c12ee2" },
      { type: "video",   label: "Persona Tutorial", url: "https://youtu.be/PYv46j02zvY?si=0gDU2Iv0F0vS_UdF" },
      { type: "article", label: "NNG: Empathy Mapping", url: "https://www.nngroup.com/articles/empathy-mapping/" },
      { type: "article", label: "UX Booth: Empathy Map Guide", url: "https://uxbooth.com/articles/empathy-mapping-a-guide-to-getting-inside-a-users-head/" },
      { type: "article", label: "IxDF: Empathy Map", url: "https://www.interaction-design.org/literature/article/empathy-map-why-and-how-to-use-it" },
      { type: "video",   label: "Empathy Map Tutorial", url: "https://youtu.be/QwF9a56WFWA?si=zq4VqWUoUkZjX3da" },
      { type: "video",   label: "Arabic: Empathy & Persona", url: "https://youtu.be/QvmLQ7cDvsA?si=qSP0KH-XFpQ1-k2F" }
    ],
    task: "Do a persona and empathy map to any idea."
  },
  {
    week: "19",
    title: "Design System",
    level: "intermediate",
    details: [],
    resources: [
      { type: "article", label: "What is a Design System", url: "https://uxdesign.cc/what-is-a-design-system-a-simple-guide-to-get-started-529fb4b38f9b" },
      { type: "article", label: "Benefits of Design Systems", url: "https://www.toptal.com/designers/design-systems/benefits-of-design-system" },
      { type: "video",   label: "Design System Tutorial", url: "https://www.youtube.com/watch?v=EK-pHkc5EL4" },
      { type: "video",   label: "Arabic Design System Playlist", url: "https://www.youtube.com/watch?v=_SK2L3Nns_s&list=PLlzarBwg78omi49iNVXY_iTXvRm9V1tZN" }
    ],
    task: "Do a design system to clothing product."
  },
  {
    week: "20",
    title: "( Discover ) Customer Journey Map",
    level: "intermediate",
    details: [],
    resources: [
      { type: "article", label: "IxDF: Customer Journey Map", url: "https://www.interaction-design.org/literature/topics/customer-journey-map" },
      { type: "article", label: "How to Create a CJM", url: "https://medium.com/choice-hacking/how-to-create-a-customer-journey-map-ffbd580284d7" },
      { type: "video",   label: "Customer Journey Mapping", url: "https://youtu.be/3iwL2OEeWiw?si=71VKPpjIP7Ry6O5_" }
    ],
    task: "What is customer Journey Map?"
  },
  {
    week: "21",
    title: "Read Chapter 3 & 4 from Practical UI book",
    level: "intermediate",
    details: [],
    resources: [
      { type: "article", label: "Download Practical UI PDF", url: "https://drive.google.com/file/d/1fRb1u3k7yLmch3PqwSp4SdUoqa-0He9I/view" }
    ],
    task: "1- Summarize Chapters 3 & 4 and tell us what you learned.\n\n2- Design a landing page to encourage people to download clothing app ( responsive )."
  },
  {
    week: "22",
    title: "( Define ) Problem Statements",
    level: "intermediate",
    details: [],
    resources: [
      { type: "article", label: "IxDF: Problem Statements", url: "https://www.interaction-design.org/literature/topics/problem-statements" },
      { type: "article", label: "NNG: Problem Statements", url: "https://www.nngroup.com/articles/problem-statements/" },
      { type: "video",   label: "How to Write Problem Statements", url: "https://www.youtube.com/watch?v=kT0ZqwdPYRM" },
      { type: "video",   label: "Problem Statements Tutorial", url: "https://youtu.be/TNAdanuvwtc?si=WldpFOTXRn5f00We" }
    ],
    task: "Details:\n\n1. Choose a product or service you use frequently, such as a mobile app, website, or even a physical device.\n\n2. Identify a specific problem that users face with this product or service. Try to be as precise as possible.\n\n3. Write a Problem Statement that describes the issue. Make sure to include:\n- Who are the users?\n- What is the problem they are facing?\n- Why does this problem negatively impact their experience?\n\nExample: \"Students attending lectures via the Zoom app are struggling to stay focused due to the lack of interactive features. This issue affects their learning experience and reduces the effectiveness of the lectures.\""
  },
  {
    week: "23",
    title: "Read Chapter 5 & 6 from Practical UI book",
    level: "intermediate",
    details: [],
    resources: [
      { type: "article", label: "Download Practical UI PDF", url: "https://drive.google.com/file/d/1fRb1u3k7yLmch3PqwSp4SdUoqa-0He9I/view" }
    ],
    task: "1- Summarize Chapters 5 & 6 and tell us what you learned.\n\n2- Create a dashboard to clothing product."
  },
  {
    week: "24",
    title: "( Ideate ) Brainstorming & Affinity Diagrams",
    level: "intermediate",
    details: [],
    resources: [
      { type: "article", label: "IxDF: Brainstorming", url: "https://www.interaction-design.org/literature/topics/brainstorming" },
      { type: "article", label: "Running Design Workshops", url: "https://www.intercom.com/blog/running-design-workshops/" },
      { type: "video",   label: "Brainstorming (Arabic)", url: "https://www.youtube.com/watch?v=Gyb_ZdYVt3k" },
      { type: "article", label: "IxDF: Affinity Diagrams", url: "https://www.interaction-design.org/literature/article/affinity-diagrams-learn-how-to-cluster-and-bundle-ideas-and-facts" },
      { type: "video",   label: "Affinity Diagram Tutorial", url: "https://www.youtube.com/watch?v=uVz_oFK472w" }
    ],
    task: "1. Brainstorming:\n- Conduct an individual brainstorming session.\n- Choose a specific problem or topic related to user experience in a product or service.\n- Write down all the ideas and suggestions that come to mind for solving the problem or improving the experience, without evaluating or criticizing them.\n- Focus on generating as many ideas as possible within a set time frame (e.g., 15-20 minutes).\n\n2. Affinity Diagrams:\n- After brainstorming, start grouping similar ideas together.\n- For each group, give it a title that represents the common idea.\n- Continue organizing the ideas until you have a clear diagram that shows the relationships between different ideas."
  },
  {
    week: "25",
    title: "Read Chapter 7 & 8 from Practical UI book",
    level: "intermediate",
    details: [],
    resources: [
      { type: "article", label: "Download Practical UI PDF", url: "https://drive.google.com/file/d/1fRb1u3k7yLmch3PqwSp4SdUoqa-0He9I/view" }
    ],
    task: "1- Summarize Chapters 7 & 8 and tell us what you learned.\n\n2- Complete the dashboard and make it responsive."
  },
  {
    week: "26",
    title: "( Ideate ) Information Architecture & User Flow",
    level: "intermediate",
    details: [],
    resources: [
      { type: "article", label: "Adobe XD: IA Guide", url: "https://xd.adobe.com/ideas/process/information-architecture/information-ux-architect/" },
      { type: "video",   label: "Information Architecture Basics", url: "https://www.youtube.com/watch?v=OJLfjgVlwDo" },
      { type: "video",   label: "IA (Arabic)", url: "https://www.youtube.com/watch?v=TtvOiDxRPtE" },
      { type: "article", label: "IxDF: User Flows", url: "https://www.interaction-design.org/literature/topics/user-flows" },
      { type: "video",   label: "User Flow Tutorial", url: "https://youtu.be/cvYhuowazh0?si=jGtouT71jHrVpupn" },
      { type: "video",   label: "User Flow (Arabic)", url: "https://youtu.be/0_6z39YcMTo?si=2v2yNO5FCkaqfg-p" }
    ],
    task: "1. Information Architecture:\n- Choose an existing website or app that you use frequently.\n- Analyze its current structure by mapping out its main sections and sub-sections.\n- Based on your analysis, propose a revised Information Architecture that improves navigation and user experience. You can create a sitemap to visualize the new structure.\n- Justify your decisions by explaining how the new structure better meets the needs of the users.\n\n2. User Flow:\n- Select a specific task or goal a user would want to accomplish on the chosen website or app (e.g., purchasing a product, signing up for a service).\n- Create a User Flow diagram that shows the steps a user would take to complete this task, starting from the entry point to the final action.\n- Identify any potential pain points or areas of friction in the current flow, and suggest improvements to make the process smoother and more intuitive."
  },
  {
    week: "27",
    title: "Usability Test & Iteration",
    level: "intermediate",
    details: [],
    resources: [
      { type: "article", label: "NNG: Usability Test Checklist", url: "https://www.nngroup.com/articles/usability-test-checklist/" },
      { type: "article", label: "Smashing Magazine: User Testing Guide", url: "https://www.smashingmagazine.com/2018/03/guide-user-testing/" },
      { type: "article", label: "6 Steps to Usability Testing", url: "https://www.toptal.com/designers/ux-consultants/how-to-conduct-usability-testing-in-6-steps" },
      { type: "article", label: "Iterative Testing Best Practices", url: "https://xd.adobe.com/ideas/process/user-testing/process-user-testing-iterative-usability-testing-best-practices/" },
      { type: "video",   label: "Usability Testing Guide", url: "https://youtu.be/nYCJTea1AUQ?si=NQjKxJOsO4Pc3wFQ" }
    ],
    task: "1. Usability Testing:\n- Select a digital product (website or app) that you or your group has worked on or are familiar with.\n- Create a usability test plan that outlines: the goals of the test, the tasks you want users to perform, and the criteria for selecting participants.\n- Conduct the usability test with at least 3-5 users. Observe their interactions, take notes on their feedback, and record any challenges they face.\n\n2. Analysis:\n- After the testing, analyze the data collected.\n- Identify common pain points, user frustrations, and areas for improvement.\n- Summarize your findings in a report, highlighting key insights and specific recommendations for design improvements.\n\n3. Iteration:\n- Based on your analysis, create an iterative plan that outlines the changes you will make.\n- Update the design or prototype to address the identified issues.\n- Consider conducting another round of usability testing with the revised design to evaluate the effectiveness of your changes."
  },
  {
    week: "28",
    title: "Project: Case Study",
    level: "intermediate",
    details: [
      "You will be divided into teams, 3 in each team, and each team will look for a specific problem or idea and then apply it using what we have learned."
    ],
    resources: [],
    task: "1. Research: Brainstorming with the team • User Interviews with 3-5 users • Surveys for quantitative data • Affinity Diagrams • Competitive Analysis & SWOT Analysis of 2-3 competitors.\n\n2. Personas & User Journey: Create 2-3 user personas • Create a user journey map highlighting pain points and opportunities.\n\n3. Information Architecture & Wireframes: Design the structure of core pages • Develop low-fidelity wireframes for key screens.\n\n4. UI Design & Prototype: Design the user interface applying best practices in layout, colors, typography, and spacing • Create a prototype using UI screens.\n\n5. Usability Test & Iteration: Test with 3-5 users • Analyze findings • Update the design • Revise the prototype based on feedback.\n\n6. Presentation: Each group should prepare a full presentation explaining the entire process, from research to final design, focusing on the solutions they implemented."
  }
];