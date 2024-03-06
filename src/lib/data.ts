import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import voila from "/public/voila.jpg";
import anagram from "/public/anagram.jpg";
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
    title: "Frontend Developer - React",
    location: "La Paz, Bolivia",
    description:
      "As an intermediate React developer, I collaborated with senior colleagues to develop a large database application using the MERN stack. Under pressure, I consistently met deadlines, ensuring delivery of high-quality results. Utilizing agile methodologies and Trello, I managed CRUD operations on multiple APIs using Redux Toolkit and optimized the UI with Material UI Datasets.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
  {
    title: "Web Developer [MAMP - WordPress / MERN]",
    location: "La Paz, Bolivia",
    description:
      "Designed and developed custom websites, e-commerce solutions and other applications for small businesses. Technologies used include JavaScript, React, Node.js, Express, MongoDB, and popular SQL databases. Previously I used other technologies such as PHP, MySQL and the WordPress API.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2022",
  },
  {
    title: "Marketing/Business Inteligence",
    location: "Austin, TX / La Paz - Bolivia",
    description:
      "Strategic marketer with expertise in digital marketing, CRM development, and sales, specializing in tech solutions. Proven track record in improving brand visibility and sales performance in the IT sector.",
    icon: React.createElement(FaReact),
    date: "2012 - 2016",
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
    url: "https://salmon-walrus-sock.cyclic.app/",
    repo: "https://github.com/wdbprojects/voila24",
  },
  {
    id: 2,
    title: "Anagram",
    description:
      "An innovative Full Stack Social Media App, leveraging React and Appwrite, seamlessly unites an intuitive user interface with robust backend capabilities, delivering an engaging and dynamic social experience for users.",
    tags: ["React", "Appwrite", "Tailwind", "React Query"],
    imageUrl: anagram,
    dataFiles: false,
    url: "",
    repo: "",
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
