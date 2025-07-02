import type React from "react"
import "./globals.css"
import Navbar from "./components/NavBar"
import { Toaster } from "@/components/ui/toaster"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"], weight: ["200", "400", "500", "600", "700", "800"] })

export const metadata: Metadata = {
  title: "yash's portfolio",
  description: "yash rai portfolio a full stack developer",
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
