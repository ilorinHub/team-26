import React from "react";
import { useState } from "react";
import TeacherLogin from "../atoms/TeacherLogin";
import Button from "../component/Button";
import authImg from "../assets/authImg.svg";
import Logo from "../assets/Logo 1.png";
import { Link } from "react-router-dom";

function LoginForm() {

  const [loginAs, setLoginAs] = useState("");
  const [form, setForm] = useState("");

  return (
    <section className="auth">
      <div className="flex flex-col-reverse md:flex-row items-stretch">
        <div className="w-full md:w-[55%] md:h-screen hidden md:flex">
          <img
            src={authImg}
            alt="authImg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="py-16 px-5 flex gap-10 flex-col max-w-[450px] mx-auto md:w-[45%] md:gap-12">
          <div className="text-center flex flex-col items-center gap-4">
            <div>
              <img src={Logo} className="w-20 h-20" alt="coat of arm" />
            </div>
            <p className="text-lg font-black text-green md:text-2xl max-w-sm ">
              Ministry of Education and <br />
              Human Capital Development
            </p>
          </div>

          <div 
          className={!form ? "block" : "hidden"}
          >
            <form className="btn flex flex-col gap-3  font-medium text-base md:gap-6">
              <label> Login as...</label>
              <select
                name=""
                id=""
                className="border-green border p-2 px-6 text-green"
                onChange={({ target }) => setLoginAs(target.value)}
              >
                <option value="" disabled selected className="text-gray-100">
                  Select one
                </option>
                <option value="admin"> Admin</option>
                <option value="department">Department</option>
                <option value="school">School</option>
              </select>
              <div onClick={() => setForm(loginAs)}>
                <Button
                  bg="text-white"
                  text="bg-green"
                  info="Proceed"
                  padding="py-2"
                  font="text-base"
                  width="w-full"
                  type="button"
                />
              </div>
            </form>
            <p className="text-center text-[#7E7B7B] text-sm my-10">
              Select the appropriate account you have with us and click on
              “Proceed”.
            </p>
          </div>
           {form && 
          <TeacherLogin />
          }
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
