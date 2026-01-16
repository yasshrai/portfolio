"use client"

import { useEffect, useMemo, useState } from "react"
import { Inter } from "next/font/google"
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { app } from "../firebase/config"
import { Eye, EyeOff } from "lucide-react"

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

export default function AdminPage() {
  const auth = useMemo(() => getAuth(app), [])
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u))
    return () => unsub()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)
    try {
      await signInWithEmailAndPassword(auth, email, password)
      setEmail("")
      setPassword("")

    } catch (err: any) {
      const code = err?.code || "auth/error"
      const message =
        code === "auth/invalid-credential"
          ? "Invalid email or password"
          : code === "auth/user-disabled"
            ? "This account has been disabled"
            : code === "auth/too-many-requests"
              ? "Too many attempts. Try again later"
              : "Login failed. Please try again"
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    setLoading(true)
    setError(null)
    setSuccess(null)
    try {
      await signOut(auth)
      setSuccess("Logged out")
    } catch {
      setError("Logout failed. Please try again")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen w-screen flex-col bg-black  px-4 text-white md:px-8">


      <div className="z-10 mx-auto mt-24 w-full max-w-md rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-xl backdrop-blur">
        <h1 className={`mb-4 text-center text-3xl font-bold ${inter.className}`}>Admin</h1>
        <p className="mb-6 text-center text-sm text-zinc-400">Sign in with email and password (existing accounts only)</p>

        {user ? (
          <div className="space-y-4">
            <div className="rounded-md bg-zinc-800 p-3 text-zinc-300">
              Logged in as <span className="font-medium">{user.email}</span>
            </div>
            <Link
              href="/admin/addblog"
              className="block w-full rounded-md bg-zinc-100 hover:bg-white px-4 py-2 text-center font-medium text-zinc-900 transition"
            >
              Add Blog Post
            </Link>
            <Link
              href="/admin/editblog"
              className="block w-full rounded-md bg-zinc-100 hover:bg-white px-4 py-2 text-center font-medium text-zinc-900 transition"
            >
              Edit Blog Post
            </Link>
            <Link
              href="/admin/addurl"
              className="block w-full rounded-md bg-zinc-100 hover:bg-white px-4 py-2 text-center font-medium text-zinc-900 transition"
            >
              Add URL
            </Link>
            <button
              onClick={handleLogout}
              disabled={loading}
              className="w-full rounded-md bg-zinc-200 px-4 py-2 font-medium text-zinc-900 transition hover:bg-white disabled:opacity-60"
            >
              {loading ? "Logging out..." : "Log out"}
            </button>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm text-zinc-300">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white outline-none placeholder:text-zinc-400 focus:border-zinc-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-zinc-300">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 pr-10 text-sm text-white outline-none placeholder:text-zinc-400 focus:border-zinc-500"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute inset-y-0 right-2 my-auto inline-flex h-8 w-8 items-center justify-center rounded-md text-zinc-400 hover:text-zinc-200 focus:outline-none"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && <div className="rounded-md bg-red-500/10 p-3 text-sm text-red-300">{error}</div>}
            {/* Removed inline success message in favor of toast */}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-md bg-zinc-200 px-4 py-2 font-medium text-zinc-900 transition hover:bg-white disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        )}
      </div>
    </main>
  )
}
