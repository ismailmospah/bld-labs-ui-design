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

import wagbaProduct from "@/assets/projects/wagba-product.jpg";
import carMax from "@/assets/projects/car-max.jpg";
import ghym from "@/assets/projects/ghym.jpg";
import otlobApp from "@/assets/projects/otlb-app.jpg";

import carMax1 from "@/assets/projects/CAR Max Project/Artboard 1.png";
import carMax2 from "@/assets/projects/CAR Max Project/Artboard 1 copy.png";
import carMax3 from "@/assets/projects/CAR Max Project/Artboard 1 copy 2.png";
import carMax4 from "@/assets/projects/CAR Max Project/Artboard 1 copy 3.png";
import carMax5 from "@/assets/projects/CAR Max Project/Artboard 1 copy 4.png";
import carMax6 from "@/assets/projects/CAR Max Project/Artboard 1 copy 5.png";
import carMax7 from "@/assets/projects/CAR Max Project/Artboard 1 copy 6.png";
import carMax8 from "@/assets/projects/CAR Max Project/Artboard 1 copy 7.png";
import carMax9 from "@/assets/projects/CAR Max Project/Artboard 1 copy 8.png";
import carMax10 from "@/assets/projects/CAR Max Project/Artboard 1 copy 9.png";
import endImage from "@/assets/projects/CAR Max Project/end.png";
export const projects: Project[] = [
  {
    id: "fintech-wallet",
    title: "Wajba Product",
    shortDescription: "Wajba is a smart food ordering app that makes your dining experience easier and faster than ever.From the moment you open the app, you\’ll find a wide variety of restaurants — Eastern and Western cuisines, fast food, and healthy meals — all in one place..",
    fullDescription: "Wajba is a smart food ordering app that makes your dining experience easier and faster than ever. From the moment you open the app, you’ll find a wide variety of restaurants — Eastern and Western cuisines, fast food, and healthy meals — all in one place..",
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
    mockupImage: wagbaProduct
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
    mockupImage: carMax1,
    images: [carMax1,carMax10, carMax6,carMax8,carMax9,carMax5, carMax2,carMax7, carMax4, carMax3,endImage]
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
    mockupImage: ghym
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
    mockupImage: otlobApp
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};