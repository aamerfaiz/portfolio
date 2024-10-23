import Image from "next/image";
import skilllogo from "../../public/images/solution.png"
import reactlogo from "../../public/images/react.svg"
import nexttlogo from "../../public/images/nextjs.svg"
import jslogo from "../../public/images/javascript.svg"
import csslogo from "../../public/images/css.svg"
import htmllogo from "../../public/images/html.svg"



export default function Skills() {
    return (

        <div className="bg-[#ffffff] text-black rounded px-[2vw] py-[2vh] mr-[1vw] flex flex-col min-h-[20vh] w-[29vw]">
            <div className="flex flex-row items-center self-center justify-between mb-[1vh]">
                <Image src={skilllogo} width={40} height={40} alt="Education" className="self-center mx-[0.5vw]"></Image>
                <div className="mx-[0.5vw] text-lg">Skills</div>
            </div>
            <div className="flex flex-col justify-between items-center mt-[1vh]">
                <div className="flex flex-row items-center">
                    <Image src={reactlogo} width={30} height={30} alt="Education" className="self-center mx-[0.5vw] m-2"></Image>
                    <div>ReactJS</div>
                    <Image src={nexttlogo} width={30} height={30} alt="Education" className="self-center mx-[0.5vw] m-2"></Image>
                    <div>NextJS</div>
                    <Image src={jslogo} width={30} height={30} alt="Education" className="self-center mx-[0.5vw] m-2"></Image>
                    <div>Javascript</div>
                    <Image src={csslogo} width={30} height={30} alt="Education" className="self-center mx-[0.5vw] m-2"></Image>
                    <div>CSS</div>
                    <Image src={htmllogo} width={30} height={30} alt="Education" className="self-center mx-[0.5vw] m-2"></Image>
                    <div>HTML</div>
                </div>
                
            </div>
        </div>
    );
}
