"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/yasshrai" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/yasshrai" },
  { name: "Twitter", icon: Twitter, href: "https://x.com/yasshraii" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/yasshrai" },
  { name: "Email", icon: Mail, href: "mailto:yash2154rai@gmail.com" },
]

export default function About() {
  return (
    <main className="min-h-screen bg-background text-muted-foreground px-6 pt-32 pb-24 font-light">
      <div className="max-w-3xl mx-auto space-y-24">

        {/* Header / Intro */}
        <section>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tight"
          >
            About Me
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6 text-lg leading-relaxed text-muted-foreground"
          >
            <p>
              I&apos;m Yash Rai, a software engineer with a passion for building digital experiences that matter.
              My journey began with a simple curiosity about how things work, evolving into a dedicated career
              crafting scalable applications and intuitive user interfaces.
            </p>
            <p>
              I specialize in both frontend and backend technologies, bridging the gap between design and
              functionality. Whether it&apos;s a complex system architecture or a pixel-perfect landing page,
              I approach every challenge with a focus on clean code and user-centric design.
            </p>
            <p>
              Currently, I&apos;m focused on mastering system design and exploring new frameworks to push
              the boundaries of what&apos;s possible on the web.
            </p>
          </motion.div>
        </section>

        {/* Experience & Education - Minimal List */}
        <section>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl font-medium text-foreground mb-8 border-b border-border pb-2"
          >
            Timeline
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Experience */}
            <div className="space-y-8">
              <div className="grid md:grid-cols-[120px_1fr] gap-4 md:gap-8">
                <span className="text-muted-foreground/60 text-sm">Jan 2025 — Present</span>
                <div>
                  <h3 className="text-foreground font-medium">SDE Intern</h3>
                  <p className="text-muted-foreground mt-1">Building scalable web applications.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-[120px_1fr] gap-4 md:gap-8">
                <span className="text-muted-foreground/60 text-sm">2024 — 2025</span>
                <div>
                  <h3 className="text-foreground font-medium">Freelance Developer</h3>
                  <p className="text-muted-foreground mt-1">Delivering custom solutions for various clients.</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-8">
              <div className="grid md:grid-cols-[120px_1fr] gap-4 md:gap-8">
                <span className="text-muted-foreground/60 text-sm">2025 — 2027</span>
                <div>
                  <h3 className="text-foreground font-medium">Masters in Computer Science</h3>
                  <p className="text-muted-foreground mt-1">Algorithms, Data Structures, Software Engineering.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-[120px_1fr] gap-4 md:gap-8">
                <span className="text-muted-foreground/60 text-sm">2022 — 2025</span>
                <div>
                  <h3 className="text-foreground font-medium">Bachelor in Computer Science</h3>
                  <p className="text-muted-foreground mt-1">Foundational CS concepts and system design.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Connect */}
        <section>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl font-medium text-foreground mb-8 border-b border-border pb-2"
          >
            Connect
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.name}
              >
                <link.icon size={20} />
              </a>
            ))}
          </motion.div>
        </section>

      </div>
    </main>
  )
}
