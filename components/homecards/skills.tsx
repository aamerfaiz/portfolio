"use client";

import Image from "next/image";
import skilllogo from "../../public/images/solution.png";
import reactlogo from "../../public/images/react.svg";
import nexttlogo from "../../public/images/nextjs.svg";
import jslogo from "../../public/images/javascript.svg";
import csslogo from "../../public/images/css.svg";
import tailwindlogo from "../../public/images/tailwind.svg";
import htmllogo from "../../public/images/html.svg";
import { useState } from "react";

// Define the type for flipStates to ensure type safety
type FlipState = {
  react: boolean;
  nextjs: boolean;
  js: boolean;
  css: boolean;
  html: boolean;
  tailwind: boolean;
};

export default function Skills() {
  const [flipStates, setFlipStates] = useState<FlipState>({
    react: false,
    nextjs: false,
    js: false,
    css: false,
    html: false,
    tailwind: false
  });

  const handleCoinClick = (coin: keyof FlipState) => {
    // Play coin sound on click
    const coinSound = new Audio("/sounds/smb_coin.wav");
    coinSound.play();

    // Toggle the flip state of the clicked coin
    setFlipStates((prevStates) => ({
      ...prevStates,
      [coin]: !prevStates[coin],
    }));

    // Reset the flip after a delay (e.g., 1s)
    setTimeout(() => {
      setFlipStates((prevStates) => ({
        ...prevStates,
        [coin]: false,
      }));
    }, 1000);
  };

  return (
    <div className="bg-white text-black grow bg-cardbg rounded-lg shadow-md px-6 py-4 flex flex-col min-h-[20vh] w-full sm:w-[45vw] lg:w-[29vw]">
      {/* Header */}
      <div className="flex items-center justify-center mb-4">
        <div className="flex items-center justify-center bg-white border-4 border-gray-300 rounded-full p-2 shadow-md">
          <Image src={skilllogo} width={40} height={40} alt="Skills" className="mx-2 relative z-10" />
          <h2 className="text-lg font-semibold relative z-10 mr-4">Skills</h2>
        </div>
      </div>

      {/* Skills Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2">
        <div className="flex flex-col items-center">
          <div
            className={`w-16 h-16 bg-yellow-400 rounded-full cursor-pointer border-4 border-yellow-500 shadow-lg flex items-center justify-center ${
              flipStates.react && "animate-flip"
            }`} // Apply flip animation only when flipStates.react is true
            onClick={() => handleCoinClick("react")}
          >
            <Image src={reactlogo} width={40} height={40} alt="ReactJS" />
          </div>
          <div className="mt-2">ReactJS</div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className={`w-16 h-16 bg-yellow-400 rounded-full cursor-pointer border-4 border-yellow-500 shadow-lg flex items-center justify-center ${
              flipStates.nextjs && "animate-flip"
            }`} // Apply flip animation only when flipStates.nextjs is true
            onClick={() => handleCoinClick("nextjs")}
          >
            <Image src={nexttlogo} width={40} height={40} alt="NextJS" />
          </div>
          <div className="mt-2">NextJS</div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className={`w-16 h-16 bg-yellow-400 rounded-full cursor-pointer border-4 border-yellow-500 shadow-lg flex items-center justify-center ${
              flipStates.js && "animate-flip"
            }`} // Apply flip animation only when flipStates.js is true
            onClick={() => handleCoinClick("js")}
          >
            <Image src={jslogo} width={40} height={40} alt="JavaScript" />
          </div>
          <div className="mt-2">JavaScript</div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className={`w-16 h-16 bg-yellow-400 rounded-full cursor-pointer border-4 border-yellow-500 shadow-lg flex items-center justify-center ${
              flipStates.tailwind && "animate-flip"
            }`} // Apply flip animation only when flipStates.css is true
            onClick={() => handleCoinClick("tailwind")}
          >
            <Image src={tailwindlogo} width={40} height={40} alt="TAILWIND" />
          </div>
          <div className="mt-2">Tailwind CSS</div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className={`w-16 h-16 bg-yellow-400 rounded-full cursor-pointer border-4 border-yellow-500 shadow-lg flex items-center justify-center ${
              flipStates.css && "animate-flip"
            }`} // Apply flip animation only when flipStates.css is true
            onClick={() => handleCoinClick("css")}
          >
            <Image src={csslogo} width={40} height={40} alt="CSS" />
          </div>
          <div className="mt-2">CSS</div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className={`w-16 h-16 bg-yellow-400 rounded-full cursor-pointer border-4 border-yellow-500 shadow-lg flex items-center justify-center ${
              flipStates.html && "animate-flip"
            }`} // Apply flip animation only when flipStates.html is true
            onClick={() => handleCoinClick("html")}
          >
            <Image src={htmllogo} width={40} height={40} alt="HTML" />
          </div>
          <div className="mt-2">HTML</div>
        </div>
      </div>
    </div>
  );
}
