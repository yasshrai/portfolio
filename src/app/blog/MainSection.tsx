"use client"

import { motion } from "framer-motion"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })
const MainSection = () => {
    return (
        <>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 py-16 px-4 md:px-8"
            >
                <div className=" h-screen w-screen flex justify-center mt-36">

                    <motion.h1
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className={`text-5xl md:text-7xl font-bold mb-6 ${inter.className} tracking-tight`}
                    >
                        <span className="bg-gradient-to-r from-white to-zinc-300 text-transparent bg-clip-text">Coming soon</span>
                        <div className="block text-5xl md:text-5xl mt-10 text-center">
                            <span className="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                                Stay tuned
                            </span>{" "}
                            🚀
                        </div>

                    </motion.h1>
                </div>
            </motion.section>
        </>
    )
}

export default MainSection