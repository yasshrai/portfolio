"use client"

import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Download } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const handleChange = () => {
    setMobileMenu(!mobileMenu)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="h-[15vh] sticky top-0 w-full z-50 flex items-center justify-between px-4 md:px-8 bg-black/70 backdrop-blur-md border-b border-zinc-800/50 text-white"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center"
        >
          <h1 className="font-bold tracking-wider text-3xl bg-gradient-to-r from-cyan-400 to-teal-300 text-transparent bg-clip-text">
            Yash Rai
          </h1>
          <span className="h-3 w-3 rounded-full bg-orange-500 relative top-0 left-1"></span>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="hidden sm:flex justify-evenly sm:gap-8"
        >
          {[
            { name: "Home", route: "" },
            { name: "About me", route: "about" },
            { name: "Skills", route: "skills" },
            { name: "Projects", route: "project" },
            { name: "Blogs", route: "blog" }
          ].map(({ name, route }) => (
            <Link
              key={name}
              href={`/${route}`}
              onClick={handleChange}
              className="py-3 px-4 hover:bg-neutral-900 rounded-lg flex items-center justify-center font-semibold transition duration-300 ease-in-out"
            >
              {name}
            </Link>
          ))}

        </motion.ul>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="hidden sm:block"
        >

          <Button
            asChild
            variant="secondary"
            size="lg"
            className="mt-6 bg-gradient-to-r from-cyan-500 to-teal-600 text-white hover:opacity-90"
          >
            <Link href="/yashrai_resume.pdf" target="_blank">
              Resume <Download className="ml-2" size={20} />
            </Link>
          </Button>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="sm:hidden">
          <Button variant="ghost" size="icon" onClick={handleChange} className=" hover:bg-stone-900">
            {mobileMenu ? <Menu className="h-6 w-6 text-white " /> : <X className="h-6 w-6 text-white" />}
          </Button>
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {!mobileMenu && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="sm:hidden flex flex-col text-white h-auto w-64 fixed right-4 top-[15vh] bg-black/30 backdrop-blur-lg backdrop-saturate-150 z-50 rounded-lg overflow-hidden border border-zinc-800 shadow-lg shadow-black/40"


          >
            {[
              { name: "Home", route: "" },
              { name: "About me", route: "about" },
              { name: "Skills", route: "skills" },
              { name: "Projects", route: "project" },
              { name: "Blogs", route: "blog" }
            ].map(({ name, route }) => (
              <Link
                key={name}
                href={`/${route}`}
                onClick={handleChange}
                className="py-3 px-4 hover:bg-zinc-800/50 flex items-center justify-center font-semibold transition duration-300 ease-in-out"
              >
                {name}
              </Link>
            ))}

            <Button
              asChild
              variant="secondary"
              className="m-4 bg-gradient-to-r  from-cyan-400 to-teal-500 text-white hover:opacity-90"
            >
              <Link href="/yashrai_resume.pdf" target="_blank" onClick={handleChange}>
                Resume
              </Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
