import React from "react";
import coatOfArm from "../assets/coatOfArm.svg";
import line from "../assets/line.svg";
import Button from "../component/Button";

function Footer() {
  return (
    <div className="bg-[#2A2A2A] text-white pt-10 pb-14 md:pb-10">
      <div className="w-[90%] mx-auto max-w-xl md:max-w-5xl">
        <div className="flex flex-col gap-10 pb-10 md:flex-row md:items-end md:pb-16 md:justify-between">
          <div className="text-center flex flex-col items-center gap-4 md:items-start md:text-left">
            <div>
              <img src={coatOfArm} className="w-[91px]" alt="coat of arm" />
            </div>
            <p className="text-base font-extrabold max-w-[180px]">
              Ministry of Education and Human Capital Development
            </p>
          </div>
          <div className="text-center flex flex-col items-center gap-10 mx-auto md:items-start md:gap-7 md:mx-0">
            <p className="text-sm capitalize md:text-xl">
              receive timely updates from the ministry
            </p>
            <div className="input w-full flex flex-col gap-4 md:flex-row md:gap-0">
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className="w-full py-3 px-4"
              />
              <div>
                <Button
                  bg="bg-green"
                  text="text-white"
                  info="Subscribe"
                  padding="px-7 py-3 md:px-5"
                />
              </div>
            </div>

            <ul className="flex gap-6">
              <li>Departments</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="w-full flex flex-col gap-3 justify-center text-center">
          <div className="h-[0.1em] w-full bg-green"></div>
          <p className="text-sm">Copyright © 2023</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
