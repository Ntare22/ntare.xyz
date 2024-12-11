import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"]
})

export default function Capabilities({
  heading,
  description,
  skills
}: any) {
  return (
    <div className="flex flex-col py-4 lg:flex-row lg:py-6">
      <h1 className={`${bebas.className} text-5xl lg:text-6xl lg:w-1/2`}>{heading}</h1>
      <div className="py-2 lg:w-1/2">
        <p className='font-thin text-[#C7C7C7] lg:text-xl'>{description}</p>
        <div className='flex flex-col pb-2 py-4 mx-10 lg:flex-row lg:flex-wrap lg:mx-0'>
            {
              skills.map((word: any, index: number) => (
                <div
                  className='py-1 px-3 my-1 bg-black font-thin border-2 grow text-center rounded-full mr-1 lg:max-w-60'
                  key={index}
                >
                  {word.tag_name}
                </div>
              ))
            }
          </div>
      </div>
    </div>
  )
}
