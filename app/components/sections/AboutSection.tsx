import { Bebas_Neue } from "next/font/google";
import arrow from "@/app/assets/arrow.svg";
import linkedin from "@/app/assets/linkedin.svg";
import github from "@/app/assets/github.svg";
import Link from "next/link";
import Image from "next/image";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"]
})

export default function AboutSection({
  heading,
  sub_heading,
  description,
  links
}: any) {
  console.log(links)
  const resume = links.find((resume: any) => resume.link_name == "resume")
  const linkedIn = links.find((resume: any) => resume.link_name == "linkedin")
  const gitHub = links.find((resume: any) => resume.link_name == "github")
  return (
    
    <div className="flex flex-col py-4 lg:flex-row lg:py-6">
      <h1 className={`${bebas.className} text-5xl lg:text-6xl lg:w-1/2`}>{heading}</h1>
      <div className="py-2 lg:w-1/2">
        <span className='font-thin py-2 text-lg lg:text-xl'>{sub_heading}</span>
        <p className='font-thin text-[#C7C7C7] lg:text-xl'>{description}</p>
        <div className="py-5 flex">
          <Link href={resume?.url} target="_blank" className="flex justify-between items-center py-1 px-1 w-1/2 rounded-full bg-[#D3E97A] lg:w-1/3">
            <div className="uppercase pl-2 font-semibold text-black ">my resume</div>
            <div className="bg-black py-2 px-2 rounded-full">
              <Image alt="arrow" src={arrow} className="" />
            </div>
          </Link>
          <Link href={linkedIn?.url} target='_blank' className="bg-[#222222] flex justify-center px-2 py-2 rounded-full mx-2">
            <Image alt="linkedin" src={linkedin} />
          </Link>
          <Link href={gitHub?.url} target='_blank' className="bg-[#222222] flex justify-center px-2 py-2 rounded-full">
            <Image alt="github" src={github} />
          </Link>
        </div>
      </div>
    </div>
  )
}
