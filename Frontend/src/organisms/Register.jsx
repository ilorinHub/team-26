import React from "react";
import coatOfArm from "../assets/coatOfArm.svg";

import Button from "../component/Button";
import { useState } from "react";
import RegisterForm from "../molecules/RegisterForm";
import LeftImage from "../component/LeftImage";

function Register() {
  const [form, setForm] = useState("");
  const [regAs, setRegAs] = useState(false);

  const onChange = (e) => {
    setForm(e.target.value);
  };

  const handleProceed = () => {
    if (form != "") {
      setRegAs(!regAs);
    }
  };

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

          {!regAs ? (
            <div>
              <div className="btn flex flex-col gap-3 font-medium text-base md:gap-6">
                <div className="input-select flex flex-col gap-3 items-start w-full">
                  <label htmlFor="Register">Register as...</label>
                  <select
                    name="select"
                    id="select"
                    className="text-green w-full py-2 px-3 cursor-pointer outline outline-green outline-2"
                    onChange={onChange}
                  >
                    <option value="" disabled selected>
                      Select one
                    </option>
                    <option value="deparment">Deparment</option>
                    <option value="school">School</option>
                    <option value="admin">Admin</option>

                  </select>
                </div>
                <div onClick={handleProceed}>
                  <Button
                    bg="text-white"
                    text="bg-green"
                    info="Proceed"
                    padding="py-2"
                    font="text-base"
                    width="w-full"
                  />
                </div>
              </div>
              <p className="mt-10 text-[#7E7B7B] text-center text-base">
                Select the appropriate account you wish to have with us and
                click on “Proceed”.
              </p>
            </div>
          ) : (
            <RegisterForm form={form} />
          )}
        </div>
      </div>
    </section>
  );
}

export default Register;
