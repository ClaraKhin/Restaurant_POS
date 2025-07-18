import React from "react";

const Modal = ({ title, onClose, isOpen, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#363434] rounded-lg shadow-lg w-full max-w-lg mx-4 p-5">
        <div className="flex justify-between items-center px-5 py-2 mb-5 border-b border-[#2B2B28]">
          <h2 className="text-xl text-[#f5f5f5] font-semibold ">{title}</h2>
          <button
            className="text-gray-500 text-2xl hover:text-gray-300"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
