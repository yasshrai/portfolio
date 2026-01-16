"use client"

import Image, { type StaticImageData } from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Custom easing for smooth reveal
    },
  },
}

export default function ProjectCard({
  image,
  title,
  description,
  link,
  tech = [],
}: ProjectCardProps) {

  return (
    <motion.div
      variants={cardVariants}
      className="w-full group"
    >
      <Link href={link} target="_blank" rel="noopener noreferrer" className="block">
        {/* Image Container */}
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-zinc-900 mb-6">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
        </div>

        {/* Content */}
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-medium text-white mb-2 group-hover:text-zinc-200 transition-colors">
              {title}
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2 mb-3">
              {description}
            </p>

            {/* Minimal Tech Tags */}
            {tech.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tech.slice(0, 3).map((t, i) => (
                  <span key={i} className="text-xs text-zinc-600">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="pt-1">
            <ArrowUpRight className="text-zinc-600 w-5 h-5 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
