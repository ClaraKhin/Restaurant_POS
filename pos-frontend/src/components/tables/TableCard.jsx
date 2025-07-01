import React from "react";

const TableCard = () => {
  return (
    <div className="w-[450px] bg-[#352F44] p-4  rounded-lg mb-4">
      <div className="flex items-center justify-between">
        <h1 className="text-[#f5f5f5] text-xl font-semibold">Table 1</h1>
        <p className="text-green-600 bg-[#2e4a40] px-2 py-1 rounded-lg">
          Booked
        </p>
      </div>

      <h1 className="bg-[#f6b100] text-[#f5f5f5] rounded-full p-4">AM</h1>
    </div>
  );
};

export default TableCard;
