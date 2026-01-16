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
  // Color classes removed for minimal design
  // const colorClasses = getColorClasses(color)

  return (
    <motion.div
      variants={cardVariants}
      className="w-full max-w-[400px] group relative"
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
    >
      <Card
        className="relative h-full bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 overflow-hidden"
      >
        <CardHeader className="p-0 relative">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500" />
          </div>
        </CardHeader>

        <CardContent className="p-6 relative">
          <div className="relative z-10">
            <CardTitle className="text-xl font-bold mb-3 text-white">
              {title}
            </CardTitle>

            {/* Tech stack tags */}
            {tech.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {tech.slice(0, 3).map((techItem, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs bg-zinc-800/60 border border-zinc-800 rounded text-zinc-400"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            )}

            <CardDescription className="text-zinc-400 leading-relaxed line-clamp-3">
              {description}
            </CardDescription>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0 relative mt-auto">
          <Button
            asChild
            variant="outline"
            className="w-full border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all font-medium"
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
