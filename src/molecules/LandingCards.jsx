import React from "react";
import star from "../assets/Star 2.png";

const data = [
  {
    text: "“The accuracy and convenience of this company's tracking system is unmatched.”",
    name: "Taofik Ojo",
    company: "Lead Partner, PLAT Co.",
  },
  {
    text: "Horizon helped me manage my business records and life has been so easy for me ever since.",
    name: "Kazeem Onilu",
    company: "CEO, Oni Hub",
  },
  {
    text: "This tracking system has saved me countless hours and headaches. Highly recommend it!",
    name: "Faridat Rufai",
    company: "Realtor",
  },
];
function LandingCards() {
  return (
    <div className="card-shadow w-[80%] h-fit flex mt-40 mx-auto mb-20 ">
      {data.map((elem) => (
        <div className="w-[400px]  py-10 flex flex-col items-center text-center bg-white  mb-10 shadow-2xl">
          <p className="w-[210px] mt-8 mb-10 font-bold">{elem.text}</p>
          <div className="font-bold -space-y-1 ">
            <p className="text-xl">{elem.name}</p>
            <p>{elem.company}</p>
          </div>
          <div className="flex space-x-4 items-center w-60 mx-auto justify-center my-6">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default LandingCards;
