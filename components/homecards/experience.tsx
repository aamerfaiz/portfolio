"use client"; // This line makes the component a Client Component

import React, { useState } from 'react';
import BasicModal from '../muicomponents/modal'; // Adjust the path as necessary
import Image from 'next/image';
import avrl from "../../public/images/avrl.jpg";
import presenova from "../../public/images/presenova.jpg";
import experienceData from '../../data/experienceContent'; // Ensure this is the correct import path

export default function Experience() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalCompanyName, setModalCompanyName] = useState(''); // New state for company name
    const [modalDescription, setModalDescription] = useState<string[]>([]);
    const [modalAchievements, setModalAchievements] = useState<string[]>([]); // State for achievements

    const audio = new Audio('/sounds/smb_coin.wav');

    const handleExperienceClick = (title: string, companyName: string, description: string[], achievements: string[]) => {
        setModalTitle(title);
        setModalCompanyName(companyName); // Set company name
        setModalDescription(description);
        setModalAchievements(achievements); // Set achievements
        setModalOpen(true);
        audio.play()
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="bg-white shadow-md rounded-md p-6 w-full lg:max-w-fit text-black bg-cardbg lg:min-w-64">
            {/* First Experience */}
            <div 
                className="mb-4 border-4 border-[#9a7e37] bg-[#e3d8a3] rounded-lg p-4 transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => handleExperienceClick('Frontend Developer SDE-1', 'AVRL', experienceData.avrl.description, experienceData.avrl.achievements)} // Pass achievements array and company name
            >
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-[#3b3b3b]">Frontend Developer SDE-1</h2>
                        <h3 className="text-sm text-[#5a5a5a]">AVRL</h3>
                        <p className="text-sm text-[#6b6b6b]">Austin, USA (Remote)</p>
                        <p className="text-sm text-[#6b6b6b]">January 2022 - Present</p>
                    </div>
                    <div className="bg-[#d9c54d] border-[4px] border-solid border-[#c9a52a] rounded-md p-[10px] flex justify-center items-center relative shadow-2xl">
                        <Image src={avrl} width={75} height={75} alt="Company Logo" />
                    </div>
                </div>
                <div className="text-sm text-[#4a4a4a] mt-2">
                    <span className='tracking-wider text-gray-600'>Technologies:</span> React.js, JavaScript, HTML, CSS, ElectronJS, Rest API.
                </div>
            </div>

            {/* Grey Line Separator */}
            <hr className="border-t border-gray-300 my-6" />

            {/* Second Experience */}
            <div 
                className="mb-4 border-4 border-[#9a7e37] bg-[#e3d8a3] rounded-lg p-4 transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => handleExperienceClick('Frontend Developer', 'Presenova Management Solutions', experienceData.presenova.description, experienceData.presenova.achievements)} // Pass achievements array and company name
            >
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-[#3b3b3b]">Frontend Developer</h2>
                        <h3 className="text-sm text-[#5a5a5a]">Presenova Management Solutions</h3>
                        <p className="text-sm text-[#6b6b6b]">Bangalore, IN</p>
                        <p className="text-sm text-[#6b6b6b]">January 2021 - December 2021</p>
                    </div>
                    <div className="bg-[#d9c54d] border-[4px] border-solid border-[#c9a52a] rounded-md p-[10px] flex justify-center items-center relative shadow-2xl">
                        <Image src={presenova} width={75} height={75} alt="Company Logo" />
                    </div>
                </div>
                <div className="text-sm text-[#4a4a4a] mt-2">
                    <span className='tracking-wider text-gray-600'>Technologies:</span> React.js, JavaScript, HTML, CSS, ElectronJS, Rest API.
                </div>
            </div>

            {/* Modal */}
            <BasicModal 
                open={modalOpen} 
                onClose={handleCloseModal} 
                title={modalTitle} 
                companyName={modalCompanyName} // Pass company name to the modal
                description={modalDescription} // Now this is an array
                achievements={modalAchievements} // Pass achievements to the modal
            />
        </div>
    );
}
