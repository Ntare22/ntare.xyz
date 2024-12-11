import { Bebas_Neue } from "next/font/google";
import Job from "./Job";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"]
})

export default function Experience({
  experience
}: any) {
  return (
    <div className="flex flex-col py-4 lg:flex-row lg:py-6">
      <h1 className={`${bebas.className} text-5xl lg:text-6xl lg:w-1/2`}>My Experience</h1>
      <div className="py-2 lg:w-1/2">
        {
          experience.map((job: any, key: number) =>
            <div key={key}>
              <Job {...job} />
            </div> 
        )
        }
      </div>
    </div>
  )
}
