import * as React from 'react';
import Image from 'next/image';
import reactlogo from "../../public/images/react.svg";


export default function NoOppositeContent() {
    return (
        <div className="bg-white shadow-md rounded-md p-6 w-full max-w-md text-black">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-lg font-semibold">Frontend Developer</h2>
                    <h3 className="text-sm text-gray-500">AVRL</h3>
                    <p className="text-sm text-gray-400">Austin, USA (Remote)</p>  {/* Added location */}
                    <p className="text-sm text-gray-400">June 2021 - Present</p>
                </div>
                <Image src={reactlogo} width={30} height={30} alt="Company Logo" className="w-12 h-12" />
            </div>

            <div className="text-sm text-gray-600 mb-4">
                <strong>Technologies:</strong> React.js, JavaScript, HTML, CSS, ElectronJS, Rest API.
            </div>

            <div className="flex items-center justify-between">
                <a href="https://github.com/project-link" className="text-blue-500 hover:underline">View Project</a>
                <p className="text-sm text-green-600">Increased website speed by 20%</p>
            </div>
        </div>
    );
}
