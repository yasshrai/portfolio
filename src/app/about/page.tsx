"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Linkedin, Twitter, Mail, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import aboutpageimg from "@/app/assets/aboutpage.png"
import aboutpagesecond from "@/app/assets/aboutsecondsection.png"
import education from "@/app/assets/education.png"

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
    <main className="flex flex-col w-screen min-h-screen bg-gradient-to-b from-black to-zinc-950 text-white overflow-hidden">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-zinc-950/90" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto px-4 py-16"
      >
        {sections.map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-24 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className={`w-full md:w-1/2 ${index % 2 === 1 ? "md:order-2" : ""}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                {section.title}
              </h2>
              <p className="text-lg text-zinc-300">{section.content}</p>
            </div>
            <div className={`w-full md:w-1/2 ${index % 2 === 1 ? "md:order-1" : ""}`}>
              <Image
                src={section.image || "/placeholder.svg"}
                alt={section.title}
                width={500}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </motion.section>
        ))}

        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-6">Connect with me</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="outline"
                size="lg"
                className="bg-zinc-800/50 hover:bg-zinc-700/50 text-white border-zinc-700"
                asChild
              >
                <Link href={link.href} className="flex items-center gap-2">
                  <link.icon className="h-5 w-5" />
                  <span className="hidden md:inline">{link.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </motion.footer>
      </motion.div>
    </main>
  )
}

