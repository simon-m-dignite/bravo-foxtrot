import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

const AboutUsHero = () => {
  const SectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: SectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);

  return (
    <main
      ref={SectionRef}
      className="w-full horizontal-padding h-[60vh] lg:h-screen flex flex-col items-start justify-center gap-6 2xl:gap-12 relative"
    >
      <video autoPlay muted loop className="w-full h-full absolute inset-0 z-0">
        <source src="/bravo-foxtrot.mp4" />
      </video>
      <motion.div
        className="absolute w-full h-[120%] -z-10"
        style={{ top: y }}
      ></motion.div>
      <h1 className="text-5xl md:text-5xl lg:text-[89px] xl:text-[109.7px] 2xl:text-[129px] lg:leading-[96px] 2xl:leading-[136px] font-bold tracking-tight uppercase quantico-fonts z-10">
        who we are
      </h1>
      <p className="lg:ml-3 text-[17px] 2xl:text-xl tracking-wide lg:w-2/3 z-10">
        Bravo Foxtrot is a leading software company specializing in innovative
        and practical software solutions that incorporate AI and ML to combat
        criminal and illicit activities.
      </p>
    </main>
  );
};

export default AboutUsHero;
