"use client"

import Image from "next/image"
import { Inter } from "next/font/google"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Code, Briefcase, User, Folder, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function Home() {
  type PostItem = {
    _id: string
    title: string
    summary: string
    imageUrl?: string
    slug: string
    createdAt: string
    author?: string
  }

  const [posts, setPosts] = useState<PostItem[]>([])
  const [loadingPosts, setLoadingPosts] = useState(true)
  const [postsError, setPostsError] = useState<string | null>(null)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/posts", { cache: "no-store" })
        if (!res.ok) throw new Error("Failed to fetch posts")
        const data = await res.json()
        setPosts((data.posts || []).slice(0, 3))
      } catch (e: any) {
        setPostsError(e?.message || "Failed to load posts")
      } finally {
        setLoadingPosts(false)
      }
    }
    load()
  }, [])

  return (
    <main className="flex flex-col w-screen min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col w-full min-h-screen items-center justify-center py-20 px-6 overflow-hidden">
        {/* Simplified Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black pointer-events-none" />

        <div className="z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded-full text-sm font-medium text-zinc-300 backdrop-blur-sm">
              Software Engineer • Web Platforms
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Engineering <span className="text-zinc-400">performant</span>, <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-white to-zinc-400 text-transparent bg-clip-text">
              reliable software.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I build scalable, accessible software with clear architecture and measurable impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
          >
            <Button asChild size="lg" className="bg-white text-black hover:bg-zinc-200 font-semibold min-w-[160px]">
              <Link href="/project">
                View Work <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-white bg-transparent min-w-[160px]"
            >
              <Link href="/about">About Me</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-16 flex items-center justify-center gap-6"
          >
            <a href="https://github.com/yasshrai" target="_blank" className="text-zinc-500 hover:text-white transition-colors"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/yasshrai/" target="_blank" className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={24} /></a>
            <a href="mailto:yash2154rai@gmail.com" className="text-zinc-500 hover:text-white transition-colors"><Mail size={24} /></a>
          </motion.div>
        </div>
      </section>


      {/* About Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative pt-24 pb-0 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${inter.className} tracking-tight`}>
              Transforming Ideas Into
              <span className="block bg-gradient-to-r from-zinc-200 to-zinc-400 text-transparent bg-clip-text">
                Digital Solutions
              </span>
            </h2>
            <p className={`text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed ${inter.className}`}>
              I specialize in creating robust, scalable applications that solve real-world problems. With expertise
              spanning the full development stack, I&apos;m passionate about writing clean code, implementing best practices,
              and delivering exceptional user experiences.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Code className="text-white" size={24} />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${inter.className} text-zinc-100`}>
                Full-Stack Development
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Proficient in modern web technologies, from React and Next.js to Node.js and databases.
              </p>
            </div>

            <div className="group relative p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="text-white" size={24} />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${inter.className} text-zinc-100`}>
                Project Leadership
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Experienced in leading teams and delivering complex projects from conception to deployment.
              </p>
            </div>

            <div className="group relative p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <User className="text-white" size={24} />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${inter.className} text-zinc-100`}>
                UI/UX Design
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Creating intuitive and visually appealing interfaces that prioritize user experience.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-zinc-600 text-white hover:bg-zinc-800 bg-transparent hover:shadow-lg hover:shadow-zinc-800/30 transition-all duration-300"
            >
              <Link href="/skills">
                Explore All Skills <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative pt-24 pb-0 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={itemVariants}>
            <motion.div variants={itemVariants}>
              <div className="relative group overflow-hidden rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all duration-500 p-8 md:p-12 text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-500/5 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 font-medium">
                  <div className="w-16 h-16 mx-auto bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 text-zinc-300">
                    <Folder size={32} />
                  </div>

                  <h2
                    className={`text-3xl lg:text-4xl font-bold mb-6 ${inter.className} text-white tracking-tight`}
                  >
                    Crafting Digital Experiences
                  </h2>

                  <p className="text-lg text-zinc-400 max-w-xl mx-auto mb-8 leading-relaxed">
                    From concept to deployment, I bring ideas to life through code. Each project is a journey of
                    innovation, problem-solving, and continuous learning.
                  </p>

                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-black hover:bg-zinc-200 border-0 font-semibold px-8"
                  >
                    <Link href="/project">
                      View My Projects <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Blog Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative pt-24 pb-0 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-14">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${inter.className} tracking-tight`}>
              Latest from the
              <span className="block bg-gradient-to-r from-zinc-200 to-zinc-400 text-transparent bg-clip-text">
                Blog
              </span>
            </h2>
            <p className={`text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed ${inter.className}`}>
              Insights, tutorials, and updates on what I&apos;m building and learning.
            </p>
          </motion.div>

          {/* Posts Grid */}
          <motion.div variants={itemVariants}>
            {loadingPosts && (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 shadow">
                    <div className="relative aspect-video w-full overflow-hidden bg-zinc-800">
                      <div className="h-full w-full animate-pulse bg-zinc-700/50" />
                    </div>
                    <div className="p-4">
                      <div className="h-5 w-3/4 animate-pulse rounded bg-zinc-700/50" />
                      <div className="mt-2 space-y-2">
                        <div className="h-4 w-full animate-pulse rounded bg-zinc-700/40" />
                        <div className="h-4 w-5/6 animate-pulse rounded bg-zinc-700/40" />
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <div className="h-5 w-16 animate-pulse rounded-full border border-zinc-800 bg-zinc-900/60" />
                        <div className="h-3 w-20 animate-pulse rounded bg-zinc-700/40" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!loadingPosts && postsError && (
              <p className="text-red-300 text-center">{postsError}</p>
            )}

            {!loadingPosts && !postsError && posts.length === 0 && (
              <p className="text-zinc-400 text-center">No posts yet.</p>
            )}

            {!loadingPosts && !postsError && posts.length > 0 && (
              <div
                className={`grid gap-6 ${posts.length === 1
                  ? "grid-cols-1 place-content-center"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  }`}
              >
                {posts.map((p) => (
                  <Link key={p._id} href={`/blog/${p.slug}`} className="group">
                    <article
                      className={`overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 shadow transition hover:border-zinc-700 ${posts.length === 1 ? "max-w-md md:max-w-2xl lg:max-w-3xl w-full mx-auto" : ""
                        }`}
                    >
                      <div className="relative aspect-video w-full overflow-hidden bg-zinc-800">
                        {p.imageUrl ? (
                          <Image
                            src={p.imageUrl}
                            alt={p.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-zinc-500">
                            No cover image
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="line-clamp-2 text-lg font-semibold text-white">{p.title}</h3>
                        <p className="mt-2 line-clamp-3 text-sm text-zinc-400">{p.summary}</p>
                        <div className="mt-3 flex items-center gap-2">
                          {p.author && (
                            <span className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/60 px-2.5 py-0.5 text-xs font-medium text-zinc-300 shadow-sm backdrop-blur">
                              {p.author}
                            </span>
                          )}
                          <p className="text-xs text-zinc-500">{new Date(p.createdAt).toLocaleDateString()}</p>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </motion.div>

          {/* View all */}
          <motion.div variants={itemVariants} className="text-center mt-10">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-zinc-600 text-white hover:bg-zinc-800 bg-transparent"
            >
              <Link href="/blog">
                View all posts <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative pt-24 pb-0 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={itemVariants}>
            <h2 className={`text-4xl lg:text-5xl font-bold mb-8 ${inter.className} tracking-tight`}>
              Let&apos;s Create Something
              <span className="block bg-gradient-to-r from-zinc-200 to-zinc-400 text-transparent bg-clip-text">
                Amazing Together
              </span>
            </h2>

            <p className={`text-xl text-zinc-400 mb-12 leading-relaxed max-w-2xl mx-auto ${inter.className}`}>
              I&apos;m always open to new opportunities, collaborations, and exciting projects. Whether you have a specific
              idea in mind or just want to connect, I&apos;d love to hear from you!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild size="lg" className="bg-white text-black hover:bg-zinc-200 font-semibold">
                <a href="/contact">
                  <Mail className="mr-2" size={20} />
                  Get In Touch
                </a>
              </Button>

              <div className="flex items-center gap-2 text-zinc-400">
                <span>or reach me at</span>
                <a
                  href="mailto:yash2154rai@gmail.com"
                  className="text-white hover:text-zinc-300 transition-colors underline decoration-zinc-600 hover:decoration-zinc-400"
                >
                  yash2154rai@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <footer className=" bg-black mt-12">
          <div className="max-w-8xl mx-auto px-6 py-10">
            {/* Top: Brand + brief */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-10">
              <div>
                <Link href="/" className={`text-2xl font-semibold text-white ${inter.className}`}>
                  Yash Rai
                </Link>
                <p className="mt-2 text-zinc-400 max-w-xl">
                  Full‑stack developer crafting performant products with delightful UX.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/yasshrai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/yasshrai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:yash2154rai@gmail.com"
                  className="p-2 rounded-full border border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Links grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 pb-6">
              <div>
                <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">Company</h4>
                <ul className="space-y-2 text-zinc-300">
                  <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                  <li><Link href="/skills" className="hover:text-white transition-colors">Skills</Link></li>
                  <li><a href="/yashrai_resume.pdf" target="_blank" className="hover:text-white transition-colors">Resume</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">Work</h4>
                <ul className="space-y-2 text-zinc-300">
                  <li><Link href="/project" className="hover:text-white transition-colors">Projects</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">Resources</h4>
                <ul className="space-y-2 text-zinc-300">
                  <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><a href="https://github.com/yasshrai" target="_blank" className="hover:text-white transition-colors">GitHub</a></li>
                  <li><a href="https://www.linkedin.com/in/yasshrai/" target="_blank" className="hover:text-white transition-colors">LinkedIn</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">Contact</h4>
                <ul className="space-y-2 text-zinc-300">
                  <li><a href="/contact" className="hover:text-white transition-colors">message me</a></li>
                  <li><a href="mailto:yash2154rai@gmail.com" className="hover:text-white transition-colors">yash2154rai@gmail.com</a></li>
                  <li><a href="/yashrai_resume.pdf" target="_blank" className="hover:text-white transition-colors">Download CV</a></li>
                </ul>
              </div>


            </div>

            {/* Bottom bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-800">
              <p className="text-sm text-zinc-500"> &copy; {new Date().getFullYear()} Yash Rai. All rights reserved.</p>
              <div className="text-sm text-zinc-500">
                Built with <span className="text-zinc-300">Next.js</span> • Deployed on <span className="text-zinc-300">Vercel</span>
              </div>
            </div>
          </div>
        </footer>
      </motion.section>
    </main>
  )
}
