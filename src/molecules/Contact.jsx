import React, { useState } from "react";
import Button from "../component/Button";
import line from "../assets/line.svg";

function Contact() {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialState);

  const onChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="w-[90%] mx-auto py-10 max-w-2xl md:max-w-5xl" id="contact">
      <div className="text-center ">
        <h4 className="text-xl text-green font-bold">Connect with Kwara</h4>
        <p className="font-extrabold my-1">How Can We Help? Let's Talk</p>
        <div className="flex justify-center my-5">
          <img src={line} alt="" />
        </div>
      </div>
      <div className="contact-form">
        <form className="mt-9">
          <div className="flex flex-col gap-6 mb-9 md:flex-row">
            <div className="input md:flex-1">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={onChange}
              />
            </div>
            <div className="input md:flex-1">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={onChange}
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 mb-9 md:flex-row">
            <div className="input md:flex-1">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={onChange}
              />
            </div>
            <div className="input md:flex-1">
              <input
                type="text"
                name="company"
                placeholder="company"
                value={formData.company}
                onChange={onChange}
              />
            </div>
          </div>
          <textarea
            className="pb-[180px] px-5 pt-3"
            name="message"
            onChange={onChange}
            placeholder="How Can we assist you?"
          ></textarea>
        </form>

        <div className="mt-6">
          <Button
            bg="bg-green"
            text="text-white"
            info="Send Message"
            padding="py-2 px-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
