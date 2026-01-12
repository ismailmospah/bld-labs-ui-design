export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  challenge: string;
  solution: string;
  results: string[];
  color: string;
}

export const projects: Project[] = [
  {
    id: "fintech-wallet",
    title: "Fintech Wallet Platform",
    shortDescription: "A comprehensive mobile banking solution designed to simplify personal finance management for everyday users.",
    fullDescription: "We partnered with a leading fintech startup to reimagine how people interact with their money. The goal was to create an intuitive, secure, and delightful mobile banking experience that would appeal to both tech-savvy millennials and traditional banking customers.",
    category: "Product Design / UX / UI",
    challenge: "Users were overwhelmed by complex financial data and struggled to understand their spending patterns. The existing solutions felt cold and transactional, lacking the human touch needed for something as personal as money management.",
    solution: "We designed a clean, card-based interface that presents financial information in digestible chunks. Smart visualizations help users understand their money at a glance, while personalized insights guide them toward better financial decisions.",
    results: [
      "40% increase in daily active users",
      "4.8 star rating on App Store",
      "60% reduction in support tickets",
      "$2M+ in new deposits within first quarter"
    ],
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: "healthcare-management",
    title: "Healthcare Management System",
    shortDescription: "End-to-end patient management platform improving healthcare delivery and administrative efficiency.",
    fullDescription: "A regional healthcare network needed to modernize their patient management system. We designed a comprehensive platform that connects patients, providers, and administrators in a seamless digital experience.",
    category: "Product Design / UX",
    challenge: "Healthcare staff were drowning in paperwork and disconnected systems. Patients faced long wait times and confusing appointment processes. Critical information was often lost between departments.",
    solution: "We created a unified platform with role-based dashboards tailored to each user type. Smart scheduling algorithms reduce wait times, while secure messaging enables direct patient-provider communication.",
    results: [
      "35% reduction in administrative overhead",
      "50% faster patient check-in process",
      "92% patient satisfaction score",
      "Zero data security incidents post-launch"
    ],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: "ecommerce-redesign",
    title: "E-commerce Experience Redesign",
    shortDescription: "Complete shopping experience overhaul resulting in improved conversion rates and customer satisfaction.",
    fullDescription: "A premium lifestyle brand approached us to reimagine their online shopping experience. They needed a platform that would reflect their brand values while driving conversions and building customer loyalty.",
    category: "UX Research / UI Design",
    challenge: "The existing site felt generic and failed to communicate the brand's premium positioning. Cart abandonment was high, and customers complained about difficulty finding products and completing purchases.",
    solution: "We designed an immersive shopping experience with rich product storytelling, intuitive navigation, and a streamlined checkout flow. Personalization features create a curated experience for each visitor.",
    results: [
      "28% increase in conversion rate",
      "45% reduction in cart abandonment",
      "3x increase in average session duration",
      "Featured in Awwwards Site of the Day"
    ],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: "saas-dashboard",
    title: "SaaS Dashboard for Operations",
    shortDescription: "Data-driven operations dashboard helping teams make faster, more informed business decisions.",
    fullDescription: "A fast-growing logistics company needed a command center for their operations team. We designed a real-time dashboard that transforms complex operational data into actionable insights.",
    category: "Product Design / Product Strategy",
    challenge: "Operations managers were making decisions based on outdated data spread across multiple tools. There was no single source of truth, leading to missed opportunities and costly mistakes.",
    solution: "We designed a real-time dashboard with customizable widgets, intelligent alerts, and predictive analytics. The interface adapts to different roles, showing each user exactly what they need to do their job effectively.",
    results: [
      "25% improvement in operational efficiency",
      "Real-time visibility across 50+ metrics",
      "80% reduction in manual reporting time",
      "Adopted by 15 enterprise clients in year one"
    ],
    color: "from-orange-500/20 to-amber-500/20"
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
