"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function BlogSlugLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter()

  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-black to-zinc-950">
      {/* Back Button */}
      <div className="sticky top-4 z-50 mx-auto w-full max-w-3xl px-4 md:px-8">
        <Button
          variant="ghost"
          size="sm"
          className="group flex items-center gap-1 text-zinc-400 hover:bg-zinc-800/50 hover:text-white"
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to blog
        </Button>
      </div>
      
      {/* Page Content */}
      {children}
    </div>
  )
}
