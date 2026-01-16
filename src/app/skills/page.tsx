"use client"

import { motion } from "framer-motion"

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

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML & CSS", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Redux", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "FastAPI", "C++", "REST APIs"]
  },
  {
    title: "Database & Tooling",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Git & GitHub", "Docker", "Linux"]
  },
]

export default function Skills() {
  return (
    <main className="flex flex-col w-screen min-h-screen bg-black text-white overflow-hidden px-6 pt-32 pb-12">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
            Technical<br /><span className="text-zinc-500">Expertise</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-lg leading-relaxed">
            A curated list of technologies I use to build scalable, high-performance web applications.
          </p>
        </motion.div>

        {/* Skills List */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={item} className="flex flex-col gap-6">
              <h2 className="text-2xl font-medium text-white pb-2 border-b border-zinc-800">
                {category.title}
              </h2>
              <div className="flex flex-col gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <p key={skillIndex} className="text-zinc-400 text-lg hover:text-white transition-colors duration-200 cursor-default">
                    {skill}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Minimal Footer Note */}
        <motion.div
          className="mt-32 pt-12 border-t border-zinc-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-zinc-500 text-sm">
            Always exploring new technologies. Currently learning <span className="text-white">System Design</span>.
          </p>
        </motion.div>
      </div>
    </main>
  )
}
