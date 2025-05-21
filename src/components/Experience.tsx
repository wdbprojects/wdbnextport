"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { useInViewHook } from "@/lib/hooks";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWorkHistory } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { experiencesData } from "@/lib/data";
import { useTheme } from "next-themes";

const Experience = () => {
  const { ref } = useInViewHook("Experience", 0.7);
  const { theme } = useTheme();

  return (
    <section
      ref={ref}
      id="experience"
      className="text-center scroll-mt-28 w-full mb-28 sm:mb-40"
    >
      <SectionHeading title="Experience" />

      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => {
          return (
            <VerticalTimelineElement
              key={index}
              date={item.date}
              icon={item.icon}
              visible={true}
              contentStyle={{
                visibility: "visible",
                background:
                  theme === "light" ? "#F3F4F6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border:
                  theme === "light" ? "1px solid rgba(0, 0, 0, 0.05)" : "#FFF",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9CA3AF"
                    : "0.4rem solid rgba(255, 255, 255, 0.5",
                borderLeft: "7px solid transparent",
                borderBottom: "7px solid transparent",
                borderTop: "7px solid transparent",
              }}
              iconStyle={{
                visibility: "visible",
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold !capitalize dark:text-gray-200">
                {item.title}
              </h3>
              <div className="flex items-center justify-start gap-4 text-sm">
                <span>{item.company}</span>
                {" | "}
                <span>{item.location}</span>
              </div>

              <ul className="!text-sm !font-light !mt-2 !text-gray-500 space-y-2">
                {item.description.map((desc) => {
                  return (
                    <li key={desc.id} className="list-disc">
                      {desc.text}
                    </li>
                  );
                })}
              </ul>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
