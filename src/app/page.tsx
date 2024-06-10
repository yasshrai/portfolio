import Image from "next/image";
import hero from "@/app/assets/hero.png";
import { Kanit } from "next/font/google";

const kanit = Kanit({ subsets: ["latin"], weight: "800" });
export default function Home() {
  return (
    <main className=" flex flex-col md:flex-row w-full h-[70vh] md:h-full md:justify-evenly md:pt-10 bg-gray-950 items-center justify-evenly gap-5 ">
      <div className=" flex justify-center items-center flex-col gap-2">
        <h1 className={`text-3xl md:text-4xl font-bold ${kanit.className}`}>
          Hi, I&apos;m Yash Rai👋
        </h1>
        <h2 className={`text-3xl md:text-4xl font-bold ${kanit.className}`}>
          a self-taught programmer
        </h2>
      </div>
      <div>
        <Image
          src={hero}
          alt="png"
          className="w-[300px] h-[300px]  md:h-[500px]  md:w-[500px]"
        ></Image>
      </div>
    </main>
  );
}
