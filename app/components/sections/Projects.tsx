import { Bebas_Neue, Manrope } from "next/font/google";
import arrow from "@/app/assets/arrow.svg";
import Project from "./Project";
import Link from "next/link";
import Image from "next/image";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"]
})

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"]
})

export default function Projects({
  title,
  description,
  projects
}: any) {
  return (
    <div id="projects">
      <h1 className={`${bebas.className} text-5xl lg:text-6xl`}>{title}</h1>
      <p className={`${manrope.className} font-thin text-sm py-3 lg:w-2/3 lg:text-lg`}>{description}</p>
      <div>
        {
          projects.slice(0, 2).map((project: any, index: number) => (
            <div key={index}>
              <Project {...project} />
            </div>
          ))
        }
      </div>
      {
        projects.length > 2 && (
          <div className="flex items-center mt-5 lg:mt-10">
            <Link href="/projects" className="uppercase font-bold text-xl underline underline-offset-4">View more</Link>
            <Image alt="arror" src={arrow} width={17} />
          </div>
        )
      }

    </div>
  )
}
