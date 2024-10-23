import Image from "next/image";
import skilllogo from "../../public/images/solution.png";
import reactlogo from "../../public/images/react.svg";
import nexttlogo from "../../public/images/nextjs.svg";
import jslogo from "../../public/images/javascript.svg";
import csslogo from "../../public/images/css.svg";
import htmllogo from "../../public/images/html.svg";

export default function Skills() {
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
                    <div className="w-16 h-16 bg-yellow-400 rounded-full border-4 border-yellow-500 shadow-lg flex items-center justify-center">
                        <Image src={reactlogo} width={40} height={40} alt="ReactJS" />
                    </div>
                    <div className="mt-2">ReactJS</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full border-4 border-yellow-500 shadow-lg flex items-center justify-center">
                        <Image src={nexttlogo} width={40} height={40} alt="NextJS" />
                    </div>
                    <div className="mt-2">NextJS</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full border-4 border-yellow-500 shadow-lg flex items-center justify-center">
                        <Image src={jslogo} width={40} height={40} alt="JavaScript" />
                    </div>
                    <div className="mt-2">JavaScript</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full border-4 border-yellow-500 shadow-lg flex items-center justify-center">
                        <Image src={csslogo} width={40} height={40} alt="CSS" />
                    </div>
                    <div className="mt-2">CSS</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full border-4 border-yellow-500 shadow-lg flex items-center justify-center">
                        <Image src={htmllogo} width={40} height={40} alt="HTML" />
                    </div>
                    <div className="mt-2">HTML</div>
                </div>
            </div>
        </div>
    );
}
