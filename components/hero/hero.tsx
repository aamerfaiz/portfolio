import Image from "next/image";
import profilepic from "../../public/images/AamerPhoto3.png"
export default function Hero() {
  return (
    <div className="flex flex-row justify-end py-[2vh] px-[10vh] items-center pb-0 bg-[#FFFFFF] rounded-md mx-[2vw]">

      <div className="flex flex-col justify-between items-end mh-[10vh]">
        <h1 className="font-bold text-6xl pb-5">Aamer Faiz</h1>
        <h2 className="text-3xl">Frontend Developer</h2>
        <h2 className="text-wrap mt-2">Skilled in Frontend Tools like React, JavaScript, NextJS and building scalable web applications with over 3 years of experience in diverse industries.</h2>
        <div className="self-center mt-5">DOWNLOAD NOW</div>
      </div>
      <div><Image src={profilepic} width={300} height={300} alt="Profile picture"/></div>

    </div>
  );
}
