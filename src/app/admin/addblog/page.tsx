"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { Inter } from "next/font/google"
import { app } from "../../firebase/config"
import { getAuth, onAuthStateChanged, User } from "firebase/auth"
import { UploadDropzone } from "@/utils/uploadthing"

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
  const [slug, setSlug] = useState("")
  const [author, setAuthor] = useState("")
  const [imageKey, setImageKey] = useState<string | undefined>()
  const [imageUrl, setImageUrl] = useState<string | undefined>()
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u)
      setChecking(false)
      if (!u) {
        // Not authenticated -> go to admin sign-in
        router.replace("/admin")
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
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          summary,
          content,
          slug,
          imageKey,
          imageUrl,
          uid: user?.uid,
          author,
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || "Failed to save post")
      }
      setSuccess("Post saved successfully")
      setTitle("")
      setSummary("")
      setContent("")
      setSlug("")
      setAuthor("")
      setImageKey(undefined)
      setImageUrl(undefined)
    } catch (err: any) {
      setError(err?.message || "Failed to save blog. Please try again.")
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
    <main className="flex min-h-screen w-screen flex-col bg-black  px-4 text-white md:px-8">


      <div className="z-10 mx-auto mt-16 w-full max-w-2xl rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-xl backdrop-blur">
        <div className="mb-6 flex items-center justify-between">
          <h1 className={`text-2xl font-bold ${inter.className}`}>Add Blog Post</h1>
          <button
            onClick={() => router.push("/admin")}
            className="rounded-md border border-zinc-700 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-800"
          >
            Back to Admin
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
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
            <div className="mb-1 flex items-center justify-between">
              <label className="block text-sm text-zinc-300">Slug</label>
              <button
                type="button"
                onClick={() => {
                  const v = (title || "")
                    .toLowerCase()
                    .normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
                    .replace(/[^a-z0-9\s-]/g, "")
                    .trim()
                    .replace(/\s+/g, "-")
                    .replace(/-+/g, "-")
                    .replace(/^-+|-+$/g, "")
                    .slice(0, 80)
                  setSlug(v)
                }}
                className="text-xs text-zinc-400 hover:text-zinc-200"
              >
                Generate from title
              </button>
            </div>
            <input
              type="text"
              value={slug}
              onChange={(e) => {
                const v = e.target.value
                  .toLowerCase()
                  .normalize("NFKD").replace(/[\u0300-\u036f]/g, "") // remove accents
                  .replace(/[\u2012-\u2015\u2212]/g, "-")           // normalize unicode dashes to hyphen
                  .replace(/[^a-z0-9\s-]/g, "")                     // allow letters, numbers, spaces, hyphens
                  .replace(/\s+/g, "-")                             // spaces -> hyphen
                  .replace(/-+/g, "-")                              // collapse multiple hyphens
                  .slice(0, 80)
                setSlug(v)
              }}
              onBlur={() => setSlug((s) => s.replace(/^-+|-+$/g, ""))}
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              inputMode="text"
              required
              pattern="[a-z0-9-]{1,80}"
              title="Use lowercase letters, numbers, and hyphens only (max 80 characters)"
              className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white outline-none placeholder:text-zinc-400 focus:border-zinc-500"
              placeholder="custom-url-slug"
            />
            <div className="mt-1 flex items-center justify-between">
              <p className="text-xs text-zinc-400">Required. Lowercase letters, numbers and hyphens only. Example: my-first-post</p>
              {slug && (
                <p className="text-xs text-zinc-500">Preview: /blog/{slug}</p>
              )}
            </div>
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
            <label className="mb-1 block text-sm text-zinc-300">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white outline-none placeholder:text-zinc-400 focus:border-zinc-500"
              placeholder="Author name"
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

          <div>
            <label className="mb-2 block text-sm text-zinc-300">Cover Image</label>
            <UploadDropzone
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                const f = res?.[0]
                setImageKey(f?.key)
                // prefer url returned from server (ufsUrl) if present
                // uploadthing client also has .url
                setImageUrl((f as any)?.url || (f as any)?.ufsUrl)
              }}
              onUploadError={(err: Error) => {
                setError(err.message)
              }}
              content={{
                label: "Drop an image here (max 16MB)",
              }}
              appearance={{
                button: "bg-zinc-200 text-zinc-900 hover:bg-white",
                container: "border border-zinc-700 bg-zinc-900/40 rounded-md h-[300px] p-3",
              }}
            />
            {imageKey && (
              <p className="mt-2 text-xs text-zinc-400">Image selected. Key: {imageKey}</p>
            )}
          </div>

          {error && <div className="rounded-md bg-red-500/10 p-3 text-sm text-red-300">{error}</div>}
          {success && <div className="rounded-md bg-zinc-800 p-3 text-sm text-zinc-300">{success}</div>}

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
