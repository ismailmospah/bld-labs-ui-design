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
  mockupImage: string;
  images?: string[];
}

// Wajba images
import wajba1 from "@/assets/projects/Wajba/wajba_01.png";
import wajba2 from "@/assets/projects/Wajba/wajba_02.png";
import wajba3 from "@/assets/projects/Wajba/wajba_03.png";
import wajba4 from "@/assets/projects/Wajba/wajba_04.png";
import wajba5 from "@/assets/projects/Wajba/wajba_05.png";
import wajba6 from "@/assets/projects/Wajba/wajba_06.png";
import wajba7 from "@/assets/projects/Wajba/wajba_07.png";
import wajba8 from "@/assets/projects/Wajba/wajba_08.png";
import wajba9 from "@/assets/projects/Wajba/wajba_09.png";
import wajba10 from "@/assets/projects/Wajba/10.png";

// CarMax images
import carMaxCover from "@/assets/projects/car max/cover/2.png";
import carMax1 from "@/assets/projects/car max/images/car-max_01.png";
import carMax2 from "@/assets/projects/car max/images/car-max_02.png";
import carMax3 from "@/assets/projects/car max/images/car-max_03.png";
import carMax4 from "@/assets/projects/car max/images/car-max_04.png";
import carMax5 from "@/assets/projects/car max/images/car-max_05.png";
import carMax6 from "@/assets/projects/car max/images/car-max_06.png";
import carMax7 from "@/assets/projects/car max/images/car-max_07.png";
import carMax8 from "@/assets/projects/car max/images/car-max_08.png";
import carMax9 from "@/assets/projects/car max/images/car-max_09.png";
import carMax10 from "@/assets/projects/car max/images/car-max_10.png";
import carMax11 from "@/assets/projects/car max/images/car-max_11.png";

// Ghym Website images
import ghymWeb1 from "@/assets/projects/Ghym Website/Untitled-1_01.png";
import ghymWeb2 from "@/assets/projects/Ghym Website/Untitled-1_02.png";
import ghymWeb3 from "@/assets/projects/Ghym Website/Untitled-1_03.png";
import ghymWeb4 from "@/assets/projects/Ghym Website/Untitled-1_04.png";
import ghymWeb5 from "@/assets/projects/Ghym Website/Untitled-1_05.png";
import ghymWeb6 from "@/assets/projects/Ghym Website/Untitled-1_06.png";
import ghymWeb7 from "@/assets/projects/Ghym Website/Untitled-1_07.png";
import ghymWeb8 from "@/assets/projects/Ghym Website/Untitled-1_08.png";

// Ghym Dashboard images
import ghymDash1 from "@/assets/projects/Ghym Dashboard/ghym--Dashboard_01.png";
import ghymDash2 from "@/assets/projects/Ghym Dashboard/ghym--Dashboard_02.png";
import ghymDash3 from "@/assets/projects/Ghym Dashboard/ghym--Dashboard_03.png";
import ghymDash4 from "@/assets/projects/Ghym Dashboard/ghym--Dashboard_04.png";
import ghymDash5 from "@/assets/projects/Ghym Dashboard/ghym--Dashboard_05.png";
import ghymDash6 from "@/assets/projects/Ghym Dashboard/ghym--Dashboard_06.png";
import ghymDash7 from "@/assets/projects/Ghym Dashboard/ghym--Dashboard_07.png";

// Otlob images
import otlob1 from "@/assets/projects/Otlop/otlob_01.png";
import otlob2 from "@/assets/projects/Otlop/otlob_02.png";
import otlob3 from "@/assets/projects/Otlop/otlob_03.png";
import otlob4 from "@/assets/projects/Otlop/otlob_04.png";
import otlob5 from "@/assets/projects/Otlop/otlob_05.png";
import otlob6 from "@/assets/projects/Otlop/otlob_06.png";
import otlob7 from "@/assets/projects/Otlop/otlob_07.png";
import otlob8 from "@/assets/projects/Otlop/otlob_08.png";
export const projects: Project[] = [
  {
    id: "fintech-wallet",
    title: "Wajba Product",
    shortDescription: "Wajba is a smart food ordering app that makes your dining experience easier and faster than ever.From the moment you open the app, you\'ll find a wide variety of restaurants — Eastern and Western cuisines, fast food, and healthy meals — all in one place..",
    fullDescription: "Wajba is a smart food ordering app that makes your dining experience easier and faster than ever. From the moment you open the app, you'll find a wide variety of restaurants — Eastern and Western cuisines, fast food, and healthy meals — all in one place..",
    category: "Product Design / UX / UI",
    challenge: "Users often struggle with choosing the right meal due to too many options, unclear menus, and slow ordering experiences. This leads to frustration, longer decision time, and abandoned orders.",
    solution: "Wajba provides a smart, user-friendly food ordering experience with clear restaurant listings, well-structured menus, and a smooth ordering flow. Users can easily explore different cuisines, find what fits their mood, and place an order in just a few steps..",
    results: [
      "Faster decision-making and checkout",
      "Reduced order drop-off rates",
      "Higher user satisfaction and repeat orders",
      "A more enjoyable and stress-free food ordering experience"
    ],
    color: "from-[#53Ba5f]/40 to-[#000]/10",
    mockupImage: wajba10,
    images: [wajba1, wajba2, wajba3, wajba4, wajba5, wajba6, wajba7, wajba8, wajba9]
  },
  {
    id: "healthcare-management",
    title: "CarMax Product",
    shortDescription: "CarMax is a smart car rental platform designed to make renting a car simple, fast, and reliable. The app allows users to browse a wide range of vehicles, compare options based on their needs, view clear pricing, and book a car in just a few steps..",
    fullDescription: "CarMax is a smart car rental platform designed to make renting a car simple, fast, and reliable. The app allows users to browse a wide range of vehicles, compare options based on their needs, view clear pricing, and book a car in just a few steps.",
    category: "Product Design / UX",
    challenge: "Customers face difficulties when renting a car due to limited availability visibility, unclear pricing, complex booking steps, and lack of trust in the rental process..",
    solution: "CarMax offers a smart and seamless car rental experience with clear car listings, transparent pricing, and an easy booking flow. Users can browse available cars, compare options, choose rental duration, and complete their reservation in just a few simple steps..",
    results: [
      "Faster and smoother booking experience",
      "Increased user trust through transparent pricing",
      "Reduced booking friction and drop-offs",
      "Higher customer satisfaction and repeat rentals"
    ],
    color: "from-[#53Ba5f]/40 to-[#000]/10",
    mockupImage: carMaxCover,
    images: [carMax1, carMax2, carMax3, carMax4, carMax5, carMax6, carMax7, carMax8, carMax9, carMax10, carMax11]
  },
  {
    id: "ecommerce-redesign",
    title: "System Ghym",
    shortDescription: "Ghym is a smart platform designed for educational institutes to host their courses and trainers, allowing students to easily browse, enroll, and follow their learning journey. The platform connects institutes, instructors, and students in one seamless ecosystem..",
    fullDescription: "Ghym is a smart platform designed for educational institutes to host their courses and trainers, allowing students to easily browse, enroll, and follow their learning journey. The platform connects institutes, instructors, and students in one seamless ecosystem..",
    category: "UX Research / UI Design",
    challenge: "Educational institutes often struggle to manage courses, instructors, and student enrollment digitally. Students face difficulties finding courses, understanding schedules, and tracking progress..",
    solution: "Ghym provides a unified platform where institutes can showcase courses and trainers, manage enrollments efficiently, and communicate with students, while students enjoy a simple and interactive learning experience..",
    results: [
      "Streamlined course and instructor management for institutes",
      "Easier course discovery and enrollment for students",
      "Enhanced connection between institutes, trainers, and learners",
      "mproved student engagement and retention"
    ],
    color: "from-[#53Ba5f]/40 to-[#000]/10",
    mockupImage: ghymWeb1,
    images: [ghymWeb1, ghymWeb2, ghymWeb3, ghymWeb4, ghymWeb5, ghymWeb6, ghymWeb7, ghymWeb8, ghymDash1, ghymDash2, ghymDash3, ghymDash4, ghymDash5, ghymDash6, ghymDash7]
  },
  {
    id: "saas-dashboard",
    title: "Otlob Product",
    shortDescription: "Otlob is a smart e-commerce platform that makes online shopping simple, fast, and convenient. Users can browse a wide variety of products, compare prices, read reviews, and place orders—all within a few taps..",
    fullDescription: "Otlob is a smart e-commerce platform that makes online shopping simple, fast, and convenient. Users can browse a wide variety of products, compare prices, read reviews, and place orders—all within a few taps..",
    category: "Product Design / Product Strategy",
    challenge: "Users often struggle with finding products easily, comparing options, and completing purchases quickly, leading to abandoned carts and frustration..",
    solution: "Otlob offers organized product categories, smart search and filters, clear product details, and a smooth checkout process to make shopping faster and easier..",
    results: [
      "Reduced cart abandonment rates",
      "Faster product discovery and checkout",
      "Higher customer satisfaction and repeat purchases",
      "A more enjoyable and stress-free online shopping experience"
    ],
    color: "from-[#53Ba5f]/40 to-[#000]/10",
    mockupImage: otlob1,
    images: [otlob1, otlob2, otlob3, otlob4, otlob5, otlob6, otlob7, otlob8]
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};