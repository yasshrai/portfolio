"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import aboutpageimg from "@/app/assets/aboutpage.png"
import aboutpagesecond from "@/app/assets/aboutsecondsection.png"
import education from "@/app/assets/education.png"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/yasshrai" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/yasshrai" },
  { name: "Twitter", icon: Twitter, href: "https://x.com/yasshraii" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/yasshrai" },
  { name: "Email", icon: Mail, href: "mailto:yash2154rai@gmail.com" },
]

const skills = [
  
  { name: "Backend", level: 90 },
  { name: "DevOps", level: 85 },
  { name: "Frontend", level: 80 },
  { name: "UI/UX", level: 80 },
]

export default function About() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black" />
        <div className="absolute right-0 top-0 h-96 w-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center mb-24"
        >
          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600"
          >
            About Me
          </motion.h1>
          <motion.p variants={item} className="text-xl text-zinc-400 max-w-3xl mx-auto mb-12">
            Software Engineer passionate about creating elegant solutions to complex problems
          </motion.p>

          <motion.div variants={item} className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full p-1 animate-spin-slow">
              <div className="h-full w-full rounded-full bg-zinc-900 p-1">
                <Image
                  src={aboutpageimg}
                  alt="Yash Rai"
                  width={256}
                  height={256}
                  className="rounded-full h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section className="grid md:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Who Am I?</h2>
            <p className="text-zinc-300 leading-relaxed">
              I&apos;m Yash Rai, a passionate Software Engineer with a love for creating beautiful, functional, and 
              user-centric digital experiences. With a strong foundation in both frontend and backend technologies, 
              I bring ideas to life through clean, efficient code.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              My journey in tech started with a curiosity about how things work, which evolved into a career 
              where I get to build solutions that make a difference. I believe in continuous learning and 
              staying updated with the latest industry trends.
            </p>
            <div className="p-4 bg-gradient-to-r from-indigo-900/20 to-blue-900/20 rounded-xl border border-indigo-800/30 my-6">
              <h4 className="font-semibold text-indigo-400 mb-2">My Vision</h4>
              <p className="text-indigo-100">
                I aim to leverage my skills in software engineering to create impactful projects that make a difference in people&apos;s lives. I strive to develop intuitive applications, stay ahead of technological advancements, collaborate with like-minded individuals, and continuously learn to ensure my skills remain sharp.
              </p>
            </div>
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">My Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-zinc-300">{skill.name}</span>
                      <span className="text-sm text-zinc-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-2">
                      <motion.div
                        className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </div>
                ))}
                <motion.a
                  href="/skills"
                  className="mt-6 inline-block px-6 py-2 text-sm font-medium text-indigo-400 border border-indigo-500/30 rounded-lg hover:bg-indigo-500/10 transition-colors duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View All Skills →
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
              <Image
                src={aboutpagesecond}
                alt="Coding setup"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold">Always Learning</h3>
                <p className="text-zinc-300">
                  Committed to continuous growth and mastering new technologies
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Education & Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cyan-500/10 rounded-xl">
                  <Image
                    src={education}
                    alt="Education"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-indigo-500 pl-4">
                  <h4 className="font-semibold text-lg">masters in Computer Science </h4>
                  <p className="text-indigo-400">2025 - 2027</p>
                  <p className="text-zinc-400 mt-1">
                    Comprehensive study of algorithms, data structures, and software engineering principles
                  </p>
                </div>
                <div className="border-l-2 border-purple-500 pl-4">
                  <h4 className="font-semibold text-lg">Bachelor in Computer Science </h4>
                  <p className="text-purple-400">2022-2025</p>
                  <p className="text-zinc-400 mt-1">
                  Focused on foundational computer science concepts, programming, and system design
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-10 h-10 text-purple-400"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Experience</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-indigo-500 pl-4">
                  <h4 className="font-semibold text-lg">SDE intern</h4>
                  <p className="text-indigo-400">Jan 2025 - may 2025</p>
                  <p className="text-zinc-400 mt-1">
                    Build scalable web applications with modern technologies
                  </p>
                </div>
                <div className="border-l-2 border-amber-500 pl-4">
                  <h4 className="font-semibold text-lg">Freelance Developer</h4>
                  <p className="text-amber-400">2024 - 2025</p>
                  <p className="text-zinc-400 mt-1">
                    Delivered custom solutions for various clients across different industries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-12">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-zinc-900/50 hover:bg-zinc-800/50 backdrop-blur-sm border border-zinc-800 rounded-lg text-zinc-200 hover:text-white transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, rgba(39, 39, 42, 0.5) 0%, rgba(24, 24, 27, 0.5) 100%)`,
                }}
              >
                <link.icon className="w-5 h-5" />
                <span>{link.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  )
}
