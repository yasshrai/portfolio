"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { getAuth, onAuthStateChanged, User } from "firebase/auth"
import { app } from "../firebase/config"
import AdminSidebar from "./Sidebar"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    const pathname = usePathname()
    const auth = getAuth(app)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)

            // If not logged in, redirect to login page (which is the main /admin page effectively, 
            // but if we are on a subpage we should probably redirect to /admin)
            // We'll let the individual pages handle detailed redirects if needed, 
            // or handle it here. 
            // Actually, if we are on /admin (which is the login page currently if not auth), 
            // we shouldn't show the sidebar if not auth.
        })
        return () => unsubscribe()
    }, [auth, router])

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-black text-white">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-zinc-800 border-t-white"></div>
            </div>
        )
    }

    // If we are on the main /admin page and NOT logged in, we render the children (which is the login form).
    // If we are logged in, we render the sidebar + children.
    // If we are on a subpage and NOT logged in, we should redirect to /admin.

    if (!user && pathname !== "/admin") {
        router.replace("/admin")
        return null
    }

    // If not logged in (and on /admin), just show the content (login form)
    if (!user) {
        return <>{children}</>
    }

    return (
        <div className={`flex min-h-screen bg-black ${inter.className}`}>
            <AdminSidebar />
            <main className="flex-1 overflow-y-auto h-screen p-4 md:p-8 pt-20 md:pt-8 bg-black">
                {/* pt-20 on mobile to account for fixed toggle button area if needed, though toggle is absolute. 
             Actually toggle is fixed top-4 right-4. 
             Let's give mobile some top padding. */}
                <div className="max-w-6xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    )
}
