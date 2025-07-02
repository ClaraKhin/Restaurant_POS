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
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#2a2438] p-2 flex justify-around">
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
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Create Order"
      ></Modal>
    </div>
  );
};
export default BottomNav;
