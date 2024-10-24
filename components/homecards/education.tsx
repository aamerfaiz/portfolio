import Image from "next/image";
import edulogo from "../../public/images/graduation.png";
import sjclogo from "../../public/images/sjc.jpg";

export default function Education() {
    return (
        <div className="bg-white text-black grow rounded-lg lg:max-w-fit bg-cardbg shadow-md px-6 py-4 flex flex-col min-h-[20vh] w-full lg:max-w-lg">
            {/* Header */}
            <div className="flex items-center justify-center mb-4">
                <div className="flex items-center justify-center bg-white border-4 border-gray-300 rounded-full p-2 shadow-md">
                    <Image src={edulogo} width={40} height={40} alt="Education" className="mx-2 relative z-10" />
                    <h2 className="text-lg font-semibold relative z-10 mr-4">Education</h2>
                </div>
            </div>




            {/* College Section */}
            <div className="flex flex-row items-center justify-center flex-grow">
                <div className="lg:w-20 lg:h-20 md:w-20 md:h-20 w-16 h-16  bg-yellow-400 rounded-full border-4 border-yellow-500 shadow-lg flex items-center justify-center mr-4 animate-wave">
                    <Image src={sjclogo} width={60} height={60} alt="College Logo" className="rounded-full" />
                </div>

                <div className="ml-2">
                    <h3 className="text-base md:text-lg lg:text-xl font-medium">
                        Bachelor&apos;s of Computer Applications
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg">St. Joseph&apos;s College (Autonomous), Bangalore, India</p>
                    <p className="text-xs md:text-sm lg:text-base text-gray-500">2017-2020</p>
                </div>
            </div>
        </div>
    );
}
