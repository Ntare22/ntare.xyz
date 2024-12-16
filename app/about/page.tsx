'use client'
import { useQuery } from "@apollo/client";
import { GET_ABOUTPAGE, GET_HOMEPAGE } from "../lib/queries";
import Loading from "../components/Loading";
import Contact from "../components/sections/Contact";
import AboutSection from "../components/sections/AboutSection";
import Capabilities from "../components/sections/Capabilities";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";

export default function About() {
  const { loading, error, data } = useQuery<AboutpageData>(GET_ABOUTPAGE);
  const items = data?.about?.content || []
  const about = items.find((section) => section.section_name == "about")
  const skills = items.find((section) => section.section_name == "skills")
  // const experience = items.find((section) => section.section_name == "experience")
  const contact = items.find((section) => section.section_name == "contact")
  const projects = items.find((data) => data.__typename == "ComponentProjectProjectsContainer")

  return (
    <main className="px-5 lg:px-24">
      {
        loading ?
          (
            <div className="flex justify-center items-center h-screen">
              <Loading />
            </div>
          ) : error || data?.about == null ? (
            <div className="flex justify-center items-center h-screen">
              <div>Website coming soon. Meanwhile, reachout jim.ntare@gmail.com</div>
            </div>
          ) :
            <div>
              <AboutSection {...about} />
              <hr className="border-t-1 border-[#484848] my-4 lg:my-14" />
              <Capabilities {...skills} />
              <hr className="border-t-1 border-[#484848] my-4 lg:my-14" />
              {/* <Experience {...experience} /> */}
              <Projects {...projects} />
              <hr className="border-t-1 border-[#484848] my-4 lg:my-14" />
              <Contact {...contact} />
              <p className="font-thin text-[#C7C7C7] py-4">&copy; 2024. Developed with &hearts; by Jim Ntare</p>
            </div>
      }
    </main>
  )
}
