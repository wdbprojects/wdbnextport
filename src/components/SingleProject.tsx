"use client";
import { useRef } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { useScroll, motion, useTransform } from "framer-motion";

type ProjectProps = {
  id: number;
  title: string;
  description: string;
  imageUrl: any;
  tags: any;
};

const SingleProject = (project: ProjectProps) => {
  const { id, title, description, imageUrl, tags } = project;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      <Card key={id} className="w-full sm:w-[500px] p-4">
        <div className="flex gap-3 flex-col sm:flex-row">
          <CardHeader className="p-1 flex-1 relative">
            <Image
              src={imageUrl}
              alt={title}
              quality={95}
              className="sm:absolute sm:top-0 sm:left-0 shadow-2xl"
            />
          </CardHeader>

          <CardContent className="flex-1 p-0 m-0 sm:ml-2">
            <CardTitle className="mb-2">{title}</CardTitle>
            <CardDescription className="text-xs md:text-sm leading-5">
              {description}
            </CardDescription>
          </CardContent>
        </div>
        <CardFooter className="flex justify-between"></CardFooter>
        <div className="flex w-full flex-wrap gap-2 justify-center">
          {tags.map((tag: any, index: number) => {
            return (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            );
          })}
        </div>
      </Card>
    </motion.div>
  );
};

export default SingleProject;
