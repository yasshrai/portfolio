"use client"

import { useEffect, useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

type PostItem = {
  _id: string
  title: string
  summary: string
  slug: string
  createdAt: string
}

const MainSection = () => {
  const [posts, setPosts] = useState<PostItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleHoverStart = useCallback((slug: string) => {
    router.prefetch(`/blog/${slug}`)
  }, [router])

  useEffect(() => {
    let isMounted = true

    const fetchPosts = async () => {
      try {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 5000)

        const res = await fetch("/api/posts", {
          next: { revalidate: 60 },
          signal: controller.signal
        })

        clearTimeout(timeoutId)

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)

        const data = await res.json()
        if (isMounted) {
          setPosts(data.posts || [])
          setLoading(false)
        }
      } catch (e: any) {
        if (isMounted) {
          setError(e?.message || "Failed to load posts.")
          setLoading(false)
        }
      }
    }

    fetchPosts()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 px-6 pt-32 pb-24 w-full max-w-4xl mx-auto"
    >
      {/* Header */}
      <div className="mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
          Thoughts &<br /><span className="text-zinc-600">Writings</span>
        </h1>
        <p className="text-lg text-zinc-400 max-w-lg leading-relaxed">
          Exploring software engineering, design patterns, and the future of web technology.
        </p>
      </div>

      {/* Content State */}
      <div className="min-h-[300px]">
        {loading && (
          <div className="space-y-8 animate-pulse">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-b border-zinc-900 pb-8">
                <div className="h-6 w-2/3 bg-zinc-900 rounded mb-4" />
                <div className="h-4 w-1/3 bg-zinc-900 rounded" />
              </div>
            ))}
          </div>
        )}

        {!loading && error && (
          <p className="text-red-400 font-light">{error}</p>
        )}

        {!loading && !error && posts.length === 0 && (
          <p className="text-zinc-500 font-light">No articles published yet.</p>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="flex flex-col">
            {posts.map((p) => (
              <Link
                key={p._id}
                href={`/blog/${p.slug}`}
                onMouseEnter={() => handleHoverStart(p.slug)}
                className="group py-8 border-b border-zinc-900 transition-colors hover:border-zinc-800"
              >
                <article className="grid md:grid-cols-[1fr_auto] gap-4 items-start">
                  <div className="space-y-3">
                    <h2 className="text-2xl font-medium text-zinc-100 group-hover:text-white transition-colors">
                      {p.title}
                    </h2>
                    <p className="text-zinc-500 line-clamp-2 leading-relaxed max-w-2xl group-hover:text-zinc-400 transition-colors">
                      {p.summary}
                    </p>
                    <div className="pt-2">
                      <span className="text-xs text-zinc-600 font-mono">
                        {new Date(p.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                    </div>
                  </div>

                  <div className="hidden md:block pt-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowUpRight className="text-zinc-400" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  )
}

export default MainSection