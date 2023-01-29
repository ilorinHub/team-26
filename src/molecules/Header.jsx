import React from "react";
import Logo from "../assets/Logo 1.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import menu from "../assets/menu.png";
function Header() {
  const [isNav, setIsNav] = useState(false);
  return (
    <div>
      <div className="md:hidden flex justify-between p-4 items-center">
        {" "}
        <img
          src={Logo}
          alt="kwara state government logo"
          className="w-10 h-10"
        />{" "}
        <img src={menu} className="w-6 h-6" onClick={() => setIsNav(!isNav)} />
      </div>
      {isNav ? (
        <div className="border border-green md:hidden">
          {" "}
          <HashLink
            to="#departments"
            className="block border border-b-green p-4 hover:bg-green/80 hover:text-white"
          >
            Departments
          </HashLink>
          <HashLink
            to="#about"
            className="block border border-b-green p-4 hover:bg-green/80 hover:text-white"
          >
            About
          </HashLink>
          <HashLink
            to="#contact"
            className="block border border-b-green p-4 hover:bg-green/80 hover:text-white"
          >
            Contact
          </HashLink>
          <Link
            to="get-started"
            className="block border border-b-green p-4 hover:bg-green/80 hover:text-white"
          >
            <button className="bg-green p-1 px-3 text-white ">
              Get Started
            </button>
          </Link>
        </div>
      ) : (
        ""
      )}
      <div className="hidden md:flex justify-between md:px-20 py-6 items-center bg-white">
        <img
          src={Logo}
          alt="kwara state government logo"
          className="w-16 h-16"
        />
        <div className="space-x-10">
          {" "}
          <HashLink to="#departments">Departments</HashLink>
          <HashLink to="#about">About</HashLink>
          <HashLink to="#contact">Contact</HashLink>
          <Link to="get-started">
            <button className="bg-green p-1 px-3 text-white ">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
