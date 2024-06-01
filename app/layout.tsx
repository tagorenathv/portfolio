import Header from "@/components/header";
import { Nunito } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from "next/head";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Tagorenath V | Software Engineer & Open-Source Contributor",
  description: "Tagorenath V is a seasoned software engineer specializing in scalable, cost-efficient software architectures. Explore my portfolio to see my contributions to open-source projects and my role in supporting startups through digital transformation.",
  keywords: "Tagorenath, Tagorenath V, Software Engineer, Open-Source Contributor, Scalable Architecture, Cost Efficiency, Startup Technology Advisor, Digital Transformation, Web Development, Mobile Development",
  author: "Tagorenath V",
  siteName: 'Tagorenath V Portfolio',
  openGraph: {
    title: "Tagorenath V | Software Engineer & Open-Source Contributor",
    type: "website",
    locale: "en_US",
    siteName: 'Tagorenath V Portfolio',
    url: "https://www.tagorenathv.me/",
    images: [
      {
        url: "https://www.tagorenathv.me/profile-pic.png",
        width: 800,
        height: 600,
      },
    ],
    description: "I am Tagorenath V, a seasoned software engineer specializing in designing scalable and cost-efficient software architectures. Dive into my portfolio to see the technologies I work with, detailed case studies of projects I've led, and the key achievements throughout my career. Additionally, I am committed to contributing to open-source projects and supporting startups in their digital transformation efforts, leveraging my expertise to foster innovation and growth.",
  },
  twitter: {
    card: 'summary',
    title: "Tagorenath V | Software Engineer & Open-Source Contributor",
    description: "I am Tagorenath V, a seasoned software engineer specializing in designing scalable and cost-efficient software architectures. Dive into my portfolio to see the technologies I work with, detailed case studies of projects I've led, and the key achievements throughout my career. Additionally, I am committed to contributing to open-source projects and supporting startups in their digital transformation efforts, leveraging my expertise to foster innovation and growth.",
    creator: 'Tagorenath V',
    images: [
      {
        url: "https://www.tagorenathv.me/profile-pic.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
      </Head>
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
