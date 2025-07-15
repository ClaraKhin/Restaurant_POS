import React from "react";
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import { FaUserCircle } from "react-icons/fa";
import MenuContainer from "../components/menu/MenuContainer";
import CustomerInfo from "../components/menu/CustomerInfo";
import CartInfo from "../components/menu/CartInfo";
import Bill from "../components/menu/Bill";

const Menu = () => {
  return (
    <section className="bg-[#303030] min-h-screen flex gap-3 relative">
      <div className="flex-[3] overflow-y-auto pb-20">
        <div className="flex items-center justify-between px-10 py-4">
          <div className="flex items-center gap-4">
            <BackButton />
            <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wide">
              Menu
            </h1>
          </div>
          <div className="flex items-center justify-around gap-4">
            <div className="flex items-center gap-3 cursor-pointer">
              <FaUserCircle className="text-[#f5f5f5] text-4xl" />
              <div className="flex flex-col items-start">
                <h1 className="text-md text-[#f5f5f5] font-semibold">Khin</h1>
                <p className="text-xs text-[#ababab] font-medium">
                  Table No: 2
                </p>
              </div>
            </div>
          </div>
        </div>

        <MenuContainer />
      </div>

      <div className="flex-[1] bg-[#000000] mt-4 mr-3 h-[750px] rounded-lg pt-2 mb-20">
        {/* Customer Info */}
        <CustomerInfo />

        <hr className="border-[#1F1F1F] border-t-2" />

        {/* Cart Items */}
        <CartInfo />
        <hr className="border-[#1F1F1F] border-t-2" />

        {/* Bills */}
        <Bill />
      </div>

      <BottomNav />
    </section>
  );
};
export default Menu;
