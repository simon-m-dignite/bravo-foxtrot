import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <main className="w-full h-[60vh] lg:h-screen horizontal-padding flex justify-center items-center text-white">
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl xl:text-[99.7px] 2xl:text-[129px] lg:leading-[96px] 2xl:leading-[136px] font-bold tracking-tight uppercase quantico-fonts text-center"
      >
        WE TURN YOUR WISHES INTO BRILLIANT SOLUTIONS
      </motion.h1>
    </main>
  );
};

export default Hero;
