import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import voila from "/public/voila.jpg";
import anagram from "/public/anagram.jpg";
import flowjobs from "/public/flowjobs.png";
import rues from "/public/rues.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-stack Developer",
    company: "FactumX",
    location: "La Paz, Bolivia",
    description: [
      {
        id: 1,
        text: "Collaborated with senior developers to build a scalable database application using React and modern web technologies",
      },
      {
        id: 2,
        text: "Delivered production-ready features under tight deadlines while maintaining code quality and performance",
      },
      {
        id: 3,
        text: "Implemented efficient CRUD operations across multiple APIs using Redux Toolkit for state management",
      },
      {
        id: 4,
        text: "Optimized user interfaces with Material UI components, improving usability and visual consistency",
      },
    ],
    icon: React.createElement(FaReact),
    date: "Jan 2019 - present",
  },
  {
    title: "Front-end Developer",
    company: "Freelance",
    location: "La Paz, Bolivia",
    description: [
      {
        id: 1,
        text: "Developed custom websites and e-commerce solutions for small businesses using modern JavaScript stack (React, Node.js, Express, MongoDB)",
      },
      {
        id: 2,
        text: "Built full-stack applications with both NoSQL (MongoDB) and relational SQL databases",
      },
      {
        id: 3,
        text: "Integrated with various APIs and CMS platforms including WordPress",
      },
      {
        id: 4,
        text: "Leveraged previous experience with PHP, MySQL, and WordPress for legacy system support",
      },
      {
        id: 5,
        text: "Delivered tailored web solutions that addressed specific business needs and requirements",
      },
    ],
    icon: React.createElement(FaReact),
    date: "Aug 2014 - Dec 2018",
  },
  {
    title: "Business Inteligence",
    company: "Grupo Santillana",
    location: "La Paz - Bolivia",
    description: [
      {
        id: 1,
        text: "Designed and implemented a custom CRM system to enhance customer relationship management and operational efficiency",
      },
      {
        id: 2,
        text: "Managed annual revenue budgets by product across 5 Bolivian cities, ensuring financial alignment with business goals",
      },
      {
        id: 3,
        text: "Monitored real-time sales performance via CRM, generating strategic reports to support data-driven decision-making across departments",
      },
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2007 - Jun 2013",
  },
  {
    title: "Sales Representative",
    company: "Dell Inc.",
    location: "Austin, TX",
    description: [
      {
        id: 1,
        text: "B2B Technology Sales: Sold premium computing and networking solutions to SMBs across Mexico and the Caribbean through consultative, needs-based selling",
      },
      {
        id: 2,
        text: "Customer-Centric Approach: Conducted in-depth needs assessments to recommend tailored IT solutions, leveraging expert product knowledge to drive decision-making",
      },
      {
        id: 3,
        text: "Top-Performing Results: Exceeded sales quotas consistently, ranking among top performers",
      },
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2004 - Jul 2006",
  },
  {
    title: "Accounting & Budget Clerk",
    company: "American Airlines",
    location: "La Paz - Bolivia",
    description: [
      {
        id: 1,
        text: "Budget Management: Develop and prepare the airline’s expense budget for Bolivia",
      },
      {
        id: 2,
        text: "Financial Reconciliation: Conduct monthly and annual variance analysis and reporting for corporate headquarters",
      },
      {
        id: 3,
        text: "Vendor & Payment Processing: Handle daily vendor payments and ensure accurate recording in SAP software",
      },
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Apr 1996 - May 2000",
  },
] as const;

export const projectsData = [
  {
    id: 1,
    title: "Voila!",
    description:
      "Robust E-Commerce application, developed using the MERN stack, seamlessly integrates MongoDB, Express, React, and Node.js for efficient functionality and performance. Includes best React libraries such as Redux Toolkit, React Hook Form, and TailwindCSS.",
    tags: [
      "React",
      "Redux Toolkit",
      "Node/Express",
      "MongoDB",
      "Tailwind / NextUI",
      "React Hook Form",
      "Cloudinary",
      "Stripe",
    ],
    imageUrl: voila,
    dataFiles: true,
    url: "https://voila24.onrender.com/",
    repo: "https://github.com/wdbprojects/voila24",
  },
  {
    id: 2,
    title: "Flow Jobs",
    description:
      "This web application revolutionizes job searching and posting with its intuitive interface and robust functionality. Built on Next.js 14, it leverages server actions for efficient data fetching, integrating seamlessly with React Hook Form and Zod for dynamic form handling and validation. The design is meticulously crafted using Shadcn and Tailwind CSS, ensuring a modern and responsive user experience. Authentication is handled securely through Cerk, while the backend relies on PostgreSQL and Prisma for reliable data storage and management. Deployed on Vercel, this application offers a seamless blend of performance, security, and ease of use, making job hunting and posting an effortless task.",
    tags: [
      "React",
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "React Hook Form",
      "Zod",
      "TailwindCSS / ShadCN",
      "Vercel",
      "Server Actions",
      "Custom Smart Search",
    ],
    imageUrl: flowjobs,
    dataFiles: true,
    url: "https://flowjobs-rho.vercel.app/",
    repo: "https://github.com/wdbprojects/stevejobs",
  },
  {
    id: 3,
    title: "Rues",
    description:
      "As part of a team of developers, this application, powered by React, Nest.js, and PostgreSQL, efficiently stores, sorts, and displays health center data. Seamlessly blending frontend and backend technologies, it offers a user-friendly interface for streamlined data management.",
    tags: ["React", "React Hook Forms", "Redux Toolkit"],
    imageUrl: rues,
    dataFiles: false,
    url: "",
    repo: "",
  },
] as const;

export const skillsData = [
  "JavaScript",
  "React",
  "Redux Toolkit",
  "React Hook Form",
  "Next.js",
  "Node.js",
  "Express.js",
  "TypeScript",
  "HTML",
  "CSS",
  "Tailwind",
  "MUI, ShadCN, NextUI",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "Framer Motion",
] as const;
