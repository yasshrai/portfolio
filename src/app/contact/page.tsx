"use client"

import { useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Kanit } from "next/font/google"
import { ArrowRight, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"

const kanit = Kanit({ subsets: ["latin"], weight: "800" })

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      })

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          className:"bg-black text-white",
          description: "I'll get back to you soon.",
          duration: 3000,
        })
        setName("")
        setEmail("")
        setMessage("")
        setTimeout(() => router.push("/"), 3000) // Redirect to home page after 3 seconds
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error",
        className:"bg-black text-white",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
        duration: 3000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex flex-col w-screen min-h-screen bg-gradient-to-b from-black to-zinc-950 text-white overflow-hidden">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-zinc-950/90" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      {/* Contact Form Section */}
      <section className="relative flex flex-col w-screen min-h-screen justify-center items-center py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-2xl"
        >
          <Card className="bg-zinc-900/40 border-zinc-800 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className={`text-3xl md:text-4xl font-bold text-center ${kanit.className}`}>
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                  Get in Touch
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 text-zinc-400">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-zinc-800/50 border-zinc-700 text-white placeholder-zinc-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-zinc-400">
                    Email/number
                  </label>
                  <Input
                    type="text"
                    id="email"
                    placeholder="Enter your email or phone number"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-zinc-800/50 border-zinc-700 text-white placeholder-zinc-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-zinc-400">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    placeholder="Write your message"
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="bg-zinc-800/50 border-zinc-700 text-white placeholder-zinc-500"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90"
                >
                  {isSubmitting ? "Sending..." : "Send Message"} <Send className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative py-16 px-4 md:px-8 w-screen"
      >
        <div className="w-[90vw] mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${kanit.className}`}>
            Let&apos;s Create Something Amazing
          </h2>
          <p className="text-lg mb-8 text-zinc-400">
            I&apos;m always open to new opportunities, collaborations, and exciting projects. Don&apos;t hesitate to
            reach out!
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-zinc-900/50 text-white border-zinc-800 hover:bg-zinc-800/50"
          >
            <a href="https://github.com/yasshrai" target="_blank" rel="noopener noreferrer">
              Check My GitHub <ArrowRight className="ml-2" />
            </a>
          </Button>
        </div>
      </motion.section>
    </main>
  )
}

