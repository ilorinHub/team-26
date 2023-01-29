import React from "react";
import LandingCards from "../molecules/LandingCards";
import LandingHero from "../molecules/LandingHero";
import illustration from "../assets/illustration.png";
import Pricing from "../molecules/Pricing";
import LandingContact from "../molecules/LandingContact";
function Landingpage() {
  return (
    <div className="font-nunito text-gray-800 bg-[#F0ECFA]">
      <LandingHero />
      <LandingCards />
      <div className="w-full">
        <img src={illustration} alt="" className="w-full" />
      </div>
      <Pricing />
      <LandingContact />
    </div>
  );
}

export default Landingpage;
