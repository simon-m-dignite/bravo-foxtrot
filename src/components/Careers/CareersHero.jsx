import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CareersHero = () => {
  const scrollToOpenPositions = () => {
    const section = document.getElementById("open-positions");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [headingRef, headingInView] = useInView({ triggerOnce: true });
  const [textRef, textInView] = useInView({ triggerOnce: true });
  const [buttonRef, buttonInView] = useInView({ triggerOnce: true });

  return (
    <main className="w-full horizontal-padding pt-32 pb-20 flex flex-col items-center gap-y-6 bg-black text-white">
      <motion.h1
        ref={headingRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: headingInView ? 1 : 0, y: headingInView ? 0 : 50 }}
        transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1] }}
        className="text-4xl md:text-5xl lg:text-[89px] xl:text-[99.7px] 2xl:text-[129px] lg:leading-[96px] 2xl:leading-[136px] font-bold tracking-tight uppercase quantico-fonts"
      >
        Careers
      </motion.h1>

      <motion.p
        ref={textRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : 50 }}
        transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.2 }}
        className="text-size lg:w-2/3 mx-auto text-center 2xl:w-1/2 2xl:leading-8"
      >
        Get ready for something big! We’re gearing up for expansion and on the
        lookout for amazing people to join our marketing, sales, development,
        and support teams. Stay tuned for exciting updates on how you can be
        part of Bravo Foxtrot’s mission to revolutionize and elevate public
        safety!
      </motion.p>

      <motion.div
        ref={buttonRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: buttonInView ? 1 : 0, y: buttonInView ? 0 : 50 }}
        transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.4 }}
        className="mt-6"
      >
        <button
          type="button"
          onClick={scrollToOpenPositions}
          className="yellow-bg px-10 py-3 rounded-full text-[16px] font-semibold"
        >
          Join Us
        </button>
      </motion.div>
    </main>
  );
};

export default CareersHero;
