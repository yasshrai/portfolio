"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Inter } from "next/font/google"
import { ExternalLink, Link2, MousePointerClick, Calendar, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

interface UrlItem {
  id: string
  longUrl: string
  shortUrl: string
  customSlug: string
  clickCount: number
  createdAt: string
  updatedAt: string
}

export default function UrlListPage() {
  const [urls, setUrls] = useState<UrlItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const res = await fetch("/api/urls", { cache: "no-store" })
        if (!res.ok) throw new Error("Failed to fetch URLs")
        const data = await res.json()
        setUrls(data.urls || [])
      } catch (e: any) {
        setError(e?.message || "Failed to load URLs")
      } finally {
        setLoading(false)
      }
    }
    fetchUrls()
  }, [])

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const truncateUrl = (url: string, maxLength: number = 50) => {
    if (url.length <= maxLength) return url
    return url.substring(0, maxLength) + "..."
  }

  return (
    <main className="flex flex-col w-screen min-h-screen bg-black text-white overflow-x-hidden">
      <section className="relative flex flex-col w-screen min-h-[calc(100vh-80px)] items-center justify-center gap-8 py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-7xl"
        >
          {/* Header */}
          <div className="mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="inline-block px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 rounded-full text-sm text-zinc-300 mb-6">
                URL Shortener • All Links
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-4xl lg:text-5xl font-bold mb-4 tracking-tight ${inter.className}`}
            >
              <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-300 text-transparent bg-clip-text">
                URL Mappings
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-zinc-400 max-w-2xl mx-auto"
            >
              View all shortened URLs and their destinations
            </motion.p>
          </div>

          {/* Table Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group"
          >
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/30 via-zinc-700/20 to-zinc-900/40 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-[-1px] bg-gradient-to-br from-zinc-600/20 via-zinc-700/10 to-zinc-800/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <Card className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-800/60 backdrop-blur-xl border border-zinc-700/50 rounded-3xl shadow-2xl shadow-zinc-900/50 hover:shadow-zinc-800/60 transition-all duration-500 overflow-hidden">
              <CardHeader className="border-b border-zinc-700/50">
                <CardTitle className={`text-2xl text-white font-semibold ${inter.className} flex items-center gap-2`}>
                  <Link2 className="text-blue-400" size={24} />
                  All URL Mappings
                  <span className="ml-auto text-sm font-normal text-zinc-400">
                    {urls.length} {urls.length === 1 ? "link" : "links"}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {loading && (
                  <div className="p-8 text-center">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-zinc-700 border-t-blue-400"></div>
                    <p className="mt-4 text-zinc-400">Loading URLs...</p>
                  </div>
                )}

                {error && (
                  <div className="p-8 text-center">
                    <p className="text-red-400">{error}</p>
                  </div>
                )}

                {!loading && !error && urls.length === 0 && (
                  <div className="p-12 text-center">
                    <Link2 className="mx-auto mb-4 text-zinc-600" size={48} />
                    <p className="text-zinc-400 text-lg">No URLs found</p>
                    <p className="text-zinc-500 text-sm mt-2">Create your first shortened URL to get started</p>
                  </div>
                )}

                {!loading && !error && urls.length > 0 && (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-zinc-700/50 bg-zinc-900/40">
                          <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-300 uppercase tracking-wider">
                            Short URL
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-300 uppercase tracking-wider">
                            Destination URL
                          </th>
                          <th className="px-6 py-4 text-center text-sm font-semibold text-zinc-300 uppercase tracking-wider">
                            Clicks
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-300 uppercase tracking-wider">
                            Created
                          </th>
                          <th className="px-6 py-4 text-center text-sm font-semibold text-zinc-300 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-800/50">
                        {urls.map((url, index) => (
                          <motion.tr
                            key={url.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                            className="hover:bg-zinc-800/30 transition-colors duration-200"
                          >
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <Link2 className="text-blue-400 flex-shrink-0" size={16} />
                                <a
                                  href={url.shortUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-400 hover:text-blue-300 transition-colors font-mono text-sm truncate max-w-xs"
                                  title={url.shortUrl}
                                >
                                  /url/{url.customSlug}
                                </a>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <ExternalLink className="text-zinc-500 flex-shrink-0" size={16} />
                                <span className="text-zinc-300 text-sm truncate max-w-md" title={url.longUrl}>
                                  {truncateUrl(url.longUrl, 60)}
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-center">
                              <div className="flex items-center justify-center gap-1 text-zinc-300">
                                <MousePointerClick size={16} className="text-zinc-500" />
                                <span className="font-medium">{url.clickCount}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2 text-zinc-400 text-sm">
                                <Calendar size={14} className="text-zinc-500" />
                                {formatDate(url.createdAt)}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center justify-center gap-2">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => copyToClipboard(url.shortUrl, url.id)}
                                  className="h-8 w-8 p-0 hover:bg-zinc-700/50 text-zinc-400 hover:text-white transition-colors"
                                  title="Copy short URL"
                                >
                                  {copiedId === url.id ? (
                                    <Check size={16} className="text-green-400" />
                                  ) : (
                                    <Copy size={16} />
                                  )}
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => copyToClipboard(url.longUrl, `long-${url.id}`)}
                                  className="h-8 w-8 p-0 hover:bg-zinc-700/50 text-zinc-400 hover:text-white transition-colors"
                                  title="Copy destination URL"
                                >
                                  {copiedId === `long-${url.id}` ? (
                                    <Check size={16} className="text-green-400" />
                                  ) : (
                                    <Copy size={16} />
                                  )}
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  asChild
                                  className="h-8 w-8 p-0 hover:bg-zinc-700/50 text-zinc-400 hover:text-white transition-colors"
                                  title="Open destination URL"
                                >
                                  <a href={url.longUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink size={16} />
                                  </a>
                                </Button>
                              </div>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}

