import { useState } from "react";
import { RiArrowDownSLine, RiErrorWarningLine } from "react-icons/ri";
import Nav from "./Nav";
import FingerPrint from "./FingerPrint";

function Compose() {
  const [selectOption, setSelectOption] = useState(false);
  const [inputInfo, setInputInfo] = useState('');

  const [formData, setFormData] = useState({});

  const options = [
    {
      id: 1,
      select: "Internal",
    },
    {
      id: 2,
      select: "Persons",
    },
    {
      id: 3,
      select: "Organisations",
    },
  ];

  const handleCheck = (e) => {
    setInputInfo(e.target.value)
  }

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };


  return (
    <div className="md:flex">
      <Nav />
      <div className="py-10 w-[90%] max-w-xl mx-auto">
        <div>
          <h1 className="text-lg md:text-xl text-center font-bold my-5">Compose</h1>
        </div>

        <form className="select-input flex flex-col gap-4">
            <div
              onClick={() => setSelectOption(!selectOption)}
              className="p-2 pl-6 pr-3 cursor-pointer border border-[#000] flex justify-between items-center"
            >
              <p>Recipient</p>
              <RiArrowDownSLine className="text-green font-black text-xl" />
            </div>

          {selectOption && (
              <div className="flex flex-col mt-2 gap-3 py-2 px-5 border border-[#000]">
                {options.map((opt) => (
                  <div
                    key={opt.id}
                    className="flex items-center justify-between"
                    >
                    <div className="flex gap-3 items-center">
                      <input type="radio" name="recipientSelect" id="recipientSelect" value={opt.select} className="text-green cursor-pointer" onChange={handleCheck}/>
                      <p>{opt.select}</p>
                    </div>
                    <RiErrorWarningLine className="w-5 text-[#A9A9A9]" />
                  </div>
                ))}
              </div>
          )}

          <div className="input">
            <label htmlFor="Recipient">Recipient’s email</label>
            <input name="email" type="text" placeholder="Enter recipient email" onChange={handleChange}/>
          </div>

          <div className="input">
          <label htmlFor="Address">Address</label>
            <input name="address" type="text" placeholder="Address" onChange={handleChange}/>
          </div>

          <div className="input">
          <label htmlFor="level">Priority Level</label>
            <input name="level" type="text" placeholder="Priority Level" onChange={handleChange}/>
          </div>

          <div className="input">
          <label htmlFor="Location">Location</label>
            <input name="location" type="text" placeholder="Location" onChange={handleChange}/>
          </div>

          <div className="input">
            <label htmlFor="Subject">Subject</label>
              <input name="subject" type="text" placeholder="Subject" onChange={handleChange}/>
          </div>

          <textarea
            className="pb-[130px] px-5 pt-5 border border-[#000]"
            name="message"
            placeholder="Write your message"
            onChange={handleChange}
          ></textarea>

        </form>
        <FingerPrint text="Send Message"/>
      </div>
    </div>
  );
}

export default Compose;
