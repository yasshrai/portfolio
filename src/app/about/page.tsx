import Image from "next/image";
import aboutpageimg from "@/app/assets/aboutpage.png";
import aboutpagesecond from "@/app/assets/aboutsecondsection.png";

export default function about() {
  return (
    <div className=" bg-gray-950 md:h-[160vh] h-[260vh] flex flex-col items-start justify-center gap-20 md:gap-3">
      <section className=" h-[80vh] w-full flex items-center justify-center gap-5 ">
        <div className=" flex flex-col md:flex-row items-center justify-center">
          <div className="w-[50%] flex flex-col gap-5">
            <h1 className=" text-4xl font-bold text-center text-white">
              Introduction
            </h1>
            <p className=" text-left text-lg text-white">
              Hi, I&apos;m yash rai, a passionate software engineer dedicated to
              crafting innovation solutions that drive positive change. With a
              keen eye for detail and a passion for problem-solving, I strive to
              push the boundaries of what&apos;s possible through technology.
            </p>
          </div>
          <div className="">
            <Image
              src={aboutpageimg}
              height={500}
              width={500}
              alt="image"
            ></Image>
          </div>
        </div>
      </section>
      <section className=" h-[80vh] w-full flex items-center justify-center mx-auto mt-28">
        <div className=" flex flex-col-reverse md:flex-row items-center justify-center gap-5 ">
          <div className="">
            <Image
              src={aboutpagesecond}
              height={400}
              width={400}
              alt="image"
              className=" rounded-full"
            ></Image>
          </div>
          <div className="w-[50%] flex flex-col gap-5">
            <h1 className=" text-4xl font-bold text-center text-white">
              My Vision
            </h1>
            <p className=" text-left text-lg text-white">
              My vision is to leverage my skills in software engineering to
              create impactfull projects that makes a difference in
              people&apos;s lives. I strive to develop intuitive applications.
              stay ahead of technological advancements, collaborate with
              like-minded individuals and continuously learn to ensure my skills
              remain sharp.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
