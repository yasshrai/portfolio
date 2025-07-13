"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import frontendimg from "@/app/assets/frontendimg.jpg"
import backendimg from "@/app/assets/backendimg.jpg"
import databaseimg from "@/app/assets/databaseimg.jpg"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function Skills() {
  const skills = [
    {
      title: "Frontend Development",
      image: frontendimg,
      skills: "HTML, CSS, JavaScript, ReactJS, NextJS, Redux, TypeScript",
      color: "blue",
    },
    {
      title: "Backend Development",
      image: backendimg,
      skills: "Python, NodeJS, FastAPI, ExpressJS, C++",
      color: "purple",
    },
    {
      title: "Database and Version Control",
      image: databaseimg,
      skills: "Git, Github, MongoDB, MySQL, Docker",
      color: "emerald",
    },
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          gradient: "from-blue-500/5 via-transparent to-blue-400/5",
          shadow: "shadow-blue-500/10",
          hoverShadow: "group-hover:shadow-blue-400/20",
          border: "group-hover:border-blue-500/30",
        }
      case "purple":
        return {
          gradient: "from-purple-500/5 via-transparent to-purple-400/5",
          shadow: "shadow-purple-500/10",
          hoverShadow: "group-hover:shadow-purple-400/20",
          border: "group-hover:border-purple-500/30",
        }
      case "emerald":
        return {
          gradient: "from-emerald-500/5 via-transparent to-emerald-400/5",
          shadow: "shadow-emerald-500/10",
          hoverShadow: "group-hover:shadow-emerald-400/20",
          border: "group-hover:border-emerald-500/30",
        }
      default:
        return {
          gradient: "from-zinc-500/5 via-transparent to-zinc-400/5",
          shadow: "shadow-zinc-500/10",
          hoverShadow: "group-hover:shadow-zinc-400/20",
          border: "group-hover:border-zinc-500/30",
        }
    }
  }

  return (
    <main className="flex flex-col w-screen min-h-screen bg-black text-white overflow-hidden">
      {/* Enhanced Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />
        <div className="absolute right-0 top-0 h-[800px] w-[800px] bg-gradient-to-l from-zinc-800/5 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] bg-gradient-to-r from-zinc-700/5 to-transparent rounded-full blur-[100px]" />
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] bg-gradient-to-r from-zinc-600/3 to-zinc-500/3 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/3 h-[300px] w-[300px] bg-gradient-to-l from-cyan-500/2 to-teal-500/2 rounded-full blur-[100px]" />
        <div className="absolute top-1/4 left-1/4 h-[250px] w-[250px] bg-gradient-to-r from-blue-500/2 to-purple-500/2 rounded-full blur-[80px]" />
      </div>

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
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-teal-500 text-transparent bg-clip-text"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              My Skills
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
            </motion.p>
          </motion.div>

          {/* Enhanced Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
          >
            {skills.map((skill, index) => {
              const colorClasses = getColorClasses(skill.color)
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="w-full max-w-[400px] group relative"
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Multiple layered background effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/30 via-zinc-700/20 to-zinc-900/40 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${colorClasses.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="absolute inset-[-1px] bg-gradient-to-br from-zinc-600/20 via-zinc-500/10 to-zinc-700/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <Card
                    className={`relative h-full bg-gradient-to-br from-zinc-900/90 to-zinc-800/60 backdrop-blur-xl border border-zinc-700/50 hover:border-zinc-600/70 ${colorClasses.border} transition-all duration-500 overflow-hidden shadow-2xl shadow-zinc-900/50 hover:shadow-zinc-800/60 ${colorClasses.hoverShadow}`}
                  >
                    <CardHeader className="p-0 relative">
                      <div className="relative h-48 w-full overflow-hidden">
                        {/* Image background effects */}
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-zinc-900/30 to-transparent z-10" />
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/10 to-zinc-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                        <Image
                          src={skill.image || "/placeholder.svg"}
                          alt={skill.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />

                        {/* Enhanced overlay gradients */}
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-zinc-900/40 to-transparent z-20" />
                        <div
                          className={`absolute inset-0 bg-gradient-to-t from-${skill.color}-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20`}
                        />
                      </div>
                    </CardHeader>

                    <CardContent className="p-8 relative">
                      {/* Content background effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/10 to-zinc-900/20 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        <CardTitle className="text-2xl font-bold mb-6 text-white group-hover:text-zinc-100 transition-colors duration-300">
                          {skill.title}
                        </CardTitle>

                        {/* Enhanced skills display */}
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/20 to-zinc-700/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <p className="relative text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 leading-relaxed p-3 rounded-lg">
                            {skill.skills}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Additional Skills Section */}
          <motion.div variants={itemVariants} className="mt-24 text-center relative group">
            {/* Background effects for additional section */}
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/40 via-zinc-800/20 to-zinc-900/40 rounded-3xl blur-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-teal-500/3 to-cyan-600/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-[-2px] bg-gradient-to-br from-zinc-600/30 via-zinc-500/20 to-zinc-700/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/50 backdrop-blur-2xl border border-zinc-700/60 rounded-3xl p-12 shadow-2xl shadow-zinc-900/60 hover:shadow-zinc-800/70 transition-all duration-500">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-teal-500 text-transparent bg-clip-text group-hover:from-cyan-300 group-hover:to-teal-400 transition-all duration-300">
                Always Learning
              </h2>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                Technology evolves rapidly, and I&apos;m committed to continuous learning. I regularly explore new
                frameworks, tools, and best practices to stay at the forefront of web development.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  )
}
