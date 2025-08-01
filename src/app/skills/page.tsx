"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Globe, GitBranch, Cpu, Zap } from "lucide-react"
import { useRef, useEffect, useState } from "react"
import frontendimg from "@/app/assets/frontendimg.jpg"
import backendimg from "@/app/assets/backendimg.jpg"
import databaseimg from "@/app/assets/databaseimg.jpg"


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.8,
    rotateY: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const FloatingParticle = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        y: [-20, -100],
        x: [0, Math.random() * 40 - 20],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: Math.random() * 2,
      }}
    />
  )
}

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

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
      skills: ["Git", "Github", "MongoDB", "MySQL", "Docker"],
      color: "emerald",
      icon: Database,
      description: "Managing data and deployment workflows",
    },
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          gradient: "from-blue-500/10 via-blue-400/5 to-cyan-400/10",
          shadow: "shadow-blue-500/20",
          hoverShadow: "group-hover:shadow-blue-400/40",
          border: "group-hover:border-blue-500/50",
          glow: "group-hover:shadow-blue-400/30",
          accent: "text-blue-400",
        }
      case "purple":
        return {
          gradient: "from-purple-500/10 via-purple-400/5 to-pink-400/10",
          shadow: "shadow-purple-500/20",
          hoverShadow: "group-hover:shadow-purple-400/40",
          border: "group-hover:border-purple-500/50",
          glow: "group-hover:shadow-purple-400/30",
          accent: "text-purple-400",
        }
      case "emerald":
        return {
          gradient: "from-emerald-500/10 via-emerald-400/5 to-teal-400/10",
          shadow: "shadow-emerald-500/20",
          hoverShadow: "group-hover:shadow-emerald-400/40",
          border: "group-hover:border-emerald-500/50",
          glow: "group-hover:shadow-emerald-400/30",
          accent: "text-emerald-400",
        }
      default:
        return {
          gradient: "from-zinc-500/10 via-zinc-400/5 to-zinc-400/10",
          shadow: "shadow-zinc-500/20",
          hoverShadow: "group-hover:shadow-zinc-400/40",
          border: "group-hover:border-zinc-500/50",
          glow: "group-hover:shadow-zinc-400/30",
          accent: "text-zinc-400",
        }
    }
  }

  return (
    <main
      ref={containerRef}
      className="relative flex flex-col w-screen min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Enhanced Animated Background */}
      <motion.div className="pointer-events-none fixed inset-0" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute right-0 top-0 h-[800px] w-[800px] bg-gradient-to-l from-blue-800/10 to-transparent rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-0 left-0 h-[600px] w-[600px] bg-gradient-to-r from-purple-700/10 to-transparent rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] bg-gradient-to-r from-emerald-600/8 to-teal-500/8 rounded-full blur-[80px]"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Mouse follower effect */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-[100px] pointer-events-none"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 200,
          }}
        />
      </motion.div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <FloatingParticle delay={i * 0.2} />
          </div>
        ))}
      </div>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 py-24 px-6 mt-16"
      >
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header with 3D effect */}
          <motion.div variants={itemVariants} className="text-center mb-20 relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-3xl blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <motion.h1
              className="relative text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-500 text-transparent bg-clip-text"
              whileHover={{
                scale: 1.05,
                rotateX: 5,
                transition: { duration: 0.3 },
              }}
              style={{
                textShadow: "0 0 30px rgba(34, 211, 238, 0.3)",
              }}
            >
              My Skills
            </motion.h1>

            <motion.div variants={itemVariants} className="relative">
              <Zap className="inline-block w-6 h-6 text-cyan-400 mr-3" />
              <span className="text-xl text-zinc-300 max-w-2xl leading-relaxed">
                A comprehensive showcase of my technical expertise and creative solutions
              </span>
              <Zap className="inline-block w-6 h-6 text-cyan-400 ml-3" />
            </motion.div>
          </motion.div>

          {/* Enhanced Skills Grid with 3D cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center"
          >
            {skills.map((skill, index) => {
              const colorClasses = getColorClasses(skill.color)
              const IconComponent = skill.icon

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="w-full max-w-[420px] group relative perspective-1000"
                  whileHover={{
                    y: -15,
                    rotateY: 5,
                    rotateX: 5,
                    transition: { duration: 0.4 },
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Enhanced layered background effects */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-zinc-800/40 via-zinc-700/30 to-zinc-900/50 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3 },
                    }}
                  />

                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${colorClasses.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3 },
                    }}
                  />

                  <div className="absolute inset-[-2px] bg-gradient-to-br from-zinc-600/30 via-zinc-500/20 to-zinc-700/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <Card
                    className={`relative h-full bg-gradient-to-br from-zinc-900/95 to-zinc-800/80 backdrop-blur-2xl border border-zinc-700/60 hover:border-zinc-600/80 ${colorClasses.border} transition-all duration-500 overflow-hidden shadow-2xl ${colorClasses.shadow} ${colorClasses.hoverShadow} rounded-3xl`}
                  >
                    <CardHeader className="p-0 relative">
                      <div className="relative h-56 w-full overflow-hidden rounded-t-3xl">
                        {/* Enhanced image effects */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/40 to-transparent z-10"
                          whileHover={{
                            opacity: 0.6,
                            transition: { duration: 0.3 },
                          }}
                        />

                        <motion.div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 to-zinc-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                        <Image
                          src={skill.image || "/placeholder.svg"}
                          alt={skill.title}
                          fill
                          className="object-cover group-hover:scale-115 transition-transform duration-700"
                        />

                        {/* Floating icon */}
                        <motion.div
                          className={`absolute top-6 right-6 z-30 p-3 rounded-2xl bg-black/60 backdrop-blur-sm border border-zinc-700/50 ${colorClasses.accent}`}
                          whileHover={{
                            scale: 1.1,
                            rotate: 5,
                            transition: { duration: 0.2 },
                          }}
                        >
                          <IconComponent className="w-6 h-6" />
                        </motion.div>

                        {/* Enhanced overlay gradients */}
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/50 to-transparent z-20" />
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-t from-${skill.color}-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20`}
                        />
                      </div>
                    </CardHeader>

                    <CardContent className="p-8 relative">
                      {/* Content background effect */}
                      <motion.div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 to-zinc-900/30 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        <CardTitle className="text-2xl font-bold mb-3 text-white group-hover:text-zinc-100 transition-colors duration-300">
                          {skill.title}
                        </CardTitle>

                        <p
                          className={`text-sm ${colorClasses.accent} mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                        >
                          {skill.description}
                        </p>

                        {/* Enhanced skills display with individual skill tags */}
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {skill.skills.map((skillItem, skillIndex) => (
                              <motion.span
                                key={skillIndex}
                                className={`px-3 py-1 text-xs font-medium bg-zinc-800/60 ${colorClasses.accent} rounded-full border border-zinc-700/50 group-hover:border-zinc-600/70 transition-all duration-300`}
                                whileHover={{
                                  scale: 1.05,
                                  backgroundColor: "rgba(39, 39, 42, 0.8)",
                                  transition: { duration: 0.2 },
                                }}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: skillIndex * 0.1 }}
                              >
                                {skillItem}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Enhanced Additional Skills Section */}
          <motion.div variants={itemVariants} className="mt-32 text-center relative group">
            {/* Multiple background layers */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-zinc-900/60 via-zinc-800/40 to-zinc-900/60 rounded-3xl blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-700"
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.7, 0.9, 0.7],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <motion.div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-teal-500/5 to-cyan-600/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute inset-[-3px] bg-gradient-to-br from-zinc-600/40 via-zinc-500/30 to-zinc-700/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <motion.div
              className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-800/70 backdrop-blur-3xl border border-zinc-700/70 rounded-3xl p-16 shadow-2xl shadow-zinc-900/80 hover:shadow-zinc-800/90 transition-all duration-500"
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="flex items-center justify-center mb-8"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
              >
                <GitBranch className="w-8 h-8 text-cyan-400 mr-4" />
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-500 text-transparent bg-clip-text group-hover:from-cyan-300 group-hover:to-teal-400 transition-all duration-300">
                  Always Learning
                </h2>
                <Globe className="w-8 h-8 text-teal-400 ml-4" />
              </motion.div>

              <motion.p
                className="text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed group-hover:text-zinc-300 transition-colors duration-300"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                Technology evolves rapidly, and I&apos;m committed to continuous learning. I regularly explore new
                frameworks, tools, and best practices to stay at the forefront of web development and deliver
                cutting-edge solutions.
              </motion.p>

              {/* Progress indicators */}
              <div className="mt-12 flex justify-center space-x-8">
                {["Innovation", "Quality", "Performance"].map((item, index) => (
                  <motion.div
                    key={item}
                    className="text-center"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <motion.div
                      className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 flex items-center justify-center"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 10 + index * 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400" />
                    </motion.div>
                    <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  )
}
