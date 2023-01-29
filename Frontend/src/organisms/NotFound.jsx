import React from "react";
import { Link } from "react-router-dom";


const NotFound = () => {

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center w-[40%] mx-auto my-10">
            <h1 className="my-5">Not found</h1>
          <button className=" text-white font-semibold text-base md:text-lg bg-[#0F0F0F] shadow-xl p-4 rounded-lg "><Link to='/'>Go Back</Link> </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;