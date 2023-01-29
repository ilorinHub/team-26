import React from "react";
import { useState } from "react";

import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import down from "../assets/downIcon.png";
function DashBoardNavbar({ setIsNav, isNav, title, links }) {
  const [showLinks, setShowLinks] = useState(true);
  return (
    <div
      className="w-full bg-black h-screen absolute z-10"
      onClick={() => setIsNav(!isNav)}
    >
      <div className="flex flex-col w-[60%] pt-20 bg-white h-screen ">
        <div className="mb-10 pl-8 flex justify-between items-center mr-4 ">
          <div>
            <h1 className="font-bold text-xl">{title}</h1>
            <p>Horizon</p>
          </div>
          <GrClose className="w-6 h-6" onClick={() => setIsNav(!isNav)} />
        </div>
        {links.map((elem) => (
          <Link to={`/document/${elem.text}`} key={elem.text}>
            <div className="flex space-x-2 items-center hover:bg-green-rgba pl-8 p-2 my-2">
              <div>
                <img src={elem.icon} alt={elem.alt} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DashBoardNavbar;
