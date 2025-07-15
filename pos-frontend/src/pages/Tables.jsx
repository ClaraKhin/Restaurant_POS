import React, { useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import TableCard from "../components/tables/TableCard";
import { tables } from "../constants";

const Tables = () => {
  const [status, setStatus] = useState("all");
  return (
    <section className="bg-[#303030] overflow-hidden">
      <div className="flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wide">
            Tables
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
            onClick={() => setStatus("booked")}
            className={`text-[#f5f5f5] text-lg ${
              status === "booked" && "bg-[#595858] rounded-lg px-5 py-2"
            } rounded-lg font-semibold px-5 py-2`}
          >
            Booked
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 px-16 py-4 overflow-y-scroll scrollbar-hide pb-20">
        {tables.map((table) => {
          return (
            <TableCard
              key={table.id}
              id={table.id}
              name={table.name}
              status={table.status}
              initials={table.initial}
            />
          );
        })}
      </div>
      <BottomNav />
    </section>
  );
};

export default Tables;
