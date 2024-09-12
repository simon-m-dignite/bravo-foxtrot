import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";

const AboutUsHero = () => {
  const SectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: SectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);

  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <main
      ref={SectionRef}
      className="w-full horizontal-padding h-[60vh] lg:h-screen flex flex-col items-start justify-center gap-6 2xl:gap-12 relative"
    >
      {/* <video autoPlay muted loop className="w-full h-full absolute inset-0 z-0">
        <source src="/bravo-foxtrot.mp4" />
      </video> */}
      <img
        src="/logo.png"
        alt=""
        className="w-auto h-[90%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-40"
      />
      <motion.div
        className="absolute w-full h-[120%] -z-10"
        style={{ top: y }}
      ></motion.div>
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl md:text-5xl lg:text-[89px] xl:text-[109.7px] 2xl:text-[129px] lg:leading-[96px] 2xl:leading-[136px] font-bold tracking-tight uppercase quantico-fonts z-10"
      >
        who we are
      </motion.h1>
      <motion.p
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="lg:ml-3 text-[17px] 2xl:text-xl tracking-wide lg:w-2/3 z-10"
      >
        Bravo Foxtrot is a leading software company specializing in innovative
        and practical software solutions that incorporate AI and ML to combat
        criminal and illicit activities.
      </motion.p>
    </main>
  );
};

export default AboutUsHero;
