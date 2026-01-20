import { div } from "three/examples/jsm/nodes/Nodes.js";
import {
  database,
  nodejs,
  virtualreality,
  reactjs,
  uvic,
  sd42,
  selfemployed,
  uclapic,
  starangels,
  prototype,
  vrviewpointprediction,
  recipefinder,
  aws,
  bootstrap,
  C,
  css,
  docker,
  html,
  java,
  javascript,
  laravel,
  mongodb,
  mysql,
  php,
  postgresql,
  python,
  pytorch,
  R,
  react,
  selenium,
  spring,
  tailwind,
  tensorflow
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Cloud & DevOps",
    icon: docker,
  },
  {
    title: "Database Management",
    icon: database,
  },
  {
    title: "Backend Development",
    icon: nodejs,
  },
  {
    title: "Data Analytics",
    icon: aws,
  },
];

const experiences = [
  /*
  {
    title: "Computer Science & Physics",
    company_name: "University of Victoria",
    icon: uvic,
    iconBg: "#383E56",
    date: "2014 - Graduated 2020",
    points: [
      "Implemented various Java library algorithms, data structures, and Design Patterns",
      "Employed C programming for low level embedded systems",
      "Constructed a new statically typed language compiler and interpreter (C, Java)",
      "Built servers, studied network packet design, REST APIs, IoT, IaaS PaaS SaaS (Python Sockets, PHP, Postman, AWS, Docker)",
      "Studied operating system design (UNIX), artificial intelligence, cryptography, data mining, and security engineering",
      "Studied radioactivity, electricity, magnetism, thermodynamics, and various quantum phenomena",
    ],
  },
  */
  {
    title: "Data Analyst Intern ",
    company_name: "UCLA California Nanosystems Institute",
    icon: python,
    iconBg: "#20232A",
    date: "Aug 2024 - Jan 2025",
    points: [
      "Reviewing and organizing research data from lab experiments and imaging studies",
      "Creating spreadsheets and Python scripts to sort, label, and summarize datasets",
      "Deploying back end applications with API integration",
      "Organizing and optimizing large scale server databases",
      "Checking datasets for errors, cleaning entries, and keeping data consistent",
    ],
  },
  {
    title: "Financial Analyst Intern ",
    company_name: "Raphael Stone & Co.",
    icon: mysql,
    iconBg: "#20232A",
    date: "Dec 2023 - March 2024",
    points: [
      "Reviewing sales, expense, and transaction data to find trends and patterns",
      "Creating Excel sheets and dashboards to track revenue and monthly performance",
      "Checking financial data for errors, cleaning entries, and keeping records organized",
    ],
  },
  {
    title: "Sole Developer, Genevieve's Garden",
    company_name: "University Of California, Los Angeles",
    icon: reactjs,
    iconBg: "#20232A",
    date: "Jan 2024 - March 2024",
    points: [
      "Designing and deploying the full website as the sole front-end and back-end developer",
      "Building online forms for volunteers and donors and setting up how responses are stored ",
      "Managing the database and backend settings for sign-ups and contact submissions ",
      "Creating page layouts, menus, and content sections to make the site easy to navigate",
    ],
  },
  {
    title: "Sole Developer, Dieven App",
    company_name: "University Of California, Los Angeles",
    icon: react,
    iconBg: "#20232A",
    date: "May 2023 - Dec 2023",
    points: [
      "Creating wireframes and prototypes to plan features, user flow, and overall app structure",
      "Automating routine processes within the app to improve efficiency and reduce manual work",
      "Managing app databases and data organization to ensure reliable storage and retrieval",
    ],
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JAVASCRIPT",
    icon: javascript,
  },
  {
    name: "PYTHON",
    icon: python,
  },
  {
    name: "JAVA",
    icon: java,
  },
  {
    name: "R",
    icon: R,
  },
  {
    name: "C",
    icon: C,
  },
  {
    name: "REACT",
    icon: react,
  },
  {
    name: "TAILWIND",
    icon: tailwind,
  },
  {
    name: "BOOTSTRAP",
    icon: bootstrap,
  },
  {
    name: "NODE",
    icon: nodejs,
  },
  {
    name: "SPRING",
    icon: spring,
  },
  {
    name: "DOCKER",
    icon: docker,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MYSQL",
    icon: mysql,
  },
  {
    name: "POSTGRESQL",
    icon: postgresql,
  },
  {
    name: "MONGODB",
    icon: mongodb,
  },
  {
    name: "LARAVEL",
    icon: laravel,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "TENSORFLOW",
    icon: tensorflow,
  },
  {
    name: "PYTORCH",
    icon: pytorch,
  },

  
  
];

const projects = [
  {
    name: "3D Website",
    description:
      "Website example utilizing Three.js to animate a revolving star background. More lightweight version of this portfolio's background.",
    tags: [
    ],
    image: starangels,
    source_code_link: "https://github.com/nkarmac/Star-Angels",
    web_link: "https://nkarmac.github.io/Star-Angels/",
  },
  {
    name: "Recipe Finder",
    description:
      "React/Node Full Stack app for searching recipes based on listed ingredients. Deployed with backend api database.",
    tags: [
    ],
    image: recipefinder,
    source_code_link: "https://github.com/nkarmac/Recipe-Finder",
    web_link: "https://nkarmac.github.io/Recipe-Finder/",
  },
  {
    name: "Hiring App",
    description:
      "In-progress Android application for restaurants hiring local contract waiters & waitresses. Linked is a high-fidelity prototype.",
    tags: [
    ],
    image: prototype,
    source_code_link: "https://github.com/nkarmac/Prototype",
    web_link: "https://nkarmac.github.io/Prototype/",
  },
  {
    name: "Virtual Reality Research",
    description:
      "VR research project website detailing many varying approaches to reduce computation of 360\u00B0 video.",
    tags: [
      // {
      //   name: "python",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "tensorflow",
      //   color: "green-text-gradient",
      // },
    ],
    image: vrviewpointprediction,
    source_code_link: "https://github.com/nkarmac/VRViewpointPrediction",
    web_link: "https://nkarmac.github.io/VRViewpointPrediction/",
  },
];

export { services, experiences, technologies, projects };
