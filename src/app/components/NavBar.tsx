"use client"

import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const handleChange = () => setMobileMenu(!mobileMenu)

  const pathname = usePathname()
  // Hide Navbar on blog slug pages like /blog/my-post (but keep it on /blog)
  // Also hide Navbar on all admin pages
  if ((pathname?.startsWith("/blog/") && pathname !== "/blog") || pathname?.startsWith("/admin")) {
    return null
  }

  return (
    <>
      {/* ===== Outer Navbar Wrapper ===== */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="h-20 sticky top-0 w-full z-50 flex items-center justify-between px-6 md:px-12 
        bg-black/50 backdrop-blur-md border-b border-white/5"
      >
        {/* ===== Logo ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2"
        >
          <h1 className="font-bold tracking-tight text-2xl text-white">
            Yash Rai
          </h1>
        </motion.div>

        {/* ===== Desktop Menu (lg+) ===== */}
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="hidden lg:flex gap-8 items-center"
        >
          {[
            { name: "Home", route: "" },
            { name: "About", route: "about" },
            { name: "Skills", route: "skills" },
            { name: "Projects", route: "project" },
            { name: "Blog", route: "blog" },
          ].map(({ name, route }) => (
            <Link
              key={name}
              href={`/${route}`}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200"
            >
              {name}
            </Link>
          ))}
        </motion.ul>

        {/* ===== Desktop Resume Button (lg+) ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="hidden lg:flex items-center gap-6"
        >
          <Link href="/contact" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200">
            Contact
          </Link>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-zinc-700 bg-zinc-900/50 text-zinc-300 hover:bg-zinc-800 hover:text-white text-xs h-9 px-4 rounded-full backdrop-blur-sm transition-all"
          >
            <Link href="/yashrai_resume.pdf" target="_blank">
              Resume <Download className="ml-2 w-3 h-3" />
            </Link>
          </Button>
        </motion.div>

        {/* ===== Mobile Menu Toggle (below lg) ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="lg:hidden"
        >
          <Button
            variant="ghost"
            onClick={handleChange}
            className="hover:bg-zinc-800/50 h-10 w-10 p-0 rounded-full flex items-center justify-center transition duration-200"
          >
            {mobileMenu ? (
              <X size={24} className="text-zinc-100" />
            ) : (
              <Menu size={24} className="text-zinc-100" />
            )}
          </Button>

        </motion.div>
      </motion.nav>

      {/* ===== Mobile Menu Drawer (below lg) ===== */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="lg:hidden flex flex-col text-white w-full fixed left-0 top-20 bottom-0
            bg-black/95 backdrop-blur-2xl
            z-40 pt-8 px-8 border-t border-zinc-800"
          >
            {[
              { name: "Home", route: "" },
              { name: "About me", route: "about" },
              { name: "Skills", route: "skills" },
              { name: "Projects", route: "project" },
              { name: "Blogs", route: "blog" },
              { name: "Contact", route: "contact" },
            ].map(({ name, route }) => (
              <Link
                key={name}
                href={`/${route}`}
                onClick={handleChange}
                className="py-4 text-2xl font-bold text-zinc-400 hover:text-white border-b border-zinc-900 transition-colors"
              >
                {name}
              </Link>
            ))}

            <Button
              asChild
              variant="secondary"
              className="m-4 bg-zinc-100 text-zinc-900 hover:bg-white"
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
