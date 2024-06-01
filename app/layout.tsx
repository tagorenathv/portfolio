import Header from "@/components/header";
import { Nunito } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Tagorenath V | Software Engineer & Open-Source Contributor",
  description: "Tagorenath V is a seasoned software engineer specializing in scalable, cost-efficient software architectures. Explore my portfolio to see my contributions to open-source projects and my role in supporting startups through digital transformation.",
  keywords: "Tagorenath, Tagorenath V, Software Engineer, Open-Source Contributor, Scalable Architecture, Cost Efficiency, Startup Technology Advisor, Digital Transformation, Web Development, Mobile Development",
  author: "Tagorenath V",
  og: {
    title: "Tagorenath V | Software Engineer & Open-Source Contributor",
    type: "website",
    locale: "en_US",
    url: "https://www.tagorenathv.me/",
    image: "https://www.tagorenathv.me/profile-pic.png",
    description: "Discover the innovative work of Tagorenath V, a software engineer with deep expertise in developing scalable and cost-efficient solutions. Check out my skills, projects, certification and insights into digital transformation for startups."
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${nunito.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Analytics />
            <SpeedInsights/>

            <Toaster position="top-right" />
            {/* <ThemeSwitch /> */}
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
