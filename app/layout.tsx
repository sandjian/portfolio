import { cn } from "@/lib/utils";
import { ScrollToTopButton } from "@/components/ui/scroll-to-top";

import {Jura} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import type { Metadata } from "next";

const jura = Jura({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
metadataBase: new URL('https://alejandro-sandjian.vercel.app'),

  title: "Alejandro Sandjian | Desarrollador Full-Stack", 
  
  description: "Portfolio de Alejandro Sandjian, Desarrollador Full-Stack",
  
  authors: [{ name: "Alejandro Sandjian" }],

  keywords: [
    "Alejandro Sandjian",
    "desarrollador full stack",
    "programador",
    "portafolio",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "JavaScript",
    "desarrollo web",
    "Mar del Plata", 
    "Argentina",
  ],

  openGraph: {
    title: "Alejandro Sandjian | Desarrollador Full-Stack",
    description: "Explora el portfolio de Alejandro Sandjian, con proyectos destacados en desarrollo web full-stack.",
    url: "https://sandjian-alejandro.vercel.app", 
    siteName: "Alejandro Sandjian | Portafolio",
    images: [
      {
        url: "/portfolio.jpg", 
        width: 1200,
        height: 630,
        alt: "Alejandro Sandjian Portafolio | Desarrollo Web",
      },
    ],
    locale: "es_AR", 
    type: "website",
  },

  twitter: {
    card: "summary_large_image", 
    title: "Alejandro Sandjian | Desarrollador Full-Stack",
    description: "Descubre los proyectos web de Alejandro Sandjian en su portfolio.",
    images: ["https://alejandro-sandjian.vercel.app/portfolio.jpg"],
  },

  icons: {
    icon: "/favicon.ico", 
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
};





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={cn(
          jura.className,
          "antialiased bg-background "
        )}
      >
          <Navbar />
          {children}
          <Footer/>
          <ScrollToTopButton />
      </body>
    </html>
  );
}
 