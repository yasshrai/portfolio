"use client"

import Image, { type StaticImageData } from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  image: StaticImageData | string
  title: string
  description: string
  link: string
  color?: string
  tech?: string[]
  index?: number
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function ProjectCard({
  image,
  title,
  description,
  link,
  color = "cyan",
  tech = [],
  index = 0,
}: ProjectCardProps) {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          gradient: "from-blue-500/5 via-transparent to-blue-400/5",
          shadow: "shadow-blue-500/10",
          hoverShadow: "group-hover:shadow-blue-400/20",
          border: "group-hover:border-blue-500/30",
          button: "from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600",
        }
      case "emerald":
        return {
          gradient: "from-emerald-500/5 via-transparent to-emerald-400/5",
          shadow: "shadow-emerald-500/10",
          hoverShadow: "group-hover:shadow-emerald-400/20",
          border: "group-hover:border-emerald-500/30",
          button: "from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600",
        }
      case "pink":
        return {
          gradient: "from-pink-500/5 via-transparent to-pink-400/5",
          shadow: "shadow-pink-500/10",
          hoverShadow: "group-hover:shadow-pink-400/20",
          border: "group-hover:border-pink-500/30",
          button: "from-pink-600 to-pink-700 hover:from-pink-500 hover:to-pink-600",
        }
      case "purple":
        return {
          gradient: "from-purple-500/5 via-transparent to-purple-400/5",
          shadow: "shadow-purple-500/10",
          hoverShadow: "group-hover:shadow-purple-400/20",
          border: "group-hover:border-purple-500/30",
          button: "from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600",
        }
      case "cyan":
        return {
          gradient: "from-cyan-500/5 via-transparent to-cyan-400/5",
          shadow: "shadow-cyan-500/10",
          hoverShadow: "group-hover:shadow-cyan-400/20",
          border: "group-hover:border-cyan-500/30",
          button: "from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600",
        }
      default:
        return {
          gradient: "from-zinc-500/5 via-transparent to-zinc-400/5",
          shadow: "shadow-zinc-500/10",
          hoverShadow: "group-hover:shadow-zinc-400/20",
          border: "group-hover:border-zinc-500/30",
          button: "from-zinc-600 to-zinc-700 hover:from-zinc-500 hover:to-zinc-600",
        }
    }
  }

  const colorClasses = getColorClasses(color)

  return (
    <motion.div
      variants={cardVariants}
      className="w-full max-w-[400px] group relative"
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
    >
      {/* Multiple layered background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/30 via-zinc-700/20 to-zinc-900/40 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      <div
        className={`absolute inset-0 bg-gradient-to-r ${colorClasses.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />
      <div className="absolute inset-[-1px] bg-gradient-to-br from-zinc-600/20 via-zinc-500/10 to-zinc-700/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <Card
        className={`relative h-full bg-gradient-to-br from-zinc-900/90 to-zinc-800/60 backdrop-blur-xl border border-zinc-700/50 hover:border-zinc-600/70 ${colorClasses.border} transition-all duration-500 overflow-hidden shadow-2xl shadow-zinc-900/50 hover:shadow-zinc-800/60 ${colorClasses.hoverShadow}`}
      >
        <CardHeader className="p-0 relative">
          <div className="relative h-48 w-full overflow-hidden">
            {/* Enhanced image background effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/95 via-zinc-900/60 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 to-zinc-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Color-themed overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-${color}-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20`}
            />
          </div>
        </CardHeader>

        <CardContent className="p-6 relative">
          {/* Content background effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/10 to-zinc-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            <CardTitle className="text-2xl font-bold mb-3 text-white group-hover:text-zinc-100 transition-colors duration-300">
              {title}
            </CardTitle>

            {/* Tech stack tags */}
            {tech.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {tech.slice(0, 3).map((techItem, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs bg-zinc-800/50 border border-zinc-700/50 rounded-full text-zinc-300 group-hover:bg-zinc-700/50 group-hover:border-zinc-600/50 transition-all duration-300"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            )}

            <CardDescription className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 leading-relaxed">
              {description}
            </CardDescription>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <Button
            asChild
            className={`relative w-full bg-gradient-to-r ${colorClasses.button} text-white border-0 shadow-lg ${colorClasses.shadow} ${colorClasses.hoverShadow} transition-all duration-300 font-semibold`}
          >
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              View Project <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
