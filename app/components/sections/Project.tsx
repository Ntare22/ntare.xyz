"use client";
import { CldImage } from 'next-cloudinary';
import { Manrope } from "next/font/google";
import arrow from "@/app/assets/arrow-light-green.svg";
import Image from 'next/image';
import Link from 'next/link';

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"]
})

export default function Project({
  tag,
  title,
  description,
  client,
  year,
  image,
  role,
  link
}: any) {
  return (
    <div className={`${manrope.className} mt-4`}>
      <div className='bg-gray-900 p-4 rounded-lg flex flex-col lg:flex-row lg:px-24 lg:py-16'>
        <div className='lg:w-2/5'>
          <div className='flex pb-2'>
            {
              tag.map((word: any, index: number) => (
                <div
                  className='py-1 bg-black w-1/3 font-thin border-2 text-center rounded-full mr-1'
                  key={index}
                >
                  {word.tag_name}
                </div>
              ))
            }
          </div>
          <CldImage
            src={image}
            alt="Sample Image"
            width={400}
            height={300}
            crop="fill"
            gravity="auto"
          />
        </div>
        <div className='py-3 lg:w-3/5'>
          <h1 className='font-thin text-xl lg:text-3xl'>{title}</h1>
          <p className='font-thin py-2 text-[#C7C7C7] lg:text-xl'>{description}</p>
          <div className='py-2 lg:py-5'>
            <h2 className='font-light uppercase text-lg lg:text-xl'>project info</h2>
            <hr className="border-t-1 border-[#484848] my-2" />
            <div>
              {
                client ?
                  <div className='pt-2'>
                    <div className='flex justify-between items-center'>
                      <h2 className='font-light text-lg font-thin'>Client</h2>
                      <p className='text-[#C7C7C7]'>{client}</p>
                    </div>
                    <hr className="border-t-1 border-[#484848] my-2" />
                  </div> :
                  ""
              }
              {
                year ?
                  <div className='pt-2'>
                    <div className='flex justify-between items-center'>
                      <h2 className='font-light text-lg font-thin'>Year</h2>
                      <p className='text-[#C7C7C7]'>{year}</p>
                    </div>
                    <hr className="border-t-1 border-[#484848] my-2" />
                  </div> :
                  ""
              }
              {
                role ?
                  <div className='pt-2'>
                    <div className='flex justify-between items-center'>
                      <h2 className='font-light text-lg font-thin'>Role</h2>
                      <p className='text-[#C7C7C7]'>{role}</p>
                    </div>
                    <hr className="border-t-1 border-[#484848] my-2" />
                  </div> :
                  ""
              }
            </div>
            <div>
              {
                link ?
                  <div className='mt-3 flex'>
                    {link.map((item: any, index: number) => (
                      <div key={index} className='mr-3'>
                        <div className="flex flex-col">
                          <div className="flex items-center underline underline-offset-4">
                            <Link href={item.url} target="_blank" className="uppercase text-sm tracking-wide text-[#D3E97A]">
                              {item.link_name}
                            </Link>
                            {item.link_name.toLowerCase() == 'website' ? <Image alt="arrow" src={arrow} width={12} /> : ''}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  : ""
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
