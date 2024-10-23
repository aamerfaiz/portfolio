import Hero from "@/components/hero/hero";
import Education from "@/components/homecards/education";
import Skills from "@/components/homecards/skills";
import Experience from "@/components/homecards/experience";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="bg-[#000000] text-white px-[2vw] pt-[2vh] flex flex-col md:flex-row sm:flex-row flex-wrap lg:justify-start sm:justify-start md:justify-center gap-4">
        <Experience />
        <Education />
        <Skills />
      </div>
    </div>
  );
}
