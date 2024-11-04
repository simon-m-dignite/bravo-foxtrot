import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <div className="w-full horizontal-padding h-[80vh] lg:h-screen flex flex-col items-start justify-center gap-6 2xl:gap-12 text-white relative">
      {/* <video autoPlay muted loop className="w-full h-full absolute inset-0 z-0">
        <source src="/bravo-foxtrot.mp4" />
      </video> */}
      <img
        src="/logo.png"
        alt=""
        className="w-auto h-[70%] lg:h-[90%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-40"
      />

      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl md:text-5xl lg:text-[89px] xl:text-[99.7px] 2xl:text-[129px] lg:leading-[116px] 2xl:leading-[136px] font-bold tracking-tight uppercase quantico-fonts z-10"
      >
        Redefining Safety Through Innovation
      </motion.h1>
      <motion.p
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="lg:ml-3 text-xl 2xl:text-4xl tracking-wide z-10"
      >
        Courage | Commitment | Justice.
      </motion.p>
    </div>
  );
};

export default Hero;
