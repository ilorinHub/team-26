import React from "react";
import PriceCard from "../component/PriceCard";

function Pricing() {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="font-bold  w-[40%] text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#452C92] to-[#754DEE] text-center mb-10">
        Three Solutions To Make Your Life Easier
      </h1>
      <PriceCard />
    </div>
  );
}

export default Pricing;
