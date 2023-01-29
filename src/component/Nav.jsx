import React, { useState } from "react";
import DashBoardNavbar from "../component/DashBoardNavbar";
import menu from "../assets/whiteMenu.png";
import polygon from "../assets/Polygon 1.png";
import schoolIcon from "../assets/School icon.png";
import TrackIcon from "../assets/Track icon.png";
import composeIcon from "../assets/Compose icon.png";
import departmentIcon from "../assets/departmentIcon.png";

import AdminNavBar from "./AdminNavBar";

const linkdata = [
  {
    icon: composeIcon,
    text: "Memos & Letters",
    alt: "Compose Icon",
    nav: "memos",
  },
  {
    icon: departmentIcon,
    text: "Departments",
    alt: "department Icon",
    nav: "departments",
    child: [
      "Min. of Finance",
      "Min. of Works",
      "Min. of Housing",
      "Min. of Planning",
    ],
  },
  {
    icon: schoolIcon,
    text: "Schools",
    alt: "School Icon",
    nav: "schools",
  },
  {
    icon: TrackIcon,
    text: "Track Correspondence",
    alt: "Track Icon",
    nav: "track",
  },
];

function Nav() {
  const [isNav, setIsNav] = useState(false);

  return (
    <>
      <div className="md:hidden">
        <div className={!isNav ? "hidden" : "block"}>
          <div>
            <DashBoardNavbar
              setIsNav={setIsNav}
              isNav={isNav}
              links={linkdata}
              title="Admin"
            />
          </div>
        </div>
        <div className="bg-green flex md:hidden justify-between p-10">
          <div onClick={() => setIsNav(!isNav)}>
            <img src={menu} alt="menu icon" />
          </div>
          <div className="flex items-center  space-x-4">
            <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full ">
              Hz
            </div>
            <div>
              <img src={polygon} alt=" polygon" />
            </div>
          </div>
        </div>
      </div>
      <AdminNavBar />
    </>
  );
}

export default Nav;
