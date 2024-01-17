import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { UseActiveSectionContext } from "@/context/ActiveSectionContext";
import type { SectionName } from "./types";

export const useInViewHook = (sectionName: SectionName, threshold = 0.75) => {
  const { ref, inView } = useInView({ threshold: threshold });

  const { setActiveSection, timeOfLastClick } = UseActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref };
};
