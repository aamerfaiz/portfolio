import Image from "next/image";
import skilllogo from "../../public/images/solution.png";
import reactlogo from "../../public/images/react.svg";
import nexttlogo from "../../public/images/nextjs.svg";
import jslogo from "../../public/images/javascript.svg";
import csslogo from "../../public/images/css.svg";
import htmllogo from "../../public/images/html.svg";

export default function Skills() {
    return (
        <div className="bg-white text-black rounded-lg shadow-md px-6 py-4 flex flex-col min-h-[20vh] w-full sm:w-[45vw] lg:w-[29vw]">
            {/* Header */}
            <div className="flex items-center justify-center mb-4">
                <Image src={skilllogo} width={40} height={40} alt="Skills" className="mx-2" />
                <h2 className="text-lg font-semibold">Skills</h2>
            </div>

            {/* Skills Section */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2">
                <div className="flex flex-col items-center">
                    <Image src={reactlogo} width={40} height={40} alt="ReactJS" className="m-2" />
                    <div>ReactJS</div>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={nexttlogo} width={40} height={40} alt="NextJS" className="m-2" />
                    <div>NextJS</div>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={jslogo} width={40} height={40} alt="JavaScript" className="m-2" />
                    <div>JavaScript</div>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={csslogo} width={40} height={40} alt="CSS" className="m-2" />
                    <div>CSS</div>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={htmllogo} width={40} height={40} alt="HTML" className="m-2" />
                    <div>HTML</div>
                </div>
            </div>
        </div>
    );
}
