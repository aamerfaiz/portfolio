import Hero from "@/components/hero/hero";
import Education from "@/components/homecards/education";
import Skills from "@/components/homecards/skills";
import Experience from "@/components/homecards/experience";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   Aamer Faiz
    // </div>
    <div className="">
      <Hero />
      <div className="bg-[#000000] text-white px-[2vw] pt-[2vh] flex flex-row justify-start">
        <Education />
        <Skills />
      </div>
      <div className="bg-[#000000] text-white px-[2vw] pt-[2vh]">
        <Experience />
      </div>

    </div>
  );
}
