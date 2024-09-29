"use client";

import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobilemenu, setMobilemenu] = useState(false);
  const handleChange = () => {
    setMobilemenu(!mobilemenu);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="h-[15vh]  sticky top-0  z-10 flex  pt-10  items-center justify-center gap-[150px] bg-zinc-950 text-white"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className=" flex "
        >
          <h1 className=" font-bold tracking-wider text-3xl">Yash Rai</h1>
          <span className=" h-3 w-3 rounded-full bg-orange-600 relative top-[18px] left-[3px]"></span>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className=" hidden sm:flex justify-evenly sm:gap-8"
        >
          <Link
            href={"/"}
            className=" font-semibold hover:text-gray-500 transition duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className=" font-semibold  hover:text-gray-500 transition duration-300 ease-in-out"
          >
            About me
          </Link>
          <Link
            href={"/skills"}
            className=" font-semibold  hover:text-gray-500 transition duration-300 ease-in-out"
          >
            Skills
          </Link>
          <Link
            href={"/project"}
            className=" font-semibold  hover:text-gray-500 transition duration-300 ease-in-out"
          >
            Projects
          </Link>
        </motion.ul>
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          type="button"
          className="hidden sm:block h-9 w-24 bg-orange-500 hover:bg-orange-800 rounded-lg font-semibold transition duration-300 ease-in-out"
        >
          <a
            href="/yashrai_resume.pdf"
            download
            className="w-full h-full flex items-center justify-center"
          >
            Resume
          </a>
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {mobilemenu ? (
            <GiHamburgerMenu
              className=" block sm:hidden text-white text-3xl hover:cursor-pointer"
              onClick={handleChange}
            ></GiHamburgerMenu>
          ) : (
            <RxCross2
              className=" block sm:hidden text-white text-3xl hover:cursor-pointer"
              onClick={handleChange}
              fontWeight={800}
            ></RxCross2>
          )}
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {!mobilemenu && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", stiffness: 100 }}
            className={`${
              mobilemenu ? "hidden" : "flex"
            } sm:hidden flex-col text-white h-[40vh] w-[40vw] fixed left-[55vw]  bg-gray-900 opacity-100 top-[120px] items-center justify-around   ease-in-out z-20 rounded-lg `}
          >
            <Link
              href={"/"}
              onClick={handleChange}
              className="h-full w-full  hover:bg-indigo-500 flex items-center justify-center font-semibold transition duration-100 ease-in-out hover:rounded-lg  "
            >
              Home
            </Link>
            <Link
              href={"/about"}
              onClick={handleChange}
              className="h-full w-full hover:rounded-lg   hover:bg-indigo-500 flex items-center justify-center font-semibold transition duration-100 ease-in-out"
            >
              About me
            </Link>

            <Link
              href={"/skills"}
              onClick={handleChange}
              className="h-full w-full hover:rounded-lg  hover:bg-indigo-500 flex items-center justify-center font-semibold transition duration-100 ease-in-out"
            >
              Skills
            </Link>

            <Link
              href={"/project"}
              onClick={handleChange}
              className="h-full w-full hover:rounded-lg   hover:bg-indigo-500 flex items-center justify-center font-semibold transition duration-100 ease-in-out"
            >
              Projects
            </Link>

            <button
              type="button"
              className=" bg-orange-500 h-full w-full hover:rounded-lg  hover:bg-orange-800  rounded-lg  flex items-center justify-center font-semibold transition duration-300 ease-in-out"
            >
              <a
                href="/yashrai_resume.pdf"
                download
                className="w-full h-full flex items-center justify-center"
              >
                Resume
              </a>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
