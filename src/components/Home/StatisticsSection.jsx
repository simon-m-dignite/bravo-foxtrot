import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatisticsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // This makes sure the count happens only once when the element comes into view
    threshold: 0.5, // Percentage of the element that should be visible before triggering
  });

  const SectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: SectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);
  const refAnimate = useRef(null);
  const isInView = useInView(refAnimate, { once: true });

  return (
    <section className="w-full py-12 lg:py-20 horizontal-padding flex flex-col items-center justify-center gap-5 min-h-screen relative text-white">
      <motion.div
        className="absolute w-full h-[120%] -z-10"
        style={{ top: y }}
      ></motion.div>

      <div className="w-full lg:w-2/3 2xl:w-1/2 mx-auto mt-10 flex flex-col gap-y-16">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
          <div ref={ref} className="flex flex-col items-start">
            <h3 className="quantico-fonts lg:text-[84px]">
              <CountUp
                start={200}
                end={250}
                duration={3}
                className="quantico-fonts lg:text-[88px]"
              />
              M+
            </h3>
            <p className="red-text text-size">Capital Raised</p>
          </div>
          <div></div>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
          <div></div>
          <div ref={ref} className="flex flex-col items-end">
            <h3 className="quantico-fonts lg:text-[84px]">
              <CountUp
                start={850}
                end={900}
                duration={3}
                className="quantico-fonts lg:text-[84px]"
              />
              +
            </h3>

            <p className="red-text">Lots Developed</p>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
          <div ref={ref} className="flex flex-col items-start">
            <h3 className="quantico-fonts lg:text-[84px]">
              <CountUp
                start={60}
                end={100}
                duration={3}
                className="quantico-fonts lg:text-[84px]"
              />
              +
            </h3>
            <p className="red-text">Projects Developed</p>
          </div>
          <div></div>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
          <div></div>
          <div ref={ref} className="flex flex-col items-end">
            <h3 className="quantico-fonts lg:text-[84px]">
              <CountUp
                start={400}
                end={500}
                duration={3}
                className="quantico-fonts lg:text-[84px]"
              />
              +
            </h3>
            <p className="red-text">Homes Built</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
