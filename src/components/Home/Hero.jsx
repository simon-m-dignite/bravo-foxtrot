import React from "react";

const Hero = () => {
  return (
    <div className="w-full horizontal-padding h-screen flex flex-col items-start justify-center gap-6 2xl:gap-12 text-white">
      <video autoPlay muted loop className="w-full h-full absolute inset-0 z-0">
        <source src="/bravo-foxtrot.mp4" />
      </video>
      <h1 className="text-4xl md:text-5xl lg:text-[89px] xl:text-[129.7px] 2xl:text-[129px] lg:leading-[116px] 2xl:leading-[136px] font-medium tracking-tight uppercase quantico-fonts z-10">
        Redefining <br /> Safety Through <br /> Innovation
      </h1>
      <p className="lg:ml-3 text-2xl 2xl:text-4xl tracking-wide z-10">
        Courage. Commitment. Justice.
      </p>
    </div>
  );
};

export default Hero;
