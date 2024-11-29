import { Bebas_Neue, Manrope } from "next/font/google";
import Project from "./Project";

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
  console.log("----------", projects)
  return (
    <div>
      <h1 className={`${bebas.className} text-5xl`}>{title}</h1>
      <p className={`${manrope.className} font-thin text-sm py-3 lg:w-2/3`}>{description}</p>
      <div>
        {
          projects.map((project: any, index: number) => (
            <div key={index}>
              <Project {...project} />
            </div>
          )
          )
        }
      </div>
    </div>
  )
}
