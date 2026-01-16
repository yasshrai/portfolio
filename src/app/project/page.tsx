"use client"

import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"
import chatappimage from "@/app/assets/chatappbg.jpg"
import bookstorebg from "@/app/assets/bookstorebg.png"
import portfoliobg from "@/app/assets/portfolioproject.jpg"
import adminpanelbg from "@/app/assets/adminpanel.jpg"
import dating from "@/app/assets/dating.jpg"
import devorabg from "@/app/assets/devora.png"

const projects = [
  {
    image: chatappimage,
    title: "Chat Application",
    description: "Real-time messaging platform with instant updates and auth.",
    link: "https://chatapp-project-57sf.onrender.com",
    tech: ["MERN Stack", "Socket.io"],
  },
  {
    image: bookstorebg,
    title: "Book Store",
    description: "Inventory management system for efficient stock tracking.",
    link: "https://bookstore-frontend-76df.onrender.com/",
    tech: ["MERN Stack", "Redux"],
  },
  {
    image: dating,
    title: "Dating Site",
    description: "Platform with matchmaking, profiles, and real-time chat.",
    link: "https://campusconnection.vercel.app/",
    tech: ["Next.js", "Firebase", "MongoDB"],
  },
  {
    image: adminpanelbg,
    title: "College Admin",
    description: "Dynamic interface for managing student and faculty data.",
    link: "https://collegeadminpanel.vercel.app",
    tech: ["Next.js", "Express.js"],
  },
  {
    image: portfoliobg,
    title: "Portfolio",
    description: "Personal showcase site with smooth animations.",
    link: "https://yashrai.vercel.app",
    tech: ["Next.js", "Framer Motion"],
  },
  {
    image: devorabg,
    title: "Devora Linux",
    description: "Fedora-based distro with curated GNOME extensions.",
    link: "https://devoralinux.vercel.app",
    tech: ["Linux", "Fedora", "Shell"],
  },
]

export default function Project() {
  return (
    <main className="flex flex-col w-screen min-h-screen bg-black text-white overflow-hidden px-6 pt-32 pb-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white hover:text-zinc-200 transition-colors cursor-default w-fit">
            Selected<br /><span className="text-zinc-600">Works</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-lg leading-relaxed">
            A collection of projects exploring web development, design systems, and user experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </motion.div>

        {/* Footer / More */}
        <motion.div
          className="mt-32 pt-12 border-t border-zinc-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-zinc-500 text-sm">
            More experiments on <a href="https://github.com/yasshrai" target="_blank" className="text-white hover:underline underline-offset-4 decoration-zinc-700">GitHub</a>.
          </p>
        </motion.div>
      </div>
    </main>
  )
}
