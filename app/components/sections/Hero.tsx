"use client"
import { Bebas_Neue, Manrope } from "next/font/google";
import Image from "next/image";
import arrow from "@/app/assets/arrow.svg";
import linkedin from "@/app/assets/linkedin.svg";
import github from "@/app/assets/github.svg";
import Link from "next/link";
import { CldImage } from 'next-cloudinary';

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"]
})

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"]
})

export default function Hero({
  heading,
  sub_heading,
  links,
}: any) {
  const contact = links?.find((contact: any) => contact.link_name == "contact")
  const linkedIn = links?.find((linkedin: any) => linkedin.link_name == "linkedin")
  const gitHub = links?.find((github: any) => github.link_name == "github")

  return (
    <div className="flex flex-col items-center lg:flex-row lg:py-6">
      <div className="lg:w-1/2">
        <div
          className={`${bebas.className} mt-4 py-6 text-6xl w-2/3 lg:text-9xl`}
          dangerouslySetInnerHTML={{ __html: heading?.replace("Jim", "<br/>Jim") }}
        />
        <p className={`${manrope.className} font-thin lg:w-2/3`}>{sub_heading}</p>
        <div className="flex mt-4">
          <Link href={contact?.url} className="flex justify-between items-center py-1 px-1 w-1/2 rounded-full bg-[#D3E97A] lg:w-1/3">
            <div className="uppercase pl-2 font-semibold text-black">contact me</div>
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
      <div className="py-5 lg:py-0 lg:w-1/2">
        <CldImage 
          className="rounded-xl lg:hidden"
          src="ntare.xyz/jim-portrait"
          alt="Mobile view"
          width={400}
          height={400}
          unoptimized
        />
        <CldImage 
          className="rounded-xl hidden lg:block"
          src="ntare.xyz/jim-black-white"
          alt="Desktop view"
          width={700}
          height={500}
          unoptimized
        />
      </div>
    </div>
  )
}
