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
import { FaLink } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import Link from "next/link";

type ProjectProps = {
  id: number;
  title: string;
  description: string;
  imageUrl: any;
  tags: any;
  dataFiles: Boolean;
  url: string;
  repo: string;
};

const SingleProject = (project: ProjectProps) => {
  const { id, title, description, imageUrl, tags } = project;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  console.log(project);

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      <Card key={id} className="w-full sm:w-[650px] px-4 pt-4 pb-0">
        <div className="flex gap-3 flex-col">
          <CardHeader className="p-1 flex-1">
            <Image
              src={imageUrl}
              alt={title}
              quality={95}
              className="shadow-2xl"
            />
          </CardHeader>

          <CardContent className="flex-1 p-0 m-0 sm:ml-2">
            <CardTitle className="mb-2 text-xl">{title}</CardTitle>
            <CardDescription className="text-xs md:text-sm leading-5">
              {description}
            </CardDescription>
          </CardContent>
        </div>
        <Separator className="my-4" />
        <CardFooter className="flex flex-col gap-4 mt-4">
          {/* LINKS */}
          {project.dataFiles && (
            <div className="flex gap-4 justify-center items-center">
              <Button size="sm">
                <Link href={project.url} className="flex" target="_blank">
                  <FaLink className="mr-2 h-4 w-4" /> <span>App Live</span>
                </Link>
              </Button>
              <Separator orientation="vertical" className="h-4" />
              <Button size="sm">
                <Link href={project.repo} className="flex" target="_blank">
                  <FaGithubAlt className="mr-2 h-4 w-4" />{" "}
                  <span>Repository</span>
                </Link>
              </Button>
            </div>
          )}

          {/* BADGES */}
          <div className="flex w-full flex-wrap gap-2 justify-center">
            {tags.map((tag: any, index: number) => {
              return (
                <Badge key={index} variant="outline">
                  {tag}
                </Badge>
              );
            })}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default SingleProject;
