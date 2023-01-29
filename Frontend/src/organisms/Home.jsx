import React from "react";
import Departments from "../molecules/Departments";
import Header from "../molecules/Header";
import Hero from "../molecules/Hero";
import RLanding from "../molecules/RLanding";
import SlideShow from "../molecules/SlideShow";
import CentralCtr from "../molecules/CentralCtr";
import Contact from "../molecules/Contact";
import Footer from "../molecules/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Departments />
      <SlideShow />
      <RLanding />
      <CentralCtr />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
