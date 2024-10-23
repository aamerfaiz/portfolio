import Image from "next/image";
import edulogo from "../../public/images/graduation.png";
import sjclogo from "../../public/images/sjc.jpg";

export default function Education() {
    return (
        <div className="bg-white text-black rounded-lg shadow-md px-6 py-4 flex flex-col min-h-[20vh] w-full max-w-sm md:max-w-md lg:max-w-lg">
            {/* Header */}
            <div className="flex items-center justify-center mb-4">
                <Image src={edulogo} width={40} height={40} alt="Education" className="mx-2" />
                <h2 className="text-lg font-semibold">Education</h2>
            </div>

            {/* College Section */}
            <div className="flex flex-row items-center">
                <Image src={sjclogo} width={75} height={75} alt="College Logo" className="mr-4" />
                <div className="ml-2">
                    <h3 className="text-base md:text-lg lg:text-xl font-medium">
                        St. Joseph&apos;s College (Autonomous), Bangalore, India
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg">Bachelor&apos;s of Computer Applications</p>
                    <p className="text-xs md:text-sm lg:text-base text-gray-500">2017-2020</p>
                </div>
            </div>
        </div>
    );
}
