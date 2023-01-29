import React from "react";
import Button from "./Button";
import Nav from "./Nav";
import reply from "../assets/reply.png";
import bin from "../assets/deleteIcon.svg";
import AdminNavBar from "./AdminNavBar";
import DashBoardNavbar from "./DashBoardNavbar";
import { useState } from "react";

function MsgView({ subject, box, sender, img, time, message, id, priority }) {
  const [showActions, setShowActions] = useState(false);
  return (
    <div className="flex flex-col md:flex-row md:justify-between pr-[10rem] ">
      <AdminNavBar />

      <div className="md:ml-20 mt-10 ">
        <div className=" flex items-center  justify-between px-5 mt-12">
          <div className="w-20 h-20 rounded-full bg-gray-300"></div>
          <div className="grow ml-4">
            <h3 className="font-bold text-2xl ">{subject} </h3>
            <p className="text-lg">{sender}</p>
            <p className="text-sm">{time}</p>
          </div>
          <div className=" flex flex-col space-y-2 items-center justify-center ">
            <Button
              text="bg-[#D9D9D9]"
              info={id}
              padding="py-2 px-3"
              font="text-base"
              width="w-full"
            />
            <Button
              bg="text-white"
              text="bg-[#EC2F2F]"
              info={priority}
              padding="py-1"
              font="text-base"
              width="w-full"
            />
          </div>
        </div>
        <div className="p-10">
          <p className="my-5">Dear Sir,</p>

          <p>{message}</p>
        </div>
      </div>
      <div className=" flex mt-[5.5rem] ml-20">
        <div className={!showActions ? "block" : "hidden"}>
          <div
            className="flex flex-col items-center justify-center space-y-1 w-8 h-8 hover:bg-black/60"
            onClick={() => setShowActions(true)}
          >
            {" "}
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <div className="w-1 h-1 bg-black rounded-full"></div>
          </div>
        </div>
        <div
          className={
            showActions
              ? "block absolute top-0 left-0 bottom-0 right-0 z-10 w-full  h-full"
              : "hidden"
          }
          onClick={() => setShowActions(false)}
        >
          <div className="bg-white shadow-lg w-fit h-fit p-7 space-y-4 -mt-4 absolute top-[6.5rem] right-20">
            <p>Approve</p>
            <p>Disapprove</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MsgView;
