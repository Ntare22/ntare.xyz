"use client"
import { useQuery } from "@apollo/client";
import { GET_HOMEPAGE } from "./lib/queries";
import Loading from "./components/Loading";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";

export default function Home() {
  const { loading, error, data } = useQuery<HomepageData>(GET_HOMEPAGE);

  const items = data?.homepage?.content || []
  const hero = items.find((section) => section.section_name == "hero")
  const projects = items.find((data) => data.__typename == "ComponentProjectProjectsContainer")
  
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
            <hr className="border-t-1 border-[#484848] my-4" />
            <Projects {...projects} />
          </div>
      }
    </main>
  );
}
