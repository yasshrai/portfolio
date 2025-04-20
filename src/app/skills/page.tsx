"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import frontendimg from "@/app/assets/frontendimg.jpg"
import backendimg from "@/app/assets/backendimg.jpg"
import databaseimg from "@/app/assets/databaseimg.jpg"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Skills() {
  const skills = [
    {
      title: "Frontend Development",
      image: frontendimg,
      skills: "HTML, CSS, JavaScript, ReactJS, NextJS, Redux, TypeScript",
    },
    {
      title: "Backend Development",
      image: backendimg,
      skills: "Python, NodeJS, FastAPI, ExpressJS, C++",
    },
    {
      title: "Database and Version Control",
      image: databaseimg,
      skills: "Git, Github, MongoDB, MySQL, Docker",
    },
  ]

  return (
    <main className="flex flex-col w-screen min-h-screen bg-gradient-to-b from-black to-zinc-950 text-white overflow-hidden">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-zinc-950/95" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/5 blur-[100px]" />
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
            My Skills
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full sm:w-[350px] md:w-[400px]"
              >
                <Card className="h-full bg-zinc-950 border-zinc-800 hover:bg-zinc-900 transition-all duration-300 backdrop-blur-sm overflow-hidden group">
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={skill.image || "/placeholder.svg"}
                        alt={skill.title}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-2xl font-bold mb-4 text-white">{skill.title}</CardTitle>
                    <p className="text-zinc-400">{skill.skills}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  )
}

