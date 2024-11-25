import Link from "next/link";
import frontendimg from "@/app/assets/frontendimg.jpg";
import backendimg from "@/app/assets/backendimg.jpg";
import databaseimg from "@/app/assets/databaseimg.jpg";
import Image from "next/image";

export default function Skills() {
  return (
    <div className="bg-zinc-950 h-[240vh] md:h-[90vh] w-full ">
      <div className="flex flex-col md:flex-row  justify-center md:gap-5 md:p-5 gap-20 mt-10 items-center ">
        <div className="card bg-base-100 w-80 md:w-96 h-[30rem] md:h-[28rem] shadow-2xl">
          <figure>
            <Image src={frontendimg} alt="frontend" height={300} width={400}/>
          </figure>
          <div className="card-body bg-neutral-950 opacity-95 text-white">
            <h2 className="card-title">Frontend Development</h2>
            <p>HTML, CSS, JavaScript, ReactJS, NextJS, Redux, TypeScipt</p>
          </div>
        </div>
        <div className="card bg-base-100 w-80 md:w-96  h-[30rem]  md:h-[28rem] shadow-2xl">
          <figure>
            <Image src={backendimg} alt="backend"  height={300} width={400}/>
          </figure>
          <div className="card-body bg-neutral-950 opacity-95 text-white">
            <h2 className="card-title">Backend Development</h2>
            <p>Python, NodeJS, FastAPI, ExpressJS, C++</p>
          </div>
        </div>
        <div className="card bg-base-100 w-80 md:w-96  h-[30rem]  md:h-[28rem] shadow-2xl">
          <figure>
            <Image src={databaseimg} alt="database" height={300} width={400} />
          </figure>
          <div className="card-body bg-neutral-950 opacity-95 text-white ">
            <h2 className="card-title">Database and Version control</h2>
            <p>Git, Github, MongoDB, MySQL, Docker</p>
          </div>
        </div>
      </div>
    </div>
  );
}
