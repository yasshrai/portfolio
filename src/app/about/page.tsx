import Image from "next/image";
import aboutpageimg from "@/app/assets/aboutpage.png";
import aboutpagesecond from "@/app/assets/aboutsecondsection.png";
import Link from "next/link";
import { Instagram, Linkedin, Twitter, Mail, Github } from "lucide-react";
import education from "@/app/assets/education.png";

export default function about() {
  return (
    <>
      <div className=" bg-zinc-950 md:h-[200vh] h-[430vh] flex flex-col items-start justify-center ">
        <section className=" h-[80vh]  flex items-center justify-center gap-5 relative top-[-30rem] md:static ">
          <div className=" flex flex-col md:flex-row items-center justify-center">
            <div className="w-[50%] flex flex-col gap-5">
              <h1 className=" text-4xl font-bold text-center text-white">
                Introduction
              </h1>
              <p className=" text-left text-lg text-white">
                Hi, I&apos;m yash rai, a passionate software engineer dedicated
                to crafting innovation solutions that drive positive change.
                With a keen eye for detail and a passion for problem-solving, I
                strive to push the boundaries of what&apos;s possible through
                technology.
              </p>
            </div>
            <div>
              <Image
                src={aboutpageimg}
                height={500}
                width={500}
                alt="image"
                className=" h-[300px] w-[300px] md:h-[500px] md:w-[500px]"
              ></Image>
            </div>
          </div>
        </section>
        <section className=" h-[80vh] w-full flex items-center justify-center mx-auto mt-36 md:mt-4 relative top-[-30rem] md:static ">
          <div className=" flex flex-col-reverse md:flex-row items-center justify-center gap-5 ">
            <div>
              <Image
                src={aboutpagesecond}
                height={400}
                width={400}
                alt="image"
                className=" rounded-full  h-[300px] w-[300px] md:h-[400px] md:w-[400px]"
              ></Image>
            </div>
            <div className="w-[50%] flex flex-col gap-5">
              <h1 className=" text-4xl font-bold text-center text-white">
                My Vision
              </h1>
              <p className=" text-left text-lg text-white">
                My vision is to leverage my skills in software engineering to
                create impactfull projects that makes a difference in
                people&apos;s lives. I strive to develop intuitive applications,
                stay ahead of technological advancements, collaborate with
                like-minded individuals and continuously learn to ensure my
                skills remain sharp.
              </p>
            </div>
          </div>
        </section>

        <section className=" h-[80vh] w-full flex items-center justify-center mx-auto mt-36 md:mt-4 relative top-[10vh] md:static ">
          <div className=" flex flex-col md:flex-row items-center justify-center gap-5 ">
            <div className="w-[50%] flex flex-col gap-5">
              <h1 className=" text-4xl font-bold text-center text-white">
                Education and Coursework
              </h1>
              <p className=" text-left text-lg text-white">
                I hold a degree in Computer Science, where I honed my technical
                skills and developed a solid foundation in software engineering
                principles. Throughout my academic journey, I engaged in
                rigorous coursework that covered a broad spectrum of topics,
                including data structures and algorithms, software design and
                architecture, web development, and database management. I also
                participated in various projects and internships that allowed me
                to apply theoretical knowledge to practical scenarios, enhancing
                my problem-solving abilities and teamwork skills. My education
                has equipped me with the tools and knowledge necessary to tackle
                complex challenges and contribute effectively to the tech
                industry.
              </p>
            </div>
            <div>
              <Image
                src={education}
                height={400}
                width={400}
                alt="image"
                className=" rounded-full  h-[300px] w-[300px] md:h-[400px] md:w-[400px] bg-none"
              ></Image>
            </div>
          </div>
        </section>
      </div>

      <div className="relative w-full h-[15vh] bg-zinc-950 bottom-0 flex flex-col md:flex-row items-center justify-evenly gap-1 ">
        <h1 className=" text-white font-bold text-xl">Connect with me</h1>
        <div className=" flex flex-row gap-10">
          <div className="  hover:underline hover:text-indigo-500 text-white">
            <Link
              href={"https://www.instagram.com/yasshrai"}
              className="flex flex-row gap-2"
            >
              <Instagram></Instagram>{" "}
              <p className="hidden md:block">Instagram</p>
            </Link>
          </div>
          <div className="hover:underline hover:text-indigo-500 text-white">
            <Link
              href={"https://linkedin.com/in/yasshrai"}
              className="flex flex-row gap-2"
            >
              <Linkedin></Linkedin>
              <p className="hidden md:block">LinkedIn</p>
            </Link>
          </div>
          <div className=" hover:underline hover:text-indigo-500 text-white">
            <Link
              href={"https://x.com/yasshraii"}
              className="flex flex-row gap-2"
            >
              <Twitter></Twitter>
              <p className="hidden md:block">Twitter</p>
            </Link>
          </div>
          <div className="hover:underline hover:text-indigo-500 text-white">
            <a
              href="mailto:yash2154rai@gmail.com"
              className="flex flex-row gap-2"
            >
              {" "}
              <Mail></Mail> <p className="hidden md:block">Mail</p>
            </a>
          </div>
          <div className=" hover:underline hover:text-indigo-500 text-white">
            <Link
              href={"https://github.com/yasshrai"}
              className="flex flex-row gap-2"
            >
              <Github></Github>
              <p className="hidden md:block">GitHub</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
