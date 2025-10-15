"use client"

import Image from "next/image"
import { Inter } from "next/font/google"
import Typewriter from "typewriter-effect"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Code, Briefcase, User, Folder, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import hero from "@/app/assets/hero.png"
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
      {/* Enhanced Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />
        <div className="absolute right-0 top-0 h-[800px] w-[800px] bg-gradient-to-l from-zinc-800/5 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] bg-gradient-to-r from-zinc-700/5 to-transparent rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] bg-gradient-to-r from-zinc-600/3 to-zinc-500/3 rounded-full blur-[80px]" />
      </div>

      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row w-screen min-h-[calc(100vh-80px)] items-center justify-center gap-8 py-16 px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 max-w-2xl z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 rounded-full text-sm text-zinc-300">
              Software Engineer • Web Platforms
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-300 text-transparent bg-clip-text">
              Engineering performant, reliable software.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 space-y-3"
          >
            <h2 className="text-lg lg:text-xl font-semibold text-white">Yash Rai</h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              I build scalable, accessible software with clear architecture and measurable impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4 mb-6"
          >
            <Button asChild className="bg-white text-black hover:bg-zinc-200 font-semibold">
              <Link href="/project">
                Projects <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-zinc-600 text-white hover:bg-stone-950 hover:text-gray-200 bg-transparent"
            >
              <Link href="/about">About</Link>
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6"
            aria-label="Professional highlights"
          >
            <li className="rounded-xl border border-zinc-700/50 bg-zinc-800/40 px-4 py-3 text-zinc-200">
              <p className="text-sm text-zinc-400">Focus</p>
              <p className="font-medium">Scalable Systems</p>
            </li>
            <li className="rounded-xl border border-zinc-700/50 bg-zinc-800/40 px-4 py-3 text-zinc-200">
              <p className="text-sm text-zinc-400">Approach</p>
              <p className="font-medium">Quality & Maintainability</p>
            </li>
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex gap-4"
          >
            <a
              href="https://github.com/yasshrai"
              target="blank"
              className="p-3 bg-zinc-800/50 border border-zinc-700/50 rounded-full hover:bg-zinc-700/50 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/yasshrai/"
              target="blank"
              className="p-3 bg-zinc-800/50 border border-zinc-700/50 rounded-full hover:bg-zinc-700/50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:yash2154rai@gmail.com"
              className="p-3 bg-zinc-800/50 border border-zinc-700/50 rounded-full hover:bg-zinc-700/50 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT: Image card — preserved background layers and colors exactly */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex-1 max-w-lg relative group"
        >
          {/* Multiple layered background effects (unchanged) */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/30 via-zinc-600/20 to-zinc-800/30 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-700" />
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/20 to-zinc-900/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          <div className="absolute inset-[-1px] bg-gradient-to-br from-zinc-600/20 via-zinc-500/10 to-zinc-700/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl shadow-zinc-900/50 hover:shadow-zinc-800/60 transition-all duration-500">
            <Image
              src={hero || "/placeholder.svg"}
              alt="Yash Rai - Software Engineer"
              width={500}
              height={500}
              className="w-full h-auto relative z-10 rounded-2xl group-hover:scale-105 transition-transform duration-700"
              priority
            />
            {/* Overlay gradient (unchanged) */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 via-transparent to-zinc-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          </div>
        </motion.div>
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

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative">
              {/* Enhanced background layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/30 via-zinc-700/20 to-zinc-900/40 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-[-1px] bg-gradient-to-br from-zinc-600/20 via-zinc-700/10 to-zinc-800/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-800/60 backdrop-blur-xl border border-zinc-700/50 rounded-2xl p-8 hover:border-zinc-600/70 transition-all duration-500 h-full shadow-2xl shadow-zinc-900/50 hover:shadow-zinc-800/60">
                <div className="bg-gradient-to-br from-blue-500/15 to-blue-600/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-500/25 group-hover:to-blue-600/15 transition-all duration-300 shadow-lg shadow-blue-500/10">
                  <Code className="text-blue-400 group-hover:text-blue-300 transition-colors" size={32} />
                </div>
                <h3
                  className={`text-xl font-semibold mb-4 ${inter.className} group-hover:text-zinc-100 transition-colors`}
                >
                  Full-Stack Development
                </h3>
                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  Proficient in modern web technologies, from React and Next.js to Node.js and databases.
                </p>
              </div>
            </div>

            <div className="group relative">
              {/* Enhanced background layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/30 via-zinc-700/20 to-zinc-900/40 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-purple-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-[-1px] bg-gradient-to-br from-zinc-600/20 via-zinc-700/10 to-zinc-800/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-800/60 backdrop-blur-xl border border-zinc-700/50 rounded-2xl p-8 hover:border-zinc-600/70 transition-all duration-500 h-full shadow-2xl shadow-zinc-900/50 hover:shadow-zinc-800/60">
                <div className="bg-gradient-to-br from-purple-500/15 to-purple-600/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:from-purple-500/25 group-hover:to-purple-600/15 transition-all duration-300 shadow-lg shadow-purple-500/10">
                  <Briefcase className="text-purple-400 group-hover:text-purple-300 transition-colors" size={32} />
                </div>
                <h3
                  className={`text-xl font-semibold mb-4 ${inter.className} group-hover:text-zinc-100 transition-colors`}
                >
                  Project Leadership
                </h3>
                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  Experienced in leading teams and delivering complex projects from conception to deployment.
                </p>
              </div>
            </div>

            <div className="group relative">
              {/* Enhanced background layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/30 via-zinc-700/20 to-zinc-900/40 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-transparent to-pink-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-[-1px] bg-gradient-to-br from-zinc-600/20 via-zinc-700/10 to-zinc-800/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-800/60 backdrop-blur-xl border border-zinc-700/50 rounded-2xl p-8 hover:border-zinc-600/70 transition-all duration-500 h-full shadow-2xl shadow-zinc-900/50 hover:shadow-zinc-800/60">
                <div className="bg-gradient-to-br from-pink-500/15 to-pink-600/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:from-pink-500/25 group-hover:to-pink-600/15 transition-all duration-300 shadow-lg shadow-pink-500/10">
                  <User className="text-pink-400 group-hover:text-pink-300 transition-colors" size={32} />
                </div>
                <h3
                  className={`text-xl font-semibold mb-4 ${inter.className} group-hover:text-zinc-100 transition-colors`}
                >
                  UI/UX Design
                </h3>
                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  Creating intuitive and visually appealing interfaces that prioritize user experience.
                </p>
              </div>
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
            <div className="relative group">
              {/* Multiple background layers for depth */}
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/60 via-zinc-800/40 to-zinc-900/60 rounded-3xl blur-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/3 to-emerald-600/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-[-2px] bg-gradient-to-br from-zinc-600/30 via-zinc-500/20 to-zinc-700/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/50 backdrop-blur-2xl border border-zinc-700/60 rounded-3xl p-16 shadow-2xl shadow-zinc-900/60 hover:shadow-zinc-800/70 transition-all duration-500">
                {/* Icon container with enhanced effects */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-gradient-to-br from-indigo-500/15 to-blue-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-400/30 transition-all duration-300">
                    <Folder className="text-blue-400 group-hover:text-blue-300 transition-colors" size={40} />
                  </div>
                </div>

                <h2
                  className={`text-4xl lg:text-5xl font-bold mb-8 ${inter.className} tracking-tight group-hover:text-zinc-100 transition-colors duration-300`}
                >
                  Crafting Digital
                  <span className="block bg-gradient-to-r from-indigo-600 to-blue-600 text-transparent bg-clip-text group-hover:from-indigo-500 group-hover:to-blue-500 transition-all duration-300">
                    Experiences
                  </span>
                </h2>

                <p
                  className={`text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed ${inter.className} group-hover:text-zinc-300 transition-colors duration-300`}
                >
                  From concept to deployment, I bring ideas to life through code. Each project is a journey of
                  innovation, problem-solving, and continuous learning.
                </p>

                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-indigo-800 to-blue-800 hover:from-indigo-600 hover:to-blue-600 text-white border-0 font-semibold px-8 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/40 transition-all duration-300"
                >
                  <Link href="/project">
                    View My Projects <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
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
                  <div key={i} className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40 shadow">
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
                      className={`overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40 shadow transition hover:border-zinc-700 ${posts.length === 1 ? "max-w-md md:max-w-2xl lg:max-w-3xl w-full mx-auto" : ""
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

        <footer className=" bg-zinc-950 mt-12">
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
