import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SectionDivider from "@/components/section-divider";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center px-2 sm:px-4">
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <ContactForm />
      </main>
      <Toaster richColors position="top-right" closeButton />
    </>
  );
}
