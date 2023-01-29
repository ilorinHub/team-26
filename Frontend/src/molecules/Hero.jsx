import React from "react";

function Hero() {
  return (
    <div className="relative h-[80vh] flex px-4 md:px-20 items-center text-center md:text-left bg-[url('../assets/background.jpg')] bg-fixed md:bg-cover mx-5 md:mx-0">
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-r  from-green/80 to-green/10 z-[2]" />
      <div className="z-[2] text-white absolute px-4 md:w-[50%]">
        <h1 className=" text-2xl md:text-6xl  leading-[2.5rem] md:leading-[4rem] font-bold mb-2 md:tracking-wide  ">
          Ministry of Education and Human Capital Development
        </h1>
        <p>P.M.B 1391, Ilorin Kwara State.</p>
      </div>
    </div>
  );
}

export default Hero;
