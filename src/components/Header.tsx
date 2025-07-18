"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import { UseActiveSectionContext } from "@/context/ActiveSectionContext";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    UseActiveSectionContext();

  const { setTheme } = useTheme();

  return (
    <header className="z-[999] relative">
      <div className="fixed bottom-[1rem] right-[1rem] md:top-[2rem] sm:right-[2rem] z-5000">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 focus:outline-none" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => {
                setTheme("light");
              }}
            >
              Light
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setTheme("dark");
              }}
            >
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setTheme("system");
              }}
            >
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <motion.div
        className="fixed top-0 left-1/2  h-[4.5rem] w-full rounded-none border border-whiteborder-opacity-40 bg-white bg-opacity-80 dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex flex-row flex-wrap justify-center items-center gap-y-1 w-[22rem] text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => {
            return (
              <motion.li
                key={link.hash}
                className="h-3/4 flex items-center justify-center relative"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  href={link.hash}
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                    {
                      "dark:!text-gray-200 text-gray-950":
                        activeSection === link.name,
                    },
                  )}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}
                  {link.name === activeSection && (
                    <motion.span
                      className="absolute bg-gray-200 rounded-full inset-0 -z-10 dark:bg-gray-800"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
