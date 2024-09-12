import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CurrentOpenings = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="w-full py-12 lg:py-20 flex flex-col items-center gap-6 bg-black text-white"
      id="open-positions"
      ref={sectionRef}
    >
      <motion.h2
        className="uppercase quanitco-fonts red-text font-semibold"
        initial={{ opacity: 0, y: 50 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        Current Openings
      </motion.h2>

      <motion.h3
        className="section-heading text-center lg:leading-[70px]"
        initial={{ opacity: 0, y: 50 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
      >
        Want to join Team <br /> Bravo Foxtrot
      </motion.h3>

      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 50 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
      >
        <h4 className="quantico-fonts font-bold red-text text-xl">
          Coming Soon
        </h4>
      </motion.div>
    </section>
  );
};

export default CurrentOpenings;
