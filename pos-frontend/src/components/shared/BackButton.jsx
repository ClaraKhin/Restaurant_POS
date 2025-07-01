import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="bg-[#f6b100] p-3 text-xl font-bold rounded-full text-[#f5f5f5] font-bold"
    >
      <IoArrowBack />
    </button>
  );
};

export default BackButton;
