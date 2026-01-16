"use client"

import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"
import chatappimage from "@/app/assets/chatappbg.jpg"
import bookstorebg from "@/app/assets/bookstorebg.png"
import portfoliobg from "@/app/assets/portfolioproject.jpg"
import adminpanelbg from "@/app/assets/adminpanel.jpg"
import dating from "@/app/assets/dating.jpg"
import devorabg from "@/app/assets/devora.png"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const projects = [
  {
    image: chatappimage,
    title: "Chat Application",
    description:
      "A chat app built with MongoDB, Express.js, React, Node.js enables real-time messaging and user authentication with dynamic UI updates.",
    link: "https://chatapp-project-57sf.onrender.com",
    color: "blue",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    image: bookstorebg,
    title: "Book Store",
    description:
      "A bookstore inventory management system built with the MERN stack allows for efficient tracking of book stock with a user-friendly interface and real-time updates.",
    link: "https://bookstore-frontend-76df.onrender.com/",
    color: "emerald",
    tech: ["MERN Stack", "Inventory Management", "Real-time Updates"],
  },
  {
    image: dating,
    title: "Dating Site",
    description:
      "A dating platform built using Next.js, NextAuth, MongoDB, and Firebase for user authentication and real-time messaging. The site offers a seamless matchmaking experience with user profiles, chat functionality, and personalized recommendations.",
    link: "https://campusconnection.vercel.app/",
    color: "pink",
    tech: ["Next.js", "NextAuth", "MongoDB", "Firebase"],
  },
  {
    image: adminpanelbg,
    title: "College Admin Panel",
    description:
      "A college admin panel built with Next.js and Express.js provides a dynamic and efficient interface for managing student records, courses, and faculty data, featuring secure authentication and real-time updates.",
    link: "https://collegeadminpanel.vercel.app",
    color: "purple",
    tech: ["Next.js", "Express.js", "Admin Dashboard", "Authentication"],
  },
  {
    image: portfoliobg,
    title: "Portfolio",
    description:
      "A personal portfolio website showcasing my skills, projects, and professional journey. Built with modern web technologies, it features an elegant design, responsive layout, and smooth navigation to provide visitors with a seamless experience while exploring my work and achievements.",
    link: "https://yashrai.vercel.app",
    color: "cyan",
    tech: ["Modern Web Tech", "Responsive Design", "Smooth Navigation"],
  },
  {
    image: devorabg,
    title: "Devora",
    description:
      "A Fedora-based Linux distribution that provides a preconfigured GNOME desktop environment with carefully curated extensions and optimizations. Devora offers users a polished, out-of-the-box experience with enhanced productivity tools, beautiful themes, and seamless integration of essential GNOME extensions for an improved workflow.",
    link: "https://devoralinux.vercel.app",
    color: "orange",
    tech: ["Linux", "Fedora", "GNOME", "Linux Distribution", "System Configuration"],
  },
]

export default function Project() {
  return (
    <main className="flex flex-col w-screen min-h-screen bg-black text-white overflow-hidden">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 py-24 px-6 mt-16"
      >
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 text-white"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              My Projects
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              A showcase of my development journey, featuring full-stack applications built with modern technologies and
              best practices.
            </motion.p>
          </motion.div>

          {/* Enhanced Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
                color={project.color}
                tech={project.tech}
                index={index}
              />
            ))}
          </motion.div>

          {/* Additional Section */}
          <motion.div variants={itemVariants} className="mt-24 text-center relative group">
            <div className="relative bg-zinc-900/40 border border-zinc-800 rounded-3xl p-12 hover:border-zinc-700 transition-colors">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                More Projects Coming Soon
              </h2>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                I&apos;m constantly working on new projects and exploring innovative technologies. Stay tuned for more
                exciting developments and creative solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  )
}
