import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"]
})

export default function AboutSection({
  heading,
  sub_heading,
  description
}: any) {
  return (
    <div className="flex flex-col py-4 lg:flex-row lg:py-6">
      <h1 className={`${bebas.className} text-5xl lg:text-6xl lg:w-1/2`}>{heading}</h1>
      <div className="py-2 lg:w-1/2">
        <span className='font-thin py-2 text-lg lg:text-xl'>{sub_heading}</span>
        <p className='font-thin text-[#C7C7C7] lg:text-xl'>{description}</p>
      </div>
    </div>
  )
}
