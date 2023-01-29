import React from "react";
import Memo from "../molecules/Memo";
import { useState } from "react";
import Nav from "../component/Nav";

import AdminNavBar from "../component/AdminNavBar";
import FilterMemo from "../component/FilterMemo";

function Dashboard() {
  const [isNav, setIsNav] = useState(false);
  const [render, setRender] = useState("memo");

  return (
    <div className="md:flex justify-between">
        <Nav />
      <div className="w-[50%]">
        <Memo setisNav={setIsNav} isNav={isNav} />
      </div>
      <FilterMemo/>
    </div>
  );
}

export default Dashboard;

