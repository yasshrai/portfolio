"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

type PostItem = {
  _id: string
  title: string
  summary: string
  imageUrl?: string
  slug: string
  createdAt: string
  author?: string
}

const MainSection = () => {
  const [posts, setPosts] = useState<PostItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/posts", { cache: "no-store" })
        if (!res.ok) throw new Error("Failed to fetch posts")
        const data = await res.json()
        setPosts(data.posts || [])
      } catch (e: any) {
        setError(e?.message || "Failed to load posts")
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 py-16 px-4 md:px-8"
      >
        <div className="mx-auto w-full max-w-6xl">
          <h1 className={`mb-8 text-3xl font-bold ${inter.className}`}>Blog</h1>

          {loading && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40 shadow"
                >
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

          {!loading && error && (
            <p className="text-red-300">{error}</p>
          )}

          {!loading && !error && posts.length === 0 && (
            <p className="text-zinc-400">No posts yet.</p>
          )}

          {!loading && !error && posts.length > 0 && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <Link key={p._id} href={`/blog/${p.slug}`} className="group">
                  <article className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40 shadow transition hover:border-zinc-700">
                    <div className="relative aspect-video w-full overflow-hidden bg-zinc-800">
                      {p.imageUrl ? (
                        <Image
                          src={p.imageUrl}
                          alt={p.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                          priority={false}
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-zinc-500">
                          No cover image
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h2 className="line-clamp-2 text-lg font-semibold text-white">{p.title}</h2>
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
        </div>
      </motion.section>
    </>
  )
}

export default MainSection