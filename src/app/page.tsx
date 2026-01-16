"use client"

import { Inter } from "next/font/google"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] })

export default function Home() {
  type PostItem = {
    _id: string
    title: string
    summary: string
    slug: string
    createdAt: string
  }

  const [posts, setPosts] = useState<PostItem[]>([])
  const [loadingPosts, setLoadingPosts] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/posts", { cache: "no-store" })
        if (!res.ok) throw new Error("Failed to fetch posts")
        const data = await res.json()
        setPosts((data.posts || []).slice(0, 3))
      } catch (e) {
        console.error(e)
      } finally {
        setLoadingPosts(false)
      }
    }
    load()
  }, [])

  return (
    <main className="flex flex-col w-screen min-h-screen bg-black text-white overflow-x-hidden selection:bg-zinc-800 selection:text-white">
      {/* Hero Section */}
      <section className="relative flex flex-col w-full min-h-[90vh] items-center justify-center px-6">
        <div className="z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="text-zinc-500 font-mono text-sm tracking-wider uppercase">
              Software Engineer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter text-white"
          >
            Building for the <br />
            <span className="text-zinc-600">modern web.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto mb-12 leading-relaxed font-light"
          >
            Crafting scalable, accessible, and performant software with a focus on user experience and clean architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-6"
          >
            <Link href="/project" className="text-white border-b border-white pb-1 hover:text-zinc-300 hover:border-zinc-300 transition-all text-sm uppercase tracking-wide">
              View Work
            </Link>
            <Link href="/about" className="text-zinc-500 border-b border-zinc-500 pb-1 hover:text-white hover:border-white transition-all text-sm uppercase tracking-wide">
              About Me
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About / Expertise Section - Minimal List */}
      <section className="py-32 px-6 border-t border-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[200px_1fr] gap-12">
            <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-wider">Expertise</h2>
            <div className="space-y-16">
              <div>
                <h3 className="text-2xl font-medium text-white mb-4">Engineering</h3>
                <p className="text-zinc-400 leading-relaxed max-w-lg">
                  Proficient in the full web stack. I build robust applications using React, Next.js, Node.js, and modern cloud infrastructure. I prioritize code quality, scalability, and performance.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-white mb-4">Design</h3>
                <p className="text-zinc-400 leading-relaxed max-w-lg">
                  Bridging the gap between engineering and design. I care deeply about interaction details, typography, and accessibility to ensure the end product feels premium and intuitive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Link - Minimal CTA */}
      <section className="py-32 px-6 border-t border-zinc-900/50 bg-zinc-900/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-6">Selected Work</h2>
              <p className="text-3xl md:text-5xl font-bold text-white max-w-xl tracking-tight leading-tight">
                Explore a collection of my latest projects and experiments.
              </p>
            </div>
            <Link href="/project" className="group flex items-center gap-2 text-white border-b border-white pb-1 hover:text-zinc-300 hover:border-zinc-300 transition-all">
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section - Minimal List */}
      <section className="py-32 px-6 border-t border-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-baseline mb-16">
            <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-wider">Latest Writings</h2>
            <Link href="/blog" className="text-zinc-500 hover:text-white text-sm transition-colors">View all</Link>
          </div>

          <div className="flex flex-col">
            {!loadingPosts && posts.length > 0 ? (
              posts.map((post) => (
                <Link key={post._id} href={`/blog/${post.slug}`} className="group py-8 border-b border-zinc-900 hover:border-zinc-800 transition-colors">
                  <article className="grid md:grid-cols-[1fr_auto] gap-4 items-center">
                    <div>
                      <h3 className="text-xl font-medium text-zinc-200 group-hover:text-white transition-colors mb-2">
                        {post.title}
                      </h3>
                      <p className="text-zinc-500 text-sm line-clamp-1">{post.summary}</p>
                    </div>
                    <ArrowUpRight className="text-zinc-600 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transform duration-300 hidden md:block" />
                  </article>
                </Link>
              ))
            ) : (
              <div className="py-8 text-zinc-600 italic">No posts available at the moment.</div>
            )}
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="py-24 px-6 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-white font-bold text-lg mb-6 tracking-tight">Yash Rai</h2>
            <div className="flex gap-6">
              <a href="https://github.com/yasshrai" target="_blank" className="text-zinc-500 hover:text-white transition-colors"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/yasshrai/" target="_blank" className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="mailto:yash2154rai@gmail.com" className="text-zinc-500 hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:justify-items-end">
            <div className="flex flex-col gap-4 text-sm">
              <span className="text-zinc-600 uppercase tracking-wider text-xs">Menu</span>
              <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">About</Link>
              <Link href="/project" className="text-zinc-400 hover:text-white transition-colors">Projects</Link>
              <Link href="/skills" className="text-zinc-400 hover:text-white transition-colors">Skills</Link>
              <Link href="/blog" className="text-zinc-400 hover:text-white transition-colors">Writing</Link>
            </div>
            <div className="flex flex-col gap-4 text-sm">
              <span className="text-zinc-600 uppercase tracking-wider text-xs">Resources</span>
              <Link href="/" className="text-zinc-400 hover:text-white transition-colors">Home</Link>
              <a href="/yashrai_resume.pdf" target="_blank" className="text-zinc-400 hover:text-white transition-colors">Resume</a>
              <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-24 pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center bg-black gap-4 text-xs text-zinc-600">
          <p>&copy; {new Date().getFullYear()} Yash Rai. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Designed & Built by Yash
          </p>
        </div>
      </footer>
    </main>
  )
}
