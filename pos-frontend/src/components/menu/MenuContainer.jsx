import React, { useState } from "react";
import { menus } from "../../constants";
import { GrRadialSelected } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";

const MenuContainer = () => {
  const [selected, setSelected] = useState(menus[0]);
  const [itemCount, setItemCount] = useState(0);
  const [itemId, setItemId] = useState(); // id of the selected item

  const increment = (id) => {
    setItemId(id); // set the id of the selected item
    if (itemCount >= 6) return; // limit guest count to a maximum of 6
    setItemCount((prev) => prev + 1);
  };

  const decrement = (id) => {
    setItemId(id); // set the id of the selected item
    if (itemCount <= 0) return; // Prevent decrementing below 0
    setItemCount((prev) => prev - 1);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
        {menus.map((menu) => {
          return (
            <div
              key={menu.id}
              className="flex flex-col items-start justify-between p-4 rounded-lg cursor-pointer h-[100px]"
              style={{ backgroundColor: menu.bgColor }}
              onClick={() => {
                setSelected(menu); // set the selected menu
                setItemId(0); // reset the item id
                setItemCount(0); // reset the item count
              }}
            >
              <div className="flex items-center justify-between w-full ">
                <h1 className="text-[#f5f5f5] font-semibold">
                  {menu.icon} {menu.name}
                </h1>
                {selected.id === menu.id && (
                  <GrRadialSelected className="text-[#f5f5f5]" size={15} />
                )}
              </div>
              <p className="text-[#ababab] text-sm font-semibold">
                {menu.items.length} Items
              </p>
            </div>
          );
        })}
      </div>

      <hr className="border-[#505062] border-t-2 mt-4" />

      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
        {selected?.items.map((menu) => {
          return (
            <div
              key={menu.id}
              className="flex flex-col items-start justify-between p-4 rounded-lg h-[150px] hover:bg-[#1a1919] bg-[#000000]"
            >
              <div className="flex items-center justify-between w-full ">
                <h1 className="text-[#f5f5f5] font-semibold">{menu.name}</h1>
                <button className="bg-[#2e4a40] text-[#02ca3a] p-2 rounded-lg ml-3 cursor-pointer">
                  <FaShoppingCart size={20} />
                </button>
              </div>

              <div className="flex items-center justify-between w-full ">
                <p className="text-[#f5f5f5] text-xl font-semibold">
                  ${menu.price}
                </p>
                <div className="flex items-center justify-between rounded-lg px-2 bg-[#5C5757] gap-5">
                  <button
                    onClick={() => decrement(menu.id)} // pass the id of the selected item
                    className="text-[#F8B500] text-2xl font-bold"
                  >
                    &minus;
                  </button>
                  <span className="text-[#f5f5f5]">
                    {menu.id === itemId ? itemCount : 0}
                  </span>

                  <button
                    onClick={() => increment(menu.id)} // pass the id of the selected item
                    className="text-[#F8B500] text-2xl font-bold"
                  >
                    &#43;
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default MenuContainer;
