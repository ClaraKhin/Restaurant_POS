import React from "react";
import { getRandomColor } from "../../utils";
import { useNavigate } from "react-router-dom";

const TableCard = ({ name, status, initials }) => {
  const bgColor = getRandomColor();

  const navigate = useNavigate();
  const handleClick = () => {
    if (status === "booked") return; // If the table is booked, don't allow navigation
    navigate("/Menu"); // Navigate to the Menu page
  };

  return (
    <div
      onClick={handleClick}
      className="w-[450px] bg-[#000000] hover:bg-[#1a1919] p-4  rounded-lg mb-4 cursor-pointer"
    >
      <div className="flex items-center justify-between px-1">
        <h1 className="text-[#f5f5f5] text-xl font-semibold">{name}</h1>
        <p
          className={`${
            status === "booked"
              ? "text-green-600 bg-[#2e4a40]"
              : "bg-[#664a04] text-white"
          } px-2 py-1 rounded-lg`}
        >
          {status}
        </p>
      </div>
      <div className="flex items-center justify-center mt-5 mb-9">
        <h1
          style={{ backgroundColor: bgColor }}
          className="text-lg text-white text-center w-[70px] h-[70px] rounded-full p-5"
        >
          {initials}
        </h1>
      </div>
    </div>
  );
};

export default TableCard;
