import { Loader2, XIcon } from "lucide-react";
import { useState } from "react";

export default function LoadingModal({ showModal, setShowModal }) {
  const handleClose = () => {
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative w-full max-w-[600px] max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl p-8">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold mb-4">
            Almost there! Your model is getting dressed up.
          </h3>
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer"
          >
            <XIcon className="text-gray-600" />
          </button>
        </div>

        <div className="flex justify-center items-center mt-4">
          <div className="w-full space-y-6">
            <p>
              Our AI model is generating fashion model shots. This usually takes
              few minues.
            </p>
            <div className="flex items-center justify-center h-full">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
