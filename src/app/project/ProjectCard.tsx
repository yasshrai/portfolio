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
}

export default function ProjectCard({ image, title, description, link }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="w-full sm:w-[350px] md:w-[400px]"
    >
      <Card className="h-full bg-zinc-950 border-zinc-800 hover:bg-zinc-900 transition-all duration-300 backdrop-blur-sm overflow-hidden group">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="text-2xl font-bold mb-2 text-white">{title}</CardTitle>
          <CardDescription className="text-zinc-400">{description}</CardDescription>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button asChild variant="secondary" className="w-full bg-zinc-800 hover:bg-zinc-700 text-white">
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              View Project <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

