import Image from "next/image";
import edulogo from "../../public/images/graduation.png"
import sjclogo from "../../public/images/sjc.jpg"

export default function Education() {
    return (

        <div className="bg-[#ffffff] text-black rounded px-[2vw] py-[2vh] mr-[1vw] flex flex-col min-h-[20vh] w-[25vw]">
            <div className="flex flex-row items-center self-center justify-between mb-[1vh]">
                <Image src={edulogo} width={40} height={40} alt="Education" className="self-center mx-[0.5vw]"></Image>
                <div className="mx-[0.5vw] text-lg">Education</div>
            </div>
            <div className="flex flex-row justify-between items-center">
                <Image src={sjclogo} width={75} height={75} alt="College Logo" className="mr-[1vw]" />
                <div>
                    <div className="text-base">St. Joseph's College (Autonomous), Bangalore, India</div>
                    <div className="text-lg">Bachelor's of Computer Applications</div>
                    <div className="text-sm">2017-2020</div>
                </div>
            </div>
        </div>
    );
}
