import React from "react";
import { Link } from "react-router-dom";
import imgCtr from "../assets/ctrImg.svg";
import Button from "../component/Button";

function CentralCtr() {
  return (
    <div className="bg-[#2AA96D] w-[100%] mx-auto">
      <div className="flex flex-col gap-10 items-end pt-12 px-6 my-10 max-w-sm mx-auto md:pt-5 md:flex-row md:max-w-2xl md:px-0 md:items-center md:justify-between">
        <div className="flex flex-col justify-center text-center gap-5 text-white md:w-[63%]  md:text-left">
          <h3 className="text-lg sm:text-xl font-bold md:text-2xl">
            Monitor Schooling Activities right From Your Phone With Our School
            Management System
          </h3>
          <div className="flex flex-col gap-2 justify-center md:flex-row md:justify-start md:items-center md:gap-6">
            <Link to="/home/get-started">
              <div>
                <Button bg="text-green" text="bg-white" info="Get Started" padding="py-2 px-4"/>
              </div>
            </Link>
            <p>Login </p>
          </div>
        </div>
        <div className="md:w-[30%]">
          <div className="w-[188px] h-[228px]">
            <img src={imgCtr} alt="imgCtr" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CentralCtr;
