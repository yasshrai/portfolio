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
  if (pathname?.startsWith("/blog/") && pathname !== "/blog") {
    return null
  }

  return (
    <>
      {/* ===== Outer Navbar Wrapper ===== */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="h-[15vh] sticky top-0 w-full z-50 flex items-center justify-between px-4 md:px-8 
        bg-black  text-white"
      >
        {/* ===== Logo ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center"
        >
          <h1 className="font-bold tracking-normal  text-3xl text-indigo-500 ">
            Yash Rai
          </h1>

          <span className="h-3 w-3 rounded-full bg-orange-500 relative top-0 left-1"></span>
        </motion.div>

        {/* ===== Desktop Menu (lg+) ===== */}
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="hidden lg:flex justify-evenly gap-8
          bg-zinc-950
          text-zinc-100 h-10 items-center px-4"
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
              className="py-2 px-4 hover:bg-neutral-800/50 rounded-lg flex items-center justify-center font-semibold transition duration-300 ease-in-out"
            >
              {name}
            </Link>
          ))}
        </motion.ul>

        {/* ===== Desktop Resume Button (lg+) ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="hidden lg:block"
        >
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white hover:opacity-90"
          >
            <Link href="/yashrai_resume.pdf" target="_blank">
              Resume <Download className="ml-2" size={20} />
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
            className="hover:bg-neutral-900/60 h-16 w-16 rounded-full flex items-center justify-center transition duration-200 ease-in-out"
          >
            {mobileMenu ? (
              <X size={50} className="text-white" />
            ) : (
              <Menu size={50} className="text-white" />
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
            className="lg:hidden flex flex-col text-white w-64 fixed right-4 top-[15vh] 
            bg-neutral-950/70 backdrop-blur-xl backdrop-saturate-150 
            rounded-xl overflow-hidden border border-neutral-700/50 
            shadow-lg shadow-black/40 z-50"
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
                className="py-3 px-4 hover:bg-neutral-800/60 flex items-center justify-center font-semibold transition duration-300 ease-in-out"
              >
                {name}
              </Link>
            ))}

            <Button
              asChild
              variant="secondary"
              className="m-4 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white hover:opacity-90"
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
