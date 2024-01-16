import ContactForm from "@/components/ContactForm";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <main className="py-24">
      <div className="container">
        <h1 className="text-center text-2xl font-medium mb-8">
          Testing the form
        </h1>
        <ContactForm />
      </div>
      <Toaster richColors position="top-right" closeButton />
    </main>
  );
}
