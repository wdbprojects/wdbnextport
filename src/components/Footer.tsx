const Footer = () => {
  return (
    <footer className="text-center pt-3 pb-4 px-2 sm:px-4 w-full bg-gray-200 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-[50rem] mx-auto text-gray-500">
        <small className="block mb-1">
          &copy; {new Date().getFullYear()} - WEBDEVBRO - All rights reserved
        </small>
        <p className="text-xs">
          <span className="font-semibold">About this website:</span> built with
          React & Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email
          & Resend, Vercel hosting.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
