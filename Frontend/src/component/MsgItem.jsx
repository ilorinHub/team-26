import React from "react";

function MsgItem({ sender, subject, body, time }) {
  return (
    <div className="flex items-center justify-between px-6 space-x-4 my-4 w-full md:w-[60%] mx-auto ">
      <div className="w-10 h-10 rounded-full bg-[#D9D9D9] my-4"></div>
      <div className="flex items-start w-[90%] justify-between space-x-8">
        <div className="grow">
          <h3 className="font-bold">
            {sender} - {subject}
          </h3>
          <p>{body}</p>
        </div>{" "}
        <div>
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
}

export default MsgItem;
