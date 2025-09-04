import type React from "react"
import "./globals.css"
import Navbar from "./components/NavBar"
import { Toaster } from "@/components/ui/toaster"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"], weight: ["200", "400", "500", "600", "700", "800"] })

export const metadata: Metadata = {
  title: "Yash Rai | Software Engineer | Full Stack Developer",
  description: "The portfolio of Yash Rai, a full-stack developer specializing in building scalable web applications and creating seamless user experiences. Explore projects that turn innovative ideas into digital reality.",
  keywords: ["Yash Rai", "full stack developer", "web developer", "portfolio", "Next.js", "React", "TypeScript", "Node.js", "web applications"],
  authors: [{ name: "Yash Rai" }],
  creator: "Yash Rai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yashrai.vercel.app/",
    title: "Yash Rai | Software Engineer | Full Stack Developer",
    description: "The portfolio of Yash Rai, a full-stack developer specializing in building scalable web applications and creating seamless user experiences. Explore projects that turn innovative ideas into digital reality.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yash Rai's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Rai | Software Engineer | Full Stack Developer",
    description: "The portfolio of Yash Rai, a full-stack developer specializing in building scalable web applications and creating seamless user experiences. Explore projects that turn innovative ideas into digital reality.",
    images: ["/og-image.png"], 
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
