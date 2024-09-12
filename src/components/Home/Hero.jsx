import React from "react";

const Hero = () => {
  return (
    <div className="w-full horizontal-padding h-screen flex flex-col items-start justify-center gap-6 2xl:gap-12 text-white relative">
      {/* <video autoPlay muted loop className="w-full h-full absolute inset-0 z-0">
        <source src="/bravo-foxtrot.mp4" />
      </video> */}
      <img
        src="/logo.png"
        alt=""
        className="w-auto h-[90%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-40"
      />

      <h1 className="text-4xl md:text-5xl lg:text-[89px] xl:text-[99.7px] 2xl:text-[129px] lg:leading-[116px] 2xl:leading-[136px] font-bold tracking-tight uppercase quantico-fonts z-10">
        Redefining Safety Through Innovation
      </h1>
      <p className="lg:ml-3 text-2xl 2xl:text-4xl tracking-wide z-10">
        Courage. Commitment. Justice.
      </p>
    </div>
  );
};

export default Hero;
