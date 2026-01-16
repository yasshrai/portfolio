"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { Inter } from "next/font/google"
import { app } from "../../firebase/config"
import { getAuth, onAuthStateChanged, User } from "firebase/auth"
import { UploadDropzone } from "@/utils/uploadthing"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

type Post = {
  _id: string
  title: string
  summary: string
  content: string
  slug: string
  author: string
  imageKey?: string
  imageUrl?: string
  createdAt: string
}

export default function EditBlogPage() {
  const auth = useMemo(() => getAuth(app), [])
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [checking, setChecking] = useState(true)

  // Post selection state
  const [posts, setPosts] = useState<Post[]>([])
  const [selectedPostId, setSelectedPostId] = useState<string>("")
  const [loadingPosts, setLoadingPosts] = useState(false)
  const [selectingPost, setSelectingPost] = useState(true)

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
        router.replace("/admin")
      }
    })
    return () => unsub()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (user) {
      fetchPosts()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const fetchPosts = async () => {
    setLoadingPosts(true)
    try {
      const res = await fetch("/api/posts")
      if (!res.ok) throw new Error("Failed to fetch posts")
      const data = await res.json()
      setPosts(data.posts || [])
    } catch (err) {
      setError("Failed to load posts")
    } finally {
      setLoadingPosts(false)
    }
  }

  const handleSelectPost = async (postId: string) => {
    setError(null)
    setSuccess(null)
    setLoadingPosts(true)
    try {
      const res = await fetch(`/api/posts/${postId}`)
      if (!res.ok) throw new Error("Failed to fetch post")
      const data = await res.json()
      const post = data.post

      setSelectedPostId(postId)
      setTitle(post.title || "")
      setSummary(post.summary || "")
      setContent(post.content || "")
      setSlug(post.slug || "")
      setAuthor(post.author || "")
      setImageKey(post.imageKey)
      setImageUrl(post.imageUrl)
      setSelectingPost(false)
    } catch (err: any) {
      setError(err?.message || "Failed to load post")
    } finally {
      setLoadingPosts(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    setSuccess(null)
    try {
      const res = await fetch(`/api/posts/${selectedPostId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          summary,
          content,
          slug,
          imageKey,
          imageUrl,
          author,
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || "Failed to update post")
      }
      setSuccess("Post updated successfully")
      // Refresh posts list
      await fetchPosts()
    } catch (err: any) {
      setError(err?.message || "Failed to update blog. Please try again.")
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

  if (selectingPost) {
    return (
      <main className="flex min-h-screen w-screen flex-col bg-black px-4 text-white md:px-8">
        <div className="z-10 mx-auto mt-16 w-full max-w-4xl rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-xl backdrop-blur">
          <div className="mb-6 flex items-center justify-between">
            <h1 className={`text-2xl font-bold ${inter.className}`}>Edit Blog Post</h1>
            <button
              onClick={() => router.push("/admin")}
              className="rounded-md border border-zinc-700 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-800"
            >
              Back to Admin
            </button>
          </div>

          {loadingPosts ? (
            <div className="py-8 text-center text-zinc-400">Loading posts...</div>
          ) : posts.length === 0 ? (
            <div className="py-8 text-center text-zinc-400">No posts found</div>
          ) : (
            <div className="space-y-3">
              <p className="mb-4 text-sm text-zinc-400">Select a post to edit:</p>
              {posts.map((post) => (
                <button
                  key={post._id}
                  onClick={() => handleSelectPost(post._id)}
                  className="w-full rounded-md border border-zinc-700 bg-zinc-800/50 p-4 text-left transition hover:bg-zinc-800 hover:border-zinc-600"
                >
                  <div className="flex items-start gap-4">
                    {post.imageUrl && (
                      <div className="relative h-20 w-32 flex-shrink-0 overflow-hidden rounded border border-zinc-700">
                        <Image
                          src={post.imageUrl}
                          alt={post.title}
                          fill
                          sizes="128px"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-white truncate">{post.title}</h3>
                      <p className="mt-1 text-sm text-zinc-400 line-clamp-2">{post.summary}</p>
                      <div className="mt-2 flex items-center gap-3 text-xs text-zinc-500">
                        <span>Slug: {post.slug}</span>
                        <span>•</span>
                        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {error && <div className="mt-4 rounded-md bg-red-500/10 p-3 text-sm text-red-300">{error}</div>}
        </div>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen w-screen flex-col bg-black px-4 text-white md:px-8">
      <div className="z-10 mx-auto mt-16 w-full max-w-2xl rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-xl backdrop-blur">
        <div className="mb-6 flex items-center justify-between">
          <h1 className={`text-2xl font-bold ${inter.className}`}>Edit Blog Post</h1>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setSelectingPost(true)
                setError(null)
                setSuccess(null)
              }}
              className="rounded-md border border-zinc-700 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-800"
            >
              Select Different Post
            </button>
            <button
              onClick={() => router.push("/admin")}
              className="rounded-md border border-zinc-700 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-800"
            >
              Back to Admin
            </button>
          </div>
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
                  .normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
                  .replace(/[\u2012-\u2015\u2212]/g, "-")
                  .replace(/[^a-z0-9\s-]/g, "")
                  .replace(/\s+/g, "-")
                  .replace(/-+/g, "-")
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
            {imageUrl && (
              <div className="mb-3 relative w-full max-w-md aspect-video rounded-md overflow-hidden border border-zinc-700">
                <Image
                  src={imageUrl}
                  alt="Current cover image"
                  fill
                  sizes="(max-width: 768px) 100vw, 512px"
                  className="object-cover"
                />
                <button
                  type="button"
                  onClick={() => {
                    setImageUrl(undefined)
                    setImageKey(undefined)
                  }}
                  className="absolute top-2 right-2 rounded-md bg-red-500/80 hover:bg-red-500 px-2 py-1 text-xs text-white"
                >
                  Remove
                </button>
              </div>
            )}
            <UploadDropzone
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                const f = res?.[0]
                setImageKey(f?.key)
                setImageUrl((f as any)?.url || (f as any)?.ufsUrl)
              }}
              onUploadError={(err: Error) => {
                setError(err.message)
              }}
              content={{
                label: imageUrl ? "Replace image (max 16MB)" : "Drop an image here (max 16MB)",
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
            {submitting ? "Updating..." : "Update Post"}
          </button>
        </form>
      </div>
    </main>
  )
}

