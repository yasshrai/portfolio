import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import { Toaster } from "@/components/ui/toaster"

const kanit = Kanit({ subsets: ["latin"], weight: "200" });

export const metadata: Metadata = {
  title: "yash's portfolio",
  description: "yash rai portfolio a full stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" bg-zinc-950">
      <body className={`${kanit.className} bg-zinc-950 w-full h-full`}>
        <Navbar></Navbar>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
