import React from "react";
import authImg from "../assets/authImg.svg";

function LeftImage() {
  return (
    <div className="w-full md:w-[55%] md:min-h-screen">
      <img src={authImg} alt="authImg" className="w-[full] h-full object-cover" />
    </div>
  );
}

export default LeftImage;
