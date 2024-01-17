"use client";
import { useInViewHook } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

const Skills = () => {
  const { ref } = useInViewHook("Skills", 0.8);

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: (index: number) => {
      return {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.05 * index,
        },
      };
    },
  };

  return (
    <section
      ref={ref}
      id="skills"
      className="text-center scroll-mt-28 max-w-[50rem] mb-28 sm:mb-40"
    >
      <SectionHeading title="Skills" />
      <div className="flex flex-wrap gap-3 justify-center">
        {skillsData.map((skill, index) => {
          return (
            <motion.span
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <Badge
                variant="outline"
                className="py-3 px-5 text-sm text-gray-800 dark:text-gray-200"
              >
                {skill}
              </Badge>
            </motion.span>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
