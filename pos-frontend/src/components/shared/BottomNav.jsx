import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder } from "react-icons/md";
import { MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const BottomNav = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(0);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const increment = () => {
    if (guestCount >= 6) return; // limit guest count to a maximum of 6
    setGuestCount((prev) => prev + 1);
  };
  const decrement = () => {
    if (guestCount <= 0) return; // Prevent decrementing below 0
    setGuestCount((prev) => prev - 1);
  };
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#2a2438] p-2 h-16 flex justify-around">
      <button
        onClick={() => navigate("/")}
        className="flex items-center justify-center text-[#f5f5f5] bg-[#5c5470] w-[200px] rounded-[20px] py-2"
      >
        <FaHome className="inline mr-2" size={20} /> <p>Home</p>
      </button>
      <button
        onClick={() => navigate("/orders")}
        className="flex items-center justify-center text-[#ababab] w-[200px]"
      >
        <MdOutlineReorder className="inline mr-2" size={20} />
        <p>Orders</p>
      </button>
      <button
        onClick={() => navigate("/tables")}
        className="flex items-center justify-center text-[#ababab] w-[200px]"
      >
        <MdTableBar className="inline mr-2" size={20} />
        <p>Tables</p>
      </button>
      <button className="flex items-center justify-center text-[#ababab] w-[200px]">
        <CiCircleMore className="inline mr-2" size={20} />
        <p>More</p>
      </button>

      <button
        onClick={openModal}
        className="absolute bottom-6 bg-[#F6B100] text-[#f5f5f5] rounded-full p-3 items-center"
      >
        <BiSolidDish size={30} />
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Order">
        <div>
          <label className="block text-[#f5f5f5] mb-2 text-sm font-medium">
            Customer Name
          </label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-[#5C5757]">
            <input
              type="text"
              name=""
              placeholder="Enter Customer Name"
              id=""
              className="bg-transparent flex-1 text-[#f5f5f5] focus:outline-none "
            />
          </div>
        </div>

        <div>
          <label className="block text-[#f5f5f5] mb-2 mt-3 text-sm font-medium">
            Customer Phone
          </label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-[#5C5757]">
            <input
              type="number"
              name=""
              placeholder="+95-9999999999"
              id=""
              className="bg-transparent flex-1 text-[#f5f5f5] focus:outline-none "
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 mt-3 text-sm font-medium text-[#f5f5f5]">
            Guest
          </label>
          <div className="flex items-center justify-between rounded-lg px-4 py-3 bg-[#5C5757]">
            <button
              onClick={decrement}
              className="text-[#F8B500] text-2xl font-bold"
            >
              &minus;
            </button>
            <span className="text-[#f5f5f5]">{guestCount} Person</span>
            <button
              onClick={increment}
              className="text-[#F8B500] text-2xl font-bold"
            >
              &#43;
            </button>
          </div>
        </div>

        <button
          onClick={() => navigate("/tables")}
          className="w-full bg-[#f6B100] text-[#f5f5f5] rounded-lg py-3 mt-8 hover:bg-yellow-600 font-bold tracking-wide text-lg"
        >
          Create Order
        </button>
      </Modal>
    </div>
  );
};
export default BottomNav;
