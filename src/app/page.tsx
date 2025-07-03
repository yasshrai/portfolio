"use client"

import Image from "next/image"
import hero from "@/app/assets/hero.png"
import { Inter } from "next/font/google"
import Typewriter from "typewriter-effect"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Code, Briefcase, User, Folder, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

export default function Home() {
  return (
    <main className="flex flex-col w-screen min-h-screen bg-black text-white overflow-hidden">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-white/2 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-zinc-500/3 blur-[120px]" />
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
            className={`text-5xl md:text-7xl font-bold mb-6 ${inter.className} tracking-tight`}
          >
            <span className="bg-gradient-to-r from-white to-zinc-300 text-transparent bg-clip-text">Code. Create.</span>
            <span className="block text-3xl md:text-5xl mt-2 text-zinc-500">Innovate.</span>
          </motion.h1>

          <motion.h2
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`text-2xl md:text-4xl font-semibold text-white ${inter.className}`}
          >
            Hi, I&apos;m Yash Rai👋
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={`text-2xl md:text-4xl font-medium text-white ${inter.className}`}
          >
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
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/10 to-zinc-600/10 rounded-full blur-3xl" />
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
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${inter.className} tracking-tight`}>
            Transforming Ideas Into Digital Solutions
          </h2>
          <p className={`text-lg mb-8 text-zinc-400 ${inter.className} font-normal leading-relaxed`}>
            I specialize in creating robust, scalable applications that solve real-world problems. With expertise
            spanning the full development stack, I&apos;m passionate about writing clean code, implementing best
            practices, and delivering exceptional user experiences that make a difference.
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
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${inter.className} tracking-tight`}>
            My Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-zinc-900/40 border-zinc-800 hover:bg-zinc-800/40 transition-all duration-300 backdrop-blur-sm">
              <CardHeader>
                <Code className="mx-auto mb-4 text-blue-400" size={40} />
                <CardTitle className={`text-center text-white font-semibold ${inter.className}`}>
                  Full-Stack Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`text-zinc-400 text-center ${inter.className} font-normal`}>
                  Proficient in both front-end and back-end technologies
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/40 border-zinc-800 hover:bg-zinc-800/40 transition-all duration-300 backdrop-blur-sm">
              <CardHeader>
                <Briefcase className="mx-auto mb-4 text-purple-400" size={40} />
                <CardTitle className={`text-center text-white font-semibold ${inter.className}`}>
                  Project Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`text-zinc-400 text-center ${inter.className} font-normal`}>
                  Experienced in leading and delivering complex projects
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/40 border-zinc-800 hover:bg-zinc-800/40 transition-all duration-300 backdrop-blur-sm">
              <CardHeader>
                <User className="mx-auto mb-4 text-pink-400" size={40} />
                <CardTitle className={`text-center text-white font-semibold ${inter.className}`}>
                  UI/UX Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`text-zinc-400 text-center ${inter.className} font-normal`}>
                  Creating intuitive and visually appealing user interfaces
                </p>
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
                Explore All Skills
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative py-16 px-4 md:px-8 w-screen"
      >
        <div className="w-[90vw] mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-zinc-900/20 rounded-3xl blur-xl" />
            <div className="relative bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 rounded-3xl p-12">
              <Folder className="mx-auto mb-6 text-emerald-400" size={60} />
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${inter.className} tracking-tight`}>
                Crafting Digital Experiences
              </h2>
              <p
                className={`text-lg mb-8 text-zinc-400 max-w-2xl mx-auto ${inter.className} font-normal leading-relaxed`}
              >
                From concept to deployment, I bring ideas to life through code. Each project is a journey of innovation,
                problem-solving, and continuous learning. Explore my portfolio to see how I transform challenges into
                elegant solutions.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-400 to-teal-500 hover:opacity-90 text-white border-0"
              >
                <Link href="/project" className="hover:text-white">
                  View My Projects <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
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
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${inter.className} tracking-tight`}>
            Let&apos;s Create Something Amazing
          </h2>
          <p className={`text-lg mb-8 text-zinc-400 ${inter.className} font-normal leading-relaxed`}>
            I&apos;m always open to new opportunities, collaborations, and exciting projects. Whether you have a
            specific idea in mind or just want to connect, I&apos;d love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

            <div className="flex items-center gap-2 text-zinc-400">
              <Mail size={20} />
              <a href="mailto:yashrai@example.com" className="hover:text-white transition-colors duration-200">
                yash2154rai@gmail.com
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  )
}
