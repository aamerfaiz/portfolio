import Image from "next/image";
import worklogo from "../../public/images/working.png"
import sjclogo from "../../public/images/sjc.jpg"
import BasicTimeline from "../muicomponents/timeline";

export default function Experience() {
    return (

        <div className="bg-[#ffffff] text-black rounded px-[2vw] py-[1vh] mr-[1vw] flex flex-col min-h-[10vh] w-[55vw]">
            <div className="flex flex-row items-center self-center justify-between mb-[1vh]">
                <Image src={worklogo} width={40} height={40} alt="Education" className="self-center mx-[0.5vw]"></Image>
                <div className="mx-[0.5vw] text-lg">Experience</div>
            </div>
            <div className="flex flex-row justify-start items-start ">
               <BasicTimeline></BasicTimeline>
            </div>
        </div>
    );
}
