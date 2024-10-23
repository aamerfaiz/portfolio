import Image from "next/image";
import profilepic from "../../public/images/AamerPhoto3.png"

export default function Hero() {
    return (
        <div className="flex flex-row justify-end py-[2vh] px-[10vh] items-center pb-0 rounded-md mx-[2vw] overflow-hidden bg-herobg bg-left-bottom">

            <div className="flex flex-col justify-between items-end mh-[10vh]">
                <h1 className="font-bold text-6xl pb-5 animate-pop" style={{ animationDelay: '0.2s' }}>Aamer Faiz</h1>
                <h2 className="text-3xl animate-pop" style={{ animationDelay: '0.4s' }}>Frontend Developer</h2>

                <h2 className="text-wrap mt-2 animate-slide">Skilled in Frontend Tools like React, JavaScript, NextJS and building scalable web applications with over 3 years of experience in diverse industries.</h2>
            </div>
            <div className="animate-bounce"><Image src={profilepic} width={300} height={300} alt="Profile picture" /></div>

        </div>
    );
}
