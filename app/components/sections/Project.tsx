"use client";
import { CldImage } from 'next-cloudinary';

export default function Project({
  title,
  client,
  description,
  year,
  role,
  tag
}: any) {
  return (
    <div>
      <div className='bg-gray-900 p-4 rounded-lg'>
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
          src='ntare.xyz/innovo_sscqva'
          alt="Sample Image"
          width={400}
          height={300}
          crop="fill"
          gravity="auto"
        />
        <div>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  )
}
