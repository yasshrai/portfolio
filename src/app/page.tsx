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
    <main className="flex flex-col w-screen min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-muted selection:text-foreground">
      {/* Hero Section */}
      <section className="relative flex flex-col w-full min-h-[90vh] items-center justify-center px-6">
        <div className="z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="text-muted-foreground font-mono text-sm tracking-wider uppercase">
              Software Engineer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter text-foreground"
          >
            Building for the <br />
            <span className="text-muted-foreground">modern web.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed font-light"
          >
            Crafting scalable, accessible, and performant software with a focus on user experience and clean architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-6"
          >
            <Link href="/project" className="text-foreground border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-all text-sm uppercase tracking-wide">
              View Work
            </Link>
            <Link href="/about" className="text-muted-foreground border-b border-muted-foreground pb-1 hover:text-foreground hover:border-foreground transition-all text-sm uppercase tracking-wide">
              About Me
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About / Expertise Section - Minimal List */}
      <section className="py-32 px-6 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[200px_1fr] gap-12">
            <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Expertise</h2>
            <div className="space-y-16">
              <div>
                <h3 className="text-2xl font-medium text-foreground mb-4">Engineering</h3>
                <p className="text-muted-foreground leading-relaxed max-w-lg">
                  Proficient in the full web stack. I build robust applications using React, Next.js, Node.js, and modern cloud infrastructure. I prioritize code quality, scalability, and performance.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-foreground mb-4">Design</h3>
                <p className="text-muted-foreground leading-relaxed max-w-lg">
                  Bridging the gap between engineering and design. I care deeply about interaction details, typography, and accessibility to ensure the end product feels premium and intuitive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Link - Minimal CTA */}
      <section className="py-32 px-6 border-t border-border/50 bg-muted/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-6">Selected Work</h2>
              <p className="text-3xl md:text-5xl font-bold text-foreground max-w-xl tracking-tight leading-tight">
                Explore a collection of my latest projects and experiments.
              </p>
            </div>
            <Link href="/project" className="group flex items-center gap-2 text-foreground border-b border-white pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-all">
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section - Minimal List */}
      <section className="py-32 px-6 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-baseline mb-16">
            <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Latest Writings</h2>
            <Link href="/blog" className="text-muted-foreground hover:text-foreground text-sm transition-colors">View all</Link>
          </div>

          <div className="flex flex-col">
            {!loadingPosts && posts.length > 0 ? (
              posts.map((post) => (
                <Link key={post._id} href={`/blog/${post.slug}`} className="group py-8 border-b border-border hover:border-border/80 transition-colors">
                  <article className="grid md:grid-cols-[1fr_auto] gap-4 items-center">
                    <div>
                      <h3 className="text-xl font-medium text-muted-foreground group-hover:text-foreground transition-colors mb-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-1">{post.summary}</p>
                    </div>
                    <ArrowUpRight className="text-muted-foreground/60 group-hover:text-foreground transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transform duration-300 hidden md:block" />
                  </article>
                </Link>
              ))
            ) : (
              <div className="py-8 text-muted-foreground italic">No posts available at the moment.</div>
            )}
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="py-24 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-foreground font-bold text-lg mb-6 tracking-tight">Yash Rai</h2>
            <div className="flex gap-6">
              <a href="https://github.com/yasshrai" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/yasshrai/" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin size={20} /></a>
              <a href="mailto:yash2154rai@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:justify-items-end">
            <div className="flex flex-col gap-4 text-sm">
              <span className="text-muted-foreground/60 uppercase tracking-wider text-xs">Menu</span>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
              <Link href="/project" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
              <Link href="/skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</Link>
              <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Writing</Link>
            </div>
            <div className="flex flex-col gap-4 text-sm">
              <span className="text-muted-foreground/60 uppercase tracking-wider text-xs">Resources</span>
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <a href="/yashrai_resume.pdf" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">Resume</a>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-24 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center bg-transparent gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Yash Rai. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Designed & Built by Yash
          </p>
        </div>
      </footer>
    </main>
  )
}
