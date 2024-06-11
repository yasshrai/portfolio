"use client";

import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const [mobilemenu, setMobilemenu] = useState(false);
  const handleChange = () => {
    setMobilemenu(!mobilemenu);
  };
  return (
    <>
      <nav className="h-[10vh] w-full flex justify-evenly gap-7 mt-10   items-center bg-gray-950 text-white">
        <div className=" flex ">
          <h1 className=" font-bold tracking-wider text-3xl">Portfolio</h1>
          <span className=" h-3 w-3 rounded-full bg-orange-600 relative top-[18px] left-[3px]"></span>
        </div>
        <ul className=" hidden sm:flex justify-evenly sm:gap-8">
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
        </ul>
        <button className=" hidden sm:block h-9 w-20 bg-orange-500 hover:bg-orange-800  rounded-lg  font-semibold transition duration-300 ease-in-out ">
          Hire Me
        </button>
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
      </nav>

      <div
        className={`${
          mobilemenu ? "hidden" : "flex"
        } sm:hidden flex-col text-white h-[40vh] w-[40vw] absolute left-[55vw] bg-gray-900 opacity-90 top-[120px] items-center justify-around   ease-in-out z-20 rounded-lg `}
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

        <Link
          href={""}
          className=" bg-orange-500 h-full w-full hover:rounded-lg  hover:bg-orange-800  rounded-lg  flex items-center justify-center font-semibold transition duration-300 ease-in-out "
          onClick={handleChange}
        >
          Hire Me
        </Link>
      </div>
    </>
  );
}
