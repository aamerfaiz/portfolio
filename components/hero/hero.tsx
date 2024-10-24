"use client";
import Image from "next/image";
import profilepic from "../../public/images/Aamer.png"
import React, { useState } from "react";

export default function Hero() {
    const [isBouncing, setIsBouncing] = useState(false);

    const clickAudio = new Audio('/sounds/smb_jump-small.wav');

    const handleImageClick = () => {
        // Play the sound on click
        clickAudio.play();

        // Trigger the bounce animation
        setIsBouncing(true);

        // Remove the bounce class after the animation ends (approx. 1s for 'animate-bounce')
        setTimeout(() => {
            setIsBouncing(false);
        }, 1000); // Match this with the animation duration
    };
    return (
        <div >
            <div className="hidden md:flex lg:flex flex-col md:flex-row lg:flex-row justify-end py-[2vh] px-[10vh] items-center pb-0 rounded-md mx-[2vw] overflow-hidden bg-herobg bg-left-bottom">

                <div className="flex flex-col justify-between items-end mh-[10vh] bg-white bg-opacity-70 p-4 rounded-lg shadow-md">
                    <h1 className="font-bold text-6xl pb-5 animate-pop" style={{ animationDelay: '0.2s' }}>Aamer Faiz</h1>
                    <h2 className="text-3xl animate-pop" style={{ animationDelay: '0.4s' }}>Frontend Developer</h2>

                    <h2 className="text-wrap mt-2 animate-slide">Skilled in Frontend Tools like React, JavaScript, NextJS and building scalable web applications with over 3 years of experience in diverse industries.</h2>
                </div>
                <div  onClick={handleImageClick}
                    className={`${isBouncing ? "animate-bounce" : ""}`}><Image src={profilepic} width={300} height={300} alt="Profile picture" className="cursor-pointer"/></div>
            </div>

            <div className="flex md:hidden lg:hidden flex-col justify-center items-center py-4 px-4 rounded-md mx-2 overflow-hidden bg-herobg bg-left-bottom">
                <div  onClick={handleImageClick}
                    className={`${isBouncing ? "animate-bounce" : ""}`}>
                    <Image src={profilepic} width={200} height={200} alt="Profile picture" className="object-cover" />
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                    {/* Background box for text */}
                    <div className="bg-white bg-opacity-70 p-4 rounded-lg shadow-md">
                        <h1 className="font-bold text-5xl pb-3 animate-pop" style={{ animationDelay: '0.2s' }}>Aamer Faiz</h1>
                        <h2 className="text-2xl animate-pop" style={{ animationDelay: '0.4s' }}>Frontend Developer</h2>
                        <h2 className="text-base mt-2 animate-slide px-4">Skilled in Frontend Tools like React, JavaScript, NextJS and building scalable web applications with over 3 years of experience in diverse industries.</h2>
                    </div>
                </div>
            </div>


        </div>
    );
}
