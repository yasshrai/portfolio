"use client"

import Image from "next/image"
import { Inter } from "next/font/google"
import Typewriter from "typewriter-effect"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Code, Briefcase, User, Folder, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import hero from "@/app/assets/hero.png"

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function Home() {
  return (
    <main className="flex flex-col w-screen min-h-screen bg-black text-white overflow-hidden">
      {/* Enhanced Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />
        <div className="absolute right-0 top-0 h-[800px] w-[800px] bg-gradient-to-l from-zinc-800/5 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] bg-gradient-to-r from-zinc-700/5 to-transparent rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] bg-gradient-to-r from-zinc-600/3 to-zinc-500/3 rounded-full blur-[80px]" />
      </div>

      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row w-screen min-h-[calc(100vh-80px)] items-center justify-center gap-12 py-20 px-6 ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 max-w-2xl z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 rounded-full text-sm text-zinc-300 mb-6">
              👋 Welcome to my digital space
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`text-5xl lg:text-7xl font-bold mb-8 ${inter.className} tracking-tight leading-tight`}
          >
            <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-300 text-transparent bg-clip-text">
              Code. Create.
            </span>
            <br />
            <span className="text-4xl lg:text-6xl text-zinc-400 font-medium">Innovate.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className={`text-2xl lg:text-3xl font-semibold text-white mb-4 ${inter.className}`}>
              Hi, I'm Yash Rai
            </h2>
            <div className={`text-xl lg:text-2xl font-medium text-zinc-300 ${inter.className} h-16`}>
              <Typewriter
                options={{ loop: true }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("building scalable web applications")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("crafting seamless user experiences")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("solving complex problems with code")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("turning ideas into digital reality")
                    .pauseFor(2500)
                    .start()
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <Button asChild size="lg" className="bg-white text-black hover:bg-zinc-200 font-semibold">
              <Link href="/project">
                View My Work <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-zinc-600 text-white hover:bg-stone-950  hover:text-gray-200 bg-transparent"
            >
              <Link href="/about">About Me</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex gap-4"
          >
            <a
              href="https://github.com/yasshrai"
              target="blank"
              className="p-3 bg-zinc-800/50 border border-zinc-700/50 rounded-full hover:bg-zinc-700/50 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/yasshrai/"
              target="blank"
              className="p-3 bg-zinc-800/50 border border-zinc-700/50 rounded-full hover:bg-zinc-700/50 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:yash2154rai@gmail.com"
              className="p-3 bg-zinc-800/50 border border-zinc-700/50 rounded-full hover:bg-zinc-700/50 transition-colors"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex-1 max-w-lg relative group"
        >
          {/* Multiple layered background effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/30 via-zinc-600/20 to-zinc-800/30 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-700" />
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/20 to-zinc-900/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          <div className="absolute inset-[-1px] bg-gradient-to-br from-zinc-600/20 via-zinc-500/10 to-zinc-700/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl shadow-zinc-900/50 hover:shadow-zinc-800/60 transition-all duration-500">
            <Image
              src={hero || "/placeholder.svg"}
              alt="Yash Rai - Full Stack Developer"
              width={500}
              height={500}
              className="w-full h-auto relative z-10 rounded-2xl group-hover:scale-105 transition-transform duration-700"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 via-transparent to-zinc-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative py-24 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${inter.className} tracking-tight`}>
              Transforming Ideas Into
              <span className="block bg-gradient-to-r from-zinc-200 to-zinc-400 text-transparent bg-clip-text">
                Digital Solutions
              </span>
            </h2>
            <p className={`text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed ${inter.className}`}>
              I specialize in creating robust, scalable applications that solve real-world problems. With expertise
              spanning the full development stack, I'm passionate about writing clean code, implementing best practices,
              and delivering exceptional user experiences.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative">
              {/* Enhanced background layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/30 via-zinc-700/20 to-zinc-900/40 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-[-1px] bg-gradient-to-br from-zinc-600/20 via-zinc-700/10 to-zinc-800/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-800/60 backdrop-blur-xl border border-zinc-700/50 rounded-2xl p-8 hover:border-zinc-600/70 transition-all duration-500 h-full shadow-2xl shadow-zinc-900/50 hover:shadow-zinc-800/60">
                <div className="bg-gradient-to-br from-blue-500/15 to-blue-600/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-500/25 group-hover:to-blue-600/15 transition-all duration-300 shadow-lg shadow-blue-500/10">
                  <Code className="text-blue-400 group-hover:text-blue-300 transition-colors" size={32} />
                </div>
                <h3
                  className={`text-xl font-semibold mb-4 ${inter.className} group-hover:text-zinc-100 transition-colors`}
                >
                  Full-Stack Development
                </h3>
                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  Proficient in modern web technologies, from React and Next.js to Node.js and databases.
                </p>
              </div>
            </div>

            <div className="group relative">
              {/* Enhanced background layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/30 via-zinc-700/20 to-zinc-900/40 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-purple-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-[-1px] bg-gradient-to-br from-zinc-600/20 via-zinc-700/10 to-zinc-800/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-800/60 backdrop-blur-xl border border-zinc-700/50 rounded-2xl p-8 hover:border-zinc-600/70 transition-all duration-500 h-full shadow-2xl shadow-zinc-900/50 hover:shadow-zinc-800/60">
                <div className="bg-gradient-to-br from-purple-500/15 to-purple-600/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:from-purple-500/25 group-hover:to-purple-600/15 transition-all duration-300 shadow-lg shadow-purple-500/10">
                  <Briefcase className="text-purple-400 group-hover:text-purple-300 transition-colors" size={32} />
                </div>
                <h3
                  className={`text-xl font-semibold mb-4 ${inter.className} group-hover:text-zinc-100 transition-colors`}
                >
                  Project Leadership
                </h3>
                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  Experienced in leading teams and delivering complex projects from conception to deployment.
                </p>
              </div>
            </div>

            <div className="group relative">
              {/* Enhanced background layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/30 via-zinc-700/20 to-zinc-900/40 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-transparent to-pink-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-[-1px] bg-gradient-to-br from-zinc-600/20 via-zinc-700/10 to-zinc-800/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-800/60 backdrop-blur-xl border border-zinc-700/50 rounded-2xl p-8 hover:border-zinc-600/70 transition-all duration-500 h-full shadow-2xl shadow-zinc-900/50 hover:shadow-zinc-800/60">
                <div className="bg-gradient-to-br from-pink-500/15 to-pink-600/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:from-pink-500/25 group-hover:to-pink-600/15 transition-all duration-300 shadow-lg shadow-pink-500/10">
                  <User className="text-pink-400 group-hover:text-pink-300 transition-colors" size={32} />
                </div>
                <h3
                  className={`text-xl font-semibold mb-4 ${inter.className} group-hover:text-zinc-100 transition-colors`}
                >
                  UI/UX Design
                </h3>
                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  Creating intuitive and visually appealing interfaces that prioritize user experience.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-zinc-600 text-white hover:bg-zinc-800 bg-transparent hover:shadow-lg hover:shadow-zinc-800/30 transition-all duration-300"
            >
              <Link href="/skills">
                Explore All Skills <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative py-24 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={itemVariants}>
            <div className="relative group">
              {/* Multiple background layers for depth */}
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/60 via-zinc-800/40 to-zinc-900/60 rounded-3xl blur-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/3 to-emerald-600/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-[-2px] bg-gradient-to-br from-zinc-600/30 via-zinc-500/20 to-zinc-700/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/50 backdrop-blur-2xl border border-zinc-700/60 rounded-3xl p-16 shadow-2xl shadow-zinc-900/60 hover:shadow-zinc-800/70 transition-all duration-500">
                {/* Icon container with enhanced effects */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-gradient-to-br from-emerald-500/15 to-teal-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-400/30 transition-all duration-300">
                    <Folder className="text-emerald-400 group-hover:text-emerald-300 transition-colors" size={40} />
                  </div>
                </div>

                <h2
                  className={`text-4xl lg:text-5xl font-bold mb-8 ${inter.className} tracking-tight group-hover:text-zinc-100 transition-colors duration-300`}
                >
                  Crafting Digital
                  <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text group-hover:from-emerald-300 group-hover:to-teal-300 transition-all duration-300">
                    Experiences
                  </span>
                </h2>

                <p
                  className={`text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed ${inter.className} group-hover:text-zinc-300 transition-colors duration-300`}
                >
                  From concept to deployment, I bring ideas to life through code. Each project is a journey of
                  innovation, problem-solving, and continuous learning.
                </p>

                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0 font-semibold px-8 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/40 transition-all duration-300"
                >
                  <Link href="/project">
                    View My Projects <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative py-24 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={itemVariants}>
            <h2 className={`text-4xl lg:text-5xl font-bold mb-8 ${inter.className} tracking-tight`}>
              Let's Create Something
              <span className="block bg-gradient-to-r from-zinc-200 to-zinc-400 text-transparent bg-clip-text">
                Amazing Together
              </span>
            </h2>

            <p className={`text-xl text-zinc-400 mb-12 leading-relaxed max-w-2xl mx-auto ${inter.className}`}>
              I'm always open to new opportunities, collaborations, and exciting projects. Whether you have a specific
              idea in mind or just want to connect, I'd love to hear from you!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild size="lg" className="bg-white text-black hover:bg-zinc-200 font-semibold">
                <a href="mailto:yash2154rai@gmail.com">
                  <Mail className="mr-2" size={20} />
                  Get In Touch
                </a>
              </Button>

              <div className="flex items-center gap-2 text-zinc-400">
                <span>or reach me at</span>
                <a
                  href="mailto:yash2154rai@gmail.com"
                  className="text-white hover:text-zinc-300 transition-colors underline decoration-zinc-600 hover:decoration-zinc-400"
                >
                  yash2154rai@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  )
}
