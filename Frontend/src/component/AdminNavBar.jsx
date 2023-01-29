import React from "react";
import schoolIcon from "../assets/School icon.png";
import TrackIcon from "../assets/Track icon.png";
import composeIcon from "../assets/Compose icon.png";
import departmentIcon from "../assets/departmentIcon.png";
import { Link } from "react-router-dom";

function AdminNavBar() {
  const linkdata = [
    {
      icon: composeIcon,
      text: "Memos & Letters",
      alt: "Compose Icon",
      link: "Memos",
    },
    {
      icon: departmentIcon,
      text: "Departments",
      alt: "Department Icon",
      link: "departments",
    },
    {
      icon: schoolIcon,
      text: "Schools",
      alt: "School Icon",
      link: "schools",
    },
    {
      icon: TrackIcon,
      text: "Track",
      alt: "Track Icon",
      link: "track",
    },
  ];

  return (
    <div
      className="hidden admin-section w-[25%] md:flex flex-col min-h-screen pb-4 pt-16 bg-[#2AA96D36]
 text-white px-10"
    >
      <div className="w-[65%] mx-auto pb-7 text-black">
        <h1 className="font-extrabold text-3xl">Admin</h1>
        <p className="my-1">Horizon</p>
      </div>

      <div className="flex flex-col items-start w-full gap-2 flex-1 p-0 ">
        {linkdata.map((elem) => (
          <Link
            to={`/dashboard/${elem.link.toLowerCase()}`}
            key={elem.text}
            className="w-full"
          >
            <div className="flex items-center justify-start w-full px-6 py-4 gap-5 text-black hover:bg-[#2AA96D61]">
              <div>
                <img className="w-[20px]" src={elem.icon} alt={elem.alt} />
              </div>
              <p className="text-base">{elem.text}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center cursor-pointer justify-start w-full px-6 py-1 gap-5 text-black">
        <div>
          <img className="w-[20px]" src={schoolIcon} alt="school Icon" />
        </div>
        <p className="text-base">Logout</p>
      </div>
    </div>
  );
}

export default AdminNavBar;
