"use client";

import Image from "next/image";
import hero from "@/app/assets/hero.png";
import { Kanit } from "next/font/google";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const kanit = Kanit({ subsets: ["latin"], weight: "800" });

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row w-screen h-[80vh] sm:h-[85vh] sm:mt-4 md:mt-0 mt-10 md:justify-evenly md:pt-[10vh] bg-zinc-950 items-center justify-evenly gap-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-center items-center flex-col gap-2 text-center"
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-2xl md:text-4xl font-bold text-white ${kanit.className}`}
        >
          Hi, I&apos;m Yash Rai👋
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={`text-2xl md:text-4xl font-bold text-white ${kanit.className}`}
        >
          <Typewriter
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString("a self-taught programmer")
                .pauseFor(2500)
                .deleteAll()
                .typeString("a full-stack developer")
                .pauseFor(2500)
                .deleteAll()
                .typeString("a tech enthusiast")
                .pauseFor(2500)
                .start();
            }}
          />
        </motion.h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <Image
          src={hero}
          alt="Hero Image"
          className="w-[300px] h-[300px] md:h-[500px] md:w-[500px]"
          priority
        />
      </motion.div>
    </main>
  );
}
