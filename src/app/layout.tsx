import type React from "react"
import "./globals.css"
import Navbar from "./components/NavBar"
import { Toaster } from "@/components/ui/toaster"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"], weight: ["200", "400", "500", "600", "700", "800"] })
export const metadata: Metadata = {
  title: "Software Engineer Portfolio | Yash Rai - Full Stack Developer",
  description:
    "Explore the work of Yash Rai, a software engineer specializing in scalable web applications and intuitive user experiences using Next.js, React, and Node.js.",
  keywords: [
    "Yash Rai",
    "software engineer",
    "full stack developer",
    "web developer",
    "portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "web applications",
    "frontend",
    "backend",
  ],
  authors: [{ name: "Yash Rai" }],
  creator: "Yash Rai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yashrai.vercel.app/",
    siteName: "Yash Rai Portfolio",
    title: "Software Engineer Portfolio | Yash Rai - Full Stack Developer",
    description:
      "Explore the work of Yash Rai, a software engineer specializing in scalable web applications and intuitive user experiences using Next.js, React, and Node.js.",
    images: [
      {
        url: "https://yashrai.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio preview of Yash Rai - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Engineer Portfolio | Yash Rai - Full Stack Developer",
    description:
      "Explore the work of Yash Rai, a software engineer specializing in scalable web applications and intuitive user experiences using Next.js, React, and Node.js.",
    images: ["https://yashrai.vercel.app/og-image.png"],
    creator: "@yasshraii",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className=" bg-zinc-950">
      <body className={`${inter.className} bg-zinc-950 w-full h-full`}>
        <Navbar></Navbar>
        {children}
        <SpeedInsights />
        <Toaster />
      </body>
    </html>
  )
}
