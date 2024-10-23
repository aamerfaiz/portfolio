import Hero from "@/components/hero/hero";
import Education from "@/components/homecards/education";
import Skills from "@/components/homecards/skills";
import Experience from "@/components/homecards/experience";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="bg-[#000000] text-white px-[2vw] pt-[2vh] flex flex-col sm:flex-row flex-wrap lg:justify-between sm:justify-start gap-4">
        <Education />
        <Skills />
        <Experience />
      </div>
    </div>
  );
}
