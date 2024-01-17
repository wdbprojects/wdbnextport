import ContactForm from "@/components/ContactForm";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center px-2 sm:px-4 min-h-[2000px]">
        <ContactForm />
      </main>
      <Toaster richColors position="top-right" closeButton />
    </>
  );
}
