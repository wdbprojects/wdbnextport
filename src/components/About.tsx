"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useInViewHook } from "@/lib/hooks";

const About = () => {
  const { ref } = useInViewHook("About", 0.9);

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading title="About me" />
      <p className="mb-3 text-sm leading-6">
        With over six years of dedicated experience in web development, I am a
        seasoned professional specializing in frontend technologies,
        particularly React. My proficiency extends beyond the client side,
        encompassing a solid command of backend technologies such as Node.js,
        Express, and MongoDB. Armed with a background in business, I hold an
        MBA, bringing a unique blend of technical prowess and strategic thinking
        to my projects.
      </p>
      <p className="mb-3 text-sm leading-6">
        Throughout my career, I have honed my skills not only as a web developer
        but also as a versatile professional capable of thriving in both
        freelance and team environments. My ability to adapt to diverse work
        settings is evident in my extensive experience working within scrum-like
        methodologies, where collaboration and efficiency are paramount.
      </p>
      <p className="mb-3 text-sm leading-6">
        In the ever-evolving landscape of web development, I am committed to
        staying at the forefront of industry trends and technologies. This
        commitment, combined with my comprehensive skill set, allows me to
        deliver robust and innovative solutions that meet and exceed client
        expectations. Whether working independently or as part of a
        collaborative team, I approach each project with a meticulous attention
        to detail and a passion for creating seamless and engaging user
        experiences.
      </p>
    </motion.section>
  );
};

export default About;
