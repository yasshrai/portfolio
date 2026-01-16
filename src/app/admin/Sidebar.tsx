"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    LayoutDashboard,
    FileEdit,
    PlusCircle,
    Link as LinkIcon,
    List,
    Menu,
    X,
    LogOut,
    Home
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { signOut, getAuth } from "firebase/auth"
import { app } from "../firebase/config"
import { useRouter } from "next/navigation"
import { Outfit } from "next/font/google"

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Add Blog", href: "/admin/addblog", icon: PlusCircle },
    { name: "Edit Blog", href: "/admin/editblog", icon: FileEdit },
    { name: "Add URL", href: "/admin/addurl", icon: LinkIcon },
    { name: "URL List", href: "/url", icon: List },
]

const bottomNavItems = [
    { name: "Back to Website", href: "/", icon: Home },
]

export default function AdminSidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    const router = useRouter()
    const auth = getAuth(app)

    const handleLogout = async () => {
        try {
            await signOut(auth)
            router.push("/admin")
        } catch (error) {
            console.error("Logout failed", error)
        }
    }

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-zinc-800 text-zinc-400 md:hidden"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar */}
            <div className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-zinc-900 border-r border-zinc-800 transform transition-transform duration-200 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:h-screen ${outfit.className}
      `}>
                <div className="flex flex-col h-full p-6">
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
                        <p className="text-xs text-zinc-500 mt-1">Manage your portfolio</p>
                    </div>

                    <nav className="flex-1 space-y-2">
                        {navItems.map((item) => {
                            const Icon = item.icon
                            const isActive = pathname === item.href

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                                        ? "bg-white text-black font-semibold shadow-lg shadow-white/10"
                                        : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                                        }`}
                                >
                                    <Icon size={20} />
                                    <span>{item.name}</span>
                                </Link>
                            )
                        })}

                        <div className="my-4 border-t border-zinc-800/50"></div>

                        {bottomNavItems.map((item) => {
                            const Icon = item.icon
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all duration-200"
                                >
                                    <Icon size={20} />
                                    <span>{item.name}</span>
                                </Link>
                            )
                        })}
                    </nav>

                    <div className="mt-auto pt-6 border-t border-zinc-800">
                        <button
                            onClick={handleLogout}
                            className="flex w-full items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:text-red-400 hover:bg-red-500/10 transition-colors duration-200"
                        >
                            <LogOut size={20} />
                            <span>Sign Out</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/80 backdrop-blur-sm md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    )
}
