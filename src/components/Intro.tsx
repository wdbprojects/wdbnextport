"use client";
import { useInViewHook } from "@/lib/hooks";
import Image from "next/image";
import { motion } from "framer-motion";
import profilePic from "/public/profile.jpg";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { UseActiveSectionContext } from "@/context/ActiveSectionContext";
import { Button } from "./ui/button";

const Intro = () => {
  const { ref } = useInViewHook("Home", 1);
  const { setActiveSection, setTimeOfLastClick } = UseActiveSectionContext();

  return (
    <section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      ref={ref}
      id="home"
    >
      {/* PROFILE PIC */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={profilePic}
              alt="Ronaldo Ortiz Profile Picture"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white dark:border-gray-300 object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      {/* PROFILE TEXT */}
      <motion.h1
        className="mb-10 mt-4 px-4 text-xl font-normal !leading-[1.5] sm:text-xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        MBA-Educated Professional Turned Skilled Web & App Developer with over
        10 years of corporate leadership experience and 8+ years in full-stack
        development, delivering high-impact digital solutions. Leveraged strong
        analytical and strategic skills from an elite MBA program to excel in
        JavaScript, React, Node.js, and React Native for mobile app development
        (iOS/Android). Proven ability to bridge business acumen with technical
        expertise
      </motion.h1>
      {/* CALL TO ACTION */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-md font-normal"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Button
          size="lg"
          className="group px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-102 transition-all h-12"
        >
          <Link
            href="#contact"
            className="px-7 py-3 flex items-center gap-2 outline-none"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="group-hover:translate-x-1 transition group-focus:translate-x-1" />
          </Link>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="group px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-white dark:hover:bg-gray-950 active:scale-102 transition-all h-12"
        >
          <a
            href="/CV.pdf"
            target="_blank"
            download
            className="px-7 py-3 flex items-center gap-2"
          >
            Download CV{" "}
            <HiDownload className="group-hover:translate-x-1 group-focus:translate-x-1 transition" />
          </a>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="border rounded-full w-[3rem] h-[3rem]"
        >
          <a
            href="https://www.linkedin.com/in/webdevbro/"
            target="_blank"
            className="group  p-4 py-3  flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition-all"
          >
            <BsLinkedin className="" />
          </a>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="border rounded-full w-[3rem] h-[3rem]"
        >
          <a
            href="https://github.com/wdbprojects"
            target="_blank"
            className="group p-4 py-3 text-[1.15rem] flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition-all"
          >
            <FaGithub className="" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
};

export default Intro;
