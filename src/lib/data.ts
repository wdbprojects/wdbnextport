import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import shopit from "/public/shopit.jpg";
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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    id: 1,
    title: "ShopIt",
    description:
      "Robust e-commerce application, developed using the MERN stack, seamlessly integrates MongoDB, Express, React, and Node.js for efficient functionality and performance. Includes best React libraries such as Redux Toolkit, React Hook Form, and TailwindCSS.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Node.js/Express"],
    imageUrl: shopit,
  },
  {
    id: 2,
    title: "Anagram",
    description:
      "An innovative Full Stack Social Media App, leveraging React and Appwrite, seamlessly unites an intuitive user interface with robust backend capabilities, delivering an engaging and dynamic social experience for users.",
    tags: ["React", "TypeScript", "Appwrite", "Tailwind", "React Query"],
    imageUrl: anagram,
  },
  {
    id: 3,
    title: "Rues",
    description:
      "As part of a team of developers, this application, powered by React, Nest.js, and PostgreSQL, efficiently stores, sorts, and displays health center data. Seamlessly blending frontend and backend technologies, it offers a user-friendly interface for streamlined data management.",
    tags: ["React", "React Hook Forms", "Redux Toolkit"],
    imageUrl: rues,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
