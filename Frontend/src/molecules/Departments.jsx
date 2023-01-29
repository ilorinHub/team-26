import React from "react";
import dep1 from "../assets/dep1.png";
import dep2 from "../assets/dep2.png";
import dep3 from "../assets/dep3.png";
import dep4 from "../assets/dep4.png";
import dep5 from "../assets/dep5.png";
import dep6 from "../assets/dep6.png";
import dep7 from "../assets/dep7.png";
import dep8 from "../assets/dep8.png";
const data = [
  {
    text: "finance & supply",
    img: dep1,
  },
  {
    text: "personnel management",
    img: dep2,
  },
  {
    text: "planning & budget",
    img: dep3,
  },
  {
    text: "human capital development",
    img: dep4,
  },
  {
    text: "curriculum & assessment",
    img: dep5,
  },
  {
    text: "school services",
    img: dep6,
  },
  {
    text: "quality assurance bureau",
    img: dep7,
  },
  {
    text: "planning, research & statistics",
    img: dep8,
  },
];
function Departments() {
  return (
    <div className="mt-20 " id="departments">
      <div className="flex items-center justify-center px-4 md:w-[55%] gap-2 md:gap-7 mx-auto -mb-10 md:mb-0">
        <span className="grow bg-black h-[1px] md:h-[2px] "></span>
        <h1 className="font-bold text-lg md:text-3xl tracking-wide">
          Departments
        </h1>
        <span className="grow bg-black h-[1px] md:h-[2px]"></span>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 my-[5rem] md:px-20 max-w-[1400px] mx-auto ">
        {data.map((elem) => {
          return (
            <div
              key={elem.text}
              className="w-40 md:w-60 h-[17rem] md:h-60 border-2 border-green flex flex-col items-center justify-center p-2 md:p-4 text-center"
            >
              <div className="w-[6rem] md:w-[8rem] h-[8rem] md:h-[8rem] flex items-center justify-center p-2 bg-green">
                {" "}
                <img src={elem.img} />
              </div>
              <p className="uppercase mt-2 h-6 font-bold">{elem.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Departments;
