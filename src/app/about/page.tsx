"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Linkedin, Twitter, Mail, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import aboutpageimg from "@/app/assets/aboutpage.png"
import aboutpagesecond from "@/app/assets/aboutsecondsection.png"
import education from "@/app/assets/education.png"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
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

export default function About() {
  const sections = [
    {
      title: "Introduction",
      content:
        "Hi, I'm Yash Rai, a passionate software engineer dedicated to crafting innovative solutions that drive positive change. With a keen eye for detail and a passion for problem-solving, I strive to push the boundaries of what's possible through technology.",
      image: aboutpageimg,
    },
    {
      title: "My Vision",
      content:
        "My vision is to leverage my skills in software engineering to create impactful projects that make a difference in people's lives. I strive to develop intuitive applications, stay ahead of technological advancements, collaborate with like-minded individuals, and continuously learn to ensure my skills remain sharp.",
      image: aboutpagesecond,
    },
    {
      title: "Education and Coursework",
      content:
        "I hold a degree in Computer Science, where I honed my technical skills and developed a solid foundation in software engineering principles. Throughout my academic journey, I engaged in rigorous coursework that covered a broad spectrum of topics, including data structures and algorithms, software design and architecture, web development, and database management. I also participated in various projects and internships that allowed me to apply theoretical knowledge to practical scenarios, enhancing my problem-solving abilities and teamwork skills. My education has equipped me with the tools and knowledge necessary to tackle complex challenges and contribute effectively to the tech industry.",
      image: education,
    },
  ]

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/yasshrai" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/yasshrai" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/yasshraii" },
    { name: "Mail", icon: Mail, href: "mailto:yash2154rai@gmail.com" },
    { name: "GitHub", icon: Github, href: "https://github.com/yasshrai" },
  ]

  return (
    <main className="flex flex-col w-screen min-h-screen bg-black text-white overflow-hidden">
      {/* Enhanced Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />
        <div className="absolute right-0 top-0 h-[800px] w-[800px] bg-gradient-to-l from-zinc-800/5 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] bg-gradient-to-r from-zinc-700/5 to-transparent rounded-full blur-[100px]" />
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] bg-gradient-to-r from-zinc-600/3 to-zinc-500/3 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/3 right-1/4 h-[300px] w-[300px] bg-gradient-to-l from-cyan-500/2 to-teal-500/2 rounded-full blur-[100px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-6 py-20 mt-10"
      >
        {/* Page Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 text-transparent bg-clip-text">
            About Me
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Discover my journey, vision, and the passion that drives me to create meaningful digital experiences.
          </p>
        </motion.div>

        {sections.map((section, index) => (
          <motion.section key={index} variants={itemVariants} className="mb-32 group">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Content Section */}
              <div className={`w-full lg:w-1/2 ${index % 2 === 1 ? "lg:order-2" : ""} relative`}>
                {/* Background effects for text content */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/20 via-zinc-800/10 to-zinc-900/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-teal-500 text-transparent bg-clip-text group-hover:from-cyan-300 group-hover:to-teal-400 transition-all duration-300">
                    {section.title}
                  </h2>
                  <div className="relative">
                    {/* Subtle background for text */}
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/30 to-zinc-800/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                    <p className="relative text-lg md:text-xl text-zinc-300 leading-relaxed group-hover:text-zinc-200 transition-colors duration-300 p-6 rounded-2xl">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className={`w-full lg:w-1/2 ${index % 2 === 1 ? "lg:order-1" : ""} relative group/image`}>
                {/* Multiple layered background effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/30 via-zinc-600/20 to-zinc-800/30 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/20 to-zinc-900/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-[-1px] bg-gradient-to-br from-zinc-600/20 via-zinc-500/10 to-zinc-700/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl shadow-zinc-900/50 hover:shadow-zinc-800/60 transition-all duration-500">
                  <Image
                    src={section.image || "/placeholder.svg"}
                    alt={section.title}
                    width={500}
                    height={500}
                    className="w-full h-auto relative z-10 rounded-2xl group-hover/image:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 via-transparent to-zinc-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                </div>
              </div>
            </div>
          </motion.section>
        ))}

        {/* Enhanced Footer/Social Section */}
        <motion.footer variants={itemVariants} className="mt-32 text-center relative group">
          {/* Background effects for footer */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/40 via-zinc-800/20 to-zinc-900/40 rounded-3xl blur-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-teal-500/3 to-cyan-600/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-[-2px] bg-gradient-to-br from-zinc-600/30 via-zinc-500/20 to-zinc-700/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/50 backdrop-blur-2xl border border-zinc-700/60 rounded-3xl p-16 shadow-2xl shadow-zinc-900/60 hover:shadow-zinc-800/70 transition-all duration-500">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-teal-500 text-transparent bg-clip-text group-hover:from-cyan-300 group-hover:to-teal-400 transition-all duration-300">
              Let's Connect
            </h2>
            <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto group-hover:text-zinc-300 transition-colors duration-300">
              I'm always excited to connect with fellow developers, potential collaborators, and anyone passionate about
              technology.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link, index) => (
                <div key={link.name} className="relative group/button">
                  {/* Button background effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-lg blur-lg opacity-0 group-hover/button:opacity-100 transition-opacity duration-300" />

                  <Button
                    variant="outline"
                    size="lg"
                    className="relative bg-gradient-to-r from-cyan-600/80 to-teal-700/80 backdrop-blur-sm text-white border border-cyan-500/30 hover:border-cyan-400/50 hover:from-cyan-500 hover:to-teal-600 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30"
                    asChild
                  >
                    <Link href={link.href} className="flex items-center gap-2">
                      <link.icon className="h-5 w-5" />
                      <span className="hidden md:inline">{link.name}</span>
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </motion.footer>
      </motion.div>
    </main>
  )
}
