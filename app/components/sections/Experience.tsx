'use client'
import { useState } from "react";
import { Bebas_Neue } from "next/font/google";
import Job from "./Job";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"]
})

export default function Experience({
  experience
}: any) {
  const [showAll, setShowAll] = useState(false)

  const visibleExperience = showAll ? experience : experience.slice(0, 2);

  return (
    <div className="flex flex-col py-4 lg:flex-row lg:py-6">
      <h1 className={`${bebas.className} text-5xl lg:text-6xl lg:w-1/2`}>My Experience</h1>
      <div className="py-2 lg:w-1/2">
        {visibleExperience.map((job: any, key: number) => (
          <div key={key}>
            <Job {...job} />
          </div>
        ))}
        {/* Conditionally render the "See More" or "See Less" button */}
        {experience.length > 2 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-4 text-[#D3E97A] underline underline-offset-2 hover:text-[#C7C7C7]"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        )}
      </div>
    </div>
  )
}
