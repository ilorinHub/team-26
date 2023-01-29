import React from "react";
import Button from "../component/Button";
import MsgItem from "../component/MsgItem";
import composeIcon from "../assets/Compose icon.png";
import plus from "../assets/plus.png";
import imgDefault from "../assets/imgDefault.svg";

import { Link } from "react-router-dom";
import Nav from "../component/Nav";
import AdminNavBar from "../component/AdminNavBar";

function Memo() {
  return (
    <div className="md:flex gap-10"> 
      <Nav/>

      <div className="md:pt-16 md:w-[60%] md:max-w-3xl">
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search message"
            className="py-3 px-8 border border-green w-full"
          />
        </div>
        <div className="flex flex-col  items-center">
          <div className="flex items-center space-x-3 justify-center mt-10">
            <img src={composeIcon} alt=" compose icon" />
            <h1 className="font-bold text-xl">Memos & Letters</h1>
          </div>

          <div className="flex w-[55%] pl-2 mt-8 md:w-full">
            <Button
              bg="text-white"
              text="bg-green"
              info="Inbox"
              padding="py-2"
              font="text-base"
              width="w-full"
              type="button"
            />
            <Button
              bg="text-green"
              text="bg-white"
              info="Outbox"
              padding="py-2"
              font="text-base"
              width="w-full"
              type="button"
              border="border border-green"
            />
          </div>
        </div>
        <div className="relative">
          <MsgItem
            sender="Gbenga Adeyemi"
            subject="subject"
            time="3:10"
            body="body of the message"
          />
          <MsgItem
            sender="Gbenga Adeyemi"
            subject="subject"
            time="3:10"
            body="body of the message"
          />
          <MsgItem
            sender="Gbenga Adeyemi"
            subject="subject"
            time="3:10"
            body="body of the message"
          />
          <MsgItem
            sender="Gbenga Adeyemi"
            subject="subject"
            time="3:10"
            body="body of the message"
          />
          <Link to="/dashboard-compose">
            <div className="absolute right-2 -bottom-12">
              <img src={plus} alt="plus icon" />
            </div>
          </Link>
        </div>
      </div>
      <div className="md:pt-16 flex flex-col gap-4 text-center">
        <div className="flex justify-center items-center">
          <img src={imgDefault} alt="imgDefault" />
        </div>
        <select name="" id="" className="border border-green p-3 cursor-pointer outline-none text-green">
          <option value="Sort by..." disabled>Sort by...</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
    </div>
    
  );
}

export default Memo;
