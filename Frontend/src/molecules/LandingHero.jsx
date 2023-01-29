import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/hzLogo.png";
import laptop from "../assets/laptop.png";
const Navbar = () => {
  return (
    <div className="flex justify-between w-full items-center p-10">
      <div>
        <img src={logo} alt="Horizon logo" />
      </div>
      <div className="flex justify-between items-center space-x-5 text-xl ">
        <HashLink>Solutions</HashLink>
        <HashLink>Pricing</HashLink>
        <HashLink>Clients</HashLink>
        <HashLink>Blogs</HashLink>
        <HashLink>Contact </HashLink>
      </div>
    </div>
  );
};
function LandingHero() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col items-center text-2xl w-[50%] mx-auto  text-center mt-[7rem] ">
        <h1 className="text-6xl leading-[66.4px] mb-4">
          Revolutionize the way you <strong>Track & Manage</strong> your assets
          with our innovative system
        </h1>
        <Link to="/home">
          <button className="bg-gradient-to-r from-[#452C92] to-[#754DEE] rounded-lg p-4 mt-8 text-white font-bold px-8 mb-4">
            View Case Study
          </button>
        </Link>
      </div>
      <div className="w-[95%] h-[32rem] bg-gradient-to-r mt-20 rounded-[2rem] from-[#452C92] to-[#754DEE] mx-auto relative p-[146px] ">
        <p className="w-[33rem] text-white text-[40px] absolute top-[35%] leading-[128%]">
          Seamlessly Track All Correspondence Without The Fear of{" "}
          <strong>"A Missing File"</strong>
        </p>
        <div className="z-10 absolute top-0 -right-2">
          <img src={laptop} alt="mockup of the website" />
        </div>
      </div>
    </div>
  );
}

export default LandingHero;
