import * as React from 'react';
import Image from 'next/image';
import avrl from "../../public/images/avrl.jpg";
import presenova from "../../public/images/presenova.jpg";

export default function NoOppositeContent() {
    return (
        <div className="bg-white shadow-md rounded-md p-6 w-full lg:max-w-lg text-black bg-cardbg" >
            {/* First Experience */}
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-lg font-semibold">Frontend Developer SDE-1</h2>
                    <h3 className="text-sm text-white">AVRL</h3>
                    <p className="text-sm text-white">Austin, USA (Remote)</p>  {/* Added location */}
                    <p className="text-sm text-white">January 2022 - Present</p>
                </div>

                {/* Coin Brick Style */}
                <div className="bg-[#d9c54d] border-[4px] border-solid border-[#c9a52a] rounded-md p-[10px] flex justify-center items-center relative shadow-2xl">
                    <Image src={avrl} width={75} height={75} alt="Company Logo" />
                </div>
            </div>

            <div className="text-sm text-white mb-4">
                <span className='tracking-wider text-[#F5F5F5]'>Technologies:</span> React.js, JavaScript, HTML, CSS, ElectronJS, Rest API.
            </div>

            {/* Second Experience */}
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-lg font-semibold">Frontend Developer</h2>
                    <h3 className="text-sm text-white">Presenova Management Solutions</h3>
                    <p className="text-sm text-white">Bangalore, IN</p>
                    <p className="text-sm text-white">January 2021 - December 2021</p>
                </div>

                {/* Coin Brick Style */}
                <div className="bg-[#d9c54d] border-[4px] border-solid border-[#c9a52a] rounded-md p-[10px] flex justify-center items-center relative shadow-2xl">
                    <Image src={presenova} width={75} height={75} alt="Company Logo" />
                </div>
            </div>

            <div className="text-sm text-white mb-4">
                <span className='tracking-wider text-[#F5F5F5]'>Technologies:</span> React.js, JavaScript, HTML, CSS, ElectronJS, Rest API.
            </div>
        </div>
    );
}
