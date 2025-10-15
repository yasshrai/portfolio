"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Inter } from "next/font/google"
import { app } from "@/app/firebase/config"
import { getAuth, onAuthStateChanged, User } from "firebase/auth"

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

export default function AddUrlPage() {
  const auth = getAuth(app)
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [checking, setChecking] = useState(true)

  // Form state
  const [longUrl, setLongUrl] = useState("")
  const [customSlug, setCustomSlug] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [checkingSlug, setCheckingSlug] = useState(false)
  const [slugAvailable, setSlugAvailable] = useState<boolean | null>(null)

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

  // Check slug availability when customSlug changes
  useEffect(() => {
    const checkSlugAvailability = async () => {
      if (!customSlug.trim()) {
        setSlugAvailable(null)
        return
      }

      setCheckingSlug(true)
      try {
        const res = await fetch(`/api/urls?slug=${encodeURIComponent(customSlug)}`)
        const data = await res.json()
        setSlugAvailable(data.available)
      } catch (err) {
        console.error("Error checking slug availability:", err)
        setSlugAvailable(null)
      } finally {
        setCheckingSlug(false)
      }
    }

    const debounceTimer = setTimeout(checkSlugAvailability, 500)
    return () => clearTimeout(debounceTimer)
  }, [customSlug])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    setSuccess(null)

    if (!slugAvailable) {
      setError("Please choose an available custom slug")
      setSubmitting(false)
      return
    }

    try {
      const res = await fetch("/api/urls", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          longUrl,
          customSlug,
          uid: user?.uid,
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || "Failed to create URL mapping")
      }

      const data = await res.json()
      setSuccess(`URL shortened successfully! Short URL: ${data.shortUrl}`)

      // Reset form
      setLongUrl("")
      setCustomSlug("")
      setSlugAvailable(null)
    } catch (err: any) {
      setError(err?.message || "Failed to create URL mapping. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
      .toLowerCase()
      .normalize("NFKD").replace(/[\u0300-\u036f]/g, "") // remove accents
      .replace(/[\u2012-\u2015\u2212]/g, "-")           // normalize unicode dashes to hyphen
      .replace(/[^a-z0-9\s-]/g, "")                     // allow letters, numbers, spaces, hyphens
      .replace(/\s+/g, "-")                             // spaces -> hyphen
      .replace(/-+/g, "-")                              // collapse multiple hyphens
      .slice(0, 80)
    setCustomSlug(value)
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
          <h1 className={`text-2xl font-bold ${inter.className}`}>Add URL Shortener</h1>
          <button
            onClick={() => router.push("/admin")}
            className="rounded-md border border-zinc-700 px-3 py-1 text-sm text-zinc-300 hover:bg-zinc-800"
          >
            Back to Admin
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-1 block text-sm text-zinc-300">Long URL</label>
            <input
              type="url"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              required
              className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white outline-none placeholder:text-zinc-400 focus:border-zinc-500"
              placeholder="https://example.com/very-long-url"
            />
            <p className="mt-1 text-xs text-zinc-400">The original URL that you want to shorten</p>
          </div>

          <div>
            <div className="mb-1 flex items-center justify-between">
              <label className="block text-sm text-zinc-300">Custom Slug</label>
              <button
                type="button"
                onClick={() => {
                  const randomSlug = Math.random().toString(36).substring(2, 8)
                  setCustomSlug(randomSlug)
                }}
                className="text-xs text-zinc-400 hover:text-zinc-200"
              >
                Generate random
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                value={customSlug}
                onChange={handleSlugChange}
                onBlur={() => setCustomSlug((s) => s.replace(/^-+|-+$/g, ""))}
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
                inputMode="text"
                required
                pattern="[a-z0-9-]{1,80}"
                title="Use lowercase letters, numbers, and hyphens only (max 80 characters)"
                className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white outline-none placeholder:text-zinc-400 focus:border-zinc-500"
                placeholder="my-custom-url"
              />
              {checkingSlug && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-600 border-t-zinc-400"></div>
                </div>
              )}
            </div>
            <div className="mt-1 flex items-center justify-between">
              <p className="text-xs text-zinc-400">
                Required. Lowercase letters, numbers and hyphens only. Example: my-url
              </p>
              {customSlug && (
                <p className="text-xs text-zinc-500">
                  Preview: /{customSlug}
                  {slugAvailable === true && (
                    <span className="ml-2 text-emerald-400">✓ Available</span>
                  )}
                  {slugAvailable === false && (
                    <span className="ml-2 text-red-400">✗ Not available</span>
                  )}
                </p>
              )}
            </div>
          </div>

          {error && <div className="rounded-md bg-red-500/10 p-3 text-sm text-red-300">{error}</div>}
          {success && <div className="rounded-md bg-emerald-500/10 p-3 text-sm text-emerald-300">{success}</div>}

          <button
            type="submit"
            disabled={submitting || !slugAvailable}
            className="w-full rounded-md bg-zinc-200 px-4 py-2 font-medium text-zinc-900 transition hover:bg-white disabled:opacity-60"
          >
            {submitting ? "Creating..." : "Create Short URL"}
          </button>
        </form>
      </div>
    </main>
  )
}
