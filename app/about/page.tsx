'use client'
import { useQuery } from "@apollo/client";
import { GET_HOMEPAGE } from "../lib/queries";
import Loading from "../components/Loading";
import Contact from "../components/sections/Contact";

export default function About() {
  const { loading, error, data } = useQuery<HomepageData>(GET_HOMEPAGE);
  const items = data?.homepage?.content || []
  const contact = items.find((section) => section.section_name == "contact")
  
  return (
    <main className="px-5 lg:px-24">
      {
        loading ?
          (
            <div className="flex justify-center items-center h-screen">
              <Loading />
            </div>
          ) : error ? (
            <div className="flex justify-center items-center h-screen">
              <div>error</div>
            </div>
          ) :
            <div>
              About Page
              
              <Contact {...contact} />
              <p className="font-thin text-[#C7C7C7] py-4 absolute bottom-0">&copy; 2024. Developed with &hearts; by Jim Ntare</p>
            </div>
      }
    </main>
  )
}
