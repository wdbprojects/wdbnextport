import type { Metadata } from "next";
import { Montserrat, Inter, Mulish } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import ThemeProvider from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const mulish = Mulish({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WDB Portfolio",
  description: "Ronaldo Ortiz - React Developer - Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body
        className={`${mulish.className} relative pt-28 sm:pt-36 overflow-x-hidden w-full`}
      >
        <div className="hidden sm:block bg-[#FBE2E3] dark:bg-[#20171e] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
        <div className="hidden sm:block bg-[#DBD7FB] dark:bg-[#25242b] absolute -z-10 top-[-1rem] left-[11rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ActiveSectionContextProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            //disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
