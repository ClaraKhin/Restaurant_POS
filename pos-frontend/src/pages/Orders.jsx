import React, { useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import OrderCard from "../components/orders/OrderCard";
import BackButton from "../components/shared/BackButton";

const Orders = () => {
  const [status, setStatus] = useState("all");
  return (
    <section className="bg-[#303030] h-[calc(100vh-3rem)]  overflow-hidden">
      <div className="flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wide">
            Orders
          </h1>
        </div>
        <div className="flex items-center justify-around gap-4">
          <button
            onClick={() => setStatus("all")}
            className={`text-[#f5f5f5] text-lg ${
              status === "all" && "bg-[#595858] rounded-lg px-5 py-2"
            } rounded-lg font-semibold px-5 py-2`}
          >
            All
          </button>
          <button
            onClick={() => setStatus("progress")}
            className={`text-[#f5f5f5] text-lg ${
              status === "progress" && "bg-[#595858] rounded-lg px-5 py-2"
            } rounded-lg font-semibold px-5 py-2`}
          >
            In Progress
          </button>
          <button
            onClick={() => setStatus("ready")}
            className={`text-[#f5f5f5] text-lg ${
              status === "ready" && "bg-[#595858] rounded-lg px-5 py-2"
            } rounded-lg font-semibold px-5 py-2`}
          >
            Ready
          </button>
          <button
            onClick={() => setStatus("completed")}
            className={`text-[#f5f5f5] text-lg ${
              status === "completed" && "bg-[#595858] rounded-lg px-5 py-2"
            } rounded-lg font-semibold px-5 py-2`}
          >
            Completed
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 px-16 py-4 overflow-y-scroll scrollbar-hide pb-20">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
      <BottomNav />
    </section>
  );
};
export default Orders;
