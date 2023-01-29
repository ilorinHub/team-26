import React from "react";

import basic from "../assets/basic.png";
import ultimate from "../assets/ultimate.png";
import standard from "../assets/standard.png";
function PriceCard() {
  return (
    <div className="flex space-x-8 mt-8 pb-10">
      <div className="w-[425px] h-[616px] relative rounded-2xl bg-white ">
        <div className="w-full h-[300.32px] flex flex-col items-center bg-purple text-dPurple font-bold rounded-2xl py-10 space-y-4">
          <p className="text-2xl mt-6">Basic</p>
          <h3 className="text-6xl">$15</h3>
          <p className="text-2xl font-normal">Billed Annually</p>
        </div>
        <div className="mx-10 my-20">
          <img src={basic} alt="" />
        </div>
        <button className="p-4 w-full bg-purple rounded-2xl absolute text-dPurple -mt-6 text-2xl font-bold">
          Get Started
        </button>
      </div>
      <div className="w-[425px] h-[616px] rounded-2xl bg-white relative">
        <div className="w-full h-[300.32px] flex flex-col items-center bg-dPurple text-white font-bold rounded-2xl py-10 space-y-4">
          <p className="text-2xl mt-6">Ultimate</p>
          <h3 className="text-6xl">$50</h3>
          <p className="text-2xl font-normal">Billed Annually</p>
        </div>
        <div className="mx-10 my-20">
          <img src={ultimate} alt="" />
        </div>
        <button className="p-4 w-full bg-dPurple rounded-2xl absolute text-white -mt-6 text-2xl font-bold">
          Get Started
        </button>
      </div>
      <div className="w-[425px] h-[616px] rounded-2xl bg-white relative">
        <div className="w-full h-[300.32px] flex flex-col items-center bg-purple text-dPurple font-bold rounded-2xl py-12 space-y-4">
          <p className="text-2xl mt-6">Standard</p>
          <h3 className="text-6xl">$30</h3>
          <p className="text-2xl font-normal">Billed Annually</p>
        </div>
        <div className="mx-10 my-20">
          <img src={standard} alt="" />
        </div>
        <button className="p-4 w-full bg-purple rounded-2xl absolute text-dPurple -mt-6 text-2xl font-bold">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default PriceCard;
