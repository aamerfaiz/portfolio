"use client"; // This line makes the component a Client Component
import Modal from '@mui/material/Modal';

interface BasicModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  companyName: string; // Add companyName prop
  description: string[]; // Description items
  achievements: string[]; // Key achievements
}

const BasicModal = (props: BasicModalProps) => {
  const { open, onClose, title, companyName, description, achievements } = props; // Destructure props

  return (
    <Modal
      open={open}
      onClose={onClose} // This handles closing the modal when clicking outside
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div className="flex items-center justify-center h-full">
        <div className="bg-[#FF6B6B] rounded-2xl shadow-2xl w-full max-w-6xl p-8 mx-4 max-h-[80vh] overflow-y-auto scrollbar-visible">
          <h2 className="text-lg font-bold text-white" id="modal-title">
            {title} at {companyName} {/* Display the company name */}
          </h2>
          <div className="mt-4">
            <h3 className="text-white font-semibold">Description:</h3>
            <ul className="text-white pl-5">
              {description.map((item, index) => (
                <li key={index} className="list-disc mb-1">{item}</li> // Render each item as a bullet point with margin
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-white font-semibold">Key Achievements:</h3>
            <ul className="text-white pl-5">
              {achievements.map((item, index) => (
                <li key={index} className="list-disc mb-1">{item}</li> // Render each achievement as a bullet point with margin
              ))}
            </ul>
          </div>
          {/* Centralizing the button */}
          <div className="flex justify-center">
            <button
              onClick={onClose}
              className="mt-4 bg-[#6BCB77] hover:bg-[#4A9A5A] text-white font-semibold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default BasicModal;
