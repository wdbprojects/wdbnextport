"use client";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import SingleProject from "./SingleProject";
import { useInViewHook } from "@/lib/hooks";

const Projects = () => {
  const { ref } = useInViewHook("Projects", 0.5);
  return (
    <section
      ref={ref}
      className="text-center scroll-mt-28 mb-28 sm:mb-40"
      id="projects"
    >
      <SectionHeading title="Projects" />
      <div className="flex flex-col gap-8">
        {projectsData.map((project) => {
          return (
            <>
              <SingleProject key={project.id} {...project} />
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
