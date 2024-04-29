import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Developper",
    icon: "https://res.cloudinary.com/dl2adjye7/image/upload/v1714377336/4521476_nl8qmy.webp",
  },
  {
    title: "Back-end Developper",
    icon: "https://res.cloudinary.com/dl2adjye7/image/upload/v1714377337/6876345_ulmq11.webp",
  },
  {
    title: "Dev Ops",
    icon: "https://res.cloudinary.com/dl2adjye7/image/upload/v1714377230/database-10344571-8355281_hiv20d.webp",
  },
  {
    title: "ML & AI",
    icon: "https://res.cloudinary.com/dl2adjye7/image/upload/v1714377150/6622088_fu0nlp.webp",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Barclays",
    icon: "https://res.cloudinary.com/dl2adjye7/image/upload/v1714378901/barclays_logo_icon_168534_kqgi9n.png",
    iconBg: "#E6DEDD",
    date: "June 2024 - August 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Data Scientist & Full Stack Developer",
    company_name: "4D",
    icon: "https://res.cloudinary.com/dl2adjye7/image/upload/v1714378993/smallimage_s9depo.png",
    iconBg: "#383E56",
    date: "September 2023 - June 2024",
    points: [
      "Developing a strategy for the implementation of a new coding assistant within 4D’s innovative platform, QODLY.",
      "Responsible for training the coding assistant using advanced machine learning techniques to enable it to code in ORDA proficiently.",
      "Leading the development of the AI component of the coding assistant, ensuring its seamless integration and functionality within the QODLY platform.",
      "Collaborating with cross-functional teams to align the coding assistant’s capabilities with organisational goals.",
    ],
  },
  {
    title: "Co-Founder | CEO & CTO",
    company_name: "Innovation Studios",
    icon: "https://res.cloudinary.com/dl2adjye7/image/upload/v1714380763/Logo_Sam_7_vka0ed.png",
    iconBg: "#E6DEDD",
    date: "September 2022 - Present",
    points: [
      "CEO & CTO of a Consulting Group operating in the University of Birmingham & Warwick, offering Software Development and Data Science services to companies.",
      "Coordinated a team of 20 across various departments: development, recruiting, sales & marketing.",
      "Generated £40,000 in revenue in 1 year by negotiating deals for software engineering and data science projects and led the completion of 15 projects by managing 20 student developers.",
      "Applied Data Engineering expertise to manage, clean, sort, and transform data, ensuring its readiness and optimisation for client-specific projects, and facilitated seamless migration to client servers.",
      "Tiktok (~300k views, 300+ followers, 7k+ likes)"
    ],
  },
  {
    title: "Developer Intern",
    company_name: "4D",
    icon: "https://res.cloudinary.com/dl2adjye7/image/upload/v1714378993/smallimage_s9depo.png",
    iconBg: "#383E56",
    date: " June 2021 - July 2021",
    points: [
      "Conducted a comparative study on low-code platform (SaaS) to build web applications. The study aimed to provide an insight into the capabilities of each low code platform as well as an overview of the learning curve.",
      "Built a full report for each low code platform (PowerPoint and Word).",
      "Made a presentation to the managers and explained the pros and cons of each platform. ",
      "Deepened my understanding of database management, UI/UX design, and deployment processes.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
