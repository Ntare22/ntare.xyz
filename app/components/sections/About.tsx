import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"]
})

export default function About({
  heading,
  sub_heading,
  description,
  links
}: any) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  const more = links.find((link: any) => link.link_name == "more about me")
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full">
        <h1 className={`${bebas.className} text-5xl lg:text-6xl`}>{heading}</h1>
      </div>
      <div className="">
        <div className="py-2">
          <span className='font-thin py-2 text-lg lg:text-xl'>{sub_heading}</span>
          <p className='font-thin text-[#C7C7C7] lg:text-xl'>{description}</p>
        </div>
        <Link href={more.url} className="uppercase text-xs underline underline-offset-2 text-[#D3E97A]">{more.link_name}</Link>
      </div>
    </div>
  )
}
