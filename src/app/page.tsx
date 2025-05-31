"use client"

import Image from "next/image"
import hero from "@/app/assets/hero.png"
import { Kanit } from "next/font/google"
import Typewriter from "typewriter-effect"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Code, Briefcase, User, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const kanit = Kanit({ subsets: ["latin"], weight: "800" })

export default function Home() {
  return (
    <main className="flex flex-col w-screen min-h-screen bg-gradient-to-b from-black to-zinc-950 text-white overflow-hidden">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-zinc-950/95" />
      <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/5 blur-[100px]" />
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/5 blur-[100px]" />
    </div>

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row w-screen min-h-[90vh] sm:mt-4 md:mt-0 mt-10 md:justify-center items-center justify-evenly gap-8 py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center items-center flex-col gap-2 text-center z-10"
        >
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-5xl md:text-7xl font-bold mb-6 ${kanit.className}`}
          >
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Welcome</span>
            <span className="block text-3xl md:text-5xl mt-2 text-zinc-400">to my digital realm</span>
          </motion.h1>
          <motion.h2
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`text-2xl md:text-4xl font-bold text-white ${kanit.className}`}
          >
            Hi, I&apos;m Yash Rai👋
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={`text-2xl md:text-4xl font-bold text-white ${kanit.className}`}
          >
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("a self-taught programmer")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("a software engineer")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("a full-stack developer")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("a tech enthusiast")
                  .pauseFor(2500)
                  .start()
              }}
            />
          </motion.h2>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }}>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90"
            >
              <Link href="/yashrai_resume.pdf" download={true}>
                Download CV <Download className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl" />
          <Image
            src={hero || "/placeholder.svg"}
            alt="Hero Image"
            className="w-[300px] h-[300px] md:h-[500px] md:w-[500px] relative z-10"
            priority
          />
        </motion.div>
      </section>

      {/* Brief Introduction */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative py-16 px-4 md:px-8 w-screen"
      >
        <div className="max-w-4xl w-[90vw] mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${kanit.className}`}>Welcome to My Digital Space</h2>
          <p className="text-lg mb-8 text-zinc-400">
            I&apos;m passionate about creating innovative solutions and pushing the boundaries of technology. With a
            strong foundation in full-stack development and a never-ending curiosity, I&apos;m always excited to take on
            new challenges and learn cutting-edge technologies.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-zinc-900/50 text-white border-zinc-800 hover:bg-zinc-950"
          >
            <Link href="/about" className="hover:text-white">
              Learn More About Me <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </motion.section>

      {/* Skills Preview */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative py-16 px-4 md:px-8 w-screen"
      >
        <div className="w-[90vw] mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${kanit.className}`}>My Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-zinc-900/40 border-zinc-800 hover:bg-zinc-800/40 transition-all duration-300 backdrop-blur-sm">
              <CardHeader>
                <Code className="mx-auto mb-4 text-blue-400" size={40} />
                <CardTitle className="text-center text-white font-bold">Full-Stack Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400 text-center">Proficient in both front-end and back-end technologies</p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/40 border-zinc-800 hover:bg-zinc-800/40 transition-all duration-300 backdrop-blur-sm">
              <CardHeader>
                <Briefcase className="mx-auto mb-4 text-purple-400" size={40} />
                <CardTitle className="text-center text-white font-bold">Project Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400 text-center">Experienced in leading and delivering complex projects</p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/40 border-zinc-800 hover:bg-zinc-800/40 transition-all duration-300 backdrop-blur-sm">
              <CardHeader>
                <User className="mx-auto mb-4 text-pink-400" size={40} />
                <CardTitle className="text-center text-white font-bold">UI/UX Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400 text-center">Creating intuitive and visually appealing user interfaces</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-zinc-900/50 text-white border-zinc-800 hover:bg-zinc-950"
            >
              <Link href="/skills" className="hover:text-white">
                Explore All Skills<ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative py-16 px-4 md:px-8 w-screen"
      >
        <div className="w-[90vw] mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${kanit.className}`}>
            Let&apos;s Create Something Amazing
          </h2>
          <p className="text-lg mb-8 text-zinc-400">
            I&apos;m always open to new opportunities, collaborations, and exciting projects. Whether you have a
            specific idea in mind or just want to connect, I&apos;d love to hear from you!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90"
          >
            <Link href="/contact">
              Get In Touch <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </motion.section>
    </main>
  )
}

