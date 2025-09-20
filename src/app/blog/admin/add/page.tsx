"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { Inter } from "next/font/google"
import { app } from "../../../firebase/config"
import { getAuth, onAuthStateChanged, User } from "firebase/auth"

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

export default function AddBlogPage() {
  const auth = useMemo(() => getAuth(app), [])
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [checking, setChecking] = useState(true)

  // Form state
  const [title, setTitle] = useState("")
  const [summary, setSummary] = useState("")
  const [content, setContent] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u)
      setChecking(false)
      if (!u) {
        // Not authenticated -> go to admin sign-in
        router.replace("/blog/admin")
      }
    })
    return () => unsub()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    setSuccess(null)
    try {
      // TODO: Integrate with your backend/Firestore to persist the blog post.
      // For now, we just simulate a submission delay.
      await new Promise((res) => setTimeout(res, 800))
      setSuccess("Blog draft saved (stub). Replace with actual save logic.")
      setTitle("")
      setSummary("")
      setContent("")
    } catch (err) {
      setError("Failed to save blog. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  if (checking || !user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-black to-zinc-950 text-zinc-200">
        <p className="text-sm text-zinc-400">Checking authentication...</p>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen w-screen flex-col bg-gradient-to-b from-black to-zinc-950 px-4 text-white md:px-8">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-white/2 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-zinc-500/3 blur-[120px]" />
      </div>

      <div className="z-10 mx-auto mt-16 w-full max-w-2xl rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-xl backdrop-blur">
        <div className="mb-6 flex items-center justify-between">
          <h1 className={`text-2xl font-bold ${inter.className}`}>Add Blog Post</h1>
          <button
            onClick={() => router.push("/blog/admin")}
            className="rounded-md border border-zinc-700 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-800"
          >
            Back to Admin
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm text-zinc-300">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white outline-none placeholder:text-zinc-400 focus:border-zinc-500"
              placeholder="Your blog title"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-zinc-300">Summary</label>
            <input
              type="text"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              required
              className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white outline-none placeholder:text-zinc-400 focus:border-zinc-500"
              placeholder="A short summary"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-zinc-300">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows={10}
              className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white outline-none placeholder:text-zinc-400 focus:border-zinc-500"
              placeholder="Write your content here..."
            />
          </div>

          {error && <div className="rounded-md bg-red-500/10 p-3 text-sm text-red-300">{error}</div>}
          {success && <div className="rounded-md bg-emerald-500/10 p-3 text-sm text-emerald-300">{success}</div>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-md bg-zinc-200 px-4 py-2 font-medium text-zinc-900 transition hover:bg-white disabled:opacity-60"
          >
            {submitting ? "Saving..." : "Save Draft"}
          </button>
        </form>
      </div>
    </main>
  )
}
