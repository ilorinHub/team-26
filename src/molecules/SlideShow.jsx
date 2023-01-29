import React, { useEffect, useState } from "react";
import gov from "../assets/Governor.png";
import lab from "../assets/lab.png";
import school from "../assets/school.png";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const data = [
  { img: school },
  { img: gov },
  {
    img: lab,
  },
];
function SlideShow() {
  return (
    <div
      id="about"
      className=" px-8 lg:px-[150px] md:text-left lg:pt-20 flex items-center justify-center mx-auto w-full  "
    >
      <div className="w-10 h-10 md:w-20 md:h-20 shadow-xl rounded-full flex justify-center items-center ">
        <IoIosArrowBack className="md:w-10  md:h-10" />
      </div>
      <div className="flex items-center w-[90%] h-60 md:w-[60%] -space-x-16">
        <div className="w-18 h-18 ">
          <img className="slide-img" src={data[0].img} alt="" />
        </div>
        <div className="z-10">
          <img src={data[1].img} alt="" className="slide-img" />
        </div>
        <div>
          <img src={data[2].img} alt="" className="slide-img" />
        </div>
      </div>
      <div className="w-10 h-10 md:w-20 md:h-20 shadow-xl rounded-full flex justify-center items-center ">
        <IoIosArrowForward className="md:w-10  md:h-10" />
      </div>
    </div>
  );
}

export default SlideShow;
