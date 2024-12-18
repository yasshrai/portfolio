"use client";

import Image from "next/image";
import hero from "@/app/assets/hero.png";
import { Kanit } from "next/font/google";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Briefcase, User, Download } from 'lucide-react';

const kanit = Kanit({ subsets: ["latin"], weight: "800" });

export default function Home() {
  return (
    <main className="flex flex-col w-screen min-h-screen bg-zinc-950 text-white">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row w-screen min-h-[90vh] sm:mt-4 md:mt-0 mt-10 md:justify-center items-center justify-evenly gap-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center items-center flex-col gap-2 text-center"
        >
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-5xl md:text-7xl font-bold mb-6 ${kanit.className}`}
          >
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              Welcome
            </span>
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
                  .start();
              }}
            />
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <Link href="/yashrai_resume.pdf" download={true} className="inline-flex items-center px-6 py-3 mt-6 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
              Download CV <Download className="ml-2" size={20} />
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <Image
            src={hero}
            alt="Hero Image"
            className="w-[300px] h-[300px] md:h-[500px] md:w-[500px]"
            priority
          />
        </motion.div>
      </section>

      {/* Brief Introduction */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="py-16 px-4 md:px-8 w-screen"
      >
        <div className="max-w-4xl w-[90vw] mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${kanit.className}`}>Welcome to My Digital Space</h2>
          <p className="text-lg mb-8 text-zinc-400">
            I&apos;m passionate about creating innovative solutions and pushing the boundaries of technology. 
            With a strong foundation in full-stack development and a never-ending curiosity, 
            I&apos;m always excited to take on new challenges and learn cutting-edge technologies.
          </p>
          <Link href="/about" className="inline-flex items-center px-6 py-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors">
            Learn More About Me <ArrowRight className="ml-2" />
          </Link>
        </div>
      </motion.section>

      {/* Skills Preview */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="py-16 px-4 md:px-8 w-screen"
      >
        <div className="w-[90vw] mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${kanit.className}`}>My Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg text-center hover:bg-zinc-800 transition-colors  shadow-2xl hover:outline outline-2  outline-indigo-950 hover:shadow-2xl hover:shadow-violet-950">
              <Code className="mx-auto mb-4 text-zinc-400" size={40} />
              <h3 className="text-xl font-semibold mb-2">Full-Stack Development</h3>
              <p className="text-zinc-400">Proficient in both front-end and back-end technologies</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg text-center hover:bg-zinc-800 transition-colors  shadow-2xl hover:outline outline-2  outline-indigo-950 hover:shadow-2xl hover:shadow-violet-950">
              <Briefcase className="mx-auto mb-4 text-zinc-400" size={40} />
              <h3 className="text-xl font-semibold mb-2">Project Management</h3>
              <p className="text-zinc-400">Experienced in leading and delivering complex projects</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg text-center hover:bg-zinc-800 transition-colors  shadow-2xl hover:outline outline-2  outline-indigo-950 hover:shadow-2xl hover:shadow-violet-950">
              <User className="mx-auto mb-4 text-zinc-400" size={40} />
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-zinc-400">Creating intuitive and visually appealing user interfaces</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/skills" className="inline-flex items-center px-6 py-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors">
              Explore All Skills <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="py-16 px-4 md:px-8 bg-zinc-900 w-screen"
      >
        <div className="w-[90vw] mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${kanit.className}`}>Let&apos;s Create Something Amazing</h2>
          <p className="text-lg mb-8 text-zinc-400">
            I&apos;m always open to new opportunities, collaborations, and exciting projects. 
            Whether you have a specific idea in mind or just want to connect, I&apos;d love to hear from you!
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-zinc-950 text-white rounded-full hover:bg-zinc-800 transition-colors font-bold">
            Get In Touch <ArrowRight className="ml-2" />
          </Link>
        </div>
      </motion.section>
    </main>
  );
}

