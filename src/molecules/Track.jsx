import React from "react";
import AdminNavBar from "../component/AdminNavBar";
import Button from "../component/Button";
import map from "../assets/map.png";
function Track() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between">
      <AdminNavBar />
      <div className="flex flex-col items-center w-[100vw]">
        <div className="w-full h-[60%] md:flex  bg-[url('../assets/map.png')] bg-cover">
          {/* <img src={map} alt="map image" className="w-full h-full " /> */}
        </div>
        <div className="mt-20">
          <p className="mb-4">Tracking ID</p>
          <div className="flex space-x-8">
            <div>
              <input
                placeholder="KWS/CRD_2"
                className="border border-green pl-6 p-2 w-[30rem]"
              />
            </div>
            <Button
              bg="text-white"
              text="bg-green"
              info="Track Correspondence"
              padding="py-2 px-16"
              font="text-base"
              width="w-full"
              type="button"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Track;
