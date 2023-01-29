import React from "react";
import authImg from "../assets/authImg.svg";
import coatOfArm from "../assets/coatOfArm.svg";
import { Link } from "react-router-dom";
import LeftImage from "../component/LeftImage";

function Auth() {
  return (
    <section className="auth">
      <div className="flex flex-col-reverse md:flex-row items-stretch">
        <LeftImage />

        <div className="py-16 px-5 flex gap-10 flex-col max-w-[450px] mx-auto md:w-[45%] md:gap-12">
          <div className="text-center flex flex-col items-center gap-4">
            <div>
              <img src={coatOfArm} className="w-[127px]" alt="coat of arm" />
            </div>
            <p className="text-lg font-black text-green md:text-2xl max-w-sm">
              Ministry of Education and Human Capital Development
            </p>
          </div>

          <div>
            <div className="btn flex flex-col gap-3 text-green font-medium text-base md:gap-6">
              <Link to="/login">
                <button>Log In</button>
              </Link>
              <Link to="/register">
                <button>Create account</button>
              </Link>
            </div>
            <p className="mt-10 text-[#7E7B7B] text-center text-base">
              Click on “Log in” if you already have an account. <br /> Click on
              “Create account” if you wish to create an account with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Auth;
