"use client"

import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"
import chatappimage from "@/app/assets/chatappbg.jpg"
import bookstorebg from "@/app/assets/bookstorebg.png"
import portfoliobg from "@/app/assets/portfolioproject.jpg"
import adminpanelbg from "@/app/assets/adminpanel.jpg"

const projects = [
  {
    image: chatappimage,
    title: "Chat Application",
    description:
      "A chat app built with MongoDB, Express.js, React, Node.js enables real-time messaging and user authentication with dynamic UI updates.",
    link: "https://chatapp-project-57sf.onrender.com",
  },
  {
    image: bookstorebg,
    title: "Book Store",
    description:
      "A bookstore inventory management system built with the MERN stack allows for efficient tracking of book stock with a user-friendly interface and real-time updates.",
    link: "https://bookstore-frontend-76df.onrender.com/",
  },
  {
    image: adminpanelbg,
    title: "College Admin Panel",
    description:
      "A college admin panel built with Next.js and Express.js provides a dynamic and efficient interface for managing student records, courses, and faculty data, featuring secure authentication and real-time updates.",
    link: "https://collegeadminpanel.vercel.app",
  },
  {
    image: portfoliobg,
    title: "Portfolio",
    description:
      "A personal portfolio website showcasing my skills, projects, and professional journey. Built with modern web technologies, it features an elegant design, responsive layout, and smooth navigation to provide visitors with a seamless experience while exploring my work and achievements.",
    link: "https://yashrai.vercel.app",
  },
]

export default function Project() {
  return (
    <main className="flex flex-col w-screen min-h-screen bg-gradient-to-b from-black to-zinc-950 text-white overflow-hidden">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-zinc-950/90" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 py-16 px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
          >
            My Projects
          </motion.h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  )
}

