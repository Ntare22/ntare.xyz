"use client"
import { useQuery } from "@apollo/client";
import { GET_HOMEPAGE } from "./lib/queries";
import Loading from "./components/Loading";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

export default function Home() {
  const { loading, error, data } = useQuery<HomepageData>(GET_HOMEPAGE);
  console.log(data)

  const items = data?.homepage?.content || []
  const hero = items.find((section) => section.section_name == "hero")
  const projects = items.find((data) => data.__typename == "ComponentProjectProjectsContainer")
  const about = items.find((section) => section.section_name == "about me")
  const contact = items.find((section) => section.section_name == "contact")

  console.log('------', contact)
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
              <Hero {...hero} />
              <hr className="border-t-1 border-[#484848] my-4 lg:my-14" />
              <Projects {...projects} />
              <hr className="border-t-1 border-[#484848] my-4 lg:my-14" />
              <About {...about} />
              <hr className="border-t-1 border-[#484848] my-4 lg:my-14" />
              <Contact {...contact} />
              <p className="font-thin text-[#C7C7C7] py-4">&copy; 2024. Developed with &hearts; by Jim Ntare</p>
            </div>
      }
    </main>
  );
}
