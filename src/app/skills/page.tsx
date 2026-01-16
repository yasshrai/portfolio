"use client"

import { motion } from "framer-motion"
import { Code, Database, Cpu } from "lucide-react"
import frontendimg from "@/app/assets/frontendimg.jpg"
import backendimg from "@/app/assets/backendimg.jpg"
import databaseimg from "@/app/assets/databaseimg.jpg"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const skills = [
  {
    title: "Frontend Development",
    image: frontendimg,
    skills: ["HTML", "CSS", "JavaScript", "ReactJS", "NextJS", "Redux", "TypeScript"],
    color: "blue",
    icon: Code,
    description: "Creating beautiful, responsive user interfaces",
  },
  {
    title: "Backend Development",
    image: backendimg,
    skills: ["Python", "NodeJS", "FastAPI", "ExpressJS", "C++"],
    color: "purple",
    icon: Cpu,
    description: "Building robust server-side applications",
  },
  {
    title: "Database & DevOps",
    image: databaseimg,
    skills: ["Git", "Github", "MongoDB", "MySQL", "Linux", "Docker"],
    color: "emerald",
    icon: Database,
    description: "Managing data and deployment workflows",
  },
]

const getColorClasses = () => {
  return {
    gradient: "from-zinc-500/5 to-zinc-500/5",
    accent: "text-zinc-100",
  }
}

export default function Skills() {
  return (
    <main className="flex flex-col w-screen min-h-screen bg-black text-white overflow-hidden">
      {/* Background */}


      <section className="relative z-10 py-24 px-6 mt-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              My Skills
            </motion.h1>
            <motion.p
              className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              A comprehensive showcase of my technical expertise and creative solutions
            </motion.p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {skills.map((skill, index) => {
              const IconComponent = skill.icon

              return (
                <motion.div
                  key={index}
                  className="w-full max-w-[400px] group"
                  variants={item}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 overflow-hidden">
                    <CardHeader className="p-0 relative">
                      <motion.div
                        className="relative h-48 w-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={skill.image}
                          alt={skill.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <div
                          className="absolute top-4 right-4 p-2 rounded-lg bg-black/60 backdrop-blur-sm border border-zinc-700/50"
                        >
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                      </motion.div>
                    </CardHeader>

                    <CardContent className="p-6">
                      <CardTitle className="text-xl font-bold mb-2 text-white">
                        {skill.title}
                      </CardTitle>
                      <p className="text-sm text-zinc-400 mb-4">
                        {skill.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {skill.skills.map((skillItem, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 text-xs font-medium bg-zinc-800/60 text-zinc-300 rounded-full border border-zinc-700/50"
                          >
                            {skillItem}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Additional Section */}
          <motion.div
            className="mt-24 text-center relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="relative bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/60 rounded-2xl p-8"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Always Learning
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                Technology evolves rapidly, and I&apos;m committed to continuous learning. I regularly explore new
                frameworks, tools, and best practices to stay at the forefront of web development.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
